# 📊 Skill Classification and Metadata (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Den lokale klassifikator, der scorer alle færdigheder under validering og opbygning, genererer maskinlæsbare profiler for hele kataloget.**---

## 📊 Status

| Udgang | Genereret |
|:-------|:----------|
| ✅ Root `metadata.json` | Repository-dækkende oversigt |
| ✅ Per-skill `skills/<skill>/metadata.json` | Individuelle klassifikationer |
| ✅ Katalog `dist/catalog.json` | Udgivet katalog med partiturer |
| ✅ Manifesterer `dist/manifests/<skill>.json` | Maskinlæsbare data pr. færdighed |

Genereret af: `python3 tools/scripts/validate_skills.py`

Nuværende depot-øjebliksbillede:

- 32 offentliggjorte færdigheder
- gennemsnitlig kvalitetsscore `96,3`
- Gennemsnitlig score for bedste praksis "98,7".
- gennemsnitlig sikkerhedsscore `95,0`
- nuværende kvalitetsspredning `94, 95, 96, 97, 100`
- aktuelle bedste praksis-spredning "98, 99, 100".---

## 🎯 Purpose

Klassificeringen giver enhver færdighed en**konsistent maskinlæsbar profil**, før den når kataloget. Den udfører fire opgaver:

1. 📋**Parse**— YAML frontmatter og markdown body
2. 🏷️**Normaliser**— Kategorietiketter til kanonisk taksonomi
3. 📊**Klassificer**— Modenhed, bedste praksis, kvalitet og sikkerhedsscoring
4. 📁**Emit**— Metadata-artefakter forbrugt af build-scripts, dokumenter og CI---

## 🏷️ Canonical Taxonomy

**18 kanoniske kategorier**med automatisk alias-tilknytning:

| Kategori | Domæne | Almindelige aliaser |
|:---------|:-------|:--------------|
| 💻 `udvikling` | Generel softwareudvikler | `kodning`, `programmering` |
| 🎨 `frontend` | Frontend & UI | `ui`, `web-design` |
| 🔧 `backend` | Backend & API'er | `server`, `api` |
| 🌐 `fullstack-web` | End-to-end web | `web`, `fuld stak` |
| 🛠️ `værktøjer` | Udviklerværktøj | `hjælpeprogrammer` |
| ⚙️ `cli-automatisering` | CLI & automatisering | `scripting`, `workflow` |
| 📊 `forretning` | Forretningsstrategi | `strategi` |
| 📐 `produkt` | Produktstyring | `pm` |
| 🎯 `design` | Visuelt & UX design | `ux` |
| 🤖 `data-ai` | Data & AI apps | `data`, `analytics` |
| 🧠 `ai-agenter` | AI-agentmønstre | `agenter` |
| 📈 `maskine-læring` | ML modeller & træning | `ml` |
| 🔌 `devops` | Infrastruktur | `infrastruktur`, `sky` |
| 🛡️ `test-sikkerhed` | Test & sikkerhed | `test`, `sikkerhed`, `qa` |
| 📖 `dokumentation` | Doc management | `dokumenter` |
| 🎬 `indhold-medier` | Oprettelse af indhold | `medie`, `indhold` |
| 💬 `kommunikation` | Kommunikationsværktøjer | `chat` |
| ❓ `ukategoriseret` | Standard fallback | — |

> Ældre etiketter som "workflow", "arkitektur", "infrastruktur" normaliseres automatisk gennem alias-tilknytningen.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Niveau | Etiket | Kriterier |
|:------|:------|:--------|
|**L1**| `metadata` | Frontmatter plus minimal krop |
|**L2**| `vejledning` | Væsentlige skriftlige instruktioner |
|**L3**| `ressourcer` | Medfølgende scripts eller rigere pakkede ressourcer |

Yderligere sporede signaler: "has_scripts", "has_extra_files".---

### 📋 Best Practices Score (0-100)

Heuristikken vurderer:

| Signal | Hvad det tjekker |
|:-------|:---------------|
| 📛 Sneglekvalitet | `navn` feltformatering |
| 📝 Beskrivelse | Klarhed, længde, informativitet |
| 📐 Struktur | Dokumentsektioner og hierarki |
| 💡 Eksempler | Kode hegn og eksempelblokke |
| 🔗 Referencer | Linkede lokale `referencer/`, `scripts/` og supportpakkehjælpere |
| 🧰 Betjening | Kørbare lokale script-eksempler og konkrete workflow-uddrag |
| 🧩 Support-pakke dybde | Flere supportfamilier, genbrugelige filer, agentmetadata og operationelle aktiver |
| 🩺 Fejlfinding | Eksplicitte "Symptomer" og "Løsning" par |
| 📚 Dækning | `Hvornår skal du bruge`, `Bedste praksis`, `Fejlfinding` og `Yderligere ressourcer` sektioner |
| 🌐 Bærbarhed | Værktøjs-agnostisk formulering |
| 📅 Friskhed | Undgåelse af hårdkodede datoer |

**Nuværende niveau**

