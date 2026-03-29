# 🛡️ Security Policy (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**如果您在 Omni Skills 中发现安全问题，请勿先提出公开问题。**

请通过以下私人渠道之一举报：

|频道|如何|
|:--------|:----|
| 🔒 GitHub 安全警告 | [打开私人咨询](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 直接联系 |直接联系维护人员 |### 📋 Include in Your Report

- 📁 受影响的组件或路径
- 🔄 复制步骤
- ⚠️影响评估
- 🧪 验证问题所需的任何概念验证材料

>**⏱️ 我们的目标是在 48 小时内确认报告**，并根据影响确定修复的优先级。---

## 🎯 Scope

该策略涵盖存储库的运行时和内容表面：

|组件|路径|
|:----------|:-----|
| 🖥️ CLI 和安装程序 | `工具/bin/` |
| 📚 共享库 | `工具/lib/` |
| ⚙️ 构建和验证脚本 | `工具/脚本/` |
| 📦 生成的目录工件 | `距离/` |
| 🌐 API、MCP 和 A2A 包 | `包/` |
| 🧠 技能内容 | `技能/` — 尤其是 shell 命令、网络访问、凭证流或安全敏感指南 |---

## 架构

该存储库依赖于以下安全控制：### 🧠 Skill-Level Controls

|控制|描述 |
|:--------|:------------|
| 🏷️风险领域|技能元数据包括声明的“风险”级别 |
| 📊 得分 |验证计算成熟度、最佳实践、质量和安全评分 |
| 🔍 静态扫描仪 |检查“SKILL.md”、打包文件和帮助程序脚本 |
| 🦠 可选扫描仪 | ClamAV 和 VirusTotal 哈希查找（配置后）|### 🖥️ Runtime Controls

|控制|描述 |
|:--------|:------------|
| 📁 道路安全 |安装流程使用路径安全检查 |
| 🔒 白名单写道 |本地 MCP sidecar 写入受允许列表限制 |
| 👁️ 试运行默认值 |除非明确禁用，否则面向写入的工具默认为空运行 |
| 🔐 授权和限制 |承载/API 密钥身份验证、管理运行时身份验证、速率限制、CORS/IP 允许列表 |
| 📋 审计 |审核日志记录、维护模式和请求 ID |### 📦 Release Controls

|控制|描述 |
|:--------|:------------|
| ✅ 校验和清单 |生成的档案的 SHA-256 校验和 |
| ✍️签名|发布前在 CI 中分离签名验证 |
| 🧪 烟雾检查 |发布前发布的练习运行时表面 |---

## 🔮 What Is Still Open

> 剩下的主要安全工作是**不是**基线强化。未清项目有：

|面积 |状态 |
|:-----|:--------|
| 🏢 企业治理 |外部身份、网关策略和 WAF 集成高于当前流程内控制 |
| 🔌 MCP 客户作家 |仅当公共配置合约足够稳定时才更广泛的编写者 |
| 📊 扫描仪细化 |持续改进，使卓越的技能与仅仅结构良好的技能保持明显的区别 |---

## ⚠️ Risk Levels in Skills

每项技能都声明以下“风险”级别之一：

|风险等级|意义|
|:-----------|:--------|
| 🟢`安全` |预计不会发生破坏性操作 |
| 🟡`小心` |可能会修改文件或与外部系统交互 |
| 🔴`进攻性` |需要显式授权的安全测试或对抗性工作流程 |
| ⛔ `关键` |高影响力或系统级操作 |---

## 📋 Disclosure Notes

由于 Omni Skills 提供可执行帮助程序、文件系统感知本地工具和特定于客户端的配置编写器，因此这些漏洞类别应被视为**高优先级**，即使它们显示为“仅限本地”：

|类别 |示例 |
|:---------|:---------|
| 📁 路径遍历 |通过技能安装或配置路径进行目录转义 |
| 🔗 符号链接安全 |安装或存档提取期间出现符号链接 |
| 🖥️ 命令执行 |通过技能内容或脚本任意命令注入 |
| 📦 存档验证 |绕过校验和或签名验证 |
| 🔓 身份验证绕过 | API/MCP 上的速率限制或身份验证绕过 |
| 🔌 绕过白名单 |本地 sidecar 允许名单规避 |
| 🦠 扫描仪规避 |静态或外部扫描仪中的假阴性类别 |