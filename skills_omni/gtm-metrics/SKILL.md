---
name: "gtm-metrics"
description: "GTM metrics, dashboards, and measurement workflow for AI products. Use this skill when you need to select the right GTM metrics, define a trusted metric dictionary, design board/executive/operator dashboards, evaluate funnel efficiency, review attribution choices, or track AI-specific unit economics such as usage, inference cost, margin, and time-to-first-value. Do not use it for instrumentation implementation, code review, or software architecture."
version: "0.0.1"
category: "development"
tags:
  - "gtm-metrics"
  - "dashboard"
  - "measurement"
  - "attribution"
  - "pipeline"
  - "cac"
  - "nrr"
  - "ttfv"
  - "ai-unit-economics"
  - "revenue-operations"
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
upstream_skill: "skills/gtm-metrics"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# GTM Metrics, Dashboards & Measurement for AI Products

## Overview

Use this skill to build a decision-ready GTM measurement system for an AI product.

It helps the operator:

- choose the right metrics based on GTM motion, pricing model, and company stage
- define each metric unambiguously before comparing numbers across tools
- separate board, executive, and operator dashboards
- connect acquisition, activation, revenue, retention, and AI cost structure
- run weekly and monthly review cadences that end with actions, owners, and follow-up dates

This skill is about measurement design and operating discipline, not technical implementation. If the user asks for event instrumentation, warehouse modeling, CRM automation, dashboard code, or application architecture, hand off to a more implementation-focused skill.

This skill preserves the original upstream intent while upgrading it into an operational workflow kit suitable for repeatable use by agents.

## When to Use This Skill

Use this skill when the request involves any of the following:

- defining GTM metrics for a new or changing sales motion
- building or restructuring a GTM dashboard
- selecting a north-star metric and driver metrics
- measuring pipeline efficiency, funnel conversion, or revenue latency
- evaluating CAC, CAC payback, Magic Number, LTV:CAC, burn multiple, NRR, GRR, or churn
- measuring product activation, PQLs, TTFV, or usage-to-revenue alignment
- adding AI-specific metrics such as inference cost, cost per successful action, or gross margin after AI costs
- deciding how attribution should be measured and interpreted
- assessing whether CRM, analytics, and billing data are trustworthy enough for decisions
- designing weekly GTM reviews, monthly deep-dives, or quarterly metric governance

Do **not** use this skill when the main task is:

- implementing tracking or analytics code
- building dashboards in a specific BI tool
- debugging SQL, ETL, APIs, or CRM syncs
- reviewing architecture or software design
- handling legal, tax, accounting, or privacy compliance as the primary workstream

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New measurement system | Workflow Steps 1-4 | Prevents dashboard sprawl and starts with business model classification |
| Metrics disagree across tools | `references/metric-definition-cards.md` and `references/data-health-audit-checklist.md` | Forces source-of-truth, window, and definition alignment before analysis |
| Board deck needs metrics | `references/dashboard-tiering-guide.md` | Keeps board reporting high-signal and free of operator noise |
| AI product margin questions | `references/ai-unit-economics-guide.md` | Connects usage, revenue, cost, and success events |
| Attribution debate | `references/attribution-model-selection.md` | Separates source attribution from influence attribution and aligns lookback windows |
| Weekly operating review | `examples/weekly-gtm-review-template.md` | Converts scorecards into actions, owners, and next checks |
| Unsure which metrics to pick | `examples/metric-selection-by-motion.md` | Gives a safe starter set by motion and pricing model |
| Need a dashboard specification | `examples/dashboard-spec-example.md` | Shows a reusable spec with targets, owners, and thresholds |
| Task drifts into pricing, SDR, or retention specialization | `agents/related-skill-router.md` | Helps hand off cleanly without losing context |

## Workflow

### 1. Classify the business before choosing metrics

Capture the minimum context first:

- GTM motion: PLG, sales-led, hybrid, partner-led, or agent-led
- pricing model: seat-based, usage-based, outcome-based, or hybrid
- company stage: pre-revenue, early ARR, growth, scale
- typical ACV and sales cycle length
- primary source systems: CRM, billing, product analytics, BI, finance
- review audience: board, exec team, operators, or mixed
- current pain: growth efficiency, retention, attribution, activation, margin, or data trust

