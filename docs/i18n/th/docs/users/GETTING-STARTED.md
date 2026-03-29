# 🚀 Getting Started (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**ติดตั้งทักษะ ตรวจสอบการตั้งค่า และเรียกใช้ทักษะ AI แรกของคุณในเวลาไม่ถึง 2 นาที**---

## 📊 Current Catalog Status

| เมตริก | ค่า |
|:-------|:-------|
| ทักษะที่เผยแพร่ |**32**ใน 15 หมวดหมู่ที่ใช้งานอยู่ รวมถึงสถาปัตยกรรม การออกแบบ ความปลอดภัย DevOps วิศวกรรม AI และอีกมากมาย |
| บันเดิลที่กำหนด |**7**(ทั้งหมดได้รับการสนับสนุนอย่างเต็มที่จากทักษะที่เผยแพร่) |
| ไคลเอนต์ที่สามารถติดตั้งได้ |**7**(โค้ด Claude, เคอร์เซอร์, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| ไคลเอนต์ที่สามารถกำหนดค่า MCP ได้ |**16**ในเป้าหมายการกำหนดค่า MCP ระดับเฟิร์สคลาส 33 รายการ |---

## 📦 Step 1 — Install

### เริ่มต้นอย่างรวดเร็ว

```bash
npx omni-skills
```

ในเทอร์มินัลแบบโต้ตอบ ตอนนี้จะเปิดตัวติดตั้งที่แนะนำ แทนที่จะถือว่าไคลเอ็นต์เงียบๆ### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

ซึ่งจะเปิดเทอร์มินัลฮับที่มีแบรนด์สำหรับการติดตั้ง การค้นหา MCP, API และการเริ่มต้น A2A### 🎯 Default Install (Antigravity Outside TTY)

ภายนอก TTY ตัวติดตั้ง no-arg ยังคงมีค่าเริ่มต้นเป็น `~/.gemini/antigravity/skills`### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ ตอนนี้ชุดเริ่มต้นได้รับการสำรองข้อมูลอย่างสมบูรณ์แล้ว รวมถึง `devops` และ `ai-engineer`### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

ตรวจสอบว่าทักษะมาถูกที่แล้ว:```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

หรือใช้การวินิจฉัยในตัว:```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

มอบเครื่องมือระบบไฟล์ของตัวแทนเพื่อตรวจจับไคลเอนต์ ติดตั้ง/ลบทักษะ และเขียนการกำหนดค่า MCP:```bash
npx omni-skills mcp stream --local
```

คุณยังสามารถกำหนดค่า MCP สำหรับไคลเอนต์ที่ไม่ใช่เป้าหมายการติดตั้งทักษะได้:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

เปิดเผยแค็ตตาล็อกทักษะเป็น HTTP API แบบอ่านอย่างเดียว:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

การค้นพบระหว่างตัวแทนถึงตัวแทน คำแนะนำ การวางแผนการติดตั้ง การโพล และการสตรีม:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

ทักษะคือ Playbook ที่มีโครงสร้างชัดเจน (`SKILL.md`) ที่ให้ตัวแทน AI:

| ส่วนประกอบ | วัตถุประสงค์ |
|:----------|:--------|
| 📋**ส่วนหน้า**| เมตาดาต้าที่เครื่องอ่านได้ (ชื่อ หมวดหมู่ แท็ก เครื่องมือ ความเสี่ยง) |
| 📝**ร่างกาย**| คำแนะนำเฉพาะงาน ขั้นตอน ราวกั้น และตัวอย่าง |
| 📚**อ้างอิง**| เอกสารสนับสนุนที่ตัวแทนสามารถปรึกษาได้ระหว่างการดำเนินการ |
| 🎨**สินทรัพย์**| ไอคอน รูปภาพ หรือทรัพยากรแพ็คเกจอื่นๆ |---

## ➡️ Next Steps

| หมอ | สิ่งที่คุณจะได้เรียนรู้ |
|:----|:-----------------|
| 🧭 [คู่มือผู้ใช้ CLI](CLI-USER-GUIDE.md) | การอ้างอิงคำสั่งแบบเต็มสำหรับการติดตั้ง รันไทม์ การกำหนดค่า และการวินิจฉัย |
| 📗 [คู่มือการใช้งาน](USAGE.md) | คำสั่ง CLI ทั้งหมด รูปแบบพร้อมต์ และโหมดรันไทม์ |
| 📦 [บันเดิล](BUNDLES.md) | คอลเลกชันทักษะที่คัดสรรแล้วและความพร้อมใช้งาน |
| 📚 [Catalog](../CATALOG.md) | แคตตาล็อกทักษะที่เผยแพร่ที่สร้างขึ้นโดยอัตโนมัติ |
| 📖 [ศูนย์กลางเอกสาร](../README.md) | แผนที่เอกสารฉบับเต็ม |
| ดำเนินการ [รันบุ๊คระบบ](../operations/RUNBOOK.md) | อ้างอิงการดำเนินงาน |