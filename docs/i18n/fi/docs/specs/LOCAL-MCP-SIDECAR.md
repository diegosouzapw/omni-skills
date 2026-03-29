# 🔌 Local MCP Sidecar (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Valinnainen paikallisen tilan laajennus @omni-skills/server-mcp:lle, joka lisää tiedostojärjestelmätietoisia työkaluja asiakkaiden havaitsemiseen, taitojen hallintaan ja MCP-asetusten luomiseen.**---

## 📊 Status

| Ominaisuus | valtio |
|:--------|:------|
| ✅ Vain luku -luettelotyökalut | Toteutettu |
| ✅ Tiedostojärjestelmätietoiset paikalliset työkalut | Toteutettu |
| ✅ 3 kuljetusta (stdio/stream/sse) | Toteutettu |
| ✅ Sallitut kirjoitukset | Toteutettu |
| ✅ Esikatselu ennen kirjoitusta oletusasetukset | Toteutettu |
| ✅ Asiakastietoinen MCP-asetusten kirjoittaminen | Toteutettu |
| ✅ HTTP-todennus + nopeuden rajoittaminen | Toteutettu |
| ✅ Julkaisuajan allekirjoitukset ja tarkistussummat | Toteutettu luotuja arkistoja varten ja API/MCP |
| 🟡 Paikallinen kirjoitusaikaisen allekirjoituksen valvonta | Ei vielä pantu täytäntöön; paikallinen tila esikatselee ja kirjoittaa luotetusta paikallisesta kassasta |
| 🟢 Tämänhetkinen asiakaskattavuus | 7 asennuskykyistä asiakasta, 16 konfigurointikykyistä asiakasta, 33 konfigurointikohdetta, 19 konfigurointiprofiilia |---

## 🎯 Purpose

Paikallinen tila lisää**tiedostojärjestelmätietoisia työkaluja**olemassa olevan vain luku -muotoisen MCP-luettelopinnan päälle. Käytä sitä, kun edustaja tarvitsee:

- 🕵️ Tunnista yhteensopivat paikalliset tekoälyasiakkaat
- 📋 Tarkista asennetut taidot
- 👁️ Esikatsele taitojen asennusta tai poistoa (kuivakäynti)
- 📦 Käytä paikallista taitoa asennusta tai poistoa
- ⚙️ Kirjoita paikallinen MCP-määritystiedosto esikatselun jälkeen

Se erottaa tarkoituksella kaksi huolenaihetta:

-**taitojen asennuskohteet**
  asiakkaita, joilla on vakaa osaamishakemisto, joka voi käyttää "install_skills" -määritettä
-**MCP-määrityskohteet**
  asiakkaat tai IDE:t, joilla on vakaa dokumentoitu MCP-konfiguraatiomuoto, vaikka niillä ei olisi taitohakemistoa---

## 🔌 Transports

| Kuljetus | Pöytäkirja | Käyttötapaus |
|:----------|:---------|:----------|
| "stdio" | Putki | Suora asiakasintegraatio |
| "virta" | Streamable HTTP | Nykyaikaiset HTTP-asiakkaat |
| "sse" | Palvelimen lähettämät tapahtumat | Vanhat asiakkaat |---

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

> Kaikki komennot asettavat automaattisesti arvoksi OMNI_SKILLS_MCP_MODE=local.---

## 🛠️ Local Tools

Kun paikallinen tila on käytössä, nämä lisätyökalut tulevat saataville:

| Työkalu | Kuvaus | Oletus |
|:-----|:------------|:---------|
| 🕵️ `detect_clients` | Etsi tekoälyasiakkaita ja heidän taito-/määrityspolkuja | — |
| 📋 `list_installed_skills` | Tarkista asennetut taidot tietylle asiakkaalle | — |
| 📦 `install_skills` | Asenna taidot asiakkaan osaamishakemistoon | 🔍 kuivaajo |
| 🗑️ `poista_taidot` | Poista asennetut taidot asiakkaasta | 🔍 kuivaajo |
| ⚙️ `configure_client_mcp` | Kirjoita MCP-konfiguraatio tietylle asiakkaalle | 🔍 kuivaajo |

