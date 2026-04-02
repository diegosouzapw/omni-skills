# Lighthouse Budgets and Assertions

Use budgets and assertions for different purposes.

## When to use `budget.json`

Use a Lighthouse budget file when you want to express limits for:

- resource sizes
- resource counts
- supported timing budgets

This is useful when you want a versioned budget policy that is close to Lighthouse budget support.

## When to use LHCI assertions

Use LHCI assertions when you want CI logic such as:

- fail if performance score is below a threshold
- fail if LCP or CLS exceeds a limit
- warn on accessibility score drops

Assertions are the better fit for CI gating and automation logic.

## Recommendation

For mature workflows:

- keep a versioned `budget.json` for budget policy
- keep `lighthouserc.js` assertions for CI pass/fail behavior
- retain artifacts whether the run passes or fails

## Example split

- `examples/budget.json` controls resource and timing budgets
- `examples/lighthouserc.js` controls collect/assert/upload behavior

## Caution

Do not rely on the aggregate score alone when writing assertions. Prefer a mix of category thresholds and specific metric thresholds where they better match the team's tolerance for regressions.
