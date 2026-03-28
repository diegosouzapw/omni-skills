#!/usr/bin/env python3
"""Render a compact rollout gate checklist for a model-serving change."""

from __future__ import annotations

import argparse
from typing import List


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Render rollout gate checklist")
    parser.add_argument("--service", required=True, help="Service name")
    parser.add_argument("--mode", required=True, help="Rollout mode such as canary or shadow")
    parser.add_argument(
        "--success-metric",
        action="append",
        default=[],
        help="Success metric rule, may be provided multiple times",
    )
    parser.add_argument(
        "--abort-threshold",
        action="append",
        default=[],
        help="Abort threshold rule, may be provided multiple times",
    )
    parser.add_argument("--owner", required=True, help="Named owner or on-call group")
    parser.add_argument(
        "--observation-window",
        default="declare before rollout",
        help="Minimum observation window",
    )
    return parser.parse_args()


def render_list(title: str, items: List[str]) -> str:
    if not items:
        return f"## {title}\n- none provided\n"
    lines = [f"## {title}"]
    lines.extend(f"- {item}" for item in items)
    return "\n".join(lines) + "\n"


def main() -> None:
    args = parse_args()

    output = [
        f"# Rollout Gate Checklist: {args.service}",
        "",
        "## Summary",
        f"- Service: {args.service}",
        f"- Rollout mode: {args.mode}",
        f"- Owner: {args.owner}",
        f"- Observation window: {args.observation_window}",
        "",
        render_list("Success Metrics", args.success_metric).rstrip(),
        "",
        render_list("Abort Thresholds", args.abort_threshold).rstrip(),
        "",
        "## Required Operator Checks",
        "- Previous stable version is still deployable",
        "- Dashboards and alerts are available",
        "- Rollback authority is explicit",
        "- Quality proxies are reviewed alongside infra metrics",
        "- Startup/readiness behavior has been checked for the new version",
        "",
        "## Rollback Reminder",
        "- Pause or reverse rollout if any abort threshold is crossed",
        "- Confirm recovery on latency, errors, fallback rate, and quality proxies",
    ]

    print("\n".join(output))


if __name__ == "__main__":
    main()
