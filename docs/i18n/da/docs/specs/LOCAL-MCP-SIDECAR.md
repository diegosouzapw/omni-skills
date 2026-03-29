# 🔌 Local MCP Sidecar (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Valgfri lokal tilstandsudvidelse til `@omni-skills/server-mcp`, der tilføjer filsystembevidste værktøjer til klientdetektering, færdighedshåndtering og MCP-konfigurationsgenerering.**---

## 📊 Status

| Funktion | Stat |
|:--------|:------|
| ✅ Skrivebeskyttede katalogværktøjer | Implementeret |
| ✅ Filsystem-bevidste lokale værktøjer | Implementeret |
| ✅ 3 transporter (stdio/stream/sse) | Implementeret |
| ✅ Tilladte skriver | Implementeret |
| ✅ Forhåndsvisning-før-skriv-standardindstillinger | Implementeret |
| ✅ Klientbevidst MCP-konfigurationsskrivning | Implementeret |
| ✅ HTTP-godkendelse + hastighedsbegrænsning | Implementeret |
| ✅ Udgivelsestidssignaturer og kontrolsummer | Implementeret til genererede arkiver og vist af API/MCP |
| 🟡 Lokal håndhævelse af skrivetidssignatur | Ikke håndhævet endnu; lokal tilstand viser og skriver fra den betroede lokale kasse |
| 🟢 Nuværende kundedækning | 7 installationskompatible klienter, 16 konfigurationskompatible klienter, 33 konfigurationsmål, 19 konfigurationsprofiler |---

## 🎯 Purpose

Lokal tilstand tilføjer**filsystem-bevidste værktøjer**oven på den eksisterende skrivebeskyttede MCP-katalogoverflade. Brug det, når en agent skal:

- 🕵️ Opdag kompatible lokale AI-klienter
- 📋 Inspicer installerede færdigheder
- 👁️ Forhåndsvisning af færdighedsinstallation eller -fjernelse (tørkørsel)
- 📦 Anvend lokal færdighedsinstallation eller fjernelse
- ⚙️ Skriv en lokal MCP-konfigurationsfil efter forhåndsvisning

Det adskiller bevidst to bekymringer:

-**mål for færdighedsinstallation**
  klienter med en stabil færdighedsmappe, der kan bruge `install_skills`
-**MCP-konfigurationsmål**
  klienter eller IDE'er med et stabilt dokumenteret MCP-konfigurationsformat, selvom de ikke har en færdighedsmappe---

## 🔌 Transports

| Transport | Protokol | Use Case |
|:----------|:--------|:---------|
| `stdio` | Rør | Direkte klientintegration |
| `stream` | Streambar HTTP | Moderne HTTP-klienter |
| `sse` | Server-Sendte hændelser | Ældre kunder |---

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

> Alle kommandoer indstiller automatisk `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Når lokal tilstand er aktiveret, bliver disse ekstra værktøjer tilgængelige:

| Værktøj | Beskrivelse | Standard |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Scan efter AI-klienter og deres færdigheds-/konfigurationsstier | — |
| 📋 `liste_installerede_færdigheder` | Undersøg installerede færdigheder for en specifik kunde | — |
| 📦 `install_skills` | Installer færdigheder i en kundes færdighedskatalog | 🔍 tørløb |
| 🗑️ `fjerne_færdigheder` | Fjern installerede færdigheder fra en klient | 🔍 tørløb |
| ⚙️ `configure_client_mcp` | Skriv MCP-konfiguration for en specifik klient | 🔍 tørløb |

> ⚠️ `install_skills`, `remove_skills` og `configure_client_mcp` er som standard**dry-run**når `dry_run` er udeladt.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Kunde | Sti |
|:-------|:-----|
| 🔵 Claude Kode | `~/.claude/færdigheder` |
| 🔵 Markør | `~/.cursor/færdigheder` |
| 🟡 Gemini CLI | `~/.gemini/færdigheder` |
| 🟣 Antigravitation | `~/.gemini/antigravity/skills` |
| Kiro | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` eller `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<arbejdsområde>/.opencode/skills` |

