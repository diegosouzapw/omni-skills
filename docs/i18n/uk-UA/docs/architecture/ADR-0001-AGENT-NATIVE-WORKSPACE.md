# 📐 ADR-0001: Agent-Native Workspace Foundation (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Ключове архітектурне рішення, яке сформувало структуру робочого простору monorepo.**---

## 📊 Status

✅**Прийнято**— поточний напрямок робочої області та форма активного сховища.---

## 🔍 Context

Omni Skills починався як репозиторій**спершу інсталятор**. Цього було достатньо для розповсюдження вмісту `SKILL.md`, але недостатньо для того, щоб надати агентам доступ до каталогу через внутрішні поверхні протоколу.

Нам потрібна була основа, яка могла б підтримувати:

| Вимога | Протокол |
|:------------|:---------|
| 🌐 API каталогу HTTP лише для читання | ВІДПОЧИНОК |
| 🔌 Сервер MCP лише для читання | Модель контекстного протоколу |
| 🤖 Поверхня A2A, орієнтована на агента | Агент-агенту |
| 📂 Місцеве встановлення колясок | Інструменти файлової системи |

**Критичне обмеження**: уникайте повторного аналізу файлів репо незалежно в кожній новій службі.---

## ✅ Decision

Використовуйте**орієнтоване на робочу область монорепо**зі спільним ядром каталогу та спеціальними пакетами протоколу:

| Пакет | Призначення |
|:--------|:--------|
| 📦 `omni-skills` (корінь) | Інсталятор CLI та сценарії репо |
| 🧠 `@omni-skills/catalog-core` | Спільне завантаження, пошук, порівняння, пакети, плани встановлення |
| 🌐 `@omni-skills/server-api` | REST API лише для читання |
| 🔌 `@omni-skills/server-mcp` | MCP із stdio/stream/sse + локальний режим попутної коляски |
| 🤖 `@omni-skills/server-a2a` | Середовище виконання завдань A2A з карткою агента, опитуванням, SSE та конфігурацією push |### 📁 Shared Data Sources

Ядро каталогу читає згенеровані артефакти з:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Результат | Вплив |
|:--------|:-------|
| 🔗**Договір про спільні дані**| API, MCP і A2A використовують однакові артефакти |
| 🖥️**Уніфікований CLI**| Один двійковий файл надає доступ до встановлення, оболонки інтерфейсу користувача, API, MCP, A2A, діагностики та диму |
| 🧩**Ізоляція протоколу**| Нові поверхні повторюються без зв’язку з внутрішніми елементами інсталятора |
| 🔌**Місцева коляска**| Працюючий режим MCP із можливістю запису за дозволеним списком із клієнтськими рецептами |
| 📦**Однопакетне середовище виконання**| Опублікований пакет npm разом містить поверхні протоколу, інструменти перевірки та згенеровані артефакти |---

## ⚠️ Negative Consequences

| Компроміс | Пом'якшення |
|:---------|:-----------|
| 🔄**Дублювання метаданих**| Збірка Python + середовище виконання JavaScript → зрештою консолідувати |
| 🏗️**Складність A2A**| Тепер існує довготривалий життєвий цикл, але координаційні адаптери додають робочої глибини |
| 📦**Вирівнювання каталогу**| Вибіркове встановлення вимагає синхронізації команд, маніфестів і документів |
| 📋**Групуйте прогалини в метаданих**| Пакети можуть випереджати опубліковані навички, вимагаючи явних попереджень про відсутність членів |---

## ➡️ Follow-Up Items

| # | Дія | Статус |
|:--|:-------|:-------|
| 1️⃣ | Віддалена автентифікація MCP і обмеження швидкості | ✅ Готово |
| 2️⃣ | Покращено написання конфігурації MCP для клієнта | ✅ Представте сьогодні для контейнерів Claude, Cursor, Codex, Gemini, Kiro, VS Code і Dev |
| 3️⃣ | Підписані артефакти випуску або архіви навичок | ✅ Представте сьогодні примусове виконання КІ на тегах випуску |
| 4️⃣ | Середовище виконання завдання A2A → надійна оркестровка | ✅ Представте сьогодні з постійністю JSON/SQLite, зовнішніми виконавцями, опціональною координацією оренди та додатковою розширеною координацією Redis |
| 5️⃣ | Розширте опублікований каталог для ширшого охоплення | ✅ Представте сьогодні поточні сім підібраних стартових пакетів |