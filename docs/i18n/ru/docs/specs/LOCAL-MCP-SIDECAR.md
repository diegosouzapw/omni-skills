# 🔌 Local MCP Sidecar (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Дополнительное расширение локального режима для `@omni-skills/server-mcp`, которое добавляет инструменты с поддержкой файловой системы для обнаружения клиентов, управления навыками и создания конфигурации MCP.**---

## 📊 Status

| Особенность | Государство |
|:--------|:------|
| ✅ Инструменты каталога, доступные только для чтения | Реализовано |
| ✅ Локальные инструменты с поддержкой файловой системы | Реализовано |
| ✅ 3 транспорта (stdio/stream/sse) | Реализовано |
| ✅ Внесенные в белый список записи | Реализовано |
| ✅ Предварительный просмотр перед записью по умолчанию | Реализовано |
| ✅ Написание конфигурации MCP с учетом клиента | Реализовано |
| ✅ HTTP-аутентификация + ограничение скорости | Реализовано |
| ✅ Подписи и контрольные суммы времени выпуска | Реализовано для сгенерированных архивов и отображается с помощью API/MCP |
| 🟡 Локальное требование подписи времени записи | Еще не применяется; локальный режим предварительного просмотра и записи из доверенной локальной кассы |
| 🟢 Текущий охват клиентов | 7 клиентов с возможностью установки, 16 клиентов с возможностью настройки, 33 цели конфигурации, 19 профилей конфигурации |---

## 🎯 Purpose

Локальный режим добавляет**инструменты с поддержкой файловой системы**поверх существующей поверхности каталога MCP, доступной только для чтения. Используйте его, когда агенту необходимо:

- 🕵️ Обнаружение совместимых локальных клиентов AI.
- 📋 Проверить установленные навыки
- 👁️ Предварительный просмотр установки или удаления навыка (пробный запуск)
- 📦 Применить установку или удаление локального навыка
- ⚙️ Запишите локальный файл конфигурации MCP после предварительного просмотра.

Он намеренно разделяет две проблемы:

-**цели установки навыков**
  клиенты со стабильным каталогом навыков, которые могут использовать `install_skills`
-**Цели конфигурации MCP**
  клиенты или IDE со стабильным документированным форматом конфигурации MCP, даже если у них нет каталога навыков---

## 🔌 Transports

| Транспорт | Протокол | Вариант использования |
|:----------|:---------|:---------|
| `стдио` | Труба | Прямая интеграция с клиентами |
| `поток` | Потоковое HTTP | Современные HTTP-клиенты |
| `ссе` | События, отправленные сервером | Устаревшие клиенты |---

## 🚀 Enable Local Mode

### 📦 From repo:

```bash
npm run mcp:local
npm run mcp:stream:local
npm run mcp:sse:local
```

### 📦 Via CLI:

```bash
npm run cli -- mcp stdio --local
npm run cli -- mcp stream --local
npm run cli -- mcp sse --local
npm run cli -- config-mcp --list-targets
npm run cli -- config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp
```

### 📦 From published package:

```bash
npx omni-skills mcp stdio --local
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

> Все команды автоматически устанавливают `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Когда включен локальный режим, становятся доступны следующие дополнительные инструменты:

| Инструмент | Описание | По умолчанию |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Сканирование клиентов AI и их путей к навыкам/конфигурациям | — |
| 📋 `list_installed_skills` | Проверка установленных навыков для конкретного клиента | — |
| 📦 `install_skills` | Установить навыки в каталог навыков клиента | 🔍 сухой пробег |
| 🗑️ `remove_skills` | Удалить установленные навыки у клиента | 🔍 сухой пробег |
| ⚙️ `configure_client_mcp` | Написать конфигурацию MCP для конкретного клиента | 🔍 сухой пробег |

> ⚠️ `install_skills`, `remove_skills` и `configure_client_mcp` по умолчанию имеют значение**dry-run**, если `dry_run` опущен.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Клиент | Путь |
|:-------|:-----|
| 🔵 Код Клода | `~/.claude/skills` |
| 🔵 Курсор | `~/.cursor/skills` |
| 🟡 Gemini CLI | `~/.gemini/skills` |
| 🟣 Антигравитация | `~/.gemini/антигравитация/навыки` |
| 🟢 Киро | `~/.kiro/skills` |
| 🔴 Интерфейс командной строки Кодекса | `~/.codex/skills` или `$CODEX_HOME/skills` |
| ⚪ Открытый код | `<рабочая область>/.opencode/skills` |

Эти 7 целей на сегодняшний день являются единственными первоклассными местами установки.### ⚙️ MCP Config Files

