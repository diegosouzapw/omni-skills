#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const net = require("node:net");
const { pathToFileURL } = require("node:url");
const { spawn } = require("node:child_process");
const readline = require("node:readline/promises");

const ROOT = path.resolve(__dirname, "..", "..");
const INSTALLER = path.join(__dirname, "install.js");
const MCP_SERVER = path.join(ROOT, "packages", "server-mcp", "src", "server.js");
const API_SERVER = path.join(ROOT, "packages", "server-api", "src", "server.js");
const A2A_SERVER = path.join(ROOT, "packages", "server-a2a", "src", "server.js");
const CATALOG = path.join(ROOT, "dist", "catalog.json");

const COLOR = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  cyan: "\x1b[36m",
  blue: "\x1b[34m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  gray: "\x1b[90m",
};

const TOOL_TARGETS = [
  ["Claude Code", path.join(os.homedir(), ".claude", "skills")],
  ["Cursor", path.join(os.homedir(), ".cursor", "skills")],
  ["Gemini CLI", path.join(os.homedir(), ".gemini", "skills")],
  ["Codex CLI", path.join(process.env.CODEX_HOME || path.join(os.homedir(), ".codex"), "skills")],
  ["Antigravity", path.join(os.homedir(), ".gemini", "antigravity", "skills")],
  ["OpenCode", path.join(process.cwd(), ".agents", "skills")],
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

const TOOL_ALIASES = {
  claude: "claude-code",
  "claude-code": "claude-code",
  cursor: "cursor",
  gemini: "gemini-cli",
  "gemini-cli": "gemini-cli",
  codex: "codex-cli",
  "codex-cli": "codex-cli",
  kiro: "kiro",
  antigravity: "antigravity",
  opencode: "opencode",
};

const TOOL_DISPLAY_NAMES = {
  "claude-code": "Claude Code",
  cursor: "Cursor",
  "gemini-cli": "Gemini CLI",
  "codex-cli": "Codex CLI",
  kiro: "Kiro",
  antigravity: "Antigravity",
  opencode: "OpenCode",
};

function style(color, value) {
  if (!process.stdout.isTTY) {
    return String(value);
  }
  return `${color}${value}${COLOR.reset}`;
}

function heading(title, subtitle = "") {
  const line = "─".repeat(66);
  return [
    style(COLOR.cyan, line),
    `${style(COLOR.bold, "Omni Skills CLI")}  ${style(COLOR.dim, subtitle)}`,
    style(COLOR.cyan, line),
    title ? `${style(COLOR.blue, "•")} ${title}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

function printHelp() {
  console.log(
    `${heading("Install skills, run services, and inspect your local setup.", "unified mode")}\n\n` +
      `${style(COLOR.bold, "Usage")}\n` +
      `  node tools/bin/cli.js <command> [options]\n` +
      `  npm run cli -- <command> [options]\n\n` +
      `${style(COLOR.bold, "Commands")}\n` +
      `  ui                         Open the interactive terminal UI\n` +
      `  find [query]               Search the published skill catalog\n` +
      `  install [flags]            Run the installer backend with the existing install flags\n` +
      `  mcp <stdio|stream|sse>     Start the MCP server in the selected transport\n` +
      `  api                        Start the catalog HTTP API\n` +
      `  a2a                        Start the A2A server\n` +
      `  smoke                      Run local release smoke checks\n` +
      `  publish-check              Alias for smoke\n` +
      `  doctor                     Show repo and local install diagnostics\n` +
      `  help                       Show this help\n\n` +
      `${style(COLOR.bold, "Examples")}\n` +
      `  npx omni-skills find figma\n` +
      `  npx omni-skills find discovery --tool codex-cli\n` +
      `  npx omni-skills find figma --tool cursor --install --yes\n` +
      `  npx omni-skills find foundation --bundle essentials --install --yes\n` +
      `  npx omni-skills --cursor --skill omni-figma\n` +
      `  npx omni-skills mcp stream --local\n` +
      `  npx omni-skills api --port 3333\n` +
      `  npx omni-skills a2a --port 3335\n` +
      `  npx omni-skills smoke\n` +
      `  npm run cli -- find figma --tool cursor\n` +
      `  npm run cli -- install --cursor --skill omni-figma\n` +
      `  npm run cli -- install --bundle full-stack --codex\n` +
      `  npm run cli -- mcp stream --local --port 3334\n` +
      `  npm run cli -- mcp sse --port 3335\n` +
      `  npm run cli -- api --port 3333\n` +
      `  npm run cli -- a2a --port 3335\n` +
      `  npm run cli -- smoke\n` +
      `  npm run cli -- doctor\n`,
  );
}

function spawnNode(scriptPath, args = [], env = {}, stdio = "inherit") {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [scriptPath, ...args], {
      stdio,
      cwd: ROOT,
      env: { ...process.env, ...env },
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`Process exited with status ${code ?? 1}.`));
    });
  });
}

function npmCommand() {
  return process.platform === "win32" ? "npm.cmd" : "npm";
}

function runCommand(command, args = [], env = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: ROOT,
      stdio: "inherit",
      env: { ...process.env, ...env },
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`${command} ${args.join(" ")} exited with status ${code ?? 1}.`));
    });
  });
}

function parseFlagValue(args, flag) {
  const index = args.indexOf(flag);
  if (index === -1 || !args[index + 1]) {
    return null;
  }
  return args[index + 1];
}

function stripFlag(args, flag, takesValue = false) {
  const result = [];
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] !== flag) {
      result.push(args[index]);
      continue;
    }
    if (takesValue) {
      index += 1;
    }
  }
  return result;
}

function describePath(targetPath) {
  const exists = fs.existsSync(targetPath);
  const label = exists ? style(COLOR.green, "present") : style(COLOR.gray, "missing");
  return `${targetPath} ${style(COLOR.dim, `(${label})`)}`;
}

function hasRepoScript(relativePath) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

async function loadCatalogCore() {
  const moduleUrl = pathToFileURL(
    path.join(ROOT, "packages", "catalog-core", "src", "index.js"),
  ).href;
  return import(moduleUrl);
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      const port = typeof address === "object" && address ? address.port : null;
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(port);
      });
    });
  });
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request to ${url} failed with ${response.status}.`);
  }
  return response.json();
}

