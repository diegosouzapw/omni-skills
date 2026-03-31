#!/usr/bin/env python3
"""Verify that source-controlled project identity stays aligned with package metadata."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[2]
TOPIC_PATTERN = re.compile(r"^[a-z0-9][a-z0-9-]{0,49}$")


def load_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def normalize_repository_url(value: str) -> str:
    normalized = value.strip()
    if normalized.startswith("git+"):
        normalized = normalized[4:]
    if normalized.endswith(".git"):
        normalized = normalized[:-4]
    return normalized.rstrip("/")


def validate_topics(topics: list[str]) -> list[str]:
    errors: list[str] = []
    if not topics:
        return ["github_topics must contain at least one topic"]
    if len(topics) > 20:
        errors.append("github_topics must contain at most 20 topics")
    lowered = [topic.strip().lower() for topic in topics if isinstance(topic, str)]
    if len(lowered) != len(topics):
        errors.append("github_topics entries must all be strings")
        return errors
    if len(set(lowered)) != len(lowered):
        errors.append("github_topics must not contain duplicates")
    for topic in lowered:
        if not TOPIC_PATTERN.fullmatch(topic):
            errors.append(f"invalid GitHub topic: {topic}")
    return errors


def build_report(repo_root: Path) -> dict[str, Any]:
    identity = load_json(repo_root / "data" / "project_identity.json")
    package = load_json(repo_root / "package.json")
    readme = (repo_root / "README.md").read_text(encoding="utf-8")
    errors: list[str] = []

    expected_github_url = f"https://github.com/{identity['github_owner']}/{identity['repo_slug']}"
    expected_issues_url = f"{expected_github_url}/issues"
    expected_discussions_url = f"{expected_github_url}/discussions"
    expected_homepage = f"{expected_github_url}#readme"

    if identity["github_url"] != expected_github_url:
        errors.append("project_identity.github_url does not match github_owner/repo_slug")
    if identity["issues_url"] != expected_issues_url:
        errors.append("project_identity.issues_url does not match github_url")
    if identity["discussions_url"] != expected_discussions_url:
        errors.append("project_identity.discussions_url does not match github_url")
    if identity["homepage_url"] != expected_homepage:
        errors.append("project_identity.homepage_url does not match github_url")
    if identity["primary_npx_command"] != f"npx {identity['npm_package']}":
        errors.append("project_identity.primary_npx_command does not match npm_package")
    if identity["legacy_npx_command"] != f"npx {identity['legacy_npm_package']}":
        errors.append("project_identity.legacy_npx_command does not match legacy_npm_package")

    errors.extend(validate_topics(identity.get("github_topics", [])))

    repository_url = normalize_repository_url(str(package.get("repository", {}).get("url", "")))
    if str(package.get("name")) != identity["npm_package"]:
        errors.append("package.json name does not match project_identity.npm_package")
    if str(package.get("description")) != identity["npm_description"]:
        errors.append("package.json description does not match project_identity.npm_description")
    if str(package.get("homepage")) != identity["homepage_url"]:
        errors.append("package.json homepage does not match project_identity.homepage_url")
    if str(package.get("bugs", {}).get("url", "")) != identity["issues_url"]:
        errors.append("package.json bugs.url does not match project_identity.issues_url")
    if repository_url != normalize_repository_url(identity["github_url"]):
        errors.append("package.json repository.url does not match project_identity.github_url")

    bins = package.get("bin", {})
    if bins.get(identity["primary_cli_command"]) != "tools/bin/cli.js":
        errors.append("primary CLI bin alias is missing from package.json")
    if bins.get(identity["legacy_cli_command"]) != "tools/bin/cli.js":
        errors.append("legacy CLI bin alias is missing from package.json")
    if bins.get(f"{identity['primary_cli_command']}-install") != "tools/bin/install.js":
        errors.append("primary install bin alias is missing from package.json")
    if bins.get(f"{identity['legacy_cli_command']}-install") != "tools/bin/install.js":
        errors.append("legacy install bin alias is missing from package.json")

    if f"# 🧠 {identity['display_name']}" not in readme:
        errors.append("README.md hero title does not match project_identity.display_name")
    if identity["primary_npx_command"] not in readme:
        errors.append("README.md does not mention the primary npx command")

    return {
        "identity_path": str(repo_root / "data" / "project_identity.json"),
        "package_path": str(repo_root / "package.json"),
        "readme_path": str(repo_root / "README.md"),
        "ok": not errors,
        "errors": errors,
        "expected": {
            "github_url": identity["github_url"],
            "issues_url": identity["issues_url"],
            "homepage_url": identity["homepage_url"],
            "npm_package": identity["npm_package"],
            "npm_description": identity["npm_description"],
            "github_topics": identity["github_topics"],
        },
        "actual": {
            "package_name": package.get("name"),
            "package_description": package.get("description"),
            "package_homepage": package.get("homepage"),
            "package_repository": repository_url,
            "package_bugs_url": package.get("bugs", {}).get("url"),
        },
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Verify project identity and package metadata consistency.")
    parser.add_argument("--repo-root", default=str(REPO_ROOT), help="Repository root")
    args = parser.parse_args()

    report = build_report(Path(args.repo_root).resolve())
    print(json.dumps(report, indent=2))
    return 0 if report["ok"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
