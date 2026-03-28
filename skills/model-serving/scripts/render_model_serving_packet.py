#!/usr/bin/env python3
"""Render a starter packet for model serving review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    service_name = sys.argv[1] if len(sys.argv) > 1 else "model-service"
    rollout = sys.argv[2] if len(sys.argv) > 2 else "shadow,canary,rollback"
    concerns = sys.argv[3] if len(sys.argv) > 3 else "latency,quality,observability"

    payload = {
        "service_name": service_name,
        "rollout_stages": [item.strip() for item in rollout.split(",") if item.strip()],
        "serving_concerns": [item.strip() for item in concerns.split(",") if item.strip()],
        "review_axes": [
            "request and response contract",
            "upstream dependency safety",
            "rollout and rollback control",
            "latency and fallback behavior",
            "observability and ownership",
        ],
        "questions": [
            "Which rollback trigger is decisive?",
            "What breaks if the feature path drifts silently?",
            "Which signals prove the model is healthy beyond HTTP success?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
