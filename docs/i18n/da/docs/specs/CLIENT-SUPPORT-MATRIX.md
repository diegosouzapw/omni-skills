# Client Support Matrix (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Dette dokument sporer den praktiske klientoverflade for Omni Skills på tværs af tre input:

1. '9router'-dashboardbeholdningen i '/home/diegosouzapw/dev/proxys/9router'
2. den nuværende Omni Skills MCP sidevogn implementering
3. Aktuel officiel dokumentation for hver klient eller IDE

Det er den fungerende kilde til sandhed for at beslutte, hvilke klienter der får førsteklasses 'config-mcp'-support, hvilke forbliver kun manuelle, og hvilke der kun er kandidater.---

## Scope

Denne matrix handler om**klientkonfiguration for MCP**.

Det er ikke det samme som:

- færdighedsinstallationssupport
- API-kompatibilitet
- A2A-understøttelse
- ACP eller andre ikke-MCP protokoller

Nogle produkter i matrixen bruger MCP, men har**ikke**et meningsfuldt "færdighedsmappe", så de modtager kun config-target support.---

## 9router Inventory

'9router'-dashboardet grupperer i øjeblikket disse CLI-værktøjer eller IDE-klienter:

- Claude Code
- OpenAI Codex
- Fabriksdroid
- OpenClaw
- Markør
- Cline
- Kilo kode
- Fortsæt
- Antigravitation
- GitHub Copilot
- OpenCode
- Kiro AI

Lokale kilder:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Disse klienter har nu en stabil, eksplicit historie i Omni Skills via `config-mcp --target ...`.

Nuværende implementering i alt:

-**7 installationskompatible klienter**
-**16 konfigurationskompatible klienter**
-**33 førsteklasses konfigurationsmål**
-**19 konfigurationsprofiler**

| Kunde | Status | Konfigurationsmål | Noter |
|:-------|:-------|:--------------------|:------|
| Claude kode | ✅ Førsteklasses | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Indtastet 'mcpServers'-konfiguration med Claude-specifikke tillade/afvise kontroller |
| Markør | ✅ Førsteklasses | `cursor-workspace`, `cursor-user` | JSON `mcpServers` mål |
| VS-kode | ✅ Førsteklasses | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Bruger `servere` root |
| Gemini CLI | ✅ Førsteklasses | `gemini-bruger`, `gemini-arbejdsområde` | JSON-indstillinger + global MCP tillad/ekskluder kontroller |
| Antigravitation | ✅ Førsteklasses | `antityngdekraft-bruger` | JSON `mcpServers` mål |
| Kiro | ✅ Førsteklasses | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Kiro-specifikke deaktiverede/autogodkendte felter |
| Codex CLI | ✅ Førsteklasses | `codex-bruger` | TOML `mcp_servers` tabeller |
| Fortsæt | ✅ Førsteklasses | `fortsæt-arbejdsområde` | Dedikeret YAML-serverdokument |
| Windsurfing | ✅ Førsteklasses | `windsurf-bruger` | JSON `mcpServers`-mål med `serverUrl`-indgange |
| OpenCode | ✅ Førsteklasses | `opencode-arbejdsområde`, `opencode-bruger` | Officiel `opencode.json` / brugerkonfiguration ved hjælp af topniveau `mcp` |
| Cline | ✅ Førsteklasses | `cline-bruger` | `cline_mcp_settings.json` med `mcpServers` |
| GitHub Copilot CLI | ✅ Førsteklasses | `copilot-bruger`, `copilot-repo` | `mcp-config.json` eller repo-scoped `.github/mcp.json` |
| Kilo kode | ✅ Førsteklasses | `kilo-bruger`, `kilo-projekt`, `kilo-arbejdsområde` | Kilo CLI bruger `kilo.json`; arbejdsområdeintegration bruger `.kilocode/mcp.json` |
| Zed | ✅ Førsteklasses | `zed-arbejdsplads` | `.zed/settings.json` med `context_servers` |
| Junie | ✅ Førsteklasses | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` eller `~/.junie/mcp/mcp.json` ved hjælp af `mcpServers` |
| Gås | ✅ Førsteklasses | `gås-bruger` | `~/.config/goose/config.yaml` ved hjælp af et "extensions"-objekt på øverste niveau til vedvarende MCP-udvidelser |---

## Current Gaps

Disse klienter fra `9router` er**ikke**endnu førsteklasses forfattermål i Omni Skills:

| Kunde | Nuværende tilstand | Hvorfor |
|:-------|:--------------|:----|
| Factory Droid | ⚠️ Kun manuelt/brugerdefineret | Der blev ikke fundet nogen stabil offentlig MCP-konfigurationsform i primære dokumenter under dette pass |
| OpenClaw | ⚠️ Kun manuelt/brugerdefineret | Samme problem som Factory Droid |

The sidecar can still be used with `--file` or custom paths for advanced users, but Omni Skills should not invent first-class writers without stable public config docs.

To tilstødende produkter er nu bedre forstået, men stopper stadig med vilje fra førsteklasses automatiske forfattere:

| Kunde | Nuværende tilstand | Hvorfor |
|:-------|:--------------|:----|
| JetBrains AI-assistent | 🟡 Manual/snippet | Officiel MCP-understøttelse findes, men den dokumenterede arbejdsgang er UI-drevet/import-drevet snarere end et stabilt offentligt filmål |
| Postbud | 🟡 Manual/snippet | Officiel MCP-understøttelse findes, men konfigurationen styres inde i produkt-UX i stedet for et stabilt offentligt filmål |
| Roo Kode | 🟡 Kandidat | Offentlige MCP-dokumenter findes, men en stærk cross-platform filsti-kontrakt skal stadig bekræftes, før du tilføjer en forfatter |---

## Support Policy

Omni Skills følger nu dette regelsæt:

1.**Installerbar**, hvis der findes en stabil færdighedsmappe.
2.**Konfigurationskompatibel**hvis der findes et stabilt offentligt MCP-konfigurationsfilformat.
3.**Manual/snippet-only**hvis produktet understøtter MCP, men den offentlige kontrakt er UI-first, import-first eller stadig for ustabil.

Dette er også det praktiske svar på et af de tidligere arkitekturspørgsmål: Projektet bør kun fortsætte med at vokse førsteklasses forfattere, hvor der findes et stabilt offentligt format, og ellers læne sig op af et mindre sæt kanoniske eksportfamilier plus opskrifter og uddrag.### Canonical config families already in use

- JSON `mcpServers`
- JSON 'servere'
- JSON `kontekstservere`
- YAML `mcpServers`
- TOML `[mcp_servere]`### Additional candidates worth watching

| Klient / IDE | Anbefaling | Årsag |
|:------------|:--------------|:-------|
| JetBrains AI-assistent | 🟡 Behold manual/uddrag indtil videre | Officiel support er reel, men UX er stadig produktstyret i stedet for fil-kontrakt-først |
| Postbud | 🟡 Behold manual/uddrag indtil videre | Den officielle opsætning er UI-first og workspace-administreret i stedet for fil-kontrakt-først |
| Roo Kode | 🟡 Undersøg næste | Lovende MCP-understøttelse, men forfattersikkerhed afhænger af stærkere konfigurationsstibekræftelse |
| VS Code Copilot Chat | 🟢 Allerede indirekte dækket | De underliggende VS Code MCP-filplaceringer understøttes allerede |
| Zed ACP / Agent-servere | 🟡 Separat spor | Dette er ACP/agent-server-territorium, ikke kun MCP-konfigurationsskrivning |---

## Official Sources Used

Ovenstående beslutninger blev kontrolleret i forhold til aktuelle primære kilder:

- [Antropisk Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Fortsæt MCP](https://docs.continue.dev/customize/tools)
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
- [Postman MCP-opsætning](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP Extension Guide](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Officielt MCP-register](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Den nuværende Omni Skills sidevogn skelner bevidst tre støtteniveauer:

-**installationskompatible klienter**
  - har en kendt færdighedsmappe og kan bruge `install_skills`
-**klienter, der kan konfigurere**
  - har et stabilt konfigurationsmål og kan bruge `configure_client_mcp`
-**manual/snippet-klienter**
  - dokumenteret, men uden en sikker førsteklasses filskriver endnu

Den adskillelse holder produktet ærligt.

Ikke alle MCP-kompatible produkter bør behandles som et mål for færdighedsinstallation.
Udvidelsesfasen anses for afsluttet for nu: fremtidige tilføjelser bør kun lande, hvis de rydder den samme offentlige kontraktbar, som Goose, Junie, Continue og Windsurf nu rydder.