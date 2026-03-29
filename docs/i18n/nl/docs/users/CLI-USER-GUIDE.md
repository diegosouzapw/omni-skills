# 🧭 Omni Skills CLI User Guide (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Het volledige openbare CLI-oppervlak geleverd door `omni-skills`.**

Gebruik deze handleiding als u:

| Doel | Commandogebied |
|:-----|:-------------|
| 📥 Installeer vaardigheden of bundels | [Installeerstromen](#3️⃣-install-flows) |
| 🔎 Zoek in de catalogus | [Catalogus ontdekken](#4️⃣-catalog-discovery) |
| 🔌 MCP-clients configureren | [MCP-clientconfiguratie](#5️⃣-mcp-client-config) |
| 🖥️ Start MCP-, API- of A2A-services | [MCP-server](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Gebruik de visuele terminalshell | [Visuele shell](#9️⃣-visuele-shell) |
| 🧪 Voer diagnostiek uit of preflight | [Diagnostiek](#🔟-diagnostiek-en-preflight) |---

## 1️⃣ Install and Entry Modes

Installeer met `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Context | Wat gebeurt er |
|:--------|:------------|
| 🖥️ TTY + geen argumenten | Opent de stroom**begeleide installatie**|
| ⚙️ Niet-TTY + geen argumenten | Niet-interactieve installatie naar `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Merk**Inkt visuele schaal**|
| 📝 `npx omni-skills ui --tekst` | Leesregel**tekst fallback**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Commando | Beschrijving |
|:--------|:-----------|
| `ui` | 🎨 Visuele terminalhub |
| `vind [vraag]` | 🔎 Catalogus ontdekken |
| `hercategoriseren` | 🏷️ Taxonomiebeheer |
| `installeer [vlaggen]` | 📥 Vaardigheid/bundel installeren |
| `config-mcp` | 🔌 MCP-clientconfiguratie |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP-servermodi |
| `api` | 🌐 Catalogus-API |
| `a2a` | 🤖 A2A-runtime |
| `rook` | 🧪 Preflight vrijgeven |
| `publicatiecontrole` | 📦 Pakketpublicatiecontrole |
| `dokter` | 🩺 Omgevingsdiagnostiek |
| `help` | ❓ Commandoreferentie |---

## 3️⃣ Install Flows

### Snel starten

```bash
npx omni-skills
npx omni-skills install --guided
```

> Met de begeleide stroom kunt u kiezen:**doelklant**→**bundel of vaardigheid**→**aangepast pad**→**voorbeeld vóór uitvoering**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Vlag | Klant |
|:-----|:-------|
| `--antizwaartekracht` | 🟣 Antizwaartekracht *(standaard)* |
| `--claude` | 🟢 ClaudeCode |
| `--cursor` | 🔵 Cursor |
| `--codex` | 🔴Codex CLI |
| `--tweeling` | 🟡Gemini CLI |
| `--kiro` | 🟠Kiro |
| `--opencode` | ⚪ OpenCode |

> Standaard installatiedoel (niet-interactief): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Vlag | Doel |
|:-----|:--------|
| `--categorie` | Filteren op taxonomiecategorie |
| `--gereedschap` | Filteren op ondersteunde tool |
| `--risico` | Filter op risiconiveau |
| `--sorteer` | Resultaten sorteren (bijvoorbeeld `kwaliteit`) |
| `--bestelling` | Sorteervolgorde |
| `--min-kwaliteit` | Minimale kwaliteitsscore |
| `--min-best-practices` | Minimale score voor best practices |
| `--min-niveau` | Minimum volwassenheidsniveau |
| `--min-beveiliging` | Minimale beveiligingsscore |
| `--validatiestatus` | Filter op validatiestatus |
| `--beveiligingsstatus` | Filter op beveiligingsstatus |---

## 5️⃣ MCP Client Config

Gebruik `config-mcp` om een ​​clientbewuste MCP-configuratie te bekijken of te schrijven.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<details>
<summary>🔌 <strong>Config-compatibel clientoppervlak</strong></summary>

| Klant | Doelstellingen |
|:-------|:--------|
| Claude | Instellingen en bureaubladdoelen |
| Cursor | Gebruiker en werkruimte |
| Codex | TOML-configuratie |
| Tweeling | Gebruiker en werkruimte |
| Antizwaartekracht | Gebruikersconfiguratie |
| OpenCode | Gebruiker en werkruimte |
| Klijn | Eersteklas doelwit |
| GitHub Copilot-CLI | Gebruiker en repository |
| Kilocode | Gebruiker, project en werkruimte |
| Kiro | Gebruiker en werkruimte |
| Zed | Werkruimte |
| VS-code | Gebruiker, werkruimte en ontwikkelaarscontainer |
| Ga verder | Werkruimte YAML |
| juni | Project en gebruiker |
| Windsurfen | Gebruikersconfiguratie |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**Lokale zijspan**voegt toe: clientdetectie, installatievoorbeeld, stromen installeren/verwijderen en MCP-configuratie schrijven.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Route | Doel |
|:------|:--------|
| `KRIJG /gezondheidz` | Gezondheidscontrole |
| `GET /openapi.json` | OpenAPI-specificatie |
| `GET /v1/skills` | Lijst van alle vaardigheden |
| `GET /v1/zoeken` | Zoek in de catalogus |
| `GET /v1/skills/:id/archives` | Archieven voor een vaardigheid weergeven |
| `GET /v1/skills/:id/download/archive?format=zip` | Vaardighedenarchief downloaden |
| `GET /v1/skills/:id/download/archive/checksums` | Controlesommen downloaden |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Kenmerk | Staat |
|:--------|:-------|
| 🔎 Taakbewust ontdekken | ✅ |
| 📋 Overdracht installatieplan | ✅ |
| 🔄 Polling | ✅ |
| 📡Streamen | ✅ |
| ❌ Annulering | ✅ |
| 🔔 Push-meldingsconfiguratie | ✅ |
| 💾 Doorzettingsvermogen | Geheugen, JSON en SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Functies

| Kenmerk | Beschrijving |
|:--------|:-----------|
| 🧭 Begeleide installatie | Kies een client- of aangepast pad |
| 🔎 Zoeken + installeren | Geen vlagmemorisatie nodig |
| 🔌 MCP-configuratie | Stromen bekijken en schrijven |
| 🖥️Servicelancering | MCP-, API- en A2A-geleide startup |
| 🕐 Recent | Recente installaties en herlanceringen van services |
| ⭐ Favorieten | Opgeslagen vaardigheden en bundels |
| 💾 Voorinstellingen | Benoemde installatie- en servicevoorinstellingen |

>**Staatspad:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Inspecteert: repo-status, lokale installatiestatus, runtime-beschikbaarheid en omgevingsproblemen.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Valideert: build, tests, pakketuitvoer, service-boot, scannerdekking en release-verpakking.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯Persoon | Commando | Doel |
|:-----------|:--------|:--------|
| 🆕 Nieuwe gebruiker | `npx omni-vaardigheden` ​​| Begeleide eerste installatie |
| 🔧 Operator | `npx omni-skills config-mcp --list-targets` | Configureer lokale MCP |
| 🔧 Operator | `npx omni-skills mcp-stream --local` | Start lokaal zijspan |
| 📦 Onderhouder | `npx omni-skills rook` | Valideer een release |
| 🔍 Hoofdgebruiker | `npx omni-skills vinden beveiliging --sorteerkwaliteit --min-kwaliteit 95` | Vind eerst de beste vaardigheid |---

## 📖 Related Documents

| Dok | Wat het omvat |
|:----|:-------------|
| 🚀 [Aan de slag](./GETTING-STARTED.md) | Installeer en verifieer in minder dan 2 minuten |
| 📗 [Gebruiksgids](./USAGE.md) | Alle CLI-opdrachten, patronen en modi |
| 📦 [Bundels](./BUNDLES.md) | Samengestelde vaardighedencollecties |
| 🔧 [Systeemrunbook](../operations/RUNBOOK.md) | Operationele referentie |
| 🔌 [Lokale MCP-zijspan](../specs/LOCAL-MCP-SIDECAR.md) | Bestandssysteemtools en configuratieschrijven |