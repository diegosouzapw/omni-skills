# 🧭 Omni Skills CLI User Guide (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**พื้นผิว CLI สาธารณะเต็มรูปแบบจัดส่งโดย `omni-skills`**

ใช้คู่มือนี้เมื่อคุณต้องการ:

| เป้าหมาย | พื้นที่บัญชาการ |
|:-----|:-------------|
| 📥 ติดตั้งทักษะหรือบันเดิล | [ขั้นตอนการติดตั้ง](#3️⃣-การติดตั้ง-โฟลว์) |
| 🔎 ค้นหาแคตตาล็อก | [การค้นพบแคตตาล็อก](#4️⃣-catalog-discovery) |
| 🔌 กำหนดค่าไคลเอนต์ MCP | [การกำหนดค่าไคลเอนต์ MCP](#5️⃣-mcp-client-config) |
| 🖥️ เริ่มบริการ MCP, API หรือ A2A | [เซิร์ฟเวอร์ MCP](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 ใช้วิชวลเทอร์มินัลเชลล์ | [วิชวลเชลล์](#9️⃣-วิชวลเชลล์) |
| 🧪 เรียกใช้การวินิจฉัยหรือ preflight | [การวินิจฉัย](#🔟-diagnostics-and-preflight) |---

## 1️⃣ Install and Entry Modes

ติดตั้งด้วย `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| บริบท | เกิดอะไรขึ้น |
|:--------|:------------|
| 🖥️ TTY + ไม่มีข้อโต้แย้ง | เปิดโฟลว์**การติดตั้งที่แนะนำ**|
| ⚙️ ไม่ใช่ TTY + ไม่มีข้อโต้แย้ง | การติดตั้งแบบไม่โต้ตอบกับ `~/.gemini/antigravity/skills` |
| 🎨 `npx ทักษะรอบด้าน ui` | ตรา**หมึกวิชวลเชลล์**|
| แปลก `npx ทักษะ omni ui --text` | Readline**ข้อความสำรอง**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| คำสั่ง | คำอธิบาย |
|:--------|:-----------|
| `อุย` | 🎨 ฮับเทอร์มินัลภาพ |
| `ค้นหา [คำค้นหา]` | 🔎 การค้นพบแคตตาล็อก |
| `จัดหมวดหมู่ใหม่` | 🏷️ การจัดการอนุกรมวิธาน |
| `ติดตั้ง [แฟล็ก]` | 📥 การติดตั้งทักษะ/บันเดิล |
| `config-mcp` | 🔌 การกำหนดค่าไคลเอนต์ MCP |
| `mcp <stdio\|สตรีม\|sse>` | 🔌 โหมดเซิร์ฟเวอร์ MCP |
| `เอพี` | 🌐 API แคตตาล็อก |
| `a2a` | 🤖 รันไทม์ A2A |
| `ควัน` | 🧪 ปล่อยพรีไฟลท์ |
| `เผยแพร่ตรวจสอบ` | 📦 ตรวจสอบการเผยแพร่แพ็กเกจ |
| `หมอ` | 🩺 การวินิจฉัยสภาพแวดล้อม |
| `ช่วยด้วย` | ❓ อ้างอิงคำสั่ง |---

## 3️⃣ Install Flows

### เริ่มต้นอย่างรวดเร็ว

```bash
npx omni-skills
npx omni-skills install --guided
```

> ขั้นตอนที่แนะนำให้คุณเลือก:**ลูกค้าเป้าหมาย**→**บันเดิลหรือทักษะ**→**เส้นทางที่กำหนดเอง**→**ดูตัวอย่างก่อนดำเนินการ**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| ตั้งค่าสถานะ | ลูกค้า |
|:-----|:-------|
| `--ต้านแรงโน้มถ่วง` | 🟣 ต้านแรงโน้มถ่วง *(ค่าเริ่มต้น)* |
| `--คล็อด` | 🟢 รหัสคลอด |
| `--เคอร์เซอร์` | 🔵 เคอร์เซอร์ |
| `--โคเด็กซ์` | 🔴 Codex CLI |
| `--ราศีเมถุน` | 🟡 ราศีเมถุน CLI |
| `--คิโระ` | 🟠 คิโระ |
| `--opencode` | ⚪ โอเพนโค้ด |

> เป้าหมายการติดตั้งเริ่มต้น (ไม่โต้ตอบ): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| ตั้งค่าสถานะ | วัตถุประสงค์ |
|:-----|:--------|
| `--หมวดหมู่` | กรองตามหมวดหมู่อนุกรมวิธาน |
| `--เครื่องมือ` | กรองตามเครื่องมือที่รองรับ |
| `--ความเสี่ยง` | กรองตามระดับความเสี่ยง |
| `--เรียงลำดับ` | จัดเรียงผลลัพธ์ (เช่น `คุณภาพ`) |
| `--สั่งซื้อ` | เรียงลำดับ |
| `--คุณภาพขั้นต่ำ` | คะแนนคุณภาพขั้นต่ำ |
| `--แนวทางปฏิบัติที่ดีที่สุดขั้นต่ำ` | คะแนนแนวทางปฏิบัติที่ดีที่สุดขั้นต่ำ |
| `--ระดับนาที` | ระดับวุฒิภาวะขั้นต่ำ |
| `--นาทีความปลอดภัย` | คะแนนความปลอดภัยขั้นต่ำ |
| `--สถานะการตรวจสอบความถูกต้อง` | กรองตามสถานะการตรวจสอบ |
| `--สถานะความปลอดภัย` | กรองตามสถานะความปลอดภัย |---

## 5️⃣ MCP Client Config

ใช้ `config-mcp` เพื่อดูตัวอย่างหรือเขียนการกำหนดค่า MCP ที่ทราบไคลเอ็นต์### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<รายละเอียด>
<summary>🔌 <strong>พื้นผิวไคลเอนต์ที่สามารถกำหนดค่าได้</strong></summary>

| ลูกค้า | เป้าหมาย |
|:-------|:--------|
| คลอดด์ | การตั้งค่าและเป้าหมายเดสก์ท็อป |
| เคอร์เซอร์ | ผู้ใช้และพื้นที่ทำงาน |
| โคเด็กซ์ | การกำหนดค่า TOML |
| ราศีเมถุน | ผู้ใช้และพื้นที่ทำงาน |
| ต้านแรงโน้มถ่วง | การกำหนดค่าผู้ใช้ |
| โอเพ่นโค้ด | ผู้ใช้และพื้นที่ทำงาน |
| ไคลน์ | เป้าหมายระดับเฟิร์สคลาส |
| GitHub Copilot CLI | ผู้ใช้และ repo |
| รหัสกิโล | ผู้ใช้ โปรเจ็กต์ และพื้นที่ทำงาน |
| คิโระ | ผู้ใช้และพื้นที่ทำงาน |
| เซด | พื้นที่ทำงาน |
| รหัส VS | ผู้ใช้ พื้นที่ทำงาน และ Dev Container |
| ดำเนินการต่อ | พื้นที่ทำงาน YAML |
| จูนี่ | โครงการและผู้ใช้ |
| วินด์เซิร์ฟ | การกำหนดค่าผู้ใช้ |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**อุปกรณ์เสริมในตัว**เพิ่ม: การตรวจหาไคลเอ็นต์ การแสดงตัวอย่างการติดตั้ง ติดตั้ง/ลบโฟลว์ และการเขียนการกำหนดค่า MCP---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| เส้นทาง | วัตถุประสงค์ |
|:------|:--------|
| `GET /healthz` | ตรวจสุขภาพ |
| `รับ /openapi.json` | ข้อมูลจำเพาะ OpenAPI |
| `GET /v1/ทักษะ` | รายการทักษะทั้งหมด |
| `GET /v1/ค้นหา` | ค้นหาแคตตาล็อก |
| `GET /v1/skills/:id/archives` | แสดงรายการเอกสารสำคัญสำหรับทักษะ |
| `GET /v1/skills/:id/download/archive?format=zip` | ดาวน์โหลดเอกสารทักษะ |
| `GET /v1/skills/:id/download/archive/checksums` | ดาวน์โหลดเช็คซัม |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| คุณสมบัติ | สถานะ |
|:--------|:-------|
| 🔎 การค้นพบที่คำนึงถึงงาน | ✅ |
| 📋 แฮนด์ออฟแผนการติดตั้ง | ✅ |
| 🔄 การเลือกตั้ง | ✅ |
| 📡 สตรีมมิ่ง | ✅ |
| ❌ การยกเลิก | ✅ |
| 🔔 การกำหนดค่าการแจ้งเตือนแบบพุช | ✅ |
| 💾 ความพากเพียร | หน่วยความจำ, JSON และ SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### คุณสมบัติ

| คุณสมบัติ | คำอธิบาย |
|:--------|:-----------|
| 🧭 แนะนำการติดตั้ง | เลือกไคลเอนต์หรือเส้นทางที่กำหนดเอง |
| 🔎 ค้นหา + ติดตั้ง | ไม่จำเป็นต้องท่องจำแฟล็ก |
| 🔌 การกำหนดค่า MCP | ดูตัวอย่างและเขียนโฟลว์ |
| 🖥️ เปิดตัวบริการ | การเริ่มต้นที่แนะนำ MCP, API และ A2A |
| 🕐 ล่าสุด | การติดตั้งล่าสุดและการเปิดตัวบริการใหม่ |
| ⭐ รายการโปรด | ทักษะและบันเดิลที่บันทึกไว้ |
| 💾 ค่าที่ตั้งล่วงหน้า | ชื่อการติดตั้งและบริการที่ตั้งไว้ล่วงหน้า |

>**เส้นทางสถานะ:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> ตรวจสอบ: สถานะ repo สถานะการติดตั้งในเครื่อง ความพร้อมใช้งานรันไทม์ และปัญหาสภาพแวดล้อม### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> ตรวจสอบ: การสร้าง การทดสอบ ผลลัพธ์ของแพ็คเกจ การบูตบริการ ความครอบคลุมของสแกนเนอร์ และการปล่อยบรรจุภัณฑ์---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 เพอร์โซน่า | คำสั่ง | วัตถุประสงค์ |
|:----------|:--------|:--------|
| 🆕 ผู้ใช้ใหม่ | `npx ทักษะรอบด้าน` | แนะนำการติดตั้งครั้งแรก |
| ???? โอเปอเรเตอร์ | `npx omni-ทักษะ config-mcp --list-targets` | กำหนดค่า MCP ในเครื่อง |
| ???? โอเปอเรเตอร์ | `npx omni-ทักษะ mcp สตรีม --local` | เริ่มรถเทียมข้างรถจักรยานยนต์ท้องถิ่น |
| 📦 ผู้ดูแล | `npx ทักษะรอบด้าน ควัน ` | ตรวจสอบการเผยแพร่ |
| 🔍 ผู้ใช้ระดับสูง | `ทักษะรอบด้านของ npx ค้นหาความปลอดภัย --เรียงลำดับคุณภาพ --คุณภาพขั้นต่ำ 95` | ค้นหาทักษะที่ดีที่สุดก่อน |---

## 📖 Related Documents

| หมอ | ครอบคลุมอะไรบ้าง |
|:----|:--------------|
| 🚀 [เริ่มต้นใช้งาน](./GETTING-STARTED.md) | ติดตั้งและตรวจสอบภายในไม่เกิน 2 นาที |
| 📗 [คู่มือการใช้งาน](./USAGE.md) | คำสั่ง รูปแบบ และโหมดของ CLI ทั้งหมด
| 📦 [บันเดิล](./BUNDLES.md) | คอลเลกชันทักษะที่คัดสรรแล้ว |
| ดำเนินการ [รันบุ๊คระบบ](../operations/RUNBOOK.md) | อ้างอิงการดำเนินงาน |
| 🔌 [รถเทียมข้างรถจักรยานยนต์ MCP ในพื้นที่](../specs/LOCAL-MCP-SIDECAR.md) | เครื่องมือระบบไฟล์และการเขียนการกำหนดค่า |