# Figma MCP Workflow Reference

This reference condenses the recommended retrieval and implementation order.

## Required sequence

1. Verify the exact node.
2. Verify MCP availability and access.
3. Fetch structured design context first.
4. Fetch a screenshot of the same node.
5. Inspect variables and retrieve only needed assets.
6. Implement using repository conventions.
7. Validate parity and behavior.
8. Package provenance and handoff notes.

## Why this order matters

- exact-node targeting reduces wrong-frame implementation
- structured context is more reliable than visual guessing alone
- screenshot validation catches variant and hierarchy mistakes early
- delayed asset retrieval reduces wasted downloads and confusion
- local adaptation prevents raw generated code drift

## Narrowing strategy for large files

When the file is large:

1. identify the intended frame or component
2. fetch only high-level structure first if needed
3. re-run against the exact subtree
4. avoid repeating full-file retrieval

## Minimum evidence to retain

Keep these notes with the task:

- Figma file URL
- node URL or node ID
- screenshot reference
- variables or token mapping notes
- assets used
- unresolved assumptions or gaps

For a reusable packet, see [../examples/figma-handoff-packet.md](../examples/figma-handoff-packet.md).
