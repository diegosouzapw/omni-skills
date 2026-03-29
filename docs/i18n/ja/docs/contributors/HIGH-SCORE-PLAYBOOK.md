# 🏆 High-Score Skill Playbook (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**オムニ スキル「SKILL.md」が高い成熟度、ベスト プラクティス、品質、セキュリティ スコアを達成するために実際に必要なもの。**---

## 🎯 Purpose

このガイドでは、リポジトリの分類子が実際にスキルにどのように報酬を与えるかについて説明します。

次のような場合に使用します。

- 上位スコアバンドに入る新しいスキルを作成します
- 「良い」または低い「優れた」に留まっている既存のスキルを改善します。
- きちんとした書式設定を備えたスキルが依然として優れた運用資産として評価されない理由を理解する

これは、寄稿者向けの次のコンパニオンです。

- [品質バー](QUALITY-BAR.md)
- [スキルアナトミー](SKILL-ANATOMY.md)
- [スキル分類](../specs/SKILL-CLASSIFICATION.md)

ライブ カタログの現在のベンチマーク:

- 32 の公開スキル
- 現在の品質スプレッド: `94、95、96、97、100`
- 現在のベスト プラクティスの範囲: `98、99、100`
- 現在のトップエンド: 「100/100」品質の「omni-figma」と「100/100」ベストプラクティス---

## 🧱 What High Scores Really Mean

分類子は、かなりのマークダウンだけを報酬として与える**わけではありません**。

高得点のスキルとは、次のようなスキルです。

-**発見可能**: 説明には、スキルが何をするのか、いつ使用するのかが明確に記載されています
-**操作可能**: スキルにはローカル スクリプト、リファレンス、実行可能なサンプルが含まれています
-**診断**: 問題が発生した場合にエージェントが回復するのに役立ちます
-**具体的**: 広範なアドバイスではなく、1 つのワークフローに焦点を当てています。
-**安全**: 危険なパターンを回避し、クリーンなスキャナー出力を出荷します。

実際には、最も強力なスキルは、単純なマークダウン ノートというよりも、**小さなパッケージ化されたワークフロー キット**のように動作します。---

## 📋 Score Targets

オーサリング時に次のターゲットを使用します。

|寸法 |強力なターゲット |例外的なターゲット |
|:----------|:--------------|:--------|
| 🎯 成熟度 | `L3` |複数のサポート リソースを備えた「L3」 |
| 📋 ベストプラクティス | `90+` | `96+` |
| ⭐品質 | `85+` | `90+` |
| 🛡️ セキュリティ | `95+` | 「95+」で所見ゼロ |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

フロントマターは、スキルを分類しやすく、発見しやすいものにする必要があります。

- `name` はディレクトリと正確に一致します
- 「説明」では**何を**と**いつ**の両方を説明します
- 「カテゴリ」、「タグ」、「ツール」、「複雑さ」、「リスク」、「ソース」、「作成者」、および日付がすべて存在します。

適切な説明の形状:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

不適切な説明の形状:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

最も強力なスキルには、一貫して次のセクションが含まれます。

- 「## 概要」
- `## このスキルをいつ使用するか`
- 「## ワークフロー」
- `## 例`
- 「## ベストプラクティス」
- 「## トラブルシューティング」
- `## 追加リソース`

これらのいずれかが欠けている場合でも、スコアは良好である可能性がありますが、優れているように見えることが難しくなります。---

### 3. Runnable Local Support

通常、最高得点のスキルには次のものが含まれます。

- `references/checklist.md`
- `scripts/` 内の 1 つ以上のヘルパー スクリプト
- `examples/` に少なくとも 1 つの実際に動作するサンプル
- スキルがエージェントの直接呼び出しを目的としている場合は、「agents/openai.yaml」
- `SKILL.md` からそれらのローカル ファイルへの直接リンク

これは、分類子が**バンドルされたサポート資料**を含むスキルを、外側のみを指すスキルよりも実用的なものとして扱うため、重要です。

推奨される最小値:```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

高得点の例は次のとおりです。

- コンクリート
- `bash` や `python` などの実際のフェンスを使用して入力
- ローカル スクリプトまたは反復可能なコマンドに関連付けられている
- ワークフローの代表者

良い:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

弱い：```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

スコアラーは、問題を認識するだけでなく、エージェントの回復に役立つトラブルシューティングに報酬を与えます。

推奨される形式:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

これは、次のような漠然としたメモよりも強力です。```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

分類器は、単に完成したスキルと本当に深いスキルを区別するようになりました。

役立つシグナル:

- 複数の具体例
- 複数のトラブルシューティングケース
- 関連スキルの指導
- より豊富なリファレンスパック
- スコアラーが直接カウントできる番号付きステップを含む表示可能な「## ワークフロー」セクション
- ワークフローを明確にする少なくとも 1 つの操作テーブルまたは実行マップ
- 複数のサポート ディレクトリまたはアセット タイプ
- 実行をガイドするのに十分なステップを含むワークフローセクション
- チェックリスト、ルーブリック、マトリックス、パケット、プレイブックなどの意思決定資産
- `references/`、`scripts/`、`agents/`、`examples/`、または `assets/` にわたるサポート パックの多様性の強化
- マークダウンの隣にヘルパーが 1 つも隠れていない、キットのように見えるのに十分な再利用可能なサポート ファイル
- ワークフローがサポート パックを正当化するほど複雑な場合は、複数のヘルパー ファイル
- トレードオフと故障モードをカバーするのに十分なボディの深さ
- スコアラーが洗練された書式設定と真に再利用可能なワークフローの深さを区別するようになったため、より緻密な操作ガイダンス

**あまり役に立たない**シグナル:

- 同じ指示を別の言葉で繰り返す
- 一般的なフィラーテキスト
- その下に内容を追加せずに見出しを追加します---

## 🧪 Fast Checklist Before You Commit

検証を実行する前に、このチェックリストを使用してください。

- 説明には**何を**、**いつ**と記載されています
- スキルは 1 つのワークフローに焦点を当てています
- 「## ワークフロー」が存在し、番号付きまたは箇条書きのステップが含まれています
- 実行可能なサンプルが少なくとも 1 つ存在します
- `references/`、`scripts/`、および理想的には `examples/` は `SKILL.md` からリンクされます。
- スキルがエージェント クライアントでの直接呼び出しを目的としている場合、「agents/openai.yaml」が存在します。
- トラブルシューティングでは「症状」と「解決策」を使用します。
- スキルは合理的に「L3」に分類できます。
- 危険なコマンドや疑わしいパスは存在しません

次に、次を実行します。```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- 説明は正しいですが、一般的すぎます
- マークダウンにはセクションがありますが、操作の深さはありません
- 例はローカル ヘルパーを指していません
- トラブルシューティングは存在しますが、診断ではありません
- タグまたはツール識別子が少なすぎます
- スキルは安全でクリーンですが、例外的なものとしてカウントするにはまだ浅すぎます---

## 🧭 Practical Rule

あなたのスキルが次のように感じられる場合:

-**テンプレート**: 合格する可能性があります
-**ガイド**: 良いスコアが得られる可能性があります
-**ワークフロー パッケージ**: トップのスコアを獲得する可能性が非常に高くなります。