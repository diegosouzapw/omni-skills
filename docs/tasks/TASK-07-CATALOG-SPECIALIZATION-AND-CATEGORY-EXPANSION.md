# TASK-07 — Catalog Specialization And Category Expansion

## Status

Completed for the first category-expansion wave. This task activated `design` and added the fully backed `design` bundle without dropping the current quality floor.

## Objective

Open a new catalog-growth phase that does two things at the same time:

1. deepen already-strong tracks with more specialized coding workflows
2. activate more canonical taxonomy categories without lowering the repository quality floor

This is not a “more skills at any cost” task. It is a selective expansion task meant to keep the catalog coherent.

## Why This Track Exists

The repository is in a good state now:

- `28` published `L3` skills
- `7/7` starter bundles fully backed by published skills
- strong quality and best-practices averages

The next gain is not foundation. It is shape.

Today, the catalog uses `12` active categories out of `18` canonical categories:

- `ai-agents`
- `backend`
- `cli-automation`
- `communication`
- `design`
- `development`
- `devops`
- `documentation`
- `frontend`
- `fullstack-web`
- `product`
- `testing-security`

- `business`
- `content-media`
- `data-ai`
- `machine-learning`
- `tools`
- `uncategorized`

`uncategorized` is never a target state. The real planning question is which of the other six should be activated next, and which should remain intentionally deferred.

## Working Decision

For the follow-on wave, the recommended order is:

1. activate `tools`
2. activate `data-ai`
3. activate `machine-learning`
4. defer `business` unless a clearly code-centric workflow emerges
5. defer `content-media` unless a clearly code-native media pipeline workflow emerges

This keeps the expansion aligned with the repository’s actual identity: coding, agent, infrastructure, and system-design work.

## Proposed Category Activation Plan

### 1. `design` — completed in this wave

Activated skills:

- `design-systems-ops`
  Focus: token governance, component drift, release coordination between code and design systems.
- `accessibility-audit`
  Focus: accessible UI review, keyboard flow, semantics, contrast, motion, and regression-proof remediation planning.

Bundle shipped:

- `design`

### 2. `tools`

High-confidence engineering category with strong agent alignment.

Recommended candidate skills:

- `mcp-server-authoring`
  Focus: protocol shape, tool design, transport choices, schemas, and operational guardrails.
- `plugin-authoring`
  Focus: plugin scaffolding, capability boundaries, packaging, and compatibility review.

Bundle tie-ins:

- `ai-engineer`
- `oss-maintainer`
- `cli-automation`

### 3. `data-ai`

Useful if it stays code- and system-oriented instead of becoming generic analytics advice.

Recommended candidate skills:

- `data-contracts`
  Focus: schema ownership, producer/consumer contracts, evolution policy, and validation gates.
- `analytics-instrumentation`
  Focus: event design, telemetry contracts, naming consistency, and downstream reporting safety.

Bundle tie-ins:

- `full-stack`
- `ai-engineer`
- `devops`

### 4. `machine-learning`

Useful only if the skills stay operational and implementation-oriented.

Recommended candidate skills:

- `model-serving`
  Focus: serving topology, rollback, versioning, latency, observability, and safe release controls.
- `training-pipeline`
  Focus: dataset lineage, reproducibility, checkpoints, evaluation gates, and release handoff.

Bundle tie-ins:

- `ai-engineer`
- `devops`

## Explicit Deferrals

### `business`

Defer by default.

Only activate if a proposed skill is clearly code-centric, for example:

- pricing instrumentation implementation
- experiment telemetry rollout
- billing integration architecture

Avoid generic business strategy content.

### `content-media`

Defer by default.

Only activate if a proposed skill is clearly pipeline-oriented, for example:

- media pipeline automation
- asset transformation workflow design
- localization asset build pipelines

Avoid generic copywriting or marketing content.

## Existing Categories That Still Have Room

Even without activating new categories, some active categories still have room for one more high-value specialist:

- `backend` → `event-driven-design`
- `fullstack-web` → `payments-integration`
- `communication` → `incident-communication`
- `development` → `refactoring-strategy`
- `testing-security` → `supply-chain-security`

These are secondary to activating one or more dormant categories, but they remain strong fallback options.

## Implementation Steps

1. Freeze the current quality bar as the minimum acceptable baseline.
2. Choose the first one or two dormant categories to activate.
3. Write a short category-entry brief for each selected category.
4. Define one or two candidate skill slots with:
   - user problem
   - workflow scope
   - bundle tie-in
   - support-pack expectations
5. Author the new skills through the normal native intake path.
6. Run the enhancer flow and validate whether the new category meaningfully fits the scorer and taxonomy.
7. Update bundle docs, roadmap docs, and contribution docs if the category becomes active.
8. Reassess whether `business` and `content-media` should still stay deferred.

## Outcome

Completed in this wave:

- `design-systems-ops` published under `skills/`
- `accessibility-audit` published under `skills/`
- `design` activated as a canonical public category
- `design` bundle added and fully backed
- catalog rebuilt cleanly with `28` total skills and `12` active categories

## Files Likely To Change

- `skills/`
- `skills_omni/`
- `data/bundles.json`
- `metadata.json`
- `dist/catalog.json`
- `dist/bundles.json`
- `docs/CATALOG.md`
- `docs/README.md`
- `docs/architecture/AGENT-NATIVE-ROADMAP.md`
- `docs/architecture/CODEBASE-ANALYSIS.md`
- `docs/specs/SKILL-CLASSIFICATION.md`

## Acceptance Criteria

- at least one previously inactive canonical category becomes active with a high-quality published skill
- no new category is activated with filler or weak support-pack depth
- the taxonomy narrative in docs stays intentional, including which categories remain deferred
- bundle value improves through specialization, not just count inflation

All acceptance criteria are met for the first expansion wave.
