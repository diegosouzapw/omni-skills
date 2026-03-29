# 🔌 Local MCP Sidecar (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Tiện ích mở rộng chế độ cục bộ tùy chọn cho `@omni-skills/server-mcp` bổ sung các công cụ nhận biết hệ thống tệp để phát hiện ứng dụng khách, quản lý kỹ năng và tạo cấu hình MCP.**---

## 📊 Status

| Tính năng | Tiểu bang |
|:--------|:------|
| ✅ Công cụ danh mục chỉ đọc | Đã triển khai |
| ✅ Công cụ cục bộ nhận biết hệ thống tập tin | Đã triển khai |
| ✅ 3 phương tiện (stdio/suối/sse) | Đã triển khai |
| ✅ Viết trong danh sách được phép | Đã triển khai |
| ✅ Mặc định xem trước trước khi ghi | Đã triển khai |
| ✅ Viết cấu hình MCP nhận biết khách hàng | Đã triển khai |
| ✅ Xác thực HTTP + giới hạn tốc độ | Đã triển khai |
| ✅ Chữ ký và tổng kiểm tra tại thời điểm phát hành | Được triển khai cho các kho lưu trữ đã tạo và được API/MCP hiển thị |
| 🟡 Thực thi chữ ký thời gian ghi cục bộ | Chưa được thi hành; xem trước và ghi chế độ cục bộ từ thanh toán cục bộ đáng tin cậy |
| 🟢 Bảo hiểm khách hàng hiện tại | 7 máy khách có khả năng cài đặt, 16 máy khách có khả năng cấu hình, 33 mục tiêu cấu hình, 19 cấu hình cấu hình |---

## 🎯 Purpose

Chế độ cục bộ thêm**công cụ nhận biết hệ thống tệp**lên trên bề mặt danh mục MCP chỉ đọc hiện có. Sử dụng nó khi một đại lý cần:

- 🕵️ Phát hiện các ứng dụng khách AI cục bộ tương thích
- 📋 Kiểm tra các kỹ năng đã cài đặt
- 👁️ Xem trước cài đặt hoặc gỡ bỏ kỹ năng (chạy thử)
- 📦 Áp dụng cài đặt hoặc gỡ bỏ kỹ năng cục bộ
- ⚙️ Viết tệp cấu hình MCP cục bộ sau khi xem trước

Nó cố tình tách hai mối quan tâm:

-**mục tiêu cài đặt kỹ năng**
  khách hàng có thư mục kỹ năng ổn định có thể sử dụng `install_skills`
-**Mục tiêu cấu hình MCP**
  máy khách hoặc IDE có định dạng cấu hình MCP được ghi lại ổn định, ngay cả khi chúng không có thư mục kỹ năng---

## 🔌 Transports

| Vận tải | Giao thức | Trường hợp sử dụng |
|:----------|:---------|:----------|
| `stdio` | Ống | Tích hợp khách hàng trực tiếp |
| `stream` | HTTP có thể phát trực tuyến | Máy khách HTTP hiện đại |
| `sse` | Sự kiện do máy chủ gửi | Khách hàng kế thừa |---

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

> Tự động đặt tất cả các lệnh `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Khi chế độ cục bộ được bật, các công cụ bổ sung này sẽ khả dụng:

| Công cụ | Mô tả | Mặc định |
|:------|:-------------|:--------|
| 🕵️ `phát hiện khách hàng` | Quét các ứng dụng khách AI và đường dẫn kỹ năng/cấu hình của chúng | — |
| 📋 `list_installed_skills` | Kiểm tra các kỹ năng đã cài đặt cho một khách hàng cụ thể | — |
| 📦 `install_skills` | Cài đặt kỹ năng vào thư mục kỹ năng của khách hàng | 🔍 chạy khô |
| 🗑️ `remove_skills` | Xóa các kỹ năng đã cài đặt khỏi máy khách | 🔍 chạy khô |
| ⚙️ `configure_client_mcp` | Viết cấu hình MCP cho một khách hàng cụ thể | 🔍 chạy khô |

> ⚠️ `install_skills`, `remove_skills` và `configure_client_mcp` mặc định là**chạy thử**khi bỏ qua `dry_run`.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Khách hàng | Đường dẫn |
|:-------|:------|
| 🔵 Mã Claude | `~/.claude/skills` |
| 🔵 Con trỏ | `~/.cursor/skills` |
| 🟡 Song Tử CLI | `~/.gemini/skills` |
| 🟣 Phản trọng lực | `~/.gemini/anti Gravity/skills` |
| 🟢 Kiro | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` hoặc `$CODEX_HOME/skills` |
| ⚪ Mã mở | `<workspace>/.opencode/skills` |

7 mục tiêu này là đích cài đặt hạng nhất duy nhất hiện nay.### ⚙️ MCP Config Files

