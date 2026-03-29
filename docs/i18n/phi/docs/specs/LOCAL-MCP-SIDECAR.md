# 🔌 Local MCP Sidecar (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Opsyonal na extension ng local-mode para sa `@omni-skills/server-mcp` na nagdaragdag ng mga tool sa filesystem-aware para sa pagtuklas ng kliyente, pamamahala ng kasanayan, at pagbuo ng MCP config.**---

## 📊 Status

| Tampok | Estado |
|:--------|:------|
| ✅ Read-only na mga tool sa catalog | Ipinatupad |
| ✅ Mga lokal na tool na may alam sa filesystem | Ipinatupad |
| ✅ 3 sasakyan (stdio/stream/sse) | Ipinatupad |
| ✅ Allowlisted writes | Ipinatupad |
| ✅ I-preview-before-write ang mga default | Ipinatupad |
| ✅ Pagsusulat ng MCP config na alam ng kliyente | Ipinatupad |
| ✅ HTTP auth + paglilimita sa rate | Ipinatupad |
| ✅ Mga lagda at checksum sa oras ng paglabas | Ipinatupad para sa mga nabuong archive at inilabas ng API/MCP |
| 🟡 Lokal na pagpapatupad ng lagda sa pagsulat ng oras | Hindi pa naipatupad; local mode preview at writes mula sa pinagkakatiwalaang local checkout |
| 🟢 Kasalukuyang saklaw ng kliyente | 7 mga kliyenteng may kakayahang mag-install, 16 na kliyenteng may kakayahang mag-config, 33 mga target na config, 19 mga profile ng config |---

## 🎯 Purpose

Ang lokal na mode ay nagdaragdag ng**mga tool na may kamalayan sa filesystem**sa ibabaw ng umiiral nang read-only na MCP catalog surface. Gamitin ito kapag kailangan ng isang ahente na:

- 🕵️ Tuklasin ang mga katugmang lokal na kliyente ng AI
- 📋 Suriin ang mga naka-install na kasanayan
- 👁️ I-preview ang pag-install o pagtanggal ng kasanayan (dry-run)
- 📦 Ilapat ang pag-install o pagtanggal ng lokal na kasanayan
- ⚙️ Sumulat ng lokal na MCP config file pagkatapos ng preview

Sinadya nitong ihiwalay ang dalawang alalahanin:

-**mga target sa pag-install ng kasanayan**
  mga kliyente na may matatag na direktoryo ng mga kasanayan na maaaring gumamit ng `install_skills`
-**Mga target ng MCP config**
  mga kliyente o IDE na may matatag na nakadokumentong MCP config format, kahit na wala silang direktoryo ng mga kasanayan---

## 🔌 Transports

| Transportasyon | Protocol | Use Case |
|:----------|:---------|:---------|
| `stdio` | Pipe | Direktang pagsasama ng kliyente |
| `stream` | Streamable HTTP | Mga modernong HTTP client |
| `sse` | Mga Kaganapang Ipinadala ng Server | Mga legacy na kliyente |---

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

> Lahat ng command ay awtomatikong nagtakda ng `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Kapag pinagana ang lokal na mode, magiging available ang mga karagdagang tool na ito:

| Tool | Paglalarawan | Default |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Mag-scan para sa mga kliyente ng AI at ang kanilang mga landas ng kasanayan/config | — |
| 📋 `list_installed_skills` | Siyasatin ang mga naka-install na kasanayan para sa isang partikular na kliyente | — |
| 📦 `install_skills` | Mag-install ng mga kasanayan sa direktoryo ng mga kasanayan ng kliyente | 🔍 dry-run |
| 🗑️ `remove_skills` | Alisin ang mga naka-install na kasanayan mula sa isang kliyente | 🔍 dry-run |
| ⚙️ `configure_client_mcp` | Sumulat ng MCP config para sa isang partikular na kliyente | 🔍 dry-run |

> ⚠️ `install_skills`, `remove_skills`, at `configure_client_mcp` default sa**dry-run**kapag ang `dry_run` ay tinanggal.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Kliyente | Landas |
|:-------|:-----|
| 🔵 Claude Code | `~/.claude/skills` |
| 🔵 Cursor | `~/.cursor/skills` |
| 🟡 Gemini CLI | `~/.gemini/skills` |
| 🟣 Antigravity | `~/.gemini/antigravity/skills` |
| 🟢 Kiro | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` o `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<workspace>/.opencode/skills` |

