# 🔧 System Runbook (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**ओमनी कौशल के निर्माण, सत्यापन, सेवा, सुरक्षा और समस्या निवारण के लिए संपूर्ण परिचालन मार्गदर्शिका।**---

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

| आदेश | यह क्या करता है |
|:--------|:--------|
| `एनपीएम रन वैलिडेट` | `SKILL.md` को मान्य करता है, `metadata.json` को पुन: उत्पन्न करता है, वर्गीकरण/परिपक्वता/गुणवत्ता/सुरक्षा की गणना करता है |
| `एनपीएम रन टैक्सोनॉमी:रिपोर्ट` | फ़ाइलों को दोबारा लिखे बिना श्रेणी बहाव सुझाव दिखाता है |
| `एनपीएम रन वेरीफाई:स्कैनर्स` | उत्पन्न कौशल मेटाडेटा में दर्ज स्कैनर कवरेज की पुष्टि करता है |
| `एनपीएम रन रिलीज:नोट्स` | मेटाडेटा, बंडल और गिट इतिहास से कस्टम रिलीज़ नोट्स उत्पन्न करता है |
| `एनपीएम रन बिल्ड` | कैटलॉग/मेनिफ़ेस्ट/अभिलेख/चेकसम को पुनर्जीवित करता है, स्कैनर कवरेज और अभिलेखागार को सत्यापित करता है, `docs/CATALOG.md` का पुनर्निर्माण करता है |
| `एनपीएम टेस्ट` | सीएलआई, एपीआई, एमसीपी, साइडकार और आर्काइव फ्लो में फुल स्मोक सूट |---

## 🖥️ Visual Shell

प्रकाशित सीएलआई में अब एक इंक-आधारित ऑपरेटर शेल शामिल है:```bash
npx omni-skills ui
```

वर्तमान क्षमताएं:

- ज्ञात ग्राहकों और कस्टम पथों के लिए निर्देशित इंस्टॉल
- खोज-फिर-स्थापित प्रवाह
- एमसीपी लॉन्च विज़ार्ड
- एपीआई लॉन्च विज़ार्ड
- A2A लॉन्च विज़ार्ड
- हाल की स्थापनाएँ और सेवा पुन: लॉन्च
- नामित इंस्टॉल और सर्विस प्रीसेट

स्थानीय राज्य पथ:```text
~/.omni-skills/state/ui-state.json
```

