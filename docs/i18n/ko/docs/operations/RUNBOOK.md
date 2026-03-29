# 🔧 System Runbook (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Omni Skills 구축, 검증, 제공, 보안 및 문제 해결을 위한 전체 운영 가이드입니다.**---

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

| 명령 | 그것이 하는 일 |
|:---------|:-------------|
| `npm 실행 유효성 검사` | `SKILL.md` 유효성 검사, `metadata.json` 재생성, 분류/성숙도/품질/보안 계산 |
| `npm 실행 분류:보고서` | 파일을 다시 쓰지 않고도 카테고리 드리프트 제안 표시 |
| `npm 실행 확인:스캐너` | 생성된 스킬 메타데이터에 기록된 스캐너 적용 범위 확인 |
| `npm 실행 릴리스:노트` | 메타데이터, 번들 및 Git 기록에서 사용자 정의 릴리스 노트 생성 |
| `npm 실행 빌드` | 카탈로그/매니페스트/아카이브/체크섬 재생성, 스캐너 적용 범위 및 아카이브 확인, `docs/CATALOG.md` 다시 작성 |
| `npm 테스트` | CLI, API, MCP, 사이드카 및 아카이브 흐름 전반에 걸친 전체 스모크 제품군 |---

## 🖥️ Visual Shell

게시된 CLI에는 이제 잉크 기반 연산자 셸이 포함되어 있습니다.```bash
npx omni-skills ui
```

현재 기능:

- 알려진 클라이언트 및 사용자 정의 경로에 대한 설치 안내
- 검색 후 설치 흐름
- MCP 시작 마법사
- API 실행 마법사
- A2A 실행 마법사
- 최근 설치 및 서비스 재출시
- 명명된 설치 및 서비스 사전 설정

로컬 상태 경로:```text
~/.omni-skills/state/ui-state.json
```

