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

const SELECTIVE_DOC_PATHS = [
  "docs/README.md",
  "docs/CATALOG.md",
  "docs/users/getting-started.md",
  "docs/users/usage.md",
  "docs/users/bundles.md",
];

const CLIENT_DEFINITIONS = {
  "claude-code": {
    name: "Claude Code",
    aliases: ["claude-code", "claude"],
    skillsPath: (env) => path.join(env.homeDir, ".claude", "skills"),
    configPath: (env) => path.join(env.homeDir, ".claude", "mcp.json"),
  },
  cursor: {
    name: "Cursor",
    aliases: ["cursor"],
    skillsPath: (env) => path.join(env.homeDir, ".cursor", "skills"),
    configPath: (env) => path.join(env.homeDir, ".cursor", "mcp.json"),
  },
  "gemini-cli": {
    name: "Gemini CLI",
    aliases: ["gemini-cli", "gemini"],
    skillsPath: (env) => path.join(env.homeDir, ".gemini", "skills"),
    configPath: (env) => path.join(env.homeDir, ".gemini", "mcp.json"),
  },
  "codex-cli": {
    name: "Codex CLI",
    aliases: ["codex-cli", "codex"],
    skillsPath: (env) => path.join(env.codexHome, "skills"),
    configPath: (env) => path.join(env.codexHome, "mcp.json"),
  },
  kiro: {
    name: "Kiro",
    aliases: ["kiro"],
    skillsPath: (env) => path.join(env.homeDir, ".kiro", "skills"),
    configPath: (env) => path.join(env.homeDir, ".kiro", "mcp.json"),
  },
  antigravity: {
    name: "Antigravity",
    aliases: ["antigravity"],
    skillsPath: (env) => path.join(env.homeDir, ".gemini", "antigravity", "skills"),
    configPath: (env) => path.join(env.homeDir, ".gemini", "antigravity", "mcp.json"),
  },
  opencode: {
    name: "OpenCode",
    aliases: ["opencode"],
    skillsPath: (env) => path.join(env.cwd, ".agents", "skills"),
    configPath: (env) => path.join(env.cwd, ".agents", "mcp.json"),
  },
};

const CONFIG_TARGETS = {
  workspace: {
    name: "Workspace MCP config",
    path: (env) => path.join(env.cwd, ".mcp.json"),
  },
  vscode: {
    name: "VS Code MCP config",
    path: (env) => path.join(env.cwd, ".vscode", "mcp.json"),
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
    path.join(env.homeDir, ".cursor"),
    path.join(env.homeDir, ".gemini"),
    path.join(env.homeDir, ".kiro"),
    env.codexHome,
    path.join(env.cwd, ".agents"),
    path.join(env.cwd, ".vscode"),
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

function resolveConfigTarget({ client, configTarget, filePath }, options = {}) {
  const env = normalizeEnv(options);

  if (filePath) {
    return assertPathAllowed(filePath, options);
  }

  if (configTarget) {
    const definition = CONFIG_TARGETS[String(configTarget).trim().toLowerCase()];
    if (!definition) {
      throw new Error(`Unsupported config_target '${configTarget}'.`);
    }
    return assertPathAllowed(definition.path(env), options);
  }

  const clientDefinition = getClientDefinition(client);
  if (!clientDefinition) {
    throw new Error("Provide client, config_target, or file_path.");
  }

  return assertPathAllowed(clientDefinition.configPath(env), options);
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

function buildMcpServerEntry({ transport = "stream", url }) {
  const mode = normalizeTransportMode(transport);

  if (mode === "stdio") {
    return {
      command: process.execPath,
      args: [SERVER_ENTRY_PATH],
      env: {
        OMNI_SKILLS_MCP_MODE: "local",
        ...(process.env.OMNI_SKILLS_API_BASE_URL
          ? { OMNI_SKILLS_API_BASE_URL: process.env.OMNI_SKILLS_API_BASE_URL }
          : {}),
      },
    };
  }

  return {
    url: url || defaultTransportUrl(mode),
  };
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
  const configPath = resolveConfigTarget(
    {
      client: input.client,
      configTarget: input.config_target,
      filePath: input.file_path,
    },
    options,
  );
  const currentConfig = fs.existsSync(configPath)
    ? JSON.parse(fs.readFileSync(configPath, "utf-8"))
    : {};
  const nextConfig = {
    ...currentConfig,
    mcpServers: {
      ...(currentConfig.mcpServers || {}),
      [serverName]: buildMcpServerEntry({ transport, url: input.url }),
    },
  };

  if (!dryRun) {
    fs.mkdirSync(path.dirname(configPath), { recursive: true });
    fs.writeFileSync(configPath, `${JSON.stringify(nextConfig, null, 2)}\n`);
  }

  return {
    dry_run: dryRun,
    config_path: configPath,
    server_name: serverName,
    transport,
    applied: !dryRun,
    current_config: currentConfig,
    next_config: nextConfig,
  };
}
