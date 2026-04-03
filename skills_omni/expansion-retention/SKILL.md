---
name: "expansion-retention"
description: "Expansion & Retention Systems workflow skill. Use this skill when the user needs a strategy and operating plan to reduce churn, improve gross retention, increase expansion revenue, automate customer-success motions, or improve net revenue retention. Also use when the user mentions churn, retention, renewals, expansion revenue, upsells, cross-sell, NRR, GRR, health scores, usage-based expansion, product-qualified accounts, onboarding, or closed-lost re-engagement. Do not use this skill for CRM implementation, analytics instrumentation, code review, software architecture, or legal interpretation."
version: "0.0.1"
category: "development"
tags:
  - "expansion-retention"
  - "churn"
  - "retention"
  - "renewal"
  - "nrr"
  - "grr"
  - "customer-success"
  - "upsell"
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
upstream_skill: "skills/expansion-retention"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Expansion & Retention Systems

## Overview

Use this skill to design or improve post-sale systems that protect gross retention and create predictable expansion revenue. It is for strategic and operational work such as churn diagnosis, health-score design, onboarding and activation systems, expansion trigger design, renewal management, involuntary churn reduction, and closed-lost re-engagement.

This skill preserves the intent of the upstream GTM workflow while curating it into a safer, more operational package for agents. It is deliberately **strategy and operations focused**. If the request turns into CRM workflow implementation, analytics event design, billing-system configuration, application code, or legal review, hand off to a more specialized skill.

Use the local support pack to keep decisions explicit, segment-aware, and reviewable:

- metric definitions and decision boundaries
- cohort diagnosis workflow
- health-score governance and calibration
- lifecycle operating cadence by stage and owner
- usage-threshold trigger guardrails
- privacy-safe customer data handling guidance
- renewal, dunning, and account-review templates
- routing guidance for adjacent skills

## When to Use This Skill

Use this skill when the user needs one or more of the following:

- reduce churn or contraction in an existing customer base
- improve gross revenue retention before scaling expansion motions
- design customer health scores, risk triggers, or save-play workflows
- build onboarding systems tied to activation milestones and time-to-first-value
- design expansion triggers for usage, seats, modules, or multi-product adoption
- improve renewal forecasting, renewal execution, or renewal-risk reviews
- reduce involuntary churn caused by payment failures, procurement delays, or billing confusion
- re-engage closed-lost opportunities with a structured win-back program
- decide whether a tech-touch, no-touch, medium-touch, or high-touch CS model fits a segment

Do **not** use this skill when the main need is:

- CRM automation build-out or API implementation
- product analytics instrumentation or event-taxonomy design
- pricing model redesign in depth
- legal/compliance advice beyond high-level operational guardrails
- copywriting full lifecycle campaigns from scratch

## Core Metrics and Definitions

Ground the work in a small shared metric language before recommending plays.

- **GRR (Gross Revenue Retention):** retained recurring revenue from an existing cohort excluding expansion.
- **NRR (Net Revenue Retention):** retained recurring revenue from an existing cohort including expansion, minus contraction and churn.
- **Logo retention:** percentage of customers retained, regardless of revenue change.
- **Expansion:** added revenue from the same customer base through seats, usage, add-ons, modules, or cross-sell.
- **Contraction:** revenue loss from downgrades, lower usage, reduced seats, or partial product removal.
- **Voluntary churn:** customer chooses to leave.
- **Involuntary churn:** customer is lost because of payment failures, billing issues, procurement delay, or avoidable operational friction.
- **Activation:** the earliest measurable milestone that proves the customer reached initial product value.
- **Time to first value (TTFV):** elapsed time from start to first meaningful value event.

