# Interactive Patterns APG Map

Use this file when visual work includes interactive behavior that must remain accessible.

## Prefer Native First

Before using ARIA-heavy patterns, ask whether a native element solves the problem.

- button before div with click handlers
- details/summary when suitable for disclosure
- form controls before custom replicas
- dialog element where supported by project constraints

## Common Pattern Map

- Dialog / modal: check focus management, escape handling, initial focus, and return focus behavior
- Tabs: check selected state, keyboard navigation, and panel association
- Accordion / disclosure: check button semantics, expanded state, and content relationship
- Menu / menubar: use only when true menu behavior is needed, not for ordinary site nav
- Combobox: validate input, popup, selection, and keyboard interactions carefully
- Listbox: ensure selection model and keyboard support are explicit
- Tooltip: ensure it supplements rather than replaces essential labeling

## Warning Signs

- clickable divs replacing buttons
- hover-only affordances hiding essential actions
- custom dropdowns without keyboard support
- modals without focus trapping or close affordance
- tabs or accordions that only work visually

## Practical Rule

If a component becomes harder to explain semantically than visually, pause and fix the structure before polishing visuals further.
