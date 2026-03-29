# 🌐 Catalog API Surface (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**API HTTP tylko do odczytu do odkrywania umiejętności, wyszukiwania, porównywania, planowania instalacji i pobierania artefaktów.**---

## 📊 Status

| Funkcja | stan |
|:------------|:------|
| ✅ Punkty końcowe katalogu | Wdrożono |
| ✅ Autoryzacja (nośnik + klucz API) | Wdrożono |
| ✅ Autoryzacja środowiska wykonawczego administratora | Wdrożono |
| ✅Ograniczenie szybkości | Wdrożono |
| ✅ Rejestrowanie audytu | Wdrożono |
| ✅ Listy dozwolonych CORS i IP | Wdrożono |
| ✅ Tryb konserwacji | Wdrożono |
| ✅ Pobieranie archiwum | Wdrożono |
| ✅ Specyfikacja OpenAPI | Wdrożono |
| ⚠️Zaplecze zarządzania | Baza w trakcie procesu oparta na środowisku; brama zewnętrzna lub dostawca tożsamości nadal opcjonalny |---

## 🎯 Purpose

Interfejs API zapewnia powierzchnię przypominającą rejestr dla:

- 📋 Wyświetlanie i filtrowanie umiejętności według jakości, bezpieczeństwa, kategorii, ryzyka i innych
- 📌 Pobieranie indywidualnych manifestów umiejętności
- 🔎 Wyszukiwanie pełnotekstowe i porównywanie wielu umiejętności
- 📦 Lista pakietów z informacją o dostępności
- 📐 Generowanie planu instalacji tylko do odczytu
- 📥 Pobieranie wygenerowanych artefaktów, archiwów i manifestów sum kontrolnych

Ten sam katalog i powierzchnia manifestu jest także podstawą:

- lokalne planowanie instalacji CLI
- Odpowiedzi na wykrycie MCP tylko do odczytu
- Wykrywanie A2A i przekazanie planu instalacji
- potencjalne prywatne katalogi z zewnętrznym uwierzytelnianiem nałożonym na wierzch---

## Szybki start

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**Domyślne**: `127.0.0.1:3333`---

## 🔐 Security Controls

Wszystkie kontrole bezpieczeństwa są oparte na środowisku i opcjonalne:

| Kontrola | Zmienna | Przykład |
|:--------|:-------------|:------------|
| 🔑**Uwierzytelnienie na okaziciela**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | „zastąp mnie” |
| 🗝️**Autoryzacja klucza API**| `OMNI_SKILLS_HTTP_API_KEYS` | `klawisz-a, klawisz-b` |
| 🛂**Uwierzytelnienie administratora**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `tajemnica administratora` |
| 🚦**Ograniczenie szybkości**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Logowanie audytu**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Format audytu**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` lub `tekst` |
| 📄**Plik audytowy**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**Lista dozwolonych CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Lista dozwolonych adresów IP**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Zaufany serwer proxy**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `pętla zwrotna` |
| 🚧**Tryb konserwacji**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Spróbuj ponownie po**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Zachowanie:**
- 🟢 `/healthz` pozostaje**zawsze nieuwierzytelnione**
- 🔒 Wszystkie inne trasy wymagają uwierzytelnienia, gdy uwierzytelnianie jest włączone
- 🛂 `/admin/runtime` wymaga tokena administratora, gdy jest włączony
- 🚦 Trwa proces ograniczania szybkości z nagłówkami odpowiedzi `X-RateLimit-*`
- 🧾 Każda odpowiedź zawiera `X-Request-Id`
- 🚧 Tryb konserwacji zwraca „503” dla tras innych niż administracyjne### ✅ Current governance decision

Obecnym kierunkiem projektu jest**ponowne wykorzystanie tego samego formatu katalogu do wdrożeń publicznych lub prywatnych**i w razie potrzeby zewnętrzne uwierzytelnianie warstw.

To oznacza:

- manifest i kształt API pozostają wspólne
- Wdrożenia własne i lokalne mogą pozostać w fazie bazowej w procesie
- bardziej zaawansowane zarządzanie hostowane może zostać później przeniesione do bramy zewnętrznej lub warstwy autoryzacji przedsiębiorstwa bez konieczności rozwidlania modelu danych### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| Metoda | Ścieżka | Opis |
|:-------|:---------|:------------|
| `DOBIERZ` | `/zdrowiez` | Kontrola stanu zdrowia (nieuwierzytelniona) |
| `DOBIERZ` | `/openapi.json` | Specyfikacja dynamicznego OpenAPI 3.1 |
| `DOBIERZ` | `/admin/środowisko wykonawcze` | Migawka zarządzania i środowiska wykonawczego (autoryzacja administratora, jeśli jest włączona) |### 📚 Catalog & Skills

| Metoda | Ścieżka | Opis |
|:-------|:---------|:------------|
| `DOBIERZ` | `/v1/umiejętności` | Lista umiejętności z filtrami |
| `DOBIERZ` | `/v1/umiejętności/:id` | Zdobądź indywidualny manifest umiejętności |
| `DOBIERZ` | `/v1/wyszukiwanie` | Wyszukiwanie pełnotekstowe |
| `DOBIERZ` | `/v1/porównaj?ids=id1,id2` | Porównaj wiele umiejętności |
| `DOBIERZ` | `/v1/pakiety` | Lista pakietów z dostępnością |
| `POST` | `/v1/instalacja/plan` | Wygeneruj plan instalacji |### 🔎 List/Search Filters

| Filtruj | Przykład |
|:-------|:------------|
| `kategoria` | `?kategoria=rozwój` |
| `narzędzie` | `?narzędzie=kursor` |
| „ryzyko” | `?ryzyko=bezpieczne` |
| `sort` | `?sort=jakość\|najlepsze praktyki\|poziom\|bezpieczeństwo\|nazwa` |
| „zamówienie” | `?order=rosn\|malejący` |
| `minimalna_jakość` | `?min_jakość=80` |
| `min_najlepsze_praktyki` | `?min_best_practices=60` |
| `min_poziom` | `?min_poziom=2` |
| `mini_bezpieczeństwo` | `?min_security=90` |
| `status_walidacji` | `?validation_status=zaliczony` |
| `stan_bezpieczeństwa` | `?stan_bezpieczeństwa=zaliczony` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| Metoda | Ścieżka | Opis |
|:-------|:---------|:------------|
| `DOBIERZ` | `/v1/katalog/pobierz` | Pełny katalog do pobrania |
| `DOBIERZ` | `/v1/umiejętności/:id/artefakty` | Lista artefaktów umiejętności |
| `DOBIERZ` | `/v1/skills/:id/archives` | Lista archiwów umiejętności |
| `DOBIERZ` | `/v1/skills/:id/downloads` | Wszystkie dostępne linki do pobrania |
| `DOBIERZ` | `/v1/skills/:id/download/manifest` | Manifest umiejętności JSON |
| `DOBIERZ` | `/v1/skills/:id/download/punkt wejścia` | Umiejętność SKILL.md |
| `DOBIERZ` | `/v1/skills/:id/download/artifact?path=<ścieżka>` | Konkretny artefakt |
| `DOBIERZ` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Archiwum umiejętności |
| `DOBIERZ` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Odłączony podpis |
| `DOBIERZ` | `/v1/skills/:id/download/archive/checksums` | Sumy kontrolne SHA-256 |---

## 🔗 Link Enrichment

Gdy żądania są obsługiwane przez interfejs API, serwer**automatycznie wzbogaca**manifesty, listy artefaktów i plany instalacji o bezwzględne adresy URL pochodzące ze źródła przychodzącego żądania. Jest to wzbogacanie środowiska wykonawczego, a nie wbudowane w `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Plany instalacji to podglądy, a nie zdalne zapisy.**

Interfejs API nigdy nie jest instalowany na komputerze osoby wywołującej. Zwraca:
- 📌 Wybrane metadane umiejętności
- ⚠️ Ostrzeżenia dotyczące brakujących członków pakietu
- 🖥️ Konkretne polecenia CLI do uruchamiania lokalnego
- 🔗 Publiczne adresy URL pobierania, jeśli dostępne jest źródło żądania---

## 🔌 Relationship to MCP

Serwer MCP po skonfigurowaniu ponownie używa tych samych publicznych adresów API:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Dzięki temu podglądy instalacji MCP zwracają konkretne adresy URL manifestu i artefaktów, a nie tylko ścieżki lokalnego repozytorium.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` zwraca migawkę zarządzania przydatną do hostowanej diagnostyki:

- aktywne metody uwierzytelniania
- status autoryzacji administratora
- okno limitu stawki i max
- Lista dozwolonych CORS
- Lista dozwolonych adresów IP
- stan trybu konserwacji
- miejsce docelowe i format audytu
- aktualne sumy katalogowe
- żądanie powtórzenia identyfikatora w celu zapewnienia identyfikowalności