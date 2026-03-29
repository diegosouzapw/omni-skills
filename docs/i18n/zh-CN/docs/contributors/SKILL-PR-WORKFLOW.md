# Skill PR Workflow (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


这是添加或大幅升级一项或多项本机技能的拉取请求的规范存储库流程。

在以下情况下使用它：

- 在“技能/”下添加新技能
- 深化新领域技能的捆绑
- 发布更大的支持包扩展
- 在维护者合并分支之前使用私有增强器验证分支## Target Outcome

强大的本地技能公关具有以下特点：

- `skills/` 下的原生技能
- 足够的内容供公共验证器对其进行分类和索引
- 通过公开验证和测试
- PR期间自动增强剂处理
- 发布增强型衍生品时的后续“skills_omni/” PR
- 需要时以原始语言保留母语摄入量
- 精心策划的增强输出重写为英语
- 一种单向原生到策划流程，不会将“skills_omni/”反馈回原生增强剂摄入量## Enhancer Outcome States

公共 PR 增强器现在报告四个维护者可见的状态：

- `已完成`
  增强的衍生品是干净地生成的，并且有资格用于配套的“skills_omni/”出版物。
- ‘降级’
  增强器完成了，但它使用了后备路径或产生了警告。在将衍生品视为健康之前，仍需进行维护者审查。
- `被阻止`
  运行因基础设施或验证问题而停止，例如托管 OmniRoute 预检失败或应阻止发布的候选验证失败。
- `失败`
  增强器遇到了意外的运行时错误，需要维护人员进行调查。## Recommended Branch Shape

创建一个重点分支：```bash
git checkout -b feat/<short-skill-theme>
```

示例：

- `壮举/事件可观察性评估`
- `壮举/devops-技能包`
- `壮举/安全技能包`## Native Intake Rules

公共入口表面是故意允许的。

最低限度：```text
skills/<skill>/
└── SKILL.md
```

