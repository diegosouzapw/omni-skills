#!/usr/bin/env python3
"""Render a compact brainstorming matrix."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a brainstorming matrix starter.")
    parser.add_argument("--topic", required=True, help="Brainstorming topic.")
    parser.add_argument("--goal", required=True, help="Desired outcome.")
    args = parser.parse_args()

    matrix = {
        "skill": "brainstorming",
        "topic": args.topic,
        "goal": args.goal,
        "idea_buckets": ["safe-bets", "high-upside", "operational", "wildcards"],
        "scoring_axes": ["impact", "effort", "risk", "reversibility"],
        "next_step": "rank top 3 ideas and choose a validation experiment",
    }
    print(json.dumps(matrix, indent=2))


if __name__ == "__main__":
    main()
