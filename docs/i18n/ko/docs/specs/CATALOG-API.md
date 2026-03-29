# 🌐 Catalog API Surface (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**기술 검색, 검색, 비교, 설치 계획 및 아티팩트 다운로드를 위한 읽기 전용 HTTP API입니다.**---

## 📊 Status

| 기능 | 상태 |
|:---------|:------|
| ✅ 카탈로그 엔드포인트 | 구현 |
| ✅ 인증(무기명 + API 키) | 구현 |
| ✅ 관리 런타임 인증 | 구현 |
| ✅ 속도 제한 | 구현 |
| ✅ 감사 로깅 | 구현 |
| ✅ CORS 및 IP 허용 목록 | 구현 |
| ✅ 유지 관리 모드 | 구현 |
| ✅ 아카이브 다운로드 | 구현 |
| ✅ OpenAPI 사양 | 구현 |
| ⚠️ 거버넌스 백엔드 | 환경 중심, 프로세스 내 기준선 외부 게이트웨이 또는 IdP는 여전히 선택 사항 |---

## 🎯 Purpose

API는 다음을 위한 레지스트리 스타일 표면을 제공합니다.

- 📋 품질, 보안, 카테고리, 위험 등을 기준으로 기술 나열 및 필터링
- 😀 개별 스킬 매니페스트 가져오기
- 🔎 전체 텍스트 검색 및 다중 기술 비교
- 📦 재고가 있는 번들 목록
- 📐 읽기 전용 설치 계획 생성
- 📥 생성된 아티팩트, 아카이브 및 체크섬 매니페스트 다운로드

이 동일한 카탈로그 및 매니페스트 표면은 다음의 기초이기도 합니다.

- 로컬 CLI 설치 계획
- MCP 읽기 전용 검색 응답
- A2A 검색 및 설치 계획 전달
- 외부 인증이 위에 계층화되어 있는 잠재적인 개인 카탈로그---

## 빠른 시작

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**기본값**: `127.0.0.1:3333`---

## 🔐 Security Controls

모든 보안 제어는 환경 중심이며 선택 사항입니다.

