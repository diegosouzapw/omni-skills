import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildInstallPlan,
  getCatalogPaths,
  loadCatalog,
  loadManifest,
} from "../../catalog-core/src/index.js";

const PACKAGE_JSON_PATH = fileURLToPath(new URL("../../../package.json", import.meta.url));

function loadOmniSkillsVersion() {
  try {
    const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, "utf-8"));
    return String(packageJson.version || "").trim() || "0.0.1";
  } catch {
    return process.env.npm_package_version || "0.0.1";
  }
}

const OMNI_SKILLS_VERSION = loadOmniSkillsVersion();

const SELECTIVE_DOC_PATHS = [
  "docs/README.md",
  "docs/CATALOG.md",
  "docs/users/getting-started.md",
  "docs/users/usage.md",
  "docs/users/bundles.md",
];

function shellQuote(value) {
  const text = String(value ?? "");
  if (!text) {
    return "''";
  }
  return `'${text.replace(/'/g, `'\"'\"'`)}'`;
}

function getClaudeSettingsPath(env) {
  return path.join(env.homeDir, ".claude", "settings.json");
}

function getGeminiSettingsPath(env, scope = "user") {
  if (scope === "workspace") {
    return path.join(env.cwd, ".gemini", "settings.json");
  }
  return path.join(env.homeDir, ".gemini", "settings.json");
}

function getKiroSettingsPath(env, scope = "user") {
  if (scope === "workspace") {
    return path.join(env.cwd, ".kiro", "settings", "mcp.json");
  }
  return path.join(env.homeDir, ".kiro", "settings", "mcp.json");
}

function getContinueWorkspaceConfigPath(env) {
  return path.join(env.cwd, ".continue", "mcpServers", "omni-skills.yaml");
}

function getWindsurfConfigPath(env) {
  return path.join(env.homeDir, ".codeium", "windsurf", "mcp_config.json");
}

function getClaudeDesktopConfigPath(env) {
  if (process.platform === "darwin") {
    return path.join(env.homeDir, "Library", "Application Support", "Claude", "claude_desktop_config.json");
  }
  if (process.platform === "win32") {
    const appData = process.env.APPDATA || path.join(env.homeDir, "AppData", "Roaming");
    return path.join(appData, "Claude", "claude_desktop_config.json");
  }
  return path.join(env.homeDir, ".config", "Claude", "claude_desktop_config.json");
}

const CLIENT_DEFINITIONS = {
  "claude-code": {
    name: "Claude Code",
    aliases: ["claude-code", "claude"],
    skillsPath: (env) => path.join(env.homeDir, ".claude", "skills"),
    configPath: (env) => getClaudeSettingsPath(env),
    configProfile: "claude-settings-json",
  },
  cursor: {
    name: "Cursor",
    aliases: ["cursor"],
    skillsPath: (env) => path.join(env.homeDir, ".cursor", "skills"),
    configPath: (env) => path.join(env.homeDir, ".cursor", "mcp.json"),
    configProfile: "cursor-json",
  },
  "gemini-cli": {
    name: "Gemini CLI",
    aliases: ["gemini-cli", "gemini"],
    skillsPath: (env) => path.join(env.homeDir, ".gemini", "skills"),
    configPath: (env) => getGeminiSettingsPath(env, "user"),
    configProfile: "gemini-settings-json",
  },
  "codex-cli": {
    name: "Codex CLI",
    aliases: ["codex-cli", "codex"],
    skillsPath: (env) => path.join(env.codexHome, "skills"),
    configPath: (env) => path.join(env.codexHome, "config.toml"),
    configProfile: "codex-toml",
  },
  kiro: {
    name: "Kiro",
    aliases: ["kiro"],
    skillsPath: (env) => path.join(env.homeDir, ".kiro", "skills"),
    configPath: (env) => getKiroSettingsPath(env, "user"),
    configProfile: "kiro-json",
  },
  antigravity: {
    name: "Antigravity",
    aliases: ["antigravity"],
    skillsPath: (env) => path.join(env.homeDir, ".gemini", "antigravity", "skills"),
    configPath: (env) => path.join(env.homeDir, ".gemini", "antigravity", "mcp.json"),
    configProfile: "antigravity-json",
  },
  opencode: {
    name: "OpenCode",
    aliases: ["opencode"],
    skillsPath: (env) => path.join(env.cwd, ".agents", "skills"),
    configPath: (env) => path.join(env.cwd, ".agents", "mcp.json"),
    configProfile: "opencode-json",
  },
};

function getVscodeUserConfigPath(env, edition = "stable") {
  const platform = process.platform;
  if (platform === "darwin") {
    const appName = edition === "insiders" ? "Code - Insiders" : "Code";
    return path.join(env.homeDir, "Library", "Application Support", appName, "User", "mcp.json");
  }
  if (platform === "win32") {
    const appData = process.env.APPDATA || path.join(env.homeDir, "AppData", "Roaming");
    const appName = edition === "insiders" ? "Code - Insiders" : "Code";
    return path.join(appData, appName, "User", "mcp.json");
  }
  const appName = edition === "insiders" ? "Code - Insiders" : "Code";
  return path.join(env.homeDir, ".config", appName, "User", "mcp.json");
}

