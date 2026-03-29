# 🧭 Omni Skills CLI User Guide (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Giao diện CLI công khai đầy đủ được cung cấp bởi `omni-skills`.**

Sử dụng hướng dẫn này khi bạn muốn:

| Mục tiêu | Khu vực chỉ huy |
|:------|:-------------|
| 📥 Cài đặt kỹ năng hoặc gói | [Quy trình cài đặt](#3️⃣-install-flows) |
| 🔎 Tìm kiếm danh mục | [Khám phá danh mục](#4️⃣-catalog-discovery) |
| 🔌 Định cấu hình máy khách MCP | [Cấu hình máy khách MCP](#5️⃣-mcp-client-config) |
| 🖥️ Bắt đầu dịch vụ MCP, API hoặc A2A | [Máy chủ MCP](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Sử dụng vỏ thiết bị đầu cuối trực quan | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Chạy chẩn đoán hoặc kiểm tra trước | [Chẩn đoán](#🔟-diagnostics-and-preflight) |---

## 1️⃣ Install and Entry Modes

Cài đặt bằng `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Bối cảnh | Điều gì xảy ra |
|:--------|:-------------|
| 🖥️ TTY + không tranh cãi | Mở luồng**cài đặt có hướng dẫn**|
| ⚙️ Không TTY + không tranh luận | Cài đặt không tương tác vào `~/.gemini/antiGravity/skills` |
| 🎨 `npx omni-skills ui` | Được gắn nhãn hiệu**Vỏ hình ảnh mực**|
| 📝 `npx omni-skills ui --text` | Readline**văn bản dự phòng**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Lệnh | Mô tả |
|:--------|:----------|
| `ui` | 🎨 Trung tâm thiết bị đầu cuối trực quan |
| `tìm [truy vấn]` | 🔎 Khám phá danh mục |
| `phân loại lại` | 🏷️ Quản lý phân loại |
| `cài đặt [cờ]` | 📥 Cài đặt kỹ năng/gói |
| `config-mcp` | 🔌 Cấu hình máy khách MCP |
| `mcp <stdio\|stream\|sse>` | 🔌 Chế độ máy chủ MCP |
| `api` | 🌐 API danh mục |
| `a2a` | 🤖 Thời gian chạy A2A |
| `khói` | 🧪 Phát hành ánh sáng trước |
| `kiểm tra xuất bản` | 📦 Kiểm tra xuất bản gói |
| `bác sĩ` | 🩺 Chẩn đoán môi trường |
| `giúp` | ❓ Tham chiếu lệnh |---

## 3️⃣ Install Flows

### Bắt đầu nhanh

```bash
npx omni-skills
npx omni-skills install --guided
```

> Quy trình hướng dẫn cho phép bạn chọn:**khách hàng mục tiêu**→**gói hoặc kỹ năng**→**đường dẫn tùy chỉnh**→**xem trước trước khi thực hiện**### 🎯 Single Skill

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

| Cờ | Khách hàng |
|:------|:-------|
| `--phản hấp dẫn` | 🟣 Phản trọng lực *(mặc định)* |
| `--claude` | 🟢 Mã Claude |
| `--con trỏ` | 🔵 Con trỏ |
| `--codex` | 🔴 Codex CLI |
| `--gemini` | 🟡 Song Tử CLI |
| `--kiro` | 🟠 Kiro |
| `--opencode` | ⚪ Mã mở |

> Mục tiêu cài đặt mặc định (không tương tác): `~/.gemini/antiGravity/skills`---

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

| Cờ | Mục đích |
|:------|:--------|
| `--category` | Lọc theo danh mục phân loại |
| `--công cụ` | Lọc theo công cụ được hỗ trợ |
| `--rủi ro` | Lọc theo mức độ rủi ro |
| `--sắp xếp` | Sắp xếp kết quả (ví dụ: `chất lượng`) |
| `--order` | Sắp xếp thứ tự |
| `--min-chất lượng` | Điểm chất lượng tối thiểu |
| `--min-thực hành tốt nhất` | Điểm thực hành tốt nhất tối thiểu |
| `--min-level` | Mức trưởng thành tối thiểu |
| `--min-security` | Điểm bảo mật tối thiểu |
| `--xác thực-trạng thái` | Lọc theo trạng thái xác thực |
| `--tình trạng bảo mật` | Lọc theo trạng thái bảo mật |---

## 5️⃣ MCP Client Config

Sử dụng `config-mcp` để xem trước hoặc ghi cấu hình MCP nhận biết máy khách.### 📋 List Targets

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

<chi tiết>
<summary>🔌 <strong>Bề mặt khách hàng có khả năng cấu hình</strong></summary>

| Khách hàng | Mục tiêu |
|:-------|:--------|
| Claude | Cài đặt và mục tiêu trên máy tính để bàn |
| Con trỏ | Người dùng và không gian làm việc |
| Codex | Cấu hình TOML |
| Song Tử | Người dùng và không gian làm việc |
| Phản lực hấp dẫn | Cấu hình người dùng |
| Mã mở | Người dùng và không gian làm việc |
| Cline | Mục tiêu hạng nhất |
| GitHub phi công phụ CLI | Người dùng và repo |
| Mã Kilo | Người dùng, dự án và không gian làm việc |
| Kiro | Người dùng và không gian làm việc |
| Zed | Không gian làm việc |
| Mã VS | Người dùng, không gian làm việc và Dev Container |
| Tiếp tục | Không gian làm việc YAML |
| Junie | Dự án và người dùng |
| Lướt ván buồm | Cấu hình người dùng |</details>

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

>**Sidecar cục bộ**bổ sung thêm: phát hiện ứng dụng khách, xem trước cài đặt, luồng cài đặt/gỡ bỏ và ghi cấu hình MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Tuyến đường | Mục đích |
|:------|:--------|
| `NHẬN /sức khỏe` | Kiểm tra sức khỏe |
| `NHẬN /openapi.json` | Thông số OpenAPI |
| `NHẬN /v1/kỹ năng` | Liệt kê tất cả các kỹ năng |
| `NHẬN /v1/tìm kiếm` | Tìm kiếm danh mục |
| `NHẬN /v1/skills/:id/archives` | Liệt kê tài liệu lưu trữ cho một kỹ năng |
| `NHẬN /v1/skills/:id/download/archive?format=zip` | Tải xuống kho lưu trữ kỹ năng |
| `NHẬN /v1/skills/:id/download/archive/checksums` | Tải xuống tổng kiểm tra |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Tính năng | Trạng thái |
|:--------|:-------|
| 🔎 Khám phá nhận thức nhiệm vụ | ✅ |
| 📋 Bàn giao kế hoạch cài đặt | ✅ |
| 🔄 Bỏ phiếu | ✅ |
| 📡 Đang phát trực tuyến | ✅ |
| ❌ Hủy bỏ | ✅ |
| 🔔 Cấu hình thông báo đẩy | ✅ |
| 💾 Kiên trì | Bộ nhớ, JSON và SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Tính năng

| Tính năng | Mô tả |
|:--------|:----------|
| 🧭 Hướng dẫn cài đặt | Chọn ứng dụng khách hoặc đường dẫn tùy chỉnh |
| 🔎 Tìm kiếm + cài đặt | Không cần ghi nhớ cờ |
| 🔌 Cấu hình MCP | Xem trước và ghi luồng |
| 🖥️ Ra mắt dịch vụ | Khởi động có hướng dẫn MCP, API và A2A |
| 🕐 Gần đây | Các lượt cài đặt và khởi chạy lại dịch vụ gần đây |
| ⭐ Yêu thích | Các kỹ năng và gói đã lưu |
| 💾 Cài đặt trước | Cài đặt trước cài đặt và dịch vụ được đặt tên |

>**Đường dẫn trạng thái:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Kiểm tra: trạng thái kho lưu trữ, trạng thái cài đặt cục bộ, tính khả dụng của thời gian chạy và các vấn đề về môi trường.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Xác thực: bản dựng, kiểm tra, đầu ra gói, khởi động dịch vụ, phạm vi phủ sóng của máy quét và đóng gói phát hành.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Nhân vật | Lệnh | Mục đích |
|:----------|:--------|:--------|
| 🆕 Người dùng mới | `kỹ năng đa năng của npx` | Hướng dẫn cài đặt lần đầu |
| 🔧 Nhà điều hành | `npx omni-skills config-mcp --list-target` | Định cấu hình MCP cục bộ |
| 🔧 Nhà điều hành | `npx omni-skills mcp streaming --local` | Bắt đầu sidecar địa phương |
| 📦 Người bảo trì | `npx omni-skills smoke` | Xác thực một bản phát hành |
| 🔍 Người dùng quyền lực | `npx omni-skills find security --sort chất lượng --min-quality 95` | Tìm kỹ năng tốt nhất trước |---

## 📖 Related Documents

| Tài liệu | Nó bao gồm những gì |
|:----|:--------------|
| 🚀 [Bắt đầu](./GETTING-STARTED.md) | Cài đặt và xác minh trong vòng chưa đầy 2 phút |
| 📗 [Hướng dẫn sử dụng](./USAGE.md) | Tất cả các lệnh, mẫu và chế độ CLI |
| 📦 [Gói](./BUNDLES.md) | Bộ sưu tập kỹ năng giám tuyển |
| 🔧 [Runbook hệ thống](../Operations/RUNBOOK.md) | Tham khảo hoạt động |
| 🔌 [Sidecar MCP cục bộ](../specs/LOCAL-MCP-SIDECAR.md) | Công cụ hệ thống tập tin và viết cấu hình |