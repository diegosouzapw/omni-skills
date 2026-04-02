# Component Implementation Packet

## Scenario

User request:

> Implement this button component from Figma in the existing app:
> `https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15`

## Recommended execution

1. Parse the URL.
   - `fileKey = kL9xQn2VwM8pYrTb4ZcHjF`
   - `nodeId = 42-15`
2. Run `get_design_context(fileKey="kL9xQn2VwM8pYrTb4ZcHjF", nodeId="42-15")`
3. Run `get_screenshot(fileKey="kL9xQn2VwM8pYrTb4ZcHjF", nodeId="42-15")`
4. Search the repo for existing button, icon-button, and typography primitives.
5. Map color, spacing, radius, and text styles into local tokens.
6. Extend the existing button variant if possible.
7. Validate hover, focus, disabled, and loading states if the design implies them.
8. Record any deviation.

## Good handoff summary

- Reused existing `Button` component.
- Added `secondaryProminent` variant instead of creating a new standalone component.
- Mapped Figma primary fill to existing `color-action-secondary` token.
- Used project radius token instead of raw `10px`; visual delta is negligible.
- Added visible focus styling to meet accessibility requirements.
