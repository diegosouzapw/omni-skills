# Skill PR Workflow (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Ini ialah aliran repositori kanonik untuk permintaan tarik yang menambah atau meningkatkan secara ketara satu atau lebih kemahiran asli.

Gunakannya apabila:

- menambah kemahiran baharu di bawah `kemahiran/`
- mendalami himpunan dengan kemahiran domain baharu
- menghantar pengembangan pek sokongan yang lebih besar
- mengesahkan cawangan dengan penambah peribadi sebelum penyelenggara menggabungkannya## Target Outcome

PR kemahiran asli yang kuat diperoleh dengan:

- kemahiran asli di bawah `kemahiran/`
- kandungan yang mencukupi untuk pengesah awam untuk mengelas dan mengindeksnya
- lulus pengesahan dan ujian awam
- pemprosesan penambah automatik semasa PR
- PR `kemahiran_omni/` susulan apabila terbitan dipertingkat diterbitkan
- pengambilan asli dipelihara dalam bahasa asalnya apabila diperlukan
- output dipertingkat yang dipilih susun ditulis semula ke dalam bahasa Inggeris
- aliran asli kepada susun atur sehala yang tidak memberi `kemahiran_omni/` kembali ke dalam pengambilan penambah asli## Enhancer Outcome States

Penambah PR awam kini melaporkan empat keadaan yang boleh dilihat oleh penyelenggara:

- `selesai`
  Derivatif yang dipertingkatkan telah dijana dengan bersih dan layak untuk penerbitan `skills_omni/` pendamping.
- `terdegradasi`
  Penambah selesai, tetapi ia menggunakan laluan sandaran atau menghasilkan amaran. Semakan penyelenggara masih dijangka sebelum menganggap derivatif sebagai sihat.
- `disekat`
  Larian telah dihentikan oleh isu infrastruktur atau pengesahan, seperti kegagalan prapenerbangan OmniRoute yang dihoskan atau kegagalan pengesahan calon yang sepatutnya menghalang penerbitan.
- `gagal`
  Penambah mengalami ralat masa jalan yang tidak dijangka dan memerlukan penyiasatan penyelenggara.## Recommended Branch Shape

Buat cawangan tertumpu:```bash
git checkout -b feat/<short-skill-theme>
```

Contoh:

- `kecemerlangan-kecemerlangan-kecemerlangan/insiden`
- `feat/devops-skill-pack`
- `feat/security-skill-pack`## Native Intake Rules

Permukaan pengambilan awam sengaja mengizinkan.

minimum:```text
skills/<skill>/
└── SKILL.md
```

Disyorkan tetapi tidak lagi diperlukan untuk pengambilan:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Sumbangan asli boleh menjadi kasar, tidak lengkap atau di luar standard pek sokongan biasa. Itu disengajakan. `kemahiran/` ialah permukaan pengambilan asli, bukan permukaan terbitan susun atur.

Dasar bahasa:

- pengambilan asli di bawah `kemahiran/` boleh ditulis dalam mana-mana bahasa
- penambah menyimpan gambar asli seperti yang diserahkan untuk asal
- terbitan susun atur di bawah `skills_omni/` mesti sentiasa ditulis dalam bahasa Inggeris

Bar editorial yang lebih ketat kini digunakan untuk:

- metadata yang dijana dan semakan keselamatan
- ulasan penambah peribadi
- terbitan susun susun susulan di bawah `kemahiran_omni/`## Authoring Sequence

1. Cipta `kemahiran/<kemahiran>/KEMAHIRAN.md`.
2. Tambahkan frontmatter jika anda boleh, tetapi frontmatter yang hilang atau tidak lengkap tidak lagi menyekat pengambilan asli dengan sendirinya.
3. Tambah `ejen/`, `rujukan/`, `contoh/` dan `skrip/` apabila anda sudah memilikinya.
4. Kemas kini `data/bundles.json` jika kemahiran memperdalam berkas sedia ada.
5. Buka PR. Automasi repo kini melakukan yang lain.## Validation Sequence

Penyumbang boleh menjalankan urutan tepat ini sebelum membuka PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Jika perubahan turut mempengaruhi masa jalan atau gelagat pembungkusan, jalankan juga:```bash
npm run smoke
```

