# 🤝 Contributing to Omni Skills (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills innehåller både en färdighetskatalog och runtime-ytorna som byggts ovanpå den katalogen.**
> Bidrag kan riktas mot båda områdena, men båda måste vara i linje med de genererade artefakterna och det aktuella CLI-beteendet.---

## 📊 Repository Baseline

| Metrisk | Värde |
|:-------|:------|
| 📦 Paketversion | `0.1.3` |
| 🧠 Publicerade färdigheter | `32` |
| 📦 Helt uppbackade buntar | `7` |
| 🖥️ Installationskapabla klienter | `7` |
| 🔌 MCP-konfigurationskompatibla klienter | `16` |
| 🔄 Automatiska utlösningar | Aktiverad på `main` |---

## Viktigt

| Vad | Var |
|:-----|:------|
| 🧠 Färdigheter är författade i | `skills/<skill-name>/SKILL.md` |
| 📖 Bidragsgivare mallar och vägledning | `docs/contributors/` |
| 🧾 Kanoniskt PR-flöde för nya färdigheter | [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Infödda inkommande färdigheter landar under | `skills/` (valfritt språk) |
| ✨ Kurerade förbättrade derivat | `skills_omni/` (endast på engelska, automatiserat) |
| 🚫 `skills_omni/` är skyddad | Ej öppen för direkt offentligt bidrag |
| 📖 Körtid och arkitekturdokument | `docs/` |
| 📄 Gemenskapsfiler | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `KOD_FÖRANDE.md` |---

## 🎯 Common Contribution Types

| Skriv | Område |
|:-----|:-----|
| 🧠 Lägg till eller förbättra en färdighet | `färdigheter/` |
| 📖 Uppdatera bidragsgivares vägledning | `docs/contributors/` |
| 🖥️ Förbättra CLI, installationsprogram eller skript | `verktyg/` |
| 📦 Förbättra katalogens körtid eller protokollpaket | `paket/` |
| 🧪 Skärp tester, rökkontroller eller släpp dokument | Olika |---

## Snabbstart

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

>**📝 Öppna PR med "Tillåt redigeringar från underhållare" aktiverat.**---

## Dokumentation

En bra inhemsk inkommande färdighet bör:

- ✅ Lös ett specifikt problem rent
- ✅ Vara återanvändbar över projekt
- ✅ Inkludera instruktioner som en agent faktiskt kan följa
- ✅ Undvik vagt eller överflödigt innehåll
- ✅ Deklarera korrekt frontmatter och kompatibilitetsmetadata när det är tillgängligt
- ✅ Land med genererade `metadata.json` klassificeringsartefakter efter automatiseringskörningar### 📁 Minimal Structure

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

>**💡 Tips:**Skicklighetspaket med releasegrad bör innehålla "agenter/", "referenser/", "exempel/" och "scripts/". Men inloppsytan är avsiktligt tillåtande - en minimal inbyggd inkommande färdighet är tillåten, och förstärkarpipelinen genererar den starkare derivatan.### 🌐 Language Policy

| Yta | Godkända språk |
|:--------|:------------------------|
| 📥 `skills/` (native intake) | Portugisiska, engelska eller vilket språk som helst |
| ✨ `skills_omni/` (kurerad utdata) | Endast engelska |

> Den privata förstärkaren bevarar ursprunglig källa som inlämnad och skriver om den kurerade derivatan på engelska.

📖 Använd [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Kör detta innan du öppnar en PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<detaljer>
<summary>📋 <strong>Det som <code>npm run validate</code> återskapar</strong></summary>

- `metadata.json`
- `skills/<skill>/metadata.json`
- Kartläggning av kanonisk taxonomi
- Mognad, bästa praxis, kvalitet och säkerhetspoäng
- Statiska säkerhetsfynd
- Valfri ClamAV och VirusTotal skannerstatus (när konfigurerad)</details>

>**⚠️ Viktigt:**Validering är kontraktet som används av CLI, API, MCP, A2A, manifest, arkiv och automatisering av releaser. Behandla genererad metadata som en del av recensionsytan, inte engångsutdata.### 📥 Intake Policy

| Skick | Beteende |
|:----------|:--------|
| Saknas/ofullständig frontmateria | ⚠️ Varningar (blockerar inte) |
| Kritiska säkerhetsresultat | 🚫 Blockerar intaget |
| Hårda valideringsfel | 🚫 Blockerar intaget |
| Strängare redaktionell standard | Framtvingas i förbättrat derivatflöde, inte vid ursprungligt intag |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<detaljer>
<summary>📋 <strong>Vad rökpasset validerar</strong></summary>

- ✅ Kompetensvalidering
- ✅ Kataloggenerering
- ✅ Dokumentkataloggenerering
- ✅ Testsvit
- ✅ `npm pack --dry-run`
- ✅ API-start
- ✅ MCP-start i "stdio", "stream" och "sse".
- ✅ A2A stövel
- ✅ Arkivverifiering och paketeringsförväntningar</details>

---

## 📋 Skill Frontmatter

Frontmatter rekommenderas starkt. Använd [Skill Template](docs/contributors/SKILL-MALL.md) som baslinje.```yaml
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

<detaljer>
<summary>🏷️ <strong>Kanoniska taxonomikategorier</strong></summary>

| Kategori | Kategori |
|:--------|:--------|
| `utveckling` | `frontend` |
| `backend` | `fullstack-web` |
| `verktyg` | `cli-automation` |
| `affärer` | `produkt` |
| `design` | `data-ai` |
| `ai-agenter` | `maskininlärning` |
| `devops` | `test-säkerhet` |
| `dokumentation` | `content-media` |
| `kommunikation` | `okategoriserad` |</details>

>**ℹ️**Skill-versionen är oberoende av npm-paketversionen. Om en inbyggd inkommande färdighet inte har frontmatter än, kommer den att accepteras med varningar och härleda tillfällig metadata från katalog, titel och brödtext.---

## ⚙️ Runtime Contributions

Om du trycker på `paket/`, `tools/bin/`, `tools/lib/` eller bygger skript:

- 📦 Håll `dist/` och dokument i linje med implementeringen
- 🔄 Föredrar att återanvända "paket/katalog-kärna" istället för att duplicera kataloglogik
- 🔒 Håll lokalt skrivbeteende bakom förhandsgransknings- eller torrkörningsstandarder
- 🔌 Håll MCP-skribenter disciplinerade - lägg bara till förstklassiga konfigurationsskribenter när klienten har ett stabilt offentligt konfigurationskontrakt
- 🛡️ Behandla säkerhetsskannervarningar som en del av granskningsfältet
- 🧪 Uppdatera tester när du ändrar CLI-kommandon, transportlägen eller offentliga slutpunkter### 🚧 Important Boundary

| Gör så här ✅ | Gör inte så här 🚫 |
|:----------------|:----------------|
| Skicka in eget arbete under `färdigheter/` | Öppna manuella PR som redigerar `skills_omni/` |
| Låt automatisering hantera förstärkarkörningen | Lägg till kurerat innehåll direkt |
| Fokusera på legitim kompetenskvalitet | Förbigå det automatiserade PR-flödet |

>**ℹ️**När en inbyggd färdighet i `skills/` uppdateras, omarbetar den privata förstärkaren den och uppdaterar den förbättrade baslinjen.---

## 🔄 Enhancer Outcome States

Under offentliga PR-er med inbyggd skicklighet rapporterar förstärkaren ett av fyra tillstånd:

| Stat | Betydelse |
|:------|:--------|
| ✅ `avslutad` | Förbättrad derivata genererad rent, kvalificerad för `skills_omni/` |
| ⚠️ `degraderad` | Kompletterad med fallback eller svagare poängrörelse — inspektera mer noggrant |
| 🚫 "blockerad" | Stoppad av infrastruktur- eller valideringsskäl — förhindrar automatisk publicering |
| ❌ `misslyckades` | Oväntat fel — kräver underhållsundersökning |

>**📝 Bidragsgivare**behöver inte fixa problem med förbättrad infrastruktur. Ansvaret är att lämna in en legitim infödd färdighet och hålla arkivet grönt.---

## 🔄 Automatic Release Policy

När en ändring landar på "main" och inkluderar:

- `färdigheter/**`
- `skills_omni/**`
- `data/bundles.json`

…förvaret utfärdar en**paketversion automatiskt**.### 📋 Version Bump Rule

| Från | Till | Regel |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Patch +1 |
| `0.1.9` | `0.1.10` | Patch +1 |
| `0.1.10` | `0.2.0` | Rulla till nästa moll, återställ patch |

> Utgivningsflödet regenererar katalog/arkiv, commit version bump, taggar releasen, publicerar npm och skapar GitHub releasen automatiskt.---

## 📝 Commit Conventions

| Prefix | Använd för |
|:-------|:--------|
| `feat:` | Ny färdighet eller funktion |
| `fix:` | Bugfix |
| `docs:` | Dokumentationsändringar |
| `refaktor:` | Kodrensning eller strukturändringar |
| `test:` | Testa ändringar |
| `chore:` | Underhåll |---

## ❓ Need Help?

| Kanal | Länk |
|:--------|:-----|
| 💬 Frågor | [Öppna en diskussion](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Buggar | [Öppna ett nummer](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Tidig feedback | [Öppna ett utkast till PR](https://github.com/diegosouzapw/omni-skills/pulls) |