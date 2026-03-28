#!/usr/bin/env python3
"""Render a compact security audit plan."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a security audit starter packet.")
    parser.add_argument("--target", required=True, help="System or component under review.")
    parser.add_argument("--scope", required=True, help="Audit scope.")
    args = parser.parse_args()

    packet = {
        "skill": "security-auditor",
        "target": args.target,
        "scope": args.scope,
        "sections": ["assets", "trust_boundaries", "findings", "severity", "remediation"],
        "evidence_sources": ["code", "config", "runtime", "docs"],
    }
    print(json.dumps(packet, indent=2))


if __name__ == "__main__":
    main()
