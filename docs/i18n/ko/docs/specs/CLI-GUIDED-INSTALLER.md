# 🧩 CLI Guided Installer Specification (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Omni Skills CLI의 설치 안내 경험을 위한 동작 계약.**---

## 1. Scope

이 사양은 기존 설치 프로그램 백엔드 위에 위치하는 안내 설치 동작을 정의합니다.

다음을 대체하지 않습니다.

-`tools/bin/install.js`
- 현재 전문가 플래그 흐름
- 선택적 설치 매니페스트

이는 다음을 정의합니다.

- 가이드 모드로 들어가는 방법
- 목적지를 선택하는 방법
- 설치 범위를 선택하는 방법
- 표시되어야 하는 미리보기 정보
- 확인 및 실행이 어떻게 이루어지는지---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI는 다음과 같은 경우 안내 설치 모드로 전환되어야 합니다.

- 사용자가 TTY에서 인수 없이 `omni-skills`를 실행합니다.
- 사용자가 TTY에서 선택기 없이 `omni-skills install`을 실행합니다.### 2.2 Forced Guided Entry

CLI는 다음과 같은 전용 옵션을 통해 명시적 안내 모드도 지원해야 합니다.

- `전능한 기술 설치 --안내`

이 모드는 표준 입력이 사용 가능한 한 입력이 파이프로 연결되고 TTY에 연결되지 않은 경우에도 작동해야 합니다.### 2.3 Non-Interactive Safety Rule

TTY 없이 호출되고 안내 모드가 명시적으로 요청되지 않은 경우:

- 현재 기본 동작을 유지합니다.
- 프롬프트를 기다리는 것을 차단하지 마십시오---

## 3. Destination Model

안내 설치는 두 가지 대상 클래스를 지원해야 합니다.### 3.1 Known Client Target

알려진 각 목표는 다음과 같이 해결됩니다.

- 사람이 읽을 수 있는 라벨
- 내부 도구 ID
- 플래그 설치
- 해결된 경로

필수 알려진 대상:

- 클로드 코드
- 커서
- 제미니 CLI
- 코덱스 CLI
- 키로
- 반중력
- 오픈코드### 3.2 Custom Path Target

사용자 정의 경로 모드는 다음을 충족해야 합니다.

- 경로를 묻는 메시지
- `~` 해결
- 절대 경로로 정규화
- 미리보기에 해결된 경로 표시---

## 4. Install Scope Model

안내 설치는 다음을 지원해야 합니다.### 4.1 Full Library

`--skill` 또는 `--bundle`이 없는 현재 설치와 동일합니다.### 4.2 Single Skill

사용자가 게시된 스킬 하나를 선택할 수 있습니다.### 4.3 Single Bundle

사용자가 선별된 번들 하나를 선택하고 게시된 구성원을 확인할 수 있습니다.### 4.4 Search Then Install

사용자는 다음을 수행할 수 있습니다.

- 검색어를 입력하세요
- 결과를 검사
- 스킬이나 번들을 선택하세요
- 설치 미리보기를 계속 진행하세요.---

## 5. Preview Contract

실행하기 전에 안내 설치에 다음이 표시되어야 합니다.

- 목적지 라벨
- 목적지 경로
- 설치 범위
- 해당되는 경우 선택한 스킬 또는 번들
- 동등한 CLI 명령

선택사항이지만 권장됩니다:

- 선택한 스킬 메타데이터 요약
- 번들 가용성 요약---

## 6. Execution Contract

확인 후:

- 기존 설치 프로그램 백엔드에 설치 위임을 안내했습니다.
- 파일 쓰기 자체를 다시 구현하지 않습니다.

명령 미리보기와 실제 위임된 설치 프로그램 인수는 정확히 일치해야 합니다.---

## 7. Result Contract

성공적으로 실행되면 안내 설치 결과가 다음과 같이 표시됩니다.

- 성공 지표
- 최종 목적지 경로
- 실행된 명령
- 다음 권장 조치

다음 작업 예:

- 선택한 클라이언트의 스킬을 사용합니다.
-`닥터`를 실행
-`mcp stream --local`을 실행합니다.---

## 8. Compatibility Contract

다음은 유효하며 변경되지 않습니다.

-`전능한 기술 --cursor --skill omni-figma`
-`omni-skills --bundle full-stack`
- `옴니 스킬 --path ./skills`
- `전능한 기술 찾기 figma --tool 커서 --install --yes`

안내 모드는 동작을 추가합니다. 기존 동작은 제거되지 않습니다.