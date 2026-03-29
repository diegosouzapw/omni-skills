# 🗺️ Agent-Native Roadmap (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Plan ewolucji architektury dla Omni Skills: od repozytorium instalowanego najpierw do środowiska wykonawczego współdzielonego katalogu obsługującego CLI, API, MCP i A2A bez powielania logiki.**---

## 📊 Current Platform Areas

| Faza | Imię | Stan |
|:------|:---------|:-------|
| 1️⃣ | Kontrakty i Artefakty | ✅Aktualny |
| 2️⃣ | Interfejs API katalogu tylko do odczytu | ✅Aktualny |
| 3️⃣ | Powierzchnia odkrywcza MCP | ✅Aktualny |
| 4️⃣ | Lokalna instalacja i konfiguracja powierzchni | ✅Aktualny |
| 5️⃣ | Orkiestracja A2A | ✅Aktualny |### ✅ What Exists Today

- artefakty katalogu do odczytu maszynowego w `dist/`
- API HTTP tylko do odczytu z obsługą punktów końcowych na potrzeby wyszukiwania, tworzenia pakietów, porównywania, planowania instalacji i pobierania
- Serwer MCP z transportami `stdio', strumieniowym HTTP i SSE
- lokalny wózek z zapisami na liście dozwolonych i przepływami `config-mcp`
- 7 klientów z możliwością instalacji, 16 klientów z możliwością konfiguracji, 33 cele konfiguracyjne MCP i 19 profili konfiguracyjnych
- głębsza specjalizacja pakietów w obszarach `full-stack`, `security`, `devops` i `ai-engineer` poprzez `auth-flows`, `threat-modeling`, `release-engineering` i `context-engineering`
- archiwa poszczególnych umiejętności (`zip`, `tar.gz`) z sumami kontrolnymi SHA-256 i odłączonymi podpisami na tagach wydania
— Podstawa zarządzania interfejsami API: uwierzytelnianie nośnika/klucza API, uwierzytelnianie środowiska wykonawczego administratora, ograniczanie szybkości, rejestrowanie audytu, listy dozwolonych CORS/IP, zaufany serwer proxy, tryb konserwacji i identyfikatory żądań
- Środowisko wykonawcze A2A z cyklem życia zadań, trwałością JSON/SQLite, wznawianiem ponownego uruchomienia, przesyłaniem strumieniowym SSE, anulowaniem, powiadomieniami push, opcjonalnym wykonawcą procesu i dzierżawioną koordynacją za zgodą użytkownika### 🔭 Future Expansion Areas

Podstawowy plan działania opisuje teraz bieżący zakres platformy. Pozostałe pozycje to obszary przyszłej ekspansji, a nie podstawowe luki:

- od tego momentu tylko wysoce selektywne dodatki MCP i tylko wtedy, gdy oficjalne dokumenty publiczne umożliwiają bezpieczne pisanie
- głębsze pakiety referencyjne i bardziej punktacja semantyczna, dzięki czemu klasyfikator na bieżąco oddziela umiejętności wyjątkowe od tych zaledwie dopracowanych
- zarządzanie hostowane w przedsiębiorstwie wykraczające poza bieżący poziom odniesienia w procesie, jeśli projekt będzie później wymagał integracji z bramą lub dostawcą tożsamości
- głębsza specjalizacja w nowo aktywowanych ścieżkach „projektowanie”, „narzędzia”, „data-ai” i „uczenie maszynowe”
- dalsze prace operacyjne wokół prywatnego wzmacniacza przy zachowaniu jego formalnego modelu operacyjnego: OmniRouter przypięty do `cx/gpt-5.4`, hostowana chmura w ``próbnej'' lub zdegradowanej wersji wstępnej i niezawodne ``na żywo'' w sieci LAN lub wykonanie na własnym serwerze
- kontynuacja wydawania wersji i usprawnianie przepływu pracy wyłącznie w ramach poprawy jakości usług, a nie jako brakujący fundament platformy## Future Catalog Expansion Track

Pierwsze dwie fale poszerzania kategorii publicznych są już dostępne:

- `design` → `design-systems-ops`, `audyt-dostępności`, `zarządzanie tokenem projektowym`
- `narzędzia` → `mcp-server-authoring`
- `data-ai` → `data-contracts`
- `uczenie maszynowe` → `służenie modelom`

Następnym zalecanym krokiem nie jest już aktywacja kategorii sama w sobie. Ma to na celu pogłębienie tych nowo aktywnych ścieżek opartych na natywnym kodzie, aby sprawiały wrażenie trwałych powierzchni produktów, a nie punktów zaczepienia pojedynczych umiejętności.

Zalecany kierunek:

1. pogłębić „projektowanie” dzięki bardziej operacyjnym przepływom pracy w systemie projektowania
2. pogłębić „narzędzia” dzięki umiejętnościom tworzenia i obsługi wtyczek
3. pogłębić sztuczną inteligencję danych za pomocą umiejętności związanych z wdrażaniem i instrumentacją
4. pogłębiać „uczenie maszynowe” dzięki umiejętnościom obsługi, szkolenia i oceny

Kategorie celowo odroczone, chyba że pojawią się mocne propozycje kodowe:

- „biznes”.
- `treść-media`

Historia tej ekspansji jest teraz śledzona w:

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Zachowaj działanie obecnego przepływu pracy `npx omni-skills`
- ✅ Przedstaw czytelne maszynowo źródło prawdy dotyczące umiejętności
- ✅ Wspieraj odkrywanie, rekomendowanie i planowanie instalacji przez agentów
- ✅ Oddziel problemy związane ze zdalnym katalogiem od zapisów w lokalnym systemie plików
- ✅ Wykorzystuj ponownie te same metadane w CLI, API, MCP i A2A---

## 🚫 Non-Goals

- ❌ Zdalna instalacja na komputerze użytkownika z hostowanego serwera
- ❌ Zastąp `SKILL.md` jako kanoniczny format autorski
- ❌ Wymagaj od autorów ręcznego pisania manifestów
- ❌ Domyślnie zmień projekt w platformę obsługującą ciężkie kolejki---

## 🏗️ Target Architecture

Jeden**rdzeń katalogu**z trzema powierzchniami protokołu:

| Powierzchnia | Najlepsze dla | Tryb |
|:--------|:-------------|:---------|
| 🌐**REST API**| Dostęp do rejestru, integracje interfejsu użytkownika, klienci zewnętrzni | Tylko do odczytu |
| 🔌**MCP**| Wykrywanie agentów, podgląd instalacji, pisanie konfiguracji, receptury klientów | Tylko do odczytu + zapisy lokalne |
| 🤖**A2A**| Orkiestracja między agentami i przekazywanie planów instalacji | Cykl życia zadań z prostą, lokalną trwałością |### ⚙️ Core Principle

>**Wszystkie protokoły wykorzystują tę samą wygenerowaną rodzinę artefaktów.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Manifest pozostaje wspólną umową. Archiwa są artefaktami dystrybucyjnymi nakładanymi na tę umowę, a nie ją zastępują.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Używany przez hostowane API i zdalne serwery MCP.

| ✅ Dozwolone | ❌ Niedozwolone |
|:---------------|:-------------------|
| Umiejętności wyszukiwania | Zapisz w systemie plików wywołującego |
| Pobierz manifesty | Mutuj konfigurację klienta lokalnego |
| Porównaj umiejętności | Wnioskowanie o dowolnym stanie maszyny |
| Poleć pakiety | — |
| Zbuduj plany instalacji | — |### 2️⃣ Local Installer Mode

Używany przez CLI i wózek boczny MCP.

| ✅ Dozwolone |
|:---------------|
| Wykryj lokalnych klientów AI |
| Sprawdź zainstalowane umiejętności |
| Podgląd operacji na plikach |
| Zainstaluj lub usuń katalogi umiejętności |
| Zapisz lokalną konfigurację MCP po podglądzie |

> 📌 To pozostaje jedyny tryb, w którym zachodzą prawdziwe zapisy systemu operacyjnego.---

## 📐 Protocol Split

### 🌐 REST API

Najlepsze do uzyskiwania dostępu do rejestru, wyszukiwania, porównywania, pobierania wersji i planowania instalacji.

**Punkty końcowe**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Najlepsze do wykrywania opartego na narzędziach, podpowiedzi, podglądów instalacji i konfiguracji MCP specyficznej dla klienta.

**Narzędzia tylko do odczytu**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Narzędzia lokalne**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Najlepsze do przekazywania wykrywania, przepływów pracy związanych z planem instalacji i wznawiania wykonywania zadań agenta.

**Bieżące operacje**: `odkryj-umiejętności` · `poleć-stos' · `przygotowaj-plan-instalacji`---

