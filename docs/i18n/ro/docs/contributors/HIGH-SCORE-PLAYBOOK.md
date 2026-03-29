# 🏆 High-Score Skill Playbook (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**De ce are nevoie în practică un Omni Skills `SKILL.md` pentru a atinge o maturitate ridicată, cele mai bune practici, calitate și scoruri de securitate.**---

## 🎯 Purpose

Acest ghid explică modul în care clasificatorul depozitului recompensează de fapt o abilitate.

Folosiți-l când doriți să:

- creați o nouă abilitate care ajunge în cele mai bune benzi
- să îmbunătățească o abilitate existentă care este blocată în „bun” sau „excelent”.
- înțelegeți de ce o abilitate cu formatare decentă încă nu este un punctaj ca un activ operațional excepțional

Acesta este însoțitorul pentru colaboratori pentru:

- [Bară de calitate](QUALITY-BAR.md)
- [Skill Anatomy](SKILL-ANATOMY.md)
- [Clasificarea aptitudinilor](../specs/SKILL-CLASSIFICATION.md)

Benchmark actual pentru catalogul live:

- 32 de aptitudini publicate
- spread de calitate curent: `94, 95, 96, 97, 100`
- răspândirea celor mai bune practici actuale: `98, 99, 100`
- top actual: `omni-figma` la calitate `100/100` și cele mai bune practici `100/100`---

## 🧱 What High Scores Really Mean

Clasificatorul**nu**recompensează doar o reducere destul de mare.

Abilitățile cu scoruri mari sunt abilități care sunt:

-**descoperibil**: descrierea spune clar ce face abilitate și când să o folosească
-**operațional**: abilitatea include scripturi locale, referințe și exemple care pot fi executate
-**diagnostic**: ajută agentul să se recupereze atunci când lucrurile merg prost
-**specific**: se concentrează pe un singur flux de lucru, nu pe sfaturi ample
-**sigur**: evită modelele riscante și oferă rezultate curate ale scanerului

În practică, cele mai puternice abilități se comportă mai mult ca un**kit de flux de lucru ambalat**decât o simplă notă de reducere.---

## 📋 Score Targets

Utilizați aceste ținte când creați:

| Dimensiune | Țintă puternică | Țintă excepțională |
|:----------|:--------------|:--------------------|
| 🎯 Maturitate | `L3` | `L3` cu resurse multiple de suport |
| 📋 Cele mai bune practici | `90+` | `96+` |
| ⭐ Calitate | `85+` | `90+` |
| 🛡️ Securitate | `95+` | `95+` cu zero constatări |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Elementul principal ar trebui să facă abilitatile ușor de clasificat și ușor de descoperit:

- `name` se potrivește exact cu directorul
- `descriere` explică atât**ce**, cât și**când**
- `categorie`, `etichete`, `instrumente`, `complexitate`, `risc`, `sursă`, `autor` și datele sunt toate prezente

Forma de descriere bună:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Forma de descriere proastă:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Cele mai puternice abilități includ în mod constant aceste secțiuni:

- `## Prezentare generală`
- `## Când să folosiți această abilitate`
- `## Flux de lucru`
- `## Exemple`
- `## Cele mai bune practici`
- `## Depanare`
- `## Resurse suplimentare`

Dacă unul dintre acestea lipsește, scorul poate fi în continuare bun, dar devine mai greu să arăți excepțional.---

### 3. Runnable Local Support

Abilitățile cu cel mai bun punctaj includ de obicei:

- `references/checklist.md`
- unul sau mai multe scripturi de ajutor în `scripts/`
- cel puțin un exemplu funcțional în `examples/`
- `agents/openai.yaml` când abilitate este destinată invocării directe a agentului
- legături directe de la `SKILL.md` la acele fișiere locale

Acest lucru contează, deoarece clasificatorul tratează o abilitate cu**material suport inclus**ca fiind mai acționabilă decât una care indică numai spre exterior.

Minimum recomandat:```text
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

Exemplele cu punctaj ridicat sunt:

- beton
- tastat cu un gard real, cum ar fi `bash` sau `python`
- legat de un script local sau de o comandă repetabilă
- reprezentativ pentru fluxul de lucru

Bine:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Slab:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Marcatorul recompensează depanarea care ajută un agent să se recupereze, nu doar să recunoască o problemă.

Format preferat:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Aceasta este mai puternică decât o notă vagă precum:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Clasificatorul distinge acum între o abilitate care este doar completă și una care este cu adevărat profundă.

Semnale care ajută:

- mai multe exemple concrete
- mai multe cazuri de depanare
- îndrumarea abilităților conexe
- pachete de referință mai bogate
- o secțiune vizibilă „## Flux de lucru” cu pași numerotați pe care marcatorul îi poate număra direct
- cel puțin un tabel operațional sau hartă de execuție unde clarifică fluxul de lucru
- mai mult de un director de suport sau tip de activ
- secțiuni de flux de lucru cu destui pași pentru a ghida execuția
- active de decizie, cum ar fi liste de verificare, rubrici, matrici, pachete sau cărți de joc
- diversitate mai puternică a pachetului de asistență în „referințe/“, „scripturi/“, „agenți/“, „exemple/“ sau „active/”
- suficiente fișiere de suport reutilizabile pentru a arăta ca un kit, nu un singur ajutor ascuns lângă reducere
- mai mult de un singur fișier de ajutor atunci când fluxul de lucru este suficient de complex pentru a justifica un pachet de suport
- suficientă adâncime a corpului pentru a acoperi compromisurile și modurile de eșec
- ghidare operațională mai densă, deoarece marcatorul distinge acum formatarea șlefuită de adâncimea fluxului de lucru cu adevărat reutilizabilă

Semnale care**nu**ajută prea mult:

- repetarea aceleiași instrucțiuni în cuvinte diferite
- text de umplere generic
- adăugarea de titluri fără a adăuga substanță sub ele---

## 🧪 Fast Checklist Before You Commit

Utilizați această listă de verificare înainte de a rula validarea:

- descrierea spune**ce**și**când**
- abilitatea este concentrată pe un singur flux de lucru
- `## Workflow` există și conține pași numerotați sau marcați
- există cel puțin un exemplu rulabil
- `referințe/`, `scripturi/` și, în mod ideal, `exemple/` sunt legate de la `SKILL.md`
- `agents/openai.yaml` există atunci când skill-ul este destinat invocării directe în clienții agenți
- depanarea folosește „Simptome” și „Soluție”.
- abilitatea poate fi clasificată în mod rezonabil ca „L3”.
- nu sunt prezente comenzi riscante sau căi suspecte

Apoi rulați:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- descrierea este corecta dar prea generica
- marcajul are secțiuni, dar nu are adâncime operațională
- exemplele nu indică ajutoarele locale
- depanare există, dar nu este diagnostic
- există prea puține etichete sau identificatori de instrumente
- aptitudinea este sigură și curată, dar încă prea superficială pentru a fi considerată excepțională---

## 🧭 Practical Rule

Dacă abilitățile tale se simt astfel:

- un**șablon**: poate trece
- un**ghid**: poate nota bine
- un**pachet flux de lucru**: este mult mai probabil să obțină un scor în partea de sus