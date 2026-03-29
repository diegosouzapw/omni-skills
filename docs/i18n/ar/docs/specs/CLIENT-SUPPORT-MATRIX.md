# Client Support Matrix (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


يتتبع هذا المستند سطح العميل العملي لمهارات Omni Skills عبر ثلاثة مدخلات:

1. مخزون لوحة التحكم `9router` في `/home/diegosouzapw/dev/proxys/9router`
2. التنفيذ الجانبي الحالي لـ Omni Skills MCP
3. الوثائق الرسمية الحالية لكل عميل أو IDE

إنه مصدر العمل الحقيقي لتحديد العملاء الذين يحصلون على دعم `config-mcp` من الدرجة الأولى، وأي منهم يبقى يدويًا فقط، وأي منهم مرشح فقط.---

## Scope

تدور هذه المصفوفة حول**تكوين العميل لـ MCP**.

إنها ليست مثل:

- دعم تركيب المهارات
- توافق واجهة برمجة التطبيقات
- دعم A2A
- ACP أو بروتوكولات أخرى غير تابعة لـ MCP

تستهلك بعض المنتجات الموجودة في المصفوفة MCP ولكنها**لا**تحتوي على "دليل مهارات" ذي معنى، لذا فهي تتلقى فقط دعم هدف التكوين.---

## 9router Inventory

تقوم لوحة المعلومات `9router` حاليًا بتجميع أدوات CLI أو عملاء IDE:

- كلود كود
- مخطوطة OpenAI
- مصنع الروبوت
- المخلب المفتوح
- المؤشر
- كلاين
- كود الكيلو
- تابع
- مضاد الجاذبية
- جيثب مساعد الطيار
- الكود المفتوح
- كيرو آي

المصادر المحلية:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

يتمتع هؤلاء العملاء الآن بقصة مستقرة وصريحة في Omni Skills عبر `config-mcp --target...`.

إجمالي التنفيذ الحالي:

-**7 عملاء قادرين على التثبيت**
-**16 عميلاً قادرين على التكوين**
-**33 هدف تكوين من الدرجة الأولى**
-**19 ملف تعريف التكوين**

