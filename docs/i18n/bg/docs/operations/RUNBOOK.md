# 🔧 System Runbook (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Пълното оперативно ръководство за изграждане, валидиране, обслужване, защита и отстраняване на проблеми с Omni Skills.**---

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

| Команда | Какво прави |
|:--------|:-------------|
| `npm run validate` | Валидира `SKILL.md`, регенерира `metadata.json`, изчислява таксономия/зрялост/качество/сигурност |
| `npm run taxonomy:report` | Показва предложения за преместване на категории без пренаписване на файлове |
| `npm run verify:scanners` | Потвърждава покритието на скенера, записано в генерираните метаданни за умения |
| `npm run release:notes` | Генерира персонализирани бележки за изданието от метаданни, пакети и git история |
| `npm run build` | Регенерира каталог/манифести/архиви/контролни суми, проверява покритието на скенера и архивите, възстановява `docs/CATALOG.md` |
| `npm тест` | Пълен пакет за дим в CLI, API, MCP, sidecar и архивни потоци |---

## 🖥️ Visual Shell

Публикуваният CLI вече включва операторска обвивка, базирана на мастило:```bash
npx omni-skills ui
```

Текущи възможности:

- ръководено инсталиране за известни клиенти и персонализирани пътеки
- поток търсене след инсталиране
- Съветник за стартиране на MCP
- Съветник за стартиране на API
- Съветник за стартиране на A2A
- скорошни инсталации и рестартиране на услуги
- именувани предварителни настройки за инсталиране и обслужване

Път на местно състояние:```text
~/.omni-skills/state/ui-state.json
```

Резервен:```bash
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

Статичният скенер проверява автоматично всички умения:

| Правило Семейство | Примери |
|:------------|:---------|
| 🎭 Бързо инжектиране | Модели на ексфилтрация, отмяна на инструкции |
| 💣 Разрушителни команди | `rm -rf`, `формат`, `mkfs` |
| 🔑 Подозрителни пътища | `/etc/shadow`, `~/.ssh`, идентификационни файлове |
| ⚠️ Рискови примитиви | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Изисква `clamscan` в `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Само хеш търсене — неизвестните файлове**не се качват**по подразбиране.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Врата за строго освобождаване:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Архивите се произвеждат автоматично от `npm run build`:

| Изход | Път |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Тарбол | `dist/archives/<skill>.tar.gz` |
| 🔒 Контролни суми | `dist/archives/<skill>.checksums.txt` |

`dist/` е ангажиран умишлено в това хранилище. Генерираният каталог, манифести, пакети и архиви са входове по време на изпълнение за потоци на инсталиране на CLI, повърхности за изтегляне на API, визуализации на MCP, предаване на A2A задача, димни тестове и проверка на изданието.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Незадължителна замяна на публичен ключ:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Ако не е предоставен публичен ключ, компилацията го извлича чрез `openssl` в `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Правила за версията:

- стъпки на корекция до `.10`
- след `.10`, следващото издание хвърля минор и нулира корекцията на `.0`

Примери:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Сценарий | Команда |
|:---------|:--------|
| 📥 Инсталиране по подразбиране (Antigravity) | `npx omni-skills` |
| 🎯 Специфично умение + клиент | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Откриване → инсталиране | `npx omni-skills find figma --tool cursor --install --yes` |
| 📦 Инсталиране на пакет | `npx omni-skills --cursor --bundle basics` |
| 🩺 Проверете инсталирането | `npx omni-skills doctor` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Филтър | Флаг | Пример |
|:-------|:-----|:--------|
| 📂 Категория | `--категория` | `--развитие на категория` |
| 🖥️ Инструмент | `--инструмент` | `--курсор на инструмента` |
| ⚠️ Риск | `--риск` | `-безопасен за риск` |
| 📊 Сортиране | `--sort` | `--сортирай качество\|най-добри практики\|ниво\|сигурност\|име` |
| 🔄 Поръчайте | `--поръчка` | `--order asc\|desc` |
| ⭐ Минимално качество | `--минимално качество` | `--мин-качество 80` |
| 📋 Мин. BP | `--min-best-practices` | `--min-best-practices 60` |
| 🎯 Минимално ниво | `--мин-ниво` | `--мин-ниво 2` |
| 🛡️ Минимална сигурност | `--min-security` | `--min-security 90` |
| ✅ Валидиране | `--статус на валидиране` | `--състоянието-на валидиране премина` |
| 🛡️ Сигурност | `--състояние-защита` | `--състоянието-защита премина` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Метод | Крайна точка | Цел |
|:-------|:---------|:--------|
| `ВЗЕМЕТЕ` | `/healthz` | Здравна проверка |
| `ВЗЕМЕТЕ` | `/openapi.json` | Спецификация на OpenAPI 3.1 |
| `ВЗЕМЕТЕ` | `/v1/skills` | Списък с филтри |
| `ВЗЕМЕТЕ` | `/v1/търсене` | Търсене в пълен текст |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/archives` | Архивна обява |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/download/archive?format=zip` | Изтегляне на архив |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/download/archive/checksums` | Манифест на контролна сума |### 🔐 Hosted API Hardening

