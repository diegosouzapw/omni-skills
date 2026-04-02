#!/usr/bin/env python3
"""Verify that an installed skill exists under CODEX_HOME/skills and contains SKILL.md."""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path


def default_codex_home() -> Path:
    env = os.environ.get("CODEX_HOME")
    if env:
        return Path(env).expanduser()
    return Path("~/.codex").expanduser()


def main() -> int:
    parser = argparse.ArgumentParser(description="Verify an installed skill directory")
    parser.add_argument("--skill", required=True, help="Installed skill directory name")
    parser.add_argument(
        "--dest-root",
        help="Override destination root; defaults to $CODEX_HOME/skills",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Emit JSON instead of human-readable output",
    )
    args = parser.parse_args()

    root = Path(args.dest_root).expanduser() if args.dest_root else default_codex_home() / "skills"
    skill_dir = root / args.skill
    skill_md = skill_dir / "SKILL.md"

    result = {
        "skill": args.skill,
        "destination_root": str(root),
        "skill_dir": str(skill_dir),
        "exists": skill_dir.is_dir(),
        "has_skill_md": skill_md.is_file(),
        "ok": skill_dir.is_dir() and skill_md.is_file(),
    }

    if args.json:
        print(json.dumps(result, indent=2))
    else:
        print(f"Skill: {args.skill}")
        print(f"Destination root: {root}")
        print(f"Skill directory: {skill_dir}")
        print(f"Exists: {'yes' if result['exists'] else 'no'}")
        print(f"Has SKILL.md: {'yes' if result['has_skill_md'] else 'no'}")
        print(f"Verification: {'ok' if result['ok'] else 'failed'}")

    return 0 if result["ok"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
