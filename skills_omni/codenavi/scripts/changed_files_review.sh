#!/usr/bin/env bash
set -euo pipefail

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not inside a git repository." >&2
  exit 1
fi

echo "== Changed files =="
git diff --name-only --diff-filter=ACMR HEAD

echo
echo "== Candidate tests/docs/notebook files near changes =="
changed_files="$(git diff --name-only --diff-filter=ACMR HEAD)"

if [ -z "$changed_files" ]; then
  echo "No changed files detected."
  exit 0
fi

printf '%s
' "$changed_files" | while IFS= read -r file; do
  [ -z "$file" ] && continue
  dir="$(dirname "$file")"
  echo "-- For: $file"
  find "$dir" -maxdepth 2 \( -iname '*test*' -o -iname '*spec*' -o -iname '*.md' \) 2>/dev/null | sed 's/^/   /' || true
  if [ -d ".notebook" ]; then
    find .notebook -maxdepth 2 -type f -iname '*.md' 2>/dev/null | sed 's/^/   /' || true
  fi
  echo
 done

echo "== Review prompts =="
echo "- Are all changed files justified by the mission?"
echo "- Did you verify the most important affected path?"
echo "- Do tests, docs, or .notebook updates need follow-up?"
