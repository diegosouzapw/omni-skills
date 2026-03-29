# 🔧 System Runbook (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**คู่มือการใช้งานฉบับสมบูรณ์สำหรับการสร้าง การตรวจสอบ การให้บริการ การรักษาความปลอดภัย และการแก้ไขปัญหาทักษะ Omni**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| คำสั่ง | มันทำอะไร |
|:--------|:-------------|
| `ตรวจสอบการทำงาน npm` | ตรวจสอบ `SKILL.md`, สร้าง `metadata.json` ใหม่, คำนวณอนุกรมวิธาน/วุฒิภาวะ/คุณภาพ/ความปลอดภัย |
| `อนุกรมวิธานการรัน npm: รายงาน` | แสดงคำแนะนำการเลื่อนหมวดหมู่โดยไม่ต้องเขียนไฟล์ใหม่ |
| `npm run ตรวจสอบ: สแกนเนอร์` | ยืนยันความครอบคลุมของสแกนเนอร์ที่บันทึกไว้ในข้อมูลเมตาของทักษะที่สร้างขึ้น |
| `npm run release:notes` | สร้างบันทึกประจำรุ่นที่กำหนดเองจากข้อมูลเมตา บันเดิล และประวัติคอมไพล์ |
| `npm รัน build` | สร้างแค็ตตาล็อก/รายการ/ไฟล์เก็บถาวร/เช็คซัมใหม่ ตรวจสอบความครอบคลุมและไฟล์เก็บถาวรของสแกนเนอร์ สร้าง `docs/CATALOG.md` ใหม่ |
| `การทดสอบ npm` | ชุดควันเต็มรูปแบบใน CLI, API, MCP, รถเทียมข้างรถจักรยานยนต์ และโฟลว์การเก็บถาวร |---

## 🖥️ Visual Shell

CLI ที่เผยแพร่ในขณะนี้มีเชลล์ตัวดำเนินการที่ใช้หมึก:```bash
npx omni-skills ui
```

ความสามารถปัจจุบัน:

- การติดตั้งที่แนะนำสำหรับไคลเอนต์ที่รู้จักและเส้นทางที่กำหนดเอง
- ขั้นตอนการค้นหาแล้วติดตั้ง
- วิซาร์ดการเปิดตัว MCP
- วิซาร์ดการเปิดตัว API
- วิซาร์ดการเปิดตัว A2A
- การติดตั้งล่าสุดและการเปิดตัวบริการใหม่
- ชื่อการติดตั้งและบริการที่ตั้งไว้ล่วงหน้า

เส้นทางของรัฐท้องถิ่น:```text
~/.omni-skills/state/ui-state.json
```

ทางเลือก:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

เครื่องสแกนคงที่จะตรวจสอบทักษะทั้งหมดโดยอัตโนมัติ:

| ครอบครัวกฎ | ตัวอย่าง |
|:------------|:---------|
| 🎭 ฉีดทันใจ | รูปแบบการกรอง คำสั่งแทนที่ |
| 💣 คำสั่งทำลายล้าง | `rm -rf`, `รูปแบบ`, `mkfs` |
| 🔑 เส้นทางที่น่าสงสัย | `/etc/shadow`, `~/.ssh`, ไฟล์ข้อมูลประจำตัว |
| ⚠️ ดั้งเดิมที่มีความเสี่ยง | `shell=True`, `pickle.load`, `eval`, `แยกทั้งหมด` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> ต้องใช้ `clamscan` ใน `PATH`### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> ค้นหาแฮชเท่านั้น — ไฟล์ที่ไม่รู้จัก**ไม่ได้อัปโหลด**ตามค่าเริ่มต้น### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

ประตูปล่อยที่เข้มงวด:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

ไฟล์เก็บถาวรถูกสร้างขึ้นโดยอัตโนมัติโดย `npm run build`:

| เอาท์พุท | เส้นทาง |
|:-------|:-----|
| 📦 รหัสไปรษณีย์ | `dist/archives/<ทักษะ>.zip` |
| 📦 ทาร์บอล | `dist/archives/<ทักษะ>.tar.gz` |
| 🔒 เช็คซัม | `dist/archives/<ทักษะ>.checksums.txt` |

`dist/` มีความมุ่งมั่นในพื้นที่เก็บข้อมูลนี้ แค็ตตาล็อก ไฟล์ Manifest บันเดิล และไฟล์เก็บถาวรที่สร้างขึ้นเป็นอินพุตรันไทม์สำหรับขั้นตอนการติดตั้ง CLI, พื้นผิวการดาวน์โหลด API, การแสดงตัวอย่าง MCP, การส่งมอบงาน A2A, การทดสอบควัน และการตรวจสอบความถูกต้อง### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

การแทนที่คีย์สาธารณะเพิ่มเติม:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> หากไม่มีการระบุคีย์สาธารณะ บิลด์จะได้รับรหัสหนึ่งผ่าน `openssl` เป็น `dist/signing/`### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

นโยบายเวอร์ชัน:

- แพทช์เพิ่มขึ้นจนถึง `.10`
- หลังจาก `.10` รุ่นถัดไปจะม้วนตัวเล็กน้อยและรีเซ็ตแพตช์เป็น `.0`

ตัวอย่าง:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| สถานการณ์ | คำสั่ง |
|:---------|:--------|
| 📥 การติดตั้งเริ่มต้น (ต้านแรงโน้มถ่วง) | `npx ทักษะรอบด้าน` |
| 🎯 ทักษะเฉพาะ + ลูกค้า | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 การค้นพบ → ติดตั้ง | `npx omni-skills ค้นหา figma --tool cursor --install --yes` |
| 📦 ติดตั้งมัดรวม | `npx omni-skills --cursor --bundle Essentials` |
| 🩺 ตรวจสอบการติดตั้ง | `npx แพทย์ทักษะรอบด้าน` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| ตัวกรอง | ตั้งค่าสถานะ | ตัวอย่าง |
|:-------|:-----|:--------|
| 📂 หมวดหมู่ | `--หมวดหมู่` | `--การพัฒนาหมวดหมู่` |
| 🖥️ เครื่องมือ | `--เครื่องมือ` | `--เคอร์เซอร์เครื่องมือ` |
| ⚠️ ความเสี่ยง | `--ความเสี่ยง` | `--ความเสี่ยงที่ปลอดภัย` |
| 📊 เรียงลำดับ | `--เรียงลำดับ` | `--เรียงลำดับคุณภาพ\|แนวทางปฏิบัติที่ดีที่สุด\|ระดับ\|ความปลอดภัย\|ชื่อ` |
| 🔄 สั่งซื้อ | `--สั่งซื้อ` | `--สั่งซื้อ asc\|desc` |
| ⭐ คุณภาพขั้นต่ำ | `--คุณภาพขั้นต่ำ` | `--คุณภาพขั้นต่ำ 80` |
| 📋 ความดันโลหิตขั้นต่ำ | `--แนวทางปฏิบัติที่ดีที่สุดขั้นต่ำ` | `--แนวทางปฏิบัติที่ดีที่สุดขั้นต่ำ 60` |
| 🎯 ระดับขั้นต่ำ | `--ระดับนาที` | `--ระดับต่ำสุด 2` |
| 🛡️ ความปลอดภัยขั้นต่ำ | `--นาทีความปลอดภัย` | `--ความปลอดภัยขั้นต่ำ 90` |
| ✅ การตรวจสอบความถูกต้อง | `--สถานะการตรวจสอบความถูกต้อง` | `--สถานะการตรวจสอบผ่านแล้ว` |
| 🛡️ ความปลอดภัย | `--สถานะความปลอดภัย` | `--สถานะความปลอดภัยผ่านแล้ว` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| วิธีการ | จุดสิ้นสุด | วัตถุประสงค์ |
|:-------|:---------|:--------|
| `รับ` | `/healthz` | ตรวจสุขภาพ |
| `รับ` | `/openapi.json` | ข้อมูลจำเพาะ OpenAPI 3.1 |
| `รับ` | `/v1/ทักษะ` | รายการพร้อมตัวกรอง |
| `รับ` | `/v1/ค้นหา` | ค้นหาข้อความแบบเต็ม |
| `รับ` | `/v1/skills/:id/archives` | รายการเอกสารเก่า |
| `รับ` | `/v1/skills/:id/download/archive?format=zip` | ดาวน์โหลดไฟล์เก็บถาวร |
| `รับ` | `/v1/skills/:id/download/archive/checksums` | รายการตรวจสอบผลรวม |### 🔐 Hosted API Hardening

