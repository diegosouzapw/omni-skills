#!/usr/bin/env bash
set -euo pipefail

HOST="${GH_HOST:-}"

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI is not installed or not on PATH." >&2
  exit 1
fi

if [[ -n "$HOST" ]]; then
  echo "Checking GitHub auth status for host: $HOST"
  gh auth status --hostname "$HOST"
else
  echo "Checking GitHub auth status for default host"
  gh auth status
fi
