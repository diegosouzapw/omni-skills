# 📐 ADR-0001: Agent-Native Workspace Foundation (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Die wichtigste architektonische Entscheidung, die die Struktur des Monorepo-Arbeitsbereichs prägte.**---

## 📊 Status

✅**Akzeptiert**– aktuelle Arbeitsbereichsrichtung und aktive Repository-Form.---

## 🔍 Context

Omni Skills begann als**Installer-First**-Repository. Das war genug, um den Inhalt von „SKILL.md“ zu verteilen, aber nicht genug, um den Katalog Agenten über protokollnative Oberflächen zugänglich zu machen.

Wir brauchten eine Stiftung, die Folgendes unterstützen konnte:

| Anforderung | Protokoll |
|:------------|:---------|
| 🌐 Schreibgeschützte HTTP-Katalog-API | RUHE |
| 🔌 Schreibgeschützter MCP-Server | Modellkontextprotokoll |
| 🤖 Dem Agenten zugewandte A2A-Oberfläche | Agent-zu-Agent |
| 📂 Lokale Installations-Sidecars | Dateisystem-Tools |

**Kritische Einschränkung**: Vermeiden Sie es, Repo-Dateien in jedem neuen Dienst einzeln neu zu analysieren.---

## ✅ Decision

Führen Sie ein**arbeitsbereichsorientiertes Monorepo**mit einem gemeinsamen Katalogkern und protokollspezifischen Paketen ein:

| Paket | Zweck |
|:--------|:--------|
| 📦 „Omni-Skills“ (root) | CLI-Installationsprogramm und Repo-Skripte |
| 🧠 `@omni-skills/catalog-core` | Gemeinsames Laden, Suchen, Vergleichen, Bundles, Installationspläne |
| 🌐 `@omni-skills/server-api` | Schreibgeschützte REST-API |
| 🔌 `@omni-skills/server-mcp` | MCP mit stdio/stream/sse + lokalem Sidecar-Modus |
| 🤖 `@omni-skills/server-a2a` | A2A-Task-Laufzeit mit Agent Card, Polling, SSE und Push-Konfiguration |### 📁 Shared Data Sources

Der Katalogkern liest generierte Artefakte aus:
- „dist/catalog.json“.
- `dist/manifests/<skill>.json`
- „skills_index.json“.---

## ✅ Positive Consequences

| Ergebnis | Auswirkungen |
|:--------|:-------|
| 🔗**Vertrag über gemeinsame Daten**| API, MCP und A2A verbrauchen dieselben Artefakte |
| 🖥️**Einheitliche CLI**| Eine Binärdatei macht Installation, UI-Shell, API, MCP, A2A, Diagnose und Smoke verfügbar |
| 🧩**Protokollisolation**| Neue Oberflächen iterieren ohne Kopplung an Installer-Interna |
| 🔌**Lokaler Beiwagen**| Funktionierender schreibfähiger MCP-Modus hinter einer Zulassungsliste mit clientbezogenen Rezepten |
| 📦**Einzelpaket-Laufzeit**| Das veröffentlichte npm-Paket enthält die Protokolloberflächen, Validierungstools und generierten Artefakte zusammen |---

## ⚠️ Negative Consequences

| Kompromiss | Schadensbegrenzung |
|:---------|:-----------|
| 🔄**Metadatenduplizierung**| Python-Build + JavaScript-Laufzeit → schließlich konsolidieren |
| 🏗️**A2A-Komplexität**| Es gibt jetzt einen dauerhaften Lebenszyklus, aber Koordinationsadapter erhöhen die Betriebstiefe |
| 📦**Katalogausrichtung**| Bei der selektiven Installation müssen Befehle, Manifeste und Dokumente synchronisiert bleiben |
| 📋**Bundle-Metadatenlücken**| Bundles können die veröffentlichten Fähigkeiten übertreffen und erfordern explizite Warnungen wegen fehlender Mitglieder |---

## ➡️ Follow-Up Items

| # | Aktion | Status |
|:--|:-------|:-------|
| 1️⃣ | Remote-MCP-Authentifizierung und Ratenbegrenzung | ✅ Fertig |
| 2️⃣ | Verbessertes Schreiben der clientspezifischen MCP-Konfiguration | ✅ Heute verfügbar für Claude, Cursor, Codex, Gemini, Kiro, VS Code und Dev Containers |
| 3️⃣ | Signierte Release-Artefakte oder pro-Skill-Archive | ✅ Heute präsentieren mit CI-Durchsetzung auf Release-Tags |
| 4️⃣ | A2A-Task-Laufzeit → dauerhafte Orchestrierung | ✅ Präsentieren Sie noch heute mit JSON/SQLite-Persistenz, externen Executors, Opt-in-Lease-Koordination und optionaler erweiterter Redis-Koordination |
| 5️⃣ | Erweitern Sie den veröffentlichten Katalog für eine breitere Paketabdeckung | ✅ Präsentieren Sie heute die aktuell sieben kuratierten Starterpakete |