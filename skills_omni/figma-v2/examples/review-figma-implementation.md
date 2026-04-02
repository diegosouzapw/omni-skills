# Example: Review a Figma-Based Implementation

## Prompt

```text
Review this implementation against its Figma source using @figma-v2.

Inputs:
- Figma link: <exact-frame-or-layer-url>
- Code location: <path-or-pr>

Review checklist:
1. verify the exact node and capture a screenshot
2. compare layout, visual hierarchy, spacing, and assets
3. verify local component reuse instead of duplication
4. verify local token reuse instead of hardcoded values
5. verify semantics, keyboard behavior, focus states, and responsiveness
6. summarize mismatches, risks, and merge blockers
```

## Expected result shape

- visual parity findings
- design-system reuse findings
- accessibility findings
- unresolved questions
- merge recommendation with rationale
