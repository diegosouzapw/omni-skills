<!-- omni-skills: version=1.0.0; skills=2; updated_at=2026-03-26 -->
# 🧠 Omni Skills — Agent-Native Skill Catalog and Runtime

> **Curated AI coding skills plus a unified runtime for CLI install, catalog API, MCP, and A2A.**
> Skills are still authored as `SKILL.md`, but the repository now also ships the machine-readable catalog and protocol surfaces agents need to discover, preview, and install them.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Install with NPX](https://img.shields.io/badge/Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#quick-start)
[![MCP](https://img.shields.io/badge/MCP-stdio%20%7C%20stream%20%7C%20sse-2ea44f)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/API-read--only-0366d6)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/A2A-scaffold-orange)](#-runtime-surfaces)

---

## ✨ What Omni Skills Is Now

Omni Skills is no longer only an installer.

- 📦 **Unified package**: the published `omni-skills` binary now handles install, diagnostics, MCP, API, A2A, and release smoke checks.
- 🖥️ **Operator-friendly CLI**: the package exposes `doctor`, `ui`, `smoke`, and `publish-check` in the same binary.
- 🔎 **Catalog discovery**: `npx omni-skills find <query>` now searches the published catalog and suggests install commands.
- 🧭 **Shared catalog contract**: `skills_index.json`, `dist/catalog.json`, `dist/bundles.json`, and `dist/manifests/*.json` drive the runtime.
- 🧪 **Skill classification**: validation now parses frontmatter, normalizes categories to a canonical taxonomy, and computes maturity level, best practices, and quality scores.
- 🎯 **Selective install**: `--skill` and `--bundle` now install only the relevant published artifacts.
- 🔌 **Protocol-native runtime**: the repo ships a read-only HTTP API, an MCP server with three transports, and an A2A scaffold.
- 🛠️ **Local sidecar mode**: MCP local mode can detect clients, preview writes, install or remove skills, and write client-aware MCP configs under an allowlist.
- ✅ **Release preflight**: `smoke` and `publish-check` validate build output, tests, package contents, and service boots.

---

## 📌 Current Status

The runtime foundation is in place, but the public catalog is still intentionally small.

- Published skills currently available: **2**
- Current published skills: **`omni-figma`** and **`find-skills`**
- Bundle metadata exists and is usable in install planning
- Most bundle members are still roadmap entries, not yet published as installable skills

That means the platform surface is much further along than the catalog breadth. The docs below reflect that reality instead of promising a larger library than the repo currently ships.

---

## 🚀 Quick Start

### Install the default target

```bash
npx omni-skills
```

### Install the published skill into a specific client

```bash
npx omni-skills --cursor --skill omni-figma
```

### Search the catalog before installing

```bash
npx omni-skills find figma
npx omni-skills find discovery --tool codex-cli
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### Start the local MCP sidecar

```bash
npx omni-skills mcp stream --local
```

### Start the catalog API and A2A surface

```bash
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335
```

### Run the release preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

---

## 🔌 Runtime Surfaces

| Surface | Status | What it does | Example |
| :------ | :----- | :----------- | :------ |
| **CLI** | Implemented | Find and install skills, run diagnostics, open the terminal UI, boot services, run smoke checks | `npx omni-skills doctor` |
| **Catalog API** | Implemented | Read-only catalog, search, bundles, install plans, artifact downloads | `npx omni-skills api --port 3333` |
| **MCP** | Implemented | Discovery, recommendation, install preview, optional local sidecar mode | `npx omni-skills mcp stream --local` |
| **A2A** | Scaffold | Discovery and install-plan handoff via agent surface | `npx omni-skills a2a --port 3335` |

### MCP Transports

The MCP runtime supports:

- `stdio`
- `stream`
- `sse`

Examples:

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
```

### Generated Catalog Artifacts

The build pipeline emits:

- `metadata.json`
- `skills_index.json`
- `dist/catalog.json`
- `dist/bundles.json`
- `dist/manifests/<skill>.json`

These generated artifacts are the shared source of truth for CLI, API, MCP, and A2A behavior.

Each skill also gets a generated `skills/<skill>/metadata.json` with:

- canonical taxonomy classification
- maturity level (`L1`/`L2`/`L3`)
- best practices score (`0-100`)
- quality score (`0-100`)
- validation status and supporting metadata

---

## 📦 Catalog Reality

The current generated catalog contains:

- `2` published skills in `dist/catalog.json`
- `omni-figma` and `find-skills` as the currently available public skills
- curated bundle definitions in `dist/bundles.json`

Current bundle availability:

| Bundle | Available now | Notes |
| :----- | :------------ | :---- |
| `essentials` | `1/4` | Includes `find-skills` |
| `full-stack` | `1/4` | Currently resolves to `omni-figma` |
| `security` | `0/2` | Metadata only for now |
| `devops` | `0/3` | Metadata only for now |
| `ai-engineer` | `0/3` | Metadata only for now |
| `oss-maintainer` | `1/4` | Includes `find-skills` |

This is why `--bundle` is already useful for planning and selective install, but still surfaces warnings for unpublished members.

---

## 🧭 Documentation Map

### Start Here

- [Documentation Hub](docs/README.md)
- [Getting Started](docs/users/getting-started.md)
- [Usage Guide](docs/users/usage.md)
- [Bundles](docs/users/bundles.md)
- [Catalog](docs/CATALOG.md)

### Architecture and Specs

- [Agent-Native Roadmap](docs/architecture/agent-native-roadmap.md)
- [ADR-0001: Agent-Native Workspace Foundation](docs/architecture/adr-0001-agent-native-workspace.md)
- [Catalog API Surface](docs/specs/catalog-api.md)
- [Local MCP Sidecar](docs/specs/local-mcp-sidecar.md)
- [Skill Classification and Metadata](docs/specs/skill-classification.md)
- [Skill Manifest Specification](docs/specs/skill-manifest.md)

### Community and Contribution

- [Contributing Guide](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Skill Template](docs/contributors/skill-template.md)
- [Skill Anatomy](docs/contributors/skill-anatomy.md)
- [Quality Bar](docs/contributors/quality-bar.md)

---

## 🗂️ Repository Layout

| Path | Purpose |
| :--- | :------ |
| `skills/` | Canonical authored skills |
| `docs/` | User, contributor, architecture, and spec documentation |
| `dist/` | Generated machine-readable catalog and manifests |
| `packages/catalog-core/` | Shared catalog runtime |
| `packages/server-api/` | Read-only HTTP API |
| `packages/server-mcp/` | MCP server with local sidecar mode |
| `packages/server-a2a/` | Initial A2A scaffold |
| `tools/bin/` | Published CLI entrypoints |
| `tools/lib/` | Shared installer libraries |
| `tools/scripts/` | Validation, generation, tests, and catalog build scripts |

---

## 🧪 Validation and Release Checks

Recommended local preflight:

```bash
npm run smoke
```

The smoke run currently validates:

- skill validation
- catalog generation
- generated catalog markdown
- automated tests
- `npm pack --dry-run`
- API boot
- MCP boot in `stdio`, `stream`, and `sse`
- A2A boot

---

## 🛣️ What Is Still Pending

- signed release artifacts or per-skill archives instead of raw repository artifact downloads
- auth, rate limiting, and stronger governance for hosted API or remote MCP deployments
- broader client coverage and export recipes beyond the current known JSON and TOML MCP config targets
- a task-aware A2A lifecycle instead of the current request-response scaffold
- expansion of the public skill catalog beyond the current `omni-figma` and `find-skills` releases

---

## ⚖️ License

Code and tooling are licensed under the [MIT License](LICENSE).

Documentation and skill content are licensed under [CC BY 4.0](LICENSE-CONTENT).
