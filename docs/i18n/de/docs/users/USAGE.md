# 📗 Usage Guide (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Alles, was Sie zum Aufrufen von Fertigkeiten, zum Ausführen von Diensten und zum Betreiben der Omni Skills-Laufzeit benötigen.**

Vollständige Betriebsabläufe finden Sie im [🔧 System Runbook](../operations/RUNBOOK.md).
Die vollständige Befehlszuordnung für Endbenutzer finden Sie im [🧭 CLI-Benutzerhandbuch](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Status | Einzelheiten |
|:-------|:--------|
| ✅**Jetzt verfügbar**| 32 veröffentlichte Fähigkeiten in den Bereichen Design, Architektur, Debugging, Dokumentation, OSS, Sicherheit, DevOps, KI-Engineering, Daten, Tools und maschinelle Lernworkflows |
| 📦**Bundles**| „essentials“, „full-stack“, „design“, „security“, „devops“, „ai-engineer“ und „oss-maintainer“ werden heute vollständig unterstützt |
| 🔌**MCP-Reichweite**| 7 installierbare Clients, 16 konfigurationsfähige Clients, 33 erstklassige Konfigurationsziele, 19 Konfigurationsprofile |
| 🤖**A2A-Haltbarkeit**| Speicher, lokale Haltbarkeit von JSON oder SQLite, Wiederaufnahme des Neustarts, optionaler Prozessausführer und Opt-in-Lease-Koordination für gemeinsam genutzte Worker |---

## 🖥️ Invocation by Client

| Kunde | So rufen Sie auf | Kompetenzpfad |
|:-------|:-------------|:------------|
| 🔵**Claude Code**| `>> /skill-name hilf mir...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Verwenden Sie @skill-name, um...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Verwenden Sie @skill-name, um...` | `~/.codex/skills/` |
| 🟢**Kiro**| Fertigkeiten werden bei Bedarf automatisch geladen | `~/.kiro/skills/` |
| 🟣**Antigravitation**| `Verwenden Sie @skill-name, um...` | `~/.gemini/antigravity/skills/` |
| 🔵**Cursor**| „@skill-name“ im Chat | `~/.cursor/skills/` |
| ⚪**OpenCode**| `opencode run @skill-name` | `.opencode/skills/` |
| ⬛**Copilot**| Fertigkeitsinhalte manuell einfügen | N/A |

Clients wie Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline und Kilo Code verwenden hauptsächlich den Flow „config-mcp“ und nicht ein Skills-Verzeichnis.---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 Hinweise:**
> – In einem interaktiven Terminal öffnet „npx omni-skills“ jetzt einen geführten Installationsablauf
> – „npx omni-skills ui“ öffnet die visuelle Ink-Shell mit Installations-, Erkennungs- und Dienststartaktionen
> – Die visuelle Shell speichert aktuelle Installationen, aktuelle Dienststarts, Favoriten und benannte Voreinstellungen in „~/.omni-skills/state/ui-state.json“.
> – Außerhalb eines TTY ist die vollständige Installation immer noch die Standardeinstellung, wenn kein Selektor bereitgestellt wird
> - „--skill“ installiert nur die ausgewählten veröffentlichten Skills
> - „--bundle“ erweitert das Bundle und installiert die veröffentlichten Mitglieder, die im kuratierten Bundle deklariert sind
> – „find“ unterstützt mehr als 12 Filter-Flags: „Qualität“, „Best_Practices“, „Skill_Level“, „Sicherheit“, „Kategorie“, „Tool“, „Risiko“ und mehr
> - „config-mcp“ ist der richtige Pfad für MCP-fähige Produkte, die kein erstklassiges Skills-Verzeichnis haben---

## 🔌 Runtime Commands

Die CLI ist ein einheitliches Betriebstool, nicht nur ein Installationsprogramm.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Die visuelle Shell unterstützt:

- Geführte Installation mit bekannter Client- oder benutzerdefinierter Pfadauswahl
- Suchen und dann installieren, ohne sich Flags zu merken
- Geführte MCP-Client-Konfigurationsvorschau und Schreibabläufe
- MCP-, API- und A2A-geführter Start
- Aktuelle Installationen und Service-Neustarts
- Gespeicherte Installations- und Servicevoreinstellungen
- Lieblingsfähigkeiten und -pakete### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | Tipp |
|:--|:----|
| 1️⃣ | Verweisen Sie in Ihrer Eingabeaufforderung auf den Skill mit dem Namen |
| 2️⃣ | Stellen Sie das genaue Artefakt, den Code oder den Designkontext bereit, den der Agent benötigt |
| 3️⃣ | Bevorzugen Sie „--skill“ für einen minimalen Installationsbedarf |
| 4️⃣ | Verwenden Sie „doctor“ und „smoke“, bevor Sie Verpackungs- oder Laufzeitprobleme debuggen |
| 5️⃣ | Verwenden Sie Bundles jetzt als kuratierte Domäneninstallationen, da alle sieben Starter-Bundles vollständig gesichert sind |
| 6️⃣ | Verwenden Sie „find --install --yes“ für die Erkennung und Installation in einem Ablauf |
| 7️⃣ | Siehe [Runbook](../operations/RUNBOOK.md) für Authentifizierung, Ratenlimits, Signierung und Überprüfung der Umgebungsvariablen |