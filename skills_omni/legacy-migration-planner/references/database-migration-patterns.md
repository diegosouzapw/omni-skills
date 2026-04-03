# Database Migration Patterns

Treat data ownership as a first-class part of migration planning.

## Questions to Answer First

- who owns each table or collection today?
- which components write to it?
- which components only read it?
- are there cross-domain joins or transactions?
- can ownership move safely, or only access patterns move at first?

## Common Patterns

### 1. Backward-Compatible Schema Evolution

Use additive changes first when possible.

Examples:

- add nullable columns before making them required
- write new and old fields during transition if necessary
- keep readers tolerant while producers are being migrated

### 2. Published Interface Instead of Shared Writes

Prefer one component owning writes while others read through an API or event stream.

### 3. Transitional Replication or CDC

Use cautiously when direct ownership transfer is not immediately possible.

Planning must include:

- source of truth
- latency expectations
- failure handling
- reconciliation process

### 4. Delayed Ownership Transfer

Sometimes extraction must wait until the legacy system is internally modularized first.

## Rollback Caution

Application rollback is often easier than data rollback.

Do not assume schema or data changes are reversible unless the plan states:

- what is being reverted
- how data integrity is protected
- what backups or recovery points exist
- what forward-fix path exists if reversal is unsafe

## Migration Plan Requirements

Each domain plan should state one of these ownership models:

- owns data directly
- reads another domain's data through a published interface
- depends on transitional synchronization
- still blocked by unresolved shared ownership
