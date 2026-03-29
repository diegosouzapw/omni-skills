# 🗺️ Agent-Native Roadmap (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Az Omni Skills architektúra evolúciós terve: az első telepítőtől a megosztott katalógus futtatókörnyezetig, a CLI-k, API-k, MCP-k és A2A-k megkettőzése nélkül.**---

## 📊 Current Platform Areas

| fázis | Név | Állapot |
|:------|:-----|:-------|
| 1️⃣ | Szerződések és műtárgyak | ✅ Aktuális |
| 2️⃣ | Csak olvasható katalógus API | ✅ Aktuális |
| 3️⃣ | MCP Discovery Surface | ✅ Aktuális |
| 4️⃣ | Helyi telepítési és konfigurációs felület | ✅ Aktuális |
| 5️⃣ | A2A hangszerelés | ✅ Aktuális |### ✅ What Exists Today

- géppel olvasható katalógus-műtermékek a `dist/`-ban
- Csak olvasható HTTP API végpont-lefedettséggel a kereséshez, kötegekhez, összehasonlításhoz, telepítési tervezéshez és letöltésekhez
- MCP szerver "stdio", streamelhető HTTP és SSE átvitellel
- helyi oldalkocsi engedélyezett írásokkal és "config-mcp" folyamokkal
- 7 telepítésre képes kliens, 16 konfigurálható kliens, 33 MCP konfigurációs cél és 19 konfigurációs profil
- mélyebb csomagspecializáció a "full-stack", "security", "devops" és "ai-engineer" területeken belül "auth-flows", "threat-modeling", "release-engineering" és "context-engineering"
- készségenkénti archívumok ("zip", "tar.gz") SHA-256 ellenőrző összegekkel és leválasztott aláírásokkal a kiadási címkéken
- API irányítási alap: hordozó/API-kulcs hitelesítés, rendszergazdai futásidejű hitelesítés, sebességkorlátozás, naplózás, CORS/IP engedélyezési listák, megbízható proxy, karbantartási mód és kérésazonosítók
- A2A futásidejű feladat életciklussal, JSON/SQLite tartóssággal, újraindítással, SSE streaminggel, törléssel, push értesítésekkel, opcionális folyamatvégrehajtóval és választható bérelt koordinációval### 🔭 Future Expansion Areas

Az alapvető ütemterv most a jelenlegi platform hatókörét írja le. A fennmaradó tételek a jövőbeni bővítési területek, nem pedig alapvető hiányosságok:

- innentől kezdve csak erősen szelektív MCP-kiegészítések, és csak ott, ahol a hivatalos nyilvános dokumentumok biztonságos írót tesznek lehetővé
- mélyebb referenciacsomagok és több szemantikai pontozás, így az osztályozó folyamatosan elkülöníti a kivételes képességeket a pusztán csiszolt képességektől
- a jelenlegi folyamat közbeni alapvonalon túlmutató vállalati irányítású irányítás, ha a projekt később átjáró- vagy IdP-integrációt igényel
- mélyebb specializáció az újonnan aktivált "design", "tools", "data-ai" és "gépi tanulás" pályákon
- Folyamatos működési finomítás a privát javítókörön, miközben megtartja formális működési modelljét: OmniRouter rögzítve a `cx/gpt-5.4'-hez, hosztolt felhő `álmodellben` vagy degradált preflight-ban, és megbízható 'élő' LAN-on vagy saját hosztolt végrehajtás
- a folyamatos kiadás és a munkafolyamat keményítése csak a szolgáltatás minőségét javító munkaként, nem pedig a platform alapjainak hiányaként## Future Catalog Expansion Track

Az első két nyilvános kategória-bővítési hullám megérkezett:

- "design" → "design-systems-ops", "accessibility-audit", "design-token-governance"
- `tools` → `mcp-server-authoring`
- `data-ai` → `data-contracts`
- `gépi tanulás` → `modell-szolgáltatás`

A következő ajánlott lépés már nem önmagáért a kategóriaaktiválás. Célja, hogy elmélyítsék ezeket az újonnan aktív kód-natív sávokat, hogy tartós termékfelületnek érezzék, nem pedig egyetlen készséghez szükséges támasztéknak.

Ajánlott irány:

1. elmélyítse a "tervezést" működőbb tervezési rendszer munkafolyamatokkal
2. elmélyítse az "eszközöket" szerzői és bővítmény-orientált készségekkel
3. elmélyítse az `data-ai'-t a bevezetés előtti csővezeték és műszerezési készségekkel
4. elmélyítse a "gépi tanulást" kiszolgálási, képzési és értékelési műveleti készségekkel

Szándékosan elhalasztott kategóriák, hacsak nem jelennek meg erős kód-natív javaslatok:

- "üzlet".
- "tartalom-média".

A bővítési előzményeket a következő helyen követi nyomon:

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ A jelenlegi „npx omni-skills” munkafolyamat továbbra is működőképes
- ✅ Vezessen be egy géppel olvasható igazságforrást a készségek számára
- ✅ Támogassa az ügynökök általi felfedezést, ajánlást és telepítéstervezést
- ✅ Különítse el a távoli katalógusokkal kapcsolatos problémákat a helyi fájlrendszer írásaitól
- ✅ Használja újra ugyanazokat a metaadatokat a CLI, API, MCP és A2A között---

