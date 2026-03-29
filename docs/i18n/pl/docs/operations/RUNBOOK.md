# 🔧 System Runbook (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Kompletny przewodnik operacyjny dotyczący tworzenia, sprawdzania, obsługi, zabezpieczania i rozwiązywania problemów z umiejętnościami Omni.**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| Polecenie | Co to robi |
|:------------|:------------|
| `npm run valid` | Sprawdza poprawność `SKILL.md`, regeneruje `metadata.json`, oblicza taksonomię/dojrzałość/jakość/bezpieczeństwo |
| `npm run taksonomia: raport` | Pokazuje sugestie zmiany kategorii bez przepisywania plików |
| `npm uruchom weryfikację:skanery` | Potwierdza zasięg skanera zarejestrowany w wygenerowanych metadanych umiejętności |
| `npm run release:notes` | Generuje niestandardowe informacje o wydaniu na podstawie metadanych, pakietów i historii Git |
| `npm uruchom kompilację` | Regeneruje katalog/manifesty/archiwa/sumy kontrolne, weryfikuje zasięg skanera i archiwa, odbudowuje `docs/CATALOG.md` |
| `test npm` | Pełny pakiet dymny dla przepływów CLI, API, MCP, przyczepki bocznej i archiwów |---

## 🖥️ Visual Shell

Opublikowany CLI zawiera teraz powłokę operatora opartą na Inku:```bash
npx omni-skills ui
```

Aktualne możliwości:

- instalacja z przewodnikiem dla znanych klientów i niestandardowych ścieżek
- proces wyszukiwania i instalowania
- Kreator uruchamiania MCP
- Kreator uruchamiania API
- Kreator uruchamiania A2A
- ostatnie instalacje i ponowne uruchomienie usług
- nazwane ustawienia wstępne instalacji i usług

Ścieżka stanu lokalnego:```text
~/.omni-skills/state/ui-state.json
```

Rozwiązanie zastępcze:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

Skaner statyczny automatycznie sprawdza wszystkie umiejętności:

| Reguła Rodzina | Przykłady |
|:------------|:-------------|
| 🎭 Szybki zastrzyk | Wzorce eksfiltracji, obejście instrukcji |
| 💣 Niszczycielskie polecenia | `rm -rf`, `format`, `mkfs` |
| 🔑 Podejrzane ścieżki | `/etc/shadow`, `~/.ssh`, pliki uwierzytelniające |
| ⚠️ Ryzykowne prymitywy | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Wymaga `clamscan` w `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Tylko wyszukiwanie skrótu — nieznane pliki**nie są przesyłane**domyślnie.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Ścisła bramka zwalniająca:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Archiwa są tworzone automatycznie przez `npm run build`:

| Wyjście | Ścieżka |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<umiejętność>.zip` |
| 📦 Tarball | `dist/archives/<umiejętność>.tar.gz` |
| 🔒 Sumy kontrolne | `dist/archives/<umiejętność>.checksums.txt` |

