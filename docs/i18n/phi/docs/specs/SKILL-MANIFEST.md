# 📋 Skill Manifest Specification (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Ang nababasa ng machine na JSON manifest na nabuo mula sa bawat `SKILL.md` sa panahon ng build pipeline — ang nag-iisang kontrata ng data na ginagamit ng lahat ng runtime surface.**---

## 📊 Status

| Tampok | Estado |
|:--------|:------|
| ✅ Awtomatikong nabuo mula sa SKILL.md | Ipinatupad |
| ✅ Nakonsumo ng CLI, API, MCP, A2A | Ipinatupad |
| ✅ Mga archive na may mga checksum | Ipinatupad |
| ✅ Pag-uuri ng seguridad | Ipinatupad |

>**Mahalaga**: Ang manifest ay isang**build artifact**. May-akda ng Contributor na `SKILL.md` — awtomatikong nakukuha ng pipeline ang JSON manifest.---

## 🎯 Purpose

Umiiral ang manifest upang ang**lahat ng runtime surface**ay gumagamit ng parehong normalized na hugis:

| Ibabaw | Paano Ito Gumagamit ng Mga Manipesto |
|:--------|:---------------------|
| 🖥️**CLI**| Maghanap, mag-install ng pagpaplano, diagnostic ng doktor |
| 🌐**API**| Mga tugon sa endpoint, pag-filter, mga link sa pag-download |
| 🔌**MCP**| Mga tugon sa tool, mga nilalaman ng mapagkukunan |
| 🤖**A2A**| Mga payload ng pagtuklas at rekomendasyon |---

## 📁 Output Locations

| Artifact | Landas |
|:---------|:-----|
| 📊 Root metadata | `metadata.json` |
| 📊 Per-skill metadata | `skills/<skill>/metadata.json` |
| 📋 Index ng mga kasanayan | `skills_index.json` |
| 📚 Nai-publish na catalog | `dist/catalog.json` |
| 📌 Per-skill manifest | `dist/manifests/<skill>.json` |
| 📦 Zip archive | `dist/archives/<skill>.zip` |
| 📦 Tarball archive | `dist/archives/<skill>.tar.gz` |
| 🔒 Checksum manifest | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Patlang | Paglalarawan |
|:------|:------------|
| `schema_version` | Bersyon ng manifest schema |
| `id` | Stable na skill identifier mula sa field na `pangalan` |
| `slug` | Directory slug sa ilalim ng `kasanayan/` |
| `display_name` | Nababasa ng tao na pamagat mula sa unang heading |### 📝 Metadata

| Patlang | Paglalarawan |
|:------|:------------|
| `paglalarawan` | Maikling buod mula sa frontmatter |
| `bersyon` | Bersyon ng kasanayan, hiwalay sa bersyon ng npm package |
| `kategorya` | Canonical na kategorya (na-normalize) |
| `raw_category` | Orihinal na kategorya mula sa frontmatter |
| `taxonomy` | Buong taxonomy metadata na may hinuha na fallback |
| `mga tag` | Mga nahahanap na tag |
| `kumplikado` | `beginner` · `intermediate` · `advanced` · `expert` |
| `panganib` | `ligtas` · `pag-iingat` · `nakakasakit` · `kritikal` |
| `pinagmulan` | `omni-team` · `komunidad` · `opisyal` |
| `may-akda` | String ng pagpapatungkol |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Patlang | Paglalarawan |
|:------|:------------|
| `entrypoint` | Canonical `SKILL.md` path |
| `paths.root` | Direktoryo ng kasanayan sa loob ng repo |
| `paths.manifest` | Nakabuo ng manifest path sa `dist/` |### 🖥️ Compatibility

| Patlang | Paglalarawan |
|:------|:------------|
| `mga kasangkapan` | Mga tool identifier mula sa frontmatter |
| `install_targets` | Metadata sa pag-install ng bawat tool |

Kasama sa bawat target sa pag-install ang: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Patlang | Paglalarawan |
|:------|:------------|
| `sub_resources` | Mga subdir ng kasanayan (`mga sanggunian`, `mga ahente`, `mga asset`) |
| `bilang_artifacts` | Kabuuang bilang ng file sa skill package |
| `references_count` | Bilang ng doc ng sanggunian |
| `bilang_mga_gent` | Bilang ng config ng ahente |
| `bilang_asset` | Bilang ng file ng asset |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Patlang | Paglalarawan |
|:------|:------------|
| `diskarte` | Diskarte sa pag-install (hal., `copy-skill-directory`) |
| `current_installer` | Nababasa ng tao ang gawi sa pag-install |
| `mga recipe` | Mga recipe ng pag-install ng bawat kliyente |### 📊 Classification

| Seksyon | Mga Patlang |
|:--------|:-------|
| 🎯 `maturity` | `skill_level`, `skill_level_label` |
| 📋 `best_practices` | `iskor` (0-100) |
| ⭐ `kalidad` | `iskor` (0-100) |
| 🛡️ `seguridad` | `score`, `status` |
| ✅ `pagpapatunay` | `status` |### 📝 Content

Mga hinangong signal: `body_length`, `content_length`, `body_lines`, `word_count`, kasama ang mga structural flag para sa mga halimbawa, mga seksyon ng pag-troubleshoot, atbp.### 📁 Artifacts

Array ng bawat file na ipinadala sa loob ng direktoryo ng kasanayan:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Mga uri ng artifact**: `entrypoint` · `reference` · `agent` · `asset` · `license` · `support`### 📦 Archives

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

| Patlang | Paglalarawan |
|:------|:------------|
| `entrypoint_sha256` | Hash ng SKILL.md |
| `package_sha256` | Deterministic digest mula sa order na listahan ng artifact |---

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

> 📌 Iba't ibang alalahanin ang bersyon ng pakete ng repository at bersyon ng kasanayan. Ang package ay kasalukuyang `0.1.3`, habang ang mga indibidwal na kasanayan ay may sariling mga semantic na bersyon.---

## ⚠️ Compatibility Notes

| Panuntunan | Katuwiran |
|:-----|:----------|
| ✅ Dapat manatiling derivable mula sa repo | Walang kinakailangang manual manifest authoring |
| ✅ Maaaring magdagdag ng mga bagong opsyonal na field | Forward compatibility |
| ⚠️ Dapat manatiling stable ang mga kasalukuyang field | Paatras na compatibility |
| 🚫 Walang handwritten manifests | Ang Build-time derivation ay ang pinagmulan ng katotohanan |