# 🧩 CLI Guided Installer Specification (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Adfærdskontrakt for den guidede installationsoplevelse i Omni Skills CLI.**---

## 1. Scope

Denne specifikation definerer den guidede installationsadfærd, der sidder oven på den eksisterende installations-backend.

Det erstatter ikke:

- `tools/bin/install.js`
- aktuelle ekspertflag flyder
- selektive installationsmanifester

Den definerer:

- hvordan guidet tilstand indtastes
- hvordan destinationer er valgt
- hvordan installationsomfanget vælges
- hvilke forhåndsvisningsoplysninger der skal vises
- hvordan konfirmation og eksekvering fungerer---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI'en skal gå i guidet installationstilstand, når:

- brugeren kører 'omni-skills' uden args i en TTY
- brugeren kører 'omni-skills install' uden vælgere i en TTY### 2.2 Forced Guided Entry

CLI'en bør også understøtte eksplicit guidet tilstand gennem en dedikeret mulighed, såsom:

- `omni-skills install --guided`

Denne tilstand bør fungere, selv når input er rør og ikke tilsluttet en TTY, så længe standard input er tilgængelig.### 2.3 Non-Interactive Safety Rule

Når det påberåbes uden en TTY og uden guidet tilstand, der udtrykkeligt anmodes om:

- bevar den nuværende standardadfærd
- bloker ikke for at vente på prompter---

## 3. Destination Model

Guidet installation skal understøtte to destinationsklasser:### 3.1 Known Client Target

Hvert kendt mål beslutter at:

- menneskelæselig etiket
- internt værktøjs-id
- installer flag
- løst vej

Nødvendige kendte mål:

- Claude Code
- Markør
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitation
- OpenCode### 3.2 Custom Path Target

Tilpasset stitilstand skal:

- bede om en sti
- løse `~`
- normalisere til absolut vej
- vis den løste sti i preview---

## 4. Install Scope Model

Vejledt installation skal understøtte:### 4.1 Full Library

Svarer til nuværende installation uden `--skill` eller `--bundle`.### 4.2 Single Skill

Lader brugeren vælge en offentliggjort færdighed.### 4.3 Single Bundle

Lader brugeren vælge en kureret bundt og løser udgivne medlemmer.### 4.4 Search Then Install

Lader brugeren:

- indtast en søgeforespørgsel
- inspicere resultater
- vælg en færdighed eller bundt
- Fortsæt til installationseksempel---

## 5. Preview Contract

Før udførelse skal guidet installation vise:

- destinationsetiket
- destinationssti
- installere omfang
- udvalgt færdighed eller bundt, hvis det er relevant
- tilsvarende CLI-kommando

Valgfrit men anbefalet:

- udvalgt færdighedsmetadataoversigt
- oversigt over bundt tilgængelighed---

## 6. Execution Contract

Efter bekræftelse:

- guidede installationsdelegerede til den eksisterende installatør-backend
- det genimplementerer ikke filen skriver sig selv

Kommandoforhåndsvisningen og de faktiske delegerede installatørargumenter skal matche nøjagtigt.---

## 7. Result Contract

Efter vellykket udførelse bør det guidede installationsresultat vise:

- succesindikator
- vej til den endelige destination
- kommando, der blev udført
- næste anbefalede handling

Eksempel på næste handling:

- brug færdigheden i den valgte klient
- køre `doktor`
- kør `mcp stream --local`---

## 8. Compatibility Contract

Følgende forbliver gyldige og uændrede:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-skills find figma --tool cursor --install --yes`

Guidet tilstand tilføjer adfærd. Det fjerner ikke eksisterende adfærd.