# Client Support Matrix (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Този документ проследява практическата клиентска повърхност за Omni Skills в три входа:

1. инвентаризацията на таблото за управление на `9router` в `/home/diegosouzapw/dev/proxys/9router`
2. текущото внедряване на MCP с кош Omni Skills
3. актуална официална документация за всеки клиент или IDE

Това е работещият източник на истина за вземане на решение кои клиенти получават първокласна `config-mcp` поддръжка, кои остават само ръчни и кои са само кандидати.---

## Scope

Тази матрица е за**клиентска конфигурация за MCP**.

Не е същото като:

- поддръжка за инсталиране на умения
- API съвместимост
- A2A поддръжка
- ACP или други не-MCP протоколи

Някои продукти в матрицата консумират MCP, но**нямат**смислена „директория с умения“, така че получават само поддръжка за цел на конфигурация.---

## 9router Inventory

Таблото за управление на `9router` в момента групира тези CLI инструменти или IDE клиенти:

- Клод Код
- OpenAI Codex
- Фабричен дроид
- OpenClaw
- Курсор
- Клайн
- Кило код
- Продължете
- Антигравитация
- GitHub Copilot
- OpenCode
- Киро AI

Местни източници:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Тези клиенти вече имат стабилна, ясна история в Omni Skills чрез `config-mcp --target ...`.

Общо текущо изпълнение:

-**7 клиента с възможност за инсталиране**
-**16 клиента с възможност за конфигурация**
-**33 първокласни цели за конфигурация**
-**19 конфигурационни профила**

