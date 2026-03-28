import express from "express";
import { randomUUID } from "node:crypto";
import * as z from "zod/v4";
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import {
  buildInstallPlan,
  compareSkills,
  getClientInstallRecipe,
  getHealthSnapshot,
  getSkill,
  listSkills,
  recommendSkills,
  searchSkills,
  loadCatalog,
} from "../../catalog-core/src/index.js";
import {
  applyExpressHttpRuntime,
  createHttpCorsMiddleware,
  createHttpRuntimeMiddleware,
  getHttpRuntimeSnapshot,
} from "../../server-api/src/http-runtime.js";
import {
  configureClientMcp,
  detectClients,
  installSkills,
  isLocalModeEnabled,
  listInstalledSkills,
  removeSkills,
} from "./local-sidecar.js";

function formatJson(value) {
  return JSON.stringify(value, null, 2);
}

function getApiBaseUrl() {
  return process.env.OMNI_SKILLS_API_BASE_URL || process.env.OMNI_SKILLS_PUBLIC_BASE_URL || null;
}

function getRuntimeMode() {
  return isLocalModeEnabled() ? "local" : "read-only";
}

function getHost() {
  return process.env.HOST || "127.0.0.1";
}

function getPort() {
  return Number.parseInt(process.env.PORT || "3334", 10);
}

function sendHealthResponse(res, transport) {
  res.json({
    ...getHealthSnapshot(),
    mode: getRuntimeMode(),
    transport,
    http: getHttpRuntimeSnapshot(),
  });
}

function resolveTransportMode(argv = process.argv.slice(2)) {
  const transportIndex = argv.indexOf("--transport");
  if (transportIndex !== -1 && argv[transportIndex + 1]) {
    const explicit = String(argv[transportIndex + 1]).trim().toLowerCase();
    if (explicit === "http") {
      return "stream";
    }
    return explicit;
  }

  if (argv.includes("--stream") || argv.includes("--http")) {
    return "stream";
  }

  if (argv.includes("--sse")) {
    return "sse";
  }

  return "stdio";
}

