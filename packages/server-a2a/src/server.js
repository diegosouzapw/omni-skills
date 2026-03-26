import express from "express";
import { randomUUID } from "node:crypto";
import {
  buildInstallPlan,
  getHealthSnapshot,
  recommendSkills,
  searchSkills,
} from "../../catalog-core/src/index.js";

const app = express();
const PORT = Number.parseInt(process.env.PORT || "3335", 10);
const HOST = process.env.HOST || "127.0.0.1";
const BASE_URL = process.env.BASE_URL || `http://${HOST}:${PORT}`;

app.use(express.json({ limit: "1mb" }));

function jsonRpcSuccess(id, result) {
  return { jsonrpc: "2.0", id, result };
}

function jsonRpcError(id, code, message, data) {
  return {
    jsonrpc: "2.0",
    id: id ?? null,
    error: {
      code,
      message,
      ...(data ? { data } : {}),
    },
  };
}

function agentMessage(text, metadata = {}, contextId = randomUUID()) {
  return {
    type: "message",
    role: "agent",
    messageId: randomUUID(),
    contextId,
    parts: [
      {
        kind: "text",
        text,
      },
    ],
    metadata,
  };
}

function extractText(message) {
  const parts = Array.isArray(message?.parts) ? message.parts : [];
  return parts
    .filter((part) => part && (part.kind === "text" || part.type === "text"))
    .map((part) => part.text || "")
    .join("\n")
    .trim();
}

function handleOperation(operation, text, metadata) {
  switch (operation) {
    case "discover-skills":
      return searchSkills({
        query: text || metadata.query || "",
        category: metadata.category,
        tool: metadata.tool,
        risk: metadata.risk,
        limit: metadata.limit || 10,
      });
    case "recommend-stack":
      return recommendSkills({
        goal: text || metadata.goal || "",
        tool: metadata.tool,
        category: metadata.category,
        limit: metadata.limit || 5,
      });
    case "prepare-install-plan":
      return buildInstallPlan({
        skill_ids: metadata.skill_ids || metadata.skillIds || [],
        bundle_ids: metadata.bundle_ids || metadata.bundleIds || [],
        tools: metadata.tools || (metadata.tool ? [metadata.tool] : []),
        target_path: metadata.target_path,
        dry_run: true,
      });
    default:
      return searchSkills({
        query: text,
        category: metadata.category,
        tool: metadata.tool,
        limit: metadata.limit || 10,
      });
  }
}

app.get("/healthz", (_req, res) => {
  res.json(getHealthSnapshot());
});

app.get("/.well-known/agent.json", (_req, res) => {
  res.json({
    protocolVersion: "0.2.5",
    name: "Omni Skills Agent",
    description:
      "Read-only A2A agent for discovering skills, recommending stacks, and preparing install plans from the Omni Skills catalog.",
    url: `${BASE_URL}/a2a`,
    version: "0.1.0",
    defaultInputModes: ["text"],
    defaultOutputModes: ["text"],
    capabilities: {
      streaming: false,
      pushNotifications: false,
    },
    skills: [
      {
        id: "discover-skills",
        name: "Discover Skills",
        description: "Search the Omni Skills catalog by goal, text, or compatibility.",
        tags: ["skills", "search", "catalog"],
        examples: ["Find Figma-related skills for Cursor."],
        inputModes: ["text"],
        outputModes: ["text"],
      },
      {
        id: "recommend-stack",
        name: "Recommend Stack",
        description: "Recommend a skill stack for a goal and preferred client.",
        tags: ["recommendation", "planning", "catalog"],
        examples: ["Recommend skills for a frontend design workflow in Codex CLI."],
        inputModes: ["text"],
        outputModes: ["text"],
      },
      {
        id: "prepare-install-plan",
        name: "Prepare Install Plan",
        description: "Build a read-only install plan for selected skills and clients.",
        tags: ["install", "planning", "dry-run"],
        examples: ["Prepare an install plan for omni-figma on Cursor."],
        inputModes: ["text"],
        outputModes: ["text"],
      },
    ],
  });
});

app.post("/a2a", (req, res) => {
  const rpc = req.body;

  if (!rpc || rpc.jsonrpc !== "2.0" || typeof rpc.method !== "string") {
    res.status(400).json(jsonRpcError(rpc?.id, -32600, "Invalid JSON-RPC request."));
    return;
  }

  if (rpc.method !== "message/send") {
    res.status(404).json(
      jsonRpcError(rpc.id, -32601, `Method '${rpc.method}' is not implemented in this initial scaffold.`),
    );
    return;
  }

  const params = rpc.params || {};
  const message = params.message || {};
  const metadata = params.metadata || {};
  const operation = metadata.operation || "discover-skills";
  const text = extractText(message);
  const contextId = params.contextId || message.contextId || randomUUID();

  try {
    const payload = handleOperation(operation, text, metadata);
    res.json(
      jsonRpcSuccess(
        rpc.id,
        agentMessage(JSON.stringify(payload, null, 2), { operation, source: "omni-skills-a2a" }, contextId),
      ),
    );
  } catch (error) {
    res.status(500).json(jsonRpcError(rpc.id, -32603, "Failed to process request.", { message: error.message }));
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Omni Skills A2A scaffold listening at ${BASE_URL}`);
});
