# Retrieval Provenance Schema

Use this schema for each retrieved item that enters the packet.

## Required fields

- `source`: human-readable source name or URI label
- `retrieved_at`: retrieval timestamp
- `document_id`: source document identifier if available
- `chunk_id`: chunk identifier if available
- `freshness_note`: current, stale, unknown, or dated note
- `inclusion_rationale`: why this chunk was included
- `transformation`: `raw` or `summarized`

## Recommended fields

- `score`: retrieval or ranking score if available
- `query`: retrieval query or intent label
- `owner`: system or team responsible for the source
- `license_or_policy_note`: any usage limitation
- `conflicts_with`: IDs of contradictory items if known

## Example shape

```yaml
source: Product policy handbook
retrieved_at: 2026-03-27T13:42:00Z
document_id: policy-v4
chunk_id: policy-v4-18
freshness_note: current
inclusion_rationale: Defines refund exception rules for the user's case
transformation: raw
score: 0.88
query: refund exceptions enterprise annual plan
```

## Rules

- Keep provenance next to the evidence, not in a separate hidden log.
- If evidence is summarized, preserve the source set and summary method.
- If provenance is missing, treat the evidence as lower trust.
- Do not present inferred facts as if they were directly retrieved facts.
