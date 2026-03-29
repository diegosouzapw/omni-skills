# 🏆 High-Score Skill Playbook (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Apa yang dibutuhkan `SKILL.md` Keterampilan Omni dalam praktiknya untuk mencapai skor kematangan, praktik terbaik, kualitas, dan keamanan yang tinggi.**---

## 🎯 Purpose

Panduan ini menjelaskan bagaimana pengklasifikasi repositori sebenarnya memberi penghargaan pada suatu keterampilan.

Gunakan saat Anda ingin:

- menulis keterampilan baru yang masuk dalam kelompok pencetak gol terbanyak
- meningkatkan keterampilan yang ada yang terjebak dalam `baik` atau rendah `sangat baik`
- memahami mengapa keterampilan dengan format yang layak masih belum menghasilkan skor yang seperti aset operasional yang luar biasa

Ini adalah pendamping yang menghadap kontributor untuk:

- [Bilah Kualitas](BAR KUALITAS.md)
- [Keterampilan Anatomi](SKILL-ANATOMY.md)
- [Klasifikasi Keterampilan](../specs/SKILL-CLASSIFICATION.md)

Tolok ukur terkini untuk katalog langsung:

- 32 keterampilan yang diterbitkan
- spread kualitas saat ini: `94, 95, 96, 97, 100`
- penyebaran praktik terbaik saat ini: `98, 99, 100`
- kelas atas saat ini: `omni-figma` dengan kualitas `100/100` dan praktik terbaik `100/100`---

## 🧱 What High Scores Really Mean

Pengklasifikasi**tidak**hanya memberikan imbalan berupa penurunan harga yang cukup besar.

Keterampilan dengan skor tinggi adalah keterampilan yang:

-**dapat ditemukan**: deskripsi dengan jelas menyatakan fungsi keterampilan dan kapan menggunakannya
-**operasional**: keterampilan mencakup skrip lokal, referensi, dan contoh yang dapat dijalankan
-**diagnostik**: membantu agen pulih ketika terjadi kesalahan
-**spesifik**: berfokus pada satu alur kerja, bukan saran yang luas
-**aman**: menghindari pola berisiko dan mengirimkan keluaran pemindai yang bersih

Dalam praktiknya, keterampilan terkuat berperilaku lebih seperti**perangkat alur kerja kecil**dibandingkan catatan penurunan harga biasa.---

## 📋 Score Targets

Gunakan target berikut saat menulis:

| Dimensi | Sasaran Kuat | Target Luar Biasa |
|:----------|:--------------|:-------------------|
| 🎯 Kedewasaan | `L3` | `L3` dengan berbagai sumber daya dukungan |
| 📋 Praktik Terbaik | `90+` | `96+` |
| ⭐ Kualitas | `85+` | `90+` |
| 🛡️ Keamanan | `95+` | `95+` tanpa temuan |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Materi depan Anda harus membuat keterampilan tersebut mudah untuk diklasifikasikan dan mudah ditemukan:

- `nama` sama persis dengan direktori
- `deskripsi` menjelaskan**apa**dan**kapan**
- `kategori`, `tag`, `alat`, `kompleksitas`, `risiko`, `sumber`, `penulis`, dan tanggal semuanya ada

Bentuk deskripsi yang bagus:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Bentuk deskripsi buruk:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Keterampilan terkuat secara konsisten mencakup bagian-bagian berikut:

- `## Ikhtisar`
- `## Kapan Menggunakan Keterampilan Ini`
- `## Alur Kerja`
- `## Contoh`
- `## Praktik Terbaik`
- `## Pemecahan Masalah`
- `## Sumber Daya Tambahan`

Jika salah satu dari ini hilang, skornya masih bagus, namun akan semakin sulit untuk terlihat luar biasa.---

### 3. Runnable Local Support

Keterampilan dengan skor tertinggi biasanya meliputi:

- `referensi/daftar periksa.md`
- satu atau lebih skrip pembantu di `skrip/`
- setidaknya satu contoh berhasil di `contoh/`
- `agents/openai.yaml` ketika keterampilan ditujukan untuk pemanggilan agen langsung
- tautan langsung dari `SKILL.md` ke file lokal tersebut