Do not start with a giant dashboard. Start by deciding what decisions the team must make weekly, monthly, and quarterly.

### 2. Select one north-star metric and 3-5 driver metrics

Pick one primary metric that reflects delivered value and business progress. Then choose a small set of drivers.

A practical sequence:

1. North-star metric
2. 3-5 leading driver metrics
3. core lagging outcome metrics
4. guardrail metrics
5. dashboard layout by audience

Examples:

- PLG AI product: activated accounts, TTFV, free-to-paid conversion, retained usage, AI gross margin
- Sales-led AI product: pipeline created, win rate, cycle length, CAC payback, NRR
- Usage-based AI product: consumed revenue, committed vs. consumed gap, cost per successful action, retained usage, gross margin after AI

Use `examples/metric-selection-by-motion.md` if the correct starter set is unclear.

### 3. Define every metric before comparing any number

Create a metric definition card for each important metric using `references/metric-definition-cards.md`.

For every metric, document:

- business purpose
- formula
- numerator and denominator
- grain: account, user, opportunity, month, cohort, etc.
- time window and lookback
- segmentation rules
- exclusions
- owner
- system of record
- refresh cadence
- caveats

Minimum source-of-truth precedence:

- CRM for pipeline and stage movement
- billing/finance for invoiced or recognized revenue
- product analytics for activation and product-touch behavior
- finance for board-grade revenue reporting

If the same metric differs across systems, stop and reconcile definitions before drawing conclusions.

### 4. Run a data health gate before benchmarking or board reporting

Use `references/data-health-audit-checklist.md`.

Treat data health as a decision gate:

- **90-100**: suitable for most strategic decisions
- **80-89**: usable with caveats; repair weak segments soon
- **70-79**: directional only; avoid strong benchmark claims
- **below 70**: pause strategic conclusions and clean data first

Review at least:

- field completeness
- stage/date recency
- duplicate rates
- attribution field coverage
- required lifecycle timestamps
- billing-to-CRM joins
- product-account identity mapping

Do not publish confident funnel or attribution insights from low-trust data.

### 5. Build the metric set by domain

Choose only metrics tied to actual decisions.

#### Revenue and efficiency

Common metrics:

- ARR / MRR
- net new ARR
- revenue latency
- CAC
- CAC payback
- Magic Number
- LTV:CAC
- burn multiple

Use stage-aware benchmarks as directional references, not universal truth.

#### Pipeline and funnel

Common metrics:

- pipeline coverage
- pipeline velocity
- stage conversion rates
- pipeline per rep
- slippage rate
- speed-to-lead
- reply-to-meeting and meeting-to-opportunity conversion

#### Retention and activation

Common metrics:

- NRR
- GRR
- logo churn
- TTFV
- activation rate
- retained usage by cohort
- PQL conversion rate

#### AI-specific unit economics

Use `references/ai-unit-economics-guide.md`.

Add metrics that traditional SaaS dashboards often miss:

- AI cost of revenue
- cost per AI action
- cost per successful action
- gross margin after AI costs
- outcome success rate per AI action
- committed vs. consumed revenue
- unit economics per consumption unit
- usage growth as a leading indicator for expansion

For AI products, pair volume metrics with value and margin metrics. More usage is not automatically better if cost or low-quality output erodes economics.

### 6. Design dashboards by audience, not by tool

Use `references/dashboard-tiering-guide.md`.

Separate dashboards into tiers:

- **Board:** 5-7 metrics, monthly or quarterly, strategic and trend-heavy
- **Executive:** 8-12 metrics, weekly, ties outcomes to drivers
- **Operator:** 15-25 metrics, daily or weekly, workflow and intervention oriented

Every displayed metric should have:

- current value
- trend line
- target
- owner
- action threshold

If a metric has no likely decision attached to it, remove it.

### 7. Choose attribution deliberately and document its limits

Use `references/attribution-model-selection.md`.

Attribution is model-dependent. Do not compare outputs from different tools unless these are aligned first:

- lookback window
- touchpoint eligibility
- stage definitions
- source taxonomy
- account/contact matching logic

Operational guidance:

