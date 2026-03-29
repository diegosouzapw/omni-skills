# 🗺️ Agent-Native Roadmap (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Omni Skills 的架构演变计划：从安装程序优先的存储库到支持 CLI、API、MCP 和 A2A 的共享目录运行时，无需重复逻辑。**---

## 📊 Current Platform Areas

|相|名称 |状态 |
|:------|:-----|:--------|
| 1️⃣ |合同和工件| ✅ 当前 |
| 2️⃣ |只读目录 API | ✅ 当前 |
| 3️⃣ | MCP 发现表面 | ✅ 当前 |
| 4️⃣ |本地安装和配置界面| ✅ 当前 |
| 5️⃣ | A2A 编排 | ✅ 当前 |### ✅ What Exists Today

- `dist/` 中的机器可读目录工件
- 只读 HTTP API，具有搜索、捆绑、比较、安装规划和下载的端点覆盖范围
- 具有“stdio”、可流式 HTTP 和 SSE 传输的 MCP 服务器
- 具有允许写入和“config-mcp”流的本地 sidecar
- 7 个可安装的客户端、16 个可配置的客户端、33 个 MCP 配置目标和 19 个配置文件
- 通过“auth-flows”、“threat-modeling”、“release-engineering”和“context-engineering”在“full-stack”、“security”、“devops”和“ai-engineer”中进行更深入的捆绑专业化
- 每个技能存档（“zip”、“tar.gz”），带有 SHA-256 校验和以及发布标签上的独立签名
- API 治理基线：承载/API 密钥身份验证、管理运行时身份验证、速率限制、审核日志记录、CORS/IP 允许列表、信任代理、维护模式和请求 ID
- 具有任务生命周期、JSON/SQLite 持久性、重新启动恢复、SSE 流、取消、推送通知、可选流程执行器和选择加入租赁协调的 A2A 运行时### 🔭 Future Expansion Areas

核心路线图现在描述了当前的平台范围。其余项目是未来的扩展领域，而不是基础差距：

- 从现在开始，只有高度选择性的 MCP 添加，并且只有在官方公共文档使安全编写器成为可能的情况下
- 更深入的参考包和更多的语义评分，因此分类器可以不断将卓越的技能与纯粹的技能区分开来
- 如果项目稍后需要网关或 IdP 集成，则企业托管的治理超出当前进程内基线
- 新激活的“设计”、“工具”、“数据人工智能”和“机器学习”轨道更深入的专业化
- 围绕私有增强器继续进行操作改进，同时保持其正式操作模型：OmniRouter 固定到“cx/gpt-5.4”，“模拟”或降级预检中的托管云，以及 LAN 或自托管执行上可靠的“实时”
- 持续发布和工作流程强化仅作为服务质量工作，而不是作为缺少平台基础## Future Catalog Expansion Track

前两波公共品类扩张浪潮现已登陆：

- `设计` → `设计系统操作`、`可访问性审核`、`设计令牌治理`
- `工具` → `mcp-服务器创作`
- `data-ai` → `数据合约`
- `机器学习`→`模型服务`

下一个推荐步骤不再是为了类别本身而激活。它是为了加深这些新活跃的代码原生轨道，让它们感觉像是耐用的产品表面，而不是单一技能的立足点。

推荐方向：

1.通过更具操作性的设计系统工作流程深化“设计”
2. 通过创作和面向插件的技能加深“工具”
3. 通过实施优先的管道和仪器技能深化“数据人工智能”
4. 通过服务、训练和评估操作技能深化“机器学习”

除非出现强有力的代码原生提案，否则有意推迟类别：

-`生意`
- `内容媒体`

该扩展历史记录现在可在以下位置追踪：