대체:```bash
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

정적 스캐너는 모든 기술을 자동으로 확인합니다.

| 규칙 가족 | 예 |
|:------------|:---------|
| 🎭 신속한 주입 | 유출 패턴, 지침 재정의 |
| 💣 파괴적인 명령 | `rm -rf`, `format`, `mkfs` |
| 🔑 의심스러운 경로 | `/etc/shadow`, `~/.ssh`, 자격 증명 파일 |
| ⚠️ 위험한 기본 요소 | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> `PATH`에 `clamscan`이 필요합니다.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> 해시 조회만 — 알 수 없는 파일은 기본적으로**업로드되지 않습니다**.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

엄격한 릴리스 게이트:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

아카이브는 `npm run build`에 의해 자동으로 생성됩니다.

| 출력 | 경로 |
|:-------|:------|
| 📦 우편번호 | `dist/archives/<skill>.zip` |
| 📦 타르볼 | `dist/archives/<skill>.tar.gz` |
| 🔒 체크섬 | `dist/archives/<skill>.checksums.txt` |

`dist/`는 이 저장소에서 의도적으로 커밋되었습니다. 생성된 카탈로그, 매니페스트, 번들 및 아카이브는 CLI 설치 흐름, API 다운로드 표면, MCP 미리 보기, A2A 작업 전달, 스모크 테스트 및 릴리스 확인을 위한 런타임 입력입니다.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

선택적 공개 키 재정의:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> 공개 키가 제공되지 않으면 빌드는 `openssl`을 통해 `dist/signing/`으로 공개 키를 파생시킵니다.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

버전 정책:

- 패치는 '.10'까지 증가합니다.
- '.10' 이후 다음 릴리스는 마이너를 굴리고 패치를 '.0'으로 재설정합니다.

예:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| 시나리오 | 명령 |
|:---------|:---------|
| 📥 기본 설치(반중력) | `npx 옴니 스킬` |
| 🎯 특정 스킬 + 클라이언트 | `npx 옴니-스킬 --cursor --skill 옴니-figma` |
| 🔎 검색 → 설치 | `npx omni-skills find figma --tool 커서 --install --yes` |
| 📦 번들 설치 | `npx omni-skills --cursor --bundle 필수사항` |
| 🩺 설치 확인 | `npx 만능 의사` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| 필터 | 플래그 | 예 |
|:-------|:------|:---------|
| 📂 카테고리 | `--카테고리` | `--카테고리 개발` |
| 🖥️ 도구 | `--도구` | `--도구 커서` |
| ⚠️ 위험 | `--위험` | `--위험 안전` |
| 📊 정렬 | `--sort` | `--sort quality\|best-practices\|level\|security\|name` |
| 🔄 주문 | `--주문` | `--order asc\|desc` |
| ⭐ 최소 품질 | `--최소 품질` | `--최소 품질 80` |
| 📋 민 BP | `--min-best-practices` | `--min-best-practices 60` |
| 🎯 최소 레벨 | `--최소 수준` | `--최소 레벨 2` |
| 🛡️ 최소 보안 | `--최소 보안` | `--min-security 90` |
| ✅ 검증 | `--검증 상태` | `--검증 상태 통과` |
| 🛡️ 보안 | `--보안 상태` | `--보안 상태 통과` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| 방법 | 엔드포인트 | 목적 |
|:-------|:---------|:---------|
| `GET` | `/healthz` | 건강검진 |
| `GET` | `/openapi.json` | OpenAPI 3.1 사양 |
| `GET` | `/v1/기술` | 필터가 포함된 목록 |
| `GET` | `/v1/검색` | 전체 텍스트 검색 |
| `GET` | `/v1/skills/:id/archives` | 아카이브 목록 |
| `GET` | `/v1/skills/:id/download/archive?format=zip` | 아카이브 다운로드 |
| `GET` | `/v1/skills/:id/download/archive/checksums` | 체크섬 매니페스트 |### 🔐 Hosted API Hardening

| 기능 | 명령 |
|:---------|:---------|
| 🔑 무기명 인증 | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ API 키 인증 | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 관리 런타임 인증 | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=관리자 비밀 npx omni-skills api` |
| 🚦 속도 제한 | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx 옴니 스킬 API` |
| 📝 감사 로깅 | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx 옴니 스킬 API` |
| 🌍 CORS 허용 목록 | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 IP 허용 목록 | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx 옴니 스킬 API` |
| 🚧 유지 관리 모드 | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx 옴니 스킬 API` |
| 🔁 신뢰할 수 있는 프록시 | `OMNI_SKILLS_HTTP_TRUST_PROXY=루프백 npx omni-skills api` |

> 🟢 `/healthz`는 의도적으로 열려 있습니다. 카탈로그 경로를 활성화하려면 인증이 필요합니다. 'GET /admin/runtime'은 구성 시 관리 토큰이 필요하며 라이브 거버넌스 스냅샷을 반환합니다.---

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

이제 사이드카는 다음에 대한 MCP 구성을 미리 보거나 작성할 수 있습니다.

- Claude 사용자 및 프로젝트 설정
- 클로드 데스크탑 구성
- 클라인 사용자 구성
- GitHub Copilot CLI 사용자 및 저장소 구성
- 커서 사용자 및 작업공간 구성
- 코덱스 TOML 구성
- Gemini 사용자 및 프로젝트 설정
- Kilo CLI 사용자 및 프로젝트 구성
- Kilo 작업 공간 구성
- Kiro 사용자 및 프로젝트 설정
- OpenCode 사용자 및 작업공간 구성
- 작업공간 YAML 구성 계속
- 윈드서핑 사용자 구성
- Zed 작업 공간 구성
- 작업공간 `.mcp.json`
- VS Code 작업공간 및 사용자 구성
- 개발 컨테이너 구성

`configure_client_mcp`는 클라이언트별 `레시피`도 반환하므로 운영자는 미리보기와 함께 동등한 CLI 또는 수동 설정 단계를 얻을 수 있습니다.### 🧾 MCP Config Preview and Write Flow

