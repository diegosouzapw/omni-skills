# 🔧 System Runbook (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Полное руководство по созданию, проверке, обслуживанию, обеспечению безопасности и устранению неполадок Omni Skills.**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| Команда | Что он делает |
|:--------|:-------------|
| `npm run validate` | Проверяет `SKILL.md`, восстанавливает `metadata.json`, вычисляет таксономию/зрелость/качество/безопасность |
| `npm run таксономия: отчет` | Показывает предложения по изменению категорий без перезаписи файлов |
| `npm runverify:сканеры` | Подтверждает покрытие сканера, записанное в сгенерированных метаданных навыков |
| `npm run Release:notes` | Создает пользовательские примечания к выпуску на основе метаданных, пакетов и истории git |
| `npm run build` | Восстанавливает каталог/манифесты/архивы/контрольные суммы, проверяет покрытие сканера и архивы, перестраивает `docs/CATALOG.md` |
| `npm-тест` | Полный пакет дыма для CLI, API, MCP, вспомогательных программ и потоков архивирования |---

## 🖥️ Visual Shell

Опубликованный интерфейс командной строки теперь включает в себя оболочку оператора на основе Ink:```bash
npx omni-skills ui
```

Текущие возможности:

- управляемая установка для известных клиентов и пользовательских путей.
- поток поиска и установки
- Мастер запуска MCP
- Мастер запуска API
- Мастер запуска A2A
- недавние установки и перезапуски сервисов
- именованные настройки установки и обслуживания

Путь к локальному состоянию:```text
~/.omni-skills/state/ui-state.json
```

Отступать:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

Статический сканер автоматически проверяет все навыки:

| Семья правил | Примеры |
|:------------|:---------|
| 🎭 Оперативная инъекция | Шаблоны эксфильтрации, переопределение инструкций |
| 💣 Деструктивные команды | `rm -rf`, `format`, `mkfs` |
| 🔑 Подозрительные пути | `/etc/shadow`, `~/.ssh`, файлы учетных данных |
| ⚠️ Рискованные примитивы | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Требуется `clamscan` в `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Только поиск по хешу — неизвестные файлы**не загружаются**по умолчанию.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Строгие ворота выпуска:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Архивы создаются автоматически с помощью `npm run build`:

| Выход | Путь |
|:-------|:-----|
| 📦 Почтовый индекс | `dist/archives/<skill>.zip` |
| 📦 Тарбол | `dist/archives/<skill>.tar.gz` |
| 🔒 Контрольные суммы | `dist/archives/<skill>.checksums.txt` |

`dist/` намеренно зафиксирован в этом репозитории. Сгенерированный каталог, манифесты, пакеты и архивы являются входными данными во время выполнения для потоков установки CLI, поверхностей загрузки API, предварительного просмотра MCP, передачи задач A2A, дымовых тестов и проверки выпуска.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Необязательное переопределение открытого ключа:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Если открытый ключ не указан, сборка извлекает его через `openssl` в `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Политика версий:

- патч увеличивается до `.10`
- после `.10` следующий выпуск меняет минор и сбрасывает патч на `.0`

Примеры:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Сценарий | Команда |
|:---------|:--------|
| 📥 Установка по умолчанию (Антигравитация) | `npx омни-навыки` |
| 🎯Специфический навык + клиент | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Discovery → установить | `npx omni-skills find Figma --tool курсор --install --yes` |
| 📦 Пакетная установка | `npx omni-skills --cursor --bundle Essentials` |
| 🩺 Проверка установки | `npx многофункциональный врач` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Фильтр | Флаг | Пример |
|:-------|:-----|:--------|
| 📂 Категория | `--категория` | `--разработка категорий` |
| 🖥️ Инструмент | `--инструмент` | `--инструмент курсора` |
| ⚠️ Риск | `--риск` | `--риск безопасен` |
| 📊 Сортировать | `--сортировать` | `--sort качество\|лучшие практики\|уровень\|безопасность\|имя` |
| 🔄 Заказать | `--заказать` | `--order asc\|desc` |
| ⭐ Минимальное качество | `--min-качество` | `--мин-качество 80` |
| 📋 Мин. АД | `--min-best-practices` | `--min-best-practices 60` |
| 🎯 Минимальный уровень | `--min-level` | `--min-level 2` |
| 🛡️ Минимальная охрана | `--min-security` | `--min-security 90` |
| ✅ Проверка | `--статус-валидации` | `--статус проверки пройден` |
| 🛡️ Безопасность | `--статус-безопасности` | `--статус безопасности пройден` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Метод | Конечная точка | Цель |
|:-------|:---------|:--------|
| `ПОЛУЧИТЬ` | `/здоровье` | Проверка здоровья |
| `ПОЛУЧИТЬ` | `/openapi.json` | Спецификация OpenAPI 3.1 |
| `ПОЛУЧИТЬ` | `/v1/skills` | Список с фильтрами |
| `ПОЛУЧИТЬ` | `/v1/поиск` | Полнотекстовый поиск |
| `ПОЛУЧИТЬ` | `/v1/skills/:id/archives` | Архивный листинг |
| `ПОЛУЧИТЬ` | `/v1/skills/:id/download/archive?format=zip` | Скачать архив |
| `ПОЛУЧИТЬ` | `/v1/skills/:id/download/archive/checksums` | Манифест контрольной суммы |### 🔐 Hosted API Hardening

