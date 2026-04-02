# Data Boundary Worksheet

Use this worksheet whenever shared data or reporting dependencies affect extraction order.

## 1. Candidate

- Candidate seam / domain:
- Current tables / collections / data stores touched:
- Current writers:
- Current readers:

## 2. System of record

- Proposed owner for each key dataset:
- Current system of record:
- Future system of record:
- Ownership transfer required? yes / no

## 3. Coupling risks

- Shared schema:
- Cross-domain joins:
- Reporting dependencies:
- Batch job dependencies:
- Cross-cutting transactions:
- Referential assumptions in application code:

## 4. Migration path options

- Read-through adapter
- Replication / projection
- Event-driven synchronization
- Dual read (temporary)
- Dual write (temporary, high caution)
- Reporting model split
- Keep data in monolith for now and extract behavior first

## 5. Consistency tradeoffs

- Strong consistency required? where?
- Eventual consistency acceptable? where?
- User-visible lag tolerance:
- Failure modes if sync breaks:

## 6. Rollback considerations

- Can writes be redirected back safely?
- Can temporary adapters be disabled quickly?
- What data reconciliation is needed after rollback?

## 7. Recommendation

- Extract now / later / defer
- Preconditions required before extraction:
- Key data migration milestone:
- Decision owner:
