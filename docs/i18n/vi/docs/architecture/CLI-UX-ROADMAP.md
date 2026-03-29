# 🧭 CLI UX Roadmap (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Lộ trình sản phẩm để phát triển Omni Skills từ trình cài đặt đầu tiên thành trải nghiệm thiết bị đầu cuối được hướng dẫn cho cả người dùng chuyên nghiệp và không phải chuyên gia.**
> Phạm vi: gói npm, trải nghiệm cài đặt CLI, giao diện người dùng thiết bị đầu cuối, quy trình khởi chạy dịch vụ và giới thiệu trực quan.---

## 1. Problem Statement

Nền tảng thời gian chạy hiện tại rất mạnh nhưng trải nghiệm đầu vào vẫn được tối ưu hóa cho những người dùng đã hiểu:

- khách hàng nào họ muốn nhắm mục tiêu
- bộ chọn cài đặt nào họ muốn sử dụng
- cách dịch mục tiêu thành `--skill`, `--bundle` hoặc `find`
- khi họ cần cài đặt chỉ CLI so với các dịch vụ MCP, API hoặc A2A

Hôm nay:

- `npx omni-skills` mặc định là Chống trọng lực
- điều này hợp lệ về mặt kỹ thuật và tương thích ngược
- nhưng nó không lý tưởng cho người dùng lần đầu hoặc người vận hành ít kỹ thuật hơn

CLI đã có chế độ tương tác cơ bản nhưng nó vẫn gần với tiện ích dành cho nhà phát triển hơn là bề mặt sản phẩm được hướng dẫn.

Lộ trình này xác định đường dẫn tới UX công khai mạnh mẽ hơn mà không phá vỡ giao diện dựa trên cờ hiện tại.---

## 1.1 Delivery Status

Lộ trình hiện được triển khai phần lớn ở trạng thái kho lưu trữ hiện tại.

Đã hoàn thành:

- Giai đoạn 1: Lựa chọn điểm vào có hướng dẫn
- Giai đoạn 2: Hướng dẫn cài đặt có hướng dẫn
- Giai đoạn 3: Visual Terminal Shell
- Giai đoạn 4: Trung tâm dịch vụ trực quan
- Giai đoạn 5: Hồ sơ đã lưu và khả năng lặp lại
- Giai đoạn 6: Củng cố, kiểm tra và lập tài liệu---

## 2. Goals

- Duy trì quy trình làm việc CLI chuyên nghiệp hiện tại
- Làm cho điểm vào không có đối số trở nên an toàn và dễ hiểu đối với người dùng lần đầu
- Thay thế mặc định im lặng trong bối cảnh tương tác bằng lựa chọn có hướng dẫn
- Hỗ trợ các ứng dụng khách AI đã biết và đường dẫn cài đặt tùy chỉnh tùy ý
- Biến cài đặt, khám phá và khởi động dịch vụ thành một hành trình người dùng mạch lạc
- Cung cấp giao diện người dùng thiết bị đầu cuối trực quan giống như một sản phẩm chứ không chỉ là một tập lệnh
- Giữ cho công cụ cài đặt, danh mục và thời gian chạy dịch vụ có thể tái sử dụng trong giao diện người dùng---

## 3. Non-Goals

- Thay thế CLI dựa trên cờ hiện tại
- Loại bỏ AntiGravity làm mục tiêu mặc định được hỗ trợ
- Vận chuyển giao diện người dùng web làm chế độ phân phối chính
- Tự tái cấu trúc các giao thức API, MCP hoặc A2A như một phần của công việc UX này
- Thay thế tác giả `SKILL.md` bằng bảng quản trị dựa trên cơ sở dữ liệu---

## 4. Design Principles

### 4.1 Backward Compatibility First

Các lệnh này phải tiếp tục hoạt động chính xác như hiện nay:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills find figma --tool con trỏ --install --yes`
- `npx omni-skills mcp luồng --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Phiên cuối tương tác không có đối số: trải nghiệm có hướng dẫn mở
- Lệnh gọi không tương tác không có đối số: duy trì hành vi mặc định của cài đặt hiện tại
- Các lệnh và cờ rõ ràng luôn chiến thắng suy luận UI### 4.3 Reuse One Engine Across Modes

Những điều sau đây sẽ có chung logic nội bộ:

- CLI gắn cờ đầu tiên
- CLI chế độ văn bản được hướng dẫn
- giao diện người dùng thiết bị đầu cuối trực quan

Điều đó có nghĩa là lớp UX không được sở hữu logic nghiệp vụ. Nó sẽ phối hợp các hành động có thể tái sử dụng.### 4.4 Preview Before Write

Tất cả các luồng hướng dẫn gây ra thao tác ghi sẽ hiển thị:

- mục tiêu được giải quyết
- đường dẫn đã giải quyết
- các kỹ năng hoặc gói được chọn
- lệnh CLI tương đương
- nhắc nhở xác nhận### 4.5 Visual Does Not Mean Implicit

Ngay cả trong giao diện người dùng phong phú hơn, hệ thống vẫn phải thể hiện trạng thái và hành động rõ ràng:

- quá trình cài đặt sẽ diễn ra ở đâu
- những gì sẽ được viết
- dịch vụ sẽ sử dụng phương tiện vận chuyển hoặc cảng nào
- luồng là chỉ đọc hay có khả năng ghi cục bộ---

## 5. User Personas

### 5.1 Expert CLI User

Nhu cầu:

- lệnh nhanh
- không có lời nhắc bắt buộc
- cờ ổn định
- khả năng viết chữ### 5.2 Guided Product User

Nhu cầu:

- sự lựa chọn rõ ràng
- không có giả định rằng phản hấp dẫn là mong muốn
- hỗ trợ cài đặt đường dẫn tùy chỉnh
- xem trước cài đặt dễ hiểu
- sự phân biệt rõ ràng giữa các hành động cài đặt và thời gian chạy máy chủ### 5.3 Operator / Platform User

Nhu cầu:

- khả năng khởi chạy MCP, API và A2A một cách trực quan
- mặc định lành mạnh
- tùy chọn điều chỉnh các cổng, vận chuyển, tính bền vững, chế độ thực thi, xác thực và chế độ cục bộ---

## 6. Target UX Model

Sản phẩm nên lộ ra ba lớp:### 6.1 Expert Mode

Lệnh và cờ trực tiếp.

Ví dụ:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp luồng --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Được kích hoạt khi:

- người dùng chạy `npx omni-skills` trong TTY mà không có đối số
- người dùng chạy `npx omni-skills install` mà không có bộ chọn cụ thể
- người dùng chọn rõ ràng chế độ được hướng dẫn

Luồng cài đặt được hướng dẫn sẽ đi qua:

1. khách hàng mục tiêu hoặc đường dẫn tùy chỉnh
2. kiểu cài đặt
3. lựa chọn kỹ năng hoặc gói
4. xem trước
5. xác nhận
6. thi hành
7. các bước tiếp theo### 6.3 Visual Operations Hub

Kích hoạt bởi:

- `giao diện người dùng đa năng npx`

Đây sẽ trở thành “màn hình chính” dành cho người dùng và người vận hành không phải là chuyên gia.

Hành động cốt lõi:

- kỹ năng cài đặt
- khám phá kỹ năng
- khởi động MCP
- bắt đầu API
- bắt đầu A2A
- chạy bác sĩ
- chạy kiểm tra khói---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Kết quả:

- `npx omni-skills` trong TTY không còn âm thầm đảm nhận Phản trọng lực nữa
- người dùng được nhắc chọn máy khách hoặc đường dẫn tùy chỉnh

Yêu cầu:

- duy trì hành vi cài đặt mặc định không phải TTY
- thêm bộ chọn mục tiêu
- hỗ trợ chụp đường dẫn tùy chỉnh### Phase 2: Guided Install Wizard

Kết quả:

- quá trình cài đặt trở thành một quy trình được hướng dẫn đầy đủ

Yêu cầu:

- Lựa chọn chế độ cài đặt:
  - thư viện đầy đủ
  - một kỹ năng
  - một bó
  - tìm kiếm rồi cài đặt
- cài đặt xem trước
- kết xuất lệnh tương đương
- xác nhận và thực hiện### Phase 3: Visual Terminal Shell

Kết quả:

- giao diện người dùng văn bản cơ bản hiện tại trở thành ứng dụng thiết bị đầu cuối có thương hiệu

Yêu cầu:

- bố cục phong phú hơn
- xây dựng thương hiệu và logo dự án
- bước và thẻ tốt hơn
- điều hướng bằng bàn phím
- Triển khai thiết bị đầu cuối phản ứng thông qua Ink### Phase 4: Visual Service Hub

