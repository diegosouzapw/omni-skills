# 🏆 High-Score Skill Playbook (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Wat een Omni Skills `SKILL.md` in de praktijk nodig heeft om hoge scores voor volwassenheid, best practices, kwaliteit en beveiliging te bereiken.**---

## 🎯 Purpose

In deze handleiding wordt uitgelegd hoe de classificator van de repository een vaardigheid daadwerkelijk beloont.

Gebruik het wanneer u:

- ontwikkel een nieuwe vaardigheid die in de best scorende bands belandt
- een bestaande vaardigheid verbeteren die vastzit in 'goed' of laag 'uitstekend'
- begrijp waarom een vaardigheid met fatsoenlijke opmaak nog steeds niet scoort als een uitzonderlijke operationele troef

Dit is de op bijdragers gerichte aanvulling op:

- [Kwaliteitsbalk](QUALITY-BAR.md)
- [Vaardigheidanatomie](SKILL-ANATOMY.md)
- [Vaardigheidsclassificatie](../specs/SKILL-CLASSIFICATION.md)

Huidige benchmark voor de live catalogus:

- 32 gepubliceerde vaardigheden
- huidige kwaliteitsspreiding: `94, 95, 96, 97, 100`
- huidige best practices-spreiding: `98, 99, 100`
- huidige topklasse: `omni-figma` met `100/100` kwaliteit en `100/100` best practices---

## 🧱 What High Scores Really Mean

De classificator beloont**niet**alleen een mooie prijsverlaging.

Hoogscorende vaardigheden zijn vaardigheden die:

-**vindbaar**: in de beschrijving staat duidelijk wat de vaardigheid doet en wanneer je deze moet gebruiken
-**operationeel**: de vaardigheid omvat lokale scripts, referenties en uitvoerbare voorbeelden
-**diagnostisch**: het helpt de agent te herstellen als er iets misgaat
-**specifiek**: het is gericht op één workflow, niet op breed advies
-**veilig**: het vermijdt risicovolle patronen en levert schone scanneruitvoer

In de praktijk gedragen de sterkste vaardigheden zich meer als een**klein verpakte workflowkit**dan als een eenvoudige afprijsnota.---

## 📋 Score Targets

Gebruik deze doelen bij het schrijven:

| Afmeting | Sterk doel | Uitzonderlijk doel |
|:----------|:--------------|:------------------|
| 🎯 Rijpheid | `L3` | `L3` met meerdere ondersteuningsbronnen |
| 📋 Beste praktijken | `90+` | `96+` |
| ⭐ Kwaliteit | `85+` | `90+` |
| 🛡️ Beveiliging | `95+` | `95+` met nul bevindingen |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Je frontmatter moet ervoor zorgen dat de vaardigheid gemakkelijk te classificeren en gemakkelijk te ontdekken is:

- `naam` komt exact overeen met de directory
- `beschrijving` legt zowel**wat**als**wanneer**uit
- 'categorie', 'tags', 'tools', 'complexiteit', 'risico', 'bron', 'auteur' en datums zijn allemaal aanwezig

Goede beschrijving vorm:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Slechte beschrijving vorm:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

De sterkste vaardigheden omvatten consequent deze secties:

- `## Overzicht`
- `## Wanneer gebruik je deze vaardigheid`
- `## Werkstroom`
- `## Voorbeelden`
- `## Beste praktijken`
- `## Probleemoplossing`
- `## Aanvullende bronnen`

Als een van deze ontbreekt, kan de score nog steeds goed zijn, maar wordt het moeilijker om er uitzonderlijk uit te zien.---

### 3. Runnable Local Support

De best scorende vaardigheden omvatten meestal:

- `referenties/checklist.md`
- een of meer helperscripts in `scripts/`
- minstens één uitgewerkt voorbeeld in `examples/`
- `agents/openai.yaml` wanneer de vaardigheid bedoeld is voor directe aanroep van agenten
- directe links van `SKILL.md` naar die lokale bestanden

Dit is van belang omdat de classificator een vaardigheid met**gebundeld ondersteunend materiaal**beschouwt als bruikbaarder dan een vaardigheid die alleen maar naar buiten wijst.

Aanbevolen minimum:```text
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

Hoog scorende voorbeelden zijn:

- beton
- getypt met een echt hek zoals `bash` of `python`
- gebonden aan een lokaal script of herhaalbare opdracht
- representatief voor de workflow

Goed:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Zwak:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

De scorer beloont het oplossen van problemen waardoor een agent kan herstellen en niet alleen een probleem kan herkennen.

Voorkeur formaat:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Dit is sterker dan een vage opmerking als:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

De classificator maakt nu onderscheid tussen een vaardigheid die louter compleet is en een vaardigheid die werkelijk diepgaand is.

Signalen die helpen:

- meerdere concrete voorbeelden
- meerdere gevallen van probleemoplossing
- begeleiding van gerelateerde vaardigheden
- rijkere referentiepakketten
- een zichtbaar `## Workflow`-gedeelte met genummerde stappen die de scorer direct kan tellen
- minstens één operationele tabel of uitvoeringskaart waar het de workflow verduidelijkt
- meer dan één ondersteuningsmap of itemtype
- workflowsecties met voldoende stappen om de uitvoering te begeleiden
- beslissingsmiddelen zoals checklists, rubrieken, matrices, pakketten of draaiboeken
- sterkere diversiteit aan ondersteuningspakketten voor `references/`, `scripts/`, `agents/`, `examples/` of `assets/`
- voldoende herbruikbare ondersteuningsbestanden die eruitzien als een bouwpakket, zonder dat er ook maar één helper naast de prijsverlaging zit
- meer dan één enkel hulpbestand als de workflow complex genoeg is om een ondersteuningspakket te rechtvaardigen
- voldoende lichaamsdiepte om afwegingen en faalmodi te dekken
- dichtere operationele begeleiding, omdat de scorer nu gepolijste opmaak onderscheidt van echt herbruikbare workflow-diepte

Signalen die**niet**veel helpen:

- dezelfde instructie in verschillende woorden herhalen
- algemene vultekst
- kopjes toevoegen zonder inhoud eronder toe te voegen---

## 🧪 Fast Checklist Before You Commit

Gebruik deze checklist voordat u de validatie uitvoert:

- beschrijving zegt**wat**en**wanneer**
- de vaardigheid is gericht op één workflow
- `## Workflow` bestaat en bevat genummerde stappen of stappen met opsommingstekens
- er bestaat minstens één uitvoerbaar voorbeeld
- `references/`, `scripts/` en idealiter `examples/` zijn gelinkt vanuit `SKILL.md`
- `agents/openai.yaml` bestaat wanneer de vaardigheid bedoeld is voor directe aanroep in agentclients
- probleemoplossing gebruikt 'Symptomen' en 'Oplossing'
- de vaardigheid kan redelijkerwijs worden geclassificeerd als `L3`
- er zijn geen risicovolle commando's of verdachte paden aanwezig

Voer vervolgens uit:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- de beschrijving is correct maar te algemeen
- de afwaardering heeft secties maar geen operationele diepte
- voorbeelden verwijzen niet naar lokale helpers
- Er bestaat probleemoplossing, maar deze is niet diagnostisch
- er zijn te weinig tags of tool-ID's
- de vaardigheid is veilig en schoon, maar nog steeds te oppervlakkig om als uitzonderlijk te gelden---

## 🧭 Practical Rule

Als uw vaardigheid aanvoelt als:

- een**sjabloon**: deze kan passeren
- een**gids**: deze kan goed scoren
- een**workflowpakket**: de kans is veel groter dat je bovenaan scoort