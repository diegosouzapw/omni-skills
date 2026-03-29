# 📗 Usage Guide (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Semua yang anda perlukan untuk menggunakan kemahiran, menjalankan perkhidmatan dan mengendalikan masa jalan Kemahiran Omni.**

Untuk aliran kerja operasi penuh, lihat [🔧 System Runbook](../operations/RUNBOOK.md).
Untuk peta arahan pengguna akhir penuh, lihat [🧭 Panduan Pengguna CLI](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Status | Butiran |
|:-------|:--------|
| ✅**Boleh didapati sekarang**| 32 kemahiran diterbitkan merentas reka bentuk, seni bina, nyahpepijat, dokumen, OSS, keselamatan, DevOps, kejuruteraan AI, data, alatan dan aliran kerja pembelajaran mesin |
| 📦**Himpunan**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` dan `oss-maintainer` disokong sepenuhnya hari ini |
| 🔌**Capaian MCP**| 7 pelanggan berkebolehan memasang, 16 pelanggan berkebolehan konfigurasi, 33 sasaran konfigurasi kelas pertama, 19 profil konfigurasi |
| 🤖**Ketahanan A2A**| Ketahanan tempatan memori, JSON atau SQLite, mulakan semula resume, pelaksana proses pilihan dan penyelarasan pajakan ikut serta untuk pekerja kongsi |---

## 🖥️ Invocation by Client

| Pelanggan | Cara Menjemput | Laluan Kemahiran |
|:-------|:-------------|:------------|
| 🔵**Kod Claude**| `>> /nama kemahiran tolong saya...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Gunakan @skill-name untuk...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Gunakan @skill-name untuk...` | `~/.codex/skills/` |
| 🟢**Kiro**| Muatan automatik kemahiran atas permintaan | `~/.kiro/skills/` |
| 🟣**Antigraviti**| `Gunakan @skill-name untuk...` | `~/.gemini/antigravity/skills/` |
| 🔵**Kursor**| `@nama-kemahiran` dalam sembang | `~/.kursor/kemahiran/` |
| ⚪**Kod Terbuka**| `opencode run @skill-name` | `.opencode/skills/` |
| ⬛**Copilot**| Tampalkan kandungan kemahiran secara manual | T/T |

Pelanggan seperti Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline dan Kilo Code terutamanya menggunakan aliran `config-mcp` dan bukannya direktori kemahiran.---

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

>**📌 Nota:**
> - Dalam terminal interaktif, `npx omni-skills` kini membuka aliran pemasangan berpandu
> - `npx omni-skills ui` membuka cangkerang Dakwat visual dengan tindakan pemasangan, penemuan dan pelancaran perkhidmatan
> - cangkerang visual mengekalkan pemasangan terbaharu, pelancaran perkhidmatan terkini, kegemaran dan pratetap bernama dalam `~/.omni-skills/state/ui-state.json`
> - Di luar TTY, pemasangan penuh masih menjadi lalai apabila tiada pemilih disediakan
> - `--skill` hanya memasang kemahiran diterbitkan yang dipilih
> - `--bundle` mengembangkan himpunan dan memasang ahli yang diterbitkan yang diisytiharkan dalam himpunan dipilih susun
> - `find` menyokong 12+ bendera penapis: `kualiti`, `amalan_terbaik`, `peringkat_kemahiran`, `keselamatan`, `kategori`, `alat`, `risiko` dan banyak lagi
> - `config-mcp` ialah laluan yang betul untuk produk berkemampuan MCP yang tidak mempunyai direktori kemahiran kelas pertama---

## 🔌 Runtime Commands

CLI ialah alat operasi bersatu, bukan sekadar pemasang.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Cangkang visual menyokong:

- pemasangan berpandu dengan pelanggan yang diketahui atau pemilihan laluan tersuai
- cari-kemudian-pasang tanpa menghafal bendera
- pratonton konfigurasi klien MCP berpandu dan aliran tulis
- Permulaan berpandu MCP, API dan A2A
- pemasangan baru-baru ini dan pelancaran semula perkhidmatan
- pratetap pemasangan dan perkhidmatan yang disimpan
- kemahiran kegemaran dan berkas### 🩺 Diagnostics

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

| # | Petua |
|:--|:----|
| 1️⃣ | Rujuk kemahiran mengikut nama dalam gesaan anda |
| 2️⃣ | Sediakan konteks artifak, kod atau reka bentuk yang tepat yang diperlukan oleh ejen |
| 3️⃣ | Lebih suka `--kemahiran` untuk jejak pemasangan minimum |
| 4️⃣ | Gunakan `doktor` dan `smoke` sebelum menyahpepijat isu pembungkusan atau masa jalan |
| 5️⃣ | Gunakan himpunan sebagai pemasangan domain dipilih sekarang kerana kesemua tujuh himpunan permulaan disokong sepenuhnya |
| 6️⃣ | Gunakan `find --install --yes` untuk penemuan + pemasangan dalam satu aliran |
| 7️⃣ | Lihat [runbook](../operations/RUNBOOK.md) untuk pengesahan, had kadar, tandatangan dan pengesahan env vars |