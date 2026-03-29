# 🔬 Anatomy of a Well-Written Skill (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**オムニ スキル「SKILL.md」の構造と品質に対する期待 — カタログ全体を強化するオーサリング形式**---

## 📐 The Two Parts

すべての `SKILL.md` は 2 つの異なるセクションで構成されます。### 1️⃣ Frontmatter (YAML Metadata)

「---」区切り文字間の機械可読メタデータ。それは次のような力を与えます。

- 📚 スキルインデックスとカタログの生成
- 🔎 CLI の検索とフィルタリング
- ✅ 検証と品質スコアリング
- 📊 生成された「metadata.json」分類アーティファクト
- 📋 スキルごとのマニフェストは `dist/manifests/` にあります### 2️⃣ Body (Markdown Instructions)

人間が読める (およびエージェントが読める) 指示。タスクの実行方法について**上級開発者に説明**しているかのように書きます。AI エージェントが推測することなく従うことができるほど具体的です。---

## 📋 Frontmatter Reference

|フィールド |必須 |タイプ |説明 |
|:------|:-----------|:-----|:-----------|
| `名前` | ✅ |文字列 |ディレクトリ名は小文字のハイフンで区切られた名前と一致する必要があります。
| `説明` | ✅ |文字列 | 1 行の説明 (10 ～ 200 文字) |
| `バージョン` | ⚡ |文字列 |スキル自体のセマンティック バージョン (例: `"0.1.1"`) |
| `カテゴリー` | ⚡ |文字列 |リポジトリ分類法からの 1 つの正規カテゴリ |
| `タグ` | ⚡ |文字列[] |発見のための検索可能なタグ |
| `複雑さ` | ⚡ |文字列 | `初心者` · `中級者` · `上級` · `専門家` |
| 「リスク」 | ⚡ |文字列 | `安全` · `注意` · `攻撃的` · `重大` |
| `ツール` | ⚡ |文字列[] |テスト済みの AI コーディング アシスタント |
| `ソース` | ⚡ |文字列 | `オムニチーム` · `コミュニティ` · `公式` |
| `著者` | ⚡ |文字列 |帰属 |
| `日付_追加` | ⚡ |文字列 | ISO 日付 |
| `日付_更新` | ⚡ |文字列 | ISO 日付 |

> ✅ = 常に必須 · ⚡ = strict モードで必須

スキルのバージョンは、npm パッケージのバージョンから独立しています。パッケージは現在「0.1.3」ですが、既存のスキルは有効に独自のセマンティック バージョンに残すことができます。---

## 🏷️ Canonical Categories

リポジトリ分類では現在、**18 の正規カテゴリ**が定義されています。

|カテゴリー |ドメイン |
|:-----------|:------|
| 💻「開発」 |ソフトウェア開発全般 |
| 🎨 `フロントエンド` |フロントエンド フレームワークと UI |
| 🔧 `バックエンド` |バックエンド サービスと API |
| 🌐 `フルスタックウェブ` |エンドツーエンドの Web 開発 |
| 🛠️「ツール」 |開発者ツールとユーティリティ |
| ⚙️ `cli-automation` | CLI ツールと自動化スクリプト |
| 📊「ビジネス」 |ビジネスプロセスと戦略 |
| 📐「製品」 |製品管理とデザイン |
| 🎯「デザイン」 |ビジュアルおよびUXデザイン |
| 🤖 `データai` |データ エンジニアリングと AI アプリケーション |
| 🧠 `aiエージェント` | AI エージェントの開発とパターン |
| 📈「機械学習」 | ML モデルとトレーニング |
| 🔌 `devops` |インフラストラクチャと展開 |
| 🛡️ `テストセキュリティ` |テストとセキュリティの実践 |
| 📖 「ドキュメント」 |ドキュメントの生成と管理 |
| 🎬 `コンテンツメディア` |コンテンツ制作とメディア |
| 💬「コミュニケーション」 |コミュニケーションツールとワークフロー |
| ❓「未分類」 |一致するものが見つからない場合のデフォルト |

> 「ワークフロー」、「アーキテクチャ」、「インフラストラクチャ」、「セキュリティ」、「テスト」などの従来のラベルは、エイリアス マッピングを通じて自動的に正規化されます。---

## 📝 Body Structure

適切に作成されたスキル本体は、次の階層に従います。

### 📌 概要 (必須)
スキルの機能**とスキルが存在する理由**に関する 2 ～ 3 文。

### 🎯 いつ使用するか (必須)
このスキルが適用される**特定のシナリオ**の箇条書きリスト。

### 📋 主要な手順 (必須)
エージェントが従うべき**段階的なプロセス**。明確にしてください。具体的にしてください。エージェントは、明確で明確な指示がある場合に最も効果的に機能します。

### 💡 例 (推奨)
具体的なプロンプト、コード ブロック、または期待される出力。**具体的なほど良いです。**

### ✅ ベスト プラクティス (推奨)
クイックスキャンするには、「✅ Do / ❌ Don't」フォーマットを使用します。

### 🔧 トラブルシューティング (オプション)
一般的な問題とその解決策。

### 🔗 関連スキル (オプション)
補完的なスキルへの相互参照。---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯**1 つの特定**のワークフローまたはドメインに焦点を当てる
- 📌 指示は**AIが人間の解釈なしで従うことができるほど明確**です
- 💡 予想される動作を含む**具体例**が含まれています
- 🛡️ 適切な**エラー処理**ガイダンスがある
- 📊 健全なメタデータを生成します: 正規カテゴリ、成熟度 L2+、品質 70+
- 🧰 散文だけでなく、理想的には適切な `references/`、`scripts/`、`examples/`、および `agents/` にわたって再利用可能なサポート パックを配布します。

スキルを最高の範囲に押し込む強力なスコアリング パターンについては、[ハイスコア プレイブック](HIGH-SCORE-PLAYBOOK.md) を参照してください。### ❌ Bad Skill

- 🌫️何にでも当てはまる一般的なアドバイス
- 🤷 「良いコードを書く」などの曖昧な指示
- 🚫 例やコードブロックはありません
- ⚠️ フロントマターフィールドがありません
- 📉 低品質スコア (50 未満)