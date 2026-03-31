---
name: "vercel-composition-patterns"
description: "React composition patterns workflow skill. Use this skill when a user needs to replace boolean-prop sprawl, prop drilling, or brittle child APIs with clearer component composition, lifted state, context-backed compound components, and explicit variants that stay maintainable as React codebases scale."
version: "0.0.1"
category: "development"
tags:
  - "vercel-composition-patterns"
  - "react"
  - "composition"
  - "compound-components"
  - "context"
  - "state-management"
  - "component-api"
  - "accessibility"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-31"
date_updated: "2026-03-31"
upstream_skill: "skills/vercel-composition-patterns"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "10"
upstream_head_repo: "diegosouzapw/omni-skills"
upstream_head_sha: "6694282a8c80060989f27612505ced763d291b76"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# React Composition Patterns

## Overview

This skill packages the upstream Vercel composition-patterns guidance as an operational React architecture workflow.

Use it when a component API is becoming hard to reason about because of boolean prop proliferation, prop drilling, duplicated state, or brittle child manipulation. The goal is to move from configuration-heavy APIs toward clearer composition choices: simple props when they are enough, `children` or explicit slots when structure should stay flexible, lifted state when siblings must coordinate, and context-backed compound components when a reusable composite API needs shared state.

This enhanced version preserves the upstream intent while making the skill more directly usable by agents during implementation, review, and refactoring. It adds a decision matrix, review checklist, accessibility notes, version boundary notes, and concrete examples.

## When to Use This Skill

Use this skill when:

- A React component has accumulated too many booleans such as `isCompact`, `isDanger`, `isInline`, `isSelected`, and the combinations are unclear or contradictory.
- Sibling components need to coordinate shared state, and the current implementation duplicates or syncs state across several places.
- Props are being drilled deeply only so nested children can access shared state or actions.
- You are designing reusable design-system or product primitives where consumers need layout freedom without losing correctness.
- You need a compound component API such as `Tabs`, `Accordion`, `Popover`, or similar coordinated UI.
- Child traversal, positional assumptions, or `cloneElement` hacks are making the API fragile.
- A composition refactor must preserve accessibility, semantics, and predictable state ownership.

### Do not use this skill when

- A simple presentational component with a few props already solves the problem.
- The component is page-specific and does not need a reusable public API.
- There is no shared state or coordination need between children.
- A custom hook is enough because the problem is shared logic, not shared UI structure.
- Context would hide too much behavior or create unnecessary coupling between unrelated descendants.

### Quick decision rule

Use the least powerful pattern that solves the problem:

1. Start with clear props.
2. Move to `children` or explicit slots if consumers need structural flexibility.
3. Lift state up when siblings need coordination.
4. Add context-backed compound components only when coordinated reusable subcomponents need shared state.
5. Use a custom hook instead of a compound component when you only need shared logic.

## Operating Table

| Symptom | Likely cause | Recommended pattern | Avoid | Validation check |
| --- | --- | --- | --- | --- |
| Too many boolean props | Public API is encoding too many modes | Replace booleans with explicit `variant`/`size` props or dedicated subcomponents | Adding more booleans to patch edge cases | Can impossible combinations still be expressed? |
| Deep prop drilling | Shared state/actions are needed far below the owner | Lift state to the nearest common parent, then consider context if drilling remains excessive | Global context by default | Can data flow be explained in one sentence? |
| Siblings must stay in sync | State ownership is split or duplicated | Lift state so one owner coordinates both children | Mirroring parent state into child state with Effects | Is there exactly one source of truth? |
| Consumer needs markup freedom | API is too prescriptive about internal structure | Prefer `children`, slots, or headless subcomponents | Hard-coded layout wrappers that block composition | Can consumers rearrange layout without breaking behavior? |
| Compound component subparts need shared state | Reusable coordinated widget needs internal communication | Private context + root provider + named subcomponents | Passing hidden props through multiple layers manually | Do subcomponents fail fast outside the provider? |
| Child inspection is brittle | API depends on order, element type, or injected props | Prefer context, explicit slots, or direct props | Heavy `Children.map` / `cloneElement` orchestration | Will wrappers or reordered children break behavior? |
| State resets unexpectedly | Composition changes are remounting components | Review keys, wrapper changes, and ownership boundaries | Using keys or conditional wrappers casually | Does toggling variants preserve intended state? |
| Accessible widget works visually but not by keyboard | Composition changed semantics or ARIA relationships | Use native elements first; add APG-aligned roles only when needed | Decorative wrappers that break roles, labels, or focus order | Can the widget be used fully by keyboard and semantic queries? |
| Hooks/context fail in framework boundaries | Interactive pieces are rendered in a server-only boundary | Move provider/hook usage into a client component boundary | Calling hooks in a server component | Are interactive roots explicitly client-side where required? |

## Workflow

