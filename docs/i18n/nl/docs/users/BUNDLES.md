# 📦 Curated Bundles (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Bundels zijn samengestelde vaardighedenkiezers die bovenop de catalogus zijn geplaatst.**Alle zeven starterbundels worden nu volledig ondersteund door gepubliceerde vaardigheden.---

## ⚙️ How Bundles Work

`--bundle` installeert**niet**een speciaal pakket. Het:

1. 📋 Vouwt de geselecteerde bundeldefinitie uit
2. ✅ Installeert alleen de leden die momenteel beschikbaar zijn in de catalogus
3. ✅ Bouwt een concreet installatieplan op van gepubliceerde bundelleden```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Gebaseerd op de huidige gegenereerde catalogus (`dist/bundles.json`):

| Bundel | Bestemd voor | Beschikbaar | Leden |
|:-------|:------------|:----------|:--------|
| 🧰**essentiële zaken**| Elke ontwikkelaar |**4/4**| `vind-vaardigheden` ​​✅ · `brainstormen` ✅ · `architectuur` ✅ · `debugging` ✅ |
| 🌐**volledige stapel**| Web- en app-ontwikkelaars |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-ontwerp` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**ontwerp**| Ontwerpsystemen & toegankelijkheid |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `toegankelijkheid-audit` ✅ |
| 🛡️**beveiliging**| Beveiligingsingenieurs |**4/4**| `security-auditor` ✅ · `kwetsbaarheidsscanner` ✅ · `incident-respons` ✅ · `threat-modeling` ✅ |
| ⚙️**ontwikkelaars**| Platform & infrastructuur |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-ingenieur**| LLM- en ML-ontwikkelaars |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-onderhouder**| OSS-onderhouders |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentatie` ✅ |

> ✅ = Gepubliceerd en installeerbaar---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- U wilt een**samengesteld startpunt**voor een domein
- U wilt installatieplannen die**beheerd en domeinspecifiek**blijven
- U wilt een snelle manier om een complete werkset voor een rol te installeren### 🎯 Use `--skill` instead when:

- U wilt een**gegarandeerde minimale installatie**
- Je kent al de**exacte vaardigheid**die je nodig hebt
- U wilt de**kleinst mogelijke footprint**in plaats van een samengestelde werkset---

## 💡 Practical Recommendations

| Doel | Commando |
|:-----|:--------|
| 🎯 Installeer een specifieke gepubliceerde vaardigheid | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Volledig ondersteunde starterbundel | `npx omni-skills --cursor --bundel full-stack` |
| 🎨 Ontwerpsystemenbundel | `npx omni-skills --cursor --bundelontwerp` |
| 🔧 OSS-workflowbundel | `npx omni-skills --codex --bundel oss-maintainer` |
| 🛡️ Beveiligingsworkflowbundel | `npx omni-skills --cursor --bundelbeveiliging` |
| ⚙️DevOps-bundel | `npx omni-skills --cursor --bundle devops` |
| 🤖 AI-ingenieursbundel | `npx omni-skills --codex --bundel ai-engineer` |
| 🔎 Zoek voordat je beslist | `npx omni-vaardigheden vinden figma` |
| 📋 Bekijk alle bundelbeschikbaarheid | `cat dist/bundles.json` |---

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

Gebruik de tools `search_skills` of `preview_install` met bundelparameters.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
