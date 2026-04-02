# Return Schema Examples

Use these patterns for structured handoff between `usefigma` calls.

## Inspect result

```js
return {
  pages: [{ id: "1:2", name: "Page 1", childCount: 4 }],
  summary: "inspected pages"
};
```

## Create result

```js
return {
  createdNodeIds: [node.id],
  mutatedNodeIds: [],
  summary: "created card frame",
  warnings: []
};
```

## Update result

```js
return {
  createdNodeIds: [],
  mutatedNodeIds: [button.id, label.id],
  summary: "updated button label and padding",
  warnings: []
};
```

## Validate result

```js
return {
  checkedNodeIds: [frame.id],
  summary: "validated hierarchy and layout sizing",
  issues: []
};
```

## Guidance

Prefer small, truthful payloads.

Always include IDs for anything the next call may need to reference, validate, or clean up.
