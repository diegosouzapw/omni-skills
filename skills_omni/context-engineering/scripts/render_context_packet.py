#!/usr/bin/env python3
"""Render a starter packet for context engineering review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    system_name = sys.argv[1] if len(sys.argv) > 1 else "agent"
    sections = sys.argv[2] if len(sys.argv) > 2 else "system prompt,retrieval,memory,tools"
    priorities = sys.argv[3] if len(sys.argv) > 3 else "ordering,budget,provenance"

    payload = {
        "system_name": system_name,
        "sections": [item.strip() for item in sections.split(",") if item.strip()],
        "priorities": [item.strip() for item in priorities.split(",") if item.strip()],
        "review_axes": [
            "context order",
            "budget discipline",
            "retrieval shaping",
            "memory boundaries",
            "tool contract clarity",
        ],
        "questions": [
            "Which section should be removed first when budget gets tight?",
            "Which evidence must preserve provenance?",
            "Where is stale or noisy context entering the packet?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
