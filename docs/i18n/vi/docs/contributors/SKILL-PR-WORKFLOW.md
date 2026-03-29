# Skill PR Workflow (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Đây là luồng kho lưu trữ chuẩn dành cho các yêu cầu kéo bổ sung hoặc nâng cấp đáng kể một hoặc nhiều kỹ năng gốc.

Sử dụng nó khi:

- thêm một kỹ năng mới dưới `skills/`
- đào sâu thêm một gói với các kỹ năng miền mới
- vận chuyển bản mở rộng gói hỗ trợ lớn hơn
- xác thực một nhánh bằng bộ tăng cường riêng trước khi người bảo trì hợp nhất nó## Target Outcome

Kỹ năng PR bản địa mạnh mẽ sẽ có được:

- một kỹ năng bản địa dưới `skills/`
- đủ nội dung để người xác thực công khai phân loại và lập chỉ mục cho nó
- vượt qua xác nhận và kiểm tra công khai
- xử lý chất tăng cường tự động trong quá trình PR
- `skills_omni/` PR tiếp theo khi các dẫn xuất nâng cao được xuất bản
- lượng bản địa được bảo tồn bằng ngôn ngữ gốc khi cần thiết
- đầu ra nâng cao được quản lý viết lại sang tiếng Anh
- luồng một chiều từ gốc đến được quản lý không đưa `skills_omni/` trở lại lượng chất tăng cường gốc## Enhancer Outcome States

Công cụ tăng cường PR công khai hiện báo cáo bốn trạng thái mà người bảo trì có thể nhìn thấy:

- `hoàn thành`
  Sản phẩm phái sinh nâng cao được tạo rõ ràng và đủ điều kiện để xuất bản đồng hành `skills_omni/`.
- `suy thoái`
  Trình cải tiến đã hoàn tất nhưng nó sử dụng đường dẫn dự phòng hoặc tạo ra cảnh báo. Việc xem xét của người bảo trì vẫn cần được thực hiện trước khi coi dẫn xuất là lành mạnh.
- `bị chặn`
  Quá trình chạy đã bị dừng do các vấn đề về cơ sở hạ tầng hoặc xác thực, chẳng hạn như lỗi kiểm tra trước OmniRoute được lưu trữ hoặc lỗi xác thực ứng viên sẽ ngăn cản việc xuất bản.
- `thất bại`
  Bộ tăng cường đã gặp phải lỗi thời gian chạy không mong muốn và cần người bảo trì điều tra.## Recommended Branch Shape

Tạo một nhánh tập trung:```bash
git checkout -b feat/<short-skill-theme>
```

Ví dụ:

- `đánh giá khả năng quan sát/sự cố`
- `feat/devops-skill-pack`
- `feat/security-skill-pack`## Native Intake Rules

Bề mặt tiếp nhận công cộng được cho phép một cách có chủ ý.

tối thiểu:```text
skills/<skill>/
└── SKILL.md
```

Được đề xuất nhưng không còn cần thiết cho lượng ăn vào:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Đóng góp gốc có thể thô sơ, không đầy đủ hoặc nằm ngoài tiêu chuẩn gói hỗ trợ thông thường. Đó là cố ý. `skills/` là bề mặt tiếp nhận gốc, không phải bề mặt phái sinh được quản lý.

Chính sách ngôn ngữ:

- nội dung bản địa dưới `skills/` có thể được viết bằng bất kỳ ngôn ngữ nào
- trình cải tiến giữ ảnh chụp nhanh gốc như được gửi để xuất xứ
- đạo hàm được tuyển chọn trong `skills_omni/` phải luôn được viết bằng tiếng Anh

Thanh biên tập chặt chẽ hơn hiện áp dụng cho:

- siêu dữ liệu được tạo và kiểm tra bảo mật
- đánh giá nâng cao tư nhân
- đạo hàm được quản lý tiếp theo trong `skills_omni/`## Authoring Sequence

1. Tạo `skills/<skill>/SKILL.md`.
2. Thêm vật chất đầu vào nếu bạn có thể, nhưng vật chất đầu bị thiếu hoặc không đầy đủ sẽ không còn tự chặn lượng tiếp nhận tự nhiên nữa.
3. Thêm `agent/`, `references/`, `examples/`, và `scripts/` khi bạn đã có chúng.
4. Cập nhật `data/bundles.json` nếu kỹ năng này nâng cao gói hiện có.
5. Mở PR. Việc tự động hóa kho lưu trữ hiện thực hiện phần còn lại.## Validation Sequence

Người đóng góp có thể chạy trình tự chính xác này trước khi mở PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Nếu thay đổi cũng ảnh hưởng đến hành vi thời gian chạy hoặc đóng gói, hãy chạy:```bash
npm run smoke
```

