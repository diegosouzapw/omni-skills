# 🚀 Getting Started (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Zainstaluj umiejętności, sprawdź konfigurację i wywołaj swoją pierwszą umiejętność AI w mniej niż 2 minuty.**---

## 📊 Current Catalog Status

| Metryczne | Wartość |
|:-------|:------|
| Opublikowane umiejętności |**32**w 15 aktywnych kategoriach, w tym architektura, projektowanie, bezpieczeństwo, DevOps, inżynieria AI i nie tylko |
| Zdefiniowane pakiety |**7**(wszystkie w pełni poparte opublikowanymi umiejętnościami) |
| Klienci z możliwością instalacji |**7**(Kod Claude, Kursor, Gemini CLI, Codex CLI, Kiro, Antygrawitacja, OpenCode) |
| Klienci z możliwością konfiguracji MCP |**16**w 33 pierwszorzędnych celach konfiguracyjnych MCP |---

## 📦 Step 1 — Install

### Szybki start

```bash
npx omni-skills
```

W terminalu interaktywnym otwiera to teraz instalatora z przewodnikiem, zamiast po cichu zakładać klienta.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Spowoduje to otwarcie markowego centrum terminali do instalacji, wykrywania, MCP, API i uruchamiania A2A.### 🎯 Default Install (Antigravity Outside TTY)

Poza TTY instalator bez arg nadal domyślnie używa `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Pakiety startowe są teraz w pełni wspierane, w tym `devops` i `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Sprawdź, czy umiejętności wylądowały we właściwym miejscu:```bash
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

Lub skorzystaj z wbudowanej diagnostyki:```bash
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

Udostępnia agentom narzędzia systemu plików do wykrywania klientów, instalowania/usuwania umiejętności i zapisywania konfiguracji MCP:```bash
npx omni-skills mcp stream --local
```

Można także skonfigurować MCP dla klientów, którzy nie są obiektami docelowymi instalacji wymagającej umiejętności:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Udostępnia katalog umiejętności jako interfejs API HTTP tylko do odczytu:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Wykrywanie, rekomendowanie, planowanie instalacji, odpytywanie i przesyłanie strumieniowe między agentami:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Umiejętność to ustrukturyzowany podręcznik przecen („SKILL.md”), który zapewnia agentowi AI:

| Składnik | Cel |
|:---------------|:------------|
| 📋**Przedstawiciel**| Metadane do odczytu maszynowego (nazwa, kategoria, tagi, narzędzia, ryzyko) |
| 📝**Ciało**| Instrukcje dotyczące konkretnego zadania, stopnie, poręcze i przykłady |
| 📚**Referencje**| Dokumenty pomocnicze, z którymi agent może się zapoznać podczas realizacji |
| 🎨**Aktywa**| Ikony, obrazy i inne pakiety zasobów |---

## ➡️ Next Steps

| Doktor | Czego się nauczysz |
|:----|:--------------------------------|
| 🧭 [Podręcznik użytkownika CLI](CLI-USER-GUIDE.md) | Pełne informacje o poleceniach dotyczących instalacji, środowiska wykonawczego, konfiguracji i diagnostyki |
| 📗 [Przewodnik użytkowania](USAGE.md) | Wszystkie polecenia CLI, wzorce podpowiedzi i tryby wykonawcze |
| 📦 [Pakiety](BUNDLES.md) | Wyselekcjonowane kolekcje umiejętności i ich dostępność |
| 📚 [Katalog](../CATALOG.md) | Automatycznie wygenerowany katalog opublikowanych umiejętności |
| 📖 [Centrum dokumentacji](../README.md) | Pełna dokumentacja mapa |
| 🔧 [Systemowy element Runbook](../operacje/RUNBOOK.md) | Odniesienie operacyjne |