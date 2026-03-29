# 📋 Skill Manifest Specification (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Manifes JSON yang boleh dibaca mesin yang dijana daripada setiap `SKILL.md` semasa saluran paip binaan — kontrak data tunggal yang digunakan oleh semua permukaan masa jalan.**---

## 📊 Status

| Ciri | Negeri |
|:--------|:------|
| ✅ Dijana secara automatik daripada SKILL.md | Dilaksanakan |
| ✅ Dimakan oleh CLI, API, MCP, A2A | Dilaksanakan |
| ✅ Arkib dengan jumlah semak | Dilaksanakan |
| ✅ Klasifikasi keselamatan | Dilaksanakan |

>**Penting**: Manifes ialah**artifak binaan**. Pengarang penyumbang `SKILL.md` — saluran paip memperoleh manifes JSON secara automatik.---

## 🎯 Purpose

Manifes wujud supaya**semua permukaan masa jalan**menggunakan bentuk ternormal yang sama:

| Permukaan | Bagaimana Ia Menggunakan Manifes |
|:--------|:---------------------|
| 🖥️**CLI**| Cari, pasang perancangan, diagnostik doktor |
| 🌐**API**| Respons titik akhir, penapisan, pautan muat turun |
| 🔌**MCP**| Respons alat, kandungan sumber |
| 🤖**A2A**| Muatan penemuan dan cadangan |---

## 📁 Output Locations

| Artifak | Laluan |
|:---------|:-----|
| 📊 Metadata akar | `metadata.json` |
| 📊 Metadata setiap kemahiran | `kemahiran/<kemahiran>/metadata.json` |
| 📋 Indeks kemahiran | `indeks_kemahiran.json` |
| 📚 Katalog yang diterbitkan | `dist/catalog.json` |
| 📌 Manifes setiap kemahiran | `dist/manifests/<skill>.json` |
| 📦 Zip arkib | `dist/archives/<skill>.zip` |
| 📦 Arkib Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Manifes jumlah semak | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Medan | Penerangan |
|:------|:------------|
| `versi_skema` | Versi skema manifes |
| `id` | Pengecam kemahiran stabil daripada medan `nama` |
| `slug` | Slug direktori di bawah `kemahiran/` |
| `nama_paparan` | Tajuk boleh dibaca manusia dari tajuk pertama |### 📝 Metadata

| Medan | Penerangan |
|:------|:------------|
| `penerangan` | Ringkasan ringkas dari frontmatter |
| `versi` | Versi kemahiran, bebas daripada versi pakej npm |
| `kategori` | Kategori kanonik (dinormalkan) |
| `kategori_mentah` | Kategori asal dari frontmatter |
| `taksonomi` | Metadata taksonomi penuh dengan sandaran kesimpulan |
| `tag` | Tag boleh dicari |
| `kerumitan` | `pemula` · `pertengahan` · `maju` · `pakar` |
| `risiko` | `selamat` · `berhati-hati` · `menyinggung` · `kritikal` |
| `sumber` | `omni-team` · `community` · `official` |
| `pengarang` | Rentetan atribusi |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Medan | Penerangan |
|:------|:------------|
| `titik masuk` | Laluan `SKILL.md` kanonik |
| `paths.root` | Direktori kemahiran di dalam repo |
| `paths.manifest` | Laluan manifes dijana dalam `dist/` |### 🖥️ Compatibility

| Medan | Penerangan |
|:------|:------------|
| `alat` | Pengecam alat daripada frontmatter |
| `sasaran_pasang` | Metadata pemasangan setiap alat |

Setiap sasaran pemasangan termasuk: `alat`, `skop`, `laluan_lalai`, `bendera_pemasang`, `kelakuan_pemasang_semasa`, `seruan`### 📦 Resources

| Medan | Penerangan |
|:------|:------------|
| `sub_sumber` | Subdir kemahiran (`rujukan`, `ejen`, `aset`) |
| `bilangan_artifak` | Jumlah kiraan fail dalam pakej kemahiran |
| `bilangan_rujukan` | Kiraan dokumen rujukan |
| `bilangan_ejen` | Kiraan konfigurasi ejen |
| `bilangan_aset` | Kiraan fail aset |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Medan | Penerangan |
|:------|:------------|
| `strategi` | Strategi pemasangan (cth., `copy-skill-directory`) |
| `pemasang_semasa` | Tingkah laku pemasangan boleh dibaca manusia |
| `resipi` | Resipi pemasangan setiap pelanggan |### 📊 Classification

| Bahagian | Medan |
|:--------|:-------|
| 🎯 `kematangan` | `peringkat_kemahiran`, `label_peringkat_kemahiran` |
| 📋 `amalan_terbaik` | `skor` (0-100) |
| ⭐ `berkualiti` | `skor` (0-100) |
| 🛡️ `keselamatan` | `skor`, `status` |
| ✅ `pengesahan` | `status` |### 📝 Content

Isyarat terbitan: `body_length`, `content_length`, `body_lines`, `word_count`, serta bendera struktur untuk contoh, bahagian penyelesaian masalah, dsb.### 📁 Artifacts

Tatasusunan setiap fail yang dihantar di dalam direktori kemahiran:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Jenis artifak**: `titik masuk` · `rujukan` · `ejen` · `aset` · `lesen` · `sokongan`### 📦 Archives

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

| Medan | Penerangan |
|:------|:------------|
| `titik masuk_sha256` | Hash of SKILL.md |
| `pakej_sha256` | Digest deterministik daripada senarai artifak yang dipesan |---

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

> 📌 Versi pakej repositori dan versi kemahiran adalah kebimbangan yang berbeza. Pakej pada masa ini adalah `0.1.3`, manakala kemahiran individu membawa versi semantik mereka sendiri.---

## ⚠️ Compatibility Notes

| Peraturan | Rasional |
|:-----|:----------|
| ✅ Mesti kekal boleh terbit daripada repo | Tiada pengarangan manifes manual diperlukan |
| ✅ Medan pilihan baharu boleh ditambah | Keserasian ke hadapan |
| ⚠️ Medan sedia ada mesti kekal stabil | Keserasian ke belakang |
| 🚫 Tiada manifes tulisan tangan | Derivasi masa binaan ialah sumber kebenaran |