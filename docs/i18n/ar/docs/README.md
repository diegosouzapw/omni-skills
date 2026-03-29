# 📖 Omni Skills — Documentation Hub (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**المرجع المركزي لاستخدام منصة Omni Skills الحالية وتشغيلها وتوسيعها وفهمها.**

توجد ملفات المجتمع القياسية في جذر المستودع:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| المنطقة | الدولة | التفاصيل |
|:-----|:-----|:--------|
| 🏗️**وقت التشغيل**| ✅ الحالي | يتم شحن كل من Unified CLI وInk visual shell وAPI وMCP وA2A من نفس الحزمة |
| 📦**الكتالوج**| 📌32 مهارة | 32 مهارة منشورة في "اللغة الثالثة" عبر 15 فئة كتالوج نشطة و7 حزم مدعومة بالكامل |
| 🎯**تثبيت**| ✅ الحالي | تثبيت TTY الموجه، و`--skill` و`-bundle` الانتقائية، ودعم المسار المخصص، والتثبيت القائم على الاكتشاف |
| 🌐**واجهة برمجة التطبيقات**| ✅ الحالي | واجهة برمجة تطبيقات التسجيل للقراءة فقط مع المصادقة ووقت تشغيل المسؤول وتحديد المعدل وقوائم CORS/IP المسموح بها ووضع الصيانة والتنزيلات |
| 🔌**MCP**| ✅ الحالي | `stdio` · `stream` · `sse`، الوضع الجانبي المحلي، 7 عملاء قادرين على التثبيت، 16 عميلاً قادرين على التكوين، 33 هدف تكوين، و19 ملف تعريف تكوين |
| 🤖**A2A**| ✅ الحالي | وقت تشغيل محلي بسيط أولاً مع متانة JSON/SQLite، واستئناف إعادة التشغيل، وتدفق SSE، والإلغاء، ووضع المنفذ الخارجي، والتنسيق المؤجر الاختياري عند التمكين بشكل صريح |
| 🛡️**الأمن**| ✅ الحالي | الماسح الضوئي الثابت، ClamAV/VirusTotal الاختياري، عناصر الإصدار الموقعة، المجاميع الاختبارية للأرشيف، والتحقق من وقت الإصدار |
| 📋**التصنيف**| ✅ الحالي | التصنيف القانوني، والنضج، وانتشار الجودة الدلالية، وانتشار أفضل الممارسات، والتقييم الأمني ​​|
| 📁**الأرشيف**| ✅ الحالي | أرشيفات `.zip` و`.tar.gz` لكل مهارة مع بيانات المجموع الاختباري SHA-256 |
| 🔐**التوقيع**| ✅ الحالي | التوقيعات المنفصلة المفروضة على علامات الإصدار؛ تستهلك تدفقات التثبيت المحلية نفس البيانات الوصفية للبيان والمجموع الاختباري |
| 🧬**التدفق المدخول**| ✅ الحالي | تندرج المهارات الأصلية ضمن `المهارات/`؛ تقوم أتمتة العلاقات العامة بمراجعتها وتقترح مشتقات محسنة بالكامل تحت عنوان `skills_omni/` |## 🔭 Current Project State

يعيش المسار الأساسي الآن في حالة المشروع النشط، وموجة توسيع الفئة الثانية موجودة بالفعل في الكتالوج. يجب الآن قراءة المشروع كخط أساس للعمل مع مسارات توسع مستقبلية اختيارية:

- العام `v0.1.2` والخاص `v0.0.1` هما أرضية الإصدار المستقر الحالي
- يغطي الكتالوج الآن 32 مهارة منشورة عبر 15 فئة نشطة و7 حزم مدعومة بالكامل
- المدخول الأصلي والمخرجات المنسقة `skills_omni/` كلاهما جاهز للعمل، بما في ذلك المدخول الأصلي متعدد اللغات والمخرجات المنسقة باللغة الإنجليزية فقط
- أسطح البروتوكول، وأتمتة الإصدار، وأتمتة التحسين الخاص موجودة في الخدمة، وليست في التمهيد

