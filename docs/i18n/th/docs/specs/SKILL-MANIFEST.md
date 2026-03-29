# 📋 Skill Manifest Specification (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**ไฟล์ Manifest JSON ที่เครื่องอ่านได้ซึ่งสร้างขึ้นจาก `SKILL.md` แต่ละรายการระหว่างไปป์ไลน์บิลด์ — สัญญาข้อมูลเดียวที่ใช้โดยพื้นผิวรันไทม์ทั้งหมด**---

## 📊 Status

| คุณสมบัติ | รัฐ |
|:--------|:-------|
| ✅ สร้างอัตโนมัติจาก SKILL.md | ดำเนินการแล้ว |
| ✅ ใช้โดย CLI, API, MCP, A2A | ดำเนินการแล้ว |
| ✅ คลังเก็บพร้อมเช็คซัม | ดำเนินการแล้ว |
| ✅ การจำแนกความปลอดภัย | ดำเนินการแล้ว |

>**ข้อสำคัญ**: ไฟล์ Manifest เป็น**การสร้างอาร์ติแฟกต์**ผู้เขียนผู้ร่วมให้ข้อมูล `SKILL.md` — ไปป์ไลน์ได้รับไฟล์ Manifest JSON โดยอัตโนมัติ---

## 🎯 Purpose

ไฟล์ Manifest มีอยู่เพื่อให้**พื้นผิวรันไทม์ทั้งหมด**ใช้รูปร่างที่ทำให้เป็นมาตรฐานเดียวกัน:

| พื้นผิว | มันใช้ Manifests อย่างไร |
|:--------|:---------------------|
| 🖥️**CLI**| ค้นหา วางแผนการติดตั้ง วินิจฉัยโดยแพทย์ |
| 🌐**API**| การตอบกลับปลายทาง การกรอง ลิงก์ดาวน์โหลด |
| 🔌**MCP**| การตอบสนองของเครื่องมือ เนื้อหาทรัพยากร |
| 🤖**A2A**| เพย์โหลดการค้นพบและคำแนะนำ |---

## 📁 Output Locations

