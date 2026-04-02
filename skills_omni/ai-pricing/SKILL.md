---
name: "ai-pricing"
description: "AI pricing strategy workflow skill. Use this skill when a user needs to price an AI product, choose a customer-facing charge metric, design pricing tiers, evaluate BYOK, or improve AI gross margins using current provider-cost inputs and observed usage. Do not use it for billing-system implementation, code review, or software architecture."
version: "0.0.1"
category: "development"
tags:
  - "ai-pricing"
  - "usage-based-pricing"
  - "pricing-strategy"
  - "tiers"
  - "gross-margin"
  - "byok"
  - "consumption-pricing"
  - "outcome-pricing"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
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
upstream_skill: "skills/ai-pricing"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# AI Pricing Skill

## Overview

Use this skill to design or review pricing for AI-native products where costs are variable, usage distribution is uneven, and packaging choices materially affect adoption, gross margin, and sales motion.

This skill stays focused on **pricing strategy and operating decisions**, not billing implementation. It helps the operator:

- choose the right **customer-facing charge metric**
- separate **internal cost meters** from **external billable metrics**
- design pricing tiers and hybrid packages
- estimate unit economics using **current provider pricing inputs**
- evaluate **BYOK** as a packaging and enterprise-governance choice, not just a margin lever
- plan migrations, repricing tests, and spend-control guardrails

This curated version preserves the upstream intent while making the workflow more operational for agents. It keeps recommendations grounded in current provider pricing pages, observed usage data, and explicit tradeoffs rather than static token-cost assumptions.

## When to Use This Skill

Use this skill when the user asks for any of the following:

- pricing an AI copilot, agent, API, or AI-enabled service
- choosing between per-seat, usage-based, workflow-based, outcome-based, or credit-based pricing
- designing pricing tiers, included usage, overages, annual commits, or enterprise plans
- improving gross margin, reducing bill shock, or fixing low-margin heavy-user cohorts
- deciding whether to offer BYOK or managed inference
- migrating from flat-rate or seat pricing to hybrid or usage-linked packaging
- comparing packaging archetypes across copilot, agent, API/platform, or service businesses

Do **not** use this skill when the primary task is:

- implementing billing logic or metering in code
- reviewing application architecture
- debugging product usage instrumentation
- legal review of contracts or pricing disclosures

For those cases, hand off after producing the pricing recommendation packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New product with no existing pricing | `examples/discovery-questionnaire.md` | Collects the minimum discovery needed before recommending a pricing model |
| Margin estimate or repricing request | `references/unit-economics-worksheet.md` | Forces recommendations to use formulas, cohorts, and current cost inputs |
| Unsure which charge metric fits | `references/pricing-metric-decision-tree.md` | Separates internal meters from customer-facing pricing logic |
| Enterprise buyer asks for BYOK | `references/byok-decision-framework.md` | Evaluates procurement, governance, support, and margin tradeoffs |
| Customers want predictable spend | `references/billing-transparency-controls.md` | Adds caps, alerts, allotments, and invoice-predictability patterns |
| Rolling out new pricing | `references/migration-playbook.md` | Reduces churn risk through phased migration and clear notice planning |
| Need a worked deliverable | `examples/pricing-review-packet.md` | Shows the expected output shape for a pricing recommendation |
| Quick scenario math | `scripts/pricing_margin_calculator.py` | Computes simple unit-economics and margin scenarios safely |
| Task drifts into adjacent specialization | `agents/related-skill-router.md` | Helps hand off without losing pricing context |

## Workflow

1. **Classify the product and buyer**
   - Identify the product archetype: copilot, agent, API/platform, or AI-enabled service.
   - Identify the buyer: developer, operator, line-of-business owner, finance/procurement, or enterprise IT.
   - Identify whether the sales motion is self-serve, sales-assisted, or enterprise.

2. **Separate value metric from cost meter**
   - Determine what customers perceive as value: seat, workflow, document, resolution, conversation, report, or business outcome.
   - Determine internal cost drivers: tokens, model calls, tool calls, retries, human review, storage, support burden.
   - Do not assume the provider billing unit should become the customer billing unit.

3. **Collect minimum economics inputs**
   - Use `examples/discovery-questionnaire.md`.
   - Capture current or estimated:
     - average and p95 usage per customer or task
     - input/output tokens or model-call mix
     - retry/error rates
     - cache hit rate if applicable
     - human-review or escalation rate
     - support burden by cohort
     - current discounting, commitments, or legacy contracts

4. **Refresh provider-cost assumptions**
   - Verify current provider pricing from official sources before estimating margins.
   - Treat all model-cost examples as placeholders until refreshed.
   - If the product can route across providers or models, model at least a base case and a stressed case.

