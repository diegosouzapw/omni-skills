# 📐 ADR-0001: Agent-Native Workspace Foundation (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**塑造 monorepo 工作区结构的关键架构决策。**---

## 📊 Status

✅**已接受**— 当前工作区方向和活动存储库形状。---

## 🔍 Context

Omni Skills 最初是一个**安装者优先**存储库。这足以分发“SKILL.md”内容，但不足以通过协议本机表面向代理公开目录。

我们需要一个能够支持以下内容的基金会：

|要求 |协议|
|:------------|:---------|
| 🌐 只读 HTTP 目录 API |休息 |
| 🔌 只读 MCP 服务器 |模型上下文协议|
| 🤖 面向代理的A2A面|代理对代理 |
| 📂 本地安装 sidecar |文件系统工具 |

**关键约束**：避免在每个新服务中独立地重新解析存储库文件。---

## ✅ Decision

采用带有共享目录核心和特定于协议的包的**面向工作空间的 monorepo**：

|套餐 |目的|
|:--------|:--------|
| 📦`全能技能`（root）| CLI 安装程序和存储库脚本 |
| 🧠 `@omni-skills/catalog-core` |共享加载、搜索、比较、捆绑、安装计划 |
| 🌐 `@omni-skills/server-api` |只读 REST API |
| 🔌 `@omni-skills/server-mcp` |带 stdio/stream/sse + 本地 sidecar 模式的 MCP |
| 🤖 `@omni-skills/server-a2a` |具有代理卡、轮询、SSE 和推送配置的 A2A 任务运行时 |### 📁 Shared Data Sources

目录核心从以下位置读取生成的工件：
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

|结果|影响 |
|:--------|:--------|
| 🔗**共享数据合约**| API、MCP 和 A2A 使用相同的工件 |
| 🖥️**统一 CLI**|一个二进制文件公开安装、UI shell、API、MCP、A2A、诊断和烟雾 |
| 🧩**协议隔离**|新表面迭代无需与安装程序内部构件耦合 |
| 🔌**本地边车**|在许可名单后面工作可写的 MCP 模式，具有客户端感知的配方 |
| 📦**单包运行时**|已发布的 npm 包包含协议表面、验证工具和生成的工件 |---

## ⚠️ Negative Consequences

|权衡|缓解措施 |
|:---------|:------------|
| 🔄**元数据重复**| Python 构建 + JavaScript 运行时 → 最终巩固 |
| 🏗️**A2A 复杂性**|持久生命周期现已存在，但协调适配器增加了操作深度 |
| 📦**目录对齐**|选择性安装需要命令、清单和文档保持同步 |
| 📋**捆绑元数据差距**|捆绑包可能会超过已发布的技能，需要明确的缺失成员警告 |---

## ➡️ Follow-Up Items

| ＃|行动|状态 |
|:--|:--------|:--------|
| 1️⃣ |远程MCP认证和速率限制| ✅ 完成 |
| 2️⃣ |改进了特定于客户端的 MCP 配置编写 | ✅ 今天介绍 Claude、Cursor、Codex、Gemini、Kiro、VS Code 和 Dev Containers |
| 3️⃣ |已签名的发布工件或每项技能档案 | ✅ 今天介绍发布标签上的 CI 实施 |
| 4️⃣ | A2A任务运行时→持久编排| ✅ 今天展示 JSON/SQLite 持久性、外部执行器、选择加入租赁协调和可选的高级 Redis 协调 |
| 5️⃣ |扩展已发布的目录以获得更广泛的捆绑覆盖范围 | ✅ 今天展示当前七个精选的入门包 |