# 📋 Skill Manifest Specification (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Tệp kê khai JSON mà máy có thể đọc được được tạo từ mỗi `SKILL.md` trong quy trình xây dựng — hợp đồng dữ liệu duy nhất được sử dụng bởi tất cả các nền tảng thời gian chạy.**---

## 📊 Status

| Tính năng | Tiểu bang |
|:--------|:------|
| ✅ Được tạo tự động từ SKILL.md | Đã triển khai |
| ✅ Được sử dụng bởi CLI, API, MCP, A2A | Đã triển khai |
| ✅ Lưu trữ với tổng kiểm tra | Đã triển khai |
| ✅ Phân loại bảo mật | Đã triển khai |

>**Quan trọng**: Tệp kê khai là**cấu phần bản dựng**. Tác giả cộng tác viên `SKILL.md` — quy trình tự động lấy ra tệp kê khai JSON.---

## 🎯 Purpose

Tệp kê khai tồn tại để**tất cả các bề mặt thời gian chạy**sử dụng cùng một hình dạng chuẩn hóa:

| Bề mặt | Nó sử dụng bảng kê khai như thế nào |
|:--------|:----------------------|
| 🖥️**CLI**| Tìm kiếm, cài đặt quy hoạch, chẩn đoán bác sĩ |
| 🌐**API**| Phản hồi điểm cuối, lọc, liên kết tải xuống |
| 🔌**MCP**| Công cụ phản hồi, nội dung tài nguyên |
| 🤖**A2A**| Tải trọng khám phá và đề xuất |---

## 📁 Output Locations

| Cổ vật | Đường dẫn |
|:----------|:------|
| 📊 Siêu dữ liệu gốc | `siêu dữ liệu.json` |
| 📊 Siêu dữ liệu theo kỹ năng | `skills/<skill>/metadata.json` |
| 📋 Chỉ số kỹ năng | `skills_index.json` |
| 📚 Danh mục đã xuất bản | `dist/catalog.json` |
| 👉 Bảng kê khai theo từng kỹ năng | `dist/manifests/<skill>.json` |
| 📦 Kho lưu trữ zip | `dist/archives/<skill>.zip` |
| 📦 Kho lưu trữ Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Bảng kê khai tổng kiểm tra | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Lĩnh vực | Mô tả |
|:------|:-------------|
| `lược đồ_version` | Phiên bản của lược đồ kê khai |
| `id` | Mã định danh kỹ năng ổn định từ trường `name` |
| `sên` | Sên thư mục trong `skills/` |
| `tên_hiển thị` | Tiêu đề con người có thể đọc được từ tiêu đề đầu tiên |### 📝 Metadata

| Lĩnh vực | Mô tả |
|:------|:-------------|
| `mô tả` | Tóm tắt ngắn từ frontmatter |
| `phiên bản` | Phiên bản kỹ năng, độc lập với phiên bản gói npm |
| `danh mục` | Danh mục Canonical (chuẩn hóa) |
| `danh mục thô` | Danh mục gốc từ frontmatter |
| `phân loại` | Siêu dữ liệu phân loại đầy đủ với dự phòng được suy luận |
| `thẻ` | Thẻ có thể tìm kiếm |
| `phức tạp` | `người mới bắt đầu` · `trung cấp` · `nâng cao` · `chuyên gia` |
| `rủi ro` | `an toàn` · `thận trọng` · `xúc phạm` · `nghiêm trọng` |
| `nguồn` | `omni-team` · `cộng đồng` · `chính thức` |
| `tác giả` | Chuỗi thuộc tính |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Lĩnh vực | Mô tả |
|:------|:-------------|
| `điểm vào` | Đường dẫn `SKILL.md` chuẩn |
| `path.root` | Thư mục kỹ năng bên trong repo |
| `path.manifest` | Đã tạo đường dẫn tệp kê khai trong `dist/` |### 🖥️ Compatibility

| Lĩnh vực | Mô tả |
|:------|:-------------|
| `công cụ` | Mã nhận dạng công cụ từ frontmatter |
| `install_target` | Siêu dữ liệu cài đặt trên mỗi công cụ |

Mỗi mục tiêu cài đặt bao gồm: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Lĩnh vực | Mô tả |
|:------|:-------------|
| `sub_resource` | Thư mục con kỹ năng (`tài liệu tham khảo`, `đại lý`, `tài sản`) |
| `hiện vật_đếm` | Tổng số tập tin trong gói kỹ năng |
| `tham khảo_đếm` | Số lượng tài liệu tham khảo |
| `đại lý_count` | Số lượng cấu hình đại lý |
| `tài sản_đếm` | Số lượng tệp tài sản |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Lĩnh vực | Mô tả |
|:------|:-------------|
| `chiến lược` | Chiến lược cài đặt (ví dụ: `copy-skill-directory`) |
| `current_installer` | Hành vi cài đặt có thể đọc được của con người |
| `công thức nấu ăn` | Công thức cài đặt cho mỗi khách hàng |### 📊 Classification

| Phần | Lĩnh vực |
|:--------|:-------|
| 🎯 `trưởng thành` | `cấp_kỹ năng`, `nhãn_cấp_kỹ năng` |
| 📋 `thực hành tốt nhất` | `điểm` (0-100) |
| ⭐ `chất lượng` | `điểm` (0-100) |
| 🛡️ `bảo mật` | `điểm`, `trạng thái` |
| ✅ `xác thực` | `trạng thái` |### 📝 Content

Các tín hiệu phái sinh: `body_length`, `content_length`, `body_lines`, `word_count`, cùng với các cờ cấu trúc cho ví dụ, phần khắc phục sự cố, v.v.### 📁 Artifacts

Mảng của mọi tệp được gửi trong thư mục kỹ năng:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Các loại hiện vật**: `điểm vào` · `tham chiếu` · `đại lý` · `tài sản` · `giấy phép` · `hỗ trợ`### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| Lĩnh vực | Mô tả |
|:------|:-------------|
| `điểm vào_sha256` | Băm của SKILL.md |
| `gói_sha256` | Thông báo xác định từ danh sách hiện vật được sắp xếp |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 👉 Phiên bản gói kho lưu trữ và phiên bản kỹ năng là những mối quan tâm khác nhau. Gói hiện tại là `0.1.3`, trong khi các kỹ năng riêng lẻ mang phiên bản ngữ nghĩa của riêng chúng.---

## ⚠️ Compatibility Notes

| Quy tắc | Cơ sở lý luận |
|:------|:----------|
| ✅ Phải có nguồn gốc từ repo | Không cần soạn thảo bảng kê khai thủ công |
| ✅ Có thể thêm các trường tùy chọn mới | Khả năng tương thích về phía trước |
| ⚠️ Các lĩnh vực hiện tại phải ổn định | Khả năng tương thích ngược |
| 🚫 Không có bản kê khai viết tay | Đạo hàm thời gian xây dựng là nguồn gốc của sự thật |