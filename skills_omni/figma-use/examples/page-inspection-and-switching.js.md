# Page Inspection and Switching Examples

## List pages

```js
const pages = figma.root.children.map((p) => ({
  id: p.id,
  name: p.name,
  childCount: p.children.length
}));

return { pages };
```

## Switch to a named page

```js
const page = figma.root.children.find((p) => p.name === "UI Kit");
if (!page) throw new Error("Page not found: UI Kit");

await figma.setCurrentPageAsync(page);

return {
  currentPageId: figma.currentPage.id,
  currentPageName: figma.currentPage.name
};
```

## Inspect components across pages

```js
const results = [];
for (const page of figma.root.children) {
  await figma.setCurrentPageAsync(page);
  page.findAll((n) => {
    if (n.type === "COMPONENT" || n.type === "COMPONENT_SET") {
      results.push({ page: page.name, id: n.id, name: n.name, type: n.type });
    }
    return false;
  });
}

return { components: results };
```
