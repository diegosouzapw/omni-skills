# Client Support Matrix (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


เอกสารนี้จะติดตามพื้นผิวไคลเอนต์ที่ใช้งานได้จริงสำหรับ Omni Skills จากปัจจัยนำเข้าสามประการ:

1. รายการแดชบอร์ด `9router` ใน `/home/diegosouzapw/dev/proxys/9router`
2. การใช้งานรถเทียมข้างรถจักรยานยนต์ Omni Skills MCP ในปัจจุบัน
3. เอกสารอย่างเป็นทางการปัจจุบันสำหรับลูกค้าแต่ละรายหรือ IDE

นี่เป็นแหล่งข้อมูลที่แท้จริงในการตัดสินใจว่าไคลเอ็นต์ใดจะได้รับการสนับสนุน `config-mcp` ชั้นนำ ไคลเอ็นต์ใดที่ใช้งานได้ด้วยตนเองเท่านั้น และไคลเอ็นต์ใดที่เป็นตัวเลือกเท่านั้น---

## Scope

เมทริกซ์นี้เกี่ยวกับ**การกำหนดค่าไคลเอนต์สำหรับ MCP**

มันไม่เหมือนกับ:

- การสนับสนุนการติดตั้งทักษะ
- ความเข้ากันได้ของ API
- รองรับ A2A
- ACP หรือโปรโตคอลอื่นที่ไม่ใช่ MCP

ผลิตภัณฑ์บางอย่างในเมทริกซ์ใช้ MCP แต่**ไม่**มี “ไดเรกทอรีทักษะ” ที่มีความหมาย ดังนั้นจึงได้รับเฉพาะการสนับสนุนเป้าหมายการกำหนดค่าเท่านั้น---

## 9router Inventory

ปัจจุบันแดชบอร์ด `9router` จัดกลุ่มเครื่องมือ CLI หรือไคลเอนต์ IDE เหล่านี้:

- คล็อด โค้ด
- OpenAI Codex
- โรงงานดรอยด์
- โอเพ่นคลอว์
- เคอร์เซอร์
- ไคลน์
- รหัสกิโล
- ทำต่อ
- ต้านแรงโน้มถ่วง
- นักบิน GitHub
- โอเพ่นโค้ด
- คิโระ ไอ

แหล่งที่มาในท้องถิ่น:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

ขณะนี้ไคลเอ็นต์เหล่านี้มีเรื่องราวที่มั่นคงและชัดเจนใน Omni Skills ผ่านทาง `config-mcp --target ...`

ยอดรวมการใช้งานปัจจุบัน:

-**ไคลเอนต์ที่สามารถติดตั้งได้ 7 ตัว**
-**ไคลเอนต์ที่สามารถกำหนดค่าได้ 16 ตัว**
-**33 เป้าหมายการกำหนดค่าชั้นหนึ่ง**
-**โปรไฟล์กำหนดค่า 19 รายการ**

