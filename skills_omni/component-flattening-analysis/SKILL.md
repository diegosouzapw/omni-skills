---
name: "component-flattening-analysis"
description: "Component Flattening Analysis workflow skill. Use this skill when the user needs to detect misplaced implementation code, classify root-level files correctly, and repair component or module hierarchy problems inside an existing frontend feature or namespace without accidentally breaking public APIs, aliases, routing, or package boundaries. Use when asked to clean up component structure, find orphaned classes, fix module hierarchy, flatten nested components, or explain why code sits at the wrong level. Do not use it for dependency analysis, domain decomposition, or cross-package architecture redesign."
version: "0.0.1"
category: "frontend"
tags:
  - "component-flattening-analysis"
  - "component-structure"
  - "module-hierarchy"
  - "orphaned-classes"
  - "frontend-architecture"
  - "refactoring"
  - "codemods"
  - "import-rewrites"
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
upstream_skill: "skills/component-flattening-analysis"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Component Flattening Analysis

## Overview

This skill analyzes frontend component and module hierarchies to find implementation code that is placed at the wrong level, especially source files that live in parent namespaces or root feature folders even though they belong in a leaf component, shared utility area, or another explicitly owned module.

Use it to produce a safe, reviewable flattening plan before moving files. The goal is not to enforce folder-depth purity at all costs. The goal is to improve cohesion and reduce ambiguity while preserving working imports, public APIs, route structure, lazy loading, and package boundaries.

This skill is strongest when the problem is local hierarchy hygiene inside an existing feature, module, namespace, or component family.

## When to Use This Skill

Use this skill when you need to:

- find source files sitting in a parent feature folder that should belong to a child component or shared submodule
- identify "orphaned" implementation classes in a root namespace that is also acting as a container for nested components
- decide whether to consolidate downward, split upward, or extract shared code during a refactor
- explain why a frontend module structure feels inconsistent, difficult to navigate, or hard to maintain
- prepare a safe refactor plan that updates imports, exports, barrels, and aliases after file moves
- validate whether a root-level file is real misplaced implementation or an intentional composition shell, route/layout shell, bootstrap file, or public API surface

Do **not** use this skill when the task is primarily about:

- dependency or coupling analysis across modules
- domain-driven regrouping of features
- cross-package or cross-library restructuring in a monorepo
- redesigning public package exports or entrypoints
- framework routing redesign rather than hierarchy cleanup

If the task crosses package boundaries, workspace library seams, or published import paths, stop and escalate to an architecture or package-boundary review instead of flattening in place.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Unsure whether a file is actually misplaced | `references/component-flattening-boundary-rules.md` | Prevents false positives for entrypoints, barrels, route shells, layouts, and bootstrap files |
| Need to choose a strategy | `references/component-flattening-decision-matrix.md` | Compares consolidate-down, split-up, and shared extraction with risk and API impact |
| Preparing to move files | `references/component-flattening-verification-checklist.md` | Ensures imports, aliases, tests, lint, typecheck, and builds are covered before and after |
| Want regression guardrails after cleanup | `references/component-flattening-fitness-functions.md` | Adds Semgrep and lint-style enforcement without flagging intentional entrypoints |
| Need examples for alias-heavy repos | `examples/js-ts-alias-aware-analysis.md` | Shows how barrels, re-exports, and TS path aliases affect analysis |
| Need a codemod-safe execution plan | `examples/codemod-import-rewrite-playbook.md` | Gives a repeatable import-rewrite playbook for larger moves |
| Need task routing | `agents/component-flattening-router.md` | Routes away when the work is actually about coupling, domains, or package architecture |

## Workflow

1. **Define the scope boundary**
   - Identify the feature, namespace, package, route segment, or module family under review.
   - Confirm the user wants hierarchy cleanup, not dependency redesign.
   - Record package boundaries and any published import paths that must not be broken.

2. **Resolve actual module boundaries**
   - Inventory source-of-truth boundary signals before classifying files:
     - imports and exports
     - barrel files such as `index.ts`
     - TS path aliases
     - route/layout/module conventions
     - framework bootstrap files
     - package `exports` and public entrypoints
   - Treat parent-level files as intentional until proven otherwise.

3. **Map the structure**
   - Build a tree of directories, namespaces, or packages in scope.
   - Mark leaf components, parent containers, shared areas, and public API surfaces.
   - Identify parent nodes that contain both nested modules and implementation files.

