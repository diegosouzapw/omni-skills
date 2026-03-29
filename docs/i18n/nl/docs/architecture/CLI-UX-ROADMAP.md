# 🧭 CLI UX Roadmap (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**De productroutekaart voor het evolueren van Omni Skills van een flag-first-installatieprogramma naar een begeleide terminalervaring voor zowel deskundige als niet-deskundige gebruikers.**
> Toepassingsgebied: npm-pakket, CLI-installatie-ervaring, terminal-UI, service-lanceringsstromen en visuele onboarding.---

## 1. Problem Statement

De huidige runtime-basis is sterk, maar de instapervaring is nog steeds geoptimaliseerd voor gebruikers die al begrijpen:

- op welke klant ze zich willen richten
- welke installatiekiezer ze willen gebruiken
- hoe doelen te vertalen in `--skill`, `--bundle` of `find`
- wanneer ze alleen een CLI-installatie nodig hebben in plaats van MCP-, API- of A2A-services

Vandaag:

- `npx omni-skills` is standaard ingesteld op Antigravity
- dit is technisch geldig en achterwaarts compatibel
- maar het is niet ideaal voor nieuwe gebruikers of minder technische operators

De CLI heeft al een interactieve basismodus, maar ligt nog steeds dichter bij een hulpprogramma voor ontwikkelaars dan bij een begeleid productoppervlak.

Deze roadmap definieert het pad naar een sterkere publieke UX zonder de huidige, op vlaggen gebaseerde interface te doorbreken.---

## 1.1 Delivery Status

De roadmap is nu grotendeels geïmplementeerd in de huidige repository-status.

Voltooid:

- Fase 1: Begeleide selectie van instappunten
- Fase 2: Begeleide installatiewizard
- Fase 3: Visuele terminalshell
- Fase 4: Visuele servicehub
- Fase 5: Opgeslagen profielen en herhaalbaarheid
- Fase 6: verharding, tests en documentatie---

## 2. Goals

- Behoud de huidige deskundige CLI-workflows
- Maak het toegangspunt zonder ruzie veilig en begrijpelijk voor nieuwe gebruikers
- Vervang stille standaardwaarden in interactieve contexten door begeleide selectie
- Ondersteuning van bekende AI-clients en willekeurige aangepaste installatiepaden
- Verander installatie, detectie en service-boot in een samenhangend gebruikerstraject
- Zorg voor een visuele terminal-UI die aanvoelt als een product, niet alleen als een script
- Houd de installatie-engine, catalogus en serviceruntime herbruikbaar onder de gebruikersinterface---

## 3. Non-Goals

- Vervanging van de huidige op vlaggen gebaseerde CLI
- Antizwaartekracht verwijderen als ondersteund standaarddoel
- Verzending van een webinterface als primaire leveringsmodus
- Refactoring van API-, MCP- of A2A-protocollen zelf als onderdeel van dit UX-werk
- Vervanging van `SKILL.md`-auteuring door een door een database ondersteund beheerderspaneel---

## 4. Design Principles

### 4.1 Backward Compatibility First

Deze opdrachten moeten precies zo blijven werken als ze nu doen:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundel devops`
- `npx omni-skills vind figma --tool cursor --install --yes`
- `npx omni-skills mcp-stream --local`
- `npx omni-skills api --poort 3333`
- `npx omni-skills a2a --poort 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interactieve terminalsessie zonder argumenten: open begeleide ervaring
- Niet-interactieve aanroep zonder argumenten: behoud het huidige standaardinstallatiegedrag
- Expliciete opdrachten en vlaggen winnen altijd van UI-gevolgtrekking### 4.3 Reuse One Engine Across Modes

Het volgende zou dezelfde interne logica moeten delen:

- vlag-eerste CLI
- begeleide tekstmodus CLI
- visuele terminal-UI

Dat betekent dat de UX-laag geen bedrijfslogica mag bezitten. Het moet herbruikbare acties organiseren.### 4.4 Preview Before Write

Alle begeleide stromen die schrijfbewerkingen veroorzaken, moeten het volgende weergeven:

- opgelost doel
- opgelost pad
- geselecteerde vaardigheden of bundels
- gelijkwaardige CLI-opdracht
- bevestigingsvraag### 4.5 Visual Does Not Mean Implicit

Zelfs in de rijkere gebruikersinterface moet het systeem de status en acties nog steeds expliciet maken:

- waar de installatie naartoe gaat
- wat er zal worden geschreven
- welk transport of welke haven een dienst zal gebruiken
- of een stroom alleen-lezen of lokaal schrijven mogelijk is---

## 5. User Personas

### 5.1 Expert CLI User

Behoeften:

- snelle opdrachten
- geen geforceerde aanwijzingen
- stabiele vlaggen
- scriptbaarheid### 5.2 Guided Product User

Behoeften:

- duidelijke keuzes
- geen veronderstelling dat anti-zwaartekracht gewenst is
- ondersteuning voor aangepaste padinstallaties
- begrijpelijk installatievoorbeeld
- zichtbaar onderscheid tussen installatie- en serverruntime-acties### 5.3 Operator / Platform User

