# 🔌 Local MCP Sidecar (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Додаткове розширення локального режиму для `@omni-skills/server-mcp`, яке додає інструменти з підтримкою файлової системи для виявлення клієнтів, керування навичками та створення конфігурації MCP.**---

## 📊 Status

| Особливість | Держава |
|:--------|:------|
| ✅ Інструменти каталогу лише для читання | Реалізовано |
| ✅ Локальні інструменти з підтримкою файлової системи | Реалізовано |
| ✅ 3 транспорти (stdio/stream/sse) | Реалізовано |
| ✅ Записи в білому списку | Реалізовано |
| ✅ Попередній перегляд перед записом за замовчуванням | Реалізовано |
| ✅ Написання конфігурації MCP з урахуванням клієнта | Реалізовано |
| ✅ Аутентифікація HTTP + обмеження швидкості | Реалізовано |
| ✅ Підписи та контрольні суми під час випуску | Реалізовано для згенерованих архівів і представлено API/MCP |
| 🟡 Локальний контроль за підписом під час запису | Ще не введено в дію; локальний режим попередньо переглядає та записує з довіреної локальної перевірки |
| 🟢 Поточне покриття клієнтів | 7 клієнтів із можливістю інсталяції, 16 клієнтів із можливістю конфігурації, 33 цілі конфігурації, 19 профілів конфігурації |---

## 🎯 Purpose

Локальний режим додає**інструменти для файлової системи**поверх існуючої поверхні каталогу MCP, доступної лише для читання. Використовуйте його, коли агенту потрібно:

- 🕵️ Виявляти сумісні локальні клієнти ШІ
- 📋 Перевірте встановлені навички
- 👁️ Попередній перегляд встановлення або видалення навичок (сухий запуск)
- 📦 Застосуйте встановлення або видалення локальних навичок
- ⚙️ Напишіть локальний конфігураційний файл MCP після попереднього перегляду

Він навмисно розділяє дві проблеми:

-**цілі встановлення навичок**
  клієнти зі стабільним каталогом навичок, які можуть використовувати `install_skills`
-**Цілі конфігурації MCP**
  клієнти або IDE зі стабільним задокументованим форматом конфігурації MCP, навіть якщо вони не мають каталогу навичок---

## 🔌 Transports

| Транспорт | Протокол | Випадок використання |
|:----------|:---------|:---------|
| `stdio` | Труба | Пряма клієнтська інтеграція |
| `потік` | Потоковий HTTP | Сучасні HTTP-клієнти |
| `sse` | Події, надіслані сервером | Застарілі клієнти |---

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

> Усі команди автоматично встановлюють `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Коли ввімкнено локальний режим, стають доступними такі додаткові інструменти:

| Інструмент | Опис | За замовчуванням |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Сканування клієнтів штучного інтелекту та їхніх навичок/шляхів конфігурації | — |
| 📋 `list_installed_skills` | Перегляньте встановлені навички для конкретного клієнта | — |
| 📦 `install_skills` | Встановити навички в каталог навичок клієнта | 🔍 сухий біг |
| 🗑️ `remove_skills` | Видалити встановлені навички з клієнта | 🔍 сухий біг |
| ⚙️ `configure_client_mcp` | Записати конфігурацію MCP для конкретного клієнта | 🔍 сухий біг |

> ⚠️ `install_skills`, `remove_skills` і `configure_client_mcp` за умовчанням мають значення**dry-run**, якщо `dry_run` пропущено.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Клієнт | Шлях |
|:-------|:-----|
| 🔵 Клод Код | `~/.claude/skills` |
| 🔵 Курсор | `~/.cursor/skills` |
| 🟡 Gemini CLI | `~/.gemini/skills` |
| 🟣 Антигравітація | `~/.gemini/antigravity/skills` |
| 🟢 Кіро | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` або `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<робоча область>/.opencode/skills` |

Ці 7 цілей є єдиними першокласними місцями встановлення на сьогодні.### ⚙️ MCP Config Files

| Цільовий | Формат |
|:-------|:-------|
| `~/.claude/settings.json` | Налаштування Claude Code JSON |
| `<робоча область>/.claude/settings.json` | Налаштування проекту Claude JSON |
| `~/.claude.json` | Застарілий Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (залежно від ОС) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<робоча область>/.cursor/mcp.json` | Робоча область курсору JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Користувач Gemini JSON (`mcpServers`) |
| `<робоча область>/.gemini/settings.json` | Проект Gemini JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Антигравітація JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Користувач Kiro JSON (`mcpServers`) |
| `<робоча область>/.kiro/settings/mcp.json` | Проект Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<робоча область>/.mcp.json` | JSON (`mcpServers`) |
| `<робоча область>/opencode.json` | Робоча область OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | Користувач OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<робоча область>/.github/mcp.json` | GitHub Copilot репозиторій JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Користувач Kilo CLI JSON (`mcp`) |
| `<робоча область>/kilo.json` | Проект Kilo CLI JSON (`mcp`) |
| `<робоча область>/.kilocode/mcp.json` | Робоча область Kilo Code JSON (`mcpServers`) |
| `<робоча область>/.continue/mcpServers/omni-skills.yaml` | Продовжити робочу область YAML (`mcpServers`) |
| `<робоча область>/.junie/mcp/mcp.json` | Джуні проект JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Користувач Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`розширення`) |
| `<робоча область>/.zed/settings.json` | Робоча область Zed JSON (`context_servers`) |
| `<робоча область>/.vscode/mcp.json` | JSON (`сервери`) |
| `~/.config/Code/User/mcp.json` | Користувач VS Code JSON (`сервери`) |
| `~/.config/Code - Insiders/User/mcp.json` | Користувач VS Code Insiders JSON (`сервери`) |
| `<робоча область>/.devcontainer/devcontainer.json` | Вкладений контейнер для розробників JSON (`customizations.vscode.mcp.servers`) |
| Корінь клієнта `mcp.json` | JSON (формат для кожного клієнта) |

Це дає коляску:

-**16 клієнтів або IDE з можливістю конфігурації**
-**33 першокласні цільові шляхи**
-**19 форматів профілів**

Поточне покриття першокласної конфігурації охоплює:

- Claude Code та Claude Desktop
- Курсор
- Контейнери VS Code і Dev
- Gemini CLI
- Антигравітація
- Кіро
- Codex CLI
- Продовжуйте
- Джуні
- Віндсерфінг
- Гусак
- OpenCode
- Клайн
- GitHub Copilot CLI
- Код кіло
- Зед

Кандидати вручну або лише для фрагментів усе ще навмисно перебувають поза першокласним набором авторів, доки їхні публічні контракти конфігурації не стануть достатньо стабільними.### 🧭 Expansion Policy

Omni Skills тепер розглядає підтримку клієнтів як трирівневу модель:

1.**можливість встановлення**
   Існує стабільний каталог навичок, тому CLI та допоміжний коліс можуть встановлювати навички безпосередньо.
2.**з підтримкою конфігурації**
   Існує стабільний задокументований формат конфігурації MCP, тому `config-mcp` може попередньо переглянути та записати файл першого класу.
3.**ручний або лише фрагмент**
   Продукт явно підтримує MCP у певній формі, але загальнодоступні документи ще не виправдовують безпечний автоматичний запис.

Ось чому такі клієнти, як JetBrains AI Assistant, залишаються лише ручними/фрагментами, тоді як Roo Code та Postman залишаються поза першокласним набором авторів, доки їх безпечна історія автоматичного злиття не стане достатньою для цього проекту.---

## 🔒 Allowlist Model

Локальний помічник пише лише під**явним білим списком**.### 🟢 Default allowlist:

- Відомі корені клієнта в `$HOME`
- `~/.codeium` для конфігурації користувача Windsurf
- `~/.copilot` для GitHub Copilot CLI
- `~/.cline` для Cline CLI
- `~/.config/goose` для конфігурації Goose
- `~/.config/kilo` і `~/.config/opencode` для конфігурації CLI Kilo/OpenCode
- `$CODEX_HOME` (або `~/.codex`, якщо не встановлено)
— Корінь поточної робочої області
- `<робоча область>/.agents`
- `<робоча область>/.github`
- `<робоча область>/.kilocode`
- `<робоча область>/.opencode`
- `<робоча область>/.zed`
- `<робоча область>/.продовжити`
- `<робоча область>/.vscode`### ➕ Extend the allowlist:

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

Обгортка CLI з підтримкою Sidecar забезпечує створення конфігурації MCP доступною без прямих викликів JSON-RPC:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Типовою поведінкою є лише попередній перегляд. `--write` застосовує конфігурацію до дозволеного цільового шляху в білому списку.### 🌊 Windsurf

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

Інструмент `configure_client_mcp` також може записувати параметри, специфічні для Claude, коли ви передаєте:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

Для цілей VS Code та Dev Container `configure_client_mcp` також може писати:

- `пісочниця включена`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Це відповідає поточним інструкціям VS Code щодо пісочниці локальних серверів stdio MCP.### 🧰 Cross-Client Entry Options

`configure_client_mcp` тепер підтримує розширені метадані входу в підтримуваних профілях:

- `заголовки`
- `env`
- `env_file`
- `cwd`
- `timeout_ms`
- `опис`
- `include_tools`
- `exclude_tools`
- `вимкнено`
- "довіра".

Спеціальні параметри профілю:

- Клод: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gemini: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- Код VS і контейнери Dev: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` повертає `recipes` разом із попереднім переглядом або застосованою конфігурацією.