| Tier | Resultatområde |
|:-----|:-----------|
| `fremragende` | 90-100 |
| 'god' | 70-89 |
| 'fair' | 50-69 |
| `behov-arbejde` | 0-49 |

Målscoreren er bevidst**semantisk nok til at skabe spredning**på tværs af modne færdigheder. En færdighed med ren struktur kan score godt, men for at nå topbåndet har den også brug for dybdesignaler som:

- flere eksempler, ikke kun et
- flere fejlfindingssager
- relateret færdighedsvejledning
- rigere lokale supportpakker
- mere end én støttefamilie ud over almindelig prosa, ideelt inklusive "agenter/" eller "aktiver/", hvor de tilføjer reel genbrug
- en dedikeret "## Workflow" sektion med tællelige trin
- mindst én lille operationstabel eller beslutningskort, når det forbedrer klarheden i udførelsen
- mere operationel specificitet end en almindelig skabelon
- klarere workflow dybde og beslutningsstøtte aktiver
- Support-pakke dybde, der går ud over en `references/` fil og et linket script
- nok genbrugelige supportfiler til at føles som et workflow-kit, ikke en enkelt-note-tilføjelse
- nok driftstæthed til at adskille en poleret kontur fra et genanvendeligt workflow-kit

That means a structurally complete skill can still land in the high 90s instead of `100` if its support pack is narrower, its decision assets are thinner, or its operational density is lower than the strongest skills in the catalog.---

### ⭐ Quality Score (0-100)

Heuristikken kombinerer:

| Signal | Vægt |
|:-------|:-------|
| 📝 Kroppens fuldstændighed | Mellem-høj |
| 📋 Beskrivelse præcision | Medium |
| 📊 Metadata fuldstændighed | Medium |
| 📅 Seneste (`dato_opdateret`) | Medium |
| 📦 Pakkede ressourcer | Medium |
| 📋 Bidrag til bedste praksis | Medium |
| 🧠 Semantisk dybde | Mellem-høj |
| 🛠️ Operationel dybde | Medium |
| 📚 Støttepakke rigdom | Medium |

**Kvalitetsniveauer:**

| Tier | Resultatområde |
|:-----|:-----------|
| 💎 `platin` | 80+ |
| 🥇 `guld` | 65-79 |
| 🥈 `sølv` | 50-64 |
| 🥉 `bronze` | 35-49 |
| 🌱 `starter` | 0-34 |---

### 🛡️ Security Score (0-100)

Sikkerhedslaget kombinerer:

| Scanner | Altid aktiveret | Hvad det gør |
|:--------|:---------------|:-------------|
| 🔍**Statisk**| ✅ Ja | Scanner SKILL.md, pakkede filer og scripts |
| 🦠**ClamAV**| ⚙️ Valgfrit | Malware-scanning via `clamscan` |
| 🔒**VirusTotal**| ⚙️ Valgfrit | Hash-opslag (ingen upload) |

**Statiske scannerregelfamilier:**
- 🎭 Hurtige injektions- og eksfiltrationsmønstre
- 💣 Destruktive shell-kommandoer
- 🔑 Mistænkelige legitimationsoplysninger eller OS-stier
- ⚠️ Risikable script-primitiver (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Sikkerhedsoutputform:**```json
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

| Afsnit | Felter |
|:--------|:-------|
| 🆔 Identitet | `id`, `slug`, `display_name` |
| 🏷️ Taksonomi | `råkategori`, `kanonisk_kategori`, `udledt_kategori` |
| 📋 Forfatter | tags, værktøjer, kompleksitet, risiko, kilde, forfatter |
| 📅 Datoer & stier | `date_added`, `date_updated`, stier |
| 📊 Ressourcer | Fil- og referencetællere |
| 📝 Indholdssignaler | Ordantal, kropslængde, strukturelle flag |
| 🧠 Semantisk dybde | Workflow-trin, eksempler, fejlfindingsdybde, beslutningsaktiver, support-link-familier |
| 🧩 Support-pakke struktur | Antal supportfiler, sammenkædede familier, `agenter/`, `aktiver/` og genbrugelige eksempler |
| 🎯 Modenhed | Niveau, etiket, scripts/filer flag |
| 📋 Bedste praksis | Score og niveau |
| ⭐ Kvalitet | Score, niveau og semantisk opdeling |
| 🛡️ Sikkerhed | Score, niveau, status, resultater |
| ✅ Validering | Status, fejl, advarsler |### Root (`metadata.json`)

| Afsnit | Felter |
|:--------|:-------|
| 📊 Resumé | Antal, gennemsnit, kategorifordeling |
| 🏷️ Taksonomi | Kategori tæller |
| 🎯 Distribution | Færdighedsniveau, kvalitetsniveau, sikkerhedsniveau |
| ✅ Validering | Status tæller |
| 📋 Liste over færdigheder | Kompakte resuméer pr. færdighed |---

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

Dette konfigurerer `git` til at bruge `.githooks/pre-commit`, som regenererer metadata og katalogartefakter før commit og iscenesætter de genererede filer automatisk.