async function waitFor(checker, timeoutMs = 10000, intervalMs = 200) {
  const startedAt = Date.now();
  let lastError;
  while (Date.now() - startedAt < timeoutMs) {
    try {
      return await checker();
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
  }
  throw lastError || new Error("Timed out while waiting for service readiness.");
}

function spawnBackground(scriptPath, args = [], env = {}) {
  const child = spawn(process.execPath, [scriptPath, ...args], {
    cwd: ROOT,
    env: { ...process.env, ...env },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const logs = [];
  const appendLog = (chunk) => {
    const line = String(chunk || "");
    logs.push(line);
    if (logs.length > 50) {
      logs.shift();
    }
  };

  child.stdout.on("data", appendLog);
  child.stderr.on("data", appendLog);

  return { child, logs };
}

async function withBackgroundProcess(label, scriptPath, args, env, probe) {
  const { child, logs } = spawnBackground(scriptPath, args, env);

  const exitPromise = new Promise((resolve, reject) => {
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code !== null && code !== 0) {
        reject(
          new Error(
            `${label} exited early with status ${code}.\n${logs.join("").slice(-3000)}`,
          ),
        );
        return;
      }
      resolve();
    });
  });

  try {
    const result = await Promise.race([
      probe({ child, logs }),
      exitPromise,
    ]);
    return result;
  } finally {
    if (child.exitCode === null && !child.killed) {
      child.kill("SIGINT");
      await new Promise((resolve) => child.once("exit", resolve));
    }
  }
}

async function probeSseEndpoint(url, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    const request = fetch(url, {
      signal: AbortSignal.timeout(timeoutMs),
      headers: {
        Accept: "text/event-stream",
      },
    });

    request
      .then(async (response) => {
        if (!response.ok || !response.body) {
          reject(new Error(`SSE endpoint ${url} failed with ${response.status}.`));
          return;
        }

        const reader = response.body.getReader();
        let data = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          data += Buffer.from(value).toString("utf-8");
          if (data.includes("event: endpoint")) {
            await reader.cancel();
            resolve(data);
            return;
          }
        }
        reject(new Error(`SSE endpoint ${url} did not emit an endpoint event.`));
      })
      .catch(reject);
  });
}

