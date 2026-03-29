# 🗺️ Agent-Native Roadmap (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Der Architektur-Evolutionsplan für Omni Skills: vom Installer-First-Repository zur Laufzeit des gemeinsamen Katalogs, die CLI, API, MCP und A2A ohne duplizierte Logik unterstützt.**---

## 📊 Current Platform Areas

| Phase | Name | Status |
|:------|:-----|:-------|
| 1️⃣ | Verträge und Artefakte | ✅ Aktuell |
| 2️⃣ | Schreibgeschützte Katalog-API | ✅ Aktuell |
| 3️⃣ | MCP Discovery-Oberfläche | ✅ Aktuell |
| 4️⃣ | Lokale Installations- und Konfigurationsoberfläche | ✅ Aktuell |
| 5️⃣ | A2A-Orchestrierung | ✅ Aktuell |### ✅ What Exists Today

- Maschinenlesbare Katalogartefakte in „dist/“.
– schreibgeschützte HTTP-API mit Endpunktabdeckung für Suche, Bundles, Vergleich, Installationsplanung und Downloads
- MCP-Server mit „stdio“, streambaren HTTP- und SSE-Transporten
- Lokaler Sidecar mit Schreibvorgängen auf der Zulassungsliste und „config-mcp“-Flows
– 7 installierbare Clients, 16 konfigurationsfähige Clients, 33 MCP-Konfigurationsziele und 19 Konfigurationsprofile
- Tiefergehende Bundle-Spezialisierung innerhalb von „Full-Stack“, „Security“, „Devops“ und „AI-Engineer“ über „Auth-Flows“, „Threat-Modeling“, „Release-Engineering“ und „Context-Engineering“.
- Pro-Skill-Archive („zip“, „tar.gz“) mit SHA-256-Prüfsummen und getrennten Signaturen auf Release-Tags
– API-Governance-Basislinie: Träger-/API-Schlüsselauthentifizierung, Administrator-Laufzeitauthentifizierung, Ratenbegrenzung, Prüfprotokollierung, CORS/IP-Zulassungslisten, Vertrauensproxy, Wartungsmodus und Anforderungs-IDs
– A2A-Laufzeit mit Aufgabenlebenszyklus, JSON/SQLite-Dauerhaftigkeit, Wiederaufnahme des Neustarts, SSE-Streaming, Abbruch, Push-Benachrichtigungen, optionalem Prozessausführer und Opt-in-Leasing-Koordination### 🔭 Future Expansion Areas

Die Kern-Roadmap beschreibt nun den aktuellen Plattformumfang. Bei den übrigen Elementen handelt es sich um zukünftige Erweiterungsbereiche, nicht um grundlegende Lücken:

- ab diesem Zeitpunkt nur noch hochselektive MCP-Ergänzungen und nur dort, wo offizielle öffentliche Dokumente einen sicheren Autor ermöglichen
- Umfangreichere Referenzpakete und mehr semantische Bewertung, sodass der Klassifikator weiterhin außergewöhnliche Fähigkeiten von lediglich ausgefeilten Fähigkeiten trennt
- Vom Unternehmen gehostete Governance über die aktuelle In-Process-Baseline hinaus, wenn das Projekt später eine Gateway- oder IdP-Integration benötigt
- tiefere Spezialisierung in den neu aktivierten Bereichen „Design“, „Tools“, „Daten-KI“ und „Maschinelles Lernen“.
- Fortsetzung der betrieblichen Optimierung rund um den privaten Enhancer unter Beibehaltung seines formellen Betriebsmodells: OmniRouter an „cx/gpt-5.4“ angeheftet, gehostete Cloud im „Mock“- oder degradierten Preflight und zuverlässige „Live“-Ausführung im LAN oder selbstgehostete Ausführung
- Fortsetzung der Release- und Workflow-Verstärkung nur als Quality-of-Service-Arbeit, nicht als fehlende Plattformgrundlage## Future Catalog Expansion Track

Die ersten beiden öffentlichen Kategorieerweiterungswellen sind nun gelandet:

- „Design“ → „Design-Systems-Ops“, „Zugänglichkeitsprüfung“, „Design-Token-Governance“.
- „Tools“ → „MCP-Server-Authoring“.
- `data-ai` → `data-contracts`
- „Maschinelles Lernen“ → „Modellbereitstellung“.

Der nächste empfohlene Schritt ist nicht mehr die Aktivierung der Kategorie als Selbstzweck. Es geht darum, diese neu aktiven Code-Native-Tracks zu vertiefen, sodass sie sich wie dauerhafte Produktoberflächen anfühlen und nicht wie Stützpunkte für einzelne Fertigkeiten.

Empfohlene Richtung:

1. „Design“ durch funktionsfähigere Design-System-Workflows vertiefen
2. „Tools“ mit Autoren- und Plugin-orientierten Fähigkeiten vertiefen
3. Vertiefen Sie „Data-AI“ mit Implementierungs-First-Pipeline- und Instrumentierungskompetenzen
4. Vertiefung des „maschinellen Lernens“ mit Fähigkeiten in den Bereichen Service, Schulung und Bewertung

Kategorien wurden absichtlich zurückgestellt, es sei denn, es werden starke Code-native Vorschläge angezeigt:

- „Geschäft“.
- „Content-Medien“.

Diese Expansionsgeschichte wird jetzt verfolgt in:

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Sorgen Sie dafür, dass der aktuelle „npx omni-skills“-Workflow funktioniert
- ✅ Einführung einer maschinenlesbaren Wahrheitsquelle für Kompetenzen
- ✅ Unterstützung bei der Erkennung, Empfehlung und Installationsplanung durch Agenten
- ✅ Trennen Sie Remote-Katalogbelange von Schreibvorgängen im lokalen Dateisystem
- ✅ Dieselben Metadaten für CLI, API, MCP und A2A wiederverwenden---

## 🚫 Non-Goals

- ❌ Remote-Installation auf dem Benutzercomputer von einem gehosteten Server
- ❌ Ersetzen Sie „SKILL.md“ als kanonisches Autorenformat
- ❌ Fordern Sie die Mitwirkenden auf, Manifeste von Hand zu schreiben
- ❌ Verwandeln Sie das Projekt standardmäßig in eine stark gehostete Warteschlangenplattform---

## 🏗️ Target Architecture

Ein**Katalogkern**mit drei Protokolloberflächen:

| Oberfläche | Am besten für | Modus |
|:--------|:---------|:-----|
| 🌐**REST-API**| Registrierungszugriff, UI-Integrationen, Drittanbieter-Konsumenten | Schreibgeschützt |
| 🔌**MCP**| Agentenerkennung, Installationsvorschauen, Konfigurationsschreiben, Client-Rezepte | Schreibgeschützt + lokale Schreibvorgänge |
| 🤖**A2A**| Agent-zu-Agent-Orchestrierung und Installationsplanübergabe | Aufgabenlebenszyklus mit einfacher lokaler Haltbarkeit |### ⚙️ Core Principle

>**Alle Protokolle nutzen dieselbe generierte Artefaktfamilie.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Das Manifest bleibt der gemeinsame Vertrag. Archive sind Verteilungsartefakte, die über diesem Vertrag liegen, und kein Ersatz dafür.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Wird von gehosteten API- und Remote-MCP-Servern verwendet.

| ✅ Erlaubt | ❌ Nicht erlaubt |
|:-----------|:---------------|
| Suchfähigkeiten | In das Dateisystem des Aufrufers schreiben |
| Manifeste abrufen | Lokale Client-Konfiguration ändern |
| Fähigkeiten vergleichen | Beliebigen Maschinenzustand ableiten |
| Pakete empfehlen | — |
| Installationspläne erstellen | — |### 2️⃣ Local Installer Mode

Wird von der CLI und dem MCP-Sidecar verwendet.

| ✅ Erlaubt |
|:-----------|
| Lokale KI-Clients erkennen |
| Installierte Fähigkeiten überprüfen |
| Vorschau von Dateivorgängen |
| Skillverzeichnisse installieren oder entfernen |
| Lokale MCP-Konfiguration nach Vorschau schreiben |

> 📌 Dies ist nach wie vor der einzige Modus, in dem echte Betriebssystemschreibvorgänge stattfinden.---

