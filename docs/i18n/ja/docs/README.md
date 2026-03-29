# 📖 Omni Skills — Documentation Hub (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**現在のオムニ スキル プラットフォームを使用、操作、拡張、理解するための中心的なリファレンスです。**

標準コミュニティ ファイルはリポジトリ ルートに存在します。
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

|エリア |状態 |詳細 |
|:-----|:------|:----------|
| 🏗️**ランタイム**| ✅ 現在 |統合 CLI、Ink ビジュアル シェル、API、MCP、および A2A はすべて同じパッケージから出荷されます。
| 📦**カタログ**| 📌 32 のスキル | 15 のアクティブなカタログ カテゴリと 7 つの完全にサポートされたバンドルにわたる 32 の公開された「L3」スキル |
| 🎯**インストール**| ✅ 現在 |ガイド付き TTY インストール、選択的 `--skill` および `--bundle`、カスタム パスのサポート、および検出主導型インストール |
| 🌐**API**| ✅ 現在 |認証、管理ランタイム、レート制限、CORS/IP ホワイトリスト、メンテナンス モード、ダウンロードを備えた読み取り専用レジストリ API |
| 🔌**MCP**| ✅ 現在 | `stdio` · `stream` · `sse`、ローカル サイドカー モード、7 つのインストール可能なクライアント、16 つの構成可能なクライアント、33 の構成ターゲット、および 19 の構成プロファイル |
| 🤖**A2A**| ✅ 現在 | JSON/SQLite 耐久性、再起動再開、SSE ストリーミング、キャンセル、外部エグゼキュータ モード、および明示的に有効になっている場合のオプションのリース調整を備えたシンプル ファーストのローカル ランタイム |
| 🛡️**セキュリティ**| ✅ 現在 |静的スキャナー、オプションの ClamAV/VirusTotal、署名付きリリース アーティファクト、アーカイブ チェックサム、リリース時検証 |
| 📋**分類**| ✅ 現在 |正規分類法、成熟度、セマンティック品質の広がり、ベストプラクティスの広がり、セキュリティ スコアリング |
| 📁**アーカイブ**| ✅ 現在 | SHA-256 チェックサム マニフェストを含むスキルごとの `.zip` および `.tar.gz` アーカイブ |
| 🔐**署名**| ✅ 現在 |リリースタグに適用される分離された署名。ローカル インストール フローは同じマニフェストとチェックサム メタデータを消費します。
| 🧬**吸気の流れ**| ✅ 現在 |ネイティブ スキルは `skills/` の下にあります。 PR オートメーションはそれらをレビューし、`skills_omni/` の下でオムニ強化された派生を提案します。## 🔭 Current Project State

現在、基礎トラックはアクティブなプロジェクト状態にあり、2 番目のカテゴリー拡張ウェーブはすでにカタログに含まれています。プロジェクトは、オプションの将来の拡張トラックを含む作業ベースラインとして読み取られるはずです。

- パブリック `v0.1.2` とプライベート `v0.0.1` が現在の安定版リリースフロアです
- カタログには、15 のアクティブなカテゴリにわたる 32 の公開スキルと 7 つの完全にサポートされたバンドルが含まれています。
- ネイティブの取り込みと厳選された `skills_omni/` の出力は、多言語のネイティブの取り込みと英語のみの厳選された出力を含め、両方とも機能します。
- プロトコル サーフェス、リリース自動化、およびプライベート拡張自動化は、ブートストラップではなくサービス中です。

将来の拡張は引き続き計画的に行われます。

- 「デザイン」「ツール」「データAI」「機械学習」を深化させる
- 現在のコードネイティブ トラックの深さが強化されるまで、休止状態の非コードネイティブ カテゴリを再開しないようにします。
- その際、品質フロアとエンハンサーのレビュー パスをそのまま維持します

この計画は現在、次のように分割されています。

- [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md) 内の完了した最初の拡張ウェーブ
- [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md) 内の完了した 2 番目の拡張ウェーブ
- [tasks/README.md](tasks/README.md) の将来のバックログ---

## 📌 Current Decisions

これらのアーキテクチャに関する質問は、実際には「オープン」ではなくなり、プロジェクトの決定として扱われるようになりました。

1.**配布はマニフェストファーストであり、署名付きアーカイブのままです**
   機械可読マニフェストは、CLI、API、MCP、および A2A によって消費されるコントラクトのままです。署名されたスキルごとのアーカイブは、その契約の上に重ねられたダウンロードおよびリリースの表面です。
2.**プライベート カタログまたはプレミアム カタログは同じマニフェスト スキーマを再利用する必要があります**
   認証とポリシーは、マニフェストやカタログの形状をフォークすることではなく、外部で階層化する必要があります。
