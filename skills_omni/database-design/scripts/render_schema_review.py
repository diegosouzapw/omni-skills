#!/usr/bin/env python3
"""Render a compact schema review packet."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a database design starter packet.")
    parser.add_argument("--domain", required=True, help="Business domain or subsystem.")
    parser.add_argument("--goal", required=True, help="Primary workflow to support.")
    args = parser.parse_args()

    packet = {
        "skill": "database-design",
        "domain": args.domain,
        "goal": args.goal,
        "entities": [],
        "constraints": [],
        "indexes": [],
        "review_points": ["access_patterns", "migrations", "integrity", "retention"],
    }
    print(json.dumps(packet, indent=2))


if __name__ == "__main__":
    main()