| คุณสมบัติ | คำสั่ง |
|:--------|:--------|
| 🔑 ผู้ถือสิทธิ์ | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ การตรวจสอบสิทธิ์คีย์ API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-ทักษะ api` |
| 🛂 การตรวจสอบรันไทม์ของผู้ดูแลระบบ | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 การจำกัดอัตรา | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx API ทักษะรอบด้าน' |
| แปลก การบันทึกการตรวจสอบ | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx API ทักษะรอบด้าน` |
| 🌍 รายการที่อนุญาตของ CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com
| 🧱 รายการ IP ที่อนุญาต | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx api ทักษะรอบด้าน' |
| 🚧 โหมดการบำรุงรักษา | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx API ทักษะ Omni` |
| 🔁 พร็อกซีที่เชื่อถือได้ | `OMNI_SKILLS_HTTP_TRUST_PROXY=ลูปแบ็ค npx omni-ทักษะ API` |

> 🟢 `/healthz` ยังคงเปิดอยู่ตามการออกแบบ เส้นทางแค็ตตาล็อกต้องมีการตรวจสอบสิทธิ์เมื่อเปิดใช้งาน `GET /admin/runtime` ต้องใช้โทเค็นผู้ดูแลระบบเมื่อกำหนดค่าและส่งคืนสแนปชอตการกำกับดูแลแบบเรียลไทม์---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

รถเทียมข้างรถจักรยานยนต์สามารถดูตัวอย่างหรือเขียนการกำหนดค่า MCP สำหรับ:

- ผู้ใช้ Claude และการตั้งค่าโครงการ
- การกำหนดค่าเดสก์ท็อปของ Claude
- การกำหนดค่าผู้ใช้ไคลน์
- ผู้ใช้ GitHub Copilot CLI และการกำหนดค่าพื้นที่เก็บข้อมูล
- ผู้ใช้เคอร์เซอร์และการกำหนดค่าพื้นที่ทำงาน
- การกำหนดค่า Codex TOML
- ผู้ใช้ราศีเมถุนและการตั้งค่าโครงการ
- ผู้ใช้ Kilo CLI และการกำหนดค่าโครงการ
- การกำหนดค่าพื้นที่ทำงาน Kilo
- ผู้ใช้ Kiro และการตั้งค่าโครงการ
- ผู้ใช้ OpenCode และการกำหนดค่าพื้นที่ทำงาน
- กำหนดค่า YAML ของพื้นที่ทำงานต่อไป
- การกำหนดค่าผู้ใช้ Windsurf
- กำหนดค่าพื้นที่ทำงาน Zed
- พื้นที่ทำงาน `.mcp.json`
- พื้นที่ทำงาน VS Code และการกำหนดค่าผู้ใช้
- การกำหนดค่าคอนเทนเนอร์ Dev

`configure_client_mcp` ยังส่งคืน `recipes' ต่อลูกค้าด้วย ดังนั้นผู้ปฏิบัติงานจะได้รับ CLI ที่เทียบเท่าหรือขั้นตอนการตั้งค่าด้วยตนเองพร้อมกับการแสดงตัวอย่าง### 🧾 MCP Config Preview and Write Flow

