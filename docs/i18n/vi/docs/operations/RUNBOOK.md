# 🔧 System Runbook (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Hướng dẫn vận hành đầy đủ để xây dựng, xác thực, cung cấp, bảo mật và khắc phục sự cố Omni Skills.**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| Lệnh | Nó làm gì |
|:--------|:-------------|
| `npm chạy xác thực` | Xác thực `SKILL.md`, tạo lại `metadata.json`, tính toán phân loại/sự trưởng thành/chất lượng/bảo mật |
| `npm run taxonomy:report` | Hiển thị đề xuất trôi dạt danh mục mà không cần viết lại tệp |
| `npm run verify:scanners` | Xác nhận phạm vi phủ sóng của máy quét được ghi trong siêu dữ liệu kỹ năng được tạo |
| `npm run phát hành: ghi chú` | Tạo ghi chú phát hành tùy chỉnh từ siêu dữ liệu, gói và lịch sử git |
| `npm run build` | Tái tạo danh mục/tệp kê khai/lưu trữ/tổng ​​kiểm tra, xác minh mức độ bao phủ và lưu trữ của máy quét, xây dựng lại `docs/CATALOG.md` |
| `kiểm tra npm` | Bộ khói đầy đủ trên các luồng CLI, API, MCP, sidecar và lưu trữ |---

## 🖥️ Visual Shell

CLI đã xuất bản hiện bao gồm trình bao toán tử dựa trên Ink:```bash
npx omni-skills ui
```

Khả năng hiện tại:

- hướng dẫn cài đặt cho các máy khách đã biết và đường dẫn tùy chỉnh
- luồng tìm kiếm rồi cài đặt
- Trình hướng dẫn khởi chạy MCP
- Trình hướng dẫn khởi chạy API
- Trình hướng dẫn khởi chạy A2A
- các lần cài đặt và khởi chạy lại dịch vụ gần đây
- cài đặt trước cài đặt và dịch vụ được đặt tên

Đường dẫn trạng thái cục bộ:```text
~/.omni-skills/state/ui-state.json
```

Dự phòng:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

Máy quét tĩnh tự động kiểm tra tất cả các kỹ năng:

| Gia đình quy tắc | Ví dụ |
|:----------||:----------|
| 🎭 Tiêm ngay | Mẫu lọc, ghi đè hướng dẫn |
| 💣 Lệnh hủy diệt | `rm -rf`, `định dạng`, `mkfs` |
| 🔑 Đường đi đáng ngờ | `/etc/shadow`, `~/.ssh`, tệp thông tin xác thực |
| ⚠️ Nguyên thủy đầy rủi ro | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Yêu cầu `clamscan` trong `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Chỉ tra cứu băm — các tệp không xác định sẽ**không được tải lên**theo mặc định.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Cổng phát hành nghiêm ngặt:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Các kho lưu trữ được tạo tự động bởi `npm run build`:

| Đầu ra | Đường dẫn |
|:-------|:------|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Tổng kiểm tra | `dist/archives/<skill>.checksums.txt` |

`dist/` được cam kết có chủ ý trong kho lưu trữ này. Danh mục, bảng kê khai, gói và kho lưu trữ được tạo là đầu vào thời gian chạy cho các luồng cài đặt CLI, bề mặt tải xuống API, bản xem trước MCP, chuyển giao nhiệm vụ A2A, kiểm tra khói và xác minh bản phát hành.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Ghi đè khóa công khai tùy chọn:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Nếu không cung cấp khóa chung, bản dựng sẽ lấy một khóa thông qua `openssl` thành `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Chính sách phiên bản:

- tăng dần bản vá cho đến `.10`
- sau `.10`, bản phát hành tiếp theo sẽ xuất hiện nhỏ và đặt lại bản vá thành `.0`

