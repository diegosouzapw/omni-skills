# ✅ Quality Bar (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Vähimmäisvaatimukset ja suositukset, jotta taito voidaan hyväksyä Omni Skills -tietovarastoon.**

Katso [High-score Playbook](HIGH-SCORE-PLAYBOOK.md) erityisesti huippuluokan tuloksiin tähtääviä ohjeita.

Tämänhetkinen vertailuarvo julkaistulle luettelolle:

- 32 julkaistua taitoa
- keskimääräinen laatupiste 96,3
- parhaiden käytäntöjen keskimääräinen pistemäärä `98,7`
- keskimääräinen turvapiste '95,0'---

## 🔒 Required (Must Pass)

| # | Vaatimus | Kuinka vahvistaa |
|:--|:------------|:---------------|
| 1️⃣ |**Voimassa esikuva**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Selkeä kuvaus**| Yhden rivin tulee selittää, mitä taito tekee (10+ merkkiä) |
| 3️⃣ |**Nimi vastaa hakemistoa**| `nimi:` -kenttä vastaa kansion nimeä täsmälleen |
| 4️⃣ |**Yleiskatsaus-osio**| Lyhyt selitys tarkoituksesta merkintätekstissä |
| 5️⃣ |**Milloin käyttää -osio**| Vähintään 2 erityistä käyttöskenaariota |
| 6️⃣ |**Toimittavat ohjeet**| Vaiheittainen sisältö, jonka tekoälyagentti voi suorittaa |
| 7️⃣ |**Luotu metatiedot**| Validator lähettää "skills/<skill>/metadata.json" onnistuneesti |---

## ⭐ Recommended (Improves Score)

| # | Suositus | Pisteiden vaikutus |
|:--|:---------------|:--------------|
| 8️⃣ |**Esimerkkejä**— vähintään yksi konkreettinen esimerkki odotetuista tuloksista | 📈 Laatu +10-15 |
| 9️⃣ |**Parhaat käytännöt**— ✅ Tee / ❌ Älä anna ohjeita | 📈 Parhaat käytännöt +5 |
| 🔟 |**Testattu työkalulla**— vahvistettu vähintään yhdellä AI-koodausavustajalla | 📈 Laatu +5 |
| 1️⃣1️⃣ |**Tagit**— osuvat haettavat tunnisteet löytöjä varten | 📈 Parhaat käytännöt +10 |
| 1️⃣2️⃣ |**Luokka**— määritetty yhdelle ensisijaiselle kategorialle | 📈 Parhaat käytännöt +10 |
| 1️⃣3️⃣ |**Vianetsintä**— konkreettiset ohjeet "Oireet" ja "Ratkaisu" | 📈 Parhaat käytännöt +5-10 |
| 1️⃣4️⃣ |**Paikalliset tukiresurssit**— `viitteet/`, `skriptit/` ja mieluiten `esimerkit/` linkitetty taidosta | 📈 Parhaat käytännöt +10 |
| 1️⃣5️⃣ |**Terveellinen luokitus**— kypsyysaste L3, laatu 85+, parhaat käytännöt 90+ | 📈 Kokonaistaso |
| 1️⃣6️⃣ |**Ei kriittisiä tietoturvahavaintoja**— staattinen skanneri läpäisee puhtaan | 🛡️ Turvallisuus 100 |---

## ❌ Reasons for Rejection

| Ongelma | Miksi |
|:------|:----|
| ❌ Frontmatter puuttuu tai virheellinen | Katkaisee vahvistusputken |
| ❌ Nimi ei vastaa hakemistoa | Katkeaa luetteloiden sukupolven |
| ❌ Tyhjä tai vähäpätöisen lyhyt kuvaus | Käyttäjät eivät löydä osaamista |
| ❌ Ei toiminnallista sisältöä (vain linkit tai tynkä) | Agentit eivät voi suorittaa mitään |
| ❌ Kopioi ilman selvää parannusta | Lisää arvoa, älä kloonaa |
| ❌ Loukkaava sisältö ilman "riski: loukkaavaa" -tunnistetta | Turvallisuus ja vaatimustenmukaisuus |
| ❌ Kriittiset tietoturvahavainnot | Nopea suodatus, tuhoavat komennot jne. |---

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

| Mitat | Erinomainen | Hyvä | Tarvitsee työtä |
|:----------|:----------|:-----|:------------|
| ⭐**Laatu**| 80+ (platina) | 60-79 (kulta/hopea) | <60 (pronssi/aloitus) |
| 📋**Parhaat käytännöt**| 90+ (erinomainen) | 70-89 (hyvä) | <70 (kohtuullinen/tarve) |
| 🛡️**Turvallisuus**| 95+ (karkaistu) | 80-94 (suojattu) | <80 (tarkistus tarvitaan) |
| 🎯**Maturiteetti**| L3 (skriptit+testit) | L2 (ohjeet) | L1 (vain metatiedot) |---

## 🧭 What High Scores Require

Päästäksesi huippubäntiin johdonmukaisesti, sinun tulee sisältää seuraavat taidot:

- vahva frontmatter-kuvaus, joka selittää sekä**mitä**taito tekee ja**milloin**sitä tulisi käyttää
- selkeät osiot "Milloin käyttää", "Työnkulku", "Esimerkit", "Parhaat käytännöt", "Vianetsintä" ja "Lisäresurssit"
- paikallinen tukimateriaali kohdissa "references/", "scripts/" ja mieluiten "examples/", linkitetty suoraan osoitteesta "SKILL.md"
- agentin metatiedot kohdassa "agents/openai.yaml", kun taito on tarkoitettu käytettäväksi suoraan agenttiohjelmissa
- pieni toimintataulukko tai vastaava suorituskartta, kun työnkulku hyötyy siitä
- vähintään yksi suoritettava esimerkki, joka osoittaa paikalliseen apuohjelmaan tai toistettavaan komentosarjaan
- vianetsintä kirjoitettuna "Oireet" ja "Ratkaisu", ei yleisiä varoituksia
- tarpeeksi syvyyttä 'L3':ksi kelpaamiseksi, ei vain hyvin muotoiltua proosaa
- vahvempi työnkulun syvyys, päätöksentekoresurssit ja tukipakettien monimuotoisuus, jos haluat huippuluokan laatua
- Tukipaketti, joka on riittävän syvä, jotta se tuntuu uudelleen käytettävältä, ei vain valintaruudun peittoon
- vähintään 4 mielekästä tukiperhettä tai vastaava syvyys uudelleenkäytettävissä tiedostoissa, jos haluat yläkaistan johdonmukaisesti