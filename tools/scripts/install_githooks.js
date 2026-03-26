#!/usr/bin/env node

"use strict";

const path = require("node:path");
const childProcess = require("node:child_process");

const ROOT = path.resolve(__dirname, "..", "..");

function main() {
  childProcess.execFileSync("git", ["config", "core.hooksPath", ".githooks"], {
    cwd: ROOT,
    stdio: "inherit",
  });
  console.log("Configured git hooks path to .githooks");
}

main();
