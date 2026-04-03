# Bounded Context Validation Checklist

Use this checklist before recommending consolidation.

## Capability identity

- [ ] Do the candidate components serve the same business capability?
- [ ] Do they operate on the same core concepts and vocabulary?
- [ ] Do they enforce the same invariants or business rules?
- [ ] Are the triggers and entry points materially similar?

## Data and behavior

- [ ] Are inputs and outputs compatible?
- [ ] Are important differences only configuration or templates, not business semantics?
- [ ] Would a shared abstraction stay understandable without many context-specific exceptions?

## Ownership and context

- [ ] Are the components owned by the same team or by teams with aligned governance?
- [ ] Do they belong to the same bounded context or subdomain?
- [ ] Would consolidation blur product, compliance, or organizational boundaries?

## Decision rule

- If most answers are yes, consolidation may be justified.
- If several answers are unclear, lower confidence and collect more evidence.
- If core semantics differ, keep the components separate even if names match.
