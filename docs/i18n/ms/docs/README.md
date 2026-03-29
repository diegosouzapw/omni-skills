# 📖 Omni Skills — Documentation Hub (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Rujukan utama untuk menggunakan, mengendalikan, memperluas dan memahami platform Kemahiran Omni semasa.**

Fail komuniti standard hidup dalam akar repositori:
[`README.md`](../README.md) · [`MENYUMBANG.md`](../MENYUMBANG.md) · [`KESELAMATAN.md`](../SECURITY.md) · [`KOD_KELAKUAN.md`](../CODE_md)---

## 📊 Status Snapshot

| Kawasan | Negeri | Butiran |
|:-----|:------|:--------|
| 🏗️**Waktu Jalan**| ✅ Semasa | CLI bersatu, cangkerang visual dakwat, API, MCP dan A2A semuanya dihantar dari pakej yang sama |
| 📦**Katalog**| 📌 32 kemahiran | 32 kemahiran `L3` diterbitkan merentas 15 kategori katalog aktif dan 7 himpunan disokong penuh |
| 🎯**Pasang**| ✅ Semasa | Pemasangan TTY berpandu, `--skill` dan `--bundle` terpilih, sokongan laluan tersuai dan pemasangan didorong penemuan |
| 🌐**API**| ✅ Semasa | API pendaftaran baca sahaja dengan pengesahan, masa jalan pentadbir, pengehadan kadar, senarai dibenarkan CORS/IP, mod penyelenggaraan dan muat turun |
| 🔌**MCP**| ✅ Semasa | `stdio` · `strim` · `sse`, mod kereta sisi tempatan, 7 pelanggan berkebolehan memasang, 16 pelanggan berkebolehan konfigurasi, 33 sasaran konfigurasi dan 19 profil konfigurasi |
| 🤖**A2A**| ✅ Semasa | Masa jalan tempatan yang mudah dahulu dengan ketahanan JSON/SQLite, mulakan semula resume, penstriman SSE, pembatalan, mod pelaksana luaran dan penyelarasan pajakan pilihan apabila didayakan secara eksplisit |
| 🛡️**Keselamatan**| ✅ Semasa | Pengimbas statik, ClamAV/VirusTotal pilihan, artifak keluaran bertandatangan, jumlah semak arkib dan pengesahan masa keluaran |
| 📋**Pengkelasan**| ✅ Semasa | Taksonomi kanonik, kematangan, sebaran kualiti semantik, sebaran amalan terbaik dan pemarkahan keselamatan |
| 📁**Arkib**| ✅ Semasa | Arkib `.zip` dan `.tar.gz` setiap kemahiran dengan manifes semak semak SHA-256 |
| 🔐**Menandatangani**| ✅ Semasa | Tandatangan terpisah yang dikuatkuasakan pada tag keluaran; aliran pemasangan setempat menggunakan manifes yang sama dan metadata checksum |
| 🧬**Aliran Pengambilan**| ✅ Semasa | Tanah kemahiran asli di bawah `kemahiran/`; Automasi PR menyemaknya dan mencadangkan terbitan dipertingkatkan Omni di bawah `kemahiran_omni/` |## 🔭 Current Project State

Landasan asas kini berada dalam keadaan projek aktif, dan gelombang pengembangan kategori kedua sudah ada dalam katalog. Projek itu kini harus dibaca sebagai garis dasar yang berfungsi dengan trek pengembangan masa depan pilihan:

- `v0.1.2` awam dan `v0.0.1` peribadi ialah lantai keluaran stabil semasa
- katalog kini merangkumi 32 kemahiran yang diterbitkan merentas 15 kategori aktif dan 7 himpunan yang disokong sepenuhnya
- pengambilan asli dan output `skills_omni/` dipilih susun adalah beroperasi, termasuk pengambilan asli berbilang bahasa dan output susun bahasa Inggeris sahaja
- permukaan protokol, automasi keluaran dan automasi peningkatan peribadi sedang dalam perkhidmatan, bukan dalam bootstrap

