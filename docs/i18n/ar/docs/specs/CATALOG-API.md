# 🌐 Catalog API Surface (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**واجهة برمجة تطبيقات HTTP للقراءة فقط لاكتشاف المهارات والبحث والمقارنة وتخطيط التثبيت وتنزيلات العناصر.**---

## 📊 Status

| ميزة | الدولة |
|:--------|:-----|
| ✅ نقاط نهاية الكتالوج | تم التنفيذ |
| ✅ المصادقة (الحامل + مفتاح API) | تم التنفيذ |
| ✅ مصادقة وقت تشغيل المسؤول | تم التنفيذ |
| ✅ تحديد المعدل | تم التنفيذ |
| ✅ تسجيل التدقيق | تم التنفيذ |
| ✅ قوائم CORS وIP المسموح بها | تم التنفيذ |
| ✅ وضع الصيانة | تم التنفيذ |
| ✅ تنزيلات أرشيفية | تم التنفيذ |
| ✅ مواصفات OpenAPI | تم التنفيذ |
| ⚠️ الواجهة الخلفية للحوكمة | خط أساس قيد التشغيل يحركه البيئة؛ البوابة الخارجية أو IdP لا تزال اختيارية |---

## 🎯 Purpose

توفر واجهة برمجة التطبيقات (API) سطحًا بنمط التسجيل لما يلي:

- 📋 مهارات الإدراج والتصفية حسب الجودة والأمان والفئة والمخاطر والمزيد
- 📌 جلب تجلى المهارة الفردية
- 🔎 البحث عن النص الكامل ومقارنة المهارات المتعددة
- 📦 قائمة الحزمة مع التوفر
- 📐 إنشاء خطة التثبيت للقراءة فقط
- 📥 تنزيل العناصر المولدة والمحفوظات وبيانات المجموع الاختباري

هذا الكتالوج نفسه وسطح البيان هو أيضًا الأساس لما يلي:

- تخطيط تثبيت CLI المحلي
- استجابات اكتشاف MCP للقراءة فقط
- اكتشاف A2A وتسليم خطة التثبيت
- كتالوجات خاصة محتملة مع مصادقة خارجية ذات طبقات في الأعلى---

## بداية سريعة

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

**الافتراضيات**: `127.0.0.1:3333`---

## 🔐 Security Controls

جميع عناصر التحكم الأمنية اختيارية وموجهة نحو البيئة:

| التحكم | متغير | مثال |
|:--------|:--------|:--------|
| 🔑**مصادقة الحامل**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `استبدلني` |
| 🗝️**مصادقة مفتاح واجهة برمجة التطبيقات**| `OMNI_SKILLS_HTTP_API_KEYS` | `مفتاح أ، مفتاح ب` |
| 🛂**مصادقة المسؤول**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | "سر المشرف" |
| 🚦**تحديد المعدل**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**تسجيل التدقيق**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**تنسيق التدقيق**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | "json" أو "نص" |
| 📄**ملف التدقيق**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**القائمة المسموح بها لـ CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**القائمة المسموح بها لعناوين IP**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**الوكيل الموثوق**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | "الاسترجاع" |
| 🚧**وضع الصيانة**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**إعادة المحاولة بعد**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**السلوك:**
- 🟢 يبقى `/healthz`**غير مصادق عليه دائمًا**
- 🔒 تتطلب جميع المسارات الأخرى مصادقة عند تمكين المصادقة
- 🛂 `/admin/runtime` يتطلب رمز المشرف عند التمكين
- 🚦 قيد المعدل قيد التنفيذ باستخدام رؤوس الاستجابة `X-RateLimit-*`
- 🧾 كل رد يحمل `X-Request-Id`
- 🚧 يقوم وضع الصيانة بإرجاع "503" للمسارات غير الصحية وغير الإدارية### ✅ Current governance decision

الاتجاه الحالي للمشروع هو**إعادة استخدام نفس تنسيق الكتالوج لعمليات النشر العامة أو الخاصة**ومصادقة الطبقة خارجيًا عند الحاجة.

وهذا يعني:

- يظل شكل البيان وواجهة برمجة التطبيقات مشتركين
- يمكن أن تظل عمليات النشر المحلية والمستضافة ذاتيًا على خط الأساس قيد التشغيل
- يمكن للحوكمة المستضافة الأكثر تقدمًا الانتقال إلى بوابة خارجية أو طبقة مصادقة المؤسسة لاحقًا دون تفرع نموذج البيانات### 🔐 Full hardened example:

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

