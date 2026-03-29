# 📊 Skill Classification and Metadata (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Il classificatore locale che assegna un punteggio a ogni competenza durante la convalida e la creazione, generando profili leggibili dalla macchina per l'intero catalogo.**---

## 📊 Status

| Uscita | Generato |
|:-------|:----------|
| ✅ Radice `metadata.json` | Riepilogo a livello di repository |
| ✅ Per competenza `skills/<skill>/metadata.json` | Classifiche individuali |
| ✅ Catalogo `dist/catalog.json` | Catalogo pubblicato con spartiti |
| ✅ Manifest `dist/manifests/<skill>.json` | Dati leggibili automaticamente per competenza |

Generato da: `python3 tools/scripts/validate_skills.py`

Istantanea del repository corrente:

- 32 competenze pubblicate
- punteggio di qualità medio "96,3".
- punteggio medio delle migliori pratiche "98,7".
- punteggio di sicurezza medio "95,0".
- spread di qualità attuale `94, 95, 96, 97, 100`
- le migliori pratiche attuali si diffondono `98, 99, 100`---

## 🎯 Purpose

Il classificatore fornisce a ogni competenza un**profilo coerente leggibile dalla macchina**prima che raggiunga il catalogo. Svolge quattro lavori:

1. 📋**Parse**: frontmatter YAML e corpo del markdown
2. 🏷️**Normalizza**: etichette di categoria nella tassonomia canonica
3. 📊**Classificare**: maturità, best practice, qualità e punteggio di sicurezza
4. 📁**Emetti**: artefatti di metadati consumati da script di build, documenti e CI---

## 🏷️ Canonical Taxonomy

**18 categorie canoniche**con mappatura automatica degli alias:

| Categoria | Dominio | Alias ​​comuni |
|:---------|:-------|:-------|
| 💻 `sviluppo` | Sviluppo software generale | `codifica`, `programmazione` |
| 🎨 `frontend` | Frontend e interfaccia utente | `ui`, `webdesign` |
| 🔧 `backend` | Backend e API | `server`, `api` |
| 🌐 `fullstack-web` | Web end-to-end | `web`, `stack completo` |
| 🛠️ `strumenti` | Strumenti per sviluppatori | `utilità` |
| ⚙️ `cli-automazione` | CLI e automazione | `scripting`, `flusso di lavoro` |
| 📊 `affari` | Strategia aziendale | `strategia` |
| 📐 `prodotto` | Gestione del prodotto | `pm` |
| 🎯 `design` | Progettazione visiva e UX | `ux` |
| 🤖 `data-ai` | App dati e intelligenza artificiale | `dati`, `analisi` |
| 🧠 `ai-agenti` | Modelli di agenti AI | "agenti" |
| 📈 `apprendimento automatico` | Modelli e formazione ML | `ml` |
| 🔌 `devops` | Infrastrutture | `infrastruttura`, `cloud` |
| 🛡️ `test-sicurezza` | Test e sicurezza | `test`, `sicurezza`, `qa` |
| 📖 `documentazione` | Gestione documenti | "documenti" |
| 🎬 `content-media` | Creazione di contenuti | `media`, `contenuto` |
| 💬 `comunicazione` | Strumenti di comunicazione | `chiacchierare` |
| ❓ `senza categoria` | Fallback predefinito | — |

> Le etichette legacy come "flusso di lavoro", "architettura", "infrastruttura" vengono automaticamente normalizzate tramite la mappatura degli alias.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Livello | Etichetta | Criteri |
|:------|:------|:---------|
|**L1**| "metadati" | Frontmateria più corpo minimo |
|**L2**| `istruzioni` | Istruzioni scritte sostanziali |
|**L3**| "risorse" | Script in bundle o risorse in bundle più ricche |

Segnali aggiuntivi tracciati: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

L’euristica valuta:

| Segnale | Cosa controlla |
|:-------|:-------|
| 📛 Qualità lumaca | formattazione del campo "nome" |
| 📝 Descrizione | Chiarezza, lunghezza, informatività |
| 📐 Struttura | Sezioni e gerarchia del documento |
| 💡 Esempi | Recinti di codice e blocchi di esempio |
| 🔗 Riferimenti | `Riferimenti/` locali, `script/` e helper del pacchetto di supporto collegati locali |
| 🧰 Operabilità | Esempi di script locali eseguibili e frammenti concreti di flusso di lavoro |
| 🧩 Profondità del pacchetto di supporto | Famiglie di supporto multiple, file riutilizzabili, metadati dell'agente e risorse operative |
| 🩺 Risoluzione dei problemi | Coppie esplicite di "Sintomi" e "Soluzione" |
| 📚 Copertura | Sezioni "Quando utilizzarlo", "Best practice", "Risoluzione dei problemi" e "Risorse aggiuntive" |
| 🌐 Portabilità | Formulazione indipendente dallo strumento |
| 📅 Freschezza | Evitare le date codificate |

**Livello attuale**

| Livello | Intervallo di punteggio |
|:-----|:-----------|
| `eccellente` | 90-100|
| `buono` | 70-89 |
| `giusto` | 50-69 |
| `ha bisogno di lavoro` | 0-49 |

