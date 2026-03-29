# 📖 Omni Skills — Documentation Hub (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Centralne źródło informacji na temat używania, obsługi, rozszerzania i zrozumienia obecnej platformy Omni Skills.**

Standardowe pliki społeczności znajdują się w katalogu głównym repozytorium:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| Powierzchnia | stan | Szczegóły |
|:---------|:------|:------------|
| 🏗️**Czas działania**| ✅Aktualny | Ujednolicone CLI, powłoka wizualna Ink, API, MCP i A2A są dostarczane w tym samym pakiecie |
| 📦**Katalog**| 📌 32 umiejętności | 32 opublikowane umiejętności „L3” w 15 kategoriach aktywnego katalogu i 7 w pełni wspieranych pakietów |
| 🎯**Zainstaluj**| ✅Aktualny | Instalacja z przewodnikiem TTY, selektywne `--skill` i `--bundle`, obsługa niestandardowych ścieżek i instalacja oparta na wykrywaniu |
| 🌐**API**| ✅Aktualny | Interfejs API rejestru tylko do odczytu z uwierzytelnianiem, środowiskiem administracyjnym, ograniczaniem szybkości, listami dozwolonych CORS/IP, trybem konserwacji i plikami do pobrania |
| 🔌**MCP**| ✅Aktualny | `stdio` · `stream` · `sse`, lokalny tryb przyczepki, 7 klientów z możliwością instalacji, 16 klientów z możliwością konfiguracji, 33 cele konfiguracji i 19 profili konfiguracji |
| 🤖**A2A**| ✅Aktualny | Proste, lokalne środowisko wykonawcze z trwałością JSON/SQLite, wznawianiem ponownego uruchamiania, przesyłaniem strumieniowym SSE, anulowaniem, trybem zewnętrznego modułu wykonawczego i opcjonalną dzierżawioną koordynacją, jeśli jest jawnie włączona |
| 🛡️**Bezpieczeństwo**| ✅Aktualny | Skaner statyczny, opcjonalny ClamAV/VirusTotal, artefakty podpisanej wersji, sumy kontrolne archiwów i weryfikacja czasu wydania |
| 📋**Klasyfikacja**| ✅Aktualny | Taksonomia kanoniczna, dojrzałość, rozprzestrzenianie się jakości semantycznej, rozprzestrzenianie się najlepszych praktyk i punktacja bezpieczeństwa |
| 📁**Archiwum**| ✅Aktualny | Archiwa `.zip` i `.tar.gz` dla poszczególnych umiejętności z manifestami sumy kontrolnej SHA-256 |
| 🔐**Podpisuję**| ✅Aktualny | Odłączone podpisy wymuszone na znacznikach wydania; lokalne przepływy instalacji zużywają te same metadane manifestu i sumy kontrolnej |
| 🧬**Przepływ wlotowy**| ✅Aktualny | Umiejętności natywne znajdują się w obszarze `umiejętności/`; PR Automation przegląda je i proponuje pochodne wzmocnione Omni w ramach `skills_omni/` |## 🔭 Current Project State

Ścieżka podstawowa znajduje się teraz w aktywnym stanie projektu, a druga fala rozszerzenia kategorii jest już w katalogu. Projekt należy teraz czytać jako roboczy punkt odniesienia z opcjonalnymi ścieżkami przyszłej ekspansji:

- publiczna wersja 0.1.2 i prywatna wersja 0.0.1 to bieżąca wersja stabilna
- katalog obejmuje teraz 32 opublikowane umiejętności w 15 aktywnych kategoriach i 7 w pełni wspieranych pakietów
- Zarówno natywne pobieranie, jak i wyselekcjonowane wyniki `skills_omni/` działają, w tym wielojęzyczne natywne pobieranie i wyselekcjonowane wyniki wyłącznie w języku angielskim
- powierzchnie protokołów, automatyzacja wydań i automatyzacja prywatnych ulepszeń są w użyciu, a nie w trybie bootstrap

