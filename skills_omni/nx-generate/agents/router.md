# Router

Use this skill when the main task is Nx-based scaffolding or code generation.

## Stay in `nx-generate` when

- the user wants to create an app, library, component, route, or feature
- the repo uses local Nx generators to enforce conventions
- the work starts with `nx g` or `nx generate`

## Hand off to `@nx-run-tasks` when

- generation is complete and the remaining work is task execution
- the user mainly wants lint/test/build/affected verification
- the issue is now CI-style command execution rather than scaffolding

## Hand off to `@nx-workspace` when

- the main task is workspace configuration or plugin setup
- the user wants to change presets, root config, tags policy, or workspace structure by hand
- the request is broader than a single generation workflow

## Hand off to debugging/refactoring skills when

- generated output exposes broader application failures
- the problem becomes architectural, dependency-boundary, or circular-dependency remediation
- the fix requires code changes well beyond normal generator output cleanup
