#!/usr/bin/env python3
"""
Shared parser, taxonomy, validation, and scoring helpers for Omni Skills.
"""

from __future__ import annotations

import json
import os
import re
import hashlib
import shutil
import subprocess
import urllib.error
import urllib.request
from datetime import datetime, timezone
from typing import Dict, List, Tuple, Any


SCHEMA_VERSION = "2026-03-26"
STABLE_FALLBACK_DATETIME = datetime(2026, 1, 1, tzinfo=timezone.utc)

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

TEXT_SCAN_EXTENSIONS = {
    ".md",
    ".txt",
    ".py",
    ".sh",
    ".bash",
    ".zsh",
    ".ps1",
    ".bat",
    ".cmd",
    ".js",
    ".mjs",
    ".cjs",
    ".ts",
    ".tsx",
    ".jsx",
    ".json",
    ".yaml",
    ".yml",
    ".toml",
    ".sql",
    ".ini",
    ".cfg",
}

SCRIPT_SCAN_EXTENSIONS = {
    ".py",
    ".sh",
    ".bash",
    ".zsh",
    ".ps1",
    ".bat",
    ".cmd",
    ".js",
    ".mjs",
    ".cjs",
    ".ts",
    ".tsx",
    ".jsx",
}

BINARY_LIKE_EXTENSIONS = {
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".pdf",
    ".zip",
    ".gz",
    ".tgz",
    ".tar",
    ".ico",
    ".woff",
    ".woff2",
    ".ttf",
    ".otf",
    ".exe",
    ".dll",
    ".bin",
}

SECURITY_SEVERITY_WEIGHTS = {
    "critical": 50,
    "high": 25,
    "medium": 10,
    "low": 4,
    "info": 1,
}

SECURITY_PATTERN_RULES = [
    {
        "id": "remote-fetch-pipe-shell",
        "kind": "dangerous-command",
        "severity": "critical",
        "message": "Remote content piped directly into a shell is unsafe.",
        "pattern": re.compile(r"\b(?:curl|wget)\b[^|\n]{0,240}\|\s*(?:sh|bash|zsh)\b", re.IGNORECASE),
    },
    {
        "id": "destructive-rm-root",
        "kind": "dangerous-command",
        "severity": "critical",
        "message": "Destructive recursive delete against a root-like path.",
        "pattern": re.compile(r"\brm\s+-rf\s+(?:/|~|\\$HOME|\\.)\b", re.IGNORECASE),
    },
    {
        "id": "filesystem-wipe-primitive",
        "kind": "dangerous-command",
        "severity": "critical",
        "message": "Low-level disk formatting or overwrite command detected.",
        "pattern": re.compile(r"\b(?:mkfs\.[\w-]+|dd\s+if=.+\bof=/dev/)\b", re.IGNORECASE),
    },
    {
        "id": "downloadstring-exec",
        "kind": "dangerous-command",
        "severity": "high",
        "message": "In-memory remote script execution pattern detected.",
        "pattern": re.compile(
            r"(?:Invoke-Expression|IEX)\s*\(|DownloadString\s*\(|frombase64string\s*\(",
            re.IGNORECASE,
        ),
    },
    {
        "id": "chmod-777",
        "kind": "dangerous-command",
        "severity": "medium",
        "message": "World-writable permissions can be unsafe.",
        "pattern": re.compile(r"\bchmod\s+777\b", re.IGNORECASE),
    },
    {
        "id": "sudo-required",
        "kind": "privilege-escalation",
        "severity": "low",
        "message": "Command requires elevated privileges; review necessity carefully.",
        "pattern": re.compile(r"(^|\s)sudo\s+", re.IGNORECASE),
    },
    {
        "id": "path-traversal-reference",
        "kind": "suspicious-path",
        "severity": "medium",
        "message": "Relative parent traversal found in instructions or scripts.",
        "pattern": re.compile(r"(^|[^.])\.\./", re.IGNORECASE),
    },
    {
        "id": "sensitive-path-reference",
        "kind": "suspicious-path",
        "severity": "medium",
        "message": "Sensitive OS or credential path referenced.",
        "pattern": re.compile(
            r"(/etc/passwd|/etc/shadow|\.ssh/id_[a-z0-9_]+|\.aws/credentials|\.env\b)",
            re.IGNORECASE,
        ),
    },
    {
        "id": "prompt-injection-ignore-policy",
        "kind": "prompt-injection",
        "severity": "high",
        "message": "Instruction attempts to override prior safeguards or policies.",
        "pattern": re.compile(
            r"(ignore (all )?(previous|prior) instructions|override (the )?(system|developer) prompt|bypass (safety|guardrails|policy))",
            re.IGNORECASE,
        ),
    },
    {
        "id": "prompt-injection-exfiltrate",
        "kind": "prompt-injection",
        "severity": "critical",
        "message": "Instruction attempts to reveal prompts, secrets, or hidden context.",
        "pattern": re.compile(
            r"(reveal|print|dump|exfiltrat|leak).{0,40}(system prompt|hidden prompt|secret|api key|token|credentials?)",
            re.IGNORECASE,
        ),
    },
]

SCRIPT_RISK_RULES = [
    {
        "id": "python-shell-true",
        "kind": "script-risk",
        "severity": "high",
        "message": "subprocess shell=True increases command injection risk.",
        "pattern": re.compile(r"\bshell\s*=\s*True\b"),
    },
    {
        "id": "python-os-system",
        "kind": "script-risk",
        "severity": "medium",
        "message": "os.system executes shell commands directly.",
        "pattern": re.compile(r"\bos\.system\s*\("),
    },
    {
        "id": "js-child-process-exec",
        "kind": "script-risk",
        "severity": "medium",
        "message": "child_process.exec executes through a shell; prefer execFile/spawn with args.",
        "pattern": re.compile(r"\bchild_process\.exec\s*\(|\bexec\s*\(", re.IGNORECASE),
    },
    {
        "id": "unsafe-yaml-load",
        "kind": "script-risk",
        "severity": "medium",
        "message": "yaml.load without safe loader can be unsafe.",
        "pattern": re.compile(r"\byaml\.load\s*\("),
    },
    {
        "id": "pickle-loads",
        "kind": "script-risk",
        "severity": "high",
        "message": "pickle deserialization can execute arbitrary code.",
        "pattern": re.compile(r"\bpickle\.(?:load|loads)\s*\("),
    },
    {
        "id": "unsafe-extractall",
        "kind": "script-risk",
        "severity": "medium",
        "message": "Archive extraction without path validation can enable traversal issues.",
        "pattern": re.compile(r"\b(?:zipfile|tarfile)\..*extractall\s*\("),
    },
    {
        "id": "eval-exec",
        "kind": "script-risk",
        "severity": "high",
        "message": "Dynamic eval/exec usage requires manual review.",
        "pattern": re.compile(r"\b(?:eval|exec)\s*\("),
    },
    {
        "id": "requests-verify-false",
        "kind": "script-risk",
        "severity": "medium",
        "message": "TLS verification disabled in outbound request.",
        "pattern": re.compile(r"\bverify\s*=\s*False\b"),
    },
]