Hal ini penting karena pengklasifikasi memperlakukan keterampilan dengan**materi pendukung yang dibundel**sebagai lebih dapat ditindaklanjuti dibandingkan keterampilan yang hanya mengarah ke luar.

Minimum yang disarankan:```text
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

Contoh dengan skor tinggi adalah:

- beton
- diketik dengan pagar asli seperti `bash` atau `python`
- terikat dengan skrip lokal atau perintah berulang
- mewakili alur kerja

Bagus:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Lemah:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Pencetak skor memberikan penghargaan atas pemecahan masalah yang membantu agen pulih, bukan hanya mengenali masalah.

Format pilihan:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Ini lebih kuat dari catatan samar seperti:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Pengklasifikasi sekarang membedakan antara keterampilan yang hanya lengkap dan keterampilan yang benar-benar mendalam.

Sinyal yang membantu:

- beberapa contoh konkrit
- beberapa kasus pemecahan masalah
- bimbingan keterampilan terkait
- paket referensi yang lebih kaya
- bagian `## Alur Kerja` yang terlihat dengan langkah bernomor yang dapat dihitung secara langsung oleh pencetak gol
- setidaknya satu tabel operasional atau peta eksekusi yang memperjelas alur kerja
- lebih dari satu direktori dukungan atau jenis aset
- bagian alur kerja dengan langkah-langkah yang cukup untuk memandu eksekusi
- aset keputusan seperti daftar periksa, rubrik, matriks, paket, atau buku pedoman
- keragaman paket dukungan yang lebih kuat di seluruh `referensi/`, `skrip/`, `agen/`, `contoh/`, atau `aset/`
- cukup banyak file dukungan yang dapat digunakan kembali agar terlihat seperti kit, tidak ada satu pun pembantu yang terselip di sebelah penurunan harga
- lebih dari satu file pembantu ketika alur kerjanya cukup rumit untuk membenarkan paket dukungan
- kedalaman bodi yang cukup untuk menutupi pengorbanan dan mode kegagalan
- panduan operasional yang lebih padat, karena pencetak gol kini membedakan pemformatan yang dipoles dari kedalaman alur kerja yang benar-benar dapat digunakan kembali

Sinyal yang**tidak**banyak membantu:

- mengulangi instruksi yang sama dengan kata yang berbeda
- teks pengisi umum
- menambahkan judul tanpa menambahkan substansi di bawahnya---

## 🧪 Fast Checklist Before You Commit

Gunakan daftar periksa ini sebelum menjalankan validasi:

- deskripsi mengatakan**apa**dan**kapan**
- keterampilannya terfokus pada satu alur kerja
- `## Alur Kerja` ada dan berisi langkah-langkah bernomor atau berpoin
- setidaknya ada satu contoh yang dapat dijalankan
- `references/`, `scripts/`, dan idealnya `examples/` ditautkan dari `SKILL.md`
- `agents/openai.yaml` ada ketika keterampilan dimaksudkan untuk pemanggilan langsung di klien agen
- pemecahan masalah menggunakan `Gejala` dan `Solusi`
- keterampilan tersebut dapat diklasifikasikan sebagai `L3`
- tidak ada perintah berisiko atau jalur mencurigakan

Kemudian jalankan:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- deskripsinya benar tetapi terlalu umum
- penurunan harga memiliki bagian tetapi tidak ada kedalaman operasional
- contoh tidak menunjuk pada pekerja lokal
- pemecahan masalah ada tetapi tidak bersifat diagnostik
- terlalu sedikit tag atau pengidentifikasi alat
- keterampilannya aman dan bersih tetapi masih terlalu dangkal untuk dianggap luar biasa---

## 🧭 Practical Rule

Jika keahlian Anda terasa seperti:

-**templat**: mungkin lolos
-**panduan**: skornya mungkin bagus
-**paket alur kerja**: kemungkinan besar akan mendapat skor teratas