# 🧩 CLI Guided Installer Specification (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Kontrakt behawioralny dotyczący instalacji z przewodnikiem w interfejsie CLI Omni Skills.**---

## 1. Scope

Ta specyfikacja definiuje zachowanie instalacji kierowanej, które opiera się na istniejącym zapleczu instalatora.

Nie zastępuje:

- `tools/bin/install.js`
- aktualne przepływy flag ekspertów
- manifesty instalacji selektywnej

Definiuje:

- sposób wejścia w tryb prowadzenia
- w jaki sposób wybierane są miejsca docelowe
- w jaki sposób wybierany jest zakres instalacji
- jakie informacje podglądowe muszą zostać wyświetlone
- jak działa potwierdzenie i wykonanie---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

Interfejs CLI powinien przejść w tryb instalacji prowadzonej, gdy:

- użytkownik uruchamia `omni-skills` bez argumentów w TTY
- użytkownik uruchamia `omni-skills install` bez selektorów w TTY### 2.2 Forced Guided Entry

Interfejs CLI powinien również obsługiwać jawny tryb przewodnika poprzez dedykowaną opcję, taką jak:

- `instalacja omni-umiejętności --z przewodnikiem`

Ten tryb powinien działać nawet wtedy, gdy dane wejściowe są przesyłane potokowo i nie są podłączone do TTY, o ile dostępne jest standardowe wejście.### 2.3 Non-Interactive Safety Rule

W przypadku wywołania bez TTY i bez wyraźnego żądania trybu przewodnika:

- zachowaj bieżące zachowanie domyślne
- nie blokuj oczekiwania na podpowiedzi---

## 3. Destination Model

Instalacja z przewodnikiem musi obsługiwać dwie klasy docelowe:### 3.1 Known Client Target

Każdy znany cel rozpatruje:

- etykieta czytelna dla człowieka
- wewnętrzny identyfikator narzędzia
- zainstaluj flagę
- rozwiązana ścieżka

Wymagane znane cele:

- Claude Code
- Kursor
- Gemini CLI
- Kodeks CLI
- Kiro
- Antygrawitacja
- Otwarty kod### 3.2 Custom Path Target

Niestandardowy tryb ścieżki musi:

- monit o ścieżkę
- rozwiąż `~`
- normalizuj do ścieżki bezwzględnej
- pokaż rozwiązaną ścieżkę w podglądzie---

## 4. Install Scope Model

Instalacja z przewodnikiem musi obsługiwać:### 4.1 Full Library

Odpowiednik bieżącej instalacji bez `--skill` i `--bundle`.### 4.2 Single Skill

Pozwala użytkownikowi wybrać jedną opublikowaną umiejętność.### 4.3 Single Bundle

Pozwala użytkownikowi wybrać jeden wyselekcjonowany pakiet i rozpatrzyć opublikowanych członków.### 4.4 Search Then Install

Pozwala użytkownikowi:

- wprowadź zapytanie
- sprawdzić wyniki
- wybierz umiejętność lub pakiet
- przejdź do podglądu instalacji---

## 5. Preview Contract

Przed wykonaniem instalacja kierowana musi wyświetlać:

- etykieta miejsca docelowego
- ścieżka docelowa
- zainstaluj zakres
- wybrana umiejętność lub pakiet, jeśli dotyczy
- równoważne polecenie CLI

Opcjonalne, ale zalecane:

- podsumowanie wybranych metadanych umiejętności
- podsumowanie dostępności pakietu---

## 6. Execution Contract

Po potwierdzeniu:

- kierowanie delegatów instalacji do istniejącego zaplecza instalatora
- nie implementuje ponownego zapisywania plików

Podgląd polecenia i rzeczywiste delegowane argumenty instalatora muszą dokładnie pasować.---

## 7. Result Contract

Po pomyślnym wykonaniu wynik instalacji z przewodnikiem powinien pokazać:

- wskaźnik sukcesu
- ostateczna ścieżka docelowa
- polecenie, które zostało wykonane
- następna zalecana czynność

Przykładowe kolejne działania:

- wykorzystaj umiejętność u wybranego klienta
- uruchom „lekarz”.
- uruchom `mcp stream --local`---

## 8. Compatibility Contract

Poniższe pozostają ważne i niezmienione:

- `omni-umiejętności --kursor --skill omni-figma`
- `omni-umiejętności --pakiet pełnego stosu`
- `omni-umiejętności --ścieżka ./umiejętności`
- `omni-umiejętności znajdź figmę --tool kursor --install --yes`

Tryb z przewodnikiem dodaje zachowanie. Nie usuwa istniejącego zachowania.