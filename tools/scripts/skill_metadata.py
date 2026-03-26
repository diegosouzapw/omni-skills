#!/usr/bin/env python3
"""
Shared parser, taxonomy, validation, and scoring helpers for Omni Skills.
"""

from __future__ import annotations

import json
import os
import re
from datetime import datetime, timezone
from typing import Dict, List, Tuple, Any


SCHEMA_VERSION = "2026-03-26"

CANONICAL_CATEGORIES = [
    "development",
    "frontend",
    "backend",
    "fullstack-web",
    "tools",
    "cli-automation",
    "business",
    "product",
    "design",
    "data-ai",
    "ai-agents",
    "machine-learning",
    "devops",
    "testing-security",
    "documentation",
    "content-media",
    "communication",
    "uncategorized",
]

CATEGORY_ALIASES = {
    "architecture": "development",
    "business": "business",
    "cli": "cli-automation",
    "cli-automation": "cli-automation",
    "coding": "development",
    "communication": "communication",
    "content": "content-media",
    "content-media": "content-media",
    "data": "data-ai",
    "data-ai": "data-ai",
    "design": "design",
    "development": "development",
    "devops": "devops",
    "docs": "documentation",
    "documentation": "documentation",
    "frontend": "frontend",
    "full-stack": "fullstack-web",
    "fullstack": "fullstack-web",
    "fullstack-web": "fullstack-web",
    "general": "uncategorized",
    "infrastructure": "devops",
    "infra": "devops",
    "machine-learning": "machine-learning",
    "ml": "machine-learning",
    "product": "product",
    "prompt": "ai-agents",
    "security": "testing-security",
    "testing": "testing-security",
    "testing-security": "testing-security",
    "tool": "tools",
    "tools": "tools",
    "ux": "design",
    "workflow": "cli-automation",
    "writing": "communication",
}

CATEGORY_KEYWORDS = {
    "development": [
        "architecture",
        "code",
        "coding",
        "debug",
        "development",
        "implementation",
        "library",
        "programming",
        "refactor",
        "software",
    ],
    "frontend": [
        "browser",
        "component",
        "css",
        "frontend",
        "html",
        "interface",
        "layout",
        "responsive",
        "tailwind",
        "ui",
    ],
    "backend": [
        "api",
        "authentication",
        "backend",
        "database",
        "endpoint",
        "graphql",
        "middleware",
        "server",
        "sql",
        "websocket",
    ],
    "fullstack-web": [
        "app",
        "full-stack",
        "fullstack",
        "mobile",
        "pwa",
        "react native",
        "web",
    ],
    "tools": [
        "editor",
        "extension",
        "formatter",
        "generator",
        "ide",
        "linter",
        "plugin",
        "scaffold",
        "tool",
        "utility",
    ],
    "cli-automation": [
        "automation",
        "bundle",
        "catalog",
        "cli",
        "command-line",
        "install",
        "script",
        "shell",
        "terminal",
        "workflow",
    ],
    "business": [
        "billing",
        "crm",
        "finance",
        "marketing",
        "sales",
        "seo",
        "strategy",
    ],
    "product": [
        "backlog",
        "discovery",
        "feature",
        "prioritization",
        "product",
        "requirements",
        "roadmap",
        "stakeholder",
    ],
    "design": [
        "accessibility",
        "auto layout",
        "color",
        "design",
        "design system",
        "figma",
        "figjam",
        "prototype",
        "typography",
        "ux",
    ],
    "data-ai": [
        "analytics",
        "data",
        "dataset",
        "dbt",
        "etl",
        "pipeline",
        "warehouse",
    ],
    "ai-agents": [
        "agent",
        "ai agent",
        "assistant",
        "context",
        "copilot",
        "function calling",
        "llm",
        "mcp",
        "prompt",
        "rag",
        "tool use",
    ],
    "machine-learning": [
        "classification",
        "fine-tune",
        "huggingface",
        "inference",
        "machine learning",
        "model",
        "neural",
        "pytorch",
        "tensorflow",
        "training",
    ],
    "devops": [
        "aws",
        "ci",
        "cloud",
        "deploy",
        "docker",
        "infrastructure",
        "kubernetes",
        "monitoring",
        "terraform",
    ],
    "testing-security": [
        "audit",
        "compliance",
        "encryption",
        "oauth",
        "playwright",
        "security",
        "test",
        "testing",
        "vulnerability",
    ],
    "documentation": [
        "api-docs",
        "changelog",
        "docs",
        "documentation",
        "guide",
        "manual",
        "markdown",
        "readme",
        "tutorial",
    ],
    "content-media": [
        "audio",
        "blog",
        "content",
        "ffmpeg",
        "image",
        "media",
        "video",
    ],
    "communication": [
        "communication",
        "copywriting",
        "i18n",
        "localization",
        "message",
        "translation",
        "writing",
    ],
    "uncategorized": [],
}

