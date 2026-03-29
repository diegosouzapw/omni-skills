# Client Support Matrix (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


이 문서는 세 가지 입력에 걸쳐 Omni Skills의 실제 클라이언트 표면을 추적합니다.

1. `/home/diegosouzapw/dev/proxys/9router`의 `9router` 대시보드 인벤토리
2. 현재 Omni Skills MCP 사이드카 구현
3. 각 클라이언트 또는 IDE에 대한 최신 공식 문서

어떤 클라이언트가 최고 수준의 `config-mcp` 지원을 받는지, 어떤 클라이언트가 수동 전용으로 유지되고, 어떤 클라이언트가 후보인지 결정하기 위한 정보의 실제 소스입니다.---

## Scope

이 매트릭스는**MCP에 대한 클라이언트 구성**에 관한 것입니다.

다음과 동일하지 않습니다.

- 스킬 설치 지원
- API 호환성
- A2A 지원
- ACP 또는 기타 비MCP 프로토콜

매트릭스의 일부 제품은 MCP를 사용하지만 의미 있는 "기술 디렉터리"가**없어**config-target 지원만 받습니다.---

## 9router Inventory

'9router' 대시보드는 현재 다음과 같은 CLI 도구 또는 IDE 클라이언트를 그룹화합니다.

- 클로드 코드
- OpenAI 코덱스
- 팩토리 드로이드
- 오픈클로
- 커서
- 클라인
- 킬로코드
- 계속
- 반중력
- GitHub 코파일럿
- 오픈코드
- 키로 AI

현지 출처:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

이제 이러한 클라이언트는 `config-mcp --target ...`을 통해 Omni Skills에서 안정적이고 명시적인 스토리를 갖게 됩니다.

현재 구현 총계:

-**설치 가능한 클라이언트 7개**
-**16개의 구성 가능 클라이언트**
-**33개의 최고 수준 구성 대상**
-**19개 구성 프로필**

| 클라이언트 | 상태 | 구성 대상 | 메모 |
|:-------|:-------|:---------------|:------|
| 클로드 코드 | ✅ 일류 | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Claude 관련 허용/거부 제어 기능이 포함된 'mcpServers' 구성 입력 |
| 커서 | ✅ 일류 | `커서 작업 공간`, `커서 사용자` | JSON `mcpServers` 대상 |
| VS 코드 | ✅ 일류 | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | '서버' 루트 사용 |
| 제미니 CLI | ✅ 일류 | `gemini-user`, `gemini-workspace` | JSON 설정 + 전역 MCP 허용/제외 제어 |
| 반중력 | ✅ 일류 | `반중력 사용자` | JSON `mcpServers` 대상 |
| 키로 | ✅ 일류 | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Kiro 관련 비활성화/자동 승인 필드 |
| 코덱스 CLI | ✅ 일류 | `코덱스 사용자` | TOML `mcp_servers` 테이블 |
| 계속 | ✅ 일류 | `계속 작업 공간` | 전용 YAML 서버 문서 |
| 윈드서핑 | ✅ 일류 | `윈드서핑 사용자` | `serverUrl` 항목이 포함된 JSON `mcpServers` 대상 |
| 오픈코드 | ✅ 일류 | `오픈코드-작업공간`, `오픈코드-사용자` | 공식 `opencode.json`/최상위 `mcp`를 사용한 사용자 구성 |
| 클라인 | ✅ 일류 | `클라인 사용자` | `mcpServers`를 포함한 `cline_mcp_settings.json` |
| GitHub 코파일럿 CLI | ✅ 일류 | `copilot-user`, `copilot-repo` | `mcp-config.json` 또는 저장소 범위 `.github/mcp.json` |
| 킬로 코드 | ✅ 일류 | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI는 `kilo.json`을 사용합니다. 작업 공간 통합에서는 `.kilocode/mcp.json`을 사용합니다 |
| 제드 | ✅ 일류 | `zed-작업 공간` | `context_servers`를 포함한 `.zed/settings.json` |
| 주니 | ✅ 일류 | `junie-project`, `junie-user` | `mcpServers`를 사용하는 `.junie/mcp/mcp.json` 또는 `~/.junie/mcp/mcp.json` |
| 거위 | ✅ 일류 | `거위 사용자` | 영구 MCP 확장을 위한 최상위 `extensions` 개체를 사용하는 `~/.config/goose/config.yaml` |---

## Current Gaps

'9router'의 클라이언트는 아직 Omni Skills의 일류 작성자 대상이**아님**입니다.

| 클라이언트 | 현재 상태 | 왜 |
|:-------|:--------------|:----|
| 팩토리 드로이드 | ⚠️ 수동/맞춤형 전용 | 이 패스 동안 기본 문서에서 안정적인 공개 MCP 구성 형태를 찾을 수 없습니다. |
| 오픈클로 | ⚠️ 수동/맞춤형 전용 | Factory Droid와 동일한 문제 |

