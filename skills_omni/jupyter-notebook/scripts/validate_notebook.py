#!/usr/bin/env python3
"""Validate that a Jupyter notebook file is well-formed JSON and, when nbformat
is installed, valid according to notebook schema expectations.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: validate_notebook.py <path-to-notebook.ipynb>", file=sys.stderr)
        return 2

    notebook_path = Path(sys.argv[1])
    if not notebook_path.exists():
        print(f"ERROR: File not found: {notebook_path}", file=sys.stderr)
        return 1

    try:
        raw = notebook_path.read_text(encoding="utf-8")
    except OSError as exc:
        print(f"ERROR: Could not read {notebook_path}: {exc}", file=sys.stderr)
        return 1

    try:
        parsed = json.loads(raw)
    except json.JSONDecodeError as exc:
        print(
            f"ERROR: Invalid JSON in {notebook_path}: line {exc.lineno}, column {exc.colno}: {exc.msg}",
            file=sys.stderr,
        )
        return 1

    try:
        import nbformat  # type: ignore
    except ImportError:
        if isinstance(parsed, dict) and "cells" in parsed and "metadata" in parsed:
            print(
                f"OK: {notebook_path} is valid JSON and has basic notebook keys. "
                "Install nbformat for schema validation."
            )
            return 0
        print(
            f"ERROR: {notebook_path} is valid JSON but does not look like a notebook object.",
            file=sys.stderr,
        )
        return 1

    try:
        nb = nbformat.read(notebook_path, as_version=nbformat.NO_CONVERT)
        nbformat.validate(nb)
    except Exception as exc:  # validation library surfaces multiple exception types
        print(f"ERROR: Notebook validation failed for {notebook_path}: {exc}", file=sys.stderr)
        return 1

    print(f"OK: Notebook validation passed for {notebook_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
