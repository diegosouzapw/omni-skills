# 🔧 System Runbook (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**الدليل التشغيلي الكامل لبناء Omni Skills والتحقق منها وتقديمها وتأمينها واستكشاف الأخطاء وإصلاحها.**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| الأمر | ماذا يفعل |
|:--------|:------------|
| `التحقق من صحة تشغيل npm` | التحقق من صحة `SKILL.md`، وتجديد `metadata.json`، وحساب التصنيف/النضج/الجودة/الأمان |
| `تصنيف تشغيل npm: تقرير` | يظهر اقتراحات الانجراف فئة دون إعادة كتابة الملفات |
| `التحقق من تشغيل npm: الماسحات الضوئية` | يؤكد تغطية الماسح الضوئي المسجلة في بيانات تعريف المهارات التي تم إنشاؤها |
| `إصدار تشغيل npm: ملاحظات` | يُنشئ ملاحظات إصدار مخصصة من البيانات التعريفية والحزم وسجل git |
| `بناء تشغيل npm` | يعيد إنشاء الكتالوج/البيانات/المحفوظات/المجاميع الاختبارية، ويتحقق من تغطية الماسح الضوئي والمحفوظات، ويعيد بناء `docs/CATALOG.md` |
| `اختبار npm` | مجموعة دخان كاملة عبر تدفقات CLI وAPI وMCP والعربة الجانبية والأرشيف |---

## 🖥️ Visual Shell

يتضمن CLI المنشور الآن غلاف عامل قائم على الحبر:```bash
npx omni-skills ui
```

القدرات الحالية:

- التثبيت الموجه للعملاء المعروفين والمسارات المخصصة
- تدفق البحث ثم التثبيت
- معالج إطلاق MCP
- معالج إطلاق API
- معالج إطلاق A2A
- عمليات التثبيت الأخيرة وإعادة إطلاق الخدمة
- التثبيت المسبق والخدمة المحددة

مسار الولاية المحلية:```text
~/.omni-skills/state/ui-state.json
```

احتياطي:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

يتحقق الماسح الضوئي الثابت من جميع المهارات تلقائيًا:

| عائلة القاعدة | أمثلة |
|:-----------|:---------|
| 🎭 الحقن الفوري | أنماط الترشيح، تجاوزات التعليمات |
| 💣أوامر مدمرة | `rm -rf`، `تنسيق`، `mkfs` |
| 🔑 دروب مشبوهة | `/etc/shadow`، `~/.ssh`، ملفات بيانات الاعتماد |
| ⚠️ بدائيات محفوفة بالمخاطر | `Shell=True`، `pickle.load`، `eval`، `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> يتطلب "clamscan" في "PATH".### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> البحث عن التجزئة فقط — لا يتم تحميل الملفات غير المعروفة**بشكل افتراضي.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

بوابة الافراج الصارمة:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

يتم إنتاج الأرشيفات تلقائيًا عن طريق `npm run build`:

| الإخراج | المسار |
|:-------|:----|
| 📦 الرمز البريدي | `dist/archives/<skill>.zip` |
| 📦 طربول | `dist/archives/<skill>.tar.gz` |
| 🔒 المجاميع الاختبارية | `dist/archives/<skill>.checksums.txt` |

يتم تنفيذ `dist/` عمدًا في هذا المستودع. يعد الكتالوج والبيانات والحزم والأرشيفات التي تم إنشاؤها مدخلات وقت التشغيل لتدفقات تثبيت واجهة سطر الأوامر (CLI) وأسطح تنزيل واجهة برمجة التطبيقات (API) ومعاينات MCP وتسليم مهام A2A واختبارات الدخان والتحقق من الإصدار.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

تجاوز المفتاح العام الاختياري:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> إذا لم يتم توفير مفتاح عام، فسيشتق البناء واحدًا عبر `openssl` إلى `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

سياسة الإصدار:

- زيادات التصحيح حتى `.10`
- بعد `.10`، يصبح الإصدار التالي ثانويًا ويعيد تعيين التصحيح إلى `0`

