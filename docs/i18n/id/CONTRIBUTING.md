# 🤝 Contributing to Omni Skills (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills berisi katalog keterampilan dan permukaan runtime yang dibangun di atas katalog tersebut.**
> Kontribusi dapat menargetkan salah satu area, namun keduanya harus tetap selaras dengan artefak yang dihasilkan dan perilaku CLI saat ini.---

## 📊 Repository Baseline

| Metrik | Nilai |
|:-------|:------|
| 📦 Versi paket | `0.1.3` |
| 🧠 Keterampilan yang dipublikasikan | `32` |
| 📦 Paket yang didukung penuh | `7` |
| 🖥️ Klien yang mampu menginstal | `7` |
| 🔌 Klien berkemampuan konfigurasi MCP | `16` |
| 🔄 Rilis otomatis | Diaktifkan di `utama` |---

## Penting

| Apa | Dimana |
|:-----|:------|
| 🧠 Keterampilan ditulis dalam | `keterampilan/<nama-keterampilan>/SKILL.md` |
| 📖 Templat dan panduan kontributor | `dokumen/kontributor/` |
| 🧾 Alur PR kanonik untuk keterampilan baru | [Alur Kerja PR Keterampilan](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Keterampilan asli yang masuk berada di bawah | `keterampilan/` (bahasa apa pun) |
| ✨ Turunan yang disempurnakan | `skills_omni/` (Hanya bahasa Inggris, otomatis) |
| 🚫 `skills_omni/` dilindungi | Tidak terbuka untuk kontribusi publik langsung |
| 📖 Dokumen runtime dan arsitektur | `dokumen/` |
| 📄 File komunitas | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Ketik | Daerah |
|:-----|:-----|
| 🧠 Menambah atau meningkatkan keterampilan | `keterampilan/` |
| 📖 Perbarui panduan kontributor | `dokumen/kontributor/` |
| 🖥️ Tingkatkan CLI, penginstal, atau skrip | `alat/` |
| 📦 Tingkatkan runtime katalog atau paket protokol | `paket/` |
| 🧪 Perketat pengujian, pemeriksaan asap, atau rilis dokumen | Berbagai |---

## Mulai Cepat

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Buka PR dengan `Izinkan pengeditan dari pengelola` diaktifkan.**---

## Dokumentasi

Keterampilan masuk asli yang baik harus:

- ✅ Selesaikan masalah tertentu dengan bersih
- ✅ Dapat digunakan kembali di seluruh proyek
- ✅ Sertakan instruksi yang benar-benar dapat diikuti oleh agen
- ✅ Hindari konten yang tidak jelas atau berlebihan
- ✅ Deklarasikan metadata frontmatter dan kompatibilitas yang akurat bila tersedia
- ✅ Mendarat dengan artefak klasifikasi `metadata.json` yang dihasilkan setelah otomatisasi berjalan### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Tips:**Paket keterampilan tingkat rilis harus mencakup `agen/`, `referensi/`, `contoh/`, dan `skrip/`. Namun permukaan saluran masuk sengaja dibuat permisif — keterampilan masuk asli minimal diperbolehkan, dan saluran penambah menghasilkan turunan yang lebih kuat.### 🌐 Language Policy

| Permukaan | Bahasa yang Diterima |
|:--------|:-------------------|
| 📥 `keterampilan/` (asupan asli) | Portugis, Inggris, atau bahasa apa pun |
| ✨ `skills_omni/` (keluaran yang dikurasi) | Hanya dalam bahasa Inggris |

> Penyempurna swasta mempertahankan sumber asli seperti yang dikirimkan dan menulis ulang turunan yang dikurasi dalam bahasa Inggris.

📖 Untuk rangkaian lengkap pencabangan, validasi, dan tinjauan penyempurnaan, gunakan [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Jalankan ini sebelum membuka PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<detail>
<summary>📋 <strong>Apa yang dihasilkan oleh <code>npm run validasi</code></strong></summary>

- `metadata.json`
- `keterampilan/<keterampilan>/metadata.json`
- Pemetaan taksonomi kanonik
- Skor kedewasaan, praktik terbaik, kualitas, dan keamanan
- Temuan keamanan statis
- Status pemindai ClamAV dan VirusTotal opsional (bila dikonfigurasi)</details>

>**⚠️ Penting:**Validasi adalah kontrak yang digunakan oleh CLI, API, MCP, A2A, manifes, arsip, dan otomatisasi rilis. Perlakukan metadata yang dihasilkan sebagai bagian dari permukaan tinjauan, bukan keluaran yang dapat dibuang.### 📥 Intake Policy

| Kondisi | Perilaku |
|:----------|:---------|
| Bagian depan tidak ada/tidak lengkap | ⚠️ Peringatan (tidak menghalangi) |
| Temuan keamanan penting | 🚫 Blokir asupan |
| Kesalahan validasi sulit | 🚫 Blokir asupan |
| Standar editorial yang lebih ketat | Diberlakukan pada aliran turunan yang disempurnakan, bukan pada asupan asli |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<detail>
<summary>📋 <strong>Apa yang divalidasi oleh smoke pass</strong></summary>

- ✅ Validasi keterampilan
- ✅ Pembuatan katalog
- ✅ Pembuatan katalog Dokumen
- ✅ Rangkaian tes
- ✅ `paket npm --dry-run`
- ✅ booting API
- ✅ Boot MCP di `stdio`, `stream`, dan `sse`
- ✅ Sepatu bot A2A
- ✅ Verifikasi arsip dan ekspektasi pengemasan</details>

---

## 📋 Skill Frontmatter

Frontmatter sangat disarankan. Gunakan [Templat Keterampilan](docs/contributors/SKILL-TEMPLATE.md) sebagai dasar.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<detail>
<ringkasan>🏷️ <strong>Kategori taksonomi kanonik</strong></summary>

| Kategori | Kategori |
|:---------|:---------|
| `pembangunan` | `depan` |
| `bagian belakang` | `fullstack-web` |
| `alat` | `otomatisasi-cli` |
| `bisnis` | `produk` |
| `desain` | `data-ai` |
| `agen-ai` | `pembelajaran mesin` |
| `pengembangan` | `pengujian-keamanan` |
| `dokumentasi` | `media-konten` |
| `komunikasi` | `tidak dikategorikan` |</details>

>**ℹ️**Versi keterampilan tidak bergantung pada versi paket npm. Jika keterampilan asli yang masuk belum memiliki materi depan, keterampilan tersebut akan diterima dengan peringatan dan mendapatkan metadata sementara dari direktori, judul, dan teks isi.---

## ⚙️ Runtime Contributions

Jika Anda menyentuh `packages/`, `tools/bin/`, `tools/lib/`, atau skrip build:

- 📦 Jaga agar `dist/` dan dokumen tetap selaras dengan implementasi
- 🔄 Lebih suka menggunakan kembali `paket/inti katalog` daripada menduplikasi logika katalog
- 🔒 Pertahankan perilaku penulisan lokal di balik pratinjau atau default uji coba
- 🔌 Jaga kedisiplinan penulis MCP — hanya tambahkan penulis konfigurasi kelas satu ketika klien memiliki kontrak konfigurasi publik yang stabil
- 🛡️ Perlakukan peringatan pemindai keamanan sebagai bagian dari bilah tinjauan
- 🧪 Perbarui pengujian saat mengubah perintah CLI, mode transportasi, atau titik akhir publik### 🚧 Important Boundary

| Lakukan ini ✅ | Jangan lakukan ini 🚫 |
|:-----------|:-----------------|
| Kirimkan karya asli di bawah `skill/` | Buka PR manual yang mengedit `skills_omni/` |
| Biarkan otomatisasi menangani proses penambah | Tambahkan konten yang dikurasi secara langsung |
| Fokus pada kualitas keterampilan yang sah | Lewati alur PR pendamping otomatis |

>**ℹ️**Saat keterampilan asli di `keterampilan/` diperbarui, penambah pribadi akan memprosesnya ulang dan menyegarkan garis dasar yang ditingkatkan.---

## 🔄 Enhancer Outcome States

Selama PR keterampilan asli publik, penambah melaporkan satu dari empat keadaan:

| Negara | Arti |
|:------|:--------|
| ✅ `selesai` | Turunan yang disempurnakan dihasilkan dengan rapi, memenuhi syarat untuk `skills_omni/` |
| ⚠️ `terdegradasi` | Diselesaikan dengan fallback atau pergerakan skor yang lebih lemah — periksa lebih cermat |
| 🚫 `diblokir` | Berhenti karena alasan infrastruktur atau validasi — mencegah publikasi otomatis |
| ❌ `gagal` | Kesalahan tak terduga — memerlukan penyelidikan pengelola |

>**📝 Kontributor**tidak perlu memperbaiki masalah infrastruktur pendukung. Tanggung jawabnya adalah mengirimkan keterampilan asli yang sah dan menjaga repo tetap ramah lingkungan.---

## 🔄 Automatic Release Policy

Saat perubahan terjadi di `utama` dan mencakup:

- `keterampilan/**`
- `keterampilan_omni/**`
- `data/bundel.json`

…repositori mengeluarkan**rilis paket secara otomatis**.### 📋 Version Bump Rule

| Dari | Ke | Aturan |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Tambalan +1 |
| `0.1.9` | `0.1.10` | Tambalan +1 |
| `0.1.10` | `0.2.0` | Gulir ke minor berikutnya, setel ulang patch |

> Alur rilis membuat ulang katalog/arsip, menerapkan perubahan versi, memberi tag pada rilis, menerbitkan npm, dan membuat rilis GitHub secara otomatis.---

## 📝 Commit Conventions

| Awalan | Gunakan Untuk |
|:-------|:--------|
| `prestasi:` | Keterampilan atau fitur baru |
| `memperbaiki:` | Perbaikan bug |
| `dokumen:` | Perubahan dokumentasi |
| `pemfaktoran ulang:` | Pembersihan kode atau perubahan struktur |
| `tes:` | Perubahan pengujian |
| `tugas:` | Pemeliharaan |---

## ❓ Need Help?

| Saluran | Tautan |
|:--------|:-----|
| 💬 Pertanyaan | [Buka Diskusi](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Serangga | [Buka Masalah](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Umpan balik awal | [Buka Draf PR](https://github.com/diegosouzapw/omni-skills/pulls) |