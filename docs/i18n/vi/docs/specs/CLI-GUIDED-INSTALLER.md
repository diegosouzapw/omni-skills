# 🧩 CLI Guided Installer Specification (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Hợp đồng hành vi đối với trải nghiệm cài đặt có hướng dẫn trong Omni Skills CLI.**---

## 1. Scope

Thông số kỹ thuật này xác định hành vi cài đặt được hướng dẫn nằm trên phần phụ trợ của trình cài đặt hiện có.

Nó không thay thế:

- `tools/bin/install.js`
- luồng cờ chuyên gia hiện tại
- bảng kê khai cài đặt có chọn lọc

Nó định nghĩa:

- cách nhập chế độ hướng dẫn
- cách chọn điểm đến
- cách chọn phạm vi cài đặt
- thông tin xem trước nào phải được hiển thị
- cách xác nhận và thực thi hoạt động---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI sẽ vào chế độ cài đặt được hướng dẫn khi:

- người dùng chạy `omni-skills` mà không có đối số nào trong TTY
- người dùng chạy `cài đặt omni-skills` mà không có bộ chọn trong TTY### 2.2 Forced Guided Entry

CLI cũng phải hỗ trợ chế độ hướng dẫn rõ ràng thông qua tùy chọn chuyên dụng, chẳng hạn như:

- `cài đặt omni-skills --guided`

Chế độ này sẽ hoạt động ngay cả khi đầu vào được truyền qua đường ống và không được gắn vào TTY, miễn là có sẵn đầu vào tiêu chuẩn.### 2.3 Non-Interactive Safety Rule

Khi được gọi mà không có TTY và không có chế độ hướng dẫn được yêu cầu rõ ràng:

- duy trì hành vi mặc định hiện tại
- không chặn chờ nhắc nhở---

## 3. Destination Model

Cài đặt có hướng dẫn phải hỗ trợ hai lớp đích:### 3.1 Known Client Target

Mỗi mục tiêu đã biết sẽ giải quyết:

- nhãn con người có thể đọc được
- id công cụ nội bộ
- cờ cài đặt
- đường dẫn đã giải quyết

Các mục tiêu bắt buộc đã biết:

- Mã Claude
- Con trỏ
- Song Tử CLI
- Codex CLI
- Kiro
- Phản trọng lực
- Mã mở### 3.2 Custom Path Target

Chế độ đường dẫn tùy chỉnh phải:

- nhắc đường dẫn
- giải quyết `~`
- chuẩn hóa thành đường dẫn tuyệt đối
- hiển thị đường dẫn đã giải quyết trong bản xem trước---

## 4. Install Scope Model

Hướng dẫn cài đặt phải hỗ trợ:### 4.1 Full Library

Tương đương với cài đặt hiện tại không có `--skill` hoặc `--bundle`.### 4.2 Single Skill

Cho phép người dùng chọn một kỹ năng được xuất bản.### 4.3 Single Bundle

Cho phép người dùng chọn một gói được quản lý và phân giải các thành viên đã xuất bản.### 4.4 Search Then Install

Cho phép người dùng:

- nhập truy vấn tìm kiếm
- kiểm tra kết quả
- chọn một kỹ năng hoặc gói
- tiếp tục vào bản xem trước cài đặt---

## 5. Preview Contract

Trước khi thực hiện, hướng dẫn cài đặt phải hiển thị:

- nhãn điểm đến
- đường dẫn đích
- phạm vi cài đặt
- kỹ năng hoặc gói đã chọn nếu có
- lệnh CLI tương đương

Tùy chọn nhưng được khuyến nghị:

- tóm tắt siêu dữ liệu kỹ năng đã chọn
- tóm tắt tính sẵn có của gói---

## 6. Execution Contract

Sau khi xác nhận:

- hướng dẫn ủy quyền cài đặt cho chương trình phụ trợ trình cài đặt hiện có
- nó không thực hiện lại tập tin tự ghi

Bản xem trước lệnh và đối số trình cài đặt được ủy quyền thực tế phải khớp chính xác.---

## 7. Result Contract

Sau khi thực hiện thành công, kết quả cài đặt được hướng dẫn sẽ hiển thị:

- chỉ số thành công
- đường dẫn đích cuối cùng
- lệnh đã được thực thi
- hành động được đề xuất tiếp theo

Ví dụ các hành động tiếp theo:

- sử dụng kỹ năng trong khách hàng đã chọn
- chạy `bác sĩ`
- chạy `mcpstream --local`---

## 8. Compatibility Contract

Những điều sau đây vẫn hợp lệ và không thay đổi:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-skills find figma --tool con trỏ --install --yes`

Chế độ hướng dẫn thêm hành vi. Nó không loại bỏ hành vi hiện có.