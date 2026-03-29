# ✅ Quality Bar (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Persyaratan minimum dan rekomendasi agar suatu keterampilan dapat diterima di gudang Omni Skills.**

Untuk panduan penulisan yang ditujukan khusus pada skor band teratas, lihat [Buku Pedoman Skor Tinggi](HIGH-SCORE-PLAYBOOK.md).

Tolok ukur terkini untuk katalog yang diterbitkan:

- 32 keterampilan yang diterbitkan
- skor kualitas rata-rata `96,3`
- rata-rata skor praktik terbaik `98,7`
- skor keamanan rata-rata `95.0`---

## 🔒 Required (Must Pass)

| # | Persyaratan | Cara Memverifikasi |
|:--|:------------|:--------------|
| 1️⃣ |**Bagian depan yang valid**| `alat/skrip python3/validate_skills.py` |
| 2️⃣ |**Deskripsi jelas**| Satu kalimat harus menjelaskan fungsi keterampilan (10+ karakter) |
| 3️⃣ |**Nama cocok dengan direktori**| Bidang `nama:` sama persis dengan nama folder |
| 4️⃣ |**Bagian Ikhtisar**| Penjelasan singkat tujuan di badan penurunan harga |
| 5️⃣ |**Kapan Menggunakan bagian**| Setidaknya 2 skenario penggunaan spesifik |
| 6️⃣ |**Instruksi yang dapat ditindaklanjuti**| Konten langkah demi langkah yang dapat dijalankan oleh agen AI |
| 7️⃣ |**Metadata yang dihasilkan**| Validator berhasil mengeluarkan `skills/<skill>/metadata.json` |---

## ⭐ Recommended (Improves Score)

| # | Rekomendasi | Dampak Skor |
|:--|:---------------|:-------------|
| 8️⃣ |**Contoh**— setidaknya satu contoh nyata dengan keluaran yang diharapkan | 📈 Kualitas +10-15 |
| 9️⃣ |**Praktik terbaik**— ✅ Panduan yang harus dilakukan / ❌ Jangan | 📈 Praktik Terbaik +5 |
| 🔟 |**Diuji dengan alat**— diverifikasi dengan setidaknya satu asisten pengkodean AI | 📈 Kualitas +5 |
| 1️⃣1️⃣ |**Tag**— tag relevan yang dapat dicari untuk penemuan | 📈 Praktik Terbaik +10 |
| 1️⃣2️⃣ |**Kategori**— ditetapkan ke satu kategori kanonik | 📈 Praktik Terbaik +10 |
| 1️⃣3️⃣ |**Pemecahan Masalah**— panduan `Gejala` dan `Solusi` yang konkret | 📈 Praktik Terbaik +5-10 |
| 1️⃣4️⃣ |**Aset dukungan lokal**— `referensi/`, `skrip/`, dan idealnya `contoh/` ditautkan dari keterampilan | 📈 Praktik Terbaik +10 |
| 1️⃣5️⃣ |**Klasifikasi sehat**— kematangan L3, kualitas 85+, praktik terbaik 90+ | 📈 Tingkat keseluruhan |
| 1️⃣6️⃣ |**Tidak ada temuan keamanan penting**— pemindai statis berhasil lolos | 🛡️ Keamanan 100 |---

## ❌ Reasons for Rejection

| Edisi | Mengapa |
|:------|:----|
| ❌ Bagian depan tidak ada atau tidak valid | Memutuskan jalur validasi |
| ❌ Nama tidak sesuai dengan direktori | Menghancurkan pembuatan katalog |
| ❌ Deskripsi singkat yang kosong atau sepele | Pengguna tidak dapat menemukan keterampilan |
| ❌ Tidak ada konten yang dapat ditindaklanjuti (hanya tautan atau rintisan) | Agen tidak dapat mengeksekusi apa pun |
| ❌ Duplikat tanpa perbaikan yang jelas | Tambahkan nilai, jangan dikloning |
| ❌ Konten yang menyinggung tanpa tag `risiko: menyinggung` | Keamanan dan kepatuhan |
| ❌ Temuan keamanan penting | Eksfiltrasi cepat, perintah destruktif, dll |---

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

| Dimensi | Luar biasa | Bagus | Butuh Pekerjaan |
|:----------|:----------|:-----|:-----------|
| ⭐**Kualitas**| 80+ (platinum) | 60-79 (emas/perak) | <60 (perunggu/pemula) |
| 📋**Praktik Terbaik**| 90+ (luar biasa) | 70-89 (bagus) | <70 (adil/perlu kerja) |
| 🛡️**Keamanan**| 95+ (mengeras) | 80-94 (aman) | <80 (diperlukan peninjauan) |
| 🎯**Kedewasaan**| L3 (skrip+tes) | L2 (instruksi) | L1 (hanya metadata) |---

## 🧭 What High Scores Require

Untuk mencapai kelompok teratas secara konsisten, suatu keterampilan harus mencakup:

- deskripsi frontmatter kuat yang menjelaskan**apa**fungsi skill dan**kapan**skill harus digunakan
- bagian eksplisit untuk `Kapan Menggunakan`, `Alur Kerja`, `Contoh`, `Praktik Terbaik`, `Pemecahan Masalah`, dan `Sumber Daya Tambahan`
- materi pendukung lokal di bawah `references/`, `scripts/`, dan idealnya `examples/`, ditautkan langsung dari `SKILL.md`
- metadata agen di bawah `agents/openai.yaml` ketika keterampilan dimaksudkan untuk dipanggil langsung di klien agen
- tabel operasional kecil atau peta eksekusi yang setara jika alur kerja mendapat manfaat darinya
- setidaknya satu contoh yang dapat dijalankan yang menunjuk ke skrip pembantu lokal atau perintah yang dapat diulang
- pemecahan masalah ditulis sebagai `Gejala` ditambah `Solusi`, bukan peringatan umum
- kedalaman yang cukup untuk memenuhi syarat sebagai `L3`, bukan hanya prosa yang diformat dengan baik
- kedalaman alur kerja yang lebih kuat, aset keputusan, dan keragaman paket dukungan jika Anda menginginkan kualitas terbaik
- Paket dukungan yang cukup dalam sehingga terasa dapat digunakan kembali, tidak hanya hadir untuk cakupan kotak centang
- setidaknya 4 keluarga pendukung yang berarti atau kedalaman yang setara dalam file yang dapat digunakan kembali jika Anda ingin band teratas secara konsisten