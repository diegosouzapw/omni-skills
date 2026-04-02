# Figma MCP Prompt Recipes

Use these prompt patterns as starting points.

## Inspect a node

```text
Use @figma-v2 to inspect this exact Figma node. Verify the file key and node ID, fetch structured design context for only that node, summarize hierarchy, variants, key layout constraints, and relevant variables, then tell me what additional screenshot or asset retrieval is still needed.
```

## Implement from a node

```text
Use @figma-v2 for design-to-code on this exact Figma frame. Fetch structured context first, then a screenshot of the same node, then identify variables and required assets. After that, adapt the result into this repository's existing components, tokens, and styling conventions. Do not ship raw generated output unchanged.
```

## Compare implementation against Figma

```text
Use @figma-v2 to compare this implementation against the referenced Figma node. Confirm the exact node, capture or reference the matching screenshot, compare layout, typography, spacing, color, assets, and interaction states, then report mismatches and whether they are token-mapping issues, implementation bugs, or missing assets.
```

## Fetch assets carefully

```text
Use @figma-v2 to retrieve only the assets required for this exact node. Confirm the node first, identify which assets are actually used in the design, and note whether any returned URLs are temporary or localhost-only so they are not shipped directly in production.
```

## Troubleshoot access or setup

```text
Use @figma-v2 to troubleshoot this Figma MCP workflow. Check whether the server is visible in the client, whether tool approval is blocked, whether authentication is configured locally, whether the file is accessible to the authenticated account, and whether the shared link points to the exact intended node.
```
