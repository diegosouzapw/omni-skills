# Client Support Matrix (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


本文档通过三个输入跟踪 Omni Skills 的实际客户端界面：

1. `9router` 仪表板清单位于 `/home/diegosouzapw/dev/proxys/9router`
2. 当前 Omni Skills MCP sidecar 实现
3. 每个客户端或IDE的当前官方文档

它是决定哪些客户端获得一流的“config-mcp”支持、哪些客户端仅需要手动支持以及哪些客户端只是候选者的工作真相来源。---

## Scope

该矩阵是关于**MCP**的客户端配置。

它不等于：

- 技能安装支持
- API兼容性
- A2A 支持
- ACP或其他非MCP协议

矩阵中的某些产品使用 MCP，但没有有意义的“技能目录”，因此它们仅获得配置目标支持。---

## 9router Inventory

“9router”仪表板当前对这些 CLI 工具或 IDE 客户端进行分组：

——克劳德·代码
- OpenAI 法典
- 工厂机器人
- 开爪
- 光标
——克莱恩
- 基洛代码
- 继续
- 反重力
- GitHub 副驾驶
- 开放代码
- 基罗人工智能

本地来源：

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

这些客户现在通过“config-mcp --target ...”在 Omni Skills 中拥有稳定、明确的故事。

当前实施总数：

-**7 个可安装的客户端**
-**16 个可配置的客户端**
-**33 个一流的配置目标**
-**19 个配置文件**

|客户|状态 |配置目标 |笔记|
|:--------|:--------|:---------------|:--------|
|克劳德·代码 | ✅ 头等舱 | `工作空间`、`克劳德项目`、`克劳德用户设置`、`克劳德用户`、`克劳德用户遗产`、`克劳德桌面` |使用 Claude 特定的允许/拒绝控件输入“mcpServers”配置 |
|光标| ✅ 头等舱 | `光标工作空间`、`光标用户` | JSON `mcpServers` 目标 |
| VS 代码 | ✅ 头等舱 | `vscode`、`vscode-user`、`vscode-insiders-user`、`devcontainer` |使用 `servers` 根 |
|双子座 CLI | ✅ 头等舱 | `gemini-用户`、`gemini-工作区` | JSON 设置 + 全局 MCP 允许/排除控件 |
|反重力| ✅ 头等舱 | `反重力用户` | JSON `mcpServers` 目标 |
|基罗 | ✅ 头等舱 | `kiro-user`、`kiro-workspace`、`kiro-user-legacy` | Kiro 特定的禁用/自动批准字段 |
|法典 CLI | ✅ 头等舱 | `codex-用户` | TOML `mcp_servers` 表 |
|继续 | ✅ 头等舱 | `继续工作区` |专用 YAML 服务器文档 |
|风帆冲浪 | ✅ 头等舱 | `风帆冲浪用户` |带有“serverUrl”条目的 JSON“mcpServers”目标 |
|开放代码 | ✅ 头等舱 | `opencode-工作空间`、`opencode-用户` |使用顶级 `mcp` 的官方 `opencode.json` / 用户配置 |
|克莱恩 | ✅ 头等舱 | `cline 用户` | `cline_mcp_settings.json` 和 `mcpServers` |
| GitHub 副驾驶 CLI | ✅ 头等舱 | `copilot-user`, `copilot-repo` | `mcp-config.json` 或存储库范围的 `.github/mcp.json` |
|基洛代码 | ✅ 头等舱 | `千用户`、`千项目`、`千工作空间` | Kilo CLI 使用 `kilo.json`；工作区集成使用 `.kilocode/mcp.json` |
|泽德 | ✅ 头等舱 | `zed 工作区` | `.zed/settings.json` 和 `context_servers` |
|朱妮 | ✅ 头等舱 | `junie-项目`、`junie-用户` |使用 `mcpServers` 的 `.junie/mcp/mcp.json` 或 `~/.junie/mcp/mcp.json` |
|鹅| ✅ 头等舱 | `鹅用户` | `~/.config/goose/config.yaml` 使用顶级 `extensions` 对象进行持久 MCP 扩展 |---

