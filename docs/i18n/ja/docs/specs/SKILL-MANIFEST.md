# 📋 Skill Manifest Specification (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**ビルド パイプライン中に各 `SKILL.md` から生成される機械可読な JSON マニフェスト - すべてのランタイム サーフェスによって消費される単一のデータ コントラクト。**---

## 📊 Status

|特集 |状態 |
|:--------|:------|
| ✅ SKILL.md から自動生成 |実装済み |
| ✅ CLI、API、MCP、A2A によって消費される |実装済み |
| ✅ チェックサム付きのアーカイブ |実装済み |
| ✅ セキュリティ分類 |実装済み |

>**重要**: マニフェストは**ビルド アーティファクト**です。寄稿者は `SKILL.md` を作成します。パイプラインは JSON マニフェストを自動的に派生します。---

## 🎯 Purpose

マニフェストは、**すべてのランタイム サーフェス**が同じ正規化された形状を使用するように存在します。

|表面 |マニフェストの使用方法 |
|:----------|:----------|
| 🖥️**CLI**|検索、インストール計画、医師の診断 |
| 🌐**API**|エンドポイント応答、フィルタリング、ダウンロード リンク |
| 🔌**MCP**|ツールの応答、リソースの内容 |
| 🤖**A2A**|検出および推奨ペイロード |---

## 📁 Output Locations

|アーティファクト |パス |
|:---------|:-----|
| 📊 ルートメタデータ | `メタデータ.json` |
| 📊 スキルごとのメタデータ | `skills/<スキル>/metadata.json` |
| 📋 スキルインデックス | `skills_index.json` |
| 📚 発行済みカタログ | `dist/catalog.json` |
| 📌 スキルごとのマニフェスト | `dist/manifests/<スキル>.json` |
| 📦 zip アーカイブ | `dist/archives/<スキル>.zip` |
| 📦 Tarball アーカイブ | `dist/archives/<スキル>.tar.gz` |
| 🔒 チェックサムマニフェスト | `dist/archives/<スキル>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

|フィールド |説明 |
|:------|:-----------|
| `スキーマ_バージョン` |マニフェスト スキーマのバージョン |
| `id` | 「name」フィールドからの安定したスキル識別子 |
| `ナメクジ` | `skills/` の下のディレクトリスラッグ |
| `表示名` |最初の見出しから人間が読めるタイトル |### 📝 Metadata

|フィールド |説明 |
|:------|:-----------|
| `説明` |フロントマターからの短い要約 |
| `バージョン` |スキルのバージョン (npm パッケージのバージョンとは独立) |
| `カテゴリー` |正規カテゴリ (正規化) |
| `生のカテゴリ` |フロントマターのオリジナルカテゴリ |
| `分類法` |推測されたフォールバックを備えた完全な分類メタデータ |
| `タグ` |検索可能なタグ |
| `複雑さ` | `初心者` · `中級者` · `上級` · `専門家` |
| 「リスク」 | `安全` · `注意` · `攻撃的` · `重大` |
| `ソース` | `オムニチーム` · `コミュニティ` · `公式` |
| `著者` |属性文字列 |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

|フィールド |説明 |
|:------|:-----------|
| `エントリポイント` |正規の `SKILL.md` パス |
| `paths.root` |リポジトリ内のスキル ディレクトリ |
| `paths.manifest` | `dist/` に生成されたマニフェスト パス |### 🖥️ Compatibility

|フィールド |説明 |
|:------|:-----------|
| `ツール` |フロントマターからのツール識別子 |
| `install_targets` |ツールごとのインストールメタデータ |

各インストール ターゲットには、「tool」、「scope」、「default_path」、「installer_flag」、「current_installer_behavior」、「invocation」が含まれます。### 📦 Resources

|フィールド |説明 |
|:------|:-----------|
| `サブリソース` |スキルのサブディレクトリ (`リファレンス`、`エージェント`、`アセット`) |
| `アーティファクト数` |スキル パッケージ内の合計ファイル数 |
| `参照数` |参照ドキュメント数 |
| `エージェント数` |エージェント構成数 |
| `資産数` |アセット ファイル数 |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

|フィールド |説明 |
|:------|:-----------|
| `戦略` |インストール戦略 (例: `copy-skill-directory`) |
| `current_installer` |人間が判読できるインストール動作 |
| `レシピ` |クライアントごとのインストール レシピ |### 📊 Classification

|セクション |フィールド |
|:------|:------|
| 🎯「成熟度」 | `スキルレベル`、`スキルレベルラベル` |
| 📋 `ベストプラクティス` | `スコア` (0-100) |
| ⭐「品質」 | `スコア` (0-100) |
| 🛡️「セキュリティ」 | `スコア`、`ステータス` |
| ✅「検証」 | `ステータス` |### 📝 Content

派生信号: `body_length`、`content_length`、`body_lines`、`word_count`、および例、トラブルシューティング セクションなどの構造フラグ。### 📁 Artifacts

スキル ディレクトリ内に同梱されるすべてのファイルの配列:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**アーティファクトの種類**: `entrypoint` · `reference` · `agent` · `asset` · `license` · `support`### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

|フィールド |説明 |
|:------|:-----------|
| `entrypoint_sha256` | SKILL.mdのハッシュ |
| `package_sha256` |順序付けられた成果物リストからの決定的なダイジェスト |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 リポジトリパッケージのバージョンとスキルのバージョンは別の問題です。パッケージは現在「0.1.3」ですが、個々のスキルには独自のセマンティック バージョンが含まれています。---

## ⚠️ Compatibility Notes

|ルール |理論的根拠 |
|:-----|:----------|
| ✅ リポジトリから派生可能である必要があります |手動によるマニフェストの作成は必要ありません。
| ✅ 新しいオプションフィールドを追加できます |上位互換性 |
| ⚠️ 既存のフィールドは安定したままでなければなりません |下位互換性 |
| 🚫 手書きのマニフェストは禁止 |ビルド時の導出が真実の源である |