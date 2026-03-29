# 📋 Skill Manifest Specification (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Het machinaal leesbare JSON-manifest dat is gegenereerd op basis van elke `SKILL.md` tijdens de build-pijplijn: het enkele datacontract dat door alle runtime-oppervlakken wordt verbruikt.**---

## 📊 Status

| Kenmerk | Staat |
|:--------|:------|
| ✅ Automatisch gegenereerd vanuit SKILL.md | Geïmplementeerd |
| ✅ Verbruikt door CLI, API, MCP, A2A | Geïmplementeerd |
| ✅ Archieven met controlesommen | Geïmplementeerd |
| ✅ Beveiligingsclassificatie | Geïmplementeerd |

>**Belangrijk**: het manifest is een**build-artefact**. Auteur van bijdrager `SKILL.md` — de pijplijn leidt het JSON-manifest automatisch af.---

## 🎯 Purpose

Het manifest bestaat zodat**alle runtime-oppervlakken**dezelfde genormaliseerde vorm hebben:

| Oppervlakte | Hoe het gebruik maakt van manifesten |
|:--------|:---------------------|
| 🖥️**CLI**| Zoeken, installatieplanning, doktersdiagnostiek |
| 🌐**API**| Eindpuntreacties, filteren, downloadlinks |
| 🔌**MCP**| Toolreacties, broninhoud |
| 🤖**A2A**| Ontdekkings- en aanbevelingspayloads |---

## 📁 Output Locations

| Artefact | Pad |
|:---------|:-----|
| 📊 Root-metagegevens | `metadata.json` |
| 📊 Metagegevens per vaardigheid | `skills/<vaardigheid>/metadata.json` |
| 📋 Vaardighedenindex | `skills_index.json` |
| 📚 Gepubliceerde catalogus | `dist/catalog.json` |
| 📌 Manifest per vaardigheid | `dist/manifests/<skill>.json` |
| 📦 Zip-archief | `dist/archives/<vaardigheid>.zip` |
| 📦 Tarball-archief | `dist/archives/<skill>.tar.gz` |
| 🔒 Checksum-manifest | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Veld | Beschrijving |
|:------|:------------|
| `schema_versie` | Versie van het manifestschema |
| `id` | Stabiele vaardigheids-ID uit veld 'naam' |
| `slak` | Directory-slug onder `skills/` |
| `weergave_naam` | Voor mensen leesbare titel vanaf eerste kop |### 📝 Metadata

| Veld | Beschrijving |
|:------|:------------|
| `beschrijving` | Korte samenvatting van frontmatter |
| `versie` | Skill-versie, onafhankelijk van de npm-pakketversie |
| `categorie` | Canonieke categorie (genormaliseerd) |
| `raw_categorie` | Originele categorie van frontmatter |
| `taxonomie` | Volledige taxonomie-metagegevens met afgeleide terugval |
| `labels` | Doorzoekbare tags |
| `complexiteit` | `beginner` · `gemiddeld` · `gevorderd` · `expert` |
| `risico` | `veilig` · `voorzichtig` · `aanstootgevend` · `kritisch` |
| `bron` | `omni-team` · `gemeenschap` · `officieel` |
| `auteur` | Toeschrijvingsreeks |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Veld | Beschrijving |
|:------|:------------|
| `ingangspunt` | Canoniek `SKILL.md`-pad |
| `paden.root` | Vaardigheidsmap in repository |
| `paden.manifest` | Gegenereerd manifestpad in `dist/` |### 🖥️ Compatibility

| Veld | Beschrijving |
|:------|:------------|
| `gereedschap` | Tool-ID's van frontmatter |
| `install_targets` | Metagegevens per tool installeren |

Elk installatiedoel bevat: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Veld | Beschrijving |
|:------|:------------|
| `sub_bronnen` | Submappen voor vaardigheden (`referenties`, `agenten`, `activa`) |
| `artefacten_aantal` | Totaal aantal bestanden in het vaardighedenpakket |
| `referenties_aantal` | Aantal referentiedocumenten |
| `agenten_telling` | Aantal agentconfiguraties |
| `activa_aantal` | Aantal activabestanden |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Veld | Beschrijving |
|:------|:------------|
| `strategie` | Installatiestrategie (bijvoorbeeld `copy-skill-directory`) |
| `huidig_installatieprogramma` | Voor mensen leesbaar installatiegedrag |
| `recepten` | Installatierecepten per klant |### 📊 Classification

| Sectie | Velden |
|:--------|:-------|
| 🎯`volwassenheid` | `skill_level`, `skill_level_label` |
| 📋 `best_practices` | `score` (0-100) |
| ⭐ `kwaliteit` | `score` (0-100) |
| 🛡️`beveiliging` | `score`, `status` |
| ✅ `validatie` | `status` |### 📝 Content

Afgeleide signalen: `body_length`, `content_length`, `body_lines`, `word_count`, plus structurele vlaggen voor voorbeelden, secties voor probleemoplossing, enz.### 📁 Artifacts

Array van elk bestand dat in de vaardighedenmap wordt verzonden:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Artefactsoorten**: `ingangspunt` · `referentie` · `agent` · `asset` · `licentie` · `ondersteuning`### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| Veld | Beschrijving |
|:------|:------------|
| `entrypoint_sha256` | Hash van SKILL.md |
| `pakket_sha256` | Deterministische samenvatting van de geordende artefactlijst |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 De versie van het repositorypakket en de vaardigheidsversie zijn verschillende problemen. Het pakket is momenteel '0.1.3', terwijl individuele vaardigheden hun eigen semantische versies hebben.---

## ⚠️ Compatibility Notes

| Regel | Reden |
|:-----|:----------|
| ✅ Moet afleidbaar blijven van repo | Geen handmatig manifestontwerp vereist |
| ✅ Er kunnen nieuwe optionele velden worden toegevoegd | Voorwaartse compatibiliteit |
| ⚠️Bestaande velden moeten stabiel blijven | Achterwaartse compatibiliteit |
| 🚫 Geen handgeschreven manifesten | Afleiding van de bouwtijd is de bron van de waarheid |