| Mục tiêu | Định dạng |
|:-------|:-------|
| `~/.claude/settings.json` | Cài đặt mã Claude JSON |
| `<workspace>/.claude/settings.json` | Cài đặt dự án Claude JSON |
| `~/.claude.json` | Di sản Claude JSON (`mcpServers`) |
| `~/Thư viện/Hỗ trợ ứng dụng/Claude/claude_desktop_config.json` | Claude Desktop JSON (dành riêng cho hệ điều hành) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<workspace>/.cursor/mcp.json` | Không gian làm việc của con trỏ JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Người dùng Gemini JSON (`mcpServers`) |
| `<workspace>/.gemini/settings.json` | Dự án Gemini JSON (`mcpServers`) |
| `~/.gemini/antirabity/mcp.json` | JSON phản trọng lực (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Người dùng Kiro JSON (`mcpServers`) |
| `<workspace>/.kiro/settings/mcp.json` | Dự án Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<không gian làm việc>/.mcp.json` | JSON (`mcpServers`) |
| `<không gian làm việc>/opencode.json` | Không gian làm việc OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | Người dùng OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<không gian làm việc>/.github/mcp.json` | Kho lưu trữ GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Người dùng Kilo CLI JSON (`mcp`) |
| `<không gian làm việc>/kilo.json` | Dự án Kilo CLI JSON (`mcp`) |
| `<không gian làm việc>/.kilocode/mcp.json` | Không gian làm việc của Kilo Code JSON (`mcpServers`) |
| `<workspace>/.continue/mcpServers/omni-skills.yaml` | Tiếp tục không gian làm việc YAML (`mcpServers`) |
| `<workspace>/.junie/mcp/mcp.json` | Dự án Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Người dùng Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Lướt ván buồm JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Ngỗng YAML (`tiện ích mở rộng`) |
| `<workspace>/.zed/settings.json` | Không gian làm việc Zed JSON (`context_servers`) |
| `<không gian làm việc>/.vscode/mcp.json` | JSON (`máy chủ`) |
| `~/.config/Code/User/mcp.json` | Người dùng mã VS JSON (`máy chủ`) |
| `~/.config/Code - Người trong cuộc/Người dùng/mcp.json` | Người dùng VS Code Insiders JSON (`servers`) |
| `<workspace>/.devcontainer/devcontainer.json` | JSON của Dev Container lồng nhau (`customizations.vscode.mcp.servers`) |
| Gốc máy khách `mcp.json` | JSON (định dạng cho mỗi khách hàng) |

Điều đó mang lại cho sidecar:

-**16 máy khách hoặc IDE có khả năng cấu hình**
-**33 đường dẫn mục tiêu hạng nhất**
-**19 cấu hình định dạng**

Phạm vi phủ sóng cấu hình hạng nhất hiện tại:

- Mã Claude và Máy tính để bàn Claude
- Con trỏ
- Vùng chứa mã VS và Dev
- Song Tử CLI
- Phản trọng lực
- Kiro
- Codex CLI
- Tiếp tục
- Junie
- Lướt ván buồm
- Ngỗng
- Mã mở
- Cline
- GitHub phi công phụ CLI
- Mã Kilo
- Zed

Các ứng cử viên chỉ có thủ công hoặc đoạn trích vẫn cố tình nằm ngoài nhóm tác giả hạng nhất cho đến khi hợp đồng cấu hình công khai của họ đủ ổn định.### 🧭 Expansion Policy

Omni Skills hiện coi hỗ trợ khách hàng là mô hình ba cấp độ:

1.**có khả năng cài đặt**
   Có một thư mục kỹ năng ổn định nên CLI và sidecar có thể cài đặt kỹ năng trực tiếp.
2.**có khả năng cấu hình**
   Tồn tại định dạng cấu hình MCP được ghi lại, ổn định, vì vậy `config-mcp` có thể xem trước và ghi tệp hạng nhất.
3.**chỉ thủ công hoặc đoạn trích**
   Sản phẩm rõ ràng hỗ trợ MCP dưới một số hình thức, nhưng các tài liệu công cộng vẫn chưa biện minh cho một trình ghi tự động an toàn.

Đây là lý do tại sao các ứng dụng khách như Trợ lý AI JetBrains vẫn chỉ sử dụng thủ công/đoạn mã, trong khi Roo Code và Postman nằm ngoài nhóm tác giả hạng nhất cho đến khi câu chuyện hợp nhất tự động an toàn của họ đủ mạnh cho dự án này.---

## 🔒 Allowlist Model

Sidecar cục bộ chỉ viết theo**danh sách cho phép rõ ràng**.### 🟢 Default allowlist:

- Nguồn gốc khách hàng đã biết dưới `$HOME`
- `~/.codeium` dành cho cấu hình người dùng Windsurf
- `~/.copilot` cho GitHub Copilot CLI
- `~/.cline` cho Cline CLI
- `~/.config/goose` cho cấu hình Goose
- `~/.config/kilo` và `~/.config/opencode` cho cấu hình Kilo/OpenCode CLI
- `$CODEX_HOME` (hoặc `~/.codex` nếu không được đặt)
- Gốc không gian làm việc hiện tại
- `<workspace>/.agents`
- `<không gian làm việc>/.github`
- `<không gian làm việc>/.kilocode`
- `<workspace>/.opencode`
- `<workspace>/.zed`
- `<workspace>/.continue`
- `<không gian làm việc>/.vscode`### ➕ Extend the allowlist:

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

Trình bao bọc CLI được hỗ trợ bởi sidecar giúp cho việc tạo cấu hình MCP có thể truy cập được mà không cần các lệnh gọi JSON-RPC trực tiếp:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Hành vi mặc định là chỉ xem trước. `--write` áp dụng cấu hình cho đường dẫn đích đã được giải quyết trong danh sách cho phép.### 🌊 Windsurf

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

Công cụ `configure_client_mcp` cũng có thể ghi các cài đặt dành riêng cho Claude khi bạn vượt qua:

- ` được phép_mcp_servers`
- `denied_mcp_servers`
- `quyền_từ chối`
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

Đối với các mục tiêu VS Code và Dev Container, `configure_client_mcp` cũng có thể viết:

- `sandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowhosts`
- `dev.watch`
- `dev.debug.type`

Điều này ánh xạ tới hướng dẫn Mã VS hiện tại dành cho máy chủ MCP stdio đóng hộp cát cục bộ.### 🧰 Cross-Client Entry Options

`configure_client_mcp` hiện hỗ trợ siêu dữ liệu mục nhập phong phú hơn trên các cấu hình được hỗ trợ:

- `tiêu đề`
- `env`
- `env_file`
- `cwd`
- `thời gian chờ_ms`
- `mô tả`
- `bao gồm_tools`
- `loại trừ_tools`
- `bị vô hiệu hóa`
- `tin tưởng`

Tùy chọn dành riêng cho hồ sơ:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Song Tử: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS Code và Dev Container: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` trả về `công thức nấu ăn` cùng với bản xem trước hoặc cấu hình được áp dụng.

