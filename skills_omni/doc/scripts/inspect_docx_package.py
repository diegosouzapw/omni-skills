#!/usr/bin/env python3
"""Inspect a DOCX package safely and report critical OOXML parts.

This helper treats DOCX as an untrusted ZIP archive and only lists entries.
It does not extract the archive.
"""

from __future__ import annotations

import argparse
import sys
import zipfile
from pathlib import Path

CRITICAL_PARTS = [
    "[Content_Types].xml",
    "_rels/.rels",
    "word/document.xml",
]
OPTIONAL_PARTS = [
    "docProps/core.xml",
    "word/styles.xml",
    "word/numbering.xml",
]


def inspect_docx(path: Path) -> int:
    if not path.exists():
        print(f"ERROR: file not found: {path}", file=sys.stderr)
        return 2
    if not path.is_file():
        print(f"ERROR: not a file: {path}", file=sys.stderr)
        return 2

    try:
        with zipfile.ZipFile(path, "r") as zf:
            names = set(zf.namelist())
            bad = zf.testzip()
            print(f"DOCX package: {path}")
            print(f"Entries: {len(names)}")
            print()

            print("Critical parts:")
            missing_critical = []
            for part in CRITICAL_PARTS:
                ok = part in names
                print(f"  [{'OK' if ok else 'MISSING'}] {part}")
                if not ok:
                    missing_critical.append(part)

            print()
            print("Common optional parts:")
            for part in OPTIONAL_PARTS:
                ok = part in names
                print(f"  [{'OK' if ok else 'ABSENT'}] {part}")

            print()
            headers = sorted(n for n in names if n.startswith("word/header"))
            footers = sorted(n for n in names if n.startswith("word/footer"))
            media = sorted(n for n in names if n.startswith("word/media/"))
            print(f"Header parts: {len(headers)}")
            print(f"Footer parts: {len(footers)}")
            print(f"Media parts: {len(media)}")

            if bad:
                print()
                print(f"WARNING: zip integrity check found first bad entry: {bad}")

            if missing_critical:
                print()
                print("WARNING: package is missing one or more critical OOXML parts.")
                return 1

            return 0
    except zipfile.BadZipFile:
        print("ERROR: file is not a valid ZIP/DOCX package.", file=sys.stderr)
        return 1
    except OSError as exc:
        print(f"ERROR: could not inspect file: {exc}", file=sys.stderr)
        return 1


def main() -> int:
    parser = argparse.ArgumentParser(description="Inspect DOCX package contents safely.")
    parser.add_argument("docx_path", help="Path to the .docx file")
    args = parser.parse_args()
    return inspect_docx(Path(args.docx_path))


if __name__ == "__main__":
    raise SystemExit(main())
