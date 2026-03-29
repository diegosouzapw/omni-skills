# 🔬 Codebase Deep Analysis (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Analisi tecnica completa dell'attuale architettura Omni Skills, delle superfici di runtime e della pipeline di creazione.**
> Ultima analisi: 28-03-2026---

## 📊 Project Overview

| Attributo | Valore |
|:----------|:------|
|**Nome**| `competenze omnicomprensive` |
|**Versione del pacchetto**| `0.1.3` |
|**Versioni di abilità**| Per abilità e indipendente dalla versione del pacchetto. Molte competenze pubblicate sono ancora "0.0.1" mentre il pacchetto è "0.1.2". |
|**Licenza**| MIT (codice) + CC BY 4.0 (contenuto) |
|**NPM**| `npx competenze omnicomprensive` |
|**Competenze pubblicate**| 32|
|**Pacchetti definiti**| 7, il tutto pienamente supportato dalle competenze pubblicate |
|**Categorie attive nel catalogo**| 15 bucket attivi su 18 categorie di tassonomia canoniche |
|**LOC di runtime/build primario campionato di seguito**| 13.600+ |
|**Dipendenze produttive**| 7 (“@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Istantanea attuale della classificazione a livello di repository da "metadata.json":

- punteggio di qualità medio: "96,3".
- punteggio medio delle migliori pratiche: "98,7".
- Punteggio medio di sicurezza: "95,0".
- tutte le 32 competenze pubblicate vengono convalidate come "L3".

Base di riferimento della versione attuale:

- versione del repository pubblico: `v0.1.2`
- versione del potenziatore privato: `v0.0.1`
- L'automazione del rilascio pubblico e l'automazione del rilascio privato sono entrambe attive e verdi---

## 🏗️ Architecture Overview

Il repository segue un modello**workspace monorepo**con un core del catalogo condiviso e più superfici di runtime.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

Il design è intenzionalmente**basato sugli artefatti**:

1. Le competenze sono create come `SKILL.md` più pacchetti di supporto locale
2. la build li convalida, li classifica, li archivia e li normalizza
3. gli artefatti generati diventano il contratto per CLI, API, MCP e A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**Oltre 4.500 LOC combinati**: la principale interfaccia pubblica sia per l'utilizzo esperto che guidato.

| Comando | Funzione |
|:--------|:---------|
| 🔎 `trova [query]` | Ricerca nel catalogo full-text con filtri in base al punteggio |
| 📦 `installa` | Installazione guidata o basata su flag in client conosciuti o percorsi personalizzati |
| 🧾 `config-mcp` | Visualizza in anteprima o scrivi la configurazione MCP compatibile con il client |
| 🔌 `mcp <trasporto>` | Avvia il server MCP in `stdio`, `stream` o `sse` |
| 🌐 `api` | Avvia l'API del catalogo |
| 🤖 `a2a` | Avvia il runtime A2A |
| 🧪 `fumo` | Rilascia la convalida preflight |
| 🩺 `dottore` | Diagnostica locale |
| 🖥️ `ui` | Shell visiva Ink con installazione, rilevamento, configurazione e hub di servizio |
| 🏷️ `ricategorizzare` | Ispezione e riscrittura della deriva tassonomica |

La CLI non è più solo un programma di installazione. È lo strumento operativo pubblico per l'intera piattaforma.## 🧭 Future Expansion Direction

Il tempo di esecuzione pubblico non è più bloccato sul lavoro fondamentale e l’ondata di seconda categoria è già arrivata. Il prossimo lavoro utile sul catalogo è la profondità, non più la caccia al conteggio delle categorie.

Tracce native del codice appena attivate ora nel catalogo:

- "design" tramite "design-systems-ops", "accessibility-audit" e "design-token-governance"
- "tools" tramite "mcp-server-authoring".
- "data-ai" tramite "data-contracts".
- "apprendimento automatico" tramite "model-serving".

Direzione successiva consigliata:

1. approfondire `design`, `strumenti`, `data-ai` e `machine-learning`
2. mantenere "business" e "content-media" differiti a meno che non appaia una proposta chiaramente nativa del codice
3. preservare l'attuale livello di qualità invece di riaprire la pressione sull'attivazione delle categorie

L'onda di espansione è ora registrata in [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**: installa le competenze in 7 assistenti abilitati all'installazione.

| Bandiera | Obiettivo | Percorso predefinito |
|:-----|:-------|:------|
| `--claude` | Codice Claude | `~/.claude/skills` |
| `--cursore` | Cursore | `~/.cursore/competenze` |
| `--gemelli` | Gemelli CLI | `~/.gemini/skills` |
| `--codice` | Codice CLI | `~/.codex/competenze` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antigravità` | Antigravità | `~/.gemini/antigravity/skills` |
| `--opencode` | OpenCode | `<area di lavoro>/.opencode/skills` |

Supporta:

- installazioni della libreria completa
- installazioni selettive per `--skill`
- installazioni curate da `--bundle`
- TTY guidato e flussi di interfaccia utente visiva
- Percorsi target personalizzati### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**: livello di runtime condiviso per CLI, API, MCP e A2A.

| Esporta | Descrizione |
|:-------|:------------|
| 🔎 `searchSkills()` | Ricerca con corrispondenza testo ponderata e supporto filtro |
| 📋 `listSkills()` | Filtraggio multiasse per qualità, migliori pratiche, livello, sicurezza, rischio, strumento e categoria |
| 📌 `getSkill()` | Risoluzione manifest più URL pubblici arricchiti |
| ⚖️ `compareSkills()` | Confronto affiancato |
| 💡 `raccomandaCompetenze()` | Raccomandazione basata sugli obiettivi |
| 📦 `buildInstallPlan()` | Installa la generazione del piano con avvisi e indicazioni sensibili al cliente |
| 🗂️ `listBundles()` | Elenco bundle curato con disponibilità |
| 📁 `listSkillArchives()` | Risoluzione archivio e firma |

Questa è la vera unica fonte di verità di runtime dopo generazione.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**: implementazione completa di MCP utilizzando l'SDK ufficiale.

**Trasporti**

- "stdio".
- HTTP streaming
-SSE

**Strumenti di sola lettura sempre attivi**

- "capacità_di_ricerca".
- "ottieni_abilità".
- "confronta_competenze".
- `raccomanda_competenze`
- "anteprima_installazione".

**Strumenti in modalità locale**

- "rileva_clienti".
- "elenco_competenze_installate".
- "install_skills".
- "rimuovi_competenze".
- `configure_client_mcp`

La superficie dell'MCP è volutamente suddivisa tra:

- utilizzo del catalogo remoto/di sola lettura
- Utilizzo del sidecar locale/con capacità di scrittura### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1.943 LOC**: livello MCP compatibile con file system per rilevamento client, gestione delle competenze e scrittura della configurazione MCP.

Supporto pratico attuale:

-**7 client con possibilità di installazione**
-**16 client con funzionalità di configurazione**
-**33 target di configurazione**
-**19 profili di configurazione**

Client con capacità di installazione:

- Codice Claude
- Cursore
-Gemelli CLI
- Codice CLI
- Kiro
- Antigravità
- Codice aperto

I client e le destinazioni compatibili con la configurazione includono:

- Impostazioni Claude, Claude Desktop e configurazione del progetto Claude
- Configurazione utente cursore e area di lavoro
- Configurazione dell'area di lavoro, dell'utente, degli addetti ai lavori e del contenitore di sviluppo VS Code
- Impostazioni utente e area di lavoro Gemini
- Configurazione utente antigravità
- Utente Kiro, spazio di lavoro e percorsi legacy
- Configurazione Codex CLI TOML
- Configurazione utente e area di lavoro OpenCode
- Impostazioni della linea
- Utente CLI di GitHub Copilot e configurazione del repository
- Configurazione di utenti, progetti e aree di lavoro Kilo
- Continua l'area di lavoro YAML
- Configurazione utente Windsurf
- Configurazione dell'area di lavoro Zed
- Configurazione utente Goose

Il sidecar è intenzionalmente onesto riguardo ai confini:

- scrive solo all'interno di una lista consentita
- visualizza l'anteprima per impostazione predefinita
- mantiene scrittori di prima classe solo dove i documenti ufficiali espongono un formato stabile
- non pretende che ogni prodotto compatibile con MCP sia anche un obiettivo di installazione di competenze### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC combinato**: API del registro di sola lettura più middleware di governance.

Endpoint importanti:

- "/salute".
- "/openapi.json".
- "/admin/runtime".
- `/v1/competenze`
- `/v1/competenze/:id`
- "/v1/ricerca".
- `/v1/confronta`
- `/v1/bundle`
- `/v1/installa/piano`
- `/v1/competenze/:id/download/*`

Base di governance già implementata:

- autenticazione del token al portatore
- Autenticazione chiave API
- autenticazione token amministratore
- limitazione della velocità in-process
- richiedere ID
- registrazione degli audit
- Liste consentite CORS
- Liste consentite IP
- Gestione del proxy fiduciario
- modalità di manutenzione### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1.857 LOC combinati tra i file del server principale, del runtime e del coordinatore**: ciclo di vita delle attività JSON-RPC 2.0 per flussi di lavoro da agente ad agente.

Metodi supportati:

- "messaggio/invia".
- "messaggio/flusso".
- "attività/ottieni".
- "attività/annulla".
- "attività/nuova iscrizione".
- "task/pushNotificationConfig/*".

Operazioni attuali:

- "scoprire-capacità".
- "stack consigliato".
- "prepara-piano-di-installazione".

Modello di durabilità e coordinamento:

- persistenza locale della memoria, JSON o SQLite
- riavviare il curriculum
- esecutore di processi esterni opzionale
- attivazione del coordinamento delle code affittate per i lavoratori SQLite condivisi
- Coordinamento opzionale supportato da Redis come percorso ospitato avanzato

La scelta architetturale chiave in questo caso è la**operazione locale semplice-prima**. Redis esiste come opzione avanzata, ma il percorso del prodotto predefinito rimane locale e non dipende da dipendenze.---

## ⚙️ Build Pipeline

| Scrittura | Lingua | Scopo |
|:-------|:---------|:--------|
| 📊 `skill_metadata.py` | Pitone | Convalida, tassonomia, punteggio e scansione di sicurezza statica |
| ✅ `validate_skills.py` | Pitone | Generazione di metadati per competenza e per il riepilogo principale |
| 📑 `generate_index.py` | Pitone | Indice delle competenze, manifesti, archivi, firme e checksum |
| 🏗️ `build_catalog.js` | Node.js | Finali `dist/catalog.json` e `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Pitone | Audit e riscrittura della categoria canonica |
| 🔍 `verify_archives.py` | Pitone | Archivio e verifica della firma |

Due dettagli contano a livello operativo:

1. "dist/" fa parte del contratto di runtime ed è stato utilizzato intenzionalmente
2. la build è sufficientemente deterministica da supportare la verifica della CI e la firma del rilascio---

## 📦 Published Catalog

L'attuale catalogo pubblico comprende 32 competenze:

-**Scoperta e pianificazione**: `find-skills`, `brainstorming`, `architecture`, `debugging`
-**Sistemi di progettazione e accessibilità**: `design-systems-ops`, `accessibility-audit`
-**Consegna del prodotto e dello stack completo**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**Sicurezza**: `revisore della sicurezza`, `scanner delle vulnerabilità`, `risposta agli incidenti`, `modellazione delle minacce`
-**Flussi di lavoro del manutentore OSS**: `documentation`, `changelog`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**Ingegneria AI**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Tutti e sette i pacchetti sono completamente supportati:

- "essenziale" → "4/4".
- "stack completo" → "5/5".
- "disegno" → "4/4".
- "sicurezza" → "4/4".
- `devops` → `5/5`
- "ai-engineer" → "5/5".
- `oss-maintainer` → `4/4`

Distribuzione del punteggio corrente dal catalogo generato:

- punteggi di qualità: `94, 95, 96, 97, 100`
- punteggi relativi alle migliori pratiche: "98, 99, 100".
- Punteggio di sicurezza: tutte le competenze pubblicate attualmente "95".

Rappresentativo di fascia alta:

- `omni-figma` → `qualità 100`, `best_practices 100`
- `controllo dell'accessibilità` → `qualità 99`, `migliori_pratiche 100`
- `auth-flows` → `quality 97`, `best_practices 99`
- `design-systems-ops` → `qualità 97`, `best_practices 99`
- `release-engineering` → `qualità 97`, `best_practices 99`
- `modellazione delle minacce` → `qualità 97`, `best_practices 99`
- `ingegneria del contesto` → `qualità 97`, `best_practices 99`

Estremità inferiore rappresentativa all'interno dell'attuale fascia superiore:

- `architettura` → `qualità 94`, `best_practices 98`
- `log delle modifiche` → `qualità 94`, `best_practices 98`
- `create-pr` → `qualità 95`, `best_practices 98`

Questo è intenzionale. Il marcatore ora distingue “eccellente” da “eccezionale” invece di appiattire l’intero catalogo in alto.---

## 🌟 Strengths

1.**Progettazione basata innanzitutto sugli artefatti**
   Ogni superficie di runtime utilizza lo stesso catalogo e gli stessi manifest generati.
2.**Ampia copertura del protocollo**
   CLI, API, MCP e A2A coesistono senza frammentare il modello dati.
3.**Forte ergonomia del prodotto locale**
   L'installazione guidata, la shell visiva, `config-mcp` e le impostazioni predefinite di prova rendono il progetto utilizzabile anche da utenti esperti.
4.**Atteggiamento di sicurezza onesto**
   Le scritture locali consentite, la scansione statica, la firma, i checksum e la verifica del rilascio sono tutte esplicite.
5.**Portata MCP sana**
   Il progetto ora supporta un'ampia gamma di attuali client compatibili con MCP senza pretendere che gli obiettivi non documentati siano stabili.---

## 🔮 Opportunities

1.**Copertura del pacchetto più approfondita**
   Il passo successivo è la specializzazione all’interno dei pacchetti esistenti, non solo un’ampia copertura.
2.**Semantica del marcatore più ricca**
   C'è ancora spazio per valutare la profondità del pacchetto di riferimento e la qualità del flusso di lavoro in modo più semantico.
3.**Più autori clienti solo dove giustificato**
   L’espansione dovrebbe rimanere disciplinata e legata a documenti ufficiali stabili.
4.**Scomposizione del validatore**
   "skill_metadata.py" è ancora un modulo di grandi dimensioni e trarrebbe vantaggio dalla scomposizione interna nel tempo.
5.**Escalation della governance ospitata**
   L'attuale linea di base in corso è sufficiente per l'hosting autonomo, ma la distribuzione aziendale alla fine richiederebbe gateway esterno e integrazione delle identità.