#!/usr/bin/env python3
"""Render a starter packet for threat modeling review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    system = sys.argv[1] if len(sys.argv) > 1 else "system"
    threats = sys.argv[2] if len(sys.argv) > 2 else "privilege escalation,data exposure"
    focus = sys.argv[3] if len(sys.argv) > 3 else "identity,boundaries,mitigations"

    payload = {
        "system": system,
        "priority_threats": [item.strip() for item in threats.split(",") if item.strip()],
        "focus_areas": [item.strip() for item in focus.split(",") if item.strip()],
        "review_axes": [
            "attacker goals",
            "trust boundaries",
            "abuse paths",
            "mitigation priority",
            "residual risk",
        ],
        "questions": [
            "What is trusted without explicit proof?",
            "Which abuse path should block release?",
            "What residual risk is being accepted intentionally?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
