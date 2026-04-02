## Figma Design System Rules

Use these rules for Figma-derived UI implementation in this repository.

- IMPORTANT: Reuse existing primitives from `src/components/ui/` before creating new ones.
- Place feature-specific UI in `src/components/features/`.
- Use tokens from `src/styles/tokens.css`; do not hardcode color, spacing, radius, or typography values when a token exists.
- Prefer semantic CSS variables such as `--color-text-primary` over raw palette values.
- Run `get_design_context` for the exact node before implementation.
- Run `get_screenshot` before final visual validation.
- Treat Figma MCP output as design intent; translate it into this repo's conventions instead of copying generated markup directly.
- Preserve accessible names, keyboard behavior, focus visibility, and component state semantics.
- If a Figma variable has no approved code token, document the gap and escalate rather than guessing.
