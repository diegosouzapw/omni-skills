# Client Support Matrix (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Tento dokument sleduje praktický klientsky povrch pre Omni Skills prostredníctvom troch vstupov:

1. inventár hlavného panela `9router` v `/home/diegosouzapw/dev/proxys/9router`
2. súčasná implementácia postranného vozíka Omni Skills MCP
3. aktuálna oficiálna dokumentácia pre každého klienta alebo IDE

Je to pracovný zdroj pravdy pri rozhodovaní o tom, ktorí klienti získajú prvotriednu podporu `config-mcp`, ktorí zostanú iba manuálne a ktorí sú len kandidátmi.---

## Scope

Táto matica sa týka**konfigurácie klienta pre MCP**.

Nie je to to isté ako:

- podpora pri inštalácii zručností
- Kompatibilita API
- Podpora A2A
- ACP alebo iné protokoly iné ako MCP

Niektoré produkty v matici spotrebúvajú MCP, ale**nemajú**zmysluplný „adresár zručností“, takže dostávajú iba podporu konfigurácie.---

## 9router Inventory

Ovládací panel `9router` momentálne zoskupuje tieto nástroje CLI alebo klientov IDE:

- Claude Code
- Kódex OpenAI
- Továrenský Droid
- OpenClaw
- Kurzor
- Cline
- Kilový kód
- Pokračuj
- Antigravitácia
- GitHub Copilot
- OpenCode
- Kiro AI

Miestne zdroje:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Títo klienti majú teraz stabilný, explicitný príbeh v Omni Skills cez `config-mcp --target ...`.

Súčasné súčty implementácií:

-**7 klientov s možnosťou inštalácie**
-**16 klientov s možnosťou konfigurácie**
-**33 prvotriednych konfiguračných cieľov**
-**19 konfiguračných profilov**

