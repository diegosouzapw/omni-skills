#!/usr/bin/env python3
import sys
from pathlib import Path

REQUIRED_MARKERS = [
    "scope",
    "target",
    "automated",
    "manual",
    "findings",
    "residual",
]


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python3 scripts/check_manual_a11y_packet.py <packet.md>", file=sys.stderr)
        return 1

    path = Path(sys.argv[1])
    if not path.exists():
        print(f"File not found: {path}", file=sys.stderr)
        return 1

    text = path.read_text(encoding="utf-8").lower()
    missing = [marker for marker in REQUIRED_MARKERS if marker not in text]

    if missing:
        print("Packet is missing expected sections:")
        for marker in missing:
            print(f"- {marker}")
        return 2

    print("Packet includes all expected high-level sections.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
