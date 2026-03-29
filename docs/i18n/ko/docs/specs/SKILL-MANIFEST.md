# 📋 Skill Manifest Specification (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**빌드 파이프라인 중 각 `SKILL.md`에서 생성된 기계 판독 가능 JSON 매니페스트 — 모든 런타임 표면에서 사용되는 단일 데이터 계약입니다.**---

## 📊 Status

| 기능 | 상태 |
|:---------|:------|
| ✅ SKILL.md에서 자동 생성됨 | 구현 |
| ✅ CLI, API, MCP, A2A에서 사용 | 구현 |
| ✅ 체크섬이 포함된 아카이브 | 구현 |
| ✅ 보안 분류 | 구현 |

>**중요**: 매니페스트는**빌드 아티팩트**입니다. 기여자 작성자 `SKILL.md` - 파이프라인이 JSON 매니페스트를 자동으로 파생합니다.---

## 🎯 Purpose

매니페스트는**모든 런타임 표면**이 동일한 정규화된 형태를 사용하도록 존재합니다.

| 표면 | 매니페스트를 사용하는 방법 |
|:---------|:---------|
| 🖥️**CLI**| 검색, 설치 계획, 의사 진단 |
| 🌐**API**| 엔드포인트 응답, 필터링, 다운로드 링크 |
| 🔌**MCP**| 도구 응답, 리소스 내용 |
| 🤖**A2A**| 검색 및 추천 페이로드 |---

## 📁 Output Locations

| 유물 | 경로 |
|:---------|:------|
| 📊 루트 메타데이터 | `metadata.json` |
| 📊 스킬별 메타데이터 | `skills/<skill>/metadata.json` |
| 📋 기술 지수 | `skills_index.json` |
| 📚 출판된 카탈로그 | `dist/catalog.json` |
| 😀 스킬별 매니페스트 | `dist/manifests/<skill>.json` |
| 📦 우편 아카이브 | `dist/archives/<skill>.zip` |
| 📦 타르볼 아카이브 | `dist/archives/<skill>.tar.gz` |
| 🔒 체크섬 매니페스트 | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| 필드 | 설명 |
|:------|:------------|
| `스키마_버전` | 매니페스트 스키마 버전 |
| `id` | '이름' 필드의 안정적인 기술 식별자 |
| `슬러그` | `skills/` 아래의 디렉토리 슬러그 |
| `디스플레이_이름` | 첫 번째 제목부터 사람이 읽을 수 있는 제목 |### 📝 Metadata

| 필드 | 설명 |
|:------|:------------|
| `설명` | 서론의 간략한 요약 |
| '버전' | npm 패키지 버전과 별개인 스킬 버전 |
| '카테고리' | 표준 범주(정규화) |
| `원시_카테고리` | 머리말의 원본 카테고리 |
| `분류` | 추론된 대체가 포함된 전체 분류 메타데이터 |
| `태그` | 검색 가능한 태그 |
| '복잡성' | `초급` · `중급` · `고급` · `전문가` |
| '위험' | `안전` · `주의` · `공격적` · `비판적` |
| '출처' | `옴니팀` · `커뮤니티` · `공식` |
| '저자' | 속성 문자열 |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| 필드 | 설명 |
|:------|:------------|
| `진입점` | 정식 `SKILL.md` 경로 |
| `paths.root` | 저장소 내부의 스킬 디렉토리 |
| `paths.manifest` | `dist/`에 생성된 매니페스트 경로 |### 🖥️ Compatibility

| 필드 | 설명 |
|:------|:------------|
| '도구' | Frontmatter의 도구 식별자 |
| `설치_대상` | 도구별 설치 메타데이터 |

각 설치 대상에는 `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`이 포함됩니다.### 📦 Resources

| 필드 | 설명 |
|:------|:------------|
| `하위_자원` | 스킬 하위 디렉터리(`references`, `agents`, `assets`) |
| `아티팩트_개수` | 스킬 패키지의 총 파일 수 |
| `참조_개수` | 참조 문서 수 |
| `에이전트_개수` | 에이전트 구성 수 |
| `자산_개수` | 자산 파일 수 |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| 필드 | 설명 |
|:------|:------------|
| '전략' | 설치 전략(예: `copy-skill-directory`) |
| `현재_설치 프로그램` | 사람이 읽을 수 있는 설치 동작 |
| '레시피' | 클라이언트별 설치 방법 |### 📊 Classification

| 섹션 | 필드 |
|:---------|:-------|
| 🎯 `성숙함` | `skill_level`, `skill_level_label` |
| 📋 `최고의 실천` | `점수`(0-100) |
| ⭐ `품질` | `점수`(0-100) |
| 🛡️ `보안` | `점수`, `상태` |
| ✅ `검증` | `상태` |### 📝 Content

파생된 신호: `body_length`, `content_length`, `body_lines`, `word_count` 및 예제, 문제 해결 섹션 등에 대한 구조적 플래그### 📁 Artifacts

스킬 디렉터리 내에 제공되는 모든 파일의 배열:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**아티팩트 종류**: `entrypoint` · `reference` · `agent` · `asset` · `license` · `support`### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| 필드 | 설명 |
|:------|:------------|
| `entrypoint_sha256` | SKILL.md의 해시 |
| `패키지_sha256` | 정렬된 아티팩트 목록의 결정적 다이제스트 |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 😀 리포지토리 패키지 버전과 스킬 버전은 고민이 다릅니다. 패키지는 현재 '0.1.3'이며, 개별 스킬에는 고유한 의미 버전이 있습니다.---

## ⚠️ Compatibility Notes

| 규칙 | 근거 |
|:------|:------------|
| ✅ 저장소에서 파생 가능한 상태를 유지해야 합니다 | 수동 매니페스트 작성이 필요하지 않습니다. |
| ✅ 새로운 선택 필드를 추가할 수 있습니다 | 향후 호환성 |
| ⚠️ 기존 분야는 안정적으로 유지되어야 함 | 이전 버전과의 호환성 |
| 🚫 손으로 작성한 명단은 없습니다 | 빌드 타임 파생은 진실의 원천입니다 |