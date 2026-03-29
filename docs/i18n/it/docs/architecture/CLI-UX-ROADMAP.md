# 🧭 CLI UX Roadmap (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**La tabella di marcia del prodotto per l'evoluzione di Omni Skills da un programma di installazione flag-first a un'esperienza terminale guidata per utenti esperti e non esperti.**
> Ambito: pacchetto npm, esperienza di installazione della CLI, interfaccia utente del terminale, flussi di lancio del servizio e onboarding visivo.---

## 1. Problem Statement

Le attuali basi del runtime sono solide, ma l'esperienza di ingresso è ancora ottimizzata per gli utenti che già comprendono:

- quale cliente vogliono targetizzare
- quale selettore di installazione si desidera utilizzare
- come tradurre gli obiettivi in "--skill", "--bundle" o "find".
- quando necessitano dell'installazione solo CLI rispetto ai servizi MCP, API o A2A

Oggi:

- Il valore predefinito di "npx omni-skills" è Antigravità
- questo è tecnicamente valido e compatibile con le versioni precedenti
- ma non è l'ideale per gli utenti alle prime armi o per gli operatori meno tecnici

La CLI dispone già di una modalità interattiva di base, ma è ancora più vicina a un'utilità per sviluppatori che a una superficie di prodotto guidata.

Questa tabella di marcia definisce il percorso verso una UX pubblica più forte senza interrompere l'attuale interfaccia basata su flag.---

## 1.1 Delivery Status

La tabella di marcia è ora ampiamente implementata nello stato attuale del repository.

Completato:

- Fase 1: Selezione guidata del punto di ingresso
- Fase 2: Installazione guidata guidata
- Fase 3: Shell terminale visivo
- Fase 4: Hub di servizi visivi
- Fase 5: Profili salvati e ripetibilità
- Fase 6: Hardening, Test e Documentazione---

## 2. Goals

- Conserva gli attuali flussi di lavoro CLI esperti
- Rendere il punto di ingresso senza argomenti sicuro e comprensibile per gli utenti alle prime armi
- Sostituisci le impostazioni predefinite silenziose nei contesti interattivi con la selezione guidata
- Supporta client AI noti e percorsi di installazione personalizzati arbitrari
- Trasforma l'installazione, il rilevamento e l'avvio del servizio in un percorso utente coerente
- Fornire un'interfaccia utente del terminale visivo che sembri un prodotto, non solo uno script
- Mantieni riutilizzabili il motore di installazione, il catalogo e il runtime del servizio nell'interfaccia utente---

## 3. Non-Goals

- Sostituzione dell'attuale CLI basata su flag
- Rimozione dell'Antigravità come destinazione predefinita supportata
- Spedizione di un'interfaccia utente Web come modalità di consegna principale
- Refactoring dei protocolli API, MCP o A2A stessi come parte di questo lavoro UX
- Sostituzione dell'authoring di `SKILL.md` con un pannello di amministrazione supportato da database---

## 4. Design Principles

### 4.1 Backward Compatibility First

Questi comandi devono continuare a funzionare esattamente come fanno oggi:

- `npx omni-skills --cursor --skill omni-figma`
- "npx omni-skills --bundle devops".
- `npx omni-skills trova figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Sessione terminale interattiva senza argomenti: esperienza guidata aperta
- Invocazione non interattiva senza argomenti: preserva il comportamento predefinito dell'installazione corrente
- I comandi e i flag espliciti prevalgono sempre sull'inferenza dell'interfaccia utente### 4.3 Reuse One Engine Across Modes

Quanto segue dovrebbe condividere la stessa logica interna:

- CLI flag-first
- CLI in modalità testo guidata
- Interfaccia utente del terminale visivo

Ciò significa che il livello UX non deve possedere la logica aziendale. Dovrebbe orchestrare azioni riutilizzabili.### 4.4 Preview Before Write

Tutti i flussi guidati che causano scritture dovrebbero visualizzare:

- Obiettivo risolto
- percorso risolto
- abilità o pacchetti selezionati
- comando CLI equivalente
- richiesta di conferma### 4.5 Visual Does Not Mean Implicit

Anche nell'interfaccia utente più ricca, il sistema dovrebbe comunque rendere espliciti lo stato e le azioni:

- dove sta andando l'installazione
- cosa verrà scritto
- quale mezzo di trasporto o porto utilizzerà un servizio
- se un flusso è di sola lettura o con capacità di scrittura locale---

## 5. User Personas

### 5.1 Expert CLI User

Bisogni:

- comandi veloci
- nessuna richiesta forzata
- bandiere stabili
- scriptabilità### 5.2 Guided Product User

Bisogni:

- scelte chiare
- nessun presupposto che l'Antigravità sia desiderata
- supporto per installazioni con percorso personalizzato
- Anteprima di installazione comprensibile
- distinzione visibile tra azioni di installazione e di runtime del server### 5.3 Operator / Platform User

Bisogni:

- capacità di avviare visivamente MCP, API e A2A
- valori predefiniti sani
- ottimizzazione opzionale di porte, trasporto, persistenza, modalità esecutore, autenticazione e modalità locale---

## 6. Target UX Model

Il prodotto dovrebbe esporre tre strati:### 6.1 Expert Mode

Comandi diretti e flag.

Esempi:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Attivato quando:

- l'utente esegue `npx omni-skills` in un TTY senza argomenti
- l'utente esegue `npx omni-skills install` senza selettori concreti
- l'utente opta esplicitamente per la modalità guidata

Il flusso di installazione guidata dovrebbe procedere attraverso:

1. client di destinazione o percorso personalizzato
2. tipo di installazione
3. selezione di abilità o bundle
4. anteprima
5. conferma
6. esecuzione
7. passi successivi### 6.3 Visual Operations Hub

Innescato da:

- "npx interfaccia utente con competenze omnicomprensive".

Questa dovrebbe diventare la “schermata home” per utenti e operatori non esperti.

Azioni principali:

- installare competenze
- scoprire competenze
- avviare MCP
- avviare l'API
- avviare A2A
- corri dottore
- eseguire controlli di fumo---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Risultato:

- "npx omni-skills" in TTY non assume più silenziosamente l'antigravità
- agli utenti viene richiesto di scegliere un client o un percorso personalizzato

Requisiti:

- preservare il comportamento di installazione predefinito non TTY
- aggiungi il selettore di destinazione
- supporta l'acquisizione del percorso personalizzato### Phase 2: Guided Install Wizard

Risultato:

- l'installazione diventa un flusso completamente guidato

Requisiti:

- selezione della modalità di installazione:
  - libreria completa
  - una abilità
  - un pacchetto
  - cerca quindi installa
- installa l'anteprima
- rendering dei comandi equivalente
- conferma ed esecuzione### Phase 3: Visual Terminal Shell

Risultato:

- l'attuale interfaccia utente testuale di base diventa un'applicazione terminale con marchio

Requisiti:

- layout più ricco
- branding e logo del progetto
- stepper e carte migliori
- Navigazione tramite tastiera
- Reagire all'implementazione del terminale tramite Ink### Phase 4: Visual Service Hub

Risultato:

- MCP, API e A2A possono essere avviati dall'interfaccia utente visiva

Requisiti:

- flusso MCP guidato
- flusso API guidato
- flusso A2A guidato
- modalità visibile e anteprime di configurazione### Phase 5: Saved Profiles and Repeatability

Risultato:

- È possibile riutilizzare le preimpostazioni di installazione o di servizio comuni

Requisiti:

- ricordare gli obiettivi recenti
- preimpostazioni di servizio salvate
- comandi recenti
- bundle o abilità preferiti### Phase 6: Hardening, Tests, and Documentation

Risultato:

- La UX diventa un'interfaccia pubblica mantenuta, non una comodità ad hoc

Requisiti:

- copertura antifumo
- test di regressione
- Aggiornamenti del documento
- guida dell'operatore
- revisione della compatibilità del pacchetto---

## 8. Proposed Command Model

### Stable Commands

- "abilità onnicomprensive".
- "Installazione di competenze omnicomprensive".
- "Trova abilità omnicomprensive".
- "interfaccia utente di abilità omnicomprensive".
- "mcp con competenze omnicomprensive".
- "API per competenze omnicomprensive".
- "abilità omnicomprensive a2a".
- "medico onnisciente".
- "fumo di abilità onnicomprensive".### Recommended Behavior

| Invocazione | Comportamento |
|:-----------|:---------|
| "competenze omnicomprensive" in TTY, senza argomenti | Voce di installazione guidata |
| `omni-skills` in non TTY, senza argomenti | Installazione predefinita attuale di Antigravity |
| `installazione omni-skills` in TTY, nessun selettore | Procedura guidata di installazione guidata |
| `omni-skills install --guided` | Flusso di installazione guidata forzata |
| "interfaccia utente di abilità omnicomprensive" | Aprire l'hub delle operazioni visive |
| flag espliciti | Eseguire direttamente senza deviare nel flusso guidato |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Opzioni:

- Codice Claude
- Cursore
-Gemelli CLI
- Codice CLI
- Kiro
- Antigravità
- Codice aperto
- Percorso personalizzato

Uscita:

- destinazione nota selezionata o percorso del file system personalizzato### Step 2: Choose Install Type

Opzioni:

- libreria completa
- una competenza pubblicata
- un pacchetto
- cerca quindi installa

Uscita:

- installare l'ambito### Step 3: Resolve Selection

A seconda del tipo di installazione:

- libreria completa: nessun selettore aggiuntivo
- abilità: elenca o scegli un'abilità
- bundle: elenca o scegli un bundle
- ricerca: richiede query, mostra competenze e pacchetti corrispondenti### Step 4: Preview

Visualizzazione:

- obiettivo selezionato
- percorso risolto
- abilità o pacchetto selezionato
- comando CLI equivalente
- se il flusso è selettivo o completo### Step 5: Confirm

L'utente conferma:

- sì → esegui
- no → interrompi o torna indietro### Step 6: Result

Visualizzazione:

- successo/fallimento
- percorso di destinazione
- suggerimento per il passaggio successivo---

## 10. Information Architecture for the Visual Operations Hub

L'hub operativo dovrebbe esporre:### 10.1 Install

- flusso di installazione guidato
- ricerca di abilità o bundle
- percorso personalizzato### 10.2 Discover

- ricerca nel catalogo
- filtri
- Anteprima dei metadati
- installa l'handoff### 10.3 MCP

Opzioni:

- trasporti: stdio, torrente, sse
- modalità locale attivata/disattivata
- ospite
- porto### 10.4 API

Opzioni:

- ospite
- porto
- autenticazione facoltativa
- limite tariffario facoltativo### 10.5 A2A

Opzioni:

- ospite
- porto
- tipo di archivio: memoria, json, sqlite
- esecutore: inline, processo
- opzioni di lease quando la coda sqlite è abilitata### 10.6 Diagnostics

- dottore
- fumare---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Gli attuali mix `tools/bin/cli.js`:

- analisi dei comandi
- presentazione
- suggerimenti interattivi
- orchestrazione dell'azione
- avvio del servizio

La nuova struttura dovrebbe spostare la logica riutilizzabile in:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` dovrebbe rimanere il backend con capacità di scrittura.