| ลูกค้า | สถานะ | กำหนดค่าเป้าหมาย | หมายเหตุ |
|:-------|:-------|:---------------|:------|
| รหัสคลอด | ✅ ชั้นเฟิร์สคลาส | `พื้นที่ทำงาน`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | พิมพ์ `mcpServers` config ด้วยการควบคุมอนุญาต / ปฏิเสธเฉพาะของ Claude |
| เคอร์เซอร์ | ✅ ชั้นเฟิร์สคลาส | `เคอร์เซอร์-พื้นที่ทำงาน`, `ผู้ใช้เคอร์เซอร์` | เป้าหมาย JSON `mcpServers` |
| รหัส VS | ✅ ชั้นเฟิร์สคลาส | `vscode`, `vscode-ผู้ใช้`, `vscode-insiders-user`, `devcontainer` | ใช้รูต `เซิร์ฟเวอร์` |
| ราศีเมถุน CLI | ✅ ชั้นเฟิร์สคลาส | `ผู้ใช้ราศีเมถุน`, `พื้นที่ทำงานของราศีเมถุน` | การตั้งค่า JSON + อนุญาต/ไม่รวมการควบคุม MCP ทั่วโลก |
| ต้านแรงโน้มถ่วง | ✅ ชั้นเฟิร์สคลาส | `ผู้ใช้ต้านแรงโน้มถ่วง` | JSON `mcpServers` เป้าหมาย |
| คิโระ | ✅ ชั้นเฟิร์สคลาส | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | ช่องที่ปิดใช้งาน/อนุมัติอัตโนมัติของ Kiro โดยเฉพาะ |
| Codex CLI | ✅ ชั้นเฟิร์สคลาส | `ผู้ใช้ codex` | ตาราง TOML `mcp_servers` |
| ดำเนินการต่อ | ✅ ชั้นเฟิร์สคลาส | `พื้นที่ทำงานต่อ` | เอกสารเซิร์ฟเวอร์ YAML เฉพาะ |
| วินด์เซิร์ฟ | ✅ ชั้นเฟิร์สคลาส | `ผู้ใช้วินด์เซิร์ฟ` | เป้าหมาย JSON `mcpServers` พร้อมรายการ `serverUrl` |
| โอเพ่นโค้ด | ✅ ชั้นเฟิร์สคลาส | `opencode-พื้นที่ทำงาน`, `ผู้ใช้ opencode` | `opencode.json` อย่างเป็นทางการ / การกำหนดค่าผู้ใช้โดยใช้ `mcp` ระดับบนสุด |
| ไคลน์ | ✅ ชั้นเฟิร์สคลาส | `ผู้ใช้ไคลน์` | `cline_mcp_settings.json` กับ `mcpServers` |
| GitHub Copilot CLI | ✅ ชั้นเฟิร์สคลาส | `ผู้ใช้นักบิน`, `นักบินนักบิน` | `mcp-config.json` หรือขอบเขต repo `.github/mcp.json` |
| รหัสกิโล | ✅ ชั้นเฟิร์สคลาส | `ผู้ใช้กิโล`, `โครงการกิโล`, `พื้นที่ทำงานกิโล' | Kilo CLI ใช้ `kilo.json`; การรวมพื้นที่ทำงานใช้ `.kilocode/mcp.json` |
| เซด | ✅ ชั้นเฟิร์สคลาส | `zed-พื้นที่ทำงาน` | `.zed/settings.json` พร้อมด้วย `context_servers` |
| จูนี่ | ✅ ชั้นเฟิร์สคลาส | `junie-project`, `ผู้ใช้ junie` | `.junie/mcp/mcp.json` หรือ `~/.junie/mcp/mcp.json` โดยใช้ `mcpServers` |
| ห่าน | ✅ ชั้นเฟิร์สคลาส | `ผู้ใช้ห่าน` | `~/.config/goose/config.yaml` โดยใช้วัตถุ `extensions` ระดับบนสุดสำหรับส่วนขยาย MCP แบบถาวร |---

## Current Gaps

ลูกค้าเหล่านี้จาก `9router` ยัง**ไม่ใช่**ยังเป็นเป้าหมายนักเขียนชั้นนำใน Omni Skills:

| ลูกค้า | สถานะปัจจุบัน | ทำไม |
|:-------|:--------------|:----|
| โรงงาน Droid | ⚠️ กำหนดเอง/กำหนดเองเท่านั้น | ไม่พบรูปร่างการกำหนดค่า MCP สาธารณะที่เสถียรในเอกสารหลักระหว่างการส่งผ่านนี้ |
| OpenClaw | ⚠️ กำหนดเอง/กำหนดเองเท่านั้น | ปัญหาเดียวกันกับ Factory Droid |

รถเทียมข้างรถจักรยานยนต์ยังคงสามารถใช้กับ `--file` หรือเส้นทางที่กำหนดเองสำหรับผู้ใช้ขั้นสูงได้ แต่ทักษะ Omni ไม่ควรสร้างนักเขียนชั้นหนึ่งโดยไม่มีเอกสารการกำหนดค่าสาธารณะที่เสถียร

ตอนนี้ผลิตภัณฑ์สองรายการที่อยู่ติดกันเข้าใจดีขึ้นแล้ว แต่ยังคงตั้งใจที่จะหยุดนักเขียนอัตโนมัติชั้นหนึ่ง:

| ลูกค้า | สถานะปัจจุบัน | ทำไม |
|:-------|:--------------|:----|
| ผู้ช่วย JetBrains AI | 🟡 คู่มือ/ตัวอย่าง | มีการสนับสนุน MCP อย่างเป็นทางการ แต่เวิร์กโฟลว์ที่จัดทำเป็นเอกสารนั้นขับเคลื่อนด้วย UI/ขับเคลื่อนการนำเข้า แทนที่จะเป็นเป้าหมายไฟล์สาธารณะที่เสถียร
| บุรุษไปรษณีย์ | 🟡 คู่มือ/ตัวอย่าง | มีการรองรับ MCP อย่างเป็นทางการ แต่การกำหนดค่าได้รับการจัดการภายใน UX ผลิตภัณฑ์แทนที่จะเป็นเป้าหมายไฟล์สาธารณะที่เสถียร |
| รหัสรู | 🟡 ผู้สมัคร | มีเอกสาร MCP สาธารณะ แต่สัญญาเส้นทางไฟล์ข้ามแพลตฟอร์มที่แข็งแกร่งยังคงต้องการการยืนยันก่อนที่จะเพิ่มตัวเขียน |---

## Support Policy

ตอนนี้ทักษะ Omni เป็นไปตามชุดกฎนี้:

1.**สามารถติดตั้งได้**หากมีไดเร็กทอรีทักษะที่เสถียร
2.**สามารถกำหนดค่าได้**หากมีรูปแบบไฟล์กำหนดค่า MCP สาธารณะที่เสถียร
3.**ด้วยตนเอง/ตัวอย่างเท่านั้น**หากผลิตภัณฑ์รองรับ MCP แต่สัญญาสาธารณะเน้น UI ก่อน นำเข้าก่อน หรือยังไม่เสถียรเกินไป

นี่เป็นคำตอบที่ใช้ได้จริงสำหรับคำถามเกี่ยวกับสถาปัตยกรรมข้อใดข้อหนึ่งก่อนหน้านี้: โปรเจ็กต์ควรเพิ่มจำนวนนักเขียนชั้นหนึ่งเฉพาะในกรณีที่รูปแบบสาธารณะมีความเสถียร และไม่เช่นนั้นก็อาศัยตระกูลการส่งออกตามรูปแบบบัญญัติชุดเล็ก ๆ พร้อมสูตรอาหารและตัวอย่างข้อมูล### Canonical config families already in use

- JSON `mcpServers`
- JSON `เซิร์ฟเวอร์`
- JSON `บริบท_เซิร์ฟเวอร์`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| ไคลเอนต์ / IDE | คำแนะนำ | เหตุผล |
|:-------------|:---------------|:-------|
| ผู้ช่วย JetBrains AI | 🟡 เก็บคู่มือ/ตัวอย่างไว้ตอนนี้ | การสนับสนุนอย่างเป็นทางการนั้นมีอยู่จริง แต่ UX ยังคงได้รับการจัดการผลิตภัณฑ์มากกว่าทำสัญญาไฟล์ก่อน |
| บุรุษไปรษณีย์ | 🟡 เก็บคู่มือ/ตัวอย่างไว้ตอนนี้ | การตั้งค่าอย่างเป็นทางการเน้น UI ก่อนและจัดการพื้นที่ทำงานมากกว่าทำสัญญาไฟล์เป็นอันดับแรก |
| รหัสรู | 🟡 ตรวจสอบต่อไป | รองรับ MCP ที่มีแนวโน้มดี แต่ความปลอดภัยของผู้เขียนขึ้นอยู่กับการยืนยันเส้นทางการกำหนดค่าที่แข็งแกร่งกว่า |
| VS Code Copilot Chat | 🟢 ครอบคลุมทางอ้อมแล้ว | ตำแหน่งไฟล์ VS Code MCP พื้นฐานได้รับการสนับสนุนแล้ว |
| Zed ACP / เซิร์ฟเวอร์ตัวแทน | 🟡 แยกแทร็ก | นี่คืออาณาเขตของ ACP/เอเจนต์-เซิร์ฟเวอร์ ไม่ใช่แค่การเขียนการกำหนดค่า MCP |---

## Official Sources Used

การตัดสินใจข้างต้นได้รับการตรวจสอบกับแหล่งข้อมูลหลักในปัจจุบัน:

- [MCP รหัสมานุษยวิทยา](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [เคอร์เซอร์ MCP](https://docs.cursor.com/tools)
- [ดำเนินการต่อ MCP](https://docs.continue.dev/customize/tools)
- [คิโระ MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [ไคลน์ MCP](https://docs.cline.bot/mcp)
- [MCP รหัสกิโล](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [MCP ผู้ช่วย JetBrains AI](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [จูนี่ MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [ไฟล์การกำหนดค่า Goose](https://block.github.io/goose/docs/guides/config-files/)
- [ส่วนขยายเซสชัน Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [การตั้งค่า MCP บุรุษไปรษณีย์](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [รหัสรู MCP](https://docs.roocode.com/features/mcp)
- [คู่มือส่วนขยาย VS Code MCP](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [ทะเบียน MCP อย่างเป็นทางการ](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

รถเทียมข้าง Omni Skills ในปัจจุบันตั้งใจที่จะแยกแยะระดับการสนับสนุนสามระดับ:

-**ลูกค้าที่สามารถติดตั้งได้**
  - มีไดเร็กทอรีทักษะที่รู้จักและสามารถใช้ `install_skills` ได้
-**ไคลเอนต์ที่สามารถกำหนดค่าได้**
  - มีเป้าหมายการกำหนดค่าที่เสถียรและสามารถใช้ `configure_client_mcp` ได้
-**ไคลเอนต์ด้วยตนเอง/ตัวอย่างข้อมูล**
  - ได้รับการจัดทำเป็นเอกสารแล้ว แต่ยังไม่มีตัวเขียนไฟล์ชั้นหนึ่งที่ปลอดภัย

การแยกดังกล่าวทำให้ผลิตภัณฑ์มีความซื่อสัตย์

ไม่ใช่ทุกผลิตภัณฑ์ที่สามารถใช้งาน MCP ได้ควรถือเป็นเป้าหมายในการติดตั้งทักษะ
ขั้นตอนการขยายถือว่าเสร็จสมบูรณ์แล้ว: การเพิ่มเติมในอนาคตควรลงจอดก็ต่อเมื่อเคลียร์แถบสัญญาสาธารณะแบบเดียวกับที่ Goose, Junie, Continue และ Windsurf เคลียร์ได้แล้ว