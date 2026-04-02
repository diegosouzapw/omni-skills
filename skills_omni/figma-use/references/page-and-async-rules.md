# Page and Async Rules

Use this note before any `usefigma` script that reads or writes file content.

## Core rules

1. Treat each `usefigma` call as a fresh execution.
2. Do not assume the prior call's page selection still applies.
3. If the target is not on the first page, find the page and call `await figma.setCurrentPageAsync(page)`.
4. Await every async operation before returning.
5. Re-inspect after page switches if your next step depends on loaded page content.

## Safe page-switch pattern

```js
const page = figma.root.children.find((p) => p.name === "Target Page");
if (!page) throw new Error("Page not found: Target Page");
await figma.setCurrentPageAsync(page);

return {
  currentPageId: figma.currentPage.id,
  currentPageName: figma.currentPage.name
};
```

## Common async APIs that must be awaited

- `figma.setCurrentPageAsync(...)`
- `figma.loadFontAsync(...)`
- `figma.variables.getLocalVariableCollectionsAsync()`
- `figma.importComponentByKeyAsync(...)`
- any other API returning a Promise

## Failure pattern

A common bug shape is:

- switch page without `await`
- mutate or traverse immediately
- return before the page or import is ready

This leads to missing nodes, partial results, or stale assumptions.

## Recovery

If results look incomplete:

1. inspect the current page explicitly
2. re-run the step with awaited async operations
3. return page identity and affected IDs so the next call starts from known state
