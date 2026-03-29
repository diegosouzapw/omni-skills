# 📗 Usage Guide (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**كل ما تحتاجه لاستدعاء المهارات وتشغيل الخدمات وتشغيل وقت تشغيل Omni Skills.**

للحصول على سير العمل التشغيلي الكامل، راجع [🔧 System Runbook](../operations/RUNBOOK.md).
للحصول على خريطة أوامر المستخدم النهائي الكاملة، راجع [🧭 دليل مستخدم CLI](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| الحالة | التفاصيل |
|:-------|:-------|
| ✅**متاح الآن**| 32 مهارات منشورة عبر التصميم والهندسة المعمارية وتصحيح الأخطاء والمستندات وOSS والأمن وDevOps وهندسة الذكاء الاصطناعي والبيانات والأدوات وسير عمل التعلم الآلي |
| 📦**الحزم**| `essentials` و`full-stack` و`design` و`security` و`devops` و`ai-engineer` و`oss-maintainer` مدعومة بالكامل اليوم |
| 🔌**وصول MCP**| 7 عملاء قادرين على التثبيت، و16 عميلًا قادرون على التكوين، و33 هدف تكوين من الدرجة الأولى، و19 ملف تعريف تكوين |
| 🤖**متانة A2A**| الذاكرة، أو JSON، أو SQLite، المتانة المحلية، واستئناف إعادة التشغيل، ومنفذ العملية الاختياري، والتنسيق المؤجر للعمال المشتركين |---

## 🖥️ Invocation by Client

| العميل | كيفية الاستدعاء | مسار المهارات |
|:-------|:------------|:-----------|
| 🔵**كلود كود**| `>> /skill-name ساعدني...` | `~/.claude/skills/` |
| 🟡**الجوزاء CLI**| `استخدم @skill-name لـ...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `استخدم @skill-name لـ...` | `~/.codex/skills/` |
| 🟢**كيرو**| تحميل المهارات تلقائيًا عند الطلب | `~/.kiro/skills/` |
| 🟣**مضادة الجاذبية**| `استخدم @skill-name لـ...` | `~/.gemini/antigravity/skills/` |
| 🔵**المؤشر**| `@اسم المهارة` في الدردشة | `~/.cursor/skills/` |
| ⚪**الرمز المفتوح**| `تشغيل الكود المفتوح @skill-name` | `.opencode/skills/` |
| ⬛**مساعد الطيار**| لصق محتوى المهارة يدويًا | لا يوجد |

يستخدم العملاء مثل continue وjunie وwindsurf وzed وvs code وGitHub Copilot CLI وCline وKilo Code بشكل أساسي تدفق `config-mcp` بدلاً من دليل المهارات.---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 ملاحظات:**
> - في محطة تفاعلية، يفتح `npx omni-skills' الآن مسار التثبيت الموجه
> - يفتح `npx omni-skills ui` غلاف الحبر المرئي مع إجراءات التثبيت والاكتشاف وتشغيل الخدمة
> - يحافظ الغلاف المرئي على عمليات التثبيت الأخيرة وعمليات إطلاق الخدمة الحديثة والمفضلات والإعدادات المسبقة المسماة في `~/.omni-skills/state/ui-state.json`
> - خارج جهاز TTY، يظل التثبيت الكامل هو الإعداد الافتراضي في حالة عدم توفير محدد
> - `--skill` يثبت فقط المهارات المنشورة المحددة
> - `--bundle` يوسع الحزمة ويثبت الأعضاء المنشورين المعلنين في الحزمة المنسقة
> - يدعم "البحث" أكثر من 12 علامة تصفية: "الجودة"، و"أفضل_الممارسات"، و"مستوى_المهارة"، و"الأمان"، و"الفئة"، و"الأداة"، و"المخاطر"، والمزيد
> - `config-mcp` هو المسار الصحيح للمنتجات التي تدعم MCP والتي لا تحتوي على دليل مهارات من الدرجة الأولى---

## 🔌 Runtime Commands

تعد واجهة سطر الأوامر (CLI) أداة عمليات موحدة، وليست مجرد أداة تثبيت.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

يدعم الغلاف المرئي:

- التثبيت الموجه مع العميل المعروف أو اختيار المسار المخصص
- البحث ثم التثبيت بدون حفظ الأعلام
- معاينة تكوين عميل MCP الموجهة وكتابة التدفقات
- بدء التشغيل الموجه MCP وAPI وA2A
- عمليات التثبيت الأخيرة وإعادة إطلاق الخدمة
- حفظ التثبيت والخدمة المسبقة
- المهارات والحزم المفضلة### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
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
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | نصيحة |
|:--|:----|
| 1️⃣ | قم بالإشارة إلى المهارة بالاسم في الموجه الخاص بك |
| 2️⃣ | قم بتوفير المنتج أو الكود أو سياق التصميم الدقيق الذي يحتاجه الوكيل |
| 3️⃣ | تفضل `--skill` للحصول على الحد الأدنى من مساحة التثبيت |
| 4️⃣ | استخدم "doctor" و"smoke" قبل تصحيح أخطاء التغليف أو مشكلات وقت التشغيل |
| 5️⃣ | استخدم الحزم كعمليات تثبيت للمجال المنسق الآن بعد أن أصبحت جميع الحزم السبعة المبدئية مدعومة بالكامل |
| 6️⃣ | استخدم "find --install --yes" للاكتشاف + التثبيت في تدفق واحد |
| 7️⃣ | راجع [runbook](../operations/RUNBOOK.md) للمصادقة وحدود المعدل والتوقيع والتحقق env vars |