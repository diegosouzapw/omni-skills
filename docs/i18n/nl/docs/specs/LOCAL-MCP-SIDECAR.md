# 🔌 Local MCP Sidecar (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Optionele extensie in de lokale modus voor `@omni-skills/server-mcp` die bestandssysteembewuste tools toevoegt voor clientdetectie, vaardigheidsbeheer en het genereren van MCP-configuraties.**---

## 📊 Status

| Kenmerk | Staat |
|:--------|:------|
| ✅ Alleen-lezen catalogustools | Geïmplementeerd |
| ✅ Bestandssysteembewuste lokale tools | Geïmplementeerd |
| ✅ 3 transporten (stdio/stream/sse) | Geïmplementeerd |
| ✅ Schrijven op de toelatingslijst | Geïmplementeerd |
| ✅ Standaardinstellingen bekijken vóór schrijven | Geïmplementeerd |
| ✅ Klantbewuste MCP-configuratie schrijven | Geïmplementeerd |
| ✅ HTTP-authenticatie + snelheidsbeperking | Geïmplementeerd |
| ✅ Handtekeningen en controlesommen voor releasetijd | Geïmplementeerd voor gegenereerde archieven en opgedoken door API/MCP |
| 🟡 Lokale handhaving van de handtekening voor schrijftijd | Nog niet afgedwongen; previews en schrijfbewerkingen in de lokale modus vanaf de vertrouwde lokale kassa |
| 🟢 Huidig ​​klantbereik | 7 clients die geschikt zijn voor installatie, 16 clients die geschikt zijn voor configuratie, 33 configuratiedoelen, 19 configuratieprofielen |---

## 🎯 Purpose

De lokale modus voegt**bestandssysteembewuste tools**toe bovenop het bestaande alleen-lezen MCP-catalogusoppervlak. Gebruik het wanneer een agent het volgende moet doen:

- 🕵️ Detecteer compatibele lokale AI-clients
- 📋 Inspecteer geïnstalleerde vaardigheden
- 👁️ Voorbeeld van installatie of verwijdering van vaardigheden (dry-run)
- 📦 Pas lokale installatie of verwijdering van vaardigheden toe
- ⚙️ Schrijf een lokaal MCP-configuratiebestand na preview

Het scheidt bewust twee zorgen:

-**doelstellingen voor installatie van vaardigheden**
  clients met een stabiele vaardighedenmap die `install_skills` kunnen gebruiken
-**MCP-configuratiedoelen**
  clients of IDE's met een stabiel gedocumenteerd MCP-configuratieformaat, zelfs als ze geen vaardighedenmap hebben---

## 🔌 Transports

| Vervoer | Protocol | Gebruiksscenario |
|:----------|:---------|:---------|
| `stdio` | Pijp | Directe klantintegratie |
| `stroom` | Streambare HTTP | Moderne HTTP-clients |
| `sse` | Door de server verzonden gebeurtenissen | Oude klanten |---

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

> Alle opdrachten worden `OMNI_SKILLS_MCP_MODE=local` automatisch ingesteld.---

## 🛠️ Local Tools

Wanneer de lokale modus is ingeschakeld, zijn deze extra tools beschikbaar:

| Gereedschap | Beschrijving | Standaard |
|:-----|:------------|:--------|
| 🕵️`detect_clients` | Scannen op AI-clients en hun vaardigheids-/configuratiepaden | — |
| 📋 `list_installed_skills` | Geïnstalleerde vaardigheden voor een specifieke klant inspecteren | — |
| 📦 `install_skills` | Vaardigheden installeren in de vaardighedenmap van een klant | 🔍drooglopen |
| 🗑️`remove_skills` | Geïnstalleerde vaardigheden van een client verwijderen | 🔍drooglopen |
| ⚙️ `configure_client_mcp` | Schrijf MCP-configuratie voor een specifieke client | 🔍drooglopen |

> ⚠️ `install_skills`, `remove_skills` en `configure_client_mcp` zijn standaard ingesteld op**dry-run**wanneer `dry_run` is weggelaten.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Klant | Pad |
|:-------|:-----|
| 🔵 Claude Code | `~/.claude/skills` |
| 🔵 Cursor | `~/.cursor/skills` |
| 🟡Gemini CLI | `~/.gemini/skills` |
| 🟣 Antizwaartekracht | `~/.gemini/antigravity/skills` |
| 🟢Kiro | `~/.kiro/skills` |
| 🔴Codex CLI | `~/.codex/skills` of `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<werkruimte>/.opencode/skills` |