ALLOWED_RISKS = ["safe", "caution", "offensive", "critical", "unknown"]
ALLOWED_SOURCES = ["omni-team", "community", "official"]
ALLOWED_COMPLEXITIES = ["beginner", "intermediate", "advanced", "expert"]
ALLOWED_TOOLS = [
    "claude-code",
    "cursor",
    "gemini-cli",
    "codex-cli",
    "kiro",
    "antigravity",
    "opencode",
]

GENERIC_NAMES = {
    "app",
    "config",
    "default",
    "demo",
    "example",
    "main",
    "myskill",
    "my-skill",
    "placeholder",
    "sample",
    "skill",
    "template",
    "test",
    "todo",
}


def to_posix_path(value: str) -> str:
    return value.replace(os.sep, "/")


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def normalize_text(value: Any) -> str:
    if not isinstance(value, str):
        return ""
    return value.strip()


def normalize_slug(value: str) -> str:
    return re.sub(r"[_\s]+", "-", normalize_text(value).lower())


def parse_frontmatter(content: str) -> Dict[str, Any] | None:
    trimmed = content.lstrip("\ufeff")
    if not trimmed.startswith("---"):
        return None

    end_match = re.search(r"\n---\s*\n", trimmed[3:])
    if not end_match:
        return None

    end_index = 3 + end_match.start()
    yaml_block = trimmed[3:end_index].strip()
    frontmatter: Dict[str, Any] = {}
    active_list_key = None

    for raw_line in yaml_block.splitlines():
        line = raw_line.rstrip()
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue

        list_match = re.match(r"^\s*-\s+(.+)$", line)
        if list_match and active_list_key:
            current = frontmatter.get(active_list_key, [])
            if not isinstance(current, list):
                current = []
            current.append(strip_quotes(list_match.group(1).strip()))
            frontmatter[active_list_key] = current
            continue

        if ":" not in line:
            active_list_key = None
            continue

        key, _, raw_value = line.partition(":")
        key = key.strip()
        raw_value = raw_value.strip()
        if not key:
            active_list_key = None
            continue

        if not raw_value:
            frontmatter[key] = []
            active_list_key = key
            continue

        active_list_key = None

        if raw_value.startswith("[") and raw_value.endswith("]"):
            items = [
                strip_quotes(item.strip())
                for item in raw_value[1:-1].split(",")
                if item.strip()
            ]
            frontmatter[key] = items
            continue

        if raw_value.lower() in {"true", "false"}:
            frontmatter[key] = raw_value.lower() == "true"
            continue

        frontmatter[key] = strip_quotes(raw_value)

    return frontmatter


def strip_frontmatter(content: str) -> str:
    return re.sub(r"^---\s*\n.*?\n---\s*\n?", "", content, count=1, flags=re.DOTALL)


def strip_quotes(value: str) -> str:
    if (value.startswith('"') and value.endswith('"')) or (
        value.startswith("'") and value.endswith("'")
    ):
        return value[1:-1]
    return value


def extract_title(body: str) -> str:
    match = re.search(r"^#\s+(.+)$", body, re.MULTILINE)
    return match.group(1).strip() if match else ""


def extract_first_paragraph(body: str) -> str:
    lines = body.splitlines()
    in_code_block = False
    collected = []

    for line in lines:
        trimmed = line.strip()
        if trimmed.startswith("```"):
            in_code_block = not in_code_block
            continue
        if in_code_block or trimmed.startswith("#"):
            continue
        if not trimmed:
            if collected:
                break
            continue
        collected.append(trimmed)

    return " ".join(collected)[:500]


def parse_string_list(value: Any) -> List[str]:
    if isinstance(value, list):
        return [item.strip() for item in value if isinstance(item, str) and item.strip()]
    if isinstance(value, str):
        text = value.strip()
        if not text:
            return []
        return [item.strip() for item in text.split(",") if item.strip()]
    return []


def get_sub_resources(skill_path: str) -> List[str]:
    resources = []
    for entry in sorted(os.listdir(skill_path)):
        full_path = os.path.join(skill_path, entry)
        if os.path.isdir(full_path) and not entry.startswith("."):
            resources.append(entry)
    return resources


def iter_skill_files(skill_path: str) -> List[str]:
    files = []
    for root, dirs, filenames in os.walk(skill_path):
        dirs[:] = sorted(directory for directory in dirs if not directory.startswith("."))
        for filename in sorted(filenames):
            if filename.startswith("."):
                continue
            files.append(os.path.join(root, filename))
    return files


def normalize_category(raw_category: str) -> str:
    normalized = normalize_slug(raw_category)
    if not normalized:
        return "uncategorized"
    if normalized in CANONICAL_CATEGORIES:
        return normalized
    return CATEGORY_ALIASES.get(normalized, "uncategorized")


def infer_category(name: str, description: str, body: str, raw_category: str) -> str:
    normalized = normalize_category(raw_category)
    if normalized != "uncategorized":
        return normalized

    search_text = f"{name} {description} {body[:4000]}".lower()
    best_category = "uncategorized"
    best_score = 0

    for category, keywords in CATEGORY_KEYWORDS.items():
        if category == "uncategorized":
            continue
        score = 0
        for keyword in keywords:
            if keyword in search_text:
                score += 1
                if keyword in name.lower():
                    score += 3
                if keyword in description.lower():
                    score += 2
        if score > best_score:
            best_score = score
            best_category = category

    return best_category


def detect_skill_level(body: str, sibling_entries: List[str]) -> Dict[str, Any]:
    lowered_entries = [entry.lower() for entry in sibling_entries]
    extra_patterns = [
        r"\[.*\]\(.*\.md\)",
        r"\[.*\]\(.*\.(py|sh|ts|js|json|ya?ml|toml|sql)\)",
        r"reference\.md",
        r"guide\.md",
        r"see\s+\[",
    ]

    has_scripts = any(
        re.search(r"^scripts?$", entry) or re.search(r"\.(py|sh|ts|js|mjs|cjs|bash|zsh)$", entry)
        for entry in lowered_entries
    )
    has_extra_files = any(re.search(pattern, body, re.IGNORECASE) for pattern in extra_patterns) or any(
        entry != "skill.md"
        and (
            re.search(r"^examples?$", entry)
            or re.search(r"^references?$", entry)
            or re.search(r"^docs?$", entry)
            or re.search(r"^assets?$", entry)
            or re.search(r"\.(md|json|ya?ml|toml|sql|csv|txt)$", entry)
        )
        for entry in lowered_entries
    )

    body_length = len(body)
    if has_scripts and (has_extra_files or body_length > 1200):
        return {
            "level": 3,
            "label": "resources",
            "has_scripts": True,
            "has_extra_files": has_extra_files,
        }

    if body_length > 200:
        return {
            "level": 2,
            "label": "instructions",
            "has_scripts": has_scripts,
            "has_extra_files": has_extra_files,
        }

    return {
        "level": 1,
        "label": "metadata",
        "has_scripts": False,
        "has_extra_files": has_extra_files,
    }


