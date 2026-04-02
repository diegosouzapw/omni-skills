# Project Instructions: Figma Design System Rules

Apply these instructions when implementing UI from Figma for this repository.

## Component conventions

- Reuse components from `src/components/ui/` whenever possible.
- New feature components belong in `src/components/features/`.
- Follow existing PascalCase file and export conventions.

## Styling and tokens

- Use CSS Modules for component styles unless the target area already uses another approved styling method.
- Tokens are defined in `src/styles/tokens.css`.
- IMPORTANT: Never replace an available token with a hardcoded visual literal.
- Prefer semantic tokens over raw palette tokens.

## Figma workflow

- Run `get_design_context` first for the exact target node.
- If context is too large, use `get_metadata` and then re-fetch only required nodes.
- Run `get_screenshot` before final visual validation.

## Accessibility

- Interactive elements must expose an accessible name.
- Preserve keyboard interaction and visible focus states.
- Use correct state semantics for selected, expanded, pressed, or disabled UI.

## Validation

- Validate against both Figma appearance and expected interaction behavior.
- Document unresolved token mismatches instead of guessing equivalents.