## 🚫 Non-Goals

- ❌ Távoli telepítés a felhasználói gépen egy hosztolt szerverről
- ❌ Cserélje le a `SKILL.md' fájlt kanonikus szerzői formátumként
- ❌ Kövesse meg a közreműködőktől, hogy kézzel írják meg a manifeszteket
- ❌ Alapértelmezés szerint alakítsa át a projektet egy nehéz hosztolt várólista platformmá---

## 🏗️ Target Architecture

Egy**katalógusmag**három protokollfelülettel:

| Felület | Legjobb a | mód |
|:--------|:---------|:-----|
| 🌐**REST API**| Hozzáférés a rendszerleíró adatbázishoz, UI-integrációk, harmadik féltől származó fogyasztók | Csak olvasható |
| 🔌**MCP**| Ügynökfelderítés, telepítési előnézetek, konfigurációk írása, ügyfélreceptek | Csak olvasható + helyi írások |
| 🤖**A2A**| Ügynökök közötti hangszerelés és telepítési terv átadása | Feladat életciklusa egyszerű-első helyi tartóssággal |### ⚙️ Core Principle

>**Minden protokoll ugyanazt a generált műtermékcsaládot használja.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

A manifeszt a megosztott szerződés marad. Az archívumok a szerződés tetejére rétegzett terjesztési műtermékek, nem helyettesítik azt.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Hosztolt API és távoli MCP-kiszolgálók használják.

| ✅ Engedélyezett | ❌ Nem engedélyezett |
|:-----------|:----------------|
| Keresési készségek | Írjon a hívó fájlrendszerébe |
| Manifestek lekérése | Helyi ügyfélkonfiguráció mutációja |
| Készségek összehasonlítása | Tetszőleges gépállapot megállapítása |
| Csomagok ajánlása | — |
| Telepítési tervek készítése | — |### 2️⃣ Local Installer Mode

A CLI és az MCP oldalkocsi használja.

| ✅ Engedélyezett |
|:-----------|
| Helyi AI-kliensek észlelése |
| A telepített készségek ellenőrzése |
| Fájlműveletek előnézete |
| Képességi könyvtárak telepítése vagy eltávolítása |
| Írja meg a helyi MCP konfigurációt az előnézet után |

> 📌 Ez marad az egyetlen mód, ahol valódi operációs rendszer írás történik.---

## 📐 Protocol Split

### 🌐 REST API

A legjobb a rendszerleíró adatbázis eléréséhez, kereséshez, összehasonlításhoz, verziószámú letöltéshez és telepítéstervezéshez.

**Végpontok**: „GET /v1/skills” · „GET /v1/skills/:id” · „GET /v1/search” · „GET /v1/compare” · „GET /v1/bundles” · „POST /v1/install/plan” · „GET /healthz”### 🔌 MCP

A legjobb az eszközalapú felfedezéshez, a felszólító javaslatokhoz, a telepítési előnézetekhez és az ügyfélspecifikus MCP-beállításokhoz.

**Csak olvasható eszközök**: „search_skills” · „get_skill” · „Compare_skills” · „recommend_skills” · „preview_install”

**Helyi eszközök**: `detect_clients` · `telepített_készségek listája` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

A legjobb a felderítési átadás-átvételhez, a telepítési terv munkafolyamataihoz és a folytatható ügynökfeladatok végrehajtásához.

**Jelenlegi műveletek**: `fedez fel-készségeket` · `recommend-stack` · `telepítési terv előkészítése`---

## 🛡️ Security Model

| alapelv | Végrehajtás |
|:----------|:----------------|
| 🔒 A tárolt szolgáltatások csak olvashatók | Az API és a távoli MCP nem ír a hívó fájlrendszerbe |
| 📂 Ír, maradj helyben | Csak CLI és MCP oldalkocsi |
| 👁️ Előnézet írás előtt | A szárazonfutás alapértelmezései a helyi mutációknál |
| 🔑 Az integritás kifejezett | SHA-256 ellenőrző összegek a generált műtermékekhez |
| ✍️ A bizalom felszabadítása kifejezett | Leválasztott aláírások a kiadási címkéken |
| ⚠️ Felszínre került a kockázat | A kockázati és biztonsági metaadatok minden futási felületre terjednek |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- dokumentált célarchitektúra
- meghatározott jegyzékséma
- generált metaadatok, katalógusok, manifestek, csomagok és archívumok### Phase 2: Catalog Service

- Csak olvasható HTTP API Express 5-tel
- keresés, szűrés, jegyzékkeresés, csomaglista, összehasonlítás és letöltések
- env-vezérelt hosztolt kormányzás alapállapota### Phase 3: MCP Discovery

- hivatalos `@modelcontextprotocol/sdk` integráció
- "stdio", streamelhető HTTP és SSE szállítások
- A megosztott katalógus által támogatott írásvédett eszközök, erőforrások és promptok### Phase 4: Local Install and Config Surface

- helyi oldalkocsi engedélyezett listákkal
- 7 telepítésre képes kliens észlelése
- Konfigírás 16 konfigurációra képes kliens számára 33 célon és 19 konfigurációs profilon keresztül
- irányított `config-mcp` folyamatok a CLI-ben és a vizuális shellben
- Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose és Dev Containers stabil támogatása### Phase 5: A2A Orchestration

- ügynökkártya a `/.well-known/agent.json' címen
- "message/send", "message/stream", "tasks/get", "tasks/cancel", "tasks/resubscribe" és push-notification konfigurációs módszerek
- JSON és SQLite kitartás az újraindítás helyreállításával
- opcionális külső folyamatvégrehajtó
- Opt-in bérelt végrehajtás a dolgozók között az SQLite és az opcionális továbbfejlesztett Redis koordinációhoz
- az egyszerű-első alapértelmezések a memóriában, a JSON-ban vagy az SQLite-ban tárolva külső függőségek nélkül### Current Enhancer Operating Decision

