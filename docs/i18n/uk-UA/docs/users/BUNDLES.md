# 📦 Curated Bundles (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Пакети — це підібрані засоби вибору навичок, розміщені поверх каталогу.**Усі сім початкових пакетів тепер повністю підкріплені опублікованими навичками.---

## ⚙️ How Bundles Work

`--bundle`**не**встановлює спеціальний пакет. Це:

1. 📋 Розширює визначення вибраного пакета
2. ✅ Встановлює лише тих учасників, які зараз доступні в каталозі
3. ✅ Створює конкретний план встановлення з опублікованих учасників пакета```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

На основі поточного створеного каталогу (`dist/bundles.json`):

| Пакет | Призначений для | Доступний | Члени |
|:-------|:------------|:----------|:--------|
| 🧰**необхідне**| Кожен розробник |**4/4**| `find-skills` ✅ · `мозковий штурм` ✅ · `архітектура` ✅ · `налагодження` ✅ |
| 🌐**повний стек**| Розробники веб-сайтів і програм |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**дизайн**| Системи дизайну та доступність |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**безпека**| Інженери безпеки |**4/4**| `security-auditor` ✅ · `vulnerability-scanner` ✅ · `incident-response` ✅ · `threat-modeling` ✅ |
| ⚙️**devops**| Платформа та інфра |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-інженер**| Розробники LLM & ML |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-maintainer**| Супроводжувачі OSS |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = Опубліковано та доступно для встановлення---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Вам потрібна**вибрана початкова точка**для домену
- Вам потрібні плани встановлення, які залишаються**підібраними та залежать від домену**
- Вам потрібен швидкий спосіб встановити повний робочий набір для ролі### 🎯 Use `--skill` instead when:

- Вам потрібна**гарантована мінімальна інсталяція**
- Ви вже знаєте**точні навички**, які вам потрібні
- Вам потрібен**найменший можливий слід**замість підібраного робочого набору---

## 💡 Practical Recommendations

| Мета | Команда |
|:-----|:--------|
| 🎯 Установіть певний опублікований навик | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Початковий комплект із повною підтримкою | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Пакет систем проектування | `npx omni-skills --cursor --bundle design` |
| 🔧 Пакет робочих процесів OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Комплект робочих процесів безпеки | `npx omni-skills --cursor --bundle security` |
| ⚙️ Пакет DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Пакет інженерів ШІ | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Шукайте, перш ніж прийняти рішення | `npx omni-skills find figma` |
| 📋 Перегляньте наявність усіх пакетів | `cat dist/bundles.json` |---

## 🔍 Inspecting Bundles

### 📁 View Generated Bundle Data

```bash
cat dist/bundles.json
```

### 🌐 Query via API

```bash
curl http://127.0.0.1:3333/v1/bundles
```

### 🔌 Query via MCP

Використовуйте інструменти `search_skills` або `preview_install` з параметрами пакета.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