1. **Inspect the current API surface**
   - List all public props and identify booleans, mutually exclusive combinations, and props that only exist to alter internal structure.
   - Note whether the problem is API design, state ownership, shared logic, or accessibility.

2. **Choose the smallest viable pattern**
   - Keep simple props if the component remains understandable.
   - Use `children` or explicit slots when consumers need layout flexibility.
   - Lift state if multiple siblings need to coordinate.
   - Use a compound component only when reusable subcomponents must share state and actions.
   - Use a custom hook if the real need is reusable behavior rather than reusable structure.

3. **Define state ownership explicitly**
   - Identify the single source of truth.
   - Remove duplicated state before introducing context.
   - Avoid Effects that only synchronize one piece of state to another.
   - Decide whether the API should support controlled, uncontrolled, or both usage modes.

4. **Design the public API deliberately**
   - Prefer explicit variants over piles of booleans.
   - Use names that reveal behavior rather than implementation.
   - Export only the subcomponents consumers should rely on.
   - Keep internal wiring private.

5. **Implement with the safest mechanism**
   - Prefer props and composition over child inspection.
   - If using context, keep the context value minimal and stable.
   - Add an invariant hook so subcomponents fail fast when rendered outside the provider.
   - Avoid `cloneElement` unless you control all children tightly and have no clearer alternative.

6. **Preserve semantics and accessibility**
   - Start with native elements first.
   - If building a composite widget such as tabs, ensure roles, labels, keyboard behavior, focus movement, and relationships remain valid.
   - Confirm composition wrappers do not break labels, heading structure, button semantics, or focus order.

7. **Validate behavior**
   - Test by user-visible behavior, not implementation details.
   - Use role/name/label-based queries where possible.
   - Exercise default, controlled, uncontrolled, disabled, and nested usage if supported.
   - Check that state does not reset unintentionally when wrappers or variants change.

8. **Document migration and usage**
   - Show before/after examples for boolean-prop migrations.
   - Document constraints such as required provider boundaries or client-component placement.
   - Record version-specific caveats separately from stable guidance.

## Examples

### Example 1: Replace boolean sprawl with explicit variants

See [examples/boolean-props-to-variants.md](examples/boolean-props-to-variants.md).

Use this when a component exposes multiple booleans that can conflict.

### Example 2: Compound component with context and an invariant hook

See [examples/context-invariant-hook.tsx](examples/context-invariant-hook.tsx).

Use this as a template for `Root + subcomponents` APIs where subcomponents need shared state and actions.

### Example 3: Accessible tabs composition

See [examples/compound-tabs-accessible.tsx](examples/compound-tabs-accessible.tsx).

Use this when building a compound widget that must preserve keyboard and ARIA behavior.

### Example 4: Decide between a custom hook and a compound component

See [examples/custom-hook-vs-compound-component.md](examples/custom-hook-vs-compound-component.md).

Use this when shared behavior is being mistaken for a UI composition problem.

### Example 5: Next.js App Router client boundary placement

See [examples/nextjs-client-boundary-example.tsx](examples/nextjs-client-boundary-example.tsx).

Use this when a composition pattern depends on hooks or context inside a React Server Components environment.

### Example 6: Behavior-first testing approach

See [examples/testing-compound-components.spec.md](examples/testing-compound-components.spec.md).

Use this to validate composed widgets through semantics and user interactions.

## Best Practices

### Do

- Start with simple props and only escalate to heavier composition patterns when the API pressure is real.
- Prefer explicit variants or dedicated subcomponents over mutually conflicting booleans.
- Lift state to the nearest common owner before introducing context.
- Keep one clear source of truth for interactive state.
- Use private context plus a small custom hook for compound-component internals.
- Keep context values minimal to reduce coupling and rerender pressure.
- Preserve native HTML semantics whenever possible.
- Test by behavior and accessible queries.
- Document controlled versus uncontrolled expectations explicitly.
- Keep version-specific guidance separate from stable React guidance.

### Do not

- Add booleans that create impossible or contradictory states.
- Mirror props into local state unless there is a strong reason.
- Add Effects only to keep two sources of state synchronized.
- Depend on child order or child type unless the library fully controls those children.
- Use `cloneElement` as the default way to inject state or actions into subcomponents.
- Hide important behavior inside broad context values that unrelated children consume.
- Break focus management, labeling, or keyboard support while refactoring structure.
- Present framework- or version-specific behavior as universal React guidance.

### Pattern priorities preserved from upstream intent

| Priority | Category | Impact | Notes |
| --- | --- | --- | --- |
| 1 | Component architecture | High | Avoid boolean-prop API sprawl; prefer composition and explicit APIs |
| 2 | State management | Medium | Lift state and define clear shared interfaces before adding complexity |
| 3 | Implementation patterns | Medium | Prefer children, slots, and explicit variants over brittle indirection |
| 4 | Version-specific APIs | Medium | Treat React-version guidance as conditional, not default |

## Troubleshooting