Ang 7 target na ito ay ang tanging first-class na mga destinasyon sa pag-install ngayon.### ⚙️ MCP Config Files

| Target | Format |
|:-------|:-------|
| `~/.claude/settings.json` | Mga setting ng Claude Code JSON |
| `<workspace>/.claude/settings.json` | Mga setting ng proyekto ni Claude JSON |
| `~/.claude.json` | Legacy Claude JSON (`mcpServers`) |
| `~/Library/Suporta sa Application/Claude/claude_desktop_config.json` | Claude Desktop JSON (OS-specific) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<workspace>/.cursor/mcp.json` | Cursor workspace JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini user na JSON (`mcpServers`) |
| `<workspace>/.gemini/settings.json` | Gemini project na JSON (`mcpServers`) |
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
| `<workspace>/.continue/mcpServers/omni-skills.yaml` | Ipagpatuloy ang workspace YAML (`mcpServers`) |
| `<workspace>/.junie/mcp/mcp.json` | Junie project JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie user JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`mga extension`) |
| `<workspace>/.zed/settings.json` | Zed workspace JSON (`context_servers`) |
| `<workspace>/.vscode/mcp.json` | JSON (`mga server`) |
| `~/.config/Code/User/mcp.json` | User ng VS Code na JSON (`mga server`) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders user JSON (`mga server`) |
| `<workspace>/.devcontainer/devcontainer.json` | Nested Dev Container JSON (`customizations.vscode.mcp.servers`) |
| Root ng kliyente `mcp.json` | JSON (per-client format) |

Iyon ay nagbibigay sa sidecar:

-**16 na kliyente o IDE na may kakayahang mag-config**
-**33 first-class na target na landas**
-**19 na format na profile**

Ang kasalukuyang saklaw ng first-class na config:

- Claude Code at Claude Desktop
- Cursor
- VS Code at Dev Container
- Gemini CLI
- Antigravity
- Kiro
- Codex CLI
- Magpatuloy
- Junie
- Windsurf
- Gansa
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilo Code
- Zed

Ang mga manwal o snippet-only na kandidato ay sinasadya pa rin sa labas ng first-class na itinakda ng manunulat hanggang ang kanilang mga kontrata sa pampublikong config ay sapat na matatag.### 🧭 Expansion Policy

Itinuturing na ngayon ng Omni Skills ang suporta sa kliyente bilang tatlong antas na modelo:

1.**may kakayahang mag-install**
   Mayroong matatag na direktoryo ng mga kasanayan, kaya maaaring direktang mag-install ng mga kasanayan ang CLI at sidecar.
2.**config-capable**
   May isang matatag at nakadokumentong MCP config format, kaya ang `config-mcp` ay maaaring mag-preview at magsulat ng isang first-class na file.
3.**manual o snippet-only**
   Malinaw na sinusuportahan ng produkto ang MCP sa ilang anyo, ngunit hindi pa binibigyang-katwiran ng mga pampublikong doc ang isang ligtas na awtomatikong manunulat.

Ito ang dahilan kung bakit nananatiling manu-mano/snippet-only ang mga kliyente gaya ng JetBrains AI Assistant, habang ang Roo Code at Postman ay nananatili sa labas ng set ng first-class na manunulat hanggang ang kanilang ligtas na awtomatikong pagsasanib na kuwento ay sapat na malakas para sa proyektong ito.---

## 🔒 Allowlist Model

Ang lokal na sidecar ay nagsusulat lamang sa ilalim ng isang**tahasang allowlist**.### 🟢 Default allowlist:

- Mga kilalang pinagmulan ng kliyente sa ilalim ng `$HOME`
- `~/.codeium` para sa Windsurf user config
- `~/.copilot` para sa GitHub Copilot CLI
- `~/.cline` para sa Cline CLI
- `~/.config/goose` para sa config ng Goose
- `~/.config/kilo` at `~/.config/opencode` para sa Kilo/OpenCode CLI config
- `$CODEX_HOME` (o `~/.codex` kung hindi nakatakda)
- Kasalukuyang workspace root
- `<workspace>/.agents`
- `<workspace>/.github`
- `<workspace>/.kilocode`
- `<workspace>/.opencode`
- `<workspace>/.zed`
- `<workspace>/.tuloy`
- `<workspace>/.vscode`### ➕ Extend the allowlist:

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
version: '0.1.3'
schema: 'v1'
mcpServers:
  - name: 'omni-skills'
    transport:
      type: 'streamable-http'
      url: 'http://127.0.0.1:3334/mcp'
```

