# 🧭 CLI UX Roadmap (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Pelan hala tuju produk untuk mengembangkan Kemahiran Omni daripada pemasang pertama bendera kepada pengalaman terminal berpandu untuk pengguna pakar dan bukan pakar.**
> Skop: pakej npm, pengalaman pemasangan CLI, UI terminal, aliran pelancaran perkhidmatan dan onboarding visual.---

## 1. Problem Statement

Asas masa jalan semasa adalah kukuh, tetapi pengalaman kemasukan masih dioptimumkan untuk pengguna yang sudah memahami:

- pelanggan mana yang mereka mahu sasarkan
- pemilih pemasangan yang mereka mahu gunakan
- cara menterjemah matlamat kepada `--skill`, `--bundle` atau `find`
- apabila mereka memerlukan pemasangan CLI sahaja berbanding perkhidmatan MCP, API atau A2A

hari ini:

- `npx omni-skills` lalai kepada Antigravity
- ini sah secara teknikal dan serasi ke belakang
- tetapi ia tidak sesuai untuk pengguna kali pertama atau kurang pengendali teknikal

CLI sudah mempunyai mod interaktif asas, tetapi ia masih lebih dekat dengan utiliti pembangun daripada permukaan produk berpandu.

Pelan jalan ini mentakrifkan laluan ke UX awam yang lebih kukuh tanpa melanggar antara muka berasaskan bendera semasa.---

## 1.1 Delivery Status

Pelan hala tuju kini sebahagian besarnya dilaksanakan dalam keadaan repositori semasa.

Selesai:

- Fasa 1: Pemilihan Entrypoint Berpandu
- Fasa 2: Wizard Pemasangan Berpandu
- Fasa 3: Shell Terminal Visual
- Fasa 4: Hab Perkhidmatan Visual
- Fasa 5: Profil Disimpan dan Kebolehulangan
- Fasa 6: Pengerasan, Ujian dan Dokumentasi---

## 2. Goals

- Kekalkan aliran kerja CLI pakar semasa
- Jadikan titik masuk tanpa hujah selamat dan mudah difahami untuk pengguna kali pertama
- Gantikan lalai senyap dalam konteks interaktif dengan pemilihan berpandu
- Sokong pelanggan AI yang diketahui dan laluan pemasangan tersuai sewenang-wenangnya
- Tukar pemasangan, penemuan dan but perkhidmatan menjadi perjalanan pengguna yang koheren
- Sediakan UI terminal visual yang dirasakan seperti produk, bukan hanya skrip
- Pastikan enjin pemasangan, katalog dan masa jalan perkhidmatan boleh diguna semula di bawah UI---

## 3. Non-Goals

- Menggantikan CLI berasaskan bendera semasa
- Mengalih keluar Antigraviti sebagai sasaran lalai yang disokong
- Menghantar UI web sebagai mod penghantaran utama
- Memfaktorkan semula protokol API, MCP atau A2A sendiri sebagai sebahagian daripada kerja UX ini
- Menggantikan pengarangan `SKILL.md` dengan panel pentadbir yang disokong pangkalan data---

## 4. Design Principles

### 4.1 Backward Compatibility First

Perintah ini mesti terus berfungsi sama seperti hari ini:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills find figma --tool cursor --install --yes`
- `strim mcp kemahiran omni-npx --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Sesi terminal interaktif tanpa hujah: pengalaman berpandu terbuka
- Seruan bukan interaktif tanpa hujah: kekalkan gelagat lalai pemasangan semasa
- Perintah dan bendera eksplisit sentiasa memenangi inferens UI### 4.3 Reuse One Engine Across Modes

Yang berikut harus berkongsi logik dalaman yang sama:

- CLI didahulukan bendera
- CLI mod teks berpandu
- UI terminal visual

Ini bermakna lapisan UX tidak boleh memiliki logik perniagaan. Ia harus mengatur tindakan yang boleh diguna semula.### 4.4 Preview Before Write

Semua aliran berpandu yang menyebabkan penulisan hendaklah memaparkan:

- sasaran diselesaikan
- jalan diselesaikan
- kemahiran atau himpunan terpilih
- arahan CLI yang setara
- gesaan pengesahan### 4.5 Visual Does Not Mean Implicit

Walaupun dalam UI yang lebih kaya, sistem harus tetap menyatakan keadaan dan tindakan yang jelas:

- ke mana pemasangan akan pergi
- apa yang akan ditulis
- pengangkutan atau pelabuhan mana yang akan digunakan oleh perkhidmatan
- sama ada aliran boleh baca sahaja atau boleh tulis tempatan---

## 5. User Personas

### 5.1 Expert CLI User

Keperluan:

- arahan pantas
- tiada gesaan paksa
- bendera stabil
- kebolehskripan### 5.2 Guided Product User

Keperluan:

- pilihan yang jelas
- tiada andaian bahawa Antigraviti dikehendaki
- sokongan untuk pemasangan laluan tersuai
- pratonton pemasangan yang boleh difahami
- perbezaan yang boleh dilihat antara tindakan pemasangan dan masa jalan pelayan### 5.3 Operator / Platform User

