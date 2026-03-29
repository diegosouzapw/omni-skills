# ✅ Quality Bar (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Minimale vereisten en aanbevelingen voor acceptatie van een vaardigheid in de Omni Skills-repository.**

Voor schrijfrichtlijnen die specifiek gericht zijn op topbandscores, zie [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Huidige benchmark voor de gepubliceerde catalogus:

- 32 gepubliceerde vaardigheden
- gemiddelde kwaliteitsscore `96,3`
- gemiddelde best practices scoren `98,7`
- gemiddelde beveiligingsscore `95,0`---

## 🔒 Required (Must Pass)

| # | Vereiste | Hoe te verifiëren |
|:--|:------------|:--------------|
| 1️⃣ |**Geldige frontmaterie**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Duidelijke omschrijving**| Oneliner moet uitleggen wat de vaardigheid doet (10+ tekens) |
| 3️⃣ |**Naam komt overeen met map**| `naam:` veld komt exact overeen met de mapnaam |
| 4️⃣ |**Overzichtssectie**| Korte uitleg van het doel in de prijsverlagingstekst |
| 5️⃣ |**Wanneer gebruiken?**| Minimaal 2 specifieke gebruiksscenario's |
| 6️⃣ |**Bruikbare instructies**| Stapsgewijze inhoud die een AI-agent kan uitvoeren |
| 7️⃣ |**Gegenereerde metadata**| Validator verzendt `skills/<skill>/metadata.json` met succes |---

## ⭐ Recommended (Improves Score)

| # | Aanbeveling | Score-impact |
|:--|:---------------|:------------|
| 8️⃣ |**Voorbeelden**— minstens één concreet voorbeeld met verwachte output | 📈 Kwaliteit +10-15 |
| 9️⃣ |**Best practices**— ✅ Wel / ❌ Niet begeleiden | 📈 Beste praktijken +5 |
| 🔟 |**Getest met een tool**— geverifieerd met ten minste één AI-codeerassistent | 📈 Kwaliteit +5 |
| 1️⃣1️⃣ |**Tags**— relevante doorzoekbare tags voor ontdekking | 📈 Beste praktijken +10 |
| 1️⃣2️⃣ |**Categorie**— toegewezen aan één canonieke categorie | 📈 Beste praktijken +10 |
| 1️⃣3️⃣ |**Problemen oplossen**— concrete begeleiding bij `Symptomen` en `Oplossingen` | 📈 Beste praktijken +5-10 |
| 1️⃣4️⃣ |**Lokale ondersteuningsmiddelen**— `referenties/`, `scripts/` en idealiter `voorbeelden/` gekoppeld aan de vaardigheid | 📈 Beste praktijken +10 |
| 1️⃣5️⃣ |**Gezonde classificatie**— volwassenheid L3, kwaliteit 85+, best practices 90+ | 📈 Algemeen niveau |
| 1️⃣6️⃣ |**Geen kritieke beveiligingsbevindingen**— statische scanner is schoon | 🛡️ Beveiliging 100 |---

## ❌ Reasons for Rejection

| Uitgave | Waarom |
|:------|:----|
| ❌ Ontbrekende of ongeldige frontmaterie | Breekt validatiepijplijn |
| ❌ Naam komt niet overeen met directory | Onderbreekt catalogusgeneratie |
| ❌ Lege of triviaal korte beschrijving | Gebruikers kunnen de vaardigheid |
| ❌ Geen bruikbare inhoud (alleen links of stubs) | Agenten kunnen niets uitvoeren |
| ❌ Dupliceren zonder duidelijke verbetering | Voeg waarde toe, kloon niet |
| ❌ Aanstootgevende inhoud zonder 'risico: aanstootgevende' tag | Veiligheid en compliance |
| ❌ Kritische beveiligingsbevindingen | Snelle exfiltratie, destructieve commando's, enz. |---

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

| Afmeting | Uitstekend | Goed | Heeft werk nodig |
|:----------|:----------|:-----|:-----------|
| ⭐**Kwaliteit**| 80+ (platina) | 60-79 (goud/zilver) | <60 (brons/starter) |
| 📋**Beste praktijken**| 90+ (uitstekend) | 70-89 (goed) | <70 (redelijk/werk vereist) |
| 🛡️**Beveiliging**| 95+ (gehard) | 80-94 (beveiligd) | <80 (beoordeling nodig) |
| 🎯**Rijptijd**| L3 (scripts+tests) | L2 (instructies) | L1 (alleen metadata) |---

## 🧭 What High Scores Require

Om consequent de topband te bereiken, moet een vaardigheid het volgende omvatten:

- een sterke frontmatter-beschrijving die uitlegt**wat**de vaardigheid doet en**wanneer**deze moet worden gebruikt
- expliciete secties voor 'Wanneer te gebruiken', 'Workflow', 'Voorbeelden', 'Beste praktijken', 'Problemen oplossen' en 'Aanvullende bronnen'
- lokaal ondersteuningsmateriaal onder `references/`, `scripts/`, en idealiter `examples/`, rechtstreeks gelinkt vanuit `SKILL.md`
- agent-metagegevens onder `agents/openai.yaml` wanneer de vaardigheid bedoeld is om rechtstreeks in agent-clients te worden aangeroepen
- een kleine operationele tabel of een gelijkwaardige uitvoeringskaart wanneer de workflow hiervan profiteert
- ten minste één uitvoerbaar voorbeeld dat verwijst naar een lokaal helperscript of herhaalbare opdracht
- probleemoplossing geschreven als 'Symptomen' plus 'Oplossing', geen algemene waarschuwingen
- genoeg diepgang om als `L3` te kwalificeren, niet alleen maar goed opgemaakt proza
- Sterkere workflow-diepte, beslissingsmiddelen en diversiteit in het ondersteuningspakket als u topkwaliteit wilt
- een ondersteuningspakket dat diep genoeg is om herbruikbaar te zijn, en niet alleen aanwezig is voor dekking van selectievakjes
- minimaal 4 betekenisvolle steunfamilies of de gelijkwaardige diepgang in herbruikbare bestanden als je consistent de topband wilt