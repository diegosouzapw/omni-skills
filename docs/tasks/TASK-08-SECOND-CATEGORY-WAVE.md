# TASK-08 — Second Category Wave

## Goal

Use the now-stable `v0.1.2` public baseline to open the next category wave without diluting the repository into generic content. This is a selective execution track, not a broad content push.

## Why This Exists

`TASK-07` proved the project can activate a new category (`design`) without dropping the floor. The next step is to extend that approach to the next code-native dormant categories:

1. `tools`
2. `data-ai`
3. `machine-learning`

This should happen only with skills that are implementation-first, agent-relevant, and strong enough to survive the current scorer.

## Baseline Assumptions

- public repository release baseline is `v0.1.2`
- private enhancer release baseline is `v0.0.1`
- starting public floor was 28 published skills across 12 active categories
- `design` is active but still shallow relative to the strongest tracks
- `business` and `content-media` remain intentionally deferred

## Scope

### In scope

- deepen `design` enough that it does not feel like a one-off activation
- activate `tools` with real code-and-agent-oriented skills
- activate `data-ai` with real implementation-first skills
- activate `machine-learning` with real implementation-first skills
- keep bundle logic and docs coherent with the expanded taxonomy
- regenerate catalog, manifests, archives, and docs

### Out of scope

- activating `business`
- activating `content-media`
- adding low-depth filler skills just to increase category counts
- weakening the scorer or support-pack requirements to make this wave easier

## Candidate Skill Slots

### Design

- `design-review-systems`
- `design-token-governance`
- or a formal depth pass on the two existing design skills if a new third skill is not yet justified

### Tools

- `mcp-server-authoring`
- `plugin-authoring`
- `sdk-scaffolding`

### Data-AI

- `data-contracts`
- `analytics-instrumentation`
- `feature-pipeline-design`

### Machine-Learning

- `model-serving`
- `training-pipeline`
- `evaluation-pipeline`

## Execution Order

1. confirm the exact target skills and their category fit
2. create or deepen the support packs before trying to “win the scorer”
3. validate each skill with the current quality bar, not a relaxed one
4. update bundles only where the new skills materially improve a bundle
5. update docs after the artifacts are regenerated, not before

## Required File Touches

- `skills/<new-skill>/SKILL.md`
- `skills/<new-skill>/agents/openai.yaml`
- `skills/<new-skill>/references/**`
- `skills/<new-skill>/examples/**`
- `skills/<new-skill>/scripts/**` when a script is justified
- `data/bundles.json` if a bundle meaningfully improves
- `metadata.json`
- `dist/catalog.json`
- `dist/bundles.json`
- `dist/manifests/**`
- `docs/CATALOG.md`
- `README.md`
- `docs/README.md`
- `docs/architecture/AGENT-NATIVE-ROADMAP.md`
- `docs/architecture/CODEBASE-ANALYSIS.md`
- `docs/users/BUNDLES.md`
- `docs/specs/SKILL-CLASSIFICATION.md` only if the scorer logic changes

## Validation Gates

- `npm run build`
- `npm test`
- `git diff --check`

## Completed Outcome

This wave is now landed.

- `design` gained `design-token-governance`
- `tools` became active through `mcp-server-authoring`
- `data-ai` became active through `data-contracts`
- `machine-learning` became active through `model-serving`
- the public catalog moved from 28 to 32 published skills
- active catalog categories moved from 12 to 15
- the quality floor held during the wave

## Done Criteria

- `tools` is active with at least one clearly code-native skill
- `data-ai` is active with at least one clearly implementation-first skill
- `machine-learning` is active with at least one clearly implementation-first skill
- `design` is either deeper or explicitly justified as intentionally limited for now
- no new skill lands below the current practical quality floor
- docs and generated artifacts reflect the new category counts and bundle state
