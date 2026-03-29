# 🧭 Omni Skills CLI User Guide (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Permukaan CLI awam penuh dihantar oleh `kemahiran omni`.**

Gunakan panduan ini apabila anda ingin:

| Matlamat | Kawasan Perintah |
|:-----|:-------------|
| 📥 Pasang kemahiran atau himpunan | [Install Flows](#3️⃣-install-flows) |
| 🔎 Cari katalog | [Penemuan Katalog](#4️⃣-catalog-penemuan) |
| 🔌 Konfigurasikan pelanggan MCP | [Konfigurasi Pelanggan MCP](#5️⃣-mcp-client-config) |
| 🖥️ Mulakan perkhidmatan MCP, API atau A2A | [Pelayan MCP](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Gunakan cangkerang terminal visual | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Jalankan diagnostik atau prapenerbangan | [Diagnostik](#🔟-diagnostik-dan-preflight) |---

## 1️⃣ Install and Entry Modes

Pasang dengan `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Konteks | Apa Berlaku |
|:--------|:------------|
| 🖥️ TTY + tiada hujah | Membuka aliran**pemasangan berpandu**|
| ⚙️ Bukan TTY + tiada hujah | Pemasangan tidak interaktif ke `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Berjenama**Ink visual shell**|
| 📝 `npx omni-skills ui --text` | Baris baca**teks sandaran**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Perintah | Penerangan |
|:--------|:-----------|
| `ui` | 🎨 Hab terminal visual |
| `cari [pertanyaan]` | 🔎 Penemuan katalog |
| `mengkategorikan semula` | 🏷️ Pengurusan taksonomi |
| `pasang [bendera]` | 📥 Kemahiran / pemasangan bundle |
| `config-mcp` | 🔌 Konfigurasi pelanggan MCP |
| `mcp <stdio\|strim\|sse>` | 🔌 Mod pelayan MCP |
| `api` | 🌐 API Katalog |
| `a2a` | 🤖 A2A masa jalan |
| `asap` | 🧪 Keluarkan prapenerbangan |
| `semak-terbitkan` | 📦 Semakan penerbitan pakej |
| `doktor` | 🩺 Diagnostik persekitaran |
| `membantu` | ❓ Rujukan arahan |---

## 3️⃣ Install Flows

### Mula Pantas

```bash
npx omni-skills
npx omni-skills install --guided
```

> Aliran berpandu membolehkan anda memilih:**klien sasaran**→**himpunan atau kemahiran**→**laluan tersuai**→**pratonton sebelum pelaksanaan**### 🎯 Single Skill

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

| Benderakan | Pelanggan |
|:-----|:-------|
| `--antigraviti` | 🟣 Antigraviti *(lalai)* |
| `--claude` | 🟢 Kod Claude |
| `--kursor` | 🔵 Kursor |
| `--codex` | 🔴 Codex CLI |
| `--gemini` | 🟡 Gemini CLI |
| `--kiro` | 🟠 Kiro |
| `--opencode` | ⚪ Kod Terbuka |

> Sasaran pemasangan lalai (tidak interaktif): `~/.gemini/antigravity/skills`---

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

| Benderakan | Tujuan |
|:-----|:--------|
| `--kategori` | Tapis mengikut kategori taksonomi |
| `--alat` | Tapis mengikut alat yang disokong |
| `--risiko` | Tapis mengikut tahap risiko |
| `--sort` | Isih hasil (cth., `kualiti`) |
| `--pesanan` | Susun urutan |
| `--kualiti min` | Skor kualiti minimum |
| `--min-amalan-terbaik` | Skor amalan terbaik minimum |
| `--tahap min` | Tahap kematangan minimum |
| `--min-security` | Markah keselamatan minimum |
| `--status-pengesahan` | Tapis mengikut keadaan pengesahan |
| `--status-keselamatan` | Tapis mengikut keadaan keselamatan |---

## 5️⃣ MCP Client Config

Gunakan `config-mcp` untuk pratonton atau menulis konfigurasi MCP yang menyedari klien.### 📋 List Targets

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

<butiran>
<summary>🔌 <strong>Config-capable client surface</strong></summary>

| Pelanggan | Sasaran |
|:-------|:--------|
| Claude | Tetapan dan sasaran desktop |
| Kursor | Pengguna dan ruang kerja |
| Codex | Konfigurasi TOML |
| Gemini | Pengguna dan ruang kerja |
| Antigraviti | Konfigurasi pengguna |
| OpenCode | Pengguna dan ruang kerja |
| Cline | Sasaran kelas pertama |
| GitHub Copilot CLI | Pengguna dan repo |
| Kod Kilo | Pengguna, projek dan ruang kerja |
| Kiro | Pengguna dan ruang kerja |
| Zed | Ruang kerja |
| Kod VS | Pengguna, ruang kerja dan Bekas Dev |
| Teruskan | Ruang kerja YAML |
| Junie | Projek dan pengguna |
| Luncur Angin | Konfigurasi pengguna |</details>

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

>**Kereta sampingan tempatan**menambah: pengesanan pelanggan, pasang pratonton, pasang/alih keluar aliran dan penulisan konfigurasi MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Laluan | Tujuan |
|:------|:--------|
| `DAPATKAN /healthz` | Pemeriksaan kesihatan |
| `DAPATKAN /openapi.json` | Spesifikasi OpenAPI |
| `DAPATKAN /v1/kemahiran` | Senaraikan semua kemahiran |
| `DAPATKAN /v1/carian` | Cari katalog |
| `DAPATKAN /v1/kemahiran/:id/archives` | Senaraikan arkib untuk kemahiran |
| `DAPATKAN /v1/kemahiran/:id/download/archive?format=zip` | Muat turun arkib kemahiran |
| `DAPATKAN /v1/kemahiran/:id/download/archive/checksums` | Muat turun jumlah semak |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Ciri | Status |
|:--------|:-------|
| 🔎 Penemuan sedar tugas | ✅ |
| 📋 Penyerahan pelan pemasangan | ✅ |
| 🔄 Undian | ✅ |
| 📡 Penstriman | ✅ |
| ❌ Pembatalan | ✅ |
| 🔔 Konfigurasi pemberitahuan tolak | ✅ |
| 💾 Kegigihan | Memori, JSON dan SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Ciri-ciri

| Ciri | Penerangan |
|:--------|:-----------|
| 🧭 Pemasangan berpandu | Pilih pelanggan atau laluan tersuai |
| 🔎 Cari + pasang | Tiada hafalan bendera diperlukan |
| 🔌 Konfigurasi MCP | Pratonton dan tulis aliran |
| 🖥️ Pelancaran perkhidmatan | Permulaan berpandu MCP, API dan A2A |
| 🕐 Terkini | Pemasangan baru-baru ini dan pelancaran semula perkhidmatan |
| ⭐ Kegemaran | Kemahiran dan berkas yang disimpan |
| 💾 Pratetap | Pratetap pemasangan dan perkhidmatan dinamakan |

>**Laluan negeri:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Memeriksa: keadaan repo, keadaan pemasangan setempat, ketersediaan masa jalan dan isu persekitaran.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Mengesahkan: binaan, ujian, keluaran pakej, but perkhidmatan, liputan pengimbas dan pembungkusan keluaran.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Perintah | Tujuan |
|:-----------|:--------|:--------|
| 🆕 Pengguna baharu | `npx omni-skills` | Pemasangan kali pertama berpandu |
| 🔧 Operator | `npx omni-skills config-mcp --list-targets` | Konfigurasikan MCP tempatan |
| 🔧 Operator | `npx omni-skills mcp stream --local` | Mulakan kereta sampingan tempatan |
| 📦 Penyelenggara | `npx omni-skills smoke` | Sahkan keluaran |
| 🔍 Pengguna kuasa | `npx omni-skills find security --sort quality --min-quality 95` | Cari kemahiran terbaik dahulu |---

## 📖 Related Documents

| Doc | Apa yang Dicakupinya |
|:----|:--------------|
| 🚀 [Bermula](./MULA-MULA.md) | Pasang dan sahkan dalam masa kurang dari 2 minit |
| 📗 [Panduan Penggunaan](./USAGE.md) | Semua arahan, corak dan mod CLI |
| 📦 [Bundles](./BUNDLES.md) | Koleksi kemahiran dipilih susun |
| 🔧 [Buku Jalanan Sistem](../operations/RUNBOOK.md) | Rujukan operasi |
| 🔌 [Local MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Alat sistem fail dan penulisan konfigurasi |