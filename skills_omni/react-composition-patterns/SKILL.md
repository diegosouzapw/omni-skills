---
name: "react-composition-patterns"
description: "React Composition Patterns workflow skill. Use this skill when a request involves refactoring flag-heavy React components, designing scalable component-library APIs, or choosing between props, children, compound components, context, render props, and ref-based escape hatches. Includes version-scoped React 18 and React 19 guidance. Do NOT use this skill for React or Next.js performance tuning alone; route those requests to react-best-practices instead."
version: "0.0.1"
category: "development"
tags:
  - "react-composition-patterns"
  - "react"
  - "composition"
  - "compound-components"
  - "context"
  - "render-props"
  - "component-api"
  - "refactoring"
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
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/react-composition-patterns"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# React Composition Patterns

## Overview

This skill helps an agent choose and apply React composition patterns that scale without turning component APIs into a maze of boolean flags, implicit state coupling, or brittle child manipulation.

It preserves the intent of the upstream `react-composition-patterns` material while reshaping it into an execution-oriented workflow for native Omni Skills use. The main focus is practical component API design: when plain props are enough, when children-based composition is better, when to introduce compound components with context, and when advanced patterns such as render props or imperative refs are justified.

Use this skill to refactor or design reusable React components safely, with clear state ownership, explicit public APIs, and version-scoped React 18/19 guidance.

## When to Use This Skill

Use this skill when the request is primarily about component API design, composition boundaries, or reusable React architecture.

### Strong triggers

- A component has too many boolean props or impossible prop combinations.
- A design-system or component-library API needs to be more flexible without exposing internal implementation details.
- Multiple subcomponents need to coordinate shared state, selection state, or open/closed state.
- A component currently relies on brittle `Children` inspection or `cloneElement` prop injection.
- The user needs compound components, explicit variants, slot-like composition, render props, or provider-backed APIs.
- A component must support controlled and uncontrolled usage in a clear, testable way.
- A reusable component needs a ref-based escape hatch for focus, measurement, or integration.

### Usually not a trigger

- Simple one-off components where regular props are already clear.
- Styling-only variants better handled by ordinary props or CSS conventions.
- Requests focused only on React or Next.js performance tuning.
- App-routing, server-component, or framework-specific behavior that is not mainly about composition.
- Cases where plain `children` and a small prop surface already solve the problem.

### Decision boundary

Prefer the lightest pattern that solves the API problem:

1. Start with plain props.
2. Use `children` for simple visual or structural composition.
3. Use explicit variants instead of multiple booleans for mutually exclusive modes.
4. Lift state when sibling coordination is needed.
5. Use compound components with context when descendants need shared state or actions.
6. Use render props only when consumers truly need to control rendering logic.
7. Use ref APIs only for narrow imperative needs.

## Operating Table

| Situation | Preferred pattern | Why | Avoid by default | Validation check |
| --- | --- | --- | --- | --- |
| Small customization of one component | Plain props | Lowest complexity and easiest to read | Introducing context too early | Can a new reader understand the API from the prop names alone? |
| Wrapper, layout, or visual nesting | `children` composition | Native React composition model | Converting simple nesting into render props | Does the parent define structure while callers supply content? |
| Mutually exclusive modes | Explicit variant components or a constrained variant prop | Makes impossible states harder to express | Multiple booleans like `primary`, `secondary`, `danger`, `ghost` together | Are invalid combinations removed from the public API? |
| Shared descendant state | Compound components with context | Coordinates behavior across subcomponents cleanly | Prop drilling or child rewriting | Can subcomponents work together without hidden prop coupling? |
| Consumer-controlled rendering | Render prop | Lets the caller own rendering while the component owns logic | Render props for simple layout composition | Is the consumer actually customizing render behavior, not just passing content? |
| Child prop injection | Prefer slots or context | More explicit and less fragile | `cloneElement` / `Children.map` as the default design | Would wrappers, fragments, or reordered children break the API? |
| Focus, measurement, third-party integration | Ref prop and `useImperativeHandle` when needed | Supports narrow imperative escape hatches | Large instance-like method surfaces | Is the imperative API minimal and documented? |
| Shared state becoming complex | Provider + reducer or dedicated hook | Clarifies state transitions and testing | Scattered `useState` plus effect synchronization | Is there a single, explicit state/action contract? |

For a fuller routing aid, use [references/pattern-selection-matrix.md](references/pattern-selection-matrix.md).

## Workflow

1. **Confirm the actual API problem.**
   - Identify whether the user is refactoring an existing component or designing a new one.
   - List the current props, especially booleans, mutually exclusive modes, duplicated callbacks, or prop drilling.
   - Confirm whether the component is app-specific or part of a reusable library.

