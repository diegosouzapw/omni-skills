# 🗺️ Agent-Native Roadmap (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Pelan evolusi seni bina untuk Kemahiran Omni: daripada repositori pertama pemasang kepada masa jalan katalog kongsi yang menjanakan CLI, API, MCP dan A2A tanpa logik pendua.**---

## 📊 Current Platform Areas

| Fasa | Nama | Status |
|:------|:-----|:-------|
| 1️⃣ | Kontrak dan Artifak | ✅ Semasa |
| 2️⃣ | API Katalog Baca Sahaja | ✅ Semasa |
| 3️⃣ | Permukaan Penemuan MCP | ✅ Semasa |
| 4️⃣ | Pasang Setempat dan Permukaan Konfigurasi | ✅ Semasa |
| 5️⃣ | Orkestrasi A2A | ✅ Semasa |### ✅ What Exists Today

- artifak katalog yang boleh dibaca mesin dalam `dist/`
- API HTTP baca sahaja dengan liputan titik akhir untuk carian, himpunan, membandingkan, memasang perancangan dan muat turun
- Pelayan MCP dengan pengangkutan `stdio`, HTTP boleh strim dan SSE
- kereta sampingan tempatan dengan tulisan yang disenaraikan dibenarkan dan aliran `config-mcp`
- 7 pelanggan berkebolehan memasang, 16 pelanggan berkemampuan konfigurasi, 33 sasaran konfigurasi MCP dan 19 profil konfigurasi
- pengkhususan bundle yang lebih mendalam di dalam `full-stack`, `security`, `devops` dan `ai-engineer` melalui `auth-flows`, `threat-modeling`, `release-engineering` dan `context-engineering`
- arkib setiap kemahiran (`zip`, `tar.gz`) dengan jumlah semak SHA-256 dan tandatangan tertanggal pada tag keluaran
- Garis dasar tadbir urus API: pengesahan pembawa/kunci API, pengesahan masa jalan pentadbir, pengehadan kadar, pengelogan audit, senarai kebenaran CORS/IP, proksi amanah, mod penyelenggaraan dan ID permintaan
- Masa jalan A2A dengan kitaran hayat tugas, ketahanan JSON/SQLite, mulakan semula resume, penstriman SSE, pembatalan, pemberitahuan tolak, pelaksana proses pilihan dan penyelarasan pajakan ikut serta### 🔭 Future Expansion Areas

Pelan hala tuju teras kini menerangkan skop platform semasa. Item selebihnya ialah kawasan pengembangan masa hadapan, bukan jurang asas:

- hanya penambahan MCP yang sangat terpilih dari masa ini dan hanya apabila dokumen awam rasmi membolehkan penulis selamat
- pek rujukan yang lebih mendalam dan pemarkahan yang lebih semantik supaya pengelas terus mengasingkan kemahiran luar biasa daripada kemahiran yang digilap semata-mata
- tadbir urus yang dihoskan perusahaan melebihi garis dasar dalam proses semasa, jika projek itu kemudiannya memerlukan penyepaduan get laluan atau IdP
- pengkhususan yang lebih mendalam merentas trek `reka bentuk`, `alat`, `data-ai` dan `pembelajaran mesin` yang baru diaktifkan
- penggilap operasi berterusan di sekitar penambah peribadi sambil mengekalkan model pengendalian rasminya: OmniRouter disematkan pada `cx/gpt-5.4`, awan dihoskan dalam `mock` atau pra-penerbangan terdegradasi dan `live` yang boleh dipercayai pada LAN atau pelaksanaan yang dihoskan sendiri
- pelepasan berterusan dan pengerasan aliran kerja hanya sebagai kerja kualiti perkhidmatan, bukan sebagai asas platform yang hilang## Future Catalog Expansion Track

Dua gelombang pengembangan kategori awam yang pertama kini mendarat:

- `design` → `design-systems-ops`, `accessibility-audit`, `design-token-governance`
- `tools` → `mcp-server-authoring`
- `data-ai` → `data-contracts`
- `pembelajaran mesin` → `servis model`

