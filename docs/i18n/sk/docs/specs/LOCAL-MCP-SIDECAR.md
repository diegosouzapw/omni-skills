# 🔌 Local MCP Sidecar (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Voliteľné rozšírenie lokálneho režimu pre `@omni-skills/server-mcp`, ktoré pridáva nástroje na detekciu klientov, správu zručností a generovanie konfigurácií MCP, ktoré zohľadňuje súborový systém.**---

## 📊 Status

| Funkcia | Štát |
|:--------|:------|
| ✅ Katalógové nástroje iba na čítanie | Realizované |
| ✅ Lokálne nástroje podporujúce súborový systém | Realizované |
| ✅ 3 transporty (stdio/stream/sse) | Realizované |
| ✅ Allowlisted píše | Realizované |
| ✅ Predvolené hodnoty ukážky pred zápisom | Realizované |
| ✅ Zápis konfigurácie MCP s ohľadom na klienta | Realizované |
| ✅ HTTP overenie + obmedzenie rýchlosti | Realizované |
| ✅ Časové podpisy a kontrolné súčty | Implementované pre generované archívy a zobrazované pomocou API/MCP |
| 🟡 Vynútenie miestneho podpisu | Zatiaľ sa neuplatňuje; miestny režim zobrazuje ukážky a zapisuje z dôveryhodnej miestnej pokladne |
| 🢢 Aktuálne pokrytie klientov | 7 klientov s možnosťou inštalácie, 16 klientov s možnosťou konfigurácie, 33 cieľov konfigurácie, 19 profilov konfigurácie |---

## 🎯 Purpose

Lokálny režim pridáva k existujúcemu povrchu katalógu MCP iba ​​na čítanie**nástroje s podporou súborového systému**. Použite ho, keď agent potrebuje:

- 🕵️ Zistite kompatibilných miestnych klientov AI
- 📋 Skontrolujte nainštalované zručnosti
- 👁️ Ukážka inštalácie alebo odstránenia zručnosti (nasucho)
- 📦 Použite miestnu inštaláciu alebo odstránenie zručnosti
- ⚙️ Po ukážke napíšte lokálny konfiguračný súbor MCP

Zámerne oddeľuje dve obavy:

-**ciele inštalácie zručností**
  klienti so stabilným adresárom zručností, ktorí môžu používať `install_skills`
-**Ciele konfigurácie MCP**
  klientov alebo IDE so stabilným zdokumentovaným konfiguračným formátom MCP, aj keď nemajú adresár zručností---

## 🔌 Transports

| Doprava | Protokol | Prípad použitia |
|:----------|:---------|:---------|
| "stdio" | Pipe | Priama integrácia klienta |
| "stream" | Streamovateľný HTTP | Moderní HTTP klienti |
| `sse` | Udalosti odoslané serverom | Starší klienti |---

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

> Všetky príkazy sa automaticky nastavia `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Keď je povolený lokálny režim, sú k dispozícii tieto dodatočné nástroje:

| Nástroj | Popis | Predvolené |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Vyhľadajte klientov AI a ich cesty zručnosti/konfigurácie | — |
| 📋 `zoznam_nainštalovaných_zručností` | Skontrolujte nainštalované zručnosti pre konkrétneho klienta | — |
| 📦 `install_skills` | Nainštalujte zručnosti do adresára zručností klienta | 🔍 chod nasucho |
| 🗑️ `remove_skills` | Odstráňte nainštalované zručnosti z klienta | 🔍 chod nasucho |
| ⚙️ `configure_client_mcp` | Napíšte konfiguráciu MCP pre konkrétneho klienta | 🔍 chod nasucho |

> ⚠️ `install_skills`, `remove_skills` a `configure_client_mcp` predvolene na**suché spustenie**, keď sa vynechá `dry_run`.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Klient | Cesta |
|:-------|:-----|
| 🔵 Claude Code | `~/.claude/skills` |
| 🔵 Kurzor | `~/.kurzor/zručnosti` |
| 🡡 Gemini CLI | `~/.gemini/skills` |
| 🟣 Antigravitácia | `~/.gemini/antigravity/skills` |
| 🢢 Kiro | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` alebo `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<pracovný priestor>/.opencode/skills` |

Týchto 7 cieľov je dnes jedinými prvotriednymi miestami inštalácie.### ⚙️ MCP Config Files

