# 🔬 Codebase Deep Analysis (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**現在のオムニ スキル アーキテクチャ、ランタイム サーフェス、ビルド パイプラインの包括的な技術分析。**
> 最終分析日: 2026-03-28---

## 📊 Project Overview

|属性 |値 |
|:----------|:-----|
|**名前**| `オムニスキル` |
|**パッケージ版**| `0.1.3` |
|**スキルのバージョン**|スキルごとであり、パッケージのバージョンから独立しています。公開されているスキルの多くは依然として「0.0.1」ですが、パッケージは「0.1.2」です。 |
|**ライセンス**| MIT (コード) + CC BY 4.0 (コンテンツ) |
|**NPM**| `npx オムニスキル` |
|**公開されたスキル**| 32 |
|**定義されたバンドル**| 7、すべて公開されたスキルによって完全に裏付けられています |
|**アクティブなカタログ カテゴリ**| 18 の正規分類カテゴリから 15 のアクティブなバケット |
|**プライマリ ランタイム/ビルド LOC は以下にサンプリングされています**| 13,600+ |
|**運用上の依存関係**| 7 (`@modelcontextprotocol/sdk`、`cors`、`express`、`ioredis`、`ink`、`react`、`zod`) |

`metadata.json` からの現在のリポジトリ レベルの分類スナップショット:

- 平均品質スコア: `96.3`
- ベストプラクティスの平均スコア: 「98.7」
- 平均セキュリティスコア: `95.0`
- 公開されている 32 のスキルすべてが「L3」として検証されます

現在のリリースのベースライン:

- パブリックリポジトリリリース: `v0.1.2`
- プライベート エンハンサー リリース: `v0.0.1`
- パブリック リリースの自動化とプライベート リリースの自動化は両方ともアクティブでグリーンです---

## 🏗️ Architecture Overview

