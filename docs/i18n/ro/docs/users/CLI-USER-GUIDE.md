# 🧭 Omni Skills CLI User Guide (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Suprafața CLI publică completă livrată de `omni-skills`.**

Utilizați acest ghid atunci când doriți:

| Gol | Zona de comandă |
|:-----|:--------------|
| 📥 Instalați abilități sau pachete | [Instalare fluxuri](#3️⃣-install-flows) |
| 🔎 Căutați în catalog | [Descoperirea catalogului](#4️⃣-descoperire-catalog) |
| 🔌 Configurați clienții MCP | [MCP Client Config](#5️⃣-mcp-client-config) |
| 🖥️ Porniți serviciile MCP, API sau A2A | [MCP Server](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Utilizați shell-ul terminalului vizual | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Rulați diagnostice sau zbor prealabil | [Diagnosticare](#🔟-diagnostic-și-flight preflight) |---

## 1️⃣ Install and Entry Modes

Instalați cu `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Context | Ce se întâmplă |
|:--------|:------------|
| 🖥️ TTY + fără argumente | Deschide fluxul de**instalare ghidată**|
| ⚙️ Non-TTY + fără argumente | Instalare non-interactivă la `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Marca**Ink visual shell**|
| 📝 `npx omni-skills ui --text` | Readline**text alternativ**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Comanda | Descriere |
|:--------|:------------|
| `ui` | 🎨 hub terminal vizual |
| `găsește [interogare]` | 🔎 Descoperire catalog |
| `recategoriza` | 🏷️ Managementul taxonomiei |
| `instalați [steaguri]` | 📥 Instalare abilitate/pachet |
| `config-mcp` | 🔌 Configurare client MCP |
| `mcp <stdio\|stream\|sse>` | 🔌 Moduri server MCP |
| `api` | 🌐 Catalog API |
| `a2a` | 🤖 A2A runtime |
| `fum` | 🧪 Lansare preflight |
| `publicare-verificare` | 📦 Verificare publicare pachet |
| `doctor` | 🩺 Diagnosticarea mediului |
| `ajutor` | ❓ Referința comenzii |---

## 3️⃣ Install Flows

### Pornire rapidă

```bash
npx omni-skills
npx omni-skills install --guided
```

> Fluxul ghidat vă permite să alegeți:**client țintă**→**pachet sau abilitate**→**cale personalizată**→**previzualizare înainte de execuție**### 🎯 Single Skill

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

| Steagul | Client |
|:-----|:-------|
| `--antigravitație` | 🟣 Antigravitație *(implicit)* |
| `--claude` | 🟢 Cod Claude |
| `--cursor` | 🔵 Cursor |
| `--codex` | 🔴 Codex CLI |
| `--gemeni` | 🟡 Gemeni CLI |
| `--kiro` | 🟠 Kiro |
| `--opencode` | ⚪ OpenCode |

> Țintă de instalare implicită (non-interactivă): `~/.gemini/antigravity/skills`---

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

| Steagul | Scop |
|:-----|:--------|
| `--categorie` | Filtrați după categoria taxonomiei |
| `--instrument` | Filtrați după instrumentul acceptat |
| `--risc` | Filtrați după nivelul de risc |
| `--sort` | Sortați rezultatele (de exemplu, „calitate”) |
| `--comanda` | Ordinea de sortare |
| `--min-calitate` | Scorul minim de calitate |
| `--min-bune-practices` | Scorul minim pentru cele mai bune practici |
| `--min-level` | Nivel minim de maturitate |
| `--min-securitate` | Scorul minim de securitate |
| `--status-validare` | Filtrați după starea de validare |
| `--starea-securității` | Filtrați după starea de securitate |---

## 5️⃣ MCP Client Config

Utilizați `config-mcp` pentru a previzualiza sau a scrie configurația MCP care ține cont de client.### 📋 List Targets

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

<detalii>
<summary>🔌 <strong>Subfață client capabilă de configurare</strong></summary>

| Client | Ținte |
|:-------|:--------|
| Claude | Setări și ținte desktop |
| Cursor | Utilizator și spațiu de lucru |
| Codex | TOML config |
| Gemeni | Utilizator și spațiu de lucru |
| Antigravitație | Configurare utilizator |
| OpenCode | Utilizator și spațiu de lucru |
| Cline | Țintă de primă clasă |
| GitHub Copilot CLI | Utilizator și repo |
| Cod Kilo | Utilizator, proiect și spațiu de lucru |
| Kiro | Utilizator și spațiu de lucru |
| Zed | Spațiu de lucru |
| Cod VS | Utilizator, spațiu de lucru și Container Dev |
| Continuare | Spațiu de lucru YAML |
| Junie | Proiect și utilizator |
| Windsurf | Configurare utilizator |</details>

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

>**Local sidecar**adaugă: detectarea clientului, previzualizarea instalării, fluxurile de instalare/eliminare și scrierea configurației MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Traseu | Scop |
|:------|:--------|
| `GET /healthz` | Verificarea sănătății |
| `GET /openapi.json` | Specificație OpenAPI |
| `GET /v1/skills` | Listați toate aptitudinile |
| `GET /v1/search` | Cauta in catalog |
| `GET /v1/skills/:id/archives` | Listează arhivele pentru o abilitate |
| `GET /v1/skills/:id/download/archive?format=zip` | Descărcați arhiva de abilități |
| `GET /v1/skills/:id/download/archive/checksums` | Descărcați sumele de verificare |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Caracteristica | Stare |
|:--------|:-------|
| 🔎 Descoperire în funcție de sarcini | ✅ |
| 📋 Predarea planului de instalare | ✅ |
| 🔄 Sondaj | ✅ |
| 📡 Streaming | ✅ |
| ❌ Anulare | ✅ |
| 🔔 Configurare notificare push | ✅ |
| 💾 Persistență | Memorie, JSON și SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funcționalități

| Caracteristica | Descriere |
|:--------|:------------|
| 🧭 Instalare ghidată | Alegeți clientul sau calea personalizată |
| 🔎 Căutați + instalați | Nu este necesară memorarea steagului |
| 🔌 Configurare MCP | Previzualizați și scrieți fluxuri |
| 🖥️ Lansare serviciu | Pornire ghidată MCP, API și A2A |
| 🕐 Recente | Instalări recente și relansări de servicii |
| ⭐ Favorite | Abilități și pachete salvate |
| 💾 Presetari | Presetări de instalare și service denumite |

>**Cale de stat:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Inspectează: starea repo, starea instalării locale, disponibilitatea timpului de execuție și probleme de mediu.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Validează: construirea, testarea, ieșirea pachetului, pornirea serviciului, acoperirea scanerului și pachetul de lansare.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Comanda | Scop |
|:------------|:--------|:--------|
| 🆕 Utilizator nou | `npx omni-skills` | Instalare ghidată pentru prima dată |
| 🔧 Operator | `npx omni-skills config-mcp --list-targets` | Configurați MCP local |
| 🔧 Operator | `npx omni-skills mcp stream --local` | Porniți sidecar local |
| 📦 Mentenant | `npx omni-skills smoke` | Validați o versiune |
| 🔍 Utilizator puternic | `npx omni-skills find security --sort quality --min-quality 95` | Găsiți mai întâi cea mai bună abilitate |---

## 📖 Related Documents

| Doc | Ce acoperă |
|:----|:---------------|
| 🚀 [Noțiuni introductive](./GETTING-STARTED.md) | Instalați și verificați în mai puțin de 2 minute |
| 📗 [Ghid de utilizare](./USAGE.md) | Toate comenzile, modelele și modurile CLI |
| 📦 [Pachete](./BUNDLES.md) | Colecții de abilități organizate |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Referință operațională |
| 🔌 [Local MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Instrumente de sistem de fișiere și scriere de configurare |