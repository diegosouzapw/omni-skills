# Re-render Triage Guide

Use this guide when a UI feels laggy or profiler traces show frequent renders.

## Start with evidence

Do not add memoization everywhere. First identify:

- which component is rendering often
- whether the render is actually expensive
- whether the re-render is caused by props, context, state, or derived work

## High-value checks

### Context provider stability

- Are provider values recreated on every render?
- Can object values be stabilized when they cause downstream churn?

### Prop identity churn

- Are new object or function props created unnecessarily?
- Can a smaller prop surface reduce invalidation?

### Expensive render work

- Is filtering, sorting, formatting, or heavy mapping happening on every keystroke?
- Can expensive work be moved, deferred, or scoped more narrowly?

### Subscription scope

- Is a component subscribing to more state than it actually needs?
- Can derived booleans or smaller selectors reduce updates?

## When memoization helps

Use memoization selectively when:

- a component is expensive to render
- parent updates are frequent
- props can remain stable enough for memoization to pay off

## When memoization does not help much

- simple primitive calculations
- components that rarely re-render
- code where prop identity changes every time anyway

## Transitions

Consider transitions when:

- the user needs immediate input responsiveness
- the expensive update is non-urgent
- visual refresh can happen slightly later without harming UX

## Output expectation

A good diagnosis explains:

- what is re-rendering
- why it is re-rendering
- whether the work is actually expensive
- the smallest fix with the best tradeoff