A privát javító által támogatott "élő" modell most már egyértelmű:

- A hosztolt PR-automatizálás egy repülés előtti "élő" kísérletet futtat
- ha a nyilvános OmniRoute átjáró blokkolt vagy instabil, a PR 'blokkolva' megjelölésre kerül, ahelyett, hogy átláthatatlanul meghibásodott volna.
- a kanonikus megbízható "élő" útvonal továbbra is a LAN vagy a helyi szolgáltatás végrehajtása
- Az ütemezett privát GitHub-futtatások alapértelmezés szerint „mock” maradnak, hacsak egy operátor kifejezetten nem kéri az „élő” beállítást---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Döntés**: tartsa a jegyzéket megosztott szerződésként, és az aláírt készségenkénti archívumot terjesztési felületként.

**Miért**:
- A CLI, API, MCP és A2A már felhasználja a normalizált jegyzék alakzatot
- Az archívumok ideálisak letöltésre és ellenőrzésre, de gyenge, mint az egyetlen felfedezési szerződés
- Ezáltal a szerkesztés egyszerű és a terjesztés ellenőrizhető### 2. Private or Premium Catalogs

**Döntés**: használja újra ugyanazt a jegyzék- és katalógusformátumot, és rétegezze a hitelesítést vagy szabályzatot külsőleg.

**Miért**:
- elkerüli az adatmodell elágazását
- megfelel a jelenlegi API/MCP irányítási megközelítésnek
- továbbra is kompatibilis az MCP-ökoszisztéma irányával az OAuth-kliens hitelesítő adatai és a vállalati felhatalmazás körül### 3. Client Writer Strategy

**Döntés**: konvergáljon a kanonikus exportcsaládok kis csoportjához, és csak ott tartson egyedi írókat, ahol a hivatalos ügyféldokumentumok ezt megkövetelik.

**Mostantól használatban lévő kanonikus családok**:
- JSON "mcpServers".
- JSON "szerverek".
- JSON "context_servers".
- YAML "mcpServers".
- TOML `[mcp_servers]`

**Miért**:
- karbantarthatóvá teszi a megvalósítást
- továbbra is támogatja az ügyfélspecifikus igényeket, mint például a Claude beállítások, a Continue YAML, a Zed "context_servers" és a Codex TOML
- elkerüli a törékeny írók feltalálását stabil nyilvános konfigurációs dokumentumokkal nem rendelkező ügyfelek számára---

## 🌍 Research Notes Behind Those Decisions

A jelenlegi döntéseket összevettük a hivatalos ökoszisztéma-dokumentumokkal:

- Az MCP-ökoszisztéma mostantól dokumentálja az opcionális bővítményeket, például az OAuth-kliens hitelesítő adatait és a vállalati felügyelt hitelesítést, amely támogatja a hosztolt hitelesítés külsősítését a katalógusformátum elágazása helyett
- Az OpenAI dokumentálja a nyilvános dokumentumok MCP-kiszolgálóját és a Codex MCP konfigurációs mintáit, amelyek igazodnak a megosztott jegyzék plusz kliens-író stratégiához
- A VS Code első osztályú MCP-támogatást és egy kiterjesztési útmutatót dokumentál, amely megerősíti a dedikált "szerver-alapú író" karbantartását
- A JetBrains AI Assistant az MCP beállítását a termék UX-jén keresztül dokumentálja, nem pedig egy stabil platformközi fájlszerződésen keresztül, amely jelenleg támogatja a manuális/részletes területen tartását.---

## 🔮 Longer-Term Decision Points

Csak néhány stratégiai kérdés maradt valóban nyitott:

1. A jelenlegi mátrixon túli bármely ügyfél valóban letörli-e a lécet az első osztályú íráshoz, vagy a többi terméknek továbbra is kézi/csak kivonatúnak kell lennie
2. Mikor kell a hosztolt irányításnak egy külső átjáró vagy vállalati IdP mögé költözni a jelenlegi folyamat közbeni alaphelyzet helyett?
3. Meddig kell elmennie a pontozónak a referenciacsomag mélységének és működési minőségének értékelésében, mielőtt az túlságosan elgondolkodtatóvá válik a közreműködők számára?