# API Review Checklist

Use this checklist before merging a composition-oriented component API.

## API shape

- [ ] The component does not rely on multiple booleans that can conflict.
- [ ] Explicit variants or dedicated subcomponents are used where modes are mutually exclusive.
- [ ] Public prop names describe behavior, not internal implementation.
- [ ] Controlled and uncontrolled usage is documented if both are supported.
- [ ] The API can be explained briefly without referencing hidden internals.

## State ownership

- [ ] There is one clear source of truth for shared interactive state.
- [ ] State is lifted to the nearest common owner when siblings coordinate.
- [ ] Derived values are computed during render where possible.
- [ ] Effects are not used only to mirror or synchronize duplicated state.
- [ ] Context is introduced only when state/actions must be shared across deeper descendants.

## Compound-component safety

- [ ] Shared context is private to the component family.
- [ ] Subcomponents fail fast with a clear error outside the provider.
- [ ] Context values are kept minimal.
- [ ] Child order or child type is not a hidden runtime requirement unless explicitly constrained.
- [ ] `cloneElement` and `Children` utilities are not used as the default architecture.

## Accessibility

- [ ] Native elements are used where possible.
- [ ] Composition wrappers do not break semantics, labels, or focus order.
- [ ] Composite widgets define correct roles and relationships only when needed.
- [ ] Keyboard interaction has been verified for interactive widgets.
- [ ] Tests use semantic queries such as role, label text, or accessible name.

## Framework boundaries

- [ ] Hook-using components are placed in valid client boundaries where required.
- [ ] Context providers are not declared in server-only locations if they depend on hooks.
- [ ] Documentation notes any framework-specific placement constraints.

## Validation

- [ ] Stories or examples cover default and edge states.
- [ ] Tests cover user-visible behavior rather than implementation details.
- [ ] Refactors preserve intended state across wrapper or variant changes.
- [ ] Migration examples exist if the public API changed significantly.
