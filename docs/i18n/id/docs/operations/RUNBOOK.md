# 🔧 System Runbook (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Panduan operasional lengkap untuk membangun, memvalidasi, menyajikan, mengamankan, dan memecahkan masalah Omni Skills.**---

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

| Perintah | Apa Fungsinya |
|:--------|:-------------|
| `npm jalankan validasi` | Memvalidasi `SKILL.md`, membuat ulang `metadata.json`, menghitung taksonomi/kematangan/kualitas/keamanan |
| `npm jalankan taksonomi:laporan` | Menampilkan saran penyimpangan kategori tanpa menulis ulang file |
| `npm jalankan verifikasi: pemindai` | Mengonfirmasi cakupan pemindai yang dicatat dalam metadata keterampilan yang dihasilkan |
| `npm jalankan rilis:catatan` | Menghasilkan catatan rilis khusus dari metadata, bundel, dan riwayat git |
| `npm jalankan build` | Membuat ulang katalog/manifest/arsip/checksum, memverifikasi cakupan dan arsip pemindai, membangun kembali `docs/CATALOG.md` |
| `tes npm` | Rangkaian asap lengkap di seluruh CLI, API, MCP, sespan, dan aliran arsip |---

## 🖥️ Visual Shell

CLI yang diterbitkan sekarang menyertakan shell operator berbasis Tinta:```bash
npx omni-skills ui
```

Kemampuan saat ini:

- instalasi terpandu untuk klien yang dikenal dan jalur khusus
- alur pencarian-lalu-instal
- Panduan peluncuran MCP
- Panduan peluncuran API
- Panduan peluncuran A2A
- pemasangan terkini dan peluncuran kembali layanan
- bernama instalasi dan preset layanan

Jalur negara bagian lokal:```text
~/.omni-skills/state/ui-state.json
```

Pengganti:```bash
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

Pemindai statis memeriksa semua keterampilan secara otomatis:

| Keluarga Aturan | Contoh |
|:------------|:---------|
| 🎭 Injeksi segera | Pola eksfiltrasi, penggantian instruksi |
| 💣 Perintah yang merusak | `rm -rf`, `format`, `mkfs` |
| 🔑 Jalur mencurigakan | `/etc/shadow`, `~/.ssh`, file kredensial |
| ⚠️ Primitif berisiko | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Memerlukan `clamscan` di `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Hanya pencarian hash — file yang tidak dikenal**tidak diunggah**secara default.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Gerbang pelepasan yang ketat:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Arsip dihasilkan secara otomatis oleh `npm run build`:

| Keluaran | Jalur |
|:-------|:-----|
| 📦 ZIP | `dist/arsip/<keterampilan>.zip` |
| 📦 Bola Tar | `dist/arsip/<keterampilan>.tar.gz` |
| 🔒 Checksum | `dist/arsip/<keterampilan>.checksums.txt` |

