# Related Skill Router

Use this router when the request begins in GTM measurement but shifts beyond this skill's core scope.

## Stay in `@gtm-metrics` when

- the main task is metric selection
- the work is dashboard scope and hierarchy design
- the question is about funnel measurement, attribution interpretation, or review cadence
- the user needs AI-specific unit economics added to GTM reporting
- the main deliverable is a scorecard, dashboard spec, or metric dictionary

## Hand off when

### Pricing becomes the main task

Route to `@ai-pricing` when the user is redesigning packaging, pricing, monetization, or consumption tiers rather than measuring them.

### Outbound workflow becomes the main task

Route to `@ai-sdr` or `@ai-cold-outreach` when the user needs help with sequence design, messaging, targeting, or outbound execution details.

### Retention playbooks become the main task

Route to a retention or expansion-focused skill when the user is no longer defining NRR/churn metrics and instead needs intervention design.

### Analytics implementation becomes the main task

Hand off to implementation-focused analytics, BI, data, or CRM skills when the user needs:

- event instrumentation
- SQL or warehouse work
- ETL or sync debugging
- dashboard build implementation
- data model or architecture changes

## Handoff note template

```text
This request started in GTM measurement, but the next step is primarily [pricing / outbound execution / retention operations / analytics implementation]. I am handing off after preserving the metric definitions, source-of-truth notes, dashboard audience, and data quality caveats established here.
```
