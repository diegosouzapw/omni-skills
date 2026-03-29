# 🔌 Local MCP Sidecar (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Valgfri lokal modusutvidelse for `@omni-skills/server-mcp` som legger til filsystembevisste verktøy for klientdeteksjon, ferdighetsadministrasjon og MCP-konfigurasjon.**---

## 📊 Status

| Funksjon | Stat |
|:--------|:------|
| ✅ Skrivebeskyttede katalogverktøy | Implementert |
| ✅ Filsystem-bevisste lokale verktøy | Implementert |
| ✅ 3 transporter (stdio/stream/sse) | Implementert |
| ✅ Tillatte skriver | Implementert |
| ✅ Standardinnstillinger for forhåndsvisning før skriving | Implementert |
| ✅ Klientbevisst MCP-konfigurasjonsskriving | Implementert |
| ✅ HTTP-autentisering + hastighetsbegrensning | Implementert |
| ✅ Utgivelsestidssignaturer og kontrollsummer | Implementert for genererte arkiver og dukket opp av API/MCP |
| 🟡 Lokal håndhevelse av skrivetidssignatur | Ikke håndhevet ennå; lokal modus forhåndsviser og skriver fra den pålitelige lokale kassen |
| Nåværende kundedekning | 7 installeringskompatible klienter, 16 konfigurasjonskompatible klienter, 33 konfigurasjonsmål, 19 konfigurasjonsprofiler |---

## 🎯 Purpose

Lokal modus legger til**filsystembevisste verktøy**på toppen av den eksisterende skrivebeskyttede MCP-katalogoverflaten. Bruk den når en agent trenger å:

- 🕵️ Oppdag kompatible lokale AI-klienter
- 📋 Inspiser installerte ferdigheter
- 👁️ Forhåndsvis installasjon eller fjerning av ferdigheter (tørrkjøring)
- 📦 Bruk lokal ferdighetsinstallasjon eller fjerning
- ⚙️ Skriv en lokal MCP-konfigurasjonsfil etter forhåndsvisning

Det skiller bevisst to bekymringer:

-**mål for ferdighetsinstallasjon**
  klienter med en stabil ferdighetskatalog som kan bruke `install_skills`
-**MCP-konfigurasjonsmål**
  klienter eller IDE-er med et stabilt dokumentert MCP-konfigurasjonsformat, selv om de ikke har en ferdighetskatalog---

## 🔌 Transports

| Transport | Protokoll | Use Case |
|:----------|:---------|:--------|
| `stdio` | Rør | Direkte klientintegrasjon |
| `stream` | Streambar HTTP | Moderne HTTP-klienter |
| `sse` | Server-sendte hendelser | Eldre kunder |---

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

> Alle kommandoer angir automatisk `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Når lokal modus er aktivert, blir disse ekstra verktøyene tilgjengelige:

| Verktøy | Beskrivelse | Standard |
|:-----|:------------|:--------|
| 🕵️ `oppdag_kunder` | Skann etter AI-klienter og deres ferdighets-/konfigurasjonsbaner | — |
| 📋 `liste_installerte_ferdigheter` | Inspiser installerte ferdigheter for en spesifikk klient | — |
| 📦 `install_skills` | Installer ferdigheter i en kundes ferdighetskatalog | 🔍 tørrkjøring |
| 🗑️ `fjerne_ferdigheter` | Fjern installerte ferdigheter fra en klient | 🔍 tørrkjøring |
| ⚙️ `configure_client_mcp` | Skriv MCP-konfigurasjon for en spesifikk klient | 🔍 tørrkjøring |

> ⚠️ `install_skills`, `remove_skills` og `configure_client_mcp` er standard til**dry-run**når `dry_run` er utelatt.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Kunde | Sti |
|:-------|:-----|
| 🔵 Claude-kode | `~/.claude/skills` |
| 🔵 Markør | `~/.cursor/skills` |
| 🟡 Gemini CLI | `~/.gemini/skills` |
| Antigravitasjon | `~/.gemini/antigravity/skills` |
| Kiro | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` eller `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<arbeidsområde>/.opencode/skills` |

