# 🧭 CLI UX Roadmap (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Produktkøreplanen for at udvikle Omni Skills fra en installatør med flag-først til en guidet terminaloplevelse for både ekspert- og ikke-ekspertbrugere.**
> Omfang: npm-pakke, CLI-installationsoplevelse, terminal-UI, servicelanceringsflow og visuel onboarding.---

## 1. Problem Statement

Det nuværende runtime-grundlag er stærkt, men adgangsoplevelsen er stadig optimeret til brugere, der allerede forstår:

- hvilken kunde de ønsker at målrette mod
- hvilken installationsvælger de ønsker at bruge
- hvordan man oversætter mål til `--skill`, `--bundle` eller `find`
- når de kun har brug for CLI-installation versus MCP, API eller A2A-tjenester

I dag:

- `npx omni-skills` er standard til Antigravity
- dette er teknisk gyldigt og bagudkompatibelt
- men det er ikke ideelt for førstegangsbrugere eller mindre tekniske operatører

CLI har allerede en grundlæggende interaktiv tilstand, men den er stadig tættere på et udviklerværktøj end en guidet produktoverflade.

Denne køreplan definerer stien til en stærkere offentlig UX uden at bryde den nuværende flag-baserede grænseflade.---

## 1.1 Delivery Status

Køreplanen er nu stort set implementeret i den nuværende depottilstand.

Fuldført:

- Fase 1: Vejledt valg af indgangspunkt
- Fase 2: Guidet installationsguide
- Fase 3: Visual Terminal Shell
- Fase 4: Visual Service Hub
- Fase 5: Gemte profiler og gentagelighed
- Fase 6: Hærdning, test og dokumentation---

## 2. Goals

- Bevar de nuværende ekspert-CLI-arbejdsgange
- Gør adgangspunktet uden argumenter sikkert og forståeligt for førstegangsbrugere
- Erstat tavse standardindstillinger i interaktive sammenhænge med guidet valg
- Understøtte kendte AI-klienter og vilkårlige brugerdefinerede installationsstier
- Gør installation, opdagelse og serviceopstart til en sammenhængende brugerrejse
- Giv en visuel terminal UI, der føles som et produkt, ikke bare et script
- Sørg for, at installationsmotoren, kataloget og servicekøretiden kan genbruges under brugergrænsefladen---

## 3. Non-Goals

- Udskiftning af den nuværende flag-baserede CLI
- Fjernelse af antigravity som et understøttet standardmål
- Sender en web-UI som den primære leveringstilstand
- Refaktorering af API-, MCP- eller A2A-protokoller selv som en del af dette UX-arbejde
- Erstatning af 'SKILL.md'-forfatter med et databasestøttet adminpanel---

## 4. Design Principles

### 4.1 Backward Compatibility First

Disse kommandoer skal fortsætte med at fungere præcis, som de gør i dag:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interaktiv terminalsession uden argumenter: åben guidet oplevelse
- Ikke-interaktiv påkaldelse uden argumenter: bevar den nuværende installationsstandardadfærd
- Eksplicitte kommandoer og flag vinder altid over UI-slutning### 4.3 Reuse One Engine Across Modes

Følgende bør dele den samme interne logik:

- flag-første CLI
- guidet tekst-mode CLI
- visuel terminal UI

Det betyder, at UX-laget ikke må eje forretningslogik. Det skal orkestrere genbrugelige handlinger.### 4.4 Preview Before Write

Alle guidede flows, der forårsager skrivninger, skal vise:

- løst mål
- løst vej
- udvalgte færdigheder eller bundter
- tilsvarende CLI-kommando
- bekræftelsesprompt### 4.5 Visual Does Not Mean Implicit

Selv i den rigere brugergrænseflade bør systemet stadig gøre tilstand og handlinger eksplicitte:

- hvor installationen skal hen
- hvad der bliver skrevet
- hvilken transport eller havn en tjeneste vil bruge
- om et flow er skrivebeskyttet eller lokalt skrivbart---

## 5. User Personas

### 5.1 Expert CLI User

Behov:

- hurtige kommandoer
- ingen tvungne opfordringer
- stabile flag
- skriftbarhed### 5.2 Guided Product User

Behov:

- klare valg
- ingen antagelse om, at der ønskes antigravitation
- Understøttelse af brugerdefinerede stiinstallationer
- Forståelig installationseksempel
- synlig skelnen mellem installations- og serverkørselshandlinger### 5.3 Operator / Platform User

