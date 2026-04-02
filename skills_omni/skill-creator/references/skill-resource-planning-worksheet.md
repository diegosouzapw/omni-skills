# Skill Resource Planning Worksheet

Use this worksheet to map real requests into reusable skill resources.

## Step 1: List representative requests

Capture 3-5 real or realistic prompts.

For each one, note:

- input type
- expected output
- tools involved
- repeated steps
- fragile or error-prone steps

## Step 2: Decide what becomes reusable

### Put it in `scripts/` when

- the same code would be rewritten repeatedly
- deterministic execution matters
- the task is fragile and benefits from a tested helper

### Put it in `references/` when

- another agent needs domain knowledge in context
- the content explains schemas, APIs, policies, or procedures
- the material is read more often than executed

### Put it in `assets/` when

- the file is part of the output or production material
- it should be copied, modified, or embedded
- it is not mainly explanatory text

### Put it in `examples/` when

- a worked example will help operators apply the workflow consistently
- validator errors or trigger patterns benefit from side-by-side examples

## Step 3: Reject low-value resources

Do not add a file unless it clearly saves repeated work.

Anti-patterns:

- empty support directories
- generic notes duplicated from `SKILL.md`
- untested scripts
- placeholder files left in place after real implementation starts

## Decision matrix

| Need | Best location |
| --- | --- |
| Deterministic repeated action | `scripts/` |
| Detailed procedural or domain guidance | `references/` |
| Template or output material | `assets/` |
| Worked example or comparison set | `examples/` |
| Trigger boundary and navigation | `SKILL.md` |
