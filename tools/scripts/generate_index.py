#!/usr/bin/env python3
"""
Generate repository and machine-readable skill artifacts.

Outputs:
- skills_index.json
- dist/catalog.json
- dist/bundles.json
- dist/manifests/<skill>.json
"""

import json
import os
import sys
import hashlib
from datetime import datetime, timezone

from skill_metadata import (
    SCHEMA_VERSION,
    get_sub_resources,
    load_skill_metadata,
    parse_frontmatter,
    strip_frontmatter,
    extract_title,
    validate_skill,
    to_posix_path,
)


INDEX_VERSION = "1.2.0"

KNOWN_TOOL_TARGETS = {
    "claude-code": {
        "scope": "user-global",
        "default_path": "~/.claude/skills",
        "installer_flag": "--claude",
        "invocation": ">> /skill-name help me...",
    },
    "cursor": {
        "scope": "user-global",
        "default_path": "~/.cursor/skills",
        "installer_flag": "--cursor",
        "invocation": "@skill-name",
    },
    "gemini-cli": {
        "scope": "user-global",
        "default_path": "~/.gemini/skills",
        "installer_flag": "--gemini",
        "invocation": "Use @skill-name to...",
    },
    "codex-cli": {
        "scope": "user-global",
        "default_path": "~/.codex/skills",
        "installer_flag": "--codex",
        "invocation": "Use @skill-name to...",
    },
    "kiro": {
        "scope": "user-global",
        "default_path": "~/.kiro/skills",
        "installer_flag": "--kiro",
        "invocation": "Skills auto-load on demand",
    },
    "antigravity": {
        "scope": "user-global",
        "default_path": "~/.gemini/antigravity/skills",
        "installer_flag": "--antigravity",
        "invocation": "Use @skill-name to... (Agent Mode)",
    },
    "opencode": {
        "scope": "project-local",
        "default_path": ".agents/skills",
        "installer_flag": "--opencode",
        "invocation": "opencode run @skill-name",
    },
}

RESOURCE_KIND_MAP = {
    "references": "reference",
    "agents": "agent",
    "assets": "asset",
}


def find_skills_dir():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_root = os.path.dirname(os.path.dirname(script_dir))
    return os.path.join(repo_root, "skills"), repo_root


def load_bundle_definitions(repo_root):
    bundles_path = os.path.join(repo_root, "data", "bundles.json")
    if not os.path.isfile(bundles_path):
        return []

    with open(bundles_path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def sha256_file(file_path):
    digest = hashlib.sha256()
    with open(file_path, "rb") as handle:
        while True:
            chunk = handle.read(65536)
            if not chunk:
                break
            digest.update(chunk)
    return digest.hexdigest()


def artifact_kind_from_relpath(relative_path):
    rel_parts = relative_path.split("/")
    if relative_path.endswith("/SKILL.md"):
        return "entrypoint"
    if rel_parts[-1] == "LICENSE.txt":
        return "license"
    if len(rel_parts) >= 4:
        return RESOURCE_KIND_MAP.get(rel_parts[2], "support")
    return "support"


def collect_artifacts(skill_path, repo_root):
    artifacts = []
    for root, dirs, files in os.walk(skill_path):
        dirs[:] = sorted(directory for directory in dirs if not directory.startswith("."))
        for file_name in sorted(files):
            if file_name.startswith("."):
                continue
            full_path = os.path.join(root, file_name)
            rel_path = to_posix_path(os.path.relpath(full_path, repo_root))
            artifacts.append(
                {
                    "path": rel_path,
                    "kind": artifact_kind_from_relpath(rel_path),
                    "size_bytes": os.path.getsize(full_path),
                    "sha256": sha256_file(full_path),
                }
            )
    return artifacts


def compute_package_sha256(artifacts):
    digest = hashlib.sha256()
    for artifact in sorted(artifacts, key=lambda item: item["path"]):
        digest.update(artifact["path"].encode("utf-8"))
        digest.update(b"\0")
        digest.update(artifact["sha256"].encode("utf-8"))
        digest.update(b"\n")
    return digest.hexdigest()


def build_install_targets(tool_names):
    targets = []
    for tool_name in tool_names:
        target = KNOWN_TOOL_TARGETS.get(tool_name)
        if not target:
            continue
        targets.append(
            {
                "tool": tool_name,
                "scope": target["scope"],
                "default_path": target["default_path"],
                "installer_flag": target["installer_flag"],
                "current_installer_behavior": "Installs the full Omni Skills library by default. Use --skill or --bundle to install only a selected subset.",
                "invocation": target["invocation"],
            }
        )
    return targets


def build_install_recipes(tool_names):
    recipes = []
    for tool_name in tool_names:
        target = KNOWN_TOOL_TARGETS.get(tool_name)
        if not target:
            continue
        recipes.append(
            {
                "tool": tool_name,
                "command": f"npx omni-skills {target['installer_flag']}",
                "scope": target["scope"],
                "default_path": target["default_path"],
                "behavior": "Installs the full Omni Skills library by default. Use --skill or --bundle to install only a selected subset.",
            }
        )
    return recipes


def build_manifest(entry, frontmatter, content, sub_resources, artifacts, metadata):
    entrypoint = f"skills/{entry}/SKILL.md"
    manifest_path = f"dist/manifests/{entry}.json"
    title = extract_title(strip_frontmatter(content)) or metadata["display_name"]
    tools = metadata["tools"]

    return {
        "schema_version": SCHEMA_VERSION,
        "id": metadata["id"],
        "slug": entry,
        "display_name": title,
        "description": metadata["description"],
        "version": metadata["version"],
        "category": metadata["canonical_category"],
        "raw_category": metadata["raw_category"],
        "taxonomy": metadata["taxonomy"],
        "tags": metadata["tags"],
        "complexity": metadata["complexity"],
        "risk": metadata["risk"],
        "source": metadata["source"],
        "author": metadata["author"],
        "dates": {
            "added": metadata["dates"]["added"],
            "updated": metadata["dates"]["updated"],
        },
        "entrypoint": entrypoint,
        "paths": {
            "root": f"skills/{entry}",
            "manifest": manifest_path,
            "metadata": metadata["paths"]["metadata"],
        },
        "compatibility": {
            "tools": tools,
            "install_targets": build_install_targets(tools),
        },
        "resources": {
            "sub_resources": sub_resources,
            "artifacts_count": len(artifacts),
            "references_count": metadata["resources"]["references_count"],
            "agents_count": metadata["resources"]["agents_count"],
            "assets_count": metadata["resources"]["assets_count"],
        },
        "dependencies": {
            "skills": [],
            "external": [],
        },
        "install": {
            "strategy": "copy-skill-directory",
            "current_installer": "npx omni-skills installs the full library by default today, and also supports selective installation with --skill and --bundle.",
            "recipes": build_install_recipes(tools),
        },
        "classification": {
            "maturity": metadata["maturity"],
            "best_practices": metadata["best_practices"],
            "quality": metadata["quality"],
            "validation": metadata["validation"],
        },
        "content": metadata["content"],
        "artifacts": artifacts,
        "checksums": {
            "entrypoint_sha256": next((item["sha256"] for item in artifacts if item["path"] == entrypoint), ""),
            "package_sha256": compute_package_sha256(artifacts),
        },
    }


def load_or_build_metadata(skill_path, entry, repo_root):
    metadata = load_skill_metadata(skill_path)
    if metadata:
        return metadata

    issues, metadata = validate_skill(skill_path, entry, repo_root, strict=False)
    if metadata and any(level == "ERROR" for level, _ in issues):
        return metadata
    return metadata


def main():
    skills_dir, repo_root = find_skills_dir()
    output_path = os.path.join(repo_root, "skills_index.json")
    dist_dir = os.path.join(repo_root, "dist")
    manifests_dir = os.path.join(dist_dir, "manifests")
    catalog_path = os.path.join(dist_dir, "catalog.json")
    bundles_path = os.path.join(dist_dir, "bundles.json")

    if not os.path.isdir(skills_dir):
        print(f"✗ Skills directory not found: {skills_dir}")
        sys.exit(1)

    os.makedirs(manifests_dir, exist_ok=True)

    generated_at = datetime.now(timezone.utc).isoformat()
    index = {
        "schema_version": SCHEMA_VERSION,
        "version": INDEX_VERSION,
        "generated_at": generated_at,
        "total_skills": 0,
        "categories": {},
        "skills": [],
    }

    category_counts = {}
    manifests = []

    for entry in sorted(os.listdir(skills_dir)):
        skill_path = os.path.join(skills_dir, entry)
        if not os.path.isdir(skill_path) or entry.startswith("."):
            continue

        skill_md = os.path.join(skill_path, "SKILL.md")
        if not os.path.isfile(skill_md):
            continue

        with open(skill_md, "r", encoding="utf-8") as handle:
            content = handle.read()

        frontmatter = parse_frontmatter(content)
        if not frontmatter:
            continue

        metadata = load_or_build_metadata(skill_path, entry, repo_root)
        if not metadata:
            continue

        sub_resources = get_sub_resources(skill_path)
        artifacts = collect_artifacts(skill_path, repo_root)
        manifest = build_manifest(entry, frontmatter, content, sub_resources, artifacts, metadata)

        skill_entry = {
            "id": metadata["id"],
            "name": metadata["id"],
            "display_name": metadata["display_name"],
            "description": metadata["description"],
            "version": metadata["version"],
            "category": metadata["canonical_category"],
            "raw_category": metadata["raw_category"],
            "taxonomy": metadata["taxonomy"],
            "tags": metadata["tags"],
            "complexity": metadata["complexity"],
            "risk": metadata["risk"],
            "tools": metadata["tools"],
            "source": metadata["source"],
            "author": metadata["author"],
            "date_added": metadata["dates"]["added"],
            "date_updated": metadata["dates"]["updated"],
            "path": f"skills/{entry}",
            "entrypoint_path": manifest["entrypoint"],
            "manifest_path": manifest["paths"]["manifest"],
            "metadata_path": metadata["paths"]["metadata"],
            "content_length": metadata["content"]["content_length"],
            "body_length": metadata["content"]["body_length"],
            "sub_resources": sub_resources,
            "artifacts_count": len(artifacts),
            "install_targets": manifest["compatibility"]["install_targets"],
            "checksums": manifest["checksums"],
            "skill_level": metadata["maturity"]["skill_level"],
            "skill_level_label": metadata["maturity"]["skill_level_label"],
            "has_scripts": metadata["maturity"]["has_scripts"],
            "has_extra_files": metadata["maturity"]["has_extra_files"],
            "best_practices_score": metadata["best_practices"]["score"],
            "best_practices_tier": metadata["best_practices"]["tier"],
            "quality_score": metadata["quality"]["score"],
            "quality_tier": metadata["quality"]["tier"],
            "validation_status": metadata["validation"]["status"],
        }

        index["skills"].append(skill_entry)
        manifests.append(manifest)

        category = skill_entry["category"]
        category_counts[category] = category_counts.get(category, 0) + 1

        manifest_output_path = os.path.join(manifests_dir, f"{entry}.json")
        with open(manifest_output_path, "w", encoding="utf-8") as handle:
            json.dump(manifest, handle, indent=2, ensure_ascii=False)
            handle.write("\n")

    index["total_skills"] = len(index["skills"])
    index["categories"] = dict(sorted(category_counts.items()))
    available_skill_ids = {skill["id"] for skill in index["skills"]}

    bundles = []
    for bundle in load_bundle_definitions(repo_root):
        bundle_skill_ids = bundle.get("skill_ids", [])
        available_bundle_skills = [skill_id for skill_id in bundle_skill_ids if skill_id in available_skill_ids]
        missing_bundle_skills = [skill_id for skill_id in bundle_skill_ids if skill_id not in available_skill_ids]
        bundles.append(
            {
                **bundle,
                "available_skill_ids": available_bundle_skills,
                "missing_skill_ids": missing_bundle_skills,
                "availability": {
                    "available": len(available_bundle_skills),
                    "total": len(bundle_skill_ids),
                },
            }
        )

    catalog = {
        "schema_version": SCHEMA_VERSION,
        "generated_at": generated_at,
        "total_skills": index["total_skills"],
        "categories": index["categories"],
        "skills": [
            {
                "id": manifest["id"],
                "slug": manifest["slug"],
                "display_name": manifest["display_name"],
                "description": manifest["description"],
                "version": manifest["version"],
                "category": manifest["category"],
                "raw_category": manifest["raw_category"],
                "taxonomy": manifest["taxonomy"],
                "tags": manifest["tags"],
                "complexity": manifest["complexity"],
                "risk": manifest["risk"],
                "tools": manifest["compatibility"]["tools"],
                "entrypoint": manifest["entrypoint"],
                "manifest_path": manifest["paths"]["manifest"],
                "metadata_path": manifest["paths"]["metadata"],
                "skill_level": manifest["classification"]["maturity"]["skill_level"],
                "skill_level_label": manifest["classification"]["maturity"]["skill_level_label"],
                "has_scripts": manifest["classification"]["maturity"]["has_scripts"],
                "has_extra_files": manifest["classification"]["maturity"]["has_extra_files"],
                "best_practices_score": manifest["classification"]["best_practices"]["score"],
                "best_practices_tier": manifest["classification"]["best_practices"]["tier"],
                "quality_score": manifest["classification"]["quality"]["score"],
                "quality_tier": manifest["classification"]["quality"]["tier"],
                "validation_status": manifest["classification"]["validation"]["status"],
            }
            for manifest in manifests
        ],
    }

    with open(output_path, "w", encoding="utf-8") as handle:
        json.dump(index, handle, indent=2, ensure_ascii=False)
        handle.write("\n")

    with open(catalog_path, "w", encoding="utf-8") as handle:
        json.dump(catalog, handle, indent=2, ensure_ascii=False)
        handle.write("\n")

    with open(bundles_path, "w", encoding="utf-8") as handle:
        json.dump({"generated_at": generated_at, "bundles": bundles}, handle, indent=2, ensure_ascii=False)
        handle.write("\n")

    print(f"✅ Generated {output_path}")
    print(f"✅ Generated {catalog_path}")
    print(f"✅ Generated {bundles_path}")
    print(f"✅ Generated {len(manifests)} manifest(s) in {manifests_dir}")
    print(f"   Total skills: {index['total_skills']}")
    print(f"   Categories: {', '.join(f'{key}({value})' for key, value in sorted(category_counts.items()))}")


if __name__ == "__main__":
    main()
