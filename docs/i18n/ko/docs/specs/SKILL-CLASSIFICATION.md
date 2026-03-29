# 📊 Skill Classification and Metadata (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**검증 및 구축 중에 모든 기술의 점수를 매기고 전체 카탈로그에 대해 기계가 읽을 수 있는 프로필을 생성하는 로컬 분류자입니다.**---

## 📊 Status

| 출력 | 생성됨 |
|:-------|:----------|
| ✅ 루트 `metadata.json` | 저장소 전체 요약 |
| ✅ 스킬별 `skills/<skill>/metadata.json` | 개인 분류 |
| ✅ 카탈로그 `dist/catalog.json` | 점수가 포함된 카탈로그 게시 |
| ✅ `dist/manifests/<skill>.json` 매니페스트 | 스킬별 기계 판독 가능 데이터 |

생성자: `python3 tools/scripts/validate_skills.py`

현재 저장소 스냅샷:

- 공개된 스킬 32개
- 평균 품질 점수 '96.3'
- 평균 모범 사례 점수 '98.7'
- 평균 보안 점수 '95.0'
- 현재 품질 스프레드 `94, 95, 96, 97, 100`
- 현재 Best Practice는 '98, 99, 100' 확산---

## 🎯 Purpose

분류자는 모든 기술이 카탈로그에 도달하기 전에**일관적인 기계 판독 가능 프로필**을 제공합니다. 이는 네 가지 작업을 수행합니다.

1. 📋**분석**— YAML 머리말 및 마크다운 본문
2. 🏷️**정규화**— 표준 분류에 대한 카테고리 라벨
3. 📊**분류**— 성숙도, 모범 사례, 품질 및 보안 점수
4. 📁**내보내기**— 빌드 스크립트, 문서 및 CI에서 사용되는 메타데이터 아티팩트---

## 🏷️ Canonical Taxonomy

**18개의 표준 카테고리**(자동 별칭 매핑 포함):

| 카테고리 | 도메인 | 공통 별칭 |
|:---------|:-------|:---------------|
| 💻`개발` | 일반 소프트웨어 개발 | `코딩`, `프로그래밍` |
| 🎨 `프런트엔드` | 프런트엔드 및 UI | `ui`, `웹 디자인` |
| 🔧`백엔드` | 백엔드 및 API | `서버`, `api` |
| 🌐 `풀스택 웹` | 엔드투엔드 웹 | `웹`, `풀스택` |
| 🛠️`도구` | 개발자 도구 | '유틸리티' |
| ⚙️`cli-자동화` | CLI 및 자동화 | `스크립팅`, `워크플로` |
| 📊`비즈니스` | 사업전략 | '전략' |
| 📐`제품` | 제품관리 | 오후' |
| 🎯 `디자인` | 비주얼 & UX 디자인 | `UX` |
| 🤖 `데이터-AI` | 데이터 및 AI 앱 | `데이터`, `분석` |
| 🧠`ai-에이전트` | AI 에이전트 패턴 | `에이전트` |
| 📈 `머신러닝` | ML 모델 및 교육 | 'ml' |
| 🔌`데브옵스` | 인프라 | '인프라', '클라우드' |
| 🛡️ `테스트 보안` | 테스트 및 보안 | `테스트`, `보안`, `qa` |
| 📖 `문서화` | 문서관리 | `문서` |
| 🎬`콘텐츠 미디어` | 콘텐츠 제작 | `미디어`, `콘텐츠` |
| 💬 `소통` | 커뮤니케이션 도구 | '채팅' |
| ❓`분류되지 않음` | 기본 대체 | — |

> `워크플로`, `아키텍처`, `인프라`와 같은 레거시 레이블은 별칭 매핑을 통해 자동으로 정규화됩니다.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| 레벨 | 라벨 | 기준 |
|:------|:------|:---------|
|**L1**| `메타데이터` | Frontmatter와 미니멀 바디 |
|**L2**| '지침' | 실질적인 서면 지침 |
|**L3**| `자원` | 번들 스크립트 또는 더욱 풍부한 패키지 리소스 |

추적되는 추가 신호: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

휴리스틱은 다음을 평가합니다.

| 신호 | 검사 내용 |
|:-------|:---------------|
| 📛 슬러그 품질 | `이름` 필드 형식 지정 |
| 📝 설명 | 명확성, 길이, 정보성 |
| 📐 구조 | 문서 섹션 및 계층 구조 |
| 💡 예 | 코드 울타리 및 예제 블록 |
| 🔗 참고자료 | 연결된 로컬 `references/`, `scripts/` 및 지원 팩 도우미 |
| 🧰 운용성 | 실행 가능한 로컬 스크립트 예제 및 구체적인 작업 흐름 조각 |
| 🧩 지원 팩 깊이 | 다양한 지원 제품군, 재사용 가능한 파일, 에이전트 메타데이터 및 운영 자산 |
| 🩺 문제 해결 | 명시적인 'Symptoms' 및 'Solution' 쌍 |
| 📚 취재 | '사용 시기', '모범 사례', '문제 해결' 및 '추가 리소스' 섹션 |
| 🌐 이식성 | 도구에 구애받지 않는 표현 |
| 📅 신선도 | 하드코딩된 날짜 방지 |

**현재 계층**

| 계층 | 점수 범위 |
|:------|:----------|
| '훌륭하다' | 90-100 |
| '좋다' | 70-89 |
| '공정' | 50-69 |
| `필요한 작업` | 0-49 |

