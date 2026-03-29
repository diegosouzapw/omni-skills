# 🔬 Anatomy of a Well-Written Skill (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Struktur dan ekspektasi kualitas untuk `SKILL.md` Omni Skills — format pembuatan yang mendukung keseluruhan katalog.**---

## 📐 The Two Parts

Setiap `SKILL.md` terdiri dari dua bagian berbeda:### 1️⃣ Frontmatter (YAML Metadata)

Metadata yang dapat dibaca mesin antara pembatas `---`. Ini memberi kekuatan:

- 📚 Indeks keterampilan dan pembuatan katalog
- 🔎 Pencarian dan pemfilteran CLI
- ✅ Validasi dan penilaian kualitas
- 📊 Menghasilkan artefak klasifikasi `metadata.json`
- 📋 Manifes per keterampilan dalam `dist/manifest/`### 2️⃣ Body (Markdown Instructions)

Instruksi yang dapat dibaca manusia (dan dapat dibaca oleh agen). Tulislah seolah-olah Anda sedang**memberi pengarahan kepada developer senior**tentang cara melakukan suatu tugas — cukup spesifik sehingga agen AI dapat mengikutinya tanpa menebak-nebak.---

## 📋 Frontmatter Reference

| Bidang | Diperlukan | Ketik | Deskripsi |
|:------|:---------|:-----|:------------|
| `nama` | ✅ | tali | Harus cocok dengan nama direktori, dengan tanda penghubung huruf kecil |
| `deskripsi` | ✅ | tali | Deskripsi satu baris (10-200 karakter) |
| `versi` | ⚡ | tali | Versi semantik untuk keterampilan itu sendiri (misalnya, `"0.1.1"`) |
| `kategori` | ⚡ | tali | Satu kategori kanonik dari taksonomi repo |
| `tag` | ⚡ | tali[] | Tag yang dapat dicari untuk penemuan |
| `kompleksitas` | ⚡ | tali | `pemula` · `menengah` · `lanjutan` · `ahli` |
| `risiko` | ⚡ | tali | `aman` · `hati-hati` · `menyinggung` · `kritis` |
| `alat` | ⚡ | tali[] | Asisten pengkodean AI yang diuji |
| `sumber` | ⚡ | tali | `omni-tim` · `komunitas` · `resmi` |
| `penulis` | ⚡ | tali | Atribusi |
| `tanggal_ditambahkan` | ⚡ | tali | Tanggal ISO |
| `tanggal_diperbarui` | ⚡ | tali | Tanggal ISO |

> ✅ = Selalu diwajibkan · ⚡ = Wajib dalam mode ketat

Versi keterampilan tidak bergantung pada versi paket npm. Paketnya saat ini `0.1.3`, tetapi keterampilan yang ada dapat tetap menggunakan versi semantiknya secara valid.---

## 🏷️ Canonical Categories

Taksonomi repo saat ini mendefinisikan**18 kategori kanonik**:

| Kategori | Domain |
|:---------|:-------|
| 💻 `pembangunan` | Pengembangan perangkat lunak umum |
| 🎨 `bagian depan` | Kerangka kerja frontend dan UI |
| 🔧 `bagian belakang` | Layanan backend dan API |
| 🌐 `fullstack-web` | Pengembangan web ujung ke ujung |
| 🛠️ `alat` | Peralatan dan utilitas pengembang |
| ⚙️ `otomatisasi klik` | Alat CLI dan skrip otomatisasi |
| 📊 `bisnis` | Proses dan strategi bisnis |
| 📐 `produk` | Manajemen dan desain produk |
| 🎯 `desain` | Desain visual dan UX |
| 🤖 `data-ai` | Rekayasa data dan aplikasi AI |
| 🧠 `agen-ai` | Pengembangan dan pola agen AI |
| 📈 `pembelajaran mesin` | Model dan pelatihan ML |
| 🔌 `pengembangan` | Infrastruktur dan penyebaran |
| 🛡️ `pengujian-keamanan` | Praktik pengujian dan keamanan |
| 📖 `dokumentasi` | Pembuatan dan pengelolaan dokumentasi |
| 🎬 `media konten` | Pembuatan konten dan media |
| 💬 `komunikasi` | Alat komunikasi dan alur kerja |
| ❓ `tidak dikategorikan` | Default ketika tidak ditemukan kecocokan |

> Label lama seperti `alur kerja`, `arsitektur`, `infrastruktur`, `keamanan`, dan `pengujian` secara otomatis dinormalisasi melalui pemetaan alias.---

## 📝 Body Structure

Badan keterampilan yang ditulis dengan baik mengikuti hierarki ini:

### 📌 Ikhtisar (Wajib)
2-3 kalimat tentang**apa**fungsi keterampilan dan**mengapa**keterampilan itu ada.

### 🎯 Kapan Digunakan (Wajib)
Daftar poin**skenario spesifik**di mana keterampilan ini berlaku.

### 📋 Petunjuk Inti (Wajib)
**Proses langkah demi langkah**yang harus diikuti agen. Bersikaplah eksplisit. Bersikaplah spesifik. Agen bekerja paling baik dengan instruksi yang jelas dan tidak ambigu.

### 💡 Contoh (Disarankan)
Perintah konkrit, blok kode, atau keluaran yang diharapkan.**Semakin spesifik, semakin baik.**

### ✅ Praktik Terbaik (Disarankan)
Gunakan format ✅ Do / ❌ Don't format untuk pemindaian cepat.

### 🔧 Pemecahan Masalah (Opsional)
Permasalahan umum dan solusinya.

### 🔗 Keterampilan Terkait (Opsional)
Referensi silang ke keterampilan yang saling melengkapi.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Berfokus pada**satu alur kerja atau domain tertentu**
- 📌 Instruksi**cukup jelas untuk diikuti AI**tanpa interpretasi manusia
- 💡 Menyertakan**contoh nyata**dengan perilaku yang diharapkan
- 🛡️ Memiliki panduan**penanganan kesalahan**yang tepat
- 📊 Menghasilkan metadata yang sehat: kategori kanonik, kematangan L2+, kualitas 70+
- 🧰 Mengirimkan paket dukungan yang dapat digunakan kembali, tidak hanya prosa, idealnya di `referensi/`, `skrip/`, `contoh/`, dan `agen/` jika diperlukan

Untuk pola penilaian yang lebih kuat yang mendorong keterampilan ke kelompok tertinggi, lihat [Buku Pedoman Skor Tinggi](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Nasihat umum yang bisa diterapkan pada apa pun
- 🤷 Instruksi yang tidak jelas seperti "tulis kode yang baik"
- 🚫 Tidak ada contoh atau blok kode
- ⚠️ Bidang frontmatter tidak ada
- 📉 Skor kualitas rendah (di bawah 50)