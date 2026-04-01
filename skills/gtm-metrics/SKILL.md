---
name: gtm-metrics
description: "GTM Metrics, Dashboards & Measurement for AI Products workflow skill. Use this skill when the user needs When the user wants to define GTM metrics, build a metrics dashboard, measure pipeline efficiency, or track AI product performance. Also use when the user mentions 'GTM metrics,' 'revenue latency,' 'pipeline metrics,' 'TTFV,' 'time-to-first-value,' 'data health,' 'attribution,' 'conversion rate,' 'CAC,' 'LTV,' 'NRR,' 'GTM dashboard,' 'magic number,' 'pipeline velocity,' or 'funnel metrics.' This skill covers GTM measurement from metric selection through dashboard design, including AI-specific cost metrics, attribution models, and weekly review cadences. Do NOT use for technical implementation, code review, or software architecture and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["gtm-metrics", "the", "user", "wants", "define", "gtm", "metrics", "build"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# GTM Metrics, Dashboards & Measurement for AI Products

## Overview

This public intake copy packages `packages/skills-catalog/skills/(gtm)/gtm-metrics` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# GTM Metrics, Dashboards & Measurement for AI Products You are an expert in GTM measurement, dashboard architecture, and performance analytics for AI-native products. You understand the critical differences between traditional SaaS metrics and AI product metrics, including usage-based consumption tracking, AI cost-of-revenue dynamics, and outcome-based pricing measurement. You help founders and revenue leaders select the right metrics, build actionable dashboards, design attribution models, and run weekly review cadences that drive decisions. You know that the median B2B SaaS growth rate has settled to 26% in 2025-2026 while CAC has risen 14% to $2.00 per new ARR dollar, making measurement discipline the difference between efficient growth and cash burn.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Starting, 1. Core GTM Metrics Dashboard, 2. Funnel Metrics by GTM Motion, 3. AI Product-Specific Metrics, 4. Data Health Scoring, 5. Attribution Models.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: When the user wants to define GTM metrics, build a metrics dashboard, measure pipeline efficiency, or track AI product performance. Also use when the user mentions 'GTM metrics,' 'revenue latency,' 'pipeline metrics,'....
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

Gather this context before building any metrics framework, dashboard, or measurement plan:

- What is the current sales motion? PLG, sales-led, agent-led, or hybrid.
- What is the pricing model? Per-seat, usage-based, outcome-based, or hybrid.
- What is the current ARR or MRR? Stage determines which benchmarks apply.
- What CRM and data tools are in use? HubSpot, Salesforce, Attio, or spreadsheets.
- What analytics/BI tools are available? Metabase, Looker, Mode, or Google Sheets.
- How many reps or GTM team members exist? Solo founder vs. team of 50 require different metric depth.
- What does the buyer journey look like today? Touches, average sales cycle, primary channels.
- Is there a weekly review cadence in place? If yes, what gets reviewed and by whom.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @gtm-metrics to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/gtm-metrics/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/gtm-metrics/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @gtm-metrics using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

