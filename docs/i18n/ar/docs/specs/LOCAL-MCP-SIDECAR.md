# 🔌 Local MCP Sidecar (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**ملحق الوضع المحلي الاختياري لـ `@omni-skills/server-mcp` الذي يضيف أدوات معرفة بنظام الملفات لاكتشاف العميل وإدارة المهارات وإنشاء تكوين MCP.**---

## 📊 Status

| ميزة | الدولة |
|:--------|:-----|
| ✅ أدوات الكتالوج للقراءة فقط | تم التنفيذ |
| ✅ أدوات محلية مدركة لنظام الملفات | تم التنفيذ |
| ✅ 3 وسائل نقل (stdio/stream/sse) | تم التنفيذ |
| ✅ يكتب في القائمة المسموح بها | تم التنفيذ |
| ✅ معاينة الإعدادات الافتراضية قبل الكتابة | تم التنفيذ |
| ✅ كتابة تكوين MCP المدرك للعميل | تم التنفيذ |
| ✅ مصادقة HTTP + تحديد المعدل | تم التنفيذ |
| ✅ توقيعات وقت الإصدار والمجاميع الاختبارية | تم تنفيذه للأرشيفات التي تم إنشاؤها وظهرت بواسطة API/MCP |
| 🟡 تنفيذ التوقيع المحلي في وقت الكتابة | لم ينفذ بعد؛ معاينة الوضع المحلي والكتابة من الخروج المحلي الموثوق به |
| 🟢 تغطية العميل الحالية | 7 عملاء قادرين على التثبيت، و16 عميلًا قادرين على التكوين، و33 هدفًا للتكوين، و19 ملف تعريف للتكوين |---

## 🎯 Purpose

يضيف الوضع المحلي**أدوات تتعرف على نظام الملفات**أعلى سطح كتالوج MCP الحالي للقراءة فقط. استخدمه عندما يحتاج الوكيل إلى:

- 🕵️ اكتشاف عملاء الذكاء الاصطناعي المحليين المتوافقين
- 📋 فحص المهارات المثبتة
- 👁️ مهارة المعاينة التثبيت أو الإزالة (التشغيل الجاف)
- 📦 تطبيق المهارة المحلية التثبيت أو الإزالة
- ⚙️ اكتب ملف تكوين MCP محليًا بعد المعاينة

إنه يفصل عمدا بين شاغلين:

-**أهداف تثبيت المهارات**
  العملاء الذين لديهم دليل مهارات ثابت يمكنهم استخدام "install_skills".
-**أهداف تكوين MCP**
  العملاء أو بيئات التطوير المتكاملة ذات تنسيق تكوين MCP الموثق والمستقر، حتى لو لم يكن لديهم دليل مهارات---

## 🔌 Transports

| النقل | البروتوكول | حالة الاستخدام |
|:----------|:--------|:---------|
| `stdio` | الأنابيب | التكامل المباشر مع العميل |
| `الدفق` | HTTP قابل للتدفق | عملاء HTTP الحديثون |
| `sse` | الأحداث المرسلة من الخادم | العملاء القدامى |---

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

> يتم تعيين جميع الأوامر `OMNI_SKILLS_MCP_MODE=local` تلقائيًا.---

## 🛠️ Local Tools

عند تمكين الوضع المحلي، تصبح هذه الأدوات الإضافية متاحة:

| أداة | الوصف | الافتراضي |
|:-----|:-----------|:--------|
| 🕵️ `كشف_العملاء` | البحث عن عملاء الذكاء الاصطناعي ومسارات مهاراتهم/تكوينهم | — |
| 📋 `قائمة_المهارات_المثبتة` | فحص المهارات المثبتة لعميل معين | — |
| 📦 `مهارات_التثبيت` | قم بتثبيت المهارات في دليل مهارات العميل | 🔍 الجري الجاف |
| 🗑️ `إزالة_المهارات` | إزالة المهارات المثبتة من العميل | 🔍 الجري الجاف |
| ⚙️ `configure_client_mcp` | اكتب تكوين MCP لعميل معين | 🔍 الجري الجاف |

> ⚠️ `install_skills` و`remove_skills` و`configure_client_mcp` الافتراضي هو**dry_run**عند حذف `dry_run`.---

## 🎯 Supported Targets

### 📂 Skills Directories

| العميل | المسار |
|:-------|:----|
| 🔵 كلود كود | `~/.كلود/مهارات` |
| 🔵 المؤشر | `~/.cursor/skills` |
| 🟡 برج الجوزاء CLI | `~/.gemini/skills` |
| 🟣 مضاد الجاذبية | `~/.gemini/antigravity/skills` |
| 🟢 كيرو | `~/.kiro/skills` |
| 🔴 كوديكس CLI | `~/.codex/skills` أو `$CODEX_HOME/skills` |
| ⚪ الكود المفتوح | `<مساحة العمل>/.opencode/skills` |

هذه الأهداف السبعة هي وجهات التثبيت الوحيدة من الدرجة الأولى اليوم.### ⚙️ MCP Config Files