Behov:

- evne til at starte MCP, API og A2A visuelt
- fornuftige standarder
- valgfri tuning af porte, transport, persistens, eksekveringstilstand, godkendelse og lokal tilstand---

## 6. Target UX Model

Produktet skal blotlægge tre lag:### 6.1 Expert Mode

Direkte kommandoer og flag.

Eksempler:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Udløst når:

- brugeren kører `npx omni-skills` i en TTY uden args
- brugeren kører `npx omni-skills install` uden konkrete vælgere
- brugeren vælger eksplicit til guidet tilstand

Det guidede installationsflow skal gå igennem:

1. målklient eller tilpasset sti
2. installationstype
3. udvælgelse af færdigheder eller bundter
4. forhåndsvisning
5. bekræftelse
6. udførelse
7. næste trin### 6.3 Visual Operations Hub

Udløst af:

- `npx omni-skills ui`

Dette bør blive "hjemmeskærmen" for ikke-ekspertbrugere og operatører.

Kernehandlinger:

- installere færdigheder
- opdage færdigheder
- start MCP
- start API
- start A2A
- køre læge
- køre røgtjek---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Resultat:

- `npx omni-skills` i TTY antager ikke længere stille antigravity
- brugere bliver bedt om at vælge en klient eller brugerdefineret sti

Krav:

- bevar ikke-TTY-standardinstallationsadfærd
- Tilføj målvælger
- understøtter brugerdefineret stifangst### Phase 2: Guided Install Wizard

Resultat:

- installationen bliver et fuldt guidet flow

Krav:

- valg af installationstilstand:
  - fuldt bibliotek
  - én færdighed
  - et bundt
  - søg og installer
- Installer forhåndsvisning
- tilsvarende kommandogengivelse
- bekræftelse og udførelse### Phase 3: Visual Terminal Shell

Resultat:

- den nuværende grundlæggende tekst-brugergrænseflade bliver en brandet terminalapplikation

Krav:

- rigere layout
- projekt branding og logo
- bedre stepper og kort
- tastaturdrevet navigation
- Reager terminal implementering via Ink### Phase 4: Visual Service Hub

Resultat:

- MCP, API og A2A kan startes fra den visuelle brugergrænseflade

Krav:

- guidet MCP flow
- guidet API flow
- styret A2A flow
- forhåndsvisninger af synlig tilstand og konfiguration### Phase 5: Saved Profiles and Repeatability

Resultat:

- almindelige installations- eller serviceforudindstillinger kan genbruges

Krav:

- husk de seneste mål
- gemte tjenesteforudindstillinger
- seneste kommandoer
- favorit bundter eller færdigheder### Phase 6: Hardening, Tests, and Documentation

Resultat:

- UX bliver en vedligeholdt offentlig grænseflade, ikke en ad hoc-bekvemmelighed

Krav:

- røgdækning
- regressionstest
- doc opdateringer
- operatørvejledning
- gennemgang af pakkekompatibilitet---

## 8. Proposed Command Model

### Stable Commands

- `omni-færdigheder`
- `omni-skills install`
- `omni-skills find`
- `omni-skills ui`
- `omni-skills mcp`
- `omni-skills api`
- `omni-færdigheder a2a`
- `omni-færdighedslæge`
- `omni-skills røg`### Recommended Behavior

| Påkaldelse | Adfærd |
|:-----------|:--------|
| 'omni-skills' i TTY, ingen argumenter | Guidet installationsadgang |
| 'omni-skills' i ikke-TTY, ingen args | Aktuel Antigravity standardinstallation |
| `omni-skills install` i TTY, ingen vælgere | Guidet installationsguide |
| `omni-skills install --guided` | Tvangsstyret installationsflow |
| `omni-skills ui` | Åbn den visuelle operations hub |
| eksplicitte flag | Udfør direkte uden at gå ind i det guidede flow |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Valgmuligheder:

- Claude Code
- Markør
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitation
- OpenCode
- Brugerdefineret sti

Output:

- valgt kendt mål ELLER tilpasset filsystemsti### Step 2: Choose Install Type

Valgmuligheder:

- fuldt bibliotek
- en offentliggjort færdighed
- et bundt
- søg og installer

Output:

- installere omfang### Step 3: Resolve Selection

