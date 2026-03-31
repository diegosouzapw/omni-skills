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
- native intake preserved in its original language when needed
- curated enhanced output rewritten into English
- a one-way native-to-curated flow that does not feed `skills_omni/` back into native enhancer intake

## Enhancer Outcome States

The public PR enhancer now reports four maintainer-visible states:

- `completed`
  The enhanced derivative was generated cleanly and is eligible for companion `skills_omni/` publication.
- `degraded`
  The enhancer finished, but it used a fallback path or produced warnings. Maintainer review is still expected before treating the derivative as healthy.
- `blocked`
  The run was stopped by infrastructure or validation issues, such as hosted OmniRoute preflight failure or a candidate validation failure that should prevent publication.
- `failed`
  The enhancer hit an unexpected runtime error and needs maintainer investigation.

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

Language policy:

- native intake under `skills/` may be written in any language
- the enhancer keeps the native snapshot as submitted for provenance
- the curated derivative under `skills_omni/` must always be written in English

The stricter editorial bar now applies to:

- the generated metadata and security checks
- the private enhancer review
- the follow-up curated derivative under `skills_omni/`

## Automated External Intake PRs

Some native intake PRs now come from the private external-sync runtime instead of from a human contributor branch.

Those PRs use the same public intake surface and the same validation contract:

- they still target `skills/`, not `skills_omni/`
- they usually arrive on `external-import/<source-slug>` branches
- they preserve provenance with `EXTERNAL_SOURCE.json` and `ORIGIN.md`
- they still go through the public validator, generated artifacts refresh, and enhancer automation
- they may require explicit reviewer attention for provenance, licensing, and upstream ownership before merge

For maintainers, the review standard stays the same: verify that the skill is legitimate, that the generated artifacts are coherent, and that the provenance files accurately describe the upstream source.

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
4. The enhancer keeps the upstream intake snapshot in its original language when needed, but rewrites the curated output in English.
5. The enhancer posts progress back to the source PR.
6. The enhancer updates the PR status comment after each processed skill with batch totals and the latest state.
7. When it finishes, it materializes the enhanced derivative into `skills_omni/` and opens or updates a companion PR in the public repo for `completed` and `degraded` outputs only.
8. After the PR is merged into `main`, the private repo-aware poller reprocesses any changed native skills, refreshes `workspace/enhanced/skills/<skill>/`, and keeps the private enhanced baseline aligned with the latest public native source.
9. After the merge, the public release workflow bumps the npm package version, regenerates catalog artifacts, publishes a release, and tags the new version automatically.

Rate limit:

- the PR enhancer currently processes **1 skill per minute**
- a PR with 40 native new skills can therefore stay in the enhancer queue for about 40 minutes
- the PR shows that work as an in-progress CI run plus a progress comment that advances skill by skill

The contributor does not need to run the enhancer manually.

## No-Loop Rule For `skills_omni/`

The curated surface is intentionally one-way:

- native input enters through `skills/`
- the private enhancer reviews that native input
- curated output is proposed into `skills_omni/`
- `skills_omni/` is never treated as native intake again
- later native updates still re-enter through `skills/` and replace the private enhanced baseline after reprocessing

The repository now enforces that boundary:

- direct public PRs that modify `skills_omni/` are rejected
- only automation-authored companion PRs from the `skills-omni/pr-*` branch family are accepted there
- mixed PRs that try to change both `skills/` and `skills_omni/` at once are rejected

## Automatic Versioning After Merge

Skill-bearing merges to `main` now trigger the repository release workflow automatically.

Current package version policy:

- patch increments by `+1` for each qualifying merge
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- after `.10`, the package rolls to the next minor and resets patch
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Current release trigger paths:

- `skills/**`
- `skills_omni/**`
- `data/bundles.json`

That automatic release job:

1. computes the next package version from `package.json`
2. bumps `package.json` and `package-lock.json`
3. regenerates `metadata.json`, `skills_index.json`, `dist/`, and `docs/CATALOG.md`
4. runs the strict release verification pipeline
5. commits the version bump back to `main`
6. creates a Git tag for the new version
7. publishes npm and GitHub Release artifacts

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
- each enhanced directory is curated output only and must not be resubmitted into the native enhancer intake path
- each enhanced directory is expected to be English-language output even when the upstream native source was not

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
- the enhancer status comment matches the actual changed skills and final outcome state
- for `external-import/*` PRs, provenance files such as `EXTERNAL_SOURCE.json` and `ORIGIN.md` are present and accurate
- for `external-import/*` PRs, source ownership and any license review notes were checked before merge
- any `skills_omni/` companion PR preserves attribution correctly

## Example PR Scope

A strong example PR can add a thematic set such as:

- one observability or DevOps skill
- one incident or security skill
- one AI evaluation or prompting skill

That is large enough to exercise the scorer, automatic enhancer, `skills_omni/` publishing flow, bundles, and attribution model without turning the PR into a full catalog rewrite.
