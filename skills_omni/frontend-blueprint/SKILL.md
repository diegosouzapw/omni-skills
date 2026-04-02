---
name: "frontend-blueprint"
description: "Frontend Blueprint workflow skill. Use this skill when a user needs frontend design discovery before implementation: collecting goals, audience, references, design direction, token candidates, layout rules, and review gates so UI code matches the intended visual outcome with high fidelity. Best for websites, landing pages, dashboards, apps, components, redesigns, screenshot-to-UI work, and ambiguous requests like 'make this look better' or 'build me a UI'. Do not use for backend logic, API design, database work, or purely non-visual engineering tasks."
version: "0.0.1"
category: "frontend"
tags:
  - "frontend-blueprint"
  - "frontend"
  - "ui"
  - "design-discovery"
  - "design-tokens"
  - "responsive"
  - "accessibility"
  - "redesign"
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
upstream_skill: "skills/frontend-blueprint"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Frontend Blueprint

## Overview

This skill packages the upstream `frontend-blueprint` workflow from `tech-leads-club/agent-skills` into a reusable Omni Skills format while preserving its original intent: discovery first, implementation second.

Use it when the user wants a UI built, redesigned, or improved, but the visual direction is incomplete, vague, or not yet translated into implementation-ready decisions. The core job is to turn fuzzy frontend requests into an approved design direction, token-ready constraints, an execution plan, and a reviewable handoff before significant code generation begins.

This is not a code-first prompt. It is a frontend discovery and design-alignment workflow for agents that need to reduce rework, improve visual fidelity, and keep accessibility and responsive behavior in scope.

## When to Use This Skill

Use this skill when:

- the user asks to build or redesign a frontend interface such as a page, dashboard, app shell, component, modal, form, email, or landing page
- the request is visually ambiguous, such as "make this look better", "design a page", "build me a UI", or "modernize this component"
- the user provides screenshots, mockups, brand assets, or visual references and wants them translated into code or an execution plan
- the work requires collecting references, typography, spacing, icon style, color direction, layout preferences, or brand constraints before coding
- the output should be broken into atomic UI units with review checkpoints
- the operator needs a durable handoff artifact such as a design-direction summary, token worksheet, or implementation checklist

Do not use this skill when:

- the task is primarily backend, API, database, auth, or infrastructure work
- the request is a narrow implementation bug with no design ambiguity, such as a known CSS fix better handled by a debugging workflow
- the task is purely an accessibility audit or remediation pass without broader UI discovery
- the work is primarily product strategy, UX research, branding strategy, or copywriting rather than frontend design-to-code planning

Minimum rule before implementation:

- Do not generate substantial UI implementation until the user goal, audience, constraints, and at least one concrete visual direction are confirmed.

## Operating Table

| Situation | Start here | Required artifact before coding | Load on demand | Why it matters |
| --- | --- | --- | --- | --- |
| Small component request with decent context | Workflow Phase 1 | Short approved direction | `references/discovery-question-bank.md` | Keeps discovery lightweight and avoids over-processing |
| Full page or feature request | Workflow Phases 1-3 | Approved Design Direction Summary | `references/design-direction-approval-template.md` | Prevents premature code generation |
| Multi-screen app or major redesign | Workflow Phases 1-5 | Approved direction plus execution plan | `references/design-token-worksheet.md`, `references/implementation-review-checklist.md` | Adds structure, token capture, and phased delivery |
| User has no references | Phase 2 fallback path | Confirmed comparison-based direction | `references/discovery-question-bank.md`, `references/frontend-troubleshooting-playbook.md` | Avoids guessing from vague language |
| User provides screenshots only | Phase 2 screenshot interpretation | Summary of what to preserve and change | `examples/design-direction-summary-example.md` | Turns screenshots into explicit decisions |
| Existing design system already exists | Phase 1 constraints intake | Token/system alignment notes | `references/design-token-worksheet.md` | Prevents introducing off-system styling |
| Accessibility-sensitive UI such as forms, dialogs, nav, menus | Review requirements early | Accessibility checks included in direction and review | `references/interactive-patterns-apg-map.md`, `references/implementation-review-checklist.md` | Reduces semantic and keyboard regressions |
| Review or handoff before merge | Final review phase | Review checklist results | `references/implementation-review-checklist.md`, `agents/frontend-blueprint-router.md` | Makes the outcome auditable and routable |

