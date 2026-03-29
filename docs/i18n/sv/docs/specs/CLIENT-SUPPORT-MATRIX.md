# Client Support Matrix (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Det här dokumentet spårar den praktiska klientytan för Omni Skills över tre ingångar:

1. instrumentpanelen för `9router` i `/home/diegosouzapw/dev/proxys/9router`
2. den nuvarande Omni Skills MCP sidovagnsimplementeringen
3. aktuell officiell dokumentation för varje klient eller IDE

Det är den fungerande källan till sanning för att avgöra vilka klienter som får förstklassigt `config-mcp`-stöd, vilka som förblir manuella och vilka som bara är kandidater.---

## Scope

Denna matris handlar om**klientkonfiguration för MCP**.

Det är inte samma sak som:

- support för färdigheter vid installation
- API-kompatibilitet
- A2A-stöd
- ACP eller andra icke-MCP-protokoll

Vissa produkter i matrisen förbrukar MCP men har**inte**en meningsfull "färdighetskatalog", så de får bara stöd för konfigurationsmål.---

## 9router Inventory

Instrumentpanelen `9router` grupperar för närvarande dessa CLI-verktyg eller IDE-klienter:

- Claude Code
- OpenAI Codex
- Fabriksdroid
- OpenClaw
- Markör
- Cline
- Kilokod
- Fortsätt
- Antigravitation
- GitHub Copilot
- OpenCode
- Kiro AI

Lokala källor:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Dessa klienter har nu en stabil, explicit historia i Omni Skills via `config-mcp --target ...`.

Nuvarande implementeringssummor:

-**7 installationskompatibla klienter**
-**16 konfigurationskompatibla klienter**
-**33 förstklassiga konfigurationsmål**
-**19 konfigurationsprofiler**

