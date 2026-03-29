# 🏆 High-Score Skill Playbook (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Hva en Omni Skills `SKILL.md` trenger i praksis for å oppnå høye poeng for modenhet, beste praksis, kvalitet og sikkerhet.**---

## 🎯 Purpose

Denne veiledningen forklarer hvordan depotets klassifisering faktisk belønner en ferdighet.

Bruk den når du vil:

- Forfatter en ny ferdighet som havner i toppscorende band
- forbedre en eksisterende ferdighet som sitter fast i "god" eller lav "utmerket".
- forstå hvorfor en ferdighet med anstendig formatering fortsatt ikke scorer som en eksepsjonell operasjonell ressurs

Dette er den bidragsyter-vendte følgesvennen til:

- [Kvalitetslinje](QUALITY-BAR.md)
- [Skill Anatomy](SKILL-ANATOMY.md)
- [ferdighetsklassifisering](../specs/SKILL-CLASSIFICATION.md)

Gjeldende benchmark for live-katalogen:

- 32 publiserte ferdigheter
- gjeldende kvalitetsspredning: `94, 95, 96, 97, 100`
- gjeldende spredning av beste praksis: `98, 99, 100`
- nåværende toppend: "omni-figma" med "100/100" kvalitet og "100/100" beste praksis---

## 🧱 What High Scores Really Mean

Klassifisereren belønner**ikke**pen nedtelling alene.

Høyt skårende ferdigheter er ferdigheter som er:

-**oppdagelig**: beskrivelsen sier tydelig hva ferdigheten gjør og når den skal brukes
-**operativ**: ferdigheten inkluderer lokale skript, referanser og kjørbare eksempler
-**diagnostisk**: det hjelper agenten å komme seg når ting går galt
-**spesifikt**: det er fokusert på én arbeidsflyt, ikke brede råd
-**trygt**: den unngår risikable mønstre og sender ren skannerutgang

I praksis oppfører de sterkeste ferdighetene seg mer som et**litent pakket arbeidsflytsett**enn en vanlig notis.---

## 📋 Score Targets

Bruk disse målene når du skriver:

| Dimensjon | Sterkt mål | Eksepsjonelt mål |
|:----------|:-------------|:------------------------|
| 🎯 Forfall | `L3` | `L3` med flere støtteressurser |
| 📋 Beste praksis | `90+` | `96+` |
| ⭐ Kvalitet | `85+` | `90+` |
| 🛡️ Sikkerhet | `95+` | `95+` med null funn |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Din frontmaterie skal gjøre ferdighetene lett å klassifisere og lett å oppdage:

- `navn` samsvarer nøyaktig med katalogen
- `beskrivelse` forklarer både**hva**og**når**
- `kategori`, `tags`, `verktøy`, `kompleksitet`, `risiko`, `kilde`, `forfatter` og datoer er alle til stede

God beskrivelsesform:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Dårlig beskrivelsesform:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

De sterkeste ferdighetene inkluderer konsekvent disse delene:

- `## Oversikt`
- `## Når du skal bruke denne ferdigheten`
- `## arbeidsflyt`
- `## Eksempler`
- `## beste fremgangsmåter`
- `## Feilsøking`
- `## Ytterligere ressurser`

Hvis en av disse mangler, kan poengsummen fortsatt være bra, men det blir vanskeligere å se eksepsjonell ut.---

### 3. Runnable Local Support

Toppscoreferdigheter inkluderer vanligvis:

- `referanser/sjekkliste.md`
- ett eller flere hjelpeskript i `scripts/`
- minst ett utført eksempel i `eksempler/`
- `agents/openai.yaml` når ferdigheten er ment for direkte agentanrop
- direkte lenker fra `SKILL.md` til de lokale filene

Dette er viktig fordi klassifisereren behandler en ferdighet med**medfølgende støttemateriale**som mer handlingsdyktig enn en som bare peker utover.

Anbefalt minimum:```text
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

Eksempler med høy score er:

- betong
- skrevet med et ekte gjerde som "bash" eller "python".
- knyttet til et lokalt skript eller repeterbar kommando
- representant for arbeidsflyten

Bra:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Svak:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Målscoreren belønner feilsøking som hjelper en agent å komme seg, ikke bare gjenkjenne et problem.

Foretrukket format:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Dette er sterkere enn en vag note som:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Klassifisereren skiller nå mellom en ferdighet som bare er fullstendig og en som er genuint dyp.

Signaler som hjelper:

- Flere konkrete eksempler
- flere feilsøkingssaker
- relatert ferdighetsveiledning
- rikere referansepakker
- en synlig "## Workflow"-seksjon med nummererte trinn som målscoreren kan telle direkte
- minst én operasjonstabell eller utførelseskart der det tydeliggjør arbeidsflyten
- mer enn én støttekatalog eller aktivatype
- arbeidsflytseksjoner med nok trinn til å veilede utførelse
- beslutningselementer som sjekklister, rubrikker, matriser, pakker eller spillebøker
- sterkere støttepakke-mangfold på tvers av `referanser/`, `skript/`, `agenter/`, `eksempler/` eller `assets/`
- nok gjenbrukbare støttefiler til å se ut som et sett, ikke en eneste hjelper gjemt ved siden av markdown
- mer enn en enkelt hjelpefil når arbeidsflyten er kompleks nok til å rettferdiggjøre en støttepakke
- nok kroppsdybde til å dekke avveininger og feilmoduser
- tettere operativ veiledning, fordi måleren nå skiller polert formatering fra genuint gjenbrukbar arbeidsflytdybde

Signaler som**ikke**hjelper mye:

- gjenta den samme instruksjonen med forskjellige ord
- Generisk utfyllingstekst
- legge til overskrifter uten å legge til substans under dem---

## 🧪 Fast Checklist Before You Commit

Bruk denne sjekklisten før du kjører validering:

- beskrivelsen sier**hva**og**når**
- Ferdigheten er fokusert på én arbeidsflyt
- `## Workflow` eksisterer og inneholder nummererte eller punkttegn
- Det finnes minst ett kjørbart eksempel
- `referanser/`, `skript/`, og ideelt sett `eksempler/` er koblet fra `SKILL.md`
- `agents/openai.yaml` eksisterer når ferdigheten er ment for direkte påkalling i agentklienter
- feilsøking bruker "Symptomer" og "Løsning".
- ferdigheten kan med rimelighet klassifiseres som "L3".
- ingen risikable kommandoer eller mistenkelige veier er tilstede

Kjør deretter:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- beskrivelsen er korrekt, men for generisk
- Markdown har seksjoner, men ingen operasjonsdybde
– eksempler peker ikke på lokale hjelpere
- feilsøking finnes, men er ikke diagnostisk
- det er for få tagger eller verktøyidentifikatorer
- Ferdigheten er trygg og ren, men fortsatt for grunn til å regnes som eksepsjonell---

## 🧭 Practical Rule

Hvis ferdighetene dine føles som:

- en**mal**: den kan passere
- en**guide**: den kan score bra
- en**arbeidsflytpakke**: det er mye mer sannsynlig å score på toppen