const CONFIG_TARGETS = {
  workspace: {
    name: "Claude workspace MCP config",
    path: (env) => path.join(env.cwd, ".mcp.json"),
    configProfile: "claude-json",
  },
  "claude-project": {
    name: "Claude Code project settings",
    path: (env) => path.join(env.cwd, ".claude", "settings.json"),
    configProfile: "claude-settings-json",
  },
  "claude-user-settings": {
    name: "Claude Code user settings",
    path: (env) => getClaudeSettingsPath(env),
    configProfile: "claude-settings-json",
  },
  "claude-user-legacy": {
    name: "Claude legacy JSON config",
    path: (env) => path.join(env.homeDir, ".claude.json"),
    configProfile: "claude-json",
  },
  "claude-desktop": {
    name: "Claude Desktop config",
    path: (env) => getClaudeDesktopConfigPath(env),
    configProfile: "claude-json",
  },
  "cursor-workspace": {
    name: "Cursor workspace MCP config",
    path: (env) => path.join(env.cwd, ".cursor", "mcp.json"),
    configProfile: "cursor-json",
  },
  vscode: {
    name: "VS Code workspace MCP config",
    path: (env) => path.join(env.cwd, ".vscode", "mcp.json"),
    configProfile: "vscode-json",
  },
  "vscode-user": {
    name: "VS Code user MCP config",
    path: (env) => getVscodeUserConfigPath(env, "stable"),
    configProfile: "vscode-json",
  },
  "vscode-insiders-user": {
    name: "VS Code Insiders user MCP config",
    path: (env) => getVscodeUserConfigPath(env, "insiders"),
    configProfile: "vscode-json",
  },
  devcontainer: {
    name: "Dev Container VS Code MCP config",
    path: (env) => path.join(env.cwd, ".devcontainer", "devcontainer.json"),
    configProfile: "devcontainer-json",
  },
  "claude-user": {
    name: "Claude Code user MCP config",
    path: (env) => path.join(env.homeDir, ".claude.json"),
    configProfile: "claude-json",
  },
  "cursor-user": {
    name: "Cursor user MCP config",
    path: (env) => path.join(env.homeDir, ".cursor", "mcp.json"),
    configProfile: "cursor-json",
  },
  "gemini-user": {
    name: "Gemini CLI user settings",
    path: (env) => getGeminiSettingsPath(env, "user"),
    configProfile: "gemini-settings-json",
  },
  "gemini-workspace": {
    name: "Gemini CLI workspace settings",
    path: (env) => getGeminiSettingsPath(env, "workspace"),
    configProfile: "gemini-settings-json",
  },
  "antigravity-user": {
    name: "Antigravity user MCP config",
    path: (env) => path.join(env.homeDir, ".gemini", "antigravity", "mcp.json"),
    configProfile: "antigravity-json",
  },
  "kiro-user": {
    name: "Kiro user MCP config",
    path: (env) => getKiroSettingsPath(env, "user"),
    configProfile: "kiro-json",
  },
  "kiro-workspace": {
    name: "Kiro workspace MCP config",
    path: (env) => getKiroSettingsPath(env, "workspace"),
    configProfile: "kiro-json",
  },
  "kiro-user-legacy": {
    name: "Kiro legacy MCP config",
    path: (env) => path.join(env.homeDir, ".kiro", "mcp.json"),
    configProfile: "generic-json",
  },
  "codex-user": {
    name: "Codex user MCP config",
    path: (env) => path.join(env.codexHome, "config.toml"),
    configProfile: "codex-toml",
  },
  "opencode-workspace": {
    name: "OpenCode workspace MCP config",
    path: (env) => path.join(env.cwd, ".agents", "mcp.json"),
    configProfile: "opencode-json",
  },
  "continue-workspace": {
    name: "Continue workspace MCP config",
    path: (env) => getContinueWorkspaceConfigPath(env),
    configProfile: "continue-yaml",
  },
  "windsurf-user": {
    name: "Windsurf user MCP config",
    path: (env) => getWindsurfConfigPath(env),
    configProfile: "windsurf-json",
  },
};

const CONFIG_PROFILES = {
  "claude-json": {
    id: "claude-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: true,
    description: "Claude Code style JSON config with typed MCP entries.",
  },
  "cursor-json": {
    id: "cursor-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: true,
    description: "Cursor style JSON config using mcpServers.",
  },
  "generic-json": {
    id: "generic-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Generic JSON config using mcpServers.",
  },
  "antigravity-json": {
    id: "antigravity-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Antigravity JSON config using mcpServers at ~/.gemini/antigravity/mcp.json.",
  },
  "opencode-json": {
    id: "opencode-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "OpenCode workspace JSON config using .agents/mcp.json with mcpServers.",
  },
  "continue-yaml": {
    id: "continue-yaml",
    format: "yaml",
    rootKey: "mcpServers",
    includeType: false,
    description: "Continue workspace YAML config stored under .continue/mcpServers/*.yaml and loaded from Agent mode.",
  },
  "windsurf-json": {
    id: "windsurf-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Windsurf MCP config using ~/.codeium/windsurf/mcp_config.json with mcpServers entries.",
  },
  "vscode-json": {
    id: "vscode-json",
    format: "json",
    rootKey: "servers",
    rootPath: ["servers"],
    includeType: true,
    description: "VS Code MCP config using the servers root key.",
  },
  "devcontainer-json": {
    id: "devcontainer-json",
    format: "json",
    rootKey: "servers",
    rootPath: ["customizations", "vscode", "mcp", "servers"],
    includeType: true,
    description: "Dev Container configuration nested under customizations.vscode.mcp.servers.",
  },
  "codex-toml": {
    id: "codex-toml",
    format: "toml",
    rootKey: "mcp_servers",
    includeType: false,
    description: "Codex config.toml using mcp_servers tables.",
  },
  "claude-settings-json": {
    id: "claude-settings-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: true,
    description: "Claude Code settings.json using a top-level mcpServers object.",
  },
  "gemini-settings-json": {
    id: "gemini-settings-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Gemini CLI settings.json using JSON settings with mcpServers.",
  },
  "kiro-json": {
    id: "kiro-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Kiro MCP JSON config using mcpServers.",
  },
};

const SERVER_ENTRY_PATH = fileURLToPath(new URL("./server.js", import.meta.url));

function parseExtraAllowlist() {
  return String(process.env.OMNI_SKILLS_LOCAL_ALLOWLIST || "")
    .split(path.delimiter)
    .map((value) => value.trim())
    .filter(Boolean);
}

function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizeEnv(options = {}) {
  const homeDir = path.resolve(
    options.homeDir ||
      process.env.HOME ||
      process.env.USERPROFILE ||
      os.homedir(),
  );
  const cwd = path.resolve(options.cwd || process.cwd());
  const codexHome = path.resolve(options.codexHome || process.env.CODEX_HOME || path.join(homeDir, ".codex"));
  const extraAllowedRoots = uniq([
    ...(options.extraAllowedRoots || []),
    ...parseExtraAllowlist(),
  ]).map((value) => path.resolve(value));

  return {
    homeDir,
    cwd,
    codexHome,
    extraAllowedRoots,
  };
}

function getClientDefinition(client) {
  const normalized = String(client || "").trim().toLowerCase();
  if (!normalized) {
    return null;
  }

  return Object.entries(CLIENT_DEFINITIONS)
    .map(([id, definition]) => ({ id, ...definition }))
    .find((definition) => definition.aliases.includes(normalized)) || null;
}

