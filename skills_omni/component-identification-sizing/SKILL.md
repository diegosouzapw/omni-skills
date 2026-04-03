---
name: "component-identification-sizing"
description: "Component Identification and Sizing workflow skill. Use this skill when the user needs a static, evidence-based inventory of architectural components in a codebase and reproducible size metrics to help prioritize decomposition, extraction, or consolidation. Use when asking \\"what components do I have?\\", \\"how big is each module?\\", \\"which service is too large?\\", \\"analyze codebase structure\\", \\"size my monolith\\", or \\"where should we start decomposing?\\" Do not use for runtime performance sizing, infrastructure capacity planning, deployment topology analysis, or dependency/security scanning beyond basic structural inventory handoff."
version: "0.0.1"
category: "frontend"
tags:
  - "component-identification-sizing"
  - "architecture"
  - "codebase-analysis"
  - "component-inventory"
  - "monolith-decomposition"
  - "static-analysis"
  - "sizing"
  - "modularization"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/component-identification-sizing"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Component Identification and Sizing

## Overview

This skill identifies architectural components in a repository, measures their relative size with static metrics, and produces a reviewable inventory that helps operators decide what to extract, split, consolidate, or leave alone.

It preserves the original upstream intent from `packages/skills-catalog/skills/(architecture)/component-identification-sizing` in `https://github.com/tech-leads-club/agent-skills.git`, while improving operational guidance for repository discovery, exclusions, structured outputs, and safer handoff.

Use this skill to answer questions such as:

- What are the main components or modules in this codebase?
- Which components dominate the repository by statement count or file count?
- Which components look too large, too small, or ambiguous for decomposition planning?
- Where should we start if we want to break a monolith into smaller units?

This skill is for **static structure sizing**, not runtime behavior. Size is a prioritization input, not proof that a component should or should not be extracted.

## When to Use This Skill

Use this skill when you need a repository-level structural inventory and comparative sizing.

### Good fits

- Starting a monolith decomposition or modularization effort
- Creating a component inventory before migration planning
- Identifying oversized services, packages, or modules
- Comparing code distribution across business areas
- Establishing a baseline before architecture refactoring
- Reviewing whether a repository has clear component boundaries
- Producing a handoff artifact for dependency analysis or decomposition planning

### When not to use this skill

Do **not** use this skill as the primary workflow for:

- Runtime performance sizing
- Infrastructure or capacity planning
- Deployment topology mapping
- Deep dependency-risk or vulnerability scanning
- Network/service communication tracing
- Incident debugging or production bottleneck analysis

If the task drifts there, keep the component inventory and route to a more appropriate skill.

## Operating Table

| Repository situation | Primary boundary signals | Common exclusions to verify | Expected output |
| --- | --- | --- | --- |
| Single-package frontend app | `package.json`, import paths, aliases, feature folders | `dist/`, `build/`, `coverage/`, snapshots, generated clients | Feature/component inventory plus outlier ranking |
| Alias-heavy JS/TS app | `tsconfig.json`, `jsconfig.json`, import maps, barrel files | bundled output, generated SDKs, storybook/static exports | Alias-aware inventory with confidence notes |
| Python service/app | package/module paths, `pyproject.toml`, import roots | `.venv/`, migrations if generated, docs, fixtures, tests | Module inventory by package boundary |
| Java service | package namespace, source roots, module structure | generated sources, build output, docs, test trees | Package/component inventory with subdomain notes |
| Monorepo/workspaces | workspace manifests, package roots, shared libs | `node_modules/`, lockfile artifacts, generated packages, vendored code | Package-first inventory, then optional subcomponent pass |
| Mixed frontend/backend repo | separate manifests, separate source roots, language boundaries | build output, vendor dirs, codegen, deployment manifests | Separate inventories first, aggregate summary second |

Start with the strongest maintained ownership signal available: manifests, workspace definitions, package roots, import roots, or namespaces. Use leaf directories only when no better semantic boundary exists.

## Workflow

### 1. Preflight and scope the analysis

Before counting anything, confirm:

- repository root or subpath being analyzed
- languages/frameworks present
- whether the user wants a whole-repo inventory or only a bounded area
- whether tests should be excluded or explicitly included
- whether generated code should be counted
- what output format is expected: Markdown summary, JSON inventory, or both

Declare inclusion and exclusion rules up front. Use [references/component-sizing-exclusions.md](references/component-sizing-exclusions.md) as the default baseline.

### 2. Discover authoritative structural signals

Inspect the repository for the files and structures that define ownership and module boundaries.

Examples:

- frontend: `package.json`, workspace config, `tsconfig.json`, `jsconfig.json`, import maps, feature folders
- Python: `pyproject.toml`, package roots, module layout
- Java: source roots and package namespaces
- monorepos: workspace manifests and top-level package directories

Do not assume that every leaf directory is a component. Prefer stable, maintained boundaries such as:

- workspace package
- application package/module
- namespace or import root
- clearly owned feature folder
- leaf directory only as a fallback heuristic

Use [references/repo-archetypes-and-boundaries.md](references/repo-archetypes-and-boundaries.md) when the repository mixes packages, aliases, shared libraries, or multiple languages.

### 3. Define candidate components

Create an initial inventory of candidate components with these minimum fields:

- `component_id`
- `display_name`
- `canonical_path`
- `boundary_type` such as `workspace-package`, `module`, `namespace`, `feature-folder`, or `leaf-directory`
- `language`
- `notes`
- `boundary_confidence` as `high`, `medium`, or `low`

Also record when a directory is a **subdomain** or container rather than a component.

Examples:

- `apps/web` may be a top-level application component in a monorepo
- `packages/billing` may be a package component
- `services/billing/payment` may be a component while `services/billing` is only a parent grouping
- `src/features/auth` may be a component if imports and ownership align to that boundary

### 4. Apply exclusions before measurement

Exclude files and directories that would distort size metrics unless the user explicitly asks to include them.

Typical exclusions:

- dependency directories
- vendored third-party code
- generated clients or SDKs
- build output
- coverage output
- snapshots and fixtures
- documentation
- assets with no executable code
- tests, unless the user wants test-inclusive sizing

State exclusions in the final report. Hidden exclusions make the result hard to audit.

If needed, use the helper:

```bash
python3 scripts/print_recommended_exclusions.py
```

### 5. Measure component size reproducibly

For each included component, calculate at least:

- included source file count
- excluded file count
- statement count or closest reproducible executable-code proxy available
- percent of total included statements

Preferred metric: **executable statements**, not raw line count.

If exact statement counting is not practical with available tools, use a transparent fallback and label it clearly, such as:

- non-comment logical lines
- AST node count
- source file count

Never present a fallback metric as if it were exact statement count.

### 6. Calculate comparative statistics carefully

Recommended summary statistics:

- total included components
- total included statements
- mean component size
- median component size
- optional standard deviation
- optional percentile or IQR notes for skewed distributions

Use standard deviation only when it is meaningful.

Avoid false precision when:

- there are very few components
- one or two components dominate the distribution
- the repo mixes unrelated systems in one pool

In those cases, prefer median plus qualitative notes or segment the repo into separate inventories first.

### 7. Classify size findings

Use size signals as review prompts, not automatic architectural verdicts.

Suggested statuses:

- `OK`
- `Too Large`
- `Too Small`
- `Ambiguous Boundary`
- `Generated/Mixed`
- `Needs Segmentation`

Heuristics from the upstream workflow still apply as starting points:

- small apps with fewer than 10 components may tolerate larger percentage thresholds
- larger apps with more than 20 components often need lower thresholds
- components more than 2 standard deviations above mean may deserve review
- components under 1% may be candidates for consolidation

But always cross-check with:

- cohesion
n- coupling
- ownership
- business responsibility
- runtime boundary reality

### 8. Produce both human-readable and structured outputs

The output should include:

1. a Markdown report for reviewers
2. a machine-readable inventory for reuse or handoff

Follow [references/output-contract.md](references/output-contract.md).

At minimum, report:

- scope analyzed
- inclusion/exclusion rules
- component inventory
- summary statistics
- outliers and ambiguous cases
- prioritized recommendations
- confidence notes and limitations

### 9. Recommend next actions without over-claiming

Good recommendations are narrow and evidence-based.

Examples:

- split a dominant component into specific subareas worth validating
- consolidate tiny components that are only wrappers around a broader domain
- perform dependency analysis next on the top 3 largest components
- segment a mixed repo into frontend/backend inventories before deciding extraction order

Do not say a component *must* be extracted based only on size.

### 10. Hand off cleanly when the task changes

If the user now needs dependency analysis, runtime architecture, security scanning, or decomposition planning, hand off with the inventory you already built.

Use [agents/handoff-router.md](agents/handoff-router.md) to preserve context instead of restarting analysis from scratch.

## Output Format

Use the output contract in [references/output-contract.md](references/output-contract.md).

### Minimum Markdown sections

- Scope
- Structural signals used
- Inclusion and exclusion rules
- Component inventory table
- Size analysis summary
- Findings and recommendations
- Limitations and confidence

### Minimum machine-readable fields

Each component record should include at least:

- `component_id`
- `display_name`
- `canonical_path`
- `boundary_type`
- `language`
- `included_file_count`
- `excluded_file_count`
- `statement_count`
- `percent_of_codebase`
- `status`
- `boundary_confidence`
- `exclusion_notes`
- `recommendation`

## Examples

### Example 1: Whole-repo inventory request

```text
Identify and size all components in this repository. Exclude tests, generated code, vendored dependencies, build output, and docs. Return both a markdown report and a JSON inventory.
```

Expected result:

- package-aware or module-aware component inventory
- explicit exclusions section
- size summary with percentages
- list of oversized, undersized, and ambiguous components

