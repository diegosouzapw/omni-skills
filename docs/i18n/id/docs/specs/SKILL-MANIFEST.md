# 📋 Skill Manifest Specification (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Manifes JSON yang dapat dibaca mesin yang dihasilkan dari setiap `SKILL.md` selama pipeline build — kontrak data tunggal yang digunakan oleh semua permukaan runtime.**---

## 📊 Status

| Fitur | Negara |
|:--------|:------|
| ✅ Dibuat secara otomatis dari SKILL.md | Diimplementasikan |
| ✅ Dikonsumsi oleh CLI, API, MCP, A2A | Diimplementasikan |
| ✅ Arsip dengan checksum | Diimplementasikan |
| ✅ Klasifikasi keamanan | Diimplementasikan |

>**Penting**: Manifesnya adalah**artefak build**. Penulis kontributor `SKILL.md` — pipeline memperoleh manifes JSON secara otomatis.---

## 🎯 Purpose

Manifes ada sehingga**semua permukaan runtime**menggunakan bentuk normal yang sama:

| Permukaan | Cara Penggunaannya Manifest |
|:--------|:---------------------|
| 🖥️**KLI**| Pencarian, perencanaan pemasangan, diagnosa dokter |
| 🌐**API**| Respons titik akhir, pemfilteran, tautan unduhan |
| 🔌**MCP**| Respons alat, konten sumber daya |
| 🤖**A2A**| Muatan penemuan dan rekomendasi |---

## 📁 Output Locations

| Artefak | Jalur |
|:---------|:-----|
| 📊 Metadata akar | `metadata.json` |
| 📊 Metadata per keterampilan | `keterampilan/<keterampilan>/metadata.json` |
| 📋 Indeks keterampilan | `keterampilan_index.json` |
| 📚 Katalog yang diterbitkan | `dist/catalog.json` |
| 📌 Manifes per keterampilan | `dist/manifests/<skill>.json` |
| 📦 Arsip zip | `dist/arsip/<keterampilan>.zip` |
| 📦 Arsip tarball | `dist/arsip/<keterampilan>.tar.gz` |
| 🔒 Manifes checksum | `dist/arsip/<keterampilan>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Bidang | Deskripsi |
|:------|:------------|
| `versi_skema` | Versi skema manifes |
| `id` | Pengidentifikasi keterampilan stabil dari bidang `nama` |
| `siput` | Siput direktori di bawah `skill/` |
| `nama_tampilan` | Judul yang dapat dibaca manusia dari judul pertama |### 📝 Metadata

| Bidang | Deskripsi |
|:------|:------------|
| `deskripsi` | Ringkasan singkat dari frontmatter |
| `versi` | Versi keterampilan, tidak bergantung pada versi paket npm |
| `kategori` | Kategori kanonik (dinormalisasi) |
| `kategori_mentah` | Kategori asli dari frontmatter |
| `taksonomi` | Metadata taksonomi lengkap dengan kesimpulan fallback |
| `tag` | Tag yang dapat dicari |
| `kompleksitas` | `pemula` · `menengah` · `lanjutan` · `ahli` |
| `risiko` | `aman` · `hati-hati` · `menyinggung` · `kritis` |
| `sumber` | `omni-tim` · `komunitas` · `resmi` |
| `penulis` | String atribusi |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Bidang | Deskripsi |
|:------|:------------|
| `titik masuk` | Jalur `SKILL.md` kanonik |
| `jalur.root` | Direktori keterampilan di dalam repo |
| `paths.manifest` | Jalur manifes yang dihasilkan di `dist/` |### 🖥️ Compatibility

| Bidang | Deskripsi |
|:------|:------------|
| `alat` | Pengidentifikasi alat dari frontmatter |
| `instal_target` | Metadata pemasangan per alat |

Setiap target instalasi meliputi: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Bidang | Deskripsi |
|:------|:------------|
| `sub_sumber daya` | Subdir keterampilan (`referensi`, `agen`, `aset`) |
| `jumlah_artefak` | Jumlah total file dalam paket keterampilan |
| `referensi_hitungan` | Jumlah dokumen referensi |
| `agen_hitungan` | Jumlah konfigurasi agen |
| `jumlah_aset` | Jumlah file aset |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Bidang | Deskripsi |
|:------|:------------|
| `strategi` | Instal strategi (misalnya, `salin-direktori-keterampilan`) |
| `pemasang_saat ini` | Perilaku instalasi yang dapat dibaca manusia |
| `resep` | Resep pemasangan per klien |### 📊 Classification

| Bagian | Bidang |
|:--------|:-------|
| 🎯 `kedewasaan` | `tingkat_keterampilan`, `label_tingkat_keterampilan` |
| 📋 `praktik_terbaik` | `skor` (0-100) |
| ⭐ `kualitas` | `skor` (0-100) |
| 🛡️ `keamanan` | `skor`, `status` |
| ✅ `validasi` | `status` |### 📝 Content

Sinyal yang diturunkan: `body_length`, `content_length`, `body_lines`, `word_count`, ditambah tanda struktural untuk contoh, bagian pemecahan masalah, dll.### 📁 Artifacts

Array dari setiap file yang dikirimkan ke dalam direktori keterampilan:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Jenis artefak**: `titik masuk` · `referensi` · `agen` · `aset` · `lisensi` · `dukungan`### 📦 Archives

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

| Bidang | Deskripsi |
|:------|:------------|
| `titik masuk_sha256` | Hash dari SKILL.md |
| `paket_sha256` | Intisari deterministik dari daftar artefak yang diurutkan |---

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

> 📌 Versi paket repositori dan versi keterampilan adalah masalah yang berbeda. Paketnya saat ini `0.1.3`, sedangkan keterampilan individu membawa versi semantiknya sendiri.---

## ⚠️ Compatibility Notes

| Aturan | Dasar Pemikiran |
|:-----|:----------|
| ✅ Harus tetap dapat diturunkan dari repo | Tidak diperlukan pembuatan manifes manual |
| ✅ Bidang opsional baru dapat ditambahkan | Kompatibilitas ke depan |
| ⚠️ Bidang yang ada harus tetap stabil | Kompatibilitas mundur |
| 🚫 Tidak ada manifes tulisan tangan | Derivasi waktu build adalah sumber kebenaran |