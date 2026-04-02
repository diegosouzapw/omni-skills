# Figma-to-Code Token Mapping Worksheet

Use this worksheet when Figma variables and code tokens do not align cleanly.

## Instructions

- Match by semantic meaning first, not by name similarity alone.
- Prefer semantic code tokens over raw palette values when available.
- Preserve token aliases if the codebase uses aliases.
- Do not hardcode fallback literals unless the project already has an approved fallback policy.
- Mark unresolved mappings explicitly.

## Mapping table

| Figma variable | Collection / mode | Intended meaning | Code token | Token source path | Delivery mechanism | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `color/text/primary` | primitives / light | primary body text | `--color-text-primary` | `src/styles/tokens.css` | CSS variable | mapped | semantic match |
| `spacing/medium` | base | default stack gap | `--space-4` | `src/styles/tokens.css` | CSS variable | mapped | 16px |
| `color/brand/accent` | marketing / dark | brand accent | _unresolved_ | _n/a_ | _n/a_ | unresolved | Figma has token, codebase does not |

## Resolution statuses

- `mapped` — approved code token exists
- `mapped-with-note` — safe match exists but needs explanation
- `unresolved` — no approved code token exists yet
- `theme-gap` — Figma mode exists but code theme is missing
- `needs-review` — mapping should be confirmed by the team

## Final notes to include in generated rules

- Source of truth for tokens:
- Semantic token preference rule:
- Theme or mode constraints:
- Fallback policy:
- Escalation path for unresolved mappings:
