# 📖 Omni Skills — Documentation Hub (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**A központi referencia a jelenlegi Omni Skills platform használatához, működtetéséhez, bővítéséhez és megértéséhez.**

A szabványos közösségi fájlok a lerakat gyökérben élnek:
(---

## 📊 Status Snapshot

| Terület | állam | Részletek |
|:-----|:------|:--------|
| 🏗️**Runtime**| ✅ Aktuális | Az egyesített parancssori felület, az Ink vizuális shell, az API, az MCP és az A2A ugyanabból a csomagból szállítják |
| 📦**Katalógus**| 📌 32 készség | 32 közzétett "L3" készség 15 aktív katalóguskategóriában és 7 teljesen támogatott csomagban |
| 🎯**Telepítés**| ✅ Aktuális | Irányított TTY-telepítés, szelektív `--skill` és `--bundle`, egyéni elérési út-támogatás és felfedezés-vezérelt telepítés |
| 🌐**API**| ✅ Aktuális | Csak olvasható regisztrációs API hitelesítéssel, adminisztrátori futásidővel, sebességkorlátozással, CORS/IP engedélyezési listákkal, karbantartási móddal és letöltésekkel |
| 🔌**MCP**| ✅ Aktuális | `stdio` · `stream` · `sse`, helyi oldalkocsi mód, 7 telepítésre alkalmas kliens, 16 konfigurálható kliens, 33 konfigurációs cél és 19 konfigurációs profil |
| 🤖**A2A**| ✅ Aktuális | Egyszerű első helyi futási környezet JSON/SQLite tartóssággal, újraindítással, SSE streameléssel, törléssel, külső végrehajtó móddal és opcionális bérelt koordinációval, ha kifejezetten engedélyezve van |
| 🛡️**Biztonság**| ✅ Aktuális | Statikus szkenner, opcionális ClamAV/VirusTotal, aláírt kiadási melléktermékek, archív ellenőrző összegek és kiadási idő ellenőrzése |
| 📋**Osztályozás**| ✅ Aktuális | Kanonikus taxonómia, érettség, szemantikai minőség elterjedése, bevált gyakorlatok terjedése és biztonsági pontozás |
| 📁**Archívum**| ✅ Aktuális | Képességenkénti ".zip" és ".tar.gz" archívumok SHA-256 ellenőrzőösszeg-jegyzékekkel |
| 🔐**Aláírás**| ✅ Aktuális | Leválasztott aláírások a kiadási címkéken; a helyi telepítési folyamatok ugyanazt a jegyzékfájlt és ellenőrzőösszeg metaadatokat fogyasztják |
| 🧬**Beszívási áramlás**| ✅ Aktuális | Az anyanyelvi készségek a `készségek/` alá kerülnek; A PR-automatizálás felülvizsgálja őket, és Omni-bővített származékokat javasol a `skills_omni/` alatt |## 🔭 Current Project State

Az alapozó pálya most aktív projektállapotban él, a második kategória-bővítési hullám pedig már a katalógusban van. A projektet most működő alapvonalnak kell tekinteni opcionális jövőbeli bővítési sávokkal:

- A nyilvános "v0.1.2" és a privát "v0.0.1" a jelenlegi stabil kiadási szint
- a katalógus jelenleg 32 közzétett készségről szól 15 aktív kategóriában és 7 teljes körűen támogatott csomagban
- a natív bevitel és a kurált `skills_omni/` kimenet egyaránt működőképes, beleértve a többnyelvű natív bevitelt és a csak angol kurált kimenetet
- A protokollfelületek, a kiadási automatizálás és a privát fejlesztési automatizálás üzemel, nem a bootstrapben

A jövőbeli bővítés szándékos marad:

- elmélyítse a "design", "eszközök", "data-ai" és "gépi tanulás" fogalmát
- kerülje az alvó, nem kódolt natív kategóriák újbóli megnyitását, amíg a jelenlegi kód-natív sávok mélyebbek lesznek
- a minőségi padló és az erősítő áttekintési útvonalának sértetlen maradása közben

Ez a terv most a következőkre oszlik:

- a befejezett első bővítési hullám a [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md]-ben (tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- a befejezett második bővítési hullám a [tasks/TASK-08-SECOND-CATEGORY-WAVE.md]-ben (tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- és az előretekintő lemaradás a [tasks/README.md]-ben (tasks/README.md)---

## 📌 Current Decisions

Ezek az építészeti kérdések a gyakorlatban már nem „nyitottak”, és projektdöntésként kezelik őket:

1.**A terjesztés továbbra is nyilvántartott marad, valamint aláírt archívum**
   A géppel olvasható jegyzék továbbra is a CLI, API, MCP és A2A által felhasznált szerződés marad. Az aláírt készségenkénti archívumok a letöltési és kiadási felületek, amelyek a szerződés tetejére rétegződnek.
2.**A privát vagy prémium katalógusoknak ugyanazt a jegyzéksémát kell használniuk**
   A hitelesítést és a házirendet kívülről kell rétegezni, nem pedig a jegyzék vagy a katalógus alakjának elágazásával.
3.**Az MCP-konfigurációnak konvergálnia kell néhány kanonikus exportcsaládhoz**
   Az Omni Skills mostantól szabványosítja a JSON "mcpServers", a JSON "szerverek", a JSON "környezeti_kiszolgálók", a YAML "mcpServers", a YAML "bővítmények" és a TOML "[mcp_servers]" TOML-t, miközben a testreszabott írókhoz csak akkor van szükség, ha a hivatalos kliens-dokumentumok eltérőek.

Ezek a döntések összhangban vannak a jelenlegi hivatalos MCP-vel és ügyféldokumentációval, beleértve:

- hivatalos MCP-nyilvántartási és kiterjesztés-támogatási útmutató a `modelcontextprotocol.io' oldalon
- OpenAI Docs MCP és Codex CLI dokumentumok a "developers.openai.com" és a "platform.openai.com" webhelyeken
- VS Code MCP kiterjesztés és termékdokumentumok a "code.visualstudio.com" oldalon
- Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman és JetBrains AI Assistant kliensdokumentumai---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Mit fogsz tanulni |
|:----|:-------------------|
| 📘 [Kezdő lépések](users/GETTING-STARTED.md) | Telepítse, ellenőrizze és hívja elő első készségeit |
| 🧭 [CLI felhasználói útmutató](users/CLI-USER-GUIDE.md) | Teljes parancsreferencia és valós CLI használati minták |
| 📗 [Használati útmutató](users/USAGE.md) | CLI-parancsok, telepítési módok, futásidejű parancsok és MCP-konfigurációs folyamatok |
| 📦 [Csomagok](users/BUNDLES.md) | A válogatott csomagok és jelenlegi elérhetőségük |
| 📚 [Katalógus](CATALOG.md) | A közzétett készségek automatikusan generált katalógusa |
| 🔧 [System Runbook](operations/RUNBOOK.md) | A futási környezet összeállítása, kiszolgálása, biztonságossá tétele és hibaelhárítása |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Mit fogsz tanulni |
|:----|:-------------------|
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Az építészet fejlődése, a lezárt döntések és a fennmaradó bővítési területek |
| 🧭 [CLI UX ütemterv](architecture/CLI-UX-ROADMAP.md) | Az irányított és vizuális CLI történeti terve és jelenlegi formája |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo és megosztott futásidejű döntés |
| 🔬 [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md) | Jelenlegi futásidejű összetétel, számok és rendszerhatárok |
| 🌐 [Katalógus API felület](specifikáció/CATALOG-API.md) | HTTP-végpontok, szűrés, irányítás és letöltések |
| 🧩 [CLI irányított telepítő](specs/CLI-GUIDED-INSTALLER.md) | Viselkedési szerződés az irányított telepítő számára |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Ink vizuális héj, állapotmodell és szolgáltatási központ |
| 🔌 [Helyi MCP-oldalkocsi](specifikációk/LOCAL-MCP-SIDECAR.md) | Fájlrendszer-tudatos eszközök, engedélyezési lista modell és konfigurációk írása |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Támogatott CLI és IDE kliensek, írók, kézi célok és forráshivatkozások |
| 📊 [Skill Classification](specifikáció/SKILL-CLASSIFICATION.md) | Taxonómia, pontozási heurisztika és metaadat-termékek |
| 🛡️ [Biztonsági ellenőrzés](specs/SECURITY-VALIDATION.md) | Szkennerek, archívumok, aláírások és kiadás-ellenőrzés |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Géppel olvasható jegyzékformátum és kompatibilitási szerződés |### 🤝 If You Want to **Contribute**

| Doc | Mit fogsz tanulni |
|:----|:-------------------|
| 📝 [Hozzájárulási útmutató](../CONTRIBUTING.md) | Repo munkafolyamat és lekérési elvárások |
| 🧾 [Skill PR-munkafolyamat](contributors/SKILL-PR-WORKFLOW.md) | Natív bevitel, automatikus javító feldolgozás, `skills_omni/` közzététel és a lektori elvárások |
| 📄 [Skill Template](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` aktuális frontanyaggal és szerkezettel |
| 🔬 [Skill Anatomy](közreműködők/SKILL-ANATOMY.md) | Szerkezeti és minőségi elvárások egy képességgel szemben |
| ✅ [Quality Bar](contributors/QUALITY-BAR.md) | Az adattár elfogadási feltételei |
| 🏆 [High-score Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | Mi vezet a magas érettséghez, a minőséghez, a bevált gyakorlatokhoz és a biztonsági pontszámokhoz |
| 📋 [Tasks Backlog](tasks/README.md) | Részletes végrehajtási hátralék a fennmaradó köz- és magánmunkához |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

A közzétett 'omni-skills' bináris az egységes nyilvános belépési pont.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

A teljes végfelhasználói parancsfelülethez használja a [CLI User Guide](users/CLI-USER-GUIDE.md) alkalmazást.### 📁 Generated Artifacts

Az összeállítási folyamat minden futási felületet meghajtó géppel olvasható fájlokat bocsát ki:

| Műtárgy | Cél |
|:---------|:--------|
| `metadata.json` | Az egész adattárra kiterjedő érvényesítés és pontszám összefoglaló |
| `skills_index.json` | Repo-local normalizált képzettségi index |
| `dist/catalog.json` | Megjelent katalógus kereséshez és listázáshoz |
| `dist/bundles.json` | Csomagdefiníciók elérhetőséggel |
| `dist/manifests/<skill>.json` | Képességenkénti géppel olvasható jegyzék |
| `dist/archives/<skill>.zip` | Ügyességi archívum (zip) |
| `dist/archives/<skill>.tar.gz` | Ügyességi archívum (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 ellenőrzőösszeg jegyzék |

`dist/` szándékosan elkötelezett marad. Ezek az előállított melléktermékek a telepítési, API, MCP, A2A, füstölési és kiadási szerződés részét képezik.### 🌐 API

```bash
npx omni-skills api --port 3333
```

Csak olvasható regisztrációs API a készségek, csomagok, összehasonlítás, telepítés tervezése és műtermékek letöltéséhez.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

A helyi oldalkocsi mostantól támogatja az első osztályú MCP-konfiguráció írását:

- Claude Code
- Kurzor
- VS kód és fejlesztői tárolók
- Gemini CLI
- Antigravitáció
- Kiro
- Codex CLI
- Folytasd
- Szörf
- OpenCode
- Cline
- GitHub másodpilóta CLI
- Kilo Code
- Zed
- Liba### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Feladatok életciklusa, streamelés, kitartás, újraindítás helyreállítása és egyszerű helyi hangszerelés. A megosztott bérelt végrehajtás akkor érhető el, ha kifejezetten engedélyezve van; A Redis továbbra is egy speciális hosztolt beállítás, nem pedig az alapértelmezett helyi elérési út.---

## 🗂️ Repository Map

| Útvonal | Cél |
|:-----|:---------|
| 📂 `készségek/` | Kanonikus szerzői készségek |
| 📖 `docs/users/` | Végfelhasználói dokumentáció |
| 🤝 `dokumentumok/közreműködők/` | Közreműködői sablonok és útmutató |
| 🏗️ `dokumentumok/architektúra/` | Útiterv, ADR-ek és technikai elemzés |
| 🔧 `dokumentumok/műveletek/` | Operatív runbookok |
| 📋 `dokumentumok/specifikációk/` | Futásidejű, protokoll- és műtermék-szerződések |
| 📚 `docs/CATALOG.md` | Készített készségkatalógus |
| 📦 `dist/` | Generált géppel olvasható műtermékek |
| 🧠 `csomagok/katalógusmag/` | Megosztott katalógus futásidejű |
| 🌐 `csomagok/szerver-api/` | Csak olvasható HTTP API |
| 🔌 `csomagok/szerver-mcp/` | MCP szerver és helyi oldalkocsi |
| 🤖 `csomagok/szerver-a2a/` | A2A szerver és feladat futásidejű |
| 🖥️ `tools/bin/` | CLI belépési pontok |
| 📚 `tools/lib/` | Telepítő és felhasználói felület segítők |
| ⚙️ `tools/scripts/` | Validálás, generálás, ellenőrzés és tesztek |---

## 🧪 Release Validation

```bash
npm run smoke
```

A füstfutás érvényesíti:

- ✅ készségellenőrzés és metaadatok generálása
- ✅ taxonómia átkategorizáló eszköz
- ✅ katalógus-termékek generálása
- ✅ generált katalógus leárazás
- ✅ archívum létrehozása és ellenőrzése
- ✅ automatizált tesztcsomag
- ✅ `npm pack --dry-run`
- ✅ API rendszerindítás és egészség
- ✅ MCP rendszerindítás az "stdio", "stream" és "sse" fájlokban
- ✅ A2A rendszerindítás, lekérdezés, SSE streamelés, törlés és push-config életciklus