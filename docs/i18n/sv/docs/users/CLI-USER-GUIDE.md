# 🧭 Omni Skills CLI User Guide (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Den fullständiga offentliga CLI-ytan skickas av "omni-skills".**

Använd den här guiden när du vill:

| Mål | Kommandoområde |
|:-----|:-------------|
| 📥 Installera färdigheter eller paket | [Installationsflöden](#3️⃣-installationsflöden) |
| 🔎 Sök i katalogen | [Catalog Discovery](#4️⃣-catalog-discovery) |
| 🔌 Konfigurera MCP-klienter | [MCP Client Config](#5️⃣-mcp-client-config) |
| 🖥️ Starta MCP-, API- eller A2A-tjänster | [MCP-server](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Använd det visuella terminalskalet | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Kör diagnostik eller preflight | [Diagnostik](#🔟-diagnostik-och-förflygning) |---

## 1️⃣ Install and Entry Modes

Installera med `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Sammanhang | Vad händer |
|:--------|:------------|
| 🖥️ TTY + inga argument | Öppnar flödet för**guidad installation**|
| ⚙️ Icke-TTY + inga argument | Icke-interaktiv installation till `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Märkt**Ink visuellt skal**|
| 📝 `npx omni-skills ui --text` | Readline**text reserv**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Kommando | Beskrivning |
|:--------|:--------|
| `ui` | 🎨 Visual terminal hub |
| `hitta [fråga]` | 🔎 Katalogupptäckt |
| `omkategorisera` | 🏷️ Taxonomy management |
| `installera [flaggor]` | 📥 Skicklighet/paketinstallation |
| `config-mcp` | 🔌 MCP-klientkonfiguration |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP-serverlägen |
| `api` | 🌐 Katalog API |
| `a2a` | 🤖 A2A körtid |
| `rök` | 🧪 Släpp preflight |
| `publiceringskontroll` | 📦 Kolla paketpublicering |
| `läkare` | 🩺 Miljödiagnostik |
| `hjälp` | ❓ Kommandoreferens |---

## 3️⃣ Install Flows

### Snabbstart

```bash
npx omni-skills
npx omni-skills install --guided
```

> Det guidade flödet låter dig välja:**målklient**→**paket eller färdighet**→**anpassad sökväg**→**förhandsgranskning före körning**### 🎯 Single Skill

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

| Flagga | Kund |
|:-----|:-------|
| `--antigravitation` | 🟣 Antigravitation *(standard)* |
| `--claude` | Claude Kod |
| `--markör` | 🔵 Markör |
| `--codex` | 🔴 Codex CLI |
| `--tvillingarna` | Gemini CLI |
| `--kiro` | Kiro |
| `--opencode` | ⚪ OpenCode |

> Standardinstallationsmål (icke-interaktivt): `~/.gemini/antigravity/skills`---

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

| Flagga | Syfte |
|:-----|:--------|
| `--kategori` | Filtrera efter taxonomikategori |
| `--verktyg` | Filtrera efter verktyg som stöds |
| `--risk` | Filtrera efter risknivå |
| `--sortera` | Sortera resultat (t.ex. "kvalitet") |
| `--order` | Sorteringsordning |
| `--min-kvalitet` | Lägsta kvalitetspoäng |
| `--min-best-practices` | Minsta poäng för bästa praxis |
| `--min-nivå` | Minsta löptid |
| `--min-säkerhet` | Lägsta säkerhetspoäng |
| `--validation-status` | Filtrera efter valideringstillstånd |
| `--säkerhetsstatus` | Filtrera efter säkerhetsstatus |---

## 5️⃣ MCP Client Config

Använd `config-mcp` för att förhandsgranska eller skriva klientmedveten MCP-konfiguration.### 📋 List Targets

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
<summary>🔌 <strong>Konfigurationskompatibel klientyta</strong></summary>

| Kund | Mål |
|:-------|:--------|
| Claude | Inställningar och skrivbordsmål |
| Markör | Användare och arbetsyta |
| Codex | TOML config |
| Tvillingarna | Användare och arbetsyta |
| Antigravitation | Användarkonfiguration |
| OpenCode | Användare och arbetsyta |
| Cline | Förstklassigt mål |
| GitHub Copilot CLI | Användare och repo |
| Kilokod | Användare, projekt och arbetsyta |
| Kiro | Användare och arbetsyta |
| Zed | Arbetsyta |
| VS-kod | Användare, arbetsyta och Dev Container |
| Fortsätt | Arbetsyta YAML |
| Junie | Projekt och användare |
| Vindsurfa | Användarkonfiguration |</details>

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

>**Lokal sidovagn**lägger till: klientidentifiering, installationsförhandsgranskning, installera/ta bort flöden och MCP-konfigurationsskrivning.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Rutt | Syfte |
|:------|:--------|
| `GET /healthz` | Hälsokontroll |
| `GET /openapi.json` | OpenAPI spec |
| `GET /v1/skills` | Lista alla färdigheter |
| `GET /v1/sök` | Sök i katalogen |
| `GET /v1/skills/:id/archives` | Lista arkiv för en färdighet |
| `GET /v1/skills/:id/download/archive?format=zip` | Ladda ner skicklighetsarkiv |
| `GET /v1/skills/:id/download/archive/checksums` | Ladda ner kontrollsummor |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Funktion | Status |
|:--------|:-------|
| 🔎 Uppgiftsmedveten upptäckt | ✅ |
| 📋 Överlämning av installationsplan | ✅ |
| 🔄 Omröstning | ✅ |
| 📡 Streaming | ✅ |
| ❌ Avbokning | ✅ |
| 🔔 Push-notifieringskonfiguration | ✅ |
| 💾 Uthållighet | Minne, JSON och SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funktioner

| Funktion | Beskrivning |
|:--------|:--------|
| 🧭 Guidad installation | Välj klient eller anpassad sökväg |
| 🔎 Sök + installera | Ingen flaggminne behövs |
| 🔌 MCP-konfiguration | Förhandsgranska och skriv flöden |
| 🖥️ Tjänstlansering | MCP, API och A2A guidad start |
| 🕐 Senaste | Senaste installationer och nylanseringar av tjänster |
| ⭐ Favoriter | Sparade färdigheter och paket |
| 💾 Förinställningar | Namngivna installations- och serviceförinställningar |

>**Statussökväg:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Inspekterar: repo-tillstånd, lokal installationstillstånd, körtidstillgänglighet och miljöproblem.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Validerar: build, tester, paketutdata, servicestart, skannertäckning och releasepaket.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Kommando | Syfte |
|:-----------|:--------|:--------|
| 🆕 Ny användare | `npx omni-skills` | Guidad förstagångsinstallation |
| 🔧 Operatör | `npx omni-skills config-mcp --list-targets` | Konfigurera lokal MCP |
| 🔧 Operatör | `npx omni-skills mcp stream --local` | Starta lokal sidovagn |
| 📦 Underhållare | `npx omni-skills smoke` | Validera en release |
| 🔍 Avancerad användare | `npx omni-skills hitta säkerhet --sort quality --min-quality 95` | Hitta den bästa färdigheten först |---

## 📖 Related Documents

| Doc | Vad det omfattar |
|:----|:-------------|
| 🚀 [Komma igång](./KOMMA Igång.md) | Installera och verifiera på mindre än 2 minuter |
| 📗 [Användningsguide](./USAGE.md) | Alla CLI-kommandon, mönster och lägen |
| 📦 [Bundlar](./BUNDLES.md) | Kurerade färdighetssamlingar |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Operationell referens |
| 🔌 [Local MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Filsystemverktyg och konfigurationsskrivning |