ใช้ CLI แบบรวมเมื่อคุณต้องการสร้างการกำหนดค่าโดยไม่ต้องเรียกใช้เครื่องมือ MCP โดยตรง:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

วิชวลเชลล์เปิดเผยเวิร์กโฟลว์เดียวกันผ่าน:

- `npx ทักษะรอบด้าน ui`
- `บริการ`
- `กำหนดค่าไคลเอนต์ MCP`

คำสั่งจะยังคงอยู่ในโหมดแสดงตัวอย่าง เว้นแต่จะส่งผ่าน `--write`### 🔐 Hosted MCP Hardening

env vars เดียวกันกับ API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**เส้นทางที่ได้รับการป้องกัน**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` ยังคงเปิดอยู่---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

เส้นทางท้องถิ่นเริ่มต้นจะคงความเรียบง่ายไว้ก่อน:

- การคงอยู่ของ `json` หรือ `sqlite` สามารถทำงานได้โดยปิดใช้งานการสำรวจคิว
- ตั้งค่า `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` เฉพาะเมื่อคุณต้องการการอ้างสิทธิ์ของผู้ปฏิบัติงานหลายคนและการเช่าล้มเหลว
- ให้การประสานงาน Redis เป็นตัวเลือกการโฮสต์ขั้นสูง ไม่ใช่พื้นฐาน### 🧱 Multi-Worker Lease Setup

รันโหนด A2A มากกว่าหนึ่งโหนดกับที่จัดเก็บ SQLite เดียวกันเพื่อรับการเฟลโอเวอร์ตามการเช่า:```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

หากคนงานเสียชีวิตในขณะที่งาน "กำลังทำงาน" อยู่ คนงานอีกคนสามารถเรียกคืนงานนั้นได้หลังจากที่สัญญาเช่าหมดอายุและดำเนินการต่อไป### 🟥 Redis Coordination

สำหรับการปรับใช้แบบโฮสต์หรือหลายโหนดที่ไม่ต้องการการประสานงานคิวที่เชื่อมโยงกับที่เก็บ SQLite ที่ใช้ร่วมกัน ให้สลับผู้ประสานงานเป็น Redis:```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

ในโหมดนี้:

- ความคงอยู่ยังคงอยู่ใน JSON หรือ SQLite
- การอ้างสิทธิ์งานและการย้ายกรรมสิทธิ์การเช่าไปที่ Redis
- โหนด A2A หลายโหนดสามารถแชร์คิวได้โดยไม่ต้องอาศัยการประสานงานระดับแถวของ SQLite### 📡 Endpoints

| วิธีการ | เส้นทาง | วัตถุประสงค์ |
|:-------|:-----|:--------|
| `รับ` | `/healthz` | ตรวจสุขภาพ |
| `รับ` | `/.well-known/agent.json` | บัตรตัวแทน (การค้นพบ A2A) |
| `โพสต์` | `/a2a` | ตำแหน่งข้อมูล JSON-RPC สำหรับงานและการสตรีม |### 🧭 Supported JSON-RPC Methods

| วิธีการ | วัตถุประสงค์ |
|:-------|:--------|
| `ข้อความ/ส่ง` | เริ่มหรือทำงานต่อ |
| `ข้อความ/สตรีม` | เริ่มงานและสตรีมการอัปเดต SSE |
| `งาน/รับ` | สำรวจภาพรวมงาน |
| `งาน/ยกเลิก` | ยกเลิกงานที่ใช้งานอยู่ |
| `งาน/สมัครใหม่` | ดำเนินการอัปเดต SSE ต่อสำหรับงานที่มีอยู่ |
| `งาน/pushNotificationConfig/ชุด` | ลงทะเบียน push webhook |
| `งาน/pushNotificationConfig/get` | อ่าน push config |
| `งาน/pushNotificationConfig/รายการ` | แสดงรายการการกำหนดค่าพุชสำหรับงาน |
| `งาน/pushNotificationConfig/ลบ` | ลบ push config |### 📡 Task Lifecycle

รันไทม์ปัจจุบันรองรับสถานะงานเหล่านี้:

- `ส่งแล้ว`
- `ทำงาน`
- `จำเป็นต้องป้อนข้อมูล`
- 'เสร็จสิ้น'
- `ยกเลิกแล้ว'
- `ล้มเหลว`

