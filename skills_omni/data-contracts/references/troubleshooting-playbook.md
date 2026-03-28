# Troubleshooting Playbook

## 1. Compatibility Failure After Release

**Check:**
- exact failing reader or query
- old vs new schema/contract diff
- field rename, enum change, nullability, or default differences
- whether rollout skipped versioning or migration guidance

**Typical recovery:**
- restore previous version
- dual-write old and new fields
- publish consumer migration guidance
- mark the change as breaking and re-approve

## 2. Validation Drift Between CI And Production

**Check:**
- whether dev and prod use the same engine behavior
- runtime constraints missing from CI
- warehouse or lakehouse-specific enforcement rules
- production-only assertions or access-path differences

**Typical recovery:**
- narrow rollout
- validate directly in the target platform
- align test fixtures with production semantics
- update the contract to name the true enforcement boundary

## 3. Semantic Drift Without Structural Drift

**Check:**
- business definition changes
- hidden filter/window changes
- timezone, unit, or attribution changes
- backfill logic changes that alter history

**Typical recovery:**
- version the metric or contract semantics
- communicate changed business meaning
- compare old and new outputs over the same slice
- update downstream dashboards and alerts intentionally

## 4. Unknown Consumer Risk

**Check:**
- catalog lineage coverage
- query history or usage telemetry
- unmanaged exports and notebooks
- stakeholder signoff gaps

**Typical recovery:**
- pause breaking change
- expand impact analysis
- reduce rollout to additive-compatible changes
- use a versioned parallel output until confidence improves
