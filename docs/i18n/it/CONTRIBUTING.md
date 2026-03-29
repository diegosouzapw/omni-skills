# 🤝 Contributing to Omni Skills (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills contiene sia un catalogo di competenze che le superfici di runtime basate su tale catalogo.**
> I contributi possono avere come target entrambe le aree, ma entrambe devono rimanere allineate con gli artefatti generati e con il comportamento attuale della CLI.---

## 📊 Repository Baseline

| Metrico | Valore |
|:-------|:------|
| 📦 Versione del pacchetto | `0.1.3` |
| 🧠 Competenze pubblicate | "32" |
| 📦 Pacchetti completamente supportati | "7" |
| 🖥️ Client con capacità di installazione | "7" |
| 🔌 Client compatibili con la configurazione MCP | "16" |
| 🔄 Sganciamenti automatici | Abilitato su "principale" |---

## Importante

| Cosa | Dove |
|:-----|:------|
| 🧠 Le competenze sono create in | `skills/<nome-skill>/SKILL.md` |
| 📖 Modelli e linee guida per i contributori | `documenti/contributori/` |
| 🧾 Flusso PR canonico per nuove competenze | [Flusso di lavoro PR delle competenze](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥Le competenze incoming native arrivano sotto | `competenze/` (qualsiasi lingua) |
| ✨Derivati ​​potenziati curati | `skills_omni/` (solo inglese, automatizzato) |
| 🚫 `skills_omni/` è protetto | Non aperto al contributo pubblico diretto |
| 📖 Documenti su runtime e architettura | `documenti/` |
| 📄File comunitari | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Digitare | Zona |
|:-----|:-----|
| 🧠 Aggiungi o migliora un'abilità | `competenze/` |
| 📖 Aggiorna la guida per i contributori | `documenti/contributori/` |
| 🖥️ Migliora CLI, programma di installazione o script | `strumenti/` |
| 📦 Migliora il runtime del catalogo o i pacchetti di protocollo | `pacchetti/` |
| 🧪 Rafforzare i test, effettuare controlli di fumo o rilasciare documenti | Vari |---

## Avvio Rapido

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Apri il PR con l'opzione "Consenti modifiche ai manutentori" abilitata.**---

## Documentazione

Una buona competenza incoming nativa dovrebbe:

- ✅Risolvere un problema specifico in modo pulito
- ✅ Essere riutilizzabile in tutti i progetti
- ✅Includi le istruzioni che un agente può effettivamente seguire
- ✅ Evita contenuti vaghi o ridondanti
- ✅Dichiarare frontmatter accurato e metadati di compatibilità quando disponibili
- ✅ Terreno con artefatti di classificazione `metadata.json` generati dopo l'esecuzione dell'automazione### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Suggerimento:**i pacchetti di competenze di livello release dovrebbero includere `agents/`, `references/`, `examples/` e `scripts/`. Ma la superficie di assunzione è intenzionalmente permissiva: è consentita una minima abilità nativa in entrata e la pipeline di potenziamento genera il derivato più forte.### 🌐 Language Policy

| Superficie | Lingue accettate |
|:--------|:------|
| 📥 `competenze/` (assunzione nativa) | Portoghese, inglese o qualsiasi lingua |
| ✨ `skills_omni/` (output curato) | Solo inglese |

> Il potenziatore privato conserva la fonte nativa così come inviata e riscrive il derivato curato in inglese.

📖 Per la sequenza completa di ramo, convalida e revisione del potenziamento, utilizzare [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Esegui questo prima di aprire un PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<dettagli>
<summary>📋 <strong>Ciò che <code>npm run validate</code> rigenera</strong></summary>

- "metadata.json".
- "competenze/<competenza>/metadata.json`
- Mappatura della tassonomia canonica
- Maturità, migliori pratiche, qualità e punteggi di sicurezza
- Risultati di sicurezza statici
- Stato dello scanner ClamAV e VirusTotal opzionale (se configurato)</details>

>**⚠️ Importante:**La convalida è il contratto utilizzato da CLI, API, MCP, A2A, manifest, archivi e automazione dei rilasci. Tratta i metadati generati come parte della superficie di revisione, non come output usa e getta.### 📥 Intake Policy

| Condizione | Comportamento |
|:----------|:---------|
| Frontmatter mancante/incompleto | ⚠️ Avvertenze (non blocca) |
| Risultati critici sulla sicurezza | 🚫 Blocca l'assunzione |
| Errori di convalida difficile | 🚫 Blocca l'assunzione |
| Standard editoriale più severo | Applicato nel flusso derivato potenziato, non nell'assunzione nativa |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<dettagli>
<summary>📋 <strong>Ciò che convalida il passaggio del fumo</strong></summary>

- ✅Validazione delle competenze
- ✅ Generazione del catalogo
- ✅ Generazione del catalogo documenti
- ✅Suite di prova
- ✅ `npm pack --dry-run`
- ✅ Avvio dell'API
- ✅ Avvio MCP in `stdio`, `stream` e `sse`
- ✅Avvio A2A
- ✅Verifica archivio e aspettative di confezionamento</details>

---

## 📋 Skill Frontmatter

Frontmatter è fortemente consigliato. Utilizza [Modello di competenza](docs/contributors/SKILL-TEMPLATE.md) come base.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<dettagli>
<summary>🏷️ <strong>Categorie della tassonomia canonica</strong></summary>

| Categoria | Categoria |
|:---------|:---------|
| `sviluppo` | "frontend" |
| "backend" | `fullstack-web` |
| "strumenti" | `cli-automazione` |
| "affari" | "prodotto" |
| `disegno` | `data-ai` |
| `ai-agenti` | "apprendimento automatico" |
| `devops` | `test-sicurezza` |
| "documentazione" | `contenuto-media` |
| `comunicazione` | `senza categoria` |</details>

>**ℹ️**La versione della skill è indipendente dalla versione del pacchetto npm. Se una competenza in entrata nativa non dispone ancora di frontmatter, verrà accettata con avvisi e deriverà metadati temporanei dalla directory, dal titolo e dal corpo del testo.---

## ⚙️ Runtime Contributions

Se tocchi `packages/`, `tools/bin/`, `tools/lib/` o crei script:

- 📦 Mantieni `dist/` e i documenti allineati con l'implementazione
- 🔄 Preferisco riutilizzare `packages/catalog-core` invece di duplicare la logica del catalogo
- 🔒 Mantieni il comportamento di scrittura locale dietro le impostazioni predefinite di anteprima o di prova
- 🔌 Mantieni disciplinati gli scrittori MCP: aggiungi scrittori di configurazione di prima classe solo quando il cliente ha un contratto di configurazione pubblico stabile
- 🛡️ Tratta gli avvisi dello scanner di sicurezza come parte della barra di revisione
- 🧪 Aggiorna i test quando si modificano comandi CLI, modalità di trasporto o endpoint pubblici### 🚧 Important Boundary

| Fai questo ✅ | Non farlo 🚫 |
|:-----------|:-----------------|
| Invia il lavoro nativo in "competenze/" | Apri PR manuali che modificano `skills_omni/` |
| Lascia che sia l'automazione a gestire l'esecuzione del potenziatore | Aggiungi direttamente contenuti curati |
| Concentrarsi sulla qualità delle competenze legittime | Ignora il flusso PR associato automatizzato |

>**ℹ️**Quando un'abilità nativa in `skills/` viene aggiornata, il potenziatore privato la rielabora e aggiorna la linea di base migliorata.---

## 🔄 Enhancer Outcome States

Durante i PR pubblici con competenze native, il potenziatore segnala uno dei quattro stati:

| Stato | Significato |
|:------|:--------|
| ✅ `completato` | Derivato avanzato generato in modo pulito, idoneo per `skills_omni/` |
| ⚠️ `degradato` | Completato con fallback o movimento del punteggio più debole: ispeziona più attentamente |
| 🚫 `bloccato` | Arrestato per motivi di infrastruttura o convalida: impedisce la pubblicazione automatica |
| ❌ `fallito` | Errore imprevisto: richiede un'indagine da parte del manutentore |

>**📝 I contributori**non hanno bisogno di risolvere i problemi dell'infrastruttura del potenziatore. La responsabilità è quella di presentare una competenza nativa legittima e mantenere il pronti contro termine verde.---

## 🔄 Automatic Release Policy

Quando una modifica arriva su "main" e include:

- "competenze/**".
- `skills_omni/**`
- "dati/bundles.json".

…il repository emette automaticamente un**rilascio del pacchetto**.### 📋 Version Bump Rule

| Da | A | Regola |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Toppa +1 |
| `0.1.9` | `0.1.10` | Toppa +1 |
| `0.1.10` | `0.2.0` | Passa al minore successivo, reimposta la patch |

> Il flusso di rilascio rigenera cataloghi/archivi, conferma il bump della versione, tagga la versione, pubblica npm e crea automaticamente la versione GitHub.---

## 📝 Commit Conventions

| Prefisso | Utilizzare per |
|:-------|:--------|
| `impresa:` | Nuova abilità o funzionalità |
| `aggiustare:` | Correzione bug |
| `documenti:` | Modifiche alla documentazione |
| `refactoring:` | Pulizia del codice o modifiche alla struttura |
| `prova:` | Prova modifiche |
| `lavoretto:` | Manutenzione |---

## ❓ Need Help?

| Canale | Collegamento |
|:--------|:-----|
| 💬 Domande | [Apri una discussione](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Bug | [Apri un problema](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Feedback anticipato | [Apri una bozza di PR](https://github.com/diegosouzapw/omni-skills/pulls) |