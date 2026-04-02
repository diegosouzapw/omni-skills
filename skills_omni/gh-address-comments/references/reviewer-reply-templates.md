# Reviewer Reply Templates

Use these as starting points. Adapt them to the actual change.

## Code fix applied

```text
Updated `<path>` to address this feedback by <short description>. I also added/updated <test or validation artifact>. Validation run: `<command>`.
```

## Clarification without code change

```text
I reviewed this thread against the latest branch state and did not make a code change because <reason>. The current implementation in `<path>` already covers the concern via <brief explanation>.
```

## Outdated comment

```text
This looks outdated relative to the latest changes on the branch. The relevant logic now lives in `<path>` and the concern is handled by <brief explanation>. Happy to adjust further if you want the newer implementation changed as well.
```

## Partial follow-up

```text
Addressed the main issue in `<path>`, but I left <remaining concern> unchanged because <constraint or tradeoff>. Validation run: `<command>`. If you want, I can follow up with a separate change for the remaining piece.
```
