# 🏆 High-Score Skill Playbook (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Kemahiran Omni `SKILL.md` perlukan dalam amalan untuk mencapai kematangan yang tinggi, amalan terbaik, kualiti dan markah keselamatan.**---

## 🎯 Purpose

Panduan ini menerangkan cara pengelas repositori sebenarnya memberi ganjaran kepada kemahiran.

Gunakannya apabila anda mahu:

- mengarang kemahiran baharu yang berada dalam kumpulan pemarkahan teratas
- meningkatkan kemahiran sedia ada yang tersekat pada `baik` atau rendah `cemerlang`
- faham mengapa kemahiran dengan pemformatan yang baik masih tidak mendapat markah seperti aset operasi yang luar biasa

Ini ialah rakan yang berhadapan dengan penyumbang kepada:

- [Bar Kualiti](QUALITY-BAR.md)
- [Anatomi Kemahiran](ANATOMI-KEMAHIRAN.md)
- [Klasifikasi Kemahiran](../specs/KEMAHIRAN-KLASIFIKASI.md)

Penanda aras semasa untuk katalog langsung:

- 32 kemahiran diterbitkan
- sebaran kualiti semasa: `94, 95, 96, 97, 100`
- penyebaran amalan terbaik semasa: `98, 99, 100`
- hujung atas semasa: `omni-figma` pada kualiti `100/100` dan amalan terbaik `100/100`---

## 🧱 What High Scores Really Mean

Pengelas**tidak**memberi ganjaran penurunan harga yang cantik sahaja.

Kemahiran skor tinggi ialah kemahiran yang:

-**boleh ditemui**: penerangan dengan jelas menyatakan perkara yang dilakukan oleh kemahiran itu dan bila hendak menggunakannya
-**operasi**: kemahiran termasuk skrip tempatan, rujukan dan contoh boleh jalan
-**diagnostik**: ia membantu ejen pulih apabila berlaku masalah
-**khusus**: ia tertumpu pada satu aliran kerja, bukan nasihat umum
-**selamat**: ia mengelakkan corak berisiko dan menghantar keluaran pengimbas bersih

Dalam amalan, kemahiran terkuat bertindak lebih seperti**kit aliran kerja berpakej kecil**daripada nota penurunan harga biasa.---

## 📋 Score Targets

Gunakan sasaran ini semasa mengarang:

| Dimensi | Sasaran Kuat | Sasaran Luar Biasa |
|:----------|:--------------|:-------------------|
| 🎯 Kematangan | `L3` | `L3` dengan pelbagai sumber sokongan |
| 📋 Amalan Terbaik | `90+` | `96+` |
| ⭐ Kualiti | `85+` | `90+` |
| 🛡️ Keselamatan | `95+` | `95+` dengan sifar dapatan |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Orang hadapan anda seharusnya menjadikan kemahiran itu mudah dikelaskan dan mudah ditemui:

- `nama` sepadan dengan direktori dengan tepat
- `penerangan` menerangkan kedua-dua**apa**dan**bila**
- `kategori`, `tag`, `alat`, `kerumitan`, `risiko`, `sumber`, `pengarang` dan tarikh semuanya ada

Bentuk penerangan yang baik:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Bentuk perihalan buruk:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Kemahiran terkuat secara konsisten termasuk bahagian ini:

- `## Gambaran Keseluruhan`
- `## Bila Menggunakan Kemahiran Ini`
- `## Aliran Kerja`
- `## Contoh`
- `## Amalan Terbaik`
- `## Penyelesaian masalah`
- `## Sumber Tambahan`

Jika salah satu daripada ini tiada, markah masih boleh bagus, tetapi menjadi lebih sukar untuk kelihatan luar biasa.---

### 3. Runnable Local Support

Kemahiran mendapat markah tertinggi biasanya termasuk:

- `rujukan/senarai semak.md`
- satu atau lebih skrip pembantu dalam `skrip/`
- sekurang-kurangnya satu contoh yang berfungsi dalam `contoh/`
- `ejen/openai.yaml` apabila kemahiran itu bertujuan untuk permohonan ejen langsung
- pautan terus dari `SKILL.md` ke fail tempatan tersebut

