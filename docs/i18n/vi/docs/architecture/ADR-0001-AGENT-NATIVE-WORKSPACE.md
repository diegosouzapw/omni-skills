# 📐 ADR-0001: Agent-Native Workspace Foundation (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Quyết định kiến ​​trúc quan trọng đã định hình cấu trúc không gian làm việc monorepo.**---

## 📊 Status

✅**Được chấp nhận**— hướng không gian làm việc hiện tại và hình dạng kho lưu trữ đang hoạt động.---

## 🔍 Context

Omni Skills bắt đầu như một kho lưu trữ**ưu tiên trình cài đặt**. Điều đó đủ để phân phối nội dung `SKILL.md`, nhưng không đủ để hiển thị danh mục cho các tác nhân thông qua các bề mặt gốc giao thức.

Chúng tôi cần một nền tảng có thể hỗ trợ:

| Yêu cầu | Giao thức |
|:----------||:----------|
| 🌐 API danh mục HTTP chỉ đọc | NGHỈ LẠI |
| 🔌 Máy chủ MCP chỉ đọc | Giao thức bối cảnh mô hình |
| 🤖 Bề mặt A2A hướng về tác nhân | Đại lý đến Đại lý |
| 📂 Xe sidecar lắp đặt cục bộ | Công cụ hệ thống tập tin |

**Ràng buộc nghiêm trọng**: Tránh phân tích lại các tệp repo một cách độc lập trong mỗi dịch vụ mới.---

## ✅ Decision

Áp dụng**monorepo hướng không gian làm việc**với lõi danh mục dùng chung và các gói dành riêng cho giao thức:

| Trọn gói | Mục đích |
|:--------|:--------|
| 📦 `omni-skills` (root) | Trình cài đặt CLI và tập lệnh repo |
| 🧠 `@omni-skills/catalog-core` | Tải chia sẻ, tìm kiếm, so sánh, gói, gói cài đặt |
| 🌐 `@omni-skills/server-api` | API REST chỉ đọc |
| 🔌 `@omni-skills/server-mcp` | MCP với chế độ stdio/stream/sse + sidecar cục bộ |
| 🤖 `@omni-skills/server-a2a` | Thời gian chạy tác vụ A2A với Thẻ đại lý, bỏ phiếu, SSE và cấu hình đẩy |### 📁 Shared Data Sources

Lõi danh mục đọc các tạo phẩm được tạo từ:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Kết quả | Tác động |
|:--------|:-------|
| 🔗**Hợp đồng chia sẻ dữ liệu**| API, MCP và A2A sử dụng cùng một thành phần |
| 🖥️**CLI hợp nhất**| Một tệp nhị phân hiển thị cài đặt, giao diện người dùng, API, MCP, A2A, chẩn đoán và khói |
| 🧩**Cách ly giao thức**| Các bề mặt mới lặp đi lặp lại mà không cần khớp nối với các bộ phận bên trong của trình cài đặt |
| 🔌**Xe sidecar địa phương**| Chế độ MCP có khả năng ghi hoạt động sau danh sách cho phép, với các công thức nhận biết khách hàng |
| 📦**Thời gian chạy một gói**| Gói npm đã xuất bản mang các bề mặt giao thức, công cụ xác thực và các tạo phẩm được tạo cùng nhau |---

## ⚠️ Negative Consequences

| Đánh đổi | Giảm thiểu |
|:----------|:----------|
| 🔄**Sao chép siêu dữ liệu**| Bản dựng Python + thời gian chạy JavaScript → cuối cùng hợp nhất |
| 🏗️**Độ phức tạp A2A**| Hiện đã tồn tại vòng đời bền vững nhưng bộ điều hợp phối hợp bổ sung thêm chiều sâu hoạt động |
| 📦**Căn chỉnh danh mục**| Cài đặt có chọn lọc yêu cầu các lệnh, bảng kê khai và tài liệu luôn được đồng bộ hóa |
| 📋**Gói các khoảng trống siêu dữ liệu**| Các gói có thể vượt xa các kỹ năng đã xuất bản, yêu cầu cảnh báo thiếu thành viên rõ ràng |---

## ➡️ Follow-Up Items

| # | Hành động | Trạng thái |
|:--|:-------|:-------|
| 1️⃣ | Xác thực MCP từ xa và giới hạn tốc độ | ✅ Xong |
| 2️⃣ | Cải thiện việc ghi cấu hình MCP dành riêng cho khách hàng | ✅ Có mặt hôm nay dành cho Claude, Cursor, Codex, Gemini, Kiro, VS Code và Dev Container |
| 3️⃣ | Các tạo phẩm phát hành có chữ ký hoặc kho lưu trữ theo kỹ năng | ✅ Trình bày hôm nay với việc thực thi CI trên thẻ phát hành |
| 4️⃣ | Thời gian chạy tác vụ A2A → phối hợp bền vững | ✅ Trình bày hôm nay với tính năng lưu trữ JSON/SQLite, trình thực thi bên ngoài, phối hợp cho thuê chọn tham gia và phối hợp Redis nâng cao tùy chọn |
| 5️⃣ | Mở rộng danh mục đã xuất bản để có phạm vi bao phủ gói rộng hơn | ✅ Hôm nay có mặt bảy gói khởi đầu được tuyển chọn hiện tại |