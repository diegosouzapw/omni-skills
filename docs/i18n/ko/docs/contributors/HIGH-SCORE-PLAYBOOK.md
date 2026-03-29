# 🏆 High-Score Skill Playbook (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**높은 성숙도, 모범 사례, 품질 및 보안 점수에 도달하기 위해 실제로 'SKILL.md'가 필요한 옴니 스킬은 무엇입니까?**---

## 🎯 Purpose

이 가이드에서는 저장소의 분류자가 실제로 기술에 어떻게 보상하는지 설명합니다.

다음과 같은 경우에 사용하세요.

- 최고 점수 밴드에 속하는 새로운 기술을 작성하세요.
- '좋음' 또는 낮은 '매우 좋음'에 머물고 있는 기존 스킬을 개선합니다.
- 적절한 형식을 갖춘 기술이 여전히 뛰어난 운영 자산처럼 평가되지 않는 이유를 이해합니다.

이것은 기여자를 향한 동반자입니다:

- [품질바](QUALITY-BAR.md)
- [스킬 해부](SKILL-ANATOMY.md)
- [스킬 분류](../specs/SKILL-CLASSIFICATION.md)

라이브 카탈로그의 현재 벤치마크:

- 공개된 스킬 32개
- 현재 품질 스프레드: `94, 95, 96, 97, 100`
- 현재 모범 사례 확산: `98, 99, 100`
- 현재 최고급: '100/100' 품질의 'omni-figma' 및 '100/100' 모범 사례---

## 🧱 What High Scores Really Mean

분류자는 예쁜 마크다운만으로는 보상하지**않습니다**.

높은 점수를 받는 기술은 다음과 같은 기술입니다.

-**검색 가능**: 기술의 기능과 사용 시기를 명확하게 설명하는 설명
-**운영**: 기술에는 로컬 스크립트, 참조 및 실행 가능한 예제가 포함됩니다.
-**진단**: 문제가 발생했을 때 에이전트가 복구하는 데 도움이 됩니다.
-**구체적**: 광범위한 조언이 아닌 하나의 작업 흐름에 초점을 맞춥니다.
-**안전함**: 위험한 패턴을 방지하고 깨끗한 스캐너 출력물을 제공합니다.

실제로 가장 강력한 기술은 일반 마크다운 메모라기보다는**소형 패키지 워크플로 키트**처럼 작동합니다.---

## 📋 Score Targets

작성 시 다음 대상을 사용하십시오.

| 차원 | 강력한 목표 | 예외적 대상 |
|:----------|:---------------|:------|
| 🎯 성숙도 | `L3` | 다양한 지원 리소스를 갖춘 `L3` |
| 📋 모범 사례 | `90+` | `96+` |
| ⭐ 품질 | `85+` | `90+` |
| 🛡️ 보안 | `95+` | 결과가 0인 '95+' |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

머리말은 기술을 쉽게 분류하고 발견하기 쉽게 만들어야 합니다.

- `name`은 디렉토리와 정확히 일치합니다.
- `설명`은**무엇**과**언제**를 모두 설명합니다.
- `카테고리`, `태그`, `도구`, `복잡성`, `위험`, `소스`, `작성자` 및 날짜가 모두 존재합니다.

좋은 설명 모양:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

잘못된 설명 모양:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

가장 강력한 기술에는 지속적으로 다음 섹션이 포함됩니다.

- `## 개요`
- `## 이 스킬을 언제 사용해야 하는지`
- `## 작업 흐름`
- `## 예시`
- `## 모범 사례`
- `## 문제 해결`
- `## 추가 리소스`

이들 중 하나라도 누락되면 점수는 여전히 좋을 수 있지만 뛰어난 것처럼 보이기는 더 어려워집니다.---

### 3. Runnable Local Support

최고 점수 기술에는 일반적으로 다음이 포함됩니다.

-`참조/체크리스트.md`
- `scripts/`에 하나 이상의 도우미 스크립트
- `examples/`에 하나 이상의 실제 예제가 있음
- 스킬이 직접 에이전트 호출용인 경우 `agents/openai.yaml`
-`SKILL.md`에서 해당 로컬 파일로의 직접 링크