Keperluan:

- keupayaan untuk melancarkan MCP, API dan A2A secara visual
- lalai waras
- penalaan pilihan pelabuhan, pengangkutan, kegigihan, mod pelaksana, pengesahan dan mod tempatan---

## 6. Target UX Model

Produk harus mendedahkan tiga lapisan:### 6.1 Expert Mode

Perintah langsung dan bendera.

Contoh:

- `npx omni-skills --cursor --skill omni-figma`
- `strim mcp kemahiran omni-npx --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Dicetuskan apabila:

- pengguna menjalankan `npx omni-skills` dalam TTY tanpa args
- pengguna menjalankan `npx omni-skills install` tanpa pemilih konkrit
- pengguna secara eksplisit memilih mod berpandu

Aliran pemasangan berpandu harus melalui:

1. pelanggan sasaran atau laluan tersuai
2. jenis pemasangan
3. kemahiran atau pemilihan berkas
4. pratonton
5. pengesahan
6. pelaksanaan
7. langkah seterusnya### 6.3 Visual Operations Hub

Dicetuskan oleh:

- `npx omni-skills ui`

Ini sepatutnya menjadi "skrin utama" untuk pengguna dan pengendali bukan pakar.

Tindakan teras:

- kemahiran memasang
- temui kemahiran
- mulakan MCP
- mulakan API
- mulakan A2A
- lari doktor
- menjalankan pemeriksaan asap---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Hasil:

- `npx omni-skills` dalam TTY tidak lagi secara senyap menganggap Antigraviti
- pengguna digesa untuk memilih pelanggan atau laluan tersuai

Keperluan:

- mengekalkan tingkah laku pemasangan lalai bukan TTY
- tambah pemilih sasaran
- menyokong tangkapan laluan tersuai### Phase 2: Guided Install Wizard

Hasil:

- pemasangan menjadi aliran berpandu penuh

Keperluan:

- pemilihan mod pemasangan:
  - perpustakaan penuh
  - satu kemahiran
  - satu berkas
  - cari kemudian pasang
- pasang pratonton
- rendering arahan yang setara
- pengesahan dan pelaksanaan### Phase 3: Visual Terminal Shell

Hasil:

- UI teks asas semasa menjadi aplikasi terminal berjenama

Keperluan:

- susun atur yang lebih kaya
- penjenamaan dan logo projek
- stepper dan kad yang lebih baik
- navigasi dipacu papan kekunci
- Bertindak balas pelaksanaan terminal melalui Dakwat### Phase 4: Visual Service Hub

Hasil:

- MCP, API dan A2A boleh dimulakan daripada UI visual

Keperluan:

- aliran MCP berpandu
- aliran API berpandu
- aliran A2A berpandu
- mod boleh dilihat dan pratonton konfigurasi### Phase 5: Saved Profiles and Repeatability

Hasil:

- pratetap pemasangan atau perkhidmatan biasa boleh digunakan semula

Keperluan:

- ingat sasaran baru-baru ini
- pratetap perkhidmatan yang disimpan
- arahan terkini
- berkas atau kemahiran kegemaran### Phase 6: Hardening, Tests, and Documentation

Hasil:

- UX menjadi antara muka awam yang dikekalkan, bukan kemudahan ad hoc

Keperluan:

- litupan asap
- ujian regresi
- kemas kini dokumen
- panduan pengendali
- semakan keserasian pakej---

## 8. Proposed Command Model

### Stable Commands

- `kemahiran omni`
- `pemasangan kemahiran omni`
- `mencari kemahiran omni`
- `ui kemahiran omni`
- `mcp kemahiran omni`
- `api kemahiran omni`
- `kemahiran omni a2a`
- `doktor berkemahiran omni`
- `asap kemahiran omni`### Recommended Behavior

| Doa | Tingkah laku |
|:-----------|:---------|
| `kemahiran omni` dalam TTY, tiada hujah | Entri pemasangan berpandu |
| `kemahiran omni` dalam bukan TTY, tiada args | Pemasangan lalai Antigraviti semasa |
| `pemasangan kemahiran omni` dalam TTY, tiada pemilih | Wizard pemasangan berpandu |
| `omni-skills install --guided` | Paksa aliran pemasangan berpandu |
| `omni-kemahiran ui` | Buka hab operasi visual |
| bendera eksplisit | Laksanakan terus tanpa melencong ke dalam aliran berpandu |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Pilihan:

- Kod Claude
- Kursor
- Gemini CLI
- Codex CLI
- Kiro
- Antigraviti
- OpenCode
- Laluan tersuai

Output:

- sasaran yang diketahui ATAU laluan sistem fail tersuai yang dipilih### Step 2: Choose Install Type

Pilihan:

- perpustakaan penuh
- satu kemahiran yang diterbitkan
- satu berkas
- cari kemudian pasang

Output:

- memasang skop### Step 3: Resolve Selection

Bergantung pada jenis pemasangan:

- perpustakaan penuh: tiada pemilih tambahan
- kemahiran: senaraikan atau pilih kemahiran
- berkas: senaraikan atau pilih satu berkas
- carian: gesaan untuk pertanyaan, tunjukkan kemahiran padanan dan himpunan### Step 4: Preview

paparan:

- sasaran yang dipilih
- jalan diselesaikan
- kemahiran atau berkas yang dipilih
- arahan CLI yang setara
- sama ada aliran adalah selektif atau pemasangan penuh### Step 5: Confirm

Pengguna mengesahkan:

- ya → laksanakan
- tidak → batalkan atau balik### Step 6: Result

paparan:

- kejayaan/kegagalan
- laluan destinasi
- cadangan langkah seterusnya---

## 10. Information Architecture for the Visual Operations Hub

Hab operasi harus mendedahkan:### 10.1 Install

- aliran pemasangan berpandu
- kemahiran atau carian bundle
- laluan tersuai### 10.2 Discover

- carian katalog
- penapis
- pratonton metadata
- pasang handoff### 10.3 MCP

Pilihan:

- pengangkutan: stdio, aliran, sse
- mod tempatan hidup/mati
- tuan rumah
- pelabuhan### 10.4 API

Pilihan:

- tuan rumah
- pelabuhan
- pengesahan pilihan
- had kadar pilihan### 10.5 A2A

Pilihan:

- tuan rumah
- pelabuhan
- jenis kedai: memori, json, sqlite
- pelaksana: sebaris, proses
- pilihan pajakan apabila baris gilir sqlite didayakan### 10.6 Diagnostics

- doktor
- asap---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

`tools/bin/cli.js` semasa bercampur:

- menghurai arahan
- pembentangan
- gesaan interaktif
- orkestrasi tindakan
- but perkhidmatan

Struktur baharu harus memindahkan logik boleh guna semula ke:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` hendaklah kekal sebagai bahagian belakang berkebolehan menulis.

