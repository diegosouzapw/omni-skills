# 🧠 Omni Skills (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Il catalogo delle competenze che si installa da solo.**<br/>
CLI · API · MCP · A2A: tutto da un singolo comando `npx`.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Installa in 1 minuto](#-installation) · [🛠️ Scegli il tuo strumento](#-choose-your-tool) · [📖 Guida CLI](docs/users/CLI-USER-GUIDE.md) · [📦 Bundle](docs/users/BUNDLES.md) · [🔌 Runtime](#-runtime-surfaces) · [💡 Perché Omni Abilità](#-perché-omni-abilità)</div>

---

<div align="center">

### Panoramica

</div>

| | Metrico | Valore |
|:--|:-------|:------|
| 📦 |**Competenze pubblicate**| "32" in 15 categorie attive |
| 🎯 |**Pacchetti**| "7" bundle curati con supporto completo |
| 🖥️ |**Installa client**| Assistenti di codifica AI con capacità di installazione "7" |
| 🔌 |**Clienti MCP**| `16` Client con funzionalità di configurazione MCP |
| 🔐 |**Uscita curata**| `32` derivati ​​inglesi migliorati in `skills_omni/` |
| 📋 |**Versione corrente**| `v0.1.2` |---

## Avvio Rapido

>**Hai cercato competenze di codifica AI, competenze di Claude Code, competenze di Cursore, competenze di Codex CLI, competenze di Gemini CLI, competenze di Antigravity o librerie `SKILL.md` installabili?**
> Sei nel posto giusto.### 1️⃣ What is this?

Omni Skills è un**catalogo di competenze e runtime installabili**per gli assistenti di codifica AI. Fondamentalmente, è un repository pubblico di playbook `SKILL.md` riutilizzabili, ma a differenza delle semplici raccolte di competenze, il repository**è**il livello di distribuzione e runtime.

<dettagli>
<summary>📋 <strong>Cosa è incluso</strong></summary>

| Componente | Descrizione |
|:----------|:-----------|
| 🧠**Competenze**| Playbook curati basati su "SKILL.md" per assistenti IA |
| 📦**Manifest**| Manifesti, bundle e archivi JSON generati |
| 🧭**Installazione guidata**| TTY interattivo e flussi di installazione del terminale visivo |
| 🌐**API catalogo**| API HTTP di sola lettura per ricerca, rilevamento e download |
| 🔌**Server MCP**| Strumenti di rilevamento, raccomandazione e configurazione in grado di riconoscere il client |
| 🤖**A2A Runtime**| Orchestrazione delle attività da agente ad agente |
| ✨**Pipeline di miglioramento**| Il potenziatore privato pubblica derivati ​​inglesi curati in `skills_omni/` |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Utilizza `@brainstorming` per pianificare un MVP SaaS."*
>
> 💬 *"Utilizza `@api-design` per rivedere la progettazione di questo endpoint."*
>
> 💬 *"Usa `@debugging` per isolare questa regressione."*### 5️⃣ Start with a bundle

| 🎯 Gol | Pacchetto | Comando |
|:---------|:-------|:--------|
| Ingegneria generale | "essenziale" | `npx omni-skills --bundle Essentials` |
| Consegna prodotto + app | `stack completo` | `npx omni-skills --bundle full-stack` |
| Sistemi di progettazione | `disegno` | `npx omni-skills --bundle design` |
| Revisione della sicurezza | "sicurezza" | `npx omni-skills --bundle security` |
| Infra e rilascio | `devops` | `npx omni-skills --bundle devops` |
| Applicazioni LLM | `ai-ingegnere` | `npx omni-skills --bundle ai-engineer` |
| Manutenzione OSS | `oss-maintainer` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Prima di confrontare i pacchetti o scegliere un percorso di installazione, comprendere questi cinque elementi costitutivi aiuta:

| Concetto | Cosa significa |
|:--------|:-----|
| 🧠**Competenze**| Playbook `SKILL.md` riutilizzabili che insegnano a un assistente come eseguire bene un flusso di lavoro |
| 📦**Manufatti da catalogo**| JSON generato e output di archivio che consentono la ricerca, il confronto, il download e l'installazione |
| 🔌**Configurazione MCP**| Configurazione lato client per consentire agli assistenti di scoprire le competenze Omni tramite gli strumenti MCP |
| 🤖**A2A Runtime**| Orchestrazione da agente ad agente per rilevamento, raccomandazione e trasferimento del piano di installazione |
| ✨**Uscita curata**| `skills_omni/` — la superficie migliorata mantenuta da Omni, separata dalla presa a monte nativa |

>**📝 Politica nativa/curata:**
> - `skills/` accetta l'assunzione originaria nativa in qualsiasi lingua
> - `skills_omni/` è sempre curato e pubblicato in inglese
> - `skills_omni/` è una superficie unidirezionale e non ritorna all'assunzione nativa---

## 💡 Why Omni Skills

>**Non solo "un altro repository con competenze in cartelle."**
> Omni Skills ha un contratto più forte e una superficie di autonomia più ampia.

| Se vuoi… | 📁 Repo di competenze tipiche | ✨Abilità Omni |
|:-------------|:--------------|:------|
| Installa in un vero assistente | Copia manuale o script personalizzato | `npx omni-skills`, installazione guidata, interfaccia utente visiva, `--skill` selettivo e `--bundle` |
| Cerca e confronta le competenze | Sfoglia manualmente il markdown | Catalogo generato, filtraggio, pianificazione dei pacchetti, ricerca, confronto e raccomandazione |
| Utilizza gli stessi dati in tutti gli strumenti | Logica separata per strumento | Manifesti e catalogo condivisi per CLI, API, MCP e A2A |
| Configurare i client MCP | File modificati manualmente | `config-mcp`, anteprime del sidecar locale, ricette generate e scritture consentite |
| Comunicati fiducia | Imballaggio ottimale | Checksum, archivi firmati, verifica dello scanner, CI di rilascio e pubblicazione preflight |
| Assunzione della comunità curata | Qualunque terra rimanga così com'è | Assunzione nativa in `skills/`, derivati ​​inglesi curati in `skills_omni/` con attribuzione |---

## 🖥️ Compatibility and Invocation

Queste competenze seguono il modello `SKILL.md` e possono essere utilizzate come un normale repository, ma il pacchetto le installa e configura anche su un'ampia superficie:

>**7**client con funzionalità di installazione ·**16**client con funzionalità di configurazione MCP### 🎯 Install-Capable Clients

| Strumento | Digitare | Esempio di invocazione | Percorso di installazione |
|:-----|:-----|:------|:-----|
| 🟢**Codice Claude**| CLI | `Utilizzare il brainstorming per pianificare una funzionalità` | `~/.claude/skills` |
| 🔵**Cursore**| IDE | `@brainstorming aiutami a pianificare una funzionalità` | `~/.cursore/competenze` |
| 🟡**Gemini CLI**| CLI | `Utilizzare il brainstorming per pianificare una funzionalità` | `~/.gemini/skills` |
| 🔴**Codice CLI**| CLI | `Utilizzare il brainstorming per pianificare una funzionalità` | `~/.codex/competenze` |
| 🟠**Kiro**| CLI/IDE | `Utilizzare il brainstorming per pianificare una funzionalità` | `~/.kiro/skills` |
| 🟣**Antigravità**| IDE | `Utilizza @brainstorming per pianificare una funzionalità` | `~/.gemini/antigravity/skills` |
| ⚪**OpenCode**| CLI | `opencode esegui @brainstorming` | `<area di lavoro>/.opencode/skills` |

<dettagli>
<summary>🔌 <strong>Copertura più ampia della configurazione MCP (16 client)</strong></summary>

Questi target fanno parte della superficie di configurazione MCP supportata, anche quando non sono target di installazione per le directory delle competenze:

| Client o Superficie | Tipo di supporto | Note |
|:------------------|:------------|:------|
| Impostazioni e desktop di Claude | Configurazione MCP | Impostazioni, desktop e flussi basati sul progetto |
| Codice VS | Configurazione MCP | Destinazioni utente, area di lavoro, addetti ai lavori e contenitore di sviluppo |
| Gemelli | Configurazione MCP | Impostazioni utente e area di lavoro |
| Cline | Configurazione MCP | Obiettivo di configurazione di prima classe |
| GitHub Copilot CLI | Configurazione MCP | Destinazioni di configurazione utente e repository |
| Continua | Configurazione MCP | Generazione YAML dell'area di lavoro |
| Windsurf | Configurazione MCP | Destinazione configurazione utente |
| Zed | Configurazione MCP | Destinazione di configurazione dell'area di lavoro |
| Oca | Configurazione MCP | Target di configurazione utente con ricetta generata |
| Codice chilo | Configurazione MCP | Obiettivi utente, progetto e area di lavoro |
| giugno | Configurazione MCP | Obiettivi di configurazione del progetto e dell'utente |</details>

---

## Installare

<tabella>
<tr>
<td larghezza="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Strumento | Installa comando | Primo utilizzo |
|:-----|:---------------|:----------|
| 🟢 Codice Claude | `npx omni-skills --claude` | `Utilizzare il brainstorming per pianificare una funzionalità` |
| 🔵 Cursore | `npx omni-skills --cursor` | `@brainstorming aiutami a pianificare una funzionalità` |
| 🟡Gemini CLI | `npx omni-skills --gemini` | `Utilizzare il brainstorming per pianificare una funzionalità` |
| 🔴 Codice CLI | `npx omni-skills --codex` | `Utilizzare il brainstorming per pianificare una funzionalità` |
| 🟣 Antigravità | `npx omni-skills --antigravity` *(predefinito)* | `Utilizza @brainstorming per pianificare una funzionalità` |
| 🟠 Kiro | `npx omni-skills --kiro` | `Utilizzare il brainstorming per pianificare una funzionalità` |
| ⚪ Codice aperto | `npx omni-skills --opencode` | `opencode esegui @brainstorming` |
| 📂Percorso personalizzato | `npx omni-skills --path ./my-skills` | Dipende dal tuo strumento |

> 📖**Non sai da dove cominciare?**
> - [🚀 Guida introduttiva](docs/users/GETTING-STARTED.md) — installa e verifica in meno di 2 minuti
> - [🧭 Guida utente CLI](docs/users/CLI-USER-GUIDE.md) — riferimento completo ai comandi
> - [📗 Guida all'utilizzo](docs/users/USAGE.md): prompt, modelli e modalità di runtime---

## 🔌 Runtime Surfaces

Omni Skills non è solo una libreria di competenze. Espone**quattro superfici di runtime**che utilizzano lo stesso catalogo generato:

| Superficie | Stato | Cosa fa | Esempio |
|:--------|:------|:-----|:--------|
| 🖥️**CLI**| ✅Disponibile | Trova, installa, diagnostica, interfaccia utente visiva, servizi di avvio, controlli del fumo | `npx medico con tutte le competenze` |
| 🌐**API catalogo**| ✅Disponibile | Catalogo di sola lettura, ricerca, bundle, confronto, installazione di piani, download | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅Disponibile | Individuazione, consigli, anteprima di installazione, sidecar locale, flussi di configurazione | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅Disponibile | Ciclo di vita dell'attività, trasferimento, polling, streaming, annullamento, persistenza | `npx omni-skills a2a --port 3335` |

<dettagli>
<summary>🖥️ <strong>Shell visiva e comandi operatore</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<dettagli>
<summary>🔌 <strong>Trasporti e configurazione MCP</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Metrico | Conte |
|:-------|:------|
| 🧠 Competenze pubblicate |**32**|
| 📂 Categorie attive |**15**|
| 📦 Pacchetti completamente supportati |**7**|
| ✨Derivati ​​curati |**32**in `skills_omni/` |### 📦 Bundle Availability

| Pacchetto | Competenze | Membri |
|:-------|:-------|:--------|
| 🧰 `essenziale` |**4/4**✅ | `trovare-competenze` · `brainstorming` · `architettura` · `debugging` |
| 🌐 `stack completo` |**5/5**✅ | `frontend-design` · `api-design` · `database-design` · `omni-figma` · `auth-flows` |
| 🎨 `design` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `accessibility-audit` · `design-token-governance` |
| 🛡️ `sicurezza` |**4/4**✅ | `revisore della sicurezza` · `scanner delle vulnerabilità` · `risposta agli incidenti` · `modellazione delle minacce` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `revisione dell'osservabilità` · `release-engineering` |
| 🤖 `ai-engineer` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracts` · `model-serving` |
| 🔧 `oss-maintainer` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `documentazione` |### ✨ Native Intake → Curated Output

| Superficie | Scopo | Lingua |
|:--------|:--------|:---------|
| 📥 `competenze/` | Assunzione nativa | Qualsiasi lingua |
| ✨ `skills_omni/` | Output curato Omni-mantenuto | Sempre inglese |

>**ℹ️**Le modifiche alle abilità native vengono rielaborate dal potenziatore privato e aggiornate nella linea di base curata. Ciò rende `skills_omni/` una**superficie del catalogo mantenuta**, non una seconda copia.---

## 🛡️ Security and Release Posture

> Omni Skills fornisce una storia di rilascio e verifica più efficace rispetto a un semplice repository di markdown.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<dettagli>
<summary>📋 <strong>Ciò che convalida la pipeline</strong></summary>

- ✅ Validazione delle competenze e generazione di metadati
- ✅ Strumenti di normalizzazione e ricategorizzazione della tassonomia
- ✅ Generazione di cataloghi e archivi
- ✅Test automatizzati
- ✅ Percorsi di avvio API, MCP e A2A
- ✅Verifica dell'archivio
- ✅ Preflight del pacchetto con `npm pack --dry-run`</details>

<dettagli>
<summary>🔐 <strong>Rilascia la postura</strong></summary>

| Controllo | Descrizione |
|:--------|:-----------|
| 🔒 Checksum SHA-256 | Manifesti di checksum per tutti gli archivi |
| ✍️ Manufatti firmati | Firme distaccate sugli artefatti di rilascio |
| 🤖 CI-in forza | Verifica del rilascio in CI prima della pubblicazione |
| 🦠 Varchi scanner | Flusso di rilascio controllato da ClamAV e VirusTotal |
| 📦 Rilascio GitHub | Generazione automatizzata della versione GitHub |
| 📋pubblicazione npm | Solo dal tarball verificato |
| 🔄 Rilascio automatico | L'abilità qualificante si fonde con "principale" |

**Il rilascio automatico si attiva solo quando viene modificata un'unione:**
- "competenze/*/**".
- `competenze_omni/*/**`
- "dati/bundles.json".

Le modifiche solo ai documenti**non**attivano la pubblicazione del pacchetto.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Dottore | Cosa imparerai |
|:----|:-----------------|
| 🚀 [Per iniziare](docs/users/GETTING-STARTED.md) | Installa, verifica e richiama in meno di 2 minuti |
| 🧭 [Guida per l'utente della CLI](docs/users/CLI-USER-GUIDE.md) | Riferimento completo ai comandi e modelli del mondo reale |
| 📗 [Guida all'uso](docs/users/USAGE.md) | Comandi CLI, modalità di installazione, runtime e configurazione MCP |
| 📦 [Pacchetti](docs/users/BUNDLES.md) | Pacchetti curati e disponibilità |
| 📚 [Catalogo](docs/CATALOG.md) | Catalogo generato automaticamente delle competenze pubblicate |
| 🔧 [Runbook di sistema](docs/operazioni/RUNBOOK.md) | Costruisci, servi, proteggi e risolvi i problemi |### 🏗️ For Architects

| Dottore | Cosa imparerai |
|:----|:-----------------|
| 🗺️ [Roadmap di Agent-Native](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Evoluzione dell'architettura e aree rimanenti |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Decisione principale monorepo |
| 🔬 [Analisi della base di codice](docs/architecture/CODEBASE-ANALYSIS.md) | Composizione del runtime e limiti del sistema |
| 🌐 [API del catalogo](docs/specs/CATALOG-API.md) | Endpoint HTTP, filtri, governance e download |
| 🧩 [Installazione guidata CLI](docs/specs/CLI-GUIDED-INSTALLER.md) | Contratto comportamentale per l'installatore guidato |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Shell visiva dell'inchiostro e modello di stato |
| 🔌 [Sidecar MCP locale](docs/specs/LOCAL-MCP-SIDECAR.md) | Strumenti per il filesystem e modello di lista consentita |
| 📊 [Matrice di supporto clienti](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Riferimento completo al cliente e allo scrittore |
| 🏷️ [Classificazione delle competenze](docs/specs/SKILL-CLASSIFICATION.md) | Tassonomia, punteggio e metadati |
| 🛡️ [Convalida della sicurezza](docs/specs/SECURITY-VALIDATION.md) | Scanner, archivi e firme |
| 📋 [Manifesto delle abilità](docs/specs/SKILL-MANIFEST.md) | Formato manifest leggibile dalla macchina |### 🤝 For Contributors

| Dottore | Cosa imparerai |
|:----|:-----------------|
| 📝 [Guida per contribuire](CONTRIBUTING.md) | Flusso di lavoro Repo e aspettative PR |
| 🧾 [Flusso di lavoro PR delle competenze](docs/contributors/SKILL-PR-WORKFLOW.md) | Assunzione nativa, elaborazione del potenziatore, aspettative dei revisori |
| 📄 [Modello di competenze](docs/contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` con frontmatter e struttura |
| 🔬 [Skill Anatomy](docs/contributors/SKILL-ANATOMY.md) | Struttura e aspettative di qualità |
| ✅ [Barra della qualità](docs/contributors/QUALITY-BAR.md) | Criteri di accettazione |
| 🏆 [High-Score Playbook](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Ciò che determina i punteggi più alti |---

## 🗂️ Repository Layout

| Percorso | Scopo |
|:-----|:--------|
| 📂 `competenze/` | Competenze autoriali canoniche e apporto nativo |
| ✨ `skills_omni/` | Derivati ​​potenziati curati da Omni |
| 📖 `documenti/` | Documentazione su utenti, contributori, architettura, operazioni e specifiche |
| 📦 `dist/` | Manifesti, bundle, catalogo e archivi generati |
| 📁 `dati/` | Definizioni di bundle e dati di supporto statici |
| 🧠 `packages/catalog-core/` | Runtime del catalogo condiviso |
| 🌐 `packages/server-api/` | API HTTP di sola lettura |
| 🔌 `packages/server-mcp/` | Server MCP e sidecar locale |
| 🤖 `packages/server-a2a/` | Runtime A2A e orchestrazione delle attività |
| 🖥️ `strumenti/bidone/` | Punti di ingresso CLI |
| 📚 `tools/lib/` | Installatore e aiutanti dell'interfaccia utente |
| ⚙️ `strumenti/script/` | Script di convalida, generazione, rilascio e test |

>**ℹ️**`dist/` ha una versione intenzionale perché gli artefatti generati fanno parte del contratto di installazione, API, MCP, A2A, smoke e rilascio.---

## 🤝 Contributing

Omni Skills accetta l'assunzione di competenze native upstream in "skills/".

| Regola | Dettagli |
|:-----|:--------|
| 📥 Assunzione nativa | Può essere approssimativo, scritto in qualsiasi lingua |
| ✨ Uscita curata | `skills_omni/` riservato ai derivati ​​​​Omni creati dall'automazione |
| 🚫 Modifiche manuali | Le modifiche manuali pubbliche a `skills_omni/` vengono rifiutate |
| 🔄Ritrattamento | Il potenziatore privato rielabora le modifiche native e aggiorna la linea di base curata |

> 📖**Inizia con:**[Guida per collaborare](CONTRIBUTING.md) · [Flusso di lavoro PR delle competenze](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Digitare | Licenza |
|:-----|:--------|
| 💻 Codice e strumenti | [Licenza MIT](LICENZA) |
| 📝 Documentazione e contenuti delle competenze | [CC BY 4.0](CONTENUTO DELLA LICENZA) |---

<div align="center">

**Realizzato con 🧠 dal team Omni Skills**

[⭐ Aggiungi a Speciale questo repository](https://github.com/diegosouzapw/omni-skills) · [🐛 Segnala un bug](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Discussioni](https://github.com/diegosouzapw/omni-skills/discussions)</div>
