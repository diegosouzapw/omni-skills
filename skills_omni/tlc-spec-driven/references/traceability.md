# Traceability Guide

Traceability keeps planning, execution, and verification connected.

## Minimum expectation

For large or complex work, carry identifiers across the workflow:

- requirement IDs in `spec.md`
- task references in `tasks.md`
- validation evidence in summaries or task notes
- commit references when practical

## Example mini-matrix

| Requirement | Acceptance criteria | Task | Verification | Commit note |
| --- | --- | --- | --- | --- |
| REQ-1 | Unauthorized users cannot open settings | T-01 add backend permission guard | integration test for denied access | `feat(auth): add settings guard [REQ-1]` |
| REQ-2 | Unauthorized users do not see settings controls | T-02 hide UI actions | UI test or manual verification | `feat(ui): hide settings controls [REQ-2]` |
| REQ-3 | Authorized users retain access | T-03 preserve existing allowed flow | regression or integration evidence | `test(auth): cover allowed access [REQ-3]` |

## Practical rules

- Not every tiny task needs a formal ID, but large work should be traceable.
- If a requirement changes, update downstream tasks and validation notes.
- If implementation deviates from the spec, record the deviation explicitly rather than silently changing traceability.
- Keep the traceability lightweight; do not turn it into bureaucracy for small changes.
