# Client Support Matrix (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Цей документ відстежує практичну клієнтську поверхню для Omni Skills за трьома вхідними параметрами:

1. інвентар інформаційної панелі 9router у `/home/diegosouzapw/dev/proxys/9router`
2. поточна реалізація MCP Omni Skills
3. актуальна офіційна документація для кожного клієнта або IDE

Це робоче джерело правди для вирішення, які клієнти отримають першокласну підтримку `config-mcp`, які з них залишаються лише вручну, а які є лише кандидатами.---

## Scope

Ця матриця стосується**конфігурації клієнта для MCP**.

Це не те саме, що:

- підтримка навичок установки
- Сумісність з API
- Підтримка A2A
- ACP або інші не-MCP протоколи

Деякі продукти в матриці використовують MCP, але**не**мають змістовний «каталог навичок», тому вони отримують лише підтримку цільової конфігурації.---

## 9router Inventory

Інформаційна панель `9router` наразі групує ці інструменти CLI або клієнти IDE:

- Клод Код
- Кодекс OpenAI
- Заводський дроїд
- OpenClaw
- Курсор
- Клайн
- Код кіло
- Продовжуйте
- Антигравітація
- GitHub Copilot
- OpenCode
- Кіро А.І

Місцеві джерела:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Ці клієнти тепер мають стабільну, явну історію в Omni Skills через `config-mcp --target ...`.

Поточні підсумки впровадження:

-**7 клієнтів із можливістю встановлення**
-**16 клієнтів із можливістю конфігурації**
-**33 першокласні цілі конфігурації**
-**19 профілів конфігурації**

