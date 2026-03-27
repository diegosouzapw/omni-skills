#!/usr/bin/env python3
"""Render a compact architecture decision record."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render an architecture decision record starter.")
    parser.add_argument("--topic", required=True, help="Decision topic.")
    parser.add_argument("--context", required=True, help="Short problem statement.")
    args = parser.parse_args()

    record = {
        "skill": "architecture",
        "topic": args.topic,
        "context": args.context,
        "options": [],
        "chosen_option": None,
        "tradeoffs": ["complexity", "operability", "performance", "change_cost"],
        "migration_notes": [],
    }
    print(json.dumps(record, indent=2))


if __name__ == "__main__":
    main()
