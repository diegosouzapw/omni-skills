# 🤝 Contributing to Omni Skills (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills obsahuje katalóg zručností aj runtime povrchy postavené na tomto katalógu.**
> Príspevky môžu byť zacielené na ktorúkoľvek oblasť, ale obe musia zostať v súlade s vygenerovanými artefaktmi a aktuálnym správaním CLI.---

## 📊 Repository Baseline

| Metrické | Hodnota |
|:-------|:------|
| 📦 Verzia balíka | "0.1.3" |
| 🧠 Publikované zručnosti | "32" |
| 📦 Plne kryté balíky | '7' |
| 🖥️ Klienti s možnosťou inštalácie | '7' |
| 🔌 Klienti s konfiguráciou MCP | "16" |
| 🔄 Automatické uvoľnenie | Povolené na `main` |---

## Dôležité

| Čo | Kde |
|:-----|:------|
| 🧠 Zručnosti sú vytvorené v | `skills/<názov-zručnosti>/SKILL.md` |
| 📖 Šablóny prispievateľov a pokyny | `docs/contributors/` |
| 🧾 Kanonický PR tok pre nové zručnosti | [Skill PR Workflow](dokumenty/prispievatelia/SKILL-PR-WORKFLOW.md) |
| 📥 Natívne prichádzajúce zručnosti pristanú pod | `skills/` (akýkoľvek jazyk) |
| ✨ Vyliečené vylepšené deriváty | `skills_omni/` (iba v angličtine, automatizované) |
| 🚫 `skills_omni/` je chránený | Nie je otvorený pre priamy verejný príspevok |
| 📖 Runtime a dokumenty o architektúre | `docs/` |
| 📄 Súbory komunity | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Typ | Oblasť |
|:-----|:-----|
| 🧠 Pridať alebo zlepšiť zručnosť | `zručnosti/` |
| 📖 Aktualizovať pokyny pre prispievateľov | `docs/contributors/` |
| 🖥️ Vylepšite CLI, inštalátor alebo skripty | `nástroje/` |
| 📦 Zlepšite runtime katalógu alebo balíky protokolov | `balíky/` |
| 🧪 Sprísnite testy, dymové kontroly alebo uvoľnite dokumenty | Rôzne |---

## Rýchly štart

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

>**📝 Otvorte PR so zapnutou možnosťou „Povoliť úpravy od správcov“.**---

## Dokumentácia

Dobrá natívna zručnosť by mala:

- ✅ Vyriešte konkrétny problém čisto
- ✅ Byť opakovane použiteľný naprieč projektmi
- ✅ Zahrňte pokyny, ktoré môže agent skutočne dodržiavať
- ✅ Vyhnite sa nejasnému alebo nadbytočnému obsahu
- ✅ Deklarujte presné metadáta frontmatu a kompatibility, ak sú k dispozícii
- ✅ Pozemok s vygenerovanými artefaktmi klasifikácie `metadata.json` po spustení automatizácie### 📁 Minimal Structure

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

>**💡 Tip:**Balíky zručností na úrovni vydania by mali obsahovať `agenti/`, `references/`, `examples/` a `scripts/`. Vstupný povrch je však zámerne povolený – je povolená minimálna natívna prichádzajúca zručnosť a potrubie zosilňovača generuje silnejší derivát.### 🌐 Language Policy

| Povrch | Akceptované jazyky |
|:--------|:-------------------|
| 📥 `zručnosti/` (natívny príjem) | portugalčina, angličtina alebo akýkoľvek jazyk |
| ✨ `skills_omni/` (kurátorský výstup) | len anglicky |

> Súkromný zosilňovač zachová pôvodný zdroj tak, ako bol predložený, a prepíše upravený derivát do angličtiny.

