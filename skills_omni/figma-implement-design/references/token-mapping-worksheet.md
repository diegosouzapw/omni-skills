# Token Mapping Worksheet

Use this worksheet when Figma values do not map cleanly to the target codebase.

## Mapping order

1. Exact semantic token
2. Nearest approved token
3. Temporary constant with documented follow-up

## Table

| Design property | Figma value or variable | Project token or constant | Match type | Notes |
| --- | --- | --- | --- | --- |
| Color / text primary |  |  | exact / nearest / temporary |  |
| Color / background |  |  | exact / nearest / temporary |  |
| Color / border |  |  | exact / nearest / temporary |  |
| Spacing / xs |  |  | exact / nearest / temporary |  |
| Spacing / sm |  |  | exact / nearest / temporary |  |
| Spacing / md |  |  | exact / nearest / temporary |  |
| Radius |  |  | exact / nearest / temporary |  |
| Shadow / effect |  |  | exact / nearest / temporary |  |
| Font size |  |  | exact / nearest / temporary |  |
| Font weight |  |  | exact / nearest / temporary |  |
| Line height |  |  | exact / nearest / temporary |  |

## Decision rules

- Prefer semantic tokens over raw numeric matches.
- Prefer consistency with surrounding code when visual delta is small.
- If the nearest token causes visible drift, record it explicitly.
- If a temporary constant is necessary, keep it narrowly scoped and note follow-up work.
- Do not invent a new token architecture inside a small implementation task unless the user asks for it.

## Deviation note template

```text
Mapped Figma's <value> to <project token> because no exact approved token exists in this codebase. The visible delta is <small/moderate>. Chose consistency with the existing token system over a new hardcoded value.
```
