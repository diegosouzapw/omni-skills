# 🖥️ CLI Visual Shell Specification (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**`omni-skills ui`에 의해 노출되는 잉크 기반 터미널 UI에 대한 동작 계약.**---

## 1. Scope

시각적 셸은 기존 CLI 및 설치 프로그램 엔진 위에 표시되는 제품 안내 화면입니다.

다음을 대체하지 않습니다.

- 전문가 플래그 기반 CLI 사용
-`tools/bin/install.js`
- 안내된 텍스트 설치 흐름
- API, MCP 또는 A2A 런타임 동작

이는 다음을 정의합니다.

- `옴니 스킬 UI`의 동작
- `omni-skills ui --text`에 대한 대체 계약
- 로컬 상태 및 사전 설정 지속성
- 안내된 서비스 출시 미리보기
- 최근 설치 및 서비스 실행에 대한 반복성---

## 2. Entry Rules

### 2.1 Visual Mode

'omni-skills ui'는 잉크 기반 시각적 셸을 시작합니다.

시각적 셸은 다음을 위한 기본 비전문가 터미널 환경입니다.

- 설치 흐름
- 카탈로그 우선 검색 및 설치
- MCP 시작
- API 시작
- A2A 스타트업
- 의사와 연기 전달### 2.2 Text Fallback

`omni-skills ui --text`는 readline 기반 대체 인터페이스를 시작합니다.

이는 다음과 같은 경우에 유용합니다.

- 터미널이 더 풍부한 쉘을 올바르게 렌더링할 수 없습니다.
- 원시 모드 동작이 제한됩니다.
- 최소한의 텍스트 대체가 선호됩니다.### 2.3 Handoff Rule

시각적 셸은 서비스 런타임이나 설치 쓰기를 직접 다시 구현하지 않습니다.

미리보기 및 확인 후에는 완전히 종료되고 동등한 인수 및 환경 변수를 사용하여 기존 CLI 진입점으로 실행이 전달됩니다.---

## 3. Home Screen Contract

홈 화면은 다음을 노출해야 합니다.

- 스킬 설치
- 찾아 설치
- 최근 설치가 있는 경우 반복
- 저장된 설치 사전 설정이 있는 경우 실행
- 서비스를 시작하다
- 최근 서비스가 있을 때 반복
- 저장된 서비스 사전 설정이 있는 경우 실행
- 의사
- 연기
- 출구

홈 화면도 표시되어야 합니다.

- 현재 게시된 번들 가용성
- 최근 항목, 사전 설정 및 즐겨찾기에 대한 로컬 상태 개수---

## 4. Install Flow Contract

시각적 셸 설치 흐름은 다음을 지원해야 합니다.

- 알려진 클라이언트 대상 선택
- 사용자 정의 경로 선택
- 전체 라이브러리 설치
- 원스킬 설치
- 단일 번들 설치
- 검색 후 설치
- 쓰기 전에 미리보기
- 사전 설정 저장
- 좋아하는 스킬이나 번들 토글

미리보기에는 다음이 표시되어야 합니다.

- 해결된 대상 라벨
- 해결된 경로
- 설치 범위
- 해당되는 경우 선택한 스킬 또는 번들
- 동등한 CLI 명령---

## 5. Service Flow Contract

시각적 셸은 다음에 대한 시작을 안내해야 합니다.### 5.1 MCP

- 전송: `stdio`, `stream`, `sse`
- 모드: '읽기 전용' 또는 '로컬'
- 네트워크 전송을 위한 호스트/포트 구성
- 명시적 명령 미리보기### 5.2 API

- 호스트
- 항구
- 기본 또는 강화된 프로필
- 강화된 전달자 또는 API 키 인증
- 강화된 속도 제한 매개변수
- 감사 로그 활성화
- 명시적 명령 미리보기### 5.3 A2A

- 호스트
- 항구
- 저장소 유형: `memory`, `json`, `sqlite`
- 내구성 모드를 위한 저장 경로
- 실행자: `인라인`, `프로세스`
- 대기열 지원 SQLite 모드
- 공유 임대 모드의 폴링 간격 및 임대 기간
- 명시적 명령 미리보기---

## 6. Local State Contract

시각적 셸은 다음 위치에서 로컬 전용 상태를 유지합니다.```text
~/.omni-skills/state/ui-state.json
```

현재 주에는 다음이 포함됩니다.

- 최근 설치
- 최근 서비스 출시
- 명명된 설치 사전 설정
- 명명된 서비스 사전 설정
- 좋아하는 스킬
- 좋아하는 번들

셸은 다음을 지원해야 합니다.

- 최근 설치 재생
- 최근 서비스 출시 다시보기
- 명명된 설치 사전 설정 재사용
- 명명된 서비스 사전 설정 재사용---

## 7. Compatibility Contract

시각적 쉘은 추가됩니다.

이러한 흐름은 유효하고 안정적으로 유지되어야 합니다.

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills 설치 --안내`
- `npx omni-skills find figma --tool 커서 --install --yes`
-`npx omni-skills mcp 스트림 --local`
-`npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

시각적 셸은 명시적인 전문가 명령 경로를 강요해서는 안 됩니다.---

## 8. Safety Contract

시각적 셸은 상태를 만들고 명시적으로 작성해야 합니다.

다음을 수행해야 합니다.

- 쓰기 전달 전 설치 미리보기
- 실행 전 서비스 시작 명령 미리보기
- 가능한 경우 일반 텍스트 명령 미리보기에서 비밀 자료를 유지하세요.
- 로컬에서만 상태 유지
- 시각적 셸 외부에서 비대화형 CLI 동작을 유지합니다.