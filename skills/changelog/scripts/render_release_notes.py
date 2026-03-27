#!/usr/bin/env python3
"""Render a compact release-notes scaffold."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a changelog packet starter.")
    parser.add_argument("--version", required=True, help="Release version.")
    parser.add_argument("--summary", required=True, help="One-line release summary.")
    args = parser.parse_args()

    packet = {
        "skill": "changelog",
        "version": args.version,
        "summary": args.summary,
        "sections": ["added", "changed", "fixed", "security", "migration"],
        "breaking_changes": [],
    }
    print(json.dumps(packet, indent=2))


if __name__ == "__main__":
    main()
