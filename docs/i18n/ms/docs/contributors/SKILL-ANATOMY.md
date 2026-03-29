# 🔬 Anatomy of a Well-Written Skill (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Jangkaan struktur dan kualiti untuk `SKILL.md` Kemahiran Omni — format pengarangan yang memberi kuasa kepada keseluruhan katalog.**---

## 📐 The Two Parts

Setiap `SKILL.md` terdiri daripada dua bahagian yang berbeza:### 1️⃣ Frontmatter (YAML Metadata)

Metadata boleh dibaca mesin antara pembatas `---`. Ia berkuasa:

- 📚 Indeks kemahiran dan penjanaan katalog
- 🔎 Carian dan penapisan CLI
- ✅ Pengesahan dan pemarkahan kualiti
- 📊 Menjana artifak klasifikasi `metadata.json`
- 📋 Per-kemahiran nyata dalam `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Arahan yang boleh dibaca manusia (dan boleh dibaca ejen). Tulisnya seolah-olah anda**memberi taklimat kepada pembangun kanan**tentang cara melaksanakan tugas — cukup khusus sehingga ejen AI boleh mengikutinya tanpa meneka.---

## 📋 Frontmatter Reference

| Medan | Diperlukan | Taip | Penerangan |
|:------|:---------|:-----|:------------|
| `nama` | ✅ | rentetan | Mesti sepadan dengan nama direktori, huruf kecil bersempang |
| `penerangan` | ✅ | rentetan | Penerangan satu baris (10-200 aksara) |
| `versi` | ⚡ | rentetan | Versi semantik untuk kemahiran itu sendiri (cth., `"0.1.1"`) |
| `kategori` | ⚡ | rentetan | Satu kategori kanonik daripada taksonomi repo |
| `tag` | ⚡ | rentetan[] | Teg yang boleh dicari untuk penemuan |
| `kerumitan` | ⚡ | rentetan | `pemula` · `pertengahan` · `maju` · `pakar` |
| `risiko` | ⚡ | rentetan | `selamat` · `berhati-hati` · `menyinggung` · `kritikal` |
| `alat` | ⚡ | rentetan[] | Pembantu pengekodan AI yang diuji |
| `sumber` | ⚡ | rentetan | `omni-team` · `community` · `official` |
| `pengarang` | ⚡ | rentetan | Atribusi |
| `tarikh_tambah` | ⚡ | rentetan | tarikh ISO |
| `tarikh_kemas kini` | ⚡ | rentetan | tarikh ISO |

> ✅ = Sentiasa diperlukan · ⚡ = Diperlukan dalam mod ketat

Versi kemahiran adalah bebas daripada versi pakej npm. Pakej pada masa ini ialah `0.1.3`, tetapi kemahiran sedia ada boleh kekal pada versi semantiknya sendiri secara sah.---

## 🏷️ Canonical Categories

Taksonomi repo kini mentakrifkan**18 kategori kanonik**:

| Kategori | Domain |
|:---------|:-------|
| 💻 `pembangunan` | Pembangunan perisian am |
| 🎨 `depan` | Rangka kerja bahagian hadapan dan UI |
| 🔧 `hujung belakang` | Perkhidmatan hujung belakang dan API |
| 🌐 `fullstack-web` | Pembangunan web hujung ke hujung |
| 🛠️ `alat` | Perkakas dan utiliti pembangun |
| ⚙️ `cli-automation` | Alat CLI dan skrip automasi |
| 📊 `perniagaan` | Proses dan strategi perniagaan |
| 📐 `produk` | Pengurusan dan reka bentuk produk |
| 🎯 `rekaan` | Reka bentuk visual dan UX |
| 🤖 `data-ai` | Kejuruteraan data dan aplikasi AI |
| 🧠 `ai-agen` | Pembangunan dan corak ejen AI |
| 📈 `pembelajaran mesin` | Model dan latihan ML |
| 🔌 `devops` | Infrastruktur dan penempatan |
| 🛡️ `ujian-keselamatan` | Ujian dan amalan keselamatan |
| 📖 `dokumentasi` | Penjanaan dan pengurusan dokumentasi |
| 🎬 `media-kandungan` | Penciptaan kandungan dan media |
| 💬 `komunikasi` | Alat komunikasi dan aliran kerja |
| ❓ `tidak dikategorikan` | Lalai apabila tiada padanan ditemui |

> Label warisan seperti `aliran kerja`, `seni bina`, `infrastruktur`, `keselamatan` dan `pengujian` dinormalisasi secara automatik melalui pemetaan alias.---

## 📝 Body Structure

Badan kemahiran yang ditulis dengan baik mengikut hierarki ini:

### 📌 Gambaran Keseluruhan (Diperlukan)
2-3 ayat tentang**apa**kemahiran itu dan**mengapa**ia wujud.

### 🎯 Bila Perlu Digunakan (Diperlukan)
Senarai peluru**senario khusus**di mana kemahiran ini digunakan.

### 📋 Arahan Teras (Diperlukan)
**proses langkah demi langkah**yang harus diikuti oleh ejen. Bersikap eksplisit. Jadi khusus. Ejen berfungsi paling baik dengan arahan yang jelas dan tidak jelas.

### 💡 Contoh (Disyorkan)
Gesaan konkrit, blok kod atau output yang dijangkakan.**Lebih spesifik, lebih baik.**

### ✅ Amalan Terbaik (Disyorkan)
Gunakan ✅ Lakukan / ❌ Jangan format untuk pengimbasan pantas.

### 🔧 Menyelesaikan masalah (Pilihan)
Isu biasa dan penyelesaiannya.

### 🔗 Kemahiran Berkaitan (Pilihan)
Rujukan silang kepada kemahiran pelengkap.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Memfokuskan pada**satu aliran kerja atau domain**tertentu
- 📌 Arahan**cukup jelas untuk dipatuhi oleh AI**tanpa tafsiran manusia
- 💡 Termasuk**contoh konkrit**dengan tingkah laku yang diharapkan
- 🛡️ Mempunyai panduan**pengendalian ralat**yang betul
- 📊 Menghasilkan metadata yang sihat: kategori kanonik, kematangan L2+, kualiti 70+
- 🧰 Menghantar pek sokongan boleh guna semula, bukan sahaja prosa, idealnya merentas `rujukan/`, `skrip/`, `contoh/` dan `ejen/` jika bersesuaian

Untuk corak pemarkahan yang lebih kukuh yang mendorong kemahiran ke dalam kumpulan tertinggi, lihat [Buku Main Skor Tinggi](BUKU MAIN SKOR TINGGI.md).### ❌ Bad Skill

- 🌫️ Nasihat generik yang boleh digunakan untuk apa sahaja
- 🤷 Arahan yang tidak jelas seperti "tulis kod yang bagus"
- 🚫 Tiada contoh atau blok kod
- ⚠️ Tiada medan frontmatter
- 📉 Skor kualiti rendah (di bawah 50)