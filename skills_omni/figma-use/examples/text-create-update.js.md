# Text Create and Update Example

## Create a text node safely

```js
await figma.loadFontAsync({ family: "Inter", style: "Regular" });

const text = figma.createText();
text.characters = "Primary button";
figma.currentPage.appendChild(text);
text.x = 120;
text.y = 80;

return {
  createdNodeIds: [text.id],
  mutatedNodeIds: [],
  summary: "created text node"
};
```

## Update an existing text node safely

```js
await figma.loadFontAsync({ family: "Inter", style: "Regular" });

const node = figma.getNodeById("<TEXT_NODE_ID>");
if (!node || node.type !== "TEXT") throw new Error("Text node not found");

node.characters = "Updated label";

return {
  createdNodeIds: [],
  mutatedNodeIds: [node.id],
  summary: "updated text node"
};
```

Replace `<TEXT_NODE_ID>` with a real ID returned from a prior inspection or creation step.
