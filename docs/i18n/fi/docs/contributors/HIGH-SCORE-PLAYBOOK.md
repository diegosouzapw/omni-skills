# 🏆 High-Score Skill Playbook (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Mitä Omni Skills `SKILL.md` tarvitsee käytännössä saavuttaakseen korkeat kypsyysasteet, parhaat käytännöt, laatu- ja turvallisuuspisteet.**---

## 🎯 Purpose

Tämä opas selittää, kuinka arkiston luokitin itse asiassa palkitsee taidon.

Käytä sitä, kun haluat:

- Luo uusi taito, joka päätyy parhaimpiin maalintekijöihin
- parantaa olemassa olevaa taitoa, joka on juuttunut arvoon "hyvä" tai matala "erinomainen".
- ymmärtää, miksi taito kunnollisella muotoilulla ei silti ole pisteytetty kuin poikkeuksellinen toiminnallinen voimavara

Tämä on avustajalle suunnattu kumppani:

- [Laatupalkki](QUALITY-BAR.md)
- [Skill Anatomy](SKILL-ANATOMY.md)
- [Taitoluokitus](../specs/SKILL-CLASSIFICATION.md)

Nykyinen vertailukohta live-luettelolle:

- 32 julkaistua taitoa
- nykyinen laadun hajonta: "94, 95, 96, 97, 100".
- nykyiset parhaat käytännöt: "98, 99, 100".
- nykyinen huippu: "omni-figma" laadulla "100/100" ja "100/100" parhaat käytännöt---

## 🧱 What High Scores Really Mean

Luokitin**ei**palkitse melkoista merkintää yksinään.

Huippupisteiset taidot ovat taitoja, jotka ovat:

-**löydettävä**: kuvaus kertoo selvästi, mitä taito tekee ja milloin sitä tulee käyttää
-**toiminnallinen**: taito sisältää paikallisia komentosarjoja, viittauksia ja suoritettavia esimerkkejä
-**diagnostiikka**: se auttaa agenttia toipumaan, kun asiat menevät pieleen
-**erityinen**: se keskittyy yhteen työnkulkuun, ei laajoihin neuvoihin
-**turvallinen**: se välttää riskialttiit kuviot ja toimittaa puhtaan skannerin tulosteen

Käytännössä vahvimmat taidot toimivat enemmän kuin**pieni pakattu työnkulkupaketti**kuin pelkkä alaskirjaus.---

## 📋 Score Targets

Käytä näitä tavoitteita luodessasi:

| Mitat | Vahva tavoite | Poikkeuksellinen tavoite |
|:----------|:--------------|:--------------------|
| 🎯 Maturiteetti | "L3" | "L3", jossa on useita tukiresursseja |
| 📋 Parhaat käytännöt | `90+` | `96+` |
| ⭐ Laatu | `85+` | `90+` |
| 🛡️ Turvallisuus | "95+" | `95+` nolla löydöstä |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Frontmatterisi pitäisi tehdä taidosta helposti luokiteltavissa ja helposti löydettävissä:

- `nimi` vastaa täsmälleen hakemistoa
- "kuvaus" selittää sekä**mitä**että**milloin**
- "luokka", "tunnisteet", "työkalut", "monimutkaisuus", "riski", "lähde", "tekijä" ja päivämäärät ovat kaikki mukana

Hyvä kuvausmuoto:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Huono kuvausmuoto:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Vahvimpia taitoja ovat jatkuvasti seuraavat osat:

- "## Yleiskatsaus".
- `## Milloin tätä taitoa tulee käyttää`
- ## Työnkulku
- "## Esimerkkejä".
- "## parhaat käytännöt".
- "## Vianetsintä".
- `## Lisäresurssit`

Jos jokin näistä puuttuu, tulos voi silti olla hyvä, mutta on vaikeampaa näyttää poikkeukselliselta.---

### 3. Runnable Local Support

Parhaat pisteet taidot sisältävät yleensä:

- `viitteet/tarkistuslista.md`
- yksi tai useampi apuohjelma komentosarjassa `scripts/`
- vähintään yksi toimiva esimerkki kohdassa "examples/".
- "agents/openai.yaml", kun taito on tarkoitettu suoraan agentin kutsumiseen
- suorat linkit SKILL.md:stä näihin paikallisiin tiedostoihin

