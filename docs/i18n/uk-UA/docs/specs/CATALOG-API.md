# 🌐 Catalog API Surface (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**API HTTP лише для читання для виявлення навичок, пошуку, порівняння, планування встановлення та завантаження артефактів.**---

## 📊 Status

| Особливість | Держава |
|:--------|:------|
| ✅ Кінцеві точки каталогу | Реалізовано |
| ✅ Auth (носій + ключ API) | Реалізовано |
| ✅ Авторизація під час виконання адміністратора | Реалізовано |
| ✅ Обмеження швидкості | Реалізовано |
| ✅ Журнал аудиту | Реалізовано |
| ✅ Білі списки CORS та IP | Реалізовано |
| ✅ Режим обслуговування | Реалізовано |
| ✅ Архів завантажень | Реалізовано |
| ✅ Специфікація OpenAPI | Реалізовано |
| ⚠️ Бекенд управління | Базовий рівень, керований середовищем; зовнішній шлюз або IdP все ще необов’язкові |---

## 🎯 Purpose

API надає поверхню в стилі реєстру для:

- 📋 Перелік і фільтрація навичок за якістю, безпекою, категорією, ризиком тощо
- 📌 Отримання індивідуальних маніфестів навичок
- 🔎 Повнотекстовий пошук і порівняння різних навичок
- 📦 Список пакетів із наявністю
- 📐 Створення плану встановлення лише для читання
- 📥 Завантаження згенерованих артефактів, архівів і маніфестів контрольної суми

Той самий каталог і поверхня маніфесту також є основою для:

- локальне планування встановлення CLI
- Відповіді виявлення MCP лише для читання
- Виявлення A2A та передача плану встановлення
- потенційні приватні каталоги із зовнішньою автентифікацією, накладеною поверх---

## Швидкий старт

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**За замовчуванням**: `127.0.0.1:3333`---

## 🔐 Security Controls

Усі елементи керування безпекою керуються env і є необов’язковими:

| Контроль | Змінна | Приклад |
|:--------|:---------|:--------|
| 🔑**Автентика носія**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `замінити мене` |
| 🗝️**Автентифікація ключа API**| `OMNI_SKILLS_HTTP_API_KEYS` | `key-a,key-b` |
| 🛂**Авторизація адміністратора**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-secret` |
| 🚦**Обмеження швидкості**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Аудиторське журналювання**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Формат аудиту**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` або `text` |
| 📄**Аудиторський файл**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**Білий список CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Білий список IP-адрес**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Надійний проксі**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `петля` |
| 🚧**Режим обслуговування**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Повторити через**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Поведінка:**
- 🟢 `/healthz` залишається**завжди неавтентифікованим**
- 🔒 Усі інші маршрути вимагають авторизації, якщо авторизацію ввімкнено
- 🛂 `/admin/runtime` потребує маркер адміністратора, якщо ввімкнено
- 🚦 Виконується обмеження швидкості із заголовками відповіді `X-RateLimit-*`
- 🧾 Кожна відповідь містить `X-Request-Id`
- 🚧 Режим обслуговування повертає `503` для непрацездатних і неадміністраторських маршрутів### ✅ Current governance decision

Поточний напрямок проекту полягає в тому, щоб**повторно використовувати той самий формат каталогу для публічних або приватних розгортань**і накладати зовнішню автентифікацію, коли це необхідно.

Це означає:

- маніфест і форма API залишаються спільними
- розміщені на власному хості та локальні розгортання можуть залишатися на базовій лінії в процесі
- більш просунуте хостингове керування може пізніше перейти до зовнішнього шлюзу або корпоративного рівня авторизації без розгалуження моделі даних### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| Метод | Шлях | Опис |
|:-------|:-----|:------------|
| `ОТРИМАТИ` | `/healthz` | Перевірка стану здоров'я (неавтентифікована) |
| `ОТРИМАТИ` | `/openapi.json` | Специфікація Dynamic OpenAPI 3.1 |
| `ОТРИМАТИ` | `/admin/runtime` | Знімок управління та виконання (автентифікація адміністратора, якщо ввімкнено) |### 📚 Catalog & Skills

| Метод | Шлях | Опис |
|:-------|:-----|:------------|
| `ОТРИМАТИ` | `/v1/skills` | Список навичок із фільтрами |
| `ОТРИМАТИ` | `/v1/skills/:id` | Отримати індивідуальний маніфест навичок |
| `ОТРИМАТИ` | `/v1/search` | Повнотекстовий пошук |
| `ОТРИМАТИ` | `/v1/compare?ids=id1,id2` | Порівняти кілька навичок |
| `ОТРИМАТИ` | `/v1/bundles` | Список комплектів із наявністю |
| `POST` | `/v1/install/plan` | Створити план встановлення |### 🔎 List/Search Filters

| Фільтр | Приклад |
|:-------|:--------|
| `категорія` | `?category=development` |
| `інструмент` | `?інструмент=курсор` |
| `ризик` | `?risk=safe` |
| `сортувати` | `?sort=quality\|best-practices\|level\|security\|name` |
| `замовлення` | `?order=asc\|desc` |
| `мінімальна_якість` | `?min_quality=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `min_level` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `статус_перевірки` | `?status_validation=passed` |
| `захищений_статус` | `?security_status=passed` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| Метод | Шлях | Опис |
|:-------|:-----|:------------|
| `ОТРИМАТИ` | `/v1/catalog/download` | Завантажити повний каталог |
| `ОТРИМАТИ` | `/v1/skills/:id/artifacts` | Список артефактів умінь |
| `ОТРИМАТИ` | `/v1/skills/:id/archives` | Список архівів навичок |
| `ОТРИМАТИ` | `/v1/skills/:id/downloads` | Усі доступні посилання для завантаження |
| `ОТРИМАТИ` | `/v1/skills/:id/download/manifest` | Маніфест навичок JSON |
| `ОТРИМАТИ` | `/v1/skills/:id/download/entrypoint` | Навички SKILL.md |
| `ОТРИМАТИ` | `/v1/skills/:id/download/artifact?path=<шлях>` | Конкретний артефакт |
| `ОТРИМАТИ` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Архів навичок |
| `ОТРИМАТИ` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Відокремлений підпис |
| `ОТРИМАТИ` | `/v1/skills/:id/download/archive/checksums` | Контрольні суми SHA-256 |---

## 🔗 Link Enrichment

Коли запити обробляються через API, сервер**автоматично збагачує**маніфести, списки артефактів і плани встановлення абсолютними URL-адресами, отриманими з джерела вхідного запиту. Це збагачення під час виконання, а не в `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Плани встановлення – це попередній перегляд, а не віддалений запис.**

API ніколи не встановлюється на машину абонента. Він повертає:
- 📌 Вибрані метадані навичок
- ⚠️ Попередження про відсутніх учасників пакета
- 🖥️ Конкретні команди CLI для локального запуску
- 🔗 Публічні URL-адреси для завантаження, якщо джерело запиту доступне---

## 🔌 Relationship to MCP

Сервер MCP повторно використовує ті самі публічні URL-адреси API, якщо налаштовано:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Це дозволяє попереднім переглядам інсталяції MCP повертати конкретні URL-адреси маніфесту та артефактів, а не лише локальні шляхи сховища.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` повертає знімок управління, корисний для розміщеної діагностики:

- активні методи авторизації
- статус admin-auth
- вікно обмеження швидкості та макс
- Білий список CORS
- Білий список IP-адрес
- стан режиму обслуговування
- призначення та формат аудиту
- підсумки поточного каталогу
- відтворення ідентифікатора запиту для відстеження