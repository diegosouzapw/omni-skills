# 🔧 System Runbook (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**用于构建、验证、服务、保护 Omni Skills 和故障排除的完整操作指南。**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

|命令 |它有什么作用 |
|:--------|:-------------|
| `npm 运行验证` |验证“SKILL.md”，重新生成“metadata.json”，计算分类/成熟度/质量/安全性 |
| `npm 运行分类：报告` |显示类别漂移建议，无需重写文件 |
| `npm 运行验证：扫描仪` |确认生成的技能元数据中记录的扫描仪覆盖范围 |
| `npm run release:notes` |从元数据、捆绑包和 git 历史记录生成自定义发行说明 |
| `npm 运行构建` |重新生成目录/清单/存档/校验和，验证扫描仪覆盖范围和存档，重建 `docs/CATALOG.md` |
| `npm 测试` |跨 CLI、API、MCP、sidecar 和存档流的完整烟雾套件 |---

## 🖥️ Visual Shell

已发布的 CLI 现在包括基于 Ink 的操作员 shell：```bash
npx omni-skills ui
```

目前的能力：

- 已知客户端和自定义路径的引导安装
- 搜索然后安装流程
- MCP启动向导
- API启动向导
- A2A 启动向导
- 最近的安装和服务重新启动
- 命名安装和服务预设

本地状态路径：```text
~/.omni-skills/state/ui-state.json
```

倒退：```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

静态扫描仪会自动检查所有技能：

|规则系列|示例 |
|:------------|:---------|
| 🎭 及时注射 |渗透模式、指令覆盖 |
| 💣 破坏性命令 | `rm -rf`、`格式`、`mkfs` |
| 🔑 可疑路径 | `/etc/shadow`、`~/.ssh`、凭证文件 |
| ⚠️ 有风险的原语 | `shell=True`、`pickle.load`、`eval`、`extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> 需要“PATH”中的“clamscan”。### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> 仅哈希查找 - 默认情况下**不上传**未知文件。### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

严格的释放门：```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

档案由“npm run build”自动生成：

|输出|路径|
|:--------|:-----|
| 📦 邮编 | `dist/archives/<skill>.zip` |
| 📦 压缩包 | `dist/archives/<skill>.tar.gz` |
| 🔒 校验和 | `dist/archives/<skill>.checksums.txt` |

`dist/` 是故意在此存储库中提交的。生成的目录、清单、捆绑包和存档是 CLI 安装流程、API 下载界面、MCP 预览、A2A 任务切换、冒烟测试和发布验证的运行时输入。### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

可选的公钥覆盖：```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> 如果未提供公钥，则构建会通过“openssl”将公钥派生到“dist/signing/”中。### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

版本政策：

- 补丁增量直到“.10”
- 在“.10”之后，下一个版本将发布次要版本并将补丁重置为“.0”

示例：

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

|场景 |命令 |
|:---------|:--------|
| 📥 默认安装（反重力）| `npx 全方位技能` |
| 🎯 特定技能+客户| `npx 全方位技能 --cursor --skill 全方位figma` |
| 🔎 发现 → 安装 | `npx 全方位技能 find Figma --tool 光标 --install --yes` |
| 📦 捆绑安装 | `npx 全方位技能 --cursor --bundle 要点` |
| 🩺 验证安装 | `npx 全能医生` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

|过滤|旗帜|示例|
|:-------|:-----|:--------|
| 📂 类别 | `--类别` | `--category development` |
| 🖥️工具| `--工具` | `--工具光标` |
| ⚠️ 风险 | `--风险` | `--风险安全` |
| 📊 排序 | `--排序` | `--排序质量\|最佳实践\|级别\|安全\|名称` |
| 🔄 订购 | `--顺序` | `--order asc\|desc` |
| ⭐ 最低品质 | `--最低质量` | `--最低质量 80` |
| 📋 最小血压 | `--最小最佳实践` | `--min-best-practices 60` |
| 🎯 最低等级 | `--最低级别` | `--最低级别 2` |
| 🛡️ 最低安全 | `--min-security` | `--最低安全性 90` |
| ✅ 验证 | `--验证状态` | `--validation-status passed` |
| 🛡️ 安全 | `--安全状态` | `--security-status passed` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

