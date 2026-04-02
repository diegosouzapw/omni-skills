# Accessibility and Semantics

Highly designed interfaces still need to be understandable, operable, and navigable.

## Core Rules

- Prefer semantic HTML before ARIA.
- Use landmarks and headings to preserve navigability.
- Use `button` for actions and `a` for navigation.
- Keep visible labels for inputs.
- Preserve focus visibility.
- Remove purely decorative layers from the accessibility tree.

## Decorative Assets

Use decorative images carefully:
- If an image is purely decorative, prefer CSS backgrounds or empty `alt` text.
- If a decorative wrapper duplicates visible content, keep it out of the accessibility tree.
- Do not place meaningful text inside `aria-hidden="true"` containers.

## Forms

Ensure:
- labels are visible and associated
- instructions are near the field
- errors are specific
- grouped controls are grouped semantically
- common fields use helpful `autocomplete` tokens

## Interaction Checks

Verify:
- keyboard-only users can operate the UI
- focus order matches the visual flow
- controls are large enough to target reliably
- focus states remain visible in all themes

## Fast Review Checklist

- Are there meaningful landmarks?
- Is heading order sensible?
- Are all actions real buttons?
- Are all navigation items real links?
- Are decorative layers hidden from assistive tech?
- Are forms labeled and understandable?
- Is focus styling obvious enough to use?
