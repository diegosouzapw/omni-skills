# 🧭 Omni Skills CLI User Guide (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Die vollständige öffentliche CLI-Oberfläche, die von „omni-skills“ bereitgestellt wird.**

Verwenden Sie diesen Leitfaden, wenn Sie:

| Ziel | Befehlsbereich |
|:-----|:-------------|
| 📥 Fertigkeiten oder Pakete installieren | [Flows installieren](#3️⃣-install-flows) |
| 🔎 Durchsuchen Sie den Katalog | [Katalog-Discovery](#4️⃣-catalog-discovery) |
| 🔌 MCP-Clients konfigurieren | [MCP-Client-Konfiguration](#5️⃣-mcp-client-config) |
| 🖥️ Starten Sie MCP-, API- oder A2A-Dienste | [MCP-Server](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Verwenden Sie die visuelle Terminal-Shell | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Diagnose oder Preflight ausführen | [Diagnose](#🔟-Diagnose-und-Preflight) |---

## 1️⃣ Install and Entry Modes

Mit „npx“ installieren:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Kontext | Was passiert |
|:--------|:------------|
| 🖥️ TTY + keine Argumente | Öffnet den**geführten Installationsablauf**|
| ⚙️ Nicht-TTY + keine Argumente | Nicht interaktive Installation unter „~/.gemini/antigravity/skills“ |
| 🎨 „npx omni-skills ui“ | Markenzeichen**Ink Visual Shell**|
| 📝 `npx omni-skills ui --text` | Readline**Text-Fallback**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Befehl | Beschreibung |
|:--------|:-----------|
| `ui` | 🎨 Visueller Terminal-Hub |
| `find [Abfrage]` | 🔎 Katalogentdeckung |
| „neu kategorisieren“ | 🏷️ Taxonomieverwaltung |
| `install [flags]` | 📥 Skill-/Bundle-Installation |
| `config-mcp` | 🔌 MCP-Client-Konfiguration |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP-Servermodi |
| `api` | 🌐 Katalog-API |
| `a2a` | 🤖 A2A-Laufzeit |
| „Rauch“ | 🧪 Preflight veröffentlichen |
| `publish-check` | 📦 Überprüfung der Paketveröffentlichung |
| „Arzt“ | 🩺 Umgebungsdiagnose |
| „Hilfe“ | ❓ Befehlsreferenz |---

## 3️⃣ Install Flows

### Schnellstart

```bash
npx omni-skills
npx omni-skills install --guided
```

> Mit dem geführten Ablauf können Sie wählen:**Zielkunde**→**Bundle oder Skill**→**Benutzerdefinierter Pfad**→**Vorschau vor der Ausführung**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Flagge | Kunde |
|:-----|:-------|
| `--antigravity` | 🟣 Antigravitation *(Standard)* |
| `--claude` | 🟢 Claude Code |
| `--cursor` | 🔵 Cursor |
| `--codex` | 🔴 Codex CLI |
| `--gemini` | 🟡 Gemini CLI |
| `--kiro` | 🟠 Kiro |
| `--opencode` | ⚪ OpenCode |

> Standardinstallationsziel (nicht interaktiv): „~/.gemini/antigravity/skills“.---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Flagge | Zweck |
|:-----|:--------|
| `--category` | Nach Taxonomiekategorie filtern |
| `--tool` | Nach unterstütztem Tool filtern |
| `--risiko` | Nach Risikostufe filtern |
| `--sort` | Ergebnisse sortieren (z. B. „Qualität“) |
| `--order` | Sortierreihenfolge |
| `--min-quality` | Mindestqualitätsbewertung |
| `--min-best-practices` | Mindestpunktzahl für Best Practices |
| `--min-level` | Mindestreifegrad |
| `--min-security` | Mindestsicherheitsbewertung |
| `--validation-status` | Nach Validierungsstatus filtern |
| `--security-status` | Nach Sicherheitsstatus filtern |---

## 5️⃣ MCP Client Config

Verwenden Sie „config-mcp“, um eine Client-fähige MCP-Konfiguration in der Vorschau anzuzeigen oder zu schreiben.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<Details>
<summary>🔌 <strong>Konfigurationsfähige Client-Oberfläche</strong></summary>

| Kunde | Ziele |
|:-------|:--------|
| Claude | Einstellungen und Desktopziele |
| Cursor | Benutzer und Arbeitsbereich |
| Kodex | TOML-Konfiguration |
| Zwillinge | Benutzer und Arbeitsbereich |
| Antigravitation | Benutzerkonfiguration |
| OpenCode | Benutzer und Arbeitsbereich |
| Cline | Erstklassiges Ziel |
| GitHub Copilot CLI | Benutzer und Repo |
| Kilocode | Benutzer, Projekt und Arbeitsbereich |
| Kiro | Benutzer und Arbeitsbereich |
| Zed | Arbeitsbereich |
| VS-Code | Benutzer, Arbeitsbereich und Entwicklungscontainer |
| Weiter | Arbeitsbereich YAML |
| Junie | Projekt und Benutzer |
| Windsurfen | Benutzerkonfiguration |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**Lokaler Sidecar**fügt hinzu: Client-Erkennung, Installationsvorschau, Installations-/Entfernungsflüsse und MCP-Konfigurationsschreiben.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Route | Zweck |
|:------|:--------|
| `GET /healthz` | Gesundheitscheck |
| `GET /openapi.json` | OpenAPI-Spezifikation |
| `GET /v1/skills` | Alle Fähigkeiten auflisten |
| `GET /v1/search` | Durchsuchen Sie den Katalog |
| `GET /v1/skills/:id/archives` | Archive für einen Skill auflisten |
| `GET /v1/skills/:id/download/archive?format=zip` | Skill-Archiv herunterladen |
| `GET /v1/skills/:id/download/archive/checksums` | Prüfsummen herunterladen |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Funktion | Status |
|:--------|:-------|
| 🔎 Aufgabenbewusste Erkennung | ✅ |
| 📋 Übergabe des Installationsplans | ✅ |
| 🔄 Umfrage | ✅ |
| 📡Streaming | ✅ |
| ❌ Stornierung | ✅ |
| 🔔 Push-Benachrichtigungskonfiguration | ✅ |
| 💾 Beharrlichkeit | Speicher, JSON und SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funktionen

| Funktion | Beschreibung |
|:--------|:-----------|
| 🧭 Geführte Installation | Wählen Sie den Client- oder benutzerdefinierten Pfad |
| 🔎 Suchen + installieren | Kein Auswendiglernen der Flagge erforderlich |
| 🔌 MCP-Konfiguration | Flows in der Vorschau anzeigen und schreiben |
| 🖥️ Servicestart | MCP-, API- und A2A-geführter Start |
| 🕐 Aktuelle | Aktuelle Installationen und Service-Neustarts |
| ⭐ Favoriten | Gespeicherte Fertigkeiten und Pakete |
| 💾 Voreinstellungen | Benannte Installations- und Servicevoreinstellungen |

>**Statuspfad:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Überprüft: Repo-Status, lokalen Installationsstatus, Laufzeitverfügbarkeit und Umgebungsprobleme.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Validiert: Build, Tests, Paketausgabe, Service-Boot, Scannerabdeckung und Release-Verpackung.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Befehl | Zweck |
|:-----------|:--------|:--------|
| 🆕 Neuer Benutzer | „npx omni-skills“ | Geführte Erstinstallation |
| 🔧 Betreiber | `npx omni-skills config-mcp --list-targets` | Lokales MCP konfigurieren |
| 🔧 Betreiber | `npx omni-skills mcp stream --local` | Lokalen Sidecar starten |
| 📦 Betreuer | „Npx Omni-Skills Smoke“ | Eine Veröffentlichung validieren |
| 🔍 Power-User | `npx omni-skills find security --sort quality --min-quality 95` | Finden Sie zuerst die beste Fähigkeit |---

## 📖 Related Documents

| Doc | Was es abdeckt |
|:----|:--------------|
| 🚀 [Erste Schritte](./GETTING-STARTED.md) | Installation und Überprüfung in weniger als 2 Minuten |
| 📗 [Nutzungsleitfaden](./USAGE.md) | Alle CLI-Befehle, Muster und Modi |
| 📦 [Bundles](./BUNDLES.md) | Kuratierte Kompetenzsammlungen |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Betriebsreferenz |
| 🔌 [Lokaler MCP-Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Dateisystem-Tools und Konfigurationsschreiben |