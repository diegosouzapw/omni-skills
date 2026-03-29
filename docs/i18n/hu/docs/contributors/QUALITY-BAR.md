# ✅ Quality Bar (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Minimális követelmények és ajánlások a képességek Omni Skills adattárába való felvételéhez.**

A kifejezetten a legfelsőbb sávban elért eredményeket célzó alkotási útmutatásért lásd a [High-score Playbook](HIGH-SCORE-PLAYBOOK.md).

A kiadott katalógus jelenlegi referenciaértéke:

- 32 publikált készség
- átlagos minőségi pontszám `96,3`
- a legjobb gyakorlatok átlagos pontszáma `98,7`
- átlagos biztonsági pontszám `95,0`---

## 🔒 Required (Must Pass)

| # | Követelmény | Hogyan ellenőrizhető |
|:--|:------------|:---------------|
| 1️⃣ |**Érvényes előterjesztés**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Egyértelmű leírás**| Az egysorosnak el kell magyaráznia, mit csinál a készség (10+ karakter) |
| 3️⃣ |**A név megfelel a könyvtárnak**| a `name:` ​​mező pontosan megegyezik a mappa nevével |
| 4️⃣ |**Áttekintés szakasz**| A cél rövid magyarázata a leértékelés törzsében |
| 5️⃣ |**Mikor kell használni szakasz**| Legalább 2 konkrét használati forgatókönyv |
| 6️⃣ |**Működtethető utasítások**| Lépésről lépésre tartalom, amelyet egy AI-ügynök végrehajthat |
| 7️⃣ |**Létrehozott metaadatok**| A Validator sikeresen kiadja a `skills/<skill>/metadata.json` fájlt---

## ⭐ Recommended (Improves Score)

| # | ajánlás | Ponthatás |
|:--|:---------------|:--------------|
| 8️⃣ |**Példák**— legalább egy konkrét példa a várt kimenettel | 📈 Minőség +10-15 |
| 9️⃣ |**Bevált gyakorlatok**— ✅ Tedd / ❌ Ne adj útmutatást | 📈 Bevált gyakorlatok +5 |
| 🔟 |**Eszközzel tesztelve**— legalább egy AI kódoló asszisztenssel ellenőrizve | 📈 Minőség +5 |
| 1️⃣1️⃣ |**Címkék**– releváns kereshető címkék a felfedezéshez | 📈 Legjobb gyakorlatok +10 |
| 1️⃣2️⃣ |**Kategória**– egy kanonikus kategóriához rendelve | 📈 Legjobb gyakorlatok +10 |
| 1️⃣3️⃣ |**Hibaelhárítás**– konkrét "tünetek" és "megoldás" útmutató | 📈 Bevált gyakorlatok +5-10 |
| 1️⃣4️⃣ |**Helyi támogatási eszközök**— `references/`, `scripts/` és ideális esetben `examples/` a készségből | 📈 Legjobb gyakorlatok +10 |
| 1️⃣5️⃣ |**Egészséges besorolás**– lejárat L3, minőség 85+, legjobb gyakorlatok 90+ | 📈 Teljes szint |
| 1️⃣6️⃣ |**Nincs kritikus biztonsági megállapítás**– a statikus szkenner tiszta | 🛡️ Biztonság 100 |---

## ❌ Reasons for Rejection

| Kiadás | Miért |
|:------|:----|
| ❌ Hiányzó vagy érvénytelen frontanyag | Megszakítja az érvényesítési folyamatot |
| ❌ A név nem egyezik a | könyvtárral Megszakítja a katalógusgenerálást |
| ❌ Üres vagy triviálisan rövid leírás | A felhasználók nem fedezhetik fel a készséget |
| ❌ Nincs használható tartalom (csak linkek vagy csonkok) | Az ügynökök nem hajthatnak végre semmit |
| ❌ Másolás egyértelmű javítás nélkül | Adjon hozzá értéket, ne klónozzon |
| ❌ Sértő tartalom "kockázat: sértő" címke nélkül | Biztonság és megfelelőség |
| ❌ Kritikus biztonsági megállapítások | Gyors kiszűrés, pusztító parancsok stb. |---

## 🧪 Verify Locally

```bash
# Run validation
npm run validate

# Check your scores
cat skills/<your-skill>/metadata.json | jq '.quality, .best_practices, .security'

# Full build + smoke check
npm run build
npm run smoke
```

---

## 📊 Score Reference

| Méret | Kiváló | Jó | Munka kell |
|:----------|:----------|:-----|:------------|
| ⭐**Minőség**| 80+ (platina) | 60-79 (arany/ezüst) | <60 (bronz/induló) |
| 📋**Legjobb gyakorlatok**| 90+ (kiváló) | 70-89 (jó) | <70 (tisztességes/munka igény) |
| 🛡️**Biztonság**| 95+ (edzett) | 80-94 (biztonságos) | <80 (felülvizsgálat szükséges) |
| 🎯**Lejárat**| L3 (szkriptek+tesztek) | L2 (utasítások) | L1 (csak metaadatok) |---

## 🧭 What High Scores Require

Ahhoz, hogy következetesen elérjük a felső sávot, egy készségnek tartalmaznia kell:

- egy erőteljes frontmater leírás, amely elmagyarázza, hogy**mit**csinál a készség, és**mikor**kell használni
- kifejezett szakaszok a "Mikor kell használni", "Munkafolyamat", "Példák", "Bevált módszerek", "Hibaelhárítás" és "További források"
- helyi segédanyag a "references/", "scripts/" és ideális esetben az "examples/" alatt, közvetlenül a SKILL.md fájlból hivatkozva
- ügynök metaadatok az "agents/openai.yaml" alatt, ha a készség közvetlenül az ügynökkliensekben hívható meg
- egy kis műveleti tábla vagy azzal egyenértékű végrehajtási térkép, ha a munkafolyamat hasznot húz belőle
- legalább egy futtatható példa, amely egy helyi segédszkriptre vagy megismételhető parancsra mutat
- hibaelhárítás a "Tünetek" és a "Megoldás" néven írva, nem általános figyelmeztetések
- elég mélység ahhoz, hogy "L3"-nak minősüljön, nem csak jól formázott próza
- erősebb munkafolyamat-mélység, döntési eszközök és támogatási csomagok sokfélesége, ha csúcssávos minőséget szeretne
- elég mély támasztócsomag ahhoz, hogy újrafelhasználható legyen, nem csak a jelölőnégyzet lefedésére
- legalább 4 értelmes támogató család vagy ennek megfelelő mélység az újrafelhasználható fájlokban, ha azt szeretné, hogy a felső sáv következetes legyen