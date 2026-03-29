# 🔌 Local MCP Sidecar (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Extensie opțională în mod local pentru `@omni-skills/server-mcp` care adaugă instrumente compatibile cu sistemul de fișiere pentru detectarea clienților, managementul abilităților și generarea configurației MCP.**---

## 📊 Status

| Caracteristica | Stat |
|:--------|:------|
| ✅ Instrumente de catalog numai pentru citire | Implementat |
| ✅ Instrumente locale compatibile cu sistemul de fișiere | Implementat |
| ✅ 3 transporturi (stdio/stream/sse) | Implementat |
| ✅ Scrieri permise | Implementat |
| ✅ Previzualizare-înainte de scriere implicite | Implementat |
| ✅ Scrierea config MCP conștient de client | Implementat |
| ✅ Autentificare HTTP + limitare a ratei | Implementat |
| ✅ Semnături de timp de eliberare și sume de control | Implementat pentru arhivele generate și evidențiat de API/MCP |
| 🟡 Aplicarea locală a semnăturii de scriere a timpului | Neaplicat încă; modul local previzualizează și scrie din checkout local de încredere |
| 🟢 Acoperirea curentă a clienților | 7 clienți capabili de instalare, 16 clienți capabili de configurare, 33 ținte de configurare, 19 profiluri de configurare |---

## 🎯 Purpose

Modul local adaugă**instrumente compatibile cu sistemul de fișiere**peste suprafața de catalog MCP existentă numai în citire. Folosiți-l atunci când un agent trebuie să:

- 🕵️ Detectați clienți AI locali compatibili
- 📋 Inspectați abilitățile instalate
- 👁️ Previzualizați instalarea sau îndepărtarea abilităților (funcționare uscată)
- 📦 Aplicați instalarea sau eliminarea abilităților locale
- ⚙️ Scrieți un fișier de configurare MCP local după previzualizare

Separă în mod deliberat două preocupări:

-**ținte de instalare a competențelor**
  clienți cu un director de competențe stabil care poate folosi `install_skills`
-**ținte de configurare MCP**
  clienți sau IDE-uri cu un format de configurare MCP documentat stabil, chiar dacă nu au un director de competențe---

## 🔌 Transports

| Transport | Protocol | Caz de utilizare |
|:----------|:---------|:----------|
| `stdio` | Teava | Integrarea directă a clientului |
| `stream` | HTTP transmisibil în flux | Clienti HTTP moderni |
| `sse` | Evenimente trimise de server | Clienți vechi |---

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

> Toate comenzile setează automat `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Când modul local este activat, aceste instrumente suplimentare devin disponibile:

| Instrument | Descriere | Implicit |
|:-----|:-------------|:---------|
| 🕵️ `detecta_clienti` | Scanați clienții AI și căile lor de abilități/configurare | — |
| 📋 `list_installed_skills` | Inspectați abilitățile instalate pentru un anumit client | — |
| 📦 `install_skills` | Instalați competențe în directorul de competențe al unui client | 🔍 rulare uscată |
| 🗑️ `remove_skills` | Eliminați abilitățile instalate de la un client | 🔍 rulare uscată |
| ⚙️ `configure_client_mcp` | Scrieți configurația MCP pentru un anumit client | 🔍 rulare uscată |

> ⚠️ `install_skills`, `remove_skills` și `configure_client_mcp` sunt implicit**dry-run**când `dry_run` este omis.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Client | Calea |
|:-------|:-----|
| 🔵 Cod Claude | `~/.claude/skills` |
| 🔵 Cursor | `~/.cursor/skills` |
| 🟡 Gemeni CLI | `~/.gemeni/skills` |
| 🟣 Antigravitație | `~/.gemeni/antigravitație/deprinderi` |
| 🟢 Kiro | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` sau `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<workspace>/.opencode/skills` |

Aceste 7 obiective sunt singurele destinații de instalare de primă clasă astăzi.### ⚙️ MCP Config Files

