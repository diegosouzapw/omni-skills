# 🔧 System Runbook (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**オムニ スキルの構築、検証、提供、保護、トラブルシューティングのための完全な運用ガイド。**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

|コマンド |何をするのか |
|:--------|:-------------|
| `npm 実行検証` | `SKILL.md` を検証し、`metadata.json` を再生成し、分類/成熟度/品質/セキュリティを計算します。
| `npm run 分類法:レポート` |ファイルを書き換えずにカテゴリ ドリフトの提案を表示します |
| `npm run verify:スキャナー` |生成されたスキル メタデータに記録されたスキャナー カバレッジを確認します。
| `npm run release:notes` |メタデータ、バンドル、Git 履歴からカスタム リリース ノートを生成 |
| `npm 実行ビルド` |カタログ/マニフェスト/アーカイブ/チェックサムを再生成し、スキャナーのカバレッジとアーカイブを検証し、`docs/CATALOG.md` を再構築します。
| `npm テスト` | CLI、API、MCP、サイドカー、アーカイブ フローにわたるフルスモーク スイート |---

## 🖥️ Visual Shell

公開された CLI には、インクベースのオペレーター シェルが含まれるようになりました。```bash
npx omni-skills ui
```

現在の機能:

- 既知のクライアントとカスタム パスのガイド付きインストール
- 検索してインストールするフロー
- MCP 起動ウィザード
- API起動ウィザード
- A2A 起動ウィザード
- 最近のインストールとサービスの再開
- 名前付きインストールおよびサービス プリセット

ローカル状態パス:```text
~/.omni-skills/state/ui-state.json
```

後退する：```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

静的スキャナーはすべてのスキルを自動的にチェックします。

|ルールファミリー |例 |
|:-----------|:----------|
| 🎭 即時注射 |漏洩パターン、指示のオーバーライド |
| 💣 破壊的なコマンド | `rm -rf`、`format`、`mkfs` |
| 🔑 不審な経路 | `/etc/shadow`、`~/.ssh`、認証情報ファイル |
| ⚠️ 危険なプリミティブ | `shell=True`、`pickle.load`、`eval`、`extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> `PATH` に `clamscan` が必要です。### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> ハッシュ ルックアップのみ — 不明なファイルはデフォルトで**アップロードされません**。### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

厳格なリリースゲート:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

アーカイブは「npm run build」によって自動的に生成されます。

|出力 |パス |
|:------|:-----|
| 📦ZIP | `dist/archives/<スキル>.zip` |
| 📦タールボール | `dist/archives/<スキル>.tar.gz` |
| 🔒 チェックサム | `dist/archives/<スキル>.checksums.txt` |

`dist/` はこのリポジトリに意図的にコミットされています。生成されたカタログ、マニフェスト、バンドル、およびアーカイブは、CLI インストール フロー、API ダウンロード サーフェス、MCP プレビュー、A2A タスク ハンドオフ、スモーク テスト、およびリリース検証のランタイム入力となります。### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

オプションの公開キーの上書き:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> 公開鍵が指定されていない場合、ビルドは `openssl` を介して公開鍵を `dist/signing/` に派生します。### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

バージョンポリシー:

- パッチは `.10` まで増加します
- `.10` の後、次のリリースではマイナーがロールされ、パッチが `.0` にリセットされます。

例:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

|シナリオ |コマンド |
|:---------|:----------|
| 📥 デフォルトのインストール (反重力) | `npx オムニスキル` |
| 🎯 特定のスキル + クライアント | `npx オムニスキル --cursor --スキルオムニフィグマ` |
| 🔎 検出 → インストール | `npxomni-skills find figma --tool Cursor --install --yes` |
| 📦 バンドルインストール | `npxomni-skills --cursor --bundle essentials` |
| 🩺 インストールを確認する | `npx オムニスキルドクター` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

|フィルター |旗 |例 |
|:------|:-----|:----------|
| 📂 カテゴリー | `--カテゴリー` | ` -- カテゴリ開発` |
| 🖥️ ツール | `--ツール` | `--ツールカーソル` |
| ⚠️ リスク | `--リスク` | `--リスクセーフ` |
| 📊 並べ替え | `--ソート` | ` --sort 品質\|ベストプラクティス\|レベル\|セキュリティ\|名前` |
| 🔄 注文 | `--順序` | `--order asc\|desc` |
| ⭐最低品質 | `--min-quality` | `--min-quality 80` |
| 📋 最低血圧 | `--min-ベストプラクティス` | `--min-ベストプラクティス 60` |
| 🎯 最小レベル | `--min-level` | `--min-レベル 2` |
| 🛡️ 最小セキュリティ | `--min-security` | `--min-security 90` |
| ✅ 検証 | `--検証ステータス` | `--validation-status に合格しました` |
| 🛡️ セキュリティ | `--セキュリティステータス` | `--security-status が合格しました` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

