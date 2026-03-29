# 🔧 System Runbook (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Повний оперативний посібник для створення, перевірки, обслуговування, захисту та усунення неполадок Omni Skills.**---

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

| Команда | Що він робить |
|:--------|:-------------|
| `npm run validate` | Перевіряє `SKILL.md`, відновлює `metadata.json`, обчислює таксономію/зрілість/якість/безпеку |
| `npm run taxonomy:report` | Показує пропозиції зміни категорії без перезапису файлів |
| `npm run verify:scanners` | Підтверджує охоплення сканера, записане в згенерованих метаданих навичок |
| `npm run release:notes` | Створює власні примітки до випуску з метаданих, пакетів і історії git |
| `npm run build` | Регенерує каталог/маніфести/архіви/контрольні суми, перевіряє охоплення сканера та архіви, перебудовує `docs/CATALOG.md` |
| `npm test` | Повний пакет димових інструментів для потоків CLI, API, MCP, sidecar та архіву |---

## 🖥️ Visual Shell

Опублікований CLI тепер містить оболонку оператора на основі Ink:```bash
npx omni-skills ui
```

Поточні можливості:

- Керована інсталяція для відомих клієнтів і настроюваних шляхів
- процес пошуку та встановлення
— Майстер запуску MCP
— Майстер запуску API
— Майстер запуску A2A
- останні інсталяції та перезапуски служб
- іменовані налаштування встановлення та обслуговування

Місцевий шлях стану:```text
~/.omni-skills/state/ui-state.json
```

Запасний варіант:```bash
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

Статичний сканер автоматично перевіряє всі навички:

| Правило Сім'я | Приклади |
|:------------|:---------|
| 🎭 Швидке введення | Шаблони ексфільтрації, перевизначення інструкцій |
| 💣 Деструктивні команди | `rm -rf`, `format`, `mkfs` |
| 🔑 Підозрілі шляхи | `/etc/shadow`, `~/.ssh`, файли облікових даних |
| ⚠️ Ризиковані примітиви | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Вимагає `clamscan` у `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Лише хеш-пошук — невідомі файли**не завантажуються**за умовчанням.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Ворота суворого випуску:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Архіви створюються автоматично за допомогою `npm run build`:

| Вихід | Шлях |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Тарбол | `dist/archives/<skill>.tar.gz` |
| 🔒 Контрольні суми | `dist/archives/<skill>.checksums.txt` |

`dist/` навмисно зафіксовано в цьому сховищі. Згенерований каталог, маніфести, пакети та архіви є вхідними даними для потоків встановлення CLI, поверхонь завантаження API, попереднього перегляду MCP, передачі завдань A2A, димових тестів і перевірки випуску.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Додаткова заміна відкритого ключа:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Якщо відкритого ключа не надано, збірка отримує його через `openssl` у `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Політика версії:

- патч збільшується до `.10`
- після `.10` наступний випуск скидає мінор і скидає патч на `.0`

приклади:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Сценарій | Команда |
|:---------|:--------|
| 📥 Встановлення за умовчанням (Антигравітація) | `npx omni-skills` |
| 🎯 Конкретні навички + клієнт | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Discovery → встановити | `npx omni-skills find figma --tool cursor --install --yes` |
| 📦 Пакетне встановлення | `npx omni-skills --cursor --bundle basics` |
| 🩺 Перевірте встановлення | `npx omni-skills doctor` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Фільтр | Прапор | Приклад |
|:-------|:-----|:--------|
| 📂 Категорія | `--категорія` | `--розробка категорії` |
| 🖥️ Інструмент | `--інструмент` | `--курсор інструментів` |
| ⚠️ Ризик | `--ризик` | `--ризик безпечний` |
| 📊 Сортувати | `--sort` | `--sort quality\|best-practices\|level\|security\|name` |
| 🔄 Замовити | `--order` | `--order asc\|desc` |
| ⭐ Мінімальна якість | `--min-якість` | `--min-якість 80` |
| 📋 Мінімальний тиск | `--min-best-practices` | `--min-best-practices 60` |
| 🎯 Мінімальний рівень | `--min-level` | `--min-level 2` |
| 🛡️ Мінімальна безпека | `--min-security` | `--min-security 90` |
| ✅ Перевірка | `--validation-status` | `--перевірка-статус пройдено` |
| 🛡️ Безпека | `--security-status` | `--статус безпеки пройдено` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Метод | Кінцева точка | Призначення |
|:-------|:---------|:--------|
| `ОТРИМАТИ` | `/healthz` | Перевірка стану здоров'я |
| `ОТРИМАТИ` | `/openapi.json` | Специфікація OpenAPI 3.1 |
| `ОТРИМАТИ` | `/v1/skills` | Список з фільтрами |
| `ОТРИМАТИ` | `/v1/search` | Повнотекстовий пошук |
| `ОТРИМАТИ` | `/v1/skills/:id/archives` | Архівний список |
| `ОТРИМАТИ` | `/v1/skills/:id/download/archive?format=zip` | Завантажити архів |
| `ОТРИМАТИ` | `/v1/skills/:id/download/archive/checksums` | Маніфест контрольної суми |### 🔐 Hosted API Hardening

| Особливість | Команда |
|:--------|:--------|
| 🔑 Автентифікація носія | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ Аутентифікація ключа API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Автентифікація середовища виконання адміністратора | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 Обмеження швидкості | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Реєстрація аудиту | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |
| 🌍 Білий список CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 Білий список IP | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Режим обслуговування | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁 Надійний проксі | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 `/healthz` залишається відкритим; Маршрути каталогу вимагають авторизації, якщо ввімкнено. `GET /admin/runtime` потребує маркер адміністратора після налаштування та повертає поточний знімок керування.---

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

Додаткова коляска тепер може переглядати або писати конфігурацію MCP для:

- Налаштування користувача та проекту Claude
- Конфігурація робочого столу Claude
- Конфігурація користувача Cline
— Конфігурація користувача GitHub Copilot CLI та сховища
— Конфігурація користувача та робочого середовища курсору
- Конфігурація Codex TOML
— Налаштування користувача та проекту Gemini
- Конфігурація користувача та проекту Kilo CLI
— Конфігурація робочого простору Kilo
— Параметри користувача та проекту Kiro
— Конфігурація користувача та робочого середовища OpenCode
- Продовжити конфігурацію робочої області YAML
— Конфігурація користувача Windsurf
— Конфігурація робочого середовища Zed
- робоча область `.mcp.json`
— Робоча область VS Code і конфігурація користувача
- Конфігурація Dev Container

`configure_client_mcp` також повертає `рецепти` для кожного клієнта, тому оператори отримують еквівалентний CLI або кроки налаштування вручну разом із попереднім переглядом.### 🧾 MCP Config Preview and Write Flow

Використовуйте уніфікований CLI, якщо потрібно створити конфігурацію без безпосереднього виклику інструменту MCP:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Візуальна оболонка демонструє той самий робочий процес через:

- `npx omni-skills ui`
- `Послуги`
- `Налаштувати клієнт MCP`

Команда залишається в режимі попереднього перегляду, якщо не передано `--write`.### 🔐 Hosted MCP Hardening

Ті самі змінні env, що й API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Захищені маршрути**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` залишається відкритим.---

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

Локальний шлях за замовчуванням залишається простим:

- `json` або `sqlite` збереження може працювати з вимкненим опитуванням черги
- встановлюйте `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` лише тоді, коли ви бажаєте отримати заявку на роботу з кількома працівниками та відмову оренди
- зберегти координацію Redis як розширену розміщену опцію, а не базову лінію### 🧱 Multi-Worker Lease Setup

Запустіть більше одного вузла A2A в одному сховищі SQLite, щоб отримати відмову на основі оренди:```bash
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

Якщо працівник помирає, поки завдання «працює», інший працівник може повернути його після закінчення терміну оренди та продовжити виконання.### 🟥 Redis Coordination

Для розміщених або багатовузлових розгортань, які не хочуть, щоб координація черги була прив’язана до спільного сховища SQLite, перемкніть координатора на Redis:```bash
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

У цьому режимі:

- постійність все ще живе в JSON або SQLite
- вимога завдання та право власності на оренду переміщено до Redis
- кілька вузлів A2A можуть спільно використовувати чергу, не покладаючись на координацію на рівні рядків SQLite### 📡 Endpoints

| Метод | Шлях | Призначення |
|:-------|:-----|:--------|
| `ОТРИМАТИ` | `/healthz` | Перевірка стану здоров'я |
| `ОТРИМАТИ` | `/.well-known/agent.json` | Картка агента (виявлення A2A) |
| `POST` | `/a2a` | Кінцева точка JSON-RPC для завдань і потокового передавання |### 🧭 Supported JSON-RPC Methods

| Метод | Призначення |
|:-------|:--------|
| `повідомлення/надіслати` | Почати або продовжити завдання |
| `повідомлення/потік` | Розпочати завдання та транслювати оновлення SSE |
| `tasks/get` | Опитування знімка завдання |
| `завдання/скасувати` | Скасувати активне завдання |
| `tasks/resubscribe` | Відновити оновлення SSE для існуючого завдання |
| `tasks/pushNotificationConfig/set` | Реєстрація push-вебхука |
| `tasks/pushNotificationConfig/get` | Прочитайте конфігурацію push |
| `tasks/pushNotificationConfig/list` | Список конфігурацій push для завдання |
| `tasks/pushNotificationConfig/delete` | Видаліть конфігурацію push |### 📡 Task Lifecycle

Поточне середовище виконання підтримує такі стани завдання:

- `подано`
- `робочий`
- `потрібне введення`
- `завершено`
- `скасовано`
- `не вдалося`

Завдання зберігаються або у файлі JSON, або в сховищі SQLite та перезавантажуються під час перезапуску. Виконані та перервані завдання залишаються доступними. Завдання, які все ще були «надісланими» або «працюючими» під час завершення роботи, відновлюються за допомогою явних метаданих перезапуску та відновлюються автоматично за замовчуванням.### 🧪 Example: Start a Task

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

Репозиторій тепер має два робочі процеси:

| Робочий процес | Тригер | Призначення |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR до `main` | Збірка, тестування та підтвердження згенерованих артефактів закріплені |
| `release.yml` | Тег push `v*` або відправка вручну | Запустіть сканери випуску, перевірте тег версії, підпишіть артефакти, запакуйте архів, опублікуйте в npm і створіть GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Секрет | Використовується | Призначення |
|:-------|:--------|:--------|
| `VT_API_KEY` або `VIRUSTOTAL` | `release.yml` | Вимагати хеш-пошук VirusTotal у збірках випусків |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` або `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Необхідний секретний ключ для підпису відокремленого архіву в CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` або `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Додаткове перевизначення відкритого ключа; інакше отримані з закритого ключа |
| `NPM_TOKEN` | завдання `publish-npm` | Автентифікуйте `npm publish` для випусків тегів |### 🦠 Release Scanner Policy

