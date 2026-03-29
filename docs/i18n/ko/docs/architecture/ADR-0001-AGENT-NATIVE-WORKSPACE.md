# 📐 ADR-0001: Agent-Native Workspace Foundation (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**모노레포 작업 공간 구조를 형성한 주요 아키텍처 결정입니다.**---

## 📊 Status

✅**허용됨**— 현재 작업 공간 방향 및 활성 저장소 형태.---

## 🔍 Context

Omni Skills는**설치자 우선**저장소로 시작되었습니다. 이는 'SKILL.md' 콘텐츠를 배포하기에 충분했지만 프로토콜 네이티브 표면을 통해 에이전트에 카탈로그를 노출하기에는 충분하지 않았습니다.

우리는 다음을 지원할 수 있는 기반이 필요했습니다.

| 요구사항 | 프로토콜 |
|:------------|:---------|
| 🌐 읽기 전용 HTTP 카탈로그 API | 휴식 |
| 🔌 읽기 전용 MCP 서버 | 모델 컨텍스트 프로토콜 |
| 🤖 에이전트 쪽 A2A 표면 | 에이전트 대 에이전트 |
| 📂 로컬 설치 사이드카 | 파일 시스템 도구 |

**중요한 제약**: 각각의 새로운 서비스에서 repo 파일을 독립적으로 다시 구문 분석하지 마세요.---

## ✅ Decision

공유 카탈로그 코어 및 프로토콜별 패키지가 포함된**작업 공간 지향 모노레포**를 채택합니다.

| 패키지 | 목적 |
|:---------|:---------|
| 📦`전능한 기술`(루트) | CLI 설치 프로그램 및 repo 스크립트 |
| 🧠 `@omni-skills/catalog-core` | 공유 로딩, 검색, 비교, 번들, 설치 계획 |
| 🌐 `@omni-skills/server-api` | 읽기 전용 REST API |
| 🔌 `@omni-skills/server-mcp` | stdio/stream/sse + 로컬 사이드카 모드를 갖춘 MCP |
| 🤖`@omni-skills/server-a2a` | 에이전트 카드, 폴링, SSE 및 푸시 구성을 갖춘 A2A 작업 런타임 |### 📁 Shared Data Sources

카탈로그 코어는 다음에서 생성된 아티팩트를 읽습니다.
-`dist/catalog.json`
- `dist/manifests/<skill>.json`
-`skills_index.json`---

## ✅ Positive Consequences

| 성과 | 영향 |
|:---------|:-------|
| 🔗**공유 데이터 계약**| API, MCP 및 A2A는 동일한 아티팩트를 사용합니다 |
| 🖥️**통합 CLI**| 하나의 바이너리는 설치, UI 셸, API, MCP, A2A, 진단 및 연기를 노출합니다 |
| 🧩**프로토콜 격리**| 설치 프로그램 내부에 연결하지 않고 새 표면이 반복됨 |
| 🔌**로컬 사이드카**| 클라이언트 인식 레시피를 사용하여 허용 목록 뒤에서 쓰기 가능 MCP 모드 작업 |
| 📦**단일 패키지 런타임**| 게시된 npm 패키지는 프로토콜 표면, 검증 도구 및 생성된 아티팩트를 함께 전달합니다 |---

## ⚠️ Negative Consequences

| 트레이드오프 | 완화 |
|:---------|:------------|
| 🔄**메타데이터 복제**| Python 빌드 + JavaScript 런타임 → 결국 통합 |
| 🏗️**A2A 복잡성**| 이제 내구성 있는 수명 주기가 존재하지만 조정 어댑터가 운영 깊이를 더합니다 |
| 📦**카탈로그 정렬**| 선택적 설치에는 동기화를 유지하기 위한 명령, 매니페스트 및 문서가 필요합니다 |
| 📋**번들 메타데이터 격차**| 번들은 공개된 기술을 능가할 수 있으므로 명시적인 멤버 누락 경고가 필요합니다 |---

## ➡️ Follow-Up Items

| # | 액션 | 상태 |
|:--|:-------|:-------|
| 1️⃣ | 원격 MCP 인증 및 속도 제한 | ✅ 완료 |
| 2️⃣ | 향상된 클라이언트별 MCP 구성 작성 | ✅ 오늘 Claude, Cursor, Codex, Gemini, Kiro, VS Code 및 Dev Containers에 대한 발표 |
| 3️⃣ | 서명된 릴리스 아티팩트 또는 기술별 아카이브 | ✅ 릴리스 태그에 대한 CI 적용에 대해 지금 발표하세요 |
| 4️⃣ | A2A 작업 런타임 → 내구성 있는 오케스트레이션 | ✅ 지금 JSON/SQLite 지속성, 외부 실행자, 옵트인 임대 조정 및 선택적 고급 Redis 조정을 제공합니다 |
| 5️⃣ | 더 넓은 번들 적용 범위를 위해 게시된 카탈로그 확장 | ✅ 현재 선별된 7개의 스타터 번들을 오늘 선물하세요 |