# 🌐 Catalog API Surface (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**用于技能发现、搜索、比较、安装规划和工件下载的只读 HTTP API。**---

## 📊 Status

|特色|状态|
|:--------|:------|
| ✅ 目录端点 |已实施 |
| ✅ 身份验证（承载 + API 密钥）|已实施 |
| ✅ 管理员运行时身份验证 |已实施 |
| ✅ 速率限制 |已实施 |
| ✅ 审核日志 |已实施 |
| ✅ CORS 和 IP 许可名单 |已实施 |
| ✅ 保养模式 |已实施 |
| ✅ 存档下载 |已实施 |
| ✅ OpenAPI 规范 |已实施 |
| ⚠️ 治理后端 |环境驱动的进程内基线；外部网关或 IdP 仍然可选 |---

## 🎯 Purpose

该 API 提供了一个注册表样式的表面：

- 📋 按质量、安全性、类别、风险等列出和过滤技能
- 📌 获取个人技能清单
- 🔎 全文搜索和多技能比较
- 📦 捆绑列表及可用性
- 📐 只读安装计划生成
- 📥 下载生成的工件、档案和校验和清单

同样的目录和清单表面也是以下内容的基础：

- 本地 CLI 安装规划
- MCP只读发现响应
- A2A 发现和安装计划切换
- 潜在的私人目录，外部身份验证位于顶部---

## 快速开始

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**默认**：`127.0.0.1:3333`---

## 🔐 Security Controls

所有安全控制都是环境驱动的且可选：

|控制|变量|示例|
|:--------|:--------|:--------|
| 🔑**不记名授权**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `替换我` |
| 🗝️**API 密钥身份验证**| `OMNI_SKILLS_HTTP_API_KEYS` | `键-a，键-b` |
| 🛂**管理员授权**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `管理秘密` |
| 🚦**速率限制**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**审核日志**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**审核格式**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` 或 `text` |
| 📄**审核文件**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS 许可名单**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**IP 许可名单**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**可信代理**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `环回` |
| 🚧**维护模式**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**之后重试**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**行为：**
- 🟢 `/healthz` 仍然**始终未经身份验证**
- 🔒 当启用身份验证时，所有其他路由都需要身份验证
- 🛂 `/admin/runtime` 启用时需要管理员令牌
- 🚦 速率限制是通过 `X-RateLimit-*` 响应头进行的
- 🧾 每个响应都带有 `X-Request-Id`
- 🚧 对于非健康、非管理路由，维护模式返回“503”### ✅ Current governance decision

当前的项目方向是**为公共或私有部署重用相同的目录格式**并在需要时在外部进行分层身份验证。

这意味着：

- 清单和 API 形状保持共享
- 自托管和本地部署可以保持在进程基线上
- 更先进的托管治理可以稍后转移到外部网关或企业身份验证层，而无需分叉数据模型### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

|方法|路径|描述 |
|:--------|:-----|:------------|
| `获取` | `/healthz` |健康检查（未经身份验证）|
| `获取` | `/openapi.json` |动态OpenAPI 3.1规范|
| `获取` | `/管理/运行时` |治理和运行时快照（启用时进行管理员身份验证）|### 📚 Catalog & Skills

|方法|路径|描述 |
|:--------|:-----|:------------|
| `获取` | `/v1/技能` |使用过滤器列出技能 |
| `获取` | `/v1/skills/:id` |获取个人技能清单 |
| `获取` | `/v1/搜索` |全文检索 |
| `获取` | `/v1/compare?ids=id1,id2` |比较多项技能 |
| `获取` | `/v1/bundles` |列出可用的捆绑包 |
| `发布` | `/v1/install/plan` |生成安装计划 |### 🔎 List/Search Filters

|过滤|示例|
|:--------|:--------|
| `类别` | `？类别=开发` |
| `工具` | `？工具=光标` |
| `风险` | `？风险=安全` |
| `排序` | `?sort=质量\|最佳实践\|级别\|安全\|名称` |
| `订单` | `?order=asc\|desc` |
| `最低质量` | `？min_quality=80` |
| `最小最佳实践` | `？min_best_practices=60` |
| `最低级别` | `?min_level=2` |
| `min_security` | `？min_security=90` |
| `验证状态` | `?validation_status=通过` |
| `安全状态` | `?security_status=通过` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

|方法|路径|描述 |
|:--------|:-----|:------------|
| `获取` | `/v1/catalog/download` |完整目录下载 |
| `获取` | `/v1/skills/:id/artifacts` |技能神器一览 |
| `获取` | `/v1/skills/:id/archives` |列出技能档案 |
| `获取` | `/v1/skills/:id/downloads` |所有可用的下载链接 |
| `获取` | `/v1/skills/:id/download/manifest` |技能清单 JSON |
| `获取` | `/v1/skills/:id/download/entrypoint` |技能技能.md |
| `获取` | `/v1/skills/:id/download/artifact?path=<路径>` |具体神器|
| `获取` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` |技能档案|
| `获取` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` |分离签名|
| `获取` | `/v1/skills/:id/download/archive/checksums` | SHA-256 校验和 |---

## 🔗 Link Enrichment

当通过 API 处理请求时，服务器**自动丰富**清单、工件列表，并使用从传入请求源派生的绝对 URL 来安装计划。这是运行时的丰富，而不是烘焙到 `dist/manifests/*.json` 中。---

## 📋 Install Plan Notes

> ⚠️**安装计划是预览，而不是远程写入。**

API 永远不会安装到调用者的计算机上。它返回：
- 📌选定的技能元数据
- ⚠️ 针对缺少捆绑成员的警告
- 🖥️ 在本地运行的具体 CLI 命令
- 🔗 请求源可用时的公共下载 URL---

## 🔌 Relationship to MCP

MCP 服务器在配置后重用相同的公共 API URL：```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

这允许 MCP 安装预览返回具体的清单和工件 URL，而不仅仅是本地存储库路径。---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` 返回对托管诊断有用的治理快照：

- 主动身份验证方法
- 管理员身份验证状态
- 速率限制窗口和最大值
- CORS 许可名单
- IP白名单
- 维护模式状态
- 审核目的地和格式
- 当前目录总数
- 请求 ID 回显以实现可追溯性