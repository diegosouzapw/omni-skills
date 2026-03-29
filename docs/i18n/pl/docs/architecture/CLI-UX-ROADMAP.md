# 🧭 CLI UX Roadmap (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Plan działania produktu dotyczący ewolucji Omni Skills z podstawowego instalatora w terminal z przewodnikiem zarówno dla doświadczonych, jak i nie-ekspertowych użytkowników.**
> Zakres: pakiet npm, instalacja CLI, interfejs użytkownika terminala, przepływy uruchamiania usług i wizualne wdrożenie.---

## 1. Problem Statement

Obecne podstawy środowiska wykonawczego są mocne, ale środowisko początkowe jest nadal zoptymalizowane dla użytkowników, którzy już rozumieją:

- do jakiego klienta chcą dotrzeć
- jakiego selektora instalacji chcą użyć
- jak przetłumaczyć cele na `--umiejętność`, `--bundle` lub `znajdź`
- gdy potrzebują instalacji wyłącznie za pomocą CLI zamiast usług MCP, API lub A2A

Dzisiaj:

- `npx omni-skills` domyślnie jest ustawione na Antygrawitację
- jest to technicznie ważne i kompatybilne wstecz
- ale nie jest idealny dla początkujących użytkowników lub operatorów mniej technicznych

Interfejs CLI ma już podstawowy tryb interaktywny, ale nadal bardziej przypomina narzędzie programistyczne niż powierzchnię produktu z przewodnikiem.

Ten plan działania definiuje ścieżkę do silniejszego publicznego interfejsu użytkownika bez przerywania obecnego interfejsu opartego na flagach.---

## 1.1 Delivery Status

Plan działania jest obecnie w dużej mierze wdrażany w obecnym stanie repozytorium.

Ukończono:

- Faza 1: Wybór punktu wejścia z przewodnikiem
- Faza 2: Kreator instalacji z przewodnikiem
- Faza 3: Wizualna powłoka terminala
- Faza 4: Centrum usług wizualnych
- Faza 5: Zapisane profile i powtarzalność
- Faza 6: Hartowanie, testy i dokumentacja---

## 2. Goals

- Zachowaj bieżące przepływy pracy eksperckiego interfejsu CLI
- Spraw, aby punkt wejścia bez argumentów był bezpieczny i zrozumiały dla początkujących użytkowników
- Zastąp ciche ustawienia domyślne w kontekstach interaktywnych wyborem z przewodnikiem
- Obsługa znanych klientów AI i dowolnych niestandardowych ścieżek instalacji
- Zmień instalację, wykrywanie i uruchamianie usługi w spójną podróż użytkownika
- Zapewnij wizualny interfejs terminala, który przypomina produkt, a nie tylko skrypt
- Zachowaj możliwość ponownego wykorzystania silnika instalacyjnego, katalogu i środowiska wykonawczego usługi w interfejsie użytkownika---

## 3. Non-Goals

— Zastąpienie obecnego interfejsu CLI opartego na flagach
- Usunięcie Antygrawitacji jako obsługiwanego celu domyślnego
- Wysyłka interfejsu internetowego jako głównego trybu dostawy
- Refaktoryzacja samych protokołów API, MCP lub A2A w ramach prac nad UX
- Zastąpienie tworzenia pliku `SKILL.md` panelem administracyjnym opartym na bazie danych---

## 4. Design Principles

### 4.1 Backward Compatibility First

Polecenia te muszą nadal działać dokładnie tak, jak dzisiaj:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills znajdź figma --tool kursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interaktywna sesja terminala bez argumentów: otwarte doświadczenie z przewodnikiem
- Nieinteraktywne wywołanie bez argumentów: zachowanie domyślnego zachowania bieżącej instalacji
- Jawne polecenia i flagi zawsze wygrywają z wnioskowaniem o interfejsie użytkownika### 4.3 Reuse One Engine Across Modes

Następujące elementy powinny mieć tę samą wewnętrzną logikę:

- flagowy CLI
- CLI w trybie tekstowym z przewodnikiem
- wizualny interfejs terminala

Oznacza to, że warstwa UX nie może posiadać logiki biznesowej. Powinien organizować działania wielokrotnego użytku.### 4.4 Preview Before Write

Wszystkie przepływy kierowane, które powodują zapisy, powinny wyświetlać:

- ustalony cel
- rozwiązana ścieżka
- wybrane umiejętności lub pakiety
- równoważne polecenie CLI
- monit o potwierdzenie### 4.5 Visual Does Not Mean Implicit

Nawet w bogatszym interfejsie użytkownika system powinien nadal wyraźnie określać stan i akcje:

- dokąd zmierza instalacja
- co zostanie napisane
- z jakiego transportu lub portu będzie korzystała usługa
- czy przepływ jest tylko do odczytu, czy z możliwością lokalnego zapisu---

## 5. User Personas

### 5.1 Expert CLI User

Potrzeby:

- szybkie polecenia
- brak wymuszonych podpowiedzi
- stabilne flagi
- skryptowalność### 5.2 Guided Product User

Potrzeby:

- jasne wybory
- brak założenia, że antygrawitacja jest pożądana
- obsługa instalacji na niestandardowej ścieżce
- zrozumiały podgląd instalacji
- widoczne rozróżnienie pomiędzy działaniami instalacyjnymi i wykonawczymi serwera### 5.3 Operator / Platform User

Potrzeby:

- możliwość wizualnego uruchomienia MCP, API i A2A
- rozsądne wartości domyślne
- opcjonalne dostrajanie portów, transportu, trwałości, trybu executora, uwierzytelniania i trybu lokalnego---

## 6. Target UX Model

Produkt powinien eksponować trzy warstwy:### 6.1 Expert Mode

Bezpośrednie polecenia i flagi.

Przykłady:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Wywoływane, gdy:

- użytkownik uruchamia `npx omni-skills` w TTY bez argumentów
- użytkownik uruchamia `npx omni-skills install` bez konkretnych selektorów
- użytkownik wyraźnie wyraża zgodę na tryb przewodnika

Przewodnik po instalacji powinien obejmować:

1. Klient docelowy lub ścieżka niestandardowa
2. typ instalacji
3. wybór umiejętności lub pakietu
4. podgląd
5. potwierdzenie
6. wykonanie
7. kolejne kroki### 6.3 Visual Operations Hub

Wywołane przez:

- `npx interfejs użytkownika omni-umiejętności`

Powinien on stać się „ekranem głównym” dla nie-ekspertów i operatorów.

Podstawowe działania:

- zainstaluj umiejętności
- odkryj umiejętności
- uruchom MCP
- uruchom API
- rozpocznij A2A
- biegnij doktorze
- przeprowadzić kontrolę dymu---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Wynik:

- `npx omni-skills` w TTY nie zakłada już po cichu antygrawitacji
- użytkownicy są proszeni o wybranie ścieżki klienta lub ścieżki niestandardowej

Wymagania:

- Zachowaj domyślne zachowanie instalacji inne niż TTY
- dodaj selektor celu
- obsługa niestandardowego przechwytywania ścieżki### Phase 2: Guided Install Wizard

Wynik:

- instalacja staje się pełnym procesem prowadzonym

Wymagania:

- wybór trybu instalacji:
  - pełna biblioteka
  - jedna umiejętność
  - jeden pakiet
  - wyszukaj, a następnie zainstaluj
- zainstaluj podgląd
- równoważne renderowanie poleceń
- potwierdzenie i wykonanie### Phase 3: Visual Terminal Shell

Wynik:

- obecny podstawowy interfejs tekstowy staje się markową aplikacją terminalową

Wymagania:

- bogatszy układ
- branding i logo projektu
- lepszy stepper i karty
- nawigacja sterowana klawiaturą
- Reaguj na implementację terminala za pomocą Ink### Phase 4: Visual Service Hub

Wynik:

- MCP, API i A2A można uruchomić z wizualnego interfejsu użytkownika

