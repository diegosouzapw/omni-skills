---
name: "partner-affiliate"
description: "Partner & Affiliate Program Design workflow skill. Use this skill when a user needs to design or improve an affiliate, referral, integration, reseller, co-marketing, marketplace, or broader partner program from model selection through economics, attribution, governance, recruitment, pilot launch, and optimization. Do not use it for legal advice, tax determinations, CRM implementation, API implementation, or software architecture."
version: "0.0.1"
category: "development"
tags:
  - "partner-affiliate"
  - "affiliate-program"
  - "partner-program"
  - "referral-program"
  - "integration-partnerships"
  - "reseller"
  - "co-marketing"
  - "channel-strategy"
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
upstream_skill: "skills/partner-affiliate"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Partner & Affiliate Program Design

## Overview

This skill helps operators design or improve a partner motion that produces measurable revenue, adoption, or distribution rather than vague “ecosystem” activity.

It preserves the intent of the upstream `partner-affiliate` workflow while making the execution path clearer for agents: start by choosing the correct partner model, design economics and governance before recruitment, define attribution and conflict rules, then pilot, measure, and optimize.

Use it for business and operating design across affiliate, referral, integration, reseller, co-sell, co-marketing, and marketplace-adjacent programs. Keep legal, tax, CRM implementation, and technical integration build work as explicit dependencies or handoffs rather than pretending this skill replaces them.

## When to Use This Skill

Use this skill when the request is primarily about designing the structure, incentives, operating rules, or performance management of a partner program.

### Good fit

- Launching a new affiliate or referral program.
- Choosing between affiliate, referral, reseller, integration, marketplace, or co-sell motions.
- Designing partner tiers, eligibility rules, commissions, payouts, clawbacks, and review cadences.
- Defining partner-sourced vs partner-influenced attribution.
- Building partner recruitment criteria, enablement plans, and first-90-day launch plans.
- Troubleshooting low activation, tracking disputes, channel conflict, fraud risk, or partner concentration.
- Prioritizing integration or strategic partners using customer overlap, workflow fit, and GTM commitment.

### Do not use this skill as the primary tool when

- The task is contract drafting, legal interpretation, tax treatment, privacy review, or antitrust analysis.
- The task is implementing CRM automation, affiliate platform configuration, APIs, tracking pixels, or marketplace onboarding.
- The task is software architecture, code review, debugging, or integration build execution.
- The user needs only generic sales outreach copy with no partner-program design component.

If the work drifts into pricing, outbound, CRM ops, legal review, or technical integrations, use the routing guidance in `agents/partner-affiliate-router.md`.

## Operating Table

| Scenario | Recommended motion | Eligibility gate | Attribution method | Incentive model | Payout timing | Main risk | Review cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Low-ACV, self-serve SaaS seeking scalable top-of-funnel | Affiliate | Approved partner application, policy acceptance, disclosure readiness | Click/referral ID plus payable conversion definition | Flat or percent commission on collected revenue | After payment clears, with hold and reversal policy | Low-intent or fraudulent traffic | Monthly |
| Existing customers or consultants sending occasional warm leads | Referral | Known relationship, basic agreement, clear referral acceptance rules | Referred lead or accepted intro logged in CRM | One-time referral fee or limited-duration revenue share | After accepted deal stage and payment event | Informal tracking and lead ownership confusion | Monthly or quarterly |
| Product with clear workflow adjacency and customer overlap | Integration partner | Overlap evidence, technical feasibility, GTM commitment | Joint account mapping, registered opportunities, influenced pipeline | Revenue share, co-marketing support, tier benefits | Based on collected and retained revenue where applicable | Integration gets usage but no pipeline | Monthly plus quarterly business review |
| Enterprise product with procurement-heavy buyers | Reseller / channel / co-sell | Enablement completion, territory/account rules, forecast discipline | Deal registration plus sourced/influenced distinction | Discount margin, referral fee, or co-sell incentive | By invoiced and collected revenue under contract terms | Channel conflict with direct sales | Monthly pipeline review |
| Cloud or app ecosystem distribution opportunity | Marketplace / strategic partner | Listing readiness, packaging fit, marketplace requirements | Marketplace-sourced, partner-assisted, or influenced tracking | Listing-led distribution plus co-sell or rev share | Per marketplace or negotiated rules | Listing exists but activation is weak | Quarterly |
| Early-stage joint demand-gen experiment | Co-marketing pilot | ICP match, content owner, campaign owner, success metric | Campaign response plus influenced pipeline tracking | Shared spend, MQL/SQL targets, no commission unless defined | Usually not payout-based | Vanity metrics without pipeline linkage | Per campaign |
| Program pays on raw signups with no quality filter | Anti-pattern | None | Weak or missing | Over-generous top-line payout | Immediate | Fraud, poor CAC, partner mistrust later | Fix before scale |
| No deal registration or no conflict policy | Anti-pattern | None | Ambiguous | Disputed | Unclear | Sales-channel conflict | Fix before recruitment |
| No disclosure rules or traffic policy | Anti-pattern | None | Opaque | High-risk | Unclear | Compliance, brand, and platform-policy failures | Fix before launch |