function registerLocalTools(server) {
  server.registerTool(
    "detect_clients",
    {
      title: "Detect Clients",
      description: "Detect known local AI clients, their skill directories, and candidate MCP config files.",
      inputSchema: {},
      annotations: {
        readOnlyHint: true,
      },
    },
    async () => {
      const result = detectClients();
      return {
        content: [{ type: "text", text: formatJson(result) }],
        structuredContent: result,
      };
    },
  );

  server.registerTool(
    "list_installed_skills",
    {
      title: "List Installed Skills",
      description: "List installed skills for a known client or custom target path.",
      inputSchema: {
        client: z.string().optional().describe("Known client id or alias, for example cursor or claude-code."),
        target_path: z.string().optional().describe("Explicit skills target path."),
      },
      annotations: {
        readOnlyHint: true,
      },
    },
    async ({ client, target_path }) => {
      const result = listInstalledSkills({ client, target_path });
      return {
        content: [{ type: "text", text: formatJson(result) }],
        structuredContent: result,
      };
    },
  );

  server.registerTool(
    "install_skills",
    {
      title: "Install Skills",
      description: "Preview or apply a local skill installation into a supported client or allowed path.",
      inputSchema: {
        skill_ids: z.array(z.string()).optional().describe("Selected skill identifiers."),
        bundle_ids: z.array(z.string()).optional().describe("Selected bundle identifiers."),
        client: z.string().optional().describe("Known client id or alias."),
        target_path: z.string().optional().describe("Explicit skills target path."),
        include_docs: z.boolean().optional().describe("Whether to copy docs alongside the skills."),
        dry_run: z.boolean().optional().describe("When true, return only the planned file operations."),
      },
      annotations: {
        destructiveHint: true,
      },
    },
    async ({ skill_ids, bundle_ids, client, target_path, include_docs, dry_run }) => {
      const result = installSkills({
        skill_ids,
        bundle_ids,
        client,
        target_path,
        include_docs,
        dry_run,
      });
      return {
        content: [{ type: "text", text: formatJson(result) }],
        structuredContent: result,
      };
    },
  );

  server.registerTool(
    "remove_skills",
    {
      title: "Remove Skills",
      description: "Preview or remove installed skill directories from a supported client or allowed path.",
      inputSchema: {
        skill_ids: z.array(z.string()).optional().describe("Selected skill identifiers."),
        bundle_ids: z.array(z.string()).optional().describe("Selected bundle identifiers."),
        client: z.string().optional().describe("Known client id or alias."),
        target_path: z.string().optional().describe("Explicit skills target path."),
        dry_run: z.boolean().optional().describe("When true, return only the planned remove operations."),
      },
      annotations: {
        destructiveHint: true,
      },
    },
    async ({ skill_ids, bundle_ids, client, target_path, dry_run }) => {
      const result = removeSkills({
        skill_ids,
        bundle_ids,
        client,
        target_path,
        dry_run,
      });
      return {
        content: [{ type: "text", text: formatJson(result) }],
        structuredContent: result,
      };
    },
  );

  server.registerTool(
    "configure_client_mcp",
    {
      title: "Configure Client MCP",
      description: "Preview or write a client-aware local MCP config file pointing to this Omni Skills MCP server.",
      inputSchema: {
        client: z.string().optional().describe("Known client id or alias."),
        config_target: z.string().optional().describe("Named config target such as workspace or vscode."),
        file_path: z.string().optional().describe("Explicit config file path."),
        transport: z.enum(["stream", "http", "sse", "stdio"]).optional().describe("MCP transport to configure."),
        url: z.string().optional().describe("HTTP or SSE MCP endpoint to use when transport is network-based."),
        server_name: z.string().optional().describe("Name of the MCP server entry to write."),
        headers: z.record(z.string(), z.string()).optional().describe("Optional HTTP headers for remote MCP entries."),
        env: z.record(z.string(), z.string()).optional().describe("Optional environment variables for stdio MCP entries."),
        env_file: z.string().optional().describe("Optional env file path for clients that support it."),
        cwd: z.string().optional().describe("Optional working directory for stdio MCP entries."),
        timeout_ms: z.number().int().positive().optional().describe("Optional transport timeout in milliseconds."),
        description: z.string().optional().describe("Optional human-readable description stored with the MCP entry."),
        include_tools: z.array(z.string()).optional().describe("Optional tool allowlist for clients that support it."),
        exclude_tools: z.array(z.string()).optional().describe("Optional tool denylist for clients that support it."),
        disabled: z.boolean().optional().describe("Marks the entry as disabled for clients that support it."),
        trust: z.boolean().optional().describe("Marks the entry as trusted for clients that support it."),
        sandbox_enabled: z.boolean().optional().describe("VS Code only. Enables sandboxing for stdio MCP servers."),
        sandbox_allow_write: z.array(z.string()).optional().describe("VS Code only. Writable filesystem allowlist entries for the sandbox."),
        sandbox_allow_network: z.array(z.string()).optional().describe("VS Code only. Network host allowlist entries for the sandbox."),
        allowed_mcp_servers: z.array(z.string()).optional().describe("Claude Code only. Allowlist of server names or commands."),
        denied_mcp_servers: z.array(z.string()).optional().describe("Claude Code only. Denylist of server names or commands."),
        permissions_deny: z.array(z.string()).optional().describe("Claude Code only. Permission deny rules for settings.json."),
        enable_all_project_mcp_servers: z.boolean().optional().describe("Claude Code only. Auto-approve project MCP servers in settings.json."),
        mcp_allowed_servers: z.array(z.string()).optional().describe("Gemini CLI only. Global MCP allowlist written under mcp.allowed."),
        mcp_excluded_servers: z.array(z.string()).optional().describe("Gemini CLI only. Global MCP denylist written under mcp.excluded."),
        disabled_tools: z.array(z.string()).optional().describe("Kiro only. Tool IDs to disable for this MCP server."),
        auto_approve: z.array(z.string()).optional().describe("Kiro only. Tool IDs to auto-approve for this MCP server."),
        dev_watch: z.string().optional().describe("VS Code only. Dev watch command or path for MCP debugging."),
        dev_debug_type: z.string().optional().describe("VS Code only. Debug profile type for MCP development."),
        dry_run: z.boolean().optional().describe("When true, return the config preview without writing."),
      },
      annotations: {
        destructiveHint: true,
      },
    },
    async ({
      client,
      config_target,
      file_path,
      transport,
      url,
      server_name,
      headers,
      env,
      env_file,
      cwd,
      timeout_ms,
      description,
      include_tools,
      exclude_tools,
      disabled,
      trust,
      sandbox_enabled,
      sandbox_allow_write,
      sandbox_allow_network,
      allowed_mcp_servers,
      denied_mcp_servers,
      permissions_deny,
      enable_all_project_mcp_servers,
      mcp_allowed_servers,
      mcp_excluded_servers,
      disabled_tools,
      auto_approve,
      dev_watch,
      dev_debug_type,
      dry_run,
    }) => {
      const result = configureClientMcp({
        client,
        config_target,
        file_path,
        transport,
        url,
        server_name,
        headers,
        env,
        env_file,
        cwd,
        timeout_ms,
        description,
        include_tools,
        exclude_tools,
        disabled,
        trust,
        sandbox_enabled,
        sandbox_allow_write,
        sandbox_allow_network,
        allowed_mcp_servers,
        denied_mcp_servers,
        permissions_deny,
        enable_all_project_mcp_servers,
        mcp_allowed_servers,
        mcp_excluded_servers,
        disabled_tools,
        auto_approve,
        dev_watch,
        dev_debug_type,
        dry_run,
      });
      return {
        content: [{ type: "text", text: formatJson(result) }],
        structuredContent: result,
      };
    },
  );
}

