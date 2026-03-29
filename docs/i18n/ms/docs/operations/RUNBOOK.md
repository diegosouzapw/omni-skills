# 🔧 System Runbook (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Panduan operasi lengkap untuk membina, mengesahkan, menyajikan, mengamankan dan menyelesaikan masalah Kemahiran Omni.**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| Perintah | Apa yang Dilakukan |
|:--------|:-------------|
| `npm run validate` | Mengesahkan `SKILL.md`, menjana semula `metadata.json`, mengira taksonomi/kematangan/kualiti/keselamatan |
| `npm menjalankan taksonomi:laporan` | Menunjukkan cadangan drift kategori tanpa menulis semula fail |
| `npm run verify:scanners` | Mengesahkan liputan pengimbas yang direkodkan dalam metadata kemahiran yang dijana |
| `npm run release:notes` | Menjana nota keluaran tersuai daripada metadata, himpunan dan sejarah git |
| `npm run build` | Menjana semula katalog/manifes/arkib/semak, mengesahkan liputan pengimbas dan arkib, membina semula `docs/CATALOG.md` |
| `ujian npm` | Suite asap penuh merentas aliran CLI, API, MCP, sidecar dan arkib |---

## 🖥️ Visual Shell

CLI yang diterbitkan kini termasuk cangkerang pengendali berasaskan Dakwat:```bash
npx omni-skills ui
```

Keupayaan semasa:

- pemasangan berpandu untuk pelanggan yang diketahui dan laluan tersuai
- aliran cari-kemudian-pasang
- Wizard pelancaran MCP
- Wizard pelancaran API
- Wizard pelancaran A2A
- pemasangan baru-baru ini dan pelancaran semula perkhidmatan
- dinamakan pemasangan dan pratetap perkhidmatan

Laluan negeri setempat:```text
~/.omni-skills/state/ui-state.json
```

Undur:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

Pengimbas statik menyemak semua kemahiran secara automatik:

| Keluarga Peraturan | Contoh |
|:------------|:---------|
| 🎭 Suntikan segera | Corak exfiltration, arahan mengatasi |
| 💣 Perintah yang merosakkan | `rm -rf`, `format`, `mkfs` |
| 🔑 Laluan yang mencurigakan | `/etc/shadow`, `~/.ssh`, fail kelayakan |
| ⚠️ Primitif berisiko | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Memerlukan `clamscan` dalam `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Carian cincang sahaja — fail yang tidak diketahui**tidak dimuat naik**secara lalai.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Pintu pelepasan yang ketat:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Arkib dihasilkan secara automatik oleh `npm run build`:

| Output | Laluan |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Jumlah semak | `dist/archives/<skill>.checksums.txt` |

`dist/` dilakukan secara sengaja dalam repositori ini. Katalog, manifes, himpunan dan arkib yang dijana ialah input masa jalan untuk aliran pemasangan CLI, permukaan muat turun API, pratonton MCP, serahan tugas A2A, ujian asap dan pengesahan keluaran.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Pilihan ganti kunci awam:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Jika tiada kunci awam dibekalkan, binaan memperoleh satu melalui `openssl` ke dalam `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Dasar versi:

- penambahan tampalan sehingga `.10`
- selepas `.10`, keluaran seterusnya digulung kecil dan menetapkan semula tampung kepada `.0`

Contoh:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Senario | Perintah |
|:---------|:--------|
| 📥 Pemasangan lalai (Antigraviti) | `npx omni-skills` |
| 🎯 Kemahiran khusus + pelanggan | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Penemuan → pasang | `npx omni-skills find figma --tool cursor --install --yes` |
| 📦 Pemasangan bundle | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Sahkan pemasangan | `doktor kemahiran omni npx` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Penapis | Benderakan | Contoh |
|:-------|:-----|:--------|
| 📂 Kategori | `--kategori` | `--pembangunan kategori` |
| 🖥️ Alat | `--alat` | `--alat kursor` |
| ⚠️ Risiko | `--risiko` | `--selamat berisiko` |
| 📊 Isih | `--sort` | `--kualiti isihan\|amalan terbaik\|tahap\|keselamatan\|nama` |
| 🔄 Pesanan | `--pesanan` | `--order asc\|desc` |
| ⭐ Kualiti min | `--kualiti min` | `--kualiti min 80` |
| 📋 Min BP | `--min-amalan-terbaik` | `--min-amalan-terbaik 60` |
| 🎯 Tahap min | `--tahap min` | `--min-tahap 2` |
| 🛡️ Keselamatan minimum | `--min-security` | `--min-security 90` |
| ✅ Pengesahan | `--status-pengesahan` | `--status-pengesahan lulus` |
| 🛡️ Keselamatan | `--status-keselamatan` | `--status-keselamatan lulus` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Kaedah | Titik akhir | Tujuan |
|:-------|:---------|:--------|
| `DAPAT` | `/healthz` | Pemeriksaan kesihatan |
| `DAPAT` | `/openapi.json` | Spesifikasi OpenAPI 3.1 |
| `DAPAT` | `/v1/kemahiran` | Senaraikan dengan penapis |
| `DAPAT` | `/v1/carian` | Carian teks penuh |
| `DAPAT` | `/v1/kemahiran/:id/archives` | Penyenaraian arkib |
| `DAPAT` | `/v1/skills/:id/download/archive?format=zip` | Muat turun arkib |
| `DAPAT` | `/v1/kemahiran/:id/download/archive/checksums` | Manifes jumlah semak |### 🔐 Hosted API Hardening

