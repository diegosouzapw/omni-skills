# 📦 Curated Bundles (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**번들은 카탈로그 위에 계층화되어 선별된 기술 선택기입니다.**이제 7개 스타터 번들은 모두 게시된 기술로 완전히 지원됩니다.---

## ⚙️ How Bundles Work

`--bundle`은 특수 패키지를 설치하지**않습니다**. 그것:

1. 📋 선택한 번들 정의를 확장합니다.
2. ✅ 현재 카탈로그에서 사용 가능한 멤버만 설치합니다.
3. ✅ 게시된 번들 구성원으로부터 구체적인 설치 계획 수립```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

현재 생성된 카탈로그(`dist/bundles.json`)를 기반으로 합니다.

| 번들 | 대상 | 가능 | 회원 |
|:-------|:------------|:----------|:---------|
| 🧰**필수사항**| 모든 개발자 |**4/4**| `기술 찾기` ✅ · `브레인스토밍` ✅ · `아키텍처` ✅ · `디버깅` ✅ |
| 🌐**풀스택**| 웹 및 앱 개발자 |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**디자인**| 디자인 시스템 및 접근성 |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**보안**| 보안 엔지니어 |**4/4**| `보안 감사자` ✅ · `취약점 검사기` ✅ · `사고 대응` ✅ · `위협 모델링` ✅ |
| ⚙️**개발**| 플랫폼 및 인프라 |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `관찰 가능성 검토` ✅ · `release-engineering` ✅ |
| 🤖**AI 엔지니어**| LLM 및 ML 개발자 |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-관리자**| OSS 관리자 |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = 게시 및 설치 가능---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- 도메인에 대한**선별된 시작점**을 원합니다.
-**선별되고 도메인별로**유지되는 설치 계획을 원합니다.
- 역할에 대한 전체 작업 세트를 빠르게 설치하려는 경우### 🎯 Use `--skill` instead when:

-**최소 설치 보장**을 원합니다.
- 당신은 당신에게 필요한**정확한 기술**을 이미 알고 있습니다.
- 선별된 작업 세트 대신**가능한 가장 작은 공간**을 원합니다.---

## 💡 Practical Recommendations

| 목표 | 명령 |
|:------|:---------|
| 🎯 특정 공개 스킬 설치 | `npx 옴니-스킬 --cursor --skill 옴니-figma` |
| 📦 완벽하게 지원되는 스타터 번들 | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 디자인 시스템 번들 | `npx omni-skills --cursor --bundle design` |
| 🔧 OSS 워크플로 번들 | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ 보안 워크플로 번들 | `npx omni-skills --cursor --bundle security` |
| ⚙️ DevOps 번들 | `npx omni-skills --cursor --bundle devops` |
| 🤖 AI 엔지니어 번들 | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 결정하기 전에 검색해 보세요 | `npx 옴니 스킬 찾기 figma` |
| 📋 모든 번들 가용성 보기 | `cat dist/bundles.json` |---

## 🔍 Inspecting Bundles

### 📁 View Generated Bundle Data

```bash
cat dist/bundles.json
```

### 🌐 Query via API

```bash
curl http://127.0.0.1:3333/v1/bundles
```

### 🔌 Query via MCP

번들 매개변수와 함께 'search_skills' 또는 'preview_install' 도구를 사용하세요.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
