# 🖥️ CLI Visual Shell Specification (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Kontrak gelagat untuk UI terminal berasaskan Dakwat yang didedahkan oleh `ui kemahiran omni`.**---

## 1. Scope

Cangkang visual ialah permukaan produk berpandu di atas enjin CLI dan pemasang sedia ada.

Ia tidak menggantikan:

- penggunaan CLI berasaskan bendera pakar
- `tools/bin/install.js`
- aliran pemasangan teks berpandu
- Tingkah laku masa jalan API, MCP atau A2A

Ia mentakrifkan:

- tingkah laku `omni-kemahiran ui`
- kontrak sandaran untuk `omni-skills ui --text`
- negeri tempatan dan kegigihan pratetap
- pratonton pelancaran perkhidmatan berpandu
- kebolehulangan untuk pemasangan dan perkhidmatan yang dijalankan baru-baru ini---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` melancarkan cangkerang visual berasaskan Dakwat.

Cangkang visual ialah pengalaman terminal bukan pakar utama untuk:

- pasang aliran
- katalog-penemuan pertama dan pasang
- Permulaan MCP
- Permulaan API
- Permulaan A2A
- lepas tangan doktor dan asap### 2.2 Text Fallback

`omni-skills ui --text` melancarkan antara muka sandaran berasaskan baris baca.

Ini kekal berguna apabila:

- terminal tidak boleh menghasilkan shell yang lebih kaya dengan betul
- tingkah laku mod mentah dikekang
- sandaran teks minimum lebih diutamakan### 2.3 Handoff Rule

Cangkang visual tidak melaksanakan semula masa jalan perkhidmatan atau menulis pemasangan secara langsung.

Selepas pratonton dan pengesahan, ia keluar dengan bersih dan menyerahkan pelaksanaan ke titik masuk CLI sedia ada dengan hujah yang setara dan pembolehubah persekitaran.---

## 3. Home Screen Contract

Skrin utama mesti mendedahkan:

- kemahiran memasang
- cari dan pasang
- ulangi pemasangan terbaru apabila ada
- jalankan pratetap pemasangan yang disimpan apabila ada
- mulakan perkhidmatan
- ulangi perkhidmatan terkini apabila ada
- jalankan pratetap perkhidmatan yang disimpan apabila ada
- doktor
- asap
- keluar

Skrin utama juga harus muncul:

- ketersediaan berkas semasa yang diterbitkan
- kiraan negeri tempatan untuk terbaharu, pratetap dan kegemaran---

## 4. Install Flow Contract

Aliran pemasangan shell visual mesti menyokong:

- pemilihan sasaran pelanggan yang diketahui
- pemilihan laluan tersuai
- pemasangan perpustakaan penuh
- pemasangan satu kemahiran
- pemasangan satu berkas
- cari-kemudian-pasang
- pratonton sebelum menulis
- penjimatan pratetap
- kemahiran kegemaran atau togol berkas

Pratonton mesti ditunjukkan:

- label sasaran diselesaikan
- jalan diselesaikan
- memasang skop
- kemahiran atau himpunan terpilih apabila berkenaan
- arahan CLI yang setara---

## 5. Service Flow Contract

Cangkang visual mesti membimbing permulaan untuk:### 5.1 MCP

- pengangkutan: `stdio`, `strim`, `sse`
- mod: `baca sahaja` atau `tempatan`
- konfigurasi hos/port untuk pengangkutan rangkaian
- pratonton arahan eksplisit### 5.2 API

- tuan rumah
- pelabuhan
- profil asas atau keras
- pembawa keras atau pengesahan kunci API
- parameter had kadar yang mengeras
- pembolehan log audit
- pratonton arahan eksplisit### 5.3 A2A

- tuan rumah
- pelabuhan
- jenis kedai: `memori`, `json`, `sqlite`
- laluan kedai untuk mod tahan lama
- pelaksana: `sebaris`, `proses`
- Mod SQLite didayakan baris gilir
- selang undian dan tempoh pajakan untuk mod pajakan kongsi
- pratonton arahan eksplisit---

## 6. Local State Contract

Cangkang visual mengekalkan keadaan tempatan sahaja dalam:```text
~/.omni-skills/state/ui-state.json
```

Negeri pada masa ini termasuk:

- pemasangan baru-baru ini
- pelancaran perkhidmatan baru-baru ini
- dinamakan pratetap pemasangan
- pratetap perkhidmatan dinamakan
- kemahiran kegemaran
- berkas kegemaran

Cangkang mesti menyokong:

- memainkan semula pemasangan baru-baru ini
- memainkan semula pelancaran perkhidmatan baru-baru ini
- menggunakan semula pratetap pemasangan bernama
- menggunakan semula pratetap perkhidmatan bernama---

## 7. Compatibility Contract

Cangkang visual adalah bahan tambahan.

Aliran ini mesti kekal sah dan stabil:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills install --guided`
- `npx omni-skills find figma --tool cursor --install --yes`
- `strim mcp kemahiran omni-npx --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

Cangkang visual tidak boleh memaksa dirinya ke dalam laluan arahan pakar yang eksplisit.---

## 8. Safety Contract

Cangkang visual harus membuat keadaan dan menulis secara eksplisit.

Ia mesti:

- pratonton pemasangan sebelum serah tulis
- pratonton arahan pelancaran perkhidmatan sebelum pelaksanaan
- simpan bahan rahsia daripada pratonton arahan teks jelas jika praktikal
- negeri berterusan secara tempatan sahaja
- mengekalkan tingkah laku CLI tidak interaktif di luar cangkerang visual