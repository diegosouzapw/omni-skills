#!/usr/bin/env python3
"""Render a starter packet for design token governance review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    initiative = sys.argv[1] if len(sys.argv) > 1 else "token update"
    token_families = sys.argv[2] if len(sys.argv) > 2 else "color,spacing"
    concerns = sys.argv[3] if len(sys.argv) > 3 else "aliases,migration,theme parity"

    payload = {
        "initiative": initiative,
        "token_families": [item.strip() for item in token_families.split(",") if item.strip()],
        "governance_concerns": [item.strip() for item in concerns.split(",") if item.strip()],
        "review_axes": [
            "public token contract",
            "alias and fallback policy",
            "theme override safety",
            "migration and deprecation timing",
            "downstream verification scope",
        ],
        "questions": [
            "Which tokens are public contract versus implementation detail?",
            "What compatibility window is acceptable for consumers?",
            "Which apps or components carry the highest blast radius?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
