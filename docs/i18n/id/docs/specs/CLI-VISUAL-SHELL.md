# 🖥️ CLI Visual Shell Specification (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Kontrak perilaku untuk UI terminal berbasis Tinta yang diekspos oleh `omni-skills ui`.**---

## 1. Scope

Shell visual adalah permukaan produk yang dipandu di atas CLI dan mesin penginstal yang ada.

Itu tidak menggantikan:

- penggunaan CLI berbasis tanda ahli
- `alat/bin/install.js`
- alur pemasangan teks yang dipandu
- Perilaku runtime API, MCP, atau A2A

Ini mendefinisikan:

- perilaku `omni-skill ui`
- kontrak cadangan untuk `omni-skills ui --text`
- keadaan lokal dan persistensi preset
- pratinjau peluncuran layanan yang dipandu
- pengulangan untuk instalasi terbaru dan layanan berjalan---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` meluncurkan cangkang visual berbasis Tinta.

Shell visual adalah pengalaman terminal non-ahli utama untuk:

- instal arus
- penemuan dan pemasangan katalog pertama
- permulaan MCP
- permulaan API
- permulaan A2A
- serah terima dokter dan asap### 2.2 Text Fallback

`omni-skills ui --text` meluncurkan antarmuka fallback berbasis readline.

Ini tetap berguna ketika:

- terminal tidak dapat merender shell yang lebih kaya dengan benar
- perilaku mode mentah dibatasi
- penggantian teks minimal lebih disukai### 2.3 Handoff Rule

Shell visual tidak mengimplementasikan ulang runtime layanan atau penulisan instalasi secara langsung.

Setelah pratinjau dan konfirmasi, ia keluar dengan bersih dan menyerahkan eksekusi ke titik masuk CLI yang ada dengan argumen dan variabel lingkungan yang setara.---

## 3. Home Screen Contract

Layar beranda harus menampilkan:

- menginstal keterampilan
- temukan dan instal
- ulangi pemasangan terkini jika ada
- jalankan preset instalasi yang disimpan saat ada
- memulai layanan
- ulangi layanan terkini jika ada
- menjalankan preset layanan tersimpan saat ada
- dokter
- merokok
- keluar

Layar beranda juga akan muncul:

- ketersediaan bundel yang diterbitkan saat ini
- Jumlah negara bagian lokal untuk yang terbaru, preset, dan favorit---

## 4. Install Flow Contract

Alur pemasangan shell visual harus mendukung:

- pemilihan target klien yang diketahui
- pemilihan jalur khusus
- pemasangan perpustakaan lengkap
- instalasi satu keterampilan
- instalasi satu bundel
- cari-lalu-instal
- pratinjau sebelum menulis
- penghematan yang telah ditetapkan
- skill favorit atau toggling bundel

Pratinjau harus menunjukkan:

- label target terselesaikan
- jalur terselesaikan
- instal ruang lingkup
- keterampilan atau bundel yang dipilih bila berlaku
- perintah CLI yang setara---

## 5. Service Flow Contract

Shell visual harus memandu startup untuk:### 5.1 MCP

- transportasi: `stdio`, `stream`, `sse`
- mode: `hanya-baca` atau `lokal`
- Konfigurasi host/port untuk transport jaringan
- pratinjau perintah eksplisit### 5.2 API

- tuan rumah
- pelabuhan
- profil dasar atau yang diperkeras
- pembawa yang diperkeras atau autentikasi kunci API
- parameter batas laju yang diperkeras
- pengaktifan log audit
- pratinjau perintah eksplisit### 5.3 A2A

- tuan rumah
- pelabuhan
- jenis penyimpanan: `memori`, `json`, `sqlite`
- jalur penyimpanan untuk mode tahan lama
- pelaksana: `inline`, `proses`
- Mode SQLite yang mengaktifkan antrian
- Interval jajak pendapat dan durasi sewa untuk mode sewa bersama
- pratinjau perintah eksplisit---

## 6. Local State Contract

Shell visual tetap mempertahankan status lokal saja di:```text
~/.omni-skills/state/ui-state.json
```

Negara bagian saat ini meliputi:

- pemasangan terkini
- peluncuran layanan terbaru
- bernama instal preset
- bernama preset layanan
- keterampilan favorit
- bundel favorit

Shell harus mendukung:

- memutar ulang pemasangan terkini
- memutar ulang peluncuran layanan terkini
- menggunakan kembali preset instalasi bernama
- menggunakan kembali preset layanan bernama---

## 7. Compatibility Contract

Cangkang visualnya bersifat aditif.

Aliran ini harus tetap valid dan stabil:

- `npx omni-skill --kursor --skill omni-figma`
- `npx omni-skill --bundle devops`
- `npx pemasangan omni-skill --guided`
- `npx omni-skills temukan figma --tool kursor --install --yes`
- `npx aliran mcp keterampilan omni --lokal`
- `npx omni-skill api --port 3333`
- `npx keterampilan omni a2a --port 3335`

Shell visual tidak boleh memaksakan dirinya ke jalur perintah ahli yang eksplisit.---

## 8. Safety Contract

Shell visual harus membuat status dan penulisan menjadi eksplisit.

Itu harus:

- pratinjau pemasangan sebelum menulis handoff
- pratinjau perintah peluncuran layanan sebelum dieksekusi
- jauhkan materi rahasia dari pratinjau perintah teks jelas jika memungkinkan
- tetap menyatakan secara lokal saja
- pertahankan perilaku CLI non-interaktif di luar shell visual