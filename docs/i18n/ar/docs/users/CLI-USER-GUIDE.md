# 🧭 Omni Skills CLI User Guide (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**سطح واجهة سطر الأوامر (CLI) العام الكامل الذي يتم توفيره بواسطة `omni-skills`.**

استخدم هذا الدليل عندما تريد:

| الهدف | منطقة القيادة |
|:-----|:------------|
| 📥 تثبيت المهارات أو الحزم | [تدفقات التثبيت](#3️⃣-تدفقات التثبيت) |
| 🔎 ابحث في الكتالوج | [إكتشاف الكتالوج](#4️⃣-إكتشاف-الكتالوج) |
| 🔌 تكوين عملاء MCP | [تكوين عميل MCP](#5️⃣-mcp-client-config) |
| 🖥️ ابدأ خدمات MCP أو API أو A2A | [خادم MCP](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 استخدم الغلاف الطرفي المرئي | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 تشغيل التشخيص أو الاختبار المبدئي | [التشخيص](#🔟-التشخيص-و-الاختبار المبدئي) |---

## 1️⃣ Install and Entry Modes

التثبيت باستخدام `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| السياق | ماذا يحدث |
|:--------|:-----------|
| 🖥️ TTY + بدون وسيطات | يفتح تدفق**التثبيت الموجه**|
| ⚙️ غير TTY + لا توجد وسائط | تثبيت غير تفاعلي على `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | العلامة التجارية**غلاف بصري للحبر**|
| 📝 `npx omni-skills ui --text` | قراءة الخط**النص الاحتياطي**واجهة المستخدم |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| الأمر | الوصف |
|:--------|:----------|
| "واجهة المستخدم" | 🎨محور المحطة المرئية |
| `ابحث عن [استعلام]` | 🔎 اكتشاف الكتالوج |
| `إعادة التصنيف` | 🏷️ إدارة التصنيف |
| `تثبيت [الأعلام]` | 📥 تثبيت المهارة/الحزمة |
| `التكوين-mcp` | 🔌 تكوين عميل MCP |
| `mcp <stdio\|stream\|sse>` | 🔌 أوضاع خادم MCP |
| "واجهة برمجة التطبيقات" | 🌐 واجهة برمجة تطبيقات الكتالوج |
| `a2a` | 🤖 وقت تشغيل A2A |
| `الدخان` | 🧪 إطلاق الاختبار المبدئي |
| `التحقق من النشر` | 📦 فحص نشر الحزمة |
| `دكتور` | 🩺 تشخيص البيئة |
| `مساعدة` | ❓ مرجع الأمر |---

## 3️⃣ Install Flows

### بداية سريعة

```bash
npx omni-skills
npx omni-skills install --guided
```

> يتيح لك التدفق الموجه اختيار:**العميل المستهدف**→**الحزمة أو المهارة**→**مسار مخصص**→**المعاينة قبل التنفيذ**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| علم | العميل |
|:-----|:-------|
| `--مضادة الجاذبية` | 🟣 مضاد الجاذبية *(افتراضي)* |
| `--كلود` | 🟢 كلود كود |
| `--المؤشر` | 🔵 المؤشر |
| `--المخطوطة` | 🔴 كوديكس CLI |
| `--الجوزاء` | 🟡 برج الجوزاء CLI |
| `--كيرو` | 🟠 كيرو |
| `--رمز مفتوح` | ⚪ الكود المفتوح |

> هدف التثبيت الافتراضي (غير تفاعلي): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| علم | الغرض |
|:-----|:--------|
| `--الفئة` | التصفية حسب فئة التصنيف |
| `--أداة` | التصفية حسب الأداة المدعومة |
| `--خطر` | التصفية حسب مستوى المخاطر |
| `--فرز` | فرز النتائج (على سبيل المثال، `الجودة`) |
| `--أمر` | ترتيب الترتيب |
| `--الحد الأدنى من الجودة` | الحد الأدنى من نقاط الجودة |
| `--دقيقة-أفضل-الممارسات` | الحد الأدنى من نقاط أفضل الممارسات |
| `--المستوى الأدنى` | الحد الأدنى لمستوى النضج |
| `--دقيقة الأمن` | الحد الأدنى من نقاط الأمان |
| `--حالة التحقق` | التصفية حسب حالة التحقق من الصحة |
| `--حالة الأمان` | التصفية حسب الحالة الأمنية |---

## 5️⃣ MCP Client Config

استخدم "config-mcp" لمعاينة تكوين MCP المدرك للعميل أو كتابته.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<التفاصيل>
<summary>🔌 <strong>سطح العميل الذي يمكنه التهيئة</strong></summary>

| العميل | الأهداف |
|:-------|:-------|
| كلود | الإعدادات وأهداف سطح المكتب |
| المؤشر | المستخدم ومساحة العمل |
| الدستور الغذائي | تكوين TOML |
| الجوزاء | المستخدم ومساحة العمل |
| مكافحة الجاذبية | تكوين المستخدم |
| الكود المفتوح | المستخدم ومساحة العمل |
| كلاين | هدف من الدرجة الأولى |
| جيثب مساعد الطيار CLI | المستخدم والريبو |
| كود الكيلو | المستخدم والمشروع ومساحة العمل |
| كيرو | المستخدم ومساحة العمل |
| زيد | مساحة العمل |
| كود VS | المستخدم ومساحة العمل وحاوية التطوير |
| متابعة | مساحة العمل YAML |
| جوني | المشروع والمستخدم |
| ركوب الأمواج | تكوين المستخدم |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**يضيف الملف الجانبي المحلي**: اكتشاف العميل، ومعاينة التثبيت، وتثبيت/إزالة التدفقات، وكتابة تكوين MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| الطريق | الغرض |
|:------|:--------|
| `الحصول على /healthz` | فحص الصحة |
| `الحصول على /openapi.json` | مواصفات OpenAPI |
| `الحصول على /v1/skills` | قائمة بجميع المهارات |
| `الحصول على /v1/search` | ابحث في الكتالوج |
| `الحصول على /v1/skills/:id/archives` | قائمة الأرشيف لمهارة |
| `الحصول على /v1/skills/:id/download/archive?format=zip` | تحميل أرشيف المهارات |
| `الحصول على /v1/skills/:id/download/archive/checksums` | تحميل المجاميع الاختبارية |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| ميزة | الحالة |
|:--------|:------|
| 🔎 الاكتشاف المدرك للمهمة | ✅ |
| 📋 تسليم خطة التثبيت | ✅ |
| 🔄 الاقتراع | ✅ |
| 📡 البث | ✅ |
| ❌ الإلغاء | ✅ |
| 🔔 تكوين إشعار الدفع | ✅ |
| 💾 الإصرار | الذاكرة وJSON وSQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### الميزات

| ميزة | الوصف |
|:--------|:----------|
| 🧭 التثبيت الموجه | اختر العميل أو المسار المخصص |
| 🔎 بحث + تثبيت | لا حاجة لحفظ العلم |
| 🔌 تكوين MCP | معاينة وكتابة التدفقات |
| 🖥️ إطلاق الخدمة | بدء التشغيل الموجه لـ MCP وAPI وA2A |
| 🕐 الأخيرة | عمليات التثبيت الأخيرة وعمليات إعادة إطلاق الخدمة |
| ⭐ المفضلة | المهارات والحزم المحفوظة |
| 💾 الإعدادات المسبقة | التثبيت المحدد والخدمة المسبقة |

>**مسار الحالة:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> يفحص: حالة الريبو، وحالة التثبيت المحلي، وتوافر وقت التشغيل، ومشكلات البيئة.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> عمليات التحقق من الصحة: ​​البناء والاختبارات وإخراج الحزمة وتمهيد الخدمة وتغطية الماسح الضوئي وحزمة الإصدار.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 شخصية | الأمر | الغرض |
|:-----------|:-------|:--------|
| 🆕 مستخدم جديد | `مهارات npx الشاملة` | التثبيت الموجه لأول مرة |
| 🔧 مشغل | `npx omni-skills config-mcp --list-targets` | تكوين MCP المحلي |
| 🔧 مشغل | `npx omni-skills mcp تيار --local` | ابدأ السيارة الجانبية المحلية |
| 📦 مُحافظ | `دخان المهارات المتعددة npx` | التحقق من صحة الإصدار |
| 🔍 مستخدم قوي | `مهارات npx omni تجد الأمان - جودة الفرز - الجودة الدنيا 95` | ابحث عن أفضل مهارة أولاً |---

## 📖 Related Documents

| وثيقة | ما يغطي |
|:----|:-------------|
| 🚀 [البدء](./GETTING-STARTED.md) | التثبيت والتحقق في أقل من دقيقتين |
| 📗 [دليل الاستخدام](./USAGE.md) | جميع أوامر وأنماط وأوضاع CLI |
| 📦 [الحزم](./BUNDLES.md) | مجموعات المهارات المنسقة |
| 🔧 [دليل تشغيل النظام](../operations/RUNBOOK.md) | المرجع التشغيلي |
| 🔌 [سيارة MCP الجانبية المحلية](../specs/LOCAL-MCP-SIDECAR.md) | أدوات نظام الملفات وكتابة التكوين |