# Composition Pattern Router

Use this router when a task starts in React composition patterns but may need a more specialized skill.

## Stay in this skill when

- the core problem is component API design
- boolean-prop sprawl needs a redesign
- sibling coordination or lifted state is the main issue
- compound components, context boundaries, or child API brittleness are central
- accessibility must be preserved during a composition refactor

## Hand off when

### To `@vercel-react-best-practices`

Use when the task broadens into general React code review, rendering performance, hooks hygiene, or app-wide React conventions.

### To `@vercel-react-native-skills`

Use when the problem is no longer mainly about composition patterns and spans broader React implementation topics.

### To `@deploy-to-vercel`

Use after the component work is complete and the next step is deployment or release validation.

### To `@vercel-cli-with-tokens`

Use when the task requires authenticated Vercel CLI execution rather than React API design.

## Routing questions

- Is the main blocker API design or implementation mechanics?
- Is the issue local to one component family or app-wide?
- Does the user need architecture guidance, framework operations, or deployment work?
- Are accessibility semantics part of the acceptance criteria?

If the answer remains centered on reusable React component API design, stay with this skill.
