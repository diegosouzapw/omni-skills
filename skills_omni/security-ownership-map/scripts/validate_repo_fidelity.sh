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

echo "repo_root=$(git -C "$repo" rev-parse --show-toplevel)"
echo "head=$(git -C "$repo" rev-parse HEAD)"
echo "branch=$(git -C "$repo" branch --show-current || true)"
echo "is_shallow=$(git -C "$repo" rev-parse --is-shallow-repository)"
echo "partialclonefilter=$(git -C "$repo" config --get remote.origin.partialclonefilter || true)"
echo "extensions_partialclone=$(git -C "$repo" config --get extensions.partialclone || true)"

if git -C "$repo" submodule status --recursive >/dev/null 2>&1; then
  echo "submodules_present=yes"
else
  echo "submodules_present=no_or_uninitialized"
fi
