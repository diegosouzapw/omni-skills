# ✅ Quality Bar (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**オムニ スキル リポジトリに受け入れられるスキルの最小要件と推奨事項。**

特にトップバンドのスコアを対象とした作成ガイダンスについては、[ハイスコア プレイブック](HIGH-SCORE-PLAYBOOK.md) を参照してください。

公開されたカタログの現在のベンチマーク:

- 32 の公開スキル
- 平均品質スコア「96.3」
- ベストプラクティスの平均スコア「98.7」
- 平均セキュリティスコア「95.0」---

## 🔒 Required (Must Pass)

| # |要件 |確認方法 |
|:--|:------------|:--------------|
| 1️⃣ |**有効な前付**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**明確な説明**|スキルの動作をワンライナーで説明する必要があります (10 文字以上) |
| 3️⃣ |**名前はディレクトリと一致します**| `name:` フィールドはフォルダー名と正確に一致します。
| 4️⃣ |**概要セクション**|マークダウン本文の目的の簡単な説明 |
| 5️⃣ |**「いつ使用するか」セクション**|少なくとも 2 つの具体的な使用シナリオ |
| 6️⃣ |**実行可能な指示**| AI エージェントが実行できるステップバイステップのコンテンツ |
| 7️⃣ |**生成されたメタデータ**|バリデーターは `skills/<skill>/metadata.json` を正常に発行します。---

## ⭐ Recommended (Improves Score)

| # |推薦 |スコアへの影響 |
|:--|:------|:---------------|
| 8️⃣ |**例**— 期待される出力を含む少なくとも 1 つの具体的な例 | 📈 品質 +10-15 |
| 9️⃣ |**ベスト プラクティス**— ✅ 実行する / ❌ 実行しない ガイダンス | 📈 ベストプラクティス +5 |
| 🔟 |**ツールでテスト済み**— 少なくとも 1 つの AI コーディング アシスタントで検証済み | 📈 品質 +5 |
| 1️⃣1️⃣ |**タグ**— 発見に関連する検索可能なタグ | 📈 ベストプラクティス +10 |
| 1️⃣2️⃣ |**カテゴリ**— 1 つの正規カテゴリに割り当てられます。 📈 ベストプラクティス +10 |
| 1️⃣3️⃣ |**トラブルシューティング**— 具体的な「症状」と「解決策」のガイダンス | 📈 ベストプラクティス +5-10 |
| 1️⃣4️⃣ |**ローカル サポート アセット**— スキルからリンクされた `references/`、`scripts/`、および理想的には `examples/` 📈 ベストプラクティス +10 |
| 1️⃣5️⃣ |**健全な分類**— 成熟度 L3、品質 85+、ベスト プラクティス 90+ | 📈 全体的な階層 |
| 1️⃣6️⃣ |**重大なセキュリティに関する検出結果はありません**— 静的スキャナはクリーンに合格します | 🛡️ セキュリティ 100 |---

## ❌ Reasons for Rejection

|問題 |なぜ |
|:------|:------|
| ❌ フロントマターが欠落しているか無効です |検証パイプラインを中断する |
| ❌ 名前がディレクトリと一致しません |カタログ生成を中断します |
| ❌ 空の、または些細な短い説明 |ユーザーがスキルを発見できない |
| ❌ 実用的なコンテンツがない (リンクまたはスタブのみ) |エージェントは何も実行できません。
| ❌ 明確な改善が見られないまま重複する |価値を追加します。クローンではありません |
| ❌ 「リスク: 攻撃的」タグのない攻撃的なコンテンツ |安全性とコンプライアンス |
| ❌ セキュリティに関する重大な調査結果 |即時窃盗、破壊的コマンドなど |---

## 🧪 Verify Locally

```bash
# Run validation
npm run validate

# Check your scores
cat skills/<your-skill>/metadata.json | jq '.quality, .best_practices, .security'

# Full build + smoke check
npm run build
npm run smoke
```

---

## 📊 Score Reference

|寸法 |素晴らしい |良い |仕事が必要 |
|:----------|:----------|:-----|:----------|
| ⭐**品質**| 80+ (プラチナ) | 60-79 (ゴールド/シルバー) | <60 (ブロンズ/スターター) |
| 📋**ベストプラクティス**| 90+ (優秀) | 70-89 (良好) | <70 (公正/必要な労働) |
| 🛡️**セキュリティ**| 95+ (強化) | 80-94 (安全) | <80 (要見直し) |
| 🎯**成熟度**| L3 (スクリプト+テスト) | L2（指示） | L1 (メタデータのみ) |---

## 🧭 What High Scores Require

一貫してトップバンドに到達するには、スキルに次のものが含まれている必要があります。

- スキルが**何をする**か、**いつ**使用する必要があるかを説明する強力な前付説明
- 「いつ使用するか」、「ワークフロー」、「例」、「ベスト プラクティス」、「トラブルシューティング」、「追加リソース」の明示的なセクション
- `references/`、`scripts/`、理想的には `examples/` にあるローカル サポート資料。`SKILL.md` から直接リンクされています。
- スキルがエージェント クライアントで直接呼び出される場合のエージェント メタデータは「agents/openai.yaml」の下にあります。
- ワークフローにメリットがある場合の、小さな操作テーブルまたは同等の実行マップ
- ローカル ヘルパー スクリプトまたは反復可能なコマンドを指す実行可能なサンプルを少なくとも 1 つ
- 一般的な警告ではなく、「症状」と「解決策」として書かれたトラブルシューティング
- 単に整形式の散文ではなく、「L3」と称するのに十分な深さ
- トップバンドの品質が必要な場合は、より強力なワークフローの深さ、意思決定資産、およびサポートパックの多様性
- チェックボックスをカバーするためだけでなく、再利用できるほど奥深いサポート パック
- 一貫してトップバンドが必要な場合は、少なくとも 4 つの意味のあるサポート ファミリ、または再利用可能なファイルに同等の深さ