| Ciri | Perintah |
|:--------|:--------|
| 🔑 Pengesahan pembawa | `OMNI_SKILLS_HTTP_BEARER_TOKEN=ganti-saya npx omni-skills api` |
| 🗝️ Pengesahan kunci API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Pengesahan masa jalan pentadbir | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-rahsia npx omni-skills api` |
| 🚦 Kadar mengehadkan | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Pengelogan audit | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |
| 🌍 Senarai dibenarkan CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 Senarai kebenaran IP | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Mod penyelenggaraan | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁 Proksi yang dipercayai | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 `/healthz` kekal terbuka mengikut reka bentuk; laluan katalog memerlukan pengesahan apabila didayakan. `GET /admin/runtime` memerlukan token pentadbir apabila dikonfigurasikan dan mengembalikan petikan tadbir urus langsung.---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

Kereta sisi kini boleh pratonton atau menulis konfigurasi MCP untuk:

- Tetapan pengguna dan projek Claude
- Konfigurasi Desktop Claude
- Konfigurasi pengguna Cline
- Konfigurasi pengguna dan repositori GitHub Copilot CLI
- Konfigurasi pengguna dan ruang kerja kursor
- Konfigurasi Codex TOML
- Tetapan pengguna dan projek Gemini
- Konfigurasi pengguna dan projek Kilo CLI
- Konfigurasi ruang kerja kilo
- Tetapan pengguna dan projek Kiro
- Konfigurasi pengguna dan ruang kerja OpenCode
- Teruskan konfigurasi YAML ruang kerja
- Konfigurasi pengguna Windsurf
- Konfigurasi ruang kerja Zed
- ruang kerja `.mcp.json`
- Ruang kerja Kod VS dan konfigurasi pengguna
- Konfigurasi Dev Container

`configure_client_mcp` juga mengembalikan `resipi` setiap pelanggan supaya pengendali mendapat CLI yang setara atau langkah persediaan manual bersama-sama dengan pratonton.### 🧾 MCP Config Preview and Write Flow

Gunakan CLI bersatu apabila anda mahu penjanaan konfigurasi tanpa memanggil alat MCP secara langsung:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Cangkang visual mendedahkan aliran kerja yang sama melalui:

- `npx omni-skills ui`
- `Perkhidmatan`
- `Konfigurasikan klien MCP`

Perintah kekal dalam mod pratonton melainkan `--write` diluluskan.### 🔐 Hosted MCP Hardening

Env vars yang sama seperti API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Laluan yang dilindungi**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` tetap dibuka.---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

Laluan tempatan lalai kekal mudah dahulu:

- Kegigihan `json` atau `sqlite` boleh dijalankan dengan pengundian baris gilir dilumpuhkan
- tetapkan `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` hanya apabila anda mahukan tuntutan berbilang pekerja dan pajakan failover
- kekalkan penyelarasan Redis sebagai pilihan dihoskan lanjutan, bukan garis dasar### 🧱 Multi-Worker Lease Setup

Jalankan lebih daripada satu nod A2A terhadap kedai SQLite yang sama untuk mendapatkan failover berasaskan pajakan:```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Jika pekerja meninggal dunia semasa tugas sedang `berfungsi`, pekerja lain boleh menuntutnya semula selepas pajakan tamat dan meneruskan pelaksanaan.### 🟥 Redis Coordination

Untuk penempatan yang dihoskan atau berbilang nod yang tidak mahu koordinasi baris gilir terikat pada gedung SQLite yang dikongsi, tukar penyelaras kepada Redis:```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Dalam mod ini:

- ketekunan masih hidup dalam JSON atau SQLite
- tuntutan tugas dan pemilikan pajakan berpindah ke Redis
- berbilang nod A2A boleh berkongsi baris gilir tanpa bergantung pada penyelarasan peringkat baris SQLite### 📡 Endpoints

| Kaedah | Laluan | Tujuan |
|:-------|:-----|:--------|
| `DAPAT` | `/healthz` | Pemeriksaan kesihatan |
| `DAPAT` | `/.well-known/agent.json` | Kad Ejen (penemuan A2A) |
| `POST` | `/a2a` | Titik akhir JSON-RPC untuk tugasan dan penstriman |### 🧭 Supported JSON-RPC Methods

| Kaedah | Tujuan |
|:-------|:--------|
| `mesej/hantar` | Mulakan atau teruskan tugasan |
| `mesej/strim` | Mulakan tugas dan strim kemas kini SSE |
| `tugas/dapat` | Tinjau petikan tugas |
| `tugas/batal` | Batalkan tugasan aktif |
| `tugas/langgan semula` | Sambung semula kemas kini SSE untuk tugas sedia ada |
| `tugas/pushNotificationConfig/set` | Daftar push webhook |
| `tasks/pushNotificationConfig/get` | Baca konfigurasi push |
| `tasks/pushNotificationConfig/list` | Senaraikan konfigurasi push untuk tugasan |
| `tugas/pushNotificationConfig/padam` | Alih keluar konfigurasi push |### 📡 Task Lifecycle

Masa jalan semasa menyokong keadaan tugas ini:

- `diserahkan`
- `bekerja`
- `input-diperlukan`
- `selesai`
- `dibatalkan`
- `gagal`

Tugasan diteruskan sama ada pada fail JSON atau stor SQLite dan dimuatkan semula semasa dimulakan semula. Tugasan yang telah selesai dan tergendala masih tersedia. Tugasan yang masih `diserahkan` atau `berfungsi` semasa penutupan dipulihkan dengan metadata mulakan semula eksplisit dan disambung semula secara automatik secara lalai.### 🧪 Example: Start a Task

```bash
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
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

Repositori kini mempunyai dua aliran kerja:

| Aliran kerja | Pencetus | Tujuan |
|:---------|:--------|:--------|
| `validate.yml` | Tekan/PR ke `utama` | Membina, menguji dan mengesahkan artifak yang dijana adalah komited |
| `release.yml` | Tekan teg `v*` atau penghantaran manual | Jalankan pengimbas gred keluaran, sahkan teg versi, tandatangani artifak, bungkus tarball, terbitkan ke npm dan buat Keluaran GitHub |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Rahsia | Digunakan Oleh | Tujuan |
|:-------|:--------|:--------|
| `VT_API_KEY` atau `VIRUSTOTAL` | `release.yml` | Memerlukan carian cincang VirusTotal dalam binaan keluaran |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` atau `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Kunci persendirian yang diperlukan untuk menandatangani arkib terpisah dalam CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` atau `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Pilihan ganti kunci awam; sebaliknya diperoleh daripada kunci persendirian |
| `NPM_TOKEN` | `publish-npm` kerja | Sahkan `npm publish` untuk keluaran teg |### 🦠 Release Scanner Policy

`release.yml` menetapkan atau menyediakan:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || rahsia.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` daripada storan temp runner

Ini bermakna setiap keluaran berasaskan teg mesti:

- pasang dan segarkan semula ClamAV pada pelari
- jana semula metadata dengan ClamAV didayakan
- menjana semula metadata dengan VirusTotal didayakan
- menyahkod bahan utama tandatangan CI ke dalam storan temp pelari
- lulus `npm run verify:scanners:strict`
- lulus `npm run verify:archives:strict`
- lulus ujian dan pengesahan pakej sebelum npm diterbitkan
- menjana nota keluaran tersuai daripada metadata katalog dan sejarah git
- buat Keluaran GitHub dengan aset keluaran yang dilampirkan selepas diterbitkan---

## 1️⃣1️⃣ Environment Variables Reference

