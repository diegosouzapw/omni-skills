#!/usr/bin/env python3
"""Render a compact Figma implementation packet."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a Figma implementation starter packet.")
    parser.add_argument("--node", required=True, help="Figma node id or URL.")
    parser.add_argument("--goal", required=True, help="Desired outcome such as inspect, implement, or map.")
    args = parser.parse_args()

    packet = {
        "skill": "omni-figma",
        "node": args.node,
        "goal": args.goal,
        "steps": ["resolve-node", "get-design-context", "get-screenshot", "map-to-repo", "validate"],
        "review_points": ["tokens", "assets", "responsiveness", "accessibility"],
    }
    print(json.dumps(packet, indent=2))


if __name__ == "__main__":
    main()
