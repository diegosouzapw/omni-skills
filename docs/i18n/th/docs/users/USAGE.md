# 📗 Usage Guide (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**ทุกสิ่งที่คุณต้องการเพื่อเรียกใช้ทักษะ เรียกใช้บริการ และดำเนินการรันไทม์ทักษะ Omni**

สำหรับเวิร์กโฟลว์การปฏิบัติงานทั้งหมด โปรดดูที่ [Optim System Runbook](../operations/RUNBOOK.md)
สำหรับแผนผังคำสั่งสำหรับผู้ใช้ปลายทางแบบเต็ม โปรดดู [🧭 คู่มือผู้ใช้ CLI](./CLI-USER-GUIDE.md)---

## 📊 Current Catalog Reality

| สถานะ | รายละเอียด |
|:-------|:--------|
| ✅**วางจำหน่ายแล้ว**| 32 ทักษะที่ได้รับการเผยแพร่ในด้านการออกแบบ สถาปัตยกรรม การดีบัก เอกสาร OSS ความปลอดภัย DevOps วิศวกรรม AI ข้อมูล เครื่องมือ และเวิร์กโฟลว์การเรียนรู้ของเครื่อง |
| 📦**ชุดรวม**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` และ `oss-maintainer` ได้รับการสนับสนุนอย่างเต็มรูปแบบแล้ววันนี้ |
| 🔌**การเข้าถึง MCP**| ไคลเอนต์ที่สามารถติดตั้งได้ 7 ตัว, ไคลเอนต์ที่สามารถกำหนดค่าได้ 16 ตัว, เป้าหมายการกำหนดค่าระดับเฟิร์สคลาส 33 ตัว, โปรไฟล์การกำหนดค่า 19 ตัว |
| 🤖**ความทนทาน A2A**| หน่วยความจำ, JSON หรือความทนทานภายในเครื่อง SQLite, รีสตาร์ทเรซูเม่, ตัวดำเนินการกระบวนการเสริม และการเลือกรับการประสานงานแบบเช่าสำหรับผู้ปฏิบัติงานที่ใช้ร่วมกัน |---

## 🖥️ Invocation by Client

| ลูกค้า | วิธีการเรียกใช้ | เส้นทางทักษะ |
|:-------|:-------------|:------------|
| 🔵**รหัสโคลด**| `>> /ชื่อทักษะ ช่วยฉันด้วย...` | `~/.claude/ทักษะ/` |
| 🟡**ราศีเมถุน CLI**| `ใช้ @skill-name เพื่อ...` | `~/.gemini/ทักษะ/` |
| 🔴**Codex CLI**| `ใช้ @skill-name เพื่อ...` | `~/.codex/ทักษะ/` |
| 🟢**คิโระ**| ทักษะโหลดอัตโนมัติตามต้องการ | `~/.kiro/ทักษะ/` |
| 🟣**ต้านแรงโน้มถ่วง**| `ใช้ @skill-name เพื่อ...` | `~/.gemini/antigravity/skills/` |
| 🔵**เคอร์เซอร์**| `@ชื่อทักษะ` ในแชท | `~/.cursor/ทักษะ/` |
| ⚪**OpenCode**| `opencode run @skill-name` | `.opencode/ทักษะ/` |
| ⬛**นักบิน**| วางเนื้อหาทักษะด้วยตนเอง | ไม่มี |

ลูกค้าเช่น Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline และ Kilo Code ใช้โฟลว์ `config-mcp` เป็นหลัก แทนที่จะเป็นไดเร็กทอรีทักษะ---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 หมายเหตุ:**
> - ในเทอร์มินัลแบบโต้ตอบ ตอนนี้ `npx omni-skills` จะเปิดขั้นตอนการติดตั้งที่แนะนำ
> - `npx omni-skills ui` เปิด Visual Ink Shell พร้อมการติดตั้ง การค้นพบ และการดำเนินการเปิดบริการ
> - วิชวลเชลล์ยังคงมีการติดตั้งล่าสุด การเปิดตัวบริการล่าสุด รายการโปรด และการตั้งค่าล่วงหน้าที่มีชื่อใน `~/.omni-skills/state/ui-state.json`
> - ภายนอก TTY การติดตั้งแบบเต็มยังคงเป็นค่าเริ่มต้นเมื่อไม่ได้ระบุตัวเลือกไว้
> - `--skill` จะติดตั้งเฉพาะทักษะที่เผยแพร่ที่เลือกไว้เท่านั้น
> - `--bundle` จะขยายบันเดิลและติดตั้งสมาชิกที่เผยแพร่แล้วที่ประกาศไว้ในบันเดิลที่ดูแลจัดการ
> - `find` รองรับแฟล็กตัวกรอง 12+ รายการ: `คุณภาพ`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk` และอื่นๆ
> - `config-mcp` เป็นเส้นทางที่ถูกต้องสำหรับผลิตภัณฑ์ที่รองรับ MCP ซึ่งไม่มีไดเรกทอรีทักษะชั้นหนึ่ง---

## 🔌 Runtime Commands

CLI เป็นเครื่องมือการดำเนินงานแบบครบวงจร ไม่ใช่แค่ตัวติดตั้ง### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

วิชวลเชลล์รองรับ:

- แนะนำการติดตั้งด้วยไคลเอนต์ที่รู้จักหรือการเลือกเส้นทางที่กำหนดเอง
- ค้นหาแล้วติดตั้งโดยไม่ต้องจำแฟล็ก
- ดูตัวอย่างการกำหนดค่าไคลเอ็นต์ MCP ที่แนะนำและเขียนโฟลว์
- การเริ่มต้นที่แนะนำ MCP, API และ A2A
- การติดตั้งล่าสุดและการเปิดตัวบริการใหม่
- บันทึกการติดตั้งและบริการที่ตั้งไว้ล่วงหน้า
- ทักษะและชุดรวมที่ชื่นชอบ### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
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
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | เคล็ดลับ |
|:--|:----|
| 1️⃣ | อ้างอิงทักษะตามชื่อในพร้อมท์ของคุณ |
| 2️⃣ | ระบุอาร์ติแฟกต์ โค้ด หรือบริบทการออกแบบที่ตัวแทนต้องการ |
| 3️⃣ | ต้องการ `--ทักษะ` สำหรับการติดตั้งขั้นต่ำ |
| 4️⃣ | ใช้ `doctor` และ `smoke` ก่อนแก้ไขข้อบกพร่องเกี่ยวกับบรรจุภัณฑ์หรือรันไทม์ |
| 5️⃣ | ใช้บันเดิลเป็นการติดตั้งโดเมนที่ได้รับการดูแลจัดการในขณะนี้ โดยบันเดิลเริ่มต้นทั้งเจ็ดได้รับการสนับสนุนอย่างเต็มที่ |
| 6️⃣ | ใช้ `find --install --yes` เพื่อการค้นพบ + การติดตั้งในขั้นตอนเดียว |
| 7️⃣ | ดู [runbook](../operations/RUNBOOK.md) สำหรับการตรวจสอบสิทธิ์ การจำกัดอัตรา การลงนาม และการตรวจสอบสภาพแวดล้อม vars |