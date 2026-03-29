# 🖥️ CLI Visual Shell Specification (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Viselkedési szerződés az „omni-skills ui” által közzétett tintaalapú terminál felhasználói felületére.**---

## 1. Scope

A vizuális héj egy irányított termékfelület a meglévő CLI és telepítőmotor tetején.

Nem helyettesíti:

- szakértői zászló alapú CLI használat
- `tools/bin/install.js`
- az irányított szöveges telepítési folyamat
- API, MCP vagy A2A futásidejű viselkedés

Meghatározza:

- a "minden készségek ui" viselkedése
- a tartalék szerződés az "omni-skills ui --text"-re
- helyi állapot és előre beállított kitartás
- irányított szolgáltatásindítási előnézetek
- Megismételhetőség a legutóbbi telepítésekhez és szolgáltatásfuttatásokhoz---

## 2. Entry Rules

### 2.1 Visual Mode

Az `omni-skills ui` elindítja az Ink alapú vizuális shellt.

A vizuális shell az elsődleges nem szakértői terminál élmény:

- áramlások telepítése
- katalógus-első felfedezés és telepítés
- MCP indítás
- API indítás
- A2A indítás
- orvos és füst átadás### 2.2 Text Fallback

Az `omni-skills ui --text` elindítja az readline alapú tartalék felületet.

Ez akkor marad hasznos, ha:

- egy terminál nem tudja megfelelően renderelni a gazdagabb shellt
- A nyers mód viselkedése korlátozott
- előnyben részesítjük a minimális szöveges tartalékot### 2.3 Handoff Rule

A vizuális shell nem valósítja meg újra a szolgáltatás futtatókörnyezetét vagy a telepítési írásokat közvetlenül.

Az előnézet és a megerősítés után tisztán kilép, és a végrehajtást átadja a meglévő CLI belépési pontnak az egyenértékű argumentumokkal és környezeti változókkal.---

## 3. Home Screen Contract

A kezdőképernyőnek meg kell jelennie:

- telepítési készségek
- megkeresni és telepíteni
- ismételje meg a legutóbbi telepítéseket, ha vannak
- futtassa a mentett telepítési beállításokat, ha vannak
- szolgáltatást indítani
- ismételje meg a legutóbbi szolgáltatásokat, ha jelen vannak
- mentett szolgáltatás-előbeállítások futtatása, ha vannak
- orvos
- füst
- kilépés

A kezdőképernyőnek is megjelennie kell:

- a csomag aktuális közzétett elérhetősége
- helyi állam számít a legutóbbi, előre beállított és kedvencek számára---

## 4. Install Flow Contract

A vizuális shell telepítési folyamatának támogatnia kell:

- ismert ügyfélcél kiválasztása
- egyéni útvonalválasztás
- teljes könyvtár telepítése
- egy készséges telepítés
- egy köteges telepítés
- keresés-majd telepítés
- előnézet írás előtt
- előre beállított mentés
- kedvenc készség vagy csomagváltás

Az előnézetnek meg kell jelennie:

- megoldott célcímke
- megoldott út
- telepíteni hatókört
- adott esetben kiválasztott készség vagy csomag
- egyenértékű CLI parancs---

## 5. Service Flow Contract

A vizuális shellnek az indítást kell irányítania:### 5.1 MCP

- szállítás: "stdio", "folyam", "sse".
- mód: "csak olvasható" vagy "helyi".
- hoszt/port konfiguráció a hálózati átvitelhez
- explicit parancs előnézet### 5.2 API

- házigazda
- kikötő
- alap vagy edzett profil
- keményített hordozó vagy API kulcs hitelesítés
- edzett sebességhatár paraméterek
- auditnapló engedélyezése
- explicit parancs előnézet### 5.3 A2A

- házigazda
- kikötő
- tároló típusa: "memory", "json", "sqlite".
- tárolási útvonal a tartós módokhoz
- végrehajtó: `inline`, `process`
- sor-engedélyezett SQLite mód
- lekérdezési időköz és kölcsönzés időtartama megosztott bérlet módban
- explicit parancs előnézet---

## 6. Local State Contract

A vizuális shell csak helyi állapotú marad a következő esetekben:```text
~/.omni-skills/state/ui-state.json
```

Az állam jelenleg a következőket tartalmazza:

- legutóbbi telepítések
- a legutóbbi szolgáltatásindítások
- nevű telepítési előbeállítások
- elnevezett szolgáltatási beállítások
- kedvenc készségek
- kedvenc kötegek

A héjnak támogatnia kell:

- a legutóbbi telepítések újrajátszása
- a legutóbbi szolgáltatásindítások újrajátszása
- a megnevezett telepítési beállítások újrafelhasználása
- elnevezett szolgáltatási beállítások újrafelhasználása---

## 7. Compatibility Contract

A vizuális héj additív.

Ezeknek az áramlásoknak érvényesnek és stabilnak kell maradniuk:

- `npx omni-skills --kurzor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills install --guided`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

A vizuális shell soha nem kényszerítheti magát explicit szakértői parancsutakra.---

## 8. Safety Contract

A vizuális shellnek explicit állapotot és írást kell adnia.

A következőket kell tennie:

- a telepítések előnézete az átadás-átvétel előtt
- a szolgáltatásindítási parancsok előnézete végrehajtás előtt
- ahol ez praktikus, tartsa távol a titkos anyagokat az egyértelmű szöveges parancs-előnézetekből
- csak helyben fennmaradó állapot
- megőrzi a nem interaktív CLI viselkedést a vizuális héjon kívül