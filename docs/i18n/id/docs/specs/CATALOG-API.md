# 🌐 Catalog API Surface (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**API HTTP baca-saja untuk penemuan keterampilan, penelusuran, perbandingan, perencanaan pemasangan, dan pengunduhan artefak.**---

## 📊 Status

| Fitur | Negara |
|:--------|:------|
| ✅ Titik akhir katalog | Diimplementasikan |
| ✅ Auth (pembawa + kunci API) | Diimplementasikan |
| ✅ Otentikasi waktu proses admin | Diimplementasikan |
| ✅ Pembatasan tarif | Diimplementasikan |
| ✅ Pencatatan audit | Diimplementasikan |
| ✅ Daftar yang diizinkan CORS dan IP | Diimplementasikan |
| ✅ Mode pemeliharaan | Diimplementasikan |
| ✅ Unduhan arsip | Diimplementasikan |
| ✅ Spesifikasi OpenAPI | Diimplementasikan |
| ⚠️ Bagian belakang tata kelola | Dasar dalam proses yang didorong oleh lingkungan; gateway eksternal atau IdP masih opsional |---

## 🎯 Purpose

API menyediakan permukaan bergaya registri untuk:

- 📋 Mendaftar dan memfilter keterampilan berdasarkan kualitas, keamanan, kategori, risiko, dan banyak lagi
- 📌 Mengambil wujud keterampilan individu
- 🔎 Pencarian teks lengkap dan perbandingan multi-keterampilan
- 📦 Daftar bundel dengan ketersediaan
- 📐 Pembuatan paket instalasi hanya-baca
- 📥 Mengunduh artefak, arsip, dan manifes checksum yang dihasilkan

Katalog dan permukaan manifes yang sama juga menjadi dasar untuk:

- perencanaan pemasangan CLI lokal
- Respons penemuan MCP hanya-baca
- Penemuan A2A dan serah terima rencana pemasangan
- katalog pribadi potensial dengan autentikasi eksternal berlapis di atasnya---

## Mulai Cepat

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**Default**: `127.0.0.1:3333`---

## 🔐 Security Controls

Semua kontrol keamanan digerakkan oleh lingkungan dan opsional:

| Kontrol | Variabel | Contoh |
|:--------|:---------|:--------|
| 🔑**Pembawa autentikasi**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `ganti-saya` |
| 🗝️**Otentikasi kunci API**| `OMNI_SKILLS_HTTP_API_KEYS` | `kunci-a,kunci-b` |
| 🛂**Otentikasi Admin**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `rahasia admin` |
| 🚦**Pembatasan tarif**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Pencatatan audit**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Format audit**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` atau `teks` |
| 📄**Berkas audit**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**Daftar CORS yang diizinkan**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Daftar IP yang diizinkan**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Proksi tepercaya**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `putar balik` |
| 🚧**Mode pemeliharaan**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Coba lagi setelah**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Perilaku:**
- 🟢 `/healthz` tetap**selalu tidak diautentikasi**
- 🔒 Semua rute lain memerlukan autentikasi saat autentikasi diaktifkan
- 🛂 `/admin/runtime` memerlukan token admin saat diaktifkan
- 🚦 Pembatasan tarif sedang dalam proses dengan header respons `X-RateLimit-*`
- 🧾 Setiap respons membawa `X-Request-Id`
- 🚧 Mode pemeliharaan mengembalikan `503` untuk rute non-kesehatan dan non-admin### ✅ Current governance decision

Arah proyek saat ini adalah**menggunakan kembali format katalog yang sama untuk penerapan publik atau pribadi**dan melapisi autentikasi secara eksternal bila diperlukan.

Artinya:

- manifes dan bentuk API tetap dibagikan
- penerapan yang dihosting sendiri dan lokal dapat tetap berada pada garis dasar yang sedang dalam proses
- tata kelola host yang lebih canggih dapat dipindahkan ke gateway eksternal atau lapisan autentikasi perusahaan di kemudian hari tanpa melakukan forking model data### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| Metode | Jalur | Deskripsi |
|:-------|:-----|:------------|
| `DAPATKAN` | `/kesehatan` | Pemeriksaan kesehatan (tidak diautentikasi) |
| `DAPATKAN` | `/openapi.json` | Spesifikasi Dinamis OpenAPI 3.1 |
| `DAPATKAN` | `/admin/waktu proses` | Snapshot tata kelola dan runtime (auth admin bila diaktifkan) |### 📚 Catalog & Skills

| Metode | Jalur | Deskripsi |
|:-------|:-----|:------------|
| `DAPATKAN` | `/v1/keterampilan` | Daftar keterampilan dengan filter |
| `DAPATKAN` | `/v1/keterampilan/:id` | Dapatkan manifes keterampilan individu |
| `DAPATKAN` | `/v1/pencarian` | Pencarian teks lengkap |
| `DAPATKAN` | `/v1/bandingkan?ids=id1,id2` | Bandingkan beberapa keterampilan |
| `DAPATKAN` | `/v1/bundel` | Daftar bundel dengan ketersediaan |
| `POSTING` | `/v1/instal/rencana` | Hasilkan rencana instalasi |### 🔎 List/Search Filters

| menyaring | Contoh |
|:-------|:--------|
| `kategori` | `?kategori=pengembangan` |
| `alat` | `?alat=kursor` |
| `risiko` | `?risiko=aman` |
| `sortir` | `?sort=quality\|praktik terbaik\|level\|keamanan\|nama` |
| `pesanan` | `?pesanan=asc\|desc` |
| `kualitas_minimal` | `?kualitas_min=80` |
| `praktik_terbaik_minimal` | `?min_best_practices=60` |
| `tingkat_menit` | `?tingkat_min=2` |
| `keamanan_min' | `?keamanan_min=90` |
| `status_validasi` | `?validasi_status=lulus` |
| `status_keamanan` | `?status_keamanan=lulus` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| Metode | Jalur | Deskripsi |
|:-------|:-----|:------------|
| `DAPATKAN` | `/v1/katalog/unduh` | Unduh katalog lengkap |
| `DAPATKAN` | `/v1/skills/:id/artefak` | Daftar artefak keterampilan |
| `DAPATKAN` | `/v1/skills/:id/arsip` | Daftar arsip keterampilan |
| `DAPATKAN` | `/v1/skills/:id/downloads` | Semua tautan unduhan yang tersedia |
| `DAPATKAN` | `/v1/skills/:id/download/manifest` | Manifes keterampilan JSON |
| `DAPATKAN` | `/v1/skills/:id/download/entrypoint` | Keterampilan KETERAMPILAN.md |
| `DAPATKAN` | `/v1/skills/:id/download/artifact?path=<path>` | Artefak tertentu |
| `DAPATKAN` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Arsip keterampilan |
| `DAPATKAN` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Tanda tangan terpisah |
| `DAPATKAN` | `/v1/skills/:id/download/archive/checksums` | Checksum SHA-256 |---

## 🔗 Link Enrichment

Saat permintaan ditangani melalui API, server**secara otomatis memperkaya**manifes, daftar artefak, dan paket instalasi dengan URL absolut yang berasal dari asal permintaan masuk. Ini adalah pengayaan waktu proses, tidak dimasukkan ke dalam `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Paket penginstalan adalah pratinjau, bukan penulisan jarak jauh.**

API tidak pernah diinstal ke mesin pemanggil. Ini mengembalikan:
- 📌 Metadata keterampilan yang dipilih
- ⚠️ Peringatan bagi anggota bundel yang hilang
- 🖥️ Perintah CLI konkrit untuk dijalankan secara lokal
- 🔗 URL unduhan publik saat asal permintaan tersedia---

## 🔌 Relationship to MCP

Server MCP menggunakan kembali URL API publik yang sama saat dikonfigurasi:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Hal ini memungkinkan pratinjau pemasangan MCP menampilkan URL manifes dan artefak nyata, bukan hanya jalur repo lokal saja.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` mengembalikan snapshot tata kelola yang berguna untuk diagnostik yang dihosting:

- metode autentikasi aktif
- status admin-autentikasi
- jendela batas tarif dan maks
- Daftar yang diizinkan CORS
- Daftar IP yang diizinkan
- status mode pemeliharaan
- tujuan dan format audit
- total katalog saat ini
- permintaan ID bergema untuk ketertelusuran