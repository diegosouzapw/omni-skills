---
name: "accessibility-audit"
description: "Accessibility audit workflow skill. Use this skill when a user needs keyboard, semantics, focus, contrast, motion, touch, zoom, error-state, or assistive-technology review before shipping a UI."
version: "0.0.1"
category: "design"
tags:
  - "accessibility"
  - "a11y"
  - "keyboard"
  - "semantics"
  - "focus"
  - "contrast"
  - "motion"
  - "frontend"
  - "wcag"
  - "screen-reader"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "antigravity"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-28"
date_updated: "2026-03-29"
upstream_skill: "skills/accessibility-audit"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Accessibility Audit

## Overview

Use this skill when a UI needs accessibility reviewed as an interaction system, not just as a scanner pass. It is for keyboard flow, semantics, focus management, accessible names, dynamic announcements, contrast, zoom and reflow, reduced motion, touch targets, error handling, and the gap between “looks fine” and “is actually operable.”

Good output should reduce release risk before shipping. A strong audit packet should:

- identify user-blocking issues, not just lint findings
- separate automated findings from manual-only risks
- map confirmed issues to relevant WCAG 2.2 criteria where appropriate
- document what was actually tested, including browser and assistive-technology assumptions
- leave the implementation team with concrete, testable remediation guidance

Treat automation as input, not sign-off. A clean scanner result does **not** mean the experience is accessible.

## When to Use This Skill

- Use when a new screen, flow, modal, menu, form, or dashboard is close to implementation or release.
- Use when teams need keyboard, focus, semantic, or assistive-technology review beyond visual QA.
- Use when accessibility regressions keep appearing after component, token, or framework changes.
- Use when a design-system or frontend refactor may have harmed screen-reader output, motion behavior, or focus visibility.
- Use when a maintainer needs a review packet that clearly separates release blockers from follow-up improvements.
- Use when login, authentication, checkout, settings, or other high-risk flows must be audited before rollout.
- Use when mobile or responsive views may introduce touch-target, zoom, reflow, or gesture problems.

## Operating Table

| Situation | Primary focus | Manual checks that matter most | Relevant WCAG 2.2 areas | What good output looks like |
| :-------- | :------------ | :----------------------------- | :---------------------- | :-------------------------- |
| Form flow | semantics and errors | Labels, instructions, invalid submit, inline error focus, status announcements | 1.3.1, 3.3.x, 4.1.2, 4.1.3 | Labels, errors, descriptions, recovery, and announcement behavior are explicit and testable |
| Modal or drawer | focus control | Entry focus, tab containment, escape, background inertness, return focus | 2.1.1, 2.4.3, 2.4.7, 2.4.11 | Open, trap, escape, naming, and return-focus behavior are defined |
| Navigation or menu | keyboard flow | Tab sequence, arrow-key behavior where applicable, active/current state, escape paths | 2.1.1, 2.4.3, 4.1.2 | Arrow, tab, escape, and active-state rules are clear and match the widget pattern |
| Data-heavy screen | structure and naming | Headings, landmarks, table/list semantics, meaningful sequence, visible focus | 1.3.1, 1.3.2, 2.4.6, 2.4.11 | Hierarchy, headings, landmarks, and data semantics are appropriate |
| Animation-heavy UI | reduced motion | Motion on load, hover, route change, autoplay, reduced-motion fallback | 2.2.2, 2.3.3, 2.3.1 | Motion fallbacks and vestibular-risk controls are explicit |
| Responsive/mobile view | zoom, reflow, touch | 200% zoom, 320 CSS px reflow, target size, clipping, off-screen controls | 1.4.4, 1.4.10, 2.5.8 | Content remains usable without horizontal task breakage and controls are operable |
| Gesture-heavy interaction | alternative input | Drag-only actions, path gestures, swipe dependence, touch alternatives | 2.5.1, 2.5.7 | Non-drag, non-gesture alternatives exist unless essential |
| Authentication flow | cognitive load and recovery | Password rules, timeout messaging, copy-paste support, accessible auth patterns | 3.3.7, 3.3.8, 4.1.3 | Login can be completed without memory tests or silent failures |

## Core Concepts

### Accessibility Is Behavior, Not Decoration

A screen can look polished and still fail users if focus order, semantics, error states, announcements, or motion handling are wrong. Accessibility must be reviewed through interaction behavior, not only visual appearance.

### Manual Testing Is Required

Automated tools are useful for fast baseline detection, but they miss many release-critical failures such as broken tab order, poor dialog focus behavior, confusing announcements, gesture-only interactions, and task-level usability failures.

### Keyboard And Focus Are First-Class

If a flow is hard to complete without a pointer, it is not ready. Focus entry, movement, containment, escape, visibility, and return must be planned deliberately.

### Prefer Native HTML Before ARIA

Use semantic HTML whenever possible. Add ARIA only when native elements cannot express the behavior. Invalid or unnecessary ARIA often makes accessibility worse, not better.

### Audit Real Tasks, Not Isolated Screenshots

A component can seem accessible in isolation while failing in the actual flow. Audit complete user tasks such as sign in, search, add to cart, edit settings, submit form, dismiss dialog, and recover from errors.

## Workflow

1. **Frame the audit scope.**
   - Define the screen, flow, component family, and primary tasks.
   - Record environment assumptions: browser, OS, viewport, input mode, and assistive technology if used.
   - Decide whether the audit is release-blocking or exploratory.

2. **Run a safe automated baseline.**
   - Capture scanner findings from the target UI if such tooling is already available in the project workflow.
   - Treat these results as triage only.
   - Do not report scanner output as a confirmed issue until you reproduce and validate it in context.
   - Use [manual vs automated coverage matrix](references/manual-vs-automated-coverage-matrix.md) to avoid false confidence.

3. **Walk the keyboard path from entry to exit.**
   - Start from the first reachable point in the task.
   - Record tab order, skipped controls, hidden focus, focus loss after state changes, traps, and return-focus behavior.
   - For composite widgets, verify arrow-key behavior only when the pattern actually calls for it.
   - Use [composite widget keyboard patterns](references/composite-widget-keyboard-patterns.md) and [dialog audit checklist](references/dialog-audit-checklist.md) when relevant.

4. **Review semantics, names, roles, and states.**
   - Check landmarks, heading hierarchy, lists, tables, labels, descriptions, and control purpose.
   - Verify that accessible names are specific and stable, especially for icon-only controls.
   - Prefer native controls over `div` or `span` elements with patched behavior.
   - Confirm that role/state/property combinations are valid for the actual HTML element.

5. **Test dynamic updates and error handling.**
   - Submit invalid forms.
   - Trigger async loading, save states, toasts, and success or failure messages.
   - Open and close overlays.
   - Verify whether important changes are announced once, at the right time, and without duplicate noise.
   - Use [forms and validation checklist](references/forms-and-validation-checklist.md).

6. **Review sensory and responsive risks.**
   - Check focus visibility, contrast-sensitive states, color-only meaning, reduced-motion behavior, zoom, and reflow.
   - Verify target size and whether interactions require dragging or precise gestures.
   - Use [motion, zoom, and touch review](references/motion-zoom-and-touch-review.md).

7. **Run an assistive-technology smoke test when the flow is important or complex.**
   - Test at least the most likely browser and screen-reader pair for the target audience when possible.
   - Document what was actually tested, not what is assumed to work.
   - Use [assistive technology browser matrix](references/assistive-technology-browser-matrix.md).

8. **Classify findings by user impact and release risk.**
   - Mark whether the issue blocks task completion, causes severe confusion, or is a lower-risk improvement.
   - Map confirmed findings to relevant WCAG 2.2 criteria where appropriate.
   - Use [severity and release rubric](references/severity-and-release-rubric.md) and [WCAG 2.2 audit mapping](references/wcag-2.2-audit-mapping.md).

9. **Produce the audit packet.**
   - Include scope, environments tested, limitations, findings, severity, reproduction steps, user impact, WCAG mapping, remediation direction, and retest status.
   - Use [audit report template](examples/audit-report-template.md) or render a starter packet with the local script.

10. **Close with remediation and retest guidance.**
   - Recommend the smallest safe fix that restores accessible behavior.
   - Avoid speculative rewrites when a targeted semantic or focus fix is sufficient.
   - Identify what must be retested after the fix lands.

## Best Practices

### Do

- Review accessibility as part of core interaction design, not as post-hoc compliance cleanup.
- Audit complete tasks, not only isolated components.
- Make keyboard completion possible for the primary flow.
- Keep focus visible, predictable, and recoverable.
- Use explicit, stable labels and descriptions for controls, inputs, and validation states.
- Prefer native HTML semantics before adding ARIA.
- Verify dynamic announcements for loading, validation, success, and error states.
- Check zoom, reflow, touch targets, reduced motion, and drag alternatives in addition to desktop keyboard flow.
- Map confirmed issues to WCAG 2.2 when reporting.
- Document the tested browser and assistive-technology combinations.

### Don't

- Do not treat axe, Lighthouse, or lint output as accessibility sign-off.
- Do not recommend ARIA attributes without verifying that the element and pattern are valid.
- Do not hide focus indicators for visual neatness.
- Do not rely on color alone for state, status, or severity.
- Do not assume a visually obvious icon has an accessible name.
- Do not trap focus unless the component is meant to do so.
- Do not claim broad assistive-technology compatibility unless it was actually tested.

## Troubleshooting

### Problem: The scanner passes, but the flow is still unusable

**Symptoms:** Automated checks are clean, but keyboard users cannot complete the task, dialog behavior is confusing, or screen-reader output is noisy or misleading.

**Solution:** Re-run the audit as a task-based manual review. Check tab order, focus entry and return, state announcements, and meaningful sequence. Use the [manual vs automated coverage matrix](references/manual-vs-automated-coverage-matrix.md) to identify likely blind spots.

### Problem: Keyboard users get stuck in a modal or drawer

**Symptoms:** Focus escapes to the page behind the overlay, never enters the dialog correctly, gets lost on close, or escape behavior is inconsistent.

**Solution:** Verify dialog naming, initial focus, tab containment, escape handling, background inertness, and return focus to the invoking control. Use the [dialog audit checklist](references/dialog-audit-checklist.md). Prefer native dialog behavior or a well-tested dialog pattern over custom focus scripting where possible.

### Problem: Screen readers announce the wrong thing or too little

**Symptoms:** Controls have vague names, headings are inconsistent, errors are not exposed, status changes are silent, or announcements are repeated unnecessarily.

**Solution:** Review accessible name source, descriptions, live-region usage, and state exposure together. Remove redundant or invalid ARIA. Test the interaction with real screen-reader output instead of trusting markup intent alone.

### Problem: A clickable `div` works with a mouse but not with a keyboard

**Symptoms:** The control can be clicked, but not tabbed to or activated consistently with Enter or Space. The element may have patched ARIA but still behaves inconsistently.

**Solution:** Replace the custom element with the appropriate native control when possible, such as `<button>` or `<a>`. If a composite widget is truly needed, apply the correct pattern and verify keyboard behavior end to end.

### Problem: Validation appears visually, but users are not told what failed

**Symptoms:** Errors show on screen after submit, but focus does not move appropriately, the invalid field is unclear, or the status is not announced.

**Solution:** Ensure fields have labels, error messages are associated correctly, invalid state is exposed, and important updates are announced without duplication. Re-test the full invalid-submit and recovery path using the [forms and validation checklist](references/forms-and-validation-checklist.md).

### Problem: A visual refresh introduced accessibility regressions

**Symptoms:** Token or component changes quietly weaken contrast, focus visibility, target size, or reduced-motion behavior.

**Solution:** Audit shared primitives and high-traffic flows before rollout. Compare the old and new states for visible focus, semantic integrity, and motion comfort. Treat design-system accessibility regressions as release-significant when they affect shared components.

### Problem: Content breaks at zoom or on narrow screens

**Symptoms:** Text overlaps, dialogs render off-screen, controls become unreachable, or users must scroll in two directions to complete the task.

**Solution:** Re-test at zoom and constrained widths. Check reflow, clipping, off-canvas overlays, and touch target spacing. Flag issues that block task completion as high severity even if they are not visible at default desktop size.

## Examples

### Example 1: Modal and form review

```text
Use @accessibility-audit to review this signup modal for focus entry, tab containment, escape behavior, semantic labeling, invalid-submit behavior, live-region announcements, and reduced-motion handling. Return blockers, follow-ups, and WCAG 2.2 mappings.
```

**Explanation:** Use this when interaction behavior and error recovery matter more than raw visual polish.

### Example 2: Accessibility packet renderer

```bash
python3 skills/accessibility-audit/scripts/render_accessibility_packet.py \
  --title "Settings modal audit" \
  --scope "account settings modal" \
  --areas "keyboard,focus,semantics,errors,motion" \
  --environments "Chrome on macOS; keyboard-only" \
  --severity-model "blocker,high,medium,low"
```

**Explanation:** Use this when you want a structured starter packet for release readiness.

### Example 3: Design-system regression review

```text
Use @accessibility-audit to show whether this component-library refresh weakened keyboard access, focus appearance, semantics, touch target size, or reduced-motion behavior in shared UI primitives. Separate release blockers from non-blocking cleanup.
```

**Explanation:** Use this when a system change may have caused broad accessibility regressions.

### Example 4: Authentication audit

```text
Use @accessibility-audit to review this sign-in and password-reset flow for accessible authentication, error recovery, timeout messaging, keyboard completion, screen-reader announcements, and mobile touch usability.
```

**Explanation:** Use this for high-risk flows where cognitive load and recovery paths matter.

## Audit Packet Expectations

A useful accessibility audit packet should include:

- scope and user tasks
- tested environments and known limitations
- automated findings reviewed, if any
- manual findings with reproduction steps
- user impact and severity
- relevant WCAG 2.2 mapping
- remediation direction that favors native, minimal fixes
- retest instructions after remediation

Use these local assets:

- [Audit report template](examples/audit-report-template.md)
- [Dialog audit sample](examples/component-audit-sample-dialog.md)
- [Form audit sample](examples/component-audit-sample-form.md)
- [Render an accessibility packet](scripts/render_accessibility_packet.py)

## Related Skills

- `@frontend-design` — Use when the layout, interaction model, or state design still needs to be designed before auditing accessibility.
- `@design-systems-ops` — Use when regressions are coming from shared components, tokens, or rollout decisions.
- `@omni-figma` — Use when the source of truth or audit context is primarily in Figma.
- `@documentation` — Use when accessibility fixes need release notes, remediation instructions, or internal guidance.

## Additional Resources

### Local references

- [Manual vs automated coverage matrix](references/manual-vs-automated-coverage-matrix.md)
- [WCAG 2.2 audit mapping](references/wcag-2.2-audit-mapping.md)
- [Severity and release rubric](references/severity-and-release-rubric.md)
- [Assistive technology browser matrix](references/assistive-technology-browser-matrix.md)
- [Dialog audit checklist](references/dialog-audit-checklist.md)
- [Forms and validation checklist](references/forms-and-validation-checklist.md)
- [Composite widget keyboard patterns](references/composite-widget-keyboard-patterns.md)
- [Motion, zoom, and touch review](references/motion-zoom-and-touch-review.md)
- [Troubleshooting decision tree](references/troubleshooting-decision-tree.md)

### External standards and guidance

- WCAG 2.2
- WAI-ARIA Authoring Practices Guide
- ARIA in HTML
- Accessible Name and Description Computation 1.2
- W3C tutorials for page structure, forms, and carousels
- MDN guidance for keyboard access, live regions, `aria-hidden`, and `prefers-reduced-motion`
