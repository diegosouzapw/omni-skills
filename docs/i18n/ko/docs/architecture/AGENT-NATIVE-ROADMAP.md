# 🗺️ Agent-Native Roadmap (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Omni Skills의 아키텍처 발전 계획: 설치 프로그램 우선 저장소부터 논리 중복 없이 CLI, API, MCP 및 A2A를 지원하는 공유 카탈로그 런타임까지.**---

## 📊 Current Platform Areas

| 단계 | 이름 | 상태 |
|:------|:------|:-------|
| 1️⃣ | 계약 및 유물 | ✅ 현재 |
| 2️⃣ | 읽기 전용 카탈로그 API | ✅ 현재 |
| 3️⃣ | MCP 검색 표면 | ✅ 현재 |
| 4️⃣ | 로컬 설치 및 구성 Surface | ✅ 현재 |
| 5️⃣ | A2A 오케스트레이션 | ✅ 현재 |### ✅ What Exists Today

- `dist/`에 있는 기계 판독 가능한 카탈로그 아티팩트
- 검색, 번들, 비교, 설치 계획 및 다운로드를 위한 엔드포인트 범위를 갖춘 읽기 전용 HTTP API
- `stdio`, 스트리밍 가능한 HTTP 및 SSE 전송 기능을 갖춘 MCP 서버
- 허용 목록에 있는 쓰기 및 'config-mcp' 흐름이 포함된 로컬 사이드카
- 설치 가능 클라이언트 7개, 구성 가능 클라이언트 16개, MCP 구성 대상 33개, 구성 프로필 19개
- `auth-flows`, `threat-modeling`, `release-engineering` 및 `context-engineering`을 통해 `full-stack`, `security`, `devops` 및 `ai-engineer` 내에서 더 심층적인 번들 전문화
- SHA-256 체크섬 및 릴리스 태그의 분리된 서명이 포함된 기술별 아카이브(`zip`, `tar.gz`)
- API 거버넌스 기준: 베어러/API 키 인증, 관리자 런타임 인증, 속도 제한, 감사 로깅, CORS/IP 허용 목록, 신뢰 프록시, 유지 관리 모드 및 요청 ID
- 작업 수명 주기, JSON/SQLite 내구성, 다시 시작 재개, SSE 스트리밍, 취소, 푸시 알림, 선택적 프로세스 실행기 및 옵트인 임대 조정 기능을 갖춘 A2A 런타임### 🔭 Future Expansion Areas

이제 핵심 로드맵은 현재 플랫폼 범위를 설명합니다. 나머지 항목은 기본 격차가 아닌 향후 확장 영역입니다.

- 이 시점부터 매우 선택적인 MCP 추가만 가능하며 공식 공개 문서를 통해 안전한 작성자가 가능한 경우에만 가능합니다.
- 더 깊은 참조 팩과 더 많은 의미론적 채점을 통해 분류자는 뛰어난 기술과 단순히 세련된 기술을 계속 분리합니다.
- 프로젝트에 나중에 게이트웨이 또는 IdP 통합이 필요한 경우 현재 진행 중인 기준을 넘어서는 엔터프라이즈 호스팅 거버넌스
- 새로 활성화된 '디자인', '도구', '데이터-AI' 및 '머신러닝' 트랙 전반에 걸쳐 더욱 심화된 전문화
- 공식 운영 모델을 유지하면서 프라이빗 인핸서를 중심으로 지속적인 운영 개선: OmniRouter는 'cx/gpt-5.4'에 고정, '모의' 또는 성능 저하된 프리플라이트의 호스팅 클라우드, LAN 또는 자체 호스팅 실행에서 안정적인 '라이브'
- 누락된 플랫폼 기반이 아닌 서비스 품질 작업으로만 지속적인 릴리스 및 워크플로 강화## Future Catalog Expansion Track

이제 처음 두 개의 공개 카테고리 확장 물결이 시작되었습니다.

- `디자인` → `디자인 시스템 운영`, `접근성 감사`, `디자인 토큰 거버넌스`
- `도구` → `mcp-server-authoring`
- `data-ai` → `data-contracts`
- `머신러닝` → `모델 서빙`

다음으로 권장되는 단계는 더 이상 카테고리 활성화 자체를 위한 것이 아닙니다. 새로 활성화된 코드 네이티브 트랙을 심화시켜 단일 기술 기반이 아닌 내구성 있는 제품 표면처럼 느껴지도록 하는 것입니다.

권장 방향:

1. 더 많은 운영 설계 시스템 워크플로를 통해 '설계'를 심화합니다.
2. 저작 및 플러그인 중심 기술로 '도구' 심화
3. 구현 우선 파이프라인 및 계측 기술로 'data-ai' 심화
4. 서빙, 훈련, 평가 운영 기술을 통해 '머신러닝'을 심화합니다.

강력한 코드 네이티브 제안이 나타나지 않는 한 의도적으로 연기된 카테고리:

- '사업'
-`콘텐츠 미디어`

