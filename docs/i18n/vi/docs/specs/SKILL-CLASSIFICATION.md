# 📊 Skill Classification and Metadata (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Trình phân loại cục bộ chấm điểm mọi kỹ năng trong quá trình xác thực và xây dựng, tạo hồ sơ có thể đọc được bằng máy cho toàn bộ danh mục.**---

## 📊 Status

| Đầu ra | Đã tạo |
|:-------|:----------|
| ✅ Gốc `metadata.json` | Tóm tắt toàn bộ kho lưu trữ |
| ✅ Mỗi kỹ năng `skills/<skill>/metadata.json` | Phân loại cá nhân |
| ✅ Danh mục `dist/catalog.json` | Danh mục đã xuất bản có điểm |
| ✅ Manifests `dist/manifests/<skill>.json` | Dữ liệu có thể đọc được bằng máy theo kỹ năng |

Được tạo bởi: `python3 tools/scripts/validate_skills.py`

Ảnh chụp nhanh kho lưu trữ hiện tại:

- 32 kỹ năng được công bố
- điểm chất lượng trung bình `96,3`
- điểm thực hành tốt nhất trung bình `98,7`
- điểm bảo mật trung bình `95,0`
- mức chênh lệch chất lượng hiện tại `94, 95, 96, 97, 100`
- cách thực hành tốt nhất hiện nay về mức chênh lệch `98, 99, 100`---

## 🎯 Purpose

Trình phân loại cung cấp cho mọi kỹ năng một**hồ sơ nhất quán mà máy có thể đọc được**trước khi đưa vào danh mục. Nó thực hiện bốn công việc:

1. 📋**Phân tích cú pháp**— YAML frontmatter và markdown body
2. 🏷️**Bình thường hóa**— Nhãn danh mục theo phân loại chuẩn
3. 📊**Phân loại**— Mức độ trưởng thành, các phương pháp hay nhất, chất lượng và tính điểm bảo mật
4. 📁**Emit**— Tạo phẩm siêu dữ liệu được sử dụng bởi tập lệnh xây dựng, tài liệu và CI---

## 🏷️ Canonical Taxonomy

**18 danh mục chuẩn**với ánh xạ bí danh tự động:

| Danh mục | Tên miền | Bí danh chung |
|:----------|:-------|:---------------|
| 💻 `phát triển` | Nhà phát triển phần mềm tổng hợp | `viết mã`, `lập trình` |
| 🎨 `giao diện người dùng` | Giao diện & Giao diện người dùng | `ui`, `thiết kế web` |
| 🔧 `phụ trợ` | Phần phụ trợ & API | `máy chủ`, `api` |
| 🌐 `fullstack-web` | Web đầu cuối | `web`, `đầy đủ` |
| 🛠️ `công cụ` | Công cụ dành cho nhà phát triển | `tiện ích` |
| ⚙️ `cli-tự động hóa` | CLI & tự động hóa | `viết kịch bản`, `quy trình làm việc` |
| 📊 `kinh doanh` | Chiến lược kinh doanh | `chiến lược` |
| 📐 `sản phẩm` | Quản lý sản phẩm | `chiều` |
| 🎯 `thiết kế` | Thiết kế trực quan & UX | `ux` |
| 🤖 `data-ai` | Ứng dụng dữ liệu & AI | `dữ liệu`, `phân tích` |
| 🧠 `ai-đại lý` | Mẫu tác nhân AI | `đại lý` |
| 📈 `học máy` | Mô hình ML & đào tạo | `ml` |
| 🔌 `devops` | Cơ sở hạ tầng | `cơ sở hạ tầng`, `đám mây` |
| 🛡️ `kiểm tra-bảo mật` | Kiểm tra & bảo mật | `kiểm tra`, `bảo mật`, `qa` |
| 📖 `tài liệu` | Quản lý tài liệu | `tài liệu` |
| 🎬 `content-media` | Sáng tạo nội dung | `phương tiện`, `nội dung` |
| 💬 `giao tiếp` | Công cụ truyền thông | `trò chuyện` |
| ❓ `chưa được phân loại` | Dự phòng mặc định | — |

