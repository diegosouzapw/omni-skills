#!/usr/bin/env python3
"""Render a narrow markdown data contract packet from CLI inputs."""

from __future__ import annotations

import argparse
from typing import List


def split_csv(value: str) -> List[str]:
    return [item.strip() for item in value.split(",") if item.strip()]


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a simple data contract review packet")
    parser.add_argument("--name", required=True, help="Contract name")
    parser.add_argument("--surface", required=True, help="Contract surface, for example event, table, or metric")
    parser.add_argument("--owners", default="", help="Comma-separated owners")
    parser.add_argument("--consumers", default="", help="Comma-separated consumers")
    parser.add_argument("--checks", default="", help="Comma-separated contract checks")
    args = parser.parse_args()

    owners = split_csv(args.owners)
    consumers = split_csv(args.consumers)
    checks = split_csv(args.checks)

    print(f"# Data Contract Packet: {args.name}")
    print()
    print("## Identity")
    print(f"- **Surface:** {args.surface}")
    print(f"- **Name:** {args.name}")
    print()
    print("## Ownership")
    if owners:
        for owner in owners:
            print(f"- {owner}")
    else:
        print("- owner not yet specified")
    print()
    print("## Known Consumers")
    if consumers:
        for consumer in consumers:
            print(f"- {consumer}")
    else:
        print("- consumer list not yet specified")
    print()
    print("## Required Checks")
    if checks:
        for check in checks:
            print(f"- {check}")
    else:
        print("- checks not yet specified")
    print()
    print("## Decision Stub")
    print("- Classification: additive / behavior-changing / breaking")
    print("- Rollout: ")
    print("- Rollback: ")
    print("- Missing evidence: ")


if __name__ == "__main__":
    main()
