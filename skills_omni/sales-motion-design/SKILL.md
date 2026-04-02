---
name: "sales-motion-design"
description: "Sales motion design workflow skill. Use this skill when a user needs to choose or redesign a go-to-market motion such as PLG, hybrid product-led sales, sales-assisted PLG, or sales-led; define activation and time-to-first-value; choose between freemium, free trial, reverse trial, sandbox-first, or demo-first; design product-qualified lead handoffs; or create value-before-purchase experiences. Do not use it for CRM implementation, analytics instrumentation, pricing implementation, outbound copy generation, or software architecture."
version: "0.0.1"
category: "development"
tags:
  - "sales-motion-design"
  - "plg"
  - "product-led-growth"
  - "sales-led"
  - "hybrid-gtm"
  - "free-trial"
  - "freemium"
  - "pql"
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
upstream_skill: "skills/sales-motion-design"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Sales Motion Design

## Overview

This skill helps an operator design, compare, or troubleshoot a sales motion using product, buyer, and value-delivery evidence rather than defaulting to a simplistic PLG-versus-sales-led debate.

It preserves the upstream intent of the imported workflow while reframing it into an operational package for agents. The core jobs are:

- choose the right motion by segment
- define the first value moment and target time-to-first-value (TTFV)
- design value-before-purchase experiences
- decide between freemium, free trial, reverse trial, sandbox-first, or demo-first
- define product-qualified lead (PQL) logic and handoff rules
- add bounded governance for AI-assisted or agent-assisted sales work

Use this skill to produce outputs such as:

- a segment-based motion recommendation
- a motion selection rationale with assumptions and confidence
- an activation and TTFV improvement plan
- a PQL definition and sales-entry policy
- a trial or freemium decision brief
- a value-before-purchase design brief
- a GTM troubleshooting diagnosis for weak activation, poor handoffs, or low conversion

This skill is for GTM design, not implementation.

## When to Use This Skill

Use this skill when the request is primarily about motion design, buyer journey design, conversion architecture, or value delivery before purchase.

### Good fits

- Choosing between self-serve PLG, hybrid product-led sales, sales-assisted PLG, and sales-led
- Designing different motions for SMB, mid-market, and enterprise segments
- Improving activation, onboarding, and time-to-first-value
- Choosing between freemium, free trial, reverse trial, sandbox-first, and demo-first
- Defining PQLs and product-to-sales handoff criteria
- Designing value-before-purchase assets such as interactive demos, sandboxes, audits, templates, workshops, or ROI calculators
- Diagnosing issues such as high signup volume but low activation, healthy activation but weak monetization, or sales entering too early
- Setting safe human-in-the-loop boundaries for AI-assisted research, qualification support, and drafting

### Do not use this skill for

- Building CRM workflows, routing rules, or lifecycle automation
- Instrumenting analytics events or implementing product telemetry
- Writing outbound sequences, cold-email copy, or SDR cadences at scale
- Implementing pricing, packaging, or billing systems
- Software architecture, code review, or technical implementation
- Legal, privacy, or compliance advice

If the task drifts into implementation-heavy work, hand off to a pricing, analytics, outbound, RevOps, or implementation skill.

## Operating Table

| Situation | Start here | Primary output |
| --- | --- | --- |
| Need to choose a motion from scratch | `examples/discovery-questionnaire.md` and `references/motion-selection-matrix.md` | Segment-based motion recommendation with assumptions and tradeoffs |
| Need KPI definitions grounded in activation and TTFV | `references/activation-and-ttfv-scorecard.md` | Value moment, activation event, TTFV target, and diagnostic metric set |
| Need a hybrid motion with product-to-sales handoff | `references/pql-definition-template.md` | PQL definition, thresholds, exclusions, and handoff timing |
| Need to decide freemium vs trial vs reverse trial vs demo-first | `references/trial-vs-freemium-decision-guide.md` | Trial-model recommendation with cost, abuse, and speed-to-value tradeoffs |
| Need a value-before-purchase design | `examples/motion-recommendation-output.md` and `references/trial-vs-freemium-decision-guide.md` | Proof-of-value recommendation and next experiments |
| Need AI-assisted sales boundaries | `references/ai-sales-governance-checklist.md` | Human-review, logging, and prohibited-action guardrails |
| Need an illustrative product-to-sales workflow | `examples/pql-handoff-playbook.md` | Handoff policy and sales action model |
| Need routing or handoff help | `agents/router-notes.md` | Deliberate switch to adjacent skills |
| Need source lineage verification | `scripts/omni_import_print_origin.py` | Imported origin details for audit and provenance |

