---
name: "create-rfc"
description: "RFC Creator workflow skill. Use this skill when a user needs a structured Request for Comments (RFC) to propose, compare, review, and decide on a significant technical, product, process, policy, or vendor change before implementation. Do not use it for implementation-only design docs, READMEs, or general documentation; route implementation planning to technical-design-doc-creator once the direction is chosen."
version: "0.0.1"
category: "documentation"
tags:
  - "create-rfc"
  - "rfc"
  - "proposal"
  - "decision-making"
  - "stakeholder-alignment"
  - "architecture"
  - "process-change"
  - "vendor-selection"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
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
upstream_skill: "skills/create-rfc"
upstream_author: "Tech Leads Club - github.com/tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# RFC Creator

## Overview

Use this skill to draft, refine, and maintain an RFC when the team needs alignment on an important change **before** implementation is locked in.

An RFC is a proposal-and-decision document. It should explain the problem, establish decision criteria, compare credible options, document tradeoffs, capture stakeholder review, and record the eventual outcome. This skill is intentionally stronger on decision quality than on implementation detail.

This skill preserves the intent of the imported upstream workflow from `packages/skills-catalog/skills/(creation)/create-rfc` in `https://github.com/tech-leads-club/agent-skills.git`, while packaging it into an English, validator-friendly workflow kit with reusable templates, routing guidance, examples, and review assets.

## When to Use This Skill

Use this skill when:

- the user says "write an RFC", "draft a proposal", "create a change proposal", or "I need stakeholder alignment"
- the decision is still open and multiple options should be evaluated
- the change affects multiple people, teams, systems, customers, budgets, or policies
- the team needs a written rationale before committing to a direction
- the user needs a documented recommendation, approval path, or review window
- the proposal needs explicit assumptions, risks, success metrics, and follow-up actions

Do **not** use this skill when:

- the direction is already approved and the remaining question is **how to build it**
- the user needs a TDD, implementation plan, or delivery design
- the user only wants a README, policy note, meeting summary, or general documentation
- the change is too small and reversible to justify RFC overhead

Use the routing guide in [references/rfc-vs-tdd-vs-adr.md](references/rfc-vs-tdd-vs-adr.md) when the boundary is unclear.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Unsure whether this should be an RFC | `references/rfc-vs-tdd-vs-adr.md` | Prevents writing the wrong artifact |
| Missing context or inputs | `references/rfc-intake-questionnaire.md` | Helps gather only the information needed |
| Drafting a new RFC | `references/rfc-template.md` | Provides a stable structure and metadata |
| Comparing options fairly | `references/decision-matrix-template.md` | Makes criteria and weighting explicit |
| Reviewing for approval | `references/rfc-review-checklist.md` | Catches weak evidence, fake alternatives, and missing owners |
| Managing state after review | `references/rfc-lifecycle-and-status.md` | Prevents stale or ambiguous RFC status |
| Routing to another workflow | `agents/rfc-router.md` | Handles RFC vs TDD vs ADR drift safely |

## Workflow

1. **Confirm the document type before drafting**  
   Ask: is the decision still open? If yes, continue with an RFC. If the decision is already made, route to a TDD or ADR as appropriate.

2. **Assess impact and scope**  
   Determine whether the proposed change is high, medium, or low impact. Scale the RFC depth accordingly. High-impact RFCs need stronger evidence, broader stakeholder review, clearer rollout considerations, and explicit risks.

3. **Gather missing context**  
   If the user did not provide enough information, ask concise follow-up questions using [references/rfc-intake-questionnaire.md](references/rfc-intake-questionnaire.md). Ask in the user's language when interacting with them, but produce repository files in English unless the user explicitly needs another output language outside this repository workflow.

4. **Validate mandatory inputs**  
   Before drafting, confirm these are present or intentionally marked unknown:
   - title
   - problem statement and current state
   - driver/owner
   - approvers or decision-makers
   - affected stakeholders
   - impact level
   - assumptions
   - decision criteria defined **before** options
   - at least two credible options, including status quo when relevant
   - recommendation or open decision state

5. **Identify RFC type and tailor emphasis**  
   Use a structure that matches the decision:
   - technical / architecture
   - process / workflow
   - product / feature
   - vendor / tool selection
   - policy / compliance

