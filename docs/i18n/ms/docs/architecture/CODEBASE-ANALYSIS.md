# 🔬 Codebase Deep Analysis (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Analisis teknikal yang komprehensif tentang seni bina Kemahiran Omni semasa, permukaan masa jalan dan saluran paip binaan.**
> Terakhir dianalisis: 2026-03-28---

## 📊 Project Overview

| Atribut | Nilai |
|:----------|:------|
|**Nama**| `kemahiran omni` |
|**Versi pakej**| `0.1.3` |
|**Versi kemahiran**| Per-kemahiran dan bebas daripada versi pakej. Banyak kemahiran yang diterbitkan masih `0.0.1` manakala pakej adalah `0.1.2`. |
|**Lesen**| MIT (kod) + CC BY 4.0 (kandungan) |
|**NPM**| `npx omni-skills` |
|**Kemahiran yang diterbitkan**| 32 |
|**Himpunan yang ditentukan**| 7, semuanya disokong sepenuhnya oleh kemahiran yang diterbitkan |
|**Kategori katalog aktif**| 15 baldi aktif daripada 18 kategori taksonomi kanonik |
|**Waktu jalan utama/binaan LOC sampel di bawah**| 13,600+ |
|**Kebergantungan pengeluaran**| 7 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Gambar klasifikasi peringkat repositori semasa daripada `metadata.json`:

- purata skor kualiti: `96.3`
- purata skor amalan terbaik: `98.7`
- purata markah keselamatan: `95.0`
- kesemua 32 kemahiran yang diterbitkan disahkan sebagai `L3`

Garis dasar keluaran semasa:

- keluaran repositori awam: `v0.1.2`
- keluaran penambah peribadi: `v0.0.1`
- automasi keluaran awam dan automasi keluaran persendirian adalah aktif dan hijau---

## 🏗️ Architecture Overview

Repositori mengikuti corak**ruang kerja monorepo**dengan satu teras katalog dikongsi dan berbilang permukaan masa jalan.```text
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

Reka bentuk ini sengaja**didorong artifak**:

1. kemahiran dikarang sebagai `SKILL.md` ditambah pek sokongan tempatan
2. binaan mengesahkan, mengklasifikasikan, mengarkibkan dan menormalkannya
3. artifak yang dijana menjadi kontrak untuk CLI, API, MCP dan A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4,500+ LOC digabungkan**— antara muka awam utama untuk penggunaan pakar dan berpandu.

| Perintah | Fungsi |
|:--------|:---------|
| 🔎 `cari [pertanyaan]` | Carian katalog teks penuh dengan penapis sedar skor |
| 📦 `pasang` | Pemasangan berpandu atau berasaskan bendera ke dalam pelanggan yang diketahui atau laluan tersuai |
| 🧾 `config-mcp` | Pratonton atau tulis konfigurasi MCP sedar pelanggan |
| 🔌 `mcp <pengangkutan>` | Memulakan pelayan MCP dalam `stdio`, `strim` atau `sse` |
| 🌐 `api` | Memulakan API katalog |
| 🤖 `a2a` | Memulakan masa jalan A2A |
| 🧪 `asap` | Keluarkan pengesahan prapenerbangan |
| 🩺 `doktor` | Diagnostik tempatan |
| 🖥️ `ui` | Cangkang visual dakwat dengan pemasangan, penemuan, konfigurasi dan hab perkhidmatan |
| 🏷️ `mengkategorikan semula` | Pemeriksaan hanyutan taksonomi dan tulis semula |

CLI bukan lagi sekadar pemasang. Ia adalah alat operasi awam untuk keseluruhan platform.## 🧭 Future Expansion Direction

Waktu jalan awam tidak lagi disekat pada kerja asas, dan gelombang kategori kedua sudah pun mendarat. Kerja katalog berguna seterusnya ialah kedalaman, bukan pengejaran yang lebih mengikut kategori.

Lagu kod asli yang baru diaktifkan kini dalam katalog:

- `reka bentuk` melalui `design-systems-ops`, `accessibility-audit` dan `design-token-governance`
- `alat` melalui `mcp-server-authoring`
- `data-ai` melalui `data-contracts`
- `pembelajaran mesin` melalui `servis model`

Disyorkan arah seterusnya:

1. mendalami `reka bentuk`, `alat`, `data-ai` dan `pembelajaran mesin`
2. pastikan `perniagaan` dan `media kandungan` ditangguhkan melainkan cadangan kod asli yang jelas muncul
3. mengekalkan lantai kualiti semasa dan bukannya membuka semula tekanan pengaktifan kategori

Gelombang pengembangan itu kini direkodkan dalam [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— memasang kemahiran ke dalam 7 pembantu berkebolehan memasang.

| Benderakan | Sasaran | Laluan Lalai |
|:-----|:-------|:-------------|
| `--claude` | Kod Claude | `~/.claude/skills` |
| `--kursor` | Kursor | `~/.kursor/kemahiran` |
| `--gemini` | Gemini CLI | `~/.gemini/skills` |
| `--codex` | Codex CLI | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/kemahiran` |
| `--antigraviti` | Antigraviti | `~/.gemini/antigravity/skills` |
| `--opencode` | OpenCode | `<ruang kerja>/.opencode/skills` |

