#!/usr/bin/env python3
"""Synchronize repository version references from package.json.

This script can also update the root/workspace package.json files so CI does not
need to rely on ``npm version --workspaces``. That npm command can try to
resolve unpublished private workspaces from the registry during automated
releases, which is not what this repository wants.
"""

from __future__ import annotations

import argparse
import json
import os
import re
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[2]


def load_package_version(repo_root: Path) -> str:
    package_path = repo_root / "package.json"
    package = json.loads(package_path.read_text(encoding="utf-8"))
    version = package.get("version")
    if not isinstance(version, str) or not version.strip():
        raise ValueError("package.json does not contain a valid version")
    return version.strip()


def write_package_version(package_path: Path, version: str) -> None:
    package = json.loads(package_path.read_text(encoding="utf-8"))
    package["version"] = version
    package_path.write_text(json.dumps(package, indent=2) + "\n", encoding="utf-8")


def update_workspace_package_versions(repo_root: Path, version: str) -> None:
    root_package_path = repo_root / "package.json"
    root_package = json.loads(root_package_path.read_text(encoding="utf-8"))
    root_package["version"] = version
    root_package_path.write_text(json.dumps(root_package, indent=2) + "\n", encoding="utf-8")

    packages_dir = repo_root / "packages"
    if not packages_dir.is_dir():
        return

    for package_path in sorted(packages_dir.glob("*/package.json")):
        package = json.loads(package_path.read_text(encoding="utf-8"))
        package["version"] = version
        dependencies = package.get("dependencies")
        if isinstance(dependencies, dict):
            for dependency_name in list(dependencies.keys()):
                if dependency_name.startswith("@omni-skills/"):
                    dependencies[dependency_name] = version
        package_path.write_text(json.dumps(package, indent=2) + "\n", encoding="utf-8")


def replace_required(path: Path, pattern: str, replacement: str) -> None:
    content = path.read_text(encoding="utf-8")
    updated, count = re.subn(pattern, replacement, content, flags=re.MULTILINE)
    if count == 0:
        raise ValueError(f"Pattern not found in {path}: {pattern}")
    path.write_text(updated, encoding="utf-8")


def replace_optional(path: Path, pattern: str, replacement: str) -> None:
    content = path.read_text(encoding="utf-8")
    updated = re.sub(pattern, replacement, content, flags=re.MULTILINE)
    path.write_text(updated, encoding="utf-8")


def sync_version(repo_root: Path, version: str) -> None:
    replace_required(
        repo_root / "README.md",
        r"<!-- omni-skills: version=[^;]+;",
        f"<!-- omni-skills: version={version};",
    )
    replace_required(
        repo_root / "docs/README.md",
        r"<!-- omni-skills: version=[^;]+;",
        f"<!-- omni-skills: version={version};",
    )
    replace_required(
        repo_root / "CONTRIBUTING.md",
        r"- package version `[^`]+`",
        f"- package version `{version}`",
    )
    replace_required(
        repo_root / "docs/architecture/CODEBASE-ANALYSIS.md",
        r"\| \*\*Package version\*\* \| `[^`]+` \|",
        f"| **Package version** | `{version}` |",
    )
    replace_required(
        repo_root / "docs/specs/SKILL-MANIFEST.md",
        r"The package is currently `[^`]+`",
        f"The package is currently `{version}`",
    )
    replace_required(
        repo_root / "docs/contributors/SKILL-ANATOMY.md",
        r'The package is currently `[^`]+`',
        f"The package is currently `{version}`",
    )
    replace_required(
        repo_root / "packages/server-api/src/server.js",
        r'version: "[^"]+",',
        f'version: "{version}",',
    )
    replace_required(
        repo_root / "packages/server-mcp/src/server.js",
        r'version: "[^"]+",',
        f'version: "{version}",',
    )
    replace_optional(
        repo_root / "docs/contributors/SKILL-TEMPLATE.md",
        r'version: "[^"]+"',
        f'version: "{version}"',
    )
    replace_optional(
        repo_root / "docs/specs/LOCAL-MCP-SIDECAR.md",
        r"version: '[^']+'",
        f"version: '{version}'",
    )

def main() -> int:
    parser = argparse.ArgumentParser(description="Sync repository version references from package.json.")
    parser.add_argument("--version", default=None, help="Explicit version override")
    parser.add_argument("--repo-root", default=str(REPO_ROOT), help="Repository root")
    parser.add_argument(
        "--update-package-jsons",
        action="store_true",
        help="Also update root/workspace package.json files before syncing references.",
    )
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    version = args.version or load_package_version(repo_root)
    if args.update_package_jsons:
        update_workspace_package_versions(repo_root, version)
    sync_version(repo_root, version)
    print(version)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
