# Text and Font Rules

Use this note before creating or editing any text node.

## Non-negotiable rule

Load the required font before mutating text properties.

```js
await figma.loadFontAsync({ family: "Inter", style: "Regular" });
```

## Apply this before

- setting `characters`
- changing `fontName`
- editing styled text ranges
- applying text style changes that depend on font availability

## Safe minimal example

```js
await figma.loadFontAsync({ family: "Inter", style: "Regular" });

const text = figma.createText();
text.characters = "Label";
figma.currentPage.appendChild(text);

return { createdNodeIds: [text.id], mutatedNodeIds: [] };
```

## Multi-font caution

If an existing text node contains multiple font ranges, inspect first. Load every font used by the ranges you will change before mutating them.

## Common symptoms

- text mutation throws unexpectedly
- characters do not update
- style updates fail on only part of the text

## Recovery

1. inspect the node's font usage if needed
2. load all required fonts
3. retry the narrowest possible mutation
4. return the text node ID for validation
