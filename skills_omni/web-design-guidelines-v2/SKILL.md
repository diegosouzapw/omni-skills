---
name: "web-design-guidelines-v2"
description: "Web Interface Guidelines workflow skill. Use this skill when a user needs a structured review of web UI code for interface quality, accessibility, interaction patterns, forms, responsive behavior, motion, theming, and navigation-state usability. Use when asked to review a UI, check accessibility, audit design or UX, or assess a site against web interface best practices. Do not use it as the primary skill for performance audits, SEO reviews, backend security, or full-site compliance programs; hand off to adjacent skills when the work leaves UI review scope."
version: "0.0.1"
category: "design"
tags:
  - "web-design-guidelines-v2"
  - "web-design-guidelines"
  - "ui-review"
  - "accessibility"
  - "ux"
  - "forms"
  - "responsive-design"
  - "interaction-design"
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
upstream_skill: "skills/web-design-guidelines-v2"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Web Interface Guidelines

## Overview

This skill packages the upstream workflow from `packages/skills-catalog/skills/(design)/web-design-guidelines` in `https://github.com/tech-leads-club/agent-skills.git` while making it easier to execute as a repeatable UI review workflow.

Use it to review web interface code and behavior for visual design quality, semantic HTML, accessibility, keyboard/focus behavior, forms, motion, responsive layout, theming, navigation state, and common interaction anti-patterns.

This is a **review and reporting** skill. It helps the operator inspect code and UI behavior, classify findings, and produce terse actionable output. It does **not** replace a formal accessibility conformance audit, performance benchmarking, SEO review, or security assessment.

Preserve provenance when it matters. If the user specifically wants the imported workflow or upstream lineage retained in notes, PR comments, or handoff packets, keep that context visible.

## When to Use This Skill

Use this skill when the request is primarily about **web UI quality and interaction guidance**.

### In scope

- Review semantic HTML and native element usage.
- Check keyboard accessibility, focus order, and focus visibility.
- Audit forms for labels, instructions, validation, autocomplete, and status messaging.
- Review interactive components such as dialogs, tabs, menus, accordions, comboboxes, and custom controls.
- Check responsive layout behavior, zoom safety, mobile overflow, safe areas, and touch interactions.
- Review motion, reduced-motion behavior, and whether state changes rely on animation alone.
- Check dark mode, theming consistency, contrast regressions, and token usage.
- Review navigation and state behavior such as deep linking, browser back/forward support, and URL-synced filters or tabs.
- Flag common UX and implementation anti-patterns in code review or pre-merge review.

### Do not use this skill as the primary workflow for

- Core Web Vitals, render performance, or performance budgets.
- SEO, metadata, crawlability, or search ranking concerns.
- Backend, auth, infrastructure, or application security review.
- A full legal or organizational accessibility compliance program.
- Deep frontend debugging when the main task is fixing runtime defects rather than reviewing interface quality.

If those concerns appear incidentally, note them briefly and hand off to the better-fit skill.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time UI review | `references/web-ui-review-checklist.md` | Gives a complete review pass order across semantics, interaction, forms, motion, responsive behavior, theming, and navigation |
| Need severity and wording consistency | `references/issue-taxonomy.md` | Standardizes severity, confidence, affected users, and category labels |
| Reviewing custom widgets | `references/component-review-matrix.md` | Encourages native HTML first and APG-aligned patterns only when custom widgets are justified |
| Unsure how to phrase findings | `examples/sample-findings.md` | Shows terse `file:line` findings with category and severity |
| Delivering a PR or audit summary | `examples/review-report-template.md` | Provides a reusable review packet structure |
| Need to route to adjacent skills | `agents/review-router.md` | Helps decide whether to stay in this skill or hand off |
| Need upstream lineage or import context | `references/omni-import-playbook.md` and `scripts/omni_import_print_origin.py` | Keeps provenance visible without letting packaging details dominate the review |

## Workflow

1. **Confirm scope and target artifacts**  
   Identify the pages, components, routes, PR files, or design-system surfaces to review. If the user did not specify files or screens, ask for them.

2. **Choose the review depth**  
   Decide whether this is:
   - a quick PR review,
   - a component-level review,
   - a page-flow review, or
   - a broader interface audit packet.

3. **Load the minimum support pack that changes the outcome**  
   Start with `references/web-ui-review-checklist.md`. Add the issue taxonomy, component matrix, examples, or import provenance files only as needed.

4. **Inspect semantics before ARIA**  
   Prefer native HTML expectations first. Check whether buttons, links, form controls, headings, lists, tables, landmarks, and dialogs are implemented with the correct native elements before accepting custom patterns.

5. **Review interaction and state**  
   Check keyboard access, visible focus, pointer alternatives, touch behavior, dialogs, dynamic updates, form states, deep linking, and browser navigation behavior.

6. **Review layout and presentation**  
   Check responsive behavior, overflow, zoom safety, spacing consistency, images, typography, theming, dark mode, and reduced-motion handling.

7. **Classify findings**  
   For each issue, record:
   - location (`file:line` when possible)
   - category
   - severity
   - affected state or interaction
   - short rationale only when the fix is non-obvious

8. **Route overlaps deliberately**  
   If the work becomes mainly performance, SEO, debugging, localization, or comprehensive accessibility compliance, note the overlap and hand off rather than stretching this skill beyond scope.

9. **Produce a concise report**  
   Group findings by file or component. Use terse, high-signal wording. Summarize the top risks, blocked areas, and recommended next steps.

### Imported Workflow Notes

#### Imported: How It Works

1. Read the guidelines from `references/guideline.md`
2. Read the specified files, or ask the user which files or patterns to review
3. Check against all relevant rules in the guidelines
4. Output findings in terse `file:line` format

## Review Priorities

Use this order when time is limited:

1. Broken semantics or inaccessible interaction
2. Missing focus visibility or keyboard traps
3. Form labeling, errors, and dynamic announcements
4. Dialog, menu, tab, accordion, and custom-control behavior
5. Responsive overflow, zoom issues, and touch/mobile problems
6. Theming, contrast, and dark-mode regressions
7. Motion, animation, and state-transition clarity
8. Visual polish, consistency, and lower-severity UX concerns

## Output Format

Follow the upstream style unless the user asked for another format:

- Group findings by file or component.
- Use `file:line` format when code locations are known.
- Keep findings terse and actionable.
- State the issue and affected element, state, or interaction.
- Add one-line rationale only when the remediation is not obvious.

Example shape:

```text
src/components/Dialog.tsx:88 [high][keyboard] Focus does not move into the dialog on open.
src/components/SaveStatus.tsx:41 [medium][forms] Async save success is visual only; no status message is announced.
src/pages/Settings.tsx:133 [medium][responsive] Button group overflows horizontally at narrow widths.
```

## Examples

### Example 1: Request a targeted component review

```text
Use @web-design-guidelines-v2 to review the checkout form components for semantics, labels, validation, keyboard flow, and mobile layout. Return terse file:line findings grouped by file.
```

### Example 2: Ask for a page-flow audit

```text
Review the account settings page for dialog behavior, tab navigation, form errors, dark mode, reduced motion, and responsive overflow. Call out any issues that should be handed off to performance or localization separately.
```

### Example 3: Inspect origin and import state

```bash
python3 skills/web-design-guidelines-v2/scripts/omni_import_print_origin.py
```

### Example 4: List the bundled support pack

```bash
python3 skills/web-design-guidelines-v2/scripts/omni_import_list_support_pack.py
```

### Example 5: Produce a reusable review packet

```text
Review this PR with @web-design-guidelines-v2. Use the checklist and issue taxonomy, then summarize findings by severity, note any blocked states, and provide handoff recommendations if the work leaves UI-review scope.
```

See also:

- `examples/sample-findings.md`
- `examples/review-report-template.md`
- `examples/component-pattern-map.md`

## Best Practices

### Do

- Prefer native HTML semantics before adding ARIA.
- Review the actual interaction states, not just static markup.
- Check keyboard behavior for every interactive control, especially custom widgets.
- Use `:focus-visible` or equivalent visible focus treatment rather than removing outlines without replacement.
- Verify labels, helper text, errors, and success states for forms.
- Check responsive behavior under narrow widths, long text, zoom, and mobile safe areas.
- Review both default and dark themes when the product supports them.
- Verify that reduced-motion mode still preserves meaning and usability.
- Distinguish ephemeral UI state from state that should be linkable, restorable, or browser-navigable.
- Report findings with enough specificity that an engineer can reproduce and fix them.

### Do not

- Treat ARIA as a first-choice replacement for native elements.
- Accept clickable `div` or `span` controls without keyboard and semantic support.
- Remove browser focus outlines without a clear, visible replacement.
- Rely on placeholder text as the only form label.
- Use color alone to communicate error, success, or required state.
- Assume animation is harmless if important meaning disappears when motion is reduced.
- Ignore dark-mode-only or mobile-only regressions because the default desktop theme looks correct.
- Turn incidental performance, SEO, or security observations into a full review outside this skill's scope.

### High-value checks

- **Semantics:** headings, landmarks, buttons vs links, list semantics, table semantics, native inputs.
- **Keyboard:** tab order, focus entry and return, escape behavior, roving focus only where appropriate, no keyboard traps.
- **Forms:** associated labels, autocomplete tokens, required-state communication, accessible error text, inline validation behavior, async status updates.
- **Dynamic updates:** live regions only where needed, status messaging for save/load/error outcomes.
- **Responsive/mobile:** zoom support, no disabled scaling, no horizontal overflow under long strings, safe-area-aware fixed UI.
- **Theming:** contrast preservation, token consistency, form controls that match theme, icons and borders still visible in dark mode.
- **Motion:** reduced motion support, no drag-only interactions without alternatives, no meaning that depends on animation alone.
- **Navigation/state:** tabs, filters, panels, and route-backed states behave predictably with reload, sharing, and browser navigation.

### Imported operating note

The upstream guideline source remains at `references/guideline.md`. Use the local support files in this skill to execute that guidance more consistently.

## Troubleshooting

### Problem: Focus is missing, inconsistent, or invisible

**Symptoms:** Interactive elements can be tabbed to but there is no visible focus ring, or focus treatment appears only on some controls.

**Solution:** Inspect global resets and component styles for removed outlines. Recommend restoring visible focus, ideally with `:focus-visible`, and verify focus styling across buttons, links, inputs, menus, dialogs, and custom controls.

### Problem: A custom control behaves like a button, tab, or menu but is not keyboard accessible

**Symptoms:** A `div` or non-native element handles clicks but is not focusable, does not respond to keyboard activation, or exposes incorrect semantics.

**Solution:** Compare the control against the native HTML equivalent first. If native HTML is sufficient, recommend replacing the custom implementation. If a custom widget is required, review against the appropriate ARIA APG pattern and verify keyboard behavior, state attributes, and focus management.

### Problem: Dialog or modal behavior is confusing or inaccessible

**Symptoms:** Focus stays behind the dialog, escape does not work when expected, focus does not move into the dialog on open, or focus is lost on close.

**Solution:** Inspect open, close, initial focus, focus trap, and focus return behavior. Prefer native `<dialog>` or a well-tested accessible dialog pattern when possible. Report the specific broken state rather than only saying the modal is inaccessible.

### Problem: Form errors or async status changes are not communicated accessibly

**Symptoms:** Errors are shown only by color, helper text disappears on error, invalid state is not associated with explanatory text, or save/loading status is visual only.

**Solution:** Check label association, `aria-invalid` usage, descriptive error text, and whether async status or validation updates need a live region or status message. Prefer clear text and native validation behavior where appropriate.

### Problem: Layout works on desktop but breaks on narrow screens or zoom

**Symptoms:** Horizontal overflow appears, fixed controls overlap content, tables or button groups spill out of containers, or content becomes obscured near notches or virtual keyboards.

**Solution:** Inspect long strings, minimum widths, fixed positioning, safe-area handling, and container overflow rules. Recommend resilient wrapping, responsive image sizing, safer fixed-position behavior, and mobile-safe spacing rather than brittle breakpoint-only fixes.

### Problem: Dark mode or theming has contrast or asset regressions

**Symptoms:** Borders disappear, icons become invisible, form controls clash with theme colors, or only one theme was tested.

**Solution:** Review theme tokens, hard-coded colors, `color-scheme` usage where relevant, and theme-specific assets. Report theme-specific findings explicitly so they are not mistaken for global issues.

### Problem: Reduced-motion mode removes context or leaves abrupt UI changes

**Symptoms:** Important transitions disappear without a replacement cue, content feels broken when motion is reduced, or drag/gesture interactions have no alternative path.

**Solution:** Check whether meaning depends on motion. Recommend reduced-motion-safe transitions, non-animated state cues, and pointer-independent alternatives where interaction otherwise depends on dragging or gesture behavior.

### Problem: The review is drifting into another specialty

**Symptoms:** Most findings are about layout shift metrics, crawlability, translation quality, runtime exceptions, or security boundaries rather than interface quality.

**Solution:** Keep the UI findings here, then route the rest using `agents/review-router.md`. Do not stretch this skill into a full performance, SEO, localization, debugging, or security review.

### Packaging and provenance note

If the user needs upstream lineage preserved, keep the import context visible and use:

- `references/omni-import-playbook.md`
- `references/omni-import-source-summary.md`
- `scripts/omni_import_print_origin.py`

## Related Skills

- `@accessibility` - Use when the task becomes a deeper accessibility review or broader standards-based audit beyond this UI-focused pass.
- `@core-web-vitals` - Use when the main issue is performance, layout shift, render delay, or interaction latency rather than interface guidance.
- `@seo` - Use when the request is primarily about metadata, indexing, crawlability, or search optimization.
- `@web-quality-audit` - Use when the user wants a broader site audit spanning multiple quality dimensions.
- `@frontend-debugging` - Use when the main work is reproducing and fixing frontend defects rather than reviewing design and interaction quality.
- `@design-system` - Use when the task becomes primarily about component-library standards, token governance, or system-wide pattern decisions.
- `@localization` or `@i18n` - Use when overflow, copy length, bidi issues, or locale formatting problems become the dominant concern.

## Additional Resources

### Local support pack

- [Primary review checklist](references/web-ui-review-checklist.md)
- [Issue taxonomy and severity guide](references/issue-taxonomy.md)
- [Component review matrix](references/component-review-matrix.md)
- [UI review troubleshooting guide](references/troubleshooting-ui-review.md)
- [Sample findings](examples/sample-findings.md)
- [Review report template](examples/review-report-template.md)
- [Component pattern map](examples/component-pattern-map.md)
- [Review router](agents/review-router.md)

### Import provenance and packaged intake materials

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Primary external standards and guidance

Use these as the highest-confidence references when a finding needs justification:

- WCAG 2.2 overview and quick reference
- WAI-ARIA Authoring Practices Guide
- ARIA in HTML
- MDN guidance on semantic HTML, keyboard accessibility, `:focus-visible`, responsive images, constraint validation, live regions, `prefers-reduced-motion`, `prefers-color-scheme`, `color-scheme`, `env()`, `touch-action`, and viewport behavior

## Examples of Good Review Language

Good:

```text
src/components/Tabs.tsx:57 [high][keyboard] Arrow-key navigation is implemented, but the active tab is not in the tab order after selection.
```

Too vague:

```text
Tabs accessibility seems off.
```

Good:

```text
src/components/ProfileForm.tsx:112 [medium][forms] Phone field has placeholder text but no associated label.
```

Too broad:

```text
Forms need better UX.
```
