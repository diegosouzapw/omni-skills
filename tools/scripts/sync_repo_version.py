#!/usr/bin/env python3
"""Synchronize repository version references from package.json."""

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
        repo_root / "docs/architecture/codebase-analysis.md",
        r"\| \*\*Package version\*\* \| `[^`]+` \|",
        f"| **Package version** | `{version}` |",
    )
    replace_required(
        repo_root / "docs/specs/skill-manifest.md",
        r"The package is currently `[^`]+`",
        f"The package is currently `{version}`",
    )
    replace_required(
        repo_root / "docs/contributors/skill-anatomy.md",
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
        repo_root / "docs/contributors/skill-template.md",
        r'version: "[^"]+"',
        f'version: "{version}"',
    )
    replace_optional(
        repo_root / "docs/specs/local-mcp-sidecar.md",
        r"version: '[^']+'",
        f"version: '{version}'",
    )

def main() -> int:
    parser = argparse.ArgumentParser(description="Sync repository version references from package.json.")
    parser.add_argument("--version", default=None, help="Explicit version override")
    parser.add_argument("--repo-root", default=str(REPO_ROOT), help="Repository root")
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    version = args.version or load_package_version(repo_root)
    sync_version(repo_root, version)
    print(version)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
