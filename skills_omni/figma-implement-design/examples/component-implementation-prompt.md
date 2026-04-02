# Example Prompt: Single Component Implementation

```text
Implement the Figma component at this URL in the target repository.

Requirements:
- Start by extracting the file key and node ID.
- Fetch structured design context first.
- Fetch a screenshot and keep it as the visual source of truth.
- Check whether the repository already has an equivalent component.
- Reuse or extend that component instead of duplicating it when possible.
- Map Figma colors, spacing, typography, and radius to project tokens.
- Use Figma-provided assets rather than adding third-party substitutes.
- Preserve semantic HTML and keyboard accessibility.
- At the end, provide a short implementation note listing reused components, token mappings, assets used, and any justified deviations.

Figma URL:
https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15
```

## Expected shape of result

- code implementation in project conventions
- explicit note about reused button or primitive components
- note about token mapping decisions
- brief parity and accessibility confirmation