def to_posix_path(value: str) -> str:
    return value.replace(os.sep, "/")


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def stable_isoformat(value: datetime) -> str:
    normalized = value.astimezone(timezone.utc).replace(microsecond=0)
    return normalized.isoformat()


def stable_generated_at(*values: Any) -> str:
    candidates: List[datetime] = []
    for value in values:
        if isinstance(value, datetime):
            candidates.append(value.astimezone(timezone.utc))
            continue
        if isinstance(value, str):
            parsed = parse_iso_date(normalize_text(value))
            if parsed:
                candidates.append(parsed)
    return stable_isoformat(max(candidates) if candidates else STABLE_FALLBACK_DATETIME)


def sha256_file(file_path: str) -> str:
    digest = hashlib.sha256()
    with open(file_path, "rb") as handle:
        while True:
            chunk = handle.read(65536)
            if not chunk:
                break
            digest.update(chunk)
    return digest.hexdigest()


def file_extension(file_path: str) -> str:
    return os.path.splitext(file_path)[1].lower()


def is_text_scan_candidate(file_path: str) -> bool:
    return file_extension(file_path) in TEXT_SCAN_EXTENSIONS or os.path.basename(file_path) == "SKILL.md"


def is_script_candidate(file_path: str) -> bool:
    return file_extension(file_path) in SCRIPT_SCAN_EXTENSIONS


def is_binary_like_file(file_path: str) -> bool:
    if file_extension(file_path) in BINARY_LIKE_EXTENSIONS:
        return True
    try:
        with open(file_path, "rb") as handle:
            return b"\0" in handle.read(2048)
    except OSError:
        return False


def safe_read_text_file(file_path: str, limit_bytes: int = 256 * 1024) -> str:
    with open(file_path, "rb") as handle:
        data = handle.read(limit_bytes)
    return data.decode("utf-8", errors="replace")


def redact_evidence(value: str, limit: int = 120) -> str:
    compact = re.sub(r"\s+", " ", value.strip())
    if len(compact) <= limit:
        return compact
    return f"{compact[: limit - 3]}..."


def severity_rank(severity: str) -> int:
    order = {
        "critical": 5,
        "high": 4,
        "medium": 3,
        "low": 2,
        "info": 1,
    }
    return order.get(severity, 0)


def add_security_finding(
    findings: List[Dict[str, Any]],
    finding_id: str,
    kind: str,
    severity: str,
    rel_path: str,
    message: str,
    evidence: str = "",
    line_number: int | None = None,
) -> None:
    candidate = {
        "id": finding_id,
        "kind": kind,
        "severity": severity,
        "path": rel_path,
        "message": message,
        "evidence": redact_evidence(evidence) if evidence else "",
    }
    if line_number is not None:
        candidate["line"] = line_number

    for existing in findings:
        if (
            existing["id"] == candidate["id"]
            and existing["path"] == candidate["path"]
            and existing.get("line") == candidate.get("line")
        ):
            return

    findings.append(candidate)


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
            if filename == "metadata.json":
                continue
            files.append(os.path.join(root, filename))
    return files


def scan_text_patterns(rel_path: str, content: str, findings: List[Dict[str, Any]]) -> None:
    for line_number, line in enumerate(content.splitlines(), start=1):
        for rule in SECURITY_PATTERN_RULES:
            if rule["pattern"].search(line):
                add_security_finding(
                    findings,
                    finding_id=rule["id"],
                    kind=rule["kind"],
                    severity=rule["severity"],
                    rel_path=rel_path,
                    message=rule["message"],
                    evidence=line,
                    line_number=line_number,
                )


def scan_script_patterns(rel_path: str, content: str, findings: List[Dict[str, Any]]) -> None:
    for line_number, line in enumerate(content.splitlines(), start=1):
        for rule in SCRIPT_RISK_RULES:
            if rule["pattern"].search(line):
                add_security_finding(
                    findings,
                    finding_id=rule["id"],
                    kind=rule["kind"],
                    severity=rule["severity"],
                    rel_path=rel_path,
                    message=rule["message"],
                    evidence=line,
                    line_number=line_number,
                )


def compute_security_score(findings: List[Dict[str, Any]], has_scripts: bool, has_binary_like_files: bool) -> Tuple[int, str, str]:
    score = 100
    for finding in findings:
        score -= SECURITY_SEVERITY_WEIGHTS.get(finding["severity"], 0)

    if has_binary_like_files:
        score -= 2

    score = max(0, min(100, score))
    highest = max((severity_rank(item["severity"]) for item in findings), default=0)

    if highest >= severity_rank("critical"):
        status = "failed"
    elif highest >= severity_rank("medium"):
        status = "warn"
    else:
        status = "passed"

    if score >= 90 and status == "passed":
        tier = "hardened"
    elif score >= 70:
        tier = "review"
    elif score >= 50:
        tier = "risky"
    else:
        tier = "blocked"

    if has_scripts and not findings and score >= 95:
        score = 95
        if tier == "hardened":
            tier = "review"

    return score, tier, status


def run_clamscan(file_paths: List[str]) -> Dict[str, Any]:
    enabled = os.getenv("OMNI_SKILLS_ENABLE_CLAMAV", "").lower() in {"1", "true", "yes"}
    clamscan_path = shutil.which("clamscan")

    if not enabled:
        return {
            "enabled": False,
            "status": "disabled",
            "provider": "clamav",
            "details": "Set OMNI_SKILLS_ENABLE_CLAMAV=1 to enable local clamscan when installed.",
        }
    if not clamscan_path:
        return {
            "enabled": True,
            "status": "unavailable",
            "provider": "clamav",
            "details": "clamscan was not found in PATH.",
        }

    try:
        result = subprocess.run(
            [clamscan_path, "--no-summary", "--infected", *file_paths],
            capture_output=True,
            text=True,
            check=False,
        )
    except OSError as error:
        return {
            "enabled": True,
            "status": "error",
            "provider": "clamav",
            "details": f"Failed to execute clamscan: {error}",
        }

    detections = []
    for line in (result.stdout or "").splitlines():
        if line.endswith(": FOUND"):
            file_path = line[: -len(": FOUND")]
            detections.append({"path": to_posix_path(file_path), "result": "FOUND"})

    if result.returncode not in {0, 1}:
        return {
            "enabled": True,
            "status": "error",
            "provider": "clamav",
            "details": (result.stderr or result.stdout or "clamscan returned an error").strip(),
        }

    return {
        "enabled": True,
        "status": "completed",
        "provider": "clamav",
        "detections": detections,
        "infected_files": len(detections),
    }


def virustotal_headers(api_key: str) -> Dict[str, str]:
    return {
        "accept": "application/json",
        "x-apikey": api_key,
        "user-agent": "omni-skills-validator/1.0",
    }


def virustotal_lookup_hash(file_hash: str, api_key: str) -> Tuple[str, Dict[str, Any]]:
    request = urllib.request.Request(
        f"https://www.virustotal.com/api/v3/files/{file_hash}",
        headers=virustotal_headers(api_key),
        method="GET",
    )

    try:
        with urllib.request.urlopen(request, timeout=12) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as error:
        if error.code == 404:
            return "not_found", {}
        body = error.read().decode("utf-8", errors="replace")
        return "error", {"status_code": error.code, "body": redact_evidence(body, 280)}
    except Exception as error:  # noqa: BLE001
        return "error", {"message": str(error)}

    stats = ((payload.get("data") or {}).get("attributes") or {}).get("last_analysis_stats") or {}
    return "completed", {
        "malicious": int(stats.get("malicious", 0)),
        "suspicious": int(stats.get("suspicious", 0)),
        "harmless": int(stats.get("harmless", 0)),
        "undetected": int(stats.get("undetected", 0)),
        "sha256": file_hash,
    }


def run_virustotal_lookup(scan_targets: List[Dict[str, Any]]) -> Dict[str, Any]:
    api_key = os.getenv("VT_API_KEY") or os.getenv("OMNI_SKILLS_VT_API_KEY") or ""
    enabled = bool(api_key)
    limit = max(0, min(int(os.getenv("OMNI_SKILLS_VT_MAX_FILES", "3") or "3"), 10))

    if not enabled:
        return {
            "enabled": False,
            "status": "disabled",
            "provider": "virustotal",
            "details": "Set VT_API_KEY to enable optional VirusTotal hash lookups.",
        }

    results = []
    positives = 0
    status = "completed"
    for target in scan_targets[:limit]:
        lookup_status, payload = virustotal_lookup_hash(target["sha256"], api_key)
        result = {
            "path": target["path"],
            "sha256": target["sha256"],
            "status": lookup_status,
        }
        result.update(payload)
        if lookup_status == "completed" and (payload.get("malicious", 0) > 0 or payload.get("suspicious", 0) > 0):
            positives += 1
        if lookup_status == "error":
            status = "error"
        results.append(result)

    return {
        "enabled": True,
        "status": status,
        "provider": "virustotal",
        "lookups": len(results),
        "positives": positives,
        "results": results,
        "details": "Hash lookups only. Unknown files are not uploaded during validation.",
    }


def scan_skill_security(
    skill_dir: str,
    repo_root: str,
    file_paths: List[str],
    content: str,
) -> Dict[str, Any]:
    findings: List[Dict[str, Any]] = []
    scan_targets = []
    scanned_files = 0
    binary_like_files = 0
    script_files = 0

    skill_rel_path = to_posix_path(os.path.relpath(os.path.join(skill_dir, "SKILL.md"), repo_root))
    scan_text_patterns(skill_rel_path, content, findings)

    for file_path in file_paths:
        rel_path = to_posix_path(os.path.relpath(file_path, repo_root))
        if is_binary_like_file(file_path):
            binary_like_files += 1
        if is_script_candidate(file_path):
            script_files += 1

        if is_text_scan_candidate(file_path):
            scanned_files += 1
            file_content = safe_read_text_file(file_path)
            if rel_path != skill_rel_path:
                scan_text_patterns(rel_path, file_content, findings)
            if is_script_candidate(file_path):
                scan_script_patterns(rel_path, file_content, findings)
                scan_targets.append(
                    {
                        "path": rel_path,
                        "sha256": sha256_file(file_path),
                    }
                )

    clamav = run_clamscan(file_paths)
    if clamav.get("infected_files", 0) > 0:
        for detection in clamav.get("detections", []):
            add_security_finding(
                findings,
                finding_id="clamav-detection",
                kind="malware",
                severity="critical",
                rel_path=detection["path"],
                message="ClamAV reported a positive detection.",
                evidence=detection["result"],
            )

    virustotal = run_virustotal_lookup(scan_targets)
    for result in virustotal.get("results", []):
        if result.get("status") != "completed":
            continue
        if result.get("malicious", 0) > 0:
            add_security_finding(
                findings,
                finding_id="virustotal-malicious",
                kind="malware",
                severity="critical",
                rel_path=result["path"],
                message="VirusTotal hash lookup reported malicious detections.",
                evidence=f"malicious={result.get('malicious', 0)} suspicious={result.get('suspicious', 0)}",
            )
        elif result.get("suspicious", 0) > 0:
            add_security_finding(
                findings,
                finding_id="virustotal-suspicious",
                kind="malware",
                severity="high",
                rel_path=result["path"],
                message="VirusTotal hash lookup reported suspicious detections.",
                evidence=f"malicious={result.get('malicious', 0)} suspicious={result.get('suspicious', 0)}",
            )

    findings.sort(
        key=lambda item: (
            -severity_rank(item["severity"]),
            item["path"],
            item.get("line", 0),
            item["id"],
        )
    )

    score, tier, status = compute_security_score(
        findings=findings,
        has_scripts=script_files > 0,
        has_binary_like_files=binary_like_files > 0,
    )

    return {
        "score": score,
        "tier": tier,
        "status": status,
        "findings_count": len(findings),
        "findings": findings[:40],
        "signals": {
            "scanned_files": scanned_files,
            "script_files": script_files,
            "binary_like_files": binary_like_files,
        },
        "scanners": {
            "static": {
                "enabled": True,
                "status": "completed",
            },
            "clamav": clamav,
            "virustotal": virustotal,
        },
    }


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


def extract_markdown_section(content: str, headings: List[str]) -> str:
    heading_pattern = "|".join(re.escape(heading) for heading in headings if heading)
    if not heading_pattern:
        return ""

    match = re.search(
        rf"^##\s*(?:{heading_pattern})\s*$",
        content,
        re.IGNORECASE | re.MULTILINE,
    )
    if not match:
        return ""

    start = match.end()
    remainder = content[start:]
    next_heading = re.search(r"^##\s+", remainder, re.MULTILINE)
    section = remainder[: next_heading.start()] if next_heading else remainder
    return section.strip()


def count_list_items(section: str) -> int:
    return len(re.findall(r"^\s*(?:-|\*|\d+\.)\s+", section, re.MULTILINE))


def count_code_blocks(section: str) -> int:
    return len(re.findall(r"```(?:python|bash|sh|typescript|javascript|json|yaml|toml)?", section, re.IGNORECASE))


def compute_semantic_signals(
    content: str,
    sub_resources: List[str],
    metadata_fields: Dict[str, Any],
) -> Dict[str, Any]:
    body = strip_frontmatter(content).strip()
    workflow_section = extract_markdown_section(content, ["workflow", "steps", "instructions", "guide", "how to"])
    when_to_use_section = extract_markdown_section(
        content,
        ["when to use", "when to use this skill", "use this skill when"],
    )
    best_practices_section = extract_markdown_section(content, ["best practices", "guidelines"])
    troubleshooting_section = extract_markdown_section(content, ["troubleshooting"])
    resources_section = extract_markdown_section(content, ["additional resources", "references", "further reading"])
    examples_section = extract_markdown_section(content, ["example", "examples", "quick start", "usage"])
    related_skills_section = extract_markdown_section(content, ["related skills"])

    workflow_steps_count = count_list_items(workflow_section)
    best_practices_items_count = count_list_items(best_practices_section)
    troubleshooting_items_count = count_list_items(troubleshooting_section)
    resources_items_count = count_list_items(resources_section)
    examples_code_blocks_count = count_code_blocks(examples_section)
    decision_assets_count = len(
        re.findall(
            r"\b(checklist|template|rubric|matrix|decision tree|playbook|packet|worksheet)\b",
            content,
            re.IGNORECASE,
        )
    )
    table_count = len(re.findall(r"^\|.+\|\s*$", content, re.MULTILINE))
    linked_resource_families = {
        family
        for family in ("references", "scripts", "assets", "agents", "examples")
        if re.search(rf"\]\(({family})/", content, re.IGNORECASE)
        or family in [entry.lower() for entry in sub_resources]
    }
    tools = parse_string_list(metadata_fields.get("tools"))
    tags = parse_string_list(metadata_fields.get("tags"))

    return {
        "workflow_steps_count": workflow_steps_count,
        "workflow_section_length": len(workflow_section),
        "when_to_use_section_length": len(when_to_use_section),
        "best_practices_items_count": best_practices_items_count,
        "best_practices_section_length": len(best_practices_section),
        "troubleshooting_items_count": troubleshooting_items_count,
        "troubleshooting_section_length": len(troubleshooting_section),
        "resources_items_count": resources_items_count,
        "resources_section_length": len(resources_section),
        "examples_section_length": len(examples_section),
        "examples_code_blocks_count": examples_code_blocks_count,
        "related_skills_section_length": len(related_skills_section),
        "decision_assets_count": decision_assets_count,
        "table_count": table_count,
        "linked_resource_families_count": len(linked_resource_families),
        "linked_resource_families": sorted(linked_resource_families),
        "tools_count": len(tools),
        "tags_count": len(tags),
        "body_density": round(len(re.findall(r"\b\w+\b", body)) / max(1, len(body.splitlines())), 2),
    }


def score_best_practices(
    skill_name: str,
    description: str,
    content: str,
    metadata_fields: Dict[str, Any],
    sub_resources: List[str],
    semantic_signals: Dict[str, Any],
) -> int:
    score = 0
    name = normalize_text(skill_name)
    desc = normalize_text(description)
    body = strip_frontmatter(content).strip()
    body_word_count = len(re.findall(r"\b\w+\b", body))
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
    has_examples_section = bool(re.search(r"##\s*(example|quick\s*start|usage|examples)", content, re.IGNORECASE))
    has_workflow_section = bool(re.search(r"##\s*(workflow|steps|instructions|guide|how\s*to)", content, re.IGNORECASE))
    has_when_to_use_section = bool(re.search(r"##\s*(when to use|when to use this skill|use this skill when)", content, re.IGNORECASE))
    has_best_practices_section = bool(re.search(r"##\s*(best practices|guidelines)", content, re.IGNORECASE))
    has_troubleshooting_section = bool(re.search(r"##\s*troubleshooting", content, re.IGNORECASE))
    has_additional_resources_section = bool(
        re.search(r"##\s*(additional resources|references|further reading)", content, re.IGNORECASE)
    )
    has_related_skills_section = bool(re.search(r"##\s*related skills", content, re.IGNORECASE))
    has_local_support_links = bool(re.search(r"\]\((references|scripts)/", content, re.IGNORECASE))
    has_local_script_example = bool(
        re.search(
            r"```(?:python|bash|sh)[\s\S]*?(?:python3?\s+scripts/|bash\s+scripts/|sh\s+scripts/|scripts/)",
            content,
            re.IGNORECASE,
        )
    )
    example_count = len(re.findall(r"^###\s*example\b", content, re.IGNORECASE | re.MULTILINE))
    problem_count = len(re.findall(r"^###\s*problem:", content, re.IGNORECASE | re.MULTILINE))
    related_skills_count = len(re.findall(r"^\s*-\s+`@[^`]+`", content, re.IGNORECASE | re.MULTILINE))
    local_support_links_count = len(re.findall(r"\]\((references|scripts)/", content, re.IGNORECASE))
    typed_code_blocks_count = len(
        re.findall(r"```(?:python|bash|sh|typescript|javascript|ruby|go|json|yaml|toml)", content, re.IGNORECASE)
    )
    local_script_example_count = len(
        re.findall(r"(?:python3?\s+scripts/|bash\s+scripts/|sh\s+scripts/)", content, re.IGNORECASE)
    )
    has_troubleshooting_pairs = bool(
        re.search(r"\*\*Symptoms:\*\*[\s\S]{0,400}\*\*Solution:\*\*", content, re.IGNORECASE)
    )
    troubleshooting_pairs_count = len(
        re.findall(r"\*\*Symptoms:\*\*[\s\S]{0,400}\*\*Solution:\*\*", content, re.IGNORECASE)
    )
    tags = parse_string_list(metadata_fields.get("tags"))
    tools = parse_string_list(metadata_fields.get("tools"))
    section_inventory = sum(
        1
        for present in (
            has_examples_section,
            has_workflow_section,
            has_when_to_use_section,
            has_best_practices_section,
            has_troubleshooting_section,
            has_additional_resources_section,
            has_related_skills_section,
        )
        if present
    )

    if len(name) <= 64 and re.match(r"^[a-z0-9][a-z0-9-]*$", name) and not reserved_words.search(name):
        score += 5
    if len(desc) >= 20 and has_what and has_when:
        score += 7
    if len(desc) >= 120:
        score += 3
    elif len(desc) >= 80:
        score += 2
    elif len(desc) >= 40:
        score += 1
    if not has_hardcoded_date:
        score += 2
    if not re.search(r"[A-Z]:\\|\\\\", content):
        score += 2
    pt_headers = len(re.findall(r"##\s*(como|quando|exemplo|passo)", content, re.IGNORECASE))
    en_headers = len(re.findall(r"##\s*(how|when|example|step|usage)", content, re.IGNORECASE))
    if pt_headers == 0 or en_headers == 0:
        score += 3

    if has_when_to_use_section:
        score += 4
    if has_workflow_section:
        score += 4
    if has_examples_section:
        score += 4
    if has_best_practices_section:
        score += 4
    if has_troubleshooting_section:
        score += 3
    if has_additional_resources_section:
        score += 2
    if has_related_skills_section:
        score += 2
    if section_inventory >= 7:
        score += 5
    elif section_inventory >= 5:
        score += 3

    if body_word_count >= 900:
        score += 6
    elif body_word_count >= 650:
        score += 5
    elif body_word_count >= 550:
        score += 4
    elif body_word_count >= 450:
        score += 3
    elif body_word_count >= 300:
        score += 2
    if example_count >= 3:
        score += 5
    elif example_count >= 2:
        score += 4
    elif example_count >= 1:
        score += 2
    if problem_count >= 2:
        score += 4
    elif problem_count >= 1:
        score += 2
    if related_skills_count >= 3:
        score += 4
    elif related_skills_count >= 2:
        score += 3
    elif related_skills_count >= 1:
        score += 2
    if local_support_links_count >= 4:
        score += 5
    elif local_support_links_count >= 2:
        score += 4
    elif local_support_links_count >= 1:
        score += 2
    if has_local_support_links:
        score += 1
    if local_script_example_count >= 2:
        score += 4
    elif has_local_script_example:
        score += 3
    if typed_code_blocks_count >= 3:
        score += 4
    elif typed_code_blocks_count >= 2:
        score += 3
    elif typed_code_blocks_count >= 1:
        score += 2
    if troubleshooting_pairs_count >= 2:
        score += 3
    elif has_troubleshooting_pairs:
        score += 2
    if len(sub_resources) >= 4:
        score += 6
    elif len(sub_resources) >= 3:
        score += 4
    elif len(sub_resources) >= 2:
        score += 3
    elif len(sub_resources) >= 1:
        score += 1
    if len(tags) >= 6:
        score += 2
    elif len(tags) >= 4:
        score += 1
    if len(tools) >= 6:
        score += 2
    elif len(tools) >= 4:
        score += 1

    workflow_steps_count = semantic_signals.get("workflow_steps_count", 0)
    if workflow_steps_count >= 7:
        score += 6
    elif workflow_steps_count >= 5:
        score += 5
    elif workflow_steps_count >= 3:
        score += 3

    if semantic_signals.get("best_practices_items_count", 0) >= 6:
        score += 5
    elif semantic_signals.get("best_practices_items_count", 0) >= 4:
        score += 4
    elif semantic_signals.get("best_practices_items_count", 0) >= 2:
        score += 2

    if semantic_signals.get("troubleshooting_section_length", 0) >= 700:
        score += 5
    elif semantic_signals.get("troubleshooting_section_length", 0) >= 450:
        score += 4
    elif semantic_signals.get("troubleshooting_section_length", 0) >= 220:
        score += 2

    if semantic_signals.get("resources_items_count", 0) >= 5:
        score += 4
    elif semantic_signals.get("resources_items_count", 0) >= 3:
        score += 3
    elif semantic_signals.get("resources_items_count", 0) >= 1:
        score += 1

    if semantic_signals.get("examples_code_blocks_count", 0) >= 4:
        score += 4
    elif semantic_signals.get("examples_code_blocks_count", 0) >= 2:
        score += 3
    elif semantic_signals.get("examples_code_blocks_count", 0) >= 1:
        score += 1

    if semantic_signals.get("linked_resource_families_count", 0) >= 4:
        score += 5
    elif semantic_signals.get("linked_resource_families_count", 0) >= 3:
        score += 4
    elif semantic_signals.get("linked_resource_families_count", 0) >= 2:
        score += 2

    if semantic_signals.get("decision_assets_count", 0) >= 3:
        score += 5
    elif semantic_signals.get("decision_assets_count", 0) >= 1:
        score += 3

    if semantic_signals.get("table_count", 0) >= 2:
        score += 2
    elif semantic_signals.get("table_count", 0) >= 1:
        score += 1

    if semantic_signals.get("body_density", 0) >= 10:
        score += 2
    elif semantic_signals.get("body_density", 0) >= 7:
        score += 1

    # Separate truly exceptional workflow kits from skills that are simply
    # very well formatted. Mature skills should still score high, but the top
    # band now depends on support-pack breadth and operational depth.
    decision_assets_count = semantic_signals.get("decision_assets_count", 0)
    if decision_assets_count < 10:
        score -= 3
    elif decision_assets_count < 14:
        score -= 2
    elif decision_assets_count < 18:
        score -= 1

    body_density = semantic_signals.get("body_density", 0)
    if body_density < 5.5:
        score -= 3
    elif body_density < 6.25:
        score -= 2
    elif body_density < 7:
        score -= 1

    if local_support_links_count < 2:
        score -= 3
    elif local_support_links_count < 3:
        score -= 2
    elif local_support_links_count < 4:
        score -= 1

    linked_resource_families_count = semantic_signals.get("linked_resource_families_count", 0)
    if linked_resource_families_count < 2:
        score -= 3
    elif linked_resource_families_count < 3:
        score -= 2
    elif linked_resource_families_count < 4:
        score -= 1

    max_score = 100
    if workflow_steps_count < 5:
        max_score = min(max_score, 98)
    if problem_count < 3:
        max_score = min(max_score, 98)
    if semantic_signals.get("resources_items_count", 0) < 5:
        max_score = min(max_score, 99)
    if semantic_signals.get("table_count", 0) < 1:
        max_score = min(max_score, 99)
    if related_skills_count < 3:
        max_score = min(max_score, 99)
    if local_support_links_count < 4:
        max_score = min(max_score, 98)
    if linked_resource_families_count < 4:
        max_score = min(max_score, 99)

    return max(0, min(score, max_score, 100))


