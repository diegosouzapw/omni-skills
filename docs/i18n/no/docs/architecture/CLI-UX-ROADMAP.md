# 🧭 CLI UX Roadmap (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Produktveikartet for å utvikle Omni Skills fra en installatør med flagget først til en guidet terminalopplevelse for både ekspert- og ikke-ekspertbrukere.**
> Omfang: npm-pakke, CLI-installasjonsopplevelse, terminalgrensesnitt, tjenestelanseringsflyter og visuell onboarding.---

## 1. Problem Statement

Det nåværende kjøretidsgrunnlaget er sterkt, men inngangsopplevelsen er fortsatt optimalisert for brukere som allerede forstår:

- hvilken klient de ønsker å målrette mot
- hvilken installasjonsvelger de vil bruke
- hvordan oversette mål til «--ferdighet», «--bundle» eller «finn».
- når de trenger CLI-installasjon versus MCP, API eller A2A-tjenester

I dag:

- `npx omni-skills` er standard til Antigravity
- Dette er teknisk gyldig og bakoverkompatibelt
- men det er ikke ideelt for førstegangsbrukere eller mindre tekniske operatører

CLI har allerede en grunnleggende interaktiv modus, men den er fortsatt nærmere et utviklerverktøy enn en guidet produktoverflate.

Dette veikartet definerer veien til en sterkere offentlig brukeropplevelse uten å bryte det gjeldende flaggbaserte grensesnittet.---

## 1.1 Delivery Status

Veikartet er nå stort sett implementert i den nåværende depottilstanden.

Fullført:

- Fase 1: Veiledet valg av inngangspunkt
- Fase 2: Veiviser for veiledet installasjon
- Fase 3: Visual Terminal Shell
- Fase 4: Visual Service Hub
- Fase 5: Lagrede profiler og repeterbarhet
- Fase 6: Herding, tester og dokumentasjon---

## 2. Goals

- Bevar de nåværende ekspert CLI-arbeidsflytene
- Gjør inngangspunktet uten argumenter trygt og forståelig for førstegangsbrukere
- Erstatt stille standardinnstillinger i interaktive sammenhenger med veiledet valg
- Støtt kjente AI-klienter og vilkårlige tilpassede installasjonsbaner
- Gjør installasjon, oppdagelse og serviceoppstart til en sammenhengende brukerreise
- Gi et visuelt terminalgrensesnitt som føles som et produkt, ikke bare et skript
- Hold installasjonsmotoren, katalogen og servicekjøringen gjenbrukbar under brukergrensesnittet---

## 3. Non-Goals

- Erstatter gjeldende flaggbasert CLI
- Fjerner Antigravity som et støttet standardmål
- Sender et nettgrensesnitt som primær leveringsmodus
- Refaktorering av API-, MCP- eller A2A-protokoller selv som en del av dette UX-arbeidet
- Erstatter `SKILL.md`-forfatter med et databasestøttet adminpanel---

## 4. Design Principles

### 4.1 Backward Compatibility First

Disse kommandoene må fortsette å fungere nøyaktig slik de gjør i dag:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interaktiv terminaløkt uten argumenter: åpen guidet opplevelse
- Ikke-interaktiv påkalling uten argumenter: bevar gjeldende installasjonsstandardoppførsel
- Eksplisitte kommandoer og flagg vinner alltid over UI-slutninger### 4.3 Reuse One Engine Across Modes

Følgende bør dele den samme interne logikken:

- flagg-første CLI
- guidet tekst-modus CLI
- visuell terminal UI

Det betyr at UX-laget ikke må eie forretningslogikk. Det bør orkestrere gjenbrukbare handlinger.### 4.4 Preview Before Write

Alle veilede flyter som forårsaker skriving skal vise:

- løst mål
- løst vei
- utvalgte ferdigheter eller bunter
- tilsvarende CLI-kommando
- bekreftelsesmelding### 4.5 Visual Does Not Mean Implicit

Selv i det rikere brukergrensesnittet, bør systemet fortsatt gjøre tilstand og handlinger eksplisitt:

- hvor installasjonen går
- hva vil bli skrevet
- hvilken transport eller havn en tjeneste skal bruke
- om en flyt er skrivebeskyttet eller lokal skriving---

## 5. User Personas

### 5.1 Expert CLI User

Trenger:

- raske kommandoer
- ingen tvangsoppfordringer
- stabile flagg
- skriptbarhet### 5.2 Guided Product User

Trenger:

- klare valg
- ingen antagelse om at antigravitasjon er ønsket
- støtte for tilpassede baneinstallasjoner
- Forståelig forhåndsvisning av installasjonen
- synlig forskjell mellom installasjons- og serverkjøringshandlinger### 5.3 Operator / Platform User

Trenger:

- evne til å starte MCP, API og A2A visuelt
- fornuftige standarder
- valgfri tuning av porter, transport, utholdenhet, eksekveringsmodus, autentisering og lokal modus---

## 6. Target UX Model

Produktet skal eksponere tre lag:### 6.1 Expert Mode

Direkte kommandoer og flagg.

Eksempler:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Utløses når:

- brukeren kjører `npx omni-skills` i en TTY uten args
- brukeren kjører `npx omni-skills install` uten konkrete velgere
- brukeren velger eksplisitt veiledet modus

Den veiledede installasjonsflyten skal gå gjennom:

1. målklient eller tilpasset bane
2. installasjonstype
3. ferdighets- eller buntvalg
4. forhåndsvisning
5. bekreftelse
6. utførelse
7. neste trinn### 6.3 Visual Operations Hub

Utløst av:

- `npx omni-skills ui`

Dette bør bli "hjemmeskjermen" for ikke-ekspertbrukere og operatører.

Kjernehandlinger:

- installere ferdigheter
- oppdage ferdigheter
- start MCP
- start API
- start A2A
- kjøre lege
- kjøre røyksjekker---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Utfall:

- `npx omni-skills` i TTY antar ikke lenger antigravity
- brukere blir bedt om å velge en klient eller tilpasset bane

Krav:

- bevar ikke-TTY standard installasjonsatferd
- legg til målvelger
- støtte tilpasset banefangst### Phase 2: Guided Install Wizard

Utfall:

- installasjonen blir en full guidet flyt

Krav:

- valg av installasjonsmodus:
  - fullt bibliotek
  - én ferdighet
  - en bunt
  - søk og installer
- installer forhåndsvisning
- tilsvarende kommandogjengivelse
- bekreftelse og utførelse### Phase 3: Visual Terminal Shell

Utfall:

- det nåværende grunnleggende tekstgrensesnittet blir en merket terminalapplikasjon

Krav:

- rikere layout
- prosjekt merkevarebygging og logo
- bedre stepper og kort
- tastaturdrevet navigasjon
- Reager terminalimplementering via Ink### Phase 4: Visual Service Hub

Utfall:

- MCP, API og A2A kan startes fra det visuelle brukergrensesnittet

Krav:

- guidet MCP-flyt
- guidet API-flyt
- guidet A2A flyt
- Forhåndsvisninger av synlig modus og konfigurasjon### Phase 5: Saved Profiles and Repeatability

Utfall:

- vanlige forhåndsinnstillinger for installasjon eller service kan gjenbrukes

Krav:

- husk nylige mål
- lagrede tjenesteforhåndsinnstillinger
- nylige kommandoer
- favorittbunter eller ferdigheter### Phase 6: Hardening, Tests, and Documentation

Utfall:

- UX blir et vedlikeholdt offentlig grensesnitt, ikke en ad hoc-bekvemmelighet

Krav:

- røykdekning
- regresjonstester
- dokumentoppdateringer
- operatørveiledning
- gjennomgang av pakkekompatibilitet---

## 8. Proposed Command Model

### Stable Commands

- `omni-skills`
- `omni-skills install`
- `omni-skills find`
- `omni-skills ui`
- `omni-skills mcp`
- `omni-skills api`
- `omni-skills a2a`
- `omni-skills lege`
- `omni-skills røyk`### Recommended Behavior

| Påkallelse | Atferd |
|:-----------|:--------|
| `omni-skills` i TTY, ingen argumenter | Veiledet installasjonsoppføring |
| 'omni-skills' i ikke-TTY, ingen args | Gjeldende Antigravity standardinstallasjon |
| `omni-skills install` i TTY, ingen velgere | Veiviser for veiledet installasjon |
| `omni-skills install --guided` | Tvangsstyrt installasjonsflyt |
| `omni-skills ui` | Åpne den visuelle operasjonshuben |
| eksplisitte flagg | Utfør direkte uten å gå inn i den guidede flyten |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Alternativer:

- Claude Code
- Markør
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitasjon
- Åpenkode
- Egendefinert bane

Utgang:

- valgt kjent mål ELLER tilpasset filsystembane### Step 2: Choose Install Type

Alternativer:

- fullt bibliotek
- én publisert ferdighet
- en bunt
- søk og installer

Utgang:

- installeringsomfang### Step 3: Resolve Selection

