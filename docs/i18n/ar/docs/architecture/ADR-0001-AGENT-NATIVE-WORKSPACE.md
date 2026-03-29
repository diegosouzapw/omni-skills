# 📐 ADR-0001: Agent-Native Workspace Foundation (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


> **The key architectural decision that shaped the monorepo workspace structure.**

---

## 📊 Status

✅ **Accepted** — current workspace direction and active repository shape.

---

## 🔍 Context

Omni Skills started as an **installer-first** repository. That was enough to distribute `SKILL.md` content, but not enough to expose the catalog to agents through protocol-native surfaces.

We needed a foundation that could support:

| Requirement | Protocol |
|:------------|:---------|
| 🌐 Read-only HTTP catalog API | REST |
| 🔌 Read-only MCP server | Model Context Protocol |
| 🤖 Agent-facing A2A surface | Agent-to-Agent |
| 📂 Local install sidecars | Filesystem tools |

**Critical constraint**: Avoid reparsing repo files independently in each new service.

---

## ✅ Decision

Adopt a **workspace-oriented monorepo** with a shared catalog core and protocol-specific packages:

| Package | Purpose |
|:--------|:--------|
| 📦 `omni-skills` (root) | CLI installer and repo scripts |
| 🧠 `@omni-skills/catalog-core` | Shared loading, search, comparison, bundles, install plans |
| 🌐 `@omni-skills/server-api` | Read-only REST API |
| 🔌 `@omni-skills/server-mcp` | MCP with stdio/stream/sse + local sidecar mode |
| 🤖 `@omni-skills/server-a2a` | A2A task runtime with Agent Card, polling, SSE, and push config |

### 📁 Shared Data Sources

The catalog core reads generated artifacts from:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`

---

## ✅ Positive Consequences

| Outcome | Impact |
|:--------|:-------|
| 🔗 **Shared data contract** | API, MCP, and A2A consume the same artifacts |
| 🖥️ **Unified CLI** | One binary exposes install, UI shell, API, MCP, A2A, diagnostics, and smoke |
| 🧩 **Protocol isolation** | New surfaces iterate without coupling to installer internals |
| 🔌 **Local sidecar** | Working write-capable MCP mode behind an allowlist, with client-aware recipes |
| 📦 **Single-package runtime** | The published npm package carries the protocol surfaces, validation tooling, and generated artifacts together |

---

## ⚠️ Negative Consequences

| Tradeoff | Mitigation |
|:---------|:-----------|
| 🔄 **Metadata duplication** | Python build + JavaScript runtime → eventually consolidate |
| 🏗️ **A2A complexity** | Durable lifecycle now exists, but coordination adapters add operational depth |
| 📦 **Catalog alignment** | Selective install requires commands, manifests, and docs to stay synchronized |
| 📋 **Bundle metadata gaps** | Bundles can outpace published skills, requiring explicit missing-member warnings |

---

## ➡️ Follow-Up Items

| # | Action | Status |
|:--|:-------|:-------|
| 1️⃣ | Remote MCP authentication and rate limiting | ✅ Done |
| 2️⃣ | Improved client-specific MCP config writing | ✅ Present today for Claude, Cursor, Codex, Gemini, Kiro, VS Code, and Dev Containers |
| 3️⃣ | Signed release artifacts or per-skill archives | ✅ Present today with CI enforcement on release tags |
| 4️⃣ | A2A task runtime → durable orchestration | ✅ Present today with JSON/SQLite persistence, external executors, opt-in lease coordination, and optional advanced Redis coordination |
| 5️⃣ | Expand published catalog for broader bundle coverage | ✅ Present today for the current seven curated starter bundles |
