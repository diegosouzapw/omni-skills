# 🔬 Anatomy of a Well-Written Skill (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Các kỳ vọng về cấu trúc và chất lượng đối với Omni Skills `SKILL.md` — định dạng tác giả hỗ trợ toàn bộ danh mục.**---

## 📐 The Two Parts

Mỗi `SKILL.md` bao gồm hai phần riêng biệt:### 1️⃣ Frontmatter (YAML Metadata)

Siêu dữ liệu có thể đọc được bằng máy giữa các dấu phân cách `---`. Nó có sức mạnh:

- 📚 Chỉ số kỹ năng và tạo danh mục
- 🔎 Tìm kiếm và lọc CLI
- ✅ Thẩm định và chấm điểm chất lượng
- 📊 Đã tạo các tạo phẩm phân loại `metadata.json`
- 📋 Mỗi kỹ năng biểu hiện trong `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Hướng dẫn con người có thể đọc được (và tác nhân có thể đọc được). Viết nó như thể bạn đang**tóm tắt cho một nhà phát triển cấp cao**về cách thực hiện một nhiệm vụ - đủ cụ thể để nhân viên AI có thể làm theo mà không cần đoán.---

## 📋 Frontmatter Reference

| Lĩnh vực | Bắt buộc | Loại | Mô tả |
|:------|:----------|:------|:----------|
| `tên` | ✅ | chuỗi | Phải khớp với tên thư mục, có gạch nối chữ thường |
| `mô tả` | ✅ | chuỗi | Mô tả một dòng (10-200 ký tự) |
| `phiên bản` | ⚡ | chuỗi | Phiên bản ngữ nghĩa của chính kỹ năng đó (ví dụ: `"0.1.1"`) |
| `danh mục` | ⚡ | chuỗi | Một danh mục kinh điển từ phân loại repo |
| `thẻ` | ⚡ | chuỗi[] | Thẻ có thể tìm kiếm để khám phá |
| `phức tạp` | ⚡ | chuỗi | `người mới bắt đầu` · `trung cấp` · `nâng cao` · `chuyên gia` |
| `rủi ro` | ⚡ | chuỗi | `an toàn` · `thận trọng` · `xúc phạm` · `nghiêm trọng` |
| `công cụ` | ⚡ | chuỗi[] | Đã thử nghiệm trợ lý mã hóa AI |
| `nguồn` | ⚡ | chuỗi | `omni-team` · `cộng đồng` · `chính thức` |
| `tác giả` | ⚡ | chuỗi | Ghi công |
| `ngày_thêm` | ⚡ | chuỗi | Ngày ISO |
| `ngày_cập nhật` | ⚡ | chuỗi | Ngày ISO |

> ✅ = Luôn được yêu cầu · ⚡ = Bắt buộc ở chế độ nghiêm ngặt

Phiên bản kỹ năng độc lập với phiên bản gói npm. Gói hiện tại là `0.1.3`, nhưng các kỹ năng hiện có có thể vẫn hợp lệ trên phiên bản ngữ nghĩa của riêng chúng.---

## 🏷️ Canonical Categories

Phân loại repo hiện xác định**18 danh mục chính tắc**:

| Danh mục | Tên miền |
|:----------|:-------|
| 💻 `phát triển` | Phát triển phần mềm tổng hợp |
| 🎨 `giao diện người dùng` | Khung giao diện người dùng và giao diện người dùng |
| 🔧 `phụ trợ` | Dịch vụ phụ trợ và API |
| 🌐 `fullstack-web` | Phát triển web toàn diện |
| 🛠️ `công cụ` | Công cụ và tiện ích dành cho nhà phát triển |
| ⚙️ `cli-tự động hóa` | Công cụ CLI và tập lệnh tự động hóa |
| 📊 `kinh doanh` | Quy trình và chiến lược kinh doanh |
| 📐 `sản phẩm` | Quản lý và thiết kế sản phẩm |
| 🎯 `thiết kế` | Thiết kế trực quan và UX |
| 🤖 `data-ai` | Kỹ thuật dữ liệu và ứng dụng AI |
| 🧠 `ai-đại lý` | Các mẫu và phát triển tác nhân AI |
| 📈 `học máy` | Mô hình ML và đào tạo |
| 🔌 `devops` | Cơ sở hạ tầng và triển khai |
| 🛡️ `kiểm tra-bảo mật` | Thực hành kiểm tra và bảo mật |
| 📖 `tài liệu` | Tạo và quản lý tài liệu |
| 🎬 `content-media` | Sáng tạo nội dung và truyền thông |
| 💬 `giao tiếp` | Công cụ giao tiếp và quy trình làm việc |
| ❓ `chưa được phân loại` | Mặc định khi không tìm thấy kết quả khớp |

> Các nhãn cũ như `quy trình làm việc`, `kiến trúc`, `cơ sở hạ tầng`, `bảo mật` và `thử nghiệm` được tự động chuẩn hóa thông qua ánh xạ bí danh.---

## 📝 Body Structure

Một phần kỹ năng được viết tốt tuân theo hệ thống phân cấp này:

### 👉 Tổng quan (Bắt buộc)
2-3 câu về**công dụng**của kỹ năng đó và**tại sao**nó tồn tại.

### 🎯 Khi nào nên sử dụng (Bắt buộc)
Danh sách dấu đầu dòng của**các tình huống cụ thể**áp dụng kỹ năng này.

### 📋 Hướng dẫn cơ bản (Bắt buộc)
**Quy trình từng bước**mà nhân viên hỗ trợ phải tuân theo. Hãy rõ ràng. Hãy cụ thể. Đại lý làm việc tốt nhất khi có hướng dẫn rõ ràng, rõ ràng.

### 💡 Ví dụ (Được khuyến nghị)
Lời nhắc cụ thể, khối mã hoặc kết quả đầu ra dự kiến.**Càng cụ thể càng tốt.**

### ✅ Các phương pháp hay nhất (Được khuyến nghị)
Sử dụng ✅ Do / ❌ Don't format để quét nhanh.

### 🔧 Khắc phục sự cố (Tùy chọn)
Các vấn đề thường gặp và giải pháp của họ.

### 🔗 Kỹ năng liên quan (Tùy chọn)
Tham khảo chéo các kỹ năng bổ sung.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Tập trung vào**một quy trình hoặc miền cụ thể**
- 👉 Hướng dẫn**đủ rõ ràng để AI**làm theo mà không cần sự giải thích của con người
- 💡 Bao gồm**ví dụ cụ thể**với hành vi dự kiến
- 🛡️ Có hướng dẫn**xử lý lỗi**phù hợp
- 📊 Tạo siêu dữ liệu lành mạnh: danh mục chuẩn, độ trưởng thành L2+, chất lượng 70+
- 🧰 Gửi gói hỗ trợ có thể tái sử dụng, không chỉ văn xuôi, lý tưởng nhất là trên `tài liệu tham khảo/`, `scripts/`, `examples/` và `agent/` khi thích hợp

Để biết các kiểu tính điểm mạnh mẽ hơn giúp đẩy các kỹ năng lên mức cao nhất, hãy xem [Playbook Điểm cao](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Lời khuyên chung chung có thể áp dụng cho mọi việc
- 🤷 Những hướng dẫn mơ hồ như "viết code hay"
- 🚫 Không có ví dụ hoặc khối mã
- ⚠️ Thiếu trường tiền đề
- 📉 Điểm chất lượng thấp (dưới 50)