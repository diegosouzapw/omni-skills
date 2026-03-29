# 🔌 Local MCP Sidecar (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**ส่วนขยายโหมดท้องถิ่นเสริมสำหรับ `@omni-skills/server-mcp` ที่เพิ่มเครื่องมือที่รับรู้ระบบไฟล์สำหรับการตรวจหาไคลเอ็นต์ การจัดการทักษะ และการสร้างการกำหนดค่า MCP**---

## 📊 Status

| คุณสมบัติ | รัฐ |
|:--------|:-------|
| ✅ เครื่องมือแคตตาล็อกแบบอ่านอย่างเดียว | ดำเนินการแล้ว |
| ✅ เครื่องมือท้องถิ่นที่ทราบระบบไฟล์ | ดำเนินการแล้ว |
| ✅ 3 การขนส่ง (stdio/stream/sse) | ดำเนินการแล้ว |
| ✅ เขียนในรายการที่อนุญาต | ดำเนินการแล้ว |
| ✅ ดูตัวอย่าง-ก่อน-เขียน ค่าเริ่มต้น | ดำเนินการแล้ว |
| ✅ การเขียนการกำหนดค่า MCP ที่รับรู้โดยไคลเอ็นต์ | ดำเนินการแล้ว |
| ✅ การรับรองความถูกต้อง HTTP + การจำกัดอัตรา | ดำเนินการแล้ว |
| ✅ ลายเซ็นเวลาที่วางจำหน่ายและผลรวมตรวจสอบ | นำไปใช้สำหรับไฟล์เก็บถาวรที่สร้างขึ้นและแสดงโดย API/MCP |
| 🟡 การบังคับใช้ลายเซ็นเวลาเขียนท้องถิ่น | ยังไม่ได้บังคับใช้ ดูตัวอย่างโหมดท้องถิ่นและเขียนจากการชำระเงินในท้องถิ่นที่เชื่อถือได้ |
| 🟢 ความครอบคลุมของลูกค้าปัจจุบัน | ไคลเอนต์ที่รองรับการติดตั้ง 7 ตัว, ไคลเอนต์ที่สามารถกำหนดค่าได้ 16 ตัว, เป้าหมายการกำหนดค่า 33 รายการ, โปรไฟล์การกำหนดค่า 19 รายการ |---

## 🎯 Purpose

โหมดภายในจะเพิ่ม**เครื่องมือที่ทราบระบบไฟล์**ที่ด้านบนของพื้นผิวแค็ตตาล็อก MCP แบบอ่านอย่างเดียวที่มีอยู่ ใช้เมื่อตัวแทนต้องการ:

- 🕵️ ตรวจจับไคลเอนต์ AI ในพื้นที่ที่เข้ากันได้
- 📋 ตรวจสอบทักษะที่ติดตั้ง
- 👁️ ดูตัวอย่างการติดตั้งหรือการลบทักษะ (ทดลองรัน)
- 📦 ใช้การติดตั้งหรือถอดทักษะท้องถิ่น
- ⚙️ เขียนไฟล์กำหนดค่า MCP ในเครื่องหลังจากดูตัวอย่าง

โดยจงใจแยกข้อกังวลสองประการ:

-**เป้าหมายการติดตั้งทักษะ**
  ลูกค้าที่มีไดเร็กทอรีทักษะที่มั่นคงซึ่งสามารถใช้ `install_skills` ได้
-**เป้าหมายการกำหนดค่า MCP**
  ไคลเอนต์หรือ IDE ที่มีรูปแบบการกำหนดค่า MCP ที่บันทึกไว้ที่เสถียร แม้ว่าจะไม่มีไดเร็กทอรีทักษะก็ตาม---

## 🔌 Transports

| ขนส่ง | โปรโตคอล | ใช้กรณี |
|:----------|:---------|:---------|
| `stdio` | ท่อ | บูรณาการลูกค้าโดยตรง |
| `สตรีม` | HTTP | ที่สามารถสตรีมได้ ไคลเอนต์ HTTP สมัยใหม่ |
| `sse` | เหตุการณ์ที่เซิร์ฟเวอร์ส่ง | ลูกค้าเก่า |---

## 🚀 Enable Local Mode

### 📦 From repo:

```bash
npm run mcp:local
npm run mcp:stream:local
npm run mcp:sse:local
```

### 📦 Via CLI:

```bash
npm run cli -- mcp stdio --local
npm run cli -- mcp stream --local
npm run cli -- mcp sse --local
npm run cli -- config-mcp --list-targets
npm run cli -- config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp
```

