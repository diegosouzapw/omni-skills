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
upstream_head_repo: "diegosouzapw/omni-skills"
upstream_head_sha: "7b12c4fc4d000a3c49d1112ab86103594c94953a"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Model Serving

## Overview

Use this skill when ML systems need to behave like production services, not just notebooks that happen to answer requests. It is for online inference, asynchronous or batch scoring, feature-serving contracts, rollout safety, latency budgets, fallback behavior, observability, and operating model decisions around model deployment.

Good output should make model rollout operationally legible. The goal is to prevent a model change from becoming an opaque production incident caused by latency spikes, schema drift, weak fallbacks, cold-start behavior, or unowned serving operations.

## When to Use This Skill

- Use when a model is moving from experimentation into a real serving path.
- Use when online inference needs latency, reliability, timeout, and fallback decisions.
- Use when a team must choose between synchronous serving, asynchronous processing, and scheduled batch scoring.
- Use when feature-serving or request schemas must stay compatible across model versions.
- Use when a team needs a rollout packet for shadow, canary, blue/green, or staged model deployment.
- Use when post-launch observability, rollback authority, or incident response expectations are unclear.
- Use when an LLM-backed path needs structured outputs or machine-readable response guarantees for downstream systems.

## Workflow

1. **Classify the serving mode**  
   Decide whether the workload is online, async, or batch based on user-path criticality, freshness requirements, timeout tolerance, replay safety, and cost profile. Use [Online vs async vs batch](references/online-vs-async-vs-batch.md) when the boundary is unclear.

2. **Define the production contract**  
   Specify request schema, response schema, versioning policy, typed error behavior, timeout budget, model/version tags, and fallback semantics. If downstream systems parse fields, require a stable machine-readable contract rather than free-form output. Start from [Serving contract template](references/serving-contract-template.md).

3. **Review upstream and downstream dependencies**  
   Check feature pipelines, retrieval/context inputs, preprocessing, prompt/template versions where applicable, model artifact lineage, secret dependencies, and downstream consumers. Confirm what happens when any dependency is stale, slow, or unavailable.

4. **Design startup, readiness, and warmup behavior**  
   Separate startup, readiness, and liveness expectations. Define when the service is allowed to receive traffic, what warmup is required, and which dependency checks belong in readiness rather than liveness. Use [Probe design for model servers](references/probe-design-for-model-servers.md).

5. **Plan capacity and concurrency**  
   Set target concurrency, max in-flight requests, queueing behavior, resource requests and limits, and autoscaling signals. Do not assume CPU alone is the right scaling signal; latency, queue depth, or saturation may be better indicators. Use [Scaling and capacity planning](references/scaling-and-capacity-planning.md).

6. **Choose rollout mode and gates**  
   Decide whether to use shadow, canary, blue/green, or direct cutover. Define preconditions, observation window, success metrics, abort thresholds, rollback authority, and rollback steps before deployment. Use [Rollout gates and rollback runbook](references/rollout-gates-and-rollback-runbook.md).

7. **Define observability and quality proxies**  
   Instrument logs, metrics, traces, correlation IDs, model version, feature/prompt version, timeout/error class, fallback activation, and task-specific quality proxy metrics. Use [Model serving observability spec](references/model-serving-observability-spec.md) and [Sample inference diagnostic log](examples/sample-inference-diagnostic-log.json).

8. **Harden packaging and secret handling**  
   Keep runtime images minimal, separate build and runtime stages, avoid embedding credentials or mutable artifacts in images, and scan containers plus IaC before release. Use [Serving security hardening](references/serving-security-hardening.md) and [Trivy scan example](examples/trivy-model-serving-scan-example.md).

9. **Produce the operator packet**  
   Deliver a concise packet containing serving mode, contract version, dependencies, probes, scaling policy, rollout gates, rollback actions, dashboards, alert thresholds, and named owners. If helpful, render a checklist with `scripts/render_rollout_gate_checklist.py`.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| First serving path | production contract | Request, response, timeout, fallback, and ownership are explicit |
