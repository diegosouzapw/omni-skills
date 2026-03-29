# 🧭 CLI UX Roadmap (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Peta jalan produk untuk mengembangkan Omni Skills dari penginstal pertama menjadi pengalaman terminal terpandu bagi pengguna ahli dan non-ahli.**
> Cakupan: paket npm, pengalaman instalasi CLI, UI terminal, alur peluncuran layanan, dan orientasi visual.---

## 1. Problem Statement

Fondasi runtime saat ini kuat, namun pengalaman masuk masih dioptimalkan untuk pengguna yang sudah memahami:

- klien mana yang ingin mereka targetkan
- pemilih instalasi mana yang ingin mereka gunakan
- cara menerjemahkan tujuan menjadi `--skill`, `--bundle`, atau `find`
- ketika mereka memerlukan instalasi CLI saja versus layanan MCP, API, atau A2A

Hari ini:

- `npx omni-skills` defaultnya adalah Antigravitasi
- ini secara teknis valid dan kompatibel ke belakang
- tetapi ini tidak ideal untuk pengguna pertama kali atau operator yang kurang teknis

CLI sudah memiliki mode interaktif dasar, namun masih lebih mirip dengan utilitas pengembang daripada permukaan produk yang dipandu.

Peta jalan ini menentukan jalur menuju UX publik yang lebih kuat tanpa merusak antarmuka berbasis flag saat ini.---

## 1.1 Delivery Status

Peta jalan tersebut kini sebagian besar diterapkan pada status repositori saat ini.

Selesai:

- Fase 1: Seleksi Titik Masuk Terpandu
- Fase 2: Wizard Penginstalan Terpandu
- Fase 3: Shell Terminal Visual
- Fase 4: Pusat Layanan Visual
- Fase 5: Profil Tersimpan dan Pengulangan
- Tahap 6: Pengerasan, Pengujian, dan Dokumentasi---

## 2. Goals

- Pertahankan alur kerja CLI ahli saat ini
- Jadikan titik masuk tanpa argumen aman dan mudah dipahami oleh pengguna pertama kali
- Ganti default senyap dalam konteks interaktif dengan pilihan terpandu
- Mendukung klien AI yang dikenal dan jalur pemasangan khusus yang sewenang-wenang
- Ubah penginstalan, penemuan, dan boot layanan menjadi perjalanan pengguna yang koheren
- Menyediakan UI terminal visual yang terasa seperti produk, bukan sekadar skrip
- Jaga agar mesin instalasi, katalog, dan runtime layanan dapat digunakan kembali di bawah UI---

## 3. Non-Goals

- Mengganti CLI berbasis bendera saat ini
- Menghapus Antigravitasi sebagai target default yang didukung
- Pengiriman UI web sebagai mode pengiriman utama
- Memfaktorkan ulang protokol API, MCP, atau A2A sebagai bagian dari pekerjaan UX ini
- Mengganti penulisan `SKILL.md` dengan panel admin yang didukung database---

## 4. Design Principles

### 4.1 Backward Compatibility First

Perintah-perintah ini harus terus berfungsi persis seperti sekarang:

- `npx omni-skill --kursor --skill omni-figma`
- `npx omni-skill --bundle devops`
- `npx omni-skills temukan figma --tool kursor --install --yes`
- `npx aliran mcp keterampilan omni --lokal`
- `npx omni-skill api --port 3333`
- `npx keterampilan omni a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Sesi terminal interaktif tanpa argumen: pengalaman terpandu terbuka
- Pemanggilan non-interaktif tanpa argumen: pertahankan perilaku default pemasangan saat ini
- Perintah dan tanda eksplisit selalu memenangkan inferensi UI### 4.3 Reuse One Engine Across Modes

Berikut ini harus berbagi logika internal yang sama:

- CLI yang mengutamakan bendera
- CLI mode teks terpandu
- UI terminal visual

Artinya lapisan UX tidak boleh memiliki logika bisnis. Ini harus mengatur tindakan yang dapat digunakan kembali.### 4.4 Preview Before Write

Semua alur terpandu yang menyebabkan penulisan harus menampilkan:

- target terselesaikan
- jalur terselesaikan
- keterampilan atau bundel yang dipilih
- perintah CLI yang setara
- konfirmasi cepat### 4.5 Visual Does Not Mean Implicit

Bahkan di UI yang lebih kaya, sistem harus tetap membuat status dan tindakan menjadi eksplisit:

- kemana tujuan instalasi
- apa yang akan ditulis
- transportasi atau pelabuhan mana yang akan digunakan suatu layanan
- apakah suatu aliran berkemampuan baca-saja atau mampu menulis lokal---

## 5. User Personas

### 5.1 Expert CLI User

Kebutuhan:

- perintah cepat
- tidak ada perintah yang dipaksakan
- bendera stabil
- kemampuan skrip### 5.2 Guided Product User

Kebutuhan:

- pilihan yang jelas
- tidak ada asumsi bahwa Antigravitasi diinginkan
- dukungan untuk pemasangan jalur khusus
- pratinjau instalasi yang dapat dimengerti
- perbedaan yang terlihat antara tindakan instalasi dan waktu proses server### 5.3 Operator / Platform User

Kebutuhan:

- kemampuan untuk meluncurkan MCP, API, dan A2A secara visual
- default yang waras
- penyetelan opsional port, transport, persistensi, mode eksekutor, autentikasi, dan mode lokal---

## 6. Target UX Model

Produk harus memperlihatkan tiga lapisan:### 6.1 Expert Mode

Perintah dan bendera langsung.

Contoh:

- `npx omni-skill --kursor --skill omni-figma`
- `npx aliran mcp keterampilan omni --lokal`
- `npx keterampilan omni a2a --port 3335`### 6.2 Guided Install Mode

Dipicu ketika:

- pengguna menjalankan `npx omni-skills` dalam TTY tanpa argumen
- pengguna menjalankan `npx omni-skills install` tanpa pemilih yang konkret
- pengguna secara eksplisit ikut serta dalam mode terpandu

Alur pemasangan yang dipandu harus melalui:

1. klien target atau jalur khusus
2. tipe pemasangan
3. pemilihan skill atau bundel
4. pratinjau
5. konfirmasi
6. eksekusi
7. langkah selanjutnya### 6.3 Visual Operations Hub

Dipicu oleh:

- `npx keterampilan omni ui`

Ini harus menjadi “layar utama” bagi pengguna dan operator non-ahli.

Tindakan inti:

- menginstal keterampilan
- temukan keterampilan
- mulai MCP
- mulai API
- mulai A2A
- jalankan dokter
- jalankan pemeriksaan asap---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Hasil:

- `npx omni-skills` di TTY tidak lagi menggunakan Antigravitasi secara diam-diam
- pengguna diminta untuk memilih klien atau jalur khusus

Persyaratan:

- pertahankan perilaku pemasangan default non-TTY
- tambahkan pemilih target
- mendukung pengambilan jalur khusus### Phase 2: Guided Install Wizard

Hasil:

- Instalasi menjadi aliran terpandu penuh

Persyaratan:

- pemilihan mode pemasangan:
  - perpustakaan lengkap
  - satu keterampilan
  - satu bungkusan
  - cari lalu instal
- instal pratinjau
- rendering perintah yang setara
- konfirmasi dan eksekusi### Phase 3: Visual Terminal Shell

Hasil:

- UI teks dasar saat ini menjadi aplikasi terminal bermerek

Persyaratan:

- tata letak yang lebih kaya
- branding dan logo proyek
- stepper dan kartu yang lebih baik
- navigasi berbasis keyboard
- Bereaksi implementasi terminal melalui Tinta### Phase 4: Visual Service Hub

Hasil:

- MCP, API, dan A2A dapat dimulai dari UI visual

Persyaratan:

- aliran MCP yang dipandu
- alur API yang dipandu
- Aliran A2A yang dipandu
- mode terlihat dan pratinjau konfigurasi### Phase 5: Saved Profiles and Repeatability

Hasil:

- Instalasi umum atau preset layanan dapat digunakan kembali

Persyaratan:

- ingat target terkini
- preset layanan yang disimpan
- perintah terbaru
- bundel atau keterampilan favorit### Phase 6: Hardening, Tests, and Documentation

Hasil:

- UX menjadi antarmuka publik yang dikelola, bukan kenyamanan ad hoc

Persyaratan:

- cakupan asap
- tes regresi
- pembaruan dokumen
- bimbingan operator
- tinjauan kompatibilitas paket---

## 8. Proposed Command Model

### Stable Commands

- `keterampilan omni`
- `penginstalan keterampilan omni`
- `keterampilan omni ditemukan`
- `keterampilan omni ui`
- `omni-skill mcp`
- `api keterampilan omni`
- `keterampilan omni a2a`
- `dokter dengan keterampilan omni`
- `asap keterampilan omni`### Recommended Behavior

| Doa | Perilaku |
|:-----------|:---------|
| `omni-skills` di TTY, tanpa argumen | Entri pemasangan yang dipandu |
| `omni-skills` di non-TTY, tanpa argumen | Pemasangan default Antigravitasi saat ini |
| `omni-skills install` di TTY, tanpa penyeleksi | Wizard penginstalan terpandu |
| `omni-skill install --guided` | Alur pemasangan yang dipandu paksa |
| `omni-skill ui` | Buka hub operasi visual |
| bendera eksplisit | Jalankan secara langsung tanpa menyimpang ke aliran terpandu |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Pilihan:

- Kode Claude
- Kursor
- Gemini CLI
- Kodeks CLI
- Kiro
- Antigravitasi
- Kode Terbuka
- Jalur khusus

Keluaran:

- memilih target yang diketahui ATAU jalur sistem file khusus### Step 2: Choose Install Type

Pilihan:

- perpustakaan lengkap
- satu keterampilan yang diterbitkan
- satu bungkusan
- cari lalu instal

Keluaran:

- instal ruang lingkup### Step 3: Resolve Selection

Tergantung pada jenis instalasi:

- perpustakaan lengkap: tidak ada pemilih tambahan
- keterampilan: daftar atau pilih keterampilan
- bundel: daftar atau pilih bundel
- pencarian: meminta kueri, menunjukkan keterampilan dan bundel yang cocok### Step 4: Preview

Tampilan:

- sasaran yang dipilih
- jalur terselesaikan
- keterampilan atau bundel yang dipilih
- perintah CLI yang setara
- apakah alirannya selektif atau full install### Step 5: Confirm

Pengguna mengonfirmasi:

- ya → jalankan
- tidak → batalkan atau kembali### Step 6: Result

Tampilan:

- sukses/gagal
- jalur tujuan
- saran langkah selanjutnya---

## 10. Information Architecture for the Visual Operations Hub

Hub operasi harus memperlihatkan:### 10.1 Install

- alur pemasangan yang dipandu
- pencarian keterampilan atau bundel
- jalur khusus### 10.2 Discover

- pencarian katalog
- filter
- pratinjau metadata
- pasang handoff### 10.3 MCP

Pilihan:

- transportasi: stdio, streaming, sse
- mode lokal aktif/nonaktif
- tuan rumah
- pelabuhan### 10.4 API

Pilihan:

- tuan rumah
- pelabuhan
- autentikasi opsional
- batas tarif opsional### 10.5 A2A

Pilihan:

- tuan rumah
- pelabuhan
- jenis penyimpanan: memori, json, sqlite
- pelaksana: sebaris, proses
- opsi sewa ketika antrian sqlite diaktifkan### 10.6 Diagnostics

- dokter
- merokok---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Campuran `tools/bin/cli.js` saat ini:

- penguraian perintah
- presentasi
- petunjuk interaktif
- orkestrasi aksi
- boot layanan

Struktur baru harus memindahkan logika yang dapat digunakan kembali ke:

- `alat/lib/cli-actions/`
- `alat/lib/instal-aliran/`
- `alat/lib/aliran layanan/`
- `alat/lib/model-ui/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` harus tetap menjadi backend yang mampu menulis.

UI yang dipandu harus memanggil backend penginstal yang ada, bukan menduplikasi logika instalasi.### 11.3 Keep Find/Search Reusable

Panduan instalasi yang dipandu harus menggunakan kembali inti katalog dan logika pencarian CLI yang sama yang sudah ada:

- `temukan`
- instal pratinjau
- resolusi bundel### 11.4 Prepare for Ink Without Forcing It Early

Pengiriman pertama dapat tetap dalam mode teks.

Namun arsitekturnya harus menjaga jahitan yang jelas sehingga aliran teks nantinya dapat dirender melalui Tinta.---

## 12. Risks

### 12.1 Breaking Existing Automation

Mitigasi:

- hanya membuka UI terpandu secara otomatis di TTY
- pertahankan default saat ini di non-TTY
- pertahankan aliran bendera yang eksplisit### 12.2 Letting UI Own Business Logic

Mitigasi:

- pindahkan orkestrasi ke modul tindakan yang dapat digunakan kembali
- pertahankan logika boot penginstal dan layanan di bawah lapisan UI### 12.3 Ink Migration Too Early

Mitigasi:

- pertama kirimkan aliran terpandu di tumpukan terminal Node saat ini
- lalu bermigrasi ke Tinta setelah semantik aliran stabil### 12.4 Incomplete Service UX

Mitigasi:

- kirim wizard pemasangan terlebih dahulu
- kemudian peluncuran layanan yang dipandu lapisan---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` di TTY tidak lagi langsung diinstal
- pengguna dapat memilih klien target atau jalur khusus
- pemanggilan non-TTY no-arg masih berfungsi seperti sebelumnya### Phase 2

