# 🧠 Omni Skills (Български)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Каталогът с умения, който се инсталира сам.**<br/>
CLI · API · MCP · A2A — всички от една команда `npx`.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Инсталирайте за 1 минута](#-инсталация) · [🛠️ Изберете своя инструмент](#-choose-your-tool) · [📖 Ръководство за CLI](docs/users/CLI-USER-GUIDE.md) · [📦 Пакети](docs/users/BUNDLES.md) · [🔌 Време за изпълнение](#-runtime-surfaces) · [💡 Защо Omni Skills](#-why-omni-skills)</div>

---

<div align="center">

### Преглед

</div>

| | Метрика | Стойност |
|:--|:-------|:------|
| 📦 |**Публикувани умения**| `32` в 15 активни категории |
| 🎯 |**Пакети**| `7` напълно обезпечени подбрани пакети |
| 🖥️ |**Инсталирайте клиенти**| `7` Помощници за кодиране на AI с възможност за инсталиране |
| 🔌 |**MCP клиенти**| `16` Клиенти с възможност за конфигурация на MCP |
| 🔐 |**Подбран резултат**| `32` подобрени английски производни в `skills_omni/` |
| 📋 |**Текуща версия**| `v0.1.2` |---

## Бърз старт

>**Търсите умения за програмиране с изкуствен интелект, умения за Claude Code, умения за курсор, Codex CLI умения, Gemini CLI умения, умения за антигравитация или инсталируеми библиотеки `SKILL.md`?**
> Вие сте на правилното място.### 1️⃣ What is this?

Omni Skills е**каталог с умения за инсталиране и среда за изпълнение**за асистенти за кодиране на AI. В основата си това е публично хранилище на книги за игра `SKILL.md` за многократна употреба — но за разлика от обикновените колекции от умения, репото**е**слоя за разпространение и изпълнение.

<подробности>
<резюме>📋 <strong>Какво е включено</strong></резюме>

| Компонент | Описание |
|:----------|:-----------|
| 🧠**Умения**| Подбрани книги-игри, базирани на `SKILL.md`, за AI помощници |
| 📦**Манифести**| Генерирани JSON манифести, пакети и архиви |
| 🧭**Насочвано инсталиране**| Потоци за инсталиране на интерактивен TTY и визуален терминал |
| 🌐**API на каталога**| HTTP API само за четене за търсене, откриване и изтегляния |
| 🔌**MCP сървър**| Откриване, препоръки и инструменти за конфигурация, ориентирани към клиента |
| 🤖**A2A Runtime**| Оркестрация на задачи от агент към агент |
| ✨**Тръбопровод за подобряване**| Private Enhancer публикува подбрани английски производни в `skills_omni/` |</details>

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

> 💬 *"Използвайте `@brainstorming`, за да планирате SaaS MVP."*
>
> 💬 *"Използвайте `@api-design`, за да прегледате този дизайн на крайна точка."*
>
> 💬 *"Използвайте `@debugging`, за да изолирате тази регресия."*### 5️⃣ Start with a bundle

| 🎯 Цел | Пакет | Команда |
|:---------|:-------|:--------|
| Общо инженерство | `основни неща` | `npx omni-skills --bundle basics` |
| Доставка на продукт + приложение | `пълен стек` | `npx omni-skills --bundle full-stack` |
| Системи за проектиране | `дизайн` | `npx omni-skills --bundle design` |
| Преглед на сигурността | `сигурност` | `npx omni-skills --bundle security` |
| Инфра и освобождаване | `devops` | `npx omni-skills --bundle devops` |
| LLM приложения | `ai-инженер` | `npx omni-skills --bundle ai-engineer` |
| OSS поддръжка | `oss-maintainer` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Преди да сравните пакети или да изберете път за инсталиране, разбирането на тези пет градивни блока помага:

| Концепция | Какво означава |
|:--------|:-------------|
| 🧠**Умения**| Книги за игра `SKILL.md` за многократна употреба, които учат асистент как да изпълнява добре работния процес |
| 📦**Каталожни артефакти**| Генерирани JSON и архивни изходи, позволяващи търсене, сравнение, изтегляне и инсталиране |
| 🔌**MCP Config**| Конфигурация от страна на клиента за асистенти за откриване на Omni Skills чрез MCP инструменти |
| 🤖**A2A Runtime**| Оркестрация от агент към агент за откриване, препоръчване и предаване на план за инсталиране |
| ✨**Подбран резултат**| `skills_omni/` — подобрената повърхност, поддържана от Omni, отделна от естествения прием нагоре |

>**📝 Родна/подбрана политика:**
> - `skills/` приема роден прием нагоре по веригата на всеки език
> - `skills_omni/` винаги се подготвя и публикува на английски език
> - `skills_omni/` е еднопосочна повърхност и не се връща обратно към естествения прием---

## 💡 Why Omni Skills

>**Не просто „още едно хранилище с умения в папки.“**
> Omni Skills има по-силен договор и по-широка повърхност за изпълнение.

| Ако искате… | 📁 Репо типични умения | ✨ Омни умения |
|:-------------|:-----------------------|:--------------|
| Инсталирайте в истински асистент | Ръчно копиране или персонализиран скрипт | `npx omni-skills`, ръководено инсталиране, визуален потребителски интерфейс, селективен `--skill` и `--bundle` |
| Умения за търсене и сравняване | Преглед на маркдаун ръчно | Генериран каталог, филтриране, пакетно планиране, търсене, сравнение и препоръка |
| Използвайте едни и същи данни в инструментите | Отделна логика за инструмент | Споделени манифести и каталог за CLI, API, MCP и A2A |
| Конфигуриране на MCP клиенти | Ръчно редактиране на файлове | `config-mcp`, местни предварителни прегледи, генерирани рецепти и разрешени записи |
| Доверителни издания | Най-доброто опаковане | Контролни суми, подписани архиви, проверка на скенер, освобождаване на CI и публикуване преди полет |
| Курирайте приема на общността | Каквато и да е земя, остава такава, каквато е | Приемане на роден език в `skills/`, подбрани английски производни в `skills_omni/` с приписване |---

## 🖥️ Compatibility and Invocation

Тези умения следват модела `SKILL.md` и могат да се използват като нормално хранилище, но пакетът също ги инсталира и конфигурира на широка повърхност:

>**7**клиенти с възможност за инсталиране ·**16**клиенти с възможност за конфигурация на MCP### 🎯 Install-Capable Clients

| Инструмент | Тип | Пример за извикване | Път на инсталиране |
|:-----|:-----|:-------------------|:-------------|
| 🟢**Клод Код**| CLI | `Използвайте мозъчна атака, за да планирате функция` | `~/.claude/skills` |
| 🔵**Курсор**| IDE | `@brainstorming ми помогне да планирам функция` | `~/.cursor/skills` |
| 🟡**Gemini CLI**| CLI | `Използвайте мозъчна атака, за да планирате функция` | `~/.gemini/skills` |
| 🔴**Codex CLI**| CLI | `Използвайте мозъчна атака, за да планирате функция` | `~/.codex/skills` |
| 🟠**Киро**| CLI / IDE | `Използвайте мозъчна атака, за да планирате функция` | `~/.kiro/skills` |
| 🟣**Антигравитация**| IDE | `Използвайте @brainstorming за планиране на функция` | `~/.gemini/antigravity/skills` |
| ⚪**OpenCode**| CLI | `изпълнение на отворен код @brainstorming` | `<работно пространство>/.opencode/skills` |

<подробности>
<резюме>🔌 <strong>По-широко покритие на конфигурацията на MCP (16 клиента)</strong></резюме>

Тези цели са част от поддържаната конфигурационна повърхност на MCP, дори когато не са цели за инсталиране за директории с умения:

| Клиент или повърхност | Тип поддръжка | Бележки |
|:------------------|:------------|:------|
| Настройки на Claude и работен плот | MCP конфигурация | Настройки, работен плот и потоци, съобразени с проекта |
| VS код | MCP конфигурация | Потребител, работно пространство, вътрешни лица и цели на Dev Container |
| Близнаци | MCP конфигурация | Настройки на потребителя и работното пространство |
| Клайн | MCP конфигурация | Първокласна целева конфигурация |
| GitHub Copilot CLI | MCP конфигурация | Цели за конфигурация на потребители и репо |
| Продължи | MCP конфигурация | Работно пространство Генериране на YAML |
| Уиндсърф | MCP конфигурация | Целта на потребителската конфигурация |
| Зед | MCP конфигурация | Целева конфигурация на работното пространство |
| гъска | MCP конфигурация | Целта на потребителската конфигурация с генерирана рецепта |
| Код на килограм | MCP конфигурация | Цели за потребител, проект и работно пространство |
| Джуни | MCP конфигурация | Цели на проект и потребителска конфигурация |</details>

---

## Инсталиране

<таблица>
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

| Инструмент | Инсталиране на команда | Първо използване |
|:-----|:--------|:----------|
| 🟢 Клод Код | `npx omni-skills --claude` | `Използвайте мозъчна атака, за да планирате функция` |
| 🔵 Курсор | `npx omni-skills --cursor` | `@brainstorming ми помогне да планирам функция` |
| 🟡 Gemini CLI | `npx omni-skills --gemini` | `Използвайте мозъчна атака, за да планирате функция` |
| 🔴 Codex CLI | `npx omni-skills --codex` | `Използвайте мозъчна атака, за да планирате функция` |
| 🟣 Антигравитация | `npx omni-skills --antigravity` *(по подразбиране)* | `Използвайте @brainstorming за планиране на функция` |
| 🟠 Киро | `npx omni-skills --kiro` | `Използвайте мозъчна атака, за да планирате функция` |
| ⚪ OpenCode | `npx omni-skills --opencode` | `изпълнение на отворен код @brainstorming` |
| 📂 Персонализиран път | `npx omni-skills --path ./my-skills` | Зависи от вашия инструмент |

> 📖**Не сте сигурни откъде да започнете?**
> - [🚀 Първи стъпки](docs/users/GETTING-STARTED.md) — инсталирайте и потвърдете за по-малко от 2 минути
> - [🧭 Ръководство за потребителя на CLI](docs/users/CLI-USER-GUIDE.md) — пълна справка за командите
> - [📗 Ръководство за използване](docs/users/USAGE.md) — подкани, модели и режими на изпълнение---

## 🔌 Runtime Surfaces

Omni Skills не е само библиотека от умения. Той излага**четири повърхности за изпълнение**, които консумират един и същ генериран каталог:

| Повърхност | състояние | Какво прави | Пример |
|:--------|:------|:-------------|:--------|
| 🖥️**CLI**| ✅ Наличен | Намиране, инсталиране, диагностика, визуален потребителски интерфейс, услуги за зареждане, димни проверки | `npx omni-skills doctor` |
| 🌐**API на каталога**| ✅ Наличен | Каталог само за четене, търсене, пакети, сравняване, планове за инсталиране, изтегляния | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Наличен | Откриване, препоръка, предварителен преглед на инсталиране, локална странична кола, потоци от конфигурация | `npx omni-skills mcp поток --local` |
| 🤖**A2A**| ✅ Наличен | Жизнен цикъл на задачата, предаване, анкетиране, стрийминг, анулиране, постоянство | `npx omni-skills a2a --port 3335` |

<подробности>
<резюме>🖥️ <strong>Визуална обвивка и операторски команди</strong></резюме>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<подробности>
<резюме>🔌 <strong>MCP транспорти и конфигурация</strong></резюме>```bash
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

| Метрика | Брой |
|:-------|:------|
| 🧠 Публикувани умения |**32**|
| 📂 Активни категории |**15**|
| 📦 Напълно обезпечени пакети |**7**|
| ✨ Подбрани производни |**32**в `skills_omni/` |### 📦 Bundle Availability

| Пакет | Умения | Членове |
|:-------|:-------|:--------|
| 🧰 `основни неща` |**4/4**✅ | `умения за намиране` · `мозъчна атака` · `архитектура` · `отстраняване на грешки` |
| 🌐 `пълен стек` |**5/5**✅ | `frontend-design` · `api-design` · `database-design` · `omni-figma` · `auth-flows` |
| 🎨 `дизайн` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `accessibility-audit` · `design-token-governance` |
| 🛡️ `сигурност` |**4/4**✅ | `security-auditor` · `vulnerability-skener` · `incident-response` · `threat-modeling` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observability-review` · `release-engineering` |
| 🤖 `ai-инженер` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracts` · `model-serving` |
| 🔧 `oss-maintainer` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `documentation` |### ✨ Native Intake → Curated Output

| Повърхност | Цел | Език |
|:--------|:--------|:---------|
| 📥 `умения/` | Нативен прием | Всеки език |
| ✨ `skills_omni/` | Подбран резултат, поддържан от Omni | Винаги английски |

>**ℹ️**Промените в естествените умения се обработват повторно от частния подобрител и се опресняват в подбраната базова линия. Това прави `skills_omni/`**поддържана каталожна повърхност**, а не второ копие.---

## 🛡️ Security and Release Posture

> Omni Skills доставя по-силна история за освобождаване и проверка от обикновеното хранилище за маркдаун.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<подробности>
<резюме>📋 <strong>Какво потвърждава тръбопроводът</strong></резюме>

- ✅ Валидиране на умения и генериране на метаданни
- ✅ Инструменти за нормализиране и прекатегоризиране на таксономията
- ✅ Генериране на каталог и архив
- ✅ Автоматизирани тестове
- ✅ API, MCP и A2A пътища за зареждане
- ✅ Проверка на архива
- ✅ Предварителна проверка на пакета с `npm pack --dry-run`</details>

<подробности>
<резюме>🔐 <strong>Отпусната поза</strong></резюме>

| Контрол | Описание |
|:--------|:-----------|
| 🔒 SHA-256 контролни суми | Прояви на контролна сума за всички архиви |
| ✍️ Подписани артефакти | Отделени подписи върху артефакти за освобождаване |
| 🤖 CI-наложен | Проверка на издаване в CI преди публикуване |
| 🦠 Порти за скенер | ClamAV и VirusTotal затворен поток на освобождаване |
| 📦 Издаване на GitHub | Автоматизирано генериране на GitHub Release |
| 📋 npm публикация | Само от проверен архив |
| 🔄 Автоматично освобождаване | При квалифициращо умение се слива с `main` |

**Автоматичното освобождаване се задейства само когато сливането се промени:**
- `skills/*/**`
- `skills_omni/*/**`
- `data/bundles.json`

Промените само в документи**не**задействат публикуване на пакета.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Док | Какво ще научите |
|:----|:----------------|
| 🚀 [Първи стъпки](docs/users/GETTING-STARTED.md) | Инсталирайте, проверете и извикайте за по-малко от 2 минути |
| 🧭 [Ръководство за потребителя на CLI](docs/users/CLI-USER-GUIDE.md) | Пълна справка за команди и модели от реалния свят |
| 📗 [Ръководство за използване](docs/users/USAGE.md) | CLI команди, режими на инсталиране, време на изпълнение и MCP конфигурация |
| 📦 [Пакети](docs/users/BUNDLES.md) | Подбрани пакети и наличност |
| 📚 [Каталог](docs/CATALOG.md) | Автоматично генериран каталог на публикуваните умения |
| 🔧 [System Runbook](docs/operations/RUNBOOK.md) | Изграждане, обслужване, защита и отстраняване на проблеми |### 🏗️ For Architects

| Док | Какво ще научите |
|:----|:----------------|
| 🗺️ [Пътна карта на Agent-Native](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Еволюция на архитектурата и оставащи области |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Решение за основно монорепо |
| 🔬 [Анализ на кодова база](docs/architecture/CODEBASE-ANALYSIS.md) | Композиция по време на изпълнение и системни граници |
| 🌐 [API на каталог](docs/specs/CATALOG-API.md) | HTTP крайни точки, филтриране, управление и изтегляния |
| 🧩 [Инсталатор с насочване чрез CLI](docs/specs/CLI-GUIDED-INSTALLER.md) | Поведенчески договор за ръководения монтажник |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Визуална обвивка на мастило и модел на състоянието |
| 🔌 [Local MCP Sidecar](docs/specs/LOCAL-MCP-SIDECAR.md) | Инструменти за файлова система и модел на разрешен списък |
| 📊 [Матрица за поддръжка на клиенти](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Пълна справка за клиента и автора |
| 🏷️ [Класификация на умения](docs/specs/SKILL-CLASSIFICATION.md) | Таксономия, точкуване и метаданни |
| 🛡️ [Проверка на сигурността](docs/specs/SECURITY-VALIDATION.md) | Скенери, архиви и подписи |
| 📋 [Манифест на умения](docs/specs/SKILL-MANIFEST.md) | Машинно четим формат на манифеста |### 🤝 For Contributors

| Док | Какво ще научите |
|:----|:----------------|
| 📝 [Ръководство за принос](CONTRIBUTING.md) | Репо работен процес и PR очаквания |
| 🧾 [Работен процес на Skill PR](docs/contributors/SKILL-PR-WORKFLOW.md) | Естествен прием, обработка на подобрител, очаквания на рецензент |
| 📄 [Шаблон за умения](docs/contributors/SKILL-TEMPLATE.md) | Стартер `SKILL.md` с фронтматер и структура |
| 🔬 [Анатомия на уменията](docs/contributors/SKILL-ANATOMY.md) | Структура и очаквания за качество |
| ✅ [Лента за качество](docs/contributors/QUALITY-BAR.md) | Критерии за приемане |
| 🏆 [Набор с най-добри резултати](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Какво води до високи резултати |---

## 🗂️ Repository Layout

| Път | Цел |
|:-----|:--------|
| 📂 `умения/` | Канонични авторски умения и роден прием |
| ✨ `skills_omni/` | Подбрани подобрени производни, поддържани от Omni |
| 📖 `документи/` | Документация за потребителя, сътрудника, архитектурата, операциите и спецификациите |
| 📦 `dist/` | Генерирани манифести, пакети, каталог и архиви |
| 📁 `данни/` | Дефиниции на пакети и статични поддържащи данни |
| 🧠 `packages/catalog-core/` | Време за изпълнение на споделен каталог |
| 🌐 `packages/server-api/` | HTTP API само за четене |
| 🔌 `packages/server-mcp/` | MCP сървър и локален кош |
| 🤖 `packages/server-a2a/` | A2A изпълнение и оркестрация на задачите |
| 🖥️ `tools/bin/` | CLI входни точки |
| 📚 `tools/lib/` | Помощник за инсталиране и потребителски интерфейс |
| ⚙️ `инструменти/скриптове/` | Валидиране, генериране, освобождаване и тестови скриптове |

>**ℹ️**`dist/` е умишлено версиян, защото генерираните артефакти са част от договора за инсталиране, API, MCP, A2A, smoke и освобождаване.---

## 🤝 Contributing

Omni Skills приема вграден прием на умения нагоре по веригата под „skills/“.

| Правило | Подробности |
|:-----|:--------|
| 📥 Нативен прием | Може да е груб, написан на всеки език |
| ✨ Подбран резултат | `skills_omni/` запазено за Omni производни, създадени от автоматизация |
| 🚫 Ръчни редакции | Публичните ръчни редакции на `skills_omni/` се отхвърлят |
| 🔄 Повторна обработка | Частният подобрител преработва естествените промени и опреснява избраната базова линия |

> 📖**Започнете с:**[Ръководство за принос](CONTRIBUTING.md) · [Работен процес на Skill PR](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Тип | Лиценз |
|:-----|:--------|
| 💻 Код и инструменти | [Лиценз на MIT](ЛИЦЕНЗ) |
| 📝 Документация и съдържание на умения | [CC BY 4.0](ЛИЦЕНЗ-СЪДЪРЖАНИЕ) |---

<div align="center">

**Направено с 🧠 от екипа на Omni Skills**

[⭐ Означете със звезда това репо](https://github.com/diegosouzapw/omni-skills) · [🐛 Докладвайте за грешка](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Дискусии](https://github.com/diegosouzapw/omni-skills/discussions)</div>
