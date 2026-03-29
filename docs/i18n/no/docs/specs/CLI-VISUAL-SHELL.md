# 🖥️ CLI Visual Shell Specification (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Atferdskontrakt for det blekkbaserte terminalgrensesnittet eksponert av «omni-skills ui».**---

## 1. Scope

Det visuelle skallet er en guidet produktoverflate på toppen av den eksisterende CLI- og installatørmotoren.

Den erstatter ikke:

- ekspertflaggbasert CLI-bruk
- `tools/bin/install.js`
- den veiledede tekstinstallasjonsflyten
- API, MCP eller A2A kjøretidsatferd

Den definerer:

- oppførselen til `omni-skills ui`
- reservekontrakten for `omni-skills ui --text`
- lokal stat og forhåndsinnstilt utholdenhet
- guidede forhåndsvisninger av tjenestelansering
- Repeterbarhet for nylige installasjoner og servicekjøringer---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` lanserer det blekkbaserte visuelle skallet.

Det visuelle skallet er den primære terminalopplevelsen som ikke er ekspert for:

- installere flyter
- katalog-første oppdagelse og installering
- MCP oppstart
- API oppstart
- A2A oppstart
- lege og røykoverlevering### 2.2 Text Fallback

`omni-skills ui --text` lanserer det leselinjebaserte reservegrensesnittet.

Dette er fortsatt nyttig når:

- en terminal kan ikke gjengi det rikere skallet riktig
- Raw-mode atferd er begrenset
- en minimal tilbakestilling av tekst er å foretrekke### 2.3 Handoff Rule

Det visuelle skallet implementerer ikke tjenestekjøringer eller installasjonsskriver direkte.

Etter forhåndsvisning og bekreftelse, avslutter den rent og sender kjøringen til det eksisterende CLI-inngangspunktet med tilsvarende argumenter og miljøvariabler.---

## 3. Home Screen Contract

Startskjermen må vise:

- installere ferdigheter
- finn og installer
- Gjenta nylige installasjoner når de er tilstede
- Kjør lagrede installasjonsforhåndsinnstillinger når de er tilstede
- starte en tjeneste
- Gjenta nylige tjenester når tilstede
- Kjør lagrede tjenesteforhåndsinnstillinger når de er tilstede
- lege
- røyk
- gå ut

Startskjermen skal også vises:

- gjeldende publisert pakketilgjengelighet
- lokal stat teller for nylige, forhåndsinnstillinger og favoritter---

## 4. Install Flow Contract

Installasjonsflyten for det visuelle skallet må støtte:

- kjent kundemålvalg
- tilpasset banevalg
- komplett bibliotekinstallasjon
- installering med én ferdighet
- installering av én pakke
- søk-og-installer
- forhåndsvisning før skriving
- forhåndsinnstilt lagring
- favorittferdighet eller buntveksling

Forhåndsvisningen må vise:

- løst måletikett
- løst vei
- installeringsomfang
- valgt ferdighet eller pakke når det er aktuelt
- tilsvarende CLI-kommando---

## 5. Service Flow Contract

Det visuelle skallet må veilede oppstart for:### 5.1 MCP

- transport: `stdio`, `stream`, `sse`
- modus: "skrivebeskyttet" eller "lokal".
- verts-/portkonfigurasjon for nettverkstransport
- eksplisitt kommando forhåndsvisning### 5.2 API

- vert
- port
- grunnleggende eller herdet profil
- herdet bærer eller API-nøkkelaut
- herdede hastighetsgrenseparametere
- Aktivering av revisjonslogg
- eksplisitt kommando forhåndsvisning### 5.3 A2A

- vert
- port
- butikktype: "minne", "json", "sqlite".
- lagre bane for holdbare moduser
- executor: 'inline', 'prosess'
- Køaktivert SQLite-modus
- avstemningsintervall og leieperioden for delt leiemodus
- eksplisitt kommando forhåndsvisning---

## 6. Local State Contract

Det visuelle skallet vedvarer kun lokalt i:```text
~/.omni-skills/state/ui-state.json
```

Staten inkluderer for tiden:

- nylige installasjoner
- nylige lanseringer av tjenester
- navngitte installasjonsforhåndsinnstillinger
- navngitte tjenesteforhåndsinnstillinger
- favorittferdigheter
- favorittbunter

Skallet må støtte:

- avspilling av nylige installasjoner
- avspilling av nylige tjenestelanseringer
- gjenbruk av navngitte installasjonsforhåndsinnstillinger
- gjenbruk av navngitte forhåndsinnstillinger---

## 7. Compatibility Contract

Det visuelle skallet er additivt.

Disse strømmene må forbli gyldige og stabile:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills install --guided`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

Det visuelle skallet må aldri tvinge seg inn i eksplisitte ekspertkommandobaner.---

## 8. Safety Contract

Det visuelle skallet skal gjøre tilstand og skriver eksplisitt.

Det må:

- forhåndsvise installasjoner før skriving
- forhåndsvis tjenestestartskommandoer før kjøring
- hold hemmelig materiale borte fra forhåndsvisninger av klartekstkommandoer der det er praktisk
- vedvarer kun lokalt
- bevar ikke-interaktiv CLI-adferd utenfor det visuelle skallet