| Contract change | compatibility control | Version bump, consumer impact, rollback conditions, and deprecation plan are named |
| Version rollout | change control | Shadow/canary plan, success criteria, abort thresholds, and rollback authority are documented |
| Cold start / warmup | traffic safety | Startup probe, readiness gate, preload strategy, and warmup completion criteria are clear |
| Traffic surge | capacity control | Concurrency cap, queue policy, autoscaling signal, and graceful degradation plan are defined |
| Batch inference | replay safety | Idempotency, retry rules, lineage, and output validation are explicit |
| Feature drift | compatibility | Model inputs remain aligned with upstream schemas, freshness, and transformations |
| Infra green but outcomes bad | quality observability | Quality proxies, traces, prompt/feature versions, and fallback activation are observable |
| Secret or dependency failure | operational resilience | Credential rotation, dependency isolation, and degraded behavior are defined |

## Core Concepts

### A Model Endpoint Is Still A Product Endpoint

Inference behavior needs the same clarity as any other production API: schemas, latency, fallback, error semantics, ownership, and versioning. “The model answered” is not an operational contract.

### Serving Reliability Depends On More Than The Model Artifact

A serving system can look healthy while silently degrading because features, prompts, retrieval, preprocessing, or downstream consumers shifted. Model serving always depends on contracts outside the model binary.

### Safe Rollout Beats Instant Rollout

Canary, shadow, staged rollout, and rollback strategy should be designed before deployment, not invented during the first anomaly.

### Readiness Is Not Liveness

A model server that is still loading weights, warming caches, or waiting on dependencies should usually be considered not ready, not dead. Misusing liveness for slow startup often creates restart loops instead of healthy recovery.

### Throughput And Latency Are Capacity Decisions, Not Accidents

Inference systems saturate through concurrency, queueing, memory pressure, GPU allocation, network dependencies, and serialization overhead. Stable serving requires intentional limits and scaling signals.

## Examples

### Example 1: Online inference review

```text
Use @model-serving to review this online inference service and tell me what latency, fallback, probe, and rollout controls we need before production launch.
```

**Explanation:** Use this when the real question is production behavior, not model architecture.

### Example 2: Rollout gate checklist renderer

```bash
python3 scripts/render_rollout_gate_checklist.py \
  --service recommendation-api \
  --mode canary \
  --success-metric "p95_latency_ms<300" \
  --success-metric "error_rate<0.5%" \
  --success-metric "quality_proxy_ctr_delta>=-1.0%" \
  --abort-threshold "p99_latency_ms>800" \
  --abort-threshold "fallback_rate>5%" \
  --owner ml-oncall
```

**Explanation:** Use this when you want a compact operator-ready rollout packet with explicit success and abort criteria.

### Example 3: Feature contract review

```text
Use @model-serving to tell me whether this model deployment is actually safe given our current feature pipeline, request schema, and serving fallback path.
```

**Explanation:** Use this when serving reliability depends on upstream data behavior.

### Example 4: Batch scoring decision

```text
Use @model-serving to decide whether this workload should stay synchronous or move to async or batch, and list the idempotency, retry, and lineage controls we would need.
```

**Explanation:** Use this when latency-sensitive and throughput-oriented workloads are being mixed together.

## Best Practices

### Do

- Treat the request and response shape as a versioned serving contract, not an implementation detail.
- Include model version, contract version, request ID, and route or tenant identifiers on every request path and diagnostic event.
- Document typed error classes, timeout behavior, and fallback semantics so callers know what degraded service looks like.
- Keep rollout gates tied to both infrastructure health and serving-quality proxies.
- Separate startup, readiness, and liveness logic so slow model initialization does not create restart storms.
- Set concurrency caps and queue policy intentionally; prefer controlled degradation over uncontrolled latency collapse.
- Review feature, retrieval, prompt, or preprocessing dependencies alongside the model artifact before rollout.
- Use structured outputs or equivalent machine-readable schemas when downstream systems depend on parsed model results.
- Keep runtime images minimal, scan build artifacts, and rotate secrets through managed secret systems rather than repository files.
- Preserve output lineage for async and batch paths so retries and replay do not silently duplicate or corrupt results.

### Don't