| Клієнт | Статус | Цілі конфігурації | Примітки |
|:-------|:-------|:---------------|:------|
| Клод Код | ✅ Першокласний | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Введена конфігурація `mcpServers` зі специфічними для Клода елементами керування дозволом/забороном |
| Курсор | ✅ Першокласний | `cursor-workspace`, `cursor-user` | Цілі JSON `mcpServers` |
| Код VS | ✅ Першокласний | `vscode`, `vscode-user`, `vscode-insajders-user`, `devcontainer` | Використовує root `servers` |
| Gemini CLI | ✅ Першокласний | `gemini-user`, `gemini-workspace` | Налаштування JSON + глобальні елементи керування дозволом/виключенням MCP |
| Антигравітація | ✅ Першокласний | `antigravity-user` | Ціль JSON `mcpServers` |
| Кіро | ✅ Першокласний | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Спеціальні для Kiro вимкнені/автоматичне затвердження полів |
| Codex CLI | ✅ Першокласний | `codex-user` | Таблиці TOML `mcp_servers` |
| Продовжити | ✅ Першокласний | `continue-workspace` | Виділений документ сервера YAML |
| Віндсерфінг | ✅ Першокласний | `windsurf-user` | Ціль JSON `mcpServers` із записами `serverUrl` |
| OpenCode | ✅ Першокласний | `opencode-workspace`, `opencode-user` | Офіційний `opencode.json` / конфігурація користувача з використанням `mcp` верхнього рівня |
| Клайн | ✅ Першокласний | `cline-user` | `cline_mcp_settings.json` з `mcpServers` |
| GitHub Copilot CLI | ✅ Першокласний | `copilot-user`, `copilot-repo` | `mcp-config.json` або `.github/mcp.json` з репозитивом |
| Код кіло | ✅ Першокласний | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI використовує `kilo.json`; інтеграція робочої області використовує `.kilocode/mcp.json` |
| Зед | ✅ Першокласний | `zed-workspace` | `.zed/settings.json` з `context_servers` |
| Джуні | ✅ Першокласний | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` або `~/.junie/mcp/mcp.json` за допомогою `mcpServers` |
| Гусак | ✅ Першокласний | `goose-user` | `~/.config/goose/config.yaml` з використанням об’єкта `extensions` верхнього рівня для постійних розширень MCP |---

## Current Gaps

Ці клієнти з `9router`**ще не**є першокласними цільовими групами для авторів у Omni Skills:

| Клієнт | Сучасний стан | Чому |
|:-------|:--------------|:----|
| Фабричний дроїд | ⚠️ Лише вручну/на замовлення | Під час цього проходу в основних документах не знайдено стабільної загальнодоступної форми конфігурації MCP |
| OpenClaw | ⚠️ Лише вручну/на замовлення | Така сама проблема, як у Factory Droid |

Додаткову коляску все ще можна використовувати з `--file` або спеціальними шляхами для досвідчених користувачів, але Omni Skills не варто винаходити першокласні автори без стабільних загальнодоступних конфігураційних документів.

Два суміжні продукти тепер краще зрозумілі, але все ще навмисно обмежуються першокласними автоматичними записами:

| Клієнт | Сучасний стан | Чому |
|:-------|:--------------|:----|
| JetBrains AI Assistant | 🟡 Посібник/фрагмент | Офіційна підтримка MCP існує, але задокументований робочий процес керується інтерфейсом користувача/імпортом, а не стабільним загальнодоступним цільовим файлом |
| Листоноша | 🟡 Посібник/фрагмент | Офіційна підтримка MCP існує, але конфігурацією керують у UX продукту, а не в стабільному публічному цільовому файлі |
| Ру код | 🟡 Кандидат | Загальнодоступні документи MCP існують, але надійний кросплатформний договір про шлях до файлу все ще потребує підтвердження перед додаванням автора |---

## Support Policy

Omni Skills тепер дотримується цього набору правил:

1.**Можливість встановлення**, якщо існує стабільний каталог навичок.
2.**Підтримує конфігурацію**, якщо існує стабільний загальнодоступний формат файлу конфігурації MCP.
3.**Вручну/тільки для фрагментів**, якщо продукт підтримує MCP, але публічний контракт перш за все призначений для інтерфейсу користувача, імпорту або все ще надто нестабільний.

Це також практична відповідь на одне з попередніх питань архітектури: проект має підтримувати розвиток першокласних авторів лише там, де існує стабільний загальнодоступний формат, а в іншому випадку спиратися на менший набір канонічних сімейств експорту плюс рецепти та фрагменти.### Canonical config families already in use

- JSON `mcpServers`
- JSON `сервери`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Клієнт / IDE | Рекомендація | Причина |
|:-------------|:--------------|:-------|
| JetBrains AI Assistant | 🟡 Поки що зберігайте посібник/фрагмент | Офіційна підтримка є реальною, але UX все ще керується продуктом, а не файлом-контрактом спочатку |
| Листоноша | 🟡 Поки що зберігайте посібник/фрагмент | Офіційне налаштування насамперед здійснюється за допомогою інтерфейсу користувача та робочої області, а не за допомогою контракту на файл |
| Ру код | 🟡 Дослідити далі | Обіцяюча підтримка MCP, але безпека запису залежить від надійнішого підтвердження шляху конфігурації |
| VS Code Copilot Chat | 🟢 Вже побічно розглянуто | Основні розташування файлів MCP VS Code уже підтримуються |
| Сервери Zed ACP/Agent | 🟡 Окрема доріжка | Це територія ACP/агент-сервер, а не просто написання конфігурації MCP |---

## Official Sources Used

Рішення, наведені вище, були перевірені за поточними первинними джерелами:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Курсор MCP](https://docs.cursor.com/tools)
- [Продовжити MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Файли конфігурації Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Розширення Goose Session](https://block.github.io/goose/docs/guides/session-extensions/)
- [Налаштування Postman MCP](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Код Roo MCP](https://docs.roocode.com/features/mcp)
- [Посібник із розширення VS Code MCP](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Офіційний реєстр MCP](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Поточна допомога Omni Skills навмисно розрізняє три рівні підтримки:

-**клієнти з можливістю встановлення**
  - мають відомий каталог навичок і можуть використовувати `install_skills`
-**клієнти з можливістю конфігурації**
  - мають стабільну ціль конфігурації та можуть використовувати `configure_client_mcp`
-**клієнти вручну/фрагменти**
  - задокументовано, але ще без безпечного першокласного записувача файлів

Це розділення зберігає продукт чесним.

Не кожен продукт із підтримкою MCP слід розглядати як цільову установку навичок.
Етап розширення наразі вважається завершеним: майбутні доповнення мають з’являтися, лише якщо вони очистять ту саму смугу публічного контракту, яку зараз очищають Goose, Junie, Continue і Windsurf.