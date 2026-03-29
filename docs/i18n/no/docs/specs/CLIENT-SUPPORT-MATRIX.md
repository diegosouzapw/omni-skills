# Client Support Matrix (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Dette dokumentet sporer den praktiske klientoverflaten for Omni Skills på tvers av tre innganger:

1. `9router`-dashbordbeholdningen i `/home/diegosouzapw/dev/proxys/9router`
2. gjeldende Omni Skills MCP sidevognimplementering
3. gjeldende offisiell dokumentasjon for hver klient eller IDE

Det er den fungerende kilden til sannhet for å avgjøre hvilke klienter som får førsteklasses `config-mcp`-støtte, hvilke som forblir manuelle, og hvilke som kun er kandidater.---

## Scope

Denne matrisen handler om**klientkonfigurasjon for MCP**.

Det er ikke det samme som:

- ferdighetsinstallasjonsstøtte
- API-kompatibilitet
- A2A-støtte
- ACP eller andre ikke-MCP-protokoller

Noen produkter i matrisen bruker MCP, men har**ikke**en meningsfull "ferdighetskatalog", så de mottar kun konfig-målstøtte.---

## 9router Inventory

'9router'-dashbordet grupperer for øyeblikket disse CLI-verktøyene eller IDE-klientene:

- Claude Code
- OpenAI Codex
- Fabrikkdroid
- OpenClaw
- Markør
- Cline
- Kilokode
- Fortsett
- Antigravitasjon
- GitHub Copilot
- Åpenkode
- Kiro AI

Lokale kilder:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Disse klientene har nå en stabil, eksplisitt historie i Omni Skills via `config-mcp --target ...`.

Gjeldende implementeringssum:

-**7 installeringskompatible klienter**
-**16 konfigurasjonskompatible klienter**
-**33 førsteklasses konfigurasjonsmål**
-**19 konfigurasjonsprofiler**

