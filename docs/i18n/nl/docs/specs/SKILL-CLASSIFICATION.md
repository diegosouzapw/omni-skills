# 📊 Skill Classification and Metadata (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**De lokale classificatie die elke vaardigheid scoort tijdens validatie en build, en machinaal leesbare profielen genereert voor de hele catalogus.**---

## 📊 Status

| Uitvoer | Gegenereerd |
|:-------|:----------|
| ✅ Root `metadata.json` | Repository-brede samenvatting |
| ✅ Per vaardigheid `skills/<skill>/metadata.json` | Individuele classificaties |
| ✅ Catalogus `dist/catalog.json` | Gepubliceerde catalogus met partituren |
| ✅ Manifesteert `dist/manifests/<skill>.json` | Machineleesbare gegevens per vaardigheid |

Gegenereerd door: `python3 tools/scripts/validate_skills.py`

Huidige momentopname van de opslagplaats:

- 32 gepubliceerde vaardigheden
- gemiddelde kwaliteitsscore `96,3`
- gemiddelde best practices scoren `98,7`
- gemiddelde beveiligingsscore `95,0`
- huidige kwaliteitsspreiding `94, 95, 96, 97, 100`
- de huidige best practices zijn verspreid over '98, 99, 100'---

## 🎯 Purpose

De classifier geeft elke vaardigheid een**consistent, machinaal leesbaar profiel**voordat deze in de catalogus terechtkomt. Het voert vier taken uit:

1. 📋**Parse**— YAML-frontmatter en markdown-tekst
2. 🏷️**Normaliseren**— Categorielabels voor canonieke taxonomie
3. 📊**Classificeren**— Volwassenheid, best practices, kwaliteit en beveiligingsscores
4. 📁**Emit**— Metadata-artefacten die worden gebruikt door build-scripts, documenten en CI---

## 🏷️ Canonical Taxonomy

**18 canonieke categorieën**met automatische aliastoewijzing:

| Categorie | Domein | Veel voorkomende aliassen |
|:---------|:-------|:--------------|
| 💻 `ontwikkeling` | Algemene softwareontwikkelaar | `codering`, `programmering` |
| 🎨`frontend` | Front-end en gebruikersinterface | `ui`, `webontwerp` |
| 🔧 `backend` | Backend & API's | `server`, `api` |
| 🌐 `fullstack-web` | End-to-end web | `web`, `full-stack` |
| 🛠️`gereedschap` | Ontwikkelaarstools | `nutsvoorzieningen` |
| ⚙️ `cli-automatisering` | CLI & automatisering | `scripting`, `workflow` |
| 📊 `zakelijk` | Bedrijfsstrategie | `strategie` |
| 📐 `product` | Productbeheer | `pm` |
| 🎯 `ontwerp` | Visueel en UX-ontwerp | `ux` |
| 🤖 `data-ai` | Data- en AI-apps | `data`, `analyse` |
| 🧠`ai-agenten` | AI-agentpatronen | `agenten` |
| 📈 `machine-leren` | ML-modellen en training | `ml` |
| 🔌`devops` | Infrastructuur | `infrastructuur`, `cloud` |
| 🛡️ `test-beveiliging` | Testen & beveiliging | `testen`, `beveiliging`, `qa` |
| 📖 `documentatie` | Documentbeheer | `documenten` |
| 🎬 `inhoud-media` | Contentcreatie | `media`, `inhoud` |
| 💬 `communicatie` | Communicatiemiddelen | `chatten` |
| ❓ `ongecategoriseerd` | Standaard terugval | — |

> Oudere labels zoals `workflow`, `architectuur`, `infrastructuur` worden automatisch genormaliseerd via de aliastoewijzing.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Niveau | Etiket | Criteria |
|:------|:------|:---------|
|**L1**| `metagegevens` | Frontmatter plus minimale body |
|**L2**| `instructies` | Substantiële schriftelijke instructies |
|**L3**| `bronnen` | Gebundelde scripts of rijkere verpakte bronnen |

Aanvullende signalen bijgehouden: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

De heuristiek evalueert:

| Signaal | Wat het controleert |
|:-------|:---------------|
| 📛 Slakkenkwaliteit | veldopmaak `naam` |
| 📝 Beschrijving | Duidelijkheid, lengte, informativiteit |
| 📐 Structuur | Documentsecties en hiërarchie |
| 💡 Voorbeelden | Codeerhekken en voorbeeldblokken |
| 🔗 Referenties | Gekoppelde lokale `references/`, `scripts/` en support-pack helpers |
| 🧰 Bedienbaarheid | Uitvoerbare lokale scriptvoorbeelden en concrete workflowfragmenten |
| 🧩 Diepte steunpakket | Meerdere ondersteuningsfamilies, herbruikbare bestanden, metadata van agenten en operationele middelen |
| 🩺 Problemen oplossen | Expliciete paren 'Symptomen' en 'Oplossing' |
| 📚 Dekking | De secties 'Wanneer gebruiken', 'Beste praktijken', 'Problemen oplossen' en 'Aanvullende bronnen' |
| 🌐 Draagbaarheid | Tool-agnostische formulering |
| 📅 Versheid | Vermijden van hardgecodeerde datums |

**Huidige niveaus**

| Niveau | Scorebereik |
|:-----|:-----------|
| `uitstekend` | 90-100 |
| `goed` | 70-89 |
| `eerlijk` | 50-69 |
| `werk nodig` | 0-49 |