## Workflow

1. **Clarify the business objective**  
   Identify the primary goal: new logo acquisition, expansion, retention, product adoption, distribution, or strategic ecosystem leverage.

2. **Collect minimum discovery inputs**  
   Gather product summary, GTM motion, ACV, gross margin or contribution margin constraints, customer profile, current partner activity, revenue model, integration landscape, internal support capacity, and major channel risks. Use `examples/partner-discovery-questionnaire.md`.

3. **Choose the partner model before discussing tooling**  
   Decide whether the request is best served by affiliate, referral, integration, reseller/channel, co-sell, co-marketing, or marketplace motion. Use `references/program-model-selection-guide.md`.

4. **Model economics backward from real unit economics**  
   Define what event is payable, what revenue base applies, what retention or clawback rules apply, and whether the program can support the incentive without destroying payback. Use `references/commission-and-unit-economics-worksheet.md`.

5. **Define operational attribution and governance**  
   Specify the meaning of partner-sourced, partner-influenced, qualified referral, accepted lead, registered deal, payable conversion, reversal event, dispute owner, and review SLA. Use `references/attribution-and-governance-guide.md`.

6. **Set compliance, disclosure, and traffic rules**  
   Document what promotional claims are allowed, what disclosures are required, which traffic sources are prohibited, whether trademark bidding is allowed, and how coupon/deal-site behavior is handled. Use `references/compliance-and-disclosure-checklist.md`.

7. **Design the program structure**  
   Create tiers, eligibility requirements, enablement package, deal protection rules, payout cadence, review cadence, and escalation paths. Use `references/partner-program-blueprint.md`.

8. **Prioritize partners or partner segments**  
   For strategic or integration programs, rank candidates using overlap, workflow adjacency, feasibility, GTM commitment, and marketplace leverage. Use `references/integration-partner-prioritization-scorecard.md`.

9. **Prepare pilot assets and launch plan**  
   Build the first cohort plan, onboarding sequence, core assets, partner-facing brief, internal owner list, and success metrics. Use `examples/first-90-days-launch-plan.md` and `examples/integration-partner-one-page-brief.md`.

10. **Run a limited pilot before broad recruitment**  
    Start with a narrow cohort, validate tracking and payout logic, inspect first conversions manually, and document exceptions before scaling.

11. **Review performance and failure modes**  
    Measure activation rate, time to first qualified referral, sourced pipeline, influenced pipeline, conversion rate by cohort, reversal rate, and partner concentration. Use `references/partner-kpi-glossary.md`.

12. **Optimize or hand off**  
    If the problem is now pricing, legal review, CRM implementation, or integration build-out, hand off explicitly using `agents/partner-affiliate-router.md`.

## Discovery Baseline

Before recommending any model, collect answers to these questions:

- What does the product do, for whom, and at what price point?
- What is the current GTM motion: PLG, sales-led, community-led, channel-led, or hybrid?
- What is the average deal size, sales cycle, and gross-margin profile?
- Is this program intended to drive awareness, leads, closed revenue, product adoption, or marketplace distribution?
- Does a partner motion already exist? If yes, what is tracked today and what is disputed today?
- Which adjacent tools, agencies, consultants, creators, or platforms already influence the buying journey?
- What internal resources exist for partner management, enablement, finance, compliance review, and integration support?
- What risks are already visible: attribution disputes, direct-sales conflict, low-quality traffic, low activation, or partner over-concentration?

## Examples

### Example 1: Recommend the right partner motion

```text
Use @partner-affiliate to decide whether our $8k ACV workflow SaaS should launch an affiliate program, a consultant referral program, or integration partnerships first. We have 40 customers, a sales-led motion, and strong overlap with two adjacent tools.
```