Tällä on merkitystä, koska luokittelija pitää taitoa, jossa on**pakettimateriaalia**, toimivampina kuin vain ulospäin osoittavaa taitoa.

Suositeltu minimi:```text
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

Parhaita pisteitä saavia esimerkkejä ovat:

-betoni
- kirjoitettu oikealla aidalla, kuten "bash" tai "python".
- sidottu paikalliseen komentosarjaan tai toistettavaan komentoon
- työnkulkua edustava

Hyvä:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Heikko:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Pisteentekijä palkitsee vianetsinnän, joka auttaa agenttia toipumaan, ei vain tunnista ongelmaa.

Suositeltu muoto:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Tämä on vahvempi kuin epämääräinen huomautus, kuten:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Luokitin erottaa nyt vain täydellisen taidon ja aidosti syvän taidon.

Signaalit, jotka auttavat:

- useita konkreettisia esimerkkejä
- useita vianetsintätapauksia
- liittyviin taitoihin liittyvä ohjaus
- rikkaammat viitepaketit
- näkyvä "## Workflow" -osio, jossa on numeroidut askeleet, jotka maalintekijä voi laskea suoraan
- vähintään yksi toimintataulukko tai suorituskartta, jossa se selventää työnkulkua
- Useampi kuin yksi tukihakemisto tai omaisuustyyppi
- työnkulun osat, joissa on tarpeeksi vaiheita ohjaamaan suorittamista
- päätösresurssit, kuten tarkistuslistat, rubriikit, matriisit, paketit tai pelikirjat
- vahvempi tukipakettien monimuotoisuus "viitteet/", "skriptit/", "agentit/", "esimerkit/" tai "resurssit/"
- tarpeeksi uudelleenkäytettäviä tukitiedostoja, jotta ne näyttäisivät paketilta, ei ainuttakaan apulaista merkinnän viereen
- enemmän kuin yksi aputiedosto, kun työnkulku on tarpeeksi monimutkainen oikeuttaakseen tukipaketin
- Riittävä rungon syvyys kattamaan kompromissit ja vikatilat
- Tiheämpi käyttöopastus, koska pisteytyslaite erottaa nyt kiillotetun muotoilun aidosti uudelleen käytettävästä työnkulun syvyydestä

Signaalit, jotka**ei**auta paljon:

- saman käskyn toistaminen eri sanoilla
- yleinen täyteteksti
- otsikoiden lisääminen lisäämättä niiden alle sisältöä---

## 🧪 Fast Checklist Before You Commit

Käytä tätä tarkistuslistaa ennen validoinnin suorittamista:

- kuvaus sanoo**mitä**ja**milloin**
- taito keskittyy yhteen työnkulkuun
- ## Työnkulku on olemassa ja sisältää numeroidut tai luettelomerkityt vaiheet
- ainakin yksi suoritettava esimerkki on olemassa
- "viitteet/", "skriptit/" ja mieluiten "esimerkit/" on linkitetty tiedostosta "SKILL.md"
- "agents/openai.yaml" on olemassa, kun taito on tarkoitettu suoraan kutsumiseen agenttiasiakkaissa
- Vianetsintä käyttää "Oireet" ja "Ratkaisu".
- taito voidaan kohtuudella luokitella "L3".
- vaarallisia komentoja tai epäilyttäviä polkuja ei ole

Aja sitten:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- kuvaus on oikea, mutta liian yleinen
- Alennuksessa on osia, mutta ei käyttösyvyyttä
- esimerkit eivät viittaa paikallisiin auttajiin
- Vianmääritys on olemassa, mutta se ei ole diagnostinen
- tunnisteita tai työkalutunnisteita on liian vähän
- taito on turvallinen ja puhdas, mutta silti liian matala, jotta sitä voitaisiin pitää poikkeuksellisena---

## 🧭 Practical Rule

Jos taitosi tuntuu:

-**malli**: se voi mennä läpi
-**opas**: se voi saada hyvän tuloksen
-**työnkulkupaketti**: se saa paljon todennäköisemmin pisteet huipulla