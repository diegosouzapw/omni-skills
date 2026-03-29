# 📊 Skill Classification and Metadata (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Miestny klasifikátor, ktorý hodnotí každú zručnosť počas overovania a zostavovania a generuje strojovo čitateľné profily pre celý katalóg.**---

## 📊 Status

| Výstup | Vygenerované |
|:-------|:----------|
| ✅ Koreň `metadata.json` | Súhrn celého úložiska |
| ✅ Per-skill `skills/<skill>/metadata.json` | Jednotlivé klasifikácie |
| ✅ Katalóg `dist/catalog.json` | Publikovaný katalóg s partitúrami |
| ✅ Manifestuje `dist/manifests/<skill>.json` | Strojovo čitateľné údaje pre jednotlivé zručnosti |

Generuje: `python3 tools/scripts/validate_skills.py`

Aktuálna snímka úložiska:

- 32 publikovaných zručností
- priemerné skóre kvality `96,3`
- priemerné skóre najlepších postupov `98,7`
- priemerné skóre bezpečnosti `95,0`
- rozpätie aktuálnej kvality `94, 95, 96, 97, 100`
- súčasné osvedčené postupy sa šíria „98, 99, 100“.---

## 🎯 Purpose

Klasifikátor dáva každej zručnosti**konzistentný strojovo čitateľný profil**predtým, ako sa dostane do katalógu. Vykonáva štyri úlohy:

1. 📋**Parse**— YAML frontmatter a markdown body
2. 🏷️**Normalizovať**— Označenia kategórií podľa kanonickej taxonómie
3. 📊**Klasifikácia**– zrelosť, osvedčené postupy, kvalita a hodnotenie bezpečnosti
4. 📁**Emit**– artefakty metadát spotrebované skriptami zostavovania, dokumentmi a CI---

## 🏷️ Canonical Taxonomy

**18 kanonických kategórií**s automatickým mapovaním aliasov:

| Kategória | Doména | Bežné prezývky |
|:---------|:-------|:---------------|
| 💻 "vývoj" | Vývoj všeobecného softvéru | "kódovanie", "programovanie" |
| 🎨 `frontend` | Frontend & UI | `ui`, `web-design` |
| 🔧 `backend` | Backend & API | "server", "api" |
| 🌐 `fullstack-web` | End-to-end web | `web`, `plný zásobník` |
| 🛠️ `nástroje` | Vývojárske nástroje | "verejné služby" |
| ⚙️ `cli-automatizácia` | CLI a automatizácia | `scripting`, `workflow` |
| 📊 "podnikanie" | Obchodná stratégia | "stratégia" |
| 📐 "produkt" | Produktový manažment | `pm` |
| 🎯 `dizajn` | Vizuálny a UX dizajn | "ux" |
| 🤖 `data-ai` | Dáta a aplikácie AI | `data`, `analytics` |
| 🧠 `ai-agenti` | Vzory agentov AI | "agenti" |
| 📈 `strojové učenie` | Modely ML a školenia | "ml" |
| 🔌 "devops" | Infraštruktúra | "infraštruktúra", "cloud" |
| 🛡️ "testovanie-bezpečnosť" | Testovanie a bezpečnosť | "testovanie", "zabezpečenie", "qa" |
| 📖 "dokumentácia" | Vedenie dokumentov | "dokumenty" |
| 🎬 `obsah-médiá` | Tvorba obsahu | `médiá`, `obsah` |
| 💬 "komunikácia" | Komunikačné nástroje | `chat` |
| ❓ „nezaradené“ | Predvolená záloha | — |

> Staršie označenia ako `workflow`, `architecture`, `infrastructure` sa automaticky normalizujú prostredníctvom mapovania aliasov.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Úroveň | Označenie | Kritériá |
|:------|:------|:---------|
|**L1**| "metaúdaje" | Frontmatter plus minimálne telo |
|**L2**| "návod" | Podstatné písomné pokyny |
|**L3**| "zdroje" | Pribalené skripty alebo bohatšie zabalené zdroje |

Ďalšie sledované signály: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

Heuristika vyhodnocuje:

| Signál | Čo kontroluje |
|:-------|:---------------|
| 📛 Kvalita slimákov | Formátovanie poľa `name` |
| 📝 Popis | Prehľadnosť, dĺžka, informatívnosť |
| 📐 Štruktúra | Sekcie a hierarchia dokumentu |
| 💡 Príklady | Kódové ploty a vzorové bloky |
| 🔗 Referencie | Prepojené lokálne `references/`, `scripts/` a pomocníci balíka podpory |
| 🧰 Funkčnosť | Príklady spustiteľných lokálnych skriptov a konkrétne úryvky pracovného postupu |
| 🧩 Hĺbka balíka podpory | Viacnásobné podporné rodiny, opakovane použiteľné súbory, metadáta agentov a prevádzkové aktíva |
| 🩺 Riešenie problémov | Explicitné páry „Príznaky“ a „Riešenie“ |
| 📚 Pokrytie | Časti „Kedy použiť“, „Osvedčené postupy“, „Riešenie problémov“ a „Ďalšie zdroje“ |
| 🌐 Prenosnosť | Nástroj agnostické znenie |
| 📅 Čerstvosť | Vyhýbanie sa pevne zakódovaným dátumom |

**Aktuálne vrstvenie**

| Úroveň | Rozsah skóre |
|:-----|:-----------|
| "vynikajúci" | 90-100 |
| "dobre" | 70-89 |
| "spravodlivé" | 50-69 |
| "potreby-práca" | 0-49 |

