# 🔌 Local MCP Sidecar (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**“@omni-skills/server-mcp”的可选本地模式扩展，添加了用于客户端检测、技能管理和 MCP 配置生成的文件系统感知工具。**---

## 📊 Status

|特色|状态|
|:--------|:------|
| ✅ 只读目录工具 |已实施 |
| ✅ 文件系统感知的本地工具 |已实施 |
| ✅ 3 种传输方式（stdio/stream/sse）|已实施 |
| ✅ 列入白名单的写入 |已实施 |
| ✅ 写入前预览默认值 |已实施 |
| ✅ 客户端感知的 MCP 配置编写 |已实施 |
| ✅ HTTP 身份验证 + 速率限制 |已实施 |
| ✅ 发布时签名和校验和 |针对生成的档案实施并由 API/MCP 呈现 |
| 🟡 本地写入时签名强制执行 |尚未强制执行；本地模式从受信任的本地结帐预览和写入|
| 🟢 当前客户覆盖范围 | 7 个可安装的客户端、16 个可配置的客户端、33 个配置目标、19 个配置文件 |---

## 🎯 Purpose

本地模式在现有只读 MCP 目录表面之上添加了**文件系统感知工具**。当代理需要执行以下操作时使用它：

- 🕵️检测兼容的本地AI客户端
- 📋检查已安装的技能
- 👁️预览技能安装或删除（试运行）
- 📦应用本地技能安装或删除
- ⚙️预览后写入本地MCP配置文件

它故意区分了两个问题：

-**技能安装目标**
  具有可以使用“install_skills”的稳定技能目录的客户端
-**MCP 配置目标**
  具有稳定记录的 MCP 配置格式的客户端或 IDE，即使它们没有技能目录---

## 🔌 Transports

|交通 |协议|使用案例|
|:----------|:---------|:---------|
| `stdio` |管材|直接客户端集成 |
| `流` |流式 HTTP |现代 HTTP 客户端 |
| `sse` |服务器发送的事件 |旧客户 |---

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

> 所有命令都会自动设置 `OMNI_SKILLS_MCP_MODE=local`。---

## 🛠️ Local Tools

启用本地模式后，这些额外的工具将可用：

|工具|描述 |默认 |
|:-----|:------------|:--------|
| 🕵️ `检测客户端` |扫描 AI 客户端及其技能/配置路径 | — |
| 📋 `list_installed_skills` |检查特定客户已安装的技能 | — |
| 📦 `安装技能` |将技能安装到客户的技能目录中 | 🔍 试运行 |
| 🗑️ `remove_skills` |删除客户端已安装的技能 | 🔍 试运行 |
| ⚙️ `configure_client_mcp` |为特定客户端编写 MCP 配置 | 🔍 试运行 |

> ⚠️ 当省略 `dry_run` 时，`install_skills`、`remove_skills` 和 `configure_client_mcp` 默认为**dry-run**。---

## 🎯 Supported Targets

### 📂 Skills Directories

|客户|路径|
|:--------|:-----|
| 🔵 克劳德代码 | `~/.claude/技能` |
| 🔵 光标 | `~/.cursor/skills` |
| 🟡 Gemini CLI | `~/.gemini/skills` |
| 🟣 反重力 | `~/.gemini/反重力/技能` |
| 🟢 基罗 | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` 或 `$CODEX_HOME/skills` |
| ⚪ 开放代码 | `<工作空间>/.opencode/skills` |

这 7 个目标是当今唯一一流的安装目的地。### ⚙️ MCP Config Files

|目标|格式|
|:--------|:--------|
| `~/.claude/settings.json` |克劳德代码设置 JSON |
| `<工作空间>/.claude/settings.json` | Claude 项目设置 JSON |
| `~/.claude.json` |旧版 Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude 桌面 JSON（特定于操作系统）|
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<工作空间>/.cursor/mcp.json` |光标工作区 JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini 用户 JSON (`mcpServers`) |
| `<工作空间>/.gemini/settings.json` | Gemini 项目 JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` |反重力 JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro 用户 JSON (`mcpServers`) |
| `<工作空间>/.kiro/settings/mcp.json` | Kiro 项目 JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<工作空间>/.mcp.json` | JSON (`mcpServers`) |
| `<工作空间>/opencode.json` | OpenCode 工作区 JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode 用户 JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON（`mcpServers`）|
| `<工作空间>/.github/mcp.json` | GitHub Copilot 存储库 JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI 用户 JSON (`mcp`) |
| `<工作空间>/kilo.json` | Kilo CLI 项目 JSON (`mcp`) |
| `<工作空间>/.kilocode/mcp.json` | Kilo 代码工作区 JSON (`mcpServers`) |
| `<工作空间>/.continue/mcpServers/omni-skills.yaml` |继续工作区 YAML (`mcpServers`) |
| `<工作空间>/.junie/mcp/mcp.json` | Junie 项目 JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie 用户 JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML（`扩展`）|
| `<工作空间>/.zed/settings.json` | Zed 工作区 JSON (`context_servers`) |
| `<工作空间>/.vscode/mcp.json` | JSON（`服务器`）|
| `~/.config/Code/User/mcp.json` | VS Code 用户 JSON（`服务器`）|
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insider 用户 JSON（`服务器`）|
| `<工作空间>/.devcontainer/devcontainer.json` |嵌套开发容器 JSON (`customizations.vscode.mcp.servers`) |
|客户端根 `mcp.json` | JSON（每个客户端格式）|