Pengembangan masa depan tetap disengajakan:

- mendalami `reka bentuk`, `alat`, `data-ai` dan `pembelajaran mesin`
- elakkan membuka semula kategori bukan kod asli yang tidak aktif sehingga trek kod asli semasa mempunyai kedalaman yang lebih kukuh
- pastikan lantai kualiti dan laluan semakan penambah utuh semasa berbuat demikian

Pelan itu kini dibahagikan kepada:

- gelombang pengembangan pertama yang telah selesai dalam [tugasan/TUGASAN-07-KATALOG-PENGKHUSUSAN-DAN-KATEGORI-PELUASAN.md](tugasan/TUGASAN-07-KATALOG-Pengkhususan-DAN-KATEGORI-PELUASAN.md)
- gelombang pengembangan kedua yang lengkap dalam [tugasan/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- dan tunggakan yang berpandangan ke hadapan dalam [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Soalan seni bina ini tidak lagi "terbuka" dalam amalan dan kini dianggap sebagai keputusan projek:

1.**Pengedaran kekal didahulukan dengan nyata dan arkib bertandatangan**
   Manifes yang boleh dibaca mesin kekal sebagai kontrak yang digunakan oleh CLI, API, MCP dan A2A. Arkib setiap kemahiran yang ditandatangani ialah permukaan muat turun dan keluaran berlapis di atas kontrak itu.
2.**Katalog peribadi atau premium hendaklah menggunakan semula skema manifes yang sama**
   Pengesahan dan dasar harus berlapis secara luaran, bukan dengan memotong bentuk manifes atau katalog.
3.**Konfigurasi MCP harus bertumpu pada beberapa keluarga eksport berkanun**
   Omni Skills kini menyeragamkan sekitar JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` dan TOML `[mcp_servers]`, sambil mengekalkan penulis yang dipesan lebih dahulu hanya apabila dokumen struktur pelanggan rasmi memerlukan dokumen struktur pelanggan yang berbeza.

Keputusan tersebut sejajar dengan MCP rasmi semasa dan dokumentasi pelanggan, termasuk:

- Pendaftaran MCP rasmi dan panduan sokongan sambungan di `modelcontextprotocol.io`
- Dokumen OpenAI Docs MCP dan Codex CLI di `developers.openai.com` dan `platform.openai.com`
- Sambungan MCP Kod VS dan dokumen produk di `code.visualstudio.com`
- dokumen pelanggan untuk Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman dan JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Apa yang Anda Akan Pelajari |
|:----|:------------------|
| 📘 [Bermula](pengguna/BERMULA.md) | Pasang, sahkan dan gunakan kemahiran pertama anda |
| 🧭 [Panduan Pengguna CLI](pengguna/CLI-USER-GUIDE.md) | Rujukan arahan penuh dan corak penggunaan CLI dunia sebenar |
| 📗 [Panduan Penggunaan](pengguna/USAGE.md) | Perintah CLI, mod pemasangan, arahan masa jalan dan aliran konfigurasi MCP |
| 📦 [Bundles](pengguna/BUNDLES.md) | Himpunan dipilih susun dan ketersediaan semasanya |
| 📚 [Katalog](KATALOG.md) | Katalog jana automatik kemahiran diterbitkan |
| 🔧 [Buku Jalan Sistem](operasi/BUKU RUNBOOK.md) | Bina, layan, selamatkan dan selesaikan masalah masa jalan |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Apa yang Anda Akan Pelajari |
|:----|:------------------|
| 🗺️ [Pelan Hala Tuju Ejen-Native](seni bina/AGENT-NATIVE-ROADMAP.md) | Evolusi seni bina, keputusan tertutup dan kawasan pengembangan yang tinggal |
| 🧭 [Pelan Hala Tuju CLI UX](seni bina/CLI-UX-ROADMAP.md) | Pelan sejarah dan bentuk semasa CLI berpandu dan visual |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGEN-NATIVE-WORKSPACE.md) | Monorepo teras dan keputusan masa jalanan bersama |
| 🔬 [Analisis Pangkalan Kod](architecture/CODEBASE-ANALYSIS.md) | Komposisi masa jalan semasa, kiraan dan sempadan sistem |
| 🌐 [Permukaan API Katalog](spesifikasi/KATALOG-API.md) | Titik akhir HTTP, penapisan, tadbir urus dan muat turun |
| 🧩 [Pemasang Berpandu CLI](spesifikasi/CLI-GUIDED-INSTALLER.md) | Kontrak kelakuan untuk pemasang berpandu |
| 🖥️ [CLI Visual Shell](spesifikasi/CLI-VISUAL-SHELL.md) | Cangkerang visual dakwat, model keadaan dan hab perkhidmatan |
| 🔌 [Kereta Side MCP Tempatan](spesifikasi/LOCAL-MCP-SIDECAR.md) | Alat yang menyedari sistem fail, model senarai yang dibenarkan dan penulisan konfigurasi |
| 🧭 [Matriks Sokongan Pelanggan](spesifikasi/CLIENT-SUPPORT-MATRIX.md) | Pelanggan CLI dan IDE yang disokong, penulis, sasaran manual dan rujukan sumber |
| 📊 [Klasifikasi Kemahiran](spesifikasi/KLASIFIKASI KEMAHIRAN.md) | Taksonomi, heuristik pemarkahan dan artifak metadata |
| 🛡️ [Pengesahan Keselamatan](specs/SECURITY-VALIDATION.md) | Pengimbas, arkib, tandatangan dan pengesahan keluaran |
| 📋 [Spesifikasi Manifes Kemahiran](spesifikasi/KEMAHIRAN-MANIFEST.md) | Format manifes boleh dibaca mesin dan kontrak keserasian |### 🤝 If You Want to **Contribute**

| Doc | Apa yang Anda Akan Pelajari |
|:----|:------------------|
| 📝 [Panduan Menyumbang](../MENYUMBANG.md) | Repo aliran kerja dan jangkaan permintaan tarik |
| 🧾 [Aliran Kerja PR Kemahiran](penyumbang/KEMAHIRAN-PR-ALIRAN KERJA.md) | Pengambilan asli, pemprosesan penambah automatik, penerbitan `kemahiran_omni/` dan jangkaan pengulas |
| 📄 [Templat Kemahiran](penyumbang/TEMPLATE-KEMAHIRAN.md) | Pemula `SKILL.md` dengan frontmatter dan struktur semasa |
| 🔬 [Anatomi Kemahiran](penyumbang/ANATOMI-KEMAHIRAN.md) | Struktur dan jangkaan kualiti untuk sesuatu kemahiran |
| ✅ [Bar Kualiti](penyumbang/BAR KUALITI.md) | Kriteria penerimaan untuk repositori |
| 🏆 [Buku Main Skor Tinggi](penyumbang/BUKU-MAIN-SKOR-TINGGI.md) | Perkara yang mendorong kematangan tinggi, kualiti, amalan terbaik dan skor keselamatan |
| 📋 [Tunggakan Tugasan](tugasan/README.md) | Tertunggak pelaksanaan terperinci untuk baki kerja awam dan swasta |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Perduaan `kemahiran omni` yang diterbitkan ialah titik kemasukan awam bersatu.```bash
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

Untuk permukaan arahan pengguna akhir yang lengkap, gunakan [Panduan Pengguna CLI](pengguna/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Talian paip binaan mengeluarkan fail yang boleh dibaca mesin yang memacu setiap permukaan masa jalan:

| Artifak | Tujuan |
|:---------|:--------|
| `metadata.json` | Pengesahan seluruh repositori dan ringkasan skor |
| `indeks_kemahiran.json` | Indeks kemahiran ternormal repo-lokal |
| `dist/catalog.json` | Katalog yang diterbitkan untuk carian dan penyenaraian |
| `dist/bundles.json` | Takrif himpunan dengan ketersediaan |
| `dist/manifests/<skill>.json` | Manifes boleh dibaca mesin setiap kemahiran |
| `dist/archives/<skill>.zip` | Arkib kemahiran (zip) |
| `dist/archives/<skill>.tar.gz` | Arkib kemahiran (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifes |

`dist/` tetap komited dengan sengaja. Artifak yang dijana ini adalah sebahagian daripada kontrak pemasangan, API, MCP, A2A, asap dan pelepasan.### 🌐 API

```bash
npx omni-skills api --port 3333
```

API pendaftaran baca sahaja untuk kemahiran, himpunan, perbandingan, perancangan pemasangan dan muat turun artifak.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Kereta sampingan tempatan kini menyokong penulisan konfigurasi MCP kelas pertama untuk:

- Kod Claude
- Kursor
- Kod VS dan Bekas Dev
- Gemini CLI
- Antigraviti
- Kiro
- Codex CLI
- Teruskan
- Luncur Angin
- OpenCode
- Cline
- GitHub Copilot CLI
- Kod Kilo
- Zed
- Angsa### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Kitaran hayat tugas, penstriman, ketekunan, mulakan semula pemulihan dan orkestrasi tempatan yang mudah dahulu. Pelaksanaan pajakan bersama tersedia apabila didayakan secara eksplisit; Redis kekal sebagai pilihan dihoskan lanjutan, bukan laluan tempatan lalai.---

## 🗂️ Repository Map

| Laluan | Tujuan |
|:-----|:--------|
| 📂 `kemahiran/` | Kemahiran mengarang kanonik |
| 📖 `dokumen/pengguna/` | Dokumentasi pengguna akhir |
| 🤝 `dokumen/penyumbang/` | Templat dan panduan penyumbang |
| 🏗️ `dokumen/seni bina/` | Pelan hala tuju, ADR dan analisis teknikal |
| 🔧 `dokumen/operasi/` | Buku jalan operasi |
| 📋 `dokumen/spesifikasi/` | Kontrak masa jalan, protokol dan artifak |
| 📚 `docs/CATALOG.md` | Katalog kemahiran yang dijana |
| 📦 `dist/` | Artifak yang boleh dibaca mesin yang dihasilkan |
| 🧠 `pakej/teras-katalog/` | Masa jalan katalog kongsi |
| 🌐 `pakej/pelayan-api/` | API HTTP baca sahaja |
| 🔌 `pakej/pelayan-mcp/` | Pelayan MCP dan kereta sampingan tempatan |
| 🤖 `pakej/pelayan-a2a/` | Pelayan A2A dan masa jalan tugas |
| 🖥️ `alat/tong sampah/` | Mata masuk CLI |
| 📚 `alat/lib/` | Pemasang dan pembantu UI |
| ⚙️ `alat/skrip/` | Pengesahan, penjanaan, pengesahan dan ujian |---

## 🧪 Release Validation

```bash
npm run smoke
```

Larian asap mengesahkan:

- ✅ pengesahan kemahiran dan penjanaan metadata
- ✅ alatan pengkategorian semula taksonomi
- ✅ penjanaan artifak katalog
- ✅ penurunan harga katalog yang dijana
- ✅ penjanaan arkib dan pengesahan
- ✅ suite ujian automatik
- ✅ `pek npm --dry-run`
- ✅ But dan kesihatan API
- ✅ But MCP dalam `stdio`, `strim` dan `sse`
- ✅ But A2A, tinjauan pendapat, penstriman SSE, pembatalan dan kitaran hayat konfigurasi tekan