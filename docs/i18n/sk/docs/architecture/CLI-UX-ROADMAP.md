# 🧭 CLI UX Roadmap (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Cestovná mapa produktu pre vývoj Omni Skills z inštalačného programu, ktorý je prvým vlajkou, na riadený terminál pre skúsených aj laických používateľov.**
> Rozsah: balík npm, skúsenosti s inštaláciou CLI, používateľské rozhranie terminálu, toky spúšťania služieb a vizuálna integrácia.---

## 1. Problem Statement

Súčasný základ runtime je silný, ale vstupné prostredie je stále optimalizované pre používateľov, ktorí už rozumejú:

- na akého klienta sa chcú zamerať
- ktorý výber inštalácie chcú použiť
– ako preložiť ciele do výrazov „--skill“, „--bundle“ alebo „find“
- keď potrebujú nainštalovať iba CLI oproti službám MCP, API alebo A2A

dnes:

- `npx omni-skills` je predvolene Antigravitácia
- je to technicky platné a spätne kompatibilné
- ale nie je ideálny pre začínajúcich používateľov alebo menej technických operátorov

CLI už má základný interaktívny režim, ale stále má bližšie k nástroju pre vývojárov ako k riadenej ploche produktu.

Tento plán definuje cestu k silnejšiemu verejnému UX bez toho, aby narušil súčasné rozhranie založené na príznakoch.---

## 1.1 Delivery Status

Plán je teraz z veľkej časti implementovaný v súčasnom stave úložiska.

Dokončené:

- Fáza 1: Riadený výber vstupného bodu
- Fáza 2: Sprievodca inštaláciou so sprievodcom
- Fáza 3: Visual Terminal Shell
- Fáza 4: Visual Service Hub
- Fáza 5: Uložené profily a opakovateľnosť
- Fáza 6: Kalenie, skúšky a dokumentácia---

## 2. Goals

- Zachovať aktuálne pracovné postupy expertného CLI
- Urobte vstupný bod bez argumentov bezpečný a zrozumiteľný pre nových používateľov
- Nahraďte tiché predvolené hodnoty v interaktívnych kontextoch riadeným výberom
- Podpora známych klientov AI a ľubovoľné vlastné inštalačné cesty
- Premeňte inštaláciu, vyhľadávanie a spustenie služby na koherentnú cestu používateľa
- Poskytnite vizuálne používateľské rozhranie terminálu, ktoré pôsobí ako produkt, nielen ako skript
- Udržujte inštalačný modul, katalóg a servisný modul na opakované použitie v používateľskom rozhraní---

## 3. Non-Goals

- Nahradenie aktuálneho CLI založeného na príznakoch
- Odstránenie antigravitácie ako podporovaného predvoleného cieľa
- Doručenie webového používateľského rozhrania ako primárneho spôsobu doručenia
- Refaktorovanie samotných protokolov API, MCP alebo A2A ako súčasť tejto práce UX
- Nahradenie tvorby `SKILL.md` administračným panelom podporovaným databázou---

## 4. Design Principles

### 4.1 Backward Compatibility First

Tieto príkazy musia naďalej fungovať presne tak ako dnes:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills nájdu figma --tool kurzor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interaktívna terminálová relácia bez argumentov: otvorená riadená skúsenosť
- Neinteraktívne vyvolanie bez argumentov: zachovať aktuálne predvolené správanie inštalácie
- Explicitné príkazy a príznaky vždy vyhrávajú nad odvodením používateľského rozhrania### 4.3 Reuse One Engine Across Modes

Nasledujúce by mali mať rovnakú vnútornú logiku:

- vlajkový prvý CLI
- riadený textový režim CLI
- vizuálne používateľské rozhranie terminálu

To znamená, že vrstva UX nesmie vlastniť obchodnú logiku. Mala by organizovať opakovane použiteľné akcie.### 4.4 Preview Before Write

Všetky riadené toky, ktoré spôsobujú zápisy, by mali zobrazovať:

- vyriešený cieľ
- vyriešená cesta
- vybrané zručnosti alebo balíky
- ekvivalentný príkaz CLI
- výzva na potvrdenie### 4.5 Visual Does Not Mean Implicit

Dokonca aj v bohatšom používateľskom rozhraní by mal systém stále explicitne uvádzať stav a akcie:

- kde prebieha inštalácia
- čo sa bude písať
- ktorú dopravu alebo prístav služba použije
- či je tok len na čítanie alebo s možnosťou lokálneho zápisu---

## 5. User Personas

### 5.1 Expert CLI User

Potreby:

- rýchle príkazy
- žiadne nútené výzvy
- stabilné vlajky
- skriptovateľnosť### 5.2 Guided Product User

Potreby:

- jasné voľby
- žiadny predpoklad, že je žiaduca antigravitácia
- podpora pre inštaláciu vlastnej cesty
- zrozumiteľný náhľad inštalácie
- viditeľný rozdiel medzi inštaláciou a behu servera### 5.3 Operator / Platform User

