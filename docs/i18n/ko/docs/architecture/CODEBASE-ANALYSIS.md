# 🔬 Codebase Deep Analysis (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**현재 Omni Skills 아키텍처, 런타임 표면 및 빌드 파이프라인에 대한 포괄적인 기술 분석입니다.**
> 최종 분석일: 2026-03-28---

## 📊 Project Overview

| 속성 | 가치 |
|:----------|:------|
|**이름**| '전능한 기술' |
|**패키지 버전**| `0.1.3` |
|**스킬 버전**| 스킬별로, 패키지 버전과 독립적입니다. 게시된 기술 중 다수는 여전히 '0.0.1'이고 패키지는 '0.1.2'입니다. |
|**라이센스**| MIT(코드) + CC BY 4.0(콘텐츠) |
|**NPM**| `npx 옴니 스킬` |
|**공개된 기술**| 32 |
|**정의된 번들**| 7, 모두 공개된 기술로 완벽하게 뒷받침됨 |
|**활성 카탈로그 카테고리**| 18개의 표준 분류 카테고리 중 15개의 활성 버킷 |
|**아래에 샘플링된 기본 런타임/빌드 LOC**| 13,600+ |
|**생산 종속성**| 7(`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

`metadata.json`의 현재 저장소 수준 분류 스냅샷:

- 평균 품질평가점수: '96.3'
- 평균 모범 사례 점수: '98.7'
- 평균 보안 점수 : '95.0'
- 공개된 32개 스킬 모두 'L3'으로 검증됨

현재 릴리스 기준:

- 공개 저장소 릴리스: `v0.1.2`
- 개인 강화기 릴리스: `v0.0.1`
- 공개 릴리스 자동화와 비공개 릴리스 자동화는 모두 활성 상태이며 친환경적입니다.---

## 🏗️ Architecture Overview

저장소는 하나의 공유 카탈로그 코어와 여러 런타임 표면이 있는**작업 공간 단일 저장소**패턴을 따릅니다.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

디자인은 의도적으로**아티팩트 중심**입니다.

1. 스킬은 `SKILL.md`와 로컬 지원 팩으로 작성됩니다.
2. 빌드는 이를 검증, 분류, 보관 및 정규화합니다.
3. 생성된 아티팩트는 CLI, API, MCP 및 A2A에 대한 계약이 됩니다.---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4,500개 이상의 LOC 결합**— 전문가 및 가이드 사용 모두를 위한 주요 공개 인터페이스입니다.

| 명령 | 기능 |
|:---------|:---------|
| 🔎 `[쿼리] 찾기` | 점수 인식 필터를 사용한 전체 텍스트 카탈로그 검색 |
| 📦`설치` | 알려진 클라이언트 또는 사용자 정의 경로에 안내 또는 플래그 기반 설치 |
| 🧾`config-mcp` | 클라이언트 인식 MCP 구성 미리보기 또는 쓰기 |
| 🔌`mcp <운송>` | `stdio`, `stream` 또는 `sse`에서 MCP 서버를 시작합니다 |
| 🌐`API` | 카탈로그 API 시작 |
| 🤖`a2a` | A2A 런타임 시작 |
| 🧪 `연기` | 출시 전 검증 |
| 🩺 `닥터` | 로컬 진단 |
| 🖥️`ui` | 설치, 검색, 구성 및 서비스 허브가 포함된 잉크 시각적 셸 |
| 🏷️ `재분류` | 분류 표류 검사 및 재작성 |

CLI는 더 이상 단순한 설치 프로그램이 아닙니다. 전체 플랫폼을 위한 공개 운영 도구입니다.## 🧭 Future Expansion Direction

공개 런타임은 더 이상 기초 작업에서 차단되지 않으며 두 번째 카테고리 웨이브가 이미 시작되었습니다. 다음으로 유용한 카탈로그 작업은 카테고리 수 추적이 아니라 깊이입니다.

이제 카탈로그에 새로 활성화된 코드 네이티브 트랙이 있습니다.

- 'design-systems-ops', 'accessibility-audit' 및 'design-token-governance'를 통한 '설계'
- `mcp-server-authoring`을 통한 `도구`
- `data-contracts`를 통한 `data-ai`
- `모델 서빙`을 통한 `머신러닝`

권장되는 다음 방향:

1. '디자인', '도구', '데이터 AI', '머신러닝' 심화
2. 명확한 코드 네이티브 제안이 나타나지 않는 한 `비즈니스`와 `콘텐츠 미디어`를 연기합니다.
3. 카테고리 활성화 압력을 재개하는 대신 현재 품질 수준을 유지합니다.

해당 확장 웨이브는 이제 [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)에 기록됩니다.### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— 설치 가능한 보조자 7명에게 기술을 설치합니다.

| 플래그 | 대상 | 기본 경로 |
|:------|:-------|:------------|
| `--클로드` | 클로드 코드 | `~/.claude/skills` |
| `--커서` | 커서 | `~/.cursor/skills` |
| `--gemini` | 제미니 CLI | `~/.gemini/skills` |
| `--codex` | 코덱스 CLI | `~/.codex/skills` |
| `--키로` | 키로 | `~/.kiro/skills` |
| `--반중력` | 반중력 | `~/.gemini/반중력/기술` |
| `--오픈코드` | 오픈코드 | `<작업 공간>/.opencode/skills` |

다음을 지원합니다:

- 전체 라이브러리 설치
- `--skill`을 통한 선택적 설치
- `--bundle`을 통해 선별된 설치
- 안내식 TTY 및 시각적 UI 흐름
- 사용자 정의 대상 경로### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— CLI, API, MCP 및 A2A를 위한 공유 런타임 레이어입니다.

| 수출 | 설명 |
|:-------|:------------|
| 🔎 `searchSkills()` | 가중치가 적용된 텍스트 일치 및 필터 지원으로 검색 |
| 📋 `listSkills()` | 품질, 모범 사례, 수준, 보안, 위험, 도구 및 카테고리별 다축 필터링 |
| 😀 `getSkill()` | 매니페스트 해결 및 강화된 공개 URL |
| ⚖️ `compareSkills()` | 나란히 비교 |
| 💡`recommendSkills()` | 목표 중심 추천 |
| 📦 `buildInstallPlan()` | 경고 및 클라이언트 인식 지침을 통한 설치 계획 생성 |
| 🗂️`listBundles()` | 가용성을 갖춘 엄선된 번들 목록 |
| 📁`listSkillArchives()` | 아카이브 및 서명 해결 |

이는 생성 후 런타임 진실의 실제 단일 소스입니다.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— 공식 SDK를 사용하여 전체 MCP 구현.

**교통수단**

- `스디오`
- 스트리밍 가능한 HTTP
- SSE

**항상 켜져 있는 읽기 전용 도구**

- `search_skills`
-`get_skill`
-`비교_기술`
-`recommend_skills`
-`미리보기_설치`

**로컬 모드 도구**

- `Detect_clients`
- `list_installed_skills`
-`install_skills`
-`remove_skills`
-`configure_client_mcp`

MCP 표면은 다음 사이에서 의도적으로 분할됩니다.

- 원격/읽기 전용 카탈로그 사용
- 로컬/쓰기 가능 사이드카 사용### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1,943 LOC**— 클라이언트 감지, 기술 관리 및 MCP 구성 작성을 위한 파일 시스템 인식 MCP 계층입니다.

현재 실질적인 지원:

-**설치 가능한 클라이언트 7개**
-**16개의 구성 가능 클라이언트**
-**33개 구성 대상**
-**19개 구성 프로필**

설치 가능 클라이언트:

- 클로드 코드
- 커서
- 제미니 CLI
- 코덱스 CLI
- 키로
- 반중력
- 오픈코드

구성 가능 클라이언트 및 대상은 다음과 같습니다.

- Claude 설정, Claude Desktop, Claude 프로젝트 구성
- 커서 사용자 및 작업공간 구성
- VS Code 작업 영역, 사용자, 내부자 및 Dev 컨테이너 구성
- Gemini 사용자 및 작업 공간 설정
- 반중력 사용자 구성
- Kiro 사용자, 작업공간 및 레거시 경로
- Codex CLI TOML 구성
- OpenCode 사용자 및 작업공간 구성
- 클라인 설정
- GitHub Copilot CLI 사용자 및 저장소 구성
- Kilo 사용자, 프로젝트 및 작업공간 구성
- 작업공간 YAML 계속
- 윈드서핑 사용자 구성
- Zed 작업 공간 구성
- 구스 사용자 설정

사이드카는 경계에 대해 의도적으로 정직합니다.

- 허용 목록 내부에만 씁니다.
- 기본적으로 미리보기가 표시됩니다.
- 공식 문서가 안정적인 형식을 노출하는 경우에만 일류 작가를 유지합니다.
- 모든 MCP 지원 제품이 스킬 설치 대상이기도 한 것은 아닙니다.### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC 결합**— 읽기 전용 레지스트리 API와 거버넌스 미들웨어.

중요한 끝점:

-`/healthz`
- `/openapi.json`
-`/관리자/런타임`
- `/v1/스킬`
- `/v1/skills/:id`
-`/v1/검색`
-`/v1/비교`
- `/v1/번들`
-`/v1/설치/계획`
- `/v1/skills/:id/download/*`

이미 구현된 거버넌스 기준:

- 무기명 토큰 인증
- API 키 인증
- 관리자 토큰 인증
- 진행 중인 속도 제한
- 요청 ID
- 감사 로깅
- CORS 허용 목록
- IP 허용 목록
- 신뢰 프록시 처리
- 유지 관리 모드### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**메인 서버, 런타임 및 코디네이터 파일에 걸쳐 결합된 1,857 LOC**— 에이전트 간 워크플로를 위한 JSON-RPC 2.0 작업 수명 주기.

지원되는 방법:

- `메시지/보내기`
- `메시지/스트림`
-`작업/가져오기`
-`작업/취소`
-`작업/재구독`
-`작업/pushNotificationConfig/*`

현재 운영:

-`발견-기술`
-`권장 스택`
-`준비-설치-계획`

내구성 및 조정 모델:

- 메모리, JSON 또는 SQLite 로컬 지속성
- 이력서 다시 시작
- 선택적인 외부 프로세스 실행자
- 공유 SQLite 작업자에 대한 옵트인 임대 대기열 조정
- 고급 호스팅 경로로서 선택적 Redis 지원 조정

여기서 핵심 아키텍처 선택은**단순 우선 로컬 작업**입니다. Redis는 고급 옵션으로 존재하지만 기본 제품 경로는 로컬 및 종속성이 적습니다.---

## ⚙️ Build Pipeline

| 스크립트 | 언어 | 목적 |
|:-------|:---------|:---------|
| 📊 `skill_metadata.py` | 파이썬 | 검증, 분류, 점수 매기기 및 정적 보안 검색 |
| ✅ `validate_skills.py` | 파이썬 | 스킬별 및 루트 요약을 위한 메타데이터 생성 |
| 📑 `generate_index.py` | 파이썬 | 기술 색인, 매니페스트, 아카이브, 서명 및 체크섬 |
| 🏗️ `build_catalog.js` | Node.js | 최종 `dist/catalog.json` 및 `dist/bundles.json` |
| 🏷️`recategorize_skills.py` | 파이썬 | 정식 카테고리 감사 및 재작성 |
| 🔍 `verify_archives.py` | 파이썬 | 아카이브 및 서명 확인 |

두 가지 세부 사항이 운영상 중요합니다.

1. `dist/`는 런타임 계약의 일부이며 의도적으로 커밋됩니다.
2. 빌드가 CI 확인 및 릴리스 서명을 지원할 만큼 결정적입니다.---

## 📦 Published Catalog

현재 공개 카탈로그에는 32개 기술이 포함되어 있습니다.

-**발견 및 계획**: `기술 찾기`, `브레인스토밍`, `아키텍처`, `디버깅`
-**디자인 시스템 및 접근성**: `design-systems-ops`, `accessibility-audit`
-**제품 및 풀 스택 제공**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**보안**: `보안 감사자`, `취약점 검사`, `사고 대응`, `위협 모델링`
-**OSS 관리자 작업흐름**: `documentation`, `changelog`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `관찰 가능성 검토`, `릴리스 엔지니어링`
-**AI 엔지니어링**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

7개 번들이 모두 완벽하게 지원됩니다.

- `필수사항` → `4/4`
- `풀스택` → `5/5`
- `디자인` → `4/4`
- `보안` → `4/4`
- `devops` → `5/5`
- `ai-engineer` → `5/5`
- `oss-maintainer` → `4/4`

생성된 카탈로그의 현재 점수는 다음과 같습니다.

- 품질 점수: `94, 95, 96, 97, 100`
- 모범 사례 점수: `98, 99, 100`
- 보안 점수: 현재 공개된 모든 스킬 '95'

대표적인 하이엔드:

- `omni-figma` → `품질 100`, `best_practices 100`
- `접근성 감사` → `품질 99`, `best_practices 100`
- `auth-flows` → `quality 97`, `best_practices 99`
- `design-systems-ops` → `quality 97`, `best_practices 99`
- `릴리스 엔지니어링` → `품질 97`, `best_practices 99`
- `위협 모델링` → `품질 97`, `best_practices 99`
- `컨텍스트 엔지니어링` → `품질 97`, `best_practices 99`

현재 상위 밴드 내의 대표적인 하단:

- `아키텍처` → `품질 94`, `best_practices 98`
- `changelog` → `quality 94`, `best_practices 98`
- `create-pr` → `품질 95`, `best_practices 98`

이는 의도적인 것입니다. 채점자는 이제 전체 카탈로그를 상단에 배치하는 대신 "탁월함"과 "예외적"을 구별합니다.---

## 🌟 Strengths

1.**인공물 우선 디자인**
   모든 런타임 화면은 생성된 동일한 카탈로그와 매니페스트를 사용합니다.
2.**광범위한 프로토콜 적용 범위**
   CLI, API, MCP 및 A2A는 데이터 모델을 단편화하지 않고 공존합니다.
3.**강력한 현지 제품 인체공학적 설계**
   안내 설치, 시각적 셸, `config-mcp` 및 테스트 실행 기본값을 통해 고급 사용자 이상으로 프로젝트를 사용할 수 있습니다.
4.**정직한 보안 태세**
   허용 목록에 있는 로컬 쓰기, 정적 스캔, 서명, 체크섬 및 릴리스 확인은 모두 명시적입니다.
5.**건강한 MCP 도달범위**
   이 프로젝트는 이제 문서화되지 않은 대상이 안정적인 척하지 않고 광범위한 현재 MCP 가능 클라이언트 세트를 지원합니다.---

## 🔮 Opportunities

1.**더욱 심층적인 번들 적용 범위**
   다음 단계는 단순히 광범위한 적용 범위가 아닌 기존 번들 내에서의 전문화입니다.
2.**더 풍부한 득점자 의미**
   참조 팩 깊이와 작업 흐름 품질을 보다 의미적으로 평가할 여지가 아직 남아 있습니다.
3.**정당한 경우에만 더 많은 클라이언트 작성자**
   확장은 규율을 유지하고 안정적인 공식 문서에 묶여 있어야 합니다.
4.**검증기 분해**
   `skill_metadata.py`는 여전히 큰 모듈이므로 시간이 지남에 따라 내부 분해의 이점을 누릴 수 있습니다.
5.**호스팅된 거버넌스 에스컬레이션**
   현재 진행 중인 기준선은 자체 호스팅에 충분하지만 엔터프라이즈 배포에서는 결국 외부 게이트웨이와 ID 통합이 필요합니다.