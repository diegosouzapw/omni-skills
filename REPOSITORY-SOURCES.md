# 🌍 Repository Sources

This file is the public registry for proposing upstream repositories that may be imported into Awesome Omni Skills through the reviewed external-intake flow.

Merging a row here does **not** start sync automatically. It only creates an approved public suggestion that the private operator runtime can import and review in the dashboard before any live sync happens.

## ✅ How to Propose a Repository

1. Add one row inside the machine-readable registry table below.
2. Use a unique kebab-case `slug`.
3. Provide the upstream `repo_url`.
4. Prefer `auto` for `branch` and `skills_path` unless you already know the correct values.
5. Use `candidate` for new proposals. Maintainers can later promote rows to `tracked` or `disabled`.
6. Keep `notes` short and factual. Mention provenance or license caveats there if they matter.
7. Run `npm run registry:render` and `npm run registry:lint` before opening the PR.
8. If a maintainer first adds a source from the private dashboard, merge the matching registry PR here so the public list stays canonical and contributors do not accidentally propose the same repository twice.

## 📋 Schema Rules

| Column | Meaning |
|:-------|:--------|
| `slug` | Stable public identifier for the upstream source |
| `repo_url` | Clone URL for the upstream repository |
| `branch` | Explicit branch to track, or `auto`/blank to use the repository default branch |
| `skills_path` | Relative path to the skills root, or `auto`/blank to let the private runtime discover it |
| `status` | `candidate`, `tracked`, or `disabled` |
| `owner` | Human-readable owner or organization label |
| `license` | SPDX identifier, `review-required`, or another explicit review label |
| `notes` | Short operational context |

## 🧠 Repo-First Proposal Rule

The normal contributor flow is now repo-first:

- add the repository URL
- set `branch` to `auto` unless you need a non-default branch
- set `skills_path` to `auto` unless you know the exact root
- let the private operator runtime preview discovery and keep the review gate

Merging a row here still does **not** enable sync and does **not** open a PR automatically.

Maintainer-operated dashboard additions should converge back here too. The private runtime can open a public registry PR for manual dashboard sources so the public registry remains the transparent source of truth for reviewed upstream repositories.

## 🔀 Status Semantics

| Status | Meaning |
|:-------|:--------|
| `candidate` | Public proposal accepted in markdown, but not yet operator-enabled |
| `tracked` | Approved upstream repository that the private runtime may import for dashboard review |
| `disabled` | Kept for history, examples, or paused intake; not intended for active sync |

## 🗂️ Machine-Readable Registry

<!-- registry:repositories:start -->
| slug | repo_url | branch | skills_path | status | owner | license | notes |
| ---- | -------- | ------ | ----------- | ------ | ----- | ------- | ----- |
| vercel-labs-agent-skills | https://github.com/vercel-labs/agent-skills | main | skills | tracked | vercel-labs | review-required | fully merged through native PR #10 and curated PR #11 |
| tech-leads-club-agent-skills | https://github.com/tech-leads-club/agent-skills.git | auto | auto | candidate | tech-leads-club | review-required | grouped monorepo pilot for smart discovery under packages/skills-catalog/skills |
| openai-skills | https://github.com/openai/skills.git | auto | auto | tracked | openai | review-required | added manually in the private dashboard and published back through registry PR #15 |
<!-- registry:repositories:end -->

## 📊 Registry Status

<!-- registry:status:start -->
| Metric | Value |
|:-------|:------|
| 📦 Registry rows | `3` |
| ✅ Tracked upstream repositories | `2` |
| 🧪 Candidate upstream repositories | `1` |
| ⏸️ Disabled rows | `0` |
| 🌿 Auto branch rows | `2` |
| 🌿 Explicit branch rows | `1` |
| 🔎 Auto-detect skills path rows | `2` |
| 📁 Default `skills/` path rows | `1` |
| 🧭 Custom skills path rows | `0` |
| 🔒 Operator gate | Merge here does not auto-sync. The private dashboard still imports and enables rows explicitly. |
| 🧪 Local validation | `npm run registry:lint` and `npm run registry:check` |
<!-- registry:status:end -->

## 🔐 Review Contract

- public contributors can propose repositories by editing this file in a normal PR
- only the bounded registry block is machine-parsed
- merged rows are imported later by the private operator runtime
- operator review in the dashboard remains mandatory before any live sync
