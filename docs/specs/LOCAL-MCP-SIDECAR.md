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
| ✅ Release-time signatures and checksums | Implemented for generated archives and surfaced by API/MCP |
| 🟡 Local write-time signature enforcement | Not enforced yet; local mode previews and writes from the trusted local checkout |
| 🟢 Current client coverage | 7 install-capable clients, 16 config-capable clients, 33 config targets, 19 config profiles |

---

## 🎯 Purpose

Local mode adds **filesystem-aware tools** on top of the existing read-only MCP catalog surface. Use it when an agent needs to:

- 🕵️ Detect compatible local AI clients
- 📋 Inspect installed skills
- 👁️ Preview skill installation or removal (dry-run)
- 📦 Apply local skill installation or removal
- ⚙️ Write a local MCP config file after preview

It deliberately separates two concerns:

- **skill installation targets**
  clients with a stable skills directory that can use `install_skills`
- **MCP config targets**
  clients or IDEs with a stable documented MCP config format, even if they do not have a skills directory

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
npm run cli -- config-mcp --list-targets
npm run cli -- config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp
```

### 📦 From published package:

```bash
npx omni-skills mcp stdio --local
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp --write
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
| ⚪ OpenCode | `<workspace>/.opencode/skills` |

These 7 targets are the only first-class install destinations today.

### ⚙️ MCP Config Files

| Target | Format |
|:-------|:-------|
| `~/.claude/settings.json` | Claude Code settings JSON |
| `<workspace>/.claude/settings.json` | Claude project settings JSON |
| `~/.claude.json` | Legacy Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (OS-specific) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<workspace>/.cursor/mcp.json` | Cursor workspace JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini user JSON (`mcpServers`) |
| `<workspace>/.gemini/settings.json` | Gemini project JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravity JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro user JSON (`mcpServers`) |
| `<workspace>/.kiro/settings/mcp.json` | Kiro project JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<workspace>/.mcp.json` | JSON (`mcpServers`) |
| `<workspace>/opencode.json` | OpenCode workspace JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode user JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<workspace>/.github/mcp.json` | GitHub Copilot repository JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI user JSON (`mcp`) |
| `<workspace>/kilo.json` | Kilo CLI project JSON (`mcp`) |
| `<workspace>/.kilocode/mcp.json` | Kilo Code workspace JSON (`mcpServers`) |
| `<workspace>/.continue/mcpServers/omni-skills.yaml` | Continue workspace YAML (`mcpServers`) |
| `<workspace>/.junie/mcp/mcp.json` | Junie project JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie user JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`extensions`) |
| `<workspace>/.zed/settings.json` | Zed workspace JSON (`context_servers`) |
| `<workspace>/.vscode/mcp.json` | JSON (`servers`) |
| `~/.config/Code/User/mcp.json` | VS Code user JSON (`servers`) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders user JSON (`servers`) |
| `<workspace>/.devcontainer/devcontainer.json` | Nested Dev Container JSON (`customizations.vscode.mcp.servers`) |
| Client root `mcp.json` | JSON (per-client format) |

That gives the sidecar:

- **16 config-capable clients or IDEs**
- **33 first-class target paths**
- **19 format profiles**

Current first-class config coverage spans:

- Claude Code and Claude Desktop
- Cursor
- VS Code and Dev Containers
- Gemini CLI
- Antigravity
- Kiro
- Codex CLI
- Continue
- Junie
- Windsurf
- Goose
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilo Code
- Zed

Manual or snippet-only candidates are still intentionally outside the first-class writer set until their public config contracts are stable enough.

### 🧭 Expansion Policy

Omni Skills now treats client support as a three-level model:

1. **install-capable**
   A stable skills directory exists, so the CLI and sidecar can install skills directly.
2. **config-capable**
   A stable, documented MCP config format exists, so `config-mcp` can preview and write a first-class file.
3. **manual or snippet-only**
   The product clearly supports MCP in some form, but the public docs do not justify a safe automatic writer yet.

This is why clients such as JetBrains AI Assistant remain manual/snippet-only, while Roo Code and Postman stay outside the first-class writer set until their safe automatic merge story is strong enough for this project.

---

## 🔒 Allowlist Model

The local sidecar only writes under an **explicit allowlist**.

### 🟢 Default allowlist:

- Known client roots under `$HOME`
- `~/.codeium` for Windsurf user config
- `~/.copilot` for GitHub Copilot CLI
- `~/.cline` for Cline CLI
- `~/.config/goose` for Goose config
- `~/.config/kilo` and `~/.config/opencode` for Kilo/OpenCode CLI config
- `$CODEX_HOME` (or `~/.codex` if unset)
- Current workspace root
- `<workspace>/.agents`
- `<workspace>/.github`
- `<workspace>/.kilocode`
- `<workspace>/.opencode`
- `<workspace>/.zed`
- `<workspace>/.continue`
- `<workspace>/.vscode`

### ➕ Extend the allowlist:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

---

## ⚙️ Config Writing Examples

### 🔵 Claude Code / Project Settings

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

### 🔵 Cursor / Workspace JSON

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 🟡 Gemini CLI / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "headers": {
        "Authorization": "Bearer example"
      }
    }
  },
  "mcp": {
    "allowed": ["omni-skills"]
  }
}
```

