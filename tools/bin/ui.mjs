#!/usr/bin/env node

import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawn } from "node:child_process";
import React, { useMemo, useState } from "react";
import { render, Box, Text, useApp, useInput } from "ink";

const h = React.createElement;
const require = createRequire(import.meta.url);

const {
  DEFAULT_STATE_PATH,
  loadCliState,
  saveCliState,
  recordRecentInstall,
  recordRecentService,
  saveInstallPreset,
  saveServicePreset,
  toggleFavoriteSkill,
  toggleFavoriteBundle,
} = require("../lib/cli-state.js");

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const CLI_SCRIPT = path.join(ROOT, "tools", "bin", "cli.js");
const CATALOG_CORE = path.join(ROOT, "packages", "catalog-core", "src", "index.js");
const LOCAL_SIDECAR = path.join(ROOT, "packages", "server-mcp", "src", "local-sidecar.js");

const BRAND_LOGO = [
  "  ____                 _   _____ _    _ _ _     ",
  " / __ \\/___ ___  ____  (_) / ___/| | _(_) | |___ ",
  "/ / / / _ `__ \\/ __ \\/ /  \\__ \\ | |/ / | | / __|",
  "/ /_/ / / / / / / / / /  ___/ / |   <| | | \\__ \\",
  "\\____/_/ /_/ /_/_/ /_/  /____/  |_|\\_\\_|_|_|___/",
];

const KNOWN_INSTALL_TARGETS = [
  {
    id: "claude-code",
    name: "Claude Code",
    flag: "--claude",
    path: () => path.join(os.homedir(), ".claude", "skills"),
  },
  {
    id: "cursor",
    name: "Cursor",
    flag: "--cursor",
    path: () => path.join(os.homedir(), ".cursor", "skills"),
  },
  {
    id: "gemini-cli",
    name: "Gemini CLI",
    flag: "--gemini",
    path: () => path.join(os.homedir(), ".gemini", "skills"),
  },
  {
    id: "codex-cli",
    name: "Codex CLI",
    flag: "--codex",
    path: () => path.join(process.env.CODEX_HOME || path.join(os.homedir(), ".codex"), "skills"),
  },
  {
    id: "kiro",
    name: "Kiro",
    flag: "--kiro",
    path: () => path.join(os.homedir(), ".kiro", "skills"),
  },
  {
    id: "antigravity",
    name: "Antigravity",
    flag: "--antigravity",
    path: () => path.join(os.homedir(), ".gemini", "antigravity", "skills"),
  },
  {
    id: "opencode",
    name: "OpenCode",
    flag: "--opencode",
    path: () => path.join(process.cwd(), ".agents", "skills"),
  },
];

const TOOL_INSTALL_FLAGS = {
  "claude-code": "--claude",
  cursor: "--cursor",
  "gemini-cli": "--gemini",
  "codex-cli": "--codex",
  kiro: "--kiro",
  antigravity: "--antigravity",
  opencode: "--opencode",
};

function normalizeToolId(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function listKnownInstallTargets() {
  return KNOWN_INSTALL_TARGETS.map((target) => ({
    ...target,
    resolvedPath: target.path(),
  }));
}

function expandUserPath(value) {
  return String(value || "").replace(/^~(?=$|\/)/, os.homedir());
}

function resolveCustomPath(value) {
  const expanded = expandUserPath(value).trim();
  return expanded ? path.resolve(expanded) : "";
}

function buildInstallerArgs({ tool, targetPath, skillId, bundleId }) {
  const args = [];
  const normalizedTool = normalizeToolId(tool);
  const flag = TOOL_INSTALL_FLAGS[normalizedTool];
  if (targetPath) {
    args.push("--path", targetPath);
  } else if (flag) {
    args.push(flag);
  }
  if (skillId) {
    args.push("--skill", skillId);
  }
  if (bundleId) {
    args.push("--bundle", bundleId);
  }
  return args;
}

function renderInstallerCommand(args) {
  return `npx omni-skills ${args.join(" ")}`.trim();
}

function normalizeTransportMode(value) {
  const normalized = String(value || "stream").trim().toLowerCase();
  if (normalized === "http") {
    return "stream";
  }
  return normalized || "stream";
}

function defaultMcpConfigUrl(transport) {
  return normalizeTransportMode(transport) === "sse"
    ? "http://127.0.0.1:3334/sse"
    : "http://127.0.0.1:3334/mcp";
}

function buildConfigMcpArgs({
  configTarget = "",
  filePath = "",
  transport = "stream",
  url = "",
  serverName = "omni-skills",
  write = false,
}) {
  const args = ["config-mcp"];
  if (configTarget) {
    args.push("--target", configTarget);
  }
  if (filePath) {
    args.push("--file", filePath);
  }
  args.push("--transport", normalizeTransportMode(transport));
  if (normalizeTransportMode(transport) !== "stdio" && url) {
    args.push("--url", url);
  }
  if (serverName && serverName !== "omni-skills") {
    args.push("--server-name", serverName);
  }
  if (write) {
    args.push("--write");
  }
  return args;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\\s-]/g, " ")
    .replace(/\\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalizeText(value)
    .split(" ")
    .filter(Boolean);
}

function scoreBundle(bundle, query) {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return 0;
  }

  const haystacks = [
    bundle.id,
    bundle.name,
    bundle.description,
    bundle.intended_for,
    ...(bundle.skill_ids || []),
  ].map(normalizeText);

  let score = 0;
  for (const token of tokens) {
    if (haystacks.some((value) => value === token)) {
      score += 6;
      continue;
    }
    if (haystacks.some((value) => value.includes(token))) {
      score += 2;
    }
  }
  return score;
}

function searchBundleMatches(bundles, query) {
  return bundles
    .map((bundle) => ({ ...bundle, _score: scoreBundle(bundle, query) }))
    .filter((bundle) => bundle._score > 0)
    .sort((left, right) => right._score - left._score || left.id.localeCompare(right.id))
    .map(({ _score, ...bundle }) => bundle);
}

function buildMcpLaunch(draft) {
  const args = ["mcp", draft.transport];
  const env = {};

  if (draft.localMode) {
    args.push("--local");
  }
  if (draft.transport !== "stdio") {
    if (draft.host) {
      args.push("--host", draft.host);
    }
    if (draft.port) {
      args.push("--port", String(draft.port));
    }
  }

  const command = `npx omni-skills ${args.join(" ")}`;
  return {
    label: `Start MCP (${draft.transport})`,
    script: CLI_SCRIPT,
    args,
    env,
    command,
    record: {
      service: "mcp",
      transport: draft.transport,
      mode: draft.localMode ? "local" : "read-only",
      host: draft.host || "",
      port: draft.port || "",
      command,
    },
  };
}

