# 🗺️ Agent-Native Roadmap (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**オムニ スキルのアーキテクチャ進化計画: インストーラーファースト リポジトリから、ロジックを重複させることなく CLI、API、MCP、A2A を強化する共有カタログ ランタイムまで。**---

## 📊 Current Platform Areas

|フェーズ |名前 |ステータス |
|:------|:-----|:------|
| 1️⃣ |契約と成果物 | ✅ 現在 |
| 2️⃣ |読み取り専用カタログ API | ✅ 現在 |
| 3️⃣ | MCP ディスカバリー サーフェス | ✅ 現在 |
| 4️⃣ |ローカル インストールと構成サーフェス | ✅ 現在 |
| 5️⃣ | A2A オーケストレーション | ✅ 現在 |### ✅ What Exists Today

- `dist/` 内の機械読み取り可能なカタログ アーティファクト
- 検索、バンドル、比較、インストール計画、ダウンロードのためのエンドポイントをカバーする読み取り専用 HTTP API
- 「stdio」、ストリーミング可能な HTTP、および SSE トランスポートを備えた MCP サーバー
- ホワイトリストに登録された書き込みと「config-mcp」フローを備えたローカル サイドカー
- 7 つのインストール可能なクライアント、16 つの構成可能なクライアント、33 の MCP 構成ターゲット、および 19 の構成プロファイル
- 「フルスタック」、「セキュリティ」、「devops」、および「ai-engineer」内の「auth-flows」、「threat-modeling」、「release-engineering」、および「context-engineering」を介したより深いバンドルの特殊化
- SHA-256 チェックサムとリリース タグの切り離された署名を含むスキルごとのアーカイブ (`zip`、`tar.gz`)
- API ガバナンス ベースライン: ベアラー/API キー認証、管理者ランタイム認証、レート制限、監査ログ、CORS/IP ホワイトリスト、トラスト プロキシ、メンテナンス モード、リクエスト ID
- タスクのライフサイクル、JSON/SQLite 耐久性、再起動再開、SSE ストリーミング、キャンセル、プッシュ通知、オプションのプロセス エグゼキューター、およびオプトイン リース調整を備えた A2A ランタイム### 🔭 Future Expansion Areas

コア ロードマップでは、現在のプラットフォームの範囲が説明されています。残りの項目は将来の拡張領域であり、基本的なギャップではありません。

- この時点からは、非常に選択的な MCP の追加のみが行われ、公式の公開ドキュメントによって安全なライターが可能になった場合にのみ追加されます。
- より深いリファレンス パックとよりセマンティックなスコアリングにより、分類器は優れたスキルと単なる洗練されたスキルを区別し続けることができます。
- プロジェクトで後でゲートウェイまたは IdP の統合が必要になった場合、現在のインプロセス ベースラインを超えたエンタープライズ ホスト型ガバナンス
- 新たにアクティブ化された「デザイン」、「ツール」、「データ AI」、および「機械学習」トラックにわたるより深い専門化
- 正式なオペレーティング モデルを維持しながら、プライベート エンハンサーを中心とした継続的な運用の磨きをかけます。OmniRouter は「cx/gpt-5.4」に固定され、ホストされたクラウドは「モック」または劣化したプリフライトで、LAN 上での信頼性の高い「ライブ」またはセルフホスト実行です。
- 継続的なリリースとワークフローの強化は、プラットフォーム基盤の欠落としてではなく、サービス品質の作業としてのみ行われます。## Future Catalog Expansion Track

最初の 2 つのパブリック カテゴリ拡張ウェーブが上陸しました。

- `design` → `design-systems-ops`、`accessibility-audit`、`design-token-governance`
- `ツール` → `mcp-server-authoring`
- `データai` → `データコントラクト`
- `機械学習` → `モデル提供`

次に推奨されるステップは、カテゴリのアクティブ化だけを目的としたものではなくなりました。これは、これらの新しくアクティブなコードネイティブ トラックを深化し、単一スキルの足がかりではなく、耐久性のある製品表面のように感じられるようにすることです。

推奨される方向:

1. より運用可能なデザインシステムのワークフローで「デザイン」を深化させる
2. オーサリングとプラグイン指向のスキルで「ツール」を深めます
3. 実装ファーストのパイプラインとインストルメンテーションのスキルで「データ AI」を深化させる
4. サービス提供、トレーニング、評価の運用スキルで「機械学習」を深めます

強力なコードネイティブの提案が表示されない限り、意図的に延期されるカテゴリ:

- 「ビジネス」
- `コンテンツメディア`

その拡張履歴は現在、次の場所で追跡されています。

