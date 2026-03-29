# 🗺️ Agent-Native Roadmap (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Kế hoạch phát triển kiến ​​trúc cho Omni Skills: từ kho lưu trữ ưu tiên trình cài đặt đến thời gian chạy danh mục dùng chung hỗ trợ CLI, API, MCP và A2A mà không cần logic trùng lặp.**---

## 📊 Current Platform Areas

| Giai đoạn | Tên | Trạng thái |
|:------|:------|:-------|
| 1️⃣ | Hợp đồng và hiện vật | ✅ Hiện tại |
| 2️⃣ | API danh mục chỉ đọc | ✅ Hiện tại |
| 3️⃣ | Bề mặt khám phá MCP | ✅ Hiện tại |
| 4️⃣ | Bề mặt cài đặt và cấu hình cục bộ | ✅ Hiện tại |
| 5️⃣ | Dàn nhạc A2A | ✅ Hiện tại |### ✅ What Exists Today

- các tạo phẩm danh mục có thể đọc được bằng máy trong `dist/`
- API HTTP chỉ đọc với phạm vi điểm cuối để tìm kiếm, gói, so sánh, lập kế hoạch cài đặt và tải xuống
- Máy chủ MCP với `stdio`, truyền tải HTTP và SSE có thể phát trực tuyến
- sidecar cục bộ với các luồng ghi và `config-mcp` được đưa vào danh sách cho phép
- 7 máy khách có khả năng cài đặt, 16 máy khách có khả năng cấu hình, 33 mục tiêu cấu hình MCP và 19 cấu hình cấu hình
- chuyên môn hóa gói sâu hơn bên trong `full-stack`, `security`, `devops` và `ai-engineer` thông qua `auth-flows`, `deat-modeling`, `release-engineering` và `context-engineering`
- kho lưu trữ theo kỹ năng (`zip`, `tar.gz`) với tổng kiểm tra SHA-256 và chữ ký tách rời trên thẻ phát hành
- Đường cơ sở quản trị API: xác thực không ghi tên/khóa API, xác thực thời gian chạy của quản trị viên, giới hạn tốc độ, ghi nhật ký kiểm tra, danh sách cho phép CORS/IP, proxy tin cậy, chế độ bảo trì và ID yêu cầu
- Thời gian chạy A2A với vòng đời tác vụ, độ bền JSON/SQLite, tiếp tục khởi động lại, phát trực tuyến SSE, hủy, thông báo đẩy, trình thực thi quy trình tùy chọn và phối hợp thuê tham gia### 🔭 Future Expansion Areas

Lộ trình cốt lõi hiện mô tả phạm vi nền tảng hiện tại. Các hạng mục còn lại là các khu vực mở rộng trong tương lai, không phải các khoảng trống nền tảng:

- chỉ những bổ sung MCP có tính chọn lọc cao từ thời điểm này trở đi và chỉ khi các tài liệu công cộng chính thức giúp người viết an toàn có thể thực hiện được
- gói tham khảo sâu hơn và tính điểm ngữ nghĩa nhiều hơn để bộ phân loại tiếp tục tách các kỹ năng đặc biệt khỏi các kỹ năng đơn thuần được trau chuốt
- quản trị do doanh nghiệp lưu trữ vượt quá mức cơ sở hiện tại trong quy trình, nếu sau này dự án cần tích hợp cổng hoặc IdP
- chuyên môn hóa sâu hơn trên các phần `design`, `tools`, `data-ai` và `machine-learning` mới được kích hoạt
- tiếp tục hoàn thiện hoạt động xung quanh bộ tăng cường riêng trong khi vẫn giữ mô hình hoạt động chính thức của nó: OmniRouter được ghim vào `cx/gpt-5.4`, được lưu trữ trên đám mây ở chế độ `mô phỏng` hoặc ánh sáng sơ bộ đã xuống cấp và `trực tiếp` đáng tin cậy trên mạng LAN hoặc thực thi tự lưu trữ
- tiếp tục phát hành và tăng cường quy trình làm việc chỉ như công việc về chất lượng dịch vụ chứ không phải vì thiếu nền tảng## Future Catalog Expansion Track

Hai làn sóng mở rộng danh mục công khai đầu tiên hiện đã có mặt:

- `design` → `design-systems-ops`, `accessibility-aud`, `design-token-governance`
- `tools` → `mcp-server-authoring`
- `data-ai` → `data-contract`
- `học máy` → `phục vụ mô hình`

Bước được đề xuất tiếp theo không còn là kích hoạt danh mục vì mục đích riêng của nó nữa. Mục đích là đào sâu các dấu vết gốc mã mới hoạt động này để chúng có cảm giác giống như bề mặt sản phẩm bền vững hơn là chỗ đứng dành cho một kỹ năng.

Hướng đề xuất:

1. đào sâu `thiết kế` với nhiều quy trình làm việc của hệ thống thiết kế vận hành hơn
2. đào sâu thêm `công cụ` với các kỹ năng soạn thảo và định hướng plugin
3. đào sâu `data-ai` với các kỹ năng về thiết bị và quy trình triển khai đầu tiên
4. đào sâu thêm `machine-learning` với các kỹ năng vận hành phục vụ, đào tạo và đánh giá

Các danh mục được trì hoãn có chủ ý trừ khi xuất hiện các đề xuất gốc mã mạnh:

- `kinh doanh`
- `nội dung-phương tiện`

Lịch sử mở rộng đó hiện được theo dõi trong:

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Duy trì quy trình làm việc `npx omni-skills` hiện tại
- ✅ Giới thiệu nguồn chân lý có thể đọc được bằng máy cho các kỹ năng
- ✅ Hỗ trợ các đại lý tìm kiếm, đề xuất, lập kế hoạch cài đặt
- ✅ Tách biệt các mối quan tâm về danh mục từ xa khỏi việc ghi hệ thống tệp cục bộ
- ✅ Tái sử dụng cùng một siêu dữ liệu trên CLI, API, MCP và A2A---

## 🚫 Non-Goals

- ❌ Cài đặt từ xa trên máy người dùng từ máy chủ được lưu trữ
- ❌ Thay thế `SKILL.md` làm định dạng tác giả chuẩn
- ❌ Yêu cầu cộng tác viên viết bảng kê khai bằng tay
- ❌ Mặc định biến dự án thành nền tảng xếp hàng được lưu trữ nặng---

## 🏗️ Target Architecture

Một**lõi danh mục**với ba bề mặt giao thức:

| Bề mặt | Tốt nhất cho | Chế độ |
|:--------|:----------|:------|
| 🌐**API nghỉ ngơi**| Truy cập sổ đăng ký, tích hợp giao diện người dùng, người tiêu dùng bên thứ ba | Chỉ đọc |
| 🔌**MCP**| Khám phá tác nhân, xem trước cài đặt, viết cấu hình, công thức ứng dụng khách | Chỉ đọc + ghi cục bộ |
| 🤖**A2A**| Điều phối giữa các tác nhân và chuyển giao kế hoạch cài đặt | Vòng đời nhiệm vụ với độ bền cục bộ đơn giản đầu tiên |### ⚙️ Core Principle

>**Tất cả các giao thức đều sử dụng cùng một họ tạo tác được tạo.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Bản kê khai vẫn là hợp đồng chung. Các kho lưu trữ là các tạo phẩm phân phối được xếp chồng lên trên hợp đồng đó, không phải là sự thay thế cho hợp đồng đó.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Được sử dụng bởi API được lưu trữ và máy chủ MCP từ xa.

| ✅ Được phép | ❌ Không được phép |
|:----------|:---------------|
| Kỹ năng tìm kiếm | Ghi vào hệ thống tập tin của người gọi |
| Tìm nạp bảng kê khai | Thay đổi cấu hình máy khách cục bộ |
| So sánh kỹ năng | Suy ra trạng thái máy tùy ý |
| Đề xuất gói | — |
| Xây dựng kế hoạch cài đặt | — |### 2️⃣ Local Installer Mode

Được sử dụng bởi CLI và xe sidecar MCP.

| ✅ Được phép |
|:----------|
| Phát hiện ứng dụng khách AI cục bộ |
| Kiểm tra các kỹ năng đã cài đặt |
| Xem trước thao tác tập tin |
| Cài đặt hoặc xóa thư mục kỹ năng |
| Viết cấu hình MCP cục bộ sau khi xem trước |

> Đây vẫn là chế độ duy nhất diễn ra quá trình ghi hệ điều hành thực sự.---

## 📐 Protocol Split

### 🌐 REST API

Tốt nhất để truy cập sổ đăng ký, tìm kiếm, so sánh, tải xuống theo phiên bản và lập kế hoạch cài đặt.

**Điểm cuối**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Tốt nhất để khám phá dựa trên công cụ, đề xuất kịp thời, xem trước cài đặt và thiết lập MCP dành riêng cho khách hàng.

**Công cụ chỉ đọc**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Công cụ cục bộ**: ` detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Tốt nhất cho quá trình chuyển giao khám phá, quy trình lập kế hoạch cài đặt và thực thi tác vụ tác nhân có thể tiếp tục.

**Hoạt động hiện tại**: `discover-skills` · `recommend-stack` · `prepare-install-plan`---

## 🛡️ Security Model

| Nguyên tắc | Thực hiện |
|:----------|:---------------|
| 🔒 Dịch vụ được lưu trữ ở chế độ chỉ đọc | API và MCP từ xa không ghi vào hệ thống tệp người gọi |
| 📂 Viết ở địa phương | Chỉ xe sidecar CLI và MCP |
| 👁️ Xem trước trước khi viết | Mặc định chạy thử đối với các đột biến cục bộ |
| 🔑 Tính chính trực rõ ràng | Tổng kiểm tra SHA-256 cho các tạo phẩm được tạo |
| ✍️ Giải phóng niềm tin rõ ràng | Chữ ký tách rời được thi hành trên thẻ phát hành |
| ⚠️ Rủi ro lộ diện | Siêu dữ liệu về rủi ro và bảo mật được truyền đến mọi bề mặt thời gian chạy |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- kiến trúc mục tiêu được ghi lại
- lược đồ kê khai được xác định
- siêu dữ liệu, danh mục, bảng kê khai, gói và kho lưu trữ được tạo### Phase 2: Catalog Service

- API HTTP chỉ đọc với Express 5
- tìm kiếm, lọc, tra cứu bảng kê khai, liệt kê gói, so sánh và tải xuống
- cơ sở quản trị được lưu trữ trên máy chủ dựa trên môi trường### Phase 3: MCP Discovery

- tích hợp `@modelcontextprotocol/sdk` chính thức
- `stdio`, truyền tải HTTP và SSE có thể phát trực tuyến
- các công cụ, tài nguyên và lời nhắc chỉ đọc được hỗ trợ bởi danh mục được chia sẻ### Phase 4: Local Install and Config Surface

- sidecar cục bộ có ghi vào danh sách cho phép
- phát hiện 7 máy khách có khả năng cài đặt
- viết cấu hình cho 16 máy khách có khả năng cấu hình trên 33 mục tiêu và 19 cấu hình cấu hình
- các luồng `config-mcp` được hướng dẫn trong CLI và shell trực quan
- hỗ trợ ổn định cho Claude, Cursor, VS Code, Gemini, AntiGravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose và Dev Container### Phase 5: A2A Orchestration

- thẻ đại lý tại `/.well-known/agent.json`
- `message/send`, `message/stream`, `tasks/get`, `tasks/cancel`, `tasks/resubscribe`, và các phương thức cấu hình thông báo đẩy
- Kiên trì JSON và SQLite với khả năng khôi phục khởi động lại
- tùy chọn thực thi quy trình bên ngoài
- chọn tham gia thực thi cho thuê giữa các công nhân để có SQLite và phối hợp Redis nâng cao tùy chọn
- các giá trị mặc định đơn giản đầu tiên được lưu giữ trên bộ nhớ, JSON hoặc SQLite mà không có sự phụ thuộc bên ngoài### Current Enhancer Operating Decision

Mô hình `live` được hỗ trợ của trình tăng cường riêng tư hiện đã rõ ràng:

- tự động hóa PR được lưu trữ chạy thử `trực tiếp` được kiểm soát trước
- nếu cổng OmniRoute công cộng bị chặn hoặc không ổn định, PR sẽ được đánh dấu `bị chặn` với lý do liên quan đến nhà điều hành thay vì thất bại một cách mờ ám
- đường dẫn `trực tiếp' đáng tin cậy theo chuẩn vẫn là mạng LAN hoặc thực thi dịch vụ cục bộ
- GitHub riêng tư được lên lịch chạy ở trạng thái `giả lập` theo mặc định trừ khi người vận hành yêu cầu rõ ràng `trực tiếp`---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Quyết định**: giữ bản kê khai dưới dạng hợp đồng chung và giữ các bản lưu trữ đã ký cho mỗi kỹ năng làm bề mặt phân phối.

**Tại sao**:
- CLI, API, MCP và A2A đã sử dụng hình dạng tệp kê khai chuẩn hóa
- kho lưu trữ lý tưởng để tải xuống và xác minh, nhưng kém vì là hợp đồng khám phá duy nhất
- điều này giúp cho việc soạn thảo trở nên đơn giản và việc phân phối có thể được kiểm chứng### 2. Private or Premium Catalogs

**Quyết định**: sử dụng lại cùng một định dạng danh mục và bảng kê khai cũng như lớp xác thực hoặc chính sách bên ngoài.

**Tại sao**:
- nó tránh làm giả mô hình dữ liệu
- nó phù hợp với phương pháp quản trị API/MCP hiện tại
- nó vẫn tương thích với định hướng hệ sinh thái MCP xung quanh thông tin xác thực ứng dụng khách OAuth và ủy quyền do doanh nghiệp quản lý### 3. Client Writer Strategy

**Quyết định**: hội tụ một nhóm nhỏ các họ xuất khẩu chuẩn mực và chỉ giữ lại những người viết riêng khi tài liệu khách hàng chính thức yêu cầu.

**Các dòng kinh điển hiện đang được sử dụng**:
- JSON `mcpServers`
- `máy chủ` JSON
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Tại sao**:
- nó giữ cho việc thực hiện có thể duy trì được
- nó vẫn hỗ trợ các nhu cầu cụ thể của khách hàng như cài đặt Claude, Tiếp tục YAML, Zed `context_servers` và Codex TOML
- nó tránh phát minh ra các trình soạn thảo mỏng manh cho các máy khách không có tài liệu cấu hình công khai ổn định---

## 🌍 Research Notes Behind Those Decisions

Các quyết định hiện tại đã được kiểm tra dựa trên các tài liệu hệ sinh thái chính thức:

- hệ sinh thái MCP hiện ghi lại các tiện ích mở rộng tùy chọn như thông tin xác thực ứng dụng khách OAuth và ủy quyền do doanh nghiệp quản lý, hỗ trợ xác thực được lưu trữ bên ngoài thay vì giả mạo định dạng danh mục
- OpenAI ghi lại máy chủ MCP tài liệu công cộng và các mẫu cấu hình Codex MCP phù hợp với bảng kê khai được chia sẻ cộng với chiến lược máy khách-người viết
- VS Code ghi lại hỗ trợ MCP hạng nhất và hướng dẫn mở rộng, giúp củng cố việc duy trì trình soạn thảo dựa trên `máy chủ` chuyên dụng của nó
- Trợ lý AI JetBrains ghi lại quá trình thiết lập MCP thông qua trải nghiệm người dùng của sản phẩm thay vì hợp đồng tệp ổn định trên nhiều nền tảng, hiện hỗ trợ giữ nó trong lãnh thổ thủ công/đoạn mã---

## 🔮 Longer-Term Decision Points

Chỉ có một số câu hỏi chiến lược vẫn còn thực sự mở:

1. Liệu bất kỳ khách hàng nào ngoài ma trận hiện tại có thực sự vượt qua được rào cản đối với việc viết hạng nhất hay liệu các sản phẩm còn lại có nên ở chế độ thủ công/đoạn trích hay không
2. Khi nào, nếu có, quản trị được lưu trữ nên chuyển sang cổng bên ngoài hoặc IdP doanh nghiệp thay vì đường cơ sở trong quá trình hiện tại?
3. Người chấm điểm nên đi xa đến mức nào trong việc đánh giá độ sâu của gói tham chiếu và chất lượng hoạt động trước khi nó trở nên quá quan trọng đối với những người đóng góp?