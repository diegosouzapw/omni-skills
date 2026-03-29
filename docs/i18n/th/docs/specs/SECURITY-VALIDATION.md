# 🛡️ Security Validation and Distribution (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**การสแกนความปลอดภัย การสร้างไฟล์เก็บถาวร การลงนามเพิ่มเติม และแพ็คเกจการแจกจ่ายสำหรับทุกทักษะที่เผยแพร่**---

## 📊 Status

| คุณสมบัติ | รัฐ |
|:--------|:-------|
| ✅ เครื่องสแกนความปลอดภัยแบบคงที่ | เปิดใช้งานเสมอ |
| ✅ การจำแนกข้อมูลเมตาต่อทักษะ | ดำเนินการแล้ว |
| ✅ ไฟล์เก็บถาวรต่อทักษะ (zip/tar.gz) | ดำเนินการแล้ว |
| ✅ รายการตรวจสอบผลรวม SHA-256 | ดำเนินการแล้ว |
| ✅ ประตูสแกนเนอร์ CI บนแท็กปล่อย | ดำเนินการแล้ว |
| ✅ npm เผยแพร่เวิร์กโฟลว์จาก tarball ที่ตรวจสอบแล้ว | ดำเนินการแล้ว |
| ⚙️ สแกน ClamAV | อุปกรณ์เสริมเสริมสมรรถนะ |
| ⚙️ ค้นหาแฮชของ VirusTotal | อุปกรณ์เสริมเสริมสมรรถนะ |
| ✅ลายเซ็นต์เดี่ยว | ดำเนินการแล้ว |
| ✅ การลงนามที่บังคับใช้ CI | ใช้งานกับแท็กปล่อย |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

สแกนทุกทักษะระหว่างการตรวจสอบ:

| เป้าหมาย | สิ่งที่ได้รับการสแกน |
|:-------|:-----------------|
| ` `SKILL.md` | เนื้อหาทักษะหลัก |
| 📄 มาร์กดาวน์/ไฟล์ข้อความ | แพ็คเกจอ้างอิงและเอกสาร |
| ⚙️ สคริปต์ | สคริปต์อัตโนมัติแบบแพ็กเกจ |

**กลุ่มกฎ:**

| กฎ | ตัวอย่าง |
|:-----|:---------|
| 🎭**ฉีดด่วน**| รูปแบบการกรอง คำสั่งแทนที่ |
| 💣**คำสั่งทำลายล้าง**| `rm -rf`, `รูปแบบ`, `del /s` |
| 🔑**การยกระดับสิทธิพิเศษ**| `sudo`, `chmod 777`, รูปแบบการตั้งค่า |
| 📂**เส้นทางที่น่าสงสัย**| `/etc/shadow`, `~/.ssh`, ไฟล์ข้อมูลประจำตัว |
| ⚠️**ดั้งเดิมที่มีความเสี่ยง**| `shell=True`, `pickle.load`, `eval`, `แยกทั้งหมด` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- ต้องใช้ `clamscan` ใน `PATH`
- สแกนไฟล์แพ็คเกจเพื่อหามัลแวร์ที่รู้จัก
- ผลลัพธ์ที่บันทึกไว้ในข้อมูลเมตาของทักษะ---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**การค้นหาแฮชเท่านั้น**— ไม่มีการอัพโหลดไฟล์ระหว่างการตรวจสอบปกติ
- ไฟล์ที่ไม่รู้จักยังคงอยู่ในเครื่องเท่านั้น
- คงไว้ซึ่ง**การกำหนด**และไม่ขึ้นอยู่กับ CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

ประตูปล่อยที่เข้มงวด:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

ขั้นตอนนี้จะอ่าน `skills/*/metadata.json` ที่สร้างขึ้น และจะล้มเหลวหากเครื่องสแกนที่จำเป็นไม่ได้ดำเนินการหรือรายงานการตรวจจับ---

## 📊 Security Output Shape

ข้อมูลความปลอดภัยจะถูกปล่อยออกมาในทุกข้อมูลเมตาของทักษะ:```json
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

> บล็อกนี้เผยแพร่ไปยังรายการและมุมมองแค็ตตาล็อก ทำให้ CLI, API และ MCP สามารถ**กรองและจัดอันดับตามคะแนนความปลอดภัย**---

## 📦 Archive Outputs

ทักษะที่เผยแพร่แต่ละรายการจะสร้าง:

| ไฟล์ | รูปแบบ |
|:-----|:-------|
| `dist/archives/<ทักษะ>.zip` | ไฟล์ ZIP |
| `dist/archives/<ทักษะ>.tar.gz` | ไฟล์เก็บถาวร Tarball |
| `dist/archives/<ทักษะ>.checksums.txt` | รายการตรวจสอบผลรวม SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

แท็กปล่อย GitHub Actions (`v*`) ทันที:

1. ตรวจสอบว่าแท็ก git ตรงกับ `package.json`
2. ติดตั้งและรีเฟรช ClamAV
3. ถอดรหัสคีย์การลงนามการเปิดตัวจากความลับ GitHub
4. รัน `npm run release:verify`
5. บรรจุ tarball ด้วย `npm pack`
6. เผยแพร่ tarball ที่แน่นอนนั้นไปที่ npm พร้อมแหล่งที่มา
7. สร้าง GitHub Release พร้อมบันทึกที่กำหนดเองและแนบเนื้อหาการตรวจสอบ---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> หากไม่มีการระบุคีย์สาธารณะ โครงสร้างจะได้รับรหัส `openssl` และวางไว้ใน `dist/signing/`

เมื่อเปิดใช้งาน ไฟล์ `.sig` จะถูกส่งออกไปข้างไฟล์เก็บถาวรและรายการตรวจสอบ

ใน CI แท็ก release ตอนนี้จำเป็นต้องลงชื่อเข้าใช้ผ่าน:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` หรือ `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- ทางเลือก `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` หรือ `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| ข้อจำกัด | สถานะ |
|:----------|:-------|
| ส่งการอัพโหลด VirusTotal | จงใจแยกออกจากการตรวจสอบเริ่มต้น |
| การบังคับใช้การลงนาม | บังคับใช้กับแท็กปล่อย งานสร้างในเครื่องอาจยังคงทำงานโดยไม่ได้ลงนาม |
| โฮสต์การกำกับดูแล | มีการตรวจสอบสิทธิ์ในตัว รันไทม์ของผู้ดูแลระบบ รายการที่อนุญาตของ CORS/IP โหมดการบำรุงรักษา และการบันทึกการตรวจสอบ เกตเวย์ภายนอกยังคงเป็นทางเลือก |