| Особенность | Команда |
|:--------|:--------|
| 🔑 Аутентификация на предъявителя | `OMNI_SKILLS_HTTP_BEARER_TOKEN=замените меня npx omni-skills api` |
| 🗝️ Аутентификация по ключу API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Авторизация во время выполнения администратора | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 Ограничение скорости | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx API omni-skills` |
| 📝 Ведение журнала аудита | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx API omni-skills` |
| 🌍 Белый список CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 Белый список IP-адресов | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Режим обслуживания | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx API omni-skills` |
| 🔁 Доверенный прокси | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 `/healthz` по замыслу остаётся открытым; Маршруты каталога требуют аутентификации, если они включены. GET /admin/runtime требует токен администратора при настройке и возвращает моментальный снимок управления в реальном времени.---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

Sidecar теперь может просматривать или записывать конфигурацию MCP для:

- Настройки пользователя и проекта Claude
- Конфигурация Claude Desktop
- Конфигурация пользователя Cline
— Конфигурация пользователя и репозитория GitHub Copilot CLI.
- Конфигурация пользователя курсора и рабочей области
- Конфигурация Кодекса TOML
- Настройки пользователя и проекта Gemini
- Конфигурация пользователя и проекта Kilo CLI
- Конфигурация рабочего пространства Kilo
- Настройки пользователя и проекта Kiro
- Конфигурация пользователя и рабочей области OpenCode
- Продолжить настройку YAML рабочей области.
- Конфигурация пользователя виндсерфинга
- Конфигурация рабочего пространства Zed
- рабочая область `.mcp.json`
- Рабочая область VS Code и пользовательская конфигурация.
- Конфигурация Dev-контейнера

`configure_client_mcp` также возвращает `рецепты` для каждого клиента, поэтому операторы получают эквивалентные шаги CLI или ручной настройки вместе с предварительным просмотром.### 🧾 MCP Config Preview and Write Flow

Используйте унифицированный интерфейс командной строки, если вы хотите создать конфигурацию без прямого вызова инструмента MCP:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Визуальная оболочка предоставляет тот же рабочий процесс посредством:

- `npx omni-skills ui`
- `Услуги`
- `Настроить MCP-клиент`

Команда остается в режиме предварительного просмотра, если не указан `--write`.### 🔐 Hosted MCP Hardening

Те же переменные окружения, что и API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Защищенные маршруты**: `POST/mcp` · `GET/sse` · `POST/messages` · `GET /admin/runtime`

> 🟢 `/healthz` остается открытым.---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

Локальный путь по умолчанию остается простым:

- Постоянство `json` или `sqlite` может работать с отключенным опросом очереди.
— установите `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` только в том случае, если вы хотите заявить несколько рабочих и выполнить аварийное переключение аренды.
- сохраняйте координацию Redis как расширенный вариант размещения, а не как базовый вариант.### 🧱 Multi-Worker Lease Setup

Запустите более одного узла A2A в одном и том же хранилище SQLite, чтобы получить аварийное переключение на основе аренды:```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Если работник умирает во время «работы» задачи, другой работник может вернуть ее после истечения срока аренды и продолжить выполнение.### 🟥 Redis Coordination

