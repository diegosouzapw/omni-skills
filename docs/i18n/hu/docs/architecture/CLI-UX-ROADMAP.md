# 🧭 CLI UX Roadmap (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**A termék ütemterve az Omni Skills fejlesztéséhez a megjelölés előtt álló telepítőből irányított terminálélményré, szakértő és nem szakértő felhasználók számára egyaránt.**
> Hatály: npm csomag, CLI telepítési élmény, terminál felhasználói felület, szolgáltatásindítási folyamatok és vizuális beépítés.---

## 1. Problem Statement

A jelenlegi futásidejű alap erős, de a belépési élmény továbbra is olyan felhasználók számára van optimalizálva, akik már értik:

- melyik ügyfelet akarják megcélozni
- melyik telepítésválasztót akarják használni
- hogyan lehet a célokat "--skill", "--bundle" vagy "find" kifejezésekre fordítani
- amikor csak CLI-s telepítésre van szükségük MCP, API vagy A2A szolgáltatásokkal szemben

Ma:

- Az `npx omni-skills' alapértelmezés szerint az Antigravitáció
- ez műszakilag érvényes és visszafelé kompatibilis
- de nem ideális kezdő felhasználók vagy kevésbé technikás kezelők számára

A CLI már rendelkezik alap interaktív móddal, de még mindig közelebb áll egy fejlesztői segédprogramhoz, mint egy irányított termékfelülethez.

Ez az ütemterv meghatározza az erősebb nyilvános felhasználói felhasználói élmény eléréséhez vezető utat anélkül, hogy megtörné a jelenlegi zászlóalapú felületet.---

## 1.1 Delivery Status

Az ütemterv nagyrészt a jelenlegi adattárállapotban van megvalósítva.

Elkészült:

- 1. fázis: Irányított belépési pont kiválasztása
- 2. fázis: Irányított telepítési varázsló
- 3. fázis: Visual Terminal Shell
- 4. fázis: Visual Service Hub
- 5. fázis: Mentett profilok és ismételhetőség
- 6. fázis: Edzés, tesztek és dokumentáció---

## 2. Goals

- A jelenlegi szakértői CLI munkafolyamatok megőrzése
- Tegye biztonságossá és érthetővé a vitamentes belépési pontot az első alkalommal használók számára
- Cserélje le a csendes alapértelmezett értékeket interaktív környezetben irányított kijelöléssel
- Támogassa az ismert AI-klienseket és tetszőleges egyéni telepítési útvonalakat
- A telepítést, a felfedezést és a szolgáltatásindítást koherens felhasználói úttá alakítja
- Olyan vizuális terminál felhasználói felületet biztosítson, amely terméknek tűnik, nem csak szkriptnek
- A telepítőmotor, a katalógus és a szolgáltatás futási ideje újrafelhasználható legyen a felhasználói felületen---

## 3. Non-Goals

- A jelenlegi zászló alapú CLI cseréje
- Az Antigravitáció, mint támogatott alapértelmezett célpont eltávolítása
- Webes felhasználói felület szállítása elsődleges kézbesítési módként
- Maguk az API-, MCP- vagy A2A-protokollok újrafaktorálása ennek a felhasználói élménynek a részeként
- A `SKILL.md` authoring lecserélése adatbázis-támogatott adminisztrációs panelre---

## 4. Design Principles

### 4.1 Backward Compatibility First

Ezeknek a parancsoknak továbbra is pontosan ugyanúgy kell működniük, mint ma:

- `npx omni-skills --kurzor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interaktív terminál-munkamenet argumentumok nélkül: nyílt, irányított élmény
- Nem interaktív hívás argumentumok nélkül: a jelenlegi telepítés alapértelmezett viselkedésének megőrzése
- Az explicit parancsok és zászlók mindig nyerik a felhasználói felület következtetéseit### 4.3 Reuse One Engine Across Modes

A következőknek ugyanazt a belső logikát kell osztaniuk:

- flag-first CLI
- irányított szöveges módú CLI
- vizuális terminál UI

Ez azt jelenti, hogy az UX réteg nem rendelkezhet üzleti logikával. Újrafelhasználható műveleteket kell végrehajtania.### 4.4 Preview Before Write

Minden írást okozó irányított folyamnak meg kell jelennie:

- megoldott cél
- megoldott út
- kiválasztott készségek vagy kötegek
- egyenértékű CLI parancs
- megerősítési kérés### 4.5 Visual Does Not Mean Implicit

A rendszernek még a gazdagabb felhasználói felületen is egyértelművé kell tennie az állapotot és a műveleteket:

- hol tart a telepítés
- mi lesz írva
- melyik szállítmányt vagy kikötőt veszi igénybe egy szolgáltatás
- egy folyam csak olvasható vagy helyi írásképes---

## 5. User Personas

### 5.1 Expert CLI User

Szükségesek:

- gyors parancsok
- nincs kényszerű felszólítás
- stabil zászlók
- szkriptképesség### 5.2 Guided Product User

Szükségesek:

- egyértelmű választás
- nem feltételezzük, hogy antigravitációra van szükség
- egyéni elérési út telepítésének támogatása
- érthető telepítési előnézet
- látható különbség a telepítés és a kiszolgáló futásidejű műveletei között### 5.3 Operator / Platform User

Szükségesek:

- MCP, API és A2A vizuális indításának képessége
- értelmes alapértelmezések
- opcionális portok, szállítás, perzisztencia, végrehajtó mód, hitelesítés és helyi mód hangolása---

## 6. Target UX Model

A terméknek három rétegben kell megjelennie:### 6.1 Expert Mode

Közvetlen parancsok és zászlók.

Példák:

- `npx omni-skills --kurzor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Akkor vált ki, amikor:

- a felhasználó futtatja az `npx omni-skills`-t egy TTY-ben args nélkül
- a felhasználó futtatja az "npx omni-skills install" parancsot konkrét választó nélkül
- a felhasználó kifejezetten az irányított módot választja

Az irányított telepítési folyamatnak végig kell mennie:

1. cél kliens vagy egyéni elérési út
2. telepítés típusa
3. készség vagy köteg kiválasztása
4. előnézet
5. megerősítés
6. végrehajtás
7. következő lépések### 6.3 Visual Operations Hub

Kiváltotta:

- "npx omni-skills ui".

Ez legyen a „kezdőképernyő” a nem szakértő felhasználók és kezelők számára.

Alaptevékenységek:

- telepítési készségek
- készségeket felfedezni
- indítsa el az MCP-t
- Indítsa el az API-t
- indítsa el az A2A-t
- fuss orvos
- füstellenőrzést végezni---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Eredmény:

- Az `npx omni-skills' a TTY-ben többé nem veszi fel csendben az antigravitációt
- a felhasználóknak klienst vagy egyéni elérési utat kell választaniuk

Követelmények:

- a nem TTY alapértelmezett telepítési viselkedésének megőrzése
- Célválasztó hozzáadása
- támogatja az egyéni útvonal rögzítését### Phase 2: Guided Install Wizard

Eredmény:

- a telepítés teljes irányított áramlássá válik

Követelmények:

- telepítési mód kiválasztása:
  - teljes könyvtár
  - egy készség
  - egy köteg
  - keresés, majd telepítés
- telepítési előnézet
- egyenértékű parancsok megjelenítése
- megerősítés és végrehajtás### Phase 3: Visual Terminal Shell

Eredmény:

- a jelenlegi alapszöveges felhasználói felület márkás terminálalkalmazás lesz

Követelmények:

- gazdagabb elrendezés
- projekt branding és logó
- jobb stepper és kártyák
- billentyűzet-vezérelt navigáció
- Reagáljon a terminál megvalósítására tintával### Phase 4: Visual Service Hub

Eredmény:

- Az MCP, az API és az A2A a vizuális felhasználói felületről indítható

Követelmények:

- irányított MCP áramlás
- irányított API áramlás
- irányított A2A áramlás
- látható mód és konfigurációs előnézetek### Phase 5: Saved Profiles and Repeatability

Eredmény:

- A közös telepítési vagy szolgáltatási beállítások újra felhasználhatók

Követelmények:

- emlékezzenek a közelmúltbeli célokra
- mentett szolgáltatási beállítások
- legutóbbi parancsok
- kedvenc kötegek vagy készségek### Phase 6: Hardening, Tests, and Documentation

Eredmény:

- az UX karbantartott nyilvános felületté válik, nem pedig ad hoc kényelemmé

Követelmények:

- füstfedés
- regressziós tesztek
- doc frissítések
- kezelői útmutatás
- csomag kompatibilitás felülvizsgálata---

## 8. Proposed Command Model

### Stable Commands

- "minden készségek".
- "minden készségek telepítése".
- "minden készségek megtalálása".
- "minden készségek ui".
- "minden készségek mcp".
- "minden készségek api".
- "minden készségek a2a".
- "minden készségek orvosa".
- "minden készségek füstölnek".### Recommended Behavior

| Invokáció | Viselkedés |
|:-----------|:---------|
| `minden készségek` a TTY-ben, no args | Irányított telepítési bejegyzés |
| `minden készségek` nem TTY-ben, nincs args | Az Antigravity jelenlegi alapértelmezett telepítése |
| `minden készségek telepítése` TTY-ben, választó nélkül | Irányított telepítési varázsló |
| `omni-skills install --guided` | Kényszervezérelt telepítési folyamat |
| "minden készségek ui" | Nyissa meg a vizuális műveleti központot |
| explicit zászlók | Végrehajtás közvetlenül anélkül, hogy az irányított áramlásba kerülne |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Opciók:

- Claude Code
- Kurzor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitáció
- OpenCode
- Egyéni útvonal

Kimenet:

- kiválasztott ismert cél VAGY egyéni fájlrendszer elérési út### Step 2: Choose Install Type

Opciók:

- teljes könyvtár
- egy publikált készség
- egy köteg
- keresés, majd telepítés

Kimenet:

- telepíteni hatókört### Step 3: Resolve Selection

A telepítés típusától függően:

- teljes könyvtár: nincs további választó
- készség: listázzon vagy válasszon egy képességet
- köteg: listázza ki vagy válasszon egy csomagot
- Keresés: lekérdezés kérése, megfelelő készségek és csomagok megjelenítése### Step 4: Preview

Kijelző:

- kiválasztott cél
- megoldott út
- kiválasztott készség vagy csomag
- egyenértékű CLI parancs
- az áramlás szelektív vagy teljes telepítés### Step 5: Confirm

A felhasználó megerősíti:

- igen → végrehajtani
- nem → szakítsa meg vagy menjen vissza### Step 6: Result

Kijelző:

- siker/kudarc
- cél útvonala
- javaslat a következő lépésre---

## 10. Information Architecture for the Visual Operations Hub

A műveleti központnak fel kell tüntetnie:### 10.1 Install

- irányított telepítési folyamat
- készség vagy csomag keresés
- egyéni elérési út### 10.2 Discover

- katalógus keresés
- szűrők
- előnézeti metaadatok
- átadás telepítése### 10.3 MCP

Opciók:

- közlekedés: stdio, patak, sse
- helyi mód be/ki
- házigazda
- kikötő### 10.4 API

Opciók:

- házigazda
- kikötő
- opcionális hitelesítés
- választható mértékhatár### 10.5 A2A

Opciók:

- házigazda
- kikötő
- tároló típusa: memória, json, sqlite
- végrehajtó: inline, process
- opciók bérlése, ha az sqlite sor engedélyezve van### 10.6 Diagnostics

- orvos
- füst---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

A jelenlegi `tools/bin/cli.js` keveri:

- parancselemzés
- bemutató
- interaktív promptok
- akció hangszerelés
- szerviz rendszerindítás

Az új szerkezetnek át kell helyeznie az újrafelhasználható logikát:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

A `tools/bin/install.js` írásképes háttérprogramnak kell maradnia.

Az irányított felhasználói felületnek meg kell hívnia a meglévő telepítő hátterét, ahelyett, hogy megkettőzné a telepítési logikát.### 11.3 Keep Find/Search Reusable

Az irányított telepítő varázslónak újra fel kell használnia ugyanazt a katalógus-mag és CLI keresési logikát, amely már működik:

- "találni".
- előzetesek telepítése
- köteg felbontás### 11.4 Prepare for Ink Without Forcing It Early

Az első kézbesítés szöveges módban maradhat.

De az architektúrának tiszta varrást kell tartania, hogy a szövegfolyamat később Ink segítségével lehessen renderelni.---

## 12. Risks

### 12.1 Breaking Existing Automation

Mérséklés:

- csak az irányított felhasználói felület automatikus megnyitása TTY-ben
- megőrzi a jelenlegi alapértelmezést nem TTY-ben
- az explicit zászlófolyamok megőrzése### 12.2 Letting UI Own Business Logic

Mérséklés:

- a hangszerelés áthelyezése újrafelhasználható akciómodulokra
- tartsa a telepítő és a szolgáltatás indító logikáját a felhasználói felület alatt### 12.3 Ink Migration Too Early

Mérséklés:

- először szállítsa az irányított áramlást az aktuális csomóponti terminál verembe
- majd migráljon az Ink-re, ha az áramlási szemantika stabil### 12.4 Incomplete Service UX

Mérséklés:

- először küldje el a telepítő varázslót
- majd rétegvezérelt szolgáltatásindítás---

## 13. Acceptance Criteria by Phase

### Phase 1

- Az „npx omni-skills” a TTY-ben már nem települ azonnal
- a felhasználó választhat célklienst vagy egyéni elérési utat
- A nem TTY no-arg hívás továbbra is ugyanúgy működik, mint korábban### Phase 2

- Az irányított telepítés támogatja a teljes könyvtárat, a készségeket, a csomagot és a keresést, majd telepítést
- az előnézet mindig megjelenik az írás előtt
- parancs megfelelője jelenik meg### Phase 3

- létezik márkás terminál felhasználói felület
- a felhasználói felület vizuálisan strukturáltabb, mint a sima readline menük
- a navigáció billentyűzetbarát### Phase 4

- A felhasználók elindíthatják az MCP-t, az API-t és az A2A-t a vizuális központról
- A fő futásidejű opciók irányított formában konfigurálhatók### Phase 5

- a legutóbbi vagy mentett beállítások újrafelhasználhatók
- az ismétlődő folyamok kevesebb felszólítást igényelnek### Phase 6

- a füstölés az új UX belépési pontokat tükrözi
- A dokumentumok az irányított módot és a szervizvarázsló viselkedését írják le---

## 14. Execution Order

Ezt az ütemtervet a következő sorrendben kell végrehajtani:

1. Irányított belépési pont kiválasztása
2. Irányított telepítővarázsló
3. Vizuális terminál shell
4. Vizuális szolgáltatási központ
5. Mentett profilok és ismételhetőség
6. Keményedés, tesztek és docs polírozás

A megvalósítási munkának minden egyes feladat megkezdése előtt el kell olvasnia a vonatkozó feladatfájlt, hogy a CLI-munka összhangban legyen a tervvel, és ne sodorjon el.