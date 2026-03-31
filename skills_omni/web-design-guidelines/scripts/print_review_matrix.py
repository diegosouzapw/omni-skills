#!/usr/bin/env python3
"""Print a small review matrix for web-design-guidelines scenarios."""

import argparse

SCENARIOS = {
    "component": {
        "start": "references/component-pattern-audit-guide.md",
        "checks": [
            "semantics",
            "keyboard support",
            "focus management",
            "role/state relationships",
        ],
    },
    "page": {
        "start": "references/accessibility-review-checklist.md",
        "checks": [
            "landmarks",
            "headings",
            "navigation",
            "contrast",
            "responsive layout",
        ],
    },
    "form": {
        "start": "references/forms-review-guide.md",
        "checks": [
            "labels",
            "instructions",
            "errors",
            "autocomplete",
            "preserved input",
        ],
    },
    "responsive": {
        "start": "references/responsive-and-zoom-test-matrix.md",
        "checks": [
            "320px layout",
            "200-400% zoom",
            "sticky overlap",
            "overflow clipping",
        ],
    },
}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--scenario",
        choices=sorted(SCENARIOS.keys()),
        help="Print one scenario only.",
    )
    args = parser.parse_args()

    scenarios = [args.scenario] if args.scenario else sorted(SCENARIOS.keys())

    for name in scenarios:
        item = SCENARIOS[name]
        print(f"Scenario: {name}")
        print(f"  Start here: {item['start']}")
        print("  Checks:")
        for check in item["checks"]:
            print(f"    - {check}")
        print()

    print("Always fetch the upstream guideline payload before review:")
    print("  https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