📖 Pre celú vetvu, overenie a sekvenciu kontroly vylepšenia použite [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Pred otvorením PR spustite toto:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<podrobnosti>
<summary>📋 <strong>Čo <code>npm run validate</code> regeneruje</strong></summary>

– „metadata.json“.
- `skills/<skill>/metadata.json`
- Mapovanie kanonickej taxonómie
- Vyspelosť, osvedčené postupy, kvalita a skóre bezpečnosti
- Statické bezpečnostné zistenia
- Voliteľný stav skenera ClamAV a VirusTotal (ak je nakonfigurovaný)</details>

>**⚠️ Dôležité:**Validácia je zmluva, ktorú používajú CLI, API, MCP, A2A, manifesty, archívy a automatizácia vydania. S vygenerovanými metadátami zaobchádzajte ako so súčasťou povrchu recenzie, nie s výstupom na jedno použitie.### 📥 Intake Policy

| Podmienka | Správanie |
|:----------|:---------|
| Chýbajúci/neúplný frontmat | ⚠️ Upozornenia (neblokuje) |
| Kritické bezpečnostné zistenia | 🚫 Blokuje príjem |
| Tvrdé chyby overenia | 🚫 Blokuje príjem |
| Prísnejšia redakčná norma | Vynútené v vylepšenom toku derivátov, nie pri prirodzenom príjme |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<podrobnosti>
<summary>📋 <strong>Čo potvrdzuje fajčiarsky preukaz</strong></summary>

- ✅ Overenie zručností
- ✅ Generovanie katalógu
- ✅ Generovanie katalógu dokumentov
- ✅ Testovacia sada
- ✅ `npm pack --suchý chod`
- ✅ bootovanie z API
- ✅ Zavedenie MCP v `stdio`, `stream` a `sse`
- ✅ Topánka A2A
- ✅ Archivujte overenie a očakávania balenia</details>

---

## 📋 Skill Frontmatter

Frontmatter sa dôrazne odporúča. Ako základ použite [Skill Template](docs/contributors/SKILL-TEMPLATE.md).```yaml
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

<podrobnosti>
<summary>🏷️ <strong>Kategórie kanonickej taxonómie</strong></summary>

| Kategória | Kategória |
|:---------|:---------|
| "vývoj" | "frontend" |
| "backend" | `fullstack-web` |
| "nástroje" | "cli-automatizácia" |
| "podnikanie" | "produkt" |
| "dizajn" | "data-ai" |
| "ai-agenti" | "strojové učenie" |
| "devops" | "testovacia bezpečnosť" |
| "dokumentácia" | "obsahové médiá" |
| "komunikácia" | "nezaradené" |</details>

>**ℹ️**Verzia zručností je nezávislá od verzie balíka npm. Ak natívna prichádzajúca zručnosť ešte nemá frontmatter, bude akceptovaná s upozorneniami a odvodí dočasné metadáta z adresára, názvu a hlavného textu.---

## ⚙️ Runtime Contributions

Ak sa dotknete `packages/`, `tools/bin/`, `tools/lib/` alebo zostaviť skripty:

- 📦 Udržujte `dist/` a dokumenty zarovnané s implementáciou
- 🔄 Uprednostňujte opätovné použitie „balíčkov/jadro katalógu“ namiesto duplikovania logiky katalógu
- 🔒 Udržujte správanie lokálneho zápisu za predvolenými nastaveniami náhľadu alebo suchého spustenia
- 🔌 Udržujte tvorcov MCP disciplinovaných – prvotriednych zapisovačov konfigurácií pridávajte iba vtedy, keď má klient stabilnú verejnú konfiguračnú zmluvu
- 🛡️ Varovania bezpečnostného skenera vnímajte ako súčasť panela s recenziami
- 🧪 Aktualizujte testy pri zmene príkazov CLI, režimov dopravy alebo verejných koncových bodov### 🚧 Important Boundary

| Urob to ✅ | Nerob to 🚫 |
|:-----------|:-----------------|
| Odošlite natívnu prácu pod `skills/` | Otvorte manuálne PR, ktoré upravujú `skills_omni/` |
| Nechajte automatizáciu zvládnuť spustenie zosilňovača | Pridať upravený obsah priamo |
| Zamerajte sa na legitímnu kvalitu zručností | Obíďte automatizovaný tok PR sprievodcu |

>**ℹ️**Keď sa natívna zručnosť v `skills/` aktualizuje, súkromný vylepšovač ju znova spracuje a obnoví vylepšenú základnú líniu.---

## 🔄 Enhancer Outcome States

Počas verejných PR natívnych zručností zosilňovač hlási jeden zo štyroch stavov:

| Štát | Význam |
|:------|:--------|
| ✅ "dokončené" | Čisto generovaný vylepšený derivát, vhodný pre `skills_omni/` |
| ⚠️ `degradovaný` | Doplnené o záložný alebo slabší pohyb skóre – skontrolujte pozornejšie |
| 🚫 "zablokované" | Zastavené z dôvodov infraštruktúry alebo overenia – bráni automatickému zverejneniu |
| ❌ „nepodarilo sa“ | Neočakávaná chyba – vyžaduje vyšetrovanie správcu |

>**📝 Prispievatelia**nemusia riešiť problémy s infraštruktúrou vylepšení. Zodpovednosťou je predložiť legitímnu natívnu zručnosť a udržať repo obchod zelený.---

## 🔄 Automatic Release Policy

Keď zmena pristane na `main` a zahŕňa:

- „zručnosti/**“.
- `skills_omni/**`
- `data/bundles.json`

...úložisko vydá**automatické uvoľnenie balíka**.### 📋 Version Bump Rule

| Od | Komu | Pravidlo |
|:-----|:---|:-----|
| "0.1.0" | "0.1.1" | Náplasť +1 |
| "0,1,9" | "0.1.10" | Náplasť +1 |
| "0.1.10" | "0.2.0" | Prejdite na ďalšiu vedľajšiu, resetujte opravu |

> Tok vydania regeneruje katalóg/archívy, potvrdí zmenu verzie, označí vydanie, zverejní npm a automaticky vytvorí vydanie GitHub.---

## 📝 Commit Conventions

| Predpona | Použiť pre |
|:-------|:--------|
| `feat:` | Nová zručnosť alebo funkcia |
| `opraviť:` | Oprava chyby |
| `docs:` | Zmeny dokumentácie |
| `reaktor:` | Čistenie kódu alebo zmeny štruktúry |
| `test:` | Testovacie zmeny |
| `fuška:` | Údržba |---

## ❓ Need Help?

| Kanál | Odkaz |
|:--------|:-----|
| 💬 Otázky | [Otvoriť diskusiu](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Chyby | [Otvoriť problém](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Včasná spätná väzba | [Otvoriť návrh PR](https://github.com/diegosouzapw/omni-skills/pulls) |