| Характеристика | Команда |
|:--------|:--------|
| 🔑 Удостоверяване на носител | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ Удостоверяване на API ключ | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Удостоверяване по време на изпълнение на администратор | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 Ограничаване на скоростта | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Одитно регистриране | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |
| 🌍 CORS разрешен списък | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 Списък с разрешени IP | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Режим на поддръжка | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁 Доверен прокси | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 `/healthz` остава отворен по дизайн; каталожните маршрути изискват удостоверяване, когато са активирани. `GET /admin/runtime` изисква администраторския токен, когато е конфигуриран, и връща моментната снимка на управлението на живо.---

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

Колата вече може да визуализира или напише MCP конфигурация за:

- Потребителски и проектни настройки на Claude
- Конфигурация на Claude Desktop
- Cline потребителска конфигурация
- Конфигурация на GitHub Copilot CLI потребител и хранилище
- Конфигурация на потребител и работно пространство на курсора
- Конфигурация на Codex TOML
- Gemini потребителски и проектни настройки
- Kilo CLI потребител и конфигурация на проекта
- Конфигурация на работното пространство на Kilo
- Потребителски и проектни настройки на Kiro
- OpenCode потребителска и работна конфигурация
- Продължаване на YAML конфигурацията на работното пространство
- Windsurf потребителска конфигурация
- Конфигурация на работното пространство на Zed
- работно пространство `.mcp.json`
- VS Code работно пространство и потребителска конфигурация
- Конфигурация на Dev Container

`configure_client_mcp` също така връща `рецепти` за всеки клиент, така че операторите получават еквивалентния CLI или стъпки за ръчна настройка заедно с визуализацията.### 🧾 MCP Config Preview and Write Flow

Използвайте унифицирания CLI, когато искате генериране на конфигурация, без да извиквате директно MCP инструмента:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Визуалната обвивка разкрива същия работен процес чрез:

- `npx omni-skills ui`
- `Услуги`
- `Конфигуриране на MCP клиент`

Командата остава в режим на визуализация, освен ако не бъде подаден `--write`.### 🔐 Hosted MCP Hardening

Същите env vars като API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Защитени маршрути**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` остава отворен.---

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

Локалният път по подразбиране остава прост - първо:

- `json` или `sqlite` постоянството може да работи с деактивирано запитване на опашката
- задайте `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` само когато искате многоработни искове и лизинг при отказ
- запазете координацията на Redis като разширена хоствана опция, а не като базова линия### 🧱 Multi-Worker Lease Setup

Пуснете повече от един A2A възел срещу едно и също SQLite хранилище, за да получите базирано на лизинг възстановяване при отказ:```bash
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

Ако работник умре, докато дадена задача „работи“, друг работник може да си го върне след изтичане на лизинга и да продължи изпълнението.### 🟥 Redis Coordination

