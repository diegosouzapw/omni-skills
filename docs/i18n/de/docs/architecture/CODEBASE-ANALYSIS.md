# 🔬 Codebase Deep Analysis (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Umfassende technische Analyse der aktuellen Omni Skills-Architektur, Laufzeitoberflächen und Build-Pipeline.**
> Zuletzt analysiert: 28.03.2026---

## 📊 Project Overview

| Attribut | Wert |
|:----------|:------|
|**Name**| „Omni-Fähigkeiten“ |
|**Paketversion**| `0.1.3` |
|**Skill-Versionen**| Pro Skill und unabhängig von der Paketversion. Viele veröffentlichte Fähigkeiten sind immer noch „0.0.1“, während das Paket „0.1.2“ ist. |
|**Lizenz**| MIT (Code) + CC BY 4.0 (Inhalt) |
|**NPM**| „npx omni-skills“ |
|**Veröffentlichte Fähigkeiten**| 32 |
|**Definierte Bundles**| 7, alle vollständig durch veröffentlichte Fähigkeiten gestützt |
|**Aktive Katalogkategorien**| 15 aktive Buckets aus 18 kanonischen Taxonomiekategorien |
|**Primäre Laufzeit/Build-LOC unten als Beispiel aufgeführt**| 13.600+ |
|**Produktionsabhängigkeiten**| 7 („@modelcontextprotocol/sdk“, „cors“, „express“, „ioredis“, „ink“, „react“, „zod“) |

Aktueller Klassifizierungs-Snapshot auf Repository-Ebene aus „metadata.json“:

- durchschnittlicher Qualitätsfaktor: „96,3“.
- Durchschnittliche Best-Practice-Bewertung: „98,7“.
- durchschnittliche Sicherheitsbewertung: „95,0“.
- Alle 32 veröffentlichten Fertigkeiten gelten als „L3“.

Aktuelle Release-Baseline:

- Öffentliche Repository-Version: „v0.1.2“.
- Private Enhancer-Version: „v0.0.1“.
- Öffentliche Release-Automatisierung und private Release-Automatisierung sind sowohl aktiv als auch grün---

## 🏗️ Architecture Overview

Das Repository folgt einem**Workspace-Monorepo**-Muster mit einem gemeinsamen Katalogkern und mehreren Laufzeitoberflächen.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

Das Design ist absichtlich**artefaktgesteuert**:

1. Fertigkeiten werden als „SKILL.md“ plus lokale Support-Pakete erstellt
2. Der Build validiert, klassifiziert, archiviert und normalisiert sie
3. Die generierten Artefakte werden zum Vertrag für CLI, API, MCP und A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4.500+ LOC zusammen**– die wichtigste öffentliche Schnittstelle sowohl für Experten- als auch für geführte Nutzung.

| Befehl | Funktion |
|:--------|:---------|
| 🔎 `find [Abfrage]` | Volltext-Katalogsuche mit punktuellen Filtern |
| 📦 `installieren` | Geführte oder Flag-basierte Installation in bekannten Clients oder benutzerdefinierten Pfaden |
| 🧾 `config-mcp` | Vorschau oder Schreiben einer Client-fähigen MCP-Konfiguration |
| 🔌 `mcp <transport>` | Startet den MCP-Server in „stdio“, „stream“ oder „sse“ |
| 🌐 `api` | Startet die Katalog-API |
| 🤖 `a2a` | Startet die A2A-Laufzeit |
| 🧪 `Rauch` | Release-Preflight-Validierung |
| 🩺 „Arzt“ | Lokale Diagnose |
| 🖥️ `ui` | Ink Visual Shell mit Installation, Erkennung, Konfiguration und Service-Hub |
| 🏷️ `neu kategorisieren` | Taxonomie-Drift-Inspektion und Neufassung |

Die CLI ist nicht mehr nur ein Installationsprogramm. Es ist das öffentliche Betriebstool für die gesamte Plattform.## 🧭 Future Expansion Direction

Die öffentliche Laufzeit ist nicht mehr für Grundlagenarbeiten blockiert und die Welle der zweiten Kategorie ist bereits gelandet. Die nächste nützliche Katalogarbeit ist Tiefe und nicht mehr die Jagd nach Kategorien.

Neu aktivierte Code-native-Tracks jetzt im Katalog:

- „Design“ über „Design-Systems-Ops“, „Accessibility-Audit“ und „Design-Token-Governance“.
- „Tools“ über „mcp-server-authoring“.
- „Daten-AI“ über „Datenverträge“.
- „Maschinelles Lernen“ über „Modellservierung“.

Empfohlene nächste Richtung:

1. Vertiefung von „Design“, „Tools“, „Daten-KI“ und „Maschinelles Lernen“.
2. „Business“ und „Content-Media“ zurückstellen, es sei denn, es erscheint ein eindeutig Code-nativer Vorschlag
3. Behalten Sie die aktuelle Qualitätsuntergrenze bei, anstatt den Aktivierungsdruck für die Kategorie erneut zu erhöhen

Diese Erweiterungswelle ist jetzt in [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md) aufgezeichnet.### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**– installiert Fähigkeiten in 7 installierbaren Assistenten.

| Flagge | Ziel | Standardpfad |
|:-----|:-------|:-------------|
| `--claude` | Claude Code | `~/.claude/skills` |
| `--cursor` | Cursor | `~/.cursor/skills` |
| `--gemini` | Gemini CLI | `~/.gemini/skills` |
| `--codex` | Codex-CLI | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antigravity` | Antigravitation | `~/.gemini/antigravity/skills` |
| `--opencode` | OpenCode | `<workspace>/.opencode/skills` |

Es unterstützt:

- Vollständige Bibliotheksinstallationen
- Selektive Installationen durch „--skill“.
- Kuratierte Installationen von „--bundle“.
- Geführte TTY- und visuelle UI-Abläufe
- Benutzerdefinierte Zielpfade### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**– gemeinsam genutzte Laufzeitebene für CLI, API, MCP und A2A.

| Exportieren | Beschreibung |
|:-------|:------------|
| 🔎 `searchSkills()` | Suche mit gewichtetem Textabgleich und Filterunterstützung |
| 📋 `listSkills()` | Mehrachsige Filterung nach Qualität, Best Practices, Level, Sicherheit, Risiko, Tool und Kategorie |
| 📌 `getSkill()` | Manifestauflösung plus angereicherte öffentliche URLs |
| ⚖️ `compareSkills()` | Direkter Vergleich |
| 💡 `recommendSkills()` | Zielorientierte Empfehlung |
| 📦 `buildInstallPlan()` | Installieren Sie die Plangenerierung mit Warnungen und kundenorientierter Anleitung |
| 🗂️ `listBundles()` | Kuratierte Bundle-Liste mit Verfügbarkeit |
| 📁 `listSkillArchives()` | Archiv- und Signaturauflösung |

Dies ist die eigentliche einzige Quelle der Laufzeitwahrheit nach der Generierung.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**– vollständige MCP-Implementierung mit dem offiziellen SDK.

**Transporte**

- `stdio`
- Streambares HTTP
- SSE

**Always-on-schreibgeschützte Tools**

- `search_skills`
- `get_skill`
- `compare_skills`
- `empfehlen_skills`
- „preview_install“.

**Tools für den lokalen Modus**

- `detect_clients`
- `list_installed_skills`
- `install_skills`
- `remove_skills`
- `configure_client_mcp`

Die MCP-Oberfläche ist bewusst aufgeteilt in:

- Remote-/schreibgeschützte Katalognutzung
- Lokale/schreibfähige Sidecar-Nutzung### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1.943 LOC**– dateisystembewusste MCP-Schicht für Client-Erkennung, Skill-Management und MCP-Konfigurationsschreiben.

Aktuelle praktische Unterstützung:

-**7 installierbare Clients**
-**16 konfigurationsfähige Clients**
-**33 Konfigurationsziele**
-**19 Konfigurationsprofile**

Installationsfähige Clients:

- Claude Code
- Cursor
- Gemini-CLI
- Codex-CLI
- Kiro
- Antigravitation
- OpenCode

Zu den konfigurationsfähigen Clients und Zielen gehören:

- Claude-Einstellungen, Claude Desktop und Claude-Projektkonfiguration
- Cursor-Benutzer- und Arbeitsbereichskonfiguration
- VS Code-Arbeitsbereich, Benutzer, Insider und Dev-Container-Konfiguration
- Gemini-Benutzer- und Arbeitsbereichseinstellungen
- Antigravity-Benutzerkonfiguration
- Kiro-Benutzer-, Arbeitsbereichs- und Legacy-Pfade
- Codex CLI TOML-Konfiguration
- OpenCode-Benutzer- und Arbeitsbereichskonfiguration
- Cline-Einstellungen
– GitHub Copilot CLI-Benutzer- und Repo-Konfiguration
- Kilo-Benutzer-, Projekt- und Arbeitsbereichskonfiguration
- Arbeitsbereich YAML fortsetzen
- Windsurf-Benutzerkonfiguration
- Zed-Arbeitsbereichskonfiguration
- Goose-Benutzerkonfiguration

Der Beiwagen geht bewusst ehrlich mit den Grenzen um:

- Es wird nur in eine Zulassungsliste geschrieben
- Es wird standardmäßig eine Vorschau angezeigt
- Erstklassige Autoren bleiben nur dort erhalten, wo offizielle Dokumente ein stabiles Format offenlegen
– Es wird nicht behauptet, dass jedes MCP-fähige Produkt auch ein Skill-Install-Ziel ist### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC kombiniert**– schreibgeschützte Registrierungs-API plus Governance-Middleware.

Wichtige Endpunkte:

- `/healthz`
- `/openapi.json`
- `/admin/runtime`
- `/v1/skills`
- `/v1/skills/:id`
- `/v1/search`
- `/v1/compare`
- `/v1/bundles`
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

Governance-Baseline bereits implementiert:

- Inhaber-Token-Authentifizierung
- API-Schlüsselauthentifizierung
- Admin-Token-Authentifizierung
- Begrenzung der In-Process-Rate
- IDs anfordern
- Audit-Protokollierung
- CORS-Zulassungslisten
- IP-Zulassungslisten
- Vertrauenswürdige Proxy-Verarbeitung
- Wartungsmodus### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1.857 LOC kombiniert über die Hauptserver-, Laufzeit- und Koordinatordateien**– JSON-RPC 2.0-Aufgabenlebenszyklus für Agent-zu-Agent-Workflows.

Unterstützte Methoden:

- „Nachricht/senden“.
- „Nachricht/Stream“.
- „Aufgaben/Get“.
- „Aufgaben/Abbrechen“.
- „Aufgaben/erneut abonnieren“.
- `tasks/pushNotificationConfig/*`

Aktueller Betrieb:

- „Fähigkeiten entdecken“.
- „Recommend-Stack“.
- „Installationsplan vorbereiten“.

Haltbarkeits- und Koordinationsmodell:

- Speicher, JSON oder lokale SQLite-Persistenz
- Lebenslauf neu starten
- optionaler externer Prozessausführer
- Opt-in-Koordination geleaster Warteschlangen für gemeinsam genutzte SQLite-Worker
– optionale Redis-gestützte Koordination als erweiterter gehosteter Pfad

Die wichtigste architektonische Wahl ist hier**Simple-First Local Operation**. Redis existiert als erweiterte Option, aber der Standardproduktpfad bleibt lokal und abhängigkeitsarm.---

## ⚙️ Build Pipeline

| Skript | Sprache | Zweck |
|:-------|:---------|:--------|
| 📊 `skill_metadata.py` | Python | Validierung, Taxonomie, Bewertung und statische Sicherheitsüberprüfung |
| ✅ `validate_skills.py` | Python | Metadatengenerierung pro Skill und für die Stammzusammenfassung |
| 📑 `generate_index.py` | Python | Kompetenzindex, Manifeste, Archive, Signaturen und Prüfsummen |
| 🏗️ `build_catalog.js` | Node.js | Finale „dist/catalog.json“ und „dist/bundles.json“ |
| 🏷️ `recategorize_skills.py` | Python | Kanonische Kategorieprüfung und Neufassung |
| 🔍 `verify_archives.py` | Python | Archiv- und Signaturprüfung |

Zwei Details sind operativ wichtig:

1. „dist/“ ist Teil des Laufzeitvertrags und wird absichtlich festgeschrieben
2. Der Build ist deterministisch genug, um CI-Überprüfung und Release-Signierung zu unterstützen---

## 📦 Published Catalog

Der aktuelle öffentliche Katalog umfasst 32 Fähigkeiten:

-**Entdeckung und Planung**: „Find-Skills“, „Brainstorming“, „Architektur“, „Debugging“.
-**Designsysteme und Barrierefreiheit**: „design-systems-ops“, „accessibility-audit“.
-**Produkt- und Full-Stack-Bereitstellung**: „frontend-design“, „api-design“, „database-design“, „omni-figma“, „auth-flows“.
-**Sicherheit**: „Security-Auditor“, „Vulnerability-Scanner“, „Incident-Response“, „Threat-Modeling“.
-**OSS-Betreuer-Workflows**: „documentation“, „changelog“, „create-pr“.
-**DevOps**: „docker-expert“, „kubernetes“, „terraform“, „observability-review“, „release-engineering“.
-**KI-Engineering**: „rag-engineer“, „prompt-engineer“, „llm-patterns“, „eval-design“, „context-engineering“.

Alle sieben Pakete sind vollständig abgesichert:

- „Grundlegendes“ → „4/4“.
- „Full-Stack“ → „5/5“.
- „Design“ → „4/4“.
- „Sicherheit“ → „4/4“.
- „devops“ → „5/5“.
- „ai-engineer“ → „5/5“.
- „oss-maintainer“ → „4/4“.

Aktuelle Notenverteilung aus dem generierten Katalog:

- Qualitätswerte: „94, 95, 96, 97, 100“.
- Best-Practice-Bewertungen: „98, 99, 100“.
- Sicherheitsbewertung: alle veröffentlichten Fähigkeiten derzeit „95“.

Repräsentatives High-End:

- „omni-figma“ → „Qualität 100“, „best_practices 100“.
- „accessibility-audit“ → „quality 99“, „best_practices 100“.
- „auth-flows“ → „quality 97“, „best_practices 99“.
- „design-systems-ops“ → „Qualität 97“, „best_practices 99“.
- „Release-Engineering“ → „Qualität 97“, „Best_Practices 99“.
- „Bedrohungsmodellierung“ → „Qualität 97“, „Best_Practices 99“.
- „Context-Engineering“ → „Qualität 97“, „Best_Practices 99“.

Repräsentatives unteres Ende innerhalb des aktuellen oberen Bandes:

- „Architektur“ → „Qualität 94“, „Best_Practices 98“.
- „Changelog“ → „Qualität 94“, „Best_Practices 98“.
- `create-pr` → `quality 95`, `best_practices 98`

Das ist Absicht. Der Scorer unterscheidet nun „ausgezeichnet“ von „außergewöhnlich“, anstatt den gesamten Katalog nach oben abzuflachen.---

## 🌟 Strengths

1.**Artefakt-zuerst-Design**
   Jede Laufzeitoberfläche nutzt denselben generierten Katalog und dieselben Manifeste.
2.**Breite Protokollabdeckung**
   CLI, API, MCP und A2A existieren nebeneinander, ohne das Datenmodell zu fragmentieren.
3.**Starke Ergonomie lokaler Produkte**
   Durch die geführte Installation, die visuelle Shell, „config-mcp“ und die Standardeinstellungen für den Probelauf ist das Projekt auch für erfahrene Benutzer nutzbar.
4.**Ehrliche Sicherheitslage**
   Lokale Schreibvorgänge auf der Zulassungsliste, statisches Scannen, Signieren, Prüfsummen und Release-Überprüfung sind alle explizit.
5.**Gesunde MCP-Reichweite**
   Das Projekt unterstützt nun eine breite Palette aktueller MCP-fähiger Clients, ohne den Eindruck zu erwecken, dass undokumentierte Ziele stabil sind.---

## 🔮 Opportunities

1.**Umfassendere Paketabdeckung**
   Der nächste Schritt ist die Spezialisierung innerhalb der bestehenden Pakete und nicht nur eine breite Abdeckung.
2.**Reichhaltigere Scorer-Semantik**
   Es besteht noch Raum für eine semantischere Bewertung der Tiefe des Referenzpakets und der Workflow-Qualität.
3.**Mehr Kundenautoren nur, wenn dies gerechtfertigt ist**
   Die Expansion sollte diszipliniert bleiben und an stabile offizielle Dokumente gebunden sein.
4.**Validatorzerlegung**
   „skill_metadata.py“ ist immer noch ein großes Modul und würde von einer internen Zerlegung im Laufe der Zeit profitieren.
5.**Gehostete Governance-Eskalation**
   Die aktuelle In-Process-Basislinie reicht für Selbsthosting aus, für die Unternehmensbereitstellung wäre jedoch letztendlich eine externe Gateway- und Identitätsintegration erforderlich.