# Troubleshooting UI Review

## Focus styles are missing

**Symptoms:** Tabbing works but there is no visible focus indicator.

**Inspect:** global resets, `outline: none`, component focus states, theme-specific focus colors.

**Safe remediation direction:** restore strong visible focus, preferably with `:focus-visible`, and verify contrast in all supported themes.

## Custom widget has mouse behavior only

**Symptoms:** Clicking works, but keyboard activation or focus management does not.

**Inspect:** element type, `tabindex`, keyboard handlers, ARIA states, and whether a native element would remove the problem.

**Safe remediation direction:** replace with native HTML when possible; otherwise align behavior with the relevant APG pattern.

## Form validation is visually present but not understandable

**Symptoms:** Error color appears, but the user gets no associated text or status message.

**Inspect:** label association, error message IDs, `aria-invalid`, helper text persistence, async save state, and live region usage.

**Safe remediation direction:** provide persistent text explanations, associate them correctly, and announce dynamic status only when needed.

## Modal appears but behaves like layered content

**Symptoms:** Background remains focusable, escape behavior is wrong, or focus is lost after closing.

**Inspect:** open and close lifecycle, initial focus target, focus containment, and focus return target.

**Safe remediation direction:** use native dialog behavior or a tested accessible dialog implementation; verify open and close states explicitly.

## Responsive layout breaks under stress

**Symptoms:** Horizontal scrolling, clipped buttons, overlapping fixed bars, or content hidden near device edges.

**Inspect:** min-width rules, unbreakable strings, fixed positioning, safe-area handling, image sizing, and container overflow.

**Safe remediation direction:** prefer wrapping, flexible sizing, safe-area-aware spacing, and content-resilient layouts.

## Dark mode looks supported but key UI disappears

**Symptoms:** borders, icons, focus rings, or native controls become hard to see in dark theme.

**Inspect:** token usage, hard-coded colors, icon assets, shadows, and `color-scheme` behavior.

**Safe remediation direction:** move toward theme tokens, verify contrast, and test theme-specific assets and controls.

## Reduced-motion mode causes loss of meaning

**Symptoms:** content changes abruptly with no cue, or animation removal makes the interface confusing.

**Inspect:** whether motion carries essential meaning, whether state changes have non-motion cues, and whether gesture-only flows have alternatives.

**Safe remediation direction:** preserve comprehension with static cues, simpler transitions, and non-drag alternatives.
