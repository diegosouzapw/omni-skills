# 🛡️ Security Validation and Distribution (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**公開されたすべてのスキルのセキュリティ スキャン、アーカイブ生成、オプションの署名、および配布パッケージ。**---

## 📊 Status

|特集 |状態 |
|:--------|:------|
| ✅ 静的セキュリティスキャナ |常に有効 |
| ✅ スキルごとのメタデータ分類 |実装済み |
| ✅ スキルごとのアーカイブ (zip/tar.gz) |実装済み |
| ✅ SHA-256 チェックサム マニフェスト |実装済み |
| ✅ CI スキャナーゲートオンリリースタグ |実装済み |
| ✅ 検証済み tarball からの npm パブリッシュワークフロー |実装済み |
| ⚙️ ClamAV スキャン |オプションのエンリッチャー |
| ⚙️ VirusTotal ハッシュ ルックアップ |オプションのエンリッチャー |
| ✅ 独立した署名 |実装済み |
| ✅ CI 強制署名 |リリースタグに実装 |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

検証中にすべてのスキルをスキャンします。

|ターゲット |何がスキャンされるのか |
|:------|:------|
| 📝 `スキル.md` |主なスキル内容 |
| 📄 マークダウン/テキスト ファイル |パッケージ化された参考資料とドキュメント |
| ⚙️ スクリプト |パッケージ化された自動化スクリプト |

**ルールファミリー:**

|ルール |例 |
|:-----|:----------|
| 🎭**即時注射**|漏洩パターン、指示のオーバーライド |
| 💣**破壊的なコマンド**| `rm -rf`、`format`、`del /s` |
| 🔑**権限昇格**| `sudo`、`chmod 777`、setuid パターン |
| 📂**不審なパス**| `/etc/shadow`、`~/.ssh`、認証情報ファイル |
| ⚠️**危険なプリミティブ**| `shell=True`、`pickle.load`、`eval`、`extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- `PATH` に `clamscan` が必要です
- パッケージ化されたファイルをスキャンして既知のマルウェアを検出します
- 結果はスキルメタデータに記録されます---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**ハッシュ ルックアップのみ**- 通常の検証中にファイルはアップロードされません
- 不明なファイルはローカルのみに残ります
- ビルドを**決定論的**かつ CI に依存しないようにします### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

厳格なリリースゲート:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

このステップは、生成された `skills/*/metadata.json` を読み取り、必要なスキャナーが実行されなかったり、検出が報告されなかった場合は失敗します。---

## 📊 Security Output Shape

セキュリティ データはすべてのスキルのメタデータで出力されます。```json
{
  "security": {
    "score": 100,
    "tier": "hardened",
    "status": "passed",
    "findings_count": 0,
    "findings": [],
    "signals": {
      "scanned_files": 3,
      "script_files": 0,
      "binary_like_files": 0
    },
    "scanners": {
      "static": { "enabled": true, "status": "completed" },
      "clamav": { "enabled": false, "status": "disabled" },
      "virustotal": { "enabled": false, "status": "disabled" }
    }
  }
}
```

> このブロックはマニフェストとカタログ ビューに伝播され、CLI、API、MCP で**セキュリティ スコアによるフィルタリングとランク付け**が可能になります。---

## 📦 Archive Outputs

公開された各スキルは以下を生成します。

|ファイル |フォーマット |
|:-----|:----------|
| `dist/archives/<スキル>.zip` | ZIPアーカイブ |
| `dist/archives/<スキル>.tar.gz` | Tarball アーカイブ |
| `dist/archives/<スキル>.checksums.txt` | SHA-256 チェックサム マニフェスト |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actions でタグ (`v*`) がリリースされるようになりました。

1. git タグが「package.json」と一致することを確認します。
2. ClamAV をインストールして更新します
3. GitHub シークレットからリリース署名キーをデコードします。
4.「npm run release:verify」を実行します。
5. `npm Pack` を使用して tarball をパッケージ化します。
6. その正確な tarball を出所とともに npm に公開します
7. カスタム メモと検証アセットを添付した GitHub リリースを作成します---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> 公開鍵が指定されていない場合、ビルドは `openssl` を使用して公開鍵を派生し、それを `dist/signing/` に配置します。

有効にすると、「.sig」ファイルがアーカイブとチェックサム マニフェストの横に出力されます。

CI では、リリース タグに次の署名が必要になりました。

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` または `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- オプションの「OMNI_SKILLS_SIGN_PUBLIC_KEY_B64」または「OMNI_SKILLS_SIGN_PUBLIC_KEY」---

## ⚠️ Current Limitations

|制限 |ステータス |
|:-----------|:------|
| VirusTotal アップロードの提出 |デフォルトの検証から意図的に除外されています |
|署名の実施 |リリースタグに適用されます。ローカル ビルドは署名なしで実行される可能性があります。
|ホスト型ガバナンス |組み込みの認証、管理ランタイム、CORS/IP ホワイトリスト、メンテナンス モード、監査ログが用意されています。外部ゲートウェイは引き続きオプションです。