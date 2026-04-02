# Variables Scope Cheatsheet

Use this note before creating variables or binding tokens.

## Workflow

1. Discover existing collections first.
2. Inspect mode names before creating new modes or variables.
3. Reuse existing naming conventions where possible.
4. Set `variable.scopes` explicitly.
5. Validate that the variable appears in the intended binding context.

## Why explicit scopes matter

Broad defaults can make variables appear in irrelevant property pickers and create noisy design-system behavior.

## Common scope examples

These examples are illustrative patterns from the packaged workflow guidance:

- background or surface colors: `FRAME_FILL`, `SHAPE_FILL`
- text colors: `TEXT_FILL`
- spacing tokens: `GAP`

Choose only the scopes that match the intended usage.

## Inspect-first snippet

```js
const collections = await figma.variables.getLocalVariableCollectionsAsync();
return {
  collections: collections.map((c) => ({
    id: c.id,
    name: c.name,
    modes: c.modes.map((m) => m.name),
    variableCount: c.variableIds.length
  }))
};
```

## Validate after creation

Check:

- collection name
- mode names
- variable count
- intended scopes
- binding on the target node property

## Common failure modes

- variable created in the wrong collection
- wrong mode assumptions
- variable exists but cannot be selected for the intended property
- binding succeeded on the wrong node or wrong property
