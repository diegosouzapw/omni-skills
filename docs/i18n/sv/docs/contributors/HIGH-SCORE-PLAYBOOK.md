# 🏆 High-Score Skill Playbook (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Vad en Omni Skills `SKILL.md` behöver i praktiken för att nå höga mognad, bästa praxis, kvalitet och säkerhetspoäng.**---

## 🎯 Purpose

Den här guiden förklarar hur förvarets klassificerare faktiskt belönar en färdighet.

Använd den när du vill:

- författar en ny färdighet som hamnar i topprankande band
- förbättra en befintlig färdighet som har fastnat i "bra" eller låg "utmärkt".
- förstå varför en färdighet med anständig formatering fortfarande inte ger poäng som en exceptionell operativ tillgång

Det här är den bidragsgivare som vänder sig till:

- [Kvalitetsfält](QUALITY-BAR.md)
- [Skill Anatomy](SKILL-ANATOMY.md)
- [Skill Classification](../specs/SKILL-CLASSIFICATION.md)

Aktuellt riktmärke för livekatalogen:

- 32 publicerade färdigheter
- aktuell kvalitetsspridning: `94, 95, 96, 97, 100`
- aktuell spridning av bästa praxis: "98, 99, 100".
- nuvarande toppände: "omni-figma" med "100/100" kvalitet och "100/100" bästa praxis---

## 🧱 What High Scores Really Mean

Klassificeraren belönar**inte**enbart ganska nedslag.

Färdigheter med höga poäng är färdigheter som är:

-**upptäckbar**: beskrivningen säger tydligt vad färdigheten gör och när den ska användas
-**operativ**: färdigheten inkluderar lokala skript, referenser och körbara exempel
-**diagnostik**: det hjälper agenten att återhämta sig när saker går fel
-**specifik**: den är fokuserad på ett arbetsflöde, inte breda råd
-**säkert**: den undviker riskfyllda mönster och skickar rena skannerutdata

I praktiken beter sig de starkaste färdigheterna mer som ett**litet paketerat arbetsflödespaket**än en vanlig notering.---

## 📋 Score Targets

Använd dessa mål när du skriver:

| Dimension | Starkt mål | Exceptionellt mål |
|:----------|:-------------|:------------------------|
| 🎯 Mognad | `L3` | `L3` med flera supportresurser |
| 📋 Bästa metoder | `90+` | `96+` |
| ⭐ Kvalitet | `85+` | `90+` |
| 🛡️ Säkerhet | `95+` | `95+` med noll fynd |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Din frontmatter ska göra färdigheten lätt att klassificera och lätt att upptäcka:

- `namn` matchar katalogen exakt
- "beskrivning" förklarar både**vad**och**när**
- "kategori", "taggar", "verktyg", "komplexitet", "risk", "källa", "författare" och datum är alla närvarande

Bra beskrivningsform:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Dålig beskrivningsform:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

De starkaste färdigheterna inkluderar genomgående dessa avsnitt:

- `## Översikt`
- `## När ska man använda denna färdighet`
- `## Arbetsflöde`
- `## Exempel`
- `## Bästa metoder`
- `## Felsökning`
- `## Ytterligare resurser`

Om någon av dessa saknas kan poängen fortfarande vara bra, men det blir svårare att se exceptionell ut.---

### 3. Runnable Local Support

Bästa poängfärdigheter inkluderar vanligtvis:

- `referenser/checklista.md`
- ett eller flera hjälpskript i `scripts/`
- minst ett fungerat exempel i `exempel/`
- `agents/openai.yaml` när färdigheten är avsedd för direkt agentanrop
- direktlänkar från `SKILL.md` till dessa lokala filer

Detta är viktigt eftersom klassificeraren behandlar en färdighet med**buntat stödmaterial**som mer handlingskraftig än en som bara pekar utåt.

Rekommenderat minimum:```text
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

Exempel på höga poäng är:

- betong
- skrivit med ett riktigt staket som "bash" eller "python".
- knuten till ett lokalt skript eller repeterbart kommando
- representant för arbetsflödet

Bra:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Svag:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Målskytten belönar felsökning som hjälper en agent att återhämta sig, inte bara känna igen ett problem.

Önskat format:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Detta är starkare än en vag ton som:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Klassificeraren skiljer nu mellan en färdighet som bara är fullständig och en som är genuint djup.

Signaler som hjälper:

- Flera konkreta exempel
- Flera felsökningsfall
- Relaterad kompetensvägledning
- rikare referenspaket
- en synlig "## Workflow"-sektion med numrerade steg som målskytten kan räkna direkt
- minst en operationstabell eller exekveringskarta där den förtydligar arbetsflödet
- mer än en supportkatalog eller tillgångstyp
- arbetsflödessektioner med tillräckligt med steg för att styra utförande
- Beslutstillgångar som checklistor, rubriker, matriser, paket eller spelböcker
- Större mångfald av supportpaket över `referenser/`, `skript/`, `agenter/`, `exempel/` eller `tillgångar/`
- tillräckligt många återanvändbara supportfiler för att se ut som ett kit, inte en enda hjälpreda inbäddad bredvid markdown
- mer än en enda hjälpfil när arbetsflödet är tillräckligt komplext för att motivera ett supportpaket
- Tillräckligt kroppsdjup för att täcka avvägningar och fellägen
- tätare operativ vägledning, eftersom poängspelaren nu skiljer polerad formatering från genuint återanvändbart arbetsflödesdjup

Signaler som**inte**hjälper mycket:

- upprepa samma instruktion med olika ord
- Generisk fyllnadstext
- lägga till rubriker utan att lägga till substans under dem---

## 🧪 Fast Checklist Before You Commit

Använd den här checklistan innan du kör validering:

- beskrivningen säger**vad**och**när**
- Färdigheten är fokuserad på ett arbetsflöde
- `## Workflow` finns och innehåller numrerade eller punktuppställda steg
- Det finns minst ett körbart exempel
- `referenser/`, `skript/` och helst `exempel/` är länkade från `SKILL.md`
- `agents/openai.yaml` finns när färdigheten är avsedd för direkt anrop i agentklienter
- felsökning använder "Symtom" och "Lösning".
- Färdigheten kan rimligen klassificeras som "L3".
- inga riskabla kommandon eller misstänkta vägar finns

Kör sedan:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- Beskrivningen är korrekt men för generisk
- markdownen har sektioner men inget operativt djup
– exempel pekar inte på lokala hjälpare
- felsökning finns men är inte diagnostisk
- det finns för få taggar eller verktygsidentifierare
- färdigheten är säker och ren men fortfarande för ytlig för att räknas som exceptionell---

## 🧭 Practical Rule

Om din skicklighet känns som:

- en**mall**: den kan passera
- en**guide**: den kan få bra poäng
- ett**arbetsflödespaket**: det är mycket mer sannolikt att få poäng i toppen