Use the glossary in [references/retention-metrics-glossary.md](references/retention-metrics-glossary.md) when definitions are disputed.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| No trustworthy baseline metrics | `references/retention-metrics-glossary.md` | Prevents strategy built on inconsistent NRR/GRR/churn definitions |
| Churn is rising but cause is unclear | `references/cohort-diagnosis-playbook.md` | Forces cohort and segment diagnosis before prescribing fixes |
| Health score exists but nobody trusts it | `references/health-score-design-guide.md` | Rebuilds ownership, signal quality, calibration, and action mapping |
| Early-life churn in first 30-90 days | `examples/account-review-template.md` | Connects onboarding, activation, and milestone failure to account review |
| Expansion in usage-based pricing | `references/usage-billing-retention-guardrails.md` | Adds spend transparency and anti-bill-shock guardrails |
| Healthy accounts still churn due to payment issues | `references/lifecycle-operating-cadence.md` | Separates involuntary churn from product-fit churn |
| Renewal risk review needed | `examples/renewal-and-expansion-plan.md` | Standardizes renewal and value-proof planning |
| Closed-lost re-engagement needed | `examples/closed-lost-reengagement-sequences.md` | Gives segment-aware, reason-aware win-back patterns |
| Customer-level data handling is sensitive | `references/privacy-and-data-handling.md` | Keeps analysis inside approved privacy boundaries |
| Task drifts into pricing, analytics, revops, or compliance execution | `agents/retention-router.md` | Provides deliberate handoff conditions |

## Workflow

1. **Confirm scope and route correctly.**
   - Verify the user wants retention/expansion strategy or operations, not implementation.
   - If the request is mostly about pricing redesign, analytics instrumentation, CRM build-out, or legal interpretation, hand off early.

2. **Establish a baseline before prescribing action.**
   Ask for or infer:
   - current NRR, GRR, logo retention, and churn trend
   - segmentation by plan, ACV, lifecycle stage, and pricing model
   - whether churn is early-life, renewal-stage, or payment-related
   - available systems: CRM, product analytics, CS platform, billing, support
   - whether the business is self-serve, sales-assisted, or enterprise-led

3. **Check instrumentation and data quality.**
   If baseline metrics are inconsistent or missing:
   - define the metrics first
   - verify the starting cohort and time period are fixed
   - confirm treatment of upgrades, downgrades, pauses, credits, and FX
   - avoid advanced health scoring or expansion automation
   - recommend manual account review and simple leading indicators before false precision

4. **Diagnose by cohort and segment.**
   Use [references/cohort-diagnosis-playbook.md](references/cohort-diagnosis-playbook.md).
   Break the problem down by:
   - signup or contract cohort
   - segment: SMB, mid-market, enterprise
   - pricing model: seat, usage, hybrid, flat-rate
   - lifecycle stage: onboarding, adoption, steady-state, renewal
   - activation milestone completion

5. **Classify the dominant failure mode.**
   Determine whether the main issue is:
   - weak onboarding or slow TTFV
   - poor ICP or segment mismatch
   - low product adoption breadth or depth
   - missing champion or weak stakeholder coverage
   - billing friction or involuntary churn
   - weak renewal process
   - poor timing or poor fit of expansion offers

6. **Choose the smallest viable operating system.**
   Recommend only the systems the organization can run now. Examples:
   - simple segment-specific health score with weekly review
   - milestone-based onboarding for self-serve users
   - human-led save play for enterprise renewals
   - threshold alerts plus CSM review for usage expansion
   - dunning plus procurement escalation for payment-related churn

7. **Design triggers, owners, and actions.**
   For each motion, define:
   - trigger signal
   - threshold or condition
   - owner
   - action
   - timing or SLA
   - escalation rule
   - success metric

8. **Validate health-score governance before automating outreach.**
   Confirm:
   - inputs are explainable
   - signals refresh on a useful cadence
   - score bands map to actions
   - false positives and false negatives are reviewed regularly
   - segment-specific weights are justified

9. **Tie onboarding to activation, not just time-based sequences.**
   Define:
   - activation milestone
   - first-value milestone
   - adoption milestones by segment
   - interventions when milestones are missed
   Use time-based email only as a fallback, not the primary design.