मैदान छोड़ना:```bash
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

स्थैतिक स्कैनर स्वचालित रूप से सभी कौशलों की जाँच करता है:

| नियम परिवार | उदाहरण |
|:---|:---|
| 🎭 शीघ्र इंजेक्शन | एक्सफिल्ट्रेशन पैटर्न, निर्देश ओवरराइड |
| 💣विनाशकारी आदेश | `आरएम-आरएफ`, `प्रारूप`, `एमकेएफएस` |
| 🔑संदिग्ध रास्ते | `/etc/shadow`, `~/.ssh`, क्रेडेंशियल फ़ाइलें |
| ⚠️ जोखिम भरा आदिम | `शेल=ट्रू`, `पिकल.लोड`, `इवल`, `एक्सट्रैक्टऑल` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> `PATH` में `clamscan` की आवश्यकता है।### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> केवल हैश लुकअप - अज्ञात फ़ाइलें डिफ़ॉल्ट रूप से**अपलोड नहीं**की जाती हैं।### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

सख्त रिलीज गेट:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

पुरालेख `एनपीएम रन बिल्ड` द्वारा स्वचालित रूप से तैयार किए जाते हैं:

| आउटपुट | पथ |
|:-------|:-----|
| 📦 ज़िप | `dist/archives/<skill>.zip` |
| 📦 टारबॉल | `dist/archives/<skill>.tar.gz` |
| 🔒 चेकसम | `dist/archives/<skill>.checksums.txt` |

`dist/` इस रिपॉजिटरी में जानबूझकर प्रतिबद्ध है। जेनरेटेड कैटलॉग, मैनिफ़ेस्ट, बंडल और आर्काइव सीएलआई इंस्टॉल फ़्लो, एपीआई डाउनलोड सरफेस, एमसीपी पूर्वावलोकन, ए2ए टास्क हैंडऑफ़, स्मोक टेस्ट और रिलीज़ सत्यापन के लिए रनटाइम इनपुट हैं।### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

वैकल्पिक सार्वजनिक कुंजी ओवरराइड:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> यदि कोई सार्वजनिक कुंजी प्रदान नहीं की गई है, तो बिल्ड `openssl` के माध्यम से `dist/signing/` में कुंजी प्राप्त करता है।### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

संस्करण नीति:

- पैच वेतन वृद्धि `.10` तक
- `.10` के बाद, अगली रिलीज़ माइनर रोल करती है और पैच को `.0` पर रीसेट करती है

उदाहरण:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| परिदृश्य | आदेश |
|:------|:-------|
| 📥डिफ़ॉल्ट इंस्टॉल (एंटीग्रेविटी) | `एनपीएक्स ओम्नी-कौशल` |
| 🎯 विशिष्ट कौशल + ग्राहक | `एनपीएक्स ओमनी-स्किल्स --कर्सर --स्किल ओमनी-फिग्मा` |
| 🔎 डिस्कवरी → इंस्टॉल | `एनपीएक्स ओमनी-स्किल्स फाइंड फिग्मा --टूल कर्सर --इंस्टॉल --यस` |
| 📦 बंडल इंस्टाल | `एनपीएक्स ओम्नी-स्किल्स --कर्सर --बंडल अनिवार्य` |
| 🩺 इंस्टॉल सत्यापित करें | `एनपीएक्स ओमनी-स्किल्स डॉक्टर` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| फ़िल्टर | झंडा | उदाहरण |
|:-------|:-----|:--------|
| 📂 श्रेणी | `-श्रेणी` | `-श्रेणी विकास` |
| 🖥️ टूल | `--टूल` | `--टूल कर्सर` |
| ⚠️ जोखिम | `--जोखिम` | `-जोखिम सुरक्षित` |
| 📊 क्रमबद्ध करें | `--सॉर्ट` | `--क्रमबद्ध गुणवत्ता\|सर्वोत्तम अभ्यास\|स्तर\|सुरक्षा\|नाम` |
| 🔄आदेश | `--आदेश` | `--आदेश asc\|desc` |
| ⭐ न्यूनतम गुणवत्ता | `--न्यूनतम-गुणवत्ता` | `--न्यूनतम-गुणवत्ता 80` |
| 📋न्यूनतम बीपी | `--न्यूनतम-सर्वोत्तम अभ्यास` | `--न्यूनतम-सर्वोत्तम-अभ्यास 60` |
| 🎯न्यूनतम स्तर | `--न्यूनतम-स्तर` | `--न्यूनतम-स्तर 2` |
| 🛡️ न्यूनतम सुरक्षा | `--न्यूनतम-सुरक्षा` | `--न्यूनतम-सुरक्षा 90` |
| ✅ मान्यता | `-सत्यापन-स्थिति` | `--सत्यापन-स्थिति पारित` |
| 🛡️ सुरक्षा | `-सुरक्षा-स्थिति` | `-सुरक्षा-स्थिति पारित` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| विधि | समापन बिंदु | उद्देश्य |
|:-------|:------|:--------|
| 'प्राप्त करें' | `/healthz` | स्वास्थ्य जांच |
| 'प्राप्त करें' | `/openapi.json` | ओपनएपीआई 3.1 विशिष्टता |
| 'प्राप्त करें' | `/v1/कौशल` | फ़िल्टर सहित सूची |
| 'प्राप्त करें' | `/v1/खोज` | पूर्ण-पाठ खोज |
| 'प्राप्त करें' | `/v1/skills/:id/archives` | पुरालेख सूची |
| 'प्राप्त करें' | `/v1/skills/:id/download/archive?format=zip` | पुरालेख डाउनलोड करें |
| 'प्राप्त करें' | `/v1/skills/:id/download/archive/checksums` | चेकसम मेनिफेस्ट |### 🔐 Hosted API Hardening

| फ़ीचर | आदेश |
|:-------|:--------|
| 🔑 बियरर ऑथ | `OMNI_SKILLS_HTTP_BEARER_TOKEN=रिप्लेस-मी एनपीएक्स ओमनी-स्किल्स एपीआई` |
| 🗝️ एपीआई कुंजी प्रमाणीकरण | `OMNI_SKILLS_HTTP_API_KEYS=key-a, key-b npx omni-skills एपीआई` |
| 🛂 एडमिन रनटाइम ऑथ | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=एडमिन-सीक्रेट एनपीएक्स ओमनी-स्किल्स एपीआई` |
| 🚦 दर सीमित करना | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills एपीआई` |
| 📝 ऑडिट लॉगिंग | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx ओमनी-कौशल एपीआई` |
| 🌍 CORS अनुमति सूची | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱आईपी अनुमति सूची | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills एपीआई` |
| 🚧 रखरखाव मोड | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx ओमनी-कौशल एपीआई` |
| 🔁 विश्वसनीय प्रॉक्सी | `OMNI_SKILLS_HTTP_TRUST_PROXY=लूपबैक एनपीएक्स ओमनी-स्किल्स एपीआई` |

