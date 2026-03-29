# 🔬 Anatomy of a Well-Written Skill (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Struktúra és minőségi elvárások egy Omni Skills `SKILL.md-vel – a teljes katalógust meghatározó szerzői formátummal – szemben.**---

## 📐 The Two Parts

Minden `SKILL.md` két különálló részből áll:### 1️⃣ Frontmatter (YAML Metadata)

Géppel olvasható metaadatok `---` határolók között. Erősíti:

- 📚 A készségek indexe és katalógusgenerálása
- 🔎 CLI keresés és szűrés
- ✅ Érvényesítés és minőségi pontozás
- 📊 Létrehozott „metadata.json” osztályozási műtermékek
- 📋 A készségenkénti megnyilvánulások a `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Ember által olvasható (és ügynök által olvasható) utasítások. Írd le úgy, mintha**eligazítást adnál egy vezető fejlesztőnek**egy feladat végrehajtásáról – ez elég specifikus ahhoz, hogy egy AI-ügynök találgatás nélkül kövesse azt.---

## 📋 Frontmatter Reference

| Mező | Kötelező | Típus | Leírás |
|:------|:---------|:-----|:-------------|
| `név` | ✅ | húr | Meg kell egyeznie a könyvtár nevével, kisbetűvel és kötőjellel |
| "leírás" | ✅ | húr | Egysoros leírás (10-200 karakter) |
| "verzió" | ⚡ | húr | Magának a készségnek a szemantikus változata (pl. `"0.1.1"`) |
| "kategória" | ⚡ | húr | Egy kanonikus kategória a repo taxonómiából |
| "címkék" | ⚡ | string[] | Kereshető címkék felfedezéshez |
| "bonyolultság" | ⚡ | húr | "kezdő" · "középfok" · "haladó" · "szakértő" |
| `kockázat` | ⚡ | húr | "biztonságos" · "vigyázat" · "sértő" · "kritikus" |
| "szerszámok" | ⚡ | string[] | Tesztelt AI kódoló asszisztensek |
| "forrás" | ⚡ | húr | `omni-team` · `közösség` · `hivatalos` |
| "szerző" | ⚡ | húr | Attribútum |
| `hozzáadás_dátuma` | ⚡ | húr | ISO dátum |
| `frissítés dátuma` | ⚡ | húr | ISO dátum |

> ✅ = Mindig kötelező · ⚡ = Szigorú módban kötelező

A készség verzió független az npm csomag verziójától. A csomag jelenleg `0.1.3`, de a meglévő készségek érvényesen megmaradhatnak saját szemantikai verziójukon.---

## 🏷️ Canonical Categories

A repo taxonómia jelenleg**18 kanonikus kategóriát**határoz meg:

| Kategória | Domain |
|:---------|:-------|
| 💻 `fejlesztés` | Általános szoftverfejlesztés |
| 🎨 `frontend` | Frontend keretrendszerek és felhasználói felület |
| 🔧 `backend` | Háttérszolgáltatások és API-k |
| 🌐 `fullstack-web` | Teljes körű webfejlesztés |
| 🛠️ `eszközök` | Fejlesztői szerszámok és segédprogramok |
| ⚙️ `kli-automatizálás` | CLI-eszközök és automatizálási parancsfájlok |
| 📊 `üzleti` | Üzleti folyamatok és stratégia |
| 📐 `termék` | Termékmenedzsment és -tervezés |
| 🎯 `design` | Vizuális és UX tervezés |
| 🤖 `data-ai` | Adatmérnöki és mesterséges intelligencia alkalmazások |
| 🧠 `ai-agents` | AI ügynök fejlesztés és minták |
| 📈 `gépi tanulás` | ML modellek és képzés |
| 🔌 `devops` | Infrastruktúra és telepítés |
| 🛡️ `tesztelés-biztonság` | Tesztelési és biztonsági gyakorlatok |
| 📖 `dokumentáció` | Dokumentáció létrehozása és kezelése |
| 🎬 `tartalom-média` | Tartalomkészítés és média |
| 💬 `kommunikáció` | Kommunikációs eszközök és munkafolyamatok |
| ❓ "besorolatlan" | Alapértelmezett, ha nem található egyezés |

> A régebbi címkék, például a "munkafolyamat", "architektúra", "infrastruktúra", "biztonság" és "tesztelés" automatikusan normalizálódnak az alias-leképezés révén.---

## 📝 Body Structure

Egy jól megírt készségtest a következő hierarchiát követi:

### 📌 Áttekintés (kötelező)
2-3 mondat arról, hogy**mit**csinál a készség és**miért**létezik.

### 🎯 Mikor kell használni (kötelező)
A**specifikus forgatókönyvek**felsorolása, ahol ez a készség érvényes.

### 📋 Alapvető utasítások (kötelező)
A**lépésről lépésre**az ügynöknek követnie kell. Legyen egyértelmű. Legyen konkrét. Az ügynökök világos, egyértelmű utasításokkal működnek a legjobban.

### 💡 Példák (ajánlott)
Konkrét promptok, kódblokkok vagy várt kimenetek.**Minél pontosabb, annál jobb.**

### ✅ Bevált gyakorlatok (ajánlott)
A gyors beolvasáshoz használja a ✅ Do / ❌ Ne formáz gombot.

### 🔧 Hibaelhárítás (opcionális)
Gyakori problémák és megoldásaik.

### 🔗 Kapcsolódó készségek (opcionális)
Kereszthivatkozások a kiegészítő készségekre.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯**egy konkrét**munkafolyamatra vagy domainre összpontosít
- 📌 Az utasítások**elég egyértelműek ahhoz, hogy egy mesterséges intelligencia**emberi értelmezés nélkül is kövesse őket
- 💡**konkrét példákat**tartalmaz a várható viselkedéssel
- 🛡️ Megfelelő**hibakezelési**útmutatóval rendelkezik
- 📊 Egészséges metaadatokat állít elő: kanonikus kategória, lejárat L2+, minőség 70+
- 🧰 Újrafelhasználható támogatási csomagot szállít, nem csak prózát, ideális esetben „references/”, „scripts/”, „examples/” és „agents/”, ahol szükséges

Az erősebb pontozási mintákért, amelyek a képességeket a legmagasabb sávokba helyezik, lásd a [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md) című részt.### ❌ Bad Skill

- 🌫️ Általános tanács, amely bármire vonatkozhat
- 🤷 homályos utasítások, például "írj jó kódot"
- 🚫 Nincsenek példák vagy kódblokkok
- ⚠️ Hiányzó frontmatter mezők
- 📉 Alacsony minőségi pontszám (50 alatt)