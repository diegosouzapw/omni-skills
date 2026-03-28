#!/usr/bin/env python3
"""Render a starter packet for accessibility review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    scope_name = sys.argv[1] if len(sys.argv) > 1 else "ui-scope"
    focus = sys.argv[2] if len(sys.argv) > 2 else "keyboard,focus,semantics"
    outputs = sys.argv[3] if len(sys.argv) > 3 else "blockers,follow-ups,implementation notes"

    payload = {
        "scope_name": scope_name,
        "focus": [item.strip() for item in focus.split(",") if item.strip()],
        "outputs": [item.strip() for item in outputs.split(",") if item.strip()],
        "review_axes": [
            "keyboard completion",
            "focus behavior",
            "semantics and naming",
            "contrast and motion",
            "release blockers",
        ],
        "questions": [
            "Can the primary task be completed without a pointer?",
            "Where can focus be lost or trapped incorrectly?",
            "Which issues are blockers versus follow-up improvements?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
