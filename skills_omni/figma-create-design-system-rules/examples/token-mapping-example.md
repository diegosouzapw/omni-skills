# Worked Token Mapping Example

## Scenario

Figma variables use one naming system, while the codebase uses semantic CSS variables.

## Mapping

| Figma variable | Mode | Meaning | Code token | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| `color/text/default` | light | default body text | `--color-text-primary` | mapped | semantic match |
| `color/text/subtle` | light | muted text | `--color-text-secondary` | mapped | semantic match |
| `color/fill/brand` | light | primary action background | `--color-action-primary-bg` | mapped-with-note | semantic alias |
| `spacing/md` | base | medium spacing | `--space-4` | mapped | 16px |
| `radius/sm` | base | small corner radius | `--radius-2` | mapped | approved in repo |
| `color/fill/brand` | dark | dark mode action background | _unresolved_ | theme-gap | dark mode not implemented in code |

## Example rule text derived from this mapping

```markdown
- Use semantic CSS variables from `src/styles/tokens.css`.
- Prefer `--color-action-primary-bg` for primary action surfaces rather than raw palette tokens.
- The current codebase implements only the light theme; dark-mode Figma variables are not yet mapped and must not be guessed.
```
