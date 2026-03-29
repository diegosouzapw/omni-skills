# 🔌 Local MCP Sidecar (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**`@omni-skills/server-mcp` के लिए वैकल्पिक स्थानीय-मोड एक्सटेंशन जो क्लाइंट डिटेक्शन, कौशल प्रबंधन और MCP कॉन्फिग जेनरेशन के लिए फ़ाइल सिस्टम-जागरूक टूल जोड़ता है।**---

## 📊 Status

| फ़ीचर | राज्य |
|:--------|:------|
| ✅ केवल पढ़ने योग्य कैटलॉग टूल | क्रियान्वित |
| ✅ फ़ाइल सिस्टम-जागरूक स्थानीय उपकरण | क्रियान्वित |
| ✅ 3 ट्रांसपोर्ट (stdio/stream/sse) | क्रियान्वित |
| ✅ अनुमतिप्राप्त लेखन | क्रियान्वित |
| ✅ पूर्वावलोकन-पहले-लिखने के डिफ़ॉल्ट | क्रियान्वित |
| ✅ ग्राहक-जागरूक एमसीपी कॉन्फिग लेखन | क्रियान्वित |
| ✅ HTTP प्रमाणीकरण + दर सीमित करना | क्रियान्वित |
| ✅ रिलीज़-टाइम हस्ताक्षर और चेकसम | उत्पन्न अभिलेखों के लिए कार्यान्वित किया गया और एपीआई/एमसीपी द्वारा सामने लाया गया |
| 🟡 स्थानीय लेखन-समय हस्ताक्षर प्रवर्तन | अभी तक लागू नहीं हुआ; विश्वसनीय स्थानीय चेकआउट से स्थानीय मोड पूर्वावलोकन और लेखन |
| 🟢 वर्तमान ग्राहक कवरेज | 7 इंस्टाल-सक्षम क्लाइंट, 16 कॉन्फिग-सक्षम क्लाइंट, 33 कॉन्फिग लक्ष्य, 19 कॉन्फिग प्रोफाइल |---

## 🎯 Purpose

स्थानीय मोड मौजूदा रीड-ओनली एमसीपी कैटलॉग सतह के शीर्ष पर**फाइलसिस्टम-अवेयर टूल**जोड़ता है। जब किसी एजेंट को इसकी आवश्यकता हो तो इसका उपयोग करें:

- 🕵️संगत स्थानीय AI क्लाइंट का पता लगाएं
- 📋 स्थापित कौशल का निरीक्षण करें
- 👁️ पूर्वावलोकन कौशल स्थापना या निष्कासन (ड्राई-रन)
- 📦 स्थानीय कौशल स्थापना या निष्कासन लागू करें
- ⚙️ पूर्वावलोकन के बाद एक स्थानीय MCP कॉन्फ़िग फ़ाइल लिखें

यह जानबूझकर दो चिंताओं को अलग करता है:

-**कौशल स्थापना लक्ष्य**
  स्थिर कौशल निर्देशिका वाले ग्राहक जो `install_skills` का उपयोग कर सकते हैं
-**एमसीपी कॉन्फिग लक्ष्य**
  क्लाइंट या आईडीई एक स्थिर दस्तावेजित एमसीपी कॉन्फ़िगरेशन प्रारूप के साथ, भले ही उनके पास कौशल निर्देशिका न हो---

## 🔌 Transports

| परिवहन | प्रोटोकॉल | केस का प्रयोग करें |
|:----------|:---------|:---------|
| `stdio` | पाइप | प्रत्यक्ष ग्राहक एकीकरण |
| `धारा` | स्ट्रीम करने योग्य HTTP | आधुनिक HTTP क्लाइंट |
| `एसएसई` | सर्वर-भेजे गए इवेंट | विरासती ग्राहक |---

## 🚀 Enable Local Mode

### 📦 From repo:

```bash
npm run mcp:local
npm run mcp:stream:local
npm run mcp:sse:local
```

### 📦 Via CLI:

```bash
npm run cli -- mcp stdio --local
npm run cli -- mcp stream --local
npm run cli -- mcp sse --local
npm run cli -- config-mcp --list-targets
npm run cli -- config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp
```

### 📦 From published package:

```bash
npx omni-skills mcp stdio --local
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

> सभी कमांड स्वचालित रूप से `OMNI_SKILLS_MCP_MODE=local` सेट करते हैं।---

## 🛠️ Local Tools

जब स्थानीय मोड सक्षम होता है, तो ये अतिरिक्त उपकरण उपलब्ध हो जाते हैं:

| उपकरण | विवरण | डिफ़ॉल्ट |
|:----|:----|:--------|
| 🕵️ `detect_clients` | एआई क्लाइंट और उनके कौशल/कॉन्फ़िगरेशन पथ के लिए स्कैन करें | — |
| 📋 `सूची_स्थापित_कौशल` | किसी विशिष्ट ग्राहक के लिए स्थापित कौशल का निरीक्षण करें | — |
| 📦 `इंस्टॉल_कौशल` | ग्राहक की कौशल निर्देशिका में कौशल स्थापित करें | 🔍 ड्राई-रन |
| 🗑️ `remove_skills` | क्लाइंट से स्थापित कौशल हटाएं | 🔍 ड्राई-रन |
| ⚙️ `configure_client_mcp` | किसी विशिष्ट क्लाइंट के लिए MCP कॉन्फ़िगरेशन लिखें | 🔍 ड्राई-रन |

> ⚠️ `install_skills`, `remove_skills`, और `configure_client_mcp` डिफ़ॉल्ट रूप से**dry-run**होते हैं जब `dry_run` को हटा दिया जाता है।---

## 🎯 Supported Targets

### 📂 Skills Directories

| ग्राहक | पथ |
|:-------|:-----|
| 🔵 क्लाउड कोड | `~/.क्लाउड/कौशल` |
| 🔵 कर्सर | `~/.कर्सर/कौशल` |
| 🟡 जेमिनी सीएलआई | `~/.gemini/skills` |
| 🟣 एंटीग्रेविटी | `~/.gemini/antigravity/skills` |
| 🟢 किरो | `~/.किरो/कौशल` |
| 🔴 कोडेक्स सीएलआई | `~/.codex/skills` या `$CODEX_HOME/skills` |
| ⚪ ओपनकोड | `<workspace>/.opencode/skills` |

ये 7 लक्ष्य आज एकमात्र प्रथम श्रेणी इंस्टॉल गंतव्य हैं।### ⚙️ MCP Config Files

| लक्ष्य | प्रारूप |
|:-------|:-------|
| `~/.claude/settings.json` | क्लाउड कोड सेटिंग्स JSON |
| `<workspace>/.claude/settings.json` | क्लाउड प्रोजेक्ट सेटिंग्स JSON |
| `~/.claude.json` | लीगेसी क्लाउड JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | क्लाउड डेस्कटॉप JSON (ओएस-विशिष्ट) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<workspace>/.cursor/mcp.json` | कर्सर कार्यक्षेत्र JSON (`mcpServers`) |
| `~/.gemini/settings.json` | जेमिनी उपयोगकर्ता JSON (`mcpServers`) |
| `<workspace>/.gemini/settings.json` | जेमिनी प्रोजेक्ट JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | एंटीग्रेविटी JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | किरो उपयोगकर्ता JSON (`mcpServers`) |
| `<workspace>/.kiro/settings/mcp.json` | किरो प्रोजेक्ट JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<वर्कस्पेस>/.mcp.json` | JSON (`mcpServers`) |
| `<workspace>/opencode.json` | ओपनकोड कार्यक्षेत्र JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | ओपनकोड उपयोगकर्ता JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | क्लाइन JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub सहपायलट CLI JSON (`mcpServers`) |
| `<workspace>/.github/mcp.json` | GitHub कोपायलट रिपोजिटरी JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | किलो सीएलआई उपयोगकर्ता JSON (`mcp`) |
| `<वर्कस्पेस>/kilo.json` | किलो सीएलआई प्रोजेक्ट JSON (`mcp`) |
| `<workspace>/.kilocode/mcp.json` | किलो कोड कार्यक्षेत्र JSON (`mcpServers`) |
| `<वर्कस्पेस>/.continue/mcpServers/omni-skills.yaml` | कार्यस्थान YAML (`mcpServers`) जारी रखें |
| `<workspace>/.junie/mcp/mcp.json` | जूनी प्रोजेक्ट JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | जूनी उपयोगकर्ता JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | विंडसर्फ़ JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | हंस YAML ('एक्सटेंशन') |
| `<workspace>/.zed/settings.json` | जेड वर्कस्पेस JSON (`context_servers`) |
| `<वर्कस्पेस>/.vscode/mcp.json` | JSON ('सर्वर') |
| `~/.config/Code/User/mcp.json` | VS कोड उपयोगकर्ता JSON (`सर्वर`) |
| `~/.config/Code - Insiders/User/mcp.json` | वीएस कोड अंदरूनी सूत्र उपयोगकर्ता JSON (`सर्वर`) |
| `<workspace>/.devcontainer/devcontainer.json` | नेस्टेड डेव कंटेनर JSON (`कस्टमाइज़ेशन.vscode.mcp.servers`) |
| क्लाइंट रूट `mcp.json` | JSON (प्रति-ग्राहक प्रारूप) |

वह साइडकार देता है:

-**16 कॉन्फिग-सक्षम क्लाइंट या आईडीई**
-**33 प्रथम श्रेणी लक्ष्य पथ**
-**19 प्रारूप प्रोफ़ाइल**

वर्तमान प्रथम श्रेणी कॉन्फिग कवरेज विस्तार:

- क्लाउड कोड और क्लाउड डेस्कटॉप
- कर्सर
- वीएस कोड और देव कंटेनर
- जेमिनी सीएलआई
- एंटीग्रेविटी
- किरो
- कोडेक्स सीएलआई
- जारी रखें
- जूनी
- विंडसर्फ
- हंस
- ओपनकोड
- क्लाइन
- गिटहब कोपायलट सीएलआई
-किलो कोड
- जेड

मैनुअल या स्निपेट-केवल उम्मीदवार अभी भी जानबूझकर प्रथम श्रेणी के लेखक सेट से बाहर हैं जब तक कि उनके सार्वजनिक कॉन्फ़िगरेशन अनुबंध पर्याप्त रूप से स्थिर नहीं हो जाते।### 🧭 Expansion Policy

ओमनी स्किल्स अब ग्राहक सहायता को तीन-स्तरीय मॉडल के रूप में मानता है:

1.**इंस्टॉल करने योग्य**
   एक स्थिर कौशल निर्देशिका मौजूद है, इसलिए सीएलआई और साइडकार सीधे कौशल स्थापित कर सकते हैं।
2.**कॉन्फिग-सक्षम**
   एक स्थिर, प्रलेखित MCP कॉन्फ़िगरेशन प्रारूप मौजूद है, इसलिए `config-mcp` प्रथम श्रेणी फ़ाइल का पूर्वावलोकन और लिख सकता है।
3.**मैन्युअल या केवल स्निपेट**
   उत्पाद स्पष्ट रूप से किसी न किसी रूप में एमसीपी का समर्थन करता है, लेकिन सार्वजनिक दस्तावेज़ अभी तक एक सुरक्षित स्वचालित लेखक को उचित नहीं ठहराते हैं।

यही कारण है कि जेटब्रेन एआई असिस्टेंट जैसे क्लाइंट केवल मैनुअल/स्निपेट ही बने रहते हैं, जबकि रू कोड और पोस्टमैन प्रथम श्रेणी लेखक सेट से बाहर रहते हैं जब तक कि उनकी सुरक्षित स्वचालित मर्ज कहानी इस परियोजना के लिए पर्याप्त मजबूत नहीं हो जाती।---

## 🔒 Allowlist Model

स्थानीय साइडकार केवल**स्पष्ट अनुमति सूची**के अंतर्गत लिखता है।### 🟢 Default allowlist:

- `$HOME` के अंतर्गत ज्ञात ग्राहक जड़ें
- विंडसर्फ़ उपयोगकर्ता कॉन्फ़िगरेशन के लिए `~/.codeium`
- GitHub Copilot CLI के लिए `~/.copilot`
- क्लाइन सीएलआई के लिए `~/.cline`
- गूज़ कॉन्फिगरेशन के लिए `~/.config/goose`
- किलो/ओपनकोड सीएलआई कॉन्फ़िगरेशन के लिए `~/.config/kilo` और `~/.config/opencode`
- `$CODEX_HOME` (या `~/.codex` यदि सेट नहीं है)
- वर्तमान कार्यस्थान रूट
- `<वर्कस्पेस>/.एजेंट`
- `<वर्कस्पेस>/.github`
- `<वर्कस्पेस>/.किलोकोड`
- `<वर्कस्पेस>/.ओपनकोड`
- `<वर्कस्पेस>/.जेड`
- `<वर्कस्पेस>/.जारी रखें`
- `<वर्कस्पेस>/.vscode`### ➕ Extend the allowlist:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

---

## ⚙️ Config Writing Examples

### 🔵 Claude Code / Project Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### 🔵 Cursor / Workspace JSON

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 🟡 Gemini CLI / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "headers": {
        "Authorization": "Bearer example"
      }
    }
  },
  "mcp": {
    "allowed": ["omni-skills"]
  }
}
```

