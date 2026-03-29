# 📗 Usage Guide (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**スキルの呼び出し、サービスの実行、Omni Skills ランタイムの操作に必要なものすべて。**

完全な運用ワークフローについては、[🔧 System Runbook](../operations/RUNBOOK.md) を参照してください。
完全なエンドユーザー コマンド マップについては、[🧭 CLI ユーザー ガイド](./CLI-USER-GUIDE.md) を参照してください。---

## 📊 Current Catalog Reality

|ステータス |詳細 |
|:------|:------|
| ✅**現在入手可能**|設計、アーキテクチャ、デバッグ、ドキュメント、OSS、セキュリティ、DevOps、AI エンジニアリング、データ、ツール、機械学習ワークフローにわたる 32 の公開スキル |
| 📦**バンドル**|現在、`essentials`、`full-stack`、`design`、`security`、`devops`、`ai-engineer`、および `oss-maintainer` が完全にサポートされています。
| 🔌**MCP リーチ**| 7 つのインストール可能なクライアント、16 つの構成可能なクライアント、33 つのファーストクラス構成ターゲット、19 つの構成プロファイル |
| 🤖**A2A 耐久性**|メモリ、JSON、または SQLite のローカル持続性、再起動再開、オプションのプロセス エグゼキュータ、および共有ワーカーのオプトイン リース調整 |---

## 🖥️ Invocation by Client

|クライアント |呼び出す方法 |スキルパス |
|:----------|:---------------|:----------|
| 🔵**クロード・コード**| `>> /スキル名 助けてください...` | `~/.claude/スキル/` |
| 🟡**ジェミニ CLI**| `@skill-name を使用して...` | `~/.gemini/スキル/` |
| 🔴**コーデックス CLI**| `@skill-name を使用して...` | `~/.codex/スキル/` |
| 🟢**キロ**|スキルはオンデマンドで自動ロード | `~/.kiro/スキル/` |
| 🟣**反重力**| `@skill-name を使用して...` | `~/.gemini/antigravity/スキル/` |
| 🔵**カーソル**|チャット内の「@スキル名」 | `~/.cursor/スキル/` |
| ⚪**オープンコード**| `opencode run @スキル名` | `.opencode/スキル/` |
| ⬛**副操縦士**|スキルコンテンツを手動で貼り付けます |該当なし |

Continue、Junie、Windsurf、Zed、VS Code、GitHub Copilot CLI、Cline、Kilo Code などのクライアントは、主にスキル ディレクトリではなく `config-mcp` フローを使用します。---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 注:**
> - 対話型ターミナルで、「npxomni-skills」によりガイド付きインストール フローが開くようになりました。
> - 「npxomni-skills ui」は、インストール、検出、およびサービス起動アクションを含むビジュアルな Ink シェルを開きます
> - ビジュアル シェルは、最近のインストール、最近のサービスの起動、お気に入り、および名前付きプリセットを `~/.omni-skills/state/ui-state.json` に保持します。
> - TTY の外では、セレクターが提供されていない場合でも完全インストールがデフォルトになります。
> - `--skill` は、選択された公開スキルのみをインストールします
> - `--bundle` はバンドルを展開し、厳選されたバンドルで宣言された公開メンバーをインストールします
> - `find` は 12 個以上のフィルター フラグをサポートします: `quality`、`best_practices`、`skill_level`、`security`、`category`、`tool`、`risk` など
> - `config-mcp` は、ファーストクラスのスキル ディレクトリを持たない MCP 対応製品の正しいパスです---

## 🔌 Runtime Commands

CLI は単なるインストーラーではなく、統合された操作ツールです。### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

ビジュアル シェルは以下をサポートします。

- 既知のクライアントまたはカスタム パスを選択したガイド付きインストール
- フラグを記憶せずに検索してからインストールする
- ガイド付き MCP クライアント構成プレビューと書き込みフロー
- MCP、API、A2A のガイド付きスタートアップ
- 最近のインストールとサービスの再開
- 保存されたインストールとサービスのプリセット
- お気に入りのスキルとバンドル### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
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
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # |ヒント |
|:---|:----|
| 1️⃣ |プロンプトでスキルを名前で参照します。
| 2️⃣ |エージェントが必要とする正確なアーティファクト、コード、または設計コンテキストを提供します。
| 3️⃣ |インストールのフットプリントを最小限に抑えるには、「--skill」を推奨します。
| 4️⃣ |パッケージ化や実行時の問題をデバッグする前に、`doctor` と `smoke` を使用してください。
| 5️⃣ | 7 つのスターター バンドルがすべて完全にサポートされているので、厳選されたドメインのインストールとしてバンドルを使用します。
| 6️⃣ | 1 つのフローで検出とインストールを行うには、`find --install --yes` を使用します。
| 7️⃣ |認証、レート制限、署名、および検証の環境変数については、[runbook](../operations/RUNBOOK.md) を参照してください。