# 🧭 Omni Skills CLI User Guide (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Повна публічна поверхня CLI, надана `omni-skills`.**

Використовуйте цей посібник, якщо хочете:

| Мета | Командний район |
|:-----|:-------------|
| 📥 Встановіть навички або пакети | [Потоки встановлення](#3️⃣-install-flows) |
| 🔎 Пошук у каталозі | [Відкриття каталогу](#4️⃣-каталог-відкриття) |
| 🔌 Налаштувати клієнтів MCP | [Конфігурація клієнта MCP](#5️⃣-mcp-client-config) |
| 🖥️ Запустіть служби MCP, API або A2A | [MCP Server](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Використовуйте оболонку візуального терміналу | [Візуальна оболонка](#9️⃣-visual-shell) |
| 🧪 Запустіть діагностику або перевірку | [Діагностика](#🔟-diagnostics-and-preflight) |---

## 1️⃣ Install and Entry Modes

Встановити за допомогою `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Контекст | Що відбувається |
|:--------|:-----------|
| 🖥️ TTY + без аргументів | Відкриває потік**керованого встановлення**|
| ⚙️ Не TTY + без аргументів | Неінтерактивне встановлення до `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Фірмова**Ink Visual Shell**|
| 📝 `npx omni-skills ui --text` | Readline**резервний текст**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Команда | Опис |
|:--------|:-----------|
| `ui` | 🎨 Центр візуального терміналу |
| `знайти [запит]` | 🔎 Відкриття каталогу |
| `перекатегоризувати` | 🏷️ Керування таксономією |
| `встановити [прапори]` | 📥 Встановлення навичок/пакета |
| `config-mcp` | 🔌 Конфігурація клієнта MCP |
| `mcp <stdio\|stream\|sse>` | 🔌 Режими сервера MCP |
| `api` | 🌐 API каталогу |
| `a2a` | 🤖 Середовище виконання A2A |
| `дим` | 🧪 Випуск перед польотом |
| `публікувати-перевірити` | 📦 Перевірка публікації пакета |
| `лікар` | 🩺 Діагностика середовища |
| `допомога` | ❓ Посилання на команду |---

## 3️⃣ Install Flows

### Швидкий старт

```bash
npx omni-skills
npx omni-skills install --guided
```

> Керований потік дозволяє вибрати:**цільовий клієнт**→**набір або навички**→**спеціальний шлях**→**попередній перегляд перед виконанням**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Прапор | Клієнт |
|:-----|:-------|
| `--антигравітація` | 🟣 Антигравітація *(за замовчуванням)* |
| `--клод` | 🟢 Клод Код |
| `--курсор` | 🔵 Курсор |
| `--codex` | 🔴 Codex CLI |
| `--gemini` | 🟡 Gemini CLI |
| `--kiro` | 🟠 Кіро |
| `--відкритий код` | ⚪ OpenCode |

> Ціль встановлення за замовчуванням (неінтерактивна): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Прапор | Призначення |
|:-----|:--------|
| `--категорія` | Фільтрувати за категорією таксономії |
| `--інструмент` | Фільтрувати за підтримуваним інструментом |
| `--ризик` | Фільтрувати за рівнем ризику |
| `--sort` | Сортувати результати (наприклад, `якість`) |
| `--order` | Порядок сортування |
| `--min-якість` | Мінімальний показник якості |
| `--min-best-practices` | Мінімальна оцінка найкращих практик |
| `--min-level` | Мінімальний рівень зрілості |
| `--min-security` | Мінімальна оцінка безпеки |
| `--validation-status` | Фільтрувати за станом перевірки |
| `--security-status` | Фільтрувати за станом безпеки |---

## 5️⃣ MCP Client Config

Використовуйте `config-mcp`, щоб переглянути або написати клієнтську конфігурацію MCP.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<подробиці>
<summary>🔌 <strong>Клієнтська поверхня з можливістю конфігурації</strong></summary>

| Клієнт | Цілі |
|:-------|:--------|
| Клод | Налаштування та цілі робочого столу |
| Курсор | Користувач і робоча область |
| Кодекс | Конфігурація TOML |
| Близнюки | Користувач і робоча область |
| Антигравітація | Конфігурація користувача |
| OpenCode | Користувач і робоча область |
| Клайн | Першокласна ціль |
| GitHub Copilot CLI | Користувач і репо |
| Код кіло | Користувач, проект і робоча область |
| Кіро | Користувач і робоча область |
| Зед | Робоча область |
| Код VS | Користувач, робоча область і контейнер для розробників |
| Продовжити | Робоча область YAML |
| Джуні | Проект і користувач |
| Віндсерфінг | Конфігурація користувача |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**Local sidecar**додає: виявлення клієнта, попередній перегляд встановлення, потоки встановлення/видалення та написання конфігурації MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Маршрут | Призначення |
|:------|:--------|
| `GET /healthz` | Перевірка стану здоров'я |
| `GET /openapi.json` | Специфікація OpenAPI |
| `GET /v1/skills` | Перерахувати всі навички |
| `GET /v1/search` | Пошук у каталозі |
| `GET /v1/skills/:id/archives` | Список архівів для навички |
| `GET /v1/skills/:id/download/archive?format=zip` | Завантажити архів навичок |
| `GET /v1/skills/:id/download/archive/checksums` | Завантажити контрольні суми |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Особливість | Статус |
|:--------|:-------|
| 🔎 Відкриття з урахуванням завдань | ✅ |
| 📋 Передача плану встановлення | ✅ |
| 🔄 Опитування | ✅ |
| 📡 Потокове передавання | ✅ |
| ❌ Скасування | ✅ |
| 🔔 Конфігурація push-сповіщень | ✅ |
| 💾 Наполегливість | Пам'ять, JSON і SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Можливості

| Особливість | Опис |
|:--------|:-----------|
| 🧭 Кероване встановлення | Виберіть клієнтський або спеціальний шлях |
| 🔎 Пошук + встановлення | Не потрібно запам'ятовувати прапор |
| 🔌 Конфігурація MCP | Попередній перегляд і запис потоків |
| 🖥️ Запуск сервісу | Керований запуск MCP, API та A2A |
| 🕐 Останні | Останні встановлення та перезапуски служб |
| ⭐ Вибране | Збережені навички та комплекти |
| 💾 Попередні налаштування | Іменовані налаштування встановлення та обслуговування |

>**Шлях стану:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Перевіряє: стан сховища, стан локальної інсталяції, доступність часу виконання та проблеми середовища.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Перевірки: збірка, тести, вихід пакетів, завантаження служби, покриття сканера та випуск упаковки.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Персона | Команда | Призначення |
|:-----------|:--------|:--------|
| 🆕 Новий користувач | `npx omni-skills` | Кероване перше встановлення |
| 🔧 Оператор | `npx omni-skills config-mcp --list-targets` | Налаштувати локальний MCP |
| 🔧 Оператор | `npx omni-skills mcp stream --local` | Запустіть локальну коляску |
| 📦 Супроводжувач | `npx omni-skills smoke` | Підтвердити реліз |
| 🔍 Досвідчений користувач | `npx omni-skills find security --sort quality --min-quality 95` | Спочатку знайдіть найкращий навик |---

## 📖 Related Documents

| Док | Що це охоплює |
|:----|:--------------|
| 🚀 [Початок роботи](./GETTING-STARTED.md) | Установіть і перевірте менш ніж за 2 хвилини |
| 📗 [Посібник із використання](./USAGE.md) | Усі команди CLI, шаблони та режими |
| 📦 [Пакети](./BUNDLES.md) | Підібрані колекції навичок |
| 🔧 [Системний Runbook](../operations/RUNBOOK.md) | Оперативна довідка |
| 🔌 [Локальний MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Інструменти файлової системи та написання конфігурації |