|方法 |エンドポイント |目的 |
|:------|:----------|:----------|
| `GET` | `/healthz` |健康診断 |
| `GET` | `/openapi.json` | OpenAPI 3.1 仕様 |
| `GET` | `/v1/スキル` |フィルタ付きリスト |
| `GET` | `/v1/検索` |全文検索 |
| `GET` | `/v1/skills/:id/archives` |アーカイブ一覧 |
| `GET` | `/v1/skills/:id/download/archive?format=zip` |アーカイブをダウンロード |
| `GET` | `/v1/skills/:id/download/archive/checksums` |チェックサムマニフェスト |### 🔐 Hosted API Hardening

|特集 |コマンド |
|:--------|:--------|
| 🔑ベアラー認証 | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx オムニスキル API` |
| 🗝️ API キー認証 | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx オムニスキル API` |
| 🛂 管理者ランタイム認証 | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx オムニスキル API` |
| 🚦 レート制限 | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx オムニスキル API` |
| 📝 監査ログ | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx オムニスキル API` |
| 🌍 CORS 許可リスト | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx オムニスキル API` |
| 🧱 IP 許可リスト | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx オムニスキル API` |
| 🚧 メンテナンスモード | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx オムニスキル API` |
| 🔁 信頼できるプロキシ | `OMNI_SKILLS_HTTP_TRUST_PROXY=ループバック npx オムニスキル API` |

> 🟢 `/healthz` は仕様により開いたままになります。カタログルートを有効にすると認証が必要になります。 「GET /admin/runtime」は構成時に管理者トークンを必要とし、ライブ ガバナンス スナップショットを返します。---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

サイドカーは、次の MCP 構成をプレビューまたは書き込むことができるようになりました。

- クロードのユーザーとプロジェクトの設定
- クロードデスクトップ構成
- クラインユーザー設定
- GitHub Copilot CLI ユーザーとリポジトリ設定
- カーソルユーザーとワークスペース構成
- コーデックス TOML 構成
- Gemini ユーザーとプロジェクトの設定
- Kilo CLI ユーザーとプロジェクト構成
- Kilo ワークスペース構成
- Kiro ユーザーとプロジェクトの設定
- OpenCode ユーザーとワークスペースの構成
- ワークスペースの YAML 構成を続行します
- ウィンドサーフィンのユーザー設定
- Zed ワークスペース構成
- ワークスペース`.mcp.json`
- VS Code ワークスペースとユーザー構成
- 開発コンテナ構成

「configure_client_mcp」はクライアントごとの「レシピ」も返すため、オペレーターはプレビューとともに同等の CLI または手動セットアップ手順を取得できます。### 🧾 MCP Config Preview and Write Flow

MCP ツールを直接呼び出さずに構成を生成する場合は、統合 CLI を使用します。```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

ビジュアル シェルは、以下を通じて同じワークフローを公開します。

- 「npx オムニスキル ui」
- 「サービス」
- `MCP クライアントの設定`

`--write` が渡されない限り、コマンドはプレビュー モードのままです。### 🔐 Hosted MCP Hardening

API と同じ環境変数:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**保護されたルート**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` は開いたままです。---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

デフォルトのローカル パスはシンプルファーストのままです。

- 「json」または「sqlite」の永続性は、キューポーリングを無効にしても実行できます
- マルチワーカーの要求とリースのフェイルオーバーが必要な場合にのみ、「OMNI_SKILLS_A2A_QUEUE_ENABLED=1」を設定します。
- Redis の調整をベースラインではなく、高度なホスト型オプションとして維持します### 🧱 Multi-Worker Lease Setup

同じ SQLite ストアに対して複数の A2A ノードを実行して、リース ベースのフェールオーバーを取得します。```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

タスクの「作業中」にワーカーが死亡した場合、リースの期限が切れた後に別のワーカーがタスクを再利用し、実行を続行できます。### 🟥 Redis Coordination

共有 SQLite ストアにキュー調整を関連付けたくない、ホスト型またはマルチノード展開の場合は、コーディネーターを Redis に切り替えます。```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

このモードでは:

- 永続性は JSON または SQLite にまだ存在します
- タスクの要求とリースの所有権は Redis に移動します
- 複数の A2A ノードは、SQLite の行レベルの調整に依存せずにキューを共有できます。### 📡 Endpoints

