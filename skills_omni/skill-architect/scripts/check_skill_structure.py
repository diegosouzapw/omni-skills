#!/usr/bin/env python3
"""Narrow structural checks for a SKILL.md file.

This helper is intentionally read-only. It checks a few high-value rules:
- file exists
- frontmatter is present
- name field exists
- description field exists and appears single-line
- common required headings exist

It does not modify files.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

REQUIRED_HEADINGS = [
    "## Overview",
    "## When to Use This Skill",
    "## Workflow",
    "## Examples",
    "## Best Practices",
    "## Troubleshooting",
    "## Additional Resources",
]


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: check_skill_structure.py <path-to-SKILL.md>")
        return 2

    path = Path(sys.argv[1])
    issues = []

    if not path.exists():
        print(f"ERROR: File not found: {path}")
        return 2

    text = path.read_text(encoding="utf-8")

    if not text.startswith("---\n"):
        issues.append("Missing opening frontmatter delimiter")
    else:
        parts = text.split("\n---\n", 1)
        if len(parts) < 2:
            issues.append("Missing closing frontmatter delimiter")
        else:
            frontmatter = parts[0][4:]
            body = parts[1]

            if not re.search(r"^name:\s+.+$", frontmatter, re.MULTILINE):
                issues.append("Missing 'name' field in frontmatter")

            description_match = re.search(r"^description:\s+(.+)$", frontmatter, re.MULTILINE)
            if not description_match:
                issues.append("Missing 'description' field in frontmatter")
            else:
                description_value = description_match.group(1)
                if description_value.strip() in {"", '""', "''"}:
                    issues.append("Description is empty")

            for heading in REQUIRED_HEADINGS:
                if heading not in body:
                    issues.append(f"Missing required heading: {heading}")

    if issues:
        print("STRUCTURE CHECK: FAIL")
        for issue in issues:
            print(f"- {issue}")
        return 1

    print("STRUCTURE CHECK: PASS")
    print(f"Checked: {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
