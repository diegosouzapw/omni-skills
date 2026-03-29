# 📦 Curated Bundles (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**バンドルは、カタログの最上位に階層化された精選されたスキル セレクターです。**7 つのスターター バンドルはすべて、公開されたスキルによって完全にサポートされるようになりました。---

## ⚙️ How Bundles Work

`--bundle` は特別なパッケージをインストールしません**。それ：

1. 📋 選択したバンドル定義を展開します
2. ✅ 現在カタログで利用可能なメンバーのみをインストールします
3. ✅ 公開されたバンドルメンバーから具体的なインストール計画を構築します。```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

現在生成されたカタログ (「dist/bundles.json」) に基づいて:

|バンドル |対象 |利用可能 |メンバー |
|:------|:-----------|:----------|:----------|
| 🧰**必需品**|すべての開発者 |**4/4**| `スキルの検索` ✅ · `ブレーンストーミング` ✅ · `アーキテクチャ` ✅ · `デバッグ` ✅ |
| 🌐**フルスタック**|ウェブおよびアプリ開発者 |**5/5**| `フロントエンド デザイン` ✅ · `api デザイン` ✅ · `データベース デザイン` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**デザイン**|デザインシステムとアクセシビリティ |**4/4**| `フロントエンドデザイン` ✅ · `オムニフィグマ` ✅ · `デザインシステムオペレーション` ✅ · `アクセシビリティ監査` ✅ |
| 🛡️**セキュリティ**|セキュリティエンジニア |**4/4**| `セキュリティ監査` ✅ · `脆弱性スキャナ` ✅ · `インシデント対応` ✅ · `脅威モデリング` ✅ |
| ⚙️**devops**|プラットフォームとインフラ |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**AI エンジニア**| LLM および ML 開発者 |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-メンテナ**| OSS メンテナー |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = 公開され、インストール可能---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- ドメインの**厳選された開始点**が必要です
-**厳選されたドメイン固有**のインストール プランが必要である
- ロールの完全なワーキング セットをすばやくインストールする方法が必要な場合### 🎯 Use `--skill` instead when:

-**保証された最小限のインストール**が必要な場合
- 必要な**正確なスキル**はすでにわかっています
- 厳選されたワーキング セットではなく、**可能な限り最小のフットプリント**が必要です---

## 💡 Practical Recommendations

|目標 |コマンド |
|:-----|:----------|
| 🎯 特定の公開スキルをインストールする | `npx オムニスキル --cursor --スキルオムニフィグマ` |
| 📦 完全にバックアップされたスターター バンドル | `npxomni-skills --cursor --bundle full-stack` |
| 🎨 デザインシステムバンドル | `npxomni-skills --cursor --bundle design` |
| 🔧 OSS ワークフロー バンドル | `npxomni-skills --codex --bundle oss-maintainer` |
| 🛡️ セキュリティ ワークフロー バンドル | `npxomni-skills --cursor --bundle security` |
| ⚙️ DevOps バンドル | `npxomni-skills --cursor --bundle devops` |
| 🤖 AI エンジニア バンドル | `npxomni-skills --codex --bundle ai-engineer` |
| 🔎 決める前に検索 | `npx オムニスキル find figma` |
| 📋 すべてのバンドルの在庫状況を表示 | `cat dist/bundles.json` |---

## 🔍 Inspecting Bundles

### 📁 View Generated Bundle Data

```bash
cat dist/bundles.json
```

### 🌐 Query via API

```bash
curl http://127.0.0.1:3333/v1/bundles
```

### 🔌 Query via MCP

バンドル パラメーターを指定して「search_skills」または「preview_install」ツールを使用します。### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
