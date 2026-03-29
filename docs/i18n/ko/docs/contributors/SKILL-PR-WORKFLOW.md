# Skill PR Workflow (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


이는 하나 이상의 기본 기술을 추가하거나 실질적으로 업그레이드하는 풀 요청에 대한 표준 저장소 흐름입니다.

다음과 같은 경우에 사용하세요:

- `skills/`에 새로운 스킬 추가
- 새로운 도메인 스킬로 번들 심화
- 더 큰 지원 팩 확장 출시
- 관리자가 병합하기 전에 개인 확장기로 분기 유효성을 검사합니다.## Target Outcome

강력한 기본 기술 PR은 다음과 같습니다.

- `skills/` 아래의 기본 스킬
- 공개 검증자가 분류하고 색인을 생성할 만큼 충분한 콘텐츠
- 공개 검증 및 테스트 통과
- PR 중 자동 인핸서 처리
- 향상된 파생 상품이 게시되면 후속 `skills_omni/` PR
- 필요할 때 원래 언어로 보존된 기본 섭취량
- 영어로 다시 작성된 선별된 향상된 출력
- `skills_omni/`를 네이티브 인핸서 섭취에 다시 공급하지 않는 단방향 네이티브-큐레이트 흐름## Enhancer Outcome States

공개 PR 강화 프로그램은 이제 관리자가 볼 수 있는 네 가지 상태를 보고합니다.

- `완료`
  향상된 파생물은 깔끔하게 생성되었으며 동반 `skills_omni/` 게시에 적합합니다.
- `저하`
  인핸서는 완료되었지만 대체 경로를 사용했거나 경고를 생성했습니다. 파생 상품을 건강한 것으로 취급하기 전에 유지 관리 담당자의 검토가 여전히 예상됩니다.
- `차단`
  호스팅된 OmniRoute 실행 전 실패 또는 게시를 방지해야 하는 후보 검증 실패와 같은 인프라 또는 검증 문제로 인해 실행이 중지되었습니다.
- '실패'
  강화 프로그램에 예상치 못한 런타임 오류가 발생하여 관리자 조사가 필요합니다.## Recommended Branch Shape

집중된 분기를 만듭니다.```bash
git checkout -b feat/<short-skill-theme>
```

예:

-`위업/사고-관찰 가능성 평가`
-`feat/devops-skill-pack`
- `feat/security-skill-pack`## Native Intake Rules

공공 흡입 표면은 의도적으로 허용됩니다.

최저한의:```text
skills/<skill>/
└── SKILL.md
```

