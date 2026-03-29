# 📐 ADR-0001: Agent-Native Workspace Foundation (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Ключовото архитектурно решение, което оформи структурата на работното пространство на monorepo.**---

## 📊 Status

✅**Прието**— текуща посока на работното пространство и форма на активното хранилище.---

## 🔍 Context

Omni Skills стартира като**инсталатор-първо**хранилище. Това беше достатъчно, за да разпространи съдържанието на `SKILL.md`, но не достатъчно, за да изложи каталога на агенти чрез повърхности, базирани на протокола.

Имахме нужда от фондация, която да поддържа:

| Изискване | Протокол |
|:------------|:---------|
| 🌐 API за HTTP каталог само за четене | ПОЧИВКА |
| 🔌 MCP сървър само за четене | Протокол на моделния контекст |
| 🤖 A2A повърхност, обърната към агента | Агент-към-агент |
| 📂 Локално инсталиране на кошове | Инструменти за файлова система |

**Критично ограничение**: Избягвайте повторно анализиране на репо файлове независимо във всяка нова услуга.---

## ✅ Decision

Приемете**ориентирано към работното пространство monorepo**със споделено ядро на каталога и специфични за протокола пакети:

| Пакет | Цел |
|:--------|:--------|
| 📦 `omni-skills` (корен) | CLI инсталатор и репо скриптове |
| 🧠 `@omni-skills/catalog-core` | Споделено зареждане, търсене, сравнение, пакети, планове за инсталиране |
| 🌐 `@omni-skills/server-api` | REST API само за четене |
| 🔌 `@omni-skills/server-mcp` | MCP със stdio/stream/sse + локален страничен режим |
| 🤖 `@omni-skills/server-a2a` | Време за изпълнение на задача A2A с карта на агент, анкета, SSE и конфигурация за натискане |### 📁 Shared Data Sources

Ядрото на каталога чете генерирани артефакти от:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Резултат | Въздействие |
|:--------|:-------|
| 🔗**Договор за споделени данни**| API, MCP и A2A използват едни и същи артефакти |
| 🖥️**Unified CLI**| Един двоичен файл разкрива инсталация, UI shell, API, MCP, A2A, диагностика и дим |
| 🧩**Изолация на протокола**| Новите повърхности се повтарят без свързване с вътрешните части на инсталатора |
| 🔌**Местен кош**| Работещ MCP режим с възможност за запис зад списък с разрешени, с клиентски рецепти |
| 📦**Среда за изпълнение на един пакет**| Публикуваният npm пакет носи заедно повърхностите на протокола, инструментите за валидиране и генерираните артефакти |---

## ⚠️ Negative Consequences

| Компромис | Смекчаване |
|:---------|:-----------|
| 🔄**Дублиране на метаданни**| Изграждане на Python + среда за изпълнение на JavaScript → евентуално консолидиране |
| 🏗️**Сложност A2A**| Вече съществува издръжлив жизнен цикъл, но координационните адаптери добавят оперативна дълбочина |
| 📦**Подреждане на каталога**| Селективното инсталиране изисква команди, манифести и документи, за да останат синхронизирани |
| 📋**Групиране на пропуски в метаданни**| Пакетите могат да изпреварят публикуваните умения, като изискват изрични предупреждения за липсващи членове |---

## ➡️ Follow-Up Items

| # | Действие | Статус |
|:--|:-------|:-------|
| 1️⃣ | Отдалечено MCP удостоверяване и ограничаване на скоростта | ✅ Готово |
| 2️⃣ | Подобрено писане на специфични за клиента MCP конфигурации | ✅ Представяне днес за Claude, Cursor, Codex, Gemini, Kiro, VS Code и Dev Containers |
| 3️⃣ | Подписани артефакти за освобождаване или архиви за всяко умение | ✅ Представяне днес с прилагане на CI на етикети за освобождаване |
| 4️⃣ | Време за изпълнение на задачи A2A → трайна оркестрация | ✅ Представяне днес с постоянство JSON/SQLite, външни изпълнители, координиране на лизинг по избор и опционална разширена координация на Redis |
| 5️⃣ | Разширете публикувания каталог за по-широко покритие на пакета | ✅ Представяне днес за текущите седем подбрани стартови пакета |