# Debugging Checklist

## Reproduction

- State the failing behavior, expected behavior, and exact trigger.
- Reduce the failing case until the signal is stable and observable.
- Capture the environment, inputs, and recent regressions.

## Investigation

- Gather logs, traces, diffs, and runtime facts before choosing a fix.
- Separate symptoms from hypotheses.
- Prefer narrow instrumentation that disproves or confirms a branch quickly.

## Resolution

- Fix the root cause, not only the visible symptom.
- Add a regression test or a repeatable verification step.
- Document the confidence level and remaining unknowns.