### 🧭 CLI Contract

Ang sidecar-backed CLI wrapper ay nagpapanatili ng MCP config generation na naa-access nang walang direktang JSON-RPC na tawag:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Ang default na gawi ay preview-only. Inilalapat ng `--write` ang config sa nalutas na target na path sa ilalim ng allowlist.### 🌊 Windsurf

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

Ang tool na `configure_client_mcp` ay maaari ding sumulat ng mga setting na tukoy sa Claude kapag pumasa ka:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `paganahin_lahat_proyekto_mcp_servers`### 💜 VS Code sandboxing

Para sa mga target ng VS Code at Dev Container, maaari ding isulat ng `configure_client_mcp` ang:

- `sandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Nagmapa ito sa kasalukuyang gabay ng VS Code para sa sandboxing ng mga lokal na stdio MCP server.### 🧰 Cross-Client Entry Options

Sinusuportahan na ngayon ng `configure_client_mcp` ang mas mayamang entry metadata sa mga sinusuportahang profile:

- `mga header`
- `env`
- `env_file`
- `cwd`
- `timeout_ms`
- `paglalarawan`
- `include_tools`
- `exclude_tools`
- `may kapansanan`
- `tiwala`

Mga opsyon na partikular sa profile:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gemini: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS Code at Dev Container: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

Ang `configure_client_mcp` ay nagbabalik ng `mga recipe` kasama ng preview o inilapat na config.

Ang mga recipe na ito ay mga bloke ng gabay na nalalaman ng kliyente, halimbawa:

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp add ...`
- manu-manong file-edit na mga recipe para sa Cursor, VS Code, Kiro, at Claude Desktop

Ang pangkalahatang diskarte ay sadyang konserbatibo na ngayon:

- muling gumamit ng maliit na hanay ng mga pamilya ng canonical config kung posible
- panatilihin lamang ang mga pasadyang manunulat kapag ang mga opisyal na dokumento ay nangangailangan ng natatanging hugis
- iwasang mag-imbento ng mga awtomatikong manunulat para sa mga hindi dokumentadong target---

## 🔐 Hosted HTTP Hardening

Sinusuportahan ng HTTP transports ang parehong env-driven na mga kontrol gaya ng catalog API:

| Variable | Layunin |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Pagpapatunay ng token ng maydala |
| `OMNI_SKILLS_HTTP_API_KEYS` | Mga key ng API na pinaghihiwalay ng kuwit |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Admin-only runtime introspection |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max na kahilingan sa bawat window |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Rate limit window sa ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Paganahin ang audit logging |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Sumulat ng audit log sa isang file |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Paghigpitan ang mga pinagmulan ng browser |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Paghigpitan ang mga pinapayagang source IP |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Ibalik ang `503` para sa hindi admin, hindi pangkalusugan na mga ruta |

> 🟢 `/healthz` ay nananatiling bukas. Ang `/mcp`, `/sse`, at `/messages` ay nangangailangan ng auth kapag pinagana. Ang `/admin/runtime` ay nangangailangan ng token ng admin kapag na-configure.---

## 🌍 Official Docs That Shape Support Decisions

Sinuri ang kasalukuyang hanay ng manunulat at mga hangganan na manu-mano lamang laban sa mga opisyal na doc ng produkto, kabilang ang:

- Anthropic Claude Code MCP
- OpenAI Codex CLI at OpenAI Docs MCP
- Cursor MCP docs
- Ipagpatuloy ang MCP docs
- Kiro MCP docs
- OpenCode MCP docs
- Cline MCP docs
- Kilo Code MCP docs
- GitHub Copilot CLI docs
- Zed MCP docs
- VS Code MCP docs
- Mga doc ng JetBrains AI Assistant MCP

Ang mga doc na iyon ang dahilan kung bakit nakakatanggap ang ilang kliyente ng mga first-class na awtomatikong manunulat habang ang iba ay nananatiling snippet-only sa ngayon.