Ví dụ:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Kịch bản | Lệnh |
|:----------|:--------|
| 📥 Cài đặt mặc định (AntiGravity) | `kỹ năng đa năng của npx` |
| 🎯 Kỹ năng cụ thể + khách hàng | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Khám phá → cài đặt | `npx omni-skills find figma --tool con trỏ --install --yes` |
| 📦 Gói cài đặt | `npx omni-skills --cursor --bundle Essentials` |
| 🩺 Xác minh cài đặt | `bác sĩ đa năng npx` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Lọc | Cờ | Ví dụ |
|:-------|:------|:--------|
| 📂 Danh mục | `--category` | `--phát triển danh mục` |
| 🖥️ Công cụ | `--công cụ` | `--con trỏ công cụ` |
| ⚠️ Rủi ro | `--rủi ro` | `--rủi ro an toàn` |
| 📊 Sắp xếp | `--sắp xếp` | `--chất lượng sắp xếp\|các phương pháp hay nhất\|cấp độ\|bảo mật\|name` |
| 🔄 Đặt hàng | `--order` | `--order asc\|desc` |
| ⭐ Chất lượng tối thiểu | `--min-chất lượng` | `--min-chất lượng 80` |
| 📋 BP tối thiểu | `--min-thực hành tốt nhất` | `--min-thực hành tốt nhất 60` |
| 🎯 Cấp độ tối thiểu | `--min-level` | `--min-cấp 2` |
| 🛡️ Bảo mật tối thiểu | `--min-security` | `--min-security 90` |
| ✅ Xác thực | `--xác thực-trạng thái` | `--tình trạng xác thực đã được thông qua` |
| 🛡️ An ninh | `--tình trạng bảo mật` | `--tình trạng bảo mật đã được thông qua` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Phương pháp | Điểm cuối | Mục đích |
|:-------|:----------|:--------|
| `NHẬN` | `/healthz` | Kiểm tra sức khỏe |
| `NHẬN` | `/openapi.json` | Thông số OpenAPI 3.1 |
| `NHẬN` | `/v1/kỹ năng` | Danh sách có bộ lọc |
| `NHẬN` | `/v1/tìm kiếm` | Tìm kiếm toàn văn |
| `NHẬN` | `/v1/skills/:id/archives` | Lưu trữ danh sách |
| `NHẬN` | `/v1/skills/:id/download/archive?format=zip` | Tải xuống kho lưu trữ |
| `NHẬN` | `/v1/skills/:id/download/archive/checksums` | Bảng kê khai tổng kiểm tra |### 🔐 Hosted API Hardening

| Tính năng | Lệnh |
|:--------|:--------|
| 🔑 Người mang xác thực | `OMNI_SKILLS_HTTP_BEARER_TOKEN=thay thế tôi npx api đa kỹ năng` |
| 🗝️ Xác thực khóa API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx api kỹ năng đa năng` |
| 🛂 Xác thực thời gian chạy của quản trị viên | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=bí mật quản trị viên npx omni-skills api` |
| 🚦 Giới hạn tỷ lệ | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx api đa kỹ năng` |
| 📝 Ghi nhật ký kiểm tra | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx api đa kỹ năng` |
| 🌍 Danh sách cho phép CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 Danh sách cho phép IP | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx api đa kỹ năng` |
| 🚧 Chế độ bảo trì | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx api đa kỹ năng` |
| 🔁 Proxy đáng tin cậy | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx api đa kỹ năng` |

> 🟢 `/healthz` vẫn mở theo thiết kế; các tuyến danh mục yêu cầu xác thực khi được bật. `GET /admin/runtime` yêu cầu mã thông báo quản trị khi được định cấu hình và trả về ảnh chụp nhanh quản trị trực tiếp.---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

Xe sidecar hiện có thể xem trước hoặc ghi cấu hình MCP cho:

- Cài đặt dự án và người dùng Claude
- Cấu hình máy tính để bàn Claude
- Cấu hình người dùng Cline
- Cấu hình kho lưu trữ và người dùng GitHub Copilot CLI
- Cấu hình người dùng và không gian làm việc của con trỏ
- Cấu hình Codex TOML
- Cài đặt dự án và người dùng Gemini
- Cấu hình dự án và người dùng Kilo CLI
- Cấu hình không gian làm việc Kilo
- Cài đặt dự án và người dùng Kiro
- Cấu hình người dùng và không gian làm việc OpenCode
- Tiếp tục config YAML của không gian làm việc
- Cấu hình người dùng lướt ván
- Cấu hình không gian làm việc của Zed
- không gian làm việc `.mcp.json`
- Không gian làm việc và cấu hình người dùng của VS Code
- Cấu hình Dev Container

`configure_client_mcp` cũng trả về `công thức nấu ăn` cho mỗi khách hàng để người vận hành có được CLI tương đương hoặc các bước thiết lập thủ công cùng với bản xem trước.### 🧾 MCP Config Preview and Write Flow

Sử dụng CLI hợp nhất khi bạn muốn tạo cấu hình mà không cần gọi trực tiếp công cụ MCP:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Lớp vỏ trực quan hiển thị quy trình làm việc tương tự thông qua:

- `giao diện người dùng đa năng npx`
- `Dịch vụ`
- `Cấu hình máy khách MCP`

Lệnh vẫn ở chế độ xem trước trừ khi `--write` được thông qua.### 🔐 Hosted MCP Hardening

Các biến env tương tự như API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Các tuyến được bảo vệ**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` vẫn mở.---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

