# Funnel Metrics Scorecard

Use this scorecard to define the smallest useful set of GTM metrics.

## Minimum Event Set

| Event or field | Why it matters | Review cadence |
| --- | --- | --- |
| acquisition source | explains where qualified demand comes from | weekly |
| signup or lead created | top of measurable funnel | weekly |
| activation event | indicates real product value was reached | weekly |
| time to first value | shows onboarding friction | weekly |
| demo booked | measures sales intent | weekly |
| demo attended | reveals scheduling and qualification quality | weekly |
| payment started | reveals checkout intent | weekly |
| payment completed | revenue conversion point | weekly |
| lost reason | explains sales friction | weekly |
| churn or cancel reason | explains retention friction | weekly |
| support contact | detects onboarding or product clarity problems | weekly |
| founder hours by channel | shows leverage and bottlenecks | weekly |

## Metric Definitions

### Activation rate

Percentage of new signups or leads that reach the defined activation event.

### Time to first value

Median time between signup and activation.

### Qualified lead rate

Percentage of inbound or outbound leads that match ICP and should receive active follow-up.

### Demo-to-close rate

Percentage of qualified attended demos that convert to paid.

### Paid conversion rate

Percentage of activated users or qualified opportunities that become paying customers.

### Churn rate

Percentage of paying customers who cancel in the period being reviewed.

### Revenue per founder-hour

Revenue generated relative to founder time spent on GTM and support work.

## Review Rules

- if activation is unclear, do not trust conversion analysis
- if lost reasons are missing, do not trust sales diagnosis
- if founder hours are not tracked, do not assume a channel is efficient
- if support volume is high, inspect onboarding before blaming team size

## Red Flag Patterns

| Pattern | Interpretation | First response |
| --- | --- | --- |
| more signups, same activation | acquisition is outrunning onboarding | fix first-session friction |
| many demos, low close | qualification or ROI framing is weak | tighten discovery and buyer fit |
| many trial starts, low payment completion | pricing or checkout friction | simplify plans or checkout path |
| high support volume after signup | onboarding confusion | improve docs, UI, and guided setup |
| founder hours rising faster than revenue | GTM motion lacks leverage | cut channels or automate repeatable work |
