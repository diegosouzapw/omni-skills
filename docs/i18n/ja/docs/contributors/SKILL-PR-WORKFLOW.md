# Skill PR Workflow (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


これは、1 つ以上のネイティブ スキルを追加または大幅にアップグレードするプル リクエストの正規リポジトリ フローです。

次の場合に使用します。

- `skills/` の下に新しいスキルを追加します
- 新しいドメインスキルによるバンドルの深化
- より大規模なサポートパック拡張の出荷
- メンテナがマージする前に、プライベート エンハンサーを使用してブランチを検証する## Target Outcome

強力なネイティブ スキル PR は次のようになります。

- `skills/` の下のネイティブ スキル
- パブリックバリデーターが分類してインデックスを付けるのに十分なコンテンツ
- 公的検証とテストに合格する
- PR中の自動エンハンサー処理
- 強化された派生製品が公開された場合のフォローアップ `skills_omni/` PR
- 必要に応じて元の言語で保存されたネイティブの取り込み
- 英語に書き直された厳選された強化された出力
- `skills_omni/` をネイティブ エンハンサーの取り込みに戻さない、ネイティブからキュレートされた一方向のフロー## Enhancer Outcome States

パブリック PR エンハンサは、メンテナに表示される 4 つの状態を報告するようになりました。

- 「完了」
  強化された派生版はクリーンに生成されており、コンパニオン `skills_omni/` 公開の対象となります。
- 「劣化」
  エンハンサーは終了しましたが、フォールバック パスが使用されたか、警告が生成されました。デリバティブを健全なものとして扱う前に、メンテナによるレビューが依然として期待されています。
- 「ブロックされました」
  実行は、公開を妨げるホスト型 OmniRoute プリフライトの失敗や候補検証の失敗など、インフラストラクチャまたは検証の問題によって停止されました。
- 「失敗しました」
  エンハンサーで予期しないランタイム エラーが発生したため、メンテナの調査が必要です。## Recommended Branch Shape

フォーカスされたブランチを作成します。```bash
git checkout -b feat/<short-skill-theme>
```

例:

- `feat/incident-observability-evals`
- `feat/devops-スキルパック`
- `feat/セキュリティスキルパック`## Native Intake Rules

公共の吸気面は意図的に許容されています。

最小：```text
skills/<skill>/
└── SKILL.md
```

推奨されていますが、摂取は必須ではありません:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

ネイティブの貢献は、粗かったり、不完全であったり、通常のサポート パックの標準から外れていたりする場合があります。それは意図的なものです。 「skills/」はネイティブの取り込みサーフェスであり、厳選された派生サーフェスではありません。

言語ポリシー:

- `skills/` の下のネイティブ インテークは任意の言語で記述できます
- エンハンサーは、来歴のために送信されたネイティブ スナップショットを保持します。
- `skills_omni/` の下にある厳選された派生物は常に英語で書かれている必要があります

より厳格な編集規制が以下に適用されるようになりました。

- 生成されたメタデータとセキュリティチェック
- プライベートエンハンサーのレビュー
- `skills_omni/` の下にあるフォローアップの厳選された派生版## Authoring Sequence

1. `skills/<スキル>/SKILL.md`を作成します。
2. 可能であればフロントマターを追加しますが、フロントマッターが欠落していたり​​不完全であっても、それ自体がネイティブの取り込みをブロックすることはなくなりました。
3. `agents/`、`references/`、`examples/`、および `scripts/` がすでにある場合は追加します。
4. スキルが既存のバンドルを強化する場合は、「data/bundles.json」を更新します。
5. PR を開きます。残りはリポジトリの自動化によって行われます。## Validation Sequence

寄稿者は、PR を開く前に、この正確なシーケンスを実行できます。```bash
npm run validate
npm run build
npm test
git diff --check
```

変更がランタイムまたはパッケージ化の動作にも影響する場合は、次のコマンドも実行します。```bash
npm run smoke
```

## What Happens Automatically During the PR

PR が開くか同期し、`skills/` とオプションの `data/bundles.json` の下にあるネイティブ スキル インテーク ファイルのみを操作する場合、パブリック リポジトリはプライベート エンハンサーを自動的にトリガーするようになりました。

現在の自動化フロー:

1. パブリックの「スキルの検証」ワークフローが PR 上で実行され、検証、ビルド、生成されたアーティファクト、およびテストをチェックします。
2. パブリックの「PR スキルの強化」ワークフローが並行して開始され、変更されたネイティブ スキルを「ライブ」モードで 1 つずつ処理します。
3. エンハンサーは、「skills/」からネイティブ スキルを読み取り、現在のベスト プラクティスを調査し、レビューされた拡張候補をプライベート ワークスペースに書き込みます。
4. エンハンサーは、必要に応じて上流の取り込みスナップショットを元の言語で保持しますが、厳選された出力を英語で書き換えます。
5. エンハンサーは進行状況をソース PR にポストバックします。
6. エンハンサーは、スキルが処理されるたびに、バッチ合計と最新の状態を含む PR ステータス コメントを更新します。
7. 終了すると、強化された派生ファイルが `skills_omni/` に具体化され、`completed` および `degraded` 出力のみに対してパブリック リポジトリ内のコンパニオン PR が開かれるか更新されます。
8. PR が「main」にマージされた後、プライベート リポジトリ対応ポーラーは、変更されたネイティブ スキルを再処理し、「workspace/enhanced/skills/<skill>/」を更新し、プライベート拡張ベースラインを最新のパブリック ネイティブ ソースと一致させます。
9. マージ後、パブリック リリース ワークフローによって npm パッケージのバージョンが上がり、カタログ アーティファクトが再生成され、リリースが公開され、新しいバージョンに自動的にタグが付けられます。