## Workflow

Follow the workflow in order. Scale depth to the size of the task, but do not skip the approval gate before implementation.

```text
BRIEF → REFERENCES → DESIGN DIRECTION → [OPTIONAL PROTOTYPING] → EXECUTION PLAN → ATOMIC BUILD → REVIEW
```

### 1. Brief

**Goal:** Understand what is being built, for whom, and under what constraints.

Ask conversationally. For a tiny component, ask 1-2 targeted questions. For larger work, cover:

- what is being built
- who will use it
- what problem it solves
- target platform and framework
- existing design system or brand constraints
- responsiveness expectations
- deadline, scope, or MVP level
- whether the user wants code, a plan, a design direction, or all three

**Exit criteria:** You can restate the request in one sentence with user goal, audience, and scope.

### 2. Collect References

**Goal:** Establish a visual vocabulary before making design decisions.

Always ask for:

- 2-3 visual references, screenshots, URLs, mockups, or current UI captures
- what the user likes in each reference
- anything they explicitly dislike or want to avoid

Collect when relevant:

- typography preferences
- icon style
- color direction and themes
- imagery style
- density and spacing preferences
- motion preferences
- known responsive contexts such as mobile-first, dashboard, embedded panel, modal, or sidebar usage

If the user cannot provide references:

1. Offer 2-3 contrasting directions.
2. Use recognizable anchors carefully, such as "clean and spacious" versus "dense and data-rich".
3. Ask anti-reference questions: what should this definitely not feel like?
4. Capture the chosen direction in explicit terms before moving on.

**Exit criteria:** At least one concrete visual direction is confirmed.

### 3. Create the Design Direction Summary

**Goal:** Convert raw references into an implementation-ready visual brief.

Use `references/design-direction-approval-template.md` and summarize:

- mood and visual adjectives
- color roles and likely token candidates
- typography choices
- spacing and layout rhythm
- radius, borders, shadows, and surface treatment
- icon approach
- interaction tone and motion guidance
- accessibility-sensitive concerns
- what is copied from references versus intentionally changed

Also produce token candidates using `references/design-token-worksheet.md` for:

- color
- typography
- spacing
- radius
- shadow
- border
- motion

If references conflict, say so and recommend the stronger direction.
If color or typography choices create likely accessibility problems, call that out here.

**Hard gate:** Wait for explicit approval or revision before implementation.

**Exit criteria:** User approves the direction summary.

### 4. Optional Prototyping

**Goal:** Validate direction visually before code when uncertainty is still high.

Use this phase when:

- the user has no mockups
- the project is multi-screen or structurally complex
- visual alignment is still uncertain after Phase 3
- the user explicitly wants to prototype first

If the environment supports a prototyping tool already known to the operator, use it carefully as a visual validation step. If not, stay tool-agnostic and produce screen-level prompts, layout notes, or low-fidelity structural descriptions. Do not invent tool access.

Treat any generated prototype or reference HTML as a reference, not final production code.

**Exit criteria:** Key screens or states are visually aligned enough to plan implementation.

### 5. Build the Execution Plan

**Goal:** Break work into small reviewable units.

Create a dependency-ordered plan such as:

1. token and base-style foundation
2. layout shell
3. primary components
4. secondary states and variants
5. responsive refinements
6. polish and accessibility review

Rules:

- each step should produce something visually reviewable
- build foundations before leaf components
- keep rework localized
- for large work, split into phases such as core structure, enhancements, and polish

**Exit criteria:** The user agrees on build order and scope.

### 6. Atomic Build

**Goal:** Implement one unit at a time.

For each unit:

1. implement against the approved direction and tokens
2. explain notable decisions briefly
3. point out any unresolved tradeoffs
4. ask for confirmation before moving forward when the task is iterative

If the user requests changes, update the current unit before continuing.
Do not accumulate unresolved design drift across steps.

