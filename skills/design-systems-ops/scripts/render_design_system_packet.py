#!/usr/bin/env python3
"""Render a starter packet for design-system operations review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    change_name = sys.argv[1] if len(sys.argv) > 1 else "design-system-change"
    scope = sys.argv[2] if len(sys.argv) > 2 else "tokens,components,docs"
    focus = sys.argv[3] if len(sys.argv) > 3 else "compatibility,drift,migration"

    payload = {
        "change_name": change_name,
        "scope": [item.strip() for item in scope.split(",") if item.strip()],
        "focus": [item.strip() for item in focus.split(",") if item.strip()],
        "review_axes": [
            "source-of-truth alignment",
            "token blast radius",
            "component compatibility",
            "migration requirements",
            "release coordination",
        ],
        "questions": [
            "Which consumer teams feel this change first?",
            "What drifts today between Figma, code, and docs?",
            "What can ship additively before any destructive removal?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
