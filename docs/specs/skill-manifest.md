# Skill Manifest Specification

This document defines the machine-readable manifest generated from each `SKILL.md`.

The manifest is a build artifact. Contributors should continue authoring skills through `SKILL.md` plus supporting files. The build pipeline derives the JSON manifest from repository contents.

## Purpose

The manifest exists so that API, MCP, A2A, and installer workflows can all consume the same normalized shape.

## Output Locations

Build artifacts are generated to:

- `skills_index.json`
- `dist/catalog.json`
- `dist/manifests/<skill>.json`

## Manifest Shape

Each per-skill manifest should contain:

- `schema_version`
- `id`
- `slug`
- `display_name`
- `description`
- `version`
- `category`
- `tags`
- `complexity`
- `risk`
- `source`
- `author`
- `dates`
- `entrypoint`
- `paths`
- `compatibility`
- `resources`
- `dependencies`
- `install`
- `artifacts`
- `checksums`

## Field Semantics

### Identity

- `schema_version`: Version of the manifest schema emitted by the build.
- `id`: Stable skill identifier, normally taken from frontmatter `name`.
- `slug`: Directory slug under `skills/`.
- `display_name`: Human-readable title derived from the first markdown heading when available.

### Metadata

- `description`: Short summary from frontmatter.
- `version`: Skill version from frontmatter.
- `category`: One of the repository categories.
- `tags`: Searchable tags.
- `complexity`: Skill difficulty.
- `risk`: Safety level for execution and review.
- `source`: Origin such as `omni-team`, `community`, or `official`.
- `author`: Attribution string.

### Dates

The `dates` object contains:

- `added`
- `updated`

### Paths

The `paths` object contains:

- `root`: Skill directory path inside the repo.
- `manifest`: Generated manifest path inside `dist/`.

The top-level `entrypoint` points to the canonical `SKILL.md`.

### Compatibility

The `compatibility` object contains:

- `tools`: Tool identifiers declared in frontmatter.
- `install_targets`: Derived install metadata for each known supported tool.

Each `install_target` includes:

- `tool`
- `scope`
- `default_path`
- `installer_flag`
- `current_installer_behavior`
- `invocation`

This field reflects current installer behavior honestly. Today, the installer deploys the full skill library by default, and can also deploy a selected subset when `--skill` or `--bundle` is used.

### Resources

The `resources` object contains:

- `sub_resources`: Top-level skill subdirectories such as `references`, `agents`, and `assets`
- `artifacts_count`: Total file count in the skill package

### Dependencies

The `dependencies` object is reserved for future use. For now it is emitted as:

```json
{
  "skills": [],
  "external": []
}
```

### Install

The `install` object contains:

- `strategy`
- `current_installer`
- `recipes`

Each recipe should be derived from current supported install flows.

### Artifacts

The `artifacts` array describes every file shipped inside the skill directory.

Each artifact contains:

- `path`
- `kind`
- `size_bytes`
- `sha256`

Artifact `kind` values currently include:

- `entrypoint`
- `reference`
- `agent`
- `asset`
- `license`
- `support`

### Checksums

The `checksums` object contains:

- `entrypoint_sha256`
- `package_sha256`

`package_sha256` is a deterministic digest over the ordered artifact list and individual file hashes.

## Example

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code implementation, design inspection, token and variable lookup, Code Connect mapping, Figma or FigJam generation, and MCP setup or troubleshooting.",
  "version": "1.0.0",
  "category": "development",
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "source": "omni-team",
  "author": "Omni Skills Team",
  "dates": {
    "added": "2026-03-26",
    "updated": "2026-03-26"
  },
  "entrypoint": "skills/omni-figma/SKILL.md",
  "paths": {
    "root": "skills/omni-figma",
    "manifest": "dist/manifests/omni-figma.json"
  },
  "compatibility": {
    "tools": ["claude-code", "cursor", "gemini-cli", "antigravity"],
    "install_targets": []
  },
  "resources": {
    "sub_resources": ["agents", "assets", "references"],
    "artifacts_count": 9
  },
  "dependencies": {
    "skills": [],
    "external": []
  },
  "install": {
    "strategy": "copy-skill-directory",
    "current_installer": "npx omni-skills installs the full library by default today, and also supports selective installation with --skill and --bundle.",
    "recipes": []
  },
  "artifacts": [],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

## Compatibility Notes

- The manifest must stay derivable from current repo structure.
- New optional fields can be added, but existing fields should remain stable.
- Future handwritten manifest files should only be introduced if build-time derivation proves insufficient.
