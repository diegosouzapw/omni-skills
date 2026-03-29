# 📦 Curated Bundles (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Ang mga bundle ay mga na-curate na tagapili ng kasanayan na naka-layer sa itaas ng catalog.**Ang lahat ng pitong starter bundle ay ganap na ngayong sinusuportahan ng mga naka-publish na kasanayan.---

## ⚙️ How Bundles Work

Ang `--bundle` ay**hindi**nag-i-install ng isang espesyal na package. ito:

1. 📋 Pinapalawak ang napiling kahulugan ng bundle
2. ✅ Ini-install lamang ang mga miyembro na kasalukuyang available sa catalog
3. ✅ Bumubuo ng konkretong plano sa pag-install mula sa mga na-publish na miyembro ng bundle```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Batay sa kasalukuyang nabuong catalog (`dist/bundles.json`):

| Bundle | Inilaan Para sa | Magagamit | Mga miyembro |
|:-------|:------------|:----------|:--------|
| 🧰**mga mahahalaga**| Bawat developer |**4/4**| `find-skills` ✅ · `brainstorming` ✅ · `architecture` ✅ · `debugging` ✅ |
| 🌐**full-stack**| Mga web at app devs |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**disenyo**| Mga sistema ng disenyo at accessibility |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**seguridad**| Mga inhinyero ng seguridad |**4/4**| `security-auditor` ✅ · `vulnerability-scanner` ✅ · `insidente-response` ✅ · `threat-modeling` ✅ |
| ⚙️**devops**| Platform at infra |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-engineer**| LLM at ML devs |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-maintainer**| Mga tagapangasiwa ng OSS |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = Nai-publish at na-install---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Gusto mo ng**curate na panimulang punto**para sa isang domain
- Gusto mong mag-install ng mga plan na mananatiling**curate at domain-specific**
- Gusto mo ng mabilis na paraan para mag-install ng kumpletong hanay ng trabaho para sa isang tungkulin### 🎯 Use `--skill` instead when:

- Gusto mo ng**garantisadong minimal na pag-install**
- Alam mo na ang**eksaktong kasanayan**na kailangan mo
- Gusto mo ang**pinakamaliit na posibleng bakas ng paa**sa halip na isang na-curate na working set---

## 💡 Practical Recommendations

| Layunin | Utos |
|:-----|:--------|
| 🎯 Mag-install ng partikular na nai-publish na kasanayan | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Ganap na suportadong starter bundle | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Bundle ng mga sistema ng disenyo | `npx omni-skills --cursor --bundle design` |
| 🔧 OSS workflow bundle | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Bundle ng daloy ng trabaho sa seguridad | `npx omni-skills --cursor --bundle security` |
| ⚙️ DevOps bundle | `npx omni-skills --cursor --bundle devops` |
| 🤖 AI engineer bundle | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Maghanap bago magpasya | `npx omni-skills find figma` |
| 📋 Tingnan ang lahat ng availability ng bundle | `cat dist/bundles.json` |---

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

Gamitin ang mga tool na `search_skills` o `preview_install` na may mga parameter ng bundle.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
