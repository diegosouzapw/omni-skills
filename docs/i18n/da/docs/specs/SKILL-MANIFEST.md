# 📋 Skill Manifest Specification (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Det maskinlæsbare JSON-manifest genereret fra hver `SKILL.md` under build-pipeline - den enkelte datakontrakt, der forbruges af alle runtime-overflader.**---

## 📊 Status

| Funktion | Stat |
|:--------|:------|
| ✅ Autogenereret fra SKILL.md | Implementeret |
| ✅ Forbruges af CLI, API, MCP, A2A | Implementeret |
| ✅ Arkiver med kontrolsummer | Implementeret |
| ✅ Sikkerhedsklassificering | Implementeret |

>**Vigtigt**: Manifestet er en**bygningsartefakt**. Bidragyders forfatter `SKILL.md` — pipelinen udleder JSON-manifestet automatisk.---

## 🎯 Purpose

Manifestet eksisterer således, at**alle runtime-overflader**bruger den samme normaliserede form:

| Overflade | Hvordan det bruger manifester |
|:--------|:---------------------|
| 🖥️**CLI**| Søg, installationsplanlægning, lægediagnostik |
| 🌐**API**| Slutpunktsvar, filtrering, downloadlinks |
| 🔌**MCP**| Værktøjssvar, ressourceindhold |
| 🤖**A2A**| Nyttelast for opdagelse og anbefalinger |---

## 📁 Output Locations

| Artefakt | Sti |
|:---------|:-----|
| 📊 Rodmetadata | `metadata.json` |
| 📊 Metadata pr. færdighed | `skills/<skill>/metadata.json` |
| 📋 Indeks for færdigheder | `skills_index.json` |
| 📚 Udgivet katalog | `dist/catalog.json` |
| 📌 Manifest pr. færdighed | `dist/manifests/<skill>.json` |
| 📦 Zip-arkiv | `dist/archives/<skill>.zip` |
| 📦 Tarball-arkiv | `dist/archives/<skill>.tar.gz` |
| 🔒 Kontrolsummanifest | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Felt | Beskrivelse |
|:------|:------------|
| `skema_version` | Version af manifestskemaet |
| `id` | Stabil færdigheds-id fra `navn`-feltet |
| `snegl` | Directory slug under `færdigheder/` |
| `visningsnavn` | Menneskelæselig titel fra første overskrift |### 📝 Metadata

| Felt | Beskrivelse |
|:------|:------------|
| `beskrivelse` | Kort resumé fra frontmatter |
| `version` | Skill-version, uafhængig af npm-pakkeversionen |
| `kategori` | Kanonisk kategori (normaliseret) |
| `råkategori` | Original kategori fra frontmatter |
| `taksonomi` | Fuld taksonomi metadata med udledt fallback |
| `tags` | Søgbare tags |
| `kompleksitet` | `begynder` · `mellemliggende` · `avanceret` · `ekspert` |
| `risiko` | `sikker` · `caution` · `offensiv` · `kritisk` |
| `kilde` | `omni-team` · `community` · `officielt` |
| `forfatter` | Attributionsstreng |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Felt | Beskrivelse |
|:------|:------------|
| `indgangspunkt` | Kanonisk `SKILL.md`-sti |
| `stier.rod` | Færdighedsmappe inde i repo |
| `stier.manifest` | Genereret manifeststi i `dist/` |### 🖥️ Compatibility

| Felt | Beskrivelse |
|:------|:------------|
| `værktøjer` | Værktøjsidentifikatorer fra frontmatter |
| `install_mål` | Metadata pr. værktøjsinstallation |

Hvert installationsmål inkluderer: "værktøj", "omfang", "default_path", "installer_flag", "aktuel_installationsadfærd", "invocation".### 📦 Resources

| Felt | Beskrivelse |
|:------|:------------|
| `underressourcer` | Færdighedsunderkataloger (`referencer`, `agenter`, `aktiver`) |
| `artifacts_count` | Samlet antal filer i færdighedspakken |
| `referencetal` | Referencedokumentantal |
| `agenter_antal` | Agentkonfigurationsantal |
| `aktiver_antal` | Antal aktiver |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Felt | Beskrivelse |
|:------|:------------|
| `strategi` | Installationsstrategi (f.eks. `copy-skill-directory`) |
| `current_installer` | Menneskelæselig installationsadfærd |
| `opskrifter` | Per-klient installation opskrifter |### 📊 Classification

| Afsnit | Felter |
|:--------|:-------|
| 🎯 `modenhed` | `skill_level`, `skill_level_label` |
| 📋 `bedste_praksis` | `score` (0-100) |
| ⭐ `kvalitet` | `score` (0-100) |
| 🛡️ `sikkerhed` | `score`, `status` |
| ✅ `validering` | `status` |### 📝 Content

Afledte signaler: "body_length", "content_length", "body_lines", "word_count" plus strukturelle flag for eksempler, fejlfindingssektioner osv.### 📁 Artifacts

Array af hver fil, der sendes inde i færdighedsmappen:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Artefakttyper**: `entrypoint` · `reference` · `agent` · `asset` · `licens` · `support`### 📦 Archives

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

| Felt | Beskrivelse |
|:------|:------------|
| `entrypoint_sha256` | Hash af SKILL.md |
| `pakke_sha256` | Deterministisk digest fra ordnet artefaktliste |---

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

> 📌 Repository-pakkeversion og færdighedsversion er forskellige bekymringer. Pakken er i øjeblikket '0.1.3', mens individuelle færdigheder har deres egne semantiske versioner.---

## ⚠️ Compatibility Notes

| Regel | Begrundelse |
|:-----|:----------|
| ✅ Skal forblive afledt fra repo | Ingen manuel manifestforfattelse påkrævet |
| ✅ Nye valgfrie felter kan tilføjes | Fremadrettet kompatibilitet |
| ⚠️ Eksisterende felter skal forblive stabile | Bagudkompatibilitet |
| 🚫 Ingen håndskrevne manifester | Byggetidsafledning er kilden til sandhed |