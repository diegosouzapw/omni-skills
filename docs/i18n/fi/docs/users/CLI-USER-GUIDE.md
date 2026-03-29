# 🧭 Omni Skills CLI User Guide (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Koko julkinen CLI-pinta, jonka toimittaa "omni-skills".**

Käytä tätä opasta, kun haluat:

| Tavoite | Komentoalue |
|:-----|:--------------|
| 📥 Asenna taidot tai niput | [Asennusvirrat](#3️⃣-install-flows) |
| 🔎 Hae luettelosta | [Katalogin löytäminen](#4️⃣-catalog-discovery) |
| 🔌 Määritä MCP-asiakkaat | [MCP Client Config](#5️⃣-mcp-client-config) |
| 🖥️ Käynnistä MCP-, API- tai A2A-palvelut | [MCP-palvelin](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Käytä visuaalista päätekuorta | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Suorita diagnostiikka tai esilento | [Diagnostiikka](#🔟-diagnostics-and-preflight) |---

## 1️⃣ Install and Entry Modes

Asenna npx:llä:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Konteksti | Mitä tapahtuu |
|:--------|:-------------|
| 🖥️ TTY + ei argumentteja | Avaa**ohjatun asennuksen**-virran |
| ⚙️ Ei-TTY + ei argumentteja | Ei-interaktiivinen asennus tiedostoon `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Merkkimerkki**Musteen visuaalinen kuori**|
| 📝 `npx omni-skills ui --text` | Readline**varausteksti**Käyttöliittymä |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Komento | Kuvaus |
|:--------|:------------|
| "ui" | 🎨 Visuaalinen päätekeskus |
| `etsi [kysely]` | 🔎 Luettelon löytö |
| "luokat uudelleen" | 🏷️ Taksonomian hallinta |
| `asenna [liput] | 📥 Taito/pakettiasennus |
| `config-mcp` | 🔌 MCP-asiakasasetukset |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP-palvelintilat |
| "api" | 🌐 Catalog API |
| "a2a" | 🤖 A2A-ajoaika |
| "savu" | 🧪 Julkaise esilento |
| `julkaisu-tarkistus` | 📦 Paketin julkaisun tarkistus |
| `lääkäri` | 🩺 Ympäristödiagnostiikka |
| "apua" | ❓ Komentoviittaus |---

## 3️⃣ Install Flows

### Pikakäynnistys

```bash
npx omni-skills
npx omni-skills install --guided
```

> Ohjatun kulun avulla voit valita:**kohdeasiakas**→**paketti tai taito**→**muokattu polku**→**esikatselu ennen suoritusta**### 🎯 Single Skill

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

| Lippu | Asiakas |
|:-----|:-------|
| "--antigravitaatio" | 🟣 Antigravitaatio *(oletus)* |
| "--claude" | 🟢 Claude Code |
| "--kursori" | 🔵 Kursori |
| "--codex" | 🔴 Codex CLI |
| "--kaksoset" | 🟡 Gemini CLI |
| "--kiro" | 🟠 Kiro |
| `--avokoodi` | ⚪ OpenCode |

> Oletusasennuskohde (ei-interaktiivinen): `~/.gemini/antigravity/skills`---

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

| Lippu | Tarkoitus |
|:-----|:--------|
| "--luokka" | Suodata taksonomialuokan mukaan |
| "--työkalu" | Suodata tuetun työkalun mukaan |
| "--riski" | Suodata riskitason mukaan |
| "--sort" | Lajittele tulokset (esim. "laatu") |
| "--järjestys" | Lajittelujärjestys |
| "--min-laatu" | Vähimmäislaatupisteet |
| "--min-best-käytännöt" | Parhaiden käytäntöjen vähimmäispistemäärä |
| `--min-taso` | Vähimmäisraja |
| "--min-security" | Vähimmäisturvapisteet |
| "--validation-status" | Suodata vahvistustilan mukaan |
| "--security-status" | Suodata suojaustilan mukaan |---

## 5️⃣ MCP Client Config

Käytä "config-mcp" esikatsellaksesi tai kirjoittaaksesi asiakastietoisia MCP-määrityksiä.### 📋 List Targets

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

<tiedot>
<summary>🔌 <strong>Config-yhteensopiva asiakaspinta</strong></summary>

| Asiakas | Tavoitteet |
|:-------|:---------|
| Claude | Asetukset ja työpöytäkohteet |
| Kursori | Käyttäjä ja työtila |
| Codex | TOML-kokoonpano |
| Kaksoset | Käyttäjä ja työtila |
| Antigravitaatio | Käyttäjän konfiguraatio |
| OpenCode | Käyttäjä ja työtila |
| Cline | Ensiluokkainen tavoite |
| GitHub Copilot CLI | Käyttäjä ja repo |
| Kilo-koodi | Käyttäjä, projekti ja työtila |
| Kiro | Käyttäjä ja työtila |
| Zed | Työtila |
| VS-koodi | Käyttäjä, työtila ja kehittäjäsäilö |
| Jatka | Työtila YAML |
| Junie | Projekti ja käyttäjä |
| Purjelautailu | Käyttäjän konfiguraatio |</details>

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

>**Paikallinen sivuvaunu**lisää: asiakkaan tunnistuksen, asennuksen esikatselun, asennus-/poistovirrat ja MCP-asetusten kirjoittamisen.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Reitti | Tarkoitus |
|:------|:---------|
| "HANKI /healthz" | Terveystarkastus |
| `GET /openapi.json` | OpenAPI-spesifikaatio |
| "HANKI /v1/taidot" | Listaa kaikki taidot |
| `GET /v1/search` | Hae luettelosta |
| `HAE /v1/skills/:id/archives` | Listaa taidon arkistot |
| `GET /v1/skills/:id/download/archive?format=zip` | Lataa taitoarkisto |
| `GET /v1/skills/:id/download/archive/checksums` | Lataa tarkistussummat |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Ominaisuus | Tila |
|:--------|:-------|
| 🔎 Tehtävätietoinen löytö | ✅ |
| 📋 Asennussuunnitelman vaihto | ✅ |
| 🔄 Äänestys | ✅ |
| 📡 Suoratoisto | ✅ |
| ❌ Peruutus | ✅ |
| 🔔 Push-ilmoitusten konfiguraatio | ✅ |
| 💾 Pysyvyys | Muisti, JSON ja SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Ominaisuudet

| Ominaisuus | Kuvaus |
|:--------|:------------|
| 🧭 Ohjattu asennus | Valitse asiakas tai mukautettu polku |
| 🔎 Hae + asenna | Lippujen muistia ei tarvita |
| 🔌 MCP-asetus | Esikatsele ja kirjoitusvirtoja |
| 🖥️ Palvelun julkaisu | MCP-, API- ja A2A-opastettu käynnistys |
| 🕐 Viimeaikaiset | Viimeaikaiset asennukset ja palveluiden uudelleenjulkaisut |
| ⭐ Suosikit | Tallennetut taidot ja niput |
| 💾 Esiasetukset | Nimetyt asennuksen ja palvelun esiasetukset |

>**Osatilan polku:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Tarkistaa: repo-tilan, paikallisen asennuksen tilan, ajonaikaisen saatavuuden ja ympäristöongelmat.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Vahvistaa: koontiversio, testit, paketin tulosteet, palvelun käynnistys, skannerin kattavuus ja julkaisupakkaus.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Komento | Tarkoitus |
|:-----------|:--------|:---------|
| 🆕 Uusi käyttäjä | "npx omni-skills" | Ohjattu ensiasennus |
| 🔧 Operaattori | `npx omni-skills config-mcp --list-targets` | Määritä paikallinen MCP |
| 🔧 Operaattori | `npx omni-skills mcp stream --local` | Aloita paikallinen sivuvaunu |
| 📦 Ylläpitäjä | "npx omni-skills savu" | Vahvista julkaisu |
| 🔍 Tehokäyttäjä | `npx omni-taidot löytää turvallisuus -- lajittele laatu -- min-laatu 95` | Löydä ensin paras taito |---

## 📖 Related Documents

| Doc | Mitä se kattaa |
|:----|:---------------|
| 🚀 [Aloitus](./GETTING-STARTED.md) | Asenna ja vahvista alle 2 minuutissa |
| 📗 [Käyttöopas](./USAGE.md) | Kaikki CLI-komennot, -mallit ja -tilat |
| 📦 [Numput](./BUNDLES.md) | Kuroidut taitokokoelmat |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Toimintaviite |
| 🔌 [Paikallinen MCP-sivuvaunu](../specs/LOCAL-MCP-SIDECAR.md) | Tiedostojärjestelmätyökalut ja asetusten kirjoittaminen |