3.**MCP 構成はいくつかの正規エクスポート ファミリに収束する必要があります**
   Omni Skills は、JSON `mcpServers`、JSON `servers`、JSON `context_servers`、YAML `mcpServers`、YAML `extensions`、および TOML `[mcp_servers]` を中心に標準化する一方で、公式クライアント ドキュメントが異なる構造を必要とする場合にのみオーダーメイドのライターを維持します。

これらの決定は、以下を含む現在の公式 MCP およびクライアント ドキュメントと一致しています。

- 公式 MCP レジストリと拡張機能サポート ガイダンス (「modelcontextprotocol.io」)
- OpenAI ドキュメント MCP および Codex CLI ドキュメント (`developers.openai.com` および `platform.openai.com`)
- VS Code MCP 拡張機能と製品ドキュメント (「code.visualstudio.com」)
- Claude Code、Cursor、Continue、Junie、Kiro、OpenCode、Cline、Kilo Code、GitHub Copilot CLI、Zed、Goose、Postman、および JetBrains AI Assistant のクライアント ドキュメント---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

|ドクター |何を学ぶか |
|:----|:---------------|
| 📘 [はじめに](users/GETTING-STARTED.md) |最初のスキルをインストール、検証、呼び出します |
| 🧭 [CLI ユーザーガイド](users/CLI-USER-GUIDE.md) |完全なコマンド リファレンスと実際の CLI 使用パターン |
| 📗 [利用ガイド](users/USAGE.md) | CLI コマンド、インストール モード、ランタイム コマンド、および MCP 構成フロー |
| 📦 [バンドル](users/BUNDLES.md) |厳選されたバンドルとその現在の利用可能性 |
| 📚 [カタログ](CATALOG.md) |公開されたスキルの自動生成カタログ |
| 🔧 [システム Runbook](operations/RUNBOOK.md) |ランタイムの構築、提供、保護、トラブルシューティング |### 🏗️ If You Want to **Understand** the Runtime

|ドクター |何を学ぶか |
|:----|:---------------|
| 🗺️ [エージェント ネイティブ ロードマップ](アーキテクチャ/AGENT-NATIVE-ROADMAP.md) |アーキテクチャの進化、終了した決定、および残りの拡張領域 |
| 🧭 [CLI UX ロードマップ](アーキテクチャ/CLI-UX-ROADMAP.md) |ガイド付きおよびビジュアル CLI の歴史的な計画と現在の形状 |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) |コアモノリポジトリと共有ランタイムの決定 |
| 🔬 [コードベース分析](アーキテクチャ/CODEBASE-ANALYSIS.md) |現在のランタイム構成、カウント、およびシステム境界 |
| 🌐 [カタログ API サーフェス](specs/CATALOG-API.md) | HTTP エンドポイント、フィルタリング、ガバナンス、ダウンロード |
| 🧩 [CLI ガイド付きインストーラー](specs/CLI-GUIDED-INSTALLER.md) |ガイド付きインストーラーの動作契約 |
| 🖥️ [CLI ビジュアル シェル](specs/CLI-VISUAL-SHELL.md) |インクのビジュアル シェル、状態モデル、およびサービス ハブ |
| 🔌 [ローカル MCP サイドカー](specs/LOCAL-MCP-SIDECAR.md) |ファイルシステム対応ツール、許可リスト モデル、構成の書き込み |
| 🧭 [クライアント サポート マトリックス](specs/CLIENT-SUPPORT-MAT​​RIX.md) |サポートされている CLI および IDE クライアント、ライター、手動ターゲット、およびソース参照 |
| 📊 [スキル分類](specs/SKILL-CLASSIFICATION.md) |分類法、スコアリング ヒューリスティック、およびメタデータ アーティファクト |
| 🛡️ [セキュリティ検証](specs/SECURITY-VALIDATION.md) |スキャナー、アーカイブ、署名、リリース検証 |
| 📋 [スキルマニフェストスペック](specs/SKILL-MANIFEST.md) |機械可読マニフェスト形式と互換性契約 |### 🤝 If You Want to **Contribute**

|ドクター |何を学ぶか |
|:----|:---------------|
| 📝 [貢献ガイド](../CONTRIBUTING.md) |リポジトリのワークフローとプル リクエストの期待 |
| 🧾 [スキル PR ワークフロー](contributors/SKILL-PR-WORKFLOW.md) |ネイティブ取り込み、自動エンハンサー処理、`skills_omni/` パブリッシュ、およびレビュー担当者の期待 |
| 📄 [スキルテンプレート](contributors/SKILL-TEMPLATE.md) |現在のフロントマターと構造を備えたスターター `SKILL.md` |
| 🔬 [スキルアナトミー](寄稿者/SKILL-ANATOMY.md) |スキルに対する構造と品質の期待 |
| ✅ [クオリティバー](寄稿者/QUALITY-BAR.md) |リポジトリの受け入れ基準 |
| 🏆 [ハイスコア プレイブック](寄稿者/HIGH-SCORE-PLAYBOOK.md) |高い成熟度、品質、ベスト プラクティス、セキュリティ スコアを促進するもの |
| 📋 [タスク バックログ](tasks/README.md) |残りの公的および私的作業の詳細な実装バックログ |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

