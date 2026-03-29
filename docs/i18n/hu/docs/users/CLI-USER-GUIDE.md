# 🧭 Omni Skills CLI User Guide (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**A teljes nyilvános CLI felületet az "omni-skills" szállítja.**

Használja ezt az útmutatót, ha:

| Cél | parancsnoki terület |
|:-----|:--------------|
| 📥 Készségek vagy csomagok telepítése | [Telepítési folyamatok](#3️⃣-install-flows) |
| 🔎 Keresés a katalógusban | [Katalógus felfedezése](#4️⃣-catalog-discovery) |
| 🔌 MCP-kliensek konfigurálása | [MCP Client Config](#5️⃣-mcp-client-config) |
| 🖥️ Indítsa el az MCP-, API- vagy A2A-szolgáltatásokat | [MCP-szerver](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Használja a vizuális terminál shell | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Diagnosztika futtatása vagy repülés előtti | [Diagnosztika](#🔟-diagnostics-and-preflight) |---

## 1️⃣ Install and Entry Modes

Telepítés az `npx` segítségével:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Kontextus | Mi történik |
|:--------|:-------------|
| 🖥️ TTY + nincs érv | Megnyitja az**irányított telepítés**folyamatot |
| ⚙️ Nem TTY + nincs érv | Nem interaktív telepítés a `~/.gemini/antigravity/skills` | fájlba
| 🎨 `npx omni-skills ui` | Márkás**Ink vizuális shell**|
| 📝 `npx omni-skills ui --text` | Readline**backback**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Parancs | Leírás |
|:--------|:------------|
| "ui" | 🎨 Vizuális terminál hub |
| `[lekérdezés] keresése` | 🔎 Katalógus felfedezés |
| `újrakategorizálni` | 🏷️ Taxonómia menedzsment |
| `telepíteni [flags]` | 📥 Szakértelem/csomag telepítés |
| `config-mcp` | 🔌 MCP kliens konfiguráció |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP szerver módok |
| "api" | 🌐 Katalógus API |
| "a2a" | 🤖 A2A futásidejű |
| "füstölni" | 🧪 Repülés előtti |
| "közzététel-ellenőrzés" | 📦 Csomag közzététel ellenőrzése |
| "orvos" | 🩺 Környezetdiagnosztika |
| `segítség` | ❓ Parancs hivatkozás |---

## 3️⃣ Install Flows

### Gyors kezdés

```bash
npx omni-skills
npx omni-skills install --guided
```

> Az irányított folyamat lehetővé teszi a következők kiválasztását:**célkliens**→**csomag vagy készség**→**egyéni elérési út**→**előnézet végrehajtás előtt**### 🎯 Single Skill

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

| zászló | Ügyfél |
|:-----|:-------|
| "--antigravitáció" | 🟣 Antigravitáció *(alapértelmezett)* |
| "--claude" | 🟢 Claude Code |
| "--kurzor" | 🔵 Kurzor |
| "--kódex" | 🔴 Codex CLI |
| "--gemini" | 🟡 Gemini CLI |
| "--kiro" | 🟠 Kiro |
| "--nyitott kód" | ⚪ OpenCode |

> Alapértelmezett telepítési cél (nem interaktív): `~/.gemini/antigravity/skills`---

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

| zászló | Cél |
|:-----|:---------|
| "--kategória" | Szűrés taxonómiai kategória szerint |
| "--eszköz" | Szűrés támogatott eszköz szerint |
| "--kockázat" | Szűrés kockázati szint szerint |
| "--rendezés" | Eredmények rendezése (pl. "minőség") |
| "--rend" | Rendezési sorrend |
| "--min-minőség" | Minimális minőségi pontszám |
| "--min-best Practices" | Minimális bevált gyakorlatok pontszáma |
| `--min-szint` | Minimális lejárati szint |
| "--min-security" | Minimális biztonsági pontszám |
| "--validation-status" | Szűrés érvényesítési állapot szerint |
| "--biztonsági állapot" | Szűrés biztonsági állapot szerint |---

## 5️⃣ MCP Client Config

A "config-mcp" segítségével megtekintheti vagy megírhatja a kliens-tudatos MCP konfigurációt.### 📋 List Targets

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

<részletek>
<summary>🔌 <strong>Konfigurálható ügyfélfelület</strong></summary>

| Ügyfél | Célok |
|:-------|:---------|
| Claude | Beállítások és asztali célok |
| Kurzor | Felhasználó és munkaterület |
| Codex | TOML konfiguráció |
| Ikrek | Felhasználó és munkaterület |
| Antigravitáció | Felhasználói konfiguráció |
| OpenCode | Felhasználó és munkaterület |
| Cline | Első osztályú célpont |
| GitHub Copilot CLI | Felhasználó és repo |
| Kilo Code | Felhasználó, projekt és munkaterület |
| Kiro | Felhasználó és munkaterület |
| Zed | Munkaterület |
| VS kód | Felhasználó, munkaterület és fejlesztői tároló |
| Folytatás | Munkaterület YAML |
| Junie | Projekt és felhasználó |
| Szörf | Felhasználói konfiguráció |</details>

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

> A**Helyi oldalkocsi**a következőkkel egészül ki: ügyfélérzékelés, telepítési előnézet, telepítési/eltávolítási folyamatok és MCP-konfiguráció írása.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Útvonal | Cél |
|:------|:---------|
| "GET /healthz" | állapotfelmérés |
| `GET /openapi.json` | OpenAPI specifikáció |
| `GET /v1/skills` | Sorolja fel az összes készséget |
| `GET /v1/search` | Keresés a katalógusban |
| `GET /v1/skills/:id/archives` | Az archívumok listázása egy készséghez |
| `GET /v1/skills/:id/download/archive?format=zip` | Képességarchívum letöltése |
| `GET /v1/skills/:id/download/archive/checksums` | Ellenőrző összegek letöltése |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Funkció | Állapot |
|:--------|:-------|
| 🔎 Feladattudatos felfedezés | ✅ |
| 📋 Telepítési terv átadás | ✅ |
| 🔄 Szavazás | ✅ |
| 📡 Streaming | ✅ |
| ❌ Lemondás | ✅ |
| 🔔 Push-értesítési konfiguráció | ✅ |
| 💾 Kitartás | Memória, JSON és SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funkciók

| Funkció | Leírás |
|:--------|:------------|
| 🧭 Irányított telepítés | Válasszon klienst vagy egyéni elérési utat |
| 🔎 Keresés + telepítés | Nincs szükség zászló memorizálására |
| 🔌 MCP konfiguráció | Folyamatok előnézete és írása |
| 🖥️ Szolgáltatás elindítása | MCP, API és A2A irányított indítás |
| 🕐 Legutóbbi | Legutóbbi telepítések és szolgáltatások újraindításai |
| ⭐ Kedvencek | Mentett készségek és csomagok |
| 💾 Előbeállítások | Elnevezett telepítési és szolgáltatási előbeállítások |

>**Állam elérési útja:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Ellenőrzi: repo állapot, helyi telepítés állapota, futásidejű elérhetőség és környezeti problémák.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Érvényesíti: összeállítás, tesztek, csomagkimenet, szolgáltatásindítás, szkenner lefedettség és kiadási csomagolás.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Parancs | Cél |
|:-----------|:--------|:---------|
| 🆕 Új felhasználó | "npx omni-skills" | Irányított első telepítés |
| 🔧 Üzemeltető | `npx omni-skills config-mcp --list-targets` | Helyi MCP konfigurálása |
| 🔧 Üzemeltető | `npx omni-skills mcp stream --local` | Helyi oldalkocsi indítása |
| 📦 Karbantartó | `npx omni-skills smoke` | Kiadás érvényesítése |
| 🔍 Erőteljes felhasználó | `npx omni-skills biztonságot talál --sort quality --min-quality 95` | Találja meg először a legjobb képességet |---

## 📖 Related Documents

| Doc | Mit takar |
|:----|:---------------|
| 🚀 [Kezdő lépések](./GETTING-STARTED.md) | Telepítés és ellenőrzés 2 percen belül |
| 📗 [Használati útmutató](./USAGE.md) | Minden CLI-parancs, minta és mód |
| 📦 [Csomagok](./BUNDLES.md) | Felkészült készséggyűjtemények |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Működési referencia |
| 🔌 [Helyi MCP-oldalkocsi](../specs/LOCAL-MCP-SIDECAR.md) | Fájlrendszer-eszközök és konfigurációk írása |