#!/usr/bin/env bash
set -euo pipefail

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI is required." >&2
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required." >&2
  exit 1
fi

PR_JSON="$(gh pr view --json number,title,url 2>/dev/null)" || {
  echo "Unable to resolve the current branch to an open PR." >&2
  exit 2
}

REPO_JSON="$(gh repo view --json nameWithOwner 2>/dev/null)" || {
  echo "Unable to resolve current repository." >&2
  exit 3
}

PR_NUMBER="$(printf '%s' "$PR_JSON" | python3 -c 'import sys,json; print(json.load(sys.stdin)["number"])')"
PR_TITLE="$(printf '%s' "$PR_JSON" | python3 -c 'import sys,json; print(json.load(sys.stdin)["title"])')"
REPO_FULL="$(printf '%s' "$REPO_JSON" | python3 -c 'import sys,json; print(json.load(sys.stdin)["nameWithOwner"])')"
OWNER="${REPO_FULL%/*}"
REPO="${REPO_FULL#*/}"

echo "PR #${PR_NUMBER} - ${PR_TITLE}"

ISSUE_TMP="$(mktemp)"
REVIEW_TMP="$(mktemp)"
THREAD_TMP="$(mktemp)"
trap 'rm -f "$ISSUE_TMP" "$REVIEW_TMP" "$THREAD_TMP"' EXIT

gh api --paginate "repos/${OWNER}/${REPO}/issues/${PR_NUMBER}/comments" > "$ISSUE_TMP"
gh api --paginate "repos/${OWNER}/${REPO}/pulls/${PR_NUMBER}/comments" > "$REVIEW_TMP"
gh api graphql \
  -f query='query($owner:String!, $repo:String!, $number:Int!) {
    repository(owner:$owner, name:$repo) {
      pullRequest(number:$number) {
        reviewThreads(first:100) {
          nodes {
            isResolved
            path
            comments(first:20) {
              nodes {
                author { login }
                body
              }
            }
          }
        }
      }
    }
  }' \
  -F owner="$OWNER" -F repo="$REPO" -F number="$PR_NUMBER" > "$THREAD_TMP" || true

python3 - "$ISSUE_TMP" "$REVIEW_TMP" "$THREAD_TMP" <<'PY'
import json
import sys
from pathlib import Path

issue_path, review_path, thread_path = sys.argv[1:4]
items = []

def short(text, limit=120):
    text = " ".join((text or "").split())
    return text if len(text) <= limit else text[: limit - 3] + "..."

if Path(issue_path).exists():
    try:
        data = json.loads(Path(issue_path).read_text())
        if isinstance(data, list):
            for c in data:
                items.append({
                    "kind": "issue_comment",
                    "reviewer": ((c.get("user") or {}).get("login") or "unknown"),
                    "path": None,
                    "summary": short(c.get("body", "")),
                })
    except Exception:
        pass

if Path(review_path).exists():
    try:
        data = json.loads(Path(review_path).read_text())
        if isinstance(data, list):
            for c in data:
                items.append({
                    "kind": "review_comment",
                    "reviewer": ((c.get("user") or {}).get("login") or "unknown"),
                    "path": c.get("path"),
                    "summary": short(c.get("body", "")),
                })
    except Exception:
        pass

if Path(thread_path).exists():
    try:
        payload = json.loads(Path(thread_path).read_text())
        nodes = (((payload.get("data") or {}).get("repository") or {}).get("pullRequest") or {}).get("reviewThreads", {}).get("nodes", [])
        for thread in nodes or []:
            if thread.get("isResolved") is False:
                comments = ((thread.get("comments") or {}).get("nodes") or [])
                first = comments[0] if comments else {}
                author = ((first.get("author") or {}).get("login") or "unknown")
                body = first.get("body", "")
                items.append({
                    "kind": "review_thread unresolved",
                    "reviewer": author,
                    "path": thread.get("path"),
                    "summary": short(body),
                })
    except Exception:
        pass

for idx, item in enumerate(items, 1):
    path_part = f" | path={item['path']}" if item.get("path") else ""
    print(f"[{idx}] {item['kind']} | reviewer={item['reviewer']}{path_part}")
    print(f"    Request: {item['summary']}")
PY
