# ✅ Quality Bar (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Minimikrav och rekommendationer för att en färdighet ska accepteras i Omni Skills-förrådet.**

Se [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md) för författarvägledning som är specifikt inriktad på toppbandsmusik.

Aktuellt riktmärke för den publicerade katalogen:

- 32 publicerade färdigheter
- Genomsnittligt kvalitetsresultat "96,3".
- Genomsnittligt betyg för bästa praxis "98,7".
- genomsnittlig säkerhetspoäng "95,0".---

## 🔒 Required (Must Pass)

| # | Krav | Hur man verifierar |
|:--|:------------|:-------------|
| 1️⃣ |**Giltigt frontmateria**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Klar beskrivning**| One-liner måste förklara vad färdigheten gör (10+ tecken) |
| 3️⃣ |**Namn matchar katalog**| `name:`-fältet matchar mappnamnet exakt |
| 4️⃣ |**Översiktssektion**| Kort förklaring av syftet i nedskrivningsorganet |
| 5️⃣ |**Användningssektion**| Minst 2 specifika användningsscenarier |
| 6️⃣ |**Användbara instruktioner**| Steg-för-steg-innehåll som en AI-agent kan köra |
| 7️⃣ |**Genererad metadata**| Validator sänder ut `skills/<skill>/metadata.json` framgångsrikt |---

## ⭐ Recommended (Improves Score)

| # | Rekommendation | Betyg Inverkan |
|:--|:--------------|:------------|
| 8️⃣ |**Exempel**— minst ett konkret exempel med förväntad effekt | 📈 Kvalitet +10-15 |
| 9️⃣ |**Bästa metoder**— ✅ Gör / ❌ Vägledning inte | 📈 Bästa metoder +5 |
| 🔟 |**Testat med ett verktyg**— verifierad med minst en AI-kodningsassistent | 📈 Kvalitet +5 |
| 1️⃣1️⃣ |**Taggar**— relevanta sökbara taggar för upptäckt | 📈 Bästa metoder +10 |
| 1️⃣2️⃣ |**Kategori**— tilldelad en kanonisk kategori | 📈 Bästa metoder +10 |
| 1️⃣3️⃣ |**Felsökning**— konkret "Symtom" och "Lösning" vägledning | 📈 Bästa praxis +5-10 |
| 1️⃣4️⃣ |**Lokal supporttillgångar**— `referenser/`, `skript/`, och helst `exempel/` länkade från färdigheten | 📈 Bästa metoder +10 |
| 1️⃣5️⃣ |**Hälsosam klassificering**— mognad L3, kvalitet 85+, bästa praxis 90+ | 📈 Övergripande nivå |
| 1️⃣6️⃣ |**Inga kritiska säkerhetsfynd**— statisk skanner klarar ren | 🛡️ Säkerhet 100 |---

## ❌ Reasons for Rejection

| Problem | Varför |
|:------|:----|
| ❌ Saknade eller ogiltigt frontmaterial | Bryter valideringspipeline |
| ❌ Namnet matchar inte katalogen | Bryter kataloggenerering |
| ❌ Tom eller trivialt kort beskrivning | Användare kan inte upptäcka färdigheten |
| ❌ Inget handlingsbart innehåll (bara länkar eller stubbar) | Agenter kan inte utföra någonting |
| ❌ Duplicera utan tydlig förbättring | Lägg till värde, klona inte |
| ❌ Stötande innehåll utan tagg "risk: stötande" | Säkerhet och efterlevnad |
| ❌ Kritiska säkerhetsresultat | Snabb exfiltrering, destruktiva kommandon, etc. |---

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

| Dimension | Utmärkt | Bra | Behöver arbete |
|:----------|:---------|:-----|:-----|
| ⭐**Kvalitet**| 80+ (platina) | 60-79 (guld/silver) | <60 (brons/förrätt) |
| 📋**Bästa metoder**| 90+ (utmärkt) | 70-89 (bra) | <70 (rättvist/behovsarbete) |
| 🛡️**Säkerhet**| 95+ (härdad) | 80-94 (säkert) | <80 (granskning behövs) |
| 🎯**Mognad**| L3 (skript+test) | L2 (instruktioner) | L1 (endast metadata) |---

## 🧭 What High Scores Require

För att nå toppbandet konsekvent bör en färdighet inkludera:

- en stark frontmatter-beskrivning som förklarar både**vad**färdigheten gör och**när**den ska användas
- explicita avsnitt för "När ska användas", "Arbetsflöde", "Exempel", "Bästa metoder", "Felsökning" och "Ytterligare resurser".
- lokalt stödmaterial under `referenser/`, `skript/`, och helst `exempel/`, länkat direkt från `SKILL.md`
- agentmetadata under `agents/openai.yaml` när färdigheten är avsedd att anropas direkt i agentklienter
- en liten operationstabell eller motsvarande exekveringskarta när arbetsflödet drar nytta av det
- minst ett körbart exempel som pekar på ett lokalt hjälpskript eller ett repeterbart kommando
- felsökning skriven som "Symtom" plus "Lösning", inte generiska varningar
- tillräckligt djup för att kvalificera sig som "L3", inte bara välformaterad prosa
- Starkare arbetsflödesdjup, beslutstillgångar och mångfald av supportpaket om du vill ha toppbandkvalitet
- ett supportpaket som är tillräckligt djupt för att kännas återanvändbart, inte bara närvarande för att täcka kryssrutorna
- minst 4 meningsfulla stödfamiljer eller motsvarande djup i återanvändbara filer om du vill ha toppbandet konsekvent