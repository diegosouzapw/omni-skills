#!/usr/bin/env python3
import json
import sys
from pathlib import Path

try:
    from pypdf import PdfReader
except Exception as exc:  # pragma: no cover
    print(json.dumps({"error": f"pypdf import failed: {exc}"}, indent=2))
    sys.exit(2)


def main() -> int:
    if len(sys.argv) != 2:
        print(json.dumps({"error": "Usage: pdf_info.py <input.pdf>"}, indent=2))
        return 1

    path = Path(sys.argv[1])
    if not path.is_file():
        print(json.dumps({"error": f"Input file not found: {path}"}, indent=2))
        return 1

    try:
        reader = PdfReader(str(path))
    except Exception as exc:
        print(json.dumps({"error": f"Failed to read PDF: {exc}"}, indent=2))
        return 2

    metadata = {}
    try:
        raw = reader.metadata or {}
        metadata = {str(k): str(v) for k, v in raw.items()}
    except Exception:
        metadata = {}

    try:
        has_outlines = bool(getattr(reader, "outline", None))
    except Exception:
        has_outlines = False

    try:
        has_forms = "/AcroForm" in reader.trailer["/Root"]
    except Exception:
        has_forms = False

    data = {
        "file": str(path),
        "pages": len(reader.pages),
        "encrypted": bool(reader.is_encrypted),
        "has_outlines": has_outlines,
        "has_forms": has_forms,
        "metadata": metadata,
    }
    print(json.dumps(data, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
