<!-- omni-skills: version=0.0.1; skills=19; updated_at=2026-03-27 -->
# 🧠 Omni Skills — Agent-Native Skill Catalog and Runtime

> **Curated AI coding skills plus a unified runtime for CLI install, catalog API, MCP, and A2A.**
> Skills are still authored as `SKILL.md`, but the repository now also ships the machine-readable catalog and protocol surfaces agents need to discover, preview, and install them.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Install with NPX](https://img.shields.io/badge/Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#quick-start)
[![MCP](https://img.shields.io/badge/MCP-stdio%20%7C%20stream%20%7C%20sse-2ea44f)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/API-read--only-0366d6)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/A2A-task%20lifecycle-orange)](#-runtime-surfaces)

---

## ✨ What Omni Skills Is Now

Omni Skills is no longer only an installer.

- 📦 **Unified package**: the published `omni-skills` binary now handles install, diagnostics, MCP, API, A2A, and release smoke checks.
- 🖥️ **Operator-friendly CLI**: the package exposes `doctor`, `ui`, `smoke`, and `publish-check` in the same binary.
- 🔎 **Catalog discovery**: `npx omni-skills find <query>` now searches the published catalog and suggests install commands.
- 🧭 **Shared catalog contract**: `skills_index.json`, `dist/catalog.json`, `dist/bundles.json`, and `dist/manifests/*.json` drive the runtime.
- 🧪 **Skill classification**: validation now parses frontmatter, normalizes categories to a canonical taxonomy, and computes maturity level, best practices, and quality scores.
- 🛡️ **Security validation**: the validator now runs a static content and script scanner, emits security scores, and can optionally enrich results with ClamAV and VirusTotal hash lookups.
- 🎯 **Selective install**: `--skill` and `--bundle` now install only the relevant published artifacts.
- 📦 **Per-skill archives**: the build now emits `zip`, `tar.gz`, and checksum manifests per skill, with detached signatures when signing keys are configured.
- 🔌 **Protocol-native runtime**: the repo ships a read-only HTTP API, an MCP server with three transports, and an A2A runtime with task lifecycle, SSE streaming, cancelation, push notification hooks, pluggable JSON/SQLite persistence, restart resume, and an optional external process executor.
- 🛠️ **Local sidecar mode**: MCP local mode can detect clients, preview writes, install or remove skills, and write client-aware MCP configs under an allowlist, including VS Code user/workspace and Dev Container targets.
- 🔐 **Hosted hardening**: API and MCP HTTP transports now support optional bearer/API-key auth, in-memory rate limiting, and audit logging.
- 🚢 **Release automation**: GitHub Actions now verifies version tags, runs ClamAV and VirusTotal-gated release builds, requires detached archive signing in CI, publishes the exact tarball to npm, and creates a GitHub Release with custom notes.
- ✅ **Release preflight**: `smoke` and `publish-check` validate build output, tests, package contents, service boots, and scanner coverage.

---

## 📌 Current Status

The runtime foundation is in place and the public catalog now fully backs every starter bundle with published skills.

- Published skills currently available: **19**
- Current published skills span architecture, frontend, backend, documentation, security, DevOps, and AI application workflows
- Fully backed bundles: **`essentials`**, **`full-stack`**, **`security`**, **`devops`**, **`ai-engineer`**, and **`oss-maintainer`**
- Newly published domain skills: `docker-expert`, `kubernetes`, `terraform`, `rag-engineer`, `prompt-engineer`, and `llm-patterns`

The docs below reflect that shift directly: bundle installs no longer depend on roadmap placeholders for the six curated starter bundles.

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
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes

# Audit taxonomy drift and optionally rewrite SKILL.md categories
npx omni-skills recategorize
npx omni-skills recategorize --write
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

### Publish a release through GitHub Actions

```bash
npm version patch
git push origin main --follow-tags
```

The `v*` tag workflow rebuilds the release with required antivirus gates, signs archives in CI, publishes the verified tarball to npm, and creates a GitHub Release with custom notes plus attached verification assets.

---

## 🔌 Runtime Surfaces

| Surface | Status | What it does | Example |
| :------ | :----- | :----------- | :------ |
| **CLI** | Implemented | Find and install skills, run diagnostics, open the terminal UI, boot services, run smoke checks | `npx omni-skills doctor` |
| **Catalog API** | Implemented | Read-only catalog, search, bundles, install plans, artifact downloads | `npx omni-skills api --port 3333` |
| **MCP** | Implemented | Discovery, recommendation, install preview, optional local sidecar mode | `npx omni-skills mcp stream --local` |
| **A2A** | Implemented | Task-aware discovery, install-plan handoff, polling, streaming, cancelation, and push notifications | `npx omni-skills a2a --port 3335` |

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
- `dist/archives/<skill>.zip`
- `dist/archives/<skill>.tar.gz`
- `dist/archives/<skill>.checksums.txt`
- `skills/<skill>/metadata.json`

These generated artifacts are the shared source of truth for CLI, API, MCP, and A2A behavior.

Each skill also gets a generated `skills/<skill>/metadata.json` with:

- canonical taxonomy classification
- maturity level (`L1`/`L2`/`L3`)
- best practices score (`0-100`)
- quality score (`0-100`)
- security score (`0-100`)
- static security findings plus optional ClamAV and VirusTotal scanner status
- validation status and supporting metadata

---

## 📦 Catalog Reality

The current generated catalog contains:

- `19` published skills in `dist/catalog.json`
- installable skill bundles for planning, download, MCP, and A2A handoff
- curated bundle definitions in `dist/bundles.json`

Current bundle availability:

| Bundle | Available now | Notes |
| :----- | :------------ | :---- |
| `essentials` | `4/4` | `find-skills`, `brainstorming`, `architecture`, `debugging` |
| `full-stack` | `4/4` | `frontend-design`, `api-design`, `database-design`, `omni-figma` |
| `security` | `2/2` | `security-auditor`, `vulnerability-scanner` |
| `devops` | `3/3` | `docker-expert`, `kubernetes`, `terraform` |
| `ai-engineer` | `3/3` | `rag-engineer`, `prompt-engineer`, `llm-patterns` |
| `oss-maintainer` | `4/4` | `find-skills`, `create-pr`, `changelog`, `documentation` |

This means `--bundle` is now a real install surface for all six curated starter bundles, not only a roadmap-aware planning helper.

---

## 🧭 Documentation Map

### Start Here

- [Documentation Hub](docs/README.md)
- [Getting Started](docs/users/getting-started.md)
- [Usage Guide](docs/users/usage.md)
- [Bundles](docs/users/bundles.md)
- [Catalog](docs/CATALOG.md)
- [System Runbook](docs/operations/runbook.md)

### Architecture and Specs

- [Agent-Native Roadmap](docs/architecture/agent-native-roadmap.md)
- [ADR-0001: Agent-Native Workspace Foundation](docs/architecture/adr-0001-agent-native-workspace.md)
- [Catalog API Surface](docs/specs/catalog-api.md)
- [Local MCP Sidecar](docs/specs/local-mcp-sidecar.md)
- [Skill Classification and Metadata](docs/specs/skill-classification.md)
- [Security Validation and Distribution](docs/specs/security-validation.md)
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
| `docs/operations/` | Operational runbooks and deployment workflows |
| `dist/` | Generated machine-readable catalog and manifests |
| `packages/catalog-core/` | Shared catalog runtime |
| `packages/server-api/` | Read-only HTTP API |
| `packages/server-mcp/` | MCP server with local sidecar mode |
| `packages/server-a2a/` | A2A server with task runtime, SSE streaming, and push config |
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
- security scanner verification
- taxonomy recategorization tooling
- catalog generation
- generated catalog markdown
- automated tests
- `npm pack --dry-run`
- API boot
- MCP boot in `stdio`, `stream`, and `sse`
- A2A boot, polling, streaming, cancelation, and push-config lifecycle

Tag-based release automation now also validates:

- Git tag version matches `package.json`
- ClamAV scanning is enabled and completed for every skill
- VirusTotal hash lookup is enabled and completed for every skill
- archive signatures are required and verified in CI
- the exact verified tarball is what gets published to npm
- a GitHub Release is created automatically with custom notes and attached catalog or checksum artifacts

---

## 🛣️ What Is Still Pending

- stronger governance for hosted API or remote MCP deployments beyond the current auth, rate limit, and audit-log baseline
- broader client coverage and export recipes beyond the current JSON, TOML, VS Code user, and Dev Container targets
- multi-node orchestration and lease-aware task execution beyond the current single-process runtime
- deeper semantic scoring for best practices, so the next quality step is differentiating truly exceptional skills instead of just raising the floor

---

## ⚖️ License

Code and tooling are licensed under the [MIT License](LICENSE).

Documentation and skill content are licensed under [CC BY 4.0](LICENSE-CONTENT).