> 🟢 `/healthz` डिज़ाइन के अनुसार खुला रहता है; सक्षम होने पर कैटलॉग मार्गों को प्रमाणीकरण की आवश्यकता होती है। `GET /admin/runtime` को कॉन्फ़िगर होने पर एडमिन टोकन की आवश्यकता होती है और लाइव गवर्नेंस स्नैपशॉट लौटाता है।---

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

साइडकार अब इसके लिए MCP कॉन्फ़िगरेशन का पूर्वावलोकन या लिख सकता है:

- क्लाउड उपयोगकर्ता और प्रोजेक्ट सेटिंग्स
- क्लाउड डेस्कटॉप कॉन्फ़िगरेशन
- क्लाइन उपयोगकर्ता कॉन्फ़िगरेशन
- GitHub Copilot CLI उपयोगकर्ता और रिपॉजिटरी कॉन्फ़िगरेशन
- कर्सर उपयोगकर्ता और कार्यक्षेत्र कॉन्फिगरेशन
- कोडेक्स टीओएमएल कॉन्फिगरेशन
- मिथुन उपयोगकर्ता और परियोजना सेटिंग्स
- किलो सीएलआई उपयोगकर्ता और प्रोजेक्ट कॉन्फ़िगरेशन
- किलो कार्यक्षेत्र विन्यास
- किरो उपयोगकर्ता और प्रोजेक्ट सेटिंग्स
- ओपनकोड उपयोगकर्ता और कार्यक्षेत्र कॉन्फिगरेशन
- कार्यस्थान YAML कॉन्फ़िगरेशन जारी रखें
- विंडसर्फ उपयोगकर्ता कॉन्फिगरेशन
- जेड वर्कस्पेस कॉन्फ़िगरेशन
- कार्यक्षेत्र `.mcp.json`
- वीएस कोड कार्यक्षेत्र और उपयोगकर्ता कॉन्फ़िगरेशन
- देव कंटेनर कॉन्फिगरेशन

`configure_client_mcp` प्रति-क्लाइंट `रेसिपी` भी लौटाता है ताकि ऑपरेटरों को पूर्वावलोकन के साथ समकक्ष सीएलआई या मैन्युअल सेटअप चरण मिलें।### 🧾 MCP Config Preview and Write Flow