`release.yml` встановлює або готує:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || secrets.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` з тимчасового сховища раннера

Це означає, що кожен випуск на основі тегів повинен:

- встановіть і оновіть ClamAV на бігуні
- регенерувати метадані з увімкненим ClamAV
- повторно генерувати метадані з увімкненим VirusTotal
- декодувати матеріал ключа підпису CI у тимчасове сховище бігунів
- передайте `npm run verify:scanners:strict`
- передати `npm run verify:archives:strict`
- пройдіть тести та перевірку пакетів перед публікацією npm
- генерувати власні примітки до випуску з метаданих каталогу та історії git
- створіть випуск GitHub із прикріпленими ресурсами випуску після публікації---

## 1️⃣1️⃣ Environment Variables Reference

| Змінна | Призначення | За замовчуванням |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Перевизначити кореневий шлях каталогу | Автоматично визначено |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Додатково дозволені шляхи запису | Відомі корені клієнта |
| `OMNI_SKILLS_MCP_MODE` | Встановіть `локальний` для коляски | Віддалений |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Прапор Alt для локального режиму | `0` |
| `OMNI_SKILLS_API_BASE_URL` | Публічна URL-адреса API для MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | URL загальнодоступної бази | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Маркер автентифікації носія | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Ключі API, розділені комами | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Маркер автентифікації середовища виконання адміністратора | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Максимальна кількість запитів на вікно | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Вікно обмеження швидкості (мс) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Увімкнути журнал аудиту | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | Вивід аудиту `json` або `text` | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Додатковий шлях до журналу аудиту | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Розділений комами вихідний білий список CORS | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Список дозволених IP-адрес або CIDR, розділених комами | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Налаштування Express Trust Proxy | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Увімкнути відповіді на обслуговування | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Обслуговування `Повторна спроба` секунд | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Змодельована затримка асинхронного завдання | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | сховище завдань `json`, `sqlite` або `memory` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Користувацький файл сховища завдань A2A | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Увімкнути опитування спільної черги для працівників, які працюють із орендою | `0` |
| `OMNI_KILLS_A2A_COORDINATION_TYPE` | `store`, `sqlite`, `локальний` або `redis` координатор | `магазин` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL для зовнішньої координації | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Префікс ключа Redis для метаданих черги | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Інтервал опитування черги орендних працівників | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Тривалість оренди до того, як інший працівник може повернути завдання | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Стабільний робочий ідентифікатор для лізингової власності та діагностики | Ім'я хоста + PID + довільний суфікс |
| `OMNI_SKILLS_A2A_EXECUTOR` | `inline` або `process` виконавець завдань | `inline` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Перевизначити зовнішню робочу команду | Двійковий вузол |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | Масив JSON зовнішніх робочих аргументів | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Відновити відновлені надіслані/робочі завдання під час завантаження | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Дозволити не-HTTPS-вебхуки за межами localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Увімкнути сканування ClamAV | `0` |
| `VT_API_KEY` | Ключ API VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Закритий ключ для підпису | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Заміна відкритого ключа | Автоматично отримані |---

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

1. Перебудуйте за допомогою `npm run build`
2. Повторно запустіть `npm run verify:archives`
3. Якщо підпис увімкнено, підтвердьте наявність відкритого ключа та `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- Переконайтеся, що `VT_API_KEY` існує в секретах сховища
- Підтвердьте, що `freshclam` успішно виконано на бігуні
- Перебудуйте локально за допомогою `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Повторно запустіть `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- Переконайтеся, що `NPM_TOKEN` існує в секретах сховища
- Переконайтеся, що тег Git точно відповідає версії `package.json`
- Переконайтеся, що архів, завантажений `release-verify`, існує в артефактах робочого процесу### ✍️ Release Signing Fails in CI

- Підтвердьте наявність `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` або `OMNI_SKILLS_SIGN_PRIVATE_KEY` в секретах сховища
- Якщо ви надаєте секретний відкритий ключ, підтвердьте, що він відповідає закритому ключу
- Переконайтеся, що `openssl` доступний і закритий ключ відформатований у PEM
- Перебудуйте локально за допомогою `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Повторно запустіть `npm run verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- Перевірте `OMNI_SKILLS_HTTP_BEARER_TOKEN` або `OMNI_SKILLS_HTTP_API_KEYS`
- Додайте заголовок `Authorization: Bearer <token>` або `x-api-key`### 🚦 API/MCP Returns `429 Too Many Requests`

- Збільште `OMNI_SKILLS_RATE_LIMIT_MAX`
- Розширте `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Зменшення пакетного трафіку від клієнтів або зондів### 🛂 API/MCP Admin Runtime Returns `401`

- Перевірте `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Надішліть `x-admin-token: <токен>` або `Авторизація: носій <admin-токен>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Вимкнути `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Використовуйте `/healthz` для зондів живучості під час обслуговування
- Використовуйте `/admin/runtime` з маркером адміністратора для діагностики оператора### 🌍 Browser Requests Fail CORS Validation

- Перевірте `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Додайте точну схему та хост, наприклад `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Перевірте `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Перевірте `OMNI_SKILLS_A2A_REDIS_URL`
- Перевірте підключення Redis з кожного вузла
- Перевірте `/healthz` для моментального знімка `coordination`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
