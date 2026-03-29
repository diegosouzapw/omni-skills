# 📗 Usage Guide (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**调用技能、运行服务和操作 Omni Skills 运行时所需的一切。**

有关完整的操作工作流程，请参阅 [🔧 系统运行手册](../operations/RUNBOOK.md)。
有关完整的最终用户命令图，请参阅 [🧭 CLI 用户指南](./CLI-USER-GUIDE.md)。---

## 📊 Current Catalog Reality

|状态 |详情 |
|:--------|:--------|
| ✅**现已上市**| 32 项已发布的技能，涉及设计、架构、调试、文档、OSS、安全、DevOps、AI 工程、数据、工具和机器学习工作流程 |
| 📦**捆绑**|今天，“essentials”、“full-stack”、“design”、“security”、“devops”、“ai-engineer”和“oss-maintainer”得到了全面支持 |
| 🔌**MCP 到达**| 7 个可安装的客户端、16 个可配置的客户端、33 个一流的配置目标、19 个配置文件 |
| 🤖**A2A 耐用性**|内存、JSON 或 SQLite 本地持久性、重新启动恢复、可选进程执行器以及共享工作线程的选择租赁协调 |---

## 🖥️ Invocation by Client

|客户|如何调用 |技能之路|
|:--------|:------------|:------------|
| 🔵**克劳德代码**| `>> /技能名称帮助我...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `使用@技能名称...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `使用@技能名称...` | `~/.codex/skills/` |
| 🟢**基罗**|技能按需自动加载 | `~/.kiro/skills/` |
| 🟣**反重力**| `使用@技能名称...` | `~/.gemini/反重力/技能/` |
| 🔵**光标**|聊天中的“@技能名称” | `~/.cursor/skills/` |
| ⚪**开放代码**| `opencode run @skill-name` | `.opencode/skills/` |
| ⬛**副驾驶**|手动粘贴技能内容 |不适用 |

Continue、Junie、Windsurf、Zed、VS Code、GitHub Copilot CLI、Cline 和 Kilo Code 等客户端主要使用“config-mcp”流程而不是技能目录。---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 注意：**
> - 在交互式终端中，“npxomni-skills”现在打开引导安装流程
> - `npxomni-skills ui` 打开可视 Ink shell，其中包含安装、发现和服务启动操作
> - 可视 shell 会在 `~/.omni-skills/state/ui-state.json` 中保留最近的安装、最近的服务启动、收藏夹和命名预设
> - 在 TTY 之外，当未提供选择器时，完整安装仍然是默认设置
> - `--skill` 仅安装选定的已发布技能
> - `--bundle` 扩展包并安装在策划包中声明的已发布成员
> - `find` 支持 12 个以上过滤器标志：`quality`、`best_practices`、`skill_level`、`security`、`category`、`tool`、`risk` 等
> - `config-mcp` 是没有一流技能目录的支持 MCP 的产品的正确路径---

## 🔌 Runtime Commands

CLI是一个统一的操作工具，而不仅仅是一个安装程序。### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

视觉外壳支持：

- 使用已知客户端或自定义路径选择进行引导安装
- 搜索然后安装，无需记住标志
- 引导 MCP 客户端配置预览和写入流程
- MCP、API 和 A2A 引导启动
- 最近的安装和服务重新启动
- 保存的安装和服务预设
- 最喜欢的技能和捆绑包### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
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
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| ＃|提示 |
|:--|:----|
| 1️⃣ |在提示中按名称引用技能 |
| 2️⃣ |提供代理所需的确切工件、代码或设计上下文 |
| 3️⃣ |首选“--skill”以最小化安装占用空间 |
| 4️⃣ |在调试打包或运行时问题之前使用“doctor”和“smoke” |
| 5️⃣ |现在，所有七个入门捆绑包均已得到完全支持，请使用捆绑包作为策划的域安装 |
| 6️⃣ |使用“find --install --yes”在一个流程中进行发现+安装 |
| 7️⃣ |请参阅 [runbook](../operations/RUNBOOK.md) 了解身份验证、速率限制、签名和验证环境变量 |