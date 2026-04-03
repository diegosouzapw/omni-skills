#!/usr/bin/env python3
import json
import subprocess
import sys
from typing import Any, Dict, List


FIELDS = "number,title,url,headRefName,baseRefName,isDraft,reviewDecision"


def run_gh(args: List[str]) -> Any:
    proc = subprocess.run(["gh", *args], capture_output=True, text=True)
    if proc.returncode != 0:
        sys.stderr.write(proc.stderr)
        sys.exit(proc.returncode)
    return json.loads(proc.stdout)


def main() -> None:
    pr = run_gh(["pr", "view", "--json", FIELDS])
    number = pr["number"]

    issue_comments = run_gh([
        "api",
        f"repos/{{owner}}/{{repo}}/issues/{number}/comments",
    ])

    review_comments = run_gh([
        "api",
        f"repos/{{owner}}/{{repo}}/pulls/{number}/comments",
    ])

    numbered: List[Dict[str, Any]] = []
    idx = 1

    for comment in issue_comments:
        numbered.append(
            {
                "id": idx,
                "kind": "issue_comment",
                "author": (comment.get("user") or {}).get("login"),
                "created_at": comment.get("created_at"),
                "url": comment.get("html_url"),
                "body": comment.get("body"),
            }
        )
        idx += 1

    for comment in review_comments:
        numbered.append(
            {
                "id": idx,
                "kind": "review_comment",
                "author": (comment.get("user") or {}).get("login"),
                "created_at": comment.get("created_at"),
                "url": comment.get("html_url"),
                "path": comment.get("path"),
                "line": comment.get("line") or comment.get("original_line"),
                "outdated": comment.get("position") is None and comment.get("original_position") is not None,
                "in_reply_to_id": comment.get("in_reply_to_id"),
                "body": comment.get("body"),
            }
        )
        idx += 1

    payload = {
        "pull_request": pr,
        "issue_comments": issue_comments,
        "review_comments": review_comments,
        "numbered_items": numbered,
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")


if __name__ == "__main__":
    main()
