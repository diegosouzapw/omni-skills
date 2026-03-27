# 🚀 Getting Started

> **Install skills, verify the setup, and invoke your first AI skill in under 2 minutes.**

---

## 📊 Current Catalog Status

| Metric | Value |
|:-------|:------|
| Published skills | **2** (`omni-figma`, `find-skills`) |
| Defined bundles | **6** (most with partial availability) |
| Supported clients | **7** (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |

---

## 📦 Step 1 — Install

### 🎯 Default Install (Antigravity)

```bash
npx omni-skills
```

### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
```

> ⚠️ The `full-stack` bundle currently resolves to `omni-figma` only. Missing members are surfaced as warnings.

### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
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
test -d .agents/skills && echo "✅ Skills installed"
```

Or use the built-in diagnostics:

```bash
npx omni-skills doctor
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
npx omni-skills mcp stream --local
```

### 🌐 Catalog API

Exposes the skill catalog as a read-only HTTP API:

```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Scaffold

Agent-to-agent discovery and install planning:

```bash
npx omni-skills a2a --port 3335
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
| 📗 [Usage Guide](usage.md) | All CLI commands, prompt patterns, and runtime modes |
| 📦 [Bundles](bundles.md) | Curated skill collections and their availability |
| 📚 [Catalog](../CATALOG.md) | Auto-generated catalog of published skills |
| 📖 [Documentation Hub](../README.md) | Full documentation map |
| 🔧 [System Runbook](../operations/runbook.md) | Operational reference |