### 🟢 Kiro / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "disabledTools": ["install_skills"],
      "autoApprove": ["search_skills", "get_skill"]
    }
  }
}
```

### 🟣 Antigravity

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚪ OpenCode

```json
{
  "mcp": {
    "omni-skills": {
      "type": "local",
      "command": ["/path/to/node", "/path/to/packages/server-mcp/src/server.js"],
      "environment": {
        "OMNI_SKILLS_MCP_MODE": "local"
      },
      "enabled": true
    }
  }
}
```

### 🟢 Cline

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "streamable-http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚫ GitHub Copilot CLI

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "tools": ["*"]
    }
  }
}
```

### 🔴 Kilo Code

```json
{
  "mcp": {
    "omni-skills": {
      "type": "remote",
      "url": "http://127.0.0.1:3334/mcp",
      "enabled": true
    }
  }
}
```

### 🟢 Continue

```yaml
name: 'Omni Skills'
version: '0.1.3'
schema: 'v1'
mcpServers:
  - name: 'omni-skills'
    transport:
      type: 'streamable-http'
      url: 'http://127.0.0.1:3334/mcp'
```

### 🧭 CLI Contract

साइडकार-समर्थित सीएलआई रैपर सीधे JSON-RPC कॉल के बिना MCP कॉन्फिग जनरेशन को सुलभ रखता है:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

