#!/usr/bin/env python3
"""Validate that a domain analysis packet contains the expected sections.

Safe, read-only helper. It checks Markdown structure only.
"""

from __future__ import annotations

import pathlib
import sys

REQUIRED_HEADINGS = [
    "## Scope",
    "## Evidence Summary",
    "## Glossary",
    "## Candidate Subdomains",
    "## Proposed Bounded Contexts",
    "## Context Map",
    "## Service-Boundary Options",
    "## Risks",
    "## Stakeholder Validation Questions",
]


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python3 scripts/validate_analysis_packet.py <markdown-file>")
        return 2

    path = pathlib.Path(sys.argv[1])
    if not path.exists() or not path.is_file():
        print(f"Error: file not found: {path}")
        return 2

    text = path.read_text(encoding="utf-8", errors="replace")

    missing = [heading for heading in REQUIRED_HEADINGS if heading not in text]

    if missing:
        print("Analysis packet is missing required sections:")
        for heading in missing:
            print(f"- {heading}")
        return 1

    print("Analysis packet structure looks complete.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
