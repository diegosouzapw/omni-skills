# 📊 Skill Classification and Metadata (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**検証および構築中にすべてのスキルをスコアリングし、カタログ全体の機械可読プロファイルを生成するローカル分類子。**---

## 📊 Status

|出力 |生成された |
|:------|:----------|
| ✅ ルート `metadata.json` |リポジトリ全体の概要 |
| ✅ スキルごとの `skills/<skill>/metadata.json` |個別の分類 |
| ✅ カタログ `dist/catalog.json` |スコア付きの出版カタログ |
| ✅ マニフェスト `dist/manifests/<skill>.json` |スキルごとの機械可読データ |

生成者: `python3 tools/scripts/validate_skills.py`

現在のリポジトリのスナップショット:

- 32 の公開スキル
- 平均品質スコア「96.3」
- ベストプラクティスの平均スコア「98.7」
- 平均セキュリティスコア「95.0」
- 現在の品質スプレッド `94、95、96、97、100`
- 現在のベストプラクティスの範囲は `98、99、100` です---

## 🎯 Purpose

分類子は、カタログに掲載される前に、すべてのスキルに**一貫した機械可読プロファイル**を与えます。次の 4 つのジョブを実行します。

1. 📋**解析**— YAML フロントマターとマークダウン本体
2. 🏷️**正規化**— 正規分類法に合わせたカテゴリ ラベル
3. 📊**分類**— 成熟度、ベストプラクティス、品質、セキュリティのスコアリング
4. 📁**Emit**— ビルド スクリプト、ドキュメント、CI によって消費されるメタデータ アーティファクト---

## 🏷️ Canonical Taxonomy

**自動エイリアス マッピングを備えた 18 の正規カテゴリ**:

|カテゴリー |ドメイン |一般的な別名 |
|:---------|:------|:------|
| 💻「開発」 |ソフトウェア開発全般 | `コーディング`、`プログラミング` |
| 🎨 `フロントエンド` |フロントエンドとUI | `ui`、`web デザイン` |
| 🔧 `バックエンド` |バックエンドと API | `サーバー`、`API` |
| 🌐 `フルスタックウェブ` |エンドツーエンドのウェブ | `ウェブ`、`フルスタック` |
| 🛠️「ツール」 |開発者ツール | `ユーティリティ` |
| ⚙️ `cli-automation` | CLI と自動化 | `スクリプト`、`ワークフロー` |
| 📊「ビジネス」 |事業戦略 | `戦略` |
| 📐「製品」 |製品管理 | `午後` |
| 🎯「デザイン」 |ビジュアル＆UXデザイン | `ux` |
| 🤖 `データai` |データと AI アプリ | `データ`、`分析` |
| 🧠 `aiエージェント` | AI エージェントのパターン | `エージェント` |
| 📈「機械学習」 | ML モデルとトレーニング | `ml` |
| 🔌 `devops` |インフラ | 「インフラストラクチャ」、「クラウド」 |
| 🛡️ `テストセキュリティ` |テストとセキュリティ | `テスト`、`セキュリティ`、`qa` |
| 📖 「ドキュメント」 |ドキュメント管理 | `ドキュメント` |
| 🎬 `コンテンツメディア` |コンテンツ制作 | `メディア`、`コンテンツ` |
| 💬「コミュニケーション」 |コミュニケーションツール | `チャット` |
| ❓「未分類」 |デフォルトのフォールバック | — |

> 「ワークフロー」、「アーキテクチャ」、「インフラストラクチャ」などの従来のラベルは、エイリアス マッピングを通じて自動的に正規化されます。---

## 📏 Computed Attributes

### 🎯 Maturity Levels

|レベル |ラベル |基準 |
|:------|:------|:----------|
|**L1**| `メタデータ` |フロントマターと最小限のボディ |
|**L2**| `指示` |実質的な書面による指示 |
|**L3**| `リソース` |バンドルされたスクリプトまたはより豊富なパッケージ化されたリソース |

追跡される追加シグナル: `has_scripts`、`has_extra_files`---

### 📋 Best Practices Score (0-100)

ヒューリスティックは以下を評価します。

|信号 |チェック内容 |
|:------|:------|
| 📛 ナメクジの品質 | `name` フィールドの書式設定 |
| 📝 説明 |明瞭さ、長さ、情報量 |
| 📐 構造 |ドキュメントのセクションと階層 |
| 💡 例 |コードフェンスとサンプルブロック |
| 🔗 参考資料 |リンクされたローカルの `references/`、`scripts/`、およびサポートパック ヘルパー |
| 🧰 操作性 |実行可能なローカル スクリプトの例と具体的なワークフロー スニペット |
| 🧩 サポートパックの深さ |複数のサポート ファミリ、再利用可能なファイル、エージェントのメタデータ、運用資産 |
| 🩺 トラブルシューティング |明示的な「症状」と「解決策」のペア |
| 📚 報道内容 | 「いつ使用するか」、「ベスト プラクティス」、「トラブルシューティング」、および「追加リソース」セクション |
| 🌐 携帯性 |ツールに依存しない表現 |
| 📅 鮮度 |ハードコードされた日付の回避 |

**現在の階層化**