> ⚠️ "install_skills", "remove_skills" ja "configure_client_mcp" ovat oletuksena**dry-run**, kun "dry_run" jätetään pois.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Asiakas | Polku |
|:-------|:-----|
| 🔵 Claude Code | "~/.claude/skills" |
| 🔵 Kursori | "~/.kursori/taidot" |
| 🟡 Gemini CLI | "~/.gemini/skills" |
| 🟣 Antigravitaatio | "~/.gemini/antigravity/skills" |
| 🟢 Kiro | "~/.kiro/skills" |
| 🔴 Codex CLI | "~/.codex/skills" tai "$CODEX_HOME/skills" |
| ⚪ OpenCode | `<työtila>/.opencode/skills' |

Nämä 7 kohdetta ovat tämän päivän ainoat ensiluokkaiset asennuskohteet.### ⚙️ MCP Config Files

| Kohde | Muoto |
|:-------|:--------|
| `~/.claude/settings.json` | Claude Code -asetukset JSON |
| `<työtila>/.claude/settings.json` | Claude-projektiasetukset JSON |
| `~/.claude.json` | Vanha Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (käyttöjärjestelmäkohtainen) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<työtila>/.cursor/mcp.json` | Kohdistimen työtila JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini-käyttäjä JSON (`mcpServers`) |
| `<työtila>/.gemini/settings.json` | Gemini-projekti JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravity JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiron käyttäjä JSON (`mcpServers`) |
| `<työtila>/.kiro/settings/mcp.json` | Kiro-projektin JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<työtila>/.mcp.json` | JSON (`mcpServers`) |
| `<työtila>/opencode.json` | OpenCode-työtila JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode-käyttäjän JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<työtila>/.github/mcp.json` | GitHub Copilot -varasto JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI-käyttäjä JSON (`mcp`) |
| `<työtila>/kilo.json` | Kilo CLI-projekti JSON (`mcp`) |
| `<työtila>/.kilocode/mcp.json` | Kilo Code -työtila JSON (`mcpServers`) |
| `<työtila>/.continue/mcpServers/omni-skills.yaml | Jatka työtilaa YAML (`mcpServers`) |
| `<työtila>/.junie/mcp/mcp.json` | Junie-projekti JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie-käyttäjä JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML ("laajennukset") |
| `<työtila>/.zed/settings.json` | Zed-työtila JSON ("context_servers") |
| `<työtila>/.vscode/mcp.json` | JSON (`palvelimet`) |
| `~/.config/Code/User/mcp.json` | VS-koodin käyttäjä JSON (`palvelimet`) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders -käyttäjä JSON (`palvelimet`) |
| `<työtila>/.devcontainer/devcontainer.json` | Sisäkkäinen Dev Container JSON (`customizations.vscode.mcp.servers`) |
| Asiakkaan juuren `mcp.json` | JSON (asiakaskohtainen muoto) |

Se antaa sivuvaunulle:

-**16 konfigurointikykyistä asiakasta tai IDE:tä**
-**33 ensiluokkaista kohdepolkua**
-**19 muotoprofiilia**

Tämänhetkinen ensimmäisen luokan asetusten peittoalueet:

- Claude Code ja Claude Desktop
- Kursori
- VS Code ja Dev Containers
- Gemini CLI
- Antigravitaatio
- Kiro
- Codex CLI
- Jatka
- Junie
- Purjelautailu
- Hanhi
- OpenCode
- Cline
- GitHub Copilot CLI
- kilokoodi
- Zed

Manuaaliset tai vain katkelmat sisältävät ehdokkaat ovat edelleen tarkoituksella ensimmäisen luokan kirjoitussarjan ulkopuolella, kunnes heidän julkisen konfigurointisopimuksensa ovat riittävän vakaat.### 🧭 Expansion Policy

Omni Skills käsittelee asiakastukea nyt kolmitasoisena mallina:

1.**asennuskelpoinen**
   Vakaa taitohakemisto on olemassa, joten CLI ja sivuvaunu voivat asentaa taidot suoraan.
2.**konfiguroitavissa**
   Vakaa, dokumentoitu MCP-konfiguraatiomuoto on olemassa, joten "config-mcp" voi esikatsella ja kirjoittaa ensiluokkaisen tiedoston.
3.**manuaalinen tai vain katkelma**
   Tuote tukee selvästi MCP:tä jossain muodossa, mutta julkiset dokumentit eivät vielä oikeuta turvallista automaattista kirjoittamista.

Tästä syystä asiakkaat, kuten JetBrains AI Assistant, pysyvät manuaalisina/vain katkelmina, kun taas Roo Code ja Postman pysyvät ensiluokkaisen kirjoittajajoukon ulkopuolella, kunnes heidän turvallinen automaattinen yhdistämistarina on tarpeeksi vahva tähän projektiin.---

## 🔒 Allowlist Model

Paikallinen sivuvaunu kirjoittaa vain**eksplisiittisen sallittujen luettelon**alle.### 🟢 Default allowlist:

- Tunnetut asiakasjuuret `$HOME`:sta
- `~/.codeium` Windsurf-käyttäjämäärityksiä varten
- `~/.copilot` GitHub Copilot CLI:lle
- `~/.cline` Cline CLI:lle
- `~/.config/goose` Goose configille
- "~/.config/kilo" ja "~/.config/opencode" Kilo/OpenCode CLI -määrityksessä
- "$CODEX_HOME" (tai "~/.codex", jos ei ole asetettu)
- Nykyisen työtilan juuri
- "<työtila>/.agentit".
- <työtila>/.github
- `<työtila>/.kilokoodi`
- `<työtila>/.opencode`
- <työtila>/.zed
- `<työtila>/.jatka`
- `<työtila>/.vscode`### ➕ Extend the allowlist:

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

Sivuvaunun tukema CLI-kääre pitää MCP-määritysten luomisen käytettävissä ilman suoria JSON-RPC-kutsuja:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Oletustoiminto on vain esikatselu. "--write" käyttää määritystä ratkaistuun kohdepolkuun sallittujen luettelon alla.### 🌊 Windsurf

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

Configure_client_mcp-työkalu voi myös kirjoittaa Claude-kohtaisia asetuksia, kun hyväksyt:

- "allowed_mcp_servers".
- denied_mcp_servers
- "permissions_deny".
- "enable_all_project_mcp_servers".### 💜 VS Code sandboxing

VS Code- ja Dev Container -kohteissa `configure_client_mcp` voi myös kirjoittaa:

- "hiekkalaatikko käytössä".
- "sandbox.filesystem.allowWrite".
- "sandbox.network.allowHosts".
- `dev.watch`
- "dev.debug.type".

Tämä vastaa nykyistä VS-koodia koskevia ohjeita paikallisten stdio-MCP-palvelimien hiekkalaatikkoon.### 🧰 Cross-Client Entry Options

`configure_client_mcp` tukee nyt monipuolisempia merkintöjen metatietoja tuetuissa profiileissa:

- "otsikot".
- "env".
- "env_file".
- "cwd".
- `timeout_ms`
- "kuvaus".
- "include_tools".
- "poissulkea_työkalut".
- "pois käytöstä".
- "luottamus".

Profiilikohtaiset vaihtoehdot:

- Claude: "allowed_mcp_servers", "denied_mcp_servers", "permissions_deny", "enable_all_project_mcp_servers"
- Kaksoset: "mcp_allowed_servers", "mcp_excluded_servers"
- Kiro: `disabled_tools`, `auto_approve`
- VS-koodi ja kehittäjäsäilöt: "dev_watch", "dev_debug_type"### 📋 Generated Recipes

"configure_client_mcp" palauttaa "reseptit" esikatselun tai käytetyn konfiguraation rinnalla.

Nämä reseptit ovat asiakastietoisia opastuslohkoja, esimerkiksi:

- `claude mcp add ... --scope user|projekti`
- `gemini mcp add ... --scope user|projekti`
- "codex mcp add ...".
- manuaaliset tiedostojen muokkausreseptit Cursorille, VS Codelle, Kirolle ja Claude Desktopille

Kokonaisstrategia on nyt tarkoituksella konservatiivinen:

- käytä uudelleen pientä joukkoa kanonisia konfiguraatioperheitä, jos mahdollista
- säilytä tilauskirjoittajat vain, kun viralliset asiakirjat vaativat erillisen muodon
- Vältä keksimästä automaattisia kirjoittajia dokumentoimattomille kohteille---

## 🔐 Hosted HTTP Hardening

HTTP-siirrot tukevat samoja env-ohjattuja ohjaimia kuin luettelosovellusliittymä:

| Muuttuja | Tarkoitus |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Kuljetustunnuksen todennus |
| `OMNI_SKILLS_HTTP_API_KEYS` | Pilkuilla erotetut API-avaimet |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Vain järjestelmänvalvojan suorituksenaikainen itsetutkiskelu |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Pyyntöjen enimmäismäärä ikkunaa kohti |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Nopeusrajaikkuna ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Ota tarkastusloki käyttöön |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Kirjoita tarkastusloki tiedostoon |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS' | Rajoita selaimen alkuperää |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Rajoita sallittuja lähde-IP-osoitteita |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Palauta "503" muille kuin järjestelmänvalvojan reiteille, ei-terveysreiteille |

> 🟢 `/healthz` pysyy auki. "/mcp", "/sse" ja "/messages" edellyttävät todennusta, kun ne ovat käytössä. `/admin/runtime' vaatii järjestelmänvalvojan tunnuksen, kun se on määritetty.---

## 🌍 Official Docs That Shape Support Decisions

Nykyinen kirjoitusjoukko ja vain manuaaliset rajat tarkistettiin virallisten tuoteasiakirjojen perusteella, mukaan lukien:

- Antrooppinen Claude Code MCP
- OpenAI Codex CLI ja OpenAI Docs MCP
- Kohdistin MCP-asiakirjat
- Jatka MCP-asiakirjoja
- Kiro MCP -asiakirjat
- OpenCode MCP-asiakirjat
- Cline MCP -asiakirjat
- Kilo Code MCP-asiakirjat
- GitHub Copilot CLI -dokumentit
- Zed MCP -asiakirjat
- VS Code MCP -asiakirjat
- JetBrains AI Assistant MCP -dokumentit

Näiden asiakirjojen vuoksi jotkut asiakkaat saavat ensiluokkaisia automaattisia kirjoittajia, kun taas toiset ovat toistaiseksi vain katkelmia.