# Debug Session Log Example

## Symptom

SQLite persistence works locally, but a second worker does not reclaim a task after the first worker exits.

## Hypotheses

1. Lease renewal is not written back to the coordinator.
2. The task remains locked after worker exit.
3. The queue loop never polls after recovery.

## Checks

- Inspect the coordinator snapshot from `/healthz`.
- Kill the first worker after a claim.
- Poll the second worker until the task moves to `completed`.

## Outcome

The second worker reclaimed the task after lease expiry. The real bug was stale recovery metadata, not lease ownership itself.
