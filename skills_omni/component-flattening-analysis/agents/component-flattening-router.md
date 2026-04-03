# Component Flattening Router

Use this note when the task no longer fits local hierarchy cleanup.

## Stay with this skill when

- the work is inside one feature, module family, or namespace
- the main problem is misplaced implementation files or unclear ownership within that boundary
- the expected result is a flattening plan plus safe file moves

## Hand off when

### Route to coupling or dependency analysis

Use another skill when the real question is:

- which modules depend on which others
- whether layering is violated
- fan-in, fan-out, or circular imports

### Route to domain grouping

Use another skill when the real question is:

- how features should be grouped
- where bounded contexts begin and end
- whether components belong to a different domain entirely

### Route to package-boundary review

Escalate when:

- changes cross package or workspace library boundaries
- package `exports` must change
- public import contracts are affected
- the move would alter published API surfaces

### Route to codemod or migration execution

Use another execution-focused skill when:

- the architecture decision is already made
- the remaining work is large-scale automated rewriting
- success depends mainly on migration tooling and batching

## Required handoff note

When handing off, include:

- the original scope reviewed
- files already classified
- why flattening alone is insufficient
- package/API/routing risks discovered