Disse 7 mål er de eneste førsteklasses installationsdestinationer i dag.### ⚙️ MCP Config Files

| Mål | Format |
|:-------|:-------|
| `~/.claude/settings.json` | Claude Kodeindstillinger JSON |
| `<arbejdsområde>/.claude/settings.json` | Claude projektindstillinger JSON |
| `~/.claude.json` | Legacy Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (OS-specifik) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<arbejdsområde>/.cursor/mcp.json` | Markør arbejdsområde JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini-bruger JSON (`mcpServers`) |
| `<arbejdsområde>/.gemini/settings.json` | Gemini projekt JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravity JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro-bruger JSON (`mcpServers`) |
| `<arbejdsområde>/.kiro/settings/mcp.json` | Kiro-projekt JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servere]`) |
| `<arbejdsområde>/.mcp.json` | JSON (`mcpServers`) |
| `<arbejdsområde>/opencode.json` | OpenCode-arbejdsområde JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode-bruger JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<arbejdsområde>/.github/mcp.json` | GitHub Copilot repository JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI-bruger JSON (`mcp`) |
| `<arbejdsområde>/kilo.json` | Kilo CLI-projekt JSON (`mcp`) |
| `<arbejdsområde>/.kilocode/mcp.json` | Kilokode arbejdsområde JSON (`mcpServers`) |
| `<arbejdsområde>/.continue/mcpServers/omni-skills.yaml` | Fortsæt arbejdsområde YAML (`mcpServers`) |
| `<arbejdsområde>/.junie/mcp/mcp.json` | Junie projekt JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie-bruger JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`udvidelser`) |
| `<arbejdsområde>/.zed/settings.json` | Zed-arbejdsområde JSON (`context_servers`) |
| `<arbejdsområde>/.vscode/mcp.json` | JSON (`servere`) |
| `~/.config/Code/User/mcp.json` | VS-kodebruger JSON ("servere") |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders bruger JSON (`servere`) |
| `<arbejdsområde>/.devcontainer/devcontainer.json` | Indlejret Dev Container JSON (`customizations.vscode.mcp.servers`) |
| Klientrod `mcp.json` | JSON (format pr. klient) |

Det giver sidevognen:

-**16 konfigurationskompatible klienter eller IDE'er**
-**33 førsteklasses målstier**
-**19 formatprofiler**

Aktuelle førsteklasses konfigurationsdækningsområder:

- Claude Code og Claude Desktop
- Markør
- VS Code og Dev Containere
- Gemini CLI
- Antigravitation
- Kiro
- Codex CLI
- Fortsæt
- Junie
- Windsurfing
- Gås
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilo kode
- Zed

Manuelle eller kun uddragskandidater er stadig med vilje uden for førsteklasses forfattersæt, indtil deres offentlige konfigurationskontrakter er stabile nok.### 🧭 Expansion Policy

Omni Skills behandler nu klientsupport som en model på tre niveauer:

1.**installerbar**
   Der findes et stabilt færdighedskatalog, så CLI og sidevogn kan installere færdigheder direkte.
2.**konfig-kompatibel**
   Der findes et stabilt, dokumenteret MCP-konfigurationsformat, så `config-mcp` kan forhåndsvise og skrive en førsteklasses fil.
3.**manuelt eller kun uddrag**
   Produktet understøtter klart MCP i en eller anden form, men de offentlige dokumenter retfærdiggør endnu ikke en sikker automatisk forfatter.

Dette er grunden til, at klienter som JetBrains AI Assistant forbliver manuelle/kun-snippet, mens Roo Code og Postman forbliver uden for førsteklasses forfattersæt, indtil deres sikre automatiske flettehistorie er stærk nok til dette projekt.---

## 🔒 Allowlist Model

Den lokale sidevogn skriver kun under en**eksplicit tilladelsesliste**.### 🟢 Default allowlist:

- Kendte klientrødder under `$HOME`
- `~/.codeium` for Windsurf-brugerkonfiguration
- `~/.copilot` for GitHub Copilot CLI
- `~/.cline` for Cline CLI
- `~/.config/goose` for Goose config
- `~/.config/kilo` og `~/.config/opencode` for Kilo/OpenCode CLI config
- `$CODEX_HOME` (eller `~/.codex` hvis ikke er indstillet)
- Nuværende arbejdsområderod
- `<arbejdsområde>/.agenter`
- `<arbejdsområde>/.github`
- `<arbejdsområde>/.kilocode`
- `<arbejdsområde>/.opencode`
- `<arbejdsområde>/.zed`
- `<arbejdsområde>/.fortsæt`
- `<arbejdsområde>/.vscode`### ➕ Extend the allowlist:

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

Den sidevognsstøttede CLI-indpakning holder MCP-konfigurationsgenerering tilgængelig uden direkte JSON-RPC-kald:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Standardadfærd er kun forhåndsvisning. `--write` anvender konfigurationen til den løste målsti under tilladelseslisten.### 🌊 Windsurf

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

Værktøjet `configure_client_mcp` kan også skrive Claude-specifikke indstillinger, når du passerer:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `aktiver_alle_projekt_mcp_servere`### 💜 VS Code sandboxing

For VS Code og Dev Container-mål kan `configure_client_mcp` også skrive:

- `SandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Dette er knyttet til den aktuelle VS-kodevejledning for sandboxing af lokale stdio MCP-servere.### 🧰 Cross-Client Entry Options

