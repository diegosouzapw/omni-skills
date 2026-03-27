# 📐 ADR-0001: Agent-Native Workspace Foundation

> **The key architectural decision that shaped the monorepo workspace structure.**

---

## 📊 Status

✅ **Accepted** — Implemented and proven.

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
| 🤖 `@omni-skills/server-a2a` | A2A scaffold with Agent Card + `message/send` |

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
| 🖥️ **Unified CLI** | One binary exposes install, API, MCP, A2A, diagnostics, and smoke |
| 🧩 **Protocol isolation** | New surfaces iterate without coupling to installer internals |
| 🔌 **Local sidecar** | Working write-capable MCP mode behind an allowlist |
| 📦 **Minimal dependencies** | Only 4 production dependencies across the entire workspace |

---

## ⚠️ Negative Consequences

| Tradeoff | Mitigation |
|:---------|:-----------|
| 🔄 **Metadata duplication** | Python build + JavaScript runtime → eventually consolidate |
| 🏗️ **A2A is partial** | Intentional scaffold, not a complete task lifecycle |
| 📦 **Catalog alignment** | Selective install requires commands, manifests, and docs to stay synchronized |
| 📋 **Bundle metadata gaps** | Bundles can outpace published skills, requiring explicit missing-member warnings |

---

## ➡️ Follow-Up Items

| # | Action | Status |
|:--|:-------|:-------|
| 1️⃣ | Remote MCP authentication and rate limiting | ✅ Done |
| 2️⃣ | Improved client-specific MCP config writing | 🟡 Partial |
| 3️⃣ | Signed release artifacts or per-skill archives | ✅ Archives done, ⏳ CI enforcement pending |
| 4️⃣ | A2A scaffold → task-aware execution | ⏳ Pending |
| 5️⃣ | Expand published catalog for broader bundle coverage | ⏳ In Progress |
