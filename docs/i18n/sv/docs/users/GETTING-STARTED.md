# 🚀 Getting Started (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Installera färdigheter, verifiera installationen och åberopa din första AI-färdighet på mindre än 2 minuter.**---

## 📊 Current Catalog Status

| Metrisk | Värde |
|:-------|:------|
| Publicerad kompetens |**32**i 15 aktiva kategorier inklusive arkitektur, design, säkerhet, DevOps, AI-teknik och mer |
| Definierade buntar |**7**(alla helt uppbackade av publicerade färdigheter) |
| Installationskompatibla klienter |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| MCP-konfigurationskompatibla klienter |**16**över 33 förstklassiga MCP-konfigurationsmål |---

## 📦 Step 1 — Install

### Snabbstart

```bash
npx omni-skills
```

I en interaktiv terminal öppnar detta nu den guidade installatören istället för att tyst anta en klient.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Detta öppnar den varumärkesbaserade terminalhubben för installation, upptäckt, MCP, API och A2A-start.### 🎯 Default Install (Antigravity Outside TTY)

Utanför en TTY har no-arg-installationsprogrammet fortfarande som standard "~/.gemini/antigravity/skills".### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Startpaketen är nu helt backade, inklusive `devops` och `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Kontrollera att kompetensen hamnat på rätt plats:```bash
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

Eller använd den inbyggda diagnostiken:```bash
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

Ger agenter filsystemverktyg för att upptäcka klienter, installera/ta bort färdigheter och skriva MCP-konfigurationer:```bash
npx omni-skills mcp stream --local
```

Du kan också konfigurera MCP för klienter som inte är mål för färdighetsinstallationer:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Visar färdighetskatalogen som ett skrivskyddat HTTP-API:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Agent-till-agent upptäckt, rekommendation, installationsplanering, polling och streaming:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

En färdighet är en strukturerad spelbok (`SKILL.md`) som ger en AI-agent:

| Komponent | Syfte |
|:---------|:--------|
| 📋**Frontmateria**| Maskinläsbar metadata (namn, kategori, taggar, verktyg, risk) |
| 📝**Kropp**| Uppgiftsspecifika instruktioner, steg, skyddsräcken och exempel |
| 📚**Referenser**| Stöddokument som agenten kan konsultera under körningen |
| 🎨**Tillgångar**| Ikoner, bilder eller andra paketerade resurser |---

## ➡️ Next Steps

| Doc | Vad du kommer att lära dig |
|:----|:------------------------|
| 🧭 [CLI User Guide](CLI-USER-GUIDE.md) | Fullständig kommandoreferens för installation, körning, konfiguration och diagnostik |
| 📗 [Användningsguide](USAGE.md) | Alla CLI-kommandon, promptmönster och körtidslägen |
| 📦 [Bundles](BUNDLES.md) | Kurerade färdighetssamlingar och deras tillgänglighet |
| 📚 [Katalog](../CATALOG.md) | Autogenererad katalog över publicerade färdigheter |
| 📖 [Dokumentationsnav](../README.md) | Fullständig dokumentationskarta |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Operationell referens |