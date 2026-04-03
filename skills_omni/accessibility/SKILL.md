---
name: "accessibility"
description: "Accessibility (a11y) workflow skill. Use this skill when a user needs to audit or improve web accessibility for pages, components, flows, or design-system patterns using WCAG 2.1 as the baseline. Use it for keyboard navigation, focus management, screen reader support, semantic HTML, forms, contrast, media alternatives, and accessible custom widgets. Do not use it for SEO, performance tuning, legal advice, or broad multi-area site audits; use adjacent skills when the task becomes a full web-quality review, frontend debugging engagement, or CI automation project."
version: "0.0.1"
category: "frontend"
tags:
  - "accessibility"
  - "a11y"
  - "wcag"
  - "screen-reader"
  - "keyboard-navigation"
  - "semantic-html"
  - "aria"
  - "forms"
  - "contrast"
  - "frontend"
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
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/accessibility"
upstream_author: "web-quality-skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Accessibility (a11y)

## Overview

Use this skill to audit, fix, and verify web accessibility issues using **WCAG 2.1** as the baseline, with awareness of relevant **WCAG 2.2** improvements when they are obvious and low-risk to flag.

This skill is for practical frontend accessibility work: identifying issues, reproducing them, mapping them to WCAG criteria, applying the simplest valid remediation, and verifying the result with both automated and manual checks.

Prefer this skill when the request is specifically about accessibility for a page, flow, component, or design system. It is not a substitute for legal review, a full product compliance certification, or a broad site audit covering SEO, performance, content quality, and security together.

## When to Use This Skill

Use this skill when the request is primarily about accessibility, including cases such as:

- auditing a page or component for WCAG issues
- fixing keyboard access or focus management problems
- improving screen reader support
- correcting semantic HTML or accessible names
- reviewing forms, validation, and error messaging
- checking contrast, zoom, reflow, reduced motion, or non-color cues
- validating dialogs, menus, tabs, accordions, comboboxes, carousels, or live regions
- creating a reviewer packet with evidence, issue taxonomy, and retest status

Do **not** use this skill when the request is primarily about:

- SEO or discoverability only
- performance tuning or Core Web Vitals only
- legal advice or claiming formal compliance certification
- visual design critique without accessibility behavior review
- a broad site audit spanning accessibility, performance, SEO, and security together

Route adjacent work as needed:

- use `@web-quality-audit` for broad site reviews
- use `@core-web-vitals` for performance work
- use `@frontend-debugging` when the issue is broader than accessibility behavior
- use `@playwright` when the task becomes mainly CI or browser automation setup

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Accessibility audit for a page or flow | `references/wcag-audit-workflow.md` | Gives the main execution path from intake to verification |
| Need to map a bug to WCAG | `references/wcag-criteria-mapping.md` | Helps turn vague issues into testable findings |
| Unsure whether to use HTML or ARIA | `references/aria-native-first-guide.md` | Reinforces native-first remediation and common ARIA anti-patterns |
| Manual verification planning | `references/manual-test-matrix.md` | Covers keyboard, focus, screen readers, zoom, motion, and forms |
| Custom widget remediation | `references/component-patterns.md` | Summarizes expected behavior for common interactive components |
| Need a reusable issue report | `examples/accessibility-finding-template.md` | Produces consistent evidence for engineers and reviewers |
| Need automation for regression checks | `scripts/run_lighthouse_accessibility.sh` and `scripts/run_axe_url.sh` | Runs repeatable audits without overstating their scope |
| Need task routing or handoff | `agents/accessibility-router.md` | Helps move to adjacent skills when scope expands |

## Workflow

1. **Define scope and target**
   - Identify the exact page, route, component, or user flow.
   - Confirm the target level, usually **WCAG 2.1 AA** unless the user says otherwise.
   - Ask whether the goal is audit-only, remediation, regression prevention, or review packet generation.

2. **Check semantics first**
   - Inspect headings, landmarks, lists, buttons, links, forms, labels, and document language.
   - Prefer native HTML before considering ARIA.
   - Note obvious structural problems before running tools.

3. **Run automated checks**
   - Run targeted automated checks with Lighthouse and/or axe.
   - Treat results as signals, not proof of compliance.
   - Capture output paths, URLs, timestamps, and tool limitations.

4. **Perform manual keyboard and focus testing**
   - Tab through the full flow.
   - Verify logical order, visible focus, activation with keyboard, escape behavior, and absence of keyboard traps.
   - Check skip links and focus return after overlays or route changes.

5. **Perform screen reader spot checks**
   - Verify page title, headings, landmarks, links, buttons, form labels, instructions, errors, and dynamic updates.
   - Confirm that accessible names match visible intent.
   - Focus on changed or high-risk areas rather than pretending to certify every assistive technology combination.

6. **Map findings to WCAG and impact**
   - For each issue, record the affected page/component, reproduction steps, expected behavior, actual behavior, user impact, and likely WCAG criterion.
   - Use the criteria mapping reference to keep findings precise.

7. **Remediate using the least-complex valid fix**
   - Replace scripted `div` or `span` controls with native elements where possible.
   - Repair label relationships, focus handling, semantics, and state synchronization before adding more ARIA.
   - Use APG-aligned patterns only when a native element cannot express the behavior.

8. **Verify the fix**
   - Re-run the relevant automated checks.
   - Repeat the affected keyboard and screen reader checks.
   - Confirm there are no regressions such as hidden focusable content, duplicate IDs, or stale `aria-*` states.

9. **Document residual risk and handoff**
   - State what was tested manually, what tools were used, and what was not verified.
   - If a finding cannot be fixed immediately, document severity, affected users, workaround if any, and release-blocking status.

### Current guidance note

This skill audits against **WCAG 2.1** as the stated baseline. When relevant, it may also flag nearby **WCAG 2.2** improvements such as stronger focus appearance, dragging alternatives, or target size concerns, but those are advisory unless the project explicitly targets WCAG 2.2.

### Conformance levels

| Level | Requirement | Practical interpretation |
| --- | --- | --- |
| **A** | Minimum accessibility support | Usually not sufficient for production acceptance on its own |
| **AA** | Standard target | Default target for most product work |
| **AAA** | Enhanced accessibility | Apply selectively when feasible and valuable |

## Best Practices

### Do

- Start with **semantic HTML**: real buttons, links, inputs, headings, lists, tables, and landmarks.
- Use **native controls before ARIA**.
- Keep accessible names, descriptions, and state announcements aligned with visible UI.
- Test with both **automation and manual checks**.
- Capture evidence for every finding: location, reproduction, impact, criterion, and fix recommendation.
- Verify **keyboard support**, **focus visibility**, and **focus order** on every changed interaction.
- Check forms for labels, instructions, grouping, errors, and post-submit focus behavior.
- Check content at **200% zoom/reflow**, with **reduced motion**, and without relying on color alone.
- Use live regions sparingly and only for meaningful dynamic updates.
- Document limitations honestly: “no issues detected by configured checks” is not the same as compliance.

### Do not

- Do not claim Lighthouse, axe, or Playwright accessibility checks equal WCAG compliance.
- Do not remove focus outlines without a clearly visible replacement.
- Do not use `tabindex` values greater than `0` to force focus order.
- Do not add ARIA to patch fundamentally incorrect HTML when a native element would solve the problem.
- Do not hide visible content from assistive technologies with `aria-hidden="true"`.
- Do not leave hidden but focusable controls in the tab order.
- Do not use placeholder text as the only form label.
- Do not rely on color alone to convey errors, status, or selection.
- Do not implement custom widgets unless you can also implement their required keyboard and state behavior.

### Native-first guidance

Use the following order of preference:

1. Native HTML with correct semantics
2. Native HTML plus minimal supporting attributes
3. ARIA only when the required semantics or interaction cannot be expressed natively
4. Custom composite widgets only when necessary, following APG behavior closely

### Common high-impact review areas

- **Perceivable:** text alternatives, captions/transcripts, contrast, non-color cues
- **Operable:** keyboard access, focus visible, no traps, skip links, motion/timing controls
- **Understandable:** page language, consistent navigation, labels, instructions, errors
- **Robust:** valid structure, correct roles/states, accessible names, live region behavior

## Examples

### Example 1: Ask for a focused accessibility audit

```text
Use @accessibility to audit the checkout flow for WCAG 2.1 AA issues. Prioritize keyboard navigation, form labeling, error handling, modal behavior, and screen reader announcements. Produce findings with criterion mapping and severity.
```

**Expected output:** A scoped audit packet with findings, evidence, WCAG references, remediation recommendations, and retest notes.

### Example 2: Run a repeatable Lighthouse accessibility audit

```bash
bash scripts/run_lighthouse_accessibility.sh https://example.com/checkout
```

**Expected output:** A timestamped Lighthouse accessibility report file and a reminder that the result is not proof of compliance.

### Example 3: Run an axe scan against a single URL

```bash
bash scripts/run_axe_url.sh https://example.com/signup
```

**Expected output:** A saved axe JSON result for the URL, suitable for attaching to review notes.

### Example 4: Build a finding from observed behavior

```text
The modal opens visually, but Tab still reaches links behind the overlay and focus does not return to the opener on close. Create a finding with reproduction steps, likely WCAG mapping, affected users, and a native-first fix recommendation.
```

**Expected output:** A structured issue report pointing to focus containment, background inertness, initial focus, escape handling, and focus return.

### Example 5: Add CI regression coverage

```text
Add a Playwright + axe regression test for the account settings page. Report failures as accessibility regressions, not as formal compliance status.
```

**Expected output:** A targeted test example plus wording suitable for CI and PR review.

## Troubleshooting

### Problem: The page looks correct visually but keyboard users cannot complete the flow

**Symptoms:** Elements can be clicked with a mouse but not reached or activated with Tab, Enter, or Space. Focus order feels illogical, or focus disappears after interactions.

**Solution:** Replace non-native clickable containers with real buttons or links where possible. Verify tab order follows DOM order, remove positive `tabindex`, and ensure custom interactions implement expected keyboard behavior. Re-test with keyboard only before changing styles.

### Problem: A modal opens, but background content is still reachable

**Symptoms:** Screen reader or keyboard users can navigate to page content behind the modal. Focus does not move into the dialog, escape does not close it, or focus is lost on close.

**Solution:** Prefer native `<dialog>` where appropriate. Move initial focus into the dialog, return focus to the trigger on close, prevent background interaction using `inert` or an equivalent safe pattern, and verify escape handling and accessible naming.

### Problem: Content is hidden from assistive tech or focus reaches hidden content

**Symptoms:** A control is visible but not announced, or it is hidden visually but still receives focus. Screen readers skip expected content, or tabbing enters collapsed panels or off-screen menus.

**Solution:** Inspect `aria-hidden`, `hidden`, CSS visibility, conditional rendering, and `tabindex`. Do not place focusable elements inside containers marked `aria-hidden="true"`. Remove hidden content from the tab order until it is actually available.

### Problem: Screen readers announce a form field but not its instructions or error

**Symptoms:** The input is named, but users do not hear helper text, requirements, or validation feedback. Error summaries exist visually but are not announced meaningfully.

**Solution:** Ensure labels use `for`/`id` or proper nesting, connect instructions and errors with stable `aria-describedby` IDs, group related controls with `fieldset` and `legend`, and move focus to the summary or first invalid field in a predictable way.

### Problem: The automated audit passes, but the interface is still difficult to use

**Symptoms:** Lighthouse or axe reports few issues, yet keyboard navigation, screen reader output, or zoom/reflow remains poor.

**Solution:** Expand manual testing. Automated tools catch only a subset of issues. Verify headings, landmarks, focus order, visible labels, meaningful link text, reading order, dynamic announcements, zoom, reduced motion, and real task completion.

### Problem: ARIA was added, but accessibility got worse

**Symptoms:** Duplicate announcements, missing names, stale expanded/selected state, conflicting roles, or broken interaction patterns appear after adding `aria-*` attributes.

**Solution:** Remove unnecessary ARIA and restore native semantics first. Check whether the element already has built-in meaning. If a custom widget is still required, align roles, states, keyboard behavior, and focus management with the APG pattern for that component.

## Related Skills

- `@web-quality-audit` - Use when the user wants a broader review covering accessibility plus other quality domains.
- `@core-web-vitals` - Use when the task is performance-focused rather than accessibility-focused.
- `@frontend-debugging` - Use when the root issue is broader UI behavior or application state management.
- `@design-system` - Use when fixes should be codified into reusable component standards.
- `@playwright` - Use when the main deliverable becomes browser automation or CI test integration.
- `@seo` - Use only when discoverability and accessibility overlap but the request is fundamentally SEO-related.

## Additional Resources

### Local support pack

- [WCAG audit workflow](references/wcag-audit-workflow.md)
- [WCAG criteria mapping](references/wcag-criteria-mapping.md)
- [WCAG 2.2 deltas note](references/wcag-2.2-deltas.md)
- [Native HTML vs ARIA guide](references/aria-native-first-guide.md)
- [Manual accessibility test matrix](references/manual-test-matrix.md)
- [Component accessibility patterns](references/component-patterns.md)
- [Accessibility finding template](examples/accessibility-finding-template.md)
- [Remediation PR comment template](examples/remediation-pr-comment.md)
- [Playwright + axe example](examples/playwright-axe-test.spec.ts)
- [Testing Library accessible query examples](examples/testing-library-accessible-queries.md)
- [Native modal dialog example](examples/modal-dialog-native.html)
- [Accessible form errors example](examples/form-errors-accessible.html)
- [Run axe against a URL](scripts/run_axe_url.sh)
- [Run Lighthouse accessibility audit](scripts/run_lighthouse_accessibility.sh)
- [Validate a manual review packet](scripts/check_manual_a11y_packet.py)
- [Accessibility router](agents/accessibility-router.md)

### External references

- [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [ARIA in HTML](https://www.w3.org/TR/html-aria/)
- [MDN accessibility guidance](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [axe-core documentation](https://github.com/dequelabs/axe-core)
- [Lighthouse accessibility audits](https://developer.chrome.com/docs/lighthouse/accessibility/)

### Reporting guidance

When handing off work, include:

- scope reviewed
- target conformance level
- automated tools used
- manual checks performed
- findings with severity and user impact
- fixes applied or proposed
- retest status
- residual risks or known gaps

## Appendix: quick implementation reminders

### Text alternatives

```html
<!-- Decorative -->
<img src="border.png" alt="" />

<!-- Informative -->
<img src="sales-chart.png" alt="Bar chart showing Q3 sales increased 40 percent over Q2" />
```

### Icon-only buttons need an accessible name

```html
<button aria-label="Open menu">
  <svg aria-hidden="true"><!-- icon --></svg>
</button>
```

### Avoid replacing native controls with scripted containers

```html
<!-- Avoid -->
<div role="button" tabindex="0">Save</div>

<!-- Prefer -->
<button type="button">Save</button>
```

### Respect reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
