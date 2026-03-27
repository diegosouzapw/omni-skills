#!/usr/bin/env python3
"""Render a starter packet for LLM system pattern reviews."""

from __future__ import annotations

import json
import sys


def main() -> int:
    system_name = sys.argv[1] if len(sys.argv) > 1 else "llm-system"
    priorities = sys.argv[2] if len(sys.argv) > 2 else "tool safety,structured output,recovery"

    payload = {
        "system_name": system_name,
        "priorities": [item.strip() for item in priorities.split(",") if item.strip()],
        "review_axes": [
            "interaction pattern",
            "schema validation",
            "confirmation boundaries",
            "durability and recovery",
            "auditability",
        ],
        "questions": [
            "What state must survive restart or retry?",
            "Which actions are safe to automate without confirmation?",
            "Which outputs need strict validation before execution?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