`dist/` dilakukan dengan sengaja di repositori ini. Katalog, manifes, bundel, dan arsip yang dihasilkan adalah input runtime untuk alur instalasi CLI, platform download API, pratinjau MCP, penyerahan tugas A2A, pengujian asap, dan verifikasi rilis.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Penggantian kunci publik opsional:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Jika tidak ada kunci publik yang diberikan, build akan mengambilnya melalui `openssl` ke `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Kebijakan versi:

- peningkatan patch hingga `.10`
- setelah `.10`, rilis berikutnya menjadi minor dan menyetel ulang patch ke `.0`

Contoh:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Skenario | Perintah |
|:---------|:--------|
| 📥 Pemasangan bawaan (Antigravitasi) | `npx keterampilan omni` |
| 🎯 Keahlian khusus + klien | `npx keterampilan omni --kursor --keterampilan omni-figma` |
| 🔎 Penemuan → instal | `npx omni-skills temukan figma --tool kursor --install --yes` |
| 📦 Pemasangan bundel | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Verifikasi pemasangan | `npx dokter keterampilan omni` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| menyaring | Bendera | Contoh |
|:-------|:-----|:--------|
| 📂 Kategori | `--kategori` | `--pengembangan kategori` |
| 🖥️ Alat | `--alat` | `--kursor alat` |
| ⚠️ Risiko | `--risiko` | `--risiko aman` |
| 📊 Urutkan | `--sortir` | `--urutkan kualitas\|praktik terbaik\|tingkat\|keamanan\|nama` |
| 🔄 Pesan | `--pesanan` | `--pesan asc\|desc` |
| ⭐ Kualitas minimal | `--kualitas minimum` | `--kualitas minimum 80` |
| 📋 Minimal BP | `--min-praktik terbaik` | `--min-praktik terbaik 60` |
| 🎯 Tingkat minimum | `--tingkat minimum` | `--tingkat minimum 2` |
| 🛡️ Keamanan minimum | `--min-keamanan` | `--keamanan minimum 90` |
| ✅ Validasi | `--status-validasi` | `--status validasi berlalu` |
| 🛡️ Keamanan | `--status-keamanan` | `--status keamanan berlalu` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Metode | Titik akhir | Tujuan |
|:-------|:---------|:--------|
| `DAPATKAN` | `/kesehatan` | Pemeriksaan kesehatan |
| `DAPATKAN` | `/openapi.json` | Spesifikasi OpenAPI 3.1 |
| `DAPATKAN` | `/v1/keterampilan` | Daftar dengan filter |
| `DAPATKAN` | `/v1/pencarian` | Pencarian teks lengkap |
| `DAPATKAN` | `/v1/skills/:id/arsip` | Daftar arsip |
| `DAPATKAN` | `/v1/skills/:id/download/archive?format=zip` | Unduh arsip |
| `DAPATKAN` | `/v1/skills/:id/download/archive/checksums` | Manifes checksum |### 🔐 Hosted API Hardening

| Fitur | Perintah |
|:--------|:--------|
| 🔑 Pembawa autentikasi | `OMNI_SKILLS_HTTP_BEARER_TOKEN=ganti-saya npx omni-skills api` |
| 🗝️ Otentikasi kunci API | `OMNI_SKILLS_HTTP_API_KEYS=kunci-a,kunci-b npx omni-skill api` |
| 🛂 Autentikasi waktu proses admin | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-rahasia npx omni-skills api` |
| 🚦 Pembatasan tarif | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx api omni-skills` |
| 📝 Pencatatan audit | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx api keterampilan omni` |
| 🌍 Daftar yang diizinkan CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx api omni-skills` |
| 🧱 Daftar IP yang diizinkan | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx api keterampilan omni` |
| 🚧 Mode pemeliharaan | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx api keterampilan omni` |
| 🔁 Proksi tepercaya | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx api omni-skills` |

> 🟢 `/healthz` tetap terbuka karena desainnya; rute katalog memerlukan autentikasi saat diaktifkan. `GET /admin/runtime` memerlukan token admin saat dikonfigurasi dan mengembalikan snapshot tata kelola langsung.---

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

Sidecar sekarang dapat mempratinjau atau menulis konfigurasi MCP untuk:

- Pengguna Claude dan pengaturan proyek
- Konfigurasi Desktop Claude
- Konfigurasi pengguna Cline
- Pengguna GitHub Copilot CLI dan konfigurasi repositori
- Pengguna kursor dan konfigurasi ruang kerja
- Konfigurasi Codex TOML
- Pengguna Gemini dan pengaturan proyek
- Pengguna Kilo CLI dan konfigurasi proyek
- Konfigurasi ruang kerja Kilo
- Pengguna Kiro dan pengaturan proyek
- Konfigurasi pengguna dan ruang kerja OpenCode
- Lanjutkan konfigurasi YAML ruang kerja
- Konfigurasi pengguna selancar angin
- Konfigurasi ruang kerja Zed
- ruang kerja `.mcp.json`
- Ruang kerja VS Code dan konfigurasi pengguna
- Konfigurasi Kontainer Pengembang

`configure_client_mcp` juga mengembalikan `resep` per klien sehingga operator mendapatkan CLI yang setara atau langkah-langkah penyiapan manual bersama dengan pratinjau.### 🧾 MCP Config Preview and Write Flow

Gunakan CLI terpadu bila Anda ingin pembuatan konfigurasi tanpa memanggil alat MCP secara langsung:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Shell visual memperlihatkan alur kerja yang sama melalui:

- `npx keterampilan omni ui`
- `Layanan`
- `Konfigurasi klien MCP`

Perintah tetap dalam mode pratinjau kecuali `--write` diteruskan.### 🔐 Hosted MCP Hardening

Vars env yang sama dengan API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Rute yang dilindungi**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` tetap terbuka.---

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

Jalur lokal default tetap sederhana:

- Persistensi `json` atau `sqlite` dapat dijalankan dengan polling antrian dinonaktifkan
- setel `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` hanya jika Anda ingin klaim multi-pekerja dan failover sewa
- pertahankan koordinasi Redis sebagai opsi host tingkat lanjut, bukan sebagai dasar### 🧱 Multi-Worker Lease Setup

Jalankan lebih dari satu node A2A pada penyimpanan SQLite yang sama untuk mendapatkan failover berbasis sewa:```bash
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

Jika seorang pekerja meninggal saat suatu tugas sedang `berfungsi`, pekerja lain dapat mengambilnya kembali setelah masa sewa berakhir dan melanjutkan eksekusi.### 🟥 Redis Coordination

