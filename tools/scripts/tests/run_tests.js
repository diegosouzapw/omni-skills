#!/usr/bin/env node

"use strict";

const assert = require("node:assert/strict");
const childProcess = require("node:child_process");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const net = require("node:net");

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
  throw lastError || new Error("Timed out while waiting for condition.");
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request to ${url} failed with ${response.status}`);
  }
  return response.json();
}

function createProcessMonitor(childProcessRef, label) {
  const logs = {
    label,
    stdout: [],
    stderr: [],
  };

  function appendLog(target, chunk) {
    const message = String(chunk || "").trim();
    if (!message) {
      return;
    }
    target.push(message);
    if (target.length > 25) {
      target.splice(0, target.length - 25);
    }
  }

  childProcessRef.stdout?.on("data", (chunk) => appendLog(logs.stdout, chunk));
  childProcessRef.stderr?.on("data", (chunk) => appendLog(logs.stderr, chunk));

  return logs;
}

function formatProcessMonitorLogs(logs) {
  const stdout = logs.stdout.length > 0 ? logs.stdout.join("\n") : "<empty>";
  const stderr = logs.stderr.length > 0 ? logs.stderr.join("\n") : "<empty>";
  return `stdout:\n${stdout}\n\nstderr:\n${stderr}`;
}

async function waitForProcessHealth({ url, processRef, logs, label, timeoutMs = 20000, intervalMs = 250 }) {
  return waitFor(async () => {
    if (processRef.exitCode !== null || processRef.signalCode !== null) {
      throw new Error(
        `${label} exited before serving ${url}. exitCode=${processRef.exitCode} signal=${processRef.signalCode}\n${formatProcessMonitorLogs(logs)}`,
      );
    }
    return fetchJson(url);
  }, timeoutMs, intervalMs);
}

async function postJson(url, body, headers = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });

  const contentType = response.headers.get("content-type") || "";
  const payload = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  return {
    response,
    payload,
  };
}

(async () => {
  const core = await import("../../../packages/catalog-core/src/index.js");
  const localSidecar = await import("../../../packages/server-mcp/src/local-sidecar.js");
  const { RedisTaskCoordinator } = await import("../../../packages/server-a2a/src/task-coordinator.js");
  const { OmniSkillsA2ARuntime } = await import("../../../packages/server-a2a/src/task-runtime.js");
  const cliState = require("../../lib/cli-state.js");
  const RedisMock = (await import("ioredis-mock")).default;

  const repoMetadata = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../../metadata.json"), "utf-8"),
  );
  const projectIdentity = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../../data/project_identity.json"), "utf-8"),
  );
  const projectStatus = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../../data/project_status.json"), "utf-8"),
  );
  const packageMetadata = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../../package.json"), "utf-8"),
  );
  const i18nIndex = fs.readFileSync(
    path.resolve(__dirname, "../../../docs/i18n/README.md"),
    "utf-8",
  );
  const i18nPtBrReadme = fs.readFileSync(
    path.resolve(__dirname, "../../../docs/i18n/pt-BR/README.md"),
    "utf-8",
  );
  const nativeTempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "omni-skills-native-"));
  const nativeSkillRoot = path.join(nativeTempRoot, "skills", "raw-native-skill");
  fs.mkdirSync(nativeSkillRoot, { recursive: true });
  fs.writeFileSync(
    path.join(nativeSkillRoot, "SKILL.md"),
    "# Raw Native Skill\n\nThis native intake intentionally omits YAML frontmatter so the repository can accept rough incoming skills and let the enhancer normalize them later.\n",
    "utf-8",
  );
  const nativeValidation = JSON.parse(
    childProcess.execFileSync(
      "python3",
      [
        "-c",
        `
import json
import pathlib
import sys

sys.path.insert(0, ${JSON.stringify(path.resolve(__dirname, ".."))})
import skill_metadata

