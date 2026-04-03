#!/usr/bin/env bash
set -euo pipefail

repo="${1:-.}"

if ! command -v git >/dev/null 2>&1; then
  echo "git is required" >&2
  exit 1
fi

if ! git -C "$repo" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not a git repository: $repo" >&2
  exit 1
fi

echo "== raw contributor aggregation =="
git -C "$repo" shortlog -sne HEAD || true

echo
echo "== mailmap-aware contributor aggregation =="
git -C "$repo" shortlog -sne --mailmap HEAD || true

echo
echo "If these views differ materially, record identity normalization status before interpreting ownership metrics."
