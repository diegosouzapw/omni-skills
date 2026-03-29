# Client Support Matrix (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Tài liệu này theo dõi bề mặt khách hàng thực tế của Omni Skills qua ba đầu vào:

1. bảng kiểm kê `9router` trong `/home/diegosouzapw/dev/proxys/9router`
2. Việc triển khai sidecar Omni Skills MCP hiện tại
3. tài liệu chính thức hiện tại cho từng khách hàng hoặc IDE

Đó là nguồn thông tin chính xác để quyết định khách hàng nào nhận được hỗ trợ `config-mcp` hạng nhất, khách hàng nào chỉ ở chế độ thủ công và khách hàng nào chỉ là ứng cử viên.---

## Scope

Ma trận này nói về**cấu hình máy khách cho MCP**.

Nó không giống như:

- Hỗ trợ cài đặt kỹ năng
- Khả năng tương thích API
- Hỗ trợ A2A
- ACP hoặc các giao thức không phải MCP khác

Một số sản phẩm trong ma trận sử dụng MCP nhưng**không**có “thư mục kỹ năng” có ý nghĩa nên chúng chỉ nhận được hỗ trợ config-target.---

## 9router Inventory

Bảng điều khiển `9router` hiện nhóm các công cụ CLI hoặc ứng dụng khách IDE này:

- Mã Claude
- Codex OpenAI
- Nhà máy Droid
- OpenClaw
- Con trỏ
- Cline
- Mã Kilo
- Tiếp tục
- Phản trọng lực
- Phi công phụ GitHub
- Mã mở
- Kiro AI

Nguồn địa phương:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Những khách hàng này hiện có câu chuyện rõ ràng, ổn định trong Omni Skills thông qua `config-mcp --target ...`.

Tổng số thực hiện hiện tại:

-**7 máy khách có khả năng cài đặt**
-**16 máy khách có khả năng cấu hình**
-**33 mục tiêu cấu hình hạng nhất**
-**19 hồ sơ cấu hình**

