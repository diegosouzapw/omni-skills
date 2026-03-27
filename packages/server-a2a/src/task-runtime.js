import { EventEmitter } from "node:events";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import {
  buildInstallPlan,
  getHealthSnapshot,
  listBundles,
  loadCatalog,
  recommendSkills,
  searchSkills,
} from "../../catalog-core/src/index.js";

const TERMINAL_STATES = new Set(["completed", "canceled", "failed", "rejected", "unknown"]);
const INTERRUPTED_STATES = new Set(["input-required", "auth-required"]);
const NOTIFIABLE_STATES = new Set(["completed", "canceled", "failed", "rejected", "input-required", "auth-required"]);
const DEFAULT_DELAY_MS = Number.parseInt(process.env.OMNI_SKILLS_A2A_PROCESSING_DELAY_MS || "80", 10);
const DEFAULT_PERSISTENCE_PATH = path.join(
  os.homedir() || process.cwd(),
  ".omni-skills",
  "state",
  "a2a-tasks.json",
);
const TOOL_ALIASES = new Map([
  ["claude", "claude-code"],
  ["claude-code", "claude-code"],
  ["cursor", "cursor"],
  ["gemini", "gemini-cli"],
  ["gemini-cli", "gemini-cli"],
  ["codex", "codex-cli"],
  ["codex-cli", "codex-cli"],
  ["kiro", "kiro"],
  ["antigravity", "antigravity"],
  ["opencode", "opencode"],
]);

