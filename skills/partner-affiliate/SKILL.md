---
name: partner-affiliate
description: "Partner & Affiliate Program Design workflow skill. Use this skill when the user needs When the user wants to build a partner program, launch an affiliate program, design integration partnerships, or create distribution partnerships. Also use when the user mentions 'partnerships,' 'affiliate program,' 'referral program,' 'partner ecosystem,' 'integration partner,' 'reseller,' 'co-marketing,' 'PartnerStack,' or 'revenue share.' This skill covers partner and affiliate program design from recruitment through performance optimization. Do NOT use for technical implementation, code review, or software architecture and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["partner-affiliate", "the", "user", "wants", "build", "partner", "program", "launch"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Partner & Affiliate Program Design

## Overview

This public intake copy packages `packages/skills-catalog/skills/(gtm)/partner-affiliate` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Partner & Affiliate Program Design You are an expert in partner ecosystem strategy, affiliate program design, integration partnerships, and channel revenue optimization. You understand the 2025-2026 shift from linear reseller programs to multi-directional co-creation ecosystems. You help founders and GTM leaders build partner programs that generate sourced revenue, not just brand awareness. You know the tooling landscape (PartnerStack, Impact.com, Rewardful, FirstPromoter, Crossbeam) and can design programs from first affiliate signup through scaled partner-sourced pipeline.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Starting, 1. Co-Creation vs. Traditional Partner Models, 2. Partner Program Tiers and Compensation, 3. Affiliate Program Design and Tooling, 4. Integration Partnership Strategy.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: When the user wants to build a partner program, launch an affiliate program, design integration partnerships, or create distribution partnerships. Also use when the user mentions 'partnerships,' 'affiliate program,'....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Before Starting

Gather this context before designing any partner or affiliate program:

- What is the current product? Get a one-paragraph description of core capability and primary use case.
- What is the current GTM motion? PLG, sales-led, community-led, or hybrid. Average deal size and sales cycle.
- Who are the current customers? Industry verticals, company size, buyer persona.
- Does a partner program exist today? If yes, get the structure, partner count, and revenue attribution.
- What is the integration landscape? Which tools do customers use alongside this product?
- What is the current referral or affiliate activity? Even informal word-of-mouth counts.
- What is the revenue model? Subscription, usage-based, hybrid, one-time. This determines commission structures.
- What internal resources can support partners? Headcount for partner management, engineering for integrations, marketing for co-marketing.
- What is the competitive partner landscape? Do competitors have partner programs? What do they offer?

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @partner-affiliate to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/partner-affiliate/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/partner-affiliate/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @partner-affiliate using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

