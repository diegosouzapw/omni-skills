import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { evaluateTaskOperation } from "./task-operations.js";

const WORKER_ENTRY_PATH = fileURLToPath(new URL("./worker.js", import.meta.url));

class InlineTaskExecutor {
  constructor() {
    this.mode = "inline";
  }

  async execute({ operation, input }) {
    return evaluateTaskOperation(operation, input);
  }
}

class ProcessTaskExecutor {
  constructor(options = {}) {
    this.mode = "process";
    this.command = options.command || process.env.OMNI_SKILLS_A2A_WORKER_COMMAND || process.execPath;
    this.args =
      options.args ||
      (() => {
        const raw = process.env.OMNI_SKILLS_A2A_WORKER_ARGS;
        if (!raw) {
          return [WORKER_ENTRY_PATH];
        }
        try {
          const parsed = JSON.parse(raw);
          return Array.isArray(parsed) ? parsed.map((value) => String(value)) : [WORKER_ENTRY_PATH];
        } catch {
          return [WORKER_ENTRY_PATH];
        }
      })();
    this.cwd = options.cwd || process.cwd();
  }

  async execute({ operation, input }) {
    const payload = JSON.stringify({ operation, input });

    return new Promise((resolve, reject) => {
      const child = spawn(this.command, this.args, {
        cwd: this.cwd,
        stdio: ["pipe", "pipe", "pipe"],
        env: process.env,
      });

      let stdout = "";
      let stderr = "";

      child.stdout.on("data", (chunk) => {
        stdout += chunk.toString();
      });
      child.stderr.on("data", (chunk) => {
        stderr += chunk.toString();
      });
      child.on("error", reject);
      child.on("close", (code) => {
        if (code !== 0) {
          reject(new Error(`External task executor exited with code ${code}: ${stderr.trim() || "no stderr"}`));
          return;
        }

        try {
          resolve(JSON.parse(stdout || "{}"));
        } catch (error) {
          reject(new Error(`External task executor returned invalid JSON: ${error instanceof Error ? error.message : String(error)}`));
        }
      });

      child.stdin.write(payload);
      child.stdin.end();
    });
  }
}

export function createTaskExecutor(options = {}) {
  const mode = String(options.mode || process.env.OMNI_SKILLS_A2A_EXECUTOR || "inline")
    .trim()
    .toLowerCase();

  if (mode === "process" || mode === "external") {
    return new ProcessTaskExecutor(options);
  }

  return new InlineTaskExecutor();
}
