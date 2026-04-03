# Repository Archetypes and Boundary Guidance

Use this guide when directory structure alone is misleading.

## 1. Single-package frontend app

Primary boundary signals:

- `package.json`
- `src/features/*`
- import aliases from `tsconfig.json` or `jsconfig.json`
- explicit module boundaries

Watch for:

- barrel files hiding ownership
- aliases that point outside feature folders
- generated API clients under `src/`

Recommended approach:

- start with app-level feature folders or modules
- reconcile against actual import roots
- mark confidence lower if aliases blur ownership

## 2. Monorepo/workspace repository

Primary boundary signals:

- workspace manifests
- top-level `apps/` and `packages/`
- shared libraries

Watch for:

- shared packages dominating totals
- counting all apps in one distribution before package-level segmentation

Recommended approach:

- inventory workspace packages first
- then, only if useful, run a second pass inside the largest packages

## 3. Python service repository

Primary boundary signals:

- `pyproject.toml`
- importable package roots
- clear app/module directories

Watch for:

- `.venv/` or vendored dependencies inside the repo
- migrations that may be generated or partially generated

Recommended approach:

- treat importable packages or major modules as candidate components
- decide explicitly whether migrations belong in the metric set

## 4. Java repository

Primary boundary signals:

- package namespaces
- source roots
- module layout

Watch for:

- generated sources under build directories
- package names that imply subdomains rather than deployable components

Recommended approach:

- use package boundaries and subpackage structure
- avoid treating every parent namespace as a component

## 5. Mixed frontend/backend repository

Primary boundary signals:

- separate manifests
- separate source roots
- language boundaries

Watch for:

- one combined ranking that mixes unrelated systems
- infrastructure files accidentally counted as code components

Recommended approach:

- create one inventory per coherent subsystem
- summarize globally only after subsystem reports exist

## Boundary confidence

Use these labels:

- `high`: boundary is defined by maintained manifests, package roots, or namespaces
- `medium`: boundary is mostly structural but needs some inference
- `low`: boundary is inferred mainly from folders or naming conventions

If confidence is low, say so explicitly in the report.
