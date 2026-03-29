# 🔌 Local MCP Sidecar (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Opcionális helyi módú kiterjesztés az `@omni-skills/server-mcp`-hez, amely fájlrendszer-tudatos eszközöket ad hozzá a kliensészleléshez, a képességkezeléshez és az MCP-konfigurációk generálásához.**---

## 📊 Status

| Funkció | állam |
|:--------|:------|
| ✅ Csak olvasható katalóguseszközök | Megvalósítva |
| ✅ Fájlrendszer-tudatos helyi eszközök | Megvalósítva |
| ✅ 3 szállítás (stdio/stream/sse) | Megvalósítva |
| ✅ Engedélyezett írások | Megvalósítva |
| ✅ Előnézet-írás előtti alapértelmezett beállítások | Megvalósítva |
| ✅ Kliens-tudatos MCP-konfiguráció írása | Megvalósítva |
| ✅ HTTP hitelesítés + sebességkorlátozás | Megvalósítva |
| ✅ Megjelenéskori aláírások és ellenőrző összegek | Létrehozott archívumokhoz implementálva és API/MCP segítségével |
| 🟡 Helyi írási idejű aláírás-érvényesítés | Még nem hajtották végre; helyi mód előnézetek és írások a megbízható helyi pénztárból |
| 🟢 Aktuális ügyféllefedettség | 7 telepíthető kliens, 16 konfigurálható ügyfél, 33 konfigurációs cél, 19 konfigurációs profil |---

## 🎯 Purpose

A helyi mód**fájlrendszer-tudatos eszközöket**ad hozzá a meglévő, csak olvasható MCP-katalógus felületéhez. Akkor használja, ha egy ügynöknek szüksége van:

- 🕵️ Kompatibilis helyi AI-kliensek észlelése
- 📋 Ellenőrizze a telepített készségeket
- 👁️ Képesség beszerelésének vagy eltávolításának előnézete (száraz futás)
- 📦 Alkalmazza a helyi készségek telepítését vagy eltávolítását
- ⚙️ Írjon egy helyi MCP konfigurációs fájlt az előnézet után

Szándékosan elkülönít két aggodalmat:

-**készséges telepítési célok**
  stabil készségkönyvtárral rendelkező ügyfelek, amelyek használhatják az „install_skills” paramétert
-**MCP konfigurációs célok**
  stabil dokumentált MCP konfigurációs formátumú kliensek vagy IDE-k, még akkor is, ha nem rendelkeznek képességkönyvtárral---

## 🔌 Transports

| Szállítás | Jegyzőkönyv | Használati eset |
|:----------|:---------|:----------|
| "stdio" | Cső | Közvetlen kliens integráció |
| "folyam" | Streamálható HTTP | Modern HTTP kliensek |
| "sse" | Szerver által küldött események | Hagyományos ügyfelek |---

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

> Minden parancs automatikusan beállítja az OMNI_SKILLS_MCP_MODE=local értéket.---

## 🛠️ Local Tools

Ha a helyi mód engedélyezve van, ezek az extra eszközök válnak elérhetővé:

| Szerszám | Leírás | Alapértelmezett |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | AI kliensek és képességeik/konfigurációs útvonalaik keresése | — |
| 📋 `telepített_készségek listája` | Egy adott ügyfél telepített képességeinek ellenőrzése | — |
| 📦 `telepítési_készségek` | A készségek telepítése az ügyfél készségjegyzékébe | 🔍 szárazon futás |
| 🗑️ `remove_skills` | Telepített készségek eltávolítása az ügyfélből | 🔍 szárazon futás |
| ⚙️ `configure_client_mcp` | Írjon MCP konfigurációt egy adott ügyfélhez | 🔍 szárazon futás |

> ⚠️ Az "install_skills", "remove_skills" és a "configure_client_mcp" alapértelmezés szerint**dry-run**, ha a "dry_run" ki van hagyva.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Ügyfél | Útvonal |
|:-------|:-----|
| 🔵 Claude Code | "~/.claude/skills" |
| 🔵 Kurzor | "~/.kurzor/készségek" |
| 🟡 Gemini CLI | "~/.gemini/skills" |
| 🟣 Antigravitáció | "~/.gemini/antigravitation/skills" |
| 🟢 Kiro | "~/.kiro/skills" |
| 🔴 Codex CLI | "~/.codex/skills" vagy "$CODEX_HOME/skills" |
| ⚪ OpenCode | `<munkaterület>/.opencode/skills` |

Ez a 7 célpont ma az egyetlen első osztályú telepítési cél.### ⚙️ MCP Config Files

