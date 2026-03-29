# 📖 Omni Skills — Documentation Hub (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Tài liệu tham khảo chính cho việc sử dụng, vận hành, mở rộng và tìm hiểu nền tảng Omni Skills hiện tại.**

Các tệp cộng đồng tiêu chuẩn nằm trong thư mục gốc của kho lưu trữ:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| Khu vực | Tiểu bang | Chi tiết |
|:------|:------|:--------|
| 🏗️**Thời gian chạy**| ✅ Hiện tại | CLI hợp nhất, Ink visual shell, API, MCP và A2A đều được vận chuyển từ cùng một gói |
| 📦**Danh mục**| ✔️ 32 kỹ năng | 32 kỹ năng `L3` được xuất bản trên 15 danh mục danh mục đang hoạt động và 7 gói được hỗ trợ đầy đủ |
| 🎯**Cài đặt**| ✅ Hiện tại | Cài đặt TTY có hướng dẫn, `--skill` và `--bundle` chọn lọc, hỗ trợ đường dẫn tùy chỉnh và cài đặt theo hướng khám phá |
| 🌐**API**| ✅ Hiện tại | API đăng ký chỉ đọc với tính năng xác thực, thời gian chạy của quản trị viên, giới hạn tốc độ, danh sách cho phép CORS/IP, chế độ bảo trì và tải xuống |
| 🔌**MCP**| ✅ Hiện tại | `stdio` · `stream` · `sse`, chế độ sidecar cục bộ, 7 máy khách có khả năng cài đặt, 16 máy khách có khả năng cấu hình, 33 mục tiêu cấu hình và 19 cấu hình cấu hình |
| 🤖**A2A**| ✅ Hiện tại | Thời gian chạy cục bộ đầu tiên đơn giản với độ bền JSON/SQLite, khởi động lại, phát trực tuyến SSE, hủy, chế độ thực thi bên ngoài và phối hợp thuê tùy chọn khi được bật rõ ràng |
| 🛡️**An ninh**| ✅ Hiện tại | Máy quét tĩnh, ClamAV/VirusTotal tùy chọn, tạo phẩm phát hành đã ký, tổng kiểm tra lưu trữ và xác minh thời gian phát hành |
| 📋**Phân loại**| ✅ Hiện tại | Phân loại kinh điển, sự trưởng thành, mức độ lan truyền chất lượng ngữ nghĩa, mức độ lan truyền các phương pháp hay nhất và tính điểm bảo mật |
| 📁**Lưu trữ**| ✅ Hiện tại | Lưu trữ `.zip` và `.tar.gz` theo kỹ năng với bảng kê khai tổng kiểm tra SHA-256 |
| 🔐**Ký**| ✅ Hiện tại | Chữ ký tách rời được thi hành trên thẻ phát hành; luồng cài đặt cục bộ sử dụng cùng một siêu dữ liệu tổng kiểm tra và bảng kê khai |
| 🧬**Lưu lượng nạp**| ✅ Hiện tại | Kỹ năng bản địa thuộc `skills/`; Tự động hóa PR xem xét chúng và đề xuất các dẫn xuất được tăng cường Omni trong `skills_omni/` |## 🔭 Current Project State

Hiện tại, nền tảng đang ở trạng thái dự án đang hoạt động và làn sóng mở rộng danh mục thứ hai đã có trong danh mục. Dự án bây giờ sẽ được đọc dưới dạng đường cơ sở hoạt động với các kênh mở rộng tùy chọn trong tương lai:

- `v0.1.2` công khai và `v0.0.1` riêng tư là sàn phát hành ổn định hiện tại
- danh mục hiện bao gồm 32 kỹ năng được xuất bản trên 15 danh mục đang hoạt động và 7 gói được hỗ trợ đầy đủ
- đầu vào bản ngữ và đầu ra `skills_omni/` được tuyển chọn đều đang hoạt động, bao gồm đầu vào bản địa đa ngôn ngữ và đầu ra được tuyển chọn chỉ bằng tiếng Anh
- các bề mặt giao thức, tự động phát hành và tự động hóa nâng cao riêng tư đang được sử dụng, không phải trong bootstrap

Việc mở rộng trong tương lai vẫn có chủ ý:

- đào sâu thêm `thiết kế`, `công cụ`, `data-ai` và `machine-learning`
- tránh mở lại các danh mục không phải mã gốc không hoạt động cho đến khi các bản nhạc gốc mã hiện tại có chiều sâu mạnh hơn
- giữ nguyên đường dẫn xem xét mức chất lượng và trình nâng cao trong khi thực hiện việc đó

Kế hoạch đó bây giờ được chia thành:

- đợt mở rộng đầu tiên đã hoàn thành trong [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- làn sóng mở rộng thứ hai đã hoàn thành trong [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- và lượng tồn đọng trong tương lai trong [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Những câu hỏi về kiến trúc này không còn “mở” trong thực tế nữa và hiện được coi là những quyết định của dự án:

1.**Bản phân phối vẫn ở dạng kê khai đầu tiên cộng với các bản lưu trữ có chữ ký**
   Tệp kê khai có thể đọc được bằng máy vẫn là hợp đồng được CLI, API, MCP và A2A sử dụng. Các kho lưu trữ có chữ ký cho mỗi kỹ năng là bề mặt tải xuống và phát hành được xếp lớp bên trên hợp đồng đó.
2.**Danh mục riêng tư hoặc cao cấp nên sử dụng lại cùng một lược đồ tệp kê khai**
   Xác thực và chính sách phải được xếp lớp bên ngoài, không phải bằng cách phân tách hình dạng bảng kê khai hoặc danh mục.
3.**Cấu hình MCP sẽ hội tụ trên một số dòng xuất chuẩn**
   Omni Skills hiện đã tiêu chuẩn hóa xung quanh JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` và TOML `[mcp_servers]`, trong khi chỉ giữ lại những người viết riêng khi tài liệu khách hàng chính thức yêu cầu cấu trúc khác.

Những quyết định đó phù hợp với tài liệu khách hàng và MCP chính thức hiện tại, bao gồm:

- Hướng dẫn hỗ trợ mở rộng và đăng ký MCP chính thức tại `modelcontextprotocol.io`
- Tài liệu OpenAI Docs MCP và Codex CLI tại `developers.openai.com` và `platform.openai.com`
- Tài liệu sản phẩm và tiện ích mở rộng VS Code MCP tại `code.visualstudio.com`
- tài liệu khách hàng cho Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman và JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Tài liệu | Bạn sẽ học được gì |
|:----|:-------------------|
| 📘 [Bắt đầu](users/GETTING-STARTED.md) | Cài đặt, xác minh và gọi kỹ năng đầu tiên của bạn |
| 🧭 [Hướng dẫn sử dụng CLI](users/CLI-USER-GUIDE.md) | Tham chiếu lệnh đầy đủ và các mẫu sử dụng CLI trong thế giới thực |
| 📗 [Hướng dẫn sử dụng](users/USAGE.md) | Lệnh CLI, chế độ cài đặt, lệnh thời gian chạy và luồng cấu hình MCP |
| 📦 [Gói](users/BUNDLES.md) | Các gói được tuyển chọn và tính khả dụng hiện tại của chúng |
| 📚 [Danh mục](CATALOG.md) | Danh mục các kỹ năng đã xuất bản được tạo tự động |
| 🔧 [Runbook hệ thống](hoạt động/RUNBOOK.md) | Xây dựng, phục vụ, bảo mật và khắc phục sự cố thời gian chạy |### 🏗️ If You Want to **Understand** the Runtime

| Tài liệu | Bạn sẽ học được gì |
|:----|:-------------------|
| 🗺️ [Lộ trình của tác nhân-bản địa](architecture/Agent-NATIVE-ROADMAP.md) | Sự phát triển kiến ​​trúc, các quyết định khép kín và các lĩnh vực mở rộng còn lại |
| 🧭 [Lộ trình CLI UX](architecture/CLI-UX-ROADMAP.md) | Kế hoạch lịch sử và hình dạng hiện tại của CLI được hướng dẫn và trực quan |
| 📐 [ADR-0001: Nền tảng không gian làm việc](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo và quyết định thời gian chạy chung |
| 🔬 [Phân tích cơ sở mã](architecture/CODEBASE-ANALYSIS.md) | Thành phần thời gian chạy hiện tại, số lượng và ranh giới hệ thống |
| 🌐 [Bề mặt API danh mục](specs/CATALOG-API.md) | Điểm cuối HTTP, lọc, quản trị và tải xuống |
| 🧩 [Trình cài đặt có hướng dẫn CLI](specs/CLI-GUIDED-INSTALLER.md) | Hợp đồng hành vi dành cho người cài đặt được hướng dẫn |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Vỏ trực quan mực, mô hình trạng thái và trung tâm dịch vụ |
| 🔌 [Sidecar MCP cục bộ](specs/LOCAL-MCP-SIDECAR.md) | Các công cụ nhận biết hệ thống tệp, mô hình danh sách cho phép và ghi cấu hình |
| 🧭 [Ma trận hỗ trợ khách hàng](specs/CLIENT-SUPPORT-MATRIX.md) | Các máy khách, người viết, mục tiêu thủ công và tài liệu tham khảo nguồn CLI và IDE được hỗ trợ |
| 📊 [Phân loại kỹ năng](specs/SKILL-CLASSIFICATION.md) | Phân loại, chẩn đoán tính điểm và tạo phẩm siêu dữ liệu |
| 🛡️ [Xác thực bảo mật](specs/SECURITY-VALIDATION.md) | Máy quét, lưu trữ, chữ ký và xác minh phát hành |
| 📋 [Thông số bản kê khai kỹ năng](specs/SKILL-MANIFEST.md) | Định dạng bảng kê khai có thể đọc được bằng máy và hợp đồng tương thích |### 🤝 If You Want to **Contribute**

| Tài liệu | Bạn sẽ học được gì |
|:----|:-------------------|
| 📝 [Hướng dẫn đóng góp](../CONTRIBUTING.md) | Quy trình làm việc Repo và kỳ vọng yêu cầu kéo |
| 🧾 [Quy trình PR kỹ năng](người đóng góp/SKILL-PR-WORKFLOW.md) | Tiếp nhận gốc, xử lý trình nâng cao tự động, xuất bản `skills_omni/` và kỳ vọng của người đánh giá |
| 📄 [Mẫu kỹ năng](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` với cấu trúc và nội dung cơ bản hiện tại |
| 🔬 [Giải phẫu kỹ năng](người đóng góp/SKILL-ANATOMY.md) | Cấu trúc và kỳ vọng về chất lượng cho một kỹ năng |
| ✅ [Thanh chất lượng](người đóng góp/QUALITY-BAR.md) | Tiêu chí chấp nhận cho kho lưu trữ |
| 🏆 [Playbook điểm cao](người đóng góp/HIGH-SCORE-PLAYBOOK.md) | Điều gì thúc đẩy điểm số trưởng thành, chất lượng, phương pháp hay nhất và bảo mật cao |
| 📋 [Tác vụ tồn đọng](tasks/README.md) | Tồn đọng triển khai chi tiết cho công việc công và tư còn lại |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Hệ nhị phân `omni-skills` được xuất bản là điểm truy cập công khai thống nhất.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

Để có giao diện lệnh hoàn chỉnh của người dùng cuối, hãy sử dụng [Hướng dẫn sử dụng CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Đường dẫn xây dựng phát ra các tệp máy có thể đọc được để điều khiển mọi bề mặt thời gian chạy:

| Cổ vật | Mục đích |
|:----------|:--------|
| `siêu dữ liệu.json` | Xác thực trên toàn kho lưu trữ và tóm tắt điểm |
| `skills_index.json` | Chỉ số kỹ năng chuẩn hóa cục bộ |
| `dist/catalog.json` | Danh mục đã xuất bản để tìm kiếm và niêm yết |
| `dist/bundles.json` | Định nghĩa gói có sẵn |
| `dist/manifests/<skill>.json` | Bản kê khai có thể đọc được bằng máy theo từng kỹ năng |
| `dist/archives/<skill>.zip` | Lưu trữ kỹ năng (zip) |
| `dist/archives/<skill>.tar.gz` | Kho lưu trữ kỹ năng (tarball) |
| `dist/archives/<skill>.checksums.txt` | Bảng kê khai tổng kiểm tra SHA-256 |

`dist/` vẫn được cam kết có mục đích. Các thành phần lạ được tạo này là một phần của hợp đồng cài đặt, API, MCP, A2A, smoke và phát hành.### 🌐 API

```bash
npx omni-skills api --port 3333
```

API đăng ký chỉ đọc cho các kỹ năng, gói, so sánh, lập kế hoạch cài đặt và tải xuống tạo phẩm.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Sidecar cục bộ hiện hỗ trợ ghi cấu hình MCP hạng nhất cho:

- Mã Claude
- Con trỏ
- Vùng chứa mã VS và Dev
- Song Tử CLI
- Phản trọng lực
- Kiro
- Codex CLI
- Tiếp tục
- Lướt ván buồm
- Mã mở
- Cline
- GitHub phi công phụ CLI
- Mã Kilo
- Zed
- Ngỗng### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Vòng đời tác vụ, phát trực tuyến, kiên trì, khởi động lại quá trình khôi phục và điều phối cục bộ đơn giản đầu tiên. Việc thực thi thuê chung có sẵn khi được bật rõ ràng; Redis vẫn là một tùy chọn lưu trữ nâng cao, không phải là đường dẫn cục bộ mặc định.---

## 🗂️ Repository Map

| Đường dẫn | Mục đích |
|:------|:--------|
| 📂 `kỹ năng/` | Kỹ năng tác giả Canonical |
| 📖 `tài liệu/người dùng/` | Tài liệu dành cho người dùng cuối |
| 🤝 `tài liệu/người đóng góp/` | Mẫu và hướng dẫn dành cho người đóng góp |
| 🏗️ `tài liệu/kiến trúc/` | Lộ trình, ADR và ​​​​phân tích kỹ thuật |
| 🔧 `tài liệu/hoạt động/` | Sổ tay hoạt động |
| 📋 `tài liệu/thông số kỹ thuật/` | Hợp đồng thời gian chạy, giao thức và tạo tác |
| 📚 `docs/CATALOG.md` | Danh mục kỹ năng được tạo |
| 📦 `quận/` | Tạo ra các tạo phẩm có thể đọc được bằng máy |
| 🧠 `gói/catalog-core/` | Thời gian chạy danh mục được chia sẻ |
| 🌐 `gói/server-api/` | API HTTP chỉ đọc |
| 🔌 `gói/server-mcp/` | Máy chủ MCP và xe sidecar cục bộ |
| 🤖 `gói/server-a2a/` | Máy chủ A2A và thời gian chạy tác vụ |
| 🖥️ `công cụ/thùng/` | Điểm vào CLI |
| 📚 `công cụ/lib/` | Trình trợ giúp trình cài đặt và giao diện người dùng |
| ⚙️ `công cụ/tập lệnh/` | Xác nhận, tạo, xác minh và kiểm tra |---

## 🧪 Release Validation

```bash
npm run smoke
```

Quá trình chạy khói xác nhận:

- ✅ xác thực kỹ năng và tạo siêu dữ liệu
- ✅ công cụ phân loại lại phân loại
- ✅ tạo danh mục tạo tác
- ✅ đã tạo ra sự giảm giá danh mục
- ✅ tạo và xác minh lưu trữ
- ✅ bộ thử nghiệm tự động
- ✅ `npm pack --dry-run`
- ✅ Khởi động API và sức khỏe
- ✅ MCP boot trong `stdio`, `stream`, và `sse`
- ✅ Vòng đời khởi động, bỏ phiếu, phát trực tuyến SSE, hủy và cấu hình đẩy A2A