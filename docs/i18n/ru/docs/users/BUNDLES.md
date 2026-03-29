# 📦 Curated Bundles (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Наборы — это тщательно подобранные средства выбора навыков, расположенные поверх каталога.**Все семь стартовых пакетов теперь полностью поддерживаются опубликованными навыками.---

## ⚙️ How Bundles Work

`--bundle`**не**устанавливает специальный пакет. Это:

1. 📋 Расширяет выбранное определение пакета.
2. ✅ Устанавливает только тех участников, которые доступны на данный момент в каталоге.
3. ✅ Строит конкретный план установки на основе опубликованных членов пакета.```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

На основе текущего сгенерированного каталога (dist/bundles.json):

| Пакет | Предназначен для | Доступно | Участники |
|:-------|:------------|:----------|:--------|
| 🧰**основное**| Каждый разработчик |**4/4**| `найти-навыки` ✅ · `мозговой штурм` ✅ · `архитектура` ✅ · `отладка` ✅ |
| 🌐**полный набор**| Разработчики веб-сайтов и приложений |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**дизайн**| Системы дизайна и доступность |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**безопасность**| Инженеры по безопасности |**4/4**| `аудитор безопасности` ✅ · `сканер уязвимостей` ✅ · `реагирование на инциденты` ✅ · `моделирование угроз` ✅ |
| ⚙️**девопс**| Платформа и инфраструктура |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ай-инженер**| Разработчики LLM и ML |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-выкройки` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**сопровождающий**| Сопровождающие OSS |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = Опубликовано и доступно для установки---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

– Вам нужна**подборочная отправная точка**для домена.
– Вам нужны планы установки, которые остаются**управляемыми и привязанными к конкретному домену**.
- Вам нужен быстрый способ установки полного рабочего набора для роли### 🎯 Use `--skill` instead when:

– Вам нужна**гарантированная минимальная установка**
– Вы уже знаете, какой**точный навык**вам нужен.
– Вам нужен**минимальный размер**вместо тщательно подобранного рабочего набора.---

## 💡 Practical Recommendations

| Цель | Команда |
|:-----|:--------|
| 🎯 Установите конкретный опубликованный навык | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Стартовый пакет с полной поддержкой | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Пакет дизайн-систем | `npx omni-skills --cursor --bundle design` |
| 🔧 Пакет рабочих процессов OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Пакет рабочих процессов безопасности | `npx omni-skills --cursor --bundle Security` |
| ⚙️ Пакет DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Пакет инженера по искусственному интеллекту | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Поиск, прежде чем принять решение | `npx omni-skills find Figma` |
| 📋 Посмотреть наличие всех пакетов | `cat dist/bundles.json` |---

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

Используйте инструменты search_skills или preview_install с параметрами пакета.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