| Cieľ | Formát |
|:-------|:-------|
| `~/.claude/settings.json` | Nastavenia kódu Claude JSON |
| `<pracovný priestor>/.claude/settings.json` | Nastavenia projektu Claude JSON |
| `~/.claude.json` | Legacy Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (špecifický pre OS) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<pracovný priestor>/.cursor/mcp.json` | Pracovný priestor kurzora JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Používateľ Gemini JSON (`mcpServers`) |
| `<pracovný priestor>/.gemini/settings.json` | Gemini projekt JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravity JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Používateľ Kiro JSON (`mcpServers`) |
| `<pracovný priestor>/.kiro/settings/mcp.json` | Kiro projekt JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<pracovný priestor>/.mcp.json` | JSON (`mcpServers`) |
| `<pracovný priestor>/opencode.json` | Pracovný priestor OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | Používateľ OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<pracovný priestor>/.github/mcp.json` | GitHub Copilot úložisko JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Používateľ Kilo CLI JSON (`mcp`) |
| `<pracovný priestor>/kilo.json` | Kilo CLI projekt JSON (`mcp`) |
| `<pracovný priestor>/.kilocode/mcp.json` | Pracovný priestor Kilo Code JSON (`mcpServers`) |
| `<pracovný priestor>/.continue/mcpServers/omni-skills.yaml` | Pokračovať v pracovnom priestore YAML (`mcpServers`) |
| `<pracovný priestor>/.junie/mcp/mcp.json` | Junie project JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Používateľ JSON JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML („rozšírenia“) |
| `<pracovný priestor>/.zed/settings.json` | Pracovný priestor Zed JSON (`kontextové_servery`) |
| `<pracovný priestor>/.vscode/mcp.json` | JSON („servery“) |
| `~/.config/Code/User/mcp.json` | Používateľ kódu VS JSON (`servery`) |
| `~/.config/Code - Insiders/User/mcp.json` | Používateľ VS Code Insiders JSON (`servery`) |
| `<pracovný priestor>/.devcontainer/devcontainer.json` | Nested Dev Container JSON (`customizations.vscode.mcp.servers`) |
| Koreň klienta `mcp.json` | JSON (formát pre klienta) |

To dáva postrannému vozíku:

-**16 klientov alebo IDE s možnosťou konfigurácie**
-**33 prvotriednych cieľových ciest**
-**19 formátových profilov**

Súčasné pokrytie prvotriednej konfigurácie:

- Claude Code a Claude Desktop
- Kurzor
- VS kód a Dev kontajnery
- Gemini CLI
- Antigravitácia
- Kiro
- Codex CLI
- Pokračuj
- Junie
- Windsurfing
- Husi
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilový kód
- Zed

Manuálni kandidáti alebo kandidáti len na úryvky sú stále zámerne mimo množiny prvotriednych autorov, kým ich verejné konfiguračné zmluvy nebudú dostatočne stabilné.### 🧭 Expansion Policy

Omni Skills teraz pristupuje k klientskej podpore ako k trojúrovňovému modelu:

1.**možnosť inštalácie**
   Existuje stabilný adresár zručností, takže CLI a postranný vozík môžu nainštalovať zručnosti priamo.
2.**s podporou konfigurácie**
   Existuje stabilný, zdokumentovaný konfiguračný formát MCP, takže `config-mcp` môže zobraziť ukážku a zapísať prvotriedny súbor.
3.**manuálne alebo iba úryvky**
   Produkt v určitej forme jednoznačne podporuje MCP, ale verejné dokumenty zatiaľ neospravedlňujú bezpečný automatický zapisovač.

To je dôvod, prečo klienti, ako je JetBrains AI Assistant, zostávajú iba manuálni/úryvky, zatiaľ čo Roo Code a Postman zostávajú mimo prvotriednej množiny spisovateľov, kým ich príbeh o bezpečnom automatickom zlúčení nebude dostatočne silný pre tento projekt.---

## 🔒 Allowlist Model

Miestna sajdkára zapisuje iba pod**explicitný zoznam povolených**.### 🟢 Default allowlist:

- Známe klientske korene pod `$HOME`
- `~/.codeium` pre konfiguráciu používateľa Windsurf
- `~/.copilot` pre GitHub Copilot CLI
- `~/.cline` pre Cline CLI
- `~/.config/goose` pre konfiguráciu Goose
- `~/.config/kilo` a `~/.config/opencode` pre konfiguráciu Kilo/OpenCode CLI
- `$CODEX_HOME` (alebo `~/.codex`, ak nie je nastavené)
- Aktuálny koreň pracovného priestoru
- `<pracovný priestor>/.agenti`
- `<pracovný priestor>/.github`
- `<pracovný priestor>/.kilokód`
- `<pracovný priestor>/.opencode`
- `<pracovný priestor>/.zed`
- `<pracovný priestor>/.pokračovať`
- `<pracovný priestor>/.vscode`### ➕ Extend the allowlist:

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

Obal CLI podporovaný sidecarom udržuje generovanie konfigurácie MCP dostupné bez priamych volaní JSON-RPC:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Predvolené správanie je iba náhľad. `--write` aplikuje konfiguráciu na vyriešenú cieľovú cestu pod zoznamom povolených.### 🌊 Windsurf

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

Nástroj `configure_client_mcp` môže tiež zapísať nastavenia špecifické pre Claude, keď prejdete:

- `povolené_servery_mcp`
- `denied_mcp_servers`
- `povolenia_odmietnuť`
- `povoliť_všetky_projektové_servery_mcp`### 💜 VS Code sandboxing

Pre ciele VS Code a Dev Container môže `configure_client_mcp` tiež písať:

- `sandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- „dev.watch“.
- `dev.debug.type`