डिफ़ॉल्ट व्यवहार केवल पूर्वावलोकन है. `-write` कॉन्फ़िगरेशन को अनुमति सूची के अंतर्गत हल किए गए लक्ष्य पथ पर लागू करता है।### 🌊 Windsurf

```json
{
  "mcpServers": {
    "omni-skills": {
      "serverUrl": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚡ Zed

```json
{
  "context_servers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 💜 VS Code

```json
{
  "servers": {
    "omni-skills": {
      "type": "stdio",
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 📦 Dev Container

```json
{
  "customizations": {
    "vscode": {
      "mcp": {
        "servers": {
          "omni-skills": {
            "type": "stdio",
            "command": "/path/to/node",
            "args": ["/path/to/packages/server-mcp/src/server.js"],
            "env": {
              "OMNI_SKILLS_MCP_MODE": "local"
            }
          }
        }
      }
    }
  }
}
```

### 🔴 Codex TOML

```toml
[mcp_servers.omni-skills]
url = "http://127.0.0.1:3334/mcp"
```

### 📋 Generic stdio

```json
{
  "mcpServers": {
    "omni-skills": {
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 🔵 Claude allow/deny lists

जब आप पास होते हैं तो `configure_client_mcp` टूल क्लाउड-विशिष्ट सेटिंग्स भी लिख सकता है:

- `allowed_mcp_servers`
- `अस्वीकृत_एमसीपी_सर्वर`
- `permissions_deny`
- `सक्षम_सभी_प्रोजेक्ट_एमसीपी_सर्वर`### 💜 VS Code sandboxing

वीएस कोड और डेव कंटेनर लक्ष्यों के लिए, `configure_client_mcp` भी लिख सकता है:

- `सैंडबॉक्स सक्षम`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `देव.वॉच`
- `dev.debug.type`

यह सैंडबॉक्सिंग स्थानीय stdio MCP सर्वर के लिए वर्तमान VS कोड मार्गदर्शन को मैप करता है।### 🧰 Cross-Client Entry Options

`configure_client_mcp` अब समर्थित प्रोफाइलों में समृद्ध प्रविष्टि मेटाडेटा का समर्थन करता है:

- `हेडर`
- `एनव`
- `env_file`
- `सीडब्ल्यूडी`
- `टाइमआउट_एमएस`
- `विवरण`
- `include_tools`
- `बहिष्कृत_टूल्स`
- 'अक्षम'
- 'भरोसा'

प्रोफ़ाइल-विशिष्ट विकल्प:

- क्लाउड: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- मिथुन: `mcp_allowed_servers`, `mcp_excluded_servers`
- किरो: `अक्षम_टूल्स`, `ऑटो_अनुमोदन`
- वीएस कोड और देव कंटेनर: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` पूर्वावलोकन या लागू कॉन्फ़िगरेशन के साथ `रेसिपी` लौटाता है।

ये नुस्खे ग्राहक-जागरूक मार्गदर्शन ब्लॉक हैं, उदाहरण के लिए:

- `क्लाउड एमसीपी ऐड... --स्कोप यूजर|प्रोजेक्ट`
- `मिथुन एमसीपी ऐड... --स्कोप यूजर|प्रोजेक्ट`
- `कोडेक्स एमसीपी ऐड...`
- कर्सर, वीएस कोड, किरो और क्लाउड डेस्कटॉप के लिए मैन्युअल फ़ाइल-संपादन रेसिपी

समग्र रणनीति अब जानबूझकर रूढ़िवादी है:

- जहां संभव हो, कैनोनिकल कॉन्फ़िगरेशन परिवारों के एक छोटे सेट का पुन: उपयोग करें
- विशेष लेखक तभी रखें जब आधिकारिक दस्तावेज़ों को एक अलग आकार की आवश्यकता हो
- अप्रलेखित लक्ष्यों के लिए स्वचालित लेखकों का आविष्कार करने से बचें---

## 🔐 Hosted HTTP Hardening

HTTP ट्रांसपोर्ट कैटलॉग एपीआई के समान एनवी-संचालित नियंत्रणों का समर्थन करता है:

| परिवर्तनीय | उद्देश्य |
|:------|:-------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | बियरर टोकन ऑथ |
| `OMNI_SKILLS_HTTP_API_KEYS` | अल्पविराम से अलग की गई एपीआई कुंजियाँ |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | केवल व्यवस्थापक रनटाइम आत्मनिरीक्षण |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | प्रति विंडो अधिकतम अनुरोध |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | एमएस में दर सीमा विंडो |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | ऑडिट लॉगिंग सक्षम करें |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | किसी फ़ाइल में ऑडिट लॉग लिखें |
| `OMNI_SKILLS_HTTP_ALOWED_ORIGINS` | ब्राउज़र मूल को प्रतिबंधित करें |
| `OMNI_SKILLS_HTTP_ALOWED_IPS` | अनुमत स्रोत आईपी को प्रतिबंधित करें |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | गैर-व्यवस्थापक, गैर-स्वास्थ्य मार्गों के लिए `503` लौटाएँ |

> 🟢 `/healthz` खुला रहता है। सक्षम होने पर `/mcp`, `/sse`, और `/messages` को प्रमाणीकरण की आवश्यकता होती है। `/admin/runtime` को कॉन्फ़िगर होने पर एडमिन टोकन की आवश्यकता होती है।---

## 🌍 Official Docs That Shape Support Decisions

वर्तमान लेखक सेट और मैन्युअल-केवल सीमाओं की जाँच आधिकारिक उत्पाद दस्तावेज़ों के विरुद्ध की गई, जिनमें शामिल हैं:

- एंथ्रोपिक क्लाउड कोड एमसीपी
- ओपनएआई कोडेक्स सीएलआई और ओपनएआई डॉक्स एमसीपी
- कर्सर एमसीपी दस्तावेज़
- एमसीपी दस्तावेज़ जारी रखें
- किरो एमसीपी डॉक्स
- ओपनकोड एमसीपी डॉक्स
- क्लाइन एमसीपी डॉक्स
- किलो कोड एमसीपी डॉक्स
- GitHub Copilot CLI डॉक्स
- जेड एमसीपी डॉक्स
- वीएस कोड एमसीपी दस्तावेज़
- जेटब्रेन्स एआई असिस्टेंट एमसीपी डॉक्स

उन दस्तावेज़ों के कारण ही कुछ ग्राहकों को प्रथम श्रेणी के स्वचालित लेखक प्राप्त होते हैं जबकि अन्य अभी केवल स्निपेट ही बने रहते हैं।