6. **Draft metadata first**  
   Include explicit lifecycle fields such as:
   - Status
   - Owner / Driver
   - Reviewers / Approvers
   - Created
   - Last Updated
   - Target Decision Date
   - Impact
   - Related Docs / Issues
   - Supersedes / Superseded By, if applicable

7. **Write the context and problem statement**  
   Explain the current state, why the decision matters now, constraints, cost of inaction, and who is affected. Prefer specific evidence over generic claims.

8. **Record assumptions, evidence, and constraints**  
   For each important assumption, include confidence and an invalidation trigger when possible. Capture data, prior incidents, user research, cost signals, regulatory requirements, or operational constraints if available.

9. **Define decision criteria before listing options**  
   State weighted criteria first. If helpful, use [references/decision-matrix-template.md](references/decision-matrix-template.md). Make must-haves explicit.

10. **Evaluate options honestly**  
    Document at least two credible options. Include the status quo for significant changes. For each option, capture benefits, drawbacks, cost/effort, risks, dependencies, and consequences.

11. **Make or frame the recommendation**  
    If the user wants a recommendation, tie it directly to the decision criteria, tradeoffs, and evidence. If the decision is still open, clearly say so and present the RFC as a review draft rather than a final choice.

12. **Add implementation-adjacent details without turning the RFC into a TDD**  
    Include rollout shape, migration considerations, rollback expectations, and follow-up actions only at the level needed for decision quality. Do not let the document drift into build-level design.

13. **Prepare the review packet**  
    Add reviewers, review window, open questions, and linked artifacts. For repository workflows, a pull request description similar to [examples/example-rfc-pr-description.md](examples/example-rfc-pr-description.md) works well.

14. **Review the draft against the checklist**  
    Use [references/rfc-review-checklist.md](references/rfc-review-checklist.md) before handoff.

15. **Record the outcome and maintain status**  
    After review, update status to Approved, Rejected, Withdrawn, Implemented, or Superseded as appropriate. Never leave a decided RFC in an ambiguous draft state.

## Required Structure

A strong RFC usually contains these sections:

1. Header and metadata
2. Summary
3. Background / context
4. Problem statement
5. Goals and non-goals
6. Stakeholders
7. Assumptions
8. Constraints
9. Decision criteria
10. Options considered
11. Recommendation or decision state
12. Risks and mitigations
13. Success metrics
14. Rollout / migration / rollback considerations
15. Open questions
16. Action items and follow-ups
17. Outcome / final decision record
18. References

Use the canonical template in [references/rfc-template.md](references/rfc-template.md).

## Examples

### Example 1: Minimal intake prompt

```text
Use @create-rfc to draft an RFC for changing our deployment platform. First determine whether this is actually an RFC or a TDD. If it is an RFC, collect any missing context, define decision criteria before options, include the status quo as an option, and produce a review-ready draft.
```

### Example 2: Technical RFC

See [examples/example-technical-rfc.md](examples/example-technical-rfc.md).

Typical shape:

```text
Topic: Move background jobs from a single VM to a managed container platform
Need: Compare reliability, cost, migration risk, and operational burden
Decision date: end of month
Stakeholders: platform, backend, security, finance
```

### Example 3: Process RFC

See [examples/example-process-rfc.md](examples/example-process-rfc.md).

Use this when proposing changes such as incident review workflow, release approvals, or on-call policy.

### Example 4: Vendor selection RFC

See [examples/example-vendor-selection-rfc.md](examples/example-vendor-selection-rfc.md).

Use this when the decision depends on weighted criteria such as cost, lock-in, security posture, support model, and migration effort.

### Example 5: RFC review in a PR-style workflow

```text
Review this RFC using the review checklist. Identify unsupported claims, missing stakeholders, vague success criteria, weak alternatives, stale status fields, and follow-up actions that should be moved to a TDD.
```

## Best Practices

### Do

