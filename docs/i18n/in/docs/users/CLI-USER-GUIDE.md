# 🧭 Omni Skills CLI User Guide (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**पूर्ण सार्वजनिक सीएलआई सतह `ओमनी-स्किल्स` द्वारा भेजी गई।**

जब आप चाहें तो इस गाइड का उपयोग करें:

| लक्ष्य | कमान क्षेत्र |
|:----|:----|
| 📥 कौशल या बंडल स्थापित करें | [इंस्टॉल फ्लो](#3️⃣-इंस्टॉल-फ्लो) |
| 🔎कैटलॉग खोजें | [कैटलॉग डिस्कवरी](#4️⃣-कैटलॉग-डिस्कवरी) |
| 🔌 एमसीपी क्लाइंट कॉन्फ़िगर करें | [एमसीपी क्लाइंट कॉन्फिग](#5️⃣-एमसीपी-क्लाइंट-कॉन्फिग) |
| 🖥️ MCP, API, या A2A सेवाएँ प्रारंभ करें | [एमसीपी सर्वर](#6️⃣-एमसीपी-सर्वर) · [एपीआई](#7️⃣-कैटलॉग-एपीआई) · [ए2ए](#8️⃣-ए2ए-रनटाइम) |
| 🎨विजुअल टर्मिनल शेल का उपयोग करें | [दृश्य शैल](#9️⃣-दृश्य-शैल) |
| 🧪 डायग्नोस्टिक्स या प्रीफ्लाइट चलाएं | [डायग्नोस्टिक्स](#🔟-डायग्नोस्टिक्स-एंड-प्रीफ्लाइट) |---

## 1️⃣ Install and Entry Modes

`npx` के साथ स्थापित करें:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| प्रसंग | क्या होता है |
|:------|:------|
| 🖥️ टीटीवाई + कोई तर्क नहीं |**निर्देशित इंस्टाल**प्रवाह खोलता है |
| ⚙️ गैर-टीटीवाई + कोई तर्क नहीं | `~/.gemini/antigravity/skills` | पर गैर-संवादात्मक इंस्टालेशन
| 🎨 `एनपीएक्स ओमनी-स्किल्स यूआई` | ब्रांडेड**स्याही दृश्य शैल**|
| 📝 `एनपीएक्स ओमनी-स्किल्स यूआई --टेक्स्ट` | रीडलाइन**टेक्स्ट फ़ॉलबैक**यूआई |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| आदेश | विवरण |
|:-------|:-------|
| `उई` | 🎨 विजुअल टर्मिनल हब |
| `ढूंढें [क्वेरी]` | 🔎 कैटलॉग खोज |
| `पुनः वर्गीकृत करें` | 🏷️ वर्गीकरण प्रबंधन |
| `[झंडे] स्थापित करें` | 📥कौशल/बंडल इंस्टाल |
| `कॉन्फिग-एमसीपी` | 🔌 एमसीपी क्लाइंट कॉन्फ़िगरेशन |
| `mcp <stdio\|stream\|sse>` | 🔌 एमसीपी सर्वर मोड |
| 'एपीआई' | 🌐 कैटलॉग एपीआई |
| `a2a` | 🤖 A2A रनटाइम |
| 'धुआं' | 🧪पूर्व उड़ान जारी करें |
| `प्रकाशित-जांच` | 📦 पैकेज प्रकाशन जांच |
| `डॉक्टर` | 🩺पर्यावरण निदान |
| 'मदद' | ❓ कमांड संदर्भ |---

## 3️⃣ Install Flows

### त्वरित प्रारंभ

```bash
npx omni-skills
npx omni-skills install --guided
```

> निर्देशित प्रवाह आपको चुनने देता है:**लक्षित ग्राहक**→**बंडल या कौशल**→**कस्टम पथ**→**निष्पादन से पहले पूर्वावलोकन**### 🎯 Single Skill

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

| झंडा | ग्राहक |
|:----|:-------|
| `--एंटीग्रेविटी` | 🟣 एंटीग्रेविटी *(डिफ़ॉल्ट)* |
| `-क्लाउड` | 🟢 क्लाउड कोड |
| `--कर्सर` | 🔵 कर्सर |
| `-कोडेक्स` | 🔴 कोडेक्स सीएलआई |
| `--मिथुन` | 🟡 जेमिनी सीएलआई |
| `-किरो` | 🟠किरो |
| `-ओपनकोड` | ⚪ ओपनकोड |

> डिफ़ॉल्ट इंस्टॉल लक्ष्य (गैर-इंटरैक्टिव): `~/.gemini/antigravity/skills`---

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

| झंडा | उद्देश्य |
|:----|:--------|
| `-श्रेणी` | वर्गीकरण श्रेणी के अनुसार फ़िल्टर करें |
| `--टूल` | समर्थित टूल द्वारा फ़िल्टर करें |
| `--जोखिम` | जोखिम स्तर के अनुसार फ़िल्टर करें |
| `--सॉर्ट` | परिणामों को क्रमबद्ध करें (उदा., `गुणवत्ता`) |
| `--आदेश` | क्रमबद्ध करें |
| `--न्यूनतम-गुणवत्ता` | न्यूनतम गुणवत्ता स्कोर |
| `--न्यूनतम-सर्वोत्तम अभ्यास` | न्यूनतम सर्वोत्तम अभ्यास स्कोर |
| `--न्यूनतम-स्तर` | न्यूनतम परिपक्वता स्तर |
| `--न्यूनतम-सुरक्षा` | न्यूनतम सुरक्षा स्कोर |
| `-सत्यापन-स्थिति` | सत्यापन स्थिति के अनुसार फ़िल्टर करें |
| `-सुरक्षा-स्थिति` | सुरक्षा स्थिति के अनुसार फ़िल्टर करें |---

## 5️⃣ MCP Client Config

क्लाइंट-अवेयर MCP कॉन्फ़िगरेशन का पूर्वावलोकन करने या लिखने के लिए `config-mcp` का उपयोग करें।### 📋 List Targets

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

<विवरण>
<सारांश>🔌 <strong>कॉन्फ़िगर-सक्षम क्लाइंट सतह</strong></सारांश>

| ग्राहक | लक्ष्य |
|:-------|:-------|
| क्लाउड | सेटिंग्स और डेस्कटॉप लक्ष्य |
| कर्सर | उपयोगकर्ता और कार्यक्षेत्र |
| कोडेक्स | TOML कॉन्फ़िगरेशन |
| मिथुन | उपयोगकर्ता और कार्यक्षेत्र |
| प्रतिगुरुत्वाकर्षण | उपयोगकर्ता कॉन्फिग |
| ओपनकोड | उपयोगकर्ता और कार्यक्षेत्र |
| क्लाइन | प्रथम श्रेणी लक्ष्य |
| गिटहब कोपायलट सीएलआई | उपयोगकर्ता और रेपो |
| किलो कोड | उपयोगकर्ता, प्रोजेक्ट और कार्यक्षेत्र |
| किरो | उपयोगकर्ता और कार्यक्षेत्र |
| जेड | कार्यक्षेत्र |
| वीएस कोड | उपयोगकर्ता, कार्यक्षेत्र और देव कंटेनर |
| जारी रखें | कार्यक्षेत्र YAML |
| जूनी | प्रोजेक्ट और उपयोगकर्ता |
| विंडसर्फ़ | उपयोगकर्ता कॉन्फिग |</details>

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

>**स्थानीय साइडकार**जोड़ता है: क्लाइंट का पता लगाना, पूर्वावलोकन स्थापित करना, प्रवाह स्थापित करना/निकालना, और एमसीपी कॉन्फ़िगरेशन लेखन।---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| मार्ग | उद्देश्य |
|:------|:-------|
| `GET /healthz` | स्वास्थ्य जांच |
| `प्राप्त करें /openapi.json` | ओपनएपीआई विशिष्टता |
| `प्राप्त करें /v1/कौशल` | सभी कौशलों की सूची बनाएं |
| `प्राप्त करें /v1/खोज` | कैटलॉग खोजें |
| `प्राप्त करें /v1/कौशल/:आईडी/अभिलेखागार` | किसी कौशल के लिए अभिलेखों की सूची बनाएं |
| `GET /v1/skills/:id/download/archive?format=zip` | कौशल पुरालेख डाउनलोड करें |
| `प्राप्त करें /v1/कौशल/:आईडी/डाउनलोड/संग्रह/चेकसम` | चेकसम डाउनलोड करें |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| फ़ीचर | स्थिति |
|:-------|:-------|
| 🔎 कार्य-जागरूक खोज | ✅ |
| 📋 इंस्टाल-प्लान हैंडऑफ़ | ✅ |
| 🔄मतदान | ✅ |
| 📡 स्ट्रीमिंग | ✅ |
| ❌ रद्दीकरण | ✅ |
| 🔔 पुश-नोटिफिकेशन कॉन्फ़िगरेशन | ✅ |
| 💾दृढ़ता | मेमोरी, JSON, और SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### विशेषताएं

| फ़ीचर | विवरण |
|:-------|:-------|
| 🧭 निर्देशित इंस्टाल | क्लाइंट या कस्टम पथ चुनें |
| 🔎 खोजें + इंस्टॉल करें | झंडे को याद रखने की कोई आवश्यकता नहीं है |
| 🔌 एमसीपी कॉन्फिग | प्रवाह का पूर्वावलोकन करें और लिखें |
| 🖥️सेवा लॉन्च | एमसीपी, एपीआई, और ए2ए निर्देशित स्टार्टअप |
| 🕐 हाल ही में | हाल की स्थापनाएँ और सेवा पुन: लॉन्च |
| ⭐ पसंदीदा | सहेजे गए कौशल और बंडल |
| 💾 प्रीसेट | नामांकित इंस्टाल और सर्विस प्रीसेट |

>**राज्य पथ:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> निरीक्षण करता है: रेपो स्थिति, स्थानीय इंस्टॉल स्थिति, रनटाइम उपलब्धता और पर्यावरण संबंधी समस्याएं।### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> सत्यापन: निर्माण, परीक्षण, पैकेज आउटपुट, सर्विस बूट, स्कैनर कवरेज और रिलीज पैकेजिंग।---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 व्यक्तित्व | आदेश | उद्देश्य |
|:--------|:-------|:--------|
| 🆕 नया उपयोगकर्ता | `एनपीएक्स ओम्नी-कौशल` | पहली बार इंस्टॉल करने के लिए निर्देशित |
| 🔧 संचालक | `एनपीएक्स ओमनी-स्किल्स कॉन्फिग-एमसीपी --लिस्ट-लक्ष्य` | स्थानीय एमसीपी कॉन्फ़िगर करें |
| 🔧 संचालक | `एनपीएक्स ओमनी-स्किल्स एमसीपी स्ट्रीम --लोकल` | स्थानीय साइडकार प्रारंभ करें |
| 📦 अनुरक्षक | `एनपीएक्स ओमनी-स्किल्स स्मोक` | किसी रिलीज़ को सत्यापित करें |
| 🔍 पावर उपयोगकर्ता | `एनपीएक्स ओम्नी-स्किल्स फाइंड सिक्योरिटी --सॉर्ट क्वालिटी --मिन-क्वालिटी 95` | सबसे पहले सर्वोत्तम कौशल खोजें |---

## 📖 Related Documents

| डॉक्टर | इसमें क्या शामिल है |
|:---|:----|
| 🚀 [आरंभ करना](./GETTING-STARTED.md) | 2 मिनट के अंदर इंस्टॉल करें और सत्यापित करें |
| 📗 [उपयोग मार्गदर्शिका](./USAGE.md) | सभी सीएलआई कमांड, पैटर्न और मोड |
| 📦 [बंडल](./BUNDLES.md) | क्यूरेटेड कौशल संग्रह |
| 🔧 [सिस्टम रनबुक](../ऑपरेशंस/RUNBOOK.md) | परिचालन संदर्भ |
| 🔌 [स्थानीय एमसीपी साइडकार](../specs/LOCAL-MCP-SIDECAR.md) | फ़ाइल सिस्टम उपकरण और कॉन्फ़िगरेशन लेखन |