function createCatalogMcpServer() {
  const server = new McpServer({
    name: "omni-skills-mcp",
    version: "0.1.1",
  });

  server.registerTool(
    "search_skills",
    {
      title: "Search Skills",
      description: "Search the Omni Skills catalog by text query and optional filters.",
      inputSchema: {
        query: z.string().optional().describe("Search query."),
        category: z.string().optional().describe("Filter by category."),
        tool: z.string().optional().describe("Filter by compatible tool."),
        risk: z.string().optional().describe("Filter by risk level."),
        limit: z.number().int().positive().max(50).optional().describe("Maximum number of results."),
      },
      annotations: {
        readOnlyHint: true,
      },
    },
    async ({ query, category, tool, risk, limit }) => {
      const result = searchSkills({ query, category, tool, risk, limit });
      return {
        content: [
          {
            type: "text",
            text: formatJson(result),
          },
        ],
        structuredContent: result,
      };
    },
  );

  server.registerTool(
    "get_skill",
    {
      title: "Get Skill",
      description: "Fetch the full machine-readable manifest for a single skill.",
      inputSchema: {
        id: z.string().describe("Skill identifier."),
      },
      annotations: {
        readOnlyHint: true,
      },
    },
    async ({ id }) => {
      const skill = getSkill(id, { baseUrl: getApiBaseUrl() });
      if (!skill) {
        return {
          content: [{ type: "text", text: `Skill '${id}' not found.` }],
          isError: true,
        };
      }

      return {
        content: [{ type: "text", text: formatJson(skill) }],
        structuredContent: skill,
      };
    },
  );

  server.registerTool(
    "compare_skills",
    {
      title: "Compare Skills",
      description: "Compare multiple skills by category, tags, tools, and differences.",
      inputSchema: {
        ids: z.array(z.string()).min(1).max(5).describe("Skill identifiers to compare."),
      },
      annotations: {
        readOnlyHint: true,
      },
    },
    async ({ ids }) => {
      const result = compareSkills(ids);
      return {
        content: [{ type: "text", text: formatJson(result) }],
        structuredContent: result,
      };
    },
  );

  server.registerTool(
    "recommend_skills",
    {
      title: "Recommend Skills",
      description: "Recommend relevant skills for a goal and optional target tool.",
      inputSchema: {
        goal: z.string().describe("Goal or job to be done."),
        tool: z.string().optional().describe("Preferred client or tool."),
        category: z.string().optional().describe("Preferred category."),
        limit: z.number().int().positive().max(10).optional().describe("Maximum number of recommendations."),
      },
      annotations: {
        readOnlyHint: true,
      },
    },
    async ({ goal, tool, category, limit }) => {
      const result = recommendSkills({ goal, tool, category, limit });
      return {
        content: [{ type: "text", text: formatJson(result) }],
        structuredContent: result,
      };
    },
  );

  server.registerTool(
    "preview_install",
    {
      title: "Preview Install",
      description: "Build an install plan for one or more skills without writing to disk.",
      inputSchema: {
        skill_ids: z.array(z.string()).optional().describe("Selected skill identifiers."),
        bundle_ids: z.array(z.string()).optional().describe("Selected bundle identifiers."),
        tools: z.array(z.string()).optional().describe("Explicit target clients."),
        target_path: z.string().optional().describe("Custom install path."),
        dry_run: z.boolean().optional().describe("Whether this is a dry-run preview."),
      },
      annotations: {
        readOnlyHint: true,
      },
    },
    async ({ skill_ids, bundle_ids, tools, target_path, dry_run }) => {
      const result = buildInstallPlan(
        { skill_ids, bundle_ids, tools, target_path, dry_run },
        { baseUrl: getApiBaseUrl() },
      );
      return {
        content: [{ type: "text", text: formatJson(result) }],
        structuredContent: result,
      };
    },
  );

  server.registerResource(
    "catalog-index",
    "omni://catalog/index",
    {
      title: "Omni Skills Catalog",
      description: "Machine-readable Omni Skills catalog index.",
      mimeType: "application/json",
    },
    async () => {
      const catalog = loadCatalog();
      return {
        contents: [
          {
            uri: "omni://catalog/index",
            text: formatJson(catalog),
            mimeType: "application/json",
          },
        ],
      };
    },
  );

  server.registerResource(
    "skill-manifest",
    new ResourceTemplate("omni://skills/{id}", {
      list: async () => {
        const { results } = listSkills({ limit: 1000 });
        return {
          resources: results.map((skill) => ({
            name: skill.display_name,
            uri: `omni://skills/${skill.id}`,
            title: skill.display_name,
            description: skill.description,
            mimeType: "application/json",
          })),
        };
      },
      complete: {
        id: async (value) =>
          listSkills({ q: value, limit: 20 }).results.map((skill) => skill.id),
      },
    }),
    {
      title: "Skill Manifest",
      description: "Machine-readable manifest for a skill.",
      mimeType: "application/json",
    },
    async (uri, variables) => {
      const skillId = variables.id;
      const manifest = getSkill(skillId, { baseUrl: getApiBaseUrl() });
      if (!manifest) {
        return {
          contents: [
            {
              uri: uri.href,
              text: formatJson({ error: `Skill '${skillId}' not found.` }),
              mimeType: "application/json",
            },
          ],
        };
      }

      return {
        contents: [
          {
            uri: uri.href,
            text: formatJson(manifest),
            mimeType: "application/json",
          },
        ],
      };
    },
  );

  server.registerResource(
    "client-install-recipe",
    new ResourceTemplate("omni://clients/{client}/install-recipe", {
      list: async () => {
        const clients = [...new Set(listSkills({ limit: 1000 }).results.flatMap((skill) => skill.tools || []))];

        return {
          resources: clients.map((client) => ({
            name: client,
            uri: `omni://clients/${client}/install-recipe`,
            title: `${client} install recipe`,
            description: `Current install recipe for ${client}.`,
            mimeType: "application/json",
          })),
        };
      },
      complete: {
        client: async (value) => {
          const clients = new Set(
            listSkills({ limit: 1000 }).results.flatMap((skill) => skill.tools || []),
          );
          return [...clients].filter((client) => client.includes(value));
        },
      },
    }),
    {
      title: "Client Install Recipe",
      description: "Current install recipe for a compatible client.",
      mimeType: "application/json",
    },
    async (uri, variables) => {
      const recipe = getClientInstallRecipe(variables.client);
      return {
        contents: [
          {
            uri: uri.href,
            text: formatJson(
              recipe || { error: `No install recipe found for client '${variables.client}'.` },
            ),
            mimeType: "application/json",
          },
        ],
      };
    },
  );

  server.registerPrompt(
    "recommend_bundle_for_goal",
    {
      title: "Recommend Bundle For Goal",
      description: "Provide an MCP prompt that frames bundle and skill selection for a goal.",
      argsSchema: {
        goal: z.string().describe("Goal or workflow objective."),
        tool: z.string().optional().describe("Preferred client or tool."),
      },
    },
    async ({ goal, tool }) => {
      const recommendations = recommendSkills({ goal, tool, limit: 5 });
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `Goal: ${goal}\nPreferred tool: ${tool || "unspecified"}\nSuggested skills:\n${formatJson(
                recommendations,
              )}`,
            },
          },
        ],
      };
    },
  );

  server.registerPrompt(
    "install_skill_for_client",
    {
      title: "Install Skill For Client",
      description: "Summarize the current install recipe for a skill and client.",
      argsSchema: {
        skill_id: z.string().describe("Skill identifier."),
        client: z.string().describe("Client or tool identifier."),
      },
    },
    async ({ skill_id, client }) => {
      const plan = buildInstallPlan(
        { skill_ids: [skill_id], tools: [client], dry_run: true },
        { baseUrl: getApiBaseUrl() },
      );
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `Install plan for skill '${skill_id}' on client '${client}':\n${formatJson(plan)}`,
            },
          },
        ],
      };
    },
  );

  if (isLocalModeEnabled()) {
    registerLocalTools(server);
  }

  return server;
}

