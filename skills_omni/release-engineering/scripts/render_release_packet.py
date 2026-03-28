#!/usr/bin/env python3
"""Render a starter packet for release engineering review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    release_name = sys.argv[1] if len(sys.argv) > 1 else "release"
    change_set = sys.argv[2] if len(sys.argv) > 2 else "service rollout,config change"
    stages = sys.argv[3] if len(sys.argv) > 3 else "preflight,canary,full rollout"

    payload = {
        "release_name": release_name,
        "change_set": [item.strip() for item in change_set.split(",") if item.strip()],
        "stages": [item.strip() for item in stages.split(",") if item.strip()],
        "review_axes": [
            "preflight readiness",
            "promotion gates",
            "rollback integrity",
            "communication ownership",
            "post-release verification",
        ],
        "questions": [
            "Which step is irreversible?",
            "Who can stop the rollout?",
            "What evidence is required before the next promotion stage?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
