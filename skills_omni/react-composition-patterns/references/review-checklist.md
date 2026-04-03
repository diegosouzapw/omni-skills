# React Composition Review Checklist

Use this checklist for PR review, design review, or pre-handoff validation.

## API clarity

- [ ] Can a consumer understand the public API without learning hidden internal structure?
- [ ] Have boolean props been reduced, constrained, or replaced where combinations were confusing?
- [ ] Are variants, subcomponents, and prop names based on user intent rather than implementation detail?

## Pattern choice

- [ ] Is this the lightest viable composition pattern?
- [ ] Would plain props or `children` be enough?
- [ ] If context is used, do descendants actually need shared state or actions?
- [ ] If render props are used, does the consumer truly need render control?
- [ ] If `Children` or `cloneElement` are used, are the constraints explicit and justified?

## State ownership

- [ ] Is state ownership explicit: controlled, uncontrolled, or provider-owned?
- [ ] Is there one clear source of truth?
- [ ] Has the implementation avoided effect-based mirroring of props to state unless truly necessary?

## Compound component quality

- [ ] Do subcomponents fail fast with a helpful error when rendered outside the provider?
- [ ] Is the context contract small and coherent?
- [ ] Would the API still behave correctly if children are wrapped or reordered?

## React version safety

- [ ] Are examples and code aligned with the repo's actual React version?
- [ ] Is React 19 syntax used only where the codebase supports it?
- [ ] Has the review avoided claiming that `use()` broadly replaces `useContext()`?

## Migration and testing

- [ ] Is there a safe migration path for existing consumers?
- [ ] Are state preservation and reset behaviors intentional?
- [ ] Are accessibility responsibilities still clear after the refactor?
- [ ] Are composed interactions testable at the public API level?