أمثلة:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| السيناريو | الأمر |
|:---------|:-------|
| 📥 التثبيت الافتراضي (مضاد الجاذبية) | `مهارات npx الشاملة` |
| 🎯 مهارة محددة + عميل | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 الاكتشاف → تثبيت | `npx omni-skills find Figma --tool cursor --install --yes` |
| 📦 تثبيت الحزمة | `npx omni-skills --cursor --bundle Essentials' |
| 🩺 التحقق من التثبيت | `طبيب المهارات الشاملة npx` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| تصفية | علم | مثال |
|:-------|:----|:--------|
| 📂 التصنيف | `--الفئة` | `--تطوير الفئة` |
| 🖥️ الأداة | `--أداة` | `--مؤشر الأداة` |
| ⚠️ خطر | `--خطر` | `--آمن المخاطر` |
| 📊 فرز | `--فرز` | `--نوعية الفرز\|أفضل الممارسات\|المستوى\|الأمان\|الاسم` |
| 🔄 اطلب | `--أمر` | `--ترتيب تصاعدي\|تنازلي` |
| ⭐ الحد الأدنى من الجودة | `--الحد الأدنى من الجودة` | `--الحد الأدنى للجودة 80` |
| 📋 الحد الأدنى للضغط | `--دقيقة-أفضل-الممارسات` | `--دقيقة-أفضل-الممارسات 60` |
| 🎯 المستوى الأدنى | `--المستوى الأدنى` | `--المستوى الأدنى 2` |
| 🛡️ دقيقة للأمن | `--دقيقة الأمن` | `--دقيقة الأمن 90` |
| ✅ التحقق | `--حالة التحقق` | `--تم اجتياز حالة التحقق` |
| 🛡️ الأمن | `--حالة الأمان` | `--تم تجاوز حالة الأمان` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| الطريقة | نقطة النهاية | الغرض |
|:-------|:--------|:--------|
| `احصل على` | `/ هيلثز` | فحص الصحة |
| `احصل على` | `/openapi.json` | مواصفات OpenAPI 3.1 |
| `احصل على` | `/v1/skills' | قائمة مع المرشحات |
| `احصل على` | `/v1/بحث` | البحث عن النص الكامل |
| `احصل على` | `/v1/skills/:id/archives` | قائمة الأرشيف |
| `احصل على` | `/v1/skills/:id/download/archive?format=zip` | تحميل الارشيف |
| `احصل على` | `/v1/skills/:id/download/archive/checksums` | بيان المجموع الاختباري |### 🔐 Hosted API Hardening

