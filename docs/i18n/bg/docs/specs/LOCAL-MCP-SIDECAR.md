# 🔌 Local MCP Sidecar (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Допълнително разширение за локален режим за `@omni-skills/server-mcp`, което добавя инструменти, съобразени с файловата система, за откриване на клиенти, управление на умения и генериране на MCP конфигурация.**---

## 📊 Status

| Характеристика | състояние |
|:--------|:------|
| ✅ Инструменти за каталог само за четене | Внедрено |
| ✅ Локални инструменти, съобразени с файловата система | Внедрено |
| ✅ 3 транспорта (stdio/stream/sse) | Внедрено |
| ✅ Писания в списъка с разрешени | Внедрено |
| ✅ Предварителен преглед преди писане по подразбиране | Внедрено |
| ✅ Писане на MCP конфигурация, съобразена с клиента | Внедрено |
| ✅ HTTP удостоверяване + ограничаване на скоростта | Внедрено |
| ✅ Подписи и контролни суми по време на издаване | Внедрено за генерирани архиви и изведено от API/MCP |
| 🟡 Локално прилагане на подпис по време на запис | Все още не е наложено; локален режим визуализира и пише от довереното локално плащане |
| 🟢 Текущо клиентско покритие | 7 клиента с възможност за инсталиране, 16 клиента с възможност за конфигурация, 33 цели за конфигурация, 19 профила за конфигурация |---

## 🎯 Purpose

Локалният режим добавя**инструменти за файлова система**в горната част на съществуващата повърхност на MCP каталог само за четене. Използвайте го, когато агент трябва да:

- 🕵️ Откриване на съвместими локални AI клиенти
- 📋 Проверете инсталираните умения
- 👁️ Преглед на инсталация или премахване на умение (суха работа)
- 📦 Приложете инсталиране или премахване на местни умения
- ⚙️ Напишете локален MCP конфигурационен файл след преглед

Той умишлено разделя две опасения:

-**цели за инсталиране на умения**
  клиенти със стабилна директория с умения, които могат да използват `install_skills`
-**Цели за конфигурация на MCP**
  клиенти или IDE със стабилен документиран MCP конфигурационен формат, дори ако нямат директория за умения---

## 🔌 Transports

| Транспорт | Протокол | Случай на употреба |
|:----------|:---------|:---------|
| `stdio` | Тръба | Директна клиентска интеграция |
| `поток` | Поточно HTTP | Съвременни HTTP клиенти |
| `sse` | Изпратени от сървъра събития | Наследени клиенти |---

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

> Всички команди задават автоматично `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Когато локалният режим е активиран, тези допълнителни инструменти стават достъпни:

| Инструмент | Описание | По подразбиране |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Сканиране за AI клиенти и техните пътища за умения/конфигурация | — |
| 📋 `списък_инсталирани_умения` | Проверете инсталираните умения за конкретен клиент | — |
| 📦 `install_skills` | Инсталирайте умения в директорията с умения на клиента | 🔍 работа на сухо |
| 🗑️ `remove_kills` | Премахнете инсталираните умения от клиент | 🔍 работа на сухо |
| ⚙️ `configure_client_mcp` | Напишете MCP конфигурация за конкретен клиент | 🔍 работа на сухо |

> ⚠️ `install_skills`, `remove_skills` и `configure_client_mcp` по подразбиране са**dry-run**, когато `dry_run` е пропуснато.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Клиент | Път |
|:-------|:-----|
| 🔵 Клод Код | `~/.claude/skills` |
| 🔵 Курсор | `~/.cursor/skills` |
| 🟡 Gemini CLI | `~/.gemini/skills` |
| 🟣 Антигравитация | `~/.gemini/antigravity/skills` |
| 🟢 Киро | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` или `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<работно пространство>/.opencode/skills` |

Тези 7 цели са единствените първокласни дестинации за инсталиране днес.### ⚙️ MCP Config Files