- **User says:** "We want to start a partner program" → **Result:** Agent asks current referral/integration usage and margin; recommends model (referral 10–15%, integration 20–25%, solution 30–40%); suggests Rewardful/FirstPromoter for early stage or PartnerStack/Impact for growth; outlines deal registration and 30-day time-to-first-referral target.
- **User says:** "How do we recruit integration partners?" → **Result:** Agent identifies tools customers use daily; recommends API/sandbox readiness and co-marketing budget ($2K–10K/quarter); suggests activation target (20–30% of onboarded) and QBR cadence for Tier 2/3.
- **User says:** "Partner revenue is flat" → **Result:** Agent checks activation rate and top-performer concentration (10–20% drive 80%+); suggests recruiting from existing referrers, tightening enablement, and protected-account limits (e.g. 50); ties to expansion-retention for partner-sourced expansion.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(gtm)/partner-affiliate`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

- **Low partner activation** → **Cause:** Onboarding friction or weak incentive. **Fix:** Time-to-first-referral under 30 days; clear commission and cookie window (90d); enablement kit and deal registration (14d first-mover).
- **Channel conflict** → **Cause:** Direct and partner competing. **Fix:** Deal registration and 120-day close window; protected account list; clear conflict rules and comp for overlay.
- **Attribution unclear** → **Cause:** No CRM field or UTM. **Fix:** Required UTM on partner links; CRM field for source; report partner-sourced vs partner-influenced; target 15–30% partner-sourced at maturity.

---


For checklists, benchmarks, and discovery questions read `references/quick-reference.md` when you need detailed reference.

---

## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/implementation-guide.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: 1. Co-Creation vs. Traditional Partner Models

The partner landscape has shifted decisively. Traditional reseller models where partners simply mark up and resell your product are giving way to co-creation ecosystems where partners build on, extend, and customize your product for their verticals.

### Model Comparison

| Dimension | Traditional Reseller Model | Co-Creation Ecosystem Model |
|---|---|---|
| Partner role | Resells your product as-is | Builds on your product, extends it for their vertical |
| Compensation | Margin-based (15-25% discount) | Performance-based revenue share (10-40%) |
| Partner enablement | Train partner on your product | Partner has API access, sandbox, and GTM support |
| Post-sale alignment | Low - partner moves to next deal | High - shared revenue creates ongoing alignment |
| Integration depth | White-label or bundle | Native API integration, joint product development |
| Scalability | Linear - each deal requires partner effort | Compounding - integration drives organic adoption |
| Data sharing | Minimal - lead handoff only | Bi-directional - shared customer insights via Crossbeam |
| Time to first revenue | 3-6 months (training + pipeline build) | 6-12 months (integration + GTM ramp) |
| Long-term value | Flat - margin stays constant | Growing - deeper integration increases switching cost |

### When to Use Each Model

| Scenario | Recommended Model | Rationale |
|---|---|---|
| Product under $500/mo ACV | Affiliate/referral | Low deal value cannot support partner training overhead |
| Complex enterprise product | Integration + solution partner | High ACV justifies deep partner investment |
| Platform with API | Co-creation ecosystem | Partners extend the platform, creating network effects |
| Vertical SaaS | Solution partner with vertical specialization | Partners bring domain expertise you lack |
| Horizontal tool | Affiliate + integration partner mix | Broad market needs volume (affiliate) plus depth (integration) |

---

#### Imported: 2. Partner Program Tiers and Compensation

### Three-Tier Partner Framework

Design your program in three tiers. Partners self-select based on their investment level and capability. Each tier unlocks progressively better economics and support.

**Tier 1: Referral Partner (Entry Level)**

| Element | Details |
|---|---|
| Compensation | 10-15% of first-year revenue per referred customer |
| Requirements | Signed partner agreement, completed onboarding module |
| Support provided | Referral link, basic marketing assets, monthly newsletter |
| Expected volume | 1-5 referrals per quarter |
| Partner type | Consultants, freelancers, happy customers, content creators |
| Tracking | UTM links, referral codes, cookie-based attribution |
| Payout timing | Net-30 after customer payment clears, with 60-day clawback on churn |

**Tier 2: Integration Partner (Mid Level)**

| Element | Details |
|---|---|
| Compensation | 20-25% of joint customer revenue, ongoing for customer lifetime |
| Requirements | Live integration, 3+ joint customers, co-marketing commitment |
| Support provided | API sandbox, dedicated partner manager, co-marketing budget ($2K-$10K/quarter), joint case study |
| Expected volume | 5-20 joint customers per quarter |
| Partner type | Complementary SaaS products, platforms, workflow tools |
| Tracking | API usage monitoring, Crossbeam overlap reporting, deal registration |
| Payout timing | Monthly revenue share, no clawback after 90-day retention threshold |

**Tier 3: Solution Partner (Top Level)**

| Element | Details |
|---|---|
| Compensation | 30-40% of revenue from their customer base, shared product roadmap influence |
| Requirements | 10+ joint customers, dedicated team member, quarterly business review |
| Support provided | Priority API access, engineering office hours, joint GTM planning, executive sponsor, early feature access |
| Expected volume | 20+ joint customers per quarter |
| Partner type | System integrators, vertical platforms, agencies with deep client relationships |
| Tracking | Full CRM integration, joint pipeline reviews, Crossbeam account mapping |
| Payout timing | Monthly revenue share with quarterly true-up, no clawback |

### Commission Structures by Revenue Model

| Your Revenue Model | Referral Commission | Integration Commission | Solution Commission |
|---|---|---|---|
| Monthly subscription | 15% of month-1 revenue, or 10% recurring for 12 months | 20% recurring for customer lifetime | 30-40% recurring for customer lifetime |
| Annual subscription | 10-15% of first-year ACV | 20-25% of ACV, renewed annually | 30-40% of ACV, renewed annually |
| Usage-based | 10% of first 12 months usage | 20% of ongoing usage | 30% of ongoing usage |
| Outcome-based | 10% of first outcome payment | 20% of ongoing outcome payments | 35% of ongoing outcome payments |

### Clawback and Protection Policies

| Policy | Referral Tier | Integration Tier | Solution Tier |
|---|---|---|---|
| Clawback window | 60 days | 90 days | None |
| Customer churn trigger | Full commission returned | Pro-rated return | No return, partner helps with retention |
| Deal overlap resolution | First-touch attribution | Multi-touch with registration priority | Joint pipeline, split credit |
| Direct sale overlap | Partner loses if deal registered after direct contact | Deal registration within 14 days protects partner | Protected account list reviewed quarterly |

---

#### Imported: 3. Affiliate Program Design and Tooling

### Platform Selection Framework

| Platform | Best For | Pricing (Starting) | Key Strengths | Limitations |
|---|---|---|---|---|
| PartnerStack | B2B SaaS, multi-partner-type programs | Custom (mid-market+) | Manages affiliates, referrals, and resellers in one platform. Automated global payouts. Large B2B marketplace network. | Higher cost. Overkill for simple referral programs. |
| Impact.com | Enterprise, large-scale affiliate programs | Custom (enterprise) | Vast partner network, granular attribution, custom recurring commissions. | Steep learning curve. Requires dedicated admin. |
| Rewardful | Early-stage SaaS, Stripe-first companies | $49/month | Fast Stripe integration, simple setup, affordable. 30+ integrations. | No built-in email automation. Limited as programs scale. |
| FirstPromoter | Growth-stage SaaS, MRR-focused teams | $99/month | Strong recurring billing tracking, 18+ detailed metrics, built-in fraud protection, email automation. | Higher price than Rewardful. Fewer marketplace features. |
| Refgrow | Bootstrapped SaaS | $0-49/month | Free tier available, simple widget-based setup | Limited features at lower tiers |

### Platform Decision Tree

```
START: What is your monthly revenue?
  |
  +--> Under $10K MRR
  |      |
  |      +--> Using Stripe? --> Rewardful ($49/mo)
  |      +--> Not using Stripe? --> Refgrow (free tier)
  |
  +--> $10K-$100K MRR
  |      |
  |      +--> Need email automation? --> FirstPromoter ($99/mo)
  |      +--> Stripe-only, keep it simple? --> Rewardful ($49/mo)
  |
  +--> $100K-$500K MRR
  |      |
  |      +--> Multi-partner-type program? --> PartnerStack
  |      +--> Affiliate-only focus? --> FirstPromoter
  |
  +--> $500K+ MRR
         |
         +--> Enterprise, complex attribution? --> Impact.com
         +--> B2B SaaS ecosystem play? --> PartnerStack
