# 🔌 Local MCP Sidecar (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Optionale Erweiterung für den lokalen Modus für „@omni-skills/server-mcp“, die dateisystemfähige Tools zur Clienterkennung, Skill-Verwaltung und MCP-Konfigurationsgenerierung hinzufügt.**---

## 📊 Status

| Funktion | Staat |
|:--------|:------|
| ✅ Schreibgeschützte Katalogtools | Implementiert |
| ✅ Dateisystemfähige lokale Tools | Implementiert |
| ✅ 3 Transporte (stdio/stream/sse) | Implementiert |
| ✅ Schreibvorgänge auf der Zulassungsliste | Implementiert |
| ✅ Vorschau der Standardeinstellungen vor dem Schreiben | Implementiert |
| ✅ Client-bewusstes MCP-Konfigurationsschreiben | Implementiert |
| ✅ HTTP-Authentifizierung + Ratenbegrenzung | Implementiert |
| ✅ Veröffentlichungszeitsignaturen und Prüfsummen | Für generierte Archive implementiert und von API/MCP angezeigt |
| 🟡 Lokale Durchsetzung der Signatur zur Schreibzeit | Noch nicht durchgesetzt; Im lokalen Modus wird eine Vorschau angezeigt und von der vertrauenswürdigen lokalen Kasse geschrieben |
| 🟢 Aktuelle Kundenabdeckung | 7 installierbare Clients, 16 konfigurationsfähige Clients, 33 Konfigurationsziele, 19 Konfigurationsprofile |---

## 🎯 Purpose

Der lokale Modus fügt**dateisystemfähige Tools**zusätzlich zur vorhandenen schreibgeschützten MCP-Katalogoberfläche hinzu. Verwenden Sie es, wenn ein Agent Folgendes tun muss:

- 🕵️ Kompatible lokale KI-Clients erkennen
- 📋 Überprüfen Sie die installierten Fähigkeiten
- 👁️ Vorschau der Installation oder Entfernung von Fertigkeiten (Probelauf)
- 📦 Lokale Skill-Installation oder -Entfernung anwenden
- ⚙️ Schreiben Sie nach der Vorschau eine lokale MCP-Konfigurationsdatei

Es trennt bewusst zwei Anliegen:

-**Skill-Installationsziele**
  Clients mit einem stabilen Skills-Verzeichnis, die „install_skills“ verwenden können
-**MCP-Konfigurationsziele**
  Clients oder IDEs mit einem stabil dokumentierten MCP-Konfigurationsformat, auch wenn sie kein Skills-Verzeichnis haben---

## 🔌 Transports

| Transport | Protokoll | Anwendungsfall |
|:----------|:---------|:---------|
| `stdio` | Rohr | Direkte Client-Integration |
| `Stream` | Streambares HTTP | Moderne HTTP-Clients |
| `sse` | Vom Server gesendete Ereignisse | Legacy-Kunden |---

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

> Alle Befehle setzen automatisch „OMNI_SKILLS_MCP_MODE=local“.---

## 🛠️ Local Tools

Wenn der lokale Modus aktiviert ist, werden diese zusätzlichen Tools verfügbar:

| Werkzeug | Beschreibung | Standard |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Nach AI-Clients und ihren Skill-/Konfigurationspfaden suchen | — |
| 📋 `list_installed_skills` | Überprüfen Sie installierte Fähigkeiten für einen bestimmten Client | — |
| 📦 `install_skills` | Fertigkeiten im Fertigkeitenverzeichnis eines Kunden installieren | 🔍 Trockenlauf |
| 🗑️ `remove_skills` | Installierte Skills von einem Client entfernen | 🔍 Trockenlauf |
| ⚙️ `configure_client_mcp` | MCP-Konfiguration für einen bestimmten Client schreiben | 🔍 Trockenlauf |

