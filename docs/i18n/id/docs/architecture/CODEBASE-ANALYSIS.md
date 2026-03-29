# 🔬 Codebase Deep Analysis (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Analisis teknis komprehensif tentang arsitektur Omni Skills, permukaan runtime, dan pipeline build saat ini.**
> Terakhir dianalisis: 28-03-2026---

## 📊 Project Overview

| Atribut | Nilai |
|:----------|:------|
|**Nama**| `keterampilan omni` |
|**Versi paket**| `0.1.3` |
|**Versi keterampilan**| Per keterampilan dan independen dari versi paket. Banyak keterampilan yang diterbitkan masih `0.0.1` sedangkan paketnya `0.1.2`. |
|**Lisensi**| MIT (kode) + CC BY 4.0 (konten) |
|**NPM**| `npx keterampilan omni` |
|**Keterampilan yang dipublikasikan**| 32 |
|**Paket yang ditentukan**| 7, semuanya didukung penuh oleh keterampilan yang diterbitkan |
|**Kategori katalog aktif**| 15 keranjang aktif dari 18 kategori taksonomi kanonik |
|**Contoh LOC runtime/build utama di bawah**| 13.600+ |
|**Ketergantungan produksi**| 7 (@`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Cuplikan klasifikasi tingkat repositori saat ini dari `metadata.json`:

- skor kualitas rata-rata: `96,3`
- rata-rata skor praktik terbaik: `98,7`
- skor keamanan rata-rata: `95.0`
- semua 32 keterampilan yang diterbitkan divalidasi sebagai `L3`

Dasar rilis saat ini:

- rilis repositori publik: `v0.1.2`
- rilis penambah pribadi: `v0.0.1`
- otomatisasi rilis publik dan otomatisasi rilis pribadi aktif dan ramah lingkungan---

## 🏗️ Architecture Overview

Repositori ini mengikuti pola**workspace monorepo**dengan satu inti katalog bersama dan beberapa permukaan runtime.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

Desainnya sengaja**didorong oleh artefak**:

1. keterampilan ditulis sebagai `SKILL.md` ditambah paket dukungan lokal
2. build memvalidasi, mengklasifikasikan, mengarsipkan, dan menormalkannya
3. artefak yang dihasilkan menjadi kontrak untuk CLI, API, MCP, dan A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4.500+ LOC digabungkan**— antarmuka publik utama untuk penggunaan ahli dan terpandu.

| Perintah | Fungsi |
|:--------|:---------|
| 🔎 `temukan [kueri]` | Pencarian katalog teks lengkap dengan filter sadar skor |
| 📦 `instal` | Penginstalan terpandu atau berbasis bendera ke klien yang dikenal atau jalur khusus |
| 🧾 `config-mcp` | Pratinjau atau tulis konfigurasi MCP yang sadar klien |
| 🔌 `mcp <transportasi>` | Memulai server MCP di `stdio`, `stream`, atau `sse` |
| 🌐 `api` | Memulai API katalog |
| 🤖 `a2a` | Memulai waktu proses A2A |
| 🧪 `asap` | Rilis validasi pra-penerbangan |
| 🩺 `dokter` | Diagnostik lokal |
| 🖥️ `ui` | Shell visual tinta dengan instalasi, penemuan, konfigurasi, dan hub layanan |
| 🏷️ `kategorikan ulang` | Inspeksi penyimpangan taksonomi dan penulisan ulang |

CLI bukan lagi sekadar penginstal. Ini adalah alat operasi publik untuk seluruh platform.## 🧭 Future Expansion Direction

Waktu proses publik tidak lagi diblokir pada pekerjaan dasar, dan gelombang kategori kedua telah tiba. Pekerjaan katalog berguna berikutnya adalah kedalaman, bukan pengejaran jumlah kategori.

Lagu kode asli yang baru diaktifkan sekarang ada di katalog:

- `desain` melalui `operasi-sistem-desain`, `audit-aksesibilitas`, dan `tata kelola token-desain`
- `alat` melalui `mcp-server-authoring`
- `data-ai` melalui `kontrak data`
- `pembelajaran mesin` melalui `penyajian model`

Arah selanjutnya yang direkomendasikan:

1. memperdalam `desain`, `alat`, `data-ai`, dan `pembelajaran mesin`
2. menunda `bisnis` dan `media-konten` kecuali ada proposal yang jelas-jelas bersifat kode asli
3. mempertahankan batas kualitas saat ini daripada membuka kembali tekanan aktivasi kategori

Gelombang ekspansi tersebut kini tercatat di [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— menginstal keterampilan ke 7 asisten yang mampu menginstal.

| Bendera | Sasaran | Jalur Bawaan |
|:-----|:-------|:-------------|
| `--claude` | Kode Claude | `~/.claude/skills` |
| `--kursor` | Kursor | `~/.cursor/skills` |
| `--gemini` | CLI Gemini | `~/.gemini/skills` |
| `--kodeks` | Kodeks CLI | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antigravitasi` | Antigravitasi | `~/.gemini/antigravity/skills` |
| `--kode terbuka` | Kode Terbuka | `<ruang kerja>/.opencode/skills` |

Ini mendukung:

- pemasangan perpustakaan lengkap
- pemasangan selektif dengan `--skill`
- pemasangan yang dikurasi oleh `--bundle`
- TTY terpandu dan aliran UI visual
- jalur target khusus### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— lapisan runtime bersama untuk CLI, API, MCP, dan A2A.

| Ekspor | Deskripsi |
|:-------|:------------|
| 🔎 `Keterampilan pencarian()` | Pencarian dengan pencocokan teks berbobot dan dukungan filter |
| 📋 `daftarKeterampilan()` | Pemfilteran multi-sumbu berdasarkan kualitas, praktik terbaik, tingkat, keamanan, risiko, alat, dan kategori |
| 📌 `getSkill()` | Resolusi manifes ditambah URL publik yang diperkaya |
| ⚖️ `bandingkanKeterampilan()` | Perbandingan berdampingan |
| 💡 `merekomendasikan Keterampilan ()` | Rekomendasi berdasarkan tujuan |
| 📦 `buildInstallPlan()` | Instal pembuatan rencana dengan peringatan dan panduan sadar klien |
| 🗂️ `daftarBundles()` | Daftar bundel yang dikurasi dengan ketersediaan |
| 📁 `daftarSkillArchives()` | Arsip dan resolusi tanda tangan |

Ini adalah satu-satunya sumber kebenaran runtime dari generasi ke generasi.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— implementasi MCP penuh menggunakan SDK resmi.

**Transportasi**

- `stdio`
- HTTP yang dapat dialirkan
- SSE

**Alat baca-saja yang selalu aktif**

- `keterampilan_penelusuran`
- `dapatkan_keterampilan`
- `bandingkan_keterampilan`
- `rekomendasikan_keterampilan`
- `pratinjau_instal`

**Alat mode lokal**

- `deteksi_klien`
- `daftar_keterampilan_terinstal`
- `instal_keterampilan`
- `hapus_keterampilan`
- `konfigurasi_klien_mcp`

Permukaan MCP sengaja dipecah menjadi:

- penggunaan katalog jarak jauh/hanya-baca
- penggunaan sespan lokal/mampu menulis### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1,943 LOC**— lapisan MCP yang sadar sistem file untuk deteksi klien, manajemen keterampilan, dan penulisan konfigurasi MCP.

Dukungan praktis saat ini:

-**7 klien yang mampu menginstal**
-**16 klien berkemampuan konfigurasi**
-**33 target konfigurasi**
-**19 profil konfigurasi**

Klien yang mampu menginstal:

- Kode Claude
- Kursor
- Gemini CLI
- Kodeks CLI
- Kiro
- Antigravitasi
- Kode Terbuka

Klien dan target yang mampu melakukan konfigurasi meliputi:

- Pengaturan Claude, Desktop Claude, dan konfigurasi proyek Claude
- Pengguna kursor dan konfigurasi ruang kerja
- Ruang kerja VS Code, pengguna, orang dalam, dan konfigurasi Kontainer Dev
- Pengaturan pengguna dan ruang kerja Gemini
- Konfigurasi pengguna antigravitasi
- Pengguna Kiro, ruang kerja, dan jalur lama
- Konfigurasi Codex CLI TOML
- Konfigurasi pengguna dan ruang kerja OpenCode
- Pengaturan klinik
- Pengguna GitHub Copilot CLI dan konfigurasi repo
- Konfigurasi pengguna Kilo, proyek, dan ruang kerja
- Lanjutkan ruang kerja YAML
- Konfigurasi pengguna selancar angin
- Konfigurasi ruang kerja Zed
- Konfigurasi pengguna angsa

Sidecar sengaja jujur ​​tentang batasan:

- itu hanya menulis di dalam daftar yang diizinkan
- itu dipratinjau secara default
- itu membuat penulis kelas satu hanya jika dokumen resmi memaparkan format yang stabil
- tidak berarti bahwa setiap produk berkemampuan MCP juga merupakan target pemasangan keterampilan### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC digabungkan**— API registri hanya-baca ditambah middleware tata kelola.

Titik akhir yang penting:

- `/ kesehatan`
- `/openapi.json`
- `/admin/waktu proses`
- `/v1/keterampilan`
- `/v1/keterampilan/:id`
- `/v1/pencarian`
- `/v1/bandingkan`
- `/v1/bundel`
- `/v1/instal/rencana`
- `/v1/skills/:id/download/*`

Baseline tata kelola yang sudah diterapkan:

- autentikasi token pembawa
- Otentikasi kunci API
- autentikasi token admin
- pembatasan laju dalam proses
- minta ID
- pencatatan audit
- Daftar yang diizinkan CORS
- Daftar IP yang diizinkan
- percayai penanganan proxy
- mode pemeliharaan### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1.857 LOC digabungkan di seluruh server utama, runtime, dan file koordinator**— siklus hidup tugas JSON-RPC 2.0 untuk alur kerja agen-ke-agen.

Metode yang didukung:

- `pesan/kirim`
- `pesan/aliran`
- `tugas/dapatkan`
- `tugas/batal`
- `tugas/berlangganan kembali`
- `tugas/pushNotificationConfig/*`

Operasi saat ini:

- `temukan-keterampilan`
- `rekomendasikan-tumpukan`
- `persiapkan-instal-rencana`

Model daya tahan dan koordinasi:

- memori, JSON, atau persistensi lokal SQLite
- mulai ulang resume
- pelaksana proses eksternal opsional
- ikut serta dalam koordinasi antrian sewaan untuk pekerja SQLite bersama
- Koordinasi opsional yang didukung Redis sebagai jalur host tingkat lanjut

Pilihan arsitektur utama di sini adalah**operasi lokal sederhana pertama**. Redis ada sebagai opsi lanjutan, tetapi jalur produk default tetap bersifat lokal dan ringan ketergantungan.---

## ⚙️ Build Pipeline

| Skrip | Bahasa | Tujuan |
|:-------|:---------|:--------|
| 📊 `skill_metadata.py` | ular piton | Validasi, taksonomi, penilaian, dan pemindaian keamanan statis |
| ✅ `validasi_skills.py` | ular piton | Pembuatan metadata per keterampilan dan untuk ringkasan root |
| 📑 `hasilkan_index.py` | ular piton | Indeks keterampilan, manifes, arsip, tanda tangan, dan checksum |
| 🏗️ `build_catalog.js` | Node.js | `dist/catalog.json` terakhir dan `dist/bundles.json` |
| 🏷️ `mengkategorikan ulang_skills.py` | ular piton | Audit dan penulisan ulang kategori kanonik |
| 🔍 `verifikasi_arsip.py` | ular piton | Verifikasi arsip dan tanda tangan |

Dua detail penting secara operasional:

1. `dist/` adalah bagian dari kontrak runtime dan dilakukan dengan sengaja
2. build tersebut cukup deterministik untuk mendukung verifikasi CI dan penandatanganan rilis---

## 📦 Published Catalog

Katalog publik saat ini mencakup 32 keterampilan:

-**Penemuan dan perencanaan**: `menemukan keterampilan`, `brainstorming`, `arsitektur`, `debugging`
-**Sistem desain dan aksesibilitas**: `operasi-sistem-desain`, `audit aksesibilitas`
-**Pengiriman produk dan full-stack**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**Keamanan**: `auditor keamanan`, `pemindai kerentanan`, `respon insiden`, `pemodelan ancaman`
-**Alur kerja pengelola OSS**: `dokumentasi`, `changelog`, `buat-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**Rekayasa AI**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Ketujuh paket didukung sepenuhnya:

- `penting` → `4/4`
- `tumpukan penuh` → `5/5`
- `desain` → `4/4`
- `keamanan` → `4/4`
- `pengembangan` → `5/5`
- `ai-insinyur` → `5/5`
- `pemelihara oss` → `4/4`

Skor saat ini tersebar dari katalog yang dihasilkan:

- skor kualitas: `94, 95, 96, 97, 100`
- skor praktik terbaik: `98, 99, 100`
- skor keamanan: semua keterampilan yang diterbitkan saat ini `95`

Perwakilan kelas atas:

- `omni-figma` → `kualitas 100`, `praktik_terbaik 100`
- `audit aksesibilitas` → `kualitas 99`, `praktik_terbaik 100`
- `aliran autentikasi` → `kualitas 97`, `praktik_terbaik 99`
- `operasi-sistem-desain` → `kualitas 97`, `praktik_terbaik 99`
- `rekayasa rilis` → `kualitas 97`, `praktik_terbaik 99`
- `pemodelan ancaman` → `kualitas 97`, `praktik_terbaik 99`
- `rekayasa konteks` → `kualitas 97`, `praktik_terbaik 99`

Perwakilan ujung bawah dalam pita atas saat ini:

- `arsitektur` → `kualitas 94`, `praktik_terbaik 98`
- `changelog` → `kualitas 94`, `praktik_terbaik 98`
- `buat-pr` → `kualitas 95`, `praktik_terbaik 98`

Ini disengaja. Pencetak skor sekarang membedakan “luar biasa” dari “luar biasa” alih-alih meratakan seluruh katalog di bagian atas.---

## 🌟 Strengths

1.**Desain yang mengutamakan artefak**
   Setiap permukaan runtime menggunakan katalog dan manifes yang dihasilkan sama.
2.**Cakupan protokol luas**
   CLI, API, MCP, dan A2A hidup berdampingan tanpa memecah-mecah model data.
3.**Ergonomi produk lokal yang kuat**
   Penginstalan terpandu, shell visual, `config-mcp`, dan default dry-run membuat proyek dapat digunakan di luar pengguna listrik.
4.**Postur keamanan yang jujur**
   Penulisan lokal, pemindaian statis, penandatanganan, checksum, dan verifikasi rilis yang diizinkan semuanya bersifat eksplisit.
5.**Jangkauan MCP yang sehat**
   Proyek ini sekarang mendukung sejumlah besar klien berkemampuan MCP tanpa berpura-pura bahwa target yang tidak terdokumentasi adalah stabil.---

## 🔮 Opportunities

1.**Cakupan paket yang lebih mendalam**
   Langkah selanjutnya adalah spesialisasi dalam paket yang sudah ada, bukan sekedar cakupan luas.
2.**Semantik pencetak gol yang lebih kaya**
   Masih ada ruang untuk mengevaluasi kedalaman paket referensi dan kualitas alur kerja secara lebih semantik.
3.**Lebih banyak penulis klien hanya jika dibenarkan**
   Ekspansi harus tetap disiplin dan terikat pada dokumen resmi yang stabil.
4.**Dekomposisi validator**
   `skill_metadata.py` masih merupakan modul besar dan akan mendapat manfaat dari dekomposisi internal seiring waktu.
5.**Eskalasi tata kelola yang diselenggarakan**
   Baseline dalam proses saat ini sudah cukup untuk hosting mandiri, namun penerapan di perusahaan pada akhirnya memerlukan gateway eksternal dan integrasi identitas.