De scorer is opzettelijk**semantisch genoeg om spreiding**over volwassen vaardigheden te creëren. Een vaardigheid met een zuivere structuur kan goed scoren, maar om de bovenste band te bereiken heeft hij ook dieptesignalen nodig zoals:

- meerdere voorbeelden, niet slechts één
- meerdere gevallen van probleemoplossing
- gerelateerde vaardigheidsbegeleiding
- rijkere lokale ondersteuningspakketten
- meer dan één ondersteunende familie die verder gaat dan gewoon proza, idealiter inclusief 'agenten/' of 'activa/' waar ze echt hergebruik toevoegen
- een speciale `## Workflow`-sectie met telbare stappen
- ten minste één kleine operationele tabel of beslissingskaart wanneer dit de duidelijkheid van de uitvoering verbetert
- meer operationele specificiteit dan een gewoon sjabloon
- duidelijkere workflow-diepte en beslissingsondersteunende middelen
- support-pack-diepte die verder gaat dan één `references/`-bestand en één gekoppeld script
- genoeg herbruikbare ondersteuningsbestanden om te voelen als een workflowkit, niet als een add-on met één notitie
- voldoende operationele dichtheid om een gepolijste omtrek te scheiden van een herbruikbare workflowkit

Dat betekent dat een structureel complete vaardigheid nog steeds in de top 90 kan belanden in plaats van '100' als het ondersteuningspakket kleiner is, de beslissingsmiddelen dunner zijn, of de operationele dichtheid lager is dan de sterkste vaardigheden in de catalogus.---

### ⭐ Quality Score (0-100)

De heuristiek combineert:

| Signaal | Gewicht |
|:-------|:-------|
| 📝 Volledigheid van het lichaam | Middelhoog |
| 📋 Beschrijving precisie | Middel |
| 📊 Volledigheid van metadata | Middel |
| 📅 Recentheid (`date_updated`) | Middel |
| 📦 Verpakte hulpmiddelen | Middel |
| 📋 Bijdrage best practices | Middel |
| 🧠 Semantische diepgang | Middelhoog |
| 🛠️ Operationele diepgang | Middel |
| 📚 Rijkdom van ondersteuningspakketten | Middel |

**Kwaliteitsniveaus:**

| Niveau | Scorebereik |
|:-----|:-----------|
| 💎 `platina` | 80+ |
| 🥇 `goud` | 65-79 |
| 🥈 `zilver` | 50-64 |
| 🥉 `brons` | 35-49 |
| 🌱`voorgerecht` | 0-34 |---

### 🛡️ Security Score (0-100)

De beveiligingslaag combineert:

| Scanner | Altijd ingeschakeld | Wat het doet |
|:--------|:---------------|:------------|
| 🔍**Statisch**| ✅ Ja | Scant SKILL.md, verpakte bestanden en scripts |
| 🦠**ClamAV**| ⚙️ Optioneel | Scannen van malware via `clamscan` |
| 🔒**VirusTotaal**| ⚙️ Optioneel | Hash opzoeken (geen upload) |

**Statische scannerregelfamilies:**
- 🎭 Snelle injectie- en exfiltratiepatronen
- 💣 Destructieve shell-opdrachten
- 🔑 Verdachte referentie- of besturingssysteempaden
- ⚠️ Risicovolle scriptprimitieven (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Veiligheidsuitvoervorm:**```json
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

| Sectie | Velden |
|:--------|:-------|
| 🆔 Identiteit | `id`, `slug`, `display_name` |
| 🏷️Taxonomie | `raw_category`, `canonieke_categorie`, `afgeleide_categorie` |
| 📋 Auteur | tags, tools, complexiteit, risico, bron, auteur |
| 📅 Data & paden | `date_added`, `date_updated`, paden |
| 📊 Hulpbronnen | Bestands- en referentietellers |
| 📝 Inhoudssignalen | Aantal woorden, lichaamslengte, structurele vlaggen |
| 🧠 Semantische diepgang | Workflowstappen, voorbeelden, diepte van probleemoplossing, beslissingsmiddelen, ondersteuningslinkfamilies |
| 🧩 Ondersteuningspakketstructuur | Aantal ondersteuningsbestanden, gekoppelde families, `agents/`, `assets/` en herbruikbare voorbeelden |
| 🎯 Rijpheid | Niveau, label, scripts/bestanden vlaggen |
| 📋 Beste praktijken | Score en niveau |
| ⭐ Kwaliteit | Score, niveau en semantische uitsplitsing |
| 🛡️ Beveiliging | Score, niveau, status, bevindingen |
| ✅ Validatie | Status, fouten, waarschuwingen |### Root (`metadata.json`)

| Sectie | Velden |
|:--------|:-------|
| 📊 Samenvatting | Tellingen, gemiddelden, categorieverdeling |
| 🏷️Taxonomie | Categorietellingen |
| 🎯 Distributie | Vaardigheidsniveau, kwaliteitsniveau, beveiligingsniveau |
| ✅ Validatie | Statustellingen |
| 📋 Vaardighedenlijst | Compacte samenvattingen per vaardigheid |---

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

Dit configureert `git` om `.githooks/pre-commit` te gebruiken, wat metagegevens en catalogusartefacten regenereert voordat het wordt vastgelegd en de gegenereerde bestanden automatisch worden gefaseerd.