Đường dẫn cục bộ mặc định trước hết vẫn đơn giản:

- Tính kiên trì của `json` hoặc `sqlite` có thể chạy khi tính năng bỏ phiếu hàng đợi bị vô hiệu hóa
- chỉ đặt `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` khi bạn muốn chuyển đổi dự phòng yêu cầu và thuê nhiều công nhân
- giữ sự phối hợp của Redis như một tùy chọn được lưu trữ nâng cao, không phải là đường cơ sở### 🧱 Multi-Worker Lease Setup

Chạy nhiều nút A2A trên cùng một cửa hàng SQLite để chuyển đổi dự phòng dựa trên hợp đồng thuê:```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Nếu một công nhân chết trong khi một nhiệm vụ đang "đang hoạt động", một công nhân khác có thể lấy lại nó sau khi hợp đồng thuê hết hạn và tiếp tục thực hiện.### 🟥 Redis Coordination

Đối với việc triển khai được lưu trữ trên máy chủ hoặc nhiều nút không muốn phối hợp hàng đợi bị ràng buộc với kho lưu trữ SQLite được chia sẻ, hãy chuyển điều phối viên sang Redis:```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Ở chế độ này:

- tính kiên trì vẫn tồn tại trong JSON hoặc SQLite
- nhiệm vụ yêu cầu và quyền sở hữu cho thuê chuyển sang Redis
- nhiều nút A2A có thể chia sẻ một hàng đợi mà không cần dựa vào sự phối hợp cấp hàng SQLite### 📡 Endpoints

| Phương pháp | Đường dẫn | Mục đích |
|:-------|:------|:--------|
| `NHẬN` | `/healthz` | Kiểm tra sức khỏe |
| `NHẬN` | `/.well-known/agent.json` | Thẻ đại lý (khám phá A2A) |
| `ĐĂNG` | `/a2a` | Điểm cuối JSON-RPC cho các tác vụ và phát trực tuyến |### 🧭 Supported JSON-RPC Methods

| Phương pháp | Mục đích |
|:-------|:--------|
| `tin nhắn/gửi` | Bắt đầu hoặc tiếp tục một nhiệm vụ |
| `tin nhắn/luồng` | Bắt đầu một nhiệm vụ và truyền phát các bản cập nhật SSE |
| `nhiệm vụ/nhận` | Thăm dò ảnh chụp nhanh nhiệm vụ |
| `nhiệm vụ/hủy` | Hủy tác vụ đang hoạt động |
| `nhiệm vụ/đăng ký lại` | Tiếp tục cập nhật SSE cho tác vụ hiện có |
| `tác vụ/pushNotificationConfig/set` | Đăng ký webhook đẩy |
| `tác vụ/pushNotificationConfig/get` | Đọc cấu hình đẩy |
| `tác vụ/pushNotificationConfig/list` | Liệt kê các cấu hình đẩy cho một tác vụ |
| `tác vụ/pushNotificationConfig/xóa` | Xóa cấu hình đẩy |### 📡 Task Lifecycle

Thời gian chạy hiện tại hỗ trợ các trạng thái tác vụ sau:

- `đã gửi`
- `làm việc`
- `yêu cầu đầu vào`
- `hoàn thành`
- `bị hủy`
- `thất bại`