这给出了边车：

-**16 个可配置的客户端或 IDE**
-**33条一流目标路径**
-**19 种格式配置文件**

当前一流的配置覆盖范围：

- 克劳德代码和克劳德桌面
- 光标
- VS Code 和开发容器
- 双子座 CLI
- 反重力
- 基罗
- 法典 CLI
- 继续
- 朱妮
- 风帆冲浪
- 鹅
- 开放代码
——克莱恩
- GitHub 副驾驶 CLI
- 基洛代码
- 泽德

手动或仅片段候选者仍然有意地处于一流编写者集之外，直到他们的公共配置合同足够稳定。### 🧭 Expansion Policy

Omni Skills 现在将客户支持视为三级模型：

1.**可安装**
   存在稳定的技能目录，因此 CLI 和 sidecar 可以直接安装技能。
2.**可配置**
   存在稳定的、有记录的 MCP 配置格式，因此“config-mcp”可以预览和写入一流的文件。
3.**仅手册或片段**
   该产品显然以某种形式支持 MCP，但公共文档尚未证明安全的自动编写器是合理的。

这就是为什么 JetBrains AI Assistant 之类的客户端仍然仅使用手动/片段，而 Roo Code 和 Postman 则处于一流编写器之外，直到它们的安全自动合并故事足够强大以支持该项目。---

## 🔒 Allowlist Model

本地 sidecar 仅在**显式允许列表**下写入。### 🟢 Default allowlist:

- `$HOME` 下的已知客户端根目录
- Windsurf 用户配置的 `~/.codeium`
- GitHub Copilot CLI 的“~/.copilot”
- Cline CLI 的“~/.cline”
- Goose 配置的 `~/.config/goose`
- Kilo/OpenCode CLI 配置的 `~/.config/kilo` 和 `~/.config/opencode`
- `$CODEX_HOME` （或 `~/.codex` 如果未设置）
- 当前工作空间根目录
- `<工作空间>/.agents`
- `<工作空间>/.github`
- `<工作空间>/.kilocode`
- `<工作空间>/.opencode`
- `<工作空间>/.zed`
- `<工作空间>/.继续`
- `<工作空间>/.vscode`### ➕ Extend the allowlist:

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

sidecar 支持的 CLI 包装器使 MCP 配置生成可访问，无需直接 JSON-RPC 调用：```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

默认行为仅限预览。 `--write` 将配置应用于白名单下已解析的目标路径。### 🌊 Windsurf

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

`configure_client_mcp` 工具还可以在您通过时写入 Claude 特定的设置：

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

对于 VS Code 和 Dev Container 目标，`configure_client_mcp` 还可以编写：

- `沙盒已启用`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `开发观察`
- `dev.debug.type`

这映射到当前 VS Code 对本地 stdio MCP 服务器进行沙箱处理的指南。### 🧰 Cross-Client Entry Options

`configure_client_mcp` 现在支持跨支持的配置文件更丰富的条目元数据：

- `标题`
- `env`
- `env_file`
- `cwd`
- `timeout_ms`
- `描述`
- `include_tools`
- `排除工具`
- `禁用`
- `信任`

特定于配置文件的选项：

- 克劳德：`allowed_mcp_servers`、`denied_mcp_servers`、`permissions_deny`、`enable_all_project_mcp_servers`
- 双子座：`mcp_allowed_servers`、`mcp_excluded_servers`
- Kiro：`disabled_tools`、`auto_approve`
- VS Code 和开发容器：`dev_watch`、`dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` 在预览或应用的配置旁边返回 `recipes`。

这些食谱是客户感知的指导块，例如：

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp 添加...`
- Cursor、VS Code、Kiro 和 Claude Desktop 的手动文件编辑方法

现在的总体策略是有意保守的：

- 尽可能重用一小组规范配置系列
- 仅当官方文档需要独特的形状时才保留定制作家
- 避免为无证目标发明自动编写器---

## 🔐 Hosted HTTP Hardening

HTTP 传输支持与目录 API 相同的环境驱动控件：

|变量|目的|
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` |不记名令牌身份验证 |
| `OMNI_SKILLS_HTTP_API_KEYS` |以逗号分隔的 API 密钥 |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` |仅限管理员运行时自省 |
| `OMNI_SKILLS_RATE_LIMIT_MAX` |每个窗口的最大请求数 |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` |速率限制窗口（以毫秒为单位）|
| `OMNI_SKILLS_HTTP_AUDIT_LOG` |启用审核日志记录 |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` |将审核日志写入文件 |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` |限制浏览器来源 |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` |限制允许的源IP |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` |对于非管理、非健康路线返回“503” |

> 🟢 `/healthz` 保持开放。 “/mcp”、“/sse”和“/messages”在启用时需要身份验证。配置时“/admin/runtime”需要管理令牌。---

## 🌍 Official Docs That Shape Support Decisions

当前的编写器集和仅手动边界已根据官方产品文档进行检查，包括：

- 人类克劳德代码 MCP
- OpenAI Codex CLI 和 OpenAI Docs MCP
- 光标 MCP 文档
- 继续 MCP 文档
- Kiro MCP 文档
- OpenCode MCP 文档
- 克莱恩 MCP 文档
- Kilo 代码 MCP 文档
- GitHub Copilot CLI 文档
- Zed MCP 文档
- VS Code MCP 文档
- JetBrains AI Assistant MCP 文档

这些文档就是为什么一些客户获得一流的自动编写器，而另一些客户目前仍仅使用片段的原因。