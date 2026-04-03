# Native HTML First, ARIA Second

## Rule of thumb

If a native HTML element provides the needed semantics and interaction, use it.

## Prefer

- `button` for actions
- `a href` for navigation
- `input`, `select`, `textarea` for form controls
- `details/summary` for simple disclosure
- `dialog` for modal dialogs where appropriate
- headings, lists, tables, and landmarks for structure

## Avoid common anti-patterns

- `div role="button"` instead of `button`
- adding `aria-label` when visible text already provides the right name
- adding `aria-hidden="true"` to visible, meaningful content
- leaving `aria-expanded`, `aria-selected`, or `aria-checked` out of sync with UI state
- mixing incompatible roles and native semantics

## Quick checks

- Is the element keyboard reachable?
- Does Enter or Space behave as expected?
- Does the accessible name match visible intent?
- Is the state updated when the UI changes?
- Would replacing this with a native element remove complexity?

## When ARIA is justified

ARIA is appropriate when:

- building a composite widget with no native equivalent
- exposing relationships or state not otherwise available
- announcing dynamic updates where native semantics are insufficient

If ARIA is required, follow the APG pattern for that widget.
