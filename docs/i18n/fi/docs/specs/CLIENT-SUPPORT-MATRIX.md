# Client Support Matrix (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Tämä asiakirja seuraa Omni Skillsin käytännöllistä asiakastilaa kolmen syötteen kautta:

1. "9router" hallintapaneelin mainosjakauma kohteessa "/home/diegosouzapw/dev/proxys/9router"
2. nykyinen Omni Skills MCP -sivuvaunutoteutus
3. kunkin asiakkaan tai IDE:n nykyiset viralliset asiakirjat

Se on toimiva totuuden lähde päätettäessä, mitkä asiakkaat saavat ensiluokkaista "config-mcp"-tukea, mitkä pysyvät vain manuaalisina ja mitkä ovat vain ehdokkaita.---

## Scope

Tämä matriisi koskee**MCP:n**asiakasmäärityksiä.

Se ei ole sama kuin:

- ammattitaitoinen asennustuki
- API-yhteensopivuus
- A2A tuki
- ACP tai muut ei-MCP-protokollat

Jotkut matriisin tuotteet kuluttavat MCP:tä, mutta niillä**ei**ole merkityksellistä "taitohakemistoa", joten ne saavat vain konfigurointikohdetuen.---

## 9router Inventory

"9router"-koontinäyttö ryhmittelee tällä hetkellä nämä CLI-työkalut tai IDE-asiakkaat:

- Claude Code
- OpenAI Codex
- Tehdasdroidi
- OpenClaw
- Kursori
- Cline
- kilokoodi
- Jatka
- Antigravitaatio
- GitHub Copilot
- OpenCode
- Kiro AI

Paikalliset lähteet:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Näillä asiakkailla on nyt vakaa, selkeä tarina Omni Skillsissa `config-mcp --target...` kautta.

Tämänhetkinen toteutussummat:

-**7 asennuskykyistä asiakasta**
-**16 konfigurointikykyistä asiakasta**
-**33 ensiluokkaista määrityskohdetta**
-**19 konfigurointiprofiilia**

