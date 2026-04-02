#!/usr/bin/env bash
set -euo pipefail

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not inside a Git repository" >&2
  exit 1
fi

branch="$(git symbolic-ref --quiet refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@' || true)"

if [ -n "$branch" ]; then
  printf '%s\n' "$branch"
  exit 0
fi

branch="$(git remote show origin 2>/dev/null | sed -n '/HEAD branch/s/.*: //p' | head -n1 || true)"

if [ -n "$branch" ]; then
  printf '%s\n' "$branch"
  exit 0
fi

current="$(git branch --show-current 2>/dev/null || true)"
if [ "$current" = "main" ] || [ "$current" = "master" ]; then
  printf '%s\n' "$current"
  exit 0
fi

if git show-ref --verify --quiet refs/heads/main; then
  printf 'main\n'
  exit 0
fi

if git show-ref --verify --quiet refs/heads/master; then
  printf 'master\n'
  exit 0
fi

echo "Could not determine default branch" >&2
exit 1
