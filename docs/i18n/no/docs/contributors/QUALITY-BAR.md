# ✅ Quality Bar (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Minstekrav og anbefalinger for at en ferdighet skal bli akseptert i Omni Skills-repositoriet.**

For forfatterveiledning rettet spesifikt mot topp-bandscore, se [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Gjeldende benchmark for den publiserte katalogen:

- 32 publiserte ferdigheter
- gjennomsnittlig kvalitetspoeng «96,3».
- gjennomsnittlig poengsum for beste praksis «98,7».
- gjennomsnittlig sikkerhetsscore `95.0`---

## 🔒 Required (Must Pass)

| # | Krav | Slik bekrefter du |
|:--|:------------|:-------------|
| 1️⃣ |**Gyldig frontmaterie**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Tydelig beskrivelse**| One-liner må forklare hva ferdigheten gjør (10+ tegn) |
| 3️⃣ |**Navnet samsvarer med katalogen**| `navn:`-feltet samsvarer nøyaktig med mappenavnet |
| 4️⃣ |**Oversiktsseksjon**| Kort forklaring av formålet i nedslagsteksten |
| 5️⃣ |**Når skal du bruke delen**| Minst 2 spesifikke bruksscenarier |
| 6️⃣ |**Handlingsbare instruksjoner**| Trinn-for-trinn-innhold en AI-agent kan utføre |
| 7️⃣ |**Generert metadata**| Validator sender ut `skills/<skill>/metadata.json` vellykket |---

## ⭐ Recommended (Improves Score)

| # | Anbefaling | Score Effekt |
|:--|:--------------|:------------|
| 8️⃣ |**Eksempler**— minst ett konkret eksempel med forventet utgang | 📈 Kvalitet +10-15 |
| 9️⃣ |**Gode fremgangsmåter**— ✅ Gjør / ❌ Ikke veiledning | 📈 Beste praksis +5 |
| 🔟 |**Testet med et verktøy**— verifisert med minst én AI-kodingsassistent | 📈 Kvalitet +5 |
| 1️⃣1️⃣ |**Tags**— relevante søkbare koder for oppdagelse | 📈 Beste praksis +10 |
| 1️⃣2️⃣ |**Kategori**— tilordnet én kanonisk kategori | 📈 Beste praksis +10 |
| 1️⃣3️⃣ |**Feilsøking**— konkrete `symptomer` og `løsning` veiledning | 📈 Beste praksis +5-10 |
| 1️⃣4️⃣ |**Lokale støtteressurser**— `referanser/`, `skript/`, og ideelt sett `eksempler/` koblet fra ferdigheten | 📈 Beste praksis +10 |
| 1️⃣5️⃣ |**Sunn klassifisering**— modenhet L3, kvalitet 85+, beste praksis 90+ | 📈 Samlet nivå |
| 1️⃣6️⃣ |**Ingen kritiske sikkerhetsfunn**— statisk skanner klareres | 🛡️ Sikkerhet 100 |---

## ❌ Reasons for Rejection

| Utgave | Hvorfor |
|:------|:----|
| ❌ Manglende eller ugyldig frontmaterie | Bryter valideringspipeline |
| ❌ Navnet samsvarer ikke med katalogen | Bryter kataloggenerering |
| ❌ Tom eller trivielt kort beskrivelse | Brukere kan ikke oppdage ferdigheten |
| ❌ Ikke noe handlingsverdig innhold (bare lenker eller stubber) | Agenter kan ikke utføre noe |
| ❌ Dupliser uten tydelig forbedring | Legg til verdi, ikke klon |
| ❌ Støtende innhold uten "risiko: støtende"-tag | Sikkerhet og samsvar |
| ❌ Kritiske sikkerhetsfunn | Rask eksfiltrering, destruktive kommandoer osv. |---

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

| Dimensjon | Utmerket | Bra | Trenger arbeid |
|:----------|:----------|:-----|:-----|
| ⭐**Kvalitet**| 80+ (platina) | 60-79 (gull/sølv) | <60 (bronse/starter) |
| 📋**Gode fremgangsmåter**| 90+ (utmerket) | 70-89 (bra) | <70 (rettferdig/trenger-arbeid) |
| 🛡️**Sikkerhet**| 95+ (herdet) | 80-94 (sikker) | <80 (gjennomgang nødvendig) |
| 🎯**Forfall**| L3 (skript+tester) | L2 (instruksjoner) | L1 (kun metadata) |---

## 🧭 What High Scores Require

For å nå toppbåndet konsekvent, bør en ferdighet inkludere:

- en sterk beskrivelse av frontmaterie som forklarer både**hva**ferdigheten gjør og**når**den skal brukes
- eksplisitte seksjoner for "Når du skal bruke", "Arbeidsflyt", "Eksempler", "Beste fremgangsmåter", "Feilsøking" og "Ytterligere ressurser".
- lokalt støttemateriale under `referanser/`, `skript/`, og ideelt sett `eksempler/`, koblet direkte fra `SKILL.md`
- agentmetadata under `agents/openai.yaml` når ferdigheten er ment å bli påberopt direkte i agentklienter
- en liten operasjonstabell eller tilsvarende utførelseskart når arbeidsflyten drar nytte av det
- minst ett kjørbart eksempel som peker til et lokalt hjelpeskript eller repeterbar kommando
- feilsøking skrevet som 'Symptomer' pluss 'Løsning', ikke generiske advarsler
- nok dybde til å kvalifisere som "L3", ikke bare velformatert prosa
- Sterkere arbeidsflytdybde, beslutningsressurser og støttepakkemangfold hvis du vil ha toppbåndkvalitet
- en støttepakke som er dyp nok til å føles gjenbrukbar, ikke bare til stede for avkrysningsboksdekning
- minst 4 meningsfulle støttefamilier eller tilsvarende dybde i gjenbrukbare filer hvis du vil ha toppbåndet konsekvent