|方法|端点 |目的|
|:--------|:--------|:--------|
| `获取` | `/healthz` |健康检查|
| `获取` | `/openapi.json` | OpenAPI 3.1 规范 |
| `获取` | `/v1/技能` |带过滤器的列表 |
| `获取` | `/v1/搜索` |全文检索 |
| `获取` | `/v1/skills/:id/archives` |存档列表 |
| `获取` | `/v1/skills/:id/download/archive?format=zip` |下载存档 |
| `获取` | `/v1/skills/:id/download/archive/checksums` |校验和清单 |### 🔐 Hosted API Hardening

|特色|命令 |
|:--------|:--------|
| 🔑 不记名授权 | `OMNI_SKILLS_HTTP_BEARER_TOKEN=替换我的 npx 全方位技能 api` |
| 🗝️ API 密钥身份验证 | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx 全方位技能 api` |
| 🛂 管理员运行时身份验证 | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=管理员秘密 npx 全方位技能 api` |
| 🚦 速率限制 | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx 全方位技能 api` |
| 📝 审计日志 | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx 全方位技能 api` |
| 🌍 CORS 许可名单 | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx 全方位技能 api` |
| 🧱 IP 许可名单 | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx 全方位技能 API` |
| 🚧 维护模式 | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx 全方位技能 api` |
| 🔁 可信代理 | `OMNI_SKILLS_HTTP_TRUST_PROXY=环回 npx 全方位技能 api` |

> 🟢 `/healthz` 按照设计保持开放；目录路由启用时需要身份验证。 “GET /admin/runtime”在配置时需要管理员令牌并返回实时治理快照。---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

sidecar 现在可以预览或写入 MCP 配置：

- Claude 用户和项目设置
- 克劳德桌面配置
- 克莱恩用户配置
- GitHub Copilot CLI 用户和存储库配置
- 光标用户和工作区配置
- Codex TOML 配置
- Gemini 用户和项目设置
- Kilo CLI 用户和项目配置
- Kilo 工作区配置
- Kiro 用户和项目设置
- OpenCode 用户和工作区配置
- 继续工作区 YAML 配置
- 风帆冲浪用户配置
- Zed 工作区配置
- 工作区`.mcp.json`
- VS Code 工作区和用户配置
- 开发容器配置

`configure_client_mcp` 还返回每个客户端的 `recipes`，以便操作员获得等效的 CLI 或手动设置步骤以及预览。### 🧾 MCP Config Preview and Write Flow

当您想要生成配置而不直接调用 MCP 工具时，请使用统一 CLI：```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

可视外壳通过以下方式公开相同的工作流程：

- `npx 全方位技能 ui`
- `服务`
- `配置 MCP 客户端`

除非传递“--write”，否则该命令将保持预览模式。### 🔐 Hosted MCP Hardening

与 API 相同的环境变量：```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**受保护的路由**： `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` 保持开放。---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

默认本地路径保持简单优先：

- `json` 或 `sqlite` 持久性可以在禁用队列轮询的情况下运行
- 仅当您需要多工作人员声明和租用故障转移时才设置“OMNI_SKILLS_A2A_QUEUE_ENABLED=1”
- 将 Redis 协调保留为高级托管选项，而不是基线### 🧱 Multi-Worker Lease Setup

针对同一 SQLite 存储运行多个 A2A 节点以获得基于租约的故障转移：```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

如果一个工作人员在任务“工作”时死亡，另一个工作人员可以在租约到期后回收它并继续执行。### 🟥 Redis Coordination