5. **Choose the pricing model path**
   - Use `references/pricing-metric-decision-tree.md`.
   - Prefer a customer-facing metric tied to visible value.
   - Common defaults:
     - **API/platform**: consumption or credits
     - **Copilot**: per-seat with included usage, credits, or fair-use controls
     - **Agent**: workflow or outcome pricing, often with a minimum platform fee
     - **AI-enabled service**: retainer, per-deliverable, project fee, or hybrid package

6. **Design package structure**
   - Start with 3 tiers unless there is a strong reason not to.
   - Define:
     - base fee
     - included usage or allowance
     - overage or variable component
     - annual or prepaid incentive
     - enterprise packaging, if relevant
   - Favor hybrid packaging when predictability and adoption matter.

7. **Check unit economics and margin sensitivity**
   - Use `references/unit-economics-worksheet.md` or `scripts/pricing_margin_calculator.py`.
   - Review margin by tier and by cohort, not just blended averages.
   - Pay special attention to heavy-user tails and low-price/high-support customers.

8. **Evaluate BYOK only when justified**
   - Use `references/byok-decision-framework.md`.
   - Test whether BYOK solves a real procurement or governance blocker.
   - Account for support complexity, observability loss, feature limits, and fragmented UX.

9. **Add spend transparency and controls**
   - Use `references/billing-transparency-controls.md`.
   - Define what is billed, what is not billed, and when charges occur.
   - Recommend caps, alerts, prepaid credits, or hard/soft limits when usage variability is high.

10. **Plan migration and experimentation**
    - Use `references/migration-playbook.md`.
    - Review legacy contracts, notice periods, and discount sprawl before repricing.
    - Define success metrics for conversion, expansion, retention, and gross margin.

11. **Produce the recommendation packet**
    - Summarize:
      - product archetype and buyer
      - recommended charge metric
      - tier structure
      - target margin logic
      - key risks and controls
      - BYOK decision
      - migration or experiment plan
    - Use `examples/pricing-review-packet.md` as the output model.

## Examples

### Example 1: Price a new AI copilot

```text
Use @ai-pricing to design pricing for our AI writing copilot for marketing teams. Assume self-serve plus sales-assisted expansion. Start with the discovery questionnaire, choose a customer-facing metric, and recommend 3 tiers with included usage and margin logic.
```

**Expected result:** The agent identifies a copilot archetype, recommends seat-based or hybrid seat-plus-credits packaging, explains why raw token pricing should stay internal, and returns tier logic with usage guardrails.

### Example 2: Fix low margins in a usage-heavy product

```text
Use @ai-pricing to review our AI support agent pricing. We have good top-line growth but margins collapse for heavy customers. Analyze whether our metric, included usage, and overages are wrong. Include a migration recommendation.
```

**Expected result:** The agent reviews p95/p99 usage, identifies whether included allotments or overage design are too generous, suggests hybrid packaging or floor commitments, and proposes a controlled migration path.

### Example 3: Run quick scenario math locally

```bash
python3 scripts/pricing_margin_calculator.py \
  --price-per-unit 1.20 \
  --units 10000 \
  --ai-cost-per-unit 0.32 \
  --delivery-cost-per-unit 0.08 \
  --fixed-revenue 2500
```

**Expected result:** A small scenario summary with revenue, variable cost, contribution margin, and gross margin percentage.

### Example 4: Evaluate a BYOK request safely

```text
Use @ai-pricing to evaluate whether BYOK should be offered for enterprise deals. Compare managed, BYOK, and hybrid enterprise options. Focus on procurement blockers, support complexity, observability, and pricing impact.
```

**Expected result:** The agent recommends managed-first, BYOK-for-enterprise-only, or no-BYOK based on actual deal and operating tradeoffs rather than treating BYOK as automatically good.

### Example 5: Build a review packet

```text
Use @ai-pricing to produce a pricing review packet for our API product. Include the external charge metric, internal cost meter, package structure, margin sensitivity notes, spend-control recommendations, and rollout risks.
```

**Expected result:** A compact decision memo that leadership or GTM can review without needing the full working session.

## Best Practices

### Do

- Verify **current provider pricing** before estimating margins or quoting economics.
- Use **observed usage and cohort data** whenever available, not average-only assumptions.
- Distinguish **internal cost meters** from **external customer pricing metrics**.
- Prefer **visible customer value metrics** over raw tokens unless the product is infrastructure-like or developer-facing.
- Consider **hybrid pricing** when you need both predictability and expansion.
- Evaluate pricing at **p50 and p95/p99 usage**, not only the mean.
- Define non-billable failure states clearly for workflow or outcome pricing.
- Add **spend controls** when bills can vary materially month to month.
- Treat competitor pricing as **positioning input**, not as a target to copy blindly.
- Make migration a controlled rollout with grandfathering, notice windows, and success metrics.

### Don't

