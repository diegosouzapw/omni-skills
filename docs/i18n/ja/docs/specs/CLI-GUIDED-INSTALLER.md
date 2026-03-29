# 🧩 CLI Guided Installer Specification (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Omni Skills CLI のガイド付きインストール エクスペリエンスに関する動作契約。**---

## 1. Scope

この仕様は、既存のインストーラー バックエンドの上に位置するガイド付きインストール動作を定義します。

以下のものを置き換えるものではありません。

- `tools/bin/install.js`
- 現在のエキスパートフラグフロー
- 選択的インストールマニフェスト

以下を定義します。

- ガイド付きモードに入る方法
- 目的地の選択方法
- インストール範囲の選択方法
- どのようなプレビュー情報を表示する必要があるか
- 確認と実行の仕組み---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI は、次の場合にガイド付きインストール モードに入る必要があります。

- ユーザーは TTY で引数なしで「omni-skills」を実行します。
- ユーザーは、TTY でセレクターを使用せずに「omni-skills install」を実行します。### 2.2 Forced Guided Entry

CLI は、次のような専用オプションを通じて明示的ガイド モードもサポートする必要があります。

- `omni-skills install --guided`

このモードは、標準入力が使用できる限り、入力がパイプされて TTY に接続されていない場合でも機能します。### 2.3 Non-Interactive Safety Rule

TTY を使用せず、ガイド付きモードを明示的に要求せずに呼び出された場合:

- 現在のデフォルトの動作を保持します
- プロンプトの待機をブロックしないでください---

## 3. Destination Model

ガイド付きインストールは、次の 2 つの宛先クラスをサポートする必要があります。### 3.1 Known Client Target

既知の各ターゲットは次のように解決されます。

- 人間が読めるラベル
- 内部ツールID
- インストールフラグ
- 解決されたパス

必要な既知のターゲット:

- クロード・コード
- カーソル
- ジェミニ CLI
- コーデックス CLI
- キロ
- 反重力
- オープンコード### 3.2 Custom Path Target

カスタム パス モードでは次の条件を満たす必要があります。

- パスの入力を求めるプロンプト
- `~`を解決します
- 絶対パスに正規化する
- 解決されたパスをプレビューに表示します---

## 4. Install Scope Model

ガイド付きインストールは以下をサポートする必要があります。### 4.1 Full Library

`--skill` または `--bundle` を使用しない現在のインストールと同等です。### 4.2 Single Skill

ユーザーが公開されたスキルを 1 つ選択できるようにします。### 4.3 Single Bundle

ユーザーが厳選されたバンドルを 1 つ選択し、公開されたメンバーを解決できるようにします。### 4.4 Search Then Install

ユーザーは次のことを行うことができます。

- 検索クエリを入力します
- 結果を検査する
- スキルまたはバンドルを選択します
- インストールのプレビューに進みます---

## 5. Preview Contract

実行前に、ガイド付きインストールには次の情報が表示される必要があります。

- 宛先ラベル
- 宛先パス
- スコープのインストール
- 選択したスキルまたはバンドル（該当する場合）
- 同等の CLI コマンド

オプションですが推奨されます:

- 選択されたスキルのメタデータの概要
- バンドルの入手可能性の概要---

## 6. Execution Contract

確認後:

- ガイド付きインストールは既存のインストーラー バックエンドに委任します
- ファイル書き込み自体は再実装されません

コマンドのプレビューと実際の委任されたインストーラーの引数は正確に一致する必要があります。---

## 7. Result Contract

実行が成功すると、ガイド付きインストールの結果が表示されます。

- 成功インジケーター
- 最終的な宛先パス
- 実行されたコマンド
- 次に推奨されるアクション

次のアクションの例:

- 選択したクライアントでスキルを使用します
- `doctor`を実行します
- `mcp stream --local` を実行します---

## 8. Compatibility Contract

以下は有効かつ変更されません。

- `omni-skills --cursor --skill オムニフィグマ`
- `omni-skills --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-skills find figma --tool Cursor --install --yes`

ガイド付きモードでは動作が追加されます。既存の動作は削除されません。