해당 확장 기록은 이제 다음에서 추적됩니다.

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ 현재 `npx omni-skills` 작업흐름을 계속 작동하세요.
- ✅ 기계가 읽을 수 있는 기술 정보 소스를 소개합니다.
- ✅ 상담원의 검색, 추천, 설치 계획 지원
- ✅ 로컬 파일 시스템 쓰기와 원격 카탈로그 문제 분리
- ✅ CLI, API, MCP 및 A2A에서 동일한 메타데이터 재사용---

## 🚫 Non-Goals

- ❌ 호스팅된 서버에서 사용자 컴퓨터에 원격 설치
- ❌ `SKILL.md`를 정식 저작 형식으로 교체합니다.
- ❌ 기여자가 매니페스트를 직접 작성하도록 요구
- ❌ 기본적으로 프로젝트를 대규모 호스팅 대기열 플랫폼으로 전환---

## 🏗️ Target Architecture

3개의 프로토콜 표면이 있는 하나의**카탈로그 코어**:

| 표면 | 최고의 대상 | 모드 |
|:---------|:---------|:------|
| 🌐**REST API**| 레지스트리 액세스, UI 통합, 타사 소비자 | 읽기 전용 |
| 🔌**MCP**| 에이전트 검색, 설치 미리보기, 구성 작성, 클라이언트 레시피 | 읽기 전용 + 로컬 쓰기 |
| 🤖**A2A**| 에이전트 간 조정 및 설치 계획 전달 | 단순 우선 로컬 내구성을 갖춘 작업 수명주기 |### ⚙️ Core Principle

>**모든 프로토콜은 동일한 생성된 아티팩트 계열을 사용합니다.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

매니페스트는 공유 계약을 유지합니다. 아카이브는 계약을 대체하는 것이 아니라 해당 계약 위에 계층화된 배포 결과물입니다.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

호스팅된 API 및 원격 MCP 서버에서 사용됩니다.

| ✅ 허용됨 | ❌ 허용되지 않음 |
|:------------|:---------------|
| 검색 기술 | 호출자의 파일 시스템에 쓰기 |
| 매니페스트 가져오기 | 로컬 클라이언트 구성 변경 |
| 기술 비교 | 임의의 기계 상태 추론 |
| 번들 추천 | — |
| 설치 계획 수립 | — |### 2️⃣ Local Installer Mode

CLI 및 MCP 사이드카에서 사용됩니다.

| ✅ 허용됨 |
|:------------|
| 로컬 AI 클라이언트 감지 |
| 설치된 기술 검사 |
| 미리보기 파일 작업 |
| 스킬 디렉터리 설치 또는 제거 |
| 미리보기 후 로컬 MCP 구성 작성 |

> ❗실제 OS 쓰기가 발생하는 유일한 모드로 남아 있습니다.---

## 📐 Protocol Split

### 🌐 REST API

레지스트리 액세스, 검색, 비교, 버전별 다운로드 및 설치 계획에 가장 적합합니다.

**엔드포인트**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

도구 기반 검색, 신속한 권장 사항, 설치 미리 보기 및 클라이언트별 MCP 설정에 가장 적합합니다.