| Цел | Формат |
|:-------|:-------|
| `~/.claude/settings.json` | Настройки на Claude Code JSON |
| `<работно пространство>/.claude/settings.json` | Настройки на проекта Claude JSON |
| `~/.claude.json` | Наследен Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (специфично за ОС) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<работно пространство>/.cursor/mcp.json` | Работно пространство на курсора JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini потребител JSON (`mcpServers`) |
| `<работно пространство>/.gemini/settings.json` | Проект Gemini JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Антигравитационен JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro потребител JSON (`mcpServers`) |
| `<работно пространство>/.kiro/settings/mcp.json` | Kiro проект JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<работно пространство>/.mcp.json` | JSON (`mcpServers`) |
| `<работно пространство>/opencode.json` | OpenCode работно пространство JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode потребител JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<работно пространство>/.github/mcp.json` | GitHub Copilot хранилище JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI потребител JSON (`mcp`) |
| `<работно пространство>/kilo.json` | Kilo CLI проект JSON (`mcp`) |
| `<работно пространство>/.kilocode/mcp.json` | Работно пространство на Kilo Code JSON (`mcpServers`) |
| `<работно пространство>/.continue/mcpServers/omni-skills.yaml` | Продължаване на работното пространство YAML (`mcpServers`) |
| `<работно пространство>/.junie/mcp/mcp.json` | Джуни проект JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie потребител JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`разширения`) |
| `<работно пространство>/.zed/settings.json` | Zed работно пространство JSON (`context_servers`) |
| `<работно пространство>/.vscode/mcp.json` | JSON (`сървъри`) |
| `~/.config/Code/User/mcp.json` | Потребител на VS код JSON (`сървъри`) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders потребител JSON (`сървъри`) |
| `<работно пространство>/.devcontainer/devcontainer.json` | Вложен JSON контейнер за разработка (`customizations.vscode.mcp.servers`) |
| Клиентски корен `mcp.json` | JSON (формат за всеки клиент) |

Това дава на коша:

-**16 клиента с възможност за конфигурация или IDE**
-**33 първокласни целеви пътеки**
-**19 форматирани профили**

Текущото първокласно покритие на конфигурацията обхваща:

- Claude Code и Claude Desktop
- Курсор
- VS код и контейнери за разработка
- Gemini CLI
- Антигравитация
- Киро
- Codex CLI
- Продължете
- Джуни
- Уиндсърф
- Гъска
- OpenCode
- Клайн
- GitHub Copilot CLI
- Кило код
- Зед

Кандидатите за ръчни или само за фрагменти все още са умишлено извън набора за първокласен писател, докато договорите им за публична конфигурация не станат достатъчно стабилни.### 🧭 Expansion Policy

Omni Skills вече третира клиентската поддръжка като модел на три нива:

1.**с възможност за инсталиране**
   Съществува стабилна директория с умения, така че CLI и страничната кола могат да инсталират умения директно.
2.**с възможност за конфигурация**
   Съществува стабилен, документиран MCP конфигурационен формат, така че `config-mcp` може да прегледа и напише първокласен файл.
3.**ръчно или само с фрагменти**
   Продуктът очевидно поддържа MCP под някаква форма, но публичните документи все още не оправдават безопасен автоматичен запис.

Ето защо клиенти като JetBrains AI Assistant остават само ръчни/фрагменти, докато Roo Code и Postman остават извън първокласния набор за писане, докато тяхната безопасна история за автоматично сливане стане достатъчно силна за този проект.---

## 🔒 Allowlist Model

Местният страничен кош пише само под**изричен разрешен списък**.### 🟢 Default allowlist:

- Известни клиентски корени под `$HOME`
- `~/.codeium` за потребителска конфигурация на Windsurf
- `~/.copilot` за GitHub Copilot CLI
- `~/.cline` за Cline CLI
- `~/.config/goose` за конфигурация на Goose
- `~/.config/kilo` и `~/.config/opencode` за Kilo/OpenCode CLI конфигурация
- `$CODEX_HOME` (или `~/.codex`, ако не е зададен)
- Текущ корен на работното пространство
- `<работно пространство>/.agents`
- `<работно пространство>/.github`
- `<работно пространство>/.kilocode`
- `<работно пространство>/.opencode`
- `<работно пространство>/.zed`
- `<работно пространство>/.continue`
- `<работно пространство>/.vscode`### ➕ Extend the allowlist:

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

Поддържаната CLI обвивка поддържа генерирането на MCP конфигурация достъпно без директни JSON-RPC извиквания:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Поведението по подразбиране е само за визуализация. `--write` прилага конфигурацията към разрешения целеви път под списъка с разрешени.### 🌊 Windsurf

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

Инструментът `configure_client_mcp` може също да запише специфични за Claude настройки, когато подадете:

- `allowed_mcp_servers`
- `отказани_mcp_сървъри`
- `permissions_deny`
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

За цели на VS Code и Dev Container, `configure_client_mcp` може също да пише:

- `sandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Това се съпоставя с текущите указания на VS Code за поставяне в пясъчна среда на локални stdio MCP сървъри.### 🧰 Cross-Client Entry Options

