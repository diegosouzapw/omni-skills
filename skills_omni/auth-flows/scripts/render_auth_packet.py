#!/usr/bin/env python3
"""Render a starter packet for auth-flow review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    flow_name = sys.argv[1] if len(sys.argv) > 1 else "auth-flow"
    flow_steps = sys.argv[2] if len(sys.argv) > 2 else "sign-in,token refresh,logout"
    focus = sys.argv[3] if len(sys.argv) > 3 else "roles,sessions,recovery"

    payload = {
        "flow_name": flow_name,
        "flow_steps": [item.strip() for item in flow_steps.split(",") if item.strip()],
        "focus_areas": [item.strip() for item in focus.split(",") if item.strip()],
        "review_axes": [
            "identity states",
            "server-side authorization",
            "session lifecycle",
            "privileged actions",
            "recovery safety",
        ],
        "questions": [
            "Where does the server remain authoritative?",
            "Which action needs step-up auth or stronger logging?",
            "Which session transition is still ambiguous?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