Ці рецепти є клієнтськими блоками вказівок, наприклад:

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp add ...`
- рецепти ручного редагування файлів для Cursor, VS Code, Kiro та Claude Desktop

Загальна стратегія тепер навмисно консервативна:

- повторне використання невеликого набору канонічних сімей конфігурацій, де це можливо
- зберігайте створені на замовлення автори лише тоді, коли офіційні документи вимагають чіткої форми
- уникайте винаходу автоматичних записувачів для незадокументованих цілей---

## 🔐 Hosted HTTP Hardening

Транспорти HTTP підтримують ті самі керовані env елементи керування, що й API каталогу:

| Змінна | Призначення |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Аутентифікація маркера носія |
| `OMNI_SKILLS_HTTP_API_KEYS` | Ключі API, розділені комами |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Самоаналіз лише для адміністратора |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Максимальна кількість запитів на вікно |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Вікно обмеження швидкості в мс |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Увімкнути журнал аудиту |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Записати журнал аудиту у файл |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Обмежити походження браузера |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Обмежити дозволені вихідні IP-адреси |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Повернути `503` для неадміністраторських, несправних маршрутів |

> 🟢 `/healthz` залишається відкритим. `/mcp`, `/sse` і `/messages` вимагають авторизації, коли ввімкнено. `/admin/runtime` потребує маркер адміністратора після налаштування.---

## 🌍 Official Docs That Shape Support Decisions

Поточний набір програм для запису та обмеження лише вручну було перевірено на відповідність офіційній документації продукту, зокрема:

- Антропний код Клода MCP
- OpenAI Codex CLI та OpenAI Docs MCP
- Курсор MCP docs
- Продовжити документи MCP
- Kiro MCP docs
- Документи OpenCode MCP
- Документи Cline MCP
- Кіло код MCP документи
- Документи GitHub Copilot CLI
- Документи Zed MCP
- Документи VS Code MCP
- Документи JetBrains AI Assistant MCP

Через ці документи деякі клієнти отримують першокласні автоматичні автори, а інші поки що залишаються лише фрагментами.