### Example 2: Monorepo-first sizing

```text
Analyze this monorepo by workspace package first. Do not mix frontend and backend packages into one ranking until separate inventories are complete. Highlight the largest packages and any shared libraries that distort the totals.
```

See: [examples/monorepo-component-sizing-example.md](examples/monorepo-component-sizing-example.md)

### Example 3: Review exclusions before scanning

```bash
python3 scripts/print_recommended_exclusions.py
```

Use this before counting files if the repository contains generated code, vendored SDKs, or build artifacts.

### Example 4: Use the example JSON contract

Review a finished structured inventory:

- [examples/component-inventory-example.json](examples/component-inventory-example.json)
- [examples/component-sizing-report-example.md](examples/component-sizing-report-example.md)

## Best Practices

### Do

- Start from manifests, package roots, namespaces, and import roots before using directory heuristics
- State inclusion and exclusion rules explicitly
- Prefer executable statements over line count when feasible
- Record boundary confidence when component identification is inferred
- Keep frontend and backend inventories separate in mixed repositories before aggregating
- Treat workspaces/packages as first-class components in monorepos
- Use percentage plus contextual notes, not a single threshold alone
- Report ambiguous or generated/mixed components instead of forcing clean labels
- Preserve the inventory for downstream dependency or decomposition analysis

### Do not

- Do not treat every deepest directory as a real architectural component
- Do not mix generated code, vendored code, and source code in the same metric pool
- Do not present size as proof of extraction priority without considering cohesion and coupling
- Do not rely on standard deviation when the sample is too small or highly skewed
- Do not merge unrelated subsystems into one ranking if separate inventories are more honest
- Do not drift into runtime topology or security conclusions that were not actually analyzed

## Troubleshooting

### Problem: Counts look inflated

**Symptoms:** Large percentages are driven by `dist/`, `coverage/`, generated SDKs, vendored code, or checked-in bundles.
**Solution:** Re-run the inventory with explicit exclusions from [references/component-sizing-exclusions.md](references/component-sizing-exclusions.md). State what was excluded and compare before/after only if needed.

### Problem: Component boundaries are ambiguous

**Symptoms:** Imports use aliases, barrel files, or shared roots that make folder boundaries misleading.
**Solution:** Start from module-resolution config and package manifests, then downgrade confidence for inferred boundaries. Use `Ambiguous Boundary` status instead of inventing precision.

### Problem: Monorepo results are misleading

**Symptoms:** Shared libraries dominate the totals or unrelated apps appear in one ranking.
**Solution:** Inventory workspace packages first. Produce separate rankings by app/package family before any aggregate summary.

### Problem: Standard deviation does not help

**Symptoms:** There are too few components, or one giant component makes every other result look artificially small.
**Solution:** Use median, percentile, or segmented summaries instead of overemphasizing standard deviation. Note the limitation in the report.

### Problem: The repo mixes frontend and backend code

**Symptoms:** One report combines UI modules, backend services, deployment files, and shared libraries into one noisy table.
**Solution:** Split the repo into separate inventories by source root or subsystem, then produce a short combined summary only after each inventory is internally coherent.

### Problem: The task drifted beyond static sizing

**Symptoms:** The user now wants service-call graphs, runtime bottlenecks, vulnerability findings, or extraction sequencing based on runtime dependencies.
**Solution:** Stop expanding the scope. Preserve the current component inventory and route using [agents/handoff-router.md](agents/handoff-router.md).

## Related Skills

Use this skill first for structural inventory, then hand off as needed to skills focused on:

- dependency analysis
- decomposition planning
- architecture decision records
- repository auditing
- security or vulnerability scanning
- monorepo/workspace analysis

If the current environment exposes those skills by handle, pass along:

- scope analyzed
- exclusions used
- component inventory
- outlier ranking
- confidence notes

## Additional Resources

### References

- [Default exclusions and rationale](references/component-sizing-exclusions.md)
- [Output contract](references/output-contract.md)
- [Repository archetypes and boundary guidance](references/repo-archetypes-and-boundaries.md)

### Examples

- [Component inventory JSON example](examples/component-inventory-example.json)
- [Component sizing report example](examples/component-sizing-report-example.md)
- [Monorepo component sizing example](examples/monorepo-component-sizing-example.md)

### Scripts

- [Print recommended exclusions](scripts/print_recommended_exclusions.py)

### Agents

- [Handoff router note](agents/handoff-router.md)

## Upstream Intent Preserved

The original upstream skill emphasized:

- identifying components from namespace and directory structure
- measuring size with statements, file counts, percentages, and standard deviation
- using size thresholds to spot oversized and undersized components
- producing an inventory and recommendations for decomposition

That intent remains intact here. The main enhancement is operational: stronger scoping, better exclusion discipline, improved handling of monorepos and alias-heavy repositories, and a structured output contract that makes the analysis more reusable and auditable.
