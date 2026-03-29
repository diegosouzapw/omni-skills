# Client Support Matrix (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Ez a dokumentum három bemeneten keresztül követi nyomon az Omni Skills gyakorlati ügyfélfelületét:

1. a „9router” irányítópult készlete a „/home/diegosouzapw/dev/proxys/9router” mappában
2. a jelenlegi Omni Skills MCP oldalkocsis megvalósítás
3. minden ügyfél vagy IDE aktuális hivatalos dokumentációja

Ez az igazság működő forrása annak eldöntésére, hogy mely ügyfelek kapnak első osztályú "config-mcp" támogatást, melyek maradnak csak manuálisak, és melyek csak jelöltek.---

## Scope

Ez a mátrix az**ügyfélkonfigurációról szól az MCP-hez**.

Nem ugyanaz, mint:

- készség telepítés támogatása
- API kompatibilitás
- A2A támogatás
- ACP vagy más nem MCP protokollok

A mátrix egyes termékei MCP-t használnak, de**nincs**értelmes „készségkönyvtárral”, így csak konfigurációs cél támogatást kapnak.---

## 9router Inventory

A "9router" irányítópult jelenleg a következő CLI-eszközöket vagy IDE-klienseket csoportosítja:

- Claude Code
- OpenAI Codex
- Gyári droid
- OpenClaw
- Kurzor
- Cline
- Kilo Code
- Folytasd
- Antigravitáció
- GitHub másodpilóta
- OpenCode
- Kiro AI

Helyi források:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Ezek a kliensek most már stabil, egyértelmű történettel rendelkeznek az Omni Skillsben a `config-mcp --target...` segítségével.

Jelenlegi megvalósítási összegek:

-**7 telepítésre képes kliens**
-**16 konfigurálható kliens**
-**33 első osztályú konfigurációs cél**
-**19 konfigurációs profil**

| Ügyfél | Állapot | Config Targets | Megjegyzések |
|:-------|:--------|:----------------|:-------|
| Claude Code | ✅ Első osztályú | "munkaterület", "claude-projekt", "claude-user-settings", "claude-user", "claude-user-legacy", "claude-desktop" | Beírt "mcpServers" konfiguráció Claude-specifikus engedélyezési/megtagadási vezérlőkkel |
| Kurzor | ✅ Első osztályú | `cursor-workspace`, `cursor-user` | JSON "mcpServers" célok |
| VS kód | ✅ Első osztályú | "vscode", "vscode-user", "vscode-insiders-user", "devcontainer" | A "szerverek" gyökérkönyvtárát használja |
| Gemini CLI | ✅ Első osztályú | `gemini-user`, `gemini-workspace` | JSON beállítások + globális MCP engedélyezési/kizárási vezérlők |
| Antigravitáció | ✅ Első osztályú | "antigravitációs felhasználó" | JSON "mcpServers" cél |
| Kiro | ✅ Első osztályú | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Kiro-specifikus letiltott/automatikusan jóváhagyott mezők |
| Codex CLI | ✅ Első osztályú | "kódex-felhasználó" | TOML `mcp_servers` táblák |
| Folytatás | ✅ Első osztályú | `continue-workspace` | Dedikált YAML szerver dokumentum |
| Szörf | ✅ Első osztályú | "szörf-felhasználó" | JSON „mcpServers” cél „serverUrl” bejegyzésekkel |
| OpenCode | ✅ Első osztályú | `opencode-workspace`, `opencode-user` | Hivatalos „opencode.json” / felhasználói konfiguráció a legfelső szintű „mcp” |
| Cline | ✅ Első osztályú | `klinika-felhasználó` | `cline_mcp_settings.json` és `mcpServers` |
| GitHub Copilot CLI | ✅ Első osztályú | `másodpilóta-felhasználó`, `másodpilóta-repo` | "mcp-config.json" vagy repo-hatókörű ".github/mcp.json" |
| Kilo Code | ✅ Első osztályú | "kilo-felhasználó", "kiló-projekt", "kiló-munkaterület" | A Kilo CLI a `kilo.json'-t használja; A munkaterület-integráció a `.kilocode/mcp.json` | fájlt használja
| Zed | ✅ Első osztályú | "zed-workspace" | `.zed/settings.json` és `context_servers` |
| Junie | ✅ Első osztályú | "junie-project", "junie-user" | ".junie/mcp/mcp.json" vagy "~/.junie/mcp/mcp.json" az "mcpServers" használatával |
| liba | ✅ Első osztályú | "lúd-felhasználó" | `~/.config/goose/config.yaml` egy legfelső szintű `extensions` objektumot használva az állandó MCP-bővítményekhez |---

## Current Gaps

Ezek a `9router' kliensek**nem**még első osztályú írói célpontok az Omni Skills terén:

| Ügyfél | Jelenlegi állapot | Miért |
|:-------|:---------------|:----|
| Gyári droid | ⚠️ Csak kézi/egyedi | Az áthaladás során nem található stabil nyilvános MCP-konfigurációs alakzat az elsődleges dokumentumokban |
| OpenClaw | ⚠️ Csak kézi/egyedi | Ugyanaz a probléma, mint a Factory Droid |

Az oldalkocsi továbbra is használható "--file" vagy egyéni elérési utakkal haladó felhasználók számára, de az Omni Skillsnek nem szabad első osztályú írókat feltalálnia stabil nyilvános konfigurációs dokumentumok nélkül.

Két szomszédos termék már jobban érthető, de szándékosan még mindig nem számítanak az első osztályú automatikus íróknak:

| Ügyfél | Jelenlegi állapot | Miért |
|:-------|:---------------|:----|
| JetBrains AI-asszisztens | 🟡 Kézikönyv/részlet | Hivatalos MCP-támogatás létezik, de a dokumentált munkafolyamat UI-vezérelt/import-vezérelt, nem pedig stabil nyilvános fájlcél |
| Postás | 🟡 Kézikönyv/részlet | Hivatalos MCP-támogatás létezik, de a konfigurációt a termék UX-jén belül kezelik, nem pedig egy stabil nyilvános fájlcélt |
| Roo Code | 🟡 jelölt | Nyilvános MCP-dokumentumok léteznek, de egy erős, több platformra kiterjedő fájlútvonal-szerződést még mindig meg kell erősíteni az író hozzáadása előtt |---

## Support Policy

Az Omni Skills most ezt a szabálykészletet követi:

1.**Telepíthető**, ha létezik stabil képességkönyvtár.
2.**Config-capable**, ha létezik stabil nyilvános MCP konfigurációs fájlformátum.
3.**Kézi/csak kivonatosan**, ha a termék támogatja az MCP-t, de a közbeszerzési szerződés UI-első, importálás-első, vagy még mindig túl instabil.

Ez egyben a gyakorlati válasz is az egyik korábbi architektúra kérdésre: a projektnek csak ott kell növekednie az első osztályú írók számára, ahol létezik egy stabil nyilvános formátum, egyébként pedig a kanonikus exportcsaládok, valamint a receptek és kivonatok kisebb halmazára kell támaszkodnia.### Canonical config families already in use

- JSON "mcpServers".
- JSON "szerverek".
- JSON "context_servers".
- YAML "mcpServers".
- TOML `[mcp_servers]`### Additional candidates worth watching

| Kliens / IDE | ajánlás | Ok |
|:-------------|:----------------|:--------|
| JetBrains AI-asszisztens | 🟡 Tartsa meg a kézikönyvet/részletet egyelőre | A hivatalos támogatás valós, de az UX továbbra is termékkezelésű, nem pedig fájlszerződéses |
| Postás | 🟡 Tartsa meg a kézikönyvet/részletet egyelőre | A hivatalos beállítás az UI-first és a munkaterület által kezelt, nem pedig a fájlszerződés alapján |
| Roo Code | 🟡 Vizsgálja meg a következőt | Ígéretes MCP támogatás, de az író biztonsága az erősebb konfigurációs útvonal megerősítésétől függ |
| VS Code Copilot Chat | 🟢 Közvetve már lefedett | Az alapul szolgáló VS Code MCP fájlhelyek már támogatottak |
| Zed ACP / Agent szerverek | 🟡 Külön pálya | Ez az ACP/agent-server terület, nem csak az MCP konfigurációk írása |---

## Official Sources Used

A fenti döntéseket összevettük a jelenlegi elsődleges forrásokkal:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Az MCP folytatása](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Goose konfigurációs fájlok](https://block.github.io/goose/docs/guides/config-files/)
- [Goose Session Extensions](https://block.github.io/goose/docs/guides/session-extensions/)
- [Postman MCP beállítása](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP Extension Guide](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Official MCP Registry](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

A jelenlegi Omni Skills oldalkocsi szándékosan három támogatási szintet különböztet meg:

-**telepítésre képes kliensek**
  - rendelkezik egy ismert készségkönyvtárral, és használhatja az "install_skills" paramétert
-**konfigurálható kliensek**
  - stabil konfigurációs céllal rendelkezik, és használhatja a `configure_client_mcp` paramétert
-**kézi/részletes kliensek**
  - dokumentált, de még biztonságos első osztályú fájlíró nélkül

Ez a szétválasztás megőrzi a terméket őszintén.

Nem minden MCP-képes terméket kell készség-telepítési célpontként kezelni.
A bővítési szakasz egyelőre befejezettnek tekinthető: a jövőbeli kiegészítések csak akkor érhetnek el, ha ugyanazt a közszerződéses sávot törlik, amelyet a Goose, a Junie, a Continue és a Windsurf most.