| ميزة | الأمر |
|:--------|:-------|
| 🔑 مصادقة الحامل | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ مصادقة مفتاح API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 مصادقة وقت تشغيل المسؤول | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 تحديد المعدل | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx واجهة برمجة تطبيقات المهارات الشاملة` |
| 📝 تسجيل التدقيق | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |
| 🌍 القائمة المسموح بها لـ CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 قائمة IP المسموح بها | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 وضع الصيانة | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁 وكيل موثوق | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 يظل `/healthz` مفتوحًا حسب التصميم؛ تتطلب مسارات الكتالوج مصادقة عند تمكينها. يتطلب `GET /admin/runtime` رمز المشرف المميز عند تكوينه ويعيد لقطة الإدارة المباشرة.---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

يمكن الآن للعربة الجانبية معاينة تكوين MCP أو كتابته من أجل:

- كلود إعدادات المستخدم والمشروع
- تكوين كلود سطح المكتب
- تكوين المستخدم كلاين
- تكوين مستخدم GitHub Copilot CLI والمستودع
- تكوين مستخدم المؤشر ومساحة العمل
- تكوين الدستور الغذائي TOML
- إعدادات المستخدم والمشروع الجوزاء
- مستخدم Kilo CLI وتكوين المشروع
- تكوين مساحة العمل كيلو
- إعدادات المستخدم والمشروع كيرو
- تكوين مستخدم OpenCode ومساحة العمل
- متابعة تكوين مساحة العمل YAML
- تكوين مستخدم ركوب الأمواج
- تكوين مساحة العمل Zed
- مساحة العمل `.mcp.json`
- مساحة عمل VS Code وتكوين المستخدم
- تكوين حاوية التطوير

يقوم `configure_client_mcp` أيضًا بإرجاع وصفات لكل عميل حتى يحصل المشغلون على CLI المكافئة أو خطوات الإعداد اليدوي مع المعاينة.### 🧾 MCP Config Preview and Write Flow

استخدم واجهة سطر الأوامر (CLI) الموحدة عندما تريد إنشاء التكوين دون استدعاء أداة MCP مباشرة:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

يعرض الغلاف المرئي نفس سير العمل من خلال:

- واجهة مستخدم npx omni-skills
- `الخدمات`
- "تكوين عميل MCP".

يبقى الأمر في وضع المعاينة ما لم يتم تمرير `--write`.### 🔐 Hosted MCP Hardening

نفس env vars مثل واجهة برمجة التطبيقات:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**المسارات المحمية**: `POST /mcp` · `GET /sse` `POST /messages` `GET /admin/runtime`

> 🟢 يظل `/healthz` مفتوحًا.---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

يظل المسار المحلي الافتراضي بسيطًا أولاً:

- يمكن تشغيل استمرارية `json` أو `sqlite` مع تعطيل استقصاء قائمة الانتظار
- قم بتعيين `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` فقط عندما تريد المطالبة بعمال متعددين وتجاوز فشل عقد الإيجار
- احتفظ بتنسيق Redis كخيار مستضاف متقدم، وليس كخيار أساسي### 🧱 Multi-Worker Lease Setup

قم بتشغيل أكثر من عقدة A2A واحدة على نفس مخزن SQLite للحصول على تجاوز الفشل القائم على الإيجار:```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

إذا مات عامل أثناء "عمل" المهمة، فيمكن لعامل آخر استعادتها بعد انتهاء عقد الإيجار ومواصلة التنفيذ.### 🟥 Redis Coordination

بالنسبة لعمليات النشر المستضافة أو متعددة العقد التي لا تريد ربط تنسيق قائمة الانتظار بمخزن SQLite المشترك، قم بتبديل المنسق إلى Redis:```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

في هذا الوضع:

- لا يزال الثبات موجودًا في JSON أو SQLite
- المطالبة بالمهمة ونقل ملكية الإيجار إلى Redis
- يمكن لعقد A2A المتعددة مشاركة قائمة الانتظار دون الاعتماد على التنسيق على مستوى صف SQLite### 📡 Endpoints

| الطريقة | المسار | الغرض |
|:-------|:----|:--------|
| `احصل على` | `/ هيلثز` | فحص الصحة |
| `احصل على` | `/.well-known/agent.json` | بطاقة الوكيل (اكتشاف A2A) |
| `نشر` | `/a2a` | نقطة نهاية JSON-RPC للمهام والبث |### 🧭 Supported JSON-RPC Methods

| الطريقة | الغرض |
|:-------|:-------|
| `رسالة/إرسال` | ابدأ مهمة أو تابعها |
| `الرسالة/الدفق` | ابدأ مهمة وقم بدفق تحديثات SSE |
| `المهام/الحصول على` | استطلاع لقطة مهمة |
| `المهام/الإلغاء` | إلغاء مهمة نشطة |
| `المهام/إعادة الاشتراك` | استئناف تحديثات SSE لمهمة موجودة |
| `المهام/pushNotificationConfig/set` | تسجيل خطاف دفع على الويب |
| `المهام/pushNotificationConfig/get` | قراءة تكوين الدفع |
| `المهام/pushNotificationConfig/list` | قائمة تكوينات الدفع لمهمة |
| `المهام/pushNotificationConfig/delete` | إزالة تكوين الدفع |### 📡 Task Lifecycle

يدعم وقت التشغيل الحالي حالات المهام التالية:

- "مقدم".
- "العمل".
- "الإدخال مطلوب".
- "مكتمل".
- "ملغاة".
- "فشل".

يتم الاحتفاظ بالمهام إما في ملف JSON أو في متجر SQLite وإعادة تحميلها عند إعادة التشغيل. تظل المهام المكتملة والمتقطعة متاحة. يتم استرداد المهام التي كانت لا تزال "مرسلة" أو "تعمل" أثناء إيقاف التشغيل باستخدام بيانات تعريف إعادة التشغيل الصريحة ويتم استئنافها تلقائيًا بشكل افتراضي.### 🧪 Example: Start a Task

```bash
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