Wymagania:

- kierowany przepływ MCP
- kierowany przepływ API
- kierowany przepływ A2A
- widoczny tryb i podgląd konfiguracji### Phase 5: Saved Profiles and Repeatability

Wynik:

- można ponownie wykorzystać wspólne ustawienia instalacji lub usług

Wymagania:

- pamiętaj o ostatnich celach
- zapisane ustawienia usług
- ostatnie polecenia
- ulubione pakiety lub umiejętności### Phase 6: Hardening, Tests, and Documentation

Wynik:

- UX staje się utrzymywanym interfejsem publicznym, a nie doraźną wygodą

Wymagania:

- pokrycie dymem
- testy regresyjne
- aktualizacje dokumentów
- wytyczne operatora
- przegląd kompatybilności pakietu---

## 8. Proposed Command Model

### Stable Commands

- „omni-umiejętności”.
- `instalacja omni-umiejętności`
- "Znalezisko omni-umiejętności".
- `omni-umiejętności interfejsu użytkownika`
- `omni-umiejętności mcp`
- `Api omni-umiejętności`
- `omni-umiejętności a2a`
- „lekarz wszechstronny”.
- `dym omni-umiejętności`### Recommended Behavior

| Inwokacja | Zachowanie |
|:---------------|:-------------|
| `omni-umiejętności` w TTY, bez argumentów | Wpis dotyczący instalacji z przewodnikiem |
| `omni-umiejętności` w trybie innym niż TTY, bez argumentów | Bieżąca domyślna instalacja Antygrawitacji |
| `instalacja omni-umiejętności` w TTY, bez selektorów | Kreator instalacji z przewodnikiem |
| `omni-skills install --guided` | Wymuszony przebieg instalacji |
| `omni-umiejętności interfejsu użytkownika` | Otwórz centrum operacji wizualnych |
| wyraźne flagi | Wykonaj bezpośrednio, bez wchodzenia w prowadzony przepływ |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Opcje:

- Claude Code
- Kursor
- Gemini CLI
- Kodeks CLI
- Kiro
- Antygrawitacja
- Otwarty kod
- Ścieżka niestandardowa

Dane wyjściowe:

- wybrana znana docelowa ścieżka LUB niestandardowa ścieżka systemu plików### Step 2: Choose Install Type

Opcje:

- pełna biblioteka
- jedna opublikowana umiejętność
- jeden pakiet
- wyszukaj, a następnie zainstaluj

Dane wyjściowe:

- zainstaluj zakres### Step 3: Resolve Selection

W zależności od typu instalacji:

- pełna biblioteka: brak dodatkowego selektora
- umiejętność: wypisz lub wybierz umiejętność
- pakiet: wyświetl lub wybierz pakiet
- wyszukiwanie: monit o zapytanie, pokazanie pasujących umiejętności i pakietów### Step 4: Preview

Wyświetlacz:

- wybrany cel
- rozwiązana ścieżka
- wybrana umiejętność lub pakiet
- równoważne polecenie CLI
- czy przepływ jest selektywny, czy instalacja pełna### Step 5: Confirm

Użytkownik potwierdza:

- tak → wykonaj
- nie → przerwij lub wróć### Step 6: Result

Wyświetlacz:

- sukces/porażka
- ścieżka docelowa
- sugestia następnego kroku---

## 10. Information Architecture for the Visual Operations Hub

Centrum operacyjne powinno udostępniać:### 10.1 Install

- przebieg instalacji z przewodnikiem
- wyszukiwanie umiejętności lub pakietów
- niestandardowa ścieżka### 10.2 Discover

- wyszukiwanie w katalogu
- filtry
- podgląd metadanych
- zainstaluj przekazanie### 10.3 MCP

Opcje:

- transport: stdio, strumień, sse
- włączenie/wyłączenie trybu lokalnego
- gospodarz
-port### 10.4 API

Opcje:

- gospodarz
-port
- opcjonalna autoryzacja
- opcjonalny limit stawki### 10.5 A2A

