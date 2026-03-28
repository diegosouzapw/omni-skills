#!/usr/bin/env python3
"""Render a starter packet for evaluation design."""

from __future__ import annotations

import json
import sys


def main() -> int:
    system_name = sys.argv[1] if len(sys.argv) > 1 else "llm-system"
    axes = sys.argv[2] if len(sys.argv) > 2 else "accuracy,grounding,refusal"
    priorities = sys.argv[3] if len(sys.argv) > 3 else "release gate,manual review"

    payload = {
        "system_name": system_name,
        "axes": [item.strip() for item in axes.split(",") if item.strip()],
        "priorities": [item.strip() for item in priorities.split(",") if item.strip()],
        "eval_families": [
            "happy path",
            "edge cases",
            "refusal behavior",
            "recovery behavior",
            "format adherence",
        ],
        "questions": [
            "Which failure mode should block release immediately?",
            "What requires human review instead of a numeric threshold?",
            "Which hard cases must stay in every regression run?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
