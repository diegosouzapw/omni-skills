# 📊 Skill Classification and Metadata (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**A helyi osztályozó, amely minden készséget pontoz az érvényesítés és az összeállítás során, és géppel olvasható profilokat generál a teljes katalógushoz.**---

## 📊 Status

| Kimenet | Generált |
|:-------|:-----------|
| ✅ Gyökér `metadata.json` | Az adattárra kiterjedő összefoglaló |
| ✅ készségenkénti `skills/<skill>/metadata.json` | Egyéni besorolások |
| ✅ Katalógus `dist/catalog.json` | Megjelent katalógus pontszámokkal |
| ✅ Manifests `dist/manifests/<skill>.json` | Képességenként géppel olvasható adatok |

Létrehozta: `python3 tools/scripts/validate_skills.py`

Az aktuális adattár pillanatképe:

- 32 publikált készség
- átlagos minőségi pontszám `96,3`
- a legjobb gyakorlatok átlagos pontszáma `98,7`
- átlagos biztonsági pontszám `95,0`
- aktuális minőségi szórás `94, 95, 96, 97, 100`
- a jelenlegi bevált gyakorlatok terjedése `98, 99, 100`---

## 🎯 Purpose

Az osztályozó minden készségnek**konzisztens, géppel olvasható profilt**ad, mielőtt az elérné a katalógust. Négy feladatot lát el:

1. 📋**Elemzés**— YAML frontmatter és markdown body
2. 🏷️**Normalizálás**— Kategóriacímkék a kanonikus taxonómiához
3. 📊**Osztályozás**— Érettség, bevált gyakorlatok, minőség és biztonsági pontozás
4. 📁**Emit**– A build szkriptek, dokumentumok és CI által felhasznált metaadat-termékek---

## 🏷️ Canonical Taxonomy

**18 kanonikus kategória**automatikus alias-leképezéssel:

| Kategória | Domain | Közös álnevek |
|:---------|:-------|:----------------|
| 💻 `fejlesztés` | Általános szoftverfejlesztő | "kódolás", "programozás" |
| 🎨 `frontend` | Kezelőfelület és felhasználói felület | "ui", "web-design" |
| 🔧 `backend` | Háttér és API-k | "szerver", "api" |
| 🌐 `fullstack-web` | Teljes körű web | "web", "teljes verem" |
| 🛠️ `eszközök` | Fejlesztői szerszámok | "közművek" |
| ⚙️ `kli-automatizálás` | CLI és automatizálás | `scripting`, `munkafolyamat` |
| 📊 `üzleti` | Üzleti stratégia | "stratégia" |
| 📐 `termék` | Termékmenedzsment | "pm" |
| 🎯 `design` | Vizuális és UX tervezés | "ux" |
| 🤖 `data-ai` | Adat- és AI-alkalmazások | "adatok", "analytics" |
| 🧠 `ai-agents` | AI ügynökminták | "ügynökök" |
| 📈 `gépi tanulás` | ML modellek és képzés | "ml" |
| 🔌 `devops` | Infrastruktúra | "infrastruktúra", "felhő" |
| 🛡️ `tesztelés-biztonság` | Tesztelés és biztonság | "tesztelés", "biztonság", "qa" |
| 📖 `dokumentáció` | Doc management | "dokumentumok" |
| 🎬 `tartalom-média` | Tartalomkészítés | `média`, `tartalom` |
| 💬 `kommunikáció` | Kommunikációs eszközök | "csevegés" |
| ❓ "besorolatlan" | Alapértelmezett tartalék | — |

> Az örökölt címkék, mint például a "munkafolyamat", "architektúra", "infrastruktúra", automatikusan normalizálódnak az álnév-leképezés révén.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Szint | Címke | Kritériumok |
|:------|:------|:---------|
|**L1**| "metaadatok" | Frontmatter plusz minimális test |
|**L2**| "utasítások" | Jelentős írásos utasítások |
|**L3**| "források" | Csomagolt szkriptek vagy gazdagabb csomagolt erőforrások |

További nyomon követett jelek: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

A heurisztika kiértékeli:

| Jel | Mit ellenőriz |
|:-------|:----------------|
| 📛 Csigaminőség | "név" mező formázása |
| 📝 Leírás | Világosság, terjedelem, informatívság |
| 📐 Szerkezet | Dokumentumszakaszok és hierarchia |
| 💡 Példák | Kódkerítések és példablokkok |
| 🔗 Referenciák | Kapcsolt helyi `references/`, `scripts/` és support-pack helpers |
| 🧰 Működtetés | Futtatható helyi szkriptpéldák és konkrét munkafolyamat-részletek |
| 🧩 Tartócsomag mélysége | Több támogatási család, újrafelhasználható fájlok, ügynök metaadatok és működési eszközök |
| 🩺 Hibaelhárítás | Explicit "Tünetek" és "Megoldás" párok |
| 📚 Lefedettség | "Mikor kell használni", "Legjobb gyakorlatok", "Hibaelhárítás" és "További források" szakaszok |
| 🌐 Hordozhatóság | Szerszám-agnosztikus megfogalmazás |
| 📅 Frissesség | A rögzített dátumok elkerülése |

**Jelenlegi szint**