| الطريقة | المسار | الوصف |
|:-------|:----|:------------|
| `احصل على` | `/ هيلثز` | فحص الصحة (غير مصادق عليه) |
| `احصل على` | `/openapi.json` | مواصفات OpenAPI الديناميكية 3.1 |
| `احصل على` | `/المشرف/وقت التشغيل` | لقطة للحوكمة ووقت التشغيل (مصادقة المسؤول عند التمكين) |### 📚 Catalog & Skills

| الطريقة | المسار | الوصف |
|:-------|:----|:------------|
| `احصل على` | `/v1/skills' | قائمة المهارات مع المرشحات |
| `احصل على` | `/v1/skills/:id` | احصل على بيان المهارات الفردية |
| `احصل على` | `/v1/بحث` | البحث عن النص الكامل |
| `احصل على` | `/v1/compare?ids=id1,id2` | قارن مهارات متعددة |
| `احصل على` | `/v1/حزمة` | قائمة الحزم مع توفرها |
| `نشر` | `/v1/install/plan` | إنشاء خطة التثبيت |### 🔎 List/Search Filters

| تصفية | مثال |
|:-------|:-------|
| `الفئة` | `?category=development` |
| `أداة` | `?tool=cursor` |
| `خطر` | `?risk=safe` |
| "فرز" | `?sort=quality\|أفضل الممارسات\|المستوى\|الأمان\|الاسم` |
| `الطلب` | `?order=asc\|تنازلي` |
| `الحد الأدنى_للجودة` | `?min_quality=80` |
| `الحد الأدنى_لأفضل_الممارسات` | `?min_best_practices=60` |
| `المستوى_الأدنى` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `حالة_التحقق' | `?validation_status=passed` |
| `الحالة_الأمانية` | `?security_status=passed` |### 📦 Install Plan Body

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

| الطريقة | المسار | الوصف |
|:-------|:----|:------------|
| `احصل على` | `/v1/catalog/download` | تحميل الكتالوج كامل |
| `احصل على` | `/v1/skills/:id/artifacts` | قائمة المصنوعات اليدوية للمهارة |
| `احصل على` | `/v1/skills/:id/archives` | قائمة أرشيف المهارات |
| `احصل على` | `/v1/skills/:id/downloads` | جميع روابط التحميل المتوفرة |
| `احصل على` | `/v1/skills/:id/download/manifest` | بيان المهارة JSON |
| `احصل على` | `/v1/skills/:id/download/entrypoint` | مهارة SKILL.md |
| `احصل على` | `/v1/skills/:id/download/artifact?path=<path>` | قطعة أثرية محددة |
| `احصل على` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | أرشيف المهارات |
| `احصل على` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | توقيع منفصل |
| `احصل على` | `/v1/skills/:id/download/archive/checksums` | SHA-256 المجموع الاختباري |---

## 🔗 Link Enrichment

عندما تتم معالجة الطلبات من خلال واجهة برمجة التطبيقات، يقوم الخادم**بإثراء البيانات تلقائيًا**وقوائم العناصر وتثبيت الخطط باستخدام عناوين URL المطلقة المستمدة من أصل الطلب الوارد. يعد هذا بمثابة إثراء لوقت التشغيل، وليس مخبأ في "dist/manifests/*.json".---

## 📋 Install Plan Notes

> ⚠️**خطط التثبيت عبارة عن معاينات وليست عمليات كتابة عن بعد.**

لا يتم تثبيت واجهة برمجة التطبيقات (API) مطلقًا على جهاز المتصل. يعود:
- 📌 البيانات الوصفية للمهارة المختارة
- ⚠️ تحذيرات لأعضاء الباقة المفقودين
- 🖥️ أوامر CLI ملموسة للتشغيل محليًا
- 🔗 عناوين URL للتنزيل العامة عندما يكون أصل الطلب متاحًا---

## 🔌 Relationship to MCP

يعيد خادم MCP استخدام نفس عناوين URL العامة لواجهة برمجة التطبيقات (API) عند تكوينها:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

يسمح هذا لمعاينات تثبيت MCP بإرجاع عناوين URL للبيان والعناصر المصطنعة بدلاً من مسارات الريبو المحلية فقط.---

## 🧭 Admin Runtime Snapshot

يعرض `GET /admin/runtime` لقطة إدارة مفيدة للتشخيصات المستضافة:

- طرق المصادقة النشطة
- حالة مصادقة المشرف
- نافذة الحد الأقصى للسعر والحد الأقصى
- القائمة المسموح بها لـ CORS
- القائمة المسموح بها لعنوان IP
- حالة وضع الصيانة
- وجهة التدقيق والشكل
- مجاميع الكتالوج الحالي
- صدى معرف الطلب من أجل التتبع