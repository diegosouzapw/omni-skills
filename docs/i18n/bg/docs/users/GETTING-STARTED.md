# 🚀 Getting Started (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Инсталирайте умения, проверете настройката и извикайте първото си AI умение за по-малко от 2 минути.**---

## 📊 Current Catalog Status

| Метрика | Стойност |
|:-------|:------|
| Публикувани умения |**32**в 15 активни категории, включително архитектура, дизайн, сигурност, DevOps, AI-инженерство и други |
| Дефинирани пакети |**7**(всички напълно подкрепени от публикувани умения) |
| Клиенти с възможност за инсталиране |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| Клиенти с възможност за конфигурация на MCP |**16**в 33 първокласни цели за конфигурация на MCP |---

## 📦 Step 1 — Install

### Бърз старт

```bash
npx omni-skills
```

В интерактивен терминал това вече отваря инсталационната програма с указания, вместо безшумно да приема клиент.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Това отваря брандирания терминален център за инсталиране, откриване, MCP, API и A2A стартиране.### 🎯 Default Install (Antigravity Outside TTY)

Извън TTY, инсталаторът без аргумент все още е по подразбиране `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Стартовите пакети вече са напълно подкрепени, включително `devops` и `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Проверете дали уменията са попаднали на правилното място:```bash
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

Или използвайте вградената диагностика:```bash
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

Предоставя на агентите инструменти за файлова система за откриване на клиенти, инсталиране/премахване на умения и писане на MCP конфигурации:```bash
npx omni-skills mcp stream --local
```

Можете също така да конфигурирате MCP за клиенти, които не са цели за инсталиране на умения:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Разкрива каталога с умения като HTTP API само за четене:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Откриване между агенти, препоръки, планиране на инсталиране, анкетиране и стрийминг:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Умението е структурирана книга за маркиране („SKILL.md“), която дава на AI агент:

| Компонент | Цел |
|:----------|:--------|
| 📋**Frontmatter**| Машинночетими метаданни (име, категория, тагове, инструменти, риск) |
| 📝**Тяло**| Инструкции, стъпки, парапети и примери за конкретни задачи |
| 📚**Референции**| Поддържащи документи, които агентът може да направи справка по време на изпълнение |
| 🎨**Активи**| Икони, изображения или други пакетирани ресурси |---

## ➡️ Next Steps

| Док | Какво ще научите |
|:----|:------------------|
| 🧭 [Ръководство за потребителя на CLI](CLI-USER-GUIDE.md) | Пълна справка за команди за инсталиране, време на изпълнение, конфигурация и диагностика |
| 📗 [Ръководство за използване](USAGE.md) | Всички CLI команди, шаблони за подкани и режими на изпълнение |
| 📦 [Пакети](BUNDLES.md) | Подбрани колекции от умения и тяхната наличност |
| 📚 [Каталог](../CATALOG.md) | Автоматично генериран каталог на публикуваните умения |
| 📖 [Център за документи](../README.md) | Пълна карта на документацията |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Оперативна справка |