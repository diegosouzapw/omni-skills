#!/usr/bin/env python3
"""Render a starter packet for Docker image planning."""

from __future__ import annotations

import json
import sys


def main() -> int:
    service = sys.argv[1] if len(sys.argv) > 1 else "service"
    runtime = sys.argv[2] if len(sys.argv) > 2 else "application runtime"
    priorities = sys.argv[3] if len(sys.argv) > 3 else "size,rebuild speed,security"

    payload = {
        "service": service,
        "runtime_target": runtime,
        "priorities": [item.strip() for item in priorities.split(",") if item.strip()],
        "review_axes": [
            "build context",
            "layer ordering",
            "multi-stage separation",
            "runtime user",
            "debug path",
        ],
        "questions": [
            "What must exist in the runtime image?",
            "Which files change most often during development?",
            "Which directories must remain writable at runtime?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
