# Online Vs Async Vs Batch

Use this decision aid when a team says it needs “model serving” but has not clarified the execution mode.

## Online Inference

Choose online when:

- the result is needed inside a user request path
- latency is user-visible
- stale responses are unacceptable
- fallback behavior must happen immediately

Key controls:

- strict timeout budget
- readiness and warmup discipline
- concurrency limits
- graceful degradation path

## Asynchronous Inference

Choose async when:

- work can complete after the initiating request
- retries are acceptable
- the system can poll, webhook, or consume results later
- traffic bursts need buffering

Key controls:

- idempotency
- job state visibility
- retry policy
- poison-job handling
- output delivery guarantees

## Batch Inference

Choose batch when:

- throughput matters more than per-item latency
- inputs can be processed on a schedule
- replay and lineage matter
- economics favor bulk processing

Key controls:

- deterministic input snapshot
- replay safety
- output lineage
- partial failure handling
- validation before publish

## Quick Decision Questions

- Does a human or API caller wait for the answer now?
- Can the work be retried later without harm?
- Must every result be traceable back to a specific input snapshot?
- Is the current “online” design actually compensating for missing async or batch infrastructure?
