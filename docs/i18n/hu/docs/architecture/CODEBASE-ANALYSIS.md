# 🔬 Codebase Deep Analysis (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Átfogó technikai elemzés a jelenlegi Omni Skills architektúráról, a futásidejű felületekről és a build folyamatról.**
> Utolsó elemzés: 2026-03-28---

## 📊 Project Overview

| Attribútum | Érték |
|:----------|:------|
|**Név**| "minden készségek" |
|**Csomagváltozat**| "0.1.3" |
|**Képességi változatok**| Készségenként és a csomag verziójától független. Sok közzétett képesség továbbra is „0.0.1”, míg a csomag „0.1.2”. |
|**Engedély**| MIT (kód) + CC BY 4.0 (tartalom) |
|**NPM**| "npx omni-skills" |
|**Közzé tett készségek**| 32 |
|**Meghatározott kötegek**| 7, mindezt teljes mértékben publikált készségek támogatják |
|**Aktív katalóguskategóriák**| 15 aktív csoport a 18 kanonikus taxonómia kategóriából |
|**Az elsődleges futási környezet/építési LOC minta az alábbiakban**| 13 600+ |
|**Termelési függőségek**| 7 ("@modelcontextprotocol/sdk", "cors", "express", "ioredis", "tinta", "react", "zod") |

Jelenlegi adattárszintű besorolási pillanatkép a "metadata.json" fájlból:

- átlagos minőségi pontszám: "96,3".
- a legjobb gyakorlatok átlagos pontszáma: `98,7`
- átlagos biztonsági pontszám: "95,0".
- mind a 32 közzétett készség "L3"-ként érvényes

A jelenlegi kiadás alapértéke:

- nyilvános adattár kiadása: `v0.1.2`
- privát javító kiadás: `v0.0.1`
- A nyilvános kiadás automatizálása és a privát kiadás automatizálása egyaránt aktív és zöld---

## 🏗️ Architecture Overview

Az adattár**munkaterületi monorepo**mintát követ, egy megosztott katalógusmaggal és több futásidejű felülettel.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

A tervezés szándékosan**műtermékvezérelt**:

1. A készségek `SKILL.md` plusz helyi támogatási csomagként vannak létrehozva
2. a build érvényesíti, osztályozza, archiválja és normalizálja azokat
3. a generált melléktermékek a CLI, API, MCP és A2A szerződésévé válnak---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4500+ LOC kombinálva**— a fő nyilvános interfész szakértői és irányított használatra egyaránt.

| Parancs | Funkció |
|:--------|:---------|
| 🔎 `[lekérdezés] keresése` | Teljes szövegű katalógus keresés pontozó szűrőkkel |
| 📦 `telepítés` | Irányított vagy zászló alapú telepítés ismert kliensekre vagy egyéni útvonalakra |
| 🧾 `config-mcp` | Előnézet vagy írjon kliens-tudatos MCP-konfigurációt |
| 🔌 `mcp <transport>` | Elindítja az MCP-kiszolgálót `stdio`, `stream` vagy `sse` |
| 🌐 `api` | Elindítja a katalógus API |
| 🤖 `a2a` | Elindítja az A2A futtatókörnyezetet |
| 🧪 `füstölni` | Az ellenőrzés előtti ellenőrzés kiadása |
| 🩺 `doktor` | Helyi diagnosztika |
| 🖥️ `ui` | Ink vizuális shell telepítéssel, felfedezéssel, konfigurációval és szervizközponttal |
| 🏷️ `újrakategorizálás` | Taxonómia-sodródás ellenőrzése és átírása |

A CLI már nem csak egy telepítő. Ez a nyilvános műveleti eszköz az egész platform számára.## 🧭 Future Expansion Direction

A nyilvános futásidőt már nem akadályozzák az alapozási munkák, és a második kategória hulláma már leszállt. A következő hasznos katalógusmunka a mélység, nem pedig a kategóriaszámlálás hajsza.

Újonnan aktivált kód-natív számok már a katalógusban:

- "design" a "design-systems-ops", "accessibility-audit" és "design-token-governance" segítségével
- "tools" az "mcp-server-authoring" segítségével
- "data-ai" az "adatszerződéseken" keresztül
- "gépi tanulás" a "modellszolgáltatáson" keresztül

Javasolt a következő irány:

1. elmélyítse a "design", "eszközök", "data-ai" és "gépi tanulás" fogalmát
2. az "üzleti" és a "tartalom-média" elhalasztása, hacsak nem jelenik meg egyértelműen kódalapú javaslat
3. a jelenlegi minőségi padló megőrzése a kategória aktiválási nyomás újranyitása helyett

Ezt a bővítési hullámot a [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md) fájl rögzíti.### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**– a készségeket 7 telepíthető asszisztensbe telepíti.

| zászló | Cél | Alapértelmezett elérési út |
|:-----|:-------|:--------------|
| "--claude" | Claude Code | "~/.claude/skills" |
| "--kurzor" | Kurzor | "~/.kurzor/készségek" |
| "--gemini" | Gemini CLI | "~/.gemini/skills" |
| "--kódex" | Codex CLI | "~/.codex/skills" |
| "--kiro" | Kiro | "~/.kiro/skills" |
| "--antigravitáció" | Antigravitáció | "~/.gemini/antigravitation/skills" |
| "--nyitott kód" | OpenCode | `<munkaterület>/.opencode/skills` |

Támogatja:

- teljes könyvtár telepítése
- szelektív telepítések a "--skill" paraméterrel
- a „--bundle” által kiválasztott telepítések
- Irányított TTY és vizuális felhasználói felület
- egyéni cél útvonalak### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**– megosztott futásidejű réteg a CLI-hez, API-hoz, MCP-hez és A2A-hoz.

| Export | Leírás |
|:-------|:-------------|
| 🔎 `searchSkills()` | Keresés súlyozott szövegegyeztetéssel és szűrőtámogatással |
| 📋 `Skills()` | Többtengelyes szűrés minőség, bevált gyakorlatok, szint, biztonság, kockázat, eszköz és kategória szerint |
| 📌 `getSkill()` | Nyilvánvaló felbontás plusz bővített nyilvános URL-ek |
| ⚖️ `Készségek összehasonlítása()` | Egymás melletti összehasonlítás |
| 💡 `RecommendSkills()` | Célvezérelt ajánlás |
| 📦 `buildInstallPlan()` | Telepítse a tervgenerálást figyelmeztetésekkel és ügyfélbarát útmutatásokkal |
| 🗂️ `listBundles()` | Kurált csomaglista elérhetőséggel |
| 📁 `listSkillArchives()` | Archívum és aláírás felbontás |

Ez a futásidejű igazság valódi egyetlen forrása generációról generációra.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— teljes MCP-megvalósítás a hivatalos SDK használatával.

**közlekedés**

- "stdio".
- streamelhető HTTP
- SSE

**Mindig működő, csak olvasható eszközök**

- "keresési_készségek".
- "szerezzen_készséget".
- `készségek összehasonlítása`
- "ajánlott_készségek".
- "előzetes_telepítés".

**Helyi módú eszközök**

- "ügyfelek észlelése".
- "telepített_készségek listája".
- "telepítési_készségek".
- `remove_skills`
- `configure_client_mcp`

Az MCP felület szándékosan fel van osztva:

- távoli/csak olvasható katalógushasználat
- helyi/írásra képes oldalkocsi használat### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1,943 LOC**– fájlrendszer-tudatos MCP-réteg ügyfélfelismeréshez, képességkezeléshez és MCP-konfiguráció íráshoz.

Jelenlegi gyakorlati támogatás:

-**7 telepítésre képes kliens**
-**16 konfigurálható kliens**
-**33 konfigurációs cél**
-**19 konfigurációs profil**

Telepíthető kliensek:

- Claude Code
- Kurzor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitáció
- OpenCode

A konfigurálható kliensek és célok a következők:

