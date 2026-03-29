# 📐 ADR-0001: Agent-Native Workspace Foundation (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**モノリポジトリのワークスペース構造を形成した重要なアーキテクチャ上の決定。**---

## 📊 Status

✅**承認済み**— 現在のワークスペースの方向とアクティブなリポジトリの形状。---

## 🔍 Context

Omni Skills は**インストーラーファースト**リポジトリとして始まりました。これは「SKILL.md」コンテンツを配布するには十分でしたが、プロトコル ネイティブのサーフェスを通じてエージェントにカタログを公開するには十分ではありませんでした。

私たちは以下をサポートできる基盤を必要としていました。

|要件 |プロトコル |
|:-----------|:----------|
| 🌐 読み取り専用 HTTP カタログ API |休憩 |
| 🔌 読み取り専用 MCP サーバー |モデルコンテキストプロトコル |
| 🤖 エージェント側の A2A サーフェス |エージェント間 |
| 📂 ローカルインストールサイドカー |ファイルシステムツール |

**重要な制約**: 新しいサービスごとにリポジトリ ファイルを個別に再解析することは避けてください。---

## ✅ Decision

共有カタログ コアとプロトコル固有のパッケージを備えた**ワークスペース指向のモノリポ**を採用します。

|パッケージ |目的 |
|:--------|:--------|
| 📦 `オムニスキル` (ルート) | CLI インストーラーとリポジトリ スクリプト |
| 🧠 `@omni-skills/カタログコア` |共有ロード、検索、比較、バンドル、インストール プラン |
| 🌐 `@omni-skills/server-api` |読み取り専用 REST API |
| 🔌 `@omni-skills/server-mcp` | stdio/stream/sse + ローカル サイドカー モードを備えた MCP |
| 🤖 `@omni-skills/server-a2a` |エージェント カード、ポーリング、SSE、およびプッシュ構成を備えた A2A タスク ランタイム |### 📁 Shared Data Sources

カタログ コアは、生成されたアーティファクトを以下から読み取ります。
- `dist/catalog.json`
- `dist/manifests/<スキル>.json`
- `skills_index.json`---

## ✅ Positive Consequences

|結果 |影響 |
|:------|:------|
| 🔗**共有データ契約**| API、MCP、および A2A は同じアーティファクトを消費します。
| 🖥️**統合 CLI**| 1 つのバイナリは、インストール、UI シェル、API、MCP、A2A、診断、およびスモークを公開します。
| 🧩**プロトコルの分離**|新しいサーフェスは、インストーラの内部に結合せずに反復されます。
| 🔌**ローカルサイドカー**|クライアント対応のレシピを使用して、ホワイトリストの背後で書き込み可能な MCP モードを動作させる |
| 📦**単一パッケージのランタイム**|公開された npm パッケージには、プロトコル サーフェス、検証ツール、生成されたアーティファクトが一緒に含まれています。---

## ⚠️ Negative Consequences

|トレードオフ |緩和 |
|:-----------|:----------|
| 🔄**メタデータの重複**| Python ビルド + JavaScript ランタイム → 最終的に統合 |
| 🏗️**A2A の複雑さ**|永続的なライフサイクルが存在しますが、調整アダプターにより運用の深さが追加されます。
| 📦**カタログの調整**|選択的インストールでは、同期を保つためにコマンド、マニフェスト、ドキュメントが必要です。
| 📋**バンドルのメタデータのギャップ**|バンドルは公開されたスキルを上回る可能性があり、メンバーが欠落していることを明示的に警告する必要があります。---

## ➡️ Follow-Up Items

| # |アクション |ステータス |
|:--|:------|:------|
| 1️⃣ |リモート MCP 認証とレート制限 | ✅ 完了 |
| 2️⃣ |クライアント固有の MCP 設定の書き込みを改善 | ✅ Claude、Cursor、Codex、Gemini、Kiro、VS Code、Dev Containers に本日プレゼント |
| 3️⃣ |署名付きリリース アーティファクトまたはスキルごとのアーカイブ | ✅ リリース タグに対する CI の適用を本日発表 |
| 4️⃣ | A2A タスク ランタイム → 耐久性のあるオーケストレーション | ✅ JSON/SQLite 永続性、外部エグゼキュータ、オプトイン リース調整、およびオプションの高度な Redis 調整を今すぐ提供 |
| 5️⃣ |公開カタログを拡張してバンドルの範囲を拡大 | ✅ 現在厳選された 7 つのスターター バンドルを本日プレゼント |