Deze zeven doelen zijn momenteel de enige eersteklas installatiebestemmingen.### ⚙️ MCP Config Files

| Doel | Formaat |
|:-------|:-------|
| `~/.claude/settings.json` | Claude Code-instellingen JSON |
| `<werkruimte>/.claude/settings.json` | Claude-projectinstellingen JSON |
| `~/.claude.json` | Verouderde Claude JSON (`mcpServers`) |
| `~/Bibliotheek/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (OS-specifiek) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<werkruimte>/.cursor/mcp.json` | Cursorwerkruimte JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini-gebruiker JSON (`mcpServers`) |
| `<werkruimte>/.gemini/settings.json` | Gemini-project JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravity JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro-gebruiker JSON (`mcpServers`) |
| `<werkruimte>/.kiro/settings/mcp.json` | Kiro-project JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML(`[mcp_servers]`) |
| `<werkruimte>/.mcp.json` | JSON (`mcpServers`) |
| `<werkruimte>/opencode.json` | OpenCode-werkruimte JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode-gebruiker JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<werkruimte>/.github/mcp.json` | GitHub Copilot-repository JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI-gebruiker JSON (`mcp`) |
| `<werkruimte>/kilo.json` | Kilo CLI-project JSON (`mcp`) |
| `<werkruimte>/.kilocode/mcp.json` | Kilo Code-werkruimte JSON (`mcpServers`) |
| `<werkruimte>/.continue/mcpServers/omni-skills.yaml` | Ga door met werkruimte YAML (`mcpServers`) |
| `<werkruimte>/.junie/mcp/mcp.json` | Junie-project JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie-gebruiker JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`extensies`) |
| `<werkruimte>/.zed/settings.json` | Zed-werkruimte JSON (`context_servers`) |
| `<werkruimte>/.vscode/mcp.json` | JSON ("servers") |
| `~/.config/Code/User/mcp.json` | VS Code-gebruiker JSON (`servers`) |
| `~/.config/Code - Insiders/Gebruiker/mcp.json` | VS Code Insiders-gebruiker JSON (`servers`) |
| `<werkruimte>/.devcontainer/devcontainer.json` | Geneste ontwikkelcontainer JSON (`customizations.vscode.mcp.servers`) |
| Clientroot `mcp.json` | JSON (per-clientformaat) |

Dat geeft het zijspan:

-**16 config-compatibele clients of IDE's**
-**33 eersteklas doelpaden**
-**19 formaatprofielen**

Huidige eersteklas configuratiedekkingsbereiken:

- Claude Code en Claude Desktop
- Cursor
- VS Code- en Dev-containers
- Gemini CLI
- Antizwaartekracht
- Kiro
- Codex CLI
- Ga door
- Junie
- Windsurfen
- Gans
-OpenCode
- Klijn
- GitHub Copilot-CLI
- Kilocode
- Zed

Handmatige kandidaten of kandidaten met alleen fragmenten vallen nog steeds opzettelijk buiten de eersteklas schrijversset totdat hun openbare configuratiecontracten stabiel genoeg zijn.### 🧭 Expansion Policy

Omni Skills behandelt klantenondersteuning nu als een model met drie niveaus:

1.**geschikt voor installatie**
   Er bestaat een stabiele vaardighedenmap, zodat de CLI en zijspan vaardigheden direct kunnen installeren.
2.**configureerbaar**
   Er bestaat een stabiel, gedocumenteerd MCP-configuratieformaat, zodat `config-mcp` een eersteklas bestand kan bekijken en schrijven.
3.**handmatig of alleen fragment**
   Het product ondersteunt duidelijk MCP in een of andere vorm, maar de openbare documenten rechtvaardigen nog geen veilige automatische schrijver.

Dit is de reden waarom klanten zoals JetBrains AI Assistant handmatig/fragment-only blijven, terwijl Roo Code en Postman buiten de eersteklas schrijversset blijven totdat hun veilige automatische samenvoegverhaal sterk genoeg is voor dit project.---

## 🔒 Allowlist Model

Het lokale zijspan schrijft alleen onder een**expliciete toelatingslijst**.### 🟢 Default allowlist:

- Bekende clientwortels onder `$HOME`
- `~/.codeium` voor Windsurf-gebruikersconfiguratie
- `~/.copilot` voor GitHub Copilot CLI
- `~/.cline` voor Cline CLI
- `~/.config/goose` voor Goose-configuratie
- `~/.config/kilo` en `~/.config/opencode` voor Kilo/OpenCode CLI-configuratie
- `$CODEX_HOME` (of `~/.codex` indien niet ingesteld)
- Huidige werkruimtewortel
- `<werkruimte>/.agents`
- `<werkruimte>/.github`
- `<werkruimte>/.kilocode`
- `<werkruimte>/.opencode`
- `<werkruimte>/.zed`
- `<werkruimte>/.doorgaan`
- `<werkruimte>/.vscode`### ➕ Extend the allowlist:

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

De door de zijspan ondersteunde CLI-wrapper zorgt ervoor dat het genereren van MCP-configuraties toegankelijk is zonder directe JSON-RPC-aanroepen:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Het standaardgedrag is alleen een voorbeeld. `--write` past de configuratie toe op het opgeloste doelpad onder de toelatingslijst.### 🌊 Windsurf

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

De `configure_client_mcp` tool kan ook Claude-specifieke instellingen schrijven als je slaagt:

- `toegestane_mcp_servers`
- `geweigerde_mcp_servers`
- `permissies_deny`
- `schakel_alle_project_mcp_servers in`### 💜 VS Code sandboxing

Voor VS Code- en Dev Container-doelen kan `configure_client_mcp` ook schrijven:

- `sandboxEnabled`
- `sandbox.bestandssysteem.allowWrite`
- `sandbox.network.allowHosts`
- `ontwikkelaar.watch`
- `dev.debug.type`

Dit komt overeen met de huidige VS Code-richtlijnen voor het sandboxen van lokale stdio MCP-servers.### 🧰 Cross-Client Entry Options

`configure_client_mcp` ondersteunt nu rijkere invoermetagegevens over ondersteunde profielen:

- `koppen`
- `env`
- `env_bestand`
- `cwd`
- `time-out_ms`
- `beschrijving`
- `include_tools`
- `exclude_tools`
- `uitgeschakeld`
- `vertrouwen`

Profielspecifieke opties:

- Claude: `allowed_mcp_servers`, `geweigerde_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Tweelingen: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS Code- en Dev-containers: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` retourneert `recepten` naast de preview of toegepaste configuratie.

Deze recepten zijn klantbewuste begeleidingsblokken, bijvoorbeeld:

- `claude mcp toevoegen ... --scope gebruiker|project`
- `gemini mcp toevoegen ... --scope gebruiker|project`
- `codex mcp toevoegen ...`
- handmatige recepten voor bestandsbewerking voor Cursor, VS Code, Kiro en Claude Desktop

De algemene strategie is nu opzettelijk conservatief:

- waar mogelijk een kleine set canonieke configuratiefamilies hergebruiken
- bewaar alleen op maat gemaakte schrijvers als officiële documenten een aparte vorm vereisen
- vermijd het uitvinden van automatische schrijvers voor ongedocumenteerde doelen---

## 🔐 Hosted HTTP Hardening

De HTTP-transporten ondersteunen dezelfde env-gestuurde besturingselementen als de catalogus-API:

| Variabel | Doel |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bearer-token-authenticatie |
| `OMNI_SKILLS_HTTP_API_KEYS` | Door komma's gescheiden API-sleutels |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Alleen voor beheerders runtime-introspectie |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max. aantal verzoeken per venster |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Tarieflimietvenster in ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Controleregistratie inschakelen |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Auditlogboek naar een bestand schrijven |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Browseroorsprong beperken |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Beperk toegestane bron-IP's |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Retourneert `503` voor niet-admin-, niet-gezondheidsroutes |

> 🟢 `/healthz` blijft open. Voor `/mcp`, `/sse` en `/messages` is verificatie vereist als deze zijn ingeschakeld. Voor `/admin/runtime` is het admin-token vereist indien geconfigureerd.---

## 🌍 Official Docs That Shape Support Decisions

De huidige schrijverset en alleen-handmatige grenzen zijn gecontroleerd aan de hand van officiële productdocumenten, waaronder:

- Antropische Claude Code MCP
- OpenAI Codex CLI en OpenAI Docs MCP
- Cursor MCP-documenten
- Ga door met MCP-documenten
- Kiro MCP-documenten
- OpenCode MCP-documenten
- Cline MCP-documenten
- Kilo Code MCP-documenten
- GitHub Copilot CLI-documenten
- Zed MCP-documenten
- VS Code MCP-documenten
- JetBrains AI Assistant MCP-documenten

Deze documenten zijn de reden waarom sommige klanten eersteklas automatische schrijvers ontvangen, terwijl andere voorlopig alleen fragmenten blijven gebruiken.