リポジトリは、1 つの共有カタログ コアと複数のランタイム サーフェスを備えた**ワークスペース モノリポ**パターンに従います。```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

デザインは意図的に**アーティファクト主導**になっています。

1. スキルは「SKILL.md」とローカル サポート パックとして作成されます。
2. ビルドはそれらを検証、分類、アーカイブ、および正規化します。
3. 生成されたアーティファクトは、CLI、API、MCP、および A2A のコントラクトになります---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4,500 以上の LOC を組み合わせた**— 専門家とガイド付きの両方の使用のためのメインのパブリック インターフェイス。

|コマンド |機能 |
|:--------|:--------|
| 🔎 `検索[クエリ]` |スコアを意識したフィルターを使用した全文カタログ検索 |
| 📦「インストール」 |既知のクライアントまたはカスタム パスへのガイド付きまたはフラグベースのインストール |
| 🧾 `config-mcp` |クライアント対応の MCP 構成をプレビューまたは書き込みます。
| 🔌 `mcp <トランスポート>` | `stdio`、`stream`、または `sse` で MCP サーバーを起動します。
| 🌐 `API` |カタログ API を開始します |
| 🤖 `a2a` | A2A ランタイムを開始します |
| 🧪「煙」 |リリースのプリフライト検証 |
| 🩺「ドクター」 |ローカル診断 |
| 🖥️「うい」 |インストール、検出、構成、サービス ハブを備えたインク ビジュアル シェル |
| 🏷️ `再分類` |分類ドリフトの検査と書き換え |

CLI はもはや単なるインストーラーではありません。これは、プラットフォーム全体の公開操作ツールです。## 🧭 Future Expansion Direction

パブリック ランタイムは基礎的な作業でブロックされなくなり、第 2 カテゴリーの波はすでに上陸しています。次に役立つカタログ作業は、カテゴリー数を追い求めることではなく、深化することです。

新しくアクティブ化されたコードネイティブ トラックがカタログに追加されました:

- 「design-systems-ops」、「accessibility-audit」、および「design-token-governance」を介した「design」
- `mcp-server-authoring` 経由の `tools`
- 「data-contracts」経由の「data-ai」
- 「モデル提供」を介した「機械学習」

推奨される次の方向:

1.「デザイン」「ツール」「データAI」「機械学習」を深化させる
2. 明確にコードネイティブな提案が現れない限り、「ビジネス」と「コンテンツメディア」は延期したままにする
3. カテゴリのアクティブ化圧力を再開する代わりに、現在の品質フロアを維持します。

その拡張ウェーブは [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md) に記録されます。### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— 7 つのインストール可能なアシスタントにスキルをインストールします。

|旗 |ターゲット |デフォルトのパス |
|:-----|:----------|:---------------|
| `--クロード` |クロード・コード | `~/.claude/skills` |
| `--カーソル` |カーソル | `~/.cursor/skills` |
| `--ジェミニ` |ジェミニ CLI | `~/.gemini/skills` |
| `--コーデックス` |コーデックス CLI | `~/.codex/skills` |
| `--キロ` |キロ | `~/.kiro/スキル` |
| `--反重力` |反重力 | `~/.gemini/antigravity/skills` |
| `--opencode` |オープンコード | `<ワークスペース>/.opencode/skills` |

以下をサポートします。

- フルライブラリのインストール
- `--skill` による選択的インストール
- `--bundle` によって厳選されたインストール
- ガイド付き TTY およびビジュアル UI フロー
- カスタムターゲットパス### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— CLI、API、MCP、および A2A の共有ランタイム層。

|エクスポート |説明 |
|:------|:-----------|
| 🔎 `searchSkills()` |重み付けされたテキスト マッチングとフィルターのサポートによる検索 |
| 📋 `listSkills()` |品質、ベストプラクティス、レベル、セキュリティ、リスク、ツール、カテゴリによる多軸フィルタリング |
| 📌 `getSkill()` |マニフェスト解決と強化されたパブリック URL |
| ⚖️ `compareSkills()` |並べて比較 |
| 💡 `推奨スキル()` |目標に基づいた推奨事項 |
| 📦 `buildInstallPlan()` |警告とクライアントを意識したガイダンスを含むインストール計画の生成 |
| 🗂️ `listBundles()` |入手可能な厳選されたバンドル リスト |
| 📁 `listSkillArchives()` |アーカイブと署名の解決 |

これは、生成後の実行時の真実の真の唯一のソースです。### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— 公式 SDK を使用した完全な MCP 実装。

**輸送**

- `標準オーディオ`
- ストリーミング可能なHTTP
- SSE

**常時稼働の読み取り専用ツール**

- `検索スキル`
- `スキルの取得`
- `スキルの比較`
- `推奨スキル`
- `プレビュー_インストール`

**ローカルモードツール**

- `detect_clients`
- `インストールされたスキルのリスト`
- `install_skills`
- `スキルの削除`
- `configure_client_mcp`

MCP サーフェスは、以下の間で意図的に分割されています。

- リモート/読み取り専用カタログの使用
- ローカル/書き込み可能なサイドカーの使用### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1,943 LOC**— クライアント検出、スキル管理、および MCP 設定書き込み用のファイルシステム対応 MCP レイヤー。

現在の実際的なサポート:

-**7 台のインストール可能なクライアント**
-**16 個の構成可能なクライアント**
-**33 の構成ターゲット**
-**19 構成プロファイル**

インストール可能なクライアント:

- クロード・コード
- カーソル
- ジェミニ CLI
- コーデックス CLI
- キロ
- 反重力
- オープンコード

構成可能なクライアントとターゲットには次のものがあります。

- クロード設定、クロードデスクトップ、およびクロードプロジェクト構成
- カーソルユーザーとワークスペース構成
- VS Code ワークスペース、ユーザー、インサイダー、および開発コンテナー構成
- Gemini ユーザーとワークスペースの設定
- 反重力ユーザー設定
- Kiro ユーザー、ワークスペース、レガシー パス
- Codex CLI TOML 構成
- OpenCode ユーザーとワークスペースの構成
- クライン設定
- GitHub Copilot CLI ユーザーとリポジトリ設定
- Kilo ユーザー、プロジェクト、およびワークスペース構成
- ワークスペース YAML を続行します
- ウィンドサーフィンのユーザー設定
- Zed ワークスペース構成
- グースのユーザー設定

サイドカーは境界について意図的に正直です。

- 許可リスト内のみに書き込みます
- デフォルトでプレビューが表示されます
- 公式ドキュメントが安定した形式を公開している場合にのみ、一流のライターを維持します
- すべての MCP 対応製品がスキルのインストール対象であるかのように装うわけではありません### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC の組み合わせ**— 読み取り専用レジストリ API とガバナンス ミドルウェア。

重要なエンドポイント:

- `/healthz`
- `/openapi.json`
- `/admin/ランタイム`
- `/v1/スキル`
- `/v1/skills/:id`
- `/v1/search`
- `/v1/compare`
- `/v1/bundles`
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

ガバナンスのベースラインはすでに実装されています:

- ベアラートークン認証
- APIキー認証
- 管理者トークン認証
- プロセス中のレート制限
- リクエストID
- 監査ログ
- CORS 許可リスト
- IP許可リスト
- トラストプロキシの処理
- メンテナンスモード### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**メイン サーバー、ランタイム、コーディネーター ファイルを合わせた 1,857 個の LOC**— エージェント間のワークフローの JSON-RPC 2.0 タスク ライフサイクル。

サポートされているメソッド:

- `メッセージ/送信`
- `メッセージ/ストリーム`
- `タスク/取得`
- `タスク/キャンセル`
- `タスク/再購読`
- `tasks/pushNotificationConfig/*`

現在の業務:

- `スキルの発見`
- `推奨スタック`
- `インストール計画の準備`

耐久性と調整モデル:

- メモリ、JSON、または SQLite のローカル永続性
- 再開再開
- オプションの外部プロセス実行プログラム
- 共有 SQLite ワーカーのオプトイン リース キュー調整
- 高度なホスト パスとしてのオプションの Redis ベースの調整

ここでの重要なアーキテクチャ上の選択は、**シンプルファーストのローカル操作**です。 Redis は高度なオプションとして存在しますが、デフォルトの製品パスはローカルのままで依存関係が軽いです。---

## ⚙️ Build Pipeline

|スクリプト |言語 |目的 |
|:------|:----------|:----------|
| 📊 `skill_metadata.py` |パイソン |検証、分類、スコアリング、および静的セキュリティ スキャン |
| ✅ `validate_skills.py` |パイソン |スキルごとおよびルートのメタデータ生成の概要 |
| 📑 `generate_index.py` |パイソン |スキルのインデックス、マニフェスト、アーカイブ、署名、チェックサム |
| 🏗️ `build_catalog.js` | Node.js |最終的な `dist/catalog.json` と `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` |パイソン |正規カテゴリの監査と書き換え |
| 🔍 `verify_archives.py` |パイソン |アーカイブと署名の検証 |

運用上は 2 つの詳細が重要です。

1. `dist/` はランタイム コントラクトの一部であり、意図的にコミットされています
2. ビルドは CI 検証とリリース署名をサポートするのに十分な決定性を持っています---

## 📦 Published Catalog

現在の公開カタログには 32 のスキルが含まれています。

-**発見と計画**: 「スキルの発見」、「ブレインストーミング」、「アーキテクチャ」、「デバッグ」
-**デザイン システムとアクセシビリティ**: `design-systems-ops`、`accessibility-audit`
-**製品およびフルスタックの配信**: `frontend-design`、`api-design`、`database-design`、`omni-figma`、`auth-flows`
-**セキュリティ**: `セキュリティ監査`、`脆弱性スキャナ`、`インシデント対応`、`脅威モデリング`
-**OSS メンテナーのワークフロー**: `documentation`、`changelog`、`create-pr`
-**DevOps**: `docker-expert`、`kubernetes`、`terraform`、`observability-review`、`release-engineering`
-**AI エンジニアリング**: `rag-engineer`、`prompt-engineer`、`llm-patterns`、`eval-design`、`context-engineering`

7 つのバンドルはすべて完全にサポートされています。

- `必需品` → `4/4`
- `フルスタック` → `5/5`
- `デザイン` → `4/4`
- `セキュリティ` → `4/4`
- `devops` → `5/5`
- `ai-エンジニア` → `5/5`
- `oss-maintainer` → `4/4`

生成されたカタログからの現在のスコアの分布:

- 品質スコア: `94、95、96、97、100`
- ベストプラクティスのスコア: `98、99、100`
- セキュリティスコア: 現在公開されているすべてのスキルは `95`

代表的なハイエンド:

- `omni-figma` → `quality 100`、`best_practices 100`
- `アクセシビリティ監査` → `品質 99`、`ベストプラクティス 100`
- `auth-flows` → `quality 97`、`best_practices 99`
- `設計システム運用` → `品質 97`、`ベストプラクティス 99`
- `リリースエンジニアリング` → `品質 97`、`ベストプラクティス 99`
- 「脅威モデリング」 → 「品質 97」、「ベストプラクティス 99」
- `コンテキストエンジニアリング` → `品質 97`、`ベストプラクティス 99`

現在のトップバンド内の代表的な下限:

- `アーキテクチャ` → `品質 94`、`ベストプラクティス 98`
- `changelog` → `quality 94`、`best_practices 98`
- `create-pr` → `quality 95`、`best_practices 98`

これは意図的なものです。採点者は、カタログ全体を上位で平坦にするのではなく、「優秀」と「例外的」を区別するようになりました。---

## 🌟 Strengths

1.**アーティファクトファーストの設計**
   すべてのランタイム サーフェスは、生成された同じカタログとマニフェストを使用します。
2.**幅広いプロトコルをカバー**
   CLI、API、MCP、および A2A は、データ モデルを断片化することなく共存します。
3.**強力な現地製品の人間工学**
   ガイド付きインストール、ビジュアル シェル、「config-mcp」、デフォルトのドライランにより、パワー ユーザー以外でもプロジェクトを使用できるようになります。
4.**誠実なセキュリティ体制**
   ホワイトリストに登録されたローカル書き込み、静的スキャン、署名、チェックサム、リリース検証はすべて明示的です。
5.**健全な MCP リーチ**
   このプロジェクトは現在、文書化されていないターゲットが安定しているかのように装うことなく、現在の MCP 対応クライアントの幅広いセットをサポートしています。---

## 🔮 Opportunities

1.**より深いバンドルの適用範囲**
   次のステップは、幅広い範囲をカバーするだけでなく、既存のバンドル内の専門化です。
2.**より豊富なスコアラー セマンティクス**
   参照パックの深さとワークフローの品質をより意味的に評価する余地はまだあります。
3.**正当な場合にのみクライアント ライターを追加**
   拡張は規律を保ち、安定した公式ドキュメントに結び付ける必要があります。
4.**バリデーターの分解**
   `skill_metadata.py` はまだ大きなモジュールなので、時間の経過とともに内部分解の恩恵を受けるでしょう。
5.**ホスト型ガバナンス エスカレーション**
   現在のインプロセス ベースラインはセルフホスティングには十分ですが、エンタープライズ展開では最終的には外部ゲートウェイと ID の統合が必要になります。