### 📦 From published package:

```bash
npx omni-skills mcp stdio --local
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

> คำสั่งทั้งหมดจะตั้งค่า `OMNI_SKILLS_MCP_MODE=local` โดยอัตโนมัติ---

## 🛠️ Local Tools

เมื่อเปิดใช้งานโหมดท้องถิ่น เครื่องมือพิเศษเหล่านี้จะพร้อมใช้งาน:

| เครื่องมือ | คำอธิบาย | ค่าเริ่มต้น |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | สแกนหาไคลเอนต์ AI และเส้นทางทักษะ/การกำหนดค่า | — |
| 📋 `list_installed_skills` | ตรวจสอบทักษะที่ติดตั้งไว้สำหรับลูกค้าเฉพาะราย | — |
| 📦 `install_skills` | ติดตั้งทักษะลงในไดเร็กทอรีทักษะของลูกค้า | 🔍 ดราย-รัน |
| 🗑️ `remove_skills` | ลบทักษะที่ติดตั้งออกจากไคลเอนต์ | 🔍 ดราย-รัน |
| ⚙️ `configure_client_mcp` | เขียนการกำหนดค่า MCP สำหรับไคลเอนต์เฉพาะ | 🔍 ดราย-รัน |

> ⚠️ `install_skills`, `remove_skills` และ `configure_client_mcp` มีค่าเริ่มต้นเป็น**dry-run**เมื่อละเว้น `dry_run`---

## 🎯 Supported Targets

### 📂 Skills Directories

| ลูกค้า | เส้นทาง |
|:-------|:-----|
| 🔵 รหัสคลอด | `~/.claude/ทักษะ` |
| 🔵 เคอร์เซอร์ | `~/.cursor/ทักษะ` |
| 🟡 ราศีเมถุน CLI | `~/.gemini/ทักษะ` |
| 🟣 ต้านแรงโน้มถ่วง | `~/.gemini/antigravity/ทักษะ` |
| 🟢 คิโระ | `~/.kiro/ทักษะ` |
| 🔴 Codex CLI | `~/.codex/skills` หรือ `$CODEX_HOME/skills` |
| ⚪ โอเพนโค้ด | `<พื้นที่ทำงาน>/.opencode/ทักษะ` |

เป้าหมาย 7 ประการนี้เป็นปลายทางการติดตั้งระดับเฟิร์สคลาสเพียงแห่งเดียวในปัจจุบัน### ⚙️ MCP Config Files

| เป้าหมาย | รูปแบบ |
|:-------|:-------|
| `~/.claude/settings.json` | การตั้งค่ารหัส Claude JSON |
| `<พื้นที่ทำงาน>/.claude/settings.json` | การตั้งค่าโปรเจ็กต์ Claude JSON |
| `~/.claude.json` | Claude JSON ดั้งเดิม (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (เฉพาะระบบปฏิบัติการ) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<พื้นที่ทำงาน>/.cursor/mcp.json` | พื้นที่ทำงานเคอร์เซอร์ JSON (`mcpServers`) |
| `~/.gemini/settings.json` | ผู้ใช้ราศีเมถุน JSON (`mcpServers`) |
| `<พื้นที่ทำงาน>/.gemini/settings.json` | โครงการราศีเมถุน JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | JSON ต้านแรงโน้มถ่วง (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | ผู้ใช้ Kiro JSON (`mcpServers`) |
| `<พื้นที่ทำงาน>/.kiro/settings/mcp.json` | โครงการ Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<พื้นที่ทำงาน>/.mcp.json` | JSON (`mcpServers`) |
| `<พื้นที่ทำงาน>/opencode.json` | พื้นที่ทำงาน OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | ผู้ใช้ OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | ไคลน์ JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<พื้นที่ทำงาน>/.github/mcp.json` | พื้นที่เก็บข้อมูล GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | ผู้ใช้ Kilo CLI JSON (`mcp`) |
| `<พื้นที่ทำงาน>/kilo.json` | โครงการ Kilo CLI JSON (`mcp`) |
| `<พื้นที่ทำงาน>/.kilocode/mcp.json` | พื้นที่ทำงาน Kilo Code JSON (`mcpServers`) |
| `<พื้นที่ทำงาน>/.continue/mcpServers/omni-skills.yaml` | ดำเนินการต่อพื้นที่ทำงาน YAML (`mcpServers`) |
| `<พื้นที่ทำงาน>/.junie/mcp/mcp.json` | Junie โปรเจ็กต์ JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | ผู้ใช้ Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | วินด์เซิร์ฟ JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`ส่วนขยาย`) |
| `<พื้นที่ทำงาน>/.zed/settings.json` | พื้นที่ทำงาน Zed JSON (`context_servers`) |
| `<พื้นที่ทำงาน>/.vscode/mcp.json` | JSON (`เซิร์ฟเวอร์`) |
| `~/.config/Code/User/mcp.json` | ผู้ใช้รหัส VS JSON (`เซิร์ฟเวอร์`) |
| `~/.config/Code - Insiders/User/mcp.json` | ผู้ใช้ VS Code Insiders JSON (`เซิร์ฟเวอร์`) |
| `<พื้นที่ทำงาน>/.devcontainer/devcontainer.json` | คอนเทนเนอร์ Dev ที่ซ้อนกัน JSON (`customizations.vscode.mcp.servers`) |
| รูทไคลเอ็นต์ `mcp.json` | JSON (รูปแบบต่อไคลเอนต์) |

