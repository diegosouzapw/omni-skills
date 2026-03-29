# 🌐 Catalog API Surface (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**API HTTP chỉ đọc để khám phá kỹ năng, tìm kiếm, so sánh, lập kế hoạch cài đặt và tải xuống tạo phẩm.**---

## 📊 Status

| Tính năng | Tiểu bang |
|:--------|:------|
| ✅ Điểm cuối danh mục | Đã triển khai |
| ✅ Xác thực (người mang + khóa API) | Đã triển khai |
| ✅ Xác thực thời gian chạy của quản trị viên | Đã triển khai |
| ✅ Giới hạn tỷ lệ | Đã triển khai |
| ✅ Ghi nhật ký kiểm tra | Đã triển khai |
| ✅ Danh sách cho phép CORS và IP | Đã triển khai |
| ✅ Chế độ bảo trì | Đã triển khai |
| ✅ Lưu trữ tải xuống | Đã triển khai |
| ✅ Thông số OpenAPI | Đã triển khai |
| ⚠️ Hỗ trợ quản trị | Đường cơ sở trong quá trình được điều khiển bởi Env; cổng bên ngoài hoặc IdP vẫn là tùy chọn |---

## 🎯 Purpose

API cung cấp bề mặt kiểu đăng ký cho:

- 📋 Kỹ năng liệt kê và lọc theo chất lượng, bảo mật, danh mục, rủi ro, v.v.
- 👉 Tìm nạp bảng kê khai kỹ năng cá nhân
- 🔎 Tìm kiếm toàn văn và so sánh đa kỹ năng
- 📦 Danh sách gói có sẵn
- 📐 Tạo kế hoạch cài đặt chỉ đọc
- 📥 Tải xuống các tạo phẩm, kho lưu trữ và bảng kê khai tổng kiểm tra được tạo

Danh mục và bảng kê khai tương tự này cũng là cơ sở cho:

- lập kế hoạch cài đặt CLI cục bộ
- Phản hồi khám phá chỉ đọc MCP
- Chuyển giao kế hoạch cài đặt và khám phá A2A
- danh mục riêng tư tiềm năng với xác thực bên ngoài được xếp lớp trên cùng---

## Bắt đầu nhanh

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**Mặc định**: `127.0.0.1:3333`---

## 🔐 Security Controls

Tất cả các điều khiển bảo mật đều được điều khiển bởi env và tùy chọn:

| Kiểm soát | Biến | Ví dụ |
|:--------|:----------|:--------|
| 🔑**Người ghi tên xác thực**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `thay thế tôi` |
| 🗝️**Xác thực khóa API**| `OMNI_SKILLS_HTTP_API_KEYS` | `key-a,key-b` |
| 🛂**Quyền quản trị**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `bí mật quản trị viên` |
| 🚦**Giới hạn tỷ lệ**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Ghi nhật ký kiểm tra**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Hình thức kiểm tra**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` hoặc `văn bản` |
| 📄**Hồ sơ kiểm toán**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**Danh sách cho phép CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Danh sách IP cho phép**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Proxy đáng tin cậy**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `quay ngược` |
| 🚧**Chế độ bảo trì**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Thử lại sau**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Hành vi:**
- 🟢 `/healthz` vẫn**luôn không được xác thực**
- 🔒 Tất cả các tuyến khác đều yêu cầu xác thực khi bật xác thực
- 🛂 `/admin/runtime` yêu cầu mã thông báo quản trị khi được bật
- 🚦 Giới hạn tỷ lệ đang được xử lý với tiêu đề phản hồi `X-RateLimit-*`
- 🧾 Mọi phản hồi đều mang `X-Request-Id`
- 🚧 Chế độ bảo trì trả về `503` cho các tuyến không phải sức khỏe, không phải quản trị viên### ✅ Current governance decision

Hướng dự án hiện tại là**sử dụng lại cùng một định dạng danh mục cho các hoạt động triển khai công khai hoặc riêng tư**và xác thực lớp bên ngoài khi cần.

Điều đó có nghĩa là:

- hình dạng tệp kê khai và API luôn được chia sẻ
- việc triển khai tự lưu trữ và cục bộ có thể duy trì trên đường cơ sở trong quá trình
- quản trị được lưu trữ nâng cao hơn có thể chuyển sang cổng bên ngoài hoặc lớp xác thực doanh nghiệp sau này mà không cần phân tách mô hình dữ liệu### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| Phương pháp | Đường dẫn | Mô tả |
|:-------|:------|:-------------|
| `NHẬN` | `/healthz` | Kiểm tra sức khỏe (không xác thực) |
| `NHẬN` | `/openapi.json` | Đặc tả OpenAPI 3.1 động |
| `NHẬN` | `/admin/runtime` | Ảnh chụp nhanh về quản trị và thời gian chạy (xác thực của quản trị viên khi được bật) |### 📚 Catalog & Skills

| Phương pháp | Đường dẫn | Mô tả |
|:-------|:------|:-------------|
| `NHẬN` | `/v1/kỹ năng` | Liệt kê kỹ năng bằng bộ lọc |
| `NHẬN` | `/v1/skills/:id` | Nhận bản kê khai kỹ năng cá nhân |
| `NHẬN` | `/v1/tìm kiếm` | Tìm kiếm toàn văn |
| `NHẬN` | `/v1/so sánh?ids=id1,id2` | So sánh nhiều kỹ năng |
| `NHẬN` | `/v1/bundle` | Liệt kê các gói có sẵn |
| `ĐĂNG` | `/v1/install/plan` | Tạo kế hoạch cài đặt |### 🔎 List/Search Filters

| Lọc | Ví dụ |
|:-------|:--------|
| `danh mục` | `?category=development` |
| `công cụ` | `?tool=cursor` |
| `rủi ro` | `?Rủi ro=an toàn` |
| `sắp xếp` | `?sort=quality\|các phương pháp hay nhất\|level\|bảo mật\|name` |
| `đặt hàng` | `?order=asc\|desc` |
| `min_quality` | `?min_quality=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `min_level` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `trạng thái xác thực` | `?validation_status=passed` |
| `trạng thái bảo mật` | `?security_status=pass` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| Phương pháp | Đường dẫn | Mô tả |
|:-------|:------|:-------------|
| `NHẬN` | `/v1/catalog/download` | Tải xuống danh mục đầy đủ |
| `NHẬN` | `/v1/skills/:id/artifacts` | Liệt kê hiện vật kỹ năng |
| `NHẬN` | `/v1/skills/:id/archives` | Liệt kê kho lưu trữ kỹ năng |
| `NHẬN` | `/v1/skills/:id/downloads` | Tất cả các liên kết tải xuống có sẵn |
| `NHẬN` | `/v1/skills/:id/download/manifest` | Bản kê khai kỹ năng JSON |
| `NHẬN` | `/v1/skills/:id/download/entrypoint` | Kỹ năng SKILL.md |
| `NHẬN` | `/v1/skills/:id/download/artifact?path=<path>` | Hiện vật cụ thể |
| `NHẬN` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Kho lưu trữ kỹ năng |
| `NHẬN` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Chữ ký tách rời |
| `NHẬN` | `/v1/skills/:id/download/archive/checksums` | Tổng kiểm tra SHA-256 |---

## 🔗 Link Enrichment

Khi các yêu cầu được xử lý thông qua API, máy chủ**tự động làm phong phú**các bảng kê khai, danh sách thành phần lạ và kế hoạch cài đặt với các URL tuyệt đối bắt nguồn từ nguồn yêu cầu đến. Đây là cách làm phong phú thời gian chạy, không được đưa vào `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Gói cài đặt là bản xem trước, không phải bản ghi từ xa.**

API không bao giờ cài đặt vào máy của người gọi. Nó trả về:
- 👉 Siêu dữ liệu kỹ năng được chọn
- ⚠️ Cảnh báo thiếu thành viên gói
- 🖥️ Các lệnh CLI cụ thể để chạy cục bộ
- 🔗 URL tải xuống công khai khi có nguồn gốc yêu cầu---

## 🔌 Relationship to MCP

Máy chủ MCP sử dụng lại các URL API công khai tương tự khi được định cấu hình:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Điều này cho phép các bản xem trước cài đặt MCP trả về các URL giả tạo và tệp kê khai cụ thể thay vì chỉ các đường dẫn kho lưu trữ cục bộ.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` trả về ảnh chụp nhanh quản trị hữu ích cho chẩn đoán được lưu trữ trên máy chủ:

- phương pháp xác thực hoạt động
- trạng thái quản trị viên-xác thực
- cửa sổ giới hạn tỷ lệ và tối đa
- Danh sách cho phép CORS
- Danh sách cho phép IP
- trạng thái chế độ bảo trì
- kiểm tra đích và định dạng
- tổng số danh mục hiện tại
- yêu cầu lặp lại ID để truy xuất nguồn gốc