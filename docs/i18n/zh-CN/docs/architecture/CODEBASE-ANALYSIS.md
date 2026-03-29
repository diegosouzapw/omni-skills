# 🔬 Codebase Deep Analysis (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**对当前 Omni Skills 架构、运行时界面和构建管道进行全面的技术分析。**
> 最后分析：2026-03-28---

## 📊 Project Overview

|属性|价值|
|:----------|:------|
|**姓名**| `全能技能` |
|**套装版本**| `0.1.3` |
|**技能版本**|根据技能且独立于软件包版本。许多已发布的技能仍然是“0.0.1”，而软件包是“0.1.2”。 |
|**许可证**| MIT（代码）+ CC BY 4.0（内容）|
|**国家公共管理**| `npx 全方位技能` |
|**已发布的技能**| 32 | 32
|**定义的捆绑包**| 7、全部已发表的技能完全支持|
|**活动目录类别**| 18 个规范分类类别中的 15 个活动桶 |
|**主要运行时/构建 LOC 采样如下**| 13,600+ |
|**生产依赖性**| 7 (`@modelcontextprotocol/sdk`、`cors`、`express`、`ioredis`、`ink`、`react`、`zod`) |

来自“metadata.json”的当前存储库级分类快照：

- 平均质量得分：`96.3`
- 平均最佳实践得分：“98.7”
- 平均安全分数：`95.0`
- 所有 32 种已发布的技能均验证为“L3”

当前版本基线：

- 公共存储库版本：`v0.1.2`
- 私有增强器版本：`v0.0.1`
- 公共发布自动化和私有发布自动化都是活跃且绿色的---

## 🏗️ Architecture Overview

