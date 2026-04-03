# ADR Naming and Placement

## Common directories

These are common, not mandatory:

- `docs/adr/`
- `docs/decisions/`
- `adr/`
- `.adr/`

Prefer the directory already used by the repository.

## File naming

Recommended pattern:

`NNN-kebab-case-title.md`

Examples:

- `001-use-postgresql-for-primary-storage.md`
- `014-adopt-openid-connect-for-sso.md`
- `103-move-session-storage-to-redis.md`

## Numbering rules

- follow the highest visible ADR number
- preserve zero-padding if the repository uses it
- common pattern: `001`, `002`, ..., `099`, `100`
- do not assume gaps are mistakes; they may be intentional or pending

## Title rules

Good titles record the decision:

- `Use PostgreSQL for Primary Storage`
- `Adopt Redis for Session Storage`

Avoid titles that only restate the question:

- `Should We Use PostgreSQL?`
- `Database Decision`

## Suggested placement behavior

1. Reuse an existing ADR directory if present.
2. Reuse the repository's numbering and filename style.
3. If no ADR directory exists, suggest `docs/adr/` unless the repo clearly prefers another docs layout.
4. If write access is uncertain, present the proposed path instead of claiming the file was saved.

## Optional index

A lightweight `README.md` in the ADR directory improves discoverability and cross-linking over time.
