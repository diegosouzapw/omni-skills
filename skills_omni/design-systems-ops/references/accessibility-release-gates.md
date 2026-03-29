# Accessibility Release Gates

Use this checklist for design-system changes that affect tokens, component behavior, or interactive states.

## Review when

- color, contrast, or state tokens change
- focus indicators change
- spacing affects touch target size or readability
- interactive component behavior changes
- semantics, roles, labels, or ARIA attributes change
- themes or modes are introduced or remapped

## Minimum gates

### Visual and state gates

- text and UI contrast remain acceptable for supported contexts
- focus indicators remain visible and distinguishable
- state differences remain perceivable
- target sizes are not unintentionally reduced

### Behavioral gates

- keyboard interaction still works as expected
- focus order and focus management remain correct
- state announcements and names remain accurate
- disabled, selected, expanded, and error states remain understandable

### Contract gates

- stories or demos show relevant interactive states
- docs reflect accessibility-sensitive behavior changes
- migration notes mention any changed semantics or keyboard behavior

## Evidence to request

- before and after examples
- stories covering affected states
- notes from manual keyboard review when interactive behavior changed
- explicit acknowledgment of theme or mode coverage when tokens changed

## Decision guidance

- block release if semantics or keyboard behavior regressed
- stage release if evidence is incomplete for supported modes or states
- approve only when the updated contract is documented and reviewable
