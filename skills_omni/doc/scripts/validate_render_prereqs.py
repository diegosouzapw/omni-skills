#!/usr/bin/env python3
"""Validate local prerequisites for DOCX rendering.

Checks for required binaries and optional Python packages without making changes.
"""

from __future__ import annotations

import importlib.util
import shutil
import sys
import tempfile
from pathlib import Path


def has_module(name: str) -> bool:
    return importlib.util.find_spec(name) is not None


def main() -> int:
    checks = []

    soffice = shutil.which("soffice")
    pdftoppm = shutil.which("pdftoppm")
    checks.append(("soffice", bool(soffice), soffice or "not found"))
    checks.append(("pdftoppm", bool(pdftoppm), pdftoppm or "not found"))
    checks.append(("python-docx", has_module("docx"), "import docx"))
    checks.append(("pdf2image", has_module("pdf2image"), "import pdf2image"))

    tmp_ok = False
    tmp_note = "unavailable"
    try:
        with tempfile.TemporaryDirectory() as tmpdir:
            probe = Path(tmpdir) / "write_test.txt"
            probe.write_text("ok", encoding="utf-8")
            tmp_ok = True
            tmp_note = tmpdir
    except OSError as exc:
        tmp_note = str(exc)
    checks.append(("temp directory writable", tmp_ok, tmp_note))

    print("DOCX render prerequisite check")
    print()
    failures = 0
    for name, ok, note in checks:
        status = "OK" if ok else "MISSING"
        print(f"[{status}] {name}: {note}")
        if not ok:
            failures += 1

    print()
    if failures:
        print("Rendering is not fully ready. You may still do structural DOCX work, but do not claim visual fidelity without review artifacts.")
        return 1

    print("All checked prerequisites are available.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