`dist/` zostało celowo zapisane w tym repozytorium. Wygenerowany katalog, manifesty, pakiety i archiwa stanowią dane wejściowe środowiska wykonawczego dla przepływów instalacji CLI, powierzchni pobierania API, podglądów MCP, przekazywania zadań A2A, testów dymnych i weryfikacji wersji.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Opcjonalne zastąpienie klucza publicznego:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Jeśli nie podano klucza publicznego, kompilacja wyprowadza go poprzez `openssl` do `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Polityka wersji:

- przyrosty łatek aż do `.10`
- po `.10`, następne wydanie wprowadza mniejsze zmiany i resetuje łatkę do `.0`

Przykłady:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Scenariusz | Polecenie |
|:--------------|:------------|
| 📥 Instalacja domyślna (Antygrawitacja) | `npx omni-umiejętności` |
| 🎯 Konkretne umiejętności + klient | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Odkrycie → zainstaluj | `npx omni-skills znajdź figma --tool kursor --install --yes` |
| 📦 Instalacja pakietu | `npx omni-skills --cursor --bundle Essentials` |
| 🩺 Sprawdź instalację | `npx lekarz omni-umiejętności` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filtruj | Flaga | Przykład |
|:-------|:---------|:------------|
| 📂 Kategoria | `--kategoria` | `--rozwój kategorii` |
| 🖥️ Narzędzie | `--narzędzie` | `--kursor narzędzia` |
| ⚠️ Ryzyko | `--ryzyko` | `--bezpieczne ryzyko` |
| 📊 Sortuj | `--sort` | `--sort jakość\|najlepsze praktyki\|poziom\|bezpieczeństwo\|nazwa` |
| 🔄 Zamów | `--zamówienie` | `--order rosnąco\|malejąco` |
| ⭐ Minimalna jakość | `--min-jakość` | `--min-jakość 80` |
| 📋 Min. BP | `--min-najlepsze-praktyki` | `--min-najlepsze-praktyki 60` |
| 🎯 Minimalny poziom | `--min-poziom` | `--min-poziom 2` |
| 🛡️ Min. bezpieczeństwo | `--min-bezpieczeństwo` | `--min-zabezpieczenie 90` |
| ✅ Walidacja | `--stan-walidacji` | `--stan-walidacji minął` |
| 🛡️ Bezpieczeństwo | `--stan-bezpieczeństwa` | `--stan-bezpieczeństwa minął` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Metoda | Punkt końcowy | Cel |
|:-------|:-------------|:------------|
| `DOBIERZ` | `/zdrowiez` | Kontrola stanu zdrowia |
| `DOBIERZ` | `/openapi.json` | Specyfikacja OpenAPI 3.1 |
| `DOBIERZ` | `/v1/umiejętności` | Lista z filtrami |
| `DOBIERZ` | `/v1/wyszukiwanie` | Wyszukiwanie pełnotekstowe |
| `DOBIERZ` | `/v1/skills/:id/archives` | Lista archiwalna |
| `DOBIERZ` | `/v1/skills/:id/download/archive?format=zip` | Pobierz archiwum |
| `DOBIERZ` | `/v1/skills/:id/download/archive/checksums` | Manifest sumy kontrolnej |### 🔐 Hosted API Hardening

| Funkcja | Polecenie |
|:------------|:------------|
| 🔑 Uwierzytelnienie na okaziciela | `OMNI_SKILLS_HTTP_BEARER_TOKEN=zamień-me npx omni-umiejętności api` |
| 🗝️ Autoryzacja klucza API | `OMNI_SKILLS_HTTP_API_KEYS=klucz-a,klucz-b npx omni-umiejętności api` |
| 🛂 Autoryzacja środowiska wykonawczego administratora | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-tajny interfejs API NPX omni-skills` |
| 🚦 Ograniczenie szybkości | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx api omni-umiejętności` |
| 📝 Rejestrowanie audytu | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx api omni-umiejętności` |
| 🌍 Lista dozwolonych CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com interfejs API npx omni-umiejętności` |
| 🧱 Lista dozwolonych adresów IP | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx api omni-umiejętności` |
| 🚧 Tryb konserwacji | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx api omni-umiejętności` |
| 🔁 Zaufany serwer proxy | `OMNI_SKILLS_HTTP_TRUST_PROXY=pętla zwrotna npx api omni-umiejętności` |

> 🟢 `/healthz` pozostaje otwarty z założenia; trasy katalogu wymagają uwierzytelnienia, gdy są włączone. `GET /admin/runtime` wymaga tokena administratora podczas konfiguracji i zwraca migawkę zarządzania na żywo.---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

Wózek boczny może teraz wyświetlać podgląd lub zapisywać konfigurację MCP dla:

- Ustawienia użytkownika i projektu Claude
- Konfiguracja pulpitu Claude
- Konfiguracja użytkownika Cline
- Konfiguracja użytkownika i repozytorium GitHub Copilot CLI
- Konfiguracja użytkownika kursora i obszaru roboczego
- Konfiguracja Kodeksu TOML
- Ustawienia użytkownika i projektu Gemini
- Konfiguracja użytkownika i projektu Kilo CLI
- Konfiguracja obszaru roboczego Kilo
- Ustawienia użytkownika i projektu Kiro
- Konfiguracja użytkownika i obszaru roboczego OpenCode
- Kontynuuj konfigurację YAML obszaru roboczego
- Konfiguracja użytkownika windsurfingu
- Konfiguracja obszaru roboczego Zed
- obszar roboczy `.mcp.json`
- Przestrzeń robocza VS Code i konfiguracja użytkownika
- Konfiguracja kontenera deweloperskiego

`configure_client_mcp` zwraca również `przepisy` dla poszczególnych klientów, dzięki czemu operatorzy mogą uzyskać równoważne kroki konfiguracji CLI lub ręcznej wraz z podglądem.### 🧾 MCP Config Preview and Write Flow

Użyj ujednoliconego interfejsu CLI, jeśli chcesz wygenerować konfigurację bez bezpośredniego wywoływania narzędzia MCP:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Powłoka wizualna udostępnia ten sam przepływ pracy poprzez:

- `npx interfejs użytkownika omni-umiejętności`
- ,,Usługi".
- `Skonfiguruj klienta MCP`

Polecenie pozostaje w trybie podglądu, chyba że zostanie przekazane `--write`.### 🔐 Hosted MCP Hardening

Te same env vars co API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Trasy chronione**: `POST /mcp` · `GET /sse` · `POST /wiadomości` · `GET /admin/runtime`

> 🟢 `/healthz` pozostaje otwarty.---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

Domyślna ścieżka lokalna pozostaje prosta:

- Trwałość `json` lub `sqlite` może działać przy wyłączonym odpytywaniu kolejki
- ustaw `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` tylko wtedy, gdy chcesz przełączać awaryjnie roszczenia i dzierżawę dla wielu pracowników
- zachowaj koordynację Redis jako zaawansowaną opcję hostowaną, a nie linię bazową### 🧱 Multi-Worker Lease Setup

Uruchom więcej niż jeden węzeł A2A w tym samym magazynie SQLite, aby uzyskać przełączanie awaryjne na podstawie dzierżawy:```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Jeśli pracownik umrze, gdy zadanie „pracuje”, inny pracownik może je odzyskać po wygaśnięciu dzierżawy i kontynuować wykonywanie.### 🟥 Redis Coordination