|方法 |パス |目的 |
|:------|:-----|:----------|
| `GET` | `/healthz` |健康診断 |
| `GET` | `/.well-known/agent.json` |エージェントカード (A2A ディスカバリー) |
| `ポスト` | `/a2a` |タスクとストリーミング用の JSON-RPC エンドポイント |### 🧭 Supported JSON-RPC Methods

|方法 |目的 |
|:------|:------|
| `メッセージ/送信` |タスクを開始または続行する |
| `メッセージ/ストリーム` |タスクを開始して SSE アップデートをストリーミングする |
| `タスク/取得` |タスクのスナップショットをポーリングする |
| `タスク/キャンセル` |アクティブなタスクをキャンセルする |
| `タスク/再購読` |既存のタスクの SSE 更新を再開する |
| `tasks/pushNotificationConfig/set` |プッシュ Webhook を登録する |
| `tasks/pushNotificationConfig/get` |プッシュ構成を読み取る |
| `tasks/pushNotificationConfig/list` |タスクのプッシュ構成をリストする |
| `タスク/pushNotificationConfig/削除` |プッシュ構成を削除する |### 📡 Task Lifecycle

現在のランタイムは、次のタスク状態をサポートしています。

- 「送信済み」
- 「働いています」
- `入力必須`
- 「完了」
- 「キャンセルされました」
- 「失敗しました」

タスクは JSON ファイルまたは SQLite ストアに保存され、再起動時に再ロードされます。完了したタスクと中断されたタスクは引き続き使用できます。シャットダウン中にまだ「サブミット」または「作業中」だったタスクは、明示的な再起動メタデータを使用して復元され、デフォルトで自動的に再開されます。### 🧪 Example: Start a Task

```bash
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

リポジトリには 2 つのワークフローが含まれるようになりました。

|ワークフロー |トリガー |目的 |
|:---------|:----------|:----------|
| `検証.yml` | `main` にプッシュ/PR |生成されたアーティファクトがコミットされていることをビルド、テスト、確認する |
| `release.yml` |タグプッシュ `v*` または手動ディスパッチ |リリース グレードのスキャナーを実行し、バージョン タグを確認し、アーティファクトに署名し、tarball をパッケージ化し、npm に公開し、GitHub リリースを作成します。### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

|秘密 |使用者 |目的 |
|:------|:----------|:----------|
| `VT_API_KEY` または `VIRUSTOTAL` | `release.yml` |リリース ビルドでは VirusTotal ハッシュ ルックアップが必要 |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` または `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | CI での分離されたアーカイブ署名に必要な秘密キー |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` または `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` |オプションの公開キーの上書き。それ以外の場合は秘密鍵から派生します。
| `NPM_TOKEN` | `publish-npm` ジョブ |タグをリリースするために「npm public」を認証する |### 🦠 Release Scanner Policy

