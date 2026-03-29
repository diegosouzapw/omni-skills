# 🚀 Getting Started (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Installieren Sie Fertigkeiten, überprüfen Sie die Einrichtung und rufen Sie Ihre erste KI-Fähigkeit in weniger als 2 Minuten auf.**---

## 📊 Current Catalog Status

| Metrisch | Wert |
|:-------|:------|
| Veröffentlichte Fähigkeiten |**32**in 15 aktiven Kategorien, darunter Architektur, Design, Sicherheit, DevOps, KI-Engineering und mehr |
| Definierte Bundles |**7**(alle vollständig durch veröffentlichte Fähigkeiten untermauert) |
| Installationsfähige Clients |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| MCP-Konfigurationsfähige Clients |**16**über 33 erstklassige MCP-Konfigurationsziele |---

## 📦 Step 1 — Install

### Schnellstart

```bash
npx omni-skills
```

In einem interaktiven Terminal wird jetzt das geführte Installationsprogramm geöffnet, anstatt stillschweigend einen Client anzunehmen.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Dadurch wird der Marken-Terminal-Hub für Installation, Erkennung, MCP, API und A2A-Start geöffnet.### 🎯 Default Install (Antigravity Outside TTY)

Außerhalb eines TTY ist das Installationsprogramm ohne Argumente immer noch standardmäßig auf „~/.gemini/antigravity/skills“ eingestellt.### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ Die Starterpakete sind jetzt vollständig unterstützt, einschließlich „Devops“ und „AI-Engineer“.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Überprüfen Sie, ob die Fähigkeiten an der richtigen Stelle gelandet sind:```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

Oder nutzen Sie die integrierte Diagnose:```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

Bietet Agenten-Dateisystem-Tools zum Erkennen von Clients, zum Installieren/Entfernen von Fähigkeiten und zum Schreiben von MCP-Konfigurationen:```bash
npx omni-skills mcp stream --local
```

Sie können MCP auch für Clients konfigurieren, die keine Skill-Installationsziele sind:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Stellt den Fertigkeitskatalog als schreibgeschützte HTTP-API bereit:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Erkennung, Empfehlung, Installationsplanung, Abfrage und Streaming von Agent zu Agent:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Ein Skill ist ein strukturiertes Markdown-Playbook („SKILL.md“), das einem KI-Agenten Folgendes gibt:

| Komponente | Zweck |
|:----------|:--------|
| 📋**Frontmatter**| Maschinenlesbare Metadaten (Name, Kategorie, Tags, Tools, Risiko) |
| 📝**Körper**| Aufgabenspezifische Anweisungen, Schritte, Leitplanken und Beispiele |
| 📚**Referenzen**| Unterstützende Dokumente, die der Agent während der Ausführung einsehen kann |
| 🎨**Vermögenswerte**| Symbole, Bilder oder andere verpackte Ressourcen |---

## ➡️ Next Steps

| Doc | Was Sie lernen werden |
|:----|:----|
| 🧭 [CLI-Benutzerhandbuch](CLI-USER-GUIDE.md) | Vollständige Befehlsreferenz für Installation, Laufzeit, Konfiguration und Diagnose |
| 📗 [Nutzungsleitfaden](USAGE.md) | Alle CLI-Befehle, Eingabeaufforderungsmuster und Laufzeitmodi |
| 📦 [Bundles](BUNDLES.md) | Kuratierte Fertigkeitssammlungen und deren Verfügbarkeit |
| 📚 [Katalog](../CATALOG.md) | Automatisch generierter Katalog veröffentlichter Fähigkeiten |
| 📖 [Dokumentations-Hub](../README.md) | Vollständige Dokumentationskarte |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Betriebsreferenz |