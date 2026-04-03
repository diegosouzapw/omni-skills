# Glossary Extraction Worksheet

Use this worksheet before classifying subdomains or drawing context boundaries.

## Evidence Sources Reviewed

- Code paths:
- APIs:
- Schemas:
- Events:
- Docs / ADRs:
- Tests:

## Term Table

| Term | Kind (noun/verb/event) | Meaning inferred | Where found | Possible context | Alias / synonym | Collision? | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Collision Review

For each suspicious term, answer:

1. Does the term mean the same thing everywhere?
2. Does it have different lifecycle states in different areas?
3. Do different actors use it differently?
4. Does one area treat it as identity while another treats it as a business actor or account holder?
5. Would forcing one shared definition create confusion?

## Signals of Strong Ubiquitous Language

- repeated business terms in handlers, docs, APIs, events, and tests
- stable definitions inside one workflow area
- domain verbs that match business operations
- explicit state transitions or business rules

## Signals of Weak Evidence

- generic CRUD naming only
- framework-generated classes
- DTO-heavy code with little domain language
- technical names with no business semantics

## Output Reminder

Do not treat the glossary as decoration. Use it to justify:

- candidate subdomains
- term-collision findings
- bounded-context boundaries
- context-map translation needs