Il marcatore è intenzionalmente**abbastanza semantico da creare diffusione**tra le competenze mature. Una skill con struttura pulita può ottenere buoni punteggi, ma per raggiungere la fascia alta ha bisogno anche di segnali di profondità come:

- più esempi, non solo uno
- più casi di risoluzione dei problemi
- orientamento delle competenze correlate
- pacchetti di supporto locale più ricchi
- più di una famiglia di sostegno oltre alla semplice prosa, idealmente includendo "agenti/" o "risorse/" dove aggiungono un vero riutilizzo
- una sezione dedicata `## Workflow` con passaggi numerabili
- almeno una piccola tabella operativa o mappa decisionale quando migliora la chiarezza dell'esecuzione
- maggiore specificità operativa rispetto a un semplice modello
- maggiore profondità del flusso di lavoro e risorse di supporto decisionale più chiare
- profondità del pacchetto di supporto che va oltre un file "riferimenti/" e uno script collegato
- abbastanza file di supporto riutilizzabili da sembrare un kit per il flusso di lavoro, non un componente aggiuntivo a nota singola
- densità operativa sufficiente per separare un contorno raffinato da un kit di flusso di lavoro riutilizzabile

Ciò significa che una competenza strutturalmente completa può comunque arrivare a 90 invece che a "100" se il suo pacchetto di supporto è più ristretto, le sue risorse decisionali sono più scarse o la sua densità operativa è inferiore rispetto alle competenze più forti nel catalogo.---

### ⭐ Quality Score (0-100)

L’euristica combina:

| Segnale | Peso |
|:-------|:-------|
| 📝Completezza corporea | Medio-alto |
| 📋Precisione della descrizione | Medio |
| 📊 Completezza dei metadati | Medio |
| 📅 Recency (`date_updated`) | Medio |
| 📦 Risorse confezionate | Medio |
| 📋Contributo di buone pratiche | Medio |
| 🧠 Profondità semantica | Medio-alto |
| 🛠️ Profondità operativa | Medio |
| 📚 Ricchezza del pacchetto di supporto | Medio |

**Livelli di qualità:**

| Livello | Intervallo di punteggio |
|:-----|:-----------|
| 💎 `platino` | 80+ |
| 🥇 `oro` | 65-79 |
| 🥈 `argento` | 50-64 |
| 🥉 `bronzo` | 35-49 |
| 🌱 `antipasto` | 0-34 |---

### 🛡️ Security Score (0-100)

Il livello di sicurezza combina:

| Scanner | Sempre abilitato | Cosa fa |
|:--------|:--------|:-------------|
| 🔍**Statico**| ✅ Sì | Esegue la scansione di SKILL.md, file compressi e script |
| 🦠**ClamAV**| ⚙️ Facoltativo | Scansione malware tramite `clamscan` |
| 🔒**VirusTotale**| ⚙️ Facoltativo | Ricerca hash (nessun caricamento) |

**Famiglia di regole scanner statiche:**
- 🎭 Schemi di iniezione ed esfiltrazione tempestivi
- 💣 Comandi shell distruttivi
- 🔑 Credenziali o percorsi del sistema operativo sospetti
- ⚠️ Primitive di script rischiose (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Forma dell'output di sicurezza:**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

| Sezione | Campi |
|:--------|:-------|
| 🆔 Identità | `id`, `slug`, `display_name` |
| 🏷️ Tassonomia | `categoria_raw`, `categoria_canonical`, `categoria_dedotta` |
| 📋 Autore | tag, strumenti, complessità, rischio, fonte, autore |
| 📅 Date e percorsi | `data_aggiunta`, `data_aggiornata`, percorsi |
| 📊 Risorse | Contatori di file e riferimenti |
| 📝Segnali di contenuto | Conteggio parole, lunghezza del corpo, flag strutturali |
| 🧠 Profondità semantica | Passaggi del flusso di lavoro, esempi, profondità della risoluzione dei problemi, risorse decisionali, famiglie di collegamenti di supporto |
| 🧩 Struttura del pacchetto di supporto | Conteggio dei file di supporto, famiglie collegate, `agents/`, `assets/` ed esempi riutilizzabili |
| 🎯 Maturità | Flag di livello, etichetta, script/file |
| 📋 Buone pratiche | Punteggio e livello |
| ⭐ Qualità | Punteggio, livello e suddivisione semantica |
| 🛡️ Sicurezza | Punteggio, livello, stato, risultati |
| ✅ Validazione | Stato, errori, avvisi |### Root (`metadata.json`)

| Sezione | Campi |
|:--------|:-------|
| 📊 Riepilogo | Conteggi, medie, distribuzione per categorie |
| 🏷️ Tassonomia | La categoria conta |
| 🎯 Distribuzione | Livello di competenza, livello di qualità, livello di sicurezza |
| ✅ Validazione | Lo stato conta |
| 📋Elenco competenze | Riepiloghi compatti per competenza |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

Questo configura `git` per utilizzare `.githooks/pre-commit`, che rigenera i metadati e gli artefatti del catalogo prima del commit e mette in scena automaticamente i file generati.