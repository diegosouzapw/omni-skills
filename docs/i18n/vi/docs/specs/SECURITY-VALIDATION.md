# 🛡️ Security Validation and Distribution (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Quét bảo mật, tạo kho lưu trữ, ký tùy chọn và đóng gói phân phối cho mọi kỹ năng đã xuất bản.**---

## 📊 Status

| Tính năng | Tiểu bang |
|:--------|:------|
| ✅ Máy quét an ninh tĩnh | Luôn bật |
| ✅ Phân loại siêu dữ liệu theo kỹ năng | Đã triển khai |
| ✅ Lưu trữ theo kỹ năng (zip/tar.gz) | Đã triển khai |
| ✅ Bảng kê khai tổng kiểm tra SHA-256 | Đã triển khai |
| ✅ Cổng quét CI trên thẻ phát hành | Đã triển khai |
| ✅ quy trình xuất bản npm từ tarball đã được xác minh | Đã triển khai |
| ⚙️ Quét NgaoAV | Chất làm giàu tùy chọn |
| ⚙️ Tra cứu hàm băm VirusTotal | Chất làm giàu tùy chọn |
| ✅ Ký tách rời | Đã triển khai |
| ✅ Ký kết được CI thực thi | Được triển khai trên thẻ phát hành |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Quét mọi kỹ năng trong quá trình xác nhận:

| Mục tiêu | Những gì được quét |
|:-------|:-----------------|
| 📝 `KỸ NĂNG.md` | Nội dung kỹ năng chính |
| 📄 Đánh dấu/tệp văn bản | Tài liệu tham khảo và tài liệu đóng gói |
| ⚙️ Kịch bản | Tập lệnh tự động hóa được đóng gói |

**Gia đình cai trị:**

| Quy tắc | Ví dụ |
|:------|:----------|
| 🎭**Tiêm nhanh**| Mẫu lọc, ghi đè hướng dẫn |
| 💣**Lệnh hủy diệt**| `rm -rf`, `format`, `del /s` |
| 🔑**Leo thang đặc quyền**| `sudo`, `chmod 777`, mẫu setuid |
| 📂**Những con đường đáng ngờ**| `/etc/shadow`, `~/.ssh`, tệp thông tin xác thực |
| ⚠️**Nguyên thủy đầy rủi ro**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Yêu cầu `clamscan` trong `PATH`
- Quét các tập tin được đóng gói để tìm phần mềm độc hại đã biết
- Kết quả được ghi trong siêu dữ liệu kỹ năng---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Chỉ tra cứu hàm băm**— không tải tệp lên trong quá trình xác thực thông thường
- Các tệp không xác định chỉ tồn tại cục bộ
- Giữ bản dựng**xác định**và độc lập với CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Cổng phát hành nghiêm ngặt:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Bước này đọc `skills/*/metadata.json` được tạo và không thành công nếu máy quét được yêu cầu không thực thi hoặc báo cáo phát hiện.---

## 📊 Security Output Shape

Dữ liệu bảo mật được phát ra trong siêu dữ liệu của mọi kỹ năng:```json
{
  "security": {
    "score": 100,
    "tier": "hardened",
    "status": "passed",
    "findings_count": 0,
    "findings": [],
    "signals": {
      "scanned_files": 3,
      "script_files": 0,
      "binary_like_files": 0
    },
    "scanners": {
      "static": { "enabled": true, "status": "completed" },
      "clamav": { "enabled": false, "status": "disabled" },
      "virustotal": { "enabled": false, "status": "disabled" }
    }
  }
}
```

> Khối này được truyền vào các bảng kê khai và chế độ xem danh mục, cho phép CLI, API và MCP**lọc và xếp hạng theo điểm bảo mật**.---

## 📦 Archive Outputs

Mỗi kỹ năng được xuất bản sẽ tạo ra:

| Tập tin | Định dạng |
|:------|:-------|
| `dist/archives/<skill>.zip` | kho lưu trữ ZIP |
| `dist/archives/<skill>.tar.gz` | Lưu trữ Tarball |
| `dist/archives/<skill>.checksums.txt` | Bảng kê khai tổng kiểm tra SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Thẻ phát hành GitHub Actions (`v*`) hiện nay:

1. xác minh thẻ git khớp với `pack.json`
2. cài đặt và làm mới ClamAV
3. giải mã khóa ký phát hành từ bí mật GitHub
4. chạy `npm run phát hành: xác minh`
5. gói tarball bằng `npm pack`
6. xuất bản tarball chính xác đó lên npm với xuất xứ
7. tạo Bản phát hành GitHub với ghi chú tùy chỉnh và nội dung xác minh đính kèm---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Nếu không cung cấp khóa công khai, bản dựng sẽ lấy một khóa có `openssl` và đặt nó vào `dist/signing/`.

Khi được bật, các tệp `.sig` sẽ được phát ra bên cạnh kho lưu trữ và bảng kê khai tổng kiểm tra.

Trong CI, thẻ phát hành hiện yêu cầu đăng nhập thông qua:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` hoặc `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- tùy chọn `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` hoặc `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Hạn chế | Trạng thái |
|:----------|:-------|
| Gửi tải lên VirusTotal | Cố tình loại trừ khỏi quá trình xác thực mặc định |
| Ký kết thực thi | Thực thi trên thẻ phát hành; các bản dựng cục bộ vẫn có thể chạy không dấu |
| Quản trị được lưu trữ | Đã có sẵn xác thực tích hợp, thời gian chạy của quản trị viên, danh sách cho phép CORS/IP, chế độ bảo trì và ghi nhật ký kiểm tra; cổng bên ngoài vẫn là tùy chọn |