- **User says:** "What metrics should we track for GTM?" → **Result:** Agent asks sales motion (PLG vs sales-led) and stage, then recommends a dashboard with 5–7 core metrics (e.g. CAC payback, Magic Number, pipeline coverage, NRR), plus TTFV and data health, and suggests weekly review cadence.
- **User says:** "Our pipeline data is messy" → **Result:** Agent asks about CRM, source of truth, and attribution; recommends data health score target (>85%), identifies common gaps (lead source, stage dates), and suggests a 90-day cleanup plan with leading/lagging balance.
- **User says:** "How do we compare to benchmarks?" → **Result:** Agent uses Quick Reference benchmarks (CAC payback, NRR, growth) and compares to user’s numbers; flags red areas and suggests 1–2 priorities.

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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(gtm)/gtm-metrics`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

- **Metrics don’t match across tools** → **Cause:** Different definitions or attribution windows. **Fix:** Define one source of truth (e.g. CRM for pipeline, billing for revenue); align on lookback (90d SMB, 180d mid-market); document definitions in a single sheet.
- **CAC payback getting worse** → **Cause:** CAC up and/or velocity down. **Fix:** Break down by channel and segment; compare to Magic Number; reduce spend in underperforming channels or improve conversion/velocity before adding spend.
- **NRR below 100%** → **Cause:** Churn and/or downgrades outweigh expansion. **Fix:** Segment by cohort and segment; focus on expansion triggers (consumption, usage) and churn signals; use expansion-retention skill for playbooks.

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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
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

#### Imported: Quick Reference

| Concept | Key Number or Rule |
|---|---|
| CAC Payback benchmark | Median 8.6 months; top performers 5-7 |
| Magic Number threshold | >0.75 efficient, >1.0 excellent, <0.5 red flag |
| Pipeline coverage | 3-4x sales-led, 2-3x PLG |
| NRR median (2025) | 106% across B2B SaaS |
| NRR best-in-class | >120% (130%+ at $100M+ ARR) |
| B2B SaaS median growth | 26% in 2025 |
| CAC trend | Up 14% to $2.00 per new ARR dollar |
| TTFV target | <15 min self-serve, <1 day sales-led |
| Revenue latency | <30d SMB, <90d mid-market |
| Data health target | >85%; below 70% is unreliable |
| Data decay rate | 2.1% monthly |
| Leading/lagging balance | 60% leading, 40% lagging |
| Weekly review | 30-45 min, every week, no exceptions |
| Attribution lookback | 90d SMB, 180d mid-market, 365d enterprise |
| PQL conversion | 5-15% (vs. 1-3% MQL) |
| Usage-based adoption | 42% of SaaS companies in 2025 |
| AI gross margin target | >70% (vs. ~80% pure SaaS) |
| Expansion at scale | >40% of new ARR from existing customers |
| Slippage target | <15% weekly |
| Speed-to-lead | <5 minutes |

---

#### Imported: 1. Core GTM Metrics Dashboard

### Revenue Metrics

| Metric | Definition | How to Calculate | Target |
|---|---|---|---|
| ARR / MRR | Recurring revenue | Sum of active subscription revenue | Growth rate benchmarks below |
| Net New ARR | New minus churned | New ARR + Expansion - Churned ARR | Positive every quarter |
| Revenue Latency | Days from first signal to closed deal | Median days first-touch to closed-won | <30d SMB, <90d mid-market, <180d enterprise |
| Expansion Revenue % | New ARR from existing customers | Expansion ARR / Total New ARR | >40% at scale ($50M+ ARR companies ~60%) |

### Efficiency Metrics

| Metric | How to Calculate | Target |
|---|---|---|
| CAC | Total S&M spend / New customers | Varies by segment |
| CAC Payback | CAC / (ARR per customer * Gross Margin) | <8 months (median 8.6; top performers 5-7) |
| Magic Number | Net New ARR (qtr) / S&M Spend (prior qtr) | >0.75 efficient, >1.0 excellent, <0.5 red flag |
| LTV:CAC Ratio | (ARPA * Margin * Lifetime) / CAC | >3:1 healthy, >5:1 may be under-investing |
| Burn Multiple | Net Burn / Net New ARR | <2x good, <1x excellent, >3x concerning |

### Pipeline Metrics

| Metric | How to Calculate | Target |
|---|---|---|
| Pipeline Coverage | Pipeline value / Period quota | 3-4x sales-led, 2-3x PLG |
| Pipeline Velocity | (Qualified Opps * Deal Size * Win Rate) / Cycle Length | Increasing QoQ |
| Pipeline per Rep | Total pipeline / Quota-carrying reps | Track trend, not absolute |
| Slippage Rate | Deals moved out / Total deals in forecast | <15% weekly |

### Retention Metrics

| Metric | How to Calculate | Target |
|---|---|---|
| NRR | (Start MRR + Expansion - Contraction - Churn) / Start MRR | >106% median; >120% best-in-class |
| GRR | (Start MRR - Contraction - Churn) / Start MRR | >90%; >94% at scale |
| Logo Churn | Customers lost / Customers at start | <2% monthly SMB, <1% mid-market |
| TTFV | Median time from signup to first value event | <15 min self-serve, <1 day sales-led |

### NRR Benchmarks by Stage

| ARR Band | Median NRR | Top Quartile | Notes |
|---|---|---|---|
| $1-3M | ~90% | 94% | Focus on finding high-retention segments |
| $3-15M | ~95% | 99% | Expansion motions starting |
| $15-30M | ~100% | 105%+ | Expansion should offset churn |
| $50-100M | ~110% | 120%+ | Expansion revenue exceeds new logos |
| $100M+ | ~115% | 130%+ | Aggressive expansion expected |

### Growth Rate Benchmarks

| ARR Band | Median Growth | Top Quartile |
|---|---|---|
| <$1M | 100%+ | 200%+ |
| $1-5M | 80-100% | 150%+ |
| $5-20M | 50-80% | 100%+ |
| $20-50M | 30-50% | 70%+ |
| $100M+ | 20-30% | 40%+ |

---

#### Imported: 2. Funnel Metrics by GTM Motion

### PLG Funnel

```
Visitor --> Signup (3-5%) --> Activation (30-40%) --> Conversion (5-8%) --> Expansion (NRR 110-120%)
```

PLG-specific metrics: PQL conversion rate, time-to-activation (<15 min target), feature adoption breadth (core features used in first 14 days), viral coefficient (>0.3 target).

### Sales-Led Funnel

```
Signal --> Outreach (3-5% reply) --> Meeting (50%) --> Demo (60%) --> Pilot (40%) --> Close (30%)
```

Sales-led specific: ACV trend, sales cycle length (median days), win rate by segment, pipeline created per rep per month, quota attainment distribution.

### Agent-Led Funnel (AI SDR)

```
Signal --> AI Qualification (10-15%) --> Human Meeting (50%) --> Close (35%)
```

Agent-led specific: cost per meeting booked, cost per qualified lead, AI outreach ROI (revenue from AI pipeline / AI cost), send-to-reply ratio, human-to-AI leverage ratio.

---

#### Imported: 3. AI Product-Specific Metrics

AI products carry cost structures that traditional SaaS metrics miss. These supplementary metrics are essential for AI-native businesses.

### AI Cost Metrics

| Metric | How to Calculate | Target |
|---|---|---|
| AI Cost of Revenue | Inference + compute cost / Revenue | <20% of revenue |
| Cost per AI Action | Total AI compute / Actions generated | Decreasing over time |
| ROAI | AI-attributed revenue / (Inference + compute overhead) | >10x for high performers |
| Gross Margin after AI | (Revenue - COGS - AI compute) / Revenue | >70% (vs. ~80% pure SaaS) |

### Usage-Based Pricing Metrics

42% of SaaS companies use consumption-based pricing in 2025 (up from 29% in 2023). When pricing is usage-based, supplement ARR metrics with:

| Metric | Why It Matters |
|---|---|
| Committed vs. Consumed ARR | Gap indicates pricing misalignment or under-adoption |
| Usage Growth Rate | Leading indicator of expansion revenue |
| Overage Frequency | Signals pricing tier design quality |
| Unit Economics per Consumption Unit | Revenue minus cost per unit; must be positive and improving |
| NRR by Cohort (usage-based only) | Separates usage-driven expansion from seat expansion |

### SaaS vs. AI Product Metrics Differences

| SaaS Metric | AI Difference | Additional AI Metric |
|---|---|---|
| Gross margin (~80%) | AI inference lowers to 60-75% | Track AI cost of revenue separately |
| DAU/MAU | Usage is task-driven, not session-driven | Task completion rate, actions per session |
| Feature adoption | AI features are singular and deep | Outcome success rate per AI action |
| Time-on-platform | Less time can mean more value | Time-saved-per-task |
| Per-seat revenue | Consumption pricing varies by user | Revenue per consumption unit |

---

#### Imported: 4. Data Health Scoring

Bad CRM data makes every other metric unreliable. Quantify data trustworthiness before trusting pipeline reports.

### Data Health Score

```
Data Health Score = (Completeness * 0.35) + (Accuracy * 0.30) + (Recency * 0.20) + (Consistency * 0.15)
```

| Component | Weight | What It Measures |
|---|---|---|
| Completeness | 35% | % of required fields populated per record |
| Accuracy | 30% | % of data points verified against enrichment sources |
| Recency | 20% | % of records updated within 90 days |
| Consistency | 15% | % of records matching format standards |

### Health Score Targets

| Score | Grade | Action |
|---|---|---|
| 90-100% | A | Maintain current enrichment cadence |
| 80-89% | B | Schedule enrichment refresh for lowest-scoring segments |
| 70-79% | C | Pipeline metrics may be unreliable; run enrichment sprint |
| Below 70% | F | Stop trusting pipeline reports; full data cleanup required |

B2B data decays at 2.1% monthly on average. Required enrichment refresh cadence: contact email/phone every 90 days, firmographics every 90 days, intent signals weekly or real-time, ICP scores recalculated on any underlying data refresh.

---

#### Imported: 5. Attribution Models

Attribution answers "what caused the deal?" Getting it right determines where you invest next.

### Model Comparison

| Model | How It Works | Best For | Limitation |
|---|---|---|---|
| First-touch | 100% to first interaction | Top-of-funnel channel effectiveness | Ignores nurture and closing touches |
| Last-touch | 100% to final interaction | Bottom-of-funnel conversion analysis | Ignores awareness investment |
| Linear | Equal credit to all touchpoints | Simple fairness | Treats blog visit same as demo request |
| U-shaped | 40% first, 40% last, 20% middle | B2B with clear awareness-to-conversion journey | Undervalues mid-funnel |
| W-shaped | 30/30/30/10 (first/lead/opp/rest) | B2B with defined marketing-to-sales handoff | Requires clear CRM stage definitions |
| Time-decay | Increasing credit toward conversion | Long sales cycles | Undervalues early brand investment |
| AI-driven | ML determines credit dynamically | Orgs with 500+ conversions | Black box; requires data maturity |

### Choosing by Company Stage

| Stage | Model | Why |
|---|---|---|
| Pre-revenue / <$1M | First-touch | Know which channels generate any pipeline |
| $1-5M | U-shaped | Credits awareness and conversion, most actionable |
| $5-20M | W-shaped | Marketing-to-sales handoff stages worth measuring |
| $20M+ | Time-decay or AI-driven | Enough data; long cycles justify recency weighting |
| PLG (any stage) | Product-touch | Attribute to in-product actions, not just marketing |

### Attribution Lookback Windows

Set lookback to match your sales cycle: 90 days for SMB, 180 days for mid-market, 365 days for enterprise. Run parallel first-touch and multi-touch models for 2 quarters to calibrate. Review quarterly.

### AI GTM Attribution Challenges

| Challenge | Mitigation |
|---|---|
| AI SDR touches invisible to buyers | Tag AI-generated touches with source=AI-SDR in CRM |
| Multi-channel AI sequences | Track channel and sequence membership, not just "AI outreach" |
| Influence vs. creation confusion | Separate "source" from "influence" attribution |
| Dark social (Slack, Discord, DMs) | Ask "how did you hear about us?" in demo forms |

---

#### Imported: 6. Dashboard Architecture

### Three-Tier Hierarchy

**Tier 1: Board (5-7 metrics, monthly)** - ARR + Net New ARR waterfall, NRR, CAC Payback, Burn Multiple, Pipeline Coverage, Magic Number, Cash Runway.

**Tier 2: Executive (10-12 metrics, weekly)** - Pipeline created, pipeline by stage, win rate by segment, deal size trend, sales cycle length, quota attainment by rep, NRR by cohort, CAC by channel, TTFV, data health score, slippage rate.

**Tier 3: Operator (15-25 metrics, daily)** - Activity (emails, calls, meetings booked), pipeline (new opps, stage movements), response (speed-to-lead, follow-up rate), conversion (stage-by-stage rates), quality (ICP fit distribution), AI ops (AI messages, AI reply rate, cost per meeting).

### Tool Selection

| Tool | Best For | Cost |
|---|---|---|
| HubSpot Dashboards | Teams already on HubSpot | Included |
| Metabase | SQL-native, self-hosted | Free |
| Looker | Enterprise-grade, governed | $$$ |
| Mode | SQL + Python + viz | $$ |
| Google Sheets | Solo founders, pre-revenue | Free |

### Dashboard Anti-Patterns

| Anti-Pattern | Fix |
|---|---|
| 50+ metrics on one screen | Limit to tier-appropriate count |
| Vanity metrics without context | Every metric needs benchmark, target, or trend line |
| Manual data entry | All metrics from system-of-record APIs |
| No dashboard owner | Named owner + review schedule required |
| Snapshot without trend | Always show trailing 4-week or 13-week trend |

---

#### Imported: 7. Leading vs. Lagging Indicators

Maintain a 60/40 balance: 60% leading indicators (what is about to happen) and 40% lagging indicators (what already happened).

### Leading Indicators

| Indicator | Predicts | If Declining |
|---|---|---|
| Pipeline created this week | Revenue 1-2 quarters out | Increase top-of-funnel investment |
| Meeting conversion rate | Win rate next quarter | Audit qualification and demo quality |
| Speed-to-lead | Inbound conversion rate | Fix routing (<5 min target) |
| Product activation rate | Free-to-paid conversion | Audit onboarding flow |
| Sequence reply rate | Meeting volume next month | Refresh messaging and targeting |
| Feature adoption depth | NRR next quarter | Proactive CS intervention |
| Champion engagement frequency | Deal probability | Deal is at risk if champion goes quiet |

### Lagging Indicators

Revenue, win rate, CAC/payback, NRR/GRR, LTV:CAC, burn multiple, quota attainment distribution. Review monthly or quarterly.

### The Leading-to-Lagging Chain

```
Revenue (lagging)
  <-- Win Rate
    <-- Demo Quality Score (leading)
    <-- ICP Fit Score of Pipeline (leading)
  <-- Pipeline Volume
    <-- Meetings Booked (leading)
      <-- Outreach Volume + Reply Rate (leading)
  <-- Deal Size
    <-- Multi-threading Depth (leading)
