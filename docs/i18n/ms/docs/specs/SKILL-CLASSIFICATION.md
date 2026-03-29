# 📊 Skill Classification and Metadata (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Pengelas tempatan yang menjaringkan setiap kemahiran semasa pengesahan dan membina, menjana profil yang boleh dibaca mesin untuk keseluruhan katalog.**---

## 📊 Status

| Output | Dijana |
|:-------|:----------|
| ✅ Root `metadata.json` | Ringkasan seluruh repositori |
| ✅ `kemahiran/<kemahiran>/metadata.json` setiap kemahiran | Klasifikasi individu |
| ✅ Katalog `dist/catalog.json` | Katalog yang diterbitkan dengan markah |
| ✅ Manifes `dist/manifests/<skill>.json` | Data boleh dibaca mesin setiap kemahiran |

Dijana oleh: `python3 tools/scripts/validate_skills.py`

petikan repositori semasa:

- 32 kemahiran diterbitkan
- purata skor kualiti `96.3`
- purata skor amalan terbaik `98.7`
- purata skor keselamatan `95.0`
- sebaran kualiti semasa `94, 95, 96, 97, 100`
- penyebaran amalan terbaik semasa `98, 99, 100`---

## 🎯 Purpose

Pengelas memberikan setiap kemahiran**profil boleh dibaca mesin yang konsisten**sebelum ia mencapai katalog. Ia melaksanakan empat kerja:

1. 📋**Parse**— YAML frontmatter dan markdown body
2. 🏷️**Normalkan**— Kategori label kepada taksonomi kanonik
3. 📊**Kelaskan**— Kematangan, amalan terbaik, kualiti dan pemarkahan keselamatan
4. 📁**Emit**— Artifak metadata yang digunakan oleh skrip binaan, dokumen dan CI---

## 🏷️ Canonical Taxonomy

**18 kategori kanonik**dengan pemetaan alias automatik:

| Kategori | Domain | Alias ​​Biasa |
|:---------|:-------|:----------------|
| 💻 `pembangunan` | Pembangun perisian am | `pengekodan`, `pengaturcaraan` |
| 🎨 `depan` | Bahagian Hadapan & UI | `ui`, `reka bentuk web` |
| 🔧 `hujung belakang` | Bahagian Belakang & API | `pelayan`, `api` |
| 🌐 `fullstack-web` | Web hujung ke hujung | `web`, `full-stack` |
| 🛠️ `alat` | Alat pembangun | `utiliti` |
| ⚙️ `cli-automation` | CLI & automasi | `skrip`, `aliran kerja` |
| 📊 `perniagaan` | Strategi perniagaan | `strategi` |
| 📐 `produk` | Pengurusan produk | `pm` |
| 🎯 `rekaan` | Reka bentuk visual & UX | `ux` |
| 🤖 `data-ai` | Apl Data & AI | `data`, `analitik` |
| 🧠 `ai-agen` | Corak ejen AI | `ejen` |
| 📈 `pembelajaran mesin` | Model & latihan ML | `ml` |
| 🔌 `devops` | Infrastruktur | `infrastruktur`, `awan` |
| 🛡️ `ujian-keselamatan` | Ujian & keselamatan | `ujian`, `keselamatan`, `qa` |
| 📖 `dokumentasi` | Pengurusan dokumen | `dokumen` |
| 🎬 `media-kandungan` | Penciptaan kandungan | `media`, `kandungan` |
| 💬 `komunikasi` | Alat komunikasi | `sembang` |
| ❓ `tidak dikategorikan` | Undur lalai | — |

> Label warisan seperti `aliran kerja`, `seni bina`, `infrastruktur` dinormalisasi secara automatik melalui pemetaan alias.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Tahap | Label | Kriteria |
|:------|:------|:---------|
|**L1**| `metadata` | Frontmatter ditambah badan minimum |
|**L2**| `arahan` | Arahan bertulis yang penting |
|**L3**| `sumber` | Skrip terhimpun atau sumber berpakej yang lebih kaya |

Isyarat tambahan dijejaki: `mempunyai_skrip`, `mempunyai_fail_tambahan`---

### 📋 Best Practices Score (0-100)

Heuristik menilai:

| Isyarat | Perkara yang Disemak |
|:-------|:----------------|
| 📛 Kualiti slug | pemformatan medan `nama` |
| 📝 Penerangan | Kejelasan, panjang, bermaklumat |
| 📐 Struktur | Bahagian dokumen dan hierarki |
| 💡 Contoh | Pagar kod dan blok contoh |
| 🔗 Rujukan | `rujukan/` tempatan yang dipautkan, `skrip/` dan pembantu pek sokongan |
| 🧰 Kebolehoperasian | Contoh skrip tempatan boleh dijalankan dan coretan aliran kerja konkrit |
| 🧩 Kedalaman pek sokongan | Keluarga sokongan berbilang, fail boleh guna semula, metadata ejen dan aset operasi |
| 🩺 Menyelesaikan masalah | Pasangan `Gejala` dan `Penyelesaian` eksplisit |
| 📚 Liputan | Bahagian `Bila Penggunaan`, `Amalan Terbaik`, `Penyelesaian Masalah` dan `Sumber Tambahan` |
| 🌐 Mudah alih | Perkataan alat-agnostik |
| 📅 Kesegaran | Mengelakkan tarikh berkod keras |

**Tiering semasa**

| Peringkat | Julat Skor |
|:-----|:-----------|
| `cemerlang` | 90-100 |
| `baik` | 70-89 |
| `adil` | 50-69 |
| `perlu-kerja` | 0-49 |

Penjaring itu sengaja**cukup semantik untuk mencipta penyebaran**merentas kemahiran matang. Kemahiran dengan struktur bersih boleh mendapat markah yang baik, tetapi untuk mencapai jalur teratas ia juga memerlukan isyarat kedalaman seperti:

- beberapa contoh, bukan hanya satu
- berbilang kes penyelesaian masalah
- bimbingan kemahiran berkaitan
- pek sokongan tempatan yang lebih kaya
- lebih daripada satu keluarga sokongan melebihi prosa biasa, idealnya termasuk `ejen/` atau `aset/` di mana mereka menambah penggunaan semula sebenar
- bahagian `## Aliran Kerja` khusus dengan langkah yang boleh dikira
- sekurang-kurangnya satu jadual operasi kecil atau peta keputusan apabila ia meningkatkan kejelasan pelaksanaan
- lebih kekhususan operasi daripada templat biasa
- kedalaman aliran kerja yang lebih jelas dan aset sokongan keputusan
- kedalaman pek sokongan yang melangkaui satu fail `rujukan/` dan satu skrip terpaut
- fail sokongan boleh guna semula yang mencukupi untuk berasa seperti kit aliran kerja, bukan tambahan satu nota
- ketumpatan operasi yang mencukupi untuk memisahkan garis besar yang digilap daripada kit aliran kerja boleh guna semula

Ini bermakna kemahiran yang lengkap dari segi struktur masih boleh mendarat pada tahun 90-an tinggi dan bukannya `100` jika pek sokongannya lebih sempit, aset keputusannya lebih nipis atau ketumpatan operasinya lebih rendah daripada kemahiran terkuat dalam katalog.---

### ⭐ Quality Score (0-100)

Heuristik menggabungkan:

| Isyarat | Berat |
|:-------|:-------|
| 📝 Kesempurnaan badan | Sederhana tinggi |
| 📋 Ketepatan penerangan | Sederhana |
| 📊 Kelengkapan metadata | Sederhana |
| 📅 Kebaharuan (`tarikh_kemas kini`) | Sederhana |
| 📦 Sumber yang dibungkus | Sederhana |
| 📋 Sumbangan amalan terbaik | Sederhana |
| 🧠 Kedalaman semantik | Sederhana tinggi |
| 🛠️ Kedalaman operasi | Sederhana |
| 📚 Kekayaan pek sokongan | Sederhana |

**Tingkat kualiti:**

| Peringkat | Julat Skor |
|:-----|:-----------|
| 💎 `platinum` | 80+ |
| 🥇 `emas` | 65-79 |
| 🥈 `perak` | 50-64 |
| 🥉 `gangsa` | 35-49 |
| 🌱 `pemula` | 0-34 |---

### 🛡️ Security Score (0-100)

Lapisan keselamatan menggabungkan:

| Pengimbas | Sentiasa Didayakan | Apa yang Dilakukan |
|:--------|:----------------|:--------------|
| 🔍**Statik**| ✅ Ya | Mengimbas SKILL.md, fail berpakej dan skrip |
| 🦠**ClamAV**| ⚙️ Pilihan | Pengimbasan perisian hasad melalui `clamscan` |
| 🔒**VirusTotal**| ⚙️ Pilihan | Carian cincang (tiada muat naik) |

**Keluarga peraturan pengimbas statik:**
- 🎭 Corak suntikan dan penyusutan segera
- 💣 Arahan shell yang merosakkan
- 🔑 Bukti kelayakan atau laluan OS yang mencurigakan
- ⚠️ Primitif skrip berisiko (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Bentuk keluaran keselamatan:**```json
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

| Bahagian | Medan |
|:--------|:-------|
| 🆔 Identiti | `id`, `slug`, `nama_paparan` |
| 🏷️ Taksonomi | `raw_category`, `canonical_category`, `inferred_category` |
| 📋 Mengarang | tag, alatan, kerumitan, risiko, sumber, pengarang |
| 📅 Tarikh & laluan | `tarikh_tambah`, `tarikh_kemas kini`, laluan |
| 📊 Sumber | Fail dan kaunter rujukan |
| 📝 Isyarat kandungan | Bilangan perkataan, panjang badan, bendera struktur |
| 🧠 Kedalaman semantik | Langkah aliran kerja, contoh, kedalaman penyelesaian masalah, aset keputusan, keluarga pautan sokongan |
| 🧩 Struktur pek sokongan | Kiraan fail sokongan, keluarga terpaut, `ejen/`, `aset/` dan contoh boleh guna semula |
| 🎯 Kematangan | Tahap, label, skrip/fail bendera |
| 📋 Amalan terbaik | Skor dan peringkat |
| ⭐ Kualiti | Pecahan skor, peringkat dan semantik |
| 🛡️ Keselamatan | Skor, peringkat, status, penemuan |
| ✅ Pengesahan | Status, ralat, amaran |### Root (`metadata.json`)

| Bahagian | Medan |
|:--------|:-------|
| 📊 Ringkasan | Kiraan, purata, taburan kategori |
| 🏷️ Taksonomi | Kiraan kategori |
| 🎯 Pengedaran | Tahap kemahiran, tahap kualiti, tahap keselamatan |
| ✅ Pengesahan | Kiraan status |
| 📋 Senarai kemahiran | Ringkasan padat setiap kemahiran |---

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

Ini mengkonfigurasi `git` untuk menggunakan `.githooks/pre-commit`, yang menjana semula metadata dan artifak katalog sebelum komit dan peringkat fail yang dijana secara automatik.