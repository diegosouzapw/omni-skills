# 🏆 High-Score Skill Playbook (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Mire van szüksége egy Omni Skills `SKILL.md-nek a gyakorlatban ahhoz, hogy magas érettséget, bevált gyakorlatokat, minőségi és biztonsági pontszámokat érjen el.**---

## 🎯 Purpose

Ez az útmutató elmagyarázza, hogy az adattár osztályozója valójában hogyan jutalmazza a készségeket.

Használja, ha szeretné:

- új készség létrehozása, amely a legtöbb gólt szerző sávban landol
- javítani egy meglévő képességet, amely megrekedt a "jó" vagy az alacsony "kiváló".
- megérteni, hogy egy tisztességes formázással rendelkező készség miért nem olyan, mint egy kivételes működési eszköz

Ez a közreműködő felé forduló társa a következőkhöz:

- [Quality Bar](QUALITY-BAR.md)
- [Skill Anatómia](SKILL-ANATOMY.md)
- [Skill Classification](../specs/SKILL-CLASSIFICATION.md)

Az élő katalógus jelenlegi referenciaértéke:

- 32 publikált készség
- jelenlegi minőségi eloszlás: `94, 95, 96, 97, 100`
- a jelenlegi bevált gyakorlatok elterjedése: "98, 99, 100".
- jelenlegi felső vég: "omni-figma" "100/100" minőségben és "100/100" legjobb gyakorlatok---

## 🧱 What High Scores Really Mean

Az osztályozó önmagában**nem**jutalmazza a jelentős leértékelést.

A magas pontszámú készségek a következők:

-**felfedezhető**: a leírás világosan leírja, mit csinál a készség, és mikor kell használni
-**működési**: a készség helyi szkripteket, hivatkozásokat és futtatható példákat tartalmaz
-**diagnosztikai**: segít az ügynöknek felépülni, ha valami rosszul sül el
-**specifikus**: egyetlen munkafolyamatra összpontosít, nem átfogó tanácsokra
-**biztonságos**: elkerüli a kockázatos mintákat, és tiszta szkenner kimenetet szállít

A gyakorlatban a legerősebb készségek inkább úgy viselkednek, mint egy**kis csomagolt munkafolyamat-készlet**, semmint egy egyszerű leárazási megjegyzés.---

## 📋 Score Targets

Használja ezeket a célokat a szerkesztés során:

| Méret | Erős cél | Kivételes cél |
|:----------|:--------------|:--------------------|
| 🎯 Lejárat | "L3" | "L3" több támogatási erőforrással |
| 📋 legjobb gyakorlatok | "90+" | "96+" |
| ⭐ Minőség | "85+" | "90+" |
| 🛡️ Biztonság | "95+" | "95+" nulla találattal |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

A frontanyagnak könnyen besorolhatóvá és felfedezhetővé kell tennie a készségeket:

- A `name` pontosan megegyezik a könyvtárral
- A "leírás" megmagyarázza a**mit**és a**mikor**is
- A "kategória", "címkék", "eszközök", "összetettség", "kockázat", "forrás", "szerző" és dátumok mind szerepelnek

Jó leírású forma:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Rossz leírású forma:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

A legerősebb készségek következetesen a következő részeket tartalmazzák:

- "## Áttekintés".
- `## Mikor kell használni ezt a készséget?
- "## Munkafolyamat".
- "## Példák".
- "## legjobb gyakorlatok".
- "## Hibaelhárítás".
- "## További források".

Ha ezek közül valamelyik hiányzik, a pontszám még mindig jó lehet, de nehezebb kivételesnek látszani.---

### 3. Runnable Local Support

A legtöbb pontozó képesség általában a következőket tartalmazza:

- `references/checklist.md`
- egy vagy több segédszkript a `scripts/`-ben
- legalább egy működő példa az `examples/`-ben
- "agents/openai.yaml", ha a készség közvetlen ügynök-meghívásra szolgál
- közvetlen hivatkozások a `SKILL.md` fájlból azokra a helyi fájlokra

Ennek azért van jelentősége, mert az osztályozó a**csomagolt segédanyaggal**rendelkező készségeket hatékonyabbnak tekinti, mint azt, amelyik csak kifelé mutat.

Ajánlott minimum:```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

