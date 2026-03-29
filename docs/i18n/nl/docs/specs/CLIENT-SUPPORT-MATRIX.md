# Client Support Matrix (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Dit document volgt het praktische klantoppervlak voor Omni Skills op basis van drie ingangen:

1. de dashboardinventaris van `9router` in `/home/diegosouzapw/dev/proxys/9router`
2. de huidige Omni Skills MCP zijspanimplementatie
3. actuele officiële documentatie voor elke klant of IDE

Het is de werkende bron van waarheid om te beslissen welke clients eersteklas `config-mcp`-ondersteuning krijgen, welke alleen handmatig blijven, en welke alleen maar kandidaten zijn.---

## Scope

Deze matrix gaat over**clientconfiguratie voor MCP**.

Het is niet hetzelfde als:

- Ondersteuning bij installatie van vaardigheden
- API-compatibiliteit
- A2A-ondersteuning
- ACP- of andere niet-MCP-protocollen

Sommige producten in de matrix gebruiken MCP, maar hebben**geen**een betekenisvolle “vaardighedenmap”, zodat ze alleen config-target-ondersteuning krijgen.---

## 9router Inventory

Het dashboard '9router' groepeert momenteel deze CLI-tools of IDE-clients:

- Claude Code
- OpenAI-codex
- Fabrieksdroid
- Open Klauw
- Cursor
- Klijn
- Kilocode
- Ga door
- Antizwaartekracht
- GitHub-copiloot
-OpenCode
-Kiro AI

Lokale bronnen:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Deze clients hebben nu een stabiel, expliciet verhaal in Omni Skills via `config-mcp --target ...`.

Huidige implementatietotalen:

-**7 clients met installatiemogelijkheid**
-**16 clients met configuratiemogelijkheden**
-**33 eersteklas configuratiedoelen**
-**19 configuratieprofielen**

| Klant | Staat | Doelen configureren | Opmerkingen |
|:-------|:-------|:---------------|:------|
| Claude Code | ✅ Eersteklas | `werkruimte`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | 'mcpServers'-configuratie getypt met Claude-specifieke besturingselementen voor toestaan/weigeren |
| Cursor | ✅ Eersteklas | `cursor-werkruimte`, `cursor-gebruiker` | JSON `mcpServers`-doelen |
| VS-code | ✅ Eersteklas | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Gebruikt `servers` root |
| Tweeling CLI | ✅ Eersteklas | `gemini-gebruiker`, `gemini-werkruimte` | JSON-instellingen + globale MCP-besturingselementen voor toestaan/uitsluiten |
| Antizwaartekracht | ✅ Eersteklas | `antizwaartekracht-gebruiker` | JSON `mcpServers` doel |
| Kiro | ✅ Eersteklas | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Kiro-specifieke uitgeschakelde/automatische goedkeuringsvelden |
| Codex-CLI | ✅ Eersteklas | `codex-gebruiker` | TOML `mcp_servers` tabellen |
| Ga verder | ✅ Eersteklas | `doorgaan-werkruimte` | Speciaal YAML-serverdocument |
| Windsurfen | ✅ Eersteklas | `windsurf-gebruiker` | JSON `mcpServers` doel met `serverUrl` vermeldingen |
| OpenCode | ✅ Eersteklas | `opencode-werkruimte`, `opencode-gebruiker` | Officiële `opencode.json` / gebruikersconfiguratie met `mcp` |
| Klijn | ✅ Eersteklas | `cline-gebruiker` | `cline_mcp_settings.json` met `mcpServers` |
| GitHub Copilot-CLI | ✅ Eersteklas | `copiloot-gebruiker`, `copiloot-repo` | `mcp-config.json` of repo-scoped `.github/mcp.json` |
| Kilocode | ✅ Eersteklas | `kilo-gebruiker`, `kilo-project`, `kilo-werkruimte` | Kilo CLI gebruikt `kilo.json`; werkruimte-integratie gebruikt `.kilocode/mcp.json` |
| Zed | ✅ Eersteklas | `zed-werkruimte` | `.zed/settings.json` met `context_servers` |
| juni | ✅ Eersteklas | `junie-project`, `junie-gebruiker` | `.junie/mcp/mcp.json` of `~/.junie/mcp/mcp.json` met `mcpServers` |
| Gans | ✅ Eersteklas | `gans-gebruiker` | `~/.config/goose/config.yaml` gebruikt een `extensions`-object op het hoogste niveau voor persistente MCP-extensies |---

## Current Gaps

Deze clients van `9router` zijn nog**geen**eersteklas schrijversdoelen in Omni Skills:

| Klant | Huidige staat | Waarom |
|:-------|:--------------|:----|
| Fabrieksdroid | ⚠️ Alleen handmatig/aangepast | Geen stabiele openbare MCP-configuratievorm gevonden in primaire documenten tijdens deze passage |
| Openklauw | ⚠️ Alleen handmatig/aangepast | Hetzelfde probleem als Factory Droid |

De zijspan kan nog steeds worden gebruikt met `--file` of aangepaste paden voor gevorderde gebruikers, maar Omni Skills zou geen eersteklas schrijvers moeten uitvinden zonder stabiele openbare configuratiedocumenten.

Twee aangrenzende producten worden nu beter begrepen, maar blijven opzettelijk achter bij eersteklas automatische schrijvers:

| Klant | Huidige staat | Waarom |
|:-------|:--------------|:----|
| JetBrains AI-assistent | 🟡 Handleiding/fragment | Er bestaat officiële MCP-ondersteuning, maar de gedocumenteerde workflow is UI-gestuurd/importgestuurd in plaats van een stabiel openbaar bestandsdoel |
| Postbode | 🟡 Handleiding/fragment | Er bestaat officiële MCP-ondersteuning, maar de configuratie wordt beheerd binnen de product-UX in plaats van een stabiel openbaar bestandsdoel |
| Roo-code | 🟡 Kandidaat | Er bestaan ​​openbare MCP-documenten, maar een sterk platformonafhankelijk bestandspadcontract moet nog worden bevestigd voordat een schrijver wordt toegevoegd |---

## Support Policy

Omni Skills volgt nu deze regelset:

1.**Installeerbaar**als er een stabiele vaardighedenmap bestaat.
2.**Config-compatibel**als er een stabiel openbaar MCP-configuratiebestandsformaat bestaat.
3.**Alleen handmatig/fragment**als het product MCP ondersteunt, maar het overheidscontract eerst UI, eerst import of nog steeds te onstabiel is.

Dit is ook het praktische antwoord op een van de eerdere architectuurvragen: het project zou alleen eersteklas schrijvers moeten laten groeien als er een stabiel publiek format bestaat, en anders steunen op een kleinere reeks canonieke exportfamilies plus recepten en fragmenten.### Canonical config families already in use

- JSON `mcpServers`
- JSON-`servers`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Klant / IDE | Aanbeveling | Reden |
|:------------|:---------------|:-------|
| JetBrains AI-assistent | 🟡 Handleiding/fragment voorlopig bewaren | Officiële ondersteuning is reëel, maar de UX wordt nog steeds door het product beheerd in plaats van eerst door het bestand contract |
| Postbode | 🟡 Handleiding/fragment voorlopig bewaren | De officiële installatie is eerst door de gebruikersinterface en door de werkruimte beheerd in plaats van eerst via een bestandscontract |
| Roo-code | 🟡 Onderzoek volgende | Veelbelovende MCP-ondersteuning, maar de veiligheid van de schrijver hangt af van een sterkere bevestiging van het configuratiepad |
| VS Code Copiloot Chat | 🟢 Indirect al gedekt | De onderliggende VS Code MCP-bestandslocaties worden al ondersteund |
| Zed ACP / Agent-servers | 🟡 Aparte track | Dit is het ACP/agent-server-territorium, niet alleen het schrijven van MCP-configuraties |---

## Official Sources Used

De bovenstaande beslissingen zijn getoetst aan de huidige primaire bronnen:

- [Antropische Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Doorgaan met MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo-code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistent MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Goose-configuratiebestanden](https://block.github.io/goose/docs/guides/config-files/)
- [Goose-sessie-extensies](https://block.github.io/goose/docs/guides/session-extensions/)
- [Postman MCP-installatie](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP-extensiehandleiding](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Officieel MCP-register](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Het huidige Omni Skills zijspan onderscheidt bewust drie ondersteuningsniveaus:

-**clients die geschikt zijn voor installatie**
  - een bekende vaardighedendirectory hebben en `install_skills` kunnen gebruiken
-**clients met configuratiemogelijkheden**
  - een stabiel configuratiedoel hebben en `configure_client_mcp` kunnen gebruiken
-**handleiding/fragmentclients**
  - gedocumenteerd, maar nog zonder een veilige eersteklas bestandsschrijver

Die scheiding houdt het product eerlijk.

Niet elk MCP-compatibel product mag worden behandeld als een doel voor het installeren van vaardigheden.
De uitbreidingsfase wordt voorlopig als voltooid beschouwd: toekomstige toevoegingen zouden alleen moeten landen als ze dezelfde balk met overheidscontracten leegmaken die Goose, Junie, Continue en Windsurf nu leegmaken.