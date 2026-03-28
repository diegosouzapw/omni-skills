# Skill PR Workflow

This is the canonical repository flow for pull requests that add or substantially upgrade one or more native skills.

Use it when:

- adding a new skill under `skills/`
- deepening a bundle with new domain skills
- shipping a larger support-pack expansion
- validating a branch with the private enhancer before maintainers merge it

## Target Outcome

A strong native skill PR lands with:

- a native skill under `skills/`
- enough content for the public validator to classify and index it
- passing public validation and tests
- automatic enhancer processing during the PR
- a follow-up `skills_omni/` PR when enhanced derivatives are published

## Recommended Branch Shape

Create a focused branch:

```bash
git checkout -b feat/<short-skill-theme>
```

Examples:

- `feat/incident-observability-evals`
- `feat/devops-skill-pack`
- `feat/security-skill-pack`

## Native Intake Rules

The public intake surface is intentionally permissive.

Minimum:

```text
skills/<skill>/
└── SKILL.md
```

Recommended but no longer required for intake:

```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

The native contribution can be rough, incomplete, or outside the normal support-pack standard. That is deliberate. `skills/` is the native intake surface, not the curated derivative surface.

The stricter editorial bar now applies to:

- the generated metadata and security checks
- the private enhancer review
- the follow-up curated derivative under `skills_omni/`

## Authoring Sequence

1. Create `skills/<skill>/SKILL.md`.
2. Add frontmatter if you can, but missing or incomplete frontmatter no longer blocks native intake by itself.
3. Add `agents/`, `references/`, `examples/`, and `scripts/` when you already have them.
4. Update `data/bundles.json` if the skill deepens an existing bundle.
5. Open the PR. The repo automation now does the rest.

## Validation Sequence

Contributors can run this exact sequence before opening the PR:

```bash
npm run validate
npm run build
npm test
git diff --check
```

If the change also affects runtime or packaging behavior, also run:

```bash
npm run smoke
```

## What Happens Automatically During the PR

When a PR opens or syncs and it only touches native skill intake files under `skills/` plus optional `data/bundles.json`, the public repo now triggers the private enhancer automatically.

Current automated flow:

1. The public `Validate Skills` workflow runs on the PR and checks validation, build, generated artifacts, and tests.
2. The public `Enhance PR Skills` workflow starts in parallel and processes the changed native skills one by one in `live` mode.
3. The enhancer reads the native skill from `skills/`, researches current best practices, and writes a reviewed enhanced candidate in the private workspace.
4. The enhancer posts progress back to the source PR.
5. When it finishes, it materializes the enhanced derivative into `skills_omni/` and opens or updates a companion PR in the public repo.

Rate limit:

- the PR enhancer currently processes **1 skill per minute**
- a PR with 40 native new skills can therefore stay in the enhancer queue for about 40 minutes
- the PR shows that work as an in-progress CI run plus status comment

The contributor does not need to run the enhancer manually.

Important rollout note:

- GitHub only registers a new workflow file as an active repository workflow after that file reaches the default branch.
- Until `Enhance PR Skills` lands on `main`, contributors can read the documented process, but GitHub will not execute that workflow automatically on public PRs yet.
- After the workflow is merged into `main`, the behavior described above becomes the default intake path for future native skill PRs.

## Native vs Enhanced

This repo now has two distinct surfaces:

- `skills/`
  Native intake. This preserves the original contribution as submitted.
- `skills_omni/`
  Omni-enhanced derivative output proposed by automation and maintained by Omni Skills Team.

Attribution rules for `skills_omni/`:

- the enhanced derivative becomes Omni-maintained
- the original contributor and upstream native skill remain credited
- each enhanced directory keeps an `ATTRIBUTION.md` file with the upstream path, PR, author, and source context

## Manual Maintainer Commands

The automation covers normal PR intake, but maintainers can still run the private enhancer manually when needed.

Batch against a branch diff:

```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Single-skill review:

```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Expected enhancer outputs per skill:

- `workspace/incoming/original/<run-id>/<skill>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`

## PR Body Expectations

The PR body should state:

- what skills were added or upgraded
- which bundles or workflows they deepen
- what validation ran
- whether the automated enhancer ran
- whether it opened or updated a `skills_omni/` companion PR
- any exceptional maintainer notes about attribution or follow-up cleanup

## Reviewer Checklist

- native intake is legitimate and non-malicious
- generated metadata and manifests were refreshed
- bundle updates are intentional
- public validation and build outputs are green
- the enhancer status comment matches the actual changed skills
- any `skills_omni/` companion PR preserves attribution correctly

## Example PR Scope

A strong example PR can add a thematic set such as:

- one observability or DevOps skill
- one incident or security skill
- one AI evaluation or prompting skill

That is large enough to exercise the scorer, automatic enhancer, `skills_omni/` publishing flow, bundles, and attribution model without turning the PR into a full catalog rewrite.
