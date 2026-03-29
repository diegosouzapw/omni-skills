# 📊 Skill Classification and Metadata (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Pengklasifikasi lokal yang menilai setiap keterampilan selama validasi dan pembangunan, menghasilkan profil yang dapat dibaca mesin untuk seluruh katalog.**---

## 📊 Status

| Keluaran | Dihasilkan |
|:-------|:----------|
| ✅ Akar `metadata.json` | Ringkasan seluruh repositori |
| ✅ `skills/<skill>/metadata.json` per keterampilan | Klasifikasi individu |
| ✅ Katalog `dist/catalog.json` | Katalog yang diterbitkan dengan skor |
| ✅ Mewujudkan `dist/manifests/<skill>.json` | Data yang dapat dibaca mesin per keterampilan |

Dihasilkan oleh: `python3 tools/scripts/validate_skills.py`

Cuplikan repositori saat ini:

- 32 keterampilan yang diterbitkan
- skor kualitas rata-rata `96,3`
- rata-rata skor praktik terbaik `98,7`
- skor keamanan rata-rata `95.0`
- spread kualitas saat ini `94, 95, 96, 97, 100`
- praktik terbaik saat ini menyebar `98, 99, 100`---

## 🎯 Purpose

Pengklasifikasi memberikan setiap keterampilan**profil konsisten yang dapat dibaca mesin**sebelum mencapai katalog. Ia melakukan empat pekerjaan:

1. 📋**Parse**- materi depan dan isi penurunan harga YAML
2. 🏷️**Normalisasi**— Label kategori ke taksonomi kanonik
3. 📊**Klasifikasi**— Penilaian kedewasaan, praktik terbaik, kualitas, dan keamanan
4. 📁**Emit**— Artefak metadata yang digunakan oleh skrip build, dokumen, dan CI---

## 🏷️ Canonical Taxonomy

**18 kategori kanonik**dengan pemetaan alias otomatis:

| Kategori | Domain | Alias ​​Umum |
|:---------|:-------|:---------------|
| 💻 `pembangunan` | Pengembang perangkat lunak umum | `pengkodean`, `pemrograman` |
| 🎨 `bagian depan` | Bagian Depan & UI | `ui`, `desain web` |
| 🔧 `bagian belakang` | Backend & API | `server`, `api` |
| 🌐 `fullstack-web` | Web ujung ke ujung | `web`, `tumpukan penuh` |
| 🛠️ `alat` | Peralatan pengembang | `utilitas` |
| ⚙️ `otomatisasi klik` | CLI & otomatisasi | `skrip`, `alur kerja` |
| 📊 `bisnis` | Strategi bisnis | `strategi` |
| 📐 `produk` | Manajemen produk | `sore` |
| 🎯 `desain` | Desain visual & UX | `ux` |
| 🤖 `data-ai` | Aplikasi data & AI | `data`, `analitik` |
| 🧠 `agen-ai` | Pola agen AI | `agen` |
| 📈 `pembelajaran mesin` | Model & pelatihan ML | `ml` |
| 🔌 `pengembangan` | Infrastruktur | `infrastruktur`, `awan` |
| 🛡️ `pengujian-keamanan` | Pengujian & keamanan | `pengujian`, `keamanan`, `qa` |
| 📖 `dokumentasi` | Manajemen dokumen | `dokumen` |
| 🎬 `media konten` | Pembuatan konten | `media`, `konten` |
| 💬 `komunikasi` | Alat komunikasi | `obrolan` |
| ❓ `tidak dikategorikan` | Penggantian bawaan | — |

> Label lama seperti `alur kerja`, `arsitektur`, `infrastruktur` secara otomatis dinormalisasi melalui pemetaan alias.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Tingkat | Label | Kriteria |
|:------|:------|:---------|
|**L1**| `metadata` | Materi depan plus bodi minimal |
|**L2**| `instruksi` | Instruksi tertulis yang substansial |
|**L3**| `sumber daya` | Skrip yang dibundel atau sumber daya yang dikemas lebih kaya |

Sinyal tambahan yang dilacak: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

Heuristik mengevaluasi:

| Sinyal | Apa yang Diperiksa |
|:-------|:---------------|
| 📛 Kualitas siput | pemformatan bidang `nama` |
| 📝 Deskripsi | Kejelasan, panjang, keinformatifan |
| 📐 Struktur | Bagian dan hierarki dokumen |
| 💡 Contoh | Pagar kode dan contoh blok |
| 🔗 Referensi | `referensi/` lokal, `skrip/`, dan pembantu paket dukungan |
| 🧰 Pengoperasian | Contoh skrip lokal yang dapat dijalankan dan cuplikan alur kerja nyata |
| 🧩 Kedalaman paket dukungan | Berbagai kelompok dukungan, file yang dapat digunakan kembali, metadata agen, dan aset operasional |
| 🩺 Pemecahan Masalah | Pasangan `Gejala` dan `Solusi` yang eksplisit |
| 📚 Cakupan | Bagian `Kapan Menggunakan`, `Praktik Terbaik`, `Pemecahan Masalah`, dan `Sumber Daya Tambahan` |
| 🌐 Portabilitas | Kata-kata agnostik alat |
| 📅 Kesegaran | Penghindaran tanggal hardcode |

**Tingkatan saat ini**

| Tingkat | Rentang Skor |
|:-----|:-----------|
| `luar biasa` | 90-100 |
| `baik` | 70-89 |
| `adil` | 50-69 |
| `perlu pekerjaan` | 0-49 |