Kết quả:

- MCP, API và A2A có thể khởi động được từ giao diện người dùng trực quan

Yêu cầu:

- luồng MCP có hướng dẫn
- luồng API được hướng dẫn
- luồng A2A được hướng dẫn
- chế độ hiển thị và xem trước cấu hình### Phase 5: Saved Profiles and Repeatability

Kết quả:

- cài đặt trước dịch vụ hoặc cài đặt chung có thể được sử dụng lại

Yêu cầu:

- nhớ các mục tiêu gần đây
- cài đặt trước dịch vụ đã lưu
- các lệnh gần đây
- gói hoặc kỹ năng yêu thích### Phase 6: Hardening, Tests, and Documentation

Kết quả:

- UX trở thành một giao diện công cộng được duy trì, không phải là một tiện ích đặc biệt

Yêu cầu:

- che phủ khói
- kiểm tra hồi quy
- cập nhật tài liệu
- hướng dẫn vận hành
- đánh giá khả năng tương thích gói---

## 8. Proposed Command Model

### Stable Commands

- `kỹ năng đa năng`
- `cài đặt kỹ năng omni`
- `tìm kiếm kỹ năng đa năng`
- `omni-kỹ năng ui`
- `omni-skills mcp`
- `api kỹ năng đa năng`
- `kỹ năng đa năng a2a`
- `bác sĩ đa năng`
- `kỹ năng đa năng`### Recommended Behavior

| Lời mời | Hành vi |
|:----------|:----------|
| `omni-skills` trong TTY, không có đối số | Mục cài đặt có hướng dẫn |
| `omni-skills` trong non-TTY, không có đối số | Cài đặt mặc định AntiGravity hiện tại |
| `cài đặt omni-skills` trong TTY, không có bộ chọn | Trình hướng dẫn cài đặt có hướng dẫn |
| `cài đặt omni-skills --guided` | Luồng cài đặt có hướng dẫn bắt buộc |
| `omni-skills ui` | Mở trung tâm hoạt động trực quan |
| cờ rõ ràng | Thực hiện trực tiếp mà không đi vòng vào luồng được hướng dẫn |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Tùy chọn:

- Mã Claude
- Con trỏ
- Song Tử CLI
- Codex CLI
- Kiro
- Phản trọng lực
- Mã mở
- Đường dẫn tùy chỉnh

Đầu ra:

- mục tiêu đã biết đã chọn HOẶC đường dẫn hệ thống tệp tùy chỉnh### Step 2: Choose Install Type

Tùy chọn:

- thư viện đầy đủ
- một kỹ năng được công bố
- một bó
- tìm kiếm rồi cài đặt

Đầu ra:

- phạm vi cài đặt### Step 3: Resolve Selection

Tùy thuộc vào loại cài đặt:

- thư viện đầy đủ: không có bộ chọn bổ sung
- kỹ năng: liệt kê hoặc chọn một kỹ năng
- bó: liệt kê hoặc chọn một bó
- tìm kiếm: nhắc truy vấn, hiển thị các kỹ năng và gói phù hợp### Step 4: Preview

Hiển thị:

- mục tiêu đã chọn
- đường dẫn đã giải quyết
- kỹ năng hoặc gói đã chọn
- lệnh CLI tương đương
- luồng có chọn lọc hay cài đặt đầy đủ### Step 5: Confirm

Người dùng xác nhận:

- có → thực hiện
- không → hủy bỏ hoặc quay lại### Step 6: Result

Hiển thị:

- thành công/thất bại
- đường dẫn đích
- gợi ý bước tiếp theo---

## 10. Information Architecture for the Visual Operations Hub

Trung tâm hoạt động sẽ hiển thị:### 10.1 Install

- quy trình cài đặt có hướng dẫn
- tìm kiếm kỹ năng hoặc gói
- đường dẫn tùy chỉnh### 10.2 Discover

- tìm kiếm danh mục
- bộ lọc
- siêu dữ liệu xem trước
- bàn giao cài đặt### 10.3 MCP

Tùy chọn:

- phương tiện giao thông: stdio, suối, sse
- bật/tắt chế độ cục bộ
- chủ nhà
- cổng### 10.4 API

Tùy chọn:

- chủ nhà
- cổng
- xác thực tùy chọn
- giới hạn tỷ lệ tùy chọn### 10.5 A2A

Tùy chọn:

- chủ nhà
- cổng
- loại cửa hàng: bộ nhớ, json, sqlite
- người thực thi: nội tuyến, quy trình
- tùy chọn cho thuê khi hàng đợi sqlite được bật### 10.6 Diagnostics

- bác sĩ
- khói---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Các kết hợp `tools/bin/cli.js` hiện tại:

- phân tích lệnh
- trình bày
- lời nhắc tương tác
- phối hợp hành động
- khởi động dịch vụ

Cấu trúc mới sẽ chuyển logic có thể tái sử dụng sang:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` sẽ vẫn là phần phụ trợ có khả năng ghi.

Giao diện người dùng được hướng dẫn sẽ gọi phần phụ trợ của trình cài đặt hiện có thay vì lặp lại logic cài đặt.### 11.3 Keep Find/Search Reusable

Trình hướng dẫn cài đặt được hướng dẫn sẽ sử dụng lại cùng logic tìm kiếm CLI và lõi danh mục đã được cấp nguồn:

- `tìm`
- cài đặt bản xem trước
- độ phân giải bó### 11.4 Prepare for Ink Without Forcing It Early

Lần gửi đầu tiên có thể ở dạng lời nhắc ở chế độ văn bản.

Tuy nhiên, kiến ​​trúc phải có đường nối rõ ràng để sau này luồng văn bản có thể được hiển thị qua Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Giảm nhẹ:

- chỉ tự động mở giao diện người dùng được hướng dẫn trong TTY
- giữ nguyên mặc định hiện tại ở chế độ không phải TTY
- bảo toàn các luồng cờ rõ ràng### 12.2 Letting UI Own Business Logic

Giảm nhẹ:

- di chuyển sự phối hợp sang các mô-đun hành động có thể tái sử dụng
- giữ logic khởi động trình cài đặt và dịch vụ bên dưới lớp giao diện người dùng### 12.3 Ink Migration Too Early

Giảm nhẹ:

- đầu tiên gửi luồng hướng dẫn trong ngăn xếp thiết bị đầu cuối Node hiện tại
- sau đó di chuyển sang Ink khi ngữ nghĩa của luồng ổn định### 12.4 Incomplete Service UX

Giảm nhẹ:

- cài đặt trình hướng dẫn cài đặt đầu tiên
- sau đó khởi chạy dịch vụ được hướng dẫn theo lớp---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` trong TTY không còn được cài đặt ngay lập tức
- người dùng có thể chọn khách hàng mục tiêu hoặc đường dẫn tùy chỉnh
- lệnh gọi không có đối số TTY vẫn hoạt động như trước### Phase 2

- hướng dẫn cài đặt hỗ trợ đầy đủ thư viện, kỹ năng, gói và tìm kiếm rồi cài đặt
- bản xem trước luôn được hiển thị trước khi viết
- lệnh tương đương được hiển thị### Phase 3

- tồn tại giao diện người dùng thiết bị đầu cuối có thương hiệu
- giao diện người dùng có cấu trúc trực quan hơn các menu đọc đơn giản
- điều hướng thân thiện với bàn phím### Phase 4

- người dùng có thể khởi động MCP, API và A2A từ trung tâm trực quan
- các tùy chọn thời gian chạy chính có thể được cấu hình ở dạng hướng dẫn### Phase 5

- tùy chọn gần đây hoặc đã lưu có thể được sử dụng lại
- các luồng lặp lại mất ít lời nhắc hơn### Phase 6

- vùng phủ khói phản ánh các điểm vào UX mới
- tài liệu mô tả chế độ hướng dẫn và hành vi của trình hướng dẫn dịch vụ---

## 14. Execution Order

Lộ trình này phải được thực hiện theo trình tự sau:

1. Lựa chọn điểm vào có hướng dẫn
2. Hướng dẫn cài đặt có hướng dẫn
3. Vỏ thiết bị đầu cuối trực quan
4. Trung tâm dịch vụ trực quan
5. Hồ sơ đã lưu và độ lặp lại
6. Làm cứng, kiểm tra và đánh bóng tài liệu

Công việc triển khai nên đọc tệp nhiệm vụ liên quan trước khi bắt đầu mỗi nhiệm vụ để công việc CLI luôn bám sát kế hoạch và không bị trôi dạt.