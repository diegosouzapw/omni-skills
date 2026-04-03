# Release and Rollback Checklist

Use this for production releases.

## Release plan

Document:

- release method: dark launch, canary, phased rollout, big bang, migration window
- rollout stages
- owners for each stage
- release gates based on measurable signals

## Canary / staged rollout

For each stage, define:

- traffic or user percentage
- duration
- metrics to watch
- stop or advance criteria

## Rollback triggers

Examples:

- error rate exceeds threshold
- latency regression exceeds threshold
- key dependency failure rate rises
- data integrity checks fail
- customer-impacting incidents occur

## Reversibility

Explicitly state:

- whether schema changes are reversible
- whether data migrations are reversible
- whether feature flags exist
- whether the old path can remain live during rollout

## Communication

If rollback happens, document:

- who is notified
- which channel is used
- whether status communication is required
- whether a follow-up review or postmortem is expected

## Unsafe patterns

Treat these as blockers:

- irreversible migrations with no mitigation plan
- rollback that depends on uncreated feature flags
- no telemetry to judge rollout health
- no identified owner during rollout
