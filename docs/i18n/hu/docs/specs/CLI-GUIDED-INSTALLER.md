# 🧩 CLI Guided Installer Specification (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Viselkedési szerződés az Omni Skills CLI irányított telepítési tapasztalataira.**---

## 1. Scope

Ez a specifikáció határozza meg az irányított telepítési viselkedést, amely a meglévő telepítői háttér tetején található.

Nem helyettesíti:

- `tools/bin/install.js`
- aktuális szakértői zászló folyik
- szelektív telepítési manifesztek

Meghatározza:

- hogyan lép be az irányított módba
- hogyan választják ki az úti célokat
- a telepítési hatókör kiválasztása
- milyen előnézeti információkat kell megjeleníteni
- hogyan működik a megerősítés és a végrehajtás---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

A CLI-nek irányított telepítési módba kell lépnie, ha:

- a felhasználó "omni-skills"-t futtat arg nélkül a TTY-ben
- a felhasználó futtatja a "minden készségek telepítését" választó nélkül a TTY-ben### 2.2 Forced Guided Entry

A CLI-nek az explicit irányított módot is támogatnia kell egy dedikált opción keresztül, például:

- "Omni-skills install --guided".

Ennek a módnak akkor is működnie kell, ha a bemenet vezetékes, és nincs TTY-hez csatlakoztatva, mindaddig, amíg elérhető a szabványos bemenet.### 2.3 Non-Interactive Safety Rule

TTY nélkül és kifejezetten kért irányított mód nélkül:

- megőrzi a jelenlegi alapértelmezett viselkedést
- ne tiltsa le a felszólításokra való várakozást---

## 3. Destination Model

Az irányított telepítésnek támogatnia kell két célosztályt:### 3.1 Known Client Target

Minden ismert cél a következőképpen alakul:

- ember által olvasható címke
- belső szerszámazonosító
- zászló telepítése
- megoldott út

Szükséges ismert célok:

- Claude Code
- Kurzor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitáció
- OpenCode### 3.2 Custom Path Target

Az egyéni útvonal módnak:

- ösvény megadása
- oldja meg a `~`
- normalizálás abszolút útvonalra
- a megoldott útvonal megjelenítése az előnézetben---

## 4. Install Scope Model

Az irányított telepítésnek támogatnia kell:### 4.1 Full Library

Egyenértékű a jelenlegi telepítéssel „--skill” vagy „--bundle” nélkül.### 4.2 Single Skill

Lehetővé teszi a felhasználó számára, hogy válasszon egy közzétett képességet.### 4.3 Single Bundle

Lehetővé teszi a felhasználó számára, hogy válasszon egy kiválasztott csomagot, és feloldja a közzétett tagokat.### 4.4 Search Then Install

Lehetővé teszi a felhasználó számára:

- írjon be egy keresési lekérdezést
- vizsgálja meg az eredményeket
- válasszon egy készséget vagy csomagot
- folytassa a telepítés előnézetével---

## 5. Preview Contract

A végrehajtás előtt az irányított telepítésnek meg kell jelennie:

- rendeltetési címke
- cél útvonala
- telepíteni hatókört
- adott esetben kiválasztott készség vagy csomag
- egyenértékű CLI parancs

Nem kötelező, de ajánlott:

- a kiválasztott készség metaadatainak összefoglalása
- a csomag elérhetőségének összefoglalója---

## 6. Execution Contract

Megerősítés után:

- irányított telepítési delegáltak a meglévő telepítői háttérrendszerhez
- nem újraimplementálja a fájl írja magát

A parancs előnézetének és a tényleges delegált telepítőértékeknek pontosan meg kell egyeznie.---

## 7. Result Contract

A sikeres végrehajtás után az irányított telepítés eredményének a következőnek kell lennie:

- sikermutató
- végső cél útvonala
- végrehajtott parancs
- következő javasolt művelet

Példa a következő műveletekre:

- használja a készséget a kiválasztott kliensben
- fuss `doktor`
- futtassa az `mcp stream --local` parancsot---

## 8. Compatibility Contract

Az alábbiak érvényben maradnak és változatlanok:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bundle full-stack`
- `omni-skills --path ./skills`
- `minden készségek megtalálják a figma --tool cursor --install --yes`

Az irányított mód viselkedést ad hozzá. Nem távolítja el a meglévő viselkedést.