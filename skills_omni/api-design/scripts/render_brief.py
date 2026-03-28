#!/usr/bin/env python3
"""Render a compact API design packet."""

from __future__ import annotations

import argparse
import json


def main() -> None:
    parser = argparse.ArgumentParser(description="Render an API design starter packet.")
    parser.add_argument("--resource", required=True, help="Primary resource or workflow name.")
    parser.add_argument("--goal", required=True, help="What the API should make possible.")
    args = parser.parse_args()

    packet = {
        "skill": "api-design",
        "resource": args.resource,
        "goal": args.goal,
        "operations": [
            {"method": "GET", "path": f"/{args.resource}", "purpose": "List or search resources."},
            {"method": "POST", "path": f"/{args.resource}", "purpose": "Create a resource or submit work."},
        ],
        "error_model": ["validation_error", "not_found", "conflict", "rate_limited"],
        "review_points": ["pagination", "compatibility", "idempotency", "observability"],
    }
    print(json.dumps(packet, indent=2))


if __name__ == "__main__":
    main()