## What Happens Automatically During the PR

Apabila PR dibuka atau disegerakkan dan ia hanya menyentuh fail pengambilan kemahiran asli di bawah `skills/` ditambah `data/bundles.json` pilihan, repo awam kini mencetuskan penambah peribadi secara automatik.

Aliran automatik semasa:

1. Aliran kerja `Sahkan Kemahiran` awam berjalan pada PR dan menyemak pengesahan, membina, menjana artifak dan ujian.
2. Aliran kerja `Tingkatkan Kemahiran PR` awam bermula secara selari dan memproses kemahiran asli yang diubah satu demi satu dalam mod `langsung`.
3. Penambah membaca kemahiran asli daripada `kemahiran/`, menyelidik amalan terbaik semasa dan menulis calon dipertingkat yang disemak di ruang kerja persendirian.
4. Penambah mengekalkan syot kilat pengambilan huluan dalam bahasa asalnya apabila diperlukan, tetapi menulis semula output yang dipilih susun dalam bahasa Inggeris.
5. Penambah menghantar semula kemajuan kepada PR sumber.
6. Penambah mengemas kini ulasan status PR selepas setiap kemahiran diproses dengan jumlah kelompok dan keadaan terkini.
7. Apabila ia selesai, ia merealisasikan terbitan yang dipertingkatkan kepada `skills_omni/` dan membuka atau mengemas kini PR pendamping dalam repo awam untuk output `selesai` dan `terdegradasi` sahaja.
8. Selepas PR digabungkan ke dalam `utama`, pemungut pendapat repo persendirian memproses semula sebarang kemahiran asli yang diubah, menyegarkan semula `ruang kerja/ditingkatkan/kemahiran/<kemahiran>/`, dan memastikan garis dasar dipertingkat peribadi sejajar dengan sumber asli awam terkini.
9. Selepas penggabungan, aliran kerja keluaran awam menimpa versi pakej npm, menjana semula artifak katalog, menerbitkan keluaran dan menandai versi baharu secara automatik.

Had kadar:

- penambah PR sedang memproses**1 kemahiran seminit**
- PR dengan 40 kemahiran baharu asli boleh kekal dalam barisan penambah selama kira-kira 40 minit
- PR menunjukkan bahawa kerja sebagai larian CI yang sedang berjalan ditambah ulasan kemajuan yang memajukan kemahiran demi kemahiran

Penyumbang tidak perlu menjalankan penambah secara manual.## No-Loop Rule For `skills_omni/`

Permukaan yang dipilih secara sengaja adalah sehala:

- input asli masuk melalui `kemahiran/`
- penambah peribadi menyemak input asli
- output yang dipilih susun dicadangkan ke dalam `skills_omni/`
- `kemahiran_omni/` tidak pernah dianggap sebagai pengambilan asli lagi
- kemas kini asli kemudian masih masuk semula melalui `kemahiran/` dan menggantikan garis dasar dipertingkat peribadi selepas diproses semula

Repositori kini menguatkuasakan sempadan itu:

- PR awam langsung yang mengubah suai `skills_omni/` ditolak
- hanya PR pendamping yang dikarang secara automasi daripada keluarga cawangan `skills-omni/pr-*` diterima di sana
- PR campuran yang cuba menukar kedua-dua `kemahiran/` dan `kemahiran_omni/` sekaligus ditolak## Automatic Versioning After Merge

Keterampilan bercantum ke `utama` kini mencetuskan aliran kerja keluaran repositori secara automatik.

Dasar versi pakej semasa:

- tampalan kenaikan sebanyak `+1` untuk setiap gabungan yang layak
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- selepas `.10`, pakej bergolek ke minor seterusnya dan menetapkan semula patch
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Laluan pencetus keluaran semasa:

- `kemahiran/**`
- `kemahiran_omni/**`
- `data/bundles.json`

Kerja keluaran automatik itu:

1. mengira versi pakej seterusnya daripada `package.json`
2. bumps `package.json` dan `package-lock.json`
3. menjana semula `metadata.json`, `skills_index.json`, `dist/` dan `docs/CATALOG.md`
4. menjalankan saluran paip pengesahan pelepasan yang ketat
5. melakukan bump versi kembali ke `utama`
6. mencipta teg Git untuk versi baharu
7. menerbitkan artifak npm dan GitHub Release

