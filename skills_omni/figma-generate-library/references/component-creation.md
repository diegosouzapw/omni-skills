# Component Creation Reference

Use this reference in Phase 3.

## Goals

- create scalable, code-aligned component APIs
- bind visual properties to agreed tokens
- avoid variant explosion
- validate each component before moving on

## Default build sequence per component

1. confirm the component is in scope and approved for this phase
2. confirm dependencies already exist
3. create the base component
4. apply auto layout where appropriate
5. bind token-backed properties
6. add variants only for meaningful state axes
7. add component properties for scalable customization
8. document usage notes on the page
9. validate structure and screenshot
10. stop for user approval

## Component API guidance

Prefer:
- text properties for labels and editable strings
- boolean properties for optional child elements
- instance swap properties for icons and nested slots

Do not create a variant for every icon choice.

## Split criteria

Split a component set when:
- the variant matrix becomes hard to scan
- multiple interaction models are being forced together
- code treats them as different public components
- the property model becomes confusing for consumers

Example split:
- `Button`
- `Icon Button`
- `Split Button`

## Binding guidance

Bind agreed token-backed properties where supported, including:
- fills
- strokes
- spacing/gaps
- corner radius
- typography or text styling references where your workflow supports them

Use exceptions intentionally, not accidentally.

## Validation checklist

Before approval, confirm:
- expected variant count exists
- property names are understandable
- no obvious hardcoded visual values remain where tokens should be used
- layout is readable on the page
- screenshot looks correct
- naming matches code or approved naming rules

## Remote asset guidance

If a remote component is visually reusable but API-incompatible:
- consider wrapping it rather than forcing direct reuse

If it cannot be safely edited or governed:
- rebuild locally
- document that decision