async function startStdio() {
  const server = createCatalogMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`Omni Skills MCP server running over stdio (${getRuntimeMode()} mode)`);
}

async function startStreamableHttp() {
  const app = createMcpExpressApp();
  const port = getPort();
  const host = getHost();
  const sessions = new Map();

  applyExpressHttpRuntime(app);
  app.use(createHttpCorsMiddleware());
  app.use(express.json({ limit: "1mb" }));
  app.use(createHttpRuntimeMiddleware({
    allowAnonymousPaths: ["/healthz"],
    adminPaths: ["/admin/runtime"],
  }));

  app.get("/healthz", (_req, res) => {
    sendHealthResponse(res, "stream");
  });

  app.get("/admin/runtime", (req, res) => {
    res.json({
      request_id: req.omniRequestId || null,
      http: getHttpRuntimeSnapshot({ detailed: true }),
      mcp: {
        mode: getRuntimeMode(),
        transport: "stream",
        host,
        port,
        api_base_url: getApiBaseUrl(),
        local_mode: isLocalModeEnabled(),
      },
      sessions: {
        active: sessions.size,
      },
    });
  });

  app.all("/mcp", async (req, res) => {
    const sessionId = typeof req.headers["mcp-session-id"] === "string" ? req.headers["mcp-session-id"] : undefined;
    let session = sessionId ? sessions.get(sessionId) : undefined;
    try {
      if (!session) {
        const server = createCatalogMcpServer();
        const transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => randomUUID(),
          onsessioninitialized: (initializedSessionId) => {
            sessions.set(initializedSessionId, { server, transport });
          },
        });
        transport.onclose = () => {
          if (transport.sessionId) {
            sessions.delete(transport.sessionId);
          }
        };
        transport.onerror = (error) => {
          console.error("MCP stream transport error:", error);
        };
        await server.connect(transport);
        session = { server, transport };
      }

      await session.transport.handleRequest(req, res, req.body);
    } catch (error) {
      console.error("MCP stream error:", error);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: { code: -32603, message: "Internal server error" },
          id: null,
        });
      }
    }
  });

  app.listen(port, host, () => {
    console.log(
      `Omni Skills MCP Stream server listening at http://${host}:${port}/mcp (${getRuntimeMode()} mode)`,
    );
  });
}