function normalizeClientId(client) {
  return getClientDefinition(client)?.id || null;
}

function isPathInside(candidatePath, rootPath) {
  const relative = path.relative(rootPath, candidatePath);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

export function getLocalAllowlistRoots(options = {}) {
  const env = normalizeEnv(options);
  return uniq([
    path.join(env.homeDir, ".claude"),
    path.join(env.homeDir, ".claude.json"),
    path.join(env.homeDir, ".codeium"),
    path.join(env.homeDir, ".cursor"),
    path.join(env.homeDir, ".gemini"),
    path.join(env.homeDir, ".kiro"),
    getClaudeDesktopConfigPath(env),
    env.codexHome,
    path.join(env.cwd, ".agents"),
    path.join(env.cwd, ".continue"),
    path.join(env.cwd, ".vscode"),
    path.join(env.cwd, ".claude"),
    path.join(env.cwd, ".cursor"),
    path.join(env.cwd, ".gemini"),
    path.join(env.cwd, ".kiro"),
    path.join(env.cwd, ".devcontainer"),
    env.cwd,
    ...env.extraAllowedRoots,
  ]).map((value) => path.resolve(value));
}

function assertPathAllowed(candidatePath, options = {}) {
  const absolutePath = path.resolve(candidatePath);
  const allowlistRoots = getLocalAllowlistRoots(options);
  const allowed = allowlistRoots.some((rootPath) => isPathInside(absolutePath, rootPath));

  if (!allowed) {
    throw new Error(
      `Path '${absolutePath}' is outside the Omni Skills local allowlist. ` +
        `Use OMNI_SKILLS_LOCAL_ALLOWLIST to explicitly permit additional roots.`,
    );
  }

  return absolutePath;
}

function getNearestExistingPath(targetPath) {
  let currentPath = path.resolve(targetPath);
  while (!fs.existsSync(currentPath)) {
    const parentPath = path.dirname(currentPath);
    if (parentPath === currentPath) {
      return currentPath;
    }
    currentPath = parentPath;
  }
  return currentPath;
}

function canWritePath(targetPath) {
  try {
    fs.accessSync(getNearestExistingPath(targetPath), fs.constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

function listInstalledSkillIdsForPath(skillsPath) {
  if (!fs.existsSync(skillsPath) || !fs.statSync(skillsPath).isDirectory()) {
    return [];
  }

  return fs
    .readdirSync(skillsPath)
    .filter((entry) => {
      const skillEntryPath = path.join(skillsPath, entry);
      return fs.existsSync(path.join(skillEntryPath, "SKILL.md")) && fs.statSync(skillEntryPath).isDirectory();
    })
    .sort();
}

function resolveSkillsTarget({ client, targetPath }, options = {}) {
  if (targetPath) {
    return assertPathAllowed(targetPath, options);
  }

  const definition = getClientDefinition(client);
  if (!definition) {
    throw new Error("Provide a supported client or an explicit target_path.");
  }

  return assertPathAllowed(definition.skillsPath(normalizeEnv(options)), options);
}

function inferConfigProfileFromPath(filePath) {
  const normalizedPath = path.resolve(filePath);
  const baseName = path.basename(normalizedPath);
  if (baseName === "config.toml") {
    return CONFIG_PROFILES["codex-toml"];
  }
  if (normalizedPath.endsWith(path.join(".devcontainer", "devcontainer.json"))) {
    return CONFIG_PROFILES["devcontainer-json"];
  }
  if (normalizedPath.endsWith(path.join(".vscode", "mcp.json"))) {
    return CONFIG_PROFILES["vscode-json"];
  }
  if (normalizedPath.endsWith(path.join(".claude", "settings.json"))) {
    return CONFIG_PROFILES["claude-settings-json"];
  }
  if (normalizedPath.endsWith(path.join(".gemini", "settings.json"))) {
    return CONFIG_PROFILES["gemini-settings-json"];
  }
  if (normalizedPath.endsWith(path.join(".gemini", "antigravity", "mcp.json"))) {
    return CONFIG_PROFILES["antigravity-json"];
  }
  if (normalizedPath.endsWith(path.join(".kiro", "settings", "mcp.json"))) {
    return CONFIG_PROFILES["kiro-json"];
  }
  if (normalizedPath.endsWith(path.join(".agents", "mcp.json"))) {
    return CONFIG_PROFILES["opencode-json"];
  }
  if (normalizedPath.endsWith(path.join(".continue", "mcpServers", "omni-skills.yaml"))) {
    return CONFIG_PROFILES["continue-yaml"];
  }
  if (normalizedPath.endsWith(path.join(".codeium", "windsurf", "mcp_config.json"))) {
    return CONFIG_PROFILES["windsurf-json"];
  }
  if (baseName === ".mcp.json" || baseName === ".claude.json") {
    return CONFIG_PROFILES["claude-json"];
  }
  if (baseName === "mcp.json") {
    if (normalizedPath.includes(`${path.sep}.cursor${path.sep}`)) {
      return CONFIG_PROFILES["cursor-json"];
    }
    return CONFIG_PROFILES["generic-json"];
  }
  return CONFIG_PROFILES["generic-json"];
}

function resolveConfigTarget({ client, configTarget, filePath }, options = {}) {
  const env = normalizeEnv(options);

  if (filePath) {
    const configPath = assertPathAllowed(filePath, options);
    return {
      configPath,
      profile: inferConfigProfileFromPath(configPath),
      source: "file_path",
      targetId: null,
      targetName: path.basename(configPath),
    };
  }

  if (configTarget) {
    const definition = CONFIG_TARGETS[String(configTarget).trim().toLowerCase()];
    if (!definition) {
      throw new Error(`Unsupported config_target '${configTarget}'.`);
    }
    return {
      configPath: assertPathAllowed(definition.path(env), options),
      profile: CONFIG_PROFILES[definition.configProfile] || CONFIG_PROFILES["generic-json"],
      source: "config_target",
      targetId: String(configTarget).trim().toLowerCase(),
      targetName: definition.name,
    };
  }

  const clientDefinition = getClientDefinition(client);
  if (!clientDefinition) {
    throw new Error("Provide client, config_target, or file_path.");
  }

  return {
    configPath: assertPathAllowed(clientDefinition.configPath(env), options),
    profile: CONFIG_PROFILES[clientDefinition.configProfile] || CONFIG_PROFILES["generic-json"],
    source: "client",
    targetId: clientDefinition.id,
    targetName: clientDefinition.name,
  };
}

function summarizeOperations(operations) {
  const summary = {
    total_operations: operations.length,
    copy_files: 0,
    remove_paths: 0,
    total_bytes: 0,
    by_kind: {},
  };

  for (const operation of operations) {
    if (operation.type === "copy-file") {
      summary.copy_files += 1;
      summary.total_bytes += operation.size_bytes || 0;
    }

    if (operation.type === "remove-path") {
      summary.remove_paths += 1;
    }

    summary.by_kind[operation.kind] = (summary.by_kind[operation.kind] || 0) + 1;
  }

  return summary;
}

function collectFilesUnder(rootPath, repoRoot, kind = "doc") {
  if (!fs.existsSync(rootPath)) {
    return [];
  }

  const files = [];
  for (const entry of fs.readdirSync(rootPath, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const absolutePath = path.join(rootPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFilesUnder(absolutePath, repoRoot, kind));
      continue;
    }

    const relativePath = path.relative(repoRoot, absolutePath).split(path.sep).join("/");
    files.push({
      relativePath,
      absolutePath,
      kind,
      size_bytes: fs.statSync(absolutePath).size,
    });
  }

  return files;
}

function buildFileCopyOperations(skillIds, targetPath, options = {}, includeDocs = true, fullLibrary = false) {
  const { repoRoot } = getCatalogPaths(options);
  const operations = [];

  for (const skillId of skillIds) {
    const manifest = loadManifest(skillId, options);
    if (!manifest) {
      continue;
    }

    for (const artifact of manifest.artifacts || []) {
      const sourcePath = path.resolve(repoRoot, artifact.path);
      const destinationPath = path.join(targetPath, artifact.path.replace(/^skills\//, ""));
      operations.push({
        type: "copy-file",
        kind: artifact.kind,
        skill_id: skillId,
        source: sourcePath,
        destination: destinationPath,
        size_bytes: artifact.size_bytes,
        sha256: artifact.sha256,
      });
    }
  }

  if (!includeDocs) {
    return operations;
  }

  const docArtifacts = fullLibrary
    ? collectFilesUnder(path.join(repoRoot, "docs"), repoRoot)
    : SELECTIVE_DOC_PATHS
        .map((relativePath) => {
          const sourcePath = path.resolve(repoRoot, relativePath);
          if (!fs.existsSync(sourcePath)) {
            return null;
          }
          return {
            relativePath,
            absolutePath: sourcePath,
            kind: "doc",
            size_bytes: fs.statSync(sourcePath).size,
          };
        })
        .filter(Boolean);

  for (const artifact of docArtifacts) {
    operations.push({
      type: "copy-file",
      kind: artifact.kind,
      skill_id: null,
      source: artifact.absolutePath,
      destination: path.join(targetPath, artifact.relativePath),
      size_bytes: artifact.size_bytes,
      sha256: null,
    });
  }

  return operations;
}

function applyCopyOperations(operations) {
  for (const operation of operations) {
    fs.mkdirSync(path.dirname(operation.destination), { recursive: true });
    fs.copyFileSync(operation.source, operation.destination);
  }
}

function applyRemoveOperations(operations) {
  for (const operation of operations) {
    fs.rmSync(operation.target, { recursive: true, force: true });
  }
}

function resolveSelectedSkillIds(plan, options = {}) {
  if (plan.install_scope === "full-library") {
    return loadCatalog(options).skills.map((skill) => skill.id);
  }

  return plan.selected_skills.map((skill) => skill.id);
}

function normalizeTransportMode(transport) {
  const normalized = String(transport || "stream").trim().toLowerCase();
  if (normalized === "http") {
    return "stream";
  }
  return normalized;
}

function defaultTransportUrl(transport) {
  const mode = normalizeTransportMode(transport);
  const pathname = mode === "sse" ? "/sse" : "/mcp";
  return (
    process.env.OMNI_SKILLS_MCP_BASE_URL ||
    `http://${process.env.HOST || "127.0.0.1"}:${process.env.PORT || "3334"}${pathname}`
  );
}

function getTransportType(mode) {
  if (mode === "stdio") {
    return "stdio";
  }
  if (mode === "sse") {
    return "sse";
  }
  return "http";
}

function buildMcpServerEntry({ transport = "stream", url }, profile = CONFIG_PROFILES["generic-json"]) {
  const mode = normalizeTransportMode(transport);

  if (mode === "stdio") {
    const entry = {
      command: process.execPath,
      args: [SERVER_ENTRY_PATH],
      env: {
        OMNI_SKILLS_MCP_MODE: "local",
        ...(process.env.OMNI_SKILLS_API_BASE_URL
          ? { OMNI_SKILLS_API_BASE_URL: process.env.OMNI_SKILLS_API_BASE_URL }
          : {}),
      },
    };
    return profile.includeType ? { type: "stdio", ...entry } : entry;
  }

  if (profile.id === "continue-yaml") {
    return {
      transport: {
        type: mode === "sse" ? "sse" : "streamable-http",
        url: url || defaultTransportUrl(mode),
      },
    };
  }

  if (profile.id === "windsurf-json") {
    return {
      serverUrl: url || defaultTransportUrl(mode),
    };
  }

  const entry = {
    url: url || defaultTransportUrl(mode),
  };
  return profile.includeType ? { type: getTransportType(mode), ...entry } : entry;
}

function cloneJsonRecord(value) {
  return JSON.parse(JSON.stringify(value || {}));
}

function setNestedValue(target, pathSegments, value) {
  const record = cloneJsonRecord(target);
  let cursor = record;
  for (let index = 0; index < pathSegments.length - 1; index += 1) {
    const segment = pathSegments[index];
    if (!cursor[segment] || typeof cursor[segment] !== "object" || Array.isArray(cursor[segment])) {
      cursor[segment] = {};
    }
    cursor = cursor[segment];
  }
  cursor[pathSegments[pathSegments.length - 1]] = value;
  return record;
}

function getNestedValue(target, pathSegments) {
  let cursor = target;
  for (const segment of pathSegments) {
    if (!cursor || typeof cursor !== "object") {
      return undefined;
    }
    cursor = cursor[segment];
  }
  return cursor;
}

function normalizeStringArray(values) {
  if (!Array.isArray(values)) {
    return [];
  }
  return values.map((value) => String(value || "").trim()).filter(Boolean);
}

function normalizeStringRecord(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .map(([key, entryValue]) => [String(key || "").trim(), String(entryValue || "").trim()])
      .filter(([key, entryValue]) => key && entryValue),
  );
}

function applyClientSpecificProfileOptions(config, profile, entry, input = {}) {
  let nextConfig = cloneJsonRecord(config);
  let nextEntry = cloneJsonRecord(entry);
  const headers = normalizeStringRecord(input.headers);
  const env = normalizeStringRecord(input.env);
  const cwd = String(input.cwd || "").trim();
  const envFile = String(input.env_file || "").trim();
  const description = String(input.description || "").trim();
  const timeoutMs = Number.parseInt(String(input.timeout_ms ?? ""), 10);
  const includeTools = normalizeStringArray(input.include_tools);
  const excludeTools = normalizeStringArray(input.exclude_tools);
  const disabledTools = normalizeStringArray(input.disabled_tools);
  const autoApprove = normalizeStringArray(input.auto_approve);

  if (Object.keys(headers).length > 0) {
    nextEntry.headers = {
      ...(nextEntry.headers || {}),
      ...headers,
    };
  }

  if (Object.keys(env).length > 0) {
    nextEntry.env = {
      ...(nextEntry.env || {}),
      ...env,
    };
  }

  if (cwd) {
    nextEntry.cwd = cwd;
  }

  if (envFile) {
    nextEntry.envFile = envFile;
  }

  if (description) {
    nextEntry.description = description;
  }

  if (Number.isFinite(timeoutMs) && timeoutMs > 0) {
    nextEntry.timeout = timeoutMs;
  }

  if (includeTools.length > 0) {
    nextEntry.includeTools = includeTools;
  }

  if (excludeTools.length > 0) {
    nextEntry.excludeTools = excludeTools;
  }

  if (input.disabled === true) {
    nextEntry.disabled = true;
  }

  if (input.trust === true) {
    nextEntry.trust = true;
  }

  if (profile.id === "claude-json" || profile.id === "claude-settings-json") {
    const allowed = normalizeStringArray(input.allowed_mcp_servers);
    const denied = normalizeStringArray(input.denied_mcp_servers);
    if (allowed.length > 0) {
      nextConfig.allowedMcpServers = allowed;
    }
    if (denied.length > 0) {
      nextConfig.deniedMcpServers = denied;
    }
    const permissionsDeny = normalizeStringArray(input.permissions_deny);
    if (permissionsDeny.length > 0) {
      nextConfig.permissions = {
        ...(nextConfig.permissions || {}),
        deny: permissionsDeny,
      };
    }
    if (input.enable_all_project_mcp_servers === true) {
      nextConfig.enableAllProjectMcpServers = true;
    }
  }

  if (profile.id === "vscode-json" || profile.id === "devcontainer-json") {
    if (input.sandbox_enabled === true) {
      nextEntry.sandboxEnabled = true;
    }

    const allowWrite = normalizeStringArray(input.sandbox_allow_write);
    const allowNetwork = normalizeStringArray(input.sandbox_allow_network);
    if (allowWrite.length > 0 || allowNetwork.length > 0) {
      nextEntry.sandbox = {
        ...(nextEntry.sandbox || {}),
        ...(allowWrite.length > 0
          ? {
              filesystem: {
                ...((nextEntry.sandbox && nextEntry.sandbox.filesystem) || {}),
                allowWrite,
              },
            }
          : {}),
        ...(allowNetwork.length > 0
          ? {
              network: {
                ...((nextEntry.sandbox && nextEntry.sandbox.network) || {}),
                allowHosts: allowNetwork,
              },
            }
          : {}),
      };
    }

    if (String(input.dev_watch || "").trim()) {
      nextEntry.dev = {
        ...(nextEntry.dev || {}),
        watch: String(input.dev_watch || "").trim(),
      };
    }
    if (String(input.dev_debug_type || "").trim()) {
      nextEntry.dev = {
        ...(nextEntry.dev || {}),
        debug: {
          ...((nextEntry.dev && nextEntry.dev.debug) || {}),
          type: String(input.dev_debug_type || "").trim(),
        },
      };
    }
  }

  if (profile.id === "gemini-settings-json") {
    const allowed = normalizeStringArray(input.mcp_allowed_servers);
    const excluded = normalizeStringArray(input.mcp_excluded_servers);
    if (allowed.length > 0 || excluded.length > 0) {
      nextConfig.mcp = {
        ...(nextConfig.mcp || {}),
        ...(allowed.length > 0 ? { allowed } : {}),
        ...(excluded.length > 0 ? { excluded } : {}),
      };
    }
  }

  if (profile.id === "kiro-json") {
    if (disabledTools.length > 0) {
      nextEntry.disabledTools = disabledTools;
    }
    if (autoApprove.length > 0) {
      nextEntry.autoApprove = autoApprove;
    }
  }

  if (profile.id === "windsurf-json") {
    if (autoApprove.length > 0) {
      nextEntry.alwaysAllow = autoApprove;
    }
  }

  if (profile.id === "continue-yaml" && nextEntry.transport) {
    if (Object.keys(headers).length > 0) {
      nextEntry.transport.requestOptions = {
        ...(nextEntry.transport.requestOptions || {}),
        headers: {
          ...((nextEntry.transport.requestOptions && nextEntry.transport.requestOptions.headers) || {}),
          ...headers,
        },
      };
    }

    if (Number.isFinite(timeoutMs) && timeoutMs > 0) {
      nextEntry.transport.requestOptions = {
        ...(nextEntry.transport.requestOptions || {}),
        timeout: timeoutMs,
      };
    }

    delete nextEntry.headers;
    delete nextEntry.timeout;
    delete nextEntry.cwd;
    delete nextEntry.envFile;
    delete nextEntry.description;
  }

  return { config: nextConfig, entry: nextEntry };
}

function escapeTomlString(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"');
}

function formatTomlString(value) {
  return `"${escapeTomlString(value)}"`;
}

function formatTomlKeySegment(value) {
  return /^[A-Za-z0-9_-]+$/.test(value) ? value : formatTomlString(value);
}

function formatTomlInlineTable(record) {
  const entries = Object.entries(record || {}).map(
    ([key, value]) => `${formatTomlKeySegment(key)} = ${formatTomlString(value)}`,
  );
  return `{ ${entries.join(", ")} }`;
}

function escapeYamlString(value) {
  return String(value || "").replace(/'/g, "''");
}

function formatYamlScalar(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return `'${escapeYamlString(value)}'`;
}

function renderYamlBlock(value, indentLevel = 0) {
  const indent = "  ".repeat(indentLevel);

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return `${indent}[]`;
    }

    return value
      .map((item) => {
        if (item && typeof item === "object" && !Array.isArray(item)) {
          const entries = Object.entries(item);
          if (entries.length === 0) {
            return `${indent}- {}`;
          }

          const [firstKey, firstValue] = entries[0];
          const lines = [];
          if (firstValue && typeof firstValue === "object") {
            lines.push(`${indent}- ${firstKey}:`);
            lines.push(renderYamlBlock(firstValue, indentLevel + 2));
          } else {
            lines.push(`${indent}- ${firstKey}: ${formatYamlScalar(firstValue)}`);
          }

          for (const [key, nestedValue] of entries.slice(1)) {
            if (nestedValue && typeof nestedValue === "object") {
              lines.push(`${"  ".repeat(indentLevel + 1)}${key}:`);
              lines.push(renderYamlBlock(nestedValue, indentLevel + 2));
            } else {
              lines.push(`${"  ".repeat(indentLevel + 1)}${key}: ${formatYamlScalar(nestedValue)}`);
            }
          }

          return lines.join("\n");
        }

        return `${indent}- ${formatYamlScalar(item)}`;
      })
      .join("\n");
  }

  if (value && typeof value === "object") {
    const lines = [];
    for (const [key, nestedValue] of Object.entries(value)) {
      if (Array.isArray(nestedValue) || (nestedValue && typeof nestedValue === "object")) {
        lines.push(`${indent}${key}:`);
        lines.push(renderYamlBlock(nestedValue, indentLevel + 1));
      } else {
        lines.push(`${indent}${key}: ${formatYamlScalar(nestedValue)}`);
      }
    }
    return lines.join("\n");
  }

  return `${indent}${formatYamlScalar(value)}`;
}

function renderContinueYamlConfig(serverName, entry) {
  const document = {
    name: "Omni Skills",
    version: OMNI_SKILLS_VERSION,
    schema: "v1",
    mcpServers: [
      {
        name: serverName,
        ...entry,
      },
    ],
  };

  return `${renderYamlBlock(document)}\n`;
}

function renderCodexConfigBlock(serverName, entry) {
  const lines = [`[mcp_servers.${formatTomlKeySegment(serverName)}]`];

  if (entry.url) {
    lines.push(`url = ${formatTomlString(entry.url)}`);
  }

  if (entry.command) {
    lines.push(`command = ${formatTomlString(entry.command)}`);
  }

  if (Array.isArray(entry.args) && entry.args.length > 0) {
    lines.push(`args = [${entry.args.map((value) => formatTomlString(value)).join(", ")}]`);
  }

  if (entry.env && Object.keys(entry.env).length > 0) {
    lines.push(`env = ${formatTomlInlineTable(entry.env)}`);
  }

  return `${lines.join("\n")}\n`;
}

function parseCodexSectionHeader(line) {
  const match = line.match(/^\[mcp_servers\.(?:"([^"]+)"|([A-Za-z0-9_-]+))\]\s*$/);
  if (!match) {
    return null;
  }
  return match[1] || match[2] || null;
}

function upsertCodexConfigToml(currentText, serverName, entry) {
  const block = renderCodexConfigBlock(serverName, entry).trimEnd();
  const lines = String(currentText || "").split(/\r?\n/);
  const result = [];
  let index = 0;
  let replaced = false;

  while (index < lines.length) {
    const headerName = parseCodexSectionHeader(lines[index]);
    if (headerName !== serverName) {
      result.push(lines[index]);
      index += 1;
      continue;
    }

    replaced = true;
    result.push(block);
    index += 1;
    while (index < lines.length && !lines[index].startsWith("[")) {
      index += 1;
    }
  }

  const nextText = result.join("\n").trim();
  if (replaced) {
    return `${nextText}\n`;
  }

  const separator = nextText ? "\n\n" : "";
  return `${nextText}${separator}${block}\n`;
}

function buildConfigInstructions(targetName, configPath, profile, transport) {
  const base = [
    `Write the Omni Skills MCP server into ${targetName || "the selected target"} at ${configPath}.`,
  ];

  if (profile.id === "vscode-json") {
    base.push("VS Code expects a .vscode/mcp.json file with a top-level 'servers' object.");
  } else if (profile.id === "devcontainer-json") {
    base.push("Dev Containers nest MCP config under customizations.vscode.mcp.servers in devcontainer.json.");
  } else if (profile.id === "codex-toml") {
    base.push("Codex expects ~/.codex/config.toml with [mcp_servers.<name>] tables.");
  } else if (profile.id === "claude-settings-json") {
    base.push("Claude Code settings.json stores MCP entries in a top-level 'mcpServers' object.");
  } else if (profile.id === "claude-json") {
    base.push("Claude Code project and JSON configs use a top-level 'mcpServers' object and typed entries.");
    base.push("Claude-specific allow and deny lists can be written through allowedMcpServers and deniedMcpServers.");
  } else if (profile.id === "cursor-json") {
    base.push("Cursor reads mcp.json files with a top-level 'mcpServers' object.");
  } else if (profile.id === "gemini-settings-json") {
    base.push("Gemini CLI uses settings.json with top-level 'mcpServers' plus optional global mcp.allowed/excluded controls.");
  } else if (profile.id === "antigravity-json") {
    base.push("Antigravity reads ~/.gemini/antigravity/mcp.json with a top-level 'mcpServers' object.");
  } else if (profile.id === "kiro-json") {
    base.push("Kiro uses settings/mcp.json with top-level 'mcpServers' entries.");
  } else if (profile.id === "opencode-json") {
    base.push("OpenCode reads workspace-scoped MCP config from .agents/mcp.json using a top-level 'mcpServers' object.");
  } else if (profile.id === "continue-yaml") {
    base.push("Continue can load standalone MCP server YAML files from .continue/mcpServers/*.yaml.");
    base.push("Continue MCP tools are exposed from Agent mode, and the generated file is a dedicated per-server YAML document.");
  } else if (profile.id === "windsurf-json") {
    base.push("Windsurf stores MCP entries in ~/.codeium/windsurf/mcp_config.json under a top-level 'mcpServers' object.");
  }

  if (normalizeTransportMode(transport) === "stdio") {
    base.push("Stdio mode launches the local server process directly on this machine.");
  } else {
    base.push("Network transports point the client at the selected MCP endpoint URL.");
  }

  if (profile.id === "vscode-json" || profile.id === "devcontainer-json") {
    base.push("VS Code can optionally sandbox stdio servers with filesystem and network allowlists.");
  }

  if (
    profile.id === "cursor-json" ||
    profile.id === "gemini-settings-json" ||
    profile.id === "kiro-json" ||
    profile.id === "continue-yaml"
  ) {
    base.push("These clients can carry extra entry metadata such as headers, cwd, env, or timeout depending on the transport.");
  }

  return base;
}

function buildConfigRecipes({ targetId, configPath, serverName, transport, url }) {
  const mode = normalizeTransportMode(transport);
  const effectiveUrl = url || defaultTransportUrl(mode);
  const recipes = [];

  if (targetId === "workspace" || targetId === "claude-project" || targetId === "claude-user-settings") {
    const scope = targetId === "claude-user-settings" ? "user" : "project";
    recipes.push({
      client: "claude-code",
      kind: "cli",
      command:
        mode === "stdio"
          ? `claude mcp add ${serverName} --scope ${scope} -- node ${shellQuote(SERVER_ENTRY_PATH)}`
          : `claude mcp add --transport ${mode === "sse" ? "sse" : "http"} ${serverName} --scope ${scope} ${shellQuote(effectiveUrl)}`,
    });
  }

  if (targetId === "gemini-user" || targetId === "gemini-workspace") {
    const scope = targetId === "gemini-workspace" ? "project" : "user";
    recipes.push({
      client: "gemini-cli",
      kind: "cli",
      command:
        mode === "stdio"
          ? `gemini mcp add --scope ${scope} ${serverName} node ${shellQuote(SERVER_ENTRY_PATH)}`
          : `gemini mcp add --scope ${scope} --transport ${mode === "sse" ? "sse" : "http"} ${serverName} ${shellQuote(effectiveUrl)}`,
    });
  }

  if (targetId === "antigravity" || targetId === "antigravity-user") {
    recipes.push({
      client: "antigravity",
      kind: "manual",
      command: `Edit ${configPath} and add the generated mcpServers entry for Antigravity.`,
    });
  }

  if (targetId === "codex-user") {
    recipes.push({
      client: "codex-cli",
      kind: "cli",
      command:
        mode === "stdio"
          ? `codex mcp add ${serverName} --command ${shellQuote(process.execPath)} --arg ${shellQuote(SERVER_ENTRY_PATH)}`
          : `codex mcp add ${serverName} --url ${shellQuote(effectiveUrl)}`,
    });
  }

  if (targetId === "vscode" || targetId === "vscode-user" || targetId === "vscode-insiders-user" || targetId === "devcontainer") {
    recipes.push({
      client: "vscode",
      kind: "manual",
      command: "Use the Command Palette and run 'MCP: Open User Configuration' or 'MCP: Open Workspace Configuration' to apply the generated entry through VS Code.",
    });
  }

  if (targetId === "cursor-user" || targetId === "cursor-workspace") {
    recipes.push({
      client: "cursor",
      kind: "manual",
      command: `Edit ${configPath} directly or import the generated entry from Cursor MCP settings.`,
    });
  }

  if (targetId === "kiro-user" || targetId === "kiro-workspace") {
    recipes.push({
      client: "kiro",
      kind: "manual",
      command: `Edit ${configPath} and paste the generated mcpServers entry into Kiro's MCP settings.`,
    });
  }

  if (targetId === "opencode" || targetId === "opencode-workspace") {
    recipes.push({
      client: "opencode",
      kind: "manual",
      command: `Edit ${configPath} and add the generated mcpServers entry for the OpenCode workspace.`,
    });
  }

  if (targetId === "continue-workspace") {
    recipes.push({
      client: "continue",
      kind: "manual",
      command: `Create or update ${configPath} with the generated YAML server document, then use Continue in Agent mode to load the MCP tools.`,
    });
  }

  if (targetId === "windsurf-user") {
    recipes.push({
      client: "windsurf",
      kind: "manual",
      command: `Edit ${configPath} directly or open Windsurf MCP settings and paste the generated mcpServers entry.`,
    });
  }

  return recipes;
}

export function isLocalModeEnabled() {
  return (
    process.env.OMNI_SKILLS_MCP_MODE === "local" ||
    process.env.OMNI_SKILLS_MCP_LOCAL_MODE === "1"
  );
}

export function detectClients(options = {}) {
  const env = normalizeEnv(options);
  const allowlistRoots = getLocalAllowlistRoots(options);

  return {
    mode: isLocalModeEnabled() ? "local" : "read-only",
    allowlist_roots: allowlistRoots,
    clients: Object.entries(CLIENT_DEFINITIONS).map(([clientId, definition]) => {
      const skillsPath = definition.skillsPath(env);
      const configPath = definition.configPath(env);
      const installedSkillIds = listInstalledSkillIdsForPath(skillsPath);

      return {
        id: clientId,
        name: definition.name,
        aliases: definition.aliases,
        skills_path: skillsPath,
        skills_path_exists: fs.existsSync(skillsPath),
        skills_path_writable: canWritePath(skillsPath),
        skills_path_allowed: allowlistRoots.some((rootPath) => isPathInside(skillsPath, rootPath)),
        config_path: configPath,
        config_profile: definition.configProfile,
        config_profile_description:
          (CONFIG_PROFILES[definition.configProfile] || CONFIG_PROFILES["generic-json"]).description,
        config_format: (CONFIG_PROFILES[definition.configProfile] || CONFIG_PROFILES["generic-json"]).format,
        config_path_exists: fs.existsSync(configPath),
        config_path_writable: canWritePath(configPath),
        config_path_allowed: allowlistRoots.some((rootPath) => isPathInside(configPath, rootPath)),
        installed_skill_ids: installedSkillIds,
      };
    }),
    config_targets: Object.entries(CONFIG_TARGETS).map(([targetId, definition]) => ({
      id: targetId,
      name: definition.name,
      path: definition.path(env),
      config_profile: definition.configProfile,
      config_profile_description:
        (CONFIG_PROFILES[definition.configProfile] || CONFIG_PROFILES["generic-json"]).description,
    })),
  };
}

export function listInstalledSkills(input = {}, options = {}) {
  const detection = detectClients(options);

  if (!input.client && !input.target_path) {
    return {
      targets: detection.clients.map((client) => ({
        client: client.id,
        name: client.name,
        target_path: client.skills_path,
        installed_skill_ids: client.installed_skill_ids,
      })),
    };
  }

  const targetPath = resolveSkillsTarget({ client: input.client, targetPath: input.target_path }, options);
  return {
    client: input.client || null,
    target_path: targetPath,
    installed_skill_ids: listInstalledSkillIdsForPath(targetPath),
  };
}

export function installSkills(input = {}, options = {}) {
  const dryRun = input.dry_run !== undefined ? Boolean(input.dry_run) : true;
  const includeDocs = input.include_docs !== undefined ? Boolean(input.include_docs) : true;
  const normalizedClientId = normalizeClientId(input.client);
  const targetPath = resolveSkillsTarget({ client: input.client, targetPath: input.target_path }, options);
  const plan = buildInstallPlan(
    {
      skill_ids: input.skill_ids || [],
      bundle_ids: input.bundle_ids || [],
      tools: normalizedClientId ? [normalizedClientId] : input.tools || [],
      target_path: targetPath,
      dry_run: true,
    },
    options,
  );
  const selectedSkillIds = resolveSelectedSkillIds(plan, options);
  const operations = buildFileCopyOperations(
    selectedSkillIds,
    targetPath,
    options,
    includeDocs,
    plan.install_scope === "full-library",
  );

  if (!dryRun) {
    applyCopyOperations(operations);
  }

  return {
    dry_run: dryRun,
    client: normalizedClientId || input.client || null,
    target_path: targetPath,
    include_docs: includeDocs,
    install_scope: plan.install_scope,
    selected_bundles: plan.selected_bundles,
    selected_skill_ids: selectedSkillIds,
    warnings: plan.warnings,
    operations,
    summary: summarizeOperations(operations),
    applied: !dryRun,
  };
}

export function removeSkills(input = {}, options = {}) {
  const skillIds = Array.isArray(input.skill_ids) ? input.skill_ids : [];
  const bundleIds = Array.isArray(input.bundle_ids) ? input.bundle_ids : [];
  const dryRun = input.dry_run !== undefined ? Boolean(input.dry_run) : true;
  const normalizedClientId = normalizeClientId(input.client);
  const targetPath = resolveSkillsTarget({ client: input.client, targetPath: input.target_path }, options);

  if (skillIds.length === 0 && bundleIds.length === 0) {
    throw new Error("Provide at least one skill_id or bundle_id to remove.");
  }

  const plan = buildInstallPlan(
    {
      skill_ids: skillIds,
      bundle_ids: bundleIds,
      tools: normalizedClientId ? [normalizedClientId] : input.tools || [],
      target_path: targetPath,
      dry_run: true,
    },
    options,
  );

  const operations = resolveSelectedSkillIds(plan, options).map((skillId) => ({
    type: "remove-path",
    kind: "skill-directory",
    skill_id: skillId,
    target: path.join(targetPath, skillId),
    exists: fs.existsSync(path.join(targetPath, skillId)),
  }));

  if (!dryRun) {
    applyRemoveOperations(operations);
  }

  return {
    dry_run: dryRun,
    client: normalizedClientId || input.client || null,
    target_path: targetPath,
    selected_bundles: plan.selected_bundles,
    selected_skill_ids: operations.map((operation) => operation.skill_id),
    warnings: plan.warnings,
    operations,
    summary: summarizeOperations(operations),
    applied: !dryRun,
  };
}

export function configureClientMcp(input = {}, options = {}) {
  const dryRun = input.dry_run !== undefined ? Boolean(input.dry_run) : true;
  const serverName = String(input.server_name || "omni-skills");
  const transport = normalizeTransportMode(input.transport || "stream");
  const resolvedTarget = resolveConfigTarget(
    {
      client: input.client,
      configTarget: input.config_target,
      filePath: input.file_path,
    },
    options,
  );
  const { configPath, profile, source, targetId, targetName } = resolvedTarget;
  const initialEntry = buildMcpServerEntry({ transport, url: input.url }, profile);
  const recipes = buildConfigRecipes({
    targetId,
    configPath,
    serverName,
    transport,
    url: input.url,
  });
  const currentConfigText = fs.existsSync(configPath) ? fs.readFileSync(configPath, "utf-8") : "";
  let currentConfig = null;
  let nextConfig = null;
  let nextConfigText = "";

  if (profile.format === "toml") {
    nextConfigText = upsertCodexConfigToml(currentConfigText, serverName, initialEntry);
  } else if (profile.format === "yaml") {
    const { entry } = applyClientSpecificProfileOptions({}, profile, initialEntry, input);
    nextConfigText = renderContinueYamlConfig(serverName, entry);
  } else {
    currentConfig = currentConfigText ? JSON.parse(currentConfigText) : {};
    const rootPath = profile.rootPath || [profile.rootKey];
    const currentServers = getNestedValue(currentConfig, rootPath) || {};
    const { config: mutatedConfig, entry } = applyClientSpecificProfileOptions(currentConfig, profile, initialEntry, input);
    nextConfig = setNestedValue(
      mutatedConfig,
      rootPath,
      {
        ...currentServers,
        [serverName]: entry,
      },
    );
    nextConfigText = `${JSON.stringify(nextConfig, null, 2)}\n`;
  }

  if (!dryRun) {
    fs.mkdirSync(path.dirname(configPath), { recursive: true });
    fs.writeFileSync(configPath, nextConfigText);
  }

  return {
    dry_run: dryRun,
    config_path: configPath,
    config_profile: profile.id,
    config_format: profile.format,
    config_root_key: profile.rootKey,
    config_root_path: profile.rootPath || [profile.rootKey],
    target_source: source,
    target_id: targetId,
    target_name: targetName,
    server_name: serverName,
    transport,
    applied: !dryRun,
    instructions: buildConfigInstructions(targetName, configPath, profile, transport),
    recipes,
    current_config: currentConfig,
    current_config_text: currentConfigText,
    next_config: nextConfig,
    next_config_text: nextConfigText,
  };
}
