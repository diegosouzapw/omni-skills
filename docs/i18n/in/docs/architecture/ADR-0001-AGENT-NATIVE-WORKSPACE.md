# 📐 ADR-0001: Agent-Native Workspace Foundation (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**मुख्य वास्तुशिल्प निर्णय जिसने मोनोरेपो कार्यक्षेत्र संरचना को आकार दिया।**---

## 📊 Status

✅**स्वीकृत**- वर्तमान कार्यक्षेत्र दिशा और सक्रिय भंडार आकार।---

## 🔍 Context

ओमनी स्किल्स की शुरुआत**इंस्टॉलर-प्रथम**रिपॉजिटरी के रूप में हुई। यह `SKILL.md` सामग्री को वितरित करने के लिए पर्याप्त था, लेकिन प्रोटोकॉल-मूल सतहों के माध्यम से एजेंटों को कैटलॉग को उजागर करने के लिए पर्याप्त नहीं था।

हमें एक ऐसी नींव की ज़रूरत थी जो समर्थन कर सके:

| आवश्यकता | प्रोटोकॉल |
|:---|:---|
| 🌐 केवल पढ़ने योग्य HTTP कैटलॉग एपीआई | विश्राम |
| 🔌 केवल पढ़ने योग्य एमसीपी सर्वर | मॉडल संदर्भ प्रोटोकॉल |
| 🤖 एजेंट-सामना करने वाली A2A सतह | एजेंट-से-एजेंट |
| 📂 स्थानीय साइडकार स्थापित करें | फ़ाइल सिस्टम उपकरण |

**महत्वपूर्ण बाधा**: प्रत्येक नई सेवा में रेपो फ़ाइलों को स्वतंत्र रूप से पुन: पार्स करने से बचें।---

## ✅ Decision

साझा कैटलॉग कोर और प्रोटोकॉल-विशिष्ट पैकेज के साथ**कार्यक्षेत्र-उन्मुख मोनोरेपो**को अपनाएं:

| पैकेज | उद्देश्य |
|:-------|:--------|
| 📦 `ओम्नी-कौशल` (रूट) | सीएलआई इंस्टॉलर और रेपो स्क्रिप्ट |
| 🧠 `@omni-skills/catalog-core` | साझा लोडिंग, खोज, तुलना, बंडल, इंस्टॉल योजनाएं |
| 🌐 `@omni-skills/server-api` | केवल पढ़ने योग्य REST API |
| 🔌 `@omni-skills/server-mcp` | stdio/stream/sse + स्थानीय साइडकार मोड के साथ MCP |
| 🤖 `@omni-skills/server-a2a` | एजेंट कार्ड, पोलिंग, एसएसई और पुश कॉन्फिगरेशन के साथ A2A कार्य रनटाइम |### 📁 Shared Data Sources

कैटलॉग कोर यहां से उत्पन्न कलाकृतियों को पढ़ता है:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| परिणाम | प्रभाव |
|:-------|:-------|
| 🔗**साझा डेटा अनुबंध**| API, MCP, और A2A समान कलाकृतियों का उपभोग करते हैं |
| 🖥️**एकीकृत सीएलआई**| एक बाइनरी इंस्टॉल, यूआई शेल, एपीआई, एमसीपी, ए2ए, डायग्नोस्टिक्स और स्मोक | को उजागर करती है
| 🧩**प्रोटोकॉल अलगाव**| नई सतहें इंस्टॉलर आंतरिक भागों से जुड़े बिना पुनरावृत्त होती हैं |
| 🔌**स्थानीय साइडकार**| क्लाइंट-जागरूक व्यंजनों के साथ, अनुमति सूची के पीछे लेखन-सक्षम एमसीपी मोड पर काम करना |
| 📦**एकल-पैकेज रनटाइम**| प्रकाशित एनपीएम पैकेज प्रोटोकॉल सतहों, सत्यापन टूलींग और उत्पन्न कलाकृतियों को एक साथ ले जाता है |---

## ⚠️ Negative Consequences

| ट्रेडऑफ़ | शमन |
|:------|:--------|
| 🔄**मेटाडेटा दोहराव**| पायथन बिल्ड + जावास्क्रिप्ट रनटाइम → अंततः समेकित |
| 🏗️**A2A जटिलता**| टिकाऊ जीवनचक्र अब मौजूद है, लेकिन समन्वय एडेप्टर परिचालन गहराई जोड़ते हैं |
| 📦**कैटलॉग संरेखण**| चयनात्मक इंस्टाल को सिंक्रोनाइज़ रहने के लिए कमांड, मेनिफेस्ट और डॉक्स की आवश्यकता होती है |
| 📋**बंडल मेटाडेटा अंतराल**| बंडल प्रकाशित कौशल से आगे निकल सकते हैं, जिसके लिए स्पष्ट लापता सदस्य चेतावनियों की आवश्यकता होती है |---

## ➡️ Follow-Up Items

| # | कार्रवाई | स्थिति |
|:--|:-------|:-------|
| 1️⃣ | रिमोट एमसीपी प्रमाणीकरण और दर सीमित करना | ✅ हो गया |
| 2️⃣ | बेहतर क्लाइंट-विशिष्ट MCP कॉन्फ़िगरेशन लेखन | ✅ क्लाउड, कर्सर, कोडेक्स, जेमिनी, किरो, वीएस कोड और देव कंटेनर्स के लिए आज ही प्रस्तुत करें |
| 3️⃣ | हस्ताक्षरित रिलीज़ कलाकृतियाँ या प्रति-कौशल पुरालेख | ✅ रिलीज टैग पर सीआई प्रवर्तन के साथ आज प्रस्तुत करें |
| 4️⃣ | A2A कार्य रनटाइम → टिकाऊ ऑर्केस्ट्रेशन | ✅ JSON/SQLite दृढ़ता, बाहरी निष्पादकों, ऑप्ट-इन लीज़ समन्वय और वैकल्पिक उन्नत रेडिस समन्वय के साथ आज प्रस्तुत करें |
| 5️⃣ | व्यापक बंडल कवरेज के लिए प्रकाशित कैटलॉग का विस्तार करें | ✅ वर्तमान सात क्यूरेटेड स्टार्टर बंडलों के लिए आज ही प्रस्तुत करें |