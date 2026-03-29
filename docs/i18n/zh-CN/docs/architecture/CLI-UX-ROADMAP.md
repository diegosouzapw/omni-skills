# 🧭 CLI UX Roadmap (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**将 Omni Skills 从标志优先的安装程序发展为专家和非专家用户的引导式终端体验的产品路线图。**
> 范围：npm 包、CLI 安装体验、终端 UI、服务启动流程和可视化入门。---

## 1. Problem Statement

目前的运行时基础很强大，但入门体验仍然针对已经了解的用户进行了优化：

- 他们想要瞄准哪个客户
- 他们想要使用哪个安装选择器
- 如何将目标翻译为“--skill”、“--bundle”或“find”
- 当他们需要仅 CLI 安装而不是 MCP、API 或 A2A 服务时

今天：

- `npx 全方位技能` 默认为反重力
- 这在技术上是有效的并且向后兼容
- 但对于初次用户或技术水平较低的操作员来说并不理想

CLI 已经具有基本的交互模式，但它仍然更接近于开发人员实用程序，而不是引导式产品界面。

该路线图定义了在不破坏当前基于标志的界面的情况下实现更强大的公共用户体验的路径。---

## 1.1 Delivery Status

该路线图现在主要在当前存储库状态下实现。

已完成：

- 第一阶段：引导入口点选择
- 第 2 阶段：引导安装向导
- 第 3 阶段：可视终端外壳
- 第四阶段：视觉服务中心
- 第 5 阶段：保存的配置文件和可重复性
- 第 6 阶段：强化、测试和文档记录---

## 2. Goals

- 保留当前的专家 CLI 工作流程
- 使无参数入口点对于初次用户来说是安全且易于理解的
- 用引导选择替换交互式上下文中的静默默认设置
- 支持已知的AI客户端和任意自定义安装路径
- 将安装、发现和服务启动变成一个连贯的用户旅程
- 提供视觉终端 UI，感觉像是一个产品，而不仅仅是一个脚本
- 保持安装引擎、目录和服务运行时在 UI 下可重用---

## 3. Non-Goals

- 替换当前基于标志的 CLI
- 删除反重力作为受支持的默认目标
- 将 Web UI 作为主要交付模式
- 重构 API、MCP 或 A2A 协议本身作为 UX 工作的一部分
- 用数据库支持的管理面板替换“SKILL.md”创作---

## 4. Design Principles

### 4.1 Backward Compatibility First

这些命令必须继续像现在一样工作：