### Problem: The component has too many booleans and reviewers cannot predict valid states

**Symptoms:** Props such as `isPrimary`, `isDanger`, `isCompact`, and `isInline` combine in unclear ways; stories or tests reveal invalid combinations; consumers keep asking which booleans win.

**Solution:** Replace boolean combinations with explicit variants, sizes, or dedicated wrappers. If behaviors are materially different, split the API into clearer subcomponents instead of encoding all modes in one prop bag. Use the decision matrix and migration example before adding any new public prop.

### Problem: Parent and child state drift out of sync

**Symptoms:** Selected item, open state, or current value appears stale; multiple components store the same concept; Effects copy props into state and then try to keep them synchronized.

**Solution:** Re-establish a single owner for the shared state. Compute derived values during render where possible. Remove synchronization Effects that only mirror existing values. If siblings must coordinate, lift the state to their nearest common parent.

### Problem: A subcomponent crashes or silently misbehaves outside the compound root

**Symptoms:** `useContext(...)` returns `undefined`; subcomponents render but do nothing; consumers forget to wrap them in the root provider.

**Solution:** Add an invariant hook that throws a clear error when a subcomponent is rendered outside the expected provider. Keep the provider boundary obvious in examples and docs.

### Problem: Child wrappers or reordering break the API

**Symptoms:** A component only works when children appear in a specific order; wrapping a child in a `div` breaks behavior; `Children.map` or `cloneElement` logic becomes brittle.

**Solution:** Replace child inspection with explicit slots, direct props, or context-backed subcomponents. Only use child traversal for narrowly controlled library internals where the constraints are explicit.

### Problem: State resets when variants or wrappers change

**Symptoms:** Toggling layout or switching wrapper structure causes panels, inputs, or active items to reset unexpectedly.

**Solution:** Inspect remount boundaries, conditional rendering branches, and `key` usage. Preserve component identity where state should survive. Do not change wrappers casually in ways that remount the subtree.

### Problem: The composed widget looks correct but is not accessible

**Symptoms:** Keyboard navigation fails; tabs or panels are missing required relationships; tests using semantic queries fail even though snapshots look fine.

**Solution:** Recheck native semantics first, then validate ARIA roles and relationships only where necessary. Compare the implementation against the accessibility notes and the tabs example. Test with role-based queries and keyboard interactions rather than snapshots alone.

### Problem: The solution should be a custom hook, not a compound component

**Symptoms:** There is little shared structure, but shared logic such as fetching, selection, or keyboard handling is being wrapped in an elaborate component API.

**Solution:** Extract a custom hook and keep rendering ownership with the consumer. Only build a compound component if the reusable value comes from a coordinated UI structure, not just reusable logic.

### Problem: The composition pattern fails in a Server Components environment

**Symptoms:** Hooks cannot run where the compound root is declared; context provider placement causes runtime or build errors; interactive subcomponents are mixed into server-only files.

**Solution:** Move interactive roots, context providers, and hook consumers into an explicit client boundary. Keep server components responsible for data loading and static composition, and hand off interactivity to client components.

## Related Skills

- `@vercel-react-best-practices` - Use when the task broadens from composition architecture into wider React code quality and implementation review.
- `@vercel-react-native-skills` - Use when the work spans React patterns beyond this specific composition workflow.
- `@deploy-to-vercel` - Use after the component work is complete and the task shifts to deployment.
- `@vercel-cli-with-tokens` - Use when the next step is authenticated Vercel CLI execution rather than React API design.

## Additional Resources

### Local support pack

- [Composition decision matrix](references/composition-decision-matrix.md)
- [API review checklist](references/api-review-checklist.md)
- [Compound components accessibility notes](references/compound-components-accessibility-notes.md)
- [Version compatibility notes](references/version-compatibility-notes.md)
- [Boolean props to variants example](examples/boolean-props-to-variants.md)
- [Context invariant hook template](examples/context-invariant-hook.tsx)
- [Accessible tabs example](examples/compound-tabs-accessible.tsx)
- [Custom hook vs compound component](examples/custom-hook-vs-compound-component.md)
- [Next.js client boundary example](examples/nextjs-client-boundary-example.tsx)
- [Testing compound components](examples/testing-compound-components.spec.md)
- [Pattern router for agents](agents/composition-pattern-router.md)

### Upstream intent preserved

The upstream Vercel guidance emphasized these themes, which remain the center of this skill:

- avoid boolean props as a scaling strategy
- prefer composition for flexible component APIs
- lift shared state deliberately
- use context-backed compound components when subparts must coordinate
- decouple public APIs from internal implementation details

### External references used to curate this enhanced version

- React docs on props, state sharing, context, custom hooks, `Children`, and `cloneElement`
- MDN and WAI-ARIA guidance for tabs semantics and keyboard behavior
- Testing Library guidance for behavior-first validation
- Next.js App Router guidance for server/client boundaries
