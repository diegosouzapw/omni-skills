#!/usr/bin/env python3
from __future__ import annotations

import json
import sys
from pathlib import Path
import xml.etree.ElementTree as ET


def read_global_json(root: Path):
    path = root / "global.json"
    if not path.exists():
        return None
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        return {"error": f"failed to parse global.json: {exc}"}


def extract_tfms(csproj: Path):
    try:
        tree = ET.parse(csproj)
        root = tree.getroot()
    except Exception as exc:
        return [f"parse-error: {exc}"]

    tfms = []
    for elem in root.iter():
        tag = elem.tag.split("}")[-1]
        if tag in {"TargetFramework", "TargetFrameworks"} and elem.text:
            tfms.append(elem.text.strip())
    return tfms or ["<not-declared>"]


def main() -> int:
    start = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd().resolve()
    if not start.exists():
        print(f"path does not exist: {start}", file=sys.stderr)
        return 1

    root = start
    print(f"Root: {root}")

    global_json = read_global_json(root)
    if global_json is not None:
        print("global.json:")
        print(json.dumps(global_json, indent=2, sort_keys=True))
    else:
        print("global.json: <not found>")

    csproj_files = sorted(root.rglob("*.csproj"))
    if not csproj_files:
        print("No .csproj files found")
        return 0

    print("\nProjects and target frameworks:")
    for csproj in csproj_files:
        rel = csproj.relative_to(root)
        tfms = extract_tfms(csproj)
        print(f"- {rel}: {', '.join(tfms)}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