10. **Build expansion motions with trust safeguards.**
    For usage or overage expansion, include:
    - clear thresholds
    - advance notice before limits or overages
    - plain-language billing explanations
    - spend visibility and caps where appropriate
    - a human escalation path for strategic accounts

11. **Separate voluntary from involuntary churn.**
    Do not treat payment failure, procurement delay, or contract admin issues as product churn. Assign owners across CS, finance, sales, and legal where needed.

12. **Add safety and privacy boundaries.**
    Before recommending automated outreach or analysis, ensure the plan respects:
    - approved-system use
    - data minimization
    - no unnecessary export of raw customer data into prompts or notes
    - aggregated or redacted examples where possible
    - no scraping or personal surveillance practices
    - regional messaging/privacy review where applicable

13. **Return an operating plan, not generic advice.**
    Output should usually include:
    - current-state diagnosis
    - segment-specific priorities
    - trigger table
    - owner map
    - 30/60/90-day plan
    - risks and assumptions
    - explicit handoffs if implementation work is required

## Lifecycle Operating Model

| Lifecycle stage | Main goal | Typical triggers | Primary owner | Core metrics |
| --- | --- | --- | --- | --- |
| Onboarding | Reach first value quickly | setup incomplete, no activation event, no invited users | CS or Product | activation rate, TTFV, first-30-day retention |
| Adoption | Deepen habitual usage | usage stalls, feature breadth low, support friction rises | CS | WAU/MAU fit, feature adoption, support burden |
| Steady-state | Protect GRR and identify expansion readiness | stable usage, additional teams, feature gates, ROI proof | CS + Sales | GRR, health mix, expansion pipeline |
| Renewal | Secure renewal and reduce commercial surprises | renewal window opens, procurement delays, stakeholder changes | CS + Sales + Finance | forecast accuracy, renewal rate, days-to-close |
| Expansion | Convert verified value into additional revenue | usage thresholds, seat growth, module demand, executive sponsorship | Sales or CS by segment | expansion rate, time-to-first-expansion, NRR |
| Win-back | Re-engage closed-lost or churned accounts selectively | product gap closed, timing changed, new stakeholder, new budget | Sales | re-engagement rate, meetings booked, reactivated ARR |

## Diagnostic Questions

Ask only the questions needed to unblock the operating plan.

### Baseline and segmentation

1. What are your current NRR, GRR, and logo retention trends?
2. Which segments matter most: SMB, mid-market, enterprise, or self-serve?
3. Is churn concentrated in early lifecycle, at renewal, or after billing events?
4. Which pricing model do you use: seat-based, usage-based, hybrid, or flat-rate?
5. Which cohorts are underperforming: by signup month, plan, ACV, or acquisition motion?

### Adoption and health

6. What activation milestone best predicts long-term retention in your product?
7. Which behaviors reliably signal adoption depth?
8. Do you already have a health score? If so, does the team trust it?
9. Who owns at-risk accounts today, and what happens after a risk is detected?

### Expansion and renewal

10. What usually triggers expansion today: usage, seats, modules, executive pressure, or renewal timing?
11. What percentage of customers expand in the first year?
12. How early do renewal reviews begin?
13. How do CS, sales, finance, and legal hand off renewal work?

### Closed-lost and win-back

14. Do you capture structured lost reasons?
15. What has changed since those opportunities were lost?
16. Which closed-lost accounts still fit your ICP and deserve re-engagement?

## Examples

### Example 1: Diagnose churn before proposing plays

```text
Use @expansion-retention to diagnose churn. Start by defining NRR, GRR, logo retention, and churn consistently. Then analyze churn by cohort, segment, pricing model, and activation milestone before proposing health scores or save plays.
```

**Expected output:** A diagnosis-first plan with assumptions, missing data, likely failure modes, and a prioritized intervention list.

### Example 2: Build a health-score operating model

```text
Use @expansion-retention to redesign our customer health score for SMB and enterprise separately. Include signal weights, refresh cadence, score bands, owners, actions, and a quarterly calibration process.
```

**Expected output:** A segment-specific health-score framework plus governance and recalibration steps.