Afhængig af installationstype:

- fuldt bibliotek: ingen ekstra vælger
- færdighed: liste eller vælg en færdighed
- bundt: liste eller vælg et bundt
- søg: bed om forespørgsel, vis matchende færdigheder og bundter### Step 4: Preview

Display:

- valgt mål
- løst vej
- udvalgt færdighed eller bundt
- tilsvarende CLI-kommando
- om flowet er selektivt eller fuld installation### Step 5: Confirm

Brugeren bekræfter:

- ja → udfør
- nej → afbryd eller gå tilbage### Step 6: Result

Display:

- succes/fiasko
- destinationssti
- forslag til næste trin---

## 10. Information Architecture for the Visual Operations Hub

Driftshubben bør afsløre:### 10.1 Install

- guidet installationsflow
- færdigheds- eller bundtsøgning
- tilpasset sti### 10.2 Discover

- katalogsøgning
- filtre
- forhåndsvisning af metadata
- installer overdragelse### 10.3 MCP

Valgmuligheder:

- transport: stdio, stream, sse
- lokal tilstand til/fra
- vært
- port### 10.4 API

Valgmuligheder:

- vært
- port
- valgfri aut
- valgfri takstgrænse### 10.5 A2A

Valgmuligheder:

- vært
- port
- butikstype: hukommelse, json, sqlite
- udfører: inline, proces
- Leje muligheder, når sqlite kø er aktiveret### 10.6 Diagnostics

- læge
- røg---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Det aktuelle `tools/bin/cli.js` blander:

- kommandoparsing
- præsentation
- interaktive prompter
- action orkestrering
- service boot

Den nye struktur skal flytte genbrugelig logik til:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` bør forblive den skrivekompatible backend.

Den guidede brugergrænseflade bør kalde den eksisterende installations-backend frem for at duplikere installationslogikken.### 11.3 Keep Find/Search Reusable

Den guidede installationsguide bør genbruge den samme katalogkerne og CLI-søgelogik, der allerede driver:

- 'find'
- Installer forhåndsvisninger
- bundt opløsning### 11.4 Prepare for Ink Without Forcing It Early

Den første levering kan forblive i tekst-mode prompter.

Men arkitekturen skal holde en klar søm, så tekstflowet senere kan gengives via Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Afhjælpning:

- åbn kun guidet UI automatisk i TTY
- bevar nuværende standard i ikke-TTY
- bevare eksplicitte flagstrømme### 12.2 Letting UI Own Business Logic

Afhjælpning:

- flyt orkestrering til genanvendelige handlingsmoduler
- Hold installations- og servicestartlogikken under UI-laget### 12.3 Ink Migration Too Early

Afhjælpning:

- send først det guidede flow i den nuværende nodeterminalstak
- migrer derefter til Ink, når flow-semantikken er stabil### 12.4 Incomplete Service UX

Afhjælpning:

- Send installationsguiden først
- derefter lagstyret servicelancering---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` i TTY installeres ikke længere med det samme
- Brugeren kan vælge målklient eller tilpasset sti
- ikke-TTY no-arg invocation fungerer stadig som før### Phase 2

- guidet installation understøtter fuldt bibliotek, færdigheder, bundt og søg-så-installer
- forhåndsvisning vises altid før skrivning
- kommandoækvivalent vises### Phase 3

- Brandet terminal UI findes
- Brugergrænsefladen er mere visuelt struktureret end almindelige readline-menuer
- navigation er tastaturvenlig### Phase 4

- brugere kan starte MCP, API og A2A fra den visuelle hub
- store runtime-indstillinger kan konfigureres i guidet form### Phase 5

- seneste eller gemte præferencer kan genbruges
- gentagne flows kræver færre prompter### Phase 6

- røgdækning afspejler de nye UX-indgangspunkter
- Dokumenter beskriver guidet tilstand og serviceguidens adfærd---

## 14. Execution Order

Denne køreplan skal implementeres i denne rækkefølge:

1. Vejledt valg af indgangspunkt
2. Guidet installationsguide
3. Visuel terminalskal
4. Visuel servicehub
5. Gemte profiler og repeterbarhed
6. Hærdning, tests og docs polering

Implementeringsarbejdet bør læse den relevante opgavefil, før hver opgave startes, så CLI-arbejdet forbliver på linje med planen og ikke glider.