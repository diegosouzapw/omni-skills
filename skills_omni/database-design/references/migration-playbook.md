# Migration Playbook

Use this checklist when a schema change must be rolled out safely.

## Before

- Define the forward schema.
- List existing readers and writers.
- Decide whether dual-write or compatibility columns are required.

## During

- Apply additive schema first.
- Backfill in bounded batches.
- Observe query latency and error rate.

## After

- Remove compatibility logic only after evidence is stable.
- Keep rollback criteria explicit.
