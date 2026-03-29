# Retrieval Provenance Example

## Raw retrieved snippet

> Enterprise annual plans may receive refund exceptions only when duplicate billing is confirmed by finance review.

## Model-ready evidence block

```yaml
source: Billing policy handbook
retrieved_at: 2026-03-27T14:10:00Z
document_id: billing-policy-v7
chunk_id: billing-policy-v7-42
freshness_note: current
inclusion_rationale: Directly relevant to the user's refund exception request
transformation: raw
```

```text
Enterprise annual plans may receive refund exceptions only when duplicate billing is confirmed by finance review.
```

## Why this is better

- The model sees the fact and its source together.
- Reviewers can inspect freshness.
- The packet explains why the snippet was included.
