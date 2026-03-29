# 🧭 Omni Skills CLI User Guide (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Den fulde offentlige CLI-overflade leveret af `omni-skills`.**

Brug denne vejledning, når du vil:

| Mål | Kommandoområde |
|:-----|:-------------|
| 📥 Installer færdigheder eller bundter | [Installationsflows](#3️⃣-install-flows) |
| 🔎 Søg i kataloget | [Catalog Discovery](#4️⃣-catalog-discovery) |
| 🔌 Konfigurer MCP-klienter | [MCP Client Config](#5️⃣-mcp-client-config) |
| 🖥️ Start MCP-, API- eller A2A-tjenester | [MCP Server](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Brug den visuelle terminalskal | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Kør diagnostik eller preflight | [Diagnostik](#🔟-diagnostik-og-preflight) |---

## 1️⃣ Install and Entry Modes

Installer med `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Kontekst | Hvad sker der |
|:--------|:------------|
| 🖥️ TTY + ingen argumenter | Åbner**guidet installation**flow |
| ⚙️ Ikke-TTY + ingen argumenter | Ikke-interaktiv installation til `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Mærkemærke**Ink visual shell**|
| 📝 `npx omni-skills ui --text` | Læselinje**tekst fallback**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Kommando | Beskrivelse |
|:--------|:--------|
| `ui` | 🎨 Visuel terminalhub |
| `find [forespørgsel]` | 🔎 Katalogopdagelse |
| `rekategoriser` | 🏷️ Taksonomistyring |
| `installer [flag]` | 📥 Færdigheds-/bundtinstallation |
| `config-mcp` | 🔌 MCP-klientkonfiguration |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP-servertilstande |
| `api` | 🌐 Katalog API |
| `a2a` | 🤖 A2A køretid |
| `røg` | 🧪 Frigiv preflight |
| `udgiv-tjek` | 📦 Tjek pakkeudgivelse |
| `læge` | 🩺 Miljødiagnostik |
| `hjælp` | ❓ Kommandoreference |---

## 3️⃣ Install Flows

### Kom hurtigt i gang

```bash
npx omni-skills
npx omni-skills install --guided
```

> Det guidede flow giver dig mulighed for at vælge:**målklient**→**bundt eller færdighed**→**tilpasset sti**→**eksempel før udførelse**### 🎯 Single Skill

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

| Flag | Kunde |
|:-----|:-------|
| `--antityngdekraft` | 🟣 Antityngdekraft *(standard)* |
| `--claude` | Claude Kode |
| `--cursor` | 🔵 Markør |
| `--codex` | 🔴 Codex CLI |
| `--gemini` | 🟡 Gemini CLI |
| `--kiro` | Kiro |
| `--opencode` | ⚪ OpenCode |

> Standardinstallationsmål (ikke-interaktivt): `~/.gemini/antigravity/skills`---

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

| Flag | Formål |
|:-----|:--------|
| `--kategori` | Filtrer efter taksonomikategori |
| `--værktøj` | Filtrer efter understøttet værktøj |
| `--risiko` | Filtrer efter risikoniveau |
| `--sort` | Sorter resultater (f.eks. "kvalitet") |
| `--ordre` | Sorteringsrækkefølge |
| `--min-kvalitet` | Minimum kvalitetsscore |
| `--min-best-practices` | Minimum score for bedste praksis |
| `--min-niveau` | Mindste løbetid |
| `--min-sikkerhed` | Minimum sikkerhedsscore |
| `--valideringsstatus` | Filtrer efter valideringstilstand |
| `--sikkerhedsstatus` | Filtrer efter sikkerhedstilstand |---

## 5️⃣ MCP Client Config

Brug `config-mcp` til at forhåndsvise eller skrive klient-bevidst MCP-konfiguration.### 📋 List Targets

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
<summary>🔌 <strong>Konfigurationskompatibel klientoverflade</strong></summary>

| Kunde | Mål |
|:-------|:--------|
| Claude | Indstillinger og skrivebordsmål |
| Markør | Bruger og arbejdsområde |
| Codex | TOML-konfiguration |
| Tvillingerne | Bruger og arbejdsområde |
| Antigravitation | Brugerkonfiguration |
| OpenCode | Bruger og arbejdsområde |
| Cline | Førsteklasses mål |
| GitHub Copilot CLI | Bruger og repo |
| Kilo kode | Bruger, projekt og arbejdsområde |
| Kiro | Bruger og arbejdsområde |
| Zed | Arbejdsplads |
| VS-kode | Bruger, arbejdsområde og Dev Container |
| Fortsæt | Arbejdsområde YAML |
| Junie | Projekt og bruger |
| Windsurfing | Brugerkonfiguration |</details>

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

>**Lokal sidevogn**tilføjer: klientgenkendelse, installationseksempel, installer/fjern flows og MCP-konfigurationsskrivning.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Rute | Formål |
|:------|:--------|
| `GET /healthz` | Sundhedstjek |
| `GET /openapi.json` | OpenAPI spec |
| `GET /v1/færdigheder` | Liste over alle færdigheder |
| `GET /v1/søg` | Søg i kataloget |
| `GET /v1/skills/:id/archives` | Liste arkiver for en færdighed |
| `GET /v1/skills/:id/download/archive?format=zip` | Download færdighedsarkiv |
| `GET /v1/skills/:id/download/archive/checksums` | Download kontrolsummer |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Funktion | Status |
|:--------|:-------|
| 🔎 Opgavebevidst opdagelse | ✅ |
| 📋 Installation-plan overdragelse | ✅ |
| 🔄 Afstemning | ✅ |
| 📡 Streaming | ✅ |
| ❌ Annullering | ✅ |
| 🔔 Push-notifikationskonfiguration | ✅ |
| 💾 Vedholdenhed | Hukommelse, JSON og SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funktioner

| Funktion | Beskrivelse |
|:--------|:--------|
| 🧭 Vejledt installation | Vælg klient eller brugerdefineret sti |
| 🔎 Søg + installer | Ingen flaghukommelse nødvendig |
| 🔌 MCP-konfiguration | Forhåndsvisning og skriv flows |
| 🖥️ Servicelancering | MCP, API og A2A guidet opstart |
| 🕐 Seneste | Seneste installationer og servicerelanceringer |
| ⭐ Favoritter | Gemte færdigheder og bundter |
| 💾 Forudindstillinger | Navngivne installations- og serviceforudindstillinger |

>**Statussti:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Inspicerer: repo-tilstand, lokal installationstilstand, runtime-tilgængelighed og miljøproblemer.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Validerer: build, test, pakkeoutput, serviceopstart, scannerdækning og release-emballage.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Kommando | Formål |
|:-----------|:--------|:--------|
| 🆕 Ny bruger | `npx omni-skills` | Guidet førstegangsinstallation |
| 🔧 Operatør | `npx omni-skills config-mcp --list-targets` | Konfigurer lokal MCP |
| 🔧 Operatør | `npx omni-skills mcp stream --local` | Start lokal sidevogn |
| 📦 Vedligeholder | `npx omni-skills røg` | Valider en udgivelse |
| 🔍 Power-bruger | `npx omni-skills find security --sort quality --min-quality 95` | Find den bedste færdighed først |---

## 📖 Related Documents

| Doc | Hvad det dækker |
|:----|:--------------|
| 🚀 [Kom godt i gang](./KOM I GANG.md) | Installer og bekræft på under 2 minutter |
| 📗 [Brugsvejledning](./USAGE.md) | Alle CLI-kommandoer, mønstre og tilstande |
| 📦 [Bundler](./BUNDLES.md) | Kurerede færdighedssamlinger |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Operationel reference |
| 🔌 [Lokal MCP-sidevogn](../specs/LOCAL-MCP-SIDECAR.md) | Filsystemværktøjer og konfigurationsskrivning |