公開された「omni-skills」バイナリは、統合されたパブリック エントリ ポイントです。```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

完全なエンドユーザー コマンド サーフェスについては、[CLI ユーザー ガイド](users/CLI-USER-GUIDE.md) を使用してください。### 📁 Generated Artifacts

ビルド パイプラインは、すべてのランタイム サーフェスを駆動する機械可読ファイルを出力します。

|アーティファクト |目的 |
|:---------|:----------|
| `メタデータ.json` |リポジトリ全体の検証とスコアの概要 |
| `skills_index.json` |リポジトリローカルの正規化されたスキルインデックス |
| `dist/catalog.json` |検索およびリスト用の発行済みカタログ |
| `dist/bundles.json` |可用性のあるバンドル定義 |
| `dist/manifests/<スキル>.json` |スキルごとの機械可読マニフェスト |
| `dist/archives/<スキル>.zip` |スキルアーカイブ (zip) |
| `dist/archives/<スキル>.tar.gz` |スキルアーカイブ (tarball) |
| `dist/archives/<スキル>.checksums.txt` | SHA-256 チェックサム マニフェスト |

`dist/` は意図的にコミットされたままになります。これらの生成されたアーティファクトは、インストール、API、MCP、A2A、スモーク、リリース契約の一部です。### 🌐 API

```bash
npx omni-skills api --port 3333
```

スキル、バンドル、比較、インストール計画、アーティファクトのダウンロードのための読み取り専用レジストリ API。### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

ローカル サイドカーは、次のファーストクラス MCP 構成の書き込みをサポートするようになりました。

- クロード・コード
- カーソル
- VS Code と開発コンテナ
- ジェミニ CLI
- 反重力
- キロ
- コーデックス CLI
- 続行
- ウィンドサーフィン
- オープンコード
- クライン
- GitHub コパイロット CLI
- キロコード
- ゼッド
- ガチョウ### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

タスクのライフサイクル、ストリーミング、永続性、再起動回復、およびシンプルファーストのローカル オーケストレーション。共有リース実行は、明示的に有効にした場合に使用できます。 Redis は、デフォルトのローカル パスではなく、高度なホスト オプションのままです。---

## 🗂️ Repository Map

|パス |目的 |
|:-----|:----------|
| 📂 `スキル/` |正規の作成されたスキル |
| 📖 `docs/users/` |エンドユーザー向けドキュメント |
| 🤝 `ドキュメント/寄稿者/` |コントリビューターのテンプレートとガイダンス |
| 🏗️ `ドキュメント/アーキテクチャ/` |ロードマップ、ADR、および技術分析 |
| 🔧 `docs/operations/` |運用ランブック |
| 📋 `docs/specs/` |ランタイム、プロトコル、およびアーティファクトのコントラクト |
| 📚 `docs/CATALOG.md` |生成されたスキル カタログ |
| 📦 `dist/` |生成された機械可読アーティファクト |
| 🧠 `packages/catalog-core/` |共有カタログ ランタイム |
| 🌐 `packages/server-api/` |読み取り専用 HTTP API |
| 🔌 `packages/server-mcp/` | MCP サーバーとローカル サイドカー |
| 🤖 `packages/server-a2a/` | A2A サーバーとタスク ランタイム |
| 🖥️ `tools/bin/` | CLI エントリ ポイント |
| 📚 `tools/lib/` |インストーラーと UI ヘルパー |
| ⚙️ `ツール/スクリプト/` |検証、生成、検証、およびテスト |---

## 🧪 Release Validation

```bash
npm run smoke
```

スモーク実行により以下が検証されます。

- ✅ スキルの検証とメタデータの生成
- ✅ 分類再分類ツール
- ✅ カタログアーティファクトの生成
- ✅ カタログの値下げを生成
- ✅ アーカイブの生成と検証
- ✅ 自動テストスイート
- ✅ `npm Pack --dry-run`
- ✅ API のブートと健全性
- ✅ `stdio`、`stream`、および `sse` での MCP ブート
- ✅ A2A ブート、ポーリング、SSE ストリーミング、キャンセル、プッシュ構成のライフサイクル