- [../tasks/TASK-07-カタログ-スペシャライゼーション-アンド-カテゴリ-拡張.md](../tasks/TASK-07-カタログ-スペシャライゼーション-アンド-カテゴリ-拡張.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ 現在の「npxomni-skills」ワークフローを機能し続ける
- ✅ スキルに関する機械可読な信頼できる情報源を導入する
- ✅ エージェントによる検出、推奨、インストール計画のサポート
- ✅ リモート カタログの問題をローカル ファイルシステムの書き込みから分離する
- ✅ CLI、API、MCP、A2A 全体で同じメタデータを再利用---

## 🚫 Non-Goals

- ❌ ホストされたサーバーからユーザーマシンにリモートインストール
- ❌ 正規のオーサリング形式として「SKILL.md」を置き換えます
- ❌ 貢献者にマニフェストを手書きで書くことを要求する
- ❌ デフォルトでプロジェクトを高負荷のホスト型キュー プラットフォームに変える---

## 🏗️ Target Architecture

3 つのプロトコル サーフェスを備えた 1 つの**カタログ コア**:

|表面 |最適な用途 |モード |
|:--------|:-----------|:-----|
| 🌐**REST API**|レジストリ アクセス、UI 統合、サードパーティ コンシューマ |読み取り専用 |
| 🔌**MCP**|エージェントの検出、インストール プレビュー、構成の書き込み、クライアント レシピ |読み取り専用 + ローカル書き込み |
| 🤖**A2A**|エージェント間のオーケストレーションとインストール計画のハンドオフ |シンプルファーストのローカル耐久性を備えたタスクのライフサイクル |### ⚙️ Core Principle

>**すべてのプロトコルは、同じ生成されたアーティファクト ファミリを使用します。**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

マニフェストは共有コントラクトのままです。アーカイブは、その契約の上に重ねられた配布成果物であり、契約に代わるものではありません。---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

ホストされた API およびリモート MCP サーバーによって使用されます。

| ✅ 許可 | ❌ 許可されない |
|:-----------|:------|
|検索スキル |呼び出し元のファイルシステムに書き込みます。
|マニフェストを取得する |ローカルクライアント構成を変更する |
|スキルを比較する |任意のマシン状態を推測する |
|バンドルを推奨する | — |
|インストール計画を構築する | — |### 2️⃣ Local Installer Mode

CLI および MCP サイドカーによって使用されます。

| ✅ 許可 |
|:----------|
|ローカル AI クライアントを検出する |
|インストールされているスキルを検査する |
|ファイル操作のプレビュー |
|スキル ディレクトリをインストールまたは削除する |
|プレビュー後にローカル MCP 構成を書き込む |

> 📌 これは、実際の OS 書き込みが行われる唯一のモードのままです。---

## 📐 Protocol Split

### 🌐 REST API

レジストリへのアクセス、検索、比較、バージョン管理されたダウンロード、インストール計画に最適です。

**エンドポイント**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

ツールベースの検出、プロンプトによる推奨事項、インストールのプレビュー、およびクライアント固有の MCP セットアップに最適です。

**読み取り専用ツール**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**ローカル ツール**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

検出ハンドオフ、インストール計画ワークフロー、再開可能なエージェント タスクの実行に最適です。

**現在の操作**: `discover-skills` · `recommend-stack` · `prepare-install-plan`---

## 🛡️ Security Model

|原則 |実装 |
|:----------|:----------|
| 🔒 ホストされたサービスは読み取り専用です | API とリモート MCP は呼び出し元のファイルシステムに書き込みません。
| 📂 書き込みはローカルに留まります | CLI および MCP サイドカーのみ |
| 👁️ 書く前にプレビュー |ローカル突然変異に対するドライランのデフォルト |
| 🔑 誠実さは明示的です |生成されたアーティファクトの SHA-256 チェックサム |
| ✍️ 解放の信頼は明示的です |リリースタグに適用される切り離された署名 |
| ⚠️ リスクが表面化 |リスクとセキュリティのメタデータはすべてのランタイム サーフェスに伝播します。---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- 文書化されたターゲット アーキテクチャ
- 定義されたマニフェストスキーマ
- 生成されたメタデータ、カタログ、マニフェスト、バンドル、およびアーカイブ### Phase 2: Catalog Service

- Express 5 による読み取り専用 HTTP API
- 検索、フィルタリング、マニフェストの検索、バンドルのリスト、比較、ダウンロード
- 環境主導のホスト型ガバナンス ベースライン### Phase 3: MCP Discovery

- 公式の「@modelcontextprotocol/sdk」統合
- `stdio`、ストリーミング可能な HTTP、および SSE トランスポート
- 共有カタログに基づく読み取り専用ツール、リソース、プロンプト### Phase 4: Local Install and Config Surface

- ホワイトリストに登録された書き込みを含むローカル サイドカー
- 7 つのインストール可能なクライアントの検出
- 33 のターゲットと 19 の構成プロファイルにわたる 16 の構成対応クライアントの構成書き込み
- CLI およびビジュアル シェルでのガイド付き `config-mcp` フロー
- Claude、Cursor、VS Code、Gemini、Antigravity、Kiro、Codex、Continue、Windsurf、OpenCode、Cline、GitHub Copilot CLI、Kilo Code、Zed、Goose、Dev Containers の安定したサポート### Phase 5: A2A Orchestration

- `/.well-known/agent.json` のエージェント カード
- `message/send`、`message/stream`、`tasks/get`、`tasks/cancel`、`tasks/resubscribe`、およびプッシュ通知設定メソッド
- 再起動リカバリによる JSON および SQLite の永続化
- オプションの外部プロセス実行プログラム
- SQLite およびオプションの高度な Redis 調整のためのワーカー間でのオプトイン リース実行
- シンプルファーストのデフォルトは外部依存関係なしにメモリ、JSON、または SQLite 上に保持されます。### Current Enhancer Operating Decision

プライベート エンハンサーでサポートされている「ライブ」モデルが明示的になりました。

- ホスト型 PR オートメーションは、プリフライトゲートによる「ライブ」試行を実行します
- パブリック OmniRoute ゲートウェイがブロックされているか不安定な場合、PR は不透明に失敗するのではなく、オペレーター向けの理由で「ブロック」とマークされます。
- 正規の信頼できる「ライブ」パスは LAN またはローカル サービスの実行のままです
- スケジュールされたプライベート GitHub の実行は、オペレーターが明示的に「live」を要求しない限り、デフォルトで「mock」のままになります。---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**決定**: マニフェストを共有コントラクトとして保持し、署名されたスキルごとのアーカイブを配布サーフェスとして保持します。

**理由**:
- CLI、API、MCP、および A2A はすでに正規化されたマニフェスト形状を使用しています
- アーカイブはダウンロードと検証には理想的ですが、唯一の証拠開示契約としては不十分です
- これにより、オーサリングが簡単になり、配布が検証可能になります。### 2. Private or Premium Catalogs

**決定**: 同じマニフェストとカタログ形式を再利用し、認証またはポリシーを外部に階層化します。

**理由**:
- データモデルのフォークを回避します
- 現在の API/MCP ガバナンス アプローチと一致します
- OAuth クライアント認証情報および企業管理の認可に関する MCP エコシステムの方向性との互換性を維持します### 3. Client Writer Strategy

**決定**: 少数の正規エクスポート ファミリに集中し、公式クライアント ドキュメントで必要な場合にのみ特注のライターを維持します。

**現在使用されている正規ファミリ**:
- JSON `mcpServers`
- JSON「サーバー」
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**理由**:
- 実装を保守可能に保ちます
- クロード設定、Continue YAML、Zed `context_servers`、Codex TOML などのクライアント固有のニーズを引き続きサポートします
- 安定した公開設定ドキュメントのないクライアントのために壊れやすいライターを発明することを回避します---

## 🌍 Research Notes Behind Those Decisions

現在の決定は、公式エコシステム ドキュメントと照合してチェックされました。

- MCP エコシステムは、OAuth クライアント認証情報や企業管理の認証などのオプションの拡張機能を文書化するようになりました。これにより、カタログ形式をフォークする代わりにホストされた認証の外部化がサポートされます。
- OpenAI は、共有マニフェストとクライアントライター戦略に沿ったパブリック ドキュメント MCP サーバーと Codex MCP 構成パターンを文書化します。
- VS Code は、ファーストクラスの MCP サポートと、専用の「サーバー」ベースのライターの維持を強化する拡張ガイドを文書化します。
- JetBrains AI Assistant は、安定したクロスプラットフォーム ファイル契約ではなく、製品 UX を通じて MCP セットアップを文書化します。これにより、現時点ではマニュアル/スニペットの領域に留めることがサポートされます。---

## 🔮 Longer-Term Decision Points

本当に未解決の戦略的質問はいくつかだけです。

1. 現在のマトリックスを超えたクライアントが本当に一流のライティングの基準をクリアしているかどうか、それとも残りの製品はマニュアル/スニペットのみのままであるべきかどうか
2. ホステッド ガバナンスを現在のインプロセス ベースラインではなく、外部ゲートウェイまたはエンタープライズ IdP の背後に移行する必要がある場合は、いつですか?
3. スコアラーは、貢献者にとって意見が偏りすぎてしまう前に、リファレンス パックの深さと運用品質をどこまで評価する必要がありますか?