- Don’t treat CPU utilization alone as proof that an inference service is healthy or correctly scaled.
- Don’t send traffic to a server that has loaded the process but not completed model warmup.
- Don’t use liveness probes as a proxy for slow or flaky downstream dependencies.
- Don’t roll out a new model without named rollback authority and pre-agreed abort thresholds.
- Don’t bake credentials, model registry tokens, or mutable model artifacts directly into ad hoc runtime images.
- Don’t assume green infrastructure dashboards mean user outcomes are healthy.
- Don’t change request or response semantics without compatibility review for downstream consumers.

## Troubleshooting

### Problem: Latency is unstable even though the model itself looks fine

**Symptoms:** P95 or P99 spikes, timeouts, queue growth, or intermittent slowdowns appear after rollout.

**Solution:** Review batching, preprocessing, network calls, serialization cost, cache misses, concurrency caps, and fallback path design instead of assuming the model weights are the only bottleneck. Check whether autoscaling follows the actual saturation signal or only CPU.

### Problem: Model quality falls after a technically healthy deployment

**Symptoms:** Infrastructure metrics are green, but user outcomes degrade, ranking behavior shifts, or downstream consumers reject outputs.

**Solution:** Recheck feature contracts, preprocessing changes, retrieval/context behavior, prompt/template versions where applicable, output-schema adherence, and shadow-versus-live differences. Compare model version, prompt/feature version, and fallback activation in traces and logs.

### Problem: Canary looks healthy on infra metrics but should still be rolled back

**Symptoms:** Error rate and pod health remain acceptable, but business KPIs, acceptance rates, or task-specific quality proxies regress.

**Solution:** Treat rollout gates as incomplete if they only cover infrastructure. Add quality proxy thresholds, minimum observation windows, and explicit rollback authority. Pause or reverse the rollout if quality thresholds fail even when infra metrics pass.

### Problem: Pods restart during model initialization

**Symptoms:** New replicas fail to stabilize, startup takes longer than expected, and repeated restarts occur before the model ever serves traffic.

**Solution:** Move long initialization checks into startup behavior, keep readiness false until warmup completes, and avoid dependency-heavy liveness checks. Validate probe timing against realistic artifact load and cache warmup duration.

### Problem: CPU is low but latency is high

**Symptoms:** Requests are slow even though host utilization looks moderate.

**Solution:** Investigate queue depth, max in-flight limits, memory pressure, GPU saturation, serialization overhead, downstream calls, or lock contention. Inference workloads often saturate before CPU appears busy.

### Problem: Teams cannot decide when to roll back

**Symptoms:** Everyone sees anomalies, but nobody knows which metrics or thresholds justify reverting.

**Solution:** Define rollout gates and rollback triggers before launch, including both system health and quality proxy signals, who can execute rollback, and what rollback actually changes.

### Problem: Secret rotation or secret retrieval breaks inference

**Symptoms:** Requests begin failing after credential changes, dependency auth expires, or only some replicas can reach required backing services.

**Solution:** Verify that secrets are externally managed, mounted or injected through supported mechanisms, and rotated independently of image rebuilds. Confirm startup and readiness behavior when secret retrieval fails, and prefer reversible credential updates over emergency image edits.

## Related Skills

- `@eval-design` — Use when the missing piece is evaluation coverage and rollout gating before deployment.
- `@data-contracts` — Use when serving safety depends on upstream schema, freshness, or event semantics.
- `@observability-review` — Use when the main gap is instrumentation, tracing, and production visibility.

## Additional Resources

- [Serving contract template](references/serving-contract-template.md)
- [Rollout gates and rollback runbook](references/rollout-gates-and-rollback-runbook.md)
- [Probe design for model servers](references/probe-design-for-model-servers.md)
- [Scaling and capacity planning](references/scaling-and-capacity-planning.md)
- [Model serving observability spec](references/model-serving-observability-spec.md)
- [Serving security hardening](references/serving-security-hardening.md)
- [Online vs async vs batch](references/online-vs-async-vs-batch.md)
- [Sample inference diagnostic log](examples/sample-inference-diagnostic-log.json)
- [Trivy model-serving scan example](examples/trivy-model-serving-scan-example.md)
- [Render rollout gate checklist](scripts/render_rollout_gate_checklist.py)