## 📐 Protocol Split

### 🌐 REST API

Ideal für Registrierungszugriff, Suche, Vergleich, versionierte Downloads und Installationsplanung.

**Endpunkte**: „GET /v1/skills“ · „GET /v1/skills/:id“ · „GET /v1/search“ · „GET /v1/compare“ · „GET /v1/bundles“ · „POST /v1/install/plan“ · „GET /healthz“.### 🔌 MCP

Ideal für die werkzeugbasierte Erkennung, sofortige Empfehlungen, Installationsvorschauen und kundenspezifische MCP-Einrichtung.

**Schreibgeschützte Tools**: „search_skills“ · „get_skill“ · „compare_skills“ · „recommend_skills“ · „preview_install“.

**Lokale Tools**: „detect_clients“ · „list_installed_skills“ · „install_skills“ · „remove_skills“ · „configure_client_mcp“.### 🤖 A2A

Am besten geeignet für Erkennungsübergabe, Installationsplan-Workflows und wiederaufnehmbare Agentenaufgabenausführung.

**Aktuelle Vorgänge**: „discover-skills“ · „recommend-stack“ · „prepare-install-plan“.---

## 🛡️ Security Model

| Prinzip | Umsetzung |
|:----------|:---------------|
| 🔒 Gehostete Dienste sind schreibgeschützt | API und Remote-MCP schreiben nicht in das Dateisystem des Aufrufers |
| 📂 Schreibt bleibt lokal | Nur CLI- und MCP-Sidecar |
| 👁️ Vorschau vor dem Schreiben | Probelauf-Standardwerte für lokale Mutationen |
| 🔑 Integrität ist explizit | SHA-256-Prüfsummen für generierte Artefakte |
| ✍️ Freigabevertrauen ist explizit | Getrennte Signaturen werden auf Release-Tags erzwungen |
| ⚠️ Risiko ist aufgetaucht | Risiko- und Sicherheitsmetadaten werden an jede Laufzeitoberfläche weitergegeben |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- dokumentierte Zielarchitektur
- Definiertes Manifestschema
- generierte Metadaten, Kataloge, Manifeste, Bundles und Archive### Phase 2: Catalog Service

- schreibgeschützte HTTP-API mit Express 5
- Suche, Filterung, Manifestsuche, Bundle-Auflistung, Vergleich und Downloads
– Umgebungsgesteuerte gehostete Governance-Grundlinie### Phase 3: MCP Discovery

- offizielle „@modelcontextprotocol/sdk“-Integration
- „stdio“, streambare HTTP- und SSE-Transporte
- schreibgeschützte Tools, Ressourcen und Eingabeaufforderungen, die durch den gemeinsam genutzten Katalog unterstützt werden### Phase 4: Local Install and Config Surface

- Lokaler Sidecar mit Schreibvorgängen auf der Zulassungsliste
- Erkennung für 7 installierbare Clients
- Schreiben von Konfigurationen für 16 konfigurationsfähige Clients auf 33 Zielen und 19 Konfigurationsprofilen
- Geführte „config-mcp“-Abläufe in der CLI und der visuellen Shell
- Stabile Unterstützung für Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose und Dev Containers### Phase 5: A2A Orchestration

- Agentenkarte unter „/.well-known/agent.json“.
- Konfigurationsmethoden „message/send“, „message/stream“, „tasks/get“, „tasks/cancel“, „tasks/resubscribe“ und Push-Benachrichtigung
- JSON- und SQLite-Persistenz mit Neustartwiederherstellung
- optionaler externer Prozessausführer
- Opt-in-geleaste Ausführung für alle Mitarbeiter für SQLite und optionale erweiterte Redis-Koordination
- Simple-First-Standardwerte werden im Speicher, JSON oder SQLite ohne externe Abhängigkeiten beibehalten### Current Enhancer Operating Decision

Das vom privaten Enhancer unterstützte „Live“-Modell ist jetzt explizit:

- Die gehostete PR-Automatisierung führt einen Preflight-gesteuerten „Live“-Versuch durch
– Wenn das öffentliche OmniRoute-Gateway blockiert oder instabil ist, wird der PR mit einem betreiberbezogenen Grund als „blockiert“ markiert, anstatt undurchsichtig auszufallen
- Der kanonisch zuverlässige „Live“-Pfad bleibt LAN oder die lokale Dienstausführung
- Geplante private GitHub-Ausführungen bleiben standardmäßig „simuliert“, es sei denn, ein Betreiber fordert ausdrücklich „Live“ an---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Entscheidung**: Behalten Sie das Manifest als gemeinsamen Vertrag bei und behalten Sie signierte pro-Skill-Archive als Verteilungsoberfläche bei.

**Warum**:
– CLI, API, MCP und A2A nutzen bereits die normalisierte Manifestform
- Archive eignen sich ideal zum Herunterladen und Überprüfen, sind aber als einziger Discovery-Vertrag schlecht geeignet
- Dadurch bleibt die Erstellung einfach und die Verteilung nachweisbar### 2. Private or Premium Catalogs

**Entscheidung**: Das gleiche Manifest- und Katalogformat wiederverwenden und die Authentifizierung oder Richtlinie extern schichten.

**Warum**:
- Es vermeidet eine Aufspaltung des Datenmodells
- Es entspricht dem aktuellen API/MCP-Governance-Ansatz
– Es bleibt mit der Ausrichtung des MCP-Ökosystems rund um OAuth-Client-Anmeldeinformationen und unternehmensverwaltete Autorisierung kompatibel### 3. Client Writer Strategy

**Entscheidung**: Konvergenz auf einen kleinen Satz kanonischer Exportfamilien und behalten Sie maßgeschneiderte Writer nur dort bei, wo offizielle Kundendokumente dies erfordern.

**Kanonische Familien werden jetzt verwendet**:
- JSON „mcpServers“.
- JSON-„Server“.
- JSON „context_servers“.
- YAML „mcpServers“.
- TOML „[mcp_servers]“.

**Warum**:
- Es sorgt dafür, dass die Implementierung wartbar bleibt
- Es unterstützt weiterhin kundenspezifische Anforderungen wie Claude-Einstellungen, Continue YAML, Zed „context_servers“ und Codex TOML
- Es wird vermieden, fragile Writer für Clients ohne stabile öffentliche Konfigurationsdokumente zu erfinden---

## 🌍 Research Notes Behind Those Decisions

Die aktuellen Entscheidungen wurden anhand offizieller Ökosystemdokumente überprüft:

– Das MCP-Ökosystem dokumentiert jetzt optionale Erweiterungen wie OAuth-Client-Anmeldeinformationen und unternehmensverwaltete Autorisierung, die die Externalisierung der gehosteten Authentifizierung anstelle der Abspaltung des Katalogformats unterstützt
– OpenAI dokumentiert einen öffentlichen Dokumenten-MCP-Server und Codex-MCP-Konfigurationsmuster, die mit der Shared-Manifest-plus-Client-Writer-Strategie übereinstimmen
- VS Code dokumentiert erstklassige MCP-Unterstützung und einen Erweiterungsleitfaden, der die Wartung seines dedizierten „serverbasierten“ Writers erleichtert
– JetBrains AI Assistant dokumentiert die MCP-Einrichtung über die Benutzeroberfläche des Produkts und nicht über einen stabilen plattformübergreifenden Dateivertrag, der es unterstützt, es vorerst im manuellen/Snippet-Bereich zu belassen---

## 🔮 Longer-Term Decision Points

Nur wenige strategische Fragen bleiben wirklich offen:

1. Ob ein Kunde jenseits der aktuellen Matrix wirklich die Messlatte für erstklassiges Schreiben setzt oder ob die übrigen Produkte weiterhin manuell/nur als Snippet verfügbar sein sollten
2. Wann, wenn überhaupt, sollte die gehostete Governance hinter einem externen Gateway oder Unternehmens-IdP statt der aktuellen In-Process-Baseline verlagert werden?
3. Wie weit sollte der Bewerter bei der Bewertung der Tiefe des Referenzpakets und der operativen Qualität gehen, bevor es für die Mitwirkenden zu eigensinnig wird?