- Claude beállítások, Claude Desktop és Claude projekt konfigurációja
- Kurzor felhasználó és munkaterület konfigurációja
- VS Code munkaterület, felhasználó, bennfentesek és Dev Container konfigurációja
- Gemini felhasználói és munkaterületi beállítások
- Antigravitációs felhasználói konfiguráció
- Kiro felhasználói, munkaterületi és örökölt elérési utak
- Codex CLI TOML konfig
- OpenCode felhasználói és munkaterület-konfiguráció
- Klinika beállításai
- GitHub Copilot CLI felhasználói és repo konfigurációja
- Kilo felhasználó, projekt és munkaterület konfigurációja
- A YAML munkaterület folytatása
- Windsurf felhasználói konfiguráció
- Zed munkaterület konfigurációja
- Goose felhasználói konfiguráció

Az oldalkocsi szándékosan őszinte a határokat illetően:

- csak engedélyezőlistán belül ír
- alapértelmezés szerint megtekinti az előnézetet
- csak ott tart első osztályú írókat, ahol a hivatalos dokumentumok stabil formátumot mutatnak
- nem állítja, hogy minden MCP-képes termék egyben készség-telepítési célpont is lenne### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC kombinált**– csak olvasható regisztrációs API plusz irányítási köztes szoftver.

Fontos végpontok:

- "/healthz".
- `/openapi.json`
- `/admin/runtime`
- "/v1/készségek".
- `/v1/skills/:id`
- "/v1/search".
- "/v1/összehasonlítás".
- "/v1/bundles".
- `/v1/telepítés/terv`
- `/v1/skills/:id/download/*`

Már végrehajtott irányítási alapállapot:

- hordozó token hitelesítés
- API-kulcs hitelesítés
- admin token hitelesítés
- folyamat közbeni sebességkorlátozás
- kérjen azonosítókat
- audit naplózás
- CORS engedélyezési listák
- IP engedélyezési listák
- megbízható proxy kezelés
- karbantartási mód### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1857 LOC kombinálva a fő szerver, futásidejű és koordinátor fájlok között**— JSON-RPC 2.0 feladatéletciklus az ügynökök közötti munkafolyamatokhoz.

Támogatott módszerek:

- `üzenet/küldés`
- "üzenet/folyam".
- `feladatok/kap`
- `feladatok/mégse`
- `feladatok/újrafeliratkozás`
- `tasks/pushNotificationConfig/*`

Jelenlegi műveletek:

- `fedez fel-készségeket`
- `recommend-stack`
- `telepítési terv előkészítése`

Tartósság és koordinációs modell:

- memória, JSON vagy SQLite helyi megmaradás
- újraindítás folytatása
- opcionális külső folyamatvégrehajtó
- opt-in bérelt sorkoordináció a megosztott SQLite dolgozók számára
- opcionális Redis által támogatott koordináció fejlett hosztolt útvonalként

A legfontosabb építészeti választás itt az**egyszerű helyi üzemeltetés**. A Redis speciális opcióként létezik, de az alapértelmezett termékútvonal továbbra is helyi marad, és a függőségi jelzőfény marad.---

## ⚙️ Build Pipeline

| Script | Nyelv | Cél |
|:-------|:----------|:--------|
| 📊 `skill_metadata.py` | Python | Érvényesítés, taxonómia, pontozás és statikus biztonsági szkennelés |
| ✅ `validate_skills.py` | Python | Metaadatok generálása készségenként és a gyökérösszefoglalóhoz |
| 📑 `generate_index.py` | Python | Képességindex, jegyzékek, archívumok, aláírások és ellenőrző összegek |
| 🏗️ `build_catalog.js` | Node.js | Utolsó "dist/catalog.json" és "dist/bundles.json" |
| 🏷️ `recategorize_skills.py` | Python | Kanonikus kategória audit és átírás |
| 🔍 `verify_archives.py` | Python | Archívum és aláírás ellenőrzése |

Működési szempontból két részlet számít:

1. A `dist/` a futásidejű szerződés része, és szándékosan kötődik
2. a build elég determinisztikus ahhoz, hogy támogassa a CI-ellenőrzést és a kiadás-aláírást---

## 📦 Published Catalog

A jelenlegi nyilvános katalógus 32 képességet ölel fel:

-**Felfedezés és tervezés**: "készségek keresése", "ötletgyűjtés", "architektúra", "hibakeresés"
-**Rendszerek tervezése és hozzáférhetőség**: "design-systems-ops", "accessibility-audit"
-**Termék és teljes köteg kiszállítás**: "frontend-design", "api-design", "database-design", "omni-figma", "auth-flows"
-**Biztonság**: "security-auditor", "sebezhetőség-ellenőrző", "incidens-válasz", "fenyegetés-modellezés"
-**OSS-karbantartó munkafolyamatok**: "dokumentáció", "módosítási napló", "create-pr"
-**DevOps**: "docker-expert", "kubernetes", "terraform", "megfigyelhetőség-felülvizsgálat", "kiadási tervezés"
-**AI tervezés**: "rag-engineer", "prompt-engineer", "llm-patterns", "eval-design", "context-engineering"

Mind a hét csomag teljes mértékben támogatott:

- "essentials" → "4/4".
- "full-stack" → "5/5".
- "design" → "4/4".
- "biztonság" → "4/4".
- "devops" → "5/5".
- "ai-mérnök" → "5/5".
- "oss-maintainer" → "4/4".

Aktuális pontszám a generált katalógusból:

- minőségi pontszámok: "94, 95, 96, 97, 100".
- legjobb gyakorlatok pontszámai: "98, 99, 100".
- biztonsági pontszám: az összes közzétett készség jelenleg „95”.

Reprezentatív high end:

- "omni-figma" → "minőség 100", "best_practices 100"
- "Hozzáférhetőség-audit" → "minőség 99", "best_practices 100"
- "auth-flows" → "quality 97", "best_practices 99"
- "design-systems-ops" → "quality 97", "best_practices 99"
- "kiadási tervezés" → "minőség 97", "best_practices 99"
- "fenyegetés-modellezés" → "minőség 97", "best_practices 99"
- "context-engineering" → "minőség 97", "best_practices 99"

Reprezentatív alsó vége a jelenlegi felső sávon belül:

- "architektúra" → "minőség 94", "best_practices 98"
- "változásnapló" → "minőség 94", "best_practices 98"
- "create-pr" → "minőség 95", "best_practices 98"

Ez szándékos. A pontozó most megkülönbözteti a „kiváló”-t a „kivételestől”, ahelyett, hogy az egész katalógust a tetejére lapítaná.---

## 🌟 Strengths

1.**Első műalkotás**
   Minden futásidejű felület ugyanazt a generált katalógust és manifestet használja.
2.**Széles protokoll-lefedettség**
   A CLI, az API, az MCP és az A2A együtt léteznek anélkül, hogy az adatmodellt feldarabolnák.
3.**Erős helyi termék ergonómia**
   Az irányított telepítés, a vizuális shell, a "config-mcp" és a szárazon futtatott alapértelmezések a projektet a nagyfelhasználókon túl is használhatóvá teszik.
4.**Őszinte biztonsági testtartás**
   Az engedélyezett helyi írások, a statikus szkennelés, az aláírás, az ellenőrző összegek és a kiadás ellenőrzése mind explicit.
5.**Egészséges MCP-elérés**
   A projekt immár a jelenlegi MCP-képes kliensek széles körét támogatja anélkül, hogy azt feltételezné, hogy a nem dokumentált célok stabilak.---

## 🔮 Opportunities

1.**Mélyebb csomaglefedettség**
   A következő lépés a meglévő csomagokon belüli specializáció, nem csak a széles körű lefedettség.
2.**Gazdagabb pontszerző szemantika**
   Még mindig van hely a referenciacsomag mélységének és a munkafolyamat minőségének szemantikai szempontból történő értékelésére.
3.**További ügyfél-író csak indokolt esetben**
   A terjeszkedésnek fegyelmezettnek kell maradnia, és stabil hivatalos dokumentumokhoz kell kötnie.
4.**Validátor lebontás**
   A „skill_metadata.py” még mindig egy nagy modul, és idővel előnyös lenne a belső lebontás.
5.**Hostált irányítás eszkalációja**
   A jelenlegi folyamatban lévő alapvonal elegendő az önálló üzemeltetéshez, de a vállalati telepítés végül külső átjárót és identitásintegrációt igényel.