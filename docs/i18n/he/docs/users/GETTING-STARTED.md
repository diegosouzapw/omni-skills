# 🚀 Getting Started (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

> Translation snapshot for **Awesome Omni Skills** `v0.9.0`.
> Source: `docs/users/GETTING-STARTED.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/users/GETTING-STARTED.md; version=0.9.0; release=v0.9.0; english_snapshot=2026-04-02T00:00:00+00:00 -->

> **Install skills, verify the setup, and invoke your first AI skill in under 2 minutes.**

> **Package status:** the canonical public package is now `awesome-omni-skills`. For release and rollout details, see [rollout and migration status](../operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).

---

## 📊 Current Catalog Status

<!-- generated:getting-started-catalog-status:start -->
| Metric | Value |
|:-------|:------|
| Native catalog | **155** skills across 16 active categories, including architecture, design, security, DevOps, AI-engineering, and imported native intake |
| Curated output | **80** enhanced English derivatives in `skills_omni/` |
| Defined bundles | **7** (all fully backed by published catalog skills) |
| Install-capable clients | **7** (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| MCP config-capable clients | **16** across 33 first-class MCP config targets |
<!-- generated:getting-started-catalog-status:end -->

---

## 📦 Step 1 — Install

### התחלה מהירה

```bash
npx awesome-omni-skills
```

In an interactive terminal, this now opens the guided installer instead of silently assuming a client.

### 🖥️ Visual Shell

```bash
npx awesome-omni-skills ui
```

This opens the branded terminal hub for install, discovery, MCP, API, and A2A startup.

### 🎯 Default Install (Antigravity Outside TTY)

Outside a TTY, the no-arg installer still defaults to `~/.gemini/antigravity/skills`.

### 🖱️ Focused Install — One Skill, One Client

```bash
npx awesome-omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx awesome-omni-skills find figma

# Search + install in one shot
npx awesome-omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx awesome-omni-skills --codex --bundle full-stack
npx awesome-omni-skills --codex --bundle ai-engineer
```

> ✅ The starter bundles are now fully backed, including `devops` and `ai-engineer`.

### 🎛️ Multiple Targets at Once

```bash
npx awesome-omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Check that skills landed in the right place:

```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

Or use the built-in diagnostics:

```bash
npx awesome-omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

Gives agents filesystem tools to detect clients, install/remove skills, and write MCP configs:

```bash
npx awesome-omni-skills mcp stream --local
```

You can also configure MCP for clients that are not skill-install targets:

```bash
npx awesome-omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx awesome-omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Exposes the skill catalog as a read-only HTTP API:

```bash
npx awesome-omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Agent-to-agent discovery, recommendation, install planning, polling, and streaming:

```bash
npx awesome-omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

A skill is a structured markdown playbook (`SKILL.md`) that gives an AI agent:

| Component | Purpose |
|:----------|:--------|
| 📋 **Frontmatter** | Machine-readable metadata (name, category, tags, tools, risk) |
| 📝 **Body** | Task-specific instructions, steps, guardrails, and examples |
| 📚 **References** | Supporting docs the agent can consult during execution |
| 🎨 **Assets** | Icons, images, or other packaged resources |

---

## ➡️ Next Steps

| Doc | What You'll Learn |
|:----|:------------------|
| 🧭 [CLI User Guide](CLI-USER-GUIDE.md) | Full command reference for install, runtime, config, and diagnostics |
| 📗 [Usage Guide](USAGE.md) | All CLI commands, prompt patterns, and runtime modes |
| 📦 [Bundles](BUNDLES.md) | Curated skill collections and their availability |
| 📚 [Catalog](../CATALOG.md) | Auto-generated catalog of published skills |
| 📖 [Documentation Hub](../README.md) | Full documentation map |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Operational reference |
