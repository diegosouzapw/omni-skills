---
name: accessibility-audit
description: "Accessibility audit workflow skill. Use this skill when a user needs keyboard, semantics, focus, contrast, motion, or assistive-technology review before shipping a UI."
version: "0.0.1"
category: design
tags: [accessibility, a11y, keyboard, semantics, focus, contrast, motion, frontend]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-28"
date_updated: "2026-03-28"
---

# Accessibility Audit

## Overview

Use this skill when a UI needs accessibility reviewed as an interaction system, not just as a lint pass. It is for keyboard flow, semantics, focus management, live regions, contrast, motion, error handling, and the gap between “looks fine” and “is actually operable.”

Good output should reduce accessibility risk before release. The goal is to make the UI perceivable, operable, understandable, and robust for real users and real assistive technology behavior.

## When to Use This Skill

- Use when a new screen, flow, modal, menu, or form is close to implementation or release.
- Use when teams need keyboard, focus, or semantic review beyond visual QA.
- Use when accessibility regressions keep appearing after component or token changes.
- Use when a design-system or frontend refactor may have harmed screen-reader or motion behavior.
- Use when a maintainer needs a review packet that clearly separates blockers from follow-up improvements.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Form flow | semantics and errors | Labels, errors, descriptions, and focus order are explicit and testable |
| Modal or drawer | focus control | Open, trap, escape, return focus, and announcement behavior are defined |
| Navigation or menu | keyboard flow | Arrow, tab, escape, and active-state rules are clear |
| Data-heavy screen | contrast and structure | Hierarchy, headings, landmarks, and table/list semantics are appropriate |
| Animation-heavy UI | reduced motion | Motion fallbacks and vestibular risk controls are explicit |

## Core Concepts

### Accessibility Is Behavior, Not Decoration

A screen can look polished and still fail users if focus order, semantics, error states, or announcements are wrong. Accessibility must be reviewed through interaction behavior, not only visual appearance.

### Keyboard And Focus Are First-Class

If a flow is hard to complete without a pointer, it is not ready. Focus entry, movement, containment, and return must be planned deliberately.

### Semantics And Naming Shape Assistive Understanding

Buttons, headings, dialogs, form fields, errors, descriptions, and live updates should communicate their role and state clearly to assistive technology.

## Workflow

1. Frame the audit scope: screen, flow, component family, platform assumptions, and primary user tasks.
2. Walk the keyboard path from entry to exit. Record tab order, roving focus, escape routes, traps, and return-focus rules.
3. Review semantics and naming: landmarks, heading structure, labels, descriptions, validation text, and state changes.
4. Review sensory risks: contrast, color dependence, animation, reduced-motion behavior, and visibility of focus indicators.
5. Close with an audit packet that separates release blockers, medium-risk follow-ups, and implementation notes.

## Examples

### Example 1: Modal and form review

```text
Use @accessibility-audit to review this signup modal for focus handling, keyboard escape paths, semantic labeling, validation errors, and reduced-motion behavior.
```

**Explanation:** Use this when interaction and semantics matter more than raw visual polish.

### Example 2: Accessibility packet renderer

```bash
python3 skills/accessibility-audit/scripts/render_accessibility_packet.py \
  "settings modal" \
  "keyboard,focus,errors,motion" \
  "blockers,follow-ups,implementation notes"
```

**Explanation:** Use this when you want a structured review packet for release readiness.

### Example 3: Design-system regression review

```text
Use @accessibility-audit to show whether this component-library refresh weakened keyboard access, semantics, or contrast in shared UI primitives.
```

**Explanation:** Use this when a system change may have caused broad accessibility regressions.

## Best Practices

- Review accessibility as part of core interaction design, not only as post-hoc compliance cleanup.
- Make keyboard completion possible for the primary task flow.
- Use explicit, stable labels and descriptions for controls, inputs, and validation states.
- Preserve visible focus indicators and do not hide them for visual neatness.
- Avoid color-only communication for state, status, or severity.
- Respect reduced-motion preferences and avoid motion that is necessary just to understand the UI.

## Troubleshooting

### Problem: The screen looks good, but keyboard users get stuck

**Symptoms:** Focus disappears, traps incorrectly, skips important controls, or never returns to the invoking element.
**Solution:** Walk the full keyboard path explicitly and document entry, movement, escape, and return-focus behavior. Use the keyboard-flow worksheet rather than relying on assumptions.

### Problem: Screen readers announce the wrong thing or too little

**Symptoms:** Controls have vague names, headings are inconsistent, errors are invisible to assistive tech, or dynamic updates are silent.
**Solution:** Review semantics, accessible names, descriptions, and live-region behavior together instead of patching isolated attributes.

### Problem: Accessibility regressions arrive through visual refreshes

**Symptoms:** A token or component update quietly harms contrast, focus visibility, or motion comfort.
**Solution:** Audit system-level changes with a contrast-and-motion review before rollout, and treat accessibility as a release gate for shared UI work.

## Related Skills

- `@frontend-design` — Use when the layout or state model still needs to be designed before auditing accessibility.
- `@design-systems-ops` — Use when regressions are coming from shared components, tokens, or system rollout decisions.
- `@omni-figma` — Use when the source of truth or audit context is primarily in Figma.
- `@documentation` — Use when accessibility fixes need release notes, remediation instructions, or internal guidance.

## Additional Resources

- [Accessibility audit checklist](references/checklist.md)
- [Keyboard flow worksheet](references/keyboard-flow-worksheet.md)
- [Semantic audit rubric](references/semantic-audit-rubric.md)
- [Contrast and motion review](references/contrast-and-motion-review.md)
- [Render an accessibility packet](scripts/render_accessibility_packet.py)
- [Accessibility audit brief](examples/accessibility-audit-brief.md)
