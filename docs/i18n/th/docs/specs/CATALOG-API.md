# 🌐 Catalog API Surface (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**HTTP API แบบอ่านอย่างเดียวสำหรับการค้นหาทักษะ ค้นหา การเปรียบเทียบ การวางแผนการติดตั้ง และการดาวน์โหลดสิ่งประดิษฐ์**---

## 📊 Status

| คุณสมบัติ | รัฐ |
|:--------|:-------|
| ✅ จุดสิ้นสุดแคตตาล็อก | ดำเนินการแล้ว |
| ✅ รับรองความถูกต้อง (ผู้ถือ + รหัส API) | ดำเนินการแล้ว |
| ✅ ผู้ดูแลระบบรันไทม์ auth | ดำเนินการแล้ว |
| ✅ การจำกัดอัตรา | ดำเนินการแล้ว |
| ✅ การบันทึกการตรวจสอบ | ดำเนินการแล้ว |
| ✅ รายการที่อนุญาต CORS และ IP | ดำเนินการแล้ว |
| ✅ โหมดการบำรุงรักษา | ดำเนินการแล้ว |
| ✅ ดาวน์โหลดเก็บถาวร | ดำเนินการแล้ว |
| ✅ ข้อมูลจำเพาะ OpenAPI | ดำเนินการแล้ว |
| ⚠️ แบ็กเอนด์การกำกับดูแล | พื้นฐานที่ขับเคลื่อนด้วย Env ในกระบวนการ เกตเวย์ภายนอกหรือ IdP ยังคงเป็นทางเลือก |---

## 🎯 Purpose

API จัดเตรียมพื้นผิวสไตล์รีจิสทรีสำหรับ:

- 📋 การลงรายการและการกรองทักษะตามคุณภาพ ความปลอดภัย หมวดหมู่ ความเสี่ยง และอื่นๆ
- 📌 ดึงรายการทักษะส่วนบุคคล
- 🔎 การค้นหาข้อความแบบเต็มและการเปรียบเทียบหลายทักษะ
- 📦 รายการชุดพร้อมความพร้อม
- 📐 การสร้างแผนการติดตั้งแบบอ่านอย่างเดียว
- 📥 ดาวน์โหลดสิ่งประดิษฐ์ ไฟล์เก็บถาวร และรายการตรวจสอบที่สร้างขึ้น

แค็ตตาล็อกและพื้นผิวรายการเดียวกันนี้ยังเป็นพื้นฐานสำหรับ:

- การวางแผนการติดตั้ง CLI ท้องถิ่น
- การตอบสนองการค้นพบแบบอ่านอย่างเดียวของ MCP
- การค้นพบ A2A และการส่งมอบแผนการติดตั้ง
- แค็ตตาล็อกส่วนตัวที่เป็นไปได้ซึ่งมีชั้นการตรวจสอบสิทธิ์ภายนอกอยู่ด้านบน---

## เริ่มต้นอย่างรวดเร็ว

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**ค่าเริ่มต้น**: `127.0.0.1:3333`---

## 🔐 Security Controls

การควบคุมความปลอดภัยทั้งหมดขับเคลื่อนด้วยสภาพแวดล้อมและเป็นทางเลือก:

| ควบคุม | ตัวแปร | ตัวอย่าง |
|:--------|:---------|:--------|
| 🔑**ผู้ถือสิทธิ์**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `แทนที่ฉัน` |
| 🗝️**การตรวจสอบสิทธิ์คีย์ API**| `OMNI_SKILLS_HTTP_API_KEYS` | `คีย์-a, คีย์-b` |
| 🛂**ผู้ดูแลระบบตรวจสอบสิทธิ์**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `ความลับของผู้ดูแลระบบ` |
| 🚦**จำกัดอัตรา**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**บันทึกการตรวจสอบ**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**รูปแบบการตรวจสอบ**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` หรือ `text` |
| 📄**ไฟล์ตรวจสอบ**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**รายการที่อนุญาต CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**รายการที่อนุญาต IP**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**พร็อกซีที่เชื่อถือได้**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `วนกลับ` |
| 🚧**โหมดการบำรุงรักษา**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**ลองอีกครั้งหลังจาก**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**พฤติกรรม:**
- 🟢 `/healthz` ยังคงอยู่**ไม่ผ่านการรับรองความถูกต้องเสมอ**
- 🔒 เส้นทางอื่นๆ ทั้งหมดต้องมีการตรวจสอบสิทธิ์เมื่อเปิดใช้งานการตรวจสอบสิทธิ์
- 🛂 `/admin/runtime` ต้องใช้โทเค็นผู้ดูแลระบบเมื่อเปิดใช้งาน
- 🚦 การจำกัดอัตราอยู่ระหว่างดำเนินการด้วยส่วนหัวการตอบสนอง `X-RateLimit-*`
- 🧾 ทุกการตอบกลับจะมี `X-Request-Id`
- 🚧 โหมดการบำรุงรักษาส่งคืน `503` สำหรับเส้นทางที่ไม่เกี่ยวกับสุขภาพและไม่ใช่ผู้ดูแลระบบ### ✅ Current governance decision

ทิศทางของโปรเจ็กต์ปัจจุบันคือ**นำรูปแบบแค็ตตาล็อกเดียวกันกลับมาใช้ใหม่สำหรับการปรับใช้แบบสาธารณะหรือส่วนตัว**และการตรวจสอบสิทธิ์เลเยอร์ภายนอกเมื่อจำเป็น

นั่นหมายถึง:

- รายการและรูปร่าง API ยังคงถูกแชร์
- การปรับใช้แบบโฮสต์เองและแบบท้องถิ่นสามารถคงอยู่บนพื้นฐานในกระบวนการได้
- การกำกับดูแลโฮสต์ขั้นสูงยิ่งขึ้นสามารถย้ายไปยังเกตเวย์ภายนอกหรือเลเยอร์การตรวจสอบสิทธิ์ขององค์กรในภายหลังโดยไม่ต้องฟอร์กโมเดลข้อมูล### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| วิธีการ | เส้นทาง | คำอธิบาย |
|:-------|:-----|:------------|
| `รับ` | `/healthz` | ตรวจสุขภาพ (ไม่ผ่านการรับรองความถูกต้อง) |
| `รับ` | `/openapi.json` | ข้อมูลจำเพาะ OpenAPI 3.1 แบบไดนามิก |
| `รับ` | `/ผู้ดูแลระบบ/รันไทม์` | สแนปชอตการกำกับดูแลและรันไทม์ (ผู้ดูแลระบบรับรองความถูกต้องเมื่อเปิดใช้งาน) |### 📚 Catalog & Skills

| วิธีการ | เส้นทาง | คำอธิบาย |
|:-------|:-----|:------------|
| `รับ` | `/v1/ทักษะ` | แสดงรายการทักษะพร้อมตัวกรอง |
| `รับ` | `/v1/ทักษะ/:id` | รับรายการทักษะส่วนบุคคล |
| `รับ` | `/v1/ค้นหา` | ค้นหาข้อความแบบเต็ม |
| `รับ` | `/v1/compare?ids=id1,id2` | เปรียบเทียบหลายทักษะ |
| `รับ` | `/v1/บันเดิล` | แสดงรายการชุดข้อมูลที่มีความพร้อมใช้งาน |
| `โพสต์` | `/v1/ติดตั้ง/วางแผน` | สร้างแผนการติดตั้ง |### 🔎 List/Search Filters

| ตัวกรอง | ตัวอย่าง |
|:-------|:--------|
| `หมวดหมู่` | `?category=การพัฒนา` |
| `เครื่องมือ` | `?เครื่องมือ=เคอร์เซอร์` |
| `ความเสี่ยง` | `?ความเสี่ยง=ปลอดภัย` |
| `เรียงลำดับ` | `?sort=quality\|แนวปฏิบัติที่ดีที่สุด\|ระดับ\|ความปลอดภัย\|ชื่อ` |
| `สั่งซื้อ` | `?order=asc\|คำอธิบาย` |
| `คุณภาพขั้นต่ำ` | `?min_quality=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `ระดับต่ำสุด` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `validation_status` | `?validation_status=ผ่าน` |
| `สถานะความปลอดภัย` | `?security_status=ผ่าน` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| วิธีการ | เส้นทาง | คำอธิบาย |
|:-------|:-----|:------------|
| `รับ` | `/v1/แค็ตตาล็อก/ดาวน์โหลด` | ดาวน์โหลดแคตตาล็อกฉบับเต็ม |
| `รับ` | `/v1/ทักษะ/:id/สิ่งประดิษฐ์` | แสดงรายการสิ่งประดิษฐ์ทักษะ |
| `รับ` | `/v1/skills/:id/archives` | แสดงรายการคลังทักษะ |
| `รับ` | `/v1/ทักษะ/:id/ดาวน์โหลด` | ลิงค์ดาวน์โหลดทั้งหมดที่มี |
| `รับ` | `/v1/ทักษะ/:id/ดาวน์โหลด/รายการ` | รายการทักษะ JSON |
| `รับ` | `/v1/ทักษะ/:id/ดาวน์โหลด/จุดเข้าใช้งาน` | ทักษะ SKILL.md |
| `รับ` | `/v1/skills/:id/download/artifact?path=<path>` | สิ่งประดิษฐ์เฉพาะ |
| `รับ` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | คลังทักษะ |
| `รับ` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | ลายเซ็นเดี่ยว |
| `รับ` | `/v1/skills/:id/download/archive/checksums` | ผลรวมเช็ค SHA-256 |---

