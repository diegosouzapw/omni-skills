# Scaling And Capacity Planning

Inference systems often fail from saturation before obvious infrastructure alarms fire.

## Decide What Actually Saturates The Service

Possible bottlenecks include:

- max in-flight requests
- queue depth
- memory pressure
- GPU memory or accelerator occupancy
- retrieval or feature-store latency
- serialization and preprocessing overhead

## Minimum Planning Questions

- What is target p95 or p99 latency?
- What is the maximum safe concurrency per replica?
- What happens when the queue fills?
- Which requests can be shed, delayed, or downgraded?
- What resource requests and limits keep scheduling stable?
- What autoscaling signal best reflects saturation?

## Autoscaling Guidance

Use signals aligned with service behavior where possible.

Prefer signals such as:

- in-flight request count
- queue depth
- service latency proxy
- custom saturation metrics

Do not rely on CPU alone when latency, memory, or dependency wait time dominate.

## Queue Policy

Define one of these intentionally:

- bounded queue with fail-fast behavior
- bounded queue with degraded fallback path
- async handoff for non-interactive work
- batch consolidation where freshness allows it

## Resource Policy

- set requests and limits intentionally
- avoid memory limits that create repeated OOM churn
- reserve enough headroom for rollout overlap and warm replicas
- understand eviction sensitivity for critical serving pods

## Degradation Plan

When traffic surges, specify what happens first:

- reject lowest-priority requests
- use fallback model or cached result
- lower generation or output limits if applicable
- shift eligible work to async or batch
