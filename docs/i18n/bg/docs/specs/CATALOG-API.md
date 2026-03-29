# 🌐 Catalog API Surface (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**HTTP API само за четене за откриване на умения, търсене, сравнение, планиране на инсталиране и изтегляне на артефакти.**---

## 📊 Status

| Характеристика | състояние |
|:--------|:------|
| ✅ Каталожни крайни точки | Внедрено |
| ✅ Удостоверяване (носител + API ключ) | Внедрено |
| ✅ Удостоверяване по време на изпълнение на администратор | Внедрено |
| ✅ Ограничаване на скоростта | Внедрено |
| ✅ Регистриране на одит | Внедрено |
| ✅ Списъци с разрешения на CORS и IP | Внедрено |
| ✅ Режим на поддръжка | Внедрено |
| ✅ Архивни изтегляния | Внедрено |
| ✅ Спецификация на OpenAPI | Внедрено |
| ⚠️ Бекенд за управление | Базово ниво, управлявано от Env; външен шлюз или IdP все още не са задължителни |---

## 🎯 Purpose

API предоставя повърхност в стил регистър за:

- 📋 Изброяване и филтриране на умения по качество, сигурност, категория, риск и др
- 📌 Извличане на манифести на индивидуални умения
- 🔎 Търсене в пълен текст и сравнение на множество умения
- 📦 Списък на пакети с наличност
- 📐 Генериране на план за инсталиране само за четене
- 📥 Изтегляне на генерирани артефакти, архиви и манифести на контролна сума

Същият този каталог и повърхността на манифеста е и основата за:

- планиране на локално CLI инсталиране
- MCP отговори за откриване само за четене
- Откриване на A2A и предаване на план за инсталиране
- потенциални частни каталози с външно удостоверяване, насложено отгоре---

## Бърз старт

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

**По подразбиране**: `127.0.0.1:3333`---

## 🔐 Security Controls

Всички контроли за сигурност се управляват от env и са незадължителни:

| Контрол | Променлива | Пример |
|:--------|:---------|:--------|
| 🔑**Удостоверяване на носител**| `OMNI_SKILLS_HTTP_NOSITELJ_TOKEN` | `замени ме` |
| 🗝️**API ключ за удостоверяване**| `OMNI_SKILLS_HTTP_API_KEYS` | `ключ-a,ключ-b` |
| 🛂**Удостоверяване на администратора**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-secret` |
| 🚦**Ограничаване на скоростта**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Регистриране на одит**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | „1“ |
| 🗂️**Формат на одита**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` или `текст` |
| 📄**Одитен файл**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS разрешен списък**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Списък с разрешени IP адреси**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Доверен прокси**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧**Режим на поддръжка**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | „1“ |
| ⏱️**Опитайте отново след**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | „300“ |

**Поведение:**
- 🟢 `/healthz` остава**винаги неавтентифициран**
- 🔒 Всички други маршрути изискват удостоверяване, когато удостоверяването е активирано
- 🛂 `/admin/runtime` изисква администраторския токен, когато е активиран
- 🚦 Ограничаването на скоростта се извършва със заглавки на отговора `X-RateLimit-*`
- 🧾 Всеки отговор носи „X-Request-Id“.
- 🚧 Режимът на поддръжка връща `503` за нездравословни, неадминистративни маршрути### ✅ Current governance decision

Настоящата посока на проекта е**повторно използване на същия формат на каталог за публични или частни внедрявания**и наслояване на външно удостоверяване, когато е необходимо.

Това означава:

- манифестът и формата на API остават споделени
- самостоятелно хостваните и локалните внедрявания могат да останат на базовата линия в процес
- по-усъвършенстваното хоствано управление може да се премести към външен шлюз или слой за удостоверяване на предприятието по-късно, без да се разклонява моделът на данни### 🔐 Full hardened example:

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

| Метод | Път | Описание |
|:-------|:-----|:------------|
| `ВЗЕМЕТЕ` | `/healthz` | Здравна проверка (неавтентифицирана) |
| `ВЗЕМЕТЕ` | `/openapi.json` | Dynamic OpenAPI 3.1 спецификация |
| `ВЗЕМЕТЕ` | `/admin/runtime` | Моментна снимка на управление и време на изпълнение (администраторско удостоверяване, когато е активирано) |### 📚 Catalog & Skills

| Метод | Път | Описание |
|:-------|:-----|:------------|
| `ВЗЕМЕТЕ` | `/v1/skills` | Избройте умения с филтри |
| `ВЗЕМЕТЕ` | `/v1/skills/:id` | Вземете индивидуален манифест на умения |
| `ВЗЕМЕТЕ` | `/v1/търсене` | Търсене в пълен текст |
| `ВЗЕМЕТЕ` | `/v1/compare?ids=id1,id2` | Сравнете множество умения |
| `ВЗЕМЕТЕ` | `/v1/пакети` | Избройте пакети с наличност |
| `ПУБЛИКУВАНЕ` | `/v1/инсталиране/план` | Генериране на план за инсталиране |### 🔎 List/Search Filters

| Филтър | Пример |
|:-------|:--------|
| `категория` | `?category=development` |
| `инструмент` | `?tool=cursor` |
| `риск` | `?risk=safe` |
| `сортиране` | `?sort=quality\|най-добри практики\|ниво\|сигурност\|име` |
| `поръчка` | `?order=asc\|desc` |
| `минимално_качество` | `?min_quality=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `мин_ниво` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `състояние_на_валидация` | `?validation_status=passed` |
| `състояние_на_сигурност` | `?статус_на_сигурност=преминал` |### 📦 Install Plan Body

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

| Метод | Път | Описание |
|:-------|:-----|:------------|
| `ВЗЕМЕТЕ` | `/v1/каталог/изтегляне` | Изтегляне на пълен каталог |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/artifacts` | Избройте артефакти на умения |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/archives` | Списък с архиви на умения |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/downloads` | Всички налични връзки за изтегляне |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/download/manifest` | Манифест на умения JSON |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/download/entrypoint` | Умение SKILL.md |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/download/artifact?path=<path>` | Конкретен артефакт |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Архив на умения |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Отделен подпис |
| `ВЗЕМЕТЕ` | `/v1/skills/:id/download/archive/checksums` | SHA-256 контролни суми |---

## 🔗 Link Enrichment

Когато заявките се обработват чрез API, сървърът**автоматично обогатява**манифести, списъци с артефакти и планове за инсталиране с абсолютни URL адреси, извлечени от произхода на входящата заявка. Това е обогатяване по време на изпълнение, а не записано в `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Плановете за инсталиране са предварителни прегледи, а не дистанционно писане.**

API никога не се инсталира на машината на повикващия. Връща:
- 📌 Избрани метаданни за умения
- ⚠️ Предупреждения за липсващи членове на пакета
- 🖥️ Конкретни CLI команди за локално изпълнение
- 🔗 Публични URL адреси за изтегляне, когато е наличен произходът на заявката---

## 🔌 Relationship to MCP

MCP сървърът използва повторно същите публични URL адреси на API, когато е конфигуриран:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Това позволява визуализациите за инсталиране на MCP да връщат конкретни URL адреси на манифести и артефакти, вместо само локални репо пътища.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` връща моментна снимка на управление, полезна за хоствана диагностика:

- активни методи за удостоверяване
- статут на admin-auth
- скоростно-лимит прозорец и макс
- CORS разрешен списък
- Списък с разрешени IP адреси
- състояние на режим на поддръжка
- предназначение и формат на одита
- текущи суми по каталог
- ехо на искане за ID за проследимост