function formatList(values = []) {
  if (!Array.isArray(values) || values.length === 0) {
    return "none";
  }
  return values.join(", ");
}

function normalizeToolId(value) {
  const normalized = String(value || "").trim().toLowerCase();
  return TOOL_ALIASES[normalized] || normalized || "";
}

function buildInstallHint(skillId, tool = "") {
  const normalizedTool = normalizeToolId(tool);
  const flag = TOOL_INSTALL_FLAGS[normalizedTool] || "";
  if (!flag) {
    return `npx omni-skills --skill ${skillId}`;
  }
  return `npx omni-skills ${flag} --skill ${skillId}`;
}

function formatBundleAvailability(bundle) {
  return `${bundle.id} ${bundle.availability.available}/${bundle.availability.total}`;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
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

async function promptYesNo(rl, prompt, defaultYes = true) {
  const suffix = defaultYes ? " [Y/n] " : " [y/N] ";
  const answer = (await rl.question(`${prompt}${suffix}`)).trim().toLowerCase();
  if (!answer) {
    return defaultYes;
  }
  return answer === "y" || answer === "yes";
}

async function chooseFromList(rl, title, items, formatItem) {
  console.log("");
  console.log(style(COLOR.bold, title));
  items.forEach((item, index) => {
    console.log(`  ${index + 1}. ${formatItem(item)}`);
  });
  const answer = (await rl.question(style(COLOR.bold, "Select > "))).trim();
  const selectedIndex = Number.parseInt(answer || "1", 10) - 1;
  if (selectedIndex < 0 || selectedIndex >= items.length) {
    return items[0];
  }
  return items[selectedIndex];
}

function runDoctor() {
  console.log(heading("Local package and install diagnostics."));
  console.log("");
  console.log(`${style(COLOR.bold, "Repository")}`);
  console.log(`  root:     ${describePath(ROOT)}`);
  console.log(`  installer:${describePath(INSTALLER)}`);
  console.log(`  mcp:      ${describePath(MCP_SERVER)}`);
  console.log(`  api:      ${describePath(API_SERVER)}`);
  console.log(`  a2a:      ${describePath(A2A_SERVER)}`);
  console.log(`  catalog:  ${describePath(CATALOG)}`);
  console.log("");
  console.log(`${style(COLOR.bold, "Default Skill Targets")}`);
  for (const [name, targetPath] of TOOL_TARGETS) {
    console.log(`  ${name.padEnd(12)} ${describePath(targetPath)}`);
  }
  console.log("");
  console.log(`${style(COLOR.bold, "Tips")}`);
  console.log("  - Use `npm run cli -- find figma` to inspect the published catalog.");
  console.log("  - Use `npm run build` to regenerate catalog artifacts if catalog.json is missing.");
  console.log("  - Use `npm run cli -- mcp stream --local` to start the local sidecar mode.");
  console.log("  - Use `npm run cli -- install --cursor --skill omni-figma` for a focused install.");
  console.log("  - Use `npm run cli -- api --port 3333` to expose the catalog over HTTP.");
  console.log("  - Use `npm run cli -- a2a --port 3335` to expose the A2A scaffold.");
}

async function runFind(args) {
  const jsonOutput = args.includes("--json");
  const installRequested = args.includes("--install");
  const assumeYes = args.includes("--yes");
  const includeBundles = !args.includes("--no-bundles");
  const category = parseFlagValue(args, "--category") || "";
  const tool = normalizeToolId(parseFlagValue(args, "--client") || parseFlagValue(args, "--tool") || "");
  const risk = parseFlagValue(args, "--risk") || "";
  const limitValue = parseFlagValue(args, "--limit");
  const targetPath = parseFlagValue(args, "--path");
  const explicitBundleId = parseFlagValue(args, "--bundle");

  const filteredArgs = stripFlag(
    stripFlag(
      stripFlag(
        stripFlag(
          stripFlag(
            stripFlag(
              stripFlag(
                stripFlag(args, "--json"),
                "--install",
              ),
              "--yes",
            ),
            "--no-bundles",
          ),
          "--client",
          true,
        ),
        "--category",
        true,
      ),
      "--tool",
      true,
    ),
    "--risk",
    true,
  );
  const remainingArgs = stripFlag(
    stripFlag(
      stripFlag(filteredArgs, "--limit", true),
      "--path",
      true,
    ),
    "--bundle",
    true,
  );
  const query = remainingArgs.join(" ").trim();

  if (jsonOutput && installRequested) {
    throw new Error("Use either --json or --install, not both at the same time.");
  }

  const core = await loadCatalogCore();
  const catalog = core.loadCatalog();
  const limit = limitValue ? Number.parseInt(limitValue, 10) : query ? 10 : 50;
  const result = core.searchSkills({
    query,
    category,
    tool,
    risk,
    limit,
  });
  const bundles = includeBundles ? core.listBundles() : [];
  const bundleMatches = includeBundles && query ? searchBundleMatches(bundles, query).slice(0, 5) : [];

  if (jsonOutput) {
    console.log(
      JSON.stringify(
        {
          query,
          category: category || null,
          tool: tool || null,
          risk: risk || null,
          total_published_skills: catalog.total_skills,
          total_matches: result.total,
          results: result.results,
          bundle_matches: bundleMatches,
          bundles: bundles.map((bundle) => ({
            id: bundle.id,
            name: bundle.name,
            availability: bundle.availability,
            available_skill_ids: bundle.available_skill_ids,
            missing_skill_ids: bundle.missing_skill_ids,
          })),
        },
        null,
        2,
      ),
    );
    return;
  }

  console.log(
    `${heading(
      query ? `Searching the published catalog for '${query}'.` : "Browsing the published catalog.",
      "discovery",
    )}\n`,
  );
  console.log(
    `${style(COLOR.bold, "Catalog")}: ${catalog.total_skills} published skill(s)` +
      `${category ? ` | category=${category}` : ""}` +
      `${tool ? ` | tool=${tool}` : ""}` +
      `${risk ? ` | risk=${risk}` : ""}`,
  );
  console.log("");

  if (result.results.length === 0) {
    console.log(style(COLOR.yellow, "No published skills matched this query."));
    console.log("Try broader keywords, remove filters, or browse the current bundles below.");
    console.log(
      "If this is a recurring workflow, consider creating a new skill from docs/contributors/skill-template.md.",
    );
  } else {
    console.log(style(COLOR.bold, `Results (${result.results.length}/${result.total})`));
    console.log("");
    for (const skill of result.results) {
      console.log(
        `${style(COLOR.green, skill.display_name || skill.id)} ${style(COLOR.dim, `(${skill.id})`)}`,
      );
      console.log(`  ${skill.description}`);
      console.log(
        `  category: ${skill.category || "uncategorized"} | risk: ${skill.risk || "unknown"}`,
      );
      if (skill.skill_level || skill.best_practices_score || skill.quality_score) {
        console.log(
          `  level: ${skill.skill_level ? `L${skill.skill_level} ${skill.skill_level_label || ""}`.trim() : "—"} | ` +
            `best practices: ${Number.isFinite(skill.best_practices_score) ? `${skill.best_practices_score}/100` : "—"} | ` +
            `quality: ${Number.isFinite(skill.quality_score) ? `${skill.quality_score}/100` : "—"}`,
        );
      }
      console.log(`  tools: ${formatList(skill.tools || [])}`);
      console.log(`  tags: ${formatList((skill.tags || []).slice(0, 8))}`);
      console.log(`  install: ${buildInstallHint(skill.id, tool)}`);
      console.log(`  manifest: dist/manifests/${skill.id}.json`);
      console.log("");
    }
  }

  if (bundleMatches.length > 0) {
    console.log(style(COLOR.bold, "Bundle Matches"));
    for (const bundle of bundleMatches) {
      console.log(
        `  - ${bundle.name} ${style(COLOR.dim, `(${formatBundleAvailability(bundle)})`)}: ${bundle.description}`,
      );
    }
    console.log("");
  }

  if (bundles.length > 0) {
    console.log(style(COLOR.bold, "Bundle Snapshot"));
    for (const bundle of bundles) {
      console.log(`  - ${formatBundleAvailability(bundle)} ${style(COLOR.dim, `(${bundle.name})`)}`);
    }
  }

  if (!installRequested) {
    return;
  }

  let selectedSkill = null;
  let selectedBundle = null;

  if (explicitBundleId) {
    selectedBundle = bundles.find((bundle) => bundle.id === explicitBundleId) || null;
    if (!selectedBundle) {
      throw new Error(`Bundle '${explicitBundleId}' was not found.`);
    }
  } else if (result.results.length > 0) {
    if (process.stdin.isTTY && process.stdout.isTTY && !assumeYes && result.results.length > 1) {
      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      try {
        selectedSkill = await chooseFromList(
          rl,
          "Multiple skills matched. Choose one to install:",
          result.results,
          (skill) => `${skill.display_name || skill.id} (${skill.id})`,
        );
      } finally {
        rl.close();
      }
    } else {
      selectedSkill = result.results[0];
    }
  } else if (bundleMatches.length > 0) {
    selectedBundle = bundleMatches[0];
  } else {
    throw new Error("No published skill or matching bundle could be selected for installation.");
  }

  let installTool = tool;
  if (!installTool && selectedSkill && process.stdin.isTTY && process.stdout.isTTY && !assumeYes) {
    const supportedTools = (selectedSkill.tools || [])
      .map((toolId) => normalizeToolId(toolId))
      .filter((toolId) => TOOL_INSTALL_FLAGS[toolId]);
    if (supportedTools.length > 0) {
      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      try {
        installTool = await chooseFromList(
          rl,
          "Choose the target client for installation:",
          supportedTools,
          (toolId) => `${TOOL_DISPLAY_NAMES[toolId] || toolId} (${toolId})`,
        );
      } finally {
        rl.close();
      }
    }
  }

  const installerArgs = buildInstallerArgs({
    tool: installTool,
    targetPath,
    skillId: selectedSkill?.id || null,
    bundleId: selectedBundle?.id || null,
  });
  const installCommand = renderInstallerCommand(installerArgs);

  console.log("");
  console.log(style(COLOR.bold, "Selected Install Command"));
  console.log(`  ${installCommand}`);

  if (assumeYes) {
    console.log("");
    await runInstaller(installerArgs);
    return;
  }

  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    console.log("");
    console.log("Pass --yes to execute the install directly in non-interactive mode.");
    return;
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    const shouldInstall = await promptYesNo(rl, "Run this install now?", true);
    if (shouldInstall) {
      console.log("");
      await runInstaller(installerArgs);
    }
  } finally {
    rl.close();
  }
}

