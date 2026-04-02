# Unit Economics Worksheet

Use this worksheet before recommending pricing, repricing, or margin targets.

## 1. Product context

- Product archetype: copilot / agent / API-platform / AI-enabled service
- Primary buyer:
- Sales motion: self-serve / sales-assisted / enterprise
- Current pricing model:
- Proposed pricing model:

## 2. External billable metric vs internal cost meter

| Type | Definition | Example |
| --- | --- | --- |
| Customer-facing billable metric | What appears on packaging and invoices | seat, resolved ticket, document, API call, credits |
| Internal cost meter | What finance and operations use to model cost | input tokens, output tokens, model calls, retries, human review minutes |

Write both explicitly:

- External billable metric:
- Internal cost meter(s):

## 3. Usage assumptions

Capture both average and tail behavior.

| Input | Average | p95 | p99 | Notes |
| --- | --- | --- | --- | --- |
| Tasks or billable units per customer per month |  |  |  |  |
| Input tokens per task |  |  |  |  |
| Output tokens per task |  |  |  |  |
| Model or provider mix |  |  |  |  |
| Retry rate |  |  |  |  |
| Tool-call frequency |  |  |  |  |
| Cache hit rate |  |  |  |  |
| Human-review rate |  |  |  |  |
| Support burden |  |  |  |  |

## 4. Revenue model

For each tier or package, define:

| Tier | Base revenue | Included usage | Overage / variable revenue | Annual or prepaid incentive |
| --- | --- | --- | --- | --- |
| Starter |  |  |  |  |
| Pro |  |  |  |  |
| Enterprise |  |  |  |  |

## 5. Variable cost model

Use live provider pricing inputs before filling this out.

| Cost component | Per unit estimate | Source / assumption |
| --- | --- | --- |
| AI inference cost |  |  |
| Tooling or retrieval cost |  |  |
| Human review or operations cost |  |  |
| Support / servicing cost |  |  |
| Other variable delivery cost |  |  |

## 6. Formula

Use this base formula:

```text
Revenue per customer or cohort
- AI variable cost
- delivery / support variable cost
= contribution margin

Contribution margin / revenue = gross margin %
```

For per-unit analysis:

```text
Revenue per billable unit
- AI cost per billable unit
- delivery cost per billable unit
= unit contribution
```

## 7. Sensitivity checks

Run at least these scenarios:

- base case
- high-usage case
- expensive-model case
- lower-cache / higher-retry case
- enterprise discount case

## 8. Decision questions

- Does the package stay healthy at p95 usage?
- Are heavy users underpriced?
- Is the billable metric easy for customers to understand?
- Are overages too sharp and likely to create bill shock?
- Would a hybrid base + usage package improve both predictability and margin?
- Are enterprise discounts erasing the value of the package?

## 9. Recommendation summary

- Recommended metric:
- Recommended tiers:
- Expected strengths:
- Main margin risks:
- Required controls:
- Repricing or migration needed: yes / no