该存储库遵循**工作区 monorepo**模式，具有一个共享目录核心和多个运行时表面。```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

该设计是有意的**工件驱动**：

1. 技能被编写为“SKILL.md”加上本地支持包
2. 构建对它们进行验证、分类、归档和规范化
3. 生成的工件成为 CLI、API、MCP 和 A2A 的合约---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4,500+ LOC 组合**— 供专家和指导使用的主要公共界面。

|命令 |功能|
|:--------|:---------|
| 🔎 `查找 [查询]` |使用分数感知过滤器进行全文目录搜索 |
| 📦 `安装` |引导式或基于标志的安装到已知客户端或自定义路径 |
| 🧾 `config-mcp` |预览或编写客户端感知的 MCP 配置 |
| 🔌 `mcp <传输>` |在 `stdio`、`stream` 或 `sse` 中启动 MCP 服务器 |
| 🌐 `api` |启动目录 API |
| 🤖 `a2a` |启动 A2A 运行时 |
| 🧪 `烟` |发布预检验证 |
| 🩺 `医生` |本地诊断|
| 🖥️ `ui` |带有安装、发现、配置和服务中心的 Ink 可视 shell |
| 🏷️ `重新分类` |分类漂移检查和重写|

CLI 不再只是一个安装程序。是整个平台的公共运营工具。## 🧭 Future Expansion Direction

公共运行时在基础工作上不再受阻，第二类浪潮已经落地。下一个有用的目录工作是深度，而不是更多的类别计数追逐。

新激活的代码本机曲目现已在目录中：

- 通过“design-systems-ops”、“accessibility-audit”和“design-token-governance”进行“设计”
- 通过“mcp-server-authoring”的“工具”
- 通过“数据合同”的“数据人工智能”
- 通过“模型服务”进行“机器学习”

推荐下一步方向：

1. 深化“设计”、“工具”、“数据人工智能”和“机器学习”
2. 推迟“业务”和“内容媒体”，除非出现明确的代码原生提案
3.保留当前品质楼层而不是重新开启类别激活压力

该扩展波现已记录在 [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md) 中。### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— 将技能安装到 7 个可安装的助手中。

|旗帜|目标|默认路径|
|:-----|:--------|:-------------|
| `--克劳德` |克劳德·代码 | `~/.claude/技能` |
| `--光标` |光标| `~/.cursor/skills` |
| `--双子座` |双子座 CLI | `~/.gemini/skills` |
| `--codex` |法典 CLI | `~/.codex/skills` |
| `--kiro` |基罗 | `~/.kiro/skills` |
| `--反重力` |反重力| `~/.gemini/反重力/技能` |
| `--opencode` |开放代码 | `<工作空间>/.opencode/skills` |

它支持：

- 完整库安装
- 通过`--skill`选择性安装
- 通过 `--bundle` 策划安装
- 引导式 TTY 和可视化 UI 流程
- 自定义目标路径### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— CLI、API、MCP 和 A2A 的共享运行时层。

|出口|描述 |
|:--------|:------------|
| 🔎 `searchSkills()` |使用加权文本匹配和过滤器支持进行搜索 |
| 📋 `listSkills()` |按质量、最佳实践、级别、安全性、风险、工具和类别进行多轴过滤 |
| 📌 `getSkill()` |清单解析加上丰富的公共 URL |
| ⚖️ `compareSkills()` |并排比较|
| 💡 `recommendSkills()` |目标驱动推荐|
| 📦 `buildInstallPlan()` |安装计划生成，带有警告和客户感知指导 |
| 🗂️ `listBundles()` |精选捆绑清单及可用性 |
| 📁 `listSkillArchives()` |存档和签名解析 |

这是生成后运行时真相的真正单一来源。### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— 使用官方 SDK 实现完整的 MCP。

**交通**

- `stdio`
- 可传输的 HTTP
- 上交所

**永远在线的只读工具**

- `搜索技能`
- `获取技能`
- `比较技能`
- `推荐技能`
- `预览_安装`

**本地模式工具**

- `检测客户端`
- `list_installed_skills`
- `安装技能`
- `删除技能`
- `配置_客户端_mcp`

MCP 表面故意分为：

- 远程/只读目录使用
- 本地/可写的 sidecar 使用### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1,943 LOC**— 文件系统感知 MCP 层，用于客户端检测、技能管理和 MCP 配置写入。

目前的实际支持：

-**7 个可安装的客户端**
-**16 个可配置的客户端**
-**33 个配置目标**
-**19 个配置文件**

可安装的客户端：

——克劳德·代码
- 光标
- 双子座 CLI
- 法典 CLI
- 基罗
- 反重力
- 开放代码

支持配置的客户端和目标包括：

- 克劳德设置、克劳德桌面和克劳德项目配置
- 光标用户和工作区配置
- VS Code 工作区、用户、内部人员和开发容器配置
- Gemini 用户和工作区设置
- 反重力用户配置
- Kiro 用户、工作区和旧路径
- Codex CLI TOML 配置
- OpenCode 用户和工作区配置
- 曲线设置
- GitHub Copilot CLI 用户和存储库配置
- Kilo 用户、项目和工作区配置
- 继续工作区 YAML
- 风帆冲浪用户配置
- Zed 工作区配置
- 鹅用户配置

sidecar 有意诚实地对待边界：

- 它只在白名单内写入
- 默认情况下预览
- 只有在官方文档公开稳定格式的情况下，它才能保留一流的作家
- 它并不假装每个支持 MCP 的产品也是技能安装目标### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC 组合**— 只读注册表 API 加上治理中间件。

重要终点：

- `/healthz`
- `/openapi.json`
- `/管理/运行时`
- `/v1/技能`
- `/v1/skills/:id`
- `/v1/搜索`
- `/v1/比较`
- `/v1/bundles`
- `/v1/安装/计划`
- `/v1/skills/:id/download/*`

已实施的治理基准：

- 不记名令牌身份验证
- API 密钥身份验证
- 管理员令牌身份验证
- 进程内速率限制
- 请求ID
- 审计日志记录
- CORS 许可名单
- IP 许可名单
- 信任代理处理
- 维护模式### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**跨主服务器、运行时和协调器文件组合的 1,857 个 LOC**— 用于代理到代理工作流程的 JSON-RPC 2.0 任务生命周期。

支持的方法：

- `消息/发送`
- `消息/流`
- `任务/获取`
- `任务/取消`
- `任务/重新订阅`
- `任务/pushNotificationConfig/*`

目前的运营情况：

- `发现技能`
- `推荐堆栈`
- `准备安装计划`

耐久性和协调模型：

- 内存、JSON 或 SQLite 本地持久性
- 重新启动恢复
- 可选的外部进程执行器
- 为共享 SQLite 工作人员选择加入租用队列协调
- 可选的 Redis 支持的协调作为高级托管路径

这里的关键架构选择是**简单优先的本地操作**。 Redis 作为高级选项存在，但默认产品路径仍然是本地的且依赖较少。---

## ⚙️ Build Pipeline

|脚本 |语言 |目的|
|:--------|:--------|:--------|
| 📊 `skill_metadata.py` |蟒蛇 |验证、分类、评分和静态安全扫描 |
| ✅ `validate_skills.py` |蟒蛇 |每个技能和根摘要的元数据生成 |
| 📑 `generate_index.py` |蟒蛇 |技能索引、清单、档案、签名和校验和 |
| 🏗️ `build_catalog.js` | Node.js |最终 `dist/catalog.json` 和 `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` |蟒蛇 |规范类别审核和重写 |
| 🔍 `verify_archives.py` |蟒蛇 |存档和签名验证 |

有两个细节在操作上很重要：

1. `dist/` 是运行时合约的一部分并且是有意提交的
2. 构建具有足够的确定性以支持 CI 验证和发布签名---

## 📦 Published Catalog

目前的公共目录涵盖 32 项技能：

-**发现和规划**：`发现技能`、`头脑风暴`、`架构`、`调试`
-**设计系统和可访问性**：`设计系统操作`，`可访问性审核`
-**产品和全栈交付**：`前端设计`、`api 设计`、`数据库设计`、`omni-figma`、`auth-flows`
-**安全**：`安全审核器`、`漏洞扫描器`、`事件响应`、`威胁建模`
-**OSS 维护者工作流程**：`documentation`、`changelog`、`create-pr`
-**DevOps**：`docker-expert`、`kubernetes`、`terraform`、`可观察性审查`、`发布工程`
-**人工智能工程**：`rag-engineer`、`prompt-engineer`、`llm-patterns`、`eval-design`、`context-engineering`

所有七个捆绑包均得到全力支持：

- `必需品` → `4/4`
- `全栈` → `5/5`
- `设计`→`4/4`
- `安全` → `4/4`
- `devops` → `5/5`
- `ai-engineer` → `5/5`
- `oss-maintainer` → `4/4`

当前分数来自生成的目录：

- 质量分数：`94、95、96、97、100`
- 最佳实践分数：“98、99、100”
- 安全评分：目前所有已发布的技能为“95”

高端代表：

- `omni-figma`→`质量 100`、`最佳实践 100`
- `可访问性审核`→`质量 99`、`最佳实践 100`
- `auth-flows` → `quality 97`, `best_practices 99`
- `设计系统操作` → `质量 97`、`最佳实践 99`
- `发布工程` → `质量 97`、`最佳实践 99`
- `威胁建模`→`质量 97`、`最佳实践 99`
- `环境工程`→`质量 97`、`最佳实践 99`

当前顶带内的代表性下端：

- `架构` → `质量 94`、`最佳实践 98`
- `变更日志`→`质量 94`、`最佳实践 98`
- `create-pr` → `质量 95`、`最佳实践 98`

这是故意的。评分员现在区分“优秀”和“特殊”，而不是将整个目录压平在顶部。---

## 🌟 Strengths

1.**工件优先的设计**
   每个运行时表面都使用相同的生成目录和清单。
2.**广泛的协议覆盖范围**
   CLI、API、MCP 和 A2A 共存，无需分割数据模型。
3.**强大的本地产品人体工程学**
   引导式安装、可视 shell、“config-mcp”和试运行默认值使该项目可以在高级用户之外使用。
4.**诚实的安全态势**
   列入白名单的本地写入、静态扫描、签名、校验和以及发布验证都是明确的。
5.**健康的 MCP 范围**
   该项目现在支持广泛的当前具有 MCP 功能的客户端，而无需假装未记录的目标是稳定的。---

## 🔮 Opportunities

1.**更深的捆绑覆盖**
   下一步是现有捆绑包内的专业化，而不仅仅是广泛的覆盖范围。
2.**更丰富的记分器语义**
   仍然有空间更语义地评估参考包深度和工作流程质量。
3.**仅在合理的情况下增加客户作家**
   扩展应该保持纪律并与稳定的官方文档挂钩。
4.**验证器分解**
   `skill_metadata.py` 仍然是一个大模块，随着时间的推移，它将受益于内部分解。
5.**托管治理升级**
   当前的进程内基线足以用于自托管，但企业部署最终需要外部网关和身份集成。