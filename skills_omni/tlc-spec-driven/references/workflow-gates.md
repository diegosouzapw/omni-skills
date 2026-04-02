# Workflow Gates

This reference defines what must exist before each phase starts, what the agent should do inside the phase, and what marks the phase as complete.

## Quick rule set

- **Specify** and **Execute** are always required.
- **Design** is required when implementation choices are not obvious.
- **Tasks** are required when work is not safely executable as a few obvious steps.
- If hidden complexity appears, reopen the earlier phase instead of improvising.

## Phase gates

| Phase | Entry conditions | Core actions | Exit conditions |
| --- | --- | --- | --- |
| Specify | User intent is known; relevant project context is loaded | Define scope, constraints, non-goals, acceptance criteria, and requirement IDs when needed | Work is understandable and testable |
| Design | Spec exists and implementation is not obvious | Choose approach, reuse patterns, interfaces, tradeoffs, and important risks | Approach is clear enough to execute safely |
| Tasks | Spec and design are clear enough to decompose | Split into atomic tasks with dependencies, done-when, and verification | Tasks are independently executable and verifiable |
| Execute | A testable intent exists | Implement one task at a time, verify, record deviations, update state | Claimed completion has evidence |

## Skip rules

### Design may be skipped when

- no architectural or interface decisions are needed
- repo patterns already make the implementation obvious
- the change is small and localized

### Tasks may be skipped when

- the work is truly only a few obvious steps
- those steps can still be listed inline before execution
- verification remains clear and narrow

## Reopen rules

Reopen **Design** or **Tasks** if execution reveals:

- additional components or dependencies
- unclear tradeoffs
- more steps than expected
- unclear verification path
- conflict with existing repo patterns

## Brownfield gate

Do not plan a non-trivial feature in an existing codebase until the repo has at least enough brownfield mapping to answer:

- what stack is in use
- where the relevant code lives
- what conventions apply
- how testing works
- what integrations or concerns may be affected

## Pause/resume gate

Before ending a session, update `STATE.md` with:

- decisions
- blockers
- assumptions
- deferred items
- exact next resume point

When resuming, validate that `STATE.md` still matches the repository before continuing.
