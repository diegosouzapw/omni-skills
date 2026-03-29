# 🤝 Contributing to Omni Skills (Română)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills conține atât un catalog de abilități, cât și suprafețele de rulare construite deasupra acelui catalog.**
> Contribuțiile pot viza oricare dintre zone, dar ambele trebuie să rămână aliniate cu artefactele generate și cu comportamentul curent CLI.---

## 📊 Repository Baseline

| Metric | Valoare |
|:-------|:------|
| 📦 Versiune pachet | `0.1.3` |
| 🧠 Abilități publicate | `32` |
| 📦 Pachete susținute complet | `7` |
| 🖥️ Clienți capabili de instalare | `7` |
| 🔌 Clienți capabili de configurare MCP | `16` |
| 🔄 Lansări automate | Activat pe `principal` |---

## Important

| Ce | Unde |
|:-----|:------|
| 🧠 Abilitățile sunt create în | `skills/<skill-name>/SKILL.md` |
| 📖 Șabloane și îndrumări pentru colaboratori | `docs/contributors/` |
| 🧾 Flux canonic de PR pentru noi competențe | [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Abilitățile native incoming ajung sub | `skills/` (orice limbă) |
| ✨ Derivate îmbunătățite curatate | `skills_omni/` (numai în engleză, automat) |
| 🚫 `skills_omni/` este protejat | Nu este deschis pentru contribuție publică directă |
| 📖 Documente despre runtime și arhitectură | `docs/` |
| 📄 Fișiere comunitare | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Tip | Zona |
|:-----|:-----|
| 🧠 Adăugați sau îmbunătățiți o abilitate | `deprinderi/` |
| 📖 Actualizați ghidul pentru colaboratori | `docs/contributors/` |
| 🖥️ Îmbunătățiți CLI, programul de instalare sau scripturile | `instrumente/` |
| 📦 Îmbunătățiți durata de execuție a catalogului sau pachetele de protocol | `pachete/` |
| 🧪 Strângeți testele, controalele de fum sau eliberați documente | Diverse |---

## Pornire rapidă

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

>**📝 Deschideți PR cu `Permite modificări de la menținători` activat.**---

## Documentație

O bună abilitate nativă incoming ar trebui:

- ✅ Rezolvați o problemă specifică în mod curat
- ✅ Fii reutilizabil în toate proiectele
- ✅ Includeți instrucțiuni pe care un agent le poate urma cu adevărat
- ✅ Evitați conținutul vag sau redundant
- ✅ Declarați metadate exacte de frontmatter și compatibilitate atunci când sunt disponibile
- ✅ Teren cu artefacte de clasificare `metadata.json` generate după rularea automatizării### 📁 Minimal Structure

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

>**💡 Sfat:**Pachetele de abilități de nivel de lansare ar trebui să includă `agenți/`, `referințe/`, `exemple/` și `scripturi/`. Dar suprafața de admisie este permisivă în mod intenționat - este permisă o abilitate minimă de intrare nativă, iar conducta de amplificator generează derivatul mai puternic.### 🌐 Language Policy

| Suprafata | Limbi acceptate |
|:--------|:--------------------|
| 📥 `skills/` (aport nativ) | Portugheză, engleză sau orice limbă |
| ✨ `skills_omni/` (ieșire organizată) | Numai în engleză |

> Amplificatorul privat păstrează sursa nativă așa cum a fost trimisă și rescrie derivatul curatat în engleză.

📖 Pentru secvența completă de ramificare, validare și revizuire a îmbunătățitorului, utilizați [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Rulați acest lucru înainte de a deschide un PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<detalii>
<summary>📋 <strong>Ce regenerează <code>npm run validate</code></strong></summary>

- `metadata.json`
- `skills/<skill>/metadata.json`
- Cartografierea taxonomiei canonice
- Scoruri de maturitate, bune practici, calitate și securitate
- Constatări de securitate statică
- Stare opțională a scanerului ClamAV și VirusTotal (când este configurat)</details>

>**⚠️ Important:**Validarea este contractul utilizat de CLI, API, MCP, A2A, manifeste, arhive și automatizarea lansărilor. Tratați metadatele generate ca parte a suprafeței de examinare, nu rezultate de unică folosință.### 📥 Intake Policy

| Stare | Comportament |
|:----------|:---------|
| Lipsă/incompletă subiect principal | ⚠️ Avertismente (nu blocheaza) |
| Constatări critice de securitate | 🚫 Blochează aportul |
| Erori de validare hard | 🚫 Blochează aportul |
| Standard editorial mai strict | Aplicat în fluxul derivat îmbunătățit, nu la aportul nativ |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<detalii>
<summary>📋 <strong>Ce validează permisul de fum</strong></summary>

- ✅ Validarea aptitudinilor
- ✅ Generare catalog
- ✅ Generarea catalogului de documente
- ✅ Suită de teste
- ✅ `npm pack --dry-run`
- ✅ Boot API
- ✅ Pornire MCP în `stdio`, `stream` și `sse`
- ✅ Cizma A2A
- ✅ Verificarea arhivei și așteptările de ambalare</details>

---

## 📋 Skill Frontmatter

Frontmatter este foarte recomandat. Utilizați [Șablon de aptitudini](docs/contributors/SKILL-TEMPLATE.md) ca bază.```yaml
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

<detalii>
<summary>🏷️ <strong>Categorii taxonomie canonice</strong></summary>

| Categoria | Categoria |
|:---------|:---------|
| `dezvoltare` | `frontend` |
| `backend` | `fullstack-web` |
| `instrumente` | `cli-automatizare` |
| `afaceri` | „produs” |
| `design` | `data-ai` |
| `ai-agenti` | `învățare automată` |
| `devops` | `testare-securitate` |
| `documentație` | `conținut-media` |
| `comunicare` | `necategorizat` |</details>

>**ℹ️**Versiunea Skill este independentă de versiunea pachetului npm. Dacă o abilitate nativă primită nu are încă frontmatter, va fi acceptată cu avertismente și va obține metadate temporare din director, titlu și textul corpului.---

## ⚙️ Runtime Contributions

Dacă atingeți `packages/`, `tools/bin/`, `tools/lib/` sau construiți scripturi:

- 📦 Păstrați `dist/` și documentele aliniate cu implementarea
- 🔄 Prefer să reutilizați `pachete/catalog-core` în loc să duplicați logica catalogului
- 🔒 Păstrați comportamentul de scriere locală în spatele setărilor implicite de previzualizare sau de rulare uscată
- 🔌 Păstrați-i pe scriitorii MCP disciplinați - adăugați scriitori de configurare de primă clasă numai atunci când clientul are un contract public stabil de configurare
- 🛡️ Tratați avertismentele scanerelor de securitate ca parte a barei de recenzii
- 🧪 Actualizați testele atunci când schimbați comenzile CLI, modurile de transport sau punctele finale publice### 🚧 Important Boundary

| Fă asta ✅ | Nu face asta 🚫 |
|:------------|:------------------|
| Trimiteți lucrarea nativă sub `skills/` | Deschideți PR-uri manuale care editează `skills_omni/` |
| Lasă automatizarea să se ocupe de rularea amplificatorului | Adăugați direct conținut organizat |
| Concentrați-vă pe calitatea competențelor legitime | Ocoliți fluxul automat de PR însoțitor |

>**ℹ️**Când o abilitate nativă din `skills/` este actualizată, amplificatorul privat o reprocesează și reîmprospătează linia de bază îmbunătățită.---

## 🔄 Enhancer Outcome States

În timpul PR-urilor publice de competențe native, intensificatorul raportează una dintre cele patru stări:

| Stat | Înțeles |
|:------|:--------|
| ✅ `terminat` | Derivat îmbunătățit generat în mod curat, eligibil pentru `skills_omni/` |
| ⚠️ `degradat` | Completat cu mișcare de rezervă sau scor mai slab — inspectați mai atent |
| 🚫 `blocat` | Oprit din motive de infrastructură sau de validare — împiedică publicarea automată |
| ❌ `eșuat` | Eroare neașteptată — necesită investigarea întreținătorului |

>**📝 Colaboratorii**nu trebuie să remedieze problemele legate de infrastructura amplificatorului. Responsabilitatea este de a trimite o abilitate nativă legitimă și de a păstra repo-ul verde.---

## 🔄 Automatic Release Policy

Când o modificare ajunge pe „principal” și include:

- `deprinderi/**`
- `skills_omni/**`
- `data/bundles.json`

…depozitul emite o**eliberare automată a pachetului**.### 📋 Version Bump Rule

| Din | Pentru | Regula |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Patch +1 |
| `0.1.9` | `0.1.10` | Patch +1 |
| `0.1.10` | `0.2.0` | Treceți la următorul minor, resetați patch-ul |

> Fluxul de lansare regenerează catalogul/arhivele, comite versiunea actualizată, etichetează versiunea, publică npm și creează versiunea GitHub automat.---

## 📝 Commit Conventions

| Prefix | Utilizare pentru |
|:-------|:--------|
| `feat:` | Abilitate sau caracteristică nouă |
| `fix:` | Remediere erori |
| `docs:` | Modificări ale documentației |
| `refactor:` | Curățarea codului sau modificările structurii |
| `test:` | Testare modificări |
| `chore:` | Întreținere |---

## ❓ Need Help?

| Canal | Link |
|:--------|:-----|
| 💬 Întrebări | [Deschide o discuție](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Bug-uri | [Deschideți o problemă](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Feedback timpuriu | [Deschide o schiță de PR](https://github.com/diegosouzapw/omni-skills/pulls) |