レート制限:

- PR エンハンサーは現在**1 分あたり 1 つのスキル**を処理しています
- したがって、40 個のネイティブの新しいスキルを持つ PR は、エンハンサー キューに約 40 分間留まる可能性があります。
- PR は、進行中の CI 実行として機能することと、スキルごとに進歩する進行状況のコメントを示します。

寄稿者はエンハンサーを手動で実行する必要はありません。## No-Loop Rule For `skills_omni/`

キュレーションされたサーフェスは意図的に一方向です。

- ネイティブ入力は「skills/」を通じて入力されます
- プライベート エンハンサーはネイティブ入力をレビューします
- 厳選された出力が `skills_omni/` に提案されます
- `skills_omni/` がネイティブの摂取として再び扱われることはありません
- その後のネイティブ更新は依然として「skills/」を通じて再入力され、再処理後にプライベート拡張ベースラインを置き換えます

リポジトリはその境界を強制するようになりました。

- `skills_omni/`を変更する直接パブリックPRは拒否されます
- そこでは、「skills-omni/pr-*」ブランチファミリーからのオートメーションで作成されたコンパニオン PR のみが受け入れられます。
- `skills/` と `skills_omni/` の両方を同時に変更しようとする混合 PR は拒否されます。## Automatic Versioning After Merge

スキルを伴う「main」へのマージにより、リポジトリ リリース ワークフローが自動的にトリガーされるようになりました。

現在のパッケージ バージョン ポリシー:

- パッチは、条件を満たすマージごとに「+1」ずつ増分します。
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- `.10` の後、パッケージは次のマイナーにロールされ、パッチがリセットされます
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

現在のリリース トリガー パス:

- `スキル/**`
- `スキルオムニ/**`
- `data/bundles.json`

その自動リリース ジョブ:

1. `package.json` から次のパッケージのバージョンを計算します
2. `package.json` と `package-lock.json` をバンプします。
3. `metadata.json`、`skills_index.json`、`dist/`、および `docs/CATALOG.md` を再生成します。
4. 厳密なリリース検証パイプラインを実行する
5. バージョンバンプを「main」にコミットします。
6. 新しいバージョンの Git タグを作成します
7. npm および GitHub リリース アーティファクトを公開します

ロールアウトに関する重要な注意事項:

- GitHub は、新しいワークフロー ファイルがデフォルト ブランチに到達した後でのみ、そのファイルをアクティブなリポジトリ ワークフローとして登録します。
- 「Enhance PR Skills」が「main」に実装されるまで、寄稿者は文書化されたプロセスを読むことができますが、GitHub はまだパブリック PR でそのワークフローを自動的に実行しません。
- ワークフローが「main」にマージされた後、上記の動作が将来のネイティブ スキル PR のデフォルトの取り込みパスになります。## Native vs Enhanced

このリポジトリには 2 つの異なるサーフェスが含まれています。

- `スキル/`
  ネイティブ摂取。これにより、送信された元の投稿が保存されます。
- `スキルオムニ/`
  自動化によって提案され、オムニ スキル チームによって維持されるオムニ強化された派生出力。

`skills_omni/` の帰属ルール:

- 強化された派生はオムニメンテナンスになります
- 元の貢献者と上流のネイティブ スキルはクレジットされたままになります
- 各拡張ディレクトリには、アップストリーム パス、PR、作成者、およびソース コンテキストを含む `ATTRIBUTION.md` ファイルが保存されます。
- 各拡張ディレクトリは厳選された出力のみであり、ネイティブ エンハンサー インテーク パスに再送信しないでください。
- 上流のネイティブ ソースが英語でない場合でも、各拡張ディレクトリは英語で出力されることが想定されます。## Manual Maintainer Commands

自動化は通常の PR 取り込みをカバーしますが、メンテナーは必要に応じてプライベート エンハンサーを手動で実行できます。

ブランチ差分に対するバッチ:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

単一スキルのレビュー:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

スキルごとに期待されるエンハンサー出力:

- `workspace/incoming/original/<run-id>/<skill>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

PR 本文には次のように記載する必要があります。

- どのようなスキルが追加またはアップグレードされたか
- どのバンドルまたはワークフローを深化させるか
- 実行された検証
- 自動エンハンサーが実行されたかどうか
- `skills_omni/` コンパニオン PR を開いたか更新したか
- 帰属またはフォローアップのクリーンアップに関する例外的なメンテナーのメモ## Reviewer Checklist

- ネイティブの摂取は合法的であり、悪意はありません
- 生成されたメタデータとマニフェストが更新されました
- バンドルのアップデートは意図的です
- 公開検証とビルド出力は緑色です
- エンハンサーステータスのコメントは、実際に変更されたスキルと最終結果の状態と一致します
- `skills_omni/` コンパニオン PR は帰属を正しく保持します## Example PR Scope

PR の強力な例では、次のようなテーマ セットを追加できます。

- 1 つの可観測性または DevOps スキル
- 1 つのインシデントまたはセキュリティ スキル
- AI 評価またはプロンプト スキル 1 つ

これは、PR を完全なカタログの書き換えにせずに、スコアラー、自動エンハンサー、「skills_omni/」公開フロー、バンドル、およびアトリビューション モデルを実行するのに十分な大きさです。