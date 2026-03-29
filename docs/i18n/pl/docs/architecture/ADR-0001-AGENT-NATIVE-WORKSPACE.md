# 📐 ADR-0001: Agent-Native Workspace Foundation (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Kluczowa decyzja architektoniczna, która ukształtowała strukturę przestrzeni roboczej monorepo.**---

## 📊 Status

✅**Zaakceptowano**— aktualny kierunek przestrzeni roboczej i kształt aktywnego repozytorium.---

## 🔍 Context

Omni Skills zaczęło działać jako repozytorium**najpierw instalator**. To wystarczyło do dystrybucji zawartości `SKILL.md`, ale nie wystarczyło, aby udostępnić katalog agentom poprzez powierzchnie natywne dla protokołu.

Potrzebowaliśmy fundamentu, który mógłby wesprzeć:

| Wymóg | Protokół |
|:------------|:-------------|
| 🌐 API katalogu HTTP tylko do odczytu | ODPOCZYNEK |
| 🔌 Serwer MCP tylko do odczytu | Modelowy protokół kontekstowy |
| 🤖 Powierzchnia A2A skierowana do agenta | Agent do agenta |
| 📂 Lokalna instalacja wózków bocznych | Narzędzia systemu plików |

**Ograniczenie krytyczne**: Unikaj niezależnej ponownej analizy plików repo w każdej nowej usłudze.---

## ✅ Decision

Zastosuj**monorepo zorientowane na obszar roboczy**ze wspólnym rdzeniem katalogu i pakietami specyficznymi dla protokołu:

| Pakiet | Cel |
|:------------|:------------|
| 📦 `omni-umiejętności` (rdzeń) | Instalator CLI i skrypty repo |
| 🧠 `@omni-umiejętności/rdzeń-katalogu` | Wspólne ładowanie, wyszukiwanie, porównywanie, pakiety, plany instalacji |
| 🌐 `@omni-skills/server-api` | Interfejs API REST tylko do odczytu |
| 🔌 `@omni-skills/server-mcp` | MCP ze stdio/stream/sse + tryb lokalnego wózka bocznego |
| 🤖 `@omni-skills/server-a2a` | Środowisko wykonawcze zadań A2A z kartą agenta, odpytywaniem, SSE i konfiguracją push |### 📁 Shared Data Sources

Rdzeń katalogu odczytuje wygenerowane artefakty z:
- `dist/katalog.json`
- `dist/manifests/<umiejętność>.json`
- `indeks_umiejętności.json`---

## ✅ Positive Consequences

| Wynik | Wpływ |
|:------------|:-------|
| 🔗**Umowa dotycząca udostępnienia danych**| API, MCP i A2A zużywają te same artefakty |
| 🖥️**Ujednolicony CLI**| Jeden plik binarny udostępnia instalację, powłokę interfejsu użytkownika, API, MCP, A2A, diagnostykę i dym |
| 🧩**Izolacja protokołu**| Nowe powierzchnie iterują bez łączenia się z elementami wewnętrznymi instalatora |
| 🔌**Lokalny wózek**| Działający tryb MCP z możliwością zapisu za listą dozwolonych, z recepturami dostosowanymi do klienta |
| 📦**Środowisko wykonawcze pojedynczego pakietu**| Opublikowany pakiet npm zawiera razem powierzchnię protokołu, narzędzia do sprawdzania poprawności i wygenerowane artefakty |---

## ⚠️ Negative Consequences

| Kompromis | Łagodzenie |
|:--------------|:---------------|
| 🔄**Duplikacja metadanych**| Kompilacja Pythona + środowisko wykonawcze JavaScript → ostatecznie skonsoliduj |
| 🏗️**Złożoność A2A**| Obecnie istnieje trwały cykl życia, ale adaptery koordynacyjne zwiększają głębię operacyjną |
| 📦**Wyrównanie katalogu**| Instalacja selektywna wymaga poleceń, manifestów i dokumentów, aby zachować synchronizację |
| 📋**Brak luk w metadanych**| Pakiety mogą przewyższać opublikowane umiejętności, wymagając wyraźnych ostrzeżeń o brakujących członkach |---

## ➡️ Follow-Up Items

| # | Akcja | Stan |
|:--|:-------|:-------|
| 1️⃣ | Zdalne uwierzytelnianie MCP i ograniczanie szybkości | ✅ Gotowe |
| 2️⃣ | Ulepszone pisanie konfiguracji MCP specyficzne dla klienta | ✅ Prezent dzisiaj dla Claude, Cursor, Codex, Gemini, Kiro, VS Code i kontenerów deweloperskich |
| 3️⃣ | Podpisane artefakty wersji lub archiwa poszczególnych umiejętności | ✅ Zaprezentuj dzisiaj egzekwowanie CI w tagach wydań |
| 4️⃣ | Środowisko wykonawcze zadań A2A → trwała orkiestracja | ✅ Prezentuj już dziś z trwałością JSON/SQLite, zewnętrznymi wykonawcami, koordynacją dzierżawy z opcjonalną opcją i zaawansowaną koordynacją Redis |
| 5️⃣ | Rozwiń opublikowany katalog, aby uzyskać szerszy zakres pakietów | ✅ Prezentuj dzisiaj siedem wybranych pakietów startowych |