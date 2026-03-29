# 🏆 High-Score Skill Playbook (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Di cosa ha bisogno nella pratica Omni Skills `SKILL.md` per raggiungere livelli elevati di maturità, best practice, qualità e sicurezza.**---

## 🎯 Purpose

Questa guida spiega come il classificatore del repository premia effettivamente un'abilità.

Usalo quando vuoi:

- crea una nuova abilità che arriva nelle fasce di punteggio più alte
- migliorare un'abilità esistente che è bloccata su "buono" o basso su "eccellente".
- capire perché una competenza con una formattazione decente non rappresenta ancora una risorsa operativa eccezionale

Questo è il complemento rivolto ai contributori di:

- [Barra della qualità](QUALITY-BAR.md)
- [Anatomia delle abilità](SKILL-ANATOMY.md)
- [Classificazione delle abilità](../specs/SKILL-CLASSIFICATION.md)

Punto di riferimento attuale per il catalogo live:

- 32 competenze pubblicate
- spread qualità attuale: `94, 95, 96, 97, 100`
- diffusione delle migliori pratiche attuali: `98, 99, 100`
- fascia alta attuale: "omni-figma" con qualità "100/100" e migliori pratiche "100/100"---

## 🧱 What High Scores Really Mean

Il classificatore**non**premia da solo un notevole ribasso.

Le abilità con punteggio elevato sono abilità che sono:

-**scopribile**: la descrizione dice chiaramente cosa fa l'abilità e quando usarla
-**operativa**: la competenza include script locali, riferimenti ed esempi eseguibili
-**diagnostica**: aiuta l'agente a riprendersi quando le cose vanno male
-**specifico**: si concentra su un flusso di lavoro, non su consigli generali
-**sicuro**: evita modelli rischiosi e fornisce output dello scanner puliti

In pratica, le competenze più forti si comportano più come un**piccolo kit di flusso di lavoro preconfezionato**che come una semplice nota di ribasso.---

## 📋 Score Targets

Utilizza questi target durante la creazione:

| Dimensione | Obiettivo forte | Obiettivo eccezionale |
|:----------|:------|:-------------|
| 🎯 Maturità | "L3" | `L3` con molteplici risorse di supporto |
| 📋 Migliori pratiche | `90+` | `96+` |
| ⭐ Qualità | "85+" | `90+` |
| 🛡️ Sicurezza | `95+` | `95+` con zero risultati |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Il tuo frontmatter dovrebbe rendere l'abilità facile da classificare e facile da scoprire:

- `name` corrisponde esattamente alla directory
- La "descrizione" spiega sia**cosa**che**quando**
- Sono presenti `categoria`, `tag`, `strumenti`, `complessità`, `rischio`, `fonte`, `autore` e date

Buona forma descrittiva:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Forma della descrizione errata:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Le competenze più forti includono costantemente queste sezioni:

- "## Panoramica".
- "## Quando utilizzare questa abilità".
- "## Flusso di lavoro".
- `## Esempi`
- "## Migliori pratiche".
- "## Risoluzione dei problemi".
- "## Risorse aggiuntive".

Se manca uno di questi, il punteggio può comunque essere buono, ma diventa più difficile apparire eccezionale.---

### 3. Runnable Local Support

Le abilità con il punteggio più alto di solito includono:

- "riferimenti/checklist.md".
- uno o più script di supporto in `scripts/`
- almeno un esempio funzionante in `examples/`
- "agents/openai.yaml" quando la competenza è destinata all'invocazione dell'agente diretto
- Collegamenti diretti da `SKILL.md` a quei file locali

Ciò è importante perché il classificatore considera un'abilità con**materiale di supporto in bundle**come più utilizzabile di una che punta solo verso l'esterno.

Minimo consigliato:```text
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

Esempi con punteggio elevato sono:

- cemento
- digitato con un recinto reale come `bash` o `python`
- legato a uno script locale o a un comando ripetibile
- rappresentativo del flusso di lavoro

Buono:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Debole:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Il valutatore premia la risoluzione dei problemi che aiuta un agente a recuperare, non solo a riconoscere un problema.

Formato preferito:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Questo è più forte di una nota vaga come:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Il classificatore ora distingue tra un'abilità semplicemente completa e una veramente profonda.

Segnali che aiutano:

- molteplici esempi concreti
- più casi di risoluzione dei problemi
- orientamento per competenze correlate
- pacchetti di riferimento più ricchi
- una sezione visibile `## Workflow` con passaggi numerati che il segnapunti può contare direttamente
- almeno una tabella operativa o mappa di esecuzione in cui chiarisce il flusso di lavoro
- più di una directory di supporto o tipo di risorsa
- Sezioni del flusso di lavoro con passaggi sufficienti per guidare l'esecuzione
- risorse decisionali come liste di controllo, rubriche, matrici, pacchetti o playbook
- maggiore diversità del pacchetto di supporto tra "riferimenti/", "script/", "agenti/", "esempi/" o "risorse/"
- abbastanza file di supporto riutilizzabili da sembrare un kit, non un singolo aiutante nascosto accanto al ribasso
- più di un singolo file di supporto quando il flusso di lavoro è abbastanza complesso da giustificare un pacchetto di supporto
- profondità del corpo sufficiente a coprire compromessi e modalità di guasto
- Guida operativa più densa, perché lo scorer ora distingue la formattazione raffinata dalla profondità del flusso di lavoro realmente riutilizzabile

Segnali che**non**aiutano molto:

- ripetere la stessa istruzione con parole diverse
- testo di riempimento generico
- aggiungere titoli senza aggiungere sostanza al di sotto---

## 🧪 Fast Checklist Before You Commit

Utilizza questo elenco di controllo prima di eseguire la convalida:

- la descrizione dice**cosa**e**quando**
- l'abilità è focalizzata su un flusso di lavoro
- `## Workflow` esiste e contiene passaggi numerati o puntati
- Esiste almeno un esempio eseguibile
- `references/`, `scripts/` e idealmente `examples/` sono collegati da `SKILL.md`
- "agents/openai.yaml" esiste quando la competenza è destinata all'invocazione diretta nei client dell'agente
- la risoluzione dei problemi utilizza "Sintomi" e "Soluzione".
- la competenza può ragionevolmente essere classificata come "L3".
- non sono presenti comandi rischiosi o percorsi sospetti

Quindi esegui:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- la descrizione è corretta ma troppo generica
- il ribasso ha sezioni ma nessuna profondità operativa
- Gli esempi non indicano aiutanti locali
- La risoluzione dei problemi esiste ma non è diagnostica
- ci sono troppo pochi tag o identificatori di strumenti
- l'abilità è sicura e pulita ma ancora troppo superficiale per essere considerata eccezionale---

## 🧭 Practical Rule

Se la tua abilità è:

- un**modello**: potrebbe passare
- una**guida**: potrebbe ottenere un buon punteggio
- un**pacchetto di flusso di lavoro**: è molto più probabile che ottenga il punteggio massimo