Pencetak gol sengaja**cukup semantik untuk menciptakan penyebaran**di seluruh keterampilan yang matang. Keterampilan dengan struktur yang bersih dapat memperoleh skor yang baik, tetapi untuk mencapai pita teratas juga memerlukan sinyal kedalaman seperti:

- banyak contoh, tidak hanya satu
- beberapa kasus pemecahan masalah
- bimbingan keterampilan terkait
- paket dukungan lokal yang lebih kaya
- lebih dari satu keluarga pendukung di luar prosa biasa, idealnya termasuk `agen/` atau `aset/` yang mana mereka menambahkan penggunaan kembali yang nyata
- bagian `## Alur Kerja` khusus dengan langkah-langkah yang dapat dihitung
- setidaknya satu tabel operasional kecil atau peta keputusan untuk meningkatkan kejelasan eksekusi
- lebih banyak kekhususan operasional daripada templat biasa
- kedalaman alur kerja dan aset pendukung keputusan yang lebih jelas
- kedalaman paket dukungan yang melampaui satu file `referensi/` dan satu skrip tertaut
- cukup banyak file dukungan yang dapat digunakan kembali agar terasa seperti kit alur kerja, bukan add-on satu catatan
- kepadatan operasional yang cukup untuk memisahkan garis besar yang dipoles dari kit alur kerja yang dapat digunakan kembali

Artinya, keterampilan yang lengkap secara struktural masih bisa berada di angka 90an, bukan `100` jika paket dukungannya lebih sedikit, aset keputusannya lebih sedikit, atau kepadatan operasionalnya lebih rendah daripada keterampilan terkuat dalam katalog.---

### ⭐ Quality Score (0-100)

Kombinasi heuristik:

| Sinyal | Berat |
|:-------|:-------|
| 📝 Kelengkapan tubuh | Sedang-tinggi |
| 📋 Deskripsi presisi | Sedang |
| 📊 Kelengkapan metadata | Sedang |
| 📅 Terkini (`tanggal_diperbarui`) | Sedang |
| 📦 Sumber daya yang dikemas | Sedang |
| 📋 Kontribusi praktik terbaik | Sedang |
| 🧠 Kedalaman semantik | Sedang-tinggi |
| 🛠️ Kedalaman operasional | Sedang |
| 📚 Kekayaan paket dukungan | Sedang |

**Tingkatan kualitas:**

| Tingkat | Rentang Skor |
|:-----|:-----------|
| 💎 `platinum` | 80+ |
| 🥇 `emas` | 65-79 |
| 🥈 `perak` | 50-64 |
| 🥉 `perunggu` | 35-49 |
| 🌱 `pemula` | 0-34 |---

### 🛡️ Security Score (0-100)

Lapisan keamanan menggabungkan:

| Pemindai | Selalu Diaktifkan | Apa Fungsinya |
|:--------|:---------------|:-------------|
| 🔍**Statis**| ✅ Ya | Memindai SKILL.md, file paket, dan skrip |
| 🦠**KerangAV**| ⚙️ Opsional | Pemindaian malware melalui `clamscan` |
| 🔒**Jumlah Virus**| ⚙️ Opsional | Pencarian hash (tidak ada unggahan) |

**Kelompok aturan pemindai statis:**
- 🎭 Pola injeksi dan eksfiltrasi yang cepat
- 💣 Perintah shell yang merusak
- 🔑 Jalur kredensial atau OS yang mencurigakan
- ⚠️ Primitif skrip berisiko (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Bentuk keluaran keamanan:**```json
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

| Bagian | Bidang |
|:--------|:-------|
| 🆔 Identitas | `id`, `siput`, `nama_tampilan` |
| 🏷️ Taksonomi | `kategori_mentah`, `kategori_kanonik`, `kategori_yang disimpulkan` |
| 📋 Penulisan | tag, alat, kompleksitas, risiko, sumber, penulis |
| 📅 Tanggal & jalur | `tanggal_tambahan`, `tanggal_diperbarui`, jalur |
| 📊 Sumber Daya | Penghitung file dan referensi |
| 📝 Sinyal konten | Jumlah kata, panjang badan, bendera struktural |
| 🧠 Kedalaman semantik | Langkah-langkah alur kerja, contoh, kedalaman pemecahan masalah, aset keputusan, rangkaian tautan dukungan |
| 🧩 Struktur paket pendukung | Jumlah file pendukung, keluarga tertaut, `agen/`, `aset/`, dan contoh yang dapat digunakan kembali |
| 🎯 Kedewasaan | Level, label, skrip/file bendera |
| 📋 Praktik terbaik | Skor dan tingkatan |
| ⭐ Kualitas | Skor, tingkatan, dan perincian semantik |
| 🛡️ Keamanan | Skor, tingkatan, status, temuan |
| ✅ Validasi | Status, kesalahan, peringatan |### Root (`metadata.json`)

| Bagian | Bidang |
|:--------|:-------|
| 📊 Ringkasan | Hitungan, rata-rata, distribusi kategori |
| 🏷️ Taksonomi | Jumlah kategori |
| 🎯 Distribusi | Tingkat keahlian, tingkat kualitas, tingkat keamanan |
| ✅ Validasi | Jumlah status |
| 📋 Daftar keterampilan | Ringkasan ringkas per keterampilan |---

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

Ini mengonfigurasi `git` untuk menggunakan `.githooks/pre-commit`, yang membuat ulang metadata dan artefak katalog sebelum melakukan dan menampilkan file yang dihasilkan secara otomatis.