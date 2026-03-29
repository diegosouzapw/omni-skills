# 🧩 CLI Guided Installer Specification (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Omni Skills CLI 中指导安装体验的行为合同。**---

## 1. Scope

该规范定义了位于现有安装程序后端之上的引导安装行为。

它不会取代：

-`工具/bin/install.js`
- 当前专家标志流
- 选择性安装清单

它定义：

- 如何进入引导模式
- 如何选择目的地
- 如何选择安装范围
- 必须显示哪些预览信息
- 确认和执行如何工作---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

在以下情况下，CLI 应进入引导安装模式：

- 用户在 TTY 中运行不带参数的“omni-skills”
- 用户在 TTY 中运行“omni-skills install”，但没有选择器### 2.2 Forced Guided Entry

CLI 还应通过专用选项支持显式引导模式，例如：

- `全能技能安装 --guided`

只要标准输入可用，即使输入通过管道传输且未连接到 TTY，此模式也应该起作用。### 2.3 Non-Interactive Safety Rule

在没有 TTY 且没有明确请求引导模式的情况下调用时：

- 保留当前的默认行为
- 不要阻塞等待提示---

## 3. Destination Model

引导安装必须支持两个目标类别：### 3.1 Known Client Target

每个已知目标都解析为：

- 人类可读的标签
- 内部工具ID
- 安装标志
- 解析路径

所需的已知目标：

——克劳德·代码
- 光标
- 双子座 CLI
- 法典 CLI
- 基罗
- 反重力
- 开放代码### 3.2 Custom Path Target

自定义路径模式必须：

- 提示输入路径
- 解析`~`
- 标准化为绝对路径
- 在预览中显示解析的路径---

## 4. Install Scope Model

引导式安装必须支持：### 4.1 Full Library

相当于当前安装，没有“--skill”或“--bundle”。### 4.2 Single Skill

允许用户选择一项已发布的技能。### 4.3 Single Bundle

允许用户选择一个精选的捆绑包并解析已发布的成员。### 4.4 Search Then Install

让用户：

- 输入搜索查询
- 检查结果
- 选择一项技能或组合
- 继续进入安装预览---

## 5. Preview Contract

在执行之前，引导安装必须显示：

- 目的地标签
- 目的地路径
- 安装范围
- 选定的技能或组合（如果适用）
- 等效的 CLI 命令

可选但推荐：

- 所选技能元数据摘要
- 捆绑包可用性摘要---

## 6. Execution Contract

确认后：

- 引导安装委托到现有安装程序后端
- 它不会重新实现文件写入本身

命令预览和实际委托安装程序参数必须完全匹配。---

## 7. Result Contract

成功执行后，引导安装结果应显示：

- 成功指标
- 最终目的地路径
- 执行的命令
- 下一步建议的行动

接下来的操作示例：

- 在选定的客户中使用该技能
- 运行“医生”
- 运行`mcp流--local`---

## 8. Compatibility Contract

以下内容仍然有效且未更改：

-`全能技能--光标--技能全能figma`
- `omni-skills --bundle full-stack`
- `全能技能 --path ./skills`
- `全能技能 find Figma --tool 光标 --install --yes`

引导模式添加了行为。它不会删除现有的行为。