Untuk penerapan yang dihosting atau multi-node yang tidak ingin koordinasi antrean dikaitkan dengan penyimpanan SQLite bersama, alihkan koordinator ke Redis:```bash
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

Dalam mode ini:

- ketekunan masih ada di JSON atau SQLite
- tugas mengklaim dan memindahkan kepemilikan sewa ke Redis
- beberapa node A2A dapat berbagi antrian tanpa bergantung pada koordinasi tingkat baris SQLite### 📡 Endpoints

| Metode | Jalur | Tujuan |
|:-------|:-----|:--------|
| `DAPATKAN` | `/kesehatan` | Pemeriksaan kesehatan |
| `DAPATKAN` | `/.well-known/agent.json` | Kartu Agen (penemuan A2A) |
| `POSTING` | `/a2a` | Titik akhir JSON-RPC untuk tugas dan streaming |### 🧭 Supported JSON-RPC Methods

| Metode | Tujuan |
|:-------|:--------|
| `pesan/kirim` | Memulai atau melanjutkan tugas |
| `pesan/aliran` | Mulai tugas dan streaming pembaruan SSE |
| `tugas/dapatkan` | Jajak pendapat cuplikan tugas |
| `tugas/batal` | Membatalkan tugas aktif |
| `tugas/berlangganan kembali` | Lanjutkan pembaruan SSE untuk tugas yang sudah ada |
| `tugas/pushNotificationConfig/set` | Daftarkan webhook push |
| `tugas/pushNotificationConfig/dapatkan` | Baca konfigurasi push |
| `tugas/pushNotificationConfig/daftar` | Daftar konfigurasi push untuk suatu tugas |
| `tugas/pushNotificationConfig/hapus` | Hapus konfigurasi push |### 📡 Task Lifecycle

Runtime saat ini mendukung status tugas berikut:

- `dikirim`
- `bekerja`
- `diperlukan masukan`
- `selesai`
- `dibatalkan`
- `gagal`

Tugas disimpan pada file JSON atau penyimpanan SQLite dan dimuat ulang saat dimulai ulang. Tugas yang sudah selesai dan terputus tetap tersedia. Tugas yang masih `dikirim` atau `berfungsi` selama pematian dipulihkan dengan metadata mulai ulang secara eksplisit dan dilanjutkan secara otomatis secara default.### 🧪 Example: Start a Task

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

Repositori sekarang memiliki dua alur kerja:

| Alur Kerja | Pemicu | Tujuan |
|:---------|:--------|:--------|
| `validasi.yml` | Dorong/PR ke `utama` | Bangun, uji, dan konfirmasi artefak yang dihasilkan telah dikomit |
| `rilis.yml` | Tag push `v*` atau pengiriman manual | Jalankan pemindai tingkat rilis, verifikasi tag versi, tanda tangani artefak, kemas tarball, publikasikan ke npm, dan buat GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Rahasia | Digunakan Oleh | Tujuan |
|:-------|:--------|:--------|
| `VT_API_KEY` atau `VIRUSTOTAL` | `rilis.yml` | Memerlukan pencarian hash VirusTotal dalam versi rilis |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` atau `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `rilis.yml` | Kunci pribadi yang diperlukan untuk penandatanganan arsip terpisah di CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` atau `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `rilis.yml` | Penggantian kunci publik opsional; jika tidak, berasal dari kunci pribadi |
| `NPM_TOKEN` | pekerjaan `terbitkan-npm` | Otentikasi `npm publikasikan` untuk rilis tag |### 🦠 Release Scanner Policy

`release.yml` mengatur atau mempersiapkan:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ rahasia.VT_API_KEY || rahasia.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` dari penyimpanan sementara runner

Artinya, setiap rilis berbasis tag harus:

- instal dan segarkan ClamAV di runner
- membuat ulang metadata dengan ClamAV diaktifkan
- membuat ulang metadata dengan VirusTotal diaktifkan
- memecahkan kode materi kunci penandatanganan CI ke dalam penyimpanan sementara pelari
- lewati `npm jalankan verifikasi: pemindai: ketat`
- lewati `npm jalankan verifikasi:arsip:ketat`
- lulus tes dan verifikasi paket sebelum npm dipublikasikan
- menghasilkan catatan rilis khusus dari metadata katalog dan riwayat git
- buat Rilis GitHub dengan aset rilis terlampir setelah dipublikasikan---

## 1️⃣1️⃣ Environment Variables Reference