4. **Classify root-level files**
   For each candidate file in a parent or root namespace, classify it as one of:
   - `misplaced implementation`
   - `shared utility`
   - `public API surface`
   - `composition / route / layout shell`
   - `bootstrap / framework entrypoint`
   - `needs manual review`

   Do not recommend moving files that are clearly serving as a public API surface, route shell, or framework entrypoint unless the user explicitly wants that redesign.

5. **Trace consumers and refactor blast radius**
   - Find direct imports, re-exports, and alias-based consumers.
   - Check whether the file participates in lazy loading, code splitting, dynamic import registration, or generated routes.
   - Note whether moving it would change public import paths or package encapsulation.

6. **Choose the least harmful strategy**
   Evaluate these options using `references/component-flattening-decision-matrix.md`:
   - **Consolidate down**: merge child implementation into the parent when the parent is the real coherent component
   - **Split up**: move parent implementation into clearer leaf modules when the parent has mixed responsibilities
   - **Extract shared code**: move common logic into shared utilities or a dedicated shared submodule
   - **No move**: keep the structure if the parent-level file is intentional and coherent

7. **Create a concrete flattening plan**
   For each affected namespace or feature, produce:
   - current issue summary
   - file classifications
   - chosen strategy and why it is least harmful
   - files to move or keep
   - imports/exports/barrels to update
   - expected API impact
   - verification commands to run
   - rollback checkpoint

8. **Execute safely**
   - For small refactors, make targeted edits.
   - For medium or large refactors, prefer AST- or codemod-assisted updates over manual string edits.
   - Update imports, exports, barrels, path aliases, and local documentation as needed.
   - Keep changes narrow and reversible.

9. **Verify**
   Run the smallest relevant verification set from the repository:
   - typecheck
   - lint
   - affected unit/integration tests
   - build for affected app/package
   - unresolved import checks
   - barrel/export validation

10. **Add guardrails if the repo wants them**
   - Suggest Semgrep or lint/import rules to prevent the same hierarchy mistake from returning.
   - Scope rules to implementation files so they do not punish valid entrypoints or barrels.

## Output Format

Use this report structure when responding:

```markdown
## Component Flattening Report

### Scope
- Feature/module: <name>
- Boundary notes: <package, route, alias, exports constraints>

### Candidate Classification
| File | Current role | Classification | Confidence | Notes |
| --- | --- | --- | --- | --- |
| src/features/survey/SurveyValidator.ts | imported by multiple children | shared utility | high | should not stay in parent implementation area |
| src/features/survey/index.ts | barrel export | public API surface | high | keep unless API redesign is requested |

### Strategy Decision
- Recommended strategy: <consolidate down / split up / extract shared / no move>
- Why this is least harmful: <1-3 bullets>
- Main risks: <imports, lazy loading, public paths, tests>

### Refactor Plan
1. <step>
2. <step>
3. <step>

### Verification
- Typecheck: <command or status>
- Lint: <command or status>
- Tests: <command or status>
- Build: <command or status>

### Handoff / Escalation
- <if task drifted into package/API redesign, say so explicitly>
```

## Examples

### Example 1: Analyze a likely hierarchy issue

```text
Analyze `src/features/survey` for component flattening issues. Distinguish misplaced implementation files from barrels, route shells, and shared utilities. Do not propose cross-package moves.
```

Expected outcome:
- a list of candidate files at the parent level
- a classification for each candidate
- one recommended strategy with rationale
- explicit verification steps

### Example 2: Alias-aware JS/TS analysis

See [examples/js-ts-alias-aware-analysis.md](examples/js-ts-alias-aware-analysis.md).

Use this when the repo has:
- `tsconfig.json` path aliases
- `index.ts` re-exports
- imports that do not match raw filesystem paths

### Example 3: React composition shell vs misplaced implementation

See [examples/react-component-flattening-example.md](examples/react-component-flattening-example.md).

Use this when a feature root contains both:
- a composition file such as `SurveyPage.tsx`
- implementation details that probably belong under subcomponents or shared hooks

### Example 4: Angular feature-area structure

See [examples/angular-feature-structure-example.md](examples/angular-feature-structure-example.md).

Use this when the codebase follows feature-area organization and you need to avoid flattening across meaningful Angular boundaries.

### Example 5: Plan codemod-assisted import rewrites

See [examples/codemod-import-rewrite-playbook.md](examples/codemod-import-rewrite-playbook.md).

Use this when many files move and manual import rewriting is too error-prone.

## Best Practices

### Do