권장되지만 더 이상 섭취가 필요하지 않습니다.```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

기본 기여는 대략적이거나 불완전하거나 일반 지원 팩 표준을 벗어날 수 있습니다. 그것은 의도적인 것입니다. 'skills/'는 엄선된 파생 표면이 아닌 기본 섭취 표면입니다.

언어 정책:

- `skills/` 아래의 기본 섭취량은 어떤 언어로든 작성할 수 있습니다.
- 인핸서는 출처를 위해 제출된 기본 스냅샷을 유지합니다.
- `skills_omni/` 아래에 선별된 파생물은 항상 영어로 작성되어야 합니다.

이제 더 엄격한 편집 표시줄이 다음에 적용됩니다.

- 생성된 메타데이터 및 보안 검사
- 개인 강화제 검토
- `skills_omni/` 아래에 선별된 후속 파생물## Authoring Sequence

1. `skills/<skill>/SKILL.md`를 생성합니다.
2. 가능하다면 머리말을 추가하십시오. 그러나 누락되거나 불완전한 머리말은 더 이상 기본 내용 자체를 차단하지 않습니다.
3. 이미 있는 경우 `agents/`, `references/`, `examples/` 및 `scripts/`를 추가합니다.
4. 기술이 기존 번들을 심화시키는 경우 `data/bundles.json`을 업데이트합니다.
5. PR을 엽니다. 이제 repo 자동화가 나머지 작업을 수행합니다.## Validation Sequence

기여자는 PR을 열기 전에 다음과 같은 정확한 순서를 실행할 수 있습니다.```bash
npm run validate
npm run build
npm test
git diff --check
```

변경 사항이 런타임이나 패키징 동작에도 영향을 미치는 경우 다음도 실행하세요.```bash
npm run smoke
```

## What Happens Automatically During the PR

PR이 열리거나 동기화되고 `skills/` 및 선택적인 `data/bundles.json` 아래의 기본 기술 섭취 파일만 건드리면 이제 공개 저장소가 자동으로 비공개 강화기를 트리거합니다.

현재 자동화된 흐름:

1. 공개 'Validate Skills' 워크플로는 PR에서 실행되며 유효성 검사, 빌드, 생성된 아티팩트 및 테스트를 확인합니다.
2. 공개 'PR 스킬 향상' 워크플로가 병렬로 시작되어 '라이브' 모드에서 변경된 네이티브 스킬을 하나씩 처리합니다.
3. 강화자는 'skills/'에서 기본 기술을 읽고, 현재 모범 사례를 연구하고, 검토된 강화된 후보를 개인 작업 공간에 작성합니다.
4. 인핸서는 필요할 때 업스트림 취수 스냅샷을 원래 언어로 유지하지만 선별된 출력을 영어로 다시 작성합니다.
5. 인핸서 게시물이 소스 PR로 다시 진행됩니다.
6. 인핸서는 처리된 각 스킬 후에 배치 합계 및 최신 상태로 PR 상태 설명을 업데이트합니다.
7. 완료되면 향상된 파생 항목을 'skills_omni/'로 구체화하고 '완료' 및 '저하' 출력에 대해서만 공개 저장소에서 동반 PR을 열거나 업데이트합니다.
8. PR이 'main'에 병합된 후 프라이빗 리포지토리 인식 폴러는 변경된 기본 기술을 재처리하고 'workspace/enhanced/skills/<skill>/'을 새로 고치며 최신 공개 네이티브 소스에 맞춰 프라이빗 강화 기준선을 유지합니다.
9. 병합 후 공개 릴리스 워크플로는 npm 패키지 버전을 높이고, 카탈로그 아티팩트를 재생성하고, 릴리스를 게시하고, 새 버전에 자동으로 태그를 지정합니다.

비율 제한:

- PR 강화기는 현재**분당 1개의 스킬**을 처리합니다.
- 따라서 40개의 기본 새 스킬을 갖춘 PR은 약 40분 동안 인핸서 대기열에 머물 수 있습니다.
- PR에는 진행 중인 CI 실행으로 작업하는 것과 기술별로 기술을 향상시키는 진행 설명이 표시됩니다.

기여자는 인핸서를 수동으로 실행할 필요가 없습니다.## No-Loop Rule For `skills_omni/`

선별된 표면은 의도적으로 단방향입니다.

- 기본 입력은 `skills/`를 통해 입력됩니다.
- 개인 강화자는 기본 입력을 검토합니다.
- 선별된 출력은 `skills_omni/`에 제안됩니다.
- `skills_omni/`는 다시는 네이티브 섭취로 처리되지 않습니다.
- 이후의 기본 업데이트는 여전히 `skills/`를 통해 다시 입력되고 재처리 후 개인 강화 기준을 대체합니다.

이제 저장소는 해당 경계를 적용합니다.

-`skills_omni/`를 수정하는 직접적인 공개 PR은 거부됩니다.
-`skills-omni/pr-*` 분기 제품군의 자동화 작성 동반 PR만 허용됩니다.
- `skills/`와 `skills_omni/`를 동시에 변경하려는 혼합 PR은 거부됩니다.## Automatic Versioning After Merge

이제 'main'에 대한 기술 보유 병합이 저장소 릴리스 워크플로우를 자동으로 트리거합니다.

현재 패키지 버전 정책:

- 각 적격 병합에 대해 '+1'씩 패치가 증가합니다.
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- `.10` 이후 패키지는 다음 마이너로 롤백하고 패치를 재설정합니다.
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

현재 릴리스 트리거 경로:

-`기술/**`
-`skills_omni/**`
- `데이터/bundles.json`

자동 릴리스 작업은 다음과 같습니다.

1. `package.json`에서 다음 패키지 버전을 계산합니다.
2. `package.json` 및 `package-lock.json` 범프
3. `metadata.json`, `skills_index.json`, `dist/` 및 `docs/CATALOG.md`를 재생성합니다.
4. 엄격한 릴리스 확인 파이프라인을 실행합니다.
5. 버전 범프를 `main`으로 다시 커밋합니다.
6. 새 버전에 대한 Git 태그를 생성합니다.
7. npm 및 GitHub 릴리스 아티팩트 게시

중요한 출시 참고 사항:

- GitHub는 해당 파일이 기본 분기에 도달한 후에만 새 워크플로 파일을 활성 리포지토리 워크플로로 등록합니다.
- 'PR 기술 향상'이 '메인'에 도달할 때까지 기여자는 문서화된 프로세스를 읽을 수 있지만 GitHub는 아직 공개 PR에서 해당 워크플로를 자동으로 실행하지 않습니다.
- 워크플로가 'main'으로 병합된 후 위에 설명된 동작은 향후 기본 기술 PR의 기본 유입 경로가 됩니다.## Native vs Enhanced

이제 이 저장소에는 두 개의 서로 다른 표면이 있습니다.

-`기술/`
  네이티브 섭취. 이렇게 하면 제출된 원래 기여가 유지됩니다.
-`skills_omni/`
  자동화를 통해 제안되고 Omni Skills Team에서 유지 관리되는 옴니 강화 파생 출력입니다.

`skills_omni/`에 대한 귀속 규칙:

- 강화된 파생상품은 전능하게 유지됩니다.
- 원래 기여자와 업스트림 기본 기술은 그대로 유지됩니다.
- 각각의 향상된 디렉토리는 업스트림 경로, PR, 작성자 및 소스 컨텍스트가 포함된 `ATTRIBUTION.md` 파일을 유지합니다.
- 각 향상된 디렉터리는 선별된 출력일 뿐이며 기본 강화제 섭취 경로에 다시 제출해서는 안 됩니다.
- 각 향상된 디렉터리는 업스트림 기본 소스가 영어가 아닌 경우에도 영어 출력이 될 것으로 예상됩니다.## Manual Maintainer Commands

자동화는 일반적인 PR 섭취를 다루지만 관리자는 필요할 때 수동으로 개인 강화기를 실행할 수 있습니다.

분기 차이에 대한 일괄 처리:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

단일 기술 검토:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

스킬당 예상 강화 출력:

- `작업공간/수신/원본/<실행 ID>/<스킬>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `작업 공간/보고서/<run-id>/research.json`
- `작업 공간/보고서/<run-id>/rewrite.json`
- `작업 공간/보고서/<run-id>/validation.json`
- `작업 공간/보고서/<run-id>/score-delta.json`
- `작업 공간/보고서/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `작업 공간/보고서/<run-id>/rewrite-prompt.md`## PR Body Expectations

홍보 기관은 다음을 명시해야 합니다.

- 어떤 스킬이 추가되거나 업그레이드되었는지
- 심화되는 번들 또는 워크플로
- 어떤 검증이 실행되었는지
- 자동화된 인핸서가 실행되었는지 여부
- `skills_omni/` 컴패니언 PR을 열었는지 또는 업데이트했는지 여부
- 귀속 또는 후속 정리에 대한 예외적인 관리자 메모## Reviewer Checklist

- 기본 섭취는 합법적이고 악의적이지 않습니다.
- 생성된 메타데이터 및 매니페스트가 새로 고쳐졌습니다.
- 번들 업데이트는 의도적입니다.
- 공개 검증 및 빌드 출력은 녹색입니다.
- 강화 상태 코멘트는 실제 변경된 스킬 및 최종 결과 상태와 일치합니다.
- 모든 `skills_omni/` 컴패니언 PR은 속성을 올바르게 유지합니다.## Example PR Scope

강력한 예시 PR에는 다음과 같은 주제 세트를 추가할 수 있습니다.

- 하나의 관찰성 또는 DevOps 기술
- 하나의 사건 또는 보안 기술
- AI 평가 또는 프롬프트 기술 1개

이는 PR을 전체 카탈로그 재작성으로 전환하지 않고도 채점기, 자동 향상기, `skills_omni/` 게시 흐름, 번들 및 속성 모델을 실행하기에 충분히 큽니다.