| Kund | Status | Konfigurationsmål | Anteckningar |
|:-------|:-------|:--------------------|:------|
| Claude Code | ✅ Första klass | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Skrivet `mcpServers` config med Claude-specifika tillåt/neka kontroller |
| Markör | ✅ Första klass | `cursor-workspace`, `cursor-user` | JSON `mcpServers`-mål |
| VS-kod | ✅ Första klass | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Använder `servers` root |
| Gemini CLI | ✅ Första klass | `gemini-user`, `gemini-workspace` | JSON-inställningar + globala MCP tillåt/exkludera kontroller |
| Antigravitation | ✅ Första klass | "antigravity-användare" | JSON `mcpServers` mål |
| Kiro | ✅ Första klass | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Kiro-specifika inaktiverade/autogodkännandefält |
| Codex CLI | ✅ Första klass | `codex-användare` | TOML `mcp_servers` tabeller |
| Fortsätt | ✅ Första klass | `fortsätt-arbetsyta` | Dedikerat YAML-serverdokument |
| Vindsurfa | ✅ Första klass | `vindsurf-användare` | JSON `mcpServers`-mål med `serverUrl`-poster |
| OpenCode | ✅ Första klass | `opencode-arbetsyta`, `opencode-användare` | Officiell `opencode.json` / användarkonfiguration med `mcp` på toppnivå |
| Cline | ✅ Första klass | `cline-användare` | `cline_mcp_settings.json` med `mcpServers` |
| GitHub Copilot CLI | ✅ Första klass | `copilot-user`, `copilot-repo` | `mcp-config.json` eller repo-scoped `.github/mcp.json` |
| Kilokod | ✅ Första klass | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI använder `kilo.json`; arbetsytaintegrering använder `.kilocode/mcp.json` |
| Zed | ✅ Första klass | `zed-arbetsyta` | `.zed/settings.json` med `context_servers` |
| Junie | ✅ Första klass | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` eller `~/.junie/mcp/mcp.json` med `mcpServers` |
| Gås | ✅ Första klass | `gåsanvändare` | `~/.config/goose/config.yaml` använder ett "extensions"-objekt på toppnivå för beständiga MCP-tillägg |---

## Current Gaps

Dessa klienter från `9router` är**inte**ännu förstklassiga skribentmål i Omni Skills:

| Kund | Nuvarande tillstånd | Varför |
|:-------|:--------------|:----|
| Factory Droid | ⚠️ Endast manuell/anpassad | Ingen stabil offentlig MCP-konfigurationsform hittades i primära dokument under detta pass |
| OpenClaw | ⚠️ Endast manuell/anpassad | Samma problem som Factory Droid |

Sidovagnen kan fortfarande användas med `--file` eller anpassade sökvägar för avancerade användare, men Omni Skills bör inte uppfinna förstklassiga skribenter utan stabila offentliga konfigurationsdokument.

Två intilliggande produkter är nu bättre förstådda, men stannar fortfarande avsiktligt för förstklassiga automatiska skrivare:

| Kund | Nuvarande tillstånd | Varför |
|:-------|:--------------|:----|
| JetBrains AI Assistant | 🟡 Manual/snutt | Officiellt MCP-stöd finns, men det dokumenterade arbetsflödet är UI-drivet/import-drivet snarare än ett stabilt publikt filmål |
| Brevbärare | 🟡 Manual/snutt | Officiellt MCP-stöd finns, men konfigurationen hanteras i produktens UX snarare än ett stabilt publikt filmål |
| Roo Code | Kandidat | Offentliga MCP-dokument finns, men ett starkt plattformsoberoende fil-sökvägskontrakt behöver fortfarande bekräftelse innan du lägger till en författare |---

## Support Policy

Omni Skills följer nu denna regeluppsättning:

1.**Installerbar**om det finns en stabil kompetenskatalog.
2.**Config-kapabel**om det finns ett stabilt offentligt MCP-konfigurationsfilformat.
3.**Endast manuellt/utdrag**om produkten stöder MCP men det offentliga kontraktet är UI-först, import-först eller fortfarande är för instabilt.

Detta är också det praktiska svaret på en av de tidigare arkitekturfrågorna: projektet bör fortsätta växa förstklassiga författare endast där det finns ett stabilt offentligt format, och i övrigt stödja sig på en mindre uppsättning kanoniska exportfamiljer plus recept och utdrag.### Canonical config families already in use

- JSON `mcpServers`
- JSON `servrar`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Klient / IDE | Rekommendation | Anledning |
|:------------|:--------------|:-------|
| JetBrains AI Assistant | 🟡 Behåll manual/snutt tills vidare | Officiellt stöd är verkligt, men UX är fortfarande produkthanterat snarare än fil-kontrakt-först |
| Brevbärare | 🟡 Behåll manual/snutt tills vidare | Officiell inställning är UI-först och arbetsyta-hanterad snarare än fil-kontrakt-först |
| Roo Code | 🟡 Undersök nästa | Lovande MCP-stöd, men skrivsäkerhet beror på en starkare bekräftelse på konfigurationsvägen |
| VS Code Copilot Chat | 🟢 Redan täckt indirekt | De underliggande VS Code MCP-filplatserna stöds redan |
| Zed ACP / Agent-servrar | Separat spår | Detta är ACP/agent-server-territorium, inte bara MCP-konfigurationsskrivning |---

## Official Sources Used

Besluten ovan kontrollerades mot nuvarande primära källor:

- [Antropisk Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Fortsätt MCP](https://docs.continue.dev/customize/tools)
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
- [Postman MCP setup](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP Extension Guide](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Officiellt MCP-register](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Den nuvarande Omni Skills sidovagnen särskiljer avsiktligt tre stödnivåer:

-**klienter som kan installeras**
  - har en känd kompetenskatalog och kan använda `install_skills`
-**klienter som kan konfigurera inställningar**
  - har ett stabilt konfigurationsmål och kan använda `configure_client_mcp`
-**manual/snipped-klienter**
  - dokumenterad, men utan en säker förstklassig filskrivare ännu

Den separationen håller produkten ärlig.

Inte alla MCP-kompatibla produkter bör behandlas som ett mål för färdighetsinstallation.
Expansionsfasen anses vara klar för tillfället: framtida tillägg bör bara landa om de rensar samma offentliga kontraktsbar som Goose, Junie, Continue och Windsurf nu rensar.