Для размещенных или многоузловых развертываний, которые не хотят привязывать координацию очереди к общему хранилищу SQLite, переключите координатор на Redis:```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

В этом режиме:

- персистентность по-прежнему существует в JSON или SQLite
- утверждение задач и владение арендой перенесены в Redis
- несколько узлов A2A могут совместно использовать очередь, не полагаясь на координацию на уровне строк SQLite.### 📡 Endpoints

| Метод | Путь | Цель |
|:-------|:-----|:--------|
| `ПОЛУЧИТЬ` | `/здоровье` | Проверка здоровья |
| `ПОЛУЧИТЬ` | `/.well-known/agent.json` | Карточка агента (обнаружение A2A) |
| `ПОСТ` | `/a2a` | Конечная точка JSON-RPC для задач и потоковой передачи |### 🧭 Supported JSON-RPC Methods

| Метод | Цель |
|:-------|:--------|
| `сообщение/отправить` | Запустить или продолжить задачу |
| `сообщение/поток` | Запуск задачи и потоковая передача обновлений SSE |
| `задачи/получить` | Опрос снимка задачи |
| `задачи/отмена` | Отменить активную задачу |
| `задачи/переподписка` | Возобновить обновления SSE для существующей задачи |
| `задачи/pushNotificationConfig/set` | Зарегистрируйте push-вебхук |
| `задачи/pushNotificationConfig/get` | Чтение push-конфигурации |
| `задачи/pushNotificationConfig/список` | Список push-конфигураций для задачи |
| `задачи/pushNotificationConfig/удалить` | Удалить push-конфигурацию |### 📡 Task Lifecycle

Текущая среда выполнения поддерживает следующие состояния задач:

- `отправлено`
- «работаю»
- `требуется ввод`
- `завершено`
- `отменено`
- `не удалось`

Задачи сохраняются либо в файле JSON, либо в хранилище SQLite и перезагружаются при перезапуске. Завершенные и прерванные задачи остаются доступными. Задачи, которые все еще были «отправлены» или «работали» во время завершения работы, восстанавливаются с использованием явных метаданных перезапуска и по умолчанию возобновляются автоматически.### 🧪 Example: Start a Task

```bash
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

В репозитории теперь есть два рабочих процесса:

| Рабочий процесс | Триггер | Цель |
|:---------|:--------|:--------|
| `validate.yml` | Нажмите/PR на `main` | Сборка, тестирование и подтверждение фиксации сгенерированных артефактов |
| `release.yml` | Нажатие тега `v*` или отправка вручную | Запустите сканеры релизного уровня, проверьте тег версии, подпишите артефакты, упакуйте tar-архив, опубликуйте его в npm и создайте GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Секрет | Используется | Цель |
|:-------|:--------|:--------|
| `VT_API_KEY` или `VIRUSTOTAL` | `release.yml` | Требовать поиска по хешу VirusTotal в сборках релизов |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` или `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Требуемый закрытый ключ для подписи отдельного архива в CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` или `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Необязательное переопределение открытого ключа; в противном случае получено из закрытого ключа |
| `NPM_TOKEN` | вакансия `publish-npm` | Аутентификация `npmPublish` для релизов тегов |### 🦠 Release Scanner Policy

