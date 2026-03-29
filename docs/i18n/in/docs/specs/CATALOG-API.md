# 🌐 Catalog API Surface (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**कौशल खोज, खोज, तुलना, इंस्टॉल योजना और आर्टिफैक्ट डाउनलोड के लिए केवल पढ़ने योग्य HTTP एपीआई।**---

## 📊 Status

| फ़ीचर | राज्य |
|:--------|:------|
| ✅ कैटलॉग समापन बिंदु | क्रियान्वित |
| ✅ प्रामाणिक (वाहक + एपीआई कुंजी) | क्रियान्वित |
| ✅ एडमिन रनटाइम ऑथ | क्रियान्वित |
| ✅ दर सीमित करना | क्रियान्वित |
| ✅ ऑडिट लॉगिंग | क्रियान्वित |
| ✅ CORS और IP अनुमति सूचियाँ | क्रियान्वित |
| ✅ रखरखाव मोड | क्रियान्वित |
| ✅ डाउनलोड पुरालेख | क्रियान्वित |
| ✅ ओपनएपीआई स्पेक | क्रियान्वित |
| ⚠️ गवर्नेंस बैकएंड | पर्यावरण-संचालित, इन-प्रोसेस बेसलाइन; बाहरी गेटवे या आईडीपी अभी भी वैकल्पिक है |---

## 🎯 Purpose

एपीआई इसके लिए एक रजिस्ट्री-शैली की सतह प्रदान करता है:

- 📋 गुणवत्ता, सुरक्षा, श्रेणी, जोखिम और बहुत कुछ के आधार पर कौशल को सूचीबद्ध करना और फ़िल्टर करना
- 📌 व्यक्तिगत कौशल प्राप्त करना प्रकट होता है
- 🔎 पूर्ण-पाठ खोज और बहु-कौशल तुलना
- 📦 उपलब्धता के साथ बंडल सूची
- 📐 रीड-ओनली इंस्टाल प्लान जेनरेशन
- 📥 उत्पन्न कलाकृतियों, पुरालेखों और चेकसम मेनिफेस्टों को डाउनलोड करना

यही सूची और प्रकट सतह इसका आधार भी है:

- स्थानीय सीएलआई स्थापना योजना
- एमसीपी केवल पढ़ने योग्य खोज प्रतिक्रियाएँ
- A2A डिस्कवरी और इंस्टाल-प्लान हैंडऑफ़
- शीर्ष पर स्तरित बाहरी लेख के साथ संभावित निजी कैटलॉग---

## त्वरित प्रारंभ

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

**डिफ़ॉल्ट**: `127.0.0.1:3333`---

## 🔐 Security Controls

सभी सुरक्षा नियंत्रण पर्यावरण-संचालित और वैकल्पिक हैं:

| नियंत्रण | परिवर्तनीय | उदाहरण |
|:--------|:------|:--------|
| 🔑**वाहक प्राधिकरण**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `रिप्लेस-मी` |
| 🗝️**एपीआई कुंजी प्रमाणीकरण**| `OMNI_SKILLS_HTTP_API_KEYS` | `की-ए,की-बी` |
| 🛂**एडमिन ऑथ**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `एडमिन-सीक्रेट` |
| 🚦**दर सीमित**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**ऑडिट लॉगिंग**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**ऑडिट प्रारूप**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` या `text` |
| 📄**ऑडिट फ़ाइल**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS अनुमति सूची**| `OMNI_SKILLS_HTTP_ALOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**आईपी अनुमति सूची**| `OMNI_SKILLS_HTTP_ALOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**विश्वसनीय प्रॉक्सी**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | 'लूपबैक' |
| 🚧**रखरखाव मोड**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**बाद में पुनः प्रयास करें**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**व्यवहार:**
- 🟢 `/healthz`**हमेशा अप्रमाणित**रहता है
- 🔒 प्रमाणीकरण सक्षम होने पर अन्य सभी मार्गों को प्रमाणीकरण की आवश्यकता होती है
- 🛂 `/admin/runtime` को सक्षम होने पर एडमिन टोकन की आवश्यकता होती है
- 🚦 `X-RateLimit-*` प्रतिक्रिया हेडर के साथ दर सीमित करने की प्रक्रिया चल रही है
- 🧾 प्रत्येक प्रतिक्रिया में `X-Request-Id` होता है
- 🚧 रखरखाव मोड गैर-स्वास्थ्य, गैर-व्यवस्थापक मार्गों के लिए `503` लौटाता है### ✅ Current governance decision

वर्तमान परियोजना की दिशा**सार्वजनिक या निजी परिनियोजन के लिए समान कैटलॉग प्रारूप का पुन: उपयोग**करना और जरूरत पड़ने पर बाहरी रूप से लेयर ऑथ करना है।

इसका मतलब है:

- मेनिफेस्ट और एपीआई आकार साझा रहते हैं
- स्व-होस्टेड और स्थानीय परिनियोजन इन-प्रोसेस बेसलाइन पर बने रह सकते हैं
- अधिक उन्नत होस्टेड गवर्नेंस बाद में डेटा मॉडल को फोर्क किए बिना बाहरी गेटवे या एंटरप्राइज ऑथ लेयर पर जा सकता है### 🔐 Full hardened example:

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

| विधि | पथ | विवरण |
|:-------|:-----|:----|
| 'प्राप्त करें' | `/healthz` | स्वास्थ्य जांच (अप्रमाणित) |
| 'प्राप्त करें' | `/openapi.json` | डायनामिक ओपनएपीआई 3.1 विनिर्देश |
| 'प्राप्त करें' | `/एडमिन/रनटाइम` | शासन और रनटाइम स्नैपशॉट (सक्षम होने पर व्यवस्थापक प्राधिकरण) |### 📚 Catalog & Skills

| विधि | पथ | विवरण |
|:-------|:-----|:----|
| 'प्राप्त करें' | `/v1/कौशल` | फ़िल्टर के साथ कौशलों की सूची बनाएं |
| 'प्राप्त करें' | `/v1/skills/:id` | व्यक्तिगत कौशल प्रकट करें |
| 'प्राप्त करें' | `/v1/खोज` | पूर्ण-पाठ खोज |
| 'प्राप्त करें' | `/v1/तुलना?ids=id1,id2` | अनेक कौशलों की तुलना करें |
| 'प्राप्त करें' | `/v1/बंडल` | उपलब्धता के साथ बंडलों की सूची बनाएं |
| `पोस्ट` | `/v1/इंस्टॉल/प्लान` | एक इंस्टाल योजना बनाएं |### 🔎 List/Search Filters

| फ़िल्टर | उदाहरण |
|:-------|:-------|
| `श्रेणी` | `?श्रेणी=विकास` |
| `उपकरण` | `?टूल=कर्सर` |
| 'जोखिम' | `?जोखिम=सुरक्षित` |
| 'सॉर्ट' | `?सॉर्ट=गुणवत्ता\|सर्वोत्तम अभ्यास\|स्तर\|सुरक्षा\|नाम` |
| `आदेश` | `?order=asc\|desc` |
| `न्यूनतम_गुणवत्ता` | `?min_quality=80` |
| `न्यूनतम_सर्वोत्तम_अभ्यास` | `?min_best_practices=60` |
| `न्यूनतम_स्तर` | `?min_level=2` |
| `न्यूनतम_सुरक्षा` | `?min_security=90` |
| `सत्यापन_स्थिति` | `?validation_status=उत्तीर्ण` |
| `सुरक्षा_स्थिति` | `?security_status=उत्तीर्ण` |### 📦 Install Plan Body

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

| विधि | पथ | विवरण |
|:-------|:-----|:----|
| 'प्राप्त करें' | `/v1/कैटलॉग/डाउनलोड` | पूर्ण कैटलॉग डाउनलोड |
| 'प्राप्त करें' | `/v1/skills/:id/artfacts` | कौशल कलाकृतियों की सूची |
| 'प्राप्त करें' | `/v1/skills/:id/archives` | सूची कौशल पुरालेख |
| 'प्राप्त करें' | `/v1/skills/:id/downloads` | सभी उपलब्ध डाउनलोड लिंक |
| 'प्राप्त करें' | `/v1/skills/:id/download/manifest` | कौशल प्रकट JSON |
| 'प्राप्त करें' | `/v1/skills/:id/download/entrypoint` | कौशल SKILL.md |
| 'प्राप्त करें' | `/v1/skills/:id/download/artifact?path=<path>` | विशिष्ट कलाकृति |
| 'प्राप्त करें' | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | कौशल पुरालेख |
| 'प्राप्त करें' | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | पृथक हस्ताक्षर |
| 'प्राप्त करें' | `/v1/skills/:id/download/archive/checksums` | SHA-256 चेकसम |---

## 🔗 Link Enrichment

जब अनुरोधों को एपीआई के माध्यम से प्रबंधित किया जाता है, तो सर्वर स्वचालित रूप से मैनिफ़ेस्ट, आर्टिफैक्ट लिस्टिंग को समृद्ध करता है, और आने वाले अनुरोध मूल से प्राप्त पूर्ण यूआरएल के साथ योजनाएं स्थापित करता है। यह रनटाइम संवर्धन है, `dist/manifests/*.json` में बेक नहीं किया गया है।---

## 📋 Install Plan Notes

> ⚠️**इंस्टॉल योजनाएं पूर्वावलोकन हैं, रिमोट राइट्स नहीं।**

एपीआई कभी भी कॉलर की मशीन पर इंस्टॉल नहीं होता है। यह लौटाता है:
- 📌 चयनित कौशल मेटाडेटा
- ⚠️ लापता बंडल सदस्यों के लिए चेतावनी
- 🖥️ कंक्रीट सीएलआई स्थानीय स्तर पर चलाने के लिए आदेश देता है
- 🔗 अनुरोध मूल उपलब्ध होने पर सार्वजनिक डाउनलोड यूआरएल---

## 🔌 Relationship to MCP

कॉन्फ़िगर होने पर MCP सर्वर समान सार्वजनिक API URL का पुन: उपयोग करता है:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

यह एमसीपी को केवल स्थानीय रेपो पथों के बजाय ठोस मैनिफ़ेस्ट और आर्टिफैक्ट यूआरएल वापस करने के लिए पूर्वावलोकन स्थापित करने की अनुमति देता है।---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` होस्ट किए गए डायग्नोस्टिक्स के लिए उपयोगी गवर्नेंस स्नैपशॉट लौटाता है:

- सक्रिय प्रमाणीकरण विधियाँ
- व्यवस्थापक-लेखक स्थिति
- दर-सीमा विंडो और अधिकतम
- सीओआरएस अनुमति सूची
- आईपी अनुमति सूची
- रखरखाव मोड स्थिति
- ऑडिट गंतव्य और प्रारूप
- वर्तमान कैटलॉग योग
- पता लगाने की क्षमता के लिए अनुरोध आईडी गूंज रही है