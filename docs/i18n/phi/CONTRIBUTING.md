# 🤝 Contributing to Omni Skills (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Ang Omni Skills ay naglalaman ng parehong catalog ng kasanayan at ang runtime surface na binuo sa ibabaw ng catalog na iyon.**
> Maaaring i-target ng mga kontribusyon ang alinmang lugar, ngunit dapat manatiling nakahanay ang dalawa sa mga nabuong artifact at sa kasalukuyang gawi ng CLI.---

## 📊 Repository Baseline

| Sukatan | Halaga |
|:-------|:------|
| 📦 Bersyon ng package | `0.1.3` |
| 🧠 Nai-publish na mga kasanayan | `32` |
| 📦 Ganap na naka-back na mga bundle | `7` |
| 🖥️ Mga kliyenteng may kakayahang mag-install | `7` |
| 🔌 Mga kliyenteng may kakayahang mag-config ng MCP | `16` |
| 🔄 Mga awtomatikong release | Pinagana sa `pangunahing` |---

## Mahalaga

| Ano | Saan |
|:-----|:------|
| 🧠 Ang mga kasanayan ay isinulat sa | `skills/<skill-name>/SKILL.md` |
| 📖 Mga template at gabay ng contributor | `docs/contributors/` |
| 🧾 Canonical PR flow para sa mga bagong kasanayan | [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Napunta sa ilalim ng | `kasanayan/` (anumang wika) |
| ✨ Mga na-curate na pinahusay na derivatives | `skills_omni/` (English lang, automated) |
| 🚫 `kasanayan_omni/` ay protektado | Hindi bukas para sa direktang pampublikong kontribusyon |
| 📖 Runtime at mga doc ng arkitektura | `docs/` |
| 📄 Mga file ng komunidad | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Uri | Lugar |
|:-----|:-----|
| 🧠 Magdagdag o pagbutihin ang isang kasanayan | `kasanayan/` |
| 📖 I-update ang gabay ng contributor | `docs/contributors/` |
| 🖥️ Pagbutihin ang CLI, installer, o mga script | `mga kasangkapan/` |
| 📦 Pagbutihin ang runtime ng catalog o mga protocol package | `mga pakete/` |
| 🧪 Higpitan ang mga pagsusuri, smoke check, o ilabas ang mga doc | Iba't ibang |---

## Mabilis na Simula

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Buksan ang PR nang naka-enable ang `Payagan ang mga pag-edit mula sa mga maintainer.**---

## Dokumentasyon

Ang isang mahusay na katutubong papasok na kasanayan ay dapat:

- ✅ Lutasin nang malinis ang isang partikular na problema
- ✅ Maging magagamit muli sa mga proyekto
- ✅ Isama ang mga tagubilin na maaaring talagang sundin ng isang ahente
- ✅ Iwasan ang malabo o kalabisan na nilalaman
- ✅ Ideklara ang tumpak na frontmatter at compatibility metadata kapag available
- ✅ Lupang may nabuong artifact ng klasipikasyon ng `metadata.json` pagkatapos tumakbo ang automation### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Tip:**Dapat na may kasamang `mga ahente/`, `mga sanggunian/`, `mga halimbawa/`, at `script/` sa mga release-grade skill pack. Ngunit ang ibabaw ng intake ay sadyang pinahintulutan — pinapayagan ang kaunting katutubong papasok na kasanayan, at ang pipeline ng enhancer ay bumubuo ng mas malakas na derivative.### 🌐 Language Policy

| Ibabaw | Mga Tinanggap na Wika |
|:--------|:--------------------|
| 📥 `kasanayan/` (native intake) | Portuges, Ingles, o anumang wika |
| ✨ `skills_omni/` (na-curate na output) | English lang |

> Pinapanatili ng pribadong enhancer ang katutubong pinagmulan gaya ng isinumite at muling isinusulat ang na-curate na derivative sa English.

📖 Para sa buong branch, validation, at enhancer-review sequence, gamitin ang [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Patakbuhin ito bago magbukas ng PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<mga detalye>
<summary>📋 <strong>Ano ang <code>npm run validate</code> regenerates</strong></summary>

- `metadata.json`
- `skills/<skill>/metadata.json`
- Canonical taxonomy mapping
- Maturity, pinakamahusay na kasanayan, kalidad, at mga marka ng seguridad
- Static na mga natuklasan sa seguridad
- Opsyonal na ClamAV at VirusTotal scanner status (kapag na-configure)</details>

>**⚠️ Mahalaga:**Ang pagpapatunay ay ang kontrata na ginagamit ng CLI, API, MCP, A2A, manifests, archives, at release automation. Ituring ang nabuong metadata bilang bahagi ng ibabaw ng pagsusuri, hindi ang disposable na output.### 📥 Intake Policy

| Kundisyon | Pag-uugali |
|:----------|:---------|
| Nawawala/hindi kumpletong frontmatter | ⚠️ Mga Babala (hindi hinaharangan) |
| Mga kritikal na natuklasan sa seguridad | 🚫 Bina-block ang paggamit |
| Mga error sa hard validation | 🚫 Bina-block ang paggamit |
| Mas mahigpit na pamantayang pang-editoryal | Ipinapatupad sa pinahusay na derivative flow, hindi sa native intake |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<mga detalye>
<summary>📋 <strong>Ano ang pinapatunayan ng smoke pass</strong></summary>

- ✅ Pagpapatunay ng kasanayan
- ✅ Pagbuo ng katalogo
- ✅ Pagbuo ng katalogo ng Docs
- ✅ Test suite
- ✅ `npm pack --dry-run`
- ✅ API boot
- ✅ MCP boot sa `stdio`, `stream`, at `sse`
- ✅ A2A boot
- ✅ Pag-verify ng archive at mga inaasahan sa packaging</details>

---

## 📋 Skill Frontmatter

Mahigpit na inirerekomenda ang frontmatter. Gamitin ang [Skill Template](docs/contributors/SKILL-TEMPLATE.md) bilang baseline.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<mga detalye>
<buod>🏷️ <strong>Mga kategorya ng canonical taxonomy</strong></buod>

| Kategorya | Kategorya |
|:---------|:---------|
| `kaunlaran` | `frontend` |
| `backend` | `fullstack-web` |
| `mga kasangkapan` | `cli-automation` |
| `negosyo` | `produkto` |
| `disenyo` | `data-ai` |
| `ai-agents` | `machine-learning` |
| `devops` | `pagsubok-seguridad` |
| `dokumentasyon` | `content-media` |
| `komunikasyon` | `uncategorized` |</details>

>**ℹ️**Ang bersyon ng Skill ay independiyente sa bersyon ng npm package. Kung ang isang katutubong papasok na kasanayan ay wala pang frontmatter, ito ay tatanggapin nang may mga babala at makakakuha ng pansamantalang metadata mula sa direktoryo, pamagat, at teksto ng katawan.---

## ⚙️ Runtime Contributions

Kung pinindot mo ang `packages/`, `tools/bin/`, `tools/lib/`, o bumuo ng mga script:

- 📦 Panatilihing nakahanay ang `dist/` at mga dokumento sa pagpapatupad
- 🔄 Mas gusto ang muling paggamit ng `packages/catalog-core` sa halip na duplicate ang catalogic logic
- 🔒 Panatilihin ang local-write na gawi sa likod ng preview o dry-run na mga default
- 🔌 Panatilihing disiplinado ang mga manunulat ng MCP — magdagdag lamang ng mga first-class na config writer kapag ang kliyente ay may matatag na kontrata sa pampublikong config
- 🛡️ Tratuhin ang mga babala ng security scanner bilang bahagi ng review bar
- 🧪 I-update ang mga pagsubok kapag binabago ang mga CLI command, transport mode, o pampublikong endpoint### 🚧 Important Boundary

| Gawin ito ✅ | Huwag gawin ito 🚫 |
|:-----------|:-----------------|
| Isumite ang katutubong gawain sa ilalim ng `kasanayan/` | Buksan ang mga manual na PR na nag-e-edit ng `skills_omni/` |
| Hayaang pangasiwaan ng automation ang enhancer run | Direktang magdagdag ng na-curate na nilalaman |
| Tumutok sa lehitimong kalidad ng kasanayan | I-bypass ang automated na kasamang PR flow |

>**ℹ️**Kapag ang isang katutubong kasanayan sa `kasanayan/` ay na-update, muling pinoproseso ito ng pribadong enhancer at nire-refresh ang pinahusay na baseline.---

## 🔄 Enhancer Outcome States

Sa panahon ng pampublikong katutubong-kasanayang PR, iniuulat ng enhancer ang isa sa apat na estado:

| Estado | Ibig sabihin |
|:------|:--------|
| ✅ `nakumpleto` | Malinis na nabuo ang pinahusay na derivative, kwalipikado para sa `skills_omni/` |
| ⚠️ `degraded` | Nakumpleto sa fallback o mas mahinang paggalaw ng marka — siyasatin nang mas mabuti |
| 🚫 `naka-block` | Huminto para sa imprastraktura o mga dahilan ng pagpapatunay — pinipigilan ang awtomatikong paglalathala |
| ❌ `bigo` | Hindi inaasahang error — nangangailangan ng pagsisiyasat ng maintainer |

>**📝 Hindi kailangang ayusin ng mga Contributor**ang mga isyu sa imprastraktura ng enhancer. Ang responsibilidad ay magsumite ng isang lehitimong katutubong kasanayan at panatilihing berde ang repo.---

## 🔄 Automatic Release Policy

Kapag napunta ang isang pagbabago sa `pangunahing` at kasama ang:

- `kasanayan/**`
- `skills_omni/**`
- `data/bundles.json`

…naglalabas ang repository ng**awtomatikong paglabas ng package**.### 📋 Version Bump Rule

| Mula sa | Upang | Panuntunan |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Patch +1 |
| `0.1.9` | `0.1.10` | Patch +1 |
| `0.1.10` | `0.2.0` | I-roll sa susunod na menor de edad, i-reset ang patch |

> Ang daloy ng paglabas ay muling bumubuo ng catalog/archive, gumagawa ng bump ng bersyon, nagta-tag sa release, nagpa-publish ng npm, at awtomatikong gumagawa ng GitHub release.---

## 📝 Commit Conventions

| Prefix | Gamitin Para sa |
|:-------|:--------|
| `feat:` | Bagong kasanayan o tampok |
| `ayusin:` | Pag-aayos ng bug |
| `docs:` | Mga pagbabago sa dokumentasyon |
| `refactor:` | Paglilinis ng code o mga pagbabago sa istraktura |
| `pagsusulit:` | Mga pagbabago sa pagsubok |
| `gawain:` | Pagpapanatili |---

## ❓ Need Help?

| Channel | Link |
|:--------|:-----|
| 💬 Mga Tanong | [Magbukas ng Talakayan](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Mga bug | [Magbukas ng Isyu](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Maagang feedback | [Magbukas ng Draft PR](https://github.com/diegosouzapw/omni-skills/pulls) |