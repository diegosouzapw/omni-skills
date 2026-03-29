#!/usr/bin/env python3
"""Minimal linter for context packet review artifacts.

Safe, read-only checks for common context-engineering issues:
- missing packet section labels
- missing provenance hints for retrieval material
- oversized files by character count
- broad tool exposure cues
"""

from __future__ import annotations

import argparse
import pathlib
import sys

REQUIRED_SECTIONS = [
    "Instructions",
    "Current Task State",
    "Retrieved Evidence",
    "Tool Contracts",
]

PROVENANCE_HINTS = ["source:", "retrieved_at:", "document_id:", "chunk_id:"]


def lint_text(text: str, max_chars: int) -> list[str]:
    findings: list[str] = []

    for section in REQUIRED_SECTIONS:
        if section.lower() not in text.lower():
            findings.append(f"missing section label: {section}")

    if "retrieved evidence" in text.lower():
        if not any(hint in text.lower() for hint in PROVENANCE_HINTS):
            findings.append("retrieved evidence appears to lack provenance fields")

    if len(text) > max_chars:
        findings.append(
            f"file is larger than max_chars threshold ({len(text)} > {max_chars}); review budget"
        )

    tool_count = text.lower().count("- **name:**") + text.lower().count("tool")
    if tool_count > 20:
        findings.append("tool context may be too broad; review scoped tool exposure")

    return findings


def main() -> int:
    parser = argparse.ArgumentParser(description="Lint a context packet artifact.")
    parser.add_argument("path", help="Path to a markdown or text artifact")
    parser.add_argument(
        "--max-chars",
        type=int,
        default=12000,
        help="Soft size limit for the artifact",
    )
    args = parser.parse_args()

    path = pathlib.Path(args.path)
    if not path.is_file():
        print(f"error: file not found: {path}", file=sys.stderr)
        return 2

    text = path.read_text(encoding="utf-8")
    findings = lint_text(text, args.max_chars)

    if not findings:
        print("OK: no findings")
        return 0

    print("Findings:")
    for item in findings:
        print(f"- {item}")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
