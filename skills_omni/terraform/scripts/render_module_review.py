#!/usr/bin/env python3
"""Render a starter packet for Terraform review work."""

from __future__ import annotations

import json
import sys


def main() -> int:
    stack = sys.argv[1] if len(sys.argv) > 1 else "stack"
    domains = sys.argv[2] if len(sys.argv) > 2 else "networking,compute"
    priorities = sys.argv[3] if len(sys.argv) > 3 else "modules,state,secrets"

    payload = {
        "stack": stack,
        "domains": [item.strip() for item in domains.split(",") if item.strip()],
        "priorities": [item.strip() for item in priorities.split(",") if item.strip()],
        "review_axes": [
            "root vs module split",
            "state boundary",
            "credential strategy",
            "plan clarity",
            "ci validation",
        ],
        "questions": [
            "Which team owns the resulting state?",
            "Which outputs are truly part of the public module contract?",
            "What would count as an unsafe apply?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
