<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->
# 🧠 Omni Skills: Installable Agentic Skills, Runtime Surfaces, and Curated Enhancement

> **Installable GitHub repository and catalog of curated AI coding skills with a unified CLI, catalog API, MCP, A2A, and a private enhancement workflow that publishes curated English derivatives into `skills_omni/`.**
> Omni Skills keeps `SKILL.md` authoring, but it also ships the machine-readable catalog, archives, signatures, and protocol surfaces that let agents discover, compare, install, and operate those skills as a real product surface.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Install with NPX](https://img.shields.io/badge/Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#installation)
[![MCP](https://img.shields.io/badge/MCP-stdio%20%7C%20stream%20%7C%20sse-2ea44f)](#runtime-surfaces)
[![API](https://img.shields.io/badge/API-read--only-0366d6)](#runtime-surfaces)
[![A2A](https://img.shields.io/badge/A2A-task%20lifecycle-orange)](#runtime-surfaces)

**Start here:** [Install in 1 minute](#installation) · [Choose your tool](#choose-your-tool) · [CLI User Guide](docs/users/CLI-USER-GUIDE.md) · [Bundles](docs/users/BUNDLES.md) · [Runtime Surfaces](#runtime-surfaces) · [Why Omni Skills](#why-omni-skills) · [skills_omni](#native-intake-and-curated-output)

**Current release:** `v0.1.2`
**Catalog today:** `32` published skills · `15` active categories · `7` fully backed bundles · `32` curated enhanced derivatives in `skills_omni/`

---

## Why Teams Pick Omni Skills

- **Installable, not just readable**: `npx omni-skills` installs skills where your assistant expects them instead of leaving you to copy markdown by hand.
- **Built as a runtime, not just a repository**: CLI, catalog API, MCP, and A2A all consume the same generated manifests, bundles, and archives.
- **Curated rather than inflated**: the catalog is smaller than giant “awesome lists,” but the skills are validated, scored, archived, searchable, and release-managed.
- **Better onboarding for real usage**: guided install, visual terminal UI, bundle selection, discovery, `config-mcp`, `doctor`, `smoke`, and `publish-check` all live in the same package.
- **Stronger trust surface**: signed release artifacts, checksum manifests, static security scanning, optional ClamAV and VirusTotal gates, and CI-driven release publication.
- **Native-to-curated flow**: upstream native skills can land in `skills/` in any language, and the private enhancer can propose curated English derivatives into `skills_omni/` with attribution.

---

## Table of Contents

- [New Here? Start Here](#new-here-start-here)
- [Core Concepts](#core-concepts)
- [Why Omni Skills](#why-omni-skills)
- [Compatibility and Invocation](#compatibility-and-invocation)
- [Installation](#installation)
- [Choose Your Tool](#choose-your-tool)
- [Runtime Surfaces](#runtime-surfaces)
- [Catalog, Bundles, and Curated Output](#catalog-bundles-and-curated-output)
- [Security and Release Posture](#security-and-release-posture)
- [Documentation Map](#documentation-map)
- [Repository Layout](#repository-layout)
- [Contributing](#contributing)
- [License](#license)

---

## New Here? Start Here

If you searched for **AI coding assistant skills**, **Claude Code skills**, **Cursor skills**, **Codex CLI skills**, **Gemini CLI skills**, **Antigravity skills**, or **installable `SKILL.md` libraries**, this repository is the fastest path from discovery to real usage.

### 1. Context: What is this?

Omni Skills is an installable skill catalog and runtime for AI coding assistants.

It includes:

- curated `SKILL.md`-based skills
- generated manifests, bundles, and archives
- guided and visual install flows
- a read-only catalog API
- MCP discovery and local config tooling
- an A2A task runtime
- a private enhancement pipeline that can publish curated English derivatives into `skills_omni/`

At the simplest level, Omni Skills is a public repository of reusable skills. What makes it different is that the repository is also the distribution and runtime layer.

### 2. Quick Start

Install once:

```bash
npx omni-skills
```

That opens the guided installer in an interactive terminal. Outside a TTY, the default target is Antigravity:

```bash
~/.gemini/antigravity/skills
```

You can also force the guided flow explicitly:

```bash
npx omni-skills install --guided
```

### 3. Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "Skills installed in ~/.gemini/antigravity/skills"
```

### 4. Use your first skill

Ask your assistant naturally:

> "Use `@brainstorming` to plan a SaaS MVP."
> "Use `@api-design` to review this endpoint design."
> "Use `@debugging` to isolate this regression."

### 5. Start with a bundle

- **General engineering?** Start with `essentials`.
- **Product + app delivery?** Start with `full-stack`.
- **Security review?** Start with `security`.
- **Infra and release work?** Start with `devops`.
- **LLM application work?** Start with `ai-engineer`.

---

## Core Concepts

Before comparing bundles or picking an install path, it helps to separate five ideas:

- **Skills**: reusable `SKILL.md` playbooks that teach an assistant how to execute a workflow well.
- **Catalog artifacts**: generated JSON and archive outputs that make skills searchable, comparable, downloadable, and installable.
- **MCP config**: client-side configuration that lets assistants discover Omni Skills through MCP tools and local sidecar workflows.
- **A2A runtime**: agent-to-agent orchestration for discovery, recommendation, and install-plan handoff.
- **Curated output**: `skills_omni/` is the Omni-maintained enhanced surface, separate from native upstream intake in `skills/`.

Current native/curated policy:

- `skills/` can accept native upstream intake in any language
- `skills_omni/` is always curated and published in English
- `skills_omni/` is a one-way surface and does not loop back into native intake

---

## Why Omni Skills

Omni Skills is not just “another repository with skills in folders.” The project has a stronger contract and a broader runtime surface.

| If you want | Typical skills repository | Omni Skills |
| :---------- | :------------------------ | :---------- |
| Install into a real assistant | Manual copy or custom script | `npx omni-skills`, guided install, visual UI, selective `--skill` and `--bundle` |
| Search and compare skills | Browse markdown manually | Generated catalog, filtering, bundle planning, search, compare, and recommendation |
| Use the same data across tools | Separate logic per tool | Shared manifests and catalog for CLI, API, MCP, and A2A |
| Configure MCP clients | Hand-edit files | `config-mcp`, local sidecar previews, generated recipes, and allowlisted writes |
| Trust releases | Best-effort packaging | Checksums, signed archives, scanner verification, release CI, and publish preflight |
| Curate community intake | Whatever lands stays as-is | Native intake in `skills/`, curated English derivatives in `skills_omni/` with attribution |

If you want a smaller but more operationally useful library, that is the point of Omni Skills.

---

## Compatibility and Invocation

These skills follow the `SKILL.md` model and can be used as a normal repository of skills, but the public package also installs and configures them across a broad client surface. The current runtime supports **7 install-capable clients** and **16 config-capable clients** for MCP configuration.

| Tool | Type | Invocation Example | Install Path |
| :--- | :--- | :----------------- | :----------- |
| **Claude Code** | CLI | `Use brainstorming to plan a feature` | `~/.claude/skills` |
| **Cursor** | IDE | `@brainstorming help me plan a feature` | `~/.cursor/skills` |
| **Gemini CLI** | CLI | `Use brainstorming to plan a feature` | `~/.gemini/skills` |
| **Codex CLI** | CLI | `Use brainstorming to plan a feature` | `~/.codex/skills` |
| **Kiro** | CLI / IDE | `Use brainstorming to plan a feature` | `~/.kiro/skills` or workspace `.kiro/skills` |
| **Antigravity** | IDE | `Use @brainstorming to plan a feature` | `~/.gemini/antigravity/skills` |
| **OpenCode** | CLI | `opencode run @brainstorming help me plan a feature` | `<workspace>/.opencode/skills` |

The broader MCP config surface also supports:

- VS Code and Dev Containers
- Cline
- GitHub Copilot CLI
- Continue
- Windsurf
- Zed
- Goose
- Kilo Code
- Junie
- Gemini user/workspace configs
- Claude settings and desktop targets

### Broader MCP configuration coverage

These targets are part of the supported MCP configuration surface, even when they are not install targets for skill directories:

| Client or Surface | Support Type | Notes |
| :---------------- | :----------- | :---- |
| Claude settings and desktop | MCP config | Settings, desktop, and project-aware flows |
| VS Code | MCP config | User, workspace, insiders, and Dev Container targets |
| Gemini | MCP config | User and workspace settings |
| Cline | MCP config | First-class config target |
| GitHub Copilot CLI | MCP config | User and repo config targets |
| Continue | MCP config | Workspace YAML generation |
| Windsurf | MCP config | User config target |
| Zed | MCP config | Workspace config target |
| Goose | MCP config | User config target with generated recipe |
| Kilo Code | MCP config | User, project, and workspace targets |
| Junie | MCP config | Project and user config targets |

That broader surface is one of the main reasons Omni Skills reads more like a platform than a plain repository of markdown skills.

---

## Installation

### Option A: Install with `npx` (recommended)

```bash
npx omni-skills
```

### Option B: Guided install explicitly

```bash
npx omni-skills install --guided
```

### Option C: Install a specific skill

```bash
npx omni-skills --skill api-design
```

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Install to a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Install to any path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

### Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## Choose Your Tool

| Tool | Install | First Use |
| :--- | :------ | :-------- |
| Claude Code | `npx omni-skills --claude` | `Use brainstorming to plan a feature` |
| Cursor | `npx omni-skills --cursor` | `@brainstorming help me plan a feature` |
| Gemini CLI | `npx omni-skills --gemini` | `Use brainstorming to plan a feature` |
| Codex CLI | `npx omni-skills --codex` | `Use brainstorming to plan a feature` |
| Antigravity | `npx omni-skills --antigravity` or no-arg default | `Use @brainstorming to plan a feature` |
| Kiro | `npx omni-skills --kiro` | `Use brainstorming to plan a feature` |
| OpenCode | `npx omni-skills --opencode` | `opencode run @brainstorming help me plan a feature` |
| Custom path | `npx omni-skills --path ./my-skills` | Depends on your tool |

If you are unsure, start with:

- [Getting Started](docs/users/GETTING-STARTED.md)
- [CLI User Guide](docs/users/CLI-USER-GUIDE.md)
- [Usage Guide](docs/users/USAGE.md)

---

## Runtime Surfaces

Omni Skills is not only a library of skills. The package also exposes the runtime surfaces that consume the same generated catalog.

| Surface | State | What it does | Example |
| :------ | :---- | :----------- | :------ |
| **CLI** | Available | Find and install skills, run diagnostics, open the terminal UI, boot services, and run smoke checks | `npx omni-skills doctor` |
| **Catalog API** | Available | Read-only catalog, search, bundles, compare, install plans, downloads, and admin runtime inspection | `npx omni-skills api --port 3333` |
| **MCP** | Available | Discovery, recommendation, install preview, local sidecar, and client-aware `config-mcp` flows | `npx omni-skills mcp stream --local` |
| **A2A** | Available | Task-aware discovery, install-plan handoff, polling, streaming, cancelation, push config, and local persistence | `npx omni-skills a2a --port 3335` |

### Visual shell and operator commands

```bash
npx omni-skills ui
npx omni-skills ui --text
npx omni-skills doctor
npx omni-skills smoke
npx omni-skills publish-check
```

### MCP transports

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

### MCP config UX

```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

---

## Catalog, Bundles, and Curated Output

The current generated catalog contains:

- `32` published skills
- `15` active catalog categories
- `7` fully backed bundles
- `32` curated enhanced derivatives already mirrored into `skills_omni/`

### Current bundle availability

| Bundle | Available now | Notes |
| :----- | :------------ | :---- |
| `essentials` | `4/4` | `find-skills`, `brainstorming`, `architecture`, `debugging` |
| `full-stack` | `5/5` | `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows` |
| `design` | `5/5` | `frontend-design`, `omni-figma`, `design-systems-ops`, `accessibility-audit`, `design-token-governance` |
| `security` | `4/4` | `security-auditor`, `vulnerability-scanner`, `incident-response`, `threat-modeling` |
| `devops` | `5/5` | `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering` |
| `ai-engineer` | `7/7` | `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`, `data-contracts`, `model-serving` |
| `oss-maintainer` | `4/4` | `find-skills`, `create-pr`, `changelog`, `documentation` |

### Native intake and curated output

- `skills/` is the native intake surface
- `skills_omni/` is the curated Omni-maintained surface
- native intake can be multilingual
- curated enhanced output is always English
- changes to native skills can be reprocessed by the private enhancer and refreshed in the curated baseline

This makes `skills_omni/` a maintained catalog surface, not a second copy of `skills/`.

---

## Security and Release Posture

Omni Skills ships a stronger release and verification story than a plain markdown repository.

### Validation and smoke checks

```bash
npm run validate
npm run build
npm test
npm run smoke
```

### What the pipeline validates

- skill validation and metadata generation
- taxonomy normalization and recategorization tooling
- catalog and archive generation
- automated tests
- API, MCP, and A2A boot paths
- archive verification
- package preflight with `npm pack --dry-run`

### Release posture

- SHA-256 checksum manifests
- detached signatures on release artifacts
- CI-enforced release verification
- ClamAV and VirusTotal-gated release flow
- GitHub Release generation
- npm publication from the verified tarball only
- automatic version bump and release on qualifying skill merges to `main`

Automatic release currently triggers only when a merge changes:

- `skills/*/**`
- `skills_omni/*/**`
- `data/bundles.json`

That keeps doc-only changes from triggering package publication.

---

## Documentation Map

### Start here

- [Documentation Hub](docs/README.md)
- [Getting Started](docs/users/GETTING-STARTED.md)
- [CLI User Guide](docs/users/CLI-USER-GUIDE.md)
- [Usage Guide](docs/users/USAGE.md)
- [Bundles](docs/users/BUNDLES.md)
- [Catalog](docs/CATALOG.md)
- [Runbook](docs/operations/RUNBOOK.md)

### Architecture and specs

- [Agent-Native Roadmap](docs/architecture/AGENT-NATIVE-ROADMAP.md)
- [ADR-0001: Agent-Native Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)
- [Codebase Analysis](docs/architecture/CODEBASE-ANALYSIS.md)
- [Catalog API](docs/specs/CATALOG-API.md)
- [CLI Guided Installer](docs/specs/CLI-GUIDED-INSTALLER.md)
- [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md)
- [Local MCP Sidecar](docs/specs/LOCAL-MCP-SIDECAR.md)
- [Client Support Matrix](docs/specs/CLIENT-SUPPORT-MATRIX.md)
- [Skill Classification](docs/specs/SKILL-CLASSIFICATION.md)
- [Security Validation](docs/specs/SECURITY-VALIDATION.md)
- [Skill Manifest](docs/specs/SKILL-MANIFEST.md)

### Contribution and quality

- [Contributing Guide](CONTRIBUTING.md)
- [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md)
- [Skill Template](docs/contributors/SKILL-TEMPLATE.md)
- [Skill Anatomy](docs/contributors/SKILL-ANATOMY.md)
- [Quality Bar](docs/contributors/QUALITY-BAR.md)
- [High-Score Playbook](docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---

## Repository Layout

| Path | Purpose |
| :--- | :------ |
| `skills/` | Canonical authored skills and native intake |
| `skills_omni/` | Curated Omni-maintained enhanced derivatives |
| `docs/` | User, contributor, architecture, operations, and spec documentation |
| `dist/` | Generated manifests, bundles, catalog, and archives |
| `data/` | Bundle definitions and static supporting data |
| `packages/catalog-core/` | Shared catalog runtime |
| `packages/server-api/` | Read-only HTTP API |
| `packages/server-mcp/` | MCP server and local sidecar |
| `packages/server-a2a/` | A2A runtime and task orchestration |
| `tools/bin/` | CLI entrypoints |
| `tools/lib/` | Installer and UI helpers |
| `tools/scripts/` | Validation, generation, release, and test scripts |

`dist/` is intentionally versioned in this repository because the generated artifacts are part of the install, API, MCP, A2A, smoke, and release contract.

---

## Contributing

Omni Skills accepts native upstream skill intake under `skills/`.

Current contribution rules:

- native skill intake may be rough and may be authored in any language
- curated output under `skills_omni/` is reserved for automation-authored Omni derivatives
- public manual edits to `skills_omni/` are rejected
- the private enhancer can reprocess native skill changes and refresh the curated baseline

Start with:

- [Contributing Guide](CONTRIBUTING.md)
- [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md)

---

## License

Code and tooling are licensed under the [MIT License](LICENSE).
Documentation and skill content are licensed under [CC BY 4.0](LICENSE-CONTENT).
