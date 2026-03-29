# 🧩 CLI Guided Installer Specification (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Contratto comportamentale per l'esperienza di installazione guidata nella CLI Omni Skills.**---

## 1. Scope

Questa specifica definisce il comportamento di installazione guidata che si sovrappone al backend del programma di installazione esistente.

Non sostituisce:

- `tools/bin/install.js`
- flussi attuali di flag di esperti
- manifesti di installazione selettiva

Definisce:

- come si accede alla modalità guidata
- come vengono scelte le destinazioni
- come viene scelto l'ambito di installazione
- quali informazioni di anteprima devono essere visualizzate
- come funzionano la conferma e l'esecuzione---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

La CLI dovrebbe entrare in modalità di installazione guidata quando:

- l'utente esegue `omni-skills` senza argomenti in un TTY
- L'utente esegue `omni-skills install` senza selettori in un TTY### 2.2 Forced Guided Entry

La CLI dovrebbe supportare anche la modalità guidata esplicita attraverso un'opzione dedicata, come ad esempio:

- "installazione omni-skills --guidata".

Questa modalità dovrebbe funzionare anche quando l'input viene inviato tramite pipe e non collegato a un TTY, purché sia disponibile l'input standard.### 2.3 Non-Interactive Safety Rule

Quando richiamato senza TTY e senza modalità guidata esplicitamente richiesta:

- preservare il comportamento predefinito corrente
- non bloccare l'attesa delle richieste---

## 3. Destination Model

L'installazione guidata deve supportare due classi di destinazione:### 3.1 Known Client Target

Ogni bersaglio conosciuto si risolve in:

- Etichetta leggibile dall'uomo
- ID strumento interno
- installa il flag
- percorso risolto

Obiettivi noti richiesti:

- Codice Claude
- Cursore
-Gemelli CLI
- Codice CLI
- Kiro
- Antigravità
- Codice aperto### 3.2 Custom Path Target

La modalità percorso personalizzato deve:

- Richiedere un percorso
- risolvere `~`
- normalizzare al percorso assoluto
- mostra in anteprima il percorso risolto---

## 4. Install Scope Model

L'installazione guidata deve supportare:### 4.1 Full Library

Equivalente all'installazione corrente senza `--skill` o `--bundle`.### 4.2 Single Skill

Consente all'utente di selezionare una competenza pubblicata.### 4.3 Single Bundle

Consente all'utente di selezionare un pacchetto curato e di risolvere i membri pubblicati.### 4.4 Search Then Install

Consente all'utente:

- inserisci una query di ricerca
- ispezionare i risultati
- scegli un'abilità o un pacchetto
- continuare con l'anteprima dell'installazione---

## 5. Preview Contract

Prima dell'esecuzione, l'installazione guidata deve visualizzare:

- etichetta di destinazione
- percorso di destinazione
- installare l'ambito
- abilità o pacchetto selezionato, se applicabile
- comando CLI equivalente

Facoltativo ma consigliato:

- riepilogo dei metadati delle competenze selezionate
- riepilogo disponibilità bundle---

## 6. Execution Contract

Dopo la conferma:

- delegati all'installazione guidata al backend del programma di installazione esistente
- Non reimplementa la scrittura dei file

L'anteprima del comando e gli argomenti effettivi del programma di installazione delegato devono corrispondere esattamente.---

## 7. Result Contract

Al termine dell'esecuzione, il risultato dell'installazione guidata dovrebbe mostrare:

- indicatore di successo
- percorso di destinazione finale
- comando che è stato eseguito
- azione consigliata successiva

Esempio di azioni successive:

- utilizzare l'abilità nel cliente selezionato
- esegui "dottore".
- esegui `mcp stream --local`---

## 8. Compatibility Contract

Rimangono valide ed invariate:

- "omni-skills --cursore --skill omni-figma".
- "omni-skills --bundle full-stack".
- `omni-skills --percorso ./skills`
- `omni-skills trova figma --tool cursor --install --yes`

La modalità guidata aggiunge comportamento. Non rimuove il comportamento esistente.