जब आप एमसीपी टूल को सीधे कॉल किए बिना कॉन्फिग जेनरेशन चाहते हैं तो एकीकृत सीएलआई का उपयोग करें:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

विज़ुअल शेल समान वर्कफ़्लो को इसके माध्यम से उजागर करता है:

- `एनपीएक्स ओमनी-स्किल्स यूआई`
- 'सेवाएँ'
- `एमसीपी क्लाइंट कॉन्फ़िगर करें`

जब तक `-write` पास नहीं हो जाता, कमांड पूर्वावलोकन मोड में रहता है।### 🔐 Hosted MCP Hardening

एपीआई के समान env vars:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**संरक्षित मार्ग**: `पोस्ट/एमसीपी` · `प्राप्त करें/एसएसई` · `पोस्ट/संदेश` · `प्राप्त करें/व्यवस्थापक/रनटाइम`

> 🟢 `/healthz` खुला रहता है।---

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

डिफ़ॉल्ट स्थानीय पथ सरल-प्रथम रहता है:

- `json` या `sqlite` दृढ़ता कतार मतदान अक्षम होने पर चल सकती है
- `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` तभी सेट करें जब आप मल्टी-वर्कर क्लेम और लीज फेलओवर चाहते हों
- रेडिस समन्वय को एक उन्नत होस्टेड विकल्प के रूप में रखें, आधार रेखा के रूप में नहीं### 🧱 Multi-Worker Lease Setup

लीज़-आधारित फ़ेलओवर प्राप्त करने के लिए एक ही SQLite स्टोर के विरुद्ध एक से अधिक A2A नोड चलाएँ:```bash
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

यदि किसी कार्य के दौरान किसी श्रमिक की मृत्यु हो जाती है, तो पट्टा समाप्त होने के बाद कोई अन्य श्रमिक उस कार्य को पुनः प्राप्त कर सकता है और निष्पादन जारी रख सकता है।### 🟥 Redis Coordination

होस्ट किए गए या मल्टी-नोड परिनियोजन के लिए जो कतार समन्वय को साझा SQLite स्टोर से बांधना नहीं चाहते हैं, समन्वयक को Redis पर स्विच करें:```bash
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

इस मोड में:

- दृढ़ता अभी भी JSON या SQLite में रहती है
- कार्य का दावा और पट्टे का स्वामित्व रेडिस के पास चला गया
- एकाधिक A2A नोड SQLite पंक्ति-स्तरीय समन्वय पर भरोसा किए बिना एक कतार साझा कर सकते हैं### 📡 Endpoints

| विधि | पथ | उद्देश्य |
|:-------|:-----|:--------|
| 'प्राप्त करें' | `/healthz` | स्वास्थ्य जांच |
| 'प्राप्त करें' | `/.well-known/agent.json` | एजेंट कार्ड (A2A डिस्कवरी) |
| `पोस्ट` | `/a2a` | कार्यों और स्ट्रीमिंग के लिए JSON-RPC समापन बिंदु |### 🧭 Supported JSON-RPC Methods

| विधि | उद्देश्य |
|:-------|:-------|
| `संदेश/भेजें` | किसी कार्य को प्रारंभ करें या जारी रखें |
| `संदेश/स्ट्रीम` | एक कार्य शुरू करें और एसएसई अपडेट स्ट्रीम करें |
| `कार्य/प्राप्त करें` | किसी कार्य का स्नैपशॉट पोल करें |
| `कार्य/रद्द करें` | एक सक्रिय कार्य रद्द करें |
| `कार्य/पुनः सदस्यता` | किसी मौजूदा कार्य के लिए SSE अपडेट फिर से शुरू करें |
| `कार्य/pushNotificationConfig/set` | एक पुश वेबहुक पंजीकृत करें |
| `कार्य/pushNotificationConfig/get` | एक पुश कॉन्फिगरेशन पढ़ें |
| `कार्य/pushNotificationConfig/सूची` | किसी कार्य के लिए पुश कॉन्फ़िगरेशन की सूची बनाएं |
| `कार्य/pushNotificationConfig/delete` | एक पुश कॉन्फिगरेशन हटाएं |### 📡 Task Lifecycle