> ⚠️ `install_skills`, `remove_skills` und `configure_client_mcp` sind standardmäßig auf**dry-run**, wenn `dry_run` weggelassen wird.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Kunde | Pfad |
|:-------|:-----|
| 🔵 Claude Code | `~/.claude/skills` |
| 🔵 Cursor | `~/.cursor/skills` |
| 🟡 Gemini CLI | `~/.gemini/skills` |
| 🟣 Antigravitation | `~/.gemini/antigravity/skills` |
| 🟢 Kiro | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` oder `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<workspace>/.opencode/skills` |

Diese 7 Ziele sind heute die einzigen erstklassigen Installationsziele.### ⚙️ MCP Config Files

| Ziel | Formatieren |
|:-------|:-------|
| `~/.claude/settings.json` | Claude Code-Einstellungen JSON |
| `<workspace>/.claude/settings.json` | Claude-Projekteinstellungen JSON |
| `~/.claude.json` | Legacy Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (betriebssystemspezifisch) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<workspace>/.cursor/mcp.json` | Cursor-Arbeitsbereich JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini-Benutzer JSON (`mcpServers`) |
| `<workspace>/.gemini/settings.json` | Gemini-Projekt JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravity JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro-Benutzer-JSON (`mcpServers`) |
| `<workspace>/.kiro/settings/mcp.json` | Kiro-Projekt JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<Arbeitsbereich>/.mcp.json` | JSON (`mcpServers`) |
| `<workspace>/opencode.json` | OpenCode-Arbeitsbereich JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode-Benutzer-JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<workspace>/.github/mcp.json` | GitHub Copilot-Repository JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI-Benutzer-JSON (`mcp`) |
| `<Arbeitsbereich>/kilo.json` | Kilo CLI-Projekt JSON (`mcp`) |
| `<workspace>/.kilocode/mcp.json` | Kilo Code-Arbeitsbereich JSON (`mcpServers`) |
| `<workspace>/.continue/mcpServers/omni-skills.yaml` | Weiter Arbeitsbereich YAML (`mcpServers`) |
| `<workspace>/.junie/mcp/mcp.json` | Junie-Projekt JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie-Benutzer-JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML („Erweiterungen“) |
| `<workspace>/.zed/settings.json` | Zed-Arbeitsbereich JSON (`context_servers`) |
| `<workspace>/.vscode/mcp.json` | JSON („Server“) |
| `~/.config/Code/User/mcp.json` | VS Code-Benutzer-JSON („Server“) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders-Benutzer-JSON („Server“) |
| `<workspace>/.devcontainer/devcontainer.json` | Verschachtelter Entwicklungscontainer JSON (`customizations.vscode.mcp.servers`) |
| Client-Root „mcp.json“ | JSON (pro Client-Format) |

Das ergibt für den Beiwagen:

-**16 konfigurationsfähige Clients oder IDEs**
-**33 erstklassige Zielpfade**
-**19 Formatprofile**

Die aktuelle erstklassige Konfigurationsabdeckung umfasst:

- Claude Code und Claude Desktop
- Cursor
- VS-Code und Entwicklungscontainer
- Gemini-CLI
- Antigravitation
- Kiro
- Codex-CLI
- Weiter
- Junie
- Windsurfen
- Gans
- OpenCode
- Cline
- GitHub Copilot-CLI
- Kilocode
- Zed

Manuelle oder reine Snippet-Kandidaten bleiben absichtlich weiterhin außerhalb des erstklassigen Autorensatzes, bis ihre öffentlichen Konfigurationsverträge stabil genug sind.### 🧭 Expansion Policy

Omni Skills behandelt den Kundensupport jetzt als dreistufiges Modell:

1.**installationsfähig**
   Es gibt ein stabiles Skills-Verzeichnis, sodass die CLI und der Sidecar Skills direkt installieren können.
2.**config-fähig**
   Es gibt ein stabiles, dokumentiertes MCP-Konfigurationsformat, sodass „config-mcp“ eine Vorschau anzeigen und eine erstklassige Datei schreiben kann.
3.**nur manuell oder Snippet**
   Das Produkt unterstützt eindeutig MCP in irgendeiner Form, aber die öffentlichen Dokumente rechtfertigen noch keinen sicheren automatischen Schreiber.

Aus diesem Grund bleiben Clients wie JetBrains AI Assistant weiterhin manuell/nur Snippets, während Roo Code und Postman außerhalb des erstklassigen Autorensatzes bleiben, bis ihre sichere automatische Zusammenführungsstory stark genug für dieses Projekt ist.---

## 🔒 Allowlist Model

Der lokale Sidecar schreibt nur unter einer**expliziten Zulassungsliste**.### 🟢 Default allowlist:

- Bekannte Client-Roots unter „$HOME“.
- „~/.codeium“ für die Windsurf-Benutzerkonfiguration
- „~/.copilot“ für GitHub Copilot CLI
- „~/.cline“ für Cline CLI
- „~/.config/goose“ für die Goose-Konfiguration
- „~/.config/kilo“ und „~/.config/opencode“ für die Kilo/OpenCode-CLI-Konfiguration
- „$CODEX_HOME“ (oder „~/.codex“, falls nicht festgelegt)
– Aktueller Arbeitsbereichsstamm
- `<Arbeitsbereich>/.agents`
- `<Arbeitsbereich>/.github`
- `<Arbeitsbereich>/.kilocode`
- `<Arbeitsbereich>/.opencode`
- `<Arbeitsbereich>/.zed`
- `<Arbeitsbereich>/.continue`
- „<Arbeitsbereich>/.vscode“.### ➕ Extend the allowlist:

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

