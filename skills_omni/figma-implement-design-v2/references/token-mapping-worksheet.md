# Token Mapping Worksheet

Use this worksheet when converting Figma variables or raw values into project tokens.

## Mapping rules

1. Reuse an existing project token if it produces an acceptable visual result.
2. Prefer semantic tokens over raw values.
3. Add a new token only when reuse is impossible and the repository allows token expansion.
4. If exact parity is not possible, document the deviation explicitly.

## Worksheet

| Figma property | Figma value or variable | Project token candidate | Decision | Notes |
| --- | --- | --- | --- | --- |
| Color |  |  | Reuse / New / Raw fallback |  |
| Spacing |  |  | Reuse / New / Raw fallback |  |
| Radius |  |  | Reuse / New / Raw fallback |  |
| Typography |  |  | Reuse / New / Raw fallback |  |
| Shadow |  |  | Reuse / New / Raw fallback |  |

## Decision guidance

### Reuse

Use when the existing token is close enough and preserves system consistency.

### New

Use only when the design requires a value the system genuinely lacks and adding it is acceptable.

### Raw fallback

Use sparingly. Prefer only for tightly scoped cases where token expansion is not approved and no safe equivalent exists.

## Deviation note template

- Figma property:
- Figma value or variable:
- Local token used instead:
- Visual impact:
- Reason for deviation:
- Follow-up needed:
