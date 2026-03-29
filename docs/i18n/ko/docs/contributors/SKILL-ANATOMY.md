# 🔬 Anatomy of a Well-Written Skill (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**전체 카탈로그를 구동하는 작성 형식인 옴니 스킬 `SKILL.md`에 대한 구조 및 품질 기대치.**---

## 📐 The Two Parts

모든 `SKILL.md`는 두 개의 개별 섹션으로 구성됩니다.### 1️⃣ Frontmatter (YAML Metadata)

`---` 구분 기호 사이의 기계가 읽을 수 있는 메타데이터입니다. 다음과 같은 기능을 제공합니다.

- 📚 기술 지수 및 카탈로그 생성
- 🔎 CLI 검색 및 필터링
- ✅ 검증 및 품질 채점
- 📊 `metadata.json` 분류 아티팩트 생성
- 📋 스킬별 표현은 `dist/manifests/`에 나타납니다.### 2️⃣ Body (Markdown Instructions)

사람이 읽을 수 있는(및 에이전트가 읽을 수 있는) 지침입니다. AI 에이전트가 추측하지 않고 따라갈 수 있을 만큼 구체적으로 작업 수행 방법을**상급 개발자에게 브리핑**하는 것처럼 작성하세요.---

## 📋 Frontmatter Reference

| 필드 | 필수 | 유형 | 설명 |
|:------|:---------|:------|:------------|
| `이름` | ✅ | 문자열 | 디렉터리 이름과 일치해야 하며 소문자로 하이픈이 연결되어 있음 |
| `설명` | ✅ | 문자열 | 한 줄 설명(10~200자) |
| '버전' | ⚡ | 문자열 | 스킬 자체에 대한 의미 버전(예: `"0.1.1"`) |
| '카테고리' | ⚡ | 문자열 | 저장소 분류법의 하나의 표준 카테고리 |
| `태그` | ⚡ | 문자열[] | 발견을 위한 검색 가능한 태그 |
| '복잡성' | ⚡ | 문자열 | `초급` · `중급` · `고급` · `전문가` |
| '위험' | ⚡ | 문자열 | `안전` · `주의` · `공격적` · `비판적` |
| '도구' | ⚡ | 문자열[] | 테스트된 AI 코딩 도우미 |
| '출처' | ⚡ | 문자열 | `옴니팀` · `커뮤니티` · `공식` |
| '저자' | ⚡ | 문자열 | 기여 |
| `날짜_추가` | ⚡ | 문자열 | ISO 날짜 |
| `date_updated` | ⚡ | 문자열 | ISO 날짜 |

> ✅ = 항상 필수 · ⚡ = 엄격 모드에서 필수

스킬 버전은 npm 패키지 버전과 독립적입니다. 패키지는 현재 '0.1.3'이지만 기존 기술은 자체 의미 버전으로 유효하게 유지될 수 있습니다.---

## 🏷️ Canonical Categories

저장소 분류법은 현재**18개의 표준 카테고리**를 정의합니다.

| 카테고리 | 도메인 |
|:---------|:-------|
| 💻`개발` | 일반 소프트웨어 개발 |
| 🎨 `프런트엔드` | 프런트엔드 프레임워크 및 UI |
| 🔧`백엔드` | 백엔드 서비스 및 API |
| 🌐 `풀스택 웹` | 엔드투엔드 웹 개발 |
| 🛠️`도구` | 개발자 도구 및 유틸리티 |
| ⚙️`cli-자동화` | CLI 도구 및 자동화 스크립트 |
| 📊`비즈니스` | 비즈니스 프로세스 및 전략 |
| 📐`제품` | 제품 관리 및 디자인 |
| 🎯 `디자인` | 시각 및 UX 디자인 |
| 🤖 `데이터-AI` | 데이터 엔지니어링 및 AI 애플리케이션 |
| 🧠`ai-에이전트` | AI 에이전트 개발 및 패턴 |
| 📈 `머신러닝` | ML 모델 및 교육 |
| 🔌`데브옵스` | 인프라 및 배포 |
| 🛡️ `테스트 보안` | 테스트 및 보안 관행 |
| 📖 `문서화` | 문서 생성 및 관리 |
| 🎬`콘텐츠 미디어` | 콘텐츠 제작 및 미디어 |
| 💬 `소통` | 커뮤니케이션 도구 및 워크플로우 |
| ❓`분류되지 않음` | 일치하는 항목이 없을 때의 기본값 |

> `워크플로`, `아키텍처`, `인프라`, `보안`, `테스트`와 같은 레거시 레이블은 별칭 매핑을 통해 자동으로 정규화됩니다.---

## 📝 Body Structure

잘 작성된 스킬 본문은 다음 계층 구조를 따릅니다.

### 😀 개요(필수)
스킬의**무엇**과**이유**에 대한 2~3개의 문장입니다.

### 🎯 사용 시기(필수)
이 기술이 적용되는**특정 시나리오**의 글머리 기호 목록입니다.

### 📋 핵심 지침(필수)
상담원이 따라야 하는**단계별 프로세스**입니다. 명시적으로 설명하세요. 구체적으로 말하세요. 상담원은 명확하고 모호하지 않은 지침을 제시할 때 가장 효과적으로 업무를 수행합니다.

### 💡 예시(권장)
구체적인 프롬프트, 코드 블록 또는 예상 출력.**구체적일수록 좋습니다.**

### ✅ 모범 사례(권장)
빠른 스캔을 위해 ✅ Do / ❌ 포맷 안 함을 사용하세요.

### 🔧 문제 해결(선택 사항)
일반적인 문제와 해결 방법

### 🔗 관련 스킬 (선택)
보완적인 기술에 대한 상호 참조.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯**하나의 특정**워크플로 또는 도메인에 중점을 둡니다.
- 😀 지침은**AI가 사람의 해석 없이 따를 수 있을 만큼 명확**합니다.
- 💡 예상되는 동작과 함께**구체적인 예**포함
- 🛡️ 적절한**오류 처리**지침이 있습니다.
- 📊 건전한 메타데이터 생성: 표준 카테고리, 성숙도 L2+, 품질 70+
- 🧰 산문뿐만 아니라 이상적으로 `references/`, `scripts/`, `examples/` 및 `agents/` 전반에 걸쳐 재사용 가능한 지원 팩을 제공합니다.

스킬을 가장 높은 수준으로 끌어올리는 더 강력한 점수 패턴은 [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md)을 참조하세요.### ❌ Bad Skill

- 🌫️ 무엇이든 적용할 수 있는 일반적인 조언
- 🤷 "좋은 코드 작성"과 같은 모호한 지침
- 🚫 예제나 코드 블록이 없습니다.
- ⚠️ 머리말 필드 누락
- 📉 낮은 품질 점수(50점 미만)