Langkah yang disyorkan seterusnya bukan lagi pengaktifan kategori untuk kepentingannya sendiri. Ia adalah untuk memperdalam trek asli kod yang baru aktif ini supaya ia berasa seperti permukaan produk yang tahan lama dan bukannya pijakan kemahiran tunggal.

Arahan yang disyorkan:

1. mendalami `reka bentuk` dengan aliran kerja sistem reka bentuk yang lebih beroperasi
2. mendalami `alat` dengan kemahiran mengarang dan berorientasikan pemalam
3. mendalami `data-ai` dengan perlaksanaan-pertama saluran paip dan kemahiran instrumentasi
4. mendalami `pembelajaran mesin` dengan kemahiran operasi servis, latihan dan penilaian

Kategori sengaja ditangguhkan melainkan cadangan kod asli yang kukuh muncul:

- `perniagaan`
- `media kandungan`

Sejarah pengembangan itu kini dijejaki dalam:

- [../tugasan/TUGASAN-07-KATALOG-PENGHUBATAN-DAN-KATEGORI-PELUASAN.md](../tugas/TUGASAN-07-KATALOG-Pengkhususan-DAN-KATEGORI-PELUASAN.md)
- [../tugas/TUGASAN-08-KATEGORI-KEDUA-GELOMBANG.md](../tugas/TUGASAN-08-KATEGORI-KEDUA-GELOMBANG.md)---

## 🎯 Goals

- ✅ Pastikan aliran kerja `npx omni-skills` semasa berfungsi
- ✅ Memperkenalkan sumber kebenaran yang boleh dibaca mesin untuk kemahiran
- ✅ Menyokong penemuan, pengesyoran dan perancangan pemasangan oleh ejen
- ✅ Asingkan kebimbangan katalog jauh daripada penulisan sistem fail tempatan
- ✅ Gunakan semula metadata yang sama merentas CLI, API, MCP dan A2A---

## 🚫 Non-Goals

- ❌ Pemasangan jauh pada mesin pengguna daripada pelayan yang dihoskan
- ❌ Gantikan `SKILL.md` sebagai format pengarangan kanonik
- ❌ Memerlukan penyumbang untuk menulis manifes dengan tangan
- ❌ Tukar projek menjadi platform baris gilir yang dihoskan berat secara lalai---

## 🏗️ Target Architecture

Satu**teras katalog**dengan tiga permukaan protokol:

| Permukaan | Terbaik Untuk | Mod |
|:--------|:---------|:-----|
| 🌐**REHAT API**| Akses pendaftaran, integrasi UI, pengguna pihak ketiga | Baca sahaja |
| 🔌**MCP**| Penemuan ejen, pasang pratonton, penulisan konfigurasi, resipi pelanggan | Baca sahaja + tulisan tempatan |
| 🤖**A2A**| Orkestra ejen kepada ejen dan penyerahan pelan pemasangan | Kitaran hayat tugas dengan ketahanan tempatan yang mudah dahulu |### ⚙️ Core Principle

>**Semua protokol menggunakan keluarga artifak yang dijana yang sama.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Manifes kekal sebagai kontrak bersama. Arkib ialah artifak pengedaran berlapis di atas kontrak itu, bukan pengganti untuknya.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Digunakan oleh API yang dihoskan dan pelayan MCP jauh.

| ✅ Dibenarkan | ❌ Tidak Dibenarkan |
|:-----------|:----------------|
| Kemahiran mencari | Tulis kepada sistem fail pemanggil |
| Ambil manifes | Mutasi konfigurasi pelanggan tempatan |
| Bandingkan kemahiran | Buat kesimpulan keadaan mesin sewenang-wenangnya |
| Syorkan berkas | — |
| Bina rancangan pemasangan | — |### 2️⃣ Local Installer Mode

Digunakan oleh CLI dan sidecar MCP.

