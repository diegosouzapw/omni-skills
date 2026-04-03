# 🤝 Contributing to Awesome Omni Skills (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

> Translation snapshot for **Awesome Omni Skills** `v0.9.0`.
> Source: `CONTRIBUTING.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=CONTRIBUTING.md; version=0.9.0; release=v0.9.0; english_snapshot=2026-04-02T00:00:00+00:00 -->

> **Awesome Omni Skills is a public repository of skills, a curated repository of improved best-practice derivatives, and the runtime surfaces built on top of that catalog.**
> Contributions can target either area, but both must stay aligned with the generated artifacts and the current CLI behavior.

---

## 📊 Repository Baseline

<!-- generated:contributing-repository-baseline:start -->
| Metric | Value |
|:-------|:------|
| 📦 Package version | `0.9.0` |
| 🧠 Published skills | `155` |
| ✨ Curated derivatives | `80` |
| 📦 Fully backed bundles | `7` |
| 🖥️ Install-capable clients | `7` |
| 🔌 MCP config-capable clients | `16` across `33` targets |
| 🔄 Automatic releases | Enabled on `main` |
<!-- generated:contributing-repository-baseline:end -->

---

## Viktig

| What | Where |
|:-----|:------|
| 🧠 Skills are authored in | `skills/<skill-name>/SKILL.md` |
| 📖 Contributor templates and guidance | `docs/contributors/` |
| 🧾 Canonical PR flow for new skills | [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Native incoming skills land under | `skills/` (any language) |
| ✨ Curated enhanced derivatives | `skills_omni/` (English only, automated) |
| 🚫 `skills_omni/` is protected | Not open for direct public contribution |
| 🔁 Repository-based intake | Maintainer-operated external imports still land under `skills/` and follow the same review standard |
| 📖 Runtime and architecture docs | `docs/` |
| 📄 Community files | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |

---

## 🎯 Common Contribution Types

| Type | Area |
|:-----|:-----|
| 🧠 Add or improve a skill | `skills/` |
| 📥 Review a repository-based intake PR | `external-import/<source>` branches targeting `skills/` |
| 🌍 Propose a new upstream repository | `REPOSITORY-SOURCES.md` |
| 📖 Update contributor guidance | `docs/contributors/` |
| 🖥️ Improve CLI, installer, or scripts | `tools/` |
| 📦 Improve catalog runtime or protocol packages | `packages/` |
| 🧪 Tighten tests, smoke checks, or release docs | Various |

---

## Hurtigstart

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/awesome-omni-skills.git
cd awesome-omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

> **📝 Open the PR with `Allow edits from maintainers` enabled.**

---

## Dokumentasjon

A good native incoming skill should:

- ✅ Solve a specific problem cleanly
- ✅ Be reusable across projects
- ✅ Include instructions an agent can actually follow
- ✅ Avoid vague or redundant content
- ✅ Declare accurate frontmatter and compatibility metadata when available
- ✅ Land with generated `metadata.json` classification artifacts after automation runs

### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

> **💡 Tip:** Release-grade skill packs should include `agents/`, `references/`, `examples/`, and `scripts/`. But the intake surface is intentionally permissive — a minimal native incoming skill is allowed, and the enhancer pipeline generates the stronger derivative.

### 🔀 Two Native Intake Paths

The public repository accepts native skills through two operational paths:

| Path | How it arrives | Review expectation |
|:-----|:---------------|:-------------------|
| 👤 Direct contributor PR | A human branch edits `skills/` directly | Validate the skill, generated artifacts, and bundle impact |
| 📥 Repository-based external intake | Maintainer-operated `external-import/<source>` PR imports skills from another reviewed repository | Validate the skill plus provenance, upstream ownership, and license notes |

Both paths land in `skills/`, both trigger the same public validator, and both can produce a curated `skills_omni/` companion PR.

If you want to propose an upstream repository instead of sending a skill directly, edit [REPOSITORY-SOURCES.md](REPOSITORY-SOURCES.md). The normal proposal is now repo-first:

- provide `repo_url`
- leave `branch` as `auto` unless you need a non-default branch
- leave `skills_path` as `auto` unless you know the exact root

Merge there is still a public review gate, not an automatic sync trigger.

### 🌐 Language Policy

| Surface | Accepted Languages |
|:--------|:-------------------|
| 📥 `skills/` (native intake) | Portuguese, English, or any language |
| ✨ `skills_omni/` (curated output) | English only |

> The private enhancer preserves native source as submitted and rewrites the curated derivative in English.

📖 For the full branch, validation, and enhancer-review sequence, use [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).

---

## ✅ Required Validation

Run this before opening a PR:

```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run identity:check    # Verifies package/repo identity stays aligned with project manifests
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<details>
<summary>📋 <strong>What <code>npm run validate</code> regenerates</strong></summary>

- `metadata.json`
- `skills/<skill>/metadata.json`
- Canonical taxonomy mapping
- Maturity, best practices, quality, and security scores
- Static security findings
- Optional ClamAV and VirusTotal scanner status (when configured)

