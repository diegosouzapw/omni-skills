# 📦 Curated Bundles (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Bunter er utvalgte ferdighetsvelgere lagt på toppen av katalogen.**Alle de syv startpakkene er nå fullt støttet av publiserte ferdigheter.---

## ⚙️ How Bundles Work

`--bundle` installerer**ikke**en spesiell pakke. Det:

1. 📋 Utvider den valgte buntdefinisjonen
2. ✅ Installerer kun medlemmene som for øyeblikket er tilgjengelige i katalogen
3. ✅ Bygger en konkret installasjonsplan fra publiserte buntmedlemmer```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Basert på den gjeldende genererte katalogen (`dist/bundles.json`):

| Bunt | Beregnet for | Tilgjengelig | Medlemmer |
|:-------|:------------|:---------|:--------|
| 🧰**nødvendigheter**| Hver utvikler |**4/4**| `find-skills` ✅ · `brainstorming` ✅ · `arkitektur` ✅ · `debugging` ✅ |
| 🌐**full stack**| Nett- og apputviklere |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**design**| Design systemer og tilgjengelighet |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**sikkerhet**| Sikkerhetsingeniører |**4/4**| `security-auditor` ✅ · `vulnerability-scanner` ✅ · `incident-response` ✅ · `threat-modeling` ✅ |
| ⚙️**devops**| Plattform og infra |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-ingeniør**| LLM- og ML-utviklere |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-vedlikeholder**| OSS vedlikeholdere |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `dokumentasjon` ✅ |

> ✅ = Publisert og installerbar---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

– Du vil ha et**kuratert utgangspunkt**for et domene
- Du vil ha installasjonsplaner som forblir**kuratert og domenespesifikke**
- Du vil ha en rask måte å installere et komplett arbeidssett for en rolle### 🎯 Use `--skill` instead when:

- Du vil ha en**garantert minimal installasjon**
– Du vet allerede den**nøyaktige ferdigheten**du trenger
- Du vil ha**minst mulig fotavtrykk**i stedet for et kuratert arbeidssett---

## 💡 Practical Recommendations

| Mål | Kommando |
|:-----|:--------|
| 🎯 Installer en spesifikk publisert ferdighet | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Startpakke med full støtte | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Design systempakke | `npx omni-skills --cursor --bundle design` |
| 🔧 OSS arbeidsflytpakke | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Sikkerhetsarbeidsflytpakke | `npx omni-skills --cursor --bundle security` |
| ⚙️ DevOps-pakke | `npx omni-skills --cursor --bundle devops` |
| 🤖 AI-ingeniørpakke | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Søk før du bestemmer deg | `npx omni-skills find figma` |
| 📋 Se all pakketilgjengelighet | `cat dist/bundles.json` |---

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

Bruk verktøyene "søkeferdigheter" eller "forhåndsvisningsinstallasjon" med pakkeparametere.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