वर्तमान रनटाइम इन कार्य स्थितियों का समर्थन करता है:

- `प्रस्तुत`
- `कार्यरत`
- `इनपुट-आवश्यक`
- `पूर्ण`
- 'रद्द'
- 'विफल'

कार्य या तो JSON फ़ाइल या SQLite स्टोर पर जारी रहते हैं और पुनरारंभ पर पुनः लोड किए जाते हैं। पूर्ण एवं बाधित कार्य उपलब्ध रहते हैं। जो कार्य शटडाउन के दौरान अभी भी `सबमिट` किए गए`` या`` कार्यशील`` थे, उन्हें स्पष्ट पुनरारंभ मेटाडेटा के साथ पुनर्प्राप्त किया जाता है और डिफ़ॉल्ट रूप से स्वचालित रूप से फिर से शुरू किया जाता है।### 🧪 Example: Start a Task

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

रिपॉजिटरी में अब दो वर्कफ़्लो हैं:

| कार्यप्रवाह | ट्रिगर | उद्देश्य |
|:------|:-------|:--------|
| `validate.yml` | `मुख्य` पर पुश/पीआर करें | उत्पन्न कलाकृतियों का निर्माण, परीक्षण और पुष्टि करें प्रतिबद्ध हैं |
| `रिलीज़.वाईएमएल` | टैग पुश `v*` या मैन्युअल प्रेषण | रिलीज़-ग्रेड स्कैनर चलाएँ, संस्करण टैग सत्यापित करें, कलाकृतियों पर हस्ताक्षर करें, टारबॉल पैकेज करें, एनपीएम पर प्रकाशित करें, और गिटहब रिलीज़ बनाएं |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| गुप्त | द्वारा प्रयुक्त | उद्देश्य |
|:-------|:-------|:--------|
| `VT_API_KEY` या `वायरसटोटल` | `रिलीज़.वाईएमएल` | रिलीज़ बिल्ड में वायरसटोटल हैश लुकअप की आवश्यकता है |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` या `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `रिलीज़.वाईएमएल` | सीआई में पृथक संग्रह पर हस्ताक्षर करने के लिए आवश्यक निजी कुंजी |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` या `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `रिलीज़.वाईएमएल` | वैकल्पिक सार्वजनिक कुंजी ओवरराइड; अन्यथा निजी कुंजी से प्राप्त |
| `एनपीएम_टोकन` | `प्रकाशन-एनपीएम` कार्य | टैग रिलीज़ के लिए `npm पब्लिश` को प्रमाणित करें |### 🦠 Release Scanner Policy