**읽기 전용 도구**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**로컬 도구**: `Detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

검색 전달, 설치 계획 워크플로 및 재개 가능한 에이전트 작업 실행에 가장 적합합니다.

**현재 작업**: `discover-skills` · `recommend-stack` · `prepare-install-plan`---

## 🛡️ Security Model

| 원리 | 구현 |
|:----------|:---------------|
| 🔒 호스팅 서비스는 읽기 전용입니다 | API 및 원격 MCP가 호출자 파일 시스템에 쓰지 않습니다. |
| 📂 글은 현지에 머물다 | CLI 및 MCP 사이드카 전용 |
| 👁️ 작성 전 미리보기 | 로컬 변이에 대한 드라이런 기본값 |
| 🔑 무결성은 명시적입니다 | 생성된 아티팩트에 대한 SHA-256 체크섬 |
| ✍️ 릴리스 신뢰는 명시적입니다 | 릴리스 태그에 분리된 서명 적용 |
| ⚠️ 위험이 표면화됨 | 위험 및 보안 메타데이터가 모든 런타임 표면에 전파됨 |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- 문서화된 타겟 아키텍처
- 정의된 매니페스트 스키마
- 생성된 메타데이터, 카탈로그, 매니페스트, 번들 및 아카이브### Phase 2: Catalog Service

- Express 5를 사용한 읽기 전용 HTTP API
- 검색, 필터링, 매니페스트 조회, 번들 목록, 비교 및 다운로드
- 환경 기반 호스팅 거버넌스 기준### Phase 3: MCP Discovery

- 공식 `@modelcontextprotocol/sdk` 통합
- `stdio`, 스트리밍 가능한 HTTP 및 SSE 전송
- 공유 카탈로그가 지원하는 읽기 전용 도구, 리소스 및 프롬프트### Phase 4: Local Install and Config Surface

- 허용된 쓰기가 포함된 로컬 사이드카
- 7개의 설치 가능 클라이언트 감지
- 33개 대상과 19개 구성 프로필에 걸쳐 16개 구성 가능 클라이언트에 대한 구성 작성
- CLI 및 시각적 셸의 'config-mcp' 흐름 안내
- Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose 및 Dev 컨테이너에 대한 안정적인 지원### Phase 5: A2A Orchestration

-`/.well-known/agent.json`의 에이전트 카드
- `message/send`, `message/stream`, `tasks/get`, `tasks/cancel`, `tasks/resubscribe` 및 푸시 알림 구성 방법
- 재시작 복구 기능을 갖춘 JSON 및 SQLite 지속성
- 선택적인 외부 프로세스 실행자
- SQLite 및 선택적 고급 Redis 조정을 위해 작업자 전체에 걸쳐 옵트인 임대 실행
- 외부 종속성 없이 메모리, JSON 또는 SQLite에 유지되는 단순 우선 기본값### Current Enhancer Operating Decision

이제 프라이빗 인핸서가 지원하는 '라이브' 모델이 명시적입니다.

- 호스팅된 PR 자동화는 비행 전 게이트 '라이브' 시도를 실행합니다.
- 공용 OmniRoute 게이트웨이가 차단되거나 불안정한 경우 PR은 불투명하게 실패하는 대신 운영자 측 이유와 함께 '차단됨'으로 표시됩니다.
- 표준적으로 신뢰할 수 있는 '라이브' 경로는 LAN 또는 로컬 서비스 실행으로 유지됩니다.
- 예약된 비공개 GitHub는 운영자가 명시적으로 'live'를 요청하지 않는 한 기본적으로 'mock' 상태를 유지합니다.---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**결정**: 매니페스트를 공유 계약으로 유지하고 서명된 기술별 아카이브를 배포 표면으로 유지합니다.

**이유**:
- CLI, API, MCP 및 A2A는 이미 정규화된 매니페스트 형태를 사용합니다.
- 아카이브는 다운로드 및 검증에 이상적이지만 유일한 검색 계약으로는 열악합니다.
- 이를 통해 저작이 단순해지고 배포가 검증 가능해집니다.### 2. Private or Premium Catalogs

**결정**: 동일한 매니페스트 및 카탈로그 형식과 레이어 인증 또는 정책을 외부적으로 재사용합니다.

**이유**:
- 데이터 모델 포크를 방지합니다.
- 현재 API/MCP 거버넌스 접근 방식과 일치합니다.
- OAuth 클라이언트 자격 증명 및 기업 관리 인증과 관련된 MCP 생태계 방향과 계속 호환됩니다.### 3. Client Writer Strategy

**결정**: 소수의 정식 내보내기 제품군에 집중하고 공식 클라이언트 문서에서 요구하는 경우에만 맞춤형 작성자를 유지합니다.

**현재 사용 중인 정식 계열**:
- JSON `mcpServers`
- JSON `서버`
- JSON `컨텍스트_서버`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**이유**:
- 구현을 유지 관리 가능하게 유지합니다.
- Claude 설정, Continue YAML, Zed `context_servers` 및 Codex TOML과 같은 클라이언트별 요구 사항을 계속 지원합니다.
- 안정적인 공개 구성 문서가 없는 클라이언트를 위해 취약한 작성자를 만드는 것을 방지합니다.---

## 🌍 Research Notes Behind Those Decisions

현재 결정은 공식 생태계 문서를 통해 확인되었습니다.

- MCP 생태계는 이제 OAuth 클라이언트 자격 증명 및 엔터프라이즈 관리 인증과 같은 선택적 확장을 문서화하여 카탈로그 형식을 포크하는 대신 호스트 인증 외부화를 지원합니다.
- OpenAI는 공유 매니페스트와 클라이언트-작성자 전략에 맞는 공개 문서 MCP 서버 및 Codex MCP 구성 패턴을 문서화합니다.
- VS Code는 전용 '서버' 기반 작성자 유지 관리를 강화하는 일류 MCP 지원 및 확장 가이드를 문서화합니다.
- JetBrains AI Assistant는 안정적인 크로스 플랫폼 파일 계약이 아닌 제품 UX를 통해 MCP 설정을 문서화하여 현재로서는 수동/스니펫 영역에 유지하도록 지원합니다.---

## 🔮 Longer-Term Decision Points

몇 가지 전략적 질문만이 진정으로 열려 있습니다.

1. 현재 매트릭스를 넘어서는 클라이언트가 진정으로 일류 글쓰기의 기준을 통과하는지 여부, 아니면 나머지 제품이 수동/스니펫 전용으로 유지되어야 하는지 여부
2. 호스팅된 거버넌스가 현재 진행 중인 기준 대신 외부 게이트웨이나 기업 IdP 뒤로 이동해야 하는 경우는 언제입니까?
3. 작성자가 레퍼런스 팩의 깊이와 운영 품질을 평가할 때 기여자가 너무 독선적이 되기 전에 채점자는 어느 정도까지 평가해야 합니까?