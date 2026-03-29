# 🤝 Contributing to Omni Skills (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills에는 스킬 카탈로그와 해당 카탈로그 위에 구축된 런타임 표면이 모두 포함되어 있습니다.**
> 기여는 두 영역 중 하나를 대상으로 할 수 있지만 두 영역 모두 생성된 아티팩트 및 현재 CLI 동작과 일치해야 합니다.---

## 📊 Repository Baseline

| 미터법 | 가치 |
|:-------|:------|
| 📦 패키지 버전 | `0.1.3` |
| 🧠 공개된 스킬 | `32` |
| 📦 완전히 지원되는 번들 | '7' |
| 🖥️ 설치 가능 클라이언트 | '7' |
| 🔌 MCP 구성 가능 클라이언트 | '16' |
| 🔄 자동 릴리스 | `main`에서 활성화됨 |---

## 중요

| 무엇 | 어디 |
|:------|:------|
| 🧠 기술은 | `skills/<skill-name>/SKILL.md` |
| 📖 기여자 템플릿 및 지침 | `문서/기고자/` |
| 🧾 새로운 기술에 대한 표준 PR 흐름 | [기술 PR 워크플로](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 네이티브 유입 기술은 | `기술/`(모든 언어) |
| ✨ 선별된 강화 파생상품 | `skills_omni/`(영어로만 제공, 자동) |
| 🚫`skills_omni/`는 보호됩니다 | 직접적인 대중 기부는 불가능합니다 |
| 📖 런타임 및 아키텍처 문서 | `문서/` |
| 📄 커뮤니티 파일 | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| 유형 | 면적 |
|:------|:------|
| 🧠 기술 추가 또는 향상 | `기술/` |
| 📖 기여자 지침 업데이트 | `문서/기고자/` |
| 🖥️ CLI, 설치 프로그램 또는 스크립트 개선 | `도구/` |
| 📦 카탈로그 런타임 또는 프로토콜 패키지 개선 | `패키지/` |
| 🧪 테스트, 연기 점검 또는 문서 릴리스 강화 | 다양한 |---

## 빠른 시작

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 '관리자 편집 허용'을 활성화하여 PR을 엽니다.**---

## 문서

좋은 기본 수신 기술은 다음과 같아야 합니다.

- ✅ 특정 문제를 깔끔하게 해결
- ✅ 프로젝트 전반에 걸쳐 재사용 가능
- ✅ 상담원이 실제로 따를 수 있는 지침을 포함하세요.
- ✅ 모호하거나 중복되는 콘텐츠는 피하세요.
- ✅ 가능한 경우 정확한 머리말 및 호환성 메타데이터를 선언하세요.
- ✅ 자동화 실행 후 생성된 `metadata.json` 분류 아티팩트가 있는 토지### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 팁:**릴리스 등급 스킬 팩에는 `agents/`, `references/`, `examples/` 및 `scripts/`가 포함되어야 합니다. 그러나 흡입 표면은 의도적으로 허용됩니다. 즉, 최소한의 기본 수신 기술이 허용되고 강화 파이프라인은 더 강력한 파생물을 생성합니다.### 🌐 Language Policy

| 표면 | 허용되는 언어 |
|:---------|:------|
| 📥`기술/`(원어민 섭취) | 포르투갈어, 영어 또는 모든 언어 |
| ✨ `skills_omni/`(선별된 출력) | 영어로만 |

> 개인 강화기는 제출된 기본 소스를 보존하고 선별된 파생물을 영어로 다시 작성합니다.

📖 전체 분기, 검증 및 인핸서 검토 순서는 [기술 PR 워크플로](docs/contributors/SKILL-PR-WORKFLOW.md)를 사용하세요.---

## ✅ Required Validation

PR을 열기 전에 다음을 실행하세요.```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<상세>
<summary>📋 <strong><code>npm run verify</code>가 재생성하는 것</strong></summary>

-`metadata.json`
- `skills/<skill>/metadata.json`
- 정식 분류 매핑
- 성숙도, 모범 사례, 품질 및 보안 점수
- 정적 보안 결과
- 선택적인 ClamAV 및 VirusTotal 스캐너 상태(구성된 경우)</details>

>**⚠️ 중요:**유효성 검사는 CLI, API, MCP, A2A, 매니페스트, 아카이브 및 릴리스 자동화에서 사용되는 계약입니다. 생성된 메타데이터를 일회용 출력이 아닌 검토 화면의 일부로 처리합니다.### 📥 Intake Policy

| 조건 | 행동 |
|:----------|:---------|
| 누락/불완전한 머리말 | ⚠️ 경고(차단하지 않음) |
| 중요한 보안 결과 | 🚫 블록 섭취 |
| 하드 검증 오류 | 🚫 블록 섭취 |
| 더욱 엄격한 편집 기준 | 기본 섭취량이 아닌 향상된 파생 흐름으로 시행 |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<상세>
<summary>📋 <strong>스모크 패스가 검증하는 것</strong></summary>

- ✅ 스킬 검증
- ✅ 카탈로그 생성
- ✅ 문서 카탈로그 생성
- ✅ 테스트 스위트
- ✅`npm pack --dry-run`
- ✅ API 부팅
- ✅ `stdio`, `stream` 및 `sse`에서 MCP 부팅
- ✅ A2A 부팅
- ✅ 아카이브 검증 및 패키징 기대</details>

---

## 📋 Skill Frontmatter

앞부분을 적극 권장합니다. [스킬 템플릿](docs/contributors/SKILL-TEMPLATE.md)을 기준으로 사용하세요.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<상세>
<summary>🏷️ <strong>표준 분류 카테고리</strong></summary>

| 카테고리 | 카테고리 |
|:---------|:---------|
| '개발' | `프론트엔드` |
| `백엔드` | `풀스택 웹` |
| '도구' | `cli-자동화` |
| '비즈니스' | `제품` |
| '디자인' | `데이터-AI` |
| `ai-에이전트` | '머신러닝' |
| `데브옵스` | `테스트 보안` |
| `문서` | `콘텐츠 미디어` |
| '소통' | '분류되지 않음' |</details>

>**ℹ️**스킬 버전은 npm 패키지 버전과 독립적입니다. 기본 수신 스킬에 아직 머리말이 없으면 경고와 함께 수락되고 디렉터리, 제목 및 본문 텍스트에서 임시 메타데이터가 파생됩니다.---

## ⚙️ Runtime Contributions

`packages/`, `tools/bin/`, `tools/lib/` 또는 빌드 스크립트를 터치하는 경우:

- 📦 `dist/`와 문서를 구현에 맞게 유지하세요.
- 🔄 카탈로그 로직을 복제하는 대신 `packages/catalog-core` 재사용을 선호합니다.
- 🔒 미리 보기 또는 테스트 실행 기본값 뒤에 로컬 쓰기 동작을 유지합니다.
- 🔌 MCP 작성자를 규율있게 유지하세요. 클라이언트가 안정적인 공개 구성 계약을 갖고 있는 경우에만 일류 구성 작성자를 추가하세요.
- 🛡️ 검토 표시줄의 일부로 보안 스캐너 경고를 처리합니다.
- 🧪 CLI 명령, 전송 모드 또는 공개 엔드포인트 변경 시 테스트 업데이트### 🚧 Important Boundary

| 이렇게 하세요 ✅ | 이러지 마세요 🚫 |
|:------------|:----|
| `skills/` 아래에 기본 작업 제출 | `skills_omni/`를 편집하는 수동 PR 열기 |
| 자동화가 인핸서 실행을 처리하도록 허용 | 선별된 콘텐츠를 직접 추가 |
| 합법적인 기술 품질에 집중 | 자동화된 동반 PR 흐름 우회 |

>**ℹ️**`skills/`의 기본 스킬이 업데이트되면 개인 강화기가 이를 재처리하고 강화된 기준을 새로 고칩니다.---

## 🔄 Enhancer Outcome States

공개 기본 기술 PR 중에 인핸서는 다음 네 가지 상태 중 하나를 보고합니다.

| 상태 | 의미 |
|:------|:---------|
| ✅`완료` | 깔끔하게 생성된 향상된 파생 상품, `skills_omni/`에 적합 |
| ⚠️ `저하` | 폴백 또는 약한 점수 이동으로 완료됨 - 더 주의 깊게 검사 |
| 🚫 '차단됨' | 인프라 또는 검증상의 이유로 중지됨 - 자동 게시 방지 |
| ❌ `실패` | 예상치 못한 오류 - 관리자 조사 필요 |

>**📝 기여자**는 인핸서 인프라 문제를 수정할 필요가 없습니다. 책임은 합법적인 기본 기술을 제출하고 저장소를 녹색으로 유지하는 것입니다.---

## 🔄 Automatic Release Policy

변경 사항이 `main`에 도달하고 다음을 포함하는 경우:

-`기술/**`
-`skills_omni/**`
- `데이터/bundles.json`

...저장소는**패키지 릴리스를 자동으로**발행합니다.### 📋 Version Bump Rule

| 보낸 사람 | 에 | 규칙 |
|:------|:---|:------|
| `0.1.0` | `0.1.1` | 패치 +1 |
| `0.1.9` | `0.1.10` | 패치 +1 |
| `0.1.10` | `0.2.0` | 다음 마이너로 전환, 패치 재설정 |

> 릴리스 흐름은 카탈로그/아카이브를 재생성하고, 버전 범프를 커밋하고, 릴리스에 태그를 지정하고, npm을 게시하고, GitHub 릴리스를 자동으로 생성합니다.---

## 📝 Commit Conventions

| 접두사 | 사용 대상 |
|:-------|:---------|
| `위업:` | 새로운 기술이나 기능 |
| `수정:` | 버그 수정 |
| `문서:` | 문서 변경 |
| `리팩터링:` | 코드 정리 또는 구조 변경 |
| `테스트:` | 변경사항 테스트 |
| `자질구레한 일:` | 유지보수 |---

## ❓ Need Help?

| 채널 | 링크 |
|:---------|:------|
| 💬 질문 | [토론 열기](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 버그 | [이슈 열기](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 초기 피드백 | [PR 초안 열기](https://github.com/diegosouzapw/omni-skills/pulls) |