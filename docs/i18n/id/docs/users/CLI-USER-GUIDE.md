# 🧭 Omni Skills CLI User Guide (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Permukaan CLI publik lengkap dikirimkan oleh `omni-skills`.**

Gunakan panduan ini bila Anda ingin:

| Sasaran | Area Komando |
|:-----|:-------------|
| 📥 Pasang Skill atau Bundel | [Alur Penginstalan](#3️⃣-aliran instalasi) |
| 🔎 Cari katalog | [Penemuan Katalog](#4️⃣-penemuan-katalog) |
| 🔌 Konfigurasikan klien MCP | [Konfigurasi Klien MCP](#5️⃣-mcp-client-config) |
| 🖥️ Mulai layanan MCP, API, atau A2A | [Server MCP](#6️⃣-mcp-server) · [API](#7️⃣-katalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Gunakan shell terminal visual | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Jalankan diagnostik atau preflight | [Diagnostik](#🔟-diagnostik-dan-preflight) |---

## 1️⃣ Install and Entry Modes

Instal dengan `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Konteks | Apa yang Terjadi |
|:--------|:------------|
| 🖥️ TTY + tanpa argumen | Membuka alur**pemasangan terpandu**|
| ⚙️ Non-TTY + tanpa argumen | Instal non-interaktif ke `~/.gemini/antigravity/skills` |
| 🎨 `npx keterampilan omni ui` | Bermerek**Cangkang visual tinta**|
| 📝 `npx keterampilan omni ui --teks` | Garis baca**penggantian teks**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Perintah | Deskripsi |
|:--------|:-----------|
| `ui` | 🎨 Hub terminal visual |
| `temukan [kueri]` | 🔎 Penemuan katalog |
| `kategorikan ulang` | 🏷️ Manajemen taksonomi |
| `pasang [bendera]` | 📥 Pemasangan keterampilan/bundel |
| `config-mcp` | 🔌 Konfigurasi klien MCP |
| `mcp <stdio\|stream\|sse>` | 🔌 Mode server MCP |
| `api` | 🌐 API Katalog |
| `a2a` | 🤖 Waktu proses A2A |
| `asap` | 🧪 Rilis prapenerbangan |
| `publikasikan-periksa` | 📦 Pemeriksaan publikasi paket |
| `dokter` | 🩺 Diagnostik lingkungan |
| `bantuan` | ❓ Referensi perintah |---

## 3️⃣ Install Flows

### Mulai Cepat

```bash
npx omni-skills
npx omni-skills install --guided
```

> Alur terpandu memungkinkan Anda memilih:**klien target**→**paket atau keterampilan**→**jalur khusus**→**pratinjau sebelum eksekusi**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Bendera | Klien |
|:-----|:-------|
| `--antigravitasi` | 🟣 Antigravitasi *(default)* |
| `--claude` | 🟢 Kode Claude |
| `--kursor` | 🔵 Kursor |
| `--kodeks` | 🔴 Kodeks CLI |
| `--gemini` | 🟡 Gemini CLI |
| `--kiro` | 🟠 Kiro |
| `--kode terbuka` | ⚪ Kode Terbuka |

> Target pemasangan default (non-interaktif): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Bendera | Tujuan |
|:-----|:--------|
| `--kategori` | Filter berdasarkan kategori taksonomi |
| `--alat` | Filter berdasarkan alat yang didukung |
| `--risiko` | Filter berdasarkan tingkat risiko |
| `--sortir` | Urutkan hasil (misalnya, `kualitas`) |
| `--pesanan` | Urutkan urutan |
| `--kualitas minimum` | Skor kualitas minimum |
| `--min-praktik terbaik` | Skor praktik terbaik minimum |
| `--tingkat minimum` | Tingkat kematangan minimal |
| `--min-keamanan` | Skor keamanan minimum |
| `--status-validasi` | Filter berdasarkan status validasi |
| `--status-keamanan` | Filter berdasarkan status keamanan |---

## 5️⃣ MCP Client Config

Gunakan `config-mcp` untuk melihat pratinjau atau menulis konfigurasi MCP yang sadar klien.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<detail>
<summary>🔌 <strong>Permukaan klien berkemampuan konfigurasi</strong></summary>

| Klien | Sasaran |
|:-------|:--------|
| Claude | Pengaturan dan target desktop |
| Kursor | Pengguna dan ruang kerja |
| Kodeks | Konfigurasi TOML |
| kembar | Pengguna dan ruang kerja |
| Antigravitasi | Konfigurasi pengguna |
| Kode Terbuka | Pengguna dan ruang kerja |
| Klinik | Target kelas satu |
| CLI Kopilot GitHub | Pengguna dan repo |
| Kode Kilo | Pengguna, proyek, dan ruang kerja |
| Kiro | Pengguna dan ruang kerja |
| Zed | Ruang Kerja |
| Kode VS | Pengguna, ruang kerja, dan Kontainer Pengembang |
| Lanjutkan | Ruang Kerja YAML |
| Juni | Proyek dan pengguna |
| selancar angin | Konfigurasi pengguna |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**Sespan lokal**menambahkan: deteksi klien, pratinjau pemasangan, alur pemasangan/penghapusan, dan penulisan konfigurasi MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Rute | Tujuan |
|:------|:--------|
| `DAPATKAN /kesehatan` | Pemeriksaan kesehatan |
| `DAPATKAN /openapi.json` | Spesifikasi OpenAPI |
| `DAPATKAN /v1/keterampilan` | Daftar semua keterampilan |
| `DAPATKAN /v1/pencarian` | Cari di katalog |
| `GET /v1/skills/:id/archives` | Daftar arsip untuk suatu keterampilan |
| `GET /v1/skills/:id/download/archive?format=zip` | Unduh arsip keterampilan |
| `GET /v1/skills/:id/download/archive/checksums` | Unduh checksum |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Fitur | Status |
|:--------|:-------|
| 🔎 Penemuan sadar tugas | ✅ |
| 📋 Serah terima rencana pemasangan | ✅ |
| 🔄 Jajak Pendapat | ✅ |
| 📡 Streaming | ✅ |
| ❌ Pembatalan | ✅ |
| 🔔 Konfigurasi pemberitahuan push | ✅ |
| 💾 Ketekunan | Memori, JSON, dan SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Fitur

| Fitur | Deskripsi |
|:--------|:-----------|
| 🧭 Pemasangan terpandu | Pilih klien atau jalur khusus |
| 🔎 Cari + instal | Tidak perlu menghafal bendera |
| 🔌 Konfigurasi MCP | Pratinjau dan tulis alur |
| 🖥️ Peluncuran layanan | Startup terpandu MCP, API, dan A2A |
| 🕐 Terbaru | Pemasangan terkini dan peluncuran kembali layanan |
| ⭐ Favorit | Keterampilan dan bundel yang disimpan |
| 💾 Preset | Dinamakan preset instalasi dan layanan |

>**Jalur status:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Memeriksa: status repo, status instalasi lokal, ketersediaan runtime, dan masalah lingkungan.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Validasi: pembuatan, pengujian, keluaran paket, boot layanan, cakupan pemindai, dan pengemasan rilis.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Perintah | Tujuan |
|:-----------|:--------|:--------|
| 🆕 Pengguna baru | `npx keterampilan omni` | Dipandu instalasi pertama kali |
| 🔧 Operator | `npx omni-skills config-mcp --daftar-target` | Konfigurasikan MCP lokal |
| 🔧 Operator | `npx aliran mcp keterampilan omni --lokal` | Mulai sespan lokal |
| 📦 Pemelihara | `npx asap keterampilan omni` | Validasi rilis |
| 🔍 Pengguna kuat | `npx omni-skills menemukan keamanan --sortir kualitas --min-kualitas 95` | Temukan Skill Terbaiknya Terlebih Dahulu |---

## 📖 Related Documents

| Dok | Apa yang Dicakupnya |
|:----|:--------------|
| 🚀 [Memulai](./GETTING-STARTED.md) | Instal dan verifikasi dalam waktu kurang dari 2 menit |
| 📗 [Panduan Penggunaan](./USAGE.md) | Semua perintah, pola, dan mode CLI |
| 📦 [Paket](./BUNDLES.md) | Koleksi keterampilan yang dikurasi |
| 🔧 [Sistem Runbook](../operations/RUNBOOK.md) | Referensi operasional |
| 🔌 [Sespan MCP Lokal](../specs/LOCAL-MCP-SIDECAR.md) | Alat sistem file dan penulisan konfigurasi |