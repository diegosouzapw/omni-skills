# 🔌 Local MCP Sidecar (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Valfritt lokalt lägestillägg för `@omni-skills/server-mcp` som lägger till filsystemmedvetna verktyg för klientdetektering, färdighetshantering och MCP-konfigurationsgenerering.**---

## 📊 Status

| Funktion | Stat |
|:--------|:------|
| ✅ Läsbara katalogverktyg | Implementerad |
| ✅ Filsystemmedvetna lokala verktyg | Implementerad |
| ✅ 3 transporter (stdio/stream/sse) | Implementerad |
| ✅ Tillåtna skriver | Implementerad |
| ✅ Förhandsgranska-före-skriv-standardinställningar | Implementerad |
| ✅ Klientmedveten MCP-konfigurationsskrivning | Implementerad |
| ✅ HTTP-auth + hastighetsbegränsning | Implementerad |
| ✅ Utgivningstidssignaturer och kontrollsummor | Implementerad för genererade arkiv och upplagd av API/MCP |
| 🟡 Lokal skrivtidssignaturtillämpning | Inte verkställt ännu; lokalt läge förhandsgranskar och skriver från den betrodda lokala kassan |
| 🟢 Nuvarande kundtäckning | 7 installationskompatibla klienter, 16 konfigurationskompatibla klienter, 33 konfigurationsmål, 19 konfigurationsprofiler |---

## 🎯 Purpose

Lokalt läge lägger till**filsystemmedvetna verktyg**ovanpå den befintliga skrivskyddade MCP-katalogytan. Använd den när en agent behöver:

- 🕵️ Upptäck kompatibla lokala AI-klienter
- 📋 Inspektera installerade färdigheter
- 👁️ Förhandsgranska installation eller borttagning av färdigheter (torrkörning)
- 📦 Tillämpa lokal kompetensinstallation eller borttagning
- ⚙️ Skriv en lokal MCP-konfigurationsfil efter förhandsgranskning

Det skiljer medvetet två frågor åt:

-**mål för skicklighetsinstallation**
  klienter med en stabil kompetenskatalog som kan använda `install_skills`
-**MCP-konfigurationsmål**
  klienter eller IDE:er med ett stabilt dokumenterat MCP-konfigurationsformat, även om de inte har en kompetenskatalog---

## 🔌 Transports

| Transport | Protokoll | Användningsfall |
|:----------|:--------|:---------|
| `stdio` | Rör | Direkt klientintegration |
| `ström` | Strömbar HTTP | Moderna HTTP-klienter |
| `sse` | Serversända händelser | Äldre kunder |---

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

> Alla kommandon ställer in `OMNI_SKILLS_MCP_MODE=local` automatiskt.---

## 🛠️ Local Tools

När lokalt läge är aktiverat blir dessa extra verktyg tillgängliga:

| Verktyg | Beskrivning | Standard |
|:-----|:------------|:--------|
| 🕵️ `upptäck_klienter` | Sök efter AI-klienter och deras skicklighets-/konfigurationsvägar | — |
| 📋 `lista_installerade_färdigheter` | Inspektera installerade färdigheter för en specifik kund | — |
| 📦 `install_skills` | Installera färdigheter i en kunds kompetenskatalog | 🔍 torrkörning |
| 🗑️ `ta bort_färdigheter` | Ta bort installerade färdigheter från en klient | 🔍 torrkörning |
| ⚙️ `configure_client_mcp` | Skriv MCP-konfiguration för en specifik klient | 🔍 torrkörning |

