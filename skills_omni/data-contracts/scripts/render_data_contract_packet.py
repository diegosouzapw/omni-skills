#!/usr/bin/env python3
"""Render a starter packet for data contract review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    surface = sys.argv[1] if len(sys.argv) > 1 else "dataset"
    participants = sys.argv[2] if len(sys.argv) > 2 else "producer,consumer"
    concerns = sys.argv[3] if len(sys.argv) > 3 else "schema,freshness,ownership"

    payload = {
        "surface": surface,
        "participants": [item.strip() for item in participants.split(",") if item.strip()],
        "contract_concerns": [item.strip() for item in concerns.split(",") if item.strip()],
        "review_axes": [
            "schema compatibility",
            "semantic stability",
            "freshness expectations",
            "ownership and escalation",
            "backfill or replay policy",
        ],
        "questions": [
            "Who owns the producer side of the contract?",
            "Which downstream systems break first if this changes?",
            "Does this require versioning or a compatibility window?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
