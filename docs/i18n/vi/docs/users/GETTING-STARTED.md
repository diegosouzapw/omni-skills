# 🚀 Getting Started (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Cài đặt kỹ năng, xác minh thiết lập và kích hoạt kỹ năng AI đầu tiên của bạn trong vòng chưa đầy 2 phút.**---

## 📊 Current Catalog Status

| Số liệu | Giá trị |
|:-------|:------|
| Kỹ năng được xuất bản |**32**trên 15 danh mục đang hoạt động bao gồm kiến ​​trúc, thiết kế, bảo mật, DevOps, kỹ thuật AI, v.v. |
| Các gói được xác định |**7**(tất cả đều được hỗ trợ đầy đủ bởi các kỹ năng đã xuất bản) |
| Máy khách có khả năng cài đặt |**7**(Mã Claude, Con trỏ, Gemini CLI, Codex CLI, Kiro, Phản trọng lực, OpenCode) |
| Máy khách có khả năng cấu hình MCP |**16**trên 33 mục tiêu cấu hình MCP hạng nhất |---

## 📦 Step 1 — Install

### Bắt đầu nhanh

```bash
npx omni-skills
```

Trong một thiết bị đầu cuối tương tác, thao tác này hiện sẽ mở trình cài đặt được hướng dẫn thay vì âm thầm giả định một ứng dụng khách.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Điều này mở ra trung tâm thiết bị đầu cuối có thương hiệu để cài đặt, khám phá, khởi động MCP, API và A2A.### 🎯 Default Install (Antigravity Outside TTY)

Bên ngoài TTY, trình cài đặt không có đối số vẫn mặc định là `~/.gemini/antigraveity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Các gói khởi đầu hiện đã được hỗ trợ đầy đủ, bao gồm `devops` và `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Kiểm tra xem các kỹ năng đã đặt đúng chỗ chưa:```bash
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

Hoặc sử dụng chẩn đoán tích hợp:```bash
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

Cung cấp cho tác nhân các công cụ hệ thống tệp để phát hiện máy khách, cài đặt/gỡ bỏ các kỹ năng và viết cấu hình MCP:```bash
npx omni-skills mcp stream --local
```

Bạn cũng có thể định cấu hình MCP cho các máy khách không phải là mục tiêu cài đặt kỹ năng:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Hiển thị danh mục kỹ năng dưới dạng API HTTP chỉ đọc:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Khám phá, đề xuất, lập kế hoạch cài đặt, thăm dò và phát trực tuyến giữa các tác nhân:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Kỹ năng là một sổ tay đánh dấu có cấu trúc (`SKILL.md`) cung cấp cho tác nhân AI:

| Thành phần | Mục đích |
|:----------|:--------|
| 📋**Vấn đề trước**| Siêu dữ liệu có thể đọc được bằng máy (tên, danh mục, thẻ, công cụ, rủi ro) |
| 📝**Cơ thể**| Hướng dẫn, các bước, rào chắn và ví dụ dành riêng cho nhiệm vụ |
| 📚**Tài liệu tham khảo**| Tài liệu hỗ trợ đại lý có thể tham khảo trong quá trình thực hiện |
| 🎨**Tài sản**| Biểu tượng, hình ảnh hoặc tài nguyên đóng gói khác |---

## ➡️ Next Steps

| Tài liệu | Bạn sẽ học được gì |
|:----|:-------------------|
| 🧭 [Hướng dẫn sử dụng CLI](CLI-USER-GUIDE.md) | Tham chiếu lệnh đầy đủ để cài đặt, thời gian chạy, cấu hình và chẩn đoán |
| 📗 [Hướng dẫn sử dụng](USAGE.md) | Tất cả các lệnh CLI, mẫu lời nhắc và chế độ thời gian chạy |
| 📦 [Gói](BUNDLES.md) | Bộ sưu tập kỹ năng được tuyển chọn và tính khả dụng của chúng |
| 📚 [Danh mục](../CATALOG.md) | Danh mục các kỹ năng đã xuất bản được tạo tự động |
| 📖 [Trung tâm tài liệu](../README.md) | Bản đồ tài liệu đầy đủ |
| 🔧 [Runbook hệ thống](../Operations/RUNBOOK.md) | Tham khảo hoạt động |