За хоствани или многовъзлови внедрявания, които не искат координация на опашка, свързана със споделеното SQLite хранилище, превключете координатора към Redis:```bash
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

В този режим:

- постоянството все още живее в JSON или SQLite
- заявяване на задачи и собственост на лизинг се преместват в Redis
- множество A2A възли могат да споделят опашка, без да разчитат на SQLite координация на ниво ред### 📡 Endpoints

| Метод | Път | Цел |
|:-------|:-----|:--------|
| `ВЗЕМЕТЕ` | `/healthz` | Здравна проверка |
| `ВЗЕМЕТЕ` | `/.well-known/agent.json` | Карта на агент (откриване на A2A) |
| `ПУБЛИКУВАНЕ` | `/a2a` | JSON-RPC крайна точка за задачи и стрийминг |### 🧭 Supported JSON-RPC Methods

| Метод | Цел |
|:-------|:--------|
| `съобщение/изпрати` | Стартиране или продължаване на задача |
| `съобщение/поток` | Стартирайте задача и предавайте поточно SSE актуализации |
| `tasks/get` | Анкетиране на моментна снимка на задача |
| `задачи/отказ` | Отмяна на активна задача |
| `tasks/resubscribe` | Възобновете актуализациите на SSE за съществуваща задача |
| `tasks/pushNotificationConfig/set` | Регистрирайте push webhook |
| `tasks/pushNotificationConfig/get` | Прочетете конфигурация за натискане |
| `tasks/pushNotificationConfig/list` | Избройте push конфигурации за задача |
| `tasks/pushNotificationConfig/delete` | Премахване на конфигурация за натискане |### 📡 Task Lifecycle

Текущата среда на изпълнение поддържа тези състояния на задачата:

- `изпратено`
- `работи`
- `изисква се въвеждане`
- `завършен`
- `отменен`
- `неуспешно`

Задачите се запазват или в JSON файл, или в SQLite хранилище и се презареждат при рестартиране. Завършените и прекъснатите задачи остават достъпни. Задачи, които все още са били „изпратени“ или „работещи“ по време на изключване, се възстановяват с изрични метаданни за рестартиране и се възобновяват автоматично по подразбиране.### 🧪 Example: Start a Task

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

Хранилището вече има два работни потока:

| Работен процес | Тригер | Цел |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR към `main` | Изградете, тествайте и потвърдете, че генерираните артефакти са ангажирани |
| `release.yml` | Натискане на маркер `v*` или ръчно изпращане | Стартирайте скенери за версия на версията, проверете етикета на версията, подпишете артефакти, пакетирайте архива, публикувайте в npm и създайте GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Тайна | Използва се от | Цел |
|:-------|:--------|:--------|
| `VT_API_KEY` или `VIRUSTOTAL` | `release.yml` | Изискване на хеш търсения на VirusTotal в компилации на версии |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` или `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Необходим частен ключ за подписване на отделен архив в CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` или `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Незадължително отмяна на публичен ключ; иначе извлечен от частния ключ |
| `NPM_TOKEN` | `publish-npm` работа | Удостоверете `npm publish` за издания на тагове |### 🦠 Release Scanner Policy

`release.yml` задава или подготвя:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || тайни.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` от временното хранилище на бегача

Това означава, че всяка базирана на тагове версия трябва:

- инсталирайте и обновете ClamAV на бегача
- регенериране на метаданни с активиран ClamAV
- регенериране на метаданни с активиран VirusTotal
- декодиране на CI ключ за подписване във временното хранилище на бегача
- подайте `npm run verify:scanners:strict`
- подайте `npm run verify:archives:strict`
- преминаване на тестове и проверка на пакета преди публикуване на npm
- генериране на персонализирани бележки за изданието от каталог метаданни и git история
- създайте издание на GitHub с прикачени активи за издание след публикуване---

## 1️⃣1️⃣ Environment Variables Reference

