# 🧠 Omni Skills (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Danh mục kỹ năng tự cài đặt.**<br/>
CLI · API · MCP · A2A — tất cả chỉ từ một lệnh `npx` duy nhất.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Cài đặt trong 1 phút](#-installation) · [🛠️ Chọn công cụ của bạn](#-choose-your-tool) · [📖 CLI Guide](docs/users/CLI-USER-GUIDE.md) · [📦 Bundles](docs/users/BUNDLES.md) · [🔌 Runtime](#-runtime-surfaces) · [💡 Tại sao lại là Omni Kỹ năng](#-why-omni-skills)</div>

---

<div align="center">

### Tổng quan

</div>

| | Số liệu | Giá trị |
|:--|:-------|:------|
| 📦 |**Kỹ năng đã xuất bản**| `32` trên 15 danh mục đang hoạt động |
| 🎯 |**Gói**| `7` gói được quản lý đầy đủ |
| 🖥️ |**Cài đặt ứng dụng khách**| `7` trợ lý mã hóa AI có khả năng cài đặt |
| 🔌 |**Khách hàng MCP**| `16` Máy khách có khả năng cấu hình MCP |
| 🔐 |**Đầu ra được tuyển chọn**| `32` dẫn xuất tiếng Anh nâng cao trong `skills_omni/` |
| 📋 |**Bản phát hành hiện tại**| `v0.1.2` |---

## Bắt đầu nhanh

>**Đã tìm kiếm các kỹ năng mã hóa AI, kỹ năng Mã Claude, kỹ năng Con trỏ, kỹ năng Codex CLI, kỹ năng CLI của Gemini, kỹ năng Chống trọng lực hoặc thư viện `SKILL.md` có thể cài đặt?**
> Bạn đang ở đúng nơi.### 1️⃣ What is this?

Omni Skills là**danh mục kỹ năng và thời gian chạy**có thể cài đặt**dành cho trợ lý mã hóa AI. Về cốt lõi, đây là một kho lưu trữ công khai gồm các sách chơi `SKILL.md` có thể tái sử dụng — nhưng không giống như các bộ sưu tập kỹ năng đơn giản, kho lưu trữ**là**lớp phân phối và thời gian chạy.

<chi tiết>
<summary>📋 <strong>Bao gồm những gì</strong></summary>

| Thành phần | Mô tả |
|:----------|:----------|
| 🧠**Kỹ năng**| Sách hướng dẫn dựa trên `SKILL.md` được tuyển chọn dành cho trợ lý AI |
| 📦**Biểu hiện**| Đã tạo các tệp kê khai, gói và kho lưu trữ JSON |
| 🧭**Cài đặt có hướng dẫn**| TTY tương tác và quy trình cài đặt thiết bị đầu cuối trực quan |
| 🌐**API danh mục**| API HTTP chỉ đọc để tìm kiếm, khám phá và tải xuống |
| 🔌**Máy chủ MCP**| Khám phá, đề xuất và công cụ cấu hình nhận biết khách hàng |
| 🤖**Thời gian chạy A2A**| Điều phối nhiệm vụ giữa các đại lý |
| ✨**Đường ống nâng cao**| Công cụ cải tiến riêng xuất bản các dẫn xuất tiếng Anh được tuyển chọn thành `skills_omni/` |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Sử dụng `@brainstorming` để lập kế hoạch SaaS MVP."*
>
> 💬 *"Sử dụng `@api-design` để xem lại thiết kế điểm cuối này."*
>
> 💬 *"Sử dụng `@debugging` để tách biệt hồi quy này."*### 5️⃣ Start with a bundle

| 🎯 Mục tiêu | Gói | Lệnh |
|:----------|:-------|:--------|
| Kỹ thuật tổng hợp | `thiết yếu` | `kỹ năng đa dạng của npx --các yếu tố cần thiết` |
| Phân phối sản phẩm + ứng dụng | `đầy đủ` | `npx omni-skills --bundle full-stack` |
| Hệ thống thiết kế | `thiết kế` | `kỹ năng đa dạng của npx --thiết kế theo gói` |
| Đánh giá bảo mật | `bảo mật` | `kỹ năng đa năng của npx --bảo mật gói` |
| Hồng ngoại và phát hành | `devops` | `npx omni-skills --bundle devops` |
| Ứng dụng LLM | `ai-kỹ sư` | `npx omni-skills --bundle ai-engineer` |
| Bảo trì OSS | `người bảo trì oss` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Trước khi so sánh các gói hoặc chọn đường dẫn cài đặt, việc hiểu năm khối xây dựng này sẽ giúp:

| Khái niệm | Ý nghĩa của nó |
|:--------|:-------------|
| 🧠**Kỹ năng**| Sách hướng dẫn `SKILL.md` có thể tái sử dụng để dạy trợ lý cách thực hiện tốt quy trình làm việc |
| 📦**Danh mục hiện vật**| Đã tạo các đầu ra JSON và lưu trữ cho phép tìm kiếm, so sánh, tải xuống và cài đặt |
| 🔌**Cấu hình MCP**| Cấu hình phía máy khách để trợ lý khám phá Kỹ năng Omni thông qua các công cụ MCP |
| 🤖**Thời gian chạy A2A**| Phối hợp giữa các tác nhân để khám phá, đề xuất và chuyển giao kế hoạch cài đặt |
| ✨**Đầu ra tuyển chọn**| `skills_omni/` — bề mặt nâng cao được duy trì bằng Omni, tách biệt với lượng tiếp nhận ngược dòng gốc |

>**📝 Chính sách gốc/sắp tuyển:**
> - `skills/` chấp nhận đầu vào bản địa ngược dòng bằng bất kỳ ngôn ngữ nào
> - `skills_omni/` luôn được tuyển chọn và xuất bản bằng tiếng Anh
> - `skills_omni/` là bề mặt một chiều và không quay trở lại nguồn gốc---

## 💡 Why Omni Skills

>**Không chỉ là "một kho lưu trữ khác có các kỹ năng trong thư mục."**
> Omni Skills có hợp đồng mạnh mẽ hơn và phạm vi thời gian chạy rộng hơn.

| Nếu bạn muốn… | 📁 Kho kỹ năng tiêu biểu | ✨ Kỹ năng Omni |
|:-------------|:----------------------|:--------------|
| Cài đặt vào một trợ lý thực sự | Sao chép thủ công hoặc tập lệnh tùy chỉnh | `npx omni-skills`, cài đặt có hướng dẫn, giao diện người dùng trực quan, chọn lọc `--skill` và `--bundle` |
| Tìm kiếm và so sánh kỹ năng | Duyệt đánh dấu thủ công | Tạo danh mục, lọc, lập kế hoạch gói, tìm kiếm, so sánh và đề xuất |
| Sử dụng cùng một dữ liệu trên các công cụ | Logic riêng biệt cho mỗi công cụ | Các bảng kê khai và danh mục được chia sẻ cho CLI, API, MCP và A2A |
| Định cấu hình máy khách MCP | Tập tin chỉnh sửa bằng tay | `config-mcp`, bản xem trước sidecar cục bộ, công thức nấu ăn được tạo và ghi vào danh sách cho phép |
| Bản phát hành tin cậy | Đóng gói nỗ lực tốt nhất | Tổng kiểm tra, lưu trữ đã ký, xác minh máy quét, phát hành CI và xuất bản preflight |
| Quản lý lượng tiếp nhận của cộng đồng | Dù vùng đất nào vẫn như cũ | Lượng tiếp thu bản địa trong `skills/`, các dẫn xuất tiếng Anh được tuyển chọn trong `skills_omni/` có ghi công |---

## 🖥️ Compatibility and Invocation

Các kỹ năng này tuân theo mô hình `SKILL.md` và có thể được sử dụng như một kho lưu trữ thông thường, nhưng gói này cũng cài đặt và định cấu hình chúng trên một bề mặt rộng:

>**7**máy khách có khả năng cài đặt ·**16**máy khách có khả năng cấu hình MCP### 🎯 Install-Capable Clients

| Công cụ | Loại | Ví dụ về lời gọi | Đường dẫn cài đặt |
|:------|:------|:-------------------|:-------------|
| 🟢**Mã Claude**| CLI | `Dùng động não để lập kế hoạch cho một tính năng` | `~/.claude/skills` |
| 🔵**Con trỏ**| IDE | `@brainstorming giúp tôi lên kế hoạch cho một tính năng` | `~/.cursor/skills` |
| 🟡**Song Tử CLI**| CLI | `Dùng động não để lập kế hoạch cho một tính năng` | `~/.gemini/skills` |
| 🔴**Codex CLI**| CLI | `Dùng động não để lập kế hoạch cho một tính năng` | `~/.codex/skills` |
| 🟠**Kiro**| CLI/IDE | `Dùng động não để lập kế hoạch cho một tính năng` | `~/.kiro/skills` |
| 🟣**Phản trọng lực**| IDE | `Sử dụng @brainstorming để lên kế hoạch cho một tính năng` | `~/.gemini/anti Gravity/skills` |
| ⚪**Mã mở**| CLI | `chạy mã mở @brainstorming` | `<workspace>/.opencode/skills` |

<chi tiết>
<summary>🔌 <strong>Phạm vi cấu hình MCP rộng hơn (16 khách hàng)</strong></summary>

Các mục tiêu này là một phần của bề mặt cấu hình MCP được hỗ trợ, ngay cả khi chúng không phải là mục tiêu cài đặt cho thư mục kỹ năng:

| Khách hàng hoặc Bề mặt | Loại hỗ trợ | Ghi chú |
|:-------------------|:-------------|:------|
| Cài đặt Claude và máy tính để bàn | Cấu hình MCP | Các quy trình cài đặt, màn hình nền và nhận biết dự án |
| Mã VS | Cấu hình MCP | Mục tiêu của người dùng, không gian làm việc, người trong cuộc và Dev Container |
| Song Tử | Cấu hình MCP | Cài đặt người dùng và không gian làm việc |
| Cline | Cấu hình MCP | Mục tiêu cấu hình hạng nhất |
| GitHub phi công phụ CLI | Cấu hình MCP | Mục tiêu cấu hình người dùng và repo |
| Tiếp tục | Cấu hình MCP | Tạo YAML không gian làm việc |
| Lướt ván buồm | Cấu hình MCP | Mục tiêu cấu hình người dùng |
| Zed | Cấu hình MCP | Mục tiêu cấu hình không gian làm việc |
| Ngỗng | Cấu hình MCP | Mục tiêu cấu hình người dùng với công thức được tạo |
| Mã Kilo | Cấu hình MCP | Mục tiêu người dùng, dự án và không gian làm việc |
| Junie | Cấu hình MCP | Mục tiêu cấu hình dự án và người dùng |</details>

---

## Cài đặt

<bảng>
<tr>
<td width="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Công cụ | Lệnh cài đặt | Sử dụng lần đầu |
|:------|:---------------|:----------|
| 🟢 Mã Claude | `kỹ năng đa năng của npx --claude` | `Dùng động não để lập kế hoạch cho một tính năng` |
| 🔵 Con trỏ | `kỹ năng đa năng của npx --cursor` | `@brainstorming giúp tôi lên kế hoạch cho một tính năng` |
| 🟡 Song Tử CLI | `kỹ năng đa năng của npx --gemini` | `Dùng động não để lập kế hoạch cho một tính năng` |
| 🔴 Codex CLI | `kỹ năng đa năng của npx --codex` | `Dùng động não để lập kế hoạch cho một tính năng` |
| 🟣 Phản trọng lực | `npx omni-skills --antirabity` *(mặc định)* | `Sử dụng @brainstorming để lên kế hoạch cho một tính năng` |
| 🟠 Kiro | `kỹ năng đa năng của npx --kiro` | `Dùng động não để lập kế hoạch cho một tính năng` |
| ⚪ Mã mở | `kỹ năng đa năng của npx --opencode` | `chạy mã mở @brainstorming` |
| 📂 Đường dẫn tùy chỉnh | `npx omni-skills --path ./my-skills` | Phụ thuộc vào công cụ của bạn |

> 📖**Không biết bắt đầu từ đâu?**
> - [🚀 Bắt đầu](docs/users/GETTING-STARTED.md) — cài đặt và xác minh trong vòng chưa đầy 2 phút
> - [🧭 CLI Hướng dẫn sử dụng](docs/users/CLI-USER-GUIDE.md) — tham khảo lệnh đầy đủ
> - [📗 Hướng dẫn sử dụng](docs/users/USAGE.md) — lời nhắc, mẫu và chế độ thời gian chạy---

## 🔌 Runtime Surfaces

Omni Skills không chỉ là một thư viện các kỹ năng. Nó hiển thị**bốn bề mặt thời gian chạy**sử dụng cùng một danh mục được tạo:

| Bề mặt | Tiểu bang | Nó làm gì | Ví dụ |
|:--------|:------|:-------------|:--------|
| 🖥️**CLI**| ✅ Có sẵn | Tìm, cài đặt, chẩn đoán, giao diện người dùng trực quan, dịch vụ khởi động, kiểm tra khói | `bác sĩ đa năng npx` |
| 🌐**API danh mục**| ✅ Có sẵn | Danh mục chỉ đọc, tìm kiếm, gói, so sánh, gói cài đặt, tải xuống | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Có sẵn | Khám phá, đề xuất, xem trước cài đặt, sidecar cục bộ, luồng cấu hình | `npx omni-skills mcp streaming --local` |
| 🤖**A2A**| ✅ Có sẵn | Vòng đời nhiệm vụ, bàn giao, bỏ phiếu, phát trực tuyến, hủy bỏ, kiên trì | `npx omni-skills a2a --port 3335` |

<chi tiết>
<summary>🖥️ <strong>Các lệnh vận hành và shell trực quan</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<chi tiết>
<summary>🔌 <strong>MCP vận chuyển và cấu hình</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Số liệu | Đếm |
|:-------|:------|
| 🧠 Kỹ năng công bố |**32**|
| 📂 Danh mục hoạt động |**15**|
| 📦 Các gói được hỗ trợ đầy đủ |**7**|
| ✨ Các công cụ phái sinh được tuyển chọn |**32**trong `skills_omni/` |### 📦 Bundle Availability

| Gói | Kỹ năng | Thành viên |
|:-------|:-------|:--------|
| 🧰 `thiết yếu` |**4/4**✅ | `kỹ năng tìm kiếm` · `động não` · `kiến trúc` · `gỡ lỗi` |
| 🌐 `đầy đủ` |**5/5**✅ | `frontend-design` · `api-design` · `database-design` · `omni-figma` · `auth-flows` |
| 🎨 `thiết kế` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `accessibility-audit` · `design-token-governance` |
| 🛡️ `bảo mật` |**4/4**✅ | `kiểm toán viên bảo mật` · `máy quét lỗ hổng` · `phản hồi sự cố` · `mô hình hóa mối đe dọa` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observability-review` · `release-engineering` |
| 🤖 `ai-kỹ sư` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contract` · `model-services` |
| 🔧 `người bảo trì oss` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `tài liệu` |### ✨ Native Intake → Curated Output

| Bề mặt | Mục đích | Ngôn ngữ |
|:--------|:--------|:---------|
| 📥 `kỹ năng/` | Lượng bản địa | Bất kỳ ngôn ngữ |
| ✨ `skills_omni/` | Đầu ra được duy trì Omni được quản lý | Luôn Tiếng Anh |

>**ℹ️**Các thay đổi đối với kỹ năng gốc được bộ tăng cường riêng tư xử lý lại và làm mới trong đường cơ sở được quản lý. Điều này làm cho `skills_omni/` trở thành**bề mặt danh mục được duy trì**, không phải là bản sao thứ hai.---

## 🛡️ Security and Release Posture

> Omni Skills mang đến câu chuyện xác minh và phát hành mạnh mẽ hơn kho lưu trữ giảm giá đơn thuần.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<chi tiết>
<summary>📋 <strong>Quy trình xác thực nội dung gì</strong></summary>

- ✅ Xác thực kỹ năng và tạo siêu dữ liệu
- ✅ Công cụ chuẩn hóa và phân loại lại phân loại
- ✅ Tạo danh mục và lưu trữ
- ✅ Kiểm tra tự động
- ✅ Đường dẫn khởi động API, MCP và A2A
- ✅ Xác minh lưu trữ
- ✅ Đóng gói preflight với `npm pack --dry-run`</details>

<chi tiết>
<tóm tắt>🔐 <strong>Tư thế thả ra</strong></tóm tắt>

| Kiểm soát | Mô tả |
|:--------|:----------|
| 🔒 Tổng kiểm tra SHA-256 | Bảng kê khai tổng kiểm tra cho tất cả các kho lưu trữ |
| ✍️ Hiện vật có chữ ký | Chữ ký tách rời trên các tạo phẩm phát hành |
| 🤖 CI thực thi | Đưa ra xác minh trong CI trước khi xuất bản |
| 🦠 Cổng quét | Luồng phát hành ClamAV và VirusTotal |
| 📦 Phát hành GitHub | Tạo bản phát hành GitHub tự động |
| 📋 ấn phẩm npm | Chỉ từ tarball đã được xác minh |
| 🔄 Tự động phát hành | Về kỹ năng đủ điều kiện hợp nhất với `main` |

**Chỉ kích hoạt tự động phát hành khi hợp nhất thay đổi:**
- `kỹ năng/*/**`
- `skills_omni/*/**`
- `data/bundles.json`

Những thay đổi chỉ dành cho tài liệu**không**kích hoạt việc xuất bản gói.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Tài liệu | Bạn sẽ học được gì |
|:----|:-----------------|
| 🚀 [Bắt đầu](docs/users/GETTING-STARTED.md) | Cài đặt, xác minh và gọi trong vòng chưa đầy 2 phút |
| 🧭 [Hướng dẫn sử dụng CLI](docs/users/CLI-USER-GUIDE.md) | Tham chiếu lệnh đầy đủ và các mẫu trong thế giới thực |
| 📗 [Hướng dẫn sử dụng](docs/users/USAGE.md) | Lệnh CLI, chế độ cài đặt, thời gian chạy và cấu hình MCP |
| 📦 [Gói](docs/users/BUNDLES.md) | Các gói tuyển chọn và tính sẵn có |
| 📚 [Danh mục](docs/CATALOG.md) | Danh mục các kỹ năng đã xuất bản được tạo tự động |
| 🔧 [Runbook hệ thống](docs/Operations/RUNBOOK.md) | Xây dựng, phục vụ, bảo mật và khắc phục sự cố |### 🏗️ For Architects

| Tài liệu | Bạn sẽ học được gì |
|:----|:-----------------|
| 🗺️ [Lộ trình của tác nhân-bản địa](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Sự phát triển kiến ​​trúc và các khu vực còn lại |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Quyết định monorepo cốt lõi |
| 🔬 [Phân tích cơ sở mã](docs/architecture/CODEBASE-ANALYSIS.md) | Thành phần thời gian chạy và ranh giới hệ thống |
| 🌐 [API danh mục](docs/specs/CATALOG-API.md) | Điểm cuối HTTP, lọc, quản trị và tải xuống |
| 🧩 [Trình cài đặt có hướng dẫn CLI](docs/specs/CLI-GUIDED-INSTALLER.md) | Hợp đồng hành vi dành cho người cài đặt được hướng dẫn |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Mô hình trạng thái và vỏ trực quan bằng mực |
| 🔌 [Sidecar MCP cục bộ](docs/specs/LOCAL-MCP-SIDECAR.md) | Công cụ hệ thống tập tin và mô hình danh sách cho phép |
| 📊 [Ma trận hỗ trợ khách hàng](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Tài liệu tham khảo đầy đủ của khách hàng và nhà văn |
| 🏷️ [Phân loại kỹ năng](docs/specs/SKILL-CLASSIFICATION.md) | Phân loại, tính điểm và siêu dữ liệu |
| 🛡️ [Xác thực bảo mật](docs/specs/SECURITY-VALIDATION.md) | Máy quét, lưu trữ và chữ ký |
| 📋 [Bản kê khai kỹ năng](docs/specs/SKILL-MANIFEST.md) | Định dạng tệp kê khai có thể đọc được bằng máy |### 🤝 For Contributors

| Tài liệu | Bạn sẽ học được gì |
|:----|:-----------------|
| 📝 [Hướng dẫn đóng góp](CONTRIBUTING.md) | Quy trình làm việc Repo và kỳ vọng PR |
| 🧾 [Quy trình PR kỹ năng](docs/contributors/SKILL-PR-WORKFLOW.md) | Tiếp nhận bản địa, xử lý nâng cao, kỳ vọng của người đánh giá |
| 📄 [Mẫu kỹ năng](docs/contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` với cấu trúc và vật chất cơ bản |
| 🔬 [Giải phẫu kỹ năng](docs/contributors/SKILL-ANATOMY.md) | Kỳ vọng về cơ cấu và chất lượng |
| ✅ [Thanh chất lượng](docs/contributors/QUALITY-BAR.md) | Tiêu chí chấp nhận |
| 🏆 [Playbook điểm cao](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Điều gì thúc đẩy điểm cao |---

## 🗂️ Repository Layout

| Đường dẫn | Mục đích |
|:------|:--------|
| 📂 `kỹ năng/` | Kỹ năng tác giả Canonical và tiếp thu bản địa |
| ✨ `skills_omni/` | Các dẫn xuất nâng cao được quản lý bởi Omni |
| 📖 `tài liệu/` | Tài liệu về người dùng, người đóng góp, kiến ​​trúc, hoạt động và thông số kỹ thuật |
| 📦 `quận/` | Các bảng kê khai, gói, danh mục và kho lưu trữ đã được tạo |
| 📁 `dữ liệu/` | Định nghĩa gói và dữ liệu hỗ trợ tĩnh |
| 🧠 `gói/catalog-core/` | Thời gian chạy danh mục được chia sẻ |
| 🌐 `gói/server-api/` | API HTTP chỉ đọc |
| 🔌 `gói/server-mcp/` | Máy chủ MCP và xe sidecar cục bộ |
| 🤖 `gói/server-a2a/` | Thời gian chạy A2A và điều phối tác vụ |
| 🖥️ `công cụ/thùng/` | Điểm vào CLI |
| 📚 `công cụ/lib/` | Trình trợ giúp trình cài đặt và giao diện người dùng |
| ⚙️ `công cụ/tập lệnh/` | Các tập lệnh xác thực, tạo, phát hành và kiểm tra |

>**ℹ️**`dist/` được tạo phiên bản có chủ ý vì các tạo phẩm được tạo là một phần của hợp đồng cài đặt, API, MCP, A2A, smoke và phát hành.---

## 🤝 Contributing

Omni Skills chấp nhận việc tiếp thu kỹ năng ngược dòng gốc theo `skills/`.

| Quy tắc | Chi tiết |
|:------|:--------|
| 📥 Tiếp thu bản địa | Có thể thô, được viết bằng bất kỳ ngôn ngữ nào |
| ✨ Đầu ra được tuyển chọn | `skills_omni/` dành riêng cho các dẫn xuất Omni được tạo tự động hóa |
| 🚫 Chỉnh sửa thủ công | Các chỉnh sửa thủ công công khai đối với `skills_omni/` bị từ chối |
| 🔄 Tái chế | Công cụ tăng cường riêng tư xử lý lại các thay đổi gốc và làm mới đường cơ sở được quản lý |

> 📖**Bắt đầu với:**[Hướng dẫn đóng góp](CONTRIBUTING.md) · [Quy trình PR kỹ năng](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Loại | Giấy phép |
|:------|:--------|
| 💻 Mã và công cụ | [Giấy phép MIT](GIẤY PHÉP) |
| 📝 Nội dung tài liệu và kỹ năng | [CC BY 4.0](NỘI DUNG GIẤY PHÉP) |---

<div align="center">

**Được tạo bởi 🧠 bởi Nhóm Kỹ năng Omni**

[⭐ Gắn dấu sao cho kho lưu trữ này](https://github.com/diegosouzapw/omni-skills) · [🐛 Báo cáo lỗi](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Thảo luận](https://github.com/diegosouzapw/omni-skills/discussions)</div>
