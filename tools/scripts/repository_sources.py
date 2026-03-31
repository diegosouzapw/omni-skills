#!/usr/bin/env python3
"""Parse, validate, and render the public repository-sources registry."""

from __future__ import annotations

import argparse
import json
import re
from collections import Counter
from dataclasses import dataclass
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[2]
REGISTRY_PATH = REPO_ROOT / "REPOSITORY-SOURCES.md"
REGISTRY_START = "<!-- registry:repositories:start -->"
REGISTRY_END = "<!-- registry:repositories:end -->"
STATUS_START = "<!-- registry:status:start -->"
STATUS_END = "<!-- registry:status:end -->"
EXPECTED_COLUMNS = [
    "slug",
    "repo_url",
    "branch",
    "skills_path",
    "status",
    "owner",
    "license",
    "notes",
]
ALLOWED_STATUSES = {"candidate", "tracked", "disabled"}
SLUG_PATTERN = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")


@dataclass(frozen=True)
class RepositorySource:
    slug: str
    repo_url: str
    branch: str
    skills_path: str
    status: str
    owner: str
    license: str
    notes: str


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def extract_block(content: str, start_marker: str, end_marker: str) -> str:
    pattern = re.compile(
        rf"{re.escape(start_marker)}\n(.*?)\n{re.escape(end_marker)}",
        flags=re.DOTALL,
    )
    matches = pattern.findall(content)
    if len(matches) != 1:
        raise ValueError(f"Missing or duplicated block between {start_marker} and {end_marker}")
    return matches[0].strip("\n")


def split_markdown_row(line: str) -> list[str]:
    stripped = line.strip()
    if not stripped.startswith("|") or not stripped.endswith("|"):
        raise ValueError(f"Invalid markdown table row: {line}")
    return [cell.strip() for cell in stripped.strip("|").split("|")]


def is_valid_repo_url(value: str) -> bool:
    return bool(
        value.startswith("https://")
        or value.startswith("ssh://")
        or value.startswith("git@")
    )


def is_valid_skills_path(value: str) -> bool:
    normalized = value.strip().strip("/")
    if not normalized:
        return False
    candidate = Path(normalized)
    if candidate.is_absolute():
        return False
    return ".." not in candidate.parts


def validate_record(record: RepositorySource) -> None:
    if not SLUG_PATTERN.fullmatch(record.slug):
        raise ValueError(f"Invalid repository source slug: {record.slug}")
    if not is_valid_repo_url(record.repo_url):
        raise ValueError(f"Invalid repository source repo_url: {record.repo_url}")
    if not record.branch or any(ch.isspace() for ch in record.branch):
        raise ValueError(f"Invalid repository source branch: {record.branch!r}")
    if not is_valid_skills_path(record.skills_path):
        raise ValueError(f"Invalid repository source skills_path: {record.skills_path}")
    if record.status not in ALLOWED_STATUSES:
        raise ValueError(
            f"Invalid repository source status: {record.status}. "
            f"Allowed: {sorted(ALLOWED_STATUSES)}"
        )
    if not record.owner.strip():
        raise ValueError(f"Repository source owner must not be empty for {record.slug}")
    if not record.license.strip():
        raise ValueError(f"Repository source license must not be empty for {record.slug}")


