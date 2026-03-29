# 📗 Usage Guide (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Semua yang Anda perlukan untuk menjalankan keterampilan, menjalankan layanan, dan mengoperasikan runtime Omni Skills.**

Untuk alur kerja operasional penuh, lihat [🔧 System Runbook](../operations/RUNBOOK.md).
Untuk peta perintah pengguna akhir selengkapnya, lihat [🧭 Panduan Pengguna CLI](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Status | Detail |
|:-------|:--------|
| ✅**Tersedia sekarang**| 32 keterampilan yang dipublikasikan di bidang desain, arsitektur, debugging, dokumen, OSS, keamanan, DevOps, rekayasa AI, data, alat, dan alur kerja pembelajaran mesin |
| 📦**Paket**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer`, dan `oss-maintainer` didukung penuh hari ini |
| 🔌**jangkauan MCP**| 7 klien berkemampuan instalasi, 16 klien berkemampuan konfigurasi, 33 target konfigurasi kelas satu, 19 profil konfigurasi |
| 🤖**Daya tahan A2A**| Daya tahan lokal memori, JSON, atau SQLite, restart resume, pelaksana proses opsional, dan keikutsertaan koordinasi sewaan untuk pekerja bersama |---

## 🖥️ Invocation by Client

| Klien | Cara Memanggil | Jalur Keterampilan |
|:-------|:-------------|:------------|
| 🔵**Kode Claude**| `>> /nama-keterampilan bantu saya...` | `~/.claude/skills/` |
| 🟡**KLI Gemini**| `Gunakan @ nama-keterampilan untuk...` | `~/.gemini/skills/` |
| 🔴**Kodeks CLI**| `Gunakan @ nama-keterampilan untuk...` | `~/.codex/skills/` |
| 🟢**Kiro**| Keterampilan dimuat secara otomatis sesuai permintaan | `~/.kiro/skills/` |
| 🟣**Antigravitasi**| `Gunakan @ nama-keterampilan untuk...` | `~/.gemini/antigravity/skills/` |
| 🔵**Kursor**| `@nama-keterampilan` dalam obrolan | `~/.cursor/skills/` |
| ⚪**Kode Terbuka**| `opencode jalankan @ nama-keterampilan` | `.opencode/keterampilan/` |
| ⬛**Kopilot**| Tempel konten keterampilan secara manual | T/A |

Klien seperti Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline, dan Kilo Code terutama menggunakan aliran `config-mcp` daripada direktori keterampilan.---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 Catatan:**
> - Di terminal interaktif, `npx omni-skills` sekarang membuka alur instalasi yang dipandu
> - `npx omni-skills ui` membuka shell Tinta visual dengan tindakan pemasangan, penemuan, dan peluncuran layanan
> - shell visual menyimpan instalasi terbaru, peluncuran layanan terbaru, favorit, dan preset bernama di `~/.omni-skills/state/ui-state.json`
> - Di luar TTY, penginstalan penuh masih merupakan default jika tidak ada pemilih yang disediakan
> - `--skill` hanya menginstal keterampilan dipublikasikan yang dipilih
> - `--bundle` memperluas bundel dan menginstal anggota yang dipublikasikan yang dinyatakan dalam bundel yang dikurasi
> - `find` mendukung 12+ tanda filter: `kualitas`, `praktik_terbaik`, `tingkat_keterampilan`, `keamanan`, `kategori`, `alat`, `risiko`, dan banyak lagi
> - `config-mcp` adalah jalur yang tepat untuk produk berkemampuan MCP yang tidak memiliki direktori keterampilan kelas satu---

## 🔌 Runtime Commands

CLI adalah alat operasi terpadu, bukan sekadar penginstal.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Shell visual mendukung:

- instalasi terpandu dengan klien yang dikenal atau pemilihan jalur khusus
- cari-lalu-instal tanpa menghafal flag
- pratinjau konfigurasi klien MCP dan alur penulisan yang dipandu
- Startup yang dipandu MCP, API, dan A2A
- pemasangan terkini dan peluncuran kembali layanan
- instalasi tersimpan dan preset layanan
- keterampilan dan bundel favorit### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | Kiat |
|:--|:----|
| 1️⃣ | Referensikan keterampilan berdasarkan nama di prompt Anda |
| 2️⃣ | Berikan artefak, kode, atau konteks desain yang tepat yang dibutuhkan agen |
| 3️⃣ | Lebih suka `--skill` untuk jejak instalasi minimal |
| 4️⃣ | Gunakan `doctor` dan `smoke` sebelum men-debug masalah pengemasan atau runtime |
| 5️⃣ | Gunakan bundel sebagai pemasangan domain yang dikurasi sekarang karena ketujuh bundel starter didukung penuh |
| 6️⃣ | Gunakan `find --install --yes` untuk penemuan + instalasi dalam satu aliran |
| 7️⃣ | Lihat [runbook](../operations/RUNBOOK.md) untuk autentikasi, batas kapasitas, penandatanganan, dan verifikasi env vars |