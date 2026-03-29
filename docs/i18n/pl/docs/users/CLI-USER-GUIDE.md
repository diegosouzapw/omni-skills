# 🧭 Omni Skills CLI User Guide (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Pełna publiczna powierzchnia CLI dostarczana przez `omni-skills`.**

Skorzystaj z tego przewodnika, jeśli chcesz:

| Cel | Obszar dowodzenia |
|:---------|:------------|
| 📥 Zainstaluj umiejętności lub pakiety | [Przepływy instalacji](#3️⃣-przepływy instalacji) |
| 🔎 Przeszukaj katalog | [Odkrycie katalogu](#4️⃣-odkrycie-katalogu) |
| 🔌 Skonfiguruj klientów MCP | [Konfiguracja klienta MCP](#5️⃣-mcp-client-config) |
| 🖥️ Uruchom usługi MCP, API lub A2A | [Serwer MCP](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Użyj wizualnej powłoki terminala | [Powłoka wizualna](#9️⃣-powłoka wizualna) |
| 🧪 Uruchom diagnostykę lub lot wstępny | [Diagnostyka](#🔟-diagnostyka-i-preflight) |---

## 1️⃣ Install and Entry Modes

Zainstaluj za pomocą `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Kontekst | Co się dzieje |
|:------------|:------------|
| 🖥️ TTY + bez argumentów | Otwiera proces**instalacji z przewodnikiem**|
| ⚙️ Non-TTY + brak argumentów | Nieinteraktywna instalacja w `~/.gemini/antigravity/skills` |
| 🎨 `npx interfejs użytkownika omni` | Markowa**powłoka wizualna Ink**|
| 📝 `npx omni-skills interfejs użytkownika --text` | Readline**tekst zastępczy**Interfejs użytkownika |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Polecenie | Opis |
|:------------|:---------------|
| `ui` | 🎨 Wizualne centrum terminali |
| `znajdź [zapytanie]` | 🔎 Odkrycie katalogu |
| „przekategoryzować” | 🏷️ Zarządzanie taksonomią |
| `zainstaluj [flagi]` | 📥 Instalacja umiejętności/pakietu |
| `config-mcp` | 🔌 Konfiguracja klienta MCP |
| `mcp <stdio\|strumień\|sse>` | 🔌 Tryby serwera MCP |
| `api` | 🌐 API katalogu |
| `a2a` | 🤖 Środowisko wykonawcze A2A |
| `dym` | 🧪 Zwolnij wersję przedpremierową |
| `publikuj-sprawdzanie` | 📦 Sprawdzenie publikacji pakietu |
| „lekarz” | 🩺Diagnostyka środowiska |
| `pomoc` | ❓ Informacje o poleceniach |---

## 3️⃣ Install Flows

### Szybki start

```bash
npx omni-skills
npx omni-skills install --guided
```

> Kierowany przepływ pozwala wybrać:**klient docelowy**→**pakiet lub umiejętność**→**ścieżka niestandardowa**→**podgląd przed wykonaniem**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Flaga | Klient |
|:---------|:-------|
| `--antygrawitacja` | 🟣 Antygrawitacja *(domyślnie)* |
| `--claude` | 🟢 Kod Claude'a |
| `--kursor` | 🔵 Kursor |
| `--kodeks` | 🔴 Kodeks CLI |
| `--bliźnięta` | 🟡 Bliźnięta CLI |
| `--kiro` | 🟠Kiro |
| `--opencode` | ⚪ Otwarty kod |

> Domyślny cel instalacji (nieinteraktywny): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Flaga | Cel |
|:---------|:------------|
| `--kategoria` | Filtruj według kategorii taksonomii |
| `--narzędzie` | Filtruj według obsługiwanego narzędzia |
| `--ryzyko` | Filtruj według poziomu ryzyka |
| `--sort` | Sortuj wyniki (np. „jakość”) |
| `--zamówienie` | Kolejność sortowania |
| `--min-jakość` | Minimalny wynik jakości |
| `--min-najlepsze-praktyki` | Minimalny wynik najlepszych praktyk |
| `--min-poziom` | Minimalny poziom dojrzałości |
| `--min-bezpieczeństwo` | Minimalny wynik bezpieczeństwa |
| `--stan-walidacji` | Filtruj według stanu walidacji |
| `--stan-bezpieczeństwa` | Filtruj według stanu bezpieczeństwa |---

## 5️⃣ MCP Client Config

Użyj `config-mcp`, aby wyświetlić podgląd lub zapisać konfigurację MCP obsługującą klienta.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<szczegóły>
<summary>🔌 <strong>Powierzchnia klienta z możliwością konfiguracji</strong></summary>

| Klient | Cele |
|:-------|:------------|
| Klaudiusz | Ustawienia i cele na pulpicie |
| Kursor | Użytkownik i obszar roboczy |
| Kodeks | Konfiguracja TOML-a |
| Bliźnięta | Użytkownik i obszar roboczy |
| Antygrawitacja | Konfiguracja użytkownika |
| Otwarty kod | Użytkownik i obszar roboczy |
| Cline | Cel pierwszej klasy |
| GitHub Copilot CLI | Użytkownik i repozytorium |
| Kod Kilo | Użytkownik, projekt i obszar roboczy |
| Kiro | Użytkownik i obszar roboczy |
| Zed | Obszar roboczy |
| Kod VS | Użytkownik, obszar roboczy i kontener deweloperski |
| Kontynuuj | Obszar roboczy YAML |
| Junie | Projekt i użytkownik |
| Windsurfing | Konfiguracja użytkownika |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**Lokalny wózek**dodaje: wykrywanie klienta, podgląd instalacji, przepływy instalacji/usuwania i zapisywanie konfiguracji MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Trasa | Cel |
|:------|:------------|
| `POBIERZ /zdrowiez` | Kontrola stanu zdrowia |
| `POBIERZ /openapi.json` | Specyfikacja OpenAPI |
| `POBIERZ /v1/umiejętności` | Lista wszystkich umiejętności |
| `POBIERZ /v1/wyszukiwanie` | Przeszukaj katalog |
| `POBIERZ /v1/skills/:id/archives` | Lista archiwów umiejętności |
| `POBIERZ /v1/skills/:id/download/archive?format=zip` | Pobierz archiwum umiejętności |
| `POBIERZ /v1/skills/:id/download/archive/sumy kontrolne` | Pobierz sumy kontrolne |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Funkcja | Stan |
|:------------|:-------|
| 🔎 Odkrywanie świadome zadań | ✅ |
| 📋 Przekazanie planu instalacji | ✅ |
| 🔄 Sonda | ✅ |
| 📡 Transmisja strumieniowa | ✅ |
| ❌ Anulowanie | ✅ |
| 🔔 Konfiguracja powiadomień push | ✅ |
| 💾 Trwałość | Pamięć, JSON i SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funkcje

| Funkcja | Opis |
|:------------|:---------------|
| 🧭 Instalacja z przewodnikiem | Wybierz ścieżkę klienta lub niestandardową |
| 🔎 Wyszukaj + zainstaluj | Nie jest potrzebne zapamiętywanie flag |
| 🔌 Konfiguracja MCP | Podgląd i zapis przepływów |
| 🖥️ Uruchomienie usługi | Uruchamianie z przewodnikiem MCP, API i A2A |
| 🕐 Ostatnie | Ostatnie instalacje i ponowne uruchomienie usług |
| ⭐ Ulubione | Zapisane umiejętności i pakiety |
| 💾 Ustawienia wstępne | Nazwane ustawienia wstępne instalacji i usług |

>**Ścieżka stanu:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Sprawdza: stan repozytorium, stan instalacji lokalnej, dostępność środowiska wykonawczego i problemy ze środowiskiem.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Sprawdza: kompilację, testy, dane wyjściowe pakietu, uruchomienie usługi, pokrycie skanera i wydanie pakietu.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Osoba | Polecenie | Cel |
|:---------------|:------------|:------------|
| 🆕 Nowy użytkownik | `npx omni-umiejętności` | Pierwsza instalacja z przewodnikiem |
| 🔧Operator | `npx omni-skills config-mcp --list-targets` | Skonfiguruj lokalny MCP |
| 🔧Operator | `npx omni-skills mcp strumień --local` | Uruchom lokalny wózek boczny |
| 📦 Opiekun | `npx omni-umiejętności dymu` | Zatwierdź wydanie |
| 🔍 Zaawansowany użytkownik | `npx omni-umiejętności znajdź bezpieczeństwo --sortuj jakość --min-jakość 95` | Najpierw znajdź najlepszą umiejętność |---

## 📖 Related Documents

| Doktor | Co obejmuje |
|:--------|:-------------|
| 🚀 [Pierwsze kroki](./GETTING-STARTED.md) | Zainstaluj i zweryfikuj w niecałe 2 minuty |
| 📗 [Przewodnik użytkowania](./USAGE.md) | Wszystkie polecenia, wzorce i tryby CLI |
| 📦 [Pakiety](./BUNDLES.md) | Wyselekcjonowane kolekcje umiejętności |
| 🔧 [Systemowy element Runbook](../operacje/RUNBOOK.md) | Odniesienie operacyjne |
| 🔌 [Lokalny wózek MCP](../specs/LOCAL-MCP-SIDECAR.md) | Narzędzia systemu plików i pisanie konfiguracji |