# 🌐 Catalog API Surface (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**スキルの検出、検索、比較、インストール計画、アーティファクトのダウンロードのための読み取り専用 HTTP API。**---

## 📊 Status

|特集 |状態 |
|:--------|:------|
| ✅ カタログエンドポイント |実装済み |
| ✅ 認証 (ベアラー + API キー) |実装済み |
| ✅ 管理者ランタイム認証 |実装済み |
| ✅ レート制限 |実装済み |
| ✅ 監査ログ |実装済み |
| ✅ CORS および IP 許可リスト |実装済み |
| ✅ メンテナンスモード |実装済み |
| ✅ アーカイブのダウンロード |実装済み |
| ✅ OpenAPI 仕様 |実装済み |
| ⚠️ ガバナンス バックエンド |環境主導のインプロセスベースライン。外部ゲートウェイまたは IdP は引き続きオプションです。---

## 🎯 Purpose

API は、以下のレジストリ スタイルのサーフェスを提供します。

- 📋 品質、セキュリティ、カテゴリ、リスクなどによるスキルのリストとフィルタリング
- 📌 個別のスキルマニフェストの取得
- 🔎 全文検索とマルチスキル比較
- 📦 在庫状況を含むバンドルリスト
- 📐 読み取り専用のインストール計画の生成
- 📥 生成されたアーティファクト、アーカイブ、チェックサムマニフェストのダウンロード

この同じカタログとマニフェストの表面は、次の基礎にもなります。

- ローカル CLI インストール計画
- MCP 読み取り専用検出応答
- A2A 検出とインストール計画のハンドオフ
- 外部認証が最上位に階層化されたプライベート カタログの可能性---

## クイックスタート

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**デフォルト**: `127.0.0.1:3333`---

## 🔐 Security Controls

すべてのセキュリティ制御は環境主導型であり、オプションです。

|コントロール |変数 |例 |
|:--------|:-----------|:----------|
| 🔑**ベアラー認証**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `私を置き換えてください` |
| 🗝️**API キー認証**| `OMNI_SKILLS_HTTP_API_KEYS` | `キーa、キーb` |
| 🛂**管理者認証**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `管理者秘密` |
| 🚦**レート制限**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**監査ログ**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**監査形式**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` または `text` |
| 📄**監査ファイル**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS 許可リスト**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com、https://*.example.org` |
| 🧱**IP 許可リスト**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**信頼できるプロキシ**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `ループバック` |
| 🚧**メンテナンスモード**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**その後再試行してください**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**動作:**
- 🟢 `/healthz` は**常に認証されていない**
- 🔒 認証が有効な場合、他のすべてのルートには認証が必要です
- 🛂 `/admin/runtime` を有効にすると管理者トークンが必要です
- 🚦 レート制限は `X-RateLimit-*` 応答ヘッダーで処理中です
- 🧾 すべての応答には `X-Request-Id` が含まれます
- 🚧 メンテナンス モードは、非健全性、非管理ルートに対して「503」を返します。### ✅ Current governance decision

現在のプロジェクトの方向性は、**パブリック展開またはプライベート展開に同じカタログ形式を再利用**し、必要に応じて外部で認証をレイヤー化することです。

つまり:

- マニフェストと API シェイプは共有されたままになります
- セルフホスト型およびローカル展開は、インプロセスのベースラインを維持できます。
- より高度なホスト型ガバナンスは、データ モデルをフォークすることなく、後で外部ゲートウェイまたはエンタープライズ認証層に移行できます。### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

|方法 |パス |説明 |
|:------|:-----|:----------|
| `GET` | `/healthz` |ヘルスチェック（未認証） |
| `GET` | `/openapi.json` |動的 OpenAPI 3.1 仕様 |
| `GET` | `/admin/ランタイム` |ガバナンスとランタイム スナップショット (有効な場合は管理者認証) |### 📚 Catalog & Skills

|方法 |パス |説明 |
|:------|:-----|:----------|
| `GET` | `/v1/スキル` |フィルタを使用してスキルをリストする |
| `GET` | `/v1/skills/:id` |個別のスキルマニフェストを取得する |
| `GET` | `/v1/検索` |全文検索 |
| `GET` | `/v1/compare?ids=id1,id2` |複数のスキルを比較する |
| `GET` | `/v1/バンドル` |バンドルと可用性をリストする |
| `ポスト` | `/v1/install/plan` |インストール計画を作成する |### 🔎 List/Search Filters

|フィルター |例 |
|:------|:------|
| `カテゴリー` | `?カテゴリー=開発` |
| `ツール` | `?ツール=カーソル` |
| 「リスク」 | `?リスク=安全` |
| `ソート` | `?sort=quality\|best-practices\|level\|security\|name` |
| `注文` | `?order=asc\|desc` |
| `min_quality` | `?min_quality=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `min_level` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `検証ステータス` | `?validation_status=passed` |
| `セキュリティステータス` | `?security_status=passed` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

|方法 |パス |説明 |
|:------|:-----|:----------|
| `GET` | `/v1/カタログ/ダウンロード` |フルカタログのダウンロード |
| `GET` | `/v1/skills/:id/artifacts` |スキルアーティファクトのリスト |
| `GET` | `/v1/skills/:id/archives` |スキルアーカイブのリスト |
| `GET` | `/v1/skills/:id/downloads` |利用可能なすべてのダウンロード リンク |
| `GET` | `/v1/skills/:id/download/manifest` |スキルマニフェスト JSON |
| `GET` | `/v1/skills/:id/download/entrypoint` |スキル SKILL.md |
| `GET` | `/v1/skills/:id/download/artifact?path=<パス>` |特定のアーティファクト |
| `GET` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` |スキルアーカイブ |
| `GET` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` |切り離された署名 |
| `GET` | `/v1/skills/:id/download/archive/checksums` | SHA-256 チェックサム |---

## 🔗 Link Enrichment

API を通じてリクエストが処理されると、サーバーは、受信したリクエストの送信元から派生した絶対 URL を使用して、マニフェスト、アーティファクト リスト、およびインストール プランを**自動的に強化**します。これは実行時の強化であり、`dist/manifests/*.json` に組み込まれるわけではありません。---

## 📋 Install Plan Notes

> ⚠️**インストール プランはプレビューであり、リモート書き込みではありません。**

API が呼び出し元のマシンにインストールされることはありません。返される内容は次のとおりです。
- 📌 選択されたスキルのメタデータ
- ⚠️ バンドルメンバーが見つからない場合の警告
- 🖥️ ローカルで実行する具体的な CLI コマンド
- 🔗 リクエスト元が利用可能な場合のパブリック ダウンロード URL---

## 🔌 Relationship to MCP

MCP サーバーは、構成時に同じパブリック API URL を再利用します。```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

これにより、MCP インストール プレビューは、ローカル リポジトリ パスだけではなく、具体的なマニフェストとアーティファクトの URL を返すことができます。---

## 🧭 Admin Runtime Snapshot

「GET /admin/runtime」は、ホストされた診断に役立つガバナンス スナップショットを返します。

- アクティブな認証方法
- 管理者認証ステータス
- レート制限ウィンドウと最大値
- CORS 許可リスト
- IP許可リスト
- メンテナンスモード状態
- 監査の宛先と形式
- 現在のカタログの合計
- 追跡可能性のためにリクエスト ID をエコーする