# 🧠 Omni Skills (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Каталог навичок, який встановлюється сам.**<br/>
CLI · API · MCP · A2A — усе з однієї команди `npx`.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Встановіть за 1 хв](#-інсталяція) · [🛠️ Виберіть свій інструмент](#-choose-your-tool) · [📖 Посібник CLI](docs/users/CLI-USER-GUIDE.md) · [📦 Пакети](docs/users/BUNDLES.md) · [🔌 Runtime](#-runtime-surfaces) · [💡 Чому Omni Skills](#-why-omni-skills)</div>

---

<div align="center">

### Огляд

</div>

| | Метричний | Значення |
|:--|:-------|:------|
| 📦 |**Опубліковані навички**| `32` у 15 активних категоріях |
| 🎯 |**Пакети**| `7` повністю підтримані пакети |
| 🖥️ |**Встановити клієнти**| `7` Помічники кодування ШІ з можливістю встановлення |
| 🔌 |**Клієнти MCP**| `16` Клієнти з можливістю конфігурації MCP |
| 🔐 |**Відповідний результат**| `32` покращені англійські похідні в `skills_omni/` |
| 📋 |**Поточний випуск**| `v0.1.2` |---

## Швидкий старт

>**Шукали навички кодування штучного інтелекту, навички Claude Code, навички Cursor, навички Codex CLI, навички Gemini CLI, навички Antigravity або бібліотеки `SKILL.md`, які можна встановити?**
> Ви в правильному місці.### 1️⃣ What is this?

Omni Skills — це**встановлюваний каталог навичок і середовище виконання**для помічників кодування ШІ. За своєю суттю це загальнодоступне сховище багаторазових підручників `SKILL.md`, але на відміну від простих колекцій навичок, репо**є**рівнем розповсюдження та виконання.

<подробиці>
<summary>📋 <strong>Що включено</strong></summary>

| Компонент | Опис |
|:----------|:----------|
| 🧠**Навички**| Підібрані підручники на основі `SKILL.md` для помічників ШІ |
| 📦**Маніфести**| Згенеровані маніфести JSON, пакети та архіви |
| 🧭**Керівне встановлення**| Потоки встановлення інтерактивного TTY та візуального терміналу |
| 🌐**API каталогу**| HTTP API лише для читання для пошуку, виявлення та завантажень |
| 🔌**MCP-сервер**| Інструменти виявлення, рекомендації та конфігурації з урахуванням клієнта |
| 🤖**A2A Runtime**| Оркестровка завдань між агентами |
| ✨**Конвеєр вдосконалення**| Приватний покращувач публікує підібрані англійські похідні в `skills_omni/` |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Використовуйте `@brainstorming`, щоб спланувати SaaS MVP."*
>
> 💬 *"Використовуйте `@api-design`, щоб переглянути цей дизайн кінцевої точки."*
>
> 💬 *"Використовуйте `@debugging`, щоб ізолювати цю регресію."*### 5️⃣ Start with a bundle

| 🎯 Мета | Пакет | Команда |
|:---------|:-------|:--------|
| Загальне машинобудування | `необхідне` | `npx omni-skills --bundle basics` |
| Доставка продукту + програми | `повний стек` | `npx omni-skills --bundle full-stack` |
| Проектування систем | `дизайн` | `npx omni-skills --bundle design` |
| Огляд безпеки | `безпека` | `npx omni-skills --bundle security` |
| Інфра та реліз | `devops` | `npx omni-skills --bundle devops` |
| LLM програми | `ai-інженер` | `npx omni-skills --bundle ai-engineer` |
| Обслуговування OSS | `oss-maintainer` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Перш ніж порівнювати пакети чи вибирати шлях встановлення, розуміння цих п’яти будівельних блоків допоможе:

| Концепція | Що це означає |
|:--------|:-------------|
| 🧠**Навички**| Багаторазові підручники `SKILL.md`, які навчають помічника, як правильно виконувати робочий процес |
| 📦**Артефакти каталогу**| Згенеровані вихідні дані JSON і архіви, що дозволяють шукати, порівнювати, завантажувати та встановлювати |
| 🔌**Конфігурація MCP**| Конфігурація на стороні клієнта для помічників для виявлення навичок Omni за допомогою інструментів MCP |
| 🤖**A2A Runtime**| Організація між агентами для виявлення, рекомендацій і передачі плану встановлення |
| ✨**Відповідний результат**| `skills_omni/` — покращена поверхня, що підтримується Omni, окрема від вихідного входу |

>**📝 Нативна/підібрана політика:**
> - `skills/` допускає початкове надходження будь-якою мовою
> - `skills_omni/` завжди курується та публікується англійською мовою
> - `skills_omni/` є односторонньою поверхнею і не повертається до рідного споживання---

## 💡 Why Omni Skills

>**Не просто «ще одне сховище з навичками в папках».**
> Omni Skills має сильніший контракт і ширшу робочу поверхню.

| Якщо ви хочете… | 📁 Типове сховище навичок | ✨ Усі навички |
|:-------------|:---------------------|:--------------|
| Встановити в справжнього помічника | Копіювання вручну або спеціальний сценарій | `npx omni-skills`, кероване встановлення, візуальний інтерфейс користувача, вибіркові `--skill` і `--bundle` |
| Навички пошуку та порівняння | Перегляд уцінки вручну | Створений каталог, фільтрація, планування пакетів, пошук, порівняння та рекомендація |
| Використовуйте однакові дані в усіх інструментах | Окрема логіка для кожного інструменту | Спільні маніфести та каталог для CLI, API, MCP і A2A |
| Налаштування клієнтів MCP | Ручне редагування файлів | `config-mcp`, локальний попередній перегляд, згенеровані рецепти та записи в білому списку |
| Довірчі випуски | Найкраща упаковка | Контрольні суми, підписані архіви, перевірка сканера, випуск КІ та публікація перед друком |
| Куратор споживання спільноти | Будь-яка земля залишається як є | Рідне споживання в `skills/`, підібрані англійські похідні в `skills_omni/` з посиланням на авторство |---

## 🖥️ Compatibility and Invocation

Ці навички відповідають моделі `SKILL.md` і можуть використовуватися як звичайне сховище, але пакет також встановлює та налаштовує їх на широкій поверхні:

>**7**клієнтів із можливістю встановлення ·**16**клієнтів із можливістю конфігурації MCP### 🎯 Install-Capable Clients

| Інструмент | Тип | Приклад виклику | Інсталювати шлях |
|:-----|:-----|:-------------------|:-------------|
| 🟢**Клод Код**| CLI | `Використовуйте мозковий штурм для планування функції` | `~/.claude/skills` |
| 🔵**Курсор**| IDE | `@brainstorming допоможи мені спланувати функцію` | `~/.cursor/skills` |
| 🟡**Gemini CLI**| CLI | `Використовуйте мозковий штурм для планування функції` | `~/.gemini/skills` |
| 🔴**Codex CLI**| CLI | `Використовуйте мозковий штурм для планування функції` | `~/.codex/skills` |
| 🟠**Кіро**| CLI / IDE | `Використовуйте мозковий штурм для планування функції` | `~/.kiro/skills` |
| 🟣**Антигравітація**| IDE | `Використовуйте @brainstorming для планування функції` | `~/.gemini/antigravity/skills` |
| ⚪**OpenCode**| CLI | `запуск відкритого коду @brainstorming` | `<робоча область>/.opencode/skills` |

<подробиці>
<summary>🔌 <strong>Ширше покриття конфігурації MCP (16 клієнтів)</strong></summary>

Ці цілі є частиною підтримуваної поверхні конфігурації MCP, навіть якщо вони не є цілями встановлення для каталогів навичок:

| Клієнт або поверхня | Тип підтримки | Примітки |
|:------------------|:------------|:------|
| Налаштування Claude і робочий стіл | Конфігурація MCP | Налаштування, робочий стіл і потоки з урахуванням проекту |
| Код VS | Конфігурація MCP | Користувач, робоча область, інсайдери та цільові контейнери для розробників |
| Близнюки | Конфігурація MCP | Налаштування користувача та робочої області |
| Клайн | Конфігурація MCP | Цільова конфігурація першого класу |
| GitHub Copilot CLI | Конфігурація MCP | Цілі конфігурації користувача та сховища |
| Продовжити | Конфігурація MCP | Робоча область Генерація YAML |
| Віндсерфінг | Конфігурація MCP | Ціль конфігурації користувача |
| Зед | Конфігурація MCP | Ціль конфігурації робочої області |
| Гусак | Конфігурація MCP | Ціль конфігурації користувача зі згенерованим рецептом |
| Код кіло | Конфігурація MCP | Цілі користувача, проекту та робочої області |
| Джуні | Конфігурація MCP | Цілі конфігурації проекту та користувача |</details>

---

## Встановити

<таблиця>
<tr>
<td width="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Інструмент | Встановити команду | Перше використання |
|:-----|:--------------|:----------|
| 🟢 Клод Код | `npx omni-skills --claude` | `Використовуйте мозковий штурм для планування функції` |
| 🔵 Курсор | `npx omni-skills --cursor` | `@brainstorming допоможи мені спланувати функцію` |
| 🟡 Gemini CLI | `npx omni-skills --gemini` | `Використовуйте мозковий штурм для планування функції` |
| 🔴 Codex CLI | `npx omni-skills --codex` | `Використовуйте мозковий штурм для планування функції` |
| 🟣 Антигравітація | `npx omni-skills --antigravity` *(за замовчуванням)* | `Використовуйте @brainstorming для планування функції` |
| 🟠 Кіро | `npx omni-skills --kiro` | `Використовуйте мозковий штурм для планування функції` |
| ⚪ OpenCode | `npx omni-skills --opencode` | `запуск відкритого коду @brainstorming` |
| 📂 Спеціальний шлях | `npx omni-skills --path ./my-skills` | Залежить від вашого інструменту |

> 📖**Не знаєте, з чого почати?**
> - [🚀 Початок роботи](docs/users/GETTING-STARTED.md) — установіть і перевірте менш ніж за 2 хвилини
> - [🧭 Посібник користувача CLI](docs/users/CLI-USER-GUIDE.md) — повний довідник команд
> - [📗 Посібник із використання](docs/users/USAGE.md) — підказки, шаблони та режими виконання---

## 🔌 Runtime Surfaces

Omni Skills — це не лише бібліотека навичок. Він надає**чотири робочі поверхні**, які використовують той самий згенерований каталог:

| Поверхня | Держава | Що він робить | Приклад |
|:--------|:------|:-------------|:--------|
| 🖥️**CLI**| ✅ В наявності | Пошук, інсталяція, діагностика, візуальний інтерфейс користувача, служби завантаження, димові перевірки | `npx omni-skills doctor` |
| 🌐**API каталогу**| ✅ В наявності | Каталог лише для читання, пошук, пакети, порівняння, плани встановлення, завантаження | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ В наявності | Виявлення, рекомендація, попередній перегляд інсталяції, локальна допомога, потоки конфігурації | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ В наявності | Життєвий цикл завдання, передача, опитування, потокове передавання, скасування, збереження | `npx omni-skills a2a --port 3335` |

<подробиці>
<summary>🖥️ <strong>Візуальна оболонка та команди операторів</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<подробиці>
<summary>🔌 <strong>Транспорти та конфігурація MCP</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Метричний | Граф |
|:-------|:------|
| 🧠 Опубліковані навички |**32**|
| 📂 Активні категорії |**15**|
| 📦 Пакети з повною підтримкою |**7**|
| ✨ Підібрані похідні |**32**у `skills_omni/` |### 📦 Bundle Availability

| Пакет | Навички | Члени |
|:-------|:-------|:--------|
| 🧰 `необхідне` |**4/4**✅ | `знайти навички` · `мозковий штурм` · `архітектура` · `налагодження` |
| 🌐 `повний стек` |**5/5**✅ | `frontend-design` · `api-design` · `database-design` · `omni-figma` · `auth-flows` |
| 🎨 `дизайн` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `accessibility-audit` · `design-token-governance` |
| 🛡️ `безпека` |**4/4**✅ | `аудитор безпеки` · `сканер вразливостей` · `відповідь на інцидент` · `моделювання загроз` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observability-review` · `release-engineering` |
| 🤖 `ai-інженер` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracts` · `model-serving` |
| 🔧 `oss-maintainer` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `documentation` |### ✨ Native Intake → Curated Output

| Поверхня | Призначення | Мова |
|:--------|:--------|:---------|
| 📥 `навички/` | Нативний прийом | Будь-яка мова |
| ✨ `skills_omni/` | Підібраний вихід, що підтримується Omni | Завжди англійською |

>**ℹ️**Зміни рідних навичок повторно обробляються приватним розширювачем і оновлюються в підібраній базовій лінії. Це робить `skills_omni/`**обслуговуваною поверхнею каталогу**, а не другою копією.---

## 🛡️ Security and Release Posture

> Omni Skills пропонує потужнішу історію випуску та перевірки, ніж звичайне сховище уцінки.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<подробиці>
<summary>📋 <strong>Що конвеєр перевіряє</strong></summary>

- ✅ Перевірка навичок і генерація метаданих
- ✅ Інструмент нормалізації таксономії та перекатегоризації
- ✅ Створення каталогу та архіву
- ✅ Автоматизовані тести
- ✅ Шляхи завантаження API, MCP і A2A
- ✅ Перевірка архіву
- ✅ Пакет перед польотом з `npm pack --dry-run`</details>

<подробиці>
<summary>🔐 <strong>Відпустіть позу</strong></summary>

| Контроль | Опис |
|:--------|:-----------|
| 🔒 Контрольні суми SHA-256 | Маніфести контрольної суми для всіх архівів |
| ✍️ Підписані артефакти | Відокремлені підписи на артефактах випуску |
| 🤖 із застосуванням CI | Перевірка випуску в CI перед публікацією |
| 🦠 Ворота сканера | Потік випуску ClamAV і VirusTotal |
| 📦 Випуск GitHub | Автоматизоване створення випуску GitHub |
| 📋 публікація npm | Лише з перевіреного архіву |
| 🔄 Автоматичний випуск | За кваліфікаційним навиком зливається з `основним` |

**Автоматичне звільнення запускається лише тоді, коли об’єднання змінюється:**
- `навички/*/**`
- `skills_omni/*/**`
- `data/bundles.json`

Зміни лише в документах**не**ініціюють публікацію пакета.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Док | Що ви дізнаєтеся |
|:----|:----------------|
| 🚀 [Початок роботи](docs/users/GETTING-STARTED.md) | Встановіть, перевірте та запустіть менш ніж за 2 хвилини |
| 🧭 [Посібник користувача CLI](docs/users/CLI-USER-GUIDE.md) | Повний довідник команд і шаблони реального світу |
| 📗 [Посібник із використання](docs/users/USAGE.md) | Команди CLI, режими встановлення, час виконання та конфігурація MCP |
| 📦 [Пакети](docs/users/BUNDLES.md) | Підібрані пакети та доступність |
| 📚 [Каталог](docs/CATALOG.md) | Автоматично створений каталог опублікованих навичок |
| 🔧 [Системний Runbook](docs/operations/RUNBOOK.md) | Створюйте, обслуговуйте, захищайте та усувайте неполадки |### 🏗️ For Architects

| Док | Що ви дізнаєтеся |
|:----|:----------------|
| 🗺️ [Дорожня карта Agent-Native](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Еволюція архітектури та інші райони |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Базове рішення монорепо |
| 🔬 [Аналіз кодової бази](docs/architecture/CODEBASE-ANALYSIS.md) | Склад середовища виконання та межі системи |
| 🌐 [API каталогу](docs/specs/CATALOG-API.md) | Кінцеві точки HTTP, фільтрація, керування та завантаження |
| 🧩 [Керований інсталятор CLI](docs/specs/CLI-GUIDED-INSTALLER.md) | Поведінковий контракт для керованого монтажника |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Візуальна оболонка Ink і модель стану |
| 🔌 [Локальний MCP Sidecar](docs/specs/LOCAL-MCP-SIDECAR.md) | Інструменти файлової системи та модель білого списку |
| 📊 [Матриця підтримки клієнтів](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Повна довідка про клієнта та автора |
| 🏷️ [Класифікація навичок](docs/specs/SKILL-CLASSIFICATION.md) | Таксономія, оцінка та метадані |
| 🛡️ [Перевірка безпеки](docs/specs/SECURITY-VALIDATION.md) | Сканери, архіви та підписи |
| 📋 [Маніфест навичок](docs/specs/SKILL-MANIFEST.md) | Машинозчитуваний формат маніфесту |### 🤝 For Contributors

| Док | Що ви дізнаєтеся |
|:----|:----------------|
| 📝 [Посібник зі співробітництва](CONTRIBUTING.md) | Робочий процес репо та PR очікування |
| 🧾 [Робочий процес Skill PR](docs/contributors/SKILL-PR-WORKFLOW.md) | Рідне споживання, обробка підсилювача, очікування рецензентів |
| 📄 [Шаблон навичок](docs/contributors/SKILL-TEMPLATE.md) | Стартер `SKILL.md` з фронтматером і структурою |
| 🔬 [Анатомія навичок](docs/contributors/SKILL-ANATOMY.md) | Структура та очікування якості |
| ✅ [Індикатор якості](docs/contributors/QUALITY-BAR.md) | Критерії прийняття |
| 🏆 [Збірник найкращих результатів](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Що сприяє високим результатам |---

## 🗂️ Repository Layout

| Шлях | Призначення |
|:-----|:--------|
| 📂 `навички/` | Канонічні авторські навички та рідне споживання |
| ✨ `skills_omni/` | Підібрані покращені похідні, які підтримуються Omni |
| 📖 `документи/` | Документація щодо користувачів, учасників, архітектури, операцій і специфікацій |
| 📦 `dist/` | Створені маніфести, пакети, каталог і архіви |
| 📁 `дані/` | Визначення пакетів і статичні допоміжні дані |
| 🧠 `packages/catalog-core/` | Час виконання спільного каталогу |
| 🌐 `packages/server-api/` | HTTP API лише для читання |
| 🔌 `packages/server-mcp/` | Сервер MCP і локальний коляска |
| 🤖 `packages/server-a2a/` | Середа виконання A2A та оркестровка завдань |
| 🖥️ `tools/bin/` | Точки входу CLI |
| 📚 `tools/lib/` | Інсталятор та помічники інтерфейсу користувача |
| ⚙️ `інструменти/сценарії/` | Сценарії перевірки, створення, випуску та тестування |

>**ℹ️**`dist/` навмисно має версії, оскільки згенеровані артефакти є частиною контракту на встановлення, API, MCP, A2A, smoke і випуску.---

## 🤝 Contributing

Omni Skills приймає вихідні початкові навички в розділі `skills/`.

| Правило | Подробиці |
|:-----|:--------|
| 📥 Рідний прийом | Може бути грубим, написаним будь-якою мовою |
| ✨ Підібраний результат | `skills_omni/` зарезервовано для автоматизованих похідних Omni |
| 🚫 Редагування вручну | Загальнодоступні ручні редагування `skills_omni/` відхиляються |
| 🔄 Повторна обробка | Приватний покращувач повторно обробляє власні зміни та оновлює підібрану базову лінію |

> 📖**Почніть із:**[Посібник зі сприяння](CONTRIBUTING.md) · [Робочий процес Skill PR](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Тип | Ліцензія |
|:-----|:--------|
| 💻 Код та інструменти | [Ліцензія MIT](ЛІЦЕНЗІЯ) |
| 📝 Документація та вміст навичок | [CC BY 4.0](ЛІЦЕНЗІЯ-ВМІСТ) |---

<div align="center">

**Створено за допомогою 🧠 командою Omni Skills**

[⭐ Це репо зірочкою](https://github.com/diegosouzapw/omni-skills) · [🐛 Повідомити про помилку](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Обговорення](https://github.com/diegosouzapw/omni-skills/discussions)</div>