| Клиент | Статус | Конфигурационни цели | Бележки |
|:-------|:-------|:---------------|:------|
| Клод Код | ✅ Първокласен | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Въведена конфигурация на `mcpServers` със специфични за Claude контроли за разрешаване/отказ |
| Курсор | ✅ Първокласен | `работно пространство на курсора`, `потребител на курсора` | JSON `mcpServers` цели |
| VS код | ✅ Първокласен | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Използва `servers` root |
| Gemini CLI | ✅ Първокласен | `gemini-user`, `gemini-workspace` | JSON настройки + глобални контроли за разрешаване/изключване на MCP |
| Антигравитация | ✅ Първокласен | `antigravity-user` | JSON `mcpServers` цел |
| Киро | ✅ Първокласен | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Деактивирани/автоматично одобрени полета, специфични за Kiro |
| Codex CLI | ✅ Първокласен | `codex-user` | TOML таблици `mcp_servers` |
| Продължи | ✅ Първокласен | `continue-workspace` | Специален документ за YAML сървър |
| Уиндсърф | ✅ Първокласен | `windsurf-user` | JSON цел `mcpServers` със записи `serverUrl` |
| OpenCode | ✅ Първокласен | `работно пространство с отворен код`, `потребител с отворен код` | Официален `opencode.json` / потребителска конфигурация с помощта на `mcp` от най-високо ниво |
| Клайн | ✅ Първокласен | `cline-user` | `cline_mcp_settings.json` с `mcpServers` |
| GitHub Copilot CLI | ✅ Първокласен | `copilot-user`, `copilot-repo` | `mcp-config.json` или `.github/mcp.json` с репо обхват |
| Код на килограм | ✅ Първокласен | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI използва `kilo.json`; интеграцията на работното пространство използва `.kilocode/mcp.json` |
| Зед | ✅ Първокласен | `zed-workspace` | `.zed/settings.json` с `context_servers` |
| Джуни | ✅ Първокласен | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` или `~/.junie/mcp/mcp.json` с помощта на `mcpServers` |
| гъска | ✅ Първокласен | `goose-user` | `~/.config/goose/config.yaml` с използване на обект `extensions` от най-високо ниво за постоянни MCP разширения |---

## Current Gaps

Тези клиенти от `9router` все още**не**са първокласни писателски цели в Omni Skills:

| Клиент | Текущо състояние | Защо |
|:-------|:--------------|:----|
| Фабричен дроид | ⚠️ Само ръчно/по избор | Не е открита стабилна публична форма на MCP конфигурация в основните документи по време на това преминаване |
| OpenClaw | ⚠️ Само ръчно/по избор | Същият проблем като Factory Droid |

Страничната кола все още може да се използва с `--file` или персонализирани пътеки за напреднали потребители, но Omni Skills не трябва да измисля първокласни писатели без стабилни публични конфигурационни документи.

Два съседни продукта вече са по-добре разбрани, но все още умишлено спират пред първокласните автоматични писатели:

| Клиент | Текущо състояние | Защо |
|:-------|:--------------|:----|
| JetBrains AI Assistant | 🟡 Ръководство/фрагмент | Съществува официална поддръжка на MCP, но документираният работен процес е по-скоро управляван от UI/импортиране, отколкото като стабилна цел за публичен файл |
| Пощальон | 🟡 Ръководство/фрагмент | Съществува официална поддръжка на MCP, но конфигурацията се управлява вътре в потребителския интерфейс на продукта, а не в стабилен публичен целеви файл |
| Ру код | 🟡 Кандидат | Съществуват публични MCP документи, но силен междуплатформен договор за файлов път все още се нуждае от потвърждение преди добавяне на писател |---

## Support Policy

Omni Skills вече следва този набор от правила:

1.**С възможност за инсталиране**, ако съществува стабилна директория с умения.
2.**Съвместим с конфигурация**, ако съществува стабилен публичен формат на MCP конфигурационен файл.
3.**Ръчно/само с фрагменти**, ако продуктът поддържа MCP, но публичният договор е UI-first, import-first или все още е твърде нестабилен.

Това е и практическият отговор на един от по-ранните въпроси относно архитектурата: проектът трябва да продължи да развива първокласни автори само там, където съществува стабилен публичен формат, а в противен случай да се опира на по-малък набор от канонични семейства за експорт плюс рецепти и фрагменти.### Canonical config families already in use

- JSON `mcpServers`
- JSON `сървъри`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Клиент / IDE | Препоръка | Причина |
|:-------------|:--------|:-------|
| JetBrains AI Assistant | 🟡 Запазете ръководството/фрагмента засега | Официалната поддръжка е реална, но UX все още се управлява от продукта, а не първо от договора за файлове |
| Пощальон | 🟡 Запазете ръководството/фрагмента засега | Официалната настройка е първо потребителски интерфейс и управлявано работно пространство, а не първо договор за файлове |
| Ру код | 🟡 Проучете следващия | Обещаваща поддръжка на MCP, но безопасността на писателя зависи от по-силното потвърждение на конфигурационния път |
| VS Code Copilot Chat | 🟢 Вече обхванати непряко | Подлежащите MCP файлови местоположения на VS Code вече се поддържат |
| Zed ACP/агентни сървъри | 🟡 Отделна писта | Това е територия на ACP/агент-сървър, а не само писане на MCP конфигурация |---

## Official Sources Used

Решенията по-горе бяха проверени спрямо текущи първични източници:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [MCP на курсора](https://docs.cursor.com/tools)
- [Продължаване на MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Конфигурационни файлове на Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Разширения за Goose Session](https://block.github.io/goose/docs/guides/session-extensions/)
- [Настройка на Postman MCP](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP Ръководство за разширение](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Официален MCP регистър](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Текущият Omni Skills sidecar умишлено разграничава три нива на поддръжка:

-**клиенти с възможност за инсталиране**
  - имат известна директория с умения и могат да използват `install_skills`
-**клиенти с възможност за конфигурация**
  - имат стабилна целева конфигурация и могат да използват `configure_client_mcp`
-**ръчни/клиенти с фрагменти**
  - документиран, но все още без безопасен първокласен запис на файлове

Това разделение поддържа продукта честен.

Не всеки съвместим с MCP продукт трябва да се третира като цел за инсталиране на умения.
Фазата на разширяване се счита за завършена за сега: бъдещите допълнения трябва да се приземят само ако изчистят същата лента за обществен договор, която Goose, Junie, Continue и Windsurf сега изчистват.