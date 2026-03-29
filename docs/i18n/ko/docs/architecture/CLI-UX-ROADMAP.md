# 🧭 CLI UX Roadmap (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Omni Skills를 플래그 우선 설치 프로그램에서 전문가 및 비전문가 사용자 모두를 위한 안내식 터미널 환경으로 발전시키기 위한 제품 로드맵입니다.**
> 범위: npm 패키지, CLI 설치 경험, 터미널 UI, 서비스 시작 흐름 및 시각적 온보딩.---

## 1. Problem Statement

현재 런타임 기반은 강력하지만 진입 경험은 다음 사항을 이미 이해하고 있는 사용자를 위해 여전히 최적화되어 있습니다.

- 어떤 클라이언트를 타겟으로 삼고 싶은지
- 사용하려는 설치 선택기
- 목표를 `--skill`, `--bundle` 또는 `find`로 변환하는 방법
- CLI 전용 설치와 MCP, API 또는 A2A 서비스가 필요한 경우

오늘:

-`npx omni-skills`의 기본값은 반중력입니다.
- 이는 기술적으로 유효하며 이전 버전과 호환됩니다.
- 그러나 처음 사용자나 기술 수준이 낮은 운영자에게는 적합하지 않습니다.

CLI에는 이미 기본 대화형 모드가 있지만 안내된 제품 화면보다는 여전히 개발자 유틸리티에 더 가깝습니다.

이 로드맵은 현재 플래그 기반 인터페이스를 중단하지 않고 더욱 강력한 공용 UX로 가는 경로를 정의합니다.---

## 1.1 Delivery Status

로드맵은 이제 현재 저장소 상태에서 대부분 구현됩니다.

완료됨:

- 1단계: 안내된 진입점 선택
- 2단계: 안내 설치 마법사
- 3단계: 시각적 터미널 쉘
- 4단계: 시각적 서비스 허브
- 5단계: 저장된 프로필 및 반복성
- 6단계: 강화, 테스트 및 문서화---

## 2. Goals

- 현재 전문가 CLI 워크플로우를 유지합니다.
- 인수 없는 진입점을 처음 사용자가 안전하고 이해하기 쉽게 만듭니다.
- 대화형 컨텍스트에서 자동 기본값을 안내 선택으로 대체합니다.
- 알려진 AI 클라이언트 및 임의의 사용자 정의 설치 경로 지원
- 설치, 검색 및 서비스 부팅을 일관된 사용자 여정으로 전환
- 단순한 스크립트가 아닌 제품 같은 느낌의 시각적 터미널 UI 제공
- UI에서 설치 엔진, 카탈로그 및 서비스 런타임을 재사용 가능하게 유지합니다.---

## 3. Non-Goals

- 기존 플래그 기반 CLI 교체
- 지원되는 기본 대상인 반중력 제거
- 웹 UI를 기본 배송 모드로 배송
- 이 UX 작업의 일부로 API, MCP 또는 A2A 프로토콜 자체를 리팩토링합니다.
- 'SKILL.md' 저작을 데이터베이스 지원 관리 패널로 교체---

## 4. Design Principles

### 4.1 Backward Compatibility First

다음 명령은 현재와 동일하게 계속 작동해야 합니다.

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills find figma --tool 커서 --install --yes`
-`npx omni-skills mcp 스트림 --local`
-`npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- 인수가 없는 대화형 터미널 세션: 개방형 안내 경험
- 인수가 없는 비대화형 호출: 현재 설치 기본 동작 유지
- 명시적 명령과 플래그는 항상 UI 추론보다 우선합니다.### 4.3 Reuse One Engine Across Modes

다음은 동일한 내부 논리를 공유해야 합니다.

- 플래그 우선 CLI
- 안내 텍스트 모드 CLI
- 비주얼 터미널 UI

이는 UX 레이어가 비즈니스 로직을 소유해서는 안 된다는 것을 의미합니다. 재사용 가능한 작업을 조정해야 합니다.### 4.4 Preview Before Write