UI berpandu harus memanggil bahagian belakang pemasang sedia ada dan bukannya menduplikasi logik pemasangan.### 11.3 Keep Find/Search Reusable

Wizard pemasangan berpandu harus menggunakan semula teras katalog yang sama dan logik carian CLI yang sudah dikuasakan:

- `cari`
- pasang pratonton
- resolusi berkas### 11.4 Prepare for Ink Without Forcing It Early

Penghantaran pertama boleh kekal dalam gesaan mod teks.

Tetapi seni bina harus mengekalkan jahitan yang jelas supaya aliran teks kemudiannya boleh diberikan melalui Dakwat.---

## 12. Risks

### 12.1 Breaking Existing Automation

Mitigasi:

- hanya buka UI berpandu secara automatik dalam TTY
- kekalkan lalai semasa dalam bukan TTY
- mengekalkan aliran bendera yang jelas### 12.2 Letting UI Own Business Logic

Mitigasi:

- pindahkan orkestrasi ke modul tindakan boleh guna semula
- kekalkan pemasang dan logik but perkhidmatan di bawah lapisan UI### 12.3 Ink Migration Too Early

Mitigasi:

- pertama menghantar aliran berpandu dalam timbunan terminal Nod semasa
- kemudian berhijrah ke Dakwat setelah semantik aliran stabil### 12.4 Incomplete Service UX

Mitigasi:

- wizard pemasangan kapal dahulu
- kemudian pelancaran perkhidmatan berpandukan lapisan---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` dalam TTY tidak lagi dipasang dengan serta-merta
- pengguna boleh memilih pelanggan sasaran atau laluan tersuai
- invocation non-TTY no-arg masih berfungsi seperti sebelumnya### Phase 2

- pemasangan berpandu menyokong perpustakaan penuh, kemahiran, himpunan dan cari-kemudian-pasang
- pratonton sentiasa ditunjukkan sebelum menulis
- arahan setara dipaparkan### Phase 3

- UI terminal berjenama wujud
- UI lebih berstruktur visual daripada menu garis baca biasa
- navigasi adalah mesra papan kekunci### Phase 4

- pengguna boleh memulakan MCP, API dan A2A dari hab visual
- pilihan masa jalan utama boleh dikonfigurasikan dalam bentuk berpandu### Phase 5

- pilihan terbaharu atau disimpan boleh diguna semula
- aliran ulangan mengambil lebih sedikit gesaan### Phase 6

- liputan asap mencerminkan titik masuk UX baharu
- dokumen menerangkan mod berpandu dan tingkah laku wizard perkhidmatan---

## 14. Execution Order

Pelan hala tuju ini mesti dilaksanakan dalam susunan ini:

1. Pemilihan pintu masuk berpandu
2. Wizard pemasangan berpandu
3. Cangkerang terminal visual
4. Hab perkhidmatan visual
5. Profil yang disimpan dan kebolehulangan
6. Pengerasan, ujian dan penggilap dokumen

Kerja pelaksanaan harus membaca fail tugas yang berkaitan sebelum memulakan setiap tugas supaya kerja CLI kekal sejajar dengan rancangan dan tidak hanyut.