Der Sidecar-gestützte CLI-Wrapper sorgt dafür, dass die MCP-Konfigurationsgenerierung ohne direkte JSON-RPC-Aufrufe zugänglich bleibt:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Das Standardverhalten ist nur Vorschau. „--write“ wendet die Konfiguration auf den aufgelösten Zielpfad unter der Zulassungsliste an.### 🌊 Windsurf

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

Das Tool „configure_client_mcp“ kann auch Claude-spezifische Einstellungen schreiben, wenn Sie Folgendes übergeben:

- „allowed_mcp_servers“.
- „denied_mcp_servers“.
- „permissions_deny“.
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

Für VS-Code- und Dev-Container-Ziele kann „configure_client_mcp“ auch Folgendes schreiben:

- „sandboxEnabled“.
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Dies entspricht der aktuellen VS-Code-Anleitung für das Sandboxing lokaler stdio MCP-Server.### 🧰 Cross-Client Entry Options

„configure_client_mcp“ unterstützt jetzt umfangreichere Eintragsmetadaten für alle unterstützten Profile:

- „Kopfzeilen“.
- `env`
- `env_file`
- `cwd`
- `timeout_ms`
- „Beschreibung“.
- `include_tools`
- `exclude_tools`
- „deaktiviert“.
- „Vertrauen“.

Profilspezifische Optionen:

- Claude: „allowed_mcp_servers“, „denied_mcp_servers“, „permissions_deny“, „enable_all_project_mcp_servers“.
- Zwillinge: „mcp_allowed_servers“, „mcp_excluded_servers“.
- Kiro: „disabled_tools“, „auto_approve“.
- VS-Code und Dev-Container: „dev_watch“, „dev_debug_type“.### 📋 Generated Recipes

„configure_client_mcp“ gibt „recipes“ zusammen mit der Vorschau oder der angewendeten Konfiguration zurück.

Bei diesen Rezepten handelt es sich um kundenorientierte Anleitungsblöcke, zum Beispiel:

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp add ...`
- Manuelle Dateibearbeitungsrezepte für Cursor, VS Code, Kiro und Claude Desktop

Die Gesamtstrategie ist nun bewusst konservativ:

- Nach Möglichkeit einen kleinen Satz kanonischer Konfigurationsfamilien wiederverwenden
- Behalten Sie maßgeschneiderte Autoren nur dann bei, wenn offizielle Dokumente eine eindeutige Form erfordern
- Vermeiden Sie es, automatische Schreiber für undokumentierte Ziele zu erfinden---

## 🔐 Hosted HTTP Hardening

Die HTTP-Transporte unterstützen die gleichen umgebungsgesteuerten Steuerelemente wie die Katalog-API:

| Variable | Zweck |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Inhabertoken-Authentifizierung |
| `OMNI_SKILLS_HTTP_API_KEYS` | Durch Kommas getrennte API-Schlüssel |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Nur-Administrator-Runtime-Introspektion |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max. Anfragen pro Fenster |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Ratenbegrenzungsfenster in ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Audit-Protokollierung aktivieren |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Prüfprotokoll in eine Datei schreiben |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Browser-Herkunft einschränken |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Erlaubte Quell-IPs einschränken |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Geben Sie „503“ für Nicht-Administrator- und Nicht-Gesundheitsrouten zurück |

> 🟢 `/healthz` bleibt geöffnet. „/mcp“, „/sse“ und „/messages“ erfordern eine Authentifizierung, wenn sie aktiviert sind. „/admin/runtime“ erfordert bei der Konfiguration das Admin-Token.---

## 🌍 Official Docs That Shape Support Decisions

Der aktuelle Autorensatz und die rein manuellen Grenzen wurden anhand offizieller Produktdokumente überprüft, darunter:

- Anthropischer Claude Code MCP
- OpenAI Codex CLI und OpenAI Docs MCP
- Cursor MCP-Dokumente
- Fahren Sie mit den MCP-Dokumenten fort
- Kiro MCP-Dokumente
– OpenCode MCP-Dokumente
- Cline MCP-Dokumente
- Kilo Code MCP-Dokumente
– GitHub Copilot CLI-Dokumente
- Zed MCP-Dokumente
- VS Code MCP-Dokumente
– JetBrains AI Assistant MCP-Dokumente

Diese Dokumente sind der Grund, warum einige Kunden erstklassige automatische Autoren erhalten, während andere vorerst nur Snippets verwenden.