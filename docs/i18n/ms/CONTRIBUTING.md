# 🤝 Contributing to Omni Skills (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills mengandungi katalog kemahiran dan permukaan masa jalan yang dibina di atas katalog itu.**
> Sumbangan boleh menyasarkan mana-mana kawasan, tetapi kedua-duanya mesti kekal sejajar dengan artifak yang dijana dan gelagat CLI semasa.---

## 📊 Repository Baseline

| Metrik | Nilai |
|:-------|:------|
| 📦 Versi pakej | `0.1.3` |
| 🧠 Kemahiran diterbitkan | `32` |
| 📦 Himpunan disokong penuh | `7` |
| 🖥️ Pelanggan berkemampuan memasang | `7` |
| 🔌 Pelanggan berkebolehan konfigurasi MCP | `16` |
| 🔄 Keluaran automatik | Didayakan pada `utama` |---

## Penting

| Apa | Di mana |
|:-----|:------|
| 🧠 Kemahiran dikarang dalam | `kemahiran/<nama-kemahiran>/KEMAHIRAN.md` |
| 📖 Templat dan panduan penyumbang | `docs/contributors/` |
| 🧾 Aliran PR kanonik untuk kemahiran baharu | [Aliran Kerja PR Kemahiran](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Kemahiran masuk asli mendarat di bawah | `kemahiran/` (sebarang bahasa) |
| ✨ Derivatif dipertingkat yang dipilih susun | `skills_omni/` (Bahasa Inggeris sahaja, automatik) |
| 🚫 `kemahiran_omni/` dilindungi | Tidak dibuka untuk sumbangan awam langsung |
| 📖 Dokumen masa jalan dan seni bina | `dokumen/` |
| 📄 Fail komuniti | `README.md` · `MENYUMBANG.md` · `KESELAMATAN.md` · `KOD_KELAKUAN.md` |---

## 🎯 Common Contribution Types

| Taip | Kawasan |
|:-----|:-----|
| 🧠 Tambah atau tingkatkan kemahiran | `kemahiran/` |
| 📖 Kemas kini panduan penyumbang | `docs/contributors/` |
| 🖥️ Tingkatkan CLI, pemasang atau skrip | `alat/` |
| 📦 Tingkatkan masa jalan katalog atau pakej protokol | `pakej/` |
| 🧪 Ketatkan ujian, pemeriksaan asap atau keluarkan dokumen | Pelbagai |---

## Mula Pantas

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

>**📝 Buka PR dengan `Benarkan suntingan daripada penyelenggara` didayakan.**---

## Dokumentasi

Kemahiran masuk asli yang baik harus:

- ✅ Menyelesaikan masalah tertentu dengan bersih
- ✅ Boleh diguna semula merentas projek
- ✅ Sertakan arahan yang boleh diikuti oleh ejen
- ✅ Elakkan kandungan yang tidak jelas atau berlebihan
- ✅ Isytiharkan bahagian hadapan yang tepat dan metadata keserasian apabila tersedia
- ✅ Tanah dengan artifak klasifikasi `metadata.json` yang dihasilkan selepas automasi dijalankan### 📁 Minimal Structure

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

>**💡 Petua:**Pek kemahiran gred keluaran hendaklah termasuk `ejen/`, `rujukan/`, `contoh/` dan `skrip/`. Tetapi permukaan pengambilan secara sengaja mengizinkan — kemahiran masuk asli yang minimum dibenarkan, dan saluran paip penambah menjana terbitan yang lebih kuat.### 🌐 Language Policy

| Permukaan | Bahasa yang Diterima |
|:--------|:--------------------|
| 📥 `kemahiran/` (pengambilan asli) | Portugis, Inggeris atau mana-mana bahasa |
| ✨ `kemahiran_omni/` (output dipilih susun) | Bahasa Inggeris sahaja |

> Penambah persendirian mengekalkan sumber asli seperti yang diserahkan dan menulis semula terbitan yang dipilih susun dalam bahasa Inggeris.

📖 Untuk jujukan cawangan penuh, pengesahan dan semakan penambah, gunakan [Aliran Kerja PR Kemahiran](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Jalankan ini sebelum membuka PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<butiran>
<summary>📋 <strong>Apa yang <code>npm run validate</code> regenerate</strong></summary>

- `metadata.json`
- `kemahiran/<kemahiran>/metadata.json`
- Pemetaan taksonomi kanonik
- Kematangan, amalan terbaik, kualiti dan markah keselamatan
- Penemuan keselamatan statik
- Status pengimbas ClamAV dan VirusTotal pilihan (apabila dikonfigurasikan)</details>

>**⚠️ Penting:**Pengesahan ialah kontrak yang digunakan oleh CLI, API, MCP, A2A, manifes, arkib dan automasi keluaran. Anggap metadata yang dijana sebagai sebahagian daripada permukaan semakan, bukan keluaran pakai buang.### 📥 Intake Policy

| Keadaan | Tingkah laku |
|:----------|:---------|
| Bahagian hadapan tiada/tidak lengkap | ⚠️ Amaran (tidak menyekat) |
| Penemuan keselamatan kritikal | 🚫 Sekat pengambilan |
| Ralat pengesahan keras | 🚫 Sekat pengambilan |
| Standard editorial yang lebih ketat | Dikuatkuasakan dalam aliran terbitan dipertingkat, bukan pada pengambilan asli |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<butiran>
<ringkasan>📋 <strong>Apa yang disahkan oleh pas asap</strong></ringkasan>

- ✅ Pengesahan kemahiran
- ✅ Penjanaan katalog
- ✅ Penjanaan katalog dokumen
- ✅ Suite ujian
- ✅ `pek npm --dry-run`
- ✅ But API
- ✅ But MCP dalam `stdio`, `strim` dan `sse`
- ✅ But A2A
- ✅ Pengesahan arkib dan jangkaan pembungkusan</details>

---

## 📋 Skill Frontmatter

Frontmatter amat disyorkan. Gunakan [Templat Kemahiran](docs/contributors/SKILL-TEMPLATE.md) sebagai garis dasar.```yaml
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

<butiran>
<ringkasan>🏷️ <strong>Kategori taksonomi kanonik</strong></ringkasan>

| Kategori | Kategori |
|:---------|:---------|
| `pembangunan` | `depan` |
| `belakang` | `fullstack-web` |
| `alat` | `cli-automasi` |
| `perniagaan` | `produk` |
| `reka bentuk` | `data-ai` |
| `ai-ejen` | `pembelajaran mesin` |
| `devops` | `ujian-keselamatan` |
| `dokumentasi` | `media-kandungan` |
| `komunikasi` | `tidak dikategorikan` |</details>

>**ℹ️**Versi kemahiran adalah bebas daripada versi pakej npm. Jika kemahiran masuk asli belum mempunyai frontmatter, ia akan diterima dengan amaran dan memperoleh metadata sementara daripada direktori, tajuk dan teks kandungan.---

## ⚙️ Runtime Contributions

Jika anda menyentuh `packages/`, `tools/bin/`, `tools/lib/`, atau bina skrip:

- 📦 Pastikan `dist/` dan dokumen sejajar dengan pelaksanaan
- 🔄 Lebih suka menggunakan semula `pakej/teras katalog` daripada menduplikasi logik katalog
- 🔒 Kekalkan tingkah laku tulis tempatan di belakang pratonton atau lalai larian kering
- 🔌 Pastikan penulis MCP berdisiplin — hanya tambahkan penulis konfigurasi kelas pertama apabila pelanggan mempunyai kontrak konfigurasi awam yang stabil
- 🛡️ Rawat amaran pengimbas keselamatan sebagai sebahagian daripada bar semakan
- 🧪 Kemas kini ujian apabila menukar arahan CLI, mod pengangkutan atau titik akhir awam### 🚧 Important Boundary

| Lakukan ini ✅ | Jangan buat begini 🚫 |
|:-----------|:-----------------|
| Hantar karya asli di bawah `kemahiran/` | Buka PR manual yang mengedit `skills_omni/` |
| Biarkan automasi mengendalikan kerja penambah | Tambahkan kandungan dipilih susun secara langsung |
| Fokus pada kualiti kemahiran yang sah | Pintas aliran PR pendamping automatik |

>**ℹ️**Apabila kemahiran asli dalam `kemahiran/` dikemas kini, penambah peribadi memprosesnya semula dan menyegarkan garis dasar yang dipertingkatkan.---

## 🔄 Enhancer Outcome States

Semasa PR kemahiran asli awam, penambah melaporkan satu daripada empat keadaan:

| Negeri | Maksudnya |
|:------|:--------|
| ✅ `selesai` | Derivatif dipertingkat yang dijana dengan bersih, layak untuk `skills_omni/` |
| ⚠️ `terdegradasi` | Dilengkapi dengan sandaran atau pergerakan skor yang lebih lemah — periksa dengan lebih teliti |
| 🚫 `disekat` | Dihentikan atas sebab infrastruktur atau pengesahan — menghalang penerbitan automatik |
| ❌ `gagal` | Ralat tidak dijangka — memerlukan penyiasatan penyelenggara |

>**📝 Penyumbang**tidak perlu menyelesaikan isu infrastruktur penambah. Tanggungjawabnya adalah untuk menyerahkan kemahiran asli yang sah dan memastikan repo hijau.---

## 🔄 Automatic Release Policy

Apabila perubahan tiba di `utama` dan termasuk:

- `kemahiran/**`
- `kemahiran_omni/**`
- `data/bundles.json`

…repositori mengeluarkan**keluaran pakej secara automatik**.### 📋 Version Bump Rule

| Daripada | Kepada | Peraturan |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Tampalan +1 |
| `0.1.9` | `0.1.10` | Tampalan +1 |
| `0.1.10` | `0.2.0` | Gulung ke bawah umur seterusnya, tetapkan semula tampung |

> Aliran keluaran menjana semula katalog/arkib, melakukan bonjolan versi, menandai keluaran, menerbitkan npm dan mencipta keluaran GitHub secara automatik.---

## 📝 Commit Conventions

| Awalan | Gunakan Untuk |
|:-------|:--------|
| `feat:` | Kemahiran atau ciri baharu |
| `baiki:` | Pembetulan pepijat |
| `dokumen:` | Perubahan dokumentasi |
| `refactor:` | Pembersihan kod atau perubahan struktur |
| `ujian:` | Perubahan ujian |
| `tugas:` | Penyelenggaraan |---

## ❓ Need Help?

| Saluran | Pautan |
|:--------|:-----|
| 💬 Soalan | [Buka Perbincangan](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Pepijat | [Buka Isu](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Maklum balas awal | [Buka Draf PR](https://github.com/diegosouzapw/omni-skills/pulls) |