建议但不再需要摄入：```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

本机贡献可能很粗糙、不完整或超出正常的支持包标准。那是故意的。 “技能/”是原生的吸收表面，而不是策划的衍生表面。

语言政策：

- “技能/”下的母语摄入可以用任何语言书写
- 增强器保留提交的本机快照以供出处
- `skills_omni/` 下的精选衍生品必须始终用英语编写

更严格的编辑栏现在适用于：

- 生成的元数据和安全检查
- 私人增强剂审查
- `skills_omni/` 下的后续策划衍生品## Authoring Sequence

1. 创建`skills/<skill>/SKILL.md`。
2. 如果可以的话，添加 frontmatter，但是缺失或不完整的 frontmatter 本身不再阻碍本地摄入。
3. 如果已经有 `agents/`、`references/`、`examples/` 和 `scripts/`，请添加它们。
4. 如果技能加深了现有捆绑包，则更新“data/bundles.json”。
5. 打开 PR。回购自动化现在完成剩下的工作。## Validation Sequence

贡献者可以在打开 PR 之前运行这个确切的序列：```bash
npm run validate
npm run build
npm test
git diff --check
```

如果更改还影响运行时或打包行为，则还运行：```bash
npm run smoke
```

## What Happens Automatically During the PR

当 PR 打开或同步时，它仅涉及“skills/”下的本机技能摄入文件以及可选的“data/bundles.json”，公共存储库现在会自动触发私有增强器。

当前自动流程：

1. 公共“验证技能”工作流程在 PR 上运行，并检查验证、构建、生成的工件和测试。
2. 公共“增强公关技能”工作流程并行启动，并在“实时”模式下一一处理更改后的本地技能。
3. 增强者从“skills/”中读取本机技能，研究当前最佳实践，并在私有工作区中编写经过审查的增强候选。
4. 增强器在需要时将上游摄入快照保留为其原始语言，但用英语重写策划输出。
5. 增强器将进度发布回源 PR。
6. 增强器在每次处理技能后更新 PR 状态注释，包括批次总数和最新状态。
7. 完成后，它将增强的衍生品具体化为“skills_omni/”，并在公共存储库中打开或更新配套 PR，仅用于“已完成”和“已降级”输出。
8. PR 合并到 `main` 后，私有存储库感知轮询器会重新处理任何更改的本机技能，刷新 `workspace/enhanced/skills/<skill>/`，并使私有增强基线与最新的公共本机源保持一致。
9. 合并后，公开发布工作流程会更改 npm 包版本、重新生成目录工件、发布版本并自动标记新版本。

速率限制：

- PR 增强器当前每分钟处理**1 个技能**
- 因此，具有 40 项原生新技能的 PR 可以在增强器队列中停留大约 40 分钟
- PR 显示工作作为正在进行的 CI 运行以及逐项提升技能的进度评论

贡献者不需要手动运行增强器。## No-Loop Rule For `skills_omni/`

精心策划的表面是有意单向的：

- 原生输入通过`skills/`进入
- 私人增强器审查本机输入
- 建议将策划输出纳入“skills_omni/”
- `skills_omni/` 不再被视为本地摄入
- 后来的原生更新仍然通过`skills/`重新进入并在重新处理后替换私有增强基线

存储库现在强制执行该边界：

- 修改 `skills_omni/` 的直接公共 PR 被拒绝
- 仅接受来自“skills-omni/pr-*”分支系列的自动化编写的配套 PR
- 尝试同时更改“skills/”和“skills_omni/”的混合 PR 会被拒绝## Automatic Versioning After Merge

与“main”的技能合并现在会自动触发存储库发布工作流程。

当前包版本政策：

- 对于每个合格的合并，补丁增量为“+1”
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- 在“.10”之后，软件包滚动到下一个次要版本并重置补丁
- `0.0.10`→`0.1.0`
- `0.1.10`→`0.2.0`

当前发布触发路径：

- `技能/**`
- `技能_全能/**`
- `数据/bundles.json`

自动释放作业：

1. 从 `package.json` 计算下一个包版本
2. 碰撞 `package.json` 和 `package-lock.json`
3. 重新生成 `metadata.json`、`skills_index.json`、`dist/` 和 `docs/CATALOG.md`
4.运行严格的发布验证管道
5. 将版本更新提交回 `main`
6.为新版本创建Git标签
7. 发布 npm 和 GitHub Release 工件

重要的推出说明：

- GitHub 仅在新的工作流程文件到达默认分支后将其注册为活动存储库工作流程。
- 在“增强 PR 技能”登陆“main”之前，贡献者可以阅读记录的流程，但 GitHub 还不会在公共 PR 上自动执行该工作流程。
- 工作流程合并到“main”后，上述行为将成为未来原生技能 PR 的默认摄入路径。## Native vs Enhanced

该存储库现在有两个不同的表面：

- `技能/`
  原生摄入。这保留了提交的原始贡献。
- `技能_全能/`
  由自动化提出并由 Omni 技能团队维护的 Omni 增强衍生输出。

`skills_omni/` 的归因规则：

- 增强的衍生品成为全能维护的
- 原始贡献者和上游本地技能仍然被记入
- 每个增强目录都保留一个“ATTRIBUTION.md”文件，其中包含上游路径、PR、作者和源上下文
- 每个增强目录仅是精选输出，不得重新提交到本机增强器摄入路径中
- 每个增强的目录都应该是英语输出，即使上游本地源不是## Manual Maintainer Commands

自动化涵盖了正常的 PR 摄入量，但维护人员仍然可以在需要时手动运行私人增强器。

针对分支差异进行批处理：```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

单技能回顾：```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

每项技能的预期增强器输出：

- `工作区/传入/原始/<运行ID>/<技能>/`
- `工作区/增强候选/<运行 ID>/<技能>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

公关机构应声明：

- 添加或升级了哪些技能
- 他们深化了哪些捆绑包或工作流程
- 运行了什么验证
- 自动增强器是否运行
- 是否打开或更新了“skills_omni/”配套 PR
- 任何关于归因或后续清理的特殊维护者注释## Reviewer Checklist

- 原生摄入是合法且非恶意的
- 生成的元数据和清单已刷新
- 捆绑更新是有意的
- 公共验证和构建输出是绿色的
- 增强器状态评论与实际更改的技能和最终结果状态相匹配
- 任何 `skills_omni/` 配套 PR 都能正确保留归因## Example PR Scope

一个强有力的 PR 示例可以添加主题集，例如：

- 一项可观察性或 DevOps 技能
- 一项事件或安全技能
- 一项AI评估或提示技能

这足够大，可以运行评分器、自动增强器、“skills_omni/”发布流程、捆绑包和归因模型，而无需将 PR 转变为完整的目录重写。