| Țintă | Format |
|:-------|:-------|
| `~/.claude/settings.json` | Claude Setări cod JSON |
| `<workspace>/.claude/settings.json` | Setările proiectului Claude JSON |
| `~/.claude.json` | Moștenirea Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (specific OS) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<spațiul de lucru>/.cursor/mcp.json` | Cursor spațiu de lucru JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Utilizatorul Gemini JSON (`mcpServers`) |
| `<workspace>/.gemini/settings.json` | Proiectul Gemini JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravity JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Utilizatorul Kiro JSON (`mcpServers`) |
| `<workspace>/.kiro/settings/mcp.json` | Proiectul Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<spațiul de lucru>/.mcp.json` | JSON (`mcpServers`) |
| `<workspace>/opencode.json` | Spațiul de lucru OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | Utilizatorul OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<spațiul de lucru>/.github/mcp.json` | Depozitul GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI utilizator JSON (`mcp`) |
| `<workspace>/kilo.json` | Proiectul Kilo CLI JSON (`mcp`) |
| `<workspace>/.kilocode/mcp.json` | Spațiul de lucru Kilo Code JSON (`mcpServers`) |
| `<workspace>/.continue/mcpServers/omni-skills.yaml` | Continuați spațiul de lucru YAML (`mcpServers`) |
| `<workspace>/.junie/mcp/mcp.json` | Proiectul Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Utilizatorul Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`extensii`) |
| `<workspace>/.zed/settings.json` | Zed spațiu de lucru JSON (`context_servers`) |
| `<spațiul de lucru>/.vscode/mcp.json` | JSON (`servere`) |
| `~/.config/Code/User/mcp.json` | Utilizatorul VS Code JSON (`servere`) |
| `~/.config/Code - Insiders/User/mcp.json` | Utilizatorul VS Code Insiders JSON (`servere`) |
| `<workspace>/.devcontainer/devcontainer.json` | Container de dezvoltare imbricat JSON (`customizations.vscode.mcp.servers`) |
| Rădăcină client `mcp.json` | JSON (format per client) |

Asta dă sidecar:

-**16 clienți sau IDE capabili de configurare**
-**33 de căi țintă de primă clasă**
-**19 profiluri de format**

Acoperirea actuală a configurației de primă clasă se întinde:

- Claude Code și Claude Desktop
- Cursor
- VS Code și Dev Containers
- Gemeni CLI
- Antigravitație
- Kiro
- Codex CLI
- Continuă
- Junie
- Windsurf
- Gâscă
- OpenCode
- Cline
- CLI GitHub Copilot
- Cod Kilo
- Zed

Candidații manuali sau doar pentru fragmente sunt încă în mod intenționat în afara setului de scriitor de primă clasă până când contractele lor de configurare publică sunt suficient de stabile.### 🧭 Expansion Policy

Omni Skills tratează acum asistența pentru clienți ca pe un model pe trei niveluri:

1.**capabil de instalare**
   Există un director stabil de competențe, astfel încât CLI și sidecar pot instala competențe direct.
2.**config-capable**
   Există un format de configurare MCP stabil, documentat, astfel încât `config-mcp` poate previzualiza și scrie un fișier de primă clasă.
3.**manual sau numai fragment**
   Produsul acceptă în mod clar MCP într-o anumită formă, dar documentele publice nu justifică încă un writer automat sigur.

Acesta este motivul pentru care clienții precum JetBrains AI Assistant rămân doar manual/fragment, în timp ce Roo Code și Postman rămân în afara setului de scriitor de primă clasă până când povestea lor sigură de îmbinare automată este suficient de puternică pentru acest proiect.---

## 🔒 Allowlist Model

Vehiculul secundar local scrie doar sub o**listă de permise explicită**.### 🟢 Default allowlist:

- Rădăcini client cunoscute sub `$HOME`
- `~/.codeium` pentru configurația utilizatorului Windsurf
- `~/.copilot` pentru GitHub Copilot CLI
- `~/.cline` pentru CLI CLI
- `~/.config/goose` pentru Goose config
- `~/.config/kilo` și `~/.config/opencode` pentru configurația CLI Kilo/OpenCode
- `$CODEX_HOME` (sau `~/.codex` dacă este nesetat)
- Rădăcina actuală a spațiului de lucru
- `<workspace>/.agents`
- `<spațiul de lucru>/.github`
- `<spațiul de lucru>/.kilocode`
- `<spațiul de lucru>/.opencode`
- `<spațiul de lucru>/.zed`
- `<spațiul de lucru>/.continue`
- `<spațiul de lucru>/.vscode`### ➕ Extend the allowlist:

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

Wrapper-ul CLI susținut de sidecar menține generarea configurației MCP accesibilă fără apeluri JSON-RPC directe:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Comportamentul implicit este doar previzualizare. `--write` aplică configurația căii țintă rezolvată din lista permisă.### 🌊 Windsurf

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

Instrumentul `configure_client_mcp` poate scrie, de asemenea, setări specifice lui Claude atunci când treceți:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `activați_all_project_mcp_servers`### 💜 VS Code sandboxing

Pentru ținte VS Code și Dev Container, `configure_client_mcp` poate scrie și:

- `sandbox Enabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Aceasta se corelează cu ghidul VS Code actual pentru serverele MCP stdio locale de sandbox.### 🧰 Cross-Client Entry Options

