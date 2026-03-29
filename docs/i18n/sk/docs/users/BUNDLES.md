# 📦 Curated Bundles (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Balíčky sú vybrané selektory zručností navrstvené navrchu katalógu.**Všetkých sedem počiatočných balíčkov je teraz plne podporovaných publikovanými zručnosťami.---

## ⚙️ How Bundles Work

`--bundle`**nenainštaluje**špeciálny balík. to:

1. 📋 Rozbalí vybranú definíciu balíka
2. ✅ Inštaluje iba členov aktuálne dostupných v katalógu
3. ✅ Vytvorí konkrétny plán inštalácie z publikovaných členov balíka```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Na základe aktuálne vygenerovaného katalógu (`dist/bundles.json`):

| Balík | Určené pre | K dispozícii | Členovia |
|:-------|:------------|:----------|:--------|
| 🧰**základné**| Každý vývojár |**4/4**| `nájsť zručnosti` ✅ · `brainstorming` ✅ · `architektúra` ✅ · `ladenie` ✅ |
| 🌐**plný zásobník**| Vývojári webu a aplikácií |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**dizajn**| Dizajnové systémy a dostupnosť |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `Audit dostupnosti` ✅ |
| 🛡️**bezpečnosť**| Bezpečnostní inžinieri |**4/4**| `bezpečnostný-auditor` ✅ · `skener zraniteľnosti` ✅ · `reakcia na incidenty` ✅ · `modelovanie hrozieb` ✅ |
| ⚙️**devops**| Platforma a infra |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `previerka pozorovateľnosti` ✅ · `release-engineering` ✅ |
| 🤖**ai-inžinier**| Vývojári LLM a ML |**5/5**| `handrový inžinier` ✅ · `promptný inžinier` ✅ · `llm-vzory` ✅ · `eval-design` ✅ · `kontextové inžinierstvo` ✅ |
| 🔧**oss-maintainer**| Správcovia OSS |**4/4**| `nájsť-zručnosti` ✅ · `vytvoriť-pr` ✅ · `zmeniť denník` ✅ · `dokumentáciu` ✅ |

> ✅ = Publikované a inštalovateľné---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Chcete**spravovaný východiskový bod**pre doménu
- Chcete nainštalovať plány, ktoré zostanú**spravované a špecifické pre doménu**
- Chcete rýchly spôsob inštalácie kompletnej pracovnej sady pre rolu### 🎯 Use `--skill` instead when:

- Chcete**garantovanú minimálnu inštaláciu**
- Už poznáte**presnú zručnosť**, ktorú potrebujete
- Chcete**najmenšiu možnú pôdu**namiesto premyslenej pracovnej súpravy---

## 💡 Practical Recommendations

| Cieľ | Príkaz |
|:-----|:--------|
| 🎯 Nainštalujte si konkrétnu zverejnenú zručnosť | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Plne zabezpečený štartovací balík | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Balík dizajnových systémov | `npx omni-skills --cursor --bundle design` |
| 🔧 Balík pracovných postupov OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Balíček bezpečnostných pracovných postupov | `npx omni-skills --cursor --bundle security` |
| ⚙️ Balíček DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Balík inžinierov AI | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Pred rozhodnutím hľadajte | `npx omni-skills find figma` |
| 📋 Zobraziť dostupnosť všetkých balíkov | `cat dist/bundles.json` |---

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

Použite nástroje `search_skills` alebo `preview_install` s parametrami balíka.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