| Цель | Формат |
|:-------|:-------|
| `~/.claude/settings.json` | Настройки кода Клода JSON |
| `<рабочая область>/.claude/settings.json` | Настройки проекта Клода JSON |
| `~/.claude.json` | Устаревший Клод JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (зависит от ОС) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<рабочая область>/.cursor/mcp.json` | Рабочая область курсора JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Пользователь Gemini JSON (`mcpServers`) |
| `<рабочая область>/.gemini/settings.json` | Проект Gemini JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Антигравитационный JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Пользователь Киро JSON (`mcpServers`) |
| `<рабочая область>/.kiro/settings/mcp.json` | Проект Киро JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<рабочая область>/.mcp.json` | JSON (`mcpServers`) |
| `<рабочая область>/opencode.json` | Рабочая область OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | Пользователь OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Клайн JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<рабочая область>/.github/mcp.json` | Репозиторий GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Пользователь Kilo CLI JSON (`mcp`) |
| `<рабочая область>/kilo.json` | Проект Kilo CLI JSON (`mcp`) |
| `<рабочая область>/.kilocode/mcp.json` | Рабочая область Kilo Code JSON (`mcpServers`) |
| `<рабочая область>/.continue/mcpServers/omni-skills.yaml` | Продолжить рабочую область YAML (`mcpServers`) |
| `<рабочая область>/.junie/mcp/mcp.json` | Проект Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Пользователь Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Виндсерфинг JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Гусь YAML («расширения») |
| `<рабочая область>/.zed/settings.json` | Рабочая область Zed JSON (`context_servers`) |
| `<рабочая область>/.vscode/mcp.json` | JSON («серверы») |
| `~/.config/Code/User/mcp.json` | Пользователь VS Code JSON («серверы») |
| `~/.config/Code - Insiders/User/mcp.json` | Пользователь VS Code Insiders JSON («серверы») |
| `<рабочая область>/.devcontainer/devcontainer.json` | Вложенный контейнер разработки JSON (`customizations.vscode.mcp.servers`) |
| Корневой клиент `mcp.json` | JSON (формат для каждого клиента) |

Это дает коляске:

-**16 клиентов или IDE с возможностью настройки**
-**33 первоклассных целевых маршрута**
-**19 профилей формата**

Текущий охват первоклассных конфигураций:

- Клод Код и Клод Десктоп
- Курсор
- Код VS и контейнеры разработки
- интерфейс командной строки Близнецов
- Антигравитация
- Киро
- Интерфейс командной строки Кодекса
- Продолжить
- Джуни
- Виндсерфинг
- Гусь
- Открытый код
- Клайн
- Интерфейс командной строки GitHub Copilot
- Код килограмма
- Зед

Кандидаты, использующие только вручную или только фрагменты, по-прежнему намеренно находятся за пределами первоклассного набора авторов, пока их контракты общедоступной конфигурации не станут достаточно стабильными.### 🧭 Expansion Policy

Omni Skills теперь рассматривает поддержку клиентов как трехуровневую модель:

1.**возможность установки**
   Существует стабильный каталог навыков, поэтому CLI и Sidecar могут устанавливать навыки напрямую.
2.**с возможностью настройки**
   Существует стабильный, документированный формат конфигурации MCP, поэтому `config-mcp` может просмотреть и записать первоклассный файл.
3.**только вручную или фрагмент**
   Продукт явно поддерживает MCP в той или иной форме, но общедоступные документы пока не оправдывают использование безопасной автоматической записи.

Вот почему такие клиенты, как JetBrains AI Assistant, остаются только для ручного управления/фрагментов, в то время как Roo Code и Postman остаются за пределами первоклассного набора авторов до тех пор, пока их безопасная история автоматического слияния не станет достаточно сильной для этого проекта.---

## 🔒 Allowlist Model

Локальная коляска записывает только в**явный список разрешений**.### 🟢 Default allowlist:

- Известные корни клиентов в `$HOME`
- `~/.codeium` для пользовательской конфигурации Windsurf
- `~/.copilot` для GitHub Copilot CLI
- `~/.cline` для Cline CLI
- `~/.config/goose` для конфигурации Goose
- `~/.config/kilo` и `~/.config/opencode` для конфигурации Kilo/OpenCode CLI
- `$CODEX_HOME` (или `~/.codex`, если не установлено)
- Текущий корень рабочей области
- `<рабочая область>/.агенты`
- `<рабочая область>/.github`
- `<рабочая область>/.kilocode`
- `<рабочая область>/.opencode`
- `<рабочая область>/.zed`
- `<рабочая область>/.continue`
- `<рабочая область>/.vscode`### ➕ Extend the allowlist:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

---

## ⚙️ Config Writing Examples

### 🔵 Claude Code / Project Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### 🔵 Cursor / Workspace JSON

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 🟡 Gemini CLI / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "headers": {
        "Authorization": "Bearer example"
      }
    }
  },
  "mcp": {
    "allowed": ["omni-skills"]
  }
}
```

### 🟢 Kiro / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "disabledTools": ["install_skills"],
      "autoApprove": ["search_skills", "get_skill"]
    }
  }
}
```

### 🟣 Antigravity

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚪ OpenCode

```json
{
  "mcp": {
    "omni-skills": {
      "type": "local",
      "command": ["/path/to/node", "/path/to/packages/server-mcp/src/server.js"],
      "environment": {
        "OMNI_SKILLS_MCP_MODE": "local"
      },
      "enabled": true
    }
  }
}
```

### 🟢 Cline

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "streamable-http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚫ GitHub Copilot CLI

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "tools": ["*"]
    }
  }
}
```

