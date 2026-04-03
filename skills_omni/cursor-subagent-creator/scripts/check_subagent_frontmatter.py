#!/usr/bin/env python3
"""Basic local checker for Cursor subagent markdown files.

This is an optional helper for local sanity checks. It is not an official
Cursor validator.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path


def extract_frontmatter(text: str):
    if not text.startswith("---\n"):
        return None, "Missing opening frontmatter delimiter"
    parts = text.split("\n---\n", 1)
    if len(parts) != 2:
        return None, "Missing closing frontmatter delimiter"
    return parts[0][4:], None


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python3 check_subagent_frontmatter.py <path-to-markdown>")
        return 2

    path = Path(sys.argv[1])
    if not path.exists() or not path.is_file():
        print(f"ERROR: file not found: {path}")
        return 2

    text = path.read_text(encoding="utf-8")
    frontmatter, err = extract_frontmatter(text)
    if err:
        print(f"ERROR: {err}")
        return 1

    checks = []
    checks.append(("filename is kebab-case", bool(re.fullmatch(r"[a-z0-9-]+\.md", path.name))))
    checks.append(("has description field", re.search(r"^description:\s+.+$", frontmatter, re.M) is not None))

    readonly_match = re.search(r"^readonly:\s+(true|false)\s*$", frontmatter, re.M)
    background_match = re.search(r"^is_background:\s+(true|false)\s*$", frontmatter, re.M)

    if "readonly:" in frontmatter:
        checks.append(("readonly is boolean", readonly_match is not None))
    if "is_background:" in frontmatter:
        checks.append(("is_background is boolean", background_match is not None))

    failed = False
    for label, ok in checks:
        status = "OK" if ok else "FAIL"
        print(f"[{status}] {label}")
        if not ok:
            failed = True

    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
