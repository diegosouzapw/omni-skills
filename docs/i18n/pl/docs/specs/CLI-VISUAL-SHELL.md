# 🖥️ CLI Visual Shell Specification (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Kontrakt behawioralny dla interfejsu użytkownika terminala opartego na Inku, ujawniony przez „interfejs użytkownika omni-skills”.**---

## 1. Scope

Powłoka wizualna to powierzchnia produktu prowadzona na podstawie istniejącego interfejsu CLI i silnika instalatora.

Nie zastępuje:

- Eksperckie użycie CLI oparte na flagach
- `tools/bin/install.js`
- proces instalacji za pomocą tekstu z przewodnikiem
- Zachowanie środowiska wykonawczego API, MCP lub A2A

Definiuje:

- zachowanie `omni-umiejętności interfejsu użytkownika`
- umowa awaryjna dla `omni-umiejętności interfejsu --text`
- stan lokalny i ustawiona trwałość
- podglądy uruchomienia usług z przewodnikiem
- powtarzalność dla ostatnich instalacji i przebiegów serwisowych---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` uruchamia powłokę wizualną opartą na Inku.

Powłoka wizualna jest podstawowym terminalem nieeksperckim dla:

- zainstaluj przepływy
- najpierw wyszukaj i zainstaluj katalog
- Uruchomienie MCP
- Uruchomienie API
- Uruchomienie A2A
- lekarz i zwolnienie z palenia### 2.2 Text Fallback

`omni-skills ui --text` uruchamia interfejs awaryjny oparty na readline.

Jest to przydatne, gdy:

- terminal nie może poprawnie renderować bogatszej powłoki
- zachowanie w trybie surowym jest ograniczone
- preferowany jest minimalny tekst zastępczy### 2.3 Handoff Rule

Powłoka wizualna nie implementuje ponownie środowiska wykonawczego usług ani bezpośrednich zapisów instalacyjnych.

Po podglądzie i potwierdzeniu kończy się czysto i przekazuje wykonanie do istniejącego punktu wejścia CLI z równoważnymi argumentami i zmiennymi środowiskowymi.---

## 3. Home Screen Contract

Ekran główny musi udostępniać:

- zainstaluj umiejętności
- znajdź i zainstaluj
- powtórz ostatnie instalacje, jeśli są obecne
- uruchom zapisane ustawienia wstępne instalacji, jeśli są obecne
- uruchomić usługę
- powtórz ostatnie usługi, jeśli są obecne
- uruchom zapisane ustawienia usług, jeśli są obecne
- lekarz
- dym
- wyjście

Powinien także pojawić się ekran główny:

- aktualna opublikowana dostępność pakietu
- licznik stanu lokalnego dla ostatnich, ustawień wstępnych i ulubionych---

## 4. Install Flow Contract

Proces instalacji powłoki wizualnej musi obsługiwać:

- znany wybór docelowych klientów
- niestandardowy wybór ścieżki
- pełna instalacja biblioteki
- instalacja z jedną umiejętnością
- instalacja z jednego pakietu
- wyszukaj, a następnie zainstaluj
- podgląd przed zapisem
- zaprogramowane zapisywanie
- przełączanie ulubionych umiejętności lub pakietów

Podgląd musi pokazywać:

- rozwiązano etykietę celu
- rozwiązana ścieżka
- zainstaluj zakres
- wybrana umiejętność lub pakiet, jeśli ma to zastosowanie
- równoważne polecenie CLI---

## 5. Service Flow Contract

Powłoka wizualna musi kierować uruchamianiem w przypadku:### 5.1 MCP

- transport: `stdio`, `stream`, `sse`
- tryb: „tylko do odczytu” lub „lokalny”.
- konfiguracja hosta/portu dla transportów sieciowych
- jawny podgląd poleceń### 5.2 API

- gospodarz
-port
- profil podstawowy lub hartowany
- utwardzane uwierzytelnianie nośnika lub klucza API
- zaostrzone parametry limitów prędkości
- włączenie dziennika audytu
- jawny podgląd poleceń### 5.3 A2A

- gospodarz
-port
- typ sklepu: `memory`, `json`, `sqlite`
- ścieżka przechowywania trwałych trybów
- executor: `inline`, `proces`
- tryb SQLite z obsługą kolejki
- interwał odpytywania i czas trwania dzierżawy dla trybu dzierżawy współdzielonej
- jawny podgląd poleceń---

## 6. Local State Contract

Powłoka wizualna utrzymuje stan tylko lokalny w:```text
~/.omni-skills/state/ui-state.json
```

Stan obejmuje obecnie:

- ostatnie instalacje
- ostatnie uruchomienia usług
- nazwane ustawienia wstępne instalacji
- nazwane ustawienia usług
- ulubione umiejętności
- ulubione pakiety

Powłoka musi obsługiwać:

- ponowne odtwarzanie ostatnich instalacji
- odtwarzanie ostatnich uruchomień usług
- ponowne wykorzystanie nazwanych ustawień instalacji
- ponowne wykorzystanie nazwanych ustawień usług---

## 7. Compatibility Contract

Powłoka wizualna jest addytywna.

Przepływy te muszą pozostać ważne i stabilne:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills install --guided`
- `npx omni-skills znajdź figma --tool kursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

Powłoka wizualna nigdy nie może narzucać się jawnie eksperckim ścieżkom poleceń.---

## 8. Safety Contract

Powłoka wizualna powinna wyraźnie określać stan i zapisywać.

Musi:

- podgląd instalacji przed przekazaniem zapisu
- podgląd poleceń uruchomienia usługi przed wykonaniem
- tam, gdzie jest to praktyczne, trzymaj tajne materiały poza podglądem poleceń w postaci zwykłego tekstu
- utrzymuj stan tylko lokalnie
- Zachowaj nieinteraktywne zachowanie CLI poza powłoką wizualną