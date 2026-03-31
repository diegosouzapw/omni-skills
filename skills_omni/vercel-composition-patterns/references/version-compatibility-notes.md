# Version Compatibility Notes

This skill keeps the main workflow anchored in stable React guidance:

- props
- children and explicit composition
- lifting state up
- context for shared descendant state
- custom hooks for reusable logic

## Stable guidance

Treat the following as the default regardless of framework choice:

- prefer the smallest pattern that solves the problem
- avoid boolean-prop proliferation
- keep one source of truth for shared state
- avoid syncing duplicated state with Effects
- prefer context or explicit slots over brittle child traversal

## Version-specific caution

Some upstream ecosystem discussions include claims tied to newer React versions or experimental patterns. Do not present those as universal defaults unless the current target stack explicitly supports them and the project has chosen to adopt them.

In particular:

- Do not assume version-specific APIs replace standard context patterns everywhere.
- Do not rewrite stable guidance around `useContext` or established composition patterns unless project constraints require it.
- Mark framework-specific constraints separately from React-wide guidance.

## Framework note: server and client boundaries

In frameworks such as Next.js App Router, interactive compound components that use hooks or context usually need an explicit client boundary.

Use this split:

- server components for data loading and static composition
- client components for hooks, local interactivity, and context providers tied to user interaction

## Review rule

If a recommendation only applies to a specific React or framework version, label it clearly in docs, examples, and migration notes.
