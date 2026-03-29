# 📦 Curated Bundles (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Pachetele sunt selectoare de abilități organizate în straturi deasupra catalogului.**Toate cele șapte pachete de început sunt acum susținute în întregime de abilități publicate.---

## ⚙️ How Bundles Work

`--bundle`**nu**instalează un pachet special. Acesta:

1. 📋 Extinde definiția pachetului selectat
2. ✅ Instalează doar membrii disponibili momentan în catalog
3. ✅ Construiește un plan de instalare concret din membrii pachetului publicat```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Pe baza catalogului generat curent (`dist/bundles.json`):

| Pachet | Destinat pentru | Disponibil | Membrii |
|:-------|:-------------|:-----------|:--------|
| 🧰**esențiale**| Fiecare dezvoltator |**4/4**| `find-skills` ✅ · `brainstorming` ✅ · `arhitectura` ✅ · `depanare` ✅ |
| 🌐**full-stack**| Dezvoltatori web și aplicații |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**design**| Sisteme de proiectare și accesibilitate |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**securitate**| Ingineri de securitate |**4/4**| `security-auditor` ✅ · `vulnerability-scanner` ✅ · `incident-response` ✅ · `threat-modeling` ✅ |
| ⚙️**devops**| Platformă și infra |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-inginer**| Dezvoltatori LLM și ML |**5/5**| `rag-inginer` ✅ · `prompt-inginer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-maintainer**| menținători OSS |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentație` ✅ |

> ✅ = Publicat și instalabil---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Doriți un**punct de plecare organizat**pentru un domeniu
- Doriți să instalați planuri care rămân**curate și specifice domeniului**
- Doriți o modalitate rapidă de a instala un set de lucru complet pentru un rol### 🎯 Use `--skill` instead when:

- Doriți o**instalare minimă garantată**
- Știi deja**abilitatea exactă**de care ai nevoie
- Vrei**cea mai mică amprentă posibilă**în loc de un set de lucru îngrijit---

## 💡 Practical Recommendations

| Gol | Comanda |
|:-----|:--------|
| 🎯 Instalați o anumită abilitate publicată | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Pachet de pornire susținut complet | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Pachetul de sisteme de proiectare | `npx omni-skills --cursor --bundle design` |
| 🔧 Pachet flux de lucru OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Pachetul flux de lucru de securitate | `npx omni-skills --cursor --bundle security` |
| ⚙️ Pachetul DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Pachet de inginer AI | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Caută înainte de a te decide | `npx omni-skills find figma` |
| 📋 Vezi toate disponibilitatea pachetului | `cat dist/bundles.json` |---

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

Utilizați instrumentele `search_skills` sau `preview_install` cu parametrii pachetului.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
