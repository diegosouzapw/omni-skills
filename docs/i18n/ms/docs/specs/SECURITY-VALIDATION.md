# 🛡️ Security Validation and Distribution (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Pengimbasan keselamatan, penjanaan arkib, tandatangan pilihan dan pembungkusan pengedaran untuk setiap kemahiran yang diterbitkan.**---

## 📊 Status

| Ciri | Negeri |
|:--------|:------|
| ✅ Pengimbas keselamatan statik | Sentiasa didayakan |
| ✅ Klasifikasi metadata setiap kemahiran | Dilaksanakan |
| ✅ Arkib setiap kemahiran (zip/tar.gz) | Dilaksanakan |
| ✅ SHA-256 checksum manifes | Dilaksanakan |
| ✅ Gerbang pengimbas CI pada tag keluaran | Dilaksanakan |
| ✅ npm menerbitkan aliran kerja daripada tarball yang disahkan | Dilaksanakan |
| ⚙️ Pengimbasan ClamAV | Pengayaan pilihan |
| ⚙️ Carian cincang VirusTotal | Pengayaan pilihan |
| ✅ Menandatangani berasingan | Dilaksanakan |
| ✅ Penandatanganan berkuatkuasa CI | Dilaksanakan pada teg keluaran |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Mengimbas setiap kemahiran semasa pengesahan:

| Sasaran | Perkara yang Diimbas |
|:-------|:-----------------|
| 📝 `KEMAHIRAN.md` | Kandungan kemahiran utama |
| 📄 Fail Markdown/teks | Rujukan dan dokumen yang dibungkus |
| ⚙️ Skrip | Skrip automasi berbungkus |

**Keluarga memerintah:**

| Peraturan | Contoh |
|:-----|:---------|
| 🎭**Suntikan segera**| Corak exfiltration, arahan mengatasi |
| 💣**Arahan yang merosakkan**| `rm -rf`, `format`, `del /s` |
| 🔑**Peningkatan keistimewaan**| `sudo`, `chmod 777`, corak setuid |
| 📂**Laluan yang mencurigakan**| `/etc/shadow`, `~/.ssh`, fail kelayakan |
| ⚠️**Primitif berisiko**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Memerlukan `clamscan` dalam `PATH`
- Mengimbas fail yang dibungkus untuk mengesan perisian hasad yang diketahui
- Keputusan direkodkan dalam metadata kemahiran---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Hash carian sahaja**— tiada muat naik fail semasa pengesahan biasa
- Fail tidak diketahui kekal setempat sahaja
- Mengekalkan binaan**deterministik**dan bebas CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Pintu pelepasan yang ketat:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Langkah ini membaca `kemahiran/*/metadata.json` yang dihasilkan dan gagal jika pengimbas yang diperlukan tidak melaksanakan atau melaporkan pengesanan.---

## 📊 Security Output Shape

Data keselamatan dipancarkan dalam setiap metadata kemahiran:```json
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

> Blok ini disebarkan ke dalam paparan manifes dan katalog, membolehkan CLI, API dan MCP**menapis dan menyusun mengikut skor keselamatan**.---

## 📦 Archive Outputs

Setiap kemahiran yang diterbitkan menjana:

| Fail | Format |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP arkib |
| `dist/archives/<skill>.tar.gz` | Arkib Tarball |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifes |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Teg keluaran Tindakan GitHub (`v*`) sekarang:

1. sahkan tag git sepadan dengan `package.json`
2. pasang dan muat semula ClamAV
3. menyahkod kunci tandatangan keluaran daripada rahsia GitHub
4. jalankan `npm run release:verify`
5. bungkus tarball dengan `npm pack`
6. terbitkan tarball tepat itu ke npm dengan asalnya
7. buat Keluaran GitHub dengan nota tersuai dan aset pengesahan yang dilampirkan---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Jika tiada kunci awam disediakan, binaan memperoleh satu dengan `openssl` dan meletakkannya dalam `dist/signing/`.

Apabila didayakan, fail `.sig` dipancarkan di sebelah arkib dan manifes semak.

Dalam CI, teg keluaran kini memerlukan tandatangan melalui:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` atau `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- pilihan `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` atau `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Had | Status |
|:-----------|:-------|
| Penyerahan muat naik VirusTotal | Sengaja dikecualikan daripada pengesahan lalai |
| Menandatangani penguatkuasaan | Dikuatkuasakan pada tag keluaran; binaan tempatan masih boleh dijalankan tanpa ditandatangani |
| Tadbir urus yang dihoskan | Pengesahan terbina dalam, masa jalan pentadbir, senarai dibenarkan CORS/IP, mod penyelenggaraan dan pengelogan audit telah disediakan; gerbang luaran kekal sebagai pilihan |