**Expected outcome:** A model recommendation with rationale, required prerequisites, likely risks, and a pilot scope.

### Example 2: Build a first-pass operating design

```text
Use @partner-affiliate to draft a partner program blueprint for a B2B SaaS product. Define partner tiers, eligibility, payable events, attribution rules, payout timing, conflict policy, launch metrics, and first-quarter review cadence.
```

**Expected outcome:** A structured program design using documented definitions rather than generic GTM advice.

### Example 3: Review economics before launch

```text
Use @partner-affiliate to pressure-test commission design for a subscription SaaS business. Base payouts on collected revenue, include churn safeguards, and explain where legal and finance review are still required.
```

**Expected outcome:** A conservative economics proposal with caveats, assumptions, and escalation points.

### Example 4: Prioritize integration partners

```text
Use @partner-affiliate to score five potential integration partners using customer overlap, workflow adjacency, technical feasibility, GTM commitment, and marketplace leverage. Recommend the top two for pilot outreach.
```

**Expected outcome:** A ranked scorecard and a short justification for each candidate.

### Example 5: Resolve an attribution dispute

```text
Use @partner-affiliate to resolve a dispute where direct sales says an opportunity was already in progress, but the partner claims they sourced it. Propose a fact pattern, decision rule, and policy update.
```

**Expected outcome:** A dispute-resolution recommendation plus a process fix. See `examples/attribution-dispute-resolution-example.md`.

## Best Practices

### Do

- Design the program backward from business goals, unit economics, and measurable payable events.
- Decide the partner model before selecting software or promising commission rates.
- Define sourced, influenced, registered, accepted, payable, reversed, and protected-account terms in writing.
- Pay on collected and sufficiently retained revenue when the business model requires it.
- Launch with a narrow pilot cohort before scaling recruitment.
- Use CRM and partner-platform fields consistently so disputes can be reconciled.
- Require clear disclosure of material relationships for affiliate or creator-style promotion.
- Set explicit traffic, brand, and claims policies before recruitment.
- Track concentration risk so the program does not depend excessively on a few partners.
- Treat marketplace listings and integrations as operating motions that still require GTM ownership.

### Do not

- Do not present sample commission percentages, cookie windows, or clawback periods as universal defaults.
- Do not pay on unqualified signups if quality, fraud, or churn can wipe out contribution margin.
- Do not recruit aggressively before attribution rules and conflict rules exist.
- Do not assume “integration partner” automatically means meaningful pipeline impact.
- Do not allow trademark abuse, fake reviews, misleading claims, or undisclosed endorsements.
- Do not let direct sales and partners share accounts without written registration and conflict rules.
- Do not collapse referral, affiliate, reseller, and integration motions into one vague program.
- Do not treat this skill as a substitute for legal, tax, finance, CRM ops, or technical implementation review.

### Compliance and policy notes

This skill can identify likely compliance checkpoints, but it does not provide legal advice. For affiliate, creator, and social promotion programs, require qualified review for disclosure language, contract terms, tax handling, data sharing, and jurisdiction-specific requirements.

For SEO and content partners, explicitly prohibit deceptive traffic, doorway pages, scaled low-value content, fake reviews, and other abusive acquisition tactics. For creator channels, ensure paid relationship disclosures are visible and platform-appropriate.

## Troubleshooting

### Problem: Low partner activation after onboarding

**Symptoms:** Many approved partners, few active referrals, long time to first qualified referral, or no repeat contribution after onboarding.

**Likely causes:** Weak incentive design, unclear next steps, poor partner-ICP fit, too much onboarding friction, or assets that do not help partners launch quickly.

**Solution:** Reduce time-to-first-value, narrow the ideal partner profile, provide one clear launch motion per segment, inspect first-touch partner activity manually, and compare activation by cohort. Rework onboarding before increasing recruitment volume.

### Problem: Attribution is unclear or disputed

**Symptoms:** Sales and partners disagree on ownership, data sources conflict, UTM or referral IDs are missing, or partner-sourced and partner-influenced revenue are mixed together.

**Likely causes:** No operational definitions, inconsistent CRM fields, weak registration rules, manual overrides without documentation, or no dispute SLA.

**Solution:** Apply the definitions in `references/attribution-and-governance-guide.md`, inspect the factual timeline, separate sourced from influenced credit, document exception handling, and update the policy so the same edge case does not repeat. See `examples/attribution-dispute-resolution-example.md`.

