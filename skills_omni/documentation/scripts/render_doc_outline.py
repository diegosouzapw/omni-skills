#!/usr/bin/env python3
"""Render a compact documentation outline."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a documentation starter packet.")
    parser.add_argument("--audience", required=True, help="Target reader.")
    parser.add_argument("--goal", required=True, help="Decision or task the doc should unblock.")
    args = parser.parse_args()

    packet = {
        "skill": "documentation",
        "audience": args.audience,
        "goal": args.goal,
        "sections": ["overview", "prerequisites", "steps", "verification", "troubleshooting"],
        "doc_type": "guide",
    }
    print(json.dumps(packet, indent=2))


if __name__ == "__main__":
    main()
