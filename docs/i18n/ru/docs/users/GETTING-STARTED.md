# 🚀 Getting Started (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Установите навыки, проверьте настройку и активируйте свой первый навык ИИ менее чем за 2 минуты.**---

## 📊 Current Catalog Status

| Метрическая | Значение |
|:-------|:------|
| Опубликованные навыки |**32**в 15 активных категориях, включая архитектуру, дизайн, безопасность, DevOps, искусственный интеллект и многое другое |
| Определенные пакеты |**7**(все полностью подтверждено опубликованными навыками) |
| Клиенты с возможностью установки |**7**(Код Клода, Курсор, Интерфейс командной строки Gemini, Интерфейс командной строки Кодекса, Киро, Антигравитация, OpenCode) |
| Клиенты с возможностью настройки MCP |**16**по 33 первоклассным целям конфигурации MCP |---

## 📦 Step 1 — Install

### Быстрый старт

```bash
npx omni-skills
```

В интерактивном терминале теперь открывается управляемый установщик, а не автоматически предполагается клиент.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Откроется фирменный терминальный концентратор для установки, обнаружения, MCP, API и запуска A2A.### 🎯 Default Install (Antigravity Outside TTY)

За пределами TTY установщик без аргументов по-прежнему использует по умолчанию `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Стартовые пакеты теперь полностью поддерживаются, включая DevOps и AI-Engineer.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Убедитесь, что навыки попали в нужное место:```bash
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

Или воспользуйтесь встроенной диагностикой:```bash
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

Предоставляет агентам инструменты файловой системы для обнаружения клиентов, установки/удаления навыков и записи конфигураций MCP:```bash
npx omni-skills mcp stream --local
```

Вы также можете настроить MCP для клиентов, которые не являются целями установки навыков:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Предоставляет каталог навыков как HTTP API только для чтения:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Обнаружение между агентами, рекомендации, планирование установки, опросы и потоковая передача:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Навык — это структурированная книга с уценкой («SKILL.md»), которая дает ИИ-агенту:

| Компонент | Цель |
|:----------|:--------|
| 📋**Авангард**| Машиночитаемые метаданные (имя, категория, теги, инструменты, риск) |
| 📝**Тело**| Инструкции, шаги, ограждения и примеры для конкретных задач |
| 📚**Ссылки**| Сопроводительная документация, с которой агент может ознакомиться во время выполнения |
| 🎨**Активы**| Значки, изображения и другие упакованные ресурсы |---

## ➡️ Next Steps

| Док | Что вы узнаете |
|:----|:------------------|
| 🧭 [Руководство пользователя CLI](CLI-USER-GUIDE.md) | Полный справочник команд для установки, выполнения, настройки и диагностики |
| 📗 [Руководство по использованию](USAGE.md) | Все команды CLI, шаблоны подсказок и режимы выполнения |
| 📦 [Наборы](BUNDLES.md) | Кураторские коллекции навыков и их доступность |
| 📚 [Каталог](../CATALOG.md) | Автоматически создаваемый каталог опубликованных навыков |
| 📖 [Центр документации](../README.md) | Полная карта документации |
| 🔧 [Системный Runbook](../operations/RUNBOOK.md) | Оперативная справка |