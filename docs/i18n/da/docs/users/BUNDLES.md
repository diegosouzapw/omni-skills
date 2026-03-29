# 📦 Curated Bundles (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Bundter er udvalgte færdighedsvælgere, der ligger oven på kataloget.**Alle syv startpakker er nu fuldt understøttet af offentliggjorte færdigheder.---

## ⚙️ How Bundles Work

`--bundle` installerer**ikke**en speciel pakke. Det:

1. 📋 Udvider den valgte bundtdefinition
2. ✅ Installerer kun de medlemmer, der i øjeblikket er tilgængelige i kataloget
3. ✅ Opbygger en konkret installationsplan fra offentliggjorte bundlemedlemmer```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Baseret på det aktuelle genererede katalog (`dist/bundles.json`):

| bundt | Beregnet til | Tilgængelig | Medlemmer |
|:-------|:------------|:---------|:--------|
| 🧰**essentielle**| Hver udvikler |**4/4**| `find-færdigheder` ✅ · `brainstorming` ✅ · `arkitektur` ✅ · `debugging` ✅ |
| 🌐**fuld stack**| Web- og app-udviklere |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**design**| Design systemer & tilgængelighed |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**sikkerhed**| Sikkerhedsingeniører |**4/4**| `sikkerhedsrevisor` ✅ · `sårbarhed-scanner` ✅ · `hændelse-respons` ✅ · `trusselsmodellering` ✅ |
| ⚙️**devops**| Platform & infra |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observation-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-ingeniør**| LLM & ML udviklere |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-vedligeholder**| OSS-vedligeholdere |**4/4**| `find-færdigheder` ✅ · `create-pr` ✅ · `changelog` ✅ · `dokumentation` ✅ |

> ✅ = Udgivet og kan installeres---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Du vil have et**kurateret udgangspunkt**for et domæne
- Du vil have installationsplaner, der forbliver**kurateret og domænespecifikke**
- Du vil have en hurtig måde at installere et komplet arbejdssæt til en rolle på### 🎯 Use `--skill` instead when:

- Du vil have en**garanteret minimal installation**
- Du kender allerede den**præcise færdighed**, du har brug for
- Du vil have det**mindst mulige fodaftryk**i stedet for et kurateret arbejdssæt---

## 💡 Practical Recommendations

| Mål | Kommando |
|:-----|:--------|
| 🎯 Installer en specifik offentliggjort færdighed | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Fuldt understøttet startpakke | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Design system bundle | `npx omni-skills --cursor --bundle design` |
| 🔧 OSS workflow bundle | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Sikkerhedsworkflow-pakke | `npx omni-skills --cursor --bundle security` |
| ⚙️ DevOps-pakke | `npx omni-skills --cursor --bundle devops` |
| 🤖 AI-ingeniørbundt | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Søg før du beslutter dig | `npx omni-skills find figma` |
| 📋 Se alle bundter tilgængelighed | `cat dist/bundles.json` |---

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

Brug værktøjerne "search_skills" eller "preview_install" med bundleparametre.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