งานจะยังคงอยู่ในไฟล์ JSON หรือที่จัดเก็บ SQLite และโหลดซ้ำเมื่อรีสตาร์ท งานที่เสร็จสมบูรณ์และถูกขัดจังหวะยังคงใช้งานได้ งานที่ยังคง 'ส่ง' หรือ 'ทำงาน' ระหว่างการปิดระบบจะได้รับการกู้คืนด้วยข้อมูลเมตาการรีสตาร์ทที่ชัดเจน และจะกลับมาทำงานต่อโดยอัตโนมัติตามค่าเริ่มต้น### 🧪 Example: Start a Task

```bash
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

ขณะนี้ที่เก็บมีเวิร์กโฟลว์สองรายการ:

| ขั้นตอนการทำงาน | ทริกเกอร์ | วัตถุประสงค์ |
|:---------|:--------|:--------|
| `validate.yml` | กด/PR ไปที่ `main` | สร้าง ทดสอบ และยืนยันว่ามีการคอมมิตอาร์ติแฟกต์ที่สร้างขึ้น |
| `release.yml` | แท็ก push `v*` หรือการจัดส่งด้วยตนเอง | เรียกใช้เครื่องสแกนระดับรีลีส ตรวจสอบแท็กเวอร์ชัน เซ็นชื่ออาร์ติแฟกต์ จัดแพ็คเกจ tarball เผยแพร่ไปที่ npm และสร้าง GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| ความลับ | ใช้โดย | วัตถุประสงค์ |
|:-------|:--------|:--------|
| `VT_API_KEY` หรือ `VIRUSTOTAL` | `release.yml` | ต้องมีการค้นหาแฮชของ VirusTotal ใน release builds |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` หรือ `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | รหัสส่วนตัวที่จำเป็นสำหรับการลงนามไฟล์เก็บถาวรเดี่ยวใน CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` หรือ `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | การแทนที่คีย์สาธารณะเพิ่มเติม มิฉะนั้นได้มาจากคีย์ส่วนตัว |
| `NPM_TOKEN` | งาน `เผยแพร่-npm` | ตรวจสอบสิทธิ์ `npm publish` สำหรับการเปิดตัวแท็ก |### 🦠 Release Scanner Policy

`release.yml` ตั้งค่าหรือเตรียมการ:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ ความลับVT_API_KEY || Secrets.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` จากที่เก็บข้อมูลชั่วคราวของนักวิ่ง

นั่นหมายความว่าทุกการเปิดตัวตามแท็กจะต้อง:

- ติดตั้งและรีเฟรช ClamAV บนนักวิ่ง
- สร้างข้อมูลเมตาใหม่โดยเปิดใช้งาน ClamAV
- สร้างข้อมูลเมตาใหม่โดยเปิดใช้งาน VirusTotal
- ถอดรหัสเนื้อหาสำคัญในการลงนาม CI ลงในพื้นที่จัดเก็บ runner temp
- ผ่าน `npm run ตรวจสอบ: สแกนเนอร์: เข้มงวด`
- ผ่าน `npm run ตรวจสอบ: archives:strict`
- ผ่านการทดสอบและการตรวจสอบแพ็คเกจก่อนเผยแพร่เวลา 12.00 น
- สร้างบันทึกประจำรุ่นที่กำหนดเองจากข้อมูลเมตาของแค็ตตาล็อกและประวัติคอมไพล์
- สร้าง GitHub Release พร้อมเนื้อหาการเผยแพร่ที่แนบมาหลังจากเผยแพร่---

