# ADR Format Selection

## Default recommendation

Use **MADR** by default. It gives enough structure for most real decisions and makes alternatives and consequences explicit.

## Pick MADR when

- the decision has meaningful trade-offs
- multiple alternatives were considered
- reviewers need clear rationale
- the repository already uses structured ADRs

## Pick Nygard when

- the decision is straightforward
- the team prefers a minimal template
- alternatives exist but do not need a long comparison section

## Pick Y-Statement when

- the team explicitly prefers compact ADRs
- the decision is simple enough to summarize in one paragraph
- the ADR will likely live inline with other concise architectural notes

## Comparison table

| Format | Best for | Strength | Limitation |
| --- | --- | --- | --- |
| MADR | Most repository ADRs | Strong rationale and alternatives | Slightly more ceremony |
| Nygard | Simple, durable records | Fast and clear | Less structured comparison |
| Y-Statement | Very compact records | Minimal footprint | Easy to omit important nuance |

## Practical rule

If you are unsure, start with MADR. It is easier to simplify a structured ADR than to recover missing rationale from an underspecified one.