2. **Choose the lightest viable composition pattern.**
   - If plain props are clear, keep plain props.
   - If the main need is structural flexibility, use `children`.
   - If the problem is invalid mode combinations, use explicit variants.
   - If descendants must share state or actions, use compound components with context.
   - If callers must control rendering, consider a render prop.
   - If imperative access is required, design a narrow ref API.

3. **Define state ownership before changing code.**
   - Decide whether the API is controlled, uncontrolled, or supports both.
   - Pick a single source of truth for shared state.
   - Avoid mirroring props into state with effects unless there is a real external synchronization need.

4. **Design the public API explicitly.**
   - Name subcomponents and props to reflect user intent, not internals.
   - Prefer explicit subcomponents such as `Tabs.List`, `Tabs.Trigger`, `Tabs.Panel` over hidden child rewriting.
   - If context is required, define a stable contract for state, actions, and metadata.
   - Add guard hooks or runtime errors for subcomponents that require a provider.

5. **Implement with React-safe composition defaults.**
   - Prefer `children`, slots, context, and lifted state over `Children` traversal or `cloneElement`.
   - Keep provider values minimal and stable.
   - Colocate complex update logic in a reducer or dedicated hook when needed.
   - Only expose imperative methods that solve a real integration or focus-management problem.

6. **Check React version compatibility.**
   - If the codebase is on React 18, use `<SomeContext.Provider value={...}>`.
   - If the codebase is on React 19, `<SomeContext value={...}>` may be used where supported.
   - In React 19, `ref` can be passed as a prop in many cases; do not claim that `use()` replaces `useContext()` broadly.
   - Use [references/react-18-vs-19-compatibility.md](references/react-18-vs-19-compatibility.md) when examples or migrations are version-sensitive.

7. **Validate ergonomics and migration safety.**
   - Confirm that invalid combinations are gone or clearly constrained.
   - Check whether existing consumers need a migration path.
   - Verify that state is preserved or intentionally reset when variants or tree structure change.
   - Ensure accessibility responsibilities remain explicit after composition changes.

8. **Review with the packaged checklist.**
   - Run through [references/review-checklist.md](references/review-checklist.md).
   - If the pattern choice still feels unclear, compare alternatives in [references/pattern-selection-matrix.md](references/pattern-selection-matrix.md).
   - If the issue is actually performance-only, hand off to the appropriate React best-practices workflow.

## Examples

### Example 1: Refactor boolean-heavy props into explicit variants

Before choosing context or render props, first check whether the API only needs explicit modes.

See: [examples/refactor-boolean-props-to-variants.md](examples/refactor-boolean-props-to-variants.md)

### Example 2: Build compound components with shared state

Use this when descendants must coordinate selection, open state, or other shared behavior.

See: [examples/compound-components-with-context.md](examples/compound-components-with-context.md)

### Example 3: Replace fragile `cloneElement` composition

Use this when the current API rewrites child props or depends on child order/count assumptions.

See: [examples/avoid-cloneelement-with-slots-or-context.md](examples/avoid-cloneelement-with-slots-or-context.md)

### Example 4: Design a controlled and uncontrolled compound API

Use this when a reusable component must support both library-managed state and app-managed state without drift.

See: [examples/controlled-vs-uncontrolled-compound-api.md](examples/controlled-vs-uncontrolled-compound-api.md)

## Best Practices

### Do

- Start with plain props and `children`; escalate only when the problem requires more structure.
- Replace boolean-prop proliferation with explicit variants or subcomponents.
- Keep state ownership obvious: controlled, uncontrolled, or provider-owned.
- Use context for shared descendant coordination, not as a default replacement for props.
- Keep context values small, intentional, and structurally stable.
- Expose clear subcomponent APIs and fail fast when a required provider is missing.
- Prefer explicit slots, context, or render props over traversing and rewriting children.
- Use reducers or dedicated hooks when compound state transitions become complex.
- Scope imperative APIs to focus, measurement, and integration tasks.
- Version-gate React 18 and React 19 examples during migrations.

### Do not

- Add more booleans to patch an already-confusing component API.
- Use `Children` or `cloneElement` as a default composition technique.
- Treat `use()` as a blanket replacement for `useContext()`.
- Mirror props to state with effects unless the synchronization need is real and explicit.
- Put unrelated data and unstable inline functions into a broad provider value without need.
- Mix controlled and uncontrolled state ownership silently.
- Expose large imperative surfaces that behave like hidden component instances.

### React 19 notes

- `useContext()` remains the standard way to read context in client components.
- React 19 allows rendering the context object directly as a provider in supported environments: `<ThemeContext value={theme}>`.
- React 18 uses `<ThemeContext.Provider value={theme}>`.
- React 19 allows passing `ref` as a prop in many cases, reducing the need for `forwardRef` going forward.
- If a codebase is mixed or not fully upgraded, prefer the syntax already supported by the project rather than partially modernizing examples.