يحتوي المستودع الآن على سيري عمل:

| سير العمل | الزناد | الغرض |
|:---------|:-------|:--------|
| `التحقق من صحة.yml` | ادفع/PR إلى "الرئيسي" | بناء واختبار وتأكيد التزام القطع الأثرية التي تم إنشاؤها |
| `release.yml` | قم بالضغط على العلامة `v*` أو الإرسال اليدوي | قم بتشغيل الماسحات الضوئية المخصصة للإصدار، والتحقق من علامة الإصدار، وتوقيع العناصر، وتعبئة كرة القطران، والنشر على npm، وإنشاء إصدار GitHub |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| سر | يستخدم بواسطة | الغرض |
|:-------|:-------|:--------|
| `VT_API_KEY` أو `VIRUSTOTAL` | `release.yml` | تتطلب عمليات البحث عن تجزئة VirusTotal في نسخ الإصدار |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` أو `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | مطلوب مفتاح خاص لتسجيل الأرشيف المنفصل في CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` أو `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | تجاوز المفتاح العام الاختياري؛ مشتق بطريقة أخرى من المفتاح الخاص |
| `NPM_TOKEN` | وظيفة `نشر npm` | قم بالمصادقة على `نشر npm` لإصدارات العلامات |### 🦠 Release Scanner Policy

`release.yml` يضبط أو يجهز:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ Secrets.VT_API_KEY || Secrets.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` من وحدة التخزين المؤقتة للمشغل

وهذا يعني أن كل إصدار قائم على العلامات يجب أن:

- تثبيت وتحديث ClamAV على العداء
- إعادة إنشاء البيانات الوصفية مع تمكين ClamAV
- إعادة إنشاء البيانات الوصفية مع تمكين VirusTotal
- فك تشفير المواد الرئيسية لتوقيع CI في وحدة تخزين مؤقتة للمشغل
- قم بتمرير التحقق من تشغيل npm:الماسحات الضوئية: صارمة
- قم بتمرير التحقق من تشغيل npm: الأرشيف: صارم
- اجتياز الاختبارات والتحقق من الحزمة قبل نشر npm
- إنشاء ملاحظات إصدار مخصصة من بيانات تعريف الكتالوج وسجل git
- قم بإنشاء إصدار GitHub مع أصول الإصدار المرفقة بعد النشر---

## 1️⃣1️⃣ Environment Variables Reference

| متغير | الغرض | الافتراضي |
|:---------|:-------|:--------|
| `OMNI_SKILLS_ROOT` | تجاوز مسار جذر الكتالوج | تم الكشف عنه تلقائيًا |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | مسارات الكتابة الإضافية المسموح بها | جذور العميل المعروفة |
| `OMNI_SKILLS_MCP_MODE` | اضبط على "محلي" للسيارة الجانبية | عن بعد |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | علامة بديل للوضع المحلي | `0` |
| `OMNI_SKILLS_API_BASE_URL` | عنوان URL لواجهة برمجة التطبيقات العامة لـ MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | عنوان URL الأساسي العام | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | رمز مصادقة الحامل | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | مفاتيح API مفصولة بفواصل | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | رمز مصادقة وقت تشغيل المشرف | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | الحد الأقصى للطلبات لكل نافذة | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | نافذة حد المعدل (مللي ثانية) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | تمكين تسجيل التدقيق | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | إخراج تدقيق "json" أو "نص" | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | مسار ملف سجل التدقيق الاختياري | ستدوت |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | القائمة المسموح بها لأصل CORS مفصولة بفواصل | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | القائمة المسموح بها لعنوان IP أو CIDR مفصولة بفواصل | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | إعداد وكيل الثقة السريعة | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | تمكين استجابات الصيانة | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | الصيانة `إعادة المحاولة بعد` ثانية | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | محاكاة تأخير المهمة غير المتزامنة | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | مخزن المهام "json" أو "sqlite" أو "الذاكرة" | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | ملف مخزن مهام A2A مخصص | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | تمكين استقصاء قائمة الانتظار المشتركة للعاملين المستأجرين | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | منسق "متجر" أو "sqlite" أو "محلي" أو "redis" | `متجر` |
| `OMNI_SKILLS_A2A_REDIS_URL` | عنوان URL لـ Redis للتنسيق الخارجي | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | بادئة مفتاح Redis لبيانات تعريف قائمة الانتظار | `المهارات الشاملة:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | الفاصل الزمني لاستقصاء قائمة الانتظار للعاملين المستأجرين | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | مدة الإيجار قبل أن يتمكن عامل آخر من استعادة مهمة | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | معرف عامل مستقر لملكية الإيجار والتشخيص | اسم المضيف + PID + لاحقة عشوائية |
| `OMNI_SKILLS_A2A_EXECUTOR` | منفذ المهمة "المضمنة" أو "العملية" | `مضمنة` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | تجاوز أمر العامل الخارجي | العقدة الثنائية |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | مجموعة JSON من وسيطات العامل الخارجي | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | استئناف المهام المقدمة/العمل المستردة عند التمهيد | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | السماح بخطافات الويب غير HTTPS خارج المضيف المحلي | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | تمكين فحص ClamAV | `0` |
| `VT_API_KEY` | مفتاح واجهة برمجة تطبيقات VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | المفتاح الخاص للتوقيع | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | تجاوز المفتاح العام | مشتقة تلقائيًا |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. أعد البناء باستخدام npm run build
2. أعد تشغيل npm run check: archives
3. إذا تم تمكين التوقيع، تأكد من توفر المفتاح العام و"openssl".### 🦠 Release Workflow Fails on Scanner Coverage