## Workflow

1. **Clarify the exact decision to make**
   - Determine whether the user needs motion selection, redesign, activation diagnosis, PQL design, trial-model choice, or value-before-purchase design.
   - Refuse or reroute requests that are mainly about implementation.

2. **Run structured discovery**
   - Gather product type, buyer vs user, ACV range, onboarding complexity, integration burden, procurement/security friction, current funnel, team capacity, and main bottleneck.
   - Use `examples/discovery-questionnaire.md`.
   - If information is missing, state assumptions explicitly.

3. **Segment before recommending**
   - Split by customer size, use case, buyer sophistication, deployment complexity, or sales friction.
   - Do not assume one motion fits every segment.

4. **Define the value moment and activation event**
   - Name the first moment where a user gets recognizable value.
   - Define the activation event as observable behavior, not just sign-up or login.
   - Use `references/activation-and-ttfv-scorecard.md`.

5. **Map the path to first value**
   - Identify steps, dependencies, blockers, and dead ends between first touch and value.
   - Estimate target and tolerable-max TTFV.
   - Prioritize ways to reduce setup burden before adding sales touches.

6. **Score candidate motions**
   - Compare self-serve PLG, hybrid/PQL-led, sales-assisted PLG, and sales-led using evidence.
   - Use `references/motion-selection-matrix.md`.
   - Explain why each rejected motion is weaker, not only why the selected motion looks good.

7. **Choose the pre-purchase proof mechanism**
   - Decide what the prospect needs to believe before purchase: “I understand it,” “I can use it,” “it works on my data,” “it saves money,” or “it clears enterprise review.”
   - Match that need to interactive demo, sandbox, audit, template, workshop, ROI calculator, trial, or demo-first path.

8. **Design conversion architecture**
   - For hybrid or sales-assisted motions, define PQL logic, account-level aggregation, exclusions, and what sales should do after handoff.
   - For self-serve motions, define activation milestones, upgrade triggers, and natural monetization moments.
   - For enterprise-led motions, define demo, sandbox, security, and procurement support paths.

9. **Choose trial model and economics**
   - Assess marginal cost, abuse risk, support burden, and whether a prospect can realistically reach value inside the evaluation window.
   - Use `references/trial-vs-freemium-decision-guide.md`.

10. **Add measurement and governance**
    - Define leading indicators, lagging indicators, and confidence notes for any benchmarks.
    - For AI-assisted sales, apply `references/ai-sales-governance-checklist.md` and keep a human approval checkpoint for outbound or qualification decisions.

11. **Deliver a recommendation packet**
    - Include: context summary, assumptions, recommended motion by segment, value-path design, trial/proof recommendation, PQL rules if applicable, KPI scorecard, risks, and next experiments.

## Recommended Output Format

Use this structure when the user wants a full recommendation:

1. **Context summary**
2. **Missing data and assumptions**
3. **Segments considered**
4. **Recommended motion by segment**
5. **Value moment, activation event, and TTFV target**
6. **Trial or proof-of-value recommendation**
7. **PQL and handoff design**
8. **KPIs to monitor**
9. **Top risks and tradeoffs**
10. **Next experiments or decisions**

## Decision Heuristics

These are practitioner heuristics, not universal laws.

### Strong signals toward self-serve or PLG

- Users can reach meaningful value without human setup
- User and buyer are often the same person, or bottom-up adoption is common
- Product can be evaluated quickly
- Marginal cost of free or trial users is manageable
- Upgrade pressure emerges naturally from usage, limits, collaboration, governance, or admin needs

### Strong signals toward hybrid or sales-assisted

