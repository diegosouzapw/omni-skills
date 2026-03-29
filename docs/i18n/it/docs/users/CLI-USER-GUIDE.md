# 🧭 Omni Skills CLI User Guide (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**L'intera superficie CLI pubblica fornita da `omni-skills`.**

Utilizza questa guida quando desideri:

| Obiettivo | Area di comando |
|:-----|:-------------|
| 📥 Installa competenze o pacchetti | [Flussi di installazione](#3️⃣-install-flows) |
| 🔎 Cerca nel catalogo | [Catalog Discovery](#4️⃣-catalog-discovery) |
| 🔌 Configura client MCP | [Configurazione client MCP](#5️⃣-mcp-client-config) |
| 🖥️ Avvia servizi MCP, API o A2A | [Server MCP](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Utilizza la shell del terminale visivo | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Esegui la diagnostica o il preflight | [Diagnostica](#🔟-diagnostica-e-preflight) |---

## 1️⃣ Install and Entry Modes

Installa con `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Contesto | Cosa succede |
|:--------|:------------|
| 🖥️ TTY + senza argomenti | Apre il flusso di**installazione guidata**|
| ⚙️ Non TTY + nessun argomento | Installazione non interattiva su `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Con marchio**Guscio visivo Ink**|
| 📝 `npx omni-skills ui --text` | Readline**testo fallback**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Comando | Descrizione |
|:--------|:-----------|
| `ui` | 🎨 Hub terminale visivo |
| `trova [query]` | 🔎 Scopri il catalogo |
| `ricategorizzare` | 🏷️Gestione della tassonomia |
| `installa [flag]` | 📥 Installazione di abilità/pacchetto |
| `config-mcp` | 🔌 Configurazione client MCP |
| `mcp <stdio\|stream\|sse>` | 🔌 Modalità server MCP |
| `api` | 🌐 Catalogo API |
| `a2a` | 🤖 Runtime A2A |
| `fumo` | 🧪 Rilascio preflight |
| `pubblica-controllo` | 📦 Controllo pubblicazione pacchetto |
| `dottore` | 🩺Diagnostica ambientale |
| "aiuto" | ❓ Riferimento comando |---

## 3️⃣ Install Flows

### Avvio Rapido

```bash
npx omni-skills
npx omni-skills install --guided
```

> Il flusso guidato ti consente di scegliere:**cliente target**→**bundle o skill**→**percorso personalizzato**→**anteprima prima dell'esecuzione**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Bandiera | Cliente |
|:-----|:-------|
| `--antigravità` | 🟣 Antigravità *(predefinito)* |
| `--claude` | 🟢 Codice Claude |
| `--cursore` | 🔵 Cursore |
| `--codice` | 🔴 Codice CLI |
| `--gemelli` | 🟡Gemini CLI |
| `--kiro` | 🟠 Kiro |
| `--opencode` | ⚪ Codice aperto |

> Destinazione di installazione predefinita (non interattiva): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Bandiera | Scopo |
|:-----|:--------|
| `--categoria` | Filtra per categoria tassonomica |
| `--strumento` | Filtra per strumento supportato |
| `--rischio` | Filtra per livello di rischio |
| `--ordina` | Ordina i risultati (ad esempio, "qualità") |
| `--ordine` | Ordinamento |
| `--min-qualità` | Punteggio di qualità minimo |
| `--min-migliori-pratiche` | Punteggio minimo relativo alle migliori pratiche |
| `--livello-min` | Livello minimo di maturità |
| `--min-sicurezza` | Punteggio minimo di sicurezza |
| `--stato-validazione` | Filtra per stato di convalida |
| `--stato-sicurezza` | Filtra per stato di sicurezza |---

## 5️⃣ MCP Client Config

Utilizza "config-mcp" per visualizzare in anteprima o scrivere la configurazione MCP compatibile con il client.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<dettagli>
<summary>🔌 <strong>Superficie client con funzionalità di configurazione</strong></summary>

| Cliente | Obiettivi |
|:-------|:--------|
| Claudio | Impostazioni e destinazioni desktop |
| Cursore | Utente e spazio di lavoro |
| Codice | Configurazione TOML |
| Gemelli | Utente e spazio di lavoro |
| Antigravità | Configurazione utente |
| OpenCode | Utente e spazio di lavoro |
| Cline | Obiettivo di prima classe |
| GitHub Copilot CLI | Utente e repository |
| Codice chilo | Utente, progetto e area di lavoro |
| Kiro | Utente e spazio di lavoro |
| Zed | Spazio di lavoro |
| Codice VS | Utente, area di lavoro e contenitore di sviluppo |
| Continua | Area di lavoro YAML |
| giugno | Progetto e utente |
| Windsurf | Configurazione utente |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**Sidecar locale**aggiunge: rilevamento del client, anteprima di installazione, flussi di installazione/rimozione e scrittura della configurazione MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Itinerario | Scopo |
|:------|:--------|
| `OTTIENI /salute` | Controllo sanitario |
| `OTTIENI /openapi.json` | Specifiche OpenAPI |
| `OTTIENI /v1/competenze` | Elenca tutte le competenze |
| `OTTIENI /v1/ricerca` | Cerca nel catalogo |
| `GET /v1/skills/:id/archives` | Elenca gli archivi per una competenza |
| `GET /v1/skills/:id/download/archive?format=zip` | Scarica l'archivio delle competenze |
| `GET /v1/skills/:id/download/archive/checksums` | Scarica checksum |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Caratteristica | Stato |
|:--------|:-------|
| 🔎 Scoperta consapevole delle attività | ✅|
| 📋 Trasferimento del piano di installazione | ✅|
| 🔄Sondaggi | ✅|
| 📡Streaming | ✅|
| ❌ Cancellazione | ✅|
| 🔔 Configurazione notifica push | ✅|
| 💾 Persistenza | Memoria, JSON e SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funzionalità

| Caratteristica | Descrizione |
|:--------|:-----------|
| 🧭 Installazione guidata | Scegli client o percorso personalizzato |
| 🔎 Cerca + installa | Non è necessaria la memorizzazione dei flag |
| 🔌 Configurazione MCP | Anteprima e scrittura dei flussi |
| 🖥️ Lancio del servizio | Avvio guidato MCP, API e A2A |
| 🕐 Recenti | Installazioni recenti e rilanci dei servizi |
| ⭐ Preferiti | Abilità e pacchetti salvati |
| 💾Preimpostazioni | Preimpostazioni di installazione e servizio denominate |

>**Percorso dello stato:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Ispeziona: stato del repository, stato di installazione locale, disponibilità di runtime e problemi ambientali.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Convalida: creazione, test, output del pacchetto, avvio del servizio, copertura dello scanner e pacchetto di rilascio.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Comando | Scopo |
|:-----------|:--------|:--------|
| 🆕 Nuovo utente | `npx competenze omnicomprensive` | Prima installazione guidata |
| 🔧Operatore | `npx omni-skills config-mcp --list-targets` | Configurare MCP locale |
| 🔧Operatore | `npx omni-skills mcp stream --local` | Avvia sidecar locale |
| 📦 Manutentore | `npx fumo di abilità omnicomprensive` | Convalidare una versione |
| 🔍 Utente esperto | `npx omni-skills trova sicurezza --sort qualità --min-qualità 95` | Trova prima la migliore abilità |---

## 📖 Related Documents

| Dottore | Cosa copre |
|:----|:------|
| 🚀 [Per iniziare](./GETTING-STARTED.md) | Installa e verifica in meno di 2 minuti |
| 📗 [Guida all'uso](./USAGE.md) | Tutti i comandi, i modelli e le modalità CLI |
| 📦 [Pacchetti](./BUNDLES.md) | Collezioni di abilità curate |
| 🔧 [Runbook di sistema](../operazioni/RUNBOOK.md) | Riferimento operativo |
| 🔌 [Sidecar MCP locale](../specs/LOCAL-MCP-SIDECAR.md) | Strumenti del filesystem e scrittura della configurazione |