def best_practices_tier(score: int) -> str:
    if score >= 90:
        return "excellent"
    if score >= 70:
        return "good"
    if score >= 50:
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
    semantic_signals: Dict[str, Any],
) -> Tuple[int, Dict[str, int]]:
    details = {
        "body": 0,
        "description": 0,
        "metadata": 0,
        "recency": 0,
        "resources": 0,
        "best_practices": 0,
        "semantic_depth": 0,
        "operational_depth": 0,
        "support_pack": 0,
    }

    if body_length >= 3200:
        details["body"] = 16
    elif body_length >= 2500:
        details["body"] = 14
    elif body_length >= 1800:
        details["body"] = 12
    elif body_length >= 1200:
        details["body"] = 10
    elif body_length >= 800:
        details["body"] = 7
    elif body_length >= 400:
        details["body"] = 5
    elif body_length > 0:
        details["body"] = 3

    description_length = len(description)
    description_lower = description.lower()
    description_precision = 0
    if re.search(r"\b(use this skill|when|should be used|best for|ideal for)\b", description_lower):
        description_precision += 2
    if re.search(r"\b(workflow|playbook|review|design|install|audit|debug|diagnos)\b", description_lower):
        description_precision += 1

    if description_length >= 140:
        details["description"] = 8
    elif description_length >= 100:
        details["description"] = 6
    elif description_length >= 70:
        details["description"] = 5
    elif description_length >= 40:
        details["description"] = 3
    elif description_length >= 20:
        details["description"] = 2
    elif description_length > 0:
        details["description"] = 1
    details["description"] = min(details["description"] + description_precision, 10)

    metadata_score = 0
    if metadata_fields.get("version"):
        metadata_score += 1
    if metadata_fields.get("category"):
        metadata_score += 1
    if metadata_fields.get("risk"):
        metadata_score += 1
    if metadata_fields.get("source"):
        metadata_score += 1
    if metadata_fields.get("author"):
        metadata_score += 1
    if metadata_fields.get("complexity"):
        metadata_score += 1
    if parse_string_list(metadata_fields.get("tags")):
        metadata_score += 2
    if parse_string_list(metadata_fields.get("tools")):
        metadata_score += 2
    if metadata_fields.get("date_added"):
        metadata_score += 1
    if metadata_fields.get("date_updated"):
        metadata_score += 1
    if parse_string_list(metadata_fields.get("tags")) and len(parse_string_list(metadata_fields.get("tags"))) >= 6:
        metadata_score += 1
    if parse_string_list(metadata_fields.get("tools")) and len(parse_string_list(metadata_fields.get("tools"))) >= 5:
        metadata_score += 1
    details["metadata"] = min(metadata_score, 12)

    updated_at = parse_iso_date(normalize_text(metadata_fields.get("date_updated"))) or file_mtime
    age_days = max(0, (datetime.now(timezone.utc) - updated_at).days)
    if age_days <= 30:
        details["recency"] = 8
    elif age_days <= 90:
        details["recency"] = 7
    elif age_days <= 180:
        details["recency"] = 5
    elif age_days <= 365:
        details["recency"] = 3
    elif age_days <= 730:
        details["recency"] = 1

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

    if best_practices_score >= 98:
        details["best_practices"] = 10
    elif best_practices_score >= 95:
        details["best_practices"] = 9
    elif best_practices_score >= 92:
        details["best_practices"] = 8
    elif best_practices_score >= 88:
        details["best_practices"] = 7
    elif best_practices_score >= 84:
        details["best_practices"] = 6
    elif best_practices_score >= 78:
        details["best_practices"] = 5
    elif best_practices_score >= 72:
        details["best_practices"] = 4
    elif best_practices_score >= 66:
        details["best_practices"] = 3
    elif best_practices_score >= 60:
        details["best_practices"] = 2

    semantic_depth = 0
    if semantic_signals.get("workflow_steps_count", 0) >= 7:
        semantic_depth += 5
    elif semantic_signals.get("workflow_steps_count", 0) >= 5:
        semantic_depth += 4
    elif semantic_signals.get("workflow_steps_count", 0) >= 3:
        semantic_depth += 2
    if semantic_signals.get("linked_resource_families_count", 0) >= 4:
        semantic_depth += 4
    elif semantic_signals.get("linked_resource_families_count", 0) >= 3:
        semantic_depth += 3
    elif semantic_signals.get("linked_resource_families_count", 0) >= 2:
        semantic_depth += 1
    if semantic_signals.get("troubleshooting_items_count", 0) >= 3:
        semantic_depth += 3
    elif semantic_signals.get("troubleshooting_section_length", 0) >= 450:
        semantic_depth += 3
    elif semantic_signals.get("troubleshooting_section_length", 0) >= 220:
        semantic_depth += 2
    if semantic_signals.get("decision_assets_count", 0) >= 6:
        semantic_depth += 4
    elif semantic_signals.get("decision_assets_count", 0) >= 4:
        semantic_depth += 3
    elif semantic_signals.get("decision_assets_count", 0) >= 3:
        semantic_depth += 2
    elif semantic_signals.get("decision_assets_count", 0) >= 2:
        semantic_depth += 2
    elif semantic_signals.get("decision_assets_count", 0) >= 1:
        semantic_depth += 1
    if semantic_signals.get("examples_code_blocks_count", 0) >= 4:
        semantic_depth += 2
    elif semantic_signals.get("examples_code_blocks_count", 0) >= 2:
        semantic_depth += 1
    if semantic_signals.get("related_skills_section_length", 0) >= 120:
        semantic_depth += 2
    elif semantic_signals.get("related_skills_section_length", 0) >= 40:
        semantic_depth += 1
    if semantic_signals.get("when_to_use_section_length", 0) >= 260:
        semantic_depth += 2
    elif semantic_signals.get("when_to_use_section_length", 0) >= 120:
        semantic_depth += 1
    details["semantic_depth"] = min(semantic_depth, 16)

    operational_depth = 0
    if semantic_signals.get("best_practices_items_count", 0) >= 6:
        operational_depth += 3
    elif semantic_signals.get("best_practices_items_count", 0) >= 4:
        operational_depth += 2
    elif semantic_signals.get("best_practices_items_count", 0) >= 2:
        operational_depth += 1
    if semantic_signals.get("resources_items_count", 0) >= 5:
        operational_depth += 3
    elif semantic_signals.get("resources_items_count", 0) >= 3:
        operational_depth += 2
    elif semantic_signals.get("resources_items_count", 0) >= 1:
        operational_depth += 1
    if semantic_signals.get("table_count", 0) >= 2:
        operational_depth += 2
    elif semantic_signals.get("table_count", 0) >= 1:
        operational_depth += 1
    if semantic_signals.get("body_density", 0) >= 11:
        operational_depth += 2
    elif semantic_signals.get("body_density", 0) >= 8:
        operational_depth += 1
    elif semantic_signals.get("body_density", 0) >= 5.5:
        operational_depth += 1
    if semantic_signals.get("tools_count", 0) >= 5 or semantic_signals.get("tags_count", 0) >= 6:
        operational_depth += 1
    details["operational_depth"] = min(operational_depth, 10)

    support_pack = 0
    if semantic_signals.get("linked_resource_families_count", 0) >= 4:
        support_pack += 5
    elif semantic_signals.get("linked_resource_families_count", 0) >= 3:
        support_pack += 4
    elif semantic_signals.get("linked_resource_families_count", 0) >= 2:
        support_pack += 1
    elif semantic_signals.get("linked_resource_families_count", 0) >= 1:
        support_pack += 1
    if semantic_signals.get("decision_assets_count", 0) >= 6:
        support_pack += 4
    elif semantic_signals.get("decision_assets_count", 0) >= 4:
        support_pack += 3
    elif semantic_signals.get("decision_assets_count", 0) >= 2:
        support_pack += 2
    elif semantic_signals.get("decision_assets_count", 0) >= 1:
        support_pack += 1
    if semantic_signals.get("examples_section_length", 0) >= 650:
        support_pack += 2
    elif semantic_signals.get("examples_section_length", 0) >= 500:
        support_pack += 1
    if semantic_signals.get("resources_section_length", 0) >= 300:
        support_pack += 1
    if semantic_signals.get("body_density", 0) >= 7:
        support_pack += 1
    details["support_pack"] = min(support_pack, 8)

    total = sum(details.values())
    max_score = 100
    body_density = semantic_signals.get("body_density", 0)
    if body_density < 5.2:
        max_score = min(max_score, 94)
    elif body_density < 5.6:
        max_score = min(max_score, 95)
    elif body_density < 6.0:
        max_score = min(max_score, 96)
    elif body_density < 6.4:
        max_score = min(max_score, 97)
    elif body_density < 7.0:
        max_score = min(max_score, 98)
    elif body_density < 8.0:
        max_score = min(max_score, 99)

    linked_resource_families_count = semantic_signals.get("linked_resource_families_count", 0)
    if linked_resource_families_count < 3:
        max_score = min(max_score, 95)
    elif linked_resource_families_count < 4:
        max_score = min(max_score, 97)
    elif linked_resource_families_count < 5:
        max_score = min(max_score, 99)

    resources_items_count = semantic_signals.get("resources_items_count", 0)
    if resources_items_count < 3:
        max_score = min(max_score, 95)
    elif resources_items_count < 5:
        max_score = min(max_score, 97)
    elif resources_items_count < 7:
        max_score = min(max_score, 99)

    if best_practices_score < 95:
        max_score = min(max_score, 96)
    elif best_practices_score < 98:
        max_score = min(max_score, 98)

    return min(total, max_score, 100), details


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
    semantic_signals = compute_semantic_signals(content, sub_resources, frontmatter)
    file_mtime = (
        parse_iso_date(normalize_text(frontmatter.get("date_updated")))
        or parse_iso_date(normalize_text(frontmatter.get("date_added")))
        or STABLE_FALLBACK_DATETIME
    )
    best_practices_score = score_best_practices(
        normalize_text(frontmatter.get("name")) or skill_name,
        description,
        content,
        frontmatter,
        sub_resources,
        semantic_signals,
    )
    quality_score, quality_details = compute_quality_score(
        description,
        len(body),
        frontmatter,
        best_practices_score,
        level,
        file_mtime,
        semantic_signals,
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
    security = scan_skill_security(skill_dir, repo_root, files, content)

    for finding in security["findings"]:
        severity = finding["severity"]
        message = f"security {severity}: {finding['message']} [{finding['path']}]"
        if severity == "critical":
            issues.append(("ERROR", message))
        elif severity in {"high", "medium"}:
            issues.append(("WARN", message))

    metadata = {
        "schema_version": SCHEMA_VERSION,
        "generated_at": stable_generated_at(
            normalize_text(frontmatter.get("date_updated")),
            normalize_text(frontmatter.get("date_added")),
            file_mtime,
        ),
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
            "file_mtime": stable_isoformat(file_mtime),
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
            "typed_code_blocks_count": len(
                re.findall(r"```(?:python|bash|sh|typescript|javascript|ruby|go|json|yaml|toml)", content, re.IGNORECASE)
            ),
            "has_examples_section": bool(re.search(r"##\s*(example|examples|quick\s*start|usage)", content, re.IGNORECASE)),
            "example_count": len(re.findall(r"^###\s*example\b", content, re.IGNORECASE | re.MULTILINE)),
            "has_workflow_section": bool(re.search(r"##\s*(workflow|steps|instructions|guide|how\s*to)", content, re.IGNORECASE)),
            "has_when_to_use_section": bool(
                re.search(r"##\s*(when to use|when to use this skill|use this skill when)", content, re.IGNORECASE)
            ),
            "has_best_practices_section": bool(re.search(r"##\s*(best practices|guidelines)", content, re.IGNORECASE)),
            "has_troubleshooting_section": bool(re.search(r"##\s*troubleshooting", content, re.IGNORECASE)),
            "problem_count": len(re.findall(r"^###\s*problem:", content, re.IGNORECASE | re.MULTILINE)),
            "troubleshooting_pairs_count": len(
                re.findall(r"\*\*Symptoms:\*\*[\s\S]{0,400}\*\*Solution:\*\*", content, re.IGNORECASE)
            ),
            "has_additional_resources_section": bool(
                re.search(r"##\s*(additional resources|references|further reading)", content, re.IGNORECASE)
            ),
            "has_related_skills_section": bool(re.search(r"##\s*related skills", content, re.IGNORECASE)),
            "related_skills_count": len(re.findall(r"^\s*-\s+`@[^`]+`", content, re.IGNORECASE | re.MULTILINE)),
            "has_local_support_links": bool(re.search(r"\]\((references|scripts)/", content, re.IGNORECASE)),
            "local_support_links_count": len(re.findall(r"\]\((references|scripts)/", content, re.IGNORECASE)),
            "has_local_script_example": bool(
                re.search(
                    r"```(?:python|bash|sh)[\s\S]*?(?:python3?\s+scripts/|bash\s+scripts/|sh\s+scripts/|scripts/)",
                    content,
                    re.IGNORECASE,
                )
            ),
            "local_script_example_count": len(
                re.findall(r"(?:python3?\s+scripts/|bash\s+scripts/|sh\s+scripts/)", content, re.IGNORECASE)
            ),
            "semantic_signals": semantic_signals,
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
            "signals": semantic_signals,
        },
        "quality": {
            "score": quality_score,
            "tier": quality_tier(quality_score),
            "breakdown": quality_details,
        },
        "security": security,
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
    security_tiers: Dict[str, int] = {}
    security_status_counts = {"passed": 0, "warn": 0, "failed": 0}
    validation_counts = {"passed": 0, "warn": 0, "failed": 0}

    for record in skill_records:
        category = record["canonical_category"]
        category_counts[category] = category_counts.get(category, 0) + 1

        level_key = f"l{record['maturity']['skill_level']}"
        level_counts[level_key] = level_counts.get(level_key, 0) + 1

        quality_tier_name = record["quality"]["tier"]
        quality_tiers[quality_tier_name] = quality_tiers.get(quality_tier_name, 0) + 1

        security_tier_name = record["security"]["tier"]
        security_tiers[security_tier_name] = security_tiers.get(security_tier_name, 0) + 1

        security_status = record["security"]["status"]
        security_status_counts[security_status] = security_status_counts.get(security_status, 0) + 1

        validation_status = record["validation"]["status"]
        validation_counts[validation_status] = validation_counts.get(validation_status, 0) + 1

    total_skills = len(skill_records)
    average_quality = round(
        sum(record["quality"]["score"] for record in skill_records) / total_skills, 1
    ) if total_skills else 0
    average_best_practices = round(
        sum(record["best_practices"]["score"] for record in skill_records) / total_skills, 1
    ) if total_skills else 0
    average_security = round(
        sum(record["security"]["score"] for record in skill_records) / total_skills, 1
    ) if total_skills else 0

    return {
        "schema_version": SCHEMA_VERSION,
        "generated_at": stable_generated_at(
            *[
                record.get("generated_at")
                or record.get("dates", {}).get("updated")
                or record.get("dates", {}).get("added")
                for record in skill_records
            ]
        ),
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
            "average_security_score": average_security,
        },
        "taxonomy": {
            "canonical_categories": CANONICAL_CATEGORIES,
            "counts": dict(sorted(category_counts.items())),
        },
        "distribution": {
            "skill_levels": level_counts,
            "quality_tiers": dict(sorted(quality_tiers.items())),
            "security_tiers": dict(sorted(security_tiers.items())),
            "security_status": security_status_counts,
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
                "security_score": record["security"]["score"],
                "security_tier": record["security"]["tier"],
                "security_status": record["security"]["status"],
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