async function runInstaller(args) {
  console.log(heading("Delegating to the installer backend."));
  console.log("");
  await spawnNode(INSTALLER, args);
}

async function runMcp(args) {
  const transport = String(args[0] || "stream").trim().toLowerCase();
  const localMode = args.includes("--local");
  const host = parseFlagValue(args, "--host");
  const port = parseFlagValue(args, "--port");

  if (!["stdio", "stream", "sse"].includes(transport)) {
    throw new Error(`Unsupported transport '${transport}'. Use stdio, stream, or sse.`);
  }

  const filteredArgs = stripFlag(stripFlag(stripFlag(args.slice(1), "--local"), "--host", true), "--port", true);
  const env = {};
  if (localMode) {
    env.OMNI_SKILLS_MCP_MODE = "local";
  }
  if (host) {
    env.HOST = host;
  }
  if (port) {
    env.PORT = port;
  }

  console.log(
    `${heading(
      `Starting MCP in ${transport} mode.`,
      localMode ? "local sidecar enabled" : "read-only mode",
    )}\n`,
  );
  await spawnNode(MCP_SERVER, ["--transport", transport, ...filteredArgs], env);
}

async function runApi(args) {
  const host = parseFlagValue(args, "--host");
  const port = parseFlagValue(args, "--port");
  const filteredArgs = stripFlag(stripFlag(args, "--host", true), "--port", true);
  const env = {};

  if (host) {
    env.HOST = host;
  }
  if (port) {
    env.PORT = port;
  }

  console.log(`${heading("Starting the catalog API.", "read-only HTTP service")}\n`);
  await spawnNode(API_SERVER, filteredArgs, env);
}