Przyszła ekspansja pozostaje zamierzona:

- pogłębić „projektowanie”, „narzędzia”, „data-ai” i „uczenie maszynowe”
- unikaj ponownego otwierania uśpionych kategorii nienatywnych kodowo, dopóki bieżące ścieżki natywne nie będą miały większej głębi
- utrzymuj przy tym nienaruszoną ścieżkę przeglądu jakości i ulepszeń

Plan ten jest teraz podzielony na:

- ukończono pierwszą falę ekspansji w [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- ukończona druga fala ekspansji w [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- i wybiegające w przyszłość zaległości w [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Te pytania dotyczące architektury nie są już w praktyce „otwarte” i są obecnie traktowane jako decyzje projektowe:

1.**Dystrybucja pozostaje najpierw manifestem plus podpisane archiwa**
   Manifest czytelny maszynowo pozostaje umową wykorzystywaną przez CLI, API, MCP i A2A. Podpisane archiwa poszczególnych umiejętności stanowią powierzchnię pobierania i wydawania umieszczoną na wierzchu tej umowy.
2.**Katalogi prywatne lub premium powinny ponownie wykorzystywać ten sam schemat manifestu**
   Uwierzytelnianie i zasady powinny być nakładane na siebie zewnętrznie, a nie poprzez rozwidlanie kształtu manifestu lub katalogu.
3.**Konfiguracja MCP powinna zbiegać się w kilku kanonicznych rodzinach eksportu**
   Omni Skills standaryzuje teraz wokół JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` i TOML `[mcp_servers]`, jednocześnie utrzymując autorów na zamówienie tylko tam, gdzie oficjalne dokumenty klienta wymagają innej struktury.

Decyzje te są zgodne z aktualną oficjalną dokumentacją MCP i klientem, w tym:

- oficjalne wskazówki dotyczące rejestracji i rozszerzeń MCP na `modelcontextprotocol.io`
- Dokumentacja OpenAI Docs MCP i Codex CLI na `developers.openai.com` i `platform.openai.com`
- Rozszerzenie VS Code MCP i dokumentacja produktu na `code.visualstudio.com`
- dokumentacja klienta dla Claude Code, Cursor, Continuous, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman i JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doktor | Czego się nauczysz |
|:----|:--------------------------------|
| 📘 [Pierwsze kroki](users/GETTING-STARTED.md) | Zainstaluj, zweryfikuj i przywołaj swoją pierwszą umiejętność |
| 🧭 [Podręcznik użytkownika CLI](users/CLI-USER-GUIDE.md) | Pełne odwołanie do poleceń i wzorce użycia CLI w świecie rzeczywistym |
| 📗 [Przewodnik użytkowania](users/USAGE.md) | Polecenia CLI, tryby instalacji, polecenia środowiska wykonawczego i przepływy konfiguracji MCP |
| 📦 [Pakiety](users/BUNDLES.md) | Wyselekcjonowane pakiety i ich aktualna dostępność |
| 📚 [Katalog](CATALOG.md) | Automatycznie wygenerowany katalog opublikowanych umiejętności |
| 🔧 [Systemowy element Runbook](operacje/RUNBOOK.md) | Twórz, obsługuj, zabezpieczaj i rozwiązuj problemy ze środowiskiem wykonawczym |### 🏗️ If You Want to **Understand** the Runtime

| Doktor | Czego się nauczysz |
|:----|:--------------------------------|
| 🗺️ [Plan działania dla agenta](architektura/AGENT-NATIVE-ROADMAP.md) | Ewolucja architektury, zamknięte decyzje i pozostałe obszary ekspansji |
| 🧭 [Plan działania CLI UX](architektura/CLI-UX-ROADMAP.md) | Plan historyczny i obecny kształt CLI z przewodnikiem i wizualnym |
| 📐 [ADR-0001: Fundacja Workspace](architektura/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Podstawowe rozwiązanie monorepo i decyzja dotycząca wspólnego środowiska wykonawczego |
| 🔬 [Analiza bazy kodu](architektura/CODEBASE-ANALYSIS.md) | Bieżący skład środowiska wykonawczego, liczba i granice systemu |
| 🌐 [Katalog powierzchni API](specs/CATALOG-API.md) | Punkty końcowe HTTP, filtrowanie, zarządzanie i pobieranie |
| 🧩 [Instalator z przewodnikiem CLI](specs/CLI-GUIDED-INSTALLER.md) | Umowa behawioralna dla instalatora z przewodnikiem |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Powłoka wizualna Ink, model stanu i centrum usług |
| 🔌 [Lokalny wózek MCP](specs/LOCAL-MCP-SIDECAR.md) | Narzędzia obsługujące system plików, model listy dozwolonych i pisanie konfiguracji |
| 🧭 [Macierz wsparcia klienta](specs/CLIENT-SUPPORT-MATRIX.md) | Obsługiwani klienci CLI i IDE, autorzy, ręczne cele i odniesienia do źródeł |
| 📊 [Klasyfikacja umiejętności](specs/SKILL-CLASSIFICATION.md) | Taksonomia, heurystyka punktacji i artefakty metadanych |
| 🛡️ [Weryfikacja bezpieczeństwa](specs/SECURITY-VALIDATION.md) | Skanery, archiwa, podpisy i weryfikacja wersji |
| 📋 [Specyfikacja manifestu umiejętności](specs/SKILL-MANIFEST.md) | Format manifestu nadający się do odczytu maszynowego i umowa o zgodności |### 🤝 If You Want to **Contribute**

| Doktor | Czego się nauczysz |
|:----|:--------------------------------|
| 📝 [Przewodnik współautora](../CONTRIBUTING.md) | Przepływ pracy w repo i oczekiwania dotyczące żądań ściągnięcia |
| 🧾 [Przebieg pracy PR umiejętności](współautorzy/SKILL-PR-WORKFLOW.md) | Pobieranie natywne, automatyczne przetwarzanie wzmacniaczy, publikowanie „skills_omni/” i oczekiwania recenzentów |
| 📄 [Szablon umiejętności](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` z aktualnym frontem i strukturą |
| 🔬 [Anatomia umiejętności](współautorzy/SKILL-ANATOMY.md) | Struktura i oczekiwania jakościowe wobec umiejętności |
| ✅ [Pasek jakości](współpracownicy/QUALITY-BAR.md) | Kryteria akceptacji repozytorium |
| 🏆 [Poradnik najlepszych wyników](współpracownicy/HIGH-SCORE-PLAYBOOK.md) | Co decyduje o wysokiej dojrzałości, jakości, najlepszych praktykach i wynikach bezpieczeństwa |
| 📋 [Zaległości zadań](tasks/README.md) | Szczegółowy harmonogram realizacji pozostałych prac publicznych i prywatnych |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Opublikowany plik binarny „omni-umiejętności” jest ujednoliconym publicznym punktem wejścia.```bash
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

Aby zapoznać się z pełną powierzchnią poleceń użytkownika końcowego, użyj [Podręcznika użytkownika CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Potok kompilacji emituje pliki do odczytu maszynowego, które sterują każdą powierzchnią uruchomieniową:

| Artefakt | Cel |
|:--------------|:------------|
| `metadane.json` | Podsumowanie walidacji i punktacji w całym repozytorium |
| `indeks_umiejętności.json` | Repo-lokalny znormalizowany indeks umiejętności |
| `dist/katalog.json` | Opublikowany katalog do wyszukiwania i wystawiania |
| `dist/bundles.json` | Definicje pakietów z dostępnością |
| `dist/manifests/<umiejętność>.json` | Manifest do odczytu maszynowego dla poszczególnych umiejętności |
| `dist/archives/<umiejętność>.zip` | Archiwum umiejętności (zip) |
| `dist/archives/<umiejętność>.tar.gz` | Archiwum umiejętności (tarball) |
| `dist/archives/<umiejętność>.checksums.txt` | Manifest sumy kontrolnej SHA-256 |

`dist/` pozostaje celowo zatwierdzone. Te wygenerowane artefakty są częścią umowy dotyczącej instalacji, interfejsu API, MCP, A2A, dymu i wydania.### 🌐 API

```bash
npx omni-skills api --port 3333
```

Interfejs API rejestru tylko do odczytu dla umiejętności, pakietów, porównań, planowania instalacji i pobierania artefaktów.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Lokalny wózek boczny obsługuje teraz pierwszorzędne pisanie konfiguracji MCP dla:

- Claude Code
- Kursor
- Kontenery kodu VS i deweloperów
- Gemini CLI
- Antygrawitacja
- Kiro
- Kodeks CLI
- Kontynuuj
- Windsurfing
- Otwarty kod
- Cline
— Interfejs wiersza polecenia GitHub Copilot
- Kod Kilo
- Zeda
- Gęś### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Cykl życia zadań, przesyłanie strumieniowe, trwałość, ponowne uruchamianie odzyskiwania i prosta lokalna orkiestracja. Udostępnione wykonanie dzierżawione jest dostępne, gdy jest jawnie włączone; Redis pozostaje zaawansowaną opcją hostowaną, a nie domyślną ścieżką lokalną.---

## 🗂️ Repository Map

| Ścieżka | Cel |
|:---------|:------------|
| 📂 `umiejętności/` | Kanoniczne umiejętności autorskie |
| 📖 `dokumenty/użytkownicy/` | Dokumentacja użytkownika końcowego |
| 🤝 `dokumenty/współpracownicy/` | Szablony i wytyczne dla autorów |
| 🏗️ `docs/architektura/` | Plan działania, ADR i analiza techniczna |
| 🔧 `dokumenty/operacje/` | Operacyjne elementy Runbook |
| 📋 `dokumenty/specyfikacje/` | Umowy wykonawcze, protokoły i artefakty |
| 📚 `docs/CATALOG.md` | Wygenerowany katalog umiejętności |
| 📦 `odległość/` | Wygenerowane artefakty do odczytu maszynowego |
| 🧠 `pakiety/rdzeń-katalogu/` | Środowisko wykonawcze katalogu udostępnionego |
| 🌐 `pakiety/serwer-api/` | Interfejs API HTTP tylko do odczytu |
| 🔌 `pakiety/serwer-mcp/` | Serwer MCP i lokalny wózek |
| 🤖 `pakiety/serwer-a2a/` | Serwer A2A i środowisko wykonawcze zadań |
| 🖥️ `narzędzia/kosz/` | Punkty wejścia CLI |
| 📚 `narzędzia/lib/` | Instalator i pomocnicy interfejsu użytkownika |
| ⚙️ `narzędzia/skrypty/` | Walidacja, generowanie, weryfikacja i testy |---

## 🧪 Release Validation

```bash
npm run smoke
```

Przebieg dymu potwierdza:

- ✅ walidacja umiejętności i generowanie metadanych
- ✅ narzędzia do rekategoryzacji taksonomii
- ✅ generowanie artefaktów katalogowych
- ✅ wygenerowana przecena katalogowa
- ✅ generowanie i weryfikacja archiwum
- ✅ zautomatyzowany zestaw testów
- ✅`npm pack --dry-run`
- ✅ Bootowanie i kondycja API
- ✅ Bootowanie MCP w `stdio`, `stream` i `sse`
- ✅ Rozruch A2A, odpytywanie, przesyłanie strumieniowe SSE, anulowanie i cykl życia konfiguracji push