- Do not hard-code token prices or model economics as timeless facts.
- Do not expose raw provider metering to customers just because finance uses it internally.
- Do not assume outcome pricing works unless success is measurable and attributable.
- Do not recommend pure usage pricing without discussing bill shock and budget controls.
- Do not use blended gross margin alone; heavy users can hide inside healthy averages.
- Do not treat BYOK as a default feature; it can increase support and reduce product control.
- Do not recommend repricing without checking current contracts, discounts, and enterprise commitments.

### Practical Margin Guidance

These are directional heuristics, not guarantees:

- **Copilots** often need SaaS-like predictability, so per-seat or seat-plus-allowance packaging is common.
- **Agents** usually need workflow or outcome pricing, but often benefit from a platform fee or minimum commit.
- **API/platform products** can expose direct usage more safely because buyers expect metered pricing.
- **AI-enabled services** can often package value through retainers, deliverables, or scoped commitments rather than low-level usage.

## Troubleshooting

### Problem: Customers resist usage pricing

**Symptoms:** Prospects ask for caps, fear surprise invoices, or delay rollout even when they like the product.

**Solution:** Add a predictable base fee, included usage, clear overage language, caps or alerts, and examples comparing spend to the human alternative. Use `references/billing-transparency-controls.md`.

### Problem: Margins look healthy overall but collapse for heavy users

**Symptoms:** Blended margin seems acceptable, but large or power users generate low or negative contribution margin.

**Solution:** Recalculate by cohort and at p95/p99 usage. Tighten included usage, add overages, introduce credits or minimum commits, or move from pure seat pricing to hybrid packaging. Use `references/unit-economics-worksheet.md`.

### Problem: The wrong charge metric creates constant pricing friction

**Symptoms:** Customers do not understand what is being billed, sales spends too much time explaining the model, or value does not map cleanly to the invoice.

**Solution:** Re-run the metric decision tree and separate internal meter from external billable unit. If customers buy outcomes or tasks, stop exposing tokens unless the product is truly infrastructure-like.

### Problem: Outcome pricing creates disputes

**Symptoms:** Customers disagree about what counts as a successful resolution, lead, or completed task.

**Solution:** Define billable outcomes, excluded cases, handoff states, reversals, and auditability before recommending outcome pricing. If attribution is messy, downgrade to workflow pricing.

### Problem: A single enterprise prospect demands BYOK

**Symptoms:** Sales wants BYOK immediately, but product and support teams expect operational complexity.

**Solution:** Use the BYOK framework to test whether this is a one-off demand or a repeatable enterprise requirement. Consider enterprise-only packaging, higher minimums, or a managed-first policy instead of making BYOK the default.

### Problem: New pricing improves margin but hurts conversion or retention

**Symptoms:** Gross margin rises, but win rate, activation, expansion, or retention gets worse.

**Solution:** Treat repricing as an experiment. Roll out by cohort, measure conversion and retention alongside margin, and adjust packaging or allowances before broad rollout. Use `references/migration-playbook.md`.

## Related Skills

- Use GTM, sales, or packaging skills when the work becomes messaging, positioning, or sales-comp design.
- Use billing-system or engineering implementation skills when the next step is metering, invoicing, entitlements, or system integration.
- Use finance or FP&A skills when the task becomes budgeting, board modeling, or full P&L planning.
- Use legal or contract-review skills when the task becomes notice terms, MSA changes, procurement language, or billing disputes.

## Additional Resources

### Local support pack

- [Unit economics worksheet](references/unit-economics-worksheet.md)
- [Pricing metric decision tree](references/pricing-metric-decision-tree.md)
- [BYOK decision framework](references/byok-decision-framework.md)
- [Billing transparency and spend controls](references/billing-transparency-controls.md)
- [Migration playbook](references/migration-playbook.md)
- [Discovery questionnaire](examples/discovery-questionnaire.md)
- [Pricing review packet example](examples/pricing-review-packet.md)
- [Quick margin calculator](scripts/pricing_margin_calculator.py)
- [Related-skill router](agents/related-skill-router.md)

### External primary-source inputs to refresh before analysis

Use current official pricing and billing documentation as live inputs rather than static facts:

- OpenAI API pricing: https://openai.com/api/pricing/
- OpenAI pricing docs: https://platform.openai.com/docs/pricing
- Anthropic pricing: https://www.anthropic.com/pricing
- Google Cloud Vertex AI pricing: https://cloud.google.com/vertex-ai/generative-ai/pricing
- AWS Bedrock pricing: https://aws.amazon.com/bedrock/pricing/
- Stripe usage-based billing docs: https://docs.stripe.com/billing/subscriptions/usage-based
- OpenAI usage and cost analysis example: https://cookbook.openai.com/examples/completions_usage_api

### Preserved upstream intent

The upstream skill emphasized four core ideas that remain central here:

1. charge metric selection is foundational
2. product archetype shapes pricing strategy
3. hybrid pricing is often safer than a pure model
4. BYOK, migration, and margin management should be handled deliberately

Use the local references to operationalize those ideas with fresher assumptions, clearer decision boundaries, and safer rollout guidance.
