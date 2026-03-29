# 📖 Omni Skills — Documentation Hub (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Referensi utama untuk menggunakan, mengoperasikan, memperluas, dan memahami platform Omni Skills saat ini.**

File komunitas standar berada di root repositori:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| Daerah | Negara | Detail |
|:-----|:------|:--------|
| 🏗️**Waktu berjalan**| ✅ Saat ini | CLI terpadu, shell visual tinta, API, MCP, dan A2A semuanya dikirimkan dari paket yang sama |
| 📦**Katalog**| 📌 32 keterampilan | 32 keterampilan `L3` yang diterbitkan di 15 kategori katalog aktif dan 7 bundel yang didukung penuh |
| 🎯**Instal**| ✅ Saat ini | Pemasangan TTY yang dipandu, `--skill` dan `--bundle` selektif, dukungan jalur khusus, dan pemasangan berdasarkan penemuan |
| 🌐**API**| ✅ Saat ini | API registri hanya-baca dengan autentikasi, runtime admin, pembatasan laju, daftar izin CORS/IP, mode pemeliharaan, dan unduhan |
| 🔌**MCP**| ✅ Saat ini | `stdio` · `stream` · `sse`, mode sidecar lokal, 7 klien berkemampuan instalasi, 16 klien berkemampuan konfigurasi, 33 target konfigurasi, dan 19 profil konfigurasi |
| 🤖**A2A**| ✅ Saat ini | Runtime lokal pertama yang sederhana dengan daya tahan JSON/SQLite, restart resume, streaming SSE, pembatalan, mode eksekutor eksternal, dan koordinasi sewaan opsional ketika diaktifkan secara eksplisit |
| 🛡️**Keamanan**| ✅ Saat ini | Pemindai statis, ClamAV/VirusTotal opsional, artefak rilis bertanda tangan, checksum arsip, dan verifikasi waktu rilis |
| 📋**Klasifikasi**| ✅ Saat ini | Taksonomi kanonik, kematangan, penyebaran kualitas semantik, penyebaran praktik terbaik, dan penilaian keamanan |
| 📁**Arsip**| ✅ Saat ini | Arsip `.zip` dan `.tar.gz` per keterampilan dengan manifes checksum SHA-256 |
| 🔐**Penandatanganan**| ✅ Saat ini | Tanda tangan terpisah diterapkan pada tag rilis; alur instalasi lokal menggunakan metadata manifes dan checksum yang sama |
| 🧬**Aliran Masuk**| ✅ Saat ini | Keterampilan asli berada di bawah `keterampilan/`; Otomatisasi PR meninjaunya dan mengusulkan turunan yang ditingkatkan Omni di bawah `skills_omni/` |## 🔭 Current Project State

Jalur fondasi sekarang berada dalam status proyek aktif, dan gelombang perluasan kategori kedua sudah ada dalam katalog. Proyek ini sekarang harus dibaca sebagai dasar kerja dengan jalur ekspansi opsional di masa depan:

- `v0.1.2` publik dan `v0.0.1` pribadi adalah batas rilis stabil saat ini
- Katalog sekarang mencakup 32 keterampilan yang diterbitkan dalam 15 kategori aktif dan 7 paket yang didukung penuh
- masukan asli dan keluaran `skills_omni/` yang dikurasi keduanya beroperasi, termasuk masukan asli multibahasa dan keluaran yang dikurasi hanya dalam bahasa Inggris
- permukaan protokol, otomatisasi rilis, dan otomatisasi peningkatan pribadi ada dalam layanan, bukan dalam bootstrap

Ekspansi di masa depan tetap disengaja:

- memperdalam `desain`, `alat`, `data-ai`, dan `pembelajaran mesin`
- hindari membuka kembali kategori non-kode asli yang tidak aktif hingga trek kode asli saat ini memiliki kedalaman yang lebih kuat
- menjaga jalur peninjauan dasar dan penambah kualitas tetap utuh saat melakukannya

Rencana itu sekarang dibagi menjadi:

- gelombang ekspansi pertama yang telah selesai di [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- gelombang ekspansi kedua yang telah selesai di [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- dan simpanan berwawasan ke depan di [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Pertanyaan-pertanyaan arsitektur ini tidak lagi “terbuka” dalam praktiknya dan kini diperlakukan sebagai keputusan proyek:

1.**Distribusi tetap mengutamakan manifes ditambah arsip yang ditandatangani**
   Manifes yang dapat dibaca mesin tetap merupakan kontrak yang digunakan oleh CLI, API, MCP, dan A2A. Arsip per keterampilan yang ditandatangani adalah permukaan pengunduhan dan rilis yang berlapis di atas kontrak tersebut.
2.**Katalog pribadi atau premium harus menggunakan kembali skema manifes yang sama**
   Otentikasi dan kebijakan harus berlapis secara eksternal, bukan dengan membagi bentuk manifes atau katalog.
3.**Konfigurasi MCP harus menyatu pada beberapa kelompok ekspor kanonik**
   Omni Skills kini melakukan standarisasi seputar JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions`, dan TOML `[mcp_servers]`, sambil tetap mempertahankan penulis yang dipesan khusus jika dokumen klien resmi memerlukan struktur yang berbeda.

Keputusan tersebut selaras dengan dokumentasi resmi MCP dan klien saat ini, termasuk:

- Panduan dukungan ekstensi dan Registri MCP resmi di `modelcontextprotocol.io`
- Dokumen OpenAI Docs MCP dan Codex CLI di `developers.openai.com` dan `platform.openai.com`
- Ekstensi VS Code MCP dan dokumen produk di `code.visualstudio.com`
- dokumen klien untuk Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman, dan JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Dok | Apa yang Akan Anda Pelajari |
|:----|:------------------|
| 📘 [Memulai](users/GETTING-STARTED.md) | Instal, verifikasi, dan aktifkan keterampilan pertama Anda |
| 🧭 [Panduan Pengguna CLI](pengguna/CLI-USER-GUIDE.md) | Referensi perintah lengkap dan pola penggunaan CLI dunia nyata |
| 📗 [Panduan Penggunaan](users/USAGE.md) | Perintah CLI, mode instalasi, perintah runtime, dan alur konfigurasi MCP |
| 📦 [Paket](users/BUNDLES.md) | Paket pilihan dan ketersediaannya saat ini |
| 📚 [Katalog](CATALOG.md) | Katalog keterampilan yang diterbitkan secara otomatis |
| 🔧 [Sistem Runbook](operasi/RUNBOOK.md) | Bangun, sajikan, amankan, dan pecahkan masalah runtime |### 🏗️ If You Want to **Understand** the Runtime

| Dok | Apa yang Akan Anda Pelajari |
|:----|:------------------|
| 🗺️ [Peta Jalan Agen-Native](architecture/AGENT-NATIVE-ROADMAP.md) | Evolusi arsitektur, keputusan tertutup, dan area perluasan yang tersisa |
| 🧭 [Peta Jalan CLI UX](arsitektur/CLI-UX-ROADMAP.md) | Rencana historis dan bentuk CLI terpandu dan visual saat ini |
| 📐 [ADR-0001: Workspace Foundation](arsitektur/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo inti dan keputusan runtime bersama |
| 🔬 [Analisis Basis Kode](arsitektur/CODEBASE-ANALYSIS.md) | Komposisi runtime saat ini, jumlah, dan batasan sistem |
| 🌐 [Permukaan API Katalog](specs/CATALOG-API.md) | Titik akhir HTTP, pemfilteran, tata kelola, dan unduhan |
| 🧩 [Pemasang yang Dipandu CLI](spesifikasi/CLI-GUIDED-INSTALLER.md) | Kontrak perilaku untuk pemasang yang dipandu |
| 🖥️ [CLI Visual Shell](spesifikasi/CLI-VISUAL-SHELL.md) | Shell visual tinta, model status, dan hub layanan |
| 🔌 [Sespan MCP Lokal](specs/LOCAL-MCP-SIDECAR.md) | Alat yang mendukung sistem file, model daftar yang diizinkan, dan penulisan konfigurasi |
| 🧭 [Matriks Dukungan Klien](spesifikasi/CLIENT-SUPPORT-MATRIX.md) | Klien CLI dan IDE yang didukung, penulis, target manual, dan referensi sumber |
| 📊 [Klasifikasi Keterampilan](specs/SKILL-CLASSIFICATION.md) | Taksonomi, heuristik penilaian, dan artefak metadata |
| 🛡️ [Validasi Keamanan](specs/SECURITY-VALIDATION.md) | Pemindai, arsip, tanda tangan, dan verifikasi rilis |
| 📋 [Spesifikasi Manifes Keterampilan](specs/SKILL-MANIFEST.md) | Format manifes yang dapat dibaca mesin dan kontrak kompatibilitas |### 🤝 If You Want to **Contribute**

| Dok | Apa yang Akan Anda Pelajari |
|:----|:------------------|
| 📝 [Panduan Berkontribusi](../CONTRIBUTING.md) | Alur kerja repo dan ekspektasi permintaan tarik |
| 🧾 [Alur Kerja PR Keterampilan](contributors/SKILL-PR-WORKFLOW.md) | Asupan asli, pemrosesan penambah otomatis, penerbitan `skills_omni/`, dan ekspektasi pengulas |
| 📄 [Templat Keterampilan](kontributor/SKILL-TEMPLATE.md) | Mulai `SKILL.md` dengan frontmatter dan struktur saat ini |
| 🔬 [Anatomi Keterampilan](kontributor/SKILL-ANATOMY.md) | Struktur dan harapan kualitas untuk suatu keterampilan |
| ✅ [Bilah Kualitas](kontributor/BAR-KUALITAS.md) | Kriteria penerimaan repositori |
| 🏆 [Playbook Skor Tinggi](kontributor/PLAYBOOK-SCORE-TINGGI.md) | Apa yang mendorong skor kematangan, kualitas, praktik terbaik, dan keamanan yang tinggi |
| 📋 [Tugas Backlog](tasks/README.md) | Backlog implementasi terperinci untuk sisa pekerjaan publik dan swasta |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Biner `omni-skills` yang diterbitkan adalah titik masuk publik terpadu.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

Untuk permukaan perintah pengguna akhir yang lengkap, gunakan [Panduan Pengguna CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Pipeline build memancarkan file yang dapat dibaca mesin yang menggerakkan setiap permukaan runtime:

| Artefak | Tujuan |
|:---------|:--------|
| `metadata.json` | Validasi seluruh repositori dan ringkasan skor |
| `keterampilan_index.json` | Indeks keterampilan normalisasi repo-lokal |
| `dist/catalog.json` | Katalog yang diterbitkan untuk pencarian dan pencatatan |
| `dist/bundles.json` | Bundel definisi dengan ketersediaan |
| `dist/manifests/<skill>.json` | Manifes yang dapat dibaca mesin per keterampilan |
| `dist/arsip/<keterampilan>.zip` | Arsip keterampilan (zip) |
| `dist/arsip/<keterampilan>.tar.gz` | Arsip Keterampilan (tarball) |
| `dist/arsip/<keterampilan>.checksums.txt` | Manifes checksum SHA-256 |

`dist/` tetap berkomitmen dengan sengaja. Artefak yang dihasilkan ini adalah bagian dari kontrak pemasangan, API, MCP, A2A, smoke, dan rilis.### 🌐 API

```bash
npx omni-skills api --port 3333
```

API registri hanya-baca untuk keterampilan, bundel, perbandingan, perencanaan pemasangan, dan pengunduhan artefak.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Sidecar lokal sekarang mendukung penulisan konfigurasi MCP kelas satu untuk:

- Kode Claude
- Kursor
- Kode VS dan Kontainer Pengembang
- Gemini CLI
- Antigravitasi
- Kiro
- Kodeks CLI
- Lanjutkan
- Selancar angin
- Kode Terbuka
- Klinik
- CLI Kopilot GitHub
- Kode Kilo
- Zed
- Angsa### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Siklus hidup tugas, streaming, persistensi, mulai ulang pemulihan, dan orkestrasi lokal sederhana pertama. Eksekusi sewaan bersama tersedia jika diaktifkan secara eksplisit; Redis tetap menjadi opsi yang dihosting tingkat lanjut, bukan jalur lokal default.---

## 🗂️ Repository Map

| Jalur | Tujuan |
|:-----|:--------|
| 📂 `keterampilan/` | Keterampilan menulis kanonik |
| 📖 `dokumen/pengguna/` | Dokumentasi pengguna akhir |
| 🤝 `dokumen/kontributor/` | Templat dan panduan kontributor |
| 🏗️ `dokumen/arsitektur/` | Peta Jalan, ADR, dan Analisis Teknis |
| 🔧 `dokumen/operasi/` | Runbook operasional |
| 📋 `dokumen/spesifikasi/` | Kontrak runtime, protokol, dan artefak |
| 📚 `docs/CATALOG.md` | Katalog keterampilan yang dihasilkan |
| 📦 `dist/` | Artefak yang dapat dibaca mesin |
| 🧠 `paket/inti-katalog/` | Waktu proses katalog bersama |
| 🌐 `paket/server-api/` | API HTTP hanya-baca |
| 🔌 `paket/server-mcp/` | Server MCP dan sespan lokal |
| 🤖 `paket/server-a2a/` | Server A2A dan runtime tugas |
| 🖥️ `alat/tempat sampah/` | Titik masuk CLI |
| 📚 `alat/lib/` | Pemasang dan pembantu UI |
| ⚙️ `alat/skrip/` | Validasi, pembuatan, verifikasi, dan pengujian |---

## 🧪 Release Validation

```bash
npm run smoke
```

Smoke run memvalidasi:

- ✅ validasi keterampilan dan pembuatan metadata
- ✅ alat kategorisasi ulang taksonomi
- ✅ pembuatan artefak katalog
- ✅ menghasilkan penurunan harga katalog
- ✅ pembuatan dan verifikasi arsip
- ✅ rangkaian pengujian otomatis
- ✅ `paket npm --dry-run`
- ✅ Boot API dan kesehatan
- ✅ Boot MCP di `stdio`, `stream`, dan `sse`
- ✅ Boot A2A, polling, streaming SSE, pembatalan, dan siklus hidup push-config