### Example 3: Reduce involuntary churn

```text
Use @expansion-retention to reduce churn from failed payments and procurement delays. Separate payment-failure workflows from product-risk workflows, define owners across CS and finance, and create a dunning escalation sequence.
```

**Expected output:** An involuntary churn playbook with owner handoffs, dunning timing, and renewal-risk escalation.

### Example 4: Improve onboarding for early retention

```text
Use @expansion-retention to fix first-90-day churn. Define activation and time-to-first-value milestones, identify where customers stall, and propose milestone-based onboarding for self-serve and high-touch segments.
```

**Expected output:** An activation-led onboarding plan with missed-milestone triggers and segment-specific motions.

### Example 5: Design usage-based expansion safely

```text
Use @expansion-retention to design expansion triggers for our usage-based pricing. Include upgrade thresholds, pre-overage messaging, spend visibility, and guardrails against surprise invoices.
```

**Expected output:** A trigger catalog with customer-trust safeguards and escalation rules for strategic accounts.

## Best Practices

### Do

- define NRR, GRR, churn, contraction, and expansion explicitly before analysis
- diagnose by cohort and segment before recommending playbooks
- fix gross retention problems before optimizing expansion aggressively
- tie onboarding to product-specific activation milestones
- keep health scores explainable, segment-aware, and regularly recalibrated
- separate voluntary churn from payment-related or procurement-related churn
- map every trigger to an owner, action, timing, and escalation path
- use automation to augment human judgment, not replace it blindly
- keep usage-based monetization transparent to avoid bill shock
- state assumptions clearly when data is incomplete

### Don't

- prescribe a single benchmark as universally correct
- optimize NRR while ignoring weak GRR
- automate outreach from unvalidated health scores
- rely only on time-based email sequences when milestone data exists
- use personal surveillance, scraping, or unapproved enrichment to detect stakeholder changes
- treat all segments as if they should have the same onboarding or CS coverage model
- confuse pricing complaints, procurement friction, and true product dissatisfaction
- recommend dark-pattern upgrades or intentionally confusing overage mechanics

## Safety and Privacy Boundaries

This skill may recommend automated onboarding, renewal reminders, win-back outreach, or stakeholder-change response. Keep the plan inside these boundaries:

- use only approved customer data sources
- minimize personal data collection and retention
- avoid copying raw support transcripts, billing records, or customer notes into prompts unless explicitly approved and necessary
- prefer aggregated, redacted, or pseudonymized examples in outputs
- respect unsubscribe and suppression requirements
- avoid scraping personal profiles or monitoring individuals without approved lawful basis and internal review
- avoid implying legal certainty; route regional privacy or messaging questions to legal/compliance review
- prefer account-level signals over invasive individual surveillance where possible
- keep deliverability and sender-reputation risk in mind when designing automated email sequences

See [references/privacy-and-data-handling.md](references/privacy-and-data-handling.md).

## Troubleshooting

### Problem: Overall churn looks stable, but one cohort is collapsing

**Symptoms:** Aggregate retention appears acceptable, but a recent signup month, plan tier, or acquisition channel has materially worse retention.
**Solution:** Re-run diagnosis by cohort and activation milestone. Compare onboarding completion, time to first value, support burden, and pricing fit for the failing cohort before changing company-wide playbooks.

### Problem: Health score exists, but the CS team ignores it

**Symptoms:** Too many false alerts, unclear weights, no action mapping, or score updates lag reality.
**Solution:** Reduce the score to a smaller set of explainable signals, assign owners, define refresh cadence, map each score band to action, and review false positives/false negatives quarterly. Use [references/health-score-design-guide.md](references/health-score-design-guide.md).

### Problem: Users complete onboarding emails but never activate

**Symptoms:** Open and click rates look fine, but customers do not complete the first meaningful product workflow.
**Solution:** Redesign onboarding around missed milestones, not calendar days alone. Tighten the path to first value, reduce setup friction, and trigger contextual help when users stall.

