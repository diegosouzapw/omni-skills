# 📐 ADR-0001: Agent-Native Workspace Foundation (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Keputusan arsitektur utama yang membentuk struktur ruang kerja monorepo.**---

## 📊 Status

✅**Diterima**— arah ruang kerja saat ini dan bentuk repositori aktif.---

## 🔍 Context

Omni Skills dimulai sebagai repositori**yang mengutamakan penginstal**. Jumlah tersebut cukup untuk mendistribusikan konten `SKILL.md`, namun tidak cukup untuk memaparkan katalog kepada agen melalui platform asli protokol.

Kami membutuhkan sebuah yayasan yang dapat mendukung:

| Persyaratan | Protokol |
|:------------|:---------|
| 🌐 API katalog HTTP hanya baca | Istirahat |
| 🔌 Server MCP hanya baca | Protokol Konteks Model |
| 🤖 Permukaan A2A yang menghadap agen | Agen-ke-Agen |
| 📂 Pemasangan lokal sespan | Alat sistem file |

**Kendala kritis**: Hindari memparsing ulang file repo secara independen di setiap layanan baru.---

## ✅ Decision

Gunakan**monorepo berorientasi ruang kerja**dengan inti katalog bersama dan paket khusus protokol:

| Paket | Tujuan |
|:--------|:--------|
| 📦 `keterampilan omni` (root) | Penginstal CLI dan skrip repo |
| 🧠 `@omni-skills/catalog-core` | Pemuatan bersama, pencarian, perbandingan, bundel, paket pemasangan |
| 🌐 `@omni-skills/server-api` | REST API hanya baca |
| 🔌 `@omni-skills/server-mcp` | MCP dengan stdio/stream/sse + mode sespan lokal |
| 🤖 `@omni-skills/server-a2a` | Runtime tugas A2A dengan Kartu Agen, polling, SSE, dan konfigurasi push |### 📁 Shared Data Sources

Inti katalog membaca artefak yang dihasilkan dari:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `keterampilan_index.json`---

## ✅ Positive Consequences

| Hasil | Dampak |
|:--------|:-------|
| 🔗**Kontrak data bersama**| API, MCP, dan A2A menggunakan artefak yang sama |
| 🖥️**CLI Terpadu**| Satu biner mengekspos instalasi, shell UI, API, MCP, A2A, diagnostik, dan smoke |
| 🧩**Protokol isolasi**| Permukaan baru melakukan iterasi tanpa sambungan ke internal penginstal |
| 🔌**Sespan lokal**| Mode MCP berkemampuan tulis yang berfungsi di belakang daftar yang diizinkan, dengan resep yang sadar klien |
| 📦**Waktu proses satu paket**| Paket npm yang diterbitkan menyatukan permukaan protokol, alat validasi, dan artefak yang dihasilkan |---

## ⚠️ Negative Consequences

| Pengorbanan | Mitigasi |
|:---------|:-----------|
| 🔄**Duplikasi metadata**| Build Python + runtime JavaScript → akhirnya dikonsolidasikan |
| 🏗️**Kompleksitas A2A**| Siklus hidup yang tahan lama kini ada, tetapi adaptor koordinasi menambah kedalaman operasional |
| 📦**Penyelarasan katalog**| Penginstalan selektif memerlukan perintah, manifes, dan dokumen agar tetap tersinkronisasi |
| 📋**Kesenjangan metadata paket**| Kumpulan dapat melampaui keterampilan yang dipublikasikan, memerlukan peringatan eksplisit anggota yang hilang |---

## ➡️ Follow-Up Items

| # | Aksi | Status |
|:--|:-------|:-------|
| 1️⃣ | Otentikasi MCP jarak jauh dan pembatasan laju | ✅ Selesai |
| 2️⃣ | Peningkatan penulisan konfigurasi MCP khusus klien | ✅ Hadir hari ini untuk Claude, Cursor, Codex, Gemini, Kiro, VS Code, dan Dev Containers |
| 3️⃣ | Artefak rilis yang ditandatangani atau arsip per keterampilan | ✅ Hadir hari ini dengan penegakan CI pada tag rilis |
| 4️⃣ | Runtime tugas A2A → orkestrasi yang tahan lama | ✅ Hadir hari ini dengan persistensi JSON/SQLite, pelaksana eksternal, koordinasi sewa keikutsertaan, dan koordinasi Redis tingkat lanjut opsional |
| 5️⃣ | Perluas katalog yang diterbitkan untuk cakupan paket yang lebih luas | ✅ Hadir hari ini untuk tujuh starter bundle yang dikurasi saat ini |