| สิ่งประดิษฐ์ | เส้นทาง |
|:---------|:-----|
| 📊 ข้อมูลเมตาของรูท | `metadata.json` |
| 📊 ข้อมูลเมตาต่อทักษะ | `ทักษะ/<ทักษะ>/metadata.json` |
| 📋 ดัชนีทักษะ | `skills_index.json` |
| 📚 แคตตาล็อกที่ตีพิมพ์ | `dist/catalog.json` |
| 📌 รายการต่อทักษะ | `dist/manifests/<ทักษะ>.json` |
| 📦 ไฟล์ Zip | `dist/archives/<ทักษะ>.zip` |
| 📦 ไฟล์เก็บถาวร Tarball | `dist/archives/<ทักษะ>.tar.gz` |
| 🔒 รายการเช็คซัม | `dist/archives/<ทักษะ>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| สนาม | คำอธิบาย |
|:------|:------------|
| `schema_version` | เวอร์ชันของสคีมารายการ |
| `ไอดี` | ตัวระบุทักษะที่เสถียรจากฟิลด์ `ชื่อ` |
| `ทาก` | Directory Slug ภายใต้ `ทักษะ/` |
| `ชื่อที่แสดง` | ชื่อที่มนุษย์สามารถอ่านได้ตั้งแต่หัวข้อแรก |### 📝 Metadata

| สนาม | คำอธิบาย |
|:------|:------------|
| `คำอธิบาย` | สรุปสั้นๆ จาก frontmatter |
| `เวอร์ชัน` | เวอร์ชันทักษะ เป็นอิสระจากเวอร์ชันแพ็คเกจ npm |
| `หมวดหมู่` | หมวดหมู่ Canonical (ทำให้เป็นมาตรฐาน) |
| `raw_category` | หมวดหมู่ดั้งเดิมจาก frontmatter |
| `อนุกรมวิธาน` | ข้อมูลเมตาอนุกรมวิธานแบบเต็มพร้อมทางเลือกสำรองที่อนุมาน |
| `แท็ก` | แท็กที่ค้นหาได้ |
| `ความซับซ้อน` | `ผู้เริ่มต้น` · `ระดับกลาง` · `ขั้นสูง` · `ผู้เชี่ยวชาญ` |
| `ความเสี่ยง` | `ปลอดภัย` · `ข้อควรระวัง` · `น่ารังเกียจ` · `วิพากษ์วิจารณ์` |
| `แหล่งที่มา` | `ทีม Omni` · `ชุมชน` · `อย่างเป็นทางการ` |
| `ผู้เขียน` | สตริงการแสดงที่มา |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| สนาม | คำอธิบาย |
|:------|:------------|
| `จุดเริ่มต้น` | เส้นทาง `SKILL.md` ที่เป็นที่ยอมรับ |
| `paths.root` | ไดเรกทอรีทักษะภายใน repo |
| `paths.manifest` | สร้างเส้นทางรายการใน `dist/` |### 🖥️ Compatibility

| สนาม | คำอธิบาย |
|:------|:------------|
| `เครื่องมือ` | ตัวระบุเครื่องมือจาก frontmatter |
| `install_targets` | ข้อมูลเมตาการติดตั้งต่อเครื่องมือ |

เป้าหมายการติดตั้งแต่ละรายการประกอบด้วย: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| สนาม | คำอธิบาย |
|:------|:------------|
| `sub_resources` | ส่วนย่อยของทักษะ (`ข้อมูลอ้างอิง`, `ตัวแทน`, `สินทรัพย์`) |
| `จำนวนสิ่งประดิษฐ์_นับ` | จำนวนไฟล์ทั้งหมดในแพ็คเกจทักษะ |
| `ข้อมูลอ้างอิง_จำนวน` | จำนวนเอกสารอ้างอิง |
| `ตัวแทน_จำนวน` | จำนวนการกำหนดค่าตัวแทน |
| `assets_count` | จำนวนไฟล์สินทรัพย์ |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| สนาม | คำอธิบาย |
|:------|:------------|
| `กลยุทธ์` | กลยุทธ์การติดตั้ง (เช่น `ไดเรกทอรีทักษะการคัดลอก`) |
| `current_installer` | พฤติกรรมการติดตั้งที่มนุษย์สามารถอ่านได้ |
| `สูตรอาหาร` | สูตรการติดตั้งต่อลูกค้า |### 📊 Classification

| มาตรา | สาขา |
|:--------|:-------|
| 🎯 `ครบกำหนด` | `ระดับทักษะ`, `ระดับทักษะ_ฉลาก` |
| 📋 `best_practices` | `คะแนน` (0-100) |
| ⭐ `คุณภาพ` | `คะแนน` (0-100) |
| 🛡️ `ความปลอดภัย` | `คะแนน`, `สถานะ` |
| ✅ `การตรวจสอบความถูกต้อง` | `สถานะ` |### 📝 Content

สัญญาณที่ได้รับ: `body_length`, `content_length`, `body_lines`, `word_count` รวมถึงแฟล็กโครงสร้างสำหรับตัวอย่าง ส่วนการแก้ปัญหา ฯลฯ### 📁 Artifacts

อาร์เรย์ของทุกไฟล์ที่จัดส่งภายในไดเร็กทอรีทักษะ:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**ประเภทสิ่งประดิษฐ์**: `จุดเริ่มต้น` · `ข้อมูลอ้างอิง` · `ตัวแทน` · `สินทรัพย์` · `ใบอนุญาต` · `การสนับสนุน`### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| สนาม | คำอธิบาย |
|:------|:------------|
| `จุดเข้า_sha256` | แฮชของ SKILL.md |
| `package_sha256` | สรุปแบบกำหนดจากรายการสิ่งประดิษฐ์ที่ได้รับคำสั่ง |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 เวอร์ชันแพ็คเกจพื้นที่เก็บข้อมูลและเวอร์ชันทักษะมีข้อกังวลที่แตกต่างกัน ปัจจุบันแพ็คเกจเป็น `0.1.3` ในขณะที่ทักษะส่วนบุคคลมีเวอร์ชันความหมายของตัวเอง---

## ⚠️ Compatibility Notes

| กฎ | เหตุผล |
|:-----|:----------|
| ✅ ต้องคงสืบทอดมาจาก repo | ไม่จำเป็นต้องมีการเขียนรายการด้วยตนเอง |
| ✅ สามารถเพิ่มช่องตัวเลือกใหม่ได้ | ส่งต่อความเข้ากันได้ |
| ⚠️ ช่องที่มีอยู่จะต้องคงที่ | ความเข้ากันได้แบบย้อนหลัง |
| 🚫 ไม่มีรายการแสดงที่เขียนด้วยลายมือ | การสร้างเวลาเป็นแหล่งที่มาของความจริง |