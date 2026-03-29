# 🛡️ Security Validation and Distribution (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**प्रत्येक प्रकाशित कौशल के लिए सुरक्षा स्कैनिंग, संग्रह निर्माण, वैकल्पिक हस्ताक्षर और वितरण पैकेजिंग।**---

## 📊 Status

| फ़ीचर | राज्य |
|:--------|:------|
| ✅ स्टेटिक सुरक्षा स्कैनर | हमेशा सक्षम |
| ✅ प्रति-कौशल मेटाडेटा वर्गीकरण | क्रियान्वित |
| ✅ प्रति-कौशल पुरालेख (zip/tar.gz) | क्रियान्वित |
| ✅ SHA-256 चेकसम मैनिफ़ेस्ट | क्रियान्वित |
| ✅ रिलीज टैग पर सीआई स्कैनर गेट | क्रियान्वित |
| ✅ एनपीएम सत्यापित टारबॉल से वर्कफ़्लो प्रकाशित करें | क्रियान्वित |
| ⚙️ ClamAV स्कैनिंग | वैकल्पिक संवर्धन |
| ⚙️ वायरसटोटल हैश लुकअप | वैकल्पिक संवर्धन |
| ✅ अलग हस्ताक्षर | क्रियान्वित |
| ✅ सीआई-प्रवर्तित हस्ताक्षर | रिलीज़ टैग पर कार्यान्वित |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

सत्यापन के दौरान प्रत्येक कौशल को स्कैन करता है:

| लक्ष्य | क्या स्कैन किया जाता है |
|:-------|:-----------------|
| 📝 `SKILL.md` | मुख्य कौशल सामग्री |
| 📄 मार्कडाउन/टेक्स्ट फ़ाइलें | पैकेज्ड सन्दर्भ और दस्तावेज़ |
| ⚙️ स्क्रिप्ट्स | पैकेज्ड ऑटोमेशन स्क्रिप्ट |

**नियम परिवार:**

| नियम | उदाहरण |
|:----|:------|
| 🎭**शीघ्र इंजेक्शन**| एक्सफिल्ट्रेशन पैटर्न, निर्देश ओवरराइड |
| 💣**विनाशकारी आदेश**| `आरएम-आरएफ`, `प्रारूप`, `डेल /एस` |
| 🔑**विशेषाधिकार वृद्धि**| `sudo`, `chmod 777`, सेतुइड पैटर्न |
| 📂**संदिग्ध रास्ते**| `/etc/shadow`, `~/.ssh`, क्रेडेंशियल फ़ाइलें |
| ⚠️**जोखिम भरे आदिम**| `शेल=ट्रू`, `पिकल.लोड`, `इवल`, `एक्सट्रैक्टऑल` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- `PATH` में `clamscan` की आवश्यकता है
- ज्ञात मैलवेयर के लिए पैक की गई फ़ाइलों को स्कैन करता है
- कौशल मेटाडेटा में दर्ज परिणाम---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**केवल हैश लुकअप**- सामान्य सत्यापन के दौरान कोई फ़ाइल अपलोड नहीं
- अज्ञात फ़ाइलें केवल स्थानीय रहती हैं
- बिल्ड को**नियतात्मक**और सीआई-स्वतंत्र रखता है### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

सख्त रिलीज गेट:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

यह चरण जनरेट किए गए `skills/*/metadata.json` को पढ़ता है और यदि आवश्यक स्कैनर निष्पादित नहीं करते हैं या पहचान की सूचना नहीं देते हैं तो विफल हो जाता है।---

## 📊 Security Output Shape

प्रत्येक कौशल के मेटाडेटा में सुरक्षा डेटा उत्सर्जित होता है:```json
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

> इस ब्लॉक को मैनिफ़ेस्ट और कैटलॉग दृश्यों में प्रचारित किया जाता है, जिससे सीएलआई, एपीआई और एमसीपी को**सुरक्षा स्कोर द्वारा फ़िल्टर और रैंक**करने में सक्षम बनाया जाता है।---

## 📦 Archive Outputs

प्रत्येक प्रकाशित कौशल उत्पन्न करता है:

| फ़ाइल | प्रारूप |
|:----|:-------|
| `dist/archives/<skill>.zip` | ज़िप संग्रह |
| `dist/archives/<skill>.tar.gz` | टारबॉल पुरालेख |
| `dist/archives/<skill>.checksums.txt` | SHA-256 चेकसम मेनिफेस्ट |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub क्रियाएँ अब टैग (`v*`) जारी करती हैं:

1. सत्यापित करें कि git टैग `package.json` से मेल खाता है
2. ClamAV को स्थापित और ताज़ा करें
3. GitHub रहस्यों से रिलीज़ साइनिंग कुंजी को डिकोड करें
4. `एनपीएम रन रिलीज:वेरिफाई` चलाएं
5. टारबॉल को `एनपीएम पैक` के साथ पैकेज करें
6. उस सटीक टारबॉल को उत्पत्ति के साथ एनपीएम पर प्रकाशित करें
7. कस्टम नोट्स और संलग्न सत्यापन परिसंपत्तियों के साथ एक GitHub रिलीज़ बनाएं---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> यदि कोई सार्वजनिक कुंजी प्रदान नहीं की गई है, तो बिल्ड `openssl` के साथ एक कुंजी प्राप्त करता है और इसे `dist/signing/` में रखता है।

सक्षम होने पर, `.sig` फ़ाइलें अभिलेखागार और चेकसम मेनिफेस्ट के बगल में उत्सर्जित होती हैं।

सीआई में, रिलीज़ टैग को अब हस्ताक्षर करने की आवश्यकता है:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` या `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- वैकल्पिक `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` या `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| सीमा | स्थिति |
|:--------|:-------|
| वायरसटोटल अपलोड सबमिशन | जानबूझकर डिफ़ॉल्ट सत्यापन से बाहर रखा गया |
| हस्ताक्षर प्रवर्तन | रिलीज़ टैग पर लागू; स्थानीय बिल्ड अभी भी अहस्ताक्षरित चल सकते हैं |
| होस्ट किया गया शासन | बिल्ट-इन ऑथ, एडमिन रनटाइम, सीओआरएस/आईपी अनुमति सूचियाँ, रखरखाव मोड और ऑडिट लॉगिंग मौजूद हैं; बाहरी प्रवेश द्वार वैकल्पिक बने रहेंगे |