Ini penting kerana pengelas menganggap kemahiran dengan**bahan sokongan yang digabungkan**sebagai lebih boleh diambil tindakan daripada kemahiran yang hanya menunjuk ke luar.

Minimum yang disyorkan:```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

Contoh skor tinggi ialah:

- konkrit
- ditaip dengan pagar sebenar seperti `bash` atau `python`
- terikat pada skrip tempatan atau arahan yang boleh diulang
- wakil aliran kerja

baik:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

lemah:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Penjaring memberi ganjaran penyelesaian masalah yang membantu ejen pulih, bukan hanya mengenali masalah.

Format pilihan:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Ini lebih kuat daripada nota samar-samar seperti:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Pengelas kini membezakan antara kemahiran yang lengkap dengan kemahiran yang benar-benar mendalam.

Isyarat yang membantu:

- pelbagai contoh konkrit
- berbilang kes penyelesaian masalah
- bimbingan kemahiran berkaitan
- pek rujukan yang lebih kaya
- bahagian `## Aliran Kerja` yang boleh dilihat dengan langkah bernombor yang boleh dikira secara langsung oleh penjaring
- sekurang-kurangnya satu jadual operasi atau peta pelaksanaan di mana ia menjelaskan aliran kerja
- lebih daripada satu direktori sokongan atau jenis aset
- bahagian aliran kerja dengan langkah yang mencukupi untuk membimbing pelaksanaan
- aset keputusan seperti senarai semak, rubrik, matriks, paket atau buku permainan
- kepelbagaian pek sokongan yang lebih kukuh merentas `rujukan/`, `skrip/`, `ejen/`, `contoh/` atau `aset/`
- fail sokongan boleh guna semula yang mencukupi untuk kelihatan seperti kit, tiada seorang pun pembantu yang terselip di sebelah markdown
- lebih daripada satu fail pembantu apabila aliran kerja cukup kompleks untuk mewajarkan pek sokongan
- kedalaman badan yang mencukupi untuk menampung pertukaran dan mod kegagalan
- panduan operasi yang lebih padat, kerana penjaring kini membezakan pemformatan yang digilap daripada kedalaman aliran kerja yang boleh diguna semula yang benar

Isyarat yang**tidak**banyak membantu:

- mengulang arahan yang sama dalam perkataan yang berbeza
- teks pengisi generik
- menambah tajuk tanpa menambah bahan di bawahnya---

## 🧪 Fast Checklist Before You Commit

Gunakan senarai semak ini sebelum menjalankan pengesahan:

- keterangan menyatakan**apa**dan**bila**
- kemahiran tertumpu pada satu aliran kerja
- `## Aliran Kerja` wujud dan mengandungi langkah bernombor atau bertitik tumpu
- sekurang-kurangnya satu contoh boleh jalan wujud
- `rujukan/`, `skrip/` dan idealnya `contoh/` dipautkan daripada `SKILL.md`
- `ejen/openai.yaml` wujud apabila kemahiran itu dimaksudkan untuk permohonan terus dalam pelanggan ejen
- penyelesaian masalah menggunakan `Simptom` dan `Penyelesaian`
- kemahiran boleh dikelaskan secara munasabah sebagai `L3`
- tiada arahan berisiko atau laluan yang mencurigakan hadir

Kemudian jalankan:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- huraian betul tetapi terlalu generik
- penurunan harga mempunyai bahagian tetapi tiada kedalaman operasi
- contoh tidak menunjuk kepada pembantu tempatan
- penyelesaian masalah wujud tetapi bukan diagnostik
- terdapat terlalu sedikit teg atau pengecam alat
- kemahiran itu selamat dan bersih tetapi masih terlalu cetek untuk dikira sebagai luar biasa---

## 🧭 Practical Rule

Jika kemahiran anda terasa seperti:

-**templat**: ia mungkin lulus
-**panduan**: ia mungkin mendapat markah yang baik
-**pakej aliran kerja**: ia lebih berkemungkinan mendapat markah di bahagian atas