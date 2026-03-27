#!/usr/bin/env python3
"""Render a starter packet for Kubernetes manifest reviews."""

from __future__ import annotations

import json
import sys


def main() -> int:
    workload = sys.argv[1] if len(sys.argv) > 1 else "workload"
    resources = sys.argv[2] if len(sys.argv) > 2 else "deployment,service"
    priorities = sys.argv[3] if len(sys.argv) > 3 else "labels,probes,rollout"

    payload = {
        "workload": workload,
        "resources": [item.strip() for item in resources.split(",") if item.strip()],
        "priorities": [item.strip() for item in priorities.split(",") if item.strip()],
        "review_axes": [
            "api version stability",
            "label and selector integrity",
            "probe realism",
            "resource sizing",
            "rollback path",
        ],
        "validation_commands": [
            "kubectl get pods",
            "kubectl describe deploy/<name>",
            "kubectl get endpoints <service>",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
