# 🚀 Getting Started (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**قم بتثبيت المهارات، وتحقق من الإعداد، واستدعِ مهارة الذكاء الاصطناعي الأولى لديك في أقل من دقيقتين.**---

## 📊 Current Catalog Status

| متري | القيمة |
|:-------|:-----|
| مهارات منشورة |**32**عبر 15 فئة نشطة بما في ذلك الهندسة المعمارية والتصميم والأمان وDevOps وهندسة الذكاء الاصطناعي والمزيد |
| الحزم المحددة |**7**(جميعها مدعومة بالكامل بالمهارات المنشورة) |
| عملاء قادرون على التثبيت |**7**(Claude Code، Cursor، Gemini CLI، Codex CLI، Kiro، Antigravity، OpenCode) |
| عملاء قادرين على تكوين MCP |**16**عبر 33 هدفًا لتكوين MCP من الدرجة الأولى |---

## 📦 Step 1 — Install

### بداية سريعة

```bash
npx omni-skills
```

في المحطة التفاعلية، يؤدي هذا الآن إلى فتح المثبت الموجه بدلاً من افتراض العميل بصمت.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

يؤدي هذا إلى فتح مركز المحطة الطرفية ذي العلامة التجارية للتثبيت، والاكتشاف، وMCP، وAPI، وبدء تشغيل A2A.### 🎯 Default Install (Antigravity Outside TTY)

خارج جهاز TTY، يظل الإعداد الافتراضي لبرنامج التثبيت no-arg هو `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ أصبحت الآن حزم البداية مدعومة بالكامل، بما في ذلك `devops` و`ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

تأكد من وصول المهارات إلى المكان المناسب:```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

أو استخدم التشخيصات المضمنة:```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

يمنح الوكلاء أدوات نظام الملفات لاكتشاف العملاء وتثبيت/إزالة المهارات وكتابة تكوينات MCP:```bash
npx omni-skills mcp stream --local
```

يمكنك أيضًا تكوين MCP للعملاء الذين لا يمثلون أهدافًا لتثبيت المهارات:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

يعرض كتالوج المهارات كواجهة برمجة تطبيقات HTTP للقراءة فقط:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

الاكتشاف من وكيل إلى وكيل، والتوصية، وتخطيط التثبيت، والاستقصاء، والتدفق:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

المهارة عبارة عن دليل تشغيل منظم (`SKILL.md`) يمنح وكيل الذكاء الاصطناعي:

| مكون | الغرض |
|:----------|:-------|
| 📋**المقدمة**| البيانات الوصفية المقروءة آليًا (الاسم، الفئة، العلامات، الأدوات، المخاطر) |
| 📝**الجسد**| تعليمات وخطوات وحواجز حماية وأمثلة خاصة بالمهمة |
| 📚**المراجع**| المستندات الداعمة التي يمكن للوكيل الرجوع إليها أثناء التنفيذ |
| 🎨**الأصول**| أيقونات أو صور أو موارد مجمعة أخرى |---

## ➡️ Next Steps

| وثيقة | ماذا ستتعلم |
|:----|:------------------|
| 🧭 [دليل مستخدم CLI](CLI-USER-GUIDE.md) | مرجع الأمر الكامل للتثبيت ووقت التشغيل والتكوين والتشخيص |
| 📗 [دليل الاستخدام](USAGE.md) | جميع أوامر CLI وأنماط المطالبة وأوضاع وقت التشغيل |
| 📦 [الحزم](BUNDLES.md) | مجموعات المهارات المنسقة وتوافرها |
| 📚 [الكتالوج](../CATALOG.md) | كتالوج تم إنشاؤه تلقائيًا للمهارات المنشورة |
| 📖 [محور التوثيق](../README.md) | خريطة التوثيق الكاملة |
| 🔧 [دليل تشغيل النظام](../operations/RUNBOOK.md) | المرجع التشغيلي |