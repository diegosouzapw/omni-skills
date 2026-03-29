# 🖥️ CLI Visual Shell Specification (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Contratto comportamentale per l'interfaccia utente del terminale basato su Ink esposto da `omni-skills ui`.**---

## 1. Scope

La shell visiva è una superficie guidata del prodotto sopra la CLI esistente e il motore di installazione.

Non sostituisce:

- Utilizzo della CLI basato su flag esperto
- `tools/bin/install.js`
- il flusso di installazione del testo guidato
- Comportamento runtime API, MCP o A2A

Definisce:

- il comportamento di "omni-skills ui".
- il contratto di fallback per `omni-skills ui --text`
- stato locale e persistenza preimpostata
- anteprime guidate di lancio del servizio
- ripetibilità per le installazioni recenti e le esecuzioni dei servizi---

## 2. Entry Rules

### 2.1 Visual Mode

"omni-skills ui" avvia la shell visiva basata su Ink.

La shell visiva è la principale esperienza terminale per i non esperti per:

- installare i flussi
- Individuazione e installazione prima del catalogo
- Avvio dell'MCP
- Avvio dell'API
- Avvio di A2A
- trasferimento medico e fumo### 2.2 Text Fallback

"omni-skills ui --text" avvia l'interfaccia di fallback basata su readline.

Ciò rimane utile quando:

- un terminale non può eseguire correttamente il rendering della shell più ricca
- Il comportamento in modalità raw è limitato
- È preferibile un fallback di testo minimo### 2.3 Handoff Rule

La shell visiva non reimplementa i runtime del servizio o le scritture di installazione direttamente.

Dopo l'anteprima e la conferma, esce in modo pulito e passa l'esecuzione al punto di ingresso della CLI esistente con gli argomenti e le variabili di ambiente equivalenti.---

## 3. Home Screen Contract

La schermata iniziale deve esporre:

- installare competenze
- trova e installa
- ripetere le installazioni recenti quando presenti
- eseguire le preimpostazioni di installazione salvate quando presenti
- avviare un servizio
- ripetere i servizi recenti quando presenti
- eseguire le preimpostazioni di servizio salvate quando presenti
- dottore
- fumare
- uscita

Dovrebbe apparire anche la schermata iniziale:

- disponibilità attuale del pacchetto pubblicato
- lo stato locale conta per recenti, preimpostazioni e preferiti---

## 4. Install Flow Contract

Il flusso di installazione della shell visiva deve supportare:

- selezione del target di clientela conosciuto
- selezione del percorso personalizzato
- installazione completa della libreria
- installazione con una sola abilità
- Installazione in un unico pacchetto
- cerca-quindi-installa
- anteprima prima di scrivere
- salvataggio preimpostato
- abilità preferita o commutazione del pacchetto

L'anteprima deve mostrare:

- etichetta di destinazione risolta
- percorso risolto
- installare l'ambito
- abilità o pacchetto selezionato quando applicabile
- comando CLI equivalente---

## 5. Service Flow Contract

La shell visiva deve guidare l'avvio per:### 5.1 MCP

- trasporto: `stdio`, `stream`, `sse`
- modalità: "sola lettura" o "locale".
- configurazione host/porta per i trasporti di rete
- anteprima del comando esplicito### 5.2 API

- ospite
- porto
- profilo base o rinforzato
- autenticazione al portatore o chiave API rafforzata
- parametri di limite di velocità rafforzati
- abilitazione del registro di controllo
- anteprima del comando esplicito### 5.3 A2A

- ospite
- porto
- tipo di negozio: `memory`, `json`, `sqlite`
- percorso del negozio per modalità durevoli
- esecutore: `inline`, `process`
- Modalità SQLite abilitata alla coda
- intervallo di poll e durata del lease per la modalità di lease condiviso
- anteprima del comando esplicito---

## 6. Local State Contract

La shell visiva mantiene lo stato solo locale in:```text
~/.omni-skills/state/ui-state.json
```

Lo Stato attualmente comprende:

- installazioni recenti
- recenti lanci di servizi
- preimpostazioni di installazione denominate
- preimpostazioni di servizio con nome
- abilità preferite
- bundle preferiti

La shell deve supportare:

- riproduzione delle installazioni recenti
- riproduzione dei recenti lanci di servizi
- riutilizzo delle preimpostazioni di installazione denominate
- riutilizzo delle preimpostazioni di servizio con nome---

## 7. Compatibility Contract

Il guscio visivo è additivo.

Questi flussi devono rimanere validi e stabili:

- `npx omni-skills --cursor --skill omni-figma`
- "npx omni-skills --bundle devops".
- `npx omni-skills install --guided`
- `npx omni-skills trova figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

La shell visiva non deve mai forzarsi in percorsi di comando esperti espliciti.---

## 8. Safety Contract

La shell visiva dovrebbe rendere esplicito lo stato e la scrittura.

Deve:

- Anteprima delle installazioni prima della scrittura
- visualizzare in anteprima i comandi di avvio del servizio prima dell'esecuzione
- mantenere il materiale segreto fuori dalle anteprime dei comandi in chiaro, ove possibile
- Persistenza dello stato solo localmente
- preservare il comportamento della CLI non interattiva al di fuori della shell visiva