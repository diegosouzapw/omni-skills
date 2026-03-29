# 🖥️ CLI Visual Shell Specification (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Beteendekontrakt för det bläckbaserade terminalgränssnittet exponerat av "omni-skills ui".**---

## 1. Scope

Det visuella skalet är en styrd produktyta ovanpå den befintliga CLI- och installationsmotorn.

Den ersätter inte:

- expertflaggabaserad CLI-användning
- `tools/bin/install.js`
- det guidade textinstallationsflödet
- API-, MCP- eller A2A-körningsbeteende

Den definierar:

- beteendet hos `omni-skills ui`
- reservkontraktet för `omni-skills ui --text`
- lokal stat och förinställd uthållighet
- guidade förhandsvisningar av tjänstlansering
- Repeterbarhet för senaste installationer och servicekörningar---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` lanserar det bläckbaserade visuella skalet.

Det visuella skalet är den primära terminalupplevelsen som inte är expert för:

- installera flöden
- katalog-första upptäckt och installation
- MCP-start
- API-start
- A2A uppstart
- läkare och rök handoff### 2.2 Text Fallback

`omni-skills ui --text` startar det readline-baserade reservgränssnittet.

Detta är fortfarande användbart när:

- en terminal kan inte göra det rikare skalet korrekt
- Raw-mode beteende är begränsat
- en minimal återgång av text är att föredra### 2.3 Handoff Rule

Det visuella skalet omimplementerar inte tjänstens körtider eller installationsskrivningar direkt.

Efter förhandsgranskning och bekräftelse avslutas den rent och överlämnar körningen till den befintliga CLI-ingångspunkten med motsvarande argument och miljövariabler.---

## 3. Home Screen Contract

Hemskärmen måste visa:

- installera färdigheter
- hitta och installera
- Upprepa de senaste installationerna när de finns
- kör sparade installationsförinställningar när de finns
- starta en tjänst
- upprepa de senaste tjänsterna när de är närvarande
- kör sparade tjänstförinställningar när de finns
- läkare
- rök
- utgång

Hemskärmen bör också dyka upp:

- aktuellt publicerat paket tillgängligt
- lokal stat räknas för senaste, förinställningar och favoriter---

## 4. Install Flow Contract

Det visuella skalinstallationsflödet måste stödja:

- Val av kända klientmål
- anpassad vägval
- komplett biblioteksinstallation
- en färdig installation
- installation i ett paket
- sök-sedan-installera
- förhandsgranska innan du skriver
- förinställd lagring
- favoritfärdighet eller buntväxling

Förhandsgranskningen måste visa:

- löst måletikett
- löst väg
- installera omfattning
- vald färdighet eller paket när det är tillämpligt
- motsvarande CLI-kommando---

## 5. Service Flow Contract

Det visuella skalet måste vägleda start för:### 5.1 MCP

- transport: `stdio`, `stream`, `sse`
- läge: "skrivskyddad" eller "lokal".
- Värd/portkonfiguration för nätverkstransporter
- explicit kommandoförhandsgranskning### 5.2 API

- värd
- hamn
- grundprofil eller härdad profil
- härdad bärare eller API-nyckelauth
- härdade hastighetsgränsparametrar
- Aktivering av revisionslogg
- explicit kommandoförhandsgranskning### 5.3 A2A

- värd
- hamn
- butikstyp: `minne`, `json`, `sqlite`
- lagra sökväg för hållbara lägen
- executor: `inline`, `process`
- köaktiverat SQLite-läge
- undersökningsintervall och hyresperiod för delat hyresläge
- explicit kommandoförhandsgranskning---

## 6. Local State Contract

Det visuella skalet kvarstår endast lokalt i:```text
~/.omni-skills/state/ui-state.json
```

Staten inkluderar för närvarande:

- senaste installationer
- nyligen lanserade tjänster
- namngivna installationsförinställningar
- namngivna tjänstförinställningar
- favoritkunskaper
- favoritbuntar

Skalet måste stödja:

- spela upp senaste installationer
- återuppspelning av senaste tjänstelanseringar
- återanvändning av namngivna installationsförinställningar
- återanvändning av namngivna tjänstförinställningar---

## 7. Compatibility Contract

Det visuella skalet är additivt.

Dessa flöden måste förbli giltiga och stabila:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills install --guided`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

Det visuella skalet får aldrig tvinga sig in i explicita expertkommandovägar.---

## 8. Safety Contract

Det visuella skalet ska göra tillstånd och skriver explicit.

Det måste:

- Förhandsgranska installationer före skrivning
- Förhandsgranska tjänstestartkommandon före exekvering
- Håll hemligt material borta från förhandsvisningar av klartextkommandon där det är praktiskt
- kvarstår endast lokalt
- bevara icke-interaktivt CLI-beteende utanför det visuella skalet