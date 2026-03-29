# 🤝 Contributing to Omni Skills (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills inneholder både en ferdighetskatalog og kjøretidsflatene bygget på toppen av den katalogen.**
> Bidrag kan målrettes mot begge områder, men begge må forbli på linje med de genererte artefaktene og gjeldende CLI-adferd.---

## 📊 Repository Baseline

| Metrisk | Verdi |
|:-------|:------|
| 📦 Pakkeversjon | `0.1.3` |
| 🧠 Publiserte ferdigheter | `32` |
| 📦 Bunter med full støtte | `7` |
| 🖥️ Installasjonskompatible klienter | `7` |
| 🔌 MCP-konfigurasjonskompatible klienter | `16` |
| 🔄 Automatiske utløsninger | Aktivert på `main` |---

## Viktig

| Hva | Hvor |
|:-----|:------|
| 🧠 Ferdigheter er skrevet i | `ferdigheter/<ferdighetsnavn>/SKILL.md` |
| 📖 Bidragsyter maler og veiledning | `dokumenter/bidragsytere/` |
| 🧾 Kanonisk PR-flyt for nye ferdigheter | [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Innfødte innkommende ferdigheter lander under | `ferdigheter/` (alle språk) |
| ✨ Kuraterte forbedrede derivater | `skills_omni/` (kun engelsk, automatisert) |
| 🚫 `skills_omni/` er beskyttet | Ikke åpent for direkte offentlig bidrag |
| 📖 Kjøretids- og arkitekturdokumenter | `docs/` |
| 📄 Fellesskapsfiler | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_DUCT.md` |---

## 🎯 Common Contribution Types

| Skriv inn | Område |
|:-----|:-----|
| 🧠 Legg til eller forbedre en ferdighet | `ferdigheter/` |
| 📖 Oppdater veiledning for bidragsytere | `dokumenter/bidragsytere/` |
| 🖥️ Forbedre CLI, installasjonsprogram eller skript | `verktøy/` |
| 📦 Forbedre katalogens kjøretid eller protokollpakker | `pakker/` |
| 🧪 Stram tester, røyksjekker eller frigi dokumenter | Diverse |---

## Hurtigstart

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

>**📝 Åpne PR med «Tillat redigeringer fra vedlikeholdere» aktivert.**---

## Dokumentasjon

En god innfødt innkommende ferdighet bør:

- ✅ Løs et spesifikt problem rent
- ✅ Være gjenbrukbar på tvers av prosjekter
- ✅ Inkluder instruksjoner en agent faktisk kan følge
- ✅ Unngå vagt eller overflødig innhold
- ✅ Erklær nøyaktig frontmatter og kompatibilitetsmetadata når tilgjengelig
- ✅ Land med genererte `metadata.json`-klassifiseringsartefakter etter automatiseringskjøring### 📁 Minimal Structure

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

>**💡 Tips:**Ferdighetspakker i utgivelsesgrad bør inneholde "agenter/", "referanser/", "eksempler/" og "scripts/". Men inntaksoverflaten er med vilje tillatt - en minimal innfødt innkommende ferdighet er tillatt, og enhancer-pipelinen genererer det sterkere derivatet.### 🌐 Language Policy

| Overflate | Aksepterte språk |
|:--------|:------------------------|
| 📥 `ferdigheter/` (native inntak) | Portugisisk, engelsk eller hvilket som helst språk |
| ✨ `skills_omni/` (kuratert utgang) | Kun engelsk |

> Den private forsterkeren bevarer den opprinnelige kilden slik den er sendt inn og omskriver den kuraterte avledningen på engelsk.

📖 Bruk [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) for hele grenen, valideringen og enhancer-review-sekvensen.---

## ✅ Required Validation

Kjør dette før du åpner en PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<detaljer>
<summary>📋 <strong>Hva <code>npm run validate</code> regenererer</strong></summary>

- `metadata.json`
- `skills/<skill>/metadata.json`
- Kanonisk taksonomikartlegging
- Modenhet, beste praksis, kvalitet og sikkerhetspoeng
- Statiske sikkerhetsfunn
- Valgfri ClamAV og VirusTotal skannerstatus (når konfigurert)</details>

>**⚠️ Viktig:**Validering er kontrakten som brukes av CLI, API, MCP, A2A, manifester, arkiver og utgivelsesautomatisering. Behandle genererte metadata som en del av gjennomgangsoverflaten, ikke engangsutdata.### 📥 Intake Policy

| Tilstand | Atferd |
|:----------|:--------|
| Manglende/ufullstendig frontmaterie | ⚠️ Advarsler (blokkerer ikke) |
| Kritiske sikkerhetsfunn | 🚫 Blokkerer inntaket |
| Harde valideringsfeil | 🚫 Blokkerer inntaket |
| Strengere redaksjonell standard | Håndheves i forbedret derivatflyt, ikke ved naturlig inntak |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<detaljer>
<summary>📋 <strong>Hva røykpasset validerer</strong></summary>

- ✅ Ferdighetsvalidering
- ✅ Kataloggenerering
- ✅ Dokumentkataloggenerering
- ✅ Testsuite
- ✅ `npm pack --dry-run`
- ✅ API-oppstart
- ✅ MCP-oppstart i 'stdio', 'stream' og 'sse'
- ✅ A2A støvel
- ✅ Arkivverifisering og pakkingsforventninger</details>

---

## 📋 Skill Frontmatter

Frontmatter anbefales på det sterkeste. Bruk [Skill Template](docs/contributors/SKILL-MAL.md) som grunnlinje.```yaml
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
<summary>🏷️ <strong>Kanoniske taksonomikategorier</strong></summary>

| Kategori | Kategori |
|:--------|:--------|
| `utvikling` | `frontend` |
| `backend` | `fullstack-web` |
| `verktøy` | `cli-automatisering` |
| `virksomhet` | `produkt` |
| `design` | `data-ai` |
| `ai-agenter` | `maskinlæring` |
| `devops` | `testing-sikkerhet` |
| `dokumentasjon` | `content-media` |
| `kommunikasjon` | `ukategorisert` |</details>

>**ℹ️**Skill version is independent from npm package version. Hvis en innfødt ferdighet ikke har frontmatter ennå, vil den bli akseptert med advarsler og utlede midlertidige metadata fra katalog, tittel og brødtekst.---

## ⚙️ Runtime Contributions

Hvis du trykker på `pakker/`, `tools/bin/`, `tools/lib/` eller bygger skript:

- 📦 Hold `dist/` og dokumenter på linje med implementeringen
- 🔄 Foretrekker å gjenbruke `pakker/katalogkjerne` i stedet for å duplisere kataloglogikk
- 🔒 Hold lokal skriveoppførsel bak forhåndsvisning eller tørrkjøringsstandarder
- 🔌 Hold MCP-skribenter disiplinert - legg kun til førsteklasses konfigurasjonsforfattere når klienten har en stabil offentlig konfigurasjonskontrakt
- 🛡️ Behandle advarsler fra sikkerhetsskanner som en del av gjennomgangslinjen
- 🧪 Oppdater tester når du endrer CLI-kommandoer, transportmoduser eller offentlige endepunkter### 🚧 Important Boundary

| Gjør dette ✅ | Ikke gjør dette 🚫 |
|:-----------|:----------------|
| Send inn opprinnelig arbeid under `ferdigheter/` | Åpne manuelle PR-er som redigerer `skills_omni/` |
| La automatisering håndtere forsterkerkjøringen | Legg til kurert innhold direkte |
| Fokus på legitim kompetansekvalitet | Omgå den automatiserte følgesvenn-PR-strømmen |

>**ℹ️**Når en opprinnelig ferdighet i `ferdigheter/` oppdateres, behandler den private forsterkeren den på nytt og oppdaterer den forbedrede grunnlinjen.---

## 🔄 Enhancer Outcome States

Under offentlige PR-er med innfødte ferdigheter rapporterer forsterkeren en av fire tilstander:

| Stat | Betydning |
|:------|:--------|
| ✅ `fullført` | Forbedret derivat generert rent, kvalifisert for `skills_omni/` |
| ⚠️ `degradert` | Fullført med fallback eller svakere poengbevegelse — inspiser mer nøye |
| 🚫 `blokkert` | Stoppet av infrastruktur- eller valideringsårsaker — forhindrer automatisk publisering |
| ❌ `mislyktes` | Uventet feil – krever vedlikeholdsundersøkelse |

>**📝 Bidragsytere**trenger ikke å fikse problemer med forbedret infrastruktur. Ansvaret er å sende inn en legitim innfødt ferdighet og holde repoen grønn.---

## 🔄 Automatic Release Policy

Når en endring lander på "main" og inkluderer:

- `ferdigheter/**`
- `ferdigheter_omni/**`
- `data/bundles.json`

…depotet utsteder en**pakkeutgivelse automatisk**.### 📋 Version Bump Rule

| Fra | Til | Regel |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Patch +1 |
| `0.1.9` | `0.1.10` | Patch +1 |
| `0.1.10` | `0.2.0` | Rull til neste moll, tilbakestill patch |

> Utgivelsesflyten regenererer kataloger/arkiver, forplikter versjonsbumpen, merker utgivelsen, publiserer npm og oppretter GitHub-utgivelsen automatisk.---

## 📝 Commit Conventions

| Prefiks | Bruk for |
|:-------|:--------|
| `feat:` | Ny ferdighet eller funksjon |
| `fix:` | Feilretting |
| `dokumenter:` | Dokumentasjonsendringer |
| `refaktor:` | Kodeopprydding eller strukturendringer |
| `test:` | Testendringer |
| `chore:` | Vedlikehold |---

## ❓ Need Help?

| Kanal | Link |
|:--------|:-----|
| 💬 Spørsmål | [Åpne en diskusjon](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Bugs | [Åpne et nummer](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Tidlig tilbakemelding | [Åpne et PR-utkast](https://github.com/diegosouzapw/omni-skills/pulls) |