## Current Gaps

这些来自“9router”的客户**还**尚未成为 Omni Skills 中的一流作家目标：

|客户|当前状态 |为什么 |
|:--------|:--------------|:----|
|工厂机器人 | ⚠️ 仅限手动/自定义 |在此过程中，在主要文档中未找到稳定的公共 MCP 配置形状 |
|开爪| ⚠️ 仅限手动/自定义 |与 Factory Droid 相同的问题 |

sidecar 仍然可以与“--file”或高级用户的自定义路径一起使用，但 Omni Skills 不应该在没有稳定的公共配置文档的情况下发明一流的编写器。

现在可以更好地理解两个相邻的产品，但仍然故意放弃一流的自动写入器：

|客户|当前状态 |为什么 |
|:--------|:--------------|:----|
| JetBrains 人工智能助手 | 🟡 手册/片段 |官方 MCP 支持存在，但记录的工作流程是 UI 驱动/导入驱动的，而不是稳定的公共文件目标 |
|邮差 | 🟡 手册/片段 |存在官方 MCP 支持，但配置是在产品 UX 内部管理的，而不是稳定的公共文件目标 |
|袋鼠代码 | 🟡 候选人 |公共 MCP 文档存在，但在添加编写器之前仍需要确认强大的跨平台文件路径合约 |---

## Support Policy

Omni Skills 现在遵循此规则集：

1.**可安装**（如果存在稳定的技能目录）。
2.**可配置**（如果存在稳定的公共 MCP 配置文件格式）。
3.**仅手动/片段**如果产品支持 MCP 但公共合约是 UI 优先、导入优先或仍然太不稳定。

这也是对早期架构问题之一的实际答案：该项目应该仅在存在稳定的公共格式的情况下不断培养一流的作者，否则依赖于较小的规范导出系列以及食谱和片段。### Canonical config families already in use

- JSON `mcpServers`
- JSON`服务器`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

|客户端/IDE |推荐|原因 |
|:------------|:----------------|:--------|
| JetBrains 人工智能助手 | 🟡 暂时保留手册/片段 |官方支持是真实的，但用户体验仍然是产品管理的，而不是文件合同优先 |
|邮差 | 🟡 暂时保留手册/片段 |官方设置是 UI 优先和工作区管理，而不是文件合约优先 |
|袋鼠代码 | 🟡 接下来调查 |有前途的 MCP 支持，但编写器安全取决于更强大的配置路径确认 |
| VS Code 副驾驶聊天 | 🟢 已经间接覆盖 |已支持底层 VS Code MCP 文件位置 |
| Zed ACP / 代理服务器 | 🟡单独轨道|这是 ACP/代理服务器领域，而不仅仅是 MCP 配置编写 |---

## Official Sources Used

上述决定是根据当前主要来源进行检查的：

- [人类克劳德代码 MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [光标MCP](https://docs.cursor.com/tools)
- [继续 MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [克莱恩 MCP](https://docs.cline.bot/mcp)
- [Kilo 代码 MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Goose 配置文件](https://block.github.io/goose/docs/guides/config-files/)
- [Goose 会话扩展](https://block.github.io/goose/docs/guides/session-extensions/)
- [Postman MCP 设置](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo 代码 MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP 扩展指南](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [官方 MCP 注册表](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

当前的 Omni Skills sidecar 有意区分了三个支持级别：

-**可安装的客户端**
  - 拥有已知的技能目录并可以使用“install_skills”
-**可配置的客户端**
  - 有一个稳定的配置目标并且可以使用`configure_client_mcp`
-**手动/片段客户端**
  - 有记录，但还没有安全的一流文件编写器

这种分离使产品保持诚实。

并非每个支持 MCP 的产品都应被视为技能安装目标。
目前，扩展阶段已被认为已完成：未来的新增项目只有在与 Goose、Junie、Continue 和 Windsurf 现在清除的公共合同栏相同的情况下才会落地。