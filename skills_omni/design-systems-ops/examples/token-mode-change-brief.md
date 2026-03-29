# Example: Token Mode Change Brief

## Summary

Introduce a high-contrast mode for semantic color tokens used by form controls and navigation.

## Authority

- semantic token source: token package
- design intent: design variable modes
- implementation mapping: runtime theme map

## Risks

- incomplete coverage for hover and selected states
- possible contrast regressions in legacy navigation
- docs currently assume only light and dark modes

## Required checks

- verify all supported semantic color roles across modes
- review focus, error, and disabled states
- update stories to expose high-contrast mode
- update docs to describe supported mode behavior

## Rollout plan

1. ship behind internal validation first
2. validate in one partner app
3. publish migration notes for direct token consumers
4. promote to general availability after parity evidence is complete

## Decision status

Conditional approval pending mode-complete story coverage and accessibility evidence
