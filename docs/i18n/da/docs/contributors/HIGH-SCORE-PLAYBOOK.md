# 🏆 High-Score Skill Playbook (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Hvad en Omni Skills `SKILL.md` har brug for i praksis for at nå høje resultater for modenhed, bedste praksis, kvalitet og sikkerhed.**---

## 🎯 Purpose

Denne vejledning forklarer, hvordan depotets klassifikator faktisk belønner en færdighed.

Brug det, når du vil:

- Forfatter en ny færdighed, der lander i de mest scorende bands
- forbedre en eksisterende færdighed, der sidder fast i "god" eller lav "fremragende".
- forstå hvorfor en færdighed med anstændig formatering stadig ikke scorer som et exceptionelt operationelt aktiv

Dette er den bidragydervendte ledsager til:

- [Kvalitetsbjælke](QUALITY-BAR.md)
- [Skill Anatomy](SKILL-ANATOMY.md)
- [Skill Classification](../specs/SKILL-CLASSIFICATION.md)

Nuværende benchmark for live-kataloget:

- 32 offentliggjorte færdigheder
- nuværende kvalitetsspredning: `94, 95, 96, 97, 100`
- Aktuel spredning af bedste praksis: `98, 99, 100`
- nuværende top-end: "omni-figma" i "100/100" kvalitet og "100/100" bedste praksis---

## 🧱 What High Scores Really Mean

Klassificeringsorganet belønner**ikke**pænt nedslag alene.

Højtscorende færdigheder er færdigheder, der er:

-**opdagelig**: beskrivelsen siger tydeligt, hvad færdigheden gør, og hvornår den skal bruges
-**operationel**: færdigheden inkluderer lokale scripts, referencer og kørselbare eksempler
-**diagnostik**: det hjælper agenten med at komme sig, når tingene går galt
-**specifik**: den er fokuseret på én arbejdsgang, ikke bred rådgivning
-**sikker**: det undgår risikable mønstre og sender rent scanneroutput

I praksis opfører de stærkeste færdigheder sig mere som et**lille pakket workflow-kit**end en almindelig note.---

## 📋 Score Targets

Brug disse mål, når du skriver:

| Dimension | Stærkt mål | Ekstraordinært mål |
|:----------|:--------------|:------------------------|
| 🎯 Modenhed | `L3` | `L3` med flere supportressourcer |
| 📋 Bedste praksis | `90+` | `96+` |
| ⭐ Kvalitet | `85+` | `90+` |
| 🛡️ Sikkerhed | `95+` | `95+` med nul fund |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Din frontmatter skal gøre færdigheden let at klassificere og let at opdage:

- `navn` matcher mappen nøjagtigt
- `beskrivelse` forklarer både**hvad**og**hvornår**
- `kategori`, `tags`, `værktøjer`, `kompleksitet`, `risiko`, `kilde`, `forfatter` og datoer er alle til stede

God beskrivelse form:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Dårlig beskrivelsesform:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

De stærkeste færdigheder inkluderer konsekvent disse sektioner:

- `## Oversigt`
- `## Hvornår skal man bruge denne færdighed`
- `## Workflow`
- `## Eksempler`
- `## bedste praksis`
- `## Fejlfinding`
- `## Yderligere ressourcer`

Hvis en af disse mangler, kan scoren stadig være god, men det bliver sværere at se exceptionel ud.---

### 3. Runnable Local Support

Topscorende færdigheder inkluderer normalt:

- `references/checklist.md`
- et eller flere hjælpescripts i `scripts/`
- mindst ét udført eksempel i `eksempler/`
- `agents/openai.yaml` når færdigheden er beregnet til direkte agentankaldelse
- direkte links fra `SKILL.md` til de lokale filer

Dette er vigtigt, fordi klassificereren behandler en færdighed med**bundtet støttemateriale**som mere handlekraftig end en, der kun peger udad.

Anbefalet minimum:```text
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

Eksempler med høj score er:

- beton
- skrevet med et rigtigt hegn såsom 'bash' eller 'python'
- bundet til et lokalt script eller gentagelig kommando
- repræsentant for arbejdsgangen

Godt:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Svag:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Målscoreren belønner fejlfinding, der hjælper en agent med at komme sig, ikke bare genkende et problem.

Foretrukket format:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Dette er stærkere end en vag note som:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Klassifikatoren skelner nu mellem en færdighed, der blot er komplet, og en, der er virkelig dyb.

Signaler der hjælper:

- flere konkrete eksempler
- flere fejlfindingssager
- vejledning vedrørende færdigheder
- rigere referencepakker
- en synlig "## Workflow" sektion med nummererede trin, som målscoreren kan tælle direkte
- mindst én operationel tabel eller udførelseskort, hvor det tydeliggør arbejdsgangen
- mere end én supportmappe eller aktivtype
- Workflow sektioner med nok trin til at guide udførelsen
- beslutningsaktiver såsom tjeklister, rubrikker, matricer, pakker eller spillebøger
- stærkere support-pakke-diversitet på tværs af `referencer/`, `scripts/`, `agents/`, `examples/` eller `assets/`
- nok genbrugelige supportfiler til at ligne et sæt, ikke en eneste hjælper gemt ved siden af markdown
- mere end en enkelt hjælpefil, når arbejdsgangen er kompleks nok til at retfærdiggøre en supportpakke
- nok kropsdybde til at dække afvejninger og fejltilstande
- tættere betjeningsvejledning, fordi scoreren nu skelner poleret formatering fra ægte genanvendelig workflowdybde

Signaler, der**ikke**hjælper meget:

- gentagelse af den samme instruktion med forskellige ord
- generisk udfyldningstekst
- tilføjelse af overskrifter uden at tilføje substans under dem---

## 🧪 Fast Checklist Before You Commit

Brug denne tjekliste, før du kører validering:

- beskrivelsen siger**hvad**og**hvornår**
- færdigheden er fokuseret på én arbejdsgang
- `## Workflow` findes og indeholder nummererede eller punktopstillede trin
- Der findes mindst ét kørselsbart eksempel
- `referencer/`, `scripts/` og ideelt set `eksempler/` er linket fra `SKILL.md`
- `agents/openai.yaml` eksisterer, når færdigheden er beregnet til direkte påkaldelse i agentklienter
- fejlfinding bruger 'Symptomer' og 'Løsning'
- færdigheden kan med rimelighed klassificeres som "L3".
- ingen risikable kommandoer eller mistænkelige stier er til stede

Kør derefter:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- beskrivelsen er korrekt, men for generisk
- afmærkningen har sektioner, men ingen operationel dybde
- eksempler peger ikke på lokale hjælpere
- fejlfinding findes, men er ikke diagnostisk
- der er for få tags eller værktøjs-id'er
- færdigheden er sikker og ren, men stadig for lav til at tælle som usædvanlig---

## 🧭 Practical Rule

Hvis din færdighed føles som:

- en**skabelon**: den kan passere
- en**guide**: den kan score godt
- en**workflow-pakke**: det er meget mere sandsynligt, at den scorer i toppen