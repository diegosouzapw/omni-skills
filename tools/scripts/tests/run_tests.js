#!/usr/bin/env node

"use strict";

const assert = require("node:assert/strict");
const childProcess = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

(async () => {
  const core = await import("../../../packages/catalog-core/src/index.js");
  const localSidecar = await import("../../../packages/server-mcp/src/local-sidecar.js");

  const repoMetadata = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../../metadata.json"), "utf-8"),
  );
  assert.ok(repoMetadata.summary.total_skills >= 2, "repo metadata should summarize the published skills");
  assert.equal(
    repoMetadata.taxonomy.counts["cli-automation"],
    1,
    "repo metadata should track canonical taxonomy counts",
  );

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

  const catalog = core.loadCatalog();
  assert.ok(catalog.total_skills >= 2, "catalog should expose the published skills");

  const search = core.searchSkills({ query: "figma", limit: 5 });
  assert.ok(search.results.some((skill) => skill.id === "omni-figma"), "search should find omni-figma");

  const discoverySearch = core.searchSkills({ query: "discover install catalog", limit: 5 });
  assert.ok(
    discoverySearch.results.some((skill) => skill.id === "find-skills"),
    "search should find the find-skills helper",
  );

  const manifest = core.getSkill("omni-figma");
  assert.equal(manifest.id, "omni-figma", "manifest id should match");
  assert.ok(Array.isArray(manifest.artifacts) && manifest.artifacts.length > 0, "manifest should list artifacts");
  assert.equal(
    manifest.classification.maturity.skill_level,
    2,
    "manifest should expose generated maturity classification",
  );
  assert.ok(
    manifest.classification.quality.score > 0,
    "manifest should expose generated quality classification",
  );

  const plan = core.buildInstallPlan({
    skill_ids: ["omni-figma"],
    tools: ["cursor"],
    dry_run: true,
  });
  assert.equal(plan.install_scope, "selected-skills", "install plan should reflect selective installs");
  assert.ok(
    plan.commands.includes("npx omni-skills --cursor --skill 'omni-figma'"),
    "install plan should include a selective cursor command",
  );

  const bundlePlan = core.buildInstallPlan({
    bundle_ids: ["full-stack"],
    tools: ["cursor"],
    dry_run: true,
  });
  assert.ok(
    bundlePlan.commands.includes("npx omni-skills --cursor --bundle 'full-stack'"),
    "bundle install plan should include a bundle-based cursor command",
  );
  assert.ok(
    bundlePlan.selected_skills.some((skill) => skill.id === "omni-figma"),
    "bundle install plan should resolve available skills from the bundle",
  );
  assert.ok(
    bundlePlan.warnings.some((warning) => warning.includes("references unavailable skills")),
    "bundle install plan should warn about unavailable bundle members",
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

  const bundles = core.listBundles();
  const essentialsBundle = bundles.find((bundle) => bundle.id === "essentials");
  assert.ok(essentialsBundle, "essentials bundle should exist");
  assert.ok(
    essentialsBundle.available_skill_ids.includes("find-skills"),
    "essentials bundle should expose the published find-skills helper",
  );

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
  assert.ok(cliHelp.includes("api"), "repo CLI help should advertise the API command");
  assert.ok(cliHelp.includes("a2a"), "repo CLI help should advertise the A2A command");
  assert.ok(cliHelp.includes("smoke"), "repo CLI help should advertise the smoke command");
  assert.ok(
    cliHelp.includes("publish-check"),
    "repo CLI help should advertise the publish-check alias",
  );

  const cliFind = childProcess.execFileSync(
    process.execPath,
    [path.resolve(__dirname, "../../bin/cli.js"), "find", "figma"],
    { encoding: "utf-8" },
  );
  assert.ok(cliFind.includes("omni-figma"), "repo CLI find should surface matching skills");
  assert.ok(
    cliFind.includes("Results (1/1)"),
    "repo CLI find should require a real text match instead of only matching on filters",
  );
  assert.ok(
    cliFind.includes("quality:"),
    "repo CLI find should surface classification details from generated metadata",
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
          client.skills_path === path.join(fakeCwd, ".agents", "skills"),
      ),
      "local sidecar should detect the OpenCode workspace target",
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
      fs.existsSync(path.join(fakeCwd, ".agents", "skills", "omni-figma", "SKILL.md")),
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
