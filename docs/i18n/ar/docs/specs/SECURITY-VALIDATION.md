# 🛡️ Security Validation and Distribution (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**الفحص الأمني، وإنشاء الأرشيف، والتوقيع الاختياري، وحزمة التوزيع لكل مهارة منشورة.**---

## 📊 Status

| ميزة | الدولة |
|:--------|:-----|
| ✅ ماسح أمني ثابت | ممكّن دائمًا |
| ✅ تصنيف البيانات الوصفية لكل مهارة | تم التنفيذ |
| ✅ أرشيفات لكل مهارة (zip/tar.gz) | تم التنفيذ |
| ✅ بيانات المجموع الاختباري SHA-256 | تم التنفيذ |
| ✅ بوابة الماسح الضوئي CI على علامات الإصدار | تم التنفيذ |
| ✅ npm نشر سير العمل من tarball الذي تم التحقق منه | تم التنفيذ |
| ⚙️ مسح ClamAV | مُثري اختياري |
| ⚙️ البحث عن تجزئة VirusTotal | مُثري اختياري |
| ✅ توقيع منفصل | تم التنفيذ |
| ✅ التوقيع القسري CI | تم تنفيذها على علامات الإصدار |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

يقوم بمسح كل مهارة أثناء التحقق من الصحة:

| الهدف | ما الذي يتم فحصه |
|:-------|:-----------------|
| 📝 `SKIL.md` | محتوى المهارات الرئيسية |
| 📄 تخفيض السعر/الملفات النصية | المراجع والمستندات المجمعة |
| ⚙️ نصوص | مخطوطات الأتمتة المجمعة |

**العائلات الحاكمة:**

| القاعدة | أمثلة |
|:-----|:---------|
| 🎭**الحقن الفوري**| أنماط الترشيح، تجاوزات التعليمات |
| 💣**الأوامر الهدامة**| `rm -rf`، `format`، `del /s` |
| 🔑**تصعيد الامتيازات**| `sudo`، `chmod 777`، أنماط setuid |
| 📂**سبل مشبوهة**| `/etc/shadow`، `~/.ssh`، ملفات بيانات الاعتماد |
| ⚠️**بدايات محفوفة بالمخاطر**| `Shell=True`، `pickle.load`، `eval`، `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- يتطلب "clamscan" في "PATH".
- فحص الملفات المعبأة بحثًا عن البرامج الضارة المعروفة
- النتائج المسجلة في البيانات الوصفية للمهارة---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**البحث عن التجزئة فقط**— لا يتم تحميل أي ملف أثناء التحقق العادي
- تظل الملفات غير المعروفة محلية فقط
- يحافظ على البنية**الحتمية**والاستقلالية عن CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

بوابة الافراج الصارمة:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

تقرأ هذه الخطوة "skills/*/metadata.json" التي تم إنشاؤها وتفشل إذا لم تقم الماسحات الضوئية المطلوبة بتنفيذ الاكتشافات أو الإبلاغ عنها.---

## 📊 Security Output Shape

يتم إرسال بيانات الأمان في البيانات الوصفية لكل مهارة:```json
{
  "security": {
    "score": 100,
    "tier": "hardened",
    "status": "passed",
    "findings_count": 0,
    "findings": [],
    "signals": {
      "scanned_files": 3,
      "script_files": 0,
      "binary_like_files": 0
    },
    "scanners": {
      "static": { "enabled": true, "status": "completed" },
      "clamav": { "enabled": false, "status": "disabled" },
      "virustotal": { "enabled": false, "status": "disabled" }
    }
  }
}
```

> يتم نشر هذه الكتلة في البيانات وطرق عرض الكتالوج، مما يتيح لـ CLI وAPI وMCP**التصفية والتصنيف حسب درجة الأمان**.---

## 📦 Archive Outputs

كل مهارة منشورة تولد:

| ملف | تنسيق |
|:-----|:-------|
| `dist/archives/<skill>.zip` | أرشيف مضغوط |
| `dist/archives/<skill>.tar.gz` | أرشيف تاربول |
| `dist/archives/<skill>.checksums.txt` | بيان المجموع الاختباري SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

علامات إصدار GitHub Actions (`v*`) الآن:

1. تحقق من تطابق علامة git مع `package.json`
2. تثبيت وتحديث ClamAV
3. فك تشفير مفتاح توقيع الإصدار من أسرار GitHub
4. قم بتشغيل إصدار تشغيل npm: التحقق
5. قم بتعبئة كرة القطران باستخدام حزمة npm
6. قم بنشر هذا القطران بالضبط على npm مع مصدره
7. قم بإنشاء إصدار GitHub مع الملاحظات المخصصة وأصول التحقق المرفقة---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> إذا لم يتم توفير مفتاح عام، فسيشتق البناء واحدًا باستخدام `openssl` ويضعه في `dist/signing/`.

عند التمكين، يتم إصدار ملفات `.sig` بجانب الأرشيفات وبيان المجموع الاختباري.

في CI، تتطلب علامات الإصدار الآن تسجيل الدخول من خلال:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` أو `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- اختياري `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` أو `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| الحد | الحالة |
|:----------|:-------|
| إرسال تحميل VirusTotal | تم استبعاده عمدًا من التحقق الافتراضي |
| إنفاذ التوقيع | مفروض على علامات الإصدار؛ قد تستمر الإصدارات المحلية في العمل بدون توقيع |
| الحكم المستضاف | المصادقة المضمنة، ووقت تشغيل المسؤول، وقوائم CORS/IP المسموح بها، ووضع الصيانة، وتسجيل التدقيق موجودة؛ تظل البوابات الخارجية اختيارية |