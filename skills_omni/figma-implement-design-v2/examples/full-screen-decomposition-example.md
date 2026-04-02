# Full-Screen Decomposition Example

## Scenario

User request:

> Build this dashboard screen from Figma:
> `https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Dashboard?node-id=10-5`

## Why decomposition is needed

The top-level frame contains multiple regions and is likely too large to implement accurately from one context response.

## Recommended decomposition

1. Run `get_metadata(fileKey="pR8mNv5KqXzGwY2JtCfL4D", nodeId="10-5")`
2. Identify major regions such as:
   - app shell
   - sidebar
   - top navigation
   - summary cards
   - table or chart section
3. Fetch `get_design_context(...)` for each major child node.
4. Implement in this order:
   1. page shell
   2. navigation regions
   3. cards and repeated content blocks
   4. dense content sections
5. Compare the assembled result against the full-frame screenshot.

## Benefits

- reduced hallucination risk
- clearer token mapping
- easier reuse of existing layout primitives
- better responsive behavior because each region is reasoned about separately
