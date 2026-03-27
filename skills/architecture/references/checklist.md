# Architecture Checklist

## Boundaries

- Identify owners, system boundaries, and major integration seams.
- Separate platform constraints from product decisions.
- Make tradeoffs explicit instead of hiding them in diagrams.

## Decision Quality

- State why an option was selected and what was rejected.
- Capture scale, latency, consistency, and operability assumptions.
- Note which parts are reversible and which are expensive to unwind.

## Delivery Impact

- Describe migration steps, rollout risk, and fallback paths.
- List the metrics or signals that would prove the design is working.
- Keep implementation guidance aligned with the chosen boundary model.