Ia menyokong:

- pemasangan perpustakaan penuh
- pemasangan terpilih mengikut `--skill`
- pemasangan susun atur oleh `--bundle`
- TTY dan aliran UI visual berpandu
- laluan sasaran tersuai### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— lapisan masa jalan dikongsi untuk CLI, API, MCP dan A2A.

| Eksport | Penerangan |
|:-------|:------------|
| 🔎 `Kemahiran carian()` | Cari dengan padanan teks berwajaran dan sokongan penapis |
| 📋 `listSkills()` | Penapisan berbilang paksi mengikut kualiti, amalan terbaik, tahap, keselamatan, risiko, alat dan kategori |
| 📌 `getSkill()` | Peleraian manifes serta URL awam yang diperkaya |
| ⚖️ `compareSkills()` | Perbandingan sebelah menyebelah |
| 💡 `recommendSkills()` | Pengesyoran didorong matlamat |
| 📦 `buildInstallPlan()` | Pasang penjanaan pelan dengan amaran dan panduan sedar pelanggan |
| 🗂️ `listBundles()` | Penyenaraian himpunan dipilih susun dengan ketersediaan |
| 📁 `listSkillArchives()` | Arkib dan resolusi tandatangan |

Ini adalah sumber tunggal sebenar kebenaran masa jalan demi generasi.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— pelaksanaan MCP penuh menggunakan SDK rasmi.

**Pengangkutan**

- `stdio`
- HTTP boleh strim
- SSE

**Alatan baca sahaja yang sentiasa aktif**

- `kemahiran_mencari`
- `dapat_kemahiran`
- `bandingkan_kemahiran`
- `mencadangkan_kemahiran`
- `preview_install`

**Alat mod tempatan**

- `mengesan_pelanggan`
- `list_installed_skills`
- `kemahiran_pasang`
- `buang_kemahiran`
- `configure_client_mcp`

Permukaan MCP sengaja dibelah antara:

- penggunaan katalog jauh/baca sahaja
- penggunaan kereta sampingan tempatan/mampu menulis### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1,943 LOC**— lapisan MCP yang sedar sistem fail untuk pengesanan klien, pengurusan kemahiran dan penulisan konfigurasi MCP.

Sokongan praktikal semasa:

-**7 pelanggan berkebolehan memasang**
-**16 pelanggan berkebolehan konfigurasi**
-**33 sasaran konfigurasi**
-**19 profil konfigurasi**

Pelanggan berkemampuan memasang:

- Kod Claude
- Kursor
- Gemini CLI
- Codex CLI
- Kiro
- Antigraviti
- OpenCode

Pelanggan dan sasaran berkemampuan konfigurasi termasuk:

- Tetapan Claude, Desktop Claude dan konfigurasi projek Claude
- Konfigurasi pengguna dan ruang kerja kursor
- Ruang kerja VS Code, pengguna, orang dalam dan konfigurasi Dev Container
- Tetapan pengguna dan ruang kerja Gemini
- Konfigurasi pengguna antigraviti
- Pengguna Kiro, ruang kerja dan laluan warisan
- Konfigurasi Codex CLI TOML
- Konfigurasi pengguna dan ruang kerja OpenCode
- Tetapan cline
- Konfigurasi pengguna dan repo CLI Copilot GitHub
- Konfigurasi pengguna, projek dan ruang kerja Kilo
- Teruskan ruang kerja YAML
- Konfigurasi pengguna Windsurf
- Konfigurasi ruang kerja Zed
- Konfigurasi pengguna angsa