## 🛡️ Security Model

| Zasada | Wdrożenie |
|:---------------|:-------------------|
| 🔒 Usługi hostowane są tylko do odczytu | API i zdalny MCP nie zapisują w systemie plików wywołującego |
| 📂 Pisze pozostań lokalny | Tylko wózek boczny CLI i MCP |
| 👁️ Podgląd przed napisaniem | Domyślne ustawienia próbne dotyczące lokalnych mutacji |
| 🔑 Uczciwość jest wyraźna | Sumy kontrolne SHA-256 dla wygenerowanych artefaktów |
| ✍️ Zwolnij zaufanie jest wyraźne | Odłączone podpisy wymuszone na znacznikach wydania |
| ⚠️Wyszło na jaw ryzyko | Metadane dotyczące ryzyka i bezpieczeństwa rozprzestrzeniają się na każdą powierzchnię wykonawczą |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- udokumentowana architektura docelowa
- zdefiniowany schemat manifestu
- wygenerowane metadane, katalog, manifesty, pakiety i archiwa### Phase 2: Catalog Service

- API HTTP tylko do odczytu z Express 5
- wyszukiwanie, filtrowanie, wyszukiwanie manifestów, lista pakietów, porównywanie i pobieranie
- Podstawowa baza zarządzania hostowanego w oparciu o środowisko### Phase 3: MCP Discovery

