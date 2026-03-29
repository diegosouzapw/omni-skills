# 🔬 Codebase Deep Analysis (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Kompleksowa analiza techniczna aktualnej architektury Omni Skills, powierzchni wykonawczych i potoku kompilacji.**
> Ostatnia analiza: 28.03.2026---

## 📊 Project Overview

| Atrybut | Wartość |
|:--------------|:------|
|**Imię**| `omni-umiejętności` |
|**Wersja pakietu**| `0.1.3` |
|**Wersje umiejętności**| Indywidualnie i niezależnie od wersji pakietu. Wiele opublikowanych umiejętności nadal ma wersję „0.0.1”, podczas gdy pakiet ma wersję „0.1.2”. |
|**Licencja**| MIT (kod) + CC BY 4.0 (zawartość) |
|**NPM**| `npx omni-umiejętności` |
|**Opublikowane umiejętności**| 32 |
|**Zdefiniowane pakiety**| 7, wszystkie w pełni poparte opublikowanymi umiejętnościami |
|**Aktywne kategorie katalogu**| 15 aktywnych segmentów z 18 kanonicznych kategorii taksonomii |
|**Podstawowe środowisko wykonawcze/kompilacja LOC próbkowane poniżej**| 13 600+ |
|**Zależności produkcyjne**| 7 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Bieżący zrzut klasyfikacji na poziomie repozytorium z pliku `metadata.json`:

- średni wynik jakości: `96,3`
- średni wynik najlepszych praktyk: `98,7`
- średni wynik bezpieczeństwa: `95,0`
- wszystkie 32 opublikowane umiejętności są sprawdzane jako „L3”.

Aktualna wersja bazowa:

- wydanie publicznego repozytorium: `v0.1.2`
- wydanie prywatnego wzmacniacza: `v0.0.1`
- automatyzacja publikacji publicznych i automatyzacja publikacji prywatnych są aktywne i ekologiczne---

## 🏗️ Architecture Overview

