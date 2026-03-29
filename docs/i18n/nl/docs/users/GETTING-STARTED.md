# 🚀 Getting Started (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Installeer vaardigheden, verifieer de instellingen en gebruik je eerste AI-vaardigheid in minder dan 2 minuten.**---

## 📊 Current Catalog Status

| Metrisch | Waarde |
|:-------|:------|
| Gepubliceerde vaardigheden |**32**in 15 actieve categorieën, waaronder architectuur, ontwerp, beveiliging, DevOps, AI-engineering en meer |
| Gedefinieerde bundels |**7**(allemaal volledig ondersteund door gepubliceerde vaardigheden) |
| Clients die geschikt zijn voor installatie |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| Clients met MCP-configuratie |**16**over 33 eersteklas MCP-configuratiedoelen |---

## 📦 Step 1 — Install

### Snel starten

```bash
npx omni-skills
```

In een interactieve terminal wordt nu het begeleide installatieprogramma geopend in plaats van stilletjes uit te gaan van een client.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Hiermee wordt de terminalhub met merknaam geopend voor installatie, detectie, MCP, API en A2A-startup.### 🎯 Default Install (Antigravity Outside TTY)

Buiten een TTY is het no-arg-installatieprogramma nog steeds standaard ingesteld op `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ De starterbundels worden nu volledig ondersteund, inclusief `devops` en `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Controleer of de vaardigheden op de juiste plek terecht zijn gekomen:```bash
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

Of gebruik de ingebouwde diagnostiek:```bash
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

Geeft agenten bestandssysteemtools om clients te detecteren, vaardigheden te installeren/verwijderen en MCP-configuraties te schrijven:```bash
npx omni-skills mcp stream --local
```

U kunt MCP ook configureren voor clients die geen vaardigheidsinstallatiedoelen zijn:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Geeft de vaardighedencatalogus weer als een alleen-lezen HTTP-API:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Agent-tot-agent detectie, aanbeveling, installatieplanning, polling en streaming:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Een vaardigheid is een gestructureerd markdown-playbook (`SKILL.md`) dat een AI-agent het volgende geeft:

| Onderdeel | Doel |
|:----------|:--------|
| 📋**Frontmaterie**| Machineleesbare metadata (naam, categorie, tags, tools, risico) |
| 📝**Lichaam**| Taakspecifieke instructies, stappen, leuningen en voorbeelden |
| 📚**Referenties**| Ondersteunende documenten die de agent tijdens de uitvoering kan raadplegen |
| 🎨**Activiteiten**| Pictogrammen, afbeeldingen of andere verpakte bronnen |---

## ➡️ Next Steps

| Dok | Wat je leert |
|:----|:------------------|
| 🧭 [CLI-gebruikershandleiding](CLI-USER-GUIDE.md) | Volledige opdrachtreferentie voor installatie, runtime, configuratie en diagnostiek |
| 📗 [Gebruiksgids](USAGE.md) | Alle CLI-opdrachten, promptpatronen en runtimemodi |
| 📦 [Bundels](BUNDLES.md) | Samengestelde vaardighedencollecties en hun beschikbaarheid |
| 📚 [Catalogus](../CATALOG.md) | Automatisch gegenereerde catalogus van gepubliceerde vaardigheden |
| 📖 [Documentatiehub](../README.md) | Volledige documentatiekaart |
| 🔧 [Systeemrunbook](../operations/RUNBOOK.md) | Operationele referentie |