</details>

> **⚠️ Important:** Validation is the contract used by CLI, API, MCP, A2A, manifests, archives, and release automation. Treat generated metadata as part of the review surface, not disposable output.

If you touch branding, package metadata, repo URLs, or repository header copy, also run:

```bash
npm run repo:metadata:print
```

That command prints the source-controlled GitHub description, homepage, and topics contract derived from `data/project_identity.json`.

### 📥 Intake Policy

| Condition | Behavior |
|:----------|:---------|
| Missing/incomplete frontmatter | ⚠️ Warnings (does not block) |
| Critical security findings | 🚫 Blocks intake |
| Hard validation errors | 🚫 Blocks intake |
| Stricter editorial standard | Enforced in enhanced derivative flow, not at native intake |

### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<details>
<summary>📋 <strong>What the smoke pass validates</strong></summary>

- ✅ Skill validation
- ✅ Catalog generation
- ✅ Docs catalog generation
- ✅ Test suite
- ✅ `npm pack --dry-run`
- ✅ API boot
- ✅ MCP boot in `stdio`, `stream`, and `sse`
- ✅ A2A boot
- ✅ Archive verification and packaging expectations

</details>

---

## 📋 Skill Frontmatter

Frontmatter is strongly recommended. Use [Skill Template](docs/contributors/SKILL-TEMPLATE.md) as the baseline.

```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<details>
<summary>🏷️ <strong>Canonical taxonomy categories</strong></summary>

| Category | Category |
|:---------|:---------|
| `development` | `frontend` |
| `backend` | `fullstack-web` |
| `tools` | `cli-automation` |
| `business` | `product` |
| `design` | `data-ai` |
| `ai-agents` | `machine-learning` |
| `devops` | `testing-security` |
| `documentation` | `content-media` |
| `communication` | `uncategorized` |

</details>

> **ℹ️** Skill version is independent from npm package version. If a native incoming skill doesn't have frontmatter yet, it will be accepted with warnings and derive temporary metadata from directory, title, and body text.

---

## ⚙️ Runtime Contributions

If you touch `packages/`, `tools/bin/`, `tools/lib/`, or build scripts:

- 📦 Keep `dist/` and docs aligned with the implementation
- 🔄 Prefer reusing `packages/catalog-core` instead of duplicating catalog logic
- 🔒 Keep local-write behavior behind preview or dry-run defaults
- 🔌 Keep MCP writers disciplined — only add first-class config writers when the client has a stable public config contract
- 🛡️ Treat security scanner warnings as part of the review bar
- 🧪 Update tests when changing CLI commands, transport modes, or public endpoints

### 🚧 Important Boundary

| Do this ✅ | Don't do this 🚫 |
|:-----------|:-----------------|
| Submit native work under `skills/` | Open manual PRs that edit `skills_omni/` |
| Let automation handle the enhancer run | Add curated content directly |
| Focus on legitimate skill quality | Bypass the automated companion PR flow |

> **ℹ️** When a native skill in `skills/` is updated, the private enhancer reprocesses it and refreshes the enhanced baseline.

---

## 🔄 Enhancer Outcome States

During public native-skill PRs, the enhancer reports one of four states:

| State | Meaning |
|:------|:--------|
| ✅ `completed` | Enhanced derivative generated cleanly, eligible for `skills_omni/` |
| ⚠️ `degraded` | Completed with fallback or weaker score movement — inspect more carefully |
| 🚫 `blocked` | Stopped for infrastructure or validation reasons — prevents auto-publication |
| ❌ `failed` | Unexpected error — requires maintainer investigation |

> **📝 Contributors** don't need to fix enhancer infrastructure issues. The responsibility is to submit a legitimate native skill and keep the repo green.

---

## 🔄 Automatic Release Policy

When a change lands on `main` and includes:

- `skills/**`
- `skills_omni/**`
- `data/bundles.json`

…the repository issues a **package release automatically**.

### 📋 Version Bump Rule

| From | To | Rule |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Patch +1 |
| `0.1.9` | `0.1.10` | Patch +1 |
| `0.1.10` | `0.2.0` | Roll to next minor, reset patch |

> The release flow regenerates catalog/archives, commits the version bump, tags the release, publishes npm, and creates the GitHub release automatically.

---

## 📝 Commit Conventions

| Prefix | Use For |
|:-------|:--------|
| `feat:` | New skill or feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `refactor:` | Code cleanup or structure changes |
| `test:` | Test changes |
| `chore:` | Maintenance |

---

## ❓ Need Help?

| Channel | Link |
|:--------|:-----|
| 💬 Questions | [Open a Discussion](https://github.com/diegosouzapw/awesome-omni-skills/discussions) |
| 🐛 Bugs | [Open an Issue](https://github.com/diegosouzapw/awesome-omni-skills/issues) |
| 📝 Early feedback | [Open a Draft PR](https://github.com/diegosouzapw/awesome-omni-skills/pulls) |