### 7. Review

**Goal:** Check fidelity, responsiveness, semantics, and usability before handoff.

Use `references/implementation-review-checklist.md` and verify:

- the result still matches the approved direction
- token usage is consistent
- semantic HTML is preferred over ARIA-only solutions
- contrast, focus visibility, keyboard access, and target size are acceptable
- layouts work across viewport sizes
- reusable components also work in constrained containers where relevant
- motion respects user preference and remains optional polish
- loading, empty, error, hover, focus, active, and disabled states are covered when relevant

Conclude with:

- what is complete
- what assumptions remain
- recommended next step or handoff

## Scaling by Project Size

### Small

Examples: single component, small visual tweak, one card, one form field group.

- compress Brief and References into 1-2 targeted questions
- create a short direction summary
- skip formal prototyping unless the user is especially uncertain
- implement in one or two atomic passes

### Medium

Examples: page, feature area, dashboard section, modal flow.

- run full Brief, References, and Design Direction phases
- use token capture for major visual choices
- create a 3-6 step execution plan
- review responsive behavior and accessibility before handoff

### Large

Examples: multi-screen app, major redesign, design-system alignment, multi-page marketing site.

- expect multiple rounds of discovery
- require explicit sign-off on design direction
- strongly consider prototyping or screen-level planning before implementation
- create phased execution and token foundation first
- review consistency across screens, states, and containers

## Technical Quality Standards

All implementation generated through this workflow should:

- prefer semantic HTML first; use ARIA only when native semantics are insufficient
- preserve keyboard usability and visible focus states
- consider WCAG-oriented checks for contrast, focus appearance, and target size
- be responsive by default, usually with a mobile-first approach
- use CSS custom properties or the project's equivalent token system for shared design values
- use modern layout techniques such as flexbox, grid, and container queries where they meaningfully improve component resilience
- avoid hard-coded visual values when approved token values exist
- account for embedded contexts such as cards, sidebars, drawers, and modals, not just full-page layouts
- treat animation as optional polish and respect reduced-motion preferences
- use the requested framework or ask before choosing one
- avoid inline styles unless there is a strong local reason

## Examples

### Example 1: Clear visual request

**User says:**

```text
Build a pricing page. I like Stripe's pricing layout, but I want a darker brand feel. Use our colors #1a1a2e and #e94560.
```

**Agent response pattern:**

1. Ask only for missing details: number of tiers, FAQ, audience, and anything they dislike about Stripe.
2. Summarize direction with token candidates.
3. Get approval.
4. Build plan: pricing toggle, tier cards, comparison section, CTA.
5. Implement one block at a time.

### Example 2: Vague request with no references

**User says:**

```text
I need a dashboard.
```

**Agent response pattern:**

1. Clarify dashboard type, audience, and key metrics.
2. Ask for references.
3. If none exist, offer contrasting directions.
4. Capture approved direction in the template.
5. Build only after approval.

### Example 3: Screenshot-led redesign

**User says:**

```text
This modal feels outdated. Make it better.
```

**Agent response pattern:**

1. Analyze the screenshot for spacing, hierarchy, contrast, density, and interaction issues.
2. Ask for surrounding constraints such as brand and component library.
3. Summarize keep/change decisions.
4. Produce a revised direction and token adjustments.
5. Implement and review focus, keyboard behavior, and narrow-container behavior.

### Example 4: Design-direction artifact before code

Use the local example as a model:

- [Design direction summary example](examples/design-direction-summary-example.md)
- [Tokenized handoff example](examples/tokenized-handoff-example.json)

## Best Practices

### Do

- Do scale discovery to the size of the task.
- Do insist on at least one concrete visual direction before substantial implementation.
- Do translate approved decisions into tokens or token-like primitives.
- Do prefer semantic HTML before adding ARIA.
- Do review components at multiple viewport sizes and, when relevant, inside constrained containers.
- Do name tradeoffs when the user requests visually risky patterns.
- Do challenge vague adjectives such as "modern" or "clean" with concrete comparisons.
- Do capture what to preserve, what to change, and why.
- Do treat motion as optional polish and account for reduced-motion preferences.
- Do keep implementation atomic so corrections stay localized.

