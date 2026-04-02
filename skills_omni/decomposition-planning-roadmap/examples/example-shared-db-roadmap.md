# Example: Shared Database Roadmap

## Context

A legacy business application has:

- one shared relational schema
- cross-domain reporting queries
- nightly jobs touching customer, billing, and fulfillment tables
- weak tracing and no clear rollback automation

## Planning conclusion

Do **not** start with a broad domain extraction.

## Candidate summary

| Candidate | Main blocker | Recommendation |
| --- | --- | --- |
| Billing | Shared writes and reporting joins | Deferred |
| Fulfillment | Batch jobs and cross-domain transactions | Deferred |
| Customer profile reads | Extract behavior first, keep data centralized temporarily | Later with conditions |
| Reporting API | Possible projection-based seam | First preparatory seam |

## Recommended roadmap

### Phase 1: Data ownership clarification
- Map current writers and readers per table
- Identify reporting consumers and break risk
- Define future system-of-record intentions

### Phase 2: Observability and seam creation
- Add tracing around reporting and profile flows
- Introduce abstraction layers for read access
- Isolate reporting projections from transactional schema use

### Phase 3: First low-risk extraction
- Extract reporting API or projection pipeline before core transactional domains
- Validate replication/projection lag tolerance

### Phase 4: Reassess larger candidates
- Re-score billing and fulfillment after data ownership is clearer

## Why this roadmap is safer

It acknowledges that the shared schema is the critical path. It avoids pretending that service extraction can succeed before data responsibilities and reporting impacts are understood.