- Users can start alone, but purchase expands with team rollout, security review, procurement, or integration help
- Product usage creates reliable buying signals before a rep engages
- Sales can add context, rollout support, packaging help, or enterprise navigation without interrupting activation

### Strong signals toward sales-led

- Multiple stakeholders and formal buying committees are common
- Security, legal, procurement, or implementation planning is required before value is credible
- Product value cannot be demonstrated meaningfully without guided setup, services, or stakeholder alignment

## Examples

### Example 1: Motion recommendation for multiple segments

```text
Use @sales-motion-design to recommend the right motion for our product. We sell workflow software to SMB and enterprise buyers. Include segment-specific motion choices, assumptions, TTFV risks, and whether we should use free trial, demo-first, or hybrid handoff.
```

**Expected output:** A segment-based recommendation rather than one company-wide answer.

### Example 2: Diagnose poor free-to-paid conversion

```text
Use @sales-motion-design to diagnose why our free users are not converting. We have good sign-up volume, but activation is weak after onboarding. Focus on the value moment, TTFV blockers, and whether our free tier or PQL rules are wrong.
```

**Expected output:** A diagnosis centered on activation and monetization mechanics, not vanity metrics.

### Example 3: Design a hybrid PQL motion

```text
Use @sales-motion-design to define a hybrid motion for a developer tool with self-serve adoption and enterprise expansion. Create PQL criteria, exclusions, handoff timing, and what sales should do differently after a PQL fires.
```

**Expected output:** Fit, intent, and usage-based PQL logic with a narrow sales role.

### Example 4: Choose the right value-before-purchase asset

```text
Use @sales-motion-design to decide whether our enterprise analytics product needs an interactive demo, sandbox, ROI calculator, or workshop. Recommend the proof mechanism based on what buyers need to believe before purchase.
```

**Expected output:** A proof-mechanism recommendation, asset type, and rationale.

### Example 5: Review source lineage safely

```bash
python3 skills/sales-motion-design/scripts/omni_import_print_origin.py
```

**Expected output:** Imported repository origin details for review and provenance checks.

## Best Practices

### Do

- Start with discovery before recommending a motion
- Recommend by segment when buyer journeys differ materially
- Treat activation and TTFV as leading indicators, not sign-up volume alone
- Define the value moment in operational terms
- Make PQLs specific, measurable, and tied to a sales action
- Add disqualifiers and exclusions to PQL logic, not only positive triggers
- Match value-before-purchase assets to the proof the buyer actually needs
- Evaluate freemium and trial models against economics, support burden, and abuse risk
- Label metrics as benchmarks, internal targets, or heuristics
- State assumptions, unknowns, and confidence level explicitly
- Keep AI-assisted sales bounded, reviewable, and human-supervised

### Don't

- Choose a motion using price alone
- Assume PLG and sales-led are mutually exclusive across all segments
- Treat sign-ups as success if activation is poor
- Send sales to every active free user without qualification
- Use unsourced benchmark numbers as universal truth
- Recommend autonomous AI outreach or qualification without human review
- Over-collect prospect data or make sensitive inferences without clear business need
- Drift into analytics instrumentation, CRM implementation, or pricing-system execution inside this skill

## Troubleshooting

### Problem: High signup volume but weak activation

**Symptoms:** Many users sign up, but few reach the first value moment.
**What to inspect:** Onboarding friction, empty-state experience, setup requirements, unclear next action, missing templates or sample data.
**Solution:** Re-map TTFV, remove nonessential setup, preload value, and redefine activation around a real value event rather than account creation.

### Problem: Activation is healthy but paid conversion is weak

**Symptoms:** Users experience some value, but few upgrade or buy.
**What to inspect:** Weak upgrade triggers, over-generous free tier, poor packaging, unclear admin or team value, no natural expansion path.
**Solution:** Tighten packaging, create clearer upgrade moments, and ensure paid plans unlock meaningful outcomes rather than arbitrary restrictions.

### Problem: Sales is hurting product-led trust

