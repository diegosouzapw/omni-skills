# Composition Decision Matrix

Use this matrix to choose the smallest React pattern that solves the problem.

## Decision order

1. **Simple props** if the API is still understandable.
2. **Children or slots** if consumers need structural flexibility.
3. **Lifted state** if siblings need coordination.
4. **Compound components with context** if reusable coordinated subcomponents need shared state.
5. **Custom hooks** if the real need is shared logic rather than shared structure.

## Pattern comparison

| Pattern | Best for | Good signals | Watch outs | Prefer over |
| --- | --- | --- | --- | --- |
| Props | Simple components with limited modes | Few props, low coordination, clear ownership | Boolean sprawl, prop explosion | Any heavier abstraction |
| Children | Flexible layout or content insertion | Consumer chooses markup; root owns framing | Hidden assumptions about child shape | Slot systems or compound APIs when not needed |
| Explicit slots | Named composition points | Clear regions like `header`, `footer`, `icon` | Too many slots can mimic prop sprawl | Child traversal or order-dependent APIs |
| Lifted state | Coordinated siblings | Shared selection/open state; nearest common parent is clear | Parent becomes too busy if overused | Context if tree depth is still small |
| Compound components | Reusable coordinated widget APIs | Shared state/actions across exported subcomponents | Context coupling, provider omissions, accessibility complexity | `cloneElement` or prop tunneling across many layers |
| Custom hook | Shared behavior without shared UI | Consumers need logic but want rendering freedom | Hook can drift into hidden framework constraints | Compound components when structure is not reusable |

## Fast symptom routing

### Symptom: Many booleans create contradictory combinations

**Choose:** explicit variants, enums, or dedicated wrappers.

**Avoid:** adding another boolean to fix an edge case.

### Symptom: Nested descendants need access to shared actions

**Choose:** lift state first; then add context only if drilling remains excessive.

**Avoid:** broad app-wide context for a local concern.

### Symptom: Consumers need to rearrange UI structure

**Choose:** children, slots, or headless composition.

**Avoid:** rigid wrappers that force markup or semantics.

### Symptom: Multiple subparts of one reusable widget must coordinate

**Choose:** compound components with private context and invariant hooks.

**Avoid:** `cloneElement`-based prop injection as the default architecture.

### Symptom: The reusable piece is mostly logic

**Choose:** a custom hook.

**Avoid:** building an elaborate component namespace when rendering should stay user-owned.

## Review questions

- Can the public API be explained without describing internal implementation details?
- Is there one clear owner for interactive state?
- Are any props only compensating for a rigid internal structure?
- Could a custom hook provide the same value with less API surface?
- Would child wrappers or reordering break the design?
- Does the proposed pattern preserve semantics and accessibility?