Potreby:

- schopnosť vizuálne spustiť MCP, API a A2A
- rozumné predvolené hodnoty
- voliteľné ladenie portov, transportu, perzistencie, režimu vykonávateľa, autorizácie a lokálneho režimu---

## 6. Target UX Model

Produkt by mal exponovať tri vrstvy:### 6.1 Expert Mode

Priame príkazy a príznaky.

Príklady:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Spustí sa, keď:

- používateľ spustí `npx omni-skills` v TTY bez argumentov
- používateľ spustí `npx omni-skills install` bez konkrétnych selektorov
- používateľ sa výslovne rozhodne pre režim so sprievodcom

Riadený postup inštalácie by mal prechádzať cez:

1. cieľový klient alebo vlastná cesta
2. typ inštalácie
3. výber zručnosti alebo zväzku
4. náhľad
5. potvrdenie
6. vykonanie
7. ďalšie kroky### 6.3 Visual Operations Hub

Spustené:

- `npx omni-skills ui`

Toto by sa malo stať „domovskou obrazovkou“ pre neodborných používateľov a operátorov.

Hlavné akcie:

- zručnosti inštalácie
- objavovať zručnosti
- spustiť MCP
- spustiť API
- štart A2A
- bež doktor
- vykonajte kontrolu dymu---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

výsledok:

- `npx omni-skills` v TTY už v tichosti nepreberá antigravitáciu
- používatelia sú vyzvaní, aby si vybrali klienta alebo vlastnú cestu

Požiadavky:

- zachovať predvolené správanie inštalácie, ktoré nie je TTY
- pridať volič cieľa
- podpora vlastného zachytávania cesty### Phase 2: Guided Install Wizard

výsledok:

- inštalácia sa stáva plne riadeným tokom

Požiadavky:

- výber režimu inštalácie:
  - plná knižnica
  - jedna zručnosť
  - jeden zväzok
  - vyhľadajte a nainštalujte
- ukážka inštalácie
- ekvivalentné vykresľovanie príkazov
- potvrdenie a vykonanie### Phase 3: Visual Terminal Shell

výsledok:

- súčasné základné textové používateľské rozhranie sa stáva značkovou terminálovou aplikáciou

Požiadavky:

- bohatšie rozloženie
- branding a logo projektu
- lepší stepper a karty
- klávesnicou ovládaná navigácia
- Reagovať implementáciu terminálu prostredníctvom atramentu### Phase 4: Visual Service Hub

výsledok:

- MCP, API a A2A sa dajú spustiť z vizuálneho používateľského rozhrania

Požiadavky:

- riadený tok MCP
- riadený tok API
- vedený prúd A2A
- viditeľný režim a ukážky konfigurácie### Phase 5: Saved Profiles and Repeatability

výsledok:

- bežné inštalačné alebo servisné predvoľby možno opätovne použiť

Požiadavky:

- zapamätať si nedávne ciele
- uložené predvoľby služieb
- posledné príkazy
- obľúbené zväzky alebo zručnosti### Phase 6: Hardening, Tests, and Documentation

výsledok:

- UX sa stáva udržiavaným verejným rozhraním, nie ad hoc pohodlím

Požiadavky:

- pokrytie dymom
- regresné testy
- aktualizácie dokumentov
- vedenie operátora
- kontrola kompatibility balíka---

## 8. Proposed Command Model

### Stable Commands

- „všezručnosti“.
- „inštalácia všemožných zručností“.
- „nájsť všemožné zručnosti“.
- „ui všemožných zručností“.
- `mni-skills mcp`
- `všemožné zručnosti api`
- „všezručnosti a2a“.
- „lekár všemožných zručností“.
- „fajčiť všemožné zručnosti“.### Recommended Behavior

| Vyvolanie | Správanie |
|:-----------|:---------|
| „Všeobecné zručnosti“ v TTY, žiadne argumenty | Vstup so sprievodcom inštalácie |
| „Všeobecné zručnosti“ v non-TTY, žiadne argumenty | Aktuálna predvolená inštalácia Antigravity |
| `omni-skills install` v TTY, žiadne selektory | Sprievodca inštaláciou |
| `inštalácia omni-skills --riadená` | Inštalačný tok s núteným vedením |
| `omni-skills ui` | Otvorte centrum vizuálnych operácií |
| explicitné vlajky | Vykonajte priamo bez odbočenia do riadeného toku |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Možnosti:

- Claude Code
- Kurzor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitácia
- OpenCode
- Vlastná cesta

výstup:

- vybratá známa cieľová ALEBO vlastná cesta súborového systému### Step 2: Choose Install Type

Možnosti:

- plná knižnica
- jedna publikovaná zručnosť
- jeden zväzok
- vyhľadajte a nainštalujte

výstup:

- inštalovať rozsah### Step 3: Resolve Selection

V závislosti od typu inštalácie:

- úplná knižnica: žiadny ďalší selektor
- zručnosť: uveďte alebo vyberte zručnosť
- zväzok: zoznam alebo výber zväzku
- vyhľadávanie: výzva na zadanie dopytu, zobrazenie zodpovedajúcich zručností a balíkov### Step 4: Preview

Displej:

- vybraný cieľ
- vyriešená cesta
- vybraná zručnosť alebo zväzok
- ekvivalentný príkaz CLI
- či je prietok selektívny alebo úplná inštalácia### Step 5: Confirm

Používateľ potvrdzuje:

- áno → vykonať
- nie → prerušiť alebo vrátiť sa späť### Step 6: Result

Displej:

- úspech/neúspech
- cieľová cesta
- návrh ďalšieho kroku---

## 10. Information Architecture for the Visual Operations Hub

Operačné centrum by malo odhaľovať:### 10.1 Install

- riadený tok inštalácie
- vyhľadávanie zručností alebo zväzkov
- vlastná cesta### 10.2 Discover

- vyhľadávanie v katalógu
- filtre
- náhľad metadát
- nainštalovať odovzdanie### 10.3 MCP

Možnosti:

- doprava: stdio, stream, sse
- zapnutie/vypnutie lokálneho režimu
- hostiteľ
- prístav### 10.4 API

Možnosti:

- hostiteľ
- prístav
- voliteľné overenie
- voliteľný limit sadzby### 10.5 A2A

Možnosti:

- hostiteľ
- prístav
- typ úložiska: pamäť, json, sqlite
- vykonávateľ: inline, proces
- možnosti prenájmu, keď je povolená fronta sqlite### 10.6 Diagnostics

- lekár
- fajčiť---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Aktuálne kombinácie `tools/bin/cli.js`:

- analýza príkazov
- prezentácia
- interaktívne výzvy
- akčná orchestrácia
- servisné spustenie

Nová štruktúra by mala presunúť opakovane použiteľnú logiku do:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` by mal zostať backendom s možnosťou zápisu.

Riadené používateľské rozhranie by malo namiesto duplikovania inštalačnej logiky volať existujúci backend inštalátora.### 11.3 Keep Find/Search Reusable

Sprievodca inštaláciou so sprievodcom by mal znova použiť rovnakú logiku vyhľadávania v jadre katalógu a CLI:

- "nájsť".
- inštalovať ukážky
- rozlíšenie zväzku### 11.4 Prepare for Ink Without Forcing It Early

Prvá dodávka môže zostať v textovom režime.

Ale architektúra by si mala zachovať čistý šev, aby sa tok textu dal neskôr vykresliť pomocou atramentu.---

## 12. Risks

### 12.1 Breaking Existing Automation

zmiernenie:

- v TTY sa automaticky otvára iba riadené používateľské rozhranie
- zachovať aktuálne predvolené nastavenie v non-TTY
- zachovať explicitné toky vlajok### 12.2 Letting UI Own Business Logic

zmiernenie:

- presunúť orchestráciu na opätovne použiteľné akčné moduly
- Ponechajte logiku zavádzania inštalátora a služby pod vrstvou používateľského rozhrania### 12.3 Ink Migration Too Early

zmiernenie:

- first ship the guided flow in current Node terminal stack
- then migrate to Ink once flow semantics are stable### 12.4 Incomplete Service UX

zmiernenie:

- prvý sprievodca inštaláciou lode
- potom sa spustí služba riadená vrstvami---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` v TTY sa už nenainštaluje okamžite
- užívateľ si môže vybrať cieľového klienta alebo vlastnú cestu
- non-TTY no-arg vyvolanie stále funguje ako predtým### Phase 2

- riadená inštalácia podporuje úplnú knižnicu, zručnosti, balík a vyhľadávanie a potom inštaláciu
- náhľad sa vždy zobrazí pred zápisom
- zobrazí sa ekvivalent príkazu### Phase 3

- existuje značkové používateľské rozhranie terminálu
- Používateľské rozhranie je viac vizuálne štruktúrované ako jednoduché ponuky
- Navigácia je vhodná pre klávesnicu### Phase 4

- používatelia môžu spustiť MCP, API a A2A z vizuálneho centra
- hlavné možnosti runtime sú konfigurovateľné v riadenej forme### Phase 5

- nedávne alebo uložené predvoľby sú opätovne použiteľné
- opakované toky vyžadujú menej výziev### Phase 6

- pokrytie dymom odráža nové vstupné body UX
- dokumenty popisujú riadený režim a správanie sprievodcu službou---

## 14. Execution Order

Tento plán sa musí implementovať v tomto poradí:

1. Riadený výber vstupného bodu
2. Sprievodca inštaláciou so sprievodcom
3. Vizuálny kryt terminálu
4. Centrum vizuálnych služieb
5. Uložené profily a opakovateľnosť
6. Kalenie, skúšky a leštenie dokumentov

Implementačná práca by si mala prečítať príslušný súbor úloh pred spustením každej úlohy, aby práca CLI zostala v súlade s plánom a nehýbala sa.