对于不希望队列协调绑定到共享 SQLite 存储的托管或多节点部署，请将协调器切换到 Redis：```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

在此模式下：

- 持久性仍然存在于 JSON 或 SQLite 中
- 任务声明和租赁所有权转移到 Redis
- 多个A2A节点可以共享一个队列，而不依赖于SQLite行级协调### 📡 Endpoints

|方法|路径|目的|
|:--------|:-----|:--------|
| `获取` | `/healthz` |健康检查|
| `获取` | `/.well-known/agent.json` |代理卡（A2A发现）|
| `发布` | `/a2a` |用于任务和流传输的 JSON-RPC 端点 |### 🧭 Supported JSON-RPC Methods

|方法|目的|
|:--------|:--------|
| `消息/发送` |开始或继续任务 |
| `消息/流` |启动任务并传输 SSE 更新 |
| `任务/获取` |轮询任务快照 |
| `任务/取消` |取消活动任务 |
| `任务/重新订阅` |恢复现有任务的 SSE 更新 |
| `任务/pushNotificationConfig/set` |注册推送 webhook |
| `任务/pushNotificationConfig/get` |读取推送配置 |
| `任务/pushNotificationConfig/列表` |列出任务的推送配置 |
| `任务/pushNotificationConfig/删除` |删除推送配置 |### 📡 Task Lifecycle

当前运行时支持以下任务状态：

- `已提交`
-`工作`
- `需要输入`
- `已完成`
- `已取消`
- `失败`

任务将保存到 JSON 文件或 SQLite 存储中，并在重新启动时重新加载。已完成和中断的任务仍然可用。在关闭期间仍然“已提交”或“正在工作”的任务将通过显式重新启动元数据进行恢复，并且默认情况下会自动恢复。### 🧪 Example: Start a Task

```bash
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

存储库现在有两个工作流程：

|工作流程|触发|目的|
|:---------|:--------|:--------|
| `验证.yml` |推送/PR 到 `main` |构建、测试并确认生成的工件已提交 |
| `release.yml` |标签推送 `v*` 或手动调度 |运行发布级扫描程序、验证版本标签、签署工件、打包 tarball、发布到 npm 并创建 GitHub 版本 |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

|秘密|使用者 |目的|
|:--------|:--------|:--------|
| `VT_API_KEY` 或 `VIRUSTOTAL` | `release.yml` |需要在发布版本中进行 VirusTotal 哈希查找 |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` 或 `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | CI 中分离存档签名所需的私钥 |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` 或 `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` |可选的公钥覆盖；否则从私钥派生 |
| `NPM_TOKEN` | `publish-npm` 工作 |验证标签发布的“npmpublish” |### 🦠 Release Scanner Policy

`release.yml` 设置或准备：

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
-`VT_API_KEY=${{secrets.VT_API_KEY ||秘密.VIRUSTOTAL }}`
- 来自跑步者临时存储的“OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH”

这意味着每个基于标签的版本都必须：

- 在跑步者上安装并刷新 ClamAV
- 启用 ClamAV 时重新生成元数据
- 在启用 VirusTotal 的情况下重新生成元数据
- 将 CI 签名密钥材料解码到运行器临时存储中
- 通过 `npm run verify:scanners:strict`
- 通过 `npm run verify:archives:strict`
- 在 npm 发布之前通过测试和包验证
- 从目录元数据和 git 历史记录生成自定义发行说明
- 发布后创建带有附加发布资产的 GitHub 版本---

## 1️⃣1️⃣ Environment Variables Reference

|变量|目的|默认 |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` |覆盖目录根路径 |自动检测 |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` |额外允许的写入路径 |已知的客户根源 |
| `OMNI_SKILLS_MCP_MODE` |将 sidecar 设置为“local” |远程|
| `OMNI_SKILLS_MCP_LOCAL_MODE` |本地模式的 Alt 标志 | `0` |
| `OMNI_SKILLS_API_BASE_URL` | MCP 的公共 API URL | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` |公共基础网址 | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` |不记名身份验证令牌 | — |
| `OMNI_SKILLS_HTTP_API_KEYS` |以逗号分隔的 API 密钥 | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` |管理运行时身份验证令牌 | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` |每个窗口的最大请求数 | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` |速率限制窗口（毫秒）| — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` |启用审核日志记录 | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` 或 `text` 审核输出 | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` |可选的审核日志文件路径 |标准输出|
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` |以逗号分隔的 CORS 来源允许列表 | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` |以逗号分隔的 IP 或 CIDR 允许列表 | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` |快速信任代理设置 | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` |启用维护响应 | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` |维护“重试后”秒 | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` |模拟异步任务延迟 | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`、`sqlite` 或 `memory` 任务存储 | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` |自定义 A2A 任务存储文件 | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` |为具有租赁意识的工作人员启用共享队列轮询 | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `store`、`sqlite`、`local` 或 `redis` 协调器 | `商店` |
| `OMNI_SKILLS_A2A_REDIS_URL` |用于外部协调的 Redis URL | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` |队列元数据的 Redis 键前缀 | `全能技能：a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` |租赁工人的队列轮询间隔| `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` |另一个工作人员可以收回任务之前的租约期限 | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` |用于租赁所有权和诊断的稳定工人标识符 |主机名+PID+随机后缀|
| `OMNI_SKILLS_A2A_EXECUTOR` | `inline` 或 `process` 任务执行器 | `内联` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` |覆盖外部工作命令 |节点二进制 |
| `OMNI_SKILLS_A2A_WORKER_ARGS` |外部工作参数的 JSON 数组 | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` |启动时恢复已提交/正在工作的任务 | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` |允许本地主机外部的非 HTTPS webhook | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` |启用 ClamAV 扫描 | `0` |
| `VT_API_KEY` | VirusTotal API 密钥 | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` |用于签名的私钥 | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` |公钥覆盖 |自动派生 |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. 使用 `npm run build` 重建
2. 重新运行 `npm run verify:archives`
3. 如果启用了签名，请确认公钥和 `openssl` 可用性### 🦠 Release Workflow Fails on Scanner Coverage