`configure_client_mcp` acceptă acum metadate de intrare mai bogate în profilurile acceptate:

- `anteturi`
- `env`
- `env_file`
- `cwd`
- `timeout_ms`
- `descriere`
- `include_tools`
- `exclude_instrumente`
- `dezactivat`
- `încredere`

Opțiuni specifice profilului:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gemeni: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS Code și Dev Containers: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` returnează `rețete` împreună cu previzualizarea sau configurația aplicată.

Aceste rețete sunt blocuri de ghidare conștiente de client, de exemplu:

- `claude mcp add ... --scope user|proiect`
- `gemini mcp add ... --scope user|project`
- `codex mcp add ...`
- rețete de editare manuală a fișierelor pentru Cursor, VS Code, Kiro și Claude Desktop

Strategia generală este acum în mod intenționat conservatoare:

- reutilizați un set mic de familii de configurare canonice acolo unde este posibil
- păstrați scriitori la comandă numai atunci când documentele oficiale necesită o formă distinctă
- evitați inventarea de scriitoare automate pentru ținte nedocumentate---

## 🔐 Hosted HTTP Hardening

Transporturile HTTP acceptă aceleași controale bazate pe env ca și API-ul de catalog:

| Variabila | Scop |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Autentificare jeton purtător |
| `OMNI_SKILLS_HTTP_API_KEYS` | Chei API separate prin virgulă |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspecție doar pentru administrare |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max solicitări pe fereastră |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Fereastra de limitare a ratei în ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Activați înregistrarea de audit |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Scrieți jurnalul de audit într-un fișier |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Restricționați originile browserului |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Restricționați IP-urile sursă permise |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Returnați `503` pentru rute non-admin, non-sanătate |

> 🟢 `/healthz` rămâne deschis. `/mcp`, `/sse` și `/messages` necesită autentificare atunci când sunt activate. `/admin/runtime` necesită jetonul de administrator când este configurat.---

## 🌍 Official Docs That Shape Support Decisions

Setul actual de scriitor și limitele numai pentru manual au fost verificate în raport cu documentele oficiale ale produsului, inclusiv:

- Codul antropic Claude MCP
- OpenAI Codex CLI și OpenAI Docs MCP
- Documente MCP cursor
- Continuați documentele MCP
- Documente Kiro MCP
- Documente OpenCode MCP
- Documente Cline MCP
- Kilo Code MCP documente
- Documente GitHub Copilot CLI
- Documente Zed MCP
- Documente VS Code MCP
- Documente MCP JetBrains AI Assistant

Aceste documente sunt motivul pentru care unii clienți primesc scriitori automati de primă clasă, în timp ce alții rămân doar fragmente deocamdată.