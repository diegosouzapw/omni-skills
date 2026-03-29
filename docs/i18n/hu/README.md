# 🧠 Omni Skills (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**A készségkatalógus, amely önmagát telepíti.**<br/>
CLI · API · MCP · A2A – mindez egyetlen "npx" parancsból.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Telepítés 1 percen belül](#-telepítés) · [🛠️ Válassza ki az eszközt](#-choose-your-tool) · [📖 CLI útmutató](docs/users/CLI-USER-GUIDE.md) · [📦 Csomagok](docs/users/BUNDLES.md) Futásidejű [](🔌) Miért futásidejű Omni Skills](#-why-omni-skills)</div>

---

<div align="center">

### Áttekintés

</div>

| | Metrikus | Érték |
|:--|:-------|:------|
| 📦 |**Publicated Skills**| "32" 15 aktív kategóriában |
| 🎯 |**Csomagok**| `7` teljesen alátámasztott válogatott csomagok |
| 🖥️ |**Kliensek telepítése**| "7" telepítésre alkalmas AI kódoló asszisztensek |
| 🔌 |**MCP-kliensek**| `16` MCP-konfigurációra alkalmas kliensek |
| 🔐 |**Kurált kimenet**| `32` továbbfejlesztett angol származékok a `skills_omni/` |
| 📋 |**Jelenlegi kiadás**| "v0.1.2" |---

## Gyors kezdés

>**AI kódolási készségeket, Claude Code készségeket, kurzor készségeket, Codex CLI készségeket, Gemini CLI készségeket, Antigravitációs készségeket vagy telepíthető SKILL.md könyvtárakat keresett?**
> Jó helyen jársz.### 1️⃣ What is this?

Az Omni Skills egy**telepíthető készségkatalógus és futási idő**az AI kódoló asszisztensek számára. Lényegében ez az újrafelhasználható `SKILL.md` játékkönyvek nyilvános tárháza – de az egyszerű készséggyűjteményekkel ellentétben a repo**egy**a terjesztési és futási réteg.

<részletek>
<summary>📋 <strong>Mit tartalmaz</strong></summary>

| Alkatrész | Leírás |
|:----------|:-----------|
| 🧠**Készségek**| SKILL.md-alapú játékkönyvek AI-asszisztensek számára
| 📦**Manifests**| Létrehozott JSON-jegyzékek, csomagok és archívumok |
| 🧭**Irányított telepítés**| Interaktív TTY és vizuális terminál telepítési folyamatok |
| 🌐**Katalógus API**| Csak olvasható HTTP API kereséshez, felfedezéshez és letöltésekhez |
| 🔌**MCP szerver**| Felfedezési, ajánlási és ügyfélbarát konfigurációs eszközök |
| 🤖**A2A futásidejű**| Ügynök-ügynök feladatszervezés |
| ✨**Enhancement Pipeline**| A Private Enhancer a válogatott angol származékokat a `skills_omni/` |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Használja a `@brainstorming" kifejezést SaaS MVP megtervezéséhez."*
>
> 💬 *"A `@api-design` használatával tekintse át ezt a végponttervet."*
>
> 💬 *"A regresszió elkülönítéséhez használja a "@debugging" parancsot."*### 5️⃣ Start with a bundle

| 🎯 Cél | Csomag | Parancs |
|:---------|:-------|:--------|
| Általános gépészet | `essentials` | `npx omni-skills --csomag lényegi elemei` |
| Termék + alkalmazás kézbesítés | `full-stack` | `npx omni-skills --bundle full-stack` |
| Tervező rendszerek | "tervezés" | `npx omni-skills --bundle design` |
| Biztonsági felülvizsgálat | "biztonság" | `npx omni-skills -- csomagbiztonság` |
| Infra és kiadás | `devops` | `npx omni-skills --bundle devops` |
| LLM alkalmazások | "ai-mérnök" | `npx omni-skills --bundle ai-engineer` |
| OSS karbantartás | "oss-fenntartó" | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

A csomagok összehasonlítása vagy a telepítési útvonal kiválasztása előtt az alábbi öt építőelem megértése segít:

| koncepció | Mit jelent |
|:--------|:--------------|
| 🧠**Készségek**| Újrafelhasználható `SKILL.md` játékkönyvek, amelyek megtanítják az asszisztenst a munkafolyamatok megfelelő végrehajtására |
| 📦**Katalógus-termékek**| Létrehozott JSON és archív kimenetek, amelyek lehetővé teszik a keresést, az összehasonlítást, a letöltést és a telepítést |
| 🔌**MCP Config**| Kliensoldali konfiguráció az asszisztensek számára az Omni készségek felfedezéséhez az MCP-eszközökön keresztül |
| 🤖**A2A futásidejű**| Ügynökök közötti irányítás a felfedezéshez, ajánlásokhoz és telepítési terv átadáshoz |
| ✨**Kurált kimenet**| `skills_omni/` – az Omni által karbantartott továbbfejlesztett felület, külön a natív upstream beviteltől |

>**📝 Natív/Kurált irányelv:**
> - A `skills/` bármilyen nyelven elfogadja a natív upstream bevitelt
> - A `skills_omni/` mindig angol nyelven kerül összeállításra és közzétételre
> - A `skills_omni/` egy egyirányú felület, és nem lép vissza a natív bevitelbe---

## 💡 Why Omni Skills

>**Nem csak „egy másik tárhely a mappákban való készségekkel”.**
> Az Omni Skills erősebb szerződéssel és szélesebb futásidejű felülettel rendelkezik.

| Ha szeretné… | 📁 Tipikus készségek repo | ✨ Omni Skills |
|:-------------|:-----------------------|:---------------|
| Telepítés valódi asszisztensbe | Kézi másolás vagy egyéni szkript | "npx omni-skills", irányított telepítés, vizuális felhasználói felület, szelektív "--skill" és "--bundle" |
| Készségek keresése és összehasonlítása | Böngésszen manuális jelölések | Generált katalógus, szűrés, csomagtervezés, keresés, összehasonlítás és ajánlás |
| Használja ugyanazokat az adatokat az eszközök között | Szerszámonként külön logika | Megosztott jegyzékek és katalógus a CLI, API, MCP és A2A |
| MCP-kliensek konfigurálása | Fájlok kézi szerkesztése | `config-mcp`, helyi oldalkocsi előnézetek, generált receptek és engedélyezési listán szereplő írások |
| Trust kiadások | Legjobb erőfeszítést igénylő csomagolás | Ellenőrző összegek, aláírt archívumok, szkenner-ellenőrzés, CI kiadása és elővizsgálat közzététele |
| A közösség felvételének kurátora | Bármilyen föld is marad, ahogy van | Natív bevitel a `skills/`-ben, kurált angol származékok a `skills_omni/`-ben forrásmegjelöléssel |---

## 🖥️ Compatibility and Invocation

Ezek a készségek a "SKILL.md" modellt követik, és normál tárolóként is használhatók, de a csomag széles felületen is telepíti és konfigurálja őket:

>**7**telepítésre képes kliensek ·**16**MCP-konfigurációra alkalmas kliensek### 🎯 Install-Capable Clients

| Szerszám | Típus | Meghívás példa | Útvonal telepítése |
|:-----|:-----|:--------------------|:--------------|
| 🟢**Claude Code**| CLI | `Használjon ötletbörzét egy funkció megtervezéséhez' | "~/.claude/skills" |
| 🔵**Kurzor**| IDE | `@brainstorming segít megtervezni egy szolgáltatást` | "~/.kurzor/készségek" |
| 🟡**Gemini CLI**| CLI | `Használjon ötletbörzét egy funkció megtervezéséhez' | "~/.gemini/skills" |
| 🔴**Codex CLI**| CLI | `Használjon ötletbörzét egy funkció megtervezéséhez' | "~/.codex/skills" |
| 🟠**Kiro**| CLI / IDE | `Használjon ötletbörzét egy funkció megtervezéséhez' | "~/.kiro/skills" |
| 🟣**Antigravitáció**| IDE | `Használja a @brainstorming funkciót egy funkció megtervezéséhez` | "~/.gemini/antigravitation/skills" |
| ⚪**OpenCode**| CLI | `nyílt kód futtatása @brainstorming` | `<munkaterület>/.opencode/skills` |

<részletek>
<summary>🔌 <strong>Az MCP-konfiguráció szélesebb lefedettsége (16 ügyfél)</strong></summary>

Ezek a célok a támogatott MCP konfigurációs felület részét képezik, még akkor is, ha nem a készségkönyvtárak telepítési célpontjai:

| Kliens vagy felület | Támogatás típusa | Megjegyzések |
|:------------------|:-------------|:------|
| Claude beállítások és az asztal | MCP konfiguráció | Beállítások, asztali és projekt-tudatos folyamatok |
| VS kód | MCP konfiguráció | Felhasználói, munkaterületi, bennfentesek és fejlesztői tárolócélok |
| Ikrek | MCP konfiguráció | Felhasználói és munkaterületi beállítások |
| Cline | MCP konfiguráció | Első osztályú konfigurációs cél |
| GitHub Copilot CLI | MCP konfiguráció | Felhasználói és repo konfigurációs célok |
| Folytatás | MCP konfiguráció | Workspace YAML generáció |
| Szörf | MCP konfiguráció | Felhasználói konfiguráció cél |
| Zed | MCP konfiguráció | Munkaterület konfigurációs cél |
| liba | MCP konfiguráció | Felhasználói konfigurációs cél generált recepttel |
| Kilo Code | MCP konfiguráció | Felhasználói, projekt- és munkaterületi célok |
| Junie | MCP konfiguráció | Projekt- és felhasználói konfigurációs célok |</details>

---

## Telepítés

<tábla>
<tr>
<td width="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Szerszám | Parancs telepítése | Első használat |
|:-----|:---------------|:-----------|
| 🟢 Claude Code | `npx omni-skills --claude` | `Használjon ötletbörzét egy funkció megtervezéséhez' |
| 🔵 Kurzor | `npx omni-skills --kurzor` | `@brainstorming segít megtervezni egy szolgáltatást` |
| 🟡 Gemini CLI | `npx omni-skills --gemini` | `Használjon ötletbörzét egy funkció megtervezéséhez' |
| 🔴 Codex CLI | `npx omni-skills --codex` | `Használjon ötletbörzét egy funkció megtervezéséhez' |
| 🟣 Antigravitáció | `npx omni-skills --antigravitation` *(alapértelmezett)* | `Használja a @brainstorming funkciót egy funkció megtervezéséhez` |
| 🟠 Kiro | `npx omni-skills --kiro` | `Használjon ötletbörzét egy funkció megtervezéséhez' |
| ⚪ OpenCode | `npx omni-skills --opencode` | `nyílt kód futtatása @brainstorming` |
| 📂 Egyéni útvonal | `npx omni-skills --path ./my-skills` | A szerszámtól függ |

> 📖**Nem tudja, hol kezdje?**
> - [🚀 Kezdő lépések](docs/users/GETTING-STARTED.md) – telepítse és ellenőrizze 2 percen belül
> - [🧭 CLI felhasználói kézikönyv](docs/users/CLI-USER-GUIDE.md) – teljes parancshivatkozás
> - [📗 Használati útmutató](docs/users/USAGE.md) – promptok, minták és futási módok---

## 🔌 Runtime Surfaces

Az Omni Skills nem csak a készségek könyvtára.**négy futásidejű felületet**tesz közzé, amelyek ugyanazt a generált katalógust fogyasztják:

| Felület | állam | Mit csinál | Példa |
|:--------|:------|:-------------|:---------|
| 🖥️**CLI**| ✅ Elérhető | Keresés, telepítés, diagnosztizálás, vizuális felhasználói felület, rendszerindítási szolgáltatások, füstellenőrzés | `npx omni-skills doctor` |
| 🌐**Katalógus API**| ✅ Elérhető | Csak olvasható katalógus, keresés, csomagok, összehasonlítás, tervek telepítése, letöltések | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Elérhető | Felfedezés, ajánlás, telepítési előnézet, helyi oldalkocsi, konfigurációs folyamatok | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ Elérhető | Feladat életciklusa, átadás, lekérdezés, adatfolyam, törlés, fennmaradás | `npx omni-skills a2a --port 3335` |

<részletek>
<summary>🖥️ <strong>Vizuális shell- és operátorparancsok</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<részletek>
<summary>🔌 <strong>MCP-átvitelek és konfigurációk</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Metrikus | Gróf |
|:-------|:------|
| 🧠 Megjelent készségek |**32**|
| 📂 Aktív kategóriák |**15**|
| 📦 Teljesen alátámasztott csomagok |**7**|
| ✨ Kurált származékok |**32**a `skills_omni/` |### 📦 Bundle Availability

| Csomag | Készségek | Tagok |
|:-------|:--------|:--------|
| 🧰 `essentials` |**4/4**✅ | `készségek keresése` · `agyalás` · `architektúra` · `hibakeresés` |
| 🌐 `full-stack` |**5/5**✅ | "frontend-design" · "api-design" · "adatbázis-design" · "omni-figma" · "auth-flows" |
| 🎨 `design` |**5/5**✅ | "frontend-design" · "omni-figma" · "design-systems-ops" · "accessibility-audit" · "design-token-governance" |
| 🛡️ `biztonság` |**4/4**✅ | `security-auditor` · `sebezhetőség-ellenőrző` · `incidens-válasz` · `fenyegetés-modellezés` |
| ⚙️ `devops` |**5/5**✅ | "docker-expert" · "kubernetes" · "terraform" · "megfigyelhetőség-felülvizsgálat" · "kiadási tervezés" |
| 🤖 `ai-mérnök` |**7/7**✅ | "rag-engineer" · "prompt-engineer" · "llm-patterns" · "eval-design" · "context-engineering" · "adat-szerződések" · "modell-szolgáltatás" |
| 🔧 `oss-karbantartó` |**4/4**✅ | „find-skills” · „create-pr” · „changelog” · „dokumentáció” |### ✨ Native Intake → Curated Output

| Felület | Cél | Nyelv |
|:--------|:--------|:----------|
| 📥 `készségek/` | Natív bevitel | Bármilyen nyelv |
| ✨ `skills_omni/` | Összegyűjtött, teljes körűen karbantartott kimenet | Mindig angol |

>**ℹ️**A natív készségek változásait a privát fejlesztő újradolgozza, és a kurált alaphelyzetben frissíti. Ez teszi a `skills_omni/`**karbantartott katalógusfelületet**, nem pedig egy második példányt.---

## 🛡️ Security and Release Posture

> Az Omni Skills erősebb kiadási és ellenőrzési történetet kínál, mint egy egyszerű leárazási adattár.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<részletek>
<summary>📋 <strong>Amit a folyamat érvényesít</strong></summary>

- ✅ Készségek ellenőrzése és metaadatok generálása
- ✅ Taxonómia normalizálási és újrakategorizáló eszközök
- ✅ Katalógus és archívum generálás
- ✅ Automatizált tesztek
- ✅ API, MCP és A2A rendszerindítási útvonalak
- ✅ Archívum ellenőrzése
- ✅ Csomag előfuvarozása `npm pack --dry-run` funkcióval</details>

<részletek>
<summary>🔐 <strong>A testtartás felengedése</strong></summary>

| Control | Leírás |
|:--------|:------------|
| 🔒 SHA-256 ellenőrző összegek | Az összes archívum ellenőrzőösszeg-jegyzékei |
| ✍️ Aláírt tárgyak | Leválasztott aláírások a kiadási műtermékekről |
| 🤖 CI által kikényszerített | Kibocsátás ellenőrzése a CI-ben a közzététel előtt |
| 🦠 Szkenner kapuk | ClamAV és VirusTotal-kapuzott kiadási folyamat |
| 📦 GitHub kiadás | Automatizált GitHub kiadás generálása |
| 📋 npm kiadvány | Csak ellenőrzött tarballból |
| 🔄 Automatikus kioldás | Minősítéskor a készség összeolvad a "fő" |

**Az automatikus feloldás csak akkor aktiválódik, ha az egyesítés megváltozik:**
- "készségek/*/**".
- `skills_omni/*/**`
- `data/bundles.json`

Csak a dokumentum módosításai**nem**váltják ki a csomag közzétételét.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Doc | Mit fogsz tanulni |
|:----|:------------------|
| 🚀 [Kezdő lépések](docs/users/GETTING-STARTED.md) | Telepítés, ellenőrzés és előhívás 2 percen belül |
| 🧭 [CLI felhasználói útmutató](docs/users/CLI-USER-GUIDE.md) | Teljes parancsreferencia és valós minták |
| 📗 [Használati útmutató](docs/users/USAGE.md) | CLI-parancsok, telepítési módok, futási idő és MCP-konfiguráció |
| 📦 [Csomagok](docs/users/BUNDLES.md) | Válogatott csomagok és elérhetőség |
| 📚 [Katalógus](docs/CATALOG.md) | A közzétett készségek automatikusan generált katalógusa |
| 🔧 [System Runbook](docs/operations/RUNBOOK.md) | Építés, kiszolgálás, biztonságossá tétel és hibaelhárítás |### 🏗️ For Architects

| Doc | Mit fogsz tanulni |
|:----|:------------------|
| 🗺️ [Agent-Native Roadmap](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Az építészet fejlődése és a fennmaradó területek |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Alapvető monorepo határozat |
| 🔬 [Codebase Analysis](docs/architecture/CODEBASE-ANALYSIS.md) | Futásidejű összetétel és rendszerhatárok |
| 🌐 [Katalógus API](docs/specs/CATALOG-API.md) | HTTP-végpontok, szűrés, irányítás és letöltések |
| 🧩 [CLI irányított telepítő](docs/specs/CLI-GUIDED-INSTALLER.md) | Viselkedési szerződés az irányított telepítő számára |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Tinta vizuális héj és állapotmodell |
| 🔌 [Helyi MCP-oldalkar](docs/specs/LOCAL-MCP-SIDECAR.md) | Fájlrendszer-eszközök és engedélyezési lista modell |
| 📊 [Client Support Matrix](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Teljes ügyfél- és írói referencia |
| 🏷️ [Skill Classification](docs/specs/SKILL-CLASSIFICATION.md) | Taxonómia, pontozás és metaadatok |
| 🛡️ [Biztonsági ellenőrzés](docs/specs/SECURITY-VALIDATION.md) | Szkennerek, archívumok és aláírások |
| 📋 [Skill Manifest](docs/specs/SKILL-MANIFEST.md) | Géppel olvasható jegyzékformátum |### 🤝 For Contributors

| Doc | Mit fogsz tanulni |
|:----|:------------------|
| 📝 [Hozzájárulási útmutató](CONTRIBUTING.md) | Repo munkafolyamat és PR elvárások |
| 🧾 [Skill PR-munkafolyamat](docs/contributors/SKILL-PR-WORKFLOW.md) | Natív bevitel, fokozó feldolgozás, felülvizsgálói elvárások |
| 📄 [Skill Template](docs/contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` frontanyaggal és szerkezettel |
| 🔬 [Skill Anatomy](docs/contributors/SKILL-ANATOMY.md) | Szerkezeti és minőségi elvárások |
| ✅ [Quality Bar](docs/contributors/QUALITY-BAR.md) | Elfogadási feltételek |
| 🏆 [High-score Playbook](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Mi vezet a magas pontszámokhoz |---

## 🗂️ Repository Layout

| Útvonal | Cél |
|:-----|:---------|
| 📂 `készségek/` | Kanonikus szerzői készségek és natív bevitel |
| ✨ `skills_omni/` | Omni által karbantartott, továbbfejlesztett származékok kurátora |
| 📖 `dokumentumok/` | Felhasználói, közreműködői, architektúra, működési és specifikációs dokumentáció |
| 📦 `dist/` | Létrehozott jegyzékek, csomagok, katalógusok és archívumok |
| 📁 `data/` | Kötegdefiníciók és statikus alátámasztó adatok |
| 🧠 `csomagok/katalógusmag/` | Megosztott katalógus futásidejű |
| 🌐 `csomagok/szerver-api/` | Csak olvasható HTTP API |
| 🔌 `csomagok/szerver-mcp/` | MCP szerver és helyi oldalkocsi |
| 🤖 `csomagok/szerver-a2a/` | A2A futásidejű és feladat-hangszerelés |
| 🖥️ `tools/bin/` | CLI belépési pontok |
| 📚 `tools/lib/` | Telepítő és felhasználói felület segítők |
| ⚙️ `tools/scripts/` | Szkriptek ellenőrzése, generálása, kiadása és tesztelése |

>**ℹ️**A `dist/` szándékosan van verziószámítva, mert a generált melléktermékek a telepítési, API-, MCP-, A2A-, füst- és kiadási szerződés részét képezik.---

## 🤝 Contributing

Az Omni Skills elfogadja a natív upstream készségfelvételt a „skills/” alatt.

| szabály | Részletek |
|:-----|:---------|
| 📥 Natív bevitel | Lehet durva, bármilyen nyelven íródott |
| ✨ Kurált kimenet | `skills_omni/` az automatizálás által létrehozott Omni-származékok számára fenntartva |
| 🚫 Kézi szerkesztések | A `skills_omni/` nyilvános kézi szerkesztései elutasítva |
| 🔄 Újrafeldolgozás | A Privát javító újrafeldolgozza a natív változtatásokat és frissíti a kiválasztott alapvonalat |

> 📖**Kezdje:**[Hozzájárulási útmutató](CONTRIBUTING.md) · [Skill PR-munkafolyamat](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Típus | Licenc |
|:-----|:---------|
| 💻 Kód és szerszámok | [MIT-engedély](LICENC) |
| 📝 Dokumentáció és készségtartalom | [CC 4.0](LICENC-TARTALOM) |---

<div align="center">

**Készítette: 🧠, az Omni Skills Team**

[⭐ Csillagozza meg ezt a repót](https://github.com/diegosouzapw/omni-skills) · [🐛 Hiba bejelentése](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Beszélgetések](https://github.com/diegosouzapw/omni-skills)/</div>
