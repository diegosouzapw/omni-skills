# Implementation Review Checklist

Use this at the end of the workflow and during major checkpoints.

## Fidelity

- [ ] Matches approved design direction
- [ ] Key reference traits are present for the right reasons
- [ ] Token usage is consistent
- [ ] No unexplained drift in spacing, type, color, or icon style

## Semantics and Accessibility

- [ ] Semantic HTML used where possible
- [ ] ARIA added only where necessary
- [ ] Keyboard access works for interactive elements
- [ ] Focus states are visible
- [ ] Contrast is acceptable for text and controls
- [ ] Hit/target size is reasonable
- [ ] Labels, names, and roles are clear

## Responsive Behavior

- [ ] Works at small, medium, and large viewport widths relevant to the task
- [ ] Layout does not depend only on full-page width
- [ ] Components also hold up inside cards, sidebars, modals, or narrow columns when relevant
- [ ] Overflow and truncation behavior is intentional

## States

- [ ] Hover state considered where applicable
- [ ] Focus state considered
- [ ] Active/pressed state considered
- [ ] Disabled state considered
- [ ] Empty/loading/error states considered when relevant

## Motion

- [ ] Motion supports comprehension rather than decoration only
- [ ] Reduced-motion preference is respected when motion exists

## Handoff

- [ ] Remaining assumptions are documented
- [ ] Next step is clear
- [ ] Suitable for merge, review, or routing to another skill