### Problem: Direct-sales and partner teams are in channel conflict

**Symptoms:** Reps resist partner involvement, partners complain their deals are being taken, or deals stall because ownership is unclear.

**Likely causes:** No deal registration, no protected-account rule, unclear close-window protection, or compensation plans that punish collaboration.

**Solution:** Define registration timing, account-protection rules, exception owners, and compensation treatment for overlay or shared deals. Start with a narrow conflict policy and review real cases monthly.

### Problem: Affiliate traffic volume is high but revenue quality is poor

**Symptoms:** Many clicks or signups, low conversion-to-paid, high refund or reversal rate, suspicious traffic patterns, or brand complaints.

**Likely causes:** Incentives reward quantity over quality, traffic-source policy is weak, coupon/deal partners dominate, or fraud screening is missing.

**Solution:** Pause risky partners, move payouts to collected revenue or quality-qualified events, tighten traffic rules, manually review top offenders, and segment performance by partner type before reopening scale.

### Problem: Integration partnership shows product usage but little pipeline

**Symptoms:** Integration launches successfully, customers use it, but there is little sourced or influenced revenue.

**Likely causes:** Good product adjacency but weak GTM commitment, no joint offer, poor field enablement, or marketplace listing with no campaign support.

**Solution:** Decide whether the partnership is primarily product-retention value or pipeline value. If pipeline is required, assign joint owners, define target accounts, create one concrete campaign, and review account overlap and seller behavior.

### Problem: The program is over-dependent on a few partners

**Symptoms:** Top 5 or top 10 partners drive most revenue, forecast swings with one partner, or negotiations become one-sided.

**Likely causes:** Weak middle-tier activation, recruitment concentrated in one segment, or no diversification plan.

**Solution:** Measure concentration ratio explicitly, build a mid-tier activation plan, recruit adjacent partner types, and avoid custom exceptions that only the biggest partners can satisfy.

### Problem: Disclosure or brand-compliance failures appear

**Symptoms:** Partners omit sponsorship disclosures, make unsupported claims, use restricted brand terms, or publish misleading content.

**Likely causes:** Policies were undocumented, partner onboarding skipped compliance, or enforcement was inconsistent.

**Solution:** Pause the offending campaigns, document required corrections, require policy acknowledgement, and route contract or enforcement questions to qualified legal/compliance review.

## Related Skills

- `@ai-pricing` - Use when the main issue becomes pricing model, packaging, CAC/payback, or monetization design beyond partner-specific incentives.
- `@ai-cold-outreach` - Use when the next step is outbound recruitment messaging for partners rather than program structure.
- `@ai-sdr` - Use when the task becomes sales development process design for partner-sourced or co-sell pipeline.
- `@accessibility` - Not a primary adjacent skill here, but hand off if the partnership work turns into product or content accessibility requirements.

## Additional Resources

### Local support pack

- [Program model selection guide](references/program-model-selection-guide.md)
- [Partner program blueprint](references/partner-program-blueprint.md)
- [Commission and unit economics worksheet](references/commission-and-unit-economics-worksheet.md)
- [Attribution and governance guide](references/attribution-and-governance-guide.md)
- [Compliance and disclosure checklist](references/compliance-and-disclosure-checklist.md)
- [Integration partner prioritization scorecard](references/integration-partner-prioritization-scorecard.md)
- [Partner KPI glossary](references/partner-kpi-glossary.md)
- [First 90 days launch plan example](examples/first-90-days-launch-plan.md)
- [Partner discovery questionnaire](examples/partner-discovery-questionnaire.md)
- [Attribution dispute resolution example](examples/attribution-dispute-resolution-example.md)
- [Integration partner one-page brief](examples/integration-partner-one-page-brief.md)
- [Routing and handoff notes](agents/partner-affiliate-router.md)

### External reference themes to consult when needed

- FTC endorsement and disclosure guidance for affiliate or influencer-style promotion.
- Search-platform guidance on affiliate-link qualification and spam-abuse prevention.
- CRM guidance for sourced vs influenced attribution fields and campaign influence.
- Billing and subscription analytics guidance to design payout logic around collected and retained revenue.
- Marketplace documentation for strategic distribution and listing readiness.

### Practical reminder

The strongest partner programs are not built by starting with a commission percentage or a platform demo. They are built by making five things explicit before scale: model fit, economics, attribution, governance, and enablement.
