---
name: "design-systems-ops"
description: "Design systems operations workflow skill. Use this skill when a user needs token governance, component drift control, release coordination, or code-design system review before shipping UI changes."
version: "0.0.1"
category: "design"
tags:
  - "design-system"
  - "tokens"
  - "components"
  - "governance"
  - "releases"
  - "frontend"
  - "accessibility"
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
upstream_skill: "skills/design-systems-ops"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Design Systems Ops

## Overview

Use this skill when a team needs design-system work treated as an operational system, not just a component list or raw token inventory. It is for token governance, component drift control, release coordination, migration sequencing, and the contract between design source, code, docs, stories, and consuming product teams.

Good output should make design-system change safe to ship. The goal is to reduce ambiguity around ownership, compatibility, rollout order, accessibility risk, and downstream breakage.

## When to Use This Skill

- Use when tokens, primitives, or shared components are changing across multiple apps or packages.
- Use when the system feels inconsistent between Figma, Storybook, docs, and production code.
- Use when a release needs compatibility rules, migration guidance, or staged rollout sequencing.
- Use when teams keep bypassing shared components because the system contract is unclear or untrusted.
- Use when a maintainer needs a review packet for token changes, variant churn, component deprecation, or release readiness.
- Use when a UI change appears small but may affect themes, accessibility states, semantic tokens, or multiple consumers.

## Operating Table

| Situation | Primary focus | Authority to verify | Accessibility review required? | What good output looks like |
| :-------- | :------------ | :------------------ | :----------------------------- | :-------------------------- |
| Token update | token governance | token package, design variables, docs | Yes if color, type, spacing, focus, or state tokens change | Token layer, alias impact, fallback behavior, and release notes are explicit |
| Token mode or theme change | mode safety | variable collections/modes, semantic token mapping, implementation fallback | Yes | Theme coverage, mode parity, fallback plan, and rollout guardrails are visible |
| Component refresh | compatibility | component API, stories, design spec, docs | Yes for interactive or semantic changes | Visual changes, API shifts, behavior changes, and migration requirements are called out |
| System drift | source-of-truth control | design source, stories, code, docs, production usage | Usually | A clear authority decision, drift inventory, owner, and fix order are documented |
| Multi-app release | rollout sequencing | release notes, consumers, package versions | Depends on change class | Consumer impact, adoption path, version boundaries, and exceptions are visible |
| Deprecation | migration planning | replacement component, last supported version, docs | Yes if replacement changes behavior | Removal timing, replacement path, migration owner, and communication are unambiguous |

## Core Concepts

### A Design System Is A Product With Operational Contracts

Treat the design system as a maintained platform. Components, tokens, documentation, examples, and implementation guidance must stay aligned or consumer teams will stop trusting the system.

### Source Of Truth Must Be Defined By Layer

Do not assume one tool is authoritative for everything. Many teams use design files for intent, token files or code packages for shipping truth, stories for executable review surfaces, and docs for consumer guidance. State authority explicitly for each layer before reviewing drift or approving changes.

See [Source of truth matrix](references/source-of-truth-matrix.md).

### Drift Is A Delivery Problem, Not Just A Visual Problem

When design, code, stories, docs, and production diverge, the issue is not only design quality. It becomes a release, compatibility, ownership, and consumer-trust problem.

### Tokens Are Contracts, Not Paint Swatches

Govern tokens as typed, named, semantic contracts. Distinguish base or raw values from semantic tokens, aliases, and modes. A small alias change can create a large blast radius across themes and component states.

See [Token taxonomy: semantic vs base](references/token-taxonomy-semantic-vs-base.md).

### Accessibility Is Part Of The System Contract

Token changes can break contrast, focus visibility, spacing, and target size. Component changes can break semantics, keyboard behavior, and state announcements. Accessibility review is part of release readiness, not a separate afterthought.

See [Accessibility release gates](references/accessibility-release-gates.md).

## Workflow

1. **Frame the change clearly.**
   - Name the affected tokens, primitives, components, packages, apps, and owners.
   - State whether the change is additive, behavior-changing, or breaking.
   - Record the expected visual, API, semantic, or accessibility impact.

2. **Establish source-of-truth boundaries.**
   - Identify which artifact is authoritative for each layer: design intent, token definition, component API, stories, docs, and release notes.
   - If authority is disputed, stop and document the dispute before proposing rollout.
   - Use the [source-of-truth matrix](references/source-of-truth-matrix.md).

3. **Run a drift audit.**
   - Compare the design source, stories, code implementation, docs examples, and known production behavior.
   - Record where defaults, variants, states, names, or behavior no longer match.
   - Use the [drift audit checklist](references/drift-audit-checklist.md).

4. **Classify token and component impact.**
   - For tokens: identify base vs semantic layer, alias references, theme or mode coverage, and fallback behavior.
   - For components: review API surface, variants, defaults, interactive states, semantics, and downstream usage.
   - Use the [consumer impact matrix](references/consumer-impact-matrix.md).

5. **Review accessibility and quality gates.**
   - Check whether the change affects contrast, focus indicators, keyboard support, semantics, announcements, or target size.
   - Require evidence for interactive state behavior and theme or mode safety when relevant.
   - Use the [accessibility release gates](references/accessibility-release-gates.md).

6. **Decide release class and consumer action.**
   - Map the change to release class, expected version impact, migration burden, and communication need.
   - State whether consumers need no action, optional adoption, scheduled migration, or urgent remediation.
   - Use the [release phase model](references/release-phase-model.md) and [deprecation policy template](references/deprecation-policy-template.md).

7. **Write the rollout packet.**
   - Include owner, authority, affected consumers, evidence, release class, migration steps, deprecations, and decision status.
   - Prefer staged rollout when multiple apps or teams are affected.
   - If evidence is incomplete, ship a blocked or conditional decision instead of implied approval.

8. **Close with the governance decision.**
   - State what ships now, what is staged, what is blocked, and what must be validated post-release.
   - Identify the next owner for migration tracking and consumer communication.

## Output Expectations

A strong deliverable from this skill usually includes:

- change summary
- authority by layer
- drift findings
- affected tokens/components/apps
- compatibility classification
- accessibility status
- evidence reviewed
- release phase or stability status
- migration owner and next actions
- final ship / stage / block recommendation

For a ready-made structure, see [Component change review packet](examples/component-change-review-packet.md), [Token mode change brief](examples/token-mode-change-brief.md), and [Deprecation announcement](examples/deprecation-announcement.md).

## Examples

### Example 1: Token release review

```text
Use @design-systems-ops to review this semantic token rename and button state refresh. I need the blast radius, affected themes, accessibility risk, migration steps, and whether this should ship as one release or a phased rollout.
```

**Expected output:** A packet that identifies token authority, alias impact, affected components, consumer action, and a release recommendation.

### Example 2: Design system packet renderer

```bash
python3 skills/design-systems-ops/scripts/render_design_system_packet.py \
  "navigation refresh" \
  "tokens,sidebar,topbar,spacing" \
  "figma drift,storybook parity,migration notes"
```

**Expected output:** A narrow markdown packet with summary, scope, review areas, open questions, and next actions that can be pasted into docs or a tracking issue.

### Example 3: Drift remediation review

```text
Use @design-systems-ops to compare our Figma library, Storybook stories, docs site examples, and React implementation for the dropdown and modal components. Show where defaults, states, or accessibility behavior have drifted, name the likely source of truth for each mismatch, and tell me what to fix first.
```

**Expected output:** A prioritized drift list with authority decisions, owner suggestions, and remediation order.

### Example 4: Deprecation planning

```text
Use @design-systems-ops to evaluate whether our legacy toast component can move to deprecated status this quarter. Include consumer impact, replacement path, required migration docs, stability label, and recommended deprecation window.
```

**Expected output:** A deprecation decision with replacement guidance, consumer communication needs, and timeline recommendations.

## Best Practices

### Do

- Treat tokens as semantic contracts, not arbitrary style values.
- Define authority by layer instead of assuming Figma, code, or docs are globally authoritative.
- Separate base tokens from semantic tokens and review alias changes carefully.
- Use stories, tests, docs, and implementation together as the executable parity surface.
- Classify changes as additive, behavior-changing, or breaking before deciding release strategy.
- Require accessibility review for token mode changes, state changes, and interactive component updates.
- Prefer staged rollout and clear deprecation windows when multiple consumers depend on the system.
- Produce explicit consumer guidance: what changed, who is affected, what action is required, and by when.

### Don't

