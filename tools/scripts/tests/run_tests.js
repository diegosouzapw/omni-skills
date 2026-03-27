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

  const repoMetadata = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../../metadata.json"), "utf-8"),
  );
  childProcess.execFileSync(
    "python3",
    [path.resolve(__dirname, "../verify_archives.py")],
    { encoding: "utf-8" },
  );
  assert.ok(repoMetadata.summary.total_skills >= 13, "repo metadata should summarize the published skills");
  assert.equal(
    repoMetadata.taxonomy.counts["cli-automation"],
    1,
    "repo metadata should track canonical taxonomy counts",
  );
  assert.equal(
    repoMetadata.taxonomy.counts["testing-security"],
    2,
    "repo metadata should track the published security helpers",
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
  assert.ok(catalog.total_skills >= 13, "catalog should expose the published skills");

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
  assert.ok(
    essentialsBundle.available_skill_ids.length === 4,
    "essentials bundle should be fully backed by published skills",
  );
  assert.ok(
    fullStackBundle.available_skill_ids.length === 4,
    "full-stack bundle should be fully backed by published skills",
  );
  assert.ok(
    securityBundle.available_skill_ids.length === 2,
    "security bundle should be fully backed by published skills",
  );
  assert.ok(
    ossMaintainerBundle.available_skill_ids.length === 4,
    "oss-maintainer bundle should be fully backed by published skills",
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
  try {
    await waitFor(() => fetchJson(`http://127.0.0.1:${apiPort}/healthz`));
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
  try {
    const securedHealth = await waitFor(() => fetchJson(`http://127.0.0.1:${securedApiPort}/healthz`));
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
  try {
    const mcpHealth = await waitFor(() => fetchJson(`http://127.0.0.1:${securedMcpPort}/healthz`));
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
  try {
    const a2aHealth = await waitFor(() => fetchJson(`http://127.0.0.1:${a2aPort}/healthz`));
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
    }, 8000, 100);
    assert.ok(
      completedDiscoverTask.artifacts[0].parts.some(
        (part) => part.kind === "data" && part.data.results.some((skill) => skill.id === "omni-figma"),
      ),
      "completed discover task should include omni-figma in the data artifact",
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
          part.data.commands.includes("npx omni-skills --cursor --skill 'omni-figma'"),
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
      }, 8000, 100);
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

    const restartedHealth = await waitFor(() => fetchJson(`http://127.0.0.1:${a2aPort}/healthz`));
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