| الهدف | تنسيق |
|:-------|:------|
| `~/.claude/settings.json` | إعدادات كود كلود JSON |
| `<مساحة العمل>/.claude/settings.json` | إعدادات مشروع كلود JSON |
| `~/.claude.json` | ليجاسي كلود JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/clude_desktop_config.json` | Claude Desktop JSON (خاص بنظام التشغيل) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<مساحة العمل>/.cursor/mcp.json` | مساحة عمل المؤشر JSON (`mcpServers`) |
| `~/.gemini/settings.json` | مستخدم الجوزاء JSON (`mcpServers`) |
| `<مساحة العمل>/.gemini/settings.json` | مشروع الجوزاء JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | مكافحة الجاذبية JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | مستخدم كيرو JSON (`mcpServers`) |
| `<مساحة العمل>/.kiro/settings/mcp.json` | مشروع كيرو JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<مساحة العمل>/.mcp.json` | JSON (`mcpServers`) |
| `<مساحة العمل>/opencode.json` | مساحة عمل OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | مستخدم OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | كلاين JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<مساحة العمل>/.github/mcp.json` | مستودع GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | مستخدم Kilo CLI JSON (`mcp`) |
| `<مساحة العمل>/kilo.json` | مشروع Kilo CLI JSON (`mcp`) |
| `<مساحة العمل>/.kilocode/mcp.json` | مساحة عمل كيلو كود JSON (`mcpServers`) |
| `<مساحة العمل>/.continue/mcpServers/omni-skills.yaml` | متابعة مساحة العمل YAML (`mcpServers`) |
| `<مساحة العمل>/.junie/mcp/mcp.json` | مشروع Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | مستخدم Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | غوس YAML (`الامتدادات`) |
| `<مساحة العمل>/.zed/settings.json` | مساحة عمل Zed JSON (`خوادم_السياق`) |
| `<مساحة العمل>/.vscode/mcp.json` | JSON (`الخوادم`) |
| `~/.config/Code/User/mcp.json` | مستخدم VS Code JSON ("الخوادم") |
| `~/.config/Code - Insiders/User/mcp.json` | مستخدم VS Code Insiders JSON (`الخوادم`) |
| `<مساحة العمل>/.devcontainer/devcontainer.json` | حاوية التطوير المتداخلة JSON (`customizations.vscode.mcp.servers`) |
| جذر العميل `mcp.json` | JSON (تنسيق لكل عميل) |

وهذا يعطي السيارة الجانبية:

-**16 عميلاً أو بيئة تطوير متكاملة (IDEs) قادرة على التكوين**
-**33 مسارًا مستهدفًا من الدرجة الأولى**
-**19 ملفًا تعريفيًا للتنسيق**

تمتد تغطية التكوين الحالية من الدرجة الأولى:

- كلود كود وكلود ديسك توب
- المؤشر
- كود VS وحاويات التطوير
- الجوزاء CLI
- مضاد الجاذبية
- كيرو
- كوديكس كلي
- تابع
- جوني
- ركوب الأمواج
- أوزة
- الكود المفتوح
- كلاين
- جيثب مساعد الطيار CLI
- كود الكيلو
- زيد

لا يزال المرشحون اليدويون أو المقتطفون فقط خارج مجموعة كاتب الدرجة الأولى عمدًا حتى تصبح عقود التكوين العامة الخاصة بهم مستقرة بدرجة كافية.### 🧭 Expansion Policy

تتعامل Omni Skills الآن مع دعم العملاء كنموذج من ثلاثة مستويات:

1.**إمكانية التثبيت**
   يوجد دليل مستقر للمهارات، بحيث يمكن لواجهة سطر الأوامر (CLI) والعربة الجانبية تثبيت المهارات مباشرة.
2.**قادرة على التكوين**
   يوجد تنسيق تكوين MCP ثابت وموثق، لذلك يمكن لـ config-mcp معاينة ملف من الدرجة الأولى وكتابته.
3.**يدويًا أو مقتطفًا فقط**
   من الواضح أن المنتج يدعم MCP بشكل ما، لكن المستندات العامة لا تبرر وجود كاتب تلقائي آمن حتى الآن.

وهذا هو السبب وراء بقاء عملاء مثل JetBrains AI Assistant يدويًا/مقتطفًا فقط، بينما يظل Roo Code وPostman خارج مجموعة الكاتب من الدرجة الأولى حتى تصبح قصة الدمج التلقائي الآمنة قوية بما يكفي لهذا المشروع.---

## 🔒 Allowlist Model

لا يكتب الجزء الجانبي المحلي إلا ضمن**القائمة المسموح بها الصريحة**.### 🟢 Default allowlist:

- جذور العميل المعروفة ضمن `$HOME`
- `~/.codeium` لتكوين مستخدم Windsurf
- `~/.copilot` لـ GitHub Copilot CLI
- `~/.cline` لـ Cline CLI
- `~/.config/goose` لتكوين Goose
- `~/.config/kilo` و`~/.config/opencode` لتكوين Kilo/OpenCode CLI
- `$CODEX_HOME` (أو `~/.codex` إذا لم يتم تعيينه)
- جذر مساحة العمل الحالية
- `<مساحة العمل>/.agents`
- `<مساحة العمل>/.github`
- `<مساحة العمل>/.kilocode`
- `<مساحة العمل>/.opencode`
- `<مساحة العمل>/.zed`
- `<مساحة العمل>/.continue`
- `<مساحة العمل>/.vscode`### ➕ Extend the allowlist:

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