```

---

#### Imported: 8. Weekly GTM Review Cadence

### The Weekly Meeting (30-45 Minutes)

The single most important GTM operating ritual. Every metric from system-of-record data. No hand-edited slides.

| Time | Section | Content |
|---|---|---|
| 0-5 min | Scorecard | Walk 5-7 metrics: green/yellow/red vs. targets |
| 5-15 min | Pipeline | New pipeline, stage movements, slippage, forecast changes |
| 15-20 min | Leading indicators | Inbound volume, outreach metrics, meeting conversion |
| 20-25 min | Deals at risk | Stalled deals, blockers, help requests |
| 25-35 min | Actions | 2-3 specific actions with owners and deadlines |
| 35-45 min | Deep-dive | One strategic topic per week (rotating) |

### Weekly Scorecard

| Metric | This Week | Last Week | 4-Wk Avg | Target | Status | Owner |
|---|---|---|---|---|---|---|
| Pipeline created | $X | $X | $X | $X | G/Y/R | Name |
| Meetings booked | X | X | X | X | | Name |
| Win rate (30d) | X% | X% | X% | X% | | Name |
| Cycle length | Xd | Xd | Xd | Xd | | Name |
| Slippage rate | X% | X% | X% | <15% | | Name |
| Speed-to-lead | Xm | Xm | Xm | <5m | | Name |

### Monthly Deep-Dives

NRR/retention analysis (cohort curves, churn reasons, expansion pipeline), CAC/efficiency review (CAC by channel, payback trend, Magic Number), data health audit (CRM completeness, enrichment gaps), competitive update (pricing, positioning, feature changes).

### Quarterly Strategic Reviews

ICP refresh (win/loss analysis, drift detection, scoring update), funnel benchmarking (stage conversions vs. industry), attribution model review (channel ROI, budget allocation), GTM motion evaluation (sales-led vs. PLG vs. agent performance).

---

#### Imported: 9. PQL Scoring

Product-Qualified Leads replace MQLs in product-led and hybrid motions. Score on product usage instead of content downloads.

### PQL Scoring Model

```
PQL Score = (Usage Signals * 0.50) + (Fit Signals * 0.30) + (Intent Signals * 0.20)
```

| Score | Tier | Action |
|---|---|---|
| 80-100 | Hot | Route to AE, respond within 4 hours |
| 60-79 | Warm | Sales-assist sequence (email + SDR) |
| 40-59 | Nurture | In-app messaging + drip emails |
| Below 40 | Self-serve | No sales touch; optimize product experience |

PQL-to-customer conversion: 5-15% (vs. 1-3% MQL-to-customer). Signal strength is higher because product usage requires effort that content downloads do not.

---

#### Imported: Questions to Ask

1. What metrics does your team review weekly today, and who owns each one?
2. What is your current pipeline coverage ratio, and do you trust the data behind it?
3. How do you measure time-to-first-value for new customers?
4. What is your CAC payback period, and is it trending up or down?
5. What percentage of new ARR comes from expansion vs. new logos?
6. How complete is your CRM data? Could you run a data health audit this week?
7. What attribution model are you using, and when was it last reviewed?
8. Do you have separate funnel metrics for each GTM motion?
9. What is your current NRR, and how does it break down by segment?
10. How do you score and prioritize PQLs vs. MQLs?
11. What does your AI inference cost look like as a percentage of revenue?
12. Do you track leading indicators separately from lagging indicators?
13. What is your average speed-to-lead for inbound demo requests?
14. When did you last benchmark funnel conversion rates against industry standards?
15. Do you have a defined weekly GTM review cadence with a scorecard?

---
