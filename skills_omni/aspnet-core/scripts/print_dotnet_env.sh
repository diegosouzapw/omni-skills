#!/usr/bin/env bash
set -euo pipefail

if ! command -v dotnet >/dev/null 2>&1; then
  echo "dotnet is not installed or not on PATH" >&2
  exit 1
fi

echo "== dotnet --info =="
dotnet --info

echo
echo "== dotnet --list-sdks =="
dotnet --list-sdks || true

echo
echo "== dotnet --list-runtimes =="
dotnet --list-runtimes || true