นั่นทำให้รถเทียมข้างรถจักรยานยนต์:

-**ไคลเอนต์หรือ IDE ที่สามารถกำหนดค่าได้ 16 รายการ**
-**33 เส้นทางเป้าหมายชั้นหนึ่ง**
-**โปรไฟล์ 19 รูปแบบ**

ครอบคลุมการกำหนดค่าระดับเฟิร์สคลาสในปัจจุบัน:

- Claude Code และ Claude Desktop
- เคอร์เซอร์
- รหัส VS และคอนเทนเนอร์ Dev
- ราศีเมถุน CLI
- ต้านแรงโน้มถ่วง
- คิโระ
- โคเด็กซ์ CLI
- ทำต่อ
- จูนี่
- วินด์เซิร์ฟ
- ห่าน
- โอเพ่นโค้ด
- ไคลน์
- GitHub Copilot CLI
- รหัสกิโล
- เซด

ผู้สมัครด้วยตนเองหรือตัวอย่างเท่านั้นยังคงตั้งใจอยู่นอกเหนือผู้เขียนชั้นหนึ่งที่ตั้งไว้จนกว่าสัญญาการกำหนดค่าสาธารณะจะมีเสถียรภาพเพียงพอ### 🧭 Expansion Policy

ขณะนี้ Omni Skills ปฏิบัติต่อการสนับสนุนลูกค้าในรูปแบบสามระดับ:

1.**สามารถติดตั้งได้**
   มีไดเร็กทอรีทักษะที่เสถียร ดังนั้น CLI และไฟล์ช่วยเหลือจึงสามารถติดตั้งทักษะได้โดยตรง
2.**สามารถกำหนดค่าได้**
   มีรูปแบบการกำหนดค่า MCP ที่เสถียรและเป็นเอกสารอยู่แล้ว ดังนั้น `config-mcp` จึงสามารถดูตัวอย่างและเขียนไฟล์ชั้นหนึ่งได้
3.**ด้วยตนเองหรือตัวอย่างเท่านั้น**
   ผลิตภัณฑ์รองรับ MCP อย่างชัดเจนในบางรูปแบบ แต่เอกสารสาธารณะยังไม่ได้พิสูจน์ให้เห็นถึงการเขียนอัตโนมัติที่ปลอดภัย

นี่คือเหตุผลว่าทำไมไคลเอ็นต์ เช่น JetBrains AI Assistant ยังคงเป็นแบบแมนนวล/ตัวอย่างเท่านั้น ในขณะที่ Roo Code และ Postman ยังคงอยู่นอกเหนือนักเขียนชั้นแนวหน้าจนกว่าเรื่องราวการผสานอัตโนมัติที่ปลอดภัยจะแข็งแกร่งเพียงพอสำหรับโปรเจ็กต์นี้---

## 🔒 Allowlist Model

รถจักรยานยนต์เทียมข้างในพื้นที่เขียนภายใต้**รายการที่อนุญาตอย่างชัดแจ้ง**เท่านั้น### 🟢 Default allowlist:

- รากฐานของลูกค้าที่รู้จักภายใต้ `$HOME`
- `~/.codeium` สำหรับการกำหนดค่าผู้ใช้ Windsurf
- `~/.copilot` สำหรับ GitHub Copilot CLI
- `~/.cline` สำหรับไคลน์ CLI
- `~/.config/goose` สำหรับการกำหนดค่า Goose
- `~/.config/kilo` และ `~/.config/opencode` สำหรับการกำหนดค่า CLI ของ Kilo/OpenCode
- `$CODEX_HOME` (หรือ `~/.codex` หากไม่ได้ตั้งค่า)
- รูทพื้นที่ทำงานปัจจุบัน
- `<พื้นที่ทำงาน>/.ตัวแทน`
- `<พื้นที่ทำงาน>/.github`
- `<พื้นที่ทำงาน>/.kilocode`
- `<พื้นที่ทำงาน>/.opencode`
- `<พื้นที่ทำงาน>/.zed`
- `<พื้นที่ทำงาน>/.ดำเนินการต่อ`
- `<พื้นที่ทำงาน>/.vscode`### ➕ Extend the allowlist:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

---

## ⚙️ Config Writing Examples

### 🔵 Claude Code / Project Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### 🔵 Cursor / Workspace JSON

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 🟡 Gemini CLI / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "headers": {
        "Authorization": "Bearer example"
      }
    }
  },
  "mcp": {
    "allowed": ["omni-skills"]
  }
}
```

### 🟢 Kiro / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "disabledTools": ["install_skills"],
      "autoApprove": ["search_skills", "get_skill"]
    }
  }
}
```

### 🟣 Antigravity

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚪ OpenCode

```json
{
  "mcp": {
    "omni-skills": {
      "type": "local",
      "command": ["/path/to/node", "/path/to/packages/server-mcp/src/server.js"],
      "environment": {
        "OMNI_SKILLS_MCP_MODE": "local"
      },
      "enabled": true
    }
  }
}
```

### 🟢 Cline

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "streamable-http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚫ GitHub Copilot CLI

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "tools": ["*"]
    }
  }
}
```

### 🔴 Kilo Code

```json
{
  "mcp": {
    "omni-skills": {
      "type": "remote",
      "url": "http://127.0.0.1:3334/mcp",
      "enabled": true
    }
  }
}
```

### 🟢 Continue

```yaml
name: 'Omni Skills'
version: '0.1.3'
schema: 'v1'
mcpServers:
  - name: 'omni-skills'
    transport:
      type: 'streamable-http'
      url: 'http://127.0.0.1:3334/mcp'
