# 🚀 Getting Started (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Installa le abilità, verifica la configurazione e attiva la tua prima abilità IA in meno di 2 minuti.**---

## 📊 Current Catalog Status

| Metrico | Valore |
|:-------|:------|
| Competenze pubblicate |**32**in 15 categorie attive tra cui architettura, design, sicurezza, DevOps, ingegneria IA e altro ancora |
| Fasci definiti |**7**(tutti pienamente supportati dalle competenze pubblicate) |
| Client con capacità di installazione |**7**(Codice Claude, Cursore, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| Client con funzionalità di configurazione MCP |**16**su 33 target di configurazione MCP di prima classe |---

## 📦 Step 1 — Install

### Avvio Rapido

```bash
npx omni-skills
```

In un terminale interattivo, questo ora apre il programma di installazione guidato invece di assumere silenziosamente un client.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Verrà aperto l'hub terminale con marchio per installazione, rilevamento, MCP, API e avvio A2A.### 🎯 Default Install (Antigravity Outside TTY)

Al di fuori di un TTY, il programma di installazione no-arg è ancora impostato su "~/.gemini/antigravity/skills".### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ I bundle iniziali sono ora completamente supportati, inclusi `devops` e `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Verifica che le competenze siano arrivate nel posto giusto:```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

Oppure utilizza la diagnostica integrata:```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

Fornisce agli agenti strumenti del filesystem per rilevare client, installare/rimuovere competenze e scrivere configurazioni MCP:```bash
npx omni-skills mcp stream --local
```

Puoi anche configurare MCP per i client che non sono destinazioni di installazione delle competenze:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Espone il catalogo delle competenze come API HTTP di sola lettura:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Individuazione da agente ad agente, consigli, pianificazione dell'installazione, polling e streaming:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Una competenza è un playbook strutturato di ribasso (`SKILL.md`) che fornisce a un agente AI:

| Componente | Scopo |
|:----------|:--------|
| 📋**Frontmatter**| Metadati leggibili dalla macchina (nome, categoria, tag, strumenti, rischio) |
| 📝**Corpo**| Istruzioni, gradini, parapetti ed esempi specifici per l'attività |
| 📚**Riferimenti**| Documenti di supporto che l'agente può consultare durante l'esecuzione |
| 🎨**Attività**| Icone, immagini o altre risorse incluse nel pacchetto |---

## ➡️ Next Steps

| Dottore | Cosa imparerai |
|:----|:-----------------|
| 🧭 [Guida per l'utente della CLI](CLI-USER-GUIDE.md) | Riferimento completo ai comandi per installazione, runtime, configurazione e diagnostica |
| 📗 [Guida all'uso](USAGE.md) | Tutti i comandi CLI, i modelli di prompt e le modalità di runtime |
| 📦 [Pacchetti](BUNDLES.md) | Raccolte di competenze selezionate e loro disponibilità |
| 📚 [Catalogo](../CATALOG.md) | Catalogo generato automaticamente delle competenze pubblicate |
| 📖 [Hub della documentazione](../README.md) | Mappa della documentazione completa |
| 🔧 [Runbook di sistema](../operazioni/RUNBOOK.md) | Riferimento operativo |