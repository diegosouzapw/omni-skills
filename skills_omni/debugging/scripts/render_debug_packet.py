#!/usr/bin/env python3
"""Render a compact debugging packet."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render a debugging starter packet.")
    parser.add_argument("--issue", required=True, help="Observed problem.")
    parser.add_argument("--scope", required=True, help="Impacted area or component.")
    args = parser.parse_args()

    packet = {
        "skill": "debugging",
        "issue": args.issue,
        "scope": args.scope,
        "sections": ["repro", "signals", "hypotheses", "instrumentation", "fix", "verification"],
        "next_action": "capture the smallest reliable reproduction",
    }
    print(json.dumps(packet, indent=2))


if __name__ == "__main__":
    main()
