# 📋 Skill Manifest Specification (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Det maskinläsbara JSON-manifestet som genereras från varje `SKILL.md` under byggpipelinen – det enda datakontraktet som förbrukas av alla körtidsytor.**---

## 📊 Status

| Funktion | Stat |
|:--------|:------|
| ✅ Autogenererad från SKILL.md | Implementerad |
| ✅ Konsumeras av CLI, API, MCP, A2A | Implementerad |
| ✅ Arkiv med kontrollsummor | Implementerad |
| ✅ Säkerhetsklassificering | Implementerad |

>**Viktigt**: Manifestet är en**byggartefakt**. Bidragsgivares författare `SKILL.md` — pipelinen härleder JSON-manifestet automatiskt.---

## 🎯 Purpose

Manifestet finns så att**alla körtidsytor**konsumerar samma normaliserade form:

| Yta | Hur det använder Manifests |
|:--------|:---------------------------|
| 🖥️**CLI**| Sök, installera planering, läkare diagnostik |
| 🌐**API**| Slutpunktssvar, filtrering, nedladdningslänkar |
| 🔌**MCP**| Verktygssvar, resursinnehåll |
| 🤖**A2A**| Nyttolaster för upptäckt och rekommendationer |---

## 📁 Output Locations

| Artefakt | Väg |
|:--------|:-----|
| 📊 Rotmetadata | `metadata.json` |
| 📊 Metadata per färdighet | `skills/<skill>/metadata.json` |
| 📋 Färdighetsindex | `skills_index.json` |
| 📚 Publicerad katalog | `dist/catalog.json` |
| 📌 Manifest per färdighet | `dist/manifests/<skill>.json` |
| 📦 Zip-arkiv | `dist/archives/<skill>.zip` |
| 📦 Tarball-arkiv | `dist/archives/<skill>.tar.gz` |
| 🔒 Kontrollsummanifest | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Fält | Beskrivning |
|:------|:------------|
| `schema_version` | Version av manifestschemat |
| `id` | Stabil färdighetsidentifierare från `namn`-fältet |
| `snigel` | Katalogsnäcka under `skills/` |
| `display_name` | Människoläsbar titel från första rubriken |### 📝 Metadata

| Fält | Beskrivning |
|:------|:------------|
| `beskrivning` | Kort sammanfattning från frontmatter |
| `version` | Skill-version, oberoende av npm-paketversionen |
| `kategori` | Kanonisk kategori (normaliserad) |
| `råkategori` | Originalkategori från frontmatter |
| `taxonomi` | Full taxonomi metadata med antagen reserv |
| `taggar` | Sökbara taggar |
| `komplexitet` | `nybörjare` · `mellanliggande` · `avancerad` · `expert` |
| `risk` | `safe` · `caution` · `offensiv` · `kritisk` |
| `källa` | `omni-team` · `community` · `officiell` |
| `författare` | Tillskrivningssträng |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Fält | Beskrivning |
|:------|:------------|
| `ingångspunkt` | Kanonisk `SKILL.md` sökväg |
| `paths.root` | Skicklighetskatalog inuti repo |
| `paths.manifest` | Genererad manifestsökväg i `dist/` |### 🖥️ Compatibility

| Fält | Beskrivning |
|:------|:------------|
| `verktyg` | Verktygsidentifierare från frontmatter |
| `install_targets` | Metadata per verktygsinstallation |

Varje installationsmål inkluderar: "verktyg", "omfattning", "default_path", "installationsflagga", "current_installer_behavior", "anrop".### 📦 Resources

| Fält | Beskrivning |
|:------|:------------|
| `underresurser` | Färdighetsunderkataloger (`referenser`, `agenter`, `tillgångar`) |
| `artifacts_count` | Totalt antal filer i färdighetspaketet |
| `referensantal` | Antal referensdokument |
| `agents_count` | Antal agentkonfigurationer |
| `tillgångar_antal` | Antal tillgångsfiler |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Fält | Beskrivning |
|:------|:------------|
| `strategi` | Installationsstrategi (t.ex. `copy-skill-directory`) |
| `current_installer` | Människoläsbart installationsbeteende |
| `recept` | Installationsrecept per klient |### 📊 Classification

| Avsnitt | Fält |
|:--------|:-------|
| 🎯 `mognad` | `skill_level`, `skill_level_label` |
| 📋 `bästa_praxis` | `poäng` (0-100) |
| ⭐ `kvalitet` | `poäng` (0-100) |
| 🛡️ `säkerhet` | `poäng`, `status` |
| ✅ `validering` | `status` |### 📝 Content

Härledda signaler: "body_length", "content_length", "body_lines", "word_count", plus strukturella flaggor för exempel, felsökningsavsnitt osv.### 📁 Artifacts

Array av varje fil som skickas in i färdighetskatalogen:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Artefakttyper**: `entrypoint` · `referens` · `agent` · `asset` · `licens` · `support`### 📦 Archives

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

| Fält | Beskrivning |
|:------|:------------|
| `entrypoint_sha256` | Hash av SKILL.md |
| `package_sha256` | Deterministisk sammanfattning från ordnad artefaktlista |---

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

> 📌 Förvarspaketversion och färdighetsversion är olika problem. Paketet är för närvarande "0.1.3", medan individuella färdigheter har sina egna semantiska versioner.---

## ⚠️ Compatibility Notes

| Regel | Motiv |
|:-----|:----------------|
| ✅ Måste kunna härledas från repo | Ingen manuell manifestering krävs |
| ✅ Nya valfria fält kan läggas till | Framåtkompatibilitet |
| ⚠️ Befintliga fält måste förbli stabila | Bakåtkompatibilitet |
| 🚫 Inga handskrivna manifest | Byggtidens härledning är källan till sanning |