def score_best_practices(skill_name: str, description: str, content: str) -> int:
    score = 0
    name = normalize_text(skill_name)
    desc = normalize_text(description)
    body_lines = content.splitlines()
    reserved_words = re.compile(r"\b(anthropic|claude)\b", re.IGNORECASE)
    has_hardcoded_date = bool(
        re.search(r"\b(?:19|20)\d{2}[-/](?:0?[1-9]|1[0-2])[-/](?:0?[1-9]|[12]\d|3[01])\b", content)
        or re.search(
            r"\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\s+\d{1,2},?\s+(?:19|20)\d{2}\b",
            content,
            re.IGNORECASE,
        )
    )
    has_what = bool(re.search(r"\b(skill|tool|workflow|assistant|automation|helps|enables|provides)\b", desc, re.IGNORECASE))
    has_when = bool(re.search(r"\b(when|if|trigger|use when|should be used)\b", desc, re.IGNORECASE))

    if len(name) <= 64 and re.match(r"^[a-z0-9][a-z0-9-]*$", name) and not reserved_words.search(name):
        score += 10
    if len(desc) >= 20 and has_what and has_when:
        score += 10
    if 0 < len(desc) <= 1024:
        score += 5
    if len(body_lines) < 500:
        score += 10
    if re.search(r"##\s*(example|quick\s*start|usage|examples)", content, re.IGNORECASE):
        score += 10
    if re.search(r"##\s*(workflow|steps|instructions|guide|how\s*to)", content, re.IGNORECASE):
        score += 10
    if re.search(r"\[.*\]\(.*\.(md|py|sh|ts|js)\)", content, re.IGNORECASE):
        score += 10
    if re.search(r"```(python|bash|sh|typescript|javascript|ruby|go|json|yaml|toml)", content, re.IGNORECASE):
        score += 15
    pt_headers = len(re.findall(r"##\s*(como|quando|exemplo|passo)", content, re.IGNORECASE))
    en_headers = len(re.findall(r"##\s*(how|when|example|step|usage)", content, re.IGNORECASE))
    if pt_headers == 0 or en_headers == 0:
        score += 5
    if not has_hardcoded_date:
        score += 5
    if not re.search(r"[A-Z]:\\|\\\\", content):
        score += 10

    return min(score, 100)


def best_practices_tier(score: int) -> str:
    if score >= 80:
        return "excellent"
    if score >= 60:
        return "good"
    if score >= 40:
        return "fair"
    return "needs-work"


def quality_tier(score: int) -> str:
    if score >= 85:
        return "platinum"
    if score >= 70:
        return "gold"
    if score >= 55:
        return "silver"
    if score >= 40:
        return "bronze"
    return "starter"


def parse_iso_date(value: str) -> datetime | None:
    if not value:
        return None
    try:
        normalized = value.replace("Z", "+00:00")
        parsed = datetime.fromisoformat(normalized)
        if parsed.tzinfo is None:
            return parsed.replace(tzinfo=timezone.utc)
        return parsed.astimezone(timezone.utc)
    except ValueError:
        return None


def compute_quality_score(
    description: str,
    body_length: int,
    metadata_fields: Dict[str, Any],
    best_practices_score: int,
    level: Dict[str, Any],
    file_mtime: datetime,
) -> Tuple[int, Dict[str, int]]:
    details = {
        "body": 0,
        "description": 0,
        "metadata": 0,
        "recency": 0,
        "resources": 0,
        "best_practices": 0,
    }

    if body_length >= 2500:
        details["body"] = 25
    elif body_length >= 1500:
        details["body"] = 20
    elif body_length >= 800:
        details["body"] = 14
    elif body_length >= 400:
        details["body"] = 8
    elif body_length > 0:
        details["body"] = 3

    description_length = len(description)
    if description_length >= 120:
        details["description"] = 15
    elif description_length >= 80:
        details["description"] = 12
    elif description_length >= 40:
        details["description"] = 8
    elif description_length >= 20:
        details["description"] = 5
    elif description_length > 0:
        details["description"] = 2

    metadata_score = 0
    if metadata_fields.get("version"):
        metadata_score += 2
    if metadata_fields.get("category"):
        metadata_score += 2
    if metadata_fields.get("risk"):
        metadata_score += 1
    if metadata_fields.get("source"):
        metadata_score += 1
    if metadata_fields.get("author"):
        metadata_score += 2
    if metadata_fields.get("complexity"):
        metadata_score += 1
    if parse_string_list(metadata_fields.get("tags")):
        metadata_score += 3
    if parse_string_list(metadata_fields.get("tools")):
        metadata_score += 4
    if metadata_fields.get("date_added"):
        metadata_score += 2
    if metadata_fields.get("date_updated"):
        metadata_score += 2
    details["metadata"] = min(metadata_score, 20)

    updated_at = parse_iso_date(normalize_text(metadata_fields.get("date_updated"))) or file_mtime
    age_days = max(0, (datetime.now(timezone.utc) - updated_at).days)
    if age_days <= 30:
        details["recency"] = 10
    elif age_days <= 90:
        details["recency"] = 8
    elif age_days <= 180:
        details["recency"] = 6
    elif age_days <= 365:
        details["recency"] = 4
    elif age_days <= 730:
        details["recency"] = 2

    resources_score = 0
    if level["level"] == 3:
        resources_score += 4
    elif level["level"] == 2:
        resources_score += 2
    else:
        resources_score += 1
    if level["has_scripts"]:
        resources_score += 3
    if level["has_extra_files"]:
        resources_score += 3
    details["resources"] = min(resources_score, 10)

    details["best_practices"] = round(best_practices_score * 0.20)

    total = sum(details.values())
    return min(total, 100), details


