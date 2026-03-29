# 🧭 CLI UX Roadmap (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Produktens färdplan för att utveckla Omni Skills från en flagga-först installatör till en guidad terminalupplevelse för både expert- och icke-expertanvändare.**
> Omfattning: npm-paket, CLI-installationsupplevelse, terminalgränssnitt, tjänstlanseringsflöden och visuell onboarding.---

## 1. Problem Statement

Den nuvarande runtime-grunden är stark, men inträdesupplevelsen är fortfarande optimerad för användare som redan förstår:

- vilken kund de vill rikta sig till
- vilken installationsväljare de vill använda
- hur man översätter mål till `--skill`, `--bundle` eller `hitta`
- när de behöver CLI-installation kontra MCP, API eller A2A-tjänster

Idag:

- `npx omni-skills` har som standard Antigravity
- detta är tekniskt giltigt och bakåtkompatibelt
- men det är inte idealiskt för förstagångsanvändare eller mindre tekniska operatörer

CLI har redan ett grundläggande interaktivt läge, men det är fortfarande närmare ett utvecklarverktyg än en guidad produktyta.

Denna färdplan definierar vägen till en starkare offentlig UX utan att bryta det nuvarande flaggbaserade gränssnittet.---

## 1.1 Delivery Status

Färdkartan är nu till stor del implementerad i nuvarande förvarsläge.

Slutfört:

- Fas 1: Guidad val av ingångspunkt
- Fas 2: Guided installationsguide
- Fas 3: Visual Terminal Shell
- Fas 4: Visual Service Hub
- Fas 5: Sparade profiler och repeterbarhet
- Fas 6: Härdning, tester och dokumentation---

## 2. Goals

- Bevara nuvarande expert-CLI-arbetsflöden
- Gör ingångspunkten utan argument säker och begriplig för förstagångsanvändare
- Ersätt tysta standardinställningar i interaktiva sammanhang med guidat urval
- Stöd kända AI-klienter och godtyckliga anpassade installationsvägar
- Förvandla installation, upptäckt och servicestart till en sammanhängande användarresa
- Ge ett visuellt terminalgränssnitt som känns som en produkt, inte bara ett skript
- Håll installationsmotorn, katalogen och tjänstens körtid återanvändbar under användargränssnittet---

## 3. Non-Goals

- Ersätter den nuvarande flaggbaserade CLI
- Ta bort Antigravity som ett standardmål som stöds
- Skicka ett webbgränssnitt som det primära leveransläget
- Refaktorering av själva API-, MCP- eller A2A-protokollen som en del av detta UX-arbete
- Ersätter 'SKILL.md'-författarskap med en databasstödd adminpanel---

## 4. Design Principles

### 4.1 Backward Compatibility First

Dessa kommandon måste fortsätta att fungera precis som de gör idag:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interaktiv terminalsession utan argument: öppen guidad upplevelse
- Icke-interaktiv anrop utan argument: bevara nuvarande installationsstandardbeteende
- Explicita kommandon och flaggor vinner alltid över UI slutledning### 4.3 Reuse One Engine Across Modes

Följande bör dela samma interna logik:

- flagga-först CLI
- guidad text-mode CLI
- visuell terminal UI

Det betyder att UX-lagret inte får äga affärslogik. Det bör orkestrera återanvändbara åtgärder.### 4.4 Preview Before Write

Alla guidade flöden som orsakar skrivningar bör visa:

- löst mål
- löst väg
- utvalda färdigheter eller paket
- motsvarande CLI-kommando
- bekräftelsemeddelande### 4.5 Visual Does Not Mean Implicit

Även i det rikare användargränssnittet bör systemet fortfarande göra tillstånd och åtgärder explicit:

- vart installationen går
- vad kommer att skrivas
- vilken transport eller hamn en tjänst kommer att använda
- om ett flöde är skrivskyddat eller lokalt skrivbart---

## 5. User Personas

### 5.1 Expert CLI User

Behöver:

- snabba kommandon
- inga påtvingade uppmaningar
- stabila flaggor
- skriptbarhet### 5.2 Guided Product User

Behöver:

- tydliga val
- inget antagande om att antigravitation önskas
- stöd för anpassade sökvägsinstallationer
- begriplig installationsförhandsvisning
- Synlig skillnad mellan installations- och serverkörningsåtgärder### 5.3 Operator / Platform User

