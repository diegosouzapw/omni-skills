# 🚀 Getting Started (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Instalează abilități, verifică configurația și invocă-ți prima abilitate AI în mai puțin de 2 minute.**---

## 📊 Current Catalog Status

| Metric | Valoare |
|:-------|:------|
| Abilități publicate |**32**în 15 categorii active, inclusiv arhitectură, design, securitate, DevOps, inginerie AI și multe altele |
| Pachete definite |**7**(toate susținute în totalitate de abilitățile publicate) |
| Clienți capabili de instalare |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| Clienți capabili de configurare MCP |**16**în 33 de obiective de configurare MCP de primă clasă |---

## 📦 Step 1 — Install

### Pornire rapidă

```bash
npx omni-skills
```

Într-un terminal interactiv, acesta deschide acum programul de instalare ghidat în loc să presupună în tăcere un client.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Aceasta deschide hub-ul terminal de marcă pentru instalare, descoperire, MCP, API și pornire A2A.### 🎯 Default Install (Antigravity Outside TTY)

În afara unui TTY, programul de instalare no-arg rămâne implicit la `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Pachetele de pornire sunt acum complet susținute, inclusiv `devops` și `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Verificați dacă abilitățile au ajuns la locul potrivit:```bash
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

Sau utilizați diagnosticul încorporat:```bash
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

Oferă agenților instrumente de sistem de fișiere pentru a detecta clienții, a instala/elimina abilități și a scrie configurații MCP:```bash
npx omni-skills mcp stream --local
```

De asemenea, puteți configura MCP pentru clienți care nu sunt ținte de instalare a competențelor:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Expune catalogul de aptitudini ca un API HTTP numai pentru citire:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Descoperirea, recomandarea, planificarea instalării, sondarea și transmiterea în flux de la agent la agent:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

O abilitate este un manual de reducere structurat (`SKILL.md`) care oferă unui agent AI:

| Componenta | Scop |
|:----------|:--------|
| 📋**Frontmatter**| Metadate care pot fi citite de mașină (nume, categorie, etichete, instrumente, risc) |
| 📝**Corpul**| Instrucțiuni specifice sarcinii, pași, balustrade și exemple |
| 📚**Referințe**| Documente de sprijin pe care agentul le poate consulta în timpul execuției |
| 🎨**Active**| Pictograme, imagini sau alte resurse ambalate |---

## ➡️ Next Steps

| Doc | Ce vei învăța |
|:----|:------------------|
| 🧭 [Ghid de utilizare CLI](CLI-USER-GUIDE.md) | Referință de comandă completă pentru instalare, rulare, configurare și diagnosticare |
| 📗 [Ghid de utilizare](USAGE.md) | Toate comenzile CLI, modelele de prompt și modurile de rulare |
| 📦 [Pachete](BUNDLES.md) | Colecții de abilități organizate și disponibilitatea lor |
| 📚 [Catalog](../CATALOG.md) | Catalog autogenerat de competențe publicate |
| 📖 [Documentation Hub](../README.md) | Harta documentatiei complete |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Referință operațională |