# 📐 ADR-0001: Agent-Native Workspace Foundation (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Ключевое архитектурное решение, сформировавшее структуру рабочего пространства монорепозитория.**---

## 📊 Status

✅**Принято**— текущее направление рабочей области и форма активного репозитория.---

## 🔍 Context

Omni Skills начинался как репозиторий, ориентированный на установку. Этого было достаточно для распространения содержимого SKILL.md, но недостаточно, чтобы предоставить агентам доступ к каталогу через собственные поверхности протокола.

Нам нужен был фонд, который мог бы поддержать:

| Требование | Протокол |
|:------------|:---------|
| 🌐 API HTTP-каталога только для чтения | ОТДЫХ |
| 🔌 Сервер MCP только для чтения | Протокол контекста модели |
| 🤖 Поверхность А2А, обращенная к агенту | Агент-агенту |
| 📂 Локальная установка колясок | Инструменты файловой системы |

**Критическое ограничение**. Избегайте повторного анализа файлов репозитория независимо в каждой новой службе.---

## ✅ Decision

Используйте**монорепозиторий, ориентированный на рабочую область**, с общим ядром каталога и пакетами для конкретных протоколов:

| Пакет | Цель |
|:--------|:--------|
| 📦 `омни-навыки` (корень) | Установщик CLI и сценарии репозитория |
| 🧠 `@omni-skills/catalog-core` | Совместная загрузка, поиск, сравнение, пакеты, планы установки |
| 🌐 `@omni-skills/server-api` | REST API только для чтения |
| 🔌 `@omni-skills/server-mcp` | MCP с режимом stdio/stream/sse + local Sidecar |
| 🤖 `@omni-skills/server-a2a` | Среда выполнения задачи A2A с картой агента, опросом, SSE и push-конфигурацией |### 📁 Shared Data Sources

Ядро каталога считывает сгенерированные артефакты из:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Результат | Влияние |
|:--------|:-------|
| 🔗**Контракт на общие данные**| API, MCP и A2A используют одни и те же артефакты |
| 🖥️**Единый интерфейс командной строки**| Один двоичный файл предоставляет установку, оболочку пользовательского интерфейса, API, MCP, A2A, диагностику и дым |
| 🧩**Изоляция протокола**| Новые поверхности повторяются без привязки к внутренним компонентам установщика |
| 🔌**Местная коляска**| Рабочий режим MCP с возможностью записи на основе списка разрешений и рецептов, учитывающих интересы клиента |
| 📦**Среда выполнения одного пакета**| Опубликованный пакет npm объединяет поверхности протокола, инструменты проверки и сгенерированные артефакты |---

## ⚠️ Negative Consequences

| Компромисс | смягчение последствий |
|:---------|:-----------|
| 🔄**Дублирование метаданных**| Сборка Python + среда выполнения JavaScript → в конечном итоге консолидация |
| 🏗️**Сложность А2А**| Теперь существует надежный жизненный цикл, но адаптеры координации добавляют глубины эксплуатации |
| 📦**Выравнивание каталога**| Выборочная установка требует синхронизации команд, манифестов и документов |
| 📋**Объедините пробелы в метаданных**| Пакеты могут опережать опубликованные навыки, что требует явных предупреждений об отсутствующих участниках |---

## ➡️ Follow-Up Items

| # | Действие | Статус |
|:--|:-------|:-------|
| 1️⃣ | Удаленная аутентификация MCP и ограничение скорости | ✅ Готово |
| 2️⃣ | Улучшено написание конфигурации MCP для конкретного клиента | ✅ Представляем сегодня контейнеры Claude, Cursor, Codex, Gemini, Kiro, VS Code и Dev |
| 3️⃣ | Подписанные артефакты выпуска или архивы для каждого навыка | ✅ Сегодня представлено принудительное применение CI в тегах выпуска |
| 4️⃣ | Среда выполнения задачи A2A → надежная оркестровка | ✅ Представлено сегодня с сохранением JSON/SQLite, внешними исполнителями, добровольной координацией аренды и дополнительной расширенной координацией Redis |
| 5️⃣ | Расширьте опубликованный каталог, чтобы получить более широкий охват | ✅ Сегодня представлены семь текущих стартовых пакетов |