```

### Affiliate Program Launch Checklist

| Phase | Action | Timeline |
|---|---|---|
| Week 1 | Define commission structure (flat vs. recurring, percentage, tiers) | Day 1-3 |
| Week 1 | Choose and configure affiliate platform | Day 3-5 |
| Week 1 | Create affiliate agreement (terms, payment, clawback, brand guidelines) | Day 5-7 |
| Week 2 | Build affiliate portal: signup page, dashboard, asset library | Day 8-10 |
| Week 2 | Create marketing assets: banners, email templates, social copy, landing page copy | Day 10-14 |
| Week 3 | Recruit first 10-20 affiliates from existing customers, advisors, content creators | Day 15-18 |
| Week 3 | Send onboarding sequence (welcome, platform walkthrough, first campaign guide) | Day 18-21 |
| Week 4 | Monitor first conversions, adjust tracking if attribution gaps appear | Day 22-28 |
| Month 2 | Analyze top performer patterns, create case study from first successful affiliate | Day 30-60 |
| Month 3 | Scale recruitment, launch tiered commission structure based on performance data | Day 60-90 |

---

#### Imported: 4. Integration Partnership Strategy

### Why Integration Partnerships Win in 2025-2026

Integration partnerships have become the fastest-growing partnership category because they create product-level lock-in, not just commercial relationships. When your product is deeply integrated with a partner's product, joint customers have higher retention, higher NPS, and higher LTV.

### Integration Partner Prioritization

Use this scoring model to decide which integrations to build first.

| Factor | Weight | Scoring Criteria |
|---|---|---|
| Customer overlap | 30% | Crossbeam or manually surveyed overlap. 50+ shared accounts = 100pts, 20-49 = 75pts, 10-19 = 50pts, under 10 = 25pts |
| Strategic fit | 25% | Adjacent in the workflow (100pts), complementary but separate (60pts), tangential (25pts) |
| Partner GTM commitment | 20% | Co-marketing budget committed (100pts), willing to co-market (60pts), integration-only (25pts) |
| Technical feasibility | 15% | API available, under 2 weeks to build (100pts), API available, 2-8 weeks (60pts), no API or 8+ weeks (25pts) |
| Market signal | 10% | Customers actively requesting (100pts), competitor has it (60pts), nice-to-have (25pts) |

**Score = Sum of (Factor Weight x Points). Prioritize integrations scoring 70+.**

### Integration Partner Onboarding Process

```
Step 1: Discovery Call (Week 1)
  - Validate customer overlap via Crossbeam or manual account mapping
  - Confirm technical feasibility (API docs, sandbox access)
  - Align on GTM commitment level
  |
Step 2: Technical Build (Weeks 2-6)
  - Exchange API credentials and sandbox environments
  - Build integration (bidirectional data flow preferred)
  - QA testing with 2-3 beta customers
  |
Step 3: GTM Launch (Weeks 7-8)
  - Co-authored blog post or case study
  - Joint webinar or demo video
  - Listing in each other's integration directory/marketplace
  - Email announcement to overlapping customer base
  |
Step 4: Ongoing Optimization (Monthly)
  - Monthly partner sync on pipeline and adoption metrics
  - Quarterly co-marketing campaign (webinar, content, joint offer)
  - Annual partnership review with executive sponsors
```

---


For integration strategy, marketplace, recruitment, co-marketing, attribution, channel conflict, AI partnerships, operations, and implementation playbook read `references/implementation-guide.md`.
