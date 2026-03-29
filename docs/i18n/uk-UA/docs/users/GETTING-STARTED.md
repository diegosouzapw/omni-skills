# 🚀 Getting Started (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Установіть навички, перевірте налаштування та запустіть свою першу навичку штучного інтелекту менш ніж за 2 хвилини.**---

## 📊 Current Catalog Status

| Метричний | Значення |
|:-------|:------|
| Опубліковані навички |**32**у 15 активних категоріях, включаючи архітектуру, дизайн, безпеку, DevOps, розробку ШІ тощо |
| Визначені пучки |**7**(усі повністю підтверджені опублікованими навичками) |
| Клієнти з можливістю встановлення |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| Клієнти з можливістю конфігурації MCP |**16**у 33 першокласних цілях конфігурації MCP |---

## 📦 Step 1 — Install

### Швидкий старт

```bash
npx omni-skills
```

В інтерактивному терміналі це тепер відкриває керований інсталятор замість тихого припущення клієнта.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Це відкриває фірмовий термінальний концентратор для встановлення, виявлення, MCP, API та запуску A2A.### 🎯 Default Install (Antigravity Outside TTY)

За межами TTY інсталятор без аргументів усе ще за замовчуванням `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Початкові пакети тепер повністю підтримані, включаючи `devops` і `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Переконайтеся, що навички потрапили в потрібне місце:```bash
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

Або скористайтеся вбудованою діагностикою:```bash
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

Надає агентам інструменти файлової системи для виявлення клієнтів, встановлення/видалення навичок і написання конфігурацій MCP:```bash
npx omni-skills mcp stream --local
```

Ви також можете налаштувати MCP для клієнтів, які не є цільовими установками навичок:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Показує каталог навичок як HTTP API лише для читання:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Відкриття між агентами, рекомендації, планування встановлення, опитування та потокове передавання:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Навичка — це структурований посібник із уцінки («SKILL.md»), який дає агенту ШІ:

| Компонент | Призначення |
|:----------|:--------|
| 📋**Frontmatter**| Машинозчитувані метадані (назва, категорія, теги, інструменти, ризик) |
| 📝**Тіло**| Інструкції, кроки, огорожі та приклади для конкретних завдань |
| 📚**Посилання**| Супровідні документи, з якими агент може ознайомитися під час виконання |
| 🎨**Активи**| Значки, зображення чи інші упаковані ресурси |---

## ➡️ Next Steps

| Док | Що ви дізнаєтеся |
|:----|:------------------|
| 🧭 [Посібник користувача CLI](CLI-USER-GUIDE.md) | Повний довідник команд для встановлення, виконання, конфігурації та діагностики |
| 📗 [Посібник із використання](USAGE.md) | Усі команди CLI, шаблони підказок і режими виконання |
| 📦 [Пакети](BUNDLES.md) | Підібрані колекції навичок та їх доступність |
| 📚 [Каталог](../CATALOG.md) | Автоматично створений каталог опублікованих навичок |
| 📖 [Центр документації](../README.md) | Повна карта документації |
| 🔧 [Системний Runbook](../operations/RUNBOOK.md) | Оперативна довідка |