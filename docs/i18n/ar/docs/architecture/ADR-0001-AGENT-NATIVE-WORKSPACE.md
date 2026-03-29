# 📐 ADR-0001: Agent-Native Workspace Foundation (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**القرار المعماري الرئيسي الذي ساهم في تشكيل بنية مساحة عمل monorepo.**---

## 📊 Status

✅**مقبول**— اتجاه مساحة العمل الحالية وشكل المستودع النشط.---

## 🔍 Context

بدأت Omni Skills كمستودع**تثبيت أولاً**. كان ذلك كافيًا لتوزيع محتوى `SKILL.md`، لكنه لم يكن كافيًا لعرض الكتالوج للعملاء من خلال الأسطح الأصلية للبروتوكول.

كنا بحاجة إلى مؤسسة يمكنها دعم:

| المتطلبات | البروتوكول |
|:-----------|:---------|
| 🌐 واجهة برمجة تطبيقات كتالوج HTTP للقراءة فقط | راحة |
| 🔌 خادم MCP للقراءة فقط | بروتوكول السياق النموذجي |
| 🤖 سطح A2A مواجه للوكيل | وكيل إلى وكيل |
| 📂 تثبيت السيارات الجانبية المحلية | أدوات نظام الملفات |

**قيد بالغ الأهمية**: تجنب إعادة تحليل ملفات الريبو بشكل مستقل في كل خدمة جديدة.---

## ✅ Decision

اعتماد**monorepo الموجه نحو مساحة العمل**مع كتالوج أساسي مشترك وحزم خاصة بالبروتوكول:

| الحزمة | الغرض |
|:--------|:-------|
| 📦 `المهارات الشاملة` (الجذر) | مثبت CLI والبرامج النصية الريبو |
| 🧠 `@omni-skills/catalog-core` | التحميل المشترك والبحث والمقارنة والحزم وتثبيت الخطط |
| 🌐 `@omni-skills/server-api` | للقراءة فقط REST API |
| 🔌 `@omni-skills/server-mcp` | MCP مع وضع stdio/stream/sse + الوضع الجانبي المحلي |
| 🤖 `@omni-skills/server-a2a` | وقت تشغيل مهمة A2A باستخدام بطاقة الوكيل والاستقصاء وSSE وتكوين الدفع |### 📁 Shared Data Sources

يقرأ جوهر الكتالوج القطع الأثرية التي تم إنشاؤها من:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| النتيجة | التأثير |
|:--------|:------|
| 🔗**عقد البيانات المشتركة**| تستهلك API وMCP وA2A نفس العناصر |
| 🖥️**CLI الموحد**| يكشف ثنائي واحد عن التثبيت وواجهة المستخدم وواجهة برمجة التطبيقات (API) وMCP وA2A والتشخيصات والدخان |
| 🧩**بروتوكول العزل**| تتكرر الأسطح الجديدة دون اقتران الأجزاء الداخلية للتركيب |
| 🔌**العربة الجانبية المحلية**| وضع MCP قادر على الكتابة خلف القائمة المسموح بها، مع وصفات مدركة للعميل |
| 📦**وقت تشغيل الحزمة الواحدة**| تحمل حزمة npm المنشورة أسطح البروتوكول وأدوات التحقق والعناصر التي تم إنشاؤها معًا |---

## ⚠️ Negative Consequences

| المفاضلة | التخفيف |
|:---------|:----------|
| 🔄**تكرار البيانات الوصفية**| بناء بايثون + وقت تشغيل جافا سكريبت → الدمج في النهاية |
| 🏗️**تعقيد A2A**| توجد الآن دورة حياة متينة، لكن محولات التنسيق تضيف عمقًا تشغيليًا |
| 📦**محاذاة الكتالوج**| يتطلب التثبيت الانتقائي الأوامر والبيانات والمستندات لتبقى متزامنة |
| 📋**حزمة فجوات البيانات الوصفية**| يمكن أن تتجاوز الحزم المهارات المنشورة، مما يتطلب تحذيرات صريحة بشأن الأعضاء المفقودين |---

## ➡️ Follow-Up Items

| # | العمل | الحالة |
|:--|:-------|:------|
| 1️⃣ | مصادقة MCP عن بعد وتحديد المعدل | ✅ تم |
| 2️⃣ | تحسين كتابة تكوين MCP الخاص بالعميل | ✅ حاضر اليوم لحاويات Claude وCursor وCodex وGemini وKiro وVS Code وDev |
| 3️⃣ | قطع أثرية موقعة أو أرشيفات لكل مهارة | ✅ حاضر اليوم مع فرض CI على علامات الإصدار |
| 4️⃣ | وقت تشغيل مهمة A2A → تزامن دائم | ✅ حاضر اليوم مع استمرارية JSON/SQLite، والمنفذين الخارجيين، وتنسيق عقد الإيجار، وتنسيق Redis المتقدم الاختياري |
| 5️⃣ | قم بتوسيع الكتالوج المنشور لتغطية الحزمة على نطاق أوسع | ✅ حاضر اليوم لحزم البداية السبع المنسقة الحالية |