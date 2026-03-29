# 🔌 Local MCP Sidecar (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**「@omni-skills/server-mcp」のオプションのローカルモード拡張機能。クライアント検出、スキル管理、MCP 構成生成用のファイルシステム対応ツールを追加します。**---

## 📊 Status

|特集 |状態 |
|:--------|:------|
| ✅ 読み取り専用カタログツール |実装済み |
| ✅ ファイルシステム対応のローカル ツール |実装済み |
| ✅ 3 つのトランスポート (stdio/ストリーム/sse) |実装済み |
| ✅ 許可リストに登録された書き込み |実装済み |
| ✅ 書き込み前のプレビューのデフォルト |実装済み |
| ✅ クライアント対応の MCP 構成の書き込み |実装済み |
| ✅ HTTP 認証 + レート制限 |実装済み |
| ✅ リリース時の署名とチェックサム |生成されたアーカイブに対して実装され、API/MCP によって表示されます。
| 🟡 ローカル書き込み時の署名の強制 |まだ施行されていません。ローカル モードは、信頼できるローカル チェックアウトからのプレビューと書き込みを行います。
| 🟢 現在のクライアントの範囲 |インストール可能なクライアント 7 つ、構成可能なクライアント 16 つ、構成ターゲット 33 つ、構成プロファイル 19 つ |---

## 🎯 Purpose

ローカル モードでは、既存の読み取り専用 MCP カタログ サーフェス上に**ファイルシステム対応ツール**が追加されます。エージェントが次のことを行う必要がある場合に使用します。

- 🕵️ 互換性のあるローカル AI クライアントを検出
- 📋 インストールされたスキルを検査する
- 👁️ スキルのインストールまたは削除をプレビュー (ドライラン)
- 📦 ローカルスキルのインストールまたは削除を適用します
- ⚙️ プレビュー後にローカル MCP 構成ファイルを書き込みます

これは、次の 2 つの懸念事項を意図的に分離しています。

-**スキルインストール対象**
  「install_skills」を使用できる安定したスキル ディレクトリを持つクライアント
-**MCP 構成ターゲット**
  スキル ディレクトリがない場合でも、安定した文書化された MCP 構成形式を持つクライアントまたは IDE---

## 🔌 Transports

|輸送 |プロトコル |使用例 |
|:----------|:----------|:----------|
| `stdio` |パイプ |クライアントとの直接統合 |
| `ストリーム` |ストリーミング可能な HTTP |最新の HTTP クライアント |
| `っせ` |サーバー送信イベント |レガシークライアント |---

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

> すべてのコマンドは `OMNI_SKILLS_MCP_MODE=local` を自動的に設定します。---

## 🛠️ Local Tools

ローカル モードが有効になると、次の追加ツールが利用可能になります。

|ツール |説明 |デフォルト |
|:-----|:-----------|:----------|
| 🕵️ `detect_clients` | AI クライアントとそのスキル/構成パスをスキャンします。 — |
| 📋 `list_installed_skills` |特定のクライアントにインストールされているスキルを検査する | — |
| 📦 `install_skills` |スキルをクライアントのスキル ディレクトリにインストールします。 🔍予行演習 |
| 🗑️ `スキルの削除` |インストールされているスキルをクライアントから削除する | 🔍予行演習 |
| ⚙️ `configure_client_mcp` |特定のクライアントの MCP 構成を書き込む | 🔍予行演習 |

> ⚠️ `install_skills`、`remove_skills`、および `configure_client_mcp` は、`dry_run` が省略された場合、デフォルトで**dry-run**になります。---

## 🎯 Supported Targets

### 📂 Skills Directories

|クライアント |パス |
|:------|:-----|
| 🔵クロード・コード | `~/.claude/skills` |
| 🔵 カーソル | `~/.cursor/skills` |
| 🟡 ジェミニ CLI | `~/.gemini/skills` |
| 🟣 反重力 | `~/.gemini/antigravity/skills` |
| 🟢キロ | `~/.kiro/スキル` |
| 🔴コーデックスCLI | `~/.codex/skills` または `$CODEX_HOME/skills` |
| ⚪オープンコード | `<ワークスペース>/.opencode/skills` |

これら 7 つのターゲットは、現在唯一のファーストクラスのインストール先です。### ⚙️ MCP Config Files