`release.yml` सेट या तैयार करता है:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ रहस्य.VT_API_KEY || रहस्य.वायरसटोटल }}`
- रनर टेम्प स्टोरेज से `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH`

इसका मतलब है कि प्रत्येक टैग-आधारित रिलीज़ को यह करना होगा:

- रनर पर ClamAV इंस्टॉल और रिफ्रेश करें
- ClamAV सक्षम होने पर मेटाडेटा पुन: उत्पन्न करें
- वायरसटोटल सक्षम के साथ मेटाडेटा पुन: उत्पन्न करें
- रनर टेम्प स्टोरेज में सीआई साइनिंग कुंजी सामग्री को डीकोड करें
- `एनपीएम रन वेरिफाई: स्कैनर्स: स्ट्रिक्ट` पास करें
- `एनपीएम रन वेरिफाई: आर्काइव्स: स्ट्रिक्ट` पास करें
- एनपीएम प्रकाशन से पहले परीक्षण और पैकेज सत्यापन पास करें
- कैटलॉग मेटाडेटा और गिट इतिहास से कस्टम रिलीज़ नोट्स तैयार करें
- प्रकाशन के बाद संलग्न रिलीज़ परिसंपत्तियों के साथ एक GitHub रिलीज़ बनाएं---

## 1️⃣1️⃣ Environment Variables Reference

| परिवर्तनीय | उद्देश्य | डिफ़ॉल्ट |
|:------|:-------|:--------|
| `OMNI_SKILLS_ROOT` | कैटलॉग रूट पथ को ओवरराइड करें | स्वतः पता लगाया गया |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | अतिरिक्त अनुमत लेखन पथ | ज्ञात ग्राहक जड़ें |
| `OMNI_SKILLS_MCP_MODE` | साइडकार के लिए `स्थानीय` पर सेट करें | रिमोट |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | स्थानीय मोड के लिए Alt फ़्लैग | `0` |
| `OMNI_SKILLS_API_BASE_URL` | एमसीपी के लिए सार्वजनिक एपीआई यूआरएल | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | सार्वजनिक आधार यूआरएल | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | बियरर ऑथ टोकन | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | अल्पविराम से अलग की गई एपीआई कुंजियाँ | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | एडमिन रनटाइम ऑथ टोकन | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | प्रति विंडो अधिकतम अनुरोध | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | दर सीमा विंडो (एमएस) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | ऑडिट लॉगिंग सक्षम करें | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` या `text` ऑडिट आउटपुट | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | वैकल्पिक ऑडिट लॉग फ़ाइल पथ | स्टडआउट |
| `OMNI_SKILLS_HTTP_ALOWED_ORIGINS` | अल्पविराम से अलग किए गए CORS मूल अनुमति सूची | — |
| `OMNI_SKILLS_HTTP_ALOWED_IPS` | अल्पविराम से अलग की गई आईपी या सीआईडीआर अनुमति सूची | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | एक्सप्रेस ट्रस्ट प्रॉक्सी सेटिंग | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | रखरखाव प्रतिक्रियाएँ सक्षम करें | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | रखरखाव `पुनःप्रयास-बाद` सेकंड | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | सिम्युलेटेड एसिंक कार्य विलंब | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`, `sqlite`, या `मेमोरी` टास्क स्टोर | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | कस्टम A2A टास्क स्टोर फ़ाइल | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | पट्टा-जागरूक श्रमिकों के लिए साझा कतार मतदान सक्षम करें | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `स्टोर`, `एसक्लाइट`, `लोकल`, या `रेडिस` समन्वयक | `स्टोर` |
| `OMNI_SKILLS_A2A_REDIS_URL` | बाहरी समन्वय के लिए रेडिस यूआरएल | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | कतार मेटाडेटा के लिए रेडिस कुंजी उपसर्ग | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | पट्टा कर्मियों के लिए कतारबद्ध मतदान अंतराल | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | किसी अन्य कर्मचारी द्वारा किसी कार्य को पुनः प्राप्त करने से पहले पट्टे की अवधि | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | पट्टा स्वामित्व और निदान के लिए स्थिर कार्यकर्ता पहचानकर्ता | होस्टनाम + पीआईडी ​​+ यादृच्छिक प्रत्यय |
| `OMNI_SKILLS_A2A_EXECUTOR` | `इनलाइन` या `प्रोसेस` कार्य निष्पादक | 'इनलाइन' |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | बाहरी कार्यकर्ता आदेश को ओवरराइड करें | नोड बाइनरी |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | बाहरी कार्यकर्ता तर्कों की JSON सारणी | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | बूट पर पुनर्प्राप्त सबमिट/कार्यशील कार्यों को फिर से शुरू करें | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | लोकलहोस्ट के बाहर गैर-HTTPS वेबहुक की अनुमति दें | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | ClamAV स्कैनिंग सक्षम करें | `0` |
| `VT_API_KEY` | वायरसटोटल एपीआई कुंजी | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | हस्ताक्षर करने के लिए निजी कुंजी | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | सार्वजनिक कुंजी ओवरराइड | स्वत: व्युत्पन्न |---

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

1. `एनपीएम रन बिल्ड` के साथ पुनर्निर्माण करें
2. `एनपीएम रन वेरीफाई:आर्काइव्स` को फिर से चलाएँ
3. यदि हस्ताक्षर सक्षम है, तो सार्वजनिक कुंजी और `openssl` उपलब्धता की पुष्टि करें### 🦠 Release Workflow Fails on Scanner Coverage

- पुष्टि करें कि `VT_API_KEY` रिपॉजिटरी रहस्यों में मौजूद है
- पुष्टि करें कि `फ्रेशक्लैम` रनर पर सफल हुआ
- `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build` के साथ स्थानीय स्तर पर पुनर्निर्माण करें
- `एनपीएम रन वेरीफाई:स्कैनर्स:स्ट्रिक्ट` को फिर से चलाएँ### 📦 npm Publish Fails in CI

- पुष्टि करें कि `NPM_TOKEN` रिपॉजिटरी रहस्यों में मौजूद है
- पुष्टि करें कि Git टैग `package.json` संस्करण से बिल्कुल मेल खाता है
- जांचें कि `रिलीज़-वेरिफाई` द्वारा अपलोड किया गया टारबॉल वर्कफ़्लो कलाकृतियों में मौजूद है### ✍️ Release Signing Fails in CI

- पुष्टि करें `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` या `OMNI_SKILLS_SIGN_PRIVATE_KEY` रिपॉजिटरी रहस्यों में मौजूद है
- यदि आप सार्वजनिक कुंजी रहस्य प्रदान करते हैं, तो पुष्टि करें कि यह निजी कुंजी से मेल खाता है
- पुष्टि करें कि `openssl` उपलब्ध है और निजी कुंजी PEM-स्वरूपित है
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build` के साथ स्थानीय स्तर पर पुनर्निर्माण करें
- `एनपीएम रन वेरीफाई: आर्काइव्स: स्ट्रिक्ट` को फिर से चलाएँ### 🔒 API/MCP Returns `401 Unauthorized`