`configure_client_mcp` вече поддържа по-богати метаданни за въвеждане в поддържаните профили:

- `заглавия`
- `env`
- `env_файл`
- `cwd`
- `timeout_ms`
- `описание`
- `include_tools`
- `exclude_tools`
- `с увреждания`
- "доверие".

Специфични опции за профил:

- Клод: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gemini: `mcp_allowed_servers`, `mcp_excluded_servers`
- Киро: `disabled_tools`, `auto_approve`
- VS код и контейнери за разработка: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` връща `recipes` заедно с визуализацията или приложената конфигурация.

Тези рецепти са блокове с насоки, съобразени с клиента, например:

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp add ...`
- рецепти за ръчно редактиране на файлове за Cursor, VS Code, Kiro и Claude Desktop

Общата стратегия вече е умишлено консервативна:

- повторно използване на малък набор от канонични конфигурационни семейства, където е възможно
- съхранявайте поръчкови писатели само когато официалните документи изискват различна форма
- избягвайте изобретяването на автоматични писатели за недокументирани цели---

## 🔐 Hosted HTTP Hardening

HTTP транспортите поддържат същите управлявани от env контроли като API на каталога:

| Променлива | Цел |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_NOSITELJ_TOKEN` | Удостоверяване на маркер на носител |
| `OMNI_SKILLS_HTTP_API_KEYS` | API ключове, разделени със запетаи |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Интроспекция по време на изпълнение само за администратор |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Макс. заявки на прозорец |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Прозорец на ограничение на скоростта в ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Разрешаване на регистрирането на проверка |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Записване на журнал за проверка във файл |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Ограничете произхода на браузъра |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Ограничете разрешените IP адреси на източника |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Връщане на `503` за неадминистративни, нездравословни маршрути |

> 🟢 `/healthz` остава отворен. `/mcp`, `/sse` и `/messages` изискват удостоверяване, когато са активирани. `/admin/runtime` изисква администраторския токен, когато е конфигуриран.---

## 🌍 Official Docs That Shape Support Decisions

Текущият набор за писане и границите само за ръчно използване бяха проверени спрямо официалните продуктови документи, включително:

- Антропен код на Клод MCP
- OpenAI Codex CLI и OpenAI Docs MCP
- Курсор MCP документи
- Продължете MCP документите
- Киро MCP док
- OpenCode MCP документи
- Cline MCP документи
- Кило код MCP документи
- GitHub Copilot CLI документи
- Zed MCP документи
- VS Code MCP документи
- JetBrains AI Assistant MCP документи

Тези документи са причината някои клиенти да получават първокласни автоматични писатели, докато други засега остават само с фрагменти.