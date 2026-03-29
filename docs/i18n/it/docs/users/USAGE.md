# 📗 Usage Guide (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Tutto ciò di cui hai bisogno per richiamare competenze, eseguire servizi e utilizzare il runtime Omni Skills.**

Per i flussi di lavoro operativi completi, consulta il [🔧 System Runbook](../operazioni/RUNBOOK.md).
Per la mappa completa dei comandi per l'utente finale, consulta la [🧭 Guida per l'utente della CLI](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Stato | Dettagli |
|:-------|:--------|
| ✅**Disponibile ora**| 32 competenze pubblicate su progettazione, architettura, debug, documentazione, OSS, sicurezza, DevOps, ingegneria dell'intelligenza artificiale, dati, strumenti e flussi di lavoro di apprendimento automatico |
| 📦**Bundle**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` e `oss-maintainer` sono oggi completamente supportati |
| 🔌**Portata MCP**| 7 client con funzionalità di installazione, 16 client con funzionalità di configurazione, 33 destinazioni di configurazione di prima classe, 19 profili di configurazione |
| 🤖**Durata A2A**| Durabilità locale della memoria, JSON o SQLite, ripresa del riavvio, esecutore di processi facoltativo e coordinamento noleggiato opzionale per i lavoratori condivisi |---

## 🖥️ Invocation by Client

| Cliente | Come invocare | Percorso di competenze |
|:-------|:-----|:------------|
| 🔵**Codice Claude**| `>> /nome-competenza aiutami...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Utilizza @nome-abilità per...` | `~/.gemini/skills/` |
| 🔴**Codice CLI**| `Utilizza @nome-abilità per...` | `~/.codex/competenze/` |
| 🟢**Kiro**| Caricamento automatico delle competenze su richiesta | `~/.kiro/skills/` |
| 🟣**Antigravità**| `Utilizza @nome-abilità per...` | `~/.gemini/antigravity/skills/` |
| 🔵**Cursore**| `@nome-abilità` nella chat | `~/.cursor/skill/` |
| ⚪**OpenCode**| `opencode esegui @nome-competenza` | `.opencode/skills/` |
| ⬛**Copilota**| Incolla manualmente il contenuto delle competenze | N/D |

Client come Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline e Kilo Code utilizzano principalmente il flusso "config-mcp" anziché una directory delle competenze.---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 Note:**
> - In un terminale interattivo, `npx omni-skills` ora apre un flusso di installazione guidata
> - `npx omni-skills ui` apre la shell visiva di Ink con le azioni di installazione, rilevamento e avvio del servizio
> - la shell visiva mantiene le installazioni recenti, i lanci recenti dei servizi, i preferiti e le preimpostazioni con nome in `~/.omni-skills/state/ui-state.json`
> - Al di fuori di un TTY, l'installazione completa è ancora l'impostazione predefinita quando non viene fornito alcun selettore
> - `--skill` installa solo le competenze pubblicate selezionate
> - `--bundle` espande il bundle e installa i membri pubblicati dichiarati nel bundle curato
> - `find` supporta oltre 12 flag di filtro: `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk` e altro
> - `config-mcp` è la strada giusta per i prodotti compatibili con MCP che non dispongono di una directory delle competenze di prima classe---

## 🔌 Runtime Commands

La CLI è uno strumento operativo unificato, non solo un programma di installazione.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

La shell visiva supporta:

- installazione guidata con selezione di client noti o percorso personalizzato
- cerca e installa senza memorizzare i flag
- anteprima guidata della configurazione del client MCP e flussi di scrittura
- Avvio guidato da MCP, API e A2A
- installazioni recenti e rilanci del servizio
- preimpostazioni di installazione e di servizio salvate
- abilità e bundle preferiti### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | Suggerimento |
|:--|:----|
| 1️⃣ | Fai riferimento alla competenza per nome nel prompt |
| 2️⃣ | Fornire l'esatto artefatto, codice o contesto di progettazione di cui l'agente ha bisogno |
| 3️⃣ | Preferisci `--skill` per un impatto minimo sull'installazione |
| 4️⃣ | Utilizza `doctor` e `smoke` prima di eseguire il debug di problemi di packaging o di runtime |
| 5️⃣ | Utilizza i bundle come installazioni di domini curati ora che tutti e sette i bundle iniziali sono completamente supportati |
| 6️⃣ | Utilizza `find --install --yes` per il rilevamento + l'installazione in un unico flusso |
| 7️⃣ | Consulta il [runbook](../operazioni/RUNBOOK.md) per autenticazione, limiti di velocità, firma e verifica env vars |