### Problem: Expansion is rising, but complaints about unexpected charges are also rising

**Symptoms:** Revenue from existing accounts increases, but support complaints, invoice disputes, or downgrade requests also increase.
**Solution:** Add threshold alerts, pre-overage communication, usage visibility, plain-language invoices, and human review for large or unusual spikes. Expansion without billing trust is fragile. See [references/usage-billing-retention-guardrails.md](references/usage-billing-retention-guardrails.md).

### Problem: Healthy customers are churning because of payment failures or procurement delays

**Symptoms:** Product engagement remains strong, but renewals fail due to expired cards, PO timing, vendor onboarding, or contract admin bottlenecks.
**Solution:** Treat this as involuntary churn. Create separate dunning and renewal-escalation flows, assign finance and CS owners, and start renewal-risk review early using [references/lifecycle-operating-cadence.md](references/lifecycle-operating-cadence.md) and [examples/renewal-and-expansion-plan.md](examples/renewal-and-expansion-plan.md).

### Problem: Expansion offers are ignored

**Symptoms:** Customers use the product heavily, but upgrade prompts or CSM expansion asks do not convert.
**Solution:** Re-check timing, buyer alignment, and value framing. Tie offers to clear usage thresholds or outcomes, involve the right stakeholder, and make the next tier economically understandable.

### Problem: Renewal slips despite healthy usage

**Symptoms:** Adoption appears strong, but the renewal is late, forecast confidence drops, or signatures stall.
**Solution:** Check whether value proof, economic-buyer alignment, procurement timing, legal review, or pricing exception approvals were started early enough. Healthy usage does not replace renewal process discipline.

### Problem: The request drifted into implementation work

**Symptoms:** The conversation shifts toward CRM workflow setup, event instrumentation, billing integration, or legal review.
**Solution:** Keep the strategy output, then hand off deliberately using [agents/retention-router.md](agents/retention-router.md).

## Related Skills

- `@ai-pricing` - Use when the primary problem is pricing architecture, packaging redesign, discount strategy, or monetization model changes rather than retention operations.
- `@ai-cold-outreach` - Use when the main need is writing outbound or reactivation messaging, not deciding who should be contacted and why.
- `@ai-sdr` - Use when closed-lost re-engagement becomes a sales execution problem rather than a segmentation and trigger-design problem.
- Analytics or instrumentation skill - Use when the user needs event taxonomy, warehouse logic, dashboards, or product analytics implementation to measure activation and retention properly.
- CRM/RevOps implementation skill - Use when the user needs workflows, objects, automations, routing rules, or platform-specific setup in Salesforce, HubSpot, or similar tools.
- Legal/compliance review skill or team - Use when the recommendation depends on regional privacy, consent, or marketing-compliance interpretation.

## Additional Resources

### Local references

- [Retention metrics glossary](references/retention-metrics-glossary.md)
- [Cohort diagnosis playbook](references/cohort-diagnosis-playbook.md)
- [Lifecycle operating cadence](references/lifecycle-operating-cadence.md)
- [Health score design guide](references/health-score-design-guide.md)
- [Usage, billing, and retention guardrails](references/usage-billing-retention-guardrails.md)
- [Privacy and data handling](references/privacy-and-data-handling.md)

### Local examples

- [Account review template](examples/account-review-template.md)
- [Renewal and expansion plan](examples/renewal-and-expansion-plan.md)
- [Closed-lost re-engagement sequences](examples/closed-lost-reengagement-sequences.md)
- [Usage alert messages](examples/usage-alert-messages.md)

### Local agent guidance

- [Retention router](agents/retention-router.md)

### Source-informed notes preserved from upstream intent

Keep these upstream ideas, but treat uncited numeric benchmarks as directional unless independently validated in the working context:

- fix gross retention before relying on expansion to mask churn
- use product behavior to identify expansion readiness
- tie onboarding to moments of realized value
- review renewals well before contract end dates
- build structured closed-lost re-engagement rather than ad hoc follow-up
