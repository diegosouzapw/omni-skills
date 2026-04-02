# Neo4j Import Hardening

Use this guide when loading ownership exports into Neo4j.

## Goal

Import CSV outputs in a repeatable way while avoiding duplicate nodes and weak schema hygiene.

## Recommended approach

1. Create constraints before importing.
2. Use stable identifiers for people and files.
3. Prefer idempotent `MERGE` patterns over one-shot create-only imports.
4. Re-import into a clean or known state when comparing runs.

## Constraint examples

Adjust labels and property names to match your import model.

```cypher
CREATE CONSTRAINT person_id IF NOT EXISTS
FOR (p:Person)
REQUIRE p.id IS UNIQUE;

CREATE CONSTRAINT file_path IF NOT EXISTS
FOR (f:File)
REQUIRE f.path IS UNIQUE;
```

## Import notes

- Keep headers stable.
- Ensure CSV quoting and delimiter expectations match your loader.
- Validate sample rows before loading the full dataset.
- Treat GraphML as optional; CSV/JSON is usually the safer interchange format.

## Troubleshooting

### Duplicate nodes after repeated import

Use constraints and `MERGE`, not unconstrained `CREATE`.

### Header or type surprises

Check exported column names and whether downstream Cypher assumes missing properties are always present.

### Cross-run comparison confusion

Record which repo, branch, time window, and attribution mode produced each export.

## Do not do

- Do not load repeated exports into the same graph without a plan for idempotency.
- Do not compare graphs from different parameter sets as if they were equivalent.
