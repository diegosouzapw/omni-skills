# 🖥️ CLI Visual Shell Specification (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Hợp đồng hành vi cho giao diện người dùng thiết bị đầu cuối dựa trên Ink được cung cấp bởi `omni-skills ui`.**---

## 1. Scope

Lớp vỏ trực quan là bề mặt sản phẩm được hướng dẫn phía trên công cụ cài đặt và CLI hiện có.

Nó không thay thế:

- cách sử dụng CLI dựa trên cờ chuyên gia
- `tools/bin/install.js`
- quy trình cài đặt văn bản hướng dẫn
- Hành vi thời gian chạy API, MCP hoặc A2A

Nó định nghĩa:

- hành vi của `omni-skills ui`
- hợp đồng dự phòng cho `omni-skills ui --text`
- trạng thái cục bộ và sự kiên trì đặt trước
- bản xem trước ra mắt dịch vụ có hướng dẫn
- khả năng lặp lại cho các lần cài đặt và chạy dịch vụ gần đây---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` ra mắt giao diện trực quan dựa trên Ink.

Visual Shell là trải nghiệm thiết bị đầu cuối không chuyên nghiệp chính dành cho:

- luồng cài đặt
- khám phá và cài đặt danh mục đầu tiên
- Khởi động MCP
- Khởi động API
- Khởi nghiệp A2A
- bác sĩ và bàn giao thuốc lá### 2.2 Text Fallback

`omni-skills ui --text` khởi chạy giao diện dự phòng dựa trên dòng đọc.

Điều này vẫn hữu ích khi:

- một thiết bị đầu cuối không thể hiển thị chính xác lớp vỏ phong phú hơn
- hành vi ở chế độ thô bị hạn chế
- ưu tiên dự phòng văn bản tối thiểu### 2.3 Handoff Rule

Shell trực quan không thực hiện lại thời gian chạy dịch vụ hoặc ghi cài đặt trực tiếp.

Sau khi xem trước và xác nhận, nó sẽ thoát hoàn toàn và chuyển giao việc thực thi cho điểm nhập CLI hiện có với các đối số và biến môi trường tương đương.---

## 3. Home Screen Contract

Màn hình chính phải hiển thị:

- kỹ năng cài đặt
- tìm và cài đặt
- lặp lại các cài đặt gần đây khi có
- chạy cài đặt trước cài đặt đã lưu khi có
- bắt đầu một dịch vụ
- lặp lại các dịch vụ gần đây khi có mặt
- chạy các cài đặt trước dịch vụ đã lưu khi có mặt
- bác sĩ
- khói
- thoát

Màn hình chính cũng sẽ hiển thị:

- tính khả dụng của gói được xuất bản hiện tại
- số lượng trạng thái cục bộ cho các mục gần đây, cài đặt trước và mục yêu thích---

## 4. Install Flow Contract

Luồng cài đặt shell trực quan phải hỗ trợ:

- lựa chọn mục tiêu khách hàng đã biết
- lựa chọn đường dẫn tùy chỉnh
- cài đặt đầy đủ thư viện
- cài đặt một kỹ năng
- cài đặt một gói
- tìm kiếm rồi cài đặt
- xem trước trước khi viết
- lưu cài sẵn
- kỹ năng yêu thích hoặc chuyển đổi gói

Bản xem trước phải hiển thị:

- nhãn mục tiêu đã được giải quyết
- đường dẫn đã giải quyết
- phạm vi cài đặt
- kỹ năng hoặc gói được chọn khi áp dụng
- lệnh CLI tương đương---

## 5. Service Flow Contract

Shell trực quan phải hướng dẫn khởi động cho:### 5.1 MCP

- vận chuyển: `stdio`, `stream`, `sse`
- chế độ: `chỉ đọc` hoặc `cục bộ`
- cấu hình máy chủ/cổng cho việc vận chuyển mạng
- xem trước lệnh rõ ràng### 5.2 API

- chủ nhà
- cổng
- hồ sơ cơ bản hoặc cứng
- người mang cứng hoặc xác thực khóa API
- thông số giới hạn tốc độ cứng
- kích hoạt nhật ký kiểm tra
- xem trước lệnh rõ ràng### 5.3 A2A

- chủ nhà
- cổng
- loại cửa hàng: `bộ nhớ`, `json`, `sqlite`
- đường dẫn lưu trữ cho các chế độ bền
- người thực thi: `nội tuyến`, `quy trình`
- chế độ SQLite kích hoạt hàng đợi
- khoảng thời gian thăm dò và thời gian thuê cho chế độ cho thuê chung
- xem trước lệnh rõ ràng---

## 6. Local State Contract

Lớp vỏ trực quan vẫn duy trì trạng thái cục bộ trong:```text
~/.omni-skills/state/ui-state.json
```

Nhà nước hiện nay bao gồm:

- lượt cài đặt gần đây
- ra mắt dịch vụ gần đây
- đặt tên cài đặt trước
- cài đặt trước dịch vụ được đặt tên
- kỹ năng yêu thích
- gói yêu thích

Shell phải hỗ trợ:

- phát lại các cài đặt gần đây
- phát lại các lần ra mắt dịch vụ gần đây
- sử dụng lại các cài đặt trước cài đặt có tên
- sử dụng lại các cài đặt trước dịch vụ được đặt tên---

## 7. Compatibility Contract

Vỏ trực quan là phụ gia.

Các luồng này phải duy trì hiệu lực và ổn định:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `cài đặt kỹ năng đa năng của npx --guided`
- `npx omni-skills find figma --tool con trỏ --install --yes`
- `npx omni-skills mcp luồng --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

Lớp vỏ trực quan không bao giờ được ép buộc mình vào các đường dẫn lệnh chuyên gia rõ ràng.---

## 8. Safety Contract

Lớp vỏ trực quan phải tạo trạng thái và ghi rõ ràng.

Nó phải:

- xem trước cài đặt trước khi viết bàn giao
- xem trước các lệnh khởi chạy dịch vụ trước khi thực hiện
- giữ tài liệu bí mật khỏi các bản xem trước lệnh văn bản rõ ràng khi thực tế
- chỉ tồn tại trạng thái cục bộ
- duy trì hành vi CLI không tương tác bên ngoài lớp vỏ trực quan