# Client Support Matrix (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


В этом документе отслеживается практическая поверхность клиента для Omni Skills по трем направлениям:

1. инвентарь информационной панели `9router` в `/home/diegosouzapw/dev/proxys/9router`
2. текущая реализация коляски Omni Skills MCP.
3. текущая официальная документация для каждого клиента или IDE.

Это рабочий источник истины для принятия решения о том, какие клиенты получат первоклассную поддержку config-mcp, какие остаются только вручную, а какие являются лишь кандидатами.---

## Scope

Эта матрица посвящена**конфигурации клиента для MCP**.

Это не то же самое, что:

- поддержка установки навыков
- Совместимость с API
- Поддержка А2А
- ACP или другие протоколы, отличные от MCP

Некоторые продукты в матрице используют MCP, но не имеют значимого «каталога навыков», поэтому они получают только поддержку config-target.---

## 9router Inventory

Панель управления 9router в настоящее время группирует следующие инструменты CLI или клиенты IDE:

- Клод Код
- Кодекс OpenAI
- Заводской дроид
- ОпенКлоу
- Курсор
- Клайн
- Код килограмма
- Продолжить
- Антигравитация
— второй пилот GitHub
- Открытый код
- Киро А.И.

Местные источники:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Теперь у этих клиентов есть стабильная и явная история в Omni Skills через `config-mcp --target ...`.

Текущие итоги реализации:

-**7 клиентов с возможностью установки**
-**16 клиентов с возможностью настройки**
-**33 первоклассные цели конфигурации**
-**19 профилей конфигурации**

| Клиент | Статус | Цели конфигурации | Заметки |
|:-------|:-------|:---------------|:------|
| Клод Код | ✅ Первоклассный | `рабочее пространство`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Введена конфигурация `mcpServers` с элементами управления разрешением/запретом, специфичными для Claude |
| Курсор | ✅ Первоклассный | `курсор-рабочее пространство`, `курсор-пользователь` | Цели JSON `mcpServers` |
| Код VS | ✅ Первоклассный | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Использует корень `servers` |
| Близнецы CLI | ✅ Первоклассный | `gemini-пользователь`, `gemini-workspace` | Настройки JSON + глобальные элементы управления разрешением/исключением MCP |
| Антигравитация | ✅ Первоклассный | `пользователь антигравитации` | Цель JSON `mcpServers` |
| Киро | ✅ Первоклассный | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Поля отключения/автоматического одобрения, специфичные для Kiro |
| Интерфейс командной строки Кодекса | ✅ Первоклассный | `пользователь-кодекса` | Таблицы TOML `mcp_servers` |
| Продолжить | ✅ Первоклассный | `продолжить-рабочую область` | Документ выделенного сервера YAML |
| Виндсерфинг | ✅ Первоклассный | `пользователь виндсерфинга` | Цель JSON `mcpServers` с записями `serverUrl` |
| Открытый код | ✅ Первоклассный | `opencode-workspace`, `opencode-user` | Официальная `opencode.json` / пользовательская конфигурация с использованием `mcp` верхнего уровня |
| Клайн | ✅ Первоклассный | `клиент-пользователь` | `cline_mcp_settings.json` с `mcpServers` |
| GitHub Copilot CLI | ✅ Первоклассный | `второй пилот-пользователь`, `второй пилот-репо` | `mcp-config.json` или `.github/mcp.json` в пределах репозитория |
| Код килограмма | ✅ Первоклассный | `кило-пользователь`, `кило-проект`, `кило-рабочее пространство` | Kilo CLI использует `kilo.json`; интеграция рабочей области использует `.kilocode/mcp.json` |
| Зед | ✅ Первоклассный | `zed-рабочее пространство` | `.zed/settings.json` с `context_servers` |
| Джуни | ✅ Первоклассный | `junie-проект`, `junie-пользователь` | `.junie/mcp/mcp.json` или `~/.junie/mcp/mcp.json` с использованием `mcpServers` |
| Гусь | ✅ Первоклассный | `гусь-пользователь` | `~/.config/goose/config.yaml` с использованием объекта `extensions` верхнего уровня для постоянных расширений MCP |---

## Current Gaps

Эти клиенты из `9router`**еще не являются**первоклассными объектами записи в Omni Skills:

| Клиент | Текущее состояние | Почему |
|:-------|:--------------|:----|
| Заводской дроид | ⚠️ Только вручную/по индивидуальному заказу | Во время этого прохода в основных документах не обнаружено стабильной общедоступной формы конфигурации MCP |
| OpenClaw | ⚠️ Только вручную/по индивидуальному заказу | Та же проблема, что и у Factory Droid |

Дополнительную программу по-прежнему можно использовать с `--file` или пользовательскими путями для опытных пользователей, но Omni Skills не следует изобретать первоклассные средства записи без стабильной общедоступной документации по конфигурации.

Два смежных продукта теперь лучше изучены, но по-прежнему намеренно не дотягивают до первоклассных автоматических записывающих устройств:

| Клиент | Текущее состояние | Почему |
|:-------|:--------------|:----|
| JetBrains AI-помощник | 🟡 Руководство/фрагмент | Официальная поддержка MCP существует, но документированный рабочий процесс основан на пользовательском интерфейсе/импорте, а не на стабильном общедоступном целевом файле |
| Почтальон | 🟡 Руководство/фрагмент | Официальная поддержка MCP существует, но конфигурация управляется внутри пользовательского интерфейса продукта, а не через стабильный общедоступный целевой файл |
| Кодекс Ру | 🟡 Кандидат | Публичная документация MCP существует, но надежный межплатформенный контракт о путях к файлам по-прежнему требует подтверждения перед добавлением автора |---

## Support Policy

Omni Skills теперь следует этому набору правил:

1.**Возможна установка**, если существует стабильный каталог навыков.
2.**С поддержкой конфигурации**, если существует стабильный общедоступный формат файла конфигурации MCP.
3.**Только вручную/фрагмент**, если продукт поддерживает MCP, но общедоступный контракт ориентирован на пользовательский интерфейс, импорт или все еще слишком нестабильен.

Это также практический ответ на один из предыдущих вопросов архитектуры: проект должен продолжать выращивать первоклассных авторов только там, где существует стабильный общедоступный формат, а в остальном опираться на меньший набор канонических экспортных семейств плюс рецепты и фрагменты.### Canonical config families already in use

- JSON `mcpServers`
- JSON `серверы`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Клиент/IDE | Рекомендация | Причина |
|:-------------|:---------------|:-------|
| JetBrains AI-помощник | 🟡 Пока сохраните руководство/фрагмент | Официальная поддержка реальна, но UX по-прежнему управляется продуктом, а не файловым контрактом |
| Почтальон | 🟡 Пока сохраните руководство/фрагмент | Официальная установка ориентирована на пользовательский интерфейс и управление рабочей областью, а не на основе файлового контракта |
| Кодекс Ру | 🟡 Следующее расследование | Многообещающая поддержка MCP, но безопасность записи зависит от более строгого подтверждения пути конфигурации |
| Чат второго пилота VS Code | 🟢 Косвенно уже рассмотрено | Базовые местоположения файлов VS Code MCP уже поддерживаются |
| Zed ACP / Серверы агентов | 🟡 Отдельный трек | Это территория ACP/агент-сервера, а не просто написание конфигурации MCP |---

## Official Sources Used

Приведенные выше решения были проверены на соответствие текущим первоисточникам:

- [Антропный код Клода MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Курсор MCP](https://docs.cursor.com/tools)
- [Продолжить MCP](https://docs.continue.dev/customize/tools)
- [Киро MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Клайн MCP](https://docs.cline.bot/mcp)
- [Код килограмма MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Джуни MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Файлы конфигурации Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Расширения сеансов Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [Настройка Postman MCP](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Код Руо MCP](https://docs.roocode.com/features/mcp)
- [Руководство по расширению VS Code MCP](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Официальный реестр MCP](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Текущая коляска Omni Skills намеренно различает три уровня поддержки:

-**клиенты с возможностью установки**
  - иметь известный каталог навыков и можете использовать `install_skills`
-**клиенты с возможностью настройки**
  - иметь стабильную цель конфигурации и использовать `configure_client_mcp`
-**клиенты вручную/фрагменты**
  - задокументировано, но пока без безопасного первоклассного средства записи файлов

Такое разделение сохраняет честность продукта.

Не каждый продукт с поддержкой MCP следует рассматривать как цель внедрения навыков.
Фаза расширения на данный момент считается завершенной: будущие дополнения должны появиться только в том случае, если они преодолеют ту же планку государственного контракта, которую сейчас очищают Goose, Junie, Continue и Windsurf.