W przypadku wdrożeń hostowanych lub wielowęzłowych, które nie chcą, aby koordynacja kolejki była powiązana ze współdzielonym magazynem SQLite, zmień koordynatora na Redis:```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

W tym trybie:

- trwałość nadal żyje w JSON lub SQLite
- Przejmowanie zadań i dzierżawa własności przenoszą się do Redis
- wiele węzłów A2A może współdzielić kolejkę bez polegania na koordynacji na poziomie wiersza SQLite### 📡 Endpoints

| Metoda | Ścieżka | Cel |
|:-------|:---------|:------------|
| `DOBIERZ` | `/zdrowiez` | Kontrola stanu zdrowia |
| `DOBIERZ` | `/.well-known/agent.json` | Karta agenta (odkrycie A2A) |
| `POST` | `/a2a` | Punkt końcowy JSON-RPC dla zadań i przesyłania strumieniowego |### 🧭 Supported JSON-RPC Methods

| Metoda | Cel |
|:-------|:------------|
| `wiadomość/wyślij` | Rozpocznij lub kontynuuj zadanie |
| `wiadomość/strumień` | Rozpocznij zadanie i przesyłaj strumieniowo aktualizacje SSE |
| `zadania/pobierz` | Odpytuj migawkę zadania |
| `zadania/anuluj` | Anuluj aktywne zadanie |
| `zadania/ponowna subskrypcja` | Wznów aktualizacje SSE dla istniejącego zadania |
| `zadania/pushNotificationConfig/zestaw` | Zarejestruj webhook push |
| `tasks/pushNotificationConfig/get` | Przeczytaj konfigurację push |
| `zadania/pushNotificationConfig/list` | Lista konfiguracji push dla zadania |
| `zadania/pushNotificationConfig/usuń` | Usuń konfigurację push |### 📡 Task Lifecycle

Bieżące środowisko wykonawcze obsługuje następujące stany zadań:

- „złożony”.
- ,,pracuje".
- `wymagane wprowadzenie`
- „ukończone”.
- „anulowany”.
- „nie udało się”.

Zadania są utrwalane w pliku JSON lub w magazynie SQLite i ładowane ponownie przy ponownym uruchomieniu. Zadania zakończone i przerwane pozostają dostępne. Zadania, które podczas zamykania systemu były nadal „przesłane” lub „działały”, są odzyskiwane z jawnymi metadanymi ponownego uruchomienia i domyślnie wznawiane automatycznie.### 🧪 Example: Start a Task

```bash
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
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