- use first-touch when top-of-funnel source efficiency is the main question
- use U-shaped or W-shaped when handoff stages matter
- use time-decay for longer cycles where recency matters
- use product-touch attribution for PLG and hybrid motions
- run two models in parallel for a calibration period when changing models
- separate **source attribution** from **influence attribution**
- tag AI-assisted touches explicitly instead of hiding them inside generic outreach activity

### 8. Set a weekly and monthly review cadence

Use `examples/weekly-gtm-review-template.md`.

Weekly review format:

1. confirm data freshness and trust notes
2. review scorecard versus targets and recent trend
3. inspect the largest movement, not every movement
4. diagnose likely causes using driver metrics
5. assign 2-3 actions with owners and deadlines
6. record assumptions that need validation next week

Monthly deep-dives should cover one strategic topic at a time, such as:

- CAC by channel and segment
- NRR and expansion by cohort
- TTFV and activation path analysis
- AI gross margin trend and cost drift
- attribution calibration and channel investment changes
- data health audit and cleanup plan

Quarterly, review whether the metric system itself still matches the GTM motion and pricing model.

### 9. Produce the final deliverable in a reusable format

The final recommendation should normally include:

- business context summary
- chosen north-star metric
- driver metrics and lagging metrics
- source-of-truth notes
- dashboard tier recommendation
- attribution recommendation if relevant
- data health caveats
- review cadence
- next 2-5 actions

When possible, write the output as a compact scorecard or dashboard spec rather than vague advice.

## Examples

### Example 1: Define a metric system for a sales-led AI company

```text
Use @gtm-metrics to design a weekly GTM scorecard for a sales-led AI product at $8M ARR. Start by classifying motion, pricing, stage, and data systems. Then propose 1 north-star metric, 5 driver metrics, board/executive/operator dashboard tiers, and a weekly review cadence. Flag any data trust assumptions explicitly.
```

Expected outcome:

- a short intake summary
- a recommended metric stack
- dashboard tiers with metric counts
- a weekly operating cadence
- explicit caveats around attribution or CRM quality

### Example 2: Reconcile conflicting numbers across systems

```text
Use @gtm-metrics to reconcile why pipeline coverage differs between Salesforce, BI, and the board slide. Build metric definition cards for pipeline coverage and pipeline created, identify the system of record, compare date windows and exclusions, and recommend one reporting definition going forward.
```

Expected outcome:

- definition mismatch diagnosis
- one chosen source-of-truth definition
- a list of fields or filters causing disagreement
- a reporting governance fix

### Example 3: Evaluate AI unit economics for a usage-based product

```text
Use @gtm-metrics to assess GTM measurement for a usage-based AI product. Include committed vs consumed revenue, retained usage, AI cost of revenue, cost per successful action, and gross margin after AI. Recommend what belongs on the exec dashboard versus the operator dashboard.
```

Expected outcome:

- usage-to-revenue alignment metrics
- margin and cost visibility recommendations
- dashboard tier split by audience
- warning if usage growth is not translating into value or margin

### Example 4: Build a weekly review packet

```text
Use @gtm-metrics to turn our current KPIs into a weekly review packet. Limit the scorecard to 6 core metrics, identify the owner of each metric, define green/yellow/red thresholds, and end with 3 actions and a next-review date.
```

Expected outcome:

- a concise scorecard
- owners and thresholds
- action-oriented review output rather than passive reporting

See also:

- `examples/metric-selection-by-motion.md`
- `examples/dashboard-spec-example.md`
- `examples/weekly-gtm-review-template.md`

## Best Practices

### Do

- start with GTM motion, pricing model, and stage before selecting metrics
- choose one north-star metric and a small driver set before building dashboards
- define each metric in a shared dictionary before comparing tool outputs
- assign a clear system of record for each metric domain
- separate board, executive, and operator dashboards
- pair leading and lagging indicators
- pair AI usage metrics with outcome and margin metrics
- run attribution models with aligned windows and touch rules
- treat benchmark values as directional and segment-dependent
- use aggregated reporting by default when sharing widely
- document caveats for inferred or probabilistic metrics such as AI lead scoring or model-driven attribution
- end every review with owners, deadlines, and next inspection dates

### Do not

