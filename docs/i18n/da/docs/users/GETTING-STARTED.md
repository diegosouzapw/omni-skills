# 🚀 Getting Started (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Installer færdigheder, bekræft opsætningen, og påkald din første AI-færdighed på under 2 minutter.**---

## 📊 Current Catalog Status

| Metrisk | Værdi |
|:-------|:------|
| Udgivet færdigheder |**32**på tværs af 15 aktive kategorier, herunder arkitektur, design, sikkerhed, DevOps, AI-engineering og mere |
| Definerede bundter |**7**(alle fuldt understøttet af offentliggjorte færdigheder) |
| Installationskompatible klienter |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| MCP-konfigurationskompatible klienter |**16**på tværs af 33 førsteklasses MCP-konfigurationsmål |---

## 📦 Step 1 — Install

### Kom hurtigt i gang

```bash
npx omni-skills
```

I en interaktiv terminal åbner dette nu den guidede installatør i stedet for lydløst at antage en klient.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Dette åbner den brandede terminalhub til installation, opdagelse, MCP, API og A2A-start.### 🎯 Default Install (Antigravity Outside TTY)

Uden for en TTY har no-arg-installationsprogrammet stadig som standard `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Startpakkerne er nu fuldt understøttet, inklusive `devops` og `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Tjek, at færdigheder er landet det rigtige sted:```bash
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

Eller brug den indbyggede diagnostik:```bash
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

Giver agenter filsystemværktøjer til at opdage klienter, installere/fjerne færdigheder og skrive MCP-konfigurationer:```bash
npx omni-skills mcp stream --local
```

Du kan også konfigurere MCP til klienter, der ikke er mål for færdighedsinstallation:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Viser færdighedskataloget som en skrivebeskyttet HTTP API:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Agent-til-agent opdagelse, anbefaling, installationsplanlægning, polling og streaming:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

En færdighed er en struktureret afspilningsbog (`SKILL.md`), der giver en AI-agent:

| Komponent | Formål |
|:--------|:--------|
| 📋**Frontmaterie**| Maskinlæsbare metadata (navn, kategori, tags, værktøjer, risiko) |
| 📝**Krop**| Opgavespecifikke instruktioner, trin, autoværn og eksempler |
| 📚**Referencer**| Understøttende dokumenter, agenten kan konsultere under udførelsen |
| 🎨**Aktiver**| Ikoner, billeder eller andre pakkede ressourcer |---

## ➡️ Next Steps

| Doc | Hvad du vil lære |
|:----|:------------------------|
| 🧭 [CLI-brugervejledning](CLI-USER-GUIDE.md) | Fuld kommandoreference til installation, runtime, konfiguration og diagnostik |
| 📗 [Brugsvejledning](USAGE.md) | Alle CLI-kommandoer, promptmønstre og runtime-tilstande |
| 📦 [Bundler](BUNDLES.md) | Kurerede færdighedssamlinger og deres tilgængelighed |
| 📚 [Katalog](../CATALOG.md) | Autogenereret katalog over offentliggjorte færdigheder |
| 📖 [Dokumentationshub](../README.md) | Fuld dokumentation kort |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Operationel reference |