Các tác vụ được lưu giữ vào tệp JSON hoặc kho lưu trữ SQLite và được tải lại khi khởi động lại. Các nhiệm vụ đã hoàn thành và bị gián đoạn vẫn có sẵn. Các tác vụ vẫn được "gửi" hoặc "đang hoạt động" trong khi tắt máy sẽ được khôi phục bằng siêu dữ liệu khởi động lại rõ ràng và được tiếp tục tự động theo mặc định.### 🧪 Example: Start a Task

```bash
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

Kho lưu trữ hiện có hai quy trình công việc:

| Quy trình làm việc | Kích hoạt | Mục đích |
|:----------|:--------|:--------|
| `xác thực.yml` | Đẩy/PR sang `main` | Xây dựng, kiểm tra và xác nhận các tạo phẩm được tạo đã được cam kết |
| `phát hành.yml` | Tag push `v*` hoặc gửi thủ công | Chạy trình quét cấp phát hành, xác minh thẻ phiên bản, ký các tạo phẩm, đóng gói tarball, xuất bản lên npm và tạo Bản phát hành GitHub |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Bí mật | Được sử dụng bởi | Mục đích |
|:-------|:--------|:--------|
| `VT_API_KEY` hoặc `VIRUSTOTAL` | `phát hành.yml` | Yêu cầu tra cứu hàm băm VirusTotal trong các bản phát hành |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` hoặc `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `phát hành.yml` | Khóa riêng bắt buộc để đăng nhập kho lưu trữ tách rời trong CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` hoặc `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `phát hành.yml` | Ghi đè khóa công khai tùy chọn; mặt khác bắt nguồn từ khóa riêng |
| `NPM_TOKEN` | công việc `pub-npm` | Xác thực `npm Publish` cho các bản phát hành thẻ |### 🦠 Release Scanner Policy

`release.yml` thiết lập hoặc chuẩn bị:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secret.VT_API_KEY || bí mật.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` từ bộ lưu trữ tạm thời của người chạy

Điều đó có nghĩa là mọi bản phát hành dựa trên thẻ phải:

- cài đặt và làm mới ClamAV trên Á hậu
- tạo lại siêu dữ liệu khi bật ClamAV
- tạo lại siêu dữ liệu khi bật VirusTotal
- giải mã tài liệu khóa ký CI vào bộ lưu trữ tạm thời của người chạy
- vượt qua `npm run verify:scanners:strict`
- vượt qua `npm run verify:archives:strict`
- vượt qua các bài kiểm tra và xác minh gói trước khi xuất bản npm
- tạo ghi chú phát hành tùy chỉnh từ siêu dữ liệu danh mục và lịch sử git
- tạo Bản phát hành GitHub với nội dung phát hành đính kèm sau khi xuất bản---

## 1️⃣1️⃣ Environment Variables Reference