## 🔗 Link Enrichment

เมื่อคำขอได้รับการจัดการผ่าน API เซิร์ฟเวอร์**เพิ่มคุณค่าโดยอัตโนมัติ**รายการ รายการสิ่งประดิษฐ์ และติดตั้งแผนด้วย URL ที่แน่นอนที่ได้มาจากที่มาของคำขอที่เข้ามา นี่คือการเพิ่มประสิทธิภาพรันไทม์ ไม่ได้รวมไว้ใน `dist/manifests/*.json`---

## 📋 Install Plan Notes

> ⚠️**แผนการติดตั้งเป็นเพียงการแสดงตัวอย่าง ไม่ใช่การเขียนจากระยะไกล**

API จะไม่ติดตั้งลงในเครื่องของผู้เรียก มันกลับมา:
- 📌 ข้อมูลเมตาทักษะที่เลือก
- ⚠️ คำเตือนสำหรับสมาชิกบันเดิลที่หายไป
- 🖥️ คำสั่ง CLI ที่เป็นรูปธรรมให้รันในเครื่อง
- 🔗 URL ดาวน์โหลดสาธารณะเมื่อมีแหล่งที่มาของคำขอ---

## 🔌 Relationship to MCP

เซิร์ฟเวอร์ MCP จะใช้ URL API สาธารณะเดียวกันซ้ำเมื่อกำหนดค่า:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

วิธีนี้ช่วยให้ตัวอย่างการติดตั้ง MCP ส่งคืนไฟล์ Manifest และ URL ของวัตถุที่เป็นรูปธรรมได้ แทนที่จะส่งเฉพาะเส้นทาง Repo ในเครื่องเท่านั้น---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` ส่งคืนสแนปชอตการกำกับดูแลที่เป็นประโยชน์สำหรับการวินิจฉัยที่โฮสต์:

- วิธีการรับรองความถูกต้องที่ใช้งานอยู่
- สถานะผู้ดูแลระบบ-รับรองความถูกต้อง
- หน้าต่างจำกัดอัตราและสูงสุด
- รายการที่อนุญาตของ CORS
- รายการที่อนุญาต IP
- สถานะโหมดการบำรุงรักษา
- ปลายทางการตรวจสอบและรูปแบบ
- ยอดรวมแค็ตตาล็อกปัจจุบัน
- ขอ ID สะท้อนสำหรับการตรวจสอบย้อนกลับ