MCP 도구를 직접 호출하지 않고 구성 생성을 원할 경우 통합 CLI를 사용하십시오.```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

시각적 셸은 다음을 통해 동일한 워크플로를 노출합니다.

- `npx 옴니 스킬 ui`
- `서비스`
-`MCP 클라이언트 구성`

`--write`가 전달되지 않으면 명령은 미리보기 모드로 유지됩니다.### 🔐 Hosted MCP Hardening

API와 동일한 환경 변수:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**보호된 경로**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz`는 계속 열려있습니다.---

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

기본 로컬 경로는 단순 우선으로 유지됩니다.

- 'json' 또는 'sqlite' 지속성은 대기열 폴링이 비활성화된 상태에서 실행될 수 있습니다.
- 다중 작업자 청구 및 임대 장애 조치를 원하는 경우에만 `OMNI_SKILLS_A2A_QUEUE_ENABLED=1`을 설정합니다.
- Redis 조정을 기준이 아닌 고급 호스팅 옵션으로 유지### 🧱 Multi-Worker Lease Setup

임대 기반 장애 조치를 얻으려면 동일한 SQLite 저장소에 대해 두 개 이상의 A2A 노드를 실행하십시오.```bash
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

작업이 '작업 중'인 동안 작업자가 사망하면 임대가 만료된 후 다른 작업자가 해당 작업을 회수하고 실행을 계속할 수 있습니다.### 🟥 Redis Coordination

공유 SQLite 저장소에 연결된 대기열 조정을 원하지 않는 호스팅 또는 다중 노드 배포의 경우 코디네이터를 Redis로 전환하십시오.```bash
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

이 모드에서는:

- 지속성은 여전히 JSON 또는 SQLite에 존재합니다.
- 작업 청구 및 임대 소유권이 Redis로 이전됩니다.
- 여러 A2A 노드는 SQLite 행 수준 조정에 의존하지 않고 대기열을 공유할 수 있습니다.### 📡 Endpoints

| 방법 | 경로 | 목적 |
|:-------|:------|:---------|
| `GET` | `/healthz` | 건강검진 |
| `GET` | `/.well-known/agent.json` | 에이전트 카드(A2A 검색) |
| '포스트' | `/a2a` | 작업 및 스트리밍을 위한 JSON-RPC 엔드포인트 |### 🧭 Supported JSON-RPC Methods

| 방법 | 목적 |
|:-------|:---------|
| `메시지/보내기` | 작업 시작 또는 계속 |
| `메시지/스트림` | 작업 시작 및 SSE 업데이트 스트리밍 |
| `작업/가져오기` | 작업 스냅샷 폴링 |
| `작업/취소` | 활성 작업 취소 |
| `작업/재구독` | 기존 작업에 대한 SSE 업데이트 재개 |
| `작업/pushNotificationConfig/set` | 푸시 웹훅 등록 |
| `작업/pushNotificationConfig/get` | 푸시 구성 읽기 |
| `작업/푸시알림 구성/목록` | 작업에 대한 푸시 구성 나열 |
| `작업/pushNotificationConfig/삭제` | 푸시 구성 제거 |### 📡 Task Lifecycle

현재 런타임은 다음 작업 상태를 지원합니다.

- '제출됨'
- '일하다'
- `입력 필수`
- `완료`
- `취소`
- '실패'

작업은 JSON 파일이나 SQLite 저장소에 유지되며 다시 시작할 때 다시 로드됩니다. 완료된 작업과 중단된 작업은 계속 사용할 수 있습니다. 종료 중에도 '제출' 또는 '작업' 상태였던 작업은 명시적인 다시 시작 메타데이터를 통해 복구되며 기본적으로 자동으로 재개됩니다.### 🧪 Example: Start a Task

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

이제 저장소에는 두 가지 워크플로가 있습니다.

| 작업 흐름 | 트리거 | 목적 |
|:---------|:---------|:---------|
| `validate.yml` | '메인'으로 푸시/홍보 | 생성된 아티팩트가 커밋되었는지 빌드, 테스트 및 확인 |
| `release.yml` | 태그 푸시 `v*` 또는 수동 디스패치 | 릴리스 등급 스캐너를 실행하고, 버전 태그를 확인하고, 아티팩트에 서명하고, tarball을 패키징하고, npm에 게시하고, GitHub 릴리스 |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| 비밀 | 사용처 | 목적 |
|:-------|:---------|:-------|
| `VT_API_KEY` 또는 `VIRUSTOTAL` | `release.yml` | 릴리스 빌드에서 VirusTotal 해시 조회 필요 |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` 또는 `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | CI의 분리된 아카이브 서명에 필요한 개인 키 |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` 또는 `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | 선택적 공개 키 재정의; 그렇지 않으면 개인 키에서 파생됨 |
| `NPM_TOKEN` | `publish-npm` 작업 | 태그 릴리스에 대한 'npm 게시' 인증 |### 🦠 Release Scanner Policy

`release.yml`은 다음을 설정하거나 준비합니다.

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || 비밀.VIRUSTOTAL }}`
- 러너 임시 저장소의 `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH`

이는 모든 태그 기반 릴리스가 다음을 수행해야 함을 의미합니다.

- 러너에 ClamAV를 설치하고 새로 고칩니다.
- ClamAV를 활성화하여 메타데이터를 재생성합니다.
- VirusTotal을 활성화하여 메타데이터를 재생성합니다.
- CI 서명 키 자료를 러너 임시 저장소로 디코딩
- `npm run verify:scanners:strict`를 전달합니다.
- `npm run verify:archives:strict`를 전달합니다.
- npm 게시 전 테스트 및 패키지 확인 통과
- 카탈로그 메타데이터 및 Git 기록에서 사용자 정의 릴리스 노트 생성
- 게시 후 첨부된 릴리스 자산을 사용하여 GitHub 릴리스를 생성합니다.---

## 1️⃣1️⃣ Environment Variables Reference

| 변수 | 목적 | 기본값 |
|:---------|:---------|:---------|
| `OMNI_SKILLS_ROOT` | 카탈로그 루트 경로 대체 | 자동 감지 |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | 추가로 허용되는 쓰기 경로 | 알려진 클라이언트 루트 |
| `OMNI_SKILLS_MCP_MODE` | 사이드카의 경우 `local`로 설정 | 원격 |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | 로컬 모드에 대한 Alt 플래그 | `0` |
| `OMNI_SKILLS_API_BASE_URL` | MCP용 공개 API URL | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | 공개 기반 URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | 무기명 인증 토큰 | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | 쉼표로 구분된 API 키 | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | 관리 런타임 인증 토큰 | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | 창당 최대 요청 | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | 속도 제한 창(ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | 감사 로깅 활성화 | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` 또는 `text` 감사 출력 | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | 선택적 감사 로그 파일 경로 | 표준 출력 |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | 쉼표로 구분된 CORS 원본 허용 목록 | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | 쉼표로 구분된 IP 또는 CIDR 허용 목록 | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Express 신뢰 프록시 설정 | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | 유지보수 응답 활성화 | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | 유지관리 `Retry-After` 초 | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | 시뮬레이션된 비동기 작업 지연 | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`, `sqlite` 또는 `memory` 작업 저장소 | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | 사용자 정의 A2A 작업 저장소 파일 | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | 임대 인식 작업자에 대한 공유 대기열 폴링 활성화 | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `store`, `sqlite`, `local` 또는 `redis` 코디네이터 | '스토어' |
| `OMNI_SKILLS_A2A_REDIS_URL` | 외부 조정을 위한 Redis URL | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | 대기열 메타데이터에 대한 Redis 키 접두사 | `전능한 기술:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | 임대 작업자에 대한 대기열 폴링 간격 | '250' |
| `OMNI_SKILLS_A2A_LEASE_MS` | 다른 작업자가 작업을 회수할 수 있을 때까지의 임대 기간 | '4000' |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | 임대 소유권 및 진단을 위한 안정적인 작업자 식별자 | 호스트 이름 + PID + 임의 접미사 |
| `OMNI_SKILLS_A2A_EXECUTOR` | `인라인` 또는 `프로세스` 작업 실행기 | '인라인' |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | 외부 작업자 명령 재정의 | 노드 바이너리 |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | 외부 작업자 인수의 JSON 배열 | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | 부팅 시 복구된 제출/작업 작업 재개 | '1' |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | localhost 외부에서 HTTPS가 아닌 웹후크 허용 | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | ClamAV 스캐닝 활성화 | `0` |
| `VT_API_KEY` | VirusTotal API 키 | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | 서명용 개인 키 | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | 공개 키 대체 | 자동 파생 |---

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

1. `npm run build`로 다시 빌드
2. `npm run verify:archives`를 다시 실행하세요.
3. 서명이 활성화된 경우 공개 키와 'openssl' 가용성을 확인하세요.### 🦠 Release Workflow Fails on Scanner Coverage

- 저장소 비밀에 'VT_API_KEY'가 있는지 확인하세요.
- 런너에서 'freshclam' 성공 확인
- `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`를 사용하여 로컬로 다시 빌드합니다.
- `npm run verify:scanners:strict`를 다시 실행하세요.### 📦 npm Publish Fails in CI

- 저장소 비밀에 'NPM_TOKEN'이 있는지 확인하세요.
- Git 태그가 `package.json` 버전과 정확히 일치하는지 확인하세요.
- 'release-verify'를 통해 업로드된 tarball이 워크플로 아티팩트에 존재하는지 확인하세요.### ✍️ Release Signing Fails in CI

- 저장소 비밀번호에 'OMNI_SKILLS_SIGN_PRIVATE_KEY_B64' 또는 'OMNI_SKILLS_SIGN_PRIVATE_KEY'가 있는지 확인하세요.
- 공개키 비밀번호를 제공하는 경우 개인키와 일치하는지 확인하세요.
- 'openssl'이 사용 가능하고 개인 키가 PEM 형식인지 확인하세요.
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`를 사용하여 로컬로 다시 빌드합니다.
- `npm run verify:archives:strict`를 다시 실행하세요.### 🔒 API/MCP Returns `401 Unauthorized`

- `OMNI_SKILLS_HTTP_BEARER_TOKEN` 또는 `OMNI_SKILLS_HTTP_API_KEYS`를 확인하세요.
- `Authorization: Bearer <token>` 또는 `x-api-key` 헤더를 포함합니다.### 🚦 API/MCP Returns `429 Too Many Requests`

- `OMNI_SKILLS_RATE_LIMIT_MAX` 증가
- `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` 확대
- 클라이언트 또는 프로브의 버스트 트래픽을 줄입니다.### 🛂 API/MCP Admin Runtime Returns `401`

- `OMNI_SKILLS_HTTP_ADMIN_TOKEN` 확인
- `x-admin-token: <token>` 또는 `Authorization: Bearer <admin-token>`을 보냅니다.### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` 비활성화
- 유지 관리 중 활성 프로브에 `/healthz`를 사용합니다.
- 운영자 진단을 위해 관리 토큰과 함께 `/admin/runtime`을 사용합니다.### 🌍 Browser Requests Fail CORS Validation

- `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` 확인
- 정확한 구성표와 호스트를 포함합니다(예: `https://app.example.com`)### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`를 확인하세요.
- `OMNI_SKILLS_A2A_REDIS_URL` 확인
- 모든 노드에서 Redis 연결을 확인합니다.
- `coordination` 스냅샷에 대해 `/healthz`를 검사합니다.### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
