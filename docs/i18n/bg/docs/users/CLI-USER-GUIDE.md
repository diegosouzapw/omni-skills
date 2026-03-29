# 🧭 Omni Skills CLI User Guide (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Пълната публична CLI повърхност, доставена от `omni-skills`.**

Използвайте това ръководство, когато искате да:

| Цел | Командна зона |
|:-----|:-------------|
| 📥 Инсталирайте умения или пакети | [Инсталационни потоци](#3️⃣-install-flows) |
| 🔎 Търсене в каталога | [Откриване на каталог](#4️⃣-откриване на каталог) |
| 🔌 Конфигурирайте MCP клиенти | [MCP Client Config](#5️⃣-mcp-client-config) |
| 🖥️ Стартирайте MCP, API или A2A услуги | [MCP сървър](#6️⃣-mcp-сървър) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Използвайте обвивката на визуалния терминал | [Визуална обвивка](#9️⃣-visual-shell) |
| 🧪 Изпълнете диагностика или предполет | [Диагностика](#🔟-diagnostics-and-preflight) |---

## 1️⃣ Install and Entry Modes

Инсталирайте с `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Контекст | Какво се случва |
|:--------|:------------|
| 🖥️ TTY + без аргументи | Отваря потока**насочено инсталиране**|
| ⚙️ Без TTY + без аргументи | Неинтерактивно инсталиране в `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Маркова**Ink визуална обвивка**|
| 📝 `npx omni-skills ui --text` | Readline**резервен текст**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Команда | Описание |
|:--------|:-----------|
| `ui` | 🎨 Визуален терминален център |
| `намери [заявка]` | 🔎 Откриване на каталог |
| `прекатегоризиране` | 🏷️ Управление на таксономията |
| `инсталиране [флагове]` | 📥 Инсталиране на умение/пакет |
| `config-mcp` | 🔌 MCP клиентска конфигурация |
| `mcp <stdio\|stream\|sse>` | 🔌 Режими на MCP сървър |
| `api` | 🌐 API за каталог |
| „a2a“ | 🤖 Време за изпълнение A2A |
| `дим` | 🧪 Пускане преди полет |
| `публикувай-проверка` | 📦 Проверка на публикуване на пакет |
| `лекар` | 🩺 Диагностика на околната среда |
| `помощ` | ❓ Препратка към команда |---

## 3️⃣ Install Flows

### Бърз старт

```bash
npx omni-skills
npx omni-skills install --guided
```

> Насочваният поток ви позволява да изберете:**целеви клиент**→**пакет или умение**→**персонализиран път**→**преглед преди изпълнение**### 🎯 Single Skill

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
| `--антигравитация` | 🟣 Антигравитация *(по подразбиране)* |
| `--клод` | 🟢 Клод Код |
| `--курсор` | 🔵 Курсор |
| `--codex` | 🔴 Codex CLI |
| `--близнаци` | 🟡 Gemini CLI |
| `--киро` | 🟠 Киро |
| `--отворен код` | ⚪ OpenCode |

> Целева инсталация по подразбиране (неинтерактивна): `~/.gemini/antigravity/skills`---

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

| Флаг | Цел |
|:-----|:--------|
| `--категория` | Филтриране по таксономична категория |
| `--инструмент` | Филтриране по поддържан инструмент |
| `--риск` | Филтриране по ниво на риск |
| `--sort` | Сортиране на резултатите (напр. „качество“) |
| `--поръчка` | Ред на сортиране |
| `--минимално качество` | Минимален качествен резултат |
| `--min-best-practices` | Минимален резултат за най-добри практики |
| `--мин-ниво` | Минимално ниво на падеж |
| `--min-security` | Минимален резултат за сигурност |
| `--статус на валидиране` | Филтриране по състояние на валидиране |
| `--състояние-защита` | Филтриране по състояние на сигурност |---

## 5️⃣ MCP Client Config

Използвайте `config-mcp`, за да прегледате или напишете клиентска MCP конфигурация.### 📋 List Targets

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
<резюме>🔌 <strong>Клиентска повърхност с възможност за конфигуриране</strong></резюме>

| Клиент | Цели |
|:-------|:--------|
| Клод | Настройки и цели на работния плот |
| Курсор | Потребител и работно пространство |
| Кодекс | TOML конфигурация |
| Близнаци | Потребител и работно пространство |
| Антигравитация | Потребителска конфигурация |
| OpenCode | Потребител и работно пространство |
| Клайн | Първокласна цел |
| GitHub Copilot CLI | Потребител и репо |
| Код на килограм | Потребител, проект и работно пространство |
| Киро | Потребител и работно пространство |
| Зед | Работно пространство |
| VS код | Потребител, работно пространство и контейнер за разработка |
| Продължи | Работно пространство YAML |
| Джуни | Проект и потребител |
| Уиндсърф | Потребителска конфигурация |</details>

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

>**Local sidecar**добавя: откриване на клиент, предварителен преглед на инсталиране, потоци за инсталиране/премахване и писане на MCP конфигурация.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Маршрут | Цел |
|:------|:--------|
| `GET /healthz` | Здравна проверка |
| `GET /openapi.json` | Спецификация на OpenAPI |
| `GET /v1/skills` | Избройте всички умения |
| `GET /v1/търсене` | Търсене в каталога |
| `GET /v1/skills/:id/archives` | Списък на архиви за умение |
| `GET /v1/skills/:id/download/archive?format=zip` | Изтеглете архив с умения |
| `GET /v1/skills/:id/download/archive/checksums` | Изтегляне на контролни суми |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Характеристика | Статус |
|:--------|:-------|
| 🔎 Откриване на задачи | ✅ |
| 📋 Предаване на план за инсталиране | ✅ |
| 🔄 Анкета | ✅ |
| 📡 Поточно предаване | ✅ |
| ❌ Анулиране | ✅ |
| 🔔 Конфигурация за насочени известия | ✅ |
| 💾 Постоянство | Памет, JSON и SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Функции

| Характеристика | Описание |
|:--------|:-----------|
| 🧭 Насочвано инсталиране | Изберете клиент или потребителски път |
| 🔎 Търсене + инсталиране | Не е необходимо запомняне на флаг |
| 🔌 MCP конфигурация | Преглед и запис на потоци |
| 🖥️ Стартиране на услуга | MCP, API и A2A управлявано стартиране |
| 🕐 Скорошни | Скорошни инсталации и повторно стартиране на услуги |
| ⭐ Любими | Запазени умения и пакети |
| 💾 Предварителни настройки | Именувани предварителни настройки за инсталиране и обслужване |

>**Път на състоянието:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Проверява: състояние на репо, състояние на локално инсталиране, наличност по време на изпълнение и проблеми със средата.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Валидира: компилация, тестове, извеждане на пакети, стартиране на услугата, покритие на скенера и пакетиране на пускане.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Персона | Команда | Цел |
|:-----------|:--------|:--------|
| 🆕 Нов потребител | `npx omni-skills` | Насочвано първо инсталиране |
| 🔧 Оператор | `npx omni-skills config-mcp --list-targets` | Конфигуриране на локален MCP |
| 🔧 Оператор | `npx omni-skills mcp поток --local` | Стартирайте локална кош |
| 📦 Поддържащ | `npx omni-skills smoke` | Валидирайте издание |
| 🔍 Опитен потребител | `npx omni-skills find security --sort quality --min-quality 95` | Първо намерете най-доброто умение |---

## 📖 Related Documents

| Док | Какво обхваща |
|:----|:--------------|
| 🚀 [Първи стъпки](./GETTING-STARTED.md) | Инсталирайте и проверете за по-малко от 2 минути |
| 📗 [Ръководство за използване](./USAGE.md) | Всички CLI команди, шаблони и режими |
| 📦 [Пакети](./BUNDLES.md) | Подбрани колекции от умения |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Оперативна справка |
| 🔌 [Local MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Инструменти за файлова система и писане на конфигурация |