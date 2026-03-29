# 🧭 Omni Skills CLI User Guide (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Полная общедоступная поверхность CLI, предоставляемая `omni-skills`.**

Используйте это руководство, если хотите:

| Цель | Командная зона |
|:-----|:-------------|
| 📥 Установить навыки или пакеты | [Потоки установки](#3️⃣-install-flows) |
| 🔎 Искать по каталогу | [Обнаружение каталога](#4️⃣-обнаружение-каталога) |
| 🔌 Настройка клиентов MCP | [Конфигурация клиента MCP](#5️⃣-mcp-client-config) |
| 🖥️ Запустите службы MCP, API или A2A | [Сервер MCP](#6️⃣-mcp-сервер) · [API](#7️⃣-каталог-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Используйте оболочку визуального терминала | [Визуальная оболочка](#9️⃣-visual-shell) |
| 🧪 Проведите диагностику или предполетную диагностику | [Диагностика](#🔟-диагностика-и-предполетная) |---

## 1️⃣ Install and Entry Modes

Установите с помощью `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Контекст | Что происходит |
|:--------|:------------|
| 🖥️ Телетайп + без аргументов | Открывает процесс**пошаговой установки**|
| ⚙️ Без телетайпа + без аргументов | Неинтерактивная установка в `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Фирменная**Чернильная визуальная оболочка**|
| 📝 `npx omni-skills ui --text` | Readline**резервный текст**Пользовательский интерфейс |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Команда | Описание |
|:--------|:-----------|
| `уй` | 🎨 Визуальный терминал |
| `найти [запрос]` | 🔎 Открытие каталога |
| `переклассифицировать` | 🏷️ Управление таксономией |
| `установить [флаги]` | 📥 Установка навыка/пакета |
| `конфигурация-MCP` | 🔌 Конфигурация клиента MCP |
| `mcp <stdio\|stream\|sse>` | 🔌 Режимы сервера MCP |
| `апи` | 🌐 API каталога |
| `а2а` | 🤖 Время выполнения A2A |
| `дым` | 🧪 Предполетный релиз |
| `проверка публикации` | 📦 Проверка публикации пакета |
| `доктор` | 🩺 Диагностика окружающей среды |
| `помощь` | ❓ Справочник команд |---

## 3️⃣ Install Flows

### Быстрый старт

```bash
npx omni-skills
npx omni-skills install --guided
```

> Управляемый процесс позволяет выбрать:**целевой клиент**→**набор или навык**→**настраиваемый путь**→**предварительный просмотр перед выполнением**### 🎯 Single Skill

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

| Флаг | Клиент |
|:-----|:-------|
| `--антигравитация` | 🟣 Антигравитация *(по умолчанию)* |
| `--Клод` | 🟢 Клод Код |
| `--курсор` | 🔵 Курсор |
| `--кодекс` | 🔴 Интерфейс командной строки Кодекса |
| `--близнецы` | 🟡 Gemini CLI |
| `--киро` | 🟠 Киро |
| `--opencode` | ⚪ Открытый код |

> Цель установки по умолчанию (неинтерактивная): `~/.gemini/antigravity/skills`---

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

| Флаг | Цель |
|:-----|:--------|
| `--категория` | Фильтровать по категории таксономии |
| `--инструмент` | Фильтровать по поддерживаемому инструменту |
| `--риск` | Фильтровать по уровню риска |
| `--сортировать` | Сортировка результатов (например, «качество») |
| `--заказать` | Порядок сортировки |
| `--min-качество` | Минимальный показатель качества |
| `--min-best-practices` | Минимальная оценка лучших практик |
| `--min-level` | Минимальный уровень зрелости |
| `--min-security` | Минимальный уровень безопасности |
| `--статус-валидации` | Фильтровать по состоянию проверки |
| `--статус-безопасности` | Фильтровать по состоянию безопасности |---

## 5️⃣ MCP Client Config

Используйте `config-mcp` для предварительного просмотра или записи конфигурации MCP с учетом клиента.### 📋 List Targets

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

<подробности>
<summary>🔌 <strong>Клиентская поверхность с возможностью настройки</strong></summary>

| Клиент | Цели |
|:-------|:--------|
| Клод | Настройки и цели рабочего стола |
| Курсор | Пользователь и рабочая область |
| Кодекс | Конфигурация TOML |
| Близнецы | Пользователь и рабочая область |
| Антигравитация | Конфигурация пользователя |
| Открытый код | Пользователь и рабочая область |
| Клайн | Первоклассная цель |
| GitHub Copilot CLI | Пользователь и репо |
| Код килограмма | Пользователь, проект и рабочая область |
| Киро | Пользователь и рабочая область |
| Зед | Рабочая область |
| Код VS | Пользователь, рабочая область и контейнер разработки |
| Продолжить | Рабочая область YAML |
| Джуни | Проект и пользователь |
| Виндсерфинг | Конфигурация пользователя |</details>

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

>**Локальный боковой интерфейс**добавляет: обнаружение клиентов, предварительный просмотр установки, потоки установки/удаления и запись конфигурации MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Маршрут | Цель |
|:------|:--------|
| `GET /healthz` | Проверка здоровья |
| `GET /openapi.json` | Спецификация OpenAPI |
| `GET /v1/skills` | Перечислить все навыки |
| `GET /v1/search` | Поиск по каталогу |
| `GET /v1/skills/:id/archives` | Список архивов для навыка |
| `GET /v1/skills/:id/download/archive?format=zip` | Скачать архив навыков |
| `GET /v1/skills/:id/download/archive/checksums` | Скачать контрольные суммы |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Особенность | Статус |
|:--------|:-------|
| 🔎 Обнаружение с учетом задач | ✅ |
| 📋 Передача плана установки | ✅ |
| 🔄 Опрос | ✅ |
| 📡 Стриминг | ✅ |
| ❌ Отмена | ✅ |
| 🔔 Конфигурация push-уведомлений | ✅ |
| 💾 Стойкость | Память, JSON и SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Возможности

| Особенность | Описание |
|:--------|:-----------|
| 🧭 Пошаговая установка | Выберите клиентский или собственный путь |
| 🔎 Поиск + установка | Запоминание флага не требуется |
| 🔌 Конфигурация MCP | Предварительный просмотр и запись потоков |
| 🖥️Запуск сервиса | MCP, API и управляемый запуск A2A |
| 🕐 Недавние | Недавние установки и перезапуски услуг |
| ⭐ Избранное | Сохраненные навыки и пакеты |
| 💾 Пресеты | Именованные настройки установки и обслуживания |

>**Путь к состоянию:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Проверяет: состояние репозитория, состояние локальной установки, доступность среды выполнения и проблемы среды.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Проверяет: сборку, тесты, выходные данные пакета, загрузку службы, покрытие сканера и выпуск упаковки.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Персона | Команда | Цель |
|:-----------|:--------|:--------|
| 🆕 Новый пользователь | `npx омни-навыки` | Пошаговая первая установка |
| 🔧 Оператор | `npx omni-skills config-mcp --list-targets` | Настройка локального MCP |
| 🔧 Оператор | `npx omni-skills mcp поток --local` | Запустить местную коляску |
| 📦 Сопровождающий | `npx omni-skills дым` | Подтвердить выпуск |
| 🔍 Опытный пользователь | `npx omni-skills find security --sortquality --min-quality 95` | Сначала найдите лучший навык |---

## 📖 Related Documents

| Док | Что это охватывает |
|:----|:--------------|
| 🚀 [Начало работы](./GETTING-STARTED.md) | Установите и проверьте менее чем за 2 минуты |
| 📗 [Руководство по использованию](./USAGE.md) | Все команды, шаблоны и режимы CLI |
| 📦 [Наборы](./BUNDLES.md) | Кураторские коллекции навыков |
| 🔧 [Системный Runbook](../operations/RUNBOOK.md) | Оперативная справка |
| 🔌 [Локальная коляска MCP](../specs/LOCAL-MCP-SIDECAR.md) | Инструменты файловой системы и написание конфигураций |