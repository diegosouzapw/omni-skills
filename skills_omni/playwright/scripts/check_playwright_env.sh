#!/usr/bin/env bash
set -euo pipefail

printf 'Checking Playwright CLI environment\n'

check_cmd() {
  local cmd="$1"
  if command -v "$cmd" >/dev/null 2>&1; then
    printf 'OK: %s -> %s\n' "$cmd" "$(command -v "$cmd")"
  else
    printf 'MISSING: %s\n' "$cmd"
  fi
}

check_cmd node
check_cmd npm
check_cmd npx

CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
PWCLI="${PWCLI:-$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh}"

if [ -x "$PWCLI" ]; then
  printf 'OK: wrapper -> %s\n' "$PWCLI"
else
  printf 'MISSING OR NOT EXECUTABLE: wrapper -> %s\n' "$PWCLI"
fi

printf '\nIf browser launch still fails, review references/setup-and-prereqs.md and references/troubleshooting.md\n'