`release.yml` は以下を設定または準備します。

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ 秘密.VT_API_KEY ||秘密.VIRUSTOTAL }}`
- ランナー一時ストレージからの `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH`

つまり、タグベースのリリースはすべて次のことを行う必要があります。

- ランナーに ClamAV をインストールして更新します
- ClamAV を有効にしてメタデータを再生成します
- VirusTotal を有効にしてメタデータを再生成します
- CI 署名キーマテリアルをランナー一時ストレージにデコードします
- `npm run verify:scanners:strict` を渡します
- `npm run verify:archives:strict` を渡します
- npm公開前にテストとパッケージ検証に合格する
- カタログのメタデータと git 履歴からカスタム リリース ノートを生成
- 公開後にリリースアセットを添付して GitHub リリースを作成します---

## 1️⃣1️⃣ Environment Variables Reference

|変数 |目的 |デフォルト |
|:---------|:----------|:----------|
| `OMNI_SKILLS_ROOT` |カタログのルート パスを上書きする |自動検出 |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` |許可される追加の書き込みパス |既知のクライアントのルート |
| `OMNI_SKILLS_MCP_MODE` |サイドカーの場合は「local」に設定します。リモート |
| `OMNI_SKILLS_MCP_LOCAL_MODE` |ローカル モードの Alt フラグ | `0` |
| `OMNI_SKILLS_API_BASE_URL` | MCP のパブリック API URL | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` |パブリックベース URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` |ベアラー認証トークン | — |
| `OMNI_SKILLS_HTTP_API_KEYS` |カンマ区切りの API キー | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` |管理者ランタイム認証トークン | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` |ウィンドウごとの最大リクエスト | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` |レート制限ウィンドウ (ミリ秒) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` |監査ログを有効にする | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` または `text` 監査出力 | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` |オプションの監査ログ ファイルのパス |標準出力 |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` |カンマ区切りの CORS オリジン許可リスト | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` |カンマ区切りの IP または CIDR 許可リスト | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` |高速信頼プロキシ設定 | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` |メンテナンス応答を有効にする | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` |メンテナンス「再試行後」秒 | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` |シミュレートされた非同期タスクの遅延 | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`、`sqlite`、または `memory` タスク ストア | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` |カスタム A2A タスク ストア ファイル | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` |リースを認識するワーカーに対して共有キューのポーリングを有効にする | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `store`、`sqlite`、`local`、または `redis` コーディネーター | `ストア` |
| `OMNI_SKILLS_A2A_REDIS_URL` |外部調整用の Redis URL | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` |キューメタデータの Redis キープレフィックス | `オムニスキル:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` |リース ワーカーのキュー ポーリング間隔 | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` |別のワーカーがタスクを再利用するまでのリース期間 | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` |リースの所有権と診断のための安定したワーカー識別子 |ホスト名 + PID + ランダムなサフィックス |
| `OMNI_SKILLS_A2A_EXECUTOR` | 「インライン」または「プロセス」タスク実行プログラム | `インライン` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` |外部ワーカー コマンドをオーバーライドする |ノードバイナリ |
| `OMNI_SKILLS_A2A_WORKER_ARGS` |外部ワーカー引数の JSON 配列 | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` |復元された送信済み/作業中のタスクを起動時に再開します。 `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | localhost の外部で非 HTTPS Webhook を許可する | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | ClamAV スキャンを有効にする | `0` |
| `VT_API_KEY` | VirusTotal API キー | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` |署名用の秘密鍵 | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` |公開キーのオーバーライド |自動導出 |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1.「npm run build」でリビルドします。
2.「npm run verify:archives」を再実行します。
3. 署名が有効になっている場合は、公開キーと「openssl」が利用可能であることを確認します。### 🦠 Release Workflow Fails on Scanner Coverage

- リポジトリシークレットに「VT_API_KEY」が存在することを確認します
- ランナー上で「freshclam」が成功したことを確認します
- `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build` を使用してローカルで再ビルドします。
- `npm run verify:scanners:strict`を再実行します### 📦 npm Publish Fails in CI

- リポジトリのシークレットに「NPM_TOKEN」が存在することを確認します
- Git タグが `package.json` のバージョンと正確に一致していることを確認します
- 「release-verify」によってアップロードされた tarball がワークフロー アーティファクトに存在することを確認します。### ✍️ Release Signing Fails in CI

- リポジトリシークレットに「OMNI_SKILLS_SIGN_PRIVATE_KEY_B64」または「OMNI_SKILLS_SIGN_PRIVATE_KEY」が存在することを確認します
- 公開キーの秘密を指定した場合は、それが秘密キーと一致することを確認してください
- 「openssl」が利用可能であり、秘密鍵が PEM 形式であることを確認します。
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build` を使用してローカルで再構築します。
- `npm run verify:archives:strict`を再実行します### 🔒 API/MCP Returns `401 Unauthorized`

- `OMNI_SKILLS_HTTP_BEARER_TOKEN` または `OMNI_SKILLS_HTTP_API_KEYS` を確認します
- `Authorization: Bearer <token>` または `x-api-key` ヘッダーを含めます### 🚦 API/MCP Returns `429 Too Many Requests`

- `OMNI_SKILLS_RATE_LIMIT_MAX`を増加させます
- `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`を拡張します
- クライアントまたはプローブからのバースト トラフィックを削減します。### 🛂 API/MCP Admin Runtime Returns `401`

- `OMNI_SKILLS_HTTP_ADMIN_TOKEN` を確認します
- `x-admin-token: <token>` または `Authorization: Bearer <admin-token>` を送信します。### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- 「OMNI_SKILLS_HTTP_MAINTENANCE_MODE」を無効にする
- メンテナンス中の活性プローブには「/healthz」を使用します
- オペレーター診断には、管理トークンを指定して `/admin/runtime` を使用します### 🌍 Browser Requests Fail CORS Validation

- `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` を確認します
- 正確なスキームとホストを含めます (例: 「https://app.example.com」)。### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis` を確認します
- `OMNI_SKILLS_A2A_REDIS_URL` を確認します
- すべてのノードから Redis 接続を確認します
- `/healthz` で `coordination` スナップショットを検査します。### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