| ✅ Dibenarkan |
|:-----------|
| Kesan pelanggan AI tempatan |
| Periksa kemahiran yang dipasang |
| Pratonton operasi fail |
| Pasang atau alih keluar direktori kemahiran |
| Tulis konfigurasi MCP setempat selepas pratonton |

> 📌 Ini kekal sebagai satu-satunya mod di mana penulisan OS sebenar berlaku.---

## 📐 Protocol Split

### 🌐 REST API

Terbaik untuk akses pendaftaran, carian, perbandingan, muat turun versi dan perancangan pemasangan.

**Titik Akhir**: `DAPATKAN /v1/kemahiran` · `DAPATKAN /v1/kemahiran/:id` · `DAPATKAN /v1/carian` · `DAPATKAN /v1/bandingkan` · `DAPATKAN /v1/himpunan` · `POST /v1/pasang/pelan` · `DAPATKAN /healthz`### 🔌 MCP

Terbaik untuk penemuan berasaskan alat, pengesyoran pantas, pratonton pemasangan dan persediaan MCP khusus pelanggan.

**Alat baca sahaja**: `kemahiran_cari` · `dapat_kemahiran` · `compare_skills` · `mensyor_kemahiran` · `pratonton_pasang`

**Alat setempat**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Terbaik untuk penyerahan penemuan, aliran kerja pelan pemasangan dan pelaksanaan tugas ejen boleh disambung semula.

**Operasi semasa**: `discover-skills` · `recommend-stack` · `prepare-install-plan`---

## 🛡️ Security Model

| Prinsip | Pelaksanaan |
|:----------|:----------------|
| 🔒 Perkhidmatan yang dihoskan adalah baca sahaja | API dan MCP jauh tidak menulis kepada sistem fail pemanggil |
| 📂 Menulis kekal tempatan | CLI dan MCP sidecar sahaja |
| 👁️ Pratonton sebelum menulis | Lalai larian kering pada mutasi tempatan |
| 🔑 Integriti adalah jelas | SHA-256 checksum untuk artifak yang dijana |
| ✍️ Melepaskan kepercayaan adalah jelas | Tandatangan terpisah dikuatkuasakan pada tag keluaran |
| ⚠️ Risiko timbul | Metadata risiko dan keselamatan menyebar ke setiap permukaan masa jalan |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- seni bina sasaran yang didokumenkan
- skema nyata yang ditentukan
- metadata, katalog, manifes, himpunan dan arkib yang dihasilkan### Phase 2: Catalog Service

- API HTTP baca sahaja dengan Express 5
- carian, penapisan, carian manifes, penyenaraian himpunan, perbandingan dan muat turun
- garis dasar tadbir urus yang dihoskan oleh env### Phase 3: MCP Discovery

- integrasi `@modelcontextprotocol/sdk` rasmi
- Pengangkutan `stdio`, HTTP boleh strim dan SSE
- alatan baca sahaja, sumber dan gesaan yang disokong oleh katalog kongsi### Phase 4: Local Install and Config Surface

- kereta sampingan tempatan dengan tulisan yang disenaraikan dibenarkan
- pengesanan untuk 7 pelanggan yang mampu memasang
- penulisan konfigurasi untuk 16 pelanggan berkemampuan konfigurasi merentas 33 sasaran dan 19 profil konfigurasi
- `config-mcp` berpandu mengalir dalam CLI dan shell visual
- sokongan stabil untuk Claude, Kursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose dan Dev Containers### Phase 5: A2A Orchestration

- kad ejen di `/.well-known/agent.json`
- `mesej/hantar`, `mesej/strim`, `tugas/dapat`, `tugas/batal`, `tugas/langgan semula` dan kaedah konfigurasi pemberitahuan tolak
- Kegigihan JSON dan SQLite dengan memulakan semula pemulihan
- pelaksana proses luaran pilihan
- ikut serta pelaksanaan pajakan merentas pekerja untuk SQLite dan penyelarasan Redis lanjutan pilihan
- lalai mudah-pertama disimpan pada memori, JSON atau SQLite tanpa kebergantungan luaran### Current Enhancer Operating Decision