- classify files by role before labeling them as orphaned
- preserve public API surfaces unless the task explicitly includes API redesign
- use alias-aware and resolver-aware analysis in JS/TS repositories
- prefer codemods or AST-assisted updates for medium and large moves
- choose the strategy that improves cohesion with the lowest API churn
- verify imports, barrels, tests, lint, typecheck, and builds after moves
- keep refactors scoped to one feature or module family when possible
- document when a file remains at the parent level intentionally
- add narrow enforcement rules after cleanup if the team wants regression prevention

### Don’t

- assume every parent-level file is wrong just because child folders exist
- move `index.ts`, route shells, layout files, or bootstrap files without checking intent
- flatten across package boundaries or published import contracts casually
- rely only on path depth or filename heuristics in alias-heavy repos
- rewrite many imports manually when a codemod would be safer
- break lazy loading, route generation, or deep-link import paths during cleanup
- mix multiple flattening strategies in one area without a clear rationale
- skip verification after file moves

## Troubleshooting

### Problem: A parent-level file looks orphaned, but moving it breaks consumers

**Symptoms:** The file appears misplaced by directory shape, but after moving it the build fails, imports break, or external consumers lose an expected path.
**Solution:** Reclassify the file using `references/component-flattening-boundary-rules.md`. Check whether it is actually a barrel, public entrypoint, route shell, or package export surface. If yes, keep it in place or introduce a compatibility re-export before moving implementation.

### Problem: Alias-based imports were missed during analysis

**Symptoms:** Relative path searches show few consumers, but typecheck or build fails after the move. Imports may use aliases such as `@/features/survey` or re-export through barrels.
**Solution:** Re-run the analysis with alias-aware resolution. Inspect `tsconfig` path mappings, barrel files, and re-export chains. Use the alias-aware example and codemod playbook instead of relying on raw grep alone.

### Problem: The move succeeds locally but lazy loading or routing breaks

**Symptoms:** The app compiles, but route chunks fail, pages stop loading, or dynamic imports cannot resolve at runtime.
**Solution:** Check for `import()` usage, route registration, framework conventions, and generated route manifests. Restore the original boundary if the file location is part of a routing or code-splitting contract.

### Problem: The issue is really domain design, not flattening

**Symptoms:** The analysis keeps expanding into questions about bounded contexts, coupling, or how features should be grouped across the repo.
**Solution:** Stop the flattening workflow and hand off using `agents/component-flattening-router.md`. This skill is for local hierarchy cleanup, not domain decomposition or dependency architecture.

### Problem: Fitness rules create noisy false positives

**Symptoms:** New Semgrep or lint rules flag valid `index.ts`, layout, entrypoint, or package-export files as violations.
**Solution:** Narrow the rule scope to implementation files only. Exclude barrels, route/layout shells, and explicit entrypoints. Use `references/component-flattening-fitness-functions.md` as a starting pattern, not a blanket rule.

## Related Skills

- `@coupling-analysis` - use when the real question is dependency direction, import fan-in/fan-out, or architectural coupling
- `@domain-identification-grouping` - use when the task is really about feature/domain boundaries rather than misplaced files
- package-boundary or monorepo architecture review skills - use when changes cross package exports, workspace libraries, or published APIs
- codemod or large-scale refactor execution skills - use when the plan is sound but the main work is automated migration

## Additional Resources

### Local references

- [Boundary rules](references/component-flattening-boundary-rules.md)
- [Decision matrix](references/component-flattening-decision-matrix.md)
- [Verification checklist](references/component-flattening-verification-checklist.md)
- [Fitness functions](references/component-flattening-fitness-functions.md)

### Local examples

- [JS/TS alias-aware analysis](examples/js-ts-alias-aware-analysis.md)
- [React component flattening example](examples/react-component-flattening-example.md)
- [Angular feature structure example](examples/angular-feature-structure-example.md)
- [Codemod import rewrite playbook](examples/codemod-import-rewrite-playbook.md)

### Local routing guidance

- [Component flattening router](agents/component-flattening-router.md)

### External references

These sources informed the enhanced workflow guidance:

- React: keeping components pure
- React: sharing state between components
- Angular style guide
- Vue style guide
- TypeScript modules and `paths`
- Node.js package exports/imports behavior
- MDN `import` reference
- Semgrep rule syntax
- jscodeshift
- ts-morph

## Provenance Notes

This skill preserves the original upstream intent: detect root-level implementation code, analyze flattening options, and create a refactoring plan. The enhanced version adds stronger activation boundaries, safer classification rules, alias-aware analysis, verification requirements, and clearer escalation guidance so agents can use it operationally without over-flattening valid module structures.