Avhengig av installasjonstype:

- fullt bibliotek: ingen ekstra velger
- ferdighet: liste opp eller velg en ferdighet
- bunt: liste opp eller velg en bunt
- søk: spør etter spørring, vis matchende ferdigheter og bunter### Step 4: Preview

Visning:

- valgt mål
- løst vei
- valgt ferdighet eller bunt
- tilsvarende CLI-kommando
- om flyten er selektiv eller full installasjon### Step 5: Confirm

Bruker bekrefter:

- ja → utfør
- nei → avbryt eller gå tilbake### Step 6: Result

Visning:

- suksess/fiasko
- destinasjonsvei
- forslag til neste trinn---

## 10. Information Architecture for the Visual Operations Hub

Driftshuben bør avsløre:### 10.1 Install

- guidet installasjonsflyt
- ferdighets- eller buntsøk
- tilpasset bane### 10.2 Discover

- katalogsøk
- filtre
- forhåndsvise metadata
- installer overlevering### 10.3 MCP

Alternativer:

- transport: stdio, stream, sse
- lokal modus på/av
- vert
- port### 10.4 API

Alternativer:

- vert
- port
- valgfri auth
- valgfri takstgrense### 10.5 A2A

Alternativer:

- vert
- port
- Store type: minne, json, sqlite
- utfører: inline, prosess
- lease alternativer når sqlite kø er aktivert### 10.6 Diagnostics

- lege
- røyk---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Gjeldende `tools/bin/cli.js` blander:

- kommandoparsing
- presentasjon
- interaktive meldinger
- action orkestrering
- serviceoppstart

Den nye strukturen skal flytte gjenbrukbar logikk inn i:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` bør forbli den skrivekompatible backend.

Det veiledede brukergrensesnittet bør kalle opp den eksisterende installasjonsstøtten i stedet for å duplisere installasjonslogikken.### 11.3 Keep Find/Search Reusable

Den guidede installasjonsveiviseren bør gjenbruke den samme katalogkjerne- og CLI-søkelogikken som allerede driver:

- `finn`
- installer forhåndsvisninger
- buntoppløsning### 11.4 Prepare for Ink Without Forcing It Early

Den første leveringen kan forbli i tekst-modus forespørsler.

Men arkitekturen bør holde en tydelig søm slik at tekstflyten senere kan gjengis via Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Begrensning:

- åpne kun veiledet brukergrensesnitt automatisk i TTY
- behold gjeldende standard i ikke-TTY
- bevare eksplisitte flaggflyter### 12.2 Letting UI Own Business Logic

Begrensning:

- flytt orkestrering til gjenbrukbare handlingsmoduler
- hold installasjons- og serviceoppstartslogikken under UI-laget### 12.3 Ink Migration Too Early

Begrensning:

- send først den guidede strømmen i gjeldende nodeterminalstabel
- migrer deretter til Ink når flytsemantikken er stabil### 12.4 Incomplete Service UX

Begrensning:

- Send installasjonsveiviseren først
- deretter lagveiledet tjenestelansering---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` i TTY installeres ikke lenger umiddelbart
- Brukeren kan velge målklient eller tilpasset bane
- ikke-TTY no-arg-anrop fungerer fortsatt som før### Phase 2

- guidet installasjon støtter fullt bibliotek, ferdigheter, bunt og søk-og-installer
- forhåndsvisning vises alltid før skriving
- kommandoekvivalent vises### Phase 3

- Merket terminalgrensesnitt finnes
- Brukergrensesnittet er mer visuelt strukturert enn vanlige leselinjemenyer
- navigasjonen er tastaturvennlig### Phase 4

- brukere kan starte MCP, API og A2A fra den visuelle huben
- Store kjøretidsalternativer kan konfigureres i veiledet form### Phase 5

- nylige eller lagrede preferanser kan gjenbrukes
- gjentatte flyter krever færre spørsmål### Phase 6

- røykdekning gjenspeiler de nye UX-inngangspunktene
- Dokumenter beskriver veiledet modus og tjenesteveiviserens virkemåte---

## 14. Execution Order

Dette veikartet må implementeres i denne rekkefølgen:

1. Veiledet inngangspunktvalg
2. Veiviser for veiledning
3. Visuelt terminalskall
4. Visuell servicehub
5. Lagrede profiler og repeterbarhet
6. Herding, tester og polering av dokumenter

Implementeringsarbeidet bør lese den relevante oppgavefilen før du starter hver oppgave, slik at CLI-arbeidet forblir på linje med planen og ikke driver.