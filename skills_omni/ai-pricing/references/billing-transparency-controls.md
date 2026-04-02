# Billing Transparency and Spend Controls

Use these patterns when usage variability could create customer fear, internal margin risk, or invoice disputes.

## Principles

- Customers should understand what is billed.
- Customers should understand what is not billed.
- Customers should be able to predict spend before the invoice arrives.
- Controls should encourage adoption, not punish exploration.

## Useful control patterns

| Pattern | What it does | Best for |
| --- | --- | --- |
| Included usage | Gives a predictable baseline before overages | Hybrid plans, new-product adoption |
| Soft cap alert | Warns before more usage is billed | Self-serve products |
| Hard cap | Stops or throttles usage at a defined limit | Budget-sensitive accounts |
| Prepaid credits | Creates budget certainty and upfront commitment | Usage-heavy products |
| Annual commit | Improves predictability for both parties | Sales-assisted and enterprise deals |
| Overage preview | Shows expected incremental cost before usage continues | Sensitive or expensive workflows |
| Non-billable failure states | Avoids disputes when the task does not complete | Workflow and outcome pricing |

## What to define explicitly

Document:
- the billable event
- when usage is counted
- what counts as a successful outcome
- what happens on retries or failed runs
- whether handoffs to humans are billed
- whether credits expire or roll over
- whether caps are soft or hard

## Customer communication checklist

Before launch or repricing, make sure you can explain:
- what is included
- what causes overages
- how customers can monitor usage
- how to avoid unexpected spend
- what controls are available
- who to contact if a bill looks wrong

## Recommended defaults

### For copilots
- seat-based plans with clear included usage or premium-action allowances
- admin visibility for team usage
- fair-use or premium-request explanations written in plain language

### For agents
- minimum platform fee or included resolutions/tasks
- explicit definition of billable and non-billable outcomes
- spend alerts before significant overages

### For APIs
- transparent metering units
- usage dashboard and threshold notifications
- prepaid credits or commit discounts where appropriate
