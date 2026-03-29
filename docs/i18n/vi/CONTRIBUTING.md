# 🤝 Contributing to Omni Skills (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills chứa cả danh mục kỹ năng và các bề mặt thời gian chạy được xây dựng dựa trên danh mục đó.**
> Đóng góp có thể nhắm mục tiêu vào một trong hai khu vực, nhưng cả hai đều phải phù hợp với các tạo phẩm được tạo và hành vi CLI hiện tại.---

## 📊 Repository Baseline

| Số liệu | Giá trị |
|:-------|:------|
| 📦 Phiên bản trọn gói | `0.1.3` |
| 🧠 Kỹ năng công bố | `32` |
| 📦 Các gói được hỗ trợ đầy đủ | `7` |
| 🖥️ Khách hàng có khả năng cài đặt | `7` |
| 🔌 Máy khách có khả năng cấu hình MCP | `16` |
| 🔄 Phát hành tự động | Đã bật trên `chính` |---

## Quan trọng

| Cái gì | Ở đâu |
|:------|:------|
| 🧠 Kỹ năng được tác giả trong | `skills/<skill-name>/SKILL.md` |
| 📖 Mẫu và hướng dẫn dành cho người đóng góp | `tài liệu/người đóng góp/` |
| 🧾 Luồng PR chuẩn mực cho các kỹ năng mới | [Quy trình PR kỹ năng](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Kỹ năng bản xứ thuộc về | `skills/` (bất kỳ ngôn ngữ nào) |
| ✨ Các dẫn xuất nâng cao được tuyển chọn | `skills_omni/` (Chỉ bằng tiếng Anh, tự động) |
| 🚫 `skills_omni/` được bảo vệ | Không mở cho sự đóng góp trực tiếp của công chúng |
| 📖 Tài liệu về thời gian chạy và kiến ​​trúc | `tài liệu/` |
| 📄 Tệp cộng đồng | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Loại | Khu vực |
|:------|:------|
| 🧠 Thêm hoặc cải thiện kỹ năng | `kỹ năng/` |
| 📖 Cập nhật hướng dẫn dành cho cộng tác viên | `tài liệu/người đóng góp/` |
| 🖥️ Cải thiện CLI, trình cài đặt hoặc tập lệnh | `công cụ/` |
| 📦 Cải thiện thời gian chạy danh mục hoặc gói giao thức | `gói/` |
| 🧪 Siết chặt kiểm tra, kiểm tra khói hoặc phát hành tài liệu | Khác nhau |---

## Bắt đầu nhanh

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Mở PR khi đã bật `Cho phép chỉnh sửa từ người bảo trì`.**---

## Tài liệu

Một kỹ năng bản xứ tốt nên:

- ✅ Giải quyết một vấn đề cụ thể một cách rõ ràng
- ✅ Có thể tái sử dụng qua nhiều dự án
- ✅ Bao gồm các hướng dẫn mà một đại lý thực sự có thể làm theo
- ✅ Tránh nội dung mơ hồ, dư thừa
- ✅ Khai báo chính xác siêu dữ liệu về mặt trước và khả năng tương thích khi có
- ✅ Vùng đất có tạo phẩm phân loại `metadata.json` được tạo sau khi chạy tự động hóa### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Mẹo:**Gói kỹ năng cấp phát hành phải bao gồm `agent/`, `references/`, `examples/` và `scripts/`. Nhưng bề mặt tiếp nhận được cho phép một cách có chủ ý - cho phép một kỹ năng đến tự nhiên tối thiểu và đường dẫn tăng cường tạo ra đạo hàm mạnh hơn.### 🌐 Language Policy

| Bề mặt | Ngôn ngữ được chấp nhận |
|:--------|:-------------------|
| 📥 `skills/` (trình độ bản xứ) | Tiếng Bồ Đào Nha, tiếng Anh hoặc bất kỳ ngôn ngữ nào |
| ✨ `skills_omni/` (đầu ra được tuyển chọn) | Chỉ tiếng Anh |

> Công cụ cải tiến riêng giữ nguyên nguồn gốc như đã gửi và viết lại đạo hàm được tuyển chọn bằng tiếng Anh.

📖 Để biết trình tự đánh giá chi nhánh, xác thực và nâng cao đầy đủ, hãy sử dụng [Quy trình làm việc PR kỹ năng](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Chạy cái này trước khi mở PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<chi tiết>
<summary>📋 <strong>Những gì <code>npm run validation</code> tái tạo</strong></summary>

- `siêu dữ liệu.json`
- `skills/<skill>/metadata.json`
- Lập bản đồ phân loại Canonical
- Điểm trưởng thành, thực tiễn tốt nhất, chất lượng và bảo mật
- Phát hiện bảo mật tĩnh
- Tùy chọn trạng thái quét ClamAV và VirusTotal (khi được định cấu hình)</details>

>**⚠️ Quan trọng:**Xác thực là hợp đồng được CLI, API, MCP, A2A, bảng kê khai, kho lưu trữ và tự động hóa phát hành sử dụng. Coi siêu dữ liệu được tạo như một phần của bề mặt đánh giá chứ không phải đầu ra dùng một lần.### 📥 Intake Policy

| Tình trạng | Hành vi |
|:----------|:----------|
| Vấn đề còn thiếu/không đầy đủ | ⚠️ Cảnh báo (không chặn) |
| Những phát hiện bảo mật quan trọng | 🚫 Chặn lượng ăn vào |
| Lỗi xác thực cứng | 🚫 Chặn lượng ăn vào |
| Tiêu chuẩn biên tập chặt chẽ hơn | Được thực thi trong dòng phái sinh nâng cao, không phải ở lượng tiêu thụ tự nhiên |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<chi tiết>
<summary>📋 <strong>Smoke pass xác nhận điều gì</strong></summary>

- ✅ Xác nhận kỹ năng
- ✅ Tạo danh mục
- ✅ Tạo danh mục tài liệu
- ✅ Bộ thử nghiệm
- ✅ `npm pack --dry-run`
- ✅ Khởi động API
- ✅ MCP boot trong `stdio`, `stream`, và `sse`
- ✅ Ủng A2A
- ✅ Lưu trữ xác minh và đóng gói mong đợi</details>

---

## 📋 Skill Frontmatter

Frontmatter được khuyến khích mạnh mẽ. Sử dụng [Mẫu kỹ năng](docs/contributors/SKILL-TEMPLATE.md) làm đường cơ sở.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<chi tiết>
<tóm tắt>🏷️ <strong>Danh mục phân loại chuẩn</strong></tóm tắt>

| Danh mục | Danh mục |
|:----------|:----------|
| `phát triển` | `giao diện người dùng` |
| `phụ trợ` | `fullstack-web` |
| `công cụ` | `cli-tự động hóa` |
| `kinh doanh` | `sản phẩm` |
| `thiết kế` | `dữ liệu-ai` |
| `ai-đại lý` | `học máy` |
| `devops` | `kiểm tra-bảo mật` |
| `tài liệu` | `nội dung-phương tiện` |
| `giao tiếp` | `chưa được phân loại` |</details>

>**ℹ️**Phiên bản kỹ năng độc lập với phiên bản gói npm. Nếu một kỹ năng gốc chưa có frontmatter, nó sẽ được chấp nhận kèm theo cảnh báo và lấy siêu dữ liệu tạm thời từ thư mục, tiêu đề và nội dung.---

## ⚙️ Runtime Contributions

Nếu bạn chạm vào `packages/`, `tools/bin/`, `tools/lib/` hoặc build script:

- 📦 Giữ `dist/` và tài liệu phù hợp với quá trình triển khai
- 🔄 Ưu tiên sử dụng lại `packages/catalog-core` thay vì sao chép logic danh mục
- 🔒 Giữ hành vi ghi cục bộ ở chế độ mặc định xem trước hoặc chạy thử
- 🔌 Giữ kỷ luật cho người viết MCP — chỉ thêm người viết cấu hình hạng nhất khi khách hàng có hợp đồng cấu hình công khai ổn định
- 🛡️ Coi các cảnh báo của máy quét bảo mật như một phần của thanh đánh giá
- 🧪 Cập nhật các bài kiểm tra khi thay đổi lệnh CLI, chế độ truyền tải hoặc điểm cuối công cộng### 🚧 Important Boundary

| Hãy làm điều này ✅ | Đừng làm điều này 🚫 |
|:-------------|:-----------------|
| Gửi tác phẩm bản địa dưới `skills/` | Mở PR thủ công chỉnh sửa `skills_omni/` |
| Hãy để tự động hóa xử lý việc chạy bộ tăng cường | Thêm trực tiếp nội dung được tuyển chọn |
| Tập trung vào chất lượng kỹ năng hợp pháp | Bỏ qua luồng PR đồng hành tự động |

>**ℹ️**Khi một kỹ năng gốc trong `skills/` được cập nhật, trình tăng cường riêng tư sẽ xử lý lại kỹ năng đó và làm mới đường cơ sở nâng cao.---

## 🔄 Enhancer Outcome States

Trong quá trình PR kỹ năng bản địa công khai, trình nâng cao sẽ báo cáo một trong bốn trạng thái:

| Tiểu bang | Ý nghĩa |
|:------|:--------|
| ✅ `hoàn thành` | Công cụ phái sinh nâng cao được tạo rõ ràng, đủ điều kiện cho `skills_omni/` |
| ⚠️ `xuống cấp` | Đã hoàn thành với chuyển động dự phòng hoặc điểm yếu hơn — kiểm tra cẩn thận hơn |
| 🚫 `bị chặn` | Đã dừng vì lý do cơ sở hạ tầng hoặc xác thực — ngăn chặn việc tự động xuất bản |
| ❌ `thất bại` | Lỗi không mong muốn — yêu cầu người bảo trì điều tra |

>**📝 Người đóng góp**không cần khắc phục các vấn đề về cơ sở hạ tầng của trình nâng cao. Trách nhiệm là gửi một kỹ năng bản địa hợp pháp và giữ cho repo luôn xanh.---

## 🔄 Automatic Release Policy

Khi một thay đổi xảy ra trên `main` và bao gồm:

- `kỹ năng/**`
- `skills_omni/**`
- `data/bundles.json`

…kho lưu trữ phát hành**tự động phát hành gói**.### 📋 Version Bump Rule

| Từ | Đến | Quy tắc |
|:------|:---|:------|
| `0.1.0` | `0.1.1` | Bản vá +1 |
| `0.1.9` | `0.1.10` | Bản vá +1 |
| `0.1.10` | `0.2.0` | Chuyển sang phần tiếp theo, đặt lại bản vá |

> Luồng phát hành sẽ tạo lại danh mục/kho lưu trữ, xác nhận phiên bản, gắn thẻ bản phát hành, xuất bản npm và tự động tạo bản phát hành GitHub.---

## 📝 Commit Conventions

| Tiền tố | Sử dụng cho |
|:-------|:--------|
| `chiến công:` | Kỹ năng hoặc tính năng mới |
| `sửa:` | Sửa lỗi |
| `tài liệu:` | Thay đổi tài liệu |
| `tái cấu trúc:` | Dọn dẹp mã hoặc thay đổi cấu trúc |
| `kiểm tra:` | Kiểm tra thay đổi |
| `việc vặt:` | Bảo trì |---

## ❓ Need Help?

| Kênh | Liên kết |
|:--------|:------|
| 💬 Câu hỏi | [Mở một cuộc thảo luận](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Lỗi | [Mở một vấn đề](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Phản hồi sớm | [Mở PR dự thảo](https://github.com/diegosouzapw/omni-skills/pulls) |