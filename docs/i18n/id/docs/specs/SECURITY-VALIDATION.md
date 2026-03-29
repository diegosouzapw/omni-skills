# 🛡️ Security Validation and Distribution (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Pemindaian keamanan, pembuatan arsip, penandatanganan opsional, dan pengemasan distribusi untuk setiap keterampilan yang dipublikasikan.**---

## 📊 Status

| Fitur | Negara |
|:--------|:------|
| ✅ Pemindai keamanan statis | Selalu diaktifkan |
| ✅ Klasifikasi metadata per keterampilan | Diimplementasikan |
| ✅ Arsip per keterampilan (zip/tar.gz) | Diimplementasikan |
| ✅ Manifes checksum SHA-256 | Diimplementasikan |
| ✅ Gerbang pemindai CI pada tag rilis | Diimplementasikan |
| ✅ npm publikasikan alur kerja dari tarball terverifikasi | Diimplementasikan |
| ⚙️ Pemindaian ClamAV | Pengaya opsional |
| ⚙️ Pencarian hash Total Virus | Pengaya opsional |
| ✅ Penandatanganan terpisah | Diimplementasikan |
| ✅ Penandatanganan yang diberlakukan CI | Diimplementasikan pada tag rilis |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Memindai setiap keterampilan selama validasi:

| Sasaran | Apa yang Dipindai |
|:-------|:-----------------|
| 📝 `SKILL.md` | Konten keterampilan utama |
| 📄 Penurunan harga/file teks | Referensi dan dokumen yang dikemas |
| ⚙️ Skrip | Skrip otomatisasi yang dikemas |

**Keluarga aturan:**

| Aturan | Contoh |
|:-----|:---------|
| 🎭**Injeksi cepat**| Pola eksfiltrasi, penggantian instruksi |
| 💣**Perintah yang merusak**| `rm -rf`, `format`, `del /s` |
| 🔑**Peningkatan hak istimewa**| `sudo`, `chmod 777`, pola setuid |
| 📂**Jalur mencurigakan**| `/etc/shadow`, `~/.ssh`, file kredensial |
| ⚠️**Primitif berisiko**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Memerlukan `clamscan` di `PATH`
- Memindai file paket untuk mencari malware yang dikenal
- Hasil dicatat dalam metadata keterampilan---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Hanya pencarian hash**— tidak ada file yang diunggah selama validasi normal
- File yang tidak dikenal tetap hanya bersifat lokal
- Menjaga build**deterministik**dan independen terhadap CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Gerbang pelepasan yang ketat:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Langkah ini membaca `skills/*/metadata.json` yang dihasilkan dan gagal jika pemindai yang diperlukan tidak menjalankan atau melaporkan deteksi.---

## 📊 Security Output Shape

Data keamanan dikeluarkan di setiap metadata keterampilan:```json
{
  "security": {
    "score": 100,
    "tier": "hardened",
    "status": "passed",
    "findings_count": 0,
    "findings": [],
    "signals": {
      "scanned_files": 3,
      "script_files": 0,
      "binary_like_files": 0
    },
    "scanners": {
      "static": { "enabled": true, "status": "completed" },
      "clamav": { "enabled": false, "status": "disabled" },
      "virustotal": { "enabled": false, "status": "disabled" }
    }
  }
}
```

> Blok ini disebarkan ke dalam tampilan manifes dan katalog, memungkinkan CLI, API, dan MCP untuk**memfilter dan memberi peringkat berdasarkan skor keamanan**.---

## 📦 Archive Outputs

Setiap keterampilan yang diterbitkan menghasilkan:

| Berkas | Format |
|:-----|:-------|
| `dist/arsip/<keterampilan>.zip` | Arsip ZIP |
| `dist/arsip/<keterampilan>.tar.gz` | Arsip tarball |
| `dist/arsip/<keterampilan>.checksums.txt` | Manifes checksum SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Tag rilis GitHub Actions (`v*`) sekarang:

1. verifikasi tag git cocok dengan `package.json`
2. instal dan segarkan ClamAV
3. mendekode kunci penandatanganan rilis dari rahasia GitHub
4. jalankan `npm jalankan rilis:verifikasi`
5. kemas tarball dengan `npm pack`
6. publikasikan tarball yang tepat ke npm dengan asal
7. buat Rilis GitHub dengan catatan khusus dan aset verifikasi terlampir---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Jika tidak ada kunci publik yang disediakan, build akan mengambil kunci publik dengan `openssl` dan menempatkannya di `dist/signing/`.

Saat diaktifkan, file `.sig` dikeluarkan di samping arsip dan manifes checksum.

Di CI, tag rilis kini memerlukan proses masuk:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` atau `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- opsional `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` atau `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Batasan | Status |
|:-----------|:-------|
| Pengiriman unggahan VirusTotal | Sengaja dikecualikan dari validasi default |
| Penegakan penandatanganan | Diberlakukan pada tag rilis; build lokal mungkin masih berjalan tanpa tanda tangan |
| Tata kelola yang dihosting | Otentikasi bawaan, waktu proses admin, daftar izin CORS/IP, mode pemeliharaan, dan pencatatan audit sudah tersedia; gateway eksternal tetap opsional |