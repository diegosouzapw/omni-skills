# 🖥️ CLI Visual Shell Specification (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**“omni-skills ui”公开的基于 Ink 的终端 UI 的行为契约。**---

## 1. Scope

可视外壳是现有 CLI 和安装程序引擎之上的引导产品界面。

它不会取代：

- 基于专家标志的 CLI 使用
-`工具/bin/install.js`
- 引导文本安装流程
- API、MCP 或 A2A 运行时行为

它定义：

- `omni-skills ui` 的行为
- `omni-skills ui --text` 的后备合约
- 本地状态和预设持久性
- 引导服务启动预览
- 最近安装和服务运行的可重复性---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` 启动基于 Ink 的视觉 shell。

视觉 shell 是主要的非专家终端体验：

- 安装流程
- 目录优先发现和安装
-MCP启动
- API启动
- A2A 启动
- 医生和烟雾交接### 2.2 Text Fallback

`omni-skills ui --text` 启动基于 readline 的后备界面。

这在以下情况下仍然有用：

- 终端无法正确呈现更丰富的外壳
- 原始模式行为受到限制
- 首选最小文本后备### 2.3 Handoff Rule

可视 shell 不会重新实现服务运行时或安装直接写入。

预览和确认后，它会干净地退出，并将执行交给具有等效参数和环境变量的现有 CLI 入口点。---

## 3. Home Screen Contract

主屏幕必须显示：

- 安装技能
- 查找并安装
- 重复最近的安装（如果存在）
- 运行保存的安装预设（如果存在）
- 启动服务
- 在场时重复最近的服务
- 运行保存的服务预设（如果存在）
- 医生
- 抽烟
- 退出

主屏幕还应该显示：

- 当前发布的捆绑包可用性
- 本地状态计数最近、预设和收藏夹---

## 4. Install Flow Contract

可视 shell 安装流程必须支持：

- 已知客户目标选择
- 自定义路径选择
- 完整的库安装
- 一项技能安装
- 一包安装
- 搜索然后安装
- 写入前预览
- 预设保存
- 最喜欢的技能或捆绑切换

预览必须显示：

- 解决了目标标签
- 解析路径
- 安装范围
- 适用时选择的技能或组合
- 等效的 CLI 命令---

## 5. Service Flow Contract

可视化 shell 必须引导启动：### 5.1 MCP

- 传输：`stdio`、`stream`、`sse`
- 模式：“只读”或“本地”
- 网络传输的主机/端口配置
- 显式命令预览### 5.2 API

- 主机
- 端口
- 基本型材或硬化型材
- 硬化承载或 API 密钥身份验证
- 硬化的速率限制参数
- 审计日志启用
- 显式命令预览### 5.3 A2A

- 主机
- 端口
- 存储类型：`memory`、`json`、`sqlite`
- 持久模式的存储路径
- 执行者：`内联`，`进程`
-启用队列的SQLite模式
- 共享租赁模式的轮询间隔和租赁持续时间
- 显式命令预览---

## 6. Local State Contract

视觉 shell 在以下位置保留仅本地状态：```text
~/.omni-skills/state/ui-state.json
```

目前状态包括：

- 最近安装
- 最近推出的服务
- 命名安装预设
- 命名服务预设
- 最喜欢的技能
- 最喜欢的捆绑包

外壳必须支持：

- 重播最近的安装
- 重播最近推出的服务
- 重用命名安装预设
- 重用命名服务预设---

## 7. Compatibility Contract

视觉外壳是附加的。

这些流量必须保持有效和稳定：

-`npx 全方位技能 --cursor --skill 全方位figma`
- `npx 全方位技能 --bundle devops`
-`npx 全方位技能安装 --guided`
-`npx 全方位技能查找 Figma --tool 光标 --install --yes`
- `npx 全方位技能 mcp 流 --local`
-`npx 全方位技能 api --端口 3333`
- `npx 全方位技能 a2a --端口 3335`

可视 shell 绝不能强迫自己进入显式的专家命令路径。---

## 8. Safety Contract

可视 shell 应该使状态和写入变得明确。

它必须：

- 在写入切换之前预览安装
- 在执行前预览服务启动命令
- 在可行的情况下，将秘密材料排除在明文命令预览之外
- 仅在本地保留状态
- 在可视外壳之外保留非交互式 CLI 行为