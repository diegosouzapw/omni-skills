#!/usr/bin/env python3
"""Print a safe local inventory of the video-outreach support pack."""

from __future__ import annotations

import argparse
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

PACK = {
    "references": [
        "references/video-outreach-compliance-checklist.md",
        "references/video-outreach-deliverability-checklist.md",
        "references/video-outreach-tool-evaluation-matrix.md",
        "references/video-outreach-metrics-dictionary.md",
        "references/video-outreach-source-manifest.md",
    ],
    "examples": [
        "examples/video-outreach-discovery-questionnaire.md",
        "examples/video-outreach-sequence-blueprints.md",
        "examples/video-outreach-script-templates.md",
    ],
    "agents": [
        "agents/video-outreach-router.md",
    ],
}


def print_group(group: str) -> None:
    print(f"[{group}]")
    for rel_path in PACK[group]:
        path = ROOT / rel_path
        status = "present" if path.exists() else "missing"
        print(f"- {rel_path} ({status})")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--show",
        choices=["all", "references", "examples", "agents"],
        default="all",
        help="Select which support-pack section to print.",
    )
    args = parser.parse_args()

    groups = PACK.keys() if args.show == "all" else [args.show]
    for group in groups:
        print_group(group)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
