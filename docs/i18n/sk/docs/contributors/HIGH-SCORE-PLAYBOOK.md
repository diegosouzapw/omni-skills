# 🏆 High-Score Skill Playbook (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Čo potrebuje Omni Skills `SKILL.md` v praxi na dosiahnutie vysokej zrelosti, osvedčených postupov, kvality a skóre bezpečnosti.**---

## 🎯 Purpose

Táto príručka vysvetľuje, ako klasifikátor úložiska skutočne odmeňuje zručnosť.

Použite ho, keď chcete:

- vytvorte novú zručnosť, ktorá sa dostane do skupín s najvyšším skóre
- zlepšiť existujúcu zručnosť, ktorá je uviaznutá na úrovni „dobrá“ alebo nízka „výborná“.
- pochopiť, prečo zručnosť so slušným formátovaním stále nie je bodovaná ako výnimočné prevádzkové aktívum

Toto je spoločník pre prispievateľov:

- [Quality Bar](QUALITY-BAR.md)
- [Skill Anatomy](SKILL-ANATOMY.md)
- [Klasifikácia zručností](../specs/SKILL-CLASIFICATION.md)

Aktuálny benchmark pre živý katalóg:

- 32 publikovaných zručností
- súčasná kvalita rozpätia: `94, 95, 96, 97, 100`
- šírenie aktuálnych osvedčených postupov: `98, 99, 100`
- súčasná horná hranica: `omni-figma` v kvalite `100/100` a osvedčené postupy `100/100`---

## 🧱 What High Scores Really Mean

Klasifikátor**neodmeňuje**len pekné zníženie.

Zručnosti s vysokým skóre sú zručnosti, ktoré sú:

-**objaviteľné**: popis jasne hovorí, čo daná zručnosť robí a kedy ju použiť
-**prevádzkové**: zručnosť zahŕňa lokálne skripty, referencie a spustiteľné príklady
-**diagnostika**: pomáha agentovi zotaviť sa, keď sa niečo pokazí
-**špecifické**: zameriava sa na jeden pracovný postup, nie na široké rady
-**bezpečné**: vyhýba sa riskantným vzorom a dodáva čistý výstup skenera

V praxi sa najsilnejšie zručnosti správajú skôr ako**malá súprava pracovného postupu**než obyčajná poznámka.---

## 📋 Score Targets

Pri tvorbe použite tieto ciele:

| Rozmer | Silný cieľ | Výnimočný cieľ |
|:----------|:--------------|:-------------------|
| 🎯 Zrelosť | "L3" | `L3` s viacerými zdrojmi podpory |
| 📋 Najlepšie postupy | „90+“ | „96+“ |
| ⭐ Kvalita | 85+ | „90+“ |
| 🛡️ Bezpečnosť | „95+“ | „95+“ s nulovými nálezmi |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Váš frontmater by mal uľahčiť klasifikáciu a objavenie zručnosti:

- `meno` presne zodpovedá adresáru
– „popis“ vysvetľuje**čo**a**kedy**
- Kategória, Značky, Nástroje, Zložitosť, Riziko, Zdroj, Autor a dátumy sú prítomné

Dobrý tvar popisu:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Zlý tvar popisu:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Medzi najsilnejšie zručnosti pravidelne patria tieto časti:

- `## Prehľad`
- `## Kedy použiť túto zručnosť`
- "## Pracovný postup".
- "## príkladov".
- `## Osvedčené postupy`
- "## Riešenie problémov".
- `## Ďalšie zdroje`

Ak jeden z nich chýba, skóre môže byť stále dobré, ale bude ťažšie vyzerať výnimočne.---

### 3. Runnable Local Support

Medzi zručnosti s najvyšším skóre zvyčajne patria:

- `references/checklist.md`
- jeden alebo viac pomocných skriptov v `scripts/`
- aspoň jeden spracovaný príklad v `examples/`
- `agents/openai.yaml`, keď je zručnosť určená na priame vyvolanie agenta
- priame odkazy z `SKILL.md` na tieto lokálne súbory