Disse 7 målene er de eneste førsteklasses installasjonsdestinasjonene i dag.### ⚙️ MCP Config Files

| Mål | Format |
|:-------|:-------|
| `~/.claude/settings.json` | Claude Kodeinnstillinger JSON |
| `<arbeidsområde>/.claude/settings.json` | Claude prosjektinnstillinger JSON |
| `~/.claude.json` | Legacy Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (OS-spesifikk) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<arbeidsområde>/.cursor/mcp.json` | Markørarbeidsområde JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini-bruker JSON (`mcpServers`) |
| `<arbeidsområde>/.gemini/settings.json` | Gemini-prosjektet JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravity JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro-bruker JSON (`mcpServers`) |
| `<arbeidsområde>/.kiro/settings/mcp.json` | Kiro-prosjektet JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<arbeidsområde>/.mcp.json` | JSON (`mcpServers`) |
| `<arbeidsområde>/opencode.json` | OpenCode arbeidsområde JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode-bruker JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<arbeidsområde>/.github/mcp.json` | GitHub Copilot repository JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI-bruker JSON (`mcp`) |
| `<arbeidsområde>/kilo.json` | Kilo CLI-prosjekt JSON (`mcp`) |
| `<arbeidsområde>/.kilocode/mcp.json` | Kilokode arbeidsområde JSON (`mcpServers`) |
| `<arbeidsområde>/.continue/mcpServers/omni-skills.yaml` | Fortsett arbeidsområde YAML (`mcpServers`) |
| `<arbeidsområde>/.junie/mcp/mcp.json` | Junie-prosjektet JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie-bruker JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`utvidelser`) |
| `<arbeidsområde>/.zed/settings.json` | Zed arbeidsområde JSON (`context_servers`) |
| `<arbeidsområde>/.vscode/mcp.json` | JSON (`servere`) |
| `~/.config/Code/User/mcp.json` | VS-kodebruker JSON (`servere`) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders bruker JSON (`servere`) |
| `<arbeidsområde>/.devcontainer/devcontainer.json` | Nested Dev Container JSON (`customizations.vscode.mcp.servers`) |
| Klienterot `mcp.json` | JSON (per-klient-format) |

Det gir sidevognen:

-**16 konfigurasjonskompatible klienter eller IDE-er**
-**33 førsteklasses målbaner**
-**19 formatprofiler**

Gjeldende førsteklasses konfigurasjonsdekning:

- Claude Code og Claude Desktop
- Markør
- VS-kode og Dev-beholdere
- Gemini CLI
- Antigravitasjon
- Kiro
- Codex CLI
- Fortsett
- Junie
- Vindsurfing
- Gås
- Åpenkode
- Cline
- GitHub Copilot CLI
- Kilokode
- Zed

Manuelle eller kun utdragskandidater er fortsatt med vilje utenfor førsteklasses forfattersett inntil deres offentlige konfigurasjonskontrakter er stabile nok.### 🧭 Expansion Policy

Omni Skills behandler nå kundestøtte som en modell på tre nivåer:

1.**installerbar**
   Det finnes en stabil ferdighetskatalog, slik at CLI og sidevogn kan installere ferdigheter direkte.
2.**konfigurasjonskompatible**
   Det finnes et stabilt, dokumentert MCP-konfigurasjonsformat, så `config-mcp` kan forhåndsvise og skrive en førsteklasses fil.
3.**manuell eller bare kodebit**
   Produktet støtter tydeligvis MCP i en eller annen form, men de offentlige dokumentene rettferdiggjør ikke en sikker automatisk skriver ennå.

Dette er grunnen til at klienter som JetBrains AI Assistant forblir manuelle/snippet-only, mens Roo Code og Postman forblir utenfor det førsteklasses forfattersettet til deres sikre automatiske sammenslåingshistorie er sterk nok for dette prosjektet.---

## 🔒 Allowlist Model

Den lokale sidevognen skriver kun under en**eksplisitt godkjenningsliste**.### 🟢 Default allowlist:

- Kjente klientrøtter under `$HOME`
- `~/.codeium` for Windsurf-brukerkonfigurasjon
- `~/.copilot` for GitHub Copilot CLI
- `~/.cline` for Cline CLI
- `~/.config/goose` for Goose config
- `~/.config/kilo` og `~/.config/opencode` for Kilo/OpenCode CLI-konfigurasjon
- `$CODEX_HOME` (eller `~/.codex` hvis ikke er angitt)
- Nåværende arbeidsområderot
- `<arbeidsområde>/.agenter`
- `<arbeidsområde>/.github`
- `<arbeidsområde>/.kilocode`
- `<arbeidsområde>/.opencode`
- `<arbeidsområde>/.zed`
- `<arbeidsområde>/.continue`
- `<arbeidsområde>/.vscode`### ➕ Extend the allowlist:

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

Den sidevognstøttede CLI-omslaget holder MCP-konfigurasjonsgenerering tilgjengelig uten direkte JSON-RPC-anrop:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Standard oppførsel er kun forhåndsvisning. `--write` bruker konfigurasjonen til den løste målbanen under tillatelseslisten.### 🌊 Windsurf

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

`configure_client_mcp`-verktøyet kan også skrive Claude-spesifikke innstillinger når du passerer:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `aktiver_alle_prosjekt_mcp_servere`### 💜 VS Code sandboxing

For VS Code og Dev Container-mål kan `configure_client_mcp` også skrive:

- `SandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Dette tilordnes gjeldende VS-kodeveiledning for sandboxing av lokale stdio MCP-servere.### 🧰 Cross-Client Entry Options

