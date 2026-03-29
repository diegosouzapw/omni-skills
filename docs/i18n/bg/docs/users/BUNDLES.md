# 📦 Curated Bundles (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Пакетите са подбрани селектори на умения, разположени в горната част на каталога.**Всичките седем стартови пакета вече са изцяло подкрепени от публикувани умения.---

## ⚙️ How Bundles Work

`--bundle`**не**инсталира специален пакет. то:

1. 📋 Разширява дефиницията на избрания пакет
2. ✅ Инсталира само членовете, налични в момента в каталога
3. ✅ Изгражда конкретен план за инсталиране от публикувани членове на пакета```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Въз основа на текущия генериран каталог (`dist/bundles.json`):

| Пакет | Предназначен за | Наличен | Членове |
|:-------|:------------|:----------|:--------|
| 🧰**основни неща**| Всеки разработчик |**4/4**| `find-skills` ✅ · `мозъчна атака` ✅ · `архитектура` ✅ · `отстраняване на грешки` ✅ |
| 🌐**пълен стек**| Разработчици на уеб и приложения |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**дизайн**| Системи за проектиране и достъпност |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**сигурност**| Инженери по сигурността |**4/4**| `security-auditor` ✅ · `vulnerability-skener` ✅ · `incident-response` ✅ · `threat-modeling` ✅ |
| ⚙️**devops**| Платформа и инфра |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-инженер**| LLM & ML разработчици |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-maintainer**| Поддържащи OSS |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = Публикувано и може да се инсталира---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Искате**подбрана начална точка**за домейн
- Искате планове за инсталиране, които остават**подбрани и специфични за домейна**
- Искате бърз начин за инсталиране на пълен работен комплект за роля### 🎯 Use `--skill` instead when:

- Искате**гарантирана минимална инсталация**
- Вече знаете**точното умение**, от което се нуждаете
- Искате**най-малкия възможен отпечатък**вместо подбран работен комплект---

## 💡 Practical Recommendations

| Цел | Команда |
|:-----|:--------|
| 🎯 Инсталирайте конкретно публикувано умение | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Напълно подкрепен стартов пакет | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Комплект системи за проектиране | `npx omni-skills --cursor --bundle design` |
| 🔧 OSS пакет от работни процеси | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Пакет за работен процес за сигурност | `npx omni-skills --cursor --bundle security` |
| ⚙️ Пакет DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Инженерен пакет | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Търсете, преди да решите | `npx omni-skills find figma` |
| 📋 Вижте всички налични пакети | `cat dist/bundles.json` |---

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

Използвайте инструментите `search_skills` или `preview_install` с параметри на пакета.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