- 确认存储库机密中存在“VT_API_KEY”
- 确认“freshclam”在跑步者上成功
- 使用 `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build` 在本地重建
- 重新运行 `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- 确认存储库机密中存在“NPM_TOKEN”
- 确认 Git 标签与 `package.json` 版本完全匹配
- 检查工作流程工件中是否存在通过“release-verify”上传的 tarball### ✍️ Release Signing Fails in CI

- 确认存储库机密中存在“OMNI_SKILLS_SIGN_PRIVATE_KEY_B64”或“OMNI_SKILLS_SIGN_PRIVATE_KEY”
- 如果您提供公钥秘密，请确认它与私钥匹配
- 确认“openssl”可用且私钥为 PEM 格式
- 使用“OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build”在本地重建
- 重新运行 `npm run verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- 验证“OMNI_SKILLS_HTTP_BEARER_TOKEN”或“OMNI_SKILLS_HTTP_API_KEYS”
- 包含 `Authorization: Bearer <token>` 或 `x-api-key` 标头### 🚦 API/MCP Returns `429 Too Many Requests`

- 增加`OMNI_SKILLS_RATE_LIMIT_MAX`
- 扩大`OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- 减少来自客户端或探测器的突发流量### 🛂 API/MCP Admin Runtime Returns `401`

- 验证“OMNI_SKILLS_HTTP_ADMIN_TOKEN”
- 发送 `x-admin-token: <token>` 或 `Authorization: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- 禁用`OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- 在维护期间使用“/healthz”进行活性探针
- 使用“/admin/runtime”和管理令牌进行操作员诊断### 🌍 Browser Requests Fail CORS Validation

- 验证“OMNI_SKILLS_HTTP_ALLOWED_ORIGINS”
- 包括确切的方案和主机，例如“https://app.example.com”### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- 验证“OMNI_SKILLS_A2A_COORDINATION_TYPE=redis”
- 验证“OMNI_SKILLS_A2A_REDIS_URL”
- 检查每个节点的 Redis 连接性
- 检查“/healthz”中的“coordination”快照### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