### 🔴 Kilo Code

```json
{
  "mcp": {
    "omni-skills": {
      "type": "remote",
      "url": "http://127.0.0.1:3334/mcp",
      "enabled": true
    }
  }
}
```

### 🟢 Continue

```yaml
name: 'Omni Skills'
version: '0.1.3'
schema: 'v1'
mcpServers:
  - name: 'omni-skills'
    transport:
      type: 'streamable-http'
      url: 'http://127.0.0.1:3334/mcp'
```

### 🧭 CLI Contract

Оболочка CLI с поддержкой боковой панели обеспечивает доступность генерации конфигурации MCP без прямых вызовов JSON-RPC:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Поведение по умолчанию доступно только для предварительного просмотра. `--write` применяет конфигурацию к разрешенному целевому пути в белом списке.### 🌊 Windsurf

```json
{
  "mcpServers": {
    "omni-skills": {
      "serverUrl": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚡ Zed

```json
{
  "context_servers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 💜 VS Code

```json
{
  "servers": {
    "omni-skills": {
      "type": "stdio",
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 📦 Dev Container

```json
{
  "customizations": {
    "vscode": {
      "mcp": {
        "servers": {
          "omni-skills": {
            "type": "stdio",
            "command": "/path/to/node",
            "args": ["/path/to/packages/server-mcp/src/server.js"],
            "env": {
              "OMNI_SKILLS_MCP_MODE": "local"
            }
          }
        }
      }
    }
  }
}
```

### 🔴 Codex TOML

```toml
[mcp_servers.omni-skills]
url = "http://127.0.0.1:3334/mcp"
```

### 📋 Generic stdio

```json
{
  "mcpServers": {
    "omni-skills": {
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 🔵 Claude allow/deny lists

Инструмент `configure_client_mcp` также может записывать настройки, специфичные для Claude, когда вы передаете:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

Для целей VS Code и Dev Container `configure_client_mcp` также может писать:

- `песочница включена`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Это соответствует текущему руководству VS Code по изолированной программной среде локальных серверов MCP stdio.### 🧰 Cross-Client Entry Options

`configure_client_mcp` теперь поддерживает более расширенные метаданные записей для поддерживаемых профилей:

- `заголовки`
- `окр`
- `env_file`
- `квд`
- `timeout_ms`
- `описание`
- `include_tools`
- `exclude_tools`
- `инвалид`
- «доверие»

Опции для конкретного профиля:

- Клод: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Близнецы: `mcp_allowed_servers`, `mcp_excluded_servers`
- Киро: `disabled_tools`, `auto_approve`
— Код VS и контейнеры разработки: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` возвращает `рецепты` вместе с предварительным просмотром или примененной конфигурацией.

Эти рецепты представляют собой блоки инструкций, ориентированные на клиента, например:

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp добавить ...`
- рецепты ручного редактирования файлов для Cursor, VS Code, Kiro и Claude Desktop.

Общая стратегия теперь намеренно консервативна:

- повторно использовать небольшой набор канонических семейств конфигураций, где это возможно.
- нанимайте писателей на заказ только в том случае, если официальные документы требуют четкой формы
- избегайте изобретения автоматических писателей для недокументированных целей---

## 🔐 Hosted HTTP Hardening

Транспорты HTTP поддерживают те же элементы управления, управляемые средой, что и API каталога:

| Переменная | Цель |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Аутентификация токена на предъявителя |
| `OMNI_SKILLS_HTTP_API_KEYS` | Ключи API, разделенные запятыми |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Самоанализ среды выполнения только для администратора |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Максимальное количество запросов на окно |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Окно ограничения скорости в мс |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Включить ведение журнала аудита |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Записать журнал аудита в файл |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Ограничить происхождение браузера |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Ограничить разрешенные исходные IP-адреса |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Возвращает `503` для неадминистративных и неработоспособных маршрутов |

> 🟢 `/healthz` остается открытым. `/mcp`, `/sse` и `/messages` требуют аутентификации, если они включены. `/admin/runtime` требует наличия токена администратора при настройке.---

## 🌍 Official Docs That Shape Support Decisions

Текущий набор средств записи и границы, доступные только вручную, были проверены на соответствие официальной документации продукта, в том числе:

- Антропный код Клода MCP
- Интерфейс командной строки OpenAI Codex и документация OpenAI MCP.
- Документы MCP курсора
- Продолжить документацию MCP
- Документы Киро MCP
- Документация OpenCode MCP
- Документы Cline MCP
- Документация Kilo Code MCP
- Документация GitHub Copilot CLI
- Документация Zed MCP
- Документация VS Code MCP
- Документация JetBrains AI Assistant MCP

Благодаря этим документам некоторые клиенты получают первоклассные средства автоматической записи, в то время как другие пока остаются только сниппетами.