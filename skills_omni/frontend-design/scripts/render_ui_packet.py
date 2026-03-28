#!/usr/bin/env python3
"""Render a compact UI design packet."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a frontend design starter packet.")
    parser.add_argument("--screen", required=True, help="Screen or flow name.")
    parser.add_argument("--goal", required=True, help="Primary user task.")
    args = parser.parse_args()

    packet = {
        "skill": "frontend-design",
        "screen": args.screen,
        "goal": args.goal,
        "states": ["loading", "empty", "error", "success", "mobile"],
        "review_points": ["hierarchy", "responsiveness", "accessibility", "motion"],
    }
    print(json.dumps(packet, indent=2))


if __name__ == "__main__":
    main()
