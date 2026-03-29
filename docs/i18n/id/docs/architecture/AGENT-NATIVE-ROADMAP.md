# 🗺️ Agent-Native Roadmap (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Rencana evolusi arsitektur untuk Omni Skills: dari repositori yang mengutamakan penginstal hingga runtime katalog bersama yang mendukung CLI, API, MCP, dan A2A tanpa menduplikasi logika.**---

## 📊 Current Platform Areas

| Fase | Nama | Status |
|:------|:-----|:-------|
| 1️⃣ | Kontrak dan Artefak | ✅ Saat ini |
| 2️⃣ | API Katalog Hanya-Baca | ✅ Saat ini |
| 3️⃣ | Permukaan Penemuan MCP | ✅ Saat ini |
| 4️⃣ | Instalasi Lokal dan Konfigurasi Permukaan | ✅ Saat ini |
| 5️⃣ | Orkestrasi A2A | ✅ Saat ini |### ✅ What Exists Today

- artefak katalog yang dapat dibaca mesin di `dist/`
- API HTTP hanya baca dengan cakupan titik akhir untuk pencarian, bundel, perbandingan, perencanaan pemasangan, dan pengunduhan
- Server MCP dengan `stdio`, HTTP yang dapat dialirkan, dan transport SSE
- sespan lokal dengan penulisan yang diizinkan dan alur `config-mcp`
- 7 klien berkemampuan instalasi, 16 klien berkemampuan konfigurasi, 33 target konfigurasi MCP, dan 19 profil konfigurasi
- spesialisasi bundel yang lebih dalam di dalam `full-stack`, `security`, `devops`, dan `ai-engineer` melalui `auth-flows`, `threat-modeling`, `release-engineering`, dan `context-engineering`
- arsip per keterampilan (`zip`, `tar.gz`) dengan checksum SHA-256 dan tanda tangan terpisah pada tag rilis
- Garis dasar tata kelola API: autentikasi pembawa/kunci API, autentikasi runtime admin, pembatasan laju, pencatatan audit, daftar izin CORS/IP, proksi kepercayaan, mode pemeliharaan, dan ID permintaan
- Waktu proses A2A dengan siklus hidup tugas, daya tahan JSON/SQLite, restart resume, streaming SSE, pembatalan, pemberitahuan push, pelaksana proses opsional, dan koordinasi sewaan keikutsertaan### 🔭 Future Expansion Areas

Peta jalan inti sekarang menjelaskan cakupan platform saat ini. Hal-hal lainnya adalah area ekspansi di masa depan, bukan kesenjangan mendasar:

- hanya penambahan MCP yang sangat selektif mulai saat ini, dan hanya jika dokumen publik resmi memungkinkan penulis yang aman
- paket referensi yang lebih dalam dan penilaian semantik yang lebih banyak sehingga pengklasifikasi terus memisahkan keterampilan yang luar biasa dari keterampilan yang hanya dipoles
- tata kelola yang dihosting perusahaan di luar garis dasar yang sedang dalam proses saat ini, jika proyek nantinya memerlukan integrasi gateway atau IdP
- spesialisasi yang lebih mendalam pada jalur `desain`, `alat`, `data-ai`, dan `pembelajaran mesin` yang baru diaktifkan
- melanjutkan penyempurnaan operasional di sekitar penyempurnaan pribadi sambil tetap mempertahankan model operasi formalnya: OmniRouter disematkan ke `cx/gpt-5.4`, dihosting di cloud dalam `mock` atau preflight yang terdegradasi, dan `live` yang andal di LAN atau eksekusi yang dihosting sendiri
- pelepasan berkelanjutan dan pengerasan alur kerja hanya sebagai pekerjaan kualitas layanan, bukan sebagai fondasi platform yang hilang## Future Catalog Expansion Track

Dua gelombang perluasan kategori publik pertama kini telah tiba:

- `desain` → `operasi-sistem-desain`, `audit-aksesibilitas`, `tata kelola token-desain`
- `alat` → `pembuatan-server-mcp`
- `data-ai` → `kontrak data`
- `pembelajaran mesin` → `penyajian model`

Langkah selanjutnya yang disarankan adalah tidak lagi mengaktifkan kategori demi kepentingannya sendiri. Hal ini untuk memperdalam jalur kode-asli yang baru aktif ini sehingga terasa seperti permukaan produk yang tahan lama, bukan pijakan keterampilan tunggal.

Arah yang disarankan:

1. memperdalam `desain` dengan alur kerja sistem desain yang lebih operasional
2. memperdalam `alat` dengan keterampilan penulisan dan berorientasi plugin
3. memperdalam `data-ai` dengan keterampilan pipeline dan instrumentasi yang mengutamakan implementasi
4. memperdalam `pembelajaran mesin` dengan keterampilan operasi penyajian, pelatihan, dan evaluasi

Kategori sengaja ditunda kecuali muncul proposal kode asli yang kuat:

- `bisnis`
- `media konten`

Sejarah ekspansi tersebut kini terlacak di:

- [../tasks/TASK-07-KATALOG-SPECIALISASI-DAN-KATEGORI-EKSPANSI.md](../tasks/TASK-07-KATALOG-SPECIALISASI-DAN-KATEGORI-EKSPANSI.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Jaga agar alur kerja `npx omni-skills` saat ini tetap berfungsi
- ✅ Memperkenalkan sumber kebenaran keterampilan yang dapat dibaca mesin
- ✅ Mendukung penemuan, rekomendasi, dan perencanaan pemasangan oleh agen
- ✅ Pisahkan masalah katalog jarak jauh dari penulisan sistem file lokal
- ✅ Gunakan kembali metadata yang sama di CLI, API, MCP, dan A2A---

## 🚫 Non-Goals

- ❌ Penginstalan jarak jauh pada mesin pengguna dari server yang dihosting
- ❌ Ganti `SKILL.md` sebagai format penulisan kanonik
- ❌ Mewajibkan kontributor untuk menulis manifes dengan tangan
- ❌ Ubah proyek menjadi platform antrian yang dihosting secara berat secara default---

## 🏗️ Target Architecture

Satu**inti katalog**dengan tiga permukaan protokol:

| Permukaan | Terbaik Untuk | Modus |
|:--------|:---------|:-----|
| 🌐**API REST**| Akses registri, integrasi UI, konsumen pihak ketiga | Hanya baca |
| 🔌**MCP**| Penemuan agen, pratinjau instalasi, penulisan konfigurasi, resep klien | Hanya baca + tulis lokal |
| 🤖**A2A**| Orkestrasi agen-ke-agen dan penyerahan rencana pemasangan | Siklus hidup tugas dengan daya tahan lokal sederhana-pertama |### ⚙️ Core Principle

>**Semua protokol menggunakan rangkaian artefak yang dihasilkan sama.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Manifesnya tetap menjadi kontrak bersama. Arsip adalah artefak distribusi yang diletakkan di atas kontrak tersebut, bukan penggantinya.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Digunakan oleh API yang dihosting dan server MCP jarak jauh.

| ✅ Diizinkan | ❌ Tidak Diizinkan |
|:-----------|:---------------|
| Keterampilan pencarian | Menulis ke sistem file pemanggil |
| Ambil manifes | Mutasi konfigurasi klien lokal |
| Bandingkan keterampilan | Menyimpulkan status mesin sewenang-wenang |
| Rekomendasikan bundel | — |
| Bangun rencana pemasangan | — |### 2️⃣ Local Installer Mode

Digunakan oleh CLI dan sespan MCP.

| ✅ Diizinkan |
|:-----------|
| Deteksi klien AI lokal |
| Periksa keterampilan yang dipasang |
| Pratinjau operasi file |
| Instal atau hapus direktori keterampilan |
| Tulis konfigurasi MCP lokal setelah pratinjau |

> 📌 Ini tetap menjadi satu-satunya mode di mana penulisan OS sebenarnya terjadi.---

## 📐 Protocol Split

### 🌐 REST API

Terbaik untuk akses registri, pencarian, perbandingan, pengunduhan versi, dan perencanaan pemasangan.

**Titik Akhir**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Terbaik untuk penemuan berbasis alat, rekomendasi cepat, pratinjau pemasangan, dan penyiapan MCP khusus klien.

**Alat baca-saja**: `keterampilan_penelusuran` · `get_skill` · `bandingkan_keterampilan` · `recommend_skills` · `preview_install`

**Alat lokal**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Terbaik untuk serah terima penemuan, alur kerja rencana pemasangan, dan eksekusi tugas agen yang dapat dilanjutkan.

**Operasi saat ini**: `discover-skills` · `recommend-stack` · `prepare-install-plan`---

## 🛡️ Security Model

| Prinsip | Implementasi |
|:----------|:---------------|
| 🔒 Layanan yang dihosting hanya dapat dibaca | API dan MCP jarak jauh tidak menulis ke sistem file pemanggil |
| 📂 Menulis tetap lokal | Hanya sespan CLI dan MCP |
| 👁️ Pratinjau sebelum menulis | Default uji coba pada mutasi lokal |
| 🔑 Integritas itu eksplisit | Checksum SHA-256 untuk artefak yang dihasilkan |
| ✍️ Kepercayaan pelepasan bersifat eksplisit | Tanda tangan terpisah diterapkan pada tag rilis |
| ⚠️ Resiko muncul | Metadata risiko dan keamanan menyebar ke setiap permukaan runtime |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- arsitektur target yang terdokumentasi
- skema manifes yang ditentukan
- metadata, katalog, manifes, bundel, dan arsip yang dihasilkan### Phase 2: Catalog Service

- API HTTP hanya baca dengan Express 5
- pencarian, pemfilteran, pencarian manifes, daftar bundel, perbandingan, dan unduhan
- dasar tata kelola yang dihosting oleh env### Phase 3: MCP Discovery

- integrasi `@modelcontextprotocol/sdk` resmi
- `stdio`, HTTP yang dapat dialirkan, dan transportasi SSE
- Alat, sumber daya, dan petunjuk hanya baca yang didukung oleh katalog bersama### Phase 4: Local Install and Config Surface

- sespan lokal dengan penulisan yang diizinkan
- deteksi untuk 7 klien yang mampu menginstal
- penulisan konfigurasi untuk 16 klien berkemampuan konfigurasi di 33 target dan 19 profil konfigurasi
- alur `config-mcp` yang dipandu di CLI dan shell visual
- dukungan stabil untuk Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose, dan Dev Containers### Phase 5: A2A Orchestration

- kartu agen di `/.well-known/agent.json`
- Metode konfigurasi `pesan/kirim`, `pesan/aliran`, `tugas/dapatkan`, `tugas/batal`, `tugas/berlangganan`, dan pemberitahuan push
- Kegigihan JSON dan SQLite dengan pemulihan mulai ulang
- pelaksana proses eksternal opsional
- ikut serta dalam eksekusi sewaan di seluruh pekerja untuk SQLite dan koordinasi Redis tingkat lanjut opsional
- default sederhana pertama disimpan di memori, JSON, atau SQLite tanpa ketergantungan eksternal### Current Enhancer Operating Decision

Model `live` yang didukung penambah privat kini bersifat eksplisit:

- otomatisasi PR yang dihosting menjalankan upaya `langsung` dengan gerbang preflight
- jika gateway OmniRoute publik diblokir atau tidak stabil, PR ditandai `diblokir` dengan alasan yang berhubungan dengan operator dan bukannya gagal secara samar-samar
- jalur `live` yang dapat diandalkan secara kanonik tetap berupa eksekusi LAN atau layanan lokal
- GitHub pribadi terjadwal berjalan tetap `mock` secara default kecuali operator secara eksplisit meminta `live`---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Keputusan**: pertahankan manifes sebagai kontrak bersama dan pertahankan arsip per keterampilan yang ditandatangani sebagai permukaan distribusi.

**Mengapa**:
- CLI, API, MCP, dan A2A sudah menggunakan bentuk manifes yang dinormalisasi
- Arsip ideal untuk diunduh dan diverifikasi, tetapi buruk sebagai satu-satunya kontrak penemuan
- ini membuat penulisan tetap sederhana dan distribusi dapat diverifikasi### 2. Private or Premium Catalogs

**Keputusan**: menggunakan kembali format manifes dan katalog yang sama, serta autentikasi atau kebijakan lapisan secara eksternal.

**Mengapa**:
- menghindari forking model data
- cocok dengan pendekatan tata kelola API/MCP saat ini
- tetap kompatibel dengan arahan ekosistem MCP seputar kredensial klien OAuth dan otorisasi yang dikelola perusahaan### 3. Client Writer Strategy

**Keputusan**: menyatukan sekelompok kecil kelompok ekspor kanonik dan hanya mempertahankan penulis yang dipesan khusus jika dokumen resmi klien memerlukannya.

**Kelompok kanonik kini digunakan**:
- JSON `mcpServer`
- `server` JSON
- JSON `server_konteks`
- YAML `mcpServer`
- TOML `[mcp_servers]`

**Mengapa**:
- itu membuat implementasinya dapat dipertahankan
- masih mendukung kebutuhan spesifik klien seperti pengaturan Claude, Lanjutkan YAML, Zed `context_servers`, dan Codex TOML
- menghindari menciptakan penulis yang rapuh untuk klien tanpa dokumen konfigurasi publik yang stabil---

## 🌍 Research Notes Behind Those Decisions

Keputusan saat ini telah diperiksa berdasarkan dokumen ekosistem resmi:

- ekosistem MCP kini mendokumentasikan ekstensi opsional seperti kredensial klien OAuth dan otorisasi yang dikelola perusahaan, yang mendukung eksternalisasi autentikasi yang dihosting alih-alih mem-forking format katalog
- OpenAI mendokumentasikan server MCP dokumen publik dan pola konfigurasi Codex MCP yang selaras dengan manifes bersama plus strategi penulis-klien
- VS Code mendokumentasikan dukungan MCP kelas satu dan panduan ekstensi, yang memperkuat pemeliharaan penulis berbasis `server` yang berdedikasi
- JetBrains AI Assistant mendokumentasikan pengaturan MCP melalui UX produk, bukan kontrak file lintas platform yang stabil, yang mendukung penyimpanannya di wilayah manual/cuplikan untuk saat ini---

## 🔮 Longer-Term Decision Points

Hanya ada beberapa pertanyaan strategis yang masih terbuka:

1. Apakah klien mana pun di luar matriks saat ini benar-benar memenuhi standar penulisan kelas satu, atau apakah produk lainnya harus tetap manual/hanya cuplikan
2. Kapan, jika pernah, tata kelola yang dihosting sebaiknya beralih ke gerbang eksternal atau IdP perusahaan, bukan dasar proses yang ada saat ini?
3. Seberapa jauh pemberi skor harus mengevaluasi kedalaman paket referensi dan kualitas operasional sebelum menjadi terlalu beropini di mata kontributor?