- Do not approve a release when source-of-truth ownership is still disputed.
- Do not treat visual parity alone as sufficient when semantics or interaction may have changed.
- Do not rename semantic tokens without checking alias chains, modes, and downstream fallback behavior.
- Do not deprecate shared components without a replacement path and migration owner.
- Do not assume documentation is trustworthy if stories or production behavior disagree.
- Do not frame accessibility as only a color-contrast check.

## Troubleshooting

### Problem: The design system exists, but product teams still fork components

**Symptoms:** Teams reimplement similar components, patch shared ones locally, or bypass the system during delivery.

**Solution:** Audit where the system contract is unclear. Common causes are unstable APIs, missing migration guidance, weak stories/docs parity, or trust gaps between design source and production behavior. Produce a packet that names the authoritative artifact and the consumer-safe path forward.

### Problem: Token changes keep causing regressions

**Symptoms:** Visual regressions appear downstream after small token updates, especially around spacing, color, typography, or state styling.

**Solution:** Review token layer, semantic meaning, aliases, affected modes, and fallback behavior before release. If a semantic token meaning changed, classify it as higher risk than a raw value correction. Require release notes and consumer impact review.

### Problem: Dark mode or theme behavior broke after a token alias change

**Symptoms:** One mode looks correct while another mode regresses, or components resolve different colors than expected across themes.

**Solution:** Trace the alias chain and verify mode coverage at each layer. Confirm whether the source of truth is the design variable set, token file, or implementation mapping. Add a fallback plan and avoid broad rollout until all supported modes resolve correctly.

### Problem: Storybook and production disagree on component states or defaults

**Symptoms:** Stories show one set of variants, props, or behaviors, but production apps render different defaults or unsupported states.

**Solution:** Treat this as drift, not just doc debt. Compare stories, package API, docs examples, and production usage. Decide which artifact is authoritative, then update the others in that order. If production has consumer-specific overrides, document them explicitly instead of implying system support.

### Problem: A token update passes visual review but fails accessibility

**Symptoms:** Contrast drops, focus rings are harder to see, disabled and selected states blur together, or touch targets become harder to use.

**Solution:** Apply the accessibility release gates. Review contrast, focus visibility, target size, state distinction, and interactive affordance. Block or stage release until evidence supports the updated contract.

### Problem: The library is documented, but nobody knows what is safe to deprecate

**Symptoms:** Components linger indefinitely, or removals happen without clear consumer readiness.

**Solution:** Add a deprecation packet with replacement path, last supported version or date, migration owner, consumer notices, and exception handling. Use a visible stability or release phase label so consumers know whether adoption is recommended, limited, or sunset.

## Related Skills

| Skill | Use it when | Handoff boundary |
| :---- | :---------- | :--------------- |
| `@omni-figma` | You need design-source inspection, variable lookup, or component intent from Figma | Switch back after design authority and variable mapping are established |
| `@frontend-design` | The work is still shaping a specific screen or user flow before it becomes shared-system policy | Return here once the change affects reusable tokens or components |
| `@accessibility-audit` | The main risk is keyboard, semantic, ARIA, focus, or contrast regression | Use this skill for final validation details if system release gates fail |
| `@documentation` | The missing work is release notes, migration docs, deprecation notices, or consumer comms | Return here to keep compatibility and rollout decisions aligned |

## Additional Resources

- [Design systems ops checklist](references/checklist.md)
- [Token change review](references/token-change-review.md)
- [Component drift worksheet](references/component-drift-worksheet.md)
- [Source of truth matrix](references/source-of-truth-matrix.md)
- [Token taxonomy: semantic vs base](references/token-taxonomy-semantic-vs-base.md)
- [Drift audit checklist](references/drift-audit-checklist.md)
- [Release phase model](references/release-phase-model.md)
- [Deprecation policy template](references/deprecation-policy-template.md)
- [Accessibility release gates](references/accessibility-release-gates.md)
- [Consumer impact matrix](references/consumer-impact-matrix.md)
- [Render a design-system packet](scripts/render_design_system_packet.py)
- [Design-system release brief](examples/design-system-release-brief.md)
- [Component change review packet](examples/component-change-review-packet.md)
- [Deprecation announcement](examples/deprecation-announcement.md)
- [Token mode change brief](examples/token-mode-change-brief.md)