| Biến | Mục đích | Mặc định |
|:----------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Ghi đè đường dẫn gốc danh mục | Tự động phát hiện |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Đường dẫn ghi bổ sung được phép | Nguồn gốc khách hàng đã biết |
| `OMNI_SKILLS_MCP_MODE` | Đặt thành `local` cho sidecar | Từ xa |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Cờ Alt cho chế độ cục bộ | `0` |
| `OMNI_SKILLS_API_BASE_URL` | URL API công khai cho MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | URL cơ sở công khai | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Mã thông báo xác thực mang | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Khóa API được phân tách bằng dấu phẩy | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Mã thông báo xác thực thời gian chạy của quản trị viên | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Số yêu cầu tối đa trên mỗi cửa sổ | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Khoảng thời gian giới hạn tốc độ (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Bật ghi nhật ký kiểm tra | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | đầu ra kiểm tra `json` hoặc `text` | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Đường dẫn tệp nhật ký kiểm tra tùy chọn | thiết bị xuất chuẩn |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Danh sách cho phép nguồn gốc CORS được phân tách bằng dấu phẩy | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Danh sách cho phép IP hoặc CIDR được phân tách bằng dấu phẩy | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Cài đặt proxy tin cậy nhanh | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Kích hoạt phản hồi bảo trì | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Bảo trì `Thử lại sau` giây | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Mô phỏng độ trễ tác vụ không đồng bộ | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | kho tác vụ `json`, `sqlite` hoặc `memory` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Tệp lưu trữ tác vụ A2A tùy chỉnh | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Cho phép bỏ phiếu hàng đợi chia sẻ cho nhân viên nhận biết hợp đồng thuê | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | điều phối viên `store`, `sqlite`, `local` hoặc `redis` | `cửa hàng` |
| `OMNI_SKILLS_A2A_REDIS_URL` | URL Redis để phối hợp bên ngoài | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Tiền tố khóa Redis cho siêu dữ liệu hàng đợi | `kỹ năng đa năng:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Khoảng thời gian bỏ phiếu xếp hàng cho công nhân thuê | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Thời hạn thuê trước khi một công nhân khác có thể đòi lại công việc | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Mã định danh công nhân ổn định cho quyền sở hữu hợp đồng thuê và chẩn đoán | Tên máy chủ + PID + hậu tố ngẫu nhiên |
| `OMNI_SKILLS_A2A_EXECUTOR` | người thực thi tác vụ `nội tuyến` hoặc `process` | `nội tuyến` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Ghi đè lệnh nhân viên bên ngoài | Nút nhị phân |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | Mảng JSON của đối số công nhân bên ngoài | `["gói/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Tiếp tục các tác vụ đã gửi/đang làm việc đã được khôi phục khi khởi động | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Cho phép webhook không phải HTTPS bên ngoài localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Kích hoạt tính năng quét ClamAV | `0` |
| `VT_API_KEY` | Khóa API VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Khóa riêng để ký | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Ghi đè khóa công khai | Tự động bắt nguồn |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Xây dựng lại với `npm run build`
2. Chạy lại `npm run verify:archives`
3. Nếu tính năng ký được bật, hãy xác nhận khóa chung và tính khả dụng của `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- Xác nhận `VT_API_KEY` tồn tại trong kho bí mật
- Xác nhận `freshclam` thành công trên Á hậu
- Xây dựng lại cục bộ với `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Chạy lại `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- Xác nhận `NPM_TOKEN` tồn tại trong kho lưu trữ bí mật
- Xác nhận thẻ Git khớp chính xác với phiên bản `package.json`
- Kiểm tra xem tarball được tải lên bởi `release-verify` có tồn tại trong các tạo phẩm của quy trình công việc không### ✍️ Release Signing Fails in CI

- Xác nhận `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` hoặc `OMNI_SKILLS_SIGN_PRIVATE_KEY` tồn tại trong kho lưu trữ bí mật
- Nếu bạn cung cấp bí mật khóa chung, hãy xác nhận nó khớp với khóa riêng
- Xác nhận `openssl` có sẵn và khóa riêng có định dạng PEM
- Xây dựng lại cục bộ với `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Chạy lại `npm run verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- Xác minh `OMNI_SKILLS_HTTP_BEARER_TOKEN` hoặc `OMNI_SKILLS_HTTP_API_KEYS`
- Bao gồm `Ủy quyền: Bearer <token>` hoặc tiêu đề `x-api-key`### 🚦 API/MCP Returns `429 Too Many Requests`

- Tăng `OMNI_SKILLS_RATE_LIMIT_MAX`
- Mở rộng `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Giảm lưu lượng truy cập bùng nổ từ khách hàng hoặc đầu dò### 🛂 API/MCP Admin Runtime Returns `401`

- Xác minh `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Gửi `x-admin-token: <token>` hoặc `Ủy quyền: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Tắt `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Sử dụng `/healthz` để thăm dò độ sống trong quá trình bảo trì
- Sử dụng `/admin/runtime` với mã thông báo quản trị để chẩn đoán nhà điều hành### 🌍 Browser Requests Fail CORS Validation

- Xác minh `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Bao gồm lược đồ và máy chủ lưu trữ chính xác, ví dụ: `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Xác minh `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Xác minh `OMNI_SKILLS_A2A_REDIS_URL`
- Kiểm tra kết nối Redis từ mọi nút
- Kiểm tra `/healthz` để tìm ảnh chụp nhanh `phối hợp`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