Bodovač je zámerne**dostatočne sémantický, aby vytvoril rozptyl**medzi zrelými zručnosťami. Zručnosť s čistou štruktúrou môže dosiahnuť dobré skóre, ale na dosiahnutie najvyššieho pásma potrebuje aj hĺbkové signály, ako napríklad:

- viacero príkladov, nielen jeden
- viaceré prípady riešenia problémov
- súvisiace poradenstvo v oblasti zručností
- bohatšie balíčky miestnej podpory
- viac ako jedna podporná rodina nad rámec obyčajnej prózy, ideálne vrátane „agentov/“ alebo „aktíva/“, kde pridávajú skutočné opätovné použitie
- vyhradená sekcia „## Workflow“ s počítateľnými krokmi
- aspoň jedna malá operačná tabuľka alebo rozhodovacia mapa, ak to zlepšuje prehľadnosť vykonávania
- väčšia operačná špecifickosť ako obyčajná šablóna
- jasnejšia hĺbka pracovného toku a prostriedky na podporu rozhodovania
- hĺbka balíka podpory, ktorá presahuje rámec jedného súboru `references/` a jedného prepojeného skriptu
- dostatok opakovane použiteľných podporných súborov, aby ste sa cítili ako súprava pracovných postupov, nie ako doplnok s jednou poznámkou
- dostatočná prevádzková hustota na oddelenie lešteného obrysu od opakovane použiteľnej súpravy pracovných postupov

To znamená, že štrukturálne úplná zručnosť môže stále pristáť vo vysokých 90-tych rokoch namiesto „100“, ak je jej balík podpory užší, aktíva na rozhodovanie tenšie alebo ich prevádzková hustota je nižšia ako najsilnejšie zručnosti v katalógu.---

### ⭐ Quality Score (0-100)

Heuristika kombinuje:

| Signál | Hmotnosť |
|:-------|:-------|
| 📝 Úplnosť tela | Stredne vysoké |
| 📋 Presnosť popisu | Stredná |
| 📊 Úplnosť metadát | Stredná |
| 📅 Aktuálnosť (`date_updated`) | Stredná |
| 📦 Balené zdroje | Stredná |
| 📋 Príspevok osvedčených postupov | Stredná |
| 🧠 Sémantická hĺbka | Stredne vysoké |
| 🛠️ Prevádzková hĺbka | Stredná |
| 📚 Bohatstvo balíka podpory | Stredná |

**Kvalitné úrovne:**

| Úroveň | Rozsah skóre |
|:-----|:-----------|
| 💎 `platina` | 80+ |
| 🥇 "zlato" | 65-79 |
| 🥈 "striebro" | 50-64 |
| 🥉 "bronz" | 35-49 |
| 🌱 "štartér" | 0-34 |---

### 🛡️ Security Score (0-100)

Bezpečnostná vrstva kombinuje:

| Skener | Vždy povolené | Čo to robí |
|:--------|:---------------|:-------------|
| 🔍**Statické**| ✅ Áno | Skenuje SKILL.md, zabalené súbory a skripty |
| 🦠**ClamAV**| ⚙️ Voliteľné | Skenovanie škodlivého softvéru cez `clamscan` |
| 🔒**VirusTotal**| ⚙️ Voliteľné | Vyhľadávanie hash (bez nahrávania) |

**Rodiny pravidiel statického skenera:**
- 🎭 Rýchle vzory vstrekovania a exfiltrácie
- 💣 Deštruktívne príkazy shellu
- 🔑 Podozrivé poverenia alebo cesty OS
- ⚠️ Rizikové primitíva skriptov (`shell=True`, `pickle.load`, `eval`, `extrahall`)

**Tvar bezpečnostného výstupu:**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

| Sekcia | Polia |
|:--------|:-------|
| 🆔 Identita | `id`, `slug`, `display_name` |
| 🏷️ Taxonómia | `raw_category`, `canonical_category`, `inferred_category` |
| 📋 Autorstvo | tagy, nástroje, zložitosť, riziko, zdroj, autor |
| 📅 Termíny a cesty | `date_added`, `date_updated`, cesty |
| 📊 Zdroje | Počítadlá súborov a referencií |
| 📝 Signály obsahu | Počet slov, dĺžka tela, štrukturálne príznaky |
| 🧠 Sémantická hĺbka | Kroky pracovného toku, príklady, hĺbka riešenia problémov, aktíva rozhodovania, skupiny prepojení s podporou |
| 🧩 Štruktúra podporného balenia | Počty podporných súborov, prepojené rodiny, `agenti/`, `assets/` a opakovane použiteľné príklady |
| 🎯 Zrelosť | Úroveň, označenie, príznaky skriptov/súborov |
| 📋 Osvedčené postupy | Skóre a úroveň |
| ⭐ Kvalita | Skóre, úroveň a sémantické členenie |
| 🛡️ Bezpečnosť | Skóre, úroveň, stav, zistenia |
| ✅ Overenie | Stav, chyby, varovania |### Root (`metadata.json`)

| Sekcia | Polia |
|:--------|:-------|
| 📊 Zhrnutie | Počty, priemery, rozdelenie kategórií |
| 🏷️ Taxonómia | Kategória sa počíta |
| 🎯 Distribúcia | Úroveň zručností, úroveň kvality, úroveň zabezpečenia |
| ✅ Overenie | Stav sa počíta |
| 📋 Zoznam zručností | Kompaktné súhrny jednotlivých zručností |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

Toto nakonfiguruje `git` tak, aby používal `.githooks/pre-commit`, ktorý generuje metadáta a artefakty katalógu pred potvrdením a automaticky nastavuje generované súbory.