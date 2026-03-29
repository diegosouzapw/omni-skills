# 🚀 Getting Started (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**스킬을 설치하고, 설정을 확인하고, 2분 이내에 첫 번째 AI 스킬을 호출하세요.**---

## 📊 Current Catalog Status

| 미터법 | 가치 |
|:-------|:------|
| 공개된 기술 |**32**아키텍처, 디자인, 보안, DevOps, AI 엔지니어링 등을 포함한 15개 활성 카테고리 |
| 정의된 번들 |**7**(모두 공개된 기술로 완전히 뒷받침됨) |
| 설치 가능 클라이언트 |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| MCP 구성 가능 클라이언트 | 33개의 일류 MCP 구성 대상에 걸쳐**16**|---

## 📦 Step 1 — Install

### 빠른 시작

```bash
npx omni-skills
```

대화형 터미널에서는 이제 클라이언트를 자동으로 가정하는 대신 안내식 설치 프로그램이 열립니다.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

그러면 설치, 검색, MCP, API 및 A2A 시작을 위한 브랜드 터미널 허브가 열립니다.### 🎯 Default Install (Antigravity Outside TTY)

TTY 외부에서는 인수 없는 설치 프로그램의 기본값은 여전히 ​​`~/.gemini/antigravity/skills`입니다.### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ 이제 'devops' 및 'ai-engineer'를 포함한 스타터 번들이 완전히 지원됩니다.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

기술이 올바른 위치에 있는지 확인하십시오.```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

또는 내장된 진단 기능을 사용하세요.```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

클라이언트를 감지하고, 기술을 설치/제거하고, MCP 구성을 작성할 수 있는 파일 시스템 도구를 에이전트에 제공합니다.```bash
npx omni-skills mcp stream --local
```

스킬 설치 대상이 아닌 클라이언트에 대해 MCP를 구성할 수도 있습니다.```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

기술 카탈로그를 읽기 전용 HTTP API로 노출합니다.```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

에이전트 간 검색, 권장 사항, 설치 계획, 폴링 및 스트리밍:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

스킬은 AI 에이전트에 다음을 제공하는 구조화된 마크다운 플레이북(`SKILL.md`)입니다.

| 구성요소 | 목적 |
|:----------|:---------|
| 📋**머리말**| 기계가 읽을 수 있는 메타데이터(이름, 카테고리, 태그, 도구, 위험) |
| 📝**몸**| 작업별 지침, 단계, 가드레일 및 예 |
| 📚**참고자료**| 에이전트가 실행 중에 참조할 수 있는 지원 문서 |
| 🎨**자산**| 아이콘, 이미지 또는 기타 패키지 리소스 |---

## ➡️ Next Steps

| 문서 | 무엇을 배울 것인가 |
|:----|:------|
| 🧭 [CLI 사용자 가이드](CLI-USER-GUIDE.md) | 설치, 런타임, 구성 및 진단에 대한 전체 명령 참조 |
| 📗 [사용 가이드](USAGE.md) | 모든 CLI 명령, 프롬프트 패턴 및 런타임 모드 |
| 📦 [번들](BUNDLES.md) | 선별된 기술 컬렉션 및 가용성 |
| 📚 [카탈로그](../CATALOG.md) | 게시된 기술의 자동 생성 카탈로그 |
| 📖 [문서 허브](../README.md) | 전체 문서 맵 |
| 🔧 [시스템 런북](../options/RUNBOOK.md) | 운영 참조 |