| Pembolehubah | Tujuan | Lalai |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Gantikan laluan akar katalog | Auto dikesan |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Laluan tulis tambahan yang dibenarkan | Akar pelanggan yang diketahui |
| `OMNI_SKILLS_MCP_MODE` | Tetapkan kepada `tempatan` untuk sidecar | Jauh |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Bendera Alt untuk mod tempatan | `0` |
| `OMNI_SKILLS_API_BASE_URL` | URL API Awam untuk MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | URL pangkalan awam | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Token pengesahan pembawa | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kekunci API dipisahkan koma | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Token pengesahan masa jalan pentadbir | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Permintaan maksimum setiap tetingkap | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Tetingkap had kadar (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Dayakan pengelogan audit | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` atau `teks` output audit | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Laluan fail log audit pilihan | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Senarai dibenarkan asal CORS yang dipisahkan koma | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Senarai dibenarkan IP atau CIDR yang dipisahkan koma | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Tetapan proksi kepercayaan ekspres | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Dayakan respons penyelenggaraan | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Penyelenggaraan `Cuba Semula-Selepas` saat | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Kelewatan tugas async simulasi | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`, `sqlite` atau `memory` stor tugas | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Fail stor tugas A2A tersuai | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Dayakan pengundian baris gilir dikongsi untuk pekerja yang sedar pajakan | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `stor`, `sqlite`, `local` atau `redis` penyelaras | `kedai` |
| `OMNI_SKILLS_A2A_REDIS_URL` | URL Redis untuk penyelarasan luaran | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Awalan kunci redis untuk metadata baris gilir | `kemahiran-omni:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Selang pengundian beratur untuk pekerja pajakan | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Tempoh pajakan sebelum pekerja lain boleh menuntut semula tugas | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Pengecam pekerja stabil untuk pemilikan pajakan dan diagnostik | Nama hos + PID + akhiran rawak |
| `OMNI_SKILLS_A2A_EXECUTOR` | `sebaris` atau `proses` pelaksana tugas | `sebaris` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Gantikan arahan pekerja luar | Perduaan nod |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON tatasusunan pekerja luar args | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TUGAS` | Sambung semula tugasan yang diserahkan/kerjakan semula semasa but | `1` |
| `KEMAHIRAN_OMNI_A2A_BENARKAN_BUKU_WEB_TERJAMIN` | Benarkan webhook bukan HTTPS di luar localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Dayakan pengimbasan ClamAV | `0` |
| `KUNCI_API_VT` | Kunci API VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Kunci peribadi untuk menandatangani | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Tolak kunci awam | Autoterbit |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Bina semula dengan `npm run build`
2. Jalankan semula `npm run verify:archives`
3. Jika tandatangan didayakan, sahkan kunci awam dan ketersediaan `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- Sahkan `VT_API_KEY` wujud dalam rahsia repositori
- Sahkan `freshclam` berjaya pada pelari
- Bina semula secara tempatan dengan `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Jalankan semula `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- Sahkan `NPM_TOKEN` wujud dalam rahsia repositori
- Sahkan teg Git sepadan dengan versi `package.json` dengan tepat
- Semak sama ada tarball yang dimuat naik oleh `release-verify` wujud dalam artifak aliran kerja### ✍️ Release Signing Fails in CI

- Sahkan `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` atau `OMNI_SKILLS_SIGN_PRIVATE_KEY` wujud dalam rahsia repositori
- Jika anda memberikan rahsia kunci awam, sahkan ia sepadan dengan kunci peribadi
- Sahkan `openssl` tersedia dan kunci peribadi adalah berformat PEM
- Bina semula secara setempat dengan `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Jalankan semula `npm run verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- Sahkan `OMNI_SKILLS_HTTP_BEARER_TOKEN` atau `OMNI_SKILLS_HTTP_API_KEYS`
- Sertakan `Kebenaran: Pembawa <token>` atau pengepala `x-api-key`### 🚦 API/MCP Returns `429 Too Many Requests`

- Tingkatkan `OMNI_SKILLS_RATE_LIMIT_MAX`
- Luaskan `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Kurangkan trafik pecah daripada pelanggan atau probe### 🛂 API/MCP Admin Runtime Returns `401`

- Sahkan `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Hantar `x-admin-token: <token>` atau `Authorization: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Lumpuhkan `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Gunakan `/healthz` untuk kuar hidup semasa penyelenggaraan
- Gunakan `/admin/runtime` dengan token pentadbir untuk diagnostik pengendali### 🌍 Browser Requests Fail CORS Validation

- Sahkan `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Sertakan skema dan hos yang tepat, contohnya `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Sahkan `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Sahkan `OMNI_SKILLS_A2A_REDIS_URL`
- Periksa sambungan Redis dari setiap nod
- Periksa `/healthz` untuk syot kilat `koordinasi`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
