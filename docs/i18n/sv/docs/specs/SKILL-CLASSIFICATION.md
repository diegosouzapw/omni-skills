# 📊 Skill Classification and Metadata (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Den lokala klassificeraren som poängsätter varje färdighet under validering och byggande, genererar maskinläsbara profiler för hela katalogen.**---

## 📊 Status

| Utgång | Genererad |
|:-------|:----------|
| ✅ Root `metadata.json` | Förvarsomfattande sammanfattning |
| ✅ Per färdighet `skills/<skill>/metadata.json` | Individuella klassificeringar |
| ✅ Katalog `dist/catalog.json` | Publicerad katalog med partitur |
| ✅ Manifesterar `dist/manifests/<skill>.json` | Maskinläsbar data per färdighet |

Genererad av: `python3 tools/scripts/validate_skills.py`

Aktuell ögonblicksbild av förvaret:

- 32 publicerade färdigheter
- Genomsnittligt kvalitetsresultat "96,3".
- Genomsnittligt betyg för bästa praxis "98,7".
- genomsnittlig säkerhetspoäng "95,0".
- aktuell kvalitetsspridning `94, 95, 96, 97, 100`
- nuvarande bästa praxis spridning "98, 99, 100".---

## 🎯 Purpose

Klassificeraren ger varje färdighet en**konsekvent maskinläsbar profil**innan den når katalogen. Den utför fyra jobb:

1. 📋**Parse**— YAML frontmatter och markdown-kropp
2. 🏷️**Normalisera**— Kategorietiketter till kanonisk taxonomi
3. 📊**Klassifiera**— Mognad, bästa praxis, kvalitet och säkerhetspoäng
4. 📁**Emit**— Metadataartefakter som förbrukas av byggskript, dokument och CI---

## 🏷️ Canonical Taxonomy

**18 kanoniska kategorier**med automatisk aliasmapping:

| Kategori | Domän | Vanliga alias |
|:---------|:--------|:--------------|
| 💻 `utveckling` | Allmän mjukvaruutveckling | `kodning`, `programmering` |
| 🎨 `frontend` | Frontend & UI | `ui`, `webbdesign` |
| 🔧 `backend` | Backend och API:er | `server`, `api` |
| 🌐 `fullstack-web` | End-to-end webb | `web`, `full-stack` |
| 🛠️ `verktyg` | Utvecklarverktyg | `verktyg` |
| ⚙️ `cli-automation` | CLI & automation | `scripting`, `workflow` |
| 📊 `affärer` | Affärsstrategi | `strategi` |
| 📐 `produkt` | Produkthantering | `pm` |
| 🎯 `design` | Visuell & UX-design | `ux` |
| 🤖 `data-ai` | Data & AI-appar | `data`, `analytics` |
| 🧠 `ai-agenter` | AI-agentmönster | `agenter` |
| 📈 `maskininlärning` | ML modeller & utbildning | `ml` |
| 🔌 `devops` | Infrastruktur | `infrastruktur`, `moln` |
| 🛡️ `test-säkerhet` | Test & säkerhet | `testning`, `säkerhet`, `qa` |
| 📖 `dokumentation` | Dokumenthantering | `dokument` |
| 🎬 `innehåll-media` | Skapa innehåll | `media`, `content` |
| 💬 `kommunikation` | Kommunikationsverktyg | `chatta` |
| ❓ `okategoriserad` | Standard reserv | — |

> Äldre etiketter som "arbetsflöde", "arkitektur", "infrastruktur" normaliseras automatiskt genom aliasmappingen.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Nivå | Etikett | Kriterier |
|:------|:------|:--------|
|**L1**| `metadata` | Frontmatter plus minimal kropp |
|**L2**| `instruktioner` | Väsentliga skriftliga instruktioner |
|**L3**| `resurser` | Medföljande skript eller rikare paketerade resurser |

Ytterligare signaler som spåras: "has_scripts", "has_extra_files".---

### 📋 Best Practices Score (0-100)

Heuristiken utvärderar:

| Signal | Vad det kontrollerar |
|:--------|:---------------|
| 📛 Snigelkvalitet | `namn` fältformatering |
| 📝 Beskrivning | Tydlighet, längd, informativitet |
| 📐 Struktur | Dokumentsektioner och hierarki |
| 💡 Exempel | Koda staket och exempelblock |
| 🔗 Referenser | Länkade lokala `referenser/`, `scripts/` och support-pack-hjälpare |
| 🧰 Driftbarhet | Körbara lokala skriptexempel och konkreta arbetsflödesfragment |
| 🧩 Support-pack djup | Flera supportfamiljer, återanvändbara filer, agentmetadata och operativa tillgångar |
| 🩺 Felsökning | Explicita "Symtom" och "Lösning" par |
| 📚 Täckning | Avsnitten "När du ska använda", "Bästa metoder", "Felsökning" och "Ytterligare resurser" |
| 🌐 Bärbarhet | Verktygs-agnostisk formulering |
| 📅 Friskhet | Undvikande av hårdkodade datum |

**Nuvarande nivå**