L'interfaccia utente guidata dovrebbe richiamare il backend del programma di installazione esistente anziché duplicare la logica di installazione.### 11.3 Keep Find/Search Reusable

La procedura guidata di installazione guidata dovrebbe riutilizzare la stessa logica di ricerca catalog-core e CLI che già alimenta:

- "trova".
- installa le anteprime
- risoluzione del pacchetto### 11.4 Prepare for Ink Without Forcing It Early

La prima consegna può rimanere nelle istruzioni in modalità testo.

Ma l'architettura dovrebbe mantenere una linea chiara in modo che il flusso del testo possa essere successivamente renderizzato tramite Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Mitigazione:

- apre automaticamente l'interfaccia utente guidata solo in TTY
- preservare l'impostazione predefinita corrente in non TTY
- preservare i flussi di flag espliciti### 12.2 Letting UI Own Business Logic

Mitigazione:

- spostare l'orchestrazione in moduli di azione riutilizzabili
- mantenere la logica di avvio del programma di installazione e del servizio al di sotto del livello dell'interfaccia utente### 12.3 Ink Migration Too Early

Mitigazione:

- spedire innanzitutto il flusso guidato nello stack terminale del Nodo corrente
- quindi migrare a Ink una volta che la semantica del flusso è stabile### 12.4 Incomplete Service UX

Mitigazione:

- spedire prima la procedura guidata di installazione
- quindi lancio del servizio guidato a livello---

## 13. Acceptance Criteria by Phase

### Phase 1

- "npx omni-skills" in TTY non si installa più immediatamente
- L'utente può scegliere il client di destinazione o il percorso personalizzato
- L'invocazione no-arg non TTY funziona ancora come prima### Phase 2

- L'installazione guidata supporta libreria completa, abilità, bundle e ricerca e installazione
- L'anteprima viene sempre mostrata prima della scrittura
- viene visualizzato il comando equivalente### Phase 3

- Esiste l'interfaccia utente del terminale con marchio
- L'interfaccia utente è strutturata in modo più visivo rispetto ai semplici menu di lettura
- La navigazione è intuitiva tramite tastiera### Phase 4

- gli utenti possono avviare MCP, API e A2A dall'hub visivo
- le principali opzioni di runtime sono configurabili in forma guidata### Phase 5

- le preferenze recenti o salvate sono riutilizzabili
- i flussi ripetuti richiedono meno istruzioni### Phase 6

- La copertura del fumo riflette i nuovi punti di ingresso UX
- I documenti descrivono la modalità guidata e il comportamento della procedura guidata del servizio---

## 14. Execution Order

Questa tabella di marcia deve essere implementata in questo ordine:

1. Selezione guidata del punto di ingresso
2. Procedura guidata di installazione guidata
3. Guscio del terminale visivo
4. Hub di servizi visivi
5. Profili salvati e ripetibilità
6. Tempra, test e lucidatura dei documenti

Il lavoro di implementazione dovrebbe leggere il file delle attività pertinenti prima di iniziare ciascuna attività in modo che il lavoro della CLI rimanga allineato al piano e non vada alla deriva.