# 📋 Skill Manifest Specification (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**बिल्ड पाइपलाइन के दौरान प्रत्येक `SKILL.md` से उत्पन्न मशीन-पठनीय JSON मेनिफेस्ट - सभी रनटाइम सतहों द्वारा उपभोग किया जाने वाला एकल डेटा अनुबंध।**---

## 📊 Status

| फ़ीचर | राज्य |
|:--------|:------|
| ✅ SKILL.md से स्वतः उत्पन्न | क्रियान्वित |
| ✅ सीएलआई, एपीआई, एमसीपी, ए2ए द्वारा उपभोग | क्रियान्वित |
| ✅ चेकसम के साथ पुरालेख | क्रियान्वित |
| ✅ सुरक्षा वर्गीकरण | क्रियान्वित |

>**महत्वपूर्ण**: मेनिफेस्ट एक**बिल्ड आर्टिफैक्ट**है। योगदानकर्ता लेखक `SKILL.md` - पाइपलाइन स्वचालित रूप से JSON मेनिफेस्ट प्राप्त करती है।---

## 🎯 Purpose

मेनिफेस्ट मौजूद है ताकि**सभी रनटाइम सतहें**समान सामान्यीकृत आकार का उपभोग करें:

| सतह | इसका उपयोग कैसे प्रकट होता है |
|:-------|:----------------------|
| 🖥️**सीएलआई**| खोजें, योजना स्थापित करें, डॉक्टर निदान |
| 🌐**एपीआई**| समापन बिंदु प्रतिक्रियाएँ, फ़िल्टरिंग, डाउनलोड लिंक |
| 🔌**एमसीपी**| उपकरण प्रतिक्रियाएँ, संसाधन सामग्री |
| 🤖**A2A**| खोज और अनुशंसा पेलोड |---

## 📁 Output Locations

| कलाकृति | पथ |
|:------|:-----|
| 📊 रूट मेटाडेटा | `मेटाडेटा.जेसन` |
| 📊 प्रति-कौशल मेटाडेटा | `skills/<skill>/metadata.json` |
| 📋कौशल सूचकांक | `skills_index.json` |
| 📚 प्रकाशित सूची | `dist/catalog.json` |
| 📌 प्रति-कौशल प्रकट | `dist/manifests/<skill>.json` |
| 📦 ज़िप संग्रह | `dist/archives/<skill>.zip` |
| 📦 टारबॉल पुरालेख | `dist/archives/<skill>.tar.gz` |
| 🔒 चेकसम मेनिफेस्ट | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| फ़ील्ड | विवरण |
|:------|:------|
| `schema_version` | मेनिफेस्ट स्कीमा का संस्करण |
| `आईडी` | 'नाम' फ़ील्ड से स्थिर कौशल पहचानकर्ता |
| 'स्लग' | `कौशल/` के अंतर्गत निर्देशिका स्लग |
| `प्रदर्शन_नाम` | प्रथम शीर्षक से मानव-पठनीय शीर्षक |### 📝 Metadata

| फ़ील्ड | विवरण |
|:------|:------|
| 'विवरण' | फ्रंटमैटर से संक्षिप्त सारांश |
| 'संस्करण' | कौशल संस्करण, एनपीएम पैकेज संस्करण से स्वतंत्र |
| `श्रेणी` | विहित श्रेणी (सामान्यीकृत) |
| `कच्ची_श्रेणी` | फ्रंटमैटर से मूल श्रेणी |
| 'वर्गीकरण' | अनुमानित फ़ॉलबैक के साथ पूर्ण वर्गीकरण मेटाडेटा |
| `टैग` | खोजने योग्य टैग |
| 'जटिलता' | `शुरुआती` · `मध्यवर्ती` · `उन्नत` · `विशेषज्ञ` |
| 'जोखिम' | `सुरक्षित` · `सावधानी` · `आक्रामक` · `गंभीर` |
| 'स्रोत' | `ओमनी-टीम` · `समुदाय` · `आधिकारिक` |
| `लेखक` | एट्रिब्यूशन स्ट्रिंग |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| फ़ील्ड | विवरण |
|:------|:------|
| `प्रवेश बिंदु` | विहित `SKILL.md` पथ |
| `पथ.रूट` | रेपो के अंदर कौशल निर्देशिका |
| `पथ.प्रकट` | `dist/` में जनरेट किया गया मेनिफेस्ट पथ |### 🖥️ Compatibility

