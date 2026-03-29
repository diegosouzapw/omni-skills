# 🚀 Getting Started (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Nainštalujte si zručnosti, overte nastavenie a vyvolajte svoju prvú zručnosť AI za menej ako 2 minúty.**---

## 📊 Current Catalog Status

| Metrické | Hodnota |
|:-------|:------|
| Publikované zručnosti |**32**v 15 aktívnych kategóriách vrátane architektúry, dizajnu, zabezpečenia, DevOps, AI-inžinierstva a ďalších |
| Definované zväzky |**7**(všetko plne podporované publikovanými zručnosťami) |
| Klienti s možnosťou inštalácie |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| Klienti s konfiguráciou MCP |**16**v rámci 33 prvotriednych cieľov konfigurácie MCP |---

## 📦 Step 1 — Install

### Rýchly štart

```bash
npx omni-skills
```

V interaktívnom termináli sa teraz otvorí riadený inštalátor namiesto tichého preberania klienta.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Tým sa otvorí značkový terminálový rozbočovač na inštaláciu, zisťovanie, spustenie MCP, API a A2A.### 🎯 Default Install (Antigravity Outside TTY)

Mimo TTY má inštalačný program no-arg stále predvolenú hodnotu `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Štartovacie balíčky sú teraz plne podporované, vrátane „devops“ a „ai-engineer“.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Skontrolujte, či zručnosti pristáli na správnom mieste:```bash
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

Alebo použite vstavanú diagnostiku:```bash
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

Poskytuje agentom nástroje súborového systému na detekciu klientov, inštaláciu/odstraňovanie zručností a písanie konfigurácií MCP:```bash
npx omni-skills mcp stream --local
```

Môžete tiež nakonfigurovať MCP pre klientov, ktorí nie sú cieľmi inštalácie zručností:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Sprístupňuje katalóg zručností ako HTTP API iba na čítanie:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Zisťovanie, odporúčanie, plánovanie inštalácie, prieskumy a streamovanie medzi agentmi:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Zručnosť je štruktúrovaná príručka s markdownom (`SKILL.md`), ktorá agentovi AI poskytuje:

| Komponent | Účel |
|:----------|:--------|
| 📋**Frontmater**| Strojovo čitateľné metadáta (názov, kategória, značky, nástroje, riziko) |
| 📝**Telo**| Pokyny, kroky, zábradlia a príklady pre konkrétnu úlohu |
| 📚**Referencie**| Podporné dokumenty, s ktorými môže agent konzultovať počas vykonávania |
| 🎨**Aktíva**| Ikony, obrázky alebo iné balené zdroje |---

## ➡️ Next Steps

| Doc | Čo sa naučíte |
|:----|:------------------|
| 🧭 [Používateľská príručka CLI](CLI-USER-GUIDE.md) | Úplná referencia príkazov pre inštaláciu, runtime, konfiguráciu a diagnostiku |
| 📗 [Návod na použitie](USAGE.md) | Všetky príkazy CLI, vzory výziev a režimy spustenia |
| 📦 [Bundles](BUNDLES.md) | Vybrané zbierky zručností a ich dostupnosť |
| 📚 [Katalóg](../CATALOG.md) | Automaticky generovaný katalóg publikovaných zručností |
| 📖 [Centrum dokumentácie](../README.md) | Kompletná mapa dokumentácie |
| 🔧 [Súbor Runbook](../operations/RUNBOOK.md) | Prevádzkový odkaz |