def validate_skill(
    skill_dir: str,
    skill_name: str,
    repo_root: str,
    strict: bool = False,
) -> Tuple[List[Tuple[str, str]], Dict[str, Any] | None]:
    issues: List[Tuple[str, str]] = []
    skill_md = os.path.join(skill_dir, "SKILL.md")

    if not os.path.isfile(skill_md):
        return [("ERROR", "Missing SKILL.md")], None

    with open(skill_md, "r", encoding="utf-8") as handle:
        content = handle.read()

    frontmatter = parse_frontmatter(content)
    if frontmatter is None:
        return [("ERROR", "Missing or invalid YAML frontmatter (---...---)")], None

    body = strip_frontmatter(content).strip()
    title = extract_title(body) or normalize_text(frontmatter.get("name")) or skill_name
    description = normalize_text(frontmatter.get("description")) or extract_first_paragraph(body)
    raw_category = normalize_text(frontmatter.get("category"))
    canonical_category = normalize_category(raw_category)
    inferred_category = infer_category(
        normalize_text(frontmatter.get("name")) or skill_name,
        description,
        body,
        raw_category,
    )
    if canonical_category == "uncategorized" and inferred_category != "uncategorized":
        canonical_category = inferred_category

    sibling_entries = sorted(
        entry for entry in os.listdir(skill_dir) if not entry.startswith(".")
    )
    sub_resources = get_sub_resources(skill_dir)
    level = detect_skill_level(body, sibling_entries)
    tags = parse_string_list(frontmatter.get("tags"))
    tools = parse_string_list(frontmatter.get("tools"))
    file_mtime = datetime.fromtimestamp(os.path.getmtime(skill_md), tz=timezone.utc)
    best_practices_score = score_best_practices(
        normalize_text(frontmatter.get("name")) or skill_name,
        description,
        content,
    )
    quality_score, quality_details = compute_quality_score(
        description,
        len(body),
        frontmatter,
        best_practices_score,
        level,
        file_mtime,
    )

    required_fields = ["name", "description"]
    strict_required = required_fields + ["version", "category", "risk", "source", "date_added"]
    for field in (strict_required if strict else required_fields):
        if not normalize_text(frontmatter.get(field)) and not parse_string_list(frontmatter.get(field)):
            issues.append(("ERROR" if field in required_fields else "WARN", f"Missing field: {field}"))

    name = normalize_text(frontmatter.get("name"))
    if name and name != skill_name:
        issues.append(("ERROR", f"name '{name}' does not match directory '{skill_name}'"))
    if name and name in GENERIC_NAMES:
        issues.append(("WARN", f"name '{name}' is too generic for reliable discovery"))
    if name and not re.match(r"^[a-z0-9][a-z0-9-]{1,63}$", name):
        issues.append(("WARN", "name should match ^[a-z0-9][a-z0-9-]{1,63}$"))

    if raw_category and normalize_slug(raw_category) not in CANONICAL_CATEGORIES:
        if canonical_category == "uncategorized":
            issues.append(("WARN", f"category '{raw_category}' does not map to a canonical category"))
        else:
            issues.append(("WARN", f"category '{raw_category}' normalizes to canonical category '{canonical_category}'"))

    risk = normalize_text(frontmatter.get("risk"))
    if risk and risk not in ALLOWED_RISKS:
        issues.append(("WARN", f"risk '{risk}' not in allowed list: {ALLOWED_RISKS}"))

    source = normalize_text(frontmatter.get("source"))
    if source and source not in ALLOWED_SOURCES:
        issues.append(("WARN", f"source '{source}' not in allowed list: {ALLOWED_SOURCES}"))

    complexity = normalize_text(frontmatter.get("complexity"))
    if complexity and complexity not in ALLOWED_COMPLEXITIES:
        issues.append(("WARN", f"complexity '{complexity}' not in allowed list: {ALLOWED_COMPLEXITIES}"))

    unknown_tools = [tool for tool in tools if tool not in ALLOWED_TOOLS]
    if unknown_tools:
        issues.append(("WARN", f"unknown tool identifiers: {unknown_tools}"))

    if len(description) < 20:
        issues.append(("WARN", "description is very short (< 20 chars)"))
    if len(body) < 80:
        issues.append(("WARN", f"body is short ({len(body)} chars); richer instructions improve quality"))
    if not tags:
        issues.append(("WARN", "tags are empty"))
    if not tools:
        issues.append(("WARN", "tools are empty"))

    files = iter_skill_files(skill_dir)
    relative_files = [
        to_posix_path(os.path.relpath(file_path, repo_root))
        for file_path in files
    ]
    metadata = {
        "schema_version": SCHEMA_VERSION,
        "generated_at": utc_now_iso(),
        "id": name or skill_name,
        "slug": skill_name,
        "display_name": title,
        "description": description,
        "version": normalize_text(frontmatter.get("version")),
        "raw_category": raw_category or "",
        "canonical_category": canonical_category,
        "taxonomy": {
            "raw_category": raw_category or "",
            "canonical_category": canonical_category,
            "inferred_category": inferred_category,
            "category_source": (
                "inferred"
                if not raw_category
                else ("frontmatter" if normalize_slug(raw_category) == canonical_category else "alias")
            ),
        },
        "tags": tags,
        "tools": tools,
        "complexity": complexity,
        "risk": risk or "unknown",
        "source": source,
        "author": normalize_text(frontmatter.get("author")),
        "dates": {
            "added": normalize_text(frontmatter.get("date_added")),
            "updated": normalize_text(frontmatter.get("date_updated")),
            "file_mtime": file_mtime.isoformat(),
        },
        "paths": {
            "root": to_posix_path(os.path.relpath(skill_dir, repo_root)),
            "entrypoint": to_posix_path(os.path.relpath(skill_md, repo_root)),
            "metadata": to_posix_path(os.path.join("skills", skill_name, "metadata.json")),
        },
        "resources": {
            "sub_resources": sub_resources,
            "files": [os.path.basename(file_path) for file_path in files],
            "files_count": len(files),
            "references_count": len([path for path in relative_files if "/references/" in path]),
            "agents_count": len([path for path in relative_files if "/agents/" in path]),
            "assets_count": len([path for path in relative_files if "/assets/" in path]),
        },
        "content": {
            "body_length": len(body),
            "content_length": len(content),
            "body_lines": len(body.splitlines()),
            "word_count": len(re.findall(r"\b\w+\b", body)),
            "has_code_blocks": "```" in content,
            "has_examples_section": bool(re.search(r"##\s*(example|examples|quick\s*start|usage)", content, re.IGNORECASE)),
            "has_workflow_section": bool(re.search(r"##\s*(workflow|steps|instructions|guide|how\s*to)", content, re.IGNORECASE)),
            "has_best_practices_section": bool(re.search(r"##\s*(best practices|guidelines)", content, re.IGNORECASE)),
            "has_troubleshooting_section": bool(re.search(r"##\s*troubleshooting", content, re.IGNORECASE)),
        },
        "maturity": {
            "skill_level": level["level"],
            "skill_level_label": level["label"],
            "has_scripts": level["has_scripts"],
            "has_extra_files": level["has_extra_files"],
        },
        "best_practices": {
            "score": best_practices_score,
            "tier": best_practices_tier(best_practices_score),
        },
        "quality": {
            "score": quality_score,
            "tier": quality_tier(quality_score),
            "breakdown": quality_details,
        },
        "validation": {
            "errors": [message for level_name, message in issues if level_name == "ERROR"],
            "warnings": [message for level_name, message in issues if level_name == "WARN"],
            "status": "failed" if any(level_name == "ERROR" for level_name, _ in issues) else ("warn" if issues else "passed"),
        },
    }

    return issues, metadata


