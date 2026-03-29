# ✅ Quality Bar (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Keperluan dan pengesyoran minimum untuk kemahiran diterima ke dalam repositori Kemahiran Omni.**

Untuk panduan mengarang yang ditujukan secara khusus pada skor jalur teratas, lihat [Buku Main Skor Tinggi](BUKU Main Skor Tinggi.md).

Penanda aras semasa untuk katalog yang diterbitkan:

- 32 kemahiran diterbitkan
- purata skor kualiti `96.3`
- purata skor amalan terbaik `98.7`
- purata skor keselamatan `95.0`---

## 🔒 Required (Must Pass)

| # | Keperluan | Cara Mengesahkan |
|:--|:------------|:--------------|
| 1️⃣ |**Materi depan yang sah**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Huraian yang jelas**| Satu pelapik mesti menerangkan apa yang dilakukan oleh kemahiran (10+ aksara) |
| 3️⃣ |**Direktori padanan nama**| Medan `name:` ​​sepadan dengan nama folder tepat |
| 4️⃣ |**Bahagian gambaran keseluruhan**| Penjelasan ringkas tentang tujuan dalam badan penurunan harga |
| 5️⃣ |**Bila Menggunakan bahagian**| Sekurang-kurangnya 2 senario penggunaan khusus |
| 6️⃣ |**Arahan boleh bertindak**| Kandungan langkah demi langkah ejen AI boleh melaksanakan |
| 7️⃣ |**Metadata dijana**| Pengesah mengeluarkan `kemahiran/<kemahiran>/metadata.json` berjaya |---

## ⭐ Recommended (Improves Score)

| # | Pengesyoran | Kesan Skor |
|:--|:-----------------|:-------------|
| 8️⃣ |**Contoh**— sekurang-kurangnya satu contoh konkrit dengan output yang dijangkakan | 📈 Kualiti +10-15 |
| 9️⃣ |**Amalan terbaik**— ✅ Lakukan / ❌ Jangan bimbingan | 📈 Amalan Terbaik +5 |
| 🔟 |**Diuji dengan alat**— disahkan dengan sekurang-kurangnya seorang pembantu pengekodan AI | 📈 Kualiti +5 |
| 1️⃣1️⃣ |**Tag**— teg boleh dicari yang berkaitan untuk penemuan | 📈 Amalan Terbaik +10 |
| 1️⃣2️⃣ |**Kategori**— diperuntukkan kepada satu kategori kanonik | 📈 Amalan Terbaik +10 |
| 1️⃣3️⃣ |**Penyelesaian masalah**— panduan `Gejala` dan `Penyelesaian` konkrit | 📈 Amalan Terbaik +5-10 |
| 1️⃣4️⃣ |**Aset sokongan tempatan**— `rujukan/`, `skrip/` dan idealnya `contoh/` dipautkan daripada kemahiran | 📈 Amalan Terbaik +10 |
| 1️⃣5️⃣ |**Klasifikasi sihat**— kematangan L3, kualiti 85+, amalan terbaik 90+ | 📈 Peringkat keseluruhan |
| 1️⃣6️⃣ |**Tiada penemuan keselamatan kritikal**— pengimbas statik lulus bersih | 🛡️ Keselamatan 100 |---

## ❌ Reasons for Rejection

| Isu | Mengapa |
|:------|:----|
| ❌ Perkara hadapan tiada atau tidak sah | Memecahkan saluran paip pengesahan |
| ❌ Nama tidak sepadan dengan direktori | Memecahkan penjanaan katalog |
| ❌ Penerangan kosong atau ringkas | Pengguna tidak dapat menemui kemahiran |
| ❌ Tiada kandungan yang boleh diambil tindakan (hanya pautan atau stub) | Ejen tidak boleh melaksanakan apa-apa |
| ❌ Pendua tanpa peningkatan yang jelas | Tambah nilai, jangan klon |
| ❌ Kandungan menyinggung tanpa teg `risiko: menyinggung` | Keselamatan dan pematuhan |
| ❌ Penemuan keselamatan kritikal | Eksfiltrasi segera, arahan yang merosakkan, dsb. |---

## 🧪 Verify Locally

```bash
# Run validation
npm run validate

# Check your scores
cat skills/<your-skill>/metadata.json | jq '.quality, .best_practices, .security'

# Full build + smoke check
npm run build
npm run smoke
```

---

## 📊 Score Reference

| Dimensi | Cemerlang | Baik | Memerlukan Kerja |
|:----------|:----------|:-----|:-----------|
| ⭐**Kualiti**| 80+ (platinum) | 60-79 (emas/perak) | <60 (gangsa/pemula) |
| 📋**Amalan Terbaik**| 90+ (cemerlang) | 70-89 (baik) | <70 (adil/keperluan-kerja) |
| 🛡️**Keselamatan**| 95+ (keras) | 80-94 (selamat) | <80 (semakan diperlukan) |
| 🎯**Kematangan**| L3 (skrip+ujian) | L2 (arahan) | L1 (metadata sahaja) |---

## 🧭 What High Scores Require

Untuk mencapai band teratas secara konsisten, kemahiran harus termasuk:

- huraian frontmatter yang kukuh yang menerangkan kedua-dua**apa**kemahiran itu dan**bila**ia harus digunakan
- bahagian eksplisit untuk `Bila Penggunaan`, `Aliran Kerja`, `Contoh`, `Amalan Terbaik`, `Penyelesaian Masalah` dan `Sumber Tambahan`
- bahan sokongan setempat di bawah `rujukan/`, `skrip/` dan idealnya `contoh/`, dipautkan terus daripada `SKILL.md`
- metadata ejen di bawah `ejen/openai.yaml` apabila kemahiran itu dimaksudkan untuk digunakan terus dalam pelanggan ejen
- jadual operasi kecil atau peta pelaksanaan yang setara apabila aliran kerja mendapat manfaat daripadanya
- sekurang-kurangnya satu contoh boleh dijalankan yang menunjuk kepada skrip pembantu tempatan atau arahan boleh diulang
- penyelesaian masalah ditulis sebagai `Simptom` ditambah `Penyelesaian`, bukan amaran generik
- kedalaman yang cukup untuk melayakkan diri sebagai `L3`, bukan hanya prosa yang diformat dengan baik
- kedalaman aliran kerja yang lebih kukuh, aset keputusan dan kepelbagaian pek sokongan jika anda inginkan kualiti jalur teratas
- pek sokongan yang cukup dalam untuk berasa boleh diguna semula, bukan hanya hadir untuk liputan kotak pilihan
- sekurang-kurangnya 4 keluarga sokongan yang bermakna atau kedalaman yang setara dalam fail boleh guna semula jika anda mahu jalur teratas secara konsisten