| Tier | Pontszám tartomány |
|:-----|:------------|
| "kiváló" | 90-100 |
| "jó" | 70-89 |
| "tisztességes" | 50-69 |
| `munka kell' | 0-49 |

A pontozó szándékosan**elég szemantikus ahhoz, hogy elterjedjen**az érett készségek között. Egy tiszta szerkezetű képesség jól érhet el, de a felső sáv eléréséhez mélységi jelekre is szüksége van, mint például:

- több példa, nem csak egy
- több hibaelhárítási eset
- kapcsolódó készségvezetés
- gazdagabb helyi támogatási csomagok
- egynél több támogató család a sima prózán kívül, ideális esetben beleértve az "ügynököket/" vagy "eszközöket/", ahol valódi újrafelhasználást adnak
- egy dedikált "## Munkafolyamat" szakasz megszámlálható lépésekkel
- legalább egy kis operatív táblázat vagy döntési térkép, ha ez javítja a végrehajtás átláthatóságát
- több működési specifikusság, mint egy egyszerű sablon
- Világosabb munkafolyamat-mélység és döntéstámogató eszközök
- támogatási csomag mélysége, amely túlmutat egy "references/" fájlon és egy csatolt szkripten
- elegendő újrafelhasználható támogatási fájl ahhoz, hogy munkafolyamat-készletnek érezze magát, nem pedig egyetlen jegyzetes kiegészítőnek
- elegendő működési sűrűség a csiszolt körvonal és az újrafelhasználható munkafolyamat-készlet elkülönítéséhez

Ez azt jelenti, hogy egy szerkezetileg teljes készség továbbra is a '100' helyett a 90-es évek csúcsára érhet, ha a támogatási csomagja keskenyebb, döntési eszközei vékonyabbak, vagy működési sűrűsége alacsonyabb, mint a katalógus legerősebb képességei.---

### ⭐ Quality Score (0-100)

A heurisztika a következőket kombinálja:

| Jel | Súly |
|:-------|:--------|
| 📝 Test teljesség | Közepesen magas |
| 📋 Leírás pontosság | Közepes |
| 📊 A metaadatok teljessége | Közepes |
| 📅 Frissítés (`date_updated`) | Közepes |
| 📦 Csomagolt források | Közepes |
| 📋 A legjobb gyakorlatok hozzájárulása | Közepes |
| 🧠 Szemantikai mélység | Közepesen magas |
| 🛠️ Működési mélység | Közepes |
| 📚 Támogatási csomag gazdagság | Közepes |

**Minőségi szintek:**

| Tier | Pontszám tartomány |
|:-----|:------------|
| 💎 `platina` | 80+ |
| 🥇 `arany` | 65-79 |
| 🥈 `ezüst` | 50-64 |
| 🥉 `bronz` | 35-49 |
| 🌱 "kezdő" | 0-34 |---

### 🛡️ Security Score (0-100)

A biztonsági réteg a következőket tartalmazza:

| Szkenner | Mindig engedélyezve | Mit csinál |
|:--------|:---------------|:--------------|
| 🔍**Statikus**| ✅ Igen | Ellenőrzi a SKILL.md fájlt, a csomagolt fájlokat és a szkripteket |
| 🦠**ClamAV**| ⚙️ Nem kötelező | Rosszindulatú programok keresése a "clamscan" segítségével |
| 🔒**VirusTotal**| ⚙️ Nem kötelező | Kivonatkeresés (nincs feltöltés) |

**Statikus szkenner szabálycsaládok:**
- 🎭 Azonnali befecskendezési és kiszűrési minták
- 💣 Pusztító shell parancsok
- 🔑 Gyanús hitelesítő adatok vagy operációs rendszer elérési útjai
- ⚠️ Kockázatos szkriptprimitívek (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Biztonsági kimenet alakja:**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

| szakasz | Mezők |
|:--------|:-------|
| 🆔 Identity | "azonosító", "slug", "megjelenítési_név" |
| 🏷️ Taxonómia | "nyers_kategória", "kanonikus_kategória", "kikövetkeztetett_kategória" |
| 📋 Authoring | címkék, eszközök, összetettség, kockázat, forrás, szerző |
| 📅 Dátumok és útvonalak | `hozzáadás dátuma`, `frissítés dátuma`, elérési utak |
| 📊 Források | Fájl- és referenciaszámlálók |
| 📝 Tartalmi jelek | Szószám, testhossz, szerkezeti zászlók |
| 🧠 Szemantikai mélység | Munkafolyamat lépései, példák, hibaelhárítási mélység, döntési eszközök, support-link családok |
| 🧩 Tartócsomag szerkezet | Támogatási fájlok száma, kapcsolt családok, "ügynökök/", "eszközök/" és újrafelhasználható példák |
| 🎯 Lejárat | Szint, címke, szkriptek/fájlok jelzői |
| 📋 Legjobb gyakorlatok | Pontszám és szint |
| ⭐ Minőség | Pontszám, szint és szemantikai bontás |
| 🛡️ Biztonság | Pontszám, szint, állapot, megállapítások |
| ✅ Érvényesítés | Állapot, hibák, figyelmeztetések |### Root (`metadata.json`)

| szakasz | Mezők |
|:--------|:-------|
| 📊 Összefoglaló | Számlások, átlagok, kategóriaeloszlás |
| 🏷️ Taxonómia | Kategóriák száma |
| 🎯 Terjesztés | Képességi szint, minőségi szint, biztonsági szint |
| ✅ Érvényesítés | Az állapot számít |
| 📋 Képességlista | Kompakt készségenkénti összefoglalók |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

Ez beállítja a "git"-et a ".githooks/pre-commit" használatára, amely újragenerálja a metaadatokat és a katalógus-műtermékeket a véglegesítés előtt, és automatikusan szakaszolja a generált fájlokat.