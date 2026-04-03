#!/usr/bin/env python3
"""Print a concise AI SDR readiness checklist.

Safe local helper. It performs no network access and modifies no files.
"""

from __future__ import annotations

import argparse


LAUNCH_REVIEW = [
    "Confirm target geographies and channels.",
    "Confirm suppression and opt-out handling.",
    "Confirm CRM owner and handoff SLA.",
    "Confirm qualification criteria and disqualifiers.",
    "Confirm sender authentication readiness (SPF, DKIM, DMARC).",
    "Confirm unsubscribe handling and complaint monitoring.",
    "Confirm pilot scope, pause conditions, and review cadence.",
]

DIAGNOSIS = [
    "Collect current sender health metrics.",
    "Collect sample replies and meeting outcomes.",
    "Review qualification thresholds and disqualifiers.",
    "Review reply classification rules and escalation paths.",
    "Review CRM state transitions and owner mapping.",
    "List immediate containment steps before any scaling.",
]


def main() -> int:
    parser = argparse.ArgumentParser(description="Print AI SDR readiness prompts.")
    parser.add_argument(
        "--mode",
        choices=["launch-review", "diagnosis"],
        default="launch-review",
        help="Checklist mode to print.",
    )
    args = parser.parse_args()

    items = LAUNCH_REVIEW if args.mode == "launch-review" else DIAGNOSIS
    print(f"AI SDR checklist mode: {args.mode}\n")
    for idx, item in enumerate(items, start=1):
        print(f"{idx}. {item}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