### 🟢 Kiro / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "disabledTools": ["install_skills"],
      "autoApprove": ["search_skills", "get_skill"]
    }
  }
}
```

### 🟣 Antigravity

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚪ OpenCode

```json
{
  "mcp": {
    "omni-skills": {
      "type": "local",
      "command": ["/path/to/node", "/path/to/packages/server-mcp/src/server.js"],
      "environment": {
        "OMNI_SKILLS_MCP_MODE": "local"
      },
      "enabled": true
    }
  }
}
```

### 🟢 Cline

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "streamable-http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚫ GitHub Copilot CLI

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "tools": ["*"]
    }
  }
}
```

### 🔴 Kilo Code

```json
{
  "mcp": {
    "omni-skills": {
      "type": "remote",
      "url": "http://127.0.0.1:3334/mcp",
      "enabled": true
    }
  }
}
```

### 🟢 Continue

```yaml
name: 'Omni Skills'
version: '0.1.2'
schema: 'v1'
mcpServers:
  - name: 'omni-skills'
    transport:
      type: 'streamable-http'
      url: 'http://127.0.0.1:3334/mcp'
```

### 🧭 CLI Contract

The sidecar-backed CLI wrapper keeps MCP config generation accessible without direct JSON-RPC calls:

```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Default behavior is preview-only. `--write` applies the config to the resolved target path under the allowlist.

### 🌊 Windsurf

```json
{
  "mcpServers": {
    "omni-skills": {
      "serverUrl": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚡ Zed

```json
{
  "context_servers": {
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

### 📦 Dev Container

```json
{
  "customizations": {
    "vscode": {
      "mcp": {
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

### 🔵 Claude allow/deny lists

The `configure_client_mcp` tool can also write Claude-specific settings when you pass:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `enable_all_project_mcp_servers`

### 💜 VS Code sandboxing

For VS Code and Dev Container targets, `configure_client_mcp` can also write:

- `sandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

This maps to the current VS Code guidance for sandboxing local stdio MCP servers.

### 🧰 Cross-Client Entry Options

`configure_client_mcp` now supports richer entry metadata across supported profiles:

- `headers`
- `env`
- `env_file`
- `cwd`
- `timeout_ms`
- `description`
- `include_tools`
- `exclude_tools`
- `disabled`
- `trust`

Profile-specific options:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gemini: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS Code and Dev Containers: `dev_watch`, `dev_debug_type`

### 📋 Generated Recipes

`configure_client_mcp` returns `recipes` alongside the preview or applied config.

These recipes are client-aware guidance blocks, for example:

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp add ...`
- manual file-edit recipes for Cursor, VS Code, Kiro, and Claude Desktop

The overall strategy is now intentionally conservative:

- reuse a small set of canonical config families where possible
- keep bespoke writers only when official docs require a distinct shape
- avoid inventing automatic writers for undocumented targets

---

## 🔐 Hosted HTTP Hardening

The HTTP transports support the same env-driven controls as the catalog API:

| Variable | Purpose |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bearer token auth |
| `OMNI_SKILLS_HTTP_API_KEYS` | Comma-separated API keys |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Admin-only runtime introspection |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max requests per window |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Rate limit window in ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Enable audit logging |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Write audit log to a file |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Restrict browser origins |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Restrict allowed source IPs |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Return `503` for non-admin, non-health routes |

> 🟢 `/healthz` remains open. `/mcp`, `/sse`, and `/messages` require auth when enabled. `/admin/runtime` requires the admin token when configured.

---

## 🌍 Official Docs That Shape Support Decisions

The current writer set and manual-only boundaries were checked against official product docs, including:

- Anthropic Claude Code MCP
- OpenAI Codex CLI and OpenAI Docs MCP
- Cursor MCP docs
- Continue MCP docs
- Kiro MCP docs
- OpenCode MCP docs
- Cline MCP docs
- Kilo Code MCP docs
- GitHub Copilot CLI docs
- Zed MCP docs
- VS Code MCP docs
- JetBrains AI Assistant MCP docs

Those docs are why some clients receive first-class automatic writers while others remain snippet-only for now.