`configure_client_mcp` understøtter nu rigere metadata på tværs af understøttede profiler:

- 'overskrifter'
- 'env'
- `env_file`
- `cwd`
- `timeout_ms`
- `beskrivelse`
- `inkluder_værktøjer`
- `ekskluder_værktøjer`
- 'deaktiveret'
- 'tillid'

Profilspecifikke muligheder:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gemini: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS-kode og udviklerbeholdere: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` returnerer `recipes` sammen med forhåndsvisningen eller den anvendte konfiguration.

Disse opskrifter er klientbevidste vejledningsblokke, for eksempel:

- `claude mcp tilføje ... --scope bruger|projekt`
- `gemini mcp add ... --scope user|project`
- `codex mcp tilføje ...`
- Manuel filredigering af opskrifter til Cursor, VS Code, Kiro og Claude Desktop

Den overordnede strategi er nu bevidst konservativ:

- genbrug et lille sæt kanoniske konfigurationsfamilier, hvor det er muligt
- Behold kun skræddersyede forfattere, når officielle dokumenter kræver en særskilt form
- undgå at opfinde automatiske forfattere til udokumenterede mål---

## 🔐 Hosted HTTP Hardening

HTTP-transporterne understøtter de samme env-drevne kontroller som katalog-API'en:

| Variabel | Formål |
|:--------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bærer token auth |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kommaseparerede API-nøgler |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspektion kun for administratorer |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Maks. anmodninger pr. vindue |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Rate limit vindue i ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Aktiver revisionslogning |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Skriv revisionslog til en fil |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Begræns browseroprindelse |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Begræns tilladte kilde-IP'er |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Retur '503' for ikke-admin, ikke-sundhedsruter |

> `/healthz` forbliver åben. `/mcp`, `/sse` og `/messages` kræver godkendelse, når de er aktiveret. `/admin/runtime` kræver admin-tokenet, når det er konfigureret.---

## 🌍 Official Docs That Shape Support Decisions

Det aktuelle forfattersæt og grænser, der kun er til manualer, blev kontrolleret mod officielle produktdokumenter, herunder:

- Antropisk Claude Code MCP
- OpenAI Codex CLI og OpenAI Docs MCP
- Markør MCP-dokumenter
- Fortsæt MCP-dokumenter
- Kiro MCP-dokumenter
- OpenCode MCP-dokumenter
- Cline MCP-dokumenter
- Kilokode MCP-dokumenter
- GitHub Copilot CLI-dokumenter
- Zed MCP-dokumenter
- VS-kode MCP-dokumenter
- JetBrains AI Assistant MCP-dokumenter

Disse dokumenter er grunden til, at nogle klienter modtager førsteklasses automatiske forfattere, mens andre forbliver kun uddrag indtil videre.