|ターゲット |フォーマット |
|:------|:------|
| `~/.claude/settings.json` |クロードコード設定 JSON |
| `<ワークスペース>/.claude/settings.json` |クロードプロジェクト設定 JSON |
| `~/.claude.json` |レガシー クロード JSON (`mcpServers`) |
| `~/ライブラリ/アプリケーション サポート/クロード/claude_desktop_config.json` |クロード デスクトップ JSON (OS 固有) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<ワークスペース>/.cursor/mcp.json` |カーソル ワークスペース JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Gemini ユーザー JSON (`mcpServers`) |
| `<ワークスペース>/.gemini/settings.json` | Gemini プロジェクト JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` |反重力 JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Kiro ユーザー JSON (`mcpServers`) |
| `<ワークスペース>/.kiro/settings/mcp.json` | Kiro プロジェクト JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<ワークスペース>/.mcp.json` | JSON (`mcpServers`) |
| `<ワークスペース>/opencode.json` | OpenCode ワークスペース JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | OpenCode ユーザー JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` |クライン JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<ワークスペース>/.github/mcp.json` | GitHub Copilot リポジトリ JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI ユーザー JSON (`mcp`) |
| `<ワークスペース>/kilo.json` | Kilo CLI プロジェクト JSON (`mcp`) |
| `<ワークスペース>/.kilocode/mcp.json` | Kilo コード ワークスペース JSON (`mcpServers`) |
| `<ワークスペース>/. continue/mcpServers/omni-skills.yaml` |ワークスペース YAML (`mcpServers`) | を続行します。
| `<ワークスペース>/.junie/mcp/mcp.json` | Junie プロジェクト JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Junie ユーザー JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` |ウィンドサーフィン JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`拡張機能`) |
| `<ワークスペース>/.zed/settings.json` | Zed ワークスペース JSON (`context_servers`) |
| `<ワークスペース>/.vscode/mcp.json` | JSON (「サーバー」) |
| `~/.config/コード/ユーザー/mcp.json` | VS Code ユーザー JSON (`サーバー`) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders ユーザー JSON (`サーバー`) |
| `<ワークスペース>/.devcontainer/devcontainer.json` |ネストされた開発コンテナ JSON (`customizations.vscode.mcp.servers`) |
|クライアントルート `mcp.json` | JSON (クライアントごとの形式) |

これにより、サイドカーが得られます。

-**16 個の構成可能なクライアントまたは IDE**
-**33 のファーストクラス ターゲット パス**
-**19 形式のプロファイル**

現在のファーストクラス構成の対象範囲は次のとおりです。

- クロード コードとクロード デスクトップ
- カーソル
- VS Code と開発コンテナ
- ジェミニ CLI
- 反重力
- キロ
- コーデックス CLI
- 続行
- ジュニー
- ウィンドサーフィン
- ガチョウ
- オープンコード
- クライン
- GitHub コパイロット CLI
- キロコード
- ゼッド

手動またはスニペットのみの候補は、パブリック構成コントラクトが十分に安定するまで、意図的にファーストクラスのライター セットの外に置かれます。### 🧭 Expansion Policy

オムニ スキルでは、クライアント サポートを 3 レベルのモデルとして扱うようになりました。

1.**インストール可能**
   安定したスキル ディレクトリが存在するため、CLI とサイドカーはスキルを直接インストールできます。
2.**設定可能**
   安定した文書化された MCP 構成フォーマットが存在するため、「config-mcp」はファーストクラス ファイルをプレビューして書き込むことができます。
3.**手動またはスニペットのみ**
   この製品は明らかに何らかの形式で MCP をサポートしていますが、公開ドキュメントではまだ安全な自動ライターを正当化していません。

これが、JetBrains AI Assistant などのクライアントが手動/スニペットのみのままであるのに対し、Roo Code と Postman は、安全な自動マージ ストーリーがこのプロジェクトに十分な強度を持つまで、ファーストクラスのライター セットの外に留まる理由です。---

## 🔒 Allowlist Model

ローカル サイドカーは、**明示的な許可リスト**の下でのみ書き込みを行います。### 🟢 Default allowlist:

- `$HOME` の下にある既知のクライアント ルート
- Windsurf ユーザー設定用の `~/.codeium`
- GitHub Copilot CLI の `~/.copilot`
- Cline CLI の場合は `~/.cline`
- Goose 設定の場合は `~/.config/goose`
- Kilo/OpenCode CLI 設定の「~/.config/kilo」および「~/.config/opencode」
- `$CODEX_HOME` (未設定の場合は `~/.codex`)
- 現在のワークスペースのルート
- `<ワークスペース>/.agents`
- `<ワークスペース>/.github`
- `<ワークスペース>/.kilocode`
- `<ワークスペース>/.opencode`
- `<ワークスペース>/.zed`
- `<ワークスペース>/.Continue`
- `<ワークスペース>/.vscode`### ➕ Extend the allowlist:

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

サイドカーを利用した CLI ラッパーにより、JSON-RPC を直接呼び出すことなく、MCP 構成の生成にアクセスできるようになります。```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

デフォルトの動作はプレビューのみです。 「--write」は、許可リストの下の解決されたターゲット パスに設定を適用します。### 🌊 Windsurf

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

`configure_client_mcp` ツールは、以下を渡すときにクロード固有の設定を書き込むこともできます。

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

VS Code および Dev Container ターゲットの場合、「configure_client_mcp」は次のように記述することもできます。

- `サンドボックス有効`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

これは、ローカル stdio MCP サーバーをサンドボックス化するための現在の VS Code ガイダンスに対応しています。### 🧰 Cross-Client Entry Options

「configure_client_mcp」は、サポートされているプロファイル全体でより豊富なエントリ メタデータをサポートするようになりました。

- `ヘッダー`
- `環境`
- `env_file`
- `cwd`
- `timeout_ms`
- `説明`
- `include_tools`
- `exclude_tools`
- 「無効」
- 「信頼」

プロファイル固有のオプション:

- クロード: `allowed_mcp_servers`、`denied_mcp_servers`、`permissions_deny`、`enable_all_project_mcp_servers`
- Gemini: `mcp_allowed_servers`、`mcp_excluded_servers`
- Kiro: `disabled_tools`、`auto_approve`
- VS Code と開発コンテナ: `dev_watch`、`dev_debug_type`### 📋 Generated Recipes

「configure_client_mcp」は、プレビューまたは適用された構成とともに「レシピ」を返します。

これらのレシピは、クライアント認識のガイダンス ブロックです。次に例を示します。

- `claude mcp add ... --scope user|project`
- `gemini mcp add ... --scope user|project`
- `codex mcp add ...`
- Cursor、VS Code、Kiro、および Claude Desktop の手動ファイル編集レシピ

全体的な戦略は意図的に保守的になっています。

- 可能であれば、正規の構成ファミリーの小さなセットを再利用します。
- 公式ドキュメントが明確な形式を必要とする場合にのみ、特注のライターを維持します
- 文書化されていないターゲットに対する自動ライターの発明を避ける---

## 🔐 Hosted HTTP Hardening

HTTP トランスポートは、カタログ API と同じ環境主導のコントロールをサポートします。

|変数 |目的 |
|:---------|:----------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` |ベアラートークン認証 |
| `OMNI_SKILLS_HTTP_API_KEYS` |カンマ区切りの API キー |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` |管理者専用のランタイム イントロスペクション |
| `OMNI_SKILLS_RATE_LIMIT_MAX` |ウィンドウごとの最大リクエスト |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` |レート制限ウィンドウ (ms) |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` |監査ログを有効にする |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` |監査ログをファイルに書き込む |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` |ブラウザのオリジンを制限する |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` |許可される送信元 IP を制限する |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` |非管理ルート、非健全ルートの場合は `503` を返します。

> 🟢 `/healthz` は開いたままです。 `/mcp`、`/sse`、および `/messages` を有効にすると認証が必要になります。 `/admin/runtime` を構成するには、管理者トークンが必要です。---

## 🌍 Official Docs That Shape Support Decisions

現在のライター セットとマニュアルのみの境界は、次のような公式製品ドキュメントと照合してチェックされました。

- 人間クロード コード MCP
- OpenAI Codex CLI および OpenAI Docs MCP
- カーソル MCP ドキュメント
- MCP ドキュメントの続き
- Kiro MCP ドキュメント
- OpenCode MCP ドキュメント
- クライン MCP ドキュメント
- Kilo コード MCP ドキュメント
- GitHub Copilot CLI ドキュメント
- Zed MCP ドキュメント
- VS コード MCP ドキュメント
- JetBrains AI アシスタント MCP ドキュメント

これらのドキュメントは、一部のクライアントがファーストクラスの自動ライターを受け取る一方で、現時点ではスニペットのみを提供するクライアントがいる理由です。