# Database Design Checklist

## Data Model

- Identify entities, ownership, and lifecycle boundaries.
- Decide which invariants live in the schema and which live in application logic.
- Model identifiers, timestamps, and deletion semantics deliberately.

## Performance And Integrity

- Design indexes around real access patterns, not guesses.
- Make uniqueness, foreign keys, and nullability intentional.
- Plan for hot rows, fan-out queries, and archival or retention needs.

## Validation

- Walk through at least one write-heavy and one read-heavy workflow.
- Check whether the schema supports migrations without long lock windows.
- Document assumptions about scale, tenancy, and reporting use cases.