| Variabel | Tujuan | Bawaan |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Ganti jalur akar katalog | Terdeteksi otomatis |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Jalur tulis ekstra yang diizinkan | Akar klien yang dikenal |
| `OMNI_SKILLS_MCP_MODE` | Setel ke `lokal` untuk sespan | Jarak Jauh |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Bendera Alt untuk mode lokal | `0` |
| `OMNI_SKILLS_API_BASE_URL` | URL API Publik untuk MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | URL basis publik | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Token autentikasi pembawa | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kunci API yang dipisahkan koma | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Token autentikasi waktu proses admin | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Permintaan maksimal per jendela | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Jendela batas kecepatan (md) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Aktifkan pencatatan audit | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | keluaran audit `json` atau `teks` | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Jalur file log audit opsional | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Daftar asal CORS yang dipisahkan koma | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Daftar IP atau CIDR yang diizinkan | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Pengaturan proxy kepercayaan ekspres | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Aktifkan respons pemeliharaan | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Pemeliharaan `Coba Lagi-Setelah` detik | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Penundaan tugas async yang disimulasikan | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | Penyimpanan tugas `json`, `sqlite`, atau `memori` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | File penyimpanan tugas A2A khusus | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Aktifkan polling antrean bersama untuk pekerja yang sadar sewa | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | Koordinator `store`, `sqlite`, `local`, atau `redis` | `toko` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL untuk koordinasi eksternal | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Awalan kunci redis untuk metadata antrean | `keterampilan omni:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Interval pemungutan suara antrian untuk pekerja sewaan | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Durasi sewa sebelum pekerja lain dapat mengambil kembali tugas | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Pengidentifikasi pekerja yang stabil untuk kepemilikan sewa dan diagnostik | Nama host + PID + akhiran acak |
| `OMNI_SKILLS_A2A_EXECUTOR` | pelaksana tugas `inline` atau `proses` | `sebaris` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Ganti perintah pekerja eksternal | Biner simpul |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | Array JSON dari argumen pekerja eksternal | `["paket/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Lanjutkan tugas yang dikirimkan/dikerjakan saat boot | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Izinkan webhook non-HTTPS di luar localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Aktifkan pemindaian ClamAV | `0` |
| `VT_API_KEY` | Kunci API VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Kunci pribadi untuk penandatanganan | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Penggantian kunci publik | Turunan otomatis |---

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

1. Bangun kembali dengan `npm run build`
2. Jalankan kembali `npm run verifikasi: arsip`
3. Jika penandatanganan diaktifkan, konfirmasikan kunci publik dan ketersediaan `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- Konfirmasikan `VT_API_KEY` ada dalam rahasia repositori
- Konfirmasikan `freshclam` berhasil pada pelari
- Bangun kembali secara lokal dengan `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Jalankan kembali `npm jalankan verifikasi: pemindai: ketat`### 📦 npm Publish Fails in CI

- Konfirmasikan `NPM_TOKEN` ada dalam rahasia repositori
- Konfirmasikan tag Git sama persis dengan versi `package.json`
- Periksa apakah tarball yang diunggah oleh `release-verify` ada di artefak alur kerja### ✍️ Release Signing Fails in CI

- Konfirmasikan `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` atau `OMNI_SKILLS_SIGN_PRIVATE_KEY` ada dalam rahasia repositori
- Jika Anda memberikan rahasia kunci publik, pastikan rahasia tersebut cocok dengan kunci pribadi
- Konfirmasikan `openssl` tersedia dan kunci pribadi berformat PEM
- Bangun kembali secara lokal dengan `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Jalankan kembali `npm jalankan verifikasi:arsip:ketat`### 🔒 API/MCP Returns `401 Unauthorized`

- Verifikasi `OMNI_SKILLS_HTTP_BEARER_TOKEN` atau `OMNI_SKILLS_HTTP_API_KEYS`
- Sertakan `Otorisasi: Header <token>` atau `x-api-key`### 🚦 API/MCP Returns `429 Too Many Requests`

- Tingkatkan `OMNI_SKILLS_RATE_LIMIT_MAX`
- Perluas `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Mengurangi lalu lintas burst dari klien atau probe### 🛂 API/MCP Admin Runtime Returns `401`

- Verifikasi `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Kirim `x-admin-token: <token>` atau `Otorisasi: Pembawa <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Nonaktifkan `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Gunakan `/healthz` untuk pemeriksaan keaktifan selama pemeliharaan
- Gunakan `/admin/runtime` dengan token admin untuk diagnostik operator### 🌍 Browser Requests Fail CORS Validation

- Verifikasi `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Sertakan skema dan host yang tepat, misalnya `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Verifikasi `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Verifikasi `OMNI_SKILLS_A2A_REDIS_URL`
- Periksa konektivitas Redis dari setiap node
- Periksa `/healthz` untuk snapshot `koordinasi`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
