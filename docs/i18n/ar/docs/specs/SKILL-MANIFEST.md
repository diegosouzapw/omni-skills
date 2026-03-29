# 📋 Skill Manifest Specification (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**بيان JSON القابل للقراءة آليًا والذي تم إنشاؤه من كل `SKILL.md` أثناء مسار الإنشاء - عقد البيانات الفردي الذي تستهلكه جميع أسطح وقت التشغيل.**---

## 📊 Status

| ميزة | الدولة |
|:--------|:-----|
| ✅ تم إنشاؤها تلقائيًا من SKILL.md | تم التنفيذ |
| ✅ يتم استهلاكها بواسطة CLI وAPI وMCP وA2A | تم التنفيذ |
| ✅ أرشيفات بالمجاميع الاختبارية | تم التنفيذ |
| ✅ التصنيف الأمني ​​| تم التنفيذ |

>**هام**: البيان عبارة عن**قطعة أثرية**. مؤلف المساهمون `SKILL.md` - يستمد المسار بيان JSON تلقائيًا.---

## 🎯 Purpose

يوجد البيان بحيث تستهلك**جميع أسطح وقت التشغيل**نفس الشكل المعياري:

| السطح | كيف يستخدم البيانات |
|:--------|:--------------------|
| 🖥️**CLI**| بحث، تثبيت التخطيط، تشخيص الطبيب |
| 🌐**واجهة برمجة التطبيقات**| استجابات نقطة النهاية، والتصفية، وروابط التنزيل |
| 🔌**MCP**| استجابات الأداة، محتويات الموارد |
| 🤖**A2A**| حمولات الاكتشاف والتوصية |---

## 📁 Output Locations

| قطعة أثرية | المسار |
|:---------|:-----|
| 📊 البيانات الوصفية الجذرية | `metadata.json` |
| 📊 البيانات الوصفية لكل مهارة | `skills/<skill>/metadata.json` |
| 📋 فهرس المهارات | `skills_index.json` |
| 📚 الكتالوج المنشور | `dist/catalog.json` |
| 📌 بيان لكل مهارة | `dist/manifests/<skill>.json` |
| 📦 أرشيف مضغوط | `dist/archives/<skill>.zip` |
| 📦 أرشيف تاربول | `dist/archives/<skill>.tar.gz` |
| 🔒 بيان المجموع الاختباري | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| المجال | الوصف |
|:------|:-----------|
| `إصدار المخطط` | نسخة من مخطط البيان |
| "معرف" | معرف المهارة الثابتة من حقل "الاسم" |
| `سبيكة` | سبيكة الدليل ضمن `المهارات/` |
| `اسم العرض` | عنوان يمكن قراءته من العنوان الأول |### 📝 Metadata

| المجال | الوصف |
|:------|:-----------|
| `الوصف` | ملخص قصير من frontmatter |
| `الإصدار` | إصدار المهارة، مستقل عن إصدار حزمة npm |
| `الفئة` | الفئة الأساسية (تطبيع) |
| `الفئة_الخامة` | الفئة الأصلية من frontmatter |
| `التصنيف` | بيانات تعريف التصنيف الكاملة مع الرجوع المستنتج |
| `العلامات` | العلامات القابلة للبحث |
| "التعقيد" | `مبتدئ` · `متوسط` · `متقدم` `خبير` |
| `خطر` | `آمن` · `تحذير` · `هجومي` · `حرج` |
| `المصدر` | `الفريق الشامل` · `المجتمع` `الرسمي` |
| `المؤلف` | سلسلة الإسناد |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| المجال | الوصف |
|:------|:-----------|
| "نقطة الدخول" | المسار الأساسي `SKILL.md` |
| `المسارات.الجذر` | دليل المهارات داخل الريبو |
| `paths.manifest` | تم إنشاء مسار البيان في `dist/` |### 🖥️ Compatibility

| المجال | الوصف |
|:------|:-----------|
| `الأدوات` | معرفات الأداة من frontmatter |
| `تثبيت_الأهداف` | بيانات تعريف التثبيت لكل أداة |

يتضمن كل هدف تثبيت ما يلي: `الأداة`، و`النطاق`، و`المسار_الافتراضي`، و`علم_التثبيت`، و`سلوك_المثبت_الحالي`، و`الاستدعاء`.### 📦 Resources

| المجال | الوصف |
|:------|:-----------|
| `الموارد_الفرعية` | الأقسام الفرعية للمهارة ('المراجع'، 'الوكلاء'، 'الأصول') |
| `عدد_القطع الأثرية` | إجمالي عدد الملفات في حزمة المهارات |
| `references_count` | عدد المستندات المرجعية |
| `عدد_الوكلاء` | عدد تكوين الوكيل |
| `عدد_الأصول` | عدد ملفات الأصول |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| المجال | الوصف |
|:------|:-----------|
| "استراتيجية" | تثبيت الإستراتيجية (على سبيل المثال، "نسخ دليل المهارات") |
| `المثبت_الحالي` | سلوك التثبيت الذي يمكن قراءته بواسطة الإنسان |
| `وصفات` | وصفات التثبيت لكل عميل |### 📊 Classification

| القسم | الحقول |
|:--------|:------|
| 🎯 `النضج` | `مستوى_المهارة`، `تصنيف_مستوى_المهارة` |
| 📋 `أفضل_الممارسات` | `النتيجة` (0-100) |
| ⭐ `الجودة` | `النتيجة` (0-100) |
| 🛡️ `الأمن` | `النتيجة`، `الحالة` |
| ✅ `التحقق` | "الحالة" |### 📝 Content

الإشارات المشتقة: `body_length`، `content_length`، `body_lines`، `word_count`، بالإضافة إلى العلامات الهيكلية للأمثلة، وأقسام استكشاف الأخطاء وإصلاحها، وما إلى ذلك.### 📁 Artifacts

صفيف كل ملف يتم شحنه داخل دليل المهارات:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**أنواع العناصر**: `نقطة الإدخال` · `المرجع` `الوكيل` `الأصول` `الترخيص` `الدعم`### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| المجال | الوصف |
|:------|:-----------|
| `entrypoint_sha256` | تجزئة SKILL.md |
| `package_sha256` | ملخص حتمي من قائمة القطع الأثرية المطلوبة |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 إصدار حزمة المستودع وإصدار المهارة هما اهتمامان مختلفان. الحزمة حاليًا هي "0.1.3"، بينما تحمل المهارات الفردية نسخًا دلالية خاصة بها.---

## ⚠️ Compatibility Notes

| القاعدة | الأساس المنطقي |
|:-----|:---------|
| ✅ يجب أن يبقى قابلاً للاشتقاق من الريبو | لا يلزم تأليف البيان اليدوي |
| ✅ يمكن إضافة حقول اختيارية جديدة | التوافق إلى الأمام |
| ⚠️ الحقول الموجودة يجب أن تظل مستقرة | التوافق مع الإصدارات السابقة |
| 🚫 لا توجد بيانات مكتوبة بخط اليد | الاشتقاق الزمني مصدر الحقيقة |