쓰기를 유발하는 모든 안내 흐름은 다음과 같이 표시되어야 합니다.

- 해결된 목표
- 해결된 경로
- 선택한 스킬 또는 번들
- 동등한 CLI 명령
- 확인 프롬프트### 4.5 Visual Does Not Mean Implicit

더 풍부한 UI에서도 시스템은 여전히 상태와 작업을 명시적으로 지정해야 합니다.

- 설치가 진행되는 곳
- 무엇을 쓸 것인가
- 서비스가 사용할 전송 또는 포트
- 흐름이 읽기 전용인지 아니면 로컬 쓰기 가능인지 여부---

## 5. User Personas

### 5.1 Expert CLI User

요구사항:

- 빠른 명령
- 강제 프롬프트 없음
- 안정적인 플래그
- 스크립팅 가능성### 5.2 Guided Product User

요구사항:

- 명확한 선택
- 반중력이 바람직하다는 가정은 없습니다.
- 사용자 정의 경로 설치 지원
- 이해하기 쉬운 설치 미리보기
- 설치 및 서버 런타임 작업 간의 가시적인 차이### 5.3 Operator / Platform User

요구사항:

- MCP, API 및 A2A를 시각적으로 시작하는 기능
- 정상적인 기본값
- 포트, 전송, 지속성, 실행기 모드, 인증 및 로컬 모드의 선택적 조정---

## 6. Target UX Model

제품은 세 가지 레이어를 노출해야 합니다.### 6.1 Expert Mode

직접적인 명령과 플래그.

예:

- `npx omni-skills --cursor --skill omni-figma`
-`npx omni-skills mcp 스트림 --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

다음과 같은 경우에 트리거됩니다.

- 사용자가 인수 없이 TTY에서 `npx omni-skills`를 실행합니다.
- 사용자가 구체적인 선택기 없이 `npx omni-skills install`을 실행합니다.
- 사용자가 명시적으로 안내 모드를 선택합니다.

안내된 설치 흐름은 다음을 거쳐야 합니다.

1. 대상 클라이언트 또는 사용자 정의 경로
2. 설치 유형
3. 스킬 또는 번들 선택
4. 미리보기
5. 확인
6. 실행
7. 다음 단계### 6.3 Visual Operations Hub

트리거 원인:

- `npx 옴니 스킬 ui`

이는 비전문 사용자 및 운영자를 위한 "홈 화면"이 되어야 합니다.

핵심 활동:

- 스킬 설치
- 스킬을 발견하세요
- MCP 시작
- API 시작
- A2A 시작
- 의사를 실행
- 연기 점검을 실행---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

결과:

- TTY의 'npx omni-skills'는 더 이상 자동으로 반중력을 가정하지 않습니다.
- 사용자에게 클라이언트 또는 사용자 정의 경로를 선택하라는 메시지가 표시됩니다.

요구사항:

- TTY가 아닌 기본 설치 동작을 유지합니다.
- 대상 선택기 추가
- 사용자 정의 경로 캡처 지원### Phase 2: Guided Install Wizard

결과:

- 설치가 전체 안내 흐름으로 전환됩니다.

요구사항:

- 설치 모드 선택:
  - 전체 라이브러리
  - 스킬 하나
  - 한 묶음
  - 검색 후 설치
- 미리보기 설치
- 동등한 명령 렌더링
- 확인 및 실행### Phase 3: Visual Terminal Shell

결과:

- 현재 기본 텍스트 UI는 브랜드 터미널 애플리케이션이 됩니다.

요구사항:

- 더욱 풍부한 레이아웃
- 프로젝트 브랜딩 및 로고
- 더 나은 스테퍼와 카드
- 키보드 기반 탐색
- Ink를 통한 React 터미널 구현### Phase 4: Visual Service Hub

결과:

- MCP, API 및 A2A는 시각적 UI에서 시작 가능

요구사항:

- MCP 흐름 안내
- 가이드 API 흐름
- A2A 흐름 안내
- 표시 모드 및 구성 미리보기### Phase 5: Saved Profiles and Repeatability

결과:

- 공통 설치 또는 서비스 사전 설정을 재사용할 수 있습니다.

요구사항:

- 최근 목표를 기억
- 저장된 서비스 사전 설정
- 최근 명령
- 좋아하는 번들이나 스킬### Phase 6: Hardening, Tests, and Documentation

결과:

- UX는 임시 편의가 아닌 유지된 공용 인터페이스가 됩니다.

요구사항:

- 연기 보장
- 회귀 테스트
- 문서 업데이트
- 운영자 안내
- 패키지 호환성 검토---

## 8. Proposed Command Model

### Stable Commands

- '전능한 기술'
- `옴니 스킬 설치`
-`전능한 기술 찾기`
- `옴니 스킬 UI`
- `옴니 스킬 mcp`
-`전능한 기술 API`
-`전능한 기술 a2a`
- '만능 의사'
- `만능스킬 연기`### Recommended Behavior

| 호출 | 행동 |
|:------------|:---------|
| TTY의 `옴니 스킬`, 인수 없음 | 안내된 설치 항목 |
| TTY가 아닌 경우 `옴니 스킬`, 인수 없음 | 현재 반중력 기본 ​​설치 |
| TTY의 `omni-skills install`, 선택기 없음 | 안내 설치 마법사 |
| `옴니 스킬 설치 --안내` | 강제 안내 설치 흐름 |
| '전능한 기술 UI' | 시각적 운영 허브 열기 |
| 명시적 플래그 | 안내된 흐름으로 우회하지 않고 직접 실행 |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

옵션:

- 클로드 코드
- 커서
- 제미니 CLI
- 코덱스 CLI
- 키로
- 반중력
- 오픈코드
- 사용자 정의 경로

출력:

- 알려진 대상 또는 사용자 정의 파일 시스템 경로를 선택했습니다.### Step 2: Choose Install Type

옵션:

- 전체 라이브러리
- 공개된 스킬 1개
- 한 묶음
- 검색 후 설치

출력:

- 설치 범위### Step 3: Resolve Selection

설치 유형에 따라:

- 전체 라이브러리: 추가 선택기 없음
- 스킬: 스킬을 나열하거나 선택합니다.
- 번들: 번들을 나열하거나 선택합니다.
- 검색: 쿼리 프롬프트, 일치하는 스킬 및 번들 표시### Step 4: Preview

디스플레이:

- 선택된 대상
- 해결된 경로
- 선택한 스킬 또는 번들
- 동등한 CLI 명령
- 흐름이 선택적 설치인지 전체 설치인지 여부### Step 5: Confirm

사용자가 다음을 확인합니다.

- 예 → 실행
- 아니요 → 중단하거나 돌아가기### Step 6: Result

디스플레이:

- 성공/실패
- 목적지 경로
- 다음 단계 제안---

## 10. Information Architecture for the Visual Operations Hub

운영 허브는 다음을 공개해야 합니다.### 10.1 Install

- 설치 흐름 안내
- 스킬 또는 번들 검색
- 사용자 정의 경로### 10.2 Discover

- 카탈로그 검색
- 필터
- 미리보기 메타데이터
- 핸드오프 설치### 10.3 MCP

옵션:

- 전송: stdio, stream, sse
- 로컬 모드 켜기/끄기
- 호스트
- 항구### 10.4 API

옵션:

- 호스트
- 항구
- 선택적 인증
- 선택적 비율 제한### 10.5 A2A

옵션:

- 호스트
- 항구
- 저장소 유형: 메모리, json, sqlite
- 실행자: 인라인, 프로세스
- sqlite 대기열이 활성화된 경우 임대 옵션### 10.6 Diagnostics

- 의사
- 연기---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

현재 `tools/bin/cli.js`는 다음을 혼합합니다.

- 명령 구문 분석
- 프리젠테이션
- 대화형 프롬프트
- 액션 오케스트레이션
- 서비스 부팅

새로운 구조는 재사용 가능한 논리를 다음으로 이동해야 합니다.

-`도구/lib/cli-actions/`
-`도구/lib/설치 흐름/`
- `도구/lib/service-flow/`
-`도구/lib/ui-모델/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js`는 쓰기 가능 백엔드로 유지되어야 합니다.

안내형 UI는 설치 로직을 복제하는 대신 기존 설치 프로그램 백엔드를 호출해야 합니다.### 11.3 Keep Find/Search Reusable

안내식 설치 마법사는 이미 제공되고 있는 동일한 카탈로그 코어 및 CLI 검색 논리를 재사용해야 합니다.

- '찾기'
- 미리보기 설치
- 번들 해결### 11.4 Prepare for Ink Without Forcing It Early

첫 번째 전달은 텍스트 모드 프롬프트로 유지될 수 있습니다.

그러나 아키텍처는 나중에 잉크를 통해 텍스트 흐름을 렌더링할 수 있도록 명확한 이음새를 유지해야 합니다.---

## 12. Risks

### 12.1 Breaking Existing Automation

완화:

- TTY에서는 가이드 UI만 자동으로 열립니다.
- TTY가 아닌 경우 현재 기본값을 유지합니다.
- 명시적인 플래그 흐름을 유지합니다.### 12.2 Letting UI Own Business Logic

완화:

- 오케스트레이션을 재사용 가능한 작업 모듈로 이동
- 설치 프로그램 및 서비스 부팅 로직을 UI 레이어 아래에 유지합니다.### 12.3 Ink Migration Too Early

완화:

- 먼저 현재 노드 터미널 스택에 안내된 흐름을 제공합니다.
- 흐름 의미가 안정되면 Ink로 마이그레이션합니다.### 12.4 Incomplete Service UX

완화:

- 먼저 설치 마법사 출시
- 이후 레이어 가이드 서비스 출시---

## 13. Acceptance Criteria by Phase

### Phase 1

- TTY의 `npx omni-skills`는 더 이상 즉시 설치되지 않습니다.
- 사용자는 대상 클라이언트 또는 사용자 정의 경로를 선택할 수 있습니다.
- TTY가 아닌 인수 없는 호출은 여전히 이전처럼 작동합니다.### Phase 2

- 안내식 설치는 전체 라이브러리, 스킬, 번들 및 검색 후 설치를 지원합니다.
- 쓰기 전에 항상 미리보기가 표시됩니다.
- 해당 명령이 표시됩니다.### Phase 3

- 브랜드 터미널 UI가 존재합니다.
- UI는 일반 Readline 메뉴보다 더 시각적으로 구성되어 있습니다.
- 탐색은 키보드 친화적입니다.### Phase 4

- 사용자는 시각적 허브에서 MCP, API 및 A2A를 시작할 수 있습니다.
- 주요 런타임 옵션은 안내 형식으로 구성 가능### Phase 5

- 최근 또는 저장된 기본 설정은 재사용 가능
- 반복 흐름에서는 더 적은 수의 프롬프트가 사용됩니다.### Phase 6

- 연기 범위는 새로운 UX 진입점을 반영합니다.
- 문서에서는 안내 모드 및 서비스 마법사 동작을 설명합니다.---

## 14. Execution Order

이 로드맵은 다음 순서로 구현되어야 합니다.

1. 안내된 진입점 선택
2. 안내 설치 마법사
3. 시각적 터미널 쉘
4. 시각적 서비스 허브
5. 저장된 프로파일 및 반복성
6. 경화, 테스트 및 문서 다듬기

구현 작업에서는 각 작업을 시작하기 전에 관련 작업 파일을 읽어야 CLI 작업이 계획에 맞춰 유지되고 표류하지 않습니다.