def load_skill_metadata(skill_path: str) -> Dict[str, Any] | None:
    metadata_path = os.path.join(skill_path, "metadata.json")
    if not os.path.isfile(metadata_path):
        return None
    with open(metadata_path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def write_skill_metadata(skill_path: str, metadata: Dict[str, Any]) -> None:
    metadata_path = os.path.join(skill_path, "metadata.json")
    with open(metadata_path, "w", encoding="utf-8") as handle:
        json.dump(metadata, handle, indent=2, ensure_ascii=False)
        handle.write("\n")


def load_package_version(repo_root: str) -> str:
    package_path = os.path.join(repo_root, "package.json")
    if not os.path.isfile(package_path):
        return ""
    with open(package_path, "r", encoding="utf-8") as handle:
        package_data = json.load(handle)
    return normalize_text(package_data.get("version"))


def build_repo_metadata(
    repo_root: str,
    skill_records: List[Dict[str, Any]],
    counts: Dict[str, int],
) -> Dict[str, Any]:
    category_counts: Dict[str, int] = {}
    level_counts: Dict[str, int] = {"l1": 0, "l2": 0, "l3": 0}
    quality_tiers: Dict[str, int] = {}
    validation_counts = {"passed": 0, "warn": 0, "failed": 0}

    for record in skill_records:
        category = record["canonical_category"]
        category_counts[category] = category_counts.get(category, 0) + 1

        level_key = f"l{record['maturity']['skill_level']}"
        level_counts[level_key] = level_counts.get(level_key, 0) + 1

        quality_tier_name = record["quality"]["tier"]
        quality_tiers[quality_tier_name] = quality_tiers.get(quality_tier_name, 0) + 1

        validation_status = record["validation"]["status"]
        validation_counts[validation_status] = validation_counts.get(validation_status, 0) + 1

    total_skills = len(skill_records)
    average_quality = round(
        sum(record["quality"]["score"] for record in skill_records) / total_skills, 1
    ) if total_skills else 0
    average_best_practices = round(
        sum(record["best_practices"]["score"] for record in skill_records) / total_skills, 1
    ) if total_skills else 0

    return {
        "schema_version": SCHEMA_VERSION,
        "generated_at": utc_now_iso(),
        "repository": {
            "name": "omni-skills",
            "version": load_package_version(repo_root),
            "metadata_path": "metadata.json",
        },
        "summary": {
            "total_skills": total_skills,
            "passed": counts["passed"],
            "warnings": counts["warnings"],
            "errors": counts["errors"],
            "average_quality_score": average_quality,
            "average_best_practices_score": average_best_practices,
        },
        "taxonomy": {
            "canonical_categories": CANONICAL_CATEGORIES,
            "counts": dict(sorted(category_counts.items())),
        },
        "distribution": {
            "skill_levels": level_counts,
            "quality_tiers": dict(sorted(quality_tiers.items())),
            "validation_status": validation_counts,
        },
        "skills": [
            {
                "id": record["id"],
                "display_name": record["display_name"],
                "description": record["description"],
                "raw_category": record["raw_category"],
                "canonical_category": record["canonical_category"],
                "quality_score": record["quality"]["score"],
                "quality_tier": record["quality"]["tier"],
                "best_practices_score": record["best_practices"]["score"],
                "best_practices_tier": record["best_practices"]["tier"],
                "skill_level": record["maturity"]["skill_level"],
                "skill_level_label": record["maturity"]["skill_level_label"],
                "validation_status": record["validation"]["status"],
                "metadata_path": record["paths"]["metadata"],
                "entrypoint": record["paths"]["entrypoint"],
            }
            for record in sorted(skill_records, key=lambda item: item["id"])
        ],
    }


def write_repo_metadata(repo_root: str, metadata: Dict[str, Any]) -> None:
    output_path = os.path.join(repo_root, "metadata.json")
    with open(output_path, "w", encoding="utf-8") as handle:
        json.dump(metadata, handle, indent=2, ensure_ascii=False)
        handle.write("\n")
