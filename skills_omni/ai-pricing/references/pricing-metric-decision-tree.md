# Pricing Metric Decision Tree

Use this reference to choose the customer-facing pricing model without confusing it with internal provider billing.

## Step 1: Separate two different questions

### A. What creates customer value?
Examples:
- seat productivity
- task completed
- document processed
- support resolution
- conversation handled
- report delivered
- business outcome achieved

### B. What drives your internal cost?
Examples:
- tokens
- model calls
- tool calls
- retries
- human review
- support effort

Do not assume A and B should be the same.

## Decision tree

```text
START
  |
  |-- Is the buyer primarily technical and expecting raw metering?
  |      |
  |      |-- YES --> Consider consumption or credits
  |      |
  |      |-- NO --> Continue
  |
  |-- Is customer value tied to a human user being augmented?
  |      |
  |      |-- YES --> Consider per-seat, usually with included usage or credits
  |      |
  |      |-- NO --> Continue
  |
  |-- Is there a clear, countable workflow or task?
  |      |
  |      |-- YES --> Consider workflow pricing
  |      |
  |      |-- NO --> Continue
  |
  |-- Is there a measurable and attributable outcome?
         |
         |-- YES --> Consider outcome pricing
         |
         |-- NO --> Use a simpler proxy metric such as seat, capacity, or credits
```

## Default recommendations by archetype

| Archetype | Common external metric | Common internal meter | Notes |
| --- | --- | --- | --- |
| API / platform | API call, token, compute, credits | tokens, model calls, infra cost | Exposing usage is usually acceptable for developer buyers |
| Copilot | seat, seat + credits, seat + premium actions | tokens, premium model mix, support | Raw token pricing is usually too low-level for business users |
| Agent | workflow, task, resolution, conversation, outcome | tokens, retries, escalations, tool calls | Add minimums or platform fees when usage volatility is high |
| AI-enabled service | retainer, project, deliverable | delivery labor, model mix, revision rate | Package value, not low-level compute |

## When credits help

Use credits when:
- task types vary in cost
- you want one package across multiple features
- you need flexibility as provider costs change
- direct token pricing would confuse buyers

Avoid credits when:
- the product has one simple usage unit
- the buyer expects transparent direct metering
- the abstraction would create more confusion than clarity

## Red flags

- Customers cannot predict what a bill means.
- Sales needs long explanations for every quote.
- Finance models in tokens, then invoices customers in tokens, even though customers buy outcomes.
- Outcome pricing is proposed without a hard definition of success and failure states.
