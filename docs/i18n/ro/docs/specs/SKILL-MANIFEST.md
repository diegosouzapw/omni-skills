# 📋 Skill Manifest Specification (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Manifestul JSON care poate fi citit de mașină generat din fiecare `SKILL.md` în timpul conductei de construire — contractul unic de date consumat de toate suprafețele de rulare.**---

## 📊 Status

| Caracteristica | Stat |
|:--------|:------|
| ✅ Generat automat de la SKILL.md | Implementat |
| ✅ Consumat de CLI, API, MCP, A2A | Implementat |
| ✅ Arhive cu sume de control | Implementat |
| ✅Clasificare de securitate | Implementat |

>**Important**: manifestul este un**artefact de construcție**. Autorul colaboratorilor `SKILL.md` — pipeline derivă automat manifestul JSON.---

## 🎯 Purpose

Manifestul există astfel încât**toate suprafețele de rulare**consumă aceeași formă normalizată:

| Suprafata | Cum folosește manifestele |
|:--------|:----------------------|
| 🖥️**CLI**| Cautare, planificare instalatii, diagnosticare medic |
| 🌐**API**| Răspunsuri la punctul final, filtrare, legături de descărcare |
| 🔌**MCP**| Răspunsurile instrumentului, conținutul resurselor |
| 🤖**A2A**| Sarcini utile de descoperire și recomandare |---

## 📁 Output Locations

| Artefact | Calea |
|:---------|:-----|
| 📊 Metadatele rădăcină | `metadata.json` |
| 📊 Metadate pe abilitate | `skills/<skill>/metadata.json` |
| 📋 Indexul de aptitudini | `skills_index.json` |
| 📚 Catalog publicat | `dist/catalog.json` |
| 📌 Manifest per abilitate | `dist/manifests/<skill>.json` |
| 📦 Arhivă zip | `dist/archives/<skill>.zip` |
| 📦 Arhiva Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Manifestul sumei de control | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Câmp | Descriere |
|:------|:-------------|
| `versiune_schemă` | Versiunea schemei manifest |
| `id` | Identificator stabil de abilitate din câmpul „nume” |
| `melc` | Director slug sub `skills/` |
| `nume_afisat` | Titlu care poate fi citit de om din primul titlu |### 📝 Metadata

| Câmp | Descriere |
|:------|:-------------|
| `descriere` | Scurt rezumat din frontmatter |
| `versiune` | Versiunea Skill, independentă de versiunea pachetului npm |
| `categorie` | Categoria canonică (normalizată) |
| `categorie_brută` | Categoria originală din frontmatter |
| `taxonomie` | Metadate taxonomie complete cu rezervă dedusă |
| `etichete` | Etichete care pot fi căutate |
| `complexitate` | `începător` · `intermediar` · `avansat` · `expert` |
| `risc` | `sigur` · `atenție` · `ofensiv` · `critic` |
| `sursa` | `omni-echipă` · `comunitate` · `oficial` |
| `autor` | Șir de atribuire |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Câmp | Descriere |
|:------|:-------------|
| `punct de intrare` | Calea canonică `SKILL.md` |
| `paths.root` | Directorul de aptitudini în interiorul depozitului |
| `cărări.manifest` | Cale manifest generată în `dist/` |### 🖥️ Compatibility

| Câmp | Descriere |
|:------|:-------------|
| `instrumente` | Identificatori de instrumente din frontmatter |
| `install_targets` | Metadate de instalare per instrument |

Fiecare țintă de instalare include: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Câmp | Descriere |
|:------|:-------------|
| `sub_resurse` | Subdir-uri de aptitudini (`referințe`, `agenți`, `activi`) |
| `număr_artefacte` | Număr total de fișiere în pachetul de abilități |
| `număr_referințe` | Număr de documente de referință |
| `număr_agenți` | Număr de config. agent |
| `număr_active` | Număr de fișiere de active |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Câmp | Descriere |
|:------|:-------------|
| `strategie` | Strategia de instalare (de exemplu, `copy-skill-directory`) |
| `current_installer` | Comportament de instalare care poate fi citit de om |
| `retete` | Rețete de instalare per client |### 📊 Classification

| Sectiunea | Câmpuri |
|:--------|:-------|
| 🎯 `maturitate` | `skill_level`, `skill_level_label` |
| 📋 `bune_practices` | `scor` (0-100) |
| ⭐ `calitate` | `scor` (0-100) |
| 🛡️ `securitate` | `scor`, `starea` |
| ✅ `validare` | `starea` |### 📝 Content

Semnale derivate: `body_length`, `content_length`, `body_lines`, `word_count`, plus semnalizatoare structurale pentru exemple, secțiuni de depanare etc.### 📁 Artifacts

Matrice pentru fiecare fișier livrat în directorul de abilități:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Tipuri de artefacte**: `punct de intrare` · `referință` · `agent` · `activ` · `licență` · `suport`### 📦 Archives

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

| Câmp | Descriere |
|:------|:-------------|
| `entrypoint_sha256` | Hash de SKILL.md |
| `pachet_sha256` | Rezumat determinist din lista ordonată de artefacte |---

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

> 📌 Versiunea pachetului de depozit și versiunea abilităților sunt preocupări diferite. Pachetul este în prezent `0.1.3`, în timp ce abilitățile individuale au propriile versiuni semantice.---

## ⚠️ Compatibility Notes

| Regula | Motivație |
|:-----|:----------|
| ✅ Trebuie să rămână derivabil din repo | Nu este necesară crearea manuală a manifestului |
| ✅ Pot fi adăugate noi câmpuri opționale | Compatibilitate directă |
| ⚠️ Câmpurile existente trebuie să rămână stabile | Compatibilitate inversă |
| 🚫 Fără manifeste scrise de mână | Derivarea în timpul construirii este sursa adevărului |