```

### 🧭 CLI Contract

Wrapper CLI ที่สนับสนุนไซด์คาร์ทำให้การสร้างการกำหนดค่า MCP สามารถเข้าถึงได้โดยไม่ต้องเรียก JSON-RPC โดยตรง:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

การทำงานเริ่มต้นเป็นแบบแสดงตัวอย่างเท่านั้น `--write` จะนำการกำหนดค่าไปใช้กับเส้นทางเป้าหมายที่แก้ไขแล้วภายใต้รายการที่อนุญาต### 🌊 Windsurf

```json
{
  "mcpServers": {
    "omni-skills": {
      "serverUrl": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚡ Zed

```json
{
  "context_servers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 💜 VS Code

```json
{
  "servers": {
    "omni-skills": {
      "type": "stdio",
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 📦 Dev Container

```json
{
  "customizations": {
    "vscode": {
      "mcp": {
        "servers": {
          "omni-skills": {
            "type": "stdio",
            "command": "/path/to/node",
            "args": ["/path/to/packages/server-mcp/src/server.js"],
            "env": {
              "OMNI_SKILLS_MCP_MODE": "local"
            }
          }
        }
      }
    }
  }
}
```

### 🔴 Codex TOML

```toml
[mcp_servers.omni-skills]
url = "http://127.0.0.1:3334/mcp"
```

### 📋 Generic stdio

```json
{
  "mcpServers": {
    "omni-skills": {
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 🔵 Claude allow/deny lists

เครื่องมือ `configure_client_mcp` ยังสามารถเขียนการตั้งค่าเฉพาะของ Claude ได้เมื่อคุณผ่าน:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `สิทธิ์_ปฏิเสธ`
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

สำหรับเป้าหมาย VS Code และ Dev Container `configure_client_mcp` ยังสามารถเขียน:

- `เปิดใช้งานแซนด์บ็อกซ์แล้ว`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

ซึ่งจะแมปกับคำแนะนำ VS Code ปัจจุบันสำหรับเซิร์ฟเวอร์ stdio MCP ภายในแบบแซนด์บ็อกซ์### 🧰 Cross-Client Entry Options

ขณะนี้ `configure_client_mcp` รองรับข้อมูลเมตารายการที่สมบูรณ์ยิ่งขึ้นในโปรไฟล์ที่รองรับ:

- `ส่วนหัว`
- `สิ่งแวดล้อม`
- `env_file`
- `ควด'
- `หมดเวลา_ms`
- `คำอธิบาย`
- `รวม_เครื่องมือ`
- `ไม่รวม_เครื่องมือ`
- `ปิดการใช้งาน`
- `ความไว้วางใจ`

ตัวเลือกเฉพาะโปรไฟล์:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- ราศีเมถุน: `mcp_allowed_servers`, `mcp_excluded_servers`
- คิโระ: `disabled_tools`, `auto_approve`
- รหัส VS และคอนเทนเนอร์ Dev: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` ส่งคืน `recipes` ควบคู่ไปกับการแสดงตัวอย่างหรือการกำหนดค่าที่ใช้

สูตรอาหารเหล่านี้เป็นบล็อกคำแนะนำที่ลูกค้าทราบ เช่น:

- `claude mcp เพิ่ม ... --ขอบเขตผู้ใช้ | โครงการ `
- `เพิ่มราศีเมถุน mcp ... --ผู้ใช้ขอบเขต | โครงการ `
- `codex mcp เพิ่ม ...`
- สูตรแก้ไขไฟล์ด้วยตนเองสำหรับ Cursor, VS Code, Kiro และ Claude Desktop

กลยุทธ์โดยรวมตอนนี้มีเจตนาอนุรักษ์นิยม:

- นำชุดการกำหนดค่า Canonical ชุดเล็กๆ มาใช้ซ้ำหากเป็นไปได้
- จ้างนักเขียนตามความต้องการเฉพาะเมื่อเอกสารราชการต้องการรูปแบบที่แตกต่างออกไปเท่านั้น
- หลีกเลี่ยงการประดิษฐ์ตัวเขียนอัตโนมัติสำหรับเป้าหมายที่ไม่มีเอกสาร---

## 🔐 Hosted HTTP Hardening

การขนส่ง HTTP รองรับการควบคุมที่ขับเคลื่อนด้วย env เช่นเดียวกับแค็ตตาล็อก API:

| ตัวแปร | วัตถุประสงค์ |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | ผู้ถือโทเค็นรับรองความถูกต้อง |
| `OMNI_SKILLS_HTTP_API_KEYS` | คีย์ API ที่คั่นด้วยเครื่องหมายจุลภาค |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | วิปัสสนารันไทม์สำหรับผู้ดูแลระบบเท่านั้น |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | คำขอสูงสุดต่อหน้าต่าง |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | หน้าต่างจำกัดอัตราในหน่วย ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | เปิดใช้งานการบันทึกการตรวจสอบ |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | เขียนบันทึกการตรวจสอบลงในไฟล์ |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | จำกัดต้นกำเนิดของเบราว์เซอร์ |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | จำกัด IP ต้นทางที่อนุญาต |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | ส่งกลับ `503` สำหรับเส้นทางที่ไม่ใช่ผู้ดูแลระบบและไม่ใช่ด้านสุขภาพ |

> 🟢 `/healthz` ยังคงเปิดอยู่ `/mcp`, `/sse` และ `/messages` ต้องมีการตรวจสอบสิทธิ์เมื่อเปิดใช้งาน `/admin/runtime` ต้องใช้โทเค็นผู้ดูแลระบบเมื่อกำหนดค่า---

## 🌍 Official Docs That Shape Support Decisions

ชุดตัวเขียนปัจจุบันและขอบเขตแบบแมนนวลได้รับการตรวจสอบกับเอกสารผลิตภัณฑ์อย่างเป็นทางการ ได้แก่:

- มานุษยวิทยา Claude รหัส MCP
- OpenAI Codex CLI และ OpenAI Docs MCP
- เอกสารเคอร์เซอร์ MCP
- ดำเนินการต่อเอกสาร MCP
- เอกสาร Kiro MCP
- เอกสาร OpenCode MCP
- เอกสาร MCP ของไคลน์
- เอกสารกิโลโค้ด MCP
- เอกสาร GitHub Copilot CLI
- เอกสาร Zed MCP
- เอกสาร VS Code MCP
- เอกสาร JetBrains AI Assistant MCP

เอกสารเหล่านั้นเป็นสาเหตุที่ลูกค้าบางรายได้รับนักเขียนอัตโนมัติชั้นหนึ่ง ในขณะที่ลูกค้าบางรายยังคงเป็นตัวอย่างข้อมูลเท่านั้นในตอนนี้