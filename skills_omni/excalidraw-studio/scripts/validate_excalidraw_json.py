#!/usr/bin/env python3
"""Conservative validator for Excalidraw JSON scene files.

This script intentionally performs only lightweight checks:
- strict JSON parse
- top-level object shape
- presence and basic types of `elements`, `appState`, `files`
- duplicate element-id detection

It does not claim full schema validation.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path


def fail(message: str, code: int = 1) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(code)


def main() -> None:
    if len(sys.argv) != 2:
        fail("usage: validate_excalidraw_json.py <path-to-file>")

    path = Path(sys.argv[1])
    if not path.exists():
        fail(f"file not found: {path}")
    if not path.is_file():
        fail(f"not a file: {path}")

    try:
        raw = path.read_text(encoding="utf-8")
    except Exception as exc:
        fail(f"unable to read file: {exc}")

    try:
        data = json.loads(raw)
    except json.JSONDecodeError as exc:
        fail(f"invalid JSON at line {exc.lineno} column {exc.colno}: {exc.msg}")

    if not isinstance(data, dict):
        fail("top-level JSON value must be an object")

    required = {
        "elements": list,
        "appState": dict,
        "files": dict,
    }

    for key, expected_type in required.items():
        if key not in data:
            fail(f"missing top-level key: {key}")
        if not isinstance(data[key], expected_type):
            fail(f"top-level key `{key}` must be of type {expected_type.__name__}")

    element_ids = []
    for idx, element in enumerate(data["elements"]):
        if not isinstance(element, dict):
            fail(f"element at index {idx} is not an object")
        element_id = element.get("id")
        if element_id is None:
            fail(f"element at index {idx} is missing `id`")
        if not isinstance(element_id, str) or not element_id.strip():
            fail(f"element at index {idx} has invalid `id`")
        element_ids.append(element_id)

    duplicates = sorted({element_id for element_id in element_ids if element_ids.count(element_id) > 1})
    if duplicates:
        fail(f"duplicate element ids found: {', '.join(duplicates)}")

    print(f"OK: {path}")
    print(f"- parsed strict JSON successfully")
    print(f"- found top-level keys: elements, appState, files")
    print(f"- element count: {len(data['elements'])}")
    print("- note: this is a conservative structural check, not full schema validation")


if __name__ == "__main__":
    main()