## Troubleshooting

### Problem: Compound subcomponents stop sharing state

**Symptoms:** `Tabs.List` renders, but `Tabs.Trigger` and `Tabs.Panel` do not stay in sync; subcomponents behave as if no provider exists; a guard hook throws unexpectedly.

**Solution:** Verify that all subcomponents import the same context module, are rendered beneath the intended provider, and are not accidentally using duplicated bundled modules or alternate import paths. Add a strict hook such as `useTabsContext()` that throws a clear error when used outside the provider.

### Problem: Consumers rerender whenever the parent rerenders

**Symptoms:** Context consumers update on every provider render even when no meaningful shared state changed; the provider value is recreated as a new object or contains unstable inline callbacks.

**Solution:** Keep the provider contract minimal, avoid packing unrelated values into the same context, and stabilize value shape where needed. If actions and state change at different rates, consider separating concerns or moving complex transitions into a reducer-backed hook.

### Problem: State resets after refactoring to variants or subcomponents

**Symptoms:** Switching variants, changing child order, or restructuring the tree unexpectedly clears input state, selection state, or expansion state.

**Solution:** Check whether the refactor changed element identity or tree position. Preserve stable keys and component positions when the state should survive, and intentionally reset only when the UX requires it.

### Problem: Controlled and uncontrolled modes drift apart

**Symptoms:** External `value` updates are ignored, internal state lags behind, or both parent and component try to own the same state.

**Solution:** Choose a clear contract. Controlled mode should read from props and notify through callbacks. Uncontrolled mode should own internal state. If both are supported, define precedence explicitly and document it in the component API.

### Problem: Effect-based synchronization causes loops or flicker

**Symptoms:** The component copies props into state inside `useEffect`, then fights with parent updates, produces visible flicker, or replays state transitions unnecessarily.

**Solution:** Derive values during render when possible, or lift shared state upward. Avoid using effects to maintain parallel sources of truth unless integrating with an external system that truly requires synchronization.

### Problem: A `cloneElement` or `Children` pattern breaks under wrappers or fragments

**Symptoms:** The API only works when children appear in a specific order, child counting is wrong, wrappers break behavior, or injected props disappear when the structure changes.

**Solution:** Replace child inspection with explicit slots, context-based subcomponents, or a render prop if the consumer truly needs render control. Keep `Children` and `cloneElement` for narrow library-level cases with documented constraints.

### Problem: React 19 examples fail in a React 18 codebase

**Symptoms:** `<SomeContext value={...}>` does not compile or team members are confused about why `ref` is being passed like a normal prop.

**Solution:** Check the installed React version first. Use the React 18 provider syntax and existing ref conventions until the project is actually on React 19-compatible tooling. See [references/react-18-vs-19-compatibility.md](references/react-18-vs-19-compatibility.md).

## Related Skills

- `@react-best-practices` - Use when the request is mainly about performance, rendering efficiency, or general React optimization rather than API composition.
- `@accessibility` - Use when the component architecture is correct but accessibility semantics, keyboard support, focus order, or ARIA behavior need deeper review.
- Frontend testing skill - Use when the main next step is testing composed behavior, controlled/uncontrolled flows, or provider-backed interactions.
- Design-system or component-library skill - Use when the work expands from one API refactor into broader token, theming, or library-governance decisions.
- TypeScript API design skill - Use when the hardest part is modeling mutually exclusive props, public types, or generic component contracts.

## Additional Resources

### Local references

- [Pattern selection matrix](references/pattern-selection-matrix.md)
- [React 18 vs 19 compatibility notes](references/react-18-vs-19-compatibility.md)
- [Compound components troubleshooting guide](references/troubleshooting-compound-components.md)
- [PR and design review checklist](references/review-checklist.md)

### Local examples

- [Refactor boolean props to variants](examples/refactor-boolean-props-to-variants.md)
- [Compound components with context](examples/compound-components-with-context.md)
- [Avoid `cloneElement` with slots or context](examples/avoid-cloneelement-with-slots-or-context.md)
- [Controlled vs uncontrolled compound API](examples/controlled-vs-uncontrolled-compound-api.md)

### Agent routing note

- [Composition routing note](agents/react-composition-router.md)

### Provenance and upstream intent

This enhanced version preserves the upstream skill identity and original focus: avoiding boolean-prop proliferation, using composition to build flexible React APIs, centralizing shared state appropriately, and handling React 19 changes carefully. The wording has been tightened to better reflect current official React guidance, especially around context, refs, `Children`, `cloneElement`, and version-specific syntax.