| Nivå | Poängintervall |
|:-----|:----------------|
| `utmärkt` | 90-100 |
| `bra` | 70-89 |
| `rättvis` | 50-69 |
| `behov-arbete` | 0-49 |

Målskytten är avsiktligt**semantisk nog att skapa spridning**över mogna färdigheter. En färdighet med ren struktur kan göra bra poäng, men för att nå toppbandet behöver den också djupsignaler som:

- Flera exempel, inte bara ett
- Flera felsökningsfall
- relaterad kompetensvägledning
- rikare lokala supportpaket
- mer än en stödfamilj utöver vanlig prosa, helst inklusive "agenter/" eller "tillgångar/" där de lägger till verklig återanvändning
- en dedikerad "## Workflow"-sektion med räknebara steg
- minst en liten operationstabell eller beslutskarta när det förbättrar utförandets tydlighet
- Mer operativ specificitet än en vanlig mall
- tydligare arbetsflödesdjup och beslutsstödstillgångar
- Support-pack-djup som går längre än en `referens/`-fil och ett länkat skript
- tillräckligt många återanvändbara supportfiler för att kännas som ett arbetsflödeskit, inte ett tillägg med en enda not
- Tillräcklig drifttäthet för att separera en polerad kontur från ett återanvändbart arbetsflödeskit

Det betyder att en strukturellt komplett färdighet fortfarande kan landa på 90-talet istället för "100" om dess supportpaket är smalare, dess beslutstillgångar är tunnare eller dess operativa täthet är lägre än de starkaste färdigheterna i katalogen.---

### ⭐ Quality Score (0-100)

Heuristiken kombinerar:

| Signal | Vikt |
|:-------|:-------|
| 📝 Kroppsfullständighet | Medel-hög |
| 📋 Beskrivning precision | Medium |
| 📊 Metadata fullständighet | Medium |
| 📅 Senaste (`date_updated`) | Medium |
| 📦 Paketerade resurser | Medium |
| 📋 Bidrag med bästa praxis | Medium |
| 🧠 Semantiskt djup | Medel-hög |
| 🛠️ Driftsdjup | Medium |
| 📚 Support-pack rikedom | Medium |

**Kvalitetsnivåer:**

| Nivå | Poängintervall |
|:-----|:----------------|
| 💎 `platina` | 80+ |
| 🥇 `guld` | 65-79 |
| 🥈 `silver` | 50-64 |
| 🥉 `brons` | 35-49 |
| 🌱 `förrätt` | 0-34 |---

### 🛡️ Security Score (0-100)

Säkerhetsskiktet kombinerar:

| Skanner | Alltid aktiverad | Vad det gör |
|:--------|:--------------|:------------|
| 🔍**Statisk**| ✅ Ja | Skannar SKILL.md, paketerade filer och skript |
| 🦠**ClamAV**| ⚙️ Valfritt | Skanning av skadlig programvara via `clamscan` |
| 🔒**VirusTotal**| ⚙️ Valfritt | Hash-sökning (ingen uppladdning) |

**Statiska skannerregelfamiljer:**
- 🎭 Snabba injektions- och exfiltrationsmönster
- 💣 Destruktiva skalkommandon
- 🔑 Misstänkta användaruppgifter eller OS-vägar
- ⚠️ Riskfyllda skriptprimitiver (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Säkerhetsutdataform:**```json
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

| Avsnitt | Fält |
|:--------|:-------|
| 🆔 Identitet | `id`, `slug`, `display_name` |
| 🏷️ Taxonomi | `raw_category`, `canonical_category`, `inferred_category` |
| 📋 Författarskap | taggar, verktyg, komplexitet, risk, källa, författare |
| 📅 Datum & vägar | `date_added`, `date_updated`, sökvägar |
| 📊 Resurser | Fil- och referensräknare |
| 📝 Innehållssignaler | Ordräkning, kroppslängd, strukturella flaggor |
| 🧠 Semantiskt djup | Arbetsflödessteg, exempel, felsökningsdjup, beslutstillgångar, supportlänkfamiljer |
| 🧩 Support-pack struktur | Antal supportfiler, länkade familjer, `agenter/`, `tillgångar/` och återanvändbara exempel |
| 🎯 Mognad | Nivå, etikett, skript/filer flaggor |
| 📋 Bästa metoder | Poäng och nivå |
| ⭐ Kvalitet | Poäng, nivå och semantisk uppdelning |
| 🛡️ Säkerhet | Poäng, nivå, status, resultat |
| ✅ Validering | Status, fel, varningar |### Root (`metadata.json`)

| Avsnitt | Fält |
|:--------|:-------|
| 📊 Sammanfattning | Antal, medelvärden, kategorifördelning |
| 🏷️ Taxonomi | Kategoriantal |
| 🎯 Distribution | Skicklighetsnivå, kvalitetsnivå, säkerhetsnivå |
| ✅ Validering | Status räknas |
| 📋 Kompetenslista | Kompakta sammanfattningar per färdighet |---

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

Detta konfigurerar `git` att använda `.githooks/pre-commit`, som regenererar metadata och katalogartefakter innan commit och arrangerar de genererade filerna automatiskt.