| Kunde | Status | Konfigurasjonsmål | Merknader |
|:-------|:-------|:--------------|:------|
| Claude Code | ✅ Førsteklasses | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Skrevet `mcpServers`-konfigurasjon med Claude-spesifikke tillat/avslå-kontroller |
| Markør | ✅ Førsteklasses | `cursor-workspace`, `cursor-user` | JSON `mcpServers`-mål |
| VS-kode | ✅ Førsteklasses | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Bruker `servers` root |
| Gemini CLI | ✅ Førsteklasses | `gemini-user`, `gemini-workspace` | JSON-innstillinger + global MCP tillat/ekskluder kontroller |
| Antigravitasjon | ✅ Førsteklasses | `antigravity-bruker` | JSON `mcpServers`-mål |
| Kiro | ✅ Førsteklasses | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Kiro-spesifikke deaktiverte/autogodkjenningsfelt |
| Codex CLI | ✅ Førsteklasses | `codex-user` | TOML `mcp_servers` tabeller |
| Fortsett | ✅ Førsteklasses | `fortsett-arbeidsområde` | Dedikert YAML-serverdokument |
| Vindsurfing | ✅ Førsteklasses | `windsurf-bruker` | JSON `mcpServers`-mål med `serverUrl`-oppføringer |
| OpenCode | ✅ Førsteklasses | `opencode-workspace`, `opencode-user` | Offisiell `opencode.json` / brukerkonfigurasjon ved å bruke toppnivå `mcp` |
| Cline | ✅ Førsteklasses | `cline-bruker` | `cline_mcp_settings.json` med `mcpServers` |
| GitHub Copilot CLI | ✅ Førsteklasses | `copilot-user`, `copilot-repo` | `mcp-config.json` eller repo-scoped `.github/mcp.json` |
| Kilokode | ✅ Førsteklasses | `kilo-bruker`, `kilo-prosjekt`, `kilo-arbeidsområde` | Kilo CLI bruker `kilo.json`; workspace integration uses `.kilocode/mcp.json` |
| Zed | ✅ Førsteklasses | `zed-arbeidsområde` | `.zed/settings.json` med `context_servers` |
| Junie | ✅ Førsteklasses | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` eller `~/.junie/mcp/mcp.json` ved hjelp av `mcpServers` |
| Gås | ✅ Førsteklasses | `gås-bruker` | `~/.config/goose/config.yaml` using a top-level `extensions` object for persistent MCP extensions |---

## Current Gaps

Disse klientene fra `9router` er**ikke**ennå førsteklasses forfattermål i Omni Skills:

| Kunde | Nåværende tilstand | Hvorfor |
|:-------|:--------------|:----|
| Factory Droid | ⚠️ Kun manuell/tilpasset | Ingen stabil offentlig MCP-konfigurasjonsform funnet i primærdokumenter i løpet av denne gjennomgangen |
| OpenClaw | ⚠️ Kun manuell/tilpasset | Samme problem som Factory Droid |

Sidevognen kan fortsatt brukes med `--file` eller tilpassede stier for avanserte brukere, men Omni Skills bør ikke finne opp førsteklasses forfattere uten stabile offentlige konfigurasjonsdokumenter.

To tilstøtende produkter er nå bedre forstått, men stopper fortsatt med vilje for førsteklasses automatiske forfattere:

| Kunde | Nåværende tilstand | Hvorfor |
|:-------|:--------------|:----|
| JetBrains AI Assistant | Manual/snippet | Offisiell MCP-støtte finnes, men den dokumenterte arbeidsflyten er UI-drevet/import-drevet i stedet for et stabilt offentlig filmål |
| Postmann | Manual/snippet | Offisiell MCP-støtte eksisterer, men konfigurasjonen administreres i produkt-UX i stedet for et stabilt offentlig filmål |
| Roo Code | Kandidat | Offentlige MCP-dokumenter finnes, men en sterk filbanekontrakt på tvers av plattformer trenger fortsatt bekreftelse før du legger til en forfatter |---

## Support Policy

Omni Skills følger nå dette regelsettet:

1.**Install-capable**if a stable skills directory exists.
2.**Config-capable**if a stable public MCP config file format exists.
3.**Manual/snippet-only**if the product supports MCP but the public contract is UI-first, import-first, or still too unstable.

Dette er også det praktiske svaret på et av de tidligere arkitekturspørsmålene: prosjektet bør fortsette å vokse førsteklasses forfattere bare der et stabilt offentlig format eksisterer, og ellers lene seg på et mindre sett med kanoniske eksportfamilier pluss oppskrifter og utdrag.### Canonical config families already in use

- JSON `mcpServers`
- JSON `servere`
- JSON `kontekstservere`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Klient / IDE | Anbefaling | Grunn |
|:------------|:--------------|:-------|
| JetBrains AI Assistant | 🟡 Behold manualen/snippet for nå | Offisiell støtte er reell, men UX er fortsatt produktadministrert i stedet for fil-kontrakt-først |
| Postmann | 🟡 Behold manualen/snippet for nå | Offisielt oppsett er UI-først og arbeidsområde-administrert i stedet for fil-kontrakt-først |
| Roo Code | 🟡 Undersøk neste | Lovende MCP-støtte, men skriversikkerhet avhenger av sterkere konfigurasjonsbanebekreftelse |
| VS Code Copilot Chat | 🟢 Allerede indirekte dekket | De underliggende VS Code MCP-filplasseringene støttes allerede |
| Zed ACP / Agent-servere | 🟡 Eget spor | Dette er ACP/agent-server-territorium, ikke bare MCP-konfigurasjonsskriving |---

## Official Sources Used

Avgjørelsene ovenfor ble kontrollert mot gjeldende primærkilder:

- [Antropisk Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Markør MCP](https://docs.cursor.com/tools)
– [Fortsett MCP](https://docs.continue.dev/customize/tools)
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
- [Postman MCP-oppsett](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP Extension Guide](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Offisielt MCP-register](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Den nåværende Omni Skills sidevognen skiller med hensikt tre støttenivåer:

-**klienter som kan installeres**
  - har en kjent ferdighetskatalog og kan bruke `install_skills`
-**konfigurasjonskompatible klienter**
  - har et stabilt konfigurasjonsmål og kan bruke `configure_client_mcp`
-**manuelle/snipped-klienter**
  - dokumentert, men uten en sikker førsteklasses filskriver ennå

Den separasjonen holder produktet ærlig.

Ikke alle MCP-kompatible produkter bør behandles som et ferdighetsinstallasjonsmål.
Utvidelsesfasen anses som fullført for nå: fremtidige tillegg bør bare lande hvis de klarer den samme offentlige kontraktslinjen som Goose, Junie, Continue og Windsurf nå klarer.