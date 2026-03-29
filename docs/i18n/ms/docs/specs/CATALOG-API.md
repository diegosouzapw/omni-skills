# 🌐 Catalog API Surface (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**API HTTP baca sahaja untuk penemuan kemahiran, carian, perbandingan, perancangan pemasangan dan muat turun artifak.**---

## 📊 Status

| Ciri | Negeri |
|:--------|:------|
| ✅ Titik akhir Katalog | Dilaksanakan |
| ✅ Pengesahan (pembawa + kunci API) | Dilaksanakan |
| ✅ Pengesahan masa jalan pentadbir | Dilaksanakan |
| ✅ Kadar mengehadkan | Dilaksanakan |
| ✅ Log audit | Dilaksanakan |
| ✅ Senarai dibenarkan CORS dan IP | Dilaksanakan |
| ✅ Mod penyelenggaraan | Dilaksanakan |
| ✅ Muat turun arkib | Dilaksanakan |
| ✅ Spesifikasi OpenAPI | Dilaksanakan |
| ⚠️ Bahagian belakang tadbir urus | Garis dasar didorong env, dalam proses; gerbang luar atau IdP masih pilihan |---

## 🎯 Purpose

API menyediakan permukaan gaya pendaftaran untuk:

- 📋 Kemahiran menyenaraikan dan menapis mengikut kualiti, keselamatan, kategori, risiko dan banyak lagi
- 📌 Mengambil manifes kemahiran individu
- 🔎 Carian teks penuh dan perbandingan berbilang kemahiran
- 📦 Senarai himpunan dengan ketersediaan
- 📐 Penjanaan pelan pemasangan baca sahaja
- 📥 Memuat turun artifak, arkib dan manifes semak yang dijana

Katalog dan permukaan nyata yang sama ini juga merupakan asas untuk:

- perancangan pemasangan CLI tempatan
- Respons penemuan baca sahaja MCP
- Penemuan A2A dan serahan pelan pemasangan
- katalog peribadi yang berpotensi dengan pengesahan luaran berlapis di atas---

## Mula Pantas

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

**Lalai**: `127.0.0.1:3333`---

## 🔐 Security Controls

Semua kawalan keselamatan adalah didorong env dan pilihan:

| Kawalan | Pembolehubah | Contoh |
|:--------|:---------|:--------|
| 🔑**Pengesahan pembawa**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `ganti-saya` |
| 🗝️**Pengesahan kunci API**| `OMNI_SKILLS_HTTP_API_KEYS` | `kunci-a,kunci-b` |
| 🛂**Pengesahan pentadbir**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `rahsia pentadbir` |
| 🚦**Menghadkan kadar**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Pengelogan audit**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Format audit**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` atau `teks` |
| 📄**Fail audit**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**senarai dibenarkan CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**senarai dibenarkan IP**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Proksi yang dipercayai**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧**Mod penyelenggaraan**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Cuba semula selepas**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Tingkah laku:**
- 🟢 `/healthz` kekal**sentiasa tidak disahkan**
- 🔒 Semua laluan lain memerlukan pengesahan apabila pengesahan didayakan
- 🛂 `/admin/runtime` memerlukan token pentadbir apabila didayakan
- 🚦 Pengehadan kadar sedang dalam proses dengan pengepala respons `X-RateLimit-*`
- 🧾 Setiap respons membawa `X-Request-Id`
- 🚧 Mod penyelenggaraan mengembalikan `503` untuk laluan bukan kesihatan, bukan pentadbir### ✅ Current governance decision

Arah projek semasa adalah untuk**menggunakan semula format katalog yang sama untuk penempatan awam atau persendirian**dan pengesahan lapisan secara luaran apabila diperlukan.

Maksudnya:

- bentuk manifes dan API kekal dikongsi
- penempatan yang dihoskan sendiri dan setempat boleh kekal pada garis dasar dalam proses
- tadbir urus dihoskan yang lebih maju boleh beralih ke get laluan luaran atau lapisan pengesahan perusahaan kemudian tanpa meninggalkan model data### 🔐 Full hardened example:

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

| Kaedah | Laluan | Penerangan |
|:-------|:-----|:------------|
| `DAPAT` | `/healthz` | Pemeriksaan kesihatan (tidak disahkan) |
| `DAPAT` | `/openapi.json` | Spesifikasi Dinamik OpenAPI 3.1 |
| `DAPAT` | `/admin/runtime` | Tadbir urus dan petikan masa jalan (pengesahan pentadbir apabila didayakan) |### 📚 Catalog & Skills

| Kaedah | Laluan | Penerangan |
|:-------|:-----|:------------|
| `DAPAT` | `/v1/kemahiran` | Senaraikan kemahiran dengan penapis |
| `DAPAT` | `/v1/kemahiran/:id` | Dapatkan manifes kemahiran individu |
| `DAPAT` | `/v1/carian` | Carian teks penuh |
| `DAPAT` | `/v1/compare?ids=id1,id2` | Bandingkan pelbagai kemahiran |
| `DAPAT` | `/v1/bundles` | Senaraikan berkas dengan ketersediaan |
| `POST` | `/v1/pasang/pelan` | Hasilkan pelan pemasangan |### 🔎 List/Search Filters

| Penapis | Contoh |
|:-------|:--------|
| `kategori` | `?kategori=pembangunan` |
| `alat` | `?alat=kursor` |
| `risiko` | `?risiko=selamat` |
| `susun` | `?sort=quality\|best-practices\|level\|security\|name` |
| `pesanan` | `?order=asc\|desc` |
| `kualiti_min` | `?kualiti_min=80` |
| `amalan_baik_min` | `?min_best_practices=60` |
| `peringkat_min` | `?tahap_min=2` |
| `min_security` | `?min_security=90` |
| `status_pengesahan` | `?status_validation=lulus` |
| `status_keselamatan` | `?status_security=lulus` |### 📦 Install Plan Body

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

| Kaedah | Laluan | Penerangan |
|:-------|:-----|:------------|
| `DAPAT` | `/v1/katalog/muat turun` | Muat turun katalog penuh |
| `DAPAT` | `/v1/kemahiran/:id/artifak` | Senaraikan artifak kemahiran |
| `DAPAT` | `/v1/kemahiran/:id/archives` | Senaraikan arkib kemahiran |
| `DAPAT` | `/v1/kemahiran/:id/muat turun` | Semua pautan muat turun tersedia |
| `DAPAT` | `/v1/kemahiran/:id/muat turun/manifest` | JSON manifes kemahiran |
| `DAPAT` | `/v1/kemahiran/:id/muat turun/titik masuk` | KEMAHIRAN Kemahiran.md |
| `DAPAT` | `/v1/skills/:id/download/artifact?path=<path>` | Artifak khusus |
| `DAPAT` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Arkib kemahiran |
| `DAPAT` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Tandatangan terpisah |
| `DAPAT` | `/v1/kemahiran/:id/download/archive/checksums` | Jumlah semak SHA-256 |---

## 🔗 Link Enrichment

Apabila permintaan dikendalikan melalui API, pelayan**memperkayakan secara automatik**manifes, penyenaraian artifak dan memasang pelan dengan URL mutlak yang diperoleh daripada asal permintaan masuk. Ini ialah pengayaan masa jalan, tidak dimasukkan ke dalam `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Pelan pemasangan ialah pratonton, bukan penulisan jauh.**

API tidak pernah dipasang pada mesin pemanggil. Ia kembali:
- 📌 Metadata kemahiran terpilih
- ⚠️ Amaran untuk ahli bundle yang hilang
- 🖥️ Perintah CLI konkrit untuk dijalankan secara tempatan
- 🔗 URL muat turun awam apabila asal permintaan tersedia---

## 🔌 Relationship to MCP

Pelayan MCP menggunakan semula URL API awam yang sama apabila dikonfigurasikan:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Ini membenarkan pratonton pemasangan MCP untuk mengembalikan URL manifes dan artifak konkrit dan bukannya laluan repo tempatan sahaja.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` mengembalikan petikan tadbir urus yang berguna untuk diagnostik yang dihoskan:

- kaedah pengesahan aktif
- status pengesahan pentadbir
- tetingkap had kadar dan maks
- Senarai dibenarkan CORS
- Senarai kebenaran IP
- keadaan mod penyelenggaraan
- destinasi dan format audit
- jumlah katalog semasa
- permintaan ID bergema untuk kebolehkesanan