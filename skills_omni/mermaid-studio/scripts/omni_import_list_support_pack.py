#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path

root = Path(__file__).resolve().parents[1]
for path in sorted(root.rglob('*')):
    if path.is_file():
        print(path.relative_to(root).as_posix())