Kereta sisi sengaja jujur tentang sempadan:

- ia hanya menulis di dalam senarai yang dibenarkan
- ia pratonton secara lalai
- ia mengekalkan penulis kelas pertama hanya apabila dokumen rasmi mendedahkan format yang stabil
- ia tidak berpura-pura setiap produk berkemampuan MCP juga merupakan sasaran pemasangan kemahiran### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC digabungkan**— API pendaftaran baca sahaja serta perisian tengah tadbir urus.

Titik akhir penting:

- `/healthz`
- `/openapi.json`
- `/admin/runtime`
- `/v1/kemahiran`
- `/v1/kemahiran/:id`
- `/v1/carian`
- `/v1/bandingkan`
- `/v1/berkumpulan`
- `/v1/pasang/pelan`
- `/v1/kemahiran/:id/muat turun/*`

Garis asas tadbir urus telah dilaksanakan:

- pengesahan token pembawa
- Pengesahan kunci API
- pengesahan token pentadbir
- pengehadan kadar dalam proses
- minta ID
- log audit
- Senarai dibenarkan CORS
- Senarai kebenaran IP
- pengendalian proksi amanah
- mod penyelenggaraan### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1,857 LOC digabungkan merentas pelayan utama, masa jalan dan fail penyelaras**— Kitaran hayat tugas JSON-RPC 2.0 untuk aliran kerja ejen-ke-ejen.

Kaedah yang disokong:

- `mesej/hantar`
- `mesej/strim`
- `tugas/dapat`
- `tugas/batal`
- `tugas/langgan semula`
- `tugas/pushNotificationConfig/*`

Operasi semasa:

- `menemui-kemahiran`
- `syorkan-tindanan`
- `sediakan-pasang-pelan`

Model ketahanan dan penyelarasan:

- memori, JSON, atau kegigihan setempat SQLite
- mulakan semula resume
- pelaksana proses luaran pilihan
- ikut serta penyelarasan baris gilir yang dipajak untuk pekerja SQLite yang dikongsi
- penyelarasan sokongan Redis pilihan sebagai laluan dihoskan lanjutan

Pilihan seni bina utama di sini ialah**operasi tempatan mudah-pertama**. Redis wujud sebagai pilihan lanjutan, tetapi laluan produk lalai kekal setempat dan cahaya kebergantungan.---

## ⚙️ Build Pipeline