`configure_client_mcp` støtter nå rikere oppføringsmetadata på tvers av støttede profiler:

- `hoder`
- 'env'
- `env_file`
- `cwd`
- `timeout_ms`
- `beskrivelse`
- 'inkluder_verktøy'
- `ekskluder_verktøy`
- `deaktivert`
- `tillit`

Profilspesifikke alternativer:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gemini: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS-kode og utviklerbeholdere: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` returnerer `recipes` sammen med forhåndsvisningen eller den anvendte konfigurasjonen.

Disse oppskriftene er klientbevisste veiledningsblokker, for eksempel:

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp add ...`
- manuelle filredigeringsoppskrifter for Cursor, VS Code, Kiro og Claude Desktop

Den overordnede strategien er nå bevisst konservativ:

- gjenbruk et lite sett med kanoniske konfigurasjonsfamilier der det er mulig
- Behold skreddersydde forfattere kun når offisielle dokumenter krever en distinkt form
- unngå å finne opp automatiske skrivere for udokumenterte mål---

## 🔐 Hosted HTTP Hardening

HTTP-transportene støtter de samme env-drevne kontrollene som katalog-API:

| Variabel | Formål |
|:--------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bærer token auth |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kommaseparerte API-nøkler |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspeksjon kun for administratorer |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Maks forespørsler per vindu |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Takstgrensevindu i ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Aktiver revisjonslogging |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Skriv revisjonslogg til en fil |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Begrens nettleseropprinnelsen |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Begrens tillatte kilde-IP-er |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Returner '503' for ikke-admin, ikke-helse-ruter |

> `/healthz` forblir åpen. `/mcp`, `/sse` og `/messages` krever auth når de er aktivert. `/admin/runtime` krever admin token når den er konfigurert.---

## 🌍 Official Docs That Shape Support Decisions

Gjeldende skriversett og grenser for kun manuelle ble kontrollert mot offisielle produktdokumenter, inkludert:

- Antropisk Claude Code MCP
- OpenAI Codex CLI og OpenAI Docs MCP
- Markør MCP-dokumenter
- Fortsett MCP-dokumenter
- Kiro MCP-dokumenter
- OpenCode MCP-dokumenter
- Cline MCP-dokumenter
- Kilokode MCP-dokumenter
- GitHub Copilot CLI-dokumenter
- Zed MCP-dokumenter
- VS-kode MCP-dokumenter
- JetBrains AI Assistant MCP-dokumenter

Disse dokumentene er grunnen til at noen klienter mottar førsteklasses automatiske skribenter, mens andre foreløpig forblir bare utdrag.