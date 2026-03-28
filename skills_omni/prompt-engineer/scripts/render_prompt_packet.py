#!/usr/bin/env python3
"""Render a starter packet for prompt engineering work."""

from __future__ import annotations

import json
import sys


def main() -> int:
    task = sys.argv[1] if len(sys.argv) > 1 else "task"
    priorities = sys.argv[2] if len(sys.argv) > 2 else "structure,examples,evaluation"

    payload = {
        "task": task,
        "priorities": [item.strip() for item in priorities.split(",") if item.strip()],
        "sections": [
            "role and task",
            "input boundaries",
            "output contract",
            "examples",
            "fallback behavior",
            "evaluation prompt",
        ],
        "questions": [
            "What should the model do when input is incomplete?",
            "Which output fields are mandatory?",
            "What examples would teach the desired pattern best?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
