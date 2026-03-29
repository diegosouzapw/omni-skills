# Client Support Matrix (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


このドキュメントでは、次の 3 つの入力にわたるオムニ スキルの実際のクライアント サーフェスを追跡します。

1. `/home/diegosouzapw/dev/proxys/9router` の `9router` ダッシュボード インベントリ
2. 現在の Omni Skills MCP サイドカーの実装
3. 各クライアントまたは IDE の現在の公式ドキュメント

これは、どのクライアントが最上級の「config-mcp」サポートを受けるか、どのクライアントが手動のみのままであるか、どのクライアントが単なる候補であるかを決定するための真実の情報源です。---

## Scope

このマトリックスは**MCP のクライアント構成**に関するものです。

それは次のものと同じではありません。

- スキルインストールサポート
- APIの互換性
- A2Aのサポート
- ACP またはその他の非 MCP プロトコル

マトリックスの一部の製品は MCP を消費しますが、意味のある「スキル ディレクトリ」を**持たない**ため、構成ターゲットのサポートのみを受けます。---

## 9router Inventory

「9router」ダッシュボードは現在、次の CLI ツールまたは IDE クライアントをグループ化しています。

- クロード・コード
- OpenAI コーデックス
- ファクトリー・ドロイド
- オープンクロウ
- カーソル
- クライン
- キロコード
- 続行
- 反重力
- GitHub コパイロット
- オープンコード
- キロAI

地元の情報源:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

これらのクライアントには、「config-mcp --target ...」を介してオムニ スキルに安定した明示的なストーリーが含まれるようになりました。

現在の実装の合計:

-**7 台のインストール可能なクライアント**
-**16 個の構成可能なクライアント**
-**33 のファーストクラス構成ターゲット**
-**19 構成プロファイル**

|クライアント |ステータス |構成ターゲット |メモ |
|:------|:------|:------|:------|
|クロード・コード | ✅ ファーストクラス | `workspace`、`claude-project`、`claude-user-settings`、`claude-user`、`claude-user-legacy`、`claude-desktop` |クロード固有の許可/拒否コントロールを使用した入力済みの `mcpServers` 設定 |
|カーソル | ✅ ファーストクラス | `カーソル-ワークスペース`、`カーソル-ユーザー` | JSON `mcpServers` ターゲット |
| VSコード | ✅ ファーストクラス | `vscode`、`vscode-user`、`vscode-insiders-user`、`devcontainer` | 「servers」root | を使用します。
|ジェミニ CLI | ✅ ファーストクラス | `gemini ユーザー`、`gemini ワークスペース` | JSON 設定 + グローバル MCP の許可/除外コントロール |
|反重力 | ✅ ファーストクラス | `反重力ユーザー` | JSON `mcpServers` ターゲット |
|キロ | ✅ ファーストクラス | `kiro-user`、`kiro-workspace`、`kiro-user-legacy` | Kiro 固有の無効化/自動承認フィールド |
|コーデックス CLI | ✅ ファーストクラス | `コーデックスユーザー` | TOML `mcp_servers` テーブル |
|続ける | ✅ ファーストクラス | `Continue-ワークスペース` |専用の YAML サーバーのドキュメント |
|ウィンドサーフィン | ✅ ファーストクラス | `ウィンドサーフィンユーザー` | `serverUrl` エントリを持つ JSON `mcpServers` ターゲット |
|オープンコード | ✅ ファーストクラス | `opencode-workspace`、`opencode-user` |公式 `opencode.json` / トップレベル `mcp` を使用したユーザー設定 |
|クライン | ✅ ファーストクラス | `クラインユーザー` | `cline_mcp_settings.json` と `mcpServers` |
| GitHub コパイロット CLI | ✅ ファーストクラス | `copilot-user`、`copilot-repo` | `mcp-config.json` またはリポジトリスコープの `.github/mcp.json` |
|キロコード | ✅ ファーストクラス | `キロユーザー`、`キロプロジェクト`、`キロワークスペース` | Kilo CLI は「kilo.json」を使用します。ワークスペース統合は `.kilocode/mcp.json` を使用します。
|ゼッド | ✅ ファーストクラス | `zed-ワークスペース` | `.zed/settings.json` と `context_servers` |
|ジュニー | ✅ ファーストクラス | `junie プロジェクト`、`junie ユーザー` | `mcpServers` を使用した `.junie/mcp/mcp.json` または `~/.junie/mcp/mcp.json` |
|ガチョウ | ✅ ファーストクラス | `グースユーザー` |永続的な MCP 拡張機能の最上位の `extensions` オブジェクトを使用する `~/.config/goose/config.yaml` |---

## Current Gaps

