#!/usr/bin/env python3
"""Render a compact skill discovery packet."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a skill discovery starter packet.")
    parser.add_argument("--query", required=True, help="Capability or workflow to search.")
    parser.add_argument("--tool", default="", help="Preferred client or tool identifier.")
    args = parser.parse_args()

    packet = {
        "skill": "find-skills",
        "query": args.query,
        "tool": args.tool,
        "steps": ["search", "verify-published", "recommend", "install-or-escalate"],
        "fields": ["skill_id", "bundle_id", "tool_support", "risk", "install_command"],
    }
    print(json.dumps(packet, indent=2))


if __name__ == "__main__":
    main()
