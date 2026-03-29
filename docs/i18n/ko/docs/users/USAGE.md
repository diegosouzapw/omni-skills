# 📗 Usage Guide (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**기술을 호출하고, 서비스를 실행하고, Omni Skills 런타임을 운영하는 데 필요한 모든 것입니다.**

전체 운영 워크플로는 [🔧 시스템 런북](../options/RUNBOOK.md)을 참조하세요.
전체 최종 사용자 명령 맵은 [🧭 CLI 사용 설명서](./CLI-USER-GUIDE.md)를 참조하세요.---

## 📊 Current Catalog Reality

| 상태 | 세부정보 |
|:-------|:---------|
| ✅**지금 사용 가능**| 디자인, 아키텍처, 디버깅, 문서, OSS, 보안, DevOps, AI 엔지니어링, 데이터, 도구 및 기계 학습 워크플로 전반에 걸쳐 공개된 32가지 기술 |
| 📦**번들**| 'essentials', 'full-stack', 'design', 'security', 'devops', 'ai-engineer' 및 'oss-maintainer'가 오늘 완전히 지원됩니다 |
| 🔌**MCP 도달**| 설치 가능 클라이언트 7개, 구성 가능 클라이언트 16개, 일류 구성 대상 33개, 구성 프로필 19개 |
| 🤖**A2A 내구성**| 메모리, JSON 또는 SQLite 로컬 내구성, 재시작 재개, 선택적 프로세스 실행기 및 공유 작업자를 위한 옵트인 임대 조정 |---

## 🖥️ Invocation by Client

| 클라이언트 | 호출 방법 | 기술 경로 |
|:-------|:-------------|:------------|
| 🔵**클로드 코드**| `>> /skill-name 도와주세요...` | `~/.claude/skills/` |
| 🟡**제미니 CLI**| `@skill-name을 사용하여...` | `~/.gemini/skills/` |
| 🔴**코덱스 CLI**| `@skill-name을 사용하여...` | `~/.codex/skills/` |
| 🟢**키로**| 요청 시 스킬 자동 로드 | `~/.kiro/skills/` |
| 🟣**반중력**| `@skill-name을 사용하여...` | `~/.gemini/antigravity/skills/` |
| 🔵**커서**| 채팅의 `@skill-name` | `~/.cursor/skills/` |
| ⚪**오픈코드**| `오픈코드 실행 @skill-name` | `.opencode/skills/` |
| ⬛**부조종사**| 스킬 내용을 수동으로 붙여넣기 | 해당 없음 |

Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline 및 Kilo Code와 같은 클라이언트는 주로 기술 디렉터리가 아닌 `config-mcp` 흐름을 사용합니다.---

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

>**your 참고:**
> - 대화형 터미널에서 `npx omni-skills`는 이제 안내식 설치 흐름을 엽니다.
> - `npx omni-skills ui`는 설치, 검색 및 서비스 시작 작업을 통해 시각적 잉크 셸을 엽니다.
> - 시각적 셸은 `~/.omni-skills/state/ui-state.json`에 최근 설치, 최근 서비스 시작, 즐겨찾기 및 명명된 사전 설정을 유지합니다.
> - TTY 외부에서는 선택기가 제공되지 않으면 전체 설치가 여전히 기본값입니다.
> - `--skill`은 선택한 게시된 스킬만 설치합니다.
> - `--bundle`은 번들을 확장하고 선별된 번들에 선언된 게시된 멤버를 설치합니다.
> - `find`는 `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk` 등 12개 이상의 필터 플래그를 지원합니다.
> - `config-mcp`는 일류 기술 디렉토리가 없는 MCP 지원 제품에 대한 올바른 경로입니다.---

## 🔌 Runtime Commands

CLI는 단순한 설치 프로그램이 아닌 통합 운영 도구입니다.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

시각적 셸은 다음을 지원합니다.

- 알려진 클라이언트 또는 사용자 정의 경로 선택을 통한 설치 안내
- 플래그를 기억하지 않고 검색 후 설치
- MCP 클라이언트 구성 미리보기 및 쓰기 흐름 안내
- MCP, API 및 A2A 안내 시작
- 최근 설치 및 서비스 재출시
- 저장된 설치 및 서비스 사전 설정
- 좋아하는 스킬과 번들### 🩺 Diagnostics

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

| # | 팁 |
|:--|:--|
| 1️⃣ | 프롬프트에서 이름으로 스킬 참조 |
| 2️⃣ | 에이전트에 필요한 정확한 아티팩트, 코드 또는 디자인 컨텍스트 제공 |
| 3️⃣ | 최소 설치 공간을 위해 `--skill`을 선호합니다 |
| 4️⃣ | 패키징 또는 런타임 문제를 디버깅하기 전에 `doctor` 및 `smoke` 사용 |
| 5️⃣ | 이제 7개의 스타터 번들이 모두 완전히 지원되므로 번들을 엄선된 도메인 설치로 사용 |
| 6️⃣ | 하나의 흐름으로 검색과 설치를 모두 수행하려면 `find --install --yes`를 사용하세요. |
| 7️⃣ | 인증, 비율 제한, 서명 및 확인 환경 변수에 대한 내용은 [runbook](../options/RUNBOOK.md)을 참조하세요.