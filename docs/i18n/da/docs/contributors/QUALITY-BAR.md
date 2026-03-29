# ✅ Quality Bar (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Minimumskrav og anbefalinger for, at en færdighed kan accepteres i Omni Skills-lageret.**

Se [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md) for forfattervejledning, der er specifikt rettet mod top-bands partiturer.

Nuværende benchmark for det offentliggjorte katalog:

- 32 offentliggjorte færdigheder
- gennemsnitlig kvalitetsscore `96,3`
- Gennemsnitlig score for bedste praksis "98,7".
- gennemsnitlig sikkerhedsscore `95,0`---

## 🔒 Required (Must Pass)

| # | Krav | Sådan bekræftes |
|:--|:------------|:-------------|
| 1️⃣ |**Gyldig frontmateriale**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Klar beskrivelse**| One-liner skal forklare, hvad færdigheden gør (10+ tegn) |
| 3️⃣ |**Navn matcher bibliotek**| `navn:`-feltet matcher mappenavnet nøjagtigt |
| 4️⃣ |**Oversigtssektion**| Kort forklaring af formålet i nedskrivningsorganet |
| 5️⃣ |**Sektionen Hvornår skal bruges**| Mindst 2 specifikke brugsscenarier |
| 6️⃣ |**Handlingsbare instruktioner**| Trin-for-trin indhold, som en AI-agent kan udføre |
| 7️⃣ |**Genereret metadata**| Validator udsender `skills/<skill>/metadata.json` med succes |---

## ⭐ Recommended (Improves Score)

| # | Anbefaling | Score Indvirkning |
|:--|:---------------|:------------|
| 8️⃣ |**Eksempler**— mindst ét ​​konkret eksempel med forventet output | 📈 Kvalitet +10-15 |
| 9️⃣ |**Bedste praksis**— ✅ Gør / ❌ Må ikke vejledes | 📈 Bedste praksis +5 |
| 🔟 |**Testet med et værktøj**— verificeret med mindst én AI-kodningsassistent | 📈 Kvalitet +5 |
| 1️⃣1️⃣ |**Tags**— relevante søgbare tags til opdagelse | 📈 Bedste praksis +10 |
| 1️⃣2️⃣ |**Kategori**— tildelt én kanonisk kategori | 📈 Bedste praksis +10 |
| 1️⃣3️⃣ |**Fejlfinding**— konkret "symptomer" og "løsning" vejledning | 📈 Bedste praksis +5-10 |
| 1️⃣4️⃣ |**Lokale supportaktiver**— `referencer/`, `scripts/` og ideelt set `eksempler/` forbundet fra færdigheden | 📈 Bedste praksis +10 |
| 1️⃣5️⃣ |**Sund klassificering**— modenhed L3, kvalitet 85+, bedste praksis 90+ | 📈 Samlet niveau |
| 1️⃣6️⃣ |**Ingen kritiske sikkerhedsfund**— statisk scanner klarer sig ren | 🛡️ Sikkerhed 100 |---

## ❌ Reasons for Rejection

| Udgave | Hvorfor |
|:------|:----|
| ❌ Manglende eller ugyldig frontmateriale | Bryder valideringspipeline |
| ❌ Navnet stemmer ikke overens med mappen | Bryder kataloggenerering |
| ❌ Tom eller trivielt kort beskrivelse | Brugere kan ikke opdage færdigheden |
| ❌ Intet handlingsvenligt indhold (kun links eller stubs) | Agenter kan ikke udføre noget |
| ❌ Duplikat uden tydelig forbedring | Tilføj værdi, klon ikke |
| ❌ Stødende indhold uden "risiko: stødende" tag | Sikkerhed og overholdelse |
| ❌ Kritiske sikkerhedsresultater | Hurtig eksfiltrering, destruktive kommandoer osv. |---

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

| Dimension | Fremragende | Godt | Har brug for arbejde |
|:----------|:---------|:-----|:-----|
| ⭐**Kvalitet**| 80+ (platin) | 60-79 (guld/sølv) | <60 (bronze/starter) |
| 📋**Bedste praksis**| 90+ (fremragende) | 70-89 (god) | <70 (fair/behov-arbejde) |
| 🛡️**Sikkerhed**| 95+ (hærdet) | 80-94 (sikker) | <80 (gennemgang nødvendig) |
| 🎯**Modenhed**| L3 (scripts+tests) | L2 (vejledning) | L1 (kun metadata) |---

## 🧭 What High Scores Require

For at nå det øverste bånd konsekvent bør en færdighed omfatte:

- en stærk frontmatter-beskrivelse, der både forklarer**hvad**færdigheden gør og**hvornår**den skal bruges
- eksplicitte sektioner for "Hvornår skal bruges", "Workflow", "Eksempler", "Bedste praksis", "Fejlfinding" og "Yderligere ressourcer".
- lokalt supportmateriale under `referencer/`, `scripts/`, og ideelt set `eksempler/`, linket direkte fra `SKILL.md`
- agentmetadata under `agents/openai.yaml`, når færdigheden er beregnet til at blive påberåbt direkte i agentklienter
- en lille operationstabel eller tilsvarende udførelseskort, når arbejdsgangen nyder godt af det
- mindst ét kørselsbart eksempel, der peger på et lokalt hjælpescript eller en gentagelig kommando
- fejlfinding skrevet som 'Symptomer' plus 'Løsning', ikke generiske advarsler
- nok dybde til at kvalificere sig som 'L3', ikke kun velformateret prosa
- stærkere workflowdybde, beslutningsaktiver og supportpakkediversitet, hvis du ønsker top-band kvalitet
- en supportpakke, der er dyb nok til at føles genbrugelig, ikke kun til stede for at dække afkrydsningsfeltet
- mindst 4 meningsfulde støttefamilier eller den tilsvarende dybde i genanvendelige filer, hvis du ønsker det øverste bånd konsekvent