- define the decision problem before proposing solutions
- state criteria before listing options
- include the current state or do-nothing option for significant changes
- distinguish facts, assumptions, and preferences
- record assumptions with confidence and, when possible, invalidation triggers
- include measurable success criteria and a review checkpoint
- identify owner, approvers, affected teams, and informed parties
- keep the RFC broad enough for decision-making and narrow enough to review
- mark lifecycle status explicitly and keep it updated
- explain why rejected options were rejected
- use plain language and define overloaded terms or acronyms
- link implementation docs, issues, milestones, or rollback plans instead of embedding too much delivery detail

### Don't

- write an RFC that is just advocacy for a predetermined conclusion
- hide the absence of evidence with confident prose
- present only one real option
- define criteria after you already chose the recommendation
- confuse an RFC with a final ADR or an implementation TDD
- leave stale RFCs in Draft or In Review forever
- use uppercase MUST/SHOULD/MAY unless the document intentionally uses normative requirements language
- pad the RFC with build details that belong in an implementation document

## Troubleshooting

### Problem: The user described implementation details, not a decision problem

**Symptoms:** The draft is full of architecture diagrams, API details, schema changes, or rollout tasks, but there is little discussion of whether the change should happen or which option is best.  
**Solution:** Pause and ask whether the direction is already chosen. If yes, route to a TDD. Keep only decision-relevant details in the RFC.

### Problem: There is only one real option

**Symptoms:** The RFC presents one preferred option and a fake alternative such as "do nothing" with no serious analysis.  
**Solution:** Add at least one credible competing option and, for significant changes, include the status quo. If no credible alternatives exist, explain that openly and consider whether this should be an ADR or implementation doc instead.

### Problem: Decision criteria are vague or appear after the options

**Symptoms:** Reviewers say the recommendation feels biased, subjective, or reverse-engineered.  
**Solution:** Rewrite the RFC so criteria and weights appear before options. Use the decision matrix template if needed.

### Problem: The RFC lacks evidence

**Symptoms:** Claims such as "this will improve reliability" or "users want this" are not backed by incidents, metrics, research, or concrete observations.  
**Solution:** Add available evidence, clearly label assumptions, and downgrade certainty where evidence is weak.

### Problem: Stakeholders or approvers are unclear

**Symptoms:** No one knows who can decide, who is affected, or who must review before approval.  
**Solution:** Add a stakeholder section naming driver, approvers, contributors, and informed parties before finalizing the recommendation.

### Problem: Success criteria are missing

**Symptoms:** The RFC recommends a change but gives no measurable way to judge whether it worked.  
**Solution:** Add a short success metrics section with 1-3 observable outcomes, target measures, and a review date.

### Problem: The RFC became stale

**Symptoms:** The draft is old, the decision date passed, comments are unresolved, or the chosen path changed elsewhere.  
**Solution:** Update status explicitly. Mark the RFC Rejected, Withdrawn, Implemented, or Superseded instead of leaving ambiguity. Use [references/rfc-lifecycle-and-status.md](references/rfc-lifecycle-and-status.md).

## Related Skills

- `@technical-design-doc-creator` - use when the direction is already chosen and the user needs implementation design
- ADR or architecture decision workflows - use when the team needs a short permanent decision record after the choice is made
- security or compliance review skills - use when the RFC introduces sensitive controls, regulated requirements, or high-risk operational changes

## Additional Resources

- [RFC vs TDD vs ADR routing guide](references/rfc-vs-tdd-vs-adr.md)
- [RFC intake questionnaire](references/rfc-intake-questionnaire.md)
- [RFC template](references/rfc-template.md)
- [RFC review checklist](references/rfc-review-checklist.md)
- [Decision matrix template](references/decision-matrix-template.md)
- [RFC lifecycle and status guide](references/rfc-lifecycle-and-status.md)
- [Technical RFC example](examples/example-technical-rfc.md)
- [Process RFC example](examples/example-process-rfc.md)
- [Vendor selection RFC example](examples/example-vendor-selection-rfc.md)
- [Example RFC PR description](examples/example-rfc-pr-description.md)
- [RFC router](agents/rfc-router.md)

## Provenance Notes

This enhanced skill preserves the upstream intent: RFCs are for proposals and decisions, not implementation details; strong RFCs require honest alternatives, explicit assumptions, and clear next steps. The support pack expands that intent into reusable operational assets for intake, review, lifecycle management, and routing without claiming IETF standards-track behavior for internal company documents.
