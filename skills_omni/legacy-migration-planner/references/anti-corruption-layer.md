# Anti-Corruption Layer Guidance

Use an anti-corruption layer when the new domain or service must coexist with a legacy model that should not leak into the target design.

## When to Use

Use this pattern when:

- legacy data structures or API shapes do not match the target model
- consumers depend on legacy semantics that cannot change immediately
- the team needs a translation boundary during coexistence
- a direct dependency on legacy code would contaminate the new design

## What It Does

An anti-corruption layer translates between legacy and target representations.

It may include:

- request/response mapping
- terminology mapping
- error translation
- state translation
- compatibility shims for auth, sessions, identifiers, or status codes

## Planning Questions

For each seam, answer:

- what legacy concepts must be translated?
- which side owns the canonical model during coexistence?
- how will errors and edge cases be mapped?
- where will translation logic live?
- how will translation behavior be tested?
- when can the layer be removed?

## Common Mistakes

- treating the anti-corruption layer as a permanent dumping ground
- translating only happy-path payloads and ignoring errors
- omitting auth/session behavior from compatibility planning
- assuming data models can diverge without explicit mapping rules

## Output Expectations

In the migration plan, record:

- why the layer is needed
- its location in the invocation path
- interfaces translated
- test strategy
- retirement criteria
