<!-- omni-skills: version=1.0.0; skills=1; updated_at=2026-03-26 -->
# 🧠 Omni Skills — Curated AI Coding Skills for Every Agent

> **Quality-first, tool-agnostic skill library for Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode & more.**
> Install in 30 seconds. Use immediately. Every skill validated and improved by the Omni team.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Install with NPX](https://img.shields.io/badge/Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#installation)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Anthropic-purple)](https://claude.ai)
[![Cursor](https://img.shields.io/badge/Cursor-AI%20IDE-orange)](https://cursor.sh)
[![Gemini CLI](https://img.shields.io/badge/Gemini%20CLI-Google-blue)](https://github.com/google-gemini/gemini-cli)
[![Codex CLI](https://img.shields.io/badge/Codex%20CLI-OpenAI-green)](https://github.com/openai/codex)
[![Kiro](https://img.shields.io/badge/Kiro-AWS-orange)](https://kiro.dev)
[![Antigravity](https://img.shields.io/badge/Antigravity-AI%20IDE-red)](https://github.com/diegosouzapw/omni-skills)

---

## Why Omni Skills?

- 🎯 **Quality over quantity** — every skill is validated, tested, and improved before inclusion
- 🔧 **Tool-agnostic** — works with every major AI coding assistant, not locked to one
- 📦 **npm installable** — `npx omni-skills` puts skills where your tool expects them
- 🏷️ **Rich metadata** — category, tags, complexity, risk level, version, and tool compatibility
- ✅ **Automated validation** — CI checks every skill on every PR
- 📚 **Multi-file skills** — skills can include references, agents, and assets

---

## Table of Contents

- [🚀 Quick Start](#quick-start)
- [🔌 Compatibility & Invocation](#compatibility--invocation)
- [🛠️ Installation](#installation)
- [📦 Features & Categories](#features--categories)
- [🎁 Curated Bundles](#curated-bundles)
- [🧭 Architecture & Specs](#architecture--specs)
- [📂 Project Structure](#project-structure)
- [🛡️ Security Posture](#security-posture)
- [🧯 Troubleshooting](#troubleshooting)
- [🤝 Contributing](#contributing)
- [⚖️ License](#license)

---

## Quick Start

### 1. Install

```bash
npx omni-skills
```

### 2. Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "Skills installed ✓"
```

### 3. Use Your First Skill

```text
Use @omni-figma to implement this Figma design into React components.
```

👉 **[Complete Getting Started Guide](users/getting-started.md)**
👉 **[Usage Guide](users/usage.md)** — how to invoke skills in each tool

---

## Compatibility & Invocation

These skills follow the universal **SKILL.md** format and work with any AI coding assistant that supports agentic skills.

| Tool              | Type | Invocation                           | Skills Path                                          |
| :---------------- | :--- | :----------------------------------- | :--------------------------------------------------- |
| **Claude Code**   | CLI  | `>> /skill-name help me...`          | `~/.claude/skills/`                                  |
| **Gemini CLI**    | CLI  | `Use @skill-name to...`              | `~/.gemini/skills/`                                  |
| **Codex CLI**     | CLI  | `Use @skill-name to...`              | `~/.codex/skills/`                                   |
| **Kiro**          | IDE  | Skills auto-load on demand           | `~/.kiro/skills/`                                    |
| **Antigravity**   | IDE  | `Use @skill-name to...` (Agent Mode) | `~/.gemini/antigravity/skills/`                      |
| **Cursor**        | IDE  | `@skill-name` in Chat                | `~/.cursor/skills/`                                  |
| **OpenCode**      | CLI  | `opencode run @skill-name`           | `.agents/skills/`                                    |
| **Copilot**       | Ext  | Paste content manually               | N/A                                                  |

> **Default install path:** `~/.gemini/antigravity/skills` (Antigravity global). Use `--path` for custom locations.

---

## Installation

### Option A: npx (recommended)

```bash
# Default: Antigravity
npx omni-skills

# Selective install by skill
npx omni-skills --cursor --skill omni-figma

# Selective install by bundle
npx omni-skills --codex --bundle full-stack

# Specific tool
npx omni-skills --claude
npx omni-skills --cursor
npx omni-skills --gemini
npx omni-skills --codex
npx omni-skills --kiro

# Multiple tools at once
npx omni-skills --claude --cursor --gemini

# Custom path
npx omni-skills --path ./my-skills

# Specific version
npx omni-skills --version 1.0.0

# Start the MCP server directly from the package
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local

# Start the catalog API and A2A server from the package
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# Open the interactive CLI UI
npx omni-skills ui

# Run local diagnostics
npx omni-skills doctor

# Run the full local release smoke pipeline
npx omni-skills smoke
```

Without `--skill` or `--bundle`, the installer deploys the full library for the selected target.

### Option A2: Repo CLI

If you cloned the repository and want a richer local CLI:

```bash
npm run cli -- install --cursor --skill omni-figma
npm run cli -- mcp stream --local
npm run cli -- api --port 3333
npm run cli -- a2a --port 3335
npm run cli -- smoke
npm run publish-check
npm run cli -- doctor
```

The same command shape is now available from the published package through `npx omni-skills`.

### Option B: Git Clone

```bash
# Clone directly into your tool's skills directory
git clone https://github.com/diegosouzapw/omni-skills.git /tmp/omni-skills
cp -r /tmp/omni-skills/skills/* ~/.gemini/antigravity/skills/
```

### Choose Your Tool

| Tool         | Install Command                               | First Use                                     |
| :----------- | :-------------------------------------------- | :-------------------------------------------- |
| Claude Code  | `npx omni-skills --claude`                    | `>> /omni-figma implement this design`        |
| Cursor       | `npx omni-skills --cursor`                    | `@omni-figma implement this design`           |
| Gemini CLI   | `npx omni-skills --gemini`                    | `Use @omni-figma to implement this design`    |
| Codex CLI    | `npx omni-skills --codex`                     | `Use @omni-figma to implement this design`    |
| Kiro         | `npx omni-skills --kiro`                      | `Use @omni-figma to implement this design`    |
| Antigravity  | `npx omni-skills` (default)                   | `Use @omni-figma to implement this design`    |
| OpenCode     | `npx omni-skills --opencode`                  | `opencode run @omni-figma`                    |
| Custom path  | `npx omni-skills --path ./my-skills`          | Depends on your tool                          |

---

## Features & Categories

Skills are organized into specialized domains:

| Category       | Focus                                              | Example Skills                                     |
| :------------- | :------------------------------------------------- | :------------------------------------------------- |
| 🏗️ Architecture | System design, ADRs, patterns                     | `architecture`, `senior-architect`                 |
| 💼 Business     | Growth, pricing, SEO, marketing                   | `copywriting`, `pricing-strategy`                  |
| 🤖 Data & AI    | LLM apps, RAG, agents, analytics                  | `rag-engineer`, `prompt-engineer`                  |
| 💻 Development  | Languages, frameworks, code quality               | `omni-figma`, `react-patterns`                     |
| 📋 General      | Planning, docs, productivity                      | `brainstorming`, `doc-coauthoring`                 |
| ☁️ Infrastructure | DevOps, cloud, CI/CD, deployment                | `docker-expert`, `aws-serverless`                  |
| 🛡️ Security    | AppSec, pentesting, compliance                    | `security-auditor`, `vulnerability-scanner`        |
| 🧪 Testing      | TDD, E2E, QA workflows                           | `test-driven-development`, `testing-patterns`      |
| ⚙️ Workflow     | Automation, orchestration, agents                 | `workflow-automation`, `trigger-dev`               |

---

## SKILL.md Format

Every skill uses the universal `SKILL.md` format with YAML frontmatter:

```yaml
---
name: skill-name
description: "What this skill does"
version: "1.0.0"
category: development
tags: [react, typescript]
complexity: intermediate    # beginner|intermediate|advanced|expert
risk: safe                  # safe|caution|offensive|critical
tools: [claude-code, cursor, gemini-cli, antigravity]
source: omni-team           # omni-team|community|official
author: "Author Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---

# Skill Title

## Overview
What this skill does and why...

## When to Use
- Scenario 1
- Scenario 2

## Instructions
Step-by-step guide...
```

👉 **[Full Template](contributors/skill-template.md)** | **[Skill Anatomy](contributors/skill-anatomy.md)**

---

## Curated Bundles

Bundles are recommended skill groups by role. You can use them either as curated reading lists or as selective install inputs with `--bundle`.

| Bundle                | Best For                           | Key Skills                                          |
| :-------------------- | :--------------------------------- | :-------------------------------------------------- |
| 🌟 **Essentials**     | Every developer                    | brainstorming, architecture, debugging              |
| 💻 **Full-Stack**     | Web/app developers                 | frontend-design, api-design, database-design        |
| 🛡️ **Security**       | Security engineers                 | security-auditor, vulnerability-scanner             |
| ☁️ **DevOps**          | Infrastructure & deployment        | docker-expert, kubernetes, terraform                |
| 🤖 **AI Engineer**    | LLM/ML developers                  | rag-engineer, prompt-engineer, llm-patterns         |
| 📦 **OSS Maintainer** | Open source projects               | create-pr, changelog, documentation                 |

👉 **[Full Bundles Guide](users/bundles.md)**

---

## Architecture & Specs

- [Agent-Native Roadmap](architecture/agent-native-roadmap.md)
- [ADR-0001: Agent-Native Workspace Foundation](architecture/adr-0001-agent-native-workspace.md)
- [Catalog API Surface](specs/catalog-api.md)
- [Local MCP Sidecar](specs/local-mcp-sidecar.md)
- [Skill Manifest Specification](specs/skill-manifest.md)

---

## Project Structure

| Path                         | Purpose                                              |
| :--------------------------- | :--------------------------------------------------- |
| `skills/`                    | The canonical skill library                          |
| `docs/`                      | Main documentation hub                               |
| `docs/architecture/`         | Architecture decisions and roadmap                   |
| `docs/specs/`                | Machine-readable contract documentation              |
| `docs/users/`                | Getting started, usage, bundles                      |
| `docs/contributors/`         | Templates, anatomy, quality bar                      |
| `docs/CATALOG.md`            | Auto-generated skill catalog (by category)           |
| `dist/`                      | Generated machine-readable artifacts                 |
| `packages/catalog-core/`     | Shared runtime catalog library                       |
| `packages/server-api/`       | Read-only HTTP API                                   |
| `packages/server-mcp/`       | Read-only MCP server                                 |
| `packages/server-a2a/`       | Initial A2A scaffold                                 |
| `tools/bin/`                 | CLI installer (published to npm)                     |
| `tools/lib/`                 | Shared libraries for installer                       |
| `tools/scripts/`             | Validation, index generation, catalog builder        |
| `skills_index.json`          | Auto-generated JSON index of all skills              |

---

## Security Posture

- Every skill is tagged with a `risk` level: `safe`, `caution`, `offensive`, or `critical`
- Skills with shell commands, network access, or credential handling are reviewed for security
- The CLI installer includes symlink safety checks to prevent directory traversal
- Validation scripts check for high-risk command patterns
- See [`SECURITY.md`](SECURITY.md) for reporting vulnerabilities

---

## Troubleshooting

### Skills not loading?

1. Verify the install path matches your tool:
   ```bash
   ls ~/.gemini/antigravity/skills/  # Antigravity
   ls ~/.claude/skills/              # Claude Code
   ls ~/.cursor/skills/              # Cursor
   ```

2. Re-install with the correct flag:
   ```bash
   npx omni-skills --claude  # for Claude Code
   ```

### Too many skills overwhelming context?

Start with just 3-5 skills from a [bundle](users/bundles.md). You don't need to load all skills at once.

### Windows users

Use the standard install commands. No special configuration needed:

```bash
npx omni-skills --cursor
```

---

## Contributing

We welcome contributions! Every skill is reviewed for quality before merging.

1. Fork and clone the repo
2. Create your skill: `mkdir skills/my-skill && cp docs/contributors/skill-template.md skills/my-skill/SKILL.md`
3. Write your skill content
4. Validate: `python3 tools/scripts/validate_skills.py`
5. Open a PR

👉 **[Full Contributing Guide](CONTRIBUTING.md)** | **[Quality Bar](contributors/quality-bar.md)**

---

## Documentation

| For Users                            | For Contributors                          |
| :----------------------------------- | :---------------------------------------- |
| [Getting Started](users/getting-started.md) | [Contributing Guide](CONTRIBUTING.md)     |
| [Usage Guide](users/usage.md)        | [Skill Template](contributors/skill-template.md) |
| [Bundles](users/bundles.md)          | [Skill Anatomy](contributors/skill-anatomy.md) |
| [Catalog](CATALOG.md)                | [Quality Bar](contributors/quality-bar.md) |
| [Agent-Native Roadmap](architecture/agent-native-roadmap.md) | [Skill Manifest Spec](specs/skill-manifest.md) |
| [Catalog API Surface](specs/catalog-api.md) | |
| [ADR-0001](architecture/adr-0001-agent-native-workspace.md) | |

---

## License

Code and tooling are licensed under the [MIT License](../LICENSE).

Documentation and skill content are licensed under [CC BY 4.0](../LICENSE-CONTENT).

---

## Star History

If Omni Skills has been useful, consider ⭐ starring the repo!

<!-- GitHub Topics: skills, ai-coding, agentic-skills, claude-code, cursor, gemini-cli, codex-cli, antigravity, kiro, opencode, SKILL.md, ai-agents, ai-developer-tools -->
