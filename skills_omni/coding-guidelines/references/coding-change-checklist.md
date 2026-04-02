# Coding Change Checklist

Use this checklist before editing code and again before handoff.

## Before coding

- Can you restate the request as a concrete implementation task?
- Are acceptance criteria explicit?
- If not, have you stated assumptions or asked a clarifying question?
- Did you inspect nearby code, tests, and patterns first?
- Can you name the smallest set of files likely to change?
- Does the task touch any security-sensitive surface?

## While coding

- Is every edit directly tied to the request?
- Are you matching local naming, structure, and test conventions?
- Did you avoid speculative abstractions, flags, and unrelated cleanup?
- Did you remove only the unused artifacts created by your own change?

## Before handoff

- Did you run the narrowest relevant tests or checks first?
- Did you separate pre-existing failures from regressions caused by your edit?
- Did you review the diff for unrelated changes?
- Can you explain why each changed file was necessary?
- Did you state assumptions, validation, and residual risks clearly?
- If the change is security-sensitive, did you recommend extra review where needed?