Behoeften:

- mogelijkheid om MCP, API en A2A visueel te starten
- gezonde standaardwaarden
- optionele afstemming van poorten, transport, persistentie, uitvoerdermodus, auth en lokale modus---

## 6. Target UX Model

Het product moet drie lagen blootleggen:### 6.1 Expert Mode

Directe opdrachten en vlaggen.

Voorbeelden:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp-stream --local`
- `npx omni-skills a2a --poort 3335`### 6.2 Guided Install Mode

Geactiveerd wanneer:

- de gebruiker voert `npx omni-skills` uit in een TTY zonder argumenten
- de gebruiker voert `npx omni-skills install` uit zonder concrete selectors
- de gebruiker kiest expliciet voor de begeleide modus

De begeleide installatiestroom moet het volgende doorlopen:

1. doelklant of aangepast pad
2. installatietype
3. selectie van vaardigheden of bundels
4. voorbeeld
5. bevestiging
6. uitvoering
7. volgende stappen### 6.3 Visual Operations Hub

Geactiveerd door:

- `npx omni-vaardigheden ui`

Dit zou het “startscherm” moeten worden voor niet-ervaren gebruikers en operators.

Kernacties:

- vaardigheden installeren
- vaardigheden ontdekken
- MCP starten
- API starten
- start A2A
- dokter rennen
- voer rookcontroles uit---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Resultaat:

- `npx omni-skills` in TTY gaat niet langer stilletjes uit van anti-zwaartekracht
- gebruikers worden gevraagd een client- of aangepast pad te kiezen

Vereisten:

- behoud van niet-TTY standaard installatiegedrag
- doelkiezer toevoegen
- ondersteuning voor het vastleggen van aangepaste paden### Phase 2: Guided Install Wizard

Resultaat:

- installatie wordt een volledig begeleide stroom

Vereisten:

- selectie van installatiemodus:
  - volledige bibliotheek
  - één vaardigheid
  - één bundel
  - zoeken en dan installeren
- installatievoorbeeld
- gelijkwaardige opdrachtweergave
- bevestiging en uitvoering### Phase 3: Visual Terminal Shell

Resultaat:

- de huidige basistekst-UI wordt een terminalapplicatie met een merknaam

Vereisten:

- rijkere lay-out
- projectbranding en logo
- betere stepper en kaarten
- toetsenbordgestuurde navigatie
- Reageer terminalimplementatie via Ink### Phase 4: Visual Service Hub

Resultaat:

- MCP, API en A2A kunnen worden gestart vanuit de visuele gebruikersinterface

Vereisten:

- begeleide MCP-stroom
- begeleide API-stroom
- begeleide A2A-stroom
- zichtbare modus en configuratievoorbeelden### Phase 5: Saved Profiles and Repeatability

Resultaat:

- Algemene installatie- of servicevoorinstellingen kunnen opnieuw worden gebruikt

Vereisten:

- onthoud recente doelen
- opgeslagen servicevoorinstellingen
- recente opdrachten
- favoriete bundels of vaardigheden### Phase 6: Hardening, Tests, and Documentation

Resultaat:

- de UX wordt een onderhouden openbare interface, en geen ad-hocgemak

Vereisten:

- rookdekking
- regressietesten
- documentupdates
- Begeleiding van de operator
- beoordeling van pakketcompatibiliteit---

## 8. Proposed Command Model

### Stable Commands

- `omni-vaardigheden`
- `omni-vaardigheden installeren`
- `omni-vaardigheden vinden`
- `omni-vaardigheden ui`
- `omni-vaardigheden mcp`
- `omni-vaardigheden-api`
- `omnivaardigheden a2a`
- `omni-vaardighedendokter`
- `omni-vaardigheden roken`### Recommended Behavior

| Aanroep | Gedrag |
|:-----------|:---------|
| `omni-vaardigheden` ​​in TTY, geen argumenten | Begeleide installatie-invoer |
| `omni-skills` in niet-TTY, geen argumenten | Huidige standaardinstallatie van Antigravity |
| `omni-skills install` in TTY, geen selectors | Begeleide installatiewizard |
| `omni-skills installeren --begeleid` | Geforceerd geleide installatiestroom |
| `omni-vaardigheden ui` | Open de hub voor visuele bewerkingen |
| expliciete vlaggen | Direct uitvoeren zonder om te lopen in de begeleide flow |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Opties:

- Claude Code
- Cursor
- Gemini CLI
- Codex CLI
- Kiro
- Antizwaartekracht
-OpenCode
- Aangepast pad

Uitgang:

- geselecteerd bekend doel OF aangepast bestandssysteempad### Step 2: Choose Install Type

Opties:

- volledige bibliotheek
- één gepubliceerde vaardigheid
- één bundel
- zoeken en dan installeren

Uitgang:

- bereik installeren### Step 3: Resolve Selection

Afhankelijk van het installatietype:

- volledige bibliotheek: geen extra selector
- vaardigheid: noem of kies een vaardigheid
- bundel: vermeld of kies een bundel
- zoeken: vraag om zoekopdracht, toon bijpassende vaardigheden en bundels### Step 4: Preview

Weergave:

- geselecteerd doel
- opgelost pad
- geselecteerde vaardigheid of bundel
- gelijkwaardige CLI-opdracht
- of de stroom selectief of volledig geïnstalleerd is### Step 5: Confirm

Gebruiker bevestigt:

- ja → uitvoeren
- nee → afbreken of teruggaan### Step 6: Result

Weergave:

- succes/mislukking
- bestemmingspad
- suggestie voor de volgende stap---

## 10. Information Architecture for the Visual Operations Hub

De Operations Hub moet het volgende blootleggen:### 10.1 Install

- begeleide installatiestroom
- Zoeken naar vaardigheden of bundels
- aangepast pad### 10.2 Discover

- Catalogus zoeken
- filters
- voorbeeldmetagegevens
- overdracht installeren### 10.3 MCP

Opties:

- transport: stdio, stream, sse
- lokale modus aan/uit
- gastheer
- poort### 10.4 API

Opties:

- gastheer
- poort
- optionele autorisatie
- optionele tarieflimiet### 10.5 A2A

Opties:

- gastheer
- poort
- winkeltype: geheugen, json, sqlite
- uitvoerder: inline, proces
- lease-opties wanneer sqlite-wachtrij is ingeschakeld### 10.6 Diagnostics

- dokter
- rook---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

De huidige `tools/bin/cli.js`-mixen:

- commando parseren
- presentatie
- interactieve aanwijzingen
- actieorkestratie
- servicestart

De nieuwe structuur moet herbruikbare logica verplaatsen naar:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` moet de schrijfbare backend blijven.