- [../tasks/TASK-07-目录专业化和类别扩展.md](../tasks/TASK-07-目录专业化和类别扩展.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ 保持当前的“npxomni-skills”工作流程正常运行
- ✅ 引入机器可读的技能真相来源
- ✅ 支持代理商发现、推荐、安装规划
- ✅ 将远程目录问题与本地文件系统写入分开
- 跨 CLI、API、MCP 和 A2A 重复使用相同的元数据---

## 🚫 Non-Goals

- ❌ 从托管服务器远程安装在用户计算机上
- ❌ 将 `SKILL.md` 替换为规范创作格式
- ❌ 要求贡献者手写清单
- ❌默认将项目变成一个重型托管队列平台---

## 🏗️ Target Architecture

具有三个协议表面的一个**目录核心**：

|表面|最适合 |模式|
|:--------|:---------|:-----|
| 🌐**REST API**|注册表访问、UI 集成、第三方消费者 |只读 |
| 🔌**MCP**|代理发现、安装预览、配置编写、客户端配方 |只读+本地写入|
| 🤖**A2A**|代理到代理的编排和安装计划切换 |具有简单优先本地持久性的任务生命周期 |### ⚙️ Core Principle

>**所有协议都使用相同的生成工件系列。**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

清单保留共享合同。档案是位于该合同之上的分发工件，而不是它的替代品。---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

由托管 API 和远程 MCP 服务器使用。

| ✅ 允许 | ❌ 不允许 |
|:-----------|:----------------|
|搜索技巧|写入调用者的文件系统 |
|获取清单 |改变本地客户端配置 |
|比较技能 |推断任意机器状态 |
|推荐捆绑包 | — |
|构建安装计划 | — |### 2️⃣ Local Installer Mode

由 CLI 和 MCP sidecar 使用。

| ✅ 允许 |
|:-----------|
|检测本地AI客户端|
|检查已安装的技能 |
|预览文件操作|
|安装或删除技能目录 |
|预览后写入本地 MCP 配置 |

> 📌 这仍然是真正发生操作系统写入的唯一模式。---

## 📐 Protocol Split

### 🌐 REST API

最适合注册表访问、搜索、比较、版本下载和安装规划。

**端点**： `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

最适合基于工具的发现、及时的建议、安装预览和特定于客户端的 MCP 设置。

**只读工具**： `search_skills` · `get_skills` · `compare_skills` · `recommend_skills` · `preview_install`

**本地工具**： `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

最适合发现移交、安装计划工作流程和可恢复代理任务执行。

**当前操作**：`发现技能`·`推荐堆栈`·`准备安装计划`---

## 🛡️ Security Model

|原理|实施 |
|:----------|:----------------|
| 🔒 托管服务是只读的 | API 和远程 MCP 不会写入调用者文件系统 |
| 📂 写在本地 |仅限 CLI 和 MCP sidecar |
| 👁️写前预览 |局部突变的试运行默认值
| 🔑 诚信是明确的 |生成工件的 SHA-256 校验和 |
| ✍️ 释放信任是明确的 |在发布标签上强制执行分离签名 |
| ⚠️风险浮出水面 |风险和安全元数据传播到每个运行时表面 |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- 记录的目标架构
- 定义的清单模式
- 生成的元数据、目录、清单、捆绑包和档案### Phase 2: Catalog Service

- Express 5 的只读 HTTP API
- 搜索、过滤、清单查找、捆绑列表、比较和下载
- 环境驱动的托管治理基线### Phase 3: MCP Discovery

- 官方`@modelcontextprotocol/sdk`集成
- `stdio`、可流式 HTTP 和 SSE 传输
- 共享目录支持的只读工具、资源和提示### Phase 4: Local Install and Config Surface

- 具有允许写入的本地边车
- 检测 7 个可安装的客户端
- 跨 33 个目标和 19 个配置文件的 16 个具有配置能力的客户端的配置写入
- CLI 和可视 shell 中引导的“config-mcp”流程
- 对 Claude、Cursor、VS Code、Gemini、Antigravity、Kiro、Codex、Continue、Windsurf、OpenCode、Cline、GitHub Copilot CLI、Kilo Code、Zed、Goose 和 Dev 容器的稳定支持### Phase 5: A2A Orchestration

- 代理卡位于`/.wellknown/agent.json`
- `message/send`、`message/stream`、`tasks/get`、`tasks/cancel`、`tasks/resubscribe` 和推送通知配置方法
- JSON 和 SQLite 持久性以及重新启动恢复
- 可选的外部进程执行器
- 选择跨工作人员租用执行以进行 SQLite 和可选的高级 Redis 协调
- 简单优先默认值保留在内存、JSON 或 SQLite 上，无需外部依赖### Current Enhancer Operating Decision

私有增强器支持的“live”模型现在是明确的：

- 托管 PR 自动化运行预检门控“实时”尝试
- 如果公共 OmniRoute 网关被阻止或不稳定，PR 会被标记为“被阻止”，并带有面向运营商的原因，而不是不透明地失败
- 规范可靠的“实时”路径仍然是 LAN 或本地服务执行
- 预定的私有 GitHub 运行默认保持“模拟”状态，除非操作员明确请求“实时”---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**决定**：保留清单作为共享合同，并保留签署的每技能档案作为分发面。

**为什么**：
- CLI、API、MCP 和 A2A 已使用标准化清单形状
- 档案非常适合下载和验证，但作为唯一的发现合约却很差
- 这使得创作变得简单且分发可验证### 2. Private or Premium Catalogs

**决定**：重用相同的清单和目录格式，并在外部分层身份验证或策略。

**为什么**：
- 它避免了数据模型的分叉
- 它符合当前的 API/MCP 治理方法
- 它仍然与围绕 OAuth 客户端凭据和企业管理授权的 MCP 生态系统方向兼容### 3. Client Writer Strategy

**决定**：集中在一小部分规范导出系列上，并且仅在官方客户文档需要时保留定制编写器。

**现在使用的规范系列**：
- JSON `mcpServers`
- JSON`服务器`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**为什么**：
- 它使实施保持可维护性
- 它仍然支持特定于客户端的需求，例如 Claude 设置、Continue YAML、Zed `context_servers` 和 Codex TOML
- 它避免了为没有稳定的公共配置文档的客户发明脆弱的编写器---

## 🌍 Research Notes Behind Those Decisions

当前的决定已根据官方生态系统文档进行了检查：

- MCP 生态系统现在记录了可选扩展，例如 OAuth 客户端凭据和企业管理的授权，支持外部化托管身份验证，而不是分叉目录格式
- OpenAI 记录了公共文档 MCP 服务器和 Codex MCP 配置模式，与共享清单和客户端编写器策略保持一致
- VS Code 记录了一流的 MCP 支持和扩展指南，这加强了维护其专用的基于“服务器”的编写器
- JetBrains AI Assistant 通过产品 UX 记录 MCP 设置，而不是稳定的跨平台文件合同，目前支持将其保留在手册/片段领域---

## 🔮 Longer-Term Decision Points

只有少数战略问题仍然悬而未决：

1. 当前矩阵之外的任何客户是否真正清除了一流写作的障碍，或者其余产品是否应该仅保留手册/片段
2. 托管治理何时（如果有的话）应该转移到外部网关或企业 IdP 后面，而不是当前的进程内基线？
3. 在对贡献者来说过于固执己见之前，评分者应该在评估参考包深度和操作质量方面走多远？