async function startSse() {
  const app = express();
  const port = getPort();
  const host = getHost();
  const sessions = new Map();

  applyExpressHttpRuntime(app);
  app.use(createHttpCorsMiddleware());
  app.use(express.json({ limit: "1mb" }));
  app.use(createHttpRuntimeMiddleware({
    allowAnonymousPaths: ["/healthz"],
    adminPaths: ["/admin/runtime"],
  }));

  app.get("/healthz", (_req, res) => {
    sendHealthResponse(res, "sse");
  });

  app.get("/admin/runtime", (req, res) => {
    res.json({
      request_id: req.omniRequestId || null,
      http: getHttpRuntimeSnapshot({ detailed: true }),
      mcp: {
        mode: getRuntimeMode(),
        transport: "sse",
        host,
        port,
        api_base_url: getApiBaseUrl(),
        local_mode: isLocalModeEnabled(),
      },
      sessions: {
        active: sessions.size,
      },
    });
  });

  app.get("/sse", async (_req, res) => {
    const server = createCatalogMcpServer();
    const transport = new SSEServerTransport("/messages", res);

    transport.onclose = () => {
      sessions.delete(transport.sessionId);
    };
    transport.onerror = (error) => {
      console.error("MCP SSE transport error:", error);
    };

    sessions.set(transport.sessionId, { server, transport });
    await server.connect(transport);
  });

  app.post("/messages", async (req, res) => {
    const sessionId = String(req.query.sessionId || "");
    const session = sessions.get(sessionId);

    if (!session) {
      res.status(404).json({
        jsonrpc: "2.0",
        error: { code: -32001, message: `Unknown SSE session '${sessionId}'.` },
        id: null,
      });
      return;
    }

    try {
      await session.transport.handlePostMessage(req, res, req.body);
    } catch (error) {
      console.error("MCP SSE error:", error);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: { code: -32603, message: "Internal server error" },
          id: null,
        });
      }
    }
  });

  app.listen(port, host, () => {
    console.log(
      `Omni Skills MCP SSE server listening at http://${host}:${port}/sse (${getRuntimeMode()} mode)`,
    );
  });
}

const transportMode = resolveTransportMode();
const startByTransport = {
  stdio: startStdio,
  stream: startStreamableHttp,
  sse: startSse,
};

if (!startByTransport[transportMode]) {
  console.error(`Unsupported MCP transport '${transportMode}'. Use stdio, stream, or sse.`);
  process.exit(1);
}

startByTransport[transportMode]().catch((error) => {
  console.error(error);
  process.exit(1);
});
