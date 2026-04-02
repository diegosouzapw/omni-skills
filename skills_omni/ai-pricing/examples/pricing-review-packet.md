# Example Pricing Review Packet

## 1. Executive summary

We recommend a **hybrid seat-plus-credits model** for the AI copilot because customers buy user productivity, not raw model consumption. Raw token usage should remain an internal finance and operations meter.

## 2. Product context

- Archetype: Copilot
- Buyer: Marketing team lead and RevOps manager
- Sales motion: Self-serve with sales-assisted expansion
- Goal: Improve adoption while protecting margin on heavy AI workflows

## 3. Recommended pricing model

- Customer-facing metric: per seat with included monthly premium credits
- Internal cost meter: tokens, premium-model mix, retry rate, support burden
- Why: the customer understands seats; credits absorb workflow cost variation without exposing token economics

## 4. Package structure

| Tier | Base price | Included usage | Overage / expansion |
| --- | --- | --- | --- |
| Starter | $29/seat/mo | 200 premium credits per seat | pooled overage credits |
| Team | $49/seat/mo | 500 premium credits per seat | pooled overage credits + admin controls |
| Enterprise | Custom | negotiated allowance | annual commit, policy controls, optional BYOK review |

## 5. Unit economics logic

- Base package covers fixed platform and support cost.
- Included credits absorb normal usage.
- Heavy AI workflows expand through pooled overage rather than forcing all customers into a high seat price.
- Margin should be reviewed by cohort at average and p95 usage.

## 6. Main risks

- Heavy users may consume credits too quickly if premium models dominate usage.
- Customers may still fear overages unless alerts and dashboards are visible.
- Enterprise buyers may request BYOK for governance reasons.

## 7. Required controls

- usage alerts at 80% and 100% of included credits
- plain-language description of what consumes credits
- non-billable treatment for failed generations or system retries when appropriate
- monthly margin review by tier and quarterly repricing review

## 8. Migration recommendation

- apply new packaging to new customers first
- grandfather existing annual contracts until renewal
- run a 60-90 day cohort test before broad migration

## 9. Open questions

- What share of usage routes to premium models?
- How large is the p95 heavy-user cohort?
- Is BYOK a repeatable enterprise need or only a one-off request?
