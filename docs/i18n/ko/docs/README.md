# 📖 Omni Skills — Documentation Hub (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**현재 Omni Skills 플랫폼을 사용, 운영, 확장 및 이해하기 위한 중심 참조 자료입니다.**

표준 커뮤니티 파일은 저장소 루트에 있습니다.
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| 면적 | 상태 | 세부정보 |
|:------|:------|:---------|
| 🏗️**런타임**| ✅ 현재 | 통합 CLI, 잉크 시각적 셸, API, MCP 및 A2A는 모두 동일한 패키지에서 제공됩니다.
| 📦**카탈로그**| 😀 32가지 스킬 | 15개의 활성 카탈로그 카테고리와 7개의 완전 지원 번들에 걸쳐 게시된 'L3' 기술 32개 |
| 🎯**설치**| ✅ 현재 | 안내식 TTY 설치, 선택적 `--skill` 및 `--bundle`, 사용자 정의 경로 지원 및 검색 기반 설치 |
| 🌐**API**| ✅ 현재 | 인증, 관리 런타임, 속도 제한, CORS/IP 허용 목록, 유지 관리 모드 및 다운로드가 포함된 읽기 전용 레지스트리 API |
| 🔌**MCP**| ✅ 현재 | `stdio` · `stream` · `sse`, 로컬 사이드카 모드, 설치 가능 클라이언트 7개, 구성 가능 클라이언트 16개, 구성 대상 33개, 구성 프로필 19개 |
| 🤖**A2A**| ✅ 현재 | JSON/SQLite 내구성, 재시작 재개, SSE 스트리밍, 취소, 외부 실행자 모드 및 명시적으로 활성화된 경우 선택적 임대 조정을 갖춘 단순 우선 로컬 런타임 |
| 🛡️**보안**| ✅ 현재 | 정적 스캐너, 선택적 ClamAV/VirusTotal, 서명된 릴리스 아티팩트, 아카이브 체크섬 및 릴리스 시간 확인 |
| 📋**분류**| ✅ 현재 | 정식 분류법, 성숙도, 의미론적 품질 확산, 모범 사례 확산 및 보안 점수 |
| 📁**아카이브**| ✅ 현재 | SHA-256 체크섬 매니페스트가 포함된 스킬별 `.zip` 및 `.tar.gz` 아카이브 |
| 🔐**서명**| ✅ 현재 | 릴리스 태그에 분리된 서명이 적용됩니다. 로컬 설치 흐름은 동일한 매니페스트와 체크섬 메타데이터를 사용합니다. |
| 🧬**흡입 흐름**| ✅ 현재 | 기본 기술은 `skills/` 아래에 있습니다. PR 자동화는 이를 검토하고 `skills_omni/` 아래에 Omni-enhanced 파생 상품을 제안합니다 |## 🔭 Current Project State

이제 기초 트랙은 활성 프로젝트 상태에 있고 두 번째 카테고리 확장 웨이브는 이미 카탈로그에 있습니다. 이제 프로젝트는 선택적 향후 확장 트랙이 있는 작업 기준으로 읽어야 합니다.

- 공개 'v0.1.2' 및 비공개 'v0.0.1'은 현재 안정적인 릴리스 플로어입니다.
- 이제 카탈로그는 15개의 활성 카테고리와 7개의 완전히 지원되는 번들에 걸쳐 32개의 공개된 기술을 다루고 있습니다.
- 다국어 네이티브 섭취 및 영어 전용 선별 출력을 포함하여 네이티브 섭취 및 선별된 `skills_omni/` 출력이 모두 작동됩니다.
- 프로토콜 표면, 릴리스 자동화 및 개인 개선 자동화는 부트스트랩이 아닌 서비스 중입니다.

향후 확장은 의도적으로 이루어집니다.

- '디자인', '도구', '데이터 AI', '머신러닝' 심화
- 현재 코드 네이티브 트랙의 깊이가 더 강해질 때까지 휴면 상태의 비코드 네이티브 카테고리를 다시 열지 마세요.
- 그렇게 하는 동안 품질 수준과 인핸서 검토 경로를 그대로 유지하세요.

해당 계획은 이제 다음과 같이 나뉩니다.

- [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)에서 완료된 첫 번째 확장 웨이브
- [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)에서 완료된 두 번째 확장 웨이브
- 그리고 [tasks/README.md](tasks/README.md)의 미래 지향적 백로그---

## 📌 Current Decisions

이러한 아키텍처 질문은 더 이상 실제로 "공개"되지 않으며 이제 프로젝트 결정으로 처리됩니다.

1.**배포는 매니페스트 우선 및 서명된 아카이브로 유지됩니다**
   기계 판독 가능 매니페스트는 CLI, API, MCP 및 A2A에서 사용되는 계약으로 유지됩니다. 서명된 기술별 아카이브는 해당 계약 위에 계층화된 다운로드 및 릴리스 표면입니다.
2.**개인 또는 프리미엄 카탈로그는 동일한 매니페스트 스키마를 재사용해야 합니다**
   인증 및 정책은 매니페스트 또는 카탈로그 형태를 포크하는 것이 아니라 외부적으로 계층화되어야 합니다.
3.**MCP 구성은 몇 가지 표준 내보내기 제품군에 수렴되어야 합니다**
   Omni Skills는 이제 JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` 및 TOML `[mcp_servers]`를 중심으로 표준화하는 동시에 공식 클라이언트 문서에 다른 구조가 필요한 경우에만 맞춤형 작성자를 유지합니다.

이러한 결정은 다음을 포함하여 현재 공식 MCP 및 클라이언트 문서와 일치합니다.

- 'modelcontextprotocol.io'의 공식 MCP 레지스트리 및 확장 지원 지침
- OpenAI Docs MCP 및 Codex CLI 문서(`developers.openai.com` 및 `platform.openai.com`)
- `code.visualstudio.com`의 VS Code MCP 확장 및 제품 문서
- Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman 및 JetBrains AI Assistant에 대한 클라이언트 문서---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| 문서 | 무엇을 배울 것인가 |
|:----|:------|
| 📘 [시작하기](users/GETTING-STARTED.md) | 첫 번째 스킬 설치, 확인 및 호출 |
| 🧭 [CLI 사용자 가이드](users/CLI-USER-GUIDE.md) | 전체 명령 참조 및 실제 CLI 사용 패턴 |
| 📗 [사용 가이드](users/USAGE.md) | CLI 명령, 설치 모드, 런타임 명령 및 MCP 구성 흐름 |
| 📦 [번들](users/BUNDLES.md) | 엄선된 번들 및 현재 가용성 |
| 📚 [카탈로그](CATALOG.md) | 게시된 기술의 자동 생성 카탈로그 |
| 🔧 [시스템 런북](options/RUNBOOK.md) | 런타임 빌드, 제공, 보안 및 문제 해결 |### 🏗️ If You Want to **Understand** the Runtime

| 문서 | 무엇을 배울 것인가 |
|:----|:------|
| 🗺️ [에이전트 네이티브 로드맵](architecture/AGENT-NATIVE-ROADMAP.md) | 아키텍처 발전, 폐쇄적 결정 및 나머지 확장 영역 |
| 🧭 [CLI UX 로드맵](architecture/CLI-UX-ROADMAP.md) | 안내식 및 시각적 CLI의 역사적 계획 및 현재 형태 |
| 📐 [ADR-0001: 작업 공간 재단](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | 핵심 모노레포 및 공유 런타임 결정 |
| 🔬 [코드베이스 분석](architecture/CODEBASE-ANALYSIS.md) | 현재 런타임 구성, 개수 및 시스템 경계 |
| 🌐 [카탈로그 API 표면](specs/CATALOG-API.md) | HTTP 엔드포인트, 필터링, 거버넌스 및 다운로드 |
| 🧩 [CLI 안내 설치 프로그램](specs/CLI-GUIDED-INSTALLER.md) | 안내된 설치 프로그램에 대한 행동 계약 |
| 🖥️ [CLI 비주얼 셸](specs/CLI-VISUAL-SHELL.md) | 잉크 시각적 셸, 상태 모델 및 서비스 허브 |
| 🔌 [로컬 MCP 사이드카](specs/LOCAL-MCP-SIDECAR.md) | 파일 시스템 인식 도구, 허용 목록 모델 및 구성 작성 |
| 🧭 [클라이언트 지원 매트릭스](specs/CLIENT-SUPPORT-MATRIX.md) | 지원되는 CLI 및 IDE 클라이언트, 작성기, 수동 대상 및 소스 참조 |
| 📊 [스킬 분류](specs/SKILL-CLASSIFICATION.md) | 분류, 점수 계산 휴리스틱 및 메타데이터 아티팩트 |
| 🛡️ [보안 검증](specs/SECURITY-VALIDATION.md) | 스캐너, 아카이브, 서명 및 릴리스 확인 |
| 📋 [스킬 매니페스트 스펙](specs/SKILL-MANIFEST.md) | 기계가 읽을 수 있는 매니페스트 형식 및 호환성 계약 |### 🤝 If You Want to **Contribute**

| 문서 | 무엇을 배울 것인가 |
|:----|:------|
| 📝 [기고 가이드](../CONTRIBUTING.md) | Repo 워크플로 및 풀 요청 기대치 |
| 🧾 [기술 PR 워크플로](contributors/SKILL-PR-WORKFLOW.md) | 네이티브 섭취, 자동 강화 처리, `skills_omni/` 게시 및 리뷰어 기대 |
| 📄 [스킬 템플릿](contributors/SKILL-TEMPLATE.md) | 현재 머리말과 구조가 포함된 스타터 `SKILL.md` |
| 🔬 [스킬 해부학](contributors/SKILL-ANATOMY.md) | 기술에 대한 구조 및 품질 기대 |
| ✅ [품질 기준](contributors/QUALITY-BAR.md) | 저장소에 대한 승인 기준 |
| 🏆 [고득점 플레이북](contributors/HIGH-SCORE-PLAYBOOK.md) | 높은 성숙도, 품질, 모범 사례 및 보안 점수를 높이는 요인 |
| 📋 [작업 백로그](tasks/README.md) | 나머지 공공 및 민간 작업에 대한 세부 구현 잔고 |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

게시된 '옴니-스킬' 바이너리는 통합된 공개 진입점입니다.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

전체 최종 사용자 명령 화면을 보려면 [CLI 사용 설명서](users/CLI-USER-GUIDE.md)를 사용하세요.### 📁 Generated Artifacts

빌드 파이프라인은 모든 런타임 표면을 구동하는 머신 판독 가능 파일을 내보냅니다.

| 유물 | 목적 |
|:---------|:---------|
| `metadata.json` | 저장소 전체 검증 및 점수 요약 |
| `skills_index.json` | Repo-local 정규화 기술 지수 |
| `dist/catalog.json` | 검색 및 목록 발행 카탈로그 |
| `dist/bundles.json` | 가용성이 포함된 번들 정의 |
| `dist/manifests/<skill>.json` | 기술별 기계 판독 가능 매니페스트 |
| `dist/archives/<skill>.zip` | 스킬 아카이브(zip) |
| `dist/archives/<skill>.tar.gz` | 스킬 아카이브(타르볼) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 체크섬 매니페스트 |

`dist/`는 의도적으로 커밋된 상태를 유지합니다. 생성된 이러한 아티팩트는 설치, API, MCP, A2A, 연기 및 릴리스 계약의 일부입니다.### 🌐 API

```bash
npx omni-skills api --port 3333
```

기술, 번들, 비교, 설치 계획 및 아티팩트 다운로드를 위한 읽기 전용 레지스트리 API입니다.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

로컬 사이드카는 이제 다음에 대한 최고 수준의 MCP 구성 작성을 지원합니다.

- 클로드 코드
- 커서
- VS Code 및 Dev 컨테이너
- 제미니 CLI
- 반중력
- 키로
- 코덱스 CLI
- 계속
- 윈드서핑
- 오픈코드
- 클라인
- GitHub Copilot CLI
- 킬로코드
- 제드
- 거위### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

작업 수명 주기, 스트리밍, 지속성, 재시작 복구 및 단순 우선 로컬 오케스트레이션. 공유 임대 실행은 명시적으로 활성화된 경우 사용할 수 있습니다. Redis는 기본 로컬 경로가 아닌 고급 호스팅 옵션으로 유지됩니다.---

## 🗂️ Repository Map

| 경로 | 목적 |
|:------|:---------|
| 📂 `기술/` | 표준 저작 기술 |
| 📖`문서/사용자/` | 최종 사용자 문서 |
| 🤝`문서/기고자/` | 기여자 템플릿 및 지침 |
| 🏗️`문서/아키텍처/` | 로드맵, ADR 및 기술적 분석 |
| 🔧`문서/작업/` | 운영 런북 |
| 📋`문서/사양/` | 런타임, 프로토콜 및 아티팩트 계약 |
| 📚`docs/CATALOG.md` | 생성된 기술 카탈로그 |
| 📦`거리/` | 기계가 읽을 수 있는 아티팩트 생성 |
| 🧠`패키지/카탈로그-코어/` | 공유 카탈로그 런타임 |
| 🌐 `패키지/서버-api/` | 읽기 전용 HTTP API |
| 🔌`패키지/서버-mcp/` | MCP 서버 및 로컬 사이드카 |
| 🤖 `패키지/서버-a2a/` | A2A 서버 및 작업 런타임 |
| 🖥️`도구/빈/` | CLI 진입점 |
| 📚`도구/lib/` | 설치 프로그램 및 UI 도우미 |
| ⚙️`도구/스크립트/` | 검증, 생성, 검증 및 테스트 |---

## 🧪 Release Validation

```bash
npm run smoke
```

연기 실행은 다음을 검증합니다.

- ✅ 기술 검증 및 메타데이터 생성
- ✅ 분류 재분류 도구
- ✅ 카탈로그 아티팩트 생성
- ✅ 생성된 카탈로그 마크다운
- ✅ 아카이브 생성 및 검증
- ✅ 자동화된 테스트 스위트
- ✅`npm pack --dry-run`
- ✅ API 부팅 및 상태
- ✅ `stdio`, `stream` 및 `sse`에서 MCP 부팅
- ✅ A2A 부팅, 폴링, SSE 스트리밍, 취소 및 푸시 구성 수명 주기