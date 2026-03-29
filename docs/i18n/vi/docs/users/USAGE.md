# 📗 Usage Guide (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Mọi thứ bạn cần để gọi các kỹ năng, chạy dịch vụ và vận hành thời gian chạy Omni Skills.**

Để biết quy trình vận hành đầy đủ, hãy xem [🔧 System Runbook](../Operations/RUNBOOK.md).
Để biết bản đồ lệnh đầy đủ của người dùng cuối, hãy xem [🧭 CLI User Guide](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Trạng thái | Chi tiết |
|:-------|:--------|
| ✅**Có sẵn ngay bây giờ**| 32 kỹ năng được xuất bản về thiết kế, kiến ​​trúc, gỡ lỗi, tài liệu, OSS, bảo mật, DevOps, kỹ thuật AI, dữ liệu, công cụ và quy trình làm việc của máy học |
| 📦**Gói**| ``essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` và `oss-maintainer` hiện đã được hỗ trợ đầy đủ |
| 🔌**Phạm vi tiếp cận MCP**| 7 máy khách có khả năng cài đặt, 16 máy khách có khả năng cấu hình, 33 mục tiêu cấu hình hạng nhất, 19 cấu hình cấu hình |
| 🤖**Độ bền A2A**| Độ bền cục bộ của bộ nhớ, JSON hoặc SQLite, tiếp tục khởi động lại, trình thực thi quy trình tùy chọn và phối hợp thuê tham gia dành cho nhân viên dùng chung |---

## 🖥️ Invocation by Client

| Khách hàng | Cách gọi | Con đường Kỹ năng |
|:-------|:-------------|:-------------|
| 🔵**Mã Claude**| `>> /skill-name giúp tôi...` | `~/.claude/skills/` |
| 🟡**Song Tử CLI**| `Sử dụng @skill-name để...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Sử dụng @skill-name để...` | `~/.codex/skills/` |
| 🟢**Kiro**| Kỹ năng tự động tải theo yêu cầu | `~/.kiro/skills/` |
| 🟣**Phản trọng lực**| `Sử dụng @skill-name để...` | `~/.gemini/anti Gravity/skills/` |
| 🔵**Con trỏ**| `@skill-name` trong trò chuyện | `~/.cursor/skills/` |
| ⚪**Mã mở**| `chạy mã mở @skill-name` | `.opencode/skills/` |
| ⬛**Phi công phụ**| Dán nội dung kỹ năng thủ công | Không áp dụng |

Các khách hàng như Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline và Kilo Code chủ yếu sử dụng luồng `config-mcp` thay vì thư mục kỹ năng.---

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

>**🔥 Ghi chú:**
> - Trong thiết bị đầu cuối tương tác, `npx omni-skills` giờ đây mở ra luồng cài đặt có hướng dẫn
> - `npx omni-skills ui` mở vỏ Ink trực quan với các hành động cài đặt, khám phá và khởi chạy dịch vụ
> - shell trực quan duy trì các lượt cài đặt gần đây, các lần khởi chạy dịch vụ gần đây, các mục yêu thích và các cài đặt trước được đặt tên trong `~/.omni-skills/state/ui-state.json`
> - Ngoài TTY, cài đặt đầy đủ vẫn là mặc định khi không có bộ chọn nào được cung cấp
> - `--skill` chỉ cài đặt các kỹ năng đã xuất bản đã chọn
> - `--bundle` mở rộng gói và cài đặt các thành viên đã xuất bản được khai báo trong gói được quản lý
> - `find` hỗ trợ hơn 12 cờ lọc: `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk`, v.v.
> - `config-mcp` là con đường phù hợp cho các sản phẩm có khả năng MCP không có thư mục kỹ năng hạng nhất---

## 🔌 Runtime Commands

CLI là một công cụ vận hành hợp nhất, không chỉ là một trình cài đặt.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Vỏ trực quan hỗ trợ:

- hướng dẫn cài đặt với máy khách đã biết hoặc lựa chọn đường dẫn tùy chỉnh
- tìm kiếm rồi cài đặt mà không cần ghi nhớ cờ
- luồng ghi và xem trước cấu hình máy khách MCP được hướng dẫn
- Khởi động có hướng dẫn MCP, API và A2A
- các lần cài đặt và khởi chạy lại dịch vụ gần đây
- cài đặt trước cài đặt và dịch vụ đã lưu
- kỹ năng và gói yêu thích### 🩺 Diagnostics

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

| # | Mẹo |
|:--|:----|
| 1️⃣ | Tham khảo kỹ năng theo tên trong lời nhắc của bạn |
| 2️⃣ | Cung cấp bối cảnh tạo tác, mã hoặc thiết kế chính xác mà tác nhân cần |
| 3️⃣ | Ưu tiên `--skill` để có dung lượng cài đặt tối thiểu |
| 4️⃣ | Sử dụng `doctor` và `smoke` trước khi gỡ lỗi các vấn đề về đóng gói hoặc thời gian chạy |
| 5️⃣ | Sử dụng các gói làm bản cài đặt miền được quản lý ngay bây giờ vì tất cả bảy gói khởi đầu đều được hỗ trợ đầy đủ |
| 6️⃣ | Sử dụng `find --install --yes` để khám phá + cài đặt trong một luồng |
| 7️⃣ | Xem [runbook](../Operations/RUNBOOK.md) để biết xác thực, giới hạn tốc độ, ký và xác minh env vars |