import express from "express";
import { OmniSkillsA2ARuntime } from "./task-runtime.js";

const app = express();
const PORT = Number.parseInt(process.env.PORT || "3335", 10);
const HOST = process.env.HOST || "127.0.0.1";
const BASE_URL = process.env.BASE_URL || `http://${HOST}:${PORT}`;
const runtime = new OmniSkillsA2ARuntime({
  baseUrl: BASE_URL,
});

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

function sendRpcFailure(res, rpc, error, fallbackCode = -32603, fallbackStatus = 500) {
  const code = Number.isInteger(error?.code) ? error.code : fallbackCode;
  const status =
    code === -32600 || code === -32601 || code === -32602
      ? 400
      : code === -32001
        ? 404
        : code === -32002 || code === -32003 || code === -32004
          ? 409
          : fallbackStatus;

  res.status(status).json(
    jsonRpcError(rpc?.id, code, error?.message || "Failed to process request.", {
      ...(error?.name ? { name: error.name } : {}),
    }),
  );
}

app.get("/healthz", (_req, res) => {
  res.json(runtime.getHealthSnapshot());
});

app.get("/.well-known/agent.json", (_req, res) => {
  res.json(runtime.getAgentCard(BASE_URL));
});

app.post("/a2a", async (req, res) => {
  const rpc = req.body;

  if (!rpc || rpc.jsonrpc !== "2.0" || typeof rpc.method !== "string") {
    sendRpcFailure(res, rpc, { code: -32600, message: "Invalid JSON-RPC request." }, -32600, 400);
    return;
  }

  try {
    switch (rpc.method) {
      case "message/send": {
        const payload = await runtime.handleMessageSend(rpc.params || {});
        res.json(jsonRpcSuccess(rpc.id, payload.result));
        return;
      }
      case "message/stream": {
        const payload = await runtime.handleMessageSend({
          ...(rpc.params || {}),
          configuration: {
            ...(rpc.params?.configuration || {}),
            blocking: false,
          },
        });
        runtime.createSseSubscriber(payload.task, req, res, rpc.id, {
          includeSnapshot: true,
          replayFrom: payload.task._sequence,
        });
        return;
      }
      case "tasks/get":
        res.json(jsonRpcSuccess(rpc.id, runtime.handleTasksGet(rpc.params || {})));
        return;
      case "tasks/cancel":
        res.json(jsonRpcSuccess(rpc.id, runtime.handleTasksCancel(rpc.params || {})));
        return;
      case "tasks/resubscribe": {
        const params = rpc.params || {};
        const task = runtime.getTask(params.id);
        if (!task) {
          throw Object.assign(new Error(`Task '${params.id}' was not found.`), { code: -32001 });
        }

        const replayFromHeader = req.header("last-event-id");
        const replayFromMetadata =
          params.metadata?.lastEventId ??
          params.metadata?.last_event_id ??
          params.metadata?.sequence;
        const replayFrom = Number.parseInt(String(replayFromHeader ?? replayFromMetadata ?? ""), 10);
        runtime.createSseSubscriber(task, req, res, rpc.id, {
          includeSnapshot: !Number.isFinite(replayFrom),
          replayFrom: Number.isFinite(replayFrom) ? replayFrom : task._sequence,
        });
        return;
      }
      case "tasks/pushNotificationConfig/set":
        res.json(jsonRpcSuccess(rpc.id, runtime.setPushNotificationConfig(rpc.params || {})));
        return;
      case "tasks/pushNotificationConfig/get":
        res.json(jsonRpcSuccess(rpc.id, runtime.getPushNotificationConfig(rpc.params || {})));
        return;
      case "tasks/pushNotificationConfig/list":
        res.json(jsonRpcSuccess(rpc.id, runtime.listPushNotificationConfigs(rpc.params || {})));
        return;
      case "tasks/pushNotificationConfig/delete":
        res.json(jsonRpcSuccess(rpc.id, runtime.deletePushNotificationConfig(rpc.params || {})));
        return;
      default:
        sendRpcFailure(
          res,
          rpc,
          { code: -32601, message: `Method '${rpc.method}' is not implemented.` },
          -32601,
          404,
        );
    }
  } catch (error) {
    sendRpcFailure(res, rpc, error);
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Omni Skills A2A server listening at ${BASE_URL}`);
});
