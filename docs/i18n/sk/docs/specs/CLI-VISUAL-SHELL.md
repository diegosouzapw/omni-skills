# 🖥️ CLI Visual Shell Specification (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Behaviorálna zmluva pre používateľské rozhranie terminálu založeného na atramente odhalené pomocou `omni-skills ui`.**---

## 1. Scope

Vizuálny plášť je navádzaný povrch produktu na vrchu existujúceho CLI a inštalačného motora.

Nenahrádza:

- expertné používanie CLI založené na príznakoch
- `tools/bin/install.js`
- postup inštalácie so sprievodcom
- Správanie API, MCP alebo A2A za behu

Definuje:

- správanie `omni-skills ui`
- záložný kontrakt pre `omni-skills ui --text`
- lokálny stav a prednastavená perzistencia
- ukážky spustenia služby so sprievodcom
- opakovateľnosť pre nedávne inštalácie a spustenia služieb---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` spúšťa vizuálny shell založený na atramente.

Vizuálny shell je primárny neodborný terminálový zážitok pre:

- inštalovať toky
- objavenie a inštalácia podľa prvého katalógu
- Spustenie MCP
- Spustenie API
- Spustenie A2A
- lekár a fajčenie odovzdanie### 2.2 Text Fallback

`omni-skills ui --text` spustí záložné rozhranie založené na readline.

Toto zostane užitočné, keď:

- terminál nedokáže správne vykresliť bohatší shell
- správanie v surovom režime je obmedzené
- uprednostňuje sa minimálna spätná väzba textu### 2.3 Handoff Rule

Vizuálny shell priamo neimplementuje runtime služby ani inštalačné zápisy.

Po náhľade a potvrdení sa čisto ukončí a odovzdá spustenie existujúcemu vstupnému bodu CLI s ekvivalentnými argumentmi a premennými prostredia.---

## 3. Home Screen Contract

Domovská obrazovka musí odhaľovať:

- zručnosti inštalácie
- nájsť a nainštalovať
- opakovať nedávne inštalácie, ak sú prítomné
- spustiť uložené predvoľby inštalácie, ak sú k dispozícii
- spustiť službu
- opakovať nedávne služby, ak sú prítomné
- spustiť uložené predvoľby služby, ak sú k dispozícii
- lekár
- fajčiť
- výstup

Domovská obrazovka by sa mala tiež zobraziť:

- aktuálna dostupnosť zverejneného balíka
- miestne stavové počty pre posledné, prednastavené a obľúbené položky---

## 4. Install Flow Contract

Inštalačný postup vizuálneho prostredia musí podporovať:

- známy výber cieľového klienta
- vlastný výber cesty
- úplná inštalácia knižnice
- inštalácia s jednou zručnosťou
- inštalácia jedného balíka
- vyhľadajte a potom nainštalujte
- náhľad pred zápisom
- prednastavené ukladanie
- obľúbená zručnosť alebo prepínanie zväzkov

Ukážka musí zobrazovať:

- vyriešený cieľový štítok
- vyriešená cesta
- inštalovať rozsah
- zvolená zručnosť alebo balík, ak je to vhodné
- ekvivalentný príkaz CLI---

## 5. Service Flow Contract

Vizuálny shell musí viesť spustenie pre:### 5.1 MCP

- transport: `stdio`, `stream`, `sse`
- režim: „iba na čítanie“ alebo „miestne“.
- konfigurácia hostiteľa/portu pre sieťové prenosy
- explicitný náhľad príkazu### 5.2 API

- hostiteľ
- prístav
- základný alebo kalený profil
- tvrdený nosič alebo overenie kľúča API
- kalené rýchlostné parametre
- povolenie protokolu auditu
- explicitný náhľad príkazu### 5.3 A2A

- hostiteľ
- prístav
- typ obchodu: `memory`, `json`, `sqlite`
- uložiť cestu pre trvalé režimy
- vykonávateľ: ,inline‘, ,proces‘
- režim SQLite s podporou frontu
- interval výziev a trvanie prenájmu pre režim zdieľaného prenájmu
- explicitný náhľad príkazu---

## 6. Local State Contract

Vizuálny shell pretrváva iba lokálny stav v:```text
~/.omni-skills/state/ui-state.json
```

Štát v súčasnosti zahŕňa:

- nedávne inštalácie
- nedávne spustenie služby
- pomenované predvoľby inštalácie
- predvoľby pomenovaných služieb
- obľúbené zručnosti
- obľúbené zväzky

Plášť musí podporovať:

- opakované prehrávanie nedávnych inštalácií
- prehrávanie nedávnych spustení služby
- opätovné použitie pomenovaných predvolieb inštalácie
- opätovné použitie predvolieb pomenovaných služieb---

## 7. Compatibility Contract

Vizuálny obal je aditívny.

Tieto toky musia zostať platné a stabilné:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills install --guided`
- `npx omni-skills nájdu figma --tool kurzor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

Vizuálny shell sa nikdy nesmie nútiť do explicitných ciest expertných príkazov.---

## 8. Safety Contract

Vizuálny shell by mal dávať stav a zápisy explicitné.

Musí:

- ukážka inštalácie pred odovzdaním zápisu
- ukážte príkazy na spustenie služby pred vykonaním
- ak je to praktické, uchovávajte tajný materiál mimo náhľadov príkazov s čistým textom
- pretrvávajúci stav iba lokálne
- zachovať neinteraktívne správanie CLI mimo vizuálneho prostredia