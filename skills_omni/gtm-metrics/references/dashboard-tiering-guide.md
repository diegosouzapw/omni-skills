# Dashboard Tiering Guide

Design dashboards by decision audience, not by which charts are easy to build.

## Tier summary

| Tier | Audience | Metric count | Review cadence | Typical decisions |
| --- | --- | --- | --- | --- |
| Board | Board, founders, investors | 5-7 | Monthly or quarterly | Capital allocation, GTM strategy, growth efficiency, retention health |
| Executive | Leadership team | 8-12 | Weekly | Channel mix, headcount efficiency, forecast risk, activation and retention priorities |
| Operator | Sales, marketing, growth, revops, CS | 15-25 | Daily or weekly | Routing, follow-up, stage conversion, campaign and onboarding interventions |

## Board dashboard

Keep this view strategic and stable.

Recommended metrics:

- ARR / MRR trend
- net new ARR waterfall
- NRR
- CAC payback or Magic Number
- burn multiple
- pipeline coverage
- cash or runway context when relevant

Do not include rep-level activity or daily volatility here.

## Executive dashboard

This view should connect lagging outcomes to leading drivers.

Recommended metrics:

- pipeline created
- pipeline by stage
- win rate by segment
- sales cycle length
- CAC by major channel or segment
- NRR by cohort or segment
- activation or TTFV
- data health score
- slippage rate
- AI gross margin after AI costs for AI-native products

## Operator dashboard

This view should help teams intervene in-flight.

Recommended metrics:

- activity volumes
- response times
- stage-to-stage conversion
- follow-up rates
- pipeline aging
- speed-to-lead
- PQL flow and response times
- AI outreach performance
- cost per meeting or cost per qualified lead
- feature adoption depth where relevant

## Required fields for any displayed metric

Every metric shown on a dashboard should include or link to:

- current value
- target
- trend line or recent history
- owner
- action threshold
- source system

## Common anti-patterns

| Anti-pattern | Why it fails | Better approach |
| --- | --- | --- |
| One dashboard for everyone | Creates overload and mixed decision horizons | Separate board, executive, and operator views |
| 50+ metrics on one screen | Hides true priorities | Reduce to metrics tied to real decisions |
| Snapshot only | No trend context | Show trailing 4-week, 13-week, or cohort trend |
| No owner | No action follows | Assign a metric owner and review cadence |
| Vanity metrics | Looks active but changes nothing | Keep only metrics with thresholds and actions |

## Practical rule

If a metric does not change a likely decision for that audience, it does not belong on that tier.
