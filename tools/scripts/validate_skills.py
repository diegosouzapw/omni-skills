#!/usr/bin/env python3
"""
omni-skills validator and metadata generator.

Checks every skill directory for:
- SKILL.md existence
- valid YAML frontmatter with required fields
- canonical taxonomy mapping
- maturity, best practices, and quality classification
- generated metadata.json files for each skill and for the repo root
"""

import argparse
import os
import sys

from skill_metadata import (
    build_repo_metadata,
    validate_skill,
    write_repo_metadata,
    write_skill_metadata,
)


def find_paths():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_root = os.path.dirname(os.path.dirname(script_dir))
    return os.path.join(repo_root, "skills"), repo_root


def main():
    parser = argparse.ArgumentParser(description="Validate omni-skills SKILL.md files and generate metadata")
    parser.add_argument("--strict", action="store_true", help="Require all extended frontmatter fields")
    parser.add_argument("--path", default=None, help="Skills directory path (default: auto-detect)")
    parser.add_argument("--no-write-metadata", action="store_true", help="Validate without rewriting metadata files")
    args = parser.parse_args()

    default_skills_dir, repo_root = find_paths()
    skills_dir = args.path or default_skills_dir

    if not os.path.isdir(skills_dir):
        print(f"✗ Skills directory not found: {skills_dir}")
        sys.exit(1)

    print(f"🔍 Validating skills in: {skills_dir}")
    print(f"   Mode: {'strict' if args.strict else 'standard'}")
    print(f"   Metadata: {'disabled' if args.no_write_metadata else 'enabled'}\n")

    counts = {
        "passed": 0,
        "warnings": 0,
        "errors": 0,
        "total": 0,
    }
    skill_records = []

    for entry in sorted(os.listdir(skills_dir)):
        skill_path = os.path.join(skills_dir, entry)
        if not os.path.isdir(skill_path) or entry.startswith("."):
            continue

        counts["total"] += 1
        issues, metadata = validate_skill(skill_path, entry, repo_root, strict=args.strict)
        has_errors = any(level == "ERROR" for level, _ in issues)
        has_warnings = any(level == "WARN" for level, _ in issues)

        if has_errors:
            counts["errors"] += 1
            print(f"  ✗ {entry}")
        elif has_warnings:
            counts["warnings"] += 1
            print(f"  ⚠ {entry}")
        else:
            counts["passed"] += 1
            print(f"  ✓ {entry}")

        if metadata:
            skill_records.append(metadata)
            maturity = metadata["maturity"]
            quality = metadata["quality"]
            best_practices = metadata["best_practices"]
            print(
                "    "
                f"L{maturity['skill_level']} {maturity['skill_level_label']} | "
                f"BP {best_practices['score']}/100 | "
                f"Q {quality['score']}/100 | "
                f"{metadata['canonical_category']}"
            )
            if not args.no_write_metadata:
                write_skill_metadata(skill_path, metadata)

        for level, message in issues:
            prefix = "    ✗" if level == "ERROR" else "    ⚠"
            print(f"{prefix} {message}")

    repo_metadata = build_repo_metadata(repo_root, skill_records, counts)
    if not args.no_write_metadata:
        write_repo_metadata(repo_root, repo_metadata)

    print(f"\n{'━' * 58}")
    print(
        "Results: "
        f"{counts['total']} skills | "
        f"✓ {counts['passed']} passed | "
        f"⚠ {counts['warnings']} warnings | "
        f"✗ {counts['errors']} errors"
    )

    if skill_records:
        summary = repo_metadata["summary"]
        print(
            "Scores: "
            f"quality avg {summary['average_quality_score']} | "
            f"best practices avg {summary['average_best_practices_score']}"
        )
        print("Metadata: metadata.json + skills/*/metadata.json")

    if counts["errors"] > 0:
        print("\n❌ Validation FAILED — fix errors above before committing.")
        sys.exit(1)

    print("\n✅ Validation PASSED")
    sys.exit(0)


if __name__ == "__main__":
    main()