يحافظ برنامج تضمين CLI المدعوم من Sidecar على إمكانية الوصول إلى إنشاء تكوين MCP دون مكالمات JSON-RPC المباشرة:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

السلوك الافتراضي هو للمعاينة فقط. يطبق `--write` التكوين على المسار الهدف الذي تم حله ضمن القائمة المسموح بها.### 🌊 Windsurf

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

يمكن لأداة `configure_client_mcp` أيضًا كتابة الإعدادات الخاصة بكلود عند اجتيازك:

- `allow_mcp_servers`
- "تم رفض خوادم_mcp".
- "رفض_الأذونات".
- `تمكين_جميع_المشروع_mcp_servers`### 💜 VS Code sandboxing

بالنسبة لأهداف VS Code وDev Container، يمكن لـ `configure_client_mcp` أيضًا كتابة:

- "وضع الحماية ممكّن".
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

يؤدي هذا إلى تعيين إرشادات VS Code الحالية لخوادم stdio MCP المحلية في وضع الحماية.### 🧰 Cross-Client Entry Options

يدعم `configure_client_mcp` الآن بيانات تعريف الإدخال الأكثر ثراءً عبر الملفات الشخصية المدعومة:

- "العناوين".
- `بيئة`
- "ملف_env".
- "كود".
- `timeout_ms`
- "الوصف".
- `تشمل_الأدوات`
- `استبعاد_الأدوات`
- "معطل".
- "الثقة".

الخيارات الخاصة بالملف الشخصي:

- كلود: `مسموح_mcp_servers`، ``مرفوض_mcp_servers``، ``رفض_الأذونات``، ``تمكين_كل_مشروع_mcp_servers``
- الجوزاء: `mcp_allowed_servers`، `mcp_excluded_servers`
- كيرو: "أدوات_معطلة"، "الموافقة_التلقائية".
- كود VS وحاويات التطوير: `dev_watch`، `dev_debug_type`### 📋 Generated Recipes

يعرض `configure_client_mcp` الوصفات بجانب المعاينة أو التكوين المطبق.

هذه الوصفات عبارة عن كتل إرشادية مدركة للعميل، على سبيل المثال:

- `claude mcp add... --scope user|project`
- `gemini mcp add... --scope user|project`
- `إضافة المخطوطة mcp ...`
- وصفات يدوية لتحرير الملفات لـ Cursor وVS Code وKiro وClaude Desktop

أصبحت الإستراتيجية الشاملة الآن متحفظة عمدًا:

- إعادة استخدام مجموعة صغيرة من عائلات التكوين الأساسية حيثما أمكن ذلك
- احتفظ بالكتابة المخصصة فقط عندما تتطلب المستندات الرسمية شكلاً مميزًا
- تجنب اختراع كاتبات آلية للأهداف غير الموثقة---

## 🔐 Hosted HTTP Hardening

تدعم عمليات نقل HTTP نفس عناصر التحكم المستندة إلى البيئة مثل واجهة برمجة تطبيقات الكتالوج:

| متغير | الغرض |
|:---------|:-------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | مصادقة الرمز المميز |
| `OMNI_SKILLS_HTTP_API_KEYS` | مفاتيح API مفصولة بفواصل |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | استبطان وقت التشغيل للمسؤول فقط |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | الحد الأقصى للطلبات لكل نافذة |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | نافذة حد المعدل بالمللي ثانية |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | تمكين تسجيل التدقيق |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | كتابة سجل التدقيق إلى ملف |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | تقييد أصول المتصفح |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | تقييد عناوين IP المصدر المسموح بها |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | قم بإرجاع "503" للمسارات غير الإدارية وغير الصحية |

> 🟢 يظل `/healthz` مفتوحًا. يتطلب `/mcp`، و`/sse`، و`/messages` مصادقة عند تمكينها. يتطلب `/admin/runtime` رمز المشرف عند تكوينه.---

## 🌍 Official Docs That Shape Support Decisions

تم فحص مجموعة الكاتب الحالية والحدود اليدوية فقط مقابل مستندات المنتج الرسمية، بما في ذلك:

- الأنثروبي كلود كود MCP
- OpenAI Codex CLI وOpenAI Docs MCP
- مستندات المؤشر MCP
- تابع مستندات MCP
- مستندات كيرو MCP
- مستندات OpenCode MCP
- مستندات كلاين MCP
- مستندات كيلو كود MCP
- مستندات GitHub Copilot CLI
- مستندات Zed MCP
- مستندات VS Code MCP
- مستندات JetBrains AI Assistant MCP

هذه المستندات هي السبب وراء حصول بعض العملاء على كاتبين تلقائيين من الدرجة الأولى بينما يظل البعض الآخر مقتطفًا فقط في الوقت الحالي.