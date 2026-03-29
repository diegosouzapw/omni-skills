# 📖 Omni Skills — Documentation Hub (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Il riferimento centrale per l'utilizzo, il funzionamento, l'estensione e la comprensione dell'attuale piattaforma Omni Skills.**

I file della community standard risiedono nella root del repository:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| Zona | Stato | Dettagli |
|:-----|:------|:--------|
| 🏗️**Runtime**| ✅ Attuale | CLI unificata, Ink visual shell, API, MCP e A2A vengono tutti spediti dallo stesso pacchetto |
| 📦**Catalogo**| 📌 32 abilità | 32 competenze "L3" pubblicate in 15 categorie di catalogo attive e 7 pacchetti completamente supportati |
| 🎯**Installa**| ✅ Attuale | Installazione TTY guidata, `--skill` e `--bundle` selettivi, supporto del percorso personalizzato e installazione basata sull'individuazione |
| 🌐**API**| ✅ Attuale | API del registro di sola lettura con autenticazione, runtime di amministrazione, limitazione della velocità, liste consentite CORS/IP, modalità di manutenzione e download |
| 🔌**MCP**| ✅ Attuale | `stdio` · `stream` · `sse`, modalità sidecar locale, 7 client con capacità di installazione, 16 client con capacità di configurazione, 33 destinazioni di configurazione e 19 profili di configurazione |
| 🤖**A2A**| ✅ Attuale | Runtime locale semplice con durabilità JSON/SQLite, ripresa del riavvio, streaming SSE, annullamento, modalità esecutore esterno e coordinamento lease opzionale se abilitato esplicitamente |
| 🛡️**Sicurezza**| ✅ Attuale | Scanner statico, ClamAV/VirusTotal opzionale, artefatti di rilascio firmati, checksum di archivio e verifica del momento del rilascio |
| 📋**Classificazione**| ✅ Attuale | Tassonomia canonica, maturità, diffusione della qualità semantica, diffusione delle migliori pratiche e punteggio di sicurezza |
| 📁**Archivio**| ✅ Attuale | Archivi `.zip` e `.tar.gz` per competenza con manifest di checksum SHA-256 |
| 🔐**Firma**| ✅ Attuale | Firme distaccate applicate sui tag di rilascio; i flussi di installazione locale utilizzano gli stessi metadati manifest e checksum |
| 🧬**Flusso di aspirazione**| ✅ Attuale | Le abilità native si trovano sotto "skills/"; L'automazione delle PR li esamina e propone derivati ​​​​potenziati da Omni in `skills_omni/` |## 🔭 Current Project State

Il tracciato fondamentale ora si trova nello stato di progetto attivo e la seconda ondata di espansione della categoria è già nel catalogo. Il progetto dovrebbe ora essere letto come una base di lavoro con futuri percorsi di espansione opzionali:

- public `v0.1.2` e private `v0.0.1` rappresentano l'attuale livello di rilascio stabile
- Il catalogo ora copre 32 competenze pubblicate in 15 categorie attive e 7 pacchetti completamente supportati
- L'assunzione di nativi e l'output curato di `skills_omni/` sono entrambi operativi, inclusa l'assunzione di nativi multilingue e l'output curato solo in inglese
- Le superfici del protocollo, l'automazione del rilascio e l'automazione del miglioramento privato sono in servizio, non in bootstrap

L’espansione futura rimane intenzionale:

- approfondire `design`, `tools`, `data-ai` e `machine-learning`
- evitare di riaprire categorie dormienti non native del codice fino a quando le tracce native del codice attuali non avranno una maggiore profondità
- mantenere intatti il livello di qualità e il percorso di revisione del potenziatore mentre lo si fa

Il piano è ora suddiviso in:

- la prima ondata di espansione completata in [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- la seconda ondata di espansione completata in [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- e il backlog lungimirante in [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Queste questioni di architettura non sono più “aperte” nella pratica e sono ora trattate come decisioni di progetto:

1.**La distribuzione rimane manifest-first e negli archivi firmati**
   Il manifest leggibile dalla macchina rimane il contratto consumato da CLI, API, MCP e A2A. Gli archivi firmati per competenza rappresentano la superficie di download e rilascio sovrapposta a tale contratto.
2.**I cataloghi privati o premium dovrebbero riutilizzare lo stesso schema manifest**
   L'autenticazione e la policy dovrebbero essere stratificate esternamente, non biforcando la forma del manifest o del catalogo.
3.**La configurazione MCP dovrebbe convergere su alcune famiglie canoniche di esportazione**
   Omni Skills ora standardizza JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` e TOML `[mcp_servers]`, mantenendo gli autori su misura solo laddove i documenti client ufficiali richiedono una struttura diversa.

Tali decisioni sono in linea con l'attuale documentazione ufficiale MCP e del cliente, tra cui:

- Registro MCP ufficiale e guida al supporto delle estensioni su "modelcontextprotocol.io".
- Documenti OpenAI Docs MCP e Codex CLI su `developers.openai.com` e `platform.openai.com`
- Estensione VS Code MCP e documentazione del prodotto su "code.visualstudio.com".
- documenti client per Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman e JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Dottore | Cosa imparerai |
|:----|:-----------------|
| 📘 [Per iniziare](users/GETTING-STARTED.md) | Installa, verifica e richiama la tua prima abilità |
| 🧭 [Guida per l'utente della CLI](users/CLI-USER-GUIDE.md) | Riferimento completo ai comandi e modelli di utilizzo della CLI nel mondo reale |
| 📗 [Guida all'uso](users/USAGE.md) | Comandi CLI, modalità di installazione, comandi di runtime e flussi di configurazione MCP |
| 📦 [Pacchetti](users/BUNDLES.md) | Pacchetti selezionati e loro disponibilità attuale |
| 📚 [Catalogo](CATALOG.md) | Catalogo generato automaticamente delle competenze pubblicate |
| 🔧 [Runbook di sistema](operazioni/RUNBOOK.md) | Crea, offri, proteggi e risolvi i problemi del runtime |### 🏗️ If You Want to **Understand** the Runtime

| Dottore | Cosa imparerai |
|:----|:-----------------|
| 🗺️ [Roadmap di Agent-Native](architecture/AGENT-NATIVE-ROADMAP.md) | Evoluzione dell'architettura, decisioni chiuse e aree di espansione rimanenti |
| 🧭 [Roadmap per CLI UX](architecture/CLI-UX-ROADMAP.md) | Piano storico e forma attuale della CLI guidata e visiva |
| 📐 [ADR-0001: Workspace Foundation](architettura/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo principale e decisione di runtime condiviso |
| 🔬 [Analisi della base di codice](architettura/CODEBASE-ANALYSIS.md) | Composizione corrente del runtime, conteggi e limiti del sistema |
| 🌐 [Superficie API Catalogo](specs/CATALOG-API.md) | Endpoint HTTP, filtri, governance e download |
| 🧩 [Installazione guidata CLI](specs/CLI-GUIDED-INSTALLER.md) | Contratto comportamentale per l'installatore guidato |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Shell visiva Ink, modello a stati e hub di servizi |
| 🔌 [Sidecar MCP locale](specs/LOCAL-MCP-SIDECAR.md) | Strumenti compatibili con il file system, modello di lista consentita e scrittura della configurazione |
| 🧭 [Matrice di supporto clienti](specs/CLIENT-SUPPORT-MATRIX.md) | Client CLI e IDE supportati, scrittori, destinazioni manuali e riferimenti al codice sorgente |
| 📊 [Classificazione delle abilità](specs/SKILL-CLASSIFICATION.md) | Tassonomia, euristica del punteggio e artefatti dei metadati |
| 🛡️ [Convalida della sicurezza](specs/SECURITY-VALIDATION.md) | Scanner, archivi, firme e verifica delle liberatorie |
| 📋 [Specifiche manifesto abilità](specs/SKILL-MANIFEST.md) | Formato manifest leggibile dalla macchina e contratto di compatibilità |### 🤝 If You Want to **Contribute**

| Dottore | Cosa imparerai |
|:----|:-----------------|
| 📝 [Guida per contribuire](../CONTRIBUTING.md) | Flusso di lavoro del repository e aspettative delle richieste pull |
| 🧾 [Flusso di lavoro PR delle competenze](contributors/SKILL-PR-WORKFLOW.md) | Assunzione nativa, elaborazione automatica del potenziamento, pubblicazione `skills_omni/` e aspettative dei revisori |
| 📄 [Modello di abilità](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` con frontmatter e struttura attuali |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Struttura e aspettative di qualità per una competenza |
| ✅ [Barra della qualità](contributors/QUALITY-BAR.md) | Criteri di accettazione del repository |
| 🏆 [High-Score Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | Ciò che determina livelli elevati di maturità, qualità, best practice e sicurezza |
| 📋 [Tasks Backlog](tasks/README.md) | Arretrato di attuazione dettagliato per i rimanenti lavori pubblici e privati ​​|---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Il binario pubblicato "omni-skills" è il punto di accesso pubblico unificato.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

Per la superficie di comando completa per l'utente finale, utilizzare la [Guida per l'utente CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

La pipeline di compilazione emette file leggibili dalla macchina che guidano ogni superficie di runtime:

| Artefatto | Scopo |
|:---------|:--------|
| `metadati.json` | Convalida a livello di repository e riepilogo dei punteggi |
| `skills_index.json` | Indice di abilità normalizzato repo-locale |
| `dist/catalog.json` | Catalogo pubblicato per la ricerca e l'elenco |
| `dist/bundles.json` | Definizioni di bundle con disponibilità |
| `dist/manifests/<abilità>.json` | Manifesto leggibile dalla macchina per competenza |
| `dist/archives/<competenza>.zip` | Archivio competenze (zip) |
| `dist/archives/<abilità>.tar.gz` | Archivio abilità (tarball) |
| `dist/archives/<competenza>.checksums.txt` | Manifesto del checksum SHA-256 |

"dist/" rimane impegnato di proposito. Questi artefatti generati fanno parte del contratto di installazione, API, MCP, A2A, smoke e rilascio.### 🌐 API

```bash
npx omni-skills api --port 3333
```

API del registro di sola lettura per competenze, pacchetti, confronto, pianificazione dell'installazione e download di artefatti.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Il sidecar locale ora supporta la scrittura di configurazione MCP di prima classe per:

- Codice Claude
- Cursore
- VS Code e contenitori di sviluppo
-Gemelli CLI
- Antigravità
- Kiro
- Codice CLI
- Continua
- Windsurf
- Codice aperto
-Cline
- CLI di GitHub Copilot
- Codice chilo
- Zed
- Oca### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Ciclo di vita delle attività, streaming, persistenza, ripristino al riavvio e orchestrazione locale semplice. L'esecuzione dedicata condivisa è disponibile se abilitata esplicitamente; Redis rimane un'opzione ospitata avanzata, non il percorso locale predefinito.---

## 🗂️ Repository Map

| Percorso | Scopo |
|:-----|:--------|
| 📂 `competenze/` | Competenze d'autore canoniche |
| 📖 `documenti/utenti/` | Documentazione per l'utente finale |
| 🤝 `documenti/contributori/` | Modelli e linee guida per i contributori |
| 🏗️ `documenti/architettura/` | Roadmap, ADR e analisi tecnica |
| 🔧 `documenti/operazioni/` | Runbook operativi |
| 📋 `documenti/specifiche/` | Contratti runtime, protocolli e artefatti |
| 📚 `docs/CATALOG.md` | Catalogo delle competenze generato |
| 📦 `dist/` | Artefatti leggibili dalla macchina generati |
| 🧠 `packages/catalog-core/` | Runtime del catalogo condiviso |
| 🌐 `packages/server-api/` | API HTTP di sola lettura |
| 🔌 `packages/server-mcp/` | Server MCP e sidecar locale |
| 🤖 `packages/server-a2a/` | Server A2A e runtime delle attività |
| 🖥️ `strumenti/bidone/` | Punti di ingresso CLI |
| 📚 `tools/lib/` | Installatore e aiutanti dell'interfaccia utente |
| ⚙️ `strumenti/script/` | Convalida, generazione, verifica e test |---

## 🧪 Release Validation

```bash
npm run smoke
```

La corsa del fumo convalida:

- ✅ validazione delle competenze e generazione di metadati
- ✅ strumenti di ricategorizzazione della tassonomia
- ✅ generazione degli artefatti del catalogo
- ✅generato ribasso del catalogo
- ✅ generazione e verifica dell'archivio
- ✅ suite di test automatizzata
- ✅ `npm pack --dry-run`
- ✅ Avvio e integrità dell'API
- ✅ Avvio MCP in `stdio`, `stream` e `sse`
- ✅ Ciclo di vita di avvio A2A, polling, streaming SSE, cancellazione e push-config