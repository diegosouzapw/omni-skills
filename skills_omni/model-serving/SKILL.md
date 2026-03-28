---
name: "model-serving"
description: "Model serving workflow skill. Use this skill when a team needs to design, review, or harden online inference, batch inference, feature contracts, rollout safety, or operational behavior for ML-powered services."
version: "0.0.1"
category: "machine-learning"
tags:
  - "model-serving"
  - "inference"
  - "mlops"
  - "rollout"
  - "latency"
  - "reliability"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "antigravity"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-28"
date_updated: "2026-03-28"
upstream_skill: "skills/model-serving"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Model Serving

## Overview

Use this skill when ML systems need to behave like production services, not just notebooks that happen to answer requests. It is for online inference, feature-serving contracts, rollout safety, latency budgets, fallback behavior, observability, and operating model decisions around model deployment.

Good output should make model rollout operationally legible. The goal is to prevent a model change from becoming an opaque production incident caused by latency spikes, schema drift, weak fallbacks, or unowned serving behavior.

## When to Use This Skill

- Use when a model is moving from experimentation into a real serving path.
- Use when online inference needs latency, reliability, and fallback decisions.
- Use when feature-serving or request schemas must stay compatible across model versions.
- Use when a team needs a rollout packet for canary, shadow, or staged model deployment.
- Use when post-launch observability and rollback expectations are unclear.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| First serving path | production contract | Request, response, and fallback behavior are explicit |
| Version rollout | change control | Canary, shadow, rollback, and success criteria are named |
| Latency trouble | serving architecture | Budgets, caching, batching, or async boundaries are clear |
| Feature drift | compatibility | Model inputs stay aligned with upstream data contracts |
| Incident risk | observability | Logs, metrics, traces, and model-specific alarms are defined |

## Core Concepts

### A Model Endpoint Is Still A Product Endpoint

Inference behavior needs the same clarity as any other production API: schemas, latency, fallback, error semantics, and owner. “The model answered” is not an operational contract.

### Serving Reliability Depends On Upstream Contracts

A serving system can look healthy while silently degrading because features, prompts, or request preprocessing shifted. Model serving always depends on data and context contracts outside the model binary.

### Safe Rollout Beats Instant Rollout

Canary, shadow, staged rollout, and rollback strategy should be designed before deployment, not invented during the first anomaly.

## Workflow

1. Define the serving surface: online or batch, request contract, response contract, and latency or freshness target.
2. Review upstream dependencies: feature inputs, context packet, prompts, model artifact versioning, and fallback behavior.
3. Design rollout safety: canary, shadow, rollback trigger, and success criteria.
4. Define observability: request IDs, model version tags, latency, failures, and quality proxies.
5. Close with an operator packet: who owns serving, what gets monitored, and what causes rollback.

## Examples

### Example 1: Online inference review

```text
Use @model-serving to review this online inference service and tell me what latency, fallback, and rollout controls we need before production launch.
```

**Explanation:** Use this when the real question is production behavior, not model architecture.

### Example 2: Serving packet renderer

```bash
python3 skills/model-serving/scripts/render_model_serving_packet.py \
  "recommendation-api" \
  "shadow,canary,rollback" \
  "latency,feature drift,observability"
```

**Explanation:** Use this when you want a deployment and operations packet before rollout.

### Example 3: Feature contract review

```text
Use @model-serving to tell me whether this model deployment is actually safe given our current feature pipeline and serving fallback path.
```

**Explanation:** Use this when serving reliability depends on upstream data behavior.

## Best Practices

- Treat the request and response schema as a stable serving contract.
- Tag every serving request with model version and request correlation data.
- Design rollback before rollout.
- Keep fallback behavior explicit instead of implicit “best effort.”
- Pair serving changes with feature-contract review, not only model evaluation.
- Monitor both infrastructure health and serving-quality proxies.

## Troubleshooting

### Problem: Latency is unstable even though the model itself looks fine

**Symptoms:** P95 spikes, timeouts, or intermittent slowdowns appear after rollout.
**Solution:** Review batching, preprocessing, network calls, caching, and fallback path design instead of assuming the model weights are the only bottleneck.

### Problem: Model quality falls after a safe deployment

**Symptoms:** Infrastructure metrics are green, but user outcomes degrade or ranking behavior shifts.
**Solution:** Recheck feature contracts, preprocessing changes, serving prompts or context, and shadow-versus-live differences.

### Problem: Teams cannot decide when to roll back

**Symptoms:** Everyone sees anomalies, but nobody knows which metrics or thresholds justify reverting.
**Solution:** Define rollout gates and rollback triggers before launch, including both system health and quality proxy signals.

## Related Skills

- `@eval-design` — Use when the missing piece is evaluation coverage before rollout.
- `@data-contracts` — Use when serving safety depends on upstream schema or freshness guarantees.
- `@observability-review` — Use when the main gap is instrumentation and production visibility.

## Additional Resources

- [Model serving checklist](references/checklist.md)
- [Rollout worksheet](references/rollout-worksheet.md)
- [Render a serving packet](scripts/render_model_serving_packet.py)
- [Serving review example](examples/serving-review-example.md)