Opcje:

- gospodarz
-port
- typ sklepu: pamięć, json, sqlite
- executor: inline, proces
- opcje dzierżawy, gdy włączona jest kolejka sqlite### 10.6 Diagnostics

- lekarz
- dym---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Obecne miksy `tools/bin/cli.js`:

- analiza poleceń
- prezentacja
- interaktywne podpowiedzi
- aranżacja akcji
- rozruch serwisowy

Nowa struktura powinna przenieść logikę wielokrotnego użytku do:

- `narzędzia/lib/cli-actions/`
- `tools/lib/install-flow/`
- `narzędzia/lib/przepływ usług/`
- `narzędzia/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` powinien pozostać backendem z możliwością zapisu.

Interfejs użytkownika z przewodnikiem powinien wywoływać istniejący backend instalatora, a nie powielać logikę instalacji.### 11.3 Keep Find/Search Reusable

Kreator instalacji z przewodnikiem powinien ponownie wykorzystać ten sam rdzeń katalogu i logikę wyszukiwania CLI, która już działa:

- „znajdź”.
- zainstaluj podglądy
- rozdzielczość pakietu### 11.4 Prepare for Ink Without Forcing It Early

Pierwsza dostawa może pozostać w trybie tekstowym.

Jednak architektura powinna zachować przejrzystość połączenia, aby przepływ tekstu mógł być później renderowany za pomocą programu Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Łagodzenie:

- automatycznie otwieraj interfejs użytkownika z przewodnikiem w TTY
- zachowaj bieżące ustawienia domyślne w trybie innym niż TTY
- zachowaj wyraźne przepływy flag### 12.2 Letting UI Own Business Logic

Łagodzenie:

- przenieś orkiestrację do modułów akcji wielokrotnego użytku
- trzymaj logikę uruchamiania instalatora i usługi poniżej warstwy interfejsu użytkownika### 12.3 Ink Migration Too Early

Łagodzenie:

- najpierw wyślij kierowany przepływ do bieżącego stosu terminali węzła
- następnie migruj do Inka, gdy semantyka przepływu będzie stabilna### 12.4 Incomplete Service UX

Łagodzenie:

- najpierw wyślij kreatora instalacji
- następnie uruchomienie usługi z przewodnikiem warstwowym---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` w TTY nie instaluje się już natychmiast
- użytkownik może wybrać klienta docelowego lub niestandardową ścieżkę
- wywołanie bez argumentu innego niż TTY nadal działa jak poprzednio### Phase 2

- instalacja z przewodnikiem obsługuje pełną bibliotekę, umiejętności, pakiety i opcję wyszukiwania, a następnie instalowania
- podgląd jest zawsze wyświetlany przed zapisem
- wyświetlany jest odpowiednik polecenia### Phase 3

- istnieje markowy interfejs terminala
- interfejs użytkownika jest bardziej wizualnie zorganizowany niż zwykłe menu Readline
- nawigacja jest przyjazna dla klawiatury### Phase 4

- użytkownicy mogą uruchamiać MCP, API i A2A z centrum wizualnego
- główne opcje wykonawcze można konfigurować w formie wskazówek### Phase 5

- ostatnie lub zapisane preferencje można wykorzystać ponownie
- powtarzanie przepływów wymaga mniej podpowiedzi### Phase 6

- zasięg dymu odzwierciedla nowe punkty wejścia UX
- dokumentacja opisuje tryb przewodnika i zachowanie kreatora usług---

## 14. Execution Order

Ten plan działania należy wdrożyć w następującej kolejności:

1. Wybór punktu wejścia z przewodnikiem
2. Kreator instalacji z przewodnikiem
3. Wizualna powłoka terminala
4. Centrum usług wizualnych
5. Zapisane profile i powtarzalność
6. Hartowanie, próby i polerowanie dokumentów

Prace wdrożeniowe powinny przeczytać odpowiedni plik zadania przed rozpoczęciem każdego zadania, aby praca CLI pozostała zgodna z planem i nie dryfowała.