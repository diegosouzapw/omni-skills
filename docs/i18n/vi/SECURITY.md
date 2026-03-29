# 🛡️ Security Policy (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Nếu bạn phát hiện ra vấn đề bảo mật trong Omni Skills, trước tiên đừng mở vấn đề công khai.**

Vui lòng báo cáo qua một trong các kênh riêng tư sau:

| Kênh | Như thế nào |
|:--------|:----|
| 🔒 Tư vấn bảo mật GitHub | [Mở tư vấn riêng](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 Liên hệ trực tiếp | Liên hệ trực tiếp với người bảo trì |### 📋 Include in Your Report

- 📁 Thành phần hoặc đường dẫn bị ảnh hưởng
- 🔄 Các bước sao chép
- ⚠️ Đánh giá tác động
- 🧪 Bất kỳ tài liệu chứng minh khái niệm nào cần thiết để xác minh vấn đề

>**⏱️ Chúng tôi mong muốn ghi nhận các báo cáo trong vòng 48 giờ**và ưu tiên khắc phục tùy theo mức độ tác động.---

## 🎯 Scope

Chính sách này bao gồm thời gian chạy và bề mặt nội dung của kho lưu trữ:

| Thành phần | Đường dẫn |
|:----------|:------|
| 🖥️ CLI và trình cài đặt | `công cụ/thùng/` |
| 📚 Thư viện chia sẻ | `công cụ/lib/` |
| ⚙️ Xây dựng và xác thực tập lệnh | `công cụ/tập lệnh/` |
| 📦 Tạo các tạo phẩm danh mục | `quận/` |
| 🌐 Gói API, MCP và A2A | `gói/` |
| 🧠 Nội dung kỹ năng | `skills/` — đặc biệt là các lệnh shell, truy cập mạng, luồng thông tin xác thực hoặc hướng dẫn liên quan đến bảo mật |---

## Kiến trúc

Kho lưu trữ dựa trên các biện pháp kiểm soát bảo mật sau:### 🧠 Skill-Level Controls

| Kiểm soát | Mô tả |
|:--------|:----------|
| 🏷️ Lĩnh vực rủi ro | Siêu dữ liệu kỹ năng bao gồm mức `rủi ro` đã được khai báo |
| 📊 Ghi điểm | Quá trình xác thực tính toán mức độ trưởng thành, các phương pháp hay nhất, chất lượng và điểm bảo mật |
| 🔍 Máy quét tĩnh | Kiểm tra `SKILL.md`, các tệp được đóng gói và tập lệnh trợ giúp |
| 🦠 Máy quét tùy chọn | Tra cứu hàm băm ClamAV và VirusTotal (khi được định cấu hình) |### 🖥️ Runtime Controls

| Kiểm soát | Mô tả |
|:--------|:----------|
| 📁 Đường đi an toàn | Kiểm tra an toàn đường dẫn sử dụng luồng cài đặt |
| 🔒 Danh sách cho phép viết | Việc ghi sidecar MCP cục bộ bị hạn chế bởi danh sách cho phép |
| 👁️ Mặc định chạy thử | Các công cụ định hướng ghi mặc định ở chế độ chạy khô trừ khi bị tắt rõ ràng |
| 🔐 Xác thực & giới hạn | Xác thực tài khoản/khóa API, xác thực thời gian chạy của quản trị viên, giới hạn tốc độ, danh sách cho phép CORS/IP |
| 📋 Kiểm toán | Ghi nhật ký kiểm tra, chế độ bảo trì và ID yêu cầu |### 📦 Release Controls

| Kiểm soát | Mô tả |
|:--------|:----------|
| ✅ Bảng kê khai tổng kiểm tra | Tổng kiểm tra SHA-256 cho các kho lưu trữ được tạo |
| ✍️ Chữ ký | Xác minh chữ ký tách rời trong CI trước khi xuất bản |
| 🧪 Kiểm tra khói | Bài tập vận chuyển các bề mặt thời gian chạy trước khi phát hành |---

## 🔮 What Is Still Open

> Công việc bảo mật chính còn lại**không**là tăng cường cơ bản. Các mục mở là:

| Khu vực | Trạng thái |
|:------|:-------|
| 🏢 Quản trị doanh nghiệp | Nhận dạng bên ngoài, chính sách cổng và tích hợp WAF bên trên các biện pháp kiểm soát trong quy trình hiện tại |
| 🔌 Người viết khách hàng MCP | Người viết rộng hơn chỉ khi hợp đồng cấu hình công khai đủ ổn định |
| 📊 Tinh chỉnh máy quét | Tiếp tục sàng lọc để các kỹ năng đặc biệt luôn được tách biệt rõ ràng với những kỹ năng đơn thuần có cấu trúc tốt |---

## ⚠️ Risk Levels in Skills

Mỗi kỹ năng khai báo một trong các cấp độ `rủi ro` sau:

| Mức độ rủi ro | Ý nghĩa |
|:----------|:--------|
| 🟢 `an toàn` | Dự kiến ​​không có hoạt động phá hoại |
| 🟡 `thận trọng` | Có thể sửa đổi tệp hoặc tương tác với hệ thống bên ngoài |
| 🔴 `xúc phạm` | Kiểm tra bảo mật hoặc quy trình làm việc đối nghịch yêu cầu ủy quyền rõ ràng |
| ⛔ `quan trọng` | Hoạt động có tác động cao hoặc cấp hệ thống |---

## 📋 Disclosure Notes

Vì Omni Skills cung cấp các trình trợ giúp thực thi, công cụ cục bộ nhận biết hệ thống tệp và người viết cấu hình dành riêng cho máy khách, nên các lớp lỗ hổng này phải được coi là**mức độ ưu tiên cao**ngay cả khi chúng xuất hiện "chỉ cục bộ":

| Danh mục | Ví dụ |
|:----------|:----------|
| 📁 Đi qua đường đi | Thoát thư mục thông qua đường dẫn cài đặt kỹ năng hoặc cấu hình |
| 🔗 An toàn liên kết tượng trưng | Liên kết tượng trưng theo sau trong quá trình cài đặt hoặc trích xuất kho lưu trữ |
| 🖥️ Thực thi lệnh | Chèn lệnh tùy ý thông qua nội dung kỹ năng hoặc tập lệnh |
| 📦 Xác minh lưu trữ | Bỏ qua tổng kiểm tra hoặc xác minh chữ ký |
| 🔓 Bỏ qua xác thực | Giới hạn tỷ lệ hoặc bỏ qua xác thực trên API/MCP |
| 🔌 Bỏ qua danh sách cho phép | Vượt qua danh sách cho phép xe sidecar tại địa phương |
| 🦠 Máy quét trốn tránh | Các lớp âm tính giả trong máy quét tĩnh hoặc bên ngoài |