function buildApiLaunch(draft) {
  const args = ["api"];
  const env = {};

  if (draft.host) {
    args.push("--host", draft.host);
  }
  if (draft.port) {
    args.push("--port", String(draft.port));
  }
  if (draft.hardened && draft.authMode === "bearer" && draft.bearerToken) {
    env.OMNI_SKILLS_HTTP_BEARER_TOKEN = draft.bearerToken;
  }
  if (draft.hardened && draft.authMode === "api-key" && draft.apiKeys) {
    env.OMNI_SKILLS_HTTP_API_KEYS = draft.apiKeys;
  }
  if (draft.hardened && draft.rateLimitMax) {
    env.OMNI_SKILLS_RATE_LIMIT_MAX = String(draft.rateLimitMax);
  }
  if (draft.hardened && draft.rateLimitWindowMs) {
    env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS = String(draft.rateLimitWindowMs);
  }
  if (draft.hardened && draft.auditLog) {
    env.OMNI_SKILLS_HTTP_AUDIT_LOG = "1";
  }

  const envPreview = [
    env.OMNI_SKILLS_HTTP_BEARER_TOKEN ? "OMNI_SKILLS_HTTP_BEARER_TOKEN=***" : "",
    env.OMNI_SKILLS_HTTP_API_KEYS ? "OMNI_SKILLS_HTTP_API_KEYS=***" : "",
    env.OMNI_SKILLS_RATE_LIMIT_MAX ? `OMNI_SKILLS_RATE_LIMIT_MAX=${env.OMNI_SKILLS_RATE_LIMIT_MAX}` : "",
    env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS
      ? `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=${env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS}`
      : "",
    env.OMNI_SKILLS_HTTP_AUDIT_LOG ? "OMNI_SKILLS_HTTP_AUDIT_LOG=1" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const command = `${envPreview ? `${envPreview} ` : ""}npx omni-skills ${args.join(" ")}`.trim();
  return {
    label: "Start Catalog API",
    script: CLI_SCRIPT,
    args,
    env,
    command,
    record: {
      service: "api",
      mode: draft.authMode === "none" ? "basic" : "hardened",
      host: draft.host || "",
      port: draft.port || "",
      command,
    },
  };
}

function buildA2aLaunch(draft) {
  const args = ["a2a"];
  const env = {};

  if (draft.host) {
    args.push("--host", draft.host);
  }
  if (draft.port) {
    args.push("--port", String(draft.port));
  }
  if (draft.baseUrl) {
    args.push("--base-url", draft.baseUrl);
  }

  if (draft.storeType) {
    env.OMNI_SKILLS_A2A_STORE_TYPE = draft.storeType;
  }
  if (draft.storePath) {
    env.OMNI_SKILLS_A2A_STORE_PATH = draft.storePath;
  }
  if (draft.executorMode) {
    env.OMNI_SKILLS_A2A_EXECUTOR = draft.executorMode;
  }
  if (draft.queueEnabled) {
    env.OMNI_SKILLS_A2A_QUEUE_ENABLED = "1";
  }
  if (draft.workerPollMs) {
    env.OMNI_SKILLS_A2A_WORKER_POLL_MS = String(draft.workerPollMs);
  }
  if (draft.leaseMs) {
    env.OMNI_SKILLS_A2A_LEASE_MS = String(draft.leaseMs);
  }

  const envPreview = [
    env.OMNI_SKILLS_A2A_STORE_TYPE ? `OMNI_SKILLS_A2A_STORE_TYPE=${env.OMNI_SKILLS_A2A_STORE_TYPE}` : "",
    env.OMNI_SKILLS_A2A_STORE_PATH ? `OMNI_SKILLS_A2A_STORE_PATH=${env.OMNI_SKILLS_A2A_STORE_PATH}` : "",
    env.OMNI_SKILLS_A2A_QUEUE_ENABLED ? "OMNI_SKILLS_A2A_QUEUE_ENABLED=1" : "",
    env.OMNI_SKILLS_A2A_WORKER_POLL_MS
      ? `OMNI_SKILLS_A2A_WORKER_POLL_MS=${env.OMNI_SKILLS_A2A_WORKER_POLL_MS}`
      : "",
    env.OMNI_SKILLS_A2A_LEASE_MS ? `OMNI_SKILLS_A2A_LEASE_MS=${env.OMNI_SKILLS_A2A_LEASE_MS}` : "",
    env.OMNI_SKILLS_A2A_EXECUTOR ? `OMNI_SKILLS_A2A_EXECUTOR=${env.OMNI_SKILLS_A2A_EXECUTOR}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const command = `${envPreview ? `${envPreview} ` : ""}npx omni-skills ${args.join(" ")}`.trim();
  return {
    label: "Start A2A Runtime",
    script: CLI_SCRIPT,
    args,
    env,
    command,
    record: {
      service: "a2a",
      mode: `${draft.storeType || "json"} + ${draft.executorMode || "inline"}`,
      host: draft.host || "",
      port: draft.port || "",
      storeType: draft.storeType || "json",
      executorMode: draft.executorMode || "inline",
      command,
    },
  };
}

function buildConfigMcpLaunch(draft, sidecar) {
  const preview = sidecar.configureClientMcp({
    config_target: draft.configTarget || undefined,
    file_path: draft.configFilePath || undefined,
    server_name: draft.serverName || "omni-skills",
    transport: draft.transport || "stream",
    url: draft.transport === "stdio" ? "" : draft.url || defaultMcpConfigUrl(draft.transport),
    dry_run: true,
  });
  const args = buildConfigMcpArgs({
    configTarget: draft.configTarget,
    filePath: draft.configFilePath,
    transport: draft.transport,
    url: draft.transport === "stdio" ? "" : draft.url || defaultMcpConfigUrl(draft.transport),
    serverName: draft.serverName || "omni-skills",
    write: true,
  });
  const command = renderInstallerCommand(args);
  return {
    preview,
    label: "Write MCP client config",
    script: CLI_SCRIPT,
    args,
    env: {},
    command,
    record: {
      service: "mcp-config",
      mode: preview.config_profile,
      transport: draft.transport,
      targetId: draft.configTarget || "",
      targetPath: preview.config_path,
      serverName: preview.server_name,
      url: draft.transport === "stdio" ? "" : draft.url || defaultMcpConfigUrl(draft.transport),
      command,
    },
  };
}

function emptyInstallDraft() {
  return {
    tool: "",
    targetLabel: "",
    targetPath: "",
    scope: "",
    skillId: "",
    bundleId: "",
    query: "",
  };
}

function emptyServiceDraft() {
  return {
    service: "",
    transport: "stream",
    localMode: true,
    host: "127.0.0.1",
    port: "",
    url: "",
    configTarget: "",
    configFilePath: "",
    serverName: "omni-skills",
    authMode: "none",
    hardened: false,
    bearerToken: "",
    apiKeys: "",
    rateLimitMax: "60",
    rateLimitWindowMs: "60000",
    auditLog: true,
    storeType: "json",
    storePath: "",
    executorMode: "inline",
    queueEnabled: false,
    workerPollMs: "250",
    leaseMs: "4000",
    baseUrl: "",
  };
}

function buildInstallRecord(draft, skill, bundle, installerArgs, command) {
  return {
    tool: draft.tool || "",
    targetPath: draft.targetPath,
    targetLabel: draft.targetLabel,
    scope: draft.scope,
    skillId: skill?.id || "",
    bundleId: bundle?.id || "",
    command,
    installerArgs,
  };
}

function formatRecentInstall(entry) {
  if (entry.scope === "skill" && entry.skillId) {
    return `${entry.targetLabel || entry.tool || "custom"} • skill ${entry.skillId}`;
  }
  if (entry.scope === "bundle" && entry.bundleId) {
    return `${entry.targetLabel || entry.tool || "custom"} • bundle ${entry.bundleId}`;
  }
  if (entry.scope === "search" && entry.skillId) {
    return `${entry.targetLabel || entry.tool || "custom"} • search → ${entry.skillId}`;
  }
  return `${entry.targetLabel || entry.tool || "custom"} • full library`;
}

function formatRecentService(entry) {
  if (entry.service === "mcp-config") {
    return `MCP config • ${entry.targetId || "custom"} • ${entry.transport || "stream"}`;
  }
  if (entry.service === "mcp") {
    return `MCP ${entry.transport || "stdio"} • ${entry.mode || "read-only"} • ${entry.port || "stdio"}`;
  }
  if (entry.service === "api") {
    return `API • ${entry.host || "127.0.0.1"}:${entry.port || "3333"}`;
  }
  if (entry.service === "a2a") {
    return `A2A • ${entry.storeType || "json"} • ${entry.executorMode || "inline"}`;
  }
  return entry.service || "service";
}

function screenFooter(hint, extra = "") {
  return `${hint}${extra ? ` • ${extra}` : ""}`;
}

function Panel({ title, children }) {
  return h(
    Box,
    {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: "cyan",
      paddingX: 1,
      paddingY: 0,
      marginBottom: 1,
    },
    title ? h(Text, { color: "cyanBright" }, title) : null,
    children,
  );
}

function Header({ title, subtitle, status }) {
  return h(
    Box,
    { flexDirection: "column", marginBottom: 1 },
    h(Text, { color: "cyanBright" }, BRAND_LOGO.join("\n")),
    h(Text, { color: "whiteBright" }, title),
    subtitle ? h(Text, { color: "gray" }, subtitle) : null,
    status ? h(Text, { color: "yellow" }, status) : null,
  );
}

function Screen({ title, subtitle, status, footer, children }) {
  return h(
    Box,
    { flexDirection: "column", paddingX: 1, paddingY: 0 },
    h(Header, { title, subtitle, status }),
    children,
    footer ? h(Text, { color: "gray" }, footer) : null,
  );
}

function MenuList({ items, onSelect, onBack }) {
  const [index, setIndex] = useState(0);

  useInput((input, key) => {
    if (key.upArrow) {
      setIndex((current) => (current <= 0 ? items.length - 1 : current - 1));
      return;
    }
    if (key.downArrow) {
      setIndex((current) => (current >= items.length - 1 ? 0 : current + 1));
      return;
    }
    if (key.return) {
      onSelect(items[index]);
      return;
    }
    if (key.escape && onBack) {
      onBack();
      return;
    }
    if (input >= "1" && input <= "9") {
      const target = Number.parseInt(input, 10) - 1;
      if (items[target]) {
        onSelect(items[target]);
      }
    }
  });

  return h(
    Panel,
    { title: "Options" },
    ...items.map((item, itemIndex) =>
      h(
        Box,
        {
          key: item.id || item.value || String(itemIndex),
          flexDirection: "column",
          marginBottom: itemIndex === items.length - 1 ? 0 : 1,
        },
        h(
          Text,
          { color: itemIndex === index ? "greenBright" : "white" },
          `${itemIndex === index ? "❯" : " "} ${itemIndex + 1}. ${item.label}`,
        ),
        item.description ? h(Text, { color: "gray" }, `    ${item.description}`) : null,
      ),
    ),
  );
}

function MenuScreen({ title, subtitle, items, onSelect, onBack, status, footer }) {
  return h(
    Screen,
    {
      title,
      subtitle,
      status,
      footer:
        footer ||
        screenFooter(
          "↑/↓ move",
          onBack ? "Enter select • Esc back • Ctrl+C exit" : "Enter select • Ctrl+C exit",
        ),
    },
    h(MenuList, { items, onSelect, onBack }),
  );
}

function TextPromptScreen({
  title,
  subtitle,
  label,
  initialValue,
  onSubmit,
  onBack,
  status,
  placeholder = "",
  validate,
}) {
  const [value, setValue] = useState(initialValue || "");
  const [error, setError] = useState("");

  useInput((input, key) => {
    if (key.escape && onBack) {
      onBack();
      return;
    }
    if (key.return) {
      const validationError = validate ? validate(value) : "";
      if (validationError) {
        setError(validationError);
        return;
      }
      onSubmit(value);
      return;
    }
    if (key.backspace || key.delete) {
      setValue((current) => current.slice(0, -1));
      return;
    }
    if (key.ctrl || key.meta || key.tab || key.upArrow || key.downArrow || key.leftArrow || key.rightArrow) {
      return;
    }
    if (input) {
      setValue((current) => current + input);
      setError("");
    }
  });

  return h(
    Screen,
    {
      title,
      subtitle,
      status: error || status,
      footer: screenFooter("Type and press Enter", onBack ? "Esc back • Ctrl+C exit" : "Ctrl+C exit"),
    },
    h(
      Panel,
      { title: label },
      h(Text, { color: "greenBright" }, `> ${value || placeholder || ""}`),
    ),
  );
}

function SummaryLines({ lines }) {
  return h(
    Panel,
    { title: "Preview" },
    ...lines.map((line, index) =>
      h(Text, { key: String(index), color: line.color || "white" }, `${line.label}: ${line.value}`),
    ),
  );
}

function TextPreviewPanel({ title, text, color = "white", maxLines = 18 }) {
  const lines = String(text || "")
    .split("\n")
    .filter(Boolean)
    .slice(0, maxLines);
  return h(
    Panel,
    { title },
    ...(lines.length > 0
      ? lines.map((line, index) => h(Text, { key: `${title}-${index}`, color }, line))
      : [h(Text, { key: `${title}-empty`, color: "gray" }, "No preview available.")]),
  );
}

function launchActionPreview(action, persistState, exitWithAction) {
  if (action.kind === "install") {
    persistState((current) => recordRecentInstall(current, action.record));
  } else if (action.kind === "service") {
    persistState((current) => recordRecentService(current, action.record));
  }
  exitWithAction(action.launch);
}

function OmniSkillsUi({ catalog, bundles, core, sidecar, initialState, persistState, onHandoff }) {
  const { exit } = useApp();
  const [cliState, setCliState] = useState(initialState);
  const [stack, setStack] = useState([{ id: "home" }]);
  const [installDraft, setInstallDraft] = useState(emptyInstallDraft());
  const [serviceDraft, setServiceDraft] = useState(emptyServiceDraft());
  const [flash, setFlash] = useState("");

  const currentScreen = stack[stack.length - 1];
  const bundleList = useMemo(() => bundles || [], [bundles]);
  const skillList = useMemo(() => [...(catalog.skills || [])], [catalog]);
  const bundleMap = useMemo(
    () => new Map(bundleList.map((bundle) => [bundle.id, bundle])),
    [bundleList],
  );
  const skillMap = useMemo(
    () => new Map(skillList.map((skill) => [skill.id, skill])),
    [skillList],
  );
  const configTargetList = useMemo(() => {
    const detection = sidecar.detectClients();
    return [...(detection.config_targets || [])].sort((left, right) => left.id.localeCompare(right.id));
  }, [sidecar]);

  function saveState(update) {
    setCliState((current) => {
      const next = typeof update === "function" ? update(current) : update;
      return persistState(next);
    });
  }

  function goHome() {
    setStack([{ id: "home" }]);
    setFlash("");
  }

  function push(screen) {
    setStack((current) => [...current, screen]);
    setFlash("");
  }

  function pop() {
    setStack((current) => (current.length > 1 ? current.slice(0, -1) : current));
    setFlash("");
  }

  function startInstallFlow(initialScope = "") {
    setInstallDraft(emptyInstallDraft());
    if (initialScope) {
      setInstallDraft((current) => ({ ...current, scope: initialScope }));
    }
    setStack([{ id: "home" }, { id: "install-target" }]);
  }

  function startServiceFlow() {
    setServiceDraft(emptyServiceDraft());
    setStack([{ id: "home" }, { id: "service-kind" }]);
  }

  function exitWithAction(action) {
    onHandoff(action);
    exit();
  }

  function persistFavoriteSkill(skillId) {
    saveState((current) => toggleFavoriteSkill(current, skillId));
  }

  function persistFavoriteBundle(bundleId) {
    saveState((current) => toggleFavoriteBundle(current, bundleId));
  }

  function buildInstallPreviewAction() {
    const skill = installDraft.skillId ? skillMap.get(installDraft.skillId) : null;
    const bundle = installDraft.bundleId ? bundleMap.get(installDraft.bundleId) : null;
    const installerArgs = buildInstallerArgs({
      tool: installDraft.tool,
      targetPath: installDraft.tool ? null : installDraft.targetPath,
      skillId: skill?.id || "",
      bundleId: bundle?.id || "",
    });
    const command = renderInstallerCommand(installerArgs);
    const action = {
      kind: "install",
      record: buildInstallRecord(installDraft, skill, bundle, installerArgs, command),
      launch: {
        script: CLI_SCRIPT,
        args: installerArgs,
        env: {},
      },
      previewLines: [
        { label: "Target", value: installDraft.targetLabel || "Custom path" },
        { label: "Path", value: installDraft.targetPath },
        {
          label: "Scope",
          value:
            installDraft.scope === "skill"
              ? `Single skill (${skill?.id || ""})`
              : installDraft.scope === "bundle"
                ? `Bundle (${bundle?.id || ""})`
                : installDraft.scope === "search"
                  ? bundle
                    ? `Search → bundle (${bundle.id})`
                    : `Search → skill (${skill?.id || ""})`
                  : "Full library",
        },
        { label: "Command", value: command, color: "greenBright" },
      ],
      skill,
      bundle,
    };
    return action;
  }

  function buildServicePreviewAction() {
    if (serviceDraft.service === "mcp-config") {
      try {
        const launch = buildConfigMcpLaunch(serviceDraft, sidecar);
        return {
          kind: "service",
          record: launch.record,
          launch: {
            script: CLI_SCRIPT,
            args: launch.args,
            env: launch.env,
          },
          previewLines: [
            { label: "Service", value: "MCP client config" },
            { label: "Target", value: launch.preview.target_name || serviceDraft.configTarget || "custom file" },
            { label: "Path", value: launch.preview.config_path },
            { label: "Profile", value: `${launch.preview.config_profile} (${launch.preview.config_format})` },
            { label: "Transport", value: serviceDraft.transport },
            { label: "Command", value: launch.command, color: "greenBright" },
          ],
          previewText: launch.preview.next_config_text,
          previewNotes: [
            ...(launch.preview.instructions || []).map((line) => `Instruction: ${line}`),
            ...(launch.preview.recipes || []).map((recipe) => `Recipe (${recipe.client}): ${recipe.command}`),
          ],
          invalid: false,
        };
      } catch (error) {
        return {
          kind: "service",
          record: {
            service: "mcp-config",
            mode: "invalid",
            transport: serviceDraft.transport,
            targetId: serviceDraft.configTarget || "",
            targetPath: serviceDraft.configFilePath || "",
            serverName: serviceDraft.serverName || "omni-skills",
            url: serviceDraft.url || "",
            command: "",
          },
          launch: null,
          previewLines: [
            { label: "Service", value: "MCP client config" },
            { label: "Status", value: "invalid draft", color: "redBright" },
          ],
          previewText: "",
          previewNotes: [String(error.message || error)],
          invalid: true,
        };
      }
    }
    if (serviceDraft.service === "mcp") {
      const launch = buildMcpLaunch(serviceDraft);
      return {
        kind: "service",
        record: launch.record,
        launch: {
          script: CLI_SCRIPT,
          args: launch.args,
          env: launch.env,
        },
        previewLines: [
          { label: "Service", value: "MCP" },
          { label: "Transport", value: serviceDraft.transport },
          { label: "Mode", value: serviceDraft.localMode ? "local sidecar" : "read-only" },
          { label: "Command", value: launch.command, color: "greenBright" },
        ],
      };
    }
    if (serviceDraft.service === "api") {
      const launch = buildApiLaunch(serviceDraft);
      return {
        kind: "service",
        record: launch.record,
        launch: {
          script: CLI_SCRIPT,
          args: launch.args,
          env: launch.env,
        },
        previewLines: [
          { label: "Service", value: "Catalog API" },
          { label: "Host", value: serviceDraft.host },
          { label: "Port", value: serviceDraft.port || "3333" },
          { label: "Security", value: serviceDraft.authMode === "none" ? "basic" : "hardened" },
          { label: "Command", value: launch.command, color: "greenBright" },
        ],
      };
    }
    const launch = buildA2aLaunch(serviceDraft);
    return {
      kind: "service",
      record: launch.record,
      launch: {
        script: CLI_SCRIPT,
        args: launch.args,
        env: launch.env,
      },
      previewLines: [
        { label: "Service", value: "A2A" },
        { label: "Host", value: serviceDraft.host },
        { label: "Port", value: serviceDraft.port || "3335" },
        { label: "Store", value: serviceDraft.storeType },
        { label: "Executor", value: serviceDraft.executorMode },
        { label: "Command", value: launch.command, color: "greenBright" },
      ],
    };
  }

  if (currentScreen.id === "home") {
    const homeItems = [
      {
        id: "install",
        label: "Install skills",
        description: "Choose a client or custom path, then install a skill, bundle, or the full library.",
      },
      {
        id: "find-install",
        label: "Find and install",
        description: "Search the catalog first, then install the matching skill or bundle.",
      },
      ...(cliState.recentInstalls.length
        ? [
            {
              id: "recent-install",
              label: "Repeat recent install",
              description: `${cliState.recentInstalls.length} recent install run(s) saved locally.`,
            },
          ]
        : []),
      ...(cliState.installPresets.length
        ? [
            {
              id: "install-presets",
              label: "Run saved install preset",
              description: `${cliState.installPresets.length} saved install preset(s).`,
            },
          ]
        : []),
      {
        id: "service",
        label: "Start a service",
        description: "Launch MCP, API, or A2A with guided configuration.",
      },
      ...(cliState.recentServices.length
        ? [
            {
              id: "recent-service",
              label: "Repeat recent service launch",
              description: `${cliState.recentServices.length} recent service run(s) saved locally.`,
            },
          ]
        : []),
      ...(cliState.servicePresets.length
        ? [
            {
              id: "service-presets",
              label: "Run saved service preset",
              description: `${cliState.servicePresets.length} saved service preset(s).`,
            },
          ]
        : []),
      {
        id: "doctor",
        label: "Run doctor",
        description: "Inspect repo, binaries, default targets, and catalog files.",
      },
      {
        id: "smoke",
        label: "Run smoke checks",
        description: "Execute build, packaging, service probes, and validation checks.",
      },
      {
        id: "exit",
        label: "Exit",
        description: "Leave the visual shell without running anything.",
      },
    ];

    return h(
      Screen,
      {
        title: "Visual terminal hub",
        subtitle: "Branded operator shell for install, discovery, and service launch.",
        status: flash || `${catalog.total_skills} published skills • state stored at ${DEFAULT_STATE_PATH}`,
        footer: screenFooter("↑/↓ move", "Enter select • Ctrl+C exit"),
      },
      h(
        Box,
        { flexDirection: "row", gap: 2 },
        h(
          Box,
          { flexDirection: "column", width: "62%" },
          h(
            Panel,
            { title: "Choose an action" },
            h(MenuList, {
              items: homeItems,
              onSelect: (item) => {
                if (item.id === "install") {
                  startInstallFlow("");
                  return;
                }
                if (item.id === "find-install") {
                  startInstallFlow("search");
                  return;
                }
                if (item.id === "recent-install") {
                  push({ id: "recent-install-list" });
                  return;
                }
                if (item.id === "install-presets") {
                  push({ id: "install-preset-list" });
                  return;
                }
                if (item.id === "service") {
                  startServiceFlow();
                  return;
                }
                if (item.id === "recent-service") {
                  push({ id: "recent-service-list" });
                  return;
                }
                if (item.id === "service-presets") {
                  push({ id: "service-preset-list" });
                  return;
                }
                if (item.id === "doctor") {
                  exitWithAction({ script: CLI_SCRIPT, args: ["doctor"], env: {} });
                  return;
                }
                if (item.id === "smoke") {
                  exitWithAction({ script: CLI_SCRIPT, args: ["smoke"], env: {} });
                  return;
                }
                exit();
              },
            }),
          ),
        ),
        h(
          Box,
          { flexDirection: "column", width: "38%" },
          h(
            Panel,
            { title: "State Snapshot" },
            h(Text, { color: "white" }, `Recent installs: ${cliState.recentInstalls.length}`),
            h(Text, { color: "white" }, `Recent services: ${cliState.recentServices.length}`),
            h(Text, { color: "white" }, `Install presets: ${cliState.installPresets.length}`),
            h(Text, { color: "white" }, `Service presets: ${cliState.servicePresets.length}`),
            h(Text, { color: "white" }, `Favorite skills: ${cliState.favorites.skills.length}`),
            h(Text, { color: "white" }, `Favorite bundles: ${cliState.favorites.bundles.length}`),
          ),
          h(
            Panel,
            { title: "Published Bundles" },
            ...bundleList.slice(0, 6).map((bundle) =>
              h(
                Text,
                { key: bundle.id, color: "white" },
                `${bundle.id} • ${bundle.availability.available}/${bundle.availability.total}`,
              ),
            ),
          ),
        ),
      ),
    );
  }

  if (currentScreen.id === "recent-install-list") {
    return h(MenuScreen, {
      title: "Recent installs",
      subtitle: "Re-run an install without re-entering all choices.",
      items: cliState.recentInstalls.map((entry) => ({
        id: entry.id,
        label: formatRecentInstall(entry),
        description: entry.command,
      })),
      onBack: goHome,
      onSelect: (item) => {
        const selected = cliState.recentInstalls.find((entry) => entry.id === item.id);
        setInstallDraft({
          tool: selected.tool || "",
          targetLabel: selected.targetLabel || (selected.tool ? selected.tool : "Custom path"),
          targetPath: selected.targetPath || "",
          scope: selected.scope || "full",
          skillId: selected.skillId || "",
          bundleId: selected.bundleId || "",
          query: "",
        });
        push({ id: "install-preview" });
      },
    });
  }

  if (currentScreen.id === "install-preset-list") {
    return h(MenuScreen, {
      title: "Saved install presets",
      subtitle: "Named install configurations saved locally.",
      items: cliState.installPresets.map((entry) => ({
        id: entry.id,
        label: `${entry.name} • ${formatRecentInstall(entry)}`,
        description: entry.command,
      })),
      onBack: goHome,
      onSelect: (item) => {
        const selected = cliState.installPresets.find((entry) => entry.id === item.id);
        setInstallDraft({
          tool: selected.tool || "",
          targetLabel: selected.targetLabel || (selected.tool ? selected.tool : "Custom path"),
          targetPath: selected.targetPath || "",
          scope: selected.scope || "full",
          skillId: selected.skillId || "",
          bundleId: selected.bundleId || "",
          query: "",
        });
        push({ id: "install-preview" });
      },
    });
  }

  if (currentScreen.id === "recent-service-list") {
    return h(MenuScreen, {
      title: "Recent services",
      subtitle: "Repeat a service launch with the same configuration.",
      items: cliState.recentServices.map((entry) => ({
        id: entry.id,
        label: formatRecentService(entry),
        description: entry.command,
      })),
      onBack: goHome,
      onSelect: (item) => {
        const selected = cliState.recentServices.find((entry) => entry.id === item.id);
        setServiceDraft({
          ...emptyServiceDraft(),
          service: selected.service,
          transport: selected.transport || "stream",
          localMode: selected.mode === "local",
          host: selected.host || "127.0.0.1",
          port: selected.port || "",
          url: selected.url || "",
          storeType: selected.storeType || "json",
          executorMode: selected.executorMode || "inline",
          configTarget: selected.targetId || "",
          configFilePath: selected.targetPath || "",
          serverName: selected.serverName || "omni-skills",
        });
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "service-preset-list") {
    return h(MenuScreen, {
      title: "Saved service presets",
      subtitle: "Named service launch configurations saved locally.",
      items: cliState.servicePresets.map((entry) => ({
        id: entry.id,
        label: `${entry.name} • ${formatRecentService(entry)}`,
        description: entry.command,
      })),
      onBack: goHome,
      onSelect: (item) => {
        const selected = cliState.servicePresets.find((entry) => entry.id === item.id);
        setServiceDraft({
          ...emptyServiceDraft(),
          service: selected.service,
          transport: selected.transport || "stream",
          localMode: selected.mode === "local",
          host: selected.host || "127.0.0.1",
          port: selected.port || "",
          url: selected.url || "",
          storeType: selected.storeType || "json",
          executorMode: selected.executorMode || "inline",
          configTarget: selected.targetId || "",
          configFilePath: selected.targetPath || "",
          serverName: selected.serverName || "omni-skills",
        });
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "install-target") {
    const items = [
      ...listKnownInstallTargets().map((target) => ({
        id: target.id,
        label: target.name,
        description: target.resolvedPath,
      })),
      {
        id: "custom-path",
        label: "Custom path",
        description: "Install into any absolute or ~-prefixed directory you choose.",
      },
    ];

    return h(MenuScreen, {
      title: "Choose an install destination",
      subtitle: "The guided flow no longer assumes Antigravity in interactive mode.",
      items,
      onBack: goHome,
      onSelect: (item) => {
        if (item.id === "custom-path") {
          push({ id: "install-custom-path" });
          return;
        }
        const target = listKnownInstallTargets().find((candidate) => candidate.id === item.id);
        setInstallDraft((current) => ({
          ...current,
          tool: target.id,
          targetLabel: target.name,
          targetPath: target.resolvedPath,
        }));
        if (installDraft.scope === "search") {
          push({ id: "install-search-query" });
          return;
        }
        push({ id: "install-scope" });
      },
    });
  }

  if (currentScreen.id === "install-custom-path") {
    return h(TextPromptScreen, {
      title: "Choose a custom install path",
      subtitle: "The resolved absolute path will be shown in preview before anything is written.",
      label: "Custom path",
      initialValue: installDraft.targetPath || "",
      onBack: pop,
      validate: (value) => (!resolveCustomPath(value) ? "Please enter a non-empty path." : ""),
      onSubmit: (value) => {
        const resolved = resolveCustomPath(value);
        setInstallDraft((current) => ({
          ...current,
          tool: "",
          targetLabel: "Custom path",
          targetPath: resolved,
        }));
        if (installDraft.scope === "search") {
          push({ id: "install-search-query" });
          return;
        }
        push({ id: "install-scope" });
      },
      placeholder: "~/my-skills",
    });
  }

  if (currentScreen.id === "install-scope") {
    return h(MenuScreen, {
      title: "Choose the install scope",
      subtitle: "Install everything, pick a skill, pick a bundle, or search the catalog first.",
      items: [
        { id: "full", label: "Full library install", description: "Install every published skill." },
        { id: "skill", label: "One published skill", description: "Install one specific skill." },
        { id: "bundle", label: "One curated bundle", description: "Install a published bundle." },
        { id: "search", label: "Search then install", description: "Query the catalog, then install the chosen result." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setInstallDraft((current) => ({ ...current, scope: item.id }));
        if (item.id === "full") {
          push({ id: "install-preview" });
          return;
        }
        if (item.id === "skill") {
          push({ id: "install-skill" });
          return;
        }
        if (item.id === "bundle") {
          push({ id: "install-bundle" });
          return;
        }
        push({ id: "install-search-query" });
      },
    });
  }

  if (currentScreen.id === "install-skill") {
    const skills = [...skillList].sort((left, right) =>
      String(left.display_name || left.id).localeCompare(String(right.display_name || right.id)),
    );
    return h(MenuScreen, {
      title: "Choose a skill",
      subtitle: "Published skills include quality, best-practices, and security scores.",
      items: skills.map((skill) => ({
        id: skill.id,
        label: `${skill.display_name || skill.id} • Q${skill.quality_score} • BP${skill.best_practices_score} • S${skill.security_score}`,
        description: skill.description,
      })),
      onBack: pop,
      onSelect: (item) => {
        setInstallDraft((current) => ({ ...current, skillId: item.id, bundleId: "" }));
        push({ id: "install-preview" });
      },
    });
  }

  if (currentScreen.id === "install-bundle") {
    const sortedBundles = [...bundleList].sort((left, right) => left.id.localeCompare(right.id));
    return h(MenuScreen, {
      title: "Choose a bundle",
      subtitle: "Only fully published starter bundles are listed here.",
      items: sortedBundles.map((bundle) => ({
        id: bundle.id,
        label: `${bundle.name} • ${bundle.availability.available}/${bundle.availability.total}`,
        description: bundle.description,
      })),
      onBack: pop,
      onSelect: (item) => {
        setInstallDraft((current) => ({ ...current, bundleId: item.id, skillId: "" }));
        push({ id: "install-preview" });
      },
    });
  }

  if (currentScreen.id === "install-search-query") {
    return h(TextPromptScreen, {
      title: "Search the catalog",
      subtitle: "Search published skills and bundles, then choose what to install.",
      label: "Search query",
      initialValue: installDraft.query || "",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a search query." : ""),
      onSubmit: (value) => {
        setInstallDraft((current) => ({ ...current, query: String(value || "").trim() }));
        push({ id: "install-search-results" });
      },
      placeholder: "figma, api, security, devops...",
    });
  }

  if (currentScreen.id === "install-search-results") {
    const searchResults = core.searchSkills({ query: installDraft.query, limit: 10 }).results || [];
    const bundleResults = searchBundleMatches(bundleList, installDraft.query).slice(0, 5);
    const items = [
      ...searchResults.map((skill) => ({
        id: `skill:${skill.id}`,
        label: `${skill.display_name || skill.id} • Q${skill.quality_score} • S${skill.security_score}`,
        description: skill.description,
      })),
      ...bundleResults.map((bundle) => ({
        id: `bundle:${bundle.id}`,
        label: `${bundle.name} • ${bundle.availability.available}/${bundle.availability.total}`,
        description: bundle.description,
      })),
    ];

    if (items.length === 0) {
      return h(MenuScreen, {
        title: "No catalog matches",
        subtitle: `Nothing published matched '${installDraft.query}'.`,
        items: [
          {
            id: "retry",
            label: "Back to search",
            description: "Try broader terms or a different wording.",
          },
          {
            id: "home",
            label: "Return home",
            description: "Cancel the current install flow.",
          },
        ],
        onBack: pop,
        onSelect: (item) => {
          if (item.id === "retry") {
            pop();
            return;
          }
          goHome();
        },
      });
    }

    return h(MenuScreen, {
      title: `Choose a match for '${installDraft.query}'`,
      subtitle: "The visual shell can install either a matching skill or a matching bundle.",
      items,
      onBack: pop,
      onSelect: (item) => {
        if (item.id.startsWith("skill:")) {
          setInstallDraft((current) => ({
            ...current,
            scope: "search",
            skillId: item.id.slice("skill:".length),
            bundleId: "",
          }));
        } else {
          setInstallDraft((current) => ({
            ...current,
            scope: "search",
            bundleId: item.id.slice("bundle:".length),
            skillId: "",
          }));
        }
        push({ id: "install-preview" });
      },
    });
  }

    if (currentScreen.id === "install-preview") {
    const preview = buildInstallPreviewAction();
    const previewItems = [
      {
        id: "run",
        label: "Run install now",
        description: "Exit the visual shell and execute the installer backend.",
      },
      {
        id: "save-preset",
        label: "Save install preset",
        description: "Store this configuration for future one-step runs.",
      },
      ...(preview.skill
        ? [
            {
              id: "toggle-favorite-skill",
              label: cliState.favorites.skills.includes(preview.skill.id)
                ? "Remove favorite skill"
                : "Favorite this skill",
              description: preview.skill.id,
            },
          ]
        : []),
      ...(preview.bundle
        ? [
            {
              id: "toggle-favorite-bundle",
              label: cliState.favorites.bundles.includes(preview.bundle.id)
                ? "Remove favorite bundle"
                : "Favorite this bundle",
              description: preview.bundle.id,
            },
          ]
        : []),
      {
        id: "back",
        label: "Back",
        description: "Return to the previous step without losing the draft.",
      },
      {
        id: "cancel",
        label: "Cancel",
        description: "Return to the home screen.",
      },
    ];

    return h(
      Screen,
      {
        title: "Install preview",
        subtitle: "Every write flow shows the resolved destination and command before execution.",
        status: flash,
        footer: screenFooter("↑/↓ move", "Enter select • Esc back • Ctrl+C exit"),
      },
      h(SummaryLines, { lines: preview.previewLines }),
      h(
        Panel,
        { title: "Actions" },
        h(MenuList, {
          items: previewItems,
          onBack: pop,
          onSelect: (item) => {
            if (item.id === "run") {
              launchActionPreview(preview, saveState, exitWithAction);
              return;
            }
            if (item.id === "save-preset") {
              push({ id: "install-save-preset" });
              return;
            }
            if (item.id === "toggle-favorite-skill") {
              persistFavoriteSkill(preview.skill.id);
              setFlash(
                cliState.favorites.skills.includes(preview.skill.id)
                  ? `Removed ${preview.skill.id} from favorites.`
                  : `Added ${preview.skill.id} to favorites.`,
              );
              return;
            }
            if (item.id === "toggle-favorite-bundle") {
              persistFavoriteBundle(preview.bundle.id);
              setFlash(
                cliState.favorites.bundles.includes(preview.bundle.id)
                  ? `Removed ${preview.bundle.id} from favorites.`
                  : `Added ${preview.bundle.id} to favorites.`,
              );
              return;
            }
            if (item.id === "back") {
              pop();
              return;
            }
            goHome();
          },
        }),
      ),
    );
  }

  if (currentScreen.id === "install-save-preset") {
    const preview = buildInstallPreviewAction();
    return h(TextPromptScreen, {
      title: "Save install preset",
      subtitle: "Give this install configuration a reusable name.",
      label: "Preset name",
      initialValue:
        preview.skill?.id ||
        preview.bundle?.id ||
        `${installDraft.targetLabel || "custom"}-${installDraft.scope || "full"}`,
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a preset name." : ""),
      onSubmit: (value) => {
        saveState((current) => saveInstallPreset(current, value, preview.record));
        setFlash(`Saved install preset '${String(value).trim()}'.`);
        pop();
      },
    });
  }

  if (currentScreen.id === "service-kind") {
    return h(MenuScreen, {
      title: "Choose a service",
      subtitle: "The same visual shell can launch services or write MCP client configs.",
      items: [
        { id: "mcp", label: "MCP", description: "Start stdio, stream, or SSE in read-only or local mode." },
        { id: "mcp-config", label: "Configure MCP client", description: "Generate and optionally write client-specific MCP config files." },
        { id: "api", label: "Catalog API", description: "Start the read-only HTTP API with optional hardening." },
        { id: "a2a", label: "A2A", description: "Start the task runtime with store and executor options." },
      ],
      onBack: goHome,
      onSelect: (item) => {
        setServiceDraft((current) => ({
          ...emptyServiceDraft(),
          service: item.id,
          port: item.id === "api" ? "3333" : item.id === "a2a" ? "3335" : "3334",
        }));
        if (item.id === "mcp") {
          push({ id: "mcp-transport" });
          return;
        }
        if (item.id === "mcp-config") {
          push({ id: "config-target" });
          return;
        }
        if (item.id === "api") {
          push({ id: "api-host" });
          return;
        }
        push({ id: "a2a-host" });
      },
    });
  }

  if (currentScreen.id === "config-target") {
    return h(MenuScreen, {
      title: "Choose an MCP client target",
      subtitle: "Pick a supported config target or point at an explicit file path.",
      items: [
        ...configTargetList.map((target) => ({
          id: target.id,
          label: `${target.name} • ${target.config_profile}`,
          description: target.path,
        })),
        {
          id: "custom-file",
          label: "Custom file path",
          description: "Write the generated config into a file path inside the local allowlist.",
        },
      ],
      onBack: pop,
      onSelect: (item) => {
        if (item.id === "custom-file") {
          push({ id: "config-file-path" });
          return;
        }
        setServiceDraft((current) => ({
          ...current,
          configTarget: item.id,
          configFilePath: "",
          serverName: current.serverName || "omni-skills",
        }));
        push({ id: "config-transport" });
      },
    });
  }

  if (currentScreen.id === "config-file-path") {
    return h(TextPromptScreen, {
      title: "Choose a custom MCP config file",
      subtitle: "Use an allowlisted path such as a workspace config file or a user-scoped settings file.",
      label: "Config file path",
      initialValue: serviceDraft.configFilePath || "",
      onBack: pop,
      validate: (value) => (!resolveCustomPath(value) ? "Please enter a non-empty config file path." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({
          ...current,
          configTarget: "",
          configFilePath: resolveCustomPath(value),
          serverName: current.serverName || "omni-skills",
        }));
        push({ id: "config-transport" });
      },
      placeholder: "~/.config/example/mcp.json",
    });
  }

  if (currentScreen.id === "config-transport") {
    return h(MenuScreen, {
      title: "Choose MCP transport",
      subtitle: "Use stdio for local process launch or network transports for hosted endpoints.",
      items: [
        { id: "stdio", label: "stdio", description: "Launch the Omni Skills MCP server as a local process." },
        { id: "stream", label: "stream", description: "Use a streamable HTTP endpoint at /mcp." },
        { id: "sse", label: "sse", description: "Use an SSE endpoint at /sse." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({
          ...current,
          transport: item.id,
          url: item.id === "stdio" ? "" : current.url || defaultMcpConfigUrl(item.id),
        }));
        if (item.id === "stdio") {
          push({ id: "service-preview" });
          return;
        }
        push({ id: "config-url" });
      },
    });
  }

  if (currentScreen.id === "config-url") {
    return h(TextPromptScreen, {
      title: "Choose MCP endpoint URL",
      subtitle: "Preview uses this URL exactly, so paste the final local or hosted endpoint.",
      label: "MCP URL",
      initialValue: serviceDraft.url || defaultMcpConfigUrl(serviceDraft.transport || "stream"),
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter an MCP endpoint URL." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, url: String(value).trim() }));
        push({ id: "service-preview" });
      },
      placeholder: defaultMcpConfigUrl(serviceDraft.transport || "stream"),
    });
  }

  if (currentScreen.id === "mcp-transport") {
    return h(MenuScreen, {
      title: "Choose MCP transport",
      subtitle: "The server supports stdio, streamable HTTP, and SSE.",
      items: [
        { id: "stdio", label: "stdio", description: "Pipe-based transport for local agent wiring." },
        { id: "stream", label: "stream", description: "Streamable HTTP transport." },
        { id: "sse", label: "sse", description: "Server-Sent Events transport." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({ ...current, transport: item.id }));
        push({ id: "mcp-mode" });
      },
    });
  }

  if (currentScreen.id === "mcp-mode") {
    return h(MenuScreen, {
      title: "Choose MCP mode",
      subtitle: "Local mode exposes install and config tools. Read-only mode only serves discovery.",
      items: [
        { id: "local", label: "Local sidecar", description: "Filesystem-aware install, remove, and config tools." },
        { id: "readonly", label: "Read-only", description: "Discovery, compare, recommend, and install preview only." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({ ...current, localMode: item.id === "local" }));
        if (serviceDraft.transport === "stdio") {
          push({ id: "service-preview" });
          return;
        }
        push({ id: "mcp-host" });
      },
    });
  }

  if (currentScreen.id === "mcp-host") {
    return h(TextPromptScreen, {
      title: "Choose MCP host",
      subtitle: "Only needed for stream and SSE transports.",
      label: "Host",
      initialValue: serviceDraft.host || "127.0.0.1",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a host." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, host: String(value).trim() }));
        push({ id: "mcp-port" });
      },
    });
  }

  if (currentScreen.id === "mcp-port") {
    return h(TextPromptScreen, {
      title: "Choose MCP port",
      subtitle: "The selected transport will bind here.",
      label: "Port",
      initialValue: serviceDraft.port || "3334",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a port." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, port: String(value).trim() }));
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "api-host") {
    return h(TextPromptScreen, {
      title: "Choose API host",
      subtitle: "Use 127.0.0.1 for local-only access or 0.0.0.0 for external binding.",
      label: "Host",
      initialValue: serviceDraft.host || "127.0.0.1",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a host." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, host: String(value).trim() }));
        push({ id: "api-port" });
      },
    });
  }

  if (currentScreen.id === "api-port") {
    return h(TextPromptScreen, {
      title: "Choose API port",
      subtitle: "The catalog API defaults to 3333.",
      label: "Port",
      initialValue: serviceDraft.port || "3333",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a port." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, port: String(value).trim() }));
        push({ id: "api-security-profile" });
      },
    });
  }

  if (currentScreen.id === "api-security-profile") {
    return h(MenuScreen, {
      title: "Choose API security profile",
      subtitle: "Basic keeps local defaults. Hardened enables auth and rate limiting.",
      items: [
        { id: "basic", label: "Basic", description: "No auth, no explicit rate limit overrides." },
        { id: "hardened-bearer", label: "Hardened with bearer token", description: "Bearer auth + rate limiting + audit log." },
        { id: "hardened-api-key", label: "Hardened with API keys", description: "Header API keys + rate limiting + audit log." },
      ],
      onBack: pop,
      onSelect: (item) => {
          if (item.id === "basic") {
            setServiceDraft((current) => ({
              ...current,
              authMode: "none",
              hardened: false,
              bearerToken: "",
              apiKeys: "",
            }));
          push({ id: "service-preview" });
          return;
        }
        setServiceDraft((current) => ({
          ...current,
          hardened: true,
          authMode: item.id === "hardened-bearer" ? "bearer" : "api-key",
        }));
        push({ id: item.id === "hardened-bearer" ? "api-bearer-token" : "api-api-keys" });
      },
    });
  }

  if (currentScreen.id === "api-bearer-token") {
    return h(TextPromptScreen, {
      title: "Set bearer token",
      subtitle: "The token is only persisted locally if you save this service as a preset.",
      label: "Bearer token",
      initialValue: serviceDraft.bearerToken || "",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a token." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, bearerToken: String(value).trim() }));
        push({ id: "api-rate-limit-max" });
      },
    });
  }

  if (currentScreen.id === "api-api-keys") {
    return h(TextPromptScreen, {
      title: "Set API keys",
      subtitle: "Provide a comma-separated list of API keys.",
      label: "API keys",
      initialValue: serviceDraft.apiKeys || "",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter one or more API keys." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, apiKeys: String(value).trim() }));
        push({ id: "api-rate-limit-max" });
      },
    });
  }

  if (currentScreen.id === "api-rate-limit-max") {
    return h(TextPromptScreen, {
      title: "Set rate limit max",
      subtitle: "Maximum requests per window for the hosted API profile.",
      label: "Rate limit max",
      initialValue: serviceDraft.rateLimitMax || "60",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a rate limit value." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, rateLimitMax: String(value).trim() }));
        push({ id: "api-rate-limit-window" });
      },
    });
  }

  if (currentScreen.id === "api-rate-limit-window") {
    return h(TextPromptScreen, {
      title: "Set rate limit window",
      subtitle: "Window length in milliseconds for the hosted API profile.",
      label: "Window ms",
      initialValue: serviceDraft.rateLimitWindowMs || "60000",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a window in milliseconds." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, rateLimitWindowMs: String(value).trim(), auditLog: true }));
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "a2a-host") {
    return h(TextPromptScreen, {
      title: "Choose A2A host",
      subtitle: "The A2A runtime defaults to 127.0.0.1.",
      label: "Host",
      initialValue: serviceDraft.host || "127.0.0.1",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a host." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, host: String(value).trim() }));
        push({ id: "a2a-port" });
      },
    });
  }

  if (currentScreen.id === "a2a-port") {
    return h(TextPromptScreen, {
      title: "Choose A2A port",
      subtitle: "The A2A runtime defaults to 3335.",
      label: "Port",
      initialValue: serviceDraft.port || "3335",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a port." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, port: String(value).trim() }));
        push({ id: "a2a-store-type" });
      },
    });
  }

  if (currentScreen.id === "a2a-store-type") {
    return h(MenuScreen, {
      title: "Choose A2A persistence",
      subtitle: "Memory is simplest. JSON and SQLite support resume. SQLite lease coordination is optional advanced mode.",
      items: [
        { id: "memory", label: "memory", description: "No persistence between restarts." },
        { id: "json", label: "json", description: "File-backed task persistence." },
        { id: "sqlite", label: "sqlite", description: "Durable store with optional shared lease queue support." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({ ...current, storeType: item.id }));
        if (item.id === "memory") {
          push({ id: "a2a-executor" });
          return;
        }
        push({ id: "a2a-store-path" });
      },
    });
  }

  if (currentScreen.id === "a2a-store-path") {
    return h(TextPromptScreen, {
      title: "Choose A2A store path",
      subtitle: "Pick a durable JSON or SQLite file location.",
      label: "Store path",
      initialValue:
        serviceDraft.storePath ||
        (serviceDraft.storeType === "sqlite"
          ? path.join(os.homedir(), ".omni-skills", "state", "a2a-tasks.sqlite")
          : path.join(os.homedir(), ".omni-skills", "state", "a2a-tasks.json")),
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a store path." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, storePath: resolveCustomPath(value) || String(value).trim() }));
        push({ id: "a2a-executor" });
      },
    });
  }

  if (currentScreen.id === "a2a-executor") {
    return h(MenuScreen, {
      title: "Choose A2A executor",
      subtitle: "Inline is the simple default. Process mode is optional when you want an external worker.",
      items: [
        { id: "inline", label: "inline", description: "Execute tasks in-process." },
        { id: "process", label: "process", description: "Use the external worker process executor." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({ ...current, executorMode: item.id }));
        if (serviceDraft.storeType === "sqlite") {
          push({ id: "a2a-queue-mode" });
          return;
        }
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "a2a-queue-mode") {
    return h(MenuScreen, {
      title: "Choose queue mode",
      subtitle: "Shared leases are optional. Leave them off unless you want multi-worker failover.",
      items: [
        { id: "lease-disabled", label: "Keep queue disabled", description: "Simple-first mode with SQLite persistence only." },
        { id: "lease-enabled", label: "Enable shared lease queue", description: "Advanced mode for multi-worker runtime." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({ ...current, queueEnabled: item.id === "lease-enabled" }));
        if (item.id === "lease-enabled") {
          push({ id: "a2a-worker-poll" });
          return;
        }
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "a2a-worker-poll") {
    return h(TextPromptScreen, {
      title: "Set queue poll interval",
      subtitle: "Polling cadence in milliseconds for SQLite lease workers.",
      label: "Worker poll ms",
      initialValue: serviceDraft.workerPollMs || "250",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a poll interval." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, workerPollMs: String(value).trim() }));
        push({ id: "a2a-lease-ms" });
      },
    });
  }

  if (currentScreen.id === "a2a-lease-ms") {
    return h(TextPromptScreen, {
      title: "Set lease duration",
      subtitle: "Task lease duration in milliseconds before another worker may reclaim work.",
      label: "Lease ms",
      initialValue: serviceDraft.leaseMs || "4000",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a lease duration." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, leaseMs: String(value).trim() }));
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "service-preview") {
    const preview = buildServicePreviewAction();
    const runLabel = serviceDraft.service === "mcp-config" ? "Write config now" : "Run service now";
    const runDescription =
      serviceDraft.service === "mcp-config"
        ? "Exit the visual shell and write the generated MCP client config."
        : "Exit the visual shell and start the selected service.";
    return h(
      Screen,
      {
        title: serviceDraft.service === "mcp-config" ? "Config preview" : "Service preview",
        subtitle:
          serviceDraft.service === "mcp-config"
            ? "The visual hub renders the exact config text and write command before touching the client file."
            : "The visual hub renders the exact command and environment-derived behavior before handoff.",
        status: flash,
        footer: screenFooter("↑/↓ move", "Enter select • Esc back • Ctrl+C exit"),
      },
      h(SummaryLines, { lines: preview.previewLines }),
      preview.previewText
        ? h(TextPreviewPanel, {
            title: serviceDraft.service === "mcp-config" ? "Config Text" : "Generated Preview",
            text: preview.previewText,
            color: "greenBright",
          })
        : null,
      Array.isArray(preview.previewNotes) && preview.previewNotes.length > 0
        ? h(TextPreviewPanel, {
            title: "Notes",
            text: preview.previewNotes.join("\n"),
            color: "gray",
            maxLines: 14,
          })
        : null,
      h(
        Panel,
        { title: "Actions" },
        h(MenuList, {
          items: preview.invalid
            ? [
                {
                  id: "back",
                  label: "Back",
                  description: "Fix the invalid target or transport settings.",
                },
                {
                  id: "cancel",
                  label: "Cancel",
                  description: "Return to the home screen.",
                },
              ]
            : [
                {
                  id: "run",
                  label: runLabel,
                  description: runDescription,
                },
                {
                  id: "save-preset",
                  label: "Save service preset",
                  description: "Store this launch configuration for future runs.",
                },
                {
                  id: "back",
                  label: "Back",
                  description: "Return to the previous step.",
                },
                {
                  id: "cancel",
                  label: "Cancel",
                  description: "Return to the home screen.",
                },
              ],
          onBack: pop,
          onSelect: (item) => {
            if (item.id === "run") {
              launchActionPreview(preview, saveState, exitWithAction);
              return;
            }
            if (item.id === "save-preset") {
              push({ id: "service-save-preset" });
              return;
            }
            if (item.id === "back") {
              pop();
              return;
            }
            goHome();
          },
        }),
      ),
    );
  }

  if (currentScreen.id === "service-save-preset") {
    const preview = buildServicePreviewAction();
    return h(TextPromptScreen, {
      title: "Save service preset",
      subtitle: "Give this service configuration a reusable name.",
      label: "Preset name",
      initialValue: `${serviceDraft.service || "service"}-${serviceDraft.port || ""}`.replace(/-$/, ""),
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a preset name." : ""),
      onSubmit: (value) => {
        saveState((current) => saveServicePreset(current, value, preview.record));
        setFlash(`Saved service preset '${String(value).trim()}'.`);
        pop();
      },
    });
  }

  return h(
    Screen,
    {
      title: "Unknown screen",
      subtitle: "The visual shell lost track of the current view.",
      footer: screenFooter("Esc home", "Ctrl+C exit"),
    },
    h(
      Panel,
      { title: "Recovery" },
      h(Text, { color: "white" }, "Press Ctrl+C to exit and reopen the visual shell."),
    ),
  );
}

async function runCommand(script, args = [], env = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script, ...args], {
      cwd: ROOT,
      env: {
        ...process.env,
        ...env,
      },
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`Command exited with status ${code ?? 1}.`));
    });
  });
}

async function loadRuntime() {
  const core = await import(pathToFileURL(CATALOG_CORE).href);
  const sidecar = await import(pathToFileURL(LOCAL_SIDECAR).href);
  const catalog = core.loadCatalog();
  const bundles = core.listBundles();
  return { core, sidecar, catalog, bundles };
}

async function main() {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error("The visual UI requires an interactive TTY. Use 'omni-skills ui --text' or direct CLI commands in non-interactive environments.");
  }

  const runtime = await loadRuntime();
  let persistedState = loadCliState();
  let handoff = null;

  const instance = render(
    h(OmniSkillsUi, {
      catalog: runtime.catalog,
      bundles: runtime.bundles,
      core: runtime.core,
      sidecar: runtime.sidecar,
      initialState: persistedState,
      persistState: (nextState) => {
        persistedState = saveCliState(nextState);
        return persistedState;
      },
      onHandoff: (action) => {
        handoff = action;
      },
    }),
    {
      exitOnCtrlC: true,
    },
  );

  await instance.waitUntilExit();

  if (handoff) {
    await runCommand(handoff.script, handoff.args, handoff.env);
  }
}

main().catch((error) => {
  console.error(`\\nUI error: ${error.message}`);
  process.exit(1);
});