- oficjalna integracja `@modelcontextprotocol/sdk`
- Transporty `stdio`, strumieniowe HTTP i SSE
- narzędzia, zasoby i podpowiedzi tylko do odczytu, wspierane przez udostępniony katalog### Phase 4: Local Install and Config Surface

- lokalny wózek boczny z zapisami na liście dozwolonych
- wykrywanie dla 7 klientów z możliwością instalacji
- zapisywanie konfiguracji dla 16 klientów z możliwością konfiguracji w 33 obiektach docelowych i 19 profilach konfiguracyjnych
- kierowane przepływy `config-mcp` w CLI i powłoce wizualnej
- stabilne wsparcie dla Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continuous, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose i Dev Containers### Phase 5: A2A Orchestration

- karta agenta pod adresem `/.well-known/agent.json`
- `wiadomość/wyślij`, `wiadomość/strumień`, `zadania/pobierz`, `zadania/anuluj`, `zadania/ponowna subskrypcja` i metody konfiguracji powiadomień push
- Trwałość JSON i SQLite z ponownym uruchomieniem odzyskiwania
- opcjonalny zewnętrzny wykonawca procesu
- możliwość wyboru dzierżawionego wykonania dla wszystkich pracowników dla SQLite i opcjonalna zaawansowana koordynacja Redis
- proste ustawienia domyślne przechowywane w pamięci, JSON lub SQLite bez zewnętrznych zależności### Current Enhancer Operating Decision

Obsługiwany model „na żywo” prywatnego wzmacniacza jest teraz jawny:

- hostowana automatyzacja PR przeprowadza próbę „na żywo” z bramką wstępną
- jeśli publiczna brama OmniRoute jest zablokowana lub niestabilna, PR jest oznaczony jako „zablokowany” z przyczyną znaną dla operatora, zamiast w sposób niejasny wskazywać awarię
- kanoniczną, niezawodną ścieżką „na żywo” pozostaje wykonanie usługi LAN lub lokalnej
- zaplanowane prywatne uruchomienia GitHuba pozostają domyślnie „próbne”, chyba że operator wyraźnie zażąda „na żywo”.---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Decyzja**: zachowaj manifest jako wspólną umowę i zachowaj podpisane archiwa poszczególnych umiejętności jako powierzchnię dystrybucyjną.

**Dlaczego**:
- CLI, API, MCP i A2A już korzystają ze znormalizowanego kształtu manifestu
- archiwa są idealne do pobrania i weryfikacji, ale kiepskie jako jedyna umowa odkrywania
- dzięki temu tworzenie jest proste, a dystrybucja możliwa do zweryfikowania### 2. Private or Premium Catalogs

**Decyzja**: ponownie użyj tego samego formatu manifestu i katalogu oraz warstwy uwierzytelniania lub zasad na zewnątrz.

**Dlaczego**:
- pozwala uniknąć rozwidlenia modelu danych
- jest zgodne z obecnym podejściem do zarządzania API/MCP
- pozostaje zgodny z kierunkiem ekosystemu MCP w zakresie danych uwierzytelniających klienta OAuth i autoryzacji zarządzanej przez przedsiębiorstwo### 3. Client Writer Strategy

**Decyzja**: skoncentruj się na małym zestawie kanonicznych rodzin eksportowych i korzystaj z usług autorów szytych na miarę tylko wtedy, gdy wymagają tego oficjalne dokumenty klienta.

**Rodziny kanoniczne obecnie w użyciu**:
- JSON „mcpServers”.
- „Serwery” JSON
- JSON `serwery_kontekstu`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Dlaczego**:
- zapewnia utrzymanie implementacji
- nadal obsługuje specyficzne potrzeby klienta, takie jak ustawienia Claude, Kontynuuj YAML, Zed `context_servers` i Codex TOML
- pozwala uniknąć wymyślania delikatnych programów piszących dla klientów bez stabilnych publicznych dokumentów konfiguracyjnych---

## 🌍 Research Notes Behind Those Decisions

Obecne decyzje zostały sprawdzone z oficjalnymi dokumentami ekosystemu:

— ekosystem MCP dokumentuje teraz opcjonalne rozszerzenia, takie jak dane uwierzytelniające klienta OAuth i autoryzację zarządzaną przez przedsiębiorstwo, która obsługuje udostępnianie uwierzytelniania hostowanego na zewnątrz zamiast rozwidlania formatu katalogu
- OpenAI dokumentuje publiczny serwer dokumentów MCP i wzorce konfiguracji Codex MCP, które są zgodne ze wspólnym manifestem oraz strategią klienta-pisarza
- VS Code dokumentuje pierwszorzędną obsługę MCP i przewodnik po rozszerzeniach, co wzmacnia utrzymanie dedykowanego modułu zapisującego opartego na „serwerach”
— JetBrains AI Assistant dokumentuje konfigurację MCP poprzez UX produktu, a nie stabilną umowę dotyczącą plików międzyplatformowych, która na razie obsługuje utrzymywanie go na terytorium instrukcji/fragmentów---

## 🔮 Longer-Term Decision Points

Tylko kilka strategicznych kwestii pozostaje naprawdę otwartych:

1. Czy jakikolwiek klient wykraczający poza obecną matrycę naprawdę przekroczył poprzeczkę w zakresie pisania na najwyższym poziomie, czy też pozostałe produkty powinny pozostać w wersji ręcznej/tylko fragmentarycznej
2. Kiedy, jeśli w ogóle, zarządzanie hostowane powinno zostać przeniesione za bramę zewnętrzną lub dostawcę tożsamości w przedsiębiorstwie, a nie za obecną linię bazową w trakcie procesu?
3. Jak daleko powinien się posunąć oceniający, oceniając głębokość pakietu referencyjnego i jakość operacyjną, zanim stanie się on zbyt zawzięty dla autorów?