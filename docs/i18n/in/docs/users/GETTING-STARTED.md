# 🚀 Getting Started (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**कौशल स्थापित करें, सेटअप सत्यापित करें, और 2 मिनट से कम समय में अपना पहला एआई कौशल शुरू करें।**---

## 📊 Current Catalog Status

| मीट्रिक | मूल्य |
|:-------|:------|
| प्रकाशित कौशल |**32**आर्किटेक्चर, डिज़ाइन, सुरक्षा, डेवऑप्स, एआई-इंजीनियरिंग और अन्य सहित 15 सक्रिय श्रेणियों में |
| परिभाषित बंडल |**7**(सभी पूरी तरह से प्रकाशित कौशल द्वारा समर्थित) |
| इंस्टॉल-सक्षम ग्राहक |**7**(क्लाउड कोड, कर्सर, जेमिनी सीएलआई, कोडेक्स सीएलआई, किरो, एंटीग्रेविटी, ओपनकोड) |
| एमसीपी कॉन्फिग-सक्षम क्लाइंट |**16**33 प्रथम श्रेणी एमसीपी कॉन्फ़िगरेशन लक्ष्यों में |---

## 📦 Step 1 — Install

### त्वरित प्रारंभ

```bash
npx omni-skills
```

एक इंटरैक्टिव टर्मिनल में, यह अब चुपचाप क्लाइंट मानने के बजाय निर्देशित इंस्टॉलर को खोलता है।### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

यह इंस्टॉल, डिस्कवरी, एमसीपी, एपीआई और ए2ए स्टार्टअप के लिए ब्रांडेड टर्मिनल हब खोलता है।### 🎯 Default Install (Antigravity Outside TTY)

TTY के बाहर, नो-आर्ग इंस्टॉलर अभी भी `~/.gemini/antigravity/skills` पर डिफॉल्ट होता है।### 🖱️ Focused Install — One Skill, One Client

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

> ✅ स्टार्टर बंडल अब पूरी तरह से समर्थित हैं, जिनमें `डेवोप्स` और `एआई-इंजीनियर` शामिल हैं।### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

जांचें कि कौशल सही जगह पर हैं:```bash
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

या अंतर्निहित निदान का उपयोग करें:```bash
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

ग्राहकों का पता लगाने, कौशल स्थापित करने/निकालने और एमसीपी कॉन्फ़िगरेशन लिखने के लिए एजेंटों को फ़ाइल सिस्टम उपकरण देता है:```bash
npx omni-skills mcp stream --local
```

आप उन ग्राहकों के लिए भी एमसीपी कॉन्फ़िगर कर सकते हैं जो कौशल-स्थापना लक्ष्य नहीं हैं:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

कौशल कैटलॉग को केवल पढ़ने योग्य HTTP API के रूप में प्रदर्शित करता है:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

एजेंट-टू-एजेंट खोज, अनुशंसा, इंस्टॉल योजना, मतदान और स्ट्रीमिंग:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

एक कौशल एक संरचित मार्कडाउन प्लेबुक (`SKILL.md`) है जो एक AI एजेंट को देता है:

| घटक | उद्देश्य |
|:-------|:--------|
| 📋**फ्रंटमैटर**| मशीन-पठनीय मेटाडेटा (नाम, श्रेणी, टैग, उपकरण, जोखिम) |
| 📝**शरीर**| कार्य-विशिष्ट निर्देश, चरण, रेलिंग और उदाहरण |
| 📚**संदर्भ**| निष्पादन के दौरान एजेंट सहायक दस्तावेज़ों से परामर्श कर सकता है |
| 🎨**संपत्ति**| प्रतीक, छवियाँ, या अन्य पैकेज्ड संसाधन |---

## ➡️ Next Steps

| डॉक्टर | आप क्या सीखेंगे |
|:----|:----|
| 🧭 [सीएलआई यूजर गाइड](सीएलआई-यूजर-गाइड.एमडी) | इंस्टाल, रनटाइम, कॉन्फ़िगरेशन और डायग्नोस्टिक्स के लिए पूर्ण कमांड संदर्भ |
| 📗 [उपयोग मार्गदर्शिका](USAGE.md) | सभी सीएलआई कमांड, प्रॉम्प्ट पैटर्न और रनटाइम मोड |
| 📦 [बंडल](बंडल.एमडी) | क्यूरेटेड कौशल संग्रह और उनकी उपलब्धता |
| 📚 [कैटलॉग](../CATALOG.md) | प्रकाशित कौशल की स्वतः निर्मित सूची |
| 📖 [डॉक्यूमेंटेशन हब](../README.md) | पूर्ण दस्तावेज़ीकरण मानचित्र |
| 🔧 [सिस्टम रनबुक](../ऑपरेशंस/RUNBOOK.md) | परिचालन संदर्भ |