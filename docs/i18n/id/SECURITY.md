# 🛡️ Security Policy (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Jika Anda menemukan masalah keamanan di Omni Skills, jangan buka masalah publik terlebih dahulu.**

Silakan lapor melalui salah satu saluran pribadi berikut:

| Saluran | Bagaimana |
|:--------|:----|
| 🔒 Penasihat Keamanan GitHub | [Buka penasihat pribadi](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 Kontak Langsung | Hubungi langsung pengelolanya |### 📋 Include in Your Report

- 📁 Komponen atau jalur yang terpengaruh
- 🔄 Langkah-langkah reproduksi
- ⚠️ Penilaian dampak
- 🧪 Materi bukti konsep apa pun yang diperlukan untuk memverifikasi masalah

>**⏱️ Kami bertujuan untuk menerima laporan dalam waktu 48 jam**dan memprioritaskan perbaikan berdasarkan dampaknya.---

## 🎯 Scope

Kebijakan ini mencakup waktu proses dan permukaan konten repositori:

| Komponen | Jalur |
|:----------|:-----|
| 🖥️ CLI dan penginstal | `alat/tempat sampah/` |
| 📚 Perpustakaan bersama | `alat/lib/` |
| ⚙️ Pembuatan dan validasi skrip | `alat/skrip/` |
| 📦 Artefak katalog yang dihasilkan | `dist/` |
| 🌐 Paket API, MCP, dan A2A | `paket/` |
| 🧠 Konten keterampilan | `skills/` — terutama perintah shell, akses jaringan, aliran kredensial, atau panduan sensitif terhadap keamanan |---

## Arsitektur

Repositori bergantung pada kontrol keamanan berikut:### 🧠 Skill-Level Controls

| Kontrol | Deskripsi |
|:--------|:-----------|
| 🏷️ Bidang risiko | Metadata keterampilan mencakup `tingkat risiko` yang dinyatakan |
| 📊 Mencetak gol | Validasi menghitung skor kematangan, praktik terbaik, kualitas, dan keamanan |
| 🔍 Pemindai statis | Periksa `SKILL.md`, file paket, dan skrip pembantu |
| 🦠 Pemindai opsional | Pencarian hash ClamAV dan VirusTotal (bila dikonfigurasi) |### 🖥️ Runtime Controls

| Kontrol | Deskripsi |
|:--------|:-----------|
| 📁 Keamanan jalur | Alur pemasangan menggunakan pemeriksaan keamanan jalur |
| 🔒 Daftar yang diizinkan menulis | Penulisan sespan MCP lokal dibatasi oleh daftar yang diizinkan |
| 👁️ Default uji coba | Alat berorientasi tulis default adalah dry-run kecuali dinonaktifkan secara eksplisit |
| 🔐 Otentikasi & batasan | Autentikasi pembawa/kunci API, autentikasi runtime admin, pembatasan laju, daftar yang diizinkan CORS/IP |
| 📋 Audit | Audit logging, mode pemeliharaan, dan ID permintaan |### 📦 Release Controls

| Kontrol | Deskripsi |
|:--------|:-----------|
| ✅ Manifes checksum | Checksum SHA-256 untuk arsip yang dihasilkan |
| ✍️ Tanda tangan | Verifikasi tanda tangan terpisah di CI sebelum dipublikasikan |
| 🧪 Pemeriksaan asap | Latihan mengirimkan permukaan runtime sebelum rilis |---

## 🔮 What Is Still Open

> Pekerjaan keamanan utama yang tersisa**bukan**pengerasan dasar. Item yang terbuka adalah:

| Daerah | Status |
|:-----|:-------|
| 🏢 Tata kelola perusahaan | Identitas eksternal, kebijakan gateway, dan integrasi WAF di atas kontrol dalam proses saat ini |
| 🔌 Penulis klien MCP | Penulis yang lebih luas hanya ketika kontrak konfigurasi publik cukup stabil |
| 📊 Penyempurnaan pemindai | Penyempurnaan berkelanjutan sehingga keterampilan luar biasa tetap terpisah dengan jelas dari keterampilan yang terstruktur dengan baik |---

## ⚠️ Risk Levels in Skills

Setiap keterampilan menyatakan salah satu dari `tingkat risiko` berikut:

| Tingkat Risiko | Arti |
|:-----------|:--------|
| 🟢 `aman` | Diperkirakan tidak ada operasi destruktif |
| 🟡 `hati-hati` | Dapat memodifikasi file atau berinteraksi dengan sistem eksternal |
| 🔴 `menyinggung` | Alur kerja pengujian keamanan atau permusuhan yang memerlukan otorisasi eksplisit |
| ⛔ `kritis` | Operasi berdampak tinggi atau tingkat sistem |---

## 📋 Disclosure Notes

Karena Omni Skills mengirimkan helper yang dapat dieksekusi, perkakas lokal yang mendukung sistem file, dan penulis konfigurasi khusus klien, kelas kerentanan ini harus diperlakukan sebagai**prioritas tinggi**bahkan jika kelas tersebut muncul "hanya lokal":

| Kategori | Contoh |
|:---------|:---------|
| 📁 Lintasan jalur | Direktori keluar melalui pemasangan keterampilan atau jalur konfigurasi |
| 🔗 Keamanan symlink | Symlink berikut selama instalasi atau ekstraksi arsip |
| 🖥️ Eksekusi perintah | Injeksi perintah sewenang-wenang melalui konten keterampilan atau skrip |
| 📦 Verifikasi arsip | Lewati checksum atau verifikasi tanda tangan |
| 🔓 Bypass autentikasi | Pembatasan tarif atau bypass autentikasi pada API/MCP |
| 🔌 Melewati daftar yang diizinkan | Pengelakan daftar sespan lokal yang diizinkan |
| 🦠 Penghindaran pemindai | Kelas negatif palsu pada pemindai statis atau eksternal |