| Klient | Stav | Konfigurovať ciele | Poznámky |
|:-------|:-------|:---------------|:------|
| Claude Code | ✅ Prvotriedne | `pracovný priestor`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Zadali ste konfiguráciu `mcpServers` s ovládacími prvkami povolenia/odmietnutia špecifickými pre Claude |
| Kurzor | ✅ Prvotriedne | `cursor-workspace`, `cursor-user` | Ciele JSON `mcpServers` |
| VS kód | ✅ Prvotriedne | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Používa root servera |
| Gemini CLI | ✅ Prvotriedne | `gemini-user`, `gemini-workspace` | Nastavenia JSON + globálne ovládacie prvky povolenia/vylúčenia MCP |
| Antigravitácia | ✅ Prvotriedne | "antigravitačný užívateľ" | Cieľ JSON `mcpServers` |
| Kiro | ✅ Prvotriedne | "kiro-user", "kiro-workspace", "kiro-user-legacy" | Polia vypnuté/automatické schválenie špecifické pre Kiro |
| Codex CLI | ✅ Prvotriedne | `codex-user` | TOML tabuľky `mcp_servers` |
| Pokračovať | ✅ Prvotriedne | "pokračovať-pracovný priestor" | Vyhradený dokument YAML servera |
| Windsurfing | ✅ Prvotriedne | "používateľ windsurfingu" | Cieľ JSON `mcpServers` s položkami `serverUrl` |
| OpenCode | ✅ Prvotriedne | `opencode-workspace`, `opencode-user` | Oficiálna konfigurácia `opencode.json` / používateľská konfigurácia pomocou `mcp` najvyššej úrovne |
| Cline | ✅ Prvotriedne | `cline-user` | `cline_mcp_settings.json` s `mcpServers` |
| GitHub Copilot CLI | ✅ Prvotriedne | `copilot-user`, `copilot-repo` | `mcp-config.json` alebo repo-scoped `.github/mcp.json` |
| Kilový kód | ✅ Prvotriedne | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI používa `kilo.json`; integrácia pracovného priestoru používa `.kilocode/mcp.json` |
| Zed | ✅ Prvotriedne | "pracovný priestor zed" | `.zed/settings.json` s `context_servers` |
| Junie | ✅ Prvotriedne | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` alebo `~/.junie/mcp/mcp.json` pomocou `mcpServers` |
| Hus | ✅ Prvotriedne | „používateľ hus“ | `~/.config/goose/config.yaml` pomocou objektu `extensions` najvyššej úrovne pre trvalé rozšírenia MCP |---

## Current Gaps

Títo klienti z `9router`**zatiaľ nie sú**cieľom prvotriednych spisovateľov v Omni Skills:

| Klient | Súčasný stav | Prečo |
|:-------|:--------------|:----|
| Továrenský Droid | ⚠️ Len manuálne/vlastné | Počas tohto prechodu sa v primárnych dokumentoch nenašiel žiadny stabilný verejný tvar konfigurácie MCP |
| OpenClaw | ⚠️ Len manuálne/vlastné | Rovnaký problém ako Factory Droid |

Postranný vozík možno stále používať s `--file` alebo vlastnými cestami pre pokročilých používateľov, ale Omni Skills by nemali vymýšľať prvotriednych spisovateľov bez stabilných verejných konfiguračných dokumentov.

Dva susediace produkty sú teraz lepšie pochopiteľné, ale stále sa zámerne zastavujú pred prvotriednymi automatickými zapisovačmi:

| Klient | Súčasný stav | Prečo |
|:-------|:--------------|:----|
| Asistent AI JetBrains | 🟡 Manuál/úryvok | Oficiálna podpora MCP existuje, ale zdokumentovaný pracovný tok je riadený používateľským rozhraním/importom a nie stabilným cieľom verejného súboru |
| Poštár | 🟡 Manuál/úryvok | Existuje oficiálna podpora MCP, ale konfigurácia je spravovaná v rámci produktu UX a nie stabilným verejným cieľom súboru |
| Roo Code | 🟡 Kandidát | Verejné dokumenty MCP existujú, ale silná medziplatformová zmluva o ceste k súboru ešte potrebuje potvrdenie pred pridaním zapisovača |---

## Support Policy

Omni Skills sa teraz riadi týmto súborom pravidiel:

1.**Možnosť inštalácie**, ak existuje stabilný adresár zručností.
2.**Config-capable**, ak existuje stabilný verejný formát konfiguračného súboru MCP.
3.**Manual/snippet-only**, ak produkt podporuje MCP, ale verejná zákazka je na prvom mieste používateľského rozhrania, importuje sa alebo je stále príliš nestabilná.

Toto je tiež praktická odpoveď na jednu z predchádzajúcich otázok o architektúre: projekt by mal udržiavať rast prvotriednych autorov iba tam, kde existuje stabilný verejný formát, a inak by sa mal opierať o menšiu množinu kanonických exportných rodín plus recepty a úryvky.### Canonical config families already in use

- JSON `mcpServers`
- „servery“ JSON
- JSON `kontextové_servery`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Klient / IDE | Odporúčanie | Dôvod |
|:-------------|:---------------|:-------|
| Asistent AI JetBrains | 🟡 Zatiaľ si ponechajte príručku/úryvok | Oficiálna podpora je skutočná, ale UX je stále riadené produktom, a nie súborom na prvom mieste |
| Poštár | 🟡 Zatiaľ si ponechajte príručku/úryvok | Oficiálne nastavenie je na prvom mieste používateľské rozhranie a spravuje sa pracovný priestor, a nie súbor na základe zmluvy |
| Roo Code | 🟡 Vyšetrovať ďalej | Sľubná podpora MCP, ale bezpečnosť zapisovača závisí od silnejšieho potvrdenia konfiguračnej cesty |
| VS Code Copilot Chat | 🢢 Už nepriamo pokryté | Základné umiestnenia súborov VS Code MCP sú už podporované |
| Zed ACP / servery agentov | 🟡 Samostatná trať | Toto je územie ACP/agent-server, nie len zápis konfigurácie MCP |---

## Official Sources Used

Vyššie uvedené rozhodnutia boli porovnané so súčasnými primárnymi zdrojmi:

– [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Pokračovať v MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
– [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
– [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Konfiguračné súbory Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Goose Session Extensions](https://block.github.io/goose/docs/guides/session-extensions/)
– [Nastavenie MCP Postman](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
– [Sprievodca rozšírením VS Code MCP](https://code.visualstudio.com/api/extension-guides/ai/mcp)
– [Oficiálny register MCP](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Súčasná sajdkára Omni Skills zámerne rozlišuje tri úrovne podpory:

-**klienti s možnosťou inštalácie**
  - mať známy adresár zručností a môže použiť `install_skills`
-**klienti s možnosťou konfigurácie**
  - mať stabilný konfiguračný cieľ a môžete použiť `configure_client_mcp`
-**manuálni/úryvkoví klienti**
  - zdokumentované, ale zatiaľ bez bezpečného prvotriedneho zapisovača súborov

Toto oddelenie udržuje produkt čestný.

Nie každý produkt s podporou MCP by sa mal považovať za cieľ inštalácie zručnosti.
Fáza expanzie sa nateraz považuje za dokončenú: budúce prírastky by mali pristáť iba vtedy, ak vyčistia rovnaký pruh verejných zákaziek, ktorý teraz uvoľňujú Goose, Junie, Continue a Windsurf.