# 🧭 Omni Skills CLI User Guide (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**「omni-skills」によって提供される完全なパブリック CLI サーフェス。**

このガイドは、次の場合に使用してください。

|目標 |コマンドエリア |
|:-----|:---------------|
| 📥 スキルまたはバンドルをインストールする | [フローのインストール](#3️⃣-install-flows) |
| 🔎 カタログを検索 | [カタログディスカバリー](#4️⃣-カタログ-ディスカバリー) |
| 🔌 MCP クライアントを構成する | [MCP クライアント構成](#5️⃣-mcp-client-config) |
| 🖥️ MCP、API、または A2A サービスを開始する | [MCP サーバー](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 ビジュアルターミナルシェルを使用する | [ビジュアルシェル](#9️⃣-visual-shell) |
| 🧪 診断またはプリフライトを実行する | [診断](#🔟-diagnostics-and-preflight) |---

## 1️⃣ Install and Entry Modes

「npx」でインストールします。```bash
npx omni-skills
```

### 🎭 Entry Behavior

|コンテキスト |何が起こるのか |
|:----------|:-----------|
| 🖥️ TTY + 引数なし |**ガイド付きインストール**フローを開きます。
| ⚙️ 非 TTY + 引数なし | `~/.gemini/antigravity/skills` への非対話型インストール |
| 🎨 `npx オムニスキル ui` |ブランド**インク ビジュアル シェル**|
| 📝 `npx オムニスキル ui --text` | Readline**テキスト フォールバック**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

|コマンド |説明 |
|:----------|:----------|
| `うい` | 🎨 ビジュアルターミナルハブ |
| `検索[クエリ]` | 🔎 カタログ発見 |
| `再分類` | 🏷️ 分類管理 |
| `[フラグ] をインストール` | 📥 スキル/バンドルのインストール |
| `config-mcp` | 🔌 MCP クライアントの構成 |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP サーバーモード |
| `API` | 🌐 カタログ API |
| `a2a` | 🤖 A2A ランタイム |
| 「煙」 | 🧪 プリフライトをリリース |
| `公開チェック` | 📦 パッケージ公開チェック |
| `医者` | 🩺 環境診断 |
| 「助けて」 | ❓ コマンドリファレンス |---

## 3️⃣ Install Flows

### クイックスタート

```bash
npx omni-skills
npx omni-skills install --guided
```

> ガイド付きフローでは、**ターゲット クライアント**→**バンドルまたはスキル**→**カスタム パス**→**実行前のプレビュー**を選択できます。### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

|旗 |クライアント |
|:-----|:----------|
| `--反重力` | 🟣 反重力 *(デフォルト)* |
| `--クロード` | 🟢 クロード・コード |
| `--カーソル` | 🔵 カーソル |
| `--コーデックス` | 🔴コーデックスCLI |
| `--ジェミニ` | 🟡 ジェミニ CLI |
| `--キロ` | 🟠キロ |
| `--opencode` | ⚪オープンコード |

> デフォルトのインストールターゲット (非対話型): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

|旗 |目的 |
|:-----|:----------|
| `--カテゴリー` |分類カテゴリーでフィルター |
| `--ツール` |サポートされているツールでフィルター |
| `--リスク` |リスクレベルでフィルターする |
| `--ソート` |結果を並べ替える (例: 「品質」) |
| `--順序` |並べ替え順序 |
| `--min-quality` |最低品質スコア |
| `--min-ベストプラクティス` |最小ベストプラクティススコア |
| `--min-level` |最低成熟度レベル |
| `--min-security` |最小セキュリティ スコア |
| `--検証ステータス` |検証状態によるフィルター |
| `--セキュリティステータス` |セキュリティ状態によるフィルター |---

## 5️⃣ MCP Client Config

`config-mcp` を使用して、クライアント対応の MCP 設定をプレビューまたは書き込みます。### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<詳細>
<summary>🔌 <strong>構成可能なクライアント サーフェス</strong></summary>

|クライアント |ターゲット |
|:------|:------|
|クロード |設定とデスクトップターゲット |
|カーソル |ユーザーとワークスペース |
|コーデックス | TOML 構成 |
|ジェミニ |ユーザーとワークスペース |
|反重力 |ユーザー設定 |
|オープンコード |ユーザーとワークスペース |
|クライン |一流のターゲット |
| GitHub コパイロット CLI |ユーザーとリポジトリ |
|キロコード |ユーザー、プロジェクト、ワークスペース |
|キロ |ユーザーとワークスペース |
|ゼッド |ワークスペース |
| VSコード |ユーザー、ワークスペース、および開発コンテナ |
|続ける |ワークスペース YAML |
|ジュニー |プロジェクトとユーザー |
|ウィンドサーフィン |ユーザー設定 |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**ローカル サイドカー**により、クライアント検出、インストール プレビュー、インストール/削除フロー、および MCP 構成の書き込みが追加されます。---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

|ルート |目的 |
|:------|:----------|
| `GET /healthz` |健康診断 |
| `/openapi.json を取得` | OpenAPI 仕様 |
| `GET /v1/skills` |すべてのスキルをリストする |
| `GET /v1/search` |カタログを検索 |
| `GET /v1/skills/:id/archives` |スキルのアーカイブをリストする |
| `GET /v1/skills/:id/download/archive?format=zip` |スキルアーカイブをダウンロード |
| `GET /v1/skills/:id/download/archive/checksums` |チェックサムをダウンロード |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

|特集 |ステータス |
|:------|:------|
| 🔎 タスク認識型の検出 | ✅ |
| 📋 インストール計画の引き継ぎ | ✅ |
| 🔄 投票 | ✅ |
| 📡 ストリーミング | ✅ |
| ❌ キャンセル | ✅ |
| 🔔 プッシュ通知設定 | ✅ |
| 💾 永続性 |メモリ、JSON、SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### 機能

|特集 |説明 |
|:----------|:----------|
| 🧭 ガイド付きインストール |クライアントまたはカスタム パスを選択します |
| 🔎 検索 + インストール |フラグを覚える必要はありません |
| 🔌 MCP 構成 |フローのプレビューと書き込み |
| 🖥️サービス開始 | MCP、API、および A2A ガイド付きスタートアップ |
| 🕐 最近 |最近のインストールとサービスの再開 |
| ⭐ お気に入り |保存されたスキルとバンドル |
| 💾 プリセット |名前付きインストールおよびサービス プリセット |

>**状態パス:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> 検査: リポジトリの状態、ローカル インストールの状態、ランタイムの可用性、および環境の問題。### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> 検証: ビルド、テスト、パッケージ出力、サービス ブート、スキャナー カバレッジ、およびリリース パッケージ化。---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 ペルソナ |コマンド |目的 |
|:-----------|:--------|:----------|
| 🆕 新規ユーザー | `npx オムニスキル` |ガイド付きの初回インストール |
| 🔧 オペレーター | `npxomni-skills config-mcp --list-targets` |ローカル MCP を構成する |
| 🔧 オペレーター | `npx オムニスキル mcp ストリーム --local` |ローカルサイドカーを開始 |
| 📦 メンテナ | `npx オムニスキルスモーク` |リリースを検証する |
| 🔍 パワーユーザー | `npx オムニスキルはセキュリティを見つけます --sort 品質 --min-quality 95` |まずは最適なスキルを見つけてください |---

## 📖 Related Documents

|ドクター |内容 |
|:----|:--------------|
| 🚀 [はじめに](./GETTING-STARTED.md) | 2 分以内にインストールと検証を完了 |
| 📗 [利用ガイド](./USAGE.md) |すべての CLI コマンド、パターン、モード |
| 📦 [バンドル](./BUNDLES.md) |厳選されたスキルコレクション |
| 🔧 [システム Runbook](../operations/RUNBOOK.md) |操作リファレンス |
| 🔌 [ローカル MCP サイドカー](../specs/LOCAL-MCP-SIDECAR.md) |ファイルシステムツールと設定の書き込み |