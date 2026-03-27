# 🔌 Local MCP Sidecar

> **Optional local-mode extension for `@omni-skills/server-mcp` that adds filesystem-aware tools for client detection, skill management, and MCP config generation.**

---

## 📊 Status

| Feature | State |
|:--------|:------|
| ✅ Read-only catalog tools | Implemented |
| ✅ Filesystem-aware local tools | Implemented |
| ✅ 3 transports (stdio/stream/sse) | Implemented |
| ✅ Allowlisted writes | Implemented |
| ✅ Preview-before-write defaults | Implemented |
| ✅ Client-aware MCP config writing | Implemented |
| ✅ HTTP auth + rate limiting | Implemented |
| ⏳ Signed artifact enforcement | Pending |
| ⏳ Full client config coverage | Partial |

---

## 🎯 Purpose

Local mode adds **filesystem-aware tools** on top of the existing read-only MCP catalog surface. Use it when an agent needs to:

- 🕵️ Detect compatible local AI clients
- 📋 Inspect installed skills
- 👁️ Preview skill installation or removal (dry-run)
- 📦 Apply local skill installation or removal
- ⚙️ Write a local MCP config file after preview

---

## 🔌 Transports

| Transport | Protocol | Use Case |
|:----------|:---------|:---------|
| `stdio` | Pipe | Direct client integration |
| `stream` | Streamable HTTP | Modern HTTP clients |
| `sse` | Server-Sent Events | Legacy clients |

---

## 🚀 Enable Local Mode

### 📦 From repo:

```bash
npm run mcp:local
npm run mcp:stream:local
npm run mcp:sse:local
```

### 📦 Via CLI:

```bash
npm run cli -- mcp stdio --local
npm run cli -- mcp stream --local
npm run cli -- mcp sse --local
```

### 📦 From published package:

```bash
npx omni-skills mcp stdio --local
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

> All commands set `OMNI_SKILLS_MCP_MODE=local` automatically.

---

## 🛠️ Local Tools

When local mode is enabled, these extra tools become available:

| Tool | Description | Default |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Scan for AI clients and their skill/config paths | — |
| 📋 `list_installed_skills` | Inspect installed skills for a specific client | — |
| 📦 `install_skills` | Install skills into a client's skills directory | 🔍 dry-run |
| 🗑️ `remove_skills` | Remove installed skills from a client | 🔍 dry-run |
| ⚙️ `configure_client_mcp` | Write MCP config for a specific client | 🔍 dry-run |

> ⚠️ `install_skills`, `remove_skills`, and `configure_client_mcp` default to **dry-run** when `dry_run` is omitted.

---

## 🎯 Supported Targets

### 📂 Skills Directories

| Client | Path |
|:-------|:-----|
| 🔵 Claude Code | `~/.claude/skills` |
| 🔵 Cursor | `~/.cursor/skills` |
| 🟡 Gemini CLI | `~/.gemini/skills` |
| 🟣 Antigravity | `~/.gemini/antigravity/skills` |
| 🟢 Kiro | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` or `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<workspace>/.agents/skills` |

### ⚙️ MCP Config Files

| Target | Format |
|:-------|:-------|
| `~/.claude.json` | JSON (`mcpServers`) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<workspace>/.mcp.json` | JSON (`mcpServers`) |
| `<workspace>/.vscode/mcp.json` | JSON (`servers`) |
| Client root `mcp.json` | JSON (per-client format) |

---

## 🔒 Allowlist Model

The local sidecar only writes under an **explicit allowlist**.

### 🟢 Default allowlist:

- Known client roots under `$HOME`
- `$CODEX_HOME` (or `~/.codex` if unset)
- Current workspace root
- `<workspace>/.agents`
- `<workspace>/.vscode`

### ➕ Extend the allowlist:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

---

## ⚙️ Config Writing Examples

### 🔵 Claude Code / Workspace JSON

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### 🔵 Cursor / Generic JSON

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 💜 VS Code

```json
{
  "servers": {
    "omni-skills": {
      "type": "stdio",
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 🔴 Codex TOML

```toml
[mcp_servers.omni-skills]
url = "http://127.0.0.1:3334/mcp"
```

### 📋 Generic stdio

```json
{
  "mcpServers": {
    "omni-skills": {
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

---

## 🔐 Hosted HTTP Hardening

The HTTP transports support the same env-driven controls as the catalog API:

| Variable | Purpose |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bearer token auth |
| `OMNI_SKILLS_HTTP_API_KEYS` | Comma-separated API keys |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max requests per window |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Rate limit window in ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Enable audit logging |

> 🟢 `/healthz` remains open. `/mcp`, `/sse`, and `/messages` require auth when enabled.
