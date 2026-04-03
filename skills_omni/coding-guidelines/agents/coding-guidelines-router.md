# Coding Guidelines Router

Use this router when the current task no longer fits a bounded implementation workflow.

## Route to debugging

Choose debugging when the main problem is still discovering root cause rather than implementing a known fix.

## Route to testing

Choose testing when test strategy, flaky behavior, or coverage design is the main task.

## Route to security review

Choose security review when the change materially affects auth, secrets, permissions, supply chain risk, command execution, or untrusted input handling.

## Route to architecture or design

Choose architecture or design when the request requires new boundaries, major tradeoffs, or system-level decisions.

## Route to dependency or CI troubleshooting

Choose dependency or CI troubleshooting when build failures, package resolution, or pipeline instability dominate.

## Preserve during handoff

Carry forward:

- the user request
- assumptions made
- files inspected or changed
- validation already attempted
- remaining uncertainty and risk
