# 🚀 Getting Started (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**スキルをインストールし、設定を確認し、最初の AI スキルを 2 分以内に呼び出します。**---

## 📊 Current Catalog Status

|メトリック |値 |
|:------|:------|
|公開されたスキル |アーキテクチャ、デザイン、セキュリティ、DevOps、AI エンジニアリングなどを含む 15 のアクティブなカテゴリにわたる**32**|
|定義されたバンドル |**7**(すべて公開されたスキルによって完全に裏付けられています) |
|インストール可能なクライアント |**7**(クロード コード、カーソル、Gemini CLI、Codex CLI、Kiro、反重力、OpenCode) |
| MCP 構成対応クライアント | 33 のファーストクラス MCP 構成ターゲット全体で**16**|---

## 📦 Step 1 — Install

### クイックスタート

```bash
npx omni-skills
```

対話型ターミナルでは、サイレントにクライアントを想定するのではなく、ガイド付きインストーラーが開くようになりました。### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

これにより、インストール、検出、MCP、API、および A2A 起動用のブランドのターミナル ハブが開きます。### 🎯 Default Install (Antigravity Outside TTY)

TTY の外では、引数なしのインストーラーは依然としてデフォルトの `~/.gemini/antigravity/skills` になります。### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ スターター バンドルは、`devops` と `ai-engineer` を含めて完全にサポートされるようになりました。### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

スキルが適切な場所に着地していることを確認します。```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

または、組み込みの診断を使用します。```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

クライアントの検出、スキルのインストール/削除、MCP 構成の書き込みを行うファイルシステム ツールをエージェントに提供します。```bash
npx omni-skills mcp stream --local
```

スキルインストールのターゲットではないクライアントに対して MCP を設定することもできます。```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

スキル カタログを読み取り専用の HTTP API として公開します。```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

エージェント間の検出、推奨、インストール計画、ポーリング、ストリーミング:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

スキルは、AI エージェントに以下を提供する構造化されたマークダウン プレイブック (`SKILL.md`) です。

|コンポーネント |目的 |
|:----------|:----------|
| 📋**フロントマター**|機械可読メタデータ (名前、カテゴリ、タグ、ツール、リスク) |
| 📝**本体**|タスク固有の指示、手順、ガードレール、および例 |
| 📚**参考資料**|エージェントが実行中に参照できるサポート ドキュメント |
| 🎨**資産**|アイコン、画像、またはその他のパッケージ化されたリソース |---

## ➡️ Next Steps

|ドクター |何を学ぶか |
|:----|:---------------|
| 🧭 [CLI ユーザーガイド](CLI-USER-GUIDE.md) |インストール、ランタイム、構成、診断に関する完全なコマンド リファレンス |
| 📗 [利用ガイド](USAGE.md) |すべての CLI コマンド、プロンプト パターン、およびランタイム モード |
| 📦 [バンドル](BUNDLES.md) |厳選されたスキル コレクションとその利用可能性 |
| 📚 [カタログ](../CATALOG.md) |公開されたスキルの自動生成カタログ |
| 📖 [ドキュメントハブ](../README.md) |完全なドキュメントマップ |
| 🔧 [システム Runbook](../operations/RUNBOOK.md) |操作リファレンス |