「9router」のこれらのクライアントは、まだオムニ スキルの第一級のライター ターゲットではありません**。

|クライアント |現在の状態 |なぜ |
|:------|:--------------|:----|
|ファクトリードロイド | ⚠️マニュアル/カスタムのみ |このパス中にプライマリ ドキュメントで安定したパブリック MCP 構成形状が見つかりません。
|オープンクロウ | ⚠️マニュアル/カスタムのみ | Factory Droid と同じ問題 |

サイドカーは引き続き「--file」または上級ユーザー向けのカスタム パスとともに使用できますが、安定した公開設定ドキュメントがなければオムニ スキルで一流のライターを発明すべきではありません。

隣接する 2 つの製品は現在ではよく理解されていますが、それでも意図的に一流の自動ライターには及ばないままです。

|クライアント |現在の状態 |なぜ |
|:------|:--------------|:----|
| JetBrains AI アシスタント | 🟡 マニュアル/スニペット |公式の MCP サポートは存在しますが、文書化されたワークフローは、安定したパブリック ファイル ターゲットではなく、UI 主導またはインポート主導です。
|郵便配達員 | 🟡 マニュアル/スニペット |公式 MCP サポートは存在しますが、設定は安定したパブリック ファイル ターゲットではなく製品 UX 内で管理されます。
| Roo コード | 🟡 候補者 |公開されている MCP ドキュメントは存在しますが、強力なクロスプラットフォーム ファイル パス コントラクトについては、ライターを追加する前に確認が必要です。---

## Support Policy

オムニ スキルは次のルール セットに従います。

1. 安定したスキル ディレクトリが存在する場合、**インストール可能**。
2. 安定したパブリック MCP 構成ファイル形式が存在する場合、**構成対応**。
3. 製品が MCP をサポートしているが、パブリック コントラクトが UI 優先、インポート優先、またはまだ不安定すぎる場合は、**手動/スニペットのみ**。

これは、以前のアーキテクチャに関する質問の 1 つに対する実際的な答えでもあります。プロジェクトは、安定したパブリック形式が存在する場合にのみ一流のライターを成長させ続ける必要があり、それ以外の場合は、正規のエクスポート ファミリとレシピとスニペットの少数のセットに依存する必要があります。### Canonical config families already in use

- JSON `mcpServers`
- JSON「サーバー」
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

|クライアント/IDE |推薦 |理由 |
|:-----------|:------|:------|
| JetBrains AI アシスタント | 🟡 マニュアル/スニペットは今のところ保存してください |公式サポートは本物ですが、UX は依然としてファイル契約優先ではなく製品管理です。
|郵便配達員 | 🟡 マニュアル/スニペットは今のところ保存してください |公式のセットアップは、ファイル コントラクト ファーストではなく、UI ファーストでワークスペース管理です。
| Roo コード | 🟡 次は調査します | MCP のサポートは期待できますが、ライターの安全性はより強力な構成パスの確認に依存します。
| VS Code 副操縦士チャット | 🟢 すでに間接的に取り上げられています |基礎となる VS Code MCP ファイルの場所はすでにサポートされています。
| Zed ACP / エージェント サーバー | 🟡 別のトラック |これは ACP/エージェント サーバーの領域であり、MCP 構成の書き込みだけではありません。---

## Official Sources Used

上記の決定は、現在の一次情報源と照合してチェックされました。

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [カーソルMCP](https://docs.cursor.com/tools)
- [MCPを続行](https://docs. continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [クラインMCP](https://docs.cline.bot/mcp)
- [Kilo コード MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI アシスタント MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [ジュニー MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Goose 設定ファイル](https://block.github.io/goose/docs/guides/config-files/)
- [Goose セッション拡張機能](https://block.github.io/goose/docs/guides/session-extensions/)
- [Postman MCP セットアップ](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo コード MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP 拡張ガイド](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [公式 MCP レジストリ](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

現在の Omni Skills サイドカーは、次の 3 つのサポート レベルを意図的に区別しています。

-**インストール可能なクライアント**
  - 既知のスキルディレクトリがあり、「install_skills」を使用できる
-**設定可能なクライアント**
  - 安定した構成ターゲットがあり、`configure_client_mcp` を使用できる
-**マニュアル/スニペット クライアント**
  - 文書化されていますが、安全なファーストクラスのファイルライターはまだありません

この分離により、製品の誠実さが保たれます。

すべての MCP 対応製品をスキル インストールのターゲットとして扱う必要はありません。
現時点では拡張段階は完了したと考えられている。将来の追加は、グース、ジュニー、コンティニュー、ウィンドサーフィンが現在クリアしているのと同じ公共契約のハードルをクリアした場合にのみ実現されるはずだ。