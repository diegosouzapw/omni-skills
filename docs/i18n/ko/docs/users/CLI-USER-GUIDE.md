# 🧭 Omni Skills CLI User Guide (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**`omni-skills`에서 제공하는 전체 공개 CLI 표면.**

다음과 같은 경우 이 가이드를 사용하세요.

| 목표 | 명령 영역 |
|:------|:-------------|
| 📥 스킬 또는 번들 설치 | [설치 흐름](#3️⃣-install-flows) |
| 🔎 카탈로그 검색 | [카탈로그 검색](#4️⃣-catalog-discovery) |
| 🔌 MCP 클라이언트 구성 | [MCP 클라이언트 구성](#5️⃣-mcp-client-config) |
| 🖥️ MCP, API 또는 A2A 서비스 시작 | [MCP 서버](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 시각적 터미널 셸 사용 | [비주얼 쉘](#9️⃣-visual-shell) |
| 🧪 진단 또는 프리플라이트 실행 | [진단](#🔟-diagnostics-and-preflight) |---

## 1️⃣ Install and Entry Modes

`npx`로 설치:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| 컨텍스트 | 무슨 일이 일어나는지 |
|:---------|:------------|
| 🖥️ TTY + 인수 없음 |**설치 안내**흐름 열기 |
| ⚙️ 비 TTY + 인수 없음 | `~/.gemini/antigravity/skills`에 비대화형 설치 |
| 🎨 `npx 옴니 스킬 UI` | 브랜드**잉크 시각적 쉘**|
| 📝`npx omni-skills ui --text` | Readline**텍스트 대체**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| 명령 | 설명 |
|:---------|:------------|
| `ui` | 🎨 비주얼 터미널 허브 |
| `[쿼리] 찾기` | 🔎 카탈로그 검색 |
| '재분류' | 🏷️ 분류 관리 |
| `[플래그] 설치` | 📥 스킬/번들 설치 |
| `config-mcp` | 🔌 MCP 클라이언트 구성 |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP 서버 모드 |
| `API` | 🌐 카탈로그 API |
| `a2a` | 🤖 A2A 런타임 |
| `연기` | 🧪 비행 전 출시 |
| `게시 확인` | 📦 패키지 게시 확인 |
| '의사' | 🩺 환경 진단 |
| '도움말' | ❓ 명령어 참조 |---

## 3️⃣ Install Flows

### 빠른 시작

```bash
npx omni-skills
npx omni-skills install --guided
```

> 안내된 흐름을 통해 다음을 선택할 수 있습니다.**대상 클라이언트**→**번들 또는 스킬**→**사용자 정의 경로**→**실행 전 미리 보기**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| 플래그 | 클라이언트 |
|:------|:---------|
| `--반중력` | 🟣 반중력 *(기본값)* |
| `--클로드` | 🟢 클로드 코드 |
| `--커서` | 🔵 커서 |
| `--codex` | 🔴 코덱스 CLI |
| `--gemini` | 🟡 쌍둥이자리 CLI |
| `--키로` | 🟠 키로 |
| `--오픈코드` | ⚪ 오픈코드 |

> 기본 설치 대상(비대화형): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| 플래그 | 목적 |
|:------|:---------|
| `--카테고리` | 분류 카테고리별로 필터링 |
| `--도구` | 지원되는 도구로 필터링 |
| `--위험` | 위험 수준별로 필터링 |
| `--sort` | 결과 정렬(예: `quality`) |
| `--주문` | 정렬 순서 |
| `--최소 품질` | 최소 품질평가점수 |
| `--min-best-practices` | 최소 모범 사례 점수 |
| `--최소 수준` | 최소 성숙도 |
| `--최소 보안` | 최소 보안 점수 |
| `--검증 상태` | 유효성 검사 상태로 필터링 |
| `--보안 상태` | 보안 상태별로 필터링 |---

## 5️⃣ MCP Client Config

클라이언트 인식 MCP 구성을 미리 보거나 작성하려면 `config-mcp`를 사용하세요.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<상세>
<summary>🔌 <strong>구성 가능 클라이언트 표면</strong></summary>

| 클라이언트 | 대상 |
|:-------|:---------|
| 클로드 | 설정 및 데스크탑 대상 |
| 커서 | 사용자 및 작업공간 |
| 코덱스 | TOML 구성 |
| 쌍둥이자리 | 사용자 및 작업공간 |
| 반중력 | 사용자 구성 |
| 오픈코드 | 사용자 및 작업공간 |
| 클라인 | 일류 대상 |
| GitHub 코파일럿 CLI | 사용자 및 저장소 |
| 킬로 코드 | 사용자, 프로젝트 및 작업공간 |
| 키로 | 사용자 및 작업공간 |
| 제드 | 작업공간 |
| VS 코드 | 사용자, 작업공간 및 Dev 컨테이너 |
| 계속 | 작업공간 YAML |
| 주니 | 프로젝트 및 사용자 |
| 윈드서핑 | 사용자 구성 |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**로컬 사이드카**에는 클라이언트 감지, 설치 미리보기, 흐름 설치/제거 및 MCP 구성 작성이 추가되었습니다.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| 경로 | 목적 |
|:------|:---------|
| `GET /healthz` | 건강검진 |
| `GET /openapi.json` | OpenAPI 사양 |
| `GET /v1/skills` | 모든 기술 나열 |
| `GET /v1/search` | 카탈로그 검색 |
| `GET /v1/skills/:id/archives` | 기술에 대한 아카이브 나열 |
| `GET /v1/skills/:id/download/archive?format=zip` | 스킬 아카이브 다운로드 |
| `GET /v1/skills/:id/download/archive/checksums` | 체크섬 다운로드 |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| 기능 | 상태 |
|:---------|:-------|
| 🔎 작업 인식 검색 | ✅ |
| 📋 설치 계획 전달 | ✅ |
| 🔄 여론조사 | ✅ |
| 📡 스트리밍 | ✅ |
| ❌ 취소 | ✅ |
| 🔔 푸시 알림 구성 | ✅ |
| 💾 지속성 | 메모리, JSON 및 SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### 기능

| 기능 | 설명 |
|:---------|:------------|
| 🧭 안내 설치 | 클라이언트 또는 사용자 정의 경로 선택 |
| 🔎 검색 + 설치 | 깃발 암기가 필요하지 않습니다 |
| 🔌 MCP 구성 | 흐름 미리보기 및 쓰기 |
| 🖥️ 서비스 출시 | MCP, API 및 A2A 안내 시작 |
| 🕐 최근 | 최근 설치 및 서비스 재출시 |
| ⭐ 즐겨찾기 | 저장된 스킬 및 번들 |
| 💾 사전 설정 | 명명된 설치 및 서비스 사전 설정 |

>**상태 경로:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> 검사: repo 상태, 로컬 설치 상태, 런타임 가용성 및 환경 문제.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> 검증: 빌드, 테스트, 패키지 출력, 서비스 부팅, 스캐너 적용 범위 및 릴리스 패키징.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 페르소나 | 명령 | 목적 |
|:------------|:---------|:---------|
| 🆕 신규 사용자 | `npx 옴니 스킬` | 최초 설치 안내 |
| 🔧 운영자 | `npx omni-skills config-mcp --list-targets` | 로컬 MCP 구성 |
| 🔧 운영자 | `npx omni-skills mcp 스트림 --local` | 로컬 사이드카 시작 |
| 📦 유지관리자 | `npx 옴니 스킬 연기` | 릴리스 유효성 검사 |
| 🔍 고급 사용자 | `npx omni-skills 보안 찾기 --정렬 품질 --최소 품질 95` | 최고의 기술을 먼저 찾아보세요 |---

## 📖 Related Documents

| 문서 | 다루는 내용 |
|:----|:--------------|
| 🚀 [시작하기](./GETTING-STARTED.md) | 2분 이내에 설치 및 확인 |
| 📗 [사용 가이드](./USAGE.md) | 모든 CLI 명령, 패턴 및 모드 |
| 📦 [번들](./BUNDLES.md) | 엄선된 기술 컬렉션 |
| 🔧 [시스템 런북](../options/RUNBOOK.md) | 운영 참조 |
| 🔌 [로컬 MCP 사이드카](../specs/LOCAL-MCP-SIDECAR.md) | 파일 시스템 도구 및 구성 작성 |