| फ़ील्ड | विवरण |
|:------|:------|
| `उपकरण` | फ्रंटमैटर से उपकरण पहचानकर्ता |
| `इंस्टॉल_लक्ष्य` | प्रति-टूल इंस्टॉल मेटाडेटा |

प्रत्येक इंस्टॉल लक्ष्य में शामिल हैं: `टूल`, `स्कोप`, `डिफॉल्ट_पाथ`, `इंस्टॉलर_फ्लैग`, `करंट_इंस्टॉलर_बिहेवियर`, `इनवोकेशन`### 📦 Resources

| फ़ील्ड | विवरण |
|:------|:------|
| `उप_संसाधन` | कौशल उपदिर ('संदर्भ', 'एजेंट', 'संपत्ति') |
| `कलाकृतियाँ_गिनती` | कौशल पैकेज में कुल फ़ाइल संख्या |
| `संदर्भ_गिनती` | संदर्भ दस्तावेज़ गिनती |
| `एजेंट_गिनती` | एजेंट कॉन्फिग गिनती |
| `संपत्ति_गिनती` | संपत्ति फ़ाइल गिनती |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| फ़ील्ड | विवरण |
|:------|:------|
| 'रणनीति' | रणनीति स्थापित करें (जैसे, `कॉपी-कौशल-निर्देशिका`) |
| `current_installer` | मानव-पठनीय इंस्टॉल व्यवहार |
| 'रेसिपी' | प्रति-ग्राहक इंस्टाल रेसिपी |### 📊 Classification

| धारा | फ़ील्ड्स |
|:-------|:-------|
| 🎯 `परिपक्वता` | `कौशल_स्तर`, `कौशल_स्तर_लेबल` |
| 📋 `सर्वोत्तम_अभ्यास` | `स्कोर` (0-100) |
| ⭐ `गुणवत्ता` | `स्कोर` (0-100) |
| 🛡️ `सुरक्षा` | `स्कोर`, `स्थिति` |
| ✅ `सत्यापन` | `स्थिति` |### 📝 Content

व्युत्पन्न संकेत: `बॉडी_लेंथ`, `कंटेंट_लेंथ`, `बॉडी_लाइन्स`, `वर्ड_काउंट`, उदाहरण के लिए संरचनात्मक झंडे, समस्या निवारण अनुभाग, आदि।### 📁 Artifacts

कौशल निर्देशिका के अंदर भेजी गई प्रत्येक फ़ाइल की सरणी:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**कलाकृतियों के प्रकार**: `प्रवेश बिंदु` · `संदर्भ` · `एजेंट` · `संपत्ति` · `लाइसेंस` · `समर्थन`### 📦 Archives

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

| फ़ील्ड | विवरण |
|:------|:------|
| `entrypoint_sha256` | SKILL.md का हैश |
| `पैकेज_शा256` | आदेशित कलाकृतियों की सूची से नियतात्मक डाइजेस्ट |---

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

> 📌 रिपॉजिटरी पैकेज संस्करण और कौशल संस्करण अलग-अलग चिंताएं हैं। पैकेज वर्तमान में `0.1.3` है, जबकि व्यक्तिगत कौशल का अपना अर्थ संस्करण होता है।---

## ⚠️ Compatibility Notes

| नियम | तर्क |
|:----|:----|
| ✅ रेपो से व्युत्पन्न रहना चाहिए | किसी मैन्युअल मेनिफेस्ट संलेखन की आवश्यकता नहीं है |
| ✅ नए वैकल्पिक फ़ील्ड जोड़े जा सकते हैं | आगे की अनुकूलता |
| ⚠️ मौजूदा फ़ील्ड स्थिर रहना चाहिए | पिछड़ी अनुकूलता |
| 🚫 कोई हस्तलिखित घोषणा पत्र नहीं | बिल्ड-टाइम व्युत्पत्ति सत्य का स्रोत है |