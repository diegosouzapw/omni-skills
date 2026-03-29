# 🧩 CLI Guided Installer Specification (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Kontrak tingkah laku untuk pengalaman pemasangan berpandu dalam Omni Skills CLI.**---

## 1. Scope

Spesifikasi ini mentakrifkan gelagat pemasangan berpandu yang terletak di atas hujung belakang pemasang sedia ada.

Ia tidak menggantikan:

- `tools/bin/install.js`
- bendera pakar semasa mengalir
- manifes pemasangan terpilih

Ia mentakrifkan:

- cara mod berpandu dimasukkan
- cara destinasi dipilih
- bagaimana skop pemasangan dipilih
- maklumat pratonton apa yang mesti dipaparkan
- bagaimana pengesahan dan pelaksanaan berfungsi---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI harus memasuki mod pemasangan berpandu apabila:

- pengguna menjalankan `kemahiran omni` tanpa args dalam TTY
- pengguna menjalankan `pemasangan kemahiran omni` tanpa pemilih dalam TTY### 2.2 Forced Guided Entry

CLI juga harus menyokong mod berpandu eksplisit melalui pilihan khusus, seperti:

- `pemasangan kemahiran omni --dipandu`

Mod ini harus berfungsi walaupun semasa input disalurkan dan tidak disambungkan pada TTY, selagi input standard tersedia.### 2.3 Non-Interactive Safety Rule

Apabila dipanggil tanpa TTY dan tanpa mod berpandu diminta secara eksplisit:

- mengekalkan tingkah laku lalai semasa
- jangan sekat menunggu gesaan---

## 3. Destination Model

Pemasangan berpandu mesti menyokong dua kelas destinasi:### 3.1 Known Client Target

Setiap sasaran yang diketahui memutuskan untuk:

- label boleh dibaca manusia
- id alat dalaman
- pasang bendera
- jalan diselesaikan

Sasaran yang diketahui yang diperlukan:

- Kod Claude
- Kursor
- Gemini CLI
- Codex CLI
- Kiro
- Antigraviti
- OpenCode### 3.2 Custom Path Target

Mod laluan tersuai mesti:

- gesa untuk laluan
- selesaikan `~`
- normalkan kepada laluan mutlak
- tunjukkan laluan yang diselesaikan dalam pratonton---

## 4. Install Scope Model

Pemasangan berpandu mesti menyokong:### 4.1 Full Library

Setara dengan pemasangan semasa tanpa `--skill` atau `--bundle`.### 4.2 Single Skill

Membolehkan pengguna memilih satu kemahiran yang diterbitkan.### 4.3 Single Bundle

Membolehkan pengguna memilih satu himpunan susun atur dan menyelesaikan ahli yang diterbitkan.### 4.4 Search Then Install

Membolehkan pengguna:

- masukkan pertanyaan carian
- periksa keputusan
- pilih kemahiran atau berkas
- teruskan ke pratonton pemasangan---

## 5. Preview Contract

Sebelum pelaksanaan, pemasangan berpandu mesti memaparkan:

- label destinasi
- laluan destinasi
- memasang skop
- kemahiran atau himpunan terpilih jika berkenaan
- arahan CLI yang setara

Pilihan tetapi disyorkan:

- ringkasan metadata kemahiran terpilih
- ringkasan ketersediaan berkas---

## 6. Execution Contract

Selepas pengesahan:

- wakil pemasangan berpandu ke bahagian belakang pemasang sedia ada
- ia tidak melaksanakan semula fail menulis sendiri

Pratonton arahan dan argumen pemasang yang diwakilkan sebenar mesti sepadan dengan tepat.---

## 7. Result Contract

Selepas pelaksanaan berjaya, hasil pemasangan berpandu harus menunjukkan:

- penunjuk kejayaan
- laluan destinasi akhir
- arahan yang telah dilaksanakan
- tindakan yang disyorkan seterusnya

Contoh tindakan seterusnya:

- gunakan kemahiran dalam klien yang dipilih
- lari `doktor`
- jalankan `mcp stream --local`---

## 8. Compatibility Contract

Perkara berikut kekal sah dan tidak berubah:

- `kemahiran omni --kursor --kemahiran omni-figma`
- `kemahiran omni --bundle full-stack`
- `kemahiran omni --path ./skills`
- `omni-skills find figma --tool cursor --install --yes`

Mod berpandu menambah tingkah laku. Ia tidak membuang tingkah laku sedia ada.