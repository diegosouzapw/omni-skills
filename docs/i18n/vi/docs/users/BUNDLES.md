# 📦 Curated Bundles (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Các gói là các bộ chọn kỹ năng được tuyển chọn được xếp lớp ở đầu danh mục.**Tất cả bảy gói ban đầu hiện được hỗ trợ đầy đủ bởi các kỹ năng đã xuất bản.---

## ⚙️ How Bundles Work

`--bundle`**không**cài đặt một gói đặc biệt. Nó:

1. 📋 Mở rộng định nghĩa gói đã chọn
2. ✅ Chỉ cài đặt các thành viên hiện có trong danh mục
3. ✅ Xây dựng kế hoạch cài đặt cụ thể từ các thành viên gói đã xuất bản```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Dựa trên danh mục được tạo hiện tại (`dist/bundles.json`):

| Gói | Dành cho | Có sẵn | Thành viên |
|:-------|:-------------|:----------|:--------|
| 🧰**thiết yếu**| Mọi nhà phát triển |**4/4**| `kỹ năng tìm kiếm` ✅ · `động não` ✅ · `kiến trúc` ✅ · `gỡ lỗi` ✅ |
| 🌐**đầy đủ**| Nhà phát triển web và ứng dụng |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**thiết kế**| Hệ thống thiết kế & khả năng tiếp cận |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**bảo mật**| Kỹ sư bảo mật |**4/4**| `kiểm toán viên bảo mật` ✅ · `máy quét lỗ hổng` ✅ · `phản hồi sự cố` ✅ · `mô hình hóa mối đe dọa` ✅ |
| ⚙️**devops**| Nền tảng & cơ sở hạ tầng |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-kỹ sư**| Nhà phát triển LLM & ML |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**người bảo trì oss**| Người bảo trì OSS |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `tài liệu` ✅ |

> ✅ = Đã xuất bản và có thể cài đặt được---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Bạn muốn**điểm khởi đầu được tuyển chọn**cho một miền
- Bạn muốn các gói cài đặt luôn**được tuyển chọn và dành riêng cho từng miền**
- Bạn muốn cài đặt một bộ công việc hoàn chỉnh cho một vai trò một cách nhanh chóng### 🎯 Use `--skill` instead when:

- Bạn muốn**cài đặt tối thiểu được đảm bảo**
- Bạn đã biết**kỹ năng chính xác**bạn cần
- Bạn muốn**dấu chân nhỏ nhất có thể**thay vì một bộ làm việc được tuyển chọn---

## 💡 Practical Recommendations

| Mục tiêu | Lệnh |
|:------|:--------|
| 🎯 Cài đặt một kỹ năng được xuất bản cụ thể | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Gói khởi đầu được hỗ trợ đầy đủ | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Gói hệ thống thiết kế | `kỹ năng đa năng của npx --con trỏ --thiết kế theo gói` |
| 🔧 Gói quy trình làm việc OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Gói quy trình bảo mật | `npx omni-skills --cursor --bundle security` |
| ⚙️ Gói DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Gói kỹ sư AI | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Tìm hiểu trước khi quyết định | `npx omni-skills tìm figma` |
| 📋 Xem tất cả tính sẵn có của gói | `cat dist/bundles.json` |---

## 🔍 Inspecting Bundles

### 📁 View Generated Bundle Data

```bash
cat dist/bundles.json
```

### 🌐 Query via API

```bash
curl http://127.0.0.1:3333/v1/bundles
```

### 🔌 Query via MCP

Sử dụng công cụ `search_skills` hoặc `preview_install` với các tham số gói.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