> ⚠️ `install_skills`, `remove_skills` och `configure_client_mcp` är som standard**dry-run**när `dry_run` utelämnas.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Kund | Väg |
|:-------|:-----|
| 🔵 Claude Code | `~/.claude/skills` |
| 🔵 Markör | `~/.cursor/färdigheter` |
| Gemini CLI | `~/.gemini/skills` |
| Antigravitation | `~/.gemini/antigravity/skills` |
| Kiro | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` eller `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<arbetsyta>/.opencode/skills` |

Dessa 7 mål är de enda förstklassiga installationsdestinationerna idag.### ⚙️ MCP Config Files

| Mål | Format |
|:-------|:-------|
| `~/.claude/settings.json` | Claude Kodinställningar JSON |
| `<arbetsyta>/.claude/settings.json` | Claude projektinställningar JSON |
| `~/.claude.json` | Legacy Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (OS-specifik) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<arbetsyta>/.cursor/mcp.json` | Markör arbetsyta JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini-användare JSON (`mcpServers`) |
| `<arbetsyta>/.gemini/settings.json` | Gemini-projektet JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravity JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro-användare JSON (`mcpServers`) |
| `<arbetsyta>/.kiro/settings/mcp.json` | Kiro-projektet JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<arbetsyta>/.mcp.json` | JSON (`mcpServers`) |
| `<arbetsyta>/opencode.json` | OpenCode-arbetsyta JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode-användare JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<arbetsyta>/.github/mcp.json` | GitHub Copilot repository JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI-användare JSON (`mcp`) |
| `<arbetsyta>/kilo.json` | Kilo CLI-projekt JSON (`mcp`) |
| `<arbetsyta>/.kilocode/mcp.json` | Kilokod arbetsyta JSON (`mcpServers`) |
| `<arbetsyta>/.continue/mcpServers/omni-skills.yaml` | Fortsätt arbetsyta YAML (`mcpServers`) |
| `<arbetsyta>/.junie/mcp/mcp.json` | Junie-projektet JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Juni användare JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Gås YAML (`extensions`) |
| `<arbetsyta>/.zed/settings.json` | Zed-arbetsyta JSON (`context_servers`) |
| `<arbetsyta>/.vscode/mcp.json` | JSON (`servrar`) |
| `~/.config/Code/User/mcp.json` | VS-kodanvändare JSON (`servrar`) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders användare JSON (`servrar`) |
| `<arbetsyta>/.devcontainer/devcontainer.json` | Kapslad Dev Container JSON (`customizations.vscode.mcp.servers`) |
| Klientrot `mcp.json` | JSON (per-klient-format) |

Det ger sidovagnen:

-**16 konfigurationskompatibla klienter eller IDE:er**
-**33 förstklassiga målvägar**
-**19 formatprofiler**

Aktuella förstklassiga konfigurationstäckningar:

- Claude Code och Claude Desktop
- Markör
- VS Code och Dev Containers
- Gemini CLI
- Antigravitation
- Kiro
- Codex CLI
- Fortsätt
- Junie
- Vindsurfa
- Gås
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilokod
- Zed

Manuella eller bara utdragskandidater är fortfarande avsiktligt utanför den förstklassiga skribentuppsättningen tills deras offentliga konfigurationskontrakt är tillräckligt stabila.### 🧭 Expansion Policy

Omni Skills behandlar nu kundsupport som en modell på tre nivåer:

1.**installerbar**
   Det finns en stabil kompetenskatalog, så CLI och sidovagn kan installera färdigheter direkt.
2.**kompatibel med konfiguration**
   Det finns ett stabilt, dokumenterat MCP-konfigurationsformat, så `config-mcp` kan förhandsgranska och skriva en förstklassig fil.
3.**manuellt eller endast utdrag**
   Produkten stöder helt klart MCP i någon form, men de offentliga dokumenten motiverar inte en säker automatisk skribent ännu.

Det är därför kunder som JetBrains AI Assistant förblir manuella/snippet-bara, medan Roo Code och Postman stannar utanför den förstklassiga skribentuppsättningen tills deras säkra automatiska sammanslagningshistoria är tillräckligt stark för detta projekt.---

## 🔒 Allowlist Model

Den lokala sidovagnen skriver endast under en**explicit godkännandelista**.### 🟢 Default allowlist:

- Kända klientrötter under `$HOME`
- `~/.codeium` för Windsurf-användarkonfiguration
- `~/.copilot` för GitHub Copilot CLI
- `~/.cline` för Cline CLI
- `~/.config/goose` för Goose config
- `~/.config/kilo` och `~/.config/opencode` för Kilo/OpenCode CLI config
- `$CODEX_HOME` (eller `~/.codex` om inte inställt)
- Aktuell arbetsyta rot
- `<arbetsyta>/.agents`
- `<arbetsyta>/.github`
- `<arbetsyta>/.kilocode`
- `<arbetsyta>/.opencode`
- `<arbetsyta>/.zed`
- `<arbetsyta>/.fortsätt`
- `<arbetsyta>/.vscode`### ➕ Extend the allowlist:

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

Det sidovagnsstödda CLI-omslaget håller MCP-konfigurationsgenerering tillgänglig utan direkta JSON-RPC-anrop:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Standardbeteendet är endast förhandsgranskning. `--write` tillämpar konfigurationen på den lösta målsökvägen under godkännandelistan.### 🌊 Windsurf

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

Verktyget `configure_client_mcp` kan också skriva Claude-specifika inställningar när du passerar:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `aktivera_alla_projekt_mcp_servrar`### 💜 VS Code sandboxing

För VS Code och Dev Container-mål kan `configure_client_mcp` också skriva:

- `SandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Detta mappar till den aktuella VS-koden för sandboxning av lokala stdio MCP-servrar.### 🧰 Cross-Client Entry Options

`configure_client_mcp` stöder nu rikare ingångsmetadata över stödda profiler:

- "huvuden".
- `env`
- `env_file`
- `cwd`
- `timeout_ms`
- `beskrivning`
- `inkludera_verktyg`
- `exkludera_verktyg`
- "inaktiverad".
- `förtroende`

Profilspecifika alternativ:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Tvilling: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS Code och Dev Containers: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` returnerar `recept` tillsammans med förhandsgranskningen eller den tillämpade konfigurationen.

Dessa recept är klientmedvetna vägledningsblock, till exempel:

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp add ...`
- manuell filredigeringsrecept för Cursor, VS Code, Kiro och Claude Desktop

Den övergripande strategin är nu avsiktligt konservativ:

- Återanvänd en liten uppsättning kanoniska konfigurationsfamiljer där det är möjligt
- Behåll skräddarsydda skribenter endast när officiella dokument kräver en distinkt form
- undvik att uppfinna automatiska skribenter för odokumenterade mål---

## 🔐 Hosted HTTP Hardening

HTTP-transporterna stöder samma env-drivna kontroller som katalogens API:

| Variabel | Syfte |
|:--------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bearer token auth |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kommaseparerade API-nycklar |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspektion vid körning endast för administratör |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max förfrågningar per fönster |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Fönster för hastighetsgräns i ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Aktivera granskningsloggning |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Skriv granskningslogg till en fil |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Begränsa webbläsarens ursprung |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Begränsa tillåtna käll-IP:er |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Returnera "503" för icke-administratör, icke-hälsovägar |

> `/healthz` förblir öppen. `/mcp`, `/sse` och `/messages` kräver auth när de är aktiverade. `/admin/runtime` kräver admin-token när den är konfigurerad.---

## 🌍 Official Docs That Shape Support Decisions

De nuvarande gränserna för skrivaruppsättningen och endast manuella kontroller kontrollerades mot officiella produktdokument, inklusive:

- Antropisk Claude Code MCP
- OpenAI Codex CLI och OpenAI Docs MCP
- Markör MCP-dokument
- Fortsätt MCP-dokument
- Kiro MCP-dokument
- OpenCode MCP-dokument
- Cline MCP-dokument
- Kilokod MCP-dokument
- GitHub Copilot CLI-dokument
- Zed MCP-dokument
- VS Code MCP-dokument
- JetBrains AI Assistant MCP-dokument

Dessa dokument är anledningen till att vissa klienter får förstklassiga automatiska skribenter medan andra förblir bara utdrag för tillfället.