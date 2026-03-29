# 📦 Curated Bundles (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**الحزم عبارة عن محددات مهارات منسقة موضوعة في أعلى الكتالوج.**جميع الحزم السبعة للمبتدئين مدعومة بالكامل بالمهارات المنشورة.---

## ⚙️ How Bundles Work

`--bundle` لا**لا**تثبت حزمة خاصة. هو:

1. 📋 يوسع تعريف الحزمة المحددة
2. ✅ تثبيت الأعضاء المتاحين حاليًا في الكتالوج فقط
3. ✅ يبني خطة تثبيت ملموسة من أعضاء الحزمة المنشورة```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

استنادًا إلى الكتالوج الذي تم إنشاؤه حاليًا (`dist/bundles.json`):

| حزمة | مخصص لـ | متاح | الأعضاء |
|:-------|:------------|:----------|:--------|
| 🧰**الأساسيات**| كل مطور |**4/4**| `العثور على المهارات` ✅ · `العصف الذهني` ✅ · `الهندسة المعمارية` ✅ · `التصحيح` ✅ |
| 🌐**مكدس كامل**| مطورو الويب والتطبيقات |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `تصميم قاعدة البيانات` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**التصميم**| أنظمة التصميم وإمكانية الوصول |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**الأمن**| مهندسين امن |**4/4**| `مدقق الأمان` ✅ · `ماسح الثغرات الأمنية` ✅ · `الاستجابة للحوادث` ✅ · ``نمذجة التهديدات`` ✅ |
| ⚙️**ديفوبس**| منصة والأشعة تحت الحمراء |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · ``terraform`` ✅ · ``قابلية الملاحظة`` ✅ · ``هندسة الإصدار`` ✅ |
| 🤖**مهندس الذكاء الاصطناعي**| تطوير LLM و ML |**5/5**| `rag-engineer` ✅ · ``prompt-engineer`` ✅ · ``أنماط الماجستير`` ✅ ·`تصميم التقييم` ✅ ·``هندسة السياق`` ✅ |
| 🔧**oss-maintener**| مشرفو OSS |**4/4**| `البحث عن المهارات` ✅ · `إنشاء العلاقات العامة` ✅ · `سجل التغيير` ✅ · `الوثائق` ✅ |

> ✅ = منشور وقابل للتثبيت---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- أنت تريد**نقطة بداية منسقة**للنطاق
- تريد تثبيت خطط تظل**منظمة ومحددة بالمجال**
- تريد طريقة سريعة لتثبيت مجموعة عمل كاملة للدور### 🎯 Use `--skill` instead when:

- أنت تريد**الحد الأدنى المضمون من التثبيت**
- أنت تعرف بالفعل**المهارة الدقيقة**التي تحتاجها
- أنت تريد**أصغر مساحة ممكنة**بدلاً من مجموعة عمل منسقة---

## 💡 Practical Recommendations

| الهدف | الأمر |
|:-----|:--------|
| 🎯 تثبيت مهارة منشورة محددة | `npx omni-skills --cursor --skill omni-figma` |
| 📦 حزمة البداية المدعومة بالكامل | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 حزمة أنظمة التصميم | `npx omni-skills --cursor --bundle design` |
| 🔧 حزمة سير عمل OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ حزمة سير العمل الأمني ​​| `npx omni-skills --cursor --bundle Security` |
| ⚙️ حزمة DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 حزمة مهندس الذكاء الاصطناعي | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 ابحث قبل أن تقرر | `npx omni-skills ابحث عن Figma` |
| 📋 شاهد كل توفر الباقة | `cat dist/bundles.json` |---

## 🔍 Inspecting Bundles

### 📁 View Generated Bundle Data

```bash
cat dist/bundles.json
```

### 🌐 Query via API

```bash
curl http://127.0.0.1:3333/v1/bundles
```

### 🔌 Query via MCP

استخدم أدوات `search_skills` أو `preview_install` مع معلمات الحزمة.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
