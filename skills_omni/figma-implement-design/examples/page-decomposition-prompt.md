# Example Prompt: Page Decomposition Workflow

```text
Implement this Figma screen in the existing codebase, but do not attempt a one-shot full-page generation.

Workflow requirements:
- Resolve the target node.
- Fetch metadata first if the screen appears large or deeply nested.
- Identify major child sections such as header, navigation, hero, cards, and tables.
- Fetch design context per child section.
- Fetch one screenshot for the full frame and keep it for parity review.
- Reuse existing layout primitives and screen-level containers where possible.
- Map tokens and assets carefully.
- Validate section-by-section, then validate the assembled screen.
- End with a short note listing decomposition choices, reused components, token mismatches, and any accessibility-driven deviations.

Figma URL:
https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Dashboard?node-id=10-5
```

## Expected shape of result

- implementation plan divided by screen section
- code aligned with project conventions
- no unnecessary duplicate components
- parity review against the full screenshot
