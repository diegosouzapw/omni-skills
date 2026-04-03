# Validation Evidence Guide

Use the lightest evidence that credibly proves the change.

## Evidence selection

| Change type | Preferred evidence | Notes |
| --- | --- | --- |
| Pure logic change | unit tests | Fastest and most targeted proof |
| Cross-component behavior | integration tests | Use when boundaries or persistence matter |
| UI copy or simple rendering change | manual verification or UI test | Record exact steps or screenshots when needed |
| User workflow or acceptance behavior | manual/UAT evidence | Useful for user-facing flows with multiple steps |
| Config or operational change | command output, smoke check, or manual confirmation | Keep proof narrow and reproducible |

## Task-level fields

Every meaningful task should include:

- **Done when:** a crisp completion statement
- **How verified:** test, command, manual step, or evidence type

## Evidence notes

Good evidence is:

- directly tied to the claimed behavior
- easy for a reviewer to understand
- proportionate to the risk and scope

Weak evidence includes:

- vague statements like "should work"
- claiming success with no test or observable proof
- only relying on broad end-to-end checks when a smaller, clearer test would be stronger
