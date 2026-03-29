# Token Taxonomy: Semantic vs Base

Use this reference to classify token changes before release.

## Token layers

### Base or raw tokens

These are foundational values such as raw colors, spacing scales, typography sizes, or radii.

Examples:

- `color.blue.500`
- `space.4`
- `radius.sm`

Base tokens are usually implementation ingredients, not direct product-facing contracts.

### Semantic tokens

These express purpose or role rather than raw value.

Examples:

- `surface.primary`
- `text.muted`
- `border.focus`
- `button.primary.background`

Semantic tokens are stronger contracts because consumers rely on meaning, not underlying raw values.

### Aliases

An alias points one token to another token.

Example:

- `button.primary.background -> color.brand.600`

Alias changes can affect many components even when no raw values are edited directly.

### Modes or themes

Modes define alternate values for supported contexts such as light, dark, high contrast, or brand themes.

## Review expectations by change type

| Change type | Typical risk | Review expectation |
| :---------- | :----------- | :----------------- |
| Raw value correction | low to medium | verify downstream visuals and docs |
| Semantic token rename | medium to high | verify consumer references, aliases, docs, migration path |
| Semantic meaning change | high | treat as contract change, review compatibility and release messaging |
| Alias remap | medium to high | trace blast radius across themes, states, and components |
| New mode introduction | high | verify supported coverage, fallback behavior, and rollout scope |

## Questions to ask

- Is this token consumed directly by apps or only through components?
- Does the change alter meaning, not just value?
- Are all supported modes covered?
- Are aliases documented and traceable?
- Does this affect accessibility-sensitive states such as focus, disabled, error, or selected?

## Practical rule

If a token change modifies semantic meaning or mode behavior, treat it as a contract review, not a styling cleanup.
