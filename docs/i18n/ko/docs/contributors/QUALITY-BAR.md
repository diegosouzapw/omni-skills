# ✅ Quality Bar (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Omni Skills 저장소에 허용되는 기술에 대한 최소 요구 사항 및 권장 사항.**

특히 상위 밴드 점수를 겨냥한 작성 지침은 [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md)을 참조하세요.

게시된 카탈로그의 현재 벤치마크:

- 공개된 스킬 32개
- 평균 품질 점수 '96.3'
- 평균 모범 사례 점수 '98.7'
- 평균 보안 점수 '95.0'---

## 🔒 Required (Must Pass)

| # | 요구사항 | 확인 방법 |
|:--|:------------|:---------------|
| 1️⃣ |**유효한 머리말**| `python3 도구/스크립트/validate_skills.py` |
| 2️⃣ |**명확한 설명**| 한 줄로 기술의 기능을 설명해야 합니다(10자 이상) |
| 3️⃣ |**이름이 디렉터리와 일치**| `name:` ​​필드가 폴더 이름과 정확히 일치합니다 |
| 4️⃣ |**개요 섹션**| 마크다운 본문의 목적에 대한 간략한 설명 |
| 5️⃣ |**섹션 사용 시기**| 최소 2개의 특정 사용 시나리오 |
| 6️⃣ |**실행 가능한 지침**| AI 에이전트가 실행할 수 있는 단계별 콘텐츠 |
| 7️⃣ |**생성된 메타데이터**| 유효성 검사기가 `skills/<skill>/metadata.json`을 성공적으로 내보냅니다 |---

## ⭐ Recommended (Improves Score)

| # | 추천 | 점수 영향 |
|:--|:---------------|:-------------|
| 8️⃣ |**예**— 예상 출력이 포함된 하나 이상의 구체적인 예 | 📈 품질 +10-15 |
| 9️⃣ |**모범 사례**— ✅ 해야 함 / ❌ 안내하지 않음 | 📈 모범 사례 +5 |
| 🔟 |**도구로 테스트됨**— 하나 이상의 AI 코딩 도우미로 검증됨 | 📈 품질 +5 |
| 1️⃣1️⃣ |**태그**— 검색을 위한 관련 검색 가능한 태그 | 📈 모범 사례 +10 |
| 1️⃣2️⃣ |**카테고리**— 하나의 표준 카테고리에 할당됨 | 📈 모범 사례 +10 |
| 1️⃣3️⃣ |**문제 해결**— 구체적인 `증상` 및 ​​`해결 방법` 안내 | 📈 모범 사례 +5-10 |
| 1️⃣4️⃣ |**로컬 지원 자산**— `references/`, `scripts/` 및 이상적으로는 기술에서 연결된 `examples/` | 📈 모범 사례 +10 |
| 1️⃣5️⃣ |**정상 분류**— 성숙도 L3, 품질 85+, 모범 사례 90+ | 📈 전체 계층 |
| 1️⃣6️⃣ |**중요한 보안 결과 없음**— 정적 스캐너가 깨끗하게 통과 | 🛡️ 보안 100 |---

## ❌ Reasons for Rejection

| 이슈 | 왜 |
|:------|:----|
| ❌ 머리글이 없거나 잘못되었습니다 | 검증 파이프라인 중단 |
| ❌ 이름이 디렉터리와 일치하지 않습니다 | 카탈로그 생성 중단 |
| ❌ 비어 있거나 사소하게 짧은 설명 | 사용자가 기술을 발견할 수 없음 |
| ❌ 실행 가능한 콘텐츠 없음(링크 또는 스텁만) | 에이전트는 아무것도 실행할 수 없습니다 |
| ❌ 뚜렷한 개선 없이 중복 | 가치를 추가하세요. 복제하지 마세요 |
| ❌ '위험: 공격적' 태그가 없는 공격적인 콘텐츠 | 안전 및 규정 준수 |
| ❌ 중요한 보안 결과 | 신속한 유출, 파괴적인 명령 등 |---

## 🧪 Verify Locally

```bash
# Run validation
npm run validate

# Check your scores
cat skills/<your-skill>/metadata.json | jq '.quality, .best_practices, .security'

# Full build + smoke check
npm run build
npm run smoke
```

---

## 📊 Score Reference

| 차원 | 우수 | 좋음 | 작업 필요 |
|:----------|:----------|:------|:----------|
| ⭐**품질**| 80세 이상(플래티넘) | 60-79 (골드/실버) | <60(브론즈/스타터) |
| 📋**모범 사례**| 90+ (우수) | 70-89 (좋음) | 70세 미만(공정/작업 필요) |
| 🛡️**보안**| 95+(강화) | 80-94(보안) | 80명 미만(검토 필요) |
| 🎯**성숙**| L3(스크립트+테스트) | L2(지침) | L1(메타데이터만) |---

## 🧭 What High Scores Require

지속적으로 상위 밴드에 도달하려면 기술에 다음이 포함되어야 합니다.

- 스킬의**무엇**기능과**언제**사용해야 하는지를 모두 설명하는 강력한 기본 설명
- `사용 시기`, `워크플로`, `예제`, `모범 사례`, `문제 해결` 및 `추가 리소스`에 대한 명시적 섹션
- `references/`, `scripts/` 및 이상적으로는 `examples/` 아래의 로컬 지원 자료(`SKILL.md`에서 직접 연결됨)
- 스킬이 에이전트 클라이언트에서 직접 호출되어야 하는 경우 `agents/openai.yaml` 아래의 에이전트 메타데이터
- 작업 흐름에 도움이 되는 경우 작은 작업 테이블 또는 이에 상응하는 실행 맵
- 로컬 도우미 스크립트 또는 반복 가능한 명령을 가리키는 실행 가능한 예 하나 이상
- 일반적인 경고가 아닌 `증상`과 `솔루션`으로 작성된 문제 해결
- 단지 잘 짜여진 산문이 아닌 'L3' 자격을 갖추기에 충분한 깊이
- 최고 수준의 품질을 원하는 경우 더 강력한 워크플로 깊이, 의사 결정 자산 및 지원 팩 다양성
- 체크박스 커버에만 존재하는 것이 아니라 재사용이 가능하다고 느낄 만큼 깊이 있는 지원 팩
- 일관되게 상위 밴드를 원하는 경우 최소한 4개의 의미 있는 지원 제품군 또는 재사용 가능한 파일의 동등한 깊이