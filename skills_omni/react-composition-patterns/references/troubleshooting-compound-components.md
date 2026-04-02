# Troubleshooting Compound Components

## 1. Subcomponents behave as if they are disconnected

**Symptoms**
- `Accordion.Trigger` does not affect `Accordion.Panel`
- Guard hook throws even though the tree looks correct
- State appears duplicated across subtrees

**Check**
- Are all subcomponents importing the same context object?
- Is the provider actually wrapping the subtree?
- Did bundling, symlinks, or duplicate packages create multiple copies of the module?

**Fix**
- Centralize context exports
- Add a strict hook that throws a clear provider-missing error
- Normalize import paths so all subcomponents resolve the same module instance

## 2. All consumers rerender whenever anything changes

**Symptoms**
- Context consumers update on unrelated parent renders
- Small changes trigger broad UI refreshes
- Provider value is recreated inline every render

**Check**
- Is the provider returning a fresh object every time?
- Are callbacks and metadata unnecessarily bundled into one context value?
- Is unrelated state stored in the same provider?

**Fix**
- Keep the provider value minimal
- Stabilize value shape where helpful
- Split concerns if consumers do not all need the same data
- Move complex transitions to a reducer-backed internal hook

## 3. State resets after changing variants or structure

**Symptoms**
- Open panels collapse after layout changes
- Selected tab resets when wrappers move
- Inputs lose values after subcomponent reordering

**Check**
- Did the refactor change keys or element positions?
- Did one variant render a different subtree than before?
- Is the reset actually intended UX?

**Fix**
- Preserve stable keys and positions when state should survive
- Intentionally remount only when reset behavior is desired
- Test variant switches and wrapper changes explicitly

## 4. Controlled and uncontrolled logic conflict

**Symptoms**
- Parent passes `value`, but internal updates still drive UI
- Internal default state never yields to external changes
- Callbacks fire, but visible state is stale

**Check**
- Is the component reading from props in controlled mode?
- Is internal state still being updated in controlled mode?
- Is precedence between `value` and `defaultValue` documented?

**Fix**
- Keep controlled mode prop-driven
- Keep uncontrolled mode internally owned
- Document precedence and callback behavior explicitly
- Avoid hidden synchronization layers

## 5. Child inspection logic becomes fragile

**Symptoms**
- API fails when a child is wrapped in a fragment or extra `<div>`
- Order-sensitive logic breaks under harmless refactors
- Prop injection depends on direct-child assumptions

**Check**
- Is the implementation relying on `Children.count`, `Children.map`, or `cloneElement`?
- Would wrappers or extracted components break assumptions?
- Is there a more explicit slot or context design available?

**Fix**
- Replace implicit child contracts with explicit subcomponents or slots
- Use context for shared state and actions
- Reserve child traversal for narrow, documented library constraints only
