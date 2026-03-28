# Schema Review Example

## Scope

Persistent storage for agent tasks, artifacts, queue metadata, and push notification config.

## Questions

- Which columns uniquely identify a task?
- Which reads need low latency during active execution?
- Which records need retention after completion?
- How will lease metadata survive restarts and cleanup?

## Rollout

1. Add the new tables and indexes.
2. Backfill queue metadata from current task state.
3. Shift reads behind a feature flag.
4. Remove compatibility logic after verification.
