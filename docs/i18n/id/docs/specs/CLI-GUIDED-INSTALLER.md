# 🧩 CLI Guided Installer Specification (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Kontrak perilaku untuk pengalaman instalasi terpandu di Omni Skills CLI.**---

## 1. Scope

Spesifikasi ini mendefinisikan perilaku penginstalan terpandu yang berada di atas backend penginstal yang ada.

Itu tidak menggantikan:

- `alat/bin/install.js`
- aliran bendera pakar saat ini
- manifes instalasi selektif

Ini mendefinisikan:

- bagaimana mode terpandu dimasukkan
- bagaimana tujuan dipilih
- bagaimana cakupan pemasangan dipilih
- informasi pratinjau apa yang harus ditampilkan
- cara kerja konfirmasi dan eksekusi---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI harus memasuki mode instalasi terpandu ketika:

- pengguna menjalankan `omni-skills` tanpa argumen di TTY
- pengguna menjalankan `omni-skills install` tanpa pemilih di TTY### 2.2 Forced Guided Entry

CLI juga harus mendukung mode terpandu eksplisit melalui opsi khusus, seperti:

- `omni-skill install --guided`

Mode ini harus bekerja bahkan ketika masukan disalurkan dan tidak dilampirkan ke TTY, selama masukan standar tersedia.### 2.3 Non-Interactive Safety Rule

Saat dipanggil tanpa TTY dan tanpa mode terpandu secara eksplisit diminta:

- pertahankan perilaku default saat ini
- jangan memblokir menunggu petunjuk---

## 3. Destination Model

Instalasi terpandu harus mendukung dua kelas tujuan:### 3.1 Known Client Target

Setiap target yang diketahui memutuskan untuk:

- label yang dapat dibaca manusia
- id alat internal
- pasang bendera
- jalur terselesaikan

Target yang diketahui wajib:

- Kode Claude
- Kursor
- Gemini CLI
- Kodeks CLI
- Kiro
- Antigravitasi
- Kode Terbuka### 3.2 Custom Path Target

Mode jalur khusus harus:

- meminta jalan
- selesaikan `~`
- normalisasi ke jalur absolut
- tunjukkan jalur yang diselesaikan dalam pratinjau---

## 4. Install Scope Model

Instalasi terpandu harus mendukung:### 4.1 Full Library

Setara dengan instalasi saat ini tanpa `--skill` atau `--bundle`.### 4.2 Single Skill

Memungkinkan pengguna memilih satu keterampilan yang diterbitkan.### 4.3 Single Bundle

Memungkinkan pengguna memilih satu paket yang dikurasi dan menyelesaikan anggota yang dipublikasikan.### 4.4 Search Then Install

Memungkinkan pengguna:

- masukkan permintaan pencarian
- periksa hasilnya
- pilih keterampilan atau bundel
- lanjutkan ke pratinjau instalasi---

## 5. Preview Contract

Sebelum dieksekusi, instalasi terpandu harus menampilkan:

- label tujuan
- jalur tujuan
- instal ruang lingkup
- keterampilan atau bundel yang dipilih jika berlaku
- perintah CLI yang setara

Opsional tetapi disarankan:

- Ringkasan metadata keterampilan yang dipilih
- ringkasan ketersediaan bundel---

## 6. Execution Contract

Setelah konfirmasi:

- delegasi penginstalan yang dipandu ke backend penginstal yang ada
- itu tidak mengimplementasikan ulang penulisan file itu sendiri

Pratinjau perintah dan argumen penginstal yang didelegasikan harus sama persis.---

## 7. Result Contract

Setelah eksekusi berhasil, hasil instalasi yang dipandu akan menunjukkan:

- indikator keberhasilan
- jalur tujuan akhir
- perintah yang dijalankan
- tindakan selanjutnya yang direkomendasikan

Contoh tindakan selanjutnya:

- Gunakan keterampilan pada klien yang dipilih
- jalankan `dokter`
- jalankan `mcp stream --local`---

## 8. Compatibility Contract

Berikut ini tetap valid dan tidak berubah:

- `keterampilan omni --kursor --keterampilan omni-figma`
- `omni-skill --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-skills temukan figma --tool kursor --install --yes`

Mode terpandu menambahkan perilaku. Itu tidak menghapus perilaku yang ada.