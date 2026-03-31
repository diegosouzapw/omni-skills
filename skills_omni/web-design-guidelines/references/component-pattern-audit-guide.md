# Component Pattern Audit Guide

Use this guide for focused audits of interactive components, especially custom widgets.

## Native-first rule

Prefer native HTML before custom ARIA patterns.

- Action -> `button`
- Navigation -> `a`
- Text input -> `input` or `textarea`
- Selection -> `select`, checkbox, radio when they fit
- Disclosure -> often `button` controlling content

If a custom pattern is still necessary, review role, state, properties, labeling, and keyboard model together.

## Dialog / modal

Check:
- trigger is a real button or equivalent operable control
- dialog has an accessible name
- focus moves into dialog on open
- tab sequence remains within dialog while open
- escape behavior is supported when appropriate
- background content is not accidentally interactive
- focus returns to a sensible control on close
- mobile viewport does not clip actions or content

## Menu / menu button

Check:
- control announces expanded state if applicable
- focus management is intentional
- keyboard interaction matches user expectation for the pattern
- menu items are not plain clickable `div`s without semantics
- dismiss behavior is predictable

## Tabs

Check:
- tab controls are identifiable and grouped
- active tab state is exposed
- each tab is associated with the correct panel
- keyboard behavior works consistently
- panel content updates without losing user orientation

## Accordion / disclosure

Check:
- disclosure trigger is a button
- expanded/collapsed state is exposed
- heading structure remains meaningful when accordions shape content hierarchy
- hidden content is not focusable when collapsed unless intentionally designed otherwise

## Combobox / custom select / autocomplete

Check:
- determine whether native `select` would suffice
- input and popup relationship is clear
- current value and highlighted option are perceivable
- keyboard operation is complete and consistent
- selection and dismissal states are announced properly

## Navigation landmarks and menus

Check:
- primary navigation is within a meaningful landmark
- repeated blocks are structured consistently
- mobile nav drawers do not trap users or hide content under fixed bars
- current page indication is available where relevant

## Severity guidance

Usually high severity:
- keyboard-inaccessible trigger or item
- focus loss or keyboard trap
- missing name on a critical control
- dialog that leaves background interactive in a way that breaks task completion

Usually medium severity:
- wrong role/state on a usable but confusing custom control
- inconsistent keyboard behavior in a complex widget
- ambiguous labeling that slows task completion

Usually lower severity:
- minor structural semantics issue without strong task impact
- redundant ARIA that does not currently break behavior but adds maintenance risk
