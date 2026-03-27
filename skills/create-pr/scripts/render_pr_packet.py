#!/usr/bin/env python3
"""Render a compact pull-request packet."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a pull-request starter packet.")
    parser.add_argument("--title", required=True, help="PR title.")
    parser.add_argument("--problem", required=True, help="Problem statement.")
    args = parser.parse_args()

    packet = {
        "skill": "create-pr",
        "title": args.title,
        "problem": args.problem,
        "sections": ["summary", "changes", "testing", "risks", "follow_ups"],
        "review_focus": [],
    }
    print(json.dumps(packet, indent=2))


if __name__ == "__main__":
    main()
