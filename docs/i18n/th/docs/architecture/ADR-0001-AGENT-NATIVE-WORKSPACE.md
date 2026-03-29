# 📐 ADR-0001: Agent-Native Workspace Foundation (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**การตัดสินใจทางสถาปัตยกรรมที่สำคัญซึ่งกำหนดรูปแบบโครงสร้างพื้นที่ทำงาน monorepo**---

## 📊 Status

✅**ยอมรับแล้ว**— ทิศทางพื้นที่ทำงานปัจจุบันและรูปร่างของพื้นที่เก็บข้อมูลที่ใช้งานอยู่---

## 🔍 Context

Omni Skills เริ่มต้นจากพื้นที่เก็บข้อมูล**ผู้ติดตั้งต้องมาก่อน**นั่นก็เพียงพอแล้วสำหรับการเผยแพร่เนื้อหา `SKILL.md` แต่ไม่เพียงพอที่จะเปิดเผยแค็ตตาล็อกแก่ตัวแทนผ่านแพลตฟอร์มแบบเนทิฟโปรโตคอล

เราต้องการรากฐานที่สามารถรองรับ:

| ข้อกำหนด | โปรโตคอล |
|:------------|:---------|
| 🌐 API แค็ตตาล็อก HTTP แบบอ่านอย่างเดียว | ส่วนที่เหลือ |
| 🔌 เซิร์ฟเวอร์ MCP แบบอ่านอย่างเดียว | โปรโตคอลบริบทของโมเดล |
| 🤖 พื้นผิว A2A ที่หันหน้าเข้าหาตัวแทน | ตัวแทนต่อตัวแทน |
| 📂 รถเทียมข้างรถจักรยานยนต์ติดตั้งในพื้นที่ | เครื่องมือระบบไฟล์ |

**ข้อจำกัดที่สำคัญ**: หลีกเลี่ยงการแยกวิเคราะห์ไฟล์ repo อย่างเป็นอิสระในบริการใหม่แต่ละรายการ---

## ✅ Decision

นำ**monorepo ที่มุ่งเน้นพื้นที่ทำงาน**มาใช้ด้วยแกนแค็ตตาล็อกที่ใช้ร่วมกันและแพ็คเกจเฉพาะโปรโตคอล:

| แพ็คเกจ | วัตถุประสงค์ |
|:--------|:--------|
| 📦 `ทักษะ omni` (รูท) | ตัวติดตั้ง CLI และสคริปต์ repo |
| 🧠 `@omni-skills/catalog-core` | การโหลดร่วมกัน ค้นหา การเปรียบเทียบ รวมกลุ่ม ติดตั้งแผน |
| 🌐 `@omni-skills/server-api` | REST API แบบอ่านอย่างเดียว |
| 🔌 `@omni-skills/server-mcp` | MCP พร้อม stdio/stream/sse + โหมดไซด์คาร์ในเครื่อง |
| 🤖 `@omni-skills/server-a2a` | รันไทม์งาน A2A พร้อม Agent Card, การโพล, SSE และ push config |### 📁 Shared Data Sources

แกนแค็ตตาล็อกอ่านอาร์ติแฟกต์ที่สร้างขึ้นจาก:
- `dist/catalog.json`
- `dist/manifests/<ทักษะ>.json`
- `ทักษะ_ดัชนี.json`---

## ✅ Positive Consequences

| ผลลัพธ์ | ผลกระทบ |
|:--------|:-------|
| 🔗**สัญญาข้อมูลที่ใช้ร่วมกัน**| API, MCP และ A2A ใช้อาร์ติแฟกต์เดียวกัน |
| 🖥️**Unified CLI**| ไบนารีหนึ่งรายการเปิดเผยการติดตั้ง, เชลล์ UI, API, MCP, A2A, การวินิจฉัย และควัน |
| 🧩**การแยกโปรโตคอล**| พื้นผิวใหม่ทำซ้ำโดยไม่ต้องเชื่อมต่อกับภายในตัวติดตั้ง |
| 🔌**รถเทียมข้างถิ่น**| การทำงานโหมด MCP ที่สามารถเขียนได้เบื้องหลังรายการที่อนุญาต พร้อมด้วยสูตรอาหารที่ไคลเอ็นต์ทราบ |
| 📦**รันไทม์แพ็คเกจเดียว**| แพ็คเกจ npm ที่เผยแพร่ประกอบด้วยพื้นผิวโปรโตคอล เครื่องมือตรวจสอบ และส่วนที่สร้างขึ้นร่วมกัน---

## ⚠️ Negative Consequences

| การแลกเปลี่ยน | การบรรเทาผลกระทบ |
|:---------|:-----------|
| 🔄**การทำสำเนาข้อมูลเมตา**| Python build + รันไทม์ JavaScript → รวม |
| 🏗️**ความซับซ้อน A2A**| ขณะนี้มีวงจรการใช้งานที่คงทนแล้ว แต่อะแดปเตอร์ประสานงานเพิ่มความลึกในการปฏิบัติงาน |
| 📦**การจัดวางแคตตาล็อก**| การติดตั้งแบบเลือกต้องใช้คำสั่ง รายการ และเอกสารเพื่อให้ข้อมูลตรงกัน |
| 📋**ช่องว่างเมตาดาต้ามัดรวม**| บันเดิลสามารถแซงหน้าทักษะที่เผยแพร่ โดยต้องมีคำเตือนสมาชิกที่ขาดหายไปอย่างชัดแจ้ง |---

## ➡️ Follow-Up Items

| # | การกระทำ | สถานะ |
|:--|:-------|:-------|
| 1️⃣ | การรับรองความถูกต้อง MCP ระยะไกลและการจำกัดอัตรา ✅ เรียบร้อย |
| 2️⃣ | ปรับปรุงการเขียนการกำหนดค่า MCP เฉพาะไคลเอนต์ | ✅ นำเสนอวันนี้สำหรับ Claude, Cursor, Codex, Gemini, Kiro, VS Code และ Dev Containers |
| 3️⃣ | อาร์ติแฟกต์การเผยแพร่ที่ลงนามหรือเอกสารสำคัญต่อทักษะ ✅ นำเสนอวันนี้ด้วยการบังคับใช้ CI บนแท็กปล่อย |
| 4️⃣ | รันไทม์ของงาน A2A → การประสานที่คงทน | ✅ นำเสนอวันนี้ด้วยความคงอยู่ของ JSON/SQLite ผู้ดำเนินการภายนอก การประสานงานการเช่าแบบเลือกใช้ และการประสานงาน Redis ขั้นสูงที่เป็นตัวเลือก |
| 5️⃣ | ขยายแคตตาล็อกที่เผยแพร่เพื่อให้ครอบคลุมกลุ่มที่กว้างขึ้น | ✅ นำเสนอวันนี้สำหรับชุดเริ่มต้นเจ็ดชุดในปัจจุบัน |