# Context Map Template

Use this template after drafting candidate bounded contexts.

## Contexts

- Context A:
- Context B:
- Context C:

## Relationship Table

| From | To | Relationship Type | Integration Mechanism | Why this relationship fits | Confidence |
| --- | --- | --- | --- | --- | --- |

## Relationship Legend

### Customer / Supplier
Use when one context depends on another and can influence what it needs.

### Conformist
Use when a downstream context must accept the upstream model with limited negotiating power.

### Anti-Corruption Layer
Use when one context should translate another context's model to avoid leaking language or semantics.

### Open Host Service
Use when a context exposes a stable, published integration surface for others.

### Published Language
Use when contexts coordinate through a documented contract, schema, or event language.

### Shared Kernel
Use sparingly when two contexts intentionally share a small part of the model and can coordinate closely.

## Notes

- Shared libraries do not automatically imply Shared Kernel.
- Prefer explicit translation over leaking foreign terms into a local model.
- Record uncertainty explicitly when relationship type is only a hypothesis.