-`npx 全方位技能 --cursor --skill 全方位figma`
- `npx 全方位技能 --bundle devops`
-`npx 全方位技能查找 Figma --tool 光标 --install --yes`
- `npx 全方位技能 mcp 流 --local`
-`npx 全方位技能 api --端口 3333`
- `npx 全方位技能 a2a --端口 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- 无参数的交互式终端会话：开放式引导体验
- 不带参数的非交互式调用：保留当前安装的默认行为
- 显式命令和标志总是胜过 UI 推理### 4.3 Reuse One Engine Across Modes

以下内容应具有相同的内部逻辑：

- 标志优先 CLI
- 引导文本模式 CLI
- 可视化终端UI

这意味着用户体验层不得拥有业务逻辑。它应该协调可重用的操作。### 4.4 Preview Before Write

所有导致写入的引导流应显示：

- 已解决的目标
- 解析路径
- 选定的技能或组合
- 等效的 CLI 命令
- 确认提示### 4.5 Visual Does Not Mean Implicit

即使在更丰富的 UI 中，系统仍然应该明确状态和操作：

- 安装的位置
- 将写什么
- 服务将使用哪个传输或端口
- 流是只读的还是本地可写的---

## 5. User Personas

### 5.1 Expert CLI User

需求：

- 快速命令
- 没有强制提示
- 稳定的标志
- 可脚本化### 5.2 Guided Product User

需求：

- 明确的选择
- 不假设需要反重力
- 支持自定义路径安装
- 易于理解的安装预览
- 安装和服务器运行时操作之间的明显区别### 5.3 Operator / Platform User

需求：

- 能够直观地启动 MCP、API 和 A2A
- 理智的默认值
- 端口、传输、持久性、执行器模式、身份验证和本地模式的可选调整---

## 6. Target UX Model

产品应暴露三层：### 6.1 Expert Mode

直接命令和标志。

示例：

-`npx 全方位技能 --cursor --skill 全方位figma`
- `npx 全方位技能 mcp 流 --local`
- `npx 全方位技能 a2a --端口 3335`### 6.2 Guided Install Mode

触发时间：

- 用户在不带参数的 TTY 中运行“npxomni-skills”
- 用户运行“npxomni-skills install”，没有具体的选择器
- 用户明确选择进入引导模式

引导安装流程应经过：

1.目标客户端或自定义路径
2.安装类型
3.技能或捆绑包选择
4.预览
5、确认
6、执行
7. 下一步### 6.3 Visual Operations Hub

触发方式：

- `npx 全方位技能 ui`

这应该成为非专家用户和操作员的“主屏幕”。

核心行动：

- 安装技能
- 发现技能
- 启动MCP
- 启动API
- 启动A2A
- 跑医生
- 进行烟雾检查---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

结果：

- TTY 中的“npx 全方位技能”不再默默地假定反重力
- 提示用户选择客户端或自定义路径

要求：

- 保留非 TTY 默认安装行为
- 添加目标选择器
- 支持自定义路径捕获### Phase 2: Guided Install Wizard

结果：

- 安装成为完全引导流程

要求：

- 安装模式选择：
  - 完整的图书馆
  - 一项技能
  - 一捆
  - 搜索然后安装
- 安装预览
- 等效命令渲染
- 确认并执行### Phase 3: Visual Terminal Shell

结果：

- 当前的基本文本UI成为品牌终端应用程序

要求：

- 更丰富的布局
- 项目品牌和标志
- 更好的步进器和卡片
- 键盘驱动的导航
- 通过 Ink 实现 React 终端### Phase 4: Visual Service Hub

结果：

- MCP、API 和 A2A 可从可视 UI 启动

要求：

- 引导MCP流
- 引导API流程
- 引导A2A流程
- 可见模式和配置预览### Phase 5: Saved Profiles and Repeatability

结果：

- 常见的安装或服务预设可以重复使用

要求：

- 记住最近的目标
- 保存的服务预设
- 最近的命令
- 最喜欢的捆绑包或技能### Phase 6: Hardening, Tests, and Documentation

结果：

- 用户体验成为维护的公共界面，而不是临时的便利

要求：

- 烟雾覆盖
- 回归测试
- 文档更新
- 操作员指导
- 软件包兼容性审查---

## 8. Proposed Command Model

### Stable Commands

- ‘全能技能’
- `全能技能安装`
- `全能技能查找`
- `全能技能用户界面`
- `全能技能 mcp`
- `全能技能 API`
- `全能技能a2a`
- “全能医生”
- `全能技能烟雾`### Recommended Behavior

|调用|行为 |
|:-----------|:---------|
| TTY 中的“全能技能”，无参数 |引导安装入口 |
|非 TTY 中的“全能技能”，无参数 |当前反重力默认安装 |
| TTY 中的“omni-skills install”，无选择器 |引导式安装向导 |
| `全能技能安装 --guided` |强制引导安装流程 |
| `全能技能 ui` |打开可视化运营中心 |
|显式标志 |直接执行，无需绕道引导流程 |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

选项：

——克劳德·代码
- 光标
- 双子座 CLI
- 法典 CLI
- 基罗
- 反重力
- 开放代码
- 自定义路径

输出：

- 选择已知目标或自定义文件系统路径### Step 2: Choose Install Type

选项：

- 完整的图书馆
- 一项已发表的技能
- 一捆
- 搜索然后安装

输出：

- 安装范围### Step 3: Resolve Selection

取决于安装类型：

- 完整的库：无需额外的选择器
- 技能：列出或选择一项技能
- 捆绑包：列出或选择捆绑包
- 搜索：提示查询，显示匹配的技能和捆绑包### Step 4: Preview

显示：

- 选定的目标
- 解析路径
- 选定的技能或捆绑包
- 等效的 CLI 命令
- 流程是选择性安装还是完全安装### Step 5: Confirm

用户确认：

- 是 → 执行
- 否 → 中止或返回### Step 6: Result

显示：

- 成功/失败
- 目的地路径
- 下一步建议---

## 10. Information Architecture for the Visual Operations Hub

运营中心应公开：### 10.1 Install

- 引导安装流程
- 技能或捆绑搜索
- 自定义路径### 10.2 Discover

- 目录搜索
- 过滤器
- 预览元数据
- 安装切换### 10.3 MCP

选项：

- 传输：stdio、流、sse
- 本地模式开/关
- 主机
- 端口### 10.4 API

选项：

- 主机
- 端口
- 可选的身份验证
- 可选的速率限制### 10.5 A2A

选项：

- 主机
- 端口
- 存储类型：内存、json、sqlite
- 执行者：内联、进程
- 启用 sqlite 队列时的租用选项### 10.6 Diagnostics

- 医生
- 抽烟---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

当前的 `tools/bin/cli.js` 混合了：

- 命令解析
- 演示
- 互动提示
- 动作编排
- 服务启动

新结构应将可重用逻辑转移到：

- `工具/lib/cli-actions/`
- `工具/lib/安装流程/`
- `工具/lib/服务流/`
- `工具/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` 应保留为可写后端。

引导式 UI 应调用现有安装程序后端，而不是重复安装逻辑。### 11.3 Keep Find/Search Reusable

引导式安装向导应重用已启用的相同目录核心和 CLI 搜索逻辑：

- `查找`
- 安装预览
- 捆绑解决方案### 11.4 Prepare for Ink Without Forcing It Early

第一次交付可以停留在文本模式提示中。

但该架构应保持清晰的接缝，以便稍后可以通过 Ink 呈现文本流。---

## 12. Risks

### 12.1 Breaking Existing Automation

缓解措施：

- 仅在 TTY 中自动打开引导式 UI
- 保留非 TTY 中的当前默认值
- 保留显式标志流### 12.2 Letting UI Own Business Logic

缓解措施：

- 将编排移至可重用的操作模块
- 将安装程序和服务启动逻辑保留在 UI 层下方### 12.3 Ink Migration Too Early

缓解措施：

- 首先在当前 Node 终端堆栈中传送引导流程
- 一旦流程语义稳定，就迁移到 Ink### 12.4 Incomplete Service UX

缓解措施：

- 首先发送安装向导
- 然后推出分层引导服务---

## 13. Acceptance Criteria by Phase

### Phase 1

- TTY 中的“npxomni-skills”不再立即安装
- 用户可以选择目标客户端或自定义路径
- 非 TTY 无参数调用仍然像以前一样工作### Phase 2

- 引导式安装支持完整的库、技能、捆绑和搜索然后安装
- 写入前始终显示预览
- 显示等效命令### Phase 3

- 存在品牌终端用户界面
- 用户界面比普通的阅读菜单更具视觉结构
- 导航是键盘友好的### Phase 4

- 用户可以从视觉中心启动MCP、API和A2A
- 主要运行时选项可以以引导形式配置### Phase 5

- 最近或保存的首选项可重复使用
- 重复流程需要更少的提示### Phase 6

- 烟雾覆盖反映了新的用户体验入口点
- 文档描述引导模式和服务向导行为---

## 14. Execution Order

该路线图必须按以下顺序实施：

1. 引导入口点选择
2. 引导式安装向导
3.可视终端外壳
4. 视觉服务中心
5. 保存的配置文件和重复性
6. 强化、测试和文档完善

实施工作应在开始每个任务之前读取相关的任务文件，以便 CLI 工作与计划保持一致并且不会发生偏差。