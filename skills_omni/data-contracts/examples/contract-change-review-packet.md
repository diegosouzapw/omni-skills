# Contract Change Review Packet

## Summary

- **Contract:** checkout events
- **Current version:** v1
- **Proposed version:** v2
- **Change:** replace `cart_value` with `subtotal_amount` and add `currency`
- **Classification:** breaking unless versioned

## Why This Change Exists

The producer needs explicit currency handling and a clearer price field definition.

## Impact Analysis

- Warehouse ingestion parses both fields today
- Finance dashboard depends on `cart_value`
- Feature store job uses `cart_value` in a training pipeline
- Unknown ad hoc consumer risk remains moderate

## Decision

- Do not mutate v1 in place
- Publish v2 with `subtotal_amount` and `currency`
- Keep v1 for the migration window

## Rollout Plan

1. Dual-write v1 and v2 for 30 days
2. Notify analytics and ML consumers
3. Update dashboards and feature jobs
4. Monitor nulls, freshness, and consumer adoption
5. Retire v1 after explicit signoff

## Rollback Plan

- Continue emitting v1 only if v2 adoption creates production issues
- Restore prior downstream mappings within the same release window
