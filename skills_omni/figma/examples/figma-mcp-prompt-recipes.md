# Figma MCP Prompt Recipes

## 1. Setup verification

```text
Use @figma to verify Figma MCP setup. Confirm connection readiness, authentication state, and whether this file can be read: <figma-url>
```

## 2. Structure only

```text
Use @figma on this frame link: <figma-url>. Fetch only structure and design context for the exact node. Summarize hierarchy, variants, text styles, spacing, variables, and reusable components. Do not generate code.
```

## 3. Screenshot only

```text
Use @figma on this node link: <figma-url>. Fetch a screenshot of the exact node and confirm whether it matches the requested variant before continuing.
```

## 4. Assets only after validation

```text
Use @figma on this validated node: <figma-url>. Fetch only the assets required for implementation. Do not substitute placeholders if Figma provides the assets.
```

## 5. Implementation brief

```text
Use @figma on this node link: <figma-url>. Fetch structure first, then screenshot, then required assets. Produce an implementation brief with component reuse suggestions, token mapping notes, asset dependencies, and unresolved ambiguities.
```

## 6. Compare variants

```text
Use @figma to compare these two node links: <figma-url-a> and <figma-url-b>. Summarize differences in hierarchy, copy, spacing, visual states, and assets. Keep the result scoped and implementation-oriented.
```