Model `langsung` yang disokong oleh penambah peribadi kini jelas:

- automasi PR yang dihoskan menjalankan percubaan `langsung` berpagar sebelum penerbangan
- jika get laluan OmniRoute awam disekat atau tidak stabil, PR ditandakan `disekat` dengan alasan yang dihadapi oleh operator dan bukannya gagal secara legap
- laluan `live` boleh dipercayai berkanun kekal LAN atau pelaksanaan perkhidmatan tempatan
- GitHub peribadi berjadual menjalankan stay `mock` secara lalai melainkan pengendali secara eksplisit meminta `live`---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Keputusan**: simpan manifes sebagai kontrak kongsi dan simpan arkib setiap kemahiran yang ditandatangani sebagai permukaan pengedaran.

**Mengapa**:
- CLI, API, MCP dan A2A sudah menggunakan bentuk manifes yang dinormalkan
- arkib adalah sesuai untuk muat turun dan pengesahan, tetapi lemah sebagai satu-satunya kontrak penemuan
- ini menjadikan pengarangan mudah dan pengedaran boleh disahkan### 2. Private or Premium Catalogs

**Keputusan**: gunakan semula format manifes dan katalog yang sama serta pengesahan lapisan atau dasar secara luaran.

**Mengapa**:
- ia mengelakkan forking model data
- ia sepadan dengan pendekatan tadbir urus API/MCP semasa
- ia kekal serasi dengan hala tuju ekosistem MCP sekitar bukti kelayakan pelanggan OAuth dan kebenaran diurus perusahaan### 3. Client Writer Strategy

**Keputusan**: berkumpul pada set kecil keluarga eksport berkanun dan hanya simpan penulis yang dipesan lebih dahulu apabila dokumen pelanggan rasmi memerlukannya.

**Keluarga kanonik kini digunakan**:
- JSON `mcpServers`
- `pelayan` JSON
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Mengapa**:
- ia memastikan pelaksanaan dapat dikekalkan
- ia masih menyokong keperluan khusus pelanggan seperti tetapan Claude, Teruskan YAML, Zed `context_servers` dan Codex TOML
- ia mengelakkan mencipta penulis yang rapuh untuk pelanggan tanpa dokumen konfigurasi awam yang stabil---

## 🌍 Research Notes Behind Those Decisions

Keputusan semasa telah disemak berdasarkan dokumen ekosistem rasmi:

- ekosistem MCP kini mendokumentasikan sambungan pilihan seperti bukti kelayakan klien OAuth dan kebenaran diurus perusahaan, yang menyokong luaran pengesahan dihoskan dan bukannya membatalkan format katalog
- OpenAI mendokumenkan pelayan MCP dokumen awam dan corak konfigurasi MCP Codex yang sejajar dengan manifes dikongsi serta strategi penulis pelanggan
- Kod VS mendokumenkan sokongan MCP kelas pertama dan panduan sambungan, yang mengukuhkan pengekalan penulis berasaskan `pelayan` yang berdedikasi
- JetBrains AI Assistant mendokumentasikan persediaan MCP melalui UX produk dan bukannya kontrak fail merentas platform yang stabil, yang menyokong mengekalkannya dalam wilayah manual/coretan buat masa ini---

## 🔮 Longer-Term Decision Points

Hanya beberapa soalan strategik yang masih terbuka:

1. Sama ada mana-mana pelanggan di luar matriks semasa benar-benar mengosongkan bar untuk penulisan kelas pertama, atau sama ada produk yang selebihnya harus kekal manual/coretan sahaja
2. Bilakah, jika pernah, tadbir urus yang dihoskan harus bergerak di belakang gerbang luar atau IdP perusahaan dan bukannya garis dasar dalam proses semasa?
3. Sejauh manakah penjaring harus pergi dalam menilai kedalaman pek rujukan dan kualiti operasi sebelum ia menjadi terlalu pendapat untuk penyumbang?