## What Happens Automatically During the PR

Khi một PR mở hoặc đồng bộ hóa và nó chỉ chạm vào các tệp tiếp nhận kỹ năng gốc trong `skills/` cộng với `data/bundles.json` tùy chọn, kho lưu trữ công khai giờ đây sẽ tự động kích hoạt trình tăng cường riêng tư.

Luồng tự động hiện tại:

1. Quy trình làm việc `Xác thực Kỹ năng` công khai chạy trên PR và kiểm tra xác thực, xây dựng, tạo phẩm và kiểm tra.
2. Quy trình làm việc `Nâng cao Kỹ năng PR` công khai bắt đầu song song và xử lý từng kỹ năng bản địa đã thay đổi ở chế độ `trực tiếp`.
3. Trình nâng cao đọc kỹ năng gốc từ `skills/`, nghiên cứu các phương pháp thực hành tốt nhất hiện tại và viết một ứng viên nâng cao đã được đánh giá trong không gian làm việc riêng tư.
4. Trình cải tiến giữ lại ảnh chụp nhanh đầu vào ngược dòng bằng ngôn ngữ gốc khi cần, nhưng viết lại đầu ra được tuyển chọn bằng tiếng Anh.
5. Bài đăng của trình tăng cường sẽ quay trở lại nguồn PR.
6. Trình cải tiến cập nhật nhận xét trạng thái PR sau mỗi kỹ năng được xử lý với tổng số lô và trạng thái mới nhất.
7. Khi hoàn tất, nó cụ thể hóa đạo hàm nâng cao thành `skills_omni/` và mở hoặc cập nhật một PR đi kèm trong kho lưu trữ công khai chỉ cho các đầu ra `đã hoàn thành` và `đã xuống cấp`.
8. Sau khi PR được hợp nhất thành `main`, trình thăm dò nhận biết kho lưu trữ riêng tư sẽ xử lý lại mọi kỹ năng gốc đã thay đổi, làm mới `không gian làm việc/nâng cao/skills/<skill>/` và giữ cho đường cơ sở nâng cao riêng tư được căn chỉnh với nguồn gốc công khai mới nhất.
9. Sau khi hợp nhất, quy trình phát hành công khai sẽ xử lý phiên bản gói npm, tạo lại các tạo phẩm danh mục, xuất bản bản phát hành và tự động gắn thẻ phiên bản mới.

Giới hạn tỷ lệ:

- công cụ tăng cường PR hiện đang xử lý**1 kỹ năng mỗi phút**
- do đó, một PR với 40 kỹ năng mới nguyên bản có thể ở trong hàng đợi nâng cấp trong khoảng 40 phút
- PR cho thấy hoạt động như một hoạt động CI đang diễn ra cộng với nhận xét về tiến trình nâng cao kỹ năng theo kỹ năng

Người đóng góp không cần chạy công cụ cải tiến theo cách thủ công.## No-Loop Rule For `skills_omni/`

Bề mặt giám tuyển có chủ ý một chiều:

- đầu vào gốc được nhập thông qua `skills/`
- trình tăng cường riêng tư đánh giá đầu vào gốc đó
- đầu ra được quản lý được đề xuất vào `skills_omni/`
- `skills_omni/` không bao giờ được coi là lượng tiếp nhận tự nhiên nữa
- các bản cập nhật gốc sau này vẫn nhập lại thông qua `skills/` và thay thế đường cơ sở nâng cao riêng tư sau khi xử lý lại

Kho lưu trữ hiện thực thi ranh giới đó:

- PR công khai trực tiếp sửa đổi `skills_omni/` đều bị từ chối
- chỉ các PR đồng hành được tự động hóa từ nhánh `skills-omni/pr-*` mới được chấp nhận ở đó
- các PR hỗn hợp cố gắng thay đổi cả `skills/` và `skills_omni/` cùng một lúc đều bị từ chối## Automatic Versioning After Merge

Việc hợp nhất mang tính kỹ năng với `main` giờ đây sẽ tự động kích hoạt quy trình phát hành kho lưu trữ.

Chính sách phiên bản gói hiện tại:

- tăng dần bản vá theo `+1` cho mỗi lần hợp nhất đủ điều kiện
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- sau `.10`, gói sẽ chuyển sang bản vá phụ tiếp theo và đặt lại
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Đường dẫn kích hoạt bản phát hành hiện tại:

- `kỹ năng/**`
- `skills_omni/**`
- `data/bundles.json`

Công việc phát hành tự động đó:

1. tính phiên bản gói tiếp theo từ `package.json`
2. va chạm `package.json` và `package-lock.json`
3. tạo lại `metadata.json`, `skills_index.json`, `dist/` và `docs/CATALOG.md`
4. chạy quy trình xác minh bản phát hành nghiêm ngặt
5. cam kết phiên bản quay trở lại `main`
6. tạo thẻ Git cho phiên bản mới
7. xuất bản các tạo phẩm phát hành npm và GitHub

Lưu ý triển khai quan trọng:

- GitHub chỉ đăng ký tệp quy trình làm việc mới dưới dạng quy trình làm việc của kho lưu trữ đang hoạt động sau khi tệp đó đến nhánh mặc định.
- Cho đến khi `Nâng cao kỹ năng PR` xuất hiện trên `chính`, những người đóng góp có thể đọc quy trình được ghi lại, nhưng GitHub sẽ chưa tự động thực hiện quy trình làm việc đó trên các PR công khai.
- Sau khi quy trình làm việc được hợp nhất thành `chính`, hành vi được mô tả ở trên sẽ trở thành đường dẫn tiếp nhận mặc định cho các PR kỹ năng bản địa trong tương lai.## Native vs Enhanced

Kho lưu trữ này hiện có hai bề mặt riêng biệt:

- `kỹ năng/`
  Lượng bản địa. Điều này bảo tồn sự đóng góp ban đầu như đã gửi.
- `skills_omni/`
  Đầu ra phái sinh được nâng cao Omni được đề xuất bằng phương pháp tự động hóa và được duy trì bởi Nhóm Kỹ năng Omni.

Quy tắc ghi công cho `skills_omni/`:

- đạo hàm nâng cao trở thành được duy trì Omni
- người đóng góp ban đầu và kỹ năng bản địa ngược dòng vẫn được ghi nhận
- mỗi thư mục nâng cao giữ một tệp `ATTRIBUTION.md` với đường dẫn ngược dòng, PR, tác giả và bối cảnh nguồn
- mỗi thư mục nâng cao chỉ được quản lý đầu ra và không được gửi lại vào đường dẫn tiếp nhận trình tăng cường gốc
- mỗi thư mục nâng cao dự kiến sẽ là đầu ra bằng tiếng Anh ngay cả khi nguồn gốc ngược dòng không có## Manual Maintainer Commands

Quá trình tự động hóa bao gồm lượng PR thông thường nhưng người bảo trì vẫn có thể chạy công cụ tăng cường riêng theo cách thủ công khi cần.

Hàng loạt so với một nhánh khác:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Đánh giá kỹ năng đơn:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Đầu ra của chất tăng cường dự kiến ​​cho mỗi kỹ năng:

- `không gian làm việc/đến/gốc/<run-id>/<skill>/`
- `không gian làm việc/ứng viên nâng cao/<run-id>/<skill>/`
- `không gian làm việc/báo cáo/<run-id>/research.json`
- `không gian làm việc/báo cáo/<run-id>/rewrite.json`
- `không gian làm việc/báo cáo/<run-id>/validation.json`
- `không gian làm việc/báo cáo/<run-id>/score-delta.json`
- `không gian làm việc/báo cáo/<run-id>/review.md`
- `không gian làm việc/báo cáo/<run-id>/research-prompt.md`
- `không gian làm việc/báo cáo/<run-id>/rewrite-prompt.md`## PR Body Expectations

Cơ quan PR nên nêu rõ:

- những kỹ năng nào đã được thêm hoặc nâng cấp
- những gói hoặc quy trình công việc nào họ đào sâu hơn
- xác thực nào đã chạy
- liệu trình tăng cường tự động có chạy hay không
- liệu nó đã mở hoặc cập nhật PR đi kèm `skills_omni/` hay chưa
- bất kỳ ghi chú đặc biệt nào của người bảo trì về phân bổ hoặc dọn dẹp theo dõi## Reviewer Checklist

- lượng tiêu thụ gốc là hợp pháp và không độc hại
- siêu dữ liệu và bảng kê khai đã tạo đã được làm mới
- cập nhật gói có chủ ý
- đầu ra xác thực và xây dựng công khai có màu xanh
- nhận xét trạng thái nâng cao phù hợp với các kỹ năng đã thay đổi thực tế và trạng thái kết quả cuối cùng
- bất kỳ PR đi kèm `skills_omni/` nào đều duy trì sự phân bổ chính xác## Example PR Scope

Một ví dụ điển hình về PR có thể thêm một bộ chuyên đề như:

- một khả năng quan sát hoặc kỹ năng DevOps
- một sự cố hoặc kỹ năng bảo mật
- một kỹ năng đánh giá hoặc nhắc nhở AI

Nó đủ lớn để thực hiện công cụ ghi điểm, công cụ nâng cao tự động, luồng xuất bản `skills_omni/`, các gói và mô hình phân bổ mà không biến PR thành một bản viết lại danh mục đầy đủ.