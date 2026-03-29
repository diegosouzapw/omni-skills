# 🧠 Omni Skills (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**自動的にインストールされるスキル カタログ。**<br/>
CLI · API · MCP · A2A — すべて単一の `npx` コマンドから。<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ 1 分でインストール](#-installation) · [🛠️ ツールを選択](#-choose-your-tool) · [📖 CLI ガイド](docs/users/CLI-USER-GUIDE.md) · [📦 バンドル](docs/users/BUNDLES.md) · [🔌 ランタイム](#-runtime-surfaces) · [💡 理由オムニ スキル](#-why-omni-skills)</div>

---

<div align="center">

### 概要

</div>

| |メトリック |値 |
|:--|:------|:------|
| 📦 |**公開されたスキル**| 15 のアクティブ カテゴリ全体で「32」 |
| 🎯 |**バンドル**| `7` 完全にバックアップされた厳選されたバンドル |
| 🖥️ |**クライアントのインストール**| `7` インストール可能な AI コーディング アシスタント |
| 🔌 |**MCP クライアント**| `16` MCP 構成対応クライアント |
| 🔐 |**厳選された出力**| `skills_omni/` の `32` 拡張英語派生語 |
| 📋 |**現在のリリース**| `v0.1.2` |---

## クイックスタート

>**AI コーディング スキル、クロード コード スキル、カーソル スキル、コーデックス CLI スキル、Gemini CLI スキル、反重力スキル、またはインストール可能な `SKILL.md` ライブラリを検索しましたか?**
> あなたは正しい場所にいます。### 1️⃣ What is this?

Omni Skills は、AI コーディング アシスタント用の**インストール可能なスキル カタログおよびランタイム**です。その中核は、再利用可能な「SKILL.md」プレイブックのパブリック リポジトリです。ただし、通常のスキル コレクションとは異なり、リポジトリは**ディストリビューションおよびランタイム レイヤーです**。

<詳細>
<summary>📋 <strong>内容</strong></summary>

|コンポーネント |説明 |
|:----------|:----------|
| 🧠**スキル**| AI アシスタント向けに厳選された「SKILL.md」ベースのプレイブック |
| 📦**マニフェスト**|生成された JSON マニフェスト、バンドル、アーカイブ |
| 🧭**ガイド付きインストール**|インタラクティブな TTY とビジュアル端末のインストール フロー |
| 🌐**カタログ API**|検索、検出、ダウンロードのための読み取り専用 HTTP API |
| 🔌**MCP サーバー**|検出、推奨、クライアント対応の構成ツール |
| 🤖**A2A ランタイム**|エージェント間のタスク オーケストレーション |
| ✨**強化パイプライン**|プライベート エンハンサーは、厳選された英語の派生コンテンツを `skills_omni/` に公開します。</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *「「@brainstorming」を使用して SaaS MVP を計画します。」*
>
> 💬 *「このエンドポイント設計をレビューするには、`@api-design` を使用してください。」*
>
> 💬 *「この回帰を分離するには `@debugging` を使用してください。」*### 5️⃣ Start with a bundle

| 🎯 目標 |バンドル |コマンド |
|:---------|:------|:----------|
|一般エンジニアリング | `必需品` | `npx オムニスキル --バンドルの必需品` |
|製品 + アプリの配信 | `フルスタック` | `npx オムニスキル --バンドルフルスタック` |
|デザインシステム | `デザイン` | `npx オムニスキル --バンドルデザイン` |
|セキュリティレビュー | `セキュリティ` | `npxomni-skills --bundle security` |
|インフラとリリース | `devops` | `npxomni-skills --bundle devops` |
| LLM アプリケーション | `aiエンジニア` | `npxomni-skills --bundle ai-engineer` |
| OSSメンテナンス | `oss-メンテナ` | `npxomni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

バンドルを比較したり、インストール パスを選択したりする前に、次の 5 つの構成要素を理解することが役立ちます。

|コンセプト |意味 |
|:--------|:-------------|
| 🧠**スキル**|アシスタントにワークフローを適切に実行する方法を教える再利用可能な「SKILL.md」プレイブック |
| 📦**カタログ アーティファクト**|生成された JSON およびアーカイブ出力により、検索、比較、ダウンロード、インストールが可能になります。
| 🔌**MCP 構成**| MCP ツールを通じてオムニ スキルを検出するためのアシスタントのためのクライアント側の構成 |
| 🤖**A2A ランタイム**|検出、推奨、インストール計画の引き継ぎのためのエージェント間のオーケストレーション |
| ✨**厳選された出力**| `skills_omni/` — ネイティブの上流インテークとは別に、オムニによって維持される強化されたサーフェス。

>**📝 ネイティブ/厳選されたポリシー:**
> - `skills/` は任意の言語でネイティブのアップストリームの取り込みを受け入れます
> - `skills_omni/` は常に英語でキュレートされ、公開されます
> - `skills_omni/` は一方向のサーフェスであり、ネイティブの取り込みにループバックしません---

## 💡 Why Omni Skills

>**単なる「フォルダー内のスキルを備えた別のリポジトリ」ではありません。**
> オムニ スキルには、より強力なコントラクトとより広い実行時領域があります。

|ご希望であれば… | 📁 典型的なスキルのリポジトリ | ✨ オムニスキル |
|:----------------------|:-----------|:--------------|
|実際のアシスタントにインストール |手動コピーまたはカスタム スクリプト | `npxomni-skills`、ガイド付きインストール、ビジュアル UI、選択的 `--skill` および `--bundle` |
|スキルの検索と比較 |マークダウンを手動で参照する |生成されたカタログ、フィルタリング、バンドル計画、検索、比較、推奨 |
|ツール間で同じデータを使用する |ツールごとに個別のロジック | CLI、API、MCP、A2A の共有マニフェストとカタログ |
| MCP クライアントを構成する |ファイルを手動で編集する | `config-mcp`、ローカル サイドカー プレビュー、生成されたレシピ、ホワイトリストに登録された書き込み |
|トラストリリース |ベストエフォート型パッケージング |チェックサム、署名付きアーカイブ、スキャナー検証、リリース CI、およびプリフライトの公開 |
|コミュニティへの参加をキュレートする |土地はそのままのまま | `skills/` でネイティブの摂取、`skills_omni/` で厳選された英語の派生語を帰属付き |---

## 🖥️ Compatibility and Invocation

これらのスキルは「SKILL.md」モデルに従っており、通常のリポジトリとして使用できますが、パッケージは広範囲にわたってそれらをインストールして構成することもできます。

>**7**インストール可能なクライアント ·**16**MCP 構成可能なクライアント### 🎯 Install-Capable Clients

|ツール |タイプ |呼び出し例 |インストールパス |
|:-----|:-----|:--------|:----------|
| 🟢**クロード・コード**| CLI | `ブレインストーミングを使用して機能を計画する` | `~/.claude/skills` |
| 🔵**カーソル**| IDE | `@ブレインストーミングで機能の計画を手伝ってください` | `~/.cursor/skills` |
| 🟡**ジェミニ CLI**| CLI | `ブレインストーミングを使用して機能を計画する` | `~/.gemini/skills` |
| 🔴**コーデックス CLI**| CLI | `ブレインストーミングを使用して機能を計画する` | `~/.codex/skills` |
| 🟠**キロ**| CLI / IDE | `ブレインストーミングを使用して機能を計画する` | `~/.kiro/スキル` |
| 🟣**反重力**| IDE | `@brainstorming を使用して機能を計画する` | `~/.gemini/antigravity/skills` |
| ⚪**オープンコード**| CLI | `opencode 実行 @ブレインストーミング` | `<ワークスペース>/.opencode/skills` |

<詳細>
<summary>🔌 <strong>より広範な MCP 構成をカバー (16 クライアント)</strong></summary>

これらのターゲットは、スキル ディレクトリのインストール ターゲットでない場合でも、サポートされる MCP 構成サーフェスの一部です。

|クライアントまたはサーフェス |サポートタイプ |メモ |
|:------|:-----------|:------|
|クロードの設定とデスクトップ | MCP 構成 |設定、デスクトップ、およびプロジェクト対応のフロー |
| VSコード | MCP 構成 |ユーザー、ワークスペース、インサイダー、および開発コンテナのターゲット |
|ジェミニ | MCP 構成 |ユーザーとワークスペースの設定 |
|クライン | MCP 構成 |ファーストクラスの構成ターゲット |
| GitHub コパイロット CLI | MCP 構成 |ユーザーとリポジトリの構成ターゲット |
|続ける | MCP 構成 |ワークスペース YAML の生成 |
|ウィンドサーフィン | MCP 構成 |ユーザー設定ターゲット |
|ゼッド | MCP 構成 |ワークスペース構成ターゲット |
|ガチョウ | MCP 構成 |生成されたレシピを含むユーザー構成ターゲット |
|キロコード | MCP 構成 |ユーザー、プロジェクト、ワークスペースのターゲット |
|ジュニー | MCP 構成 |プロジェクトおよびユーザー構成ターゲット |</details>

---

## インストール

<テーブル>
<tr>
<td width="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

|ツール |インストールコマンド |初めての使用 |
|:-----|:------|:----------|
| 🟢 クロード・コード | `npx オムニスキル --claude` | `ブレインストーミングを使用して機能を計画する` |
| 🔵 カーソル | `npx オムニスキル --cursor` | `@ブレインストーミングで機能の計画を手伝ってください` |
| 🟡 ジェミニ CLI | `npx オムニスキル --gemini` | `ブレインストーミングを使用して機能を計画する` |
| 🔴コーデックスCLI | `npx オムニスキル --codex` | `ブレインストーミングを使用して機能を計画する` |
| 🟣 反重力 | `npxomni-skills --antigravity` *(デフォルト)* | `@brainstorming を使用して機能を計画する` |
| 🟠キロ | `npx オムニスキル --kiro` | `ブレインストーミングを使用して機能を計画する` |
| ⚪オープンコード | `npx オムニスキル --opencode` | `opencode 実行 @ブレインストーミング` |
| 📂 カスタムパス | `npxomni-skills --path ./my-skills` |使用するツールによって異なります |

> 📖**どこから始めればよいかわかりませんか?**
> - [🚀 はじめに](docs/users/GETTING-STARTED.md) — 2 分以内にインストールして確認します
> - [🧭 CLI ユーザー ガイド](docs/users/CLI-USER-GUIDE.md) — 完全なコマンド リファレンス
> - [📗 使用ガイド](docs/users/USAGE.md) — プロンプト、パターン、およびランタイム モード---

## 🔌 Runtime Surfaces

オムニ スキルは単なるスキルのライブラリではありません。これは、同じ生成されたカタログを使用する**4 つのランタイム サーフェス**を公開します。

|表面 |状態 |何をするのか |例 |
|:--------|:------|:---------------|:--------|
| 🖥️**CLI**| ✅ 利用可能 |検索、インストール、診断、ビジュアル UI、ブート サービス、スモーク チェック | `npx オムニスキルドクター` |
| 🌐**カタログ API**| ✅ 利用可能 |読み取り専用カタログ、検索、バンドル、比較、インストール プラン、ダウンロード | `npx オムニスキル API --port 3333` |
| 🔌**MCP**| ✅ 利用可能 |検出、推奨、インストール プレビュー、ローカル サイドカー、構成フロー | `npx オムニスキル mcp ストリーム --local` |
| 🤖**A2A**| ✅ 利用可能 |タスクのライフサイクル、ハンドオフ、ポーリング、ストリーミング、キャンセル、永続性 | `npx オムニスキル a2a --ポート 3335` |

<詳細>
<summary>🖥️ <strong>ビジュアル シェルとオペレーター コマンド</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<詳細>
<summary>🔌 <strong>MCP トランスポートと構成</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

|メトリック |カウント |
|:------|:------|
| 🧠 公開されたスキル |**32**|
| 📂 アクティブなカテゴリ |**15**|
| 📦 完全にバックアップされたバンドル |**7**|
| ✨厳選されたデリバティブ |**32**内 `skills_omni/` |### 📦 Bundle Availability

|バンドル |スキル |メンバー |
|:------|:----------|:----------|
| 🧰「必需品」 |**4/4**✅ | `スキルの検索` · `ブレーンストーミング` · `アーキテクチャ` · `デバッグ` |
| 🌐 `フルスタック` |**5/5**✅ | `フロントエンド デザイン` · `API デザイン` · `データベース デザイン` · `omni-figma` · `auth-flows` |
| 🎨「デザイン」 |**5/5**✅ | `フロントエンドデザイン` · `オムニフィグマ` · `デザインシステムオペレーション` · `アクセシビリティ監査` · `デザイントークンガバナンス` |
| 🛡️「セキュリティ」 |**4/4**✅ | `セキュリティ監査` · `脆弱性スキャナ` · `インシデント対応` · `脅威モデリング` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observability-review` · `release-engineering` |
| 🤖 `aiエンジニア` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracts` · `model-serving` |
| 🔧 `oss-メンテナ` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `documentation` |### ✨ Native Intake → Curated Output

|表面 |目的 |言語 |
|:--------|:--------|:----------|
| 📥 `スキル/` |ネイティブ摂取量 |任意の言語 |
| ✨ `スキルオムニ/` |厳選されたオムニ管理された出力 |常に英語 |

>**ℹ️**ネイティブ スキルへの変更はプライベート エンハンサーによって再処理され、厳選されたベースラインで更新されます。これにより、`skills_omni/` は 2 番目のコピーではなく、**保守されたカタログ画面**になります。---

## 🛡️ Security and Release Posture

> Omni Skills は、単純なマークダウン リポジトリよりも強力なリリースと検証のストーリーを提供します。### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<詳細>
<summary>📋 <strong>パイプラインが検証する内容</strong></summary>

- ✅ スキルの検証とメタデータの生成
- ✅ 分類の正規化および再分類ツール
- ✅ カタログとアーカイブの生成
- ✅ 自動テスト
- ✅ API、MCP、および A2A ブート パス
- ✅ アーカイブの検証
- ✅ `npm Pack --dry-run` によるパッケージのプリフライト</details>

<詳細>
<summary>🔐 <strong>リリース姿勢</strong></summary>

|コントロール |説明 |
|:----------|:----------|
| 🔒 SHA-256 チェックサム |すべてのアーカイブのチェックサム マニフェスト |
| ✍️ 署名入りアーティファクト |リリース アーティファクトの分離された署名 |
| 🤖 CI の適用 |公開前に CI でリリース検証 |
| 🦠 スキャナーゲート | ClamAV と VirusTotal ゲート型リリース フロー |
| 📦 GitHub リリース | GitHub リリースの自動生成 |
| 📋npm出版 |検証済みの tarball からのみ |
| 🔄 自動リリース |条件を満たすスキルが「main」にマージされる |

**マージが変更された場合にのみ自動解放トリガー:**
- `スキル/*/**`
- `skills_omni/*/**`
- `data/bundles.json`

ドキュメントのみの変更はパッケージ公開を**トリガーしません**。</details>

---

## 📖 Documentation Map

### 👤 For Users

|ドクター |何を学ぶか |
|:----|:---------------|
| 🚀 [はじめに](docs/users/GETTING-STARTED.md) | 2 分以内にインストール、検証、起動 |
| 🧭 [CLI ユーザーガイド](docs/users/CLI-USER-GUIDE.md) |完全なコマンド リファレンスと実際のパターン |
| 📗 [利用ガイド](docs/users/USAGE.md) | CLI コマンド、インストール モード、ランタイム、および MCP 構成 |
| 📦 [バンドル](docs/users/BUNDLES.md) |厳選されたバンドルと入手可能性 |
| 📚 [カタログ](docs/CATALOG.md) |公開されたスキルの自動生成カタログ |
| 🔧 [システム Runbook](docs/operations/RUNBOOK.md) |構築、提供、保護、トラブルシューティング |### 🏗️ For Architects

|ドクター |何を学ぶか |
|:----|:---------------|
| 🗺️ [エージェント ネイティブ ロードマップ](docs/architecture/AGENT-NATIVE-ROADMAP.md) |アーキテクチャの進化と残された領域 |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) |コアモノレポの決定 |
| 🔬 [コードベース分析](docs/architecture/CODEBASE-ANALYSIS.md) |ランタイム構成とシステム境界 |
| 🌐 [カタログ API](docs/specs/CATALOG-API.md) | HTTP エンドポイント、フィルタリング、ガバナンス、ダウンロード |
| 🧩 [CLI ガイド付きインストーラー](docs/specs/CLI-GUIDED-INSTALLER.md) |ガイド付きインストーラーの動作契約 |
| 🖥️ [CLI ビジュアル シェル](docs/specs/CLI-VISUAL-SHELL.md) |インクのビジュアル シェルと状態モデル |
| 🔌 [ローカル MCP サイドカー](docs/specs/LOCAL-MCP-SIDECAR.md) |ファイルシステム ツールとホワイトリスト モデル |
| 📊 [クライアント サポート マトリックス](docs/specs/CLIENT-SUPPORT-MAT​​RIX.md) |クライアントとライターの完全なリファレンス |
| 🏷️ [スキル分類](docs/specs/SKILL-CLASSIFICATION.md) |分類、スコアリング、メタデータ |
| 🛡️ [セキュリティ検証](docs/specs/SECURITY-VALIDATION.md) |スキャナー、アーカイブ、署名 |
| 📋 [スキルマニフェスト](docs/specs/SKILL-MANIFEST.md) |機械可読マニフェスト形式 |### 🤝 For Contributors

|ドクター |何を学ぶか |
|:----|:---------------|
| 📝 [貢献ガイド](CONTRIBUTING.md) |リポジトリのワークフローと PR への期待 |
| 🧾 [スキル PR ワークフロー](docs/contributors/SKILL-PR-WORKFLOW.md) |ネイティブ摂取、エンハンサー処理、レビュアーの期待 |
| 📄 [スキルテンプレート](docs/contributors/SKILL-TEMPLATE.md) |フロントマターと構造を備えたスターター `SKILL.md` |
| 🔬 [スキルの解剖学](docs/contributors/SKILL-ANATOMY.md) |構造と品質に対する期待 |
| ✅ [品質バー](docs/contributors/QUALITY-BAR.md) |合格基準 |
| 🏆 [ハイスコア プレイブック](docs/contributors/HIGH-SCORE-PLAYBOOK.md) |高得点の原動力となるもの |---

## 🗂️ Repository Layout

|パス |目的 |
|:-----|:----------|
| 📂 `スキル/` |正規の作成されたスキルとネイティブの摂取 |
| ✨ `スキルオムニ/` |厳選されたオムニ管理の強化されたデリバティブ |
| 📖 `docs/` |ユーザー、寄稿者、アーキテクチャ、操作、および仕様のドキュメント |
| 📦 `dist/` |生成されたマニフェスト、バンドル、カタログ、アーカイブ |
| 📁 `データ/` |バンドル定義と静的サポート データ |
| 🧠 `packages/catalog-core/` |共有カタログ ランタイム |
| 🌐 `packages/server-api/` |読み取り専用 HTTP API |
| 🔌 `packages/server-mcp/` | MCP サーバーとローカル サイドカー |
| 🤖 `packages/server-a2a/` | A2A ランタイムとタスクのオーケストレーション |
| 🖥️ `tools/bin/` | CLI エントリポイント |
| 📚 `tools/lib/` |インストーラーと UI ヘルパー |
| ⚙️ `ツール/スクリプト/` |検証、生成、リリース、およびテスト スクリプト |

>**ℹ️**`dist/` は、生成されたアーティファクトがインストール、API、MCP、A2A、スモーク、およびリリース コントラクトの一部であるため、意図的にバージョン管理されています。---

## 🤝 Contributing

オムニ スキルは、「skills/」でネイティブの上流スキルの取り込みを受け入れます。

|ルール |詳細 |
|:-----|:----------|
| 📥 ネイティブ摂取量 |どの言語で書かれていても、荒っぽいかもしれません。
| ✨ 厳選されたアウトプット | `skills_omni/` はオートメーションで作成された Omni 派生プログラム用に予約されています。
| 🚫 手動編集 | `skills_omni/` に対する公開手動編集は拒否されます。
| 🔄 再処理 |プライベート エンハンサーはネイティブの変更を再処理し、厳選されたベースラインを更新します。

> 📖**最初に:**[貢献ガイド](CONTRIBUTING.md) · [スキル PR ワークフロー](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

|タイプ |ライセンス |
|:-----|:----------|
| 💻 コードとツール | [MITライセンス](ライセンス) |
| 📝 ドキュメントとスキルのコンテンツ | [CC BY 4.0](ライセンスコンテンツ) |---

<div align="center">

**Omni Skills チームによる 🧠 を使用して作成**

[⭐ このリポジトリにスターを付ける](https://github.com/diegosouzapw/omni-skills) · [🐛 バグを報告する](https://github.com/diegosouzapw/omni-skills/issues) · [💬 ディスカッション](https://github.com/diegosouzapw/omni-skills/Discussions)</div>