def load_registry_rows(path: Path) -> list[RepositorySource]:
    content = read_text(path)
    block = extract_block(content, REGISTRY_START, REGISTRY_END)
    lines = [line for line in block.splitlines() if line.strip()]
    if len(lines) < 3:
        raise ValueError("Repository registry table must include a header, separator, and at least one data row")

    header = split_markdown_row(lines[0])
    if header != EXPECTED_COLUMNS:
        raise ValueError(
            "Repository registry columns do not match expected schema. "
            f"Expected {EXPECTED_COLUMNS}, got {header}"
        )

    separator = split_markdown_row(lines[1])
    if not all(cell and set(cell) <= {":", "-"} for cell in separator):
        raise ValueError("Repository registry separator row is invalid")

    rows: list[RepositorySource] = []
    seen_slugs: set[str] = set()
    seen_targets: set[tuple[str, str, str]] = set()

    for line in lines[2:]:
        cells = split_markdown_row(line)
        if len(cells) != len(EXPECTED_COLUMNS):
            raise ValueError(f"Repository registry row has {len(cells)} cells, expected {len(EXPECTED_COLUMNS)}: {line}")
        record = RepositorySource(**dict(zip(EXPECTED_COLUMNS, cells, strict=True)))
        validate_record(record)
        target_key = (record.repo_url, record.branch, record.skills_path)
        if record.slug in seen_slugs:
            raise ValueError(f"Duplicate repository source slug: {record.slug}")
        if target_key in seen_targets:
            raise ValueError(
                "Duplicate repository source target tuple: "
                f"{record.repo_url} @ {record.branch} :: {record.skills_path}"
            )
        seen_slugs.add(record.slug)
        seen_targets.add(target_key)
        rows.append(record)

    return rows


def render_status_block(rows: list[RepositorySource]) -> str:
    counts = Counter(row.status for row in rows)
    default_path_count = sum(1 for row in rows if row.skills_path.strip("/") == "skills")
    custom_path_count = len(rows) - default_path_count
    return "\n".join(
        [
            "| Metric | Value |",
            "|:-------|:------|",
            f"| 📦 Registry rows | `{len(rows)}` |",
            f"| ✅ Tracked upstream repositories | `{counts.get('tracked', 0)}` |",
            f"| 🧪 Candidate upstream repositories | `{counts.get('candidate', 0)}` |",
            f"| ⏸️ Disabled rows | `{counts.get('disabled', 0)}` |",
            f"| 📁 Default `skills/` path rows | `{default_path_count}` |",
            f"| 🧭 Custom skills path rows | `{custom_path_count}` |",
            "| 🔒 Operator gate | Merge here does not auto-sync. The private dashboard still imports and enables rows explicitly. |",
            "| 🧪 Local validation | `npm run registry:lint` and `npm run registry:check` |",
        ]
    )


def replace_status_block(content: str, rendered: str) -> str:
    pattern = re.compile(
        rf"{re.escape(STATUS_START)}\n.*?\n{re.escape(STATUS_END)}",
        flags=re.DOTALL,
    )
    replacement = f"{STATUS_START}\n{rendered.rstrip()}\n{STATUS_END}"
    updated, count = pattern.subn(replacement, content)
    if count != 1:
        raise ValueError("Missing or duplicated registry status block")
    return updated


def render_registry_file(path: Path, check: bool = False) -> list[str]:
    content = read_text(path)
    rows = load_registry_rows(path)
    updated = replace_status_block(content, render_status_block(rows))
    changed_files: list[str] = []
    if updated != content:
        changed_files.append(path.name)
        if not check:
            path.write_text(updated, encoding="utf-8")
    if check and changed_files:
        raise ValueError("Repository registry status block is stale: " + ", ".join(changed_files))
    return changed_files


def lint_registry(path: Path) -> dict:
    rows = load_registry_rows(path)
    counts = Counter(row.status for row in rows)
    return {
        "path": str(path),
        "row_count": len(rows),
        "status_counts": {status: counts.get(status, 0) for status in sorted(ALLOWED_STATUSES)},
        "rows": [row.__dict__ for row in rows],
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate and render REPOSITORY-SOURCES.md")
    parser.add_argument("command", choices=["lint", "render", "check"], help="Operation to run")
    parser.add_argument("--path", default=str(REGISTRY_PATH), help="Path to REPOSITORY-SOURCES.md")
    args = parser.parse_args()

    path = Path(args.path).resolve()
    if args.command == "lint":
        print(json.dumps(lint_registry(path), indent=2))
        return 0
    if args.command == "render":
        print(json.dumps({"written": render_registry_file(path, check=False)}))
        return 0
    print(json.dumps({"checked": True, "stale_files": render_registry_file(path, check=True)}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
