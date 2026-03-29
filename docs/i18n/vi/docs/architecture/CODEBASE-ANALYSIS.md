# 🔬 Codebase Deep Analysis (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Phân tích kỹ thuật toàn diện về kiến trúc Omni Skills hiện tại, các bề mặt thời gian chạy và quy trình xây dựng.**
> Phân tích lần cuối: 28-03-2026---

## 📊 Project Overview

| Thuộc tính | Giá trị |
|:----------|:------|
|**Tên**| `kỹ năng đa năng` |
|**Phiên bản trọn gói**| `0.1.3` |
|**Phiên bản kỹ năng**| Theo kỹ năng và độc lập với phiên bản gói. Nhiều kỹ năng được xuất bản vẫn là `0.0.1` trong khi gói là `0.1.2`. |
|**Giấy phép**| MIT (mã) + CC BY 4.0 (nội dung) |
|**NPM**| `kỹ năng đa năng của npx` |
|**Kỹ năng đã xuất bản**| 32 |
|**Các gói được xác định**| 7, tất cả đều được hỗ trợ đầy đủ bởi các kỹ năng đã xuất bản |
|**Danh mục danh mục đang hoạt động**| 15 nhóm hoạt động trong số 18 danh mục phân loại chuẩn |
|**LOC thời gian chạy chính/bản dựng được lấy mẫu bên dưới**| 13.600+ |
|**Phụ thuộc sản xuất**| 7 ("@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Ảnh chụp nhanh phân loại cấp kho lưu trữ hiện tại từ `metadata.json`:

- điểm chất lượng trung bình: `96,3`
- điểm thực hành tốt nhất trung bình: `98,7`
- điểm bảo mật trung bình: `95,0`
- tất cả 32 kỹ năng được công bố đều xác thực là `L3`

Đường cơ sở phát hành hiện tại:

- phát hành kho lưu trữ công cộng: `v0.1.2`
- phát hành trình tăng cường riêng tư: `v0.0.1`
- tự động hóa phát hành công khai và tự động hóa phát hành riêng tư đều đang hoạt động và thân thiện với môi trường---

## 🏗️ Architecture Overview

Kho lưu trữ tuân theo mẫu**workspace monorepo**với một lõi danh mục dùng chung và nhiều bề mặt thời gian chạy.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

Thiết kế được cố ý**hướng đến đồ tạo tác**:

1. kỹ năng được tác giả là `SKILL.md` cộng với các gói hỗ trợ địa phương
2. bản dựng xác thực, phân loại, lưu trữ và chuẩn hóa chúng
3. các tạo phẩm được tạo sẽ trở thành hợp đồng cho CLI, API, MCP và A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4.500+ LỘC kết hợp**— giao diện chung chính dành cho cả cách sử dụng chuyên môn và hướng dẫn.

| Lệnh | Chức năng |
|:--------|:----------|
| 🔎 `tìm [truy vấn]` | Tìm kiếm danh mục toàn văn với các bộ lọc nhận biết điểm |
| 📦 `cài đặt` | Cài đặt theo hướng dẫn hoặc dựa trên cờ vào các máy khách đã biết hoặc đường dẫn tùy chỉnh |
| 🧾 `config-mcp` | Xem trước hoặc ghi cấu hình MCP nhận biết máy khách |
| 🔌 `mcp <vận chuyển>` | Khởi động máy chủ MCP trong `stdio`, `stream` hoặc `sse` |
| 🌐 `api` | Bắt đầu API danh mục |
| 🤖 `a2a` | Bắt đầu thời gian chạy A2A |
| 🧪 `khói` | Phát hành xác nhận trước chuyến bay |
| 🩺 `bác sĩ` | Chẩn đoán cục bộ |
| 🖥️ `ui` | Ink Visual Shell với trung tâm cài đặt, khám phá, cấu hình và dịch vụ |
| 🏷️ `phân loại lại` | Kiểm tra trôi dạt phân loại và viết lại |

CLI không còn chỉ là một trình cài đặt nữa. Nó là công cụ hoạt động công cộng cho toàn bộ nền tảng.## 🧭 Future Expansion Direction

Thời gian chạy công khai không còn bị chặn đối với công việc cơ bản và làn sóng danh mục thứ hai đã cập bến. Công việc lập danh mục hữu ích tiếp theo là chiều sâu chứ không phải theo đuổi nhiều danh mục hơn.

Các bản nhạc gốc mã mới được kích hoạt hiện có trong danh mục:

- `thiết kế` thông qua `design-systems-ops`, `khả năng truy cập-kiểm toán` và `design-token-quản trị`
- `công cụ` thông qua `mcp-server-authoring`
- `data-ai` thông qua `data-contract`
- `học máy` thông qua `phục vụ mô hình`

Đề xuất hướng tiếp theo:

1. đào sâu thêm `thiết kế`, `công cụ`, `data-ai` và `machine-learning`
2. hoãn lại `business` và `content-media` trừ khi xuất hiện một đề xuất có nguồn gốc mã rõ ràng
3. Giữ nguyên chất lượng sàn hiện tại thay vì mở lại áp lực kích hoạt danh mục

Làn sóng mở rộng đó hiện được ghi lại trong [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LỘC**— cài đặt các kỹ năng vào 7 trợ lý có khả năng cài đặt.

| Cờ | Mục tiêu | Đường dẫn mặc định |
|:------|:-------|:-------------|
| `--claude` | Mã Claude | `~/.claude/skills` |
| `--con trỏ` | Con trỏ | `~/.cursor/skills` |
| `--gemini` | Song Tử CLI | `~/.gemini/skills` |
| `--codex` | Codex CLI | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--phản hấp dẫn` | Phản lực hấp dẫn | `~/.gemini/anti Gravity/skills` |
| `--opencode` | Mã mở | `<workspace>/.opencode/skills` |

Nó hỗ trợ:

- cài đặt toàn bộ thư viện
- cài đặt có chọn lọc bởi `--skill`
- số lượt cài đặt được quản lý bởi `--bundle`
- TTY có hướng dẫn và luồng giao diện người dùng trực quan
- đường dẫn mục tiêu tùy chỉnh### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— lớp thời gian chạy dùng chung cho CLI, API, MCP và A2A.

| Xuất khẩu | Mô tả |
|:-------|:-------------|
| 🔎 `searchSkills()` | Tìm kiếm với tính năng khớp văn bản có trọng số và hỗ trợ bộ lọc |
| 📋 `listSkills()` | Lọc đa trục theo chất lượng, phương pháp hay nhất, cấp độ, bảo mật, rủi ro, công cụ và danh mục |
| ✔️ `getSkill()` | Độ phân giải kê khai cộng với các URL công khai được làm phong phú |
| ⚖️ `so sánh Kỹ năng()` | So sánh song song |
| 💡 `giới thiệuSkills()` | Đề xuất hướng đến mục tiêu |
| 📦 `buildInstallPlan()` | Cài đặt tạo kế hoạch với các cảnh báo và hướng dẫn dành cho khách hàng |
| 🗂️ `listBundles()` | Danh sách gói được tuyển chọn có sẵn |
| 📁 `listSkillArchives()` | Giải pháp lưu trữ và chữ ký |

Đây là nguồn duy nhất thực sự của sự thật thời gian chạy sau thế hệ.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— triển khai MCP đầy đủ bằng SDK chính thức.

**Vận chuyển**

- `stdio`
- HTTP có thể phát trực tuyến
- SSE

**Công cụ chỉ đọc luôn bật**

- `kỹ năng tìm kiếm`
- `có được kỹ năng`
- `so sánh_kỹ năng`
- `giới thiệu_kỹ năng`
- `preview_install`

**Công cụ chế độ cục bộ**

- `phát hiện_khách hàng`
- `list_installed_skills`
- `install_skills`
- `remove_skills`
- `configure_client_mcp`

Bề mặt MCP được cố tình phân chia giữa:

- sử dụng danh mục từ xa/chỉ đọc
- sử dụng sidecar cục bộ/có khả năng ghi### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1.943 LỘC**— lớp MCP nhận biết hệ thống tệp để phát hiện ứng dụng khách, quản lý kỹ năng và ghi cấu hình MCP.

Hỗ trợ thực tế hiện tại:

-**7 máy khách có khả năng cài đặt**
-**16 máy khách có khả năng cấu hình**
-**33 mục tiêu cấu hình**
-**19 hồ sơ cấu hình**

Các máy khách có khả năng cài đặt:

- Mã Claude
- Con trỏ
- Song Tử CLI
- Codex CLI
- Kiro
- Phản trọng lực
- Mã mở

Các máy khách và mục tiêu có khả năng cấu hình bao gồm:

- Cài đặt Claude, Claude Desktop và cấu hình dự án Claude
- Cấu hình người dùng và không gian làm việc của con trỏ
- Không gian làm việc của VS Code, người dùng, người dùng nội bộ và cấu hình Dev Container
- Cài đặt người dùng và không gian làm việc của Gemini
- Cấu hình người dùng chống trọng lực
- Đường dẫn người dùng, không gian làm việc và kế thừa Kiro
- Cấu hình Codex CLI TOML
- Cấu hình người dùng và không gian làm việc OpenCode
- Cài đặt Cline
- Cấu hình repo và người dùng GitHub Copilot CLI
- Cấu hình người dùng, dự án và không gian làm việc Kilo
- Tiếp tục không gian làm việc YAML
- Cấu hình người dùng lướt ván
- Cấu hình không gian làm việc của Zed
- Cấu hình người dùng Goose

Sidecar cố tình trung thực về ranh giới:

- nó chỉ ghi bên trong danh sách cho phép
- nó xem trước theo mặc định
- nó chỉ giữ các nhà văn hạng nhất ở những nơi tài liệu chính thức có định dạng ổn định
- nó không giả vờ rằng mọi sản phẩm có khả năng MCP đều là mục tiêu cài đặt kỹ năng### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC kết hợp**— API đăng ký chỉ đọc cộng với phần mềm trung gian quản trị.

Điểm cuối quan trọng:

- `/healthz`
- `/openapi.json`
- `/admin/runtime`
- `/v1/kỹ năng`
- `/v1/skills/:id`
- `/v1/tìm kiếm`
- `/v1/so sánh`
- `/v1/bó`
- `/v1/cài đặt/kế hoạch`
- `/v1/skills/:id/download/*`

Cơ sở quản trị đã được triển khai:

- xác thực mã thông báo mang
- Xác thực khóa API
- xác thực mã thông báo quản trị viên
- giới hạn tốc độ trong quá trình
- ID yêu cầu
- ghi nhật ký kiểm tra
- Danh sách cho phép CORS
- Danh sách cho phép IP
- xử lý proxy tin cậy
- Chế độ bảo trì### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1.857 LOC được kết hợp trên các tệp máy chủ chính, thời gian chạy và điều phối viên**— Vòng đời tác vụ JSON-RPC 2.0 dành cho quy trình làm việc giữa các tác nhân.

Các phương pháp được hỗ trợ:

- `tin nhắn/gửi`
- `tin nhắn/luồng`
- `nhiệm vụ/nhận`
- `nhiệm vụ/hủy`
- `nhiệm vụ/đăng ký lại`
- `tác vụ/pushNotificationConfig/*`

Hoạt động hiện tại:

- `kỹ năng khám phá`
- `khuyên-ngăn xếp`
- `chuẩn bị-cài đặt-kế hoạch`

Mô hình độ bền và phối hợp:

- tính bền vững cục bộ của bộ nhớ, JSON hoặc SQLite
- khởi động lại sơ yếu lý lịch
- tùy chọn thực thi quy trình bên ngoài
- chọn tham gia phối hợp hàng đợi thuê cho các nhân viên SQLite được chia sẻ
- phối hợp được hỗ trợ bởi Redis tùy chọn dưới dạng đường dẫn được lưu trữ nâng cao

Lựa chọn kiến trúc quan trọng ở đây là**hoạt động cục bộ đơn giản đầu tiên**. Redis tồn tại dưới dạng tùy chọn nâng cao, nhưng đường dẫn sản phẩm mặc định vẫn là cục bộ và phụ thuộc nhẹ.---

## ⚙️ Build Pipeline

| Kịch bản | Ngôn ngữ | Mục đích |
|:-------|:----------|:--------|
| 📊 `skill_metadata.py` | Python | Xác thực, phân loại, tính điểm và quét bảo mật tĩnh |
| ✅ `validate_skills.py` | Python | Tạo siêu dữ liệu cho mỗi kỹ năng và cho bản tóm tắt gốc |
| 📑 `tạo_index.py` | Python | Chỉ mục kỹ năng, bảng kê khai, lưu trữ, chữ ký và tổng kiểm tra |
| 🏗️ `build_catalog.js` | Node.js | `dist/catalog.json` và `dist/bundles.json` cuối cùng |
| 🏷️ `recategorize_skills.py` | Python | Kiểm tra và viết lại danh mục Canonical |
| 🔍 `verify_archives.py` | Python | Lưu trữ và xác minh chữ ký |

Hai chi tiết quan trọng trong hoạt động:

1. `dist/` là một phần của hợp đồng thời gian chạy và được cam kết có chủ ý
2. bản dựng đủ chắc chắn để hỗ trợ xác minh CI và ký phát hành---

## 📦 Published Catalog

Danh mục công cộng hiện tại bao gồm 32 kỹ năng:

-**Khám phá và lập kế hoạch**: `tìm kỹ năng`, `động não`, `kiến trúc`, `gỡ lỗi`
-**Thiết kế hệ thống và khả năng tiếp cận**: `design-systems-ops`, `accessibility-audit`
-**Phân phối sản phẩm và full-stack**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**Bảo mật**: `kiểm tra viên bảo mật`, `máy quét lỗ hổng`, `phản hồi sự cố`, `mô hình hóa mối đe dọa`
-**Quy trình làm việc của người bảo trì OSS**: `documentation`, `changelog`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**Kỹ thuật AI**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Tất cả bảy gói đều được hỗ trợ đầy đủ:

- `thiết yếu` → `4/4`
- `đầy đủ` → `5/5`
- `thiết kế` → `4/4`
- `bảo mật` → `4/4`
- `devops` → `5/5`
- `ai-kỹ sư` → `5/5`
- `người bảo trì oss` → `4/4`

Điểm hiện tại trải rộng từ danh mục được tạo:

- Điểm chất lượng: `94, 95, 96, 97, 100`
- điểm thực hành tốt nhất: `98, 99, 100`
- điểm bảo mật: tất cả các kỹ năng được công bố hiện tại `95`

Cao cấp đại diện:

- `omni-figma` → `chất lượng 100`, `thực hành tốt nhất 100`
- `kiểm tra khả năng truy cập` → `chất lượng 99`, `thực hành tốt nhất 100`
- `auth-flows` → `chất lượng 97`, `best_practices 99`
- `design-systems-ops` → `chất lượng 97`, `best_practices 99`
- `kỹ thuật phát hành` → `chất lượng 97`, `thực hành tốt nhất 99`
- `mô hình mối đe dọa` → `chất lượng 97`, `thực hành tốt nhất 99`
- `kỹ thuật ngữ cảnh` → `chất lượng 97`, `thực hành tốt nhất 99`

Cấp dưới đại diện trong nhóm hàng đầu hiện tại:

- `kiến trúc` → `chất lượng 94`, `thực hành tốt nhất 98`
- `changelog` → `chất lượng 94`, `best_practices 98`
- `create-pr` → `chất lượng 95`, `best_practices 98`

Đây là cố ý. Giờ đây, người chấm điểm sẽ phân biệt “xuất sắc” với “đặc biệt” thay vì làm phẳng toàn bộ danh mục ở trên cùng.---

## 🌟 Strengths

1.**Thiết kế ưu tiên hiện vật**
   Mọi bề mặt thời gian chạy đều sử dụng cùng một danh mục và bảng kê khai được tạo.
2.**Phạm vi giao thức rộng rãi**
   CLI, API, MCP và A2A cùng tồn tại mà không làm phân mảnh mô hình dữ liệu.
3.**Công thái học mạnh mẽ của sản phẩm địa phương**
   Cài đặt có hướng dẫn, trình bao trực quan, `config-mcp` và các giá trị mặc định chạy thử giúp dự án có thể sử dụng được đối với những người dùng thành thạo.
4.**Chế độ bảo mật trung thực**
   Ghi cục bộ, quét tĩnh, ký, tổng kiểm tra và xác minh bản phát hành đều được liệt kê rõ ràng.
5.**Phạm vi tiếp cận MCP lành mạnh**
   Dự án hiện hỗ trợ một lượng lớn khách hàng hiện tại có khả năng MCP mà không giả vờ rằng các mục tiêu không có giấy tờ là ổn định.---

## 🔮 Opportunities

1.**Phạm vi bao phủ gói sâu hơn**
   Bước tiếp theo là chuyên môn hóa bên trong các gói hiện có, không chỉ bao phủ rộng rãi.
2.**Ngữ nghĩa của cầu thủ ghi bàn phong phú hơn**
   Vẫn còn chỗ để đánh giá độ sâu của gói tham chiếu và chất lượng quy trình làm việc theo ngữ nghĩa.
3.**Chỉ thêm người viết khách hàng khi hợp lý**
   Việc mở rộng phải có kỷ luật và gắn liền với các tài liệu chính thức ổn định.
4.**Phân tách trình xác thực**
   `skill_metadata.py` vẫn là một mô-đun lớn và sẽ được hưởng lợi từ việc phân tách nội bộ theo thời gian.
5.**Leo thang quản trị được lưu trữ**
   Đường cơ sở trong quy trình hiện tại là đủ để tự lưu trữ, nhưng việc triển khai doanh nghiệp cuối cùng sẽ cần tích hợp danh tính và cổng bên ngoài.