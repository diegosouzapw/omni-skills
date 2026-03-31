#!/usr/bin/env python3
"""Validate public PR contribution boundaries for native intake and curated output."""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Validate whether a PR changes only allowed surfaces for native intake or automation-managed curated output.",
    )
    parser.add_argument("--repository", required=True, help="Base repository full name, for example diegosouzapw/omni-skills.")
    parser.add_argument("--event-path", required=True, help="Path to the GitHub event payload JSON.")
    parser.add_argument("--base-sha", default="", help="Optional git base SHA for changed-file discovery.")
    parser.add_argument("--head-sha", default="", help="Optional git head SHA for changed-file discovery.")
    parser.add_argument(
        "--changed-path",
        action="append",
        default=[],
        help="Explicit changed path. Can be repeated and is mainly intended for local tests.",
    )
    return parser.parse_args()


def load_event(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def git_changed_paths(base_sha: str, head_sha: str) -> list[str]:
    command = ["git", "diff", "--name-only", base_sha, head_sha]
    output = subprocess.check_output(command, text=True)
    return [line.strip() for line in output.splitlines() if line.strip()]


def classify_paths(paths: list[str]) -> tuple[list[str], list[str], list[str]]:
    native = []
    curated = []
    other = []
    for item in paths:
        if item.startswith("skills/"):
            native.append(item)
        elif item.startswith("skills_omni/"):
            curated.append(item)
        elif item == "data/bundles.json":
            continue
        else:
            other.append(item)
    return native, curated, other


def is_allowed_curated_pr(event: dict, repository: str) -> bool:
    pr = event.get("pull_request") or {}
    head = pr.get("head") or {}
    head_repo = ((head.get("repo") or {}).get("full_name")) or ""
    head_ref = head.get("ref") or ""
    title = pr.get("title") or ""
    body = pr.get("body") or ""
    return (
        head_repo == repository
        and head_ref.startswith("skills-omni/pr-")
        and title.startswith("enhance: promote curated skills_omni candidates for #")
        and "This PR was generated automatically from source PR #" in body
    )


def main() -> int:
    args = parse_args()
    event = load_event(Path(args.event_path).resolve())
    event_name = event.get("action") and "pull_request" or ""
    if "pull_request" not in event:
        print("Contribution scope validation is only enforced for pull request payloads.")
        return 0

    changed_paths = list(dict.fromkeys(args.changed_path))
    if not changed_paths:
        if not args.base_sha or not args.head_sha:
            raise SystemExit("Either --changed-path or both --base-sha/--head-sha are required.")
        changed_paths = git_changed_paths(args.base_sha, args.head_sha)

    native, curated, other = classify_paths(changed_paths)

    if curated:
        if other:
            raise SystemExit(
                "Curated skills_omni PRs must not mix unrelated paths.\n"
                f"Disallowed paths: {', '.join(other)}"
            )
        if native:
            raise SystemExit(
                "A PR cannot modify both native intake under skills/ and curated output under skills_omni/.\n"
                "Use native intake PRs for community submissions and let automation open the companion skills_omni PR."
            )
        if not is_allowed_curated_pr(event, args.repository):
            raise SystemExit(
                "Direct public contribution to skills_omni/ is not allowed.\n"
                "Only the automation-authored companion PR from the private enhancer may change skills_omni/."
            )
        print("Validated automation-authored skills_omni contribution scope.")
        return 0

    print(
        json.dumps(
            {
                "native_count": len(native),
                "curated_count": len(curated),
                "other_count": len(other),
                "status": "ok",
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
