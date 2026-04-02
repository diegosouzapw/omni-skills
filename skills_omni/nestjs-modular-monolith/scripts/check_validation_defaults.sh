#!/usr/bin/env bash
set -euo pipefail

FILE="${1:-apps/api/src/main.ts}"

if [[ ! -f "$FILE" ]]; then
  printf 'File not found: %s\n' "$FILE" >&2
  exit 1
fi

printf '== Validation default checks ==\n'
printf 'File: %s\n\n' "$FILE"

check() {
  local pattern="$1"
  local label="$2"
  if grep -q "$pattern" "$FILE"; then
    printf '[ok] %s\n' "$label"
  else
    printf '[missing] %s\n' "$label"
  fi
}

check "ValidationPipe" "ValidationPipe usage"
check "whitelist:[[:space:]]*true" "whitelist: true"
check "forbidNonWhitelisted:[[:space:]]*true" "forbidNonWhitelisted: true"
check "transform:[[:space:]]*true" "transform: true"
check "enableShutdownHooks" "shutdown hooks enabled"

printf '\nReview any missing items manually. This script performs simple text checks only.\n'
