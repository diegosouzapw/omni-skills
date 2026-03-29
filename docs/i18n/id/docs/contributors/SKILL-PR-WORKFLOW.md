# Skill PR Workflow (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Ini adalah alur repositori kanonik untuk permintaan tarik yang menambah atau meningkatkan secara substansial satu atau beberapa keterampilan asli.

Gunakan ketika:

- menambahkan keterampilan baru di bawah `keterampilan/`
- memperdalam bundel dengan keterampilan domain baru
- mengirimkan ekspansi paket dukungan yang lebih besar
- memvalidasi cabang dengan penambah pribadi sebelum pengelola menggabungkannya## Target Outcome

Keterampilan PR asli yang kuat diperoleh dengan:

- keterampilan asli di bawah `keterampilan/`
- konten yang cukup bagi validator publik untuk mengklasifikasikan dan mengindeksnya
- lulus validasi dan tes publik
- pemrosesan penambah otomatis selama PR
- PR `skills_omni/` tindak lanjut ketika turunan yang disempurnakan diterbitkan
- asupan asli dipertahankan dalam bahasa aslinya bila diperlukan
- keluaran yang ditingkatkan dan dikuratori, ditulis ulang ke dalam bahasa Inggris
- aliran satu arah dari asli ke kurasi yang tidak mengembalikan `skills_omni/` ke asupan penambah asli## Enhancer Outcome States

Peningkat PR publik kini melaporkan empat kondisi yang terlihat oleh pengelola:

- `selesai`
  Turunan yang disempurnakan dihasilkan dengan rapi dan memenuhi syarat untuk publikasi `skills_omni/` pendamping.
- `terdegradasi`
  Enhancer telah selesai, namun menggunakan jalur cadangan atau menghasilkan peringatan. Tinjauan pengelola masih diharapkan sebelum memperlakukan turunannya sebagai sehat.
- `diblokir`
  Proses dihentikan karena masalah infrastruktur atau validasi, seperti kegagalan preflight OmniRoute yang dihosting atau kegagalan validasi kandidat yang seharusnya menghalangi publikasi.
- `gagal`
  Enhancer mengalami error runtime yang tidak terduga dan memerlukan penyelidikan pengelola.## Recommended Branch Shape

Buat cabang yang terfokus:```bash
git checkout -b feat/<short-skill-theme>
```

Contoh:

- `prestasi/insiden-observabilitas-evals`
- `prestasi/paket-keterampilan-devops`
- `prestasi/paket keterampilan-keamanan`## Native Intake Rules

Permukaan asupan publik sengaja dibuat permisif.

Minimum:```text
skills/<skill>/
└── SKILL.md
```

Direkomendasikan tetapi tidak lagi diperlukan untuk asupan:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Kontribusi asli bisa saja kasar, tidak lengkap, atau di luar standar paket dukungan normal. Itu disengaja. `skill/` adalah permukaan masukan asli, bukan permukaan turunan yang dikurasi.

Kebijakan bahasa:

- masukan asli di bawah `keterampilan/` dapat ditulis dalam bahasa apa pun
- peningkat menyimpan snapshot asli seperti yang dikirimkan untuk asal
- turunan yang dikurasi pada `skills_omni/` harus selalu ditulis dalam bahasa Inggris

Batasan editorial yang lebih ketat kini berlaku untuk:

- metadata dan pemeriksaan keamanan yang dihasilkan
- ulasan penambah pribadi
- turunan lanjutan yang dikurasi di bawah `skills_omni/`## Authoring Sequence

1. Buat `skill/<skill>/SKILL.md`.
2. Tambahkan frontmatter jika Anda bisa, tetapi frontmatter yang hilang atau tidak lengkap tidak lagi menghalangi masukan asli dengan sendirinya.
3. Tambahkan `agen/`, `referensi/`, `contoh/`, dan `skrip/` jika Anda sudah memilikinya.
4. Perbarui `data/bundles.json` jika skill memperdalam bundel yang sudah ada.
5. Buka PR. Otomatisasi repo kini melakukan sisanya.## Validation Sequence