- start with a 50-metric dashboard
- compare CRM, web analytics, and BI outputs before definitions are aligned
- treat attribution as objective truth independent of model choice
- use board dashboards as operator dashboards
- optimize for usage growth alone if quality, value realization, or gross margin are deteriorating
- present low-trust data as board-grade truth
- expose unnecessary PII in dashboards, exports, or review docs
- rely on a metric that has no owner or action threshold

## Troubleshooting

### Problem: The dashboard has too many metrics and nobody acts on it

**Symptoms:** There are dozens of charts, meetings turn into reporting sessions, and no metric changes lead to clear next steps.

**Solution:** Rebuild the dashboard from decisions backward. Pick one north-star metric, 3-5 drivers, and a small set of lagging metrics. Split views by board, executive, and operator audience using `references/dashboard-tiering-guide.md`.

### Problem: The same metric disagrees across CRM, BI, and analytics tools

**Symptoms:** Pipeline coverage, conversion rate, or attribution results vary by report and the team argues about whose dashboard is correct.

**Solution:** Create a metric definition card, identify the system of record, and align grain, windows, exclusions, and source taxonomy. Do not compare outputs until those are matched. Use `references/metric-definition-cards.md`.

### Problem: Attribution reports conflict and budget decisions are stalled

**Symptoms:** First-touch, multi-touch, and web analytics reports point to different winning channels.

**Solution:** Align lookback windows and touch rules first, then run at least two attribution views in parallel for a calibration period. Separate source attribution from influence attribution. Use `references/attribution-model-selection.md`.

### Problem: Revenue is growing but AI gross margin is collapsing

**Symptoms:** Consumption or ARR is rising, but inference spend, compute spend, or support overhead is rising faster.

**Solution:** Add AI cost of revenue, cost per successful action, and gross margin after AI to the executive review. Segment by customer, use case, and model/provider where possible. Use `references/ai-unit-economics-guide.md`.

### Problem: Pipeline looks healthy but the underlying CRM data is weak

**Symptoms:** Coverage ratios look fine, but lead source, stage dates, owner fields, or lifecycle timestamps are incomplete or stale.

**Solution:** Run the data health audit before using the metrics in planning or board reporting. If trust is below threshold, treat the analysis as directional only and prioritize cleanup. Use `references/data-health-audit-checklist.md`.

### Problem: The team reviews metrics every week but nothing changes

**Symptoms:** The scorecard is read aloud, but actions are vague, owners are missing, and the same issues recur every week.

**Solution:** Use the weekly review template and require each review to end with 2-3 actions, owners, due dates, and a next validation point. Remove metrics that never trigger decisions.

### Problem: Board reporting is overloaded with operator detail

**Symptoms:** Board materials include rep-level activity, daily campaign swings, or highly volatile operational metrics.

**Solution:** Move detailed funnel and activity metrics to the operator dashboard. Keep the board view to a small set of strategic outcome and efficiency metrics with trend context.

## Additional Resources

### Local references

- [Metric definition cards](references/metric-definition-cards.md)
- [Dashboard tiering guide](references/dashboard-tiering-guide.md)
- [Attribution model selection](references/attribution-model-selection.md)
- [Data health audit checklist](references/data-health-audit-checklist.md)
- [AI unit economics guide](references/ai-unit-economics-guide.md)

### Local examples

- [Weekly GTM review template](examples/weekly-gtm-review-template.md)
- [Metric selection by motion](examples/metric-selection-by-motion.md)
- [Dashboard spec example](examples/dashboard-spec-example.md)

### Upstream context preserved from the original skill

Preserved source themes from the original workflow include:

- core GTM dashboard metrics
- funnel metrics by GTM motion
- AI product-specific metrics
- data health scoring
- attribution model comparisons
- dashboard architecture
- leading versus lagging indicators
- weekly GTM review cadence
- PQL scoring

## Related Skills

- `@ai-pricing` for pricing design, packaging, and monetization changes
- `@ai-sdr` for outbound workflow design and AI SDR operating metrics beyond dashboard selection
- `@ai-cold-outreach` for sequence, messaging, and outbound performance design
- retention or expansion-focused skills for churn reduction, expansion playbooks, and customer lifecycle interventions
- analytics or BI implementation skills when the task becomes instrumentation, SQL, ETL, or dashboard build work
