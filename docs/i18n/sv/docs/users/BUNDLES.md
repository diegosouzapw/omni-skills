# 📦 Curated Bundles (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Bunter är utvalda färdighetsväljare placerade ovanpå katalogen.**Alla sju startpaket är nu helt uppbackade av publicerade färdigheter.---

## ⚙️ How Bundles Work

`--bundle` installerar**inte**ett speciellt paket. Det:

1. 📋 Expanderar den valda buntdefinitionen
2. ✅ Installerar endast de medlemmar som för närvarande finns tillgängliga i katalogen
3. ✅ Bygger en konkret installationsplan från publicerade paketmedlemmar```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Baserat på den nuvarande genererade katalogen (`dist/bundles.json`):

| Bunt | Avsedd för | Tillgänglig | Medlemmar |
|:-------|:------------|:---------|:--------|
| 🧰**nödvändigt**| Varje utvecklare |**4/4**| `find-skills` ✅ · `brainstorming` ✅ · `arkitektur` ✅ · `debugging` ✅ |
| 🌐**full stack**| Webb- och apputvecklare |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `databas-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**design**| Designsystem & tillgänglighet |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**säkerhet**| Säkerhetsingenjörer |**4/4**| `security-auditor` ✅ · `vulnerability-scanner` ✅ · `incident-response` ✅ · `threat-modeling` ✅ |
| ⚙️**devops**| Plattform & infra |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observation-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-ingenjör**| LLM & ML-utvecklare |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-underhållare**| OSS-underhållare |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `dokumentation` ✅ |

> ✅ = Publicerad och installerbar---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

– Du vill ha en**kurerad utgångspunkt**för en domän
- Du vill ha installationsplaner som förblir**kurerade och domänspecifika**
- Du vill ha ett snabbt sätt att installera ett komplett fungerande set för en roll### 🎯 Use `--skill` instead when:

- Du vill ha en**garanterad minimal installation**
- Du vet redan vilken**exakt färdighet**du behöver
- Du vill ha**minsta möjliga fotavtryck**istället för ett kurerat arbetsset---

## 💡 Practical Recommendations

| Mål | Kommando |
|:-----|:--------|
| 🎯 Installera en specifik publicerad färdighet | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Startpaket med fullt stöd | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Designsystempaket | `npx omni-skills --cursor --bundle design` |
| 🔧 OSS-arbetsflödespaket | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Säkerhetsarbetsflödespaket | `npx omni-skills --cursor --bundle security` |
| ⚙️ DevOps-paket | `npx omni-skills --cursor --bundle devops` |
| 🤖 AI-ingenjörspaket | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Sök innan du bestämmer dig | `npx omni-skills find figma` |
| 📋 Se alla tillgängliga paket | `cat dist/bundles.json` |---

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

Använd verktygen "search_skills" eller "preview_install" med paketparametrar.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