`release.yml` устанавливает или подготавливает:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || секреты.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` из временного хранилища бегуна.

Это означает, что каждый выпуск на основе тегов должен:

- установить и обновить ClamAV на раннере
- восстановить метаданные с включенным ClamAV
- восстановить метаданные с включенным VirusTotal
- декодировать материал ключа подписи CI во временное хранилище бегуна
- передать `npm runverify:scanners:strict`
- передать `npm runverify:archives:strict`
- пройти тесты и проверку пакета перед публикацией npm
- генерировать пользовательские примечания к выпуску из метаданных каталога и истории git.
- создайте выпуск GitHub с прикрепленными к нему ресурсами выпуска после публикации.---

## 1️⃣1️⃣ Environment Variables Reference

| Переменная | Цель | По умолчанию |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Переопределить корневой путь каталога | Автоматически обнаружено |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Дополнительные разрешенные пути записи | Известные корни клиентов |
| `OMNI_SKILLS_MCP_MODE` | Для коляски установите значение «local» | Удаленный |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Флаг Alt для локального режима | `0` |
| `OMNI_SKILLS_API_BASE_URL` | URL-адрес общедоступного API для MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | URL общедоступной базы | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Токен авторизации носителя | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Ключи API, разделенные запятыми | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Токен аутентификации среды выполнения администратора | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Максимальное количество запросов на окно | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Окно ограничения скорости (мс) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Включить ведение журнала аудита | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | выходные данные аудита `json` или `text` | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Необязательный путь к файлу журнала аудита | стандартный вывод |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Список разрешенных источников CORS, разделенный запятыми | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Список разрешенных IP-адресов или CIDR, разделенных запятыми | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Настройка прокси-сервера Express Trust | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Включить ответы на вопросы обслуживания | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Обслуживание `Повторить-через` секунды | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Имитация задержки асинхронной задачи | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | хранилище задач `json`, `sqlite` или `memory` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Пользовательский файл хранилища задач A2A | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Включение опроса общей очереди для работников, поддерживающих аренду | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | координатор `store`, `sqlite`, `local` или `redis` | `магазин` |
| `OMNI_SKILLS_A2A_REDIS_URL` | URL-адрес Redis для внешнего координации | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Префикс ключа Redis для метаданных очереди | `омни-навыки:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Интервал опроса очереди для арендаторов | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Срок аренды, прежде чем другой работник сможет вернуть задачу | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Стабильный идентификатор работника для аренды и диагностики | Имя хоста + PID + случайный суффикс |
| `OMNI_SKILLS_A2A_EXECUTOR` | `inline` или `process` исполнитель задач | `встроенный` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Переопределить команду внешнего работника | Узел двоичный |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON-массив внешних рабочих аргументов | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Возобновить восстановленные отправленные/рабочие задачи при загрузке | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Разрешить веб-перехватчики, отличные от HTTPS, за пределами локального хоста | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Включить сканирование ClamAV | `0` |
| `VT_API_KEY` | Ключ API VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Закрытый ключ для подписи | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Переопределение открытого ключа | Автоматически полученный |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Пересоберите с помощью npm run build.
2. Перезапустите `npm runverify:archives`
3. Если подпись включена, подтвердите доступность открытого ключа и openssl.### 🦠 Release Workflow Fails on Scanner Coverage

- Убедитесь, что `VT_API_KEY` существует в секретах репозитория.
- Подтвердите, что `freshclam` успешно работает на бегуне.
- Пересоберите локально с помощью `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Перезапустите `npm runverify:scanners:strict`### 📦 npm Publish Fails in CI

- Убедитесь, что `NPM_TOKEN` существует в секретах репозитория.
– Убедитесь, что тег Git точно соответствует версии package.json.
- Убедитесь, что архив, загруженный с помощью Release-verify, существует в артефактах рабочего процесса.### ✍️ Release Signing Fails in CI

- Убедитесь, что `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` или `OMNI_SKILLS_SIGN_PRIVATE_KEY` существует в секретах репозитория.
– Если вы предоставляете секретный ключ открытого ключа, убедитесь, что он соответствует секретному ключу.
- Убедитесь, что `openssl` доступен и закрытый ключ имеет формат PEM.
- Перестройте локально с помощью `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Перезапустите `npm runverify:archives:strict`.### 🔒 API/MCP Returns `401 Unauthorized`

- Проверьте `OMNI_SKILLS_HTTP_BEARER_TOKEN` или `OMNI_SKILLS_HTTP_API_KEYS`
- Включите заголовок `Authorization: Bearer <token>` или `x-api-key`.### 🚦 API/MCP Returns `429 Too Many Requests`

- Увеличьте `OMNI_SKILLS_RATE_LIMIT_MAX`
- Расширение `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Уменьшите пакетный трафик от клиентов или зондов.### 🛂 API/MCP Admin Runtime Returns `401`

- Проверьте `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Отправьте `x-admin-token: <token>` или `Authorization: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Отключить OMNI_SKILLS_HTTP_MAINTENANCE_MODE.
- Используйте `/healthz` для проверки работоспособности во время обслуживания.
- Используйте `/admin/runtime` с токеном администратора для диагностики оператора.### 🌍 Browser Requests Fail CORS Validation

- Проверьте `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
– Укажите точную схему и хост, например https://app.example.com.### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Проверьте `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Проверьте `OMNI_SKILLS_A2A_REDIS_URL`
- Проверьте подключение Redis на каждом узле.
- Проверьте `/healthz` на наличие снимка `координации`.### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