Je to dôležité, pretože klasifikátor považuje zručnosť s**pribaleným podporným materiálom**za funkčnejšiu ako tú, ktorá smeruje len von.

Odporúčané minimum:```text
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

Príklady s vysokým skóre sú:

- betón
- napísané skutočným plotom, ako napríklad „bash“ alebo „python“.
- viazané na lokálny skript alebo opakovateľný príkaz
- predstaviteľ pracovného toku

dobre:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

slabé:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Zapisovateľ odmeňuje riešenie problémov, ktoré pomáha agentovi zotaviť sa, nielen rozpoznať problém.

Preferovaný formát:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Toto je silnejšie ako vágna poznámka ako:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Klasifikátor teraz rozlišuje medzi zručnosťou, ktorá je iba úplná, a zručnosťou, ktorá je skutočne hlboká.

Signály, ktoré pomáhajú:

- viacero konkrétnych príkladov
- viaceré prípady riešenia problémov
- poradenstvo súvisiace so zručnosťami
- bohatšie referenčné balíčky
- viditeľná časť „## Workflow“ s očíslovanými krokmi, ktoré môže zapisovateľ spočítať priamo
- aspoň jednu operačnú tabuľku alebo mapu vykonávania, kde objasňuje pracovný postup
- viac ako jeden podporný adresár alebo typ majetku
- sekcie pracovného toku s dostatočným počtom krokov na usmernenie vykonávania
- aktíva rozhodovania, ako sú kontrolné zoznamy, rubriky, matice, pakety alebo príručky
- väčšia rozmanitosť balíkov podpory v rámci referencií/, skriptov/, agentov/, príkladov/ alebo aktív/
- dostatok opakovane použiteľných podporných súborov, aby vyzerali ako stavebnica, ani jeden pomocník zastrčený vedľa značky
- viac ako jeden pomocný súbor, keď je pracovný postup dostatočne zložitý na to, aby odôvodnil balík podpory
- dostatočná hĺbka tela na pokrytie kompromisov a režimov zlyhania
- hustejšie prevádzkové vedenie, pretože zapisovač teraz rozlišuje leštené formátovanie od skutočne opakovane použiteľnej hĺbky pracovného toku

Signály, ktoré**ne**veľmi pomáhajú:

- opakovanie toho istého pokynu rôznymi slovami
- všeobecný výplňový text
- pridávanie nadpisov bez pridania látky pod ne---

## 🧪 Fast Checklist Before You Commit

Pred spustením overenia použite tento kontrolný zoznam:

- popis hovorí**čo**a**kedy**
- zručnosť je zameraná na jeden pracovný postup
- `## Workflow` existuje a obsahuje očíslované kroky alebo kroky s odrážkami
- existuje aspoň jeden spustiteľný príklad
- `references/`, `scripts/` a ideálne `examples/` sú prepojené z `SKILL.md`
- `agents/openai.yaml` existuje, keď je zručnosť určená na priame vyvolanie u klientov agentov
- riešenie problémov používa `Symptomy` a `Riešenie`
- zručnosť možno primerane klasifikovať ako „L3“.
- nie sú prítomné žiadne riskantné príkazy alebo podozrivé cesty

Potom spustite:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- popis je správny, ale príliš všeobecný
- značka má úseky, ale nemá prevádzkovú hĺbku
- príklady neukazujú na miestnych pomocníkov
- Riešenie problémov existuje, ale nie je diagnostické
- je príliš málo značiek alebo identifikátorov nástrojov
- zručnosť je bezpečná a čistá, ale stále príliš plytká na to, aby sa dala považovať za výnimočnú---

## 🧭 Practical Rule

Ak vaša zručnosť vyzerá takto:

-**šablóna**: môže prejsť
-**sprievodca**: môže mať dobré skóre
-**balíček pracovných postupov**: je oveľa pravdepodobnejšie, že dosiahne najvyššie skóre