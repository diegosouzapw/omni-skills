# 📗 Usage Guide (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**कौशलों को लागू करने, सेवाओं को चलाने और ओमनी स्किल्स रनटाइम को संचालित करने के लिए आपको जो कुछ भी चाहिए वह सब कुछ।**

पूर्ण परिचालन वर्कफ़्लो के लिए, [🔧 सिस्टम रनबुक](../ऑपरेशंस/RUNBOOK.md) देखें।
संपूर्ण अंतिम-उपयोगकर्ता कमांड मैप के लिए, [🧭 सीएलआई उपयोगकर्ता गाइड](./CLI-USER-GUIDE.md) देखें।---

## 📊 Current Catalog Reality

| स्थिति | विवरण |
|:-------|:-------|
| ✅**अभी उपलब्ध**| डिज़ाइन, आर्किटेक्चर, डिबगिंग, डॉक्स, ओएसएस, सुरक्षा, डेवऑप्स, एआई-इंजीनियरिंग, डेटा, टूल्स और मशीन-लर्निंग वर्कफ़्लो में 32 प्रकाशित कौशल |
| 📦**बंडल**| `आवश्यक`, `फुल-स्टैक`, `डिज़ाइन`, `सुरक्षा`, `डेवॉप्स`, `एआई-इंजीनियर`, और `ओएसएस-मेंटेनर` आज पूरी तरह से समर्थित हैं |
| 🔌**एमसीपी पहुंच**| 7 इंस्टाल-सक्षम क्लाइंट, 16 कॉन्फिग-सक्षम क्लाइंट, 33 प्रथम श्रेणी कॉन्फिग लक्ष्य, 19 कॉन्फिग प्रोफाइल |
| 🤖**A2A टिकाऊपन**| मेमोरी, JSON, या SQLite स्थानीय स्थायित्व, पुनरारंभ पुनरारंभ, वैकल्पिक प्रक्रिया निष्पादक, और साझा श्रमिकों के लिए ऑप्ट-इन लीज़ समन्वय |---

## 🖥️ Invocation by Client

| ग्राहक | आह्वान कैसे करें | कौशल पथ |
|:-------|:---|:---||
| 🔵**क्लाउड कोड**| `>> /कौशल-नाम मेरी मदद करें...` | `~/.क्लाउड/कौशल/` |
| 🟡**मिथुन सीएलआई**| `@skill-name का उपयोग करें...` | `~/.gemini/skills/` |
| 🔴**कोडेक्स सीएलआई**| `@skill-name का उपयोग करें...` | `~/.codex/skills/` |
| 🟢**किरो**| मांग पर कौशल स्वतः लोड | `~/.kiro/skills/` |
| 🟣**एंटीग्रेविटी**| `@skill-name का उपयोग करें...` | `~/.gemini/antigravity/skills/` |
| 🔵**कर्सर**| चैट में `@कौशल-नाम` | `~/.कर्सर/कौशल/` |
| ⚪**ओपनकोड**| `ओपनकोड रन @कौशल-नाम` | `.opencode/skills/` |
| ⬛**कोपायलट**| कौशल सामग्री को मैन्युअल रूप से चिपकाएँ | एन/ए |

कंटिन्यू, जूनी, विंडसर्फ, जेड, वीएस कोड, गिटहब कोपायलट सीएलआई, क्लाइन और किलो कोड जैसे ग्राहक मुख्य रूप से कौशल निर्देशिका के बजाय `कॉन्फिग-एमसीपी` प्रवाह का उपयोग करते हैं।---

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

>**📌 टिप्पणियाँ:**
> - एक इंटरैक्टिव टर्मिनल में, `npx omni-skills` अब एक निर्देशित इंस्टाल प्रवाह खोलता है
> - `एनपीएक्स ओमनी-स्किल्स यूआई` इंस्टॉल, डिस्कवरी और सर्विस लॉन्च क्रियाओं के साथ विजुअल इंक शेल खोलता है
> - विज़ुअल शेल `~/.omni-skills/state/ui-state.json` में हालिया इंस्टॉल, हालिया सेवा लॉन्च, पसंदीदा और नामित प्रीसेट को बरकरार रखता है।
> - टीटीवाई के बाहर, कोई चयनकर्ता प्रदान नहीं किए जाने पर पूर्ण इंस्टॉल अभी भी डिफ़ॉल्ट है
> - `--skill` केवल चयनित प्रकाशित कौशल स्थापित करता है
> - `--बंडल` बंडल का विस्तार करता है और क्यूरेटेड बंडल में घोषित प्रकाशित सदस्यों को स्थापित करता है
> - `ढूंढें` 12+ फ़िल्टर फ़्लैग का समर्थन करता है: `गुणवत्ता`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk`, और बहुत कुछ
> - `कॉन्फिग-एमसीपी` एमसीपी-सक्षम उत्पादों के लिए सही रास्ता है जिनके पास प्रथम श्रेणी कौशल निर्देशिका नहीं है---

## 🔌 Runtime Commands

सीएलआई एक एकीकृत संचालन उपकरण है, न कि केवल एक इंस्टॉलर।### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

दृश्य शेल समर्थन करता है:

- ज्ञात क्लाइंट या कस्टम पथ चयन के साथ निर्देशित इंस्टॉल
- झंडों को याद किए बिना खोजें-फिर-इंस्टॉल करें
- निर्देशित एमसीपी क्लाइंट कॉन्फ़िगरेशन पूर्वावलोकन और लेखन प्रवाह
- एमसीपी, एपीआई और ए2ए निर्देशित स्टार्टअप
- हाल की स्थापनाएँ और सेवा पुन: लॉन्च
- सहेजे गए इंस्टॉल और सर्विस प्रीसेट
- पसंदीदा कौशल और बंडल### 🩺 Diagnostics

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

| # | युक्ति |
|:--|:----|
| 1️⃣ | अपने प्रॉम्प्ट में नाम से कौशल का संदर्भ दें |
| 2️⃣ | एजेंट को आवश्यक सटीक आर्टिफैक्ट, कोड या डिज़ाइन संदर्भ प्रदान करें |
| 3️⃣ | न्यूनतम इंस्टाल पदचिह्न के लिए `--skill` को प्राथमिकता दें |
| 4️⃣ | पैकेजिंग या रनटाइम समस्याओं को डीबग करने से पहले `डॉक्टर` और `स्मोक` का उपयोग करें |
| 5️⃣ | अब क्यूरेटेड डोमेन इंस्टॉल के रूप में बंडलों का उपयोग करें क्योंकि सभी सात स्टार्टर बंडल पूरी तरह से समर्थित हैं |
| 6️⃣ | एक प्रवाह में खोज + इंस्टालेशन के लिए `find --install --yes` का उपयोग करें |
| 7️⃣ | प्रमाणीकरण, दर सीमा, हस्ताक्षर और सत्यापन एनवी संस्करण के लिए [रनबुक](../ऑपरेशंस/RUNBOOK.md) देखें |