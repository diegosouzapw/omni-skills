#!/usr/bin/env python3
"""Render a starter packet for incident response."""

from __future__ import annotations

import json
import sys


def main() -> int:
    incident = sys.argv[1] if len(sys.argv) > 1 else "service incident"
    severity = sys.argv[2] if len(sys.argv) > 2 else "sev-2"
    mitigations = sys.argv[3] if len(sys.argv) > 3 else "rollback,feature flag,traffic shift"

    payload = {
        "incident": incident,
        "severity": severity,
        "mitigations": [item.strip() for item in mitigations.split(",") if item.strip()],
        "response_axes": [
            "user impact",
            "blast radius",
            "mitigation ranking",
            "stakeholder cadence",
            "closure criteria",
        ],
        "questions": [
            "What is the safest reversible mitigation right now?",
            "Which responder owns the next status update?",
            "What remains unknown before the incident can be closed?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
