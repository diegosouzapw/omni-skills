#!/usr/bin/env python3
"""Print default exclusion guidance for component sizing workflows."""

EXCLUSIONS = [
    ("Dependencies", ["node_modules/", "vendor/", ".venv/"]),
    ("Build output", ["dist/", "build/", "out/", "target/"]),
    ("Generated code", ["generated/", "codegen/", "src/generated/"]),
    ("Test artifacts", ["tests/", "__tests__/", "fixtures/", "snapshots/"]),
    ("Docs and assets", ["docs/", "*.md", "*.png", "*.svg"]),
    ("Noise", ["coverage/", ".cache/", "tmp/"]),
]


def main() -> None:
    print("Recommended exclusions for component identification and sizing:\n")
    for label, items in EXCLUSIONS:
        print(f"- {label}:")
        for item in items:
            print(f"  - {item}")
    print("\nAlways state exclusions explicitly in the final report.")


if __name__ == "__main__":
    main()
