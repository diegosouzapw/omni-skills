#!/usr/bin/env python3
"""Render a starter packet for observability review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    service = sys.argv[1] if len(sys.argv) > 1 else "service"
    signals = sys.argv[2] if len(sys.argv) > 2 else "latency,error-rate,traffic,saturation"
    priorities = sys.argv[3] if len(sys.argv) > 3 else "slo,alert quality,trace coverage"

    payload = {
        "service": service,
        "signals": [item.strip() for item in signals.split(",") if item.strip()],
        "priorities": [item.strip() for item in priorities.split(",") if item.strip()],
        "review_axes": [
            "golden signals",
            "alert routing",
            "traceability",
            "runbook coverage",
            "slo contract",
        ],
        "questions": [
            "Which user symptom should page first?",
            "How do operators pivot from alert to dashboard to trace?",
            "Which failure mode is still missing explicit telemetry?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