De begeleide gebruikersinterface moet de bestaande backend van het installatieprogramma aanroepen in plaats van de installatielogica te dupliceren.### 11.3 Keep Find/Search Reusable

De begeleide installatiewizard moet dezelfde cataloguskern en CLI-zoeklogica hergebruiken die al wordt gebruikt:

- `vinden`
- installeer voorbeelden
- bundelresolutie### 11.4 Prepare for Ink Without Forcing It Early

De eerste bezorging kan in tekstmodus blijven.

Maar de architectuur moet een duidelijke naad behouden, zodat de tekststroom later via inkt kan worden weergegeven.---

## 12. Risks

### 12.1 Breaking Existing Automation

Mitigatie:

- open de begeleide gebruikersinterface alleen automatisch in TTY
- behoud huidige standaard in niet-TTY
- expliciete vlagstromen behouden### 12.2 Letting UI Own Business Logic

Mitigatie:

- verplaats de orkestratie naar herbruikbare actiemodules
- houd de opstartlogica van het installatieprogramma en de service onder de UI-laag### 12.3 Ink Migration Too Early

Mitigatie:

- verzend eerst de geleide stroom in de huidige knooppuntterminalstapel
- migreer vervolgens naar Ink zodra de stroomsemantiek stabiel is### 12.4 Incomplete Service UX

Mitigatie:

- verzend eerst de installatiewizard
- vervolgens laaggeleide servicelancering---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` in TTY wordt niet langer onmiddellijk geïnstalleerd
- gebruiker kan doelclient of aangepast pad kiezen
- niet-TTY no-arg-aanroep werkt nog steeds zoals voorheen### Phase 2

- begeleide installatie ondersteunt volledige bibliotheek, vaardigheid, bundel en zoeken-en-installeren
- voorbeeld wordt altijd getoond vóór schrijven
- opdrachtequivalent wordt weergegeven### Phase 3

- Er bestaat een terminal-gebruikersinterface met een merknaam
- de gebruikersinterface is visueel beter gestructureerd dan gewone leesregelmenu's
- navigatie is toetsenbordvriendelijk### Phase 4

- gebruikers kunnen MCP, API en A2A starten vanuit de visuele hub
- De belangrijkste runtime-opties zijn in begeleide vorm configureerbaar### Phase 5

- recente of opgeslagen voorkeuren zijn herbruikbaar
- herhaalde stromen vereisen minder aanwijzingen### Phase 6

- rookdekking weerspiegelt de nieuwe UX-ingangspunten
- Documenten beschrijven de begeleide modus en het gedrag van de servicewizard---

## 14. Execution Order

Deze routekaart moet in deze volgorde worden geïmplementeerd:

1. Begeleide selectie van ingangspunten
2. Begeleide installatiewizard
3. Visuele terminalbehuizing
4. Visuele servicehub
5. Opgeslagen profielen en herhaalbaarheid
6. Uitharden, testen en polijsten

Het implementatiewerk moet het relevante taakbestand lezen voordat met elke taak wordt begonnen, zodat het CLI-werk op één lijn blijft met het plan en niet afdwaalt.