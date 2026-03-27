import { stdin, stdout, stderr } from "node:process";
import { evaluateTaskOperation } from "./task-operations.js";

async function readStdin() {
  let buffer = "";
  for await (const chunk of stdin) {
    buffer += chunk.toString();
  }
  return buffer;
}

async function main() {
  const raw = await readStdin();
  const payload = JSON.parse(raw || "{}");
  const result = evaluateTaskOperation(payload.operation, payload.input || {});
  stdout.write(`${JSON.stringify(result)}\n`);
}

main().catch((error) => {
  stderr.write(`${error instanceof Error ? error.stack || error.message : String(error)}\n`);
  process.exitCode = 1;
});
