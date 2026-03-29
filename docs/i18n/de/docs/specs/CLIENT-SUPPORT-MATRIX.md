# Client Support Matrix (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Dieses Dokument verfolgt die praktische Client-Oberfläche für Omni Skills anhand von drei Eingaben:

1. das „9router“-Dashboard-Inventar in „/home/diegosouzapw/dev/proxys/9router“.
2. die aktuelle Omni Skills MCP-Sidecar-Implementierung
3. aktuelle offizielle Dokumentation für jeden Client oder jede IDE

Es ist die funktionierende Quelle der Wahrheit, um zu entscheiden, welche Clients erstklassige „config-mcp“-Unterstützung erhalten, welche nur manuell unterstützt werden und welche nur Kandidaten sind.---

## Scope

In dieser Matrix geht es um die**Client-Konfiguration für MCP**.

Es ist nicht dasselbe wie:

- Unterstützung bei der Skill-Installation
- API-Kompatibilität
- A2A-Unterstützung
- ACP oder andere Nicht-MCP-Protokolle

Einige Produkte in der Matrix verbrauchen MCP, verfügen aber**kein**aussagekräftiges „Skills-Verzeichnis“, sodass sie nur Config-Target-Unterstützung erhalten.---

## 9router Inventory

Das „9router“-Dashboard gruppiert derzeit diese CLI-Tools oder IDE-Clients:

- Claude Code
- OpenAI-Codex
- Fabrikdroide
- OpenClaw
- Cursor
- Cline
- Kilocode
- Weiter
- Antigravitation
- GitHub-Copilot
- OpenCode
- Kiro KI

Lokale Quellen:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Diese Clients verfügen nun über „config-mcp --target ...“ über eine stabile, explizite Story in Omni Skills.

Aktuelle Umsetzungssummen:

-**7 installierbare Clients**
-**16 konfigurationsfähige Clients**
-**33 erstklassige Konfigurationsziele**
-**19 Konfigurationsprofile**

| Kunde | Status | Konfigurationsziele | Notizen |
|:-------|:-------|:---------------|:------|
| Claude Code | ✅ Erstklassig | „workspace“, „claude-project“, „claude-user-settings“, „claude-user“, „claude-user-legacy“, „claude-desktop“ | Typisierte „mcpServers“-Konfiguration mit Claude-spezifischen Zulassen/Verweigern-Steuerelementen |
| Cursor | ✅ Erstklassig | `cursor-workspace`, `cursor-user` | JSON „mcpServers“-Ziele |
| VS-Code | ✅ Erstklassig | „vscode“, „vscode-user“, „vscode-insiders-user“, „devcontainer“ | Verwendet „Server“-Root |
| Gemini CLI | ✅ Erstklassig | „gemini-user“, „gemini-workspace“ | JSON-Einstellungen + globale MCP-Steuerelemente zum Zulassen/Ausschließen |
| Antigravitation | ✅ Erstklassig | `antigravity-user` | JSON „mcpServers“-Ziel |
| Kiro | ✅ Erstklassig | „kiro-user“, „kiro-workspace“, „kiro-user-legacy“ | Kiro-spezifische deaktivierte/automatische Genehmigungsfelder |
| Codex-CLI | ✅ Erstklassig | `codex-user` | TOML „mcp_servers“-Tabellen |
| Weiter | ✅ Erstklassig | `continue-workspace` | Dediziertes YAML-Serverdokument |
| Windsurfen | ✅ Erstklassig | `Windsurf-Benutzer` | JSON „mcpServers“-Ziel mit „serverUrl“-Einträgen |
| OpenCode | ✅ Erstklassig | „opencode-workspace“, „opencode-user“ | Offizielle „opencode.json“/Benutzerkonfiguration mit „mcp“ der obersten Ebene |
| Cline | ✅ Erstklassig | `cline-user` | `cline_mcp_settings.json` mit `mcpServers` |
| GitHub Copilot CLI | ✅ Erstklassig | „copilot-user“, „copilot-repo“ | „mcp-config.json“ oder Repository-bereichsgebunden „.github/mcp.json“ |
| Kilocode | ✅ Erstklassig | „kilo-user“, „kilo-project“, „kilo-workspace“ | Kilo CLI verwendet „kilo.json“; Workspace-Integration verwendet „.kilocode/mcp.json“ |
| Zed | ✅ Erstklassig | `zed-workspace` | `.zed/settings.json` mit `context_servers` |
| Junie | ✅ Erstklassig | „junie-project“, „junie-user“ | `.junie/mcp/mcp.json` oder `~/.junie/mcp/mcp.json` mit `mcpServers` |
| Gans | ✅ Erstklassig | `goose-user` | „~/.config/goose/config.yaml“ unter Verwendung eines „extensions“-Objekts der obersten Ebene für persistente MCP-Erweiterungen |---

## Current Gaps

Diese Kunden von „9router“ sind**noch**keine erstklassigen Autorenziele in Omni Skills:

| Kunde | Aktueller Status | Warum |
|:-------|:--------------|:----|
| Fabrikdroide | ⚠️ Nur manuell/benutzerdefiniert | Während dieses Durchgangs wurde in den primären Dokumenten keine stabile öffentliche MCP-Konfigurationsform gefunden |
| OpenClaw | ⚠️ Nur manuell/benutzerdefiniert | Gleiches Problem wie Factory Droid |

Der Sidecar kann weiterhin mit „--file“ oder benutzerdefinierten Pfaden für fortgeschrittene Benutzer verwendet werden, aber Omni Skills sollte keine erstklassigen Autoren ohne stabile öffentliche Konfigurationsdokumente erfinden.

Zwei benachbarte Produkte sind mittlerweile besser verstanden, bleiben aber dennoch bewusst hinter erstklassigen automatischen Schreibern zurück:

| Kunde | Aktueller Status | Warum |
|:-------|:--------------|:----|
| JetBrains KI-Assistent | 🟡 Handbuch/Ausschnitt | Offizielle MCP-Unterstützung ist vorhanden, aber der dokumentierte Workflow ist UI-gesteuert/importgesteuert und nicht ein stabiles öffentliches Dateiziel |
| Postbote | 🟡 Handbuch/Ausschnitt | Offizielle MCP-Unterstützung ist vorhanden, aber die Konfiguration wird innerhalb der Produkt-UX verwaltet und nicht über ein stabiles öffentliches Dateiziel |
| Roo-Code | 🟡 Kandidat | Es gibt öffentliche MCP-Dokumente, aber ein starker plattformübergreifender Dateipfadvertrag muss noch bestätigt werden, bevor ein Autor hinzugefügt wird |---

## Support Policy

Omni Skills folgt nun diesem Regelsatz:

1.**Installationsfähig**, wenn ein stabiles Skills-Verzeichnis vorhanden ist.
2.**Konfigurationsfähig**, wenn ein stabiles öffentliches MCP-Konfigurationsdateiformat vorhanden ist.
3.**Nur manuell/Snippet**, wenn das Produkt MCP unterstützt, der öffentliche Vertrag jedoch UI-first, import-first oder immer noch zu instabil ist.

Dies ist auch die praktische Antwort auf eine der früheren Architekturfragen: Das Projekt sollte nur dann erstklassige Autoren hervorbringen, wenn ein stabiles öffentliches Format vorhanden ist, und sich ansonsten auf einen kleineren Satz kanonischer Exportfamilien sowie Rezepte und Snippets stützen.### Canonical config families already in use

- JSON „mcpServers“.
- JSON-„Server“.
- JSON „context_servers“.
- YAML „mcpServers“.
- TOML „[mcp_servers]“.### Additional candidates worth watching

| Client / IDE | Empfehlung | Grund |
|:-------------|:---------------|:-------|
| JetBrains KI-Assistent | 🟡Handbuch/Snippet vorerst aufbewahren | Offizieller Support ist real, aber die UX ist immer noch produktverwaltet und nicht file-contract-first |
| Postbote | 🟡Handbuch/Snippet vorerst aufbewahren | Das offizielle Setup ist UI-first und arbeitsplatzverwaltet und nicht file-contract-first |
| Roo-Code | 🟡 Als nächstes untersuchen | Vielversprechende MCP-Unterstützung, aber die Sicherheit des Autors hängt von einer stärkeren Bestätigung des Konfigurationspfads ab |
| VS Code Copilot Chat | 🟢 Bereits indirekt abgedeckt | Die zugrunde liegenden VS Code MCP-Dateispeicherorte werden bereits unterstützt |
| Zed ACP/Agent-Server | 🟡 Separate Spur | Dies ist ACP/Agent-Server-Gebiet, nicht nur das Schreiben von MCP-Konfigurationen |---

## Official Sources Used

Die oben genannten Entscheidungen wurden anhand aktueller Primärquellen überprüft:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [MCP fortsetzen](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo-Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Goose-Konfigurationsdateien](https://block.github.io/goose/docs/guides/config-files/)
- [Goose Session Extensions](https://block.github.io/goose/docs/guides/session-extensions/)
- [Postman MCP-Setup](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP Extension Guide](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Offizielle MCP-Registrierung](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Der aktuelle Omni Skills Sidecar unterscheidet bewusst drei Unterstützungsstufen:

-**installationsfähige Clients**
  - über ein bekanntes Skills-Verzeichnis verfügen und „install_skills“ verwenden können
-**konfigurationsfähige Clients**
  - ein stabiles Konfigurationsziel haben und „configure_client_mcp“ verwenden können
-**manuelle/Snippet-Clients**
  - dokumentiert, aber noch ohne einen sicheren erstklassigen Dateischreiber

Durch diese Trennung bleibt das Produkt ehrlich.

Nicht jedes MCP-fähige Produkt sollte als Skill-Install-Ziel behandelt werden.
Die Erweiterungsphase gilt vorerst als abgeschlossen: Zukünftige Ergänzungen sollten nur dann landen, wenn sie die gleiche öffentliche Auftragsvergabe überwinden, die Goose, Junie, Continue und Windsurf jetzt überwinden.