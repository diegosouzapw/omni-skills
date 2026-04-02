#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
payload = json.loads((root / 'EXTERNAL_SOURCE.json').read_text(encoding='utf-8'))
print(json.dumps(payload, indent=2, ensure_ascii=True))