**Symptoms:** Free or trial users disengage after early rep outreach; PQL volume looks high but response quality drops.
**What to inspect:** Handoff timing, rep entry rules, whether product value was established before contact, and what sales adds beyond the product experience.
**Solution:** Narrow PQL rules, delay outreach until value or buying intent is visible, and require sales to add context such as rollout, procurement, or enterprise help.

### Problem: PQL volume is high but close rate is low

**Symptoms:** Many accounts trigger handoff, but sales reports poor quality and little progression.
**What to inspect:** Whether PQL criteria over-weight noisy activity, ignore fit, or lack exclusion rules.
**Solution:** Redesign PQLs using fit + intent + value signals; add qualification windows, exclusions, and distinct next-step playbooks.

### Problem: Trial ends before users can reach value

**Symptoms:** Trial conversion is low, users ask for extensions, and evaluation stalls during setup.
**What to inspect:** Trial length, setup burden, dependency on data, approvals, procurement, or integration work.
**Solution:** Extend or restructure the evaluation path, consider reverse trial or demo-first, and reduce setup steps before expecting conversion.

### Problem: Free tier attracts users but not buyers

**Symptoms:** Strong acquisition, weak monetization, support burden increases, and expansion is limited.
**What to inspect:** User-versus-buyer mismatch, low-value free personas, marginal cost, abuse patterns, and whether free users create ecosystem value.
**Solution:** Reassess freemium economics, add better qualification paths, or move some segments to trial, reverse trial, or demo-first.

### Problem: Enterprise interest appears, but there is no enterprise path

**Symptoms:** Larger accounts engage with the product, but deals stall on security, procurement, admin controls, or rollout planning.
**What to inspect:** Availability of enterprise packaging, proof assets, security-review support, admin features, and sales ownership.
**Solution:** Add an enterprise path with demo or sandbox support, clarify what sales handles, and separate enterprise conversion from self-serve activation.

### Problem: One motion recommendation fits poorly across segments

**Symptoms:** SMB behavior suggests self-serve, but enterprise deals require demos, procurement, and security reviews.
**What to inspect:** Segment differences in ACV, complexity, stakeholders, compliance, and onboarding needs.
**Solution:** Split the motion by segment. Keep self-serve where it works and add sales assistance or enterprise sales where buyer complexity requires it.

### Problem: AI-assisted sales creates low-quality pipeline or brand risk

**Symptoms:** Generic personalization, poor replies, compliance concerns, or unreliable qualification.
**What to inspect:** Prompt quality, review process, data provenance, ICP precision, approval workflow, and escalation paths.
**Solution:** Restrict AI to research, drafting, prioritization, and support tasks under human review. Measure quality before scale and do not automate beyond approved boundaries.

## Related Skills

- `@ai-pricing` for packaging and pricing strategy once motion assumptions are clear
- `@ai-cold-outreach` for outbound messaging or campaign execution after motion design is complete
- `@ai-sdr` for SDR workflow design after qualification boundaries are defined
- a product analytics or implementation skill for event instrumentation and dashboard execution
- a RevOps or CRM workflow skill for operational routing and pipeline automation

## Additional Resources

- [Motion selection matrix](references/motion-selection-matrix.md)
- [Activation and TTFV scorecard](references/activation-and-ttfv-scorecard.md)
- [PQL definition template](references/pql-definition-template.md)
- [Trial vs freemium decision guide](references/trial-vs-freemium-decision-guide.md)
- [AI sales governance checklist](references/ai-sales-governance-checklist.md)
- [Discovery questionnaire](examples/discovery-questionnaire.md)
- [Motion recommendation output example](examples/motion-recommendation-output.md)
- [PQL handoff playbook example](examples/pql-handoff-playbook.md)
- [Routing notes](agents/router-notes.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

## Imported Reference Notes

The imported material included useful heuristics on motion archetypes, TTFV, hybrid architecture, migration paths, and trial design. Some numeric claims in the upstream copy are directionally useful but should not be treated as universal facts without source validation.

When using imported numeric guidance, label it clearly as one of:

- **benchmark example** from an external source
- **internal target** set by the operator's team
- **practitioner heuristic** that needs validation

For operational use, prefer the local support files in this package over copying raw benchmark tables into recommendations unchanged.