| 제어 | 변수 | 예 |
|:---------|:---------|:---------|
| 🔑**전달자 인증**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | '대체-나' |
| 🗝️**API 키 인증**| `OMNI_SKILLS_HTTP_API_KEYS` | `키-a, 키-b` |
| 🛂**관리자 인증**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `관리 비밀` |
| 🚦**속도 제한**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**감사 로깅**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | '1' |
| 🗂️**감사 형식**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` 또는 `text` |
| 📄**감사 파일**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS 허용 목록**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**IP 허용 목록**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**신뢰할 수 있는 프록시**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | 루프백 |
| 🚧**유지관리 모드**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | '1' |
| ⏱️**다음 후 다시 시도**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**행동:**
- 🟢 `/healthz`는**항상 인증되지 않음**으로 유지됩니다.
- 🔒 인증이 활성화되면 다른 모든 경로에는 인증이 필요합니다.
- 🛂 `/admin/runtime`을 활성화하면 관리자 토큰이 필요합니다.
- 🚦 `X-RateLimit-*` 응답 헤더로 속도 제한이 진행 중입니다.
- 🧾 모든 응답에는 'X-Request-Id'가 포함됩니다.
- 🚧 유지 관리 모드는 비건강, 비관리 경로에 대해 '503'을 반환합니다.### ✅ Current governance decision

현재 프로젝트 방향은**공개 또는 비공개 배포에 동일한 카탈로그 형식을 재사용**하고 필요할 때 외부적으로 레이어 인증을 사용하는 것입니다.

이는 다음을 의미합니다.

- 매니페스트와 API 형태는 계속 공유됩니다.
- 자체 호스팅 및 로컬 배포는 진행 중인 기준선을 유지할 수 있습니다.
- 보다 발전된 호스팅 거버넌스는 나중에 데이터 모델을 포크하지 않고도 외부 게이트웨이 또는 엔터프라이즈 인증 계층으로 이동할 수 있습니다.### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| 방법 | 경로 | 설명 |
|:-------|:------|:------------|
| `GET` | `/healthz` | 상태 확인(인증되지 않음) |
| `GET` | `/openapi.json` | 동적 OpenAPI 3.1 사양 |
| `GET` | `/관리자/런타임` | 거버넌스 및 런타임 스냅샷(활성화된 경우 관리자 인증) |### 📚 Catalog & Skills

| 방법 | 경로 | 설명 |
|:-------|:------|:------------|
| `GET` | `/v1/기술` | 필터를 사용하여 기술 나열 |
| `GET` | `/v1/skills/:id` | 개별 기술 매니페스트 받기 |
| `GET` | `/v1/검색` | 전체 텍스트 검색 |
| `GET` | `/v1/compare?ids=id1,id2` | 여러 기술 비교 |
| `GET` | `/v1/번들` | 가용성이 있는 번들 나열 |
| '포스트' | `/v1/설치/계획` | 설치 계획 생성 |### 🔎 List/Search Filters

| 필터 | 예 |
|:-------|:---------|
| '카테고리' | `?category=개발` |
| '도구' | `?도구=커서` |
| '위험' | `?위험=안전` |
| `정렬` | `?sort=quality\|best-practices\|level\|security\|name` |
| `주문` | `?order=asc\|desc` |
| `최소 품질` | `?min_quality=80` |
| `최소_최적의 실천` | `?min_best_practices=60` |
| `최소_레벨` | `?min_level=2` |
| '최소 보안' | `?min_security=90` |
| '검증_상태' | `?validation_status=통과` |
| `보안_상태` | `?security_status=통과` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| 방법 | 경로 | 설명 |
|:-------|:------|:------------|
| `GET` | `/v1/카탈로그/다운로드` | 전체 카탈로그 다운로드 |
| `GET` | `/v1/skills/:id/artifacts` | 스킬 아티팩트 나열 |
| `GET` | `/v1/skills/:id/archives` | 스킬 아카이브 나열 |
| `GET` | `/v1/skills/:id/downloads` | 사용 가능한 모든 다운로드 링크 |
| `GET` | `/v1/skills/:id/download/manifest` | 스킬 매니페스트 JSON |
| `GET` | `/v1/skills/:id/download/entrypoint` | 스킬 SKILL.md |
| `GET` | `/v1/skills/:id/download/artifact?path=<경로>` | 특정 유물 |
| `GET` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | 스킬 아카이브 |
| `GET` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | 분리된 서명 |
| `GET` | `/v1/skills/:id/download/archive/checksums` | SHA-256 체크섬 |---

## 🔗 Link Enrichment

요청이 API를 통해 처리되면 서버는 들어오는 요청 원본에서 파생된 절대 URL을 사용하여 매니페스트, 아티팩트 목록 및 설치 계획을**자동으로 강화**합니다. 이는 `dist/manifests/*.json`에 구운 것이 아니라 런타임 강화입니다.---

## 📋 Install Plan Notes

> ⚠️**설치 계획은 원격 쓰기가 아닌 미리 보기입니다.**

API는 호출자의 컴퓨터에 설치되지 않습니다. 다음을 반환합니다.
- 😀 엄선된 스킬 메타데이터
- ⚠️ 번들 구성원 누락에 대한 경고
- 🖥️ 로컬에서 실행하기 위한 구체적인 CLI 명령
- 🔗 요청 출처가 있는 경우 공개 다운로드 URL---

## 🔌 Relationship to MCP

MCP 서버는 구성 시 동일한 공개 API URL을 재사용합니다.```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

이를 통해 MCP 설치 미리보기는 로컬 저장소 경로만 반환하는 대신 구체적인 매니페스트 및 아티팩트 URL을 반환할 수 있습니다.---

## 🧭 Admin Runtime Snapshot

'GET /admin/runtime'은 호스팅된 진단에 유용한 거버넌스 스냅샷을 반환합니다.

- 활성 인증 방법
- 관리자 인증 상태
- 속도 제한 창 및 최대
- CORS 허용 목록
- IP 허용 목록
- 유지관리 모드 상태
- 감사 대상 및 형식
- 현재 카탈로그 합계
- 추적성을 위해 요청 ID 에코