- Instalasi terpandu mendukung perpustakaan lengkap, keterampilan, bundel, dan pencarian-lalu-instal
- pratinjau selalu ditampilkan sebelum menulis
- perintah yang setara ditampilkan### Phase 3

- UI terminal bermerek ada
- UI lebih terstruktur secara visual dibandingkan menu readline biasa
- navigasi ramah keyboard### Phase 4

- pengguna dapat memulai MCP, API, dan A2A dari hub visual
- opsi runtime utama dapat dikonfigurasi dalam bentuk terpandu### Phase 5

- preferensi terkini atau yang disimpan dapat digunakan kembali
- aliran berulang membutuhkan lebih sedikit perintah### Phase 6

- cakupan asap mencerminkan titik masuk UX yang baru
- dokumen menjelaskan mode terpandu dan perilaku wizard layanan---

## 14. Execution Order

Peta jalan ini harus diterapkan dengan urutan sebagai berikut:

1. Pemilihan titik masuk yang dipandu
2. Wizard penginstalan yang dipandu
3. Cangkang terminal visual
4. Pusat layanan visual
5. Profil tersimpan dan pengulangan
6. Pengerasan, pengujian, dan pemolesan dokumen

Pekerjaan implementasi harus membaca file tugas yang relevan sebelum memulai setiap tugas sehingga pekerjaan CLI tetap selaras dengan rencana dan tidak menyimpang.