사이드카는 고급 사용자를 위한 `--file` 또는 사용자 정의 경로와 함께 계속 사용할 수 있지만 Omni Skills는 안정적인 공개 구성 문서 없이 일류 작성자를 만들어서는 안 됩니다.

인접한 두 제품은 이제 더 잘 이해되지만 여전히 의도적으로 일류 자동 작성기에 미치지 못합니다.

| 클라이언트 | 현재 상태 | 왜 |
|:-------|:--------------|:----|
| JetBrains AI 도우미 | 🟡 매뉴얼/스니펫 | 공식 MCP 지원이 존재하지만 문서화된 워크플로는 안정적인 공용 파일 대상이 아닌 UI 중심/가져오기 중심입니다 |
| 우편 배달부 | 🟡 매뉴얼/스니펫 | 공식 MCP 지원이 존재하지만 구성은 안정적인 공용 파일 대상이 아닌 제품 UX 내부에서 관리됩니다 |
| 루 코드 | 🟡후보 | 공개 MCP 문서가 존재하지만 강력한 크로스 플랫폼 파일 경로 계약은 작성자를 추가하기 전에 여전히 확인이 필요합니다 |---

## Support Policy

이제 옴니 스킬은 다음 규칙 세트를 따릅니다.

1. 안정적인 기술 디렉터리가 있는 경우**설치 가능**.
2. 안정적인 공개 MCP 구성 파일 형식이 존재하는 경우**구성 가능**.
3.**수동/스니펫 전용**제품이 MCP를 지원하지만 공개 계약이 UI 우선, 가져오기 우선이거나 여전히 너무 불안정한 경우.

이는 또한 초기 아키텍처 질문 중 하나에 대한 실용적인 대답이기도 합니다. 프로젝트는 안정적인 공개 형식이 존재하는 경우에만 일류 작가를 계속 성장시켜야 하며, 그렇지 않으면 더 작은 정식 내보내기 제품군과 레시피 및 스니펫에 의존해야 합니다.### Canonical config families already in use

- JSON `mcpServers`
- JSON `서버`
- JSON `컨텍스트_서버`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| 클라이언트/IDE | 추천 | 이유 |
|:-------------|:---------------|:-------|
| JetBrains AI 도우미 | 🟡 지금은 매뉴얼/스니펫 유지 | 공식 지원은 실제적이지만 UX는 여전히 파일 계약 우선이 아닌 제품 관리 |
| 우편 배달부 | 🟡 지금은 매뉴얼/스니펫 유지 | 공식 설정은 파일 계약 우선이 아닌 UI 우선 및 작업 공간 관리 |
| 루 코드 | 🟡 다음 조사 | MCP 지원을 약속하지만 작성자의 안전은 더 강력한 구성 경로 확인에 달려 있습니다 |
| VS 코드 부조종사 채팅 | 🟢 이미 간접적으로 다루었습니다 | 기본 VS Code MCP 파일 위치는 이미 지원됩니다. |
| Zed ACP/에이전트 서버 | 🟡 별도의 트랙 | 이는 MCP 구성 작성뿐만 아니라 ACP/에이전트-서버 영역입니다 |---

## Official Sources Used

위의 결정은 현재의 주요 소스와 비교하여 확인되었습니다.

- [인류 클로드 코드 MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [커서 MCP](https://docs.cursor.com/tools)
- [MCP 계속](https://docs.continue.dev/customize/tools)
- [키로 MCP](https://kiro.dev/docs/mcp)
- [오픈코드 MCP](https://opencode.ai/docs/mcp-servers/)
- [클라인 MCP](https://docs.cline.bot/mcp)
- [킬로 코드 MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [주니 MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [구스 구성 파일](https://block.github.io/goose/docs/guides/config-files/)
- [Goose 세션 확장](https://block.github.io/goose/docs/guides/session-extensions/)
- [Postman MCP 설정](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [루코드 MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP 확장 가이드](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [공식 MCP 레지스트리](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

현재 Omni Skills 사이드카는 의도적으로 세 가지 지원 수준을 구분합니다.

-**설치 가능 클라이언트**
  - 알려진 기술 디렉토리가 있고 `install_skills`를 사용할 수 있습니다.
-**구성 가능 클라이언트**
  - 안정적인 구성 대상이 있고 `configure_client_mcp`를 사용할 수 있습니다.
-**수동/스니펫 클라이언트**
  - 문서화되었지만 아직 안전한 일류 파일 작성자가 없습니다.

이러한 분리는 제품을 정직하게 유지합니다.

모든 MCP 지원 제품을 스킬 설치 대상으로 취급해서는 안 됩니다.
확장 단계는 현재 완료된 것으로 간주됩니다. 향후 추가 사항은 Goose, Junie, Continue 및 Windsurf가 현재 클리어한 것과 동일한 공공 계약 기준을 클리어한 경우에만 시작되어야 합니다.