function nowIso() {
  return new Date().toISOString();
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createTextPart(text, metadata) {
  return {
    kind: "text",
    text: String(text || ""),
    ...(metadata ? { metadata } : {}),
  };
}

function createDataPart(data, metadata) {
  return {
    kind: "data",
    data,
    ...(metadata ? { metadata } : {}),
  };
}

function createMessage(role, parts, extra = {}) {
  return {
    role,
    parts,
    messageId: extra.messageId || randomUUID(),
    ...(extra.taskId ? { taskId: extra.taskId } : {}),
    ...(extra.contextId ? { contextId: extra.contextId } : {}),
    ...(extra.referenceTaskIds ? { referenceTaskIds: extra.referenceTaskIds } : {}),
    ...(extra.metadata ? { metadata: extra.metadata } : {}),
    kind: "message",
  };
}

function createAgentTextMessage(text, extra = {}) {
  return createMessage("agent", [createTextPart(text, extra.partMetadata)], extra);
}

function extractText(message) {
  const parts = Array.isArray(message?.parts) ? message.parts : [];
  return parts
    .filter((part) => part?.kind === "text" || part?.type === "text")
    .map((part) => String(part.text || ""))
    .join("\n")
    .trim();
}

function isTerminalState(state) {
  return TERMINAL_STATES.has(state);
}

function isInterruptedState(state) {
  return INTERRUPTED_STATES.has(state);
}

function getTaskIdFromMessage(message) {
  return message?.taskId || message?.metadata?.task_id || message?.metadata?.taskId || null;
}

function getHistoryLength(params = {}, fallback = 0) {
  const raw =
    params?.configuration?.historyLength ??
    params?.historyLength ??
    params?.metadata?.history_length ??
    params?.metadata?.historyLength ??
    fallback;
  const parsed = Number.parseInt(String(raw ?? ""), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function dedupe(items) {
  return [...new Set((items || []).filter(Boolean))];
}

function mergeArrayValues(left, right) {
  return dedupe([...(Array.isArray(left) ? left : []), ...(Array.isArray(right) ? right : [])]);
}

function buildArtifact(task, title, summary, data) {
  return {
    artifactId: randomUUID(),
    name: title,
    description: summary,
    parts: [
      createTextPart(summary),
      createDataPart(data),
    ],
    metadata: {
      operation: task.metadata.operation,
      generated_at: nowIso(),
    },
  };
}

function summarizeSearchResult(result, query) {
  const total = Number(result?.total || 0);
  if (total === 0) {
    return `No published skills matched '${query}'.`;
  }
  if (total === 1) {
    return `Found 1 published skill for '${query}'.`;
  }
  return `Found ${total} published skills for '${query}'.`;
}

function summarizeRecommendation(result, goal) {
  const total = Array.isArray(result?.recommendations) ? result.recommendations.length : 0;
  if (total === 0) {
    return `No recommendations were produced for '${goal}'.`;
  }
  if (total === 1) {
    return `Recommended 1 skill stack candidate for '${goal}'.`;
  }
  return `Recommended ${total} skill stack candidates for '${goal}'.`;
}

function summarizeInstallPlan(result) {
  const skills = Array.isArray(result?.selected_skills) ? result.selected_skills.length : 0;
  const bundles = Array.isArray(result?.selected_bundles) ? result.selected_bundles.length : 0;
  return `Prepared a dry-run install plan with ${skills} skill(s) across ${bundles} bundle(s).`;
}

function isLocalWebhookHostname(hostname) {
  return hostname === "127.0.0.1" || hostname === "localhost" || hostname === "::1";
}

function sanitizeWebhookUrl(rawUrl, { allowInsecureWebhooks = false } = {}) {
  const parsed = new URL(String(rawUrl || ""));
  if (parsed.protocol === "https:") {
    return parsed.toString();
  }
  if (parsed.protocol === "http:" && (allowInsecureWebhooks || isLocalWebhookHostname(parsed.hostname))) {
    return parsed.toString();
  }
  throw new Error("Push notification URLs must use HTTPS unless they target localhost or insecure mode is enabled.");
}

function buildPushAuthHeaders(authentication) {
  const headers = {};
  if (!authentication || typeof authentication !== "object") {
    return headers;
  }

  const schemes = Array.isArray(authentication.schemes)
    ? authentication.schemes.map((scheme) => String(scheme).toLowerCase())
    : [];
  const credentials =
    authentication.credentials ||
    authentication.token ||
    authentication.bearer ||
    authentication.secret;

  if (credentials && schemes.includes("bearer")) {
    headers.authorization = `Bearer ${credentials}`;
  }

  return headers;
}

function createTaskEvent(kind, task, payload, sequence) {
  return {
    id: sequence,
    created_at: nowIso(),
    taskId: task.id,
    contextId: task.contextId,
    kind,
    payload,
  };
}

function createStatusEvent(task, status, sequence, metadata = {}, final = false) {
  return createTaskEvent(
    "status-update",
    task,
    {
      taskId: task.id,
      contextId: task.contextId,
      kind: "status-update",
      status,
      final,
      ...(Object.keys(metadata || {}).length > 0 ? { metadata } : {}),
    },
    sequence,
  );
}

function createArtifactEvent(task, artifact, sequence, metadata = {}, append = false, lastChunk = true) {
  return createTaskEvent(
    "artifact-update",
    task,
    {
      taskId: task.id,
      contextId: task.contextId,
      kind: "artifact-update",
      artifact,
      append,
      lastChunk,
      ...(Object.keys(metadata || {}).length > 0 ? { metadata } : {}),
    },
    sequence,
  );
}

function matchKnownIds(text, knownIds) {
  const normalizedText = ` ${normalizeText(text)} `;
  return knownIds.filter((id) => {
    const normalizedId = normalizeText(id);
    return normalizedText.includes(` ${normalizedId} `) || normalizedText.includes(normalizedId.replace(/-/g, " "));
  });
}

function inferToolsFromText(text) {
  const normalizedText = ` ${normalizeText(text)} `;
  const tools = [];
  for (const [alias, toolId] of TOOL_ALIASES.entries()) {
    const normalizedAlias = alias.replace(/-/g, " ");
    if (normalizedText.includes(` ${normalizedAlias} `) || normalizedText.includes(normalizedAlias)) {
      tools.push(toolId);
    }
  }
  return dedupe(tools);
}

function compactTask(task, historyLength = 0) {
  const snapshot = {
    id: task.id,
    contextId: task.contextId,
    status: task.status,
    kind: "task",
    ...(task.artifacts.length > 0 ? { artifacts: task.artifacts } : {}),
    ...(task.metadata ? { metadata: task.metadata } : {}),
  };

  if (historyLength > 0) {
    snapshot.history = task.history.slice(-historyLength);
  }

  return snapshot;
}

function ensureParentDirectory(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function cloneSerializable(value) {
  return JSON.parse(JSON.stringify(value));
}

function serializeTask(task) {
  return {
    id: task.id,
    contextId: task.contextId,
    status: cloneSerializable(task.status),
    history: cloneSerializable(task.history || []),
    artifacts: cloneSerializable(task.artifacts || []),
    metadata: cloneSerializable(task.metadata || {}),
    pushConfigs: cloneSerializable(task.pushConfigs || []),
    _sequence: Number(task._sequence || 0),
    _events: cloneSerializable(task._events || []),
  };
}

function hydrateTask(record) {
  return {
    id: record.id,
    contextId: record.contextId,
    status: record.status || { state: "unknown", timestamp: nowIso() },
    history: Array.isArray(record.history) ? record.history : [],
    artifacts: Array.isArray(record.artifacts) ? record.artifacts : [],
    metadata: record.metadata || {},
    pushConfigs: Array.isArray(record.pushConfigs) ? record.pushConfigs : [],
    _sequence: Number.isFinite(record._sequence) ? record._sequence : 0,
    _events: Array.isArray(record._events) ? record._events : [],
    _emitter: new EventEmitter(),
    _timers: new Set(),
  };
}

export class OmniSkillsA2ARuntime {
  constructor(options = {}) {
    this.baseUrl = options.baseUrl || null;
    this.processingDelayMs = Number.isFinite(options.processingDelayMs)
      ? options.processingDelayMs
      : DEFAULT_DELAY_MS;
    this.allowInsecureWebhooks =
      options.allowInsecureWebhooks ?? process.env.OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS === "1";
    this.persistenceEnabled =
      options.persistenceEnabled ?? process.env.OMNI_SKILLS_A2A_DISABLE_PERSISTENCE !== "1";
    this.persistencePath =
      options.persistencePath || process.env.OMNI_SKILLS_A2A_STORE_PATH || DEFAULT_PERSISTENCE_PATH;
    this.persistenceError = null;
    this.tasks = new Map();
    this.loadPersistedTasks();
  }

  getCatalogContext() {
    const catalog = loadCatalog();
    const bundles = listBundles();
    return {
      catalog,
      bundles,
      skillIds: catalog.skills.map((skill) => skill.id),
      bundleIds: bundles.map((bundle) => bundle.id),
    };
  }

  getHealthSnapshot() {
    const counts = {};
    for (const task of this.tasks.values()) {
      const state = task.status.state;
      counts[state] = (counts[state] || 0) + 1;
    }

    return {
      ...getHealthSnapshot(),
      protocol: "a2a",
      persistence: {
        enabled: this.persistenceEnabled,
        path: this.persistenceEnabled ? this.persistencePath : null,
        loaded_tasks: this.tasks.size,
        ...(this.persistenceError ? { last_error: this.persistenceError } : {}),
      },
      tasks: {
        total: this.tasks.size,
        by_state: counts,
      },
    };
  }

  getAgentCard(baseUrl) {
    const effectiveBaseUrl = baseUrl || this.baseUrl || "http://127.0.0.1:3335";
    return {
      protocolVersion: "0.2.5",
      name: "Omni Skills Agent",
      description:
        "A2A agent for discovering skills, recommending stacks, preparing install plans, and handling long-running task lifecycles over polling, SSE, and optional push notifications.",
      url: `${effectiveBaseUrl}/a2a`,
      version: "0.0.1",
      defaultInputModes: ["text"],
      defaultOutputModes: ["text", "application/json"],
      capabilities: {
        streaming: true,
        pushNotifications: true,
        stateTransitionHistory: false,
      },
      skills: [
        {
          id: "discover-skills",
          name: "Discover Skills",
          description: "Search the Omni Skills catalog by goal, text, compatibility, or filters.",
          tags: ["skills", "search", "catalog"],
          examples: ["Find Figma-related skills for Cursor."],
          inputModes: ["text"],
          outputModes: ["text", "application/json"],
        },
        {
          id: "recommend-stack",
          name: "Recommend Stack",
          description: "Recommend a skill stack for a goal and preferred client.",
          tags: ["recommendation", "planning", "catalog"],
          examples: ["Recommend skills for a frontend design workflow in Codex CLI."],
          inputModes: ["text"],
          outputModes: ["text", "application/json"],
        },
        {
          id: "prepare-install-plan",
          name: "Prepare Install Plan",
          description: "Build a read-only install plan for selected skills, bundles, and clients.",
          tags: ["install", "planning", "dry-run"],
          examples: ["Prepare an install plan for omni-figma on Cursor."],
          inputModes: ["text"],
          outputModes: ["text", "application/json"],
        },
      ],
    };
  }

  getTask(id) {
    return this.tasks.get(id) || null;
  }

  createTask(operation, input, message) {
    const taskId = randomUUID();
    const contextId = message?.contextId || randomUUID();
    const task = {
      id: taskId,
      contextId,
      status: {
        state: "submitted",
        message: createAgentTextMessage(`Accepted ${operation} request.`, {
          taskId,
          contextId,
          metadata: { operation },
        }),
        timestamp: nowIso(),
      },
      history: [],
      artifacts: [],
      metadata: {
        operation,
        input,
        created_at: nowIso(),
        updated_at: nowIso(),
        source: "omni-skills-a2a",
        push_notification_count: 0,
      },
      pushConfigs: [],
      _sequence: 0,
      _events: [],
      _emitter: new EventEmitter(),
      _timers: new Set(),
    };

    this.tasks.set(taskId, task);
    this.persistTasks();
    return task;
  }

  appendHistory(task, message) {
    task.history.push(message);
    this.persistTasks();
  }

  queueTaskEvent(task, event) {
    task._events.push(event);
    task._emitter.emit("event", event);
    this.persistTasks();
  }

  nextSequence(task) {
    task._sequence += 1;
    return task._sequence;
  }

  setTaskStatus(task, state, text, metadata = {}, { final = false } = {}) {
    const message = text
      ? createAgentTextMessage(text, {
          taskId: task.id,
          contextId: task.contextId,
          metadata,
        })
      : undefined;

    task.status = {
      state,
      ...(message ? { message } : {}),
      timestamp: nowIso(),
    };
    task.metadata = {
      ...task.metadata,
      updated_at: nowIso(),
      last_state: state,
    };

    if (message) {
      this.appendHistory(task, message);
    }

    const sequence = this.nextSequence(task);
    this.queueTaskEvent(task, createStatusEvent(task, task.status, sequence, metadata, final));

    if (NOTIFIABLE_STATES.has(state)) {
      void this.dispatchPushNotifications(task);
    }
  }

  addArtifact(task, artifact, metadata = {}) {
    task.artifacts = [...task.artifacts, artifact];
    task.metadata = {
      ...task.metadata,
      updated_at: nowIso(),
      artifact_count: task.artifacts.length,
    };

    const sequence = this.nextSequence(task);
    this.queueTaskEvent(task, createArtifactEvent(task, artifact, sequence, metadata, false, true));
  }

  persistTasks() {
    if (!this.persistenceEnabled || !this.persistencePath) {
      return;
    }

    try {
      ensureParentDirectory(this.persistencePath);
      const payload = {
        schema_version: "2026-03-26",
        generated_at: nowIso(),
        tasks: [...this.tasks.values()].map((task) => serializeTask(task)),
      };
      const temporaryPath = `${this.persistencePath}.tmp`;
      fs.writeFileSync(temporaryPath, JSON.stringify(payload, null, 2), "utf-8");
      fs.renameSync(temporaryPath, this.persistencePath);
      this.persistenceError = null;
    } catch (error) {
      this.persistenceError = error instanceof Error ? error.message : String(error);
    }
  }

  recoverTaskAfterRestart(task) {
    task.metadata = {
      ...task.metadata,
      recovered_from_persistence: true,
      updated_at: nowIso(),
    };

    if (task.status?.state !== "submitted" && task.status?.state !== "working") {
      return task;
    }

    const recoveryMessage = createAgentTextMessage(
      "Recovered after a runtime restart. The previous in-memory execution was interrupted, so this task was marked as failed. Resubmit the request to continue.",
      {
        taskId: task.id,
        contextId: task.contextId,
        metadata: {
          operation: task.metadata.operation,
          recovery: "restart-interrupted",
        },
      },
    );

    task.history.push(recoveryMessage);
    task.status = {
      state: "failed",
      message: recoveryMessage,
      timestamp: nowIso(),
    };
    task.metadata = {
      ...task.metadata,
      updated_at: nowIso(),
      last_state: "failed",
      recovery: "restart-interrupted",
    };
    task._sequence = Math.max(
      task._sequence,
      ...task._events.map((event) => Number(event?.id || 0)).filter((value) => Number.isFinite(value)),
    );
    task._sequence += 1;
    task._events.push(
      createStatusEvent(
        task,
        task.status,
        task._sequence,
        {
          operation: task.metadata.operation,
          recovery: "restart-interrupted",
        },
        true,
      ),
    );

    return task;
  }

  loadPersistedTasks() {
    if (!this.persistenceEnabled || !this.persistencePath || !fs.existsSync(this.persistencePath)) {
      return;
    }

    try {
      const payload = JSON.parse(fs.readFileSync(this.persistencePath, "utf-8"));
      const records = Array.isArray(payload?.tasks) ? payload.tasks : [];
      for (const record of records) {
        if (!record?.id) {
          continue;
        }
        const task = this.recoverTaskAfterRestart(hydrateTask(record));
        this.tasks.set(task.id, task);
      }
      this.persistenceError = null;
      if (records.length > 0) {
        this.persistTasks();
      }
    } catch (error) {
      this.persistenceError = error instanceof Error ? error.message : String(error);
    }
  }

  schedule(task, callback, delayMs = this.processingDelayMs) {
    const timer = setTimeout(() => {
      task._timers.delete(timer);
      callback();
    }, delayMs);
    task._timers.add(timer);
    return timer;
  }

  clearTaskTimers(task) {
    for (const timer of task._timers) {
      clearTimeout(timer);
    }
    task._timers.clear();
  }

  parseMessageInput(task, message, requestMetadata = {}) {
    const { skillIds: knownSkillIds, bundleIds: knownBundleIds } = this.getCatalogContext();
    const text = extractText(message);
    const previousInput = task?.metadata?.input || {};

    const metadataSkillIds =
      requestMetadata.skill_ids || requestMetadata.skillIds || message?.metadata?.skill_ids || message?.metadata?.skillIds;
    const metadataBundleIds =
      requestMetadata.bundle_ids || requestMetadata.bundleIds || message?.metadata?.bundle_ids || message?.metadata?.bundleIds;
    const metadataTools =
      requestMetadata.tools || message?.metadata?.tools || (requestMetadata.tool ? [requestMetadata.tool] : []);

    const inferredSkillIds = matchKnownIds(text, knownSkillIds);
    const inferredBundleIds = matchKnownIds(text, knownBundleIds);
    const inferredTools = inferToolsFromText(text);

    return {
      query: requestMetadata.query || message?.metadata?.query || previousInput.query || text || "",
      goal: requestMetadata.goal || message?.metadata?.goal || previousInput.goal || text || "",
      category:
        requestMetadata.category ||
        message?.metadata?.category ||
        previousInput.category ||
        null,
      risk: requestMetadata.risk || message?.metadata?.risk || previousInput.risk || null,
      limit:
        requestMetadata.limit ||
        message?.metadata?.limit ||
        previousInput.limit ||
        null,
      target_path:
        requestMetadata.target_path ||
        requestMetadata.targetPath ||
        message?.metadata?.target_path ||
        message?.metadata?.targetPath ||
        previousInput.target_path ||
        null,
      skill_ids: mergeArrayValues(previousInput.skill_ids, [
        ...(Array.isArray(metadataSkillIds) ? metadataSkillIds : []),
        ...inferredSkillIds,
      ]),
      bundle_ids: mergeArrayValues(previousInput.bundle_ids, [
        ...(Array.isArray(metadataBundleIds) ? metadataBundleIds : []),
        ...inferredBundleIds,
      ]),
      tools: mergeArrayValues(previousInput.tools, [
        ...(Array.isArray(metadataTools) ? metadataTools : []),
        ...inferredTools,
      ]),
      text,
    };
  }

  resolveOperation(message, requestMetadata = {}, task = null) {
    return (
      requestMetadata.operation ||
      message?.metadata?.operation ||
      task?.metadata?.operation ||
      "discover-skills"
    );
  }

  evaluateOperation(task, operation, input) {
    switch (operation) {
      case "discover-skills": {
        const query = (input.query || input.text || "").trim();
        if (!query) {
          return {
            type: "input-required",
            prompt:
              "Tell me what capability, workflow, or domain you want. For example: 'figma for cursor' or 'security review'.",
          };
        }

        const result = searchSkills({
          query,
          category: input.category,
          tool: input.tools[0],
          risk: input.risk,
          limit: input.limit || 10,
        });

        return {
          type: "result",
          title: "Skill Discovery Result",
          summary: summarizeSearchResult(result, query),
          payload: result,
        };
      }
      case "recommend-stack": {
        const goal = (input.goal || input.text || "").trim();
        if (!goal) {
          return {
            type: "input-required",
            prompt:
              "Describe the goal you want the stack to solve. For example: 'frontend design workflow for Cursor'.",
          };
        }

        const result = recommendSkills({
          goal,
          tool: input.tools[0],
          category: input.category,
          limit: input.limit || 5,
        });

        return {
          type: "result",
          title: "Recommended Skill Stack",
          summary: summarizeRecommendation(result, goal),
          payload: result,
        };
      }
      case "prepare-install-plan": {
        const hasSelection = input.skill_ids.length > 0 || input.bundle_ids.length > 0;
        if (!hasSelection) {
          return {
            type: "input-required",
            prompt:
              "Name at least one published skill or bundle before I can build the install plan. Example: 'omni-figma on cursor' or 'bundle full-stack'.",
          };
        }

        if (!input.target_path && input.tools.length === 0) {
          return {
            type: "input-required",
            prompt:
              "Which client should receive the install plan? Example: Cursor, Codex CLI, Claude Code, Gemini CLI, Antigravity, OpenCode, or provide a custom path.",
          };
        }

        const result = buildInstallPlan({
          skill_ids: input.skill_ids,
          bundle_ids: input.bundle_ids,
          tools: input.tools,
          target_path: input.target_path,
          dry_run: true,
        });

        return {
          type: "result",
          title: "Install Plan",
          summary: summarizeInstallPlan(result),
          payload: result,
        };
      }
      default:
        return {
          type: "rejected",
          prompt: `Operation '${operation}' is not supported by the Omni Skills A2A agent.`,
        };
    }
  }

  startProcessing(task, evaluation, { blocking = false } = {}) {
    if (evaluation.type === "input-required") {
      this.setTaskStatus(task, "input-required", evaluation.prompt, {
        operation: task.metadata.operation,
      });
      return compactTask(task);
    }

    if (evaluation.type === "rejected") {
      this.setTaskStatus(task, "rejected", evaluation.prompt, {
        operation: task.metadata.operation,
      }, { final: true });
      return compactTask(task);
    }

    const finishTask = () => {
      if (isTerminalState(task.status.state)) {
        return;
      }

      this.setTaskStatus(
        task,
        "working",
        `Processing ${task.metadata.operation}...`,
        { operation: task.metadata.operation },
      );

      const artifact = buildArtifact(task, evaluation.title, evaluation.summary, evaluation.payload);
      this.addArtifact(task, artifact, {
        operation: task.metadata.operation,
      });
      task.metadata = {
        ...task.metadata,
        latest_result: evaluation.payload,
      };
      this.setTaskStatus(task, "completed", evaluation.summary, {
        operation: task.metadata.operation,
      }, { final: true });
    };

    if (blocking) {
      finishTask();
      return compactTask(task);
    }

    this.setTaskStatus(
      task,
      "submitted",
      `Accepted ${task.metadata.operation} request.`,
      { operation: task.metadata.operation },
    );
    this.schedule(task, finishTask);
    return compactTask(task);
  }

  handleMessageSend(params = {}) {
    const message = params.message;
    if (!message || message.kind !== "message") {
      const error = new Error("MessageSendParams.message must be a valid A2A message.");
      error.code = -32602;
      throw error;
    }

    const taskId = getTaskIdFromMessage(message);
    const task = taskId ? this.getTask(taskId) : null;
    if (taskId && !task) {
      const error = new Error(`Task '${taskId}' was not found.`);
      error.code = -32001;
      throw error;
    }

    if (task && isTerminalState(task.status.state)) {
      const error = new Error(`Task '${task.id}' is in terminal state '${task.status.state}' and cannot be continued.`);
      error.code = -32002;
      throw error;
    }

    const operation = this.resolveOperation(message, params.metadata, task);
    const targetTask = task || this.createTask(operation, {}, message);
    const mergedInput = this.parseMessageInput(targetTask, message, params.metadata);

    targetTask.metadata = {
      ...targetTask.metadata,
      operation,
      input: mergedInput,
      updated_at: nowIso(),
    };
    this.persistTasks();
    this.appendHistory(targetTask, {
      ...message,
      taskId: targetTask.id,
      contextId: targetTask.contextId,
      kind: "message",
    });

    const pushConfig = params.configuration?.pushNotificationConfig;
    if (pushConfig) {
      this.setPushNotificationConfig({
        taskId: targetTask.id,
        ...pushConfig,
      });
    }

    const evaluation = this.evaluateOperation(targetTask, operation, mergedInput);
    const result = this.startProcessing(targetTask, evaluation, {
      blocking: params.configuration?.blocking === true,
    });

    return {
      task: targetTask,
      result: compactTask(targetTask, getHistoryLength(params)),
      blocking: params.configuration?.blocking === true,
    };
  }

  handleTasksGet(params = {}) {
    const task = this.getTask(params.id);
    if (!task) {
      const error = new Error(`Task '${params.id}' was not found.`);
      error.code = -32001;
      throw error;
    }
    return compactTask(task, getHistoryLength(params));
  }

  handleTasksCancel(params = {}) {
    const task = this.getTask(params.id);
    if (!task) {
      const error = new Error(`Task '${params.id}' was not found.`);
      error.code = -32001;
      throw error;
    }

    if (isTerminalState(task.status.state)) {
      const error = new Error(`Task '${task.id}' is already terminal and cannot be canceled.`);
      error.code = -32003;
      throw error;
    }

    this.clearTaskTimers(task);
    this.setTaskStatus(task, "canceled", `Canceled ${task.metadata.operation} at client request.`, {
      operation: task.metadata.operation,
    }, { final: true });

    return compactTask(task);
  }

  setPushNotificationConfig(params = {}) {
    const task = this.getTask(params.taskId || params.id);
    if (!task) {
      const error = new Error(`Task '${params.taskId || params.id}' was not found.`);
      error.code = -32001;
      throw error;
    }

    const url = sanitizeWebhookUrl(params.url, {
      allowInsecureWebhooks: this.allowInsecureWebhooks,
    });
    const config = {
      id: params.id || params.pushNotificationId || params.notificationId || randomUUID(),
      taskId: task.id,
      url,
      ...(params.token ? { token: params.token } : {}),
      ...(params.authentication ? { authentication: params.authentication } : {}),
    };

    const nextConfigs = (task.pushConfigs || []).filter((item) => item.id !== config.id);
    nextConfigs.push(config);
    task.pushConfigs = nextConfigs;
    task.metadata = {
      ...task.metadata,
      push_notification_count: nextConfigs.length,
    };
    this.persistTasks();
    return config;
  }

  getPushNotificationConfig(params = {}) {
    const task = this.getTask(params.taskId || params.id);
    if (!task) {
      const error = new Error(`Task '${params.taskId || params.id}' was not found.`);
      error.code = -32001;
      throw error;
    }

    const requestedId = params.pushNotificationId || params.notificationId || params.id;
    const config =
      (requestedId && task.pushConfigs.find((item) => item.id === requestedId)) ||
      task.pushConfigs[0] ||
      null;

    if (!config) {
      const error = new Error(`Task '${task.id}' has no push notification configuration.`);
      error.code = -32004;
      throw error;
    }

    return config;
  }

  listPushNotificationConfigs(params = {}) {
    const task = this.getTask(params.taskId || params.id);
    if (!task) {
      const error = new Error(`Task '${params.taskId || params.id}' was not found.`);
      error.code = -32001;
      throw error;
    }
    return task.pushConfigs;
  }

  deletePushNotificationConfig(params = {}) {
    const task = this.getTask(params.taskId || params.id);
    if (!task) {
      const error = new Error(`Task '${params.taskId || params.id}' was not found.`);
      error.code = -32001;
      throw error;
    }

    const requestedId = params.pushNotificationId || params.notificationId || params.push_notification_id;
    let deleted = null;

    if (requestedId) {
      task.pushConfigs = task.pushConfigs.filter((config) => {
        if (config.id === requestedId) {
          deleted = config;
          return false;
        }
        return true;
      });
    } else {
      deleted = task.pushConfigs.shift() || null;
    }

    task.metadata = {
      ...task.metadata,
      push_notification_count: task.pushConfigs.length,
    };
    this.persistTasks();

    return {
      deleted: Boolean(deleted),
      taskId: task.id,
      ...(deleted ? { pushNotificationId: deleted.id } : {}),
    };
  }

  async dispatchPushNotifications(task) {
    if (!Array.isArray(task.pushConfigs) || task.pushConfigs.length === 0) {
      return;
    }

    const payload = compactTask(task);
    for (const config of task.pushConfigs) {
      const headers = {
        "content-type": "application/json",
        ...(config.token ? { "x-a2a-notification-token": config.token } : {}),
        ...buildPushAuthHeaders(config.authentication),
      };

      try {
        await fetch(config.url, {
          method: "POST",
          headers,
          body: JSON.stringify(payload),
        });
      } catch (_error) {
        // Best-effort notification dispatch. The authoritative state remains in tasks/get.
      }
    }
  }

  createSseSubscriber(task, req, res, rpcId, { replayFrom = null, includeSnapshot = false } = {}) {
    res.status(200);
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders?.();

    const writeRpcEvent = (result, eventId) => {
      const payload = JSON.stringify({
        jsonrpc: "2.0",
        id: rpcId,
        result,
      });
      if (eventId != null) {
        res.write(`id: ${eventId}\n`);
      }
      res.write(`data: ${payload}\n\n`);
    };

    if (includeSnapshot) {
      writeRpcEvent(compactTask(task), replayFrom ?? undefined);
    }

    if (Number.isFinite(replayFrom)) {
      for (const event of task._events.filter((item) => item.id > replayFrom)) {
        writeRpcEvent(event.payload, event.id);
      }
    }

    const onEvent = (event) => {
      writeRpcEvent(event.payload, event.id);
      if (event.payload.kind === "status-update" && event.payload.final) {
        cleanup();
      }
    };

    const keepAlive = setInterval(() => {
      res.write(": keep-alive\n\n");
    }, 15000);

    const cleanup = () => {
      clearInterval(keepAlive);
      task._emitter.off("event", onEvent);
      if (!res.writableEnded) {
        res.end();
      }
    };

    task._emitter.on("event", onEvent);
    req.on("aborted", cleanup);
    res.on("close", cleanup);

    if (isTerminalState(task.status.state) || isInterruptedState(task.status.state)) {
      const lastEvent = task._events[task._events.length - 1];
      const hasFinalEvent =
        lastEvent?.payload?.kind === "status-update" && lastEvent?.payload?.final === true;

      if (!hasFinalEvent) {
        const finalEvent = createStatusEvent(task, task.status, this.nextSequence(task), {
          operation: task.metadata.operation,
        }, true);
        this.queueTaskEvent(task, finalEvent);
      } else {
        writeRpcEvent(lastEvent.payload, lastEvent.id);
        cleanup();
      }
      return;
    }
  }
}