التوسع المستقبلي يظل متعمدًا:

- تعميق "التصميم" و"الأدوات" و"الذكاء الاصطناعي للبيانات" و"التعلم الآلي"
- تجنب إعادة فتح الفئات الخاملة غير الأصلية حتى تتمتع المسارات الحالية ذات الكود الأصلي بعمق أقوى
- حافظ على أرضية الجودة ومسار مراجعة المحسن سليمًا أثناء القيام بذلك

تنقسم هذه الخطة الآن إلى:

- موجة التوسعة الأولى المكتملة في [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- موجة التوسعة الثانية المكتملة في [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- والتراكم التطلعي في [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

لم تعد هذه الأسئلة المتعلقة بالهندسة المعمارية "مفتوحة" في الممارسة العملية ويتم التعامل معها الآن كقرارات مشروع:

1.**يبقى التوزيع في البيان أولاً بالإضافة إلى الأرشيفات الموقعة**
   يظل البيان المقروء آليًا هو العقد الذي تستهلكه CLI وAPI وMCP وA2A. إن الأرشيفات الموقعة لكل مهارة هي سطح التنزيل والإصدار الموجود أعلى هذا العقد.
2.**يجب أن تعيد الكتالوجات الخاصة أو المميزة استخدام نفس مخطط البيان**
   يجب أن يتم وضع المصادقة والسياسة في طبقات خارجية، وليس عن طريق تشعب شكل البيان أو الكتالوج.
3.**يجب أن يتقارب تكوين MCP مع عدد قليل من عائلات التصدير الأساسية**
   تعمل Omni Skills الآن على توحيد معايير JSON `mcpServers` وJSON `servers` وJSON `context_servers` وYAML `mcpServers` وYAML `extensions` وTOML `[mcp_servers]`، مع الاحتفاظ بالكتابة المخصصة فقط عندما تتطلب مستندات العميل الرسمية بنية مختلفة.

تتوافق هذه القرارات مع وثائق MCP الرسمية الحالية والعميل، بما في ذلك:

- سجل MCP الرسمي وإرشادات دعم الامتداد على "modelcontextprotocol.io".
- مستندات OpenAI Docs MCP وCodex CLI على "developers.openai.com" و"platform.openai.com".
- ملحق VS Code MCP ومستندات المنتج على "code.visualstudio.com".
- مستندات العميل لـ Claude Code، وCursor، وContinue، وJunie، وKiro، وOpenCode، وCline، وKilo Code، وGitHub Copilot CLI، وZed، وGoose، وPostman، وJetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| وثيقة | ماذا ستتعلم |
|:----|:------------------|
| 📘 [البدء](users/GETTING-STARTED.md) | قم بتثبيت مهارتك الأولى والتحقق منها واستدعاءها |
| 🧭 [دليل مستخدم CLI](users/CLI-USER-GUIDE.md) | مرجع كامل للأوامر وأنماط استخدام واجهة سطر الأوامر (CLI) في العالم الحقيقي |
| 📗 [دليل الاستخدام](users/USAGE.md) | أوامر CLI وأوضاع التثبيت وأوامر وقت التشغيل وتدفقات تكوين MCP |
| 📦 [الحزم](users/BUNDLES.md) | الحزم المنسقة وتوافرها الحالي |
| 📚 [الكتالوج](CATALOG.md) | كتالوج تم إنشاؤه تلقائيًا للمهارات المنشورة |
| 🔧 [دليل تشغيل النظام](operations/RUNBOOK.md) | إنشاء وقت التشغيل وخدمته وتأمينه واستكشاف أخطائه وإصلاحها |### 🏗️ If You Want to **Understand** the Runtime

| وثيقة | ماذا ستتعلم |
|:----|:------------------|
| 🗺️ [خريطة طريق الوكيل الأصلي](architecture/AGENT-NATIVE-ROADMAP.md) | تطور العمارة والقرارات المغلقة ومجالات التوسع المتبقية |
| 🧭 [خريطة طريق CLI UX](architecture/CLI-UX-ROADMAP.md) | الخطة التاريخية والشكل الحالي لـ CLI الموجهة والمرئية |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | monorepo الأساسي وقرار وقت التشغيل المشترك |
| 🔬 [تحليل قاعدة الكود](architecture/CODEBASE-ANALYSIS.md) | تكوين وقت التشغيل الحالي، والتعداد، وحدود النظام |
| 🌐 [سطح واجهة برمجة تطبيقات الكتالوج](specs/CATALOG-API.md) | نقاط نهاية HTTP والتصفية والحوكمة والتنزيلات |
| 🧩 [مثبت CLI الموجه](المواصفات/CLI-GUIDED-INSTALLER.md) | العقد السلوكي للمثبت الموجه |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | الغلاف المرئي للحبر ونموذج الحالة ومركز الخدمة |
| 🔌 [MCP Sidecar المحلي](specs/LOCAL-MCP-SIDECAR.md) | الأدوات المتوافقة مع نظام الملفات ونموذج القائمة المسموح بها وكتابة التكوين |
| 🧭 [مصفوفة دعم العميل](specs/CLIENT-SUPPORT-MATRIX.md) | عملاء CLI و IDE المدعومون والكتاب والأهداف اليدوية ومراجع المصدر |
| 📊 [تصنيف المهارات](specs/SKILL-CLASSIFICATION.md) | التصنيف، والاستدلال على النتائج، والتحف البيانات الوصفية |
| 🛡️ [التحقق من صحة الأمان](specs/SECURITY-VALIDATION.md) | الماسحات الضوئية والمحفوظات والتوقيعات والتحقق من الإصدار |
| 📋 [مواصفات بيان المهارة](specs/SKILL-MANIFEST.md) | تنسيق البيان المقروء آليًا وعقد التوافق |### 🤝 If You Want to **Contribute**

| وثيقة | ماذا ستتعلم |
|:----|:------------------|
| 📝 [ دليل المساهمة ](../CONTRIBUTING.md) | سير عمل الريبو وتوقعات طلب السحب |
| 🧾 [سير عمل العلاقات العامة في المهارات](contributors/SKILL-PR-WORKFLOW.md) | الاستيعاب الأصلي، ومعالجة المحسنات التلقائية، والنشر `skills_omni/`، وتوقعات المراجعين |
| 📄 [نموذج المهارة](contributors/SKILL-TEMPLATE.md) | بداية `SKILL.md` مع المادة الأمامية الحالية والهيكل |
| 🔬 [مهارة التشريح](contributors/SKILL-ANATOMY.md) | هيكل وتوقعات الجودة للمهارة |
| ✅ [شريط الجودة](contributors/QUALITY-BAR.md) | معايير القبول للمستودع |
| 🏆 [دليل اللعب عالي الدرجات](contributors/HIGH-SCORE-PLAYBOOK.md) | ما الذي يدفع إلى النضج العالي والجودة وأفضل الممارسات ودرجات الأمان |
| 📋 [تراكم المهام](tasks/README.md) | تفاصيل التنفيذ المتراكم لبقية الأعمال العامة والخاصة |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

إن ثنائي "المهارات الشاملة" المنشور هو نقطة الدخول العامة الموحدة.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

للحصول على سطح أوامر المستخدم النهائي الكامل، استخدم [دليل مستخدم CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

يُصدر خط أنابيب الإنشاء الملفات القابلة للقراءة آليًا والتي تقود كل سطح وقت التشغيل:

| قطعة أثرية | الغرض |
|:---------|:-------|
| `metadata.json` | التحقق من صحة المستودع وملخص النتيجة |
| `skills_index.json` | مؤشر المهارات الطبيعية المحلية الريبو |
| `dist/catalog.json` | نشر كتالوج للبحث والإدراج |
| `dist/bundles.json` | تعريفات الحزمة مع التوفر |
| `dist/manifests/<skill>.json` | بيان يمكن قراءته آليًا لكل مهارة |
| `dist/archives/<skill>.zip` | أرشيف المهارات (zip) |
| `dist/archives/<skill>.tar.gz` | أرشيف المهارات (القطران) |
| `dist/archives/<skill>.checksums.txt` | بيان المجموع الاختباري SHA-256 |

يظل `dist/` ملتزمًا عن قصد. تعد هذه العناصر التي تم إنشاؤها جزءًا من عقد التثبيت وAPI وMCP وA2A والدخان والإصدار.### 🌐 API

```bash
npx omni-skills api --port 3333
```

واجهة برمجة تطبيقات التسجيل للقراءة فقط للمهارات والحزم والمقارنة وتخطيط التثبيت وتنزيلات العناصر.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

يدعم الجهاز الجانبي المحلي الآن كتابة تكوين MCP من الدرجة الأولى من أجل:

- كلود كود
- المؤشر
- كود VS وحاويات التطوير
- الجوزاء CLI
- مضاد الجاذبية
- كيرو
- كوديكس كلي
- تابع
- ركوب الأمواج
- الكود المفتوح
- كلاين
- جيثب مساعد الطيار CLI
- كود الكيلو
- زيد
- أوزة### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

دورة حياة المهمة، والتدفق، والمثابرة، وإعادة تشغيل الاسترداد، والتنسيق المحلي البسيط أولاً. يتوفر التنفيذ المؤجر المشترك عند تمكينه بشكل صريح؛ يظل Redis خيارًا مستضافًا متقدمًا، وليس المسار المحلي الافتراضي.---

## 🗂️ Repository Map

| المسار | الغرض |
|:-----|:--------|
| 📂 `مهارات/` | مهارات التأليف الكنسي |
| 📖 `docs/users/` | وثائق المستخدم النهائي |
| 🤝 `docs/contributors/` | قوالب المساهمين والإرشادات |
| 🏗️ `docs/architecture/` | خريطة الطريق، ADRs، والتحليل الفني |
| 🔧`docs/operations/` | دفاتر التشغيل التشغيلية |
| 📋 `مستندات/مواصفات/` | وقت التشغيل والبروتوكول والعقود الأثرية |
| 📚`docs/CATALOG.md` | كتالوج المهارات المولدة |
| 📦 `ديست/` | التحف المولدة للقراءة آليا |
| 🧠 `packages/catalog-core/` | وقت تشغيل الكتالوج المشترك |
| 🌐 `packages/server-api/` | للقراءة فقط HTTP API |
| 🔌`packages/server-mcp/` | خادم MCP والعربة الجانبية المحلية |
| 🤖 `packages/server-a2a/` | خادم A2A ووقت تشغيل المهمة |
| 🖥️ `أدوات/بن/` | نقاط دخول CLI |
| 📚 `tools/lib/` | المثبت ومساعدي واجهة المستخدم |
| ⚙️ `أدوات/نصوص برمجية/` | التحقق من الصحة والتوليد والتحقق والاختبارات |---

## 🧪 Release Validation

```bash
npm run smoke
```

يؤكد تشغيل الدخان:

- ✅ التحقق من صحة المهارات وتوليد البيانات الوصفية
- ✅ أدوات إعادة تصنيف التصنيف
- ✅ توليد القطع الأثرية بالكتالوج
- ✅ تخفيض سعر الكتالوج الذي تم إنشاؤه
- ✅ إنشاء الأرشيف والتحقق منه
- ✅ مجموعة الاختبارات الآلية
- ✅ `حزمة npm --dry-run`
- ✅ التمهيد API والصحة
- ✅ تشغيل MCP في "stdio" و"stream" و"sse".
- ✅ تمهيد A2A، والاستقصاء، وتدفق SSE، والإلغاء، ودورة حياة الضغط على التكوين