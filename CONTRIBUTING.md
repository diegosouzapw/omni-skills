# Contributing to Omni Skills

Omni Skills now contains both a skill catalog and the runtime surfaces built on top of that catalog. Contributions can target either area, but both must stay aligned with the generated artifacts and the current CLI behavior.

Current repository baseline:

- package version `0.1.2`
- 28 published skills
- 7 fully backed bundles
- 7 install-capable clients and 16 MCP config-capable clients
- automatic post-merge skill releases enabled on `main`

## Before You Start

- Skills are authored in `skills/<skill-name>/SKILL.md`.
- Contributor templates and guidance live in `docs/contributors/`.
- The canonical PR flow for new skill branches is in `docs/contributors/SKILL-PR-WORKFLOW.md`.
- Native incoming skills now land under `skills/`, while Omni-maintained enhanced derivatives are proposed automatically under `skills_omni/`.
- `skills_omni/` is a protected curated surface and is not open for direct public contribution.
- Runtime and architecture docs live in `docs/`.
- Repository-standard community files live in the root: `README.md`, `CONTRIBUTING.md`, `SECURITY.md`, and `CODE_OF_CONDUCT.md`.

## Common Contribution Types

- Add or improve a skill under `skills/`
- Update contributor guidance under `docs/contributors/`
- Improve the CLI, installer, or generation scripts under `tools/`
- Improve the shared catalog runtime or the API, MCP, and A2A packages under `packages/`
- Tighten tests, smoke checks, packaging, or release docs

## Quick Start

```bash
# 1. Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2. Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3. Create or update your change
# Example: create a new skill
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4. Validate and regenerate artifacts
npm run build

# 5. Run the smoke suite
npm test
npm run smoke
```

Open the PR with `Allow edits from maintainers` enabled.

## Skill Contributions

A good native incoming skill should:

- solve a specific problem cleanly
- be reusable across projects
- include instructions an agent can actually follow
- avoid vague or redundant content
- declare accurate frontmatter and compatibility metadata when available
- land with generated `metadata.json` classification artifacts after automation runs

Minimal structure:

```text
skills/my-skill/
└── SKILL.md
```

Larger skills can also include:

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

Release-grade skill packs should usually include `agents/`, `references/`, `examples/`, and `scripts/`, not only `SKILL.md`. But the intake surface is intentionally more permissive now: a native incoming skill is allowed to be minimal, and the enhancer pipeline is responsible for generating the stronger derivative proposal in `skills_omni/`.

For the full branch, validation, and enhancer-review sequence, use [docs/contributors/SKILL-PR-WORKFLOW.md](docs/contributors/SKILL-PR-WORKFLOW.md).

## Required Validation

Contributors can run this before opening a PR:

```bash
npm run validate
npm run taxonomy:report
npm run build
npm test
```

`npm run validate` now also regenerates:

- `metadata.json`
- `skills/<skill>/metadata.json`

It also computes:

- canonical taxonomy mapping
- maturity, best practices, quality, and security scores
- static security findings
- optional ClamAV and VirusTotal scanner status when configured

That validation is the contract used by CLI, API, MCP, A2A, generated manifests, archives, and release automation. Treat generated metadata as part of the review surface, not as disposable output.

Important change to the intake policy:

- missing or incomplete frontmatter on a native incoming skill now produces warnings in the normal validation flow instead of blocking intake by itself
- critical security findings and hard validation errors still block
- the stricter editorial standard is enforced in the enhanced derivative flow, not at native intake time

For a release-grade preflight, also run:

```bash
npm run smoke
```

That smoke pass currently validates:

- skill validation
- catalog generation
- docs catalog generation
- test suite
- `npm pack --dry-run`
- API boot
- MCP boot in `stdio`, `stream`, and `sse`
- A2A boot
- archive verification and packaging expectations

## Skill Frontmatter

Frontmatter is still strongly recommended for every skill. Use [docs/contributors/SKILL-TEMPLATE.md](docs/contributors/SKILL-TEMPLATE.md) as the baseline and keep the `name` aligned with the directory slug whenever you provide it.

```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

Use canonical categories in new skills. Current taxonomy:

- `development`
- `frontend`
- `backend`
- `fullstack-web`
- `tools`
- `cli-automation`
- `business`
- `product`
- `design`
- `data-ai`
- `ai-agents`
- `machine-learning`
- `devops`
- `testing-security`
- `documentation`
- `content-media`
- `communication`
- `uncategorized`

The skill version is independent from the npm package version. Use the semantic version that makes sense for the skill itself.

If a native incoming skill does not have frontmatter yet, the repo now accepts it with warnings and derives temporary metadata from the directory, title, and body text so the enhancer can still process it.

## Runtime Contributions

If you touch `packages/`, `tools/bin/`, `tools/lib/`, or build scripts:

- keep `dist/` and docs aligned with the implementation
- prefer reusing `packages/catalog-core` instead of duplicating catalog logic
- keep local-write behavior behind preview or dry-run defaults
- keep MCP writers disciplined: only add first-class config writers when the target client has a stable public config contract
- treat security scanner warnings as part of the review bar for new skills and scripts
- update tests when changing CLI commands, transport modes, or public endpoints

If you are contributing native skills only, the automation now handles the private enhancer run and the `skills_omni/` follow-up PR for you during the public PR lifecycle.

Important boundary:

- submit native work under `skills/`
- do not open manual PRs that add or edit `skills_omni/`
- curated `skills_omni/` changes are reserved for the automation-authored companion PRs generated from native intake

## Enhancer Outcome States

During public native-skill PRs, the enhancer now reports one of four states:

- `completed`
  The enhanced derivative was generated cleanly and is eligible for `skills_omni/` publication.
- `degraded`
  The enhancer completed, but it used a fallback path or produced warnings or weaker score movement that maintainers should inspect more carefully.
- `blocked`
  The run stopped for infrastructure or validation reasons, for example hosted OmniRoute preflight or validation failures that should prevent automatic publication.
- `failed`
  The run hit an unexpected error that requires maintainer investigation.

The contributor does not need to fix enhancer infrastructure issues. The public responsibility is still to submit a legitimate native skill under `skills/` and keep the repo green.

## Automatic Release Policy

When a change lands on `main` and includes:

- `skills/**`
- `skills_omni/**`
- or `data/bundles.json`

the repository now issues a package release automatically.

The version rule is intentionally simple:

- patch increments by one until it reaches `.10`
- after `.10`, the next release rolls to the next minor and resets patch to `.0`

Examples:

- `0.1.0 -> 0.1.1`
- `0.1.9 -> 0.1.10`
- `0.1.10 -> 0.2.0`

That release flow regenerates the catalog and archives, commits the version bump, tags the release, publishes npm, and creates the GitHub release record automatically.

## Commit Conventions

Common prefixes:

- `feat:` new skill or feature
- `fix:` bug fix
- `docs:` documentation changes
- `refactor:` code cleanup or structure changes
- `test:` test changes
- `chore:` maintenance

## Need Help?

- Questions: open a [Discussion](https://github.com/diegosouzapw/omni-skills/discussions)
- Bugs: open an [Issue](https://github.com/diegosouzapw/omni-skills/issues)
- Early feedback: open a [Draft PR](https://github.com/diegosouzapw/omni-skills/pulls)
