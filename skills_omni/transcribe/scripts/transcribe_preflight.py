#!/usr/bin/env python3
"""Basic preflight checks for the transcribe skill.

This helper intentionally performs only local validation and does not make
network calls or inspect secret values.
"""

from __future__ import annotations

import argparse
import os
import shutil
import sys
from pathlib import Path


def check_python() -> tuple[bool, str]:
    return True, sys.version.split()[0]


def check_openai_package() -> tuple[bool, str]:
    try:
        import openai  # noqa: F401
    except Exception as exc:  # pragma: no cover
        return False, f"openai import failed: {exc}"
    return True, "openai package import ok"


def check_api_key() -> bool:
    # Do not log raw values or even state-derived details for credential checks.
    return bool(os.environ.get("OPENAI_API_KEY"))


def check_file(path: Path) -> tuple[bool, str]:
    if not path.exists():
        return False, f"input file does not exist: {path}"
    if not path.is_file():
        return False, f"input path is not a file: {path}"
    return True, f"input file ok: {path}"


def check_out_dir(path: Path) -> tuple[bool, str]:
    try:
        path.mkdir(parents=True, exist_ok=True)
        test_file = path / ".write_test"
        test_file.write_text("ok", encoding="utf-8")
        test_file.unlink()
    except Exception as exc:  # pragma: no cover
        return False, f"output dir not writable: {path} ({exc})"
    return True, f"output dir writable: {path}"


def check_ffmpeg() -> tuple[bool, str]:
    found = shutil.which("ffmpeg") is not None
    return found, "ffmpeg found" if found else "ffmpeg not found"


def main() -> int:
    parser = argparse.ArgumentParser(description="Run local preflight checks for transcription workflows.")
    parser.add_argument("input_file", help="Path to the audio or video file")
    parser.add_argument("--out-dir", default="output/transcribe/preflight", help="Output directory to validate")
    args = parser.parse_args()

    input_path = Path(args.input_file)
    out_dir = Path(args.out_dir)

    api_key_ok = check_api_key()

    checks = [
        ("python", check_python()),
        ("openai", check_openai_package()),
        ("input", check_file(input_path)),
        ("out_dir", check_out_dir(out_dir)),
        ("ffmpeg", check_ffmpeg()),
    ]

    failed = False
    for name, (ok, message) in checks:
        status = "OK" if ok else "WARN"
        print(f"[{status}] {name}: {message}")
        if name in {"openai", "input", "out_dir"} and not ok:
            failed = True

    print("[INFO] api_key: credential preflight completed")
    if not api_key_ok:
        failed = True

    if failed:
        print("\nPreflight failed. Fix required warnings before making API calls.")
        return 1

    print("\nPreflight passed. You can continue with transcription.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
