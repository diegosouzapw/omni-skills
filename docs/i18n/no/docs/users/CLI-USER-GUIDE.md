# 🧭 Omni Skills CLI User Guide (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Den fullstendige offentlige CLI-overflaten sendes av `omni-skills`.**

Bruk denne veiledningen når du vil:

| Mål | Kommandoområde |
|:-----|:-------------|
| 📥 Installer ferdigheter eller pakker | [Install Flows](#3️⃣-install-flows) |
| 🔎 Søk i katalogen | [Catalog Discovery](#4️⃣-catalog-discovery) |
| 🔌 Konfigurer MCP-klienter | [MCP Client Config](#5️⃣-mcp-client-config) |
| 🖥️ Start MCP-, API- eller A2A-tjenester | [MCP Server](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Bruk det visuelle terminalskallet | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Kjør diagnostikk eller preflight | [Diagnostikk](#🔟-diagnostikk-og-preflight) |---

## 1️⃣ Install and Entry Modes

Installer med `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Kontekst | Hva skjer |
|:--------|:------------|
| 🖥️ TTY + ingen argumenter | Åpner flyten for**veiledet installasjon**|
| ⚙️ Ikke-TTY + ingen argumenter | Ikke-interaktiv installering til `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Merket**Ink visual shell**|
| 📝 `npx omni-skills ui --text` | Leselinje**tekstreserve**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Kommando | Beskrivelse |
|:--------|:--------|
| `ui` | 🎨 Visuell terminalhub |
| `finn [søk]` | 🔎 Katalogfunn |
| `rekategorisere` | 🏷️ Taksonomistyring |
| `installer [flagg]` | 📥 Installasjon av ferdigheter/pakke |
| `config-mcp` | 🔌 MCP-klientkonfigurasjon |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP-servermoduser |
| `api` | 🌐 Katalog API |
| `a2a` | 🤖 A2A kjøretid |
| `røyk` | 🧪 Slipp forhåndsflyging |
| `publiseringssjekk` | 📦 Pakkepubliseringssjekk |
| `lege` | 🩺 Miljødiagnostikk |
| `hjelp` | ❓ Kommandoreferanse |---

## 3️⃣ Install Flows

### Hurtigstart

```bash
npx omni-skills
npx omni-skills install --guided
```

> Den guidede flyten lar deg velge:**målklient**→**pakke eller ferdighet**→**egendefinert bane**→**forhåndsvisning før utførelse**### 🎯 Single Skill

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

| Flagg | Kunde |
|:-----|:-------|
| `--antigravitasjon` | 🟣 Antigravitasjon *(standard)* |
| `--claude` | Claude Kode |
| `--markør` | 🔵 Markør |
| `--codex` | 🔴 Codex CLI |
| `--tvilling` | 🟡 Gemini CLI |
| `--kiro` | Kiro |
| `--opencode` | ⚪ OpenCode |

> Standard installasjonsmål (ikke-interaktivt): `~/.gemini/antigravity/skills`---

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

| Flagg | Formål |
|:-----|:--------|
| `--kategori` | Filtrer etter taksonomikategori |
| `--verktøy` | Filtrer etter støttet verktøy |
| `--risiko` | Filtrer etter risikonivå |
| `--sort` | Sorter resultater (f.eks. "kvalitet") |
| `--ordre` | Sorteringsrekkefølge |
| `--min-kvalitet` | Minste kvalitetspoengsum |
| `--min-beste-praksis` | Minste poengsum for beste praksis |
| `--min-nivå` | Minimum forfallsnivå |
| `--min-sikkerhet` | Minste sikkerhetspoengsum |
| `--valideringsstatus` | Filtrer etter valideringstilstand |
| `--sikkerhetsstatus` | Filtrer etter sikkerhetstilstand |---

## 5️⃣ MCP Client Config

Bruk `config-mcp` for å forhåndsvise eller skrive klientbevisst MCP-konfigurasjon.### 📋 List Targets

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

<detaljer>
<summary>🔌 <strong>Konfigurasjonskompatibel klientoverflate</strong></summary>

| Kunde | Mål |
|:-------|:--------|
| Claude | Innstillinger og skrivebordsmål |
| Markør | Bruker og arbeidsområde |
| Codex | TOML-konfigurasjon |
| Tvillingene | Bruker og arbeidsområde |
| Antigravitasjon | Brukerkonfigurasjon |
| OpenCode | Bruker og arbeidsområde |
| Cline | Førsteklasses mål |
| GitHub Copilot CLI | Bruker og repo |
| Kilokode | Bruker, prosjekt og arbeidsområde |
| Kiro | Bruker og arbeidsområde |
| Zed | Arbeidsområde |
| VS-kode | Bruker, arbeidsområde og Dev Container |
| Fortsett | Arbeidsområde YAML |
| Junie | Prosjekt og bruker |
| Vindsurfing | Brukerkonfigurasjon |</details>

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

>**Lokal sidevogn**legger til: klientdeteksjon, installeringsforhåndsvisning, installer/fjern flyter og MCP-konfigurasjonsskriving.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Rute | Formål |
|:------|:--------|
| `GET /helse` | Helsesjekk |
| `GET /openapi.json` | OpenAPI-spesifikasjon |
| `GET /v1/skills` | Liste alle ferdigheter |
| `GET /v1/søk` | Søk i katalogen |
| `GET /v1/skills/:id/archives` | Liste arkiver for en ferdighet |
| `GET /v1/skills/:id/download/archive?format=zip` | Last ned ferdighetsarkiv |
| `GET /v1/skills/:id/download/archive/checksums` | Last ned sjekksummer |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Funksjon | Status |
|:--------|:-------|
| 🔎 Oppgavebevisst oppdagelse | ✅ |
| 📋 Overlevering av installasjonsplan | ✅ |
| 🔄 Avstemning | ✅ |
| 📡 Streaming | ✅ |
| ❌ Avbestilling | ✅ |
| 🔔 Push-varslingskonfigurasjon | ✅ |
| 💾 Utholdenhet | Minne, JSON og SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funksjoner

| Funksjon | Beskrivelse |
|:--------|:--------|
| 🧭 Veiledet installasjon | Velg klient eller tilpasset bane |
| 🔎 Søk + installer | Ingen flaggminne er nødvendig |
| 🔌 MCP-konfigurasjon | Forhåndsvis og skriv flyter |
| 🖥️ Tjenestelansering | MCP, API og A2A guidet oppstart |
| 🕐 Nylig | Nylige installasjoner og relanseringer av tjenester |
| ⭐ Favoritter | Lagrede ferdigheter og bunter |
| 💾 Forhåndsinnstillinger | Navngitte forhåndsinnstillinger for installasjon og service |

>**Tilstandsbane:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Inspiserer: repo-status, lokal installasjonstilstand, kjøretidstilgjengelighet og miljøproblemer.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Validerer: build, tester, pakkeutgang, serviceoppstart, skannerdekning og utgivelsespakke.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Kommando | Formål |
|:-----------|:--------|:--------|
| 🆕 Ny bruker | `npx omni-skills` | Veiledet førstegangsinstallasjon |
| 🔧 Operatør | `npx omni-skills config-mcp --list-targets` | Konfigurer lokal MCP |
| 🔧 Operatør | `npx omni-skills mcp stream --local` | Start lokal sidevogn |
| 📦 Vedlikeholder | `npx omni-skills smoke` | Valider en utgivelse |
| 🔍 Strømbruker | `npx omni-skills find security --sort quality --min-quality 95` | Finn den beste ferdigheten først |---

## 📖 Related Documents

| Dok | Hva det dekker |
|:----|:--------------|
| 🚀 [Kom i gang](./KOM I GANG.md) | Installer og verifiser på under 2 minutter |
| 📗 [Bruksveiledning](./USAGE.md) | Alle CLI-kommandoer, mønstre og moduser |
| 📦 [Bundler](./BUNDLES.md) | Kuraterte ferdighetssamlinger |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Driftsreferanse |
| 🔌 [Local MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Filsystemverktøy og konfigurasjonsskriving |