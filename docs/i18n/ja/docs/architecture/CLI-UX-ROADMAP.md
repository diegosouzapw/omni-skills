# 🧭 CLI UX Roadmap (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**オムニ スキルをフラグファースト インストーラーから、専門家と非専門家の両方のユーザー向けのガイド付きターミナル エクスペリエンスに進化させるための製品ロードマップ。**
> 範囲: npm パッケージ、CLI インストール エクスペリエンス、ターミナル UI、サービス起動フロー、ビジュアル オンボーディング。---

## 1. Problem Statement

現在のランタイム基盤は強力ですが、エントリ エクスペリエンスは、すでに以下を理解しているユーザー向けに最適化されています。

- どのクライアントをターゲットにしたいのか
- どのインストール セレクターを使用するか
- 目標を「--skill」、「--bundle」、または「find」に変換する方法
- CLI のみのインストールが必要な場合と、MCP、API、または A2A サービスが必要な場合

今日:

- 「npx オムニスキル」のデフォルトは反重力です
- これは技術的に有効であり、下位互換性があります
- ただし、初めてのユーザーや技術の低いオペレーターには理想的ではありません

CLI にはすでに基本的な対話モードがありますが、ガイド付きの製品サーフェイスというよりは開発者ユーティリティにまだ近いです。

このロードマップは、現在のフラグベースのインターフェイスを壊すことなく、より強力なパブリック UX への道を定義します。---

## 1.1 Delivery Status

ロードマップの大部分は、現在のリポジトリの状態で実装されています。

完了:

- フェーズ 1: ガイド付きエントリポイントの選択
- フェーズ 2: ガイド付きインストール ウィザード
- フェーズ 3: ビジュアル ターミナル シェル
- フェーズ 4: ビジュアル サービス ハブ
- フェーズ 5: 保存されたプロファイルと再現性
- フェーズ 6: 強化、テスト、および文書化---

## 2. Goals

- 現在のエキスパート CLI ワークフローを保持します。
- 引数なしのエントリポイントを安全かつ初めてのユーザーにとって理解しやすいものにする
- インタラクティブなコンテキストでのサイレントデフォルトをガイド付き選択に置き換えます
- 既知の AI クライアントと任意のカスタム インストール パスをサポート
- インストール、検出、サービス起動を一貫したユーザー ジャーニーに変える
- 単なるスクリプトではなく、製品のような視覚的なターミナル UI を提供します
- インストール エンジン、カタログ、サービス ランタイムを UI で再利用できるようにする---

## 3. Non-Goals

- 現在のフラグベースの CLI を置き換える
- サポートされているデフォルトのターゲットから反重力を削除
- プライマリ配信モードとして Web UI を配信する
- この UX 作業の一環として、API、MCP、または A2A プロトコル自体をリファクタリングする
- 「SKILL.md」オーサリングをデータベースベースの管理パネルに置き換える---

## 4. Design Principles

### 4.1 Backward Compatibility First

これらのコマンドは、現在とまったく同じように機能し続ける必要があります。

