# Figma Design-to-Code Validation Checklist

Use this checklist before declaring a Figma-backed implementation complete.

## Capture

- [ ] Exact Figma file URL recorded
- [ ] Exact node URL or node ID recorded
- [ ] Screenshot of the implemented node captured or referenced
- [ ] Variables, modes, or token notes captured
- [ ] Required assets identified and stored appropriately

## Visual parity

- [ ] Layout hierarchy matches the screenshot
- [ ] Spacing is materially aligned
- [ ] Typography scale and emphasis are consistent
- [ ] Colors, fills, strokes, shadows, and radii are mapped correctly
- [ ] Icons and images match the intended variant

## Component and token reuse

- [ ] Existing components were reused where appropriate
- [ ] Raw generated markup was normalized to repo conventions
- [ ] Local tokens were used instead of hardcoded Figma values where equivalents exist
- [ ] Any new token or component exception is documented

## Behavior and semantics

- [ ] Semantic HTML or platform-equivalent structure is correct
- [ ] Keyboard navigation works
- [ ] Focus states are visible and intentional
- [ ] Hover, pressed, selected, and disabled states are handled if relevant
- [ ] Accessibility constraints were considered alongside visual fidelity

## Responsive and thematic checks

- [ ] Intended breakpoint behavior is implemented
- [ ] Light/dark or other mode differences are respected if required
- [ ] Variable modes were mapped appropriately

## Asset checks

- [ ] No localhost or temporary MCP asset URL ships in final code
- [ ] Assets are stored in the repo or approved asset pipeline if needed long term
- [ ] No placeholder asset was used when the real asset was available

## Handoff checks

- [ ] Assumptions are documented
- [ ] Gaps or unresolved mismatches are documented
- [ ] Downstream implementer or reviewer has enough context to continue without re-fetching everything

For a reusable review format, see [../examples/figma-parity-review-template.md](../examples/figma-parity-review-template.md).