Kontributor dapat menjalankan urutan persis ini sebelum membuka PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Jika perubahan juga memengaruhi waktu proses atau perilaku pengemasan, jalankan juga:```bash
npm run smoke
```

## What Happens Automatically During the PR

Ketika PR dibuka atau disinkronkan dan hanya menyentuh file masukan keterampilan asli di bawah `skills/` ditambah `data/bundles.json` opsional, repo publik sekarang memicu penambah pribadi secara otomatis.

Aliran otomatis saat ini:

1. Alur kerja `Validasi Keterampilan` publik berjalan pada PR dan memeriksa validasi, pembuatan, artefak yang dihasilkan, dan pengujian.
2. Alur kerja `Meningkatkan Keterampilan PR` publik dimulai secara paralel dan memproses perubahan keterampilan asli satu per satu dalam mode `langsung`.
3. Enhancer membaca keterampilan asli dari `skill/`, meneliti praktik terbaik saat ini, dan menulis kandidat yang telah disempurnakan dan ditinjau di ruang kerja pribadi.
4. Enhancer menyimpan cuplikan masukan hulu dalam bahasa aslinya bila diperlukan, namun menulis ulang keluaran yang dikurasi dalam bahasa Inggris.
5. Peningkat memposting kemajuan kembali ke PR sumber.
6. Enhancer memperbarui komentar status PR setelah setiap keterampilan diproses dengan total batch dan status terbaru.
7. Setelah selesai, ia mewujudkan turunan yang ditingkatkan menjadi `skills_omni/` dan membuka atau memperbarui PR pendamping di repo publik hanya untuk keluaran `selesai` dan `terdegradasi`.
8. Setelah PR digabungkan ke dalam `main`, poller private repo-aware akan memproses ulang setiap keterampilan asli yang diubah, menyegarkan `ruang kerja/enhanced/skills/<skill>/`, dan menjaga baseline privat yang disempurnakan tetap selaras dengan sumber asli publik terbaru.
9. Setelah penggabungan, alur kerja rilis publik meningkatkan versi paket npm, membuat ulang artefak katalog, menerbitkan rilis, dan menandai versi baru secara otomatis.

Batas tarif:

- Peningkat PR saat ini memproses**1 keterampilan per menit**
- Oleh karena itu, seorang PR dengan 40 keterampilan asli baru dapat tetap berada dalam antrean penambah selama sekitar 40 menit
- PR menunjukkan pekerjaan itu sebagai proses CI yang sedang berlangsung ditambah komentar kemajuan yang meningkatkan keterampilan demi keterampilan

Kontributor tidak perlu menjalankan penambah secara manual.## No-Loop Rule For `skills_omni/`

Permukaan yang dikurasi sengaja dibuat satu arah:

- masukan asli masuk melalui `keterampilan/`
- penambah pribadi mengulas masukan asli itu
- keluaran yang dikurasi diusulkan ke `skills_omni/`
- `skills_omni/` tidak pernah diperlakukan sebagai asupan asli lagi
- pembaruan asli selanjutnya masih masuk kembali melalui `keterampilan/` dan menggantikan garis dasar pribadi yang ditingkatkan setelah pemrosesan ulang

Repositori sekarang menerapkan batasan tersebut:

- PR publik langsung yang mengubah `skills_omni/` ditolak
- hanya PR pendamping yang dibuat secara otomatisasi dari keluarga cabang `skills-omni/pr-*` yang diterima di sana
- PR campuran yang mencoba mengubah `skills/` dan `skills_omni/` sekaligus ditolak## Automatic Versioning After Merge

Penggabungan keterampilan ke `utama` sekarang memicu alur kerja rilis repositori secara otomatis.

Kebijakan versi paket saat ini:

- peningkatan patch sebesar `+1` untuk setiap penggabungan yang memenuhi syarat
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- setelah `.10`, paket berpindah ke minor berikutnya dan mereset patch
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Jalur pemicu rilis saat ini:

- `keterampilan/**`
- `keterampilan_omni/**`
- `data/bundel.json`

Pekerjaan rilis otomatis itu:

1. menghitung versi paket berikutnya dari `package.json`
2. menggabungkan `package.json` dan `package-lock.json`
3. membuat ulang `metadata.json`, `skills_index.json`, `dist/`, dan `docs/CATALOG.md`
4. menjalankan jalur verifikasi rilis ketat
5. mengembalikan versi ke `main`
6. membuat tag Git untuk versi baru
7. menerbitkan artefak Rilis npm dan GitHub

Catatan peluncuran penting:

- GitHub hanya mendaftarkan file alur kerja baru sebagai alur kerja repositori aktif setelah file tersebut mencapai cabang default.
- Hingga `Tingkatkan Keterampilan PR` berada di `utama`, kontributor dapat membaca proses yang terdokumentasi, namun GitHub belum akan menjalankan alur kerja tersebut secara otomatis pada PR publik.
- Setelah alur kerja digabungkan menjadi `utama`, perilaku yang dijelaskan di atas menjadi jalur masuk default untuk PR keterampilan asli di masa mendatang.## Native vs Enhanced

Repo ini sekarang memiliki dua permukaan berbeda:

- `keterampilan/`
  Asupan asli. Ini mempertahankan kontribusi asli yang dikirimkan.
- `keterampilan_omni/`
  Keluaran turunan yang disempurnakan dengan Omni diusulkan melalui otomatisasi dan dikelola oleh Tim Keterampilan Omni.

Aturan atribusi untuk `skills_omni/`:

- turunan yang disempurnakan menjadi terpelihara Omni
- kontributor asli dan keterampilan asli hulu tetap dikreditkan
- setiap direktori yang ditingkatkan menyimpan file `ATTRIBUTION.md` dengan jalur upstream, PR, penulis, dan konteks sumber
- setiap direktori yang disempurnakan hanya merupakan keluaran yang dikurasi dan tidak boleh dikirim ulang ke jalur masukan penambah asli
- setiap direktori yang disempurnakan diharapkan menghasilkan keluaran berbahasa Inggris meskipun sumber asli hulunya tidak## Manual Maintainer Commands

Otomatisasi ini mencakup asupan PR normal, namun pengelola masih dapat menjalankan penambah pribadi secara manual bila diperlukan.

Batch terhadap perbedaan cabang:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Ulasan keterampilan tunggal:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Output penambah yang diharapkan per keterampilan:

- `ruang kerja/masuk/asli/<run-id>/<skill>/`
- `ruang kerja/kandidat yang ditingkatkan/<run-id>/<skill>/`
- `ruang kerja/laporan/<run-id>/research.json`
- `ruang kerja/laporan/<run-id>/rewrite.json`
- `ruang kerja/laporan/<run-id>/validation.json`
- `ruang kerja/laporan/<run-id>/score-delta.json`
- `ruang kerja/laporan/<run-id>/review.md`
- `ruang kerja/laporan/<run-id>/research-prompt.md`
- `ruang kerja/laporan/<run-id>/rewrite-prompt.md`## PR Body Expectations

Badan Humas harus menyatakan:

- keterampilan apa yang ditambahkan atau ditingkatkan
- kumpulan atau alur kerja mana yang diperdalam
- validasi apa yang dijalankan
- apakah penambah otomatis berjalan
- apakah itu membuka atau memperbarui PR pendamping `skills_omni/`
- catatan pengelola yang luar biasa tentang atribusi atau pembersihan tindak lanjut## Reviewer Checklist

- asupan asli adalah sah dan tidak berbahaya
- metadata dan manifes yang dihasilkan disegarkan
- pembaruan bundel disengaja
- validasi publik dan keluaran pembangunan berwarna hijau
- komentar status penambah cocok dengan perubahan keterampilan aktual dan status hasil akhir
- PR pendamping `skills_omni/` mana pun mempertahankan atribusi dengan benar## Example PR Scope

Contoh PR yang kuat dapat menambahkan kumpulan tematik seperti:

- satu kemampuan observasi atau keterampilan DevOps
- satu insiden atau keterampilan keamanan
- satu evaluasi AI atau keterampilan mendorong

Itu cukup besar untuk menggunakan pencetak gol, penambah otomatis, alur penerbitan `skills_omni/`, bundel, dan model atribusi tanpa mengubah PR menjadi penulisan ulang katalog lengkap.