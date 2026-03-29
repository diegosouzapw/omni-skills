# 📐 ADR-0001: Agent-Native Workspace Foundation (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Keputusan seni bina utama yang membentuk struktur ruang kerja monorepo.**---

## 📊 Status

✅**Diterima**— arah ruang kerja semasa dan bentuk repositori aktif.---

## 🔍 Context

Omni Skills bermula sebagai repositori**diutamakan pemasang**. Itu sudah cukup untuk mengedarkan kandungan `SKILL.md`, tetapi tidak mencukupi untuk mendedahkan katalog kepada ejen melalui permukaan asli protokol.

Kami memerlukan asas yang boleh menyokong:

| Keperluan | Protokol |
|:------------|:---------|
| 🌐 API Katalog HTTP baca sahaja | REHAT |
| 🔌 Pelayan MCP baca sahaja | Protokol Konteks Model |
| 🤖 Permukaan A2A yang menghadap ejen | Ejen-ke-Ejen |
| 📂 Pemasangan sidecar tempatan | Alat sistem fail |

**Kekangan kritikal**: Elakkan membetulkan semula fail repo secara berasingan dalam setiap perkhidmatan baharu.---

## ✅ Decision

Gunakan**monorepo berorientasikan ruang kerja**dengan teras katalog kongsi dan pakej khusus protokol:

| Pakej | Tujuan |
|:--------|:--------|
| 📦 `kemahiran-omni` (root) | Pemasang CLI dan skrip repo |
| 🧠 `@omni-skills/catalog-core` | Pemuatan dikongsi, carian, perbandingan, himpunan, pelan pemasangan |
| 🌐 `@omni-skills/server-api` | API REST baca sahaja |
| 🔌 `@omni-skills/server-mcp` | MCP dengan mod stdio/strim/sse + kereta sisi tempatan |
| 🤖 `@omni-skills/server-a2a` | Masa jalan tugas A2A dengan Kad Ejen, pengundian, SSE dan konfigurasi push |### 📁 Shared Data Sources

Teras katalog membaca artifak yang dijana daripada:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Hasil | Kesan |
|:--------|:-------|
| 🔗**Kontrak data kongsi**| API, MCP dan A2A menggunakan artifak yang sama |
| 🖥️**CLI Bersatu**| Satu binari mendedahkan pemasangan, cangkerang UI, API, MCP, A2A, diagnostik dan asap |
| 🧩**Pengasingan protokol**| Permukaan baharu berulang tanpa gandingan dengan dalaman pemasang |
| 🔌**Kereta sampingan tempatan**| Mod MCP berkebolehan menulis berfungsi di belakang senarai yang dibenarkan, dengan resipi sedar pelanggan |
| 📦**Waktu jalan pakej tunggal**| Pakej npm yang diterbitkan membawa permukaan protokol, alat pengesahan dan artifak yang dijana bersama-sama |---

## ⚠️ Negative Consequences

| Tukar ganti | Mitigasi |
|:---------|:-----------|
| 🔄**Penduaan metadata**| Binaan Python + masa jalan JavaScript → akhirnya menyatukan |
| 🏗️**Kerumitan A2A**| Kitaran hayat tahan lama kini wujud, tetapi penyesuai penyelarasan menambah kedalaman operasi |
| 📦**Penjajaran katalog**| Pemasangan terpilih memerlukan arahan, manifes dan dokumen untuk kekal disegerakkan |
| 📋**Ikatan jurang metadata**| Himpunan boleh mengatasi kemahiran yang diterbitkan, memerlukan amaran jelas kehilangan ahli |---

## ➡️ Follow-Up Items

| # | Tindakan | Status |
|:--|:-------|:-------|
| 1️⃣ | Pengesahan MCP jauh dan pengehadan kadar | ✅ Selesai |
| 2️⃣ | Penulisan konfigurasi MCP khusus pelanggan dipertingkatkan | ✅ Hadirkan hari ini untuk Claude, Cursor, Codex, Gemini, Kiro, VS Code dan Dev Containers |
| 3️⃣ | Artifak keluaran yang ditandatangani atau arkib setiap kemahiran | ✅ Hadirkan hari ini dengan penguatkuasaan CI pada tag keluaran |
| 4️⃣ | Masa jalan tugas A2A → orkestrasi tahan lama | ✅ Hadir hari ini dengan kegigihan JSON/SQLite, pelaksana luaran, penyelarasan pajakan ikut serta dan penyelarasan Redis lanjutan pilihan |
| 5️⃣ | Kembangkan katalog yang diterbitkan untuk liputan berkas yang lebih luas | ✅ Hadir hari ini untuk tujuh berkas pemula yang dipilih susun |