Behöver:

- Möjlighet att starta MCP, API och A2A visuellt
- förnuftiga standardinställningar
- valfri inställning av portar, transport, persistens, exekveringsläge, autentisering och lokalt läge---

## 6. Target UX Model

Produkten ska exponera tre lager:### 6.1 Expert Mode

Direktkommandon och flaggor.

Exempel:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Utlöst när:

- användaren kör `npx omni-skills` i en TTY utan args
- användaren kör `npx omni-skills install` utan konkreta väljare
- användaren väljer uttryckligen till guidat läge

Det guidade installationsflödet bör gå igenom:

1. målklient eller anpassad sökväg
2. installationstyp
3. urval av färdigheter eller paket
4. förhandsvisning
5. bekräftelse
6. utförande
7. nästa steg### 6.3 Visual Operations Hub

Utlöst av:

- `npx omni-skills ui`

Detta bör bli "hemskärmen" för icke-experta användare och operatörer.

Kärnåtgärder:

- installera färdigheter
- upptäcka färdigheter
- starta MCP
- starta API
- starta A2A
- kör doktor
- köra rökkontroller---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Resultat:

- `npx omni-skills` i TTY utgår inte längre tyst från Antigravity
- användare uppmanas att välja en klient eller anpassad sökväg

Krav:

- bevara icke-TTY standardinstallationsbeteende
- lägg till målväljare
- Stöd anpassad vägfångst### Phase 2: Guided Install Wizard

Resultat:

- installationen blir ett fullt styrt flöde

Krav:

- val av installationsläge:
  - fullt bibliotek
  - en färdighet
  - en bunt
  - sök sedan installera
- installera förhandsgranskning
- motsvarande kommandoåtergivning
- bekräftelse och utförande### Phase 3: Visual Terminal Shell

Resultat:

- det nuvarande användargränssnittet för grundläggande text blir en terminalapplikation

Krav:

- rikare layout
- projektvarumärke och logotyp
- bättre stepper och kort
- tangentbordsstyrd navigering
- Reagera terminalimplementering via Ink### Phase 4: Visual Service Hub

Resultat:

- MCP, API och A2A kan startas från det visuella användargränssnittet

Krav:

- guidad MCP-flöde
- guidad API-flöde
- styrt A2A-flöde
- förhandsvisningar av synligt läge och konfiguration### Phase 5: Saved Profiles and Repeatability

Resultat:

- vanliga installations- eller serviceförinställningar kan återanvändas

Krav:

- kom ihåg de senaste målen
- sparade tjänsteförinställningar
- senaste kommandon
- favoritpaket eller färdigheter### Phase 6: Hardening, Tests, and Documentation

Resultat:

- UX blir ett underhållet offentligt gränssnitt, inte en ad hoc-bekvämlighet

Krav:

- röktäckning
- regressionstest
- dokumentuppdateringar
- operatörsvägledning
- granskning av paketkompatibilitet---

## 8. Proposed Command Model

### Stable Commands

- `allmänna färdigheter`
- `omni-skills installation`
- `finna alla färdigheter`
- `omni-skills ui`
- `omni-skills mcp`
- `omni-skills api`
- `omni-skills a2a`
- `Allmänsklig läkare`
- `omni-skills smoke`### Recommended Behavior

| Åkallan | Beteende |
|:-----------|:--------|
| `omni-skills` i TTY, inga args | Guidad installationspost |
| `omni-skills` i icke-TTY, inga args | Aktuell Antigravity standardinstallation |
| `omni-skills installera` i TTY, inga väljare | Guided installationsguide |
| `omni-skills install --guided` | Tvångsstyrt installationsflöde |
| `omni-skills ui` | Öppna navet för visuella funktioner |
| explicita flaggor | Utför direkt utan att ta en omväg in i det guidade flödet |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Alternativ:

- Claude Code
- Markör
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitation
- OpenCode
- Anpassad väg

Utdata:

- valt känt mål ELLER anpassad filsystemsökväg### Step 2: Choose Install Type

Alternativ:

- fullt bibliotek
- en publicerad färdighet
- en bunt
- sök sedan installera

Utdata:

- installera omfattning### Step 3: Resolve Selection

Beroende på installationstyp:

- fullt bibliotek: ingen extra väljare
- färdighet: lista eller välj en färdighet
- paket: lista eller välj ett paket
- sök: fråga efter fråga, visa matchande färdigheter och paket### Step 4: Preview

Display:

- valt mål
- löst väg
- vald färdighet eller paket
- motsvarande CLI-kommando
- om flödet är selektivt eller fullinstallation### Step 5: Confirm

Användaren bekräftar:

- ja → kör
- nej → avbryt eller gå tillbaka### Step 6: Result

Display:

- framgång/misslyckande
- destinationsväg
- förslag till nästa steg---

## 10. Information Architecture for the Visual Operations Hub

Operationshubben bör avslöja:### 10.1 Install

- guidat installationsflöde
- skicklighets- eller paketsökning
- anpassad sökväg### 10.2 Discover

- katalogsökning
- filter
- förhandsgranska metadata
- installera handoff### 10.3 MCP

Alternativ:

- transport: stdio, stream, sse
- lokalt läge på/av
- värd
- hamn### 10.4 API

Alternativ:

- värd
- hamn
- valfri autentisering
- Valfri skattegräns### 10.5 A2A

Alternativ:

- värd
- hamn
- butikstyp: minne, json, sqlite
- executor: inline, process
- leasingalternativ när sqlite-kön är aktiverad### 10.6 Diagnostics

- läkare
- rök---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Den nuvarande `tools/bin/cli.js` blandar:

- kommandotolkning
- presentation
- interaktiva uppmaningar
- actionorkestrering
- servicestart

Den nya strukturen bör flytta återanvändbar logik till:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` bör förbli den skrivbara backend.

Det guidade användargränssnittet bör anropa den befintliga installationsprogrammets backend snarare än att duplicera installationslogiken.### 11.3 Keep Find/Search Reusable

Den guidade installationsguiden bör återanvända samma katalogkärna och CLI-söklogik som redan driver:

- `hitta`
- installera förhandsvisningar
- buntupplösning### 11.4 Prepare for Ink Without Forcing It Early

Den första leveransen kan stanna i text-lägesuppmaningar.

Men arkitekturen bör hålla en tydlig söm så att textflödet senare kan renderas via Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Begränsning:

- öppna endast guidat användargränssnitt automatiskt i TTY
- bevara nuvarande standard i icke-TTY
- bevara explicita flaggflöden### 12.2 Letting UI Own Business Logic

Begränsning:

- flytta orkestrering till återanvändbara actionmoduler
- håll installations- och servicestartlogik under UI-lagret### 12.3 Ink Migration Too Early

Begränsning:

- skicka först det guidade flödet i nuvarande nodterminalstack
- migrera sedan till Ink när flödessemantiken är stabil### 12.4 Incomplete Service UX

Begränsning:

- Leveransinstallationsguiden först
- sedan lagerguidad tjänstlansering---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` i TTY installeras inte längre omedelbart
- Användaren kan välja målklient eller anpassad sökväg
- icke-TTY no-arg anrop fungerar fortfarande som tidigare### Phase 2

- guidad installation stöder fullständigt bibliotek, skicklighet, paket och sök-sedan-installera
- förhandsgranskning visas alltid före skrivning
- kommandomotsvarighet visas### Phase 3

- Branded terminal UI finns
- Användargränssnittet är mer visuellt strukturerat än vanliga läslinjemenyer
- navigeringen är tangentbordsvänlig### Phase 4

- användare kan starta MCP, API och A2A från det visuella navet
- stora körtidsalternativ är konfigurerbara i guidad form### Phase 5

- senaste eller sparade inställningar kan återanvändas
- upprepade flöden tar färre uppmaningar### Phase 6

- röktäckning återspeglar de nya UX-ingångspunkterna
- Dokument beskriver guidat läge och tjänsteguidens beteende---

## 14. Execution Order

Denna färdplan måste implementeras i denna ordning:

1. Guidat val av ingångspunkt
2. Guidad installationsguide
3. Visuellt terminalskal
4. Visuell servicenav
5. Sparade profiler och repeterbarhet
6. Härdning, tester och dokumentpolering

Implementeringsarbetet bör läsa den relevanta uppgiftsfilen innan varje uppgift påbörjas så att CLI-arbetet förblir i linje med planen och inte glider.