| Asiakas | Tila | Config Targets | Huomautuksia |
|:-------|:--------|:----------------|:-------|
| Claude Code | ✅ Ensiluokkainen | "työtila", "claude-projekti", "claude-user-settings", "claude-user", "claude-user-legacy", "claude-desktop" | Kirjoitettu "mcpServers"-määritys Claude-kohtaisilla salli-/kielto-ohjaimilla |
| Kursori | ✅ Ensiluokkainen | `kursori-työtila`, `kursori-käyttäjä` | JSON "mcpServers" -kohteet |
| VS-koodi | ✅ Ensiluokkainen | "vscode", "vscode-user", "vscode-insiders-user", "devcontainer" | Käyttää palvelinjuurta |
| Gemini CLI | ✅ Ensiluokkainen | "gemini-user", "gemini-workspace" | JSON-asetukset + yleiset MCP:n sallivat/poissulkevat ohjaimet |
| Antigravitaatio | ✅ Ensiluokkainen | "antigravitaatiokäyttäjä" | JSON "mcpServers" kohde |
| Kiro | ✅ Ensiluokkainen | "kiro-user", "kiro-työtila", "kiro-user-legacy" | Kiro-kohtaiset pois käytöstä/automaattisesti hyväksytyt kentät |
| Codex CLI | ✅ Ensiluokkainen | `codex-käyttäjä` | TOML mcp_servers -taulukot |
| Jatka | ✅ Ensiluokkainen | "jatka-työtila" | YAML-palvelinasiakirja |
| Purjelautailu | ✅ Ensiluokkainen | "purjelautailija" | JSON "mcpServers" kohde "serverUrl"-merkinnöillä |
| OpenCode | ✅ Ensiluokkainen | `opencode-workspace`, `opencode-user` | Virallinen `opencode.json` / user config käyttäen ylätason `mcp` |
| Cline | ✅ Ensiluokkainen | `klinikan käyttäjä` | "cline_mcp_settings.json" ja "mcpServers" |
| GitHub Copilot CLI | ✅ Ensiluokkainen | "copilot-user", "copilot-repo" | "mcp-config.json" tai reposcoped ".github/mcp.json" |
| Kilo-koodi | ✅ Ensiluokkainen | "kilo-käyttäjä", "kilo-projekti", "kilo-työtila" | Kilo CLI käyttää `kilo.json'; työtilan integrointi käyttää koodia `.kilocode/mcp.json` |
| Zed | ✅ Ensiluokkainen | "zed-workspace" | ".zed/settings.json" ja "context_servers" |
| Junie | ✅ Ensiluokkainen | "junie-project", "junie-user" | ".junie/mcp/mcp.json" tai "~/.junie/mcp/mcp.json" käyttämällä "mcpServers"-komentoa |
| Hanhi | ✅ Ensiluokkainen | "hanhikäyttäjä" | `~/.config/goose/config.yaml` käyttämällä huipputason `extensions`-objektia pysyviä MCP-laajennuksia varten |---

## Current Gaps

Nämä `9routerin` asiakkaat**eivät**ole vielä ensiluokkaisia kirjoittajien kohteita Omni Skillsissa:

| Asiakas | Nykyinen tila | Miksi |
|:-------|:---------------|:----|
| Tehdasdroidi | ⚠️ Manuaalinen/vain mukautettu | Ensisijaisista asiakirjoista ei löytynyt vakaata julkista MCP-konfiguraatiomuotoa tämän passin aikana |
| OpenClaw | ⚠️ Manuaalinen/vain mukautettu | Sama ongelma kuin Factory Droid |

Sivuvaunua voidaan edelleen käyttää "--file"- tai mukautettujen polkujen kanssa edistyneille käyttäjille, mutta Omni Skillsin ei pitäisi keksiä ensiluokkaisia ​​kirjoittajia ilman vakaita julkisia konfigurointidokumentteja.

Kaksi vierekkäistä tuotetta on nyt ymmärretty paremmin, mutta silti tarkoituksella jäävät väliin ensiluokkaisista automaattisista kirjoittajista:

| Asiakas | Nykyinen tila | Miksi |
|:-------|:---------------|:----|
| JetBrains AI Assistant | 🟡 Manuaali/katkelma | Virallinen MCP-tuki on olemassa, mutta dokumentoitu työnkulku on käyttöliittymä-/tuontiohjattu vakaan julkisen tiedoston kohteen sijaan |
| Postimies | 🟡 Manuaali/katkelma | Virallinen MCP-tuki on olemassa, mutta määritystä hallitaan tuotteen UX:n sisällä vakaan julkisen tiedostokohteen sijaan |
| Roo Code | 🟡 Ehdokas | Julkisia MCP-dokumentteja on olemassa, mutta vahva useiden alustojen välinen tiedostopolkusopimus vaatii vielä vahvistuksen ennen kirjoittajan lisäämistä |---

## Support Policy

Omni Skills noudattaa nyt tätä sääntöä:

1.**Asennuskelpoinen**, jos vakaa osaamishakemisto on olemassa.
2.**Config-capable**, jos vakaa julkinen MCP-määritystiedostomuoto on olemassa.
3.**Manuaalinen/vain katkelma**, jos tuote tukee MCP:tä, mutta julkinen sopimus on UI-ensin, tuonti-ensin tai liian epävakaa.

Tämä on myös käytännöllinen vastaus yhteen aiemmista arkkitehtuurikysymyksistä: hankkeen tulisi jatkaa ensiluokkaisten kirjoittajien kasvattamista vain siellä, missä on vakaa julkinen muoto, ja muuten tukeutua pienempään joukkoon kanonisia vientiperheitä sekä reseptejä ja katkelmia.### Canonical config families already in use

- JSON "mcpServers".
- JSON "palvelimet".
- JSON "context_servers".
- YAML "mcpServers".
- TOML `[mcp_servers]`### Additional candidates worth watching

| Asiakas / IDE | Suositus | Syy |
|:-------------|:----------------|:--------|
| JetBrains AI Assistant | 🟡 Säilytä käyttöohje/katkelma toistaiseksi | Virallinen tuki on todellista, mutta käyttöliittymä on edelleen tuotehallittu eikä tiedostosopimus ensin |
| Postimies | 🟡 Säilytä käyttöohje/katkelma toistaiseksi | Virallinen asennus on UI-first ja työtilan hallinnassa eikä tiedostosopimus-first |
| Roo Code | 🟡 Tutki seuraavaksi | Lupaava MCP-tuki, mutta kirjoittajan turvallisuus riippuu vahvemmasta konfigurointipolun vahvistuksesta |
| VS Code Copilot Chat | 🟢 Käsitelty jo epäsuorasti | Taustalla olevat VS Coden MCP-tiedostojen sijainnit ovat jo tuettuja |
| Zed ACP / agenttipalvelimet | 🟡 Erillinen rata | Tämä on ACP/agent-server-alue, ei vain MCP-asetusten kirjoittaminen |---

## Official Sources Used

Yllä olevat päätökset on tarkistettu nykyisiin ensisijaisiin lähteisiin verrattuna:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Jatka MCP:tä](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Goose Configuration Files](https://block.github.io/goose/docs/guides/config-files/)
- [Goose Session Extensions](https://block.github.io/goose/docs/guides/session-extensions/)
- [Postman MCP:n asennus](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [VS Coden MCP-laajennusopas](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Virallinen MCP-rekisteri](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Nykyinen Omni Skills -sivuvaunu erottaa tarkoituksella kolme tukitasoa:

-**asennuskykyiset asiakkaat**
  - sinulla on tunnettu taitohakemisto ja osaa käyttää "install_skills".
-**konfigurointikykyiset asiakkaat**
  - niillä on vakaa konfigurointikohde ja ne voivat käyttää `configure_client_mcp`
-**manuaaliset/katkelmat**
  - dokumentoitu, mutta ilman turvallista ensiluokkaista tiedostokirjoitinta

Tämä erottelu pitää tuotteen rehellisenä.

Jokaista MCP-yhteensopivaa tuotetta ei pidä käsitellä taitojen asennuskohteena.
Laajennusvaiheen katsotaan toistaiseksi päättyneen: tulevien lisäysten pitäisi laskeutua vain, jos ne tyhjentävät saman julkisen sopimuksen baarin, jonka Goose, Junie, Continue ja Windsurf nyt tyhjentävät.