async function runA2a(args) {
  const host = parseFlagValue(args, "--host");
  const port = parseFlagValue(args, "--port");
  const baseUrl = parseFlagValue(args, "--base-url");
  const filteredArgs = stripFlag(stripFlag(stripFlag(args, "--host", true), "--port", true), "--base-url", true);
  const env = {};

  if (host) {
    env.HOST = host;
  }
  if (port) {
    env.PORT = port;
  }
  if (baseUrl) {
    env.BASE_URL = baseUrl;
  }

  console.log(`${heading("Starting the A2A server.", "agent-to-agent surface")}\n`);
  await spawnNode(A2A_SERVER, filteredArgs, env);
}

async function runSmoke(args) {
  const skipBuild = args.includes("--skip-build");
  const skipTest = args.includes("--skip-test");
  const skipPack = args.includes("--skip-pack");
  const skipServices = args.includes("--skip-services");
  const results = [];
  const logResult = (label, status, detail = "") => {
    const color = status === "ok" ? COLOR.green : status === "skip" ? COLOR.yellow : COLOR.red;
    console.log(`${style(color, status.toUpperCase().padEnd(4))} ${label}${detail ? ` ${style(COLOR.dim, detail)}` : ""}`);
    results.push({ label, status, detail });
  };

  console.log(heading("Running release smoke checks.", "build, pack, and runtime probes"));
  console.log("");

  if (!skipBuild) {
    if (hasRepoScript("tools/scripts/validate_skills.py") && hasRepoScript("tools/scripts/build_catalog.js")) {
      await runCommand("python3", ["tools/scripts/validate_skills.py"]);
      await runCommand("python3", ["tools/scripts/generate_index.py"]);
      await runCommand(process.execPath, ["tools/scripts/build_catalog.js"]);
      logResult("Repository build pipeline", "ok");
    } else {
      logResult("Repository build pipeline", "skip", "(repo-only scripts not present in this package)");
    }
  } else {
    logResult("Repository build pipeline", "skip", "(requested by flag)");
  }

  if (!skipTest) {
    if (hasRepoScript("tools/scripts/tests/run_tests.js")) {
      await runCommand(npmCommand(), ["test"]);
      logResult("Smoke test suite", "ok");
    } else {
      logResult("Smoke test suite", "skip", "(repo-only tests not present in this package)");
    }
  } else {
    logResult("Smoke test suite", "skip", "(requested by flag)");
  }

  if (!skipPack) {
    await runCommand(npmCommand(), ["pack", "--dry-run"]);
    logResult("npm pack --dry-run", "ok");
  } else {
    logResult("npm pack --dry-run", "skip", "(requested by flag)");
  }

  if (!skipServices) {
    const apiPort = await getFreePort();
    await withBackgroundProcess(
      "api",
      API_SERVER,
      [],
      { PORT: String(apiPort) },
      async () => {
        const health = await waitFor(() => fetchJson(`http://127.0.0.1:${apiPort}/healthz`));
        if (health.status !== "ok") {
          throw new Error("API health status was not ok.");
        }
        const skills = await fetchJson(`http://127.0.0.1:${apiPort}/v1/skills`);
        if (!Array.isArray(skills.results) || skills.results.length === 0) {
          throw new Error("API did not return any skills.");
        }
      },
    );
    logResult("Catalog API boot + probe", "ok", `(:${apiPort})`);

    await withBackgroundProcess(
      "mcp-stdio",
      MCP_SERVER,
      ["--transport", "stdio"],
      { OMNI_SKILLS_MCP_MODE: "local" },
      async ({ logs }) => {
        await waitFor(() => {
          if (!logs.join("").includes("running over stdio")) {
            throw new Error("stdio MCP server has not logged readiness yet.");
          }
        });
      },
    );
    logResult("MCP stdio boot", "ok");

    const streamPort = await getFreePort();
    await withBackgroundProcess(
      "mcp-stream",
      MCP_SERVER,
      ["--transport", "stream"],
      { PORT: String(streamPort), OMNI_SKILLS_MCP_MODE: "local" },
      async () => {
        const health = await waitFor(() => fetchJson(`http://127.0.0.1:${streamPort}/healthz`));
        if (health.transport !== "stream") {
          throw new Error("Stream MCP health probe returned the wrong transport.");
        }
      },
    );
    logResult("MCP stream boot + probe", "ok", `(:${streamPort})`);

    const ssePort = await getFreePort();
    await withBackgroundProcess(
      "mcp-sse",
      MCP_SERVER,
      ["--transport", "sse"],
      { PORT: String(ssePort), OMNI_SKILLS_MCP_MODE: "local" },
      async () => {
        const health = await waitFor(() => fetchJson(`http://127.0.0.1:${ssePort}/healthz`));
        if (health.transport !== "sse") {
          throw new Error("SSE MCP health probe returned the wrong transport.");
        }
        const sseData = await probeSseEndpoint(`http://127.0.0.1:${ssePort}/sse`);
        if (!sseData.includes("event: endpoint")) {
          throw new Error("SSE probe did not observe the endpoint event.");
        }
      },
    );
    logResult("MCP SSE boot + probe", "ok", `(:${ssePort})`);

    const a2aPort = await getFreePort();
    await withBackgroundProcess(
      "a2a",
      A2A_SERVER,
      [],
      { PORT: String(a2aPort) },
      async () => {
        const health = await waitFor(() => fetchJson(`http://127.0.0.1:${a2aPort}/healthz`));
        if (health.status !== "ok") {
          throw new Error("A2A health status was not ok.");
        }
        const agentCard = await fetchJson(`http://127.0.0.1:${a2aPort}/.well-known/agent.json`);
        if (!agentCard.url || !String(agentCard.url).includes("/a2a")) {
          throw new Error("A2A agent card did not expose the /a2a endpoint.");
        }
      },
    );
    logResult("A2A boot + probe", "ok", `(:${a2aPort})`);
  } else {
    logResult("Runtime service probes", "skip", "(requested by flag)");
  }

  console.log("");
  console.log(style(COLOR.green, "Smoke checks completed."));
}

async function interactiveMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    console.log(
      `${heading("Choose a quick action.", "interactive")}\n\n` +
        `  1. Find skills\n` +
        `  2. Install skills\n` +
        `  3. Start MCP over stdio\n` +
        `  4. Start MCP over stream\n` +
        `  5. Start MCP over SSE\n` +
        `  6. Start the catalog API\n` +
        `  7. Start the A2A server\n` +
        `  8. Run smoke checks\n` +
        `  9. Run doctor\n` +
        `  q. Quit\n`,
    );

    const action = (await rl.question(style(COLOR.bold, "Action > "))).trim().toLowerCase();
    if (action === "1") {
      const query = await rl.question(style(COLOR.bold, "Search query > "));
      await runFind(query.trim() ? query.trim().split(/\s+/) : []);
      return;
    }
    if (action === "2") {
      const installArgs = await rl.question(style(COLOR.bold, "Installer flags > "));
      await runInstaller(installArgs.trim() ? installArgs.trim().split(/\s+/) : []);
      return;
    }
    if (action === "3") {
      await runMcp(["stdio", "--local"]);
      return;
    }
    if (action === "4") {
      await runMcp(["stream", "--local"]);
      return;
    }
    if (action === "5") {
      await runMcp(["sse", "--local"]);
      return;
    }
    if (action === "6") {
      await runApi([]);
      return;
    }
    if (action === "7") {
      await runA2a([]);
      return;
    }
    if (action === "8") {
      await runSmoke([]);
      return;
    }
    if (action === "9") {
      runDoctor();
      return;
    }
  } finally {
    rl.close();
  }
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    await runInstaller([]);
    return;
  }

  if (command === "help" || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  if (command === "ui") {
    await interactiveMenu();
    return;
  }

  if (command === "find" || command === "search") {
    await runFind(args.slice(1));
    return;
  }

  if (command === "doctor") {
    runDoctor();
    return;
  }

  if (command === "mcp") {
    await runMcp(args.slice(1));
    return;
  }

  if (command === "api") {
    await runApi(args.slice(1));
    return;
  }

  if (command === "a2a") {
    await runA2a(args.slice(1));
    return;
  }

  if (command === "smoke" || command === "publish-check") {
    await runSmoke(args.slice(1));
    return;
  }

  if (command === "install" || command.startsWith("--")) {
    await runInstaller(command === "install" ? args.slice(1) : args);
    return;
  }

  throw new Error(`Unknown command '${command}'. Use 'help' to inspect the CLI.`);
}

main().catch((error) => {
  console.error(`\n${style(COLOR.red, "Error")}: ${error.message}`);
  process.exit(1);
});
