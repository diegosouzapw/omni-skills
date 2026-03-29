#!/usr/bin/env python3
"""Render a simple accessibility audit packet template in Markdown.

This helper is intentionally narrow and local. It does not fetch remote content,
execute scanners, or inspect the target application. It only formats a starter
report so an agent can fill in findings consistently.
"""

from __future__ import annotations

import argparse
from textwrap import dedent


def build_packet(title: str, scope: str, areas: str, environments: str, severity_model: str) -> str:
    area_items = [item.strip() for item in areas.split(",") if item.strip()]
    severity_items = [item.strip() for item in severity_model.split(",") if item.strip()]

    area_lines = "\n".join(f"- {item}" for item in area_items) or "-"
    severity_lines = "\n".join(f"- {item}" for item in severity_items) or "-"

    return dedent(
        f"""
        # Accessibility Audit Packet

        ## Summary

        - **Title:** {title}
        - **Scope:** {scope}
        - **Environments tested:** {environments}

        ## Audit Areas

        {area_lines}

        ## Severity Model

        {severity_lines}

        ## Findings

        ### Finding 1

        - **Severity:**
        - **Affected task:**
        - **User impact:**
        - **Steps to reproduce:**
          1.
          2.
          3.
        - **Observed behavior:**
        - **Expected accessible behavior:**
        - **Relevant WCAG 2.2 mapping:**
        - **Remediation direction:**
        - **Retest status:** pending

        ## Tested Environment Notes

        - Browser:
        - OS / platform:
        - Viewport / device:
        - Assistive technology:
        - Input mode:

        ## Limitations

        -

        ## Retest Checklist

        - [ ] Keyboard path retested
        - [ ] Focus behavior retested
        - [ ] Names, roles, and states rechecked
        - [ ] Dynamic announcements rechecked
        - [ ] Zoom, motion, and touch checks repeated where relevant
        """
    ).strip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Render a starter accessibility audit packet in Markdown.")
    parser.add_argument("--title", required=True, help="Packet title")
    parser.add_argument("--scope", required=True, help="Short scope description")
    parser.add_argument("--areas", required=True, help="Comma-separated audit areas")
    parser.add_argument("--environments", required=True, help="Browsers, OS, or input assumptions")
    parser.add_argument(
        "--severity-model",
        default="blocker,high,medium,low",
        help="Comma-separated severity labels",
    )
    args = parser.parse_args()

    print(
        build_packet(
            title=args.title,
            scope=args.scope,
            areas=args.areas,
            environments=args.environments,
            severity_model=args.severity_model,
        ),
        end="",
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
