# Definition of Ready for Specs

Use this gate before generating an implementation plan or creating tasks.

## A spec is ready to plan when

Most of the following are clear enough to support execution:

- problem statement
- desired outcome
- scope boundaries
- acceptance criteria
- important constraints
- key dependencies
- unresolved risks are visible

## A spec is not ready to plan when

One or more of the following would force the operator to guess:

- no meaningful acceptance criteria
- unclear or conflicting scope
- contradictory requirements
- missing dependency context that changes sequencing
- unclear source of truth among multiple pages
- unclear ownership or approval state when that affects execution

## Decision rule

### Ready to plan
Proceed with:
- implementation summary
- plan page creation
- task decomposition after schema validation

### Not ready to plan
Do one of these instead:
- ask focused clarification questions
- create a clarification summary
- create a provisional plan only if assumptions are explicit and the user approves

## Good clarification questions

Ask targeted questions such as:
- Which acceptance criteria are mandatory for the first release?
- Is data migration in scope or out of scope?
- Which existing system is the source of truth for permissions or status?
- Should rollout happen behind a flag, phased release, or full launch?
- Which dependencies must be completed first?

## Output note

If the answer is not ready, say so directly. A clean “not ready to plan” decision is safer than a confident but fabricated plan.