채점자는 의도적으로 성숙한 기술 전반에 걸쳐 확산을 생성할 수 있을 만큼**의미적**입니다. 구조가 깔끔한 스킬은 점수가 높을 수 있지만 상위 밴드에 도달하려면 다음과 같은 깊이 신호도 필요합니다.

- 하나가 아닌 다양한 예
- 여러 문제 해결 사례
- 관련 스킬 지도
- 더욱 풍부한 로컬 지원 팩
- 단순한 산문을 넘어서는 하나 이상의 지원 제품군(이상적으로는 실제 재사용을 추가하는 `에이전트/` 또는 `자산/` 포함)
- 셀 수 있는 단계가 포함된 전용 `## 작업 흐름` 섹션
- 실행 명확성을 향상시키는 경우 최소한 하나의 작은 운영 테이블 또는 의사 결정 맵
- 일반 템플릿보다 작업 특이성이 더 높습니다.
- 더욱 명확한 작업 흐름 깊이 및 의사 결정 지원 자산
- 하나의 `references/` 파일과 하나의 링크된 스크립트를 넘어서는 지원 팩 깊이
- 단일 노트 추가 기능이 아닌 워크플로 키트처럼 느껴질 만큼 충분한 재사용 가능한 지원 파일
- 재사용 가능한 작업 흐름 키트에서 세련된 개요를 분리하기에 충분한 운영 밀도

즉, 지원 팩이 더 좁거나 결정 자산이 더 얇거나 운영 밀도가 카탈로그의 가장 강력한 기술보다 낮은 경우 구조적으로 완전한 기술이 여전히 '100' 대신 90점 높은 수준에 도달할 수 있음을 의미합니다.---

### ⭐ Quality Score (0-100)

휴리스틱은 다음을 결합합니다.

| 신호 | 무게 |
|:-------|:-------|
| 📝 신체 완성도 | 중간 높음 |
| 📋 설명 정밀도 | 중간 |
| 📊 메타데이터 완전성 | 중간 |
| 📅 최신성(`date_updated`) | 중간 |
| 📦 패키지 리소스 | 중간 |
| 📋 모범 사례 기여 | 중간 |
| 🧠 의미적 깊이 | 중간 높음 |
| 🛠️ 운영 깊이 | 중간 |
| 📚 지원 팩의 풍부함 | 중간 |

**품질 등급:**

| 계층 | 점수 범위 |
|:------|:----------|
| 💎`플래티넘` | 80세 이상 |
| 🥇`금` | 65-79 |
| 🥈 `실버` | 50-64 |
| 🥉 `브론즈` | 35-49 |
| 🌱 `스타터` | 0-34 |---

### 🛡️ Security Score (0-100)

보안 계층은 다음을 결합합니다.

| 스캐너 | 항상 활성화 | 그것이 하는 일 |
|:---------|:---------------|:-------------|
| 🔍**정적**| ✅ 예 | SKILL.md, 패키지 파일 및 스크립트를 검사합니다. |
| 🦠**ClamAV**| ⚙️ 선택사항 | 'clamscan'을 통한 악성 코드 검사 |
| 🔒**VirusTotal**| ⚙️ 선택사항 | 해시 조회(업로드 없음) |

**정적 스캐너 규칙 계열:**
- 🎭 신속한 주입 및 유출 패턴
- 💣 파괴적인 쉘 명령
- 🔑 의심스러운 자격 증명 또는 OS 경로
- ⚠️ 위험한 스크립트 프리미티브(`shell=True`, `pickle.load`, `eval`, `extractall`)

**보안 출력 형태:**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

| 섹션 | 필드 |
|:---------|:-------|
| 🆔 아이덴티티 | `id`, `slug`, `display_name` |
| 🏷️ 분류 | `원시_카테고리`, `표준_카테고리`, `추론_카테고리` |
| 📋 저작 | 태그, 도구, 복잡성, 위험, 소스, 작성자 |
| 📅 날짜 및 경로 | `날짜_추가`, `날짜_업데이트`, 경로 |
| 📊 리소스 | 파일 및 참조 카운터 |
| 📝 콘텐츠 신호 | 단어 수, 본문 길이, 구조 플래그 |
| 🧠 의미적 깊이 | 워크플로 단계, 예, 문제 해결 깊이, 의사 결정 자산, 지원 링크 제품군 |
| 🧩 지원 팩 구조 | 지원 파일 수, 연결된 계열, `agents/`, `assets/` 및 재사용 가능한 예 |
| 🎯 성숙도 | 레벨, 라벨, 스크립트/파일 플래그 |
| 📋 모범 사례 | 점수 및 등급 |
| ⭐ 품질 | 점수, 계층 및 의미 분석 |
| 🛡️ 보안 | 점수, 계층, 상태, 결과 |
| ✅ 검증 | 상태, 오류, 경고 |### Root (`metadata.json`)

| 섹션 | 필드 |
|:---------|:-------|
| 📊 요약 | 개수, 평균, 카테고리 분포 |
| 🏷️ 분류 | 카테고리 수 |
| 🎯 배포 | 기술 수준, 품질 계층, 보안 계층 ​​|
| ✅ 검증 | 상태 개수 |
| 📋 스킬 목록 | 간결한 기술별 요약 |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

이는 커밋 전에 메타데이터와 카탈로그 아티팩트를 재생성하고 생성된 파일을 자동으로 준비하는 `.githooks/pre-commit`을 사용하도록 `git`을 구성합니다.