# 🔌 Local MCP Sidecar (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**클라이언트 감지, 기술 관리 및 MCP 구성 생성을 위한 파일 시스템 인식 도구를 추가하는 `@omni-skills/server-mcp`에 대한 선택적 로컬 모드 확장입니다.**---

## 📊 Status

| 기능 | 상태 |
|:---------|:------|
| ✅ 읽기 전용 카탈로그 도구 | 구현 |
| ✅ 파일 시스템 인식 로컬 도구 | 구현 |
| ✅ 3개의 전송(stdio/stream/sse) | 구현 |
| ✅ 허용된 쓰기 | 구현 |
| ✅ 쓰기 전 미리보기 기본값 | 구현 |
| ✅ 클라이언트 인식 MCP 구성 작성 | 구현 |
| ✅ HTTP 인증 + 속도 제한 | 구현 |
| ✅ 릴리스 시 서명 및 체크섬 | 생성된 아카이브에 대해 구현되고 API/MCP에 의해 표시됨 |
| 🟡 로컬 쓰기 시간 서명 시행 | 아직 시행되지 않았습니다. 로컬 모드 미리보기 및 신뢰할 수 있는 로컬 체크아웃에서 쓰기 |
| 🟢 현재 고객 범위 | 설치 가능 클라이언트 7개, 구성 가능 클라이언트 16개, 구성 대상 33개, 구성 프로필 19개 |---

## 🎯 Purpose

로컬 모드는 기존 읽기 전용 MCP 카탈로그 표면 위에**파일 시스템 인식 도구**를 추가합니다. 상담원이 다음을 수행해야 할 때 사용하세요.

- 🕵️ 호환되는 로컬 AI 클라이언트 감지
- 📋 설치된 스킬 검사
- 👁️ 스킬 설치 또는 제거 미리보기(시험 실행)
- 📦 로컬 스킬 설치 또는 제거 적용
- ⚙️ 미리보기 후 로컬 MCP 구성 파일 작성

이는 의도적으로 두 가지 우려 사항을 분리합니다.

-**스킬 설치 대상**
  `install_skills`를 사용할 수 있는 안정적인 기술 디렉토리가 있는 클라이언트
-**MCP 구성 대상**
  기술 디렉터리가 없더라도 안정적으로 문서화된 MCP 구성 형식을 갖춘 클라이언트 또는 IDE---

## 🔌 Transports

| 교통 | 프로토콜 | 사용 사례 |
|:----------|:---------|:---------|
| `stdio` | 파이프 | 직접 클라이언트 통합 |
| '스트림' | 스트리밍 가능한 HTTP | 최신 HTTP 클라이언트 |
| `세` | 서버에서 보낸 이벤트 | 기존 클라이언트 |---

## 🚀 Enable Local Mode

### 📦 From repo:

```bash
npm run mcp:local
npm run mcp:stream:local
npm run mcp:sse:local
```

### 📦 Via CLI:

```bash
npm run cli -- mcp stdio --local
npm run cli -- mcp stream --local
npm run cli -- mcp sse --local
npm run cli -- config-mcp --list-targets
npm run cli -- config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp
```

### 📦 From published package:

```bash
npx omni-skills mcp stdio --local
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

> 모든 명령은 `OMNI_SKILLS_MCP_MODE=local`을 자동으로 설정합니다.---

## 🛠️ Local Tools

로컬 모드가 활성화되면 다음과 같은 추가 도구를 사용할 수 있습니다.

| 도구 | 설명 | 기본값 |
|:------|:------------|:---------|
| 🕵️ `Detect_clients` | AI 클라이언트 및 해당 스킬/구성 경로 검색 | — |
| 📋 `list_installed_skills` | 특정 클라이언트에 설치된 기술 검사 | — |
| 📦 `설치_기술` | 클라이언트의 기술 디렉터리에 기술 설치 | 🔍 드라이런 |
| 🗑️`remove_skills` | 클라이언트에서 설치된 기술 제거 | 🔍 드라이런 |
| ⚙️`configure_client_mcp` | 특정 클라이언트에 대한 MCP 구성 작성 | 🔍 드라이런 |

> ⚠️ `install_skills`, `remove_skills` 및 `configure_client_mcp`는 `dry_run`이 생략되면**dry-run**으로 기본 설정됩니다.---

## 🎯 Supported Targets

### 📂 Skills Directories

| 클라이언트 | 경로 |
|:-------|:------|
| 🔵 클로드 코드 | `~/.claude/skills` |
| 🔵 커서 | `~/.cursor/skills` |
| 🟡 쌍둥이자리 CLI | `~/.gemini/skills` |
| 🟣 반중력 | `~/.gemini/반중력/기술` |
| 🟢 키로 | `~/.kiro/skills` |
| 🔴 코덱스 CLI | `~/.codex/skills` 또는 `$CODEX_HOME/skills` |
| ⚪ 오픈코드 | `<작업 공간>/.opencode/skills` |

이 7개의 대상은 현재 유일하게 일류 설치 대상입니다.### ⚙️ MCP Config Files

| 대상 | 형식 |
|:-------|:-------|
| `~/.claude/settings.json` | 클로드 코드 설정 JSON |
| `<작업공간>/.claude/settings.json` | 클로드 프로젝트 설정 JSON |
| `~/.claude.json` | 레거시 Claude JSON(`mcpServers`) |
| `~/라이브러리/응용 프로그램 지원/Claude/claude_desktop_config.json` | Claude Desktop JSON(OS별) |
| `~/.cursor/mcp.json` | JSON(`mcpServers`) |
| `<작업 공간>/.cursor/mcp.json` | 커서 작업공간 JSON(`mcpServers`) |
| `~/.gemini/settings.json` | Gemini 사용자 JSON(`mcpServers`) |
| `<작업공간>/.gemini/settings.json` | Gemini 프로젝트 JSON(`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | 반중력 JSON(`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro 사용자 JSON(`mcpServers`) |
| `<작업 공간>/.kiro/settings/mcp.json` | Kiro 프로젝트 JSON(`mcpServers`) |
| `~/.codex/config.toml` | TOML(`[mcp_servers]`) |
| `<작업 공간>/.mcp.json` | JSON(`mcpServers`) |
| `<작업 공간>/opencode.json` | OpenCode 작업 영역 JSON(`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode 사용자 JSON(`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | 클라인 JSON(`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON(`mcpServers`) |
| `<작업 공간>/.github/mcp.json` | GitHub Copilot 저장소 JSON(`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI 사용자 JSON(`mcp`) |
| `<작업 공간>/kilo.json` | Kilo CLI 프로젝트 JSON(`mcp`) |
| `<작업 공간>/.kilocode/mcp.json` | Kilo 코드 작업공간 JSON(`mcpServers`) |
| `<작업 공간>/.continue/mcpServers/omni-skills.yaml` | 작업공간 YAML(`mcpServers`) 계속 |
| `<작업 공간>/.junie/mcp/mcp.json` | Junie 프로젝트 JSON(`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie 사용자 JSON(`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | 윈드서핑 JSON(`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML('확장') |
| `<작업공간>/.zed/settings.json` | Zed 작업공간 JSON(`context_servers`) |
| `<작업 공간>/.vscode/mcp.json` | JSON(`서버`) |
| `~/.config/Code/User/mcp.json` | VS Code 사용자 JSON(`서버`) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders 사용자 JSON(`서버`) |
| `<작업 공간>/.devcontainer/devcontainer.json` | 중첩된 개발 컨테이너 JSON(`customizations.vscode.mcp.servers`) |
| 클라이언트 루트 `mcp.json` | JSON(클라이언트별 형식) |

그러면 사이드카가 제공됩니다.

-**16개의 구성 가능 클라이언트 또는 IDE**
-**33개의 최고 수준 대상 경로**
-**19가지 형식 프로필**

현재 최고 수준의 구성 적용 범위:

- 클로드 코드와 클로드 데스크탑
- 커서
- VS Code 및 Dev 컨테이너
- 제미니 CLI
- 반중력
- 키로
- 코덱스 CLI
- 계속
- 주니
- 윈드서핑
- 거위
- 오픈코드
- 클라인
- GitHub Copilot CLI
- 킬로코드
- 제드

수동 또는 조각 전용 후보자는 공개 구성 계약이 충분히 안정될 때까지 의도적으로 일류 작성자 세트 외부에 있습니다.### 🧭 Expansion Policy

Omni Skills는 이제 클라이언트 지원을 3단계 모델로 처리합니다.

1.**설치 가능**
   안정적인 기술 디렉터리가 존재하므로 CLI와 사이드카에서 직접 기술을 설치할 수 있습니다.
2.**구성 가능**
   안정적이고 문서화된 MCP 구성 형식이 존재하므로 `config-mcp`는 최고 수준의 파일을 미리 보고 쓸 수 있습니다.
3.**수동 또는 스니펫 전용**
   이 제품은 어떤 형태로든 MCP를 명확하게 지원하지만 공개 문서에서는 아직 안전한 자동 작성기를 정당화하지 않습니다.

이것이 JetBrains AI Assistant와 같은 클라이언트가 수동/조각 전용으로 유지되는 반면 Roo Code 및 Postman은 안전한 자동 병합 스토리가 이 프로젝트에 충분히 강력할 때까지 일류 작성자 세트 외부에 머무르는 이유입니다.---

## 🔒 Allowlist Model

로컬 사이드카는**명시적 허용 목록**에서만 작성합니다.### 🟢 Default allowlist:

- `$HOME` 아래에 알려진 클라이언트 루트
- Windsurf 사용자 구성을 위한 `~/.codeium`
- GitHub Copilot CLI용 `~/.copilot`
- Cline CLI용 `~/.cline`
- Goose 설정을 위한 `~/.config/goose`
- Kilo/OpenCode CLI 구성을 위한 `~/.config/kilo` 및 `~/.config/opencode`
- `$CODEX_HOME`(또는 설정되지 않은 경우 `~/.codex`)
- 현재 작업공간 루트
- `<작업공간>/.agents`
- `<작업공간>/.github`
- `<작업공간>/.kilocode`
- `<작업공간>/.opencode`
- `<작업공간>/.zed`
- `<작업공간>/.continue`
- `<작업공간>/.vscode`### ➕ Extend the allowlist:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

---

## ⚙️ Config Writing Examples

### 🔵 Claude Code / Project Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### 🔵 Cursor / Workspace JSON

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 🟡 Gemini CLI / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "headers": {
        "Authorization": "Bearer example"
      }
    }
  },
  "mcp": {
    "allowed": ["omni-skills"]
  }
}
```

### 🟢 Kiro / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "disabledTools": ["install_skills"],
      "autoApprove": ["search_skills", "get_skill"]
    }
  }
}
```

### 🟣 Antigravity

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚪ OpenCode

```json
{
  "mcp": {
    "omni-skills": {
      "type": "local",
      "command": ["/path/to/node", "/path/to/packages/server-mcp/src/server.js"],
      "environment": {
        "OMNI_SKILLS_MCP_MODE": "local"
      },
      "enabled": true
    }
  }
}
```

### 🟢 Cline

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "streamable-http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚫ GitHub Copilot CLI

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "tools": ["*"]
    }
  }
}
```

### 🔴 Kilo Code

```json
{
  "mcp": {
    "omni-skills": {
      "type": "remote",
      "url": "http://127.0.0.1:3334/mcp",
      "enabled": true
    }
  }
}
```

### 🟢 Continue

```yaml
name: 'Omni Skills'
version: '0.1.3'
schema: 'v1'
mcpServers:
  - name: 'omni-skills'
    transport:
      type: 'streamable-http'
      url: 'http://127.0.0.1:3334/mcp'
