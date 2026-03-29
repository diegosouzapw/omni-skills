# 🚀 Getting Started (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Installer ferdigheter, bekreft oppsettet og påkall din første AI-ferdighet på under 2 minutter.**---

## 📊 Current Catalog Status

| Metrisk | Verdi |
|:-------|:------|
| Publisert ferdigheter |**32**på tvers av 15 aktive kategorier, inkludert arkitektur, design, sikkerhet, DevOps, AI-engineering og mer |
| Definerte bunter |**7**(alle fullt støttet av publiserte ferdigheter) |
| Installasjonskompatible klienter |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| MCP-konfigurasjonskompatible klienter |**16**på tvers av 33 førsteklasses MCP-konfigurasjonsmål |---

## 📦 Step 1 — Install

### Hurtigstart

```bash
npx omni-skills
```

I en interaktiv terminal åpner dette nå den guidede installatøren i stedet for å anta en klient i stillhet.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Dette åpner den merkede terminalhuben for installasjon, oppdagelse, MCP, API og A2A-oppstart.### 🎯 Default Install (Antigravity Outside TTY)

Utenfor en TTY har no-arg-installasjonsprogrammet fortsatt som standard "~/.gemini/antigravity/skills".### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Startpakkene er nå fullstendig støttet, inkludert `devops` og `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Sjekk at ferdighetene havnet på rett sted:```bash
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

Eller bruk den innebygde diagnostikken:```bash
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

Gir agenter filsystemverktøy for å oppdage klienter, installere/fjerne ferdigheter og skrive MCP-konfigurasjoner:```bash
npx omni-skills mcp stream --local
```

Du kan også konfigurere MCP for klienter som ikke er mål for ferdighetsinstallering:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Viser ferdighetskatalogen som en skrivebeskyttet HTTP API:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Agent-til-agent oppdagelse, anbefaling, installasjonsplanlegging, polling og strømming:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

En ferdighet er en strukturert markdown-spillebok (`SKILL.md`) som gir en AI-agent:

| Komponent | Formål |
|:--------|:--------|
| 📋**Frontmaterie**| Maskinlesbare metadata (navn, kategori, tagger, verktøy, risiko) |
| 📝**Kropp**| Oppgavespesifikke instruksjoner, trinn, rekkverk og eksempler |
| 📚**Referanser**| Støttedokumenter agenten kan konsultere under utførelse |
| 🎨**Eiendeler**| Ikoner, bilder eller andre pakkede ressurser |---

## ➡️ Next Steps

| Dok | Hva du vil lære |
|:----|:------------------------|
| 🧭 [CLI User Guide](CLI-USER-GUIDE.md) | Full kommandoreferanse for installasjon, kjøretid, konfigurasjon og diagnostikk |
| 📗 [Bruksveiledning](USAGE.md) | Alle CLI-kommandoer, ledetekstmønstre og kjøretidsmoduser |
| 📦 [Bundler](BUNDLES.md) | Kuraterte ferdighetssamlinger og deres tilgjengelighet |
| 📚 [Katalog](../CATALOG.md) | Autogenerert katalog over publiserte ferdigheter |
| 📖 [Dokumentasjonshub](../README.md) | Full dokumentasjon kart |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Driftsreferanse |