- `OMNI_SKILLS_HTTP_BEARER_TOKEN` या `OMNI_SKILLS_HTTP_API_KEYS` सत्यापित करें
- `प्राधिकरण: बियरर <टोकन>` या `x-api-key` हेडर शामिल करें### 🚦 API/MCP Returns `429 Too Many Requests`

- `OMNI_SKILLS_RATE_LIMIT_MAX` बढ़ाएँ
- `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` को चौड़ा करें
- ग्राहकों या जांचकर्ताओं से आने वाले ट्रैफ़िक को कम करें### 🛂 API/MCP Admin Runtime Returns `401`

- `OMNI_SKILLS_HTTP_ADMIN_TOKEN` सत्यापित करें
- `x-admin-टोकन: <टोकन>` या `प्राधिकरण: वाहक <व्यवस्थापक-टोकन>` भेजें### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` अक्षम करें
- रखरखाव के दौरान जीवंतता जांच के लिए `/healthz` का उपयोग करें
- ऑपरेटर डायग्नोस्टिक्स के लिए एडमिन टोकन के साथ `/admin/runtime` का उपयोग करें### 🌍 Browser Requests Fail CORS Validation

- `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` सत्यापित करें
- सटीक योजना और होस्ट शामिल करें, उदाहरण के लिए `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis` सत्यापित करें
- `OMNI_SKILLS_A2A_REDIS_URL` सत्यापित करें
- प्रत्येक नोड से रेडिस कनेक्टिविटी की जाँच करें
- `समन्वय` स्नैपशॉट के लिए `/healthz` का निरीक्षण करें### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
