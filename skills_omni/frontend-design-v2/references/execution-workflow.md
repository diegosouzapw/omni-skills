# Execution Workflow

Use this workflow when the task is to build a real interface, not just describe one.

## 1. Discovery

Capture:
- artifact type
- audience
- device context
- content constraints
- framework/runtime
- accessibility expectations
- performance sensitivity
- visual references or anti-references

Ask early:
- What must this interface accomplish?
- Who uses it and in what context?
- What must feel distinctive?
- What must remain stable, accessible, and fast?

## 2. Aesthetic Direction

Before coding, write down:
- one visual direction
- one dominant visual system
- one memorable differentiator
- one list of anti-patterns to avoid

Example:
- Direction: editorial technical luxury
- Dominant system: typography-led
- Differentiator: oversized asymmetric hero composition with restrained color
- Avoid: card-grid SaaS clichés, glow accents, generic gradient text

## 3. Structure First

Build semantic structure before decorative styling.

Check:
- landmarks exist where appropriate
- headings form a sensible hierarchy
- actions are buttons
- navigation uses links
- forms use labels and helper text
- decorative layers are not announced as content

## 4. Responsive Strategy

Decide explicitly:
- viewport breakpoints for page-level changes
- container queries for reusable modules
- content priority on smaller screens
- which interactions collapse, stack, or reflow

## 5. Motion Strategy

Define:
- which transitions are essential
- which are purely decorative
- what happens under reduced motion
- how motion supports hierarchy or feedback

## 6. Performance Strategy

Review likely risks:
- hero images
- custom fonts
- layout shift from media or injected UI
- heavy scripts blocking interactions
- non-critical assets loaded too early

## 7. Validation Before Handoff

Minimum checks:
- semantic structure reviewed
- keyboard and focus path reviewed
- reduced-motion behavior reviewed
- mobile and nested-layout behavior reviewed
- common loading risks reviewed
- visual direction still feels coherent after implementation

## 8. Handoff Notes

Summarize:
- chosen direction
- notable tradeoffs
- known limitations
- what still needs specialist review, if any
- provenance details if the task depends on imported lineage
