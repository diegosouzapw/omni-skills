# Schema Evolution Checklist

Use this checklist before approving a producer-side or storage-side contract change.

## Change Classification

- [ ] Is the change additive, behavior-changing, or breaking?
- [ ] Does the current contract define a compatibility mode?
- [ ] Does the proposed rollout honor that mode?

## Field-Level Review

- [ ] Any field removals?
- [ ] Any field renames that are effectively remove+add?
- [ ] Any type changes?
- [ ] Any nullability changes?
- [ ] Any default value changes?
- [ ] Any enum or accepted-value changes?
- [ ] Any changes in ordering, partitioning, or key assumptions?

## Semantic Review

- [ ] Did business meaning change while the physical shape stayed similar?
- [ ] Did units, windows, filters, currency, or time-zone interpretation change?
- [ ] Did backfill logic or replay semantics change?
- [ ] Did a previously optional field become operationally required by consumers?

## Consumer Safety

- [ ] Are known downstream readers listed?
- [ ] Is lineage evidence attached?
- [ ] Are there suspected unknown consumers?
- [ ] Is there a migration window long enough for dependent teams?
- [ ] Is dual-write or dual-read needed?

## Platform Enforcement

- [ ] Where is the contract enforced: schema registry, application validation, dbt, warehouse, lakehouse, runtime assertions?
- [ ] Do dev and prod enforce the same rules?
- [ ] Has the actual platform behavior been checked for rename/nullability/evolution caveats?

## Rollback

- [ ] Can the producer revert safely?
- [ ] Can consumers continue reading the previous version?
- [ ] Are backfill or replay steps documented?
- [ ] Are monitors or assertions ready for post-release verification?