| Променлива | Цел | По подразбиране |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Замяна на основния път на каталог | Автоматично разпознато |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Допълнително разрешени пътища за запис | Известни клиентски корени |
| `OMNI_SKILLS_MCP_MODE` | Задайте `local` за кош | Дистанционно |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Алтернативен флаг за локален режим | „0“ |
| `OMNI_SKILLS_API_BASE_URL` | Публичен URL адрес на API за MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Публичен основен URL адрес | — |
| `OMNI_SKILLS_HTTP_NOSITELJ_TOKEN` | Токен за удостоверяване на носител | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | API ключове, разделени със запетаи | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Администраторско означение за удостоверяване по време на изпълнение | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Макс. заявки на прозорец | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Прозорец на ограничение на скоростта (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Разрешаване на регистрирането на проверка | „0“ |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` или `текст` одитен изход | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Незадължителен път на журналния файл за одит | стандартен изход |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Списък с разрешени източници на CORS, разделени със запетая | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Списък с разрешени IP или CIDR адреси, разделени със запетая | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Експресна настройка на прокси за доверие | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Активиране на отговорите за поддръжка | „0“ |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Поддръжка `Опитай-След` секунди | „300“ |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Симулирано забавяне на асинхронна задача | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | хранилище на задачи `json`, `sqlite` или `memory` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Персонализиран файл за съхранение на задачи A2A | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Разрешаване на анкетиране на споделена опашка за работещи под наем | „0“ |
| `ВСКИ_УМЕНИЯ_A2A_ТИП_КООРДИНАЦИЯ` | `store`, `sqlite`, `local` или `redis` координатор | `магазин` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL за външна координация | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Ключов префикс на Redis за метаданни на опашка | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Интервал за анкетиране на опашка за лизингови работници | „250“ |
| `OMNI_SKILLS_A2A_LEASE_MS` | Продължителност на лизинга, преди друг работник да може да поиска обратно задача | „4000“ |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Стабилен идентификатор на работник за собственост на лизинг и диагностика | Име на хост + PID + случаен суфикс |
| `ВСКИ_УМЕНИЯ_A2A_ИЗПЪЛНИТЕЛ` | `inline` или `process` изпълнител на задачи | `вграден` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Замяна на външна работна команда | Двоичен възел |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON масив от външни работни аргументи | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Възобновете възстановени изпратени/работещи задачи при зареждане | „1“ |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Разрешаване на не-HTTPS уебкукички извън localhost | „0“ |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Разрешете сканирането на ClamAV | „0“ |
| `VT_API_KEY` | VirusTotal API ключ | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Личен ключ за подписване | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Отмяна на публичен ключ | Автоматично получено |---

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

1. Създайте отново с `npm run build`
2. Стартирайте отново `npm run verify:archives`
3. Ако подписването е активирано, потвърдете наличността на публичния ключ и `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- Потвърдете, че `VT_API_KEY` съществува в тайните на хранилището
- Потвърдете, че „freshclam“ е успешен на бегача
- Възстановете локално с `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm стартирайте компилация`
- Стартирайте отново `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- Потвърдете, че `NPM_TOKEN` съществува в тайните на хранилището
- Потвърдете, че Git тагът съвпада точно с версията на `package.json`
- Проверете дали архивът, качен от `release-verify`, съществува в артефактите на работния процес### ✍️ Release Signing Fails in CI

- Потвърдете, че `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` или `OMNI_SKILLS_SIGN_PRIVATE_KEY` съществува в тайните на хранилището
- Ако предоставите таен публичен ключ, потвърдете, че съвпада с частния ключ
- Потвърдете, че `openssl` е наличен и частният ключ е PEM-форматиран
- Възстановете локално с `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Стартирайте отново `npm run verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- Проверете `OMNI_SKILLS_HTTP_BEARER_TOKEN` или `OMNI_SKILLS_HTTP_API_KEYS`
- Включете `Authorization: Bearer <token>` или `x-api-key` хедър### 🚦 API/MCP Returns `429 Too Many Requests`

- Увеличете `OMNI_SKILLS_RATE_LIMIT_MAX`
- Разширете `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Намалете пакетния трафик от клиенти или сонди### 🛂 API/MCP Admin Runtime Returns `401`

- Проверете `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Изпратете „x-admin-token: <token>“ или „Authorization: Bearer <admin-token>“### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Деактивирайте `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Използвайте `/healthz` за сонди за жизненост по време на поддръжка
- Използвайте `/admin/runtime` с администраторския токен за диагностика на оператора### 🌍 Browser Requests Fail CORS Validation

- Проверете `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Включете точната схема и хост, например `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Проверете `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Проверете `OMNI_SKILLS_A2A_REDIS_URL`
- Проверете свързаността на Redis от всеки възел
- Проверете `/healthz` за моментната снимка на `coordination`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