Các công thức nấu ăn này là các khối hướng dẫn nhận thức của khách hàng, ví dụ:

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp thêm ...`
- công thức chỉnh sửa tệp thủ công cho Cursor, VS Code, Kiro và Claude Desktop

Chiến lược tổng thể bây giờ là thận trọng có chủ ý:

- tái sử dụng một tập hợp nhỏ các họ cấu hình chuẩn nếu có thể
- chỉ giữ lại những người viết riêng khi tài liệu chính thức yêu cầu một hình dạng riêng biệt
- tránh phát minh ra các trình soạn thảo tự động cho các mục tiêu không có giấy tờ---

## 🔐 Hosted HTTP Hardening

Việc truyền tải HTTP hỗ trợ các điều khiển dựa trên môi trường tương tự như API danh mục:

| Biến | Mục đích |
|:----------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Xác thực mã thông báo mang |
| `OMNI_SKILLS_HTTP_API_KEYS` | Khóa API được phân tách bằng dấu phẩy |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Xem xét nội bộ thời gian chạy chỉ dành cho quản trị viên |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Số yêu cầu tối đa trên mỗi cửa sổ |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Cửa sổ giới hạn tốc độ tính bằng ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Bật ghi nhật ký kiểm tra |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Viết nhật ký kiểm tra vào một tập tin |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Hạn chế nguồn gốc trình duyệt |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Hạn chế IP nguồn được phép |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Trả về `503` cho các tuyến không phải quản trị viên, phi sức khỏe |

> 🟢 `/healthz` vẫn mở. `/mcp`, `/sse` và `/messages` yêu cầu xác thực khi được bật. `/admin/runtime` yêu cầu mã thông báo quản trị khi được định cấu hình.---

## 🌍 Official Docs That Shape Support Decisions

Nhóm người viết hiện tại và ranh giới chỉ dành cho thủ công đã được kiểm tra dựa trên các tài liệu sản phẩm chính thức, bao gồm:

- Mã Claude nhân loại MCP
- OpenAI Codex CLI và OpenAI Docs MCP
- Tài liệu MCP con trỏ
- Tiếp tục tài liệu MCP
- Tài liệu Kiro MCP
- Tài liệu MCP OpenCode
- Tài liệu Cline MCP
- Tài liệu Kilo Code MCP
- Tài liệu CLI của GitHub Copilot
- Tài liệu Zed MCP
- Tài liệu MCP Mã VS
- Tài liệu MCP của Trợ lý JetBrains AI

Những tài liệu đó là lý do tại sao một số khách hàng nhận được trình soạn thảo tự động hạng nhất trong khi những khách hàng khác hiện chỉ duy trì đoạn trích.