Repozytorium ma teraz dwa przepływy pracy:

| Przepływ pracy | Wyzwalacz | Cel |
|:--------------|:------------|:------------|
| `validate.yml` | Wciśnij/PR do „głównego” | Kompiluj, testuj i potwierdzaj, że wygenerowane artefakty zostały zatwierdzone |
| `release.yml` | Tag push `v*` lub ręczna wysyłka | Uruchom skanery wersji, sprawdź znacznik wersji, podpisz artefakty, spakuj archiwum tar, opublikuj w npm i utwórz GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Sekret | Używany przez | Cel |
|:-------|:------------|:------------|
| `VT_API_KEY` lub `VIRUSTOTAL` | `release.yml` | Wymagaj wyszukiwania skrótu VirusTotal w kompilacjach wersji |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` lub `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Wymagany klucz prywatny do podpisywania odłączonego archiwum w CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` lub `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Opcjonalne zastąpienie klucza publicznego; w inny sposób uzyskany z klucza prywatnego |
| `NPM_TOKEN` | Praca `publish-npm` | Uwierzytelnij `npm Publishing` w celu wydania tagów |### 🦠 Release Scanner Policy

`release.yml` ustawia lub przygotowuje:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ sekrety.VT_API_KEY || sekrety.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` z tymczasowej pamięci biegacza

Oznacza to, że każda wersja oparta na tagach musi:

- zainstaluj i odśwież ClamAV na runnerze
- zregeneruj metadane z włączoną funkcją ClamAV
- zregeneruj metadane z włączoną funkcją VirusTotal
- zdekoduj klucz do podpisania CI w tymczasowej pamięci runner
- przekazać `npm run valid:scanners:strict`
- przekazać `npm run valid:archives:strict`
- przejść testy i weryfikację pakietu przed publikacją npm
- generuj niestandardowe informacje o wydaniu na podstawie metadanych katalogu i historii git
- po opublikowaniu utwórz wydanie GitHub z dołączonymi zasobami wydania---

## 1️⃣1️⃣ Environment Variables Reference

| Zmienna | Cel | Domyślne |
|:--------------|:------------|:------------|
| `OMNI_SKILLS_ROOT` | Zastąp ścieżkę katalogu głównego | Wykryto automatycznie |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Dodatkowe dozwolone ścieżki zapisu | Znane korzenie klientów |
| `OMNI_SKILLS_MCP_MODE` | Ustaw na „lokalny” dla wózka bocznego | Zdalny |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Flaga Alt dla trybu lokalnego | `0` |
| `OMNI_SKILLS_API_BASE_URL` | Publiczny adres URL API dla MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Publiczny podstawowy adres URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Token autoryzacji okaziciela | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Klucze API oddzielone przecinkami | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Token autoryzacji środowiska wykonawczego administratora | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Maksymalna liczba żądań na okno | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Okno limitu szybkości (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Włącz rejestrowanie audytu | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | Wyniki audytu `json` lub `text` | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Opcjonalna ścieżka pliku dziennika kontroli | standardowe wyjście |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Lista dozwolonych źródeł CORS oddzielonych przecinkami | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Lista dozwolonych adresów IP lub CIDR rozdzielonych przecinkami | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Ustawienie proxy zaufania ekspresowego | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Włącz reakcje konserwacyjne | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Konserwacja „Ponów próbę po” sekundach | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Symulowane opóźnienie zadania asynchronicznego | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | magazyn zadań `json`, `sqlite` lub `memory` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Niestandardowy plik magazynu zadań A2A | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Włącz odpytywanie kolejki współdzielonej dla pracowników świadomych dzierżawy | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | koordynator `store`, `sqlite`, `local` lub `redis` | `sklep` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Adres URL Redis do koordynacji zewnętrznej | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Prefiks klucza Redis dla metadanych kolejki | `omni-umiejętności:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Interwał odpytywania kolejki dla pracowników dzierżawionych | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Czas trwania dzierżawy, zanim inny pracownik będzie mógł odzyskać zadanie | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Stabilny identyfikator pracownika dla własności dzierżawy i diagnostyki | Nazwa hosta + PID + losowy sufiks |
| `OMNI_SKILLS_A2A_EXECUTOR` | `inline` lub `procesowy' wykonawca zadania | „wbudowane” |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Zastąp polecenie zewnętrznego procesu roboczego | Węzeł binarny |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | Tablica JSON zewnętrznych argumentów procesu roboczego | `["pakiety/serwer-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Wznów odzyskane przesłane/działające zadania podczas uruchamiania | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Zezwalaj na webhooki inne niż HTTPS poza localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Włącz skanowanie ClamAV | `0` |
| `KLUCZ_API_VT` | Klucz API VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Klucz prywatny do podpisu | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Zastąpienie klucza publicznego | Pochodzenie automatyczne |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Odbuduj za pomocą `npm run build`
2. Uruchom ponownie `npm run valid:archives`
3. Jeśli podpisywanie jest włączone, potwierdź klucz publiczny i dostępność `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- Potwierdź, że w sekretach repozytorium istnieje klucz „VT_API_KEY”.
- Potwierdź, że polecenie „freshclam” powiodło się na biegaczu
- Przebuduj lokalnie za pomocą `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Uruchom ponownie `npm run valid:scanners:strict`### 📦 npm Publish Fails in CI

- Potwierdź, że w sekretach repozytorium istnieje „NPM_TOKEN”.
- Upewnij się, że tag Git dokładnie pasuje do wersji `package.json`
- Sprawdź, czy plik tar przesłany przez `release-verify` istnieje w artefaktach przepływu pracy### ✍️ Release Signing Fails in CI

- Potwierdź, że w sekretach repozytorium istnieje `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` lub `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- Jeśli podasz tajny klucz publiczny, potwierdź, że jest zgodny z kluczem prywatnym
- Upewnij się, że „openssl” jest dostępny i klucz prywatny jest w formacie PEM
- Odbuduj lokalnie za pomocą `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Uruchom ponownie `npm run Verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- Zweryfikuj `OMNI_SKILLS_HTTP_BEARER_TOKEN` lub `OMNI_SKILLS_HTTP_API_KEYS`
- Dołącz nagłówek „Autoryzacja: nośnik <token>” lub „x-api-key”### 🚦 API/MCP Returns `429 Too Many Requests`

- Zwiększ `OMNI_SKILLS_RATE_LIMIT_MAX`
- Rozszerz `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Zmniejsz ruch impulsowy od klientów lub sond### 🛂 API/MCP Admin Runtime Returns `401`

- Sprawdź `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Wyślij `x-admin-token: <token>` lub `Autoryzacja: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Wyłącz `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Użyj `/healthz` dla sond żywotności podczas konserwacji
- Użyj `/admin/runtime` z tokenem administratora do diagnostyki operatora### 🌍 Browser Requests Fail CORS Validation

- Sprawdź `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Podaj dokładny schemat i hosta, na przykład „https://app.example.com”.### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Sprawdź `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Sprawdź `OMNI_SKILLS_A2A_REDIS_URL`
- Sprawdź łączność Redis z każdego węzła
- Sprawdź `/healthz` pod kątem migawki `koordynacji`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
