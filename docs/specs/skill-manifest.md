# 📋 Skill Manifest Specification

> **The machine-readable JSON manifest generated from each `SKILL.md` during the build pipeline — the single data contract consumed by all runtime surfaces.**

---

## 📊 Status

| Feature | State |
|:--------|:------|
| ✅ Auto-generated from SKILL.md | Implemented |
| ✅ Consumed by CLI, API, MCP, A2A | Implemented |
| ✅ Archives with checksums | Implemented |
| ✅ Security classification | Implemented |

> **Important**: The manifest is a **build artifact**. Contributors author `SKILL.md` — the pipeline derives the JSON manifest automatically.

---

## 🎯 Purpose

The manifest exists so that **all runtime surfaces** consume the same normalized shape:

| Surface | How It Uses Manifests |
|:--------|:---------------------|
| 🖥️ **CLI** | Search, install planning, doctor diagnostics |
| 🌐 **API** | Endpoint responses, filtering, download links |
| 🔌 **MCP** | Tool responses, resource contents |
| 🤖 **A2A** | Discovery and recommendation payloads |

---

## 📁 Output Locations

| Artifact | Path |
|:---------|:-----|
| 📊 Root metadata | `metadata.json` |
| 📊 Per-skill metadata | `skills/<skill>/metadata.json` |
| 📋 Skills index | `skills_index.json` |
| 📚 Published catalog | `dist/catalog.json` |
| 📌 Per-skill manifest | `dist/manifests/<skill>.json` |
| 📦 Zip archive | `dist/archives/<skill>.zip` |
| 📦 Tarball archive | `dist/archives/<skill>.tar.gz` |
| 🔒 Checksum manifest | `dist/archives/<skill>.checksums.txt` |

---

## 📐 Manifest Shape

### 🆔 Identity

| Field | Description |
|:------|:------------|
| `schema_version` | Version of the manifest schema |
| `id` | Stable skill identifier from `name` field |
| `slug` | Directory slug under `skills/` |
| `display_name` | Human-readable title from first heading |

### 📝 Metadata

| Field | Description |
|:------|:------------|
| `description` | Short summary from frontmatter |
| `version` | Skill version, independent from the npm package version |
| `category` | Canonical category (normalized) |
| `raw_category` | Original category from frontmatter |
| `taxonomy` | Full taxonomy metadata with inferred fallback |
| `tags` | Searchable tags |
| `complexity` | `beginner` · `intermediate` · `advanced` · `expert` |
| `risk` | `safe` · `caution` · `offensive` · `critical` |
| `source` | `omni-team` · `community` · `official` |
| `author` | Attribution string |

### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Field | Description |
|:------|:------------|
| `entrypoint` | Canonical `SKILL.md` path |
| `paths.root` | Skill directory inside repo |
| `paths.manifest` | Generated manifest path in `dist/` |

### 🖥️ Compatibility

| Field | Description |
|:------|:------------|
| `tools` | Tool identifiers from frontmatter |
| `install_targets` | Per-tool install metadata |

Each install target includes: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`

### 📦 Resources

| Field | Description |
|:------|:------------|
| `sub_resources` | Skill subdirs (`references`, `agents`, `assets`) |
| `artifacts_count` | Total file count in the skill package |
| `references_count` | Reference doc count |
| `agents_count` | Agent config count |
| `assets_count` | Asset file count |

### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Field | Description |
|:------|:------------|
| `strategy` | Install strategy (e.g., `copy-skill-directory`) |
| `current_installer` | Human-readable install behavior |
| `recipes` | Per-client install recipes |

### 📊 Classification

| Section | Fields |
|:--------|:-------|
| 🎯 `maturity` | `skill_level`, `skill_level_label` |
| 📋 `best_practices` | `score` (0-100) |
| ⭐ `quality` | `score` (0-100) |
| 🛡️ `security` | `score`, `status` |
| ✅ `validation` | `status` |

### 📝 Content

Derived signals: `body_length`, `content_length`, `body_lines`, `word_count`, plus structural flags for examples, troubleshooting sections, etc.

### 📁 Artifacts

Array of every file shipped inside the skill directory:

```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Artifact kinds**: `entrypoint` · `reference` · `agent` · `asset` · `license` · `support`

### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| Field | Description |
|:------|:------------|
| `entrypoint_sha256` | Hash of SKILL.md |
| `package_sha256` | Deterministic digest from ordered artifact list |

---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 Repository package version and skill version are different concerns. The package is currently `0.1.1`, while individual skills carry their own semantic versions.

---

## ⚠️ Compatibility Notes

| Rule | Rationale |
|:-----|:----------|
| ✅ Must stay derivable from repo | No manual manifest authoring required |
| ✅ New optional fields can be added | Forward compatibility |
| ⚠️ Existing fields must remain stable | Backward compatibility |
| 🚫 No handwritten manifests | Build-time derivation is the source of truth |