```

### 🧭 CLI Contract

사이드카 지원 CLI 래퍼는 직접 JSON-RPC 호출 없이 MCP 구성 생성에 액세스할 수 있도록 유지합니다.```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

기본 동작은 미리보기 전용입니다. `--write`는 허용 목록 아래의 확인된 대상 경로에 구성을 적용합니다.### 🌊 Windsurf

```json
{
  "mcpServers": {
    "omni-skills": {
      "serverUrl": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚡ Zed

```json
{
  "context_servers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 💜 VS Code

```json
{
  "servers": {
    "omni-skills": {
      "type": "stdio",
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 📦 Dev Container

```json
{
  "customizations": {
    "vscode": {
      "mcp": {
        "servers": {
          "omni-skills": {
            "type": "stdio",
            "command": "/path/to/node",
            "args": ["/path/to/packages/server-mcp/src/server.js"],
            "env": {
              "OMNI_SKILLS_MCP_MODE": "local"
            }
          }
        }
      }
    }
  }
}
```

### 🔴 Codex TOML

```toml
[mcp_servers.omni-skills]
url = "http://127.0.0.1:3334/mcp"
```

### 📋 Generic stdio

```json
{
  "mcpServers": {
    "omni-skills": {
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 🔵 Claude allow/deny lists

`configure_client_mcp` 도구는 다음을 전달할 때 Claude 관련 설정을 작성할 수도 있습니다.

-`allowed_mcp_servers`
-`denied_mcp_servers`
-`허가_거부`
-`enable_all_project_mcp_servers`### 💜 VS Code sandboxing

VS Code 및 Dev Container 대상의 경우 `configure_client_mcp`는 다음을 작성할 수도 있습니다.

-`샌드박스 활성화됨`
-`sandbox.filesystem.allowWrite`
-`sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

이는 로컬 stdio MCP 서버 샌드박싱에 대한 현재 VS Code 지침에 매핑됩니다.### 🧰 Cross-Client Entry Options

`configure_client_mcp`는 이제 지원되는 프로필 전체에서 더욱 풍부한 항목 메타데이터를 지원합니다.

-`헤더`
-`환경`
- `env_file`
-`cwd`
- `timeout_ms`
-`설명`
-`include_tools`
- `제외_도구`
- `비활성화`
- '신뢰'

프로필별 옵션:

- 클로드: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- 쌍둥이자리: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS 코드 및 Dev 컨테이너: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp`는 미리보기 또는 적용된 구성과 함께 `레시피`를 반환합니다.

이러한 레시피는 클라이언트 인식 지침 블록입니다. 예를 들면 다음과 같습니다.

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp 추가 ...`
- Cursor, VS Code, Kiro 및 Claude Desktop에 대한 수동 파일 편집 레시피

이제 전반적인 전략은 의도적으로 보수적입니다.

- 가능한 경우 작은 정식 구성 제품군을 재사용하세요.
- 공식 문서에 뚜렷한 모양이 필요한 경우에만 맞춤형 작가를 유지하세요.
- 문서화되지 않은 대상에 대한 자동 작성기를 발명하지 마십시오.---

## 🔐 Hosted HTTP Hardening

HTTP 전송은 카탈로그 API와 동일한 환경 기반 제어를 지원합니다.

| 변수 | 목적 |
|:---------|:---------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | 무기명 토큰 인증 |
| `OMNI_SKILLS_HTTP_API_KEYS` | 쉼표로 구분된 API 키 |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | 관리자 전용 런타임 자체 검사 |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | 창당 최대 요청 |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | 속도 제한 창(ms) |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | 감사 로깅 활성화 |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | 파일에 감사 로그 쓰기 |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | 브라우저 출처 제한 |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | 허용된 소스 IP 제한 |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | 비관리, 비상태 경로의 경우 '503' 반환 |

> 🟢 `/healthz`는 계속 열려있습니다. `/mcp`, `/sse` 및 `/messages`를 활성화하면 인증이 필요합니다. `/admin/runtime`에는 구성 시 관리자 토큰이 필요합니다.---

## 🌍 Official Docs That Shape Support Decisions

현재 작성기 세트 및 수동 전용 경계는 다음을 포함하여 공식 제품 문서와 비교하여 확인되었습니다.

- 인류 클로드 코드 MCP
- OpenAI Codex CLI 및 OpenAI Docs MCP
- 커서 MCP 문서
- MCP 문서 계속
- Kiro MCP 문서
- OpenCode MCP 문서
- Cline MCP 문서
- Kilo Code MCP 문서
- GitHub Copilot CLI 문서
- Zed MCP 문서
- VS Code MCP 문서
- JetBrains AI Assistant MCP 문서

이러한 문서 덕분에 일부 클라이언트는 일류 자동 작성기를 받는 반면 다른 클라이언트는 현재 스니펫 전용으로 남아 있습니다.