Repozytorium jest zgodne ze wzorcem**workspace monorepo**z jednym współdzielonym rdzeniem katalogu i wieloma środowiskami wykonawczymi.```text
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

Projekt jest celowo**oparty na artefaktach**:

1. umiejętności są tworzone jako `SKILL.md` plus lokalne pakiety wsparcia
2. kompilacja je sprawdza, klasyfikuje, archiwizuje i normalizuje
3. wygenerowane artefakty stają się umową dla CLI, API, MCP i A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**ponad 4500 LOC łącznie**— główny publiczny interfejs do użytku zarówno przez ekspertów, jak i z przewodnikiem.

| Polecenie | Funkcja |
|:------------|:-------------|
| 🔎 `znajdź [zapytanie]` | Wyszukiwanie w katalogu pełnotekstowym z filtrami uwzględniającymi punktację |
| 📦 `zainstaluj` | Instalacja z przewodnikiem lub oparta na flagach na znanych klientach lub ścieżkach niestandardowych |
| 🧾 `config-mcp` | Podgląd lub zapis konfiguracji MCP uwzględniającej klienta |
| 🔌 `mcp <transport>` | Uruchamia serwer MCP w `stdio`, `stream` lub `sse` |
| 🌐 `api` | Uruchamia API katalogu |
| 🤖 `a2a` | Uruchamia środowisko wykonawcze A2A |
| 🧪 `dym` | Walidacja przed wydaniem wersji |
| 🩺 `lekarz` | Diagnostyka lokalna |
| 🖥️ `ui` | Powłoka wizualna Ink z instalacją, wykrywaniem, konfiguracją i centrum usług |
| 🏷️ „przekategoryzuj” | Kontrola dryfu taksonomii i przepisanie |

CLI nie jest już tylko instalatorem. Jest to narzędzie operacji publicznych dla całej platformy.## 🧭 Future Expansion Direction

Publiczne środowisko wykonawcze nie jest już blokowane w przypadku podstawowych prac, a fala drugiej kategorii została już wylądowana. Następną użyteczną pracą związaną z katalogiem jest głębia, a nie pogoń za kategoriami.

Nowo aktywowane ścieżki kodowe teraz w katalogu:

- „projektowanie” poprzez „projektowanie systemów-ops”, „audyt dostępności” i „zarządzanie tokenem projektowym”
- `narzędzia` poprzez `mcp-server-authoring`
- `data-ai` poprzez `data-contracts`
- „uczenie maszynowe” poprzez „obsługiwanie modeli”.

Zalecany następny kierunek:

1. pogłębić „projektowanie”, „narzędzia”, „ai danych” i „uczenie maszynowe”
2. odłożyć terminy „biznes” i „treść medialna”, chyba że pojawi się propozycja wyraźnie natywna kodowo
3. zachować obecny minimalny poziom jakości zamiast ponownie otwierać presję aktywacyjną kategorii

Ta fala ekspansji jest teraz rejestrowana w [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— instaluje umiejętności u 7 asystentów zdolnych do instalacji.

| Flaga | Cel | Domyślna ścieżka |
|:---------|:-------|:------------|
| `--claude` | Kod Claude'a | `~/.claude/umiejętności` |
| `--kursor` | Kursor | `~/.kursor/umiejętności` |
| `--bliźnięta` | Bliźnięta CLI | `~/.gemini/umiejętności` |
| `--kodeks` | Kodeks CLI | `~/.codex/umiejętności` |
| `--kiro` | Kiro | `~/.kiro/umiejętności` |
| `--antygrawitacja` | Antygrawitacja | `~/.gemini/antygrawitacja/umiejętności` |
| `--opencode` | Otwarty kod | `<obszar roboczy>/.opencode/skills` |

Obsługuje:

- instalacje pełnej biblioteki
- selektywne instalacje według `--skill`
- instalacje wybrane przez `--bundle`
- kierowane przepływy TTY i wizualnego interfejsu użytkownika
- niestandardowe ścieżki docelowe### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— współdzielona warstwa uruchomieniowa dla CLI, API, MCP i A2A.

| Eksport | Opis |
|:------------|:------------|
| 🔎 `Umiejętności wyszukiwania()` | Wyszukiwanie z ważonym dopasowywaniem tekstu i obsługą filtrów |
| 📋 `listUmiejętności()` | Filtrowanie wieloosiowe według jakości, najlepszych praktyk, poziomu, bezpieczeństwa, ryzyka, narzędzia i kategorii |
| 📌 `getSkill()` | Manifestowana rozdzielczość plus wzbogacone publiczne adresy URL |
| ⚖️ `porównaj umiejętności()` | Porównanie bezpośrednie |
| 💡 `polećUmiejętności()` | Rekomendacja zorientowana na cel |
| 📦 `buildInstallPlan()` | Generowanie planu instalacji z ostrzeżeniami i wskazówkami dostosowanymi do potrzeb klienta |
| 🗂️ `listBundles()` | Wyselekcjonowana lista pakietów z dostępnością |
| 📁 `listArchivesSkill()` | Archiwum i uchwała podpisu |

To jest prawdziwe, pojedyncze źródło prawdy o czasie działania po pokoleniu.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— pełna implementacja MCP przy użyciu oficjalnego SDK.

**Transporty**

- `stdio`
- przesyłany strumieniowo protokół HTTP
- SSE

**Zawsze włączone narzędzia tylko do odczytu**

- `umiejętności_wyszukiwania`
- `zdobądź_umiejętność`
- `porównaj_umiejętności`
- `polecanie_umiejętności`
- `podgląd_instalacji`

**Narzędzia w trybie lokalnym**

- `wykryj_klientów`
- `lista_zainstalowanych_umiejętności`
- `umiejętności_instalacyjne`
- `usuń_umiejętności`
- `konfiguruj_klient_mcp`

Powierzchnia MCP jest celowo podzielona pomiędzy:

- zdalne korzystanie z katalogu/tylko do odczytu
- korzystanie z wózka bocznego lokalnego/z możliwością zapisu### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1943 LOC**— warstwa MCP obsługująca system plików do wykrywania klientów, zarządzania umiejętnościami i zapisywania konfiguracji MCP.

Aktualne wsparcie praktyczne:

-**7 klientów z możliwością instalacji**
-**16 klientów z możliwością konfiguracji**
-**33 cele konfiguracyjne**
-**19 profili konfiguracyjnych**

Klienci z możliwością instalacji:

- Claude Code
- Kursor
- Gemini CLI
- Kodeks CLI
- Kiro
- Antygrawitacja
- Otwarty kod

Klienci i cele z możliwością konfiguracji obejmują:

- Ustawienia Claude, pulpit Claude i konfiguracja projektu Claude
- Konfiguracja użytkownika kursora i obszaru roboczego
- Konfiguracja obszaru roboczego VS Code, użytkownika, insiderów i kontenera deweloperskiego
- Ustawienia użytkownika i obszaru roboczego Gemini
- Konfiguracja użytkownika antygrawitacyjnego
- Użytkownik Kiro, obszar roboczy i starsze ścieżki
- Konfiguracja Codex CLI TOML
- Konfiguracja użytkownika i obszaru roboczego OpenCode
- Ustawienia Cline
— Konfiguracja użytkownika i repozytorium GitHub Copilot CLI
- Konfiguracja użytkownika Kilo, projektu i obszaru roboczego
- Kontynuuj obszar roboczy YAML
- Konfiguracja użytkownika windsurfingu
- Konfiguracja obszaru roboczego Zed
- Konfiguracja użytkownika Goose

Wózek boczny celowo szczerze mówi o granicach:

- zapisuje tylko wewnątrz listy dozwolonych
- domyślnie wyświetla podgląd
- utrzymuje pierwszorzędnych autorów tylko tam, gdzie oficjalne dokumenty ujawniają stabilny format
- nie udaje, że każdy produkt obsługujący MCP jest również celem wymagającym umiejętności instalacji### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC łącznie**— interfejs API rejestru tylko do odczytu oraz oprogramowanie pośredniczące do zarządzania.

Ważne punkty końcowe:

- `/zdrowiez`
- `/openapi.json`
- `/admin/środowisko wykonawcze`
- `/v1/umiejętności`
- `/v1/umiejętności/:id`
- `/v1/wyszukiwanie`
- `/v1/porównaj`
- `/v1/pakiety`
- `/v1/instalacja/plan`
- `/v1/skills/:id/download/*`

Wdrożono już podstawy zarządzania:

- uwierzytelnienie tokena na okaziciela
- Autoryzacja klucza API
- autoryzacja tokena administratora
- ograniczenie szybkości procesu
- poproś o identyfikatory
- rejestrowanie audytu
- Listy dozwolonych CORS
- Listy dozwolonych adresów IP
- zaufaj obsłudze proxy
- tryb konserwacji### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1857 LOC łącznie na serwerze głównym, w środowisku wykonawczym i plikach koordynatora**— Cykl życia zadań JSON-RPC 2.0 dla przepływów pracy między agentami.

Obsługiwane metody:

- `wiadomość/wyślij`
- `wiadomość/strumień`
- `zadania/otrzymaj`
- `zadania/anuluj`
- `zadania/ponowna subskrypcja`
- `zadania/pushNotificationConfig/*`

Bieżące operacje:

- „odkryj umiejętności”.
- `polecaj stos`
- `przygotowanie planu instalacji`

Model trwałości i koordynacji:

- lokalna trwałość pamięci, JSON lub SQLite
- uruchom ponownie CV
- opcjonalny zewnętrzny wykonawca procesu
- opcjonalna koordynacja dzierżawionych kolejek dla współdzielonych pracowników SQLite
- opcjonalna koordynacja wspierana przez Redis jako zaawansowana ścieżka hostowana

Kluczowym wyborem architektonicznym jest tutaj**prosta obsługa lokalna**. Redis istnieje jako opcja zaawansowana, ale domyślna ścieżka produktu pozostaje lokalna i nie jest zależna od zależności.---

## ⚙️ Build Pipeline

| Skrypt | Język | Cel |
|:-------|:-------------|:------------|
| 📊 `skill_metadata.py` | Pythona | Walidacja, taksonomia, scoring i statyczne skanowanie bezpieczeństwa |
| ✅ `validate_skills.py` | Pythona | Generowanie metadanych dla każdej umiejętności i dla podsumowania głównego |
| 📑 `generuj_indeks.py` | Pythona | Indeks umiejętności, manifesty, archiwa, podpisy i sumy kontrolne |
| 🏗️ `build_catalog.js` | Node.js | Końcowe pliki `dist/catalog.json` i `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Pythona | Audyt i przepisanie kategorii kanonicznej |
| 🔍 `verify_archives.py` | Pythona | Weryfikacja archiwum i podpisu |

Z operacyjnego punktu widzenia liczą się dwa szczegóły:

1. `dist/` jest częścią kontraktu wykonawczego i zostało celowo wprowadzone
2. kompilacja jest wystarczająco deterministyczna, aby wspierać weryfikację CI i podpisywanie wersji---

## 📦 Published Catalog

Obecny katalog publiczny obejmuje 32 umiejętności:

-**Odkrywanie i planowanie**: „umiejętności wyszukiwania”, „burza mózgów”, „architektura”, „debugowanie”
-**Projektowanie systemów i dostępność**: `design-systems-ops`, `audyt-dostępności`
-**Dostawa produktu i pełnego stosu**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**Bezpieczeństwo**: „audytor bezpieczeństwa”, „skaner podatności”, „reakcja na incydenty”, „modelowanie zagrożeń”
-**Obieg pracy konserwatora OSS**: `dokumentacja`, `dziennik zmian`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `przegląd obserwowalności`, `engineering wydania`
-**Inżynieria AI**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Wszystkie siedem pakietów jest w pełni wspieranych:

- `niezbędne` → `4/4`
- `pełny stos` → `5/5`
- `projekt` → `4/4`
- `bezpieczeństwo` → `4/4`
- `devops` → `5/5`
- `inżynier AI` → `5/5`
- `opiekun-oss` → `4/4`

Aktualny rozkład punktacji z wygenerowanego katalogu:

- wyniki jakości: `94, 95, 96, 97, 100`
- oceny najlepszych praktyk: `98, 99, 100`
- wynik bezpieczeństwa: wszystkie opublikowane umiejętności obecnie wynoszą „95”.

Reprezentatywny high-end:

- `omni-figma` → `jakość 100`, `najlepsze_praktyki 100`
- `audyt-dostępności` → `jakość 99`, `najlepsze_praktyki 100`
- `przepływy autoryzacji` → `jakość 97`, `najlepsze_praktyki 99`
- `design-systems-ops` → `jakość 97`, `najlepsze_praktyki 99`
- `release-engineering` → `jakość 97`, `best_practices 99`
- `modelowanie zagrożeń` → `jakość 97`, `najlepsze_praktyki 99`
- `inżynieria kontekstu` → `jakość 97`, `najlepsze_praktyki 99`

Reprezentatywny dolny koniec obecnego górnego pasma:

- `architektura` → `jakość 94`, `najlepsze_praktyki 98`
- `changelog` → `jakość 94`, `najlepsze_praktyki 98`
- `create-pr` → `jakość 95`, `najlepsze_praktyki 98`

To jest zamierzone. Strzelec odróżnia teraz „doskonałe” od „wyjątkowego”, zamiast spłaszczać cały katalog na górze.---

## 🌟 Strengths

1.**Projekt oparty na artefakcie**
   Każda powierzchnia środowiska uruchomieniowego korzysta z tego samego wygenerowanego katalogu i manifestów.
2.**Szeroki zasięg protokołu**
   CLI, API, MCP i A2A współistnieją bez fragmentacji modelu danych.
3.**Silna ergonomia produktu lokalnego**
   Instalacja z przewodnikiem, powłoka wizualna, `config-mcp` i domyślne ustawienia próbne sprawiają, że projekt może być użyteczny nawet dla zaawansowanych użytkowników.
4.**Uczciwa postawa bezpieczeństwa**
   Lokalne zapisy na liście dozwolonych, skanowanie statyczne, podpisywanie, sumy kontrolne i weryfikacja wersji są jawne.
5.**Zdrowy zasięg MCP**
   Projekt obsługuje obecnie szeroką gamę obecnych klientów obsługujących MCP, bez udawania, że nieudokumentowane cele są stabilne.---

## 🔮 Opportunities

1.**Większy zasięg pakietu**
   Kolejnym krokiem jest specjalizacja w ramach istniejących pakietów, a nie tylko szeroki zasięg.
2.**Bogatsza semantyka strzelców**
   Nadal istnieje możliwość bardziej semantycznej oceny głębokości pakietu referencyjnego i jakości przepływu pracy.
3.**Więcej autorów klientów tylko w uzasadnionych przypadkach**
   Ekspansja powinna pozostać zdyscyplinowana i powiązana ze stabilnymi oficjalnymi dokumentami.
4.**Rozkład walidatora**
   `skill_metadata.py` to wciąż duży moduł i z czasem przydałby się wewnętrzny rozkład.
5.**Eskalacja hostowanego zarządzania**
   Obecna linia bazowa w procesie jest wystarczająca do samodzielnego hostowania, ale wdrożenie w przedsiębiorstwie ostatecznie wymagałoby integracji zewnętrznej bramy i tożsamości.