Toto mapuje aktuálne pokyny VS Code pre sandboxing miestnych stdio MCP serverov.### 🧰 Cross-Client Entry Options

`configure_client_mcp` teraz podporuje bohatšie metadáta položky v podporovaných profiloch:

- "hlavičky".
- "env".
- `súbor_env`
- "cwd".
- `timeout_ms`
- "popis".
- "include_tools".
- `vylúčiť_nástroje`
- "zakázané".
- "dôverovať".

Možnosti špecifické pre profil:

- Claude: `povolené_servery_mcp`, `denied_mcp_servers`, `povolenia_odmietnuté`, `povoliť_všetky_projekty_mcp_servers`
– Gemini: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS kód a kontajnery pre vývojárov: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` vráti `recepty` spolu s ukážkou alebo použitou konfiguráciou.

Tieto recepty sú bloky s pokynmi pre klienta, napríklad:

- `claude mcp pridať ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp add ...`
- recepty na manuálnu úpravu súborov pre Cursor, VS Code, Kiro a Claude Desktop

Celková stratégia je teraz zámerne konzervatívna:

- ak je to možné, znova použite malú množinu kanonických konfiguračných rodín
- Ponechajte autorov na mieru iba vtedy, keď oficiálne dokumenty vyžadujú odlišný tvar
- vyhnúť sa vymýšľaniu automatických zapisovačov pre nezdokumentované ciele---

## 🔐 Hosted HTTP Hardening

Prenosy HTTP podporujú rovnaké ovládacie prvky riadené prostredím ako katalógové API:

| Premenná | Účel |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Autentifikácia tokenu nosiča |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kľúče API oddelené čiarkami |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspekcia runtime len pre správcu |
| „OMNI_SKILLS_RATE_LIMIT_MAX“ | Maximálny počet požiadaviek na okno |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Okno limitu sadzby v ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Povoliť protokolovanie auditu |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Zapísať protokol auditu do súboru |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Obmedziť pôvod prehliadača |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Obmedzenie povolených zdrojových IP |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Vráťte `503` pre cesty, ktoré nie sú správcom a ktoré sa netýkajú zdravia |

> 🟢 `/healthz` zostáva otvorené. `/mcp`, `/sse` a `/messages` vyžadujú autorizáciu, keď sú povolené. `/admin/runtime` vyžaduje pri konfigurácii token správcu.---

## 🌍 Official Docs That Shape Support Decisions

Súčasná sada zapisovača a hranice iba manuálneho ovládania boli skontrolované v porovnaní s oficiálnymi dokumentmi k produktu vrátane:

- Antropický Claude Code MCP
- OpenAI Codex CLI a OpenAI Docs MCP
- Kurzorové dokumenty MCP
- Pokračovať v dokumentoch MCP
- Dokumenty Kiro MCP
- Dokumenty OpenCode MCP
- Dokumenty Cline MCP
- Dokumenty Kilo Code MCP
- Dokumenty GitHub Copilot CLI
- Dokumenty Zed MCP
- Dokumenty VS Code MCP
- Dokumenty JetBrains AI Assistant MCP

Tieto dokumenty sú dôvodom, prečo niektorí klienti dostávajú prvotriedne automatické zapisovače, zatiaľ čo iní zostávajú zatiaľ len úryvky.