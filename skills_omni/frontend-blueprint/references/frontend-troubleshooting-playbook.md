# Frontend Troubleshooting Playbook

## Missing References

**Symptoms:** The user keeps saying "just make it nice" or cannot share examples.

**Recovery:** Use contrast pairs, anti-references, and one-sentence direction options. Do not generate a complete UI until one direction is chosen.

## Token Drift

**Symptoms:** Final output feels inconsistent even though individual pieces look acceptable.

**Recovery:** Re-check the token worksheet. Standardize repeated colors, spacing, radius, and typography before changing component structure.

## Responsive Regression

**Symptoms:** Layout works full-width but collapses poorly in smaller spaces.

**Recovery:** Test both viewport width and container width assumptions. Simplify nesting, reduce fixed dimensions, and use more adaptive layout rules.

## Accessibility Regression After Redesign

**Symptoms:** Cleaner visuals caused lower contrast, hidden focus, or smaller click targets.

**Recovery:** Restore usability first. Keep the direction but adjust values and states until the component is both attractive and operable.

## Interactive Pattern Failure

**Symptoms:** Dialogs, menus, tabs, and accordions look polished but behave incorrectly.

**Recovery:** Repair semantics and keyboard interaction before adding more visual polish.

## Workflow Overhead

**Symptoms:** A tiny request is being treated like a design-system project.

**Recovery:** Compress discovery, keep the approval gate, and produce only the smallest artifact needed to avoid guessing.
