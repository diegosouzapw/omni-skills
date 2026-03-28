#!/usr/bin/env python3
"""Render a starter packet for MCP server design review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    server_name = sys.argv[1] if len(sys.argv) > 1 else "mcp-server"
    tools = sys.argv[2] if len(sys.argv) > 2 else "search,lookup"
    transports = sys.argv[3] if len(sys.argv) > 3 else "stdio,stream"

    payload = {
        "server_name": server_name,
        "tools": [item.strip() for item in tools.split(",") if item.strip()],
        "transports": [item.strip() for item in transports.split(",") if item.strip()],
        "review_axes": [
            "canonical contract",
            "schema quality",
            "client compatibility",
            "ops and logging",
            "safety boundaries",
        ],
        "questions": [
            "Which tools must stay local-write only?",
            "What does the smallest safe remote surface look like?",
            "Which clients need first-class config writers versus manual setup?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