## 1️⃣1️⃣ Environment Variables Reference

| ตัวแปร | วัตถุประสงค์ | ค่าเริ่มต้น |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | แทนที่เส้นทางรูทของแค็ตตาล็อก | ตรวจพบอัตโนมัติ |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | เส้นทางการเขียนที่อนุญาตเพิ่มเติม | รากของลูกค้าที่รู้จัก |
| `OMNI_SKILLS_MCP_MODE` | ตั้งค่าเป็น 'ท้องถิ่น' สำหรับรถเทียมข้างรถจักรยานยนต์ | รีโมท |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | การตั้งค่าสถานะ Alt สำหรับโหมดท้องถิ่น | `0` |
| `OMNI_SKILLS_API_BASE_URL` | URL API สาธารณะสำหรับ MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | URL ฐานสาธารณะ | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | โทเค็นการรับรองความถูกต้องของผู้ถือ | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | คีย์ API ที่คั่นด้วยเครื่องหมายจุลภาค | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | โทเค็นการตรวจสอบสิทธิ์รันไทม์ของผู้ดูแลระบบ | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | คำขอสูงสุดต่อหน้าต่าง | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | กรอบเวลาจำกัดอัตรา (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | เปิดใช้งานการบันทึกการตรวจสอบ | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | เอาต์พุตการตรวจสอบ `json` หรือ `text` | `เจสัน` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | เส้นทางไฟล์บันทึกการตรวจสอบเพิ่มเติม | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | รายการที่อนุญาตของต้นทาง CORS ที่คั่นด้วยเครื่องหมายจุลภาค | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | IP ที่คั่นด้วยเครื่องหมายจุลภาคหรือรายการที่อนุญาต CIDR | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | แสดงการตั้งค่าพร็อกซีความน่าเชื่อถือ | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | เปิดใช้งานการตอบกลับการบำรุงรักษา | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | การบำรุงรักษา `ลองอีกครั้งหลังจาก` วินาที | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | การจำลองความล่าช้าของงานอะซิงโครนัส | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | ที่เก็บงาน `json`, `sqlite` หรือ `หน่วยความจำ` | `เจสัน` |
| `OMNI_SKILLS_A2A_STORE_PATH` | ไฟล์ที่เก็บงาน A2A แบบกำหนดเอง | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | เปิดใช้งานการสำรวจคิวที่ใช้ร่วมกันสำหรับผู้ปฏิบัติงานที่ทราบสัญญาเช่า | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | ผู้ประสานงาน `store`, `sqlite`, `local` หรือ `redis` | `ร้านค้า` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL สำหรับการประสานงานภายนอก | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | คำนำหน้าคีย์ Redis สำหรับข้อมูลเมตาของคิว | `ทักษะรอบด้าน:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | ช่วงเวลาการโพลคิวสำหรับพนักงานเช่า | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | ระยะเวลาการเช่าก่อนที่คนงานคนอื่นจะเรียกคืนงาน | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | ตัวระบุผู้ปฏิบัติงานที่มีเสถียรภาพสำหรับการเป็นเจ้าของสัญญาเช่าและการวินิจฉัย | ชื่อโฮสต์ + PID + ส่วนต่อท้ายแบบสุ่ม |
| `OMNI_SKILLS_A2A_EXECUTOR` | ผู้ดำเนินการงาน 'อินไลน์' หรือ 'ประมวลผล' | `อินไลน์` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | แทนที่คำสั่งของผู้ปฏิบัติงานภายนอก | โหนดไบนารี |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | อาร์เรย์ JSON ของผู้ปฏิบัติงานภายนอก args | `["แพ็คเกจ/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | กู้คืนงานที่ส่ง / ทำงานต่อในการบูต | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | อนุญาต webhook ที่ไม่ใช่ HTTPS นอก localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | เปิดใช้งานการสแกน ClamAV | `0` |
| `VT_API_KEY` | คีย์ VirusTotal API | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | รหัสส่วนตัวสำหรับการลงนาม | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | การแทนที่คีย์สาธารณะ | ได้มาโดยอัตโนมัติ |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. สร้างใหม่ด้วย `npm run build`
2. รัน `npm run ตรวจสอบ: archives` อีกครั้ง
3. หากเปิดใช้งานการลงนาม ให้ยืนยันคีย์สาธารณะและความพร้อมใช้งาน `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- ยืนยันว่ามี `VT_API_KEY` อยู่ในความลับของพื้นที่เก็บข้อมูล
- ยืนยันว่า `freshclam` ประสบความสำเร็จในการวิ่ง
- สร้างใหม่ภายในเครื่องด้วย `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- รัน `npm run ตรวจสอบ: สแกนเนอร์: เข้มงวด` อีกครั้ง### 📦 npm Publish Fails in CI

- ยืนยันว่ามี `NPM_TOKEN` อยู่ในความลับของพื้นที่เก็บข้อมูล
- ยืนยันว่าแท็ก Git ตรงกับเวอร์ชัน `package.json` ทุกประการ
- ตรวจสอบว่า tarball ที่อัปโหลดโดย `release-verify` มีอยู่ในอาร์ติแฟกต์เวิร์กโฟลว์### ✍️ Release Signing Fails in CI

- ยืนยันว่า `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` หรือ `OMNI_SKILLS_SIGN_PRIVATE_KEY` มีอยู่ในความลับของพื้นที่เก็บข้อมูล
- หากคุณระบุรหัสลับสาธารณะ ให้ยืนยันว่าตรงกับรหัสส่วนตัว
- ยืนยันว่า `openssl` พร้อมใช้งานและคีย์ส่วนตัวอยู่ในรูปแบบ PEM
- สร้างใหม่ในเครื่องด้วย `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- รัน `npm run ตรวจสอบ: archives:strict` อีกครั้ง### 🔒 API/MCP Returns `401 Unauthorized`

- ตรวจสอบ `OMNI_SKILLS_HTTP_BEARER_TOKEN` หรือ `OMNI_SKILLS_HTTP_API_KEYS`
- รวมส่วนหัว `การอนุญาต: ผู้ถือ <token>` หรือ `x-api-key`### 🚦 API/MCP Returns `429 Too Many Requests`

- เพิ่ม `OMNI_SKILLS_RATE_LIMIT_MAX`
- ขยาย `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` ให้กว้างขึ้น
- ลดการรับส่งข้อมูลต่อเนื่องจากไคลเอนต์หรือโพรบ### 🛂 API/MCP Admin Runtime Returns `401`

- ตรวจสอบ `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- ส่ง `x-admin-token: <token>` หรือ `การอนุญาต: ผู้ถือ <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- ปิดการใช้งาน `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- ใช้ `/healthz` สำหรับการตรวจวัดความมีชีวิตชีวาระหว่างการบำรุงรักษา
- ใช้ `/admin/runtime` กับโทเค็นผู้ดูแลระบบสำหรับการวินิจฉัยผู้ปฏิบัติงาน### 🌍 Browser Requests Fail CORS Validation

- ตรวจสอบ `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- รวมสคีมและโฮสต์ที่แน่นอน เช่น `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- ตรวจสอบ `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- ตรวจสอบ `OMNI_SKILLS_A2A_REDIS_URL`
- ตรวจสอบการเชื่อมต่อ Redis จากทุกโหนด
- ตรวจสอบ `/healthz` เพื่อดูสแนปชอต `การประสานงาน`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