- `npxomni-skills --cursor --skillomni-figma`
- `npxomni-skills --bundle devops`
- `npxomni-skills find figma --toolcursor --install --yes`
- `npxomni-skills mcp stream --local`
- 「npx オムニスキル API --port 3333」
- `npx オムニスキル a2a --ポート 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- 引数なしの対話型ターミナル セッション: オープンなガイド付きエクスペリエンス
- 引数なしの非対話型呼び出し: 現在のインストールのデフォルト動作を保持します。
- 明示的なコマンドとフラグは常に UI 推論よりも優先されます### 4.3 Reuse One Engine Across Modes

以下は同じ内部ロジックを共有する必要があります。

- フラグファースト CLI
- ガイド付きテキストモード CLI
- ビジュアルターミナルUI

つまり、UX レイヤーはビジネス ロジックを所有してはなりません。再利用可能なアクションを調整する必要があります。### 4.4 Preview Before Write

書き込みを引き起こすすべてのガイド付きフローが表示されます。

- 解決された目標
- 解決されたパス
- 選択したスキルまたはバンドル
- 同等の CLI コマンド
- 確認プロンプト### 4.5 Visual Does Not Mean Implicit

よりリッチな UI であっても、システムは状態とアクションを明示的にする必要があります。

- インストールが行われる場所
- 何が書かれるのか
- サービスが使用するトランスポートまたはポート
- フローが読み取り専用かローカル書き込み可能か---

## 5. User Personas

### 5.1 Expert CLI User

ニーズ:

- 高速コマンド
- 強制的なプロンプトはありません
- 安定したフラグ
- スクリプト化可能性### 5.2 Guided Product User

ニーズ:

- 明確な選択肢
- 反重力が望まれるという仮定はありません
- カスタムパスインストールのサポート
- わかりやすいインストールプレビュー
- インストールアクションとサーバーランタイムアクションの視覚的な区別### 5.3 Operator / Platform User

ニーズ:

- MCP、API、A2Aを視覚的に起動する機能
- まともなデフォルト
- ポート、トランスポート、永続性、エグゼキューター モード、認証、およびローカル モードのオプションの調整---

## 6. Target UX Model

製品は 3 つのレイヤーを公開する必要があります。### 6.1 Expert Mode

直接のコマンドとフラグ。

例:

- `npxomni-skills --cursor --skillomni-figma`
- `npxomni-skills mcp stream --local`
- `npx オムニスキル a2a --ポート 3335`### 6.2 Guided Install Mode

次の場合にトリガーされます:

- ユーザーは引数なしで TTY で「npxomni-skills」を実行します
- ユーザーは具体的なセレクターを使用せずに「npxomni-skills install」を実行します。
- ユーザーがガイド付きモードを明示的に選択する

ガイド付きインストール フローは次のとおりです。

1. ターゲットクライアントまたはカスタムパス
2.インストールタイプ
3. スキルまたはバンドルの選択
4. プレビュー
5.確認
6. 実行
7. 次のステップ### 6.3 Visual Operations Hub

きっかけ:

- 「npx オムニスキル ui」

これは、専門家以外のユーザーやオペレーターにとっての「ホーム画面」になります。

主なアクション:

- スキルをインストールする
- スキルを発見する
- MCPを開始します
- APIを開始する
- A2Aを開始します
- 医者を走らせる
- 煙チェックを実行する---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

結果:

- TTY の「npx オムニスキル」は、反重力を暗黙的に想定しなくなりました
- ユーザーはクライアントまたはカスタム パスを選択するよう求められます

要件:

- TTY 以外のデフォルトのインストール動作を保持する
- ターゲットセレクターを追加
- カスタムパスキャプチャをサポート### Phase 2: Guided Install Wizard

結果:

- インストールは完全なガイド付きフローになります

要件:

- インストールモードの選択:
  - 充実したライブラリ
  - スキル 1 つ
  - 1バンドル
  - 検索してインストールします
- プレビューをインストールする
- 同等のコマンドレンダリング
- 確認と実行### Phase 3: Visual Terminal Shell

結果:

- 現在の基本的なテキスト UI はブランド化されたターミナル アプリケーションになります

要件:

- より豊富なレイアウト
- プロジェクトのブランディングとロゴ
- より良いステッパーとカード
- キーボードによるナビゲーション
- Ink を介した React ターミナルの実装### Phase 4: Visual Service Hub

結果:

- MCP、API、A2AはビジュアルUIから起動可能

要件:

- ガイド付き MCP フロー
- ガイド付き API フロー
- ガイド付き A2A フロー
- 表示モードと構成プレビュー### Phase 5: Saved Profiles and Repeatability

結果:

- 共通のインストールまたはサービスのプリセットを再利用できます

要件:

- 最近のターゲットを記憶する
- 保存されたサービスプリセット
- 最近のコマンド
- お気に入りのバンドルまたはスキル### Phase 6: Hardening, Tests, and Documentation

結果:

- UX はその場限りの利便性ではなく、維持されるパブリック インターフェイスになります。

要件:

- 煙の範囲
- 回帰テスト
- ドキュメントの更新
- オペレーターのガイダンス
- パッケージの互換性レビュー---

## 8. Proposed Command Model

### Stable Commands

- 「オムニスキル」
- 「オムニスキルインストール」
- 「オムニスキル検索」
- 「オムニスキルUI」
- 「オムニスキルMCP」
- 「オムニスキルAPI」
- `オムニスキル a2a`
- 「万能ドクター」
- 「オムニスキルスモーク」### Recommended Behavior

|呼び出し |行動 |
|:-----------|:-----------|
| TTY の「オムニスキル」、引数なし |ガイド付きインストール エントリ |
|非 TTY の `omni-skills`、引数なし |現在の Antigravity のデフォルト インストール |
| TTY の「omni-skills install」、セレクターなし |ガイド付きインストール ウィザード |
| `omni-skills install --guided` |強制ガイド付きインストール フロー |
| `オムニスキルUI` |ビジュアル オペレーション ハブを開く |
|明示的なフラグ |ガイドされたフローを迂回せずに直接実行 |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

オプション:

- クロード・コード
- カーソル
- ジェミニ CLI
- コーデックス CLI
- キロ
- 反重力
- オープンコード
- カスタムパス

出力:

- 選択した既知のターゲットまたはカスタム ファイルシステム パス### Step 2: Choose Install Type

オプション:

- 充実したライブラリ
- 公開スキル 1 つ
- 1バンドル
- 検索してインストールします

出力:

- スコープのインストール### Step 3: Resolve Selection

インストールの種類に応じて次のようになります。

- 完全なライブラリ: 追加のセレクターなし
- スキル: スキルをリストまたは選択します
- バンドル: バンドルをリストまたは選択します
- 検索: クエリのプロンプトを表示し、一致するスキルとバンドルを表示します### Step 4: Preview

表示:

- 選択されたターゲット
- 解決されたパス
- 選択したスキルまたはバンドル
- 同等の CLI コマンド
- フローが選択インストールか完全インストールか### Step 5: Confirm

ユーザーは次のことを確認します:

- はい → 実行
- いいえ → 中止または戻ります### Step 6: Result

表示:

- 成功/失敗
- 宛先パス
- 次のステップの提案---

## 10. Information Architecture for the Visual Operations Hub

オペレーション ハブは以下を公開する必要があります。### 10.1 Install

- ガイド付きインストール フロー
- スキルまたはバンドルの検索
- カスタムパス### 10.2 Discover

- カタログ検索
- フィルター
- メタデータのプレビュー
- ハンドオフをインストールする### 10.3 MCP

オプション:

- トランスポート: stdio、ストリーム、sse
- ローカルモードのオン/オフ
- ホスト
- ポート### 10.4 API

オプション:

- ホスト
- ポート
- オプションの認証
- オプションのレート制限### 10.5 A2A

オプション:

- ホスト
- ポート
- ストアの種類: メモリ、json、sqlite
- エグゼキュータ: インライン、プロセス
- SQLiteキューが有効な場合のリースオプション### 10.6 Diagnostics

- 医師
- 煙---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

現在の「tools/bin/cli.js」には次のものが混在しています。

- コマンド解析
- プレゼンテーション
- インタラクティブなプロンプト
- アクションオーケストレーション
- サービスブート

新しい構造では、再利用可能なロジックを次の場所に移動する必要があります。

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

「tools/bin/install.js」は書き込み可能なバックエンドのままにする必要があります。

ガイド付き UI は、インストール ロジックを複製するのではなく、既存のインストーラー バックエンドを呼び出す必要があります。### 11.3 Keep Find/Search Reusable

ガイド付きインストール ウィザードは、既に機能している同じカタログ コアと CLI 検索ロジックを再利用する必要があります。

- 「見つける」
- プレビューをインストールする
- バンドルの解決### 11.4 Prepare for Ink Without Forcing It Early

最初の配信はテキスト モード プロンプトのままにすることができます。

ただし、後でテキスト フローを Ink 経由でレンダリングできるように、アーキテクチャでは明確な継ぎ目を維持する必要があります。---

## 12. Risks

### 12.1 Breaking Existing Automation

軽減策:

- TTY でのみガイド付き UI を自動的に開きます
- 非 TTY で現在のデフォルトを保持する
- 明示的なフラグ フローを保持する### 12.2 Letting UI Own Business Logic

軽減策:

- オーケストレーションを再利用可能なアクション モジュールに移動します
- インストーラーとサービスの起動ロジックを UI レイヤーの下に保持します### 12.3 Ink Migration Too Early

軽減策:

- 最初に現在のノード端末スタックでガイド付きフローを出荷します
- フロー セマンティクスが安定したら、Ink に移行します。### 12.4 Incomplete Service UX

軽減策:

- 最初にインストールウィザードを出荷します
- その後、レイヤーガイド付きサービスの起動---

## 13. Acceptance Criteria by Phase

### Phase 1

- TTY の「npxomni-skills」はすぐにはインストールされなくなりました
- ユーザーはターゲットクライアントまたはカスタムパスを選択できます
- 非 TTY 引数なしの呼び出しは以前と同様に機能します### Phase 2

- ガイド付きインストールは、完全なライブラリ、スキル、バンドル、検索してからインストールをサポートします
- 書き込み前に常にプレビューが表示されます
- 同等のコマンドが表示されます### Phase 3

- ブランドの端末 UI が存在します
- UI は、単純な readline メニューよりも視覚的に構造化されています。
- ナビゲーションはキーボードフレンドリーです### Phase 4

- ユーザーはビジュアルハブから MCP、API、A2A を開始できます
- 主要なランタイム オプションはガイド付き形式で構成可能### Phase 5

- 最近の設定または保存された設定は再利用可能です
- 繰り返しフローではプロンプトが少なくなります### Phase 6

- スモーク カバレッジは新しい UX エントリポイントを反映しています
- ガイド付きモードとサービス ウィザードの動作について説明したドキュメント---

## 14. Execution Order

このロードマップは次の順序で実装する必要があります。

1. ガイド付きエントリーポイントの選択
2. ガイド付きインストールウィザード
3. ビジュアルターミナルシェル
4. ビジュアルサービスハブ
5. 保存されたプロファイルと再現性
6. 強化、テスト、ドキュメントの仕上げ

実装作業では、CLI 作業が計画と一致し、ずれないようにするために、各タスクを開始する前に関連するタスク ファイルを読み取る必要があります。