# 📋 Skill Manifest Specification (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Det maskinlesbare JSON-manifestet generert fra hver 'SKILL.md' under byggepipelinen – den enkeltdatakontrakten som forbrukes av alle kjøretidsoverflater.**---

## 📊 Status

| Funksjon | Stat |
|:--------|:------|
| ✅ Autogenerert fra SKILL.md | Implementert |
| ✅ Brukes av CLI, API, MCP, A2A | Implementert |
| ✅ Arkiv med kontrollsummer | Implementert |
| ✅ Sikkerhetsklassifisering | Implementert |

>**Viktig**: Manifestet er en**byggeartefakt**. Bidragsyteres forfatter `SKILL.md` — pipelinen utleder JSON-manifestet automatisk.---

## 🎯 Purpose

Manifestet eksisterer slik at**alle kjøretidsflater**bruker den samme normaliserte formen:

| Overflate | Hvordan den bruker manifester |
|:--------|:---------------------|
| 🖥️**CLI**| Søk, installer planlegging, legediagnostikk |
| 🌐**API**| Sluttpunktsvar, filtrering, nedlastingslenker |
| 🔌**MCP**| Verktøysvar, ressursinnhold |
| 🤖**A2A**| Nyttelaster for oppdagelse og anbefalinger |---

## 📁 Output Locations

| Artefakt | Sti |
|:--------|:-----|
| 📊 Rotmetadata | `metadata.json` |
| 📊 Metadata per ferdighet | `skills/<skill>/metadata.json` |
| 📋 Ferdighetsindeks | `skills_index.json` |
| 📚 Publisert katalog | `dist/catalog.json` |
| 📌 Manifest per ferdighet | `dist/manifests/<skill>.json` |
| 📦 Zip-arkiv | `dist/archives/<skill>.zip` |
| 📦 Tarball-arkiv | `dist/archives/<skill>.tar.gz` |
| 🔒 Kontrollsummanifest | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Felt | Beskrivelse |
|:------|:------------|
| `schema_version` | Versjon av manifestskjemaet |
| `id` | Stabil ferdighetsidentifikator fra `navn`-feltet |
| `snegl` | Katalogsnegl under `ferdigheter/` |
| `visningsnavn` | Menneskelesbar tittel fra første overskrift |### 📝 Metadata

| Felt | Beskrivelse |
|:------|:------------|
| `beskrivelse` | Kort oppsummering fra frontmatter |
| `versjon` | Skill-versjon, uavhengig av npm-pakkeversjonen |
| `kategori` | Kanonisk kategori (normalisert) |
| `råkategori` | Original kategori fra frontmatter |
| `taksonomi` | Full taksonomi metadata med antatt fallback |
| `tags` | Søkbare tagger |
| `kompleksitet` | `nybegynner` · `mellomliggende` · `avansert` · `ekspert` |
| `risiko` | `safe` · `caution` · `offensive` · `kritisk` |
| `kilde` | `omni-team` · `community` · `offisiell` |
| `forfatter` | Attribusjonsstreng |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Felt | Beskrivelse |
|:------|:------------|
| `inngangspunkt` | Kanonisk `SKILL.md`-bane |
| `paths.root` | Ferdighetskatalog i repo |
| `paths.manifest` | Generert manifestbane i `dist/` |### 🖥️ Compatibility

| Felt | Beskrivelse |
|:------|:------------|
| `verktøy` | Verktøyidentifikatorer fra frontmatter |
| `install_targets` | Metadata per verktøyinstallasjon |

Hvert installasjonsmål inkluderer: «verktøy», «omfang», «default_path», «installer_flag», «current_installer_behavior», «invocation»### 📦 Resources

| Felt | Beskrivelse |
|:------|:------------|
| `underressurser` | Ferdighetsunderkataloger (`referanser`, `agenter`, `assets`) |
| `artifacts_count` | Totalt antall filer i ferdighetspakken |
| `referansetall` | Antall referansedokumenter |
| `agenter_antall` | Antall agentkonfigurasjoner |
| `assets_count` | Antall aktivafiler |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Felt | Beskrivelse |
|:------|:------------|
| `strategi` | Installer strategi (f.eks. `copy-skill-directory`) |
| `current_installer` | Menneskelesbar installasjonsatferd |
| `oppskrifter` | Installasjonsoppskrifter per klient |### 📊 Classification

| Seksjon | Felter |
|:--------|:-------|
| 🎯 `modenhet` | `ferdighetsnivå`, `ferdighetsnivåetikett` |
| 📋 `beste_praksis` | `score` (0-100) |
| ⭐ `kvalitet` | `score` (0-100) |
| 🛡️ `sikkerhet` | `poengsum`, `status` |
| ✅ `validering` | `status` |### 📝 Content

Avledede signaler: «body_length», «content_length», «body_lines», «word_count», pluss strukturelle flagg for eksempler, feilsøkingsseksjoner osv.### 📁 Artifacts

En rekke av hver fil som sendes i ferdighetskatalogen:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Artefakttyper**: `inngangspunkt` · `referanse` · `agent` · `aktivum` · `lisens` · `støtte`### 📦 Archives

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
| `entrypoint_sha256` | Hash av SKILL.md |
| `package_sha256` | Deterministisk sammendrag fra ordnet artefaktliste |---

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

> 📌 Repository-pakkeversjon og ferdighetsversjon er forskjellige bekymringer. Pakken er for øyeblikket `0.1.3`, mens individuelle ferdigheter har sine egne semantiske versjoner.---

## ⚠️ Compatibility Notes

| Regel | Begrunnelse |
|:-----|:----------|
| ✅ Må forbli utledet fra repo | Ingen manuell manifestering kreves |
| ✅ Nye valgfrie felt kan legges til | Fremoverkompatibilitet |
| ⚠️ Eksisterende felt må forbli stabile | Bakoverkompatibilitet |
| 🚫 Ingen håndskrevne manifester | Byggetidsavledning er kilden til sannhet |