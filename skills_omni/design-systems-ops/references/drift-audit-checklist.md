# Drift Audit Checklist

Use this checklist when design, code, stories, docs, or production appear out of sync.

## Audit surfaces

Review the same component or token set across:

- design source
- token definitions or variable collections
- implementation code
- Storybook stories or equivalent demos
- docs site examples
- known production usage

## Check for drift in

- naming
- variant list
- default props or defaults
- supported states
- semantic meaning
- spacing and layout behavior
- responsive behavior
- keyboard interaction
- semantics and ARIA usage
- theme or mode behavior
- docs and migration guidance

## Record for each mismatch

- item name
- mismatch summary
- artifact A
- artifact B
- likely authority
- risk level
- affected consumers
- owner
- recommended fix order

## Fix order guidance

1. Decide authority.
2. Update shipping truth first when consumer breakage exists.
3. Update stories and docs so review surfaces match the shipped contract.
4. Update design source if intent changed, or implementation if design was authoritative.
5. Publish migration guidance if a consumer-visible contract changed.

## Do not

- do not call a drift issue resolved just because screenshots match
- do not update docs without fixing the underlying contract mismatch
- do not assume production overrides are part of the shared system contract
