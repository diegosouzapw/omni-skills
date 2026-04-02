#!/usr/bin/env bash
set -euo pipefail

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI is not installed or not on PATH." >&2
  exit 1
fi

if ! command -v git >/dev/null 2>&1; then
  echo "git is not installed or not on PATH." >&2
  exit 1
fi

echo "== gh auth status =="
if ! gh auth status; then
  echo
  echo "GitHub CLI authentication is missing or invalid." >&2
  echo "Ask the user to run: gh auth login" >&2
  exit 2
fi

echo
BRANCH="$(git branch --show-current 2>/dev/null || true)"
echo "== current branch =="
echo "${BRANCH:-<unknown>}"

echo
echo "== repo =="
if ! gh repo view --json nameWithOwner,url; then
  echo "Unable to resolve current repository via gh." >&2
  exit 3
fi

echo
echo "== pull request for current branch =="
if ! gh pr view --json number,title,url,headRefName,baseRefName; then
  echo "No open PR is associated with the current branch, or repository context is wrong." >&2
  exit 4
fi
