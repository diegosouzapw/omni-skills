# Verification Matrix

Use this matrix to choose acceptable evidence for the task at hand.

| Task type | Preferred evidence | Acceptable fallback | Must be stated if missing |
| --- | --- | --- | --- |
| Bug fix | failing repro now passes; targeted regression test | manual repro steps with exact inputs | environment gap, unproven assumptions |
| Small feature | targeted tests; manual path walkthrough | lint/typecheck plus precise manual checks | untested edge cases |
| Refactor | unchanged tests; diff review; typecheck | targeted smoke check on affected path | behavioral assumptions |
| Flow explanation | file/symbol trace; note reviewed against source | developer confirmation after walkthrough | ambiguous branches or unknown runtime paths |
| External API/library usage | official docs plus targeted code/test evidence | repository-native examples or existing call sites | uncertain contract details |

## Minimum verification checklist

- Verify each planned step.
- Review changed scope, not just test output.
- Confirm external boundaries if they matter.
- State what was not verified automatically.
- Provide manual validation steps when needed.

## Manual validation format

Use this structure when automatic verification is unavailable:

```text
Could not verify automatically:
- [what could not be run]

Assumptions:
- [environment, data, flag, service assumptions]

Manual checks:
1. [step]
2. [step]
3. [expected outcome]

Residual risk:
- [what may still be wrong]
```
