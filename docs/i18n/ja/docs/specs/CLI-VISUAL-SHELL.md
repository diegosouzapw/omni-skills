# 🖥️ CLI Visual Shell Specification (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**「omni-skills ui」によって公開されるインクベースの端末 UI の動作コントラクト。**---

## 1. Scope

ビジュアル シェルは、既存の CLI およびインストーラー エンジンの上にあるガイド付きの製品サーフェスです。

以下のものを置き換えるものではありません。

- エキスパートのフラグベースの CLI の使用法
- `tools/bin/install.js`
- ガイド付きテキストのインストール フロー
- API、MCP、または A2A ランタイム動作

以下を定義します。

- `omni-skills ui`の動作
- `omni-skills ui --text` のフォールバック コントラクト
- ローカル状態とプリセットの永続性
- ガイド付きサービス開始プレビュー
- 最近のインストールとサービス実行の再現性---

## 2. Entry Rules

### 2.1 Visual Mode

「omni-skills ui」は、Ink ベースのビジュアル シェルを起動します。

ビジュアル シェルは、次の場合の主要な非エキスパート端末エクスペリエンスです。

- インストールフロー
- カタログファーストの検出とインストール
- MCPの起動
- APIの起動
- A2Aの起動
- 医師と煙の引き継ぎ### 2.2 Text Fallback

「omni-skills ui --text」は、readline ベースのフォールバック インターフェイスを起動します。

これは、次の場合に引き続き役立ちます。

- 端末はよりリッチなシェルを正しくレンダリングできません
- raw モードの動作は制限されています
- 最小限のテキスト フォールバックが推奨されます### 2.3 Handoff Rule

ビジュアル シェルは、サービス ランタイムやインストールの書き込みを直接再実装しません。

プレビューと確認の後、正常に終了し、同等の引数と環境変数を使用して既存の CLI エントリポイントに実行を渡します。---

## 3. Home Screen Contract

ホーム画面では以下を公開する必要があります。

- スキルをインストールする
- 見つけてインストールする
- 存在する場合は最近のインストールを繰り返します
- 保存されたインストール プリセットが存在する場合は実行します
- サービスを開始する
- 最近のサービスが存在する場合は繰り返します
- 保存されたサービスプリセットが存在する場合に実行します
- 医師
- 煙
- 終了

ホーム画面も表示されるはずです。

- 現在公開されているバンドルの利用可能性
- 最近、プリセット、お気に入りのローカル状態のカウント---

## 4. Install Flow Contract

ビジュアル シェルのインストール フローは以下をサポートする必要があります。

- 既知のクライアントターゲットの選択
- カスタムパスの選択
- フルライブラリのインストール
- ワンスキルインストール
- 1 バンドルのインストール
- 検索してインストール
- 書き込み前のプレビュー
- プリセットの保存
- お気に入りのスキルまたはバンドルの切り替え

プレビューには以下が表示される必要があります:

- 解決されたターゲットラベル
- 解決されたパス
- スコープのインストール
- 該当する場合、選択したスキルまたはバンドル
- 同等の CLI コマンド---

## 5. Service Flow Contract

ビジュアル シェルは、以下の起動をガイドする必要があります。### 5.1 MCP

- トランスポート: `stdio`、`stream`、`sse`
- モード: `読み取り専用` または `ローカル`
- ネットワークトランスポートのホスト/ポート構成
- 明示的なコマンドのプレビュー### 5.2 API

- ホスト
- ポート
- 基本または強化されたプロファイル
- 強化されたベアラーまたは API キー認証
- 強化されたレート制限パラメータ
- 監査ログの有効化
- 明示的なコマンドのプレビュー### 5.3 A2A

- ホスト
- ポート
- ストアタイプ: `memory`、`json`、`sqlite`
- 耐久性モードのストアパス
- エグゼキュータ: `インライン`、`プロセス`
- キュー対応 SQLite モード
- 共有リース モードのポーリング間隔とリース期間
- 明示的なコマンドのプレビュー---

## 6. Local State Contract

ビジュアル シェルは、次の場所でローカルのみの状態を保持します。```text
~/.omni-skills/state/ui-state.json
```

現在の状態には次のものが含まれます。

- 最近のインストール
- 最近のサービス開始
- 名前付きインストール プリセット
- 名前付きサービスプリセット
- 好きなスキル
- お気に入りのバンドル

シェルは以下をサポートする必要があります。

- 最近のインストールを再生する
- 最近のサービス開始を再生する
- 名前付きインストール プリセットの再利用
- 名前付きサービスプリセットの再利用---

## 7. Compatibility Contract

ビジュアルシェルは追加的なものです。

これらのフローは有効かつ安定した状態を維持する必要があります。

- `npxomni-skills --cursor --skillomni-figma`
- `npxomni-skills --bundle devops`
- `npxomni-skills install --guided`
- `npxomni-skills find figma --toolcursor --install --yes`
- `npxomni-skills mcp stream --local`
- 「npx オムニスキル API --port 3333」
- `npx オムニスキル a2a --ポート 3335`

ビジュアル シェルは、明示的なエキスパート コマンド パスに強制的に組み込まれてはなりません。---

## 8. Safety Contract

ビジュアルシェルは状態と書き込みを明示的にする必要があります。

次のことを行う必要があります。

- 書き込みハンドオフの前にインストールをプレビューします
- 実行前にサービス起動コマンドをプレビューする
- 実用的であれば、機密情報をクリアテキストのコマンドプレビューに含めないようにする
- 状態をローカルにのみ保持します
- ビジュアル シェルの外部での非対話型 CLI 動作を保持します。