| العميل | الحالة | أهداف التكوين | ملاحظات |
|:-------|:-------|:--------------|:------|
| كلود كود | ✅ درجة أولى | `مساحة العمل`، `كلود-مشروع`، `إعدادات كلود المستخدم`، `كلود المستخدم`، `كلود المستخدم القديم`، `كلود سطح المكتب` | التكوين المكتوب `mcpServers` مع عناصر تحكم السماح/الرفض الخاصة بكلود |
| المؤشر | ✅ درجة أولى | `مساحة عمل المؤشر`، `مستخدم المؤشر` | أهداف JSON `mcpServers` |
| كود VS | ✅ درجة أولى | `vscode`، `vscode-user`، `vscode-insiders-user`، `devcontainer` | يستخدم جذر "الخوادم" |
| الجوزاء CLI | ✅ درجة أولى | `مستخدم الجوزاء`، `مساحة عمل الجوزاء` | إعدادات JSON + عناصر التحكم MCP العالمية للسماح/الاستبعاد |
| مكافحة الجاذبية | ✅ درجة أولى | `مستخدم مضاد الجاذبية` | هدف JSON `mcpServers` |
| كيرو | ✅ درجة أولى | `مستخدم kiro`، `مساحة عمل kiro`، `تراث مستخدم kiro` | حقول التعطيل/الموافقة التلقائية الخاصة بـ Kiro |
| كوديكس كلي | ✅ درجة أولى | `مستخدم المخطوطة` | جداول TOML `mcp_servers` |
| متابعة | ✅ درجة أولى | `متابعة مساحة العمل` | مستند خادم YAML مخصص |
| ركوب الأمواج | ✅ درجة أولى | `مستخدم ركوب الأمواج شراعيًا` | هدف JSON `mcpServers` مع إدخالات `serverUrl` |
| الكود المفتوح | ✅ درجة أولى | `مساحة عمل الكود المفتوح`، `مستخدم الكود المفتوح` | تكوين المستخدم الرسمي `opencode.json`/باستخدام `mcp` |
| كلاين | ✅ درجة أولى | `مستخدم كلاين` | `cline_mcp_settings.json` مع `mcpServers` |
| جيثب مساعد الطيار CLI | ✅ درجة أولى | "مساعد الطيار" ، "مساعد الطيار" | `mcp-config.json` أو نطاق الريبو `.github/mcp.json` |
| كود الكيلو | ✅ درجة أولى | `kilo-user`، `kilo-project`، `kilo-workspace` | يستخدم Kilo CLI `kilo.json`؛ يستخدم تكامل مساحة العمل `.kilocode/mcp.json` |
| زيد | ✅ درجة أولى | `مساحة عمل زيد` | `.zed/settings.json` مع ``context_servers` |
| جوني | ✅ درجة أولى | `مشروع جوني`، `مستخدم جوني` | `.junie/mcp/mcp.json` أو `~/.junie/mcp/mcp.json` باستخدام `mcpServers` |
| أوزة | ✅ درجة أولى | `مستخدم الإوزة` | `~/.config/goose/config.yaml` باستخدام كائن "امتدادات" عالي المستوى لامتدادات MCP المستمرة |---

## Current Gaps

هؤلاء العملاء من 9router ليسوا**بعد كاتبين من الدرجة الأولى في Omni Skills:

| العميل | الحالة الحالية | لماذا |
|:-------|:------------|:----|
| مصنع الروبوت | ⚠️ يدوي/مخصص فقط | لم يتم العثور على شكل تكوين MCP عام ثابت في المستندات الأساسية أثناء هذا المرور |
| اوبن كلاو | ⚠️ يدوي/مخصص فقط | نفس المشكلة مثل Factory Droid |

لا يزال من الممكن استخدام الشريط الجانبي مع `--file` أو المسارات المخصصة للمستخدمين المتقدمين، ولكن لا ينبغي لـ Omni Skills اختراع كتاب من الدرجة الأولى بدون مستندات تكوين عامة مستقرة.

تم الآن فهم منتجين متجاورين بشكل أفضل، ولكنهما ما زالا يتعمدان عدم الوصول إلى مستوى الكاتبين الآليين من الدرجة الأولى:

| العميل | الحالة الحالية | لماذا |
|:-------|:------------|:----|
| مساعد JetBrains AI | 🟡 دليل/مقتطف | يوجد دعم رسمي لـ MCP، لكن سير العمل الموثق يعتمد على واجهة المستخدم/يعتمد على الاستيراد وليس هدف ملف عام مستقر |
| ساعي البريد | 🟡 دليل/مقتطف | يوجد دعم رسمي لـ MCP، ولكن تتم إدارة التكوين داخل منتج UX بدلاً من هدف ملف عام ثابت |
| كود رو | 🟡 المرشح | توجد مستندات MCP العامة، لكن عقد مسار الملف القوي عبر الأنظمة الأساسية لا يزال يحتاج إلى تأكيد قبل إضافة كاتب |---

## Support Policy

تتبع Omni Skills الآن مجموعة القواعد هذه:

1.**إمكانية التثبيت**في حالة وجود دليل مهارات ثابت.
2.**قادرة على التكوين**في حالة وجود تنسيق ملف تكوين MCP عام ومستقر.
3.**يدويًا/مقتطفًا فقط**إذا كان المنتج يدعم MCP ولكن العقد العام هو واجهة المستخدم أولاً، أو الاستيراد أولاً، أو لا يزال غير مستقر للغاية.

هذا أيضًا هو الحل العملي لأحد الأسئلة المعمارية السابقة: يجب أن يستمر المشروع في تنمية كتاب من الدرجة الأولى فقط في حالة وجود تنسيق عام مستقر، وبخلاف ذلك يعتمد على مجموعة أصغر من عائلات التصدير الأساسية بالإضافة إلى الوصفات والمقتطفات.### Canonical config families already in use

- JSON `mcpServers`
- خوادم JSON
- JSON "خوادم_السياق".
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| العميل / IDE | توصية | السبب |
|:-------------|:--------------|:-------|
| مساعد JetBrains AI | 🟡 احتفظ بالدليل/المقتطف في الوقت الحالي | الدعم الرسمي حقيقي، لكن تجربة المستخدم لا تزال مُدارة بواسطة المنتج بدلاً من عقد الملف أولاً |
| ساعي البريد | 🟡 احتفظ بالدليل/المقتطف في الوقت الحالي | الإعداد الرسمي هو واجهة المستخدم أولاً وتتم إدارة مساحة العمل بدلاً من عقد الملف أولاً |
| كود رو | 🟡 التحقيق التالي | دعم MCP واعد، لكن سلامة الكاتب تعتمد على تأكيد أقوى لمسار التكوين |
| VS Code Copilot Chat | 🟢 تمت تغطيته بالفعل بشكل غير مباشر | مواقع ملفات VS Code MCP الأساسية مدعومة بالفعل |
| زيد ACP / خوادم الوكيل | 🟡 مسار منفصل | هذه منطقة خادم ACP/agent، وليست مجرد كتابة تكوين MCP |---

## Official Sources Used

تم فحص القرارات المذكورة أعلاه مقابل المصادر الأولية الحالية:

- [الأنثروبي كلود كود MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [المؤشر MCP](https://docs.cursor.com/tools)
- [متابعة MCP](https://docs.continue.dev/customize/tools)
- [كيرو MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [مساعد JetBrains AI MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [ملفات تكوين الإوزة](https://block.github.io/goose/docs/guides/config-files/)
- [امتدادات جلسة Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [إعداد Postman MCP](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [دليل ملحق VS Code MCP](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [سجل MCP الرسمي](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

يميز برنامج Omni Skills الحالي عمدا بين ثلاثة مستويات دعم:

-**العملاء القادرون على التثبيت**
  - أن يكون لديك دليل مهارات معروف ويمكنه استخدام "install_skills".
-**العملاء القادرون على التكوين**
  - لديه هدف تكوين ثابت ويمكنه استخدام `configure_client_mcp`
-**العملاء اليدويون/المقتطفون**
  - موثق ولكن بدون كاتب ملفات آمن من الدرجة الأولى حتى الآن

هذا الفصل يبقي المنتج صادقًا.

لا ينبغي التعامل مع كل منتج قادر على MCP كهدف لتثبيت المهارات.
تعتبر مرحلة التوسيع مكتملة في الوقت الحالي: يجب أن يتم تنفيذ الإضافات المستقبلية فقط إذا قامت بمسح نفس شرط العقد العام الذي تم مسحه الآن من قبل Goose وJunie وContinue وWindsurf.