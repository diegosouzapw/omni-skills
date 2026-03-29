# 🧩 CLI Guided Installer Specification (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Atferdskontrakt for veiledet installasjonsopplevelse i Omni Skills CLI.**---

## 1. Scope

Denne spesifikasjonen definerer den veiledede installasjonsatferden som ligger på toppen av den eksisterende installeringsstøtten.

Den erstatter ikke:

- `tools/bin/install.js`
- gjeldende ekspertflagg flyter
- selektive installasjonsmanifester

Den definerer:

- hvordan guidet modus legges inn
- hvordan destinasjoner velges
- hvordan installasjonsomfang velges
- hvilken forhåndsvisningsinformasjon som må vises
- hvordan bekreftelse og gjennomføring fungerer---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI-en skal gå inn i guidet installasjonsmodus når:

- brukeren kjører 'omni-skills' uten args i en TTY
- brukeren kjører 'omni-skills install' uten velgere i en TTY### 2.2 Forced Guided Entry

CLI bør også støtte eksplisitt guidet modus gjennom et dedikert alternativ, for eksempel:

- `omni-skills install --guided`

Denne modusen skal fungere selv når inngangen er koblet til og ikke koblet til en TTY, så lenge standardinngangen er tilgjengelig.### 2.3 Non-Interactive Safety Rule

Når det påkalles uten en TTY og uten veiledet modus eksplisitt forespurt:

- behold gjeldende standardoppførsel
- ikke blokker å vente på meldinger---

## 3. Destination Model

Veiledet installasjon må støtte to destinasjonsklasser:### 3.1 Known Client Target

Hvert kjent mål bestemmer seg for å:

- etikett som kan leses av mennesker
- intern verktøy-ID
- installer flagg
- løst vei

Nødvendige kjente mål:

- Claude Code
- Markør
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitasjon
- Åpenkode### 3.2 Custom Path Target

Egendefinert banemodus må:

- spør etter en sti
- løse `~`
- normalisere til absolutt bane
- vis den løste banen i forhåndsvisning---

## 4. Install Scope Model

Veiledet installasjon må støtte:### 4.1 Full Library

Tilsvarer gjeldende installasjon uten «--skill» eller «--bundle».### 4.2 Single Skill

Lar brukeren velge én publisert ferdighet.### 4.3 Single Bundle

Lar brukeren velge én kuratert pakke og løser publiserte medlemmer.### 4.4 Search Then Install

Lar brukeren:

- skriv inn et søk
- inspiser resultatene
- velg en ferdighet eller bunt
- fortsett til forhåndsvisning av installering---

## 5. Preview Contract

Før utførelse må veiledet installasjon vise:

- destinasjonsetikett
- destinasjonsvei
- installeringsomfang
- valgt ferdighet eller pakke hvis aktuelt
- tilsvarende CLI-kommando

Valgfritt, men anbefalt:

- valgt ferdighetsmetadatasammendrag
- sammendrag av pakketilgjengelighet---

## 6. Execution Contract

Etter bekreftelse:

- veiledet installeringsdeltakere til den eksisterende installatørens backend
- det ikke reimplementere filen skriver seg selv

Kommandoforhåndsvisningen og de faktiske delegerte installasjonsargene må samsvare nøyaktig.---

## 7. Result Contract

Etter vellykket utførelse skal resultatet av den guidede installasjonen vise:

- suksessindikator
- endelig destinasjonsvei
- kommandoen som ble utført
- neste anbefalte handling

Eksempel på neste handlinger:

- bruk ferdigheten i den valgte klienten
- kjøre `doktor`
- kjør `mcp stream --local`---

## 8. Compatibility Contract

Følgende forblir gyldige og uendret:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bunt full-stack`
- `omni-skills --path ./skills`
- `omni-skills find figma --tool cursor --install --yes`

Guidet modus legger til atferd. Det fjerner ikke eksisterende atferd.