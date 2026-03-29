# 🔬 Anatomy of a Well-Written Skill (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Struttura e aspettative di qualità per Omni Skills `SKILL.md`: il formato di creazione che alimenta l'intero catalogo.**---

## 📐 The Two Parts

Ogni `SKILL.md` è composto da due sezioni distinte:### 1️⃣ Frontmatter (YAML Metadata)

Metadati leggibili dalla macchina tra delimitatori "---". Alimenta:

- 📚 L'indice delle competenze e la generazione del catalogo
- 🔎 Ricerca e filtraggio CLI
- ✅Convalida e punteggio di qualità
- 📊 Artefatti di classificazione `metadata.json` generati
- 📋 Per abilità si manifesta in `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Istruzioni leggibili dall'uomo (e leggibili dall'agente). Scrivilo come se stessi**informando uno sviluppatore senior**su come eseguire un'attività, sufficientemente specifica da consentire a un agente AI di seguirla senza indovinare.---

## 📋 Frontmatter Reference

| Campo | Obbligatorio | Digitare | Descrizione |
|:------|:---------|:-----|:----|
| `nome` | ✅| stringa | Deve corrispondere al nome della directory, con trattino minuscolo |
| `descrizione` | ✅| stringa | Descrizione di una riga (10-200 caratteri) |
| "versione" | ⚡| stringa | Versione semantica della competenza stessa (ad esempio, `"0.1.1"`) |
| "categoria" | ⚡| stringa | Una categoria canonica della tassonomia dei pronti contro termine |
| `tag` | ⚡| stringa[] | Tag ricercabili per la scoperta |
| `complessità` | ⚡| stringa | `principiante` · `intermedio` · `avanzato` · `esperto` |
| `rischio` | ⚡| stringa | `sicuro` · `cautela` · `offensivo` · `critico` |
| "strumenti" | ⚡| stringa[] | Assistenti di codifica AI testati |
| "fonte" | ⚡| stringa | `omni-team` · `comunità` · `ufficiale` |
| "autore" | ⚡| stringa | Attribuzione |
| `data_aggiunta` | ⚡| stringa | Data ISO |
| `data_aggiornato` | ⚡| stringa | Data ISO |

> ✅ = Sempre obbligatorio · ⚡ = Obbligatorio in modalità rigorosa

La versione della competenza è indipendente dalla versione del pacchetto npm. Il pacchetto attualmente è `0.1.3`, ma le competenze esistenti possono validamente rimanere nella propria versione semantica.---

## 🏷️ Canonical Categories

La tassonomia dei pronti contro termine attualmente definisce**18 categorie canoniche**:

| Categoria | Dominio |
|:---------|:-------|
| 💻 `sviluppo` | Sviluppo software generale |
| 🎨 `frontend` | Framework frontend e interfaccia utente |
| 🔧 `backend` | Servizi backend e API |
| 🌐 `fullstack-web` | Sviluppo web end-to-end |
| 🛠️ `strumenti` | Strumenti e utilità per sviluppatori |
| ⚙️ `cli-automazione` | Strumenti CLI e script di automazione |
| 📊 `affari` | Processi e strategie aziendali |
| 📐 `prodotto` | Gestione e progettazione del prodotto |
| 🎯 `design` | Progettazione visiva e UX |
| 🤖 `data-ai` | Ingegneria dei dati e applicazioni IA |
| 🧠 `ai-agenti` | Sviluppo e modelli di agenti AI |
| 📈 `apprendimento automatico` | Modelli e formazione ML |
| 🔌 `devops` | Infrastruttura e implementazione |
| 🛡️ `test-sicurezza` | Test e pratiche di sicurezza |
| 📖 `documentazione` | Generazione e gestione della documentazione |
| 🎬 `content-media` | Creazione di contenuti e media |
| 💬 `comunicazione` | Strumenti e flussi di lavoro di comunicazione |
| ❓ `senza categoria` | Predefinito quando non viene trovata alcuna corrispondenza |

> Le etichette legacy come "flusso di lavoro", "architettura", "infrastruttura", "sicurezza" e "test" vengono automaticamente normalizzate tramite la mappatura degli alias.---

## 📝 Body Structure

Un corpo di competenze ben scritto segue questa gerarchia:

### 📌 Panoramica (richiesto)
2-3 frasi su**cosa**fa l'abilità e**perché**esiste.

### 🎯 Quando utilizzarlo (richiesto)
Elenco puntato di**scenari specifici**in cui si applica questa competenza.

### 📋 Istruzioni di base (richiesto)
Il**processo passo dopo passo**che l'agente dovrebbe seguire. Sii esplicito. Sii specifico. Gli agenti funzionano meglio con istruzioni chiare e inequivocabili.

### 💡 Esempi (consigliati)
Prompt concreti, blocchi di codice o output attesi.**Più specifico è, meglio è.**

### ✅ Migliori pratiche (consigliate)
Utilizza ✅ Esegui/❌ Non formattare per una scansione rapida.

### 🔧 Risoluzione dei problemi (facoltativo)
Problemi comuni e loro soluzioni.

### 🔗 Competenze correlate (facoltative)
Riferimenti incrociati a competenze complementari.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Focalizzato su**uno specifico**flusso di lavoro o dominio
- 📌 Le istruzioni sono**abbastanza chiare per essere seguite da un'intelligenza artificiale**senza interpretazione umana
- 💡 Include**esempi concreti**con il comportamento previsto
- 🛡️ Dispone di una guida adeguata alla**gestione degli errori**
- 📊 Produce metadati sani: categoria canonica, maturità L2+, qualità 70+
- 🧰 Fornisce un pacchetto di supporto riutilizzabile, non solo in prosa, idealmente attraverso `riferimenti/`, `script/`, `esempi/` e `agenti/` dove appropriato

Per i modelli di punteggio più forti che spingono le abilità nelle fasce più alte, vedi [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️Consigli generici che potrebbero valere per qualsiasi cosa
- 🤷 Istruzioni vaghe come "scrivi un buon codice"
- 🚫 Nessun esempio o blocco di codice
- ⚠️Campi iniziali mancanti
- 📉 Punteggio di qualità basso (sotto 50)