# 🧩 CLI Guided Installer Specification (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**العقد السلوكي لتجربة التثبيت الموجهة في Omni Skills CLI.**---

## 1. Scope

تحدد هذه المواصفات سلوك التثبيت الموجه الموجود أعلى الواجهة الخلفية للمثبت الحالي.

لا يحل محل:

- `tools/bin/install.js`
- تدفقات العلم الخبراء الحالي
- بيانات التثبيت الانتقائية

وهو يحدد:

- كيفية الدخول إلى الوضع الموجه
- كيفية اختيار الوجهات
- كيفية اختيار نطاق التثبيت
- ما هي معلومات المعاينة التي يجب عرضها
- كيفية عمل التأكيد والتنفيذ---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

يجب أن تدخل واجهة سطر الأوامر (CLI) في وضع التثبيت الموجه عندما:

- يقوم المستخدم بتشغيل "omni-skills" بدون وسائط في جهاز TTY
- يقوم المستخدم بتشغيل برنامج "omni-skills install" بدون أي محددات في جهاز TTY### 2.2 Forced Guided Entry

يجب أن تدعم واجهة سطر الأوامر (CLI) أيضًا الوضع الموجه الصريح من خلال خيار مخصص، مثل:

- "تثبيت المهارات الشاملة - الموجهة".

يجب أن يعمل هذا الوضع حتى عندما يتم توصيل الإدخال عبر الأنابيب وعدم توصيله بجهاز TTY، طالما أن الإدخال القياسي متاح.### 2.3 Non-Interactive Safety Rule

عند الاستدعاء بدون TTY وبدون الوضع الموجه يُطلب بشكل صريح:

- الحفاظ على السلوك الافتراضي الحالي
- لا تمنع انتظار المطالبات---

## 3. Destination Model

يجب أن يدعم التثبيت الموجه فئتين للوجهة:### 3.1 Known Client Target

كل هدف معروف يقرر ما يلي:

- تسمية يمكن قراءتها بواسطة الإنسان
- معرف الأداة الداخلية
- تثبيت العلم
- مسار الحل

الأهداف المعروفة المطلوبة:

- كلود كود
- المؤشر
- الجوزاء CLI
- كوديكس كلي
- كيرو
- مضاد الجاذبية
- الكود المفتوح### 3.2 Custom Path Target

يجب أن يكون وضع المسار المخصص:

- المطالبة بالمسار
- حل `~`
- التطبيع إلى المسار المطلق
- إظهار المسار الذي تم حله في المعاينة---

## 4. Install Scope Model

يجب أن يدعم التثبيت الموجه ما يلي:### 4.1 Full Library

يعادل التثبيت الحالي بدون `--skill` أو `--bundle`.### 4.2 Single Skill

يتيح للمستخدم تحديد مهارة واحدة منشورة.### 4.3 Single Bundle

يتيح للمستخدم تحديد حزمة واحدة منسقة وحل الأعضاء المنشورين.### 4.4 Search Then Install

يتيح للمستخدم:

- أدخل استعلام البحث
- فحص النتائج
- اختر مهارة أو حزمة
- تابع في معاينة التثبيت---

## 5. Preview Contract

قبل التنفيذ، يجب أن يعرض التثبيت الموجه ما يلي:

- تسمية الوجهة
- مسار الوجهة
- نطاق التثبيت
- المهارة أو الحزمة المحددة إن أمكن
- أمر CLI مكافئ

اختياري لكن موصى به:

- ملخص البيانات الوصفية للمهارة المختارة
- ملخص توفر الحزمة---

## 6. Execution Contract

بعد التأكيد:

- مندوبو التثبيت الموجهون إلى الواجهة الخلفية للمثبت الحالي
- لا إعادة تنفيذ الملف يكتب نفسه

يجب أن تتطابق معاينة الأمر ووسائط التثبيت المفوضة الفعلية تمامًا.---

## 7. Result Contract

بعد التنفيذ الناجح، يجب أن تظهر نتيجة التثبيت الموجه:

- مؤشر النجاح
- مسار الوجهة النهائية
- الأمر الذي تم تنفيذه
- الإجراء الموصى به التالي

مثال على الإجراءات التالية:

- استخدام المهارة الموجودة في العميل المحدد
- تشغيل "الطبيب".
- قم بتشغيل تيار mcp --local---

## 8. Compatibility Contract

تبقى الأمور التالية سارية دون تغيير:

- `المهارات الشاملة - المؤشر - المهارة الشاملة
- `` المهارات الشاملة - حزمة كاملة المكدس ''
- `المهارات الشاملة - المسار ./المهارات`
- `` Omni-skills find Figma --tool cursor --install --yes`

يضيف الوضع الموجه السلوك. ولا يزيل السلوك الموجود.