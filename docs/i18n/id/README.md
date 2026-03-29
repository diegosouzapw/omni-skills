# 🧠 Omni Skills (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Katalog keterampilan yang terpasang sendiri.**<br/>
CLI · API · MCP · A2A — semuanya dari satu perintah `npx`.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Instal dalam 1 menit](#-installation) · [🛠️ Pilih alat Anda](#-choose-your-tool) · [📖 CLI Guide](docs/users/CLI-USER-GUIDE.md) · [📦 Bundel](docs/users/BUNDLES.md) · [🔌 Runtime](#-runtime-surfaces) · [💡 Why Omni Keterampilan](#-mengapa-keterampilan-omni)</div>

---

<div align="center">

### Ikhtisar

</div>

| | Metrik | Nilai |
|:--|:-------|:------|
| 📦 |**Keterampilan yang Diterbitkan**| `32` di 15 kategori aktif |
| 🎯 |**Paket**| `7` bundel kurasi yang didukung penuh |
| 🖥️ |**Instal Klien**| `7` asisten pengkodean AI yang mampu menginstal |
| 🔌 |**Klien MCP**| `16` Klien berkemampuan konfigurasi MCP |
| 🔐 |**Keluaran Pilihan**| `32` turunan bahasa Inggris yang disempurnakan di `skills_omni/` |
| 📋 |**Rilis Saat Ini**| `v0.1.2` |---

## Mulai Cepat

>**Mencari keterampilan pengkodean AI, keterampilan Kode Claude, keterampilan Kursor, keterampilan Codex CLI, keterampilan Gemini CLI, keterampilan Antigravitasi, atau perpustakaan `SKILL.md` yang dapat diinstal?**
> Anda berada di tempat yang tepat.### 1️⃣ What is this?

Omni Skills adalah**katalog keterampilan dan runtime**yang dapat diinstal untuk asisten pengkodean AI. Pada intinya, ini adalah repositori publik dari buku pedoman `SKILL.md` yang dapat digunakan kembali — namun tidak seperti kumpulan keterampilan biasa, repo**adalah**lapisan distribusi dan runtime.

<detail>
<summary>📋 <strong>Apa yang disertakan</strong></summary>

| Komponen | Deskripsi |
|:----------|:-----------|
| 🧠**Keterampilan**| Buku pedoman berbasis `SKILL.md` yang dikurasi untuk asisten AI |
| 📦**Manifes**| Manifes, bundel, dan arsip JSON yang dihasilkan |
| 🧭**Instalasi Terpandu**| TTY interaktif dan alur pemasangan terminal visual |
| 🌐**API Katalog**| API HTTP hanya baca untuk penelusuran, penemuan, dan pengunduhan |
| 🔌**Server MCP**| Peralatan penemuan, rekomendasi, dan konfigurasi yang sadar klien |
| 🤖**Waktu Proses A2A**| Orkestrasi tugas agen-ke-agen |
| ✨**Jalur Peningkatan**| Peningkat swasta menerbitkan turunan bahasa Inggris yang dikurasi ke dalam `skills_omni/` |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Gunakan `@brainstorming` untuk merencanakan MVP SaaS."*
>
> 💬 *"Gunakan `@api-design` untuk meninjau desain titik akhir ini."*
>
> 💬 *"Gunakan `@debugging` untuk mengisolasi regresi ini."*### 5️⃣ Start with a bundle

| 🎯 Sasaran | Paket | Perintah |
|:---------|:-------|:--------|
| Teknik umum | `penting` | `npx omni-skill --bundel penting` |
| Pengiriman produk + aplikasi | `tumpukan penuh` | `npx keterampilan omni --bundel tumpukan penuh` |
| Sistem desain | `desain` | `npx omni-skill --desain bundel` |
| Tinjauan keamanan | `keamanan` | `npx omni-skill --keamanan bundel` |
| Infra dan rilis | `pengembangan` | `npx omni-skill --bundle devops` |
| Aplikasi LLM | `ai-insinyur` | `npx keterampilan omni --bundle ai-engineer` |
| pemeliharaan OSS | `pemelihara oss` | `npx omni-skill --bundle oss-maintainer` |---

## 🧩 Core Concepts

Sebelum membandingkan paket atau memilih jalur pemasangan, memahami lima blok penyusun ini akan membantu:

| Konsep | Artinya |
|:--------|:-------------|
| 🧠**Keterampilan**| Buku pedoman `SKILL.md` yang dapat digunakan kembali yang mengajarkan asisten cara menjalankan alur kerja dengan baik |
| 📦**Artefak Katalog**| Menghasilkan JSON dan keluaran arsip yang memungkinkan pencarian, perbandingan, pengunduhan, dan pemasangan |
| 🔌**Konfigurasi MCP**| Konfigurasi sisi klien bagi asisten untuk menemukan Keterampilan Omni melalui alat MCP |
| 🤖**Waktu Proses A2A**| Orkestrasi agen-ke-agen untuk penemuan, rekomendasi, dan penyerahan rencana pemasangan |
| ✨**Keluaran Pilihan**| `skills_omni/` — permukaan yang ditingkatkan yang dipertahankan oleh Omni, terpisah dari asupan hulu asli |

>**📝 Kebijakan Asli/Kurasi:**
> - `skill/` menerima masukan hulu asli dalam bahasa apa pun
> - `skills_omni/` selalu dikurasi dan diterbitkan dalam bahasa Inggris
> - `skills_omni/` adalah permukaan satu arah dan tidak kembali ke masukan asli---

## 💡 Why Omni Skills

>**Bukan hanya "repositori lain dengan keterampilan dalam folder."**
> Omni Skills memiliki kontrak yang lebih kuat dan runtime yang lebih luas.

| Jika Anda ingin… | 📁 Repo keterampilan khas | ✨ Keterampilan Omni |
|:-------------|:----------------------|:--------------|
| Instal menjadi asisten nyata | Salinan manual atau skrip khusus | `npx omni-skills`, instalasi terpandu, UI visual, `--skill` selektif dan `--bundle` |
| Cari dan bandingkan keterampilan | Telusuri penurunan harga secara manual | Katalog yang dihasilkan, pemfilteran, perencanaan bundel, pencarian, perbandingan, dan rekomendasi |
| Gunakan data yang sama di seluruh alat | Pisahkan logika per alat | Manifes dan katalog bersama untuk CLI, API, MCP, dan A2A |
| Konfigurasikan klien MCP | File edit tangan | `config-mcp`, pratinjau sidecar lokal, resep yang dihasilkan, dan penulisan yang diizinkan |
| Rilis kepercayaan | Pengemasan dengan upaya terbaik | Checksum, arsip yang ditandatangani, verifikasi pemindai, rilis CI, dan publikasikan preflight |
| Kurator asupan komunitas | Apapun tanahnya tetap apa adanya | Asupan asli dalam `skill/`, turunan bahasa Inggris yang dikurasi dalam `skills_omni/` dengan atribusi |---

## 🖥️ Compatibility and Invocation

Keterampilan ini mengikuti model `SKILL.md` dan dapat digunakan sebagai repositori normal, namun paket ini juga menginstal dan mengonfigurasinya di seluruh permukaan yang luas:

>**7**klien berkemampuan instalasi ·**16**klien berkemampuan konfigurasi MCP### 🎯 Install-Capable Clients

| Alat | Ketik | Contoh Doa | Instal Jalur |
|:-----|:-----|:-------------------|:-------------|
| 🟢**Kode Claude**| CLI | `Gunakan curah pendapat untuk merencanakan fitur` | `~/.claude/skills` |
| 🔵**Kursor**| IDE | `@brainstorming bantu saya merencanakan fitur` | `~/.cursor/skills` |
| 🟡**KLI Gemini**| CLI | `Gunakan curah pendapat untuk merencanakan fitur` | `~/.gemini/skills` |
| 🔴**Kodeks CLI**| CLI | `Gunakan curah pendapat untuk merencanakan fitur` | `~/.codex/skills` |
| 🟠**Kiro**| CLI/IDE | `Gunakan curah pendapat untuk merencanakan fitur` | `~/.kiro/skills` |
| 🟣**Antigravitasi**| IDE | `Gunakan @brainstorming untuk merencanakan fitur` | `~/.gemini/antigravity/skills` |
| ⚪**Kode Terbuka**| CLI | `opencode jalankan @brainstorming` | `<ruang kerja>/.opencode/skills` |

<detail>
<summary>🔌 <strong>Cakupan Konfigurasi MCP yang Lebih Luas (16 klien)</strong></summary>

Target berikut adalah bagian dari permukaan konfigurasi MCP yang didukung, meskipun target tersebut bukan target pemasangan untuk direktori keterampilan:

| Klien atau Permukaan | Jenis Dukungan | Catatan |
|:------------------|:------------|:------|
| Pengaturan Claude dan desktop | Konfigurasi MCP | Setelan, desktop, dan alur sadar proyek |
| Kode VS | Konfigurasi MCP | Target pengguna, ruang kerja, orang dalam, dan Kontainer Pengembang |
| kembar | Konfigurasi MCP | Pengaturan pengguna dan ruang kerja |
| Klinik | Konfigurasi MCP | Target konfigurasi kelas satu |
| CLI Kopilot GitHub | Konfigurasi MCP | Target konfigurasi pengguna dan repo |
| Lanjutkan | Konfigurasi MCP | Generasi YAML ruang kerja |
| selancar angin | Konfigurasi MCP | Target konfigurasi pengguna |
| Zed | Konfigurasi MCP | Target konfigurasi ruang kerja |
| Angsa | Konfigurasi MCP | Target konfigurasi pengguna dengan resep yang dihasilkan |
| Kode Kilo | Konfigurasi MCP | Target pengguna, proyek, dan ruang kerja |
| Juni | Konfigurasi MCP | Target konfigurasi proyek dan pengguna |</details>

---

## Instal

<tabel>
<tr>
<td lebar="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Alat | Instal Perintah | Penggunaan Pertama |
|:-----|:---------------|:----------|
| 🟢 Kode Claude | `npx keterampilan omni --claude` | `Gunakan curah pendapat untuk merencanakan fitur` |
| 🔵 Kursor | `npx keterampilan omni --kursor` | `@brainstorming bantu saya merencanakan fitur` |
| 🟡 Gemini CLI | `npx keterampilan omni --gemini` | `Gunakan curah pendapat untuk merencanakan fitur` |
| 🔴 Kodeks CLI | `npx keterampilan omni --codex` | `Gunakan curah pendapat untuk merencanakan fitur` |
| 🟣 Antigravitasi | `npx keterampilan omni --antigravitasi` *(default)* | `Gunakan @brainstorming untuk merencanakan fitur` |
| 🟠 Kiro | `npx keterampilan omni --kiro` | `Gunakan curah pendapat untuk merencanakan fitur` |
| ⚪ Kode Terbuka | `npx keterampilan omni --opencode` | `opencode jalankan @brainstorming` |
| 📂 Jalur khusus | `npx omni-skills --path ./my-skills` | Tergantung pada alat Anda |

> 📖**Tidak yakin harus mulai dari mana?**
> - [🚀 Memulai](docs/users/GETTING-STARTED.md) — instal dan verifikasi dalam waktu kurang dari 2 menit
> - [🧭 Panduan Pengguna CLI](docs/users/CLI-USER-GUIDE.md) — referensi perintah lengkap
> - [📗 Panduan Penggunaan](docs/users/USAGE.md) — perintah, pola, dan mode runtime---

## 🔌 Runtime Surfaces

Omni Skills bukan hanya perpustakaan keterampilan. Ini memperlihatkan**empat permukaan runtime**yang menggunakan katalog yang dihasilkan sama:

| Permukaan | Negara | Apa fungsinya | Contoh |
|:--------|:------|:-------------|:--------|
| 🖥️**KLI**| ✅ Tersedia | Temukan, instal, diagnosis, UI visual, layanan boot, pemeriksaan asap | `npx dokter keterampilan omni` |
| 🌐**API Katalog**| ✅ Tersedia | Katalog hanya-baca, pencarian, bundel, bandingkan, instal paket, unduh | `npx omni-skill api --port 3333` |
| 🔌**MCP**| ✅ Tersedia | Penemuan, rekomendasi, pratinjau pemasangan, sespan lokal, alur konfigurasi | `npx aliran mcp keterampilan omni --lokal` |
| 🤖**A2A**| ✅ Tersedia | Siklus hidup tugas, penyerahan, polling, streaming, pembatalan, persistensi | `npx keterampilan omni a2a --port 3335` |

<detail>
<ringkasan>🖥️ <strong>Perintah shell visual dan operator</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<detail>
<summary>🔌 <strong>Transportasi dan konfigurasi MCP</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Metrik | Hitung |
|:-------|:------|
| 🧠 Keterampilan yang dipublikasikan |**32**|
| 📂 Kategori aktif |**15**|
| 📦 Paket yang didukung penuh |**7**|
| ✨ Turunan yang dikurasi |**32**di `skills_omni/` |### 📦 Bundle Availability

| Paket | Keterampilan | Anggota |
|:-------|:-------|:--------|
| 🧰 `penting` |**4/4**✅ | `temukan-keterampilan` · `brainstorming` · `arsitektur` · `debugging` |
| 🌐 `tumpukan penuh` |**5/5**✅ | `desain-frontend` · `desain-api` · `desain-database` · `omni-figma` · `arus autentikasi` |
| 🎨 `desain` |**5/5**✅ | `desain-frontend` · `omni-figma` · `operasi-sistem-desain` · `audit aksesibilitas` · `tata kelola token-desain` |
| 🛡️ `keamanan` |**4/4**✅ | `auditor-keamanan` · `pemindai kerentanan` · `respon-insiden` · `pemodelan ancaman` |
| ⚙️ `pengembangan` |**5/5**✅ | `buruh pelabuhan-ahli` · `kubernetes` · `terraform` · `tinjauan-observabilitas` · `rekayasa rilis` |
| 🤖 `ai-insinyur` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracts` · `model-serving` |
| 🔧 `pemelihara oss` |**4/4**✅ | `temukan-keterampilan` · `buat-pr` · `log perubahan` · `dokumentasi` |### ✨ Native Intake → Curated Output

| Permukaan | Tujuan | Bahasa |
|:--------|:--------|:---------|
| 📥 `keterampilan/` | Asupan asli | Bahasa apa pun |
| ✨ `skill_omni/` | Output yang dikelola Omni yang dikurasi | Selalu Bahasa Inggris |

>**ℹ️**Perubahan pada keterampilan asli diproses ulang oleh penambah pribadi dan disegarkan dalam garis dasar yang dikurasi. Hal ini menjadikan `skills_omni/` sebagai**permukaan katalog yang dipelihara**, bukan salinan kedua.---

## 🛡️ Security and Release Posture

> Omni Skills menghadirkan kisah rilis dan verifikasi yang lebih kuat dibandingkan repositori penurunan harga biasa.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<detail>
<summary>📋 <strong>Apa yang divalidasi oleh pipeline</strong></summary>

- ✅ Validasi keterampilan dan pembuatan metadata
- ✅ Alat normalisasi taksonomi dan kategorisasi ulang
- ✅ Pembuatan katalog dan arsip
- ✅ Tes otomatis
- ✅ Jalur boot API, MCP, dan A2A
- ✅ Verifikasi arsip
- ✅ Paket preflight dengan `npm pack --dry-run`</details>

<detail>
<ringkasan>🔐 <strong>Lepaskan postur</strong></summary>

| Kontrol | Deskripsi |
|:--------|:-----------|
| 🔒 Checksum SHA-256 | Manifes checksum untuk semua arsip |
| ✍️ Artefak bertanda | Tanda tangan terpisah pada artefak rilis |
| 🤖 Diberlakukan CI | Rilis verifikasi di CI sebelum dipublikasikan |
| 🦠 Gerbang pemindai | Alur rilis ClamAV dan VirusTotal-gated |
| 📦 Rilis GitHub | Pembuatan Rilis GitHub Otomatis |
| 📋 publikasi npm | Hanya dari tarball terverifikasi |
| 🔄 Rilis otomatis | Pada keterampilan kualifikasi bergabung menjadi `utama` |

**Rilis otomatis terpicu hanya ketika penggabungan berubah:**
- `keterampilan/*/**`
- `keterampilan_omni/*/**`
- `data/bundel.json`

Perubahan khusus dokumen**tidak**memicu publikasi paket.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Dok | Apa yang Akan Anda Pelajari |
|:----|:-----------------|
| 🚀 [Memulai](docs/users/GETTING-STARTED.md) | Instal, verifikasi, dan aktifkan dalam waktu kurang dari 2 menit |
| 🧭 [Panduan Pengguna CLI](docs/users/CLI-USER-GUIDE.md) | Referensi perintah lengkap dan pola dunia nyata |
| 📗 [Panduan Penggunaan](docs/users/USAGE.md) | Perintah CLI, mode instalasi, runtime, dan konfigurasi MCP |
| 📦 [Paket](docs/users/BUNDLES.md) | Paket dan ketersediaan yang dikurasi |
| 📚 [Katalog](docs/CATALOG.md) | Katalog keterampilan yang diterbitkan secara otomatis |
| 🔧 [Sistem Runbook](docs/operations/RUNBOOK.md) | Bangun, layani, amankan, dan pecahkan masalah |### 🏗️ For Architects

| Dok | Apa yang Akan Anda Pelajari |
|:----|:-----------------|
| 🗺️ [Peta Jalan Agen-Native](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Evolusi arsitektur dan area yang tersisa |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Keputusan inti monorepo |
| 🔬 [Analisis Basis Kode](docs/architecture/CODEBASE-ANALYSIS.md) | Komposisi runtime dan batasan sistem |
| 🌐 [API Katalog](docs/specs/CATALOG-API.md) | Titik akhir HTTP, pemfilteran, tata kelola, dan unduhan |
| 🧩 [Pemasang yang Dipandu CLI](docs/specs/CLI-GUIDED-INSTALLER.md) | Kontrak perilaku untuk pemasang yang dipandu |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Shell visual tinta dan model status |
| 🔌 [Sespan MCP Lokal](docs/specs/LOCAL-MCP-SIDECAR.md) | Alat sistem file dan model daftar yang diizinkan |
| 📊 [Matriks Dukungan Klien](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Referensi klien dan penulis lengkap |
| 🏷️ [Klasifikasi Keterampilan](docs/specs/SKILL-CLASSIFICATION.md) | Taksonomi, penilaian, dan metadata |
| 🛡️ [Validasi Keamanan](docs/specs/SECURITY-VALIDATION.md) | Pemindai, arsip, dan tanda tangan |
| 📋 [Manifes Keterampilan](docs/specs/SKILL-MANIFEST.md) | Format manifes yang dapat dibaca mesin |### 🤝 For Contributors

| Dok | Apa yang Akan Anda Pelajari |
|:----|:-----------------|
| 📝 [Panduan Berkontribusi](CONTRIBUTING.md) | Alur kerja repo dan ekspektasi PR |
| 🧾 [Alur Kerja PR Keterampilan](docs/contributors/SKILL-PR-WORKFLOW.md) | Asupan asli, pemrosesan penambah, ekspektasi pengulas |
| 📄 [Template Keterampilan](docs/contributors/SKILL-TEMPLATE.md) | Mulai `SKILL.md` dengan materi depan dan struktur |
| 🔬 [Anatomi Keterampilan](docs/contributors/SKILL-ANATOMY.md) | Struktur dan harapan kualitas |
| ✅ [Bilah Kualitas](docs/contributors/QUALITY-BAR.md) | Kriteria penerimaan |
| 🏆 [Playbook Skor Tinggi](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Apa yang mendorong skor tinggi |---

## 🗂️ Repository Layout

| Jalur | Tujuan |
|:-----|:--------|
| 📂 `keterampilan/` | Keterampilan penulisan kanonik dan asupan asli |
| ✨ `skill_omni/` | Turunan yang disempurnakan yang dikelola Omni |
| 📖 `dokumen/` | Dokumentasi pengguna, kontributor, arsitektur, operasi, dan spesifikasi |
| 📦 `dist/` | Manifes, bundel, katalog, dan arsip yang dihasilkan |
| 📁 `data/` | Definisi bundel dan data pendukung statis |
| 🧠 `paket/inti-katalog/` | Waktu proses katalog bersama |
| 🌐 `paket/server-api/` | API HTTP hanya-baca |
| 🔌 `paket/server-mcp/` | Server MCP dan sespan lokal |
| 🤖 `paket/server-a2a/` | Waktu proses A2A dan orkestrasi tugas |
| 🖥️ `alat/tempat sampah/` | Titik masuk CLI |
| 📚 `alat/lib/` | Pemasang dan pembantu UI |
| ⚙️ `alat/skrip/` | Skrip validasi, pembuatan, rilis, dan pengujian |

>**ℹ️**`dist/` sengaja dibuat versinya karena artefak yang dihasilkan adalah bagian dari kontrak pemasangan, API, MCP, A2A, smoke, dan rilis.---

## 🤝 Contributing

Omni Skills menerima asupan keterampilan hulu asli di bawah `keterampilan/`.

| Aturan | Detail |
|:-----|:--------|
| 📥 Asupan asli | Mungkin kasar, ditulis dalam bahasa apa pun |
| ✨ Keluaran yang dikurasi | `skills_omni/` dicadangkan untuk turunan Omni yang dibuat oleh otomatisasi |
| 🚫 Pengeditan manual | Pengeditan manual publik pada `skills_omni/` ditolak |
| 🔄 Memproses ulang | Penyempurna pribadi memproses ulang perubahan asli dan menyegarkan garis dasar yang dikurasi |

> 📖**Mulai dengan:**[Panduan Berkontribusi](CONTRIBUTING.md) · [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Ketik | Lisensi |
|:-----|:--------|
| 💻 Kode dan perkakas | [Lisensi MIT](LISENSI) |
| 📝 Dokumentasi dan konten keterampilan | [CC BY 4.0](ISI LISENSI) |---

<div align="center">

**Dibuat dengan 🧠 oleh Tim Keterampilan Omni**

[⭐ Bintangi repo ini](https://github.com/diegosouzapw/omni-skills) · [🐛 Laporkan bug](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Diskusi](https://github.com/diegosouzapw/omni-skills/discussions)</div>
