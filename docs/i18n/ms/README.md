# 🧠 Omni Skills (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Katalog kemahiran yang memasang sendiri.**<br/>
CLI · API · MCP · A2A — semua daripada satu arahan `npx`.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Pasang dalam 1 min](#-pemasangan) · [🛠️ Pilih alat anda](#-pilih-alat-anda) · [📖 Panduan CLI](docs/users/CLI-USER-GUIDE.md) · [📦 Bundle](docs/users/BUNDLES.md) · [🔌-runtime] · [🔌-runtime] Kemahiran Omni](#-kenapa-kemahiran-omni)</div>

---

<div align="center">

### Gambaran Keseluruhan

</div>

| | Metrik | Nilai |
|:--|:-------|:------|
| 📦 |**Kemahiran Diterbitkan**| `32` merentas 15 kategori aktif |
| 🎯 |**Himpunan**| `7` himpunan susun atur yang disokong sepenuhnya |
| 🖥️ |**Pasang Pelanggan**| Pembantu pengekod AI berkebolehan memasang `7` |
| 🔌 |**Pelanggan MCP**| `16` pelanggan berkemampuan konfigurasi MCP |
| 🔐 |**Output Tersusun**| `32` derivatif bahasa Inggeris dipertingkatkan dalam `skills_omni/` |
| 📋 |**Keluaran Semasa**| `v0.1.2` |---

## Mula Pantas

>**Mencari kemahiran pengekodan AI, kemahiran Kod Claude, Kemahiran Kursor, kemahiran Codex CLI, kemahiran Gemini CLI, Kemahiran Antigraviti atau perpustakaan `SKILL.md` yang boleh dipasang?**
> Anda berada di tempat yang betul.### 1️⃣ What is this?

Omni Skills ialah**katalog kemahiran yang boleh dipasang dan masa jalan**untuk pembantu pengekodan AI. Pada terasnya, ia merupakan repositori awam bagi buku permainan `SKILL.md` yang boleh diguna semula — tetapi tidak seperti koleksi kemahiran biasa, repo**ialah**lapisan pengedaran dan masa jalan.

<butiran>
<summary>📋 <strong>Apa yang disertakan</strong></summary>

| Komponen | Penerangan |
|:----------|:-----------|
| 🧠**Kemahiran**| Buku permainan berasaskan `SKILL.md` dipilih susun untuk pembantu AI |
| 📦**Berwujud**| Manifes, himpunan dan arkib JSON yang dijana |
| 🧭**Pemasangan Berpandu**| Aliran pemasangan TTY dan terminal visual interaktif |
| 🌐**API Katalog**| API HTTP baca sahaja untuk carian, penemuan dan muat turun |
| 🔌**Pelayan MCP**| Penemuan, pengesyoran dan alatan konfigurasi sedar pelanggan |
| 🤖**Waktu Jalan A2A**| Orkestra tugas ejen kepada ejen |
| ✨**Saluran Paip Penambahbaikan**| Penambah peribadi menerbitkan terbitan bahasa Inggeris terpilih ke dalam `skills_omni/` |</details>

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

> 💬 *"Gunakan `@brainstorming` untuk merancang MVP SaaS."*
>
> 💬 *"Gunakan `@api-design` untuk menyemak reka bentuk titik akhir ini."*
>
> 💬 *"Gunakan `@debugging` untuk mengasingkan regresi ini."*### 5️⃣ Start with a bundle

| 🎯 Matlamat | Himpunan | Perintah |
|:---------|:-------|:--------|
| Kejuruteraan am | `keperluan` | `npx omni-skills --bundle essentials` |
| Penghantaran produk + apl | `timbunan penuh` | `npx omni-skills --bundle full-stack` |
| Reka bentuk sistem | `reka bentuk` | `npx omni-skills --bundel design` |
| Semakan keselamatan | `keselamatan` | `npx omni-skills --bundle security` |
| Infra dan keluaran | `devops` | `npx omni-skills --bundle devops` |
| Aplikasi LLM | `ai-jurutera` | `npx omni-skills --bundle ai-engineer` |
| penyelenggaraan OSS | `oss-maintainer` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Sebelum membandingkan berkas atau memilih laluan pemasangan, memahami lima blok binaan ini membantu:

| Konsep | Maksudnya |
|:--------|:-------------|
| 🧠**Kemahiran**| Buku permainan `SKILL.md` boleh diguna semula yang mengajar pembantu cara melaksanakan aliran kerja dengan baik |
| 📦**Artifak Katalog**| JSON dan output arkib yang dijana membolehkan carian, perbandingan, muat turun dan pasang |
| 🔌**Konfigurasi MCP**| Konfigurasi sisi pelanggan untuk pembantu menemui Kemahiran Omni melalui alatan MCP |
| 🤖**Waktu Jalan A2A**| Orkestra ejen kepada ejen untuk penemuan, pengesyoran dan penyerahan pelan pemasangan |
| ✨**Output Tersusun**| `skills_omni/` — permukaan dipertingkat yang diselenggara oleh Omni, berasingan daripada pengambilan hulu asli |

>**📝 Dasar Asli/Terpilih:**
> - `kemahiran/` menerima pengambilan huluan asli dalam mana-mana bahasa
> - `skills_omni/` sentiasa dipilih susun dan diterbitkan dalam bahasa Inggeris
> - `skills_omni/` ialah permukaan sehala dan tidak bergelung kembali ke dalam pengambilan asli---

## 💡 Why Omni Skills

>**Bukan hanya "repositori lain dengan kemahiran dalam folder."**
> Kemahiran Omni mempunyai kontrak yang lebih kukuh dan permukaan masa jalan yang lebih luas.

| Jika anda mahu… | 📁 Repo kemahiran tipikal | ✨ Kemahiran Omni |
|:------------|:----------------------|:--------------|
| Pasang ke dalam pembantu sebenar | Salinan manual atau skrip tersuai | `npx omni-skills`, pemasangan berpandu, UI visual, `--skill` terpilih dan `--bundle` |
| Cari dan bandingkan kemahiran | Semak imbas penurunan harga secara manual | Katalog yang dijana, penapisan, perancangan himpunan, cari, bandingkan dan pengesyoran |
| Gunakan data yang sama merentas alatan | Logik berasingan bagi setiap alat | Manifes dan katalog dikongsi untuk CLI, API, MCP dan A2A |
| Konfigurasikan pelanggan MCP | Fail edit tangan | `config-mcp`, pratonton sidecar tempatan, resipi yang dijana dan penulisan yang tersenarai dibenarkan |
| Keluaran amanah | Pembungkusan terbaik | Jumlah semak, arkib yang ditandatangani, pengesahan pengimbas, keluaran CI dan menerbitkan prapenerbangan |
| Pilih pengambilan komuniti | Apa sahaja tanah kekal seperti sedia ada | Pengambilan asli dalam `kemahiran/`, susun atur bahasa Inggeris dalam `skills_omni/` dengan atribusi |---

## 🖥️ Compatibility and Invocation

Kemahiran ini mengikut model `SKILL.md` dan boleh digunakan sebagai repositori biasa, tetapi pakej juga memasang dan mengkonfigurasinya merentasi permukaan yang luas:

>**7**klien berkebolehan memasang ·**16**klien berkemampuan konfigurasi MCP### 🎯 Install-Capable Clients

| Alat | Taip | Contoh Doa | Pasang Laluan |
|:-----|:-----|:-------------------|:------------|
| 🟢**Kod Claude**| CLI | `Gunakan sumbang saran untuk merancang ciri` | `~/.claude/skills` |
| 🔵**Kursor**| IDE | `@brainstorming bantu saya merancang ciri` | `~/.kursor/kemahiran` |
| 🟡**Gemini CLI**| CLI | `Gunakan sumbang saran untuk merancang ciri` | `~/.gemini/skills` |
| 🔴**Codex CLI**| CLI | `Gunakan sumbang saran untuk merancang ciri` | `~/.codex/skills` |
| 🟠**Kiro**| CLI / IDE | `Gunakan sumbang saran untuk merancang ciri` | `~/.kiro/kemahiran` |
| 🟣**Antigraviti**| IDE | `Gunakan @brainstorming untuk merancang ciri` | `~/.gemini/antigravity/skills` |
| ⚪**Kod Terbuka**| CLI | `opencode run @brainstorming` | `<ruang kerja>/.opencode/skills` |

<butiran>
<ringkasan>🔌 <strong>Liputan Konfigurasi MCP yang Lebih Luas (16 pelanggan)</strong></ringkasan>

Sasaran ini adalah sebahagian daripada permukaan konfigurasi MCP yang disokong, walaupun ia tidak memasang sasaran untuk direktori kemahiran:

| Pelanggan atau Surface | Jenis Sokongan | Nota |
|:------------------|:-----------|:------|
| Tetapan Claude dan desktop | Konfigurasi MCP | Tetapan, desktop dan aliran sedar projek |
| Kod VS | Konfigurasi MCP | Pengguna, ruang kerja, orang dalam dan sasaran Dev Container |
| Gemini | Konfigurasi MCP | Tetapan pengguna dan ruang kerja |
| Cline | Konfigurasi MCP | Sasaran konfigurasi kelas pertama |
| GitHub Copilot CLI | Konfigurasi MCP | Sasaran konfigurasi pengguna dan repo |
| Teruskan | Konfigurasi MCP | Penjanaan YAML ruang kerja |
| Luncur Angin | Konfigurasi MCP | Sasaran konfigurasi pengguna |
| Zed | Konfigurasi MCP | Sasaran konfigurasi ruang kerja |
| Angsa | Konfigurasi MCP | Sasaran konfigurasi pengguna dengan resipi yang dijana |
| Kod Kilo | Konfigurasi MCP | Sasaran pengguna, projek dan ruang kerja |
| Junie | Konfigurasi MCP | Projek dan sasaran konfigurasi pengguna |</details>

---

## Pasang

<jadual>
<tr>
<td width="50%">### Option A: Install with `npx` *(recommended)*

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

| Alat | Pasang Perintah | Penggunaan Pertama |
|:-----|:----------------|:----------|
| 🟢 Kod Claude | `npx omni-skills --claude` | `Gunakan sumbang saran untuk merancang ciri` |
| 🔵 Kursor | `npx omni-skills --cursor` | `@brainstorming bantu saya merancang ciri` |
| 🟡 Gemini CLI | `npx omni-skills --gemini` | `Gunakan sumbang saran untuk merancang ciri` |
| 🔴 Codex CLI | `npx omni-skills --codex` | `Gunakan sumbang saran untuk merancang ciri` |
| 🟣 Antigraviti | `npx omni-skills --antigravity` *(lalai)* | `Gunakan @brainstorming untuk merancang ciri` |
| 🟠 Kiro | `npx omni-skills --kiro` | `Gunakan sumbang saran untuk merancang ciri` |
| ⚪ Kod Terbuka | `npx omni-skills --opencode` | `opencode run @brainstorming` |
| 📂 Laluan tersuai | `npx omni-skills --path ./my-skills` | Bergantung pada alat anda |

> 📖**Tidak pasti di mana hendak bermula?**
> - [🚀 Bermula](docs/users/GETTING-STARTED.md) — pasang dan sahkan dalam masa kurang dari 2 minit
> - [🧭 Panduan Pengguna CLI](docs/users/CLI-USER-GUIDE.md) — rujukan arahan penuh
> - [📗 Panduan Penggunaan](docs/users/USAGE.md) — gesaan, corak dan mod masa jalan---

## 🔌 Runtime Surfaces

Kemahiran Omni bukan sahaja perpustakaan kemahiran. Ia mendedahkan**empat permukaan masa jalan**yang menggunakan katalog terjana yang sama:

| Permukaan | Negeri | Apa yang dilakukannya | Contoh |
|:--------|:------|:-------------|:--------|
| 🖥️**CLI**| ✅ Tersedia | Cari, pasang, diagnosis, UI visual, perkhidmatan but, semakan asap | `doktor kemahiran omni npx` |
| 🌐**API Katalog**| ✅ Tersedia | Katalog baca sahaja, cari, himpunan, bandingkan, pasang pelan, muat turun | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Tersedia | Penemuan, pengesyoran, pratonton pemasangan, kereta sampingan tempatan, aliran konfigurasi | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ Tersedia | Kitaran hayat tugas, lepas tangan, pengundian, penstriman, pembatalan, kegigihan | `npx omni-skills a2a --port 3335` |

<butiran>
<summary>🖥️ <strong>Perintah shell dan operator visual</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<butiran>
<summary>🔌 <strong>MCP transports and config</strong></summary>```bash
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

| Metrik | Kira |
|:-------|:------|
| 🧠 Kemahiran diterbitkan |**32**|
| 📂 Kategori aktif |**15**|
| 📦 Himpunan disokong penuh |**7**|
| ✨ Terbitan terpilih |**32**dalam `kemahiran_omni/` |### 📦 Bundle Availability

| Himpunan | Kemahiran | Ahli |
|:-------|:-------|:--------|
| 🧰 `keperluan` |**4/4**✅ | `kemahiran mencari` · `percambahan fikiran` · `seni bina` · `menyahpepijat` |
| 🌐 `tindanan penuh` |**5/5**✅ | `depan-reka bentuk` · `api-reka bentuk` · `pangkalan data-reka bentuk` · `omni-figma` · `auth-aliran` |
| 🎨 `rekaan` |**5/5**✅ | `reka bentuk hadapan` · `omni-figma` · `ops-sistem-reka` · `audit-kebolehcapaian` · `tadbir urus-token-reka` |
| 🛡️ `keselamatan` |**4/4**✅ | `security-auditor` · `vulnerability-scanner` · `insiden-response` · `threat-modeling` |
| ⚙️ `devops` |**5/5**✅ | `pakar-docker` · `kubernetes` · `terraform` · `observability-review` · `release-engineering` |
| 🤖 `ai-jurutera` |**7/7**✅ | `jurutera kain buruk` · `jurutera-prompt` · `corak-llm` · `reka bentuk eval` · `kejuruteraan-konteks` · `kontrak-data` · `servis model` |
| 🔧 `oss-maintainer` |**4/4**✅ | `kemahiran-cari` · `buat-pr` · `changelog` · `dokumentasi` |### ✨ Native Intake → Curated Output

| Permukaan | Tujuan | Bahasa |
|:--------|:--------|:---------|
| 📥 `kemahiran/` | Pengambilan asli | Sebarang bahasa |
| ✨ `kemahiran_omni/` | Output yang diselenggara Omni dipilih susun | Sentiasa Inggeris |

>**ℹ️**Perubahan kepada kemahiran asli diproses semula oleh penambah peribadi dan dimuat semula dalam garis dasar yang dipilih susun. Ini menjadikan `skills_omni/` sebagai**permukaan katalog yang dikekalkan**, bukan salinan kedua.---

## 🛡️ Security and Release Posture

> Kemahiran Omni menghantar cerita keluaran dan pengesahan yang lebih kukuh daripada repositori penurunan harga biasa.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<butiran>
<ringkasan>📋 <strong>Apa yang disahkan oleh saluran paip</strong></ringkasan>

- ✅ Pengesahan kemahiran dan penjanaan metadata
- ✅ Alat penormalan taksonomi dan pengkategorian semula
- ✅ Penjanaan katalog dan arkib
- ✅ Ujian automatik
- ✅ Laluan but API, MCP dan A2A
- ✅ Pengesahan arkib
- ✅ Pakej pra-penerbangan dengan `npm pack --dry-run`</details>

<butiran>
<ringkasan>🔐 <strong>Lepaskan postur</strong></ringkasan>

| Kawalan | Penerangan |
|:--------|:-----------|
| 🔒 Jumlah semak SHA-256 | Semakan manifes untuk semua arkib |
| ✍️ Artifak yang ditandatangani | Tandatangan terpisah pada artifak keluaran |
| 🤖 CI-dikuatkuasakan | Keluarkan pengesahan dalam CI sebelum penerbitan |
| 🦠 Pintu pengimbas | Aliran keluaran berpagar ClamAV dan VirusTotal |
| 📦 Keluaran GitHub | Penjanaan Keluaran GitHub automatik |
| 📋 penerbitan npm | Daripada tarball yang disahkan sahaja |
| 🔄 Auto keluaran | Pada kemahiran yang layak bergabung dengan `utama` |

**Keluaran automatik hanya dicetuskan apabila gabungan berubah:**
- `kemahiran/*/**`
- `kemahiran_omni/*/**`
- `data/bundles.json`

Perubahan dokumen sahaja**jangan**mencetuskan penerbitan pakej.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Doc | Apa yang Anda Akan Pelajari |
|:----|:-----------------|
| 🚀 [Bermula](docs/users/GETTING-STARTED.md) | Pasang, sahkan dan gunakan dalam masa kurang daripada 2 minit |
| 🧭 [Panduan Pengguna CLI](docs/users/CLI-USER-GUIDE.md) | Rujukan arahan penuh dan corak dunia sebenar |
| 📗 [Panduan Penggunaan](docs/users/USAGE.md) | Perintah CLI, mod pemasangan, masa jalan dan konfigurasi MCP |
| 📦 [Bundles](docs/users/BUNDLES.md) | Himpunan dipilih susun dan ketersediaan |
| 📚 [Katalog](docs/CATALOG.md) | Katalog jana automatik kemahiran diterbitkan |
| 🔧 [Buku Jalanan Sistem](dokumen/operasi/RUNBOOK.md) | Bina, layan, selamatkan dan selesaikan masalah |### 🏗️ For Architects

| Doc | Apa yang Anda Akan Pelajari |
|:----|:-----------------|
| 🗺️ [Peta Hala Tuju Ejen-Native](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Evolusi seni bina dan kawasan yang tinggal |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Keputusan monorepo teras |
| 🔬 [Analisis Pangkalan Kod](docs/architecture/CODEBASE-ANALYSIS.md) | Komposisi masa jalan dan sempadan sistem |
| 🌐 [API Katalog](docs/specs/CATALOG-API.md) | Titik akhir HTTP, penapisan, tadbir urus dan muat turun |
| 🧩 [Pemasang Berpandu CLI](docs/specs/CLI-GUIDED-INSTALLER.md) | Kontrak kelakuan untuk pemasang berpandu |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Cangkang visual dakwat dan model keadaan |
| 🔌 [Local MCP Sidecar](docs/specs/LOCAL-MCP-SIDECAR.md) | Alat sistem fail dan model senarai dibenarkan |
| 📊 [Matriks Sokongan Pelanggan](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Rujukan pelanggan dan penulis penuh |
| 🏷️ [Klasifikasi Kemahiran](docs/specs/SKILL-CLASSIFICATION.md) | Taksonomi, pemarkahan dan metadata |
| 🛡️ [Pengesahan Keselamatan](docs/specs/SECURITY-VALIDATION.md) | Pengimbas, arkib dan tandatangan |
| 📋 [Manifest Kemahiran](docs/specs/SKILL-MANIFEST.md) | Format manifes boleh dibaca mesin |### 🤝 For Contributors

| Doc | Apa yang Anda Akan Pelajari |
|:----|:-----------------|
| 📝 [Panduan Menyumbang](MENYUMBANG.md) | Aliran kerja Repo dan jangkaan PR |
| 🧾 [Aliran Kerja PR Kemahiran](docs/contributors/SKILL-PR-WORKFLOW.md) | Pengambilan asli, pemprosesan penambah, jangkaan pengulas |
| 📄 [Templat Kemahiran](docs/contributors/SKILL-TEMPLATE.md) | Pemula `SKILL.md` dengan frontmatter dan struktur |
| 🔬 [Anatomi Kemahiran](dokumen/penyumbang/ANATOMI-KEMAHIRAN.md) | Struktur dan jangkaan kualiti |
| ✅ [Bar Kualiti](docs/contributors/QUALITY-BAR.md) | Kriteria penerimaan |
| 🏆 [Buku Main Skor Tinggi](dokumen/penyumbang/BOOK-SKOR-TINGGI.md) | Perkara yang mendorong skor tinggi |---

## 🗂️ Repository Layout

| Laluan | Tujuan |
|:-----|:--------|
| 📂 `kemahiran/` | Kemahiran mengarang kanonik dan pengambilan asli |
| ✨ `kemahiran_omni/` | Terbitan dipertingkat yang dikekalkan oleh Omni |
| 📖 `dokumen/` | Pengguna, penyumbang, seni bina, operasi dan dokumentasi spesifikasi |
| 📦 `dist/` | Manifes, himpunan, katalog dan arkib yang dihasilkan |
| 📁 `data/` | Takrif himpunan dan data sokongan statik |
| 🧠 `pakej/teras-katalog/` | Masa jalan katalog kongsi |
| 🌐 `pakej/pelayan-api/` | API HTTP baca sahaja |
| 🔌 `pakej/pelayan-mcp/` | Pelayan MCP dan kereta sampingan tempatan |
| 🤖 `pakej/pelayan-a2a/` | A2A masa jalan dan orkestrasi tugas |
| 🖥️ `alat/tong sampah/` | Titik masuk CLI |
| 📚 `alat/lib/` | Pemasang dan pembantu UI |
| ⚙️ `alat/skrip/` | Skrip pengesahan, penjanaan, keluaran dan ujian |

>**ℹ️**`dist/` sengaja dibuat versi kerana artifak yang dijana adalah sebahagian daripada kontrak pemasangan, API, MCP, A2A, asap dan pelepasan.---

## 🤝 Contributing

Omni Skills menerima pengambilan kemahiran huluan asli di bawah `kemahiran/`.

| Peraturan | Butiran |
|:-----|:--------|
| 📥 Pengambilan asli | Mungkin kasar, dikarang dalam mana-mana bahasa |
| ✨ Output terpilih | `kemahiran_omni/` dikhaskan untuk terbitan Omni pengarang automasi |
| 🚫 Suntingan manual | Suntingan manual awam kepada `skills_omni/` ditolak |
| 🔄 Memproses semula | Penambah peribadi memproses semula perubahan asli dan menyegarkan garis dasar dipilih susun |

> 📖**Mulakan dengan:**[Panduan Menyumbang](CONTRIBUTING.md) · [Aliran Kerja PR Kemahiran](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Taip | Lesen |
|:-----|:--------|
| 💻 Kod dan alatan | [Lesen MIT](LESEN) |
| 📝 Dokumentasi dan kandungan kemahiran | [CC BY 4.0](KANDUNGAN LESEN) |---

<div align="center">

**Dibuat dengan 🧠 oleh Pasukan Kemahiran Omni**

[⭐ Bintangkan repo ini](https://github.com/diegosouzapw/omni-skills) · [🐛 Laporkan pepijat](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Perbincangan](https://github.com/diegosouzapw/diomnision-skills)lls</div>