issues, metadata = skill_metadata.validate_skill(
    ${JSON.stringify(nativeSkillRoot)},
    "raw-native-skill",
    ${JSON.stringify(nativeTempRoot)},
    strict=False,
)
print(json.dumps({"issues": issues, "metadata": metadata}))
`,
      ],
      { encoding: "utf-8" },
    ),
  );
  assert.ok(nativeValidation.metadata, "native intake without frontmatter should still produce derived metadata");
  assert.ok(
    nativeValidation.issues.some(
      ([level, message]) => level === "WARN" && message.includes("Missing or invalid YAML frontmatter"),
    ),
    "native intake should warn when frontmatter is missing",
  );
  assert.ok(
    !nativeValidation.issues.some(
      ([level, message]) => level === "ERROR" && message.includes("frontmatter"),
    ),
    "native intake should no longer fail solely because frontmatter is missing",
  );
  childProcess.execFileSync(
    "python3",
    [path.resolve(__dirname, "../verify_archives.py")],
    { encoding: "utf-8" },
  );
  assert.ok(repoMetadata.summary.total_skills >= 26, "repo metadata should summarize the published skills");
  assert.ok(
    Number(repoMetadata.taxonomy.counts["cli-automation"] || 0) >= 1,
    "repo metadata should keep the cli-automation category represented as the catalog grows",
  );
  assert.ok(
    Number(repoMetadata.taxonomy.counts["testing-security"] || 0) >= 4,
    "repo metadata should continue to track the published security helper family as the catalog grows",
  );
  assert.ok(
    Number(repoMetadata.summary.average_best_practices_score || 0) >= 80,
    "repo metadata should keep a strong best-practices floor",
  );
  assert.ok(
    Number(repoMetadata.summary.average_best_practices_score || 0) < 100,
    "repo metadata should no longer collapse every mature skill to 100/100 best practices",
  );
  assert.ok(
    new Set((repoMetadata.skills || []).map((skill) => Number(skill.best_practices_score || 0))).size >= 3,
    "repo metadata should preserve a meaningful spread of best-practices scores across the catalog",
  );
  assert.ok(
    Number(repoMetadata.summary.average_quality_score || 0) >= 80,
    "repo metadata should keep a strong quality floor",
  );
  assert.equal(
    projectStatus.package_version,
    packageMetadata.version,
    "project status should stay aligned with package.json version",
  );
  assert.equal(
    packageMetadata.description,
    projectIdentity.npm_description,
    "package.json description should stay aligned with project_identity npm_description",
  );
  assert.notEqual(
    projectStatus.generated_at,
    "2026-01-01T00:00:00+00:00",
    "project status should no longer fall back to the static placeholder generated_at",
  );
  assert.ok(
    Array.isArray(projectIdentity.github_topics) &&
      projectIdentity.github_topics.includes(projectIdentity.repo_slug) &&
      projectIdentity.github_topics.includes("mcp"),
    "project identity should keep a reusable GitHub topics contract for repo metadata automation",
  );
  assert.ok(
    i18nIndex.includes(`Multilingual Documentation — ${projectIdentity.display_name}`),
    "i18n index should render the current branded project name",
  );
  assert.ok(
    i18nIndex.includes(projectStatus.latest_release),
    "i18n index should render the current release snapshot",
  );
  assert.ok(
    i18nPtBrReadme.includes("Translation snapshot for **Awesome Omni Skills**"),
    "translated docs should explain that they are generated snapshots of the English source",
  );
  assert.ok(
    i18nPtBrReadme.includes("generated:i18n-doc: project=awesome-omni-skills"),
    "translated docs should embed provenance metadata for the current repo slug",
  );
  assert.ok(
    Number(repoMetadata.summary.average_quality_score || 0) < 100,
    "repo metadata should avoid collapsing every mature skill to 100/100 quality",
  );
  assert.ok(
    new Set((repoMetadata.skills || []).map((skill) => Number(skill.quality_score || 0))).size >= 5,
    "repo metadata should expose a meaningful spread of distinct quality scores across the catalog",
  );
  const repoSkillById = new Map((repoMetadata.skills || []).map((skill) => [skill.id, skill]));
  assert.ok(
    Number(repoSkillById.get("omni-figma")?.quality_score || 0) >=
      Number(repoSkillById.get("architecture")?.quality_score || 0) + 4,
    "the quality scorer should keep exceptional support packs clearly above polished-but-shallower skills",
  );
  assert.ok(
    Number(repoSkillById.get("omni-figma")?.best_practices_score || 0) >=
      Number(repoSkillById.get("architecture")?.best_practices_score || 0) + 2,
    "best-practices spread should preserve a visible gap between exceptional and merely strong workflow kits",
  );
  assert.ok(repoSkillById.has("design-token-governance"), "second category wave should deepen design");
  assert.ok(repoSkillById.has("mcp-server-authoring"), "second category wave should activate tools");
  assert.ok(repoSkillById.has("data-contracts"), "second category wave should activate data-ai");
  assert.ok(repoSkillById.has("model-serving"), "second category wave should activate machine-learning");

  const findMetadata = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../../skills/find-skills/metadata.json"), "utf-8"),
  );
  assert.equal(
    findMetadata.canonical_category,
    "cli-automation",
    "per-skill metadata should normalize categories to canonical taxonomy",
  );
  assert.ok(findMetadata.quality.score > 0, "per-skill metadata should include a quality score");
  assert.ok(
    findMetadata.maturity.skill_level >= 2,
    "per-skill metadata should classify skill maturity",
  );
  assert.equal(
    findMetadata.security.status,
    "passed",
    "per-skill metadata should include a security status",
  );
  assert.ok(
    findMetadata.security.score > 0,
    "per-skill metadata should include a security score",
  );

  const catalog = core.loadCatalog();
  assert.ok(catalog.total_skills >= 26, "catalog should expose the published skills");

  const contributionScopeEvent = path.join(nativeTempRoot, "scope-event.json");
  fs.writeFileSync(
    contributionScopeEvent,
    JSON.stringify(
      {
        pull_request: {
          title: "enhance: promote curated skills_omni candidates for #42",
          user: { login: "github-actions[bot]" },
          body: "## Summary\n\nThis PR was generated automatically from source PR #42.\n",
          head: {
            ref: "skills-omni/pr-42",
            repo: { full_name: "diegosouzapw/awesome-omni-skills" },
          },
        },
      },
      null,
      2,
    ),
    "utf-8",
  );
  childProcess.execFileSync(
    "python3",
    [
      path.resolve(__dirname, "../validate_contribution_scope.py"),
      "--repository",
      "diegosouzapw/awesome-omni-skills",
      "--event-path",
      contributionScopeEvent,
      "--changed-path",
      "skills_omni/example/SKILL.md",
    ],
    { encoding: "utf-8" },
  );
  fs.writeFileSync(
    contributionScopeEvent,
    JSON.stringify(
      {
        pull_request: {
          title: "enhance: promote curated skills_omni candidates for #43",
          user: { login: "diegosouzapw" },
          body: "## Summary\n\nThis PR was generated automatically from source PR #43.\n",
          head: {
            ref: "skills-omni/pr-43",
            repo: { full_name: "diegosouzapw/awesome-omni-skills" },
          },
        },
      },
      null,
      2,
    ),
    "utf-8",
  );
  childProcess.execFileSync(
    "python3",
    [
      path.resolve(__dirname, "../validate_contribution_scope.py"),
      "--repository",
      "diegosouzapw/awesome-omni-skills",
      "--event-path",
      contributionScopeEvent,
      "--changed-path",
      "skills_omni/example/SKILL.md",
    ],
    { encoding: "utf-8" },
  );
  assert.throws(
    () =>
      childProcess.execFileSync(
        "python3",
        [
          path.resolve(__dirname, "../validate_contribution_scope.py"),
          "--repository",
          "diegosouzapw/awesome-omni-skills",
          "--event-path",
          contributionScopeEvent,
          "--changed-path",
          "skills/example/SKILL.md",
          "--changed-path",
          "skills_omni/example/SKILL.md",
        ],
        { encoding: "utf-8" },
      ),
    /cannot modify both native intake/,
    "mixed native and curated paths should be rejected",
  );
  fs.writeFileSync(
    contributionScopeEvent,
    JSON.stringify(
      {
        pull_request: {
          title: "feat: add community skill manually",
          user: { login: "somebody" },
          head: {
            ref: "feat/manual-curated-skill",
            repo: { full_name: "someone-else/omni-skills" },
          },
        },
      },
      null,
      2,
    ),
    "utf-8",
  );
  assert.throws(
    () =>
      childProcess.execFileSync(
        "python3",
        [
          path.resolve(__dirname, "../validate_contribution_scope.py"),
          "--repository",
          "diegosouzapw/awesome-omni-skills",
          "--event-path",
          contributionScopeEvent,
          "--changed-path",
          "skills_omni/example/SKILL.md",
        ],
        { encoding: "utf-8" },
      ),
    /Direct public contribution to skills_omni\/ is not allowed/,
    "manual public changes to skills_omni should be rejected",
  );

  const rankedSearch = core.searchSkills({
    sort: "quality",
    min_security: 90,
    min_level: 2,
    limit: 5,
  });
  assert.ok(
    rankedSearch.results.every((skill) => Number(skill.security_score || 0) >= 90),
    "search should filter by minimum security score",
  );
  assert.ok(
    rankedSearch.results.every((skill) => Number(skill.skill_level || 0) >= 2),
    "search should filter by minimum skill level",
  );
  if (rankedSearch.results.length >= 2) {
    assert.ok(
      rankedSearch.results[0].quality_score >= rankedSearch.results[1].quality_score,
      "search should sort by quality score when requested",
    );
  }

  const search = core.searchSkills({ query: "figma", limit: 5 });
  assert.ok(search.results.some((skill) => skill.id === "omni-figma"), "search should find omni-figma");

  const discoverySearch = core.searchSkills({ query: "discover install catalog", limit: 5 });
  assert.ok(
    discoverySearch.results.some((skill) => skill.id === "find-skills"),
    "search should find the find-skills helper",
  );

  const architectureSearch = core.searchSkills({ query: "architecture refactor plan", limit: 5 });
  assert.ok(
    architectureSearch.results.some((skill) => skill.id === "architecture"),
    "search should find the published architecture helper",
  );

  const manifest = core.getSkill("omni-figma");
  assert.equal(manifest.id, "omni-figma", "manifest id should match");
  assert.ok(Array.isArray(manifest.artifacts) && manifest.artifacts.length > 0, "manifest should list artifacts");
  assert.equal(
    manifest.classification.maturity.skill_level,
    3,
    "manifest should expose generated maturity classification",
  );
  assert.ok(
    manifest.classification.quality.score > 0,
    "manifest should expose generated quality classification",
  );
  assert.ok(
    manifest.classification.best_practices.score >= 70,
    "manifest should expose a healthy best-practices score for a mature skill",
  );
  const strongManifest = core.getSkill("docker-expert");
  assert.ok(
    strongManifest.classification.best_practices.score >= 80,
    "the semantic scorer should still reward stronger operational skills above 80",
  );
  assert.ok(
    strongManifest.classification.quality.score >= 88,
    "the semantic quality scorer should still reward stronger operational skills near the top band",
  );
  assert.ok(
    manifest.classification.security.score > 0,
    "manifest should expose generated security classification",
  );
  assert.ok(
    Array.isArray(manifest.archives) && manifest.archives.length >= 2,
    "manifest should expose generated skill archives",
  );
  assert.ok(
    manifest.archive_checksums.path.endsWith(".checksums.txt"),
    "manifest should expose the archive checksum manifest",
  );

  const plan = core.buildInstallPlan({
    skill_ids: ["omni-figma"],
    tools: ["cursor"],
    dry_run: true,
  });
  assert.equal(plan.install_scope, "selected-skills", "install plan should reflect selective installs");
  assert.ok(
    plan.commands.includes("npx awesome-omni-skills --cursor --skill 'omni-figma'"),
    "install plan should include a selective cursor command",
  );

  const bundlePlan = core.buildInstallPlan({
    bundle_ids: ["full-stack"],
    tools: ["cursor"],
    dry_run: true,
  });
  assert.ok(
    bundlePlan.commands.includes("npx awesome-omni-skills --cursor --bundle 'full-stack'"),
    "bundle install plan should include a bundle-based cursor command",
  );
  assert.ok(
    bundlePlan.selected_skills.some((skill) => skill.id === "omni-figma"),
    "bundle install plan should resolve available skills from the bundle",
  );
  assert.ok(
    bundlePlan.warnings.every((warning) => !warning.includes("references unavailable skills")),
    "full-stack bundle should no longer warn about unavailable roadmap members",
  );

  const securityBundlePlan = core.buildInstallPlan({
    bundle_ids: ["security"],
    tools: ["cursor"],
    dry_run: true,
  });
  assert.ok(
    securityBundlePlan.warnings.every((warning) => !warning.includes("references unavailable skills")),
    "security bundle should now resolve without roadmap warnings",
  );

  const planWithUrls = core.buildInstallPlan(
    {
      skill_ids: ["omni-figma"],
      tools: ["cursor"],
      dry_run: true,
    },
    { baseUrl: "http://127.0.0.1:3333" },
  );
  assert.equal(
    planWithUrls.selected_skills[0].links.manifest,
    "http://127.0.0.1:3333/v1/skills/omni-figma/download/manifest",
    "install plan should expose manifest download URL when base URL is provided",
  );

  const artifacts = core.listSkillArtifacts("omni-figma", { baseUrl: "http://127.0.0.1:3333" });
  assert.ok(artifacts.some((artifact) => artifact.download_url), "artifacts should expose download URLs");
  const archives = core.listSkillArchives("omni-figma", { baseUrl: "http://127.0.0.1:3333" });
  assert.ok(
    archives.some((archive) => archive.download_url && archive.format === "zip"),
    "archives should expose download URLs",
  );

  const bundles = core.listBundles();
  const essentialsBundle = bundles.find((bundle) => bundle.id === "essentials");
  const fullStackBundle = bundles.find((bundle) => bundle.id === "full-stack");
  const securityBundle = bundles.find((bundle) => bundle.id === "security");
  const ossMaintainerBundle = bundles.find((bundle) => bundle.id === "oss-maintainer");
  assert.ok(essentialsBundle, "essentials bundle should exist");
  assert.ok(fullStackBundle, "full-stack bundle should exist");
  assert.ok(securityBundle, "security bundle should exist");
  assert.ok(ossMaintainerBundle, "oss-maintainer bundle should exist");
  for (const bundle of [essentialsBundle, fullStackBundle, securityBundle, ossMaintainerBundle]) {
    assert.equal(
      bundle.available_skill_ids.length,
      bundle.skill_ids.length,
      `${bundle.id} bundle should be fully backed by published skills`,
    );
    assert.equal(
      bundle.missing_skill_ids.length,
      0,
      `${bundle.id} bundle should not report missing published skills`,
    );
  }

  const cliHelp = childProcess.execFileSync(
    process.execPath,
    [path.resolve(__dirname, "../../bin/cli.js"), "help"],
    { encoding: "utf-8" },
  );
  assert.ok(
    cliHelp.includes("mcp <stdio|stream|sse>"),
    "repo CLI help should advertise the three MCP transport modes",
  );
  assert.ok(cliHelp.includes("find [query]"), "repo CLI help should advertise the find command");
  assert.ok(
    cliHelp.includes("recategorize"),
    "repo CLI help should advertise the recategorize command",
  );
  assert.ok(cliHelp.includes("api"), "repo CLI help should advertise the API command");
  assert.ok(cliHelp.includes("a2a"), "repo CLI help should advertise the A2A command");
  assert.ok(cliHelp.includes("smoke"), "repo CLI help should advertise the smoke command");
  assert.ok(
    cliHelp.includes("publish-check"),
    "repo CLI help should advertise the publish-check alias",
  );
  assert.ok(
    cliHelp.includes("install --guided"),
    "repo CLI help should advertise the guided install entrypoint",
  );
  assert.ok(
    cliHelp.includes("config-mcp"),
    "repo CLI help should advertise the MCP client configuration command",
  );
  assert.ok(
    cliHelp.includes("ui --text"),
    "repo CLI help should advertise the text fallback UI",
  );

  const cliConfigTargets = childProcess.execFileSync(
    process.execPath,
    [path.resolve(__dirname, "../../bin/cli.js"), "config-mcp", "--list-targets"],
    { encoding: "utf-8" },
  );
  assert.ok(
    cliConfigTargets.includes("continue-workspace"),
    "config-mcp target listing should expose the Continue target",
  );
  assert.ok(
    cliConfigTargets.includes("junie-project"),
    "config-mcp target listing should expose the Junie project target",
  );
  assert.ok(
    cliConfigTargets.includes("windsurf-user"),
    "config-mcp target listing should expose the Windsurf target",
  );
  assert.ok(
    cliConfigTargets.includes("goose-user"),
    "config-mcp target listing should expose the Goose target",
  );

  const cliConfigPreview = childProcess.execFileSync(
    process.execPath,
    [
      path.resolve(__dirname, "../../bin/cli.js"),
      "config-mcp",
      "--target",
      "continue-workspace",
      "--transport",
      "stream",
      "--url",
      "http://127.0.0.1:3334/mcp",
      "--no-prompt",
    ],
    { encoding: "utf-8" },
  );
  assert.ok(
    cliConfigPreview.includes("Preview Config"),
    "config-mcp should render a textual config preview by default",
  );
  assert.ok(
    cliConfigPreview.includes(".continue/mcpServers/omni-skills.yaml"),
    "config-mcp should show the resolved Continue config path",
  );
  assert.ok(
    cliConfigPreview.includes("streamable-http"),
    "config-mcp preview should render the Continue stream transport type",
  );

  const cliJuniePreview = childProcess.execFileSync(
    process.execPath,
    [
      path.resolve(__dirname, "../../bin/cli.js"),
      "config-mcp",
      "--target",
      "junie-project",
      "--transport",
      "stream",
      "--url",
      "http://127.0.0.1:3334/mcp",
      "--no-prompt",
    ],
    { encoding: "utf-8" },
  );
  assert.ok(
    cliJuniePreview.includes(".junie/mcp/mcp.json"),
    "config-mcp should show the resolved Junie config path",
  );
  assert.ok(
    cliJuniePreview.includes("\"mcpServers\""),
    "config-mcp preview should render a Junie-compatible mcpServers document",
  );

  const nonTtyUi = childProcess.spawnSync(
    process.execPath,
    [path.resolve(__dirname, "../../bin/cli.js"), "ui"],
    { encoding: "utf-8" },
  );
  assert.notEqual(nonTtyUi.status, 0, "visual UI should refuse to start without an interactive TTY");
  assert.ok(
    String(nonTtyUi.stderr || nonTtyUi.stdout).includes("requires an interactive TTY"),
    "visual UI should explain the non-TTY fallback requirement clearly",
  );

  const cliStatePath = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "omni-cli-state-")), "ui-state.json");
  const recentState = cliState.recordRecentInstall(cliState.defaultState(), {
    tool: "cursor",
    targetLabel: "Cursor",
    targetPath: "/tmp/cursor-skills",
    scope: "skill",
    skillId: "architecture",
    command: "npx awesome-omni-skills --cursor --skill architecture",
  });
  const presetState = cliState.saveServicePreset(recentState, "local-mcp", {
    service: "mcp",
    transport: "stream",
    mode: "local",
    host: "127.0.0.1",
    port: "3334",
    command: "npx awesome-omni-skills mcp stream --local",
  });
  cliState.saveCliState(presetState, cliStatePath);
  const reloadedState = cliState.loadCliState(cliStatePath);
  assert.equal(reloadedState.recentInstalls.length, 1, "CLI UI state should persist recent installs");
  assert.equal(reloadedState.servicePresets.length, 1, "CLI UI state should persist saved service presets");
  const toggledFavoriteState = cliState.toggleFavoriteBundle(reloadedState, "devops");
  assert.ok(
    toggledFavoriteState.favorites.bundles.includes("devops"),
    "CLI UI state should support favorite bundle toggles",
  );

  const cliFind = childProcess.execFileSync(
    process.execPath,
    [path.resolve(__dirname, "../../bin/cli.js"), "find", "figma"],
    { encoding: "utf-8" },
  );
  const cliFindJson = JSON.parse(
    childProcess.execFileSync(
      process.execPath,
      [path.resolve(__dirname, "../../bin/cli.js"), "find", "figma", "--json"],
      { encoding: "utf-8" },
    ),
  );
  assert.ok(cliFind.includes("omni-figma"), "repo CLI find should surface matching skills");
  assert.ok(
    Array.isArray(cliFindJson.results) &&
      cliFindJson.results.length >= 1 &&
      cliFindJson.results.every((skill) => {
        const haystack = [
          skill.id,
          skill.display_name,
          skill.description,
          ...(skill.tags || []),
          skill.category,
          skill.raw_category,
          skill.canonical_category,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes("figma");
      }),
    "repo CLI find should require a real text match instead of only matching on filters",
  );
  assert.ok(
    cliFind.includes("quality:"),
    "repo CLI find should surface classification details from generated metadata",
  );
  assert.ok(
    cliFind.includes("security:"),
    "repo CLI find should surface security details from generated metadata",
  );

  const cliFindRanked = childProcess.execFileSync(
    process.execPath,
    [
      path.resolve(__dirname, "../../bin/cli.js"),
      "find",
      "skill",
      "--sort",
      "quality",
      "--min-security",
      "90",
    ],
    { encoding: "utf-8" },
  );
  assert.ok(
    cliFindRanked.includes("sort=quality"),
    "repo CLI find should surface the active sort mode",
  );

  const cliFindInstallPreview = childProcess.execFileSync(
    process.execPath,
    [
      path.resolve(__dirname, "../../bin/cli.js"),
      "find",
      "discover",
      "--tool",
      "codex-cli",
      "--install",
    ],
    { encoding: "utf-8" },
  );
  assert.ok(
    cliFindInstallPreview.includes("Selected Install Command"),
    "repo CLI find should preview an install command when --install is used",
  );
  assert.ok(
    cliFindInstallPreview.includes("--codex --skill find-skills"),
    "repo CLI find should derive the tool-specific install command",
  );

  const recategorizeReport = childProcess.execFileSync(
    "python3",
    [path.resolve(__dirname, "../recategorize_skills.py"), "--only-changed"],
    { encoding: "utf-8" },
  );
  assert.ok(
    recategorizeReport.includes("Suggestions: 0"),
    "recategorize report should run successfully against the current taxonomy",
  );

  const apiPort = await getFreePort();
  const apiServer = childProcess.spawn(
    process.execPath,
    [path.resolve(__dirname, "../../../packages/server-api/src/server.js")],
    {
      cwd: path.resolve(__dirname, "../../.."),
      env: { ...process.env, PORT: String(apiPort) },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  const apiServerLogs = createProcessMonitor(apiServer, "catalog-api");
  try {
    await waitForProcessHealth({
      url: `http://127.0.0.1:${apiPort}/healthz`,
      processRef: apiServer,
      logs: apiServerLogs,
      label: "catalog API",
    });
    const apiArchives = await fetchJson(`http://127.0.0.1:${apiPort}/v1/skills/omni-figma/archives`);
    assert.ok(
      Array.isArray(apiArchives.archives) && apiArchives.archives.length >= 2,
      "API should expose skill archives",
    );
    const filteredApiSearch = await fetchJson(
      `http://127.0.0.1:${apiPort}/v1/search?sort=quality&min_security=90&min_level=2`,
    );
    assert.ok(
      filteredApiSearch.results.every((skill) => Number(skill.security_score || 0) >= 90),
      "API search should honor security filters",
    );
    const archiveDownload = await fetch(`http://127.0.0.1:${apiPort}/v1/skills/omni-figma/download/archive?format=zip`);
    assert.equal(archiveDownload.status, 200, "API should download skill zip archives");
    const checksumDownload = await fetch(
      `http://127.0.0.1:${apiPort}/v1/skills/omni-figma/download/archive/checksums`,
    );
    assert.equal(checksumDownload.status, 200, "API should download archive checksum manifests");
  } finally {
    apiServer.kill("SIGINT");
    await new Promise((resolve) => apiServer.once("exit", resolve));
  }

  const securedApiPort = await getFreePort();
  const securedApiServer = childProcess.spawn(
    process.execPath,
    [path.resolve(__dirname, "../../../packages/server-api/src/server.js")],
    {
      cwd: path.resolve(__dirname, "../../.."),
      env: {
        ...process.env,
        PORT: String(securedApiPort),
        OMNI_SKILLS_HTTP_BEARER_TOKEN: "test-token",
        OMNI_SKILLS_RATE_LIMIT_MAX: "1",
        OMNI_SKILLS_RATE_LIMIT_WINDOW_MS: "60000",
      },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  const securedApiServerLogs = createProcessMonitor(securedApiServer, "secured-api");
  try {
    const securedHealth = await waitForProcessHealth({
      url: `http://127.0.0.1:${securedApiPort}/healthz`,
      processRef: securedApiServer,
      logs: securedApiServerLogs,
      label: "secured API",
    });
    assert.equal(securedHealth.http.auth.enabled, true, "healthz should expose API auth status");

    const unauthorizedSkills = await fetch(`http://127.0.0.1:${securedApiPort}/v1/skills`);
    assert.equal(unauthorizedSkills.status, 401, "API should reject unauthorized requests when auth is enabled");

    const authorizedOnce = await fetch(`http://127.0.0.1:${securedApiPort}/v1/skills`, {
      headers: { Authorization: "Bearer test-token" },
    });
    assert.equal(authorizedOnce.status, 200, "API should allow authorized requests with bearer token");

    const authorizedTwice = await fetch(`http://127.0.0.1:${securedApiPort}/v1/skills`, {
      headers: { Authorization: "Bearer test-token" },
    });
    assert.equal(authorizedTwice.status, 429, "API should enforce the configured rate limit");
  } finally {
    securedApiServer.kill("SIGINT");
    await new Promise((resolve) => securedApiServer.once("exit", resolve));
  }

  const governedApiPort = await getFreePort();
  const governedApiDir = fs.mkdtempSync(path.join(os.tmpdir(), "omni-skills-api-governed-"));
  const governedAuditLog = path.join(governedApiDir, "audit.log");
  const governedApiServer = childProcess.spawn(
    process.execPath,
    [path.resolve(__dirname, "../../../packages/server-api/src/server.js")],
    {
      cwd: path.resolve(__dirname, "../../.."),
      env: {
        ...process.env,
        PORT: String(governedApiPort),
        OMNI_SKILLS_HTTP_ADMIN_TOKEN: "admin-token",
        OMNI_SKILLS_HTTP_ALLOWED_IPS: "127.0.0.1/32",
        OMNI_SKILLS_HTTP_ALLOWED_ORIGINS: "http://example.test",
        OMNI_SKILLS_HTTP_AUDIT_LOG: "1",
        OMNI_SKILLS_HTTP_AUDIT_LOG_PATH: governedAuditLog,
        OMNI_SKILLS_HTTP_MAINTENANCE_MODE: "1",
      },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  const governedApiServerLogs = createProcessMonitor(governedApiServer, "governed-api");
  try {
    const governedHealth = await waitForProcessHealth({
      url: `http://127.0.0.1:${governedApiPort}/healthz`,
      processRef: governedApiServer,
      logs: governedApiServerLogs,
      label: "governed API",
    });
    assert.equal(governedHealth.http.admin.enabled, true, "healthz should expose admin auth when configured");
    assert.equal(
      governedHealth.http.ip_allowlist.enabled,
      true,
      "healthz should expose IP allowlist status when configured",
    );
    assert.equal(
      governedHealth.http.maintenance.enabled,
      true,
      "healthz should expose maintenance mode when configured",
    );

    const maintenanceSkills = await fetch(`http://127.0.0.1:${governedApiPort}/v1/skills`);
    assert.equal(maintenanceSkills.status, 503, "maintenance mode should block public catalog routes");

    const unauthorizedAdmin = await fetch(`http://127.0.0.1:${governedApiPort}/admin/runtime`);
    assert.equal(unauthorizedAdmin.status, 401, "admin runtime route should require the admin token");

    const authorizedAdmin = await fetch(`http://127.0.0.1:${governedApiPort}/admin/runtime`, {
      headers: {
        "x-admin-token": "admin-token",
        "x-request-id": "governed-admin-request",
        Origin: "http://example.test",
      },
    });
    assert.equal(authorizedAdmin.status, 200, "admin runtime route should accept the admin token");
    assert.equal(
      authorizedAdmin.headers.get("x-request-id"),
      "governed-admin-request",
      "admin runtime route should preserve the provided request id",
    );
    assert.equal(
      authorizedAdmin.headers.get("access-control-allow-origin"),
      "http://example.test",
      "governed API should allow configured CORS origins",
    );
    const authorizedAdminPayload = await authorizedAdmin.json();
    assert.equal(
      authorizedAdminPayload.request_id,
      "governed-admin-request",
      "admin runtime payload should include the active request id",
    );
    assert.equal(
      authorizedAdminPayload.http.cors.allowed_origins[0],
      "http://example.test",
      "admin runtime payload should expose detailed governance settings",
    );

    await waitFor(() => {
      const contents = fs.readFileSync(governedAuditLog, "utf-8");
      if (!contents.includes("governed-admin-request")) {
        throw new Error("waiting for audit log flush");
      }
      return contents;
    });
  } finally {
    governedApiServer.kill("SIGINT");
    await new Promise((resolve) => governedApiServer.once("exit", resolve));
    fs.rmSync(governedApiDir, { recursive: true, force: true });
  }

  const securedMcpPort = await getFreePort();
  const securedMcpServer = childProcess.spawn(
    process.execPath,
    [path.resolve(__dirname, "../../../packages/server-mcp/src/server.js"), "--transport", "stream"],
    {
      cwd: path.resolve(__dirname, "../../.."),
      env: {
        ...process.env,
        PORT: String(securedMcpPort),
        OMNI_SKILLS_HTTP_BEARER_TOKEN: "mcp-token",
      },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  const securedMcpServerLogs = createProcessMonitor(securedMcpServer, "secured-mcp");
  try {
    const mcpHealth = await waitForProcessHealth({
      url: `http://127.0.0.1:${securedMcpPort}/healthz`,
      processRef: securedMcpServer,
      logs: securedMcpServerLogs,
      label: "secured MCP",
    });
    assert.equal(mcpHealth.http.auth.enabled, true, "MCP healthz should expose HTTP auth status");

    const unauthorizedMcp = await fetch(`http://127.0.0.1:${securedMcpPort}/mcp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "ping" }),
    });
    assert.equal(unauthorizedMcp.status, 401, "MCP stream endpoint should reject unauthorized requests");

    const authorizedMcp = await fetch(`http://127.0.0.1:${securedMcpPort}/mcp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer mcp-token",
      },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "ping" }),
    });
    assert.notEqual(authorizedMcp.status, 401, "MCP stream endpoint should accept authenticated requests");
  } finally {
    securedMcpServer.kill("SIGINT");
    await new Promise((resolve) => securedMcpServer.once("exit", resolve));
  }

  const governedMcpPort = await getFreePort();
  const governedMcpServer = childProcess.spawn(
    process.execPath,
    [path.resolve(__dirname, "../../../packages/server-mcp/src/server.js"), "--transport", "stream"],
    {
      cwd: path.resolve(__dirname, "../../.."),
      env: {
        ...process.env,
        PORT: String(governedMcpPort),
        OMNI_SKILLS_HTTP_ADMIN_TOKEN: "mcp-admin-token",
        OMNI_SKILLS_HTTP_ALLOWED_IPS: "127.0.0.1/32",
      },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  const governedMcpServerLogs = createProcessMonitor(governedMcpServer, "governed-mcp");
  try {
    await waitForProcessHealth({
      url: `http://127.0.0.1:${governedMcpPort}/healthz`,
      processRef: governedMcpServer,
      logs: governedMcpServerLogs,
      label: "governed MCP",
    });

    const unauthorizedRuntime = await fetch(`http://127.0.0.1:${governedMcpPort}/admin/runtime`);
    assert.equal(unauthorizedRuntime.status, 401, "MCP admin runtime route should require admin auth");

    const authorizedRuntime = await fetch(`http://127.0.0.1:${governedMcpPort}/admin/runtime`, {
      headers: {
        "x-admin-token": "mcp-admin-token",
      },
    });
    assert.equal(authorizedRuntime.status, 200, "MCP admin runtime route should accept admin auth");
    const authorizedRuntimePayload = await authorizedRuntime.json();
    assert.equal(
      authorizedRuntimePayload.mcp.transport,
      "stream",
      "MCP admin runtime route should expose the active transport",
    );
    assert.equal(
      authorizedRuntimePayload.http.ip_allowlist.enabled,
      true,
      "MCP admin runtime route should expose hosted governance settings",
    );
  } finally {
    governedMcpServer.kill("SIGINT");
    await new Promise((resolve) => governedMcpServer.once("exit", resolve));
  }

  const a2aPort = await getFreePort();
  const a2aPersistenceDir = fs.mkdtempSync(path.join(os.tmpdir(), "omni-skills-a2a-"));
  const a2aStorePath = path.join(a2aPersistenceDir, "tasks.json");
  const a2aEnv = {
    ...process.env,
    PORT: String(a2aPort),
    OMNI_SKILLS_A2A_PROCESSING_DELAY_MS: "250",
    OMNI_SKILLS_A2A_STORE_PATH: a2aStorePath,
  };
  let a2aServer = childProcess.spawn(
    process.execPath,
    [path.resolve(__dirname, "../../../packages/server-a2a/src/server.js")],
    {
      cwd: path.resolve(__dirname, "../../.."),
      env: a2aEnv,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  let a2aServerLogs = createProcessMonitor(a2aServer, "a2a-primary");
  try {
    const a2aHealth = await waitForProcessHealth({
      url: `http://127.0.0.1:${a2aPort}/healthz`,
      processRef: a2aServer,
      logs: a2aServerLogs,
      label: "A2A primary server",
    });
    assert.equal(a2aHealth.protocol, "a2a", "A2A healthz should expose the protocol name");
    assert.equal(a2aHealth.persistence.enabled, true, "A2A healthz should expose persistence status");

    const agentCard = await fetchJson(`http://127.0.0.1:${a2aPort}/.well-known/agent.json`);
    assert.equal(agentCard.capabilities.streaming, true, "A2A agent card should advertise streaming");
    assert.equal(
      agentCard.capabilities.pushNotifications,
      true,
      "A2A agent card should advertise push notifications",
    );

    const discoverTask = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
      jsonrpc: "2.0",
      id: "discover-1",
      method: "message/send",
      params: {
        message: {
          role: "user",
          parts: [{ kind: "text", text: "find figma skills for cursor" }],
          messageId: "discover-msg-1",
          kind: "message",
        },
        metadata: {
          operation: "discover-skills",
          tool: "cursor",
        },
      },
    });
    assert.equal(discoverTask.response.status, 200, "A2A message/send should accept discover requests");
    assert.equal(discoverTask.payload.result.kind, "task", "A2A should return task objects for lifecycle-aware calls");

    const completedDiscoverTask = await waitFor(async () => {
      const taskState = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
        jsonrpc: "2.0",
        id: "discover-get-1",
        method: "tasks/get",
        params: {
          id: discoverTask.payload.result.id,
          historyLength: 4,
        },
      });
      if (taskState.payload.result.status.state !== "completed") {
        throw new Error("discover task not completed yet");
      }
      return taskState.payload.result;
    }, 15000, 100);
    const discoverDataArtifacts = (completedDiscoverTask.artifacts || []).flatMap((artifact) =>
      (artifact.parts || []).filter((part) => part.kind === "data" && Array.isArray(part.data?.results)),
    );
    assert.ok(
      discoverDataArtifacts.some((part) =>
        part.data.results.some((skill) => {
          const haystack = [
            skill.id,
            skill.display_name,
            skill.description,
            ...(skill.tags || []),
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes("figma") && (skill.tools || []).includes("cursor");
        }),
      ),
      "completed discover task should include a real figma match for the requested tool in the data artifact",
    );
    assert.ok(
      Array.isArray(completedDiscoverTask.history) && completedDiscoverTask.history.length > 0,
      "tasks/get should return history when historyLength is requested",
    );

    const inputRequiredPlan = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
      jsonrpc: "2.0",
      id: "plan-1",
      method: "message/send",
      params: {
        message: {
          role: "user",
          parts: [{ kind: "text", text: "prepare an install plan for omni-figma" }],
          messageId: "plan-msg-1",
          kind: "message",
        },
        metadata: {
          operation: "prepare-install-plan",
          skill_ids: ["omni-figma"],
        },
        configuration: {
          blocking: true,
        },
      },
    });
    assert.equal(
      inputRequiredPlan.payload.result.status.state,
      "input-required",
      "prepare-install-plan should request the target client when it is missing",
    );

    const completedPlan = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
      jsonrpc: "2.0",
      id: "plan-2",
      method: "message/send",
      params: {
        message: {
          role: "user",
          parts: [{ kind: "text", text: "cursor" }],
          messageId: "plan-msg-2",
          taskId: inputRequiredPlan.payload.result.id,
          contextId: inputRequiredPlan.payload.result.contextId,
          kind: "message",
        },
        configuration: {
          blocking: true,
        },
      },
    });
    assert.equal(
      completedPlan.payload.result.status.state,
      "completed",
      "follow-up message/send should continue an input-required task to completion",
    );
    assert.ok(
      completedPlan.payload.result.artifacts[0].parts.some(
        (part) =>
          part.kind === "data" &&
          part.data.commands.includes("npx awesome-omni-skills --cursor --skill 'omni-figma'"),
      ),
      "completed install-plan task should include the resolved cursor install command",
    );

    const canceledTask = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
      jsonrpc: "2.0",
      id: "cancel-1",
      method: "message/send",
      params: {
        message: {
          role: "user",
          parts: [{ kind: "text", text: "recommend a stack for backend APIs" }],
          messageId: "cancel-msg-1",
          kind: "message",
        },
        metadata: {
          operation: "recommend-stack",
          tool: "codex-cli",
        },
      },
    });
    const canceledResponse = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
      jsonrpc: "2.0",
      id: "cancel-2",
      method: "tasks/cancel",
      params: {
        id: canceledTask.payload.result.id,
      },
    });
    assert.equal(canceledResponse.payload.result.status.state, "canceled", "tasks/cancel should cancel active tasks");

    const streamResponse = await fetch(`http://127.0.0.1:${a2aPort}/a2a`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "stream-1",
        method: "message/stream",
        params: {
          message: {
            role: "user",
            parts: [{ kind: "text", text: "recommend a stack for frontend design in cursor" }],
            messageId: "stream-msg-1",
            kind: "message",
          },
          metadata: {
            operation: "recommend-stack",
            tool: "cursor",
          },
        },
      }),
    });
    assert.equal(streamResponse.status, 200, "message/stream should return an SSE response");
    assert.match(
      streamResponse.headers.get("content-type") || "",
      /text\/event-stream/,
      "message/stream should use text/event-stream",
    );
    const streamText = await streamResponse.text();
    assert.ok(streamText.includes('"kind":"status-update"'), "streaming response should emit status updates");
    assert.ok(streamText.includes('"kind":"artifact-update"'), "streaming response should emit artifact updates");
    assert.ok(streamText.includes('"final":true'), "streaming response should terminate with a final status update");

    const notifications = [];
    const webhookPort = await getFreePort();
    const webhookServer = http.createServer((req, res) => {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        notifications.push({
          headers: req.headers,
          body: JSON.parse(body || "{}"),
        });
        res.writeHead(204);
        res.end();
      });
    });
    await new Promise((resolve) => webhookServer.listen(webhookPort, "127.0.0.1", resolve));
    try {
      const pushTask = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
        jsonrpc: "2.0",
        id: "push-1",
        method: "message/send",
        params: {
          message: {
            role: "user",
            parts: [{ kind: "text", text: "find documentation skills" }],
            messageId: "push-msg-1",
            kind: "message",
          },
          metadata: {
            operation: "discover-skills",
          },
          configuration: {
            pushNotificationConfig: {
              url: `http://127.0.0.1:${webhookPort}/notify`,
              token: "push-token",
            },
          },
        },
      });

      const listedConfigs = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
        jsonrpc: "2.0",
        id: "push-2",
        method: "tasks/pushNotificationConfig/list",
        params: {
          id: pushTask.payload.result.id,
        },
      });
      assert.equal(listedConfigs.payload.result.length, 1, "push config list should return the registered webhook");

      const fetchedConfig = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
        jsonrpc: "2.0",
        id: "push-3",
        method: "tasks/pushNotificationConfig/get",
        params: {
          id: pushTask.payload.result.id,
        },
      });
      assert.equal(
        fetchedConfig.payload.result.url,
        `http://127.0.0.1:${webhookPort}/notify`,
        "push config get should return the configured webhook URL",
      );

      const receivedNotification = await waitFor(() => {
        if (notifications.length === 0) {
          throw new Error("waiting for push notification");
        }
        return notifications[0];
      }, 15000, 100);
      assert.equal(
        receivedNotification.headers["x-a2a-notification-token"],
        "push-token",
        "push notification should carry the opaque token header",
      );
      assert.equal(receivedNotification.body.kind, "task", "push notification should post the task payload");

      const deleteConfig = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
        jsonrpc: "2.0",
        id: "push-4",
        method: "tasks/pushNotificationConfig/delete",
        params: {
          id: pushTask.payload.result.id,
        },
      });
      assert.equal(
        deleteConfig.payload.result.deleted,
        true,
        "push config delete should remove the registered webhook",
      );
    } finally {
      await new Promise((resolve) => webhookServer.close(resolve));
    }

    assert.ok(fs.existsSync(a2aStorePath), "A2A runtime should persist task state to disk");

    const interruptedTask = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
      jsonrpc: "2.0",
      id: "persist-1",
      method: "message/send",
      params: {
        message: {
          role: "user",
          parts: [{ kind: "text", text: "recommend a stack for security review workflows" }],
          messageId: "persist-msg-1",
          kind: "message",
        },
        metadata: {
          operation: "recommend-stack",
          tool: "codex-cli",
        },
      },
    });

    a2aServer.kill("SIGINT");
    await new Promise((resolve) => a2aServer.once("exit", resolve));

    a2aServer = childProcess.spawn(
      process.execPath,
      [path.resolve(__dirname, "../../../packages/server-a2a/src/server.js")],
      {
        cwd: path.resolve(__dirname, "../../.."),
        env: a2aEnv,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    a2aServerLogs = createProcessMonitor(a2aServer, "a2a-restarted");

    const restartedHealth = await waitForProcessHealth({
      url: `http://127.0.0.1:${a2aPort}/healthz`,
      processRef: a2aServer,
      logs: a2aServerLogs,
      label: "A2A restarted server",
    });
    assert.ok(
      restartedHealth.persistence.loaded_tasks >= 1,
      "A2A restart should reload persisted tasks from disk",
    );

    const recoveredCompleted = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
      jsonrpc: "2.0",
      id: "persist-2",
      method: "tasks/get",
      params: {
        id: completedDiscoverTask.id,
      },
    });
    assert.equal(
      recoveredCompleted.payload.result.status.state,
      "completed",
      "completed tasks should remain available after restart",
    );

    const recoveredInterrupted = await waitFor(async () => {
      const response = await postJson(`http://127.0.0.1:${a2aPort}/a2a`, {
        jsonrpc: "2.0",
        id: "persist-3",
        method: "tasks/get",
        params: {
          id: interruptedTask.payload.result.id,
          historyLength: 10,
        },
      });
      if (response.payload.result.status.state !== "completed") {
        throw new Error("task has not resumed to completion yet");
      }
      return response;
    });
    assert.equal(
      recoveredInterrupted.payload.result.status.state,
      "completed",
      "in-flight tasks should resume to completion after runtime restart",
    );
    assert.equal(
      recoveredInterrupted.payload.result.metadata.recovered_from_persistence,
      true,
      "recovered tasks should indicate persistence recovery metadata",
    );
    assert.ok(
      recoveredInterrupted.payload.result.history.some((message) =>
        JSON.stringify(message).includes("Recovered after a runtime restart"),
      ),
      "recovered tasks should explain the restart recovery in history",
    );
  } finally {
    a2aServer.kill("SIGINT");
    await new Promise((resolve) => a2aServer.once("exit", resolve));
    fs.rmSync(a2aPersistenceDir, { recursive: true, force: true });
  }

  const distributedA2aDir = fs.mkdtempSync(path.join(os.tmpdir(), "omni-skills-a2a-queue-"));
  const delayedWorkerPath = path.join(distributedA2aDir, "delayed-worker.mjs");
  fs.writeFileSync(
    delayedWorkerPath,
    `import { stdin, stdout, stderr } from "node:process";
import { setTimeout as delay } from "node:timers/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

async function readStdin() {
  let buffer = "";
  for await (const chunk of stdin) {
    buffer += chunk.toString();
  }
  return buffer;
}

const operationsPath = path.resolve(process.cwd(), "packages/server-a2a/src/task-operations.js");
const { evaluateTaskOperation } = await import(pathToFileURL(operationsPath).href);

async function main() {
  const raw = await readStdin();
  const payload = JSON.parse(raw || "{}");
  await delay(1200);
  const result = evaluateTaskOperation(payload.operation, payload.input || {});
  stdout.write(\`\${JSON.stringify(result)}\\n\`);
}

main().catch((error) => {
  stderr.write(\`\${error instanceof Error ? error.stack || error.message : String(error)}\\n\`);
  process.exitCode = 1;
});
`,
    "utf-8",
  );

  const distributedStorePath = path.join(distributedA2aDir, "tasks.sqlite");
  const distributedPortA = await getFreePort();
  const distributedPortB = await getFreePort();
  const distributedBaseEnv = {
    ...process.env,
    OMNI_SKILLS_A2A_STORE_TYPE: "sqlite",
    OMNI_SKILLS_A2A_STORE_PATH: distributedStorePath,
    OMNI_SKILLS_A2A_QUEUE_ENABLED: "1",
    OMNI_SKILLS_A2A_EXECUTOR: "process",
    OMNI_SKILLS_A2A_WORKER_COMMAND: process.execPath,
    OMNI_SKILLS_A2A_WORKER_ARGS: JSON.stringify([delayedWorkerPath]),
    OMNI_SKILLS_A2A_WORKER_POLL_MS: "100",
    OMNI_SKILLS_A2A_LEASE_MS: "600",
  };
  const distributedEnvA = {
    ...distributedBaseEnv,
    PORT: String(distributedPortA),
    OMNI_SKILLS_A2A_INSTANCE_ID: "worker-a",
  };
  const distributedEnvB = {
    ...distributedBaseEnv,
    PORT: String(distributedPortB),
    OMNI_SKILLS_A2A_INSTANCE_ID: "worker-b",
  };

  let distributedA = childProcess.spawn(
    process.execPath,
    [path.resolve(__dirname, "../../../packages/server-a2a/src/server.js")],
    {
      cwd: path.resolve(__dirname, "../../.."),
      env: distributedEnvA,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  const distributedALogs = createProcessMonitor(distributedA, "distributed-a2a-a");
  let distributedB = childProcess.spawn(
    process.execPath,
    [path.resolve(__dirname, "../../../packages/server-a2a/src/server.js")],
    {
      cwd: path.resolve(__dirname, "../../.."),
      env: distributedEnvB,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  const distributedBLogs = createProcessMonitor(distributedB, "distributed-a2a-b");
  try {
    const healthA = await waitForProcessHealth({
      url: `http://127.0.0.1:${distributedPortA}/healthz`,
      processRef: distributedA,
      logs: distributedALogs,
      label: "distributed A2A worker A",
      timeoutMs: 30000,
    });
    const healthB = await waitForProcessHealth({
      url: `http://127.0.0.1:${distributedPortB}/healthz`,
      processRef: distributedB,
      logs: distributedBLogs,
      label: "distributed A2A worker B",
      timeoutMs: 30000,
    });
    assert.equal(healthA.queue.enabled, true, "distributed A2A worker A should run with queue mode enabled");
    assert.equal(healthB.queue.enabled, true, "distributed A2A worker B should run with queue mode enabled");
    assert.equal(healthA.persistence.kind, "sqlite", "distributed A2A worker A should use sqlite persistence");
    assert.equal(healthB.persistence.kind, "sqlite", "distributed A2A worker B should use sqlite persistence");

    const queuedTask = await postJson(`http://127.0.0.1:${distributedPortA}/a2a`, {
      jsonrpc: "2.0",
      id: "lease-1",
      method: "message/send",
      params: {
        message: {
          role: "user",
          parts: [{ kind: "text", text: "find figma skills for cursor" }],
          messageId: "lease-msg-1",
          kind: "message",
        },
        metadata: {
          operation: "discover-skills",
          tool: "cursor",
        },
      },
    });

    const inFlightTask = await waitFor(async () => {
      const response = await postJson(`http://127.0.0.1:${distributedPortA}/a2a`, {
        jsonrpc: "2.0",
        id: "lease-2",
        method: "tasks/get",
        params: {
          id: queuedTask.payload.result.id,
        },
      });
      const task = response.payload.result;
      const leaseOwner = task.metadata?.lease?.owner;
      if (task.status.state !== "working" || !["worker-a", "worker-b"].includes(leaseOwner)) {
        throw new Error("task has not been claimed by a lease worker yet");
      }
      return task;
    }, 15000, 100);
    assert.equal(inFlightTask.status.state, "working", "a lease worker should claim the submitted task");

    const claimedByWorkerA = inFlightTask.metadata?.lease?.owner === "worker-a";
    const failedWorker = claimedByWorkerA ? distributedA : distributedB;
    const survivingPort = claimedByWorkerA ? distributedPortB : distributedPortA;
    failedWorker.kill("SIGKILL");
    await new Promise((resolve) => failedWorker.once("exit", resolve));

    const recoveredLeaseTask = await waitFor(async () => {
      const response = await postJson(`http://127.0.0.1:${survivingPort}/a2a`, {
        jsonrpc: "2.0",
        id: "lease-3",
        method: "tasks/get",
        params: {
          id: queuedTask.payload.result.id,
          historyLength: 10,
        },
      });
      const task = response.payload.result;
      if (task.status.state !== "completed") {
        throw new Error("waiting for worker-b to recover the expired lease");
      }
      return task;
    }, 20000, 100);

    assert.equal(
      recoveredLeaseTask.metadata.recovered_from_persistence,
      true,
      "distributed recovery should mark the resumed task as persistence-backed",
    );
    assert.equal(
      recoveredLeaseTask.metadata.recovery,
      "lease-timeout-resume",
      "distributed recovery should record lease-timeout resume metadata",
    );
    assert.ok(
      recoveredLeaseTask.history.some((message) =>
        JSON.stringify(message).includes("previous lease expired"),
      ),
      "distributed recovery should explain the lease-expiry handoff in task history",
    );
  } finally {
    if (distributedA.exitCode === null && distributedA.signalCode === null) {
      distributedA.kill("SIGINT");
      await new Promise((resolve) => distributedA.once("exit", resolve));
    }
    if (distributedB.exitCode === null && distributedB.signalCode === null) {
      distributedB.kill("SIGINT");
      await new Promise((resolve) => distributedB.once("exit", resolve));
    }
    fs.rmSync(distributedA2aDir, { recursive: true, force: true });
  }

  {
    const simpleRuntime = new OmniSkillsA2ARuntime({
      storeType: "sqlite",
      persistenceEnabled: false,
      processingDelayMs: 1,
    });
    const simpleHealth = simpleRuntime.getHealthSnapshot();
    assert.equal(
      simpleHealth.queue.enabled,
      false,
      "A2A should keep shared queue polling disabled unless it is explicitly enabled",
    );
  }

  {
    const sharedRedis = new RedisMock();
    const taskRecord = {
      id: "redis-task-1",
      status: { state: "submitted" },
      metadata: {
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        available_at: new Date().toISOString(),
      },
    };
    const fakeStore = {
      getTask(id) {
        return id === taskRecord.id ? JSON.parse(JSON.stringify(taskRecord)) : null;
      },
    };
    const coordinatorA = new RedisTaskCoordinator({
      taskStore: fakeStore,
      redisClient: sharedRedis,
      keyPrefix: `omni-skills:test:${Date.now()}`,
    });
    const coordinatorB = new RedisTaskCoordinator({
      taskStore: fakeStore,
      redisClient: sharedRedis,
      keyPrefix: coordinatorA.keyPrefix,
    });
    try {
      await coordinatorA.syncTask(taskRecord);
      const claimedByA = await coordinatorA.claimPendingTask({
        owner: "worker-a",
        leaseMs: 2000,
        eligibleStates: ["submitted"],
      });
      assert.equal(claimedByA.id, taskRecord.id, "redis coordination should allow the first worker to claim a task");

      const claimedByBWhileLocked = await coordinatorB.claimPendingTask({
        owner: "worker-b",
        leaseMs: 2000,
        eligibleStates: ["submitted"],
      });
      assert.equal(
        claimedByBWhileLocked,
        null,
        "redis coordination should not allow a second worker to claim an active lease",
      );

      assert.equal(
        await coordinatorA.renewTaskLease(taskRecord.id, "worker-a", 2000),
        true,
        "redis coordination should renew the active lease for the owner",
      );
      assert.equal(
        await coordinatorB.clearTaskLease(taskRecord.id, "worker-b"),
        false,
        "redis coordination should reject lease release from a different worker",
      );
      assert.equal(
        await coordinatorA.clearTaskLease(taskRecord.id, "worker-a"),
        true,
        "redis coordination should allow the owner to release the lease",
      );

      const claimedByBAfterRelease = await coordinatorB.claimPendingTask({
        owner: "worker-b",
        leaseMs: 2000,
        eligibleStates: ["submitted"],
      });
      assert.equal(
        claimedByBAfterRelease.id,
        taskRecord.id,
        "redis coordination should hand the task to another worker after release",
      );
    } finally {
      await coordinatorA.close();
      await coordinatorB.close();
    }
  }

  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "omni-skills-sidecar-"));
  try {
    const fakeHome = path.join(tempRoot, "home");
    const fakeCwd = path.join(tempRoot, "workspace");
    const fakeCodexHome = path.join(fakeHome, ".codex");
    const localOptions = {
      homeDir: fakeHome,
      cwd: fakeCwd,
      codexHome: fakeCodexHome,
    };

    fs.mkdirSync(fakeHome, { recursive: true });
    fs.mkdirSync(fakeCwd, { recursive: true });

    const detection = localSidecar.detectClients(localOptions);
    assert.ok(
      detection.clients.some(
        (client) =>
          client.id === "opencode" &&
          client.skills_path === path.join(fakeCwd, ".opencode", "skills"),
      ),
      "local sidecar should detect the OpenCode workspace target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "gemini-user"),
      "local sidecar should expose Gemini settings targets",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "antigravity-user"),
      "local sidecar should expose the Antigravity MCP config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "kiro-user"),
      "local sidecar should expose Kiro settings targets",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "opencode-workspace"),
      "local sidecar should expose the OpenCode workspace config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "opencode-user"),
      "local sidecar should expose the OpenCode user config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "cline-user"),
      "local sidecar should expose the Cline user config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "kilo-user"),
      "local sidecar should expose the Kilo CLI user config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "kilo-workspace"),
      "local sidecar should expose the Kilo workspace config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "copilot-user"),
      "local sidecar should expose the GitHub Copilot user config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "copilot-repo"),
      "local sidecar should expose the GitHub Copilot repository config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "zed-workspace"),
      "local sidecar should expose the Zed workspace config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "continue-workspace"),
      "local sidecar should expose the Continue workspace config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "junie-project"),
      "local sidecar should expose the Junie project config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "windsurf-user"),
      "local sidecar should expose the Windsurf user config target",
    );
    assert.ok(
      detection.config_targets.some((target) => target.id === "goose-user"),
      "local sidecar should expose the Goose user config target",
    );

    const installPreview = localSidecar.installSkills(
      {
        skill_ids: ["omni-figma"],
        client: "opencode",
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(installPreview.applied, false, "dry-run install should not write files");
    assert.ok(
      installPreview.operations.some((operation) =>
        operation.destination.endsWith(path.join("omni-figma", "SKILL.md")),
      ),
      "dry-run install should preview the skill entrypoint copy",
    );

    const installApplied = localSidecar.installSkills(
      {
        skill_ids: ["omni-figma"],
        client: "opencode",
        dry_run: false,
      },
      localOptions,
    );
    assert.equal(installApplied.applied, true, "live install should report applied");
    assert.ok(
      fs.existsSync(path.join(fakeCwd, ".opencode", "skills", "omni-figma", "SKILL.md")),
      "live install should copy the skill into the OpenCode skills directory",
    );

    const installedSkills = localSidecar.listInstalledSkills({ client: "opencode" }, localOptions);
    assert.ok(
      installedSkills.installed_skill_ids.includes("omni-figma"),
      "installed skills should list the copied skill",
    );

    const configPreview = localSidecar.configureClientMcp(
      {
        config_target: "workspace",
        transport: "http",
        url: "http://127.0.0.1:4444/mcp",
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      configPreview.config_path,
      path.join(fakeCwd, ".mcp.json"),
      "workspace config preview should target .mcp.json",
    );
    assert.equal(configPreview.config_profile, "claude-json", "workspace config should use the Claude-style profile");
    assert.equal(
      configPreview.next_config.mcpServers["omni-skills"].url,
      "http://127.0.0.1:4444/mcp",
      "config preview should include the requested MCP URL",
    );
    assert.equal(
      configPreview.next_config.mcpServers["omni-skills"].type,
      "http",
      "workspace config should include the typed transport for Claude-style configs",
    );

    const vscodeConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "vscode",
        transport: "stdio",
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      vscodeConfigPreview.config_path,
      path.join(fakeCwd, ".vscode", "mcp.json"),
      "VS Code config preview should target .vscode/mcp.json",
    );
    assert.equal(
      vscodeConfigPreview.config_root_key,
      "servers",
      "VS Code config should use the servers root key",
    );
    assert.equal(
      vscodeConfigPreview.next_config.servers["omni-skills"].type,
      "stdio",
      "VS Code config should keep an explicit type field",
    );
    assert.equal(
      vscodeConfigPreview.next_config.servers["omni-skills"].command,
      process.execPath,
      "VS Code stdio config should launch the local Node runtime",
    );

    const geminiConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "gemini-user",
        transport: "http",
        url: "http://127.0.0.1:4444/mcp",
        headers: {
          Authorization: "Bearer gemini-token",
        },
        mcp_allowed_servers: ["omni-skills"],
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      geminiConfigPreview.config_path,
      path.join(fakeHome, ".gemini", "settings.json"),
      "Gemini config preview should target settings.json",
    );
    assert.equal(
      geminiConfigPreview.config_profile,
      "gemini-settings-json",
      "Gemini config preview should use the settings profile",
    );
    assert.equal(
      geminiConfigPreview.next_config.mcpServers["omni-skills"].headers.Authorization,
      "Bearer gemini-token",
      "Gemini config preview should include configured remote headers",
    );
    assert.deepEqual(
      geminiConfigPreview.next_config.mcp.allowed,
      ["omni-skills"],
      "Gemini config preview should include global MCP allow rules",
    );
    assert.ok(
      geminiConfigPreview.recipes.some((recipe) => recipe.client === "gemini-cli"),
      "Gemini config preview should include a client recipe",
    );

    const kiroConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "kiro-user",
        transport: "stdio",
        disabled_tools: ["shell", "filesystem"],
        auto_approve: ["search"],
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      kiroConfigPreview.config_path,
      path.join(fakeHome, ".kiro", "settings", "mcp.json"),
      "Kiro config preview should target settings/mcp.json",
    );
    assert.equal(
      kiroConfigPreview.config_profile,
      "kiro-json",
      "Kiro config preview should use the Kiro profile",
    );
    assert.deepEqual(
      kiroConfigPreview.next_config.mcpServers["omni-skills"].disabledTools,
      ["shell", "filesystem"],
      "Kiro config preview should include disabled tool rules",
    );
    assert.deepEqual(
      kiroConfigPreview.next_config.mcpServers["omni-skills"].autoApprove,
      ["search"],
      "Kiro config preview should include auto-approve rules",
    );

    const claudeSettingsPreview = localSidecar.configureClientMcp(
      {
        config_target: "claude-user-settings",
        transport: "sse",
        url: "http://127.0.0.1:4444/sse",
        enable_all_project_mcp_servers: true,
        permissions_deny: ["Bash(rm:*)"],
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      claudeSettingsPreview.config_profile,
      "claude-settings-json",
      "Claude settings preview should use the settings profile",
    );
    assert.equal(
      claudeSettingsPreview.next_config.enableAllProjectMcpServers,
      true,
      "Claude settings preview should enable project MCP auto-approval when requested",
    );
    assert.deepEqual(
      claudeSettingsPreview.next_config.permissions.deny,
      ["Bash(rm:*)"],
      "Claude settings preview should include deny permission rules",
    );

    const cursorWorkspacePreview = localSidecar.configureClientMcp(
      {
        config_target: "cursor-workspace",
        transport: "http",
        url: "http://127.0.0.1:4444/mcp",
        env_file: ".env.mcp",
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      cursorWorkspacePreview.config_path,
      path.join(fakeCwd, ".cursor", "mcp.json"),
      "Cursor workspace preview should target .cursor/mcp.json",
    );
    assert.equal(
      cursorWorkspacePreview.next_config.mcpServers["omni-skills"].type,
      "http",
      "Cursor config preview should keep an explicit transport type",
    );
    assert.equal(
      cursorWorkspacePreview.next_config.mcpServers["omni-skills"].envFile,
      ".env.mcp",
      "Cursor config preview should carry envFile when requested",
    );

    const antigravityConfigPreview = localSidecar.configureClientMcp(
      {
        client: "antigravity",
        transport: "http",
        url: "http://127.0.0.1:4444/mcp",
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      antigravityConfigPreview.config_path,
      path.join(fakeHome, ".gemini", "antigravity", "mcp.json"),
      "Antigravity config preview should target the Antigravity MCP file",
    );
    assert.equal(
      antigravityConfigPreview.config_profile,
      "antigravity-json",
      "Antigravity config preview should use the dedicated Antigravity profile",
    );
    assert.ok(
      antigravityConfigPreview.recipes.some((recipe) => recipe.client === "antigravity"),
      "Antigravity config preview should include a dedicated recipe",
    );

    const opencodeConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "opencode-workspace",
        transport: "stdio",
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      opencodeConfigPreview.config_path,
      path.join(fakeCwd, "opencode.json"),
      "OpenCode config preview should target the official workspace opencode.json file",
    );
    assert.equal(
      opencodeConfigPreview.config_profile,
      "opencode-config-json",
      "OpenCode config preview should use the dedicated OpenCode profile",
    );
    assert.deepEqual(
      opencodeConfigPreview.next_config.mcp["omni-skills"].command,
      [process.execPath, path.resolve(__dirname, "../../../packages/server-mcp/src/server.js")],
      "OpenCode stdio config should use the local command-array format",
    );
    assert.equal(
      opencodeConfigPreview.next_config.mcp["omni-skills"].type,
      "local",
      "OpenCode stdio config should use the local server type",
    );
    assert.ok(
      opencodeConfigPreview.recipes.some((recipe) => recipe.client === "opencode"),
      "OpenCode config preview should include a workspace recipe",
    );

    const clineConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "cline-user",
        transport: "stream",
        url: "http://127.0.0.1:4444/mcp",
        auto_approve: ["search_files"],
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      clineConfigPreview.config_path,
      path.join(fakeHome, ".cline", "data", "settings", "cline_mcp_settings.json"),
      "Cline config preview should target cline_mcp_settings.json",
    );
    assert.equal(clineConfigPreview.config_profile, "cline-json", "Cline preview should use the Cline profile");
    assert.equal(
      clineConfigPreview.next_config.mcpServers["omni-skills"].type,
      "streamable-http",
      "Cline HTTP config should use the streamable-http transport type",
    );
    assert.deepEqual(
      clineConfigPreview.next_config.mcpServers["omni-skills"].alwaysAllow,
      ["search_files"],
      "Cline config preview should carry alwaysAllow when requested",
    );

    const kiloCliConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "kilo-user",
        transport: "stdio",
        enabled: false,
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      kiloCliConfigPreview.config_path,
      path.join(fakeHome, ".config", "kilo", "kilo.json"),
      "Kilo CLI config preview should target the user kilo.json file",
    );
    assert.equal(
      kiloCliConfigPreview.config_profile,
      "opencode-config-json",
      "Kilo CLI config preview should use the OpenCode-compatible profile",
    );
    assert.equal(
      kiloCliConfigPreview.next_config.mcp["omni-skills"].enabled,
      false,
      "Kilo CLI config preview should carry explicit enabled state",
    );

    const copilotConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "copilot-user",
        transport: "http",
        url: "http://127.0.0.1:4444/mcp",
        include_tools: ["search_skills", "get_skill"],
        filter_mapping: {
          "search_skills": "search",
        },
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      copilotConfigPreview.config_path,
      path.join(fakeHome, ".copilot", "mcp-config.json"),
      "GitHub Copilot config preview should target the user mcp-config.json file",
    );
    assert.equal(
      copilotConfigPreview.config_profile,
      "copilot-json",
      "GitHub Copilot preview should use the dedicated Copilot profile",
    );
    assert.deepEqual(
      copilotConfigPreview.next_config.mcpServers["omni-skills"].tools,
      ["search_skills", "get_skill"],
      "GitHub Copilot config preview should expose the selected tool allowlist",
    );
    assert.deepEqual(
      copilotConfigPreview.next_config.mcpServers["omni-skills"].filterMapping,
      { "search_skills": "search" },
      "GitHub Copilot config preview should carry filter mappings",
    );

    const zedConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "zed-workspace",
        transport: "sse",
        url: "http://127.0.0.1:4444/sse",
        headers: {
          Authorization: "Bearer zed-token",
        },
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      zedConfigPreview.config_path,
      path.join(fakeCwd, ".zed", "settings.json"),
      "Zed config preview should target .zed/settings.json",
    );
    assert.equal(zedConfigPreview.config_profile, "zed-json", "Zed preview should use the Zed profile");
    assert.equal(
      zedConfigPreview.next_config.context_servers["omni-skills"].url,
      "http://127.0.0.1:4444/sse",
      "Zed config preview should expose the requested SSE URL",
    );
    assert.equal(
      zedConfigPreview.next_config.context_servers["omni-skills"].headers.Authorization,
      "Bearer zed-token",
      "Zed config preview should preserve remote headers",
    );

    const continueConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "continue-workspace",
        transport: "stream",
        url: "http://127.0.0.1:4444/mcp",
        headers: {
          Authorization: "Bearer example",
        },
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      continueConfigPreview.config_path,
      path.join(fakeCwd, ".continue", "mcpServers", "omni-skills.yaml"),
      "Continue config preview should target the workspace YAML document",
    );
    assert.equal(
      continueConfigPreview.config_profile,
      "continue-yaml",
      "Continue config preview should use the dedicated Continue YAML profile",
    );
    assert.match(
      continueConfigPreview.next_config_text,
      /mcpServers:\n  - name: 'omni-skills'/,
      "Continue config should render a dedicated YAML server entry",
    );
    assert.match(
      continueConfigPreview.next_config_text,
      /type: 'streamable-http'/,
      "Continue config should map stream transport to streamable-http",
    );
    assert.match(
      continueConfigPreview.next_config_text,
      /Authorization: 'Bearer example'/,
      "Continue config should preserve request headers in requestOptions",
    );
    assert.ok(
      continueConfigPreview.recipes.some((recipe) => recipe.client === "continue"),
      "Continue config preview should include a dedicated recipe",
    );

    const junieConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "junie-project",
        transport: "stream",
        url: "http://127.0.0.1:4444/mcp",
        headers: {
          Authorization: "Bearer junie-token",
        },
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      junieConfigPreview.config_path,
      path.join(fakeCwd, ".junie", "mcp", "mcp.json"),
      "Junie config preview should target the project-scoped mcp.json file",
    );
    assert.equal(
      junieConfigPreview.config_profile,
      "junie-json",
      "Junie config preview should use the dedicated Junie JSON profile",
    );
    assert.equal(
      junieConfigPreview.next_config.mcpServers["omni-skills"].url,
      "http://127.0.0.1:4444/mcp",
      "Junie config preview should preserve the remote MCP URL",
    );
    assert.equal(
      junieConfigPreview.next_config.mcpServers["omni-skills"].headers.Authorization,
      "Bearer junie-token",
      "Junie config preview should preserve explicit request headers",
    );
    assert.ok(
      junieConfigPreview.recipes.some((recipe) => recipe.client === "junie"),
      "Junie config preview should include a dedicated recipe",
    );

    const windsurfConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "windsurf-user",
        transport: "http",
        url: "http://127.0.0.1:4444/mcp",
        auto_approve: ["search_skills", "get_skill"],
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      windsurfConfigPreview.config_path,
      path.join(fakeHome, ".codeium", "windsurf", "mcp_config.json"),
      "Windsurf config preview should target the Windsurf user MCP file",
    );
    assert.equal(
      windsurfConfigPreview.config_profile,
      "windsurf-json",
      "Windsurf config preview should use the dedicated Windsurf profile",
    );
    assert.equal(
      windsurfConfigPreview.next_config.mcpServers["omni-skills"].serverUrl,
      "http://127.0.0.1:4444/mcp",
      "Windsurf config preview should emit serverUrl for remote MCP servers",
    );
    assert.deepEqual(
      windsurfConfigPreview.next_config.mcpServers["omni-skills"].alwaysAllow,
      ["search_skills", "get_skill"],
      "Windsurf config preview should propagate tool auto-approve rules",
    );
    assert.ok(
      windsurfConfigPreview.recipes.some((recipe) => recipe.client === "windsurf"),
      "Windsurf config preview should include a dedicated recipe",
    );

    const gooseConfigPreview = localSidecar.configureClientMcp(
      {
        config_target: "goose-user",
        transport: "stream",
        url: "http://127.0.0.1:4444/mcp",
        timeout_ms: 42000,
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      gooseConfigPreview.config_path,
      path.join(fakeHome, ".config", "goose", "config.yaml"),
      "Goose config preview should target the Goose config.yaml file",
    );
    assert.equal(
      gooseConfigPreview.config_profile,
      "goose-yaml",
      "Goose config preview should use the dedicated Goose YAML profile",
    );
    assert.equal(
      gooseConfigPreview.next_config.extensions["omni-skills"].type,
      "streamable_http",
      "Goose stream config should use the streamable_http extension type",
    );
    assert.equal(
      gooseConfigPreview.next_config.extensions["omni-skills"].url,
      "http://127.0.0.1:4444/mcp",
      "Goose stream config should preserve the MCP URL",
    );
    assert.equal(
      gooseConfigPreview.next_config.extensions["omni-skills"].timeout,
      42,
      "Goose config should convert timeout_ms to timeout seconds",
    );
    assert.ok(
      gooseConfigPreview.recipes.some((recipe) => recipe.client === "goose"),
      "Goose config preview should include dedicated Goose recipes",
    );
    assert.throws(
      () =>
        localSidecar.configureClientMcp(
          {
            config_target: "goose-user",
            transport: "sse",
            url: "http://127.0.0.1:4444/sse",
            dry_run: true,
          },
          localOptions,
        ),
      /Goose first-class config currently supports stdio and stream transport/,
      "Goose config should reject unsupported SSE transport",
    );

    const codexConfigPreview = localSidecar.configureClientMcp(
      {
        client: "codex",
        transport: "http",
        url: "http://127.0.0.1:4444/mcp",
        dry_run: true,
      },
      localOptions,
    );
    assert.equal(
      codexConfigPreview.config_path,
      path.join(fakeCodexHome, "config.toml"),
      "Codex config preview should target config.toml",
    );
    assert.equal(
      codexConfigPreview.config_format,
      "toml",
      "Codex config should render as TOML",
    );
    assert.match(
      codexConfigPreview.next_config_text,
      /\[mcp_servers(?:\."omni-skills"|\.omni-skills)\]/,
      "Codex config should create an mcp_servers TOML table",
    );
    assert.match(
      codexConfigPreview.next_config_text,
      /url = "http:\/\/127\.0\.0\.1:4444\/mcp"/,
      "Codex config should include the requested URL",
    );

    const configApplied = localSidecar.configureClientMcp(
      {
        config_target: "workspace",
        transport: "http",
        url: "http://127.0.0.1:4444/mcp",
        dry_run: false,
      },
      localOptions,
    );
    assert.equal(configApplied.applied, true, "config write should report applied");
    assert.ok(
      fs.existsSync(path.join(fakeCwd, ".mcp.json")),
      "workspace MCP config should be written to disk",
    );

    const guidedInstallPath = path.join(tempRoot, "guided-install");
    childProcess.execFileSync(
      process.execPath,
      [
        path.resolve(__dirname, "../../bin/cli.js"),
        "find",
        "discover",
        "--tool",
        "codex-cli",
        "--install",
        "--yes",
        "--path",
        guidedInstallPath,
      ],
      {
        encoding: "utf-8",
        env: {
          ...process.env,
          OMNI_SKILLS_SOURCE_ROOT: path.resolve(__dirname, "../../.."),
        },
      },
    );
    assert.ok(
      fs.existsSync(path.join(guidedInstallPath, "find-skills", "SKILL.md")),
      "guided find install should install the selected skill when --yes is used",
    );

    const guidedWizardPath = path.join(tempRoot, "guided-wizard");
    const guidedWizardOutput = childProcess.execFileSync(
      process.execPath,
      [
        path.resolve(__dirname, "../../bin/cli.js"),
        "install",
        "--guided",
        "--path",
        guidedWizardPath,
        "--skill",
        "architecture",
      ],
      {
        encoding: "utf-8",
        input: "y\n",
        env: {
          ...process.env,
          OMNI_SKILLS_SOURCE_ROOT: path.resolve(__dirname, "../../.."),
        },
      },
    );
    assert.ok(
      guidedWizardOutput.includes("Install Preview"),
      "guided install should show an install preview before writing files",
    );
    assert.ok(
      guidedWizardOutput.includes("--path"),
      "guided install should render the equivalent installer command",
    );
    assert.ok(
      fs.existsSync(path.join(guidedWizardPath, "architecture", "SKILL.md")),
      "guided install should write the selected skill into the chosen custom path",
    );

    const removed = localSidecar.removeSkills(
      {
        skill_ids: ["omni-figma"],
        client: "opencode",
        dry_run: false,
      },
      localOptions,
    );
    assert.equal(removed.applied, true, "skill removal should report applied");
    assert.ok(
      !fs.existsSync(path.join(fakeCwd, ".agents", "skills", "omni-figma")),
      "skill removal should delete the installed skill directory",
    );
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }

  console.log("All smoke tests passed.");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