| Cél | Formátum |
|:-------|:--------|
| `~/.claude/settings.json` | Claude Code beállítások JSON |
| `<munkaterület>/.claude/settings.json` | Claude projektbeállítások JSON |
| `~/.claude.json` | Legacy Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (OS-specifikus) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<munkaterület>/.cursor/mcp.json` | Kurzor munkaterület JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini felhasználó JSON (`mcpServers`) |
| `<munkaterület>/.gemini/settings.json` | Gemini projekt JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravity JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro felhasználó JSON (`mcpServers`) |
| `<munkaterület>/.kiro/settings/mcp.json` | Kiro projekt JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_szerverek]`) |
| `<munkaterület>/.mcp.json` | JSON (`mcpServers`) |
| `<munkaterület>/opencode.json` | OpenCode munkaterület JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode felhasználó JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<munkaterület>/.github/mcp.json` | GitHub másodpilóta JSON tárház (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI felhasználó JSON (`mcp`) |
| `<munkaterület>/kilo.json` | Kilo CLI projekt JSON (`mcp`) |
| `<munkaterület>/.kilocode/mcp.json` | Kilo Code munkaterület JSON (`mcpServers`) |
| `<munkaterület>/.continue/mcpServers/omni-skills.yaml` | Munkaterület folytatása YAML (`mcpServers`) |
| `<munkaterület>/.junie/mcp/mcp.json` | Junie projekt JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie felhasználó JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`kiterjesztések`) |
| `<munkaterület>/.zed/settings.json` | Zed munkaterület JSON (`context_servers`) |
| `<munkaterület>/.vscode/mcp.json` | JSON ("szerverek") |
| `~/.config/Code/User/mcp.json` | VS Code felhasználó JSON (`szerverek`) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders felhasználó JSON ("szerverek") |
| `<munkaterület>/.devcontainer/devcontainer.json` | Beágyazott fejlesztői tároló JSON (`customizations.vscode.mcp.servers`) |
| Ügyfélgyökér `mcp.json` | JSON (ügyfélenkénti formátum) |

Ez adja az oldalkocsit:

-**16 konfigurálható kliens vagy IDE**
-**33 első osztályú célútvonal**
-**19 formátumú profil**

A jelenlegi első osztályú konfigurációs lefedettség:

- Claude Code és Claude Desktop
- Kurzor
- VS kód és fejlesztői tárolók
- Gemini CLI
- Antigravitáció
- Kiro
- Codex CLI
- Folytasd
- Junie
- Szörf
- Liba
- OpenCode
- Cline
- GitHub másodpilóta CLI
- Kilo Code
- Zed

A manuális vagy csak részletet tartalmazó jelöltek továbbra is szándékosan kívül esnek az első osztályú írókészleten, amíg a nyilvános konfigurációs szerződéseik elég stabilak nem lesznek.### 🧭 Expansion Policy

Az Omni Skills mostantól háromszintű modellként kezeli az ügyfélszolgálatot:

1.**telepíthető**
   Létezik egy stabil képességkönyvtár, így a CLI és az oldalkocsi közvetlenül telepítheti a készségeket.
2.**konfigurálható**
   Létezik egy stabil, dokumentált MCP konfigurációs formátum, így a `config-mcp` meg tudja tekinteni és meg tudja írni az első osztályú fájlt.
3.**kézi vagy csak részlet**
   A termék valamilyen formában egyértelműen támogatja az MCP-t, de a publikus dokumentumok még nem indokolják a biztonságos automatikus írót.

Ez az oka annak, hogy az olyan kliensek, mint a JetBrains AI Assistant, csak manuálisan/részletesen maradnak, míg a Roo Code és a Postman kívül maradnak az első osztályú írókészleten, amíg a biztonságos automatikus egyesítési történetük elég erős lesz ehhez a projekthez.---

## 🔒 Allowlist Model

A helyi oldalkocsi csak egy**explicit engedélyezési listára**ír.### 🟢 Default allowlist:

- Ismert ügyfélgyökerek a „$HOME” alatt
- `~/.codeium` a Windsurf felhasználói konfigurációhoz
- `~/.copilot` a GitHub Copilot CLI-hez
- `~/.cline` a Cline CLI-hez
- `~/.config/goose` a Goose config számára
- "~/.config/kilo" és "~/.config/opencode" a Kilo/OpenCode CLI-konfigurációhoz
- "$CODEX_HOME" (vagy "~/.codex", ha nincs beállítva)
- Jelenlegi munkaterület gyökér
- "<munkaterület>/.ügynökök".
- `<munkaterület>/.github`
- `<munkaterület>/.kilocode`
- `<munkaterület>/.opencode`
- `<munkaterület>/.zed`
- `<munkaterület>/.folytatás`
- `<munkaterület>/.vscode`### ➕ Extend the allowlist:

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

Az oldalkocsis CLI-burkoló lehetővé teszi az MCP-konfiguráció létrehozását közvetlen JSON-RPC hívások nélkül:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Az alapértelmezett viselkedés csak előnézet. A `--write` az engedélyezési lista alatti feloldott célútvonalra alkalmazza a konfigurációt.### 🌊 Windsurf

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

A `configure_client_mcp` eszköz Claude-specifikus beállításokat is írhat, amikor megfelel:

- "allowed_mcp_servers".
- "megtagadott_mcp_szerverek".
- "permissions_deny".
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

VS Code és Dev Container célok esetén a `configure_client_mcp` a következőket is írhatja:

- "SandboxEnabled".
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Ez megfelel a jelenlegi VS Code útmutatásnak a helyi stdio MCP-kiszolgálók sandbox-kezeléséhez.### 🧰 Cross-Client Entry Options

A `configure_client_mcp` mostantól gazdagabb bejegyzési metaadatokat támogat a támogatott profilokban:

- "fejlécek".
- "env".
- "env_file".
- "cwd".
- `timeout_ms`
- "leírás".
- "include_tools".
- "kizárja az eszközöket".
- `letiltva`
- "bizalom".

Profilspecifikus lehetőségek:

- Claude: "allowed_mcp_servers", "denied_mcp_servers", "permissions_deny", "enable_all_project_mcp_servers"
- Gemini: "mcp_allowed_servers", "mcp_excluded_servers"
- Kiro: "letiltott_eszközök", "automatikus_jóváhagyás".
- VS kód és fejlesztői tárolók: "dev_watch", "dev_debug_type"### 📋 Generated Recipes

A „configure_client_mcp” a „recepteket” adja vissza az előnézet vagy az alkalmazott konfiguráció mellett.

Ezek a receptek ügyfél-tudatos útmutatási blokkok, például:

- `claude mcp add... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp add...`
- kézi fájlszerkesztési receptek Cursor, VS Code, Kiro és Claude Desktop számára

Az átfogó stratégia most szándékosan konzervatív:

- lehetőség szerint használjon fel egy kis kanonikus konfigurációs családot
- csak akkor tartson egyedi írókat, ha a hivatalos dokumentumok külön formát igényelnek
- kerülje az automatikus írók feltalálását a nem dokumentált célpontokhoz---

## 🔐 Hosted HTTP Hardening

A HTTP átvitelek ugyanazokat az env-vezérelt vezérlőket támogatják, mint a katalógus API:

| Változó | Cél |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | hordozó token hitelesítés |
| `OMNI_SKILLS_HTTP_API_KEYS` | Vesszővel elválasztott API kulcsok |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Csak adminisztrátori futásidejű önvizsgálat |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Maximális kérések ablakonként |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Rate limit ablak ms-ban |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Ellenőrzési naplózás engedélyezése |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Audit napló írása fájlba |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | A böngésző eredetének korlátozása |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Az engedélyezett forrás IP-címek korlátozása |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | A nem adminisztratív, nem egészségügyi útvonalak esetén adja vissza az `503-ast |

> 🟢 `/healthz` nyitva marad. Az „/mcp”, „/sse” és „/messages” hitelesítést igényel, ha engedélyezve van. Az `/admin/runtime' az adminisztrátori tokent igényli, amikor be van állítva.---

## 🌍 Official Docs That Shape Support Decisions

A jelenlegi írókészletet és a csak manuálisan használható határokat a hivatalos termékdokumentumokhoz hasonlították, többek között:

- Antropikus Claude Code MCP
- OpenAI Codex CLI és OpenAI Docs MCP
- Kurzor MCP dokumentumok
- Az MCP-dokumentumok folytatása
- Kiro MCP doksi
- OpenCode MCP dokumentumok
- Cline MCP dokumentumok
- Kilo Code MCP dokumentumok
- GitHub Copilot CLI dokumentumok
- Zed MCP dokumentumok
- VS Code MCP dokumentumok
- JetBrains AI Assistant MCP docs

Ezek a dokumentumok az oka annak, hogy egyes kliensek első osztályú automatikus írókat kapnak, míg mások egyelőre csak részletet tartalmaznak.