A magas pontszámú példák a következők:

- beton
- valódi kerítéssel írva, például "bash" vagy "python".
- helyi szkripthez vagy megismételhető parancshoz kötve
- a munkafolyamat képviselője

Jó:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Gyenge:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

A pontozó jutalmazza a hibaelhárítást, amely segít az ügynöknek a helyreállításban, nem csak a probléma felismerésében.

Előnyben részesített formátum:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Ez erősebb, mint egy homályos megjegyzés, mint például:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Az osztályozó most különbséget tesz a csupán teljes és az igazán mély készség között.

Segítő jelek:

- több konkrét példa
- több hibaelhárítási eset
- kapcsolódó készségekkel kapcsolatos útmutatás
- gazdagabb referenciacsomagok
- látható "## Workflow" szakasz számozott lépésekkel, amelyeket a pontozó közvetlenül számolhat
- legalább egy műveleti tábla vagy végrehajtási térkép, ahol tisztázza a munkafolyamatot
- egynél több támogatási könyvtár vagy eszköztípus
- munkafolyamat szakaszok, amelyek elegendő lépést tartalmaznak a végrehajtás irányításához
- döntési eszközök, például ellenőrző listák, rubrikák, mátrixok, csomagok vagy játékkönyvek
- erősebb támogatási csomagok sokfélesége a "references/", "scripts/", "agents/", "examples/" vagy "assets/" között
- elegendő újrafelhasználható támogatási fájl ahhoz, hogy úgy nézzen ki, mint egy készlet, egyetlen segítő sincs a leértékelés mellett
- több mint egyetlen segédfájl, ha a munkafolyamat elég összetett ahhoz, hogy egy támogatási csomagot indokoljon
- elegendő testmélység a kompromisszumok és a meghibásodási módok fedezésére
- sűrűbb működési útmutatás, mert a pontozó mostantól megkülönbözteti a csiszolt formázást a valóban újrafelhasználható munkafolyamat-mélységtől

A**nem**sokat segítő jelek:

- ugyanazon utasítás megismétlése különböző szavakkal
- általános kitöltő szöveg
- címsorok hozzáadása anélkül, hogy alájuk tartalmat adna---

## 🧪 Fast Checklist Before You Commit

Az érvényesítés futtatása előtt használja ezt az ellenőrző listát:

- a leírásban szerepel, hogy**mit**és**mikor**
- a készség egy munkafolyamatra összpontosul
- A `## Workflow` létezik, és számozott vagy felsorolásjeles lépéseket tartalmaz
- legalább egy futtatható példa létezik
- A `references/`, `scripts/` és ideális esetben az `examples/` a `SKILL.md` fájlból vannak linkelve
- Az "agents/openai.yaml" akkor létezik, ha a készség az ügynökkliensek közvetlen meghívására szolgál
- a hibaelhárítás a "Tünetek" és a "Megoldás" elemeket használja
- a készség ésszerűen "L3" kategóriába sorolható
- nincsenek kockázatos parancsok vagy gyanús utak

Akkor futtasd:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- a leírás helyes, de túl általános
- a leértékelésnek vannak szakaszai, de nincs működési mélysége
- a példák nem a helyi segítőkre utalnak
- Hibaelhárítás létezik, de nem diagnosztikus
- túl kevés a címke vagy az eszközazonosító
- a képesség biztonságos és tiszta, de még mindig túl sekély ahhoz, hogy kivételesnek számítson---

## 🧭 Practical Rule

Ha úgy érzed a képességeidet:

- egy**sablon**: átmegy
- egy**útmutató**: jó eredményt adhat
-**munkafolyamat-csomag**: sokkal valószínűbb, hogy a csúcsot éri el