<!-- omni-skills: version=1.0.0; skills=2; updated_at=2026-03-26 -->
# 📖 Omni Skills — Documentation Hub

> **The central reference for using, operating, extending, and understanding the Omni Skills platform.**

Standard community files live in the repository root:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

---

## 📊 Status Snapshot

| Area | State | Details |
|:-----|:------|:--------|
| 🏗️ **Runtime** | ✅ Complete | CLI, API, MCP (3 transports), A2A scaffold |
| 📦 **Catalog** | 📌 2 skills | `omni-figma` and `find-skills` published |
| 🎯 **Install** | ✅ Complete | Selective install by `--skill` and `--bundle` |
| 🌐 **API** | ✅ Complete | Read-only with auth, rate limiting, audit log |
| 🔌 **MCP** | ✅ Complete | `stdio` · `stream` · `sse` + local sidecar mode |
| 🤖 **A2A** | 🏗️ Scaffold | Discovery + install-plan, no task lifecycle yet |
| 🛡️ **Security** | ✅ Complete | Static scanner + optional ClamAV/VirusTotal |
| 📋 **Classification** | ✅ Complete | Taxonomy · maturity · quality · best practices · security |
| 📁 **Archives** | ✅ Complete | Per-skill zip/tar.gz with SHA-256 checksums |
| 🔐 **Signing** | ⏳ Optional | Local signing, CI enforcement pending |

---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | What You'll Learn |
|:----|:------------------|
| 📘 [Getting Started](users/getting-started.md) | Install, verify, and invoke your first skill |
| 📗 [Usage Guide](users/usage.md) | All installation modes, prompt patterns, and runtime commands |
| 📦 [Bundles](users/bundles.md) | Curated skill selectors and their current availability |
| 📚 [Catalog](CATALOG.md) | Auto-generated catalog of published skills |
| 🔧 [System Runbook](operations/runbook.md) | Full operational reference for build, serve, and troubleshoot |

### 🏗️ If You Want to **Understand** the Runtime

| Doc | What You'll Learn |
|:----|:------------------|
| 🗺️ [Agent-Native Roadmap](architecture/agent-native-roadmap.md) | Target architecture and phase plan |
| 📐 [ADR-0001: Workspace Foundation](architecture/adr-0001-agent-native-workspace.md) | Key architectural decision and consequences |
| 🔬 [Codebase Analysis](architecture/codebase-analysis.md) | Deep technical analysis of all components |
| 🌐 [Catalog API Surface](specs/catalog-api.md) | HTTP endpoints, filtering, auth, and downloads |
| 🔌 [Local MCP Sidecar](specs/local-mcp-sidecar.md) | Filesystem tools, allowlist, and config writing |
| 📊 [Skill Classification](specs/skill-classification.md) | Taxonomy, scoring heuristics, and metadata shape |
| 🛡️ [Security Validation](specs/security-validation.md) | Scanners, archives, signing, and distribution |
| 📋 [Skill Manifest Spec](specs/skill-manifest.md) | Machine-readable manifest format and fields |

### 🤝 If You Want to **Contribute**

| Doc | What You'll Learn |
|:----|:------------------|
| 📝 [Contributing Guide](../CONTRIBUTING.md) | Repository workflow and PR guidelines |
| 📄 [Skill Template](contributors/skill-template.md) | Starter SKILL.md with all frontmatter fields |
| 🔬 [Skill Anatomy](contributors/skill-anatomy.md) | Structure and quality expectations for a skill |
| ✅ [Quality Bar](contributors/quality-bar.md) | Acceptance criteria for the repository |

---

## 🔌 Runtime Surfaces

### 🖥️ CLI

The published `omni-skills` binary is the unified operational entry point.

```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

---

### 📁 Generated Catalog Artifacts

The build pipeline emits these machine-readable files that drive **all** runtime surfaces:

| Artifact | Purpose |
|:---------|:--------|
| `skills_index.json` | Repo-local skill index |
| `dist/catalog.json` | Published skill catalog |
| `dist/bundles.json` | Bundle definitions with availability |
| `dist/manifests/<skill>.json` | Per-skill machine-readable manifest |
| `dist/archives/<skill>.zip` | Skill archive (zip) |
| `dist/archives/<skill>.tar.gz` | Skill archive (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifest |

---

### 🌐 API

Read-only HTTP API for skills, bundles, search, comparison, install plans, and artifact downloads.

```bash
npm run api                              # From repo
npx omni-skills api --port 3333          # From published package
```

> 📖 Full reference: [Catalog API Surface](specs/catalog-api.md)

---

### 🔌 MCP

Three transports for agent integration:

```bash
npx omni-skills mcp stdio               # Direct pipe
npx omni-skills mcp stream              # Streamable HTTP
npx omni-skills mcp sse                 # Server-Sent Events
npx omni-skills mcp stream --local      # Local sidecar mode
```

> 📖 Full reference: [Local MCP Sidecar](specs/local-mcp-sidecar.md)

---

### 🤖 A2A

Agent-to-agent scaffold for discovery and install-plan handoff.

```bash
npx omni-skills a2a --port 3335
```

> ⚠️ Currently a scaffold, not a full task lifecycle engine.

---

## 🗂️ Repository Map

| Path | Purpose |
|:-----|:--------|
| 📂 `skills/` | Canonical authored skills |
| 📖 `docs/users/` | End-user documentation |
| 🤝 `docs/contributors/` | Contributor templates and guidance |
| 🏗️ `docs/architecture/` | Roadmap, ADRs, and technical analysis |
| 🔧 `docs/operations/` | Operational runbooks |
| 📋 `docs/specs/` | Protocol and artifact contracts |
| 📚 `docs/CATALOG.md` | Generated skill catalog |
| 📦 `dist/` | Generated machine-readable artifacts |
| 🧠 `packages/catalog-core/` | Shared catalog runtime (~829 LOC) |
| 🌐 `packages/server-api/` | Read-only HTTP API (~247 LOC) |
| 🔌 `packages/server-mcp/` | MCP server + local sidecar (~1,508 LOC) |
| 🤖 `packages/server-a2a/` | A2A scaffold (~181 LOC) |
| 🖥️ `tools/bin/` | CLI entry points |
| 📚 `tools/lib/` | Installer helpers |
| ⚙️ `tools/scripts/` | Validation, generation, and test scripts |

---

## 🧪 Release Validation

```bash
npm run smoke        # Full release preflight
```

The smoke run validates:

- ✅ Skill validation and metadata generation
- ✅ Taxonomy recategorization tooling
- ✅ Catalog artifact generation
- ✅ Generated catalog markdown
- ✅ Archive generation and verification
- ✅ Automated test suite
- ✅ `npm pack --dry-run` packaging check
- ✅ API boot and health
- ✅ MCP boot in `stdio`, `stream`, and `sse`
- ✅ A2A boot and health
