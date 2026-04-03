# Retention Metrics Glossary

Use these definitions consistently before comparing periods, segments, or teams.

## Core formulas

### Gross Revenue Retention (GRR)

```text
GRR = (Starting recurring revenue - contraction - churn) / Starting recurring revenue × 100
```

- excludes expansion
- answers: how much existing recurring revenue did we keep before upsell effects?

### Net Revenue Retention (NRR)

```text
NRR = (Starting recurring revenue + expansion - contraction - churn) / Starting recurring revenue × 100
```

- includes expansion
- answers: did the existing base grow or shrink before adding new customers?

### Logo retention

```text
Logo retention = Customers retained / Customers at start of period × 100
```

### Revenue churn

Use a clear label for the calculation in use:

- **gross revenue churn:** `(contraction + churn) / starting recurring revenue`
- **net revenue churn:** `(contraction + churn - expansion) / starting recurring revenue`

## Component definitions

- **Starting recurring revenue:** recurring revenue from a fixed opening cohort.
- **Expansion:** added revenue from that same cohort through seats, usage, add-ons, cross-sell, or tier upgrades.
- **Contraction:** reduced recurring revenue from downgrades, lower seats, lower usage, credits, or partial product removal.
- **Churn:** recurring revenue lost from customers in the starting cohort that fully leave.
- **Involuntary churn:** customer loss due to payment failure, billing friction, procurement delay, or avoidable administrative failure.
- **Time to first value (TTFV):** elapsed time from customer start to first meaningful value event.

## Consistency checks

Before reporting retention metrics, confirm:

1. the starting cohort is fixed
2. the time period is fixed
3. upgrades and downgrades are treated consistently
4. pauses, credits, write-offs, and FX are handled consistently
5. internal board/investor definitions match the working definition

## Cautions

- Benchmarks vary by segment, pricing model, ACV, contract term, and accounting treatment.
- Do not compare self-serve monthly SaaS directly with enterprise annual contracts without qualification.
- High NRR can mask weak GRR. Review both.

## Source-informed references

- OpenView: operator-friendly explanation of NRR/NDR
- Corporate Finance Institute: formula and component definitions
- Salesforce: customer retention framing and calculation guidance
