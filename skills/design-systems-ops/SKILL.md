---
name: design-systems-ops
description: "Design systems operations workflow skill. Use this skill when a user needs token governance, component drift control, release coordination, or code-design system review before shipping UI changes."
version: "0.0.1"
category: design
tags: [design-system, tokens, components, governance, releases, frontend, accessibility]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-28"
date_updated: "2026-03-28"
---

# Design Systems Ops

## Overview

Use this skill when a team needs design-system work treated as an operational system, not just a component list or raw token inventory. It is for token governance, component drift, release coordination, change review, migration sequencing, and the contract between Figma, code, docs, and consuming product teams.

Good output should make design-system change safe to ship. The goal is to reduce ambiguity around ownership, compatibility, rollout, and downstream breakage.

## When to Use This Skill

- Use when tokens, primitives, or shared components are changing across multiple apps.
- Use when the design system feels inconsistent between Figma, docs, and production code.
- Use when a design-system release needs compatibility rules, migration guidance, or rollout sequencing.
- Use when teams keep bypassing shared components because system contracts are unclear.
- Use when a maintainer needs a review packet for token changes, variant churn, or component deprecation.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Token update | token governance | Token impact, naming, fallback behavior, and release notes are explicit |
| Component refresh | compatibility | Visual changes, API shifts, and migration requirements are called out |
| System drift | source-of-truth control | Figma, docs, and code have a clear contract and drift remediation path |
| Multi-app release | rollout sequencing | Consumer impact, adoption path, and version boundaries are visible |
| Deprecation | migration planning | Removal timing, replacement path, and communication are unambiguous |

## Core Concepts

### A Design System Is A Product With Operational Contracts

Treat the design system as a maintained platform. Components, tokens, docs, and implementation guidance must stay in sync or consumer teams lose trust quickly.

### Drift Is A Delivery Problem, Not Just A Visual Problem

When Figma, code, stories, docs, and production diverge, the issue is not only design quality. It becomes a release, compatibility, and ownership problem.

### Token And Component Changes Need Blast-Radius Control

Changing shared primitives without impact review causes slow-moving regressions. Token and component updates need scope review, adoption guidance, and release notes before rollout.

## Workflow

1. Frame the design-system change: affected tokens, primitives, components, consuming apps, and the expected visual or behavioral shift.
2. Identify the source-of-truth boundaries across Figma, code, docs, and release notes. Call out where drift already exists.
3. Review compatibility: public props, variants, semantic token meaning, accessibility impact, and migration risk.
4. Write the rollout packet: owner, consumer impact, migration instructions, deprecations, and release sequencing.
5. Close with the governance decision: what ships now, what is staged, what needs downstream coordination, and what is blocked.

## Examples

### Example 1: Token release review

```text
Use @design-systems-ops to review this token rename and component refresh. I need to know the blast radius, migration steps, and whether this should ship as one release or a phased rollout.
```

**Explanation:** Use this when token or primitive changes affect multiple components or products.

### Example 2: Design system packet renderer

```bash
python3 skills/design-systems-ops/scripts/render_design_system_packet.py \
  "navigation refresh" \
  "tokens,sidebar,topbar,spacing" \
  "figma drift,storybook parity,migration notes"
```

**Explanation:** Use this when you want a structured review packet before system rollout.

### Example 3: Drift remediation review

```text
Use @design-systems-ops to show where our Figma library, docs site, and React components have drifted, and what we should fix first to restore confidence in the system.
```

**Explanation:** Use this when the design system no longer has a trusted source of truth.

## Best Practices

- Treat tokens as semantic contracts, not arbitrary style values.
- Make each design-system release explicit about compatibility, migration, and deprecation scope.
- Prefer additive rollouts before destructive removal when multiple products depend on the system.
- Keep Figma, code, documentation, and examples in sync, or state clearly which one is authoritative.
- Tie system changes to downstream adoption guidance so product teams do not guess at migration order.
- Review accessibility impact for every token or component change, not only for obvious UI rewrites.

## Troubleshooting

### Problem: The design system exists, but product teams still fork components

**Symptoms:** Teams reimplement similar components, patch shared ones locally, or bypass the system during delivery.
**Solution:** Audit where the system contract is unclear. Usually the problem is compatibility uncertainty, missing migration guidance, or trust gaps between docs, Figma, and production code.

### Problem: Token changes keep causing regressions

**Symptoms:** Visual regressions appear downstream after “small” token updates, especially around spacing, color, or typography.
**Solution:** Add token blast-radius review, semantic naming checks, fallback guidance, and clearer release notes before the token ships broadly.

### Problem: The library is documented, but nobody knows what is safe to deprecate

**Symptoms:** Components linger indefinitely, or removals happen without clear consumer readiness.
**Solution:** Add a deprecation packet with owner, replacement path, last-supported version, migration examples, and release timing.

## Related Skills

- `@frontend-design` — Use when the work is still shaping a specific screen or user flow before it becomes system work.
- `@omni-figma` — Use when the design source or token lookup needs Figma-driven inspection.
- `@accessibility-audit` — Use when the main risk is accessibility regression across shared components.
- `@documentation` — Use when system release notes and migration docs are the missing operational layer.

## Additional Resources

- [Design systems ops checklist](references/checklist.md)
- [Token change review](references/token-change-review.md)
- [Component drift worksheet](references/component-drift-worksheet.md)
- [Render a design-system packet](scripts/render_design_system_packet.py)
- [Design-system release brief](examples/design-system-release-brief.md)