Nota pelancaran penting:

- GitHub hanya mendaftarkan fail aliran kerja baharu sebagai aliran kerja repositori aktif selepas fail tersebut mencapai cawangan lalai.
- Sehingga `Tingkatkan Kemahiran PR` muncul di `utama`, penyumbang boleh membaca proses yang didokumenkan, tetapi GitHub tidak akan melaksanakan aliran kerja itu secara automatik pada PR awam lagi.
- Selepas aliran kerja digabungkan menjadi `utama`, tingkah laku yang diterangkan di atas menjadi laluan pengambilan lalai untuk PR kemahiran asli masa hadapan.## Native vs Enhanced

Repo ini kini mempunyai dua permukaan yang berbeza:

- `kemahiran/`
  Pengambilan asli. Ini mengekalkan sumbangan asal seperti yang dikemukakan.
- `kemahiran_omni/`
  Output derivatif dipertingkatkan Omni yang dicadangkan oleh automasi dan diselenggara oleh Pasukan Kemahiran Omni.

Peraturan atribusi untuk `skills_omni/`:

- terbitan yang dipertingkatkan menjadi dikekalkan Omni
- penyumbang asal dan kemahiran asli huluan kekal dikreditkan
- setiap direktori yang dipertingkatkan menyimpan fail `ATTRIBUTION.md` dengan laluan huluan, PR, pengarang dan konteks sumber
- setiap direktori yang dipertingkatkan adalah output yang dipilih susun sahaja dan tidak boleh diserahkan semula ke laluan pengambilan penambah asli
- setiap direktori yang dipertingkatkan dijangka menjadi output bahasa Inggeris walaupun sumber asli huluan tidak## Manual Maintainer Commands

Automasi meliputi pengambilan PR biasa, tetapi penyelenggara masih boleh menjalankan penambah peribadi secara manual apabila diperlukan.

Batch terhadap perbezaan cawangan:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Kajian kemahiran tunggal:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Output penambah jangkaan setiap kemahiran:

- `ruang kerja/masuk/asal/<run-id>/<kemahiran>/`
- `ruang kerja/calon-dipertingkatkan/<run-id>/<skill>/`
- `ruang kerja/laporan/<run-id>/research.json`
- `ruang kerja/laporan/<run-id>/rewrite.json`
- `ruang kerja/laporan/<run-id>/validation.json`
- `ruang kerja/laporan/<run-id>/skor-delta.json`
- `ruang kerja/laporan/<run-id>/review.md`
- `ruang kerja/laporan/<run-id>/research-prompt.md`
- `ruang kerja/laporan/<run-id>/rewrite-prompt.md`## PR Body Expectations

Badan PR harus menyatakan:

- kemahiran apa yang ditambah atau dinaik taraf
- berkas atau aliran kerja mana yang mereka mendalami
- pengesahan yang dijalankan
- sama ada penambah automatik berjalan
- sama ada ia membuka atau mengemas kini PR pendamping `kemahiran_omni/`
- sebarang nota penyelenggara yang luar biasa tentang atribusi atau pembersihan susulan## Reviewer Checklist

- pengambilan asli adalah sah dan tidak berniat jahat
- metadata dan manifes yang dijana telah dimuat semula
- kemas kini berkas adalah disengajakan
- pengesahan awam dan output binaan adalah hijau
- ulasan status penambah sepadan dengan kemahiran sebenar yang diubah dan keadaan hasil akhir
- mana-mana PR pengiring `kemahiran_omni/` mengekalkan atribusi dengan betul## Example PR Scope

Contoh kukuh PR boleh menambah set tematik seperti:

- satu kemahiran pemerhatian atau DevOps
- satu kejadian atau kemahiran keselamatan
- satu penilaian AI atau kemahiran menggesa

Itu cukup besar untuk menggunakan penjaring, penambah automatik, aliran penerbitan `skills_omni/`, himpunan dan model atribusi tanpa mengubah PR menjadi penulisan semula katalog penuh.