이는 분류자가**번들 지원 자료**가 포함된 기술을 바깥쪽만 가리키는 기술보다 더 실행 가능한 것으로 취급하기 때문에 중요합니다.

권장 최소값:```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

높은 점수를 받은 예는 다음과 같습니다.

- 콘크리트
- `bash` 또는 `python`과 같은 실제 펜스를 사용하여 입력했습니다.
- 로컬 스크립트 또는 반복 가능한 명령에 연결됨
- 워크플로우의 대표자

좋음:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

약한:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

채점자는 단순히 문제를 인식하는 것이 아니라 상담원의 회복에 도움이 되는 문제 해결에 대해 보상합니다.

선호하는 형식:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

이는 다음과 같은 모호한 메모보다 더 강력합니다.```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

이제 분류자는 단순히 완전한 기술과 진정으로 깊은 기술을 구별합니다.

도움이 되는 신호:

- 여러 구체적인 예
- 여러 문제 해결 사례
- 관련 기술지도
- 더욱 풍부한 참조 팩
- 채점자가 직접 계산할 수 있는 번호가 매겨진 단계가 포함된 눈에 보이는 '## 작업 흐름' 섹션
- 작업 흐름을 명확하게 하는 하나 이상의 작업 테이블 또는 실행 맵
- 둘 이상의 지원 디렉토리 또는 자산 유형
- 실행을 안내하기에 충분한 단계가 포함된 워크플로 섹션
- 체크리스트, 루브릭, 매트릭스, 패킷 또는 플레이북과 같은 의사결정 자산
- `references/`, `scripts/`, `agents/`, `examples/` 또는 `assets/` 전반에 걸쳐 더 강력한 지원 팩 다양성
- 마크다운 옆에 단일 도우미가 포함되어 있지 않고 키트처럼 보일 만큼 충분한 재사용 가능한 지원 파일
- 워크플로우가 지원 팩을 정당화할 만큼 복잡할 때 단일 이상의 도우미 파일
- 트레이드오프와 실패 모드를 커버할 만큼 충분한 본체 깊이
- 이제 채점자가 세련된 형식과 실제로 재사용 가능한 작업 흐름 깊이를 구별하므로 운영 지침이 더욱 조밀해졌습니다.

별로 도움이 되지 않는 신호:

- 같은 지시를 다른 단어로 반복
- 일반 필러 텍스트
- 아래에 내용을 추가하지 않고 제목을 추가합니다.---

## 🧪 Fast Checklist Before You Commit

검증을 실행하기 전에 다음 체크리스트를 사용하십시오.

- 설명에는**무엇**과**언제**가 나와 있습니다.
- 기술이 하나의 작업 흐름에 집중되어 있습니다.
- '## Workflow'가 존재하며 번호가 매겨지거나 글머리 기호가 표시된 단계가 포함되어 있습니다.
- 실행 가능한 예제가 하나 이상 존재합니다.
- `references/`, `scripts/` 및 이상적으로 `examples/`는 `SKILL.md`에서 연결됩니다.
- 'agents/openai.yaml'은 해당 스킬이 에이전트 클라이언트에서 직접 호출을 위한 것일 때 존재합니다.
- 문제 해결은 'Symptoms' 및 'Solution'을 사용합니다.
- 해당 스킬은 'L3'으로 합리적으로 분류될 수 있습니다.
- 위험한 명령이나 의심스러운 경로가 존재하지 않습니다.

그런 다음 다음을 실행하십시오.```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- 설명은 정확하지만 너무 일반적입니다.
- 마크다운에 섹션이 있지만 작업 깊이가 없습니다.
- 예시는 지역 도우미를 가리키지 않습니다.
- 문제 해결이 존재하지만 진단은 아닙니다.
- 태그 또는 도구 식별자가 너무 적습니다.
- 스킬은 안전하고 깨끗하지만 예외로 간주하기에는 너무 얕습니다.---

## 🧭 Practical Rule

당신의 기술이 다음과 같다면:

-**템플릿**: 통과할 수 있음
-**가이드**: 점수가 좋을 수도 있습니다
-**워크플로 패키지**: 상위권에 들 가능성이 훨씬 더 높습니다.