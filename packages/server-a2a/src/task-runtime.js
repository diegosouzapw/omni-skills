import { EventEmitter } from "node:events";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import {
  getHealthSnapshot,
  listBundles,
  loadCatalog,
} from "../../catalog-core/src/index.js";
import { evaluateTaskOperation } from "./task-operations.js";
import { createTaskExecutor } from "./task-executor.js";
import { createTaskStore } from "./task-store.js";
import { createTaskCoordinator } from "./task-coordinator.js";

const TERMINAL_STATES = new Set(["completed", "canceled", "failed", "rejected", "unknown"]);
const INTERRUPTED_STATES = new Set(["input-required", "auth-required"]);
const NOTIFIABLE_STATES = new Set(["completed", "canceled", "failed", "rejected", "input-required", "auth-required"]);
const DEFAULT_DELAY_MS = Number.parseInt(process.env.OMNI_SKILLS_A2A_PROCESSING_DELAY_MS || "80", 10);
const DEFAULT_QUEUE_POLL_MS = Number.parseInt(process.env.OMNI_SKILLS_A2A_WORKER_POLL_MS || "250", 10);
const DEFAULT_LEASE_MS = Number.parseInt(process.env.OMNI_SKILLS_A2A_LEASE_MS || "4000", 10);
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

function createRuntimeInstanceId() {
  return `${os.hostname() || "host"}:${process.pid}:${randomUUID().slice(0, 8)}`;
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
    const spacedId = normalizedId.replace(/-/g, " ");
    return (
      normalizedText.includes(` ${normalizedId} `) ||
      normalizedText.includes(` ${spacedId} `)
    );
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
    this.workerPollMs = Number.isFinite(options.workerPollMs)
      ? options.workerPollMs
      : DEFAULT_QUEUE_POLL_MS;
    this.leaseMs = Number.isFinite(options.leaseMs)
      ? options.leaseMs
      : DEFAULT_LEASE_MS;
    this.allowInsecureWebhooks =
      options.allowInsecureWebhooks ?? process.env.OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS === "1";
    this.persistenceEnabled =
      options.persistenceEnabled ?? process.env.OMNI_SKILLS_A2A_DISABLE_PERSISTENCE !== "1";
    this.persistencePath =
      options.persistencePath || process.env.OMNI_SKILLS_A2A_STORE_PATH || DEFAULT_PERSISTENCE_PATH;
    this.storeType = options.storeType || process.env.OMNI_SKILLS_A2A_STORE_TYPE || "json";
    this.resumeInterruptedTasks =
      options.resumeInterruptedTasks ?? process.env.OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS !== "0";
    this.instanceId = options.instanceId || process.env.OMNI_SKILLS_A2A_INSTANCE_ID || createRuntimeInstanceId();
    this.persistenceError = null;
    this.coordinationError = null;
    this.queueEnabled =
      options.queueEnabled ??
      (process.env.OMNI_SKILLS_A2A_QUEUE_ENABLED
        ? process.env.OMNI_SKILLS_A2A_QUEUE_ENABLED === "1"
        : false);
    this.tasks = new Map();
    this.activeLeases = new Map();
    this.queueLoop = null;
    this.queuePolling = false;
    this.taskStore = createTaskStore({
      enabled: this.persistenceEnabled,
      storeType: this.storeType,
      persistencePath: this.persistencePath,
    });
    this.coordinator = createTaskCoordinator({
      queueEnabled: this.queueEnabled,
      taskStore: this.taskStore,
      coordinationType: options.coordinationType || process.env.OMNI_SKILLS_A2A_COORDINATION_TYPE || "store",
      redisUrl: options.redisUrl || process.env.OMNI_SKILLS_A2A_REDIS_URL || "",
      redisKeyPrefix:
        options.redisKeyPrefix || process.env.OMNI_SKILLS_A2A_COORDINATION_PREFIX || "omni-skills:a2a",
      redisClient: options.redisClient || null,
    });
    this.executor = createTaskExecutor({
      mode: options.executorMode || process.env.OMNI_SKILLS_A2A_EXECUTOR || "inline",
    });
    this.loadPersistedTasks();
    void this.syncCoordinatorTasks([...this.tasks.values()]);
    if (this.queueEnabled && typeof this.coordinator.claimPendingTask === "function") {
      this.startQueueWorker();
    } else {
      this.resumeRecoveredTasks();
    }
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
        kind: this.taskStore.kind,
        loaded_tasks: this.tasks.size,
        ...(this.persistenceError ? { last_error: this.persistenceError } : {}),
      },
      executor: {
        mode: this.executor.mode,
      },
      queue: {
        enabled: this.queueEnabled,
        poll_ms: this.workerPollMs,
        lease_ms: this.leaseMs,
        instance_id: this.instanceId,
        active_leases: this.activeLeases.size,
      },
      coordination: {
        ...(typeof this.coordinator.getSnapshot === "function" ? this.coordinator.getSnapshot() : {}),
        ...(this.coordinationError ? { last_error: this.coordinationError } : {}),
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
      name: "Awesome Omni Skills Agent",
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
          description: "Search the Awesome Omni Skills catalog by goal, text, compatibility, or filters.",
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

  syncTask(record) {
    if (!record?.id) {
      return null;
    }
    const existing = this.tasks.get(record.id);
    const next = hydrateTask(record);
    if (existing?._emitter) {
      next._emitter = existing._emitter;
    }
    if (existing?._timers) {
      next._timers = existing._timers;
    }
    this.tasks.set(next.id, next);
    return next;
  }

  refreshTask(id) {
    if (!this.persistenceEnabled || typeof this.taskStore.getTask !== "function" || !id) {
      return this.tasks.get(id) || null;
    }

    try {
      const record = this.taskStore.getTask(id);
      if (!record) {
        return this.tasks.get(id) || null;
      }
      this.persistenceError = null;
      return this.syncTask(record);
    } catch (error) {
      this.persistenceError = error instanceof Error ? error.message : String(error);
      return this.tasks.get(id) || null;
    }
  }

  getTask(id, { refresh = true } = {}) {
    if (refresh) {
      return this.refreshTask(id);
    }
    return this.tasks.get(id) || null;
  }

  createTask(operation, input, message) {
    const taskId = randomUUID();
    const contextId = message?.contextId || randomUUID();
    const createdAt = nowIso();
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
        created_at: createdAt,
        updated_at: createdAt,
        available_at: createdAt,
        source: "omni-skills-a2a",
        push_notification_count: 0,
        queue: {
          enabled: this.queueEnabled,
          submitted_by: this.instanceId,
          available_at: createdAt,
        },
      },
      pushConfigs: [],
      _sequence: 0,
      _events: [],
      _emitter: new EventEmitter(),
      _timers: new Set(),
    };

    this.tasks.set(taskId, task);
    this.persistTask(task);
    return task;
  }

  appendHistory(task, message) {
    task.history.push(message);
    this.persistTask(task);
  }

  queueTaskEvent(task, event) {
    task._events.push(event);
    task._emitter.emit("event", event);
    this.persistTask(task);
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
    if (state === "submitted") {
      task.metadata.available_at = task.metadata.available_at || nowIso();
    }
    if (state === "working") {
      task.metadata.available_at = null;
    }
    if (isTerminalState(state) || isInterruptedState(state)) {
      task.metadata.available_at = null;
      if (task.metadata.lease) {
        delete task.metadata.lease;
      }
    }

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

  persistTask(task) {
    if (!task) {
      return;
    }

    if (this.persistenceEnabled) {
      try {
        if (typeof this.taskStore.upsertTask === "function") {
          this.taskStore.upsertTask(serializeTask(task));
        } else {
          this.taskStore.saveTasks([...this.tasks.values()].map((item) => serializeTask(item)));
        }
        this.persistenceError = null;
      } catch (error) {
        this.persistenceError = error instanceof Error ? error.message : String(error);
      }
    }

    void this.syncCoordinatorTask(task);
  }

  persistTasks() {
    if (!this.persistenceEnabled) {
      void this.syncCoordinatorTasks([...this.tasks.values()]);
      return;
    }

    try {
      this.taskStore.saveTasks([...this.tasks.values()].map((task) => serializeTask(task)));
      this.persistenceError = null;
    } catch (error) {
      this.persistenceError = error instanceof Error ? error.message : String(error);
    }
    void this.syncCoordinatorTasks([...this.tasks.values()]);
  }

  async syncCoordinatorTask(task) {
    if (!this.queueEnabled || !task || typeof this.coordinator.syncTask !== "function") {
      return;
    }

    try {
      await this.coordinator.syncTask(serializeTask(task));
      this.coordinationError = null;
    } catch (error) {
      this.coordinationError = error instanceof Error ? error.message : String(error);
    }
  }

  async syncCoordinatorTasks(tasks = []) {
    if (!this.queueEnabled || typeof this.coordinator.syncTasks !== "function") {
      return;
    }

    try {
      await this.coordinator.syncTasks(tasks.map((task) => serializeTask(task)));
      this.coordinationError = null;
    } catch (error) {
      this.coordinationError = error instanceof Error ? error.message : String(error);
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
    task.status = {
      state: "submitted",
      message: createAgentTextMessage(
        "Recovered after a runtime restart. The task will be re-evaluated and resumed.",
        {
          taskId: task.id,
          contextId: task.contextId,
          metadata: {
            operation: task.metadata.operation,
            recovery: "restart-resume",
          },
        },
      ),
      timestamp: nowIso(),
    };
    task.history.push(task.status.message);
    task.metadata = {
      ...task.metadata,
      updated_at: nowIso(),
      last_state: "submitted",
      recovery: "restart-resume",
      available_at: nowIso(),
    };
    if (task.metadata.lease) {
      delete task.metadata.lease;
    }
    return task;
  }

  loadPersistedTasks() {
    if (!this.persistenceEnabled) {
      return;
    }

    try {
      const records = this.taskStore.loadTasks();
      for (const record of records) {
        if (!record?.id) {
          continue;
        }
        const task = this.queueEnabled
          ? hydrateTask(record)
          : this.recoverTaskAfterRestart(hydrateTask(record));
        this.tasks.set(task.id, task);
      }
      this.persistenceError = null;
      if (!this.queueEnabled && records.length > 0) {
        this.persistTasks();
      }
    } catch (error) {
      this.persistenceError = error instanceof Error ? error.message : String(error);
    }
  }

  resumeRecoveredTasks() {
    if (this.queueEnabled) {
      return;
    }
    if (!this.resumeInterruptedTasks) {
      return;
    }

    for (const task of this.tasks.values()) {
      if (!task.metadata?.recovered_from_persistence) {
        continue;
      }
      if (task.status?.state !== "submitted" && task.status?.state !== "working") {
        continue;
      }
      const evaluation = evaluateTaskOperation(task.metadata.operation, task.metadata.input || {});
      void this.startProcessing(task, evaluation, { blocking: false, resumed: true });
    }
  }

  startQueueWorker() {
    if (this.queueLoop) {
      return;
    }
    const tick = async () => {
      this.queueLoop = setTimeout(() => {
        void tick();
      }, this.workerPollMs);
      await this.pollQueue();
    };
    void tick();
  }

  async pollQueue() {
    if (!this.queueEnabled || this.queuePolling || typeof this.coordinator.claimPendingTask !== "function") {
      return;
    }
    this.queuePolling = true;
    try {
      while (true) {
        const claimedRecord = await this.coordinator.claimPendingTask({
          owner: this.instanceId,
          leaseMs: this.leaseMs,
          eligibleStates: ["submitted", "working"],
        });
        if (!claimedRecord) {
          break;
        }

        const task = this.syncTask(claimedRecord);
        if (!task || this.activeLeases.has(task.id)) {
          continue;
        }

        const recoveredWorkingTask = task.status?.state === "working";
        task.metadata = {
          ...task.metadata,
          lease: {
            owner: this.instanceId,
            expires_at: new Date(Date.now() + this.leaseMs).toISOString(),
            claimed_at: nowIso(),
          },
          updated_at: nowIso(),
        };

        if (recoveredWorkingTask) {
          task.metadata = {
            ...task.metadata,
            recovered_from_persistence: true,
            recovery: "lease-timeout-resume",
            last_state: "submitted",
            available_at: null,
          };
          this.appendHistory(
            task,
            createAgentTextMessage(
              "Recovered an in-flight leased task after the previous lease expired. The task will be resumed on this worker.",
              {
                taskId: task.id,
                contextId: task.contextId,
                metadata: {
                  operation: task.metadata.operation,
                  recovery: "lease-timeout-resume",
                },
              },
            ),
          );
        }

        this.persistTask(task);
        const evaluation = evaluateTaskOperation(task.metadata.operation, task.metadata.input || {});
        void this.finalizeLeasedTaskExecution(task, evaluation);
      }
    } finally {
      this.queuePolling = false;
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

  beginLeaseHeartbeat(task) {
    if (!this.queueEnabled || typeof this.coordinator.renewTaskLease !== "function") {
      return;
    }

    this.endLeaseHeartbeat(task, { clearRemoteLease: false });
    const heartbeat = setInterval(() => {
      const state = this.activeLeases.get(task.id);
      if (!state) {
        return;
      }
      void (async () => {
        const nextExpiry = new Date(Date.now() + this.leaseMs).toISOString();
        const renewed = await this.coordinator.renewTaskLease(task.id, this.instanceId, this.leaseMs);
        if (!renewed) {
          state.revoked = true;
          clearInterval(state.timer);
          return;
        }
        task.metadata = {
          ...task.metadata,
          lease: {
            ...(task.metadata.lease || {}),
            owner: this.instanceId,
            expires_at: nextExpiry,
          },
          updated_at: nowIso(),
        };
      })().catch((error) => {
        this.coordinationError = error instanceof Error ? error.message : String(error);
        state.revoked = true;
        clearInterval(state.timer);
      });
    }, Math.max(250, Math.floor(this.leaseMs / 3)));

    this.activeLeases.set(task.id, {
      timer: heartbeat,
      revoked: false,
    });
  }

  endLeaseHeartbeat(task, { clearRemoteLease = true } = {}) {
    const state = this.activeLeases.get(task.id);
    if (state?.timer) {
      clearInterval(state.timer);
    }
    this.activeLeases.delete(task.id);
    if (
      clearRemoteLease &&
      this.queueEnabled &&
      typeof this.coordinator.clearTaskLease === "function"
    ) {
      void this.coordinator.clearTaskLease(task.id, this.instanceId).catch((error) => {
        this.coordinationError = error instanceof Error ? error.message : String(error);
      });
    }
  }

  isLeaseRevoked(task) {
    return Boolean(this.activeLeases.get(task.id)?.revoked);
  }

  getAuthoritativeTask(id) {
    return this.getTask(id, { refresh: true });
  }

  shouldAbortTaskWrite(task) {
    const authoritative = this.getAuthoritativeTask(task.id);
    if (!authoritative) {
      return false;
    }
    return (
      this.isLeaseRevoked(task) ||
      (isTerminalState(authoritative.status?.state) && authoritative.status?.state !== task.status?.state)
    );
  }

  async finalizeLeasedTaskExecution(task, evaluation) {
    this.beginLeaseHeartbeat(task);
    try {
      await this.finalizeTaskExecution(task, evaluation);
    } finally {
      this.endLeaseHeartbeat(task, {
        clearRemoteLease: !isTerminalState(task.status?.state) && !isInterruptedState(task.status?.state),
      });
    }
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

  async finalizeTaskExecution(task, evaluation) {
    if (isTerminalState(task.status.state)) {
      return;
    }

    this.setTaskStatus(
      task,
      "working",
      `Processing ${task.metadata.operation}...`,
      { operation: task.metadata.operation },
    );

    try {
      const result = await this.executor.execute({
        task,
        operation: task.metadata.operation,
        input: task.metadata.input || {},
        evaluation,
      });

      if (this.shouldAbortTaskWrite(task)) {
        this.refreshTask(task.id);
        return;
      }

      if (!result || result.type !== "result") {
        const prompt = result?.prompt || `Operation '${task.metadata.operation}' did not produce a result.`;
        this.setTaskStatus(task, "failed", prompt, {
          operation: task.metadata.operation,
          executor: this.executor.mode,
        }, { final: true });
        return;
      }

      const artifact = buildArtifact(task, result.title, result.summary, result.payload);
      this.addArtifact(task, artifact, {
        operation: task.metadata.operation,
        executor: this.executor.mode,
      });
      task.metadata = {
        ...task.metadata,
        latest_result: result.payload,
        executor_mode: this.executor.mode,
      };
      if (this.shouldAbortTaskWrite(task)) {
        this.refreshTask(task.id);
        return;
      }
      this.setTaskStatus(task, "completed", result.summary, {
        operation: task.metadata.operation,
        executor: this.executor.mode,
      }, { final: true });
    } catch (error) {
      if (this.shouldAbortTaskWrite(task)) {
        this.refreshTask(task.id);
        return;
      }
      this.setTaskStatus(
        task,
        "failed",
        `Task execution failed: ${error instanceof Error ? error.message : String(error)}`,
        {
          operation: task.metadata.operation,
          executor: this.executor.mode,
        },
        { final: true },
      );
    }
  }

  async startProcessing(task, evaluation, { blocking = false } = {}) {
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

    if (blocking) {
      await this.finalizeTaskExecution(task, evaluation);
      return compactTask(task);
    }

    this.setTaskStatus(
      task,
      "submitted",
      `Accepted ${task.metadata.operation} request.`,
      { operation: task.metadata.operation },
    );
    if (this.queueEnabled && typeof this.coordinator.claimPendingTask === "function") {
      void this.pollQueue();
      return compactTask(task);
    }
    this.schedule(task, () => {
      void this.finalizeTaskExecution(task, evaluation);
    });
    return compactTask(task);
  }

  async handleMessageSend(params = {}) {
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
    let targetTask = task || this.createTask(operation, {}, message);
    const mergedInput = this.parseMessageInput(targetTask, message, params.metadata);

    targetTask.metadata = {
      ...targetTask.metadata,
      operation,
      input: mergedInput,
      updated_at: nowIso(),
    };
    this.persistTask(targetTask);
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
      targetTask = this.getTask(targetTask.id, { refresh: false }) || targetTask;
    }

    const evaluation = evaluateTaskOperation(operation, mergedInput);
    const result = await this.startProcessing(targetTask, evaluation, {
      blocking: params.configuration?.blocking === true,
    });

    return {
      task: targetTask,
      result: compactTask(targetTask, getHistoryLength(params)),
      blocking: params.configuration?.blocking === true,
    };
  }

  handleTasksGet(params = {}) {
    const task = this.getTask(params.id, { refresh: true });
    if (!task) {
      const error = new Error(`Task '${params.id}' was not found.`);
      error.code = -32001;
      throw error;
    }
    return compactTask(task, getHistoryLength(params));
  }

  handleTasksCancel(params = {}) {
    const task = this.getTask(params.id, { refresh: true });
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
    const leaseState = this.activeLeases.get(task.id);
    if (leaseState) {
      leaseState.revoked = true;
    }
    if (this.queueEnabled && typeof this.coordinator.clearTaskLease === "function") {
      void this.coordinator.clearTaskLease(task.id).catch((error) => {
        this.coordinationError = error instanceof Error ? error.message : String(error);
      });
    }
    this.setTaskStatus(task, "canceled", `Canceled ${task.metadata.operation} at client request.`, {
      operation: task.metadata.operation,
    }, { final: true });

    return compactTask(this.getTask(task.id, { refresh: true }) || task);
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