|階層 |スコア範囲 |
|:-----|:----------|
| '素晴らしい' | 90-100 |
|いいですね | 70-89 |
| 「まあまあ」 | 50-69 |
| 「仕事が必要」 | 0-49 |

スコアラーは意図的に**成熟したスキル全体に広がりを生み出すのに十分なセマンティック**を行っています。きれいな構造のスキルは高スコアを獲得できますが、トップバンドに到達するには、次のような深度信号も必要です。

- 1 つだけではなく、複数の例
- 複数のトラブルシューティングケース
- 関連スキル指導
- より豊富なローカル サポート パック
- 単純な散文を超えた複数のサポート ファミリ。理想的には、実際の再利用を追加する `agents/` または `assets/` を含めます。
- カウント可能なステップを含む専用の「## ワークフロー」セクション
- 実行の明確性を向上させる場合は、少なくとも 1 つの小さな操作テーブルまたはデシジョン マップ
- 単純なテンプレートよりも操作上の特異性が高い
- より明確なワークフローの深さと意思決定支援資産
- 1 つの `references/` ファイルと 1 つのリンクされたスクリプトを超えるサポートパックの深さ
- 単一ノートのアドオンではなく、ワークフロー キットのように感じるのに十分な再利用可能なサポート ファイル
- 再利用可能なワークフロー キットから洗練されたアウトラインを分離するのに十分な操作密度

つまり、サポート パックが狭い場合、決定資産が薄い場合、またはカタログ内の最も強力なスキルよりも操作密度が低い場合、構造的に完全なスキルでも「100」ではなく 90 台後半に到達する可能性があります。---

### ⭐ Quality Score (0-100)

ヒューリスティックは以下を組み合わせます。

|信号 |重量 |
|:------|:------|
| 📝 体の完成度 |中～高 |
| 📋 記述精度 |中 |
| 📊 メタデータの完全性 |中 |
| 📅 最新性 (`date_updated`) |中 |
| 📦 パッケージ化されたリソース |中 |
| 📋 ベストプラクティスへの貢献 |中 |
| 🧠 意味の深さ |中～高 |
| 🛠️ 運用の深さ |中 |
| 📚 豊富なサポートパック |中 |

**品質レベル:**

|階層 |スコア範囲 |
|:-----|:----------|
| 💎「プラチナ」 | 80+ |
| 🥇「ゴールド」 | 65-79 |
| 🥈「シルバー」 | 50-64 |
| 🥉「ブロンズ」 | 35-49 |
| 🌱「スターター」 | 0-34 |---

### 🛡️ Security Score (0-100)

セキュリティ層は以下を組み合わせます。

|スキャナ |常に有効 |何をするのか |
|:----------|:------|:---------------|
| 🔍**静的**| ✅ はい | SKILL.md、パッケージ化されたファイル、およびスクリプトをスキャンします。
| 🦠**ClamAV**| ⚙️ オプション | 「clamscan」によるマルウェアスキャン |
| 🔒**ウイルス合計**| ⚙️ オプション |ハッシュ検索 (アップロードなし) |

**静的スキャナー ルール ファミリ:**
- 🎭 迅速な注入と抽出のパターン
- 💣 破壊的なシェルコマンド
- 🔑 不審な認証情報または OS パス
- ⚠️ 危険なスクリプトプリミティブ (`shell=True`、`pickle.load`、`eval`、`extractall`)

**セキュリティ出力形状:**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

|セクション |フィールド |
|:------|:------|
| 🆔 アイデンティティ | `id`、`slug`、`display_name` |
| 🏷️ 分類法 | `raw_category`、`canonical_category`、`inferred_category` |
| 📋 オーサリング |タグ、ツール、複雑さ、リスク、ソース、作成者 |
| 📅 日付とパス | `date_added`、`date_updated`、パス |
| 📊 リソース |ファイルおよび参照カウンター |
| 📝 コンテンツシグナル |単語数、本文の長さ、構造フラグ |
| 🧠 意味の深さ |ワークフローの手順、例、トラブルシューティングの詳細、意思決定資産、サポートリンク ファミリ |
| 🧩 サポートパックの構造 |サポート ファイル数、リンク ファミリ、`agents/`、`assets/`、および再利用可能な例 |
| 🎯 成熟度 |レベル、ラベル、スクリプト/ファイルのフラグ |
| 📋 ベストプラクティス |スコアとティア |
| ⭐品質 |スコア、ティア、セマンティックの内訳 |
| 🛡️ セキュリティ |スコア、ティア、ステータス、調査結果 |
| ✅ 検証 |ステータス、エラー、警告 |### Root (`metadata.json`)

|セクション |フィールド |
|:------|:------|
| 📊 概要 |数、平均、カテゴリ分布 |
| 🏷️ 分類法 |カテゴリ数 |
| 🎯 配布 |スキル レベル、品質レベル、セキュリティ レベル |
| ✅ 検証 |ステータスカウント |
| 📋 スキルリスト |スキルごとのコンパクトな概要 |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

これにより、`.githooks/pre-commit` を使用するように `git` が設定され、コミット前にメタデータとカタログ アーティファクトが再生成され、生成されたファイルが自動的にステージングされます。