> Các nhãn kế thừa như `quy trình làm việc`, `kiến trúc`, `cơ sở hạ tầng` được tự động chuẩn hóa thông qua ánh xạ bí danh.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Cấp độ | Nhãn | Tiêu chí |
|:------|:------|:----------|
|**L1**| `siêu dữ liệu` | Frontmatter cộng với cơ thể tối thiểu |
|**L2**| `hướng dẫn` | Hướng dẫn bằng văn bản quan trọng |
|**L3**| `tài nguyên` | Tập lệnh đi kèm hoặc tài nguyên đóng gói phong phú hơn |

Các tín hiệu bổ sung được theo dõi: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

Heuristic đánh giá:

| Tín hiệu | Nó kiểm tra những gì |
|:-------|:--------------|
| 📛 Chất lượng sên | định dạng trường `name` |
| 📝 Mô tả | Rõ ràng, dài dòng, đầy đủ thông tin |
| 📐 Cấu trúc | Phần tài liệu và phân cấp |
| 💡 Ví dụ | Hàng rào mã và khối ví dụ |
| 🔗 Tài liệu tham khảo | Các trình trợ giúp `tham chiếu/`, `scripts/` và gói hỗ trợ được liên kết cục bộ |
| 🧰 Khả năng hoạt động | Ví dụ về tập lệnh cục bộ có thể chạy được và đoạn mã quy trình công việc cụ thể |
| 🧩 Độ sâu gói hỗ trợ | Nhiều nhóm hỗ trợ, tệp có thể tái sử dụng, siêu dữ liệu tác nhân và nội dung hoạt động |
| 🩺 Khắc phục sự cố | Cặp `Triệu chứng` và `Giải pháp` rõ ràng |
| 📚 Bảo hiểm | Các phần `Khi nào nên sử dụng`, `Các phương pháp hay nhất`, `Khắc phục sự cố` và `Tài nguyên bổ sung` |
| 🌐 Tính di động | Từ ngữ bất khả tri về công cụ |
| 📅 Tươi ngon | Tránh ngày tháng được mã hóa cứng |

**Phân bậc hiện tại**

| Bậc | Phạm vi điểm |
|:------|:----------|
| `xuất sắc` | 90-100 |
| `tốt` | 70-89 |
| `công bằng` | 50-69 |
| `cần-làm việc` | 0-49 |

Người ghi bàn cố tình**đủ ngữ nghĩa để tạo ra sự lan tỏa**cho các kỹ năng trưởng thành. Một kỹ năng có cấu trúc rõ ràng có thể đạt điểm cao, nhưng để đạt đến top đầu nó cũng cần những tín hiệu có chiều sâu như:

- nhiều ví dụ, không chỉ một
- nhiều trường hợp khắc phục sự cố
- Hướng dẫn các kỹ năng liên quan
- gói hỗ trợ địa phương phong phú hơn
- nhiều hơn một họ hỗ trợ ngoài văn xuôi đơn thuần, lý tưởng nhất là bao gồm `tác nhân/` hoặc `tài sản/` nơi chúng bổ sung khả năng sử dụng thực sự
- phần `## Workflow` chuyên dụng với các bước có thể đếm được
- ít nhất một bảng hoạt động nhỏ hoặc sơ đồ quyết định khi nó cải thiện tính rõ ràng trong thực thi
- hoạt động cụ thể hơn so với mẫu đơn giản
- độ sâu quy trình làm việc rõ ràng hơn và tài sản hỗ trợ quyết định
- độ sâu của gói hỗ trợ vượt xa một tệp `tham chiếu/` và một tập lệnh được liên kết
- đủ các tệp hỗ trợ có thể tái sử dụng để tạo cảm giác giống như một bộ quy trình làm việc chứ không phải một tiện ích bổ sung chỉ có một ghi chú
- mật độ hoạt động đủ để tách một phác thảo bóng bẩy khỏi bộ công việc có thể tái sử dụng

Điều đó có nghĩa là một kỹ năng hoàn chỉnh về mặt cấu trúc vẫn có thể đạt đến mức cao nhất là 90 thay vì `100` nếu gói hỗ trợ của nó hẹp hơn, nội dung quyết định mỏng hơn hoặc mật độ hoạt động của nó thấp hơn các kỹ năng mạnh nhất trong danh mục.---

### ⭐ Quality Score (0-100)

Heuristic kết hợp:

| Tín hiệu | Cân nặng |
|:-------|:-------|
| 📝 Cơ thể hoàn thiện | Trung bình-cao |
| 📋 Mô tả chính xác | Trung bình |
| 📊 Tính đầy đủ của siêu dữ liệu | Trung bình |
| 📅 Lần gần đây (`date_updated`) | Trung bình |
| 📦 Tài nguyên đóng gói | Trung bình |
| 📋 Đóng góp các phương pháp hay nhất | Trung bình |
| 🧠 Chiều sâu ngữ nghĩa | Trung bình-cao |
| 🛠️ Độ sâu hoạt động | Trung bình |
| 📚 Gói hỗ trợ phong phú | Trung bình |

**Các mức chất lượng:**

| Bậc | Phạm vi điểm |
|:------|:----------|
| 💎 `bạch kim` | 80+ |
| 🥇 `vàng` | 65-79 |
| 🥈 `bạc` | 50-64 |
| 🥉 `đồng` | 35-49 |
| 🌱 `khởi đầu` | 0-34 |---

### 🛡️ Security Score (0-100)

Lớp bảo mật kết hợp:

| Máy quét | Luôn bật | Nó làm gì |
|:--------|:---------------|:-------------|
| 🔍**Tĩnh**| ✅ Có | Quét SKILL.md, các tệp được đóng gói và tập lệnh |
| 🦠**NghêuAV**| ⚙️ Tùy chọn | Quét phần mềm độc hại qua `clamscan` |
| 🔒**Tổng cộng virus**| ⚙️ Tùy chọn | Tra cứu băm (không tải lên) |

**Các họ quy tắc quét tĩnh:**
- 🎭 Mô hình tiêm và lọc nhanh chóng
- 💣 Lệnh shell hủy diệt
- 🔑 Đường dẫn thông tin xác thực hoặc hệ điều hành đáng ngờ
- ⚠️ Tập lệnh gốc nguy hiểm (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Hình dạng đầu ra bảo mật:**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

| Phần | Lĩnh vực |
|:--------|:-------|
| 🆔 Bản sắc | `id`, `sên`, `display_name` |
| 🏷️ Phân loại | `danh_mục_thô`, `danh_mục_chuẩn`, `danh_mục_suy luận` |
| 📋 Tác giả | thẻ, công cụ, độ phức tạp, rủi ro, nguồn, tác giả |
| 📅 Ngày & đường dẫn | `date_add`, `date_updated`, đường dẫn |
| 📊 Tài nguyên | Bộ đếm tệp và tài liệu tham khảo |
| 📝 Tín hiệu nội dung | Đếm từ, chiều dài nội dung, cờ cấu trúc |
| 🧠 Chiều sâu ngữ nghĩa | Các bước quy trình làm việc, ví dụ, độ sâu khắc phục sự cố, nội dung quyết định, nhóm liên kết hỗ trợ |
| 🧩 Cấu trúc gói hỗ trợ | Số lượng tệp hỗ trợ, các họ được liên kết, `tác nhân/`, `tài sản/` và các ví dụ có thể sử dụng lại |
| 🎯 Trưởng thành | Cờ cấp độ, nhãn, tập lệnh/tệp |
| 📋 Các phương pháp hay nhất | Điểm và hạng |
| ⭐ Chất lượng | Phân tích điểm, bậc và ngữ nghĩa |
| 🛡️ An ninh | Điểm, bậc, trạng thái, kết quả |
| ✅ Xác thực | Trạng thái, lỗi, cảnh báo |### Root (`metadata.json`)

| Phần | Lĩnh vực |
|:--------|:-------|
| 📊 Tóm tắt | Đếm, tính trung bình, phân bố danh mục |
| 🏷️ Phân loại | Số lượng danh mục |
| 🎯 Phân phối | Cấp độ kỹ năng, cấp chất lượng, cấp độ bảo mật |
| ✅ Xác thực | Số lượng trạng thái |
| 📋 Danh sách kỹ năng | Tóm tắt nhỏ gọn theo từng kỹ năng |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

Điều này định cấu hình `git` để sử dụng `.githooks/pre-commit`, giúp tái tạo siêu dữ liệu và các tạo phẩm danh mục trước khi cam kết và tự động xử lý các tệp được tạo.