### Don't

- Don't generate a full interface immediately from a vague request.
- Don't rely on abstract taste words without examples or explicit interpretation.
- Don't hard-code colors, spacing, or typography repeatedly when shared tokens are appropriate.
- Don't use ARIA as a substitute for proper native elements.
- Don't validate only at full width if the component may appear in cards, sidebars, or modals.
- Don't add animation by default just to make something feel "premium".
- Don't continue into later steps when the design direction is still disputed.

## Troubleshooting

### Problem: The user cannot provide references

**Symptoms:** The user says they do not know what they want, cannot share examples, or keeps using vague adjectives.

**Solution:** Use contrast-based questions from `references/discovery-question-bank.md`. Offer 2-3 clearly different directions, ask what they dislike, and record the winning direction before writing code.

### Problem: The generated UI does not match the approved direction

**Symptoms:** The implementation feels close but not faithful; spacing, type, color, or component tone drift from the agreed plan.

**Solution:** Compare the implementation against the approved direction and `references/design-token-worksheet.md` before editing code. Fix token drift first, then component-level details.

### Problem: The redesign looks better visually but fails accessibility

**Symptoms:** Contrast dropped, focus states disappeared, target areas are too small, keyboard flow broke, or dialogs and menus no longer behave correctly.

**Solution:** Run the checks in `references/implementation-review-checklist.md`. Prefer semantic elements first, then validate any interactive pattern against `references/interactive-patterns-apg-map.md`.

### Problem: The component works on desktop but breaks on mobile or in small containers

**Symptoms:** Overflow, clipped actions, cramped text, broken card layouts, or components that only look correct full-width.

**Solution:** Re-test at multiple viewport widths and in constrained parent containers. Simplify layout assumptions, use more resilient spacing rules, and consider container queries when the component is reused in different contexts.

### Problem: Interactive components look correct but behave incorrectly

**Symptoms:** Menus, tabs, accordions, dialogs, and comboboxes appear polished but have broken semantics, focus management, or keyboard support.

**Solution:** Check the relevant pattern in `references/interactive-patterns-apg-map.md`, confirm native-first structure, then repair behavior before making further visual changes.

### Problem: Discovery is taking too long for a tiny request

**Symptoms:** The user only needed a small tweak, but the workflow is becoming heavyweight.

**Solution:** Collapse Brief and References into 1-2 targeted questions, produce a short direction summary, and continue. Preserve the approval gate, but keep artifacts lightweight.

## Related Skills

Use related-skill routing by category when the task drifts beyond frontend discovery:

- accessibility-focused audit or remediation work
- frontend debugging for implementation defects with already-set design direction
- design-system or token-governance work
- UI review or QA-style validation before merge
- frontend performance optimization after visual alignment is complete
- product or UX research when the core problem is user discovery rather than interface implementation

See `agents/frontend-blueprint-router.md` for handoff guidance.

## Additional Resources

Load these files on demand rather than all at once:

- [Discovery question bank](references/discovery-question-bank.md)
- [Design direction approval template](references/design-direction-approval-template.md)
- [Design token worksheet](references/design-token-worksheet.md)
- [Implementation review checklist](references/implementation-review-checklist.md)
- [Interactive patterns APG map](references/interactive-patterns-apg-map.md)
- [Frontend troubleshooting playbook](references/frontend-troubleshooting-playbook.md)
- [Design direction summary example](examples/design-direction-summary-example.md)
- [Tokenized handoff example](examples/tokenized-handoff-example.json)
- [Router guidance](agents/frontend-blueprint-router.md)

## Provenance Notes

This enhanced version preserves the upstream skill identity and original discovery-first intent while making the workflow more explicit for Omni Skills usage. Upstream concepts retained here include:

- discovery before code
- mandatory references or explicit design direction
- optional prototyping before implementation
- atomic build steps
- review and polish before handoff

Where the upstream copy referenced specific imported packaging assets or editorial intake machinery, this version replaces that with operator-focused frontend workflow assets so the skill remains directly usable for real UI work.
