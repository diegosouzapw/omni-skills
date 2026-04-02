# Variables Create, Bind, and Validate Example

## Step 1: inspect collections

```js
const collections = await figma.variables.getLocalVariableCollectionsAsync();
return {
  collections: collections.map((c) => ({
    id: c.id,
    name: c.name,
    modeNames: c.modes.map((m) => m.name),
    variableCount: c.variableIds.length
  }))
};
```

## Step 2: create a variable in an existing collection

```js
const collection = await figma.variables.getVariableCollectionByIdAsync("<COLLECTION_ID>");
if (!collection) throw new Error("Collection not found");

const variable = figma.variables.createVariable("color/background/default", collection, "COLOR");
variable.scopes = ["FRAME_FILL", "SHAPE_FILL"];

return {
  createdVariableIds: [variable.id],
  summary: "created background color variable"
};
```

## Step 3: bind and validate

```js
const node = figma.getNodeById("<NODE_ID>");
const variable = await figma.variables.getVariableByIdAsync("<VARIABLE_ID>");
if (!node || !variable) throw new Error("Node or variable not found");
if (!("fills" in node)) throw new Error("Node does not support fills");

const fills = Array.isArray(node.fills) ? [...node.fills] : [];
if (!fills.length) throw new Error("Node has no fills to bind");

const nextPaint = figma.variables.setBoundVariableForPaint(fills[0], "color", variable);
node.fills = [nextPaint, ...fills.slice(1)];

return {
  mutatedNodeIds: [node.id],
  summary: "bound variable to node fill"
};
```

Replace placeholders with IDs from prior steps.