| Khách hàng | Trạng thái | Mục tiêu cấu hình | Ghi chú |
|:-------|:-------|:---------------|:------|
| Mã Claude | ✅ Hạng nhất | `không gian làm việc`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Đã gõ cấu hình `mcpServers` với các điều khiển cho phép/từ chối dành riêng cho Claude |
| Con trỏ | ✅ Hạng nhất | `không gian làm việc con trỏ`, `người dùng con trỏ` | Mục tiêu JSON `mcpServers` |
| Mã VS | ✅ Hạng nhất | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Sử dụng root `server` |
| Song Tử CLI | ✅ Hạng nhất | `người dùng gemini`, `không gian làm việc gemini` | Cài đặt JSON + điều khiển cho phép/loại trừ MCP toàn cầu |
| Phản lực hấp dẫn | ✅ Hạng nhất | `người dùng phản trọng lực` | Mục tiêu `mcpServers` JSON |
| Kiro | ✅ Hạng nhất | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Các trường bị vô hiệu hóa/tự động phê duyệt dành riêng cho Kiro |
| Codex CLI | ✅ Hạng nhất | `người dùng codex` | Bảng TOML `mcp_servers` |
| Tiếp tục | ✅ Hạng nhất | `tiếp tục không gian làm việc` | Tài liệu máy chủ YAML chuyên dụng |
| Lướt ván buồm | ✅ Hạng nhất | `người dùng lướt ván` | Mục tiêu JSON `mcpServers` với các mục nhập `serverUrl` |
| Mã mở | ✅ Hạng nhất | `opencode-workspace`, `opencode-user` | `opencode.json` / cấu hình người dùng chính thức sử dụng `mcp` cấp cao nhất |
| Cline | ✅ Hạng nhất | `người dùng cline` | `cline_mcp_settings.json` với `mcpServers` |
| GitHub phi công phụ CLI | ✅ Hạng nhất | `người dùng phi công phụ`, `người dùng phụ phi công` | `mcp-config.json` hoặc phạm vi repo `.github/mcp.json` |
| Mã Kilo | ✅ Hạng nhất | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI sử dụng `kilo.json`; tích hợp không gian làm việc sử dụng `.kilocode/mcp.json` |
| Zed | ✅ Hạng nhất | `zed-không gian làm việc` | `.zed/settings.json` với `context_servers` |
| Junie | ✅ Hạng nhất | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` hoặc `~/.junie/mcp/mcp.json` sử dụng `mcpServers` |
| Ngỗng | ✅ Hạng nhất | `người dùng ngỗng` | `~/.config/goose/config.yaml` sử dụng đối tượng `extensions` cấp cao nhất cho các tiện ích mở rộng MCP liên tục |---

## Current Gaps

Những khách hàng này từ `9router`**chưa**là mục tiêu của nhà văn hạng nhất trong Omni Skills:

| Khách hàng | Trạng thái hiện tại | Tại sao |
|:-------|:--------------|:----|
| Nhà máy Droid | ⚠️ Chỉ thủ công/tùy chỉnh | Không tìm thấy hình dạng cấu hình MCP công khai ổn định nào trong tài liệu chính trong lần vượt qua này |
| OpenClaw | ⚠️ Chỉ thủ công/tùy chỉnh | Vấn đề tương tự như Factory Droid |

Sidecar vẫn có thể được sử dụng với `--file` hoặc các đường dẫn tùy chỉnh cho người dùng nâng cao, nhưng Omni Skills không nên tạo ra các nhà văn hạng nhất nếu không có tài liệu cấu hình công khai ổn định.

Hai sản phẩm liền kề giờ đây đã được hiểu rõ hơn nhưng vẫn cố tình ngăn chặn máy ghi tự động hạng nhất:

| Khách hàng | Trạng thái hiện tại | Tại sao |
|:-------|:--------------|:----|
| Trợ lý AI JetBrains | 🟡 Hướng dẫn sử dụng/đoạn trích | Hỗ trợ MCP chính thức tồn tại, nhưng quy trình làm việc được ghi lại được điều khiển bởi giao diện người dùng/điều khiển nhập thay vì mục tiêu tệp công khai ổn định |
| Người đưa thư | 🟡 Hướng dẫn sử dụng/đoạn trích | Hỗ trợ MCP chính thức tồn tại, nhưng cấu hình được quản lý bên trong UX sản phẩm thay vì mục tiêu tệp công khai ổn định |
| Mã Roo | 🟡 Ứng viên | Tài liệu MCP công khai tồn tại, nhưng hợp đồng đường dẫn tệp đa nền tảng mạnh mẽ vẫn cần xác nhận trước khi thêm người viết |---

## Support Policy

Omni Skills hiện tuân theo bộ quy tắc này:

1.**Có khả năng cài đặt**nếu tồn tại thư mục kỹ năng ổn định.
2.**Có khả năng cấu hình**nếu tồn tại định dạng tệp cấu hình MCP công khai ổn định.
3.**Chỉ thủ công/đoạn trích**nếu sản phẩm hỗ trợ MCP nhưng hợp đồng công khai là UI-first, import-first hoặc vẫn quá không ổn định.

Đây cũng là câu trả lời thực tế cho một trong những câu hỏi về kiến ​​trúc trước đó: dự án chỉ nên tiếp tục phát triển các tác giả hạng nhất khi tồn tại một định dạng công khai ổn định, mặt khác thì dựa vào một nhóm nhỏ hơn các họ xuất chuẩn cùng với các công thức nấu ăn và đoạn trích.### Canonical config families already in use

- JSON `mcpServers`
- `máy chủ` JSON
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Khách hàng / IDE | Khuyến nghị | Lý do |
|:--------------|:---------------|:-------|
| Trợ lý AI JetBrains | 🟡 Hiện tại hãy giữ lại hướng dẫn sử dụng/đoạn trích | Hỗ trợ chính thức là có thật, nhưng UX vẫn được quản lý bởi sản phẩm thay vì hợp đồng tệp trước tiên |
| Người đưa thư | 🟡 Hiện tại hãy giữ lại hướng dẫn sử dụng/đoạn trích | Thiết lập chính thức là giao diện người dùng đầu tiên và không gian làm việc được quản lý thay vì hợp đồng tệp trước tiên |
| Mã Roo | 🟡 Điều tra tiếp theo | Hỗ trợ MCP đầy hứa hẹn, nhưng sự an toàn của người viết phụ thuộc vào xác nhận đường dẫn cấu hình mạnh hơn |
| Trò chuyện phi công phụ mã VS | 🟢 Đã được bảo hiểm gián tiếp | Các vị trí tệp MCP VS Code cơ bản đã được hỗ trợ |
| Zed ACP / Máy chủ đại lý | 🟡 Đường đua riêng | Đây là lãnh thổ ACP/agent-server, không chỉ viết cấu hình MCP |---

## Official Sources Used

Các quyết định trên đã được kiểm tra dựa trên các nguồn chính hiện tại:

- [Mã Claude nhân loại MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Con trỏ MCP](https://docs.cursor.com/tools)
- [Tiếp tục MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Mã Kilo MCP](https://kilo.ai/docs/automate/mcp/USE-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [MCP trợ lý AI của JetBrains](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Tệp cấu hình Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Tiện ích mở rộng phiên Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [Thiết lập MCP của Postman](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Mã Roo MCP](https://docs.roocode.com/features/mcp)
- [Hướng dẫn mở rộng VS Code MCP](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Đăng ký MCP chính thức](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Xe phụ Omni Skills hiện tại có chủ ý phân biệt ba cấp độ hỗ trợ:

-**máy khách có khả năng cài đặt**
  - có thư mục kỹ năng đã biết và có thể sử dụng `install_skills`
-**máy khách có khả năng cấu hình**
  - có mục tiêu cấu hình ổn định và có thể sử dụng `configure_client_mcp`
-**ứng dụng khách thủ công/đoạn trích**
  - được ghi lại, nhưng chưa có trình ghi tệp hạng nhất an toàn

Sự tách biệt đó giữ cho sản phẩm luôn trung thực.

Không phải mọi sản phẩm có khả năng MCP đều được coi là mục tiêu cài đặt kỹ năng.
Hiện tại, giai đoạn mở rộng được coi là đã hoàn tất: các phần bổ sung trong tương lai chỉ sẽ xuất hiện nếu chúng xóa được cùng một thanh hợp đồng công cộng mà Goose, Junie, Continue và Windsurf hiện đã rõ ràng.