| Skrip | Bahasa | Tujuan |
|:-------|:---------|:--------|
| 📊 `metadata_kemahiran.py` | Python | Pengesahan, taksonomi, pemarkahan dan pengimbasan keselamatan statik |
| ✅ `validate_skills.py` | Python | Penjanaan metadata setiap kemahiran dan untuk ringkasan akar |
| 📑 `generate_index.py` | Python | Indeks kemahiran, manifes, arkib, tandatangan dan jumlah semak |
| 🏗️ `build_catalog.js` | Node.js | Akhir `dist/catalog.json` dan `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Python | Audit kategori kanonik dan tulis semula |
| 🔍 `verify_archives.py` | Python | Pengesahan arkib dan tandatangan |

Dua butiran penting secara operasi:

1. `dist/` adalah sebahagian daripada kontrak masa jalan dan dilakukan dengan sengaja
2. binaan adalah cukup deterministik untuk menyokong pengesahan CI dan menandatangani pelepasan---

## 📦 Published Catalog

Katalog awam semasa merangkumi 32 kemahiran:

-**Penemuan dan perancangan**: `mencari-kemahiran`, `percambahan fikiran`, `seni bina`, `menyahpepijat`
-**Sistem reka bentuk dan kebolehcapaian**: `design-systems-ops`, `accessibility-audit`
-**Penghantaran produk dan tindanan penuh**: `depan-reka bentuk`, `api-reka bentuk`, `reka bentuk pangkalan data`, `omni-figma`, `auth-flows`
-**Keselamatan**: `security-auditor`, `vulnerability-scanner`, `insiden-response`, `threat-modeling`
-**Aliran kerja penyelenggara OSS**: `dokumentasi`, `changelog`, `create-pr`
-**DevOps**: `pakar-docker`, `kubernetes`, `terraform`, `pemerhatian-review`, `release-engineering`
-**Kejuruteraan AI**: `jurutera kain buruk`, `jurutera-prompt`, `corak-llm`, `reka bentuk eval`, `kejuruteraan konteks`

Kesemua tujuh berkas disandarkan sepenuhnya:

- `keperluan` → `4/4`
- `tindanan penuh` → `5/5`
- `reka bentuk` → `4/4`
- `keselamatan` → `4/4`
- `devops` → `5/5`
- `ai-engineer` → `5/5`
- `oss-maintainer` → `4/4`

Penyebaran skor semasa daripada katalog yang dijana:

- markah kualiti: `94, 95, 96, 97, 100`
- skor amalan terbaik: `98, 99, 100`
- skor keselamatan: semua kemahiran yang diterbitkan pada masa ini `95`

Perwakilan mewah:

- `omni-figma` → `kualiti 100`, `amalan_terbaik 100`
- `audit-kebolehcapaian` → `kualiti 99`, `amalan_terbaik 100`
- `auth-flows` → `kualiti 97`, `amalan_terbaik 99`
- `design-systems-ops` → `quality 97`, `best_practices 99`
- `kejuruteraan keluaran` → `kualiti 97`, `amalan_terbaik 99`
- `pemodelan ancaman` → `kualiti 97`, `amalan_terbaik 99`
- `kejuruteraan konteks` → `kualiti 97`, `amalan_terbaik 99`

Perwakilan hujung bawah di dalam jalur teratas semasa:

- `seni bina` → `kualiti 94`, `amalan_terbaik 98`
- `changelog` → `kualiti 94`, `amalan_terbaik 98`
- `create-pr` → `kualiti 95`, `amalan_terbaik 98`

Ini disengajakan. Penjaring kini membezakan "cemerlang" daripada "luar biasa" dan bukannya meratakan keseluruhan katalog di bahagian atas.---

## 🌟 Strengths

1.**Reka bentuk artifak pertama**
   Setiap permukaan masa jalan menggunakan katalog dan manifes yang dijana yang sama.
2.**Liputan protokol yang luas**
   CLI, API, MCP dan A2A wujud bersama tanpa membahagikan model data.
3.**Ergonomik produk tempatan yang kukuh**
   Pemasangan berpandu, cangkerang visual, `config-mcp` dan lalai larian kering menjadikan projek itu boleh digunakan di luar pengguna kuasa.
4.**Sikap keselamatan yang jujur**
   Tulisan tempatan yang tersenarai dibenarkan, pengimbasan statik, tandatangan, jumlah semak dan pengesahan keluaran semuanya eksplisit.
5.**Capaian MCP yang sihat**
   Projek ini kini menyokong set luas pelanggan berkebolehan MCP semasa tanpa berpura-pura sasaran tidak berdokumen adalah stabil.---

## 🔮 Opportunities

1.**Liputan berkas yang lebih dalam**
   Langkah seterusnya ialah pengkhususan dalam himpunan sedia ada, bukan hanya liputan luas.
2.**Semantik penjaring lebih kaya**
   Masih ada ruang untuk menilai kedalaman pek rujukan dan kualiti aliran kerja secara lebih semantik.
3.**Lebih ramai penulis pelanggan hanya jika dibenarkan**
   Pengembangan harus kekal berdisiplin dan terikat dengan dokumen rasmi yang stabil.
4.**Penguraian Pengesah**
   `skill_metadata.py` masih merupakan modul yang besar dan akan mendapat manfaat daripada penguraian dalaman dari semasa ke semasa.
5.**Peningkatan tadbir urus yang dihoskan**
   Garis dasar dalam proses semasa sudah cukup untuk pengehosan sendiri, tetapi penggunaan perusahaan akhirnya akan mahukan integrasi gerbang dan identiti luaran.