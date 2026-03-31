---
name: "web-design-guidelines"
description: "Web Interface Guidelines workflow skill. Use this skill when the user needs Review UI code for Web Interface Guidelines compliance. Use when asked to \\"review my UI\\", \\"check accessibility\\", \\"audit design\\", \\"review UX\\", or \\"check my site against best practices\\" and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: "design"
tags:
  - "web-design-guidelines"
  - "accessibility"
  - "ui-review"
  - "ux-audit"
  - "wcag"
  - "semantic-html"
  - "responsive-design"
  - "forms"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-31"
date_updated: "2026-03-31"
upstream_skill: "skills/web-design-guidelines"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "10"
upstream_head_repo: "diegosouzapw/omni-skills"
upstream_head_sha: "6694282a8c80060989f27612505ced763d291b76"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Web Interface Guidelines

## Overview

This skill packages the upstream `web-interface-guidelines` workflow from Vercel Labs into an Omni-ready review kit without hiding provenance or replacing the upstream source of truth.

Use it to review web UI code, components, routes, and form flows for Web Interface Guidelines alignment, accessibility, semantic HTML quality, responsive behavior, and practical UX issues before merge or handoff.

The operational anchor remains the upstream guideline payload:

```text
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Fetch that file fresh before each review. Then use this skill's local support pack to make the audit repeatable, evidence-based, and easier to hand off.

This skill improves execution depth, but it is still a UI review workflow. It does **not** replace a full security audit, performance investigation, legal accessibility certification, or framework-specific debugging process.

## When to Use This Skill

Use this skill when the request is primarily about reviewing an existing web interface rather than building one from scratch.

- Review a page, route, PR, or component for UI quality and accessibility issues.
- Check a site against web interface best practices before merge, launch, or handoff.
- Audit a design-system component for semantic HTML, keyboard behavior, focus handling, and ARIA usage.
- Review forms for labels, validation UX, autocomplete semantics, and error recovery.
- Evaluate responsive behavior, zoom/reflow behavior, sticky elements, and mobile interaction issues.
- Produce a terse findings list in `file:line` style, optionally with a reviewer packet grouped by severity and category.
- Preserve upstream Vercel provenance while adding stronger local execution structure.

Do **not** use this skill as the sole authority for:

- legal accessibility certification or compliance sign-off
- penetration testing or deep application security verification
- performance engineering or Core Web Vitals optimization
- privacy-law review or analytics governance review
- backend validation, auth/session architecture, or deployment troubleshooting beyond obvious UI-facing symptoms

If the review uncovers deeper issues outside UI scope, route to a more specialized skill after capturing the evidence.

## Operating Table

| Situation | Start here | Required checks | Escalate when |
| --- | --- | --- | --- |
| Single component audit | `references/component-pattern-audit-guide.md` | semantics, keyboard support, focus, role/state, visible labels | custom widget behavior depends on framework internals or app state logic |
| Page or route audit | `references/accessibility-review-checklist.md` | landmarks, headings, navigation, contrast, focus order, responsive layout | issues span app architecture, routing system, or rendering pipeline |
| Form validation flow review | `references/forms-review-guide.md` | label association, instructions, errors, autocomplete, preserved input, submission states | trust boundaries, server validation, auth, or sensitive data handling are at risk |
| Responsive and zoom review | `references/responsive-and-zoom-test-matrix.md` | 320px layout, 200-400% zoom, reflow, sticky/fixed overlap, overflow clipping | failures require layout-system redesign or framework-specific rendering fixes |
| Terse review output only | upstream `command.md` + `examples/findings-terse-vs-expanded.md` | file/path evidence and concise findings | stakeholders need prioritization, grouped summary, or remediation guidance |
| First-time operator use | `references/accessibility-review-checklist.md` and `examples/manual-test-script.md` | automation plus manual checks | the task broadens into security, performance, or release decisions |
| Scope or ownership uncertainty | `agents/review-router.md` | clarify scope and handoff boundary | another specialty owns the next step |

## Workflow

1. **Confirm scope before reviewing.**
   - Ask which files, routes, components, or flows should be audited.
   - If the user gives no target, ask for exact files, directories, routes, or a reproduction path.
   - Clarify whether the user wants terse findings only or a fuller review packet.

2. **Fetch the current upstream rules.**
   - Retrieve the latest upstream guideline payload from:

   ```text
   https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
   ```

   - Treat that fetched file as the current source of truth for the imported workflow.
   - Do not assume the packaged copy is current enough for a fresh review.

3. **Choose the smallest relevant local support pack.**
   - Use `references/accessibility-review-checklist.md` for general page and route audits.
   - Use `references/component-pattern-audit-guide.md` for custom widgets and design-system components.
   - Use `references/forms-review-guide.md` for forms and validation UX.
   - Use `references/responsive-and-zoom-test-matrix.md` for mobile, zoom, and reflow checks.
   - Use `examples/manual-test-script.md` if you need a repeatable manual review sequence.

4. **Inventory the review target.**
   - Note the files, components, routes, states, and user flows in scope.
   - Identify interactive elements, forms, dialogs, navigation, and third-party embeds.
   - Record any states that need separate checks: loading, error, success, disabled, dark mode, narrow viewport, or zoomed layout.

5. **Run automated checks as a first pass, not a verdict.**
   - Use available automated audit tooling if the environment already supports it.
   - Treat automated results as triage input only.
   - Expect manual verification for keyboard flow, focus visibility, dialog behavior, announced labels, error messaging, and responsive failure cases.

6. **Perform manual interaction review.**
   - Keyboard-only navigation: tab order, reverse navigation, activation, dismissal, and no keyboard traps.
   - Focus review: visible focus, sensible order, focus return after closing overlays, and no lost focus.
   - Semantics review: native elements first, heading structure, landmarks, lists, labels, and links vs buttons.
   - Component pattern review: dialogs, tabs, accordions, menus, comboboxes, and custom selects.
   - Form review: labels, instructions, required indicators, error association, preserved input, autocomplete, and submission states.
   - Responsive review: small viewport, zoom/reflow, sticky elements, hidden overflow, clipped content, and touch target usability.

7. **Map each issue to evidence and impact.**
   For every finding, capture:
   - file path and line if available
   - component, selector, or UI region
   - observed behavior
   - affected users or interaction mode
   - severity and category
   - reference to the upstream guideline and, when useful, WCAG 2.2, APG, or semantic HTML guidance

8. **Output findings in the required format.**
   - Default to the upstream terse `file:line` style when the user asked for a strict review result.
   - If useful, add an expanded packet with severity grouping, standards references, remediation hints, and open questions.
   - See `examples/findings-terse-vs-expanded.md` for both styles.

9. **Route when the problem exceeds UI review scope.**
   - Escalate if you find likely XSS risk, unsafe HTML rendering, auth/session issues, or deeper performance/system concerns.
   - Use `agents/review-router.md` to keep the handoff explicit.

### Imported Workflow Notes

#### Imported: How It Works

1. Fetch the latest guidelines from the source URL below.
2. Read the specified files, or ask the user which files or patterns to review.
3. Check against all rules in the fetched guidelines.
4. Output findings in the terse `file:line` format.

## Examples

### Example 1: Review a page template

```text
Use @web-design-guidelines to review the checkout page components in src/routes/checkout and src/components/forms. Fetch the latest upstream command.md first, then produce terse findings and a short severity summary.
```

### Example 2: Review a custom dialog component

```text
Audit src/components/Dialog.tsx and its usages with @web-design-guidelines. Check keyboard support, focus trapping, focus return, escape handling, labeling, and mobile overflow behavior.
```

### Example 3: Review a form-heavy flow

```text
Use @web-design-guidelines on the sign-up flow in src/app/signup. Focus on label association, autocomplete, error messaging, preserved input after failed validation, password-manager friendliness, and keyboard-only operation.
```

### Example 4: Use the support-pack selector script

```bash
python3 skills/web-design-guidelines/scripts/print_review_matrix.py --scenario form
```

### Example 5: Compare terse vs expanded output

```text
Review the navigation and mobile menu components with @web-design-guidelines. Return strict file:line findings first, then add a grouped summary by severity and category.
```

### Expected findings style

See:
- `examples/findings-terse-vs-expanded.md`
- `examples/common-remediations.md`
- `examples/manual-test-script.md`

## Best Practices

### Do

- Fetch the upstream guideline file fresh before each review.
- Ask for exact files, routes, or components when the scope is ambiguous.
- Prefer semantic HTML over ARIA-heavy custom controls.
- Use native buttons for actions and anchors for navigation.
- Validate automated findings manually before presenting them as defects.
- Check keyboard access, visible focus, and focus order on every interactive review.
- Review forms for labels, instructions, error recovery, autocomplete, and preserved user input.
- Test responsive behavior at narrow widths and under zoom/reflow, not only at desktop size.
- Capture evidence per finding so another reviewer can reproduce it.
- Keep provenance visible: note that the review used the upstream Vercel guidelines plus this local audit kit.

### Don't

- Do not claim that passing this workflow guarantees legal accessibility compliance.
- Do not treat Lighthouse, axe, or similar tools as complete accessibility verification.
- Do not add ARIA when a native HTML element already solves the problem.
- Do not report cosmetic opinions as if they were standards failures.
- Do not collapse security issues into normal UX findings; flag and escalate them.
- Do not rely on client-side validation as authoritative validation logic.
- Do not ignore hidden states such as disabled, loading, dark theme, zoomed layout, or mobile navigation.

### Practical review heuristics

- **Semantics first:** prefer `button`, `a`, `label`, `input`, `select`, `nav`, `main`, `header`, `footer`, and proper headings before custom roles.
- **Name/role/value:** every interactive control should expose a clear accessible name and correct state.
- **Focus matters more than polish:** keyboard blockers and hidden focus are usually higher severity than spacing or visual refinement issues.
- **Forms are workflows:** review the whole cycle, not just the resting state.
- **Responsive means usable, not merely fluid:** content must remain operable under narrow viewports and zoom.
- **Security-adjacent UI findings count:** unsafe rendered HTML, risky third-party embeds, or deceptive data collection patterns should be called out and routed.

### Accessibility baseline to include in most reviews

Include these checks when relevant, even if the upstream wording differs:

- keyboard access and no keyboard traps
- visible focus and focus appearance
- touch target size where applicable
- labels, instructions, and error recovery
- semantic structure and landmarks
- contrast in default and alternate themes/states
- reflow and zoom behavior
- dialog and overlay focus management
- accessible authentication and redundant-entry risks where relevant
- drag-only interactions that need alternatives

## Troubleshooting

### Problem: Automated scans pass, but keyboard navigation still fails

**Symptoms:** Lighthouse or another scanner looks mostly clean, but tab order is confusing, the menu cannot be fully operated, or focus disappears after interaction.
**Solution:** Run the manual keyboard sequence in `examples/manual-test-script.md`. Check for custom controls implemented with non-semantic elements, missing keyboard handlers, incorrect tabindex use, and overlays that do not manage focus correctly.

### Problem: A dialog looks correct visually but focus escapes or gets lost

**Symptoms:** Opening a modal does not move focus inside it, tab reaches background controls, or closing the modal leaves focus nowhere useful.
**Solution:** Review the dialog section in `references/component-pattern-audit-guide.md` and compare with `examples/common-remediations.md`. Verify initial focus, contained tab sequence, escape support when appropriate, background inertness, and focus return to the triggering control.

### Problem: A custom widget announces incorrectly or behaves inconsistently

**Symptoms:** A custom select, menu, tab set, or accordion works with a mouse but not with keyboard or assistive tech expectations.
**Solution:** Prefer replacing the widget with native HTML where possible. If custom behavior is required, verify role, state, property, labeling, and keyboard interaction against the component audit guide. Record the mismatch as both a usability and accessibility issue.

### Problem: Form errors are visible but not properly announced or linked

**Symptoms:** Users can see inline errors, but screen reader users do not hear them, focus does not move to the first error, or the relationship between error text and input is unclear.
**Solution:** Use `references/forms-review-guide.md` and `examples/common-remediations.md`. Check programmatic label association, `aria-describedby` or equivalent linkage, error summaries where appropriate, non-color-only cues, and preservation of entered data after validation failure.

### Problem: The layout works on desktop but breaks under zoom or on mobile

**Symptoms:** Horizontal scrolling appears, sticky headers cover content, drawers trap interaction, or text clips at 200-400% zoom.
**Solution:** Use `references/responsive-and-zoom-test-matrix.md` and capture viewport plus zoom-specific evidence. Check fixed-width containers, overflow clipping, sticky/fixed bars, modal sizing, and controls that become too small or crowded on touch devices.

### Problem: The review uncovered unsafe rendered content or embed risk

**Symptoms:** The UI renders user-controlled HTML or markdown unsafely, injects third-party scripts broadly, or embeds external content without clear trust boundaries.
**Solution:** Record the UI surface and why it is risky, but do not present it as fully analyzed security posture. Escalate via `agents/review-router.md` to a security-focused workflow. Keep the UI evidence in the review packet so the next reviewer has a concrete starting point.

### Problem: The task drifted beyond UI review scope

**Symptoms:** Findings now depend on server validation, auth/session flows, CSP policy design, framework hydration bugs, or app-wide architecture choices.
**Solution:** Finish the UI findings you can support with evidence, then hand off explicitly using `agents/review-router.md`. State what this skill confirmed, what remains uncertain, and which specialty should take over.

## Related Skills

Use related skills when the review reveals a different primary problem domain.

- `@deploy-to-vercel` for deployment and release-path issues
- `@vercel-cli-with-tokens` for CLI-driven environment or platform workflows
- `@vercel-composition-patterns` for architecture and composition questions beyond review scope
- `@vercel-react-best-practices` for framework-specific React implementation guidance after the audit identifies likely remediation areas

## Additional Resources

### Local support pack

- [Accessibility review checklist](references/accessibility-review-checklist.md)
- [Component pattern audit guide](references/component-pattern-audit-guide.md)
- [Forms review guide](references/forms-review-guide.md)
- [Responsive and zoom test matrix](references/responsive-and-zoom-test-matrix.md)
- [Terse vs expanded findings examples](examples/findings-terse-vs-expanded.md)
- [Common remediation examples](examples/common-remediations.md)
- [Manual test script](examples/manual-test-script.md)
- [Review router](agents/review-router.md)
- [Print review matrix](scripts/print_review_matrix.py)

### Upstream and standards references

- Upstream Vercel guideline payload: `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
- WCAG 2.2: `https://www.w3.org/TR/WCAG22/`
- WAI-ARIA Authoring Practices Guide: `https://www.w3.org/WAI/ARIA/apg/`
- MDN HTML elements reference: `https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements`
- MDN ARIA reference: `https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA`
- MDN responsive design: `https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design`
- MDN autocomplete attribute: `https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete`