- تأكد من وجود `VT_API_KEY` في أسرار المستودع
- تأكيد نجاح `freshclam` على العداء
- إعادة البناء محليًا باستخدام `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- أعد تشغيل npm run check:scanners:strict`### 📦 npm Publish Fails in CI

- تأكد من وجود `NPM_TOKEN` في أسرار المستودع
- تأكد من أن علامة Git تطابق إصدار "package.json" تمامًا
- تأكد من وجود كرة القطران التي تم تحميلها بواسطة "التحقق من الإصدار" في عناصر سير العمل### ✍️ Release Signing Fails in CI

- تأكد من وجود `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` أو `OMNI_SKILLS_SIGN_PRIVATE_KEY` في أسرار المستودع
- إذا قمت بتوفير سر المفتاح العام، فتأكد من مطابقته للمفتاح الخاص
- تأكد من توفر `openssl` وأن المفتاح الخاص بتنسيق PEM
- إعادة البناء محليًا باستخدام `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- أعد تشغيل npm run check:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- تحقق من `OMNI_SKILLS_HTTP_BEARER_TOKEN` أو `OMNI_SKILLS_HTTP_API_KEYS`
- قم بتضمين رأس "التفويض: حامل <الرمز المميز>" أو "مفتاح x-api"### 🚦 API/MCP Returns `429 Too Many Requests`

- زيادة `OMNI_SKILLS_RATE_LIMIT_MAX`
- قم بتوسيع `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- تقليل حركة المرور المتلاحقة من العملاء أو المجسات### 🛂 API/MCP Admin Runtime Returns `401`

- تحقق من `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- أرسل `x-admin-token: <token>` أو `Authorization: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- تعطيل `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- استخدم `/healthz` لتحقيقات الحيوية أثناء الصيانة
- استخدم `/admin/runtime` مع الرمز المميز للمسؤول لتشخيصات المشغل### 🌍 Browser Requests Fail CORS Validation

- تحقق من `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- قم بتضمين المخطط والمضيف الدقيقين، على سبيل المثال `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- التحقق من `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- تحقق من `OMNI_SKILLS_A2A_REDIS_URL`
- التحقق من اتصال Redis من كل عقدة
- افحص `/healthz` بحثًا عن لقطة `التنسيق'### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
