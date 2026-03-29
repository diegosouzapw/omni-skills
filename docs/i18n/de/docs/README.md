# 📖 Omni Skills — Documentation Hub (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Die zentrale Referenz für die Nutzung, den Betrieb, die Erweiterung und das Verständnis der aktuellen Omni Skills-Plattform.**

Standard-Community-Dateien befinden sich im Repository-Stammverzeichnis:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| Bereich | Staat | Einzelheiten |
|:-----|:------|:--------|
| 🏗️**Laufzeit**| ✅ Aktuell | Unified CLI, Ink Visual Shell, API, MCP und A2A werden alle aus demselben Paket geliefert |
| 📦**Katalog**| 📌 32 Fähigkeiten | 32 veröffentlichte „L3“-Fähigkeiten in 15 aktiven Katalogkategorien und 7 vollständig unterstützten Bundles |
| 🎯**Installieren**| ✅ Aktuell | Geführte TTY-Installation, selektive „--skill“ und „--bundle“, Unterstützung benutzerdefinierter Pfade und entdeckungsgesteuerte Installation |
| 🌐**API**| ✅ Aktuell | Schreibgeschützte Registrierungs-API mit Authentifizierung, Admin-Laufzeit, Ratenbegrenzung, CORS/IP-Zulassungslisten, Wartungsmodus und Downloads |
| 🔌**MCP**| ✅ Aktuell | „stdio“ · „stream“ · „sse“, lokaler Sidecar-Modus, 7 installierbare Clients, 16 konfigurationsfähige Clients, 33 Konfigurationsziele und 19 Konfigurationsprofile |
| 🤖**A2A**| ✅ Aktuell | Einfache lokale Laufzeit mit JSON/SQLite-Dauerhaftigkeit, Wiederaufnahme des Neustarts, SSE-Streaming, Abbruch, externem Executor-Modus und optionaler geleaster Koordination bei expliziter Aktivierung |
| 🛡️**Sicherheit**| ✅ Aktuell | Statischer Scanner, optionales ClamAV/VirusTotal, signierte Release-Artefakte, Archivprüfsummen und Überprüfung des Release-Zeitpunkts |
| 📋**Klassifizierung**| ✅ Aktuell | Kanonische Taxonomie, Reife, semantische Qualitätsverbreitung, Best-Practice-Verbreitung und Sicherheitsbewertung |
| 📁**Archive**| ✅ Aktuell | Skillspezifische „.zip“- und „.tar.gz“-Archive mit SHA-256-Prüfsummenmanifesten |
| 🔐**Signieren**| ✅ Aktuell | Auf Release-Tags werden getrennte Signaturen erzwungen. Lokale Installationsflüsse verbrauchen dieselben Manifest- und Prüfsummenmetadaten |
| 🧬**Ansaugstrom**| ✅ Aktuell | Native Fähigkeiten landen unter „skills/“; PR-Automatisierung prüft sie und schlägt Omni-enhanced-Derivate unter „skills_omni/“ | vor## 🔭 Current Project State

Der Foundation Track befindet sich jetzt im aktiven Projektstatus und die zweite Welle der Kategorieerweiterung ist bereits im Katalog. Das Projekt sollte nun als funktionierende Basislinie mit optionalen zukünftigen Erweiterungsspuren gelesen werden:

- Öffentlich „v0.1.2“ und privat „v0.0.1“ sind die aktuelle stabile Versionsebene
– Der Katalog umfasst jetzt 32 veröffentlichte Fertigkeiten in 15 aktiven Kategorien und 7 vollständig abgesicherte Pakete
- Sowohl die muttersprachliche Aufnahme als auch die kuratierte „skills_omni/“-Ausgabe sind betriebsbereit, einschließlich der mehrsprachigen muttersprachlichen Aufnahme und der nur auf Englisch kuratierten Ausgabe
- Protokolloberflächen, Release-Automatisierung und private Erweiterungsautomatisierung sind in Betrieb, nicht im Bootstrap

Zukünftige Erweiterung bleibt geplant:

- Vertiefung von „Design“, „Tools“, „Daten-KI“ und „Maschinelles Lernen“.
– Vermeiden Sie das erneute Öffnen ruhender nicht-code-nativer Kategorien, bis die aktuellen code-nativen Spuren eine stärkere Tiefe haben
- Behalten Sie dabei den Qualitätsuntergrund und den Enhancer-Review-Pfad bei

Dieser Plan ist nun aufgeteilt in:

- die abgeschlossene erste Erweiterungswelle in [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- die abgeschlossene zweite Erweiterungswelle in [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- und der zukunftsweisende Rückstand in [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Diese Architekturfragen sind in der Praxis nicht mehr „offen“ und werden nun als Projektentscheidungen behandelt:

1.**Verteilung bleibt Manifest zuerst plus signierte Archive**
   Das maschinenlesbare Manifest bleibt der von CLI, API, MCP und A2A genutzte Vertrag. Signierte Pro-Skill-Archive sind die Download- und Veröffentlichungsoberfläche, die über diesem Vertrag liegt.
2.**Private oder Premium-Kataloge sollten dasselbe Manifestschema wiederverwenden**
   Authentifizierung und Richtlinie sollten extern geschichtet werden, nicht durch Abspaltung der Manifest- oder Katalogform.
3.**Die MCP-Konfiguration sollte auf ein paar kanonische Exportfamilien konvergieren**
   Omni Skills standardisiert jetzt JSON „mcpServers“, JSON „servers“, JSON „context_servers“, YAML „mcpServers“, YAML „extensions“ und TOML „[mcp_servers]“ und behält maßgeschneiderte Autoren nur dort bei, wo offizielle Clientdokumente eine andere Struktur erfordern.

Diese Entscheidungen stehen im Einklang mit der aktuellen offiziellen MCP- und Kundendokumentation, einschließlich:

- Offizielle Anleitung zur MCP-Registrierung und Erweiterungsunterstützung unter „modelcontextprotocol.io“.
- OpenAI Docs MCP- und Codex CLI-Dokumente unter „developers.openai.com“ und „platform.openai.com“.
- VS Code MCP-Erweiterung und Produktdokumente unter „code.visualstudio.com“.
– Client-Dokumente für Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman und JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Was Sie lernen werden |
|:----|:----|
| 📘 [Erste Schritte](users/GETTING-STARTED.md) | Installieren, überprüfen und rufen Sie Ihren ersten Skill auf |
| 🧭 [CLI-Benutzerhandbuch](users/CLI-USER-GUIDE.md) | Vollständige Befehlsreferenz und reale CLI-Nutzungsmuster |
| 📗 [Nutzungsleitfaden](users/USAGE.md) | CLI-Befehle, Installationsmodi, Laufzeitbefehle und MCP-Konfigurationsabläufe |
| 📦 [Bundles](users/BUNDLES.md) | Kuratierte Pakete und ihre aktuelle Verfügbarkeit |
| 📚 [Katalog](CATALOG.md) | Automatisch generierter Katalog veröffentlichter Fähigkeiten |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Erstellen, Bereitstellen, Sichern und Fehlerbehebung der Laufzeit |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Was Sie lernen werden |
|:----|:----|
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Architekturentwicklung, geschlossene Entscheidungen und verbleibende Erweiterungsbereiche |
| 🧭 [CLI UX Roadmap](architecture/CLI-UX-ROADMAP.md) | Historischer Plan und aktuelle Form des geführten und visuellen CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Kern-Monorepo und Shared-Runtime-Entscheidung |
| 🔬 [Codebasisanalyse](architecture/CODEBASE-ANALYSIS.md) | Aktuelle Laufzeitzusammensetzung, Anzahl und Systemgrenzen |
| 🌐 [Katalog-API-Oberfläche](specs/CATALOG-API.md) | HTTP-Endpunkte, Filterung, Governance und Downloads |
| 🧩 [CLI-geführter Installer](specs/CLI-GUIDED-INSTALLER.md) | Verhaltensvertrag für den geführten Installateur |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Ink Visual Shell, Zustandsmodell und Service-Hub |
| 🔌 [Lokaler MCP-Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Dateisystemfähige Tools, Zulassungslistenmodell und Konfigurationsschreiben |
| 🧭 [Client-Support-Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Unterstützte CLI- und IDE-Clients, Autoren, manuelle Ziele und Quellreferenzen |
| 📊 [Fertigkeitsklassifizierung](specs/SKILL-CLASSIFICATION.md) | Taxonomie, Bewertungsheuristik und Metadatenartefakte |
| 🛡️ [Sicherheitsvalidierung](specs/SECURITY-VALIDATION.md) | Scanner, Archive, Signaturen und Freigabeüberprüfung |
| 📋 [Skill-Manifest-Spezifikation](specs/SKILL-MANIFEST.md) | Maschinenlesbares Manifestformat und Kompatibilitätsvertrag |### 🤝 If You Want to **Contribute**

| Doc | Was Sie lernen werden |
|:----|:----|
| 📝 [Leitfaden für Beiträge](../CONTRIBUTING.md) | Repo-Workflow und Pull-Request-Erwartungen |
| 🧾 [Skill-PR-Workflow](contributors/SKILL-PR-WORKFLOW.md) | Native Aufnahme, automatische Enhancer-Verarbeitung, „skills_omni/“-Veröffentlichung und Erwartungen der Prüfer |
| 📄 [Skill-Vorlage](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` mit aktuellem Titel und Struktur |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Struktur- und Qualitätserwartungen an eine Fertigkeit |
| ✅ [Quality Bar](contributors/QUALITY-BAR.md) | Akzeptanzkriterien für das Repositorium |
| 🏆 [High-Score-Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | Was führt zu hoher Reife, Qualität, Best Practices und Sicherheitswerten |
| 📋 [Aufgabenrückstand](tasks/README.md) | Detaillierter Umsetzungsrückstand für die verbleibenden öffentlichen und privaten Arbeiten |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Die veröffentlichte „Omni-Skills“-Binärdatei ist der einheitliche öffentliche Einstiegspunkt.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

Für die vollständige Endbenutzer-Befehlsoberfläche verwenden Sie das [CLI-Benutzerhandbuch](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Die Build-Pipeline gibt die maschinenlesbaren Dateien aus, die jede Laufzeitoberfläche steuern:

| Artefakt | Zweck |
|:---------|:--------|
| `metadata.json` | Repositoryweite Validierung und Score-Zusammenfassung |
| `skills_index.json` | Repo-lokaler normalisierter Fähigkeitsindex |
| `dist/catalog.json` | Veröffentlichter Katalog zur Suche und Auflistung |
| `dist/bundles.json` | Bundle-Definitionen mit Verfügbarkeit |
| `dist/manifests/<skill>.json` | Maschinenlesbares Manifest pro Skill |
| `dist/archives/<skill>.zip` | Skill-Archiv (zip) |
| `dist/archives/<skill>.tar.gz` | Skill-Archiv (Tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256-Prüfsummenmanifest |

„dist/“ bleibt absichtlich festgeschrieben. Diese generierten Artefakte sind Teil des Installations-, API-, MCP-, A2A-, Smoke- und Release-Vertrags.### 🌐 API

```bash
npx omni-skills api --port 3333
```

Schreibgeschützte Registrierungs-API für Fertigkeiten, Pakete, Vergleiche, Installationsplanung und Artefakt-Downloads.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Der lokale Sidecar unterstützt jetzt erstklassiges MCP-Konfigurationsschreiben für:

- Claude Code
- Cursor
- VS-Code und Entwicklungscontainer
- Gemini-CLI
- Antigravitation
- Kiro
- Codex-CLI
- Weiter
- Windsurfen
- OpenCode
- Cline
- GitHub Copilot-CLI
- Kilocode
- Zed
- Gans### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Aufgabenlebenszyklus, Streaming, Persistenz, Neustartwiederherstellung und einfache lokale Orchestrierung. Die gemeinsam genutzte geleaste Ausführung ist verfügbar, wenn sie explizit aktiviert ist. Redis bleibt eine erweiterte gehostete Option und nicht der standardmäßige lokale Pfad.---

## 🗂️ Repository Map

| Pfad | Zweck |
|:-----|:--------|
| 📂 `Fähigkeiten/` | Kanonische Autorenfähigkeiten |
| 📖 `docs/users/` | Endbenutzerdokumentation |
| 🤝 `docs/contributors/` | Vorlagen und Anleitungen für Mitwirkende |
| 🏗️ `docs/architecture/` | Roadmap, ADRs und technische Analyse |
| 🔧 `docs/operations/` | Operative Runbooks |
| 📋 `docs/specs/` | Laufzeit-, Protokoll- und Artefaktverträge |
| 📚 `docs/CATALOG.md` | Generierter Kompetenzkatalog |
| 📦 `dist/` | Erzeugte maschinenlesbare Artefakte |
| 🧠 `packages/catalog-core/` | Laufzeit des gemeinsam genutzten Katalogs |
| 🌐 `packages/server-api/` | Schreibgeschützte HTTP-API |
| 🔌 `packages/server-mcp/` | MCP-Server und lokaler Sidecar |
| 🤖 `packages/server-a2a/` | A2A-Server und Task-Laufzeit |
| 🖥️ `tools/bin/` | CLI-Einstiegspunkte |
| 📚 `tools/lib/` | Installations- und UI-Helfer |
| ⚙️ `tools/scripts/` | Validierung, Generierung, Verifizierung und Tests |---

## 🧪 Release Validation

```bash
npm run smoke
```

Der Rauchlauf validiert:

- ✅ Kompetenzvalidierung und Metadatengenerierung
- ✅ Tools zur Neukategorisierung der Taxonomie
- ✅ Katalogartefaktgenerierung
- ✅ generierter Katalogabschlag
- ✅ Archivgenerierung und -überprüfung
- ✅ automatisierte Testsuite
- ✅ `npm pack --dry-run`
- ✅ API-